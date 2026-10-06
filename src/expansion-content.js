export const EXTRA_MAPS = {
  ruins: {
    id: 'ruins',
    name: 'Sunken Ruins',
    description: 'Two offset lanes with a narrow central crossing.',
    pathWidth: 44,
    scenery: 'ruins',
    paths: [
      [
        {x:-40,y:180},{x:180,y:180},{x:260,y:90},{x:460,y:90},
        {x:540,y:180},{x:720,y:180},{x:800,y:290},{x:1040,y:290},
        {x:1120,y:180},{x:1290,y:180}
      ],
      [
        {x:-40,y:640},{x:170,y:640},{x:250,y:730},{x:470,y:730},
        {x:560,y:640},{x:740,y:640},{x:820,y:530},{x:1040,y:530},
        {x:1130,y:640},{x:1290,y:640}
      ]
    ],
    buildZones: [
      {x:15,y:15,w:200,h:120},{x:300,y:12,w:170,h:70},{x:580,y:15,w:180,h:110},
      {x:900,y:18,w:230,h:100},{x:1080,y:330,w:170,h:150},{x:15,y:315,w:190,h:140},
      {x:315,y:300,w:180,h:120},{x:585,y:315,w:170,h:125},{x:880,y:330,w:170,h:130},
      {x:25,y:700,w:210,h:90},{x:340,y:735,w:170,h:65},{x:650,y:700,w:190,h:90}
    ]
  },

  orchard: {
    id: 'orchard',
    name: 'Copper Orchard',
    description: 'A long looping route with large safe farming pockets.',
    pathWidth: 48,
    scenery: 'orchard',
    paths: [[
      {x:-40,y:420},{x:150,y:420},{x:210,y:240},{x:430,y:240},
      {x:490,y:420},{x:650,y:420},{x:720,y:600},{x:930,y:600},
      {x:1000,y:420},{x:1290,y:420}
    ]],
    buildZones: [
      {x:20,y:25,w:180,h:175},{x:280,y:20,w:190,h:145},{x:555,y:20,w:190,h:160},
      {x:825,y:20,w:210,h:150},{x:1080,y:25,w:170,h:170},{x:25,y:580,w:180,h:150},
      {x:290,y:555,w:190,h:180},{x:555,y:610,w:180,h:130},{x:830,y:515,w:190,h:185},
      {x:1080,y:565,w:170,h:160}
    ]
  },

  icefield: {
    id: 'icefield',
    name: 'Shiver Field',
    description: 'A broad frozen circuit with long straight shots.',
    pathWidth: 50,
    scenery: 'ice',
    paths: [[
      {x:-40,y:300},{x:150,y:300},{x:260,y:150},{x:500,y:150},
      {x:610,y:300},{x:800,y:300},{x:910,y:150},{x:1130,y:150},
      {x:1240,y:300},{x:1290,y:300}
    ]],
    buildZones: [
      {x:10,y:20,w:190,h:110},{x:285,y:10,w:180,h:100},{x:560,y:25,w:180,h:105},
      {x:855,y:10,w:180,h:100},{x:1100,y:20,w:150,h:110},{x:15,y:470,w:200,h:180},
      {x:300,y:460,w:180,h:170},{x:585,y:465,w:180,h:170},{x:870,y:455,w:180,h:180},
      {x:1100,y:470,w:150,h:170}
    ]
  },

  foundry: {
    id: 'foundry',
    name: 'Iron Foundry',
    description: 'Industrial corridors create short but decisive target windows.',
    pathWidth: 54,
    scenery: 'foundry',
    paths: [
      [
        {x:-40,y:260},{x:180,y:260},{x:180,y:100},{x:430,y:100},
        {x:430,y:260},{x:700,y:260},{x:700,y:100},{x:970,y:100},
        {x:970,y:260},{x:1290,y:260}
      ]
    ],
    buildZones: [
      {x:15,y:470,w:180,h:180},{x:260,y:430,w:180,h:180},{x:515,y:455,w:170,h:170},
      {x:770,y:430,w:180,h:180},{x:1035,y:450,w:180,h:170},{x:30,y:15,w:120,h:80},
      {x:500,y:15,w:150,h:80},{x:1000,y:15,w:150,h:80}
    ]
  },

  coast: {
    id: 'coast',
    name: 'Storm Coast',
    description: 'A windy shoreline route with two exposed firing platforms.',
    pathWidth: 46,
    scenery: 'coast',
    paths: [
      [
        {x:-40,y:560},{x:170,y:560},{x:230,y:420},{x:420,y:420},
        {x:500,y:560},{x:690,y:560},{x:770,y:420},{x:960,y:420},
        {x:1040,y:560},{x:1290,y:560}
      ],
      [
        {x:-40,y:210},{x:150,y:210},{x:230,y:310},{x:400,y:310},
        {x:480,y:210},{x:680,y:210},{x:760,y:310},{x:930,y:310},
        {x:1010,y:210},{x:1290,y:210}
      ]
    ],
    buildZones: [
      {x:20,y:35,w:190,h:120},{x:320,y:20,w:180,h:120},{x:620,y:30,w:180,h:120},
      {x:940,y:30,w:180,h:120},{x:1100,y:360,w:150,h:120},{x:10,y:690,w:200,h:100},
      {x:310,y:690,w:180,h:100},{x:600,y:690,w:190,h:100},{x:900,y:680,w:190,h:110}
    ]
  },

  labyrinth: {
    id: 'labyrinth',
    name: 'Clockwork Labyrinth',
    description: 'Three staggered corridors force careful range placement.',
    pathWidth: 42,
    scenery: 'clockwork',
    paths: [
      [
        {x:-40,y:140},{x:180,y:140},{x:180,y:300},{x:410,y:300},
        {x:410,y:140},{x:640,y:140},{x:640,y:300},{x:870,y:300},
        {x:870,y:140},{x:1100,y:140},{x:1100,y:300},{x:1290,y:300}
      ],
      [
        {x:-40,y:670},{x:190,y:670},{x:190,y:520},{x:420,y:520},
        {x:420,y:670},{x:650,y:670},{x:650,y:520},{x:880,y:520},
        {x:880,y:670},{x:1110,y:670},{x:1110,y:520},{x:1290,y:520}
      ]
    ],
    buildZones: [
      {x:30,y:20,w:120,h:80},{x:280,y:20,w:120,h:80},{x:530,y:20,w:120,h:80},
      {x:780,y:20,w:120,h:80},{x:1030,y:20,w:120,h:80},{x:30,y:350,w:140,h:120},
      {x:300,y:350,w:140,h:120},{x:570,y:350,w:140,h:120},{x:840,y:350,w:140,h:120},
      {x:1110,y:350,w:120,h:120},{x:30,y:730,w:150,h:70},{x:420,y:730,w:150,h:70},
      {x:810,y:730,w:150,h:70},{x:1100,y:730,w:120,h:70}
    ]
  }
};

export const EXTRA_MODES = {
  alternate: {
    id: 'alternate',
    name: 'Alternate Pressure',
    description: 'Earlier armor and stealth, with different rush composition.',
    startCash: 650,
    startLives: 100,
    roundCap: 100,
    rules: { alternateBloons: true }
  },

  noSell: {
    id: 'noSell',
    name: 'No Resale',
    description: 'Placed towers cannot be sold.',
    startCash: 650,
    startLives: 100,
    roundCap: 100,
    rules: { noSell: true }
  },

  doubleRush: {
    id: 'doubleRush',
    name: 'Double Rush',
    description: 'Rounds contain roughly twice the incoming layers.',
    startCash: 800,
    startLives: 150,
    roundCap: 100,
    rules: { spawnMultiplier: 2 }
  },

  oneLife: {
    id: 'oneLife',
    name: 'One Life',
    description: 'A single leak ends the run.',
    startCash: 700,
    startLives: 1,
    roundCap: 100,
    rules: { oneLife: true }
  },

  bossGauntlet: {
    id: 'bossGauntlet',
    name: 'Boss Gauntlet',
    description: 'Every tenth round contains an additional heavy enemy.',
    startCash: 1200,
    startLives: 100,
    roundCap: 100,
    rules: { extraBosses: true }
  },

  endurance: {
    id: 'endurance',
    name: 'Endurance',
    description: 'Lower starting cash, but the campaign scales beyond round 100.',
    startCash: 450,
    startLives: 150,
    roundCap: 250,
    rules: { extendedCampaign: true }
  }
};
