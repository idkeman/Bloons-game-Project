export const EFFECT_TYPES = {
  SLOW: "slow",
  STUN: "stun",
  BURN: "burn",
  CORROSION: "corrosion",
  MARK: "mark",
  REVEAL: "reveal"
};

export class StatusController {
  constructor() {
    this.effects = new Map();
  }

  apply(type, {duration = 0, power = 0, stacks = 1, maxStacks = 1} = {}) {
    const current = this.effects.get(type) || {
      duration: 0,
      power: 0,
      stacks: 0,
      maxStacks
    };

    current.duration = Math.max(current.duration, duration);
    current.power = Math.max(current.power, power);
    current.stacks = Math.min(
      maxStacks,
      current.stacks + stacks
    );
    current.maxStacks = maxStacks;

    this.effects.set(type, current);
  }

  has(type) {
    return (this.effects.get(type)?.duration || 0) > 0;
  }

  get(type) {
    return this.effects.get(type) || null;
  }

  tick(delta) {
    for (const [type, effect] of this.effects) {
      effect.duration = Math.max(
        0,
        effect.duration - delta
      );

      if (effect.duration <= 0) {
        this.effects.delete(type);
      }
    }
  }

  clear(type) {
    this.effects.delete(type);
  }

  clearAll() {
    this.effects.clear();
  }

  serialize() {
    return Object.fromEntries(
      [...this.effects.entries()].map(
        ([type, effect]) => [type, {...effect}]
      )
    );
  }
}

export function damageOverTimeValue(status, delta) {
  let damage = 0;

  for (const type of [
    EFFECT_TYPES.BURN,
    EFFECT_TYPES.CORROSION
  ]) {
    const effect = status.get(type);

    if (effect) {
      damage += effect.power * effect.stacks * delta;
    }
  }

  return damage;
}

export function effectiveSlow(status) {
  const effect = status.get(EFFECT_TYPES.SLOW);

  if (!effect) {
    return 0;
  }

  return Math.min(
    0.90,
    effect.power * Math.max(effect.stacks, 1)
  );
}