import assert from 'node:assert/strict';
import { GameEngine, GameState } from '../src/engine.js';
import { TOWERS, MAPS, PARAGONS } from '../src/data.js';

globalThis.localStorage={setItem(){},getItem(){return null;},removeItem(){}};
globalThis.performance={now:()=>0};
globalThis.window={devicePixelRatio:1};
globalThis.ResizeObserver=class{observe(){}};
const noop=()=>{};
const ctx=new Proxy({}, {get:()=>noop});
const canvas={getContext:()=>ctx,parentElement:{},getBoundingClientRect:()=>({width:1280,height:820}),addEventListener:noop};

for(const map of Object.values(MAPS)){
  const g=new GameEngine(canvas);
  g.startNewGame({mapId:map.id,difficultyId:'normal',modeId:'standard',heroId:'ember'});
  assert.equal(g.state,GameState.PLAYING);
  assert.equal(g.paths.length,map.paths.length);
  for(const tower of Object.values(TOWERS)){
    assert.equal(tower.paths.length,3);
    assert.equal(tower.paths.every(path=>path.length===5),true);
    assert.ok(PARAGONS[tower.id]);
  }
}

const g=new GameEngine(canvas);
g.startNewGame({mapId:'meadow',difficultyId:'normal',modeId:'standard',heroId:'ember'});
g.cash=100000;
const h=g.placeHero(75,70);
assert.ok(h);
for(let i=0;i<1000;i++)h.heroGainXp(2);
assert.ok(h.level>1,'hero should level from XP');
assert.equal(g.heroLevel,h.level,'engine hero level must follow hero level');
assert.ok(h.getAbilities().length>0,'unlocked hero abilities should become available');
const spike=g.placeTower('spike',390,60);
assert.ok(spike && spike.isSpike);
g.spawnBloon('red',8,.1,1);
const before=spike.spikes?.length||0;
for(let i=0;i<30;i++)g.update(.1);
assert.ok((spike.spikes?.length||0)>before || g.totalPops>0,'spike tower should update and interact with bloons');
const plan=g.buildRoundPlan(100);
assert.ok(plan.some(x=>x.type==='bloonBoss'),'round 100 must contain the Ruin Warden');
assert.ok(g.buildRoundPlan(60).some(x=>x.type==='ddt'),'round 60 must contain Shadow Blimps');
console.log('Extended systems test PASS');
