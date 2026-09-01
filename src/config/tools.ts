export type ToolCategory = 'edit-transform' | 'optimize-compress' | 'convert-formats' | 'utilities' | 'developer';

export interface ToolDefinition {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: ToolCategory;
  iconName: string;
  badge?: string;
  accept: string;
  popular?: boolean;
}

export const CATEGORIES: Record<ToolCategory, { name: string; description: string; icon: string }> = {
  'edit-transform': {
    name: 'Edit & Transform',
    description: 'Crop, resize, rotate, flip, and customize photo canvas dimensions with high precision.',
    icon: 'Crop',
  },
  'optimize-compress': {
    name: 'Optimize & Compress',
    description: 'Reduce file sizes up to 90% and strip privacy-leaking EXIF metadata.',
    icon: 'Zap',
  },
  'convert-formats': {
    name: 'Convert Formats',
    description: 'Fast format conversion between JPG, PNG, WebP, SVG, and more.',
    icon: 'RefreshCw',
  },
  'utilities': {
    name: 'Inspect & Utilities',
    description: 'Analyze pixel metrics, pick precise hex colors, and generate brand palettes.',
    icon: 'Pipette',
  },
  'developer': {
    name: 'Developer Tools',
    description: 'Generate favicon bundles, Base64 strings, and data URIs ready for code.',
    icon: 'Code2',
  },
};

export const TOOLS: ToolDefinition[] = [
  // Edit & Transform (8)
  {
    slug: 'crop-image',
    name: 'Crop Image',
    shortName: 'Crop',
    description: 'Crop photos with aspect ratio presets (1:1, 16:9, 4:3, 9:16) and custom precision grid handles.',
    category: 'edit-transform',
    iconName: 'Crop',
    accept: 'image/png,image/jpeg,image/webp,image/avif,image/gif',
    popular: true,
  },
  {
    slug: 'resize-image',
    name: 'Resize Image',
    shortName: 'Resize',
    description: 'Scale dimensions by percentage or exact pixel values with aspect ratio locking.',
    category: 'edit-transform',
    iconName: 'Scaling',
    accept: 'image/png,image/jpeg,image/webp,image/avif',
    popular: true,
  },
  {
    slug: 'rotate-image',
    name: 'Rotate Image',
    shortName: 'Rotate',
    description: 'Rotate images by 90°, 180°, 270°, or fine-tune angles with real-time preview.',
    category: 'edit-transform',
    iconName: 'RotateCw',
    accept: 'image/png,image/jpeg,image/webp',
  },
  {
    slug: 'flip-image',
    name: 'Flip Image',
    shortName: 'Flip',
    description: 'Mirror photos horizontally or vertically with instant browser canvas rendering.',
    category: 'edit-transform',
    iconName: 'FlipHorizontal',
    accept: 'image/png,image/jpeg,image/webp',
  },
  {
    slug: 'add-text-to-image',
    name: 'Add Text to Image',
    shortName: 'Add Text',
    description: 'Overlay custom typography, captions, and watermarks with adjustable opacity, font, and color.',
    category: 'edit-transform',
    iconName: 'Type',
    accept: 'image/png,image/jpeg,image/webp',
  },
  {
    slug: 'watermark-image',
    name: 'Watermark Image',
    shortName: 'Watermark',
    description: 'Protect creative assets by overlaying custom text or logo watermarks across images.',
    category: 'edit-transform',
    iconName: 'ShieldCheck',
    accept: 'image/png,image/jpeg,image/webp',
  },
  {
    slug: 'add-border-to-image',
    name: 'Add Border to Image',
    shortName: 'Add Border',
    description: 'Apply framed borders, margins, and custom color paddings around photos.',
    category: 'edit-transform',
    iconName: 'Square',
    accept: 'image/png,image/jpeg,image/webp',
  },
  {
    slug: 'round-image',
    name: 'Round Image Corners',
    shortName: 'Round Corners',
    description: 'Create circular profile avatars and soft rounded corner graphics with alpha transparency.',
    category: 'edit-transform',
    iconName: 'CircleDot',
    accept: 'image/png,image/jpeg,image/webp',
  },

  // Optimize & Compress (3)
  {
    slug: 'compress-image',
    name: 'Compress Image',
    shortName: 'Compress',
    description: 'Smart lossy/lossless image compression reducing size by up to 90% without quality loss.',
    category: 'optimize-compress',
    iconName: 'Minimize2',
    accept: 'image/png,image/jpeg,image/webp',
    popular: true,
  },
  {
    slug: 'bulk-image-compressor',
    name: 'Bulk Image Compressor',
    shortName: 'Bulk Compress',
    description: 'Batch compress multiple photos simultaneously and download all results in a single ZIP package.',
    category: 'optimize-compress',
    iconName: 'Archive',
    accept: 'image/png,image/jpeg,image/webp',
    badge: 'Batch',
  },
  {
    slug: 'remove-image-metadata',
    name: 'Remove Image Metadata',
    shortName: 'EXIF Stripper',
    description: 'Strip GPS coordinates, camera model, timestamps, and private EXIF metadata from photos.',
    category: 'optimize-compress',
    iconName: 'ShieldAlert',
    accept: 'image/png,image/jpeg,image/webp',
  },

  // Convert Formats (8)
  {
    slug: 'convert-image',
    name: 'Universal Image Converter',
    shortName: 'Converter',
    description: 'Convert between PNG, JPG, WebP, AVIF, GIF, BMP, and SVG formats instantly.',
    category: 'convert-formats',
    iconName: 'Repeat',
    accept: 'image/*',
    popular: true,
  },
  {
    slug: 'bulk-image-resizer',
    name: 'Bulk Image Resizer',
    shortName: 'Bulk Resize',
    description: 'Resize dozens of images at once to unified dimensions and package into a ZIP file.',
    category: 'convert-formats',
    iconName: 'Layers',
    accept: 'image/png,image/jpeg,image/webp',
    badge: 'Batch',
  },
  {
    slug: 'jpg-to-png',
    name: 'JPG to PNG',
    shortName: 'JPG → PNG',
    description: 'Convert JPEG images to lossless PNG format with transparent canvas support.',
    category: 'convert-formats',
    iconName: 'ArrowRightLeft',
    accept: 'image/jpeg',
  },
  {
    slug: 'png-to-jpg',
    name: 'PNG to JPG',
    shortName: 'PNG → JPG',
    description: 'Convert PNG graphics to lightweight JPG photos with custom background fill color.',
    category: 'convert-formats',
    iconName: 'ArrowRightLeft',
    accept: 'image/png',
  },
  {
    slug: 'jpg-to-webp',
    name: 'JPG to WebP',
    shortName: 'JPG → WebP',
    description: 'Convert JPG photos to next-generation modern WebP format for fast web page load times.',
    category: 'convert-formats',
    iconName: 'ArrowRightLeft',
    accept: 'image/jpeg',
  },
  {
    slug: 'png-to-webp',
    name: 'PNG to WebP',
    shortName: 'PNG → WebP',
    description: 'Convert PNG images to WebP format preserving alpha transparency with smaller file size.',
    category: 'convert-formats',
    iconName: 'ArrowRightLeft',
    accept: 'image/png',
  },
  {
    slug: 'webp-to-jpg',
    name: 'WebP to JPG',
    shortName: 'WebP → JPG',
    description: 'Convert modern WebP images to universal standard JPEG for maximum device compatibility.',
    category: 'convert-formats',
    iconName: 'ArrowRightLeft',
    accept: 'image/webp',
  },
  {
    slug: 'webp-to-png',
    name: 'WebP to PNG',
    shortName: 'WebP → PNG',
    description: 'Convert WebP assets to lossless PNG format maintaining crisp edges and transparency.',
    category: 'convert-formats',
    iconName: 'ArrowRightLeft',
    accept: 'image/webp',
  },

  // Inspect & Utilities (3)
  {
    slug: 'image-analyzer',
    name: 'Image Analyzer',
    shortName: 'Analyzer',
    description: 'Inspect exact pixel dimensions, aspect ratio, color depth, MIME type, and byte metrics.',
    category: 'utilities',
    iconName: 'BarChart2',
    accept: 'image/*',
  },
  {
    slug: 'image-color-picker',
    name: 'Image Color Picker',
    shortName: 'Color Picker',
    description: 'Inspect and sample exact pixel colors using a precision magnifying eyedropper tool.',
    category: 'utilities',
    iconName: 'Pipette',
    accept: 'image/*',
    popular: true,
  },
  {
    slug: 'image-palette-generator',
    name: 'Image Palette Generator',
    shortName: 'Palette',
    description: 'Extract the dominant color palette and complementary swatches from any photo with Hex/RGB codes.',
    category: 'utilities',
    iconName: 'Palette',
    accept: 'image/*',
  },

  // Developer Tools (5)
  {
    slug: 'favicon-generator',
    name: 'Favicon Generator',
    shortName: 'Favicon',
    description: 'Generate full multi-size favicon bundles (.ico, 16x16, 32x32, Apple Touch, Web Manifest) in a ZIP.',
    category: 'developer',
    iconName: 'Globe',
    accept: 'image/png,image/jpeg,image/svg+xml',
    badge: 'Popular',
    popular: true,
  },
  {
    slug: 'image-to-base64',
    name: 'Image to Base64',
    shortName: 'Image → Base64',
    description: 'Convert image files into Base64 encoded string data for inline CSS and HTML embeds.',
    category: 'developer',
    iconName: 'Binary',
    accept: 'image/*',
  },
  {
    slug: 'image-to-data-uri',
    name: 'Image to Data URI',
    shortName: 'Image → Data URI',
    description: 'Generate ready-to-paste `data:image/...;base64` strings with single-click copying.',
    category: 'developer',
    iconName: 'Code',
    accept: 'image/*',
  },
  {
    slug: 'base64-to-image',
    name: 'Base64 to Image',
    shortName: 'Base64 → Image',
    description: 'Decode Base64 raw strings and Data URIs back into downloadable PNG/JPEG images.',
    category: 'developer',
    iconName: 'FileCode',
    accept: 'text/plain',
  },
  {
    slug: 'svg-to-png',
    name: 'SVG to PNG',
    shortName: 'SVG → PNG',
    description: 'Rasterize vector SVG files into high-resolution lossless PNG bitmaps at custom scales.',
    category: 'developer',
    iconName: 'Sparkles',
    accept: 'image/svg+xml,.svg',
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}
