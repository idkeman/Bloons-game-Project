import { TOWERS, HEROES, DIFFICULTIES, MAPS, BLOONS } from "./data.js";
import { EventBus, IdFactory, Cooldown, clamp, deepClone, distance } from "./math.js";
import { RoutePath } from "./path.js";
import { Bloon, Projectile, Tower } from "./entities.js";
import { HeroUnit } from "./hero.js";
import { RoundController } from "./rounds.js";
import { CombatSystem } from "./combat.js";
import { ProgressionSystem } from "./progression.js";
import { canPlaceAt } from "./placement.js";
import { BossController } from "./bosses.js";
import { TrapField, TrapSystem } from "./traps.js";
import { validateGameState } from "./diagnostics.js";
import { canCreateParagon, calculateDegree, getParagonData } from "./paragons.js";
import { getGameMode } from "./game_modes.js";
import { aggregateKnowledge } from "./knowledge.js";

export const GAME_STATES = {
  MENU: "menu",
  RUNNING: "running",
  PAUSED: "paused",
  WON: "won",
  LOST: "lost"
};

const SPEEDS = [1, 2, 3];

const COLORS = {
  red: "#f54f52",
  blue: "#4fa6ff",
  green: "#4dd17a",
  yellow: "#ffd45a",
  pink: "#ff75b8",
  zebra: "#e6e9ee",
  rainbow: "#c96cff",
  ceramic: "#d89a61",
  metal: "#98a6b4",
  prism: "#7ce6ff",
  blimp: "#d36e83",
  fortBlimp: "#8f5c79",
  dreadBlimp: "#6e4a91",
  bossTitan: "#ed725c",
  bossSentinel: "#55ccff"
};

export class Game {
  constructor({ canvas, save, content }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.save = save;
    this.content = content;
    this.progression = new ProgressionSystem(save);

    this.events = new EventBus();
    this.ids = new IdFactory("entity");
    this.state = GAME_STATES.MENU;

    this.width = 1;
    this.height = 1;
    this.dpr = 1;

    this.map = null;
    this.path = null;
    this.difficulty = DIFFICULTIES.normal;
    this.difficultyId = "normal";
    this.sandbox = false;

    this.cash = 0;
    this.lives = 0;
    this.round = 0;
    this.speed = 1;
    this.autoRounds = false;
    this.pausedBeforeMenu = false;

    this.towers = [];
    this.heroes = [];
    this.bloons = [];
    this.projectiles = [];

    this.selectedId = null;
    this.pendingTower = null;
    this.pendingHero = null;
    this.buildMode = true;
    this.multiPlace = false;
    this.lastPointer = { x: 0, y: 0, inside: false };

    this.rounds = new RoundController(this);
    this.combat = new CombatSystem(this);
    this.bosses = new BossController(this);
    this.trapsystem = new TrapSystem(this);
    this.traps = [];

    this.stats = {
      games: 0,
      wins: 0,
      lifetimePops: 0,
      lifetimeCash: 0,
      roundPops: 0,
      roundCash: 0,
      damage: 0
    };

    this.particles = [];
    this.floaters = [];
    this.clock = 0;
    this.lastFrame = performance.now();
    this.debugEnabled = false;
    this.debugAccumulator = 0;
    this.runningLoop = false;

    this.bindCanvas();
  }

  on(event, listener) {
    return this.events.on(event, listener);
  }

  emit(event, payload) {
    this.events.emit(event, payload);
  }

  bindCanvas() {
    this.canvas.addEventListener("pointermove", (event) => {
      const point = this.pointerPoint(event);
      this.lastPointer = {
        ...point,
        inside: true
      };
    });

    this.canvas.addEventListener("pointerleave", () => {
      this.lastPointer.inside = false;
    });

    this.canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 && event.pointerType !== "touch") {
        return;
      }

      const point = this.pointerPoint(event);
      this.lastPointer = {
        ...point,
        inside: true
      };

      this.handlePointer(point);
    });
  }

  startLoop() {
    if (this.runningLoop) {
      return;
    }

    this.runningLoop = true;

    const frame = (time) => {
      const realDelta = Math.min(
        0.05,
        Math.max(0, (time - this.lastFrame) / 1000)
      );

      this.lastFrame = time;
      this.tick(realDelta);
      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  tick(realDelta) {
    this.clock += realDelta;

    if (
      this.state === GAME_STATES.RUNNING &&
      !this.pausedBeforeMenu
    ) {
      this.update(realDelta * this.speed);
    }

    this.render();

    if (Math.floor(this.clock * 2) % 2 === 0) {
      this.emit("hud", this.hud());
    }
  }

  update(delta) {
    if (!this.map || !this.path) {
      return;
    }

    this.recalculateBuffs();

    this.rounds.update(delta);

    for (const bloon of this.bloons) {
      bloon.update(
        delta,
        this.difficulty.speed *
        this.gameMode.bloonSpeed
      );
    }

    for (const bloon of this.bloons) {
      if (
        bloon.alive ||
        bloon.progress < 1
      ) {
        continue;
      }

      this.lives -= bloon.data.boss
        ? Math.max(10, Math.ceil(bloon.data.layer / 2))
        : Math.max(1, Math.ceil(bloon.data.layer / 4));

      this.emit("toast", {
        text: "-" + (
          bloon.data.boss
            ? Math.max(10, Math.ceil(bloon.data.layer / 2))
            : Math.max(1, Math.ceil(bloon.data.layer / 4))
        ) + " lives",
        kind: "danger"
      });
    }

    this.resolveBloonDeaths();

    for (const hero of this.heroes) {
      hero.fire(this, delta);
    }

    this.combat.update(delta);
    this.trapsystem.update();
    this.bosses.update();

    for (const tower of this.towers) {
      this.applyTowerIncome(tower, delta);
      tower.abilityActive = Math.max(0, tower.abilityActive - delta);
      tower.abilityCooldown.tick(delta);
    }

    this.updateParticles(delta);
    this.cleanup();

    this.debugAccumulator += delta;

    if (
      this.debugEnabled &&
      this.debugAccumulator >= 0.25
    ) {
      this.debugAccumulator = 0;
      validateGameState(this);
    }

    if (this.lives <= 0 && this.state === GAME_STATES.RUNNING) {
      this.lose();
    }

    if (
      !this.freeplay &&
      this.rounds.current >= 100 &&
      !this.rounds.active &&
      this.bloons.length === 0 &&
      this.state === GAME_STATES.RUNNING
    ) {
      this.win();
    }
  }

  resolveBloonDeaths() {
    const survivors = [];

    for (const bloon of this.bloons) {
      if (bloon.alive) {
        survivors.push(bloon);
        continue;
      }

      if (bloon.progress >= 1) {
        continue;
      }

      const children = bloon.splitChildren();

      if (children.length) {
        for (const child of children) {
          survivors.push(child);
        }
      }

      const reward = Math.max(
        1,
        Math.round(
          (bloon.data.reward || 1) *
          this.difficulty.cash *
          this.gameMode.cashMultiplier *
          (this.sandbox ? 2 : 1)
        )
      );

      this.addCash(reward, "pop");
      this.stats.roundPops += 1;
      this.stats.lifetimePops += 1;

      this.progression.recordStats({
        pops: 1,
        cash: reward
      });

      this.emit("toast", {
        text: "+" + reward,
        kind: "money"
      });

      this.spawnPopParticles(
        bloon.position.x,
        bloon.position.y,
        COLORS[bloon.type] || "#fff"
      );
    }

    this.bloons = survivors;
  }

  applyTowerIncome(tower, delta) {
    const attack = tower.getAttackData();
    const incomeTier = tower.pathLevels[2];

    if (incomeTier <= 0) {
      return;
    }

    const baseIncome =
      tower.type === "farm"
        ? 18 * Math.max(1, incomeTier) *
          (incomeTier >= 4 ? 1.8 : 1)
        : tower.type === "sniper"
          ? incomeTier * 2
        : tower.type === "boat"
          ? incomeTier * 3
          : tower.type === "sub"
            ? incomeTier * 2.5
            : tower.type === "village"
              ? incomeTier * 1.5
              : tower.type === "spike"
                ? incomeTier
                : tower.type === "engineer"
                  ? incomeTier * 2
                  : tower.type === "beacon"
                    ? incomeTier
                    : 0;

    const interval =
      incomeTier >= 5
        ? 1
        : incomeTier >= 4
          ? 2
          : 4;

    tower._incomeTimer = (tower._incomeTimer || 0) + delta;

    if (baseIncome > 0 && tower._incomeTimer >= interval) {
      const cycles = Math.floor(tower._incomeTimer / interval);
      tower._incomeTimer -= cycles * interval;
      this.addCash(
        baseIncome *
          cycles *
          this.gameMode.incomeMultiplier +
      (this.knowledge.incomeMultiplier || 0),
        "tower-income",
        tower
      );
      tower.totalCash += baseIncome * cycles;
    }

    if (attack.income > 0 && tower._incomeTimer <= 0) {
      this.addCash(attack.income, "special-income", tower);
    }
  }

  registerDamage(ownerId, damage, destroyed) {
    if (!damage) {
      return;
    }

    this.stats.damage += damage;

    this.progression.recordStats({
      damage
    });

    const owner = this.towers.find(
      (tower) => tower.id === ownerId
    );

    if (owner) {
      owner.totalDamage += damage;

      if (destroyed) {
        owner.totalPops += 1;
      }

      this.emitSelectionIfNeeded(owner.id);
      return;
    }

    const hero = this.heroes.find(
      (unit) => unit.id === ownerId
    );

    if (hero) {
      hero.totalDamage += damage;

      if (destroyed) {
        hero.totalPops += 1;
      }

      hero.addXp(
        Math.max(
          1,
          Math.floor(damage / 3) +
          (destroyed ? 4 : 0)
        )
      );

      if (destroyed) {
        this.progression.awardXp(
          2,
          "hero-pop"
        );
      }
    }
  }

  addCash(amount, source = "unknown", owner = null) {
    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    this.cash += amount;
    this.stats.roundCash += amount;
    this.stats.lifetimeCash += amount;

    if (owner) {
      owner.totalCash = (owner.totalCash || 0) + amount;
    }

    this.emit("hud", this.hud());
  }

  spawnBloon(type, options = {}) {
    if (!this.path) {
      return null;
    }

    const roundScale = Math.max(
      1,
      this.round > 80
        ? 1 + Math.pow((this.round - 80) / 20, 1.22)
        : 1
    );

    const bloon = new Bloon({
      id: this.ids.next(),
      type,
      path: this.path,
      progress: 0,
      healthMultiplier:
        this.difficulty.health *
        this.gameMode.bloonHealth *
        roundScale,
      fortified: options.fortified,
      camo: options.camo,
      regrow: options.regrow
    });

    this.bloons.push(bloon);
    return bloon;
  }

  start(mapId, options = {}) {
    const map = MAPS.find(
      (candidate) => candidate.id === mapId
    );

    if (!map) {
      throw new Error("Unknown map: " + mapId);
    }

    this.map = deepClone(map);
    this.sandbox = Boolean(options.sandbox);
    this.freeplay = Boolean(options.freeplay);
    this.gameModeId = options.mode || "standard";
    this.gameMode = getGameMode(this.gameModeId);
    this.autoRounds =
      Boolean(this.gameMode.autoRounds);

    this.difficultyId = options.difficulty || "normal";
    this.difficulty =
      DIFFICULTIES[this.difficultyId] ||
      DIFFICULTIES.normal;

    this.resize();

    this.path = new RoutePath(
      (this.gameModeId === "reverse"
        ? [...this.map.path].reverse()
        : this.map.path
      ).map(([x, y]) => [
        x * this.width,
        y * this.height
      ]),
      Math.max(34, this.width * 0.055)
    );

    this.cash = this.sandbox
      ? 999999
      : Math.round(
          (
            this.map.startCash *
            this.difficulty.cash *
            this.gameMode.cashMultiplier
          ) +
          (this.knowledge.startCash || 0)
        );

    this.lives = this.sandbox
      ? 999999
      : Math.round(
          this.map.lives *
          this.difficulty.lives *
          this.gameMode.startingLives *
          (1 + (this.knowledge.lives || 0))
        );

    this.round = 0;
    this.towers = [];
    this.heroes = [];
    this.bloons = [];
    this.projectiles = [];
    this.traps = [];
    this.particles = [];
    this.floaters = [];

    this.selectedId = null;
    this.pendingTower = null;
    this.pendingHero = null;
    this.buildMode = true;
    this.multiPlace = false;

    this.rounds = new RoundController(this);
    this.rounds.auto = this.autoRounds;
    this.bosses.reset();

    this.progression = new ProgressionSystem(this.save);
    this.knowledge = this.progression.knowledgeEffects();

    this.stats = {
      games: (this.save.profile().games || 0) + 1,
      wins: this.save.profile().wins || 0,
      lifetimePops: this.save.profile().lifetimePops || 0,
      lifetimeCash: this.save.profile().lifetimeCash || 0,
      roundPops: 0,
      roundCash: 0,
      damage: 0
    };

    this.state = GAME_STATES.RUNNING;

    this.emit("state", this.state);
    this.emit("mapList", MAPS);
    this.emit("towerMenu", Object.values(TOWERS));
    this.emit("progress", this.progression.snapshot());
    this.emit("knowledge", this.progression.listKnowledgeNodes());
    this.emit("selection", null);
    this.emit("hud", this.hud());
    this.emit("toast", {
      text: this.map.name + " ready.",
      kind: "info"
    });

    this.progression.recordRun(
      this.map.id,
      0,
      false
    );

    this.unlockStarterProgress();

    return true;
  }

  unlockStarterProgress() {
    const profile = this.save.profile();
    const starterIds = Object.keys(TOWERS).slice(0, 6);

    profile.unlockedTowers = Array.from(
      new Set([
        ...profile.unlockedTowers,
        ...starterIds
      ])
    );

    this.save.saveProfile(profile);
  }

  stop() {
    if (this.map) {
      this.progression.recordRun(
        this.map.id,
        this.rounds.current,
        false
      );
    }

    this.progression.persist();
    this.state = GAME_STATES.MENU;
    this.towers = [];
    this.heroes = [];
    this.bloons = [];
    this.projectiles = [];
    this.emit("state", this.state);
  }

  startRound() {
    if (this.state === GAME_STATES.PAUSED) {
      this.togglePause();
    }

    if (this.state !== GAME_STATES.RUNNING) {
      return false;
    }

    if (this.rounds.active) {
      return false;
    }

    const started = this.rounds.start();

    if (started) {
      this.round = this.rounds.current;
      this.emit("hud", this.hud());
    }

    return started;
  }

  toggleAutoRounds() {
    this.autoRounds = !this.autoRounds;
    this.rounds.auto = this.autoRounds;

    this.emit("toast", {
      text: "Auto-rounds " + (
        this.autoRounds ? "enabled" : "disabled"
      ) + ".",
      kind: "info"
    });
  }

  cycleSpeed() {
    const index = SPEEDS.indexOf(this.speed);
    this.speed = SPEEDS[(index + 1) % SPEEDS.length];
    this.emit("hud", this.hud());
  }

  win() {
    if (this.state !== GAME_STATES.RUNNING) {
      return;
    }

    this.state = GAME_STATES.WON;
    this.stats.wins += 1;

    if (this.map) {
      this.progression.recordRun(
        this.map.id,
        this.rounds.current,
        true
      );
    }

    this.emit("state", this.state);
    this.emit("toast", {
      text: "Round 100 complete.",
      kind: "ability"
    });
  }

  lose() {
    if (this.state !== GAME_STATES.RUNNING) {
      return;
    }

    this.state = GAME_STATES.LOST;

    if (this.map) {
      this.progression.recordRun(
        this.map.id,
        this.rounds.current,
        false
      );
    }

    this.emit("state", this.state);
  }

  togglePause() {
    if (
      this.state !== GAME_STATES.RUNNING &&
      this.state !== GAME_STATES.PAUSED
    ) {
      return;
    }

    this.state =
      this.state === GAME_STATES.RUNNING
        ? GAME_STATES.PAUSED
        : GAME_STATES.RUNNING;

    this.emit("state", this.state);
  }

  toggleBuildMode() {
    this.buildMode = !this.buildMode;

    if (!this.buildMode) {
      this.pendingTower = null;
    }

    if (this.buildMode) {
      this.emit("toast", {
        text: "Build mode enabled.",
        kind: "info"
      });
    }
  }

  toggleMultiPlace() {
    this.multiPlace = !this.multiPlace;

    if (!this.multiPlace) {
      this.pendingTower = null;
    }

    this.emit("toast", {
      text: "Multi-place " + (
        this.multiPlace ? "enabled" : "disabled"
      ) + ".",
      kind: "info"
    });
  }

  selectBuildTower(towerId) {
    if (typeof towerId === "string" && towerId.startsWith("hero:")) {
      const heroId = towerId.slice(5);
      if (!HEROES.some((hero) => hero.id === heroId)) {
        return;
      }

      this.pendingHero = heroId;
      this.pendingTower = null;
      this.buildMode = true;
      this.selectedId = null;
      this.emit("selection", null);
      return;
    }

    if (!TOWERS[towerId]) {
      return;
    }

    this.pendingTower = towerId;
    this.pendingHero = null;
    this.buildMode = true;
    this.selectedId = null;
    this.emit("selection", null);
  }

  canPlace(x, y, towerId) {
    const config = TOWERS[towerId];

    if (!config || !this.map || !this.path) {
      return false;
    }

    const placementMap = this.sandbox
      ? {
          ...this.map,
          buildZones: [
            { x: 0, y: 0, w: 1, h: 1 }
          ]
        }
      : this.map;

    const occupiedUnits = [
      ...this.towers,
      ...this.heroes
    ];

    return canPlaceAt({
      x,
      y,
      map: placementMap,
      width: this.width,
      height: this.height,
      path: this.path,
      towerConfig: config,
      occupiedUnits,
      minimumGap: Math.max(
        20,
        this.width * 0.024
      )
    }).ok;
  }

  placePendingTower(x, y) {
    if (!this.pendingTower) {
      return false;
    }

    const config = TOWERS[this.pendingTower];
    const cost = Math.round(
      config.cost * this.difficulty.cash
    );

    if (!this.sandbox && this.cash < cost) {
      this.emit("toast", {
        text: "Not enough cash.",
        kind: "danger"
      });
      return false;
    }

    if (!this.canPlace(x, y, this.pendingTower)) {
      this.emit("toast", {
        text: "That location is unavailable.",
        kind: "danger"
      });
      return false;
    }

    if (!this.sandbox) {
      this.cash -= cost;
    }

    const tower = new Tower({
      id: this.ids.next(),
      type: this.pendingTower,
      x,
      y,
      config
    });

    this.towers.push(tower);
    this.selectedId = tower.id;

    this.emit("toast", {
      text: config.name + " deployed.",
      kind: "info"
    });

    this.emitSelectionIfNeeded(tower.id);

    if (!this.multiPlace) {
      this.pendingTower = null;
    }

    return true;
  }

  placeHero(heroId, x, y) {
    const config = HEROES.find(
      (hero) => hero.id === heroId
    );

    if (!config) {
      return false;
    }

    if (this.heroes.some(
      (hero) => hero.heroId === heroId
    )) {
      this.emit("toast", {
        text: config.name + " is already deployed.",
        kind: "danger"
      });
      return false;
    }

    if (!this.canPlace(x, y, "sharpshooter")) {
      return false;
    }

    if (!this.sandbox && this.cash < config.cost) {
      return false;
    }

    if (!this.sandbox) {
      this.cash -= config.cost;
    }

    const hero = new HeroUnit({
      id: this.ids.next(),
      heroId,
      x,
      y,
      config
    });

    this.heroes.push(hero);
    this.selectedId = hero.id;
    this.pendingTower = null;
    this.pendingHero = null;
    this.emitSelectionIfNeeded(hero.id);
    return true;
  }

  selectEntity(id) {
    if (
      !this.towers.some((tower) => tower.id === id) &&
      !this.heroes.some((hero) => hero.id === id)
    ) {
      this.selectedId = null;
      this.emit("selection", null);
      return;
    }

    this.pendingTower = null;
    this.pendingHero = null;
    this.buildMode = false;
    this.selectedId = id;
    this.emitSelectionIfNeeded(id);
  }

  clearSelection() {
    this.selectedId = null;
    this.emit("selection", null);
  }

  cycleSelectedTarget() {
    const unit = this.selectedUnit();

    if (!unit) {
      return null;
    }

    if (typeof unit.cycleTarget === "function") {
      const mode = unit.cycleTarget();
      this.emitSelectionIfNeeded(unit.id);
      return mode;
    }

    return null;
  }

  selectEntityAt(x, y) {
    const units = [
      ...this.towers,
      ...this.heroes
    ];

    let best = null;
    let bestDistance = Infinity;

    for (const unit of units) {
      const gap = distance(
        x,
        y,
        unit.x,
        unit.y
      );

      if (
        gap <= Math.max(25, this.width * 0.035) &&
        gap < bestDistance
      ) {
        best = unit;
        bestDistance = gap;
      }
    }

    if (best) {
      this.selectEntity(best.id);
    } else if (!this.buildMode) {
      this.clearSelection();
    }
  }

  handlePointer(point) {
    if (this.state !== GAME_STATES.RUNNING) {
      return;
    }

    if (this.buildMode && this.pendingHero) {
      this.placeHero(
        this.pendingHero,
        point.x,
        point.y
      );
      return;
    }

    if (this.buildMode && this.pendingTower) {
      this.placePendingTower(
        point.x,
        point.y
      );
      return;
    }

    this.selectEntityAt(
      point.x,
      point.y
    );
  }

  handleKey(event) {
    const key = event.key.toLowerCase();

    if (key === " " || key === "spacebar") {
      event.preventDefault();
      if (this.rounds.active) {
        this.togglePause();
      } else {
        this.startRound();
      }
      return;
    }

    if (key === "b") {
      this.toggleBuildMode();
      return;
    }

    if (key === "m") {
      this.toggleMultiPlace();
      return;
    }

    if (key === "q") {
      const unit = this.selectedTower();
      if (unit instanceof Tower) {
        unit.cycleTarget();
        this.emitSelectionIfNeeded(unit.id);
      }
      return;
    }

    if (key === "e") {
      if (this.selectedId) {
        this.activateAbility(this.selectedId);
      }
      return;
    }

    if (key === "s") {
      this.sellSelected();
      return;
    }

    if (["1", "2", "3"].includes(key)) {
      const path = Number(key) - 1;
      if (this.selectedId) {
        const tower = this.towers.find(
          (item) => item.id === this.selectedId
        );

        if (tower) {
          const nextTier =
            tower.pathLevels[path] + 1;
          this.buyUpgrade(
            tower.id,
            path,
            nextTier
          );
        }
      }
    }
  }

  selectedTower() {
    return this.towers.find(
      (tower) => tower.id === this.selectedId
    ) || null;
  }

  selectedUnit() {
    return (
      this.towers.find(
        (tower) => tower.id === this.selectedId
      ) ||
      this.heroes.find(
        (hero) => hero.id === this.selectedId
      ) ||
      null
    );
  }

  buyUpgrade(entityId, path, tier) {
    const tower = this.towers.find(
      (item) => item.id === entityId
    );

    if (!tower) {
      return false;
    }

    const result = tower.buyUpgrade(
      path,
      tier,
      this.sandbox
        ? Infinity
        : this.cash
    );

    if (!result.ok) {
      this.emit("toast", {
        text:
          result.reason === "cash"
            ? "Not enough cash."
            : "That crosspath is unavailable.",
        kind: "danger"
      });
      return false;
    }

    if (!this.sandbox) {
      this.cash -= result.cost;
    }

    this.recalculateBuffs();

    this.emit("toast", {
      text:
        tower.name +
        " → " +
        tower.config.paths[path][tier - 1].name,
      kind: "upgrade"
    });

    this.emitSelectionIfNeeded(tower.id);
    return true;
  }

  activateAbility(entityId) {
    const hero = this.heroes.find(
      (unit) => unit.id === entityId
    );

    if (hero) {
      if (hero.activate(this)) {
        this.emit("toast", {
          text: hero.name + " ability activated.",
          kind: "ability"
        });
      }
      this.emitSelectionIfNeeded(hero.id);
      return;
    }

    const tower = this.towers.find(
      (unit) => unit.id === entityId
    );

    if (!tower || !tower.abilityCooldown.ready()) {
      return;
    }

    tower.abilityCooldown.reset(
      (
        tower.type === "engineer"
          ? 24
          : 18
      ) *
      this.gameMode.abilityCooldownMultiplier
    );
    tower.abilityActive = 8;
    tower.abilityMultiplier = 2.2;

    if (tower.type === "village") {
      for (const other of this.towers) {
        other.buff.attackSpeed *= 0.55;
      }
      this.emit("toast", {
        text: "Command burst active.",
        kind: "ability"
      });
      return;
    }

    if (
      tower.type === "sniper" ||
      tower.type === "boat"
    ) {
      this.addCash(150, "ability", tower);
      this.emit("toast", {
        text: "Supply package received.",
        kind: "money"
      });
      return;
    }

    if (tower.type === "cannon") {
      for (const bloon of this.bloons) {
        if (bloon.alive) {
          bloon.applyStun(2.5);
        }
      }
      return;
    }

    for (const bloon of this.bloons) {
      if (bloon.alive) {
        bloon.applySlow(0.65, 3.5);
      }
    }

    this.emitSelectionIfNeeded(tower.id);
  }

  sellSelected() {
    const index = this.towers.findIndex(
      (tower) => tower.id === this.selectedId
    );

    if (index < 0) {
      return false;
    }

    const tower = this.towers[index];
    const value = Math.round(
      tower.totalSpent *
      (0.70 + (this.knowledge.sellMultiplier || 0))
    );

    this.addCash(
      value,
      "sell"
    );

    this.towers.splice(index, 1);
    this.selectedId = null;
    this.emit("selection", null);
    this.emit("toast", {
      text: "Sold for $" + value + ".",
      kind: "money"
    });

    return true;
  }

  upgradeMode() {
    this.buildMode = false;

    const tower = this.selectedTower();

    if (tower) {
      this.emit("toast", {
        text: "Use 1, 2, or 3 to buy the next path upgrade.",
        kind: "info"
      });
    }
  }

  ascendTower(entityId) {
    const center = this.towers.find(
      (tower) => tower.id === entityId
    );

    if (!center || center.ascended) {
      return false;
    }

    const paragonData = getParagonData(center.type);

    if (
      !paragonData ||
      !canCreateParagon(
        this.towers,
        center.type
      )
    ) {
      this.emit("toast", {
        text: "Requires three qualifying Tier 5 towers of this type.",
        kind: "danger"
      });
      return false;
    }

    const candidates = this.towers
      .filter(
        (tower) =>
          tower.type === center.type &&
          tower.pathLevels.includes(5) &&
          !tower.ascended
      )
      .sort(
        (a, b) => b.totalSpent - a.totalSpent
      );

    if (candidates.length < 3) {
      return false;
    }

    const sacrifices = candidates.slice(0, 3);
    const sacrificeValue = sacrifices.reduce(
      (sum, tower) => sum + tower.totalSpent,
      0
    );

    const cost = paragonData.minimumCash;

    if (
      !this.sandbox &&
      this.cash < cost
    ) {
      this.emit("toast", {
        text: "Not enough cash to ascend.",
        kind: "danger"
      });
      return false;
    }

    if (!this.sandbox) {
      this.cash -= cost;
    }

    const degree = calculateDegree({
      cashSpent: cost,
      sacrificeValue,
      extraCash: Math.max(0, this.cash - 10000),
      paragonData
    });

    const host = sacrifices[0];

    host.ascended = true;
    host.ascensionDegree = degree;
    host.paragonData = paragonData;
    host.pathLevels = [5, 5, 5];

    for (const sacrificed of sacrifices.slice(1)) {
      const index = this.towers.findIndex(
        (tower) => tower.id === sacrificed.id
      );

      if (index >= 0) {
        this.towers.splice(index, 1);
      }
    }

    this.emit("toast", {
      text:
        paragonData.name +
        " created at degree " +
        degree +
        ".",
      kind: "ability"
    });

    this.emitSelectionIfNeeded(host.id);
    return true;
  }

  recalculateBuffs() {
    for (const tower of this.towers) {
      tower.buff = {
        range: 0,
        damage: 0,
        pierce: 0,
        attackSpeed: 1,
        detectHidden: false,
        breakArmor: false
      };
    }

    const villages = this.towers.filter(
      (tower) => tower.type === "village"
    );

    const beacons = this.towers.filter(
      (tower) => tower.type === "beacon"
    );

    for (const village of villages) {
      const radiusMultiplier =
        village.pathLevels[0] >= 4
          ? 1.75
          : 1;

      const radius =
        village.getAttackData().range *
        radiusMultiplier;

      for (const other of this.towers) {
        if (
          other === village ||
          distance(
            village.x,
            village.y,
            other.x,
            other.y
          ) > radius
        ) {
          continue;
        }

        other.buff.range = Math.max(
          other.buff.range,
          0.10 + village.pathLevels[0] * 0.02
        );

        if (village.pathLevels[0] >= 2) {
          other.buff.detectHidden = true;
        }

        if (village.pathLevels[2] >= 2) {
          other.buff.attackSpeed *= 0.92;
        }

        if (village.pathLevels[2] >= 4) {
          other.buff.damage = Math.max(
            other.buff.damage,
            0.15
          );
        }
      }
    }

    for (const beacon of beacons) {
      const radius =
        beacon.getAttackData().range *
        (1 + beacon.pathLevels[0] * 0.12);

      for (const other of this.towers) {
        if (
          other === beacon ||
          distance(
            beacon.x,
            beacon.y,
            other.x,
            other.y
          ) > radius
        ) {
          continue;
        }

        other.buff.range = Math.max(
          other.buff.range,
          0.12
        );

        other.buff.damage = Math.max(
          other.buff.damage,
          0.08 + beacon.pathLevels[1] * 0.025
        );

        if (beacon.pathLevels[0] >= 2) {
          other.buff.detectHidden = true;
        }

        if (beacon.pathLevels[2] >= 3) {
          other.buff.attackSpeed *= 0.90;
        }
      }
    }

    for (const alchemist of this.towers.filter(
      (tower) => tower.type === "alchemist"
    )) {
      if (alchemist.pathLevels[0] < 3) {
        continue;
      }

      for (const other of this.towers) {
        if (
          other === alchemist ||
          distance(
            alchemist.x,
            alchemist.y,
            other.x,
            other.y
          ) > 95
        ) {
          continue;
        }

        other.buff.damage = Math.max(
          other.buff.damage,
          alchemist.pathLevels[0] >= 4 ? 0.35 : 0.20
        );
      }
    }

    for (const hero of this.heroes) {
      if (
        hero.heroId !== "forge" ||
        hero.level < 5
      ) {
        continue;
      }

      for (const tower of this.towers) {
        if (
          distance(
            hero.x,
            hero.y,
            tower.x,
            tower.y
          ) <= 120
        ) {
          tower.buff.attackSpeed *=
            hero.level >= 10 ? 0.78 : 0.88;
        }
      }
    }
  }

  spawnPopParticles(x, y, color) {
    for (let index = 0; index < 7; index += 1) {
      const angle =
        Math.PI * 2 * (index / 7);
      const speed =
        35 + index * 7;

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.45,
        maxLife: 0.45,
        size: 2 + index % 3,
        color
      });
    }
  }

  updateParticles(delta) {
    for (const particle of this.particles) {
      particle.life -= delta;
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.vx *= Math.pow(0.06, delta);
      particle.vy *= Math.pow(0.06, delta);
    }

    this.particles = this.particles.filter(
      (particle) => particle.life > 0
    );
  }

  cleanup() {
    this.towers = this.towers.filter(
      (tower) => Number.isFinite(tower.x)
    );

    this.heroes = this.heroes.filter(
      (hero) => Number.isFinite(hero.x)
    );

    this.bloons = this.bloons.filter(
      (bloon) => bloon.alive && bloon.progress <= 1
    );
  }

  emitSelectionIfNeeded(id) {
    if (this.selectedId === id) {
      this.emit(
        "selection",
        this.selectionView(id)
      );
    }
  }

  selectionView(id = this.selectedId) {
    const tower = this.towers.find(
      (item) => item.id === id
    );

    if (tower) {
      return {
        type: "tower",
        id: tower.id,
        name: tower.name,
        tier: tower.tier,
        targetMode: tower.targetMode,
        pathLevels: [...tower.pathLevels],
        attack: tower.getAttackData(),
        pops: tower.totalPops,
        damage: tower.totalDamage,
        cash: tower.totalCash,
        ascended: tower.ascended,
        ascensionDegree: tower.ascensionDegree,
        paths: tower.config.paths,
        paragon: tower.paragonData
          ? deepClone(tower.paragonData)
          : null,
        canAscend: (
          tower.pathLevels.includes(5) &&
          this.towers.filter(
            (candidate) =>
              candidate.type === tower.type &&
              candidate.id !== tower.id &&
              candidate.pathLevels.includes(5) &&
              !candidate.ascended
          ).length >= 2
        )
      };
    }

    const hero = this.heroes.find(
      (item) => item.id === id
    );

    if (hero) {
      return {
        type: "hero",
        id: hero.id,
        name: hero.name,
        tier: hero.level,
        targetMode: hero.targetMode,
        xp: hero.xp,
        attack: hero.attack,
        pops: hero.totalPops,
        damage: hero.totalDamage,
        abilityReady: hero.abilityCooldown.ready(),
        abilityCooldown: hero.abilityCooldown.remaining,
        levels: hero.config.levels
      };
    }

    return null;
  }

  resume(snapshot) {
    if (!snapshot?.mapId) {
      return false;
    }

    this.start(snapshot.mapId, {
      sandbox: Boolean(snapshot.sandbox),
      freeplay: Boolean(snapshot.freeplay),
      mode: snapshot.gameModeId || "standard",
      difficulty: snapshot.difficultyId || "normal"
    });

    this.cash = snapshot.cash;
    this.lives = snapshot.lives;
    this.rounds.current = snapshot.round || 0;
    this.stats = deepClone(snapshot.statistics || this.stats);
    this.autoRounds = Boolean(snapshot.autoRounds);
    this.rounds.auto = this.autoRounds;
    this.speed = snapshot.speed || 1;

    this.towers = (snapshot.towers || []).map((saved) => {
      const config = TOWERS[saved.type];

      if (!config) {
        return null;
      }

      const tower = new Tower({
        id: saved.id,
        type: saved.type,
        x: saved.x,
        y: saved.y,
        config
      });

      tower.pathLevels = [...saved.pathLevels];
      tower.targetMode = saved.targetMode || "first";
      tower.totalSpent = saved.totalSpent || config.cost;
      tower.totalPops = saved.totalPops || 0;
      tower.totalDamage = saved.totalDamage || 0;
      tower.totalCash = saved.totalCash || 0;
      tower.ascended = Boolean(saved.ascended);
      tower.ascensionDegree =
        saved.ascensionDegree || 0;

      tower.cooldown.remaining =
        saved.cooldownRemaining || 0;
      tower.abilityCooldown.remaining =
        saved.abilityCooldownRemaining || 0;
      tower.abilityActive =
        saved.abilityActive || 0;
      tower.abilityMultiplier =
        saved.abilityMultiplier || 1;
      tower._incomeTimer =
        saved.incomeTimer || 0;

      tower.paragonData =
        saved.paragonData
          ? deepClone(saved.paragonData)
          : tower.ascended
            ? getParagonData(saved.type)
            : null;

      return tower;
    }).filter(Boolean);

    this.heroes = (snapshot.heroes || []).map((saved) => {
      const config = HEROES.find(
        (hero) => hero.id === saved.heroId
      );

      if (!config) {
        return null;
      }

      const hero = new HeroUnit({
        id: saved.id,
        heroId: saved.heroId,
        x: saved.x,
        y: saved.y,
        config
      });

      hero.level = saved.level || 1;
      hero.xp = saved.xp || 0;
      hero.targetMode =
        saved.targetMode || "first";
      hero.cooldown.remaining =
        saved.cooldownRemaining || 0;
      hero.abilityCooldown.remaining =
        saved.abilityCooldownRemaining || 0;
      hero.abilityActive =
        saved.abilityActive || 0;
      hero.abilityMultiplier =
        saved.abilityMultiplier || 1;
      hero.totalPops =
        saved.totalPops || 0;
      hero.totalDamage =
        saved.totalDamage || 0;
      return hero;
    }).filter(Boolean);

    this.bloons = (snapshot.bloons || []).map((saved) => {
      try {
        const bloon = new Bloon({
          id: saved.id,
          type: saved.type,
          path: this.path,
          progress: saved.progress,
          healthMultiplier: saved.healthMultiplier,
          fortified: saved.fortified,
          camo: saved.camo,
          regrow: saved.regrow
        });

        bloon.health = saved.health;
        bloon.maxHealth = saved.maxHealth || bloon.maxHealth;
        bloon.status = {
          ...bloon.status,
          ...(saved.status || {})
        };
        bloon.statusPower = {
          ...bloon.statusPower,
          ...(saved.statusPower || {})
        };
        return bloon;
      } catch {
        return null;
      }
    }).filter(Boolean);

    this.projectiles = (snapshot.projectiles || []).map(
      (saved) => Projectile.fromSnapshot(saved)
    );

    this.traps = (snapshot.traps || []).map(
      (saved) => TrapField.fromSnapshot(saved)
    );

    this.rounds.restore(
      snapshot.roundController || {
        current: snapshot.round || 0,
        active: Boolean(snapshot.roundActive),
        auto: Boolean(snapshot.autoRounds)
      }
    );

    this.emit("selection", null);
    this.recalculateBuffs();
    this.emit("hud", this.hud());
    this.emit("towerMenu", Object.values(TOWERS));
    return true;
  }

  snapshot() {
    return {
      version: 1,
      timestamp: Date.now(),
      state: this.state,
      mapId: this.map?.id || null,
      difficultyId: this.difficultyId,
      gameModeId: this.gameModeId,
      sandbox: this.sandbox,
      freeplay: this.freeplay,
      cash: this.cash,
      lives: this.lives,
      round: this.rounds.current,
      roundActive: this.rounds.active,
      roundController: this.rounds.snapshot(),
      autoRounds: this.autoRounds,
      speed: this.speed,
      towers: this.towers.map(
        (tower) => tower.serialize()
      ),
      heroes: this.heroes.map(
        (hero) => hero.serialize()
      ),
      bloons: this.bloons.map(
        (bloon) => bloon.serialize()
      ),
      projectiles: this.projectiles.map(
        (projectile) => projectile.serialize()
      ),
      traps: this.trapsystem.serialize(),
      statistics: deepClone(this.stats)
    };
  }

  hud() {
    const boss = this.bloons.find(
      (bloon) => bloon.data.boss
    );

    return {
      cash: Math.floor(this.cash),
      lives: Math.max(0, Math.floor(this.lives)),
      round: this.rounds.current,
      active: this.rounds.active,
      speed: this.speed,
      autoRounds: this.autoRounds,
      state: this.state,
      boss: boss
        ? {
            name: boss.data.name,
            health: Math.ceil(boss.health),
            maxHealth: Math.ceil(boss.maxHealth),
            progress: boss.progress
          }
        : null
    };
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.width = Math.max(320, rect.width || window.innerWidth);
    this.height = Math.max(240, rect.height || window.innerHeight);
    this.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    this.canvas.width =
      Math.floor(this.width * this.dpr);
    this.canvas.height =
      Math.floor(this.height * this.dpr);

    this.ctx.setTransform(
      this.dpr,
      0,
      0,
      this.dpr,
      0,
      0
    );

    if (this.map) {
      this.path = new RoutePath(
        (this.gameModeId === "reverse"
          ? [...this.map.path].reverse()
          : this.map.path
        ).map(([x, y]) => [
          x * this.width,
          y * this.height
        ]),
        Math.max(34, this.width * 0.055)
      );
    }
  }

  pointerPoint(event) {
    const rect =
      this.canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  render() {
    const ctx = this.ctx;

    ctx.clearRect(
      0,
      0,
      this.width,
      this.height
    );

    this.drawBackground(ctx);

    if (!this.map || !this.path) {
      this.drawIdleField(ctx);
      return;
    }

    this.drawMap(ctx);
    this.drawBuildZones(ctx);
    this.path.draw(ctx);
    this.drawTowers(ctx);
    this.drawHeroes(ctx);
    this.drawBloons(ctx);
    this.drawProjectiles(ctx);
    this.drawParticles(ctx);

    if (
      this.lastPointer.inside &&
      this.buildMode &&
      (this.pendingTower || this.pendingHero)
    ) {
      this.drawPlacementGhost(ctx);
    }

    if (this.selectedId) {
      this.drawSelectionRange(ctx);
    }
  }

  drawBackground(ctx) {
    const gradient =
      ctx.createLinearGradient(
        0,
        0,
        0,
        this.height
      );

    gradient.addColorStop(0, "#101b20");
    gradient.addColorStop(1, "#081016");

    ctx.fillStyle = gradient;
    ctx.fillRect(
      0,
      0,
      this.width,
      this.height
    );
  }

  drawIdleField(ctx) {
    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,.025)";
    for (
      let x = 0;
      x < this.width;
      x += 42
    ) {
      for (
        let y = 0;
        y < this.height;
        y += 42
      ) {
        ctx.fillRect(
          x + 1,
          y + 1,
          1,
          1
        );
      }
    }
    ctx.restore();
  }

  drawMap(ctx) {
    ctx.save();

    if (this.map.water) {
      ctx.fillStyle = "#0b3543";
      ctx.fillRect(
        this.width * 0.34,
        0,
        this.width * 0.25,
        this.height
      );

      ctx.strokeStyle =
        "rgba(100,220,255,.13)";
      ctx.lineWidth = 2;

      for (
        let y = 10;
        y < this.height;
        y += 26
      ) {
        ctx.beginPath();
        ctx.moveTo(
          this.width * 0.34,
          y
        );
        ctx.quadraticCurveTo(
          this.width * 0.46,
          y - 5,
          this.width * 0.59,
          y
        );
        ctx.stroke();
      }
    }

    ctx.fillStyle = "#183025";

    for (
      let x = 0;
      x < this.width;
      x += 76
    ) {
      for (
        let y = 0;
        y < this.height;
        y += 76
      ) {
        ctx.fillRect(
          x,
          y,
          75,
          75
        );
      }
    }

    ctx.restore();
  }

  drawBuildZones(ctx) {
    if (this.buildMode) {
      ctx.save();

      for (const zone of this.map.buildZones) {
        ctx.fillStyle =
          "rgba(95,230,167,.045)";
        ctx.strokeStyle =
          "rgba(95,230,167,.09)";
        ctx.lineWidth = 1;

        ctx.fillRect(
          zone.x * this.width,
          zone.y * this.height,
          zone.w * this.width,
          zone.h * this.height
        );

        ctx.strokeRect(
          zone.x * this.width,
          zone.y * this.height,
          zone.w * this.width,
          zone.h * this.height
        );
      }

      ctx.restore();
    }
  }

  drawTowers(ctx) {
    for (const tower of this.towers) {
      const selected =
        tower.id === this.selectedId;

      ctx.save();

      if (selected) {
        ctx.beginPath();
        ctx.arc(
          tower.x,
          tower.y,
          22,
          0,
          Math.PI * 2
        );
        ctx.fillStyle =
          "rgba(255,209,102,.12)";
        ctx.fill();
      }

      const hue =
        tower.config.category === "military"
          ? "#4f96d7"
          : tower.config.category === "magic"
            ? "#8f72d8"
            : tower.config.category === "support"
              ? "#4ca783"
              : "#c4a85e";

      ctx.fillStyle = hue;
      ctx.strokeStyle =
        selected ? "#ffd166" : "#111b22";
      ctx.lineWidth = selected ? 3 : 2;

      ctx.beginPath();
      ctx.arc(
        tower.x,
        tower.y,
        16,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.stroke();

      if (tower.ascended && tower.paragonData) {
        const points = 8;
        const auraColor = tower.paragonData.color;

        ctx.strokeStyle = auraColor;
        ctx.globalAlpha = 0.42;
        ctx.lineWidth = 2;

        for (let index = 0; index < points; index += 1) {
          const angle =
            (Math.PI * 2 * index) / points +
            this.clock * 0.7;

          const inner = 19;
          const outer =
            27 +
            Math.sin(this.clock * 2 + index) * 3;

          ctx.beginPath();
          ctx.moveTo(
            tower.x + Math.cos(angle) * inner,
            tower.y + Math.sin(angle) * inner
          );
          ctx.lineTo(
            tower.x + Math.cos(angle) * outer,
            tower.y + Math.sin(angle) * outer
          );
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(
          tower.x,
          tower.y,
          21,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = auraColor;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      ctx.fillStyle = "#0a0e12";
      ctx.font = "900 12px system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        tower.config.icon,
        tower.x,
        tower.y
      );

      ctx.restore();
    }
  }

  drawHeroes(ctx) {
    for (const hero of this.heroes) {
      const selected =
        hero.id === this.selectedId;

      ctx.save();

      ctx.fillStyle =
        hero.heroId === "volt"
          ? "#55ccff"
          : hero.heroId === "bramble"
            ? "#68d391"
            : hero.heroId === "forge"
              ? "#e3a04f"
              : "#e9ddff";

      ctx.strokeStyle =
        selected
          ? "#ffd166"
          : "#0a0f14";
      ctx.lineWidth =
        selected ? 3 : 2;

      ctx.beginPath();
      ctx.arc(
        hero.x,
        hero.y,
        18,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#10161c";
      ctx.font =
        "900 10px system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        hero.name[0],
        hero.x,
        hero.y
      );

      ctx.fillStyle = "#e8edf3";
      ctx.font =
        "800 9px system-ui";
      ctx.fillText(
        "Lv " + hero.level,
        hero.x,
        hero.y + 29
      );

      ctx.restore();
    }
  }

  drawBloons(ctx) {
    for (const bloon of this.bloons) {
      const point = bloon.position;
      const color =
        COLORS[bloon.type] ||
        "#fff";

      ctx.save();

      ctx.translate(
        point.x,
        point.y
      );

      const scale =
        bloon.data.boss
          ? 1.55
          : bloon.data.layer >= 12
            ? 1.22
            : 1;

      ctx.scale(
        scale,
        scale
      );

      ctx.fillStyle = color;
      ctx.strokeStyle =
        bloon.fortified
          ? "#f2d6a0"
          : "#0a0f12";
      ctx.lineWidth =
        bloon.fortified ? 3 : 1.5;

      ctx.beginPath();

      if (bloon.data.boss) {
        ctx.roundRect(
          -18,
          -13,
          36,
          26,
          8
        );
      } else if (bloon.data.layer >= 12) {
        ctx.ellipse(
          0,
          0,
          22,
          13,
          0,
          0,
          Math.PI * 2
        );
      } else {
        ctx.arc(
          0,
          0,
          8,
          0,
          Math.PI * 2
        );
      }

      ctx.fill();
      ctx.stroke();

      if (bloon.status.slow > 0) {
        ctx.strokeStyle =
          "rgba(100,210,255,.8)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(
          0,
          0,
          12,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      ctx.restore();

      const barWidth =
        bloon.data.boss
          ? 70
          : bloon.data.layer >= 12
            ? 36
            : 16;

      const healthFraction =
        clamp(
          bloon.health /
          bloon.maxHealth,
          0,
          1
        );

      ctx.fillStyle =
        "rgba(0,0,0,.5)";
      ctx.fillRect(
        point.x - barWidth / 2,
        point.y - (
          bloon.data.boss ? 34 : 17
        ),
        barWidth,
        3
      );

      ctx.fillStyle =
        "#63e6a7";
      ctx.fillRect(
        point.x - barWidth / 2,
        point.y - (
          bloon.data.boss ? 34 : 17
        ),
        barWidth * healthFraction,
        3
      );
    }
  }

  drawTraps(ctx) {
    if (!this.path) {
      return;
    }

    for (const trap of this.traps) {
      const point = this.path.at(trap.progress);

      ctx.save();
      ctx.translate(point.x, point.y);

      if (trap.type === "spike") {
        ctx.fillStyle = "#bbc8d1";
        ctx.strokeStyle = "#10171d";
        ctx.lineWidth = 1;

        for (let index = 0; index < 5; index += 1) {
          const offset = (index - 2) * 5;

          ctx.beginPath();
          ctx.moveTo(offset, 5);
          ctx.lineTo(offset + 3, -4);
          ctx.lineTo(offset + 6, 5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      } else {
        ctx.fillStyle = "#c86a4d";
        ctx.strokeStyle = "#25130f";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = "rgba(255,190,90,.75)";
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    }
  }

  drawProjectiles(ctx) {
    for (const projectile of this.projectiles) {
      ctx.save();

      ctx.fillStyle =
        projectile.color ||
        "#fff";

      ctx.beginPath();
      ctx.arc(
        projectile.x,
        projectile.y,
        projectile.radius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();
    }
  }

  drawParticles(ctx) {
    for (const particle of this.particles) {
      ctx.save();

      ctx.globalAlpha =
        clamp(
          particle.life /
          particle.maxLife,
          0,
          1
        );

      ctx.fillStyle =
        particle.color;

      ctx.fillRect(
        particle.x,
        particle.y,
        particle.size,
        particle.size
      );

      ctx.restore();
    }
  }

  drawSelectionRange(ctx) {
    const unit = this.selectedUnit();

    if (!unit) {
      return;
    }

    const radius =
      unit instanceof Tower
        ? unit.getAttackData().range
        : unit.attack.range;

    ctx.save();

    ctx.beginPath();
    ctx.arc(
      unit.x,
      unit.y,
      Math.min(
        radius,
        Math.max(
          this.width,
          this.height
        )
      ),
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      "rgba(255,209,102,.035)";
    ctx.fill();

    ctx.strokeStyle =
      "rgba(255,209,102,.25)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
  }

  drawPlacementGhost(ctx) {
    const config =
      TOWERS[this.pendingTower];

    if (!config && !this.pendingHero) {
      return;
    }

    const heroConfig = this.pendingHero
      ? HEROES.find((hero) => hero.id === this.pendingHero)
      : null;

    const radiusConfig = config || {
      base: {
        range: heroConfig?.attack.range || 120
      }
    };

    const legal =
      this.pendingHero
        ? this.canPlace(
            this.lastPointer.x,
            this.lastPointer.y,
            "sharpshooter"
          )
        : this.canPlace(
            this.lastPointer.x,
            this.lastPointer.y,
            this.pendingTower
          );

    const radius =
      radiusConfig.base.range;

    ctx.save();

    ctx.globalAlpha = 0.70;
    ctx.fillStyle =
      legal
        ? "rgba(95,230,167,.24)"
        : "rgba(255,107,107,.24)";
    ctx.strokeStyle =
      legal
        ? "rgba(95,230,167,.78)"
        : "rgba(255,107,107,.78)";

    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(
      this.lastPointer.x,
      this.lastPointer.y,
      16,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      this.lastPointer.x,
      this.lastPointer.y,
      radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle =
      legal
        ? "rgba(95,230,167,.035)"
        : "rgba(255,107,107,.035)";
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}
