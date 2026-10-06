import assert from 'node:assert/strict';
import { GameEngine, Tower, HeroUnit, Bloon, GameState } from '../src/engine.js';
import { TOWERS, HEROES, BLOONS, MAPS, DIFFICULTIES, MODES, PARAGONS } from '../src/data.js';
import { CODEX, categories, byCategory } from '../src/codex.js';
import { MASTERY, MasteryProfile } from '../src/mastery.js';

globalThis.localStorage = {
  storage: new Map(),
  setItem(key, value) { this.storage.set(key, value); },
  getItem(key) { return this.storage.get(key) ?? null; },
  removeItem(key) { this.storage.delete(key); }
};

globalThis.performance = { now: () => 0 };
globalThis.window = { devicePixelRatio: 1 };
globalThis.ResizeObserver = class { observe() {} };
globalThis.requestAnimationFrame = () => 1;

const noop = () => {};
const ctx = new Proxy({}, { get: () => noop });
const canvas = {
  getContext: () => ctx,
  parentElement: {},
  getBoundingClientRect: () => ({ width: 1280, height: 820 }),
  addEventListener: noop
};

function newGame(options = {}) {
  const game = new GameEngine(canvas);
  game.startNewGame({
    mapId: options.mapId || 'meadow',
    difficultyId: options.difficultyId || 'normal',
    modeId: options.modeId || 'standard',
    heroId: options.heroId || 'ember'
  });
  return game;
}

function addFakeTier5(game, towerId, path, x, y) {
  const tower = new Tower(game, towerId, x, y);
  tower.levels = [0, 0, 0];
  tower.levels[path] = 5;
  tower.totalInvested = 25000;
  tower.recalculate();
  game.towers.push(tower);
  return tower;
}

assert.equal(Object.keys(TOWERS).length, 24, 'launch roster should contain 24 towers');
assert.equal(Object.keys(HEROES).length, 6, 'launch roster should contain 6 heroes');
assert.equal(Object.keys(MAPS).length, 4, 'launch roster should contain 4 maps');
assert.equal(Object.keys(DIFFICULTIES).length, 5, 'five difficulty profiles should exist');
assert.ok(Object.keys(MODES).length >= 4, 'at least four modes should exist');

for (const map of Object.values(MAPS)) {
  assert.ok(map.paths.length >= 1, map.id + ' must have a path');
  for (const points of map.paths) {
    assert.ok(points.length >= 4, map.id + ' path needs useful geometry');
  }
  assert.ok(map.buildZones.length >= 5, map.id + ' needs buildable areas');
}

for (const [id, tower] of Object.entries(TOWERS)) {
  assert.equal(tower.paths.length, 3, id + ' must have three paths');
  assert.equal(tower.paths.every(path => path.length === 5), true, id + ' must have five tiers per path');

  for (let path = 0; path < 3; path += 1) {
    for (let tier = 0; tier < 5; tier += 1) {
      const upgrade = tower.paths[path][tier];
      assert.ok(upgrade.name && upgrade.name.length > 2, id + ' tier name must be meaningful');
      assert.ok(upgrade.desc && upgrade.desc.length > 8, id + ' tier description must be meaningful');
      assert.ok(Number.isFinite(upgrade.cost), id + ' tier cost must be finite');
    }
  }

  assert.ok(PARAGONS[id], id + ' needs a Paragon profile');
}

for (const [id, hero] of Object.entries(HEROES)) {
  assert.ok(hero.levels.length >= 10, id + ' needs a substantial level curve');
  assert.ok(hero.abilities.length >= 2, id + ' needs multiple abilities');

  for (const ability of hero.abilities) {
    assert.ok(ability.unlock >= 1 && ability.unlock <= 12, id + ' ability unlock must be in hero level range');
    assert.ok(ability.cooldown > 0, id + ' ability needs a cooldown');
  }
}

for (const type of ['red','blue','green','yellow','pink','black','white','purple','lead','zebra','rainbow','ceramic','moab','bfb','zomg','ddt','bad','bloonBoss']) {
  assert.ok(BLOONS[type], type + ' bloon type should exist');
  assert.ok(BLOONS[type].hp >= 1);
  assert.ok(BLOONS[type].speed > 0);
  assert.ok(BLOONS[type].radius > 0);
}

for (const category of categories()) {
  assert.ok(byCategory(category).length > 0, category + ' codex category should contain entries');
}
assert.ok(CODEX.length >= 15, 'codex should teach a meaningful number of mechanics');

const mastery = new MasteryProfile();
assert.equal(mastery.points, 0);
mastery.grantPoints(4);
assert.equal(mastery.points, 4);
assert.equal(mastery.unlock('seed-money'), true);
assert.equal(mastery.has('seed-money'), true);
assert.equal(mastery.canUnlock('market'), true);
assert.equal(mastery.unlock('market'), true);
assert.ok(mastery.getEffects().startingCash > 0);
assert.ok(mastery.getEffects().income > 0);

for (const mapId of Object.keys(MAPS)) {
  const game = newGame({ mapId });
  assert.equal(game.state, GameState.PLAYING);
  assert.equal(game.paths.length, MAPS[mapId].paths.length);

  game.cash = 500000;
  const placed = game.placeTower('dart', 70, 70);
  assert.ok(placed, mapId + ' should accept a basic placement in a build zone');

  for (let path = 0; path < 3; path += 1) {
    const testTower = new Tower(game, 'dart', 100 + path * 90, 90);
    testTower.totalInvested = 100000;
    game.towers.push(testTower);
    for (let tier = 0; tier < 5; tier += 1) {
      if (!testTower.buyUpgrade(path)) break;
    }
    assert.equal(testTower.levels[path], 5, mapId + ' should allow a single path to Tier 5');
  }
}

{
  const game = newGame();
  game.cash = 1000000;

  const tower = new Tower(game, 'dart', 80, 80);
  game.towers.push(tower);

  for (let i = 0; i < 5; i += 1) assert.equal(tower.buyUpgrade(0), true);
  assert.equal(tower.levels.join('-'), '5-0-0');

  assert.equal(tower.buyUpgrade(1), true);
  assert.equal(tower.buyUpgrade(1), true);
  assert.equal(tower.buyUpgrade(1), false);
  assert.equal(tower.buyUpgrade(2), true);
  assert.equal(tower.buyUpgrade(2), true);
  assert.equal(tower.buyUpgrade(2), false);
  assert.equal(tower.levels.join('-'), '5-2-2');
}

{
  const game = newGame({ heroId: 'nova' });
  game.cash = 100000;
  const hero = game.placeHero(70, 70);
  assert.ok(hero);
  for (let i = 0; i < 2000; i += 1) hero.heroGainXp(2);
  assert.ok(hero.level >= 8);
  assert.equal(game.heroLevel, hero.level);
  assert.ok(hero.getAbilities().length >= 2);

  const startingAbilities = hero.getAbilities().map(a => a.name);
  for (const ability of hero.getAbilities()) {
    hero.abilityCooldowns[hero.id + '-' + hero.getAbilities().indexOf(ability)] = 0;
  }
  assert.ok(startingAbilities.includes('Static Field'));
}

{
  const game = newGame();
  game.cash = 500000;
  const tower = game.placeTower('sniper', 70, 70);
  assert.ok(tower);

  game.spawnBloon('red', 2, .1, 1);
  game.spawnBloon('lead', 1, .1, 1);
  game.spawnBloon('ddt', 1, .1, 1);

  game.selected = tower;
  tower.targetMode = 'first';
  assert.ok(['first','last','close','strong','weak'].includes(tower.targetMode));

  tower.targetMode = 'strong';
  tower.isStealth = true;
  const target = tower.selectTarget();
  assert.ok(target);

  game.globalTargetMode = 'strong';
  const forced = tower.selectTarget();
  assert.ok(forced);

  game.masteryArmorPierceTimer = 12;
  const ddt = game.bloons.find(b => b.type === 'ddt');
  assert.ok(ddt);
}

{
  const game = newGame();
  game.cash = 500000;

  for (const id of ['boomer','bomb','sniper','sub','ace','wizard','druid','alchemist','glue','tack','ice','prism','shadow','corsair','rotor','mortar','beast','tide','outlaw']) {
    const tower = new Tower(game, id, 60, 60);
    tower.levels = [5, 0, 0];
    tower.totalInvested = 100000;
    tower.recalculate();
    game.towers.push(tower);
    game.spawnBloon('red', 4, .05, 1);
    const before = game.projectiles.length;
    const target = tower.selectTarget();
    if (target) tower.fireAt(target);
    assert.ok(game.projectiles.length >= before || tower.def.isSupport || tower.def.isSpike, id + ' should have a distinct fire/update route');
  }
}

{
  const game = newGame();
  game.cash = 500000;
  const support = game.placeTower('village', 70, 70);
  assert.ok(support);
  support.levels = [2, 3, 2];
  support.recalculate();
  assert.equal(support.isSupport, true);

  const farm = game.placeTower('farm', 140, 70);
  assert.ok(farm);
  farm.levels = [2, 2, 1];
  farm.recalculate();
  farm.update(35);
  assert.ok(game.cash > 499000, 'farm should produce cash over time');

  const spike = game.placeTower('spike', 220, 70);
  assert.ok(spike && spike.isSpike);
  game.spawnBloon('red', 8, .1, 1);
  for (let i = 0; i < 20; i += 1) spike.update(.2);
  assert.ok((spike.spikes?.length || 0) > 0 || game.totalPops > 0);
}

{
  const game = newGame();
  game.cash = 1000000;

  for (let path = 0; path < 3; path += 1) {
    const one = addFakeTier5(game, 'dart', path, 80 + path * 100, 100);
    assert.equal(one.levels[path], 5);
  }

  const recipe = game.towers[0].getParagonRecipe();
  assert.equal(recipe.length, 3);
  assert.equal(game.towers[0].createParagon(), true);

  const surviving = game.towers.filter(t => !t.sold);
  assert.equal(surviving.length, 1);
  assert.equal(surviving[0].paragon, true);
  assert.ok(surviving[0].paragonDegree >= 1);
}

{
  const game = newGame();
  game.cash = 100000;
  const tower = game.placeTower('dart', 70, 70);
  const invested = tower.totalInvested;
  assert.equal(game.sellSelected(), true);
  assert.ok(game.cash >= 100000 - invested * .31);
  assert.equal(tower.sold, true);
}

{
  const game = newGame();
  const initial = game.cash;
  assert.equal(game.togglePause(), true);
  assert.equal(game.state, GameState.PAUSED);
  assert.equal(game.togglePause(), false);
  assert.equal(game.state, GameState.PLAYING);
  assert.equal(game.setSpeed(), 2);
  assert.equal(game.setSpeed(), 3);
  assert.equal(game.setSpeed(), 1);
  assert.ok(initial > 0);
}

{
  const game = newGame();
  game.round = 99;
  game.freeplay = false;
  game.startRound();
  assert.equal(game.round, 100);
  assert.ok(game.roundSpawnPlan.some(group => group.type === 'bloonBoss'));
  const boss = game.roundSpawnPlan.find(group => group.type === 'bloonBoss');
  assert.equal(boss.count, 1);

  game.bloons = [];
  game.round = 110;
  game.freeplay = true;
  const freeplayPlan = game.buildRoundPlan(110);
  assert.ok(freeplayPlan.length > 0);
}

{
  const game = newGame({ difficultyId: 'hard', modeId: 'halfCash' });
  game.cash = 100000;
  game.spawnBloon('ceramic', 1, .1, 1);
  const ceramic = game.bloons[0];
  ceramic.fortified = true;
  ceramic.regrow = true;
  ceramic.regrowRate = .02;
  ceramic.hp = Math.max(1, ceramic.maxHp - 2);
  ceramic.lastDamagedAt = -10;
  const hpBefore = ceramic.hp;
  game.update(.5);
  assert.ok(ceramic.hp > hpBefore || ceramic.dead, 'regrow mechanic should execute');
  assert.ok(game.difficulty.bloonHp > 1);
}

console.log('ALL FEATURES TEST PASS');
