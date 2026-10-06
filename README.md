# Monkey Frontier

Monkey Frontier is an original browser tower-defense game built as a deep systems project. It is inspired by the mechanics and design patterns of modern balloon-popping tower-defense games while using original names, original data, and programmatic visual effects.

## Runtime

The game runs directly in a modern browser.

- HTML5 Canvas for simulation rendering.
- Modern JavaScript modules for the simulation.
- CSS for the interface and responsive layouts.
- localStorage for versioned run saves and persistent progression.
- GitHub Pages compatible with no backend requirement.

## Architecture

The simulation is split into focused systems:

- `src/game.js`: lifecycle, state, placement, selection, snapshots, rendering, orchestration.
- `src/entities.js`: towers, layered enemies, projectiles, and entity state.
- `src/combat.js`: targeting, projectiles, hitscan, pierce, splash, bounce, and damage.
- `src/rounds.js`: deterministic round budgets, freeplay scaling, bosses, and round modifiers.
- `src/bosses.js`: data-driven boss phases.
- `src/traps.js`: persistent spike and mine fields.
- `src/placement.js`: land and water placement validation.
- `src/progression.js`: rank, experience, credits, achievements, and map records.
- `src/hero.js`: hero leveling, targeting, projectiles, and active abilities.
- `src/data.js`: tower roster, upgrades, maps, enemies, heroes, difficulty rules, and glossary.
- `src/save.js`: versioned local save persistence.
- `src/effects.js`: reusable status-effect primitives.

## Implemented systems

The current implementation includes:

- 26 original tower archetypes.
- Three five-tier upgrade branches per tower.
- Crosspath restrictions with one Tier-5 branch.
- First, Last, Close, Strong, and Weak targeting.
- Land and water placement rules.
- Multi-place build mode.
- Layered enemy splitting.
- Camo-style hidden enemies.
- Regeneration.
- Fortified enemies.
- Armor and damage-type checks.
- Pierce and multi-projectile attacks.
- Splash and bouncing attacks.
- Homing projectiles.
- Slow, stun, burn, corrosion, and mark effects.
- Persistent spike and mine traps.
- Hero XP and active abilities.
- Passive economy towers and support fields.
- Multi-phase bosses.
- Standard rounds and freeplay scaling.
- Five difficulty profiles.
- Eight original maps.
- Save snapshots and run continuation.
- Persistent progression and achievements.
- Unit/regression tests.
- Browser integration tests.
- GitHub Pages deployment configuration.

## Controls

- `B`: build mode.
- `M`: multi-place.
- `Q`: cycle target priority.
- `E`: activate the selected unit's ability.
- `S`: sell the selected tower.
- `1`, `2`, `3`: buy the next upgrade in the corresponding branch.
- `Space`: start a round or pause an active run.

Mouse and touch use Canvas pointer events.

## Testing

Static validation:

```bash
npm run syntax
```

Simulation/regression tests:

```bash
npm test
```

Browser integration test:

```bash
npm install --no-save playwright
npx playwright install --with-deps chromium
npm run browser-test
```

Full local check:

```bash
npm run check
```

CI runs syntax, simulation, and browser interaction tests on development/main pushes and pull requests targeting main.

## Design philosophy

The game is deliberately data-driven. Towers, upgrades, rounds, enemies, support systems, bosses, and maps should be extendable without turning the renderer into one giant conditional tree.

The goal is real system depth, not artificial line-count inflation. Repeated or generated filler code is not used just to make files longer.

## Copyright and assets

This repository uses original code, names, data, and programmatic visuals. It does not ship BTD6 proprietary artwork, audio, maps, or other expressive assets.

Whether a final work can be registered, and whether any particular implementation infringes another work, depends on the final contents and applicable law. This repository does not make a legal guarantee about copyright registration or infringement status.
