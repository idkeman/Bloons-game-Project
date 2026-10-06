/*
 * Round catalog
 *
 * Every entry is deliberately explicit so the campaign can be balanced round by round
 * instead of relying on a single opaque difficulty formula.
 */

export const ROUND_CATALOG = {
  1: {
    label: 'Round 1 — standard defense',
    difficulty: 1.0000,
    speed: 1.0000,
    density: 1,
    roundCash: 100.7,
    special: null,
    groups: [{type:'red',count:1,interval:0.18,scale:1}]
  },
  2: {
    label: 'Round 2 — standard defense',
    difficulty: 1.0105,
    speed: 1.0000,
    density: 1,
    roundCash: 101.3,
    special: null,
    groups: [{type:'red',count:1,interval:0.18,scale:1.0105}]
  },
  3: {
    label: 'Round 3 — standard defense',
    difficulty: 1.0210,
    speed: 1.0000,
    density: 2,
    roundCash: 102.0,
    special: null,
    groups: [{type:'red',count:2,interval:0.18,scale:1.021},{type:'blue',count:1,interval:0.168,scale:1.0772}]
  },
  4: {
    label: 'Round 4 — standard defense',
    difficulty: 1.0315,
    speed: 1.0000,
    density: 2,
    roundCash: 102.6,
    special: null,
    groups: [{type:'red',count:2,interval:0.18,scale:1.0315},{type:'blue',count:1,interval:0.168,scale:1.0882}]
  },
  5: {
    label: 'Round 5 — standard defense',
    difficulty: 1.0420,
    speed: 1.0000,
    density: 2,
    roundCash: 103.3,
    special: null,
    groups: [{type:'red',count:2,interval:0.18,scale:1.042},{type:'blue',count:1,interval:0.168,scale:1.0993},{type:'green',count:1,interval:0.156,scale:1.1566}]
  },
  6: {
    label: 'Round 6 — standard defense',
    difficulty: 1.0525,
    speed: 1.0000,
    density: 3,
    roundCash: 103.9,
    special: null,
    groups: [{type:'red',count:3,interval:0.18,scale:1.0525},{type:'blue',count:1,interval:0.168,scale:1.1104},{type:'green',count:1,interval:0.156,scale:1.1683}]
  },
  7: {
    label: 'Round 7 — standard defense',
    difficulty: 1.0630,
    speed: 1.0000,
    density: 3,
    roundCash: 104.5,
    special: null,
    groups: [{type:'red',count:3,interval:0.18,scale:1.063},{type:'blue',count:1,interval:0.168,scale:1.1215},{type:'green',count:1,interval:0.156,scale:1.1799}]
  },
  8: {
    label: 'Round 8 — standard defense',
    difficulty: 1.0735,
    speed: 1.0000,
    density: 3,
    roundCash: 105.2,
    special: null,
    groups: [{type:'red',count:3,interval:0.18,scale:1.0735},{type:'blue',count:1,interval:0.168,scale:1.1325},{type:'green',count:1,interval:0.156,scale:1.1916},{type:'yellow',count:1,interval:0.144,scale:1.2506}]
  },
  9: {
    label: 'Round 9 — standard defense',
    difficulty: 1.0840,
    speed: 1.0000,
    density: 4,
    roundCash: 105.8,
    special: null,
    groups: [{type:'red',count:4,interval:0.18,scale:1.084},{type:'blue',count:2,interval:0.168,scale:1.1436},{type:'green',count:1,interval:0.156,scale:1.2032},{type:'yellow',count:1,interval:0.144,scale:1.2629}]
  },
  10: {
    label: 'Early yellow pressure',
    difficulty: 1.0945,
    speed: 1.0000,
    density: 4,
    roundCash: 106.5,
    special: 'Early yellow pressure',
    groups: [{type:'red',count:4,interval:0.18,scale:1.0945},{type:'blue',count:2,interval:0.168,scale:1.1547},{type:'green',count:1,interval:0.156,scale:1.2149},{type:'yellow',count:1,interval:0.144,scale:1.2751}]
  },
  11: {
    label: 'Round 11 — standard defense',
    difficulty: 1.1050,
    speed: 1.0016,
    density: 4,
    roundCash: 107.2,
    special: null,
    groups: [{type:'red',count:4,interval:0.18,scale:1.105},{type:'blue',count:2,interval:0.168,scale:1.1658},{type:'green',count:1,interval:0.156,scale:1.2266},{type:'yellow',count:1,interval:0.144,scale:1.2873}]
  },
  12: {
    label: 'Round 12 — standard defense',
    difficulty: 1.1155,
    speed: 1.0032,
    density: 5,
    roundCash: 107.8,
    special: null,
    groups: [{type:'green',count:5,interval:0.18,scale:1.1155},{type:'yellow',count:2,interval:0.168,scale:1.1769},{type:'pink',count:1,interval:0.156,scale:1.2382}]
  },
  13: {
    label: 'Round 13 — standard defense',
    difficulty: 1.1260,
    speed: 1.0048,
    density: 5,
    roundCash: 108.5,
    special: null,
    groups: [{type:'green',count:5,interval:0.18,scale:1.126},{type:'yellow',count:2,interval:0.168,scale:1.1879},{type:'pink',count:1,interval:0.156,scale:1.2499}]
  },
  14: {
    label: 'Round 14 — standard defense',
    difficulty: 1.1365,
    speed: 1.0064,
    density: 5,
    roundCash: 109.1,
    special: null,
    groups: [{type:'green',count:5,interval:0.18,scale:1.1365},{type:'yellow',count:2,interval:0.168,scale:1.199},{type:'pink',count:1,interval:0.156,scale:1.2615}]
  },
  15: {
    label: 'Round 15 — standard defense',
    difficulty: 1.1470,
    speed: 1.0080,
    density: 6,
    roundCash: 109.8,
    special: null,
    groups: [{type:'green',count:6,interval:0.18,scale:1.147},{type:'yellow',count:3,interval:0.168,scale:1.2101},{type:'pink',count:2,interval:0.156,scale:1.2732}]
  },
  16: {
    label: 'Round 16 — standard defense',
    difficulty: 1.1575,
    speed: 1.0096,
    density: 6,
    roundCash: 110.4,
    special: null,
    groups: [{type:'green',count:6,interval:0.18,scale:1.1575},{type:'yellow',count:3,interval:0.168,scale:1.2212},{type:'pink',count:2,interval:0.156,scale:1.2848}]
  },
  17: {
    label: 'Round 17 — standard defense',
    difficulty: 1.1680,
    speed: 1.0112,
    density: 6,
    roundCash: 111.0,
    special: null,
    groups: [{type:'green',count:6,interval:0.18,scale:1.168},{type:'yellow',count:3,interval:0.168,scale:1.2322},{type:'pink',count:2,interval:0.156,scale:1.2965}]
  },
  18: {
    label: 'Round 18 — standard defense',
    difficulty: 1.1785,
    speed: 1.0128,
    density: 7,
    roundCash: 111.7,
    special: null,
    groups: [{type:'green',count:7,interval:0.18,scale:1.1785},{type:'yellow',count:3,interval:0.168,scale:1.2433},{type:'pink',count:2,interval:0.156,scale:1.3081}]
  },
  19: {
    label: 'Round 19 — standard defense',
    difficulty: 1.1890,
    speed: 1.0144,
    density: 7,
    roundCash: 112.3,
    special: null,
    groups: [{type:'green',count:7,interval:0.18,scale:1.189},{type:'yellow',count:3,interval:0.168,scale:1.2544},{type:'pink',count:2,interval:0.156,scale:1.3198}]
  },
  20: {
    label: 'First lead wall',
    difficulty: 1.1995,
    speed: 1.0160,
    density: 7,
    roundCash: 113.0,
    special: 'First lead wall',
    groups: [{type:'yellow',count:7,interval:0.18,scale:1.1995},{type:'pink',count:3,interval:0.168,scale:1.2655},{type:'black',count:2,interval:0.156,scale:1.3314},{type:'white',count:1,interval:0.144,scale:1.3974}]
  },
  21: {
    label: 'Round 21 — standard defense',
    difficulty: 1.2100,
    speed: 1.0176,
    density: 8,
    roundCash: 113.7,
    special: null,
    groups: [{type:'yellow',count:8,interval:0.18,scale:1.21},{type:'pink',count:4,interval:0.168,scale:1.2765},{type:'black',count:2,interval:0.156,scale:1.3431},{type:'white',count:2,interval:0.144,scale:1.4097}]
  },
  22: {
    label: 'Round 22 — standard defense',
    difficulty: 1.2205,
    speed: 1.0192,
    density: 8,
    roundCash: 114.3,
    special: null,
    groups: [{type:'yellow',count:8,interval:0.18,scale:1.2205},{type:'pink',count:4,interval:0.168,scale:1.2876},{type:'black',count:2,interval:0.156,scale:1.3548},{type:'white',count:2,interval:0.144,scale:1.4219}]
  },
  23: {
    label: 'Round 23 — standard defense',
    difficulty: 1.2310,
    speed: 1.0208,
    density: 8,
    roundCash: 115.0,
    special: null,
    groups: [{type:'yellow',count:8,interval:0.18,scale:1.231},{type:'pink',count:4,interval:0.168,scale:1.2987},{type:'black',count:2,interval:0.156,scale:1.3664},{type:'white',count:2,interval:0.144,scale:1.4341}]
  },
  24: {
    label: 'Round 24 — standard defense',
    difficulty: 1.2415,
    speed: 1.0224,
    density: 9,
    roundCash: 115.6,
    special: null,
    groups: [{type:'yellow',count:9,interval:0.18,scale:1.2415},{type:'pink',count:4,interval:0.168,scale:1.3098},{type:'black',count:3,interval:0.156,scale:1.3781},{type:'white',count:2,interval:0.144,scale:1.4463}]
  },
  25: {
    label: 'Ceramic surge',
    difficulty: 1.2520,
    speed: 1.0240,
    density: 9,
    roundCash: 116.3,
    special: 'Ceramic surge',
    groups: [{type:'yellow',count:9,interval:0.18,scale:1.252},{type:'pink',count:4,interval:0.168,scale:1.3209},{type:'black',count:3,interval:0.156,scale:1.3897},{type:'white',count:2,interval:0.144,scale:1.4586}]
  },
  26: {
    label: 'Round 26 — standard defense',
    difficulty: 1.2625,
    speed: 1.0256,
    density: 9,
    roundCash: 116.9,
    special: null,
    groups: [{type:'yellow',count:9,interval:0.18,scale:1.2625},{type:'pink',count:4,interval:0.168,scale:1.3319},{type:'black',count:3,interval:0.156,scale:1.4014},{type:'white',count:2,interval:0.144,scale:1.4708}]
  },
  27: {
    label: 'Round 27 — standard defense',
    difficulty: 1.2730,
    speed: 1.0272,
    density: 10,
    roundCash: 117.5,
    special: null,
    groups: [{type:'yellow',count:10,interval:0.18,scale:1.273},{type:'pink',count:5,interval:0.168,scale:1.343},{type:'black',count:3,interval:0.156,scale:1.413},{type:'white',count:2,interval:0.144,scale:1.483}]
  },
  28: {
    label: 'Round 28 — standard defense',
    difficulty: 1.2835,
    speed: 1.0288,
    density: 10,
    roundCash: 118.2,
    special: null,
    groups: [{type:'yellow',count:10,interval:0.18,scale:1.2835},{type:'pink',count:5,interval:0.168,scale:1.3541},{type:'black',count:3,interval:0.156,scale:1.4247},{type:'white',count:2,interval:0.144,scale:1.4953}]
  },
  29: {
    label: 'Round 29 — standard defense',
    difficulty: 1.2940,
    speed: 1.0304,
    density: 10,
    roundCash: 118.8,
    special: null,
    groups: [{type:'yellow',count:10,interval:0.18,scale:1.294},{type:'pink',count:5,interval:0.168,scale:1.3652},{type:'black',count:3,interval:0.156,scale:1.4363},{type:'white',count:2,interval:0.144,scale:1.5075}]
  },
  30: {
    label: 'Doom blimp checkpoint',
    difficulty: 1.3045,
    speed: 1.0320,
    density: 11,
    roundCash: 119.5,
    special: 'Doom blimp checkpoint',
    groups: [{type:'pink',count:11,interval:0.18,scale:1.3045},{type:'black',count:5,interval:0.168,scale:1.3762},{type:'white',count:3,interval:0.156,scale:1.448},{type:'purple',count:2,interval:0.144,scale:1.5197},{type:'lead',count:2,interval:0.132,scale:1.5915}]
  },
  31: {
    label: 'Round 31 — standard defense',
    difficulty: 1.3150,
    speed: 1.0336,
    density: 11,
    roundCash: 120.2,
    special: null,
    groups: [{type:'pink',count:11,interval:0.18,scale:1.315},{type:'black',count:5,interval:0.168,scale:1.3873},{type:'white',count:3,interval:0.156,scale:1.4597},{type:'purple',count:2,interval:0.144,scale:1.532},{type:'lead',count:2,interval:0.132,scale:1.6043}]
  },
  32: {
    label: 'Round 32 — standard defense',
    difficulty: 1.3255,
    speed: 1.0352,
    density: 11,
    roundCash: 120.8,
    special: null,
    groups: [{type:'pink',count:11,interval:0.18,scale:1.3255},{type:'black',count:5,interval:0.168,scale:1.3984},{type:'white',count:3,interval:0.156,scale:1.4713},{type:'purple',count:2,interval:0.144,scale:1.5442},{type:'lead',count:2,interval:0.132,scale:1.6171}]
  },
  33: {
    label: 'Round 33 — standard defense',
    difficulty: 1.3360,
    speed: 1.0368,
    density: 12,
    roundCash: 121.5,
    special: null,
    groups: [{type:'pink',count:12,interval:0.18,scale:1.336},{type:'black',count:6,interval:0.168,scale:1.4095},{type:'white',count:4,interval:0.156,scale:1.483},{type:'purple',count:3,interval:0.144,scale:1.5564},{type:'lead',count:2,interval:0.132,scale:1.6299}]
  },
  34: {
    label: 'Round 34 — standard defense',
    difficulty: 1.3465,
    speed: 1.0384,
    density: 12,
    roundCash: 122.1,
    special: null,
    groups: [{type:'pink',count:12,interval:0.18,scale:1.3465},{type:'black',count:6,interval:0.168,scale:1.4206},{type:'white',count:4,interval:0.156,scale:1.4946},{type:'purple',count:3,interval:0.144,scale:1.5687},{type:'lead',count:2,interval:0.132,scale:1.6427}]
  },
  35: {
    label: 'Round 35 — standard defense',
    difficulty: 1.3570,
    speed: 1.0400,
    density: 12,
    roundCash: 122.8,
    special: null,
    groups: [{type:'pink',count:12,interval:0.18,scale:1.357},{type:'black',count:6,interval:0.168,scale:1.4316},{type:'white',count:4,interval:0.156,scale:1.5063},{type:'purple',count:3,interval:0.144,scale:1.5809},{type:'lead',count:2,interval:0.132,scale:1.6555}]
  },
  36: {
    label: 'Round 36 — standard defense',
    difficulty: 1.3675,
    speed: 1.0416,
    density: 13,
    roundCash: 123.4,
    special: null,
    groups: [{type:'pink',count:13,interval:0.18,scale:1.3675},{type:'black',count:6,interval:0.168,scale:1.4427},{type:'white',count:4,interval:0.156,scale:1.5179},{type:'purple',count:3,interval:0.144,scale:1.5931},{type:'lead',count:2,interval:0.132,scale:1.6683}]
  },
  37: {
    label: 'Round 37 — standard defense',
    difficulty: 1.3780,
    speed: 1.0432,
    density: 13,
    roundCash: 124.0,
    special: null,
    groups: [{type:'pink',count:13,interval:0.18,scale:1.378},{type:'black',count:6,interval:0.168,scale:1.4538},{type:'white',count:4,interval:0.156,scale:1.5296},{type:'purple',count:3,interval:0.144,scale:1.6054},{type:'lead',count:2,interval:0.132,scale:1.6812}]
  },
  38: {
    label: 'Round 38 — standard defense',
    difficulty: 1.3885,
    speed: 1.0448,
    density: 13,
    roundCash: 124.7,
    special: null,
    groups: [{type:'pink',count:13,interval:0.18,scale:1.3885},{type:'black',count:6,interval:0.168,scale:1.4649},{type:'white',count:4,interval:0.156,scale:1.5412},{type:'purple',count:3,interval:0.144,scale:1.6176},{type:'lead',count:2,interval:0.132,scale:1.694}]
  },
  39: {
    label: 'Round 39 — standard defense',
    difficulty: 1.3990,
    speed: 1.0464,
    density: 14,
    roundCash: 125.3,
    special: null,
    groups: [{type:'pink',count:14,interval:0.18,scale:1.399},{type:'black',count:7,interval:0.168,scale:1.4759},{type:'white',count:4,interval:0.156,scale:1.5529},{type:'purple',count:3,interval:0.144,scale:1.6298},{type:'lead',count:2,interval:0.132,scale:1.7068}]
  },
  40: {
    label: 'Brute blimp checkpoint',
    difficulty: 1.4095,
    speed: 1.0480,
    density: 14,
    roundCash: 126.0,
    special: 'Brute blimp checkpoint',
    groups: [{type:'black',count:14,interval:0.18,scale:1.4095},{type:'white',count:7,interval:0.168,scale:1.487},{type:'purple',count:4,interval:0.156,scale:1.5645},{type:'zebra',count:3,interval:0.144,scale:1.6421},{type:'rainbow',count:2,interval:0.132,scale:1.7196},{type:'ceramic',count:2,interval:0.12,scale:1.7971}]
  },
  41: {
    label: 'Round 41 — standard defense',
    difficulty: 1.4200,
    speed: 1.0496,
    density: 14,
    roundCash: 126.7,
    special: null,
    groups: [{type:'black',count:14,interval:0.18,scale:1.42},{type:'white',count:7,interval:0.168,scale:1.4981},{type:'purple',count:4,interval:0.156,scale:1.5762},{type:'zebra',count:3,interval:0.144,scale:1.6543},{type:'rainbow',count:2,interval:0.132,scale:1.7324},{type:'ceramic',count:2,interval:0.12,scale:1.8105}]
  },
  42: {
    label: 'Round 42 — standard defense',
    difficulty: 1.4305,
    speed: 1.0512,
    density: 15,
    roundCash: 127.3,
    special: null,
    groups: [{type:'black',count:15,interval:0.18,scale:1.4305},{type:'white',count:7,interval:0.168,scale:1.5092},{type:'purple',count:5,interval:0.156,scale:1.5879},{type:'zebra',count:3,interval:0.144,scale:1.6665},{type:'rainbow',count:3,interval:0.132,scale:1.7452},{type:'ceramic',count:2,interval:0.12,scale:1.8239}]
  },
  43: {
    label: 'Round 43 — standard defense',
    difficulty: 1.4410,
    speed: 1.0528,
    density: 15,
    roundCash: 128.0,
    special: null,
    groups: [{type:'black',count:15,interval:0.18,scale:1.441},{type:'white',count:7,interval:0.168,scale:1.5203},{type:'purple',count:5,interval:0.156,scale:1.5995},{type:'zebra',count:3,interval:0.144,scale:1.6788},{type:'rainbow',count:3,interval:0.132,scale:1.758},{type:'ceramic',count:2,interval:0.12,scale:1.8373}]
  },
  44: {
    label: 'Round 44 — standard defense',
    difficulty: 1.4515,
    speed: 1.0544,
    density: 15,
    roundCash: 128.6,
    special: null,
    groups: [{type:'black',count:15,interval:0.18,scale:1.4515},{type:'white',count:7,interval:0.168,scale:1.5313},{type:'purple',count:5,interval:0.156,scale:1.6112},{type:'zebra',count:3,interval:0.144,scale:1.691},{type:'rainbow',count:3,interval:0.132,scale:1.7708},{type:'ceramic',count:2,interval:0.12,scale:1.8507}]
  },
  45: {
    label: 'Round 45 — standard defense',
    difficulty: 1.4620,
    speed: 1.0560,
    density: 16,
    roundCash: 129.3,
    special: null,
    groups: [{type:'black',count:16,interval:0.18,scale:1.462},{type:'white',count:8,interval:0.168,scale:1.5424},{type:'purple',count:5,interval:0.156,scale:1.6228},{type:'zebra',count:4,interval:0.144,scale:1.7032},{type:'rainbow',count:3,interval:0.132,scale:1.7836},{type:'ceramic',count:2,interval:0.12,scale:1.864}]
  },
  46: {
    label: 'Round 46 — standard defense',
    difficulty: 1.4725,
    speed: 1.0576,
    density: 16,
    roundCash: 129.9,
    special: null,
    groups: [{type:'black',count:16,interval:0.18,scale:1.4725},{type:'white',count:8,interval:0.168,scale:1.5535},{type:'purple',count:5,interval:0.156,scale:1.6345},{type:'zebra',count:4,interval:0.144,scale:1.7155},{type:'rainbow',count:3,interval:0.132,scale:1.7964},{type:'ceramic',count:2,interval:0.12,scale:1.8774}]
  },
  47: {
    label: 'Round 47 — standard defense',
    difficulty: 1.4830,
    speed: 1.0592,
    density: 16,
    roundCash: 130.6,
    special: null,
    groups: [{type:'black',count:16,interval:0.18,scale:1.483},{type:'white',count:8,interval:0.168,scale:1.5646},{type:'purple',count:5,interval:0.156,scale:1.6461},{type:'zebra',count:4,interval:0.144,scale:1.7277},{type:'rainbow',count:3,interval:0.132,scale:1.8093},{type:'ceramic',count:2,interval:0.12,scale:1.8908}]
  },
  48: {
    label: 'Round 48 — standard defense',
    difficulty: 1.4935,
    speed: 1.0608,
    density: 17,
    roundCash: 131.2,
    special: null,
    groups: [{type:'black',count:17,interval:0.18,scale:1.4935},{type:'white',count:8,interval:0.168,scale:1.5756},{type:'purple',count:5,interval:0.156,scale:1.6578},{type:'zebra',count:4,interval:0.144,scale:1.7399},{type:'rainbow',count:3,interval:0.132,scale:1.8221},{type:'ceramic',count:2,interval:0.12,scale:1.9042}]
  },
  49: {
    label: 'Round 49 — standard defense',
    difficulty: 1.5040,
    speed: 1.0624,
    density: 17,
    roundCash: 131.8,
    special: null,
    groups: [{type:'black',count:17,interval:0.18,scale:1.504},{type:'white',count:8,interval:0.168,scale:1.5867},{type:'purple',count:5,interval:0.156,scale:1.6694},{type:'zebra',count:4,interval:0.144,scale:1.7522},{type:'rainbow',count:3,interval:0.132,scale:1.8349},{type:'ceramic',count:2,interval:0.12,scale:1.9176}]
  },
  50: {
    label: 'Obsidian blimp checkpoint',
    difficulty: 1.5145,
    speed: 1.0640,
    density: 18,
    roundCash: 132.5,
    special: 'Obsidian blimp checkpoint',
    groups: [{type:'black',count:18,interval:0.18,scale:1.5145},{type:'white',count:9,interval:0.168,scale:1.5978},{type:'purple',count:6,interval:0.156,scale:1.6811},{type:'zebra',count:4,interval:0.144,scale:1.7644},{type:'rainbow',count:3,interval:0.132,scale:1.8477},{type:'ceramic',count:3,interval:0.12,scale:1.931}]
  },
  51: {
    label: 'Round 51 — standard defense',
    difficulty: 1.5250,
    speed: 1.0656,
    density: 18,
    roundCash: 133.2,
    special: null,
    groups: [{type:'black',count:18,interval:0.18,scale:1.525},{type:'white',count:9,interval:0.168,scale:1.6089},{type:'purple',count:6,interval:0.156,scale:1.6927},{type:'zebra',count:4,interval:0.144,scale:1.7766},{type:'rainbow',count:3,interval:0.132,scale:1.8605},{type:'ceramic',count:3,interval:0.12,scale:1.9444}]
  },
  52: {
    label: 'Round 52 — standard defense',
    difficulty: 1.5355,
    speed: 1.0672,
    density: 18,
    roundCash: 133.8,
    special: null,
    groups: [{type:'black',count:18,interval:0.18,scale:1.5355},{type:'white',count:9,interval:0.168,scale:1.62},{type:'purple',count:6,interval:0.156,scale:1.7044},{type:'zebra',count:4,interval:0.144,scale:1.7889},{type:'rainbow',count:3,interval:0.132,scale:1.8733},{type:'ceramic',count:3,interval:0.12,scale:1.9578}]
  },
  53: {
    label: 'Round 53 — standard defense',
    difficulty: 1.5460,
    speed: 1.0688,
    density: 19,
    roundCash: 134.4,
    special: null,
    groups: [{type:'black',count:19,interval:0.18,scale:1.546},{type:'white',count:9,interval:0.168,scale:1.631},{type:'purple',count:6,interval:0.156,scale:1.7161},{type:'zebra',count:4,interval:0.144,scale:1.8011},{type:'rainbow',count:3,interval:0.132,scale:1.8861},{type:'ceramic',count:3,interval:0.12,scale:1.9711}]
  },
  54: {
    label: 'Round 54 — standard defense',
    difficulty: 1.5565,
    speed: 1.0704,
    density: 19,
    roundCash: 135.1,
    special: null,
    groups: [{type:'black',count:19,interval:0.18,scale:1.5565},{type:'white',count:9,interval:0.168,scale:1.6421},{type:'purple',count:6,interval:0.156,scale:1.7277},{type:'zebra',count:4,interval:0.144,scale:1.8133},{type:'rainbow',count:3,interval:0.132,scale:1.8989},{type:'ceramic',count:3,interval:0.12,scale:1.9845}]
  },
  55: {
    label: 'Round 55 — standard defense',
    difficulty: 1.5670,
    speed: 1.0720,
    density: 19,
    roundCash: 135.8,
    special: null,
    groups: [{type:'black',count:19,interval:0.18,scale:1.567},{type:'white',count:9,interval:0.168,scale:1.6532},{type:'purple',count:6,interval:0.156,scale:1.7394},{type:'zebra',count:4,interval:0.144,scale:1.8256},{type:'rainbow',count:3,interval:0.132,scale:1.9117},{type:'ceramic',count:3,interval:0.12,scale:1.9979}]
  },
  56: {
    label: 'Round 56 — standard defense',
    difficulty: 1.5775,
    speed: 1.0736,
    density: 20,
    roundCash: 136.4,
    special: null,
    groups: [{type:'black',count:20,interval:0.18,scale:1.5775},{type:'white',count:10,interval:0.168,scale:1.6643},{type:'purple',count:6,interval:0.156,scale:1.751},{type:'zebra',count:5,interval:0.144,scale:1.8378},{type:'rainbow',count:4,interval:0.132,scale:1.9245},{type:'ceramic',count:3,interval:0.12,scale:2.0113}]
  },
  57: {
    label: 'Round 57 — standard defense',
    difficulty: 1.5880,
    speed: 1.0752,
    density: 20,
    roundCash: 137.1,
    special: null,
    groups: [{type:'black',count:20,interval:0.18,scale:1.588},{type:'white',count:10,interval:0.168,scale:1.6753},{type:'purple',count:6,interval:0.156,scale:1.7627},{type:'zebra',count:5,interval:0.144,scale:1.85},{type:'rainbow',count:4,interval:0.132,scale:1.9374},{type:'ceramic',count:3,interval:0.12,scale:2.0247}]
  },
  58: {
    label: 'Round 58 — standard defense',
    difficulty: 1.5985,
    speed: 1.0768,
    density: 20,
    roundCash: 137.7,
    special: null,
    groups: [{type:'black',count:20,interval:0.18,scale:1.5985},{type:'white',count:10,interval:0.168,scale:1.6864},{type:'purple',count:6,interval:0.156,scale:1.7743},{type:'zebra',count:5,interval:0.144,scale:1.8623},{type:'rainbow',count:4,interval:0.132,scale:1.9502},{type:'ceramic',count:3,interval:0.12,scale:2.0381}]
  },
  59: {
    label: 'Round 59 — standard defense',
    difficulty: 1.6090,
    speed: 1.0784,
    density: 21,
    roundCash: 138.3,
    special: null,
    groups: [{type:'black',count:21,interval:0.18,scale:1.609},{type:'white',count:10,interval:0.168,scale:1.6975},{type:'purple',count:7,interval:0.156,scale:1.786},{type:'zebra',count:5,interval:0.144,scale:1.8745},{type:'rainbow',count:4,interval:0.132,scale:1.963},{type:'ceramic',count:3,interval:0.12,scale:2.0515}]
  },
  60: {
    label: 'Shadow blimp checkpoint',
    difficulty: 1.6195,
    speed: 1.0800,
    density: 21,
    roundCash: 139.0,
    special: 'Shadow blimp checkpoint',
    groups: [{type:'purple',count:21,interval:0.18,scale:1.6195},{type:'zebra',count:10,interval:0.168,scale:1.7086},{type:'rainbow',count:7,interval:0.156,scale:1.7976},{type:'ceramic',count:5,interval:0.144,scale:1.8867},{type:'moab',count:4,interval:0.132,scale:1.9758},{type:'ddt',count:3,interval:0.12,scale:2.0649}]
  },
  61: {
    label: 'Round 61 — standard defense',
    difficulty: 1.6300,
    speed: 1.0816,
    density: 21,
    roundCash: 139.7,
    special: null,
    groups: [{type:'purple',count:21,interval:0.18,scale:1.63},{type:'zebra',count:10,interval:0.168,scale:1.7196},{type:'rainbow',count:7,interval:0.156,scale:1.8093},{type:'ceramic',count:5,interval:0.144,scale:1.8989},{type:'moab',count:4,interval:0.132,scale:1.9886},{type:'ddt',count:3,interval:0.12,scale:2.0782}]
  },
  62: {
    label: 'Round 62 — standard defense',
    difficulty: 1.6405,
    speed: 1.0832,
    density: 22,
    roundCash: 140.3,
    special: null,
    groups: [{type:'purple',count:22,interval:0.18,scale:1.6405},{type:'zebra',count:11,interval:0.168,scale:1.7307},{type:'rainbow',count:7,interval:0.156,scale:1.821},{type:'ceramic',count:5,interval:0.144,scale:1.9112},{type:'moab',count:4,interval:0.132,scale:2.0014},{type:'ddt',count:3,interval:0.12,scale:2.0916}]
  },
  63: {
    label: 'Round 63 — standard defense',
    difficulty: 1.6510,
    speed: 1.0848,
    density: 22,
    roundCash: 140.9,
    special: null,
    groups: [{type:'purple',count:22,interval:0.18,scale:1.651},{type:'zebra',count:11,interval:0.168,scale:1.7418},{type:'rainbow',count:7,interval:0.156,scale:1.8326},{type:'ceramic',count:5,interval:0.144,scale:1.9234},{type:'moab',count:4,interval:0.132,scale:2.0142},{type:'ddt',count:3,interval:0.12,scale:2.105}]
  },
  64: {
    label: 'Round 64 — standard defense',
    difficulty: 1.6615,
    speed: 1.0864,
    density: 22,
    roundCash: 141.6,
    special: null,
    groups: [{type:'purple',count:22,interval:0.18,scale:1.6615},{type:'zebra',count:11,interval:0.168,scale:1.7529},{type:'rainbow',count:7,interval:0.156,scale:1.8443},{type:'ceramic',count:5,interval:0.144,scale:1.9356},{type:'moab',count:4,interval:0.132,scale:2.027},{type:'ddt',count:3,interval:0.12,scale:2.1184}]
  },
  65: {
    label: 'Round 65 — standard defense',
    difficulty: 1.6720,
    speed: 1.0880,
    density: 23,
    roundCash: 142.3,
    special: null,
    groups: [{type:'purple',count:23,interval:0.18,scale:1.672},{type:'zebra',count:11,interval:0.168,scale:1.764},{type:'rainbow',count:7,interval:0.156,scale:1.8559},{type:'ceramic',count:5,interval:0.144,scale:1.9479},{type:'moab',count:4,interval:0.132,scale:2.0398},{type:'ddt',count:3,interval:0.12,scale:2.1318}]
  },
  66: {
    label: 'Round 66 — standard defense',
    difficulty: 1.6825,
    speed: 1.0896,
    density: 23,
    roundCash: 142.9,
    special: null,
    groups: [{type:'purple',count:23,interval:0.18,scale:1.6825},{type:'zebra',count:11,interval:0.168,scale:1.775},{type:'rainbow',count:7,interval:0.156,scale:1.8676},{type:'ceramic',count:5,interval:0.144,scale:1.9601},{type:'moab',count:4,interval:0.132,scale:2.0526},{type:'ddt',count:3,interval:0.12,scale:2.1452}]
  },
  67: {
    label: 'Round 67 — standard defense',
    difficulty: 1.6930,
    speed: 1.0912,
    density: 23,
    roundCash: 143.6,
    special: null,
    groups: [{type:'purple',count:23,interval:0.18,scale:1.693},{type:'zebra',count:11,interval:0.168,scale:1.7861},{type:'rainbow',count:7,interval:0.156,scale:1.8792},{type:'ceramic',count:5,interval:0.144,scale:1.9723},{type:'moab',count:4,interval:0.132,scale:2.0655},{type:'ddt',count:3,interval:0.12,scale:2.1586}]
  },
  68: {
    label: 'Round 68 — standard defense',
    difficulty: 1.7035,
    speed: 1.0928,
    density: 24,
    roundCash: 144.2,
    special: null,
    groups: [{type:'purple',count:24,interval:0.18,scale:1.7035},{type:'zebra',count:12,interval:0.168,scale:1.7972},{type:'rainbow',count:8,interval:0.156,scale:1.8909},{type:'ceramic',count:6,interval:0.144,scale:1.9846},{type:'moab',count:4,interval:0.132,scale:2.0783},{type:'ddt',count:4,interval:0.12,scale:2.172}]
  },
  69: {
    label: 'Round 69 — standard defense',
    difficulty: 1.7140,
    speed: 1.0944,
    density: 24,
    roundCash: 144.8,
    special: null,
    groups: [{type:'purple',count:24,interval:0.18,scale:1.714},{type:'zebra',count:12,interval:0.168,scale:1.8083},{type:'rainbow',count:8,interval:0.156,scale:1.9025},{type:'ceramic',count:6,interval:0.144,scale:1.9968},{type:'moab',count:4,interval:0.132,scale:2.0911},{type:'ddt',count:4,interval:0.12,scale:2.1853}]
  },
  70: {
    label: 'Heavy shadow cycle',
    difficulty: 1.7245,
    speed: 1.0960,
    density: 24,
    roundCash: 145.5,
    special: 'Heavy shadow cycle',
    groups: [{type:'purple',count:24,interval:0.18,scale:1.7245},{type:'zebra',count:12,interval:0.168,scale:1.8193},{type:'rainbow',count:8,interval:0.156,scale:1.9142},{type:'ceramic',count:6,interval:0.144,scale:2.009},{type:'moab',count:4,interval:0.132,scale:2.1039},{type:'ddt',count:4,interval:0.12,scale:2.1987}]
  },
  71: {
    label: 'Round 71 — standard defense',
    difficulty: 1.7350,
    speed: 1.0976,
    density: 25,
    roundCash: 146.2,
    special: null,
    groups: [{type:'purple',count:25,interval:0.18,scale:1.735},{type:'zebra',count:12,interval:0.168,scale:1.8304},{type:'rainbow',count:8,interval:0.156,scale:1.9259},{type:'ceramic',count:6,interval:0.144,scale:2.0213},{type:'moab',count:5,interval:0.132,scale:2.1167},{type:'ddt',count:4,interval:0.12,scale:2.2121}]
  },
  72: {
    label: 'Round 72 — standard defense',
    difficulty: 1.7455,
    speed: 1.0992,
    density: 25,
    roundCash: 146.8,
    special: null,
    groups: [{type:'purple',count:25,interval:0.18,scale:1.7455},{type:'zebra',count:12,interval:0.168,scale:1.8415},{type:'rainbow',count:8,interval:0.156,scale:1.9375},{type:'ceramic',count:6,interval:0.144,scale:2.0335},{type:'moab',count:5,interval:0.132,scale:2.1295},{type:'ddt',count:4,interval:0.12,scale:2.2255}]
  },
  73: {
    label: 'Round 73 — standard defense',
    difficulty: 1.7560,
    speed: 1.1008,
    density: 25,
    roundCash: 147.4,
    special: null,
    groups: [{type:'purple',count:25,interval:0.18,scale:1.756},{type:'zebra',count:12,interval:0.168,scale:1.8526},{type:'rainbow',count:8,interval:0.156,scale:1.9492},{type:'ceramic',count:6,interval:0.144,scale:2.0457},{type:'moab',count:5,interval:0.132,scale:2.1423},{type:'ddt',count:4,interval:0.12,scale:2.2389}]
  },
  74: {
    label: 'Round 74 — standard defense',
    difficulty: 1.7665,
    speed: 1.1024,
    density: 26,
    roundCash: 148.1,
    special: null,
    groups: [{type:'purple',count:26,interval:0.18,scale:1.7665},{type:'zebra',count:13,interval:0.168,scale:1.8637},{type:'rainbow',count:8,interval:0.156,scale:1.9608},{type:'ceramic',count:6,interval:0.144,scale:2.058},{type:'moab',count:5,interval:0.132,scale:2.1551},{type:'ddt',count:4,interval:0.12,scale:2.2523}]
  },
  75: {
    label: 'Round 75 — standard defense',
    difficulty: 1.7770,
    speed: 1.1040,
    density: 26,
    roundCash: 148.8,
    special: null,
    groups: [{type:'purple',count:26,interval:0.18,scale:1.777},{type:'zebra',count:13,interval:0.168,scale:1.8747},{type:'rainbow',count:8,interval:0.156,scale:1.9725},{type:'ceramic',count:6,interval:0.144,scale:2.0702},{type:'moab',count:5,interval:0.132,scale:2.1679},{type:'ddt',count:4,interval:0.12,scale:2.2657}]
  },
  76: {
    label: 'Round 76 — standard defense',
    difficulty: 1.7875,
    speed: 1.1056,
    density: 26,
    roundCash: 149.4,
    special: null,
    groups: [{type:'purple',count:26,interval:0.18,scale:1.7875},{type:'zebra',count:13,interval:0.168,scale:1.8858},{type:'rainbow',count:8,interval:0.156,scale:1.9841},{type:'ceramic',count:6,interval:0.144,scale:2.0824},{type:'moab',count:5,interval:0.132,scale:2.1808},{type:'ddt',count:4,interval:0.12,scale:2.2791}]
  },
  77: {
    label: 'Round 77 — standard defense',
    difficulty: 1.7980,
    speed: 1.1072,
    density: 27,
    roundCash: 150.1,
    special: null,
    groups: [{type:'purple',count:27,interval:0.18,scale:1.798},{type:'zebra',count:13,interval:0.168,scale:1.8969},{type:'rainbow',count:9,interval:0.156,scale:1.9958},{type:'ceramic',count:6,interval:0.144,scale:2.0947},{type:'moab',count:5,interval:0.132,scale:2.1936},{type:'ddt',count:4,interval:0.12,scale:2.2925}]
  },
  78: {
    label: 'Round 78 — standard defense',
    difficulty: 1.8085,
    speed: 1.1088,
    density: 27,
    roundCash: 150.7,
    special: null,
    groups: [{type:'purple',count:27,interval:0.18,scale:1.8085},{type:'zebra',count:13,interval:0.168,scale:1.908},{type:'rainbow',count:9,interval:0.156,scale:2.0074},{type:'ceramic',count:6,interval:0.144,scale:2.1069},{type:'moab',count:5,interval:0.132,scale:2.2064},{type:'ddt',count:4,interval:0.12,scale:2.3058}]
  },
  79: {
    label: 'Round 79 — standard defense',
    difficulty: 1.8190,
    speed: 1.1104,
    density: 27,
    roundCash: 151.3,
    special: null,
    groups: [{type:'purple',count:27,interval:0.18,scale:1.819},{type:'zebra',count:13,interval:0.168,scale:1.919},{type:'rainbow',count:9,interval:0.156,scale:2.0191},{type:'ceramic',count:6,interval:0.144,scale:2.1191},{type:'moab',count:5,interval:0.132,scale:2.2192},{type:'ddt',count:4,interval:0.12,scale:2.3192}]
  },
  80: {
    label: 'Titan preview',
    difficulty: 1.8295,
    speed: 1.1120,
    density: 28,
    roundCash: 152.0,
    special: 'Titan preview',
    groups: [{type:'rainbow',count:28,interval:0.18,scale:1.8295},{type:'ceramic',count:14,interval:0.168,scale:1.9301},{type:'moab',count:9,interval:0.156,scale:2.0307},{type:'bfb',count:7,interval:0.144,scale:2.1314},{type:'ddt',count:5,interval:0.132,scale:2.232}]
  },
  81: {
    label: 'Round 81 — standard defense',
    difficulty: 1.8400,
    speed: 1.1136,
    density: 28,
    roundCash: 152.7,
    special: null,
    groups: [{type:'rainbow',count:28,interval:0.18,scale:1.84},{type:'ceramic',count:14,interval:0.168,scale:1.9412},{type:'moab',count:9,interval:0.156,scale:2.0424},{type:'bfb',count:7,interval:0.144,scale:2.1436},{type:'ddt',count:5,interval:0.132,scale:2.2448}]
  },
  82: {
    label: 'Round 82 — standard defense',
    difficulty: 1.8505,
    speed: 1.1152,
    density: 28,
    roundCash: 153.3,
    special: null,
    groups: [{type:'rainbow',count:28,interval:0.18,scale:1.8505},{type:'ceramic',count:14,interval:0.168,scale:1.9523},{type:'moab',count:9,interval:0.156,scale:2.0541},{type:'bfb',count:7,interval:0.144,scale:2.1558},{type:'ddt',count:5,interval:0.132,scale:2.2576}]
  },
  83: {
    label: 'Round 83 — standard defense',
    difficulty: 1.8610,
    speed: 1.1168,
    density: 29,
    roundCash: 153.9,
    special: null,
    groups: [{type:'rainbow',count:29,interval:0.18,scale:1.861},{type:'ceramic',count:14,interval:0.168,scale:1.9634},{type:'moab',count:9,interval:0.156,scale:2.0657},{type:'bfb',count:7,interval:0.144,scale:2.1681},{type:'ddt',count:5,interval:0.132,scale:2.2704}]
  },
  84: {
    label: 'Round 84 — standard defense',
    difficulty: 1.8715,
    speed: 1.1184,
    density: 29,
    roundCash: 154.6,
    special: null,
    groups: [{type:'rainbow',count:29,interval:0.18,scale:1.8715},{type:'ceramic',count:14,interval:0.168,scale:1.9744},{type:'moab',count:9,interval:0.156,scale:2.0774},{type:'bfb',count:7,interval:0.144,scale:2.1803},{type:'ddt',count:5,interval:0.132,scale:2.2832}]
  },
  85: {
    label: 'Round 85 — standard defense',
    difficulty: 1.8820,
    speed: 1.1200,
    density: 29,
    roundCash: 155.3,
    special: null,
    groups: [{type:'rainbow',count:29,interval:0.18,scale:1.882},{type:'ceramic',count:14,interval:0.168,scale:1.9855},{type:'moab',count:9,interval:0.156,scale:2.089},{type:'bfb',count:7,interval:0.144,scale:2.1925},{type:'ddt',count:5,interval:0.132,scale:2.296}]
  },
  86: {
    label: 'Round 86 — standard defense',
    difficulty: 1.8925,
    speed: 1.1216,
    density: 30,
    roundCash: 155.9,
    special: null,
    groups: [{type:'rainbow',count:30,interval:0.18,scale:1.8925},{type:'ceramic',count:15,interval:0.168,scale:1.9966},{type:'moab',count:10,interval:0.156,scale:2.1007},{type:'bfb',count:7,interval:0.144,scale:2.2048},{type:'ddt',count:6,interval:0.132,scale:2.3089}]
  },
  87: {
    label: 'Round 87 — standard defense',
    difficulty: 1.9030,
    speed: 1.1232,
    density: 30,
    roundCash: 156.6,
    special: null,
    groups: [{type:'rainbow',count:30,interval:0.18,scale:1.903},{type:'ceramic',count:15,interval:0.168,scale:2.0077},{type:'moab',count:10,interval:0.156,scale:2.1123},{type:'bfb',count:7,interval:0.144,scale:2.217},{type:'ddt',count:6,interval:0.132,scale:2.3217}]
  },
  88: {
    label: 'Round 88 — standard defense',
    difficulty: 1.9135,
    speed: 1.1248,
    density: 30,
    roundCash: 157.2,
    special: null,
    groups: [{type:'rainbow',count:30,interval:0.18,scale:1.9135},{type:'ceramic',count:15,interval:0.168,scale:2.0187},{type:'moab',count:10,interval:0.156,scale:2.124},{type:'bfb',count:7,interval:0.144,scale:2.2292},{type:'ddt',count:6,interval:0.132,scale:2.3345}]
  },
  89: {
    label: 'Round 89 — standard defense',
    difficulty: 1.9240,
    speed: 1.1264,
    density: 31,
    roundCash: 157.8,
    special: null,
    groups: [{type:'rainbow',count:31,interval:0.18,scale:1.924},{type:'ceramic',count:15,interval:0.168,scale:2.0298},{type:'moab',count:10,interval:0.156,scale:2.1356},{type:'bfb',count:7,interval:0.144,scale:2.2415},{type:'ddt',count:6,interval:0.132,scale:2.3473}]
  },
  90: {
    label: 'Elite heavy cycle',
    difficulty: 1.9345,
    speed: 1.1280,
    density: 31,
    roundCash: 158.5,
    special: 'Elite heavy cycle',
    groups: [{type:'rainbow',count:31,interval:0.18,scale:1.9345},{type:'ceramic',count:15,interval:0.168,scale:2.0409},{type:'moab',count:10,interval:0.156,scale:2.1473},{type:'bfb',count:7,interval:0.144,scale:2.2537},{type:'ddt',count:6,interval:0.132,scale:2.3601}]
  },
  91: {
    label: 'Round 91 — standard defense',
    difficulty: 1.9450,
    speed: 1.1296,
    density: 31,
    roundCash: 159.2,
    special: null,
    groups: [{type:'rainbow',count:31,interval:0.18,scale:1.945},{type:'ceramic',count:15,interval:0.168,scale:2.052},{type:'moab',count:10,interval:0.156,scale:2.159},{type:'bfb',count:7,interval:0.144,scale:2.2659},{type:'ddt',count:6,interval:0.132,scale:2.3729}]
  },
  92: {
    label: 'Round 92 — standard defense',
    difficulty: 1.9555,
    speed: 1.1312,
    density: 32,
    roundCash: 159.8,
    special: null,
    groups: [{type:'rainbow',count:32,interval:0.18,scale:1.9555},{type:'ceramic',count:16,interval:0.168,scale:2.0631},{type:'moab',count:10,interval:0.156,scale:2.1706},{type:'bfb',count:8,interval:0.144,scale:2.2782},{type:'ddt',count:6,interval:0.132,scale:2.3857}]
  },
  93: {
    label: 'Round 93 — standard defense',
    difficulty: 1.9660,
    speed: 1.1328,
    density: 32,
    roundCash: 160.4,
    special: null,
    groups: [{type:'rainbow',count:32,interval:0.18,scale:1.966},{type:'ceramic',count:16,interval:0.168,scale:2.0741},{type:'moab',count:10,interval:0.156,scale:2.1823},{type:'bfb',count:8,interval:0.144,scale:2.2904},{type:'ddt',count:6,interval:0.132,scale:2.3985}]
  },
  94: {
    label: 'Round 94 — standard defense',
    difficulty: 1.9765,
    speed: 1.1344,
    density: 32,
    roundCash: 161.1,
    special: null,
    groups: [{type:'rainbow',count:32,interval:0.18,scale:1.9765},{type:'ceramic',count:16,interval:0.168,scale:2.0852},{type:'moab',count:10,interval:0.156,scale:2.1939},{type:'bfb',count:8,interval:0.144,scale:2.3026},{type:'ddt',count:6,interval:0.132,scale:2.4113}]
  },
  95: {
    label: 'Round 95 — standard defense',
    difficulty: 1.9870,
    speed: 1.1360,
    density: 33,
    roundCash: 161.8,
    special: null,
    groups: [{type:'rainbow',count:33,interval:0.18,scale:1.987},{type:'ceramic',count:16,interval:0.168,scale:2.0963},{type:'moab',count:11,interval:0.156,scale:2.2056},{type:'bfb',count:8,interval:0.144,scale:2.3149},{type:'ddt',count:6,interval:0.132,scale:2.4241}]
  },
  96: {
    label: 'Round 96 — standard defense',
    difficulty: 1.9975,
    speed: 1.1376,
    density: 33,
    roundCash: 162.4,
    special: null,
    groups: [{type:'rainbow',count:33,interval:0.18,scale:1.9975},{type:'ceramic',count:16,interval:0.168,scale:2.1074},{type:'moab',count:11,interval:0.156,scale:2.2172},{type:'bfb',count:8,interval:0.144,scale:2.3271},{type:'ddt',count:6,interval:0.132,scale:2.4369}]
  },
  97: {
    label: 'Round 97 — standard defense',
    difficulty: 2.0080,
    speed: 1.1392,
    density: 33,
    roundCash: 163.1,
    special: null,
    groups: [{type:'rainbow',count:33,interval:0.18,scale:2.008},{type:'ceramic',count:16,interval:0.168,scale:2.1184},{type:'moab',count:11,interval:0.156,scale:2.2289},{type:'bfb',count:8,interval:0.144,scale:2.3393},{type:'ddt',count:6,interval:0.132,scale:2.4498}]
  },
  98: {
    label: 'Round 98 — standard defense',
    difficulty: 2.0185,
    speed: 1.1408,
    density: 34,
    roundCash: 163.7,
    special: null,
    groups: [{type:'rainbow',count:34,interval:0.18,scale:2.0185},{type:'ceramic',count:17,interval:0.168,scale:2.1295},{type:'moab',count:11,interval:0.156,scale:2.2405},{type:'bfb',count:8,interval:0.144,scale:2.3516},{type:'ddt',count:6,interval:0.132,scale:2.4626}]
  },
  99: {
    label: 'Round 99 — standard defense',
    difficulty: 2.0290,
    speed: 1.1424,
    density: 34,
    roundCash: 164.4,
    special: null,
    groups: [{type:'rainbow',count:34,interval:0.18,scale:2.029},{type:'ceramic',count:17,interval:0.168,scale:2.1406},{type:'moab',count:11,interval:0.156,scale:2.2522},{type:'bfb',count:8,interval:0.144,scale:2.3638},{type:'ddt',count:6,interval:0.132,scale:2.4754}]
  },
  100: {
    label: 'Ruin Warden',
    difficulty: 2.0395,
    speed: 1.1440,
    density: 35,
    roundCash: 165.0,
    special: 'Ruin Warden',
    groups: [{type:'ceramic',count:35,interval:0.18,scale:2.0395},{type:'moab',count:17,interval:0.168,scale:2.1517},{type:'bfb',count:11,interval:0.156,scale:2.2638},{type:'zomg',count:8,interval:0.144,scale:2.376},{type:'ddt',count:7,interval:0.132,scale:2.4882},{type:'bad',count:5,interval:0.12,scale:2.6004},{type:'bloonBoss',count:1,interval:2,scale:1}]
  },
  101: {
    label: 'Round 101 — standard defense',
    difficulty: 2.0500,
    speed: 1.1456,
    density: 35,
    roundCash: 165.7,
    special: null,
    groups: [{type:'ceramic',count:35,interval:0.18,scale:2.05},{type:'moab',count:17,interval:0.168,scale:2.1627},{type:'bfb',count:11,interval:0.156,scale:2.2755},{type:'zomg',count:8,interval:0.144,scale:2.3882},{type:'ddt',count:7,interval:0.132,scale:2.501},{type:'bad',count:5,interval:0.12,scale:2.6137}]
  },
  102: {
    label: 'Round 102 — standard defense',
    difficulty: 2.0605,
    speed: 1.1472,
    density: 35,
    roundCash: 166.3,
    special: null,
    groups: [{type:'ceramic',count:35,interval:0.18,scale:2.0605},{type:'moab',count:17,interval:0.168,scale:2.1738},{type:'bfb',count:11,interval:0.156,scale:2.2872},{type:'zomg',count:8,interval:0.144,scale:2.4005},{type:'ddt',count:7,interval:0.132,scale:2.5138},{type:'bad',count:5,interval:0.12,scale:2.6271}]
  },
  103: {
    label: 'Round 103 — standard defense',
    difficulty: 2.0710,
    speed: 1.1488,
    density: 36,
    roundCash: 166.9,
    special: null,
    groups: [{type:'ceramic',count:36,interval:0.18,scale:2.071},{type:'moab',count:18,interval:0.168,scale:2.1849},{type:'bfb',count:12,interval:0.156,scale:2.2988},{type:'zomg',count:9,interval:0.144,scale:2.4127},{type:'ddt',count:7,interval:0.132,scale:2.5266},{type:'bad',count:6,interval:0.12,scale:2.6405}]
  },
  104: {
    label: 'Round 104 — standard defense',
    difficulty: 2.0815,
    speed: 1.1504,
    density: 36,
    roundCash: 167.6,
    special: null,
    groups: [{type:'ceramic',count:36,interval:0.18,scale:2.0815},{type:'moab',count:18,interval:0.168,scale:2.196},{type:'bfb',count:12,interval:0.156,scale:2.3105},{type:'zomg',count:9,interval:0.144,scale:2.4249},{type:'ddt',count:7,interval:0.132,scale:2.5394},{type:'bad',count:6,interval:0.12,scale:2.6539}]
  },
  105: {
    label: 'Round 105 — standard defense',
    difficulty: 2.0920,
    speed: 1.1520,
    density: 36,
    roundCash: 168.3,
    special: null,
    groups: [{type:'ceramic',count:36,interval:0.18,scale:2.092},{type:'moab',count:18,interval:0.168,scale:2.2071},{type:'bfb',count:12,interval:0.156,scale:2.3221},{type:'zomg',count:9,interval:0.144,scale:2.4372},{type:'ddt',count:7,interval:0.132,scale:2.5522},{type:'bad',count:6,interval:0.12,scale:2.6673}]
  },
  106: {
    label: 'Round 106 — standard defense',
    difficulty: 2.1025,
    speed: 1.1536,
    density: 37,
    roundCash: 168.9,
    special: null,
    groups: [{type:'ceramic',count:37,interval:0.18,scale:2.1025},{type:'moab',count:18,interval:0.168,scale:2.2181},{type:'bfb',count:12,interval:0.156,scale:2.3338},{type:'zomg',count:9,interval:0.144,scale:2.4494},{type:'ddt',count:7,interval:0.132,scale:2.565},{type:'bad',count:6,interval:0.12,scale:2.6807}]
  },
  107: {
    label: 'Round 107 — standard defense',
    difficulty: 2.1130,
    speed: 1.1552,
    density: 37,
    roundCash: 169.6,
    special: null,
    groups: [{type:'ceramic',count:37,interval:0.18,scale:2.113},{type:'moab',count:18,interval:0.168,scale:2.2292},{type:'bfb',count:12,interval:0.156,scale:2.3454},{type:'zomg',count:9,interval:0.144,scale:2.4616},{type:'ddt',count:7,interval:0.132,scale:2.5779},{type:'bad',count:6,interval:0.12,scale:2.6941}]
  },
  108: {
    label: 'Round 108 — standard defense',
    difficulty: 2.1235,
    speed: 1.1568,
    density: 37,
    roundCash: 170.2,
    special: null,
    groups: [{type:'ceramic',count:37,interval:0.18,scale:2.1235},{type:'moab',count:18,interval:0.168,scale:2.2403},{type:'bfb',count:12,interval:0.156,scale:2.3571},{type:'zomg',count:9,interval:0.144,scale:2.4739},{type:'ddt',count:7,interval:0.132,scale:2.5907},{type:'bad',count:6,interval:0.12,scale:2.7075}]
  },
  109: {
    label: 'Round 109 — standard defense',
    difficulty: 2.1340,
    speed: 1.1584,
    density: 38,
    roundCash: 170.9,
    special: null,
    groups: [{type:'ceramic',count:38,interval:0.18,scale:2.134},{type:'moab',count:19,interval:0.168,scale:2.2514},{type:'bfb',count:12,interval:0.156,scale:2.3687},{type:'zomg',count:9,interval:0.144,scale:2.4861},{type:'ddt',count:7,interval:0.132,scale:2.6035},{type:'bad',count:6,interval:0.12,scale:2.7208}]
  },
  110: {
    label: 'Round 110 — pressure check',
    difficulty: 2.1445,
    speed: 1.1600,
    density: 38,
    roundCash: 171.5,
    special: null,
    groups: [{type:'ceramic',count:38,interval:0.18,scale:2.1445},{type:'moab',count:19,interval:0.168,scale:2.2624},{type:'bfb',count:12,interval:0.156,scale:2.3804},{type:'zomg',count:9,interval:0.144,scale:2.4983},{type:'ddt',count:7,interval:0.132,scale:2.6163},{type:'bad',count:6,interval:0.12,scale:2.7342}]
  },
  111: {
    label: 'Round 111 — standard defense',
    difficulty: 2.1550,
    speed: 1.1616,
    density: 38,
    roundCash: 172.2,
    special: null,
    groups: [{type:'ceramic',count:38,interval:0.18,scale:2.155},{type:'moab',count:19,interval:0.168,scale:2.2735},{type:'bfb',count:12,interval:0.156,scale:2.392},{type:'zomg',count:9,interval:0.144,scale:2.5106},{type:'ddt',count:7,interval:0.132,scale:2.6291},{type:'bad',count:6,interval:0.12,scale:2.7476}]
  },
  112: {
    label: 'Round 112 — standard defense',
    difficulty: 2.1655,
    speed: 1.1632,
    density: 39,
    roundCash: 172.8,
    special: null,
    groups: [{type:'ceramic',count:39,interval:0.18,scale:2.1655},{type:'moab',count:19,interval:0.168,scale:2.2846},{type:'bfb',count:13,interval:0.156,scale:2.4037},{type:'zomg',count:9,interval:0.144,scale:2.5228},{type:'ddt',count:7,interval:0.132,scale:2.6419},{type:'bad',count:6,interval:0.12,scale:2.761}]
  },
  113: {
    label: 'Round 113 — standard defense',
    difficulty: 2.1760,
    speed: 1.1648,
    density: 39,
    roundCash: 173.4,
    special: null,
    groups: [{type:'ceramic',count:39,interval:0.18,scale:2.176},{type:'moab',count:19,interval:0.168,scale:2.2957},{type:'bfb',count:13,interval:0.156,scale:2.4154},{type:'zomg',count:9,interval:0.144,scale:2.535},{type:'ddt',count:7,interval:0.132,scale:2.6547},{type:'bad',count:6,interval:0.12,scale:2.7744}]
  },
  114: {
    label: 'Round 114 — standard defense',
    difficulty: 2.1865,
    speed: 1.1664,
    density: 39,
    roundCash: 174.1,
    special: null,
    groups: [{type:'ceramic',count:39,interval:0.18,scale:2.1865},{type:'moab',count:19,interval:0.168,scale:2.3068},{type:'bfb',count:13,interval:0.156,scale:2.427},{type:'zomg',count:9,interval:0.144,scale:2.5473},{type:'ddt',count:7,interval:0.132,scale:2.6675},{type:'bad',count:6,interval:0.12,scale:2.7878}]
  },
  115: {
    label: 'Round 115 — standard defense',
    difficulty: 2.1970,
    speed: 1.1680,
    density: 40,
    roundCash: 174.8,
    special: null,
    groups: [{type:'ceramic',count:40,interval:0.18,scale:2.197},{type:'moab',count:20,interval:0.168,scale:2.3178},{type:'bfb',count:13,interval:0.156,scale:2.4387},{type:'zomg',count:10,interval:0.144,scale:2.5595},{type:'ddt',count:8,interval:0.132,scale:2.6803},{type:'bad',count:6,interval:0.12,scale:2.8012}]
  },
  116: {
    label: 'Round 116 — standard defense',
    difficulty: 2.2075,
    speed: 1.1696,
    density: 40,
    roundCash: 175.4,
    special: null,
    groups: [{type:'ceramic',count:40,interval:0.18,scale:2.2075},{type:'moab',count:20,interval:0.168,scale:2.3289},{type:'bfb',count:13,interval:0.156,scale:2.4503},{type:'zomg',count:10,interval:0.144,scale:2.5717},{type:'ddt',count:8,interval:0.132,scale:2.6932},{type:'bad',count:6,interval:0.12,scale:2.8146}]
  },
  117: {
    label: 'Round 117 — standard defense',
    difficulty: 2.2180,
    speed: 1.1712,
    density: 40,
    roundCash: 176.1,
    special: null,
    groups: [{type:'ceramic',count:40,interval:0.18,scale:2.218},{type:'moab',count:20,interval:0.168,scale:2.34},{type:'bfb',count:13,interval:0.156,scale:2.462},{type:'zomg',count:10,interval:0.144,scale:2.584},{type:'ddt',count:8,interval:0.132,scale:2.706},{type:'bad',count:6,interval:0.12,scale:2.8279}]
  },
  118: {
    label: 'Round 118 — standard defense',
    difficulty: 2.2285,
    speed: 1.1728,
    density: 41,
    roundCash: 176.7,
    special: null,
    groups: [{type:'ceramic',count:41,interval:0.18,scale:2.2285},{type:'moab',count:20,interval:0.168,scale:2.3511},{type:'bfb',count:13,interval:0.156,scale:2.4736},{type:'zomg',count:10,interval:0.144,scale:2.5962},{type:'ddt',count:8,interval:0.132,scale:2.7188},{type:'bad',count:6,interval:0.12,scale:2.8413}]
  },
  119: {
    label: 'Round 119 — standard defense',
    difficulty: 2.2390,
    speed: 1.1744,
    density: 41,
    roundCash: 177.4,
    special: null,
    groups: [{type:'ceramic',count:41,interval:0.18,scale:2.239},{type:'moab',count:20,interval:0.168,scale:2.3621},{type:'bfb',count:13,interval:0.156,scale:2.4853},{type:'zomg',count:10,interval:0.144,scale:2.6084},{type:'ddt',count:8,interval:0.132,scale:2.7316},{type:'bad',count:6,interval:0.12,scale:2.8547}]
  },
  120: {
    label: 'Round 120 — pressure check',
    difficulty: 2.2495,
    speed: 1.1760,
    density: 41,
    roundCash: 178.0,
    special: null,
    groups: [{type:'ceramic',count:41,interval:0.18,scale:2.2495},{type:'moab',count:20,interval:0.168,scale:2.3732},{type:'bfb',count:13,interval:0.156,scale:2.4969},{type:'zomg',count:10,interval:0.144,scale:2.6207},{type:'ddt',count:8,interval:0.132,scale:2.7444},{type:'bad',count:6,interval:0.12,scale:2.8681}]
  },
  121: {
    label: 'Round 121 — standard defense',
    difficulty: 2.2600,
    speed: 1.1776,
    density: 42,
    roundCash: 178.7,
    special: null,
    groups: [{type:'ceramic',count:42,interval:0.18,scale:2.26},{type:'moab',count:21,interval:0.168,scale:2.3843},{type:'bfb',count:14,interval:0.156,scale:2.5086},{type:'zomg',count:10,interval:0.144,scale:2.6329},{type:'ddt',count:8,interval:0.132,scale:2.7572},{type:'bad',count:7,interval:0.12,scale:2.8815}]
  },
  122: {
    label: 'Round 122 — standard defense',
    difficulty: 2.2705,
    speed: 1.1792,
    density: 42,
    roundCash: 179.3,
    special: null,
    groups: [{type:'ceramic',count:42,interval:0.18,scale:2.2705},{type:'moab',count:21,interval:0.168,scale:2.3954},{type:'bfb',count:14,interval:0.156,scale:2.5203},{type:'zomg',count:10,interval:0.144,scale:2.6451},{type:'ddt',count:8,interval:0.132,scale:2.77},{type:'bad',count:7,interval:0.12,scale:2.8949}]
  },
  123: {
    label: 'Round 123 — standard defense',
    difficulty: 2.2810,
    speed: 1.1808,
    density: 42,
    roundCash: 179.9,
    special: null,
    groups: [{type:'ceramic',count:42,interval:0.18,scale:2.281},{type:'moab',count:21,interval:0.168,scale:2.4065},{type:'bfb',count:14,interval:0.156,scale:2.5319},{type:'zomg',count:10,interval:0.144,scale:2.6574},{type:'ddt',count:8,interval:0.132,scale:2.7828},{type:'bad',count:7,interval:0.12,scale:2.9083}]
  },
  124: {
    label: 'Round 124 — standard defense',
    difficulty: 2.2915,
    speed: 1.1824,
    density: 43,
    roundCash: 180.6,
    special: null,
    groups: [{type:'ceramic',count:43,interval:0.18,scale:2.2915},{type:'moab',count:21,interval:0.168,scale:2.4175},{type:'bfb',count:14,interval:0.156,scale:2.5436},{type:'zomg',count:10,interval:0.144,scale:2.6696},{type:'ddt',count:8,interval:0.132,scale:2.7956},{type:'bad',count:7,interval:0.12,scale:2.9217}]
  },
  125: {
    label: 'Freeplay pressure spike',
    difficulty: 2.3020,
    speed: 1.1840,
    density: 43,
    roundCash: 181.3,
    special: 'Freeplay pressure spike',
    groups: [{type:'ceramic',count:43,interval:0.18,scale:2.302},{type:'moab',count:21,interval:0.168,scale:2.4286},{type:'bfb',count:14,interval:0.156,scale:2.5552},{type:'zomg',count:10,interval:0.144,scale:2.6818},{type:'ddt',count:8,interval:0.132,scale:2.8084},{type:'bad',count:7,interval:0.12,scale:2.935}]
  },
  126: {
    label: 'Round 126 — standard defense',
    difficulty: 2.3125,
    speed: 1.1856,
    density: 43,
    roundCash: 181.9,
    special: null,
    groups: [{type:'ceramic',count:43,interval:0.18,scale:2.3125},{type:'moab',count:21,interval:0.168,scale:2.4397},{type:'bfb',count:14,interval:0.156,scale:2.5669},{type:'zomg',count:10,interval:0.144,scale:2.6941},{type:'ddt',count:8,interval:0.132,scale:2.8213},{type:'bad',count:7,interval:0.12,scale:2.9484}]
  },
  127: {
    label: 'Round 127 — standard defense',
    difficulty: 2.3230,
    speed: 1.1872,
    density: 44,
    roundCash: 182.6,
    special: null,
    groups: [{type:'ceramic',count:44,interval:0.18,scale:2.323},{type:'moab',count:22,interval:0.168,scale:2.4508},{type:'bfb',count:14,interval:0.156,scale:2.5785},{type:'zomg',count:11,interval:0.144,scale:2.7063},{type:'ddt',count:8,interval:0.132,scale:2.8341},{type:'bad',count:7,interval:0.12,scale:2.9618}]
  },
  128: {
    label: 'Round 128 — standard defense',
    difficulty: 2.3335,
    speed: 1.1888,
    density: 44,
    roundCash: 183.2,
    special: null,
    groups: [{type:'ceramic',count:44,interval:0.18,scale:2.3335},{type:'moab',count:22,interval:0.168,scale:2.4618},{type:'bfb',count:14,interval:0.156,scale:2.5902},{type:'zomg',count:11,interval:0.144,scale:2.7185},{type:'ddt',count:8,interval:0.132,scale:2.8469},{type:'bad',count:7,interval:0.12,scale:2.9752}]
  },
  129: {
    label: 'Round 129 — standard defense',
    difficulty: 2.3440,
    speed: 1.1904,
    density: 44,
    roundCash: 183.9,
    special: null,
    groups: [{type:'ceramic',count:44,interval:0.18,scale:2.344},{type:'moab',count:22,interval:0.168,scale:2.4729},{type:'bfb',count:14,interval:0.156,scale:2.6018},{type:'zomg',count:11,interval:0.144,scale:2.7308},{type:'ddt',count:8,interval:0.132,scale:2.8597},{type:'bad',count:7,interval:0.12,scale:2.9886}]
  },
  130: {
    label: 'Round 130 — pressure check',
    difficulty: 2.3545,
    speed: 1.1920,
    density: 45,
    roundCash: 184.5,
    special: null,
    groups: [{type:'ceramic',count:45,interval:0.18,scale:2.3545},{type:'moab',count:22,interval:0.168,scale:2.484},{type:'bfb',count:15,interval:0.156,scale:2.6135},{type:'zomg',count:11,interval:0.144,scale:2.743},{type:'ddt',count:9,interval:0.132,scale:2.8725},{type:'bad',count:7,interval:0.12,scale:3.002}]
  },
  131: {
    label: 'Round 131 — standard defense',
    difficulty: 2.3650,
    speed: 1.1936,
    density: 45,
    roundCash: 185.2,
    special: null,
    groups: [{type:'ceramic',count:45,interval:0.18,scale:2.365},{type:'moab',count:22,interval:0.168,scale:2.4951},{type:'bfb',count:15,interval:0.156,scale:2.6252},{type:'zomg',count:11,interval:0.144,scale:2.7552},{type:'ddt',count:9,interval:0.132,scale:2.8853},{type:'bad',count:7,interval:0.12,scale:3.0154}]
  },
  132: {
    label: 'Round 132 — standard defense',
    difficulty: 2.3755,
    speed: 1.1952,
    density: 45,
    roundCash: 185.8,
    special: null,
    groups: [{type:'ceramic',count:45,interval:0.18,scale:2.3755},{type:'moab',count:22,interval:0.168,scale:2.5062},{type:'bfb',count:15,interval:0.156,scale:2.6368},{type:'zomg',count:11,interval:0.144,scale:2.7675},{type:'ddt',count:9,interval:0.132,scale:2.8981},{type:'bad',count:7,interval:0.12,scale:3.0288}]
  },
  133: {
    label: 'Round 133 — standard defense',
    difficulty: 2.3860,
    speed: 1.1968,
    density: 46,
    roundCash: 186.4,
    special: null,
    groups: [{type:'ceramic',count:46,interval:0.18,scale:2.386},{type:'moab',count:23,interval:0.168,scale:2.5172},{type:'bfb',count:15,interval:0.156,scale:2.6485},{type:'zomg',count:11,interval:0.144,scale:2.7797},{type:'ddt',count:9,interval:0.132,scale:2.9109},{type:'bad',count:7,interval:0.12,scale:3.0421}]
  },
  134: {
    label: 'Round 134 — standard defense',
    difficulty: 2.3965,
    speed: 1.1984,
    density: 46,
    roundCash: 187.1,
    special: null,
    groups: [{type:'ceramic',count:46,interval:0.18,scale:2.3965},{type:'moab',count:23,interval:0.168,scale:2.5283},{type:'bfb',count:15,interval:0.156,scale:2.6601},{type:'zomg',count:11,interval:0.144,scale:2.7919},{type:'ddt',count:9,interval:0.132,scale:2.9237},{type:'bad',count:7,interval:0.12,scale:3.0555}]
  },
  135: {
    label: 'Round 135 — standard defense',
    difficulty: 2.4070,
    speed: 1.2000,
    density: 46,
    roundCash: 187.8,
    special: null,
    groups: [{type:'ceramic',count:46,interval:0.18,scale:2.407},{type:'moab',count:23,interval:0.168,scale:2.5394},{type:'bfb',count:15,interval:0.156,scale:2.6718},{type:'zomg',count:11,interval:0.144,scale:2.8042},{type:'ddt',count:9,interval:0.132,scale:2.9365},{type:'bad',count:7,interval:0.12,scale:3.0689}]
  },
  136: {
    label: 'Round 136 — standard defense',
    difficulty: 2.4175,
    speed: 1.2016,
    density: 47,
    roundCash: 188.4,
    special: null,
    groups: [{type:'ceramic',count:47,interval:0.18,scale:2.4175},{type:'moab',count:23,interval:0.168,scale:2.5505},{type:'bfb',count:15,interval:0.156,scale:2.6834},{type:'zomg',count:11,interval:0.144,scale:2.8164},{type:'ddt',count:9,interval:0.132,scale:2.9493},{type:'bad',count:7,interval:0.12,scale:3.0823}]
  },
  137: {
    label: 'Round 137 — standard defense',
    difficulty: 2.4280,
    speed: 1.2032,
    density: 47,
    roundCash: 189.1,
    special: null,
    groups: [{type:'ceramic',count:47,interval:0.18,scale:2.428},{type:'moab',count:23,interval:0.168,scale:2.5615},{type:'bfb',count:15,interval:0.156,scale:2.6951},{type:'zomg',count:11,interval:0.144,scale:2.8286},{type:'ddt',count:9,interval:0.132,scale:2.9622},{type:'bad',count:7,interval:0.12,scale:3.0957}]
  },
  138: {
    label: 'Round 138 — standard defense',
    difficulty: 2.4385,
    speed: 1.2048,
    density: 47,
    roundCash: 189.7,
    special: null,
    groups: [{type:'ceramic',count:47,interval:0.18,scale:2.4385},{type:'moab',count:23,interval:0.168,scale:2.5726},{type:'bfb',count:15,interval:0.156,scale:2.7067},{type:'zomg',count:11,interval:0.144,scale:2.8409},{type:'ddt',count:9,interval:0.132,scale:2.975},{type:'bad',count:7,interval:0.12,scale:3.1091}]
  },
  139: {
    label: 'Round 139 — standard defense',
    difficulty: 2.4490,
    speed: 1.2064,
    density: 48,
    roundCash: 190.4,
    special: null,
    groups: [{type:'ceramic',count:48,interval:0.18,scale:2.449},{type:'moab',count:24,interval:0.168,scale:2.5837},{type:'bfb',count:16,interval:0.156,scale:2.7184},{type:'zomg',count:12,interval:0.144,scale:2.8531},{type:'ddt',count:9,interval:0.132,scale:2.9878},{type:'bad',count:8,interval:0.12,scale:3.1225}]
  },
  140: {
    label: 'Round 140 — pressure check',
    difficulty: 2.4595,
    speed: 1.2080,
    density: 48,
    roundCash: 191.0,
    special: null,
    groups: [{type:'ceramic',count:48,interval:0.18,scale:2.4595},{type:'moab',count:24,interval:0.168,scale:2.5948},{type:'bfb',count:16,interval:0.156,scale:2.73},{type:'zomg',count:12,interval:0.144,scale:2.8653},{type:'ddt',count:9,interval:0.132,scale:3.0006},{type:'bad',count:8,interval:0.12,scale:3.1359}]
  },
  141: {
    label: 'Round 141 — standard defense',
    difficulty: 2.4700,
    speed: 1.2096,
    density: 48,
    roundCash: 191.7,
    special: null,
    groups: [{type:'ceramic',count:48,interval:0.18,scale:2.47},{type:'moab',count:24,interval:0.168,scale:2.6059},{type:'bfb',count:16,interval:0.156,scale:2.7417},{type:'zomg',count:12,interval:0.144,scale:2.8776},{type:'ddt',count:9,interval:0.132,scale:3.0134},{type:'bad',count:8,interval:0.12,scale:3.1492}]
  },
  142: {
    label: 'Round 142 — standard defense',
    difficulty: 2.4805,
    speed: 1.2112,
    density: 49,
    roundCash: 192.3,
    special: null,
    groups: [{type:'ceramic',count:49,interval:0.18,scale:2.4805},{type:'moab',count:24,interval:0.168,scale:2.6169},{type:'bfb',count:16,interval:0.156,scale:2.7534},{type:'zomg',count:12,interval:0.144,scale:2.8898},{type:'ddt',count:9,interval:0.132,scale:3.0262},{type:'bad',count:8,interval:0.12,scale:3.1626}]
  },
  143: {
    label: 'Round 143 — standard defense',
    difficulty: 2.4910,
    speed: 1.2128,
    density: 49,
    roundCash: 192.9,
    special: null,
    groups: [{type:'ceramic',count:49,interval:0.18,scale:2.491},{type:'moab',count:24,interval:0.168,scale:2.628},{type:'bfb',count:16,interval:0.156,scale:2.765},{type:'zomg',count:12,interval:0.144,scale:2.902},{type:'ddt',count:9,interval:0.132,scale:3.039},{type:'bad',count:8,interval:0.12,scale:3.176}]
  },
  144: {
    label: 'Round 144 — standard defense',
    difficulty: 2.5015,
    speed: 1.2144,
    density: 49,
    roundCash: 193.6,
    special: null,
    groups: [{type:'ceramic',count:49,interval:0.18,scale:2.5015},{type:'moab',count:24,interval:0.168,scale:2.6391},{type:'bfb',count:16,interval:0.156,scale:2.7767},{type:'zomg',count:12,interval:0.144,scale:2.9142},{type:'ddt',count:9,interval:0.132,scale:3.0518},{type:'bad',count:8,interval:0.12,scale:3.1894}]
  },
  145: {
    label: 'Round 145 — standard defense',
    difficulty: 2.5120,
    speed: 1.2160,
    density: 50,
    roundCash: 194.3,
    special: null,
    groups: [{type:'ceramic',count:50,interval:0.18,scale:2.512},{type:'moab',count:25,interval:0.168,scale:2.6502},{type:'bfb',count:16,interval:0.156,scale:2.7883},{type:'zomg',count:12,interval:0.144,scale:2.9265},{type:'ddt',count:10,interval:0.132,scale:3.0646},{type:'bad',count:8,interval:0.12,scale:3.2028}]
  },
  146: {
    label: 'Round 146 — standard defense',
    difficulty: 2.5225,
    speed: 1.2176,
    density: 50,
    roundCash: 194.9,
    special: null,
    groups: [{type:'ceramic',count:50,interval:0.18,scale:2.5225},{type:'moab',count:25,interval:0.168,scale:2.6612},{type:'bfb',count:16,interval:0.156,scale:2.8},{type:'zomg',count:12,interval:0.144,scale:2.9387},{type:'ddt',count:10,interval:0.132,scale:3.0774},{type:'bad',count:8,interval:0.12,scale:3.2162}]
  },
  147: {
    label: 'Round 147 — standard defense',
    difficulty: 2.5330,
    speed: 1.2192,
    density: 50,
    roundCash: 195.6,
    special: null,
    groups: [{type:'ceramic',count:50,interval:0.18,scale:2.533},{type:'moab',count:25,interval:0.168,scale:2.6723},{type:'bfb',count:16,interval:0.156,scale:2.8116},{type:'zomg',count:12,interval:0.144,scale:2.9509},{type:'ddt',count:10,interval:0.132,scale:3.0903},{type:'bad',count:8,interval:0.12,scale:3.2296}]
  },
  148: {
    label: 'Round 148 — standard defense',
    difficulty: 2.5435,
    speed: 1.2208,
    density: 51,
    roundCash: 196.2,
    special: null,
    groups: [{type:'ceramic',count:51,interval:0.18,scale:2.5435},{type:'moab',count:25,interval:0.168,scale:2.6834},{type:'bfb',count:17,interval:0.156,scale:2.8233},{type:'zomg',count:12,interval:0.144,scale:2.9632},{type:'ddt',count:10,interval:0.132,scale:3.1031},{type:'bad',count:8,interval:0.12,scale:3.243}]
  },
  149: {
    label: 'Round 149 — standard defense',
    difficulty: 2.5540,
    speed: 1.2224,
    density: 51,
    roundCash: 196.9,
    special: null,
    groups: [{type:'ceramic',count:51,interval:0.18,scale:2.554},{type:'moab',count:25,interval:0.168,scale:2.6945},{type:'bfb',count:17,interval:0.156,scale:2.8349},{type:'zomg',count:12,interval:0.144,scale:2.9754},{type:'ddt',count:10,interval:0.132,scale:3.1159},{type:'bad',count:8,interval:0.12,scale:3.2563}]
  },
  150: {
    label: 'Freeplay heavy wall',
    difficulty: 2.5645,
    speed: 1.2240,
    density: 52,
    roundCash: 197.5,
    special: 'Freeplay heavy wall',
    groups: [{type:'ceramic',count:52,interval:0.18,scale:2.5645},{type:'moab',count:26,interval:0.168,scale:2.7055},{type:'bfb',count:17,interval:0.156,scale:2.8466},{type:'zomg',count:13,interval:0.144,scale:2.9876},{type:'ddt',count:10,interval:0.132,scale:3.1287},{type:'bad',count:8,interval:0.12,scale:3.2697}]
  },
  151: {
    label: 'Round 151 — standard defense',
    difficulty: 2.5750,
    speed: 1.2256,
    density: 52,
    roundCash: 198.2,
    special: null,
    groups: [{type:'ceramic',count:52,interval:0.18,scale:2.575},{type:'moab',count:26,interval:0.168,scale:2.7166},{type:'bfb',count:17,interval:0.156,scale:2.8583},{type:'zomg',count:13,interval:0.144,scale:2.9999},{type:'ddt',count:10,interval:0.132,scale:3.1415},{type:'bad',count:8,interval:0.12,scale:3.2831}]
  },
  152: {
    label: 'Round 152 — standard defense',
    difficulty: 2.5855,
    speed: 1.2272,
    density: 52,
    roundCash: 198.8,
    special: null,
    groups: [{type:'ceramic',count:52,interval:0.18,scale:2.5855},{type:'moab',count:26,interval:0.168,scale:2.7277},{type:'bfb',count:17,interval:0.156,scale:2.8699},{type:'zomg',count:13,interval:0.144,scale:3.0121},{type:'ddt',count:10,interval:0.132,scale:3.1543},{type:'bad',count:8,interval:0.12,scale:3.2965}]
  },
  153: {
    label: 'Round 153 — standard defense',
    difficulty: 2.5960,
    speed: 1.2288,
    density: 53,
    roundCash: 199.4,
    special: null,
    groups: [{type:'ceramic',count:53,interval:0.18,scale:2.596},{type:'moab',count:26,interval:0.168,scale:2.7388},{type:'bfb',count:17,interval:0.156,scale:2.8816},{type:'zomg',count:13,interval:0.144,scale:3.0243},{type:'ddt',count:10,interval:0.132,scale:3.1671},{type:'bad',count:8,interval:0.12,scale:3.3099}]
  },
  154: {
    label: 'Round 154 — standard defense',
    difficulty: 2.6065,
    speed: 1.2304,
    density: 53,
    roundCash: 200.1,
    special: null,
    groups: [{type:'ceramic',count:53,interval:0.18,scale:2.6065},{type:'moab',count:26,interval:0.168,scale:2.7499},{type:'bfb',count:17,interval:0.156,scale:2.8932},{type:'zomg',count:13,interval:0.144,scale:3.0366},{type:'ddt',count:10,interval:0.132,scale:3.1799},{type:'bad',count:8,interval:0.12,scale:3.3233}]
  },
  155: {
    label: 'Round 155 — standard defense',
    difficulty: 2.6170,
    speed: 1.2320,
    density: 53,
    roundCash: 200.8,
    special: null,
    groups: [{type:'ceramic',count:53,interval:0.18,scale:2.617},{type:'moab',count:26,interval:0.168,scale:2.7609},{type:'bfb',count:17,interval:0.156,scale:2.9049},{type:'zomg',count:13,interval:0.144,scale:3.0488},{type:'ddt',count:10,interval:0.132,scale:3.1927},{type:'bad',count:8,interval:0.12,scale:3.3367}]
  },
  156: {
    label: 'Round 156 — standard defense',
    difficulty: 2.6275,
    speed: 1.2336,
    density: 54,
    roundCash: 201.4,
    special: null,
    groups: [{type:'ceramic',count:54,interval:0.18,scale:2.6275},{type:'moab',count:27,interval:0.168,scale:2.772},{type:'bfb',count:18,interval:0.156,scale:2.9165},{type:'zomg',count:13,interval:0.144,scale:3.061},{type:'ddt',count:10,interval:0.132,scale:3.2055},{type:'bad',count:9,interval:0.12,scale:3.3501}]
  },
  157: {
    label: 'Round 157 — standard defense',
    difficulty: 2.6380,
    speed: 1.2352,
    density: 54,
    roundCash: 202.1,
    special: null,
    groups: [{type:'ceramic',count:54,interval:0.18,scale:2.638},{type:'moab',count:27,interval:0.168,scale:2.7831},{type:'bfb',count:18,interval:0.156,scale:2.9282},{type:'zomg',count:13,interval:0.144,scale:3.0733},{type:'ddt',count:10,interval:0.132,scale:3.2184},{type:'bad',count:9,interval:0.12,scale:3.3634}]
  },
  158: {
    label: 'Round 158 — standard defense',
    difficulty: 2.6485,
    speed: 1.2368,
    density: 54,
    roundCash: 202.7,
    special: null,
    groups: [{type:'ceramic',count:54,interval:0.18,scale:2.6485},{type:'moab',count:27,interval:0.168,scale:2.7942},{type:'bfb',count:18,interval:0.156,scale:2.9398},{type:'zomg',count:13,interval:0.144,scale:3.0855},{type:'ddt',count:10,interval:0.132,scale:3.2312},{type:'bad',count:9,interval:0.12,scale:3.3768}]
  },
  159: {
    label: 'Round 159 — standard defense',
    difficulty: 2.6590,
    speed: 1.2384,
    density: 55,
    roundCash: 203.4,
    special: null,
    groups: [{type:'ceramic',count:55,interval:0.18,scale:2.659},{type:'moab',count:27,interval:0.168,scale:2.8052},{type:'bfb',count:18,interval:0.156,scale:2.9515},{type:'zomg',count:13,interval:0.144,scale:3.0977},{type:'ddt',count:11,interval:0.132,scale:3.244},{type:'bad',count:9,interval:0.12,scale:3.3902}]
  },
  160: {
    label: 'Round 160 — pressure check',
    difficulty: 2.6695,
    speed: 1.2400,
    density: 55,
    roundCash: 204.0,
    special: null,
    groups: [{type:'ceramic',count:55,interval:0.18,scale:2.6695},{type:'moab',count:27,interval:0.168,scale:2.8163},{type:'bfb',count:18,interval:0.156,scale:2.9631},{type:'zomg',count:13,interval:0.144,scale:3.11},{type:'ddt',count:11,interval:0.132,scale:3.2568},{type:'bad',count:9,interval:0.12,scale:3.4036}]
  },
  161: {
    label: 'Round 161 — standard defense',
    difficulty: 2.6800,
    speed: 1.2416,
    density: 55,
    roundCash: 204.7,
    special: null,
    groups: [{type:'ceramic',count:55,interval:0.18,scale:2.68},{type:'moab',count:27,interval:0.168,scale:2.8274},{type:'bfb',count:18,interval:0.156,scale:2.9748},{type:'zomg',count:13,interval:0.144,scale:3.1222},{type:'ddt',count:11,interval:0.132,scale:3.2696},{type:'bad',count:9,interval:0.12,scale:3.417}]
  },
  162: {
    label: 'Round 162 — standard defense',
    difficulty: 2.6905,
    speed: 1.2432,
    density: 56,
    roundCash: 205.3,
    special: null,
    groups: [{type:'ceramic',count:56,interval:0.18,scale:2.6905},{type:'moab',count:28,interval:0.168,scale:2.8385},{type:'bfb',count:18,interval:0.156,scale:2.9865},{type:'zomg',count:14,interval:0.144,scale:3.1344},{type:'ddt',count:11,interval:0.132,scale:3.2824},{type:'bad',count:9,interval:0.12,scale:3.4304}]
  },
  163: {
    label: 'Round 163 — standard defense',
    difficulty: 2.7010,
    speed: 1.2448,
    density: 56,
    roundCash: 205.9,
    special: null,
    groups: [{type:'ceramic',count:56,interval:0.18,scale:2.701},{type:'moab',count:28,interval:0.168,scale:2.8496},{type:'bfb',count:18,interval:0.156,scale:2.9981},{type:'zomg',count:14,interval:0.144,scale:3.1467},{type:'ddt',count:11,interval:0.132,scale:3.2952},{type:'bad',count:9,interval:0.12,scale:3.4438}]
  },
  164: {
    label: 'Round 164 — standard defense',
    difficulty: 2.7115,
    speed: 1.2464,
    density: 56,
    roundCash: 206.6,
    special: null,
    groups: [{type:'ceramic',count:56,interval:0.18,scale:2.7115},{type:'moab',count:28,interval:0.168,scale:2.8606},{type:'bfb',count:18,interval:0.156,scale:3.0098},{type:'zomg',count:14,interval:0.144,scale:3.1589},{type:'ddt',count:11,interval:0.132,scale:3.308},{type:'bad',count:9,interval:0.12,scale:3.4572}]
  },
  165: {
    label: 'Round 165 — standard defense',
    difficulty: 2.7220,
    speed: 1.2480,
    density: 57,
    roundCash: 207.3,
    special: null,
    groups: [{type:'ceramic',count:57,interval:0.18,scale:2.722},{type:'moab',count:28,interval:0.168,scale:2.8717},{type:'bfb',count:19,interval:0.156,scale:3.0214},{type:'zomg',count:14,interval:0.144,scale:3.1711},{type:'ddt',count:11,interval:0.132,scale:3.3208},{type:'bad',count:9,interval:0.12,scale:3.4705}]
  },
  166: {
    label: 'Round 166 — standard defense',
    difficulty: 2.7325,
    speed: 1.2496,
    density: 57,
    roundCash: 207.9,
    special: null,
    groups: [{type:'ceramic',count:57,interval:0.18,scale:2.7325},{type:'moab',count:28,interval:0.168,scale:2.8828},{type:'bfb',count:19,interval:0.156,scale:3.0331},{type:'zomg',count:14,interval:0.144,scale:3.1834},{type:'ddt',count:11,interval:0.132,scale:3.3337},{type:'bad',count:9,interval:0.12,scale:3.4839}]
  },
  167: {
    label: 'Round 167 — standard defense',
    difficulty: 2.7430,
    speed: 1.2512,
    density: 57,
    roundCash: 208.6,
    special: null,
    groups: [{type:'ceramic',count:57,interval:0.18,scale:2.743},{type:'moab',count:28,interval:0.168,scale:2.8939},{type:'bfb',count:19,interval:0.156,scale:3.0447},{type:'zomg',count:14,interval:0.144,scale:3.1956},{type:'ddt',count:11,interval:0.132,scale:3.3465},{type:'bad',count:9,interval:0.12,scale:3.4973}]
  },
  168: {
    label: 'Round 168 — standard defense',
    difficulty: 2.7535,
    speed: 1.2528,
    density: 58,
    roundCash: 209.2,
    special: null,
    groups: [{type:'ceramic',count:58,interval:0.18,scale:2.7535},{type:'moab',count:29,interval:0.168,scale:2.9049},{type:'bfb',count:19,interval:0.156,scale:3.0564},{type:'zomg',count:14,interval:0.144,scale:3.2078},{type:'ddt',count:11,interval:0.132,scale:3.3593},{type:'bad',count:9,interval:0.12,scale:3.5107}]
  },
  169: {
    label: 'Round 169 — standard defense',
    difficulty: 2.7640,
    speed: 1.2544,
    density: 58,
    roundCash: 209.9,
    special: null,
    groups: [{type:'ceramic',count:58,interval:0.18,scale:2.764},{type:'moab',count:29,interval:0.168,scale:2.916},{type:'bfb',count:19,interval:0.156,scale:3.068},{type:'zomg',count:14,interval:0.144,scale:3.2201},{type:'ddt',count:11,interval:0.132,scale:3.3721},{type:'bad',count:9,interval:0.12,scale:3.5241}]
  },
  170: {
    label: 'Round 170 — pressure check',
    difficulty: 2.7745,
    speed: 1.2560,
    density: 58,
    roundCash: 210.5,
    special: null,
    groups: [{type:'ceramic',count:58,interval:0.18,scale:2.7745},{type:'moab',count:29,interval:0.168,scale:2.9271},{type:'bfb',count:19,interval:0.156,scale:3.0797},{type:'zomg',count:14,interval:0.144,scale:3.2323},{type:'ddt',count:11,interval:0.132,scale:3.3849},{type:'bad',count:9,interval:0.12,scale:3.5375}]
  },
  171: {
    label: 'Round 171 — standard defense',
    difficulty: 2.7850,
    speed: 1.2576,
    density: 59,
    roundCash: 211.2,
    special: null,
    groups: [{type:'ceramic',count:59,interval:0.18,scale:2.785},{type:'moab',count:29,interval:0.168,scale:2.9382},{type:'bfb',count:19,interval:0.156,scale:3.0914},{type:'zomg',count:14,interval:0.144,scale:3.2445},{type:'ddt',count:11,interval:0.132,scale:3.3977},{type:'bad',count:9,interval:0.12,scale:3.5509}]
  },
  172: {
    label: 'Round 172 — standard defense',
    difficulty: 2.7955,
    speed: 1.2592,
    density: 59,
    roundCash: 211.8,
    special: null,
    groups: [{type:'ceramic',count:59,interval:0.18,scale:2.7955},{type:'moab',count:29,interval:0.168,scale:2.9493},{type:'bfb',count:19,interval:0.156,scale:3.103},{type:'zomg',count:14,interval:0.144,scale:3.2568},{type:'ddt',count:11,interval:0.132,scale:3.4105},{type:'bad',count:9,interval:0.12,scale:3.5643}]
  },
  173: {
    label: 'Round 173 — standard defense',
    difficulty: 2.8060,
    speed: 1.2608,
    density: 59,
    roundCash: 212.4,
    special: null,
    groups: [{type:'ceramic',count:59,interval:0.18,scale:2.806},{type:'moab',count:29,interval:0.168,scale:2.9603},{type:'bfb',count:19,interval:0.156,scale:3.1147},{type:'zomg',count:14,interval:0.144,scale:3.269},{type:'ddt',count:11,interval:0.132,scale:3.4233},{type:'bad',count:9,interval:0.12,scale:3.5776}]
  },
  174: {
    label: 'Round 174 — standard defense',
    difficulty: 2.8165,
    speed: 1.2624,
    density: 60,
    roundCash: 213.1,
    special: null,
    groups: [{type:'ceramic',count:60,interval:0.18,scale:2.8165},{type:'moab',count:30,interval:0.168,scale:2.9714},{type:'bfb',count:20,interval:0.156,scale:3.1263},{type:'zomg',count:15,interval:0.144,scale:3.2812},{type:'ddt',count:12,interval:0.132,scale:3.4361},{type:'bad',count:10,interval:0.12,scale:3.591}]
  },
  175: {
    label: 'Freeplay ceramic storm',
    difficulty: 2.8270,
    speed: 1.2640,
    density: 60,
    roundCash: 213.8,
    special: 'Freeplay ceramic storm',
    groups: [{type:'ceramic',count:60,interval:0.18,scale:2.827},{type:'moab',count:30,interval:0.168,scale:2.9825},{type:'bfb',count:20,interval:0.156,scale:3.138},{type:'zomg',count:15,interval:0.144,scale:3.2935},{type:'ddt',count:12,interval:0.132,scale:3.4489},{type:'bad',count:10,interval:0.12,scale:3.6044}]
  },
  176: {
    label: 'Round 176 — standard defense',
    difficulty: 2.8375,
    speed: 1.2656,
    density: 60,
    roundCash: 214.4,
    special: null,
    groups: [{type:'ceramic',count:60,interval:0.18,scale:2.8375},{type:'moab',count:30,interval:0.168,scale:2.9936},{type:'bfb',count:20,interval:0.156,scale:3.1496},{type:'zomg',count:15,interval:0.144,scale:3.3057},{type:'ddt',count:12,interval:0.132,scale:3.4617},{type:'bad',count:10,interval:0.12,scale:3.6178}]
  },
  177: {
    label: 'Round 177 — standard defense',
    difficulty: 2.8480,
    speed: 1.2672,
    density: 61,
    roundCash: 215.1,
    special: null,
    groups: [{type:'ceramic',count:61,interval:0.18,scale:2.848},{type:'moab',count:30,interval:0.168,scale:3.0046},{type:'bfb',count:20,interval:0.156,scale:3.1613},{type:'zomg',count:15,interval:0.144,scale:3.3179},{type:'ddt',count:12,interval:0.132,scale:3.4746},{type:'bad',count:10,interval:0.12,scale:3.6312}]
  },
  178: {
    label: 'Round 178 — standard defense',
    difficulty: 2.8585,
    speed: 1.2688,
    density: 61,
    roundCash: 215.7,
    special: null,
    groups: [{type:'ceramic',count:61,interval:0.18,scale:2.8585},{type:'moab',count:30,interval:0.168,scale:3.0157},{type:'bfb',count:20,interval:0.156,scale:3.1729},{type:'zomg',count:15,interval:0.144,scale:3.3302},{type:'ddt',count:12,interval:0.132,scale:3.4874},{type:'bad',count:10,interval:0.12,scale:3.6446}]
  },
  179: {
    label: 'Round 179 — standard defense',
    difficulty: 2.8690,
    speed: 1.2704,
    density: 61,
    roundCash: 216.4,
    special: null,
    groups: [{type:'ceramic',count:61,interval:0.18,scale:2.869},{type:'moab',count:30,interval:0.168,scale:3.0268},{type:'bfb',count:20,interval:0.156,scale:3.1846},{type:'zomg',count:15,interval:0.144,scale:3.3424},{type:'ddt',count:12,interval:0.132,scale:3.5002},{type:'bad',count:10,interval:0.12,scale:3.658}]
  },
  180: {
    label: 'Round 180 — pressure check',
    difficulty: 2.8795,
    speed: 1.2720,
    density: 62,
    roundCash: 217.0,
    special: null,
    groups: [{type:'ceramic',count:62,interval:0.18,scale:2.8795},{type:'moab',count:31,interval:0.168,scale:3.0379},{type:'bfb',count:20,interval:0.156,scale:3.1962},{type:'zomg',count:15,interval:0.144,scale:3.3546},{type:'ddt',count:12,interval:0.132,scale:3.513},{type:'bad',count:10,interval:0.12,scale:3.6714}]
  },
  181: {
    label: 'Round 181 — standard defense',
    difficulty: 2.8900,
    speed: 1.2736,
    density: 62,
    roundCash: 217.7,
    special: null,
    groups: [{type:'ceramic',count:62,interval:0.18,scale:2.89},{type:'moab',count:31,interval:0.168,scale:3.049},{type:'bfb',count:20,interval:0.156,scale:3.2079},{type:'zomg',count:15,interval:0.144,scale:3.3669},{type:'ddt',count:12,interval:0.132,scale:3.5258},{type:'bad',count:10,interval:0.12,scale:3.6847}]
  },
  182: {
    label: 'Round 182 — standard defense',
    difficulty: 2.9005,
    speed: 1.2752,
    density: 62,
    roundCash: 218.3,
    special: null,
    groups: [{type:'ceramic',count:62,interval:0.18,scale:2.9005},{type:'moab',count:31,interval:0.168,scale:3.06},{type:'bfb',count:20,interval:0.156,scale:3.2196},{type:'zomg',count:15,interval:0.144,scale:3.3791},{type:'ddt',count:12,interval:0.132,scale:3.5386},{type:'bad',count:10,interval:0.12,scale:3.6981}]
  },
  183: {
    label: 'Round 183 — standard defense',
    difficulty: 2.9110,
    speed: 1.2768,
    density: 63,
    roundCash: 218.9,
    special: null,
    groups: [{type:'ceramic',count:63,interval:0.18,scale:2.911},{type:'moab',count:31,interval:0.168,scale:3.0711},{type:'bfb',count:21,interval:0.156,scale:3.2312},{type:'zomg',count:15,interval:0.144,scale:3.3913},{type:'ddt',count:12,interval:0.132,scale:3.5514},{type:'bad',count:10,interval:0.12,scale:3.7115}]
  },
  184: {
    label: 'Round 184 — standard defense',
    difficulty: 2.9215,
    speed: 1.2784,
    density: 63,
    roundCash: 219.6,
    special: null,
    groups: [{type:'ceramic',count:63,interval:0.18,scale:2.9215},{type:'moab',count:31,interval:0.168,scale:3.0822},{type:'bfb',count:21,interval:0.156,scale:3.2429},{type:'zomg',count:15,interval:0.144,scale:3.4035},{type:'ddt',count:12,interval:0.132,scale:3.5642},{type:'bad',count:10,interval:0.12,scale:3.7249}]
  },
  185: {
    label: 'Round 185 — standard defense',
    difficulty: 2.9320,
    speed: 1.2800,
    density: 63,
    roundCash: 220.3,
    special: null,
    groups: [{type:'ceramic',count:63,interval:0.18,scale:2.932},{type:'moab',count:31,interval:0.168,scale:3.0933},{type:'bfb',count:21,interval:0.156,scale:3.2545},{type:'zomg',count:15,interval:0.144,scale:3.4158},{type:'ddt',count:12,interval:0.132,scale:3.577},{type:'bad',count:10,interval:0.12,scale:3.7383}]
  },
  186: {
    label: 'Round 186 — standard defense',
    difficulty: 2.9425,
    speed: 1.2816,
    density: 64,
    roundCash: 220.9,
    special: null,
    groups: [{type:'ceramic',count:64,interval:0.18,scale:2.9425},{type:'moab',count:32,interval:0.168,scale:3.1043},{type:'bfb',count:21,interval:0.156,scale:3.2662},{type:'zomg',count:16,interval:0.144,scale:3.428},{type:'ddt',count:12,interval:0.132,scale:3.5898},{type:'bad',count:10,interval:0.12,scale:3.7517}]
  },
  187: {
    label: 'Round 187 — standard defense',
    difficulty: 2.9530,
    speed: 1.2832,
    density: 64,
    roundCash: 221.6,
    special: null,
    groups: [{type:'ceramic',count:64,interval:0.18,scale:2.953},{type:'moab',count:32,interval:0.168,scale:3.1154},{type:'bfb',count:21,interval:0.156,scale:3.2778},{type:'zomg',count:16,interval:0.144,scale:3.4402},{type:'ddt',count:12,interval:0.132,scale:3.6027},{type:'bad',count:10,interval:0.12,scale:3.7651}]
  },
  188: {
    label: 'Round 188 — standard defense',
    difficulty: 2.9635,
    speed: 1.2848,
    density: 64,
    roundCash: 222.2,
    special: null,
    groups: [{type:'ceramic',count:64,interval:0.18,scale:2.9635},{type:'moab',count:32,interval:0.168,scale:3.1265},{type:'bfb',count:21,interval:0.156,scale:3.2895},{type:'zomg',count:16,interval:0.144,scale:3.4525},{type:'ddt',count:12,interval:0.132,scale:3.6155},{type:'bad',count:10,interval:0.12,scale:3.7785}]
  },
  189: {
    label: 'Round 189 — standard defense',
    difficulty: 2.9740,
    speed: 1.2864,
    density: 65,
    roundCash: 222.9,
    special: null,
    groups: [{type:'ceramic',count:65,interval:0.18,scale:2.974},{type:'moab',count:32,interval:0.168,scale:3.1376},{type:'bfb',count:21,interval:0.156,scale:3.3011},{type:'zomg',count:16,interval:0.144,scale:3.4647},{type:'ddt',count:13,interval:0.132,scale:3.6283},{type:'bad',count:10,interval:0.12,scale:3.7919}]
  },
  190: {
    label: 'Round 190 — pressure check',
    difficulty: 2.9845,
    speed: 1.2880,
    density: 65,
    roundCash: 223.5,
    special: null,
    groups: [{type:'ceramic',count:65,interval:0.18,scale:2.9845},{type:'moab',count:32,interval:0.168,scale:3.1486},{type:'bfb',count:21,interval:0.156,scale:3.3128},{type:'zomg',count:16,interval:0.144,scale:3.4769},{type:'ddt',count:13,interval:0.132,scale:3.6411},{type:'bad',count:10,interval:0.12,scale:3.8052}]
  },
  191: {
    label: 'Round 191 — standard defense',
    difficulty: 2.9950,
    speed: 1.2896,
    density: 65,
    roundCash: 224.2,
    special: null,
    groups: [{type:'ceramic',count:65,interval:0.18,scale:2.995},{type:'moab',count:32,interval:0.168,scale:3.1597},{type:'bfb',count:21,interval:0.156,scale:3.3245},{type:'zomg',count:16,interval:0.144,scale:3.4892},{type:'ddt',count:13,interval:0.132,scale:3.6539},{type:'bad',count:10,interval:0.12,scale:3.8186}]
  },
  192: {
    label: 'Round 192 — standard defense',
    difficulty: 3.0055,
    speed: 1.2912,
    density: 66,
    roundCash: 224.8,
    special: null,
    groups: [{type:'ceramic',count:66,interval:0.18,scale:3.0055},{type:'moab',count:33,interval:0.168,scale:3.1708},{type:'bfb',count:22,interval:0.156,scale:3.3361},{type:'zomg',count:16,interval:0.144,scale:3.5014},{type:'ddt',count:13,interval:0.132,scale:3.6667},{type:'bad',count:11,interval:0.12,scale:3.832}]
  },
  193: {
    label: 'Round 193 — standard defense',
    difficulty: 3.0160,
    speed: 1.2928,
    density: 66,
    roundCash: 225.4,
    special: null,
    groups: [{type:'ceramic',count:66,interval:0.18,scale:3.016},{type:'moab',count:33,interval:0.168,scale:3.1819},{type:'bfb',count:22,interval:0.156,scale:3.3478},{type:'zomg',count:16,interval:0.144,scale:3.5136},{type:'ddt',count:13,interval:0.132,scale:3.6795},{type:'bad',count:11,interval:0.12,scale:3.8454}]
  },
  194: {
    label: 'Round 194 — standard defense',
    difficulty: 3.0265,
    speed: 1.2944,
    density: 66,
    roundCash: 226.1,
    special: null,
    groups: [{type:'ceramic',count:66,interval:0.18,scale:3.0265},{type:'moab',count:33,interval:0.168,scale:3.193},{type:'bfb',count:22,interval:0.156,scale:3.3594},{type:'zomg',count:16,interval:0.144,scale:3.5259},{type:'ddt',count:13,interval:0.132,scale:3.6923},{type:'bad',count:11,interval:0.12,scale:3.8588}]
  },
  195: {
    label: 'Round 195 — standard defense',
    difficulty: 3.0370,
    speed: 1.2960,
    density: 67,
    roundCash: 226.8,
    special: null,
    groups: [{type:'ceramic',count:67,interval:0.18,scale:3.037},{type:'moab',count:33,interval:0.168,scale:3.204},{type:'bfb',count:22,interval:0.156,scale:3.3711},{type:'zomg',count:16,interval:0.144,scale:3.5381},{type:'ddt',count:13,interval:0.132,scale:3.7051},{type:'bad',count:11,interval:0.12,scale:3.8722}]
  },
  196: {
    label: 'Round 196 — standard defense',
    difficulty: 3.0475,
    speed: 1.2976,
    density: 67,
    roundCash: 227.4,
    special: null,
    groups: [{type:'ceramic',count:67,interval:0.18,scale:3.0475},{type:'moab',count:33,interval:0.168,scale:3.2151},{type:'bfb',count:22,interval:0.156,scale:3.3827},{type:'zomg',count:16,interval:0.144,scale:3.5503},{type:'ddt',count:13,interval:0.132,scale:3.7179},{type:'bad',count:11,interval:0.12,scale:3.8856}]
  },
  197: {
    label: 'Round 197 — standard defense',
    difficulty: 3.0580,
    speed: 1.2992,
    density: 67,
    roundCash: 228.1,
    special: null,
    groups: [{type:'ceramic',count:67,interval:0.18,scale:3.058},{type:'moab',count:33,interval:0.168,scale:3.2262},{type:'bfb',count:22,interval:0.156,scale:3.3944},{type:'zomg',count:16,interval:0.144,scale:3.5626},{type:'ddt',count:13,interval:0.132,scale:3.7308},{type:'bad',count:11,interval:0.12,scale:3.8989}]
  },
  198: {
    label: 'Round 198 — standard defense',
    difficulty: 3.0685,
    speed: 1.3008,
    density: 68,
    roundCash: 228.7,
    special: null,
    groups: [{type:'ceramic',count:68,interval:0.18,scale:3.0685},{type:'moab',count:34,interval:0.168,scale:3.2373},{type:'bfb',count:22,interval:0.156,scale:3.406},{type:'zomg',count:17,interval:0.144,scale:3.5748},{type:'ddt',count:13,interval:0.132,scale:3.7436},{type:'bad',count:11,interval:0.12,scale:3.9123}]
  },
  199: {
    label: 'Round 199 — standard defense',
    difficulty: 3.0790,
    speed: 1.3024,
    density: 68,
    roundCash: 229.3,
    special: null,
    groups: [{type:'ceramic',count:68,interval:0.18,scale:3.079},{type:'moab',count:34,interval:0.168,scale:3.2483},{type:'bfb',count:22,interval:0.156,scale:3.4177},{type:'zomg',count:17,interval:0.144,scale:3.587},{type:'ddt',count:13,interval:0.132,scale:3.7564},{type:'bad',count:11,interval:0.12,scale:3.9257}]
  },
  200: {
    label: 'Freeplay boss rehearsal',
    difficulty: 3.0895,
    speed: 1.3040,
    density: 69,
    roundCash: 230.0,
    special: 'Freeplay boss rehearsal',
    groups: [{type:'ceramic',count:69,interval:0.18,scale:3.0895},{type:'moab',count:34,interval:0.168,scale:3.2594},{type:'bfb',count:23,interval:0.156,scale:3.4293},{type:'zomg',count:17,interval:0.144,scale:3.5993},{type:'ddt',count:13,interval:0.132,scale:3.7692},{type:'bad',count:11,interval:0.12,scale:3.9391}]
  },
  201: {
    label: 'Round 201 — standard defense',
    difficulty: 3.1000,
    speed: 1.3056,
    density: 69,
    roundCash: 230.7,
    special: null,
    groups: [{type:'ceramic',count:69,interval:0.18,scale:3.1},{type:'moab',count:34,interval:0.168,scale:3.2705},{type:'bfb',count:23,interval:0.156,scale:3.441},{type:'zomg',count:17,interval:0.144,scale:3.6115},{type:'ddt',count:13,interval:0.132,scale:3.782},{type:'bad',count:11,interval:0.12,scale:3.9525}]
  },
  202: {
    label: 'Round 202 — standard defense',
    difficulty: 3.1105,
    speed: 1.3072,
    density: 69,
    roundCash: 231.3,
    special: null,
    groups: [{type:'ceramic',count:69,interval:0.18,scale:3.1105},{type:'moab',count:34,interval:0.168,scale:3.2816},{type:'bfb',count:23,interval:0.156,scale:3.4527},{type:'zomg',count:17,interval:0.144,scale:3.6237},{type:'ddt',count:13,interval:0.132,scale:3.7948},{type:'bad',count:11,interval:0.12,scale:3.9659}]
  },
  203: {
    label: 'Round 203 — standard defense',
    difficulty: 3.1210,
    speed: 1.3088,
    density: 70,
    roundCash: 232.0,
    special: null,
    groups: [{type:'ceramic',count:70,interval:0.18,scale:3.121},{type:'moab',count:35,interval:0.168,scale:3.2927},{type:'bfb',count:23,interval:0.156,scale:3.4643},{type:'zomg',count:17,interval:0.144,scale:3.636},{type:'ddt',count:14,interval:0.132,scale:3.8076},{type:'bad',count:11,interval:0.12,scale:3.9793}]
  },
  204: {
    label: 'Round 204 — standard defense',
    difficulty: 3.1315,
    speed: 1.3104,
    density: 70,
    roundCash: 232.6,
    special: null,
    groups: [{type:'ceramic',count:70,interval:0.18,scale:3.1315},{type:'moab',count:35,interval:0.168,scale:3.3037},{type:'bfb',count:23,interval:0.156,scale:3.476},{type:'zomg',count:17,interval:0.144,scale:3.6482},{type:'ddt',count:14,interval:0.132,scale:3.8204},{type:'bad',count:11,interval:0.12,scale:3.9927}]
  },
  205: {
    label: 'Round 205 — standard defense',
    difficulty: 3.1420,
    speed: 1.3120,
    density: 70,
    roundCash: 233.3,
    special: null,
    groups: [{type:'ceramic',count:70,interval:0.18,scale:3.142},{type:'moab',count:35,interval:0.168,scale:3.3148},{type:'bfb',count:23,interval:0.156,scale:3.4876},{type:'zomg',count:17,interval:0.144,scale:3.6604},{type:'ddt',count:14,interval:0.132,scale:3.8332},{type:'bad',count:11,interval:0.12,scale:4.006}]
  },
  206: {
    label: 'Round 206 — standard defense',
    difficulty: 3.1525,
    speed: 1.3136,
    density: 71,
    roundCash: 233.9,
    special: null,
    groups: [{type:'ceramic',count:71,interval:0.18,scale:3.1525},{type:'moab',count:35,interval:0.168,scale:3.3259},{type:'bfb',count:23,interval:0.156,scale:3.4993},{type:'zomg',count:17,interval:0.144,scale:3.6727},{type:'ddt',count:14,interval:0.132,scale:3.846},{type:'bad',count:11,interval:0.12,scale:4.0194}]
  },
  207: {
    label: 'Round 207 — standard defense',
    difficulty: 3.1630,
    speed: 1.3152,
    density: 71,
    roundCash: 234.6,
    special: null,
    groups: [{type:'ceramic',count:71,interval:0.18,scale:3.163},{type:'moab',count:35,interval:0.168,scale:3.337},{type:'bfb',count:23,interval:0.156,scale:3.5109},{type:'zomg',count:17,interval:0.144,scale:3.6849},{type:'ddt',count:14,interval:0.132,scale:3.8589},{type:'bad',count:11,interval:0.12,scale:4.0328}]
  },
  208: {
    label: 'Round 208 — standard defense',
    difficulty: 3.1735,
    speed: 1.3168,
    density: 71,
    roundCash: 235.2,
    special: null,
    groups: [{type:'ceramic',count:71,interval:0.18,scale:3.1735},{type:'moab',count:35,interval:0.168,scale:3.348},{type:'bfb',count:23,interval:0.156,scale:3.5226},{type:'zomg',count:17,interval:0.144,scale:3.6971},{type:'ddt',count:14,interval:0.132,scale:3.8717},{type:'bad',count:11,interval:0.12,scale:4.0462}]
  },
  209: {
    label: 'Round 209 — standard defense',
    difficulty: 3.1840,
    speed: 1.3184,
    density: 72,
    roundCash: 235.8,
    special: null,
    groups: [{type:'ceramic',count:72,interval:0.18,scale:3.184},{type:'moab',count:36,interval:0.168,scale:3.3591},{type:'bfb',count:24,interval:0.156,scale:3.5342},{type:'zomg',count:18,interval:0.144,scale:3.7094},{type:'ddt',count:14,interval:0.132,scale:3.8845},{type:'bad',count:12,interval:0.12,scale:4.0596}]
  },
  210: {
    label: 'Round 210 — pressure check',
    difficulty: 3.1945,
    speed: 1.3200,
    density: 72,
    roundCash: 236.5,
    special: null,
    groups: [{type:'ceramic',count:72,interval:0.18,scale:3.1945},{type:'moab',count:36,interval:0.168,scale:3.3702},{type:'bfb',count:24,interval:0.156,scale:3.5459},{type:'zomg',count:18,interval:0.144,scale:3.7216},{type:'ddt',count:14,interval:0.132,scale:3.8973},{type:'bad',count:12,interval:0.12,scale:4.073}]
  },
  211: {
    label: 'Round 211 — standard defense',
    difficulty: 3.2050,
    speed: 1.3216,
    density: 72,
    roundCash: 237.2,
    special: null,
    groups: [{type:'ceramic',count:72,interval:0.18,scale:3.205},{type:'moab',count:36,interval:0.168,scale:3.3813},{type:'bfb',count:24,interval:0.156,scale:3.5576},{type:'zomg',count:18,interval:0.144,scale:3.7338},{type:'ddt',count:14,interval:0.132,scale:3.9101},{type:'bad',count:12,interval:0.12,scale:4.0864}]
  },
  212: {
    label: 'Round 212 — standard defense',
    difficulty: 3.2155,
    speed: 1.3232,
    density: 73,
    roundCash: 237.8,
    special: null,
    groups: [{type:'ceramic',count:73,interval:0.18,scale:3.2155},{type:'moab',count:36,interval:0.168,scale:3.3924},{type:'bfb',count:24,interval:0.156,scale:3.5692},{type:'zomg',count:18,interval:0.144,scale:3.7461},{type:'ddt',count:14,interval:0.132,scale:3.9229},{type:'bad',count:12,interval:0.12,scale:4.0998}]
  },
  213: {
    label: 'Round 213 — standard defense',
    difficulty: 3.2260,
    speed: 1.3248,
    density: 73,
    roundCash: 238.5,
    special: null,
    groups: [{type:'ceramic',count:73,interval:0.18,scale:3.226},{type:'moab',count:36,interval:0.168,scale:3.4034},{type:'bfb',count:24,interval:0.156,scale:3.5809},{type:'zomg',count:18,interval:0.144,scale:3.7583},{type:'ddt',count:14,interval:0.132,scale:3.9357},{type:'bad',count:12,interval:0.12,scale:4.1132}]
  },
  214: {
    label: 'Round 214 — standard defense',
    difficulty: 3.2365,
    speed: 1.3264,
    density: 73,
    roundCash: 239.1,
    special: null,
    groups: [{type:'ceramic',count:73,interval:0.18,scale:3.2365},{type:'moab',count:36,interval:0.168,scale:3.4145},{type:'bfb',count:24,interval:0.156,scale:3.5925},{type:'zomg',count:18,interval:0.144,scale:3.7705},{type:'ddt',count:14,interval:0.132,scale:3.9485},{type:'bad',count:12,interval:0.12,scale:4.1265}]
  },
  215: {
    label: 'Round 215 — standard defense',
    difficulty: 3.2470,
    speed: 1.3280,
    density: 74,
    roundCash: 239.8,
    special: null,
    groups: [{type:'ceramic',count:74,interval:0.18,scale:3.247},{type:'moab',count:37,interval:0.168,scale:3.4256},{type:'bfb',count:24,interval:0.156,scale:3.6042},{type:'zomg',count:18,interval:0.144,scale:3.7828},{type:'ddt',count:14,interval:0.132,scale:3.9613},{type:'bad',count:12,interval:0.12,scale:4.1399}]
  },
  216: {
    label: 'Round 216 — standard defense',
    difficulty: 3.2575,
    speed: 1.3296,
    density: 74,
    roundCash: 240.4,
    special: null,
    groups: [{type:'ceramic',count:74,interval:0.18,scale:3.2575},{type:'moab',count:37,interval:0.168,scale:3.4367},{type:'bfb',count:24,interval:0.156,scale:3.6158},{type:'zomg',count:18,interval:0.144,scale:3.795},{type:'ddt',count:14,interval:0.132,scale:3.9741},{type:'bad',count:12,interval:0.12,scale:4.1533}]
  },
  217: {
    label: 'Round 217 — standard defense',
    difficulty: 3.2680,
    speed: 1.3312,
    density: 74,
    roundCash: 241.1,
    special: null,
    groups: [{type:'ceramic',count:74,interval:0.18,scale:3.268},{type:'moab',count:37,interval:0.168,scale:3.4477},{type:'bfb',count:24,interval:0.156,scale:3.6275},{type:'zomg',count:18,interval:0.144,scale:3.8072},{type:'ddt',count:14,interval:0.132,scale:3.987},{type:'bad',count:12,interval:0.12,scale:4.1667}]
  },
  218: {
    label: 'Round 218 — standard defense',
    difficulty: 3.2785,
    speed: 1.3328,
    density: 75,
    roundCash: 241.7,
    special: null,
    groups: [{type:'ceramic',count:75,interval:0.18,scale:3.2785},{type:'moab',count:37,interval:0.168,scale:3.4588},{type:'bfb',count:25,interval:0.156,scale:3.6391},{type:'zomg',count:18,interval:0.144,scale:3.8195},{type:'ddt',count:15,interval:0.132,scale:3.9998},{type:'bad',count:12,interval:0.12,scale:4.1801}]
  },
  219: {
    label: 'Round 219 — standard defense',
    difficulty: 3.2890,
    speed: 1.3344,
    density: 75,
    roundCash: 242.3,
    special: null,
    groups: [{type:'ceramic',count:75,interval:0.18,scale:3.289},{type:'moab',count:37,interval:0.168,scale:3.4699},{type:'bfb',count:25,interval:0.156,scale:3.6508},{type:'zomg',count:18,interval:0.144,scale:3.8317},{type:'ddt',count:15,interval:0.132,scale:4.0126},{type:'bad',count:12,interval:0.12,scale:4.1935}]
  },
  220: {
    label: 'Round 220 — pressure check',
    difficulty: 3.2995,
    speed: 1.3360,
    density: 75,
    roundCash: 243.0,
    special: null,
    groups: [{type:'ceramic',count:75,interval:0.18,scale:3.2995},{type:'moab',count:37,interval:0.168,scale:3.481},{type:'bfb',count:25,interval:0.156,scale:3.6624},{type:'zomg',count:18,interval:0.144,scale:3.8439},{type:'ddt',count:15,interval:0.132,scale:4.0254},{type:'bad',count:12,interval:0.12,scale:4.2069}]
  },
  221: {
    label: 'Round 221 — standard defense',
    difficulty: 3.3100,
    speed: 1.3376,
    density: 76,
    roundCash: 243.7,
    special: null,
    groups: [{type:'ceramic',count:76,interval:0.18,scale:3.31},{type:'moab',count:38,interval:0.168,scale:3.492},{type:'bfb',count:25,interval:0.156,scale:3.6741},{type:'zomg',count:19,interval:0.144,scale:3.8561},{type:'ddt',count:15,interval:0.132,scale:4.0382},{type:'bad',count:12,interval:0.12,scale:4.2203}]
  },
  222: {
    label: 'Round 222 — standard defense',
    difficulty: 3.3205,
    speed: 1.3392,
    density: 76,
    roundCash: 244.3,
    special: null,
    groups: [{type:'ceramic',count:76,interval:0.18,scale:3.3205},{type:'moab',count:38,interval:0.168,scale:3.5031},{type:'bfb',count:25,interval:0.156,scale:3.6858},{type:'zomg',count:19,interval:0.144,scale:3.8684},{type:'ddt',count:15,interval:0.132,scale:4.051},{type:'bad',count:12,interval:0.12,scale:4.2336}]
  },
  223: {
    label: 'Round 223 — standard defense',
    difficulty: 3.3310,
    speed: 1.3408,
    density: 76,
    roundCash: 245.0,
    special: null,
    groups: [{type:'ceramic',count:76,interval:0.18,scale:3.331},{type:'moab',count:38,interval:0.168,scale:3.5142},{type:'bfb',count:25,interval:0.156,scale:3.6974},{type:'zomg',count:19,interval:0.144,scale:3.8806},{type:'ddt',count:15,interval:0.132,scale:4.0638},{type:'bad',count:12,interval:0.12,scale:4.247}]
  },
  224: {
    label: 'Round 224 — standard defense',
    difficulty: 3.3415,
    speed: 1.3424,
    density: 77,
    roundCash: 245.6,
    special: null,
    groups: [{type:'ceramic',count:77,interval:0.18,scale:3.3415},{type:'moab',count:38,interval:0.168,scale:3.5253},{type:'bfb',count:25,interval:0.156,scale:3.7091},{type:'zomg',count:19,interval:0.144,scale:3.8928},{type:'ddt',count:15,interval:0.132,scale:4.0766},{type:'bad',count:12,interval:0.12,scale:4.2604}]
  },
  225: {
    label: 'Round 225 — standard defense',
    difficulty: 3.3520,
    speed: 1.3440,
    density: 77,
    roundCash: 246.3,
    special: null,
    groups: [{type:'ceramic',count:77,interval:0.18,scale:3.352},{type:'moab',count:38,interval:0.168,scale:3.5364},{type:'bfb',count:25,interval:0.156,scale:3.7207},{type:'zomg',count:19,interval:0.144,scale:3.9051},{type:'ddt',count:15,interval:0.132,scale:4.0894},{type:'bad',count:12,interval:0.12,scale:4.2738}]
  },
  226: {
    label: 'Round 226 — standard defense',
    difficulty: 3.3625,
    speed: 1.3456,
    density: 77,
    roundCash: 246.9,
    special: null,
    groups: [{type:'ceramic',count:77,interval:0.18,scale:3.3625},{type:'moab',count:38,interval:0.168,scale:3.5474},{type:'bfb',count:25,interval:0.156,scale:3.7324},{type:'zomg',count:19,interval:0.144,scale:3.9173},{type:'ddt',count:15,interval:0.132,scale:4.1022},{type:'bad',count:12,interval:0.12,scale:4.2872}]
  },
  227: {
    label: 'Round 227 — standard defense',
    difficulty: 3.3730,
    speed: 1.3472,
    density: 78,
    roundCash: 247.6,
    special: null,
    groups: [{type:'ceramic',count:78,interval:0.18,scale:3.373},{type:'moab',count:39,interval:0.168,scale:3.5585},{type:'bfb',count:26,interval:0.156,scale:3.744},{type:'zomg',count:19,interval:0.144,scale:3.9295},{type:'ddt',count:15,interval:0.132,scale:4.1151},{type:'bad',count:13,interval:0.12,scale:4.3006}]
  },
  228: {
    label: 'Round 228 — standard defense',
    difficulty: 3.3835,
    speed: 1.3488,
    density: 78,
    roundCash: 248.2,
    special: null,
    groups: [{type:'ceramic',count:78,interval:0.18,scale:3.3835},{type:'moab',count:39,interval:0.168,scale:3.5696},{type:'bfb',count:26,interval:0.156,scale:3.7557},{type:'zomg',count:19,interval:0.144,scale:3.9418},{type:'ddt',count:15,interval:0.132,scale:4.1279},{type:'bad',count:13,interval:0.12,scale:4.314}]
  },
  229: {
    label: 'Round 229 — standard defense',
    difficulty: 3.3940,
    speed: 1.3504,
    density: 78,
    roundCash: 248.8,
    special: null,
    groups: [{type:'ceramic',count:78,interval:0.18,scale:3.394},{type:'moab',count:39,interval:0.168,scale:3.5807},{type:'bfb',count:26,interval:0.156,scale:3.7673},{type:'zomg',count:19,interval:0.144,scale:3.954},{type:'ddt',count:15,interval:0.132,scale:4.1407},{type:'bad',count:13,interval:0.12,scale:4.3274}]
  },
  230: {
    label: 'Round 230 — pressure check',
    difficulty: 3.4045,
    speed: 1.3520,
    density: 79,
    roundCash: 249.5,
    special: null,
    groups: [{type:'ceramic',count:79,interval:0.18,scale:3.4045},{type:'moab',count:39,interval:0.168,scale:3.5917},{type:'bfb',count:26,interval:0.156,scale:3.779},{type:'zomg',count:19,interval:0.144,scale:3.9662},{type:'ddt',count:15,interval:0.132,scale:4.1535},{type:'bad',count:13,interval:0.12,scale:4.3407}]
  },
  231: {
    label: 'Round 231 — standard defense',
    difficulty: 3.4150,
    speed: 1.3536,
    density: 79,
    roundCash: 250.2,
    special: null,
    groups: [{type:'ceramic',count:79,interval:0.18,scale:3.415},{type:'moab',count:39,interval:0.168,scale:3.6028},{type:'bfb',count:26,interval:0.156,scale:3.7907},{type:'zomg',count:19,interval:0.144,scale:3.9785},{type:'ddt',count:15,interval:0.132,scale:4.1663},{type:'bad',count:13,interval:0.12,scale:4.3541}]
  },
  232: {
    label: 'Round 232 — standard defense',
    difficulty: 3.4255,
    speed: 1.3552,
    density: 79,
    roundCash: 250.8,
    special: null,
    groups: [{type:'ceramic',count:79,interval:0.18,scale:3.4255},{type:'moab',count:39,interval:0.168,scale:3.6139},{type:'bfb',count:26,interval:0.156,scale:3.8023},{type:'zomg',count:19,interval:0.144,scale:3.9907},{type:'ddt',count:15,interval:0.132,scale:4.1791},{type:'bad',count:13,interval:0.12,scale:4.3675}]
  },
  233: {
    label: 'Round 233 — standard defense',
    difficulty: 3.4360,
    speed: 1.3568,
    density: 80,
    roundCash: 251.5,
    special: null,
    groups: [{type:'ceramic',count:80,interval:0.18,scale:3.436},{type:'moab',count:40,interval:0.168,scale:3.625},{type:'bfb',count:26,interval:0.156,scale:3.814},{type:'zomg',count:20,interval:0.144,scale:4.0029},{type:'ddt',count:16,interval:0.132,scale:4.1919},{type:'bad',count:13,interval:0.12,scale:4.3809}]
  },
  234: {
    label: 'Round 234 — standard defense',
    difficulty: 3.4465,
    speed: 1.3584,
    density: 80,
    roundCash: 252.1,
    special: null,
    groups: [{type:'ceramic',count:80,interval:0.18,scale:3.4465},{type:'moab',count:40,interval:0.168,scale:3.6361},{type:'bfb',count:26,interval:0.156,scale:3.8256},{type:'zomg',count:20,interval:0.144,scale:4.0152},{type:'ddt',count:16,interval:0.132,scale:4.2047},{type:'bad',count:13,interval:0.12,scale:4.3943}]
  },
  235: {
    label: 'Round 235 — standard defense',
    difficulty: 3.4570,
    speed: 1.3600,
    density: 80,
    roundCash: 252.8,
    special: null,
    groups: [{type:'ceramic',count:80,interval:0.18,scale:3.457},{type:'moab',count:40,interval:0.168,scale:3.6471},{type:'bfb',count:26,interval:0.156,scale:3.8373},{type:'zomg',count:20,interval:0.144,scale:4.0274},{type:'ddt',count:16,interval:0.132,scale:4.2175},{type:'bad',count:13,interval:0.12,scale:4.4077}]
  },
  236: {
    label: 'Round 236 — standard defense',
    difficulty: 3.4675,
    speed: 1.3616,
    density: 81,
    roundCash: 253.4,
    special: null,
    groups: [{type:'ceramic',count:81,interval:0.18,scale:3.4675},{type:'moab',count:40,interval:0.168,scale:3.6582},{type:'bfb',count:27,interval:0.156,scale:3.8489},{type:'zomg',count:20,interval:0.144,scale:4.0396},{type:'ddt',count:16,interval:0.132,scale:4.2303},{type:'bad',count:13,interval:0.12,scale:4.4211}]
  },
  237: {
    label: 'Round 237 — standard defense',
    difficulty: 3.4780,
    speed: 1.3632,
    density: 81,
    roundCash: 254.1,
    special: null,
    groups: [{type:'ceramic',count:81,interval:0.18,scale:3.478},{type:'moab',count:40,interval:0.168,scale:3.6693},{type:'bfb',count:27,interval:0.156,scale:3.8606},{type:'zomg',count:20,interval:0.144,scale:4.0519},{type:'ddt',count:16,interval:0.132,scale:4.2432},{type:'bad',count:13,interval:0.12,scale:4.4345}]
  },
  238: {
    label: 'Round 238 — standard defense',
    difficulty: 3.4885,
    speed: 1.3648,
    density: 81,
    roundCash: 254.7,
    special: null,
    groups: [{type:'ceramic',count:81,interval:0.18,scale:3.4885},{type:'moab',count:40,interval:0.168,scale:3.6804},{type:'bfb',count:27,interval:0.156,scale:3.8722},{type:'zomg',count:20,interval:0.144,scale:4.0641},{type:'ddt',count:16,interval:0.132,scale:4.256},{type:'bad',count:13,interval:0.12,scale:4.4478}]
  },
  239: {
    label: 'Round 239 — standard defense',
    difficulty: 3.4990,
    speed: 1.3664,
    density: 82,
    roundCash: 255.3,
    special: null,
    groups: [{type:'ceramic',count:82,interval:0.18,scale:3.499},{type:'moab',count:41,interval:0.168,scale:3.6914},{type:'bfb',count:27,interval:0.156,scale:3.8839},{type:'zomg',count:20,interval:0.144,scale:4.0763},{type:'ddt',count:16,interval:0.132,scale:4.2688},{type:'bad',count:13,interval:0.12,scale:4.4612}]
  },
  240: {
    label: 'Round 240 — pressure check',
    difficulty: 3.5095,
    speed: 1.3680,
    density: 82,
    roundCash: 256.0,
    special: null,
    groups: [{type:'ceramic',count:82,interval:0.18,scale:3.5095},{type:'moab',count:41,interval:0.168,scale:3.7025},{type:'bfb',count:27,interval:0.156,scale:3.8955},{type:'zomg',count:20,interval:0.144,scale:4.0886},{type:'ddt',count:16,interval:0.132,scale:4.2816},{type:'bad',count:13,interval:0.12,scale:4.4746}]
  },
  241: {
    label: 'Round 241 — standard defense',
    difficulty: 3.5200,
    speed: 1.3696,
    density: 82,
    roundCash: 256.6,
    special: null,
    groups: [{type:'ceramic',count:82,interval:0.18,scale:3.52},{type:'moab',count:41,interval:0.168,scale:3.7136},{type:'bfb',count:27,interval:0.156,scale:3.9072},{type:'zomg',count:20,interval:0.144,scale:4.1008},{type:'ddt',count:16,interval:0.132,scale:4.2944},{type:'bad',count:13,interval:0.12,scale:4.488}]
  },
  242: {
    label: 'Round 242 — standard defense',
    difficulty: 3.5305,
    speed: 1.3712,
    density: 83,
    roundCash: 257.3,
    special: null,
    groups: [{type:'ceramic',count:83,interval:0.18,scale:3.5305},{type:'moab',count:41,interval:0.168,scale:3.7247},{type:'bfb',count:27,interval:0.156,scale:3.9189},{type:'zomg',count:20,interval:0.144,scale:4.113},{type:'ddt',count:16,interval:0.132,scale:4.3072},{type:'bad',count:13,interval:0.12,scale:4.5014}]
  },
  243: {
    label: 'Round 243 — standard defense',
    difficulty: 3.5410,
    speed: 1.3728,
    density: 83,
    roundCash: 258.0,
    special: null,
    groups: [{type:'ceramic',count:83,interval:0.18,scale:3.541},{type:'moab',count:41,interval:0.168,scale:3.7358},{type:'bfb',count:27,interval:0.156,scale:3.9305},{type:'zomg',count:20,interval:0.144,scale:4.1253},{type:'ddt',count:16,interval:0.132,scale:4.32},{type:'bad',count:13,interval:0.12,scale:4.5148}]
  },
  244: {
    label: 'Round 244 — standard defense',
    difficulty: 3.5515,
    speed: 1.3744,
    density: 83,
    roundCash: 258.6,
    special: null,
    groups: [{type:'ceramic',count:83,interval:0.18,scale:3.5515},{type:'moab',count:41,interval:0.168,scale:3.7468},{type:'bfb',count:27,interval:0.156,scale:3.9422},{type:'zomg',count:20,interval:0.144,scale:4.1375},{type:'ddt',count:16,interval:0.132,scale:4.3328},{type:'bad',count:13,interval:0.12,scale:4.5282}]
  },
  245: {
    label: 'Round 245 — standard defense',
    difficulty: 3.5620,
    speed: 1.3760,
    density: 84,
    roundCash: 259.3,
    special: null,
    groups: [{type:'ceramic',count:84,interval:0.18,scale:3.562},{type:'moab',count:42,interval:0.168,scale:3.7579},{type:'bfb',count:28,interval:0.156,scale:3.9538},{type:'zomg',count:21,interval:0.144,scale:4.1497},{type:'ddt',count:16,interval:0.132,scale:4.3456},{type:'bad',count:14,interval:0.12,scale:4.5415}]
  },
  246: {
    label: 'Round 246 — standard defense',
    difficulty: 3.5725,
    speed: 1.3776,
    density: 84,
    roundCash: 259.9,
    special: null,
    groups: [{type:'ceramic',count:84,interval:0.18,scale:3.5725},{type:'moab',count:42,interval:0.168,scale:3.769},{type:'bfb',count:28,interval:0.156,scale:3.9655},{type:'zomg',count:21,interval:0.144,scale:4.162},{type:'ddt',count:16,interval:0.132,scale:4.3584},{type:'bad',count:14,interval:0.12,scale:4.5549}]
  },
  247: {
    label: 'Round 247 — standard defense',
    difficulty: 3.5830,
    speed: 1.3792,
    density: 84,
    roundCash: 260.6,
    special: null,
    groups: [{type:'ceramic',count:84,interval:0.18,scale:3.583},{type:'moab',count:42,interval:0.168,scale:3.7801},{type:'bfb',count:28,interval:0.156,scale:3.9771},{type:'zomg',count:21,interval:0.144,scale:4.1742},{type:'ddt',count:16,interval:0.132,scale:4.3713},{type:'bad',count:14,interval:0.12,scale:4.5683}]
  },
  248: {
    label: 'Round 248 — standard defense',
    difficulty: 3.5935,
    speed: 1.3808,
    density: 85,
    roundCash: 261.2,
    special: null,
    groups: [{type:'ceramic',count:85,interval:0.18,scale:3.5935},{type:'moab',count:42,interval:0.168,scale:3.7911},{type:'bfb',count:28,interval:0.156,scale:3.9888},{type:'zomg',count:21,interval:0.144,scale:4.1864},{type:'ddt',count:17,interval:0.132,scale:4.3841},{type:'bad',count:14,interval:0.12,scale:4.5817}]
  },
  249: {
    label: 'Round 249 — standard defense',
    difficulty: 3.6040,
    speed: 1.3824,
    density: 85,
    roundCash: 261.9,
    special: null,
    groups: [{type:'ceramic',count:85,interval:0.18,scale:3.604},{type:'moab',count:42,interval:0.168,scale:3.8022},{type:'bfb',count:28,interval:0.156,scale:4.0004},{type:'zomg',count:21,interval:0.144,scale:4.1987},{type:'ddt',count:17,interval:0.132,scale:4.3969},{type:'bad',count:14,interval:0.12,scale:4.5951}]
  },
  250: {
    label: 'Quarter-millennium surge',
    difficulty: 3.6145,
    speed: 1.3840,
    density: 86,
    roundCash: 262.5,
    special: 'Quarter-millennium surge',
    groups: [{type:'ceramic',count:86,interval:0.18,scale:3.6145},{type:'moab',count:43,interval:0.168,scale:3.8133},{type:'bfb',count:28,interval:0.156,scale:4.0121},{type:'zomg',count:21,interval:0.144,scale:4.2109},{type:'ddt',count:17,interval:0.132,scale:4.4097},{type:'bad',count:14,interval:0.12,scale:4.6085}]
  },
  251: {
    label: 'Round 251 — standard defense',
    difficulty: 3.6250,
    speed: 1.3856,
    density: 86,
    roundCash: 263.1,
    special: null,
    groups: [{type:'ceramic',count:86,interval:0.18,scale:3.625},{type:'moab',count:43,interval:0.168,scale:3.8244},{type:'bfb',count:28,interval:0.156,scale:4.0238},{type:'zomg',count:21,interval:0.144,scale:4.2231},{type:'ddt',count:17,interval:0.132,scale:4.4225},{type:'bad',count:14,interval:0.12,scale:4.6219}]
  },
  252: {
    label: 'Round 252 — standard defense',
    difficulty: 3.6355,
    speed: 1.3872,
    density: 86,
    roundCash: 263.8,
    special: null,
    groups: [{type:'ceramic',count:86,interval:0.18,scale:3.6355},{type:'moab',count:43,interval:0.168,scale:3.8355},{type:'bfb',count:28,interval:0.156,scale:4.0354},{type:'zomg',count:21,interval:0.144,scale:4.2354},{type:'ddt',count:17,interval:0.132,scale:4.4353},{type:'bad',count:14,interval:0.12,scale:4.6353}]
  },
  253: {
    label: 'Round 253 — standard defense',
    difficulty: 3.6460,
    speed: 1.3888,
    density: 87,
    roundCash: 264.5,
    special: null,
    groups: [{type:'ceramic',count:87,interval:0.18,scale:3.646},{type:'moab',count:43,interval:0.168,scale:3.8465},{type:'bfb',count:29,interval:0.156,scale:4.0471},{type:'zomg',count:21,interval:0.144,scale:4.2476},{type:'ddt',count:17,interval:0.132,scale:4.4481},{type:'bad',count:14,interval:0.12,scale:4.6486}]
  },
  254: {
    label: 'Round 254 — standard defense',
    difficulty: 3.6565,
    speed: 1.3904,
    density: 87,
    roundCash: 265.1,
    special: null,
    groups: [{type:'ceramic',count:87,interval:0.18,scale:3.6565},{type:'moab',count:43,interval:0.168,scale:3.8576},{type:'bfb',count:29,interval:0.156,scale:4.0587},{type:'zomg',count:21,interval:0.144,scale:4.2598},{type:'ddt',count:17,interval:0.132,scale:4.4609},{type:'bad',count:14,interval:0.12,scale:4.662}]
  },
  255: {
    label: 'Round 255 — standard defense',
    difficulty: 3.6670,
    speed: 1.3920,
    density: 87,
    roundCash: 265.8,
    special: null,
    groups: [{type:'ceramic',count:87,interval:0.18,scale:3.667},{type:'moab',count:43,interval:0.168,scale:3.8687},{type:'bfb',count:29,interval:0.156,scale:4.0704},{type:'zomg',count:21,interval:0.144,scale:4.2721},{type:'ddt',count:17,interval:0.132,scale:4.4737},{type:'bad',count:14,interval:0.12,scale:4.6754}]
  },
  256: {
    label: 'Round 256 — standard defense',
    difficulty: 3.6775,
    speed: 1.3936,
    density: 88,
    roundCash: 266.4,
    special: null,
    groups: [{type:'ceramic',count:88,interval:0.18,scale:3.6775},{type:'moab',count:44,interval:0.168,scale:3.8798},{type:'bfb',count:29,interval:0.156,scale:4.082},{type:'zomg',count:22,interval:0.144,scale:4.2843},{type:'ddt',count:17,interval:0.132,scale:4.4866},{type:'bad',count:14,interval:0.12,scale:4.6888}]
  },
  257: {
    label: 'Round 257 — standard defense',
    difficulty: 3.6880,
    speed: 1.3952,
    density: 88,
    roundCash: 267.1,
    special: null,
    groups: [{type:'ceramic',count:88,interval:0.18,scale:3.688},{type:'moab',count:44,interval:0.168,scale:3.8908},{type:'bfb',count:29,interval:0.156,scale:4.0937},{type:'zomg',count:22,interval:0.144,scale:4.2965},{type:'ddt',count:17,interval:0.132,scale:4.4994},{type:'bad',count:14,interval:0.12,scale:4.7022}]
  },
  258: {
    label: 'Round 258 — standard defense',
    difficulty: 3.6985,
    speed: 1.3968,
    density: 88,
    roundCash: 267.7,
    special: null,
    groups: [{type:'ceramic',count:88,interval:0.18,scale:3.6985},{type:'moab',count:44,interval:0.168,scale:3.9019},{type:'bfb',count:29,interval:0.156,scale:4.1053},{type:'zomg',count:22,interval:0.144,scale:4.3088},{type:'ddt',count:17,interval:0.132,scale:4.5122},{type:'bad',count:14,interval:0.12,scale:4.7156}]
  },
  259: {
    label: 'Round 259 — standard defense',
    difficulty: 3.7090,
    speed: 1.3984,
    density: 89,
    roundCash: 268.4,
    special: null,
    groups: [{type:'ceramic',count:89,interval:0.18,scale:3.709},{type:'moab',count:44,interval:0.168,scale:3.913},{type:'bfb',count:29,interval:0.156,scale:4.117},{type:'zomg',count:22,interval:0.144,scale:4.321},{type:'ddt',count:17,interval:0.132,scale:4.525},{type:'bad',count:14,interval:0.12,scale:4.729}]
  },
  260: {
    label: 'Round 260 — pressure check',
    difficulty: 3.7195,
    speed: 1.4000,
    density: 89,
    roundCash: 269.0,
    special: null,
    groups: [{type:'ceramic',count:89,interval:0.18,scale:3.7195},{type:'moab',count:44,interval:0.168,scale:3.9241},{type:'bfb',count:29,interval:0.156,scale:4.1286},{type:'zomg',count:22,interval:0.144,scale:4.3332},{type:'ddt',count:17,interval:0.132,scale:4.5378},{type:'bad',count:14,interval:0.12,scale:4.7424}]
  },
  261: {
    label: 'Round 261 — standard defense',
    difficulty: 3.7300,
    speed: 1.4016,
    density: 89,
    roundCash: 269.6,
    special: null,
    groups: [{type:'ceramic',count:89,interval:0.18,scale:3.73},{type:'moab',count:44,interval:0.168,scale:3.9351},{type:'bfb',count:29,interval:0.156,scale:4.1403},{type:'zomg',count:22,interval:0.144,scale:4.3455},{type:'ddt',count:17,interval:0.132,scale:4.5506},{type:'bad',count:14,interval:0.12,scale:4.7557}]
  },
  262: {
    label: 'Round 262 — standard defense',
    difficulty: 3.7405,
    speed: 1.4032,
    density: 90,
    roundCash: 270.3,
    special: null,
    groups: [{type:'ceramic',count:90,interval:0.18,scale:3.7405},{type:'moab',count:45,interval:0.168,scale:3.9462},{type:'bfb',count:30,interval:0.156,scale:4.152},{type:'zomg',count:22,interval:0.144,scale:4.3577},{type:'ddt',count:18,interval:0.132,scale:4.5634},{type:'bad',count:15,interval:0.12,scale:4.7691}]
  },
  263: {
    label: 'Round 263 — standard defense',
    difficulty: 3.7510,
    speed: 1.4048,
    density: 90,
    roundCash: 271.0,
    special: null,
    groups: [{type:'ceramic',count:90,interval:0.18,scale:3.751},{type:'moab',count:45,interval:0.168,scale:3.9573},{type:'bfb',count:30,interval:0.156,scale:4.1636},{type:'zomg',count:22,interval:0.144,scale:4.3699},{type:'ddt',count:18,interval:0.132,scale:4.5762},{type:'bad',count:15,interval:0.12,scale:4.7825}]
  },
  264: {
    label: 'Round 264 — standard defense',
    difficulty: 3.7615,
    speed: 1.4064,
    density: 90,
    roundCash: 271.6,
    special: null,
    groups: [{type:'ceramic',count:90,interval:0.18,scale:3.7615},{type:'moab',count:45,interval:0.168,scale:3.9684},{type:'bfb',count:30,interval:0.156,scale:4.1753},{type:'zomg',count:22,interval:0.144,scale:4.3821},{type:'ddt',count:18,interval:0.132,scale:4.589},{type:'bad',count:15,interval:0.12,scale:4.7959}]
  },
  265: {
    label: 'Round 265 — standard defense',
    difficulty: 3.7720,
    speed: 1.4080,
    density: 91,
    roundCash: 272.3,
    special: null,
    groups: [{type:'ceramic',count:91,interval:0.18,scale:3.772},{type:'moab',count:45,interval:0.168,scale:3.9795},{type:'bfb',count:30,interval:0.156,scale:4.1869},{type:'zomg',count:22,interval:0.144,scale:4.3944},{type:'ddt',count:18,interval:0.132,scale:4.6018},{type:'bad',count:15,interval:0.12,scale:4.8093}]
  },
  266: {
    label: 'Round 266 — standard defense',
    difficulty: 3.7825,
    speed: 1.4096,
    density: 91,
    roundCash: 272.9,
    special: null,
    groups: [{type:'ceramic',count:91,interval:0.18,scale:3.7825},{type:'moab',count:45,interval:0.168,scale:3.9905},{type:'bfb',count:30,interval:0.156,scale:4.1986},{type:'zomg',count:22,interval:0.144,scale:4.4066},{type:'ddt',count:18,interval:0.132,scale:4.6147},{type:'bad',count:15,interval:0.12,scale:4.8227}]
  },
  267: {
    label: 'Round 267 — standard defense',
    difficulty: 3.7930,
    speed: 1.4112,
    density: 91,
    roundCash: 273.6,
    special: null,
    groups: [{type:'ceramic',count:91,interval:0.18,scale:3.793},{type:'moab',count:45,interval:0.168,scale:4.0016},{type:'bfb',count:30,interval:0.156,scale:4.2102},{type:'zomg',count:22,interval:0.144,scale:4.4188},{type:'ddt',count:18,interval:0.132,scale:4.6275},{type:'bad',count:15,interval:0.12,scale:4.8361}]
  },
  268: {
    label: 'Round 268 — standard defense',
    difficulty: 3.8035,
    speed: 1.4128,
    density: 92,
    roundCash: 274.2,
    special: null,
    groups: [{type:'ceramic',count:92,interval:0.18,scale:3.8035},{type:'moab',count:46,interval:0.168,scale:4.0127},{type:'bfb',count:30,interval:0.156,scale:4.2219},{type:'zomg',count:23,interval:0.144,scale:4.4311},{type:'ddt',count:18,interval:0.132,scale:4.6403},{type:'bad',count:15,interval:0.12,scale:4.8495}]
  },
  269: {
    label: 'Round 269 — standard defense',
    difficulty: 3.8140,
    speed: 1.4144,
    density: 92,
    roundCash: 274.9,
    special: null,
    groups: [{type:'ceramic',count:92,interval:0.18,scale:3.814},{type:'moab',count:46,interval:0.168,scale:4.0238},{type:'bfb',count:30,interval:0.156,scale:4.2335},{type:'zomg',count:23,interval:0.144,scale:4.4433},{type:'ddt',count:18,interval:0.132,scale:4.6531},{type:'bad',count:15,interval:0.12,scale:4.8628}]
  },
  270: {
    label: 'Round 270 — pressure check',
    difficulty: 3.8245,
    speed: 1.4160,
    density: 92,
    roundCash: 275.5,
    special: null,
    groups: [{type:'ceramic',count:92,interval:0.18,scale:3.8245},{type:'moab',count:46,interval:0.168,scale:4.0348},{type:'bfb',count:30,interval:0.156,scale:4.2452},{type:'zomg',count:23,interval:0.144,scale:4.4555},{type:'ddt',count:18,interval:0.132,scale:4.6659},{type:'bad',count:15,interval:0.12,scale:4.8762}]
  },
  271: {
    label: 'Round 271 — standard defense',
    difficulty: 3.8350,
    speed: 1.4176,
    density: 93,
    roundCash: 276.1,
    special: null,
    groups: [{type:'ceramic',count:93,interval:0.18,scale:3.835},{type:'moab',count:46,interval:0.168,scale:4.0459},{type:'bfb',count:31,interval:0.156,scale:4.2569},{type:'zomg',count:23,interval:0.144,scale:4.4678},{type:'ddt',count:18,interval:0.132,scale:4.6787},{type:'bad',count:15,interval:0.12,scale:4.8896}]
  },
  272: {
    label: 'Round 272 — standard defense',
    difficulty: 3.8455,
    speed: 1.4192,
    density: 93,
    roundCash: 276.8,
    special: null,
    groups: [{type:'ceramic',count:93,interval:0.18,scale:3.8455},{type:'moab',count:46,interval:0.168,scale:4.057},{type:'bfb',count:31,interval:0.156,scale:4.2685},{type:'zomg',count:23,interval:0.144,scale:4.48},{type:'ddt',count:18,interval:0.132,scale:4.6915},{type:'bad',count:15,interval:0.12,scale:4.903}]
  },
  273: {
    label: 'Round 273 — standard defense',
    difficulty: 3.8560,
    speed: 1.4208,
    density: 93,
    roundCash: 277.5,
    special: null,
    groups: [{type:'ceramic',count:93,interval:0.18,scale:3.856},{type:'moab',count:46,interval:0.168,scale:4.0681},{type:'bfb',count:31,interval:0.156,scale:4.2802},{type:'zomg',count:23,interval:0.144,scale:4.4922},{type:'ddt',count:18,interval:0.132,scale:4.7043},{type:'bad',count:15,interval:0.12,scale:4.9164}]
  },
  274: {
    label: 'Round 274 — standard defense',
    difficulty: 3.8665,
    speed: 1.4224,
    density: 94,
    roundCash: 278.1,
    special: null,
    groups: [{type:'ceramic',count:94,interval:0.18,scale:3.8665},{type:'moab',count:47,interval:0.168,scale:4.0792},{type:'bfb',count:31,interval:0.156,scale:4.2918},{type:'zomg',count:23,interval:0.144,scale:4.5045},{type:'ddt',count:18,interval:0.132,scale:4.7171},{type:'bad',count:15,interval:0.12,scale:4.9298}]
  },
  275: {
    label: 'Round 275 — standard defense',
    difficulty: 3.8770,
    speed: 1.4240,
    density: 94,
    roundCash: 278.8,
    special: null,
    groups: [{type:'ceramic',count:94,interval:0.18,scale:3.877},{type:'moab',count:47,interval:0.168,scale:4.0902},{type:'bfb',count:31,interval:0.156,scale:4.3035},{type:'zomg',count:23,interval:0.144,scale:4.5167},{type:'ddt',count:18,interval:0.132,scale:4.7299},{type:'bad',count:15,interval:0.12,scale:4.9432}]
  },
  276: {
    label: 'Round 276 — standard defense',
    difficulty: 3.8875,
    speed: 1.4256,
    density: 94,
    roundCash: 279.4,
    special: null,
    groups: [{type:'ceramic',count:94,interval:0.18,scale:3.8875},{type:'moab',count:47,interval:0.168,scale:4.1013},{type:'bfb',count:31,interval:0.156,scale:4.3151},{type:'zomg',count:23,interval:0.144,scale:4.5289},{type:'ddt',count:18,interval:0.132,scale:4.7428},{type:'bad',count:15,interval:0.12,scale:4.9566}]
  },
  277: {
    label: 'Round 277 — standard defense',
    difficulty: 3.8980,
    speed: 1.4272,
    density: 95,
    roundCash: 280.1,
    special: null,
    groups: [{type:'ceramic',count:95,interval:0.18,scale:3.898},{type:'moab',count:47,interval:0.168,scale:4.1124},{type:'bfb',count:31,interval:0.156,scale:4.3268},{type:'zomg',count:23,interval:0.144,scale:4.5412},{type:'ddt',count:19,interval:0.132,scale:4.7556},{type:'bad',count:15,interval:0.12,scale:4.9699}]
  },
  278: {
    label: 'Round 278 — standard defense',
    difficulty: 3.9085,
    speed: 1.4288,
    density: 95,
    roundCash: 280.7,
    special: null,
    groups: [{type:'ceramic',count:95,interval:0.18,scale:3.9085},{type:'moab',count:47,interval:0.168,scale:4.1235},{type:'bfb',count:31,interval:0.156,scale:4.3384},{type:'zomg',count:23,interval:0.144,scale:4.5534},{type:'ddt',count:19,interval:0.132,scale:4.7684},{type:'bad',count:15,interval:0.12,scale:4.9833}]
  },
  279: {
    label: 'Round 279 — standard defense',
    difficulty: 3.9190,
    speed: 1.4304,
    density: 95,
    roundCash: 281.4,
    special: null,
    groups: [{type:'ceramic',count:95,interval:0.18,scale:3.919},{type:'moab',count:47,interval:0.168,scale:4.1345},{type:'bfb',count:31,interval:0.156,scale:4.3501},{type:'zomg',count:23,interval:0.144,scale:4.5656},{type:'ddt',count:19,interval:0.132,scale:4.7812},{type:'bad',count:15,interval:0.12,scale:4.9967}]
  },
  280: {
    label: 'Round 280 — pressure check',
    difficulty: 3.9295,
    speed: 1.4320,
    density: 96,
    roundCash: 282.0,
    special: null,
    groups: [{type:'ceramic',count:96,interval:0.18,scale:3.9295},{type:'moab',count:48,interval:0.168,scale:4.1456},{type:'bfb',count:32,interval:0.156,scale:4.3617},{type:'zomg',count:24,interval:0.144,scale:4.5779},{type:'ddt',count:19,interval:0.132,scale:4.794},{type:'bad',count:16,interval:0.12,scale:5.0101}]
  },
  281: {
    label: 'Round 281 — standard defense',
    difficulty: 3.9400,
    speed: 1.4336,
    density: 96,
    roundCash: 282.6,
    special: null,
    groups: [{type:'ceramic',count:96,interval:0.18,scale:3.94},{type:'moab',count:48,interval:0.168,scale:4.1567},{type:'bfb',count:32,interval:0.156,scale:4.3734},{type:'zomg',count:24,interval:0.144,scale:4.5901},{type:'ddt',count:19,interval:0.132,scale:4.8068},{type:'bad',count:16,interval:0.12,scale:5.0235}]
  },
  282: {
    label: 'Round 282 — standard defense',
    difficulty: 3.9505,
    speed: 1.4352,
    density: 96,
    roundCash: 283.3,
    special: null,
    groups: [{type:'ceramic',count:96,interval:0.18,scale:3.9505},{type:'moab',count:48,interval:0.168,scale:4.1678},{type:'bfb',count:32,interval:0.156,scale:4.3851},{type:'zomg',count:24,interval:0.144,scale:4.6023},{type:'ddt',count:19,interval:0.132,scale:4.8196},{type:'bad',count:16,interval:0.12,scale:5.0369}]
  },
  283: {
    label: 'Round 283 — standard defense',
    difficulty: 3.9610,
    speed: 1.4368,
    density: 97,
    roundCash: 284.0,
    special: null,
    groups: [{type:'ceramic',count:97,interval:0.18,scale:3.961},{type:'moab',count:48,interval:0.168,scale:4.1789},{type:'bfb',count:32,interval:0.156,scale:4.3967},{type:'zomg',count:24,interval:0.144,scale:4.6146},{type:'ddt',count:19,interval:0.132,scale:4.8324},{type:'bad',count:16,interval:0.12,scale:5.0503}]
  },
  284: {
    label: 'Round 284 — standard defense',
    difficulty: 3.9715,
    speed: 1.4384,
    density: 97,
    roundCash: 284.6,
    special: null,
    groups: [{type:'ceramic',count:97,interval:0.18,scale:3.9715},{type:'moab',count:48,interval:0.168,scale:4.1899},{type:'bfb',count:32,interval:0.156,scale:4.4084},{type:'zomg',count:24,interval:0.144,scale:4.6268},{type:'ddt',count:19,interval:0.132,scale:4.8452},{type:'bad',count:16,interval:0.12,scale:5.0637}]
  },
  285: {
    label: 'Round 285 — standard defense',
    difficulty: 3.9820,
    speed: 1.4400,
    density: 97,
    roundCash: 285.3,
    special: null,
    groups: [{type:'ceramic',count:97,interval:0.18,scale:3.982},{type:'moab',count:48,interval:0.168,scale:4.201},{type:'bfb',count:32,interval:0.156,scale:4.42},{type:'zomg',count:24,interval:0.144,scale:4.639},{type:'ddt',count:19,interval:0.132,scale:4.858},{type:'bad',count:16,interval:0.12,scale:5.077}]
  },
  286: {
    label: 'Round 286 — standard defense',
    difficulty: 3.9925,
    speed: 1.4416,
    density: 98,
    roundCash: 285.9,
    special: null,
    groups: [{type:'ceramic',count:98,interval:0.18,scale:3.9925},{type:'moab',count:49,interval:0.168,scale:4.2121},{type:'bfb',count:32,interval:0.156,scale:4.4317},{type:'zomg',count:24,interval:0.144,scale:4.6513},{type:'ddt',count:19,interval:0.132,scale:4.8708},{type:'bad',count:16,interval:0.12,scale:5.0904}]
  },
  287: {
    label: 'Round 287 — standard defense',
    difficulty: 4.0030,
    speed: 1.4432,
    density: 98,
    roundCash: 286.6,
    special: null,
    groups: [{type:'ceramic',count:98,interval:0.18,scale:4.003},{type:'moab',count:49,interval:0.168,scale:4.2232},{type:'bfb',count:32,interval:0.156,scale:4.4433},{type:'zomg',count:24,interval:0.144,scale:4.6635},{type:'ddt',count:19,interval:0.132,scale:4.8837},{type:'bad',count:16,interval:0.12,scale:5.1038}]
  },
  288: {
    label: 'Round 288 — standard defense',
    difficulty: 4.0135,
    speed: 1.4448,
    density: 98,
    roundCash: 287.2,
    special: null,
    groups: [{type:'ceramic',count:98,interval:0.18,scale:4.0135},{type:'moab',count:49,interval:0.168,scale:4.2342},{type:'bfb',count:32,interval:0.156,scale:4.455},{type:'zomg',count:24,interval:0.144,scale:4.6757},{type:'ddt',count:19,interval:0.132,scale:4.8965},{type:'bad',count:16,interval:0.12,scale:5.1172}]
  },
  289: {
    label: 'Round 289 — standard defense',
    difficulty: 4.0240,
    speed: 1.4464,
    density: 99,
    roundCash: 287.9,
    special: null,
    groups: [{type:'ceramic',count:99,interval:0.18,scale:4.024},{type:'moab',count:49,interval:0.168,scale:4.2453},{type:'bfb',count:33,interval:0.156,scale:4.4666},{type:'zomg',count:24,interval:0.144,scale:4.688},{type:'ddt',count:19,interval:0.132,scale:4.9093},{type:'bad',count:16,interval:0.12,scale:5.1306}]
  },
  290: {
    label: 'Round 290 — pressure check',
    difficulty: 4.0345,
    speed: 1.4480,
    density: 99,
    roundCash: 288.5,
    special: null,
    groups: [{type:'ceramic',count:99,interval:0.18,scale:4.0345},{type:'moab',count:49,interval:0.168,scale:4.2564},{type:'bfb',count:33,interval:0.156,scale:4.4783},{type:'zomg',count:24,interval:0.144,scale:4.7002},{type:'ddt',count:19,interval:0.132,scale:4.9221},{type:'bad',count:16,interval:0.12,scale:5.144}]
  },
  291: {
    label: 'Round 291 — standard defense',
    difficulty: 4.0450,
    speed: 1.4496,
    density: 99,
    roundCash: 289.1,
    special: null,
    groups: [{type:'ceramic',count:99,interval:0.18,scale:4.045},{type:'moab',count:49,interval:0.168,scale:4.2675},{type:'bfb',count:33,interval:0.156,scale:4.49},{type:'zomg',count:24,interval:0.144,scale:4.7124},{type:'ddt',count:19,interval:0.132,scale:4.9349},{type:'bad',count:16,interval:0.12,scale:5.1574}]
  },
  292: {
    label: 'Round 292 — standard defense',
    difficulty: 4.0555,
    speed: 1.4512,
    density: 100,
    roundCash: 289.8,
    special: null,
    groups: [{type:'ceramic',count:100,interval:0.18,scale:4.0555},{type:'moab',count:50,interval:0.168,scale:4.2786},{type:'bfb',count:33,interval:0.156,scale:4.5016},{type:'zomg',count:25,interval:0.144,scale:4.7247},{type:'ddt',count:20,interval:0.132,scale:4.9477},{type:'bad',count:16,interval:0.12,scale:5.1708}]
  },
  293: {
    label: 'Round 293 — standard defense',
    difficulty: 4.0660,
    speed: 1.4528,
    density: 100,
    roundCash: 290.5,
    special: null,
    groups: [{type:'ceramic',count:100,interval:0.18,scale:4.066},{type:'moab',count:50,interval:0.168,scale:4.2896},{type:'bfb',count:33,interval:0.156,scale:4.5133},{type:'zomg',count:25,interval:0.144,scale:4.7369},{type:'ddt',count:20,interval:0.132,scale:4.9605},{type:'bad',count:16,interval:0.12,scale:5.1841}]
  },
  294: {
    label: 'Round 294 — standard defense',
    difficulty: 4.0765,
    speed: 1.4544,
    density: 100,
    roundCash: 291.1,
    special: null,
    groups: [{type:'ceramic',count:100,interval:0.18,scale:4.0765},{type:'moab',count:50,interval:0.168,scale:4.3007},{type:'bfb',count:33,interval:0.156,scale:4.5249},{type:'zomg',count:25,interval:0.144,scale:4.7491},{type:'ddt',count:20,interval:0.132,scale:4.9733},{type:'bad',count:16,interval:0.12,scale:5.1975}]
  },
  295: {
    label: 'Round 295 — standard defense',
    difficulty: 4.0870,
    speed: 1.4560,
    density: 101,
    roundCash: 291.8,
    special: null,
    groups: [{type:'ceramic',count:101,interval:0.18,scale:4.087},{type:'moab',count:50,interval:0.168,scale:4.3118},{type:'bfb',count:33,interval:0.156,scale:4.5366},{type:'zomg',count:25,interval:0.144,scale:4.7614},{type:'ddt',count:20,interval:0.132,scale:4.9861},{type:'bad',count:16,interval:0.12,scale:5.2109}]
  },
  296: {
    label: 'Round 296 — standard defense',
    difficulty: 4.0975,
    speed: 1.4576,
    density: 101,
    roundCash: 292.4,
    special: null,
    groups: [{type:'ceramic',count:101,interval:0.18,scale:4.0975},{type:'moab',count:50,interval:0.168,scale:4.3229},{type:'bfb',count:33,interval:0.156,scale:4.5482},{type:'zomg',count:25,interval:0.144,scale:4.7736},{type:'ddt',count:20,interval:0.132,scale:4.9989},{type:'bad',count:16,interval:0.12,scale:5.2243}]
  },
  297: {
    label: 'Round 297 — standard defense',
    difficulty: 4.1080,
    speed: 1.4592,
    density: 101,
    roundCash: 293.1,
    special: null,
    groups: [{type:'ceramic',count:101,interval:0.18,scale:4.108},{type:'moab',count:50,interval:0.168,scale:4.3339},{type:'bfb',count:33,interval:0.156,scale:4.5599},{type:'zomg',count:25,interval:0.144,scale:4.7858},{type:'ddt',count:20,interval:0.132,scale:5.0118},{type:'bad',count:16,interval:0.12,scale:5.2377}]
  },
  298: {
    label: 'Round 298 — standard defense',
    difficulty: 4.1185,
    speed: 1.4608,
    density: 102,
    roundCash: 293.7,
    special: null,
    groups: [{type:'ceramic',count:102,interval:0.18,scale:4.1185},{type:'moab',count:51,interval:0.168,scale:4.345},{type:'bfb',count:34,interval:0.156,scale:4.5715},{type:'zomg',count:25,interval:0.144,scale:4.7981},{type:'ddt',count:20,interval:0.132,scale:5.0246},{type:'bad',count:17,interval:0.12,scale:5.2511}]
  },
  299: {
    label: 'Round 299 — standard defense',
    difficulty: 4.1290,
    speed: 1.4624,
    density: 102,
    roundCash: 294.4,
    special: null,
    groups: [{type:'ceramic',count:102,interval:0.18,scale:4.129},{type:'moab',count:51,interval:0.168,scale:4.3561},{type:'bfb',count:34,interval:0.156,scale:4.5832},{type:'zomg',count:25,interval:0.144,scale:4.8103},{type:'ddt',count:20,interval:0.132,scale:5.0374},{type:'bad',count:17,interval:0.12,scale:5.2645}]
  },
  300: {
    label: 'Freeplay boss cycle',
    difficulty: 4.1395,
    speed: 1.4640,
    density: 103,
    roundCash: 295.0,
    special: 'Freeplay boss cycle',
    groups: [{type:'ceramic',count:103,interval:0.18,scale:4.1395},{type:'moab',count:51,interval:0.168,scale:4.3672},{type:'bfb',count:34,interval:0.156,scale:4.5948},{type:'zomg',count:25,interval:0.144,scale:4.8225},{type:'ddt',count:20,interval:0.132,scale:5.0502},{type:'bad',count:17,interval:0.12,scale:5.2779}]
  },
  301: {
    label: 'Round 301 — standard defense',
    difficulty: 4.1500,
    speed: 1.4656,
    density: 103,
    roundCash: 295.6,
    special: null,
    groups: [{type:'ceramic',count:103,interval:0.18,scale:4.15},{type:'moab',count:51,interval:0.168,scale:4.3783},{type:'bfb',count:34,interval:0.156,scale:4.6065},{type:'zomg',count:25,interval:0.144,scale:4.8348},{type:'ddt',count:20,interval:0.132,scale:5.063},{type:'bad',count:17,interval:0.12,scale:5.2912}]
  },
  302: {
    label: 'Round 302 — standard defense',
    difficulty: 4.1605,
    speed: 1.4672,
    density: 103,
    roundCash: 296.3,
    special: null,
    groups: [{type:'ceramic',count:103,interval:0.18,scale:4.1605},{type:'moab',count:51,interval:0.168,scale:4.3893},{type:'bfb',count:34,interval:0.156,scale:4.6182},{type:'zomg',count:25,interval:0.144,scale:4.847},{type:'ddt',count:20,interval:0.132,scale:5.0758},{type:'bad',count:17,interval:0.12,scale:5.3046}]
  },
  303: {
    label: 'Round 303 — standard defense',
    difficulty: 4.1710,
    speed: 1.4688,
    density: 104,
    roundCash: 297.0,
    special: null,
    groups: [{type:'ceramic',count:104,interval:0.18,scale:4.171},{type:'moab',count:52,interval:0.168,scale:4.4004},{type:'bfb',count:34,interval:0.156,scale:4.6298},{type:'zomg',count:26,interval:0.144,scale:4.8592},{type:'ddt',count:20,interval:0.132,scale:5.0886},{type:'bad',count:17,interval:0.12,scale:5.318}]
  },
  304: {
    label: 'Round 304 — standard defense',
    difficulty: 4.1815,
    speed: 1.4704,
    density: 104,
    roundCash: 297.6,
    special: null,
    groups: [{type:'ceramic',count:104,interval:0.18,scale:4.1815},{type:'moab',count:52,interval:0.168,scale:4.4115},{type:'bfb',count:34,interval:0.156,scale:4.6415},{type:'zomg',count:26,interval:0.144,scale:4.8714},{type:'ddt',count:20,interval:0.132,scale:5.1014},{type:'bad',count:17,interval:0.12,scale:5.3314}]
  },
  305: {
    label: 'Round 305 — standard defense',
    difficulty: 4.1920,
    speed: 1.4720,
    density: 104,
    roundCash: 298.3,
    special: null,
    groups: [{type:'ceramic',count:104,interval:0.18,scale:4.192},{type:'moab',count:52,interval:0.168,scale:4.4226},{type:'bfb',count:34,interval:0.156,scale:4.6531},{type:'zomg',count:26,interval:0.144,scale:4.8837},{type:'ddt',count:20,interval:0.132,scale:5.1142},{type:'bad',count:17,interval:0.12,scale:5.3448}]
  },
  306: {
    label: 'Round 306 — standard defense',
    difficulty: 4.2025,
    speed: 1.4736,
    density: 105,
    roundCash: 298.9,
    special: null,
    groups: [{type:'ceramic',count:105,interval:0.18,scale:4.2025},{type:'moab',count:52,interval:0.168,scale:4.4336},{type:'bfb',count:35,interval:0.156,scale:4.6648},{type:'zomg',count:26,interval:0.144,scale:4.8959},{type:'ddt',count:21,interval:0.132,scale:5.127},{type:'bad',count:17,interval:0.12,scale:5.3582}]
  },
  307: {
    label: 'Round 307 — standard defense',
    difficulty: 4.2130,
    speed: 1.4752,
    density: 105,
    roundCash: 299.6,
    special: null,
    groups: [{type:'ceramic',count:105,interval:0.18,scale:4.213},{type:'moab',count:52,interval:0.168,scale:4.4447},{type:'bfb',count:35,interval:0.156,scale:4.6764},{type:'zomg',count:26,interval:0.144,scale:4.9081},{type:'ddt',count:21,interval:0.132,scale:5.1399},{type:'bad',count:17,interval:0.12,scale:5.3716}]
  },
  308: {
    label: 'Round 308 — standard defense',
    difficulty: 4.2235,
    speed: 1.4768,
    density: 105,
    roundCash: 300.2,
    special: null,
    groups: [{type:'ceramic',count:105,interval:0.18,scale:4.2235},{type:'moab',count:52,interval:0.168,scale:4.4558},{type:'bfb',count:35,interval:0.156,scale:4.6881},{type:'zomg',count:26,interval:0.144,scale:4.9204},{type:'ddt',count:21,interval:0.132,scale:5.1527},{type:'bad',count:17,interval:0.12,scale:5.385}]
  },
  309: {
    label: 'Round 309 — standard defense',
    difficulty: 4.2340,
    speed: 1.4784,
    density: 106,
    roundCash: 300.9,
    special: null,
    groups: [{type:'ceramic',count:106,interval:0.18,scale:4.234},{type:'moab',count:53,interval:0.168,scale:4.4669},{type:'bfb',count:35,interval:0.156,scale:4.6997},{type:'zomg',count:26,interval:0.144,scale:4.9326},{type:'ddt',count:21,interval:0.132,scale:5.1655},{type:'bad',count:17,interval:0.12,scale:5.3983}]
  },
  310: {
    label: 'Round 310 — pressure check',
    difficulty: 4.2445,
    speed: 1.4800,
    density: 106,
    roundCash: 301.5,
    special: null,
    groups: [{type:'ceramic',count:106,interval:0.18,scale:4.2445},{type:'moab',count:53,interval:0.168,scale:4.4779},{type:'bfb',count:35,interval:0.156,scale:4.7114},{type:'zomg',count:26,interval:0.144,scale:4.9448},{type:'ddt',count:21,interval:0.132,scale:5.1783},{type:'bad',count:17,interval:0.12,scale:5.4117}]
  },
  311: {
    label: 'Round 311 — standard defense',
    difficulty: 4.2550,
    speed: 1.4816,
    density: 106,
    roundCash: 302.1,
    special: null,
    groups: [{type:'ceramic',count:106,interval:0.18,scale:4.255},{type:'moab',count:53,interval:0.168,scale:4.489},{type:'bfb',count:35,interval:0.156,scale:4.7231},{type:'zomg',count:26,interval:0.144,scale:4.9571},{type:'ddt',count:21,interval:0.132,scale:5.1911},{type:'bad',count:17,interval:0.12,scale:5.4251}]
  },
  312: {
    label: 'Round 312 — standard defense',
    difficulty: 4.2655,
    speed: 1.4832,
    density: 107,
    roundCash: 302.8,
    special: null,
    groups: [{type:'ceramic',count:107,interval:0.18,scale:4.2655},{type:'moab',count:53,interval:0.168,scale:4.5001},{type:'bfb',count:35,interval:0.156,scale:4.7347},{type:'zomg',count:26,interval:0.144,scale:4.9693},{type:'ddt',count:21,interval:0.132,scale:5.2039},{type:'bad',count:17,interval:0.12,scale:5.4385}]
  },
  313: {
    label: 'Round 313 — standard defense',
    difficulty: 4.2760,
    speed: 1.4848,
    density: 107,
    roundCash: 303.5,
    special: null,
    groups: [{type:'ceramic',count:107,interval:0.18,scale:4.276},{type:'moab',count:53,interval:0.168,scale:4.5112},{type:'bfb',count:35,interval:0.156,scale:4.7464},{type:'zomg',count:26,interval:0.144,scale:4.9815},{type:'ddt',count:21,interval:0.132,scale:5.2167},{type:'bad',count:17,interval:0.12,scale:5.4519}]
  },
  314: {
    label: 'Round 314 — standard defense',
    difficulty: 4.2865,
    speed: 1.4864,
    density: 107,
    roundCash: 304.1,
    special: null,
    groups: [{type:'ceramic',count:107,interval:0.18,scale:4.2865},{type:'moab',count:53,interval:0.168,scale:4.5223},{type:'bfb',count:35,interval:0.156,scale:4.758},{type:'zomg',count:26,interval:0.144,scale:4.9938},{type:'ddt',count:21,interval:0.132,scale:5.2295},{type:'bad',count:17,interval:0.12,scale:5.4653}]
  },
  315: {
    label: 'Round 315 — standard defense',
    difficulty: 4.2970,
    speed: 1.4880,
    density: 108,
    roundCash: 304.8,
    special: null,
    groups: [{type:'ceramic',count:108,interval:0.18,scale:4.297},{type:'moab',count:54,interval:0.168,scale:4.5333},{type:'bfb',count:36,interval:0.156,scale:4.7697},{type:'zomg',count:27,interval:0.144,scale:5.006},{type:'ddt',count:21,interval:0.132,scale:5.2423},{type:'bad',count:18,interval:0.12,scale:5.4787}]
  },
  316: {
    label: 'Round 316 — standard defense',
    difficulty: 4.3075,
    speed: 1.4896,
    density: 108,
    roundCash: 305.4,
    special: null,
    groups: [{type:'ceramic',count:108,interval:0.18,scale:4.3075},{type:'moab',count:54,interval:0.168,scale:4.5444},{type:'bfb',count:36,interval:0.156,scale:4.7813},{type:'zomg',count:27,interval:0.144,scale:5.0182},{type:'ddt',count:21,interval:0.132,scale:5.2552},{type:'bad',count:18,interval:0.12,scale:5.4921}]
  },
  317: {
    label: 'Round 317 — standard defense',
    difficulty: 4.3180,
    speed: 1.4912,
    density: 108,
    roundCash: 306.1,
    special: null,
    groups: [{type:'ceramic',count:108,interval:0.18,scale:4.318},{type:'moab',count:54,interval:0.168,scale:4.5555},{type:'bfb',count:36,interval:0.156,scale:4.793},{type:'zomg',count:27,interval:0.144,scale:5.0305},{type:'ddt',count:21,interval:0.132,scale:5.268},{type:'bad',count:18,interval:0.12,scale:5.5054}]
  },
  318: {
    label: 'Round 318 — standard defense',
    difficulty: 4.3285,
    speed: 1.4928,
    density: 109,
    roundCash: 306.7,
    special: null,
    groups: [{type:'ceramic',count:109,interval:0.18,scale:4.3285},{type:'moab',count:54,interval:0.168,scale:4.5666},{type:'bfb',count:36,interval:0.156,scale:4.8046},{type:'zomg',count:27,interval:0.144,scale:5.0427},{type:'ddt',count:21,interval:0.132,scale:5.2808},{type:'bad',count:18,interval:0.12,scale:5.5188}]
  },
  319: {
    label: 'Round 319 — standard defense',
    difficulty: 4.3390,
    speed: 1.4944,
    density: 109,
    roundCash: 307.4,
    special: null,
    groups: [{type:'ceramic',count:109,interval:0.18,scale:4.339},{type:'moab',count:54,interval:0.168,scale:4.5776},{type:'bfb',count:36,interval:0.156,scale:4.8163},{type:'zomg',count:27,interval:0.144,scale:5.0549},{type:'ddt',count:21,interval:0.132,scale:5.2936},{type:'bad',count:18,interval:0.12,scale:5.5322}]
  },
  320: {
    label: 'Round 320 — pressure check',
    difficulty: 4.3495,
    speed: 1.4960,
    density: 109,
    roundCash: 308.0,
    special: null,
    groups: [{type:'ceramic',count:109,interval:0.18,scale:4.3495},{type:'moab',count:54,interval:0.168,scale:4.5887},{type:'bfb',count:36,interval:0.156,scale:4.8279},{type:'zomg',count:27,interval:0.144,scale:5.0672},{type:'ddt',count:21,interval:0.132,scale:5.3064},{type:'bad',count:18,interval:0.12,scale:5.5456}]
  },
  321: {
    label: 'Round 321 — standard defense',
    difficulty: 4.3600,
    speed: 1.4976,
    density: 110,
    roundCash: 308.6,
    special: null,
    groups: [{type:'ceramic',count:110,interval:0.18,scale:4.36},{type:'moab',count:55,interval:0.168,scale:4.5998},{type:'bfb',count:36,interval:0.156,scale:4.8396},{type:'zomg',count:27,interval:0.144,scale:5.0794},{type:'ddt',count:22,interval:0.132,scale:5.3192},{type:'bad',count:18,interval:0.12,scale:5.559}]
  },
  322: {
    label: 'Round 322 — standard defense',
    difficulty: 4.3705,
    speed: 1.4992,
    density: 110,
    roundCash: 309.3,
    special: null,
    groups: [{type:'ceramic',count:110,interval:0.18,scale:4.3705},{type:'moab',count:55,interval:0.168,scale:4.6109},{type:'bfb',count:36,interval:0.156,scale:4.8513},{type:'zomg',count:27,interval:0.144,scale:5.0916},{type:'ddt',count:22,interval:0.132,scale:5.332},{type:'bad',count:18,interval:0.12,scale:5.5724}]
  },
  323: {
    label: 'Round 323 — standard defense',
    difficulty: 4.3810,
    speed: 1.5008,
    density: 110,
    roundCash: 310.0,
    special: null,
    groups: [{type:'ceramic',count:110,interval:0.18,scale:4.381},{type:'moab',count:55,interval:0.168,scale:4.622},{type:'bfb',count:36,interval:0.156,scale:4.8629},{type:'zomg',count:27,interval:0.144,scale:5.1039},{type:'ddt',count:22,interval:0.132,scale:5.3448},{type:'bad',count:18,interval:0.12,scale:5.5858}]
  },
  324: {
    label: 'Round 324 — standard defense',
    difficulty: 4.3915,
    speed: 1.5024,
    density: 111,
    roundCash: 310.6,
    special: null,
    groups: [{type:'ceramic',count:111,interval:0.18,scale:4.3915},{type:'moab',count:55,interval:0.168,scale:4.633},{type:'bfb',count:37,interval:0.156,scale:4.8746},{type:'zomg',count:27,interval:0.144,scale:5.1161},{type:'ddt',count:22,interval:0.132,scale:5.3576},{type:'bad',count:18,interval:0.12,scale:5.5992}]
  },
  325: {
    label: 'Round 325 — standard defense',
    difficulty: 4.4020,
    speed: 1.5040,
    density: 111,
    roundCash: 311.3,
    special: null,
    groups: [{type:'ceramic',count:111,interval:0.18,scale:4.402},{type:'moab',count:55,interval:0.168,scale:4.6441},{type:'bfb',count:37,interval:0.156,scale:4.8862},{type:'zomg',count:27,interval:0.144,scale:5.1283},{type:'ddt',count:22,interval:0.132,scale:5.3704},{type:'bad',count:18,interval:0.12,scale:5.6125}]
  },
  326: {
    label: 'Round 326 — standard defense',
    difficulty: 4.4125,
    speed: 1.5056,
    density: 111,
    roundCash: 311.9,
    special: null,
    groups: [{type:'ceramic',count:111,interval:0.18,scale:4.4125},{type:'moab',count:55,interval:0.168,scale:4.6552},{type:'bfb',count:37,interval:0.156,scale:4.8979},{type:'zomg',count:27,interval:0.144,scale:5.1406},{type:'ddt',count:22,interval:0.132,scale:5.3832},{type:'bad',count:18,interval:0.12,scale:5.6259}]
  },
  327: {
    label: 'Round 327 — standard defense',
    difficulty: 4.4230,
    speed: 1.5072,
    density: 112,
    roundCash: 312.6,
    special: null,
    groups: [{type:'ceramic',count:112,interval:0.18,scale:4.423},{type:'moab',count:56,interval:0.168,scale:4.6663},{type:'bfb',count:37,interval:0.156,scale:4.9095},{type:'zomg',count:28,interval:0.144,scale:5.1528},{type:'ddt',count:22,interval:0.132,scale:5.3961},{type:'bad',count:18,interval:0.12,scale:5.6393}]
  },
  328: {
    label: 'Round 328 — standard defense',
    difficulty: 4.4335,
    speed: 1.5088,
    density: 112,
    roundCash: 313.2,
    special: null,
    groups: [{type:'ceramic',count:112,interval:0.18,scale:4.4335},{type:'moab',count:56,interval:0.168,scale:4.6773},{type:'bfb',count:37,interval:0.156,scale:4.9212},{type:'zomg',count:28,interval:0.144,scale:5.165},{type:'ddt',count:22,interval:0.132,scale:5.4089},{type:'bad',count:18,interval:0.12,scale:5.6527}]
  },
  329: {
    label: 'Round 329 — standard defense',
    difficulty: 4.4440,
    speed: 1.5104,
    density: 112,
    roundCash: 313.9,
    special: null,
    groups: [{type:'ceramic',count:112,interval:0.18,scale:4.444},{type:'moab',count:56,interval:0.168,scale:4.6884},{type:'bfb',count:37,interval:0.156,scale:4.9328},{type:'zomg',count:28,interval:0.144,scale:5.1773},{type:'ddt',count:22,interval:0.132,scale:5.4217},{type:'bad',count:18,interval:0.12,scale:5.6661}]
  },
  330: {
    label: 'Round 330 — pressure check',
    difficulty: 4.4545,
    speed: 1.5120,
    density: 113,
    roundCash: 314.5,
    special: null,
    groups: [{type:'ceramic',count:113,interval:0.18,scale:4.4545},{type:'moab',count:56,interval:0.168,scale:4.6995},{type:'bfb',count:37,interval:0.156,scale:4.9445},{type:'zomg',count:28,interval:0.144,scale:5.1895},{type:'ddt',count:22,interval:0.132,scale:5.4345},{type:'bad',count:18,interval:0.12,scale:5.6795}]
  },
  331: {
    label: 'Round 331 — standard defense',
    difficulty: 4.4650,
    speed: 1.5136,
    density: 113,
    roundCash: 315.1,
    special: null,
    groups: [{type:'ceramic',count:113,interval:0.18,scale:4.465},{type:'moab',count:56,interval:0.168,scale:4.7106},{type:'bfb',count:37,interval:0.156,scale:4.9562},{type:'zomg',count:28,interval:0.144,scale:5.2017},{type:'ddt',count:22,interval:0.132,scale:5.4473},{type:'bad',count:18,interval:0.12,scale:5.6929}]
  },
  332: {
    label: 'Round 332 — standard defense',
    difficulty: 4.4755,
    speed: 1.5152,
    density: 113,
    roundCash: 315.8,
    special: null,
    groups: [{type:'ceramic',count:113,interval:0.18,scale:4.4755},{type:'moab',count:56,interval:0.168,scale:4.7217},{type:'bfb',count:37,interval:0.156,scale:4.9678},{type:'zomg',count:28,interval:0.144,scale:5.214},{type:'ddt',count:22,interval:0.132,scale:5.4601},{type:'bad',count:18,interval:0.12,scale:5.7063}]
  },
  333: {
    label: 'Round 333 — standard defense',
    difficulty: 4.4860,
    speed: 1.5168,
    density: 114,
    roundCash: 316.5,
    special: null,
    groups: [{type:'ceramic',count:114,interval:0.18,scale:4.486},{type:'moab',count:57,interval:0.168,scale:4.7327},{type:'bfb',count:38,interval:0.156,scale:4.9795},{type:'zomg',count:28,interval:0.144,scale:5.2262},{type:'ddt',count:22,interval:0.132,scale:5.4729},{type:'bad',count:19,interval:0.12,scale:5.7196}]
  },
  334: {
    label: 'Round 334 — standard defense',
    difficulty: 4.4965,
    speed: 1.5184,
    density: 114,
    roundCash: 317.1,
    special: null,
    groups: [{type:'ceramic',count:114,interval:0.18,scale:4.4965},{type:'moab',count:57,interval:0.168,scale:4.7438},{type:'bfb',count:38,interval:0.156,scale:4.9911},{type:'zomg',count:28,interval:0.144,scale:5.2384},{type:'ddt',count:22,interval:0.132,scale:5.4857},{type:'bad',count:19,interval:0.12,scale:5.733}]
  },
  335: {
    label: 'Round 335 — standard defense',
    difficulty: 4.5070,
    speed: 1.5200,
    density: 114,
    roundCash: 317.8,
    special: null,
    groups: [{type:'ceramic',count:114,interval:0.18,scale:4.507},{type:'moab',count:57,interval:0.168,scale:4.7549},{type:'bfb',count:38,interval:0.156,scale:5.0028},{type:'zomg',count:28,interval:0.144,scale:5.2507},{type:'ddt',count:22,interval:0.132,scale:5.4985},{type:'bad',count:19,interval:0.12,scale:5.7464}]
  },
  336: {
    label: 'Round 336 — standard defense',
    difficulty: 4.5175,
    speed: 1.5216,
    density: 115,
    roundCash: 318.4,
    special: null,
    groups: [{type:'ceramic',count:115,interval:0.18,scale:4.5175},{type:'moab',count:57,interval:0.168,scale:4.766},{type:'bfb',count:38,interval:0.156,scale:5.0144},{type:'zomg',count:28,interval:0.144,scale:5.2629},{type:'ddt',count:23,interval:0.132,scale:5.5114},{type:'bad',count:19,interval:0.12,scale:5.7598}]
  },
  337: {
    label: 'Round 337 — standard defense',
    difficulty: 4.5280,
    speed: 1.5232,
    density: 115,
    roundCash: 319.1,
    special: null,
    groups: [{type:'ceramic',count:115,interval:0.18,scale:4.528},{type:'moab',count:57,interval:0.168,scale:4.777},{type:'bfb',count:38,interval:0.156,scale:5.0261},{type:'zomg',count:28,interval:0.144,scale:5.2751},{type:'ddt',count:23,interval:0.132,scale:5.5242},{type:'bad',count:19,interval:0.12,scale:5.7732}]
  },
  338: {
    label: 'Round 338 — standard defense',
    difficulty: 4.5385,
    speed: 1.5248,
    density: 115,
    roundCash: 319.7,
    special: null,
    groups: [{type:'ceramic',count:115,interval:0.18,scale:4.5385},{type:'moab',count:57,interval:0.168,scale:4.7881},{type:'bfb',count:38,interval:0.156,scale:5.0377},{type:'zomg',count:28,interval:0.144,scale:5.2874},{type:'ddt',count:23,interval:0.132,scale:5.537},{type:'bad',count:19,interval:0.12,scale:5.7866}]
  },
  339: {
    label: 'Round 339 — standard defense',
    difficulty: 4.5490,
    speed: 1.5264,
    density: 116,
    roundCash: 320.4,
    special: null,
    groups: [{type:'ceramic',count:116,interval:0.18,scale:4.549},{type:'moab',count:58,interval:0.168,scale:4.7992},{type:'bfb',count:38,interval:0.156,scale:5.0494},{type:'zomg',count:29,interval:0.144,scale:5.2996},{type:'ddt',count:23,interval:0.132,scale:5.5498},{type:'bad',count:19,interval:0.12,scale:5.8}]
  },
  340: {
    label: 'Round 340 — pressure check',
    difficulty: 4.5595,
    speed: 1.5280,
    density: 116,
    roundCash: 321.0,
    special: null,
    groups: [{type:'ceramic',count:116,interval:0.18,scale:4.5595},{type:'moab',count:58,interval:0.168,scale:4.8103},{type:'bfb',count:38,interval:0.156,scale:5.061},{type:'zomg',count:29,interval:0.144,scale:5.3118},{type:'ddt',count:23,interval:0.132,scale:5.5626},{type:'bad',count:19,interval:0.12,scale:5.8134}]
  },
  341: {
    label: 'Round 341 — standard defense',
    difficulty: 4.5700,
    speed: 1.5296,
    density: 116,
    roundCash: 321.6,
    special: null,
    groups: [{type:'ceramic',count:116,interval:0.18,scale:4.57},{type:'moab',count:58,interval:0.168,scale:4.8213},{type:'bfb',count:38,interval:0.156,scale:5.0727},{type:'zomg',count:29,interval:0.144,scale:5.3241},{type:'ddt',count:23,interval:0.132,scale:5.5754},{type:'bad',count:19,interval:0.12,scale:5.8267}]
  },
  342: {
    label: 'Round 342 — standard defense',
    difficulty: 4.5805,
    speed: 1.5312,
    density: 117,
    roundCash: 322.3,
    special: null,
    groups: [{type:'ceramic',count:117,interval:0.18,scale:4.5805},{type:'moab',count:58,interval:0.168,scale:4.8324},{type:'bfb',count:39,interval:0.156,scale:5.0844},{type:'zomg',count:29,interval:0.144,scale:5.3363},{type:'ddt',count:23,interval:0.132,scale:5.5882},{type:'bad',count:19,interval:0.12,scale:5.8401}]
  },
  343: {
    label: 'Round 343 — standard defense',
    difficulty: 4.5910,
    speed: 1.5328,
    density: 117,
    roundCash: 323.0,
    special: null,
    groups: [{type:'ceramic',count:117,interval:0.18,scale:4.591},{type:'moab',count:58,interval:0.168,scale:4.8435},{type:'bfb',count:39,interval:0.156,scale:5.096},{type:'zomg',count:29,interval:0.144,scale:5.3485},{type:'ddt',count:23,interval:0.132,scale:5.601},{type:'bad',count:19,interval:0.12,scale:5.8535}]
  },
  344: {
    label: 'Round 344 — standard defense',
    difficulty: 4.6015,
    speed: 1.5344,
    density: 117,
    roundCash: 323.6,
    special: null,
    groups: [{type:'ceramic',count:117,interval:0.18,scale:4.6015},{type:'moab',count:58,interval:0.168,scale:4.8546},{type:'bfb',count:39,interval:0.156,scale:5.1077},{type:'zomg',count:29,interval:0.144,scale:5.3607},{type:'ddt',count:23,interval:0.132,scale:5.6138},{type:'bad',count:19,interval:0.12,scale:5.8669}]
  },
  345: {
    label: 'Round 345 — standard defense',
    difficulty: 4.6120,
    speed: 1.5360,
    density: 118,
    roundCash: 324.3,
    special: null,
    groups: [{type:'ceramic',count:118,interval:0.18,scale:4.612},{type:'moab',count:59,interval:0.168,scale:4.8657},{type:'bfb',count:39,interval:0.156,scale:5.1193},{type:'zomg',count:29,interval:0.144,scale:5.373},{type:'ddt',count:23,interval:0.132,scale:5.6266},{type:'bad',count:19,interval:0.12,scale:5.8803}]
  },
  346: {
    label: 'Round 346 — standard defense',
    difficulty: 4.6225,
    speed: 1.5376,
    density: 118,
    roundCash: 324.9,
    special: null,
    groups: [{type:'ceramic',count:118,interval:0.18,scale:4.6225},{type:'moab',count:59,interval:0.168,scale:4.8767},{type:'bfb',count:39,interval:0.156,scale:5.131},{type:'zomg',count:29,interval:0.144,scale:5.3852},{type:'ddt',count:23,interval:0.132,scale:5.6394},{type:'bad',count:19,interval:0.12,scale:5.8937}]
  },
  347: {
    label: 'Round 347 — standard defense',
    difficulty: 4.6330,
    speed: 1.5392,
    density: 118,
    roundCash: 325.6,
    special: null,
    groups: [{type:'ceramic',count:118,interval:0.18,scale:4.633},{type:'moab',count:59,interval:0.168,scale:4.8878},{type:'bfb',count:39,interval:0.156,scale:5.1426},{type:'zomg',count:29,interval:0.144,scale:5.3974},{type:'ddt',count:23,interval:0.132,scale:5.6523},{type:'bad',count:19,interval:0.12,scale:5.9071}]
  },
  348: {
    label: 'Round 348 — standard defense',
    difficulty: 4.6435,
    speed: 1.5408,
    density: 119,
    roundCash: 326.2,
    special: null,
    groups: [{type:'ceramic',count:119,interval:0.18,scale:4.6435},{type:'moab',count:59,interval:0.168,scale:4.8989},{type:'bfb',count:39,interval:0.156,scale:5.1543},{type:'zomg',count:29,interval:0.144,scale:5.4097},{type:'ddt',count:23,interval:0.132,scale:5.6651},{type:'bad',count:19,interval:0.12,scale:5.9205}]
  },
  349: {
    label: 'Round 349 — standard defense',
    difficulty: 4.6540,
    speed: 1.5424,
    density: 119,
    roundCash: 326.9,
    special: null,
    groups: [{type:'ceramic',count:119,interval:0.18,scale:4.654},{type:'moab',count:59,interval:0.168,scale:4.91},{type:'bfb',count:39,interval:0.156,scale:5.1659},{type:'zomg',count:29,interval:0.144,scale:5.4219},{type:'ddt',count:23,interval:0.132,scale:5.6779},{type:'bad',count:19,interval:0.12,scale:5.9338}]
  },
  350: {
    label: 'High-density rush',
    difficulty: 4.6645,
    speed: 1.5440,
    density: 120,
    roundCash: 327.5,
    special: 'High-density rush',
    groups: [{type:'ceramic',count:120,interval:0.18,scale:4.6645},{type:'moab',count:60,interval:0.168,scale:4.921},{type:'bfb',count:40,interval:0.156,scale:5.1776},{type:'zomg',count:30,interval:0.144,scale:5.4341},{type:'ddt',count:24,interval:0.132,scale:5.6907},{type:'bad',count:20,interval:0.12,scale:5.9472}]
  },
  351: {
    label: 'Round 351 — standard defense',
    difficulty: 4.6750,
    speed: 1.5456,
    density: 120,
    roundCash: 328.1,
    special: null,
    groups: [{type:'ceramic',count:120,interval:0.18,scale:4.675},{type:'moab',count:60,interval:0.168,scale:4.9321},{type:'bfb',count:40,interval:0.156,scale:5.1893},{type:'zomg',count:30,interval:0.144,scale:5.4464},{type:'ddt',count:24,interval:0.132,scale:5.7035},{type:'bad',count:20,interval:0.12,scale:5.9606}]
  },
  352: {
    label: 'Round 352 — standard defense',
    difficulty: 4.6855,
    speed: 1.5472,
    density: 120,
    roundCash: 328.8,
    special: null,
    groups: [{type:'ceramic',count:120,interval:0.18,scale:4.6855},{type:'moab',count:60,interval:0.168,scale:4.9432},{type:'bfb',count:40,interval:0.156,scale:5.2009},{type:'zomg',count:30,interval:0.144,scale:5.4586},{type:'ddt',count:24,interval:0.132,scale:5.7163},{type:'bad',count:20,interval:0.12,scale:5.974}]
  },
  353: {
    label: 'Round 353 — standard defense',
    difficulty: 4.6960,
    speed: 1.5488,
    density: 121,
    roundCash: 329.5,
    special: null,
    groups: [{type:'ceramic',count:121,interval:0.18,scale:4.696},{type:'moab',count:60,interval:0.168,scale:4.9543},{type:'bfb',count:40,interval:0.156,scale:5.2126},{type:'zomg',count:30,interval:0.144,scale:5.4708},{type:'ddt',count:24,interval:0.132,scale:5.7291},{type:'bad',count:20,interval:0.12,scale:5.9874}]
  },
  354: {
    label: 'Round 354 — standard defense',
    difficulty: 4.7065,
    speed: 1.5504,
    density: 121,
    roundCash: 330.1,
    special: null,
    groups: [{type:'ceramic',count:121,interval:0.18,scale:4.7065},{type:'moab',count:60,interval:0.168,scale:4.9654},{type:'bfb',count:40,interval:0.156,scale:5.2242},{type:'zomg',count:30,interval:0.144,scale:5.4831},{type:'ddt',count:24,interval:0.132,scale:5.7419},{type:'bad',count:20,interval:0.12,scale:6.0008}]
  },
  355: {
    label: 'Round 355 — standard defense',
    difficulty: 4.7170,
    speed: 1.5520,
    density: 121,
    roundCash: 330.8,
    special: null,
    groups: [{type:'ceramic',count:121,interval:0.18,scale:4.717},{type:'moab',count:60,interval:0.168,scale:4.9764},{type:'bfb',count:40,interval:0.156,scale:5.2359},{type:'zomg',count:30,interval:0.144,scale:5.4953},{type:'ddt',count:24,interval:0.132,scale:5.7547},{type:'bad',count:20,interval:0.12,scale:6.0142}]
  },
  356: {
    label: 'Round 356 — standard defense',
    difficulty: 4.7275,
    speed: 1.5536,
    density: 122,
    roundCash: 331.4,
    special: null,
    groups: [{type:'ceramic',count:122,interval:0.18,scale:4.7275},{type:'moab',count:61,interval:0.168,scale:4.9875},{type:'bfb',count:40,interval:0.156,scale:5.2475},{type:'zomg',count:30,interval:0.144,scale:5.5075},{type:'ddt',count:24,interval:0.132,scale:5.7675},{type:'bad',count:20,interval:0.12,scale:6.0276}]
  },
  357: {
    label: 'Round 357 — standard defense',
    difficulty: 4.7380,
    speed: 1.5552,
    density: 122,
    roundCash: 332.1,
    special: null,
    groups: [{type:'ceramic',count:122,interval:0.18,scale:4.738},{type:'moab',count:61,interval:0.168,scale:4.9986},{type:'bfb',count:40,interval:0.156,scale:5.2592},{type:'zomg',count:30,interval:0.144,scale:5.5198},{type:'ddt',count:24,interval:0.132,scale:5.7804},{type:'bad',count:20,interval:0.12,scale:6.041}]
  },
  358: {
    label: 'Round 358 — standard defense',
    difficulty: 4.7485,
    speed: 1.5568,
    density: 122,
    roundCash: 332.7,
    special: null,
    groups: [{type:'ceramic',count:122,interval:0.18,scale:4.7485},{type:'moab',count:61,interval:0.168,scale:5.0097},{type:'bfb',count:40,interval:0.156,scale:5.2708},{type:'zomg',count:30,interval:0.144,scale:5.532},{type:'ddt',count:24,interval:0.132,scale:5.7932},{type:'bad',count:20,interval:0.12,scale:6.0543}]
  },
  359: {
    label: 'Round 359 — standard defense',
    difficulty: 4.7590,
    speed: 1.5584,
    density: 123,
    roundCash: 333.4,
    special: null,
    groups: [{type:'ceramic',count:123,interval:0.18,scale:4.759},{type:'moab',count:61,interval:0.168,scale:5.0207},{type:'bfb',count:41,interval:0.156,scale:5.2825},{type:'zomg',count:30,interval:0.144,scale:5.5442},{type:'ddt',count:24,interval:0.132,scale:5.806},{type:'bad',count:20,interval:0.12,scale:6.0677}]
  },
  360: {
    label: 'Round 360 — pressure check',
    difficulty: 4.7695,
    speed: 1.5600,
    density: 123,
    roundCash: 334.0,
    special: null,
    groups: [{type:'ceramic',count:123,interval:0.18,scale:4.7695},{type:'moab',count:61,interval:0.168,scale:5.0318},{type:'bfb',count:41,interval:0.156,scale:5.2941},{type:'zomg',count:30,interval:0.144,scale:5.5565},{type:'ddt',count:24,interval:0.132,scale:5.8188},{type:'bad',count:20,interval:0.12,scale:6.0811}]
  },
  361: {
    label: 'Round 361 — standard defense',
    difficulty: 4.7800,
    speed: 1.5616,
    density: 123,
    roundCash: 334.6,
    special: null,
    groups: [{type:'ceramic',count:123,interval:0.18,scale:4.78},{type:'moab',count:61,interval:0.168,scale:5.0429},{type:'bfb',count:41,interval:0.156,scale:5.3058},{type:'zomg',count:30,interval:0.144,scale:5.5687},{type:'ddt',count:24,interval:0.132,scale:5.8316},{type:'bad',count:20,interval:0.12,scale:6.0945}]
  },
  362: {
    label: 'Round 362 — standard defense',
    difficulty: 4.7905,
    speed: 1.5632,
    density: 124,
    roundCash: 335.3,
    special: null,
    groups: [{type:'ceramic',count:124,interval:0.18,scale:4.7905},{type:'moab',count:62,interval:0.168,scale:5.054},{type:'bfb',count:41,interval:0.156,scale:5.3175},{type:'zomg',count:31,interval:0.144,scale:5.5809},{type:'ddt',count:24,interval:0.132,scale:5.8444},{type:'bad',count:20,interval:0.12,scale:6.1079}]
  },
  363: {
    label: 'Round 363 — standard defense',
    difficulty: 4.8010,
    speed: 1.5648,
    density: 124,
    roundCash: 336.0,
    special: null,
    groups: [{type:'ceramic',count:124,interval:0.18,scale:4.801},{type:'moab',count:62,interval:0.168,scale:5.0651},{type:'bfb',count:41,interval:0.156,scale:5.3291},{type:'zomg',count:31,interval:0.144,scale:5.5932},{type:'ddt',count:24,interval:0.132,scale:5.8572},{type:'bad',count:20,interval:0.12,scale:6.1213}]
  },
  364: {
    label: 'Round 364 — standard defense',
    difficulty: 4.8115,
    speed: 1.5664,
    density: 124,
    roundCash: 336.6,
    special: null,
    groups: [{type:'ceramic',count:124,interval:0.18,scale:4.8115},{type:'moab',count:62,interval:0.168,scale:5.0761},{type:'bfb',count:41,interval:0.156,scale:5.3408},{type:'zomg',count:31,interval:0.144,scale:5.6054},{type:'ddt',count:24,interval:0.132,scale:5.87},{type:'bad',count:20,interval:0.12,scale:6.1347}]
  },
  365: {
    label: 'Round 365 — standard defense',
    difficulty: 4.8220,
    speed: 1.5680,
    density: 125,
    roundCash: 337.3,
    special: null,
    groups: [{type:'ceramic',count:125,interval:0.18,scale:4.822},{type:'moab',count:62,interval:0.168,scale:5.0872},{type:'bfb',count:41,interval:0.156,scale:5.3524},{type:'zomg',count:31,interval:0.144,scale:5.6176},{type:'ddt',count:25,interval:0.132,scale:5.8828},{type:'bad',count:20,interval:0.12,scale:6.148}]
  },
  366: {
    label: 'Round 366 — standard defense',
    difficulty: 4.8325,
    speed: 1.5696,
    density: 125,
    roundCash: 337.9,
    special: null,
    groups: [{type:'ceramic',count:125,interval:0.18,scale:4.8325},{type:'moab',count:62,interval:0.168,scale:5.0983},{type:'bfb',count:41,interval:0.156,scale:5.3641},{type:'zomg',count:31,interval:0.144,scale:5.6299},{type:'ddt',count:25,interval:0.132,scale:5.8956},{type:'bad',count:20,interval:0.12,scale:6.1614}]
  },
  367: {
    label: 'Round 367 — standard defense',
    difficulty: 4.8430,
    speed: 1.5712,
    density: 125,
    roundCash: 338.6,
    special: null,
    groups: [{type:'ceramic',count:125,interval:0.18,scale:4.843},{type:'moab',count:62,interval:0.168,scale:5.1094},{type:'bfb',count:41,interval:0.156,scale:5.3757},{type:'zomg',count:31,interval:0.144,scale:5.6421},{type:'ddt',count:25,interval:0.132,scale:5.9085},{type:'bad',count:20,interval:0.12,scale:6.1748}]
  },
  368: {
    label: 'Round 368 — standard defense',
    difficulty: 4.8535,
    speed: 1.5728,
    density: 126,
    roundCash: 339.2,
    special: null,
    groups: [{type:'ceramic',count:126,interval:0.18,scale:4.8535},{type:'moab',count:63,interval:0.168,scale:5.1204},{type:'bfb',count:42,interval:0.156,scale:5.3874},{type:'zomg',count:31,interval:0.144,scale:5.6543},{type:'ddt',count:25,interval:0.132,scale:5.9213},{type:'bad',count:21,interval:0.12,scale:6.1882}]
  },
  369: {
    label: 'Round 369 — standard defense',
    difficulty: 4.8640,
    speed: 1.5744,
    density: 126,
    roundCash: 339.9,
    special: null,
    groups: [{type:'ceramic',count:126,interval:0.18,scale:4.864},{type:'moab',count:63,interval:0.168,scale:5.1315},{type:'bfb',count:42,interval:0.156,scale:5.399},{type:'zomg',count:31,interval:0.144,scale:5.6666},{type:'ddt',count:25,interval:0.132,scale:5.9341},{type:'bad',count:21,interval:0.12,scale:6.2016}]
  },
  370: {
    label: 'Round 370 — pressure check',
    difficulty: 4.8745,
    speed: 1.5760,
    density: 126,
    roundCash: 340.5,
    special: null,
    groups: [{type:'ceramic',count:126,interval:0.18,scale:4.8745},{type:'moab',count:63,interval:0.168,scale:5.1426},{type:'bfb',count:42,interval:0.156,scale:5.4107},{type:'zomg',count:31,interval:0.144,scale:5.6788},{type:'ddt',count:25,interval:0.132,scale:5.9469},{type:'bad',count:21,interval:0.12,scale:6.215}]
  },
  371: {
    label: 'Round 371 — standard defense',
    difficulty: 4.8850,
    speed: 1.5776,
    density: 127,
    roundCash: 341.1,
    special: null,
    groups: [{type:'ceramic',count:127,interval:0.18,scale:4.885},{type:'moab',count:63,interval:0.168,scale:5.1537},{type:'bfb',count:42,interval:0.156,scale:5.4224},{type:'zomg',count:31,interval:0.144,scale:5.691},{type:'ddt',count:25,interval:0.132,scale:5.9597},{type:'bad',count:21,interval:0.12,scale:6.2284}]
  },
  372: {
    label: 'Round 372 — standard defense',
    difficulty: 4.8955,
    speed: 1.5792,
    density: 127,
    roundCash: 341.8,
    special: null,
    groups: [{type:'ceramic',count:127,interval:0.18,scale:4.8955},{type:'moab',count:63,interval:0.168,scale:5.1648},{type:'bfb',count:42,interval:0.156,scale:5.434},{type:'zomg',count:31,interval:0.144,scale:5.7033},{type:'ddt',count:25,interval:0.132,scale:5.9725},{type:'bad',count:21,interval:0.12,scale:6.2418}]
  },
  373: {
    label: 'Round 373 — standard defense',
    difficulty: 4.9060,
    speed: 1.5808,
    density: 127,
    roundCash: 342.5,
    special: null,
    groups: [{type:'ceramic',count:127,interval:0.18,scale:4.906},{type:'moab',count:63,interval:0.168,scale:5.1758},{type:'bfb',count:42,interval:0.156,scale:5.4457},{type:'zomg',count:31,interval:0.144,scale:5.7155},{type:'ddt',count:25,interval:0.132,scale:5.9853},{type:'bad',count:21,interval:0.12,scale:6.2551}]
  },
  374: {
    label: 'Round 374 — standard defense',
    difficulty: 4.9165,
    speed: 1.5824,
    density: 128,
    roundCash: 343.1,
    special: null,
    groups: [{type:'ceramic',count:128,interval:0.18,scale:4.9165},{type:'moab',count:64,interval:0.168,scale:5.1869},{type:'bfb',count:42,interval:0.156,scale:5.4573},{type:'zomg',count:32,interval:0.144,scale:5.7277},{type:'ddt',count:25,interval:0.132,scale:5.9981},{type:'bad',count:21,interval:0.12,scale:6.2685}]
  },
  375: {
    label: 'Round 375 — standard defense',
    difficulty: 4.9270,
    speed: 1.5840,
    density: 128,
    roundCash: 343.8,
    special: null,
    groups: [{type:'ceramic',count:128,interval:0.18,scale:4.927},{type:'moab',count:64,interval:0.168,scale:5.198},{type:'bfb',count:42,interval:0.156,scale:5.469},{type:'zomg',count:32,interval:0.144,scale:5.74},{type:'ddt',count:25,interval:0.132,scale:6.0109},{type:'bad',count:21,interval:0.12,scale:6.2819}]
  },
  376: {
    label: 'Round 376 — standard defense',
    difficulty: 4.9375,
    speed: 1.5856,
    density: 128,
    roundCash: 344.4,
    special: null,
    groups: [{type:'ceramic',count:128,interval:0.18,scale:4.9375},{type:'moab',count:64,interval:0.168,scale:5.2091},{type:'bfb',count:42,interval:0.156,scale:5.4806},{type:'zomg',count:32,interval:0.144,scale:5.7522},{type:'ddt',count:25,interval:0.132,scale:6.0237},{type:'bad',count:21,interval:0.12,scale:6.2953}]
  },
  377: {
    label: 'Round 377 — standard defense',
    difficulty: 4.9480,
    speed: 1.5872,
    density: 129,
    roundCash: 345.1,
    special: null,
    groups: [{type:'ceramic',count:129,interval:0.18,scale:4.948},{type:'moab',count:64,interval:0.168,scale:5.2201},{type:'bfb',count:43,interval:0.156,scale:5.4923},{type:'zomg',count:32,interval:0.144,scale:5.7644},{type:'ddt',count:25,interval:0.132,scale:6.0366},{type:'bad',count:21,interval:0.12,scale:6.3087}]
  },
  378: {
    label: 'Round 378 — standard defense',
    difficulty: 4.9585,
    speed: 1.5888,
    density: 129,
    roundCash: 345.7,
    special: null,
    groups: [{type:'ceramic',count:129,interval:0.18,scale:4.9585},{type:'moab',count:64,interval:0.168,scale:5.2312},{type:'bfb',count:43,interval:0.156,scale:5.5039},{type:'zomg',count:32,interval:0.144,scale:5.7767},{type:'ddt',count:25,interval:0.132,scale:6.0494},{type:'bad',count:21,interval:0.12,scale:6.3221}]
  },
  379: {
    label: 'Round 379 — standard defense',
    difficulty: 4.9690,
    speed: 1.5904,
    density: 129,
    roundCash: 346.4,
    special: null,
    groups: [{type:'ceramic',count:129,interval:0.18,scale:4.969},{type:'moab',count:64,interval:0.168,scale:5.2423},{type:'bfb',count:43,interval:0.156,scale:5.5156},{type:'zomg',count:32,interval:0.144,scale:5.7889},{type:'ddt',count:25,interval:0.132,scale:6.0622},{type:'bad',count:21,interval:0.12,scale:6.3355}]
  },
  380: {
    label: 'Round 380 — pressure check',
    difficulty: 4.9795,
    speed: 1.5920,
    density: 130,
    roundCash: 347.0,
    special: null,
    groups: [{type:'ceramic',count:130,interval:0.18,scale:4.9795},{type:'moab',count:65,interval:0.168,scale:5.2534},{type:'bfb',count:43,interval:0.156,scale:5.5272},{type:'zomg',count:32,interval:0.144,scale:5.8011},{type:'ddt',count:26,interval:0.132,scale:6.075},{type:'bad',count:21,interval:0.12,scale:6.3489}]
  },
  381: {
    label: 'Round 381 — standard defense',
    difficulty: 4.9900,
    speed: 1.5936,
    density: 130,
    roundCash: 347.6,
    special: null,
    groups: [{type:'ceramic',count:130,interval:0.18,scale:4.99},{type:'moab',count:65,interval:0.168,scale:5.2645},{type:'bfb',count:43,interval:0.156,scale:5.5389},{type:'zomg',count:32,interval:0.144,scale:5.8134},{type:'ddt',count:26,interval:0.132,scale:6.0878},{type:'bad',count:21,interval:0.12,scale:6.3622}]
  },
  382: {
    label: 'Round 382 — standard defense',
    difficulty: 5.0005,
    speed: 1.5952,
    density: 130,
    roundCash: 348.3,
    special: null,
    groups: [{type:'ceramic',count:130,interval:0.18,scale:5.0005},{type:'moab',count:65,interval:0.168,scale:5.2755},{type:'bfb',count:43,interval:0.156,scale:5.5506},{type:'zomg',count:32,interval:0.144,scale:5.8256},{type:'ddt',count:26,interval:0.132,scale:6.1006},{type:'bad',count:21,interval:0.12,scale:6.3756}]
  },
  383: {
    label: 'Round 383 — standard defense',
    difficulty: 5.0110,
    speed: 1.5968,
    density: 131,
    roundCash: 349.0,
    special: null,
    groups: [{type:'ceramic',count:131,interval:0.18,scale:5.011},{type:'moab',count:65,interval:0.168,scale:5.2866},{type:'bfb',count:43,interval:0.156,scale:5.5622},{type:'zomg',count:32,interval:0.144,scale:5.8378},{type:'ddt',count:26,interval:0.132,scale:6.1134},{type:'bad',count:21,interval:0.12,scale:6.389}]
  },
  384: {
    label: 'Round 384 — standard defense',
    difficulty: 5.0215,
    speed: 1.5984,
    density: 131,
    roundCash: 349.6,
    special: null,
    groups: [{type:'ceramic',count:131,interval:0.18,scale:5.0215},{type:'moab',count:65,interval:0.168,scale:5.2977},{type:'bfb',count:43,interval:0.156,scale:5.5739},{type:'zomg',count:32,interval:0.144,scale:5.85},{type:'ddt',count:26,interval:0.132,scale:6.1262},{type:'bad',count:21,interval:0.12,scale:6.4024}]
  },
  385: {
    label: 'Round 385 — standard defense',
    difficulty: 5.0320,
    speed: 1.6000,
    density: 131,
    roundCash: 350.3,
    special: null,
    groups: [{type:'ceramic',count:131,interval:0.18,scale:5.032},{type:'moab',count:65,interval:0.168,scale:5.3088},{type:'bfb',count:43,interval:0.156,scale:5.5855},{type:'zomg',count:32,interval:0.144,scale:5.8623},{type:'ddt',count:26,interval:0.132,scale:6.139},{type:'bad',count:21,interval:0.12,scale:6.4158}]
  },
  386: {
    label: 'Round 386 — standard defense',
    difficulty: 5.0425,
    speed: 1.6016,
    density: 132,
    roundCash: 350.9,
    special: null,
    groups: [{type:'ceramic',count:132,interval:0.18,scale:5.0425},{type:'moab',count:66,interval:0.168,scale:5.3198},{type:'bfb',count:44,interval:0.156,scale:5.5972},{type:'zomg',count:33,interval:0.144,scale:5.8745},{type:'ddt',count:26,interval:0.132,scale:6.1519},{type:'bad',count:22,interval:0.12,scale:6.4292}]
  },
  387: {
    label: 'Round 387 — standard defense',
    difficulty: 5.0530,
    speed: 1.6032,
    density: 132,
    roundCash: 351.6,
    special: null,
    groups: [{type:'ceramic',count:132,interval:0.18,scale:5.053},{type:'moab',count:66,interval:0.168,scale:5.3309},{type:'bfb',count:44,interval:0.156,scale:5.6088},{type:'zomg',count:33,interval:0.144,scale:5.8867},{type:'ddt',count:26,interval:0.132,scale:6.1647},{type:'bad',count:22,interval:0.12,scale:6.4426}]
  },
  388: {
    label: 'Round 388 — standard defense',
    difficulty: 5.0635,
    speed: 1.6048,
    density: 132,
    roundCash: 352.2,
    special: null,
    groups: [{type:'ceramic',count:132,interval:0.18,scale:5.0635},{type:'moab',count:66,interval:0.168,scale:5.342},{type:'bfb',count:44,interval:0.156,scale:5.6205},{type:'zomg',count:33,interval:0.144,scale:5.899},{type:'ddt',count:26,interval:0.132,scale:6.1775},{type:'bad',count:22,interval:0.12,scale:6.456}]
  },
  389: {
    label: 'Round 389 — standard defense',
    difficulty: 5.0740,
    speed: 1.6064,
    density: 133,
    roundCash: 352.9,
    special: null,
    groups: [{type:'ceramic',count:133,interval:0.18,scale:5.074},{type:'moab',count:66,interval:0.168,scale:5.3531},{type:'bfb',count:44,interval:0.156,scale:5.6321},{type:'zomg',count:33,interval:0.144,scale:5.9112},{type:'ddt',count:26,interval:0.132,scale:6.1903},{type:'bad',count:22,interval:0.12,scale:6.4693}]
  },
  390: {
    label: 'Round 390 — pressure check',
    difficulty: 5.0845,
    speed: 1.6080,
    density: 133,
    roundCash: 353.5,
    special: null,
    groups: [{type:'ceramic',count:133,interval:0.18,scale:5.0845},{type:'moab',count:66,interval:0.168,scale:5.3641},{type:'bfb',count:44,interval:0.156,scale:5.6438},{type:'zomg',count:33,interval:0.144,scale:5.9234},{type:'ddt',count:26,interval:0.132,scale:6.2031},{type:'bad',count:22,interval:0.12,scale:6.4827}]
  },
  391: {
    label: 'Round 391 — standard defense',
    difficulty: 5.0950,
    speed: 1.6096,
    density: 133,
    roundCash: 354.1,
    special: null,
    groups: [{type:'ceramic',count:133,interval:0.18,scale:5.095},{type:'moab',count:66,interval:0.168,scale:5.3752},{type:'bfb',count:44,interval:0.156,scale:5.6555},{type:'zomg',count:33,interval:0.144,scale:5.9357},{type:'ddt',count:26,interval:0.132,scale:6.2159},{type:'bad',count:22,interval:0.12,scale:6.4961}]
  },
  392: {
    label: 'Round 392 — standard defense',
    difficulty: 5.1055,
    speed: 1.6112,
    density: 134,
    roundCash: 354.8,
    special: null,
    groups: [{type:'ceramic',count:134,interval:0.18,scale:5.1055},{type:'moab',count:67,interval:0.168,scale:5.3863},{type:'bfb',count:44,interval:0.156,scale:5.6671},{type:'zomg',count:33,interval:0.144,scale:5.9479},{type:'ddt',count:26,interval:0.132,scale:6.2287},{type:'bad',count:22,interval:0.12,scale:6.5095}]
  },
  393: {
    label: 'Round 393 — standard defense',
    difficulty: 5.1160,
    speed: 1.6128,
    density: 134,
    roundCash: 355.5,
    special: null,
    groups: [{type:'ceramic',count:134,interval:0.18,scale:5.116},{type:'moab',count:67,interval:0.168,scale:5.3974},{type:'bfb',count:44,interval:0.156,scale:5.6788},{type:'zomg',count:33,interval:0.144,scale:5.9601},{type:'ddt',count:26,interval:0.132,scale:6.2415},{type:'bad',count:22,interval:0.12,scale:6.5229}]
  },
  394: {
    label: 'Round 394 — standard defense',
    difficulty: 5.1265,
    speed: 1.6144,
    density: 134,
    roundCash: 356.1,
    special: null,
    groups: [{type:'ceramic',count:134,interval:0.18,scale:5.1265},{type:'moab',count:67,interval:0.168,scale:5.4085},{type:'bfb',count:44,interval:0.156,scale:5.6904},{type:'zomg',count:33,interval:0.144,scale:5.9724},{type:'ddt',count:26,interval:0.132,scale:6.2543},{type:'bad',count:22,interval:0.12,scale:6.5363}]
  },
  395: {
    label: 'Round 395 — standard defense',
    difficulty: 5.1370,
    speed: 1.6160,
    density: 135,
    roundCash: 356.8,
    special: null,
    groups: [{type:'ceramic',count:135,interval:0.18,scale:5.137},{type:'moab',count:67,interval:0.168,scale:5.4195},{type:'bfb',count:45,interval:0.156,scale:5.7021},{type:'zomg',count:33,interval:0.144,scale:5.9846},{type:'ddt',count:27,interval:0.132,scale:6.2671},{type:'bad',count:22,interval:0.12,scale:6.5497}]
  },
  396: {
    label: 'Round 396 — standard defense',
    difficulty: 5.1475,
    speed: 1.6176,
    density: 135,
    roundCash: 357.4,
    special: null,
    groups: [{type:'ceramic',count:135,interval:0.18,scale:5.1475},{type:'moab',count:67,interval:0.168,scale:5.4306},{type:'bfb',count:45,interval:0.156,scale:5.7137},{type:'zomg',count:33,interval:0.144,scale:5.9968},{type:'ddt',count:27,interval:0.132,scale:6.2799},{type:'bad',count:22,interval:0.12,scale:6.5631}]
  },
  397: {
    label: 'Round 397 — standard defense',
    difficulty: 5.1580,
    speed: 1.6192,
    density: 135,
    roundCash: 358.1,
    special: null,
    groups: [{type:'ceramic',count:135,interval:0.18,scale:5.158},{type:'moab',count:67,interval:0.168,scale:5.4417},{type:'bfb',count:45,interval:0.156,scale:5.7254},{type:'zomg',count:33,interval:0.144,scale:6.0091},{type:'ddt',count:27,interval:0.132,scale:6.2928},{type:'bad',count:22,interval:0.12,scale:6.5765}]
  },
  398: {
    label: 'Round 398 — standard defense',
    difficulty: 5.1685,
    speed: 1.6208,
    density: 136,
    roundCash: 358.7,
    special: null,
    groups: [{type:'ceramic',count:136,interval:0.18,scale:5.1685},{type:'moab',count:68,interval:0.168,scale:5.4528},{type:'bfb',count:45,interval:0.156,scale:5.737},{type:'zomg',count:34,interval:0.144,scale:6.0213},{type:'ddt',count:27,interval:0.132,scale:6.3056},{type:'bad',count:22,interval:0.12,scale:6.5898}]
  },
  399: {
    label: 'Round 399 — standard defense',
    difficulty: 5.1790,
    speed: 1.6224,
    density: 136,
    roundCash: 359.4,
    special: null,
    groups: [{type:'ceramic',count:136,interval:0.18,scale:5.179},{type:'moab',count:68,interval:0.168,scale:5.4638},{type:'bfb',count:45,interval:0.156,scale:5.7487},{type:'zomg',count:34,interval:0.144,scale:6.0335},{type:'ddt',count:27,interval:0.132,scale:6.3184},{type:'bad',count:22,interval:0.12,scale:6.6032}]
  },
  400: {
    label: 'Freeplay siege',
    difficulty: 5.1895,
    speed: 1.6240,
    density: 137,
    roundCash: 360.0,
    special: 'Freeplay siege',
    groups: [{type:'ceramic',count:137,interval:0.18,scale:5.1895},{type:'moab',count:68,interval:0.168,scale:5.4749},{type:'bfb',count:45,interval:0.156,scale:5.7603},{type:'zomg',count:34,interval:0.144,scale:6.0458},{type:'ddt',count:27,interval:0.132,scale:6.3312},{type:'bad',count:22,interval:0.12,scale:6.6166}]
  },
  401: {
    label: 'Round 401 — standard defense',
    difficulty: 5.2000,
    speed: 1.6256,
    density: 137,
    roundCash: 360.7,
    special: null,
    groups: [{type:'ceramic',count:137,interval:0.18,scale:5.2},{type:'moab',count:68,interval:0.168,scale:5.486},{type:'bfb',count:45,interval:0.156,scale:5.772},{type:'zomg',count:34,interval:0.144,scale:6.058},{type:'ddt',count:27,interval:0.132,scale:6.344},{type:'bad',count:22,interval:0.12,scale:6.63}]
  },
  402: {
    label: 'Round 402 — standard defense',
    difficulty: 5.2105,
    speed: 1.6272,
    density: 137,
    roundCash: 361.3,
    special: null,
    groups: [{type:'ceramic',count:137,interval:0.18,scale:5.2105},{type:'moab',count:68,interval:0.168,scale:5.4971},{type:'bfb',count:45,interval:0.156,scale:5.7837},{type:'zomg',count:34,interval:0.144,scale:6.0702},{type:'ddt',count:27,interval:0.132,scale:6.3568},{type:'bad',count:22,interval:0.12,scale:6.6434}]
  },
  403: {
    label: 'Round 403 — standard defense',
    difficulty: 5.2210,
    speed: 1.6288,
    density: 138,
    roundCash: 361.9,
    special: null,
    groups: [{type:'ceramic',count:138,interval:0.18,scale:5.221},{type:'moab',count:69,interval:0.168,scale:5.5082},{type:'bfb',count:46,interval:0.156,scale:5.7953},{type:'zomg',count:34,interval:0.144,scale:6.0825},{type:'ddt',count:27,interval:0.132,scale:6.3696},{type:'bad',count:23,interval:0.12,scale:6.6568}]
  },
  404: {
    label: 'Round 404 — standard defense',
    difficulty: 5.2315,
    speed: 1.6304,
    density: 138,
    roundCash: 362.6,
    special: null,
    groups: [{type:'ceramic',count:138,interval:0.18,scale:5.2315},{type:'moab',count:69,interval:0.168,scale:5.5192},{type:'bfb',count:46,interval:0.156,scale:5.807},{type:'zomg',count:34,interval:0.144,scale:6.0947},{type:'ddt',count:27,interval:0.132,scale:6.3824},{type:'bad',count:23,interval:0.12,scale:6.6702}]
  },
  405: {
    label: 'Round 405 — standard defense',
    difficulty: 5.2420,
    speed: 1.6320,
    density: 138,
    roundCash: 363.3,
    special: null,
    groups: [{type:'ceramic',count:138,interval:0.18,scale:5.242},{type:'moab',count:69,interval:0.168,scale:5.5303},{type:'bfb',count:46,interval:0.156,scale:5.8186},{type:'zomg',count:34,interval:0.144,scale:6.1069},{type:'ddt',count:27,interval:0.132,scale:6.3952},{type:'bad',count:23,interval:0.12,scale:6.6835}]
  },
  406: {
    label: 'Round 406 — standard defense',
    difficulty: 5.2525,
    speed: 1.6336,
    density: 139,
    roundCash: 363.9,
    special: null,
    groups: [{type:'ceramic',count:139,interval:0.18,scale:5.2525},{type:'moab',count:69,interval:0.168,scale:5.5414},{type:'bfb',count:46,interval:0.156,scale:5.8303},{type:'zomg',count:34,interval:0.144,scale:6.1192},{type:'ddt',count:27,interval:0.132,scale:6.4081},{type:'bad',count:23,interval:0.12,scale:6.6969}]
  },
  407: {
    label: 'Round 407 — standard defense',
    difficulty: 5.2630,
    speed: 1.6352,
    density: 139,
    roundCash: 364.6,
    special: null,
    groups: [{type:'ceramic',count:139,interval:0.18,scale:5.263},{type:'moab',count:69,interval:0.168,scale:5.5525},{type:'bfb',count:46,interval:0.156,scale:5.8419},{type:'zomg',count:34,interval:0.144,scale:6.1314},{type:'ddt',count:27,interval:0.132,scale:6.4209},{type:'bad',count:23,interval:0.12,scale:6.7103}]
  },
  408: {
    label: 'Round 408 — standard defense',
    difficulty: 5.2735,
    speed: 1.6368,
    density: 139,
    roundCash: 365.2,
    special: null,
    groups: [{type:'ceramic',count:139,interval:0.18,scale:5.2735},{type:'moab',count:69,interval:0.168,scale:5.5635},{type:'bfb',count:46,interval:0.156,scale:5.8536},{type:'zomg',count:34,interval:0.144,scale:6.1436},{type:'ddt',count:27,interval:0.132,scale:6.4337},{type:'bad',count:23,interval:0.12,scale:6.7237}]
  },
  409: {
    label: 'Round 409 — standard defense',
    difficulty: 5.2840,
    speed: 1.6384,
    density: 140,
    roundCash: 365.9,
    special: null,
    groups: [{type:'ceramic',count:140,interval:0.18,scale:5.284},{type:'moab',count:70,interval:0.168,scale:5.5746},{type:'bfb',count:46,interval:0.156,scale:5.8652},{type:'zomg',count:35,interval:0.144,scale:6.1559},{type:'ddt',count:28,interval:0.132,scale:6.4465},{type:'bad',count:23,interval:0.12,scale:6.7371}]
  },
  410: {
    label: 'Round 410 — pressure check',
    difficulty: 5.2945,
    speed: 1.6400,
    density: 140,
    roundCash: 366.5,
    special: null,
    groups: [{type:'ceramic',count:140,interval:0.18,scale:5.2945},{type:'moab',count:70,interval:0.168,scale:5.5857},{type:'bfb',count:46,interval:0.156,scale:5.8769},{type:'zomg',count:35,interval:0.144,scale:6.1681},{type:'ddt',count:28,interval:0.132,scale:6.4593},{type:'bad',count:23,interval:0.12,scale:6.7505}]
  },
  411: {
    label: 'Round 411 — standard defense',
    difficulty: 5.3050,
    speed: 1.6416,
    density: 140,
    roundCash: 367.2,
    special: null,
    groups: [{type:'ceramic',count:140,interval:0.18,scale:5.305},{type:'moab',count:70,interval:0.168,scale:5.5968},{type:'bfb',count:46,interval:0.156,scale:5.8886},{type:'zomg',count:35,interval:0.144,scale:6.1803},{type:'ddt',count:28,interval:0.132,scale:6.4721},{type:'bad',count:23,interval:0.12,scale:6.7639}]
  },
  412: {
    label: 'Round 412 — standard defense',
    difficulty: 5.3155,
    speed: 1.6432,
    density: 141,
    roundCash: 367.8,
    special: null,
    groups: [{type:'ceramic',count:141,interval:0.18,scale:5.3155},{type:'moab',count:70,interval:0.168,scale:5.6079},{type:'bfb',count:47,interval:0.156,scale:5.9002},{type:'zomg',count:35,interval:0.144,scale:6.1926},{type:'ddt',count:28,interval:0.132,scale:6.4849},{type:'bad',count:23,interval:0.12,scale:6.7773}]
  },
  413: {
    label: 'Round 413 — standard defense',
    difficulty: 5.3260,
    speed: 1.6448,
    density: 141,
    roundCash: 368.4,
    special: null,
    groups: [{type:'ceramic',count:141,interval:0.18,scale:5.326},{type:'moab',count:70,interval:0.168,scale:5.6189},{type:'bfb',count:47,interval:0.156,scale:5.9119},{type:'zomg',count:35,interval:0.144,scale:6.2048},{type:'ddt',count:28,interval:0.132,scale:6.4977},{type:'bad',count:23,interval:0.12,scale:6.7906}]
  },
  414: {
    label: 'Round 414 — standard defense',
    difficulty: 5.3365,
    speed: 1.6464,
    density: 141,
    roundCash: 369.1,
    special: null,
    groups: [{type:'ceramic',count:141,interval:0.18,scale:5.3365},{type:'moab',count:70,interval:0.168,scale:5.63},{type:'bfb',count:47,interval:0.156,scale:5.9235},{type:'zomg',count:35,interval:0.144,scale:6.217},{type:'ddt',count:28,interval:0.132,scale:6.5105},{type:'bad',count:23,interval:0.12,scale:6.804}]
  },
  415: {
    label: 'Round 415 — standard defense',
    difficulty: 5.3470,
    speed: 1.6480,
    density: 142,
    roundCash: 369.8,
    special: null,
    groups: [{type:'ceramic',count:142,interval:0.18,scale:5.347},{type:'moab',count:71,interval:0.168,scale:5.6411},{type:'bfb',count:47,interval:0.156,scale:5.9352},{type:'zomg',count:35,interval:0.144,scale:6.2293},{type:'ddt',count:28,interval:0.132,scale:6.5233},{type:'bad',count:23,interval:0.12,scale:6.8174}]
  },
  416: {
    label: 'Round 416 — standard defense',
    difficulty: 5.3575,
    speed: 1.6496,
    density: 142,
    roundCash: 370.4,
    special: null,
    groups: [{type:'ceramic',count:142,interval:0.18,scale:5.3575},{type:'moab',count:71,interval:0.168,scale:5.6522},{type:'bfb',count:47,interval:0.156,scale:5.9468},{type:'zomg',count:35,interval:0.144,scale:6.2415},{type:'ddt',count:28,interval:0.132,scale:6.5362},{type:'bad',count:23,interval:0.12,scale:6.8308}]
  },
  417: {
    label: 'Round 417 — standard defense',
    difficulty: 5.3680,
    speed: 1.6512,
    density: 142,
    roundCash: 371.1,
    special: null,
    groups: [{type:'ceramic',count:142,interval:0.18,scale:5.368},{type:'moab',count:71,interval:0.168,scale:5.6632},{type:'bfb',count:47,interval:0.156,scale:5.9585},{type:'zomg',count:35,interval:0.144,scale:6.2537},{type:'ddt',count:28,interval:0.132,scale:6.549},{type:'bad',count:23,interval:0.12,scale:6.8442}]
  },
  418: {
    label: 'Round 418 — standard defense',
    difficulty: 5.3785,
    speed: 1.6528,
    density: 143,
    roundCash: 371.7,
    special: null,
    groups: [{type:'ceramic',count:143,interval:0.18,scale:5.3785},{type:'moab',count:71,interval:0.168,scale:5.6743},{type:'bfb',count:47,interval:0.156,scale:5.9701},{type:'zomg',count:35,interval:0.144,scale:6.266},{type:'ddt',count:28,interval:0.132,scale:6.5618},{type:'bad',count:23,interval:0.12,scale:6.8576}]
  },
  419: {
    label: 'Round 419 — standard defense',
    difficulty: 5.3890,
    speed: 1.6544,
    density: 143,
    roundCash: 372.4,
    special: null,
    groups: [{type:'ceramic',count:143,interval:0.18,scale:5.389},{type:'moab',count:71,interval:0.168,scale:5.6854},{type:'bfb',count:47,interval:0.156,scale:5.9818},{type:'zomg',count:35,interval:0.144,scale:6.2782},{type:'ddt',count:28,interval:0.132,scale:6.5746},{type:'bad',count:23,interval:0.12,scale:6.871}]
  },
  420: {
    label: 'Round 420 — pressure check',
    difficulty: 5.3995,
    speed: 1.6560,
    density: 143,
    roundCash: 373.0,
    special: null,
    groups: [{type:'ceramic',count:143,interval:0.18,scale:5.3995},{type:'moab',count:71,interval:0.168,scale:5.6965},{type:'bfb',count:47,interval:0.156,scale:5.9934},{type:'zomg',count:35,interval:0.144,scale:6.2904},{type:'ddt',count:28,interval:0.132,scale:6.5874},{type:'bad',count:23,interval:0.12,scale:6.8844}]
  },
  421: {
    label: 'Round 421 — standard defense',
    difficulty: 5.4100,
    speed: 1.6576,
    density: 144,
    roundCash: 373.7,
    special: null,
    groups: [{type:'ceramic',count:144,interval:0.18,scale:5.41},{type:'moab',count:72,interval:0.168,scale:5.7075},{type:'bfb',count:48,interval:0.156,scale:6.0051},{type:'zomg',count:36,interval:0.144,scale:6.3027},{type:'ddt',count:28,interval:0.132,scale:6.6002},{type:'bad',count:24,interval:0.12,scale:6.8977}]
  },
  422: {
    label: 'Round 422 — standard defense',
    difficulty: 5.4205,
    speed: 1.6592,
    density: 144,
    roundCash: 374.3,
    special: null,
    groups: [{type:'ceramic',count:144,interval:0.18,scale:5.4205},{type:'moab',count:72,interval:0.168,scale:5.7186},{type:'bfb',count:48,interval:0.156,scale:6.0168},{type:'zomg',count:36,interval:0.144,scale:6.3149},{type:'ddt',count:28,interval:0.132,scale:6.613},{type:'bad',count:24,interval:0.12,scale:6.9111}]
  },
  423: {
    label: 'Round 423 — standard defense',
    difficulty: 5.4310,
    speed: 1.6608,
    density: 144,
    roundCash: 374.9,
    special: null,
    groups: [{type:'ceramic',count:144,interval:0.18,scale:5.431},{type:'moab',count:72,interval:0.168,scale:5.7297},{type:'bfb',count:48,interval:0.156,scale:6.0284},{type:'zomg',count:36,interval:0.144,scale:6.3271},{type:'ddt',count:28,interval:0.132,scale:6.6258},{type:'bad',count:24,interval:0.12,scale:6.9245}]
  },
  424: {
    label: 'Round 424 — standard defense',
    difficulty: 5.4415,
    speed: 1.6624,
    density: 145,
    roundCash: 375.6,
    special: null,
    groups: [{type:'ceramic',count:145,interval:0.18,scale:5.4415},{type:'moab',count:72,interval:0.168,scale:5.7408},{type:'bfb',count:48,interval:0.156,scale:6.0401},{type:'zomg',count:36,interval:0.144,scale:6.3393},{type:'ddt',count:29,interval:0.132,scale:6.6386},{type:'bad',count:24,interval:0.12,scale:6.9379}]
  },
  425: {
    label: 'Round 425 — standard defense',
    difficulty: 5.4520,
    speed: 1.6640,
    density: 145,
    roundCash: 376.3,
    special: null,
    groups: [{type:'ceramic',count:145,interval:0.18,scale:5.452},{type:'moab',count:72,interval:0.168,scale:5.7519},{type:'bfb',count:48,interval:0.156,scale:6.0517},{type:'zomg',count:36,interval:0.144,scale:6.3516},{type:'ddt',count:29,interval:0.132,scale:6.6514},{type:'bad',count:24,interval:0.12,scale:6.9513}]
  },
  426: {
    label: 'Round 426 — standard defense',
    difficulty: 5.4625,
    speed: 1.6656,
    density: 145,
    roundCash: 376.9,
    special: null,
    groups: [{type:'ceramic',count:145,interval:0.18,scale:5.4625},{type:'moab',count:72,interval:0.168,scale:5.7629},{type:'bfb',count:48,interval:0.156,scale:6.0634},{type:'zomg',count:36,interval:0.144,scale:6.3638},{type:'ddt',count:29,interval:0.132,scale:6.6643},{type:'bad',count:24,interval:0.12,scale:6.9647}]
  },
  427: {
    label: 'Round 427 — standard defense',
    difficulty: 5.4730,
    speed: 1.6672,
    density: 146,
    roundCash: 377.6,
    special: null,
    groups: [{type:'ceramic',count:146,interval:0.18,scale:5.473},{type:'moab',count:73,interval:0.168,scale:5.774},{type:'bfb',count:48,interval:0.156,scale:6.075},{type:'zomg',count:36,interval:0.144,scale:6.376},{type:'ddt',count:29,interval:0.132,scale:6.6771},{type:'bad',count:24,interval:0.12,scale:6.9781}]
  },
  428: {
    label: 'Round 428 — standard defense',
    difficulty: 5.4835,
    speed: 1.6688,
    density: 146,
    roundCash: 378.2,
    special: null,
    groups: [{type:'ceramic',count:146,interval:0.18,scale:5.4835},{type:'moab',count:73,interval:0.168,scale:5.7851},{type:'bfb',count:48,interval:0.156,scale:6.0867},{type:'zomg',count:36,interval:0.144,scale:6.3883},{type:'ddt',count:29,interval:0.132,scale:6.6899},{type:'bad',count:24,interval:0.12,scale:6.9915}]
  },
  429: {
    label: 'Round 429 — standard defense',
    difficulty: 5.4940,
    speed: 1.6704,
    density: 146,
    roundCash: 378.9,
    special: null,
    groups: [{type:'ceramic',count:146,interval:0.18,scale:5.494},{type:'moab',count:73,interval:0.168,scale:5.7962},{type:'bfb',count:48,interval:0.156,scale:6.0983},{type:'zomg',count:36,interval:0.144,scale:6.4005},{type:'ddt',count:29,interval:0.132,scale:6.7027},{type:'bad',count:24,interval:0.12,scale:7.0048}]
  },
  430: {
    label: 'Round 430 — pressure check',
    difficulty: 5.5045,
    speed: 1.6720,
    density: 147,
    roundCash: 379.5,
    special: null,
    groups: [{type:'ceramic',count:147,interval:0.18,scale:5.5045},{type:'moab',count:73,interval:0.168,scale:5.8072},{type:'bfb',count:49,interval:0.156,scale:6.11},{type:'zomg',count:36,interval:0.144,scale:6.4127},{type:'ddt',count:29,interval:0.132,scale:6.7155},{type:'bad',count:24,interval:0.12,scale:7.0182}]
  },
  431: {
    label: 'Round 431 — standard defense',
    difficulty: 5.5150,
    speed: 1.6736,
    density: 147,
    roundCash: 380.2,
    special: null,
    groups: [{type:'ceramic',count:147,interval:0.18,scale:5.515},{type:'moab',count:73,interval:0.168,scale:5.8183},{type:'bfb',count:49,interval:0.156,scale:6.1216},{type:'zomg',count:36,interval:0.144,scale:6.425},{type:'ddt',count:29,interval:0.132,scale:6.7283},{type:'bad',count:24,interval:0.12,scale:7.0316}]
  },
  432: {
    label: 'Round 432 — standard defense',
    difficulty: 5.5255,
    speed: 1.6752,
    density: 147,
    roundCash: 380.8,
    special: null,
    groups: [{type:'ceramic',count:147,interval:0.18,scale:5.5255},{type:'moab',count:73,interval:0.168,scale:5.8294},{type:'bfb',count:49,interval:0.156,scale:6.1333},{type:'zomg',count:36,interval:0.144,scale:6.4372},{type:'ddt',count:29,interval:0.132,scale:6.7411},{type:'bad',count:24,interval:0.12,scale:7.045}]
  },
  433: {
    label: 'Round 433 — standard defense',
    difficulty: 5.5360,
    speed: 1.6768,
    density: 148,
    roundCash: 381.4,
    special: null,
    groups: [{type:'ceramic',count:148,interval:0.18,scale:5.536},{type:'moab',count:74,interval:0.168,scale:5.8405},{type:'bfb',count:49,interval:0.156,scale:6.145},{type:'zomg',count:37,interval:0.144,scale:6.4494},{type:'ddt',count:29,interval:0.132,scale:6.7539},{type:'bad',count:24,interval:0.12,scale:7.0584}]
  },
  434: {
    label: 'Round 434 — standard defense',
    difficulty: 5.5465,
    speed: 1.6784,
    density: 148,
    roundCash: 382.1,
    special: null,
    groups: [{type:'ceramic',count:148,interval:0.18,scale:5.5465},{type:'moab',count:74,interval:0.168,scale:5.8516},{type:'bfb',count:49,interval:0.156,scale:6.1566},{type:'zomg',count:37,interval:0.144,scale:6.4617},{type:'ddt',count:29,interval:0.132,scale:6.7667},{type:'bad',count:24,interval:0.12,scale:7.0718}]
  },
  435: {
    label: 'Round 435 — standard defense',
    difficulty: 5.5570,
    speed: 1.6800,
    density: 148,
    roundCash: 382.8,
    special: null,
    groups: [{type:'ceramic',count:148,interval:0.18,scale:5.557},{type:'moab',count:74,interval:0.168,scale:5.8626},{type:'bfb',count:49,interval:0.156,scale:6.1683},{type:'zomg',count:37,interval:0.144,scale:6.4739},{type:'ddt',count:29,interval:0.132,scale:6.7795},{type:'bad',count:24,interval:0.12,scale:7.0852}]
  },
  436: {
    label: 'Round 436 — standard defense',
    difficulty: 5.5675,
    speed: 1.6816,
    density: 149,
    roundCash: 383.4,
    special: null,
    groups: [{type:'ceramic',count:149,interval:0.18,scale:5.5675},{type:'moab',count:74,interval:0.168,scale:5.8737},{type:'bfb',count:49,interval:0.156,scale:6.1799},{type:'zomg',count:37,interval:0.144,scale:6.4861},{type:'ddt',count:29,interval:0.132,scale:6.7923},{type:'bad',count:24,interval:0.12,scale:7.0986}]
  },
  437: {
    label: 'Round 437 — standard defense',
    difficulty: 5.5780,
    speed: 1.6832,
    density: 149,
    roundCash: 384.1,
    special: null,
    groups: [{type:'ceramic',count:149,interval:0.18,scale:5.578},{type:'moab',count:74,interval:0.168,scale:5.8848},{type:'bfb',count:49,interval:0.156,scale:6.1916},{type:'zomg',count:37,interval:0.144,scale:6.4984},{type:'ddt',count:29,interval:0.132,scale:6.8052},{type:'bad',count:24,interval:0.12,scale:7.112}]
  },
  438: {
    label: 'Round 438 — standard defense',
    difficulty: 5.5885,
    speed: 1.6848,
    density: 149,
    roundCash: 384.7,
    special: null,
    groups: [{type:'ceramic',count:149,interval:0.18,scale:5.5885},{type:'moab',count:74,interval:0.168,scale:5.8959},{type:'bfb',count:49,interval:0.156,scale:6.2032},{type:'zomg',count:37,interval:0.144,scale:6.5106},{type:'ddt',count:29,interval:0.132,scale:6.818},{type:'bad',count:24,interval:0.12,scale:7.1253}]
  },
  439: {
    label: 'Round 439 — standard defense',
    difficulty: 5.5990,
    speed: 1.6864,
    density: 150,
    roundCash: 385.4,
    special: null,
    groups: [{type:'ceramic',count:150,interval:0.18,scale:5.599},{type:'moab',count:75,interval:0.168,scale:5.9069},{type:'bfb',count:50,interval:0.156,scale:6.2149},{type:'zomg',count:37,interval:0.144,scale:6.5228},{type:'ddt',count:30,interval:0.132,scale:6.8308},{type:'bad',count:25,interval:0.12,scale:7.1387}]
  },
  440: {
    label: 'Round 440 — pressure check',
    difficulty: 5.6095,
    speed: 1.6880,
    density: 150,
    roundCash: 386.0,
    special: null,
    groups: [{type:'ceramic',count:150,interval:0.18,scale:5.6095},{type:'moab',count:75,interval:0.168,scale:5.918},{type:'bfb',count:50,interval:0.156,scale:6.2265},{type:'zomg',count:37,interval:0.144,scale:6.5351},{type:'ddt',count:30,interval:0.132,scale:6.8436},{type:'bad',count:25,interval:0.12,scale:7.1521}]
  },
  441: {
    label: 'Round 441 — standard defense',
    difficulty: 5.6200,
    speed: 1.6896,
    density: 150,
    roundCash: 386.7,
    special: null,
    groups: [{type:'ceramic',count:150,interval:0.18,scale:5.62},{type:'moab',count:75,interval:0.168,scale:5.9291},{type:'bfb',count:50,interval:0.156,scale:6.2382},{type:'zomg',count:37,interval:0.144,scale:6.5473},{type:'ddt',count:30,interval:0.132,scale:6.8564},{type:'bad',count:25,interval:0.12,scale:7.1655}]
  },
  442: {
    label: 'Round 442 — standard defense',
    difficulty: 5.6305,
    speed: 1.6912,
    density: 151,
    roundCash: 387.3,
    special: null,
    groups: [{type:'ceramic',count:151,interval:0.18,scale:5.6305},{type:'moab',count:75,interval:0.168,scale:5.9402},{type:'bfb',count:50,interval:0.156,scale:6.2499},{type:'zomg',count:37,interval:0.144,scale:6.5595},{type:'ddt',count:30,interval:0.132,scale:6.8692},{type:'bad',count:25,interval:0.12,scale:7.1789}]
  },
  443: {
    label: 'Round 443 — standard defense',
    difficulty: 5.6410,
    speed: 1.6928,
    density: 151,
    roundCash: 387.9,
    special: null,
    groups: [{type:'ceramic',count:151,interval:0.18,scale:5.641},{type:'moab',count:75,interval:0.168,scale:5.9513},{type:'bfb',count:50,interval:0.156,scale:6.2615},{type:'zomg',count:37,interval:0.144,scale:6.5718},{type:'ddt',count:30,interval:0.132,scale:6.882},{type:'bad',count:25,interval:0.12,scale:7.1923}]
  },
  444: {
    label: 'Round 444 — standard defense',
    difficulty: 5.6515,
    speed: 1.6944,
    density: 151,
    roundCash: 388.6,
    special: null,
    groups: [{type:'ceramic',count:151,interval:0.18,scale:5.6515},{type:'moab',count:75,interval:0.168,scale:5.9623},{type:'bfb',count:50,interval:0.156,scale:6.2732},{type:'zomg',count:37,interval:0.144,scale:6.584},{type:'ddt',count:30,interval:0.132,scale:6.8948},{type:'bad',count:25,interval:0.12,scale:7.2057}]
  },
  445: {
    label: 'Round 445 — standard defense',
    difficulty: 5.6620,
    speed: 1.6960,
    density: 152,
    roundCash: 389.3,
    special: null,
    groups: [{type:'ceramic',count:152,interval:0.18,scale:5.662},{type:'moab',count:76,interval:0.168,scale:5.9734},{type:'bfb',count:50,interval:0.156,scale:6.2848},{type:'zomg',count:38,interval:0.144,scale:6.5962},{type:'ddt',count:30,interval:0.132,scale:6.9076},{type:'bad',count:25,interval:0.12,scale:7.219}]
  },
  446: {
    label: 'Round 446 — standard defense',
    difficulty: 5.6725,
    speed: 1.6976,
    density: 152,
    roundCash: 389.9,
    special: null,
    groups: [{type:'ceramic',count:152,interval:0.18,scale:5.6725},{type:'moab',count:76,interval:0.168,scale:5.9845},{type:'bfb',count:50,interval:0.156,scale:6.2965},{type:'zomg',count:38,interval:0.144,scale:6.6085},{type:'ddt',count:30,interval:0.132,scale:6.9205},{type:'bad',count:25,interval:0.12,scale:7.2324}]
  },
  447: {
    label: 'Round 447 — standard defense',
    difficulty: 5.6830,
    speed: 1.6992,
    density: 152,
    roundCash: 390.6,
    special: null,
    groups: [{type:'ceramic',count:152,interval:0.18,scale:5.683},{type:'moab',count:76,interval:0.168,scale:5.9956},{type:'bfb',count:50,interval:0.156,scale:6.3081},{type:'zomg',count:38,interval:0.144,scale:6.6207},{type:'ddt',count:30,interval:0.132,scale:6.9333},{type:'bad',count:25,interval:0.12,scale:7.2458}]
  },
  448: {
    label: 'Round 448 — standard defense',
    difficulty: 5.6935,
    speed: 1.7008,
    density: 153,
    roundCash: 391.2,
    special: null,
    groups: [{type:'ceramic',count:153,interval:0.18,scale:5.6935},{type:'moab',count:76,interval:0.168,scale:6.0066},{type:'bfb',count:51,interval:0.156,scale:6.3198},{type:'zomg',count:38,interval:0.144,scale:6.6329},{type:'ddt',count:30,interval:0.132,scale:6.9461},{type:'bad',count:25,interval:0.12,scale:7.2592}]
  },
  449: {
    label: 'Round 449 — standard defense',
    difficulty: 5.7040,
    speed: 1.7024,
    density: 153,
    roundCash: 391.9,
    special: null,
    groups: [{type:'ceramic',count:153,interval:0.18,scale:5.704},{type:'moab',count:76,interval:0.168,scale:6.0177},{type:'bfb',count:51,interval:0.156,scale:6.3314},{type:'zomg',count:38,interval:0.144,scale:6.6452},{type:'ddt',count:30,interval:0.132,scale:6.9589},{type:'bad',count:25,interval:0.12,scale:7.2726}]
  },
  450: {
    label: 'Titan concentration',
    difficulty: 5.7145,
    speed: 1.7040,
    density: 154,
    roundCash: 392.5,
    special: 'Titan concentration',
    groups: [{type:'ceramic',count:154,interval:0.18,scale:5.7145},{type:'moab',count:77,interval:0.168,scale:6.0288},{type:'bfb',count:51,interval:0.156,scale:6.3431},{type:'zomg',count:38,interval:0.144,scale:6.6574},{type:'ddt',count:30,interval:0.132,scale:6.9717},{type:'bad',count:25,interval:0.12,scale:7.286}]
  },
  451: {
    label: 'Round 451 — standard defense',
    difficulty: 5.7250,
    speed: 1.7056,
    density: 154,
    roundCash: 393.2,
    special: null,
    groups: [{type:'ceramic',count:154,interval:0.18,scale:5.725},{type:'moab',count:77,interval:0.168,scale:6.0399},{type:'bfb',count:51,interval:0.156,scale:6.3548},{type:'zomg',count:38,interval:0.144,scale:6.6696},{type:'ddt',count:30,interval:0.132,scale:6.9845},{type:'bad',count:25,interval:0.12,scale:7.2994}]
  },
  452: {
    label: 'Round 452 — standard defense',
    difficulty: 5.7355,
    speed: 1.7072,
    density: 154,
    roundCash: 393.8,
    special: null,
    groups: [{type:'ceramic',count:154,interval:0.18,scale:5.7355},{type:'moab',count:77,interval:0.168,scale:6.051},{type:'bfb',count:51,interval:0.156,scale:6.3664},{type:'zomg',count:38,interval:0.144,scale:6.6819},{type:'ddt',count:30,interval:0.132,scale:6.9973},{type:'bad',count:25,interval:0.12,scale:7.3128}]
  },
  453: {
    label: 'Round 453 — standard defense',
    difficulty: 5.7460,
    speed: 1.7088,
    density: 155,
    roundCash: 394.4,
    special: null,
    groups: [{type:'ceramic',count:155,interval:0.18,scale:5.746},{type:'moab',count:77,interval:0.168,scale:6.062},{type:'bfb',count:51,interval:0.156,scale:6.3781},{type:'zomg',count:38,interval:0.144,scale:6.6941},{type:'ddt',count:31,interval:0.132,scale:7.0101},{type:'bad',count:25,interval:0.12,scale:7.3262}]
  },
  454: {
    label: 'Round 454 — standard defense',
    difficulty: 5.7565,
    speed: 1.7104,
    density: 155,
    roundCash: 395.1,
    special: null,
    groups: [{type:'ceramic',count:155,interval:0.18,scale:5.7565},{type:'moab',count:77,interval:0.168,scale:6.0731},{type:'bfb',count:51,interval:0.156,scale:6.3897},{type:'zomg',count:38,interval:0.144,scale:6.7063},{type:'ddt',count:31,interval:0.132,scale:7.0229},{type:'bad',count:25,interval:0.12,scale:7.3395}]
  },
  455: {
    label: 'Round 455 — standard defense',
    difficulty: 5.7670,
    speed: 1.7120,
    density: 155,
    roundCash: 395.8,
    special: null,
    groups: [{type:'ceramic',count:155,interval:0.18,scale:5.767},{type:'moab',count:77,interval:0.168,scale:6.0842},{type:'bfb',count:51,interval:0.156,scale:6.4014},{type:'zomg',count:38,interval:0.144,scale:6.7186},{type:'ddt',count:31,interval:0.132,scale:7.0357},{type:'bad',count:25,interval:0.12,scale:7.3529}]
  },
  456: {
    label: 'Round 456 — standard defense',
    difficulty: 5.7775,
    speed: 1.7136,
    density: 156,
    roundCash: 396.4,
    special: null,
    groups: [{type:'ceramic',count:156,interval:0.18,scale:5.7775},{type:'moab',count:78,interval:0.168,scale:6.0953},{type:'bfb',count:52,interval:0.156,scale:6.413},{type:'zomg',count:39,interval:0.144,scale:6.7308},{type:'ddt',count:31,interval:0.132,scale:7.0485},{type:'bad',count:26,interval:0.12,scale:7.3663}]
  },
  457: {
    label: 'Round 457 — standard defense',
    difficulty: 5.7880,
    speed: 1.7152,
    density: 156,
    roundCash: 397.1,
    special: null,
    groups: [{type:'ceramic',count:156,interval:0.18,scale:5.788},{type:'moab',count:78,interval:0.168,scale:6.1063},{type:'bfb',count:52,interval:0.156,scale:6.4247},{type:'zomg',count:39,interval:0.144,scale:6.743},{type:'ddt',count:31,interval:0.132,scale:7.0614},{type:'bad',count:26,interval:0.12,scale:7.3797}]
  },
  458: {
    label: 'Round 458 — standard defense',
    difficulty: 5.7985,
    speed: 1.7168,
    density: 156,
    roundCash: 397.7,
    special: null,
    groups: [{type:'ceramic',count:156,interval:0.18,scale:5.7985},{type:'moab',count:78,interval:0.168,scale:6.1174},{type:'bfb',count:52,interval:0.156,scale:6.4363},{type:'zomg',count:39,interval:0.144,scale:6.7553},{type:'ddt',count:31,interval:0.132,scale:7.0742},{type:'bad',count:26,interval:0.12,scale:7.3931}]
  },
  459: {
    label: 'Round 459 — standard defense',
    difficulty: 5.8090,
    speed: 1.7184,
    density: 157,
    roundCash: 398.4,
    special: null,
    groups: [{type:'ceramic',count:157,interval:0.18,scale:5.809},{type:'moab',count:78,interval:0.168,scale:6.1285},{type:'bfb',count:52,interval:0.156,scale:6.448},{type:'zomg',count:39,interval:0.144,scale:6.7675},{type:'ddt',count:31,interval:0.132,scale:7.087},{type:'bad',count:26,interval:0.12,scale:7.4065}]
  },
  460: {
    label: 'Round 460 — pressure check',
    difficulty: 5.8195,
    speed: 1.7200,
    density: 157,
    roundCash: 399.0,
    special: null,
    groups: [{type:'ceramic',count:157,interval:0.18,scale:5.8195},{type:'moab',count:78,interval:0.168,scale:6.1396},{type:'bfb',count:52,interval:0.156,scale:6.4596},{type:'zomg',count:39,interval:0.144,scale:6.7797},{type:'ddt',count:31,interval:0.132,scale:7.0998},{type:'bad',count:26,interval:0.12,scale:7.4199}]
  },
  461: {
    label: 'Round 461 — standard defense',
    difficulty: 5.8300,
    speed: 1.7216,
    density: 157,
    roundCash: 399.7,
    special: null,
    groups: [{type:'ceramic',count:157,interval:0.18,scale:5.83},{type:'moab',count:78,interval:0.168,scale:6.1506},{type:'bfb',count:52,interval:0.156,scale:6.4713},{type:'zomg',count:39,interval:0.144,scale:6.7919},{type:'ddt',count:31,interval:0.132,scale:7.1126},{type:'bad',count:26,interval:0.12,scale:7.4332}]
  },
  462: {
    label: 'Round 462 — standard defense',
    difficulty: 5.8405,
    speed: 1.7232,
    density: 158,
    roundCash: 400.3,
    special: null,
    groups: [{type:'ceramic',count:158,interval:0.18,scale:5.8405},{type:'moab',count:79,interval:0.168,scale:6.1617},{type:'bfb',count:52,interval:0.156,scale:6.483},{type:'zomg',count:39,interval:0.144,scale:6.8042},{type:'ddt',count:31,interval:0.132,scale:7.1254},{type:'bad',count:26,interval:0.12,scale:7.4466}]
  },
  463: {
    label: 'Round 463 — standard defense',
    difficulty: 5.8510,
    speed: 1.7248,
    density: 158,
    roundCash: 400.9,
    special: null,
    groups: [{type:'ceramic',count:158,interval:0.18,scale:5.851},{type:'moab',count:79,interval:0.168,scale:6.1728},{type:'bfb',count:52,interval:0.156,scale:6.4946},{type:'zomg',count:39,interval:0.144,scale:6.8164},{type:'ddt',count:31,interval:0.132,scale:7.1382},{type:'bad',count:26,interval:0.12,scale:7.46}]
  },
  464: {
    label: 'Round 464 — standard defense',
    difficulty: 5.8615,
    speed: 1.7264,
    density: 158,
    roundCash: 401.6,
    special: null,
    groups: [{type:'ceramic',count:158,interval:0.18,scale:5.8615},{type:'moab',count:79,interval:0.168,scale:6.1839},{type:'bfb',count:52,interval:0.156,scale:6.5063},{type:'zomg',count:39,interval:0.144,scale:6.8286},{type:'ddt',count:31,interval:0.132,scale:7.151},{type:'bad',count:26,interval:0.12,scale:7.4734}]
  },
  465: {
    label: 'Round 465 — standard defense',
    difficulty: 5.8720,
    speed: 1.7280,
    density: 159,
    roundCash: 402.3,
    special: null,
    groups: [{type:'ceramic',count:159,interval:0.18,scale:5.872},{type:'moab',count:79,interval:0.168,scale:6.195},{type:'bfb',count:53,interval:0.156,scale:6.5179},{type:'zomg',count:39,interval:0.144,scale:6.8409},{type:'ddt',count:31,interval:0.132,scale:7.1638},{type:'bad',count:26,interval:0.12,scale:7.4868}]
  },
  466: {
    label: 'Round 466 — standard defense',
    difficulty: 5.8825,
    speed: 1.7296,
    density: 159,
    roundCash: 402.9,
    special: null,
    groups: [{type:'ceramic',count:159,interval:0.18,scale:5.8825},{type:'moab',count:79,interval:0.168,scale:6.206},{type:'bfb',count:53,interval:0.156,scale:6.5296},{type:'zomg',count:39,interval:0.144,scale:6.8531},{type:'ddt',count:31,interval:0.132,scale:7.1767},{type:'bad',count:26,interval:0.12,scale:7.5002}]
  },
  467: {
    label: 'Round 467 — standard defense',
    difficulty: 5.8930,
    speed: 1.7312,
    density: 159,
    roundCash: 403.6,
    special: null,
    groups: [{type:'ceramic',count:159,interval:0.18,scale:5.893},{type:'moab',count:79,interval:0.168,scale:6.2171},{type:'bfb',count:53,interval:0.156,scale:6.5412},{type:'zomg',count:39,interval:0.144,scale:6.8653},{type:'ddt',count:31,interval:0.132,scale:7.1895},{type:'bad',count:26,interval:0.12,scale:7.5136}]
  },
  468: {
    label: 'Round 468 — standard defense',
    difficulty: 5.9035,
    speed: 1.7328,
    density: 160,
    roundCash: 404.2,
    special: null,
    groups: [{type:'ceramic',count:160,interval:0.18,scale:5.9035},{type:'moab',count:80,interval:0.168,scale:6.2282},{type:'bfb',count:53,interval:0.156,scale:6.5529},{type:'zomg',count:40,interval:0.144,scale:6.8776},{type:'ddt',count:32,interval:0.132,scale:7.2023},{type:'bad',count:26,interval:0.12,scale:7.527}]
  },
  469: {
    label: 'Round 469 — standard defense',
    difficulty: 5.9140,
    speed: 1.7344,
    density: 160,
    roundCash: 404.9,
    special: null,
    groups: [{type:'ceramic',count:160,interval:0.18,scale:5.914},{type:'moab',count:80,interval:0.168,scale:6.2393},{type:'bfb',count:53,interval:0.156,scale:6.5645},{type:'zomg',count:40,interval:0.144,scale:6.8898},{type:'ddt',count:32,interval:0.132,scale:7.2151},{type:'bad',count:26,interval:0.12,scale:7.5403}]
  },
  470: {
    label: 'Round 470 — pressure check',
    difficulty: 5.9245,
    speed: 1.7360,
    density: 160,
    roundCash: 405.5,
    special: null,
    groups: [{type:'ceramic',count:160,interval:0.18,scale:5.9245},{type:'moab',count:80,interval:0.168,scale:6.2503},{type:'bfb',count:53,interval:0.156,scale:6.5762},{type:'zomg',count:40,interval:0.144,scale:6.902},{type:'ddt',count:32,interval:0.132,scale:7.2279},{type:'bad',count:26,interval:0.12,scale:7.5537}]
  },
  471: {
    label: 'Round 471 — standard defense',
    difficulty: 5.9350,
    speed: 1.7376,
    density: 161,
    roundCash: 406.2,
    special: null,
    groups: [{type:'ceramic',count:161,interval:0.18,scale:5.935},{type:'moab',count:80,interval:0.168,scale:6.2614},{type:'bfb',count:53,interval:0.156,scale:6.5879},{type:'zomg',count:40,interval:0.144,scale:6.9143},{type:'ddt',count:32,interval:0.132,scale:7.2407},{type:'bad',count:26,interval:0.12,scale:7.5671}]
  },
  472: {
    label: 'Round 472 — standard defense',
    difficulty: 5.9455,
    speed: 1.7392,
    density: 161,
    roundCash: 406.8,
    special: null,
    groups: [{type:'ceramic',count:161,interval:0.18,scale:5.9455},{type:'moab',count:80,interval:0.168,scale:6.2725},{type:'bfb',count:53,interval:0.156,scale:6.5995},{type:'zomg',count:40,interval:0.144,scale:6.9265},{type:'ddt',count:32,interval:0.132,scale:7.2535},{type:'bad',count:26,interval:0.12,scale:7.5805}]
  },
  473: {
    label: 'Round 473 — standard defense',
    difficulty: 5.9560,
    speed: 1.7408,
    density: 161,
    roundCash: 407.4,
    special: null,
    groups: [{type:'ceramic',count:161,interval:0.18,scale:5.956},{type:'moab',count:80,interval:0.168,scale:6.2836},{type:'bfb',count:53,interval:0.156,scale:6.6112},{type:'zomg',count:40,interval:0.144,scale:6.9387},{type:'ddt',count:32,interval:0.132,scale:7.2663},{type:'bad',count:26,interval:0.12,scale:7.5939}]
  },
  474: {
    label: 'Round 474 — standard defense',
    difficulty: 5.9665,
    speed: 1.7424,
    density: 162,
    roundCash: 408.1,
    special: null,
    groups: [{type:'ceramic',count:162,interval:0.18,scale:5.9665},{type:'moab',count:81,interval:0.168,scale:6.2947},{type:'bfb',count:54,interval:0.156,scale:6.6228},{type:'zomg',count:40,interval:0.144,scale:6.951},{type:'ddt',count:32,interval:0.132,scale:7.2791},{type:'bad',count:27,interval:0.12,scale:7.6073}]
  },
  475: {
    label: 'Round 475 — standard defense',
    difficulty: 5.9770,
    speed: 1.7440,
    density: 162,
    roundCash: 408.8,
    special: null,
    groups: [{type:'ceramic',count:162,interval:0.18,scale:5.977},{type:'moab',count:81,interval:0.168,scale:6.3057},{type:'bfb',count:54,interval:0.156,scale:6.6345},{type:'zomg',count:40,interval:0.144,scale:6.9632},{type:'ddt',count:32,interval:0.132,scale:7.2919},{type:'bad',count:27,interval:0.12,scale:7.6207}]
  },
  476: {
    label: 'Round 476 — standard defense',
    difficulty: 5.9875,
    speed: 1.7456,
    density: 162,
    roundCash: 409.4,
    special: null,
    groups: [{type:'ceramic',count:162,interval:0.18,scale:5.9875},{type:'moab',count:81,interval:0.168,scale:6.3168},{type:'bfb',count:54,interval:0.156,scale:6.6461},{type:'zomg',count:40,interval:0.144,scale:6.9754},{type:'ddt',count:32,interval:0.132,scale:7.3047},{type:'bad',count:27,interval:0.12,scale:7.6341}]
  },
  477: {
    label: 'Round 477 — standard defense',
    difficulty: 5.9980,
    speed: 1.7472,
    density: 163,
    roundCash: 410.1,
    special: null,
    groups: [{type:'ceramic',count:163,interval:0.18,scale:5.998},{type:'moab',count:81,interval:0.168,scale:6.3279},{type:'bfb',count:54,interval:0.156,scale:6.6578},{type:'zomg',count:40,interval:0.144,scale:6.9877},{type:'ddt',count:32,interval:0.132,scale:7.3176},{type:'bad',count:27,interval:0.12,scale:7.6475}]
  },
  478: {
    label: 'Round 478 — standard defense',
    difficulty: 6.0085,
    speed: 1.7488,
    density: 163,
    roundCash: 410.7,
    special: null,
    groups: [{type:'ceramic',count:163,interval:0.18,scale:6.0085},{type:'moab',count:81,interval:0.168,scale:6.339},{type:'bfb',count:54,interval:0.156,scale:6.6694},{type:'zomg',count:40,interval:0.144,scale:6.9999},{type:'ddt',count:32,interval:0.132,scale:7.3304},{type:'bad',count:27,interval:0.12,scale:7.6608}]
  },
  479: {
    label: 'Round 479 — standard defense',
    difficulty: 6.0190,
    speed: 1.7504,
    density: 163,
    roundCash: 411.4,
    special: null,
    groups: [{type:'ceramic',count:163,interval:0.18,scale:6.019},{type:'moab',count:81,interval:0.168,scale:6.35},{type:'bfb',count:54,interval:0.156,scale:6.6811},{type:'zomg',count:40,interval:0.144,scale:7.0121},{type:'ddt',count:32,interval:0.132,scale:7.3432},{type:'bad',count:27,interval:0.12,scale:7.6742}]
  },
  480: {
    label: 'Round 480 — pressure check',
    difficulty: 6.0295,
    speed: 1.7520,
    density: 164,
    roundCash: 412.0,
    special: null,
    groups: [{type:'ceramic',count:164,interval:0.18,scale:6.0295},{type:'moab',count:82,interval:0.168,scale:6.3611},{type:'bfb',count:54,interval:0.156,scale:6.6927},{type:'zomg',count:41,interval:0.144,scale:7.0244},{type:'ddt',count:32,interval:0.132,scale:7.356},{type:'bad',count:27,interval:0.12,scale:7.6876}]
  },
  481: {
    label: 'Round 481 — standard defense',
    difficulty: 6.0400,
    speed: 1.7536,
    density: 164,
    roundCash: 412.7,
    special: null,
    groups: [{type:'ceramic',count:164,interval:0.18,scale:6.04},{type:'moab',count:82,interval:0.168,scale:6.3722},{type:'bfb',count:54,interval:0.156,scale:6.7044},{type:'zomg',count:41,interval:0.144,scale:7.0366},{type:'ddt',count:32,interval:0.132,scale:7.3688},{type:'bad',count:27,interval:0.12,scale:7.701}]
  },
  482: {
    label: 'Round 482 — standard defense',
    difficulty: 6.0505,
    speed: 1.7552,
    density: 164,
    roundCash: 413.3,
    special: null,
    groups: [{type:'ceramic',count:164,interval:0.18,scale:6.0505},{type:'moab',count:82,interval:0.168,scale:6.3833},{type:'bfb',count:54,interval:0.156,scale:6.7161},{type:'zomg',count:41,interval:0.144,scale:7.0488},{type:'ddt',count:32,interval:0.132,scale:7.3816},{type:'bad',count:27,interval:0.12,scale:7.7144}]
  },
  483: {
    label: 'Round 483 — standard defense',
    difficulty: 6.0610,
    speed: 1.7568,
    density: 165,
    roundCash: 413.9,
    special: null,
    groups: [{type:'ceramic',count:165,interval:0.18,scale:6.061},{type:'moab',count:82,interval:0.168,scale:6.3944},{type:'bfb',count:55,interval:0.156,scale:6.7277},{type:'zomg',count:41,interval:0.144,scale:7.0611},{type:'ddt',count:33,interval:0.132,scale:7.3944},{type:'bad',count:27,interval:0.12,scale:7.7278}]
  },
  484: {
    label: 'Round 484 — standard defense',
    difficulty: 6.0715,
    speed: 1.7584,
    density: 165,
    roundCash: 414.6,
    special: null,
    groups: [{type:'ceramic',count:165,interval:0.18,scale:6.0715},{type:'moab',count:82,interval:0.168,scale:6.4054},{type:'bfb',count:55,interval:0.156,scale:6.7394},{type:'zomg',count:41,interval:0.144,scale:7.0733},{type:'ddt',count:33,interval:0.132,scale:7.4072},{type:'bad',count:27,interval:0.12,scale:7.7412}]
  },
  485: {
    label: 'Round 485 — standard defense',
    difficulty: 6.0820,
    speed: 1.7600,
    density: 165,
    roundCash: 415.3,
    special: null,
    groups: [{type:'ceramic',count:165,interval:0.18,scale:6.082},{type:'moab',count:82,interval:0.168,scale:6.4165},{type:'bfb',count:55,interval:0.156,scale:6.751},{type:'zomg',count:41,interval:0.144,scale:7.0855},{type:'ddt',count:33,interval:0.132,scale:7.42},{type:'bad',count:27,interval:0.12,scale:7.7545}]
  },
  486: {
    label: 'Round 486 — standard defense',
    difficulty: 6.0925,
    speed: 1.7616,
    density: 166,
    roundCash: 415.9,
    special: null,
    groups: [{type:'ceramic',count:166,interval:0.18,scale:6.0925},{type:'moab',count:83,interval:0.168,scale:6.4276},{type:'bfb',count:55,interval:0.156,scale:6.7627},{type:'zomg',count:41,interval:0.144,scale:7.0978},{type:'ddt',count:33,interval:0.132,scale:7.4329},{type:'bad',count:27,interval:0.12,scale:7.7679}]
  },
  487: {
    label: 'Round 487 — standard defense',
    difficulty: 6.1030,
    speed: 1.7632,
    density: 166,
    roundCash: 416.6,
    special: null,
    groups: [{type:'ceramic',count:166,interval:0.18,scale:6.103},{type:'moab',count:83,interval:0.168,scale:6.4387},{type:'bfb',count:55,interval:0.156,scale:6.7743},{type:'zomg',count:41,interval:0.144,scale:7.11},{type:'ddt',count:33,interval:0.132,scale:7.4457},{type:'bad',count:27,interval:0.12,scale:7.7813}]
  },
  488: {
    label: 'Round 488 — standard defense',
    difficulty: 6.1135,
    speed: 1.7648,
    density: 166,
    roundCash: 417.2,
    special: null,
    groups: [{type:'ceramic',count:166,interval:0.18,scale:6.1135},{type:'moab',count:83,interval:0.168,scale:6.4497},{type:'bfb',count:55,interval:0.156,scale:6.786},{type:'zomg',count:41,interval:0.144,scale:7.1222},{type:'ddt',count:33,interval:0.132,scale:7.4585},{type:'bad',count:27,interval:0.12,scale:7.7947}]
  },
  489: {
    label: 'Round 489 — standard defense',
    difficulty: 6.1240,
    speed: 1.7664,
    density: 167,
    roundCash: 417.9,
    special: null,
    groups: [{type:'ceramic',count:167,interval:0.18,scale:6.124},{type:'moab',count:83,interval:0.168,scale:6.4608},{type:'bfb',count:55,interval:0.156,scale:6.7976},{type:'zomg',count:41,interval:0.144,scale:7.1345},{type:'ddt',count:33,interval:0.132,scale:7.4713},{type:'bad',count:27,interval:0.12,scale:7.8081}]
  },
  490: {
    label: 'Round 490 — pressure check',
    difficulty: 6.1345,
    speed: 1.7680,
    density: 167,
    roundCash: 418.5,
    special: null,
    groups: [{type:'ceramic',count:167,interval:0.18,scale:6.1345},{type:'moab',count:83,interval:0.168,scale:6.4719},{type:'bfb',count:55,interval:0.156,scale:6.8093},{type:'zomg',count:41,interval:0.144,scale:7.1467},{type:'ddt',count:33,interval:0.132,scale:7.4841},{type:'bad',count:27,interval:0.12,scale:7.8215}]
  },
  491: {
    label: 'Round 491 — standard defense',
    difficulty: 6.1450,
    speed: 1.7696,
    density: 167,
    roundCash: 419.2,
    special: null,
    groups: [{type:'ceramic',count:167,interval:0.18,scale:6.145},{type:'moab',count:83,interval:0.168,scale:6.483},{type:'bfb',count:55,interval:0.156,scale:6.8209},{type:'zomg',count:41,interval:0.144,scale:7.1589},{type:'ddt',count:33,interval:0.132,scale:7.4969},{type:'bad',count:27,interval:0.12,scale:7.8349}]
  },
  492: {
    label: 'Round 492 — standard defense',
    difficulty: 6.1555,
    speed: 1.7712,
    density: 168,
    roundCash: 419.8,
    special: null,
    groups: [{type:'ceramic',count:168,interval:0.18,scale:6.1555},{type:'moab',count:84,interval:0.168,scale:6.4941},{type:'bfb',count:56,interval:0.156,scale:6.8326},{type:'zomg',count:42,interval:0.144,scale:7.1712},{type:'ddt',count:33,interval:0.132,scale:7.5097},{type:'bad',count:28,interval:0.12,scale:7.8483}]
  },
  493: {
    label: 'Round 493 — standard defense',
    difficulty: 6.1660,
    speed: 1.7728,
    density: 168,
    roundCash: 420.4,
    special: null,
    groups: [{type:'ceramic',count:168,interval:0.18,scale:6.166},{type:'moab',count:84,interval:0.168,scale:6.5051},{type:'bfb',count:56,interval:0.156,scale:6.8443},{type:'zomg',count:42,interval:0.144,scale:7.1834},{type:'ddt',count:33,interval:0.132,scale:7.5225},{type:'bad',count:28,interval:0.12,scale:7.8617}]
  },
  494: {
    label: 'Round 494 — standard defense',
    difficulty: 6.1765,
    speed: 1.7744,
    density: 168,
    roundCash: 421.1,
    special: null,
    groups: [{type:'ceramic',count:168,interval:0.18,scale:6.1765},{type:'moab',count:84,interval:0.168,scale:6.5162},{type:'bfb',count:56,interval:0.156,scale:6.8559},{type:'zomg',count:42,interval:0.144,scale:7.1956},{type:'ddt',count:33,interval:0.132,scale:7.5353},{type:'bad',count:28,interval:0.12,scale:7.875}]
  },
  495: {
    label: 'Round 495 — standard defense',
    difficulty: 6.1870,
    speed: 1.7760,
    density: 169,
    roundCash: 421.8,
    special: null,
    groups: [{type:'ceramic',count:169,interval:0.18,scale:6.187},{type:'moab',count:84,interval:0.168,scale:6.5273},{type:'bfb',count:56,interval:0.156,scale:6.8676},{type:'zomg',count:42,interval:0.144,scale:7.2079},{type:'ddt',count:33,interval:0.132,scale:7.5481},{type:'bad',count:28,interval:0.12,scale:7.8884}]
  },
  496: {
    label: 'Round 496 — standard defense',
    difficulty: 6.1975,
    speed: 1.7776,
    density: 169,
    roundCash: 422.4,
    special: null,
    groups: [{type:'ceramic',count:169,interval:0.18,scale:6.1975},{type:'moab',count:84,interval:0.168,scale:6.5384},{type:'bfb',count:56,interval:0.156,scale:6.8792},{type:'zomg',count:42,interval:0.144,scale:7.2201},{type:'ddt',count:33,interval:0.132,scale:7.5609},{type:'bad',count:28,interval:0.12,scale:7.9018}]
  },
  497: {
    label: 'Round 497 — standard defense',
    difficulty: 6.2080,
    speed: 1.7792,
    density: 169,
    roundCash: 423.1,
    special: null,
    groups: [{type:'ceramic',count:169,interval:0.18,scale:6.208},{type:'moab',count:84,interval:0.168,scale:6.5494},{type:'bfb',count:56,interval:0.156,scale:6.8909},{type:'zomg',count:42,interval:0.144,scale:7.2323},{type:'ddt',count:33,interval:0.132,scale:7.5738},{type:'bad',count:28,interval:0.12,scale:7.9152}]
  },
  498: {
    label: 'Round 498 — standard defense',
    difficulty: 6.2185,
    speed: 1.7808,
    density: 170,
    roundCash: 423.7,
    special: null,
    groups: [{type:'ceramic',count:170,interval:0.18,scale:6.2185},{type:'moab',count:85,interval:0.168,scale:6.5605},{type:'bfb',count:56,interval:0.156,scale:6.9025},{type:'zomg',count:42,interval:0.144,scale:7.2446},{type:'ddt',count:34,interval:0.132,scale:7.5866},{type:'bad',count:28,interval:0.12,scale:7.9286}]
  },
  499: {
    label: 'Round 499 — standard defense',
    difficulty: 6.2290,
    speed: 1.7824,
    density: 170,
    roundCash: 424.4,
    special: null,
    groups: [{type:'ceramic',count:170,interval:0.18,scale:6.229},{type:'moab',count:85,interval:0.168,scale:6.5716},{type:'bfb',count:56,interval:0.156,scale:6.9142},{type:'zomg',count:42,interval:0.144,scale:7.2568},{type:'ddt',count:34,interval:0.132,scale:7.5994},{type:'bad',count:28,interval:0.12,scale:7.942}]
  },
  500: {
    label: 'Endurance milestone',
    difficulty: 6.2395,
    speed: 1.7840,
    density: 171,
    roundCash: 425.0,
    special: 'Endurance milestone',
    groups: [{type:'ceramic',count:171,interval:0.18,scale:6.2395},{type:'moab',count:85,interval:0.168,scale:6.5827},{type:'bfb',count:57,interval:0.156,scale:6.9258},{type:'zomg',count:42,interval:0.144,scale:7.269},{type:'ddt',count:34,interval:0.132,scale:7.6122},{type:'bad',count:28,interval:0.12,scale:7.9554}]
  },
};
