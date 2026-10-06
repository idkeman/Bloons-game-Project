import { distance } from "./math.js";

function finite(name, value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid numeric state: " + name + "=" + value);
  }
}

function uniqueIds(items, label) {
  const ids = new Set();

  for (const item of items) {
    if (ids.has(item.id)) {
      throw new Error("Duplicate " + label + " id: " + item.id);
    }

    ids.add(item.id);
  }
}

export function validateGameState(game, {
  allowMenu = true
} = {}) {
  if (allowMenu && game.state === "menu") {
    return {
      ok: true,
      checks: 0
    };
  }

  finite("cash", game.cash);
  finite("lives", game.lives);

  if (game.cash < -0.000001) {
    throw new Error("Cash became negative.");
  }

  if (game.lives < -0.000001) {
    throw new Error("Lives became negative.");
  }

  if (game.rounds.current < 0) {
    throw new Error("Round became negative.");
  }

  uniqueIds(game.towers, "tower");
  uniqueIds(game.heroes, "hero");
  uniqueIds(game.bloons, "bloon");
  uniqueIds(game.projectiles, "projectile");
  uniqueIds(game.traps, "trap");

  for (const tower of game.towers) {
    finite("tower.x", tower.x);
    finite("tower.y", tower.y);
    finite("tower.totalSpent", tower.totalSpent);

    if (tower.pathLevels.length !== 3) {
      throw new Error("Tower path array does not have three branches.");
    }

    if (
      tower.pathLevels.some(
        (tier) =>
          !Number.isInteger(tier) ||
          tier < 0 ||
          tier > 5
      )
    ) {
      throw new Error("Tower has an invalid tier.");
    }

    const highPaths = tower.pathLevels.filter(
      (tier) => tier >= 3
    ).length;

    if (highPaths > 1) {
      throw new Error(
        "Tower violates single-tier-three-plus crosspath rule."
      );
    }

    if (
      tower.pathLevels.includes(5) &&
      tower.pathLevels.some(
        (tier) => tier > 2 && tier !== 5
      )
    ) {
      throw new Error(
        "Tower violates Tier-5 crosspath restriction."
      );
    }
  }

  for (const bloon of game.bloons) {
    finite("bloon.progress", bloon.progress);
    finite("bloon.health", bloon.health);

    if (
      bloon.progress < -0.000001 ||
      bloon.progress > 1.000001
    ) {
      throw new Error("Bloon progress left the valid route interval.");
    }

    if (bloon.maxHealth <= 0) {
      throw new Error("Bloon max health must be positive.");
    }
  }

  for (const projectile of game.projectiles) {
    finite("projectile.x", projectile.x);
    finite("projectile.y", projectile.y);
    finite("projectile.vx", projectile.vx);
    finite("projectile.vy", projectile.vy);
    finite("projectile.life", projectile.life);
  }

  for (const trap of game.traps) {
    finite("trap.progress", trap.progress);
    finite("trap.damage", trap.damage);

    if (
      trap.progress < 0 ||
      trap.progress > 1
    ) {
      throw new Error("Trap progress is invalid.");
    }
  }

  for (let a = 0; a < game.towers.length; a += 1) {
    for (let b = a + 1; b < game.towers.length; b += 1) {
      const first = game.towers[a];
      const second = game.towers[b];

      if (
        distance(
          first.x,
          first.y,
          second.x,
          second.y
        ) < 1
      ) {
        throw new Error(
          "Two towers occupy essentially the same point."
        );
      }
    }
  }

  return {
    ok: true,
    checks:
      game.towers.length +
      game.heroes.length +
      game.bloons.length +
      game.projectiles.length +
      game.traps.length
  };
}
