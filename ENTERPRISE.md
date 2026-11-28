# Enterprise

This note is the family strategy for trust, monetization, and what we protect.
It is for contributors and future maintainers.
Product status, licenses, and live claims live in PRODUCT.md. Do not invent or restate them here.
VISION.md is the acceptance policy for what stays on mission.

## What the moat is

Speech-to-text model weights are not the moat. Whisper-class engines and similar stacks are commodity. A clone can ship hotkey-to-text without becoming Voca.

What can compound:

1. Trust and honesty. No required Voca account. Named licenses. Explicit network boundaries. Fail-closed pinned models. PRODUCT.md as public status truth. A SaaS dictation clone cannot fake that without becoming Voca-shaped.
2. The cross-platform family. Linux, macOS, Windows, phone, and optional Gateway under one HQ story. Most competitors are Mac-first or single-runtime.
3. Cursor insertion as the product. Native insert over a clipboard bus. Rule-based on-device cleanup that does not invent words. Depth here is sticky UX, not marketing.
4. Gateway as a LAN and self-host wedge. A shared box the user owns, for Phone pairing and later desktops. That is infra, pairing, and trust, not a checkbox.
5. AGPL network copyleft. It raises the cost of forking, modifying, and offering a competing network service without sharing. That is friction for cloud resellers, not a consumer moat by itself.
6. Shipping cadence across the family. Many surfaces create integration debt for clones, but only if quality and honesty stay high. Velocity without trust burns the brand.

What does not compound if we break it: closing source casually, requiring accounts for core dictation, hosting audio without a sharp product and legal split, or an open-core move that guts the free path. Treat hard "production private, hobby fork" splits as a cautionary tale, not a template.

Bottom line: the moat is privacy trust, platform coverage, Gateway LAN topology, and AGPL friction for hosted clones. Not model weights. Not feature count alone.

## Monetization ranks

Rank means fit to VISION, AGPL, no required account, and the ability to learn without fabricating demand.

### Rank A: paid Gateway support (primary near-term)

Paid help around install, harden, Tailscale or HTTPS setup, MDM packaging, signed-build consulting, SLA email, and security questionnaires.

It fits AGPL and no account. It does not require relicensing. Enterprises already buy "someone owns this." It aligns with the self-host story.

It does not scale like SaaS. It needs founder time or a partner. Do not imply support is required for the OSS product to work.

### Rank A-: additive commercial dual-license (medium term)

Keep the free path usable. A commercial license can lift AGPL copyleft for orgs that need it, and can unlock additive enterprise modules (SSO into Gateway WebUI, audit logs, multi-seat admin, MDM or config profiles, commercial redistribution for ISVs, air-gap packaging).

Stay additive. Enterprise adds. It does not throttle the open binary or gut on-device dictation. Do not require a Voca account for on-device speech-to-text. Draft commercial outlines privately and get a lawyer pass before any public EE announcement. A full production-private close with a hobby OSS fork is too early and off-mission for the honesty brand.

### Per-seat on Gateway fleets, not personal dictation

When seats exist, charge org seats or concurrent Gateway clients for commercial rights and EE, not for the right to speak into a text field on a personal laptop.

That maps to "the team shares a Gateway on a beefy box." Core apps should stay AGPL-runnable without a license wall on basic on-device dictation. Prefer seat or concurrent limits on Gateway admin over billing theater.

### BYOK is optional and weak revenue

Bring-your-own-key for optional cloud helpers can be a competitive checkbox. Users pay the provider, not Voca. Little Voca revenue unless a thin paid convenience layer appears later.

Keep it optional, clearly labeled, and off by default. Prefer non-STT helpers over BYOK cloud speech-to-text if anything is offered. Cloud STT BYOK dilutes the privacy story even with consent. Do not build a Voca-hosted proxy that sees audio. That becomes hosted speech-to-text. BYOK must not rewrite transcripts against the VISION cleanup rules.

### One-time and donation are weak

Pay-once or donation can fund notarization and signed builds and stays friendly to OSS ethos. It is unpredictable. Enterprises prefer subscription or PO. Donation without entitlement is gratitude, not a sales motion or a moat. Keep it truly optional and unlock convenience, not rights users already have under AGPL.

### Hosted Voca speech-to-text is off mission

VISION forbids a hosted Voca speech cloud and a Voca-operated relay. A multi-tenant STT SKU is a trust nuke and a compliance surface.

Managed install on the customer's own cloud or VPC is services, not a hosted Gateway product. Audio stays in their tenancy.

## Desktop-embedded Gateway as the wedge

Treat desktop-embedded Gateway as distribution and monetization spine, not a sidebar.

Phone QR pairing already points at one trusted machine. Desktop apps that can stand up Gateway and expose a local speech-to-text server turn a beefy Mac or Linux box into a family node. The enterprise story is simple: IT stands up one Gateway (or N), seats connect, audio stays on org hardware.

Monetize the ops and rights around that node (support, SSO, audit, commercial redistribution), not hobbyist transcription. Do not market desktop-launched Gateway until PRODUCT.md and VISION Planned status say it ships. Honesty is part of the moat.

## Ninety-day support pilots

Near-term experiment: harden toward the Gateway wedge with clear "not on-device" copy and trusted-network docs. Publish a plain teams story: self-host Gateway, AGPL clients, optional paid onboarding and support. No account required for OSS use.

Run a small set of design-partner conversations. Offer fixed-price setup plus ninety days of Slack or email support. Learn willingness to pay and which EE features partners name unprompted (SSO, audit, MDM, air-gap). Draft a commercial license outline privately. Do not announce EE until legal review. Do not launch hosted Voca speech-to-text or required accounts.

Qualitative success signals: partners complete install without hand-holding, at least one pays a support invoice, the same two or three EE asks recur, and there is no community flare over bait and switch.

If enterprise conversations stall, fall back to optional paid convenience only (signed or notarized installers, maybe donation). Keep source AGPL. Pair BYOK only if it stays optional and does not rewrite transcripts.

## One line

Keep OSS trust and no-account on-device sacred. Monetize the Gateway fleet wedge with support now and additive commercial EE later. Skip hosted Voca speech-to-text.
