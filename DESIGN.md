---
name: VocaHQ
description: Local signal desk for offline voice dictation across every machine you own
colors:
  ink: "#e6f4ef"
  ink-muted: "#9ec4b8"
  ink-faint: "#6f9489"
  desk: "#0a1412"
  desk-raised: "#12201c"
  desk-panel: "#173028"
  teal: "#2ec4a0"
  teal-bright: "#5eecc8"
  teal-deep: "#0d7a62"
  amber-status: "#e8b84a"
  sky-status: "#6ec8e8"
  violet-status: "#b8a0f0"
  line: "#2a4a42"
typography:
  display:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "18px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.desk}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.teal-bright}"
    textColor: "{colors.desk}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
---

# Design System: VocaHQ

## Overview

**Creative North Star: "The local signal desk"**

The site feels like a late-night desk where a field recorder and a waveform strip chart sit next to your keyboard. Your voice shows up as a local signal you can see: it never leaves the machine. Teal from the mic logo is the ink of that signal, drawn on a deep green-black desk ground (not pure black, not purple SaaS night).

Hierarchy comes from scale and density, not from nested cards. Platforms read as mixer channels on a shared strip. Status is a small LED, not a marketing badge farm. One authored motion: the hero waveform breathing while idle.

**Key Characteristics:**
- Graphite-teal desk, committed teal accent from the org logo
- Waveform as product proof, not decoration
- Channel-strip layout for projects instead of equal marketing cards
- Atkinson Hyperlegible body type for readability; Epilogue for display
- No purple gradients, no Inter, no eyebrow kickers

## Colors

Palette is desk green-black with teal signal ink. Status colors are subordinate LEDs.

### Primary
- **Signal Teal** (#2ec4a0): primary actions, waveform, active channel marks
- **Signal Bright** (#5eecc8): hover / live glow
- **Signal Deep** (#0d7a62): pressed / deep fills

### Neutral
- **Desk** (#0a1412): page ground
- **Desk Raised** (#12201c): panels
- **Desk Panel** (#173028): denser instrument faces
- **Ink** (#e6f4ef): body text
- **Ink Muted** (#9ec4b8): secondary text (teal-tinted, never gray)
- **Ink Faint** (#6f9489): meta labels
- **Line** (#2a4a42): hairline borders

### Status LEDs
- Stable: teal; Beta: sky; Coming soon: amber; Early/dev: violet

**The Local Ink Rule.** Secondary text is tinted from the desk/teal family. Never pure gray on the desk.

**The One Signal Rule.** Teal is the only brand accent at page scale. Status LEDs stay small.

## Typography

**Display Font:** Epilogue (system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible (system-ui, sans-serif)

**Character:** Epilogue carries confident display weight without a default AI-serif costume. Atkinson Hyperlegible is plain and highly readable, fitting a voice-accessibility product.

### Hierarchy
- **Display** (700, clamp 2.4–4.25rem, 1.05 lh): hero only
- **Headline** (650, clamp 1.6–2.2rem): section titles
- **Title** (600, ~1.25rem): project names
- **Body** (400, 1.0625rem, 1.65 lh, max ~70ch): prose
- **Label** (700, 0.8125rem, slight tracking): channel meta, status

**The No-Kicker Rule.** No uppercase eyebrow above headings. The heading speaks first.

## Layout

Shell max ~1120px. First viewport is a thesis: large headline + live waveform + one primary action. Projects form a vertical channel strip (not a 2×2 card grid of icons). Principles run as a continuous band. Roadmap is a left-rail status path. Generous separation between sections; tighter groups inside channels.

Breakpoints: ~720px nav expands; ~960px hero splits headline / instrument panel.

## Elevation & Depth

Mostly tonal layering on the desk. Soft offset shadows only under the primary instrument panel and final CTA block.

### Shadow Vocabulary
- **Panel lift** (`0 20px 50px rgba(0,0,0,0.4)`): hero instrument, closing CTA

**The Flat Desk Rule.** Default surfaces are flat. Shadow marks a primary instrument, not every box.

## Shapes

Soft instrument corners (12–18px). Pills for buttons and LEDs. Waveform uses rounded stroke caps. Avoid hard brutalist offsets and nested rounded rectangles.

## Components

### Buttons
- **Shape:** pill
- **Primary:** solid teal on desk ink color; brighten on hover
- **Ghost:** transparent with teal-line border

### Channel rows (projects)
- Full-width instrument rows with left status LED, platform label, name, blurb, tags, actions
- Featured stable product (VocaLinux) slightly taller / brighter border, not a nested card stack

### Navigation
- Sticky translucent desk bar; text links in muted ink; mobile toggle without hamburger icon soup (two bars)

### Waveform
- SVG path animation as the single authored motion; paused under reduced motion

## Do's and Don'ts

### Do:
- **Do** prove locality with the waveform and plain product claims
- **Do** route people to platform sites and GitHub with clear status
- **Do** keep teal as the brand signal from the mic logo
- **Do** use sentence-case headings

### Don't:
- **Don't** ship equal icon+title+text marketing cards as the page structure
- **Don't** use purple-to-blue AI gradients or pure black/gray neutrals
- **Don't** use banned default faces (Inter, DM Sans, Fraunces, Space Grotesk, etc.)
- **Don't** invent customers, benchmarks, or screenshots you don't have
- **Don't** put an eyebrow/kicker above every section title
