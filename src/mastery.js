/*
 * Bastion Mastery
 *
 * A persistent, opt-in progression tree. It is intentionally independent
 * from individual game saves so starting a new run does not erase mastery.
 */

const STORAGE_KEY = 'balloon-bastion-mastery-v1';

export const MASTERY = {
  economy: [
    { id: 'seed-money', name: 'Seed Fund', description: '+75 starting cash.', cost: 1, effect: { startingCash: 75 } },
    { id: 'market', name: 'Better Markets', description: '+3% round income.', cost: 2, effect: { income: .03 } },
    { id: 'scavenger', name: 'Scavenger', description: '+2% pop cash.', cost: 2, requires: ['seed-money'], effect: { popCash: .02 } },
    { id: 'compound', name: 'Compound Interest', description: 'Economy towers gain +4% income.', cost: 3, requires: ['market'], effect: { farmIncome: .04 } },
    { id: 'merchant', name: 'Merchant Routes', description: '-2% tower upgrade prices.', cost: 3, requires: ['market'], effect: { upgradeCost: .02 } },
    { id: 'capital', name: 'Capital Reserve', description: '+1 lives at round-start healing thresholds.', cost: 4, requires: ['compound'], effect: { lifeBuffer: 1 } }
  ],
  combat: [
    { id: 'steady-hand', name: 'Steady Hand', description: '+2% tower projectile speed.', cost: 1, effect: { projectileSpeed: .02 } },
    { id: 'barbs', name: 'Barbed Tips', description: '+1 global pierce.', cost: 2, requires: ['steady-hand'], effect: { pierce: 1 } },
    { id: 'cracking-shot', name: 'Cracking Shot', description: '+3% damage to armored enemies.', cost: 2, requires: ['steady-hand'], effect: { armorDamage: .03 } },
    { id: 'deep-range', name: 'Deep Range', description: '+3% tower range.', cost: 3, requires: ['barbs'], effect: { range: .03 } },
    { id: 'critical-focus', name: 'Critical Focus', description: '+1.5 percentage points to eligible crit chance.', cost: 3, requires: ['cracking-shot'], effect: { crit: .015 } },
    { id: 'siege-training', name: 'Siege Training', description: '+5% boss damage.', cost: 4, requires: ['deep-range', 'cracking-shot'], effect: { bossDamage: .05 } }
  ],
  heroes: [
    { id: 'hero-school', name: 'Hero School', description: '+4% hero XP.', cost: 1, effect: { heroXp: .04 } },
    { id: 'quick-study', name: 'Quick Study', description: 'Heroes start with a small XP reserve.', cost: 2, requires: ['hero-school'], effect: { heroStartingXp: 35 } },
    { id: 'ability-drills', name: 'Ability Drills', description: '-3% hero ability cooldowns.', cost: 2, requires: ['hero-school'], effect: { heroCooldown: .03 } },
    { id: 'veteran', name: 'Veteran Core', description: '+4% hero damage after level 5.', cost: 3, requires: ['quick-study'], effect: { veteranDamage: .04 } },
    { id: 'field-leader', name: 'Field Leader', description: '+4 hero range.', cost: 3, requires: ['ability-drills'], effect: { heroRange: 4 } },
    { id: 'legend', name: 'Legend Training', description: '+8% hero XP and +3% ability power.', cost: 4, requires: ['veteran', 'field-leader'], effect: { heroXp: .08, abilityPower: .03 } }
  ],
  utility: [
    { id: 'builder', name: 'Builder', description: '+1 placement overlap tolerance.', cost: 1, effect: { placement: 1 } },
    { id: 'collector', name: 'Collector', description: '+10% end-of-round collection text rewards.', cost: 2, requires: ['builder'], effect: { roundCash: .10 } },
    { id: 'engineer', name: 'Engineer Mindset', description: 'Support buffs last 5% longer.', cost: 2, requires: ['builder'], effect: { buffDuration: .05 } },
    { id: 'cartographer', name: 'Cartographer', description: 'Slightly expands map build zones.', cost: 3, requires: ['collector'], effect: { buildZone: .03 } },
    { id: 'timekeeper', name: 'Timekeeper', description: 'Fast-forward speed becomes 3.25x.', cost: 3, requires: ['engineer'], effect: { fastSpeed: 3.25 } },
    { id: 'emergency', name: 'Emergency Protocol', description: 'First leak per game has 20% reduced life loss.', cost: 4, requires: ['collector', 'timekeeper'], effect: { emergency: .20 } }
  ]
};

const nodes = Object.values(MASTERY).flat();

export class MasteryProfile {
  constructor(raw = null) {
    this.points = 0;
    this.unlocked = new Set();
    this.totalEarned = 0;

    if (raw) {
      this.points = Number.isFinite(raw.points) ? raw.points : 0;
      this.totalEarned = Number.isFinite(raw.totalEarned) ? raw.totalEarned : this.points;
      this.unlocked = new Set(Array.isArray(raw.unlocked) ? raw.unlocked : []);
    }

    this.repair();
  }

  repair() {
    this.unlocked = new Set(
      [...this.unlocked].filter(id => {
        const node = nodes.find(n => n.id === id);
        return node && (node.requires || []).every(req => this.unlocked.has(req));
      })
    );
  }

  canUnlock(id) {
    const node = nodes.find(n => n.id === id);
    if (!node || this.unlocked.has(id)) return false;
    return (node.requires || []).every(req => this.unlocked.has(req)) && this.points >= node.cost;
  }

  unlock(id) {
    if (!this.canUnlock(id)) return false;
    const node = nodes.find(n => n.id === id);
    this.points -= node.cost;
    this.unlocked.add(id);
    this.save();
    return true;
  }

  grantPoints(amount) {
    const value = Math.max(0, Math.floor(amount));
    this.points += value;
    this.totalEarned += value;
    this.save();
  }

  has(id) {
    return this.unlocked.has(id);
  }

  getEffects() {
    const effects = {
      startingCash: 0,
      income: 0,
      popCash: 0,
      farmIncome: 0,
      upgradeCost: 0,
      lifeBuffer: 0,
      projectileSpeed: 0,
      pierce: 0,
      armorDamage: 0,
      range: 0,
      crit: 0,
      bossDamage: 0,
      heroXp: 0,
      heroStartingXp: 0,
      heroCooldown: 0,
      veteranDamage: 0,
      heroRange: 0,
      abilityPower: 0,
      placement: 0,
      roundCash: 0,
      buffDuration: 0,
      buildZone: 0,
      fastSpeed: 0,
      emergency: 0
    };

    for (const node of nodes) {
      if (!this.unlocked.has(node.id)) continue;
      for (const [key, value] of Object.entries(node.effect || {})) {
        effects[key] = (effects[key] || 0) + value;
      }
    }
    return effects;
  }

  serialize() {
    return {
      version: 1,
      points: this.points,
      totalEarned: this.totalEarned,
      unlocked: [...this.unlocked]
    };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.serialize()));
    } catch (error) {
      console.warn('Mastery save failed', error);
    }
  }

  static load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return new MasteryProfile(raw ? JSON.parse(raw) : null);
    } catch (error) {
      return new MasteryProfile();
    }
  }

  static clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
}
