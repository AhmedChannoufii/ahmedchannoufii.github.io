---
name: Synthetic Matrix
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#9699ff'
  on-tertiary-container: '#1d17b2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.035em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.005em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.9375rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.03em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-refined, high-precision aesthetic engineered for top-tier data scientists, AI engineers, and technical architects. It communicates rigor, computational mastery, and forward-looking clarity. 

The aesthetic synthesizes **Glassmorphism** with **Technical Minimalism**:
- Deep, obsidian substrates paired with crystalline frosted-glass cards.
- Hyper-vibrant, spectral accents (emerald, cyan, indigo) applied selectively to illuminate computational graphs, metrics, and interactive nodes.
- Extreme typographic discipline: clean structural hierarchies with monospace accents that evoke high-performance terminal environments and real-time inference telemetry.
- Subtle kinetic feedback: glowing edge highlights, precise 1px linear gradients, and calibrated hover transitions that convey responsiveness and tactile precision.

## Colors

The palette is engineered around an ultra-deep cosmic neutral base (`#090D16`), punctuated by three high-energy chromatic signals:

- **Primary (`#10B981` Emerald):** Represents validated states, optimal algorithmic efficiency, live telemetry, and direct call-to-actions.
- **Secondary (`#06B6D4` Cyan):** Conveys active data streams, interactive linkages, and architecture diagrams.
- **Tertiary (`#6366F1` Indigo):** Applied to secondary badges, deep background illumination glows, and multidimensional vectors.
- **Neutral Dark Tiers:**
  - `canvas-base`: `#05080F` (primary viewport background)
  - `surface-01`: `#0B111E` (foundational surface containers)
  - `surface-02`: `#111A2E` with 60% opacity for glass cards
  - `surface-border`: `#1E293B` (at 40% to 70% opacity for hair-thin geometric boundaries)
- **Text & Foreground Tiers:**
  - `text-primary`: `#F8FAFC` (pure readability, 100% white-slate)
  - `text-secondary`: `#94A3B8` (subtitles, secondary metrics)
  - `text-muted`: `#475569` (table headers, grid labels, monospaced metadata)

## Typography

Typography establishes an intentional dichotomy between human-readable narrative and machine-readable data:

- **Inter** handles narrative flow, headlines, project abstracts, and continuous reading. Use tight tracking (`-0.03em` to `-0.01em`) on larger sizes to maintain tension and a sleek posture.
- **JetBrains Mono** is reserved for computational readouts, system metrics, performance markers (e.g., latency, BLEU/ROUGE scores, parameter counts), code snippets, tags, and category overlines.
- Overlines and technical metadata must always be rendered in `label-sm` or `label-md` with uppercase transformation and tabular numbers (`tnum`) enabled for uniform column scanning.

## Layout & Spacing

The layout operates on a standard 12-column fluid grid constrained by an ultra-wide max content container of `1280px` for optimal data density without horizontal fragmentation.

- **Desktop (>= 1024px):** 12 columns, `margin-lg` (3rem) edge boundaries, and `gutter-lg` (2rem). Complex project cards and model architecture diagrams can occupy 6, 8, or 12 columns.
- **Tablet (768px - 1023px):** 8 columns, `margin` (1.5rem) side padding, and `gutter` (1.5rem). Multi-column metrics fold into balanced 2x2 grids.
- **Mobile (< 768px):** 4 columns, `margin-sm` (1rem) side padding, and `gutter-sm` (1rem). Dense components stack vertically, preserving horizontal readability for code and data tables.
- **Vertical Spacing Rhythm:** Section-to-section transitions leverage generous vertical distances (4rem to 6rem) to give complex mathematical and architectural diagrams cognitive breathing room.

## Elevation & Depth

Visual hierarchy uses a refined **Glassmorphism + Ambient Glow** depth model. Rather than conventional drop shadows, elevation is communicated through optical transmittance and edge luminescence:

1. **Base Layer (L0):** Dark background (`#05080F`) overlaid with an ultra-subtle, fixed SVG grid pattern at 3% opacity to echo a mathematical coordinate plane.
2. **Surface Layer (L1 - Cards, Panels):** 
   - Background: `rgba(17, 26, 46, 0.55)`
   - Backdrop filter: `blur(16px) saturate(180%)`
   - Border: 1px solid `rgba(255, 255, 255, 0.08)`
3. **Elevated Layer (L2 - Hovered States, Dropdowns, Flyouts):**
   - Background: `rgba(21, 32, 57, 0.75)`
   - Backdrop filter: `blur(24px)`
   - Border: 1px solid `rgba(16, 185, 129, 0.35)` or `rgba(6, 182, 212, 0.35)`
   - Shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 20px -2px rgba(6, 182, 212, 0.15)`
4. **Modal / Overlay Layer (L3):**
   - Backdrop filter: `blur(32px)`
   - Rim lighting: Top border highlighted with a subtle gradient (`rgba(255, 255, 255, 0.2)` to transparent).

## Shapes

The design uses a balanced `rounded-2` framework (base `0.5rem` / 8px). This creates a modern, sleek contour without feeling soft or toy-like:

- **Base elements (inputs, buttons, badges):** `8px` (`0.5rem`) for compact, crisp bounds.
- **Large containers (project cards, telemetry dashboards):** `rounded-lg` (`1rem` / 16px) to comfortably wrap dense internal elements and maintain glassmorphic curvature.
- **Pills / Status Dots:** Fully rounded (`9999px`) reserved strictly for live connection indicators, status chips, and model version tags.
- **Dividers & Strokes:** Razor-thin `1px` lines across all borders to reinforce precision engineering.

## Components

### Buttons
- **Primary:** Background in solid emerald (`#10B981`) with dark text (`#05080F`), font weight 600. On hover, a localized cyan bloom (`box-shadow: 0 0 20px rgba(16, 185, 129, 0.4)`) with a subtle `translateY(-1px)` lift.
- **Secondary / Ghost:** Glass container (`rgba(255, 255, 255, 0.04)`) with a 1px border (`rgba(255, 255, 255, 0.1)`). On hover, border shifts to cyan (`#06B6D4`) with text shifting to pure white.
- **Icon / Terminal Trigger:** Monospace-labeled icon buttons with a subtle emerald pulse indicator on active state.

### Cards & Project Showcase
- Built with the L1 glass surface. Card headers feature a project category overline in `JetBrains Mono` accompanied by a micro-status pill (e.g., `DEPLOYED`, `TRAINING COMPLETE`).
- Visual containers showcase interactive canvas previews or static architecture schematics wrapped in an inner glass frame with `overflow: hidden`.
- Interactive hover: The outer border transitions smoothly to a linear gradient tint of Cyan to Indigo.

### Chips & Badges
- Compact height (`24px` to `28px`) using `label-sm` or `label-md`.
- Background: `rgba(6, 182, 212, 0.08)` for cyan or `rgba(99, 102, 241, 0.08)` for indigo.
- Border: `1px solid rgba(currentColor, 0.25)`.
- Includes an optional leading mono symbol (e.g., `λ`, `θ`, `v1.4`, `pt`).

### Metric Readout Tiles
- Specialized components displaying raw performance numbers (e.g., `99.4%`, `<12ms`, `175B`).
- Primary stat displayed in `headline-lg` with tabular numbers.
- Secondary label beneath in `label-sm` with a small sparkline or delta badge (`+4.2%`) in vibrant emerald.

### Form Inputs & Search
- Background: `rgba(11, 17, 30, 0.8)`.
- Border: 1px solid `rgba(255, 255, 255, 0.1)`.
- Focus state: Border transitions to `#06B6D4` with an inner glow `box-shadow: inset 0 0 8px rgba(6, 182, 212, 0.15)`. Caret color set to Emerald (`#10B981`).

### Code Blocks & Interactive Terminals
- Deep black panel (`#05070B`) with macOS-style micro window controls styled in muted cyan and emerald.
- Integrated clipboard action with an instant feedback state (`COPIED` in monospace).