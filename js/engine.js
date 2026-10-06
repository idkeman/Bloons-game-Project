import { GAME, TOWERS, ENEMIES, MAPS, ROUNDS, ACHIEVEMENTS, getTower, getEnemy, getMap } from "./data.js";
import { loadSave, saveGame } from "./save.js";
import { playSound } from "./audio.js";

const TAU = Math.PI * 2;

function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function lerp(a, b, t) { return a + (b - a) * t; }
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function deepClone(value) { return JSON.parse(JSON.stringify(value)); }

class IdPool {
  constructor() { this.nextId = 1; }
  get() { return this.nextId++; }
}

class ParticleSystem {
  constructor() { this.items = []; }
  burst(x, y, color, count = 8, speed = 80) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * TAU;
      const magnitude = speed * (0.4 + Math.random());
      this.items.push({
        x, y,
        vx: Math.cos(angle) * magnitude,
        vy: Math.sin(angle) * magnitude,
        life: 0.35 + Math.random() * 0.45,
        age: 0,
        size: 1.5 + Math.random() * 3.5,
        color
      });
    }
  }
  update(dt) {
    for (const p of this.items) {
      p.age += dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vx *= Math.pow(0.04, dt);
      p.vy *= Math.pow(0.04, dt);
    }
    this.items = this.items.filter((p) => p.age < p.life);
  }
  draw(ctx) {
    for (const p of this.items) {
      const alpha = 1 - p.age / p.life;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size * 0.5, p.y - p.size * 0.5, p.size, p.size);
    }
    ctx.globalAlpha = 1;
  }
}

class SpatialIndex {
  constructor(cellSize = 100) {
    this.cellSize = cellSize;
    this.map = new Map();
  }
  clear() { this.map.clear(); }
  key(x, y) { return Math.floor(x / this.cellSize) + "," + Math.floor(y / this.cellSize); }
  insert(entity) {
    const key = this.key(entity.x, entity.y);
    const bucket = this.map.get(key) ?? [];
    bucket.push(entity);
    this.map.set(key, bucket);
  }
  queryCircle(x, y, radius) {
    const minX = Math.floor((x - radius) / this.cellSize);
    const maxX = Math.floor((x + radius) / this.cellSize);
    const minY = Math.floor((y - radius) / this.cellSize);
    const maxY = Math.floor((y + radius) / this.cellSize);
    const result = [];
    for (let gx = minX; gx <= maxX; gx++) {
      for (let gy = minY; gy <= maxY; gy++) {
        const bucket = this.map.get(gx + "," + gy);
        if (bucket) result.push(...bucket);
      }
    }
    return result;
  }
}

class Path {
  constructor(rawPoints, width = 34) {
    this.points = rawPoints.map((p) => ({ ...p }));
    this.width = width;
    this.segmentLengths = [];
    this.totalLength = 0;
    for (let i = 0; i < this.points.length - 1; i++) {
      const length = Math.hypot(this.points[i + 1].x - this.points[i].x, this.points[i + 1].y - this.points[i].y);
      this.segmentLengths.push(length);
      this.totalLength += length;
    }
  }
  sampleAt(distanceAlong) {
    let remaining = clamp(distanceAlong, 0, this.totalLength);
    for (let i = 0; i < this.segmentLengths.length; i++) {
      const length = this.segmentLengths[i];
      if (remaining <= length) {
        const t = length === 0 ? 0 : remaining / length;
        return {
          x: lerp(this.points[i].x, this.points[i + 1].x, t),
          y: lerp(this.points[i].y, this.points[i + 1].y, t),
          segment: i,
          progress: remaining
        };
      }
      remaining -= length;
    }
    const end = this.points[this.points.length - 1];
    return { x: end.x, y: end.y, segment: this.points.length - 2, progress: this.totalLength };
  }
}

class Enemy {
  constructor(game, spec, path, distanceAlong = 0, difficulty = { hpMul: 1, speedMul: 1 }) {
    this.id = game.ids.get();
    this.spec = spec;
    this.path = path;
    this.pathDistance = distanceAlong;
    this.speed = spec.speed * difficulty.speedMul;
    this.baseMaxHp = spec.hp * difficulty.hpMul * game.freeplayHpMultiplier();
    this.maxHp = this.baseMaxHp;
    this.hp = this.maxHp;
    this.radius = spec.radius;
    this.reward = Math.round(spec.reward * difficulty.incomeMul);
    this.damage = spec.damage;
    this.armor = spec.armor ?? 0;
    this.shield = spec.shield ?? 0;
    this.maxShield = this.shield;
    this.stealth = Boolean(spec.stealth);
    this.visible = !this.stealth;
    this.phase = spec.phase ?? 0;
    this.regen = spec.regen ?? 0;
    this.children = spec.children ?? [];
    this.cloneChance = spec.cloneChance ?? 0;
    this.boss = Boolean(spec.boss);
    this.color = spec.color;
    this.life = 1;
    this.effects = new Map();
    this.targetLock = null;
    this.hitFlash = 0;
    this.damageTaken = 0;
    this.dead = false;
    this.leaked = false;
    this.distanceTravelledAtSpawn = distanceAlong;
  }

  get progress() {
    return this.path.totalLength === 0 ? 0 : this.pathDistance / this.path.totalLength;
  }

  canBeTargetedBy(tower) {
    if (this.dead || this.leaked) return false;
    if (this.stealth && !tower.stats.stealthBypass) return false;
    return true;
  }

  addEffect(name, data) {
    const existing = this.effects.get(name);
    if (!existing) {
      this.effects.set(name, { ...data });
    } else {
      existing.duration = Math.max(existing.duration ?? 0, data.duration ?? 0);
      if (data.damage) existing.damage = Math.max(existing.damage ?? 0, data.damage);
      if (data.factor) existing.factor = Math.min(existing.factor ?? 1, data.factor);
    }
  }

  updateEffects(dt) {
    if (this.effects.size === 0) return;
    for (const [name, effect] of this.effects) {
      effect.duration -= dt;
      if (name === "burn" && effect.duration > 0) {
        effect.intervalTimer = (effect.intervalTimer ?? effect.interval ?? 0) - dt;
        if (effect.intervalTimer <= 0) {
          effect.intervalTimer += effect.interval ?? 0.5;
          this.takeDamage(effect.damage ?? 1, { armorBypass: 999, source: "burn" });
        }
      }
      if (effect.duration <= 0) this.effects.delete(name);
    }
  }

  getEffectiveSpeed() {
    let factor = 1;
    for (const effect of this.effects.values()) {
      if (effect.factor) factor *= effect.factor;
    }
    return Math.max(2, this.speed * factor);
  }

  takeDamage(rawDamage, meta = {}) {
    if (this.dead) return { damage: 0, killed: false };
    let damage = Math.max(0, rawDamage);
    const armorBypass = meta.armorBypass ?? 0;
    if (this.armor > armorBypass) {
      damage *= Math.max(0.05, 1 - (this.armor - armorBypass) * 0.035);
    }

    if (meta.resistancePierce) {
      damage *= 1 + meta.resistancePierce * 0.5;
    }

    if (this.shield > 0 && !meta.ignoreShield) {
      const absorbed = Math.min(this.shield, damage);
      this.shield -= absorbed;
      damage -= absorbed;
    }

    const applied = Math.min(this.hp, damage);
    this.hp -= applied;
    this.damageTaken += applied;
    this.hitFlash = 0.08;

    return { damage: applied, killed: this.hp <= 0 };
  }

  kill(reason = "destroyed") {
    if (this.dead) return [];
    this.dead = true;
    this.life = 0;
    const children = [];
    if (reason === "destroyed") {
      for (const id of this.children) children.push(id);
      if (Math.random() < this.cloneChance) children.push("mirage");
    }
    return children;
  }
}

class Projectile {
  constructor(game, source, target, stats) {
    this.id = game.ids.get();
    this.x = source.x;
    this.y = source.y;
    this.source = source;
    this.targetId = target?.id ?? null;
    this.stats = { ...stats };
    this.age = 0;
    this.life = 3;
    this.dead = false;
    this.color = source.spec.color;
    this.hitRadius = Math.max(5, source.stats.projectileSize * 1.4);
  }

  update(game, dt) {
    this.age += dt;
    if (this.age > this.life) {
      this.dead = true;
      return;
    }

    let target = game.enemies.get(this.targetId);
    if (!target || target.dead || target.leaked) {
      if (this.stats.retarget) target = game.findTarget(this.source, this.source.stats.targetMode);
      else target = null;
    }

    if (!target) {
      this.x += this.stats.velocityX * dt;
      this.y += this.stats.velocityY * dt;
      return;
    }

    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const distanceToTarget = Math.hypot(dx, dy);
    const speed = this.stats.speed ?? 500;

    if (distanceToTarget < speed * dt + this.hitRadius + target.radius) {
      this.x = target.x;
      this.y = target.y;
      this.impact(game, target);
      this.dead = true;
      return;
    }

    const inv = distanceToTarget > 0 ? 1 / distanceToTarget : 0;
    this.x += dx * inv * speed * dt;
    this.y += dy * inv * speed * dt;
  }

  impact(game, target) {
    const result = target.takeDamage(this.stats.damage, this.stats);
    this.source.totalDamage += result.damage;
    game.statsThisRun.damageDealt += result.damage;
    if (result.killed) this.source.killCount += 1;
    if (result.damage > 0) game.particles.burst(target.x, target.y, this.color, 3 + Math.min(8, this.stats.pierce ?? 0), 55);

    if (this.stats.slowFactor) {
      target.addEffect("slow", { factor: this.stats.slowFactor, duration: this.stats.slowDuration ?? 1 });
    }

    if (this.stats.dot) {
      target.addEffect("burn", {
        damage: this.stats.dot.damage,
        interval: this.stats.dot.interval ?? 0.5,
        duration: this.stats.dot.duration
      });
    }

    if (this.stats.rend) {
      target.addEffect("rend", { factor: this.stats.rend.factor, duration: this.stats.rend.duration });
    }

    if (this.stats.stunChance && Math.random() < this.stats.stunChance) {
      target.addEffect("stun", { factor: 0.01, duration: this.stats.stunDuration ?? 0.5 });
    }

    if (this.stats.split && result.killed) {
      game.spawnFragments(target, this.stats.split);
    }

    let remainingPierce = this.stats.pierce ?? 1;
    if (remainingPierce <= 0) remainingPierce = 1;
    if (remainingPierce > 1) {
      for (const nearby of game.spatial.queryCircle(target.x, target.y, this.stats.aoeRadius ?? 22 + remainingPierce * 2)) {
        if (nearby === target || nearby.dead || nearby.leaked) continue;
        if (!nearby.canBeTargetedBy(this.source)) continue;
        const splash = nearby.takeDamage(this.stats.splashDamage ?? this.stats.damage * 0.35, this.stats);
        this.source.totalDamage += splash.damage;
        game.statsThisRun.damageDealt += splash.damage;
        if (splash.killed) this.source.killCount += 1;
        remainingPierce -= 1;
        if (remainingPierce <= 0) break;
      }
    }
  }
}

class Tower {
  constructor(game, towerId, x, y) {
    this.id = game.ids.get();
    this.game = game;
    this.spec = getTower(towerId);
    this.x = x;
    this.y = y;
    this.pathLevels = [0, 0, 0];
    this.totalSpent = this.spec.cost;
    this.level = 0;
    this.targetMode = this.spec.targetMode ?? "first";
    this.attackTimer = 0.1;
    this.abilityCooldown = 0;
    this.effects = new Map();
    this.killCount = 0;
    this.totalDamage = 0;
    this.selected = false;
    this.active = true;
    this.apex = false;
    this.stats = this.computeStats();
  }

  computeStats() {
    const stats = {
      range: this.spec.range,
      damage: this.spec.damage,
      pierce: this.spec.pierce,
      attackCooldown: this.spec.attackCooldown,
      projectileSpeed: this.spec.projectileSpeed,
      projectileSize: this.spec.projectileSize,
      projectileKind: this.spec.projectileKind,
      projectileCount: 1,
      armorBypass: 0,
      stealthBypass: false,
      resistancePierce: 0,
      shieldBreak: 0,
      split: 0,
      bounce: 0,
      critChance: 0,
      critMultiplier: 2,
      executeThreshold: 0,
      buffDamage: 0,
      buffRange: 0,
      buffSpeed: 0,
      supportRange: 0,
      incomeBonus: 0,
      incomeRate: 0,
      revive: false,
      repairInterval: 0,
      repairAmount: 0,
      killCashEvery: 0,
      killCash: 0,
      ...this.spec
    };

    const pathCounts = [...this.pathLevels];
    const topTier = Math.max(...pathCounts);
    const topIndex = pathCounts.indexOf(topTier);
    for (let pathIndex = 0; pathIndex < 3; pathIndex++) {
      for (let tier = 0; tier < pathCounts[pathIndex]; tier++) {
        const upgrade = this.spec.paths[pathIndex][tier];
        if (!upgrade) continue;
        for (const [key, value] of Object.entries(upgrade.modifiers ?? {})) {
          if (key.endsWith("Mul")) {
            const baseKey = key.slice(0, -3);
            stats[baseKey] = (stats[baseKey] ?? 1) * value;
          } else if (typeof value === "boolean") {
            stats[key] = stats[key] || value;
          } else {
            stats[key] = (stats[key] ?? 0) + value;
          }
        }
      }
    }

    if (topTier >= 5) {
      stats.range += 8;
      stats.damage += 8;
    }

    // Support aura application is recalculated by Game.applyAuras().
    stats.attackCooldown = Math.max(0.08, stats.attackCooldown);
    stats.range = Math.max(10, stats.range);
    stats.damage = Math.max(0, stats.damage);
    stats.pierce = Math.max(0, stats.pierce);

    return stats;
  }

  pathLimitAllows(pathIndex) {
    const current = this.pathLevels[pathIndex];
    if (current >= 5) return false;
    const others = this.pathLevels.filter((_, i) => i !== pathIndex);
    if (current < 3 && others.some((value) => value >= 3)) return false;
    if (current >= 3 && others.some((value) => value >= 5)) return false;
    if (current === 4 && others.some((value) => value >= 4)) return false;
    return true;
  }

  upgrade(pathIndex) {
    if (!this.pathLimitAllows(pathIndex)) return { ok:false, reason:"Path restriction" };
    const tier = this.pathLevels[pathIndex];
    const upgrade = this.spec.paths[pathIndex][tier];
    if (!upgrade) return { ok:false, reason:"No upgrade" };
    if (this.game.cash < upgrade.cost) return { ok:false, reason:"Insufficient credits" };

    this.game.cash -= upgrade.cost;
    this.pathLevels[pathIndex] += 1;
    this.totalSpent += upgrade.cost;
    this.stats = this.computeStats();
    this.level += 1;
    playSound("upgrade");
    this.game.emit("towerUpgraded", this);
    this.game.recalculateAuras();
    return { ok:true, upgrade };
  }

  canCreateApex() {
    return this.pathLevels.every((level) => level >= 5) && !this.apex;
  }

  createApex() {
    if (!this.canCreateApex()) return { ok:false, reason:"Requires five upgrades on every branch" };
    if (this.game.cash < 25000) return { ok:false, reason:"Insufficient credits for Apex creation" };
    this.game.cash -= 25000;
    this.apex = true;
    this.level = 20;
    this.stats = {
      ...this.stats,
      damage: this.stats.damage * 2.2,
      pierce: this.stats.pierce + 30,
      range: this.stats.range + 50,
      attackCooldown: this.stats.attackCooldown * 0.42,
      projectileCount: Math.max(this.stats.projectileCount, 8),
      armorBypass: this.stats.armorBypass + 50,
      stealthBypass: true
    };
    this.game.save.statistics.apexCreated += 1;
    this.game.unlock("apex");
    playSound("apex");
    this.game.emit("towerApexed", this);
    return { ok:true };
  }

  sellValue() {
    return Math.floor(this.totalSpent * GAME.sellRatio);
  }

  attack() {
    const target = this.game.findTarget(this, this.stats.targetMode);
    if (!target) return;

    const count = Math.max(1, this.stats.projectileCount);
    for (let i = 0; i < count; i++) {
      const stats = {
        damage: this.stats.damage,
        pierce: Math.max(1, this.stats.pierce),
        speed: this.stats.projectileSpeed || 480,
        velocityX: Math.cos(i / count * TAU) * 70,
        velocityY: Math.sin(i / count * TAU) * 70,
        retarget: Boolean(this.stats.retarget),
        slowFactor: this.stats.slowFactor,
        slowDuration: this.stats.slowDuration,
        split: this.stats.split,
        stunChance: this.stats.stunChance,
        stunDuration: this.stats.stunDuration,
        armorBypass: this.stats.armorBypass,
        resistancePierce: this.stats.resistancePierce,
        dot: this.stats.dot,
        splashDamage: this.stats.damage * 0.45,
        aoeRadius: 24 + (this.stats.pierce ?? 0) * 1.2
      };
      this.game.projectiles.push(new Projectile(this.game, this, target, stats));
    }
    this.attackTimer = this.stats.attackCooldown;
    if (this.apex) this.game.particles.burst(this.x, this.y, this.spec.color, 2, 25);
  }

  update(dt) {
    this.attackTimer -= dt;
    this.abilityCooldown = Math.max(0, this.abilityCooldown - dt);
    if (this.attackTimer <= 0) this.attack();
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = true;
    this.save = loadSave();
    this.ids = new IdPool();
    this.particles = new ParticleSystem();
    this.spatial = new SpatialIndex(100);
    this.towers = [];
    this.enemies = new Map();
    this.projectiles = [];
    this.paths = [];
    this.currentMap = MAPS[0];
    this.currentDifficulty = "standard";
    this.currentChallenge = "scout";
    this.cash = GAME.startingCash;
    this.lives = GAME.startingLives;
    this.wave = 0;
    this.waveActive = false;
    this.paused = false;
    this.speed = 1;
    this.buildMode = false;
    this.multiPlace = false;
    this.deleteMode = false;
    this.showRanges = false;
    this.selectedTower = null;
    this.selectedBuildId = null;
    this.running = false;
    this.ended = false;
    this.lastTime = performance.now();
    this.accumulator = 0;
    this.frameCount = 0;
    this.fps = 0;
    this.fpsTimer = 0;
    this.totalTime = 0;
    this.waveTimer = 0;
    this.incomeTimer = 0;
    this.spawnQueue = [];
    this.waveClearTimer = 0;
    this.eventListeners = new Map();
    this.notifications = [];
    this.statsThisRun = {
      kills: 0, bosses: 0, leaks: 0, creditsEarned: 0,
      damageDealt: 0, towersPlaced: 0, towersSold: 0, wavesWon: 0
    };
    this.input = {
      pointerX: 0, pointerY: 0, worldX: 0, worldY: 0,
      down: false, draggingTower: false
    };
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.bindCanvas();
    this.startLoop();
  }

  on(event, listener) {
    const list = this.eventListeners.get(event) ?? [];
    list.push(listener);
    this.eventListeners.set(event, list);
  }

  emit(event, payload) {
    for (const listener of this.eventListeners.get(event) ?? []) listener(payload);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.width = Math.max(320, rect.width);
    this.height = Math.max(320, rect.height);
    this.canvas.width = Math.floor(this.width * dpr);
    this.canvas.height = Math.floor(this.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.camera = { x:0, y:0, scale:Math.min(this.width / 1100, this.height / 720) };
    this.rebuildPaths();
  }

  rebuildPaths() {
    const makePath = (points) => new Path(points.map((p) => ({ x:p.x * this.width, y:p.y * this.height })));
    this.paths = [makePath(this.currentMap.path)];
    if (this.currentMap.path2) this.paths.push(makePath(this.currentMap.path2));
  }

  bindCanvas() {
    this.canvas.addEventListener("pointermove", (event) => {
      const rect = this.canvas.getBoundingClientRect();
      this.input.pointerX = event.clientX - rect.left;
      this.input.pointerY = event.clientY - rect.top;
      this.input.worldX = this.input.pointerX;
      this.input.worldY = this.input.pointerY;
      if (this.input.draggingTower) this.emit("pointerPreview", this.getPlacementPreview());
    });
    this.canvas.addEventListener("pointerdown", (event) => {
      this.input.down = true;
      this.handlePointerDown(event);
    });
    this.canvas.addEventListener("pointerup", () => {
      this.input.down = false;
      this.input.draggingTower = false;
    });
    this.canvas.addEventListener("contextmenu", (event) => event.preventDefault());
  }

  startLoop() {
    const loop = (now) => {
      const elapsed = Math.min(0.1, (now - this.lastTime) / 1000);
      this.lastTime = now;
      this.frameCount += 1;
      this.fpsTimer += elapsed;
      if (this.fpsTimer >= 0.5) {
        this.fps = this.frameCount / this.fpsTimer;
        this.frameCount = 0;
        this.fpsTimer = 0;
        this.emit("fps", this.fps);
      }
      if (this.running && !this.paused && !this.ended) {
        const scaled = elapsed * this.speed;
        this.accumulator += scaled;
        while (this.accumulator >= GAME.tickCap) {
          this.update(GAME.tickCap);
          this.accumulator -= GAME.tickCap;
        }
      }
      this.render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  begin(config = {}) {
    this.currentMap = getMap(config.mapId ?? "greenway");
    this.currentDifficulty = config.difficultyId ?? "standard";
    this.currentChallenge = config.challengeId ?? "scout";
    this.cash = Math.round(GAME.startingCash * (config.startingCashMultiplier ?? 1));
    this.lives = Math.round((this.currentMap.startLives ?? GAME.startingLives) * (config.livesMultiplier ?? 1));
    this.wave = 0;
    this.waveActive = false;
    this.paused = false;
    this.speed = 1;
    this.running = true;
    this.ended = false;
    this.towers = [];
    this.enemies.clear();
    this.projectiles = [];
    this.spawnQueue = [];
    this.selectedTower = null;
    this.selectedBuildId = null;
    this.buildMode = false;
    this.multiPlace = false;
    this.deleteMode = false;
    this.totalTime = 0;
    this.incomeTimer = 0;
    this.statsThisRun = {
      kills: 0, bosses: 0, leaks: 0, creditsEarned: 0,
      damageDealt: 0, towersPlaced: 0, towersSold: 0, wavesWon: 0
    };
    this.rebuildPaths();
    this.save.statistics.runs += 1;
    this.emit("newRun", this);
    this.emit("toast", "Grid online. Deploy your first defense.");
    this.autoSave();
  }

  loadState(run) {
    this.currentMap = getMap(run.currentMapId ?? "greenway");
    this.currentDifficulty = run.currentDifficulty ?? "standard";
    this.currentChallenge = run.currentChallenge ?? "scout";
    this.cash = run.cash ?? GAME.startingCash;
    this.lives = run.lives ?? GAME.startingLives;
    this.wave = run.wave ?? 0;
    this.running = true;
    this.ended = false;
    this.waveActive = false;
    this.towers = (run.towers ?? []).map((data) => {
      const tower = new Tower(this, data.specId, data.x, data.y);
      tower.pathLevels = [...data.pathLevels];
      tower.totalSpent = data.totalSpent;
      tower.targetMode = data.targetMode;
      tower.apex = Boolean(data.apex);
      tower.stats = tower.computeStats();
      return tower;
    });
    this.rebuildPaths();
    this.emit("newRun", this);
    this.emit("toast", "Saved defense restored.");
  }

  serialize() {
    return {
      currentMapId: this.currentMap.id,
      currentDifficulty: this.currentDifficulty,
      currentChallenge: this.currentChallenge,
      cash: this.cash,
      lives: this.lives,
      wave: this.wave,
      towers: this.towers.map((tower) => ({
        specId: tower.spec.id,
        x: tower.x,
        y: tower.y,
        pathLevels: tower.pathLevels,
        totalSpent: tower.totalSpent,
        targetMode: tower.targetMode,
        apex: tower.apex
      }))
    };
  }

  autoSave() {
    saveGame({ ...this.save, currentRun: this.serialize() });
  }

  freeplayHpMultiplier() {
    return this.wave <= 100 ? 1 : Math.pow(1 + GAME.freeplayGrowth, this.wave - 100);
  }

  effectiveEnemySpec(spec, wave) {
    const difficultyFactor = this.currentDifficulty === "standard" ? 1
      : this.currentDifficulty === "veteran" ? 1.8
      : this.currentDifficulty === "nightmare" ? 3.2
      : this.currentDifficulty === "cataclysm" ? 6 : 0.8;
    const challenge = ["scout","rush","fortified","stealth-heavy","boss-heavy","income-pressure"].includes(this.currentChallenge)
      ? this.currentChallenge : "scout";
    const challengeHp = challenge === "fortified" ? 1.35 : challenge === "boss-heavy" ? (spec.boss ? 1.7 : 1.1) : 1;
    return {
      ...spec,
      hp: spec.hp * difficultyFactor * challengeHp,
      speed: spec.speed * (challenge === "rush" ? 1.12 : 1)
    };
  }

  startWave() {
    if (!this.running || this.ended || this.waveActive) return false;
    if (this.wave >= GAME.maxWave) return false;
    this.wave += 1;
    const profile = ROUNDS[this.wave - 1];
    this.waveActive = true;
    this.waveTimer = 0;
    this.waveClearTimer = 0;
    this.spawnQueue = [];
    for (const entry of profile.profile) {
      const spec = getEnemy(entry.id);
      for (let i = 0; i < entry.amount; i++) {
        this.spawnQueue.push({ spec, pathIndex: (i + this.wave) % this.paths.length });
      }
    }
    if (profile.boss) {
      playSound("boss");
      this.emit("toast", "ALERT: apex hostile signature detected.");
    } else {
      playSound("wave");
    }
    this.cash += Math.floor(profile.income * this.incomeMultiplier());
    this.statsThisRun.creditsEarned += profile.income;
    this.statsThisRun.wavesWon = this.wave - 1;
    this.save.statistics.creditsEarned += profile.income;
    this.emit("waveStarted", this.wave);
    this.autoSave();
    return true;
  }

  incomeMultiplier() {
    const difficulty = this.currentDifficulty === "apprentice" ? 1.15 : this.currentDifficulty === "veteran" ? 0.88 : this.currentDifficulty === "nightmare" ? 0.72 : this.currentDifficulty === "cataclysm" ? 0.58 : 1;
    return difficulty;
  }

  spawnEnemy(entry) {
    const path = this.paths[entry.pathIndex % this.paths.length];
    const enemy = new Enemy(this, this.effectiveEnemySpec(entry.spec, this.wave), path, 0, { hpMul:1, speedMul:1, incomeMul:this.incomeMultiplier() });
    if (entry.spec.boss) enemy.maxHp *= 1 + Math.max(0, this.wave - 25) * 0.035;
    enemy.hp = enemy.maxHp;
    this.enemies.set(enemy.id, enemy);
    return enemy;
  }

  spawnFragments(parent, count) {
    for (let i = 0; i < count; i++) {
      const candidate = getEnemy(i % 2 === 0 ? "runner" : "scout");
      const child = new Enemy(this, this.effectiveEnemySpec(candidate, this.wave), parent.path, Math.max(0, parent.pathDistance - 20 - i * 4), { hpMul:0.72, speedMul:1.08, incomeMul:0.55 });
      this.enemies.set(child.id, child);
    }
  }

  update(dt) {
    this.totalTime += dt;
    this.waveTimer += dt;
    this.incomeTimer += dt;

    if (this.incomeTimer >= 1) {
      const payoutIntervals = Math.floor(this.incomeTimer);
      this.incomeTimer -= payoutIntervals;
      let income = 0;
      for (const tower of this.towers) {
        income += (tower.stats.incomeRate ?? 0) * tower.totalSpent * payoutIntervals;
      }
      if (income > 0) {
        const payout = Math.floor(income);
        this.cash += payout;
        this.statsThisRun.creditsEarned += payout;
        this.save.statistics.creditsEarned += payout;
      }
    }

    let spawnBudget = 0;
    if (this.spawnQueue.length > 0) {
      spawnBudget = Math.min(5, Math.max(1, Math.floor(this.waveTimer * 3)));
      while (spawnBudget > 0 && this.spawnQueue.length > 0) {
        this.spawnEnemy(this.spawnQueue.shift());
        spawnBudget -= 1;
        this.waveTimer = Math.max(0, this.waveTimer - 0.32);
      }
    }

    this.spatial.clear();
    for (const enemy of this.enemies.values()) {
      if (!enemy.dead && !enemy.leaked) {
        enemy.updateEffects(dt);
        const sample = enemy.path.sampleAt(enemy.pathDistance);
        enemy.x = sample.x;
        enemy.y = sample.y;
        this.spatial.insert(enemy);
      }
    }

    for (const tower of this.towers) {
      if (!tower.active) continue;
      tower.update(dt);
    }

    for (const projectile of this.projectiles) {
      projectile.update(this, dt);
    }
    this.projectiles = this.projectiles.filter((p) => !p.dead);

    for (const enemy of this.enemies.values()) {
      if (enemy.dead || enemy.leaked) continue;
      if (enemy.effects.has("stun")) continue;
      enemy.pathDistance += enemy.getEffectiveSpeed() * dt;

      if (enemy.pathDistance >= enemy.path.totalLength) {
        this.leakEnemy(enemy);
        continue;
      }

      if (enemy.regen > 0 && enemy.shield <= 0) {
        enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.regen * dt);
      }

      if (enemy.phase > 0 && Math.sin(this.totalTime * 4 + enemy.id) > 0.87) {
        enemy.visible = false;
      } else {
        enemy.visible = true;
      }
      if (enemy.hitFlash > 0) enemy.hitFlash -= dt;
    }

    this.resolveDeaths();

    if (this.waveActive && this.spawnQueue.length === 0 && this.activeEnemyCount() === 0) {
      this.waveClearTimer += dt;
      if (this.waveClearTimer > 0.4) this.finishWave();
    }

    this.applyAuras(dt);
    this.particles.update(dt);
    this.updateNotifications(dt);
  }

  activeEnemyCount() {
    let count = 0;
    for (const enemy of this.enemies.values()) if (!enemy.dead && !enemy.leaked) count += 1;
    return count;
  }

  resolveDeaths() {
    for (const enemy of this.enemies.values()) {
      if (enemy.dead || enemy.leaked) continue;
      if (enemy.hp > 0) continue;

      const childIds = enemy.kill("destroyed");
      for (const childId of childIds) {
        const childSpec = getEnemy(childId);
        if (!childSpec) continue;
        const child = new Enemy(this, this.effectiveEnemySpec(childSpec, this.wave), enemy.path, Math.max(0, enemy.pathDistance - 8), { hpMul:1, speedMul:1.1, incomeMul:0.5 });
        this.enemies.set(child.id, child);
      }

      this.cash += enemy.reward;
      this.statsThisRun.kills += 1;
      this.statsThisRun.creditsEarned += enemy.reward;
      this.save.statistics.kills += 1;
      if (enemy.boss) {
        this.statsThisRun.bosses += 1;
        this.save.statistics.bosses += 1;
        this.unlock("boss");
      }
      this.particles.burst(enemy.x, enemy.y, enemy.color, enemy.boss ? 26 : 7, enemy.boss ? 180 : 60);
    }

    for (const [id, enemy] of this.enemies) {
      if (enemy.dead || enemy.leaked) {
        if (enemy.dead && this.totalTime % 1 < 0.05) this.enemies.delete(id);
      }
    }

    if (this.cash >= 1000000) this.unlock("million");
  }

  leakEnemy(enemy) {
    enemy.leaked = true;
    this.lives = Math.max(0, this.lives - enemy.damage);
    this.statsThisRun.leaks += 1;
    this.save.statistics.waves += 0;
    playSound("leak");
    this.particles.burst(enemy.x, enemy.y, "#ff6d82", enemy.boss ? 18 : 5, 70);
    this.emit("leak", enemy);
    if (this.lives <= 0) this.endRun(false);
  }

  finishWave() {
    this.waveActive = false;
    this.waveClearTimer = 0;
    this.statsThisRun.wavesWon = this.wave;
    this.save.statistics.waves = Math.max(this.save.statistics.waves, this.wave);
    if (this.wave >= 1) this.unlock("first-deploy");
    if (this.wave >= 10) this.unlock("ten-waves");
    if (this.wave >= 50) this.unlock("fifty-waves");
    if (this.wave >= 100) this.unlock("hundred-waves");
    if (this.statsThisRun.leaks === 0 && this.wave >= 25) this.unlock("no-leaks");
    this.emit("waveFinished", this.wave);
    this.autoSave();
    if (this.wave >= GAME.maxWave) this.endRun(true);
  }

  endRun(victory) {
    this.ended = true;
    this.waveActive = false;
    this.save.bank += Math.max(0, Math.floor(this.cash * 0.1));
    this.autoSave();
    playSound(victory ? "win" : "lose");
    this.emit("runEnded", { victory, wave: this.wave });
  }

  unlock(achievementId) {
    if (this.save.achievements[achievementId]) return;
    this.save.achievements[achievementId] = Date.now();
    this.emit("achievement", ACHIEVEMENTS.find((entry) => entry.id === achievementId));
    this.autoSave();
  }

  recalculateAuras() {
    this.applyAuras(0);
  }

  applyAuras() {
    for (const tower of this.towers) {
      tower.stats = tower.computeStats();
    }

    const supports = this.towers.filter((tower) => tower.spec.support);
    for (const support of supports) {
      const aura = Math.max(20, support.stats.range + support.stats.supportRange);
      for (const tower of this.towers) {
        if (tower === support || distance(support, tower) > aura) continue;
        tower.stats.range *= 1 + support.stats.buffRange;
        tower.stats.attackCooldown *= Math.max(0.18, 1 - support.stats.buffSpeed);
        tower.stats.damage *= 1 + support.stats.buffDamage;
      }
    }
  }

  findTarget(tower, mode) {
    const candidates = [];
    for (const enemy of this.enemies.values()) {
      if (!enemy.canBeTargetedBy(tower)) continue;
      if (!enemy.visible) continue;
      if (distance(tower, enemy) > tower.stats.range + enemy.radius) continue;
      candidates.push(enemy);
    }
    if (candidates.length === 0) return null;

    const compare = {
      first: (a,b) => b.progress - a.progress,
      last: (a,b) => a.progress - b.progress,
      strongest: (a,b) => b.hp - a.hp,
      weakest: (a,b) => a.hp - b.hp,
      close: (a,b) => distance(tower,a) - distance(tower,b),
      far: (a,b) => distance(tower,b) - distance(tower,a)
    }[mode] ?? ((a,b) => b.progress - a.progress);
    candidates.sort(compare);
    return candidates[0];
  }

  isBuildable(x, y, towerSpec) {
    if (x < towerSpec.footprint || y < towerSpec.footprint || x > this.width - towerSpec.footprint || y > this.height - towerSpec.footprint) return false;
    const mapPoint = { x:x / this.width, y:y / this.height };
    for (const zone of this.currentMap.blockedZones ?? []) {
      if (mapPoint.x >= zone.x && mapPoint.x <= zone.x + zone.w && mapPoint.y >= zone.y && mapPoint.y <= zone.y + zone.h) return false;
    }
    for (const path of this.paths) {
      for (const segment of this.segments(path)) {
        if (distanceToSegment({x,y}, segment.a, segment.b) < path.width * 0.65 + towerSpec.footprint) return false;
      }
    }
    for (const tower of this.towers) {
      if (distance({x,y}, tower) < tower.spec.footprint + towerSpec.footprint + 5) return false;
    }
    return true;
  }

  *segments(path) {
    for (let i = 0; i < path.points.length - 1; i++) {
      yield { a:path.points[i], b:path.points[i+1] };
    }
  }

  getPlacementPreview() {
    if (!this.selectedBuildId) return null;
    const spec = getTower(this.selectedBuildId);
    if (!spec) return null;
    return {
      x: this.input.worldX,
      y: this.input.worldY,
      valid: this.isBuildable(this.input.worldX, this.input.worldY, spec),
      spec
    };
  }

  handlePointerDown() {
    if (!this.running || this.ended) return;
    const x = this.input.worldX;
    const y = this.input.worldY;

    if (this.deleteMode) {
      const tower = this.towers.slice().reverse().find((candidate) => distance(candidate, {x,y}) < candidate.spec.footprint + 8);
      if (tower) this.sellTower(tower);
      return;
    }

    if (this.selectedBuildId) {
      const spec = getTower(this.selectedBuildId);
      if (spec && this.cash >= spec.cost && this.isBuildable(x, y, spec)) {
        const tower = new Tower(this, spec.id, x, y);
        this.towers.push(tower);
        this.cash -= spec.cost;
        this.save.statistics.towersPlaced += 1;
        this.statsThisRun.towersPlaced += 1;
        playSound("place");
        this.emit("towerPlaced", tower);
        if (!this.multiPlace) this.selectedBuildId = null;
      }
      return;
    }

    const clicked = this.towers.slice().reverse().find((tower) => distance(tower, {x,y}) <= tower.spec.footprint + 8);
    if (clicked) {
      this.selectTower(clicked);
      return;
    }

    this.selectTower(null);
  }

  selectTower(tower) {
    if (this.selectedTower) this.selectedTower.selected = false;
    this.selectedTower = tower;
    if (tower) tower.selected = true;
    this.emit("selection", tower);
  }

  selectBuild(towerId) {
    this.selectedBuildId = towerId;
    this.deleteMode = false;
    this.selectTower(null);
    this.emit("buildSelection", towerId);
  }

  toggleBuildMode() {
    this.buildMode = !this.buildMode;
    if (!this.buildMode) {
      this.multiPlace = false;
      this.deleteMode = false;
      this.selectedBuildId = null;
    }
    this.emit("mode", this);
  }

  toggleMultiPlace() {
    this.multiPlace = !this.multiPlace;
    if (!this.buildMode) this.buildMode = true;
    this.emit("mode", this);
  }

  toggleDeleteMode() {
    this.deleteMode = !this.deleteMode;
    if (this.deleteMode) {
      this.buildMode = true;
      this.selectedBuildId = null;
    }
    this.emit("mode", this);
  }

  sellTower(tower) {
    const index = this.towers.indexOf(tower);
    if (index < 0) return;
    const value = tower.sellValue();
    this.cash += value;
    this.towers.splice(index, 1);
    this.save.statistics.towersSold += 1;
    this.statsThisRun.towersSold += 1;
    if (this.selectedTower === tower) this.selectTower(null);
    playSound("sell");
    this.emit("towerSold", { tower, value });
  }

  setTargetMode(mode) {
    if (!this.selectedTower) return;
    this.selectedTower.targetMode = mode;
    this.emit("selection", this.selectedTower);
  }

  togglePause() {
    if (!this.running || this.ended) return;
    this.paused = !this.paused;
    this.emit("pause", this.paused);
  }

  cycleSpeed() {
    this.speed = this.speed === 1 ? 2 : this.speed === 2 ? 3 : 1;
    this.emit("speed", this.speed);
  }

  skipWave() {
    if (!this.waveActive) return;
    this.spawnQueue = [];
    for (const enemy of this.enemies.values()) {
      if (!enemy.dead && !enemy.leaked) enemy.hp = 0;
    }
    this.emit("toast", "Wave resolution forced.");
  }

  updateNotifications(dt) {
    for (const note of this.notifications) note.life -= dt;
    this.notifications = this.notifications.filter((note) => note.life > 0);
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    this.drawBackdrop(ctx);
    this.drawMap(ctx);
    this.drawTowers(ctx);
    this.drawEnemies(ctx);
    this.drawProjectiles(ctx);
    this.particles.draw(ctx);
    this.drawBuildPreview(ctx);
    this.drawNotifications(ctx);
  }

  drawBackdrop(ctx) {
    const theme = this.currentMap.theme;
    const gradient = ctx.createLinearGradient(0, 0, this.width, this.height);
    const colors = theme === "night" ? ["#0b1020","#15172a"] : theme === "industrial" ? ["#161c20","#252721"] : theme === "river" ? ["#091923","#142c31"] : theme === "spire" ? ["#1b1125","#11243a"] : ["#102015","#171d29"];
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.globalAlpha = 0.07;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    const grid = 48;
    for (let x = 0; x <= this.width; x += grid) {
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,this.height); ctx.stroke();
    }
    for (let y = 0; y <= this.height; y += grid) {
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(this.width,y); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  drawMap(ctx) {
    for (const zone of this.currentMap.blockedZones ?? []) {
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      const x = zone.x * this.width;
      const y = zone.y * this.height;
      const w = zone.w * this.width;
      const h = zone.h * this.height;
      ctx.fillRect(x,y,w,h);
      ctx.strokeRect(x,y,w,h);
    }

    for (const path of this.paths) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = path.width + 12;
      ctx.strokeStyle = "rgba(0,0,0,0.35)";
      this.strokePath(ctx, path);
      ctx.lineWidth = path.width;
      ctx.strokeStyle = "#343e49";
      this.strokePath(ctx, path);
      ctx.lineWidth = Math.max(1, path.width * 0.07);
      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      this.strokePath(ctx, path);
    }
  }

  strokePath(ctx, path) {
    ctx.beginPath();
    path.points.forEach((point, index) => index === 0 ? ctx.moveTo(point.x,point.y) : ctx.lineTo(point.x,point.y));
    ctx.stroke();
  }

  drawTowers(ctx) {
    for (const tower of this.towers) {
      if (this.showRanges && (tower.selected || this.towers.length < 12)) {
        ctx.beginPath();
        ctx.arc(tower.x, tower.y, tower.stats.range, 0, TAU);
        ctx.fillStyle = "rgba(107,208,255,0.05)";
        ctx.fill();
        ctx.strokeStyle = "rgba(107,208,255,0.18)";
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(tower.x, tower.y);
      if (tower.selected) {
        ctx.beginPath();
        ctx.arc(0, 0, tower.spec.footprint + 5, 0, TAU);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.fillStyle = tower.spec.color;
      ctx.globalAlpha = 0.18;
      ctx.beginPath();
      ctx.arc(0,0,tower.spec.footprint + 6,0,TAU);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#202b3d";
      ctx.beginPath();
      ctx.arc(0,0,tower.spec.footprint,0,TAU);
      ctx.fill();
      ctx.strokeStyle = tower.spec.color;
      ctx.lineWidth = tower.apex ? 3 : 2;
      ctx.stroke();
      ctx.fillStyle = tower.spec.color;
      ctx.font = "bold 9px system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(tower.spec.short, 0, 0);
      if (tower.level > 0) {
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = 0.8;
        ctx.font = "bold 8px system-ui";
        ctx.fillText(tower.pathLevels.join("-", ""), 0, tower.spec.footprint + 10);
      }
      ctx.restore();
    }
  }

  drawEnemies(ctx) {
    for (const enemy of this.enemies.values()) {
      if (enemy.dead || enemy.leaked || !enemy.visible) continue;
      ctx.save();
      ctx.translate(enemy.x, enemy.y);
      ctx.globalAlpha = enemy.hitFlash > 0 ? 1 : 0.94;
      ctx.fillStyle = enemy.color;
      ctx.beginPath();
      ctx.arc(0,0,enemy.radius,0,TAU);
      ctx.fill();
      if (enemy.armor > 0) {
        ctx.strokeStyle = "rgba(20,25,35,0.8)";
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      if (enemy.shield > 0) {
        ctx.strokeStyle = "rgba(107,208,255,0.85)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0,0,enemy.radius+4,0,TAU);
        ctx.stroke();
      }
      if (enemy.stealth) {
        ctx.strokeStyle = "rgba(180,185,255,0.8)";
        ctx.setLineDash([3,3]);
        ctx.beginPath();
        ctx.arc(0,0,enemy.radius+3,0,TAU);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      if (enemy.boss) {
        ctx.strokeStyle = "#ffcf76";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0,0,enemy.radius+7,0,TAU);
        ctx.stroke();
      }
      ctx.restore();

      const hpRatio = clamp(enemy.hp / enemy.maxHp, 0, 1);
      const shieldRatio = enemy.maxShield > 0 ? clamp(enemy.shield / enemy.maxShield, 0, 1) : 0;
      const barWidth = enemy.radius * 2.2;
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(enemy.x - barWidth/2, enemy.y - enemy.radius - 10, barWidth, 3);
      ctx.fillStyle = "#68e2a1";
      ctx.fillRect(enemy.x - barWidth/2, enemy.y - enemy.radius - 10, barWidth * hpRatio, 3);
      if (shieldRatio > 0) {
        ctx.fillStyle = "#6bd0ff";
        ctx.fillRect(enemy.x - barWidth/2, enemy.y - enemy.radius - 7, barWidth * shieldRatio, 2);
      }
    }
  }

  drawProjectiles(ctx) {
    for (const projectile of this.projectiles) {
      ctx.fillStyle = projectile.color;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, projectile.hitRadius * 0.65, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  drawBuildPreview(ctx) {
    const preview = this.getPlacementPreview();
    if (!preview) return;
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = preview.valid ? preview.spec.color : "#ff6d82";
    ctx.beginPath();
    ctx.arc(preview.x, preview.y, preview.spec.footprint, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = preview.valid ? "#ffffff" : "#ff6d82";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.globalAlpha = 0.12;
    ctx.beginPath();
    ctx.arc(preview.x, preview.y, preview.spec.range, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  drawNotifications(ctx) {
    const visible = this.notifications.slice(-4);
    let y = 24;
    for (const note of visible) {
      ctx.font = "600 12px system-ui";
      const width = ctx.measureText(note.text).width + 24;
      ctx.fillStyle = "rgba(12,16,23,0.85)";
      ctx.fillRect(14, y - 15, width, 26);
      ctx.fillStyle = "#edf2ff";
      ctx.fillText(note.text, 26, y);
      y += 31;
    }
  }

  notify(text) {
    this.notifications.push({ text, life: 3 });
    this.emit("toast", text);
  }
}

function distanceToSegment(point, a, b) {
  const vx = b.x - a.x;
  const vy = b.y - a.y;
  const wx = point.x - a.x;
  const wy = point.y - a.y;
  const c1 = wx * vx + wy * vy;
  if (c1 <= 0) return Math.hypot(point.x-a.x, point.y-a.y);
  const c2 = vx * vx + vy * vy;
  if (c2 <= c1) return Math.hypot(point.x-b.x, point.y-b.y);
  const t = c1 / c2;
  const px = a.x + t * vx;
  const py = a.y + t * vy;
  return Math.hypot(point.x-px, point.y-py);
}

export { Game, Tower, Enemy, Projectile, Path };
