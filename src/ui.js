export class UIController {
  constructor() {
    this.screens = {
      menu: document.querySelector("#menu-screen"),
      map: document.querySelector("#map-screen"),
      game: document.querySelector("#game-screen"),
      progress: document.querySelector("#progress-screen"),
      manual: document.querySelector("#manual-screen")
    };

    this.nodes = {
      mapList: document.querySelector("#map-list"),
      towerButtons: document.querySelector("#tower-buttons"),
      selectionPanel: document.querySelector("#selection-panel"),
      selectionName: document.querySelector("#selection-name"),
      selectionLevel: document.querySelector("#selection-level"),
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
      toastStack: document.querySelector("#toast-stack"),
      profileStrip: document.querySelector("#profile-strip"),
      buildButton: document.querySelector("#build-mode-btn"),
      multiButton: document.querySelector("#multi-place-btn")
    };
  }

  bind(actions) {
    document.querySelector("#play-btn").onclick =
      () => actions.play();
    document.querySelector("#sandbox-btn").onclick =
      () => actions.sandbox();
    document.querySelector("#progress-btn").onclick =
      () => actions.progress();
    document.querySelector("#glossary-btn").onclick =
      () => actions.glossary();

    document.querySelector("#map-back-btn").onclick =
      () => actions.mapBack();
    document.querySelector("#progress-back-btn").onclick =
      () => actions.progressBack();
    document.querySelector("#manual-back-btn").onclick =
      () => actions.manualBack();

    this.nodes.startRoundButton.onclick =
      () => actions.startRound();
    this.nodes.autoButton.onclick =
      () => actions.toggleAuto();
    this.nodes.speedButton.onclick =
      () => actions.cycleSpeed();
    this.nodes.pauseButton.onclick =
      () => actions.togglePause();
    document.querySelector("#save-btn").onclick =
      () => actions.save();
    document.querySelector("#menu-btn").onclick =
      () => actions.menu();
    document.querySelector("#close-selection-btn").onclick =
      () => actions.closeSelection();
    this.nodes.abilityButton.onclick =
      () => {
        const id = this.nodes.abilityButton.dataset.entityId;
        actions.activateAbility(id);
      };
    this.nodes.paragonButton.onclick =
      () => {
        const id = this.nodes.paragonButton.dataset.entityId;
        actions.ascend(id);
      };

    this.nodes.buildButton.onclick =
      () => actions.toggleBuild();
    this.nodes.multiButton.onclick =
      () => actions.toggleMulti();
    document.querySelector("#sell-mode-btn").onclick =
      () => actions.sell();
    document.querySelector("#upgrade-mode-btn").onclick =
      () => actions.upgradeMode();
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

  setProfile(profile) {
    this.nodes.profileStrip.textContent =
      "Level " +
      profile.level +
      "  •  " +
      profile.monkeyMoney +
      " frontier credits";
  }

  renderMapList(maps) {
    this.nodes.mapList.innerHTML = "";

    for (const map of maps) {
      const card = document.createElement("article");
      card.className = "map-card";

      card.innerHTML = [
        "<h3>",
        map.name,
        "</h3>",
        "<p>",
        map.description,
        "</p>",
        "<div class="map-meta">",
        "<span class="tag">Difficulty ",
        map.difficulty,
        "</span>",
        "<span class="tag">",
        map.water ? "Water" : "Land",
        "</span>",
        "<span class="tag">",
        map.lives,
        " lives</span>",
        "</div>",
        "<button class="primary">DEPLOY</button>"
      ].join("");

      card.querySelector("button").onclick =
        () => {
          const sandbox =
            Boolean(
              this.mapScreenOptions?.sandbox
            );
          this.startMapCallback(
            map.id,
            { sandbox }
          );
        };

      this.nodes.mapList.appendChild(card);
    }
  }

  renderTowerButtons(towers) {
    this.nodes.towerButtons.innerHTML = "";

    for (const tower of towers) {
      const button =
        document.createElement("button");

      button.className = "tower-button";
      button.dataset.towerId = tower.id;

      button.innerHTML = [
        "<span class="tower-icon">",
        tower.icon,
        "</span>",
        "<span class="name">",
        tower.name,
        "</span>",
        "<span class="cost">$",
        tower.cost,
        "</span>"
      ].join("");

      button.title = tower.description;

      button.onclick = () => {
        if (this.selectTowerCallback) {
          this.selectTowerCallback(
            tower.id
          );
        }
      };

      this.nodes.towerButtons.appendChild(
        button
      );
    }

    const heroButton =
      document.createElement("button");

    heroButton.className =
      "tower-button";

    heroButton.innerHTML = [
      "<span class="tower-icon">★</span>",
      "<span class="name">Nova</span>",
      "<span class="cost">$700</span>"
    ].join("");

    heroButton.title =
      "Deploy the Nova hero.";

    heroButton.onclick = () => {
      this.toast(
        "Hero placement is unlocked through the hero deployment key in the next content pass."
      );
    };

    this.nodes.towerButtons.appendChild(
      heroButton
    );
  }

  renderSelection(selection) {
    if (!selection) {
      this.nodes.selectionPanel.classList.add(
        "hidden"
      );
      return;
    }

    this.nodes.selectionPanel.classList.remove(
      "hidden"
    );

    this.nodes.selectionName.textContent =
      selection.name;

    if (selection.type === "hero") {
      this.nodes.selectionLevel.textContent =
        "Hero level " +
        selection.tier +
        "  •  XP " +
        selection.xp;

      this.nodes.selectionStats.innerHTML =
        this.statGrid([
          ["Damage", selection.attack.damage.toFixed(1)],
          ["Range", Math.round(selection.attack.range)],
          ["Pops", selection.pops]
        ]);

      this.nodes.upgradePaths.innerHTML =
        "<div class="upgrade-path"><div class="path-title"><span>Ability</span><span>" +
        (
          selection.abilityReady
            ? "READY"
            : Math.ceil(selection.abilityCooldown) + "s"
        ) +
        "</span></div></div>";

      this.nodes.abilityButton.classList.remove(
        "hidden"
      );
      this.nodes.abilityButton.dataset.entityId =
        selection.id;

      this.nodes.paragonButton.classList.add(
        "hidden"
      );
      return;
    }

    this.nodes.selectionLevel.textContent =
      "Tier " +
      selection.tier +
      "  •  Target: " +
      selection.targetMode;

    this.nodes.selectionStats.innerHTML =
      this.statGrid([
        ["Damage", Number(selection.attack.damage || 0).toFixed(1)],
        ["Pierce", Math.floor(selection.attack.pierce || 0)],
        ["Range", Math.floor(selection.attack.range || 0)],
        ["Pops", selection.pops],
        ["Damage dealt", Math.floor(selection.damage)],
        ["Cash", Math.floor(selection.cash)]
      ]);

    this.nodes.upgradePaths.innerHTML = "";

    for (let path = 0; path < 3; path += 1) {
      const wrapper =
        document.createElement("div");

      wrapper.className = "upgrade-path";

      const title =
        document.createElement("div");

      title.className =
        "path-title";

      title.innerHTML =
        "<span>Path " +
        (path + 1) +
        "</span><span>" +
        selection.pathLevels[path] +
        "/5</span>";

      wrapper.appendChild(title);

      for (
        let tier = 1;
        tier <= 5;
        tier += 1
      ) {
        const upgrade =
          selection.paths[path][tier - 1];

        const row =
          document.createElement("div");

        row.className =
          "upgrade-tier";

        const description =
          document.createElement("div");

        description.className =
          "description";

        description.innerHTML = [
          "<div class="tier-badge">",
          tier,
          "</div>",
          "<div class="upgrade-name">",
          upgrade.name,
          "</div>",
          "<div class="upgrade-desc">",
          upgrade.description,
          "</div>"
        ].join("");

        const button =
          document.createElement("button");

        button.className =
          "upgrade-buy";

        const purchased =
          selection.pathLevels[path] >= tier;

        const available =
          !purchased &&
          selection.pathLevels[path] + 1 === tier;

        button.disabled =
          purchased || !available;

        button.textContent =
          purchased
            ? "OWNED"
            : "$" + upgrade.cost;

        button.dataset.path = path;
        button.dataset.tier = tier;
        button.dataset.entityId =
          selection.id;

        button.onclick = () => {
          if (this.buyUpgradeCallback) {
            this.buyUpgradeCallback(
              selection.id,
              Number(button.dataset.path),
              Number(button.dataset.tier)
            );
          }
        };

        row.append(
          description,
          button
        );

        wrapper.appendChild(row);
      }

      this.nodes.upgradePaths.appendChild(
        wrapper
      );
    }

    if (selection.canAscend) {
      this.nodes.paragonButton.classList.remove(
        "hidden"
      );
      this.nodes.paragonButton.dataset.entityId =
        selection.id;
      this.nodes.paragonButton.textContent =
        "ASCEND  $25000";
    } else {
      this.nodes.paragonButton.classList.add(
        "hidden"
      );
    }

    if (selection.ascended) {
      this.nodes.paragonButton.classList.remove(
        "hidden"
      );
      this.nodes.paragonButton.disabled = true;
      this.nodes.paragonButton.textContent =
        "ASCENDED • DEGREE " +
        selection.ascensionDegree;
    } else {
      this.nodes.paragonButton.disabled = false;
    }

    this.nodes.abilityButton.classList.remove(
      "hidden"
    );
    this.nodes.abilityButton.dataset.entityId =
      selection.id;
    this.nodes.abilityButton.textContent =
      "ABILITY";
  }

  statGrid(items) {
    return items.map(
      ([label, value]) =>
        "<div class="stat-card">" +
        "<div class="label">" +
        label +
        "</div>" +
        "<div class="value">" +
        value +
        "</div>" +
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
      hud.state === "paused"
        ? "▶"
        : "Ⅱ";

    this.nodes.startRoundButton.disabled =
      hud.active ||
      hud.state !== "running";

    this.nodes.autoButton.textContent =
      hud.autoRounds
        ? "AUTO ✓"
        : "AUTO";

    this.nodes.bossWarning.textContent =
      hud.boss
        ? hud.boss.name +
          "  " +
          Math.ceil(
            hud.boss.health
          )
        : "";
  }

  setGameState(state) {
    if (state === "menu") {
      return;
    }

    if (state === "paused") {
      this.toast("Game paused.");
    }

    if (state === "won") {
      this.toast("Run complete.");
    }

    if (state === "lost") {
      this.toast("Run failed.");
    }
  }

  renderProgress(profile) {
    this.nodes.progressContent.innerHTML = "";

    const grid =
      document.createElement("div");

    grid.className =
      "progress-grid";

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
      const card =
        document.createElement("article");

      card.className =
        "progress-card";

      card.innerHTML =
        "<h3>" + name + "</h3>" +
        "<div class="progress-value">" +
        value.toLocaleString() +
        "</div>";

      grid.appendChild(card);
    }

    this.nodes.progressContent.appendChild(
      grid
    );
  }

  renderManual(glossary) {
    this.nodes.manualContent.innerHTML = "";

    for (const [title, text] of glossary) {
      const section =
        document.createElement("section");

      section.innerHTML =
        "<h3>" + title + "</h3>" +
        "<p>" + text + "</p>";

      this.nodes.manualContent.appendChild(
        section
      );
    }
  }

  toast(message) {
    const item =
      document.createElement("div");

    item.className =
      "toast";

    item.textContent = message;

    this.nodes.toastStack.appendChild(
      item
    );

    window.setTimeout(() => {
      item.remove();
    }, 2200);
  }

  set startMapCallback(value) {
    this._startMapCallback = value;
  }

  get startMapCallback() {
    return this._startMapCallback;
  }

  set selectTowerCallback(value) {
    this._selectTowerCallback = value;
  }

  get selectTowerCallback() {
    return this._selectTowerCallback;
  }

  set buyUpgradeCallback(value) {
    this._buyUpgradeCallback = value;
  }

  get buyUpgradeCallback() {
    return this._buyUpgradeCallback;
  }
}
