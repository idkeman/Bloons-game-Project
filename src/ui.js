export class UIController {
  constructor() {
    this.screens = {
      menu: document.querySelector("#menu-screen"),
      map: document.querySelector("#map-screen"),
      game: document.querySelector("#game-screen"),
      progress: document.querySelector("#progress-screen"),
      manual: document.querySelector("#manual-screen"),
      knowledge: document.querySelector("#knowledge-screen")
    };

    this.nodes = {
      mapList: document.querySelector("#map-list"),
      towerButtons: document.querySelector("#tower-buttons"),
      selectionPanel: document.querySelector("#selection-panel"),
      selectionName: document.querySelector("#selection-name"),
      selectionLevel: document.querySelector("#selection-level"),
      targetButton: document.querySelector("#target-btn"),
      selectionStats: document.querySelector("#selection-stats"),
      upgradePaths: document.querySelector("#upgrade-paths"),
      abilityButton: document.querySelector("#ability-btn"),
      paragonButton: document.querySelector("#paragon-btn"),
      cash: document.querySelector("#cash-value"),
      lives: document.querySelector("#lives-value"),
      round: document.querySelector("#round-value"),
      bossWarning: document.querySelector("#boss-warning"),
      speedButton: document.querySelector("#speed-btn"),
      pauseButton: document.querySelector("#pause-btn"),
      autoButton: document.querySelector("#auto-round-btn"),
      startRoundButton: document.querySelector("#start-round-btn"),
      progressContent: document.querySelector("#progress-content"),
      manualContent: document.querySelector("#manual-content"),
      knowledgeContent: document.querySelector("#knowledge-content"),
      knowledgeCredits: document.querySelector("#knowledge-credits"),
      toastStack: document.querySelector("#toast-stack"),
      profileStrip: document.querySelector("#profile-strip"),
      buildButton: document.querySelector("#build-mode-btn"),
      multiButton: document.querySelector("#multi-place-btn")
    };
  }

  bind(actions) {
    this.startMapCallback = actions.startMap;
    this.selectTowerCallback = actions.selectTower;
    this.buyUpgradeCallback = actions.buyUpgrade;
    this.buyKnowledgeCallback = actions.buyKnowledge;

    document.querySelector("#play-btn").onclick = actions.play;
    document.querySelector("#freeplay-btn").onclick = actions.freeplay;
    document.querySelector("#continue-btn").onclick = actions.continue;
    document.querySelector("#sandbox-btn").onclick = actions.sandbox;
    document.querySelector("#progress-btn").onclick = actions.progress;
    document.querySelector("#glossary-btn").onclick = actions.glossary;

    document.querySelector("#map-back-btn").onclick = actions.mapBack;
    document.querySelector("#progress-back-btn").onclick = actions.progressBack;
    document.querySelector("#knowledge-back-btn").onclick = actions.knowledgeBack;
    document.querySelector("#manual-back-btn").onclick = actions.manualBack;

    this.nodes.startRoundButton.onclick = actions.startRound;
    this.nodes.autoButton.onclick = actions.toggleAuto;
    this.nodes.speedButton.onclick = actions.cycleSpeed;
    this.nodes.pauseButton.onclick = actions.togglePause;

    document.querySelector("#save-btn").onclick = actions.save;
    document.querySelector("#menu-btn").onclick = actions.menu;
    document.querySelector("#restart-btn").onclick = actions.restart;
    document.querySelector("#end-menu-btn").onclick = actions.menu;
    document.querySelector("#close-selection-btn").onclick = actions.closeSelection;
    this.nodes.targetButton.onclick = () => actions.cycleTarget();

    this.nodes.abilityButton.onclick = () => {
      const id = this.nodes.abilityButton.dataset.entityId;
      if (id) {
        actions.activateAbility(id);
      }
    };

    this.nodes.paragonButton.onclick = () => {
      const id = this.nodes.paragonButton.dataset.entityId;
      if (id) {
        actions.ascend(id);
      }
    };

    this.nodes.buildButton.onclick = actions.toggleBuild;
    this.nodes.multiButton.onclick = actions.toggleMulti;
    document.querySelector("#sell-mode-btn").onclick = actions.sell;
    document.querySelector("#upgrade-mode-btn").onclick = actions.upgradeMode;
  }

  showScreen(name) {
    Object.values(this.screens).forEach(
      (screen) => screen.classList.remove("active")
    );
    this.screens[name].classList.add("active");
  }

  showMenu() {
    this.showScreen("menu");
  }

  setContinueAvailable(available) {
    const button = document.querySelector("#continue-btn");

    if (!button) {
      return;
    }

    button.classList.toggle("hidden", !available);
  }

  showMapScreen(options = {}) {
    this.mapScreenOptions = options;
    this.showScreen("map");
  }

  showGame() {
    this.showScreen("game");
  }

  showProgress(profile) {
    this.renderProgress(profile);
    this.showScreen("progress");
  }

  showManual(glossary) {
    this.renderManual(glossary);
    this.showScreen("manual");
  }

  showKnowledge(nodes, credits) {
    this.renderKnowledge(nodes, credits);
    this.showScreen("knowledge");
  }

  setProfile(profile) {
    this.nodes.profileStrip.textContent =
      "Level " + profile.level +
      "  •  " + profile.monkeyMoney.toLocaleString() +
      " frontier credits";
  }

  renderMapList(maps) {
    this.nodes.mapList.replaceChildren();

    for (const map of maps) {
      const card = document.createElement("article");
      card.className = "map-card";

      const title = document.createElement("h3");
      title.textContent = map.name;

      const description = document.createElement("p");
      description.textContent = map.description;

      const meta = document.createElement("div");
      meta.className = "map-meta";
      meta.append(
        this.tag("Difficulty " + map.difficulty),
        this.tag(map.water ? "Water" : "Land"),
        this.tag(map.lives + " lives")
      );

      const row = document.createElement("div");
      row.style.display = "grid";
      row.style.gridTemplateColumns = "1fr 1fr auto";
      row.style.gap = "8px";

      const select = document.createElement("select");
      select.style.background = "#101721";
      select.style.color = "inherit";
      select.style.border = "1px solid rgba(255,255,255,.12)";
      select.style.borderRadius = "10px";
      select.style.padding = "9px";

      const difficultyNames = [
        ["easy", "Easy"],
        ["normal", "Normal"],
        ["hard", "Hard"],
        ["extreme", "Extreme"],
        ["impossible", "Impossible"]
      ];

      const modeSelect = document.createElement("select");
      modeSelect.style.background = "#101721";
      modeSelect.style.color = "inherit";
      modeSelect.style.border = "1px solid rgba(255,255,255,.12)";
      modeSelect.style.borderRadius = "10px";
      modeSelect.style.padding = "9px";

      const modes = [
        ["standard", "Standard"],
        ["halfCash", "Half Cash"],
        ["reverse", "Reverse Route"],
        ["doubleHealth", "Double Health"],
        ["apocalypse", "Apocalypse"],
        ["glass", "Glass Field"],
        ["endurance", "Endurance"]
      ];

      for (const [value, label] of difficultyNames) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        if (value === "normal") {
          option.selected = true;
        }
        select.appendChild(option);
      }

      const deploy = document.createElement("button");
      deploy.className = "primary";
      deploy.textContent = "DEPLOY";
      deploy.onclick = () => {
        this.startMapCallback(
          map.id,
          {
            sandbox: Boolean(this.mapScreenOptions?.sandbox),
            difficulty: select.value
          }
        );
      };

      for (const [value, label] of modes) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        modeSelect.appendChild(option);
      }

      row.append(select, modeSelect, deploy);
      card.append(title, description, meta, row);
      this.nodes.mapList.appendChild(card);
    }
  }

  tag(text) {
    const node = document.createElement("span");
    node.className = "tag";
    node.textContent = text;
    return node;
  }

  renderTowerButtons(towers) {
    this.nodes.towerButtons.replaceChildren();

    for (const tower of towers) {
      this.nodes.towerButtons.appendChild(
        this.makeTowerButton(
          tower.name,
          tower.icon,
          tower.cost,
          tower.description,
          () => this.selectTowerCallback(tower.id)
        )
      );
    }

    const hero = this.makeTowerButton(
      "Nova Hero",
      "★",
      700,
      "Deploy Nova with level-based upgrades and an active ability.",
      () => this.selectTowerCallback("hero:nova")
    );

    this.nodes.towerButtons.appendChild(hero);
  }

  makeTowerButton(name, icon, cost, title, action) {
    const button = document.createElement("button");
    button.className = "tower-button";
    button.title = title;

    const iconNode = document.createElement("span");
    iconNode.className = "tower-icon";
    iconNode.textContent = icon;

    const nameNode = document.createElement("span");
    nameNode.className = "name";
    nameNode.textContent = name;

    const costNode = document.createElement("span");
    costNode.className = "cost";
    costNode.textContent = "$" + cost;

    button.append(iconNode, nameNode, costNode);
    button.onclick = action;
    return button;
  }

  renderSelection(selection) {
    if (!selection) {
      this.nodes.selectionPanel.classList.add("hidden");
      return;
    }

    this.nodes.selectionPanel.classList.remove("hidden");
    this.nodes.selectionName.textContent = selection.name;

    if (selection.type === "hero") {
      this.renderHeroSelection(selection);
      return;
    }

    this.nodes.selectionLevel.textContent =
      selection.ascended
        ? "Paragon degree " + selection.ascensionDegree
        : "Tier " + selection.tier +
          "  •  Target: " + selection.targetMode;
    this.nodes.targetButton.textContent =
      "TARGET: " + selection.targetMode.toUpperCase();

    this.nodes.selectionStats.innerHTML = this.statGrid([
      ["Damage", Number(selection.attack.damage || 0).toFixed(1)],
      ["Pierce", Math.floor(selection.attack.pierce || 0)],
      ["Range", Math.floor(selection.attack.range || 0)],
      ["Pops", selection.pops],
      ["Damage", Math.floor(selection.damage)],
      ["Cash", Math.floor(selection.cash)]
    ]);

    this.nodes.upgradePaths.replaceChildren();

    for (let path = 0; path < 3; path += 1) {
      const wrapper = document.createElement("div");
      wrapper.className = "upgrade-path";

      const title = document.createElement("div");
      title.className = "path-title";

      const left = document.createElement("span");
      left.textContent = "Path " + (path + 1);

      const right = document.createElement("span");
      right.textContent = selection.pathLevels[path] + "/5";

      title.append(left, right);
      wrapper.appendChild(title);

      for (let tier = 1; tier <= 5; tier += 1) {
        const upgrade = selection.paths[path][tier - 1];
        const row = document.createElement("div");
        row.className = "upgrade-tier";

        const details = document.createElement("div");
        details.className = "description";

        const badge = document.createElement("div");
        badge.className = "tier-badge";
        badge.textContent = "Tier " + tier;

        const name = document.createElement("div");
        name.className = "upgrade-name";
        name.textContent = upgrade.name;

        const description = document.createElement("div");
        description.className = "upgrade-desc";
        description.textContent = upgrade.description;

        details.append(badge, name, description);

        const button = document.createElement("button");
        button.className = "upgrade-buy";

        const purchased = selection.pathLevels[path] >= tier;
        const available =
          !purchased &&
          selection.pathLevels[path] + 1 === tier;

        button.disabled = purchased || !available;
        button.textContent =
          purchased ? "OWNED" : "$" + upgrade.cost;

        button.onclick = () =>
          this.buyUpgradeCallback(
            selection.id,
            path,
            tier
          );

        row.append(details, button);
        wrapper.appendChild(row);
      }

      this.nodes.upgradePaths.appendChild(wrapper);
    }

    this.nodes.abilityButton.classList.remove("hidden");
    this.nodes.abilityButton.dataset.entityId = selection.id;
    this.nodes.abilityButton.textContent = "ABILITY";

    if (selection.paragon) {
      const paragonCard =
        document.createElement("div");

      paragonCard.className = "paragon-card";
      paragonCard.innerHTML =
        "<strong>" + selection.paragon.name + "</strong>" +
        "<span>Degree " + selection.ascensionDegree + "</span>" +
        "<small>" +
        selection.paragon.features.join(" • ") +
        "</small>";

      this.nodes.upgradePaths.prepend(
        paragonCard
      );
    }

    if (selection.canAscend) {
      this.nodes.paragonButton.classList.remove("hidden");
      this.nodes.paragonButton.dataset.entityId = selection.id;
      this.nodes.paragonButton.disabled = false;
      this.nodes.paragonButton.textContent = "ASCEND  $25000";
    } else if (selection.ascended) {
      this.nodes.paragonButton.classList.remove("hidden");
      this.nodes.paragonButton.disabled = true;
      this.nodes.paragonButton.textContent =
        "ASCENDED • DEGREE " + selection.ascensionDegree;
    } else {
      this.nodes.paragonButton.classList.add("hidden");
    }
  }

  renderHeroSelection(selection) {
    this.nodes.selectionLevel.textContent =
      "Hero level " + selection.tier +
      "  •  XP " + selection.xp;

    this.nodes.selectionStats.innerHTML = this.statGrid([
      ["Damage", selection.attack.damage.toFixed(1)],
      ["Range", Math.round(selection.attack.range)],
      ["Pops", selection.pops]
    ]);

    this.nodes.upgradePaths.innerHTML = "";

    const card = document.createElement("div");
    card.className = "upgrade-path";

    const header = document.createElement("div");
    header.className = "path-title";
    header.textContent = "Next hero milestones";

    card.appendChild(header);

    for (let index = 0; index < selection.levels.length; index += 1) {
      const row = document.createElement("div");
      row.className = "upgrade-tier";

      const details = document.createElement("div");
      details.className = "description";

      const badge = document.createElement("div");
      badge.className = "tier-badge";
      badge.textContent = "Level " + (index + 1);

      const name = document.createElement("div");
      name.className = "upgrade-name";
      name.textContent = selection.levels[index];

      details.append(badge, name);
      row.append(details);

      const state = document.createElement("button");
      state.className = "upgrade-buy";
      state.disabled = true;
      state.textContent =
        index + 1 <= selection.tier
          ? "OWNED"
          : "LOCKED";

      row.appendChild(state);
      card.appendChild(row);
    }

    this.nodes.upgradePaths.appendChild(card);

    this.nodes.abilityButton.classList.remove("hidden");
    this.nodes.abilityButton.dataset.entityId = selection.id;
    this.nodes.abilityButton.textContent =
      selection.abilityReady
        ? "ABILITY READY"
        : "ABILITY " + Math.ceil(selection.abilityCooldown) + "s";

    this.nodes.paragonButton.classList.add("hidden");
  }

  statGrid(items) {
    return items.map(
      ([label, value]) =>
        '<div class="stat-card">' +
        '<div class="label">' + label + "</div>" +
        '<div class="value">' + value + "</div>" +
        "</div>"
    ).join("");
  }

  updateHUD(hud) {
    this.nodes.cash.textContent =
      "$" + hud.cash.toLocaleString();

    this.nodes.lives.textContent =
      hud.lives.toLocaleString();

    this.nodes.round.textContent =
      hud.round;

    this.nodes.speedButton.textContent =
      "▶ " + hud.speed + "×";

    this.nodes.pauseButton.textContent =
      hud.state === "paused" ? "▶" : "Ⅱ";

    this.nodes.startRoundButton.disabled =
      hud.active || hud.state !== "running";

    this.nodes.autoButton.textContent =
      hud.autoRounds ? "AUTO ✓" : "AUTO";

    this.nodes.bossWarning.textContent =
      hud.boss
        ? hud.boss.name + "  " + Math.ceil(hud.boss.health)
        : "";
  }

  setGameState(state) {
    if (state === "running") {
      this.showGameEnd(false);
    }

    if (state === "paused") {
      this.toast("Game paused.");
    } else if (state === "won") {
      this.toast("Run complete.");
      this.showGameEnd(false, "Defense complete");
    } else if (state === "lost") {
      this.toast("Run failed.");
      this.showGameEnd(true);
    }
  }

  showGameEnd(defeat, title = "") {
    const overlay = document.querySelector("#end-overlay");

    if (!overlay) {
      return;
    }

    overlay.classList.toggle(
      "hidden",
      !defeat && !title
    );

    if (defeat) {
      document.querySelector("#end-kicker").textContent = "RUN FAILED";
      document.querySelector("#end-title").textContent = "Defense collapsed";
      document.querySelector("#end-subtitle").textContent = "The route reached the exit.";
      return;
    }

    if (title) {
      document.querySelector("#end-kicker").textContent = "RUN COMPLETE";
      document.querySelector("#end-title").textContent = title;
      document.querySelector("#end-subtitle").textContent = "The field is secure.";
      overlay.classList.remove("hidden");
    }
  }

  renderProgress(profile) {
    this.nodes.progressContent.replaceChildren();

    const grid = document.createElement("div");
    grid.className = "progress-grid";

    const cards = [
      ["Level", profile.level],
      ["Credits", profile.monkeyMoney],
      ["Games", profile.games],
      ["Wins", profile.wins],
      ["Lifetime pops", profile.lifetimePops],
      ["Lifetime cash", profile.lifetimeCash],
      ["Achievements", profile.achievements.length]
    ];

    for (const [name, value] of cards) {
      const card = document.createElement("article");
      card.className = "progress-card";

      const heading = document.createElement("h3");
      heading.textContent = name;

      const valueNode = document.createElement("div");
      valueNode.className = "progress-value";
      valueNode.textContent = Number(value).toLocaleString();

      card.append(heading, valueNode);
      grid.appendChild(card);
    }

    this.nodes.progressContent.appendChild(grid);
  }

  renderManual(glossary) {
    this.nodes.manualContent.replaceChildren();

    for (const [title, body] of glossary) {
      const section = document.createElement("section");

      const heading = document.createElement("h3");
      heading.textContent = title;

      const text = document.createElement("p");
      text.textContent = body;

      section.append(heading, text);
      this.nodes.manualContent.appendChild(section);
    }
  }


  set buyKnowledgeCallback(value) {
    this._buyKnowledgeCallback = value;
  }

  get buyKnowledgeCallback() {
    return this._buyKnowledgeCallback;
  }

  updateProgress(profile) {
    this.renderProgress(profile);
  }

  updateKnowledge(nodes, credits) {
    this.renderKnowledge(nodes, credits);
  }

  toast(message) {
    const item = document.createElement("div");
    item.className = "toast";
    item.textContent = message;

    this.nodes.toastStack.appendChild(item);

    window.setTimeout(() => item.remove(), 2200);
  }
}


  renderKnowledge(nodes, credits) {
    this.nodes.knowledgeCredits.textContent =
      "Knowledge credits: " + Number(credits || 0).toLocaleString();

    this.nodes.knowledgeContent.replaceChildren();

    const grid = document.createElement("div");
    grid.className = "knowledge-grid";

    const categories = new Map();

    for (const node of nodes) {
      if (!categories.has(node.category)) {
        categories.set(node.category, []);
      }
      categories.get(node.category).push(node);
    }

    for (const [category, categoryNodes] of categories) {
      const section = document.createElement("section");
      section.className = "knowledge-category";

      const title = document.createElement("h3");
      title.textContent = category.toUpperCase();
      section.appendChild(title);

      for (const node of categoryNodes) {
        const card = document.createElement("article");
        card.className =
          "knowledge-node" +
          (node.purchased ? " purchased" : "");

        const heading = document.createElement("strong");
        heading.textContent = node.name;

        const description = document.createElement("p");
        description.textContent = node.description;

        const footer = document.createElement("div");
        footer.className = "knowledge-footer";

        const cost = document.createElement("span");
        cost.textContent =
          node.purchased
            ? "OWNED"
            : node.cost + " credits";

        const button = document.createElement("button");
        button.textContent =
          node.purchased
            ? "OWNED"
            : node.available && node.affordable
              ? "RESEARCH"
              : node.available
                ? "LOCKED: CREDITS"
                : "LOCKED";

        button.disabled =
          node.purchased ||
          !node.available ||
          !node.affordable;

        button.onclick = () => {
          if (this.buyKnowledgeCallback) {
            this.buyKnowledgeCallback(
              node.id
            );
          }
        };

        footer.append(cost, button);
        card.append(heading, description, footer);
        section.appendChild(card);
      }

      grid.appendChild(section);
    }

    this.nodes.knowledgeContent.appendChild(grid);
  }
