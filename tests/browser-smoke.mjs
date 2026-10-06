import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push("console: " + message.text());
});

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });

assert.equal(await page.locator("#gameCanvas").count(), 1);
assert.equal(await page.locator("#towerPalette .tower-button").count(), 26);
assert.equal(await page.locator("#stageOverlay").isVisible(), true);

await page.locator("#startGameButton").click();
await page.waitForTimeout(150);
assert.equal(await page.locator("#stageOverlay").isVisible(), false);
assert.equal(await page.locator("#waveValue").textContent(), "0 / 150");

const canvas = page.locator("#gameCanvas");
const box = await canvas.boundingBox();
assert.ok(box);

await page.locator("#towerPalette .tower-button").first().click();
const buildPoint = { x: box.x + box.width * 0.78, y: box.y + box.height * 0.18 };
await page.mouse.click(buildPoint.x, buildPoint.y);
await page.waitForTimeout(100);

const towerCountAfterPlacement = await page.evaluate(() => {
  const raw = localStorage.getItem("skyfront-dominion-save-v1");
  return raw ? JSON.parse(raw).currentRun?.towers?.length ?? -1 : -1;
});
assert.ok(towerCountAfterPlacement >= 1, "Placement did not reach persisted run state.");

await page.mouse.click(buildPoint.x, buildPoint.y);
await page.waitForTimeout(100);
assert.equal(await page.locator("#selectedTowerPanel").isVisible(), true);
assert.match(await page.locator("#selectedTowerName").textContent(), /Sentinel/);

const upgrade = page.locator("#path0 .upgrade-button").first();
assert.equal(await upgrade.isEnabled(), true);
await upgrade.click();
await page.waitForTimeout(80);
assert.match(await page.locator("#selectedTowerStats").textContent(), /Damage/);

await page.locator('[data-target="strongest"]').click();
assert.match(await page.locator(".target-button.active").textContent(), /Strong/);

await page.locator("#startWaveButton").click();
await page.waitForTimeout(300);
assert.equal(await page.locator("#waveValue").textContent(), "1 / 150");

await page.locator("#pauseButton").click();
assert.equal(await page.locator("#pauseButton").textContent(), "Resume");
await page.locator("#pauseButton").click();
assert.equal(await page.locator("#pauseButton").textContent(), "Pause");

await page.locator("#speedButton").click();
assert.equal(await page.locator("#speedLabel").textContent(), "2×");
await page.locator("#speedButton").click();
assert.equal(await page.locator("#speedLabel").textContent(), "3×");

await page.locator("#rangeButton").click();
assert.match(await page.locator("#rangeButton").textContent(), /Ranges: ON/);

await page.locator("#closeSelectionButton").click();
assert.equal(await page.locator("#selectedTowerPanel").isVisible(), false);

assert.equal(errors.length, 0, errors.join("\n"));
await browser.close();

console.log("PASS: Chromium application load");
console.log("PASS: palette rendering");
console.log("PASS: campaign start");
console.log("PASS: tower placement");
console.log("PASS: persistence write");
console.log("PASS: tower selection");
console.log("PASS: upgrade interaction");
console.log("PASS: targeting interaction");
console.log("PASS: wave deployment");
console.log("PASS: pause/resume");
console.log("PASS: speed control");
console.log("PASS: range toggle");
console.log("PASS: no browser runtime errors");
console.log("Skyfront Dominion browser smoke suite passed.");
