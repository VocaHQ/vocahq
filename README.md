# VocaHQ

Landing page and shared assets for [vocahq.com](https://vocahq.com).

VocaHQ is the shared home for free, open source, offline voice dictation on Linux, macOS, Windows, and phone.

## Design context

This site follows [Impeccable](https://github.com/pbakaus/impeccable) project context:

- `PRODUCT.md` — product truth
- `DESIGN.md` — local signal desk visual system

Install design tooling in this repo with:

```bash
npx impeccable install --providers=grok --scope=project
```

## Local preview

From this directory (or the `vocahq-landing` worktree):

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

## GitHub Pages

Static HTML/CSS/JS at the repo root, custom domain `vocahq.com` (`CNAME` included).

1. **Settings → Pages**
2. Deploy from branch (`landing-page` while iterating, or `main` once merged), folder `/ (root)`
3. Custom domain: `vocahq.com`

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

See [LICENSE](LICENSE) (AGPL-3.0). Individual product repos may use AGPL or GPL as noted in each project.
