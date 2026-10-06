import { TOWERS, BLOONS, HEROES, PARAGONS, DIFFICULTIES, MODES, MAPS, ROUND_SPECIALS } from './data.js';
import { fireTowerBehavior, applyTowerBehaviorUpgrades } from './tower-behaviors.js';
import { MasteryProfile } from './mastery.js';

export const GameState = {
  MENU: 'menu',
  SETUP: 'setup',
  PLAYING: 'playing',
  GAME_OVER: 'game-over',
  VICTORY: 'victory',
  PAUSED: 'paused'
};

const TAU = Math.PI * 2;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const lerp = (a,b,t) => a + (b-a)*t;
const dist2 = (a,b) => { const dx=a.x-b.x, dy=a.y-b.y; return dx*dx+dy*dy; };
const random = (min,max) => min + Math.random() * (max-min);
const chance = p => Math.random() < p;
const now = () => performance.now() / 1000;

export class Vec2 {
  constructor(x=0,y=0){this.x=x;this.y=y;}
  set(x,y){this.x=x;this.y=y;return this;}
  copy(){return new Vec2(this.x,this.y);}
  add(v){this.x+=v.x;this.y+=v.y;return this;}
  sub(v){this.x-=v.x;this.y-=v.y;return this;}
  mul(s){this.x*=s;this.y*=s;return this;}
  len(){return Math.hypot(this.x,this.y);}
  norm(){const l=this.len()||1;this.x/=l;this.y/=l;return this;}
  distance(v){return Math.hypot(this.x-v.x,this.y-v.y);}
  static fromAngle(a,s=1){return new Vec2(Math.cos(a)*s,Math.sin(a)*s);}
}

export class PathCurve {
  constructor(points){
    this.points = points.map(p => new Vec2(p.x,p.y));
    this.segmentLengths = [];
    this.cumulative = [0];
    for(let i=1;i<this.points.length;i++){
      const len=this.points[i-1].distance(this.points[i]);
      this.segmentLengths.push(len);
      this.cumulative.push(this.cumulative[this.cumulative.length-1]+len);
    }
    this.length=this.cumulative[this.cumulative.length-1]||1;
  }
  pointAtDistance(d){
    const distance=clamp(d,0,this.length);
    for(let i=1;i<this.cumulative.length;i++){
      if(distance<=this.cumulative[i]){
        const start=this.cumulative[i-1];
        const t=(distance-start)/Math.max(.0001,this.segmentLengths[i-1]);
        const a=this.points[i-1],b=this.points[i];
        return new Vec2(lerp(a.x,b.x,t),lerp(a.y,b.y,t));
      }
    }
    const p=this.points[this.points.length-1];
    return p.copy();
  }
  tangentAtDistance(d){
    const eps=2;
    const a=this.pointAtDistance(Math.max(0,d-eps));
    const b=this.pointAtDistance(Math.min(this.length,d+eps));
    return b.sub(a).norm();
  }
  nearestPoint(point){
    let best={distance:Infinity,distAlong:0};
    for(let i=1;i<this.points.length;i++){
      const a=this.points[i-1],b=this.points[i];
      const abx=b.x-a.x,aby=b.y-a.y;
      const denom=abx*abx+aby*aby||1;
      const t=clamp(((point.x-a.x)*abx+(point.y-a.y)*aby)/denom,0,1);
      const q={x:a.x+abx*t,y:a.y+aby*t};
      const dd=Math.hypot(point.x-q.x,point.y-q.y);
      if(dd<best.distance){best.distance=dd;best.distAlong=this.cumulative[i-1]+this.segmentLengths[i-1]*t;}
    }
    return best;
  }
}

export class Particle {
  constructor(x,y,options={}){
    this.x=x;this.y=y;
    this.vx=options.vx||random(-30,30);
    this.vy=options.vy||random(-30,30);
    this.life=options.life||.5;
    this.maxLife=this.life;
    this.size=options.size||random(2,5);
    this.color=options.color||'#ffffff';
    this.gravity=options.gravity||0;
    this.drag=options.drag||0;
    this.shape=options.shape||'circle';
  }
  update(dt){
    this.life-=dt;
    this.vx*=Math.max(0,1-this.drag*dt);
    this.vy*=Math.max(0,1-this.drag*dt);
    this.vy+=this.gravity*dt;
    this.x+=this.vx*dt;
    this.y+=this.vy*dt;
    return this.life>0;
  }
  draw(ctx,camera){
    const a=clamp(this.life/this.maxLife,0,1);
    ctx.save();
    ctx.globalAlpha=a;
    ctx.fillStyle=this.color;
    ctx.translate(this.x-camera.x,this.y-camera.y);
    if(this.shape==='square') ctx.fillRect(-this.size/2,-this.size/2,this.size,this.size);
    else {ctx.beginPath();ctx.arc(0,0,this.size*a,0,TAU);ctx.fill();}
    ctx.restore();
  }
}

export class FloatingText {
  constructor(x,y,text,color='#ffffff',size=13){this.x=x;this.y=y;this.text=text;this.color=color;this.size=size;this.life=1.0;this.maxLife=1.0;}
  update(dt){this.life-=dt;this.y-=28*dt;return this.life>0;}
  draw(ctx,camera){
    ctx.save();ctx.globalAlpha=clamp(this.life*1.4,0,1);ctx.font=`700 ${this.size}px system-ui`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=this.color;ctx.strokeStyle='rgba(0,0,0,.45)';ctx.lineWidth=3;
    ctx.strokeText(this.text,this.x-camera.x,this.y-camera.y);ctx.fillText(this.text,this.x-camera.x,this.y-camera.y);ctx.restore();
  }
}

export class Projectile {
  constructor(game,options={}){
    this.game=game;
    this.x=options.x||0;this.y=options.y||0;
    this.vx=options.vx||0;this.vy=options.vy||0;
    this.speed=options.speed||500;
    this.radius=options.radius||5;
    this.damage=options.damage||1;
    this.pierce=options.pierce??1;
    this.maxPierce=this.pierce;
    this.color=options.color||'#ffffff';
    this.life=options.life||3;
    this.target=options.target||null;
    this.homing=options.homing??false;
    this.turnRate=options.turnRate||8;
    this.burst=options.burst||0;
    this.chain=options.chain||0;
    this.owner=options.owner||null;
    this.bossBonus=options.bossBonus||0;
    this.moabBonus=options.moabBonus||0;
    this.crit=options.crit||0;
    this.armorPierce=options.armorPierce||false;
    this.explosionImmune=options.explosionImmune||false;
    this.kind=options.kind||'dart';
    this.alreadyHit=new Set();
    this.dead=false;
  }
  update(dt){
    if(this.dead)return false;
    this.life-=dt;
    if(this.homing&&this.target&&!this.target.dead){
      const desired=Math.atan2(this.target.y-this.y,this.target.x-this.x);
      const current=Math.atan2(this.vy,this.vx);
      let delta=((desired-current+Math.PI*3)%TAU)-Math.PI;
      const next=current+clamp(delta,-this.turnRate*dt,this.turnRate*dt);
      this.vx=Math.cos(next)*this.speed;this.vy=Math.sin(next)*this.speed;
    } else if(this.speed>0){
      const len=Math.hypot(this.vx,this.vy)||1;this.vx=this.vx/len*this.speed;this.vy=this.vy/len*this.speed;
    }
    this.x+=this.vx*dt;this.y+=this.vy*dt;
    const candidates=this.game.bloons;
    for(const bloon of candidates){
      if(bloon.dead||this.alreadyHit.has(bloon.id))continue;
      const rr=this.radius+bloon.radius;
      if((this.x-bloon.x)**2+(this.y-bloon.y)**2<=rr*rr){
        this.game.resolveProjectileHit(this,bloon);
        this.alreadyHit.add(bloon.id);
        this.pierce--;
        if(this.pierce<0){this.dead=true;break;}
      }
    }
    if(this.life<=0)this.dead=true;
    if(this.x<-250||this.y<-250||this.x>this.game.worldWidth+250||this.y>this.game.worldHeight+250)this.dead=true;
    return !this.dead;
  }
  draw(ctx,camera){
    const angle=Math.atan2(this.vy,this.vx);
    ctx.save();ctx.translate(this.x-camera.x,this.y-camera.y);ctx.rotate(angle);
    ctx.fillStyle=this.color;ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=1;
    if(this.kind==='rocket'){
      ctx.beginPath();ctx.moveTo(9,0);ctx.lineTo(-6,-4);ctx.lineTo(-10,0);ctx.lineTo(-6,4);ctx.closePath();ctx.fill();ctx.stroke();
    } else if(this.kind==='disc'){
      ctx.beginPath();ctx.arc(0,0,this.radius,0,TAU);ctx.fill();ctx.fillStyle='rgba(255,255,255,.35)';ctx.fillRect(-2,-this.radius,4,this.radius*2);
    } else {
      ctx.beginPath();ctx.arc(0,0,this.radius,0,TAU);ctx.fill();ctx.stroke();
    }
    ctx.restore();
  }
}

let nextId = 1;

export class Bloon {
  constructor(game,type,pathIndex,spawnDistance=0,scale=1){
    const base=BLOONS[type]||BLOONS.red;
    this.id=nextId++;
    this.game=game;
    this.type=type;
    this.base=base;
    this.pathIndex=pathIndex;
    this.distance=spawnDistance;
    this.hp=Math.max(1,Math.round(base.hp*scale));
    this.maxHp=this.hp;
    this.speed=base.speed*game.difficulty.bloonSpeed;
    this.radius=base.radius;
    this.reward=base.rbe*game.difficulty.rewardMult;
    this.damage=base.damage;
    this.color=base.color;
    this.dead=false;
    this.slow=1;
    this.freeze=0;
    this.stun=0;
    this.burn=0;
    this.burnDamage=0;
    this.tags=new Set();
    if(base.stealth)this.tags.add('stealth');
    this.armored=!!base.armored;
    this.boss=!!base.boss;
    this.age=0;
    this.cashGiven=false;
    this.path=this.game.paths[pathIndex];
    const p=this.path.pointAtDistance(0);
    this.x=p.x;this.y=p.y;
  }
  get progress(){return this.distance/this.path.length;}
  update(dt){
    if(this.dead)return false;
    this.age+=dt;
    if(this.freeze>0){this.freeze-=dt;return true;}
    if(this.stun>0){this.stun-=dt;return true;}
    this.slow=clamp(this.slow,.1,1);
    this.distance+=this.speed*this.slow*dt;
    if(this.burn>0){
      this.burn-=dt;
      const tick=Math.max(.01,dt*this.burnDamage);
      this.takeDamage(tick,null,{ignoreArmor:true,noChildren:false});
    }
    const p=this.path.pointAtDistance(this.distance);
    this.x=p.x;this.y=p.y;
    if(this.distance>=this.path.length){this.leak();return false;}
    return true;
  }
  takeDamage(amount,source=null,options={}){
    if(this.dead)return {damage:0,killed:false};
    let dmg=Math.max(0,amount);
    if(this.armored&&!options.ignoreArmor&&!source?.armorPierce)dmg*=.55;
    if(this.boss)dmg*=options.bossMult||1;
    this.hp-=dmg;
    this.game.spawnText(this.x,this.y-10,`-${Math.max(1,Math.round(dmg))}`,'#ffd1d1',10);
    if(this.hp<=0){this.destroy(source);return {damage:dmg,killed:true};}
    return {damage:dmg,killed:false};
  }
  destroy(source=null){
    if(this.dead)return;
    this.dead=true;
    this.game.onBloonPopped(this);
    if(this.base.children?.length){
      const splitCount=this.base.children.length;
      const spread=(this.base.radius+14);
      for(let i=0;i<splitCount;i++){
        const childType=this.base.children[i];
        const child=new Bloon(this.game,childType,this.pathIndex,Math.max(0,this.distance-random(4,18)),this.game.freeplayScale(.95));
        const off=(i-(splitCount-1)/2)*spread;
        child.x+=off;child.y+=off*.22;
        this.game.bloons.push(child);
      }
    }
    this.game.spawnBurst(this.x,this.y,this.color,this.boss?34:12);
  }
  leak(){
    if(this.dead)return;
    this.dead=true;
    this.game.lives=Math.max(0,this.game.lives-this.damage);
    this.game.spawnText(this.x,this.y-20,`-${this.damage} ♥`,'#ff7777',13);
    this.game.toast(`${this.base.name} leaked`, 'danger');
    if(this.game.lives<=0)this.game.endGame(false);
  }
  draw(ctx,camera){
    if(this.dead)return;
    const x=this.x-camera.x,y=this.y-camera.y;
    ctx.save();
    if(this.tags.has('stealth')&&!this.game.hasGlobalStealth && !this.game.selectedHasStealth){ctx.globalAlpha=.35;}
    ctx.translate(x,y);
    const grad=ctx.createRadialGradient(-this.radius*.3,-this.radius*.35,1,0,0,this.radius*1.2);
    grad.addColorStop(0,'rgba(255,255,255,.6)');grad.addColorStop(.22,this.color);grad.addColorStop(1,'rgba(0,0,0,.2)');
    ctx.fillStyle=grad;ctx.beginPath();ctx.ellipse(0,0,this.radius,this.radius*.83,0,0,TAU);ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,.35)';ctx.lineWidth=2;ctx.stroke();
    if(this.boss){
      ctx.strokeStyle='rgba(255,255,255,.38)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,this.radius+4,-Math.PI/2,Math.PI*1.3);ctx.stroke();
    }
    if(this.maxHp>1){
      const w=this.radius*2.2,h=4;ctx.fillStyle='rgba(0,0,0,.4)';ctx.fillRect(-w/2,-this.radius-9,w,h);ctx.fillStyle=this.boss?'#ffb05c':'#71e69c';ctx.fillRect(-w/2,-this.radius-9,w*clamp(this.hp/this.maxHp,0,1),h);
    }
    ctx.restore();
  }
}

export class Tower {
  constructor(game,id,x,y){
    const def=TOWERS[id];
    this.game=game;this.def=def;this.id=id;this.uid=nextId++;
    this.x=x;this.y=y;
    this.levels=[0,0,0];
    this.sold=false;
    this.targetMode='first';
    this.cooldown=random(0,.15);
    this.incomeTimer=0;
    this.abilityCooldowns={};
    this.totalInvested=def.cost;
    this.towerXp=0;
    this.paragon=false;
    this.highlight=0;
    this.angle=0;
    this.lastTarget=null;
    this.activeBuff={damage:0,pierce:0,speed:0,range:0};
    this.isSupport=!!def.isSupport;
    this.isSpike=!!def.isSpike;
    applyTowerBehaviorUpgrades(this);
    this.recalculate();
  }
  pathTier(path){return this.levels[path]||0;}
  primaryPath(){return this.levels.indexOf(Math.max(...this.levels));}
  canUpgrade(path){
    const tier=this.levels[path];
    if(tier>=5)return false;
    const next=tier+1;
    const otherA=this.levels[(path+1)%3];
    const otherB=this.levels[(path+2)%3];
    // Crosspath rule: a path that reaches tier 3+ locks every other path at tier 2.
    // Tier 1 and Tier 2 crosspaths remain available even when another path is tier 3+.
    if(next>=3 && (otherA>=3 || otherB>=3))return false;
    return true;
  }
  upgradeCost(path){
    const tier=this.levels[path];
    if(tier>=5)return Infinity;
    const up=this.def.paths[path][tier];
    if(!up)return Infinity;
    const otherSum=this.levels.reduce((a,v,i)=>i===path?a:a+v,0);
    const penalty=otherSum>=2?1.07:1;
    return Math.ceil(up.cost*penalty*this.game.getUpgradeCostMultiplier());
  }
  buyUpgrade(path){
    if(this.paragon)return false;
    if(!this.canUpgrade(path))return false;
    const tier=this.levels[path];
    const upgrade=this.def.paths[path][tier];
    if(!upgrade)return false;
    const cost=this.upgradeCost(path);
    if(this.game.cash<cost)return false;
    this.game.cash-=cost;
    this.levels[path]++;
    this.totalInvested+=cost;
    this.applyUpgradeEffects(upgrade.effects);
    this.game.spawnText(this.x,this.y-38,`T${path+1}-${tier+1}`,'#8fe9ff',11);
    this.game.toast(`${this.def.name}: ${upgrade.name}`,'good');
    applyTowerBehaviorUpgrades(this);
    this.recalculate();
    return true;
  }
  applyUpgradeEffects(effects={}){
    if(effects.range)this.extraRange=(this.extraRange||0)+effects.range;
    if(effects.damage)this.extraDamage=(this.extraDamage||0)+effects.damage;
    if(effects.pierce)this.extraPierce=(this.extraPierce||0)+effects.pierce;
    if(effects.attackRate)this.attackRateOverride=effects.attackRate;
    if(effects.count)this.extraCount=(this.extraCount||1)+effects.count-1;
    if(effects.speed)this.extraSpeed=(this.extraSpeed||0)+effects.speed;
    if(effects.burn)this.burnLevel=(this.burnLevel||0)+effects.burn;
    if(effects.burst)this.burstLevel=(this.burstLevel||0)+effects.burst;
    if(effects.rockets)this.rocketCount=(this.rocketCount||0)+effects.rockets;
    if(effects.missile)this.missileCount=(this.missileCount||0)+effects.missile;
    Object.keys(effects).forEach(k=>{if(!['range','damage','pierce','attackRate','count','speed','burn','burst','rockets','missile'].includes(k)){this[k]=Math.max(this[k]||0,effects[k]);}});
  }
  recalculate(){
    this.effectiveRange=(this.def.range===9999?9999:this.def.range+(this.extraRange||0));
    this.effectiveDamage=this.def.damage+(this.extraDamage||0);
    this.effectivePierce=Math.max(0,this.def.pierce+(this.extraPierce||0));
    this.effectiveRate=this.attackRateOverride||this.def.attackRate;
    this.effectiveCount=this.extraCount||1;
    this.effectiveSpeed=this.def.projectileSpeed+(this.extraSpeed||0);
    this.isStealth=!!this.stealth||this.game.hasGlobalStealth||!!this.globalStealth;
  }
  sellValue(){
    const multiplier=.7+(this.sellBonus||0);
    return Math.floor(this.totalInvested*multiplier);
  }
  getRange(){
    this.recalculate();
    return this.effectiveRange||this.def.range;
  }
  update(dt){
    if(this.sold||this.paragon)return;
    this.highlight=Math.max(0,this.highlight-dt);
    this.cooldown-=dt;
    this.incomeTimer-=dt;
    this.recalculate();
    this.applyNearbyBuffs();
    if(this.isSpike){this.updateSpike(dt);return;}
    if(this.isSupport){this.updateSupport(dt);return;}
    if(this.effectiveRate>=50)return;
    if(this.cooldown<=0){
      const target=this.selectTarget();
      if(target){this.fireAt(target);this.cooldown=Math.max(.045,this.effectiveRate*(1-this.game.globalSpeedBonus-this.localSpeedBonus));}
    }
  }
  applyNearbyBuffs(){
    this.localSpeedBonus=0;this.localDamageBonus=0;this.localPierceBonus=0;this.localRangeBonus=0;
    for(const tower of this.game.towers){
      if(tower===this||tower.sold||!tower.def.isSupport)continue;
      const d=Math.hypot(this.x-tower.x,this.y-tower.y);
      const r=tower.getRange()+18;
      if(d<=r){
        this.localSpeedBonus+=tower.buffSpeed||0;
        this.localDamageBonus+=tower.buffDamage||0;
        this.localPierceBonus+=tower.buffPierce||0;
        this.localRangeBonus+=tower.buffRange||0;
      }
    }
  }
  updateSupport(dt){
    this.incomeTimer+=dt;
    const interval=this.incomeRate||30;
    if((this.income||0)>0 && this.incomeTimer>=interval){
      const cycles=Math.floor(this.incomeTimer/interval);this.incomeTimer-=cycles*interval;
      let value=this.income*cycles*this.game.difficulty.rewardMult;
      if(this.game.mode.id==='halfCash')value*=.5;
      this.game.cash+=Math.floor(value);
      this.game.spawnText(this.x,this.y-32,`+$${Math.floor(value)}`,'#ffe777',12);
    }
    if((this.lifeIncome||0)>0 && this.incomeTimer>=18){this.game.lives+=this.lifeIncome;this.incomeTimer=0;}
    if(this.turret){
      if(this.cooldown<=0){
        const target=this.selectTarget(true);
        if(target){this.fireAt(target,true);this.cooldown=.65/(1+this.turret*.07);}
      }
    }
  }
  updateSpike(dt){
    if(!this.spikes)this.spikes=[];
    this.incomeTimer+=dt;
    const interval=this.effectiveRate>=50?1.2:this.effectiveRate;
    if(this.incomeTimer>=interval){
      this.incomeTimer=0;
      const count=Math.max(1,this.effectiveCount||1);
      for(let i=0;i<count;i++){
        const p=clamp(this.game.randomPathIndex(),0,this.game.paths.length-1);
        this.spikes.push({pathIndex:p,distance:0,damage:this.effectiveDamage, pierce:this.effectivePierce,life:22});
      }
    }
    for(const spike of this.spikes){
      spike.life-=dt;
      for(const bloon of this.game.bloons){
        if(bloon.dead||bloon.pathIndex!==spike.pathIndex)continue;
        if(Math.abs(bloon.distance-spike.distance)<28){
          bloon.takeDamage(spike.damage+this.localDamageBonus,this,{bossMult:this.bossBonus?1.6:1});
          spike.pierce--;
          if(spike.pierce<=0)break;
        }
      }
    }
    this.spikes=this.spikes.filter(s=>s.life>0&&s.pierce>0);
  }
  selectTarget(forceStrong=false){
    const range=this.getRange()+this.localRangeBonus;
    const r2=range*range;
    let candidates=this.game.bloons.filter(b=>!b.dead&&dist2(this,b)<=r2&&this.canSee(b));
    if(!candidates.length)return null;
    const mode=forceStrong?'strong':this.targetMode;
    if(mode==='first')return candidates.sort((a,b)=>b.distance-a.distance)[0];
    if(mode==='last')return candidates.sort((a,b)=>a.distance-b.distance)[0];
    if(mode==='close')return candidates.sort((a,b)=>dist2(this,a)-dist2(this,b))[0];
    if(mode==='weak')return candidates.sort((a,b)=>a.hp-b.hp)[0];
    if(mode==='strong')return candidates.sort((a,b)=>b.hp-a.hp)[0];
    return candidates[0];
  }
  canSee(bloon){
    if(bloon.tags.has('stealth')&&!this.isStealth)return false;
    if(this.def.id==='bomb'&&bloon.base.immune==='explosion')return false;
    if(this.def.id==='ice'&&bloon.base.immune==='freeze')return false;
    return true;
  }
  fireAt(target,isTurret=false){
    if(fireTowerBehavior(this,target)){
      this.angle=Math.atan2(target.y-this.y,target.x-this.x);
      this.lastTarget=target;
      return;
    }
    const count=Math.max(1,this.effectiveCount||1);
    const damage=Math.max(1,Math.round(this.effectiveDamage+this.localDamageBonus+this.game.globalDamageBonus));
    const pierce=Math.max(1,Math.round(this.effectivePierce+this.localPierceBonus+this.game.globalPierceBonus));
    const angle=Math.atan2(target.y-this.y,target.x-this.x);
    for(let i=0;i<count;i++){
      let a=angle;
      if(count>1)a+=((i-(count-1)/2)*.12);
      const v=Vec2.fromAngle(a,this.effectiveSpeed||500);
      const p=new Projectile(this.game,{x:this.x,y:this.y,vx:v.x,vy:v.y,speed:this.effectiveSpeed||500,radius:this.def.projectileRadius||5,damage:damage,pierce:pierce,color:this.def.color,target:target,homing:this.rocketCount>0||this.def.id==='ace',turnRate:7,burst:this.burstLevel||0,chain:this.chain||0,owner:this,bossBonus:this.bossBonus||0,moabBonus:this.moabBonus||0,crit:this.crit||0,armorPierce:this.armorPierce||false,kind:this.rocketCount?'rocket':(this.def.id==='boomer'?'disc':'dart')});
      this.game.projectiles.push(p);
    }
    if(this.burnLevel){target.burn=Math.max(target.burn,1.8);target.burnDamage=this.burnLevel+damage*.25;}
    if(this.slow){target.slow=Math.min(target.slow,this.slow);}
    if(this.freeze){target.freeze=Math.max(target.freeze,this.freeze);}
    if(this.knockback&&!target.boss){target.distance=Math.max(0,target.distance-this.knockback*8);}
    if(this.fieldDamage)target.takeDamage(this.fieldDamage*.25,this);
    this.angle=angle;
    this.lastTarget=target;
  }
  getParagonRecipe(){
    if(this.paragon||!PARAGONS[this.id])return null;
    const matches=[null,null,null];
    for(const t of this.game.towers){
      if(t.sold||t.paragon||t.id!==this.id)continue;
      for(let p=0;p<3;p++)if(t.levels[p]===5&&!matches[p]){matches[p]=t;break;}
    }
    if(matches.every(Boolean))return matches;
    // A single fully committed tower can stand in for exactly one sacrifice branch;
    // three physical Tier-5 towers are still required overall.
    return null;
  }
  createParagon(){
    const recipe=this.getParagonRecipe();
    if(!recipe)return false;
    const pDef=PARAGONS[this.id];
    if(this.game.towers.some(t=>!t.sold&&t.paragon&&t.id===this.id))return false;
    if(this.game.cash<pDef.cost){this.game.toast(`Need ${pDef.cost.toLocaleString()} cash for this Paragon`,'danger');return false;}
    const sacrifices=[...recipe];
    const resultTower=sacrifices.includes(this)?this:sacrifices[0];
    const invested=sacrifices.reduce((sum,t)=>sum+t.totalInvested,0);
    const degree=clamp(1+Math.floor((invested-18000)/4500),1,100);
    for(const tower of sacrifices){
      if(tower===resultTower){
        tower.paragon=true;
        tower.levels=[0,0,0];
        tower.totalInvested=invested;
      } else {
        tower.sold=true;
      }
    }
    this.game.cash-=pDef.cost;
    resultTower.paragon=true;
    resultTower.paragonDegree=degree;
    resultTower.effectiveDamage=120+degree*5;
    resultTower.effectivePierce=150+degree*10;
    resultTower.effectiveRange=260+degree*2;
    resultTower.effectiveRate=.11;
    resultTower.effectiveCount=6+Math.floor(degree/8);
    this.game.toast(`${pDef.name} created — Degree ${degree}`,'good');
    this.game.spawnBurst(resultTower.x,resultTower.y,pDef.color,70);
    this.game.onParagonCreated(resultTower);
    this.game.selected=resultTower;
    this.game.save();
    return true;
  }
  activateAbility(index=0){
    const unlocks=this.getAbilities();
    const ability=unlocks[index];
    if(!ability)return false;
    const key=`${this.id}-${index}`;
    const cd=this.abilityCooldowns[key]||0;
    if(cd>0)return false;
    this.abilityCooldowns[key]=ability.cooldown;
    if(ability.name==='Scorch Ring'){
      for(const b of this.game.bloons){if(!b.dead&&dist2(this,b)<220*220){b.takeDamage(65,this);b.slow=.45;}}
      this.game.spawnRing(this.x,this.y,230,'#ff9e62');
    } else if(ability.name==='Meteor'){
      const target=this.selectTarget(true)||this.game.bloons[0];
      if(target)this.game.meteor(target.x,target.y,120,250);
    } else if(ability.name==='Supernova'){
      for(const b of this.game.bloons){if(!b.dead)b.takeDamage(160+this.levels[0]*20,this,{ignoreArmor:true});}
      this.game.spawnRing(this.game.worldWidth/2,this.game.worldHeight/2,800,'#ffe37a');
    } else if(ability.name==='Marked Shot'){
      this.game.globalTargetMode='strong';this.game.globalTargetTimer=12;
    } else if(ability.name==='Volley'){
      for(let i=0;i<18;i++){
        const a=(i/18)*TAU;const v=Vec2.fromAngle(a,850);this.game.projectiles.push(new Projectile(this.game,{x:this.x,y:this.y,vx:v.x,vy:v.y,speed:850,radius:5,damage:this.effectiveDamage*4,pierce:12,color:'#9af0c0',kind:'dart',owner:this}));
      }
    } else if(ability.name==='Overclock'){
      const candidates=this.game.towers.filter(t=>t!==this&&!t.sold&&!t.paragon).sort((a,b)=>dist2(this,a)-dist2(this,b));
      const target=candidates[0];if(target){target.cooldown=Math.min(target.cooldown,0);target.highlight=20;target.overclockTimer=20;}
    } else if(ability.name==='Drone Swarm'){
      this.game.spawnDrones(this.x,this.y,6,20);
    }
    return true;
  }
  getAbilities(){
    const heroDef=HEROES[this.id];
    if(!heroDef?.abilities)return [];
    const result=[];
    for(const a of heroDef.abilities){
      if(this.game.heroLevel>=a.unlock)result.push(a);
    }
    return result;
  }
  draw(ctx,camera){
    const px=this.x-camera.x,py=this.y-camera.y;
    ctx.save();ctx.translate(px,py);ctx.rotate(this.angle);
    if(this.paragon){
      const p=PARAGONS[this.id];
      ctx.shadowBlur=22;ctx.shadowColor=p.color;ctx.fillStyle=p.color;ctx.strokeStyle='#ffffff';ctx.lineWidth=3;
      ctx.beginPath();ctx.arc(0,0,27,0,TAU);ctx.fill();ctx.stroke();ctx.shadowBlur=0;
      ctx.fillStyle='rgba(24,35,40,.8)';ctx.fillRect(10,-4,32,8);
      ctx.font='900 9px system-ui';ctx.textAlign='center';ctx.fillStyle='#122027';ctx.rotate(-this.angle);ctx.fillText(`P${this.paragonDegree}`,0,3);
      ctx.restore();return;
    }
    ctx.fillStyle='rgba(0,0,0,.25)';ctx.beginPath();ctx.ellipse(0,12,26,10,0,0,TAU);ctx.fill();
    ctx.fillStyle=this.def.color;ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(0,0,20,0,TAU);ctx.fill();ctx.stroke();
    ctx.fillStyle='rgba(10,20,24,.5)';ctx.fillRect(9,-3,25,6);
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-6,-5,3,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(6,-5,3,0,TAU);ctx.fill();
    ctx.fillStyle='#122127';ctx.beginPath();ctx.arc(-6,-5,1.3,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(6,-5,1.3,0,TAU);ctx.fill();
    ctx.restore();
    if(this.highlight>0){ctx.save();ctx.globalAlpha=Math.min(1,this.highlight/5);ctx.strokeStyle='#ffffff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(px,py,28,0,TAU);ctx.stroke();ctx.restore();}
  }
}

export class HeroUnit extends Tower {
  constructor(game,id,x,y){
    super(game,id,x,y);
    this.heroId=id;this.level=1;this.xp=0;this.paragon=false;
    this.def={...HEROES[id],id, name:HEROES[id].name, color:HEROES[id].color, range:HEROES[id].base.range, attackRate:HEROES[id].base.attackRate, damage:HEROES[id].base.damage,pierce:HEROES[id].base.pierce,projectileSpeed:HEROES[id].base.speed,projectileRadius:5};
    this.levels=[0,0,0];
    this.effectiveRange=this.def.range;this.effectiveDamage=this.def.damage;this.effectivePierce=this.def.pierce;this.effectiveRate=this.def.attackRate;this.effectiveSpeed=this.def.projectileSpeed;this.effectiveCount=this.def.base?.projectileCount||2;
  }
  heroGainXp(amount){
    this.xp+=amount;
    const levels=HEROES[this.id].levels;
    while(this.level<levels.length && this.xp>=levels[this.level].xp)this.level++;
    this.game.heroLevel=this.level;
    this.game.heroXp=this.xp;
    const cur=levels[Math.max(0,this.level-1)];
    this.effectiveDamage=this.def.base.damage+(cur.damage||0)-this.def.base.damage+(HEROES[this.id].levels[this.level-1]?.damage||this.def.base.damage);
  }
  recalculate(){
    const h=HEROES[this.id];const level=Math.min(this.level,h.levels.length);const l=h.levels[level-1]||{};
    this.effectiveRange=l.range??h.base.range;this.effectiveDamage=l.damage??h.base.damage;this.effectivePierce=l.pierce??h.base.pierce;this.effectiveRate=l.attackRate??h.base.attackRate;this.effectiveSpeed=l.speed??h.base.speed;this.effectiveCount=l.projectileCount??h.base.projectileCount;this.isStealth=true;
  }
  buyUpgrade(){return false;}
  update(dt){this.recalculate();super.update(dt);}
}

export class Drone extends Projectile {
  constructor(game,x,y,damage=15){
    super(game,{x,y,vx:0,vy:0,speed:0,radius:7,damage,pierce:3,color:'#a9e5ff',kind:'drone',life:20,homing:true,turnRate:3});this.drone=true;this.angle=0;this.orbitRadius=55;this.orbitSpeed=random(-2,2);
  }
  update(dt){
    this.angle+=this.orbitSpeed*dt;
    const hero=this.owner?.x!==undefined?this.owner:null;
    if(hero){this.x=hero.x+Math.cos(this.angle)*this.orbitRadius;this.y=hero.y+Math.sin(this.angle)*this.orbitRadius;}
    const target=this.game.bloons.filter(b=>!b.dead).sort((a,b)=>dist2(this,a)-dist2(this,b))[0];
    if(target){const dx=target.x-this.x,dy=target.y-this.y;const l=Math.hypot(dx,dy)||1;this.vx=dx/l*280;this.vy=dy/l*280;}
    return super.update(dt);
  }
  draw(ctx,camera){ctx.save();ctx.translate(this.x-camera.x,this.y-camera.y);ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(0,0,7,0,TAU);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.6)';ctx.stroke();ctx.restore();}
}

export class GameEngine {
  constructor(canvas){
    this.canvas=canvas;this.ctx=canvas.getContext('2d');
    this.state=GameState.MENU;
    this.worldWidth=1280;this.worldHeight=820;
    this.camera={x:0,y:0};
    this.paths=[];this.map=null;this.difficulty=DIFFICULTIES.normal;this.mode=MODES.standard;
    this.towers=[];this.bloons=[];this.projectiles=[];this.particles=[];this.texts=[];this.effects=[];
    this.mastery=MasteryProfile.load();this.masteryEffects=this.mastery.getEffects();
    this.cash=650;this.lives=100;this.eco=100;this.round=0;this.roundTimer=0;this.roundRunning=false;this.roundSpawnPlan=[];this.spawnCursor=0;this.spawnTimer=0;this.fast=false;this.autoStart=true;this.globalTargetMode=null;this.globalTargetTimer=0;this.selected=null;this.pendingTower=null;this.selectedHasStealth=false;this.gameTime=0;this.speedMultiplier=1;this.lastFrame=performance.now()/1000;this.hero=null;this.heroId=null;this.heroLevel=1;this.heroXp=0;this.heroPlaced=false;this.totalPops=0;this.totalCashEarned=0;this.tier5Counts={};this.freeplay=false;this.won=false;this.lost=false;this.soundEnabled=false;
    this.screenShake=0;
    this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(this.canvas.parentElement||this.canvas);
    this.resize();
  }
  resize(){
    const rect=this.canvas.getBoundingClientRect();const dpr=Math.min(2,window.devicePixelRatio||1);this.canvas.width=Math.max(1,Math.floor(rect.width*dpr));this.canvas.height=Math.max(1,Math.floor(rect.height*dpr));this.ctx.setTransform(dpr,0,0,dpr,0,0);this.pixelRatio=dpr;this.viewportW=rect.width;this.viewportH=rect.height;this.updateCamera();
  }
  startNewGame(options){
    this.map=MAPS[options.mapId]||MAPS.meadow;this.difficulty=DIFFICULTIES[options.difficultyId]||DIFFICULTIES.normal;this.mode=MODES[options.modeId]||MODES.standard;this.heroId=options.heroId||'ember';
    this.paths=this.map.paths.map(p=>new PathCurve(p));
    this.worldWidth=1280;this.worldHeight=820;
    this.towers=[];this.bloons=[];this.projectiles=[];this.particles=[];this.texts=[];this.effects=[];
    this.masteryEffects=this.mastery.getEffects();
    this.cash=Math.round((this.mode.startCash+this.masteryEffects.startingCash)*this.difficulty.cashMult);this.lives=Math.max(1,Math.round(this.mode.startLives*this.difficulty.lifeMult));this.eco=100;this.round=this.mode.id==='freeplay'?79:0;this.roundRunning=false;this.roundSpawnPlan=[];this.spawnCursor=0;this.spawnTimer=0;this.fast=false;this.autoStart=true;this.selected=null;this.pendingTower=null;this.gameTime=0;this.heroLevel=1;this.heroXp=0;this.heroPlaced=false;this.totalPops=0;this.totalCashEarned=0;this.tier5Counts={};this.freeplay=false;this.won=false;this.lost=false;this.state=GameState.PLAYING;this.updateCamera();
    this.save();
  }
  updateCamera(){
    const worldAspect=this.worldWidth/this.worldHeight;const viewAspect=this.viewportW/this.viewportH;
    if(viewAspect>worldAspect){this.camera.scale=this.viewportH/this.worldHeight;this.camera.offsetX=(this.viewportW-this.worldWidth*this.camera.scale)/2;this.camera.offsetY=0;}
    else {this.camera.scale=this.viewportW/this.worldWidth;this.camera.offsetX=0;this.camera.offsetY=(this.viewportH-this.worldHeight*this.camera.scale)/2;}
  }
  screenToWorld(sx,sy){return {x:(sx-this.camera.offsetX)/this.camera.scale+this.camera.x,y:(sy-this.camera.offsetY)/this.camera.scale+this.camera.y};}
  worldToScreen(x,y){return {x:(x-this.camera.x)*this.camera.scale+this.camera.offsetX,y:(y-this.camera.y)*this.camera.scale+this.camera.offsetY};}
  startLoop(){requestAnimationFrame(this.loop.bind(this));}
  loop(){
    const t=performance.now()/1000;let dt=clamp(t-this.lastFrame,0,.08);this.lastFrame=t;
    if(this.state===GameState.PLAYING){this.update(dt*this.speedMultiplier);}
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }
  update(dt){
    this.gameTime+=dt;this.screenShake=Math.max(0,this.screenShake-dt);
    if(this.globalTargetTimer>0){this.globalTargetTimer-=dt;if(this.globalTargetTimer<=0)this.globalTargetMode=null;}
    this.refreshGlobalAuras();
    this.updateRound(dt);
    for(const tower of this.towers)tower.update(dt);
    if(this.hero)this.hero.update(dt);
    for(const b of this.bloons)b.update(dt);
    for(const p of this.projectiles)p.update(dt);
    for(const particle of this.particles)particle.update(dt);
    for(const text of this.texts)text.update(dt);
    this.resolveDrones();
    this.particles=this.particles.filter(p=>p.life>0);this.texts=this.texts.filter(t=>t.life>0);this.projectiles=this.projectiles.filter(p=>!p.dead);this.bloons=this.bloons.filter(b=>!b.dead);
    for(const e of this.effects)e.life-=dt;this.effects=this.effects.filter(e=>e.life>0);
    if(this.roundRunning&&this.spawnCursor>=this.roundSpawnPlan.length&&this.bloons.length===0){this.finishRound();}
    if(!this.roundRunning&&this.autoStart&&this.round>0&&this.roundTimer<=0&&this.state===GameState.PLAYING){this.startRound();}
    if(this.hero)this.hero.heroGainXp(0);
  }

  refreshGlobalAuras(){
    this.hasGlobalStealth=this.towers.some(t=>!t.sold&&t.globalStealth>0)||false;
    this.globalSpeedBonus=Math.min(.55,this.towers.filter(t=>!t.sold&&t.globalSpeed).reduce((a,t)=>a+(t.globalSpeed||0),0));
    this.globalDamageBonus=this.towers.filter(t=>!t.sold&&t.globalDamage).reduce((a,t)=>a+(t.globalDamage||0),0);
    this.globalDamageBonus+=this.masteryEffects?.armorDamage||0;
    this.globalPierceBonus=this.towers.filter(t=>!t.sold&&t.globalPierce).reduce((a,t)=>a+(t.globalPierce||0),0)+ (this.masteryEffects?.pierce||0);
    for(const t of this.towers){
      t.buffSpeed=0;t.buffDamage=0;t.buffPierce=0;t.buffRange=0;
      if(t.sold)continue;
      if(t.def.id==='village'||t.def.id==='smith'){
        t.buffSpeed=t.globalSpeed||0;t.buffDamage=t.globalDamage||0;t.buffPierce=t.globalPierce||0;t.buffRange=t.globalRange||0;
      }
      if(t.def.id==='alchemist'){t.buffSpeed=Math.max(t.buffSpeed,t.buffSpeed||0);}
    }
  }

  updateRound(dt){
    if(this.roundRunning){
      this.spawnTimer-=dt;
      let safety=0;
      while(this.spawnTimer<=0&&this.spawnCursor<this.roundSpawnPlan.length&&safety++<25){
        const item=this.roundSpawnPlan[this.spawnCursor++];
        this.spawnBloon(item.type,item.count||1,item.interval||0.1,item.scale||this.freeplayScale(1));
        this.spawnTimer+=item.interval||.1;
      }
      this.roundTimer=Math.max(0,this.roundTimer-dt);
    } else this.roundTimer=Math.max(0,this.roundTimer-dt);
  }
  buildRoundPlan(round){
    const plan=[];const add=(type,count,interval,scale=1)=>plan.push({type,count,interval,scale});
    const hpScale=this.difficulty.bloonHp*this.freeplayScale(1);
    const swarm=Math.max(1,Math.floor(1+round*1.15));
    const group=(type,count,interval=.11,mult=1)=>add(type,count,interval,hpScale*mult);
    if(round<=2){group('red',round*8,.18);} else {
      const tiers=[['red',.9],['blue',1.0],['green',1.05],['yellow',1.1],['pink',1.15],['black',1.2],['white',1.25],['zebra',1.35],['rainbow',1.45],['ceramic',1.65]];
      const maxTier=round<5?1:round<8?2:round<12?4:round<20?5:round<30?7:9;
      for(let i=0;i<=maxTier;i++){
        const [type,mult]=tiers[i];const count=Math.max(2,Math.floor(swarm*(i===0?1.7:1/(i*.35+1)*1.4)));group(type,count,.075+i*.015,mult);
      }
      if(round%5===0&&round>=20)group('lead',Math.floor(round/4),.18,1.5);
      if(round>=25)group('ceramic',Math.floor(round*.35),.12,1.7);
      if(round>=30&&round%10===0)group('moab',Math.max(1,Math.floor(round/30)),.8,1+round*.015);
      if(round>=40&&round%10===0)group('bfb',Math.max(1,Math.floor(round/45)),1.0,1+round*.012);
      if(round>=50&&round%10===0)group('zomg',Math.max(1,Math.floor(round/65)),1.3,1+round*.012);
      if(round>=60&&round%10===0)group('ddt',Math.max(2,Math.floor(round/18)),.6,1+round*.018);
      if(round>=80&&round%10===0)group('bad',Math.max(1,Math.floor(round/90)),1.6,1+round*.02);
      if(round===100)group('bloonBoss',1,2.0,1);
    }
    return plan;
  }
  freeplayScale(mult=1){
    if(this.mode.id==='freeplay')return mult*(1+Math.max(0,this.round-80)*.035);
    if(!this.freeplay)return mult;
    return mult*(1+Math.max(0,this.round-100)*.025);
  }
  startRound(){
    if(this.roundRunning||this.state!==GameState.PLAYING)return false;
    this.round++;
    if(this.round>100)this.freeplay=true;
    this.roundSpawnPlan=this.buildRoundPlan(this.round);
    this.spawnCursor=0;this.spawnTimer=.3;this.roundRunning=true;this.roundTimer=this.roundSpawnPlan.reduce((a,b)=>a+(b.count||1)*(b.interval||.1),0)+5;
    this.toast(ROUND_SPECIALS[this.round]?`Round ${this.round}: ${ROUND_SPECIALS[this.round]}`:`Round ${this.round}`,'good');
    return true;
  }
  finishRound(){
    if(!this.roundRunning)return;
    this.roundRunning=false;this.roundTimer=this.round<100?1.6:.8;
    const modeIncome=this.mode.id==='deflation'?0:(100+this.eco*.5)*(1+(this.masteryEffects?.income||0));
    let income=Math.floor(modeIncome*this.difficulty.cashMult*(this.mode.id==='halfCash'?.5:1));
    for(const tower of this.towers){if(tower.sold)continue;if(tower.def.isSupport&&tower.income)income+=tower.income*.3;}
    income=Math.max(0,Math.floor(income));this.cash+=income;this.totalCashEarned+=income;
    if(income)this.spawnText(this.worldWidth/2,this.worldHeight-60,`Round bonus +$${income}`,'#ffe777',14);
    if(this.round>=100)this.save();
    if(this.round>=this.mode.roundCap&&this.mode.id!=='freeplay'){this.endGame(true);return;}
  }
  spawnBloon(type,count,interval=.1,scale=1){
    for(let i=0;i<count;i++){
      const pathIndex=this.randomPathIndex();const b=new Bloon(this,type,pathIndex,-i*8,scale);this.bloons.push(b);
    }
  }
  randomPathIndex(){return Math.floor(Math.random()*this.paths.length);}
  createProjectile(options={}){return new Projectile(this,options);}
  resolveProjectileHit(projectile,bloon){
    if(bloon.dead)return;
    let damage=projectile.damage;
    if(projectile.crit&&chance(projectile.crit))damage*=2.5;
    if(bloon.boss)damage+=projectile.bossBonus||0;
    if(['moab','bfb','zomg','ddt','bad','bloonBoss'].includes(bloon.type))damage+=projectile.moabBonus||0;
    const result=bloon.takeDamage(damage,projectile.owner,{ignoreArmor:projectile.armorPierce,bossMult:1});
    const owner=projectile.owner;
    if(owner){owner.towerXp+=result.damage||0;this.totalPops+=result.killed?1:0;}
    if(projectile.burst&&!bloon.dead&&!projectile.explosionImmune){this.areaDamage(bloon.x,bloon.y,projectile.burst,Math.max(1,Math.floor(damage*.55)),owner);}
    if(projectile.chain&&!bloon.dead)this.chainDamage(bloon,projectile.chain,Math.max(1,damage*.65),owner,new Set([bloon.id]));
  }
  areaDamage(x,y,radius,damage,owner=null){
    this.spawnRing(x,y,radius,owner?.def?.color||'#ffffff');
    for(const b of this.bloons){if(b.dead)continue;if((b.x-x)**2+(b.y-y)**2<=radius*radius)b.takeDamage(damage,owner);}
  }
  chainDamage(origin,count,damage,owner,seen){
    let candidates=this.bloons.filter(b=>!b.dead&&!seen.has(b.id)).sort((a,b)=>dist2(origin,a)-dist2(origin,b)).slice(0,count);
    let prev=origin;for(const b of candidates){seen.add(b.id);b.takeDamage(damage,owner);this.spawnLine(prev.x,prev.y,b.x,b.y,owner?.def?.color||'#a7c8ff');prev=b;}
  }
  onBloonPopped(bloon){
    const reward=Math.max(1,Math.floor((bloon.reward/Math.max(1,this.difficulty.bloonHp)) * (this.mode.id==='halfCash'?.5:1)));
    const boostedReward=reward*(1+(this.masteryEffects?.popCash||0));
    this.cash+=boostedReward;this.totalCashEarned+=boostedReward;
    if(bloon.boss)this.screenShake=1;
    if(this.hero)this.heroXp+=Math.max(1,bloon.reward*.1)*(1+(this.masteryEffects?.heroXp||0));
    this.spawnText(bloon.x,bloon.y+20,`+$${reward}`,'#ffe777',10);
    if(this.hero){const before=this.hero.level;this.hero.heroGainXp(Math.max(1,bloon.reward*.1)*(1+(this.masteryEffects?.heroXp||0)));if(this.hero.level>before)this.toast(`${this.hero.def.name} reached level ${this.hero.level}`,'good');}
  }
  onParagonCreated(tower){this.tier5Counts[tower.id]=(this.tier5Counts[tower.id]||0)+1;}
  getUpgradeCostMultiplier(){
    let m=1;
    m*=Math.max(.75,1-(this.masteryEffects?.upgradeCost||0));
    for(const t of this.towers){if(!t.sold&&(t.costReduction||0)>0)m*=Math.max(.7,1-(t.costReduction||0));}
    if(this.mode.id==='deflation')m*=1.12;
    return m;
  }
  placeTower(id,x,y){
    if(!TOWERS[id])return null;
    if(!this.canPlace(x,y,TOWERS[id])){this.toast('Cannot place here','danger');return null;}
    const cost=TOWERS[id].cost;
    if(this.cash<cost){this.toast('Not enough cash','danger');return null;}
    this.cash-=cost;
    const tower=new Tower(this,id,x,y);tower.recalculate();this.towers.push(tower);this.selected=tower;this.pendingTower=null;this.toast(`${tower.def.name} placed`,'good');this.save();return tower;
  }
  placeHero(x,y){
    if(this.heroPlaced||!HEROES[this.heroId])return null;
    const def=HEROES[this.heroId];if(this.cash<def.cost){this.toast('Not enough cash for hero','danger');return null;}
    if(!this.canPlace(x,y,{range:def.base.range}))return null;
    this.cash-=def.cost;this.hero=new HeroUnit(this,this.heroId,x,y);this.hero.recalculate();this.heroPlaced=true;this.selected=this.hero;this.pendingTower=null;this.toast(`${def.name} deployed`,'good');this.save();return this.hero;
  }
  canPlace(x,y,def){
    const radius=22; if(x<radius||y<radius||x>this.worldWidth-radius||y>this.worldHeight-radius)return false;
    for(const zone of this.map.buildZones){if(x>=zone.x&&x<=zone.x+zone.w&&y>=zone.y&&y<=zone.y+zone.h){
      for(const path of this.paths){if(path.nearestPoint({x,y}).distance<this.map.pathWidth/2+radius)return false;}
      for(const tower of this.towers){if(!tower.sold&&Math.hypot(x-tower.x,y-tower.y)<radius*1.8)return false;}
      if(this.hero&&Math.hypot(x-this.hero.x,y-this.hero.y)<radius*1.8)return false;
      return true;
    }}
    return false;
  }
  sellSelected(){
    const t=this.selected;if(!t||t===this.hero||t.sold)return false;
    const value=t.sellValue();t.sold=true;this.cash+=value;this.spawnText(t.x,t.y,`+$${value}`,'#ffe777',12);this.selected=null;this.toast('Tower sold','good');this.save();return true;
  }
  selectAt(x,y){
    let found=null;
    if(this.hero&&!this.hero.sold&&Math.hypot(x-this.hero.x,y-this.hero.y)<28)found=this.hero;
    if(!found){for(const tower of this.towers){if(!tower.sold&&Math.hypot(x-tower.x,y-tower.y)<26){found=tower;break;}}}
    this.selected=found;
    this.selectedHasStealth=!!found?.isStealth;
    return found;
  }
  activateSelectedAbility(index=0){if(this.selected instanceof Tower)return this.selected.activateAbility(index);return false;}
  tryPlaceAt(x,y){
    if(this.pendingTower==='hero')return this.placeHero(x,y);
    if(this.pendingTower)return this.placeTower(this.pendingTower,x,y);
    return this.selectAt(x,y);
  }
  togglePause(){if(this.state===GameState.PLAYING){this.state=GameState.PAUSED;return true;} if(this.state===GameState.PAUSED){this.state=GameState.PLAYING;this.lastFrame=performance.now()/1000;return false;}return false;}
  setSpeed(){this.speedMultiplier=this.speedMultiplier===1?2:this.speedMultiplier===2?3:1;return this.speedMultiplier;}
  endGame(victory){
    this.roundRunning=false;this.won=victory;this.lost=!victory;this.state=victory?GameState.VICTORY:GameState.GAME_OVER;this.save();
  }
  save(){
    try{
      const data={version:1,mapId:this.map?.id,difficultyId:this.difficulty.id,modeId:this.mode.id,heroId:this.heroId,round:this.round,cash:this.cash,lives:this.lives,eco:this.eco,heroPlaced:this.heroPlaced,hero:this.hero?{x:this.hero.x,y:this.hero.y,level:this.hero.level,xp:this.hero.xp}:null,towers:this.towers.filter(t=>!t.sold).map(t=>({id:t.id,x:t.x,y:t.y,levels:t.levels,targetMode:t.targetMode,totalInvested:t.totalInvested,paragon:t.paragon,paragonDegree:t.paragonDegree})),savedAt:Date.now()};
      localStorage.setItem('balloon-bastion-save',JSON.stringify(data));
    }catch(e){console.warn('Save failed',e);}
  }
  load(){
    try{const raw=localStorage.getItem('balloon-bastion-save');if(!raw)return null;const d=JSON.parse(raw);return d;}catch(e){return null;}
  }
  restoreSavedGame(data){
    if(!data?.mapId)return false;
    this.startNewGame({mapId:data.mapId,difficultyId:data.difficultyId,modeId:data.modeId,heroId:data.heroId});
    const savedCash=data.cash??this.cash;
    this.round=data.round||0;this.cash=savedCash;this.lives=data.lives??this.lives;this.eco=data.eco??100;
    for(const s of data.towers||[]){
      if(!TOWERS[s.id]||!this.canPlace(s.x,s.y,TOWERS[s.id]))continue;
      const t=new Tower(this,s.id,s.x,s.y);t.levels=[0,0,0];t.totalInvested=TOWERS[s.id].cost;
      for(let p=0;p<3;p++)for(let i=0;i<(s.levels?.[p]||0);i++){
        const up=TOWERS[s.id].paths[p][i];if(!up)continue;t.levels[p]++;t.totalInvested+=up.cost;t.applyUpgradeEffects(up.effects);
      }
      t.targetMode=s.targetMode||'first';if(s.paragon){t.paragon=true;t.paragonDegree=s.paragonDegree||1;}t.recalculate();this.towers.push(t);
    }
    if(data.heroPlaced&&data.hero&&HEROES[this.heroId]&&this.canPlace(data.hero.x,data.hero.y,{range:HEROES[this.heroId].base.range})){
      const h=new HeroUnit(this,this.heroId,data.hero.x,data.hero.y);h.level=data.hero.level||1;h.xp=data.hero.xp||0;h.recalculate();this.hero=h;this.heroPlaced=true;
    }
    this.cash=savedCash; // Restore exact bank after reconstructing objects.
    this.state=GameState.PLAYING;this.roundRunning=false;this.save();return true;
  }
  clearSave(){localStorage.removeItem('balloon-bastion-save');}
  spawnBurst(x,y,color,count=12){for(let i=0;i<count;i++)this.particles.push(new Particle(x,y,{color,life:random(.25,.9),size:random(2,7),vx:random(-160,160),vy:random(-160,160),gravity:60,drag:1.8}));}
  spawnText(x,y,text,color,size){this.texts.push(new FloatingText(x,y,text,color,size));}
  spawnRing(x,y,radius,color){this.effects.push({type:'ring',x,y,radius,color,life:.45,maxLife:.45});}
  spawnLine(x1,y1,x2,y2,color){this.effects.push({type:'line',x1,y1,x2,y2,color,life:.14,maxLife:.14});}
  spawnDrones(x,y,count=5,damage=20){
    for(let i=0;i<count;i++){const d=new Drone(this,x,y,damage);d.owner=this.hero;this.projectiles.push(d);}
  }
  resolveDrones(){for(const p of this.projectiles){if(p.drone&&!p.owner)p.owner=this.hero;}}
  meteor(x,y,radius,damage){this.spawnRing(x,y,radius,'#ffb16b');this.particles.push(new Particle(x,y,{color:'#fff0a1',life:.6,size:45,vx:0,vy:0}));this.areaDamage(x,y,radius,damage,this.hero);}
  toast(message,kind='info'){
    if(this.onToast)this.onToast(message,kind);
  }
  render(){
    const ctx=this.ctx;const w=this.viewportW,h=this.viewportH;
    ctx.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#10211d';ctx.fillRect(0,0,w,h);
    if(!this.map){this.renderEmpty();return;}
    this.updateCamera();
    const shake=this.screenShake>0?random(-this.screenShake*4,this.screenShake*4):0;
    ctx.save();ctx.translate(this.camera.offsetX+shake,this.camera.offsetY+shake);ctx.scale(this.camera.scale,this.camera.scale);
    this.drawBackground(ctx);this.drawRoads(ctx);this.drawBuildHints(ctx);this.drawTowers(ctx);this.drawBloons(ctx);this.drawProjectiles(ctx);this.drawEffects(ctx);this.drawParticles(ctx);this.drawTexts(ctx);this.drawPlacementPreview(ctx);ctx.restore();
  }
  renderEmpty(){this.ctx.fillStyle='#13252a';this.ctx.fillRect(0,0,this.viewportW,this.viewportH);}
  drawBackground(ctx){
    const scenic=this.map.scenery;
    ctx.fillStyle=scenic==='canyon'?'#4b3a2e':scenic==='harbor'?'#183b4b':scenic==='highlands'?'#2e4937':'#2c5737';ctx.fillRect(0,0,this.worldWidth,this.worldHeight);
    ctx.globalAlpha=.2;ctx.fillStyle='#ffffff';
    for(let i=0;i<40;i++){const x=(i*179)%this.worldWidth;const y=(i*97)%this.worldHeight;ctx.beginPath();ctx.arc(x,y,(i%5)+6,0,TAU);ctx.fill();}
    ctx.globalAlpha=1;
    if(scenic==='harbor'){ctx.fillStyle='#0e2a38';ctx.beginPath();ctx.ellipse(650,410,190,120,0,0,TAU);ctx.fill();ctx.strokeStyle='rgba(150,220,255,.2)';ctx.stroke();}
    if(scenic==='canyon'){ctx.fillStyle='rgba(0,0,0,.16)';for(let i=0;i<15;i++){ctx.fillRect(50+i*85,0,24,this.worldHeight);}}
    if(scenic==='highlands'){ctx.strokeStyle='rgba(255,255,255,.08)';ctx.lineWidth=40;for(let i=0;i<7;i++){ctx.beginPath();ctx.moveTo(-40,i*145+20);ctx.lineTo(this.worldWidth+40,i*145+20);ctx.stroke();}}
  }
  drawRoads(ctx){
    ctx.lineCap='round';ctx.lineJoin='round';
    for(const path of this.paths){
      ctx.beginPath();ctx.moveTo(path.points[0].x,path.points[0].y);for(let i=1;i<path.points.length;i++)ctx.lineTo(path.points[i].x,path.points[i].y);
      ctx.strokeStyle='#493f37';ctx.lineWidth=this.map.pathWidth+9;ctx.stroke();
      ctx.strokeStyle='#bca17c';ctx.lineWidth=this.map.pathWidth;ctx.stroke();
      ctx.strokeStyle='rgba(255,255,255,.13)';ctx.lineWidth=3;ctx.setLineDash([9,12]);ctx.stroke();ctx.setLineDash([]);
    }
  }
  drawBuildHints(ctx){
    if(!this.pendingTower)return;
    ctx.save();for(const z of this.map.buildZones){ctx.fillStyle='rgba(108,232,162,.04)';ctx.strokeStyle='rgba(108,232,162,.10)';ctx.lineWidth=2;ctx.strokeRect(z.x,z.y,z.w,z.h);ctx.fillRect(z.x,z.y,z.w,z.h);}ctx.restore();
  }
  drawTowers(ctx){
    for(const t of this.towers){if(!t.sold)t.draw(ctx,{x:0,y:0});}
    if(this.hero&& !this.hero.sold)this.hero.draw(ctx,{x:0,y:0});
    if(this.selected&&!this.selected.sold){const range=this.selected.getRange();ctx.save();ctx.strokeStyle='rgba(104,200,255,.28)';ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.beginPath();ctx.arc(this.selected.x,this.selected.y,range,0,TAU);ctx.stroke();ctx.restore();}
  }
  drawBloons(ctx){for(const b of this.bloons)b.draw(ctx,{x:0,y:0});}
  drawProjectiles(ctx){for(const p of this.projectiles)p.draw(ctx,{x:0,y:0});}
  drawEffects(ctx){
    for(const e of this.effects){const a=clamp(e.life/e.maxLife,0,1);ctx.save();ctx.globalAlpha=a;if(e.type==='ring'){ctx.strokeStyle=e.color;ctx.lineWidth=7*(1-a)+2;ctx.beginPath();ctx.arc(e.x,e.y,e.radius*(1+(1-a)*.08),0,TAU);ctx.stroke();}else if(e.type==='line'){ctx.strokeStyle=e.color;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(e.x1,e.y1);ctx.lineTo(e.x2,e.y2);ctx.stroke();}ctx.restore();}
  }
  drawParticles(ctx){for(const p of this.particles)p.draw(ctx,{x:0,y:0});}
  drawTexts(ctx){for(const t of this.texts)t.draw(ctx,{x:0,y:0});}
  drawPlacementPreview(ctx){
    if(!this.pendingTower)return;
    const mouse=this.lastWorldMouse;if(!mouse)return;
    const def=this.pendingTower==='hero'?HEROES[this.heroId]:TOWERS[this.pendingTower];
    const can=this.canPlace(mouse.x,mouse.y,{range:def.base?.range||def.range});ctx.save();ctx.globalAlpha=.7;ctx.strokeStyle=can?'#6ce8a2':'#ff7272';ctx.lineWidth=3;ctx.setLineDash([6,5]);ctx.beginPath();ctx.arc(mouse.x,mouse.y,22,0,TAU);ctx.stroke();ctx.setLineDash([]);ctx.beginPath();ctx.arc(mouse.x,mouse.y,def.base?.range||def.range,0,TAU);ctx.stroke();ctx.restore();
  }
}
