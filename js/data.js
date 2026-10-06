/*
 * Skyfront Dominion data registry.
 *
 * Design goal:
 * - Keep balance data declarative.
 * - Keep simulation independent from the UI.
 * - Make adding a tower/enemy/map a data operation before it becomes a code operation.
 * - Use original terminology and original visual identities.
 */

export const GAME = Object.freeze({
  name: "Skyfront Dominion",
  version: "0.1.0-foundation",
  startingCash: 650,
  startingLives: 100,
  maxWave: 150,
  tickCap: 0.05,
  sellRatio: 0.72,
  roundIncomeBase: 80,
  freeplayGrowth: 0.025
});

const clone = (value) => JSON.parse(JSON.stringify(value));

const effect = (type, values = {}) => ({ type, ...values });

const makeUpgrade = (tier, name, cost, description, modifiers = {}, effects = []) => ({
  tier,
  name,
  cost,
  description,
  modifiers,
  effects
});

const paths = (...entries) => entries.map((path) => path.map(clone));

export const TOWERS = [
  {
    id: "sentinel",
    name: "Sentinel",
    short: "SEN",
    category: "kinetic",
    cost: 120,
    footprint: 18,
    range: 110,
    attackCooldown: 0.72,
    damage: 1,
    pierce: 3,
    projectileSpeed: 380,
    projectileSize: 4,
    projectileKind: "bolt",
    targetMode: "first",
    color: "#6bd0ff",
    description: "A reliable single-target defense platform.",
    paths: paths(
      [
        makeUpgrade(1, "Long Lens", 90, "+18 range.", { range: 18 }),
        makeUpgrade(2, "Stabilizer", 150, "-20% attack cooldown.", { attackCooldownMul: 0.80 }),
        makeUpgrade(3, "Rail Bolt", 300, "+2 damage and +2 pierce.", { damage: 2, pierce: 2 }),
        makeUpgrade(4, "Magnetic Driver", 900, "Heavy bolts gain +4 damage and can pierce armored targets.", { damage: 4, pierce: 5, armorBypass: 1 }),
        makeUpgrade(5, "Skyline Rail", 5200, "Rapid hypersonic bolts with huge reach.", { range: 90, damage: 20, pierce: 30, attackCooldownMul: 0.25, projectileSpeedMul: 1.8 }, [effect("shockwave", { radius: 70, damage: 8, pierce: 15 })])
      ],
      [
        makeUpgrade(1, "Twin Feed", 110, "Fires a second bolt.", { projectileCount: 2 }),
        makeUpgrade(2, "Burst Chamber", 190, "Fires +1 projectile and attacks faster.", { projectileCount: 3, attackCooldownMul: 0.88 }),
        makeUpgrade(3, "Shatter Core", 380, "Bolts split on impact.", { split: 2, damage: 2 }),
        makeUpgrade(4, "Fracture Salvo", 1000, "Splitting bolts deal more damage and create fragments.", { split: 4, damage: 6, projectileCount: 4 }, [effect("fragment", { count: 3, damageFactor: 0.45 })]),
        makeUpgrade(5, "Prism Barrage", 6000, "A sustained stream of refracting bolts.", { split: 5, damage: 35, pierce: 18, projectileCount: 7, attackCooldownMul: 0.32 }, [effect("beamPulse", { damage: 20, radius: 25 })])
      ],
      [
        makeUpgrade(1, "Weighted Tips", 100, "+1 damage.", { damage: 1 }),
        makeUpgrade(2, "Dense Slugs", 175, "Bolts ignore 1 armor.", { damage: 2, armorBypass: 1 }),
        makeUpgrade(3, "Concussive Head", 360, "Hits briefly slow targets.", { slowFactor: 0.88 }, [effect("slow", { duration: 0.8, factor: 0.72 })]),
        makeUpgrade(4, "Siege Head", 1050, "Heavy shots pierce armor and stagger elites.", { damage: 8, armorBypass: 10, pierce: 6 }, [effect("stunChance", { chance: 0.16, duration: 0.8 })]),
        makeUpgrade(5, "Gravity Lance", 6500, "Each impact compresses nearby enemies.", { damage: 60, pierce: 12, attackCooldownMul: 0.4 }, [effect("gravity", { radius: 92, pull: 0.2, slow: 0.55 })])
      ]
    )
  },
  {
    id: "flarecaster",
    name: "Flarecaster",
    short: "FLC",
    category: "energy",
    cost: 280,
    footprint: 17,
    range: 96,
    attackCooldown: 1.15,
    damage: 3,
    pierce: 5,
    projectileSpeed: 270,
    projectileSize: 7,
    projectileKind: "flare",
    targetMode: "first",
    color: "#ffae66",
    description: "Projects volatile energy packets that can ignite targets.",
    paths: paths(
      [
        makeUpgrade(1, "Hot Coil", 120, "+25% projectile speed.", { projectileSpeedMul: 1.25 }),
        makeUpgrade(2, "Thermal Lens", 180, "+20 range and +1 pierce.", { range: 20, pierce: 1 }),
        makeUpgrade(3, "Ignition", 390, "Impacts apply a damage-over-time burn.", {}, [effect("burn", { damage: 1.5, duration: 4, interval: 0.5 })]),
        makeUpgrade(4, "Inferno Cell", 1100, "Burn spreads and deals much more damage.", { damage: 5 }, [effect("burn", { damage: 5, duration: 5, interval: 0.5, spreadRadius: 42, spreadChance: 0.45 })]),
        makeUpgrade(5, "Solar Furnace", 6800, "Creates periodic radiant pulses around the tower.", { damage: 22, attackCooldownMul: 0.45 }, [effect("radiantPulse", { radius: 125, damage: 24, pierce: 45 })])
      ],
      [
        makeUpgrade(1, "Split Emitter", 150, "+1 projectile.", { projectileCount: 2 }),
        makeUpgrade(2, "Wide Arc", 210, "Shots cover a broader sector.", { projectileCount: 3, turnRate: 2.0 }),
        makeUpgrade(3, "Ricochet Cell", 450, "Energy packets bounce between targets.", { bounce: 2 }),
        makeUpgrade(4, "Chain Lightning", 1300, "Hits jump through nearby enemies.", { bounce: 7, damage: 8 }, [effect("chain", { radius: 70, multiplier: 0.72 })]),
        makeUpgrade(5, "Storm Array", 7500, "A chained energy storm tracks many targets.", { projectileCount: 7, bounce: 10, damage: 28, attackCooldownMul: 0.4 }, [effect("storm", { strikes: 5, radius: 170, damage: 22 })])
      ],
      [
        makeUpgrade(1, "Focused Prism", 160, "+12 range.", { range: 12 }),
        makeUpgrade(2, "Piercing Prism", 230, "+4 pierce.", { pierce: 4 }),
        makeUpgrade(3, "True Spectrum", 500, "Projectiles bypass stealth concealment.", { stealthBypass: true }),
        makeUpgrade(4, "Spectrum Breaker", 1500, "Energy strips shields and ignores resistances.", { damage: 12, shieldBreak: 8, resistancePierce: 0.35 }),
        makeUpgrade(5, "Aurora Engine", 8200, "Massive precision energy with broad resistance bypass.", { range: 85, damage: 70, pierce: 25, attackCooldownMul: 0.48, stealthBypass: true, resistancePierce: 0.8 }, [effect("aurora", { radius: 90, damage: 35 })])
      ]
    )
  },
  {
    id: "barrier",
    name: "Barrier Rig",
    short: "B-R",
    category: "support",
    cost: 420,
    footprint: 20,
    range: 105,
    attackCooldown: 0.9,
    damage: 0,
    pierce: 0,
    projectileSpeed: 0,
    projectileSize: 0,
    projectileKind: "none",
    targetMode: "close",
    color: "#7ee8c7",
    support: true,
    description: "A defensive support tower that changes the economics and survivability of nearby towers.",
    paths: paths(
      [
        makeUpgrade(1, "Capacitor Field", 180, "+8 range and extends support radius.", { range: 8, supportRange: 18 }),
        makeUpgrade(2, "Reinforced Nodes", 260, "Nearby towers gain +10% projectile durability.", { buffProjectileLife: 0.1 }),
        makeUpgrade(3, "Reflective Mesh", 520, "Nearby towers gain a small chance to reflect hostile status effects.", { statusReflect: 0.12 }),
        makeUpgrade(4, "Fortress Grid", 1400, "Nearby towers gain 15% range and 12% attack speed.", { buffRange: 0.15, buffSpeed: 0.12 }),
        makeUpgrade(5, "Citadel Protocol", 8200, "A large aura grants damage, range, cooldown and damage reduction.", { supportRange: 70, buffRange: 0.25, buffSpeed: 0.28, buffDamage: 0.3, buffDamageReduction: 0.22 })
      ],
      [
        makeUpgrade(1, "Revenue Link", 210, "Nearby income towers generate +8% cash.", { incomeBonus: 0.08 }),
        makeUpgrade(2, "Contract Relay", 320, "Round rewards increase by 10%.", { roundIncomeBonus: 0.10 }),
        makeUpgrade(3, "Market Siphon", 650, "Every fifth enemy defeated grants bonus credits.", { killCashEvery: 5, killCash: 4 }),
        makeUpgrade(4, "Trade Network", 1800, "Income multipliers stack across linked support hubs.", { incomeBonus: 0.25, tradeLinks: 3 }),
        makeUpgrade(5, "Economic Singularity", 9000, "Converts part of tower value into scalable passive income.", { incomeRate: 0.0012, incomeBonus: 0.45 })
      ],
      [
        makeUpgrade(1, "Repair Drone", 190, "Repairs 1 integrity every 20 seconds.", { repairInterval: 20, repairAmount: 1 }),
        makeUpgrade(2, "Emergency Crew", 260, "Repairs 2 integrity every 15 seconds.", { repairInterval: 15, repairAmount: 2 }),
        makeUpgrade(3, "Deflection Field", 560, "Nearby towers ignore one hit of crowd-control per 8 seconds.", { crowdControlGuard: 8 }),
        makeUpgrade(4, "Restore Matrix", 1700, "Repairs 1 integrity every 5 seconds.", { repairInterval: 5, repairAmount: 1 }),
        makeUpgrade(5, "Phoenix Array", 9200, "Once per run, prevents a lethal integrity loss and repairs 20.", { revive: true, repairAmount: 20 })
      ]
    )
  },
  {
    id: "drill",
    name: "Drill Battery",
    short: "DRL",
    category: "kinetic",
    cost: 330,
    footprint: 19,
    range: 90,
    attackCooldown: 1.05,
    damage: 5,
    pierce: 1,
    projectileSpeed: 310,
    projectileSize: 5,
    projectileKind: "drill",
    targetMode: "strongest",
    color: "#c4b6ff",
    description: "Launches heavy penetrators designed for armored targets.",
    paths: paths(
      [
        makeUpgrade(1, "Extended Barrel", 150, "+18 range.", { range: 18 }),
        makeUpgrade(2, "Machined Bore", 250, "+3 damage.", { damage: 3 }),
        makeUpgrade(3, "Spiral Core", 520, "Penetrators gain +4 pierce and +1 armor bypass.", { pierce: 4, armorBypass: 1 }),
        makeUpgrade(4, "Tungsten Drill", 1500, "+14 damage and large armor bypass.", { damage: 14, armorBypass: 12 }),
        makeUpgrade(5, "Planet Piercer", 9000, "Massive projectiles travel through entire lines.", { damage: 95, pierce: 60, armorBypass: 100, attackCooldownMul: 0.55 }, [effect("lineShock", { damage: 45 })])
      ],
      [
        makeUpgrade(1, "Rotary Feed", 180, "-12% attack cooldown.", { attackCooldownMul: 0.88 }),
        makeUpgrade(2, "Servo Loader", 250, "-18% attack cooldown.", { attackCooldownMul: 0.82 }),
        makeUpgrade(3, "Three-Round Burst", 500, "Three penetrators per volley.", { projectileCount: 3 }),
        makeUpgrade(4, "Volley Logic", 1450, "Five penetrating projectiles select independent targets.", { projectileCount: 5, attackCooldownMul: 0.85 }),
        makeUpgrade(5, "Drillstorm", 8800, "Eight independent penetrators fire in rapid rotation.", { projectileCount: 8, damage: 48, attackCooldownMul: 0.42, pierce: 15 })
      ],
      [
        makeUpgrade(1, "Crush Edge", 130, "Hits slow armored enemies.", {}, [effect("slow", { duration: 1.5, factor: 0.76 })]),
        makeUpgrade(2, "Breaker Point", 240, "Shreds shields on impact.", { shieldBreak: 4 }),
        makeUpgrade(3, "Rupture", 550, "Targets with armor lose a stack of plating.", { armorShred: 1 }),
        makeUpgrade(4, "Cataclysm Tip", 1700, "Impacts trigger localized ruptures.", { damage: 20 }, [effect("rupture", { radius: 28, damage: 16, pierce: 5 })]),
        makeUpgrade(5, "Faultline", 9400, "Every hit destabilizes the terrain below the target.", { damage: 65, pierce: 24 }, [effect("faultline", { radius: 50, slow: 0.65, damage: 28 })])
      ]
    )
  },
  {
    id: "marksman",
    name: "Marksman Array",
    short: "MSA",
    category: "precision",
    cost: 560,
    footprint: 16,
    range: 155,
    attackCooldown: 1.65,
    damage: 22,
    pierce: 1,
    projectileSpeed: 800,
    projectileSize: 3,
    projectileKind: "beam",
    targetMode: "strongest",
    color: "#f2e36c",
    description: "Slow, extremely accurate long-range damage.",
    paths: paths(
      [
        makeUpgrade(1, "Rangefinder", 190, "+28 range.", { range: 28 }),
        makeUpgrade(2, "Vector Lens", 290, "+24 range and projectile speed.", { range: 24, projectileSpeedMul: 1.3 }),
        makeUpgrade(3, "Charge Shot", 650, "Every third attack deals triple damage.", { chargeEvery: 3, damageMul: 1.4 }),
        makeUpgrade(4, "Piercing Optic", 1900, "+16 damage and 8 pierce.", { damage: 16, pierce: 8 }),
        makeUpgrade(5, "Zero Point Rifle", 11000, "Extremely powerful shots with priority locking.", { damage: 180, pierce: 24, range: 120, attackCooldownMul: 0.58, stealthBypass: true }, [effect("marked", { multiplier: 1.5, duration: 6 })])
      ],
      [
        makeUpgrade(1, "Twin Scope", 210, "+1 projectile.", { projectileCount: 2 }),
        makeUpgrade(2, "Auto Feeder", 300, "-20% cooldown.", { attackCooldownMul: 0.8 }),
        makeUpgrade(3, "Burst Logic", 700, "Three-round bursts.", { projectileCount: 3 }),
        makeUpgrade(4, "Tracer Mesh", 2000, "Projectiles retarget if their target dies.", { retarget: true, projectileCount: 4 }),
        makeUpgrade(5, "Constellation", 12000, "A web of precision shots can hit every visible elite.", { projectileCount: 9, damage: 95, attackCooldownMul: 0.38, pierce: 3 }, [effect("constellation", { strikes: 9, damage: 50 })])
      ],
      [
        makeUpgrade(1, "Cold Core", 200, "Targets are slowed 12%.", {}, [effect("slow", { factor: 0.88, duration: 1 })]),
        makeUpgrade(2, "Null Calibrator", 310, "Ignores most resistance.", { resistancePierce: 0.45 }),
        makeUpgrade(3, "Armor Map", 720, "Massive bonus against plated targets.", { armoredBonus: 2.2 }),
        makeUpgrade(4, "Weakpoint Engine", 2200, "Critical hits become common against marked elites.", { critChance: 0.28, critMultiplier: 3.5 }),
        makeUpgrade(5, "Execution Protocol", 13000, "Targets below 20% health take fatal precision damage.", { damage: 125, executeThreshold: 0.20, critChance: 0.45, critMultiplier: 4.2 })
      ]
    )
  },
  {
    id: "orbital",
    name: "Orbital Array",
    short: "ORB",
    category: "energy",
    cost: 1300,
    footprint: 23,
    range: 135,
    attackCooldown: 2.2,
    damage: 8,
    pierce: 12,
    projectileSpeed: 0,
    projectileSize: 8,
    projectileKind: "orbit",
    targetMode: "first",
    color: "#aa9cff",
    description: "Deploys autonomous orbiting emitters that strike across lanes.",
    paths: paths(
      [
        makeUpgrade(1, "Expanded Ring", 350, "+25 range.", { range: 25 }),
        makeUpgrade(2, "Third Node", 500, "+1 orbital node.", { orbitalNodes: 1 }),
        makeUpgrade(3, "Long Arc", 900, "Orbitals can travel beyond the base ring.", { range: 35 }),
        makeUpgrade(4, "Deep Orbit", 2600, "Orbitals deal additional damage and gain armor bypass.", { damage: 10, armorBypass: 4 }),
        makeUpgrade(5, "Starforge", 15000, "Seven orbital nodes perform synchronized barrages.", { orbitalNodes: 4, damage: 80, attackCooldownMul: 0.5 }, [effect("nova", { radius: 140, damage: 110, pierce: 80 })])
      ],
      [
        makeUpgrade(1, "Fast Spin", 380, "-15% cooldown.", { attackCooldownMul: 0.85 }),
        makeUpgrade(2, "Pulse Drive", 520, "-20% cooldown.", { attackCooldownMul: 0.8 }),
        makeUpgrade(3, "Dual Pulse", 950, "Each node emits twice per cycle.", { pulseCount: 2 }),
        makeUpgrade(4, "Cascade Pulse", 2800, "Pulse impacts chain across nearby targets.", { pulseCount: 3 }, [effect("chain", { radius: 95, multiplier: 0.8, hops: 4 })]),
        makeUpgrade(5, "Event Horizon", 16000, "Dense repeating pulses erase swarms around every node.", { pulseCount: 5, damage: 38, attackCooldownMul: 0.38 }, [effect("gravity", { radius: 180, pull: 0.08, slow: 0.45 })])
      ],
      [
        makeUpgrade(1, "Shield Matrix", 340, "Can damage shielded targets.", { shieldBreak: 5 }),
        makeUpgrade(2, "Phase Matrix", 540, "Can target stealth enemies.", { stealthBypass: true }),
        makeUpgrade(3, "Rending Field", 1100, "Applies resistance reduction.", {}, [effect("rend", { factor: 0.75, duration: 3 })]),
        makeUpgrade(4, "Phase Collapse", 3200, "Hits briefly displace enemies and strip defenses.", { damage: 18, resistancePierce: 0.6 }, [effect("phase", { duration: 0.25 })]),
        makeUpgrade(5, "Event Crown", 18000, "The ring becomes a persistent field of annihilation.", { damage: 100, pierce: 100, stealthBypass: true, attackCooldownMul: 0.55 }, [effect("field", { radius: 180, damagePerSecond: 60, slow: 0.4 })])
      ]
    )
  }
];

// Add more original tower families through declarative definitions.
// These are intentionally different mechanical identities rather than copies of a named commercial tower roster.
const EXTRA_TOWER_SPECS = [
  ["harvester", "Harvester", "HAR", "economy", 520, "#9ee070", "Generates credits from timed extraction cycles.", "income"],
  ["frostline", "Frostline", "FRZ", "control", 390, "#89d7ff", "Projects cryogenic fields that slow and fracture crowds.", "control"],
  ["sparkcoil", "Sparkcoil", "SPK", "energy", 240, "#f7d86b", "Arcs conductive energy between clustered enemies.", "chain"],
  ["bastion", "Bastion", "BST", "defense", 760, "#d7b084", "A heavy platform focused on close-range burst.", "defense"],
  ["windcut", "Windcut", "WND", "kinetic", 470, "#7fe1bb", "Launches razor currents that knock light targets backward.", "control"],
  ["seismor", "Seismor", "SMS", "control", 880, "#cdb28f", "Triggers localized terrain shocks.", "area"],
  ["luminet", "Luminet", "LUM", "support", 680, "#f0f1aa", "Marks targets and amplifies damage from linked towers.", "support"],
  ["voidrail", "Voidrail", "VDR", "precision", 2100, "#8f8bff", "Uses unstable corridors to bypass defenses.", "precision"],
  ["hush", "Hush Array", "HSH", "stealth", 610, "#b0a9c9", "Creates concealment for allied structures and exposes infiltrators.", "utility"],
  ["emberline", "Emberline", "EMB", "area", 980, "#ff8f63", "Places persistent thermal zones on the route.", "area"],
  ["aegis", "Aegis Node", "AEG", "defense", 1450, "#75e3e3", "Converts incoming pressure into temporary barriers.", "defense"],
  ["gravimetric", "Gravimetric", "GRV", "control", 1700, "#a2a4ff", "Changes enemy momentum through local gravity fields.", "control"],
  ["relay", "Relay Core", "RLY", "support", 900, "#88d6a8", "Copies selected tower effects through a network.", "support"],
  ["stormglass", "Stormglass", "STM", "energy", 1850, "#8fd5ff", "Builds electrical charge and releases escalating bursts.", "energy"],
  ["pulseblade", "Pulseblade", "PLS", "kinetic", 740, "#ffd17a", "A short-range melee defense with expanding arcs.", "melee"],
  ["driftmine", "Driftmine", "MIN", "utility", 300, "#e0aa88", "Plants autonomous proximity charges.", "trap"],
  ["vector", "Vector Command", "VEC", "support", 1150, "#9bd8ff", "Rewrites nearby towers' targeting logic and projectile vectors.", "support"],
  ["chronal", "Chronal Lens", "CHR", "support", 2250, "#b8a1ff", "Manipulates time around selected defenses.", "support"],
  ["nexus", "Nexus Forge", "NXS", "apex", 5000, "#ffa9da", "A late-game fusion platform with multi-system interactions.", "apex"],
  ["watcher", "Watcher", "WAT", "precision", 350, "#e4e9ff", "An adaptable long-range tracker.", "precision"]
];

const makeExtraTower = (spec, i) => {
  const [id, name, short, category, cost, color, description, archetype] = spec;
  const bias = (i % 4) * 0.1;
  const baseDamage = archetype === "income" || archetype === "support" ? 0 : 2 + i % 5;
  return {
    id, name, short, category, cost, footprint: 16 + (i % 5),
    range: 88 + (i % 6) * 12,
    attackCooldown: 0.65 + (i % 5) * 0.14,
    damage: baseDamage,
    pierce: 2 + (i % 6),
    projectileSpeed: 260 + i * 16,
    projectileSize: 4 + (i % 4),
    projectileKind: archetype,
    targetMode: ["first", "strongest", "close", "far"][i % 4],
    color,
    support: category === "support" || category === "economy",
    description,
    paths: paths(
      [1,2,3,4,5].map((tier) => makeUpgrade(tier,
        tier === 5 ? "Apex Branch" : ["Calibrated", "Extended", "Specialized", "Advanced", "Dominant"][tier-1],
        Math.round(cost * (0.8 + tier * 0.48) * (1 + bias)),
        "Branch upgrade with scalable modifiers.",
        {
          range: tier * (3 + i % 4),
          damage: Math.round(baseDamage * (0.6 + tier * 0.5)),
          pierce: tier + (i % 4),
          attackCooldownMul: Math.max(0.38, 1 - tier * 0.075)
        },
        tier >= 3 ? [effect(archetype === "control" ? "slow" : archetype === "area" ? "area" : archetype === "support" ? "supportPulse" : "impact", {
          magnitude: tier,
          radius: 30 + tier * 12
        })] : []
      )),
      [1,2,3,4,5].map((tier) => makeUpgrade(tier,
        tier === 5 ? "Network Branch" : ["Twin", "Relay", "Cascade", "Overclock", "Singularity"][tier-1],
        Math.round(cost * (0.9 + tier * 0.56)),
        "Branch upgrade focused on throughput and interaction density.",
        {
          projectileCount: 1 + Math.floor(tier / 2),
          attackCooldownMul: Math.max(0.32, 1 - tier * 0.095),
          range: i % 3 === 0 ? tier * 5 : 0
        },
        tier >= 3 ? [effect("chain", { hops: tier, multiplier: 0.6 + tier * 0.04, radius: 42 + tier * 7 })] : []
      )),
      [1,2,3,4,5].map((tier) => makeUpgrade(tier,
        tier === 5 ? "Utility Branch" : ["Dense", "Reinforced", "Adaptive", "Masterwork", "Ascendant"][tier-1],
        Math.round(cost * (0.85 + tier * 0.51)),
        "Branch upgrade that changes utility, penetration, or field behavior.",
        {
          damage: tier + i % 6,
          armorBypass: tier >= 3 ? tier : 0,
          stealthBypass: tier >= 3 && (i % 2 === 0),
          resistancePierce: tier >= 4 ? Math.min(0.8, tier * 0.14) : 0
        },
        tier >= 4 ? [effect("field", { radius: 28 + tier * 13, damagePerSecond: tier * 2, slow: 0.9 - tier * 0.08 })] : []
      ))
    )
  };
};

EXTRA_TOWER_SPECS.forEach((spec, i) => TOWERS.push(makeExtraTower(spec, i)));

export const ENEMIES = [
  { id:"scout", name:"Scout", tier:1, hp:8, speed:62, radius:9, reward:4, damage:1, color:"#d7dbe7", layer:1 },
  { id:"runner", name:"Runner", tier:1, hp:6, speed:96, radius:8, reward:4, damage:1, color:"#f0b77b", layer:1 },
  { id:"bruiser", name:"Bruiser", tier:2, hp:22, speed:42, radius:12, reward:8, damage:2, color:"#a27f68", armor:1, layer:1 },
  { id:"skimmer", name:"Skimmer", tier:2, hp:15, speed:78, radius:10, reward:7, damage:2, color:"#80d0d8", stealth:true, layer:1 },
  { id:"carrier", name:"Carrier", tier:3, hp:45, speed:35, radius:15, reward:15, damage:3, color:"#a18cff", children:["scout","scout"], layer:1 },
  { id:"plated", name:"Plated", tier:3, hp:72, speed:30, radius:16, reward:18, damage:3, color:"#75849c", armor:6, layer:1 },
  { id:"splitter", name:"Splitter", tier:3, hp:40, speed:56, radius:14, reward:16, damage:2, color:"#cf9ad9", children:["runner","runner","runner"], layer:1 },
  { id:"shielded", name:"Shielded", tier:4, hp:95, speed:33, radius:17, reward:25, damage:4, color:"#8fb9ff", shield:40, layer:1 },
  { id:"phasebound", name:"Phasebound", tier:4, hp:80, speed:52, radius:14, reward:26, damage:4, color:"#9e93d4", stealth:true, phase:0.3, layer:1 },
  { id:"regenerator", name:"Regenerator", tier:4, hp:120, speed:28, radius:18, reward:28, damage:5, color:"#83c38a", regen:3, layer:1 },
  { id:"siegebreaker", name:"Siegebreaker", tier:5, hp:420, speed:24, radius:23, reward:80, damage:15, color:"#d48e68", armor:12, shield:75, layer:1 },
  { id:"mirage", name:"Mirage", tier:5, hp:320, speed:46, radius:21, reward:75, damage:12, color:"#d4b8ff", stealth:true, cloneChance:0.12, layer:1 },
  { id:"titan", name:"Titan", tier:6, hp:1150, speed:15, radius:29, reward:220, damage:30, color:"#93806c", armor:25, shield:120, children:["siegebreaker","plated"], layer:1 },
  { id:"voidwalker", name:"Voidwalker", tier:6, hp:1600, speed:20, radius:31, reward:260, damage:35, color:"#544e8f", stealth:true, phase:0.55, layer:1 },
  { id:"leviathan", name:"Leviathan", tier:7, hp:9000, speed:10, radius:44, reward:800, damage:100, color:"#577a9a", armor:45, shield:500, boss:true, childWaves:["siegebreaker","shielded","regenerator"], layer:1 },
  { id:"overmind", name:"Overmind", tier:8, hp:28000, speed:7, radius:54, reward:2200, damage:300, color:"#8e5cb9", armor:80, shield:1200, boss:true, phase:0.25, childWaves:["titan","mirage","voidwalker"], layer:1 },
  { id:"monolith", name:"Monolith", tier:9, hp:75000, speed:5.5, radius:72, reward:6000, damage:750, color:"#5c636d", armor:140, shield:2500, boss:true, layer:1 },
  { id:"apocalypse", name:"Apocalypse", tier:10, hp:220000, speed:4, radius:88, reward:15000, damage:2500, color:"#b86868", armor:260, shield:7000, boss:true, phase:0.45, layer:1 }
];

export const MAPS = [
  {
    id: "greenway",
    name: "Greenway",
    description: "A readable starter route with open building pads.",
    startLives: 100,
    path: [
      {x:0.00,y:0.42},{x:0.14,y:0.42},{x:0.22,y:0.30},{x:0.38,y:0.30},
      {x:0.49,y:0.56},{x:0.62,y:0.56},{x:0.72,y:0.37},{x:0.86,y:0.37},{x:1.00,y:0.55}
    ],
    blockedZones: [
      {x:0.31,y:0.11,w:0.16,h:0.13},{x:0.71,y:0.68,w:0.16,h:0.14}
    ],
    theme: "meadow"
  },
  {
    id: "crosscurrent",
    name: "Crosscurrent",
    description: "Interlocking lanes with a high-value central nexus.",
    startLives: 120,
    path: [
      {x:0.00,y:0.20},{x:0.24,y:0.20},{x:0.39,y:0.43},{x:0.60,y:0.18},
      {x:0.82,y:0.18},{x:1.00,y:0.40}
    ],
    path2: [
      {x:0.00,y:0.77},{x:0.20,y:0.77},{x:0.39,y:0.55},{x:0.61,y:0.76},
      {x:0.82,y:0.76},{x:1.00,y:0.58}
    ],
    blockedZones: [
      {x:0.42,y:0.34,w:0.16,h:0.30}
    ],
    theme: "river"
  },
  {
    id: "switchyard",
    name: "Switchyard",
    description: "A long industrial lane with split routing.",
    startLives: 110,
    path: [
      {x:0.00,y:0.60},{x:0.15,y:0.60},{x:0.24,y:0.30},{x:0.52,y:0.30},
      {x:0.63,y:0.62},{x:0.80,y:0.62},{x:1.00,y:0.24}
    ],
    path2: [
      {x:0.00,y:0.24},{x:0.16,y:0.24},{x:0.28,y:0.50},{x:0.52,y:0.50},
      {x:0.70,y:0.26},{x:0.83,y:0.26},{x:1.00,y:0.65}
    ],
    blockedZones: [
      {x:0.38,y:0.06,w:0.14,h:0.14},{x:0.40,y:0.75,w:0.14,h:0.14}
    ],
    theme: "industrial"
  },
  {
    id: "nightgrid",
    name: "Nightgrid",
    description: "A dark map with visibility and stealth pressure.",
    startLives: 95,
    path: [
      {x:0.00,y:0.51},{x:0.14,y:0.51},{x:0.23,y:0.18},{x:0.43,y:0.18},
      {x:0.53,y:0.54},{x:0.68,y:0.80},{x:0.86,y:0.80},{x:1.00,y:0.50}
    ],
    blockedZones: [
      {x:0.08,y:0.07,w:0.15,h:0.16},{x:0.69,y:0.09,w:0.17,h:0.16}
    ],
    theme: "night"
  },
  {
    id: "spire",
    name: "Spire",
    description: "A late-game vertical route built for high-range strategies.",
    startLives: 140,
    path: [
      {x:0.00,y:0.82},{x:0.12,y:0.82},{x:0.18,y:0.20},{x:0.39,y:0.20},
      {x:0.46,y:0.78},{x:0.61,y:0.78},{x:0.68,y:0.20},{x:0.85,y:0.20},{x:1.00,y:0.53}
    ],
    blockedZones: [
      {x:0.28,y:0.44,w:0.16,h:0.16},{x:0.72,y:0.46,w:0.13,h:0.15}
    ],
    theme: "spire"
  }
];

const modeNames = ["Scout", "Rush", "Fortified", "Stealth", "Boss Relay", "Endurance"];
export const DIFFICULTIES = [
  { id:"apprentice", name:"Apprentice", hpMul:0.8, speedMul:0.88, incomeMul:1.15, livesMul:1.2 },
  { id:"standard", name:"Standard", hpMul:1, speedMul:1, incomeMul:1, livesMul:1 },
  { id:"veteran", name:"Veteran", hpMul:1.8, speedMul:1.12, incomeMul:0.88, livesMul:0.9 },
  { id:"nightmare", name:"Nightmare", hpMul:3.2, speedMul:1.24, incomeMul:0.72, livesMul:0.75 },
  { id:"cataclysm", name:"Cataclysm", hpMul:6, speedMul:1.42, incomeMul:0.58, livesMul:0.6 }
];

export const CHALLENGES = modeNames.map((name, index) => ({
  id: name.toLowerCase().replace(/\s+/g, "-"),
  name,
  hpMul: [1.0,1.15,1.35,1.1,1.7,2.2][index],
  speedMul: [1.0,1.12,1.0,1.05,1.12,1.28][index],
  special: index === 3 ? "stealth-heavy" : index === 4 ? "boss-heavy" : index === 5 ? "income-pressure" : null
}));

export const ACHIEVEMENTS = [
  { id:"first-deploy", name:"First Deployment", description:"Finish your first wave." },
  { id:"ten-waves", name:"Pressure Tested", description:"Finish 10 waves in one run." },
  { id:"fifty-waves", name:"Grid Veteran", description:"Finish 50 waves." },
  { id:"hundred-waves", name:"Century", description:"Finish 100 waves." },
  { id:"no-leaks", name:"Clean Perimeter", description:"Finish 25 waves without losing integrity." },
  { id:"apex", name:"Apex Architecture", description:"Create an Apex unit." },
  { id:"boss", name:"Boss Breaker", description:"Defeat your first boss." },
  { id:"million", name:"Deep Reserve", description:"Accumulate 1,000,000 credits." }
];

function waveProfile(wave) {
  const base = Math.max(1, Math.floor(2 + wave * 0.92));
  const tierBoost = Math.floor(wave / 9);
  const profile = [
    { id:"scout", amount: base + 3 },
    { id: wave < 5 ? "runner" : "bruiser", amount: Math.floor(base * 0.65) },
    { id:"plated", amount: Math.floor(base * 0.32) }
  ];
  if (wave >= 8) profile.push({ id:"skimmer", amount: Math.floor(base * 0.25) });
  if (wave >= 16) profile.push({ id:"splitter", amount: Math.floor(base * 0.22) });
  if (wave >= 24) profile.push({ id:"shielded", amount: Math.floor(base * 0.18) });
  if (wave >= 35) profile.push({ id:"regenerator", amount: Math.floor(base * 0.12) });
  if (wave >= 50) profile.push({ id:"siegebreaker", amount: Math.floor(base * 0.08) + 1 });
  if (wave >= 65) profile.push({ id:"mirage", amount: Math.floor(base * 0.06) + 1 });
  if (wave >= 80) profile.push({ id:"titan", amount: Math.floor(base * 0.035) + 1 });
  if (wave >= 100) profile.push({ id:"voidwalker", amount: Math.floor(base * 0.025) + 1 });
  if (wave >= 121) profile.push({ id:"leviathan", amount: 1 + Math.floor((wave - 120) / 10) });
  if (wave === 150) profile.push({ id:"apocalypse", amount:1 });
  if (wave % 25 === 0 && wave !== 150) profile.push({ id:"monolith", amount:1 });
  return profile.map((entry) => ({
    ...entry,
    amount: Math.max(1, entry.amount + tierBoost * (entry.id === "scout" ? 1 : 0))
  }));
}

export const ROUNDS = Array.from({ length: GAME.maxWave }, (_, index) => {
  const wave = index + 1;
  return {
    wave,
    profile: waveProfile(wave),
    income: Math.floor(GAME.roundIncomeBase + wave * 9 + Math.pow(wave, 1.18)),
    bonus: wave % 10 === 0 ? 90 + wave * 7 : 0,
    boss: wave % 25 === 0 || wave === 150,
    bossMultiplier: 1 + Math.max(0, wave - 25) * 0.035
  };
});

export function getTower(id) {
  return TOWERS.find((tower) => tower.id === id);
}

export function getEnemy(id) {
  return ENEMIES.find((enemy) => enemy.id === id);
}

export function getMap(id) {
  return MAPS.find((map) => map.id === id);
}

export function getDifficulty(id) {
  return DIFFICULTIES.find((mode) => mode.id === id) ?? DIFFICULTIES[1];
}

export function getChallenge(id) {
  return CHALLENGES.find((challenge) => challenge.id === id) ?? CHALLENGES[0];
}
