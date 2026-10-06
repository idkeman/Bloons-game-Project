export const TOWER_RULES = {
  sharpshooter: {
    pattern: "single",
    critChance: 0.04,
    critMultiplier: 2.4,
    preferred: "strong",
    tags: ["precision", "critical"]
  },
  boomer: {
    pattern: "returning",
    returnDamageMultiplier: 1.25,
    bounceMultiplier: 1,
    tags: ["returning", "ricochet"]
  },
  cannon: {
    pattern: "shell",
    splashMultiplier: 1,
    stunDuration: 0.6,
    tags: ["explosive", "stun"]
  },
  tack: {
    pattern: "radial",
    radialCountBonus: 2,
    tags: ["radial", "close"]
  },
  frost: {
    pattern: "freeze",
    slowBonus: 0.05,
    tags: ["slow", "freeze"]
  },
  glue: {
    pattern: "resin",
    slowBonus: 0.08,
    corrosionMultiplier: 1.2,
    tags: ["slow", "corrosion"]
  },
  sniper: {
    pattern: "hitscan",
    critChance: 0.08,
    critMultiplier: 2.8,
    bossDamageMultiplier: 1.15,
    tags: ["global", "precision"]
  },
  sub: {
    pattern: "torpedo",
    camoPriority: true,
    tags: ["water", "sonar", "torpedo"]
  },
  boat: {
    pattern: "broadside",
    projectileBonus: 1,
    tags: ["water", "merchant", "carrier"]
  },
  ace: {
    pattern: "air-circle",
    projectileBonus: 2,
    tags: ["air", "radial"]
  },
  wizard: {
    pattern: "arcane",
    bounceBonus: 1,
    homingBonus: 0.015,
    tags: ["magic", "summon"]
  },
  super: {
    pattern: "beam",
    bossDamageMultiplier: 1.25,
    tags: ["beam", "energy"]
  },
  ninja: {
    pattern: "seeking",
    homingBonus: 0.035,
    critChance: 0.05,
    tags: ["homing", "decoy"]
  },
  alchemist: {
    pattern: "brew",
    buffRange: 100,
    incomeBonus: 1,
    tags: ["buff", "corrosion"]
  },
  village: {
    pattern: "support",
    supportMultiplier: 1.12,
    tags: ["support", "economy"]
  },
  druid: {
    pattern: "nature",
    rootChance: 0.04,
    slowBonus: 0.05,
    tags: ["nature", "root"]
  },
  spike: {
    pattern: "track-field",
    persistent: true,
    tags: ["trap", "persistent"]
  },
  engineer: {
    pattern: "sentry",
    droneBonus: 1,
    tags: ["drone", "trap"]
  },
  mortar: {
    pattern: "artillery",
    zoneDuration: 3.5,
    tags: ["artillery", "zone"]
  },
  laser: {
    pattern: "prism-beam",
    refractionCount: 2,
    bossDamageMultiplier: 1.1,
    tags: ["beam", "energy", "refraction"]
  },
  gatling: {
    pattern: "minigun",
    heatPerShot: 1,
    coolingRate: 5,
    tags: ["sustained", "automatic"]
  },
  heli: {
    pattern: "air-gunship",
    missileBonus: 1,
    supportRadius: 80,
    tags: ["air", "support"]
  },
  beast: {
    pattern: "pack",
    packSize: 2,
    rootChance: 0.08,
    tags: ["pack", "nature"]
  },
  timekeeper: {
    pattern: "temporal",
    globalSlow: 0.04,
    statusExtension: 0.25,
    tags: ["time", "slow"]
  },
  mine: {
    pattern: "minefield",
    persistent: true,
    chainRadius: 70,
    tags: ["trap", "chain"]
  },
  farm: {
    pattern: "economy",
    passiveIncome: true,
    compoundGrowth: 0.015,
    tags: ["economy", "growth"]
  },
  beacon: {
    pattern: "aegis",
    globalSupport: true,
    shieldCapacity: 1,
    tags: ["support", "shield"]
  }
};

export function getTowerRule(towerId) {
  return TOWER_RULES[towerId] || {
    pattern: "default",
    tags: []
  };
}

export function applyTowerRule(attack, towerId, target = null) {
  const rule = getTowerRule(towerId);
  const result = {
    ...attack,
    tags: [...(attack.tags || []), ...rule.tags],
    pattern: rule.pattern
  };

  if (rule.projectileBonus) {
    result.projectiles =
      (result.projectiles || 1) +
      rule.projectileBonus;
  }

  if (rule.radialCountBonus) {
    result.projectiles =
      (result.projectiles || 1) +
      rule.radialCountBonus;
    result.spread =
      result.spread ||
      Math.PI * 2;
  }

  if (rule.homingBonus) {
    result.homing =
      (result.homing || 0) +
      rule.homingBonus;
  }

  if (target?.data?.boss && rule.bossDamageMultiplier) {
    result.damage =
      (result.damage || 0) *
      rule.bossDamageMultiplier;
  }

  if (rule.slowBonus) {
    result.slow = Math.min(
      0.90,
      (result.slow || 0) +
      rule.slowBonus
    );
  }

  if (rule.corrosionMultiplier && result.corrosion) {
    result.corrosion *=
      rule.corrosionMultiplier;
  }

  return result;
}