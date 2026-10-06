/*
 * Deterministic pseudo-random generator.
 *
 * Gameplay randomness must be reproducible for:
 * - regression tests;
 * - balance simulations;
 * - bug reports;
 * - replay verification;
 * - seeded challenge modes.
 *
 * Visual particle randomness can remain non-deterministic because it does not
 * alter simulation state.
 */

export class SeededRandom {
  constructor(seed = Date.now()) {
    this.initialSeed = normalizeSeed(seed);
    this.state = this.initialSeed;
  }

  reset(seed = this.initialSeed) {
    this.initialSeed = normalizeSeed(seed);
    this.state = this.initialSeed;
  }

  next() {
    let x = this.state | 0;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    this.state = x | 0;
    return ((this.state >>> 0) + 1) / 4294967296;
  }

  int(min, max) {
    if (max < min) [min, max] = [max, min];
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  bool(probability = 0.5) {
    return this.next() < probability;
  }

  pick(items) {
    if (!items.length) return undefined;
    return items[this.int(0, items.length - 1)];
  }

  shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = this.int(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  getState() {
    return {
      initialSeed: this.initialSeed,
      state: this.state
    };
  }

  setState(snapshot) {
    if (!snapshot || !Number.isInteger(snapshot.state)) return false;
    this.initialSeed = normalizeSeed(snapshot.initialSeed);
    this.state = snapshot.state | 0;
    return true;
  }
}

export function normalizeSeed(seed) {
  let numeric = Number(seed);
  if (!Number.isFinite(numeric)) numeric = 1;
  numeric = Math.floor(Math.abs(numeric)) >>> 0;
  return numeric === 0 ? 1 : numeric;
}

export function hashSeed(...parts) {
  let hash = 2166136261;
  for (const part of parts) {
    const text = String(part);
    for (let i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
  }
  return hash >>> 0 || 1;
}
