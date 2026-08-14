import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { test } from "node:test";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(join(root, "index.html"), "utf8");
const css = await readFile(join(root, "styles.css"), "utf8");
const script = await readFile(join(root, "script.js"), "utf8");
const contributionArt = await readFile(join(root, "assets/illustrations/contribute-flow.svg"), "utf8");

const localAssetPaths = [...html.matchAll(/(?:src|href)="(assets\/[^"#?]+)"/g)].map((match) => match[1]);
const rootAssetPaths = [...html.matchAll(/(?:src|href)="((?:assets\/|favicon\.ico)[^"#?]*)"/g)].map((match) => match[1]);
const cssAssetPaths = [...css.matchAll(/url\("(assets\/[^"?]+)"\)/g)].map((match) => match[1]);
const internalHashes = [...html.matchAll(/(?:href|aria-describedby)="#([a-z0-9-]+)"/gi)].map((match) => match[1]);
const ids = [...html.matchAll(/\sid="([a-z0-9-]+)"/gi)].map((match) => match[1]);

test("keeps the page's product promises scoped and current", () => {
  assert.match(html, /free and open-source speech-to-text/i);
  assert.match(html, /on-device/i);
  assert.match(html, /gateway.*optional|optional.*gateway/i);
  assert.match(html, /audio leaves the client|audio.*gateway/i);
  assert.match(html, /trusted LAN|encrypted private network|HTTPS/i);
  assert.doesNotMatch(html, /free forever/i);
  assert.doesNotMatch(html, /audio stays on your device(?![\s\S]{0,120}(?:on-device|gateway))/i);
  assert.match(html, /VocaWin[\s\S]{0,500}coming soon/i);
  assert.match(html, /VocaPhone[\s\S]{0,900}(?:Android beta|iOS source)/i);
  assert.match(html, /href="https:\/\/vocaphone\.vocahq\.com\/iphone\/"[^>]*>iPhone guide/);
});

test("keeps core metadata and schema aligned with the page", () => {
  assert.match(html, /<title>VocaHQ — private speech-to-text, across the machines you own<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/vocahq\.com\/"/);
  assert.match(html, /property="og:url" content="https:\/\/vocahq\.com\/"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type": "Organization"/);
  assert.match(html, /"@type": "ItemList"/);
  assert.match(html, /hello@vocahq\.com/);
});

test("keeps the hero platform map navigable", () => {
  const heroLinks = [...html.matchAll(/class="(?:board-window|board-gateway)[^"]*" href="([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(heroLinks, [
    "https://vocalinux.com/",
    "https://vocamac.com/",
    "https://vocaphone.vocahq.com",
    "https://vocawin.com/",
    "https://github.com/VocaHQ/vocagateway"
  ]);
  assert.equal((html.match(/class="board-link-arrow"/g) ?? []).length, 5);
  assert.equal((html.match(/class="board-connector board-connector-/g) ?? []).length, 2);
  assert.match(css, /\.board-connector-desktop\s*\{\s*display:\s*none/);
  assert.match(css, /@media \(min-width:\s*800px\)[\s\S]*\.board-connector-mobile\s*\{\s*display:\s*none/);
  assert.doesNotMatch(html, /class="ecosystem-board"[^>]*role="img"/);
});

test("references only existing local assets", async () => {
  for (const asset of [...rootAssetPaths, ...cssAssetPaths]) {
    await access(join(root, asset));
  }
  assert.ok(cssAssetPaths.includes("assets/brand/paper-dots.svg"));
  assert.ok(rootAssetPaths.includes("favicon.ico"));
  assert.ok(localAssetPaths.includes("assets/illustrations/contribute-flow.svg"));
  assert.match(html, /contribute-flow\.svg/);
  assert.doesNotMatch(html, /Not a concept\. A workbench\./i);
  assert.doesNotMatch(html, /class="evidence-section"/i);
});

test("has unique ids and resolvable in-page links", () => {
  assert.equal(new Set(ids).size, ids.length, "duplicate id found");
  for (const hash of internalHashes) {
    assert.ok(ids.includes(hash), `missing in-page target #${hash}`);
  }
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, "page must have one h1");
  assert.match(html, /class="skip-link" href="#main"/);
  assert.match(html, /<main id="main">/);
});

test("preserves accessible no-script fallbacks and behavior hooks", () => {
  assert.match(html, /<details\b/g);
  assert.match(html, /<summary\b/g);
  assert.match(html, /aria-hidden="true"/);
  assert.match(html, /data-nav-toggle/);
  assert.match(html, /data-mobile-nav/);
  assert.match(script, /Escape/);
  assert.match(script, /prefers-reduced-motion/);
  assert.match(script, /IntersectionObserver/);
  assert.match(script, /setTimeout\(\(\) => revealItems\.forEach\(reveal\), 800\)/);
});

test("keeps the three numbered stories in normal flow", () => {
  assert.equal((html.match(/data-flow-story/g) ?? []).length, 3);
  assert.equal((html.match(/class="story-index"/g) ?? []).length, 3);
  assert.doesNotMatch(css, /\.story-index\s*\{[^}]*position\s*:\s*absolute/i);
  assert.match(css, /\.story-row\s*\{[^}]*display\s*:\s*grid/i);
});

test("keeps the visual and hosting boundaries explicit", () => {
  assert.doesNotMatch(css, /gradient/i);
  assert.doesNotMatch(html, /netlify|vercel|cloudflare pages/i);
  assert.doesNotMatch(html, /github\.com\/VocaHQ\/vocawin[^<]{0,100}release/i);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /overflow-x:\s*hidden/);
});

test("keeps the contribution illustration stable and fully framed", () => {
  assert.match(contributionArt, /preserveAspectRatio="xMidYMid meet"/);
  assert.match(contributionArt, /style="overflow: visible"/);
  assert.doesNotMatch(contributionArt, /@keyframes float|class="float/);
  assert.match(contributionArt, /<g transform="rotate\(4 515 126\)">[\s\S]*ready for review/);
  assert.doesNotMatch(contributionArt, /<text[^>]+transform=[^>]*>ready for review/);
  assert.doesNotMatch(contributionArt, /OPEN SOURCE/);
  assert.match(html, /class="contribute-stamp"[\s\S]*BUILT IN PUBLIC/);
  assert.match(contributionArt, /ship the idea/);
});
