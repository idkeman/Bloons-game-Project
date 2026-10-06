export const GAME_MODES = {
  standard: {
    id: "standard",
    name: "Standard",
    description: "The baseline campaign rules.",
    cashMultiplier: 1,
    bloonSpeed: 1,
    bloonHealth: 1,
    startingLives: 1,
    incomeMultiplier: 1,
    abilityCooldownMultiplier: 1
  },

  reverse: {
    id: "reverse",
    name: "Reverse Route",
    description: "Enemies travel the route in the opposite direction.",
    cashMultiplier: 0.98,
    bloonSpeed: 1,
    bloonHealth: 1,
    startingLives: 1,
    incomeMultiplier: 1,
    abilityCooldownMultiplier: 1
  },

  halfCash: {
    id: "halfCash",
    name: "Half Cash",
    description: "Reduced starting cash and income.",
    cashMultiplier: 0.50,
    bloonSpeed: 1,
    bloonHealth: 1,
    startingLives: 1,
    incomeMultiplier: 0.50,
    abilityCooldownMultiplier: 1
  },

  doubleHealth: {
    id: "doubleHealth",
    name: "Double Health",
    description: "Large enemies receive doubled durability.",
    cashMultiplier: 1,
    bloonSpeed: 1,
    bloonHealth: 2,
    startingLives: 1,
    incomeMultiplier: 1,
    abilityCooldownMultiplier: 1
  },

  apocalypse: {
    id: "apocalypse",
    name: "Apocalypse",
    description: "Rounds begin automatically and never pause between clears.",
    cashMultiplier: 1,
    bloonSpeed: 1.06,
    bloonHealth: 1.10,
    startingLives: 1,
    incomeMultiplier: 1,
    abilityCooldownMultiplier: 0.85,
    autoRounds: true
  },

  glass: {
    id: "glass",
    name: "Glass Field",
    description: "You begin with fewer lives but gain stronger attacks.",
    cashMultiplier: 1,
    bloonSpeed: 1,
    bloonHealth: 1,
    startingLives: 0.40,
    incomeMultiplier: 1,
    abilityCooldownMultiplier: 0.90,
    towerDamageMultiplier: 1.18
  },

  endurance: {
    id: "endurance",
    name: "Endurance",
    description: "Longer rounds, higher freeplay scaling, larger rewards.",
    cashMultiplier: 1.05,
    bloonSpeed: 0.96,
    bloonHealth: 1.25,
    startingLives: 1.20,
    incomeMultiplier: 1.10,
    abilityCooldownMultiplier: 1.05
  }
};

export function getGameMode(modeId) {
  return GAME_MODES[modeId] || GAME_MODES.standard;
}

export function applyModeToCash(amount, mode) {
  return amount * (mode?.cashMultiplier ?? 1);
}

export function applyModeToIncome(amount, mode) {
  return amount * (mode?.incomeMultiplier ?? 1);
}

export function applyModeToHealth(amount, mode) {
  return amount * (mode?.bloonHealth ?? 1);
}

export function applyModeToSpeed(amount, mode) {
  return amount * (mode?.bloonSpeed ?? 1);
}