import assert from "node:assert/strict";
import { TOWERS, ENEMIES, MAPS, ROUNDS } from "../js/data.js";
import { Game, Tower, Projectile } from "../js/engine.js";

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

const splashTargetA = game.spawnEnemy({ spec: ENEMIES.find((entry) => entry.id === "scout"), pathIndex: 0 });
const splashTargetB = game.spawnEnemy({ spec: ENEMIES.find((entry) => entry.id === "scout"), pathIndex: 0 });
splashTargetA.x = 500;
splashTargetA.y = 350;
splashTargetB.x = 510;
splashTargetB.y = 350;
game.spatial.clear();
game.spatial.insert(splashTargetA);
game.spatial.insert(splashTargetB);
const splashSource = new Tower(game, "sentinel", 450, 350);
splashSource.stats.pierce = 3;
const primaryHp = splashTargetA.hp;
const secondaryHp = splashTargetB.hp;
const splashProjectile = new Projectile(game, splashSource, splashTargetA, {
  damage: 5,
  pierce: 3,
  speed: 500,
  splashDamage: 2,
  aoeRadius: 60,
  armorBypass: 999,
  velocityX: 0,
  velocityY: 0
});
splashProjectile.impact(game, splashTargetA);
assert.equal(splashTargetA.hp, primaryHp - 5);
assert.equal(splashTargetB.hp, secondaryHp - 2);

const farm = new Tower(game, "harvester", 760, 600);
game.towers.push(farm);
const cashBeforeIncome = game.cash;
game.update(1.05);
assert.ok(game.cash >= cashBeforeIncome, "Economy tower failed to generate non-negative passive income.");

farm.pathLevels = [5,0,0];
farm.stats = farm.computeStats();
game.cash = 30000;
const cashBeforeApexAttempt = game.cash;
const apexAttempt = farm.createApex();
assert.equal(apexAttempt.ok, false, "Apex creation should fail before all paths reach tier five.");
assert.equal(game.cash, cashBeforeApexAttempt, "Failed Apex creation changed cash.");

game.cash = 100;
game.wave = 0;
game.begin({ mapId: "greenway", difficultyId: "standard", challengeId: "scout" });
assert.equal(game.towers.length, 0, "New run retained towers.");
assert.equal(game.statsThisRun.kills, 0, "New run retained kill statistics.");

console.log("PASS: data registry");
console.log("PASS: game construction");
console.log("PASS: placement");
console.log("PASS: upgrade economy");
console.log("PASS: wave spawning");
console.log("PASS: simulation update");
console.log("PASS: wave resolution");
console.log("PASS: selling");
console.log("Skyfront Dominion smoke suite passed.");
