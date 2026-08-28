import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { test } from "node:test";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(join(root, "index.html"), "utf8");
const css = await readFile(join(root, "styles.css"), "utf8");
const script = await readFile(join(root, "script.js"), "utf8");
const contributionArt = await readFile(join(root, "assets/illustrations/contribute-flow.svg"), "utf8");
const ogSource = await readFile(join(root, "assets/og/src/og-default.html"), "utf8");
const ogImage = await readFile(join(root, "assets/og/og-default.png"));

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
  assert.match(html, /<h3>VocaWin<\/h3><p>Unsigned Windows beta/);
  assert.match(html, /unsigned Windows speech-to-text beta/i);
  assert.match(html, /latest tagged v0\.1\.0-beta\.1/);
  assert.doesNotMatch(html, /unsigned Windows alpha/i);
  assert.doesNotMatch(html, /unsigned developer alpha/i);
  assert.doesNotMatch(html, /v0\.1\.0-alpha\.3/);
  assert.match(html, /href="https:\/\/github\.com\/VocaHQ\/vocawin\/releases\/tag\/v0\.1\.0-beta\.1"/);
  assert.doesNotMatch(html, /VocaWin[\s\S]{0,400}coming soon/i);
  assert.doesNotMatch(html, /no public installer/i);
  assert.match(html, /href="https:\/\/vocawin\.com\/"[^>]*>Visit VocaWin/);
  assert.match(html, /href="https:\/\/github\.com\/VocaHQ\/vocawin"/);
  assert.match(html, /VocaPhone[\s\S]{0,900}iOS 17\+ TestFlight/);
  assert.match(html, /testflight\.apple\.com\/join\/wd85wQ3W/);
  assert.match(html, /href="https:\/\/vocaphone\.vocahq\.com\/"[^>]*>Visit VocaPhone/);
  assert.match(html, /href="https:\/\/vocaphone\.vocahq\.com\/iphone\/"[^>]*>iPhone guide/);
  assert.match(html, /href="https:\/\/vocagateway\.vocahq\.com\/"[^>]*>Visit VocaGateway/);
  assert.match(html, /href="https:\/\/github\.com\/VocaHQ\/vocagateway"[^>]*>source/);
  assert.match(html, /id="gateway-card"[\s\S]{0,500}status status-beta/);
  assert.doesNotMatch(html, /id="gateway-card"[\s\S]{0,500}status-early/);
  assert.match(html, /href="https:\/\/github\.com\/VocaHQ\/vocagateway\/releases\/tag\/v0\.1\.0"/);
  assert.match(html, /tagged try v0\.1\.0/);
  assert.doesNotMatch(html, /Early self-hosted gateway/);
  assert.match(html, /VocaGateway is beta self-hosted infrastructure/);
  assert.match(html, /"description": "Beta self-hosted gateway for shared local compute\."/);
});

test("keeps core metadata and schema aligned with the page", () => {
  assert.match(html, /<title>VocaHQ: private speech-to-text across the machines you own<\/title>/);
  assert.match(html, /property="og:title" content="VocaHQ: private speech-to-text across the machines you own"/);
  assert.match(html, /name="twitter:title" content="VocaHQ: private speech-to-text across the machines you own"/);
  assert.match(html, /property="og:image:alt" content="VocaHQ: private speech-to-text across the machines you own"/);
  assert.match(html, /name="twitter:image:alt" content="VocaHQ: private speech-to-text across the machines you own"/);
  assert.doesNotMatch(html, /<title>[^<]*—/);
  assert.match(html, /"name": "VocaGateway", "url": "https:\/\/vocagateway\.vocahq\.com\/"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/vocahq\.com\/"/);
  assert.match(html, /property="og:url" content="https:\/\/vocahq\.com\/"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type": "Organization"/);
  assert.match(html, /"@type": "ItemList"/);
  assert.match(html, /hello@vocahq\.com/);
  assert.match(html, /href="https:\/\/discord\.gg\/t6muquAJbm"/);
  assert.match(html, /href="https:\/\/x\.com\/vocahq"/);
});

test("keeps the hero platform map navigable", () => {
  const heroLinks = [...html.matchAll(/class="ecosystem-hotspot[^"]*" href="([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(heroLinks, [
    "https://vocalinux.com/",
    "https://vocamac.com/",
    "https://vocaphone.vocahq.com",
    "https://vocawin.com/",
    "https://vocagateway.vocahq.com/"
  ]);
  assert.match(html, /<img class="ecosystem-map" src="assets\/illustrations\/voca-ecosystem-map\.png" width="1300" height="1209" alt="[^"]+"/);
  assert.equal((html.match(/class="ecosystem-hotspot ecosystem-hotspot-/g) ?? []).length, 5);
  assert.match(css, /\.ecosystem-map\s*\{[^}]*width:\s*100%[^}]*max-width:\s*100%[^}]*height:\s*auto/);
  assert.doesNotMatch(html, /class="ecosystem-board"[^>]*role="img"/);
});

test("keeps the social card aligned with the hero ecosystem map", () => {
  assert.match(ogSource, /src="\.\.\/\.\.\/illustrations\/voca-ecosystem-map\.png"/);
  assert.doesNotMatch(ogSource, /class="board"/);
  assert.equal(ogImage.readUInt32BE(16), 1200);
  assert.equal(ogImage.readUInt32BE(20), 630);
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
  assert.match(script, /matchMedia\("\(min-width: 1040px\)"\)/);
  assert.match(css, /@media \(min-width: 1040px\)[\s\S]*\.desktop-nav\s*\{\s*display:\s*flex;\s*\}[\s\S]*\.nav-toggle, \.mobile-nav\s*\{\s*display:\s*none;\s*\}/);
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
  assert.match(html, /github\.com\/VocaHQ\/vocawin"/);
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
