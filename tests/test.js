/*
 * Lightweight browser regression suite.
 * It can run by opening tests/test.html, or be imported from the dev console.
 */

import { TOWERS, ENEMIES, MAPS, ROUNDS, getTower, getEnemy, getMap } from "../js/data.js";
import { Tower } from "../js/engine.js";

const results = [];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function record(name, fn) {
  try {
    fn();
    results.push({ name, pass: true });
  } catch (error) {
    results.push({ name, pass: false, error: error.message });
  }
}

record("tower registry is non-empty", () => {
  assert(TOWERS.length >= 20, "Expected at least 20 towers.");
});

record("every tower has three upgrade paths", () => {
  for (const tower of TOWERS) {
    assert(Array.isArray(tower.paths), tower.id + " has no paths.");
    assert(tower.paths.length === 3, tower.id + " does not have exactly three paths.");
    assert(tower.paths.every((path) => path.length === 5), tower.id + " has incomplete upgrade paths.");
  }
});

record("enemy registry is non-empty", () => {
  assert(ENEMIES.length >= 15, "Expected a broad enemy roster.");
});

record("maps have valid starting path geometry", () => {
  for (const map of MAPS) {
    assert(map.path.length >= 2, map.id + " has an invalid primary path.");
    for (const point of map.path) {
      assert(point.x >= 0 && point.x <= 1, map.id + " has an invalid x coordinate.");
      assert(point.y >= 0 && point.y <= 1, map.id + " has an invalid y coordinate.");
    }
  }
});

record("150 wave definitions are generated", () => {
  assert(ROUNDS.length === 150, "Expected 150 rounds.");
  assert(ROUNDS[0].profile.length > 0, "Wave one has no enemies.");
  assert(ROUNDS[149].profile.some((entry) => entry.id === "apocalypse"), "Final wave lacks its final boss.");
});

record("lookup functions are stable", () => {
  assert(getTower(TOWERS[0].id) === TOWERS[0], "Tower lookup mismatch.");
  assert(getEnemy(ENEMIES[0].id) === ENEMIES[0], "Enemy lookup mismatch.");
  assert(getMap(MAPS[0].id) === MAPS[0], "Map lookup mismatch.");
});

record("upgrade data is numerically valid", () => {
  for (const tower of TOWERS) {
    assert(Number.isFinite(tower.cost) && tower.cost > 0, tower.id + " base cost invalid.");
    for (const path of tower.paths) {
      for (const upgrade of path) {
        assert(Number.isFinite(upgrade.cost) && upgrade.cost >= tower.cost * 0.3, tower.id + " upgrade cost suspicious.");
        assert(typeof upgrade.description === "string" && upgrade.description.length > 5, tower.id + " upgrade description missing.");
      }
    }
  }
});

record("enemy data has positive survivability", () => {
  for (const enemy of ENEMIES) {
    assert(enemy.hp > 0, enemy.id + " hp invalid.");
    assert(enemy.speed > 0, enemy.id + " speed invalid.");
    assert(enemy.radius > 0, enemy.id + " radius invalid.");
  }
});

const output = document.querySelector("#testResults");
if (output) {
  output.innerHTML = results.map((result) =>
    '<div class="' + (result.pass ? "pass" : "fail") + '"><strong>' +
    (result.pass ? "PASS" : "FAIL") + '</strong> ' + result.name +
    (result.error ? "<pre>" + result.error + "</pre>" : "") + "</div>"
  ).join("");
  const failed = results.filter((result) => !result.pass).length;
  document.querySelector("#summary").textContent = failed ? failed + " test(s) failed." : "All data integrity tests passed.";
}

export { results };
