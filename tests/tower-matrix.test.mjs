import test from "node:test";
import assert from "node:assert/strict";

import { TOWERS, BLOONS } from "../src/data.js";
import { Tower } from "../src/entities.js";
import { getTowerAbility, activateTowerAbility } from "../src/tower_abilities.js";
import { canCreateParagon, PARAGONS } from "../src/paragons.js";

function makeGame() {
  const path = {
    at(progress) {
      return {
        x: progress * 1000,
        y: 300
      };
    }
  };

  const game = {
    gameMode: {
      abilityCooldownMultiplier: 1
    },
    map: {
      lives: 100
    },
    difficulty: {
      lives: 1
    },
    cash: 100000,
    lives: 100,
    towers: [],
    heroes: [],
    bloons: [],
    traps: [],
    path,
    trapsystem: {
      place(type, tower, progress) {
        const trap = {
          id: "test-trap-" + game.traps.length,
          type,
          progress,
          damage: tower.getAttackData().damage,
          pierce: 10,
          alive: true,
          hitIds: new Set(),
          triggerRadius: .014
        };
        game.traps.push(trap);
        return trap;
      }
    },
    addCash(amount) {
      game.cash += amount;
    },
    registerDamage() {}
  };

  for (const [index, type] of Object.keys(BLOONS).entries()) {
    game.bloons.push({
      id: "bloon-" + index,
      type,
      alive: true,
      health: 100000,
      maxHealth: 100000,
      progress: .50,
      radius: 8,
      data: BLOONS[type],
      position: {
        x: 500 + index,
        y: 300
      },
      takeDamage(amount) {
        const damage = Math.max(0, amount);
        this.health -= damage;
        const destroyed = this.health <= 0;
        if (destroyed) this.alive = false;
        return {damage,destroyed,blocked:null};
      },
      applySlow() {},
      applyStun() {},
      applyCorrosion() {},
      mark() {}
    });
  }

  return game;
}

test("every tower can construct attack data and a unique ability", () => {
  for (const [type, config] of Object.entries(TOWERS)) {
    const tower = new Tower({
      id: "tower-" + type,
      type,
      x: 100,
      y: 100,
      config
    });

    const attack = tower.getAttackData();
    const ability = getTowerAbility(type);

    assert.ok(Number.isFinite(attack.range));
    assert.ok(Number.isFinite(attack.attackSpeed));
    assert.ok(Number.isFinite(attack.pierce));
    assert.ok(ability.name);
    assert.ok(ability.description);
  }
});

test("every tower exposes five legal single-branch tiers", () => {
  for (const [type, config] of Object.entries(TOWERS)) {
    for (let path = 0; path < 3; path += 1) {
      const tower = new Tower({
        id: type + "-path-" + path,
        type,
        x: 0,
        y: 0,
        config
      });

      for (let tier = 1; tier <= 5; tier += 1) {
        const result =
          tower.buyUpgrade(
            path,
            tier,
            999999999
          );

        assert.equal(
          result.ok,
          true,
          type + " path " + path + " tier " + tier
        );
      }
    }
  }
});

test("every tower's active ability can execute against every enemy definition", () => {
  for (const [type, config] of Object.entries(TOWERS)) {
    const tower = new Tower({
      id: "ability-" + type,
      type,
      x: 500,
      y: 300,
      config
    });

    const game = makeGame();
    game.towers.push(tower);

    assert.doesNotThrow(() => {
      activateTowerAbility(
        game,
        tower
      );
    }, type + " ability should not throw");

    assert.ok(
      tower.abilityCooldown.remaining > 0,
      type + " ability should set cooldown"
    );
  }
});

test("every tower has a Paragon rule and three branch-specific Tier-5 sacrifices can qualify", () => {
  for (const [type, config] of Object.entries(TOWERS)) {
    const makeTower = (suffix, path) => {
      const tower = new Tower({
        id: type + "-paragon-" + suffix,
        type,
        x: 10 + suffix,
        y: 20,
        config
      });

      tower.pathLevels[path] = 5;
      return tower;
    };

    const valid = [
      makeTower(1, 0),
      makeTower(2, 1),
      makeTower(3, 2)
    ];

    const invalid = [
      makeTower(4, 0),
      makeTower(5, 0),
      makeTower(6, 0)
    ];

    assert.ok(PARAGONS[type]);

    assert.equal(
      canCreateParagon(
        valid,
        type
      ),
      true
    );

    assert.equal(
      canCreateParagon(
        invalid,
        type
      ),
      false
    );
  }
});