/**
 * Compress an image to fit under an exact byte budget (for forms that say "under 50 KB").
 * Searches the encoder quality for the best result that fits, and shrinks the dimensions only when
 * even the lowest quality is still too big.
 */

export type TargetFormat = 'image/jpeg' | 'image/webp';

export interface Encoded {
  quality: number;
  blob: Blob;
}

/**
 * Highest quality whose encoded size fits maxBytes. `fit` is null when even `min` quality is too big;
 * `smallest` is always the lowest-quality attempt, so callers can decide what to do next.
 */
export async function searchQuality(
  encode: (quality: number) => Promise<Blob>,
  maxBytes: number,
  { min = 0.05, max = 0.95, steps = 7 } = {}
): Promise<{ fit: Encoded | null; smallest: Encoded }> {
  const top = await encode(max);
  if (top.size <= maxBytes) return { fit: { quality: max, blob: top }, smallest: { quality: max, blob: top } };

  const bottom = await encode(min);
  const smallest = { quality: min, blob: bottom };
  if (bottom.size > maxBytes) return { fit: null, smallest };

  let lo = min;
  let hi = max;
  let best: Encoded = smallest;
  for (let i = 0; i < steps; i++) {
    const mid = (lo + hi) / 2;
    const blob = await encode(mid);
    if (blob.size <= maxBytes) {
      best = { quality: mid, blob };
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return { fit: best, smallest };
}

export interface TargetOptions {
  maxBytes: number;
  format: TargetFormat;
  /** Exact output size, filled by cropping from the centre (passport-style presets) */
  exactSize?: { width: number; height: number };
  /** Fill for transparent areas (JPG has no transparency) */
  background?: string;
}

export interface TargetResult {
  blob: Blob;
  quality: number;
  width: number;
  height: number;
  /** False when the budget can't be met (only possible with exactSize, which can't shrink) */
  fits: boolean;
}

function render(source: CanvasImageSource, srcW: number, srcH: number, w: number, h: number, background: string, crop: boolean) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, w, h);
  ctx.imageSmoothingQuality = 'high';
  if (crop) {
    // Cover the frame and trim the overflow evenly from both sides
    const scale = Math.max(w / srcW, h / srcH);
    const dw = srcW * scale;
    const dh = srcH * scale;
    ctx.drawImage(source, (w - dw) / 2, (h - dh) / 2, dw, dh);
  } else {
    ctx.drawImage(source, 0, 0, w, h);
  }
  return canvas;
}

const toBlob = (canvas: HTMLCanvasElement, format: TargetFormat, quality: number) =>
  new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('encode failed'))), format, quality));

export async function compressToTarget(source: CanvasImageSource, srcW: number, srcH: number, opts: TargetOptions): Promise<TargetResult> {
  const background = opts.background || '#ffffff';
  const crop = Boolean(opts.exactSize);
  let w = opts.exactSize?.width ?? srcW;
  let h = opts.exactSize?.height ?? srcH;

  for (let attempt = 0; attempt < 10; attempt++) {
    const canvas = render(source, srcW, srcH, w, h, background, crop);
    const { fit, smallest } = await searchQuality((q) => toBlob(canvas, opts.format, q), opts.maxBytes);
    if (fit) return { blob: fit.blob, quality: fit.quality, width: w, height: h, fits: true };
    if (crop || (w <= 16 && h <= 16)) return { blob: smallest.blob, quality: smallest.quality, width: w, height: h, fits: false };
    // File size scales roughly with pixel count: shrink both sides by the square root of the overshoot
    const factor = Math.min(0.9, Math.max(0.3, Math.sqrt(opts.maxBytes / smallest.blob.size) * 0.95));
    w = Math.max(16, Math.round(w * factor));
    h = Math.max(16, Math.round(h * factor));
  }
  const canvas = render(source, srcW, srcH, w, h, background, crop);
  const blob = await toBlob(canvas, opts.format, 0.05);
  return { blob, quality: 0.05, width: w, height: h, fits: blob.size <= opts.maxBytes };
}
