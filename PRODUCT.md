# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who type a lot on real desktops and phones and want private
speech-to-text that lands in the field they are already using. Secondary:
contributors comparing the Voca projects and people who want to run a shared
local gateway on hardware they control.

Situation: mid-task in another app (editor, browser, chat, terminal, or phone
keyboard). Job: speak, get text into the focused field, and understand where
the audio and speech-to-text model ran.

## Product Purpose

VocaHQ is the shared home for the Voca family: free, open-source speech-to-text
apps for Linux, macOS, Windows, iPhone, and Android. The headquarters site
explains the two supported paths, records honest project status, and routes
people to the right product repository or official product site.

## Positioning

One privacy bar across the machines people already own. On-device processing
is the default story; VocaGateway is an optional self-hosted path for shared or
larger compute. VocaHQ does not require a Voca account, sell a hosted cloud, or
claim that gateway mode is on-device.

## Current Product Truth

Verified 2026-08-14 against the current public repositories, release metadata,
official product sites where available, and the VocaPhone production website
source checkout.

| Product | Status | Runs on / verified facts | Action | License |
| --- | --- | --- | --- | --- |
| [VocaLinux](https://vocalinux.com/) | Available now | Linux on X11 or Wayland; whisper.cpp, Whisper, or VOSK; current release `v0.15.0` | [Product site](https://vocalinux.com/) · [Source](https://github.com/VocaHQ/vocalinux) | AGPL-3.0 |
| [VocaMac](https://vocamac.com/) | Beta | macOS 14+ on Apple Silicon; WhisperKit / Core ML; Homebrew or DMG | [Product site](https://vocamac.com/) · [Source](https://github.com/VocaHQ/vocamac) | AGPL-3.0 |
| VocaWin | Coming soon | Windows-first Tauri foundation exists, but there is no public installer or release yet | [Status site](https://vocawin.com/) · [Source](https://github.com/VocaHQ/vocawin) | AGPL-3.0-or-later in the repository |
| [VocaPhone](https://vocaphone.vocahq.com) | Android beta / iOS source build | Android 13+ public beta; iOS 17+ build from source with a Mac, Xcode, signing team, and physical iPhone; gateway optional | [Product site](https://vocaphone.vocahq.com) · [Android releases](https://github.com/VocaHQ/vocaphone/releases) · [iPhone guide](https://vocaphone.vocahq.com/iphone/) · [Source](https://github.com/VocaHQ/vocaphone) | AGPL-3.0 |
| [VocaGateway](https://github.com/VocaHQ/vocagateway) | Early | Self-host on macOS or Linux, or use Docker Compose on Linux `amd64`/`arm64`; authenticated WebUI and QR pairing | [Source and deployment guide](https://github.com/VocaHQ/vocagateway) | AGPL-3.0 |

## Two Processing Paths

### On-device

After a model is downloaded, supported on-device modes keep the speech-to-text
model and audio processing on the phone or computer. A gateway is not required
for this path.

### Optional VocaGateway

When someone deliberately configures VocaGateway, audio leaves the client and
travels to the self-hosted machine they selected. The gateway runs a local
speech engine and returns the transcript. Recommend a trusted LAN, an
encrypted private network such as Tailscale, or HTTPS. Do not describe this
path as on-device.

## Product Principles

1. On-device speech-to-text first.
2. Free and open source, with the actual license named per project.
3. Text lands where the user is already typing when the platform allows it.
4. No required Voca account.
5. Honest platform status and explicit network boundaries.
6. Built in public, with contributions welcome.

## Constraints

- This repository is a static GitHub Pages site, not an installer.
- Preserve `web/CNAME`, canonical metadata, robots, sitemap, Open Graph assets,
  and the existing Pages deployment boundary.
- Do not fabricate VocaWin screenshots, release assets, customer proof,
  benchmarks, usage numbers, or feature parity.
- Do not hard-code star counts or other fast-changing metrics.
- Use “speech-to-text model” in visitor copy; engine names belong in concise
  requirements or source links.
- Keep the runtime dependency-free. Build checks may use Node's standard
  library and optional local validators.

## Accessibility

The site must retain a skip link, landmarks, visible focus, keyboard navigation,
Escape-to-close mobile navigation with focus return, reduced-motion handling,
usable native FAQ disclosure without JavaScript, and no decorative control that
pretends to be interactive.
