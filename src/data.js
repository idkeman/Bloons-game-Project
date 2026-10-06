export const DIFFICULTIES={
  easy:{id:'easy',name:'Easy',cashMult:1,lifeMult:1.5,bloonSpeed:.88,bloonHp:.86,rewardMult:1},
  normal:{id:'normal',name:'Normal',cashMult:1,lifeMult:1,bloonSpeed:1,bloonHp:1,rewardMult:1},
  hard:{id:'hard',name:'Hard',cashMult:.82,lifeMult:.75,bloonSpeed:1.16,bloonHp:1.18,rewardMult:1.06},
  extreme:{id:'extreme',name:'Extreme',cashMult:.7,lifeMult:.5,bloonSpeed:1.34,bloonHp:1.42,rewardMult:1.12},
  impossible:{id:'impossible',name:'Impossible',cashMult:.58,lifeMult:.35,bloonSpeed:1.55,bloonHp:1.82,rewardMult:1.22}
};
export const MODES={
  standard:{id:'standard',name:'Standard',description:'Classic 1–100 rounds, then freeplay.',startCash:650,startLives:100,roundCap:100},
  deflation:{id:'deflation',name:'Deflation',description:'No end-of-round income. Starts with a large bank.',startCash:20000,startLives:1,roundCap:100},
  halfCash:{id:'halfCash',name:'Lean Economy',description:'Half cash earned from most sources.',startCash:650,startLives:100,roundCap:100},
  freeplay:{id:'freeplay',name:'Freeplay',description:'Start deep into freeplay.',startCash:7000,startLives:100,roundCap:1000}
};

const HERO_LEVELS=xp=>Array.from({length:12},(_,i)=>({xp:i===0?0:Math.round(70*Math.pow(1.42,i-1)),name:i===0?'Rookie':`Level ${i+1}`,damage:Math.max(1,Math.round(3+i*2)),pierce:5+i*2,attackRate:Math.max(.16,.72-i*.047),range:125+i*7,projectileCount:Math.min(8,2+Math.floor(i/2)),speed:560+i*28}));
export const HEROES={
  ember:{id:'ember',name:'Ember',icon:'🔥',cost:850,color:'#ff9b62',description:'A fire hero with scaling damage and area abilities.',base:{range:125,attackRate:.68,damage:2,pierce:6,speed:560,projectileCount:2},levels:HERO_LEVELS(),abilities:[{unlock:3,name:'Scorch Ring',cooldown:35,description:'Burns and slows bloons in a wide ring.'},{unlock:7,name:'Meteor',cooldown:55,description:'Drops a powerful area meteor.'},{unlock:11,name:'Supernova',cooldown:80,description:'Deals a screen-wide burst.'}]},
  ranger:{id:'ranger',name:'Ranger',icon:'🏹',cost:720,color:'#74d68a',description:'Long-range precision specialist.',base:{range:145,attackRate:.82,damage:4,pierce:5,speed:820,projectileCount:1},levels:HERO_LEVELS(),abilities:[{unlock:4,name:'Marked Shot',cooldown:38,description:'Forces strong targeting globally for 12 seconds.'},{unlock:9,name:'Volley',cooldown:52,description:'Fires a multi-angle arrow storm.'}]},
  engineer:{id:'engineer',name:'Engineer',icon:'🛠️',cost:600,color:'#f1cf63',description:'Utility hero who can overclock allies.',base:{range:115,attackRate:.9,damage:2,pierce:3,speed:500,projectileCount:1},levels:HERO_LEVELS(),abilities:[{unlock:3,name:'Overclock',cooldown:44,description:'Supercharges the nearest tower.'},{unlock:8,name:'Drone Swarm',cooldown:60,description:'Deploys temporary combat drones.'}]},
  nova:{id:'nova',name:'Nova',icon:'⚡',cost:900,color:'#ffdc6e',description:'Chain-lightning specialist.',base:{range:140,attackRate:.62,damage:3,pierce:5,speed:760,projectileCount:3},levels:HERO_LEVELS(),abilities:[{unlock:3,name:'Static Field',cooldown:35,description:'Slows enemies in a large field.'},{unlock:7,name:'Chain Lightning',cooldown:55,description:'Chains heavy damage through targets.'},{unlock:11,name:'Thunderfall',cooldown:85,description:'Strikes multiple locations.'}]},
  moss:{id:'moss',name:'Moss',icon:'🌱',cost:780,color:'#7de5a5',description:'Nature hero with control and economy.',base:{range:125,attackRate:.9,damage:3,pierce:6,speed:520,projectileCount:2},levels:HERO_LEVELS(),abilities:[{unlock:4,name:'Bloom',cooldown:42,description:'Generates cash and restores lives.'},{unlock:8,name:'Root Wall',cooldown:58,description:'Stops most light and medium bloons.'}]},
  quartz:{id:'quartz',name:'Quartz',icon:'💎',cost:1000,color:'#bde7ff',description:'Armor-breaking precision hero.',base:{range:165,attackRate:.92,damage:5,pierce:4,speed:920,projectileCount:1},levels:HERO_LEVELS(),abilities:[{unlock:4,name:'Refraction',cooldown:45,description:'Doubles nearby projectile count.'},{unlock:9,name:'Prism Break',cooldown:62,description:'Cracks armor on heavy bloons.'}]}
};

export const MAPS={
  meadow:{id:'meadow',name:'Green Meadow',description:'A forgiving two-loop grassland.',pathWidth:46,scenery:'meadow',paths:[[{x:-40,y:210},{x:130,y:210},{x:230,y:120},{x:420,y:120},{x:560,y:210},{x:710,y:210},{x:850,y:120},{x:1080,y:120},{x:1220,y:210},{x:1290,y:210}],[{x:-40,y:520},{x:160,y:520},{x:270,y:600},{x:430,y:600},{x:570,y:500},{x:720,y:500},{x:860,y:600},{x:1080,y:600},{x:1220,y:500},{x:1290,y:500}]],buildZones:[{x:30,y:20,w:260,h:180},{x:330,y:20,w:180,h:80},{x:600,y:20,w:220,h:140},{x:930,y:35,w:260,h:120},{x:50,y:310,w:220,h:160},{x:350,y:320,w:190,h:140},{x:610,y:310,w:220,h:140},{x:920,y:330,w:250,h:150},{x:230,y:690,w:240,h:130},{x:560,y:690,w:230,h:130},{x:900,y:690,w:230,h:130}]},
  canyon:{id:'canyon',name:'Ember Canyon',description:'Tight corners and long sightlines.',pathWidth:50,scenery:'canyon',paths:[[{x:-40,y:400},{x:170,y:400},{x:220,y:230},{x:390,y:230},{x:450,y:420},{x:640,y:420},{x:700,y:250},{x:900,y:250},{x:960,y:420},{x:1290,y:420}]],buildZones:[{x:10,y:40,w:210,h:200},{x:280,y:45,w:180,h:120},{x:520,y:45,w:210,h:180},{x:800,y:40,w:230,h:130},{x:1080,y:60,w:170,h:240},{x:20,y:540,w:190,h:210},{x:300,y:530,w:180,h:180},{x:545,y:560,w:200,h:170},{x:820,y:500,w:210,h:250},{x:1090,y:530,w:170,h:200}]},
  harbor:{id:'harbor',name:'Moonlit Harbor',description:'Curved lanes around central water.',pathWidth:44,scenery:'harbor',paths:[[{x:-40,y:290},{x:150,y:290},{x:240,y:170},{x:430,y:170},{x:520,y:290},{x:680,y:290},{x:760,y:410},{x:980,y:410},{x:1080,y:290},{x:1290,y:290}]],buildZones:[{x:20,y:20,w:180,h:190},{x:280,y:15,w:180,h:105},{x:560,y:25,w:180,h:165},{x:830,y:20,w:180,h:190},{x:1080,y:35,w:180,h:170},{x:25,y:480,w:190,h:220},{x:290,y:500,w:180,h:190},{x:575,y:520,w:180,h:170},{x:850,y:520,w:190,h:180},{x:1090,y:470,w:170,h:230}]},
  highlands:{id:'highlands',name:'Sky Highlands',description:'A long elevated circuit with twin lanes.',pathWidth:46,scenery:'highlands',paths:[[{x:-40,y:300},{x:170,y:300},{x:260,y:130},{x:470,y:130},{x:560,y:300},{x:750,y:300},{x:850,y:130},{x:1050,y:130},{x:1160,y:300},{x:1290,y:300}],[{x:-40,y:650},{x:200,y:650},{x:310,y:520},{x:500,y:520},{x:590,y:650},{x:790,y:650},{x:890,y:520},{x:1060,y:520},{x:1160,y:650},{x:1290,y:650}]],buildZones:[{x:10,y:30,w:180,h:190},{x:290,y:20,w:190,h:90},{x:620,y:25,w:190,h:180},{x:930,y:25,w:250,h:95},{x:30,y:400,w:190,h:100},{x:300,y:390,w:190,h:100},{x:620,y:400,w:190,h:100},{x:930,y:390,w:230,h:110},{x:10,y:720,w:200,h:100},{x:350,y:720,w:220,h:100},{x:780,y:720,w:230,h:100}]}
};

const U=(name,desc,cost,effects={})=>({name,desc,cost,effects});
const PATH_NAMES=[['Sharpened','Refined','Advanced','Master','Ultimate'],['Twin','Rapid','Focused','Overdrive','Hyper'],['Long','Precision','Burst','Storm','Apocalypse']];
const ICONS=['➤','🦃','💣','🎯','⚓','✈️','🔮','🌿','⚗️','🏠','🌻','✹','🟣','✦','❄️','🍌','🌟','🥷','⛵','🚁','💥','🐾','🌊','🔫'];
const ROSTER=[
  ['dart','Dartling','primary',240,'#6fc4ff',120,.85,1,2],['boomer','Boomer','primary',325,'#ff9c69',115,.95,2,4],['bomb','Bombardier','military',525,'#d3d7de',110,1.2,2,18],['sniper','Sharpshooter','military',600,'#8bd27f',9999,1.5,4,1],
  ['sub','Tide Sub','military',400,'#62b4e8',115,1.1,2,3],['ace','Sky Ace','military',700,'#c8d2e8',180,.9,2,5],['wizard','Arcanist','magic',580,'#bc8cff',125,.95,3,4],['druid','Thorn Druid','magic',470,'#64db8f',105,1.15,2,7],
  ['alchemist','Chemist','magic',525,'#e49bff',105,1,2,10],['village','Command Hub','support',700,'#f0c66b',100,999,0,0,true],['farm','Sun Farm','economy',850,'#f3d75d',70,999,0,0,true],['spike','Spike Foundry','support',320,'#bfcad1',75,2,4,24],
  ['glue','Gum Caster','primary',300,'#da7cff',112,.9,0,4],['tack','Tack Sprayer','primary',280,'#ff6c6c',85,1.05,1,3],['ice','Frost Caster','magic',450,'#83e5ff',90,1.2,1,8],['banana','Banana Lab','economy',750,'#f5de6a',65,999,0,0,true],
  ['prism','Prism Adept','magic',950,'#f3a7ff',130,.7,6,6],['shadow','Shadow Ninja','magic',520,'#747bff',125,.82,3,3],['corsair','Corsair','military',620,'#71c6d9',150,1,2,4],['rotor','Rotor Ace','military',760,'#9fe0c8',190,.78,3,5],
  ['mortar','Siege Mortar','military',650,'#d8b28f',250,1.65,8,18],['beast','Beast Keeper','magic',800,'#77e39f',125,1.1,4,4],['tide','Tide Singer','magic',540,'#70e8ff',120,1,2,7],['outlaw','Outlaw','military',410,'#e7bf79',125,.65,2,2]
];
export const TOWERS={};
for(const [id,name,category,cost,color,range,attackRate,damage,pierce,isSupport] of ROSTER){
  const combat=!isSupport;
  const paths=PATH_NAMES.map((path,p)=>path.map((suffix,tier)=>{
    const scale=tier+1;
    const effects={damage:combat?Math.max(1,Math.round(scale*(p===1?2:1))):0,pierce:combat?scale:0};
    if(tier===0)effects.range=p===2?18:0;
    if(tier===1)effects.attackRate=attackRate>=50?attackRate:Math.max(.2,attackRate*(1-.08*(p+1)));
    if(tier>=2)effects.count=Math.min(8,1+scale+p);
    if(tier===3)effects.burst=16+12*p+scale*5;
    if(tier===4){effects.damage+=20+10*p;effects.pierce+=12;effects.bossBonus=30+20*p;effects.moabBonus=15+10*p;}
    if(category==='economy'||category==='support'){effects.income=(15+20*scale)*(p+1);effects.incomeRate=Math.max(8,32-scale*4);}
    if(id==='village'||id==='spike'||id==='banana')effects.buffDamage=p===2?Math.max(1,scale):0;
    if(p===1&&tier>=2)effects.crit=.05*scale;
    if(p===2&&tier>=1)effects.slow=Math.max(.12,.12*scale);
    if(p===0&&tier>=2)effects.burn=scale*2;
    return U(`${suffix} ${p===0?'Path':p===1?'Core':'System'}`,`${name} tier ${scale} upgrade.`,Math.round(cost*(.52+scale*.42)*(1+p*.08)),effects);
  }));
  TOWERS[id]={id,name,glyph:ICONS[Object.keys(TOWERS).length],category,cost,color,range,attackRate,damage,pierce,projectileSpeed:category==='military'?720:540,projectileRadius:category==='support'?1:5,paths,isSupport:!!isSupport,isSpike:id==='spike'};
}

export const BLOONS={
  red:{id:'red',name:'Red',hp:1,speed:62,rbe:1,damage:1,color:'#ff5264',radius:10,children:[]},blue:{id:'blue',name:'Blue',hp:1,speed:74,rbe:2,damage:1,color:'#4d90ff',radius:10,children:['red']},green:{id:'green',name:'Green',hp:1,speed:86,rbe:3,damage:1,color:'#62e06e',radius:11,children:['blue']},yellow:{id:'yellow',name:'Yellow',hp:1,speed:100,rbe:4,damage:1,color:'#f5d953',radius:11,children:['green']},pink:{id:'pink',name:'Pink',hp:1,speed:118,rbe:5,damage:1,color:'#ff72be',radius:11,children:['yellow']},black:{id:'black',name:'Black',hp:1,speed:76,rbe:11,damage:1,color:'#30353b',radius:12,immune:'explosion',children:['pink','pink']},white:{id:'white',name:'White',hp:1,speed:84,rbe:12,damage:1,color:'#f1f1f1',radius:12,immune:'freeze',children:['pink','pink']},purple:{id:'purple',name:'Purple',hp:1,speed:122,rbe:13,damage:1,color:'#984bff',radius:12,immune:'energy',children:['pink','pink']},lead:{id:'lead',name:'Lead',hp:2,speed:45,rbe:23,damage:1,color:'#7f8892',radius:14,armored:true,immune:'sharp',children:['black','black']},zebra:{id:'zebra',name:'Zebra',hp:1,speed:92,rbe:24,damage:1,color:'#e0e3e5',radius:13,children:['black','white']},rainbow:{id:'rainbow',name:'Rainbow',hp:2,speed:104,rbe:50,damage:1,color:'#ff8cfd',radius:15,children:['zebra','zebra']},ceramic:{id:'ceramic',name:'Ceramic',hp:10,speed:54,rbe:91,damage:1,color:'#d79b63',radius:17,armored:true,children:['rainbow','rainbow']},moab:{id:'moab',name:'Doom Blimp',hp:200,speed:28,rbe:390,damage:20,color:'#6e78a8',radius:27,boss:true,children:['ceramic','ceramic','ceramic','ceramic']},bfb:{id:'bfb',name:'Brute Blimp',hp:850,speed:22,rbe:1600,damage:25,color:'#9a4a67',radius:33,boss:true,children:['moab','moab','moab','moab']},zomg:{id:'zomg',name:'Obsidian Blimp',hp:4200,speed:15,rbe:5000,damage:75,color:'#373c4e',radius:42,boss:true,children:['bfb','bfb','bfb','bfb']},ddt:{id:'ddt',name:'Shadow Blimp',hp:600,speed:66,rbe:700,damage:2,color:'#252c32',radius:22,boss:true,stealth:true,armored:true,children:['ceramic','ceramic','ceramic']},bad:{id:'bad',name:'Titan Blimp',hp:22000,speed:10,rbe:20000,damage:120,color:'#2b252d',radius:54,boss:true,children:['zomg','zomg','bfb','bfb']},bloonBoss:{id:'bloonBoss',name:'Ruin Warden',hp:120000,speed:7,rbe:75000,damage:250,color:'#e2ad56',radius:65,boss:true,bossTier:1,children:['bad','bad']}
};
export const PARAGONS=Object.fromEntries(Object.keys(TOWERS).map((id,i)=>[id,{name:`${TOWERS[id].name} Ascendant`,cost:80000+i*3500,color:TOWERS[id].color,description:`Paragon form of the ${TOWERS[id].name}.`} ]));
export const ROUND_SPECIALS=Object.fromEntries([[10,'Accelerated Rush'],[20,'Lead Introduction'],[25,'Ceramic Surge'],[30,'First Doom Blimp'],[40,'Brute Blimp Break'],[50,'Obsidian Assault'],[60,'Double Doom'],[70,'Shadow Blitz'],[80,'Titan Preview'],[90,'Elite Blimp Gauntlet'],[100,'Ruin Warden']]);
