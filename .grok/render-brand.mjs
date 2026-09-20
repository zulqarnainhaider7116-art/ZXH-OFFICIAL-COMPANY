import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const grok = "/workspace/.grok";

const browser = await chromium.launch({ args: ["--disable-dev-shm-usage"] });

async function shot(pagePath, outPath, { width, height, scale = 1 }) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: scale,
  });
  await page.goto(pathToFileURL(join(grok, pagePath)).href, {
    waitUntil: "networkidle",
    timeout: 30000,
  });
  await page.waitForTimeout(250);
  await page.screenshot({ path: join(grok, outPath), type: "png" });
  await page.close();
}

await shot("og-card.html", "og-raw.png", { width: 1200, height: 630, scale: 1 });
await shot("icon-frame.html", "icon-192-raw.png", { width: 192, height: 192, scale: 1 });
await shot("icon-frame.html", "icon-512-raw.png", { width: 512, height: 512, scale: 1 });

await browser.close();
console.log("rendered og-raw.png icon-192-raw.png icon-512-raw.png");
