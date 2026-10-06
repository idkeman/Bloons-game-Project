import assert from "node:assert/strict";
import { TOWERS, ENEMIES, MAPS, ROUNDS } from "../js/data.js";
import { Game, Tower } from "../js/engine.js";

const storageMap = new Map();
globalThis.localStorage = {
  getItem(key) { return storageMap.has(key) ? storageMap.get(key) : null; },
  setItem(key, value) { storageMap.set(key, String(value)); },
  removeItem(key) { storageMap.delete(key); }
};

globalThis.requestAnimationFrame = () => 1;

class FakeContext {
  setTransform() {}
  clearRect() {}
  createLinearGradient() { return { addColorStop() {} }; }
  fillRect() {}
  strokeRect() {}
  beginPath() {}
  moveTo() {}
  lineTo() {}
  stroke() {}
  fill() {}
  arc() {}
  save() {}
  restore() {}
  translate() {}
  fillText() {}
  measureText(text) { return { width: String(text).length * 6 }; }
}

class FakeCanvas {
  constructor() {
    this.listeners = new Map();
    this.width = 900;
    this.height = 700;
    this.context = new FakeContext();
  }
  getBoundingClientRect() {
    return { left: 0, top: 0, width: 900, height: 700 };
  }
  getContext() { return this.context; }
  addEventListener(name, handler) {
    const list = this.listeners.get(name) ?? [];
    list.push(handler);
    this.listeners.set(name, list);
  }
}

globalThis.window = {
  devicePixelRatio: 1,
  addEventListener() {}
};

assert.ok(TOWERS.length >= 20);
assert.ok(ENEMIES.length >= 15);
assert.equal(MAPS.length, 5);
assert.equal(ROUNDS.length, 150);

for (const tower of TOWERS) {
  assert.equal(tower.paths.length, 3, tower.id);
  for (const path of tower.paths) assert.equal(path.length, 5, tower.id);
}

const game = new Game(new FakeCanvas());
game.begin({ mapId: "greenway", difficultyId: "standard", challengeId: "scout" });

assert.equal(game.wave, 0);
assert.equal(game.cash, 650);
assert.equal(game.lives, 100);

const placed = new Tower(game, "sentinel", 600, 600);
assert.equal(game.isBuildable(600, 600, placed.spec), true);
game.towers.push(placed);
game.recalculateAuras();

const beforeCash = game.cash;
const beforeLevel = placed.level;
const upgradeResult = placed.upgrade(0);
assert.equal(upgradeResult.ok, true);
assert.equal(placed.level, beforeLevel + 1);
assert.ok(game.cash < beforeCash);
assert.ok(placed.pathLevels[0] === 1);

const waveStarted = game.startWave();
assert.equal(waveStarted, true);
assert.equal(game.wave, 1);
assert.equal(game.waveActive, true);
assert.ok(game.spawnQueue.length > 0);

for (let i = 0; i < 2000; i++) {
  game.update(0.05);
  if (!game.waveActive && game.wave >= 1) break;
}

assert.equal(game.waveActive, false, "Wave one did not resolve within smoke-test budget.");
assert.ok(game.cash >= 0);
assert.ok(game.lives > 0);

const sellValue = placed.sellValue();
assert.ok(sellValue > 0);
game.sellTower(placed);
assert.equal(game.towers.length, 0);

console.log("PASS: data registry");
console.log("PASS: game construction");
console.log("PASS: placement");
console.log("PASS: upgrade economy");
console.log("PASS: wave spawning");
console.log("PASS: simulation update");
console.log("PASS: wave resolution");
console.log("PASS: selling");
console.log("Skyfront Dominion smoke suite passed.");
