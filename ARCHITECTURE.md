# Architecture & Technical Design — Image Toolbox

**Component Topology, Client-Side Processing Pipeline, and Future Backend Abstraction**

---

## 1. Technology Stack

- **Framework**: Next.js 14+ (App Router, React Server Components for SEO pages, Client Components for interactive tool viewports).
- **Language**: TypeScript 5+ (Strict Mode enabled).
- **Styling**: Tailwind CSS 3.4+ (Zero-runtime utility CSS, custom design tokens, dark mode class strategy).
- **Icons**: `lucide-react` (Tree-shakeable, lightweight SVG icons).
- **Core Runtime**: Client-Side HTML5 Canvas API, `createImageBitmap`, `OffscreenCanvas` (where supported), Web Blob/File APIs, URL Object Lifecycles.

---

## 2. Directory Structure

```
image-toolbox/
├── src/
│   ├── app/                      # Next.js App Router Pages
│   │   ├── layout.tsx            # Root layout with Header, Footer, Providers
│   │   ├── page.tsx              # Homepage with Hero, Tool Grid, FAQs
│   │   ├── crop-image/page.tsx   # /crop-image tool page
│   │   ├── resize-image/page.tsx # /resize-image tool page
│   │   ├── compress-image/page.tsx # /compress-image tool page
│   │   ├── globals.css           # Tailwind base, utilities, design tokens
│   │   ├── sitemap.ts            # Dynamic SEO XML sitemap generator
│   │   └── robots.ts             # Robots.txt configuration
│   │
│   ├── components/               # UI Component Hierarchy
│   │   ├── layout/               # Header, Footer, Navigation, LanguagePicker
│   │   ├── shared/               # DropZone, ToolLayout, Breadcrumbs, FAQSection, RelatedTools
│   │   └── tools/                # Specialized tool controllers (CropView, ResizeView, CompressView)
│   │
│   ├── config/
│   │   ├── tools.ts              # Central Tool Registry (metadata, routes, categories, SEO)
│   │   └── i18n.ts               # Localized string keys & language configuration
│   │
│   ├── lib/
│   │   ├── canvas/               # Pure Browser Canvas Processing Engine
│   │   │   ├── crop.ts           # Canvas crop extraction, transformation, circle masking
│   │   │   ├── resize.ts         # High-quality multi-step downsampling / upsampling
│   │   │   ├── compress.ts       # Blob generation, quality quantization, size calculation
│   │   │   └── file-utils.ts     # MIME validation, format conversion, download triggers
│   │   │
│   │   └── seo/                  # Schema JSON-LD generators (SoftwareApp, FAQPage, BreadcrumbList)
│   │
│   └── types/
│       ├── tool.ts               # Tool metadata, categories, aspect ratios
│       └── image.ts              # Image item models, dimensions, export settings
│
├── public/                       # Static assets, favicon, manifest
├── DESIGN.md                     # Design system source of truth
├── PRODUCT_SPEC.md               # Product requirements and phase roadmaps
├── ARCHITECTURE.md               # This document
├── SEO.md                        # SEO strategy and cluster architecture
├── SECURITY.md                   # Client-side security and sanitization
└── DEPLOYMENT.md                 # Vercel deployment and future Oracle Cloud API proxy
```

---

## 3. Cropping Engine Architectural Decision

### Evaluation: Native Custom Canvas Cropper vs. Library
- **Decision**: We utilize a lightweight, focused canvas-based cropping viewport integrated with standard browser touch/mouse interaction.
- **Rationale**:
  1. Complete control over memory lifecycle and canvas extraction.
  2. Zero external dependencies loaded on non-crop pages.
  3. Seamless support for rotation (-180° to +180°), flip transformations, aspect ratio constraints, circular avatar masking, and touch pinch/drag without bundle bloat.
  4. Decoupled processing logic inside `src/lib/canvas/crop.ts` that executes outside React's render loop.

---

## 4. Processing Pipeline & Memory Lifecycle

```
[ User Input ]
      │ (Drag & Drop, File Dialog, or Clipboard Paste Ctrl+V)
      ▼
[ Validation Layer ]
      │ (MIME check, extension verification, file size guard < 50MB)
      ▼
[ File -> ImageBitmap / Object URL ]
      │ (FileReader / URL.createObjectURL)
      ▼
[ Canvas Processing Engine (lib/canvas/) ]
      ├── Pure functional transforms (rotate, scale, crop, filter)
      ├── Memory safe high-resolution buffer allocation
      └── Format conversion (image/webp, image/jpeg, image/png)
      ▼
[ Blob & Download Trigger ]
      │ (URL.createObjectURL -> <a> download -> revokeObjectURL)
      ▼
[ Complete Local Garbage Collection ]
```

### Memory Management Rules
1. Every created Object URL (`URL.createObjectURL`) must be explicitly released via `URL.revokeObjectURL()` after image unmounting or download completion.
2. Large canvases are resized via temporary off-screen canvases and dereferenced immediately to allow the browser garbage collector to reclaim RAM.

---

## 5. Decoupled Future Backend Architecture

While Phase 1 is **100% client-side**, the codebase is architected with a service provider interface:

```typescript
export interface ImageProcessor {
  process(file: File, options: ProcessOptions): Promise<ProcessedResult>;
}

// Phase 1 Implementation:
export const browserProcessor: ImageProcessor = { ... };

// Future Phase (Oracle VPS Backend Integration):
export const apiProcessor: ImageProcessor = {
  process: async (file, options) => {
    const formData = new FormData();
    formData.append('file', file);
    return fetch('https://api.example.com/v1/process', { method: 'POST', body: formData });
  }
};
```

This ensures that adding an optional Oracle Cloud API in the future requires **zero UI rewrites**.
