export interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
  r: number;
  g: number;
  b: number;
  percentage: number;
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => {
    const hex = Math.max(0, Math.min(255, Math.round(c))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

export function rgbToHsl(r: number, g: number, b: number): string {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

/**
 * Calculates color Euclidean distance in RGB space to ensure color diversity
 */
function colorDistance(c1: { r: number; g: number; b: number }, c2: { r: number; g: number; b: number }): number {
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}

/**
 * Extracts dominant representative colors using downsampled grid bucket quantization.
 */
export function extractDominantColors(
  img: HTMLImageElement,
  count: 3 | 5 | 8 = 5
): ColorInfo[] {
  const canvas = document.createElement('canvas');
  const sampleSize = 100; // 100x100 = 10,000 pixels (instant execution)
  canvas.width = sampleSize;
  canvas.height = sampleSize;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  
  if (!ctx) return [];

  ctx.drawImage(img, 0, 0, sampleSize, sampleSize);
  const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize).data;

  // Quantization bucket map
  const colorBuckets = new Map<string, { r: number; g: number; b: number; count: number }>();
  let totalValidPixels = 0;

  const quantStep = 16; // 16 levels per channel -> 4096 color buckets

  for (let i = 0; i < imageData.length; i += 4) {
    const a = imageData[i + 3];
    if (a < 128) continue; // Skip transparent pixels

    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];

    const qr = Math.floor(r / quantStep) * quantStep;
    const qg = Math.floor(g / quantStep) * quantStep;
    const qb = Math.floor(b / quantStep) * quantStep;

    const key = `${qr},${qg},${qb}`;
    const existing = colorBuckets.get(key);
    if (existing) {
      existing.count++;
      existing.r = (existing.r * (existing.count - 1) + r) / existing.count;
      existing.g = (existing.g * (existing.count - 1) + g) / existing.count;
      existing.b = (existing.b * (existing.count - 1) + b) / existing.count;
    } else {
      colorBuckets.set(key, { r, g, b, count: 1 });
    }
    totalValidPixels++;
  }

  // Sort buckets by frequency
  const sorted = Array.from(colorBuckets.values()).sort((a, b) => b.count - a.count);

  // Pick distinct dominant colors with minimum distance threshold
  const distinctColors: { r: number; g: number; b: number; count: number }[] = [];
  const minDistance = 35; // Minimum RGB Euclidean distance between palette swatches

  for (const candidate of sorted) {
    if (distinctColors.length >= count) break;
    
    const isDistinct = distinctColors.every(c => colorDistance(c, candidate) > minDistance);
    if (isDistinct) {
      distinctColors.push(candidate);
    }
  }

  // Fallback if not enough distinct colors were found
  if (distinctColors.length < count) {
    for (const candidate of sorted) {
      if (distinctColors.length >= count) break;
      if (!distinctColors.includes(candidate)) {
        distinctColors.push(candidate);
      }
    }
  }

  return distinctColors.map(c => {
    const r = Math.round(c.r);
    const g = Math.round(c.g);
    const b = Math.round(c.b);
    const hex = rgbToHex(r, g, b);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hsl = rgbToHsl(r, g, b);
    const percentage = totalValidPixels > 0 ? Math.round((c.count / totalValidPixels) * 100) : 0;

    return { hex, rgb, hsl, r, g, b, percentage };
  });
}
