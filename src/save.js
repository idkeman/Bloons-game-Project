import { deepClone } from "./math.js";

const DEFAULT_PROFILE = {
  version: 1,
  monkeyMoney: 5000,
  level: 1,
  unlockedTowers: [],
  unlockedHeroes: [],
  achievements: [],
  lifetimePops: 0,
  lifetimeCash: 0,
  games: 0,
  wins: 0,
  settings: {
    difficulty: "normal",
    speed: 1,
    autoRounds: false
  }
};

export class SaveManager {
  constructor(key) {
    this.key = key;
    this.memory = null;
  }

  readRaw() {
    try {
      return localStorage.getItem(this.key);
    } catch {
      return null;
    }
  }

  profile() {
    if (this.memory) {
      return deepClone(this.memory);
    }

    const raw = this.readRaw();

    if (!raw) {
      this.memory = structuredClone(DEFAULT_PROFILE);
      return deepClone(this.memory);
    }

    try {
      const parsed = JSON.parse(raw);

      this.memory = {
        ...structuredClone(DEFAULT_PROFILE),
        ...parsed,
        settings: {
          ...DEFAULT_PROFILE.settings,
          ...(parsed.settings || {})
        }
      };

      return deepClone(this.memory);
    } catch {
      this.memory = structuredClone(DEFAULT_PROFILE);
      return deepClone(this.memory);
    }
  }

  saveProfile(profile) {
    this.memory = deepClone(profile);

    try {
      localStorage.setItem(this.key, JSON.stringify(this.memory));
    } catch {
      // Private browsing or blocked storage should not stop a game.
    }
  }

  persist(snapshot) {
    const profile = this.profile();

    profile.games = Math.max(
      profile.games,
      snapshot.statistics?.games || profile.games
    );
    profile.wins = Math.max(
      profile.wins,
      snapshot.statistics?.wins || profile.wins
    );
    profile.lifetimePops = Math.max(
      profile.lifetimePops,
      snapshot.statistics?.lifetimePops || profile.lifetimePops
    );
    profile.lifetimeCash = Math.max(
      profile.lifetimeCash,
      snapshot.statistics?.lifetimeCash || profile.lifetimeCash
    );

    profile.lastSave = snapshot;
    this.saveProfile(profile);
  }

  loadLastGame() {
    const profile = this.profile();
    return profile.lastSave ? deepClone(profile.lastSave) : null;
  }

  clearLastGame() {
    const profile = this.profile();
    delete profile.lastSave;
    this.saveProfile(profile);
  }

  awardAchievement(id, reward = 0) {
    const profile = this.profile();

    if (profile.achievements.includes(id)) {
      return false;
    }

    profile.achievements.push(id);
    profile.monkeyMoney += reward;
    this.saveProfile(profile);
    return true;
  }
}
