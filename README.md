# VocaHQ

Landing page, shared assets, and org-level material for **[vocahq.com](https://vocahq.com)**.

VocaHQ is the shared home for the Voca family: free, open-source, offline voice dictation for Linux, macOS, Windows, and phone.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Or any static file server from the repo root.

## GitHub Pages

This site is static HTML/CSS/JS at the repo root, intended for GitHub Pages on **vocahq.com**.

1. In the repo: **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `landing-page` (or `main` once merged), folder `/ (root)`
4. Custom domain: `vocahq.com` (the `CNAME` file is already in the repo)

DNS at your registrar should point to GitHub Pages (A/AAAA or CNAME per [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## Projects

| Platform | Project | Site | Status |
| -------- | ------- | ---- | ------ |
| Linux | [VocaLinux](https://github.com/VocaHQ/vocalinux) | [vocalinux.com](https://vocalinux.com) | Stable |
| macOS | [VocaMac](https://github.com/VocaHQ/vocamac) | [vocamac.com](https://vocamac.com) | Beta |
| Windows | [VocaWin](https://github.com/VocaHQ/vocawin) | [vocawin.com](https://vocawin.com) | Coming soon |
| iOS / Android | [vocaphone](https://github.com/VocaHQ/vocaphone) | — | In development |
| Server | [vocaserver](https://github.com/VocaHQ/vocaserver) | — | Early |

## Contact

[hello@vocahq.com](mailto:hello@vocahq.com) · [github.com/VocaHQ](https://github.com/VocaHQ)

## License

Site and shared materials in this repo: see [LICENSE](LICENSE) (AGPL-3.0). Individual product repos may use AGPL or GPL as noted in each project.
