# Search Engine Optimization (SEO) & Internationalization (i18n) Architecture — Image Toolbox

**Complete Multi-Country URL Architecture, Hreflang Configuration, Search Intent Matrix, and Canonical Rules**

---

## 1. Information Architecture & URL Hierarchy

Image Toolbox implements a scalable, high-performance static internationalization structure across **9 major search markets** with **252 statically prerendered routes**:

```
Global English Canonical:
/ (Global & India Homepage)
├── /crop-image            (Intent: "crop image online", "free photo cropper")
├── /resize-image          (Intent: "resize image", "change image dimensions")
├── /compress-image        (Intent: "compress image online", "reduce image file size")
└── (All 27 active tool routes...)

Localized Market Prefixes:
├── /es/                   (Spanish Homepage)
│   ├── /es/crop-image     (Intent: "recortar imagen online", "cortar fotos gratis")
│   ├── /es/resize-image   (Intent: "redimensionar imagen online", "cambiar tamaño foto")
│   └── (All 27 Spanish tool routes...)
├── /fr/                   (French Homepage + 27 tools)
├── /de/                   (German Homepage + 27 tools)
├── /pt/                   (Portuguese Homepage + 27 tools)
├── /it/                   (Italian Homepage + 27 tools)
├── /ja/                   (Japanese Homepage + 27 tools)
├── /ko/                   (Korean Homepage + 27 tools)
└── /id/                   (Indonesian Homepage + 27 tools)
```

### URL Rule Summary:
1. **Unprefixed URLs Remain Canonical for English**: `/` and `/[tool]` are the permanent, global English versions.
2. **Zero Duplicate English Pages**: We do not create `/en/` routes to avoid content duplication.
3. **8 Localized Market Prefixes**: `/{locale}` and `/{locale}/[tool]` for `es`, `fr`, `de`, `pt`, `it`, `ja`, `ko`, `id`.
4. **All 252 Routes Static & HTTP 200**: Statically compiled by Astro into the `dist/` production bundle.

---

## 2. Supported Languages & Country Mapping Strategy

| Language Code | Language | Native Name | Target Geographic Markets | URL Prefix |
| :--- | :--- | :--- | :--- | :--- |
| `en` | English | English | Global, India, United States, United Kingdom, Canada, Australia | `/` (Unprefixed) |
| `es` | Spanish | Español | Spain, Mexico, Argentina, Colombia, Chile, Peru | `/es/` |
| `fr` | French | Français | France, Canada, Belgium, Switzerland | `/fr/` |
| `de` | German | Deutsch | Germany, Austria, Switzerland | `/de/` |
| `pt` | Portuguese | Português | Brazil, Portugal | `/pt/` |
| `it` | Italian | Italiano | Italy, Switzerland | `/it/` |
| `ja` | Japanese | 日本語 | Japan | `/ja/` |
| `ko` | Korean | 한국어 | South Korea | `/ko/` |
| `id` | Indonesian | Bahasa Indonesia | Indonesia | `/id/` |

---

## 3. Strict India Localization Rule

* **India MUST remain English by default**: `https://image-toolbox.aditya-s-nalawade742.workers.dev/` (and tool URLs like `/crop-image`) are the designated primary Indian experience.
* **No IP Redirections**: Search crawlers and Indian visitors are **never** redirected to Hindi (`/hi/`) or another regional dialect.
* **Zero Intrusive Banner for India**: Browser language checks for `-in` or `hi` will not trigger language switch suggestions.

---

## 4. Multi-Country Hreflang & Canonical Specifications

Every page automatically generates complete `<link rel="alternate" hreflang="..." href="...">` tags referencing absolute URLs across all 9 languages, plus `x-default`:

```html
<!-- Example on /crop-image or /es/crop-image -->
<link rel="canonical" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/crop-image" />
<link rel="alternate" hreflang="en" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/crop-image" />
<link rel="alternate" hreflang="es" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/es/crop-image" />
<link rel="alternate" hreflang="fr" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/fr/crop-image" />
<link rel="alternate" hreflang="de" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/de/crop-image" />
<link rel="alternate" hreflang="pt" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/pt/crop-image" />
<link rel="alternate" hreflang="it" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/it/crop-image" />
<link rel="alternate" hreflang="ja" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/ja/crop-image" />
<link rel="alternate" hreflang="ko" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/ko/crop-image" />
<link rel="alternate" hreflang="id" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/id/crop-image" />
<link rel="alternate" hreflang="x-default" href="https://image-toolbox.aditya-s-nalawade742.workers.dev/crop-image" />
```

---

## 5. Schema.org Structured Data Localization

All structured data is generated dynamically per locale:
1. **`WebApplication`**: Localized tool `name`, `description`, and `url`.
2. **`BreadcrumbList`**: Localized breadcrumb names (`Home / Inicio`, `Tools / Herramientas`, `[Tool Name]`).
3. **`FAQPage`**: Questions and answers strictly in the target locale (no English FAQs on Spanish/Japanese pages).
4. **`WebSite`**: Localized search action and description on homepages.

---

## 6. Sitemap & Robots Configuration

* **`sitemap.xml`**: Indexes all **252 valid production URLs** with `lastmod`, `changefreq`, and `priority`.
* **`robots.txt`**: Fully permits indexing of all language prefixes (`Allow: /`) and specifies `Sitemap: https://.../sitemap.xml`.
