/*
 * Hero-class units for Skyfront Dominion.
 *
 * These are original commanders with their own XP curves, level-gated
 * modifiers, targeting rules, passive effects, and active abilities.
 *
 * Heroes intentionally use a separate class from ordinary towers:
 * - their XP progression is independent;
 * - their attack profile can evolve continuously;
 * - their abilities are cooldown-driven;
 * - their persistence model is distinct;
 * - they can grant global or local command bonuses.
 */

const HERO_XP = [
  0, 40, 95, 165, 255,
  365, 495, 645, 815, 1005,
  1220, 1460, 1725, 2015, 2335,
  2685, 3065, 3480, 3925, 4405
];

const clone = (value) => JSON.parse(JSON.stringify(value));

function level(name, description, modifiers = {}, ability = null) {
  return { name, description, modifiers, ability };
}

export const HEROES = [
  {
    id: "aster",
    name: "Aster Vale",
    title: "Sky Marshal",
    color: "#78d7ff",
    cost: 550,
    range: 125,
    attackCooldown: 0.95,
    damage: 9,
    pierce: 4,
    projectileSpeed: 600,
    footprint: 20,
    targetMode: "first",
    description: "A balanced field commander whose signal discipline improves nearby defenses.",
    levels: [
      level("Recruit", "Initial deployment."),
      level("Range Discipline", "+10 range.", { range: 10 }),
      level("Rapid Orders", "-8% attack cooldown.", { cooldownMul: 0.92 }),
      level("Command Training", "+2 damage.", { damage: 2 }),
      level("Volley Doctrine", "+1 projectile.", { projectileCount: 2 }),
      level("Forward Observer", "+18 range and +2 pierce.", { range: 18, pierce: 2 }),
      level("Precision Orders", "+4 damage.", { damage: 4 }),
      level("Crossfire", "+1 projectile.", { projectileCount: 3 }),
      level("Battle Rhythm", "-12% attack cooldown.", { cooldownMul: 0.88 }),
      level("Aerial Mark", "Attacks reveal concealed hostiles.", { stealthBypass: true }),
      level("Marshal Protocol", "Nearby towers gain +6% attack speed.", { auraSpeed: 0.06 }),
      level("Heavy Salvo", "+8 damage.", { damage: 8 }),
      level("Tactical Lens", "+25 range.", { range: 25 }),
      level("Command Network", "Nearby towers gain +10% range.", { auraRange: 0.10 }),
      level("Burst Order", "+2 projectiles.", { projectileCount: 5 }),
      level("Frontline Logic", "+14 damage.", { damage: 14, armorBypass: 8 }),
      level("Rapid Command", "-16% attack cooldown.", { cooldownMul: 0.84 }),
      level("Royal Directive", "Nearby towers gain +12% damage.", { auraDamage: 0.12 }),
      level("Sky Doctrine", "+22 range and +12 pierce.", { range: 22, pierce: 12 }),
      level("Dominion Marshal", "Aster's command field becomes global.", { auraSpeed: 0.10, auraRange: 0.16, auraDamage: 0.16, damage: 30, pierce: 20, cooldownMul: 0.72 })
    ],
    ability: {
      name: "Command Strike",
      cooldown: 38,
      kind: "strike",
      description: "Hits the eight most advanced hostile units in range."
    }
  },
  {
    id: "nyx",
    name: "Nyx Calder",
    title: "Phase Warden",
    color: "#a890ff",
    cost: 700,
    range: 110,
    attackCooldown: 1.15,
    damage: 6,
    pierce: 7,
    projectileSpeed: 360,
    footprint: 20,
    targetMode: "strongest",
    description: "A control specialist who manipulates movement, concealment, and phase stability.",
    levels: [
      level("Initiate", "Initial deployment."),
      level("Cold Signal", "Hits slow briefly.", { slowFactor: 0.88, slowDuration: 1.3 }),
      level("Long Veil", "+14 range.", { range: 14 }),
      level("Phase Hook", "+2 pierce.", { pierce: 2 }),
      level("Stasis Thread", "Slow is stronger.", { slowFactor: 0.80 }),
      level("Echo Field", "Nearby enemies receive minor movement drag.", { auraSlow: 0.06 }),
      level("Null Sight", "Can target stealth.", { stealthBypass: true }),
      level("Deep Chill", "+2 damage.", { damage: 2 }),
      level("Phase Lock", "Stuns can last longer.", { stunDurationMul: 1.3 }),
      level("Shroud Breaker", "Reveals nearby hidden hostiles.", { stealthBypass: true, revealAura: 80 }),
      level("Warden Ring", "+20 range.", { range: 20 }),
      level("Fracture", "+6 pierce.", { pierce: 6 }),
      level("Static Time", "-12% attack cooldown.", { cooldownMul: 0.88 }),
      level("Containment Grid", "Local slow field strengthens.", { auraSlow: 0.14 }),
      level("Null Storm", "+8 damage.", { damage: 8 }),
      level("Phase Collapse", "Hits briefly stun resistant targets.", { stunChance: 0.16, stunDuration: 0.65 }),
      level("Temporal Lock", "Slows affect boss-class units.", { bossSlow: true }),
      level("Absolute Veil", "Global reveal while Nyx is active.", { revealGlobal: true }),
      level("Eventide", "+20 range and +12 damage.", { range: 20, damage: 12 }),
      level("Phase Warden", "Nyx projects a persistent containment field.", { auraSlow: 0.20, damage: 30, pierce: 24, revealGlobal: true, cooldownMul: 0.70 })
    ],
    ability: {
      name: "Absolute Stasis",
      cooldown: 46,
      kind: "stasis",
      description: "Freezes visible hostiles, reveals hidden ones, and heavily slows bosses."
    }
  },
  {
    id: "forge",
    name: "Forge Mercer",
    title: "Systems Broker",
    color: "#91e0ad",
    cost: 800,
    range: 105,
    attackCooldown: 1.4,
    damage: 3,
    pierce: 4,
    projectileSpeed: 420,
    footprint: 21,
    targetMode: "strongest",
    description: "A defensive economist who converts command infrastructure into resource throughput.",
    levels: [
      level("Broker", "Initial deployment."),
      level("Market Route", "+8% round income.", { roundIncome: 0.08 }),
      level("Repair Contract", "Repairs a small amount of integrity every minute.", { repairInterval: 60, repairAmount: 1 }),
      level("Expanded Office", "+20 range.", { range: 20 }),
      level("Bulk Deal", "Tower purchases nearby are 2% cheaper.", { discount: 0.02 }),
      level("Logistics", "Income towers produce +8%.", { incomeMultiplier: 0.08 }),
      level("Emergency Credit", "+1 damage.", { damage: 1 }),
      level("Reserve Fund", "Stores a small reserve for end-of-wave bonuses.", { reserveRate: 0.015 }),
      level("Field Repair", "Repairs every 35 seconds.", { repairInterval: 35, repairAmount: 1 }),
      level("Tax Relay", "+12% round income.", { roundIncome: 0.12 }),
      level("Trade Floor", "Income effects gain 10% effectiveness.", { incomeMultiplier: 0.10 }),
      level("Capital Shield", "Nearby towers gain slight damage reduction.", { auraDamageReduction: 0.05 }),
      level("Liquidity", "Passive cash every 12 seconds.", { cashInterval: 12, cashAmount: 8 }),
      level("Insurance", "First lethal leak during an ability window is forgiven.", { leakGuard: true }),
      level("Bureaucratic Speed", "-10% attack cooldown.", { cooldownMul: 0.90 }),
      level("Industrial Credit", "+5 damage.", { damage: 5 }),
      level("Grand Contract", "Tower sell values increase by 4%.", { sellBonus: 0.04 }),
      level("Reserve Bank", "Passive cash scales with Forge investment.", { cashInterval: 8, cashAmount: 20, reserveRate: 0.035 }),
      level("Economic Mesh", "Round income and nearby income multipliers improve.", { roundIncome: 0.16, incomeMultiplier: 0.18 }),
      level("Systems Broker", "Forge becomes a global economy command unit.", { roundIncome: 0.22, incomeMultiplier: 0.25, sellBonus: 0.10, cashInterval: 5, cashAmount: 35, damage: 12, cooldownMul: 0.72 })
    ],
    ability: {
      name: "Liquidity Injection",
      cooldown: 48,
      kind: "liquidity",
      description: "Pays a large immediate credit dividend based on the current defense value."
    }
  },
  {
    id: "solenne",
    name: "Solenne Rook",
    title: "Radiant Gunner",
    color: "#ffd773",
    cost: 900,
    range: 135,
    attackCooldown: 1.05,
    damage: 12,
    pierce: 9,
    projectileSpeed: 500,
    footprint: 20,
    targetMode: "first",
    description: "An energy marksman specializing in high-density radiant bursts.",
    levels: [
      level("Initiate", "Initial deployment."),
      level("Hot Vector", "+12 projectile speed.", { projectileSpeedMul: 1.12 }),
      level("Radiant Reach", "+12 range.", { range: 12 }),
      level("Burn Trace", "Adds a short heat effect.", { dotDamage: 1.4, dotDuration: 3 }),
      level("Twin Flare", "+1 projectile.", { projectileCount: 2 }),
      level("Focused Sun", "+4 damage.", { damage: 4 }),
      level("Wide Spectrum", "+3 pierce.", { pierce: 3 }),
      level("Rapid Core", "-9% cooldown.", { cooldownMul: 0.91 }),
      level("Thermal Lock", "Heat effects stack.", { dotStack: true }),
      level("Solar Mark", "Marked targets take +12% damage from Solenne.", { markMultiplier: 0.12 }),
      level("Corona", "+20 range.", { range: 20 }),
      level("Lance", "+8 damage and +6 pierce.", { damage: 8, pierce: 6 }),
      level("Scatter Sun", "+2 projectiles.", { projectileCount: 4 }),
      level("Bright Shell", "Projectiles ignore more armor.", { armorBypass: 6 }),
      level("Flashline", "-14% cooldown.", { cooldownMul: 0.86 }),
      level("Radiant Storm", "Every fourth volley emits a secondary pulse.", { pulseEvery: 4, pulseDamage: 12, pulseRadius: 70 }),
      level("Star Core", "+14 damage.", { damage: 14 }),
      level("Sunfall", "Improved area pulse radius.", { pulseRadius: 120, pulseDamage: 24 }),
      level("Daybreak", "Stealth-bypassing radiant field.", { stealthBypass: true, revealAura: 110 }),
      level("Radiant Gunner", "Solenne continuously emits controlled stellar pulses.", { damage: 32, pierce: 20, projectileCount: 7, pulseEvery: 2, pulseDamage: 65, pulseRadius: 160, cooldownMul: 0.68, stealthBypass: true })
    ],
    ability: {
      name: "Daybreak",
      cooldown: 42,
      kind: "daybreak",
      description: "Reveals the entire battlefield and fires a wide radiant burst."
    }
  },
  {
    id: "rift",
    name: "Rift Calder",
    title: "Vector Hunter",
    color: "#ff9cce",
    cost: 1100,
    range: 180,
    attackCooldown: 1.8,
    damage: 32,
    pierce: 3,
    projectileSpeed: 900,
    footprint: 18,
    targetMode: "strongest",
    description: "A late-game precision hunter that trades rate of fire for escalating weakpoint pressure.",
    levels: [
      level("Tracker", "Initial deployment."),
      level("Rangefinder", "+20 range.", { range: 20 }),
      level("Fast Scope", "-7% cooldown.", { cooldownMul: 0.93 }),
      level("Marked Line", "Hits mark a target.", { markMultiplier: 0.12 }),
      level("Twin Lock", "+1 projectile.", { projectileCount: 2 }),
      level("Heavy Point", "+10 damage.", { damage: 10 }),
      level("Armor Map", "+10 armor bypass.", { armorBypass: 10 }),
      level("Critical Logic", "20% critical hit chance.", { critChance: 0.20, critMultiplier: 2.7 }),
      level("Deep Scope", "+30 range.", { range: 30 }),
      level("Hunter's Tempo", "-10% cooldown.", { cooldownMul: 0.90 }),
      level("Cull", "Targets below 15% health take lethal precision damage.", { executeThreshold: 0.15 }),
      level("Tracer Swarm", "+2 projectiles.", { projectileCount: 4 }),
      level("Null Shot", "Higher resistance bypass.", { resistancePierce: 0.55 }),
      level("Critical Mass", "Critical chance rises to 30%.", { critChance: 0.10, critMultiplier: 3.1 }),
      level("Far Vector", "+36 range.", { range: 36 }),
      level("Hunter Protocol", "Targets can be retargeted instantly after death.", { retarget: true }),
      level("Absolute Point", "+22 damage.", { damage: 22, pierce: 6 }),
      level("Execution Mesh", "Execute threshold increases.", { executeThreshold: 0.22 }),
      level("Final Scope", "-18% cooldown.", { cooldownMul: 0.82 }),
      level("Vector Hunter", "Rift becomes a long-range execution engine.", { range: 45, damage: 90, pierce: 18, armorBypass: 40, resistancePierce: 0.85, critChance: 0.35, critMultiplier: 3.8, executeThreshold: 0.25, projectileCount: 7, cooldownMul: 0.58, stealthBypass: true })
    ],
    ability: {
      name: "Terminal Lock",
      cooldown: 50,
      kind: "terminal",
      description: "Locks onto the strongest visible target and deals a massive precision strike."
    }
  }
];

function applyLevelModifiers(base, levels) {
  const stats = { ...base };
  for (let i = 0; i < levels.length; i++) {
    const modifiers = levels[i].modifiers ?? {};
    for (const [key, value] of Object.entries(modifiers)) {
      if (key.endsWith("Mul")) {
        const actual = key.slice(0, -3);
        stats[actual] = (stats[actual] ?? 1) * value;
      } else if (key === "projectileSpeedMul") {
        stats.projectileSpeed = (stats.projectileSpeed ?? 1) * value;
      } else if (typeof value === "boolean") {
        stats[key] = stats[key] || value;
      } else {
        stats[key] = (stats[key] ?? 0) + value;
      }
    }
  }
  return stats;
}

export class Hero {
  constructor(game, heroId, x, y) {
    this.game = game;
    this.spec = HEROES.find((hero) => hero.id === heroId);
    if (!this.spec) throw new Error("Unknown hero: " + heroId);
    this.id = game.ids.get();
    this.x = x;
    this.y = y;
    this.xp = 0;
    this.level = 1;
    this.attackTimer = 0.05;
    this.abilityCooldown = 0;
    this.effects = new Map();
    this.cashTimer = 0;
    this.repairTimer = 0;
    this.targetMode = this.spec.targetMode;
    this.selected = false;
    this.damageDealt = 0;
    this.killCount = 0;
    this.stats = this.computeStats();
  }

  computeStats() {
    const currentLevels = this.spec.levels.slice(0, this.level);
    const stats = applyLevelModifiers({
      range: this.spec.range,
      attackCooldown: this.spec.attackCooldown,
      damage: this.spec.damage,
      pierce: this.spec.pierce,
      projectileSpeed: this.spec.projectileSpeed,
      projectileCount: 1,
      armorBypass: 0,
      stealthBypass: false,
      resistancePierce: 0,
      critChance: 0,
      critMultiplier: 2,
      executeThreshold: 0,
      auraSpeed: 0,
      auraRange: 0,
      roundIncome: 0,
      incomeMultiplier: 0,
      discount: 0,
      sellBonus: 0,
      cashInterval: 0,
      cashAmount: 0,
      repairInterval: 0,
      repairAmount: 0,
      auraDamage: 0,
      ...this.spec
    }, currentLevels);

    stats.attackCooldown = Math.max(0.08, stats.attackCooldown);
    stats.range = Math.max(20, stats.range);
    stats.projectileCount = Math.max(1, Math.floor(stats.projectileCount));
    return stats;
  }

  gainXp(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return 0;
    const before = this.level;
    this.xp += amount;
    while (this.level < this.spec.levels.length && this.xp >= HERO_XP[this.level]) {
      this.level += 1;
    }
    if (this.level !== before) {
      this.stats = this.computeStats();
      this.game.emit("heroLevel", this);
    }
    return this.level - before;
  }

  attackCooldownValue() {
    return Math.max(0.08, this.stats.attackCooldown * (this.effects.get("overclock")?.cooldownMul ?? 1));
  }

  canUseAbility() {
    return this.abilityCooldown <= 0;
  }

  useAbility() {
    if (!this.canUseAbility()) return { ok:false, reason:"Hero ability cooling down." };
    const ability = this.spec.ability;
    const game = this.game;
    let affected = 0;

    switch (ability.kind) {
      case "strike": {
        const targets = [...game.enemies.values()]
          .filter((enemy) => !enemy.dead && !enemy.leaked && distance(this, enemy) <= this.stats.range)
          .sort((a,b) => b.progress - a.progress)
          .slice(0, 8);
        for (const target of targets) {
          const result = target.takeDamage(this.stats.damage * 2.5 + this.level * 5, {
            armorBypass: this.stats.armorBypass + 8,
            resistancePierce: this.stats.resistancePierce,
            ignoreShield: this.stats.armorBypass >= 20
          });
          this.damageDealt += result.damage;
          game.statsThisRun.damageDealt += result.damage;
          if (result.killed) this.killCount += 1;
          affected += 1;
        }
        break;
      }

      case "stasis":
        for (const enemy of game.enemies.values()) {
          if (enemy.dead || enemy.leaked) continue;
          enemy.addEffect("stun", { factor:0.01, duration:2.6 });
          enemy.addEffect("slow", { factor:0.42, duration:8 });
          affected += 1;
        }
        game.globalRevealTimer = Math.max(game.globalRevealTimer, 10);
        break;

      case "liquidity": {
        const payout = Math.floor(900 + this.game.wave * 22 + this.game.towers.reduce((sum, tower) => sum + tower.totalSpent, 0) * 0.08);
        game.cash += payout;
        game.statsThisRun.creditsEarned += payout;
        game.save.statistics.creditsEarned += payout;
        affected = payout;
        break;
      }

      case "daybreak": {
        game.globalRevealTimer = Math.max(game.globalRevealTimer, 14);
        const targets = [...game.enemies.values()].filter((enemy) => !enemy.dead && !enemy.leaked);
        for (const target of targets) {
          const result = target.takeDamage(this.stats.damage * 1.9, {
            armorBypass: this.stats.armorBypass + 10,
            resistancePierce: this.stats.resistancePierce
          });
          this.damageDealt += result.damage;
          game.statsThisRun.damageDealt += result.damage;
          affected += 1;
        }
        break;
      }

      case "terminal": {
        const target = game.findHeroTarget(this);
        if (target) {
          const result = target.takeDamage(Math.max(target.hp, this.stats.damage * 12), {
            armorBypass: this.stats.armorBypass + 100,
            resistancePierce: 1
          });
          this.damageDealt += result.damage;
          game.statsThisRun.damageDealt += result.damage;
          if (result.killed) this.killCount += 1;
          affected = 1;
        }
        break;
      }

      default:
        this.effects.set("overclock", { duration:6, cooldownMul:0.52 });
        break;
    }

    this.abilityCooldown = ability.cooldown;
    this.game.autoSave();
    this.game.emit("heroAbility", { hero:this, ability, affected });
    return { ok:true, affected };
  }

  update(dt) {
    this.attackTimer -= dt;
    this.abilityCooldown = Math.max(0, this.abilityCooldown - dt);

    for (const [name, effect] of this.effects) {
      effect.duration -= dt;
      if (effect.duration <= 0) this.effects.delete(name);
    }

    if (this.attackTimer <= 0) {
      const target = this.game.findHeroTarget(this);
      if (target) this.attack(target);
      this.attackTimer = this.attackCooldownValue();
    }

    if (this.stats.cashInterval > 0) {
      this.cashTimer += dt;
      while (this.cashTimer >= this.stats.cashInterval) {
        this.cashTimer -= this.stats.cashInterval;
        const payout = Math.max(0, Math.floor(this.stats.cashAmount));
        this.game.cash += payout;
        this.game.statsThisRun.creditsEarned += payout;
        this.game.save.statistics.creditsEarned += payout;
        this.game.emit("heroIncome", { hero:this, payout });
      }
    }

    if (this.stats.repairInterval > 0) {
      this.repairTimer += dt;
      while (this.repairTimer >= this.stats.repairInterval) {
        this.repairTimer -= this.stats.repairInterval;
        const repair = Math.max(0, Math.floor(this.stats.repairAmount));
        if (repair > 0) {
          this.game.lives += repair;
          this.game.emit("heroRepair", { hero:this, repair });
        }
      }
    }

    if (this.level < this.spec.levels.length) {
      this.gainXp(dt * (2.5 + this.game.wave * 0.02));
    }
  }

  attack(target) {
    for (let i = 0; i < this.stats.projectileCount; i++) {
      let damage = this.stats.damage;
      if (this.stats.executeThreshold > 0 && target.hp / Math.max(1, target.maxHp) <= this.stats.executeThreshold) {
        damage = target.hp;
      } else if (this.stats.critChance > 0 && this.game.random() < this.stats.critChance) {
        damage *= this.stats.critMultiplier;
      }

      const result = target.takeDamage(damage, {
        armorBypass: this.stats.armorBypass,
        resistancePierce: this.stats.resistancePierce
      });
      this.damageDealt += result.damage;
      this.game.statsThisRun.damageDealt += result.damage;
      if (result.killed) {
        this.killCount += 1;
        this.gainXp(8 + target.spec.tier * 2);
      }
    }
  }

  serialize() {
    return {
      heroId: this.spec.id,
      x: this.x,
      y: this.y,
      xp: this.xp,
      level: this.level,
      abilityCooldown: this.abilityCooldown,
      targetMode: this.targetMode
    };
  }

  static fromSave(game, data) {
    const hero = new Hero(game, data.heroId, data.x, data.y);
    hero.xp = Math.max(0, data.xp ?? 0);
    hero.level = clamp(Math.floor(data.level ?? 1), 1, hero.spec.levels.length);
    hero.abilityCooldown = Math.max(0, data.abilityCooldown ?? 0);
    hero.targetMode = data.targetMode ?? hero.spec.targetMode;
    hero.stats = hero.computeStats();
    return hero;
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function getHero(heroId) {
  return HEROES.find((hero) => hero.id === heroId);
}
