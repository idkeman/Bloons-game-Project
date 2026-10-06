import assert from 'node:assert/strict';
import { GameEngine } from '../src/engine.js';

globalThis.localStorage={setItem(){},getItem(){return null;},removeItem(){}};
globalThis.performance={now:()=>0};
globalThis.window={devicePixelRatio:1};
globalThis.ResizeObserver=class{observe(){}};
const noop=()=>{};
const ctx=new Proxy({}, {get:()=>noop});
const canvas={getContext:()=>ctx,parentElement:{},getBoundingClientRect:()=>({width:1280,height:820}),addEventListener:noop};

const game=new GameEngine(canvas);
game.startNewGame({mapId:'canyon',difficultyId:'normal',modeId:'standard',heroId:'ranger'});
game.cash=1000000;
const a=game.placeTower('dart',80,90);
const b=game.placeTower('dart',350,90);
const c=game.placeTower('dart',620,90);
assert.ok(a&&b&&c);
for(let i=0;i<5;i++)assert.equal(a.buyUpgrade(0),true);
for(let i=0;i<5;i++)assert.equal(b.buyUpgrade(1),true);
for(let i=0;i<5;i++)assert.equal(c.buyUpgrade(2),true);
const recipe=a.getParagonRecipe();
assert.ok(recipe&&recipe.length===3,'three physical path-specific T5 sacrifices required');
assert.equal(a.createParagon(),true);
assert.equal(game.towers.filter(t=>!t.sold).length,1);
assert.equal(game.towers.filter(t=>!t.sold)[0].paragon,true);
assert.equal(game.towers.filter(t=>!t.sold)[0].paragonDegree>=1,true);
console.log('Paragon test PASS (Degree '+game.towers.filter(t=>!t.sold)[0].paragonDegree+')');
