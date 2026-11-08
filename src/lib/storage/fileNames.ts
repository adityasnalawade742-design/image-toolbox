/** `photo.jpg` + `compressed` + `webp` → `photo-compressed.webp` */
export function outputFileName(originalName: string, suffix: string, ext: string): string {
  return `${originalName.replace(/\.[^/.]+$/, '')}-${suffix}.${ext}`;
}

/**
 * Returns a function that de-duplicates names case-insensitively (ZIP extractors on Windows/macOS
 * treat `A.png` and `a.png` as the same file) by appending ` (2)`, ` (3)`, ...
 */
export function createUniqueNamer() {
  const counts = new Map<string, number>();
  return (name: string): string => {
    const key = name.toLowerCase();
    const seen = counts.get(key) || 0;
    counts.set(key, seen + 1);
    if (seen === 0) return name;
    const dot = name.lastIndexOf('.');
    return dot > 0 ? `${name.slice(0, dot)} (${seen + 1})${name.slice(dot)}` : `${name} (${seen + 1})`;
  };
}

// What the generic image tools did to a file, for its download name ("photo-cropped.jpg")
const DONE: Record<string, string> = {
  'crop-image': 'cropped', 'resize-image': 'resized', 'rotate-image': 'rotated', 'flip-image': 'flipped', 'add-text-to-image': 'text',
  'watermark-image': 'watermarked', 'add-border-to-image': 'border', 'round-image': 'round', 'compress-image': 'compressed',
  'change-image-dpi': 'dpi', 'remove-image-metadata': 'no-metadata',
};

/**
 * Download name for a generic image tool. Converters keep the plain name with the new extension ("photo.heic" →
 * "photo.jpg"); editing tools say what they did. When a converter's output has the input's own extension, a
 * suffix keeps it from looking like (or replacing) the original.
 */
export function toolOutputName(slug: string, base: string, ext: string, inputExt = ''): string {
  const done = DONE[slug];
  if (done) return `${base}-${done}.${ext}`;
  const same = inputExt.toLowerCase().replace('jpeg', 'jpg') === ext.toLowerCase().replace('jpeg', 'jpg');
  return same ? `${base}-converted.${ext}` : `${base}.${ext}`;
}
