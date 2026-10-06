const towerSeed = [
  ["sharpshooter","Sharpshooter","primary",200,"Dart","Single-target precision unit.",
   {range:155,attackSpeed:.82,damage:1,pierce:4,projectiles:1,speed:470},
   ["Deep Draw","Power Fletching","Triple Volley","Critical Tips","Storm Arrows"],
   ["Longbow","Split Shot","Ricochet","Storm Ring","Starfall"],
   ["Quick Hands","Pocket Change","Fast Draw","Twin Salvo","Royal Arsenal"]],
  ["boomer","Boomer Ranger","primary",320,"Boomer","Returning blade weapon.",
   {range:135,attackSpeed:1.2,damage:1,pierce:5,projectiles:1,speed:400,bounce:0},
   ["Heavy Blade","Hot Return","Bladed Cyclone","Rending Orbit","Infinite Orbit"],
   ["Wide Arc","Double Throw","Ricochet","Storm Ring","Sunwheel"],
   ["Grip Tape","Redirection","Rapid Spin","Turbo Loop","Hyper Loop"]],
  ["cannon","Blast Cannon","military",525,"Bomb","Area-damage launcher with stun and armor-breaking branches.",
   {range:145,attackSpeed:1.55,damage:3,pierce:18,projectiles:1,speed:350,splash:42},
   ["Dense Shell","Concussion","Cluster Payload","Heavy Ordnance","Meteor Shell"],
   ["Long Fuse","Bigger Blast","Stun Charge","Chain Reaction","Total Collapse"],
   ["Quick Loader","Salvage","Rapid Loader","Overclocked Breech","Auto Foundry"]],
  ["tack","Ember Sprayer","primary",300,"Tack","Radial short-range attacker.",
   {range:82,attackSpeed:1.0,damage:1,pierce:3,projectiles:8,speed:260,spread:Math.PI*2},
   ["Burning Tips","Cinder Ring","Flame Wall","Inferno Halo","Solar Furnace"],
   ["Extra Blades","Wide Ring","Disc Storm","Razor Bloom","Star Crown"],
   ["Fast Motor","Hot Oil","Spin Cycle","Fuel Injector","Perpetual Engine"]],
  ["frost","Frost Keeper","magic",380,"Frost","Freezes nearby enemies and can expose hidden units.",
   {range:105,attackSpeed:1.3,damage:1,pierce:999,projectiles:1,speed:0,slow:.25,slowTime:1.1},
   ["Colder Air","Deep Freeze","Permafrost","Absolute Zero","Glacial Prison"],
   ["Frozen Splinters","Shard Burst","Ice Lance","Winterstorm","Whiteout"],
   ["Radar Frost","Cold Snap","Reveal Field","Null Veil","Aurora Sight"]],
  ["glue","Resin Adept","primary",245,"Glue","Applies slowing and corrosive resin.",
   {range:125,attackSpeed:1.25,damage:0,pierce:5,projectiles:1,speed:390,slow:.3,slowTime:2.2},
   ["Sticky Mix","Thick Resin","Hardening Gel","Splitting Solvent","Meltdown Resin"],
   ["Long Arm","Dual Splash","Corrosive Drip","Acid Rain","Dissolving Field"],
   ["Pinning Glue","Tangle Trap","Full Stop","Time Sink","Temporal Resin"]],
  ["sniper","Rail Marksman","military",375,"Rifle","Global-range precision shooter.",
   {range:9999,attackSpeed:1.45,damage:2,pierce:1,projectiles:1,speed:0},
   ["Large Caliber","Anti-Armor","Heavy Impact","Rail Round","Worldbreaker"],
   ["Fast Scope","Faster Cycling","Semi Auto","Burst Rifle","Bullet Storm"],
   ["Supply Drop","Dividend Shot","Crate Network","War Economy","Treasury Command"]],
  ["sub","Tide Submersible","military",350,"Sub","Water-capable utility attacker.",
   {range:185,attackSpeed:1.15,damage:2,pierce:4,projectiles:2,speed:430},
   ["Twin Needles","Pressure Hull","Torpedo Bay","Depth Charge","Abyssal Spear"],
   ["Sonar Pulse","Advanced Sonar","Jamming Field","Blackout Net","Total Surveillance"],
   ["Eco Generator","Supply Current","Merchant Fleet","Trade Empire","Ocean Treasury"]],
  ["boat","Harbor Cruiser","military",550,"Boat","Rapid projectiles from a water-capable platform.",
   {range:155,attackSpeed:1.1,damage:2,pierce:7,projectiles:2,speed:420},
   ["Mercury Darts","Double Barrel","Aircraft Bay","Carrier Wing","Dreadnought"],
   ["Grapeshot","Hotshot","Flak Broadside","Incendiary Fleet","Hellfire Harbor"],
   ["Merchant Deck","Extra Cargo","Central Exchange","Trade Armada","Golden Port"]],
  ["ace","Sky Ace","military",700,"Ace","Circular flight pattern with directional volleys.",
   {range:220,attackSpeed:1.15,damage:1,pierce:5,projectiles:8,speed:430,spread:Math.PI*2},
   ["Twin Wings","Explosive Darts","Strafe Run","Fighter Wing","Air Superiority"],
   ["Long Flight","Sharper Turn","Centered Volley","Precision Flight","Perfect Formation"],
   ["Barrage Mix","Divergent Barrage","Ground Sweep","Infinite Barrage","Apocalypse Run"]],
  ["wizard","Arc Sage","magic",650,"Wizard","Magic attacker with elemental, summon, and teleport mechanics.",
   {range:170,attackSpeed:1.0,damage:2,pierce:6,projectiles:1,speed:390,homing:.05},
   ["Spark Bolt","Forked Arc","Arcstorm","Tempest Crown","Star Tempest"],
   ["Ember Soul","Fireball","Dragon Breath","Phoenix Pact","Eternal Phoenix"],
   ["Summoned Scout","Bat Swarm","Golem Guard","Necro Host","Soul Citadel"]],
  ["super","Solar Guardian","magic",2700,"Super","Expensive powerhouse with beam and orb attacks.",
   {range:190,attackSpeed:.09,damage:2,pierce:1,projectiles:2,speed:0},
   ["Focused Ray","Photon Beam","Solar Lance","Corona","Sunbreaker"],
   ["Orbital Shards","Dark Halo","Void Orbs","Event Horizon","Black Star"],
   ["Aegis Aura","Guardian Field","Power Field","Radiant Command","Astral Bastion"]],
  ["ninja","Shadow Operative","magic",500,"Ninja","Fast homing projectiles and debuffs.",
   {range:150,attackSpeed:.55,damage:1,pierce:3,projectiles:2,speed:560,homing:.08},
   ["Sharp Shuriken","Flash Bomb","Seeking Storm","Sabotage Net","Grandmaster Storm"],
   ["Smoke Screen","Caltrops","Sticky Bomb","Master Trap","Endless Ambush"],
   ["Countermove","Distraction","Decoy Army","Shadow Clone","Mirror Realm"]],
  ["alchemist","Catalyst Brewer","magic",550,"Brew","Buffs nearby allies and throws damaging mixtures.",
   {range:110,attackSpeed:1.6,damage:1,pierce:8,projectiles:1,speed:330,brew:true},
   ["Strong Formula","Acid Splash","Berserk Brew","Permanent Brew","Transmute Touch"],
   ["Larger Pot","Splash Potion","Cluster Flask","Volatile Mix","Catalytic Storm"],
   ["Lead Mixture","Metal Melt","Sticky Solvent","Aging Compound","Universal Solvent"]],
  ["village","Command Outpost","support",900,"Village","Support tower for detection, economy, and combat buffs.",
   {range:95,attackSpeed:2.2,damage:0,pierce:0,projectiles:0,speed:0,buffRange:.08},
   ["Larger Radius","Early Warning","Signal Beacon","Radar Grid","All-Seeing Grid"],
   ["Supply Depot","Market Stall","Trade Route","Central Bank","Capital Core"],
   ["Sharp Training","Combat Drill","Elite Training","Veteran Command","Supreme Command"]],
  ["druid","Storm Druid","magic",500,"Druid","Nature magic with area damage and growth.",
   {range:125,attackSpeed:1.15,damage:2,pierce:8,projectiles:1,speed:380},
   ["Thorn Burst","Lightning Seed","Wild Storm","Wrath Grove","Nature's Wrath"],
   ["Heartwood","Regrowth","Druidic Riches","Jungle Heart","World Tree"],
   ["Hard Vines","Entangle","Vine Prison","Bramble Maze","Living Fortress"]],
  ["spike","Spike Foundry","support",800,"Spike","Persistent track-control tower.",
   {range:9999,attackSpeed:1.6,damage:2,pierce:30,projectiles:8,speed:0,spike:true},
   ["Long Spikes","Heavy Spikes","Razor Bed","Perma Spikes","Infinite Razor"],
   ["Faster Factory","Double Pile","Triple Pile","Quad Plant","Mega Factory"],
   ["Smart Placement","Backdoor Bed","Perimeter Field","Track Control","Worldwide Bed"]],
  ["engineer","Tech Engineer","support",450,"Tech","Deploys traps, drones, and buffs.",
   {range:125,attackSpeed:1.0,damage:2,pierce:6,projectiles:1,speed:420},
   ["Pinpoint","Clever Traps","Sentry Line","Overclock Lab","Master Engineer"],
   ["Larger Service Zone","Recycling","Income Drone","Factory Drone","Industrial Complex"],
   ["Salvage","Cash Scrapper","Discount Network","Prototype Array","Quantum Workshop"]],
  ["mortar","Siege Mortar","military",800,"Mortar","Long-range artillery that targets a chosen location.",
   {range:9999,attackSpeed:2.1,damage:4,pierce:30,projectiles:1,speed:290,splash:48,artillery:true},
   ["Bigger Shell","Heavy Shell","Burning Ground","Shockwave Shell","Cataclysm"],
   ["Fast Loader","Rapid Loader","Precision Crew","Elite Crew","Perfect Barrage"],
   ["Signal Flare","Target Painter","Mapwide Marker","Command Fire","Orbital Marker"]]
];

function upgrade(pathName,tier,seed,pathIndex){
  const costs=[95,160,390,1250,6800];
  const archetypes=[
    {range:1.04,damage:1.2,pierce:1.35,attackSpeed:.92},
    {range:1.11,damage:1.12,pierce:1.55,attackSpeed:.95},
    {range:1.16,damage:1.06,pierce:1.2,attackSpeed:.78}
  ];
  const a=archetypes[pathIndex];
  const special=[
    {camo:tier>=2,lead:tier>=3,damageType:tier>=3?"energy":null},
    {splash:tier>=2?12+tier*6:0,bounce:tier>=3?tier-2:0,projectiles:tier>=4?2:1},
    {income:tier>=5?120:0,buffSpeed:tier>=4?.10:0}
  ][pathIndex];
  return {
    id:`${seed}-${pathIndex}-${tier}`,
    name:pathName,
    tier,
    path:pathIndex,
    cost:Math.round(costs[tier-1]*(1+pathIndex*.07+tier*.05)),
    description:`Tier ${tier} upgrade: expands the ${["offense","coverage","tempo/support"][pathIndex]} profile.`,
    modifiers:{range:a.range,damage:a.damage,pierce:a.pierce,attackSpeed:a.attackSpeed,...special}
  };
}

const TOWERS={};
for(const [id,name,category,cost,icon,description,base,p1,p2,p3] of towerSeed){
  TOWERS[id]={id,name,category,cost,icon,description,base:{...base,targetMode:"first"},targeting:["first","last","close","strong","weak"],paths:[p1.map((n,i)=>upgrade(n,i+1,id,0)),p2.map((n,i)=>upgrade(n,i+1,id,1)),p3.map((n,i)=>upgrade(n,i+1,id,2))]};
}

const HEROES=[
  {id:"nova",name:"Nova",cost:700,description:"Reliable ranged hero with escalating combat levels.",attack:{range:180,attackSpeed:.7,damage:2,pierce:5,speed:470},levels:["Twin shots","Improved focus","Piercing bolt","Rapid volley","Charged beam","Explosive marks","Heroic range","Nova burst","Overdrive","Supernova"]},
  {id:"bramble",name:"Bramble",cost:650,description:"Nature hero specializing in slows and area control.",attack:{range:130,attackSpeed:1.05,damage:2,pierce:9,speed:360,slow:.3},levels:["Root snare","Larger roots","Bramble burst","Wild growth","Deep roots","Thorn storm","Ancient grove","Verdant wave","World vine","Heart of the Grove"]},
  {id:"volt",name:"Volt",cost:850,description:"Lightning hero with chained attacks and timed overload.",attack:{range:160,attackSpeed:.8,damage:3,pierce:3,speed:0,bounce:2},levels:["Static spark","Long current","Chain jump","Charged pulse","Overload","Arcing storm","Voltage field","Thunderclap","Ion cascade","Tempest core"]},
  {id:"forge",name:"Forge",cost:900,description:"Mechanical hero that improves nearby towers.",attack:{range:120,attackSpeed:1.2,damage:2,pierce:5,speed:420},levels:["Repair kit","Toolbox","Efficient parts","Sentry helper","Factory helper","Boost node","Overclock","Assembly line","Battle foundry","Masterworks"]}
];

const DIFFICULTIES={
  easy:{name:"Easy",cash:1,lives:1,health:1,speed:1,description:"Generous economy and forgiving scaling."},
  normal:{name:"Normal",cash:.9,lives:1,health:1.05,speed:1.02,description:"Balanced default rules."},
  hard:{name:"Hard",cash:.82,lives:.75,health:1.35,speed:1.12,description:"Higher pressure and reduced economy."},
  extreme:{name:"Extreme",cash:.72,lives:.55,health:1.85,speed:1.24,description:"Severe enemy scaling."},
  impossible:{name:"Impossible",cash:.6,lives:.4,health:2.6,speed:1.42,description:"Punishing late-game rules."}
};

const MAPS=[
 {id:"meadow",name:"Sunlit Meadow",difficulty:1,description:"Open grassland with two bends and broad build zones.",startCash:650,lives:100,water:false,path:[[0,.46],[.16,.46],[.24,.30],[.43,.30],[.54,.60],[.76,.60],[.84,.42],[1,.42]],buildZones:[{x:.08,y:.08,w:.32,h:.22},{x:.30,y:.68,w:.22,h:.20},{x:.70,y:.10,w:.24,h:.20},{x:.80,y:.70,w:.17,h:.20}]},
 {id:"crossroads",name:"Four Corners",difficulty:2,description:"A crossing track rewards careful lane coverage.",startCash:650,lives:100,water:false,path:[[0,.22],[.25,.22],[.40,.48],[.25,.74],[.55,.74],[.70,.48],[.58,.22],[1,.22]],buildZones:[{x:.06,y:.40,w:.18,h:.18},{x:.38,y:.06,w:.22,h:.18},{x:.72,y:.40,w:.20,h:.18},{x:.38,y:.76,w:.22,h:.16}]},
 {id:"rivergate",name:"Rivergate",difficulty:3,description:"A river divides the map and creates natural deployment islands.",startCash:650,lives:90,water:true,waterZones:[{x:.34,y:0,w:.25,h:1}],path:[[0,.72],[.18,.72],[.28,.45],[.48,.45],[.60,.70],[.78,.70],[.88,.30],[1,.30]],buildZones:[{x:.05,y:.10,w:.28,h:.23},{x:.31,y:.58,w:.15,h:.20},{x:.54,y:.08,w:.22,h:.20},{x:.72,y:.48,w:.20,h:.18}]},
 {id:"switchback",name:"Switchback Ridge",difficulty:4,description:"Tight S-turns make short-range control valuable.",startCash:675,lives:90,water:false,path:[[0,.18],[.24,.18],[.24,.44],[.54,.44],[.54,.76],[.80,.76],[.80,.30],[1,.30]],buildZones:[{x:.03,y:.54,w:.16,h:.22},{x:.34,y:.10,w:.17,h:.18},{x:.66,y:.52,w:.15,h:.20},{x:.86,y:.08,w:.11,h:.17}]},
 {id:"harbor",name:"Harbor Loop",difficulty:5,description:"A shoreline with land and water deployment opportunities.",startCash:700,lives:100,water:true,waterZones:[{x:.28,y:.30,w:.36,h:.46}],path:[[0,.48],[.16,.48],[.27,.20],[.58,.20],[.78,.42],[.66,.76],[.36,.76],[.24,.56],[.46,.46],[1,.46]],buildZones:[{x:.03,y:.07,w:.18,h:.22},{x:.37,y:.06,w:.17,h:.12},{x:.72,y:.70,w:.20,h:.18},{x:.43,y:.54,w:.18,h:.16}]},
 {id:"quarry",name:"Granite Quarry",difficulty:6,description:"Long sight lines with a dangerous central choke.",startCash:800,lives:80,water:false,path:[[0,.78],[.20,.78],[.34,.52],[.46,.22],[.72,.22],[.82,.50],[1,.50]],buildZones:[{x:.06,y:.10,w:.20,h:.22},{x:.28,y:.63,w:.18,h:.18},{x:.55,y:.58,w:.15,h:.20},{x:.80,y:.10,w:.16,h:.18}]},
 {id:"labyrinth",name:"Labyrinth",difficulty:7,description:"Many corners and overlapping sight lines reward specialized targeting.",startCash:725,lives:85,water:false,path:[[0,.22],[.18,.22],[.18,.58],[.38,.58],[.38,.22],[.60,.22],[.60,.72],[.78,.72],[.78,.42],[1,.42]],buildZones:[{x:.02,y:.68,w:.14,h:.18},{x:.24,y:.02,w:.14,h:.16},{x:.44,y:.64,w:.13,h:.18},{x:.84,y:.62,w:.13,h:.17}]},
 {id:"crater",name:"Fallen Crater",difficulty:8,description:"A circular battlefield with an exposed central ring.",startCash:900,lives:100,water:false,path:[[0,.50],[.18,.50],[.25,.24],[.50,.12],[.76,.24],[.82,.50],[.76,.76],[.50,.88],[.25,.76],[.18,.50],[1,.50]],buildZones:[{x:.03,y:.05,w:.18,h:.18},{x:.38,y:.03,w:.20,h:.12},{x:.80,y:.05,w:.17,h:.18},{x:.40,y:.78,w:.20,h:.14}]}
];

const BLOONS={
 red:{id:"red",name:"Red",layer:1,health:1,speed:1,pips:1,reward:1},
 blue:{id:"blue",name:"Blue",layer:2,health:1,speed:1.12,pips:1,reward:1},
 green:{id:"green",name:"Green",layer:3,health:1,speed:1.24,pips:1,reward:1},
 yellow:{id:"yellow",name:"Yellow",layer:4,health:1,speed:1.5,pips:1,reward:1},
 pink:{id:"pink",name:"Pink",layer:5,health:1,speed:1.82,pips:1,reward:1},
 zebra:{id:"zebra",name:"Zebra",layer:6,health:2,speed:1.12,pips:2,reward:2,immune:["fire","frost"]},
 rainbow:{id:"rainbow",name:"Rainbow",layer:7,health:3,speed:1.22,pips:3,reward:3,children:["zebra","zebra"]},
 ceramic:{id:"ceramic",name:"Ceramic",layer:8,health:14,speed:.72,pips:6,reward:6,children:["rainbow","rainbow"]},
 metal:{id:"metal",name:"Metal",layer:9,health:18,speed:.62,pips:7,reward:8,immune:["physical"]},
 prism:{id:"prism",name:"Prism",layer:10,health:30,speed:.56,pips:9,reward:10,immune:["energy"]},
 blimp:{id:"blimp",name:"Titan",layer:12,health:180,speed:.36,pips:30,reward:30,children:["ceramic","ceramic","rainbow","rainbow"]},
 fortBlimp:{id:"fortBlimp",name:"Fortified Titan",layer:13,health:420,speed:.28,pips:55,reward:55,fortified:true,children:["ceramic","ceramic","ceramic","ceramic"]},
 dreadBlimp:{id:"dreadBlimp",name:"Dreadnought",layer:15,health:1300,speed:.22,pips:120,reward:120,fortified:true,children:["fortBlimp","ceramic","ceramic"]},
 bossTitan:{id:"bossTitan",name:"World Titan",layer:20,health:24000,speed:.16,pips:1000,reward:1000,boss:true,fortified:true,children:["dreadBlimp","dreadBlimp"]},
 bossSentinel:{id:"bossSentinel",name:"Void Sentinel",layer:22,health:70000,speed:.12,pips:2500,reward:2500,boss:true,fortified:true,children:["dreadBlimp","dreadBlimp","fortBlimp"]}
};

const GLOSSARY=[
 ["Target priority","A tower can prefer First, Last, Close, Strong, or Weak targets. The selector is part of the tower state."],
 ["Pierce","A projectile's remaining collision budget. Every accepted collision consumes at least one point."],
 ["Layered enemies","Outer enemy layers can split into smaller children at the same route position."],
 ["Hidden property","Hidden enemies reject attacks unless the tower has detection."],
 ["Fortified property","Fortified layers receive reduced incoming damage and can preserve that property in children."],
 ["Armor","Metal layers reject ordinary physical damage unless a tower has an armor-breaking effect."],
 ["Freeplay","After the normal round table, health, speed, and reward pressure continue scaling."],
 ["Crosspathing","Three upgrade branches can be mixed. Only one branch may reach Tier 5; secondary branches cap at Tier 2."],
 ["Hero XP","Heroes level from combat participation and can unlock a unique sequence of improvements."],
 ["Abilities","Active skills use their own cooldown and can temporarily change battlefield state."],
 ["Ascension","Three qualifying Tier 5 sacrifices plus cash can create a powerful late-game Ascendant."],
 ["Buff stacking","Support modifiers are applied through explicit fields rather than silently multiplying every stat."],
 ["Damage over time","Burn and corrosion remain active independently of projectile lifetime."],
 ["Round budget","Round composition is generated from a deterministic budget so the same seed produces the same encounter."],
 ["Boss phases","Boss thresholds can trigger special pacing, defense, and reward behavior."],
 ["Economy","Direct pops, round rewards, merchants, farms, and active abilities can all contribute cash."],
 ["Build mode","Pointer input becomes placement input and legal-space feedback is shown before committing a tower."],
 ["Multi-place","A tower can be repeatedly placed without leaving build mode while enough cash and map space remain."],
 ["Save snapshot","A versioned local snapshot contains the active map, cash, lives, towers, round, and progression metrics."]
];

export {TOWERS,HEROES,DIFFICULTIES,MAPS,BLOONS,GLOSSARY};
