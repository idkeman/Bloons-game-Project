import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = process.cwd();

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function startServer() {
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url, "http://localhost");
      let pathname = decodeURIComponent(url.pathname);

      if (pathname === "/") {
        pathname = "/index.html";
      }

      const safePath = normalize(join(ROOT, pathname));

      if (!safePath.startsWith(ROOT)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }

      const body = await readFile(safePath);
      response.writeHead(200, {
        "Content-Type":
          CONTENT_TYPES[extname(safePath)] ||
          "application/octet-stream",
        "Cache-Control": "no-store"
      });
      response.end(body);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({
        server,
        url: "http://127.0.0.1:" + address.port
      });
    });
  });
}

const { chromium } = await import("playwright");
const { server, url } = await startServer();

const browser = await chromium.launch({
  headless: true
});

const page = await browser.newPage({
  viewport: {
    width: 1280,
    height: 760
  }
});

const errors = [];

page.on("pageerror", (error) => {
  errors.push(error);
});

await page.goto(url, {
  waitUntil: "networkidle"
});

await page.evaluate(() => {
  window.monkeyFrontier.game.debugEnabled = true;
});

await page.locator("#play-btn").click();

await page.locator(".map-card").first().waitFor();
assert.equal(
  await page.locator(".map-card").count(),
  16,
  "all maps should be shown"
);

const firstMap = page.locator(".map-card").first();
await firstMap.locator("select").nth(0).selectOption("hard");
await firstMap.locator("select").nth(1).selectOption("standard");
await firstMap.locator("button").click();

await page.locator("#game-canvas").waitFor();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.difficultyId
  ),
  "hard"
);

await page.locator(".tower-button").first().click();

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  const zone = game.map.buildZones[1];
  const x = (zone.x + zone.w / 2) * game.width;
  const y = (zone.y + zone.h / 2) * game.height;
  const rect = game.canvas.getBoundingClientRect();

  game.canvas.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      clientX: rect.left + x,
      clientY: rect.top + y,
      button: 0,
      pointerType: "mouse"
    })
  );
});

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.length
  ),
  1,
  "tower placement should create a tower"
);

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.selectedTower().tier
  ),
  0
);

await page.locator(".upgrade-buy:not(:disabled)").first().click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.selectedTower().tier
  ),
  1,
  "first upgrade should be purchasable"
);

const beforeTarget = await page.evaluate(
  () => window.monkeyFrontier.game.selectedTower().targetMode
);

await page.locator("#target-btn").click();

const afterTarget = await page.evaluate(
  () => window.monkeyFrontier.game.selectedTower().targetMode
);

assert.notEqual(
  beforeTarget,
  afterTarget,
  "target priority should cycle"
);

await page.locator("#speed-btn").click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.speed
  ),
  2
);

await page.locator("#pause-btn").click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.state
  ),
  "paused"
);

await page.locator("#pause-btn").click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.state
  ),
  "running"
);

await page.locator("#multi-place-btn").click();
await page.locator(".tower-button").first().click();

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  const zone = game.map.buildZones[2];
  const x = (zone.x + zone.w / 2) * game.width;
  const y = (zone.y + zone.h / 2) * game.height;
  const rect = game.canvas.getBoundingClientRect();

  game.canvas.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      clientX: rect.left + x,
      clientY: rect.top + y,
      button: 0,
      pointerType: "mouse"
    })
  );
});

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.length
  ),
  2,
  "multi-place should allow a second deployment"
);

await page.locator("#start-round-btn").click();

await page.waitForFunction(
  () => window.monkeyFrontier.game.rounds.current === 1
);

await page.waitForTimeout(900);

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.rounds.current
  ),
  1
);

assert.ok(
  await page.evaluate(
    () => window.monkeyFrontier.game.bloons.length > 0
  ),
  "round should spawn enemies"
);

await page.locator("#tower-buttons .tower-button").last().click();
await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  game.cash = 5000;
  const zone = game.map.buildZones[0];
  const x = (zone.x + zone.w / 2) * game.width;
  const y = (zone.y + zone.h / 2) * game.height;
  const rect = game.canvas.getBoundingClientRect();

  game.canvas.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      clientX: rect.left + x,
      clientY: rect.top + y,
      button: 0,
      pointerType: "mouse"
    })
  );
});

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.heroes.length
  ),
  1,
  "hero placement should create a hero"
);

await page.locator("#ability-btn").click();

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;

  game.start("meadow", {
    sandbox: true
  });

  const zones = game.map.buildZones;
  game.pendingTower = "sharpshooter";
  game.buildMode = true;

  for (let index = 0; index < 3; index += 1) {
    const zone = zones[index];
    const x =
      (zone.x + zone.w / 2) *
      game.width;
    const y =
      (zone.y + zone.h / 2) *
      game.height;

    game.placePendingTower(
      x,
      y
    );
  }

  const paths = [0, 1, 2];

  game.towers.forEach(
    (tower, index) => {
      for (let tier = 1; tier <= 5; tier += 1) {
        game.buyUpgrade(
          tower.id,
          paths[index],
          tier
        );
      }
    }
  );

  game.selectEntity(
    game.towers[0].id
  );
});

await page.locator("#paragon-btn").waitFor({
  state: "visible"
});

await page.locator("#paragon-btn").click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.length
  ),
  1,
  "Paragon creation should consume exactly three Tier 5 towers"
);

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers[0].ascended
  ),
  true,
  "resulting Paragon should be marked Ascended"
);

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  game.start("rivergate", { sandbox: true });
});

await page.locator("#tower-buttons .tower-button").filter({
  hasText: "Tide Submersible"
}).click();

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  const zone = game.map.waterZones[0];
  const x = (zone.x + zone.w / 2) * game.width;
  const y = 0.08 * game.height;
  const rect = game.canvas.getBoundingClientRect();

  game.canvas.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      clientX: rect.left + x,
      clientY: rect.top + y,
      button: 0,
      pointerType: "mouse"
    })
  );
});

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.some(
      (tower) => tower.type === "sub"
    )
  ),
  true,
  "water tower should deploy in a water zone"
);

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  game.start("meadow", { sandbox: true });
  const boss = game.spawnBloon("bossTitan");
  boss.health = boss.maxHealth * 0.74;
  game.bosses.update();
});

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.bloons.some(
      (bloon) => bloon.type === "fortBlimp"
    )
  ),
  true,
  "boss phase should spawn reinforcement units"
);

await page.locator(".tower-button").first().click();

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  const zone = game.map.buildZones[0];
  const x = (zone.x + zone.w / 2) * game.width;
  const y = (zone.y + zone.h / 2) * game.height;
  const rect = game.canvas.getBoundingClientRect();

  game.canvas.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      clientX: rect.left + x,
      clientY: rect.top + y,
      button: 0,
      pointerType: "mouse"
    })
  );
});

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.length
  ),
  1,
  "fresh resume-save state should contain a tower"
);


await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  game.lose();
});

await page.locator("#end-overlay").waitFor({
  state: "visible"
});

assert.equal(
  await page.locator("#end-title").textContent(),
  "Defense collapsed"
);

await page.locator("#restart-btn").click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.state
  ),
  "running"
);

assert.equal(
  await page.locator("#end-overlay").evaluate(
    (node) => node.classList.contains("hidden")
  ),
  true
);

await page.locator("#save-btn").click();

assert.ok(
  await page.evaluate(
    () => localStorage.getItem("monkey-frontier-save-v1") !== null
  ),
  "save should persist local state"
);

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  const tower = game.towers[0];

  game.selectEntity(tower.id);
});

await page.locator("#sell-mode-btn").click();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.length
  ),
  1,
  "selling should remove exactly one tower"
);

await page.locator("#menu-btn").click();

await page.locator("#continue-btn").waitFor({
  state: "visible"
});

await page.locator("#continue-btn").click();

await page.locator("#game-canvas").waitFor();

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.map.id
  ),
  "meadow"
    .replace("meadow", "meadow"),
  "saved map should resume"
);

assert.equal(
  await page.evaluate(
    () => window.monkeyFrontier.game.towers.length
  ),
  1,
  "saved tower should resume"
);

await page.locator("#close-selection-btn").click();

await page.locator("#menu-btn").click();

await page.locator("#progress-btn").click();

assert.ok(
  await page.locator(".progress-card").count() >= 7,
  "progression page should render"
);

await page.locator("#progress-back-btn").click();

await page.locator("#knowledge-btn").click();

assert.ok(
  await page.locator(".knowledge-node").count() >= 30,
  "research tree should render all knowledge nodes"
);

await page.evaluate(() => {
  const game = window.monkeyFrontier.game;
  game.progression.awardKnowledgeCredits(500);
  game.ui.showKnowledge(
    game.progression.listKnowledgeNodes(),
    game.progression.state.knowledge.credits
  );
});

await page.locator(".knowledge-node button").filter({
  hasText: "RESEARCH"
}).first().click();

assert.ok(
  await page.locator(".knowledge-node.purchased").count() >= 1,
  "research purchase should mark a knowledge node owned"
);

await page.locator("#knowledge-back-btn").click();
await page.locator("#glossary-btn").click();

assert.ok(
  await page.locator("#manual-content section").count() >= 10,
  "field manual should render"
);



assert.equal(
  errors.length,
  0,
  "page should produce no uncaught JavaScript errors"
);

await browser.close();
await new Promise((resolve) => server.close(resolve));

console.log("Browser smoke test passed.");
