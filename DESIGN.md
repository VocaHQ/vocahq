---
name: VocaHQ
description: Minimal clean entry point for offline voice dictation across platforms
colors:
  bg: "#f7f6f3"
  bg-soft: "#efeeea"
  ink: "#1a1c1b"
  ink-muted: "#5c6360"
  ink-faint: "#8a918d"
  line: "#e2e0da"
  line-strong: "#cdcbc3"
  accent: "#1f8f75"
  accent-hover: "#176b58"
  accent-soft: "#e6f4ef"
typography:
  display:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 5.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.8vw, 1.85rem)"
    fontWeight: 600
  title:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.12rem"
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
  ui:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.95rem"
  fine:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.88rem"
  meta:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.9rem"
  footer:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.92rem"
rounded:
  sm: "8px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
---

# Design System: VocaHQ

## Overview

**Creative North Star: "Quiet paper desk"**

A light, uncluttered marketing page. Warm paper ground, near-black type, generous space. Teal from the logo appears only as a quiet accent on links and status, not as a themed environment. Primary actions are black pills so the brand color does not dominate the screen.

**Key Characteristics:**
- Light paper neutrals, not graphite-teal immersion
- Type and spacing carry hierarchy
- Simple list rows for apps (hairline dividers)
- Minimal motion (none decorative)
- Logo is the only colorful brand object in the chrome

## Colors

Restrained palette. Neutrals do most of the work.

### Primary
- **Ink** (#1a1c1b): headings, primary buttons
- **Accent teal** (#1f8f75): links, stable status, hover. Used sparingly

### Neutral
- **Paper** (#f7f6f3): page ground
- **Soft paper** (#efeeea): alternate section band
- **Muted / faint** (#5c6360 / #8a918d): secondary text
- **Line** (#e2e0da): dividers

**The Quiet Accent Rule.** Teal is for meaning (links, stable), not atmosphere. No full-page teal glows, waveforms, or instrument panels.

## Typography

**Display:** Epilogue (medium/semibold weights)
**Body:** Atkinson Hyperlegible

Calm scale. No oversized display drama. Sentence-case headings. No eyebrows/kickers.

## Layout

Narrow reading measure (~720–880px). Hero is stacked text only. Apps are a single-column list with thin rules. Principles in a simple two-column grid on wide screens. Lots of vertical air.

## Elevation & Depth

Flat. No heavy shadows. Sticky header uses a light blur only.

## Shapes

Small radius (8px) and pill buttons. No oversized instrument corners.

## Components

### Buttons
- Primary: solid ink on paper
- Ghost: thin neutral border

### App rows
- Hairline list, platform label + status, name, blurb, text links

### Navigation
- Text links in muted ink; sticky paper bar

## Do's and Don'ts

### Do:
- **Do** let whitespace and type set the tone
- **Do** keep teal subordinate to ink and paper
- **Do** preserve honest product status and human copy

### Don't:
- **Don't** rebuild the graphite-teal "signal desk" world
- **Don't** add decorative waveforms, glows, or LED grids
- **Don't** use equal marketing icon-cards as the page structure
- **Don't** lean on purple SaaS gradients or Inter defaults
