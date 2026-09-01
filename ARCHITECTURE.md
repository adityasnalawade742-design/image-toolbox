# Architecture & Technical Design — Image Toolbox

**Astro 5 Islands Architecture, Client-Side HTML5 Canvas Pipeline, and Internationalization (i18n) Engine**

---

## 1. Technology Stack

- **Framework**: Astro 5 (Static Generation mode, Static Server-Rendered HTML pages for maximum Core Web Vitals and SEO performance).
- **Client Islands**: React 18+ (Hydrated on-demand via `client:load` and `client:idle` for interactive tool workspaces and search modals).
- **Internationalization (i18n)**: Compile-time Static Multi-Locale Prerendering (`src/i18n/` directory structure) with zero runtime bundle bloat.
- **Language**: TypeScript 5+ (Strict Mode enabled).
- **Styling**: Tailwind CSS 3.4+ (Zero-runtime utility CSS, custom design tokens, dark mode class strategy, ambient precision grid).
- **Icons**: `lucide-react` (Tree-shakeable, lightweight SVG icons).
- **Core Engine**: Pure Client-Side HTML5 Canvas API, `createImageBitmap`, Web Worker threads, Web Blob/File APIs, Object URL Lifecycles.

---

## 2. Directory Structure

```
image-toolbox/
├── src/
│   ├── config/                   # Site config & tools registry
│   │   ├── site.ts               # Site metadata, dynamic domain resolution, supported locales
│   │   └── tools.ts              # Central Tool Registry (metadata, categories, default copy)
│   │
│   ├── i18n/                     # Centralized Internationalization Engine
│   │   ├── types.ts              # TypeScript schemas for UI, tool content, and homepage
│   │   ├── locales.ts            # Supported locales, URL helpers, country mappings
│   │   ├── ui/                   # UI strings per locale (en, es, fr, de, pt, it, ja, ko, id)
│   │   ├── tools/                # Tool titles, H1s, how-tos, features, FAQs per locale
│   │   └── home/                 # Homepage hero, categories, trust pillars per locale
│   │
│   ├── components/               # Astro & React Component Hierarchy
│   │   ├── layout/               # Header.astro, Footer.astro, LanguageSelector.tsx, LanguageBanner.tsx
│   │   ├── shared/               # ToolSearch.tsx, ToolWorkspace.tsx, HomeCategoryTools.tsx, HomeDropZone.tsx
│   │   └── tools/                # 27 Specialized React Canvas views (CropView, CompressView, etc.)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Multi-locale hreflang, self-canonical, JSON-LD, dark mode
│   │   └── ToolLayout.astro      # Static localized breadcrumbs, H1, how-to, features, FAQs
│   │
│   ├── lib/
│   │   ├── canvas/               # Browser Canvas Image Engine (crop, resize, compress, svg, etc.)
│   │   └── seo/                  # Localized JSON-LD Schema generators (WebApplication, FAQPage, BreadcrumbList)
│   │
│   └── pages/
│       ├── index.astro           # Global English homepage (/)
│       ├── [tool].astro          # Global English tool pages (/[tool])
│       ├── [locale]/
│       │   ├── index.astro       # Localized homepages (/[locale])
│       │   └── [tool].astro      # Localized tool pages (/[locale]/[tool])
│       ├── sitemap.xml.ts        # Dynamic 252-URL static sitemap generator
│       └── robots.txt.ts         # Robots.txt configuration
│
├── dist/                         # 252 Prerendered static HTML pages + CSS/JS bundles
├── DESIGN.md                     # Design system tokens and specifications
├── PRODUCT_SPEC.md               # Product requirements and tool capabilities
├── ARCHITECTURE.md               # This document
├── SEO.md                        # SEO strategy and multi-country cluster architecture
├── SECURITY.md                   # Client-side security and sanitization
└── DEPLOYMENT.md                 # Cloudflare Pages / Workers deployment guide
```

---

## 3. Client-Side Image Processing Isolation

* **Zero Server Uploads**: All 27 tools operate entirely on the client side using HTML5 Canvas and browser Web APIs.
* **Zero Network Latency**: Photos are processed directly in device memory (`RAM`), providing instant live preview feedback.
* **Privacy by Design**: No telemetry, analytics tracking of user photos, or server logging.
