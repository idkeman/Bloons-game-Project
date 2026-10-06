import { Cooldown, IdFactory } from "./math.js";
import { Projectile } from "./entities.js";

export class HeroUnit {
  constructor({ id, heroId, x, y, config }) {
    this.id = id;
    this.heroId = heroId;
    this.name = config.name;
    this.config = config;
    this.x = x;
    this.y = y;
    this.level = 1;
    this.xp = 0;
    this.cooldown = new Cooldown(0);
    this.abilityCooldown = new Cooldown(18);
    this.totalPops = 0;
    this.totalDamage = 0;
    this.abilityActive = 0;
    this.abilityMultiplier = 1;
    this.projectileIds = new IdFactory("hero-projectile");
    this.targetMode = "first";
  }

  get attack() {
    const base = { ...this.config.attack };
    const levelMultiplier = 1 + (this.level - 1) * 0.10;

    base.damage *= levelMultiplier;
    base.pierce = Math.ceil((base.pierce || 1) + (this.level - 1) * 0.25);
    base.range *= 1 + (this.level - 1) * 0.025;
    base.attackSpeed *= this.abilityActive > 0 ? 0.65 : 1;

    if (this.heroId === "volt") {
      base.bounce = 2 + Math.floor(this.level / 3);
    }

    if (this.heroId === "bramble") {
      base.slow = Math.min(0.8, 0.3 + this.level * 0.025);
    }

    return base;
  }

  addXp(amount) {
    if (amount <= 0 || this.level >= 20) {
      return false;
    }

    this.xp += amount;
    const threshold = 18 + this.level * 11;

    if (this.xp >= threshold) {
      this.xp -= threshold;
      this.level += 1;
      return true;
    }

    return false;
  }

  chooseTarget(bloons) {
    const eligible = bloons
      .filter((bloon) => {
        if (!bloon.alive) {
          return false;
        }

        const p = bloon.position;
        return Math.hypot(this.x - p.x, this.y - p.y) <= this.attack.range;
      })
      .sort((a, b) => b.progress - a.progress);

    if (!eligible.length) {
      return null;
    }

    if (this.targetMode === "last") {
      return eligible.at(-1);
    }

    if (this.targetMode === "close") {
      return eligible
        .slice()
        .sort(
          (a, b) =>
            Math.hypot(this.x-a.position.x,this.y-a.position.y) -
            Math.hypot(this.x-b.position.x,this.y-b.position.y)
        )[0];
    }

    if (this.targetMode === "strong") {
      return eligible
        .slice()
        .sort(
          (a, b) =>
            b.data.layer - a.data.layer ||
            b.health - a.health
        )[0];
    }

    if (this.targetMode === "weak") {
      return eligible
        .slice()
        .sort((a, b) => a.health - b.health)[0];
    }

    return eligible[0];
  }

  fire(game, delta) {
    this.cooldown.tick(delta);
    this.abilityCooldown.tick(delta);
    this.abilityActive = Math.max(0, this.abilityActive - delta);

    if (!this.cooldown.ready()) {
      return;
    }

    const target = this.chooseTarget(game.bloons);

    if (!target) {
      return;
    }

    this.cooldown.reset(this.attack.attackSpeed);

    const point = target.position;
    const angle = Math.atan2(point.y - this.y, point.x - this.x);
    const speed = this.attack.speed || 1;

    game.projectiles.push(new Projectile({
      id: this.projectileIds.next(),
      x: this.x,
      y: this.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      speed,
      radius: 5,
      damage: this.attack.damage,
      pierce: this.attack.pierce,
      ownerId: this.id,
      homing: this.attack.homing || 0.03,
      splash: this.attack.splash || 0,
      damageType: this.heroId === "volt" ? "energy" : "physical",
      canHitHidden: true,
      canBreakArmor: true,
      bounce: this.attack.bounce || 0,
      slow: this.attack.slow || 0,
      slowTime: 1.8,
      life: 2.5
    }));
  }

  activate(game) {
    if (!this.abilityCooldown.ready()) {
      return false;
    }

    this.abilityCooldown.reset(
      (
        this.heroId === "forge"
          ? 28
          : 22
      ) *
      (game.gameMode?.abilityCooldownMultiplier || 1)
    );

    if (this.heroId === "nova") {
      this.abilityActive = 6;
      this.abilityMultiplier = 3;
      for (const bloon of game.bloons) {
        const result = bloon.takeDamage(
          18 + this.level * 4,
          { canHitHidden: true, canBreakArmor: true }
        );
        if (result.damage) {
          this.totalDamage += result.damage;
          this.totalPops += result.destroyed ? 1 : 0;
          game.registerDamage(this.id, result.damage, result.destroyed);
        }
      }
      return true;
    }

    if (this.heroId === "bramble") {
      for (const bloon of game.bloons) {
        bloon.applySlow(
          Math.min(0.85, 0.45 + this.level * 0.01),
          5 + this.level * 0.15
        );
      }
      return true;
    }

    if (this.heroId === "volt") {
      for (const bloon of game.bloons) {
        const result = bloon.takeDamage(
          35 + this.level * 8,
          { damageType: "energy", canHitHidden: true, canBreakArmor: true }
        );
        if (result.damage) {
          this.totalDamage += result.damage;
          game.registerDamage(this.id, result.damage, result.destroyed);
        }
      }
      return true;
    }

    this.abilityActive = 10;
    this.abilityMultiplier = 2;
    return true;
  }

  serialize() {
    return {
      id: this.id,
      heroId: this.heroId,
      x: this.x,
      y: this.y,
      level: this.level,
      xp: this.xp,
      targetMode: this.targetMode,
      cooldownRemaining:
        this.cooldown.remaining,
      abilityCooldownRemaining:
        this.abilityCooldown.remaining,
      abilityActive: this.abilityActive,
      abilityMultiplier: this.abilityMultiplier,
      totalPops: this.totalPops,
      totalDamage: this.totalDamage
    };
  }
}
