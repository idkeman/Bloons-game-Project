import { BLOONS } from "./data.js";
import { clamp } from "./math.js";

const ORDER = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "zebra",
  "rainbow",
  "ceramic",
  "metal",
  "prism"
];

export function freeplayScale(round) {
  if (round <= 80) {
    return {
      health: 1,
      speed: 1,
      cash: 1
    };
  }

  const extra = round - 80;
  const curve = 1 + Math.pow(extra / 20, 1.22);

  return {
    health: curve,
    speed: 1 + extra * 0.006,
    cash: 1 + extra * 0.01
  };
}

export function createRound(round, seed = 1) {
  const packages = [];
  const scale = freeplayScale(round);

  if (round % 20 === 0) {
    const bossType = round >= 80 ? "bossSentinel" : "bossTitan";

    packages.push({
      type: bossType,
      count: 1,
      spacing: 0.9,
      fortified: true
    });

    const supportCount = Math.max(2, Math.floor(round / 15));

    packages.push({
      type: round >= 60 ? "dreadBlimp" : "fortBlimp",
      count: supportCount,
      spacing: 0.45,
      fortified: true
    });
  }

  const difficultyBudget = 22 + round * 6.2 * scale.health;
  let remaining = Math.max(10, Math.floor(difficultyBudget));
  let cursor = Math.floor(round / 9);
  let guard = 0;

  while (remaining > 0 && guard < 900) {
    guard += 1;

    const maxIndex = clamp(
      Math.floor(round / 10) + 1,
      0,
      ORDER.length - 1
    );

    cursor = (cursor + 7 + (seed % 11)) % (maxIndex + 1);

    const type = ORDER[cursor];
    const data = BLOONS[type];
    const unitCost = Math.max(1, data.layer);
    const count = Math.max(
      1,
      Math.min(16, Math.floor(remaining / unitCost))
    );

    packages.push({
      type,
      count,
      spacing: Math.max(0.08, 0.46 - round * 0.0024),
      fortified:
        round >= 25 &&
        data.layer >= 8 &&
        (seed + guard + round) % 9 === 0,
      camo:
        round >= 24 &&
        (round % 6 === 0 || data.layer >= 8) &&
        (seed + guard) % 5 === 0,
      regrow:
        round >= 30 &&
        data.layer >= 5 &&
        (seed + guard + round) % 7 === 0
    });

    remaining -= count * unitCost;
  }

  if (round >= 45 && round % 5 === 0) {
    packages.push({
      type: "blimp",
      count: Math.max(1, Math.floor(round / 25)),
      spacing: 0.55
    });
  }

  if (round >= 70 && round % 10 === 0) {
    packages.push({
      type: "dreadBlimp",
      count: Math.max(1, Math.floor(round / 35)),
      spacing: 0.65,
      fortified: true
    });
  }

  return {
    round,
    budget: Math.floor(difficultyBudget),
    packages,
    cashReward: Math.round(
      (20 + round * 2.6) * scale.cash
    ),
    endDelay: 2.0
  };
}

export class RoundController {
  constructor(game) {
    this.game = game;
    this.current = 0;
    this.active = false;
    this.auto = false;
    this.queue = [];
    this.spawnTimer = 0;
    this.clearTimer = 0;
    this.seed = 7331;
  }

  start(round = this.current + 1) {
    if (this.active) {
      return false;
    }

    this.current = round;
    const definition = createRound(
      round,
      this.seed + round * 31
    );

    this.queue = definition.packages.map((entry) => ({
      ...entry
    }));

    this.active = true;
    this.spawnTimer = 0;
    this.clearTimer = 0;

    this.game.emit("roundStart", {
      round,
      definition
    });

    return true;
  }

  update(delta) {
    if (!this.active) {
      return;
    }

    this.spawnTimer += delta;

    const next = this.queue[0];

    if (next) {
      const spacing = next.spacing || 0.2;

      if (this.spawnTimer >= spacing) {
        this.spawnTimer -= spacing;

        this.game.spawnBloon(next.type, {
          fortified: next.fortified
        });

        next.count -= 1;

        if (next.count <= 0) {
          this.queue.shift();
        }
      }

      return;
    }

    if (this.game.bloons.length === 0) {
      this.clearTimer += delta;

      if (this.clearTimer >= 2) {
        this.finish();
      }
    }
  }

  finish() {
    if (!this.active) {
      return;
    }

    const rewardDefinition = createRound(
      this.current,
      this.seed + this.current * 31
    );

    const reward = rewardDefinition.cashReward;
    this.game.addCash(reward, "round");

    this.active = false;
    this.game.emit("roundEnd", {
      round: this.current,
      reward
    });

    if (this.auto && this.game.state === "running") {
      this.start();
    }
  }
}
