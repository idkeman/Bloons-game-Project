/*
 * Balloon Bastion — explicit tower behavior registry.
 * Every combat tower has a behavior function so upgrades alter mechanics,
 * not merely a shared damage number.
 */

import { Projectile, Vec2 } from './engine.js';

const TAU = Math.PI * 2;

const p = (tower, index) => tower.levels[index] || 0;

function projectile(tower, target, options = {}) {
  const angle = options.angle ?? Math.atan2(target.y - tower.y, target.x - tower.x);
  const speed = options.speed ?? tower.effectiveSpeed;
  const vector = Vec2.fromAngle(angle, speed);

  tower.game.projectiles.push(new Projectile(tower.game, {
    x: tower.x,
    y: tower.y,
    vx: vector.x,
    vy: vector.y,
    speed,
    radius: options.radius ?? tower.def.projectileRadius ?? 5,
    damage: Math.max(1, Math.round(options.damage ?? tower.effectiveDamage)),
    pierce: Math.max(1, Math.round(options.pierce ?? tower.effectivePierce)),
    color: options.color ?? tower.def.color,
    kind: options.kind ?? 'dart',
    homing: !!options.homing,
    turnRate: options.turnRate ?? 8,
    burst: options.burst ?? 0,
    chain: options.chain ?? 0,
    life: options.life ?? 3,
    armorPierce: !!options.armorPierce,
    bossBonus: options.bossBonus ?? tower.bossBonus ?? 0,
    moabBonus: options.moabBonus ?? tower.moabBonus ?? 0,
    crit: options.crit ?? tower.crit ?? 0,
    owner: tower
  }));
}

function fan(tower, target, count, spread, options = {}) {
  const center = Math.atan2(target.y - tower.y, target.x - tower.x);
  for (let i = 0; i < count; i += 1) {
    const offset = count === 1 ? 0 : (i / (count - 1) - .5) * spread;
    projectile(tower, target, { ...options, angle: center + offset });
  }
}

function radial(tower, count, options = {}) {
  for (let i = 0; i < count; i += 1) {
    const angle = TAU * i / count;
    projectile(tower, {
      x: tower.x + Math.cos(angle),
      y: tower.y + Math.sin(angle)
    }, { ...options, angle });
  }
}

function nearby(tower, radius, predicate = () => true) {
  return tower.game.bloons.filter(b => {
    if (b.dead) return false;
    if (!predicate(b)) return false;
    return Math.hypot(b.x - tower.x, b.y - tower.y) <= radius;
  });
}

function chain(tower, origin, count, damage) {
  const seen = new Set([origin.id]);
  let current = origin;

  for (let i = 0; i < count; i += 1) {
    const next = tower.game.bloons
      .filter(b => !b.dead && !seen.has(b.id) && tower.canSee(b))
      .sort((a, b) => {
        const da = Math.hypot(a.x - current.x, a.y - current.y);
        const db = Math.hypot(b.x - current.x, b.y - current.y);
        return da - db;
      })[0];

    if (!next) break;
    seen.add(next.id);
    next.takeDamage(damage, tower);
    tower.game.spawnLine(current.x, current.y, next.x, next.y, tower.def.color);
    current = next;
  }
}

function explode(tower, target, radius, damage) {
  tower.game.areaDamage(target.x, target.y, radius, damage, tower);
  tower.game.spawnRing(target.x, target.y, radius, tower.def.color);
}

function freeze(target, seconds) {
  target.freeze = Math.max(target.freeze || 0, seconds);
}

function slow(target, multiplier) {
  target.slow = Math.min(target.slow || 1, multiplier);
}

function burn(target, seconds, damage) {
  target.burn = Math.max(target.burn || 0, seconds);
  target.burnDamage = Math.max(target.burnDamage || 0, damage);
}

export function fireTowerBehavior(tower, target) {
  switch (tower.def.id) {
    case 'dart': return fireDart(tower, target);
    case 'boomer': return fireBoomer(tower, target);
    case 'bomb': return fireBomb(tower, target);
    case 'sniper': return fireSniper(tower, target);
    case 'sub': return fireSub(tower, target);
    case 'ace': return fireAce(tower, target);
    case 'wizard': return fireWizard(tower, target);
    case 'druid': return fireDruid(tower, target);
    case 'alchemist': return fireAlchemist(tower, target);
    case 'glue': return fireGlue(tower, target);
    case 'tack': return fireTack(tower, target);
    case 'ice': return fireIce(tower, target);
    case 'prism': return firePrism(tower, target);
    case 'shadow': return fireShadow(tower, target);
    case 'corsair': return fireCorsair(tower, target);
    case 'rotor': return fireRotor(tower, target);
    case 'mortar': return fireMortar(tower, target);
    case 'beast': return fireBeast(tower, target);
    case 'tide': return fireTide(tower, target);
    case 'outlaw': return fireOutlaw(tower, target);
    default: return false;
  }
}

function fireDart(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 1 + Math.floor((middle + bottom) / 2), middle >= 3 ? .22 : .08, {
    damage: t.effectiveDamage + top * 2,
    pierce: t.effectivePierce + top * 2 + bottom * 2,
    speed: 620 + middle * 60,
    homing: bottom >= 2,
    turnRate: 12 + bottom * 2,
    burst: top >= 3 ? 22 + top * 10 : 0,
    armorPierce: bottom >= 3,
    crit: middle >= 2 ? .08 + middle * .04 : 0,
    bossBonus: top >= 5 ? 55 : 0
  });
  return true;
}

function fireBoomer(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 1 + middle, middle >= 3 ? 1.0 : .55, {
    damage: t.effectiveDamage + top * 3,
    pierce: t.effectivePierce + 5 + bottom * 3,
    speed: 430 + middle * 55,
    kind: 'disc',
    burst: top >= 4 ? 20 + top * 8 : 0
  });
  if (bottom >= 1) slow(target, bottom >= 4 ? .38 : .66);
  if (bottom >= 3) target.stun = Math.max(target.stun || 0, .25);
  if (top >= 5) chain(t, target, 6, 12 + top * 4);
  return true;
}

function fireBomb(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  projectile(t, target, {
    damage: t.effectiveDamage + 8 + top * 5,
    pierce: t.effectivePierce + 2 + bottom * 3,
    speed: 350 + middle * 45,
    radius: 8,
    kind: 'rocket',
    burst: 45 + top * 18,
    armorPierce: top >= 2,
    moabBonus: 25 + bottom * 15
  });
  if (bottom >= 3) target.stun = Math.max(target.stun || 0, .45);
  return true;
}

function fireSniper(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  projectile(t, target, {
    damage: t.effectiveDamage + 14 + top * 9,
    pierce: t.effectivePierce + 16,
    speed: 1500,
    radius: 3,
    armorPierce: true,
    moabBonus: 40 + bottom * 18,
    bossBonus: 50 + top * 12,
    crit: .16 + middle * .09
  });
  if (bottom >= 2) slow(target, .58);
  if (middle >= 3 && Math.random() < .25) explode(t, target, 35, 12 + middle * 4);
  return true;
}

function fireSub(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  projectile(t, target, {
    damage: t.effectiveDamage + 2 + top * 3,
    pierce: t.effectivePierce + middle * 4,
    speed: 650 + middle * 55,
    homing: bottom >= 2,
    turnRate: 12,
    chain: middle >= 3 ? 2 + middle : 0,
    burst: top >= 4 ? 28 : 0
  });
  if (bottom >= 3) {
    nearby(t, 150).forEach(b => slow(b, .72));
  }
  if (top >= 5) t.game.cash += 2;
  return true;
}

function fireAce(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  radial(t, 5 + top + middle, {
    damage: t.effectiveDamage + top * 2,
    pierce: t.effectivePierce + middle * 2 + bottom * 2,
    speed: 720 + middle * 65,
    homing: bottom >= 2,
    burst: middle >= 3 ? 24 : 0
  });
  if (middle >= 4) {
    projectile(t, target, {
      damage: t.effectiveDamage * 4 + 25,
      pierce: 30 + bottom * 6,
      speed: 430,
      radius: 8,
      kind: 'rocket',
      homing: true,
      turnRate: 10,
      burst: 55
    });
  }
  return true;
}

function fireWizard(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 2 + top + Math.floor(middle / 2), .65, {
    damage: t.effectiveDamage + 6 + top * 4,
    pierce: t.effectivePierce + 7 + middle * 4,
    speed: 520 + middle * 55,
    homing: true,
    turnRate: 14,
    burst: top >= 3 ? 24 : 0
  });
  if (middle >= 3) freeze(target, .45 + middle * .1);
  if (bottom >= 2) burn(target, 2.5, 5 + bottom * 3);
  if (bottom >= 5) explode(t, target, 100, 24 + bottom * 8);
  return true;
}

function fireDruid(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 2 + top + Math.floor(middle / 2), .75, {
    damage: t.effectiveDamage + bottom * 4,
    pierce: t.effectivePierce + 4 + top * 3,
    speed: 440 + middle * 45,
    homing: middle >= 2
  });
  slow(target, Math.max(.4, .88 - bottom * .1));
  if (middle >= 4) chain(t, target, 2 + middle, 7 + middle * 2);
  if (top >= 4) t.game.cash += 1;
  return true;
}

function fireAlchemist(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  target.chemistry = {
    multiplier: 1 + .08 * Math.max(1, top + bottom),
    expires: t.game.gameTime + 8
  };
  target.takeDamage(t.effectiveDamage + 9 + top * 2, t, { ignoreArmor: bottom >= 2 });
  if (middle >= 2) {
    const spill = t.game.bloons
      .filter(b => !b.dead && b !== target && t.canSee(b))
      .sort((a, b) => Math.hypot(a.x - target.x, a.y - target.y) - Math.hypot(b.x - target.x, b.y - target.y))
      .slice(0, 2 + middle);
    spill.forEach(b => b.takeDamage(3 + middle, t));
  }
  if (bottom >= 4) burn(target, 3, 8 + bottom * 2);
  return true;
}

function fireGlue(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  target.gluedUntil = t.game.gameTime + 2 + middle * .65;
  slow(target, Math.max(.18, .75 - .1 * (middle + bottom)));
  projectile(t, target, {
    damage: t.effectiveDamage + top * 2,
    pierce: t.effectivePierce + bottom * 4,
    speed: 500,
    burst: top >= 3 ? 15 : 0
  });
  if (bottom >= 3) target.stun = Math.max(target.stun || 0, .2);
  if (top >= 4) burn(target, 2, 5);
  return true;
}

function fireTack(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  const count = 8 + top * 2 + middle + bottom;
  const spread = bottom >= 3 ? TAU : TAU * .72;
  const center = Math.atan2(target.y - t.y, target.x - t.x);
  for (let i = 0; i < count; i += 1) {
    projectile(t, target, {
      angle: center + (i / count - .5) * spread,
      damage: t.effectiveDamage + top * 2,
      pierce: t.effectivePierce + 2 + middle * 2,
      speed: 470 + middle * 28,
      burst: middle >= 3 ? 16 : 0,
      crit: bottom >= 4 ? .12 : 0
    });
  }
  return true;
}

function fireIce(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  freeze(target, .55 + top * .15);
  slow(target, Math.max(.22, .62 - bottom * .08));
  target.takeDamage(t.effectiveDamage + 5 + top * 4, t, {
    ignoreArmor: middle >= 3
  });
  explode(t, target, 38 + bottom * 18, Math.max(1, t.effectiveDamage * .45));
  if (bottom >= 4) nearby(t, t.getRange()).forEach(b => slow(b, .46));
  return true;
}

function firePrism(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 5 + top + middle, 1.25, {
    damage: t.effectiveDamage + 12 + top * 5,
    pierce: t.effectivePierce + 10 + bottom * 5,
    speed: 850,
    homing: true,
    turnRate: 16,
    armorPierce: true,
    crit: .12 + middle * .04,
    chain: middle >= 3 ? 4 + middle : 0,
    burst: bottom >= 2 ? 42 : 0
  });
  if (top >= 5) {
    t.game.areaDamage(target.x, target.y, 150, 35 + top * 8, t);
  }
  return true;
}

function fireShadow(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 3 + top + Math.floor(middle / 2), .8, {
    damage: t.effectiveDamage + 4 + top * 2,
    pierce: t.effectivePierce + 7 + bottom * 4,
    speed: 1000 + middle * 80,
    homing: true,
    turnRate: 18,
    crit: .16 + middle * .04,
    chain: bottom >= 3 ? 3 + bottom : 0
  });
  target.tags.add('marked');
  if (top >= 3) target.markedDamageMultiplier = 1.3;
  if (bottom >= 3) slow(target, .5);
  return true;
}

function fireCorsair(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 2 + top, .5, {
    damage: t.effectiveDamage + 7 + top * 3,
    pierce: t.effectivePierce + bottom * 4,
    speed: 690,
    kind: 'disc',
    burst: middle >= 3 ? 28 : 0,
    moabBonus: 30 + bottom * 14
  });
  if (middle >= 2 && Math.random() < .2 + middle * .05) t.game.cash += 8 + middle * 3;
  return true;
}

function fireRotor(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  radial(t, 7 + top + bottom, {
    damage: t.effectiveDamage + top * 3,
    pierce: t.effectivePierce + middle * 2,
    speed: 650 + middle * 45,
    homing: bottom >= 2,
    burst: middle >= 3 ? 22 : 0
  });
  if (bottom >= 4) {
    projectile(t, target, {
      damage: t.effectiveDamage * 4 + 24,
      pierce: 35,
      speed: 450,
      radius: 8,
      kind: 'rocket',
      homing: true,
      turnRate: 12,
      moabBonus: 35
    });
  }
  return true;
}

function fireMortar(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  explode(t, target, 65 + top * 14 + bottom * 18, t.effectiveDamage + 16 + top * 7);
  if (middle >= 2) target.stun = Math.max(target.stun || 0, .4 + middle * .1);
  if (bottom >= 3) nearby(t, 180).forEach(b => burn(b, 2.5, 8 + bottom * 3));
  return true;
}

function fireBeast(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  fan(t, target, 1 + top, .42, {
    damage: t.effectiveDamage + 9 + top * 3,
    pierce: t.effectivePierce + 9 + middle * 4,
    speed: 560,
    homing: true,
    turnRate: 12,
    burst: middle >= 3 ? 25 : 0,
    moabBonus: bottom >= 3 ? 25 + bottom * 8 : 0
  });
  t.beasts = Math.max(t.beasts || 0, 1 + top + bottom);
  return true;
}

function fireTide(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  const radius = 80 + top * 14 + bottom * 17;
  nearby(t, radius).forEach(b => {
    b.takeDamage(t.effectiveDamage + 3 + top * 2, t);
    slow(b, Math.max(.25, .8 - middle * .1));
    if (bottom >= 4) b.stun = Math.max(b.stun || 0, .3);
  });
  projectile(t, target, {
    damage: t.effectiveDamage + 10,
    pierce: t.effectivePierce + middle * 5,
    speed: 580,
    homing: true,
    turnRate: 13,
    chain: middle >= 3 ? 5 : 0,
    burst: top >= 3 ? 26 : 0,
    color: '#70e8ff'
  });
  return true;
}

function fireOutlaw(t, target) {
  const top = p(t, 0);
  const middle = p(t, 1);
  const bottom = p(t, 2);
  const cash = 2 + middle * 2 + (Math.random() < .15 + bottom * .04 ? 10 : 0);
  t.game.cash += cash;
  fan(t, target, 2 + middle, .34, {
    damage: t.effectiveDamage + 6 + top * 3,
    pierce: t.effectivePierce + bottom * 3,
    speed: 980,
    crit: .08 + middle * .03
  });
  if (top >= 3) {
    const weak = [...t.game.bloons]
      .filter(b => !b.dead)
      .sort((a, b) => a.hp - b.hp)[0];
    if (weak) weak.takeDamage(35 + top * 10, t, { ignoreArmor: true });
  }
  return true;
}

export function applyTowerBehaviorUpgrades(tower) {
  const levels = tower.levels;
  tower.isSupport = !!tower.def.isSupport;
  tower.isSpike = !!tower.def.isSpike;

  if (tower.def.id === 'dart') {
    tower.crit = levels[1] >= 2 ? .12 + levels[1] * .03 : 0;
    tower.armorPierce = levels[2] >= 3;
    tower.bossBonus = levels[0] >= 5 ? 70 : 0;
  }

  if (tower.def.id === 'boomer') {
    tower.slow = levels[2] >= 2 ? .65 : 1;
    tower.chain = levels[0] >= 5 ? 5 : 0;
  }

  if (tower.def.id === 'bomb') {
    tower.armorPierce = levels[0] >= 2;
    tower.stun = levels[2] >= 3 ? .5 : 0;
  }

  if (tower.def.id === 'sniper') {
    tower.crit = levels[1] >= 2 ? .20 + levels[1] * .05 : .05;
    tower.bossBonus = 45 + levels[0] * 12;
    tower.armorPierce = true;
  }

  if (tower.def.id === 'sub') {
    tower.globalStealth = levels[2] >= 3 ? 1 : 0;
    tower.chain = levels[1] >= 3 ? 3 + levels[1] : 0;
  }

  if (tower.def.id === 'ace') {
    tower.rocketCount = levels[1];
    tower.homing = levels[2] >= 2;
  }

  if (tower.def.id === 'wizard') {
    tower.freeze = levels[1] >= 3 ? .65 : 0;
    tower.burnLevel = levels[2] >= 2 ? 8 + levels[2] * 2 : 0;
    tower.homing = true;
  }

  if (tower.def.id === 'druid') {
    tower.slow = levels[2] >= 2 ? .7 : 1;
    tower.chain = levels[1] >= 4 ? 3 + levels[1] : 0;
    tower.burnLevel = levels[0] >= 3 ? 6 + levels[0] * 2 : 0;
  }

  if (tower.def.id === 'alchemist') {
    tower.globalDamage = levels[0] >= 3 ? 1 + levels[0] : 0;
    tower.buffSpeed = levels[1] >= 2 ? .08 + levels[1] * .025 : 0;
    tower.armorPierce = levels[2] >= 4;
  }

  if (tower.def.id === 'village') {
    tower.isSupport = true;
    tower.globalSpeed = levels[1] >= 1 ? .03 + levels[1] * .025 : 0;
    tower.globalDamage = levels[1] >= 3 ? 2 + levels[1] : 0;
    tower.globalPierce = levels[0] >= 2 ? 2 + levels[0] : 0;
    tower.globalStealth = levels[2] >= 2 ? 1 : 0;
  }

  if (tower.def.id === 'farm' || tower.def.id === 'banana') {
    tower.isSupport = true;
    tower.income = 30 + levels[0] * 18 + levels[1] * 22 + levels[2] * 15;
    tower.incomeRate = Math.max(5, 30 - levels[1] * 3 - levels[2] * 2);
  }

  if (tower.def.id === 'spike') {
    tower.isSpike = true;
    tower.spikeDamage = 10 + levels[0] * 7 + levels[1] * 3;
    tower.spikePierce = 20 + levels[2] * 8 + levels[1] * 4;
  }

  if (tower.def.id === 'glue') {
    tower.slow = levels[1] >= 2 ? .55 : .75;
    tower.burnLevel = levels[0] >= 4 ? 5 : 0;
    tower.stun = levels[2] >= 3 ? .25 : 0;
  }

  if (tower.def.id === 'tack') {
    tower.crit = levels[2] >= 4 ? .12 : 0;
    tower.burstLevel = levels[1] >= 3 ? 20 : 0;
  }

  if (tower.def.id === 'ice') {
    tower.freeze = .5 + levels[0] * .12;
    tower.slow = Math.max(.25, .7 - levels[2] * .08);
    tower.armorPierce = levels[1] >= 3;
  }

  if (tower.def.id === 'prism') {
    tower.armorPierce = true;
    tower.crit = .1 + levels[1] * .04;
    tower.chain = levels[1] >= 3 ? 4 + levels[1] : 0;
  }

  if (tower.def.id === 'shadow') {
    tower.homing = true;
    tower.crit = .15 + levels[1] * .03;
    tower.globalStealth = levels[2] >= 3 ? 1 : 0;
  }

  if (tower.def.id === 'corsair') {
    tower.moabBonus = 28 + levels[0] * 12;
    tower.cashMultiplier = 1 + levels[1] * .06;
  }

  if (tower.def.id === 'rotor') {
    tower.homing = levels[2] >= 2;
  }

  if (tower.def.id === 'mortar') {
    tower.stun = levels[1] >= 2 ? .45 : 0;
    tower.burnLevel = levels[2] >= 3 ? 10 : 0;
  }

  if (tower.def.id === 'beast') {
    tower.moabBonus = levels[2] >= 3 ? 40 : 0;
    tower.beasts = 1 + levels[0] + levels[2];
  }

  if (tower.def.id === 'tide') {
    tower.slow = Math.max(.3, .75 - levels[1] * .08);
    tower.chain = levels[1] >= 3 ? 5 : 0;
  }

  if (tower.def.id === 'outlaw') {
    tower.crit = .08 + levels[1] * .03;
    tower.cashMultiplier = 1 + levels[2] * .05;
  }

  return tower;
}
