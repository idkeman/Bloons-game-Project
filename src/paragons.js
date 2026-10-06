const baseParagon = {
  minimumCash: 25000,
  minimumSacrifices: 3,
  maximumDegree: 100,
  tier5Limit: 3
};

const definitions = [
  ["sharpshooter","Astral Archer","#ffd166",1.45,2.2,90,["Piercing star shots","Global first/strong targeting","Periodic meteor volley"]],
  ["boomer","Infinite Orbit","#ff9e62",1.70,2.0,80,["Returning orbit blades","Ricochet chains","Orbit storm ability"]],
  ["cannon","Worldbreaker Cannon","#ff7c5c",2.25,1.85,110,["Massive shells","Armor rupture","Global artillery strike"]],
  ["tack","Solar Bloom","#ffbe55",1.55,1.9,100,["Full-circle projectiles","Burning ring","Solar detonation"]],
  ["frost","Absolute Winter","#b6efff",1.35,2.1,95,["Global freeze field","Permanent reveal","Ice shard storm"]],
  ["glue","Timebound Resin","#c9a5ff",1.40,2.0,95,["Extreme slow","Corrosion","Temporal trap field"]],
  ["sniper","Worldline Marksman","#d4d8df",2.45,1.55,130,["Near-instant global shots","Critical volleys","Supply command"]],
  ["sub","Abyssal Fleet","#4ac6e8",1.75,1.9,100,["Global torpedoes","Permanent sonar","Fleet deployment"]],
  ["boat","Ocean Emperor","#65b6ef",1.85,1.85,110,["Carrier squadrons","Merchant empire","Broadside barrage"]],
  ["ace","Sky Dominion","#9dd3ff",1.65,1.75,120,["Multi-direction fire","Strike runs","Air superiority"]],
  ["wizard","Archmage Eternal","#b38aff",1.95,1.80,100,["Elemental fusion","Summon army","Arcane catastrophe"]],
  ["super","Solar Avatar","#ffe58a",2.40,1.40,150,["Continuous energy beam","Orbital halo","Solar pulse"]],
  ["ninja","Shadow Sovereign","#8fd7d1",1.75,1.75,120,["Mass homing","Global sabotage","Clone storm"]],
  ["alchemist","Transmuter Prime","#ffe08c",1.50,1.90,100,["Permanent brew aura","Area transmutation","Universal solvent"]],
  ["village","Command Nexus","#73e2a4",0.85,0.90,180,["Massive support aura","Economy command","Universal training"]],
  ["druid","Nature Incarnate","#78e08f",1.90,1.80,110,["Root storm","Nature regeneration","Global wrath"]],
  ["spike","Endless Foundry","#d5dee6",1.60,1.60,200,["Infinite spikes","Adaptive trap types","Factory overdrive"]],
  ["engineer","Quantum Engineer","#ffca7a",1.40,1.75,130,["Drone fleet","Overclock matrix","Quantum sentry array"]],
  ["mortar","Orbital Artillery","#f08e7e",2.30,1.50,160,["Mapwide shells","Persistent devastation","Orbital strike"]],
  ["laser","Prismatic Singularity","#92e9ff",2.55,1.20,160,["Rainbow beam","Beam refraction","Spectrum nova"]],
  ["gatling","Infinite Barrage","#e2a4ff",1.65,1.10,150,["Extreme firing rate","Quad crossfire","Ammo storm"]],
  ["heli","Aerial Overlord","#86d7ff",1.90,1.35,145,["Permanent gunship wing","Support drones","Airstrike grid"]],
  ["beast","Primal Monarch","#95df8c",1.70,1.55,120,["Predator pack","Roar debuff","Alpha hunt"]],
  ["timekeeper","Eternal Clock","#d5baff",1.45,1.95,120,["Global time dilation","Stasis","Future sight"]],
  ["mine","Volcanic Array","#ff9860",2.20,1.70,180,["Infinite minefield","Chain detonation","Eruption ability"]],
  ["farm","Golden Biosphere","#ffe16e",0.20,0.25,250,["Massive passive income","Compound growth","Market surge"]],
  ["beacon","Aegis Worldcore","#76e8c1",0.80,0.90,200,["Global buffs","Shield aura","Command pulse"]]
];

export const PARAGONS = Object.fromEntries(
  definitions.map(
    ([towerId,name,color,damageMultiplier,rateMultiplier,pierceBonus,features]) => [
      towerId,
      {
        ...baseParagon,
        towerId,
        name,
        color,
        damageMultiplier,
        rateMultiplier,
        pierceBonus,
        features
      }
    ]
  )
);

export function calculateDegree({
  cashSpent = 0,
  sacrificeValue = 0,
  extraCash = 0,
  paragonData
}) {
  if (!paragonData) {
    return 1;
  }

  const normalized =
    cashSpent +
    sacrificeValue +
    extraCash;

  return Math.max(
    1,
    Math.min(
      paragonData.maximumDegree,
      Math.floor(
        Math.sqrt(
          Math.max(
            1,
            normalized
          ) / 1800
        )
      ) + 1
    )
  );
}

export function getParagonData(towerId) {
  return PARAGONS[towerId] || null;
}

export function canCreateParagon(towers, towerId) {
  const candidates = towers.filter(
    (tower) =>
      tower.type === towerId &&
      !tower.ascended &&
      tower.pathLevels.includes(5)
  );

  return candidates.length >= 3;
}