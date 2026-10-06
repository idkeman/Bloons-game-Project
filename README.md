# Balloon Bastion

Balloon Bastion is an original browser tower-defense project built around the same *kind* of round-based strategy loop that makes modern lane TD games compelling: bloon-like layered enemies, deep three-path upgrades, crosspath limits, heroes, abilities, economy towers, bosses, scaling freeplay, and save data.

The old repository was a Java/JAR prototype. This version is a clean HTML/CSS/JavaScript + Canvas rebuild so it can run directly from GitHub Pages or a local browser.

## Controls

- **Mouse:** select/place towers
- **1 / 2 / 3:** buy the next Top / Middle / Bottom upgrade
- **E:** activate the selected tower/hero ability
- **Space:** start a round or pause a running round
- **F:** toggle fast speed
- **Esc:** cancel placement / clear selection
- **Delete:** sell the selected tower
- **Right-click:** cancel placement

## Included systems

- 4 original maps with multiple paths
- 24 tower variants with three independent 5-tier upgrade paths
- Crosspath restriction: once a path reaches Tier 3+, the other paths cannot exceed Tier 2
- 6 Heroes with XP-driven leveling
- Active abilities and global/area effects
- Stealth, armor, slowing, freezing, burn, knockback, chain attacks, explosions, and heavy bloons
- Round generation through 100 rounds and uncapped freeplay scaling
- Boss milestones including the round-100 Ruin Warden
- Passive economy, round income, farms, support auras, selling, and cost reduction
- Paragon conversion for three sacrificial Tier-5 towers
- Browser local save/load
- Responsive UI designed for desktop and Chromebook-sized screens
- No external libraries or proprietary game assets are required

## Run

Open \`index.html\` in a browser, or host the repository with any static web server.

## Design note

The project intentionally uses original names, geometry, visual effects, and data. It is a mechanics-focused homage rather than a distribution of Ninja Kiwi's proprietary BTD6 artwork, sounds, characters, maps, or source code.
