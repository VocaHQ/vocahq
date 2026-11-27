---
name: VocaHQ ecosystem workbench
description: Shared VocaPhone-inspired visual language for the VocaHQ directory
colors:
  paper: "#f4f1e8"
  deep-paper: "#ebe5d8"
  bright-paper: "#fffdf7"
  ink: "#14231c"
  muted: "#58625c"
  faint: "#7c847d"
  line: "#d5d0c4"
  teal: "#0f6b57"
  dark-teal: "#0b493d"
  dark-ink: "#0b1a15"
  mint: "#cfe9dc"
  mint-soft: "#e5f2eb"
typography:
  display: '"Avenir Next", "Helvetica Neue", ui-sans-serif, system-ui, sans-serif'
  body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
---

# VocaHQ design system

## Direction

The VocaHQ homepage is a shared VocaPhone-style workbench at ecosystem scale:
warm paper, deep green ink, editorial headings, flat surfaces, desktop-window
chrome, small physical details, and direct copy. It should feel assembled by a
careful person, not generated from a row of equal SaaS cards.

The homepage represents the family rather than making VocaPhone the center.
The first viewport names the family and shows the product working: a short
animated illustration of someone speaking and text landing in the field.

Show, don't tell. Prefer a short headline plus a visual over a paragraph.
Each section gets one idea, a headline, at most one short line of copy, and a
visual that demonstrates it. Product truth (status, license, requirements)
stays in short mono requirement lines, never cut.

## Tokens

- Paper ground: `#f4f1e8`; alternate paper: `#ebe5d8`; bright surfaces:
  `#fffdf7`.
- Ink: `#14231c`; muted copy: `#58625c`; brand teal: `#0f6b57`; dark teal:
  `#0b493d`.
- Dark sections use `#0b1a15` with mint surfaces `#cfe9dc` and `#e5f2eb`.
- Yellow, blue, red, and lilac are small physical details only: status dots,
  window controls, stamps, and evidence that comes from a real product.
- Headings use a system display stack. Body text uses a readable system stack.
  There is no remote font dependency.

## Composition rules

- Use flat fills and the local paper-dot SVG. CSS gradients are prohibited.
- Use normal document flow for story numbers, labels, headings, screenshots,
  and decorative elements. No absolute-positioned label may cover a heading.
- Prefer editorial rows, windows, folders, notes, and split paths to generic
  equal-sized feature cards.
- Product evidence is real and attributed. Code-native diagrams may explain a
  flow, but they must not be presented as real app screenshots.
- Keep the page inside a wide shell (`min(1180px, calc(100% - 2rem))`) and test
  at 390px, 768px, 1440px, and a wide desktop viewport.
- Motion explains the product and is always optional. Looping illustrations
  only run while on screen, the hero has a visible Pause motion control that
  freezes every animation on the page, and everything settles to a meaningful
  static frame under `prefers-reduced-motion: reduce`. Base styles are the
  final frame, so a reduced-motion visitor sees the finished state.
- Animated demos are code-native illustrations. Label them as illustrations,
  not screenshots.

## Components

### Menu bar

Sticky paper header, shared Voca mark, compact status readout, text navigation,
and one GitHub action. The mobile drawer is a real disclosure controlled by the
menu button, closes on link selection or Escape, and returns focus to the
button.

### Window chrome

Small red/yellow/green controls and mono labels create the desktop-workbench
motif. They are decorative unless the window contains a real link or control.

### Buttons and tags

Primary actions use brand teal with paper text. Secondary actions use a paper
surface and ink border. Status labels are sentence case, short, and tied to the
verified product matrix.

### Story rows

Each of the three numbered rows has an in-flow index, copy column, and visual
column. At mobile widths the index, heading, paragraph, and visual stack in that
order. The static test asserts that each row keeps its `data-flow-story`
attribute and that CSS does not pull the index out of flow.

### Hero demo

A tabbed stage (Mac, Linux, Windows, Phone) with a floating Voca pill that
walks through ready, listening, transcribing, and text inserted. Tabs are real
buttons with `aria-pressed`; the stage is `role="img"` with a label that
describes the current scene. The controls only appear once JavaScript runs.

### Privacy paths

A two-button switch between "On this device" and "Your VocaGateway" drives a
code-native diagram and one caption panel. Without JavaScript both captions
show. The gateway caption always says gateway mode is not on-device.

### FAQ

Native `<details>` and `<summary>` keep answers available without JavaScript.
The small plus mark is `aria-hidden`; JavaScript closes other answers only as a
convenience.

## Content rules

- Say “speech-to-text model,” not unexplained engine jargon.
- Say “free and open source,” not “free forever.”
- Scope “stays on your device” to on-device mode.
- Say explicitly that configured gateway mode sends audio to the selected
  self-hosted gateway and recommend a trusted LAN, encrypted private network,
  or HTTPS.
- Use each product's actual status and license; never imply VocaWin is a
  signed shipping build.
