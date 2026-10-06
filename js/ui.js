import { Game } from "./engine.js";
import { TOWERS, MAPS, DIFFICULTIES, CHALLENGES, ACHIEVEMENTS, getTower } from "./data.js";
import { loadSave, resetSave } from "./save.js";

const canvas = document.querySelector("#gameCanvas");
const game = new Game(canvas);

const $ = (id) => document.querySelector(id);
const refs = {
  overlay: $("#stageOverlay"),
  menu: $("#menuCard"),
  start: $("#startGameButton"),
  continue: $("#continueGameButton"),
  challenge: $("#challengeButton"),
  menuNotice: $("#menuNotice"),
  cash: $("#cashValue"),
  lives: $("#livesValue"),
  wave: $("#waveValue"),
  xp: $("#xpValue"),
  speed: $("#speedLabel"),
  mode: $("#modeLabel"),
  fps: $("#fpsLabel"),
  startWave: $("#startWaveButton"),
  pause: $("#pauseButton"),
  speedButton: $("#speedButton"),
  fastForward: $("#fastForwardButton"),
  palette: $("#towerPalette"),
  selectionPanel: $("#selectedTowerPanel"),
  selectedName: $("#selectedTowerName"),
  selectedStats: $("#selectedTowerStats"),
  closeSelection: $("#closeSelectionButton"),
  path0: $("#path0"),
  path1: $("#path1"),
  path2: $("#path2"),
  sell: $("#sellButton"),
  ability: $("#abilityButton"),
  apex: $("#apexButton"),
  buildMode: $("#buildModeButton"),
  multiPlace: $("#multiPlaceButton"),
  range: $("#rangeButton"),
  deleteMode: $("#deleteModeButton"),
  runInfo: $("#runInfo"),
  achievements: $("#achievementList"),
  reset: $("#resetSaveButton")
};

let saveSnapshot = loadSave();

function formatMoney(value) {
  return "$" + Math.floor(value).toLocaleString();
}

function toast(message) {
  let node = document.querySelector(".toast");
  if (!node) {
    node = document.createElement("div");
    node.className = "toast";
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.add("visible");
  clearTimeout(node._timeout);
  node._timeout = setTimeout(() => node.classList.remove("visible"), 2400);
}

function renderPalette() {
  refs.palette.innerHTML = "";
  for (const tower of TOWERS) {
    const button = document.createElement("button");
    button.className = "tower-button";
    button.innerHTML = '<span class="icon">' + tower.short.slice(0, 2) + '</span><span class="name">' + tower.name + '</span><div class="price">' + formatMoney(tower.cost) + "</div>";
    button.title = tower.description;
    button.addEventListener("click", () => {
      game.selectBuild(tower.id);
      game.notify("Selected " + tower.name + ".");
    });
    refs.palette.appendChild(button);
  }
}

function renderHud() {
  refs.cash.textContent = formatMoney(game.cash);
  refs.lives.textContent = Math.max(0, Math.floor(game.lives)).toLocaleString();
  refs.wave.textContent = game.wave + " / 150";
  refs.xp.textContent = Math.floor(game.wave * 10 + game.statsThisRun.kills * 2).toLocaleString();
  refs.speed.textContent = game.speed + "×";
  refs.mode.textContent = game.deleteMode ? "Delete" : game.buildMode ? (game.multiPlace ? "Multi-build" : "Build") : "Inspect";
  refs.pause.textContent = game.paused ? "Resume" : "Pause";
  refs.speedButton.textContent = "Speed " + game.speed + "×";
  refs.startWave.disabled = !game.running || game.ended || game.waveActive || game.wave >= 150;
  refs.startWave.textContent = game.wave >= 150 ? "Campaign Complete" : game.waveActive ? "Wave Active" : "Deploy Wave";
  refs.buildMode.textContent = "Build Mode: " + (game.buildMode ? "ON" : "OFF");
  refs.multiPlace.textContent = "Multi-place: " + (game.multiPlace ? "ON" : "OFF");
  refs.range.textContent = "Ranges: " + (game.showRanges ? "ON" : "OFF");
  refs.deleteMode.textContent = "Delete Mode: " + (game.deleteMode ? "ON" : "OFF");
}

function stat(label, value) {
  return '<div class="stat-chip"><span>' + label + '</span><strong>' + value + "</strong></div>";
}

function renderSelection(tower) {
  if (!tower) {
    refs.selectionPanel.classList.add("hidden");
    return;
  }
  refs.selectionPanel.classList.remove("hidden");
  refs.selectedName.textContent = tower.spec.name + (tower.apex ? " — Apex" : "");
  refs.selectedStats.innerHTML =
    stat("Damage", tower.stats.damage.toFixed(1)) +
    stat("Pierce", Math.floor(tower.stats.pierce)) +
    stat("Range", Math.floor(tower.stats.range)) +
    stat("Cooldown", tower.stats.attackCooldown.toFixed(2) + "s") +
    stat("Target", tower.targetMode) +
    stat("Value", formatMoney(tower.sellValue()));

  const paths = [refs.path0, refs.path1, refs.path2];
  for (let pathIndex = 0; pathIndex < 3; pathIndex++) {
    paths[pathIndex].innerHTML = "";
    for (let tier = 0; tier < 5; tier++) {
      const upgrade = tower.spec.paths[pathIndex][tier];
      const button = document.createElement("button");
      const purchased = tower.pathLevels[pathIndex] > tier;
      const next = tower.pathLevels[pathIndex] === tier;
      const allowed = next && tower.pathLimitAllows(pathIndex);
      button.className = "upgrade-button " + (purchased ? "purchased" : "") + (!allowed && !purchased ? " blocked" : "");
      button.disabled = purchased || !allowed || game.cash < upgrade.cost;
      button.innerHTML = '<span class="tier">TIER ' + upgrade.tier + '</span><span class="upgrade-name">' + upgrade.name + '</span><span class="cost">' + (purchased ? "Purchased" : formatMoney(upgrade.cost)) + "</span>";
      button.title = upgrade.description;
      button.addEventListener("click", () => {
        const result = tower.upgrade(pathIndex);
        if (!result.ok) toast(result.reason);
        renderSelection(tower);
      });
      paths[pathIndex].appendChild(button);
    }
  }

  refs.apex.classList.toggle("hidden", !tower.canCreateApex());
  refs.apex.disabled = game.cash < 25000;
  refs.ability.classList.add("hidden");

  document.querySelectorAll(".target-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === tower.targetMode);
  });
}

function renderAchievements() {
  saveSnapshot = loadSave();
  refs.achievements.innerHTML = "";
  for (const achievement of ACHIEVEMENTS) {
    const unlocked = Boolean(saveSnapshot.achievements[achievement.id]);
    const row = document.createElement("div");
    row.className = "achievement " + (unlocked ? "unlocked" : "");
    row.innerHTML = '<div class="badge">' + (unlocked ? "✓" : "○") + '</div><div><strong>' + achievement.name + '</strong><span>' + achievement.description + "</span></div>";
    refs.achievements.appendChild(row);
  }
}

function renderRunInfo() {
  refs.runInfo.innerHTML =
    "<p><strong>Map:</strong> " + game.currentMap.name + "</p>" +
    "<p><strong>Difficulty:</strong> " + game.currentDifficulty + "</p>" +
    "<p><strong>Challenge:</strong> " + game.currentChallenge + "</p>" +
    "<p><strong>Kills:</strong> " + game.statsThisRun.kills.toLocaleString() + "</p>" +
    "<p><strong>Bosses:</strong> " + game.statsThisRun.bosses.toLocaleString() + "</p>" +
    "<p><strong>Damage dealt:</strong> " + Math.floor(game.statsThisRun.damageDealt).toLocaleString() + "</p>" +
    "<p><strong>Towers placed:</strong> " + game.statsThisRun.towersPlaced.toLocaleString() + "</p>";
}

function showGame() {
  refs.overlay.classList.add("hidden");
  renderHud();
  renderRunInfo();
}

function showMenu(message = "") {
  refs.overlay.classList.remove("hidden");
  refs.menuNotice.textContent = message;
}

function newRun() {
  game.begin({
    mapId: "greenway",
    difficultyId: "standard",
    challengeId: "scout"
  });
  showGame();
}

function continueRun() {
  const current = saveSnapshot.currentRun;
  if (!current || !current.towers) {
    toast("No saved run is available.");
    return;
  }
  game.loadState(current);
  showGame();
}

function setupChallenge() {
  const mapChoices = MAPS.map((map) => map.name).join(" • ");
  const difficultyChoices = DIFFICULTIES.map((mode) => mode.name).join(" • ");
  const challengeChoices = CHALLENGES.map((challenge) => challenge.name).join(" • ");
  const mapId = window.prompt("Map: " + mapChoices + "\\nEnter id: greenway, crosscurrent, switchyard, nightgrid, spire", "greenway") || "greenway";
  const difficultyId = window.prompt("Difficulty: " + difficultyChoices + "\\nEnter id: apprentice, standard, veteran, nightmare, cataclysm", "standard") || "standard";
  const challengeId = window.prompt("Challenge: " + challengeChoices + "\\nEnter id: scout, rush, fortified, stealth-heavy, boss-heavy, endurance", "scout") || "scout";
  game.begin({ mapId, difficultyId, challengeId });
  showGame();
}

refs.start.addEventListener("click", newRun);
refs.continue.addEventListener("click", continueRun);
refs.challenge.addEventListener("click", setupChallenge);
refs.startWave.addEventListener("click", () => game.startWave());
refs.pause.addEventListener("click", () => game.togglePause());
refs.speedButton.addEventListener("click", () => game.cycleSpeed());
refs.fastForward.addEventListener("click", () => game.skipWave());
refs.closeSelection.addEventListener("click", () => game.selectTower(null));
refs.sell.addEventListener("click", () => {
  if (game.selectedTower) game.sellTower(game.selectedTower);
});
refs.apex.addEventListener("click", () => {
  if (!game.selectedTower) return;
  const result = game.selectedTower.createApex();
  if (!result.ok) toast(result.reason);
  else toast("Apex unit created.");
  renderSelection(game.selectedTower);
});
refs.buildMode.addEventListener("click", () => game.toggleBuildMode());
refs.multiPlace.addEventListener("click", () => game.toggleMultiPlace());
refs.range.addEventListener("click", () => {
  game.showRanges = !game.showRanges;
  game.save.settings.showRanges = game.showRanges;
});
refs.deleteMode.addEventListener("click", () => game.toggleDeleteMode());

document.querySelectorAll(".target-button").forEach((button) => {
  button.addEventListener("click", () => game.setTargetMode(button.dataset.target));
});

refs.reset.addEventListener("click", () => {
  if (!window.confirm("Reset all Skyfront Dominion save data?")) return;
  resetSave();
  saveSnapshot = loadSave();
  showMenu("Save reset.");
  renderAchievements();
});

game.on("fps", (fps) => refs.fps.textContent = Math.round(fps) + " FPS");
game.on("selection", (tower) => renderSelection(tower));
game.on("towerPlaced", (tower) => {
  renderHud();
  renderRunInfo();
  toast(tower.spec.name + " deployed.");
});
game.on("towerUpgraded", (tower) => {
  renderHud();
  renderSelection(tower);
});
game.on("towerSold", ({value}) => {
  renderHud();
  renderRunInfo();
  toast("Tower sold for " + formatMoney(value) + ".");
});
game.on("waveStarted", () => {
  renderHud();
  renderRunInfo();
});
game.on("waveFinished", () => {
  renderHud();
  renderRunInfo();
  toast("Wave cleared.");
});
game.on("mode", () => renderHud());
game.on("speed", () => renderHud());
game.on("pause", () => renderHud());
game.on("leak", (enemy) => {
  renderHud();
  toast(enemy.spec.name + " reached the core.");
});
game.on("achievement", (achievement) => {
  renderAchievements();
  toast("Achievement unlocked: " + achievement.name);
});
game.on("toast", toast);
game.on("runEnded", ({ victory, wave }) => {
  renderHud();
  showMenu(victory ? "Campaign complete. Wave " + wave + " cleared." : "Defense collapsed on wave " + wave + ".");
});

window.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    game.startWave();
  } else if (event.key.toLowerCase() === "p") {
    game.togglePause();
  } else if (event.key.toLowerCase() === "q") {
    game.speed = game.speed === 1 ? 3 : game.speed === 3 ? 2 : 1;
    renderHud();
  } else if (event.key.toLowerCase() === "e") {
    game.cycleSpeed();
  } else if (event.key === "Escape") {
    game.selectTower(null);
  } else if (event.key === "Shift") {
    if (!event.repeat) game.toggleMultiPlace();
  } else if (/^[1-3]$/.test(event.key) && game.selectedTower) {
    const pathIndex = Number(event.key) - 1;
    const result = game.selectedTower.upgrade(pathIndex);
    if (!result.ok) toast(result.reason);
    renderSelection(game.selectedTower);
  }
});

renderPalette();
renderAchievements();
showMenu("Choose a campaign, restore a saved run, or open challenge setup.");
