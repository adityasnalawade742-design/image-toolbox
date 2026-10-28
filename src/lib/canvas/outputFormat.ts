export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

export interface OutputFormatPolicy {
  /** Default export format for this tool and input */
  format: OutputFormat;
  /** Whether the shared workspace shows a format picker (compress-image has its own) */
  selectable: boolean;
}

// Single-purpose converters always export their target format
const FIXED_TARGETS: Record<string, OutputFormat> = {
  'jpg-to-png': 'image/png',
  'webp-to-png': 'image/png',
  'svg-to-png': 'image/png',
  'png-to-jpg': 'image/jpeg',
  'webp-to-jpg': 'image/jpeg',
  'jpg-to-webp': 'image/webp',
  'png-to-webp': 'image/webp',
  'heic-to-jpg': 'image/jpeg',
  'heic-to-png': 'image/png',
  'heic-to-webp': 'image/webp',
  'avif-to-jpg': 'image/jpeg',
  'avif-to-png': 'image/png',
  'jpg-to-avif': 'image/avif',
  'png-to-avif': 'image/avif',
  'gif-to-png': 'image/png',
  'gif-to-jpg': 'image/jpeg',
  'bmp-to-jpg': 'image/jpeg',
  'bmp-to-png': 'image/png',
  'svg-to-jpg': 'image/jpeg',
  'svg-to-webp': 'image/webp',
};

// Editors that should hand back the same kind of file they were given
const KEEP_INPUT_FORMAT = new Set([
  'crop-image',
  'resize-image',
  'rotate-image',
  'flip-image',
  'add-text-to-image',
  'watermark-image',
  'add-border-to-image',
  'remove-image-metadata',
]);

/** Map an input MIME type to the closest format the browser can export */
export function exportableFormat(inputMime: string): OutputFormat {
  const mime = inputMime.toLowerCase();
  if (mime === 'image/jpeg' || mime === 'image/jpg' || mime === 'image/heic' || mime === 'image/heif') return 'image/jpeg';
  if (mime === 'image/webp') return 'image/webp';
  if (mime === 'image/avif') return 'image/avif';
  return 'image/png';
}

export function getOutputFormatPolicy(slug: string, inputMime: string): OutputFormatPolicy {
  if (FIXED_TARGETS[slug]) return { format: FIXED_TARGETS[slug], selectable: false };
  if (slug === 'compress-image') return { format: 'image/webp', selectable: false };
  if (slug === 'round-image') return { format: 'image/png', selectable: true };
  if (slug === 'convert-image') {
    return { format: exportableFormat(inputMime) === 'image/jpeg' ? 'image/webp' : 'image/png', selectable: true };
  }
  if (KEEP_INPUT_FORMAT.has(slug)) return { format: exportableFormat(inputMime), selectable: true };
  return { format: 'image/png', selectable: false };
}

export function formatExtension(format: OutputFormat): string {
  return format === 'image/jpeg' ? 'jpg' : format.replace('image/', '');
}
