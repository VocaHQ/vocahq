# VocaHQ

Headquarters for the Voca family: free, open-source speech-to-text across the
machines people already own.

[![Discord](https://img.shields.io/discord/1538633755877580810?logo=discord&logoColor=white&label=Discord)](https://discord.gg/t6muquAJbm)
[![Follow on X](https://img.shields.io/badge/Follow%20%40vocahq-000000?style=flat&logo=x&logoColor=white)](https://x.com/vocahq)

This repository holds:

- **Public site** (`web/`) — [vocahq.com](https://vocahq.com)
- **Shared product truth** (`PRODUCT.md`) for the org and contributors
- The GitHub Pages workflow and shared Voca brand assets

## Local preview and checks

```bash
cd web
npm test
python3 -m http.server 8080
```

The page is dependency-free at runtime. The static test suite checks the
verified product matrix, metadata, local assets, accessible components,
optional-gateway wording, in-page links, and responsive-story invariants.

## Product matrix

| Product | Status | Primary action |
| --- | --- | --- |
| [VocaLinux](https://vocalinux.com/) | Available now | [Product site](https://vocalinux.com/) |
| [VocaMac](https://vocamac.com/) | Beta | [Product site](https://vocamac.com/) |
| [VocaWin](https://vocawin.com/) | Beta | latest tagged `v0.1.0-beta.1` · [Product site](https://vocawin.com/) |
| [VocaPhone](https://vocaphone.vocahq.com) | Android beta / iOS source build | [Product site](https://vocaphone.vocahq.com) |
| [VocaGateway](https://github.com/VocaHQ/vocagateway) | Early | [Deployment guide](https://github.com/VocaHQ/vocagateway) |

See [PRODUCT.md](./PRODUCT.md) for requirements, licenses, and the distinction
between on-device and optional gateway processing.

## GitHub Pages

The site is the `web/` folder. Pull requests run the `verify` job; pushes to
`main` verify and deploy through `.github/workflows/pages.yml`. The custom
domain is retained in `web/CNAME`.

## Community

Join [Discord](https://discord.gg/t6muquAJbm) if you want to contribute, give
feedback, or help build the family with us. Follow [@vocahq](https://x.com/vocahq)
on X for release notes and product updates.

## License

See [LICENSE](./LICENSE) for this repository's AGPL-3.0 license. Product
licenses are named individually in [PRODUCT.md](./PRODUCT.md).
