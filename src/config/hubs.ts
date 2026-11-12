import type { ToolCategory } from './tools';

/**
 * Collection pages ("hubs"): every tool of a category, grouped by job, on one page per language. They answer broad
 * searches such as "pdf tools" and give each tool another link. The groups must hold every tool of the categories
 * they cover, exactly once (checked by a test), so a new tool can't be left off.
 */
export type HubSlug = 'pdf-tools' | 'image-editing-tools' | 'image-format-converters' | 'qr-code-and-barcode-tools' | 'image-utilities';

export interface HubGroup {
  /** Key of the group heading in the hub texts */
  key: string;
  slugs: string[];
}

export interface Hub {
  slug: HubSlug;
  /** The category whose ink marks the hub; the hub may hold only part of it */
  category: ToolCategory;
  groups: HubGroup[];
}

export const HUBS: Hub[] = [
  {
    slug: 'pdf-tools',
    category: 'pdf-documents',
    groups: [
      { key: 'toPdf', slugs: ['word-to-pdf', 'excel-to-pdf', 'powerpoint-to-pdf', 'jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf', 'scan-to-pdf', 'text-to-pdf', 'markdown-to-pdf'] },
      { key: 'fromPdf', slugs: ['pdf-to-word', 'pdf-to-jpg', 'pdf-to-png', 'pdf-to-text', 'pdf-to-markdown', 'extract-images-from-pdf', 'pdf-to-pdfa', 'pdf-to-grayscale', 'ocr-pdf'] },
      { key: 'edit', slugs: ['edit-pdf', 'add-text-to-pdf', 'add-image-to-pdf', 'highlight-pdf', 'draw-on-pdf', 'add-shapes-to-pdf', 'add-links-to-pdf', 'whiteout-pdf', 'watermark-pdf', 'add-page-numbers-pdf', 'add-header-footer-pdf', 'add-background-to-pdf', 'add-bookmarks-to-pdf', 'fill-pdf-form'] },
      { key: 'pages', slugs: ['merge-pdf', 'split-pdf', 'extract-pdf-pages', 'organize-pdf', 'rotate-pdf', 'crop-pdf', 'delete-blank-pages-pdf', 'resize-pdf-pages', 'booklet-maker', 'n-up-pdf', 'overlay-pdf', 'flatten-pdf'] },
      { key: 'secure', slugs: ['sign-pdf', 'protect-pdf', 'unlock-pdf', 'redact-pdf', 'remove-pdf-metadata', 'edit-pdf-metadata', 'sanitize-pdf'] },
      { key: 'fix', slugs: ['compress-pdf', 'repair-pdf', 'compare-pdf', 'pdf-attachments', 'pdf-link-checker'] },
    ],
  },
  {
    slug: 'image-editing-tools',
    category: 'edit-transform',
    groups: [
      { key: 'basics', slugs: ['crop-image', 'resize-image', 'rotate-image', 'flip-image', 'bulk-image-resizer', 'perspective-correction', 'round-image', 'add-border-to-image'] },
      { key: 'background', slugs: ['remove-background', 'blur-background', 'change-background', 'transparent-png-maker', 'signature-extractor', 'passport-photo-maker', 'add-drop-shadow'] },
      { key: 'text', slugs: ['add-text-to-image', 'watermark-image', 'meme-generator', 'image-annotator', 'censor-image'] },
      { key: 'enhance', slugs: ['sharpen-image', 'denoise-image', 'fix-white-balance', 'scan-cleaner', 'photo-filters', 'image-color-replacer', 'halftone-dither-effect', 'pixel-art-converter'] },
      { key: 'social', slugs: ['social-media-image-resizer', 'instagram-post-resizer', 'instagram-story-resizer', 'youtube-thumbnail-maker', 'youtube-banner-maker', 'facebook-cover-maker', 'linkedin-banner-maker', 'pinterest-pin-resizer', 'open-graph-image-maker'] },
      { key: 'combine', slugs: ['merge-images', 'photo-collage-maker', 'split-image', 'contact-sheet-maker', 'poster-splitter'] },
    ],
  },
  {
    slug: 'image-format-converters',
    category: 'convert-formats',
    groups: [
      { key: 'any', slugs: ['convert-image'] },
      { key: 'heic', slugs: ['heic-to-jpg', 'heic-to-png', 'heic-to-webp'] },
      { key: 'jpgPng', slugs: ['jpg-to-png', 'png-to-jpg'] },
      { key: 'web', slugs: ['jpg-to-webp', 'png-to-webp', 'webp-to-jpg', 'webp-to-png', 'avif-to-jpg', 'avif-to-png', 'jpg-to-avif', 'png-to-avif'] },
      { key: 'other', slugs: ['gif-to-png', 'gif-to-jpg', 'bmp-to-jpg', 'bmp-to-png', 'tiff-to-jpg', 'tiff-to-png', 'svg-to-png', 'svg-to-jpg', 'svg-to-webp'] },
      { key: 'pdf', slugs: ['svg-to-pdf', 'webp-to-pdf', 'ocr-multiple-images'] },
    ],
  },
  {
    slug: 'qr-code-and-barcode-tools',
    category: 'utilities',
    groups: [
      { key: 'qr', slugs: ['qr-code-generator', 'wifi-qr-code-generator', 'whatsapp-qr-code-generator', 'vcard-qr-code-generator', 'payment-qr-code-generator', 'bulk-qr-code-generator'] },
      { key: 'barcodes', slugs: ['barcode-generator', 'ean-barcode-generator', 'upc-barcode-generator', 'isbn-barcode-generator', 'data-matrix-generator', 'pdf417-generator', 'bulk-barcode-generator'] },
      { key: 'read', slugs: ['qr-code-reader', 'barcode-scanner'] },
    ],
  },
  {
    slug: 'image-utilities',
    category: 'utilities',
    groups: [
      { key: 'inspect', slugs: ['image-analyzer', 'exif-viewer', 'image-histogram', 'compare-images', 'duplicate-photo-finder', 'remove-image-metadata'] },
      { key: 'colour', slugs: ['image-color-picker', 'image-palette-generator', 'color-blindness-simulator'] },
      { key: 'size', slugs: ['change-image-dpi', 'pixels-to-inches', 'inches-to-pixels', 'pixels-to-cm', 'cm-to-pixels', 'resolution-calculator', 'paper-size-converter', 'aspect-ratio-calculator', 'graph-paper-maker'] },
      { key: 'text', slugs: ['image-to-text', 'hide-text-in-image', 'morse-code-translator'] },
    ],
  },
];

/** Categories covered completely by hubs (Compress and Developer are too small for a page of their own) */
export const HUB_CATEGORIES: ToolCategory[] = ['pdf-documents', 'edit-transform', 'convert-formats', 'utilities'];

export const isHub = (slug: string): slug is HubSlug => HUBS.some((h) => h.slug === slug);
export const getHub = (slug: string) => HUBS.find((h) => h.slug === slug);
/** The hub listing a tool, if any */
export const hubForTool = (toolSlug: string) => HUBS.find((h) => h.groups.some((g) => g.slugs.includes(toolSlug)));
/** Where a category link goes: its hub where it has one (Utilities: image utilities) */
export const HUB_FOR_CATEGORY: Partial<Record<ToolCategory, HubSlug>> = {
  'pdf-documents': 'pdf-tools',
  'edit-transform': 'image-editing-tools',
  'convert-formats': 'image-format-converters',
  utilities: 'image-utilities',
};
