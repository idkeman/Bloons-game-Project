import test from "node:test";
import assert from "node:assert/strict";

import { PARAGONS, calculateDegree, canCreateParagon } from "../src/paragons.js";
import { TOWERS } from "../src/data.js";
import { Tower } from "../src/entities.js";

test("every playable tower has a unique Paragon definition", () => {
  assert.ok(Object.keys(PARAGONS).length >= 27);

  const names = new Set();

  for (const [towerId, data] of Object.entries(PARAGONS)) {
    assert.ok(TOWERS[towerId]);
    assert.ok(data.name);
    assert.ok(data.color);
    assert.ok(Array.isArray(data.features));
    assert.ok(data.features.length >= 2);
    assert.ok(!names.has(data.name));
    names.add(data.name);
  }
});

test("Paragon degree increases with sacrifice and extra cash value", () => {
  const paragonData = PARAGONS.sharpshooter;

  const low = calculateDegree({
    cashSpent: 25000,
    sacrificeValue: 15000,
    extraCash: 0,
    paragonData
  });

  const high = calculateDegree({
    cashSpent: 25000,
    sacrificeValue: 50000,
    extraCash: 100000,
    paragonData
  });

  assert.ok(high > low);
  assert.ok(low >= 1);
  assert.ok(high <= 100);
});

test("exactly three qualifying Tier 5 towers are required", () => {
  const config = TOWERS.sharpshooter;

  const makeTower = (id) => {
    const tower = new Tower({
      id,
      type: "sharpshooter",
      x: 100 + id.length,
      y: 100,
      config
    });

    tower.pathLevels = [5, 0, 0];
    return tower;
  };

  assert.equal(
    canCreateParagon(
      [makeTower("a"), makeTower("b")],
      "sharpshooter"
    ),
    false
  );

  assert.equal(
    canCreateParagon(
      [makeTower("a"), makeTower("b"), makeTower("c")],
      "sharpshooter"
    ),
    true
  );
});