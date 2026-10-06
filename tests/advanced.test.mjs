import test from "node:test";
import assert from "node:assert/strict";

import { BLOONS, MAPS, TOWERS } from "../src/data.js";
import { Bloon, Tower } from "../src/entities.js";
import { RoutePath } from "../src/path.js";
import { TrapSystem } from "../src/traps.js";
import { BossController } from "../src/bosses.js";
import { ProgressionSystem, ACHIEVEMENTS } from "../src/progression.js";
import { canPlaceAt } from "../src/placement.js";

function makePath() {
  return new RoutePath(
    MAPS[0].path.map(([x, y]) => [
      x * 1000,
      y * 700
    ])
  );
}

test("camo units reject attacks without detection and accept detected attacks", () => {
  const bloon = new Bloon({
    id: "camo-1",
    type: "pink",
    progress: 0.2,
    path: makePath(),
    camo: true
  });

  const blocked = bloon.takeDamage(5, {
    canHitHidden: false
  });

  assert.equal(blocked.damage, 0);
  assert.equal(blocked.blocked, "hidden");
  assert.equal(bloon.alive, true);

  const detected = bloon.takeDamage(5, {
    canHitHidden: true
  });

  assert.ok(detected.damage > 0);
});

test("regrowing enemies recover health only while not under damage-over-time", () => {
  const bloon = new Bloon({
    id: "regrow-1",
    type: "ceramic",
    progress: 0.2,
    path: makePath(),
    regrow: true
  });

  bloon.takeDamage(4, {
    canHitHidden: true,
    canBreakArmor: true
  });

  const afterHit = bloon.health;
  bloon.update(1, 1);

  assert.ok(bloon.health > afterHit);

  bloon.applyBurn(10, 2);
  const beforeBurnTick = bloon.health;

  bloon.update(0.2, 1);

  assert.ok(bloon.health < beforeBurnTick);
});

test("water-only placement is legal in water and illegal on land", () => {
  const map = MAPS.find(
    (candidate) => candidate.water
  );

  const waterTower = {
    ...TOWERS.sub,
    placement: "water"
  };

  const path = new RoutePath(
    map.path.map(([x, y]) => [
      x * 1000,
      y * 700
    ])
  );

  const water = map.waterZones[0];

  const waterPoint = {
    x: (water.x + water.w / 2) * 1000,
    y: 0.08 * 700
  };

  const waterResult = canPlaceAt({
    x: waterPoint.x,
    y: waterPoint.y,
    map,
    width: 1000,
    height: 700,
    path,
    towerConfig: waterTower,
    occupiedUnits: []
  });

  assert.equal(
    waterResult.ok ||
      waterResult.reason === "track",
    true
  );

  const landResult = canPlaceAt({
    x: 80,
    y: 80,
    map,
    width: 1000,
    height: 700,
    path,
    towerConfig: waterTower,
    occupiedUnits: []
  });

  assert.equal(
    landResult.reason,
    "requires-water"
  );
});

test("spike traps consume pierce and register damage", () => {
  const game = {
    path: makePath(),
    bloons: [],
    traps: [],
    registerDamage(ownerId, damage, destroyed) {
      this.lastDamage = {
        ownerId,
        damage,
        destroyed
      };
    }
  };

  const traps = new TrapSystem(game);
  game.trapsystem = traps;

  const config = TOWERS.spike;

  const tower = new Tower({
    id: "spike-1",
    type: "spike",
    x: 100,
    y: 100,
    config
  });

  const progress = 0.45;
  const trap = traps.place(
    "spike",
    tower,
    progress
  );

  const bloon = new Bloon({
    id: "red-1",
    type: "red",
    progress,
    path: game.path
  });

  game.bloons.push(bloon);

  const originalPierce = trap.pierce;

  traps.update();

  assert.ok(
    trap.pierce < originalPierce ||
      !trap.alive
  );

  assert.ok(game.lastDamage?.damage > 0);
});

test("boss controller advances each phase once", () => {
  const game = {
    towers: [],
    bloons: [],
    spawned: 0,
    emit() {},
    spawnBloon() {
      this.spawned += 1;
    }
  };

  const boss = new Bloon({
    id: "boss-1",
    type: "bossTitan",
    progress: 0.3,
    path: makePath()
  });

  game.bloons.push(boss);

  const controller = new BossController(game);

  boss.health = boss.maxHealth * 0.74;
  controller.update();

  assert.equal(boss.bossPhase, 1);
  assert.equal(game.spawned, 2);

  controller.update();

  assert.equal(boss.bossPhase, 1);
  assert.equal(game.spawned, 2);

  boss.health = boss.maxHealth * 0.49;
  controller.update();

  assert.equal(boss.bossPhase, 2);
  assert.equal(game.spawned, 3);
});

test("progression awards the century achievement once", () => {
  const profile = {
    level: 1,
    monkeyMoney: 5000,
    progression: null
  };

  const save = {
    profile() {
      return profile;
    },
    saveProfile(next) {
      Object.assign(profile, next);
    }
  };

  const progression = new ProgressionSystem(save);
  progression.state.lifetimePops = 100;
  progression.checkAchievements();
  progression.persist();

  assert.ok(
    profile.progression.achievements.includes(
      "century"
    )
  );

  const creditsAfterFirst =
    profile.progression.frontierCredits;

  progression.checkAchievements();

  assert.equal(
    progression.state.achievements.filter(
      (id) => id === "century"
    ).length,
    1
  );

  assert.equal(
    progression.state.frontierCredits,
    creditsAfterFirst
  );
});

test("achievement catalog is composed of executable predicates", () => {
  for (const achievement of ACHIEVEMENTS) {
    assert.ok(achievement.id);
    assert.ok(achievement.name);
    assert.ok(
      typeof achievement.check === "function"
    );
  }
});