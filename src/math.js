export const EPSILON = 1e-8;

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function distance(ax, ay, bx, by) {
  return Math.hypot(bx - ax, by - ay);
}

export function angleTo(ax, ay, bx, by) {
  return Math.atan2(by - ay, bx - ax);
}

export function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

export class IdFactory {
  constructor(prefix = "id") {
    this.prefix = prefix;
    this.value = 0;
  }

  next() {
    this.value += 1;
    return this.prefix + "-" + this.value.toString(36);
  }
}

export class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(type, listener) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type).add(listener);
    return () => this.off(type, listener);
  }

  off(type, listener) {
    this.listeners.get(type)?.delete(listener);
  }

  emit(type, payload) {
    for (const listener of this.listeners.get(type) || []) {
      listener(payload);
    }
  }
}

export class Cooldown {
  constructor(seconds = 0) {
    this.duration = seconds;
    this.remaining = seconds;
  }

  reset(seconds = this.duration) {
    this.duration = seconds;
    this.remaining = seconds;
  }

  tick(delta) {
    this.remaining = Math.max(0, this.remaining - delta);
  }

  ready() {
    return this.remaining <= 0;
  }
}
