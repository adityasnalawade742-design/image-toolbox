# Design System Specification — Image Toolbox (Astro Edition)

**Single Source of Truth for Visual Design, Modern Typography, Island Architecture & Aesthetics**

---

## 1. Core Design Philosophy

- **Astro Islands Architecture**: Ultra-lean, zero-JS by default for all content, layout, SEO schemas, and navigation. Interactive tools are isolated client islands (`client:load` / `client:idle`).
- **Precision Utility & High-End Minimal Aesthetics**: Dark mode first (`#090d16`), clean Daylight option (`#ffffff`), curated font hierarchy, crisp slate borders (`#1e293b`), and vibrant brand cyan/sky accents (`#38bdf8` / `#0284c7`).
- **Zero-Friction Tool First**: The interactive workspace and dropzone are the central focal point above the fold.
- **Fast 60fps Interactions**: Micro-interactions (150–200ms cubic-bezier transitions) with zero layout shifts.

---

## 2. Color System & Design Tokens

### Dark Theme (Primary Default)
- **Background Root**: `#090d16` (Deep Obsidian Slate)
- **Surface Elevation 1 (Cards, Workspace)**: `#0f172a` (Slate 900)
- **Surface Elevation 2 (Controls, Inputs)**: `#1e293b` (Slate 800)
- **Surface Elevation 3 (Hover States)**: `#334155` (Slate 700)
- **Border Crisp**: `#1e293b` (Slate 800)
- **Border Interactive**: `#38bdf8` (Sky 400)
- **Text Dominant**: `#f8fafc` (Slate 50)
- **Text Muted**: `#94a3b8` (Slate 400)
- **Text Subtle**: `#64748b` (Slate 500)
- **Primary Accent**: `#38bdf8` (Sky 400)
- **Primary Hover**: `#0284c7` (Sky 600)
- **Success / Savings**: `#22c55e` (Emerald 500)
- **Destructive**: `#ef4444` (Rose 500)

### Light Theme
- **Background Root**: `#ffffff`
- **Surface Elevation 1**: `#f8fafc` (Slate 50)
- **Surface Elevation 2**: `#f1f5f9` (Slate 100)
- **Border Crisp**: `#e2e8f0` (Slate 200)
- **Border Interactive**: `#0284c7` (Sky 600)
- **Text Dominant**: `#0f172a` (Slate 900)
- **Text Muted**: `#475569` (Slate 600)
- **Text Subtle**: `#94a3b8` (Slate 400)
- **Primary Accent**: `#0284c7` (Sky 600)
- **Primary Hover**: `#0369a1` (Sky 700)

---

## 3. Typography & Font Hierarchy

- **Primary UI Sans**: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Diagnostics Monospace**: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace (used for dimensions, hex values, byte counters).

| Level | Size (Mobile / Desktop) | Weight | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero / H1** | 28px / 38px | 800 (Extra Bold) | 1.15 | -0.025em | Tool Page Titles, Hero Banner |
| **Section H2** | 20px / 24px | 700 (Bold) | 1.3 | -0.015em | How-to Steps, FAQ Headers, Feature Titles |
| **Card H3** | 15px / 17px | 600 (Semibold) | 1.4 | -0.01em | Control Panel Headings, Tool Grid Cards |
| **Body / Copy**| 14px / 15px | 400 (Regular) | 1.6 | normal | Descriptive copy, How-To descriptions |
| **Labels & Pills**| 12px / 13px | 600 (Semibold) | 1.3 | +0.01em | Sliders, button labels, format tabs |
| **Monospace Badges**| 11px / 12px | 600 (Semibold) | 1.2 | normal | `1920x1080px`, `-74.2%`, `#38bdf8` |

---

## 4. Astro Component Architecture

```
┌────────────────────────────────────────────────────────┐
│  src/layouts/BaseLayout.astro (Static Shell, Zero JS)  │
│  ├── Header.astro (Nav, Logo, Search Trigger)          │
│  │                                                     │
│  ├── src/pages/[tool].astro (SSG Static Page)          │
│  │   ├── Breadcrumb.astro                              │
│  │   ├── H1 & Subtitle (Pure HTML)                     │
│  │   │                                                 │
│  │   ├── <ToolWorkspace client:load />  ◄─ REACT ISLAND│
│  │   │   ├── Native Canvas Viewport                    │
│  │   │   └── Interactive Controls / Sliders            │
│  │   │                                                 │
│  │   ├── HowToSteps.astro (Static HTML)                │
│  │   ├── FeatureGrid.astro (Static HTML)               │
│  │   ├── FaqAccordion.astro (Semantic <details>)       │
│  │   └── RelatedTools.astro (Static Links)             │
│  │                                                     │
│  └── Footer.astro (Links, Copyright, Zero JS)          │
└────────────────────────────────────────────────────────┘
```

---

## 5. UI Components & Micro-Interactions

### A. DropZone Component
- 2px subtle dashed border with instant drag-over accent glow (`border-sky-500/50 bg-sky-500/5`).
- "Choose Image" primary pill button + keyboard activation (`Enter`/`Space`) + clipboard paste listener (`Ctrl+V`).

### B. Dual-Pane Tool Workspace
- **Desktop Grid (7 / 5 Column Split)**:
  - Left: Canvas interactive viewport, centered preview, transparency grid background.
  - Right: Control cards, preset pills, custom sliders with live numeric readouts, and full-width action button.
- **Mobile Stacked View**: Fixed max-height preview on top, thumb-friendly vertical scroll controls below.

### C. Semantic FAQ Accordion
- Built using native HTML5 `<details>` and `<summary>` tags for zero-JS instant SEO indexing and accessibility.

---

## 6. Accessibility & Performance Standards

- **Lighthouse Targets**: 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
- **Contrast Ratios**: Minimum 4.8:1 text-to-background contrast across all themes.
- **Keyboard Navigation**: Complete tab-order indexability for all sliders, dropdowns, buttons, and upload zones.
