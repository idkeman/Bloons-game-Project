import { clamp, distance, IdFactory } from "./math.js";

export class TrapField {
  constructor({
    id,
    type,
    progress,
    damage,
    pierce,
    splash = 0,
    slow = 0,
    slowTime = 0,
    oneShot = false,
    ownerId
  }) {
    this.id = id;
    this.type = type;
    this.progress = clamp(progress, 0, 1);
    this.damage = damage;
    this.pierce = Math.max(1, Math.floor(pierce));
    this.splash = splash;
    this.slow = slow;
    this.slowTime = slowTime;
    this.oneShot = oneShot;
    this.ownerId = ownerId;
    this.hitIds = new Set();
    this.alive = true;
    this.triggerRadius = 0.014;
  }
}

export class TrapSystem {
  constructor(game) {
    this.game = game;
    this.ids = new IdFactory("trap");
  }

  place(type, tower, progress) {
    const attack = tower.getAttackData();

    const trap = new TrapField({
      id: this.ids.next(),
      type,
      progress,
      damage: attack.damage,
      pierce:
        type === "spike"
          ? Math.min(
              300,
              (attack.pierce || 1) *
                Math.max(1, attack.projectiles || 1)
            )
          : Math.max(1, attack.pierce || 1),
      splash: attack.splash || 0,
      slow: attack.slow || 0,
      slowTime: attack.slowTime || 0,
      oneShot: type === "mine",
      ownerId: tower.id
    });

    this.game.traps.push(trap);
    return trap;
  }

  update() {
    if (!this.game.path) {
      return;
    }

    for (const trap of this.game.traps) {
      if (!trap.alive) {
        continue;
      }

      for (const bloon of this.game.bloons) {
        if (!trap.alive || !bloon.alive || trap.hitIds.has(bloon.id)) {
          continue;
        }

        if (
          Math.abs(
            bloon.progress - trap.progress
          ) > trap.triggerRadius
        ) {
          continue;
        }

        trap.hitIds.add(bloon.id);

        const result = bloon.takeDamage(
          trap.damage,
          {
            canHitHidden: true,
            canBreakArmor: true
          }
        );

        if (result.damage > 0) {
          if (trap.slow > 0) {
            bloon.applySlow(
              trap.slow,
              trap.slowTime
            );
          }

          this.game.registerDamage(
            trap.ownerId,
            result.damage,
            result.destroyed
          );

          if (trap.splash > 0) {
            const origin = bloon.position;

            for (const nearby of this.game.bloons) {
              if (
                !nearby.alive ||
                nearby.id === bloon.id
              ) {
                continue;
              }

              if (
                distance(
                  origin.x,
                  origin.y,
                  nearby.position.x,
                  nearby.position.y
                ) <= trap.splash
              ) {
                const splashResult =
                  nearby.takeDamage(
                    trap.damage * 0.60,
                    {
                      canHitHidden: true,
                      canBreakArmor: true
                    }
                  );

                if (splashResult.damage > 0) {
                  this.game.registerDamage(
                    trap.ownerId,
                    splashResult.damage,
                    splashResult.destroyed
                  );
                }
              }
            }
          }
        }

        trap.pierce -= 1;

        if (trap.oneShot || trap.pierce <= 0) {
          trap.alive = false;
        }
      }
    }

    this.game.traps =
      this.game.traps.filter(
        (trap) => trap.alive
      );
  }

  serialize() {
    return this.game.traps.map(
      (trap) => ({
        id: trap.id,
        type: trap.type,
        progress: trap.progress,
        damage: trap.damage,
        pierce: trap.pierce,
        splash: trap.splash,
        slow: trap.slow,
        slowTime: trap.slowTime,
        oneShot: trap.oneShot,
        ownerId: trap.ownerId
      })
    );
  }
}