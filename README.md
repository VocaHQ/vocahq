# VocaHQ

Headquarters for the Voca ecosystem: free, open-source, offline voice dictation across the machines you own.

This repository holds:

- **Public site** (`web/`) — [vocahq.com](https://vocahq.com)
- **Shared product truth** (`PRODUCT.md`) for the org and agents
- Room for shared issues, docs, and ecosystem concerns as the HQ grows

Product code lives in sibling repos under [github.com/VocaHQ](https://github.com/VocaHQ).

## Layout

```text
.
├── PRODUCT.md                 # Durable product truth for the org
├── LICENSE
├── README.md                  # You are here
├── .github/workflows/         # Pages deploy + future automation
└── web/                       # Static site (GitHub Pages artifact root)
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── CNAME                  # vocahq.com
    ├── DESIGN.md              # Site visual system
    └── assets/
        ├── brand/             # Official product / org brand packs
        │   └── vocaphone/
        └── icons/             # Platform marks (Simple Icons, etc.)
```

## Local preview

Serve the site from `web/`:

```bash
cd web
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

## GitHub Pages

The site is the `web/` folder. CI behavior:

- **Pull requests:** `verify` job only (file/path checks; no deploy)
- **Push to `main`:** `verify` then deploy to GitHub Pages

Workflow: `.github/workflows/pages.yml`.

1. **Settings → Pages**
2. Source: **GitHub Actions**
3. Custom domain: `vocahq.com` (`web/CNAME` is included)

After the first merge to `main`, confirm the deploy job succeeds and DNS for the custom domain.

## Ecosystem

| Platform | Project | Site | Status |
| -------- | ------- | ---- | ------ |
| Linux | [VocaLinux](https://github.com/VocaHQ/vocalinux) | [vocalinux.com](https://vocalinux.com) | Stable |
| macOS | [VocaMac](https://github.com/VocaHQ/vocamac) | [vocamac.com](https://vocamac.com) | Beta |
| Windows | [VocaWin](https://github.com/VocaHQ/vocawin) | [vocawin.com](https://vocawin.com) | Coming soon |
| iOS / Android | [VocaPhone](https://github.com/VocaHQ/vocaphone) | — | In development |
| Gateway | [VocaGateway](https://github.com/VocaHQ/vocagateway) | — | Early |

## Contact

[hello@vocahq.com](mailto:hello@vocahq.com) · [github.com/VocaHQ](https://github.com/VocaHQ)

## License

See [LICENSE](LICENSE) (AGPL-3.0). Shipping product repos are generally AGPL-3.0; check each project for its LICENSE file.
