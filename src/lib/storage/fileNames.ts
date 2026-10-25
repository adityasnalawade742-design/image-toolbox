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
