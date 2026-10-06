import { Game, GAME_STATES } from "./game.js";
import { SaveManager } from "./save.js";
import { TOWERS, HEROES, GLOSSARY, MAPS, DIFFICULTIES } from "./data.js";
import { UIController } from "./ui.js";

const canvas = document.querySelector("#game-canvas");
const save = new SaveManager("monkey-frontier-save-v1");
const ui = new UIController();
const game = new Game({
  canvas,
  save,
  content: { towers: TOWERS, heroes: HEROES, maps: MAPS, glossary: GLOSSARY, difficulties: DIFFICULTIES }
});

ui.bind({
  play: () => ui.showMapScreen(),
  freeplay: () => ui.showMapScreen({ freeplay: true }),
  continue: () => {
    const snapshot = save.loadLastGame();
    if (snapshot) {
      game.resume(snapshot);
      ui.showGame();
    } else {
      ui.showMapScreen();
    }
  },
  sandbox: () => ui.showMapScreen({ sandbox: true }),
  progress: () => ui.showProgress(save.profile()),
  glossary: () => ui.showManual(GLOSSARY),
  mapBack: () => ui.showMenu(),
  progressBack: () => ui.showMenu(),
  manualBack: () => ui.showMenu(),
  startMap: (mapId, options) => {
    game.start(mapId, {
      sandbox: Boolean(options?.sandbox),
      freeplay: Boolean(options?.freeplay),
      mode: options?.mode || "standard",
      difficulty: options?.difficulty || "normal"
    });
    ui.showGame();
  },
  startRound: () => game.startRound(),
  toggleAuto: () => game.toggleAutoRounds(),
  cycleSpeed: () => game.cycleSpeed(),
  togglePause: () => game.togglePause(),
  save: () => { save.persist(game.snapshot()); ui.toast("Game saved."); },
  menu: () => { save.persist(game.snapshot()); game.stop(); ui.showMenu(); },
  selectTower: id => game.selectBuildTower(id),
  selectEntity: id => game.selectEntity(id),
  cycleTarget: () => game.cycleSelectedTarget(),
  closeSelection: () => game.clearSelection(),
  buyUpgrade: (entityId, path, tier) => game.buyUpgrade(entityId, path, tier),
  activateAbility: entityId => game.activateAbility(entityId),
  ascend: entityId => game.ascendTower(entityId),
  toggleBuild: () => game.toggleBuildMode(),
  toggleMulti: () => game.toggleMultiPlace(),
  sell: () => game.sellSelected(),
  upgradeMode: () => game.upgradeMode()
});

game.on("state", state => ui.setGameState(state));
game.on("hud", hud => ui.updateHUD(hud));
game.on("towerMenu", towers => ui.renderTowerButtons(towers));
game.on("selection", selection => ui.renderSelection(selection));
game.on("toast", message => ui.toast(message.text, message.kind));
game.on("progress", profile => ui.updateProgress(profile));
game.on("mapList", maps => ui.renderMapList(maps));
game.on("manual", glossary => ui.showManual(glossary));
game.on("frame", frame => {
  if (frame.resize) game.resize();
});

window.addEventListener("beforeunload", () => {
  if (game.state !== GAME_STATES.MENU) save.persist(game.snapshot());
});
window.addEventListener("keydown", event => game.handleKey(event));
window.addEventListener("resize", () => game.resize());

window.monkeyFrontier = { game, ui, save };

ui.showMenu();
ui.renderMapList(MAPS);
ui.setContinueAvailable(Boolean(save.loadLastGame()));
ui.setProfile(save.profile());

game.startLoop();
