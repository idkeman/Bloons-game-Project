const ABILITIES = {
  sharpshooter: {name:"Deadeye Volley",cooldown:18,description:"Deal a precision volley against the strongest visible targets.",type:"precision"},
  boomer: {name:"Orbiting Blade",cooldown:18,description:"Launch an orbiting blade burst around the tower.",type:"orbit"},
  cannon: {name:"Shock Barrage",cooldown:24,description:"Stun all enemies and deal heavy area damage.",type:"stun"},
  tack: {name:"Blazing Ring",cooldown:20,description:"Release an amplified radial burst.",type:"radial"},
  frost: {name:"Deep Winter",cooldown:26,description:"Freeze and heavily slow every enemy.",type:"freeze"},
  glue: {name:"Solvent Flood",cooldown:22,description:"Corrode and slow every enemy for several seconds.",type:"solvent"},
  sniper: {name:"Supply Strike",cooldown:28,description:"Call a global supply strike and grant cash.",type:"supply"},
  sub: {name:"Sonar Uplink",cooldown:24,description:"Reveal hidden enemies and fire a global torpedo volley.",type:"sonar"},
  boat: {name:"Merchant Rush",cooldown:24,description:"Receive a merchant cash package and temporarily accelerate attacks.",type:"merchant"},
  ace: {name:"Strafe Squadron",cooldown:22,description:"Perform repeated global airstrikes.",type:"airstrike"},
  wizard: {name:"Arcane Tempest",cooldown:24,description:"Deal energy damage to all enemies and apply a slow.",type:"tempest"},
  super: {name:"Solar Pulse",cooldown:30,description:"Release a massive energy pulse.",type:"solar"},
  ninja: {name:"Shadow Clone",cooldown:23,description:"Disrupt every enemy and temporarily overdrive the ninja.",type:"clone"},
  alchemist: {name:"Transmutation Surge",cooldown:26,description:"Buff nearby towers and generate a cash infusion.",type:"brew"},
  village: {name:"Command Surge",cooldown:32,description:"Temporarily improve nearby towers and reset their attack timing.",type:"command"},
  druid: {name:"Nature's Wrath",cooldown:25,description:"Root and damage the entire battlefield.",type:"wrath"},
  spike: {name:"Emergency Bed",cooldown:20,description:"Immediately create a reinforced spike field at the leading enemy.",type:"spike"},
  engineer: {name:"Overclock Array",cooldown:26,description:"Temporarily accelerate nearby towers.",type:"overclock"},
  mortar: {name:"Orbital Shelling",cooldown:30,description:"Deliver a mapwide artillery barrage.",type:"artillery"},
  laser: {name:"Spectrum Nova",cooldown:28,description:"Fire a global energy nova.",type:"spectrum"},
  gatling: {name:"Ammo Storm",cooldown:20,description:"Temporarily multiply attack output.",type:"gatling"},
  heli: {name:"Gunship Strike",cooldown:26,description:"Launch a sustained airstrike and reward cash.",type:"gunship"},
  beast: {name:"Apex Hunt",cooldown:24,description:"Improve nearby nature units and damage the strongest enemy.",type:"hunt"},
  timekeeper: {name:"Temporal Lock",cooldown:30,description:"Severely slow all enemies and extend their existing statuses.",type:"time"},
  mine: {name:"Chain Detonation",cooldown:22,description:"Detonate every mine field and create extra explosions.",type:"detonate"},
  farm: {name:"Market Surge",cooldown:30,description:"Convert the farm's stored value into a large cash burst.",type:"market"},
  beacon: {name:"Aegis Pulse",cooldown:32,description:"Restore lives and strengthen every support field.",type:"aegis"}
};

export function getTowerAbility(towerId) {
  return ABILITIES[towerId] || {
    name:"Ability",
    cooldown:20,
    description:"Temporarily empowers the tower.",
    type:"generic"
  };
}

function damageAll(game, amount, options = {}) {
  let damage = 0;

  for (const bloon of game.bloons) {
    if (!bloon.alive) {
      continue;
    }

    const result = bloon.takeDamage(
      amount,
      {
        canHitHidden: true,
        canBreakArmor: true,
        ...options
      }
    );

    if (result.damage > 0) {
      damage += result.damage;
      game.registerDamage(
        options.ownerId,
        result.damage,
        result.destroyed
      );
    }
  }

  return damage;
}

function slowAll(game, strength, duration) {
  for (const bloon of game.bloons) {
    if (bloon.alive) {
      bloon.applySlow(
        strength,
        duration
      );
    }
  }
}

function boostNearby(game, tower, {
  radius = 115,
  damage = 0,
  attackSpeed = 1,
  range = 0
} = {}) {
  let count = 0;

  for (const other of game.towers) {
    if (
      Math.hypot(
        tower.x - other.x,
        tower.y - other.y
      ) > radius
    ) {
      continue;
    }

    other.buff.damage = Math.max(
      other.buff.damage,
      damage
    );

    other.buff.range = Math.max(
      other.buff.range,
      range
    );

    other.buff.attackSpeed *=
      attackSpeed;

    count += 1;
  }

  return count;
}

export function activateTowerAbility(game, tower) {
  const ability = getTowerAbility(tower.type);

  tower.abilityCooldown.reset(
    ability.cooldown *
    (game.gameMode?.abilityCooldownMultiplier || 1)
  );

  const attack = tower.getAttackData();

  switch (ability.type) {
    case "precision":
      return damageAll(
        game,
        attack.damage * 6,
        { ownerId:tower.id, damageType:"energy" }
      );

    case "orbit":
      tower.abilityActive = 8;
      tower.abilityMultiplier = 2.5;
      return boostNearby(
        game,
        tower,
        { damage:.08, attackSpeed:.88 }
      );

    case "stun":
      slowAll(game, .10, 0.5);
      for (const bloon of game.bloons) {
        if (bloon.alive) {
          bloon.applyStun(3);
        }
      }
      return damageAll(
        game,
        attack.damage * 3,
        { ownerId:tower.id }
      );

    case "radial":
      tower.abilityActive = 7;
      tower.abilityMultiplier = 2.8;
      return damageAll(
        game,
        attack.damage * 2,
        { ownerId:tower.id, damageType:"fire" }
      );

    case "freeze":
      slowAll(game, .82, 5);
      return damageAll(
        game,
        attack.damage * 2,
        {ownerId:tower.id,damageType:"frost"}
      );

    case "solvent":
      slowAll(game, .72, 4);
      for (const bloon of game.bloons) {
        if (bloon.alive) {
          bloon.applyCorrosion(
            attack.damage * .8,
            5
          );
        }
      }
      return damageAll(
        game,
        attack.damage * 1.5,
        {ownerId:tower.id}
      );

    case "supply":
      game.addCash(
        250,
        "ability",
        tower
      );
      return damageAll(
        game,
        attack.damage * 4,
        {ownerId:tower.id}
      );

    case "sonar":
      for (const bloon of game.bloons) {
        bloon.hidden = false;
        bloon.camo = false;
      }
      return damageAll(
        game,
        attack.damage * 2.2,
        {ownerId:tower.id,damageType:"energy"}
      );

    case "merchant":
      game.addCash(
        300 + tower.pathLevels[2] * 75,
        "ability",
        tower
      );
      tower.abilityActive = 8;
      tower.abilityMultiplier = 1.8;
      return boostNearby(
        game,
        tower,
        {attackSpeed:.90}
      );

    case "airstrike":
      return damageAll(
        game,
        attack.damage * 5,
        {ownerId:tower.id,damageType:"explosive"}
      );

    case "tempest":
      slowAll(game, .55, 4.5);
      return damageAll(
        game,
        attack.damage * 3,
        {ownerId:tower.id,damageType:"energy"}
      );

    case "solar":
      slowAll(game, .30, 2);
      return damageAll(
        game,
        attack.damage * 10,
        {ownerId:tower.id,damageType:"energy"}
      );

    case "clone":
      tower.abilityActive = 10;
      tower.abilityMultiplier = 2.2;
      slowAll(game, .35, 3);
      return damageAll(
        game,
        attack.damage * 2.5,
        {ownerId:tower.id}
      );

    case "brew":
      game.addCash(
        180 + tower.pathLevels[2] * 30,
        "ability",
        tower
      );
      return boostNearby(
        game,
        tower,
        {
          radius:100,
          damage:.22,
          attackSpeed:.84,
          range:.08
        }
      );

    case "command":
      return boostNearby(
        game,
        tower,
        {
          radius:150,
          damage:.18,
          attackSpeed:.75,
          range:.12
        }
      );

    case "wrath":
      slowAll(game, .70, 4);
      return damageAll(
        game,
        attack.damage * 4,
        {ownerId:tower.id,damageType:"energy"}
      );

    case "spike":
      game.trapsystem.place(
        "spike",
        tower,
        game.bloons[0]?.progress || .95
      );
      return 1;

    case "overclock":
      boostNearby(
        game,
        tower,
        {
          radius:135,
          attackSpeed:.70,
          damage:.12
        }
      );
      tower.abilityActive = 10;
      return 1;

    case "artillery":
      return damageAll(
        game,
        attack.damage * 5.5,
        {ownerId:tower.id,damageType:"explosive"}
      );

    case "spectrum":
      return damageAll(
        game,
        attack.damage * 7,
        {ownerId:tower.id,damageType:"energy"}
      );

    case "gatling":
      tower.abilityActive = 9;
      tower.abilityMultiplier = 3;
      return 1;

    case "gunship":
      game.addCash(
        200,
        "ability",
        tower
      );
      return damageAll(
        game,
        attack.damage * 5,
        {ownerId:tower.id,damageType:"explosive"}
      );

    case "hunt":
      boostNearby(
        game,
        tower,
        {
          radius:130,
          damage:.15,
          attackSpeed:.88
        }
      );
      return damageAll(
        game,
        attack.damage * 4,
        {ownerId:tower.id}
      );

    case "time":
      slowAll(game, .88, 7);
      for (const bloon of game.bloons) {
        for (const status of Object.keys(bloon.status)) {
          bloon.status[status] *= 1.75;
        }
      }
      return 1;

    case "detonate":
      let detonated = 0;

      for (const trap of game.traps) {
        if (!trap.alive) {
          continue;
        }

        trap.alive = false;
        detonated += damageAll(
          game,
          trap.damage * 1.5,
          {ownerId:tower.id,damageType:"explosive"}
        );
      }

      game.traps =
        game.traps.filter(
          (trap) => trap.alive
        );

      return detonated;

    case "market":
      game.addCash(
        500 + tower.pathLevels[2] * 160,
        "ability",
        tower
      );
      return 1;

    case "aegis":
      game.lives = Math.min(
        game.map?.lives *
          (game.difficulty?.lives || 1) *
          1.5,
        game.lives + 5
      );

      for (const other of game.towers) {
        other.buff.detectHidden = true;
        other.buff.range = Math.max(
          other.buff.range,
          .10
        );
      }

      return 1;

    default:
      tower.abilityActive = 8;
      tower.abilityMultiplier = 2;
      return 1;
  }
}