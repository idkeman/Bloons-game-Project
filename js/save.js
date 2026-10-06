const SAVE_KEY = "skyfront-dominion-save-v1";

const defaultSave = {
  version: 1,
  bank: 0,
  unlocks: {},
  achievements: {},
  statistics: {
    runs: 0,
    waves: 0,
    kills: 0,
    bosses: 0,
    towersPlaced: 0,
    towersSold: 0,
    creditsEarned: 0,
    apexCreated: 0
  },
  settings: {
    sound: true,
    reduceMotion: false,
    showRanges: false
  }
};

function safeParse(text) {
  try {
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

export function loadSave() {
  const raw = localStorage.getItem(SAVE_KEY);
  const parsed = raw ? safeParse(raw) : null;
  if (!parsed) {
    return structuredClone(defaultSave);
  }
  return {
    ...structuredClone(defaultSave),
    ...parsed,
    statistics: { ...defaultSave.statistics, ...(parsed.statistics ?? {}) },
    settings: { ...defaultSave.settings, ...(parsed.settings ?? {}) }
  };
}

export function saveGame(state) {
  const serializable = {
    ...state,
    saveRuntime: undefined
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(serializable));
}

export function resetSave() {
  localStorage.removeItem(SAVE_KEY);
  return loadSave();
}

export function exportSave(state) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(state))));
}

export function importSave(text) {
  const decoded = decodeURIComponent(escape(atob(text)));
  const parsed = safeParse(decoded);
  return parsed ? parsed : null;
}
