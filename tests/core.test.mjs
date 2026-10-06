import test from "node:test";
import assert from "node:assert/strict";

import { TOWERS, BLOONS, MAPS } from "../src/data.js";
import { Tower, Bloon } from "../src/entities.js";
import { RoutePath } from "../src/path.js";
import { createRound } from "../src/rounds.js";

test("all tower definitions expose three complete five-tier paths", () => {
  const towers = Object.values(TOWERS);

  assert.ok(towers.length >= 27);

  for (const tower of towers) {
    assert.equal(tower.paths.length, 3);

    for (const path of tower.paths) {
      assert.equal(path.length, 5);

      for (const upgrade of path) {
        assert.ok(Number.isFinite(upgrade.cost));
        assert.ok(upgrade.cost > 0);
        assert.ok(upgrade.name.length > 0);
      }
    }
  }
});

test("crosspath rules permit 2-2-1 but block simultaneous tier-three paths", () => {
  const config = TOWERS.sharpshooter;

  const tower = new Tower({
    id: "test-tower",
    type: "sharpshooter",
    x: 100,
    y: 100,
    config
  });

  assert.equal(tower.buyUpgrade(0, 1, 650).ok, true);
  assert.equal(tower.buyUpgrade(1, 1, 650).ok, true);
  assert.equal(tower.buyUpgrade(2, 1, 650).ok, true);

  assert.equal(tower.canBuy(0, 2), true);
  assert.equal(tower.canBuy(1, 2), true);
  assert.equal(tower.buyUpgrade(0, 2, 999999).ok, true);
  assert.equal(tower.canBuy(0, 3), true);
  assert.equal(tower.buyUpgrade(0, 3, 999999).ok, true);

  assert.equal(tower.buyUpgrade(1, 2, 999999).ok, true);
  assert.equal(tower.buyUpgrade(2, 2, 999999).ok, true);

  assert.equal(tower.canBuy(1, 3), false);
  assert.equal(tower.canBuy(2, 3), false);
});

test("layered enemies split at their current route progress", () => {
  const map = MAPS[0];
  const path = new RoutePath(
    map.path.map(([x, y]) => [x * 1000, y * 700])
  );

  const rainbow = new Bloon({
    id: "rainbow-1",
    type: "rainbow",
    progress: 0.42,
    path
  });

  const children = rainbow.splitChildren();

  assert.equal(children.length, 2);
  assert.equal(children[0].type, "zebra");
  assert.equal(children[0].progress <= 0.42, true);
  assert.equal(children[1].progress < children[0].progress, true);
});

test("armored enemies block ordinary physical damage", () => {
  const map = MAPS[0];
  const path = new RoutePath(
    map.path.map(([x, y]) => [x * 1000, y * 700])
  );

  const metal = new Bloon({
    id: "metal-1",
    type: "metal",
    progress: 0.3,
    path
  });

  const blocked = metal.takeDamage(100, {
    damageType: "physical",
    canBreakArmor: false
  });

  assert.equal(blocked.damage, 0);
  assert.equal(blocked.blocked, "physical");
  assert.equal(metal.alive, true);

  const energy = metal.takeDamage(5, {
    damageType: "energy",
    canBreakArmor: true
  });

  assert.equal(energy.damage > 0, true);
});

test("round generation is deterministic for an identical seed", () => {
  const first = createRound(37, 991);
  const second = createRound(37, 991);

  assert.deepEqual(first, second);
  assert.ok(first.packages.length > 0);
  assert.ok(first.cashReward > 0);
});

test("boss rounds always reserve a boss package", () => {
  for (const round of [20, 40, 60, 80, 100]) {
    const definition = createRound(round, 7331);

    assert.equal(
      definition.packages.some(
        (entry) =>
          entry.type === "bossTitan" ||
          entry.type === "bossSentinel"
      ),
      true
    );
  }
});

test("every declared enemy has a valid layer and positive movement speed", () => {
  for (const enemy of Object.values(BLOONS)) {
    assert.ok(Number.isFinite(enemy.layer));
    assert.ok(enemy.layer > 0);
    assert.ok(enemy.speed > 0);
  }
});
