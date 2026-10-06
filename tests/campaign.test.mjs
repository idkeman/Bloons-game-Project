import test from "node:test";
import assert from "node:assert/strict";
import { ROUND_TABLE } from "../src/campaign_rounds.js";
import { createRound, freeplayScale } from "../src/rounds.js";

test("campaign table contains rounds 1 through 100", () => {
  assert.equal(Object.keys(ROUND_TABLE).length, 100);

  for (let round = 1; round <= 100; round += 1) {
    assert.equal(ROUND_TABLE[round].round, round);
    assert.ok(ROUND_TABLE[round].packages.length > 0);
    assert.ok(ROUND_TABLE[round].cashReward > 0);
  }
});

test("freeplay starts after the fixed campaign", () => {
  assert.equal(createRound(100, 7).round, 100);
  assert.equal(createRound(101, 7).round, 101);
  assert.equal(freeplayScale(100).health, 1);
  assert.ok(freeplayScale(101).health > 1);
});

test("campaign uses special enemy properties", () => {
  let hasCamo = false;
  let hasRegrow = false;
  let hasFortified = false;
  let hasBoss = false;

  for (const round of Object.values(ROUND_TABLE)) {
    for (const entry of round.packages) {
      hasCamo ||= Boolean(entry.camo);
      hasRegrow ||= Boolean(entry.regrow);
      hasFortified ||= Boolean(entry.fortified);
      hasBoss ||= entry.type === "bossTitan" || entry.type === "bossSentinel";
    }
  }

  assert.equal(hasCamo, true);
  assert.equal(hasRegrow, true);
  assert.equal(hasFortified, true);
  assert.equal(hasBoss, true);
});