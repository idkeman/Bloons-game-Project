export const CODEX = [
  {
    category: 'Layered Enemies',
    title: 'Outer Layers',
    body: 'An armored blimp is not a single permanent body. When a layer breaks, its internal bodies can enter the track. This turns pierce and splash into strategic resources rather than simple damage numbers.'
  },
  {
    category: 'Layered Enemies',
    title: 'RBE Thinking',
    body: 'Total cash and total life pressure are different measurements. A slow heavy enemy can be easier to target but still contain many smaller layers behind it.'
  },
  {
    category: 'Targeting',
    title: 'First Is Not Strong',
    body: 'First targeting prioritizes track progress, while Strong targeting prioritizes remaining health. A good defense often mixes both so one tower removes dangerous leading leaks while another focuses heavy layers.'
  },
  {
    category: 'Targeting',
    title: 'Close Can Be Technical',
    body: 'Range is a circle, but path progress is a distance-along-track measurement. A nearby enemy is not necessarily the one closest to the exit.'
  },
  {
    category: 'Crosspathing',
    title: 'Tier Gates',
    body: 'Three upgrade paths create combinatorial choices. Once one path reaches a high tier, the other paths are deliberately capped, preventing every tower from becoming a fully upgraded three-path unit.'
  },
  {
    category: 'Crosspathing',
    title: 'Why 5-2-0 Matters',
    body: 'A 5-2-0 unit is not just weaker than 5-5-0. Its second-path upgrades are chosen specifically because a high-tier primary path blocks the other high tiers.'
  },
  {
    category: 'Combat',
    title: 'Pierce Is A Resource',
    body: 'A projectile can deal huge damage to one enemy and still have poor wave clear. Pierce lets one projectile convert its travel path into multiple damage events.'
  },
  {
    category: 'Combat',
    title: 'Armor Versus Damage',
    body: 'Increasing damage and bypassing armor solve different problems. A tower that ignores armor can become valuable against a defensive layer even when its raw damage is lower.'
  },
  {
    category: 'Combat',
    title: 'Control Stacks',
    body: 'Slow, freeze, stun, and knockback affect time on track. Control becomes a form of indirect damage because it gives your other towers more attack opportunities.'
  },
  {
    category: 'Economy',
    title: 'Income Has Timing',
    body: 'A farm that pays late can be stronger than a smaller early payout when you can afford to survive the intermediate rounds. Economy is therefore constrained by both cashflow and defense timing.'
  },
  {
    category: 'Heroes',
    title: 'XP Is Not Cash',
    body: 'Hero progression can continue even when a hero does not directly land the finishing blow. A dedicated XP economy changes when an ability or level spike enters the strategy.'
  },
  {
    category: 'Bosses',
    title: 'Boss Geometry',
    body: 'Bosses are deliberately large collision targets. Large bodies create more reliable splash targeting while their high health turns damage uptime into the central challenge.'
  },
  {
    category: 'Freeplay',
    title: 'Post-Cap Scaling',
    body: 'After the intended round cap, the game can continue by scaling health and spawn pressure instead of requiring a second finite campaign.'
  },
  {
    category: 'Optimization',
    title: 'Attack Rate',
    body: 'Lower seconds-per-attack is better. A tower that attacks every 0.50 seconds can fire twice as often as a tower attacking every 1.00 second before other modifiers are considered.'
  },
  {
    category: 'Optimization',
    title: 'Splash Efficiency',
    body: 'Area attacks become stronger when targets are packed together. A radius effect is therefore especially valuable against long dense rushes and weaker against isolated targets.'
  },
  {
    category: 'Engineering',
    title: 'Data-Driven Towers',
    body: 'The game stores base tower definitions separately from behavior code. This allows balance values to change without duplicating the entire combat algorithm.'
  },
  {
    category: 'Engineering',
    title: 'Deterministic Tests',
    body: 'The regression suites create a browser-like environment without requiring the real canvas. This lets economic, upgrade, save, and wave rules be exercised in automation.'
  }
];

export function categories() {
  return [...new Set(CODEX.map(entry => entry.category))];
}

export function byCategory(category) {
  return CODEX.filter(entry => entry.category === category);
}
