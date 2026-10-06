import { Projectile } from "./entities.js";
import { angleTo, clamp, distance, IdFactory } from "./math.js";

export class CombatSystem {
  constructor(game) {
    this.game = game;
    this.projectileIds = new IdFactory("projectile");
  }

  chooseTarget(tower) {
    const attack = tower.getAttackData();

    const candidates = this.game.bloons.filter((bloon) => {
      if (!bloon.alive) {
        return false;
      }

      const p = bloon.position;
      return distance(tower.x, tower.y, p.x, p.y) <= attack.range;
    });

    if (!candidates.length) {
      return null;
    }

    if (tower.targetMode === "last") {
      return candidates.slice().sort((a, b) => a.progress - b.progress)[0];
    }

    if (tower.targetMode === "close") {
      return candidates.slice().sort(
        (a, b) =>
          distance(tower.x, tower.y, a.position.x, a.position.y) -
          distance(tower.x, tower.y, b.position.x, b.position.y)
      )[0];
    }

    if (tower.targetMode === "strong") {
      return candidates.slice().sort(
        (a, b) =>
          b.data.layer - a.data.layer ||
          b.health - a.health
      )[0];
    }

    if (tower.targetMode === "weak") {
      return candidates.slice().sort(
        (a, b) => a.health - b.health
      )[0];
    }

    return candidates.slice().sort(
      (a, b) => b.progress - a.progress
    )[0];
  }

  createProjectile(tower, target, angle, attack) {
    const speed = attack.speed || 1;

    return new Projectile({
      id: this.projectileIds.next(),
      x: tower.x,
      y: tower.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      speed,
      radius: attack.projectileRadius || 5,
      damage: attack.damage || 0,
      pierce: Math.max(1, Math.floor(attack.pierce || 1)),
      ownerId: tower.id,
      life: 3,
      homing: attack.homing || 0,
      splash: attack.splash || 0,
      damageType: attack.damageType || "physical",
      canHitHidden: Boolean(attack.detectHidden),
      canBreakArmor: Boolean(attack.breakArmor),
      bounce: Math.floor(attack.bounce || 0),
      slow: attack.slow || 0,
      slowTime: attack.slowTime || 0,
      stun: attack.stun || 0,
      burn: attack.burn || 0,
      corrosion: attack.corrosion || 0,
      mark: attack.mark || 0,
      sourceTargetId: target.id,
      color: attack.color || "#f6f7f9"
    });
  }

  fireTower(tower, delta) {
    const attack = tower.getAttackData();

    tower.cooldown.tick(delta);

    if (!tower.cooldown.ready() || (attack.projectiles || 0) <= 0) {
      return;
    }

    const target = this.chooseTarget(tower);

    if (!target) {
      return;
    }

    tower.cooldown.reset(Math.max(0.035, attack.attackSpeed || 1));

    const projectiles = Math.max(
      1,
      Math.floor(attack.projectiles || 1)
    );

    const targetPosition = target.position;
    const baseAngle = angleTo(
      tower.x,
      tower.y,
      targetPosition.x,
      targetPosition.y
    );

    for (let index = 0; index < projectiles; index += 1) {
      const totalSpread = attack.spread || (
        projectiles > 1
          ? Math.min(0.65, projectiles * 0.08)
          : 0
      );

      const offset = projectiles === 1
        ? 0
        : (index - (projectiles - 1) / 2) *
          totalSpread /
          Math.max(projectiles - 1, 1);

      const angle = baseAngle + offset;

      if (!attack.speed) {
        this.resolveHit(
          {
            ownerId: tower.id,
            damage: attack.damage || 0,
            pierce: 1,
            splash: attack.splash || 0,
            damageType: attack.damageType || "physical",
            canHitHidden: Boolean(attack.detectHidden),
            canBreakArmor: Boolean(attack.breakArmor),
            slow: attack.slow || 0,
            slowTime: attack.slowTime || 0,
            stun: attack.stun || 0,
            burn: attack.burn || 0,
            corrosion: attack.corrosion || 0,
            mark: attack.mark || 0,
            bounce: attack.bounce || 0
          },
          target
        );
        continue;
      }

      this.game.projectiles.push(
        this.createProjectile(
          tower,
          target,
          angle,
          attack
        )
      );
    }
  }

  resolveHit(source, target) {
    if (!target.alive) {
      return false;
    }

    const result = target.takeDamage(
      source.damage,
      {
        damageType: source.damageType,
        canHitHidden: source.canHitHidden,
        canBreakArmor: source.canBreakArmor
      }
    );

    if (result.blocked) {
      return false;
    }

    if (source.slow > 0) {
      target.applySlow(source.slow, source.slowTime);
    }

    if (source.stun > 0) {
      target.applyStun(source.stun);
    }

    if (source.burn > 0) {
      target.applyBurn(source.burn, 2);
    }

    if (source.corrosion > 0) {
      target.applyCorrosion(source.corrosion, 3);
    }

    if (source.mark > 0) {
      target.mark(source.mark);
    }

    this.game.registerDamage(
      source.ownerId,
      result.damage,
      result.destroyed
    );

    if (source.splash > 0) {
      this.applySplash(
        source,
        target,
        source.splash,
        source.damage * 0.7
      );
    }

    if (source.bounce > 0) {
      const nearby = this.game.bloons
        .filter(
          (bloon) =>
            bloon.alive &&
            bloon.id !== target.id &&
            distance(
              target.position.x,
              target.position.y,
              bloon.position.x,
              bloon.position.y
            ) < 100
        )
        .sort(
          (a, b) =>
            distance(target.position.x,target.position.y,a.position.x,a.position.y) -
            distance(target.position.x,target.position.y,b.position.x,b.position.y)
        )[0];

      if (nearby) {
        source.bounce -= 1;
        this.resolveHit(source, nearby);
      }
    }

    return true;
  }

  applySplash(source, origin, radius, damage) {
    const originPoint = origin.position;

    for (const target of this.game.bloons) {
      if (!target.alive || target.id === origin.id) {
        continue;
      }

      const gap = distance(
        originPoint.x,
        originPoint.y,
        target.position.x,
        target.position.y
      );

      if (gap > radius) {
        continue;
      }

      this.resolveHit(
        {
          ...source,
          damage,
          splash: 0,
          bounce: 0
        },
        target
      );
    }
  }

  updateProjectiles(delta) {
    for (const projectile of this.game.projectiles) {
      projectile.update(
        delta,
        this.game.bloons
      );
    }

    for (const projectile of this.game.projectiles) {
      if (!projectile.alive) {
        continue;
      }

      for (const target of this.game.bloons) {
        if (!projectile.alive || !target.alive) {
          break;
        }

        if (projectile.hitIds.has(target.id)) {
          continue;
        }

        if (
          distance(
            projectile.x,
            projectile.y,
            target.position.x,
            target.position.y
          ) > projectile.radius + target.radius
        ) {
          continue;
        }

        projectile.hitIds.add(target.id);

        const hit = this.resolveHit(
          projectile,
          target
        );

        if (!hit) {
          continue;
        }

        projectile.pierce -= 1;

        if (projectile.pierce <= 0) {
          projectile.alive = false;
        } else if (projectile.bounce > 0) {
          projectile.bounce -= 1;
        }
      }
    }

    this.game.projectiles = this.game.projectiles.filter(
      (projectile) => projectile.alive
    );
  }

  update(delta) {
    for (const tower of this.game.towers) {
      this.fireTower(tower, delta);
    }

    this.updateProjectiles(delta);
  }
}
