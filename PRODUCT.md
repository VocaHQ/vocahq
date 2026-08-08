# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who type a lot on real desktops (Linux, macOS, Windows) and want voice dictation that stays on the machine. Developers, writers, accessibility users, privacy-conscious power users. Secondary: contributors evaluating the open-source projects; people on phone who want the same offline idea later.

Situation: mid-task in another app (editor, browser, chat, terminal). Job: get words into the focused field without leaving the machine or signing up for a cloud service.

## Product Purpose

VocaHQ is the shared home for the Voca family of apps: offline, open-source voice dictation across platforms. Hold a hotkey, speak, text appears at the cursor. Success means a visitor can name the platform they use, open the right project, and understand that audio stays local.

This site (vocahq.com) explains the org, lists projects, states principles and plans, and routes people to product sites and GitHub.

## Positioning

Same privacy-first offline dictation idea on every platform you actually own, free and open source, with no accounts and no freemium trap. Differentiator is cross-platform parity under one org, not a single OS gadget.

## Operating Context

- Org: [github.com/VocaHQ](https://github.com/VocaHQ)
- Domain: vocahq.com (GitHub Pages)
- Contact: hello@vocahq.com
- Sister product sites: vocalinux.com, vocamac.com, vocawin.com
- Install paths live on product sites (Homebrew, curl installers, DMGs), not on this landing page

## Capabilities and Constraints

Projects (status from org profile):

| Platform | Project | Status |
| -------- | ------- | ------ |
| Linux | VocaLinux | Stable (~724★) |
| macOS | VocaMac | Beta (~75★) |
| Windows | VocaWin | Coming soon |
| iOS / Android | vocaphone | In development |
| Gateway | vocagateway | Early (headless, set up once / run everywhere) |

Also: homebrew-vocamac tap. This repo is static landing + assets. Shipping product repos use AGPL-3.0; VocaWin is still pre-license "coming soon." No telemetry claims for local engines. Do not invent pricing, customers, benchmarks, or unreleased features.

## Brand Commitments

- Name: VocaHQ / Voca family (VocaLinux, VocaMac, VocaWin, VocaPhone, VocaGateway)
- Logo: brand marks under brand/vocaphone/ (play-store mark for chrome, circular logo for favicon)
- Voice of the org profile: plain, direct, slightly warm; "To infinity and beyond!"; "Building this for the last 15 months has been an absolute joy"
- Free forever, offline/privacy first, open source

## Evidence on Hand

- Org profile README and repo descriptions
- Product marketing sites for Linux/Mac/Win
- Brand pack: `brand/vocaphone/` (mark, logo SVG/PNG, app icon, play store art) from PR #1
- Platform icons: Simple Icons SVGs under `assets/icons/`
- No other product brand packs or screenshots in-repo yet
- Do not fabricate testimonials, star counts beyond known public numbers, or press quotes

## Product Principles

1. Offline by default; local engines process speech on-device
2. Free and open source with no account wall
3. System-wide: text lands where the cursor is, not only in one app
4. Feature parity over time across platforms under one org
5. Honest status labels (stable / beta / coming soon / early)

## Accessibility & Inclusion

Marketing site should meet sensible web a11y: keyboard nav, focus styles, contrast, skip link, reduced-motion respect. Product apps have their own a11y needs; this page is the entry point.
