import { GameEngine, GameState } from './engine.js';
import { UIController } from './ui.js';

const canvas=document.getElementById('gameCanvas');
const game=new GameEngine(canvas);
const ui=new UIController(game);

function setGameInputs(){
  canvas.addEventListener('mousemove',ev=>{
    const r=canvas.getBoundingClientRect();
    game.lastWorldMouse=game.screenToWorld(ev.clientX-r.left,ev.clientY-r.top);
  });
  canvas.addEventListener('mouseleave',()=>{game.lastWorldMouse=null;});
  canvas.addEventListener('click',ev=>{
    const r=canvas.getBoundingClientRect();
    const p=game.screenToWorld(ev.clientX-r.left,ev.clientY-r.top);
    if(game.state!==GameState.PLAYING)return;
    if(ui.buildMode&&game.pendingTower){game.tryPlaceAt(p.x,p.y);return;}
    game.selectAt(p.x,p.y);
  });
  canvas.addEventListener('contextmenu',ev=>{ev.preventDefault();game.pendingTower=null;});
}
setGameInputs();

game.startLoop();

setInterval(()=>ui.update(),100);
setInterval(()=>{if(game.state===GameState.PLAYING)game.save();},5000);

window.addEventListener('beforeunload',()=>game.save());

// Keep game state and UI synchronized even when the browser throttles timers.
function stateWatch(){
  ui.update();
  requestAnimationFrame(stateWatch);
}
stateWatch();
