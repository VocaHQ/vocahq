# vocahq.com

Static GitHub Pages site for the VocaHQ ecosystem homepage.

## Local checks

```bash
cd web
npm test
npx --yes html-validate@9 index.html
npx --yes stylelint@16 --config stylelint.config.mjs styles.css
```

The checks use Node's standard library and cover product truth, local assets,
metadata, unique IDs, in-page links, no-gradient/no-Netlify boundaries,
optional-gateway wording, and the three in-flow story rows.

For a browser review:

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/` and check 390px, 768px, 1440px, and a wide
desktop viewport. Confirm no horizontal overflow, decoded images, visible
reveal content, no console errors, keyboard navigation, mobile-menu focus
return, FAQ disclosure, and reduced-motion behavior.

## Product language

The product availability language is maintained in [`../PRODUCT.md`](../PRODUCT.md).
Gateway remains represented with code-native diagrams so the page explains the
network boundary without implying a hosted Voca cloud.

## Deployment

The repository-root workflow publishes `web/` to GitHub Pages only after a
push to `main`. `CNAME` remains `vocahq.com`. There is no Netlify or alternate
hosting configuration.
