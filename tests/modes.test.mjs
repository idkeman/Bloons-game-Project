import test from "node:test";
import assert from "node:assert/strict";

import {
  GAME_MODES,
  getGameMode,
  applyModeToCash,
  applyModeToHealth,
  applyModeToSpeed,
  applyModeToIncome
} from "../src/game_modes.js";

test("all game modes expose complete numeric rule profiles", () => {
  for (const mode of Object.values(GAME_MODES)) {
    assert.ok(mode.id);
    assert.ok(mode.name);
    assert.ok(mode.description);
    assert.ok(Number.isFinite(mode.cashMultiplier));
    assert.ok(Number.isFinite(mode.bloonSpeed));
    assert.ok(Number.isFinite(mode.bloonHealth));
    assert.ok(Number.isFinite(mode.startingLives));
    assert.ok(Number.isFinite(mode.incomeMultiplier));
    assert.ok(Number.isFinite(mode.abilityCooldownMultiplier));
  }
});

test("unknown modes safely resolve to standard", () => {
  assert.equal(
    getGameMode("does-not-exist").id,
    "standard"
  );
});

test("mode modifiers are applied independently", () => {
  const mode = GAME_MODES.halfCash;

  assert.equal(
    applyModeToCash(1000, mode),
    500
  );

  assert.equal(
    applyModeToIncome(1000, mode),
    500
  );

  assert.equal(
    applyModeToHealth(1000, mode),
    1000
  );

  assert.equal(
    applyModeToSpeed(1000, mode),
    1000
  );
});

test("double health mode doubles bloon health without changing base cash", () => {
  const mode = GAME_MODES.doubleHealth;

  assert.equal(
    applyModeToHealth(250, mode),
    500
  );

  assert.equal(
    applyModeToCash(250, mode),
    250
  );
});

test("apocalypse mode explicitly requests automatic rounds", () => {
  assert.equal(
    GAME_MODES.apocalypse.autoRounds,
    true
  );
});

test("reverse mode is an explicit route modifier", () => {
  assert.equal(
    GAME_MODES.reverse.id,
    "reverse"
  );
});