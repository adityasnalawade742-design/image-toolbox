---
version: 1
slug: "src-layouts-toollayout-astro"
primary_target: "src/layouts/ToolLayout.astro"
related_targets: ["src/pages/index.astro","src/components/shared/ToolWorkspace.tsx","src/layouts/BaseLayout.astro"]
---

# Surface brief: tool pages, home, shared workspace

Scope: whole-site visual world (replacement). Primary surface: tool page (Operate). Home (Operate/Persuade hybrid: find a tool fast).
Audience: everyday people, often on phones, arriving from search with one image job. Action: drop image → adjust → download, or follow a next-tool handoff.
Constraints: 10 languages (long German, CJK), AdSense slots never beside controls, all claims factual, site name swappable text.

## Direction contract

THESIS: Every image is placed on a press proof sheet: measured, marked, and passed for press. Refuses the category default of a white page of colorful icon tiles with a giant blue upload button, and the dark developer-tool look it replaces.

OWN-WORLD: Coated white paper (#fbfbf9), key-black ink (#141414) and one graphite spot ink (#5b5b58) for secondary text; non-repro blue (#9fd3e6) only for layout grid lines. Four process inks as flat solids marking categories: magenta Edit, cyan Optimize, yellow Convert, key Inspect, registration (rich black + target) Developer. No gradients, glows, shadows, rounded cards. Square corners, 1px ink rules, crop marks, dimension lines, a CMYK colour bar, slug-line job tickets. Barlow (DIN-like grotesk, the face of the paper-standards world) with tabular figures for every measurement.

STORY: The visitor sees their image measured the moment it lands (live W × H dimension lines and crop marks), adjusts in a ruled control panel, and gets a job ticket that states exactly what was produced (format, pixels, bytes, saving). They trust it because every number is real.

FIRST VIEWPORT: Tool page: masthead with colour bar and tool index trigger; H1 + one-line tagline left; the proof sheet (dashed-free, crop-marked drop target with non-repro grid) takes ~65% width on desktop, full width on phones; ruled control panel right (below on phones, with a sticky bottom action rail holding Download). Download is the single solid key-ink button. Home: headline + proof-sheet dropzone, then the full printed index of every tool in ink-coded columns.

FORM: Press Proof Sheet (ISO/DIN paper-size chart + print-shop proof), position 5 of my ordered list; seed key 00e64be5. Raises: flat inks only (datamatics); colour quarantined to image and category marks (lexicon); phone image owns viewport with thumb rail (feed); visible hairline grid (crouwel; crop/resize grid snap dropped by the owner 2026-10-25, the grid stays on the empty drop sheet only); full tool index with no folding (dense). Signature interaction: live dimension lines that track every resize/crop/rotate, and a registration snap (CMYK plates offset then register) when an image lands; reduced-motion shows the registered state only.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
