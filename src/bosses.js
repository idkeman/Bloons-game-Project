const BOSS_PHASES = {
  bossTitan: [
    {
      threshold: 0.75,
      name: "Pressure Phase",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.15;
        game.emit("toast", {
          text: boss.data.name + ": pressure phase.",
          kind: "danger"
        });

        for (let i = 0; i < 2; i += 1) {
          game.spawnBloon("fortBlimp", {
            fortified: true
          });
        }
      }
    },
    {
      threshold: 0.50,
      name: "Reinforced Phase",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.25;
        boss.health = Math.min(
          boss.maxHealth,
          boss.health + boss.maxHealth * 0.04
        );

        game.emit("toast", {
          text: boss.data.name + ": reinforced phase.",
          kind: "danger"
        });

        game.spawnBloon("dreadBlimp", {
          fortified: true
        });
      }
    },
    {
      threshold: 0.25,
      name: "Final Phase",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.45;

        game.emit("toast", {
          text: boss.data.name + ": final phase.",
          kind: "danger"
        });

        for (const bloon of game.bloons) {
          if (!bloon.data.boss) {
            bloon.applySlow(0, 0);
          }
        }
      }
    }
  ],

  bossSentinel: [
    {
      threshold: 0.80,
      name: "Field Lock",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.08;

        for (const tower of game.towers) {
          tower.abilityCooldown.remaining =
            Math.max(
              tower.abilityCooldown.remaining,
              5
            );
        }

        game.emit("toast", {
          text: "Void Sentinel locked active abilities.",
          kind: "danger"
        });
      }
    },
    {
      threshold: 0.60,
      name: "Spawn Burst",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.18;

        for (let i = 0; i < 4; i += 1) {
          game.spawnBloon("ceramic", {
            fortified: true,
            camo: true
          });
        }

        game.emit("toast", {
          text: "Void Sentinel released a spawn burst.",
          kind: "danger"
        });
      }
    },
    {
      threshold: 0.40,
      name: "Overdrive",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.35;
        boss.health = Math.min(
          boss.maxHealth,
          boss.health + boss.maxHealth * 0.06
        );

        game.emit("toast", {
          text: "Void Sentinel entered overdrive.",
          kind: "danger"
        });
      }
    },
    {
      threshold: 0.20,
      name: "Collapse",
      onEnter(game, boss) {
        boss.dataPhaseSpeed = 1.60;

        for (let i = 0; i < 2; i += 1) {
          game.spawnBloon("dreadBlimp", {
            fortified: true,
            camo: true
          });
        }

        game.emit("toast", {
          text: "Void Sentinel: collapse phase.",
          kind: "danger"
        });
      }
    }
  ]
};

export class BossController {
  constructor(game) {
    this.game = game;
    this.seenPhases = new Map();
  }

  reset() {
    this.seenPhases.clear();
  }

  update() {
    for (const boss of this.game.bloons) {
      if (!boss.alive || !boss.data.boss) {
        continue;
      }

      const phases =
        BOSS_PHASES[boss.type] || [];

      if (!phases.length) {
        continue;
      }

      const healthFraction =
        boss.health /
        Math.max(1, boss.maxHealth);

      let phaseIndex = -1;

      for (let index = 0; index < phases.length; index += 1) {
        if (healthFraction <= phases[index].threshold) {
          phaseIndex = index;
        }
      }

      if (phaseIndex < 0) {
        boss.bossPhase = 0;
        continue;
      }

      const previous =
        this.seenPhases.get(boss.id) ?? -1;

      for (
        let index = previous + 1;
        index <= phaseIndex;
        index += 1
      ) {
        const phase = phases[index];

        phase.onEnter(
          this.game,
          boss
        );

        boss.bossPhase = index + 1;
        this.seenPhases.set(
          boss.id,
          index
        );
      }
    }
  }
}