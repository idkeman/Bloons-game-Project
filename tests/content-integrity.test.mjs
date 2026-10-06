import test from "node:test";
import assert from "node:assert/strict";

import { TOWERS, MAPS, HEROES, BLOONS } from "../src/data.js";
import { PARAGONS } from "../src/paragons.js";
import { TOWER_RULES } from "../src/tower_rules.js";

test("every tower has complete upgrade content and a combat rule", () => {
  const towerIds = Object.keys(TOWERS);

  assert.equal(
    towerIds.length,
    27
  );

  for (const id of towerIds) {
    const tower = TOWERS[id];

    assert.ok(tower.name);
    assert.ok(tower.description);
    assert.ok(tower.placement);
    assert.ok(tower.cost > 0);
    assert.equal(tower.paths.length, 3);
    assert.ok(TOWER_RULES[id]);

    for (const path of tower.paths) {
      assert.equal(path.length, 5);

      for (const upgrade of path) {
        assert.ok(upgrade.id);
        assert.ok(upgrade.name);
        assert.ok(upgrade.cost > 0);
        assert.equal(upgrade.path >= 0, true);
        assert.equal(
          upgrade.tier >= 1 &&
          upgrade.tier <= 5,
          true
        );
      }
    }
  }
});

test("every tower has a unique Paragon definition", () => {
  assert.equal(
    Object.keys(PARAGONS).length,
    27
  );

  for (const id of Object.keys(TOWERS)) {
    const paragon = PARAGONS[id];

    assert.ok(paragon);
    assert.ok(paragon.name);
    assert.ok(paragon.color);
    assert.ok(
      paragon.features.length >= 2
    );
  }

  assert.equal(
    new Set(
      Object.values(PARAGONS).map(
        (paragon) => paragon.name
      )
    ).size,
    27
  );
});

test("maps and heroes contain stable unique IDs", () => {
  assert.ok(MAPS.length >= 16);
  assert.ok(HEROES.length >= 4);

  assert.equal(
    new Set(MAPS.map((map) => map.id)).size,
    MAPS.length
  );

  assert.equal(
    new Set(HEROES.map((hero) => hero.id)).size,
    HEROES.length
  );
});

test("all enemy definitions have complete simulation fields", () => {
  for (const enemy of Object.values(BLOONS)) {
    assert.ok(enemy.id);
    assert.ok(enemy.name);
    assert.ok(enemy.layer > 0);
    assert.ok(enemy.health > 0);
    assert.ok(enemy.speed > 0);
    assert.ok(enemy.reward > 0);

    if (enemy.children) {
      for (const child of enemy.children) {
        assert.ok(BLOONS[child]);
      }
    }
  }
});