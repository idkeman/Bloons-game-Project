/*
 * Named upgrade content for the 24 launch towers.
 * Names are original and communicate what the upgrade actually changes.
 */

export const UPGRADE_CONTENT = {
  dart: {
    0: [
      ['Splitpoint Tips', 'Sharper darts travel cleanly through two additional targets.'],
      ['Hardpoint Darts', 'Harder tips improve damage against dense layers.'],
      ['Razor Volley', 'Adds a second stream and larger pierce window.'],
      ['Drill Darts', 'Heavy projectiles punch through armored targets.'],
      ['Meteor Arsenal', 'Elite darts gain massive damage and boss pressure.']
    ],
    1: [
      ['Twin Loader', 'Faster chamber cycling creates a second firing stream.'],
      ['Hot Chamber', 'Attack speed improves after every completed volley.'],
      ['Focused Barrage', 'Critical hits become more reliable.'],
      ['Overclocked Loader', 'The firing cycle becomes dramatically faster.'],
      ['Hyper Volley', 'A sustained stream of high-precision critical fire.']
    ],
    2: [
      ['Long Sight', 'Extends the tower sight line.'],
      ['Guided Tips', 'Projectiles correct their course toward targets.'],
      ['Hunter Optics', 'Improves stealth detection and homing strength.'],
      ['Perfect Tracking', 'Projectiles bend sharply around corners.'],
      ['Predator Array', 'Extreme range and tracking against high-value targets.']
    ]
  },
  boomer: {
    0: [
      ['Balanced Blades', 'Booming discs hit harder and travel farther.'],
      ['Heavy Blades', 'Stronger discs gain additional pierce.'],
      ['Razor Boomer', 'Repeated hits accelerate crowd clearing.'],
      ['Cyclone Blades', 'Every disc can damage a wider group.'],
      ['Tempest Boomer', 'A high-powered blade storm tears through rushes.']
    ],
    1: [
      ['Twin Disc', 'Adds an additional returning blade.'],
      ['Hot Rotor', 'Throw recovery becomes faster.'],
      ['Centrifugal Core', 'Critical hits can chain to nearby targets.'],
      ['Overdrive Rotor', 'Massive attack-speed improvement.'],
      ['Infinite Spin', 'A relentless stream of precision boomerangs.']
    ],
    2: [
      ['Wide Arc', 'Increases attack radius.'],
      ['Crippling Cut', 'Blades begin slowing damaged enemies.'],
      ['Shock Return', 'Returning hits briefly stun targets.'],
      ['Gravity Cut', 'Control effects become stronger and last longer.'],
      ['Cyclone Master', 'Elite control plus multi-target chaining.']
    ]
  },
  bomb: {
    0: [
      ['Reinforced Shell', 'Explosions deal more damage to nearby layers.'],
      ['Armor Breaker', 'Bombs can crack armored layers.'],
      ['Fragment Core', 'Each blast throws secondary damage fragments.'],
      ['Siege Warhead', 'Large blasts hit heavy enemies much harder.'],
      ['Cataclysm Shell', 'Massive siege explosions dominate dense rounds.']
    ],
    1: [
      ['Quick Fuse', 'Bombs arm and fire faster.'],
      ['Cluster Fuse', 'Explosions produce extra fragments.'],
      ['Turbo Fuse', 'The launcher cycles rapidly.'],
      ['Rapid Salvo', 'Multiple bombs can be in flight at once.'],
      ['Warhead Cascade', 'A sustained barrage covers the entire combat zone.']
    ],
    2: [
      ['Concussion', 'Initial blasts disrupt enemies.'],
      ['Staggering Blast', 'Heavy targets can be briefly stunned.'],
      ['Deep Shock', 'Stun duration increases substantially.'],
      ['Crippling Shell', 'Control can affect entire clusters.'],
      ['Quake Cannon', 'Elite shockwaves stall even massive targets.']
    ]
  },
  sniper: {
    0: [
      ['Longshot Cartridge', 'Damage increases at long range.'],
      ['Armor-Piercing Round', 'Shots bypass much of enemy armor.'],
      ['Heavy Caliber', 'Large damage spike against heavy layers.'],
      ['Anti-Blimp Rifle', 'Heavy targets take substantial bonus damage.'],
      ['Titan Breaker', 'A precision rifle purpose-built for bosses.']
    ],
    1: [
      ['Quick Chamber', 'Reloads faster.'],
      ['Burst Chamber', 'Successful shots accelerate the next cycle.'],
      ['Focused Scope', 'Critical hits become more common.'],
      ['Master Scope', 'Critical damage and reliability rise sharply.'],
      ['Deadeye Protocol', 'Extremely powerful precision fire.']
    ],
    2: [
      ['Recon Scope', 'Improves target selection and visibility.'],
      ['Cold Sight', 'Shots slow their target.'],
      ['Crippling Sight', 'Heavy layers remain slowed after being hit.'],
      ['Hunter Scope', 'Marked targets become easier for all towers to damage.'],
      ['Global Marksman', 'The sniper can influence the whole defense.']
    ]
  },
  sub: {
    0: [
      ['Pressure Hull', 'Increase damage and resilience of the pulse cannon.'],
      ['Deep Charges', 'Attacks gain additional pierce.'],
      ['Torpedo Array', 'Heavy targets receive stronger torpedo hits.'],
      ['War Sub', 'Large underwater bursts punish grouped layers.'],
      ['Abyssal Fleet', 'Elite torpedoes and global heavy-target pressure.']
    ],
    1: [
      ['Twin Sonar', 'Attack cycle begins faster and detects more threats.'],
      ['Pulse Core', 'Sonar shots can chain between nearby targets.'],
      ['Chain Pulse', 'More jumps are possible per shot.'],
      ['Overcharge Pulse', 'Chain attacks become significantly stronger.'],
      ['Infinite Pulse', 'Elite chain lightning-like sonar attacks.']
    ],
    2: [
      ['Scout Sonar', 'Extends practical detection range.'],
      ['Stealth Radar', 'Reveals hidden enemies to nearby towers.'],
      ['Deep Scanner', 'Global detection begins influencing the defense.'],
      ['Abyss Scanner', 'Improves control and target acquisition globally.'],
      ['Ocean Eye', 'Permanent map-wide stealth awareness.']
    ]
  },
  ace: {
    0: [
      ['Wing Tips', 'Airborne projectiles gain better pierce.'],
      ['Formation Fire', 'Each attack releases more shots.'],
      ['Strike Formation', 'Heavy frontal volleys add area pressure.'],
      ['Sky Armada', 'Aircraft fire in coordinated patterns.'],
      ['Storm Squadron', 'Elite aerial saturation fire.']
    ],
    1: [
      ['Rapid Engines', 'Aircraft attack faster.'],
      ['Twin Payload', 'Adds secondary projectiles.'],
      ['Rocket Pods', 'Adds homing rockets.'],
      ['Heavy Payload', 'Rockets gain strong heavy-target bonuses.'],
      ['Orbital Squadron', 'Sustained high-density projectile patterns.']
    ],
    2: [
      ['Wide Flightpath', 'More map area falls inside effective range.'],
      ['Seeker Fins', 'Projectiles gain guidance.'],
      ['Hunter Rockets', 'Homing becomes sharply stronger.'],
      ['Precision Flight', 'Projectiles curve aggressively.'],
      ['Sky Oracle', 'Near-perfect projectile correction.']
    ]
  },
  wizard: {
    0: [
      ['Ember Bolt', 'Adds a damaging fire effect.'],
      ['Kindled Magic', 'Burns become stronger and last longer.'],
      ['Flame Wave', 'Fire attacks spread through groups.'],
      ['Phoenix Flame', 'Area fire burns large clusters.'],
      ['Inferno Ascendant', 'Massive magical flame pressure.']
    ],
    1: [
      ['Arcane Focus', 'Attack range increases.'],
      ['Twin Spell', 'Two spells can be released per cycle.'],
      ['Frost Sigil', 'Magic briefly freezes targets.'],
      ['Time Rune', 'Control lasts longer and spreads farther.'],
      ['Chronomancer', 'Elite magical control and rapid spell output.']
    ],
    2: [
      ['Mana Reservoir', 'More projectiles can be sustained.'],
      ['Seeking Orbs', 'Spells home toward targets.'],
      ['Spectral Orbs', 'Homing becomes stronger and more numerous.'],
      ['Void Tracking', 'Spells ignore difficult trajectories.'],
      ['Astral Storm', 'A screen-filling magical barrage.']
    ]
  },
  druid: {
    0: [
      ['Thorny Growth', 'Thorns gain damage.'],
      ['Bramble Core', 'Each volley gains more pierce.'],
      ['Wildfire Thorns', 'Thorns ignite targets.'],
      ['Ancient Grove', 'Natural attacks chain between enemies.'],
      ['Worldroot', 'Massive nature damage and crowd control.']
    ],
    1: [
      ['Fast Growth', 'Attack cycle accelerates.'],
      ['Twin Vines', 'More vines launch per cycle.'],
      ['Tempest Vines', 'Vines can chain to nearby targets.'],
      ['Storm Grove', 'Chain behavior becomes stronger.'],
      ['Verdant Tempest', 'A sustained storm of natural projectiles.']
    ],
    2: [
      ['Entangling Roots', 'Attacks slow targets.'],
      ['Deep Roots', 'Slow becomes stronger.'],
      ['Grasping Roots', 'Control affects more enemies.'],
      ['Ancient Roots', 'Root effects become persistent.'],
      ['Worldroot Prison', 'Elite area control.']
    ]
  },
  alchemist: {
    0: [
      ['Caustic Mix', 'Attacks weaken enemy defenses.'],
      ['Corrosive Flask', 'Debuffs become stronger.'],
      ['Acid Burst', 'Debuffs spread to nearby targets.'],
      ['Volatile Reagent', 'Marked enemies take substantially more damage.'],
      ['Transmutation', 'Extreme debuff amplification.']
    ],
    1: [
      ['Quick Brew', 'Throws flasks faster.'],
      ['Wide Brew', 'Flasks splash nearby targets.'],
      ['Batch Brew', 'Multiple nearby targets can be affected.'],
      ['Master Brewer', 'Buff and debuff coverage rises sharply.'],
      ['Grand Laboratory', 'Elite battlefield-wide chemistry.']
    ],
    2: [
      ['Metal Solvent', 'Improves armor penetration.'],
      ['Flash Solvent', 'Damage-over-time begins sooner.'],
      ['Deep Solvent', 'Heavy targets lose more protection.'],
      ['Absolute Solvent', 'Armor penetration approaches complete.'],
      ['Molecular Breaker', 'Elite armor-breaking chemistry.']
    ]
  },
  glue: {
    0: [
      ['Sticky Mix', 'Glue lasts longer.'],
      ['Strong Adhesive', 'Slow strength improves.'],
      ['Burning Adhesive', 'Glued targets take damage over time.'],
      ['Acid Adhesive', 'Glue and damage effects become intense.'],
      ['Eternal Adhesive', 'Elite persistent control.']
    ],
    1: [
      ['Wide Spray', 'Covers more targets.'],
      ['Fast Sprayer', 'Throws glue faster.'],
      ['Turbo Sprayer', 'Attack cycle becomes very fast.'],
      ['Storm Sprayer', 'Wide rapid coverage.'],
      ['Glue Hurricane', 'Nearly continuous control fire.']
    ],
    2: [
      ['Heavy Goo', 'Targets are slowed more.'],
      ['Freezing Goo', 'Control becomes stronger against dense rushes.'],
      ['Hardening Goo', 'Glued targets can be briefly stunned.'],
      ['Deep Freeze Goo', 'Stuns become more reliable.'],
      ['Absolute Goo', 'The strongest control layer in the roster.']
    ]
  },
  tack: {
    0: [
      ['Heavy Tacks', 'Tacks deal more damage.'],
      ['Jagged Tacks', 'Pierce increases.'],
      ['Razor Ring', 'More projectiles fire per cycle.'],
      ['Blade Ring', 'Attack output becomes enormous.'],
      ['Apocalypse Ring', 'A top-tier radial damage engine.']
    ],
    1: [
      ['Fast Throw', 'Cycle time decreases.'],
      ['Twin Throw', 'Adds more radial projectiles.'],
      ['Burst Throw', 'Tacks create micro-explosions.'],
      ['Storm Throw', 'High-speed area fire.'],
      ['Hyper Ring', 'Sustained radial projectile storm.']
    ],
    2: [
      ['Long Range', 'Slightly expands the ring radius.'],
      ['Sharpened Ring', 'Tacks become more reliable.'],
      ['Guided Tacks', 'Projectiles correct toward threats.'],
      ['Critical Ring', 'Critical hits become possible.'],
      ['Perfect Ring', 'Maximum consistency across dense waves.']
    ]
  },
  ice: {
    0: [
      ['Cold Front', 'Freeze effect lasts longer.'],
      ['Deep Freeze', 'Frozen targets remain slowed after thawing.'],
      ['Permafrost', 'Freeze damage improves.'],
      ['Glacier Pulse', 'Large freezing pulses cover the map area.'],
      ['Absolute Zero', 'Extreme freezing control.']
    ],
    1: [
      ['Chill Aura', 'Improves effective range.'],
      ['Ice Breaker', 'Attacks penetrate defenses better.'],
      ['Armor Shatter', 'Frozen targets lose most armor protection.'],
      ['Fracture Field', 'Area freezing becomes more damaging.'],
      ['Winter Engine', 'Elite control plus armor cracking.']
    ],
    2: [
      ['Cold Rain', 'Slow strength improves.'],
      ['Frost Web', 'Slow spreads farther.'],
      ['Snow Globe', 'Control affects groups more reliably.'],
      ['Polar Current', 'Slow remains effective on heavy layers.'],
      ['Endless Winter', 'A near-permanent area control field.']
    ]
  },
  prism: {
    0: [
      ['Prismatic Edge', 'Projectiles gain base damage.'],
      ['Split Prism', 'Beams become multiple projectiles.'],
      ['Spectrum Volley', 'Wide multi-angle fire.'],
      ['Refraction Storm', 'Projectiles bounce through clusters.'],
      ['Prismatic Cataclysm', 'Extreme multi-target damage.']
    ],
    1: [
      ['Quick Refraction', 'Attack cycle accelerates.'],
      ['Focused Spectrum', 'Critical chance improves.'],
      ['Chain Refraction', 'Projectiles can chain.'],
      ['Fractal Prism', 'Chains become dramatically longer.'],
      ['Infinite Spectrum', 'Elite chained precision fire.']
    ],
    2: [
      ['Long Lens', 'Extends range.'],
      ['Guided Spectrum', 'Prismatic shots home.'],
      ['True Spectrum', 'Projectiles ignore armor.'],
      ['Perfect Refraction', 'Critical and homing reliability rises.'],
      ['Aurora Array', 'Near-perfect map-wide precision.']
    ]
  },
  shadow: {
    0: [
      ['Balanced Blades', 'Shurikens gain damage.'],
      ['Sharp Shurikens', 'Pierce improves.'],
      ['Master Blades', 'High-output projectile fire.'],
      ['Shadow Barrage', 'Massive multi-shot volleys.'],
      ['Nightfall', 'An elite assassin-grade projectile engine.']
    ],
    1: [
      ['Quick Hands', 'Throw cycle speeds up.'],
      ['Twin Hands', 'Adds more shuriken.'],
      ['Critical Focus', 'Critical hits become common.'],
      ['Deadly Focus', 'Critical output rises sharply.'],
      ['Perfect Focus', 'Precision assassin fire reaches peak output.']
    ],
    2: [
      ['Smoke Veil', 'Improves concealment utility.'],
      ['Seeking Stars', 'Shurikens gain homing.'],
      ['Phantom Stars', 'Homing becomes stronger.'],
      ['Void Stars', 'Heavy targets become easier to track.'],
      ['Event Horizon', 'Elite stealth and seeking projectiles.']
    ]
  },
  corsair: {
    0: [
      ['Reinforced Cannons', 'Cannons deal more damage.'],
      ['Broadside', 'Adds more ship fire.'],
      ['Heavy Broadside', 'Cannons gain stronger heavy bonuses.'],
      ['Dreadnought', 'Broadside fire becomes devastating.'],
      ['Leviathan', 'An elite naval damage platform.']
    ],
    1: [
      ['Quick Deck', 'Faster reloads.'],
      ['Grape Shot', 'More projectiles per salvo.'],
      ['Merchant Deck', 'Attacks can generate extra cash.'],
      ['Treasure Fleet', 'Income chance increases.'],
      ['Golden Armada', 'Combat and economy reinforce each other.']
    ],
    2: [
      ['Reef Range', 'Improves range.'],
      ['Harpoon Tips', 'Projectiles gain pierce.'],
      ['Deep Harpoons', 'Heavy targets take bonus damage.'],
      ['Titan Harpoons', 'Strong heavy-target pressure.'],
      ['Ocean Spear', 'Elite long-range naval strikes.']
    ]
  },
  rotor: {
    0: [
      ['Hardened Rotors', 'Rotors deal more damage.'],
      ['Twin Rotors', 'Adds projectile density.'],
      ['Strike Rotor', 'Radial fire becomes more powerful.'],
      ['War Rotor', 'High-output aerial defense.'],
      ['Cyclone Engine', 'Extreme radial damage.']
    ],
    1: [
      ['Fast Rotor', 'Attack cycle speeds up.'],
      ['Dual Salvo', 'Adds additional projectile streams.'],
      ['Rapid Salvo', 'Attack output rises sharply.'],
      ['Overdrive Rotor', 'Near-continuous radial fire.'],
      ['Infinite Rotation', 'Extreme attack density.']
    ],
    2: [
      ['Wide Flight', 'Increases coverage.'],
      ['Smart Flight', 'Projectiles gain guidance.'],
      ['Seeker Flight', 'Homing becomes stronger.'],
      ['Precision Flight', 'Heavy targets are prioritized more effectively.'],
      ['Oracle Rotor', 'Elite tracking and coverage.']
    ]
  },
  mortar: {
    0: [
      ['Heavy Shell', 'Shell damage increases.'],
      ['Siege Shell', 'Area radius increases.'],
      ['Demolition Core', 'Heavy targets take more damage.'],
      ['Catapult Shell', 'Massive explosions clear dense waves.'],
      ['Siege Emperor', 'Extreme bombardment output.']
    ],
    1: [
      ['Quick Fuse', 'Shells land more quickly.'],
      ['Dual Fuse', 'Adds follow-up explosions.'],
      ['Concussion Core', 'Explosions stun targets.'],
      ['Shock Barrage', 'Stun effects become reliable.'],
      ['Earthshaker', 'Elite-wide concussion bombardment.']
    ],
    2: [
      ['Hot Powder', 'Adds damage over time.'],
      ['Burning Powder', 'Burn duration rises.'],
      ['Firestorm Powder', 'Burn spreads through clusters.'],
      ['Inferno Powder', 'Heavy burn damage persists.'],
      ['Apocalypse Powder', 'Extreme area damage over time.']
    ]
  },
  beast: {
    0: [
      ['Pack Instinct', 'Beasts gain base damage.'],
      ['Larger Pack', 'More companions join the fight.'],
      ['Alpha Pack', 'Beasts become stronger and faster.'],
      ['Primeval Pack', 'Heavy-target damage improves.'],
      ['Mythic Menagerie', 'A top-tier multi-beast combat force.']
    ],
    1: [
      ['Bonded Training', 'Companions attack faster.'],
      ['Coordinated Hunt', 'Companions focus the same target.'],
      ['Pack Tactics', 'Attacks combine for extra pierce.'],
      ['Apex Tactics', 'Heavy targets receive major focus fire.'],
      ['Perfect Pack', 'Near-synchronized elite attacks.']
    ],
    2: [
      ['Tracker Senses', 'Improves practical targeting.'],
      ['Titan Tracker', 'Heavy enemies are easier to pursue.'],
      ['Rending Claws', 'Improves heavy-layer damage.'],
      ['Colossus Hunter', 'Strong bonus against giant targets.'],
      ['Legendary Hunter', 'Elite heavy-target specialization.']
    ]
  },
  tide: {
    0: [
      ['Wave Spark', 'Water attacks deal more damage.'],
      ['Rolling Wave', 'Pulse radius increases.'],
      ['Breaker Wave', 'Heavy enemies take bonus damage.'],
      ['Maelstrom', 'Large area pulses dominate grouped waves.'],
      ['Oceanic Fury', 'Extreme water-based area damage.']
    ],
    1: [
      ['Quick Current', 'Faster pulse cycle.'],
      ['Twin Current', 'Multiple water shots can chain.'],
      ['Chain Current', 'More jumps per pulse.'],
      ['Storm Current', 'Longer chains and greater damage.'],
      ['Infinite Current', 'Elite chain-pressure engine.']
    ],
    2: [
      ['Cooling Current', 'Enemies are slowed.'],
      ['Deep Current', 'Slow becomes stronger.'],
      ['Undertow', 'Control affects more targets.'],
      ['Crushing Undertow', 'Heavy targets are strongly slowed.'],
      ['World Undertow', 'Extreme area control.']
    ]
  },
  outlaw: {
    0: [
      ['Heavy Revolver', 'Shots deal more damage.'],
      ['Long Barrel', 'Pierce and range improve.'],
      ['Sharpshooter Six', 'Critical shots become reliable.'],
      ['Deadly Revolver', 'High damage and precision.'],
      ['Last Word', 'A devastating elite sidearm.']
    ],
    1: [
      ['Fast Hands', 'Attack cycle speeds up.'],
      ['Double Fan', 'Additional shots per cycle.'],
      ['Quickdraw', 'Critical chance improves.'],
      ['Rapid Quickdraw', 'Extreme attack speed.'],
      ['Six Shooter', 'A relentless stream of precision fire.']
    ],
    2: [
      ['Bounty Sense', 'Improves cash generation.'],
      ['Marked Bounty', 'High-value targets generate more cash.'],
      ['Deep Bounty', 'Heavy enemies produce better returns.'],
      ['Grand Bounty', 'Cash generation becomes substantial.'],
      ['Treasure Law', 'Elite combat economy.']
    ]
  },
  farm: {
    0: [
      ['Solar Panels', 'Basic passive income begins.'],
      ['Expanded Plots', 'Farm income improves.'],
      ['Sun Vault', 'Stored value increases.'],
      ['Solar Empire', 'Much stronger periodic cash generation.'],
      ['Helios Reserve', 'Elite economy generation.']
    ],
    1: [
      ['Fast Harvest', 'Cash cycles arrive faster.'],
      ['Twin Harvest', 'Extra income per cycle.'],
      ['Market Stall', 'Adds a secondary income stream.'],
      ['Merchant Grid', 'Income scales strongly with time.'],
      ['Capital Engine', 'Elite compounding economy.']
    ],
    2: [
      ['Greenhouse', 'Improves passive efficiency.'],
      ['Watered Growth', 'Faster economic ramp.'],
      ['Super Orchard', 'Larger sustained income.'],
      ['Ancient Orchard', 'Strong late-game economy.'],
      ['World Orchard', 'Elite economic support.']
    ]
  },
  banana: {
    0: [
      ['Starter Lab', 'Improves basic cash generation.'],
      ['Automated Belts', 'Income is collected faster.'],
      ['Synthetic Yield', 'Every cycle pays more.'],
      ['Industrial Yield', 'Strong sustained cash generation.'],
      ['Infinite Yield', 'Elite industrial economy.']
    ],
    1: [
      ['Rapid Process', 'Economic production accelerates.'],
      ['Parallel Process', 'Adds multiple production streams.'],
      ['Batch Reactor', 'Production grows substantially.'],
      ['Fusion Reactor', 'Very strong late-game income.'],
      ['Singularity Reactor', 'Extreme passive economy.']
    ],
    2: [
      ['Auxiliary Markets', 'Small bonus to income.'],
      ['Market Network', 'Income scales with nearby economy.'],
      ['Global Market', 'All economic towers become more efficient.'],
      ['Market Engine', 'Strong map-wide economy support.'],
      ['Economic Singularity', 'Peak economic synergy.']
    ]
  },
  spike: {
    0: [
      ['Forged Spikes', 'Spikes deal more damage.'],
      ['Reinforced Spikes', 'Spikes gain extra pierce.'],
      ['Razor Carpet', 'More spike piles can be maintained.'],
      ['Titan Spikes', 'Piles last longer and hit harder.'],
      ['Bastion Carpet', 'Elite map coverage with immense pierce.']
    ],
    1: [
      ['Rapid Forge', 'Piles regenerate faster.'],
      ['Twin Forge', 'More piles are created per cycle.'],
      ['Hot Forge', 'Spike damage gains extra output.'],
      ['Storm Forge', 'Piles accumulate rapidly.'],
      ['Infinite Forge', 'Continuous defensive carpet generation.']
    ],
    2: [
      ['Long Grip', 'Piles remain on the lane longer.'],
      ['Deep Grip', 'Piles gain additional endurance.'],
      ['Anchored Spikes', 'Piles resist high pressure.'],
      ['Eternal Anchors', 'Huge defensive lifespan.'],
      ['Endless Carpet', 'Elite persistent lane denial.']
    ]
  },
  village: {
    0: [
      ['Supply Depot', 'Nearby towers gain extra pierce.'],
      ['Quartermaster', 'Support bonuses become stronger.'],
      ['Armory', 'Damage support improves.'],
      ['High Command', 'Powerful combined support aura.'],
      ['Supreme Bastion', 'Maximum combat support.']
    ],
    1: [
      ['Drill Yard', 'Attack speed support begins.'],
      ['Training Ground', 'Attack speed improves further.'],
      ['Elite Drills', 'Support speed becomes substantial.'],
      ['War College', 'Advanced global support.'],
      ['Command Nexus', 'Elite map-wide support.']
    ],
    2: [
      ['Watchtower', 'Stealth detection begins.'],
      ['Radar Beacon', 'Improves detection coverage.'],
      ['Networked Radar', 'Map-wide awareness.'],
      ['True Beacon', 'High-quality stealth support.'],
      ['Omni Beacon', 'Permanent elite detection network.']
    ]
  }
};
