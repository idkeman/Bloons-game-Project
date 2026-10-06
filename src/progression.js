import { deepClone } from "./math.js";
import { KNOWLEDGE_NODES, buyKnowledge, aggregateKnowledge } from "./knowledge.js";

const DEFAULT_PROGRESS = {
  version: 2,
  rank: 1,
  experience: 0,
  frontierCredits: 5000,
  unlockedTowers: [],
  unlockedHeroes: [],
  achievements: [],
  mapStars: {},
  bestRounds: {},
  lifetimePops: 0,
  lifetimeDamage: 0,
  lifetimeCash: 0,
  settings: {
    difficulty: "normal",
    speed: 1,
    autoRounds: false,
    reducedMotion: false
  }
};

export const ACHIEVEMENTS = [
  {id:"first-deployment",name:"First Deployment",description:"Place your first tower.",reward:100,check:p=>p.lifetimePops>=1},
  {id:"century",name:"Century",description:"Pop 100 enemies.",reward:150,check:p=>p.lifetimePops>=100},
  {id:"thousand-pops",name:"Crowd Control",description:"Pop 1,000 enemies.",reward:300,check:p=>p.lifetimePops>=1000},
  {id:"five-thousand",name:"Battlefield Veteran",description:"Pop 5,000 enemies.",reward:750,check:p=>p.lifetimePops>=5000},
  {id:"ten-thousand",name:"Pressure Tested",description:"Pop 10,000 enemies.",reward:1000,check:p=>p.lifetimePops>=10000},
  {id:"round-40",name:"Deep Run",description:"Reach round 40.",reward:300,check:p=>Object.values(p.bestRounds).some(r=>r>=40)},
  {id:"round-80",name:"Freeplay Ready",description:"Reach round 80.",reward:700,check:p=>Object.values(p.bestRounds).some(r=>r>=80)},
  {id:"round-100",name:"Century Defense",description:"Reach round 100.",reward:1500,check:p=>Object.values(p.bestRounds).some(r=>r>=100)}
];

export class ProgressionSystem {
  constructor(save) {
    this.save = save;
    this.state = this.load();
  }

  load() {
    const profile = this.save.profile();
    const state = {
      ...deepClone(DEFAULT_PROGRESS),
      ...profile.progression,
      settings: {
        ...DEFAULT_PROGRESS.settings,
        ...(profile.progression?.settings || {})
      },
      knowledge: {
        ...DEFAULT_PROGRESS.knowledge,
        ...(profile.progression?.knowledge || {}),
        purchased: [
          ...(profile.progression?.knowledge?.purchased || [])
        ]
      }
    };

    state.knowledge.credits =
      Number(
        state.knowledge.credits || 0
      );

    return state;
  }

  awardXp(amount, reason = "unknown") {
    if (!Number.isFinite(amount) || amount <= 0) {
      return false;
    }

    this.state.experience += amount;
    let changed = false;

    while (
      this.state.experience >=
      this.experienceToNextRank()
    ) {
      this.state.experience -=
        this.experienceToNextRank();
      this.state.rank += 1;
      this.state.frontierCredits += 50;
      changed = true;
    }

    this.persist();
    return changed;
  }

  experienceToNextRank() {
    return 80 + this.state.rank * 40;
  }

  recordRun(mapId, round, won = false) {
    this.state.bestRounds[mapId] = Math.max(
      round,
      this.state.bestRounds[mapId] || 0
    );

    if (won) {
      this.state.mapStars[mapId] = Math.max(
        1,
        this.state.mapStars[mapId] || 0
      );
      this.awardXp(100, "win");
    }

    this.checkAchievements();
    this.persist();
  }

  recordStats({
    pops = 0,
    damage = 0,
    cash = 0
  } = {}) {
    this.state.lifetimePops += pops;
    this.state.lifetimeDamage += damage;
    this.state.lifetimeCash += cash;

    this.awardXp(
      Math.floor(pops / 5) +
      Math.floor(damage / 1000) +
      Math.floor(cash / 1000),
      "run-statistics"
    );

    this.checkAchievements();
    this.persist();
  }

  checkAchievements() {
    let newlyUnlocked = 0;

    for (const achievement of ACHIEVEMENTS) {
      if (
        this.state.achievements.includes(
          achievement.id
        )
      ) {
        continue;
      }

      if (!achievement.check(this.state)) {
        continue;
      }

      this.state.achievements.push(
        achievement.id
      );
      this.state.frontierCredits +=
        achievement.reward;
      newlyUnlocked += 1;
    }

    return newlyUnlocked;
  }

  isTowerUnlocked(towerId) {
    return this.state.unlockedTowers.includes(towerId);
  }

  unlockTower(towerId, cost = 0) {
    if (
      this.isTowerUnlocked(towerId) ||
      this.state.frontierCredits < cost
    ) {
      return false;
    }

    this.state.frontierCredits -= cost;
    this.state.unlockedTowers.push(towerId);
    this.persist();
    return true;
  }

  knowledgeSnapshot() {
    return {
      credits: this.state.knowledge.credits,
      purchased: [
        ...this.state.knowledge.purchased
      ],
      effects: aggregateKnowledge({
        credits:
          this.state.knowledge.credits,
        purchased:
          this.state.knowledge.purchased
      })
    };
  }

  awardKnowledgeCredits(amount) {
    if (
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return false;
    }

    this.state.knowledge.credits +=
      amount;

    this.persist();
    return true;
  }

  buyKnowledge(nodeId) {
    const knowledgeState = {
      credits:
        this.state.knowledge.credits,
      purchased:
        this.state.knowledge.purchased
    };

    if (!buyKnowledge(knowledgeState,nodeId)) {
      return false;
    }

    this.state.knowledge =
      knowledgeState;

    this.persist();
    return true;
  }

  knowledgeEffects() {
    return aggregateKnowledge(
      this.state.knowledge
    );
  }

  listKnowledgeNodes() {
    return KNOWLEDGE_NODES.map(
      (node) => ({
        ...deepClone(node),
        purchased:
          this.state.knowledge.purchased.includes(
            node.id
          ),
        available:
          !this.state.knowledge.purchased.includes(
            node.id
          ) &&
          node.requires.every(
            (requirement) =>
              this.state.knowledge.purchased.includes(
                requirement
              )
          ),
        affordable:
          this.state.knowledge.credits >=
          node.cost
      })
    );
  }

  persist() {
    const profile = this.save.profile();

    profile.progression = deepClone(
      this.state
    );

    profile.level = this.state.rank;
    profile.monkeyMoney =
      this.state.frontierCredits;
    profile.lifetimePops =
      this.state.lifetimePops;
    profile.lifetimeCash =
      this.state.lifetimeCash;

    this.save.saveProfile(profile);
  }

  snapshot() {
    return deepClone(this.state);
  }
}