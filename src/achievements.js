const STORAGE_KEY='balloon-bastion-achievements-v1';

export const ACHIEVEMENTS = [
  {id:'first-placement',name:'First Defense',description:'Place your first tower.',points:1,test:s=>s.towersPlaced>=1},
  {id:'five-towers',name:'Fivefold Bastion',description:'Place five towers in one run.',points:1,test:s=>s.towersPlaced>=5},
  {id:'ten-towers',name:'Full Battery',description:'Place ten towers in one run.',points:2,test:s=>s.towersPlaced>=10},
  {id:'twenty-five-towers',name:'Grand Array',description:'Place twenty-five towers in one run.',points:3,test:s=>s.towersPlaced>=25},
  {id:'first-upgrade',name:'Improvement',description:'Purchase an upgrade.',points:1,test:s=>s.upgradesBought>=1},
  {id:'fifty-upgrades',name:'Specialist',description:'Purchase fifty upgrades in one run.',points:2,test:s=>s.upgradesBought>=50},
  {id:'t5',name:'Master Tier',description:'Reach any Tier 5 path.',points:3,test:s=>s.tier5Count>=1},
  {id:'three-t5',name:'Triptych',description:'Own three Tier 5 towers at once.',points:4,test:s=>s.tier5Count>=3},
  {id:'first-paragon',name:'Ascension',description:'Create your first Paragon.',points:8,test:s=>s.paragons>=1},
  {id:'three-paragons',name:'Ascendant Force',description:'Create three Paragons over your profile.',points:12,test:s=>s.paragons>=3},
  {id:'first-hero',name:'Leader',description:'Deploy a hero.',points:1,test:s=>s.heroPlaced>=1},
  {id:'hero-five',name:'Veteran Hero',description:'Reach hero level 5.',points:2,test:s=>s.maxHeroLevel>=5},
  {id:'hero-ten',name:'Legendary Hero',description:'Reach hero level 10.',points:5,test:s=>s.maxHeroLevel>=10},
  {id:'first-ability',name:'Battle Rhythm',description:'Activate an ability.',points:1,test:s=>s.abilitiesUsed>=1},
  {id:'ten-abilities',name:'Ability Specialist',description:'Activate ten abilities.',points:2,test:s=>s.abilitiesUsed>=10},
  {id:'first-boss',name:'Heavy Response',description:'Pop a boss-class enemy.',points:3,test:s=>s.bossesPopped>=1},
  {id:'five-bosses',name:'Boss Hunter',description:'Pop five boss-class enemies.',points:5,test:s=>s.bossesPopped>=5},
  {id:'hundred-rounds',name:'Century',description:'Reach round 100.',points:10,test:s=>s.bestRound>=100},
  {id:'two-hundred-rounds',name:'Endurance',description:'Reach round 200.',points:15,test:s=>s.bestRound>=200},
  {id:'five-hundred-rounds',name:'Long Haul',description:'Reach round 500.',points:25,test:s=>s.bestRound>=500},
  {id:'thousand-rounds',name:'Infinite Defense',description:'Reach round 1000.',points:40,test:s=>s.bestRound>=1000},
  {id:'thousand-pops',name:'Crowd Control',description:'Pop 1,000 bloon layers.',points:2,test:s=>s.totalPops>=1000},
  {id:'ten-thousand-pops',name:'Wave Breaker',description:'Pop 10,000 bloon layers.',points:4,test:s=>s.totalPops>=10000},
  {id:'hundred-thousand-pops',name:'Population Collapse',description:'Pop 100,000 bloon layers.',points:10,test:s=>s.totalPops>=100000},
  {id:'million-pops',name:'Million Layer Club',description:'Pop 1,000,000 bloon layers.',points:20,test:s=>s.totalPops>=1000000},
  {id:'ten-thousand-cash',name:'Healthy Bank',description:'Earn $10,000 in one run.',points:2,test:s=>s.totalCashEarned>=10000},
  {id:'hundred-thousand-cash',name:'Industrial Bank',description:'Earn $100,000 in one run.',points:5,test:s=>s.totalCashEarned>=100000},
  {id:'million-cash',name:'Economic Engine',description:'Earn $1,000,000 in one run.',points:15,test:s=>s.totalCashEarned>=1000000},
  {id:'no-lives-lost',name:'Perfect Start',description:'Complete round 20 without losing a life.',points:3,test:s=>s.bestNoLeakRound>=20},
  {id:'hard-clear',name:'Hard Counter',description:'Clear a 100-round run on Hard.',points:8,test:s=>s.hardClears>=1},
  {id:'extreme-clear',name:'Extreme Counter',description:'Clear a 100-round run on Extreme.',points:12,test:s=>s.extremeClears>=1},
  {id:'impossible-clear',name:'Impossible Counter',description:'Clear a 100-round run on Impossible.',points:20,test:s=>s.impossibleClears>=1},
  {id:'alternate-clear',name:'Pattern Reader',description:'Clear Alternate Pressure mode.',points:8,test:s=>s.alternateClears>=1},
  {id:'nosell-clear',name:'Commitment',description:'Clear No Resale mode.',points:10,test:s=>s.noSellClears>=1},
  {id:'double-clear',name:'Double Trouble',description:'Clear Double Rush mode.',points:10,test:s=>s.doubleRushClears>=1},
  {id:'one-life-clear',name:'No Margin',description:'Clear One Life mode.',points:15,test:s=>s.oneLifeClears>=1},
  {id:'boss-gauntlet-clear',name:'Gauntlet Runner',description:'Clear Boss Gauntlet mode.',points:15,test:s=>s.bossGauntletClears>=1},
  {id:'all-maps',name:'Cartographer',description:'Play every launch map.',points:6,test:s=>s.mapsPlayed>=10},
  {id:'every-tower',name:'Full Roster',description:'Place every tower type at least once across your profile.',points:8,test:s=>s.towerTypesUsed>=24},
  {id:'every-hero',name:'Council of Heroes',description:'Use every hero at least once.',points:8,test:s=>s.heroTypesUsed>=6},
  {id:'ten-regrows',name:'Persistent Threat',description:'Pop ten regrow layers.',points:3,test:s=>s.regrowPops>=10},
  {id:'ten-fortified',name:'Break the Armor',description:'Pop ten fortified layers.',points:3,test:s=>s.fortifiedPops>=10},
  {id:'ddt-hunter',name:'Shadow Hunter',description:'Pop 25 stealth heavy blimps.',points:5,test:s=>s.ddtPops>=25},
  {id:'titan-hunter',name:'Titan Hunter',description:'Pop ten Titan Blimps.',points:8,test:s=>s.badPops>=10},
  {id:'ruin-hunter',name:'Ruin Breaker',description:'Defeat the Ruin Warden.',points:15,test:s=>s.ruinKills>=1},
  {id:'mastery-one',name:'First Lesson',description:'Unlock a Mastery node.',points:2,test:s=>s.masteryUnlocked>=1},
  {id:'mastery-ten',name:'Deep Study',description:'Unlock ten Mastery nodes.',points:6,test:s=>s.masteryUnlocked>=10},
  {id:'mastery-all',name:'Complete Curriculum',description:'Unlock every Mastery node.',points:20,test:s=>s.masteryUnlocked>=24},
  {id:'three-path-choice',name:'Crosspath Tactics',description:'Own a 3-2-2 tower.',points:3,test:s=>s.crosspathCount>=1},
  {id:'five-two-two',name:'Committed Specialist',description:'Own a 5-2-2 tower.',points:4,test:s=>s.fiveTwoTwo>=1},
  {id:'paragon-degree-ten',name:'Ascendant Power',description:'Create a Degree 10+ Paragon.',points:8,test:s=>s.bestParagonDegree>=10},
  {id:'paragon-degree-fifty',name:'Ascendant Master',description:'Create a Degree 50+ Paragon.',points:18,test:s=>s.bestParagonDegree>=50},
  {id:'first-save',name:'Insurance',description:'Save a game.',points:1,test:s=>s.saves>=1},
  {id:'ten-saves',name:'Habitual Planner',description:'Save ten games.',points:2,test:s=>s.saves>=10},
  {id:'fast-round',name:'Rapid Fire',description:'Use fast-forward during a round.',points:1,test:s=>s.fastRounds>=1},
  {id:'pause-round',name:'Time Out',description:'Pause a running round.',points:1,test:s=>s.pauses>=1},
  {id:'sell-tower',name:'Reallocation',description:'Sell a tower.',points:1,test:s=>s.towersSold>=1},
  {id:'ten-sells',name:'Portfolio Manager',description:'Sell ten towers over your profile.',points:3,test:s=>s.towersSold>=10},
  {id:'one-life-round',name:'Critical Defense',description:'Finish a round at exactly one life.',points:3,test:s=>s.oneLifeRounds>=1},
  {id:'level-up',name:'Level Up',description:'Cause a hero to level up.',points:1,test:s=>s.heroLevelUps>=1},
  {id:'all-upgrade-paths',name:'Triple Route',description:'Reach Tier 3 on all three paths of eligible towers over your profile.',points:5,test:s=>s.allPathsUsed>=1}
];

export const ACHIEVEMENT_INDEX=Object.fromEntries(ACHIEVEMENTS.map(a=>[a.id,a]));

const DEFAULT_STATS={
  towersPlaced:0,towersSold:0,upgradesBought:0,tier5Count:0,
  paragons:0,bestParagonDegree:0,heroPlaced:0,maxHeroLevel:0,
  heroLevelUps:0,heroTypesUsed:0,towerTypesUsed:0,abilitiesUsed:0,
  bossesPopped:0,bestRound:0,bestNoLeakRound:0,totalPops:0,
  totalCashEarned:0,hardClears:0,extremeClears:0,impossibleClears:0,
  alternateClears:0,noSellClears:0,doubleRushClears:0,oneLifeClears:0,
  bossGauntletClears:0,mapsPlayed:0,regrowPops:0,fortifiedPops:0,
  ddtPops:0,badPops:0,ruinKills:0,masteryUnlocked:0,crosspathCount:0,
  fiveTwoTwo:0,saves:0,fastRounds:0,pauses:0,oneLifeRounds:0,allPathsUsed:0
};

export class AchievementProfile{
  constructor(raw=null){
    this.stats={...DEFAULT_STATS,...(raw?.stats||{})};
    this.unlocked=new Set(Array.isArray(raw?.unlocked)?raw.unlocked:[]);
    this.towerTypes=new Set(Array.isArray(raw?.towerTypes)?raw.towerTypes:[]);
    this.heroTypes=new Set(Array.isArray(raw?.heroTypes)?raw.heroTypes:[]);
    this.mapTypes=new Set(Array.isArray(raw?.mapTypes)?raw.mapTypes:[]);
  }

  recordTowerType(id){this.towerTypes.add(id);this.stats.towerTypesUsed=this.towerTypes.size;}
  recordHeroType(id){this.heroTypes.add(id);this.stats.heroTypesUsed=this.heroTypes.size;}
  recordMap(id){this.mapTypes.add(id);this.stats.mapsPlayed=this.mapTypes.size;}
  recordMastery(count){this.stats.masteryUnlocked=count;}

  evaluate(){
    const earned=[];
    for(const achievement of ACHIEVEMENTS){
      if(this.unlocked.has(achievement.id))continue;
      if(achievement.test(this.stats)){
        this.unlocked.add(achievement.id);
        earned.push(achievement);
      }
    }
    return earned;
  }

  serialize(){
    return {
      version:1,
      stats:this.stats,
      unlocked:[...this.unlocked],
      towerTypes:[...this.towerTypes],
      heroTypes:[...this.heroTypes],
      mapTypes:[...this.mapTypes]
    };
  }

  save(){
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(this.serialize()));}
    catch(error){console.warn('Achievement save failed',error);}
  }

  static load(){
    try{
      const raw=localStorage.getItem(STORAGE_KEY);
      return new AchievementProfile(raw?JSON.parse(raw):null);
    }catch(error){return new AchievementProfile();}
  }

  static clear(){
    localStorage.removeItem(STORAGE_KEY);
  }
}
