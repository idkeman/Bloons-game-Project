export const KNOWLEDGE_NODES = [
  {id:"steady-hands",name:"Steady Hands",category:"combat",cost:120,description:"Towers gain 2% projectile speed.",effect:{projectileSpeed:0.02},requires:[]},
  {id:"deep-focus",name:"Deep Focus",category:"combat",cost:220,description:"Towers gain 2% attack range.",effect:{range:0.02},requires:["steady-hands"]},
  {id:"sharp-edge",name:"Sharp Edge",category:"combat",cost:320,description:"Towers gain 3% damage.",effect:{damage:0.03},requires:["deep-focus"]},
  {id:"extra-punch",name:"Extra Punch",category:"combat",cost:450,description:"Towers gain 1 pierce.",effect:{pierce:1},requires:["sharp-edge"]},
  {id:"rapid-training",name:"Rapid Training",category:"combat",cost:650,description:"Tower attack cooldowns improve by 2%.",effect:{attackSpeed:0.98},requires:["extra-punch"]},

  {id:"starting-fund",name:"Starting Fund",category:"economy",cost:120,description:"Begin each run with 25 additional cash.",effect:{startCash:25},requires:[]},
  {id:"merchant-practice",name:"Merchant Practice",category:"economy",cost:220,description:"Round income improves by 3%.",effect:{incomeMultiplier:0.03},requires:["starting-fund"]},
  {id:"field-logistics",name:"Field Logistics",category:"economy",cost:350,description:"Tower purchase prices decrease by 2%.",effect:{towerDiscount:0.02},requires:["merchant-practice"]},
  {id:"salvage-rights",name:"Salvage Rights",category:"economy",cost:500,description:"Selling returns 2% more of tower value.",effect:{sellMultiplier:0.02},requires:["field-logistics"]},
  {id:"reserve-fund",name:"Reserve Fund",category:"economy",cost:800,description:"Round-end cash gains another 5%.",effect:{roundCash:0.05},requires:["salvage-rights"]},

  {id:"stronger-barricades",name:"Stronger Barricades",category:"defense",cost:140,description:"Begin each run with 5% more lives.",effect:{lives:0.05},requires:[]},
  {id:"reinforced-gates",name:"Reinforced Gates",category:"defense",cost:260,description:"Boss leaks deal 8% less life damage.",effect:{bossLeakReduction:0.08},requires:["stronger-barricades"]},
  {id:"emergency-rations",name:"Emergency Rations",category:"defense",cost:380,description:"A first leak each round is partially forgiven.",effect:{firstLeakShield:1},requires:["reinforced-gates"]},
  {id:"stubborn-core",name:"Stubborn Core",category:"defense",cost:600,description:"Lose 8% fewer lives from ordinary leaks.",effect:{leakReduction:0.08},requires:["emergency-rations"]},
  {id:"last-stand",name:"Last Stand",category:"defense",cost:950,description:"Gain a one-time survival buffer at low lives.",effect:{lastStand:0.04},requires:["stubborn-core"]},

  {id:"bigger-bag",name:"Bigger Bag",category:"utility",cost:100,description:"Selected tower panel displays more combat data.",effect:{panelDetail:1},requires:[]},
  {id:"route-memory",name:"Route Memory",category:"utility",cost:180,description:"Map previews show route difficulty hints.",effect:{mapHints:1},requires:["bigger-bag"]},
  {id:"quick-deploy",name:"Quick Deploy",category:"utility",cost:300,description:"Build-mode ghost becomes available immediately after selecting a tower.",effect:{quickBuild:1},requires:["route-memory"]},
  {id:"targeting-drill",name:"Targeting Drill",category:"utility",cost:420,description:"Target cycling begins with the last used priority.",effect:{rememberTarget:1},requires:["quick-deploy"]},
  {id:"save-tech",name:"Save Technology",category:"utility",cost:700,description:"Snapshots include an extra diagnostic checksum.",effect:{checksums:1},requires:["targeting-drill"]},

  {id:"hero-instinct",name:"Hero Instinct",category:"heroes",cost:160,description:"Heroes gain 5% more combat XP.",effect:{heroXp:0.05},requires:[]},
  {id:"hero-momentum",name:"Hero Momentum",category:"heroes",cost:280,description:"Heroes gain 2% attack range.",effect:{heroRange:0.02},requires:["hero-instinct"]},
  {id:"hero-training",name:"Hero Training",category:"heroes",cost:420,description:"Hero level milestones require 4% less XP.",effect:{heroXpReduction:0.04},requires:["hero-momentum"]},
  {id:"hero-command",name:"Hero Command",category:"heroes",cost:650,description:"Hero active abilities recharge 4% faster.",effect:{heroCooldown:0.96},requires:["hero-training"]},
  {id:"hero-legacy",name:"Hero Legacy",category:"heroes",cost:1000,description:"High-level heroes gain a 5% damage bonus.",effect:{heroDamage:0.05},requires:["hero-command"]},

  {id:"camo-study",name:"Camo Study",category:"knowledge",cost:180,description:"Detection upgrades affect a slightly larger support radius.",effect:{detectionRange:0.06},requires:[]},
  {id:"armor-study",name:"Armor Study",category:"knowledge",cost:280,description:"Armor-breaking attacks gain 3% damage.",effect:{armorDamage:0.03},requires:["camo-study"]},
  {id:"boss-study",name:"Boss Study",category:"knowledge",cost:420,description:"Boss attacks deal 5% more damage.",effect:{bossDamage:0.05},requires:["armor-study"]},
  {id:"freeplay-study",name:"Freeplay Study",category:"knowledge",cost:650,description:"Freeplay speed scaling is reduced by 2%.",effect:{freeplaySpeed:0.02},requires:["boss-study"]},
  {id:"ascension-study",name:"Ascension Study",category:"knowledge",cost:1100,description:"Paragon degree calculation gains a small bonus from extra cash.",effect:{paragonCash:0.04},requires:["freeplay-study"]}
];

export const KNOWLEDGE_CATEGORIES = [
  ["combat","Combat"],
  ["economy","Economy"],
  ["defense","Defense"],
  ["utility","Utility"],
  ["heroes","Heroes"],
  ["knowledge","Research"]
];

export function getKnowledgeNode(id) {
  return KNOWLEDGE_NODES.find(
    (node) => node.id === id
  ) || null;
}

export function canBuyKnowledge(state, nodeId) {
  const node = getKnowledgeNode(nodeId);

  if (!node || state.purchased.includes(nodeId)) {
    return false;
  }

  if (
    state.credits <
    node.cost
  ) {
    return false;
  }

  return node.requires.every(
    (requirement) =>
      state.purchased.includes(requirement)
  );
}

export function buyKnowledge(state, nodeId) {
  const node = getKnowledgeNode(nodeId);

  if (!canBuyKnowledge(state, nodeId)) {
    return false;
  }

  state.credits -= node.cost;
  state.purchased.push(nodeId);
  return true;
}

export function aggregateKnowledge(state) {
  const aggregate = {};

  for (const node of KNOWLEDGE_NODES) {
    if (!state.purchased.includes(node.id)) {
      continue;
    }

    for (const [key, value] of Object.entries(node.effect)) {
      if (
        key === "attackSpeed" ||
        key === "towerDiscount" ||
        key === "sellMultiplier"
      ) {
        aggregate[key] =
          (aggregate[key] || 0) + value;
      } else if (
        key === "range" ||
        key === "damage" ||
        key === "incomeMultiplier" ||
        key === "startCash" ||
        key === "lives"
      ) {
        aggregate[key] =
          (aggregate[key] || 0) + value;
      } else {
        aggregate[key] =
          (aggregate[key] || 0) + value;
      }
    }
  }

  return aggregate;
}