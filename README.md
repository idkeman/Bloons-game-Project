# Skyfront Dominion

Skyfront Dominion is an original, browser-first tower defense project stored in this repository.

## Scope

This project deliberately uses original names, artwork, UI language, maps, enemy identities, and balancing. It is designed to explore the same broad *genre* of systems-heavy tower defense: lane routing, tower placement, targeting rules, layered upgrades, support auras, economy, bosses, late-game scaling, challenge modifiers, persistence, and a data-driven content registry.

It is **not** intended to reproduce any third-party game's copyrighted assets or expressive content.

## Current architecture

- \`index.html\` — application shell.
- \`css/style.css\` — responsive game UI.
- \`js/data.js\` — towers, enemies, maps, difficulties, challenges, achievements, rounds.
- \`js/engine.js\` — simulation, pathing, targeting, projectiles, effects, placement, rendering.
- \`js/ui.js\` — interaction and presentation.
- \`js/save.js\` — local persistence.
- \`js/audio.js\` — dependency-free Web Audio cues.
- \`tests/test.html\` + \`tests/test.js\` — browser regression checks.

## Current feature set

The first engine foundation already includes 20+ original towers, three five-tier upgrade branches per tower, cross-branch upgrade restrictions, targeting modes, support auras, layered enemies, armor, shields, stealth, phase visibility, regeneration, splitting, bosses, 150 generated rounds, freeplay scaling, five difficulties, challenge modifiers, achievement tracking, save/continue, a build mode, multi-place mode, deletion mode, a Canvas renderer, particles, and keyboard shortcuts.

## Development standard

The target quality bar for this repository is a maintainable, human-readable codebase. Prefer small modules, declarative data, deterministic formulas where possible, explicit state transitions, and tests around every new subsystem.

Run the browser data checks by opening \`tests/test.html\` in a static server or GitHub Pages deployment.

## Roadmap

The foundation is intentionally not being labeled feature-complete. The next development stages are:

1. deterministic combat/replay instrumentation;
2. complete status-effect registry and effect stacking rules;
3. tower ability framework;
4. hero-class units;
5. advanced economy and challenge rules;
6. map editor/runtime map schema;
7. projectile families and collision profiles;
8. mobile interaction pass;
9. balance simulation and statistical tests;
10. automated browser smoke tests;
11. save migration/versioning;
12. content expansion and accessibility;
13. performance profiling under large enemy counts;
14. production polish.

## Credits

Built from scratch as an original work for the \`idkeman/Bloons-game-Project\` repository.
