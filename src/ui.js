import { TOWERS, HEROES, MAPS, DIFFICULTIES, MODES, PARAGONS } from './data.js';
import { GameState } from './engine.js';

const money = n => `$${Math.max(0,Math.floor(n)).toLocaleString()}`;
const pct = n => `${Math.round(n*100)}%`;

export class UIController {
  constructor(game){
    this.game=game;
    this.els={};
    const ids=[
      'menuScreen','setupScreen','howToScreen','gameScreen','playButton','resumeButton','howToPlayButton','resetSaveButton','setupBackButton','howBackButton','startGameButton','mapPicker','difficultyPicker','modePicker','heroPicker','startCashValue','startLivesValue','roundCapValue','livesValue','cashValue','ecoValue','roundValue','statusText','roundProgressBar','pauseButton','speedButton','buildModeButton','menuButton','towerButtons','heroButton','sidePanel','buildPanel','selectionPanel','heroPanel','selectedTowerHint','selectionIcon','selectionName','selectionLevel','selectionStats','targetModeSelect','upgradeBranches','abilityButton','paragonButton','sellButton','sellValue','heroIcon','heroName','heroLevel','heroStats','heroXpBar','heroXpText','heroAbilities','autoStartToggle','fastToggle','roundSpeedLabel','startRoundButton','cancelPlacementButton','toastLayer','roundBanner','bossBanner','gameOverOverlay','gameOverTitle','gameOverSummary','restartButton','quitButton'
    ];
    for(const id of ids)this.els[id]=document.getElementById(id);
    this.selectedMap='meadow';this.selectedDifficulty='normal';this.selectedMode='standard';this.selectedHero='ember';this.buildMode=true;
    this.bind();this.renderSetupPickers();this.renderTowerButtons();this.renderResumeState();
    game.onToast=(msg,kind)=>this.toast(msg,kind);
  }
  bind(){
    const e=this.els;
    e.playButton.onclick=()=>this.showScreen('setup');
    e.resumeButton.onclick=()=>{const save=this.game.load();if(save&&save.mapId){this.game.restoreSavedGame(save);this.showGame();}else this.toast('No saved game found','danger');};
    e.howToPlayButton.onclick=()=>this.showScreen('howTo');
    e.resetSaveButton.onclick=()=>{if(confirm('Delete the saved Balloon Bastion game?')){this.game.clearSave();this.toast('Save deleted','good');this.renderResumeState();}};
    e.setupBackButton.onclick=()=>this.showScreen('menu');
    e.howBackButton.onclick=()=>this.showScreen('menu');
    e.startGameButton.onclick=()=>{this.game.startNewGame({mapId:this.selectedMap,difficultyId:this.selectedDifficulty,modeId:this.selectedMode,heroId:this.selectedHero});this.buildMode=true;this.showGame();};
    e.pauseButton.onclick=()=>this.game.togglePause();
    e.speedButton.onclick=()=>this.game.setSpeed();
    e.buildModeButton.onclick=()=>this.buildMode=!this.buildMode;
    e.menuButton.onclick=()=>this.showMenuFromGame();
    e.startRoundButton.onclick=()=>this.game.startRound();
    e.cancelPlacementButton.onclick=()=>this.game.pendingTower=null;
    e.heroButton.onclick=()=>{if(this.game.heroPlaced){this.game.selected=this.game.hero;this.buildMode=false;}else this.game.pendingTower='hero';};
    e.targetModeSelect.onchange=ev=>{if(this.game.selected)this.game.selected.targetMode=ev.target.value;};
    e.sellButton.onclick=()=>this.game.sellSelected();
    e.abilityButton.onclick=()=>this.game.activateSelectedAbility(0);
    e.paragonButton.onclick=()=>{if(this.game.selected)this.game.selected.createParagon();};
    e.autoStartToggle.onclick=()=>{this.game.autoStart=!this.game.autoStart;this.renderToggles();};
    e.fastToggle.onclick=()=>{this.game.fast=!this.game.fast;this.game.speedMultiplier=this.game.fast?2:1;this.renderToggles();};
    e.restartButton.onclick=()=>{this.game.startNewGame({mapId:this.game.map.id,difficultyId:this.game.difficulty.id,modeId:this.game.mode.id,heroId:this.game.heroId});this.showGame();};
    e.quitButton.onclick=()=>this.showMenuFromGame();
    window.addEventListener('keydown',ev=>this.handleKey(ev));
  }
  handleKey(ev){
    if(this.game.state!==GameState.PLAYING&&ev.key!=='Escape')return;
    if(ev.key===' '){ev.preventDefault();if(this.game.roundRunning)this.game.togglePause();else this.game.startRound();}
    else if(ev.key.toLowerCase()==='f'){this.game.speedMultiplier=this.game.speedMultiplier===1?2:1;}
    else if(ev.key==='Escape'){this.game.pendingTower=null;this.game.selected=null;}
    else if(ev.key==='Delete'){this.game.sellSelected();}
    else if(['1','2','3'].includes(ev.key)&&this.game.selected&&!this.game.selected.heroId){this.game.selected.buyUpgrade(Number(ev.key)-1);}
    else if(ev.key.toLowerCase()==='e'&&this.game.selected)this.game.activateSelectedAbility(0);
  }
  showScreen(name){
    this.els.menuScreen.classList.toggle('hidden',name!=='menu');this.els.setupScreen.classList.toggle('hidden',name!=='setup');this.els.howToScreen.classList.toggle('hidden',name!=='howTo');this.els.gameScreen.classList.toggle('hidden',name!=='game');
  }
  showGame(){this.showScreen('game');}
  showMenuFromGame(){this.game.save();this.game.state=GameState.MENU;this.showScreen('menu');this.renderResumeState();}
  renderResumeState(){this.els.resumeButton.classList.toggle('hidden',!this.game.load());}
  renderSetupPickers(){
    const render=(container,data,field)=>{container.innerHTML='';for(const obj of Object.values(data)){const b=document.createElement('button');b.className='choice-card';b.innerHTML=`<strong>${obj.name}</strong><small>${obj.description||''}</small>`;if(obj.id===this[field])b.classList.add('active');b.onclick=()=>{this[field]=obj.id;this.renderSetupPickers();this.updateSetupSummary();};container.appendChild(b);}};
    render(this.els.mapPicker,MAPS,'selectedMap');render(this.els.difficultyPicker,DIFFICULTIES,'selectedDifficulty');render(this.els.modePicker,MODES,'selectedMode');render(this.els.heroPicker,HEROES,'selectedHero');this.updateSetupSummary();
  }
  updateSetupSummary(){
    const mode=MODES[this.selectedMode],diff=DIFFICULTIES[this.selectedDifficulty];this.els.startCashValue.textContent=Math.round(mode.startCash*diff.cashMult).toLocaleString();this.els.startLivesValue.textContent=Math.max(1,Math.round(mode.startLives*diff.lifeMult)).toLocaleString();this.els.roundCapValue.textContent=mode.roundCap.toLocaleString();
  }
  renderTowerButtons(){
    const e=this.els; e.towerButtons.innerHTML='';
    for(const t of Object.values(TOWERS)){
      const b=document.createElement('button');b.className='tower-button';b.title=`${t.name} — ${money(t.cost)}`;b.dataset.tower=t.id;b.innerHTML=`<span class="tower-glyph">${t.glyph}</span><span class="tower-cost">${t.cost}</span>`;
      b.onclick=()=>{if(this.game.cash>=t.cost){this.game.pendingTower=t.id;this.game.selected=null;this.buildMode=true;}else this.toast('Not enough cash','danger');};e.towerButtons.appendChild(b);
    }
  }
  renderToggles(){
    this.els.autoStartToggle.classList.toggle('active',this.game.autoStart);this.els.autoStartToggle.textContent=this.game.autoStart?'ON':'OFF';this.els.fastToggle.classList.toggle('active',this.game.fast);this.els.fastToggle.textContent=this.game.fast?'ON':'OFF';
  }
  update(){
    const g=this.game,e=this.els;
    e.livesValue.textContent=Math.max(0,Math.floor(g.lives)).toLocaleString();e.cashValue.textContent=Math.floor(g.cash).toLocaleString();e.ecoValue.textContent=Math.floor(g.eco).toLocaleString();e.roundValue.textContent=g.round.toLocaleString();
    e.pauseButton.textContent=g.state===GameState.PAUSED?'▶':'Ⅱ';e.speedButton.textContent=`${g.speedMultiplier}×`;e.statusText.textContent=g.state===GameState.PAUSED?'Paused':g.roundRunning?`Round ${g.round} in progress`:'Build Phase';e.roundProgressBar.style.width=`${this.roundProgress()*100}%`;
    e.buildModeButton.textContent=g.pendingTower?`Place ${TOWERS[g.pendingTower]?.glyph||''}`:'Build';e.selectedTowerHint.textContent=g.pendingTower?'Click map':'Select';e.startRoundButton.textContent=g.roundRunning?'Round Running':g.round===0?'Start Round':'Next Round';e.roundSpeedLabel.textContent=`${g.speedMultiplier}.0×`;
    this.renderToggles();
    this.renderSelection();
    this.renderHero();
    if(g.won||g.lost)this.renderGameOver();else e.gameOverOverlay.classList.add('hidden');
    this.updateBossBanner();
  }
  roundProgress(){
    if(!this.game.roundRunning)return 0;const total=this.game.roundSpawnPlan.length||1;return Math.min(1,this.game.spawnCursor/total);
  }
  renderSelection(){
    const g=this.game,e=this.els,t=g.selected;
    e.selectionPanel.classList.toggle('hidden',!t||!!t.heroId);e.heroPanel.classList.toggle('hidden',!t||!t.heroId);
    if(!t||t.heroId)return;
    const d=t.def;e.selectionIcon.textContent=d.glyph||'?';e.selectionName.textContent=d.name;e.selectionLevel.textContent=t.levels.join('-');
    const stats=[['Damage',t.effectiveDamage],['Pierce',t.effectivePierce],['Attack',t.effectiveRate>=50?'—':`${t.effectiveRate.toFixed(2)}s`],['Range',Math.round(t.getRange())],['Sell',money(t.sellValue())],['XP',Math.floor(t.towerXp).toLocaleString()]];
    e.selectionStats.innerHTML=stats.map(([k,v])=>`<div class="stat"><span>${k}</span><strong>${v}</strong></div>`).join('');
    e.targetModeSelect.value=t.targetMode||'first';
    e.upgradeBranches.innerHTML='';
    for(let p=0;p<3;p++){
      const b=document.createElement('div');b.className='branch';b.innerHTML=`<div class="branch-title"><span>${['Top','Middle','Bottom'][p]} Path</span><strong>${t.levels[p]}/5</strong></div><div class="branch-rows"></div>`;const rows=b.querySelector('.branch-rows');
      for(let i=0;i<5;i++){
        const u=d.paths[p][i],bought=t.levels[p]>i,allowed=t.canUpgrade(p)&&t.levels[p]===i,crossBlock=!allowed&&!bought;const row=document.createElement('div');row.className=`upgrade ${bought?'bought':''} ${crossBlock?'locked':''}`;const cost=t.upgradeCost(p);row.innerHTML=`<div class="tier-box">${p+1}-${i+1}</div><div class="upgrade-copy"><strong>${u.name}</strong><small>${u.desc}</small></div><div class="upgrade-cost">${bought?'✓':Number.isFinite(cost)?money(cost):'—'}</div>`;row.onclick=()=>{if(!bought&&allowed)t.buyUpgrade(p);};rows.appendChild(row);
      }
      e.upgradeBranches.appendChild(b);
    }
    const abilities=t.getAbilities();e.abilityButton.classList.toggle('hidden',!abilities.length);if(abilities.length)e.abilityButton.textContent=`${abilities[0].name} [E]`;
    e.sellValue.textContent=t.sellValue();
  }
  renderHero(){
    const g=this.game,e=this.els,h=g.hero;if(!h){e.heroPanel.classList.add('hidden');return;}
    e.heroIcon.textContent=h.def.icon;e.heroName.textContent=h.def.name;e.heroLevel.textContent=`Level ${h.level}`;const l=h.def.base;
    e.heroStats.innerHTML=[['Damage',h.effectiveDamage],['Pierce',h.effectivePierce],['Attack',`${h.effectiveRate.toFixed(2)}s`],['Range',Math.round(h.effectiveRange)]].map(([a,b])=>`<div class="stat"><span>${a}</span><strong>${b}</strong></div>`).join('');
    const levels=HEROES[h.id].levels,cur=levels[Math.max(0,h.level-1)],next=levels[h.level]||null;const baseXp=cur?.xp||0,nextXp=next?.xp||cur?.xp+100;const progress=(h.xp-baseXp)/Math.max(1,nextXp-baseXp);e.heroXpBar.style.width=`${Math.max(0,Math.min(1,progress))*100}%`;e.heroXpText.textContent=next?`${Math.floor(h.xp)} / ${nextXp} XP`:`MAX LEVEL • ${Math.floor(h.xp)} XP`;
    e.heroAbilities.innerHTML=(HEROES[h.id].abilities||[]).map((a,i)=>`<div class="hero-ability"><strong>${a.name} <span>${i===0?'[E]':''}</span></strong><small>${a.description} • ${a.cooldown}s</small></div>`).join('');
  }
  renderGameOver(){
    const g=this.game,e=this.els;e.gameOverOverlay.classList.remove('hidden');e.gameOverTitle.textContent=g.won?'Round Cleared!':'Defeat';e.gameOverSummary.textContent=g.won?`You survived through round ${g.round.toLocaleString()} with ${Math.floor(g.cash).toLocaleString()} cash.`:`The defense fell on round ${g.round.toLocaleString()}. You popped ${g.totalPops.toLocaleString()} bloons.`;e.restartButton.textContent=g.won?'Play Again':'Retry';
  }
  updateBossBanner(){
    const g=this.game,e=this.els;const heavy=g.bloons.find(b=>b.boss&&b.type==='bloonBoss');if(heavy){e.bossBanner.classList.remove('hidden');e.bossBanner.textContent=`${heavy.base.name} • ${Math.round(heavy.hp).toLocaleString()} HP`;}
    else e.bossBanner.classList.add('hidden');
    e.roundBanner.classList.toggle('hidden',!g.roundRunning||!['30','40','50','60','70','80','90','100'].includes(String(g.round)));
    if(g.roundRunning&&e.roundBanner)e.roundBanner.textContent=`Round ${g.round}`;
  }
  toast(message,kind='info'){
    const d=document.createElement('div');d.className='toast';d.dataset.kind=kind;d.textContent=message;this.els.toastLayer.appendChild(d);setTimeout(()=>d.remove(),2800);
  }
}
