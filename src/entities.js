import { BLOONS } from "./data.js";
import { clamp, Cooldown, distance } from "./math.js";

export class Bloon {
  constructor({ id, type, progress = 0, path, healthMultiplier = 1, fortified = null, camo = false, regrow = false }) {
    const data = BLOONS[type];

    if (!data) {
      throw new Error("Unknown enemy type: " + type);
    }

    this.id = id;
    this.type = type;
    this.data = data;
    this.path = path;
    this.progress = progress;
    this.healthMultiplier = healthMultiplier;
    this.maxHealth = Math.max(1, data.health * healthMultiplier);
    this.health = this.maxHealth;
    this.radius = data.boss ? 28 : data.layer >= 12 ? 17 : 8;
    this.alive = true;
    this.spawnedChildren = false;
    this.fortified = fortified ?? Boolean(data.fortified);
    this.camo = Boolean(camo);
    this.regrow = Boolean(regrow);
    this.hidden = this.camo;
    this.regrowRate = this.data.regrowRate || 0.015;
    this.status = {
      slow: 0,
      stun: 0,
      burn: 0,
      corrosion: 0,
      mark: 0
    };
    this.statusPower = {
      slow: 0,
      burn: 0,
      corrosion: 0,
      mark: 0
    };
    this.flash = 0;
  }

  get position() {
    return this.path.at(this.progress);
  }

  get effectiveSpeed() {
    const slowFactor = 1 - this.statusPower.slow;
    const stunFactor = this.status.stun > 0 ? 0 : 1;
    return Math.max(0, this.data.speed * slowFactor * stunFactor);
  }

  update(delta, speedMultiplier) {
    if (!this.alive) {
      return;
    }

    for (const key of Object.keys(this.status)) {
      this.status[key] = Math.max(0, this.status[key] - delta);
    }

    this.flash = Math.max(0, this.flash - delta * 5);

    this.tickDamageOverTime(delta);
    this.tickRegeneration(delta);

    if (!this.alive) {
      return;
    }

    const movement = delta * 70 * this.effectiveSpeed * speedMultiplier;
    this.progress = this.path.move(this.progress, movement);

    if (this.progress >= 1) {
      this.alive = false;
    }
  }

  tickDamageOverTime(delta) {
    if (this.status.burn > 0 && this.statusPower.burn > 0) {
      this.health -= this.statusPower.burn * delta;
    }

    if (this.status.corrosion > 0 && this.statusPower.corrosion > 0) {
      this.health -= this.statusPower.corrosion * delta;
    }

    if (this.health <= 0) {
      this.alive = false;
    }
  }

  tickRegeneration(delta) {
    if (
      !this.regrow ||
      this.health <= 0 ||
      this.status.burn > 0 ||
      this.status.corrosion > 0
    ) {
      return;
    }

    this.health = Math.min(
      this.maxHealth,
      this.health + this.maxHealth * this.regrowRate * delta
    );
  }

  takeDamage(amount, options = {}) {
    if (!this.alive) {
      return { damage: 0, destroyed: false, blocked: "dead" };
    }

    const {
      damageType = "physical",
      canHitHidden = false,
      canBreakArmor = false,
      multiplier = 1
    } = options;

    if (this.hidden && !canHitHidden) {
      return { damage: 0, destroyed: false, blocked: "hidden" };
    }

    if (this.type === "metal" && damageType === "physical" && !canBreakArmor) {
      return { damage: 0, destroyed: false, blocked: "physical" };
    }

    if (this.data.immune?.includes(damageType)) {
      return { damage: 0, destroyed: false, blocked: damageType };
    }

    const fortifiedMultiplier = this.fortified ? 0.88 : 1;
    const markedMultiplier = this.status.mark > 0 ? 1.15 : 1;
    const finalDamage = Math.max(
      0,
      amount * multiplier * fortifiedMultiplier * markedMultiplier
    );

    this.health -= finalDamage;
    this.flash = 1;

    const destroyed = this.health <= 0;

    if (destroyed) {
      this.alive = false;
    }

    return {
      damage: finalDamage,
      destroyed,
      blocked: null
    };
  }

  applySlow(strength, duration) {
    if (this.data.immune?.includes("frost")) {
      return false;
    }

    this.status.slow = Math.max(this.status.slow, duration);
    this.statusPower.slow = Math.max(
      this.statusPower.slow,
      clamp(strength, 0, 0.85)
    );

    return true;
  }

  applyStun(duration) {
    this.status.stun = Math.max(this.status.stun, duration);
  }

  applyBurn(damagePerSecond, duration) {
    if (this.data.immune?.includes("fire")) {
      return false;
    }

    this.status.burn = Math.max(this.status.burn, duration);
    this.statusPower.burn = Math.max(this.statusPower.burn, damagePerSecond);
    return true;
  }

  applyCorrosion(damagePerSecond, duration) {
    this.status.corrosion = Math.max(this.status.corrosion, duration);
    this.statusPower.corrosion = Math.max(
      this.statusPower.corrosion,
      damagePerSecond
    );
  }

  mark(duration) {
    this.status.mark = Math.max(this.status.mark, duration);
  }

  serialize() {
    return {
      id: this.id,
      type: this.type,
      progress: this.progress,
      health: this.health,
      maxHealth: this.maxHealth,
      healthMultiplier: this.healthMultiplier,
      fortified: this.fortified,
      camo: this.camo,
      regrow: this.regrow,
      status: { ...this.status },
      statusPower: { ...this.statusPower }
    };
  }

  splitChildren() {
    if (this.spawnedChildren || !this.data.children?.length) {
      return [];
    }

    this.spawnedChildren = true;

    return this.data.children.map((childType, index) => new Bloon({
      id: this.id + ":child:" + index,
      type: childType,
      progress: clamp(this.progress - index * 0.0008, 0, 0.999),
      path: this.path,
      healthMultiplier: this.healthMultiplier,
      fortified: this.fortified,
      camo: this.camo,
      regrow: this.regrow
    }));
  }
}

export class Projectile {
  static fromSnapshot(snapshot) {
    const projectile = new Projectile(snapshot);
    projectile.hitIds = new Set(snapshot.hitIds || []);
    projectile.alive = snapshot.alive !== false;
    return projectile;
  }

  constructor(options) {
    Object.assign(this, options);

    this.alive = true;
    this.hitIds = new Set();
    this.life = options.life ?? 3;
    this.pierce = Math.max(1, Math.floor(options.pierce ?? 1));
    this.radius = options.radius ?? 4;
    this.homing = options.homing ?? 0;
  }

  serialize() {
    return {
      ...this,
      hitIds: [...this.hitIds]
    };
  }

  update(delta, targets) {
    if (!this.alive) {
      return;
    }

    this.life -= delta;

    if (this.life <= 0) {
      this.alive = false;
      return;
    }

    if (this.homing > 0) {
      const target = targets
        .filter((item) => item.alive && !this.hitIds.has(item.id))
        .sort((a, b) => {
          const da = distance(this.x, this.y, a.position.x, a.position.y);
          const db = distance(this.x, this.y, b.position.x, b.position.y);
          return da - db;
        })[0];

      if (target) {
        const dx = target.position.x - this.x;
        const dy = target.position.y - this.y;
        const magnitude = Math.hypot(dx, dy) || 1;
        const desiredX = (dx / magnitude) * this.speed;
        const desiredY = (dy / magnitude) * this.speed;
        const factor = clamp(this.homing * delta * 10, 0, 1);

        this.vx += (desiredX - this.vx) * factor;
        this.vy += (desiredY - this.vy) * factor;
      }
    }

    const magnitude = Math.hypot(this.vx, this.vy) || 1;

    this.x += (this.vx / magnitude) * this.speed * delta;
    this.y += (this.vy / magnitude) * this.speed * delta;
  }
}

export class Tower {
  constructor({ id, type, x, y, config }) {
    this.id = id;
    this.type = type;
    this.name = config.name;
    this.config = config;
    this.x = x;
    this.y = y;

    this.pathLevels = [0, 0, 0];
    this.cooldown = new Cooldown(0);
    this.abilityCooldown = new Cooldown(0);
    this.targetMode = "first";

    this.totalSpent = config.cost;
    this.totalPops = 0;
    this.totalDamage = 0;
    this.totalCash = 0;

    this.abilityActive = 0;
    this.abilityMultiplier = 1;
    this._incomeTimer = 0;

    this.buff = {
      range: 0,
      damage: 0,
      pierce: 0,
      attackSpeed: 1,
      detectHidden: false,
      breakArmor: false
    };

    this.ascended = false;
    this.ascensionDegree = 0;
  }

  get tier() {
    return this.pathLevels.reduce((sum, tier) => sum + tier, 0);
  }

  canBuy(path, tier) {
    if (path < 0 || path > 2 || tier < 1 || tier > 5) {
      return false;
    }

    if (this.pathLevels[path] + 1 !== tier) {
      return false;
    }

    const otherPaths = this.pathLevels.filter((_, index) => index !== path);

    if (tier >= 3 && otherPaths.some((value) => value >= 3)) {
      return false;
    }

    if (tier === 5 && otherPaths.some((value) => value > 2)) {
      return false;
    }

    return true;
  }

  upgradeCost(path, tier) {
    return this.config.paths[path]?.[tier - 1]?.cost ?? Infinity;
  }

  buyUpgrade(path, tier, cash) {
    if (!this.canBuy(path, tier)) {
      return { ok: false, reason: "crosspath" };
    }

    const cost = this.upgradeCost(path, tier);

    if (cash < cost) {
      return { ok: false, reason: "cash", cost };
    }

    this.pathLevels[path] = tier;
    this.totalSpent += cost;
    return { ok: true, cost };
  }

  cycleTarget() {
    const modes = this.config.targeting;
    const index = Math.max(0, modes.indexOf(this.targetMode));
    this.targetMode = modes[(index + 1) % modes.length];
    return this.targetMode;
  }

  getAttackData() {
    const result = { ...this.config.base };

    for (let path = 0; path < 3; path += 1) {
      for (let tier = 1; tier <= this.pathLevels[path]; tier += 1) {
        const modifiers = this.config.paths[path][tier - 1].modifiers;

        for (const [key, value] of Object.entries(modifiers)) {
          if (key === "attackSpeed") {
            result.attackSpeed *= value;
          } else if (["range", "damage", "pierce"].includes(key)) {
            result[key] = (result[key] ?? 0) * value;
          } else if (key === "projectiles") {
            result.projectiles = Math.max(
              result.projectiles ?? 1,
              Math.floor(value)
            );
          } else {
            result[key] = value;
          }
        }
      }
    }

    result.range *= 1 + this.buff.range;
    result.damage *= 1 + this.buff.damage;
    result.pierce += this.buff.pierce;
    result.attackSpeed *= this.buff.attackSpeed;
    result.detectHidden = Boolean(
      result.detectHidden || this.buff.detectHidden
    );
    result.breakArmor = Boolean(
      result.breakArmor || this.buff.breakArmor
    );

    if (this.abilityActive > 0) {
      result.attackSpeed /= this.abilityMultiplier;
      result.damage *= this.abilityMultiplier;
    }

    if (this.ascended) {
      const degree = this.ascensionDegree;
      result.damage *= 1 + degree * 0.12;
      result.pierce += Math.floor(degree * 0.5);
      result.projectiles = (result.projectiles ?? 1) + Math.floor(degree / 10);
      result.attackSpeed *= Math.max(0.25, 1 - degree * 0.01);
    }

    return result;
  }

  serialize() {
    return {
      id: this.id,
      type: this.type,
      x: this.x,
      y: this.y,
      pathLevels: [...this.pathLevels],
      targetMode: this.targetMode,
      totalSpent: this.totalSpent,
      totalPops: this.totalPops,
      totalDamage: this.totalDamage,
      totalCash: this.totalCash,
      ascended: this.ascended,
      ascensionDegree: this.ascensionDegree
    };
  }
}
