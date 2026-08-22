# Agent instructions

This is the VocaHQ headquarters repository: the public static site at
[vocahq.com](https://vocahq.com) (`web/`), shared product truth
([PRODUCT.md](./PRODUCT.md)), GitHub Pages workflow, and brand assets. It is
not an application, installer, or hosted Voca cloud.

[PRODUCT.md](./PRODUCT.md) is the source of truth for claims, status,
licenses, and processing paths. Do not invent features, user counts,
benchmarks, signed Windows builds, Store listings, or a Voca-operated cloud.

## Critical: git worktrees for every branch and PR

Never create a branch, commit, or open a pull request in the primary checkout. Always use a linked git worktree so the main working tree stays on `main` and stays clean. Do not `git switch` / `git checkout` a feature branch in the primary directory, and do not leave it dirty.

```bash
git fetch origin
git worktree add /tmp/vocahq-<task> -b <type>/<short-name> origin/main

# All edits, commits, and `gh pr create` happen inside that worktree.

git worktree remove /tmp/vocahq-<task>
git worktree prune
```

Rules:

- One worktree per branch, one branch per PR
- Place worktrees **outside** the primary working tree (`/tmp/vocahq-<task>` or a sibling directory such as `../.worktrees/vocahq-<task>`)
- Never run two tasks in the same worktree
- Never commit directly to `main`
- Clean up the worktree after the PR is pushed

## Layout

| Path | Role |
| --- | --- |
| `PRODUCT.md` | Verified product matrix, licenses, constraints |
| `web/` | Static site (HTML/CSS/JS; no runtime dependencies) |
| `web/DESIGN.md` | Visual language and composition rules |
| `web/tests/site.test.mjs` | Product-truth and invariant checks |
| `.github/workflows/pages.yml` | PR verify; deploy `web/` from `main` |
| `LICENSE` | AGPL-3.0 for this repository |

Product licenses are named per project in `PRODUCT.md`.

## Sibling products

Link to these; do not describe how to build them here. Status and licenses
belong in `PRODUCT.md`.

| Product | Site | Source |
| --- | --- | --- |
| VocaLinux | [vocalinux.com](https://vocalinux.com/) | [VocaHQ/vocalinux](https://github.com/VocaHQ/vocalinux) |
| VocaMac | [vocamac.com](https://vocamac.com/) | [VocaHQ/vocamac](https://github.com/VocaHQ/vocamac) |
| VocaWin | [vocawin.com](https://vocawin.com/) | [VocaHQ/vocawin](https://github.com/VocaHQ/vocawin) |
| VocaPhone | [vocaphone.vocahq.com](https://vocaphone.vocahq.com) | [VocaHQ/vocaphone](https://github.com/VocaHQ/vocaphone) |
| VocaGateway | [vocagateway.vocahq.com](https://vocagateway.vocahq.com/) | [VocaHQ/vocagateway](https://github.com/VocaHQ/vocagateway) |

## Local preview and checks

```bash
cd web
npm test
python3 -m http.server 8080
```

`npm test` runs `node --test tests/site.test.mjs`. The suite checks the
verified product matrix, metadata, local assets, accessible components,
optional-gateway wording, in-page links, and responsive-story invariants.

Optional validators (also used in CI):

```bash
npx --yes html-validate@9 index.html
npx --yes stylelint@16 --config stylelint.config.mjs styles.css
```

Preview at `http://127.0.0.1:8080/`. Spot-check 390px, 768px, 1440px, and a
wide desktop viewport.

## GitHub Pages

- The published site is the `web/` folder. Custom domain: `web/CNAME` (`vocahq.com`).
- PRs that touch `web/**` or `.github/workflows/pages.yml` run the `verify` job.
- Pushes to `main` verify, then deploy `web/` through `.github/workflows/pages.yml`.
- Preserve `web/CNAME`, canonical/OG metadata, `robots.txt`, `sitemap.xml`, and
  the Pages boundary. Do not add Netlify, Vercel, or Cloudflare Pages config.

## Content and design

Follow `PRODUCT.md` and `web/DESIGN.md`.

- On-device processing is the default. Configured VocaGateway is optional,
  self-hosted, and **not** on-device: audio leaves the client for the machine
  the user selected. Recommend a trusted LAN, encrypted private network, or HTTPS.
- Visitor copy: "speech-to-text model," not unexplained engine names.
- Say "free and open source," not "free forever."
- Do not hard-code star counts or other fast-changing metrics.
- Keep the runtime dependency-free. Checks may use Node’s standard library.
- No CSS gradients. Keep skip link, landmarks, visible focus, keyboard nav,
  Escape-to-close mobile nav with focus return, reduced-motion handling, and
  native FAQ `<details>` (usable without JavaScript).

## Git and pull requests

- Conventional commits (`docs:`, `fix:`, `chore:`, ...).
- Never commit or push to `main`.
- Open PRs with `gh pr create` against `main`.
- Do not merge PRs yourself.
- Clean up the worktree after the PR is pushed.
