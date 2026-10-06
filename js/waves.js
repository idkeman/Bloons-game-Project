/*
 * Wave Director
 *
 * Converts declarative round profiles into a timed combat schedule.
 * This keeps wave composition separate from the engine's frame update loop.
 *
 * Concepts:
 * - opening: readable setup pressure;
 * - build: mixed formations;
 * - surge: short high-density pressure;
 * - recovery: deliberately lower density before an escalation;
 * - climax: bosses, escorts, or elite concentrations;
 * - tail: cleanup spawns.
 *
 * The director returns immutable spawn instructions. The engine owns the
 * actual Enemy objects and is therefore free to pause, speed up, skip, or replay.
 */

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function shuffled(entries, rng) {
  return rng ? rng.shuffle(entries) : [...entries].sort(() => Math.random() - 0.5);
}

function laneFor(index, laneCount, offset = 0) {
  return (index + offset) % Math.max(1, laneCount);
}

function scheduleBlock(schedule, spec, amount, start, spacing, laneCount, laneOffset, tag, weight = 1) {
  const safeAmount = Math.max(0, Math.floor(amount));
  for (let i = 0; i < safeAmount; i++) {
    schedule.push({
      at: start + i * spacing * weight,
      spec,
      pathIndex: laneFor(i, laneCount, laneOffset),
      tag
    });
  }
  return start + safeAmount * spacing * weight;
}

function interleaveBlocks(blocks) {
  const output = [];
  const cursors = blocks.map(() => 0);
  let active = true;

  while (active) {
    active = false;
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const cursor = cursors[i];
      if (cursor >= block.length) continue;
      active = true;
      output.push(block[cursor]);
      cursors[i] += 1;
    }
  }

  return output;
}

export const FORMATIONS = Object.freeze({
  opening: {
    label: "Opening",
    spacing: 0.72,
    laneSpread: 1
  },
  mixed: {
    label: "Mixed",
    spacing: 0.46,
    laneSpread: 2
  },
  rush: {
    label: "Surge",
    spacing: 0.22,
    laneSpread: 3
  },
  elite: {
    label: "Elite",
    spacing: 0.8,
    laneSpread: 1
  },
  boss: {
    label: "Boss Relay",
    spacing: 1.0,
    laneSpread: 1
  },
  recovery: {
    label: "Recovery",
    spacing: 0.66,
    laneSpread: 2
  }
});

export class WaveDirector {
  constructor({ round, paths, difficulty, challenge, rng }) {
    this.round = round;
    this.paths = Math.max(1, paths);
    this.difficulty = difficulty;
    this.challenge = challenge;
    this.rng = rng;
    this.schedule = this.buildSchedule();
    this.cursor = 0;
    this.elapsed = 0;
  }

  buildSchedule() {
    const schedule = [];
    const wave = this.round.wave;
    const profile = this.round.profile;
    const challenge = this.challenge?.id ?? "scout";
    const difficulty = this.difficulty ?? {};

    const speedPressure = difficulty.speedMul ?? 1;
    const rushPressure = challenge === "rush" ? 0.72 : 1;
    const stealthPressure = challenge === "stealth-heavy" ? 0.66 : 1;

    let time = 0.8;
    let laneOffset = wave % this.paths;

    const baseProfile = profile.filter((entry) => entry.amount > 0);
    const opening = baseProfile.find((entry) => entry.id === "scout");
    const earlyFast = baseProfile.find((entry) => entry.id === "runner");
    const armor = baseProfile.find((entry) => entry.id === "plated" || entry.id === "bruiser");
    const elites = baseProfile.filter((entry) => ["shielded","regenerator","siegebreaker","mirage","titan","voidwalker"].includes(entry.id));
    const bosses = baseProfile.filter((entry) => ["leviathan","overmind","monolith","apocalypse"].includes(entry.id));

    if (opening) {
      const amount = Math.max(2, Math.floor(opening.amount * 0.44));
      time = scheduleBlock(schedule, "scout", amount, time, FORMATIONS.opening.spacing, this.paths, laneOffset, "opening");
      laneOffset += 1;
    }

    if (earlyFast) {
      const amount = Math.max(1, Math.floor(earlyFast.amount * 0.60));
      time = scheduleBlock(schedule, "runner", amount, time + 0.3, FORMATIONS.mixed.spacing * rushPressure, this.paths, laneOffset, "speed");
      laneOffset += 1;
    }

    if (armor) {
      const amount = Math.max(1, Math.floor(armor.amount * 0.50));
      time = scheduleBlock(schedule, armor.id, amount, time + 0.4, FORMATIONS.elite.spacing, this.paths, laneOffset, "armor", 1 / Math.max(0.7, speedPressure));
    }

    const mixedBlocks = [];
    for (let i = 0; i < baseProfile.length; i++) {
      const entry = baseProfile[i];
      if (["scout","runner","bruiser","plated"].includes(entry.id)) continue;
      const amount = Math.max(1, Math.floor(entry.amount * (challenge === "stealth-heavy" && ["skimmer","phasebound","mirage"].includes(entry.id) ? 1.8 : 0.55)));
      const block = [];
      for (let k = 0; k < amount; k++) {
        block.push({
          at: time + k * FORMATIONS.mixed.spacing * stealthPressure,
          spec: entry.id,
          pathIndex: laneFor(k, this.paths, laneOffset + i),
          tag: "mixed"
        });
      }
      mixedBlocks.push(block);
    }

    if (mixedBlocks.length) {
      const merged = interleaveBlocks(mixedBlocks).sort((a,b) => a.at - b.at);
      schedule.push(...merged);
      time = Math.max(time, merged.at(-1)?.at ?? time) + 0.8;
    }

    const surgeCount = Math.max(0, Math.floor(wave * (challenge === "rush" ? 0.16 : 0.08)));
    if (surgeCount > 0) {
      const surgeSpec = wave % 7 === 0 ? "runner" : "scout";
      time = scheduleBlock(
        schedule,
        surgeSpec,
        surgeCount,
        time,
        FORMATIONS.rush.spacing * rushPressure,
        this.paths,
        laneOffset,
        "surge"
      );
      laneOffset += 1;
    }

    if (elites.length) {
      const eliteCount = Math.min(30, 1 + Math.floor(wave / 12));
      for (let i = 0; i < eliteCount; i++) {
        const entry = elites[i % elites.length];
        schedule.push({
          at: time + i * FORMATIONS.elite.spacing,
          spec: entry.id,
          pathIndex: laneFor(i, this.paths, laneOffset + 1),
          tag: "elite"
        });
      }
      time += eliteCount * FORMATIONS.elite.spacing + 1;
    }

    if (wave % 10 === 0) {
      const recoveryAmount = Math.max(2, Math.floor(wave * 0.16));
      time = scheduleBlock(
        schedule,
        "runner",
        recoveryAmount,
        time,
        FORMATIONS.recovery.spacing,
        this.paths,
        laneOffset + 2,
        "recovery"
      );
    }

    if (bosses.length) {
      for (let i = 0; i < bosses.length; i++) {
        const boss = bosses[i];
        schedule.push({
          at: time + i * 3,
          spec: boss.id,
          pathIndex: laneFor(i, this.paths, laneOffset + i),
          tag: "boss",
          boss: true
        });

        const escortTypes = ["siegebreaker","shielded","regenerator","titan","mirage"];
        for (let e = 0; e < Math.min(4, 1 + Math.floor(wave / 35)); e++) {
          const escort = escortTypes[(wave + i + e) % escortTypes.length];
          schedule.push({
            at: time + 0.7 + i * 3 + e * 0.42,
            spec: escort,
            pathIndex: laneFor(e + i, this.paths, laneOffset + 1),
            tag: "escort"
          });
        }
      }
      time += bosses.length * 3 + 2;
    }

    if (wave % 5 === 0 && wave < 120) {
      const reinforcementCount = Math.min(60, 4 + Math.floor(wave / 6));
      for (let i = 0; i < reinforcementCount; i++) {
        const candidates = shuffled(["scout","runner","skimmer","splitter"], this.rng);
        schedule.push({
          at: time + i * 0.25,
          spec: candidates[0],
          pathIndex: laneFor(i, this.paths, laneOffset),
          tag: "reinforcement"
        });
      }
      time += reinforcementCount * 0.25;
    }

    if (this.challenge?.special === "income-pressure") {
      for (let i = 0; i < Math.min(20, 3 + Math.floor(wave / 10)); i++) {
        schedule.push({
          at: time + i * 0.28,
          spec: i % 2 ? "runner" : "bruiser",
          pathIndex: laneFor(i, this.paths, laneOffset + 1),
          tag: "pressure"
        });
      }
    }

    schedule.sort((a, b) => a.at - b.at);
    return schedule.map((entry, index) => ({
      ...entry,
      sequence: index
    }));
  }

  reset() {
    this.cursor = 0;
    this.elapsed = 0;
  }

  advance(dt) {
    this.elapsed += Math.max(0, dt);
  }

  due() {
    const due = [];
    while (this.cursor < this.schedule.length && this.schedule[this.cursor].at <= this.elapsed) {
      due.push(this.schedule[this.cursor]);
      this.cursor += 1;
    }
    return due;
  }

  remaining() {
    return this.schedule.length - this.cursor;
  }

  complete() {
    return this.cursor >= this.schedule.length;
  }

  nextSpawnTime() {
    return this.schedule[this.cursor]?.at ?? Infinity;
  }

  totalDuration() {
    return this.schedule.length ? this.schedule[this.schedule.length - 1].at : 0;
  }

  progress() {
    const total = Math.max(0.01, this.totalDuration());
    return clamp(this.elapsed / total, 0, 1);
  }

  serialize() {
    return {
      round: this.round.wave,
      cursor: this.cursor,
      elapsed: this.elapsed
    };
  }

  restore(snapshot) {
    if (!snapshot) return false;
    if (snapshot.round !== this.round.wave) return false;
    this.cursor = clamp(Math.floor(snapshot.cursor ?? 0), 0, this.schedule.length);
    this.elapsed = Math.max(0, Number(snapshot.elapsed ?? 0));
    return true;
  }
}

export function makeWaveDirector(options) {
  return new WaveDirector(options);
}
