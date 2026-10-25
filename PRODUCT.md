# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Everyday people, many on phones, who arrive from a search engine needing one image fixed quickly: shrinking a photo to fit an upload size limit, cropping or resizing for a social post, converting an iPhone HEIC photo, removing a background, stripping location data before sharing. Mostly non-technical; they want the result, not the settings. A smaller secondary audience (developers, designers) uses Base64, favicon, bulk and format tools.

## Product Purpose

A free collection of image tools that work instantly in the browser. Success: a visitor lands on a tool page, gets a correct file in under a minute without instructions, and comes back (or follows the "next action" to another tool) the next time they need something.

## Positioning

Everything in one place: 30+ image tools behind one consistent workspace, free, no sign-up, no usage limits, with a next-step handoff between tools (e.g. crop → compress). Every tool processes files on the user's device, so there are no uploads or queues; this is true for all tools and is a supporting proof point, not the headline.

## Operating Context

- Entry is usually a single tool page from search, often on mobile; the home page is secondary.
- Sessions are short: pick file → adjust → download. Input via file picker, drag-and-drop, Ctrl+V paste, or handoff from another tool.
- Revenue comes from display ads (Google AdSense), so pages must leave room for ad slots without putting them next to upload, download or handoff controls.
- 10 languages (en default unprefixed; es, fr, de, pt, it, ja, ko, id, tr prefixed); interface text must survive longer translations (German) and CJK scripts.

## Capabilities and Constraints

- 31 tools in `src/config/tools.ts` across Edit & Transform, Optimize & Compress, Convert Formats, Inspect & Utilities, Developer; a background remover (on-device AI model, downloaded once) is being added.
- All processing is client-side (Canvas 2D, WebAssembly AVIF encoder, exifr, heic2any). No backend; static Astro site on Cloudflare Workers; installable PWA.
- Inputs up to 50 MB; HEIC supported in the shared workspace; bulk tools take up to 50 files.
- Site name and URL are environment-configurable (`PUBLIC_SITE_NAME`, `PUBLIC_SITE_URL`).

## Brand Commitments

- Name is not final: "Image Toolbox" is a placeholder. Any wordmark must be swappable text, not artwork built around these words.
- No borrowed brand identities: the previous DESIGN.md was a copy of a third party's (Raycast) design system and must not be reused.

## Evidence on Hand

- No testimonials, user counts, ratings, press, or benchmarks exist. Do not fabricate any.
- Factual, verifiable claims only: tool count, supported formats, size limits, on-device processing.

## Product Principles

1. The tool is the page: the workspace comes first; explanations follow it.
2. One consistent workspace across every tool, so learning one teaches all.
3. Never claim what isn't true; every feature statement must match the implementation.
4. Ads pay for the site but never sit where they can be mistaken for, or misclicked as, a tool control.
5. Mobile and translation are first-class, not afterthoughts.

## Accessibility & Inclusion

WCAG 2.2 AA as the working standard: keyboard-operable upload and controls, visible focus, labelled inputs, sufficient contrast, reduced-motion support.
