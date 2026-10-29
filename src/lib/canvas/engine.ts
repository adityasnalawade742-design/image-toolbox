import { withJpegIcc } from './iccProfile';
import { canEncodeWasm, encodeAvif, encodeWith, isAvifSuperseded } from './avifEncoder';

export interface TextOverlayOptions {
  text: string;
  fontFamily?: string;
  fontSize: number;
  color: string;
  opacity: number;
  position: 'top' | 'center' | 'bottom' | 'custom';
  customYPercent?: number; // 0 to 100
  customXPercent?: number; // 0 to 100
  bold?: boolean;
  italic?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  dropShadow?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  backgroundColor?: string;
  backgroundOpacity?: number;
  backgroundPadding?: number;
}

export interface WatermarkOptions {
  text?: string;
  imageElement?: HTMLImageElement;
  imageScale?: number;
  opacity: number;
  color?: string;
  fontSize?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'custom';
  /** Centre of the watermark as a percentage of the image, when position is 'custom' (set by dragging) */
  customXPercent?: number;
  customYPercent?: number;
  rotation?: number;
  repeat?: boolean;
}

/**
 * Where a single (non-tiled) watermark sits, in canvas pixels: its centre and unrotated size.
 * Shared by the renderer and the drag frame on the preview, so the two can't drift apart.
 */
export function watermarkBox(canvasW: number, canvasH: number, wOpt: WatermarkOptions, measureText?: (text: string, font: string) => number) {
  const margin = Math.max(24, Math.round(Math.min(canvasW, canvasH) * 0.03));
  let w: number;
  let h: number;
  if (wOpt.imageElement) {
    const img = wOpt.imageElement;
    w = Math.max(20, Math.round(canvasW * ((wOpt.imageScale || 20) / 100)));
    h = Math.round((w / (img.naturalWidth || img.width || 1)) * (img.naturalHeight || img.height || 1));
  } else if (wOpt.text && wOpt.text.trim()) {
    const size = watermarkFontSize(canvasW, wOpt);
    w = measureText ? measureText(wOpt.text, watermarkFont(size)) : size * wOpt.text.length * 0.55;
    h = size;
  } else {
    return null;
  }
  if (wOpt.position === 'custom' && wOpt.customXPercent !== undefined && wOpt.customYPercent !== undefined) {
    return { cx: (canvasW * wOpt.customXPercent) / 100, cy: (canvasH * wOpt.customYPercent) / 100, w, h };
  }
  const pos = wOpt.position && wOpt.position !== 'custom' ? wOpt.position : 'bottom-right';
  // 'center' is both axes; otherwise the position is '<vertical>-<horizontal>'
  const [vPos, hPos] = pos === 'center' ? ['center', 'center'] : pos.split('-');
  const cx = hPos === 'left' ? margin + w / 2 : hPos === 'center' ? canvasW / 2 : canvasW - margin - w / 2;
  const cy = vPos === 'top' ? margin + h / 2 : vPos === 'center' ? canvasH / 2 : canvasH - margin - h / 2;
  return { cx, cy, w, h };
}

export const watermarkFontSize = (canvasW: number, wOpt: WatermarkOptions) => wOpt.fontSize || Math.max(16, Math.round(canvasW / 25));
export const watermarkFont = (size: number) => `600 ${size}px Inter, sans-serif`;

export interface BorderOptions {
  width: number;
  color: string;
  opacity?: number;
  mode?: 'inside' | 'outside';
}

export interface ImageProcessingOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'image/jpeg' | 'image/png' | 'image/webp';
  rotation?: number; // arbitrary angle in degrees (-180 to 180)
  flipH?: boolean;
  flipV?: boolean;
  crop?: { x: number; y: number; width: number; height: number };
  textOverlay?: TextOverlayOptions;
  watermark?: WatermarkOptions;
  border?: BorderOptions;
  cornerRadius?: number;
  isCircle?: boolean;
  /** For a circle from a non-square photo without a crop: where along the long side the circle sits (0–1, centre 0.5) */
  circleFocus?: number;
  backgroundColor?: string; // For JPG conversion / background fill
  /** Work in Display P3 to keep a phone photo's wider colours (only when saving to JPG with its profile) */
  colorSpace?: PredefinedColorSpace;
}

export function loadImage(src: string | File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);

    if (typeof src === 'string') {
      img.src = src;
    } else {
      const url = URL.createObjectURL(src);
      img.src = url;
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load image file'));
      };
    }
  });
}

/**
 * Creates a fast-rendering downscaled proxy for real-time mobile canvas interactions.
 */
export function createImageProxy(
  img: HTMLImageElement,
  maxDim: number = 1200
): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const origW = img.naturalWidth || img.width;
    const origH = img.naturalHeight || img.height;

    if (origW <= maxDim && origH <= maxDim) {
      resolve(img);
      return;
    }

    const scale = Math.min(maxDim / origW, maxDim / origH);
    const targetW = Math.round(origW * scale);
    const targetH = Math.round(origH * scale);

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      resolve(img);
      return;
    }

    ctx.drawImage(img, 0, 0, targetW, targetH);
    const proxyImg = new Image();
    proxyImg.onload = () => resolve(proxyImg);
    proxyImg.onerror = () => resolve(img);
    // JPEG keeps the proxy small, but would turn transparent areas black in the preview
    proxyImg.src = checkImageTransparency(img) ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg', 0.88);
  });
}

/**
 * The source region, shrunk in halving steps with high-quality smoothing until it is within 2× of the target size.
 * One big downscale samples only a few source pixels per output pixel, which leaves jagged edges and moiré;
 * halving steps average all of them. Returns the source unchanged when there's little to shrink.
 */
export function stepDown(
  src: CanvasImageSource,
  sx: number,
  sy: number,
  sw: number,
  sh: number,
  targetW: number,
  targetH: number,
  colorSpace: PredefinedColorSpace = 'srgb'
): { source: CanvasImageSource; sx: number; sy: number; sw: number; sh: number } {
  let source: CanvasImageSource = src;
  let w = sw;
  let h = sh;
  let x = sx;
  let y = sy;
  while (w / 2 >= targetW && h / 2 >= targetH && w >= 4 && h >= 4) {
    const next = document.createElement('canvas');
    next.width = Math.max(1, Math.round(w / 2));
    next.height = Math.max(1, Math.round(h / 2));
    const nctx = next.getContext('2d', { colorSpace });
    if (!nctx) break;
    nctx.imageSmoothingEnabled = true;
    nctx.imageSmoothingQuality = 'high';
    nctx.drawImage(source, x, y, w, h, 0, 0, next.width, next.height);
    source = next;
    x = 0;
    y = 0;
    w = next.width;
    h = next.height;
  }
  return { source, sx: x, sy: y, sw: w, sh: h };
}

export function processCanvas(
  img: HTMLImageElement,
  options: ImageProcessingOptions = {}
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true, colorSpace: options.colorSpace ?? 'srgb' });
  if (!ctx) throw new Error('Canvas 2D context not available');

  // 1. Source Crop Dimensions
  let srcX = 0;
  let srcY = 0;
  let srcW = img.naturalWidth || img.width;
  let srcH = img.naturalHeight || img.height;

  if (options.crop) {
    srcX = Math.max(0, Math.min(srcW - 1, options.crop.x));
    srcY = Math.max(0, Math.min(srcH - 1, options.crop.y));
    srcW = Math.max(1, Math.min(srcW - srcX, options.crop.width));
    srcH = Math.max(1, Math.min(srcH - srcY, options.crop.height));
  }

  // 2. Base Target Dimensions
  let targetW = options.width || srcW;
  let targetH = options.height || srcH;

  // A circle from a non-square photo: take a square around the chosen point, so the circle fills the frame
  // instead of leaving empty margins on the long sides
  if (options.isCircle && !options.crop && srcW !== srcH) {
    const side = Math.min(srcW, srcH);
    const focus = Math.max(0, Math.min(1, options.circleFocus ?? 0.5));
    const scale = Math.min(targetW / srcW, targetH / srcH);
    if (srcW > srcH) srcX += (srcW - side) * focus;
    else srcY += (srcH - side) * focus;
    srcW = srcH = side;
    targetW = targetH = Math.max(1, Math.round(side * scale));
  }

  // 3. Rotation Bounding Box Mathematics
  const angleDeg = options.rotation || 0;
  const angleRad = (angleDeg * Math.PI) / 180;
  const absCos = Math.abs(Math.cos(angleRad));
  const absSin = Math.abs(Math.sin(angleRad));

  let rotatedW = Math.round(targetW * absCos + targetH * absSin);
  let rotatedH = Math.round(targetW * absSin + targetH * absCos);

  // 4. Border Expansion if mode is 'outside'
  const borderWidth = options.border && options.border.width > 0 ? options.border.width : 0;
  const isOutsideBorder = options.border?.mode === 'outside';

  const finalCanvasW = isOutsideBorder ? rotatedW + borderWidth * 2 : rotatedW;
  const finalCanvasH = isOutsideBorder ? rotatedH + borderWidth * 2 : rotatedH;

  canvas.width = Math.max(1, finalCanvasW);
  canvas.height = Math.max(1, finalCanvasH);

  // 5. Background Fill (e.g. for JPG or PNG-to-JPG)
  if (options.backgroundColor) {
    ctx.fillStyle = options.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // 6. Draw Image with Rotation, Flip, and Corner Masking
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(angleRad);
  ctx.scale(options.flipH ? -1 : 1, options.flipV ? -1 : 1);

  // Corner Mask / Circle Avatar
  if (options.isCircle) {
    const radius = Math.min(targetW, targetH) / 2;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.clip();
  } else if (options.cornerRadius && options.cornerRadius > 0) {
    const r = Math.min(options.cornerRadius, targetW / 2, targetH / 2);
    ctx.beginPath();
    ctx.roundRect(-targetW / 2, -targetH / 2, targetW, targetH, r);
    ctx.clip();
  }

  // Sharp downscales: shrink in steps, then the last step with the best smoothing the browser has
  const down = stepDown(img, srcX, srcY, srcW, srcH, targetW, targetH, options.colorSpace);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(down.source, down.sx, down.sy, down.sw, down.sh, -targetW / 2, -targetH / 2, targetW, targetH);
  ctx.restore();

  // 7. Draw Border
  if (borderWidth > 0 && options.border) {
    ctx.save();
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = options.border.color || '#57c1ff';
    ctx.globalAlpha = options.border.opacity !== undefined ? options.border.opacity : 1.0;
    ctx.strokeRect(borderWidth / 2, borderWidth / 2, canvas.width - borderWidth, canvas.height - borderWidth);
    ctx.restore();
  }

  // 8. Draw Text Overlay
  if (options.textOverlay && options.textOverlay.text.trim()) {
    const tOpt = options.textOverlay;
    ctx.save();
    const style = `${tOpt.italic ? 'italic ' : ''}${tOpt.bold ? 'bold ' : ''}${tOpt.fontSize}px ${tOpt.fontFamily || 'Inter, sans-serif'}`;
    ctx.font = style;
    ctx.globalAlpha = tOpt.opacity !== undefined ? tOpt.opacity : 1.0;
    ctx.textAlign = tOpt.textAlign || 'center';
    ctx.textBaseline = 'middle';

    const lines = tOpt.text.split('\n');
    const lineHeight = tOpt.fontSize * 1.25;
    const totalTextHeight = lines.length * lineHeight;

    let startY = canvas.height / 2;
    if (tOpt.position === 'top') {
      startY = 30 + lineHeight / 2;
    } else if (tOpt.position === 'bottom') {
      startY = canvas.height - 30 - totalTextHeight + lineHeight / 2;
    } else if (tOpt.position === 'custom' && tOpt.customYPercent !== undefined) {
      startY = (canvas.height * tOpt.customYPercent) / 100;
    } else {
      startY = (canvas.height - totalTextHeight) / 2 + lineHeight / 2;
    }

    let posX = canvas.width / 2;
    if (tOpt.position === 'custom' && tOpt.customXPercent !== undefined) {
      posX = (canvas.width * tOpt.customXPercent) / 100;
    } else if (tOpt.textAlign === 'left') {
      posX = 30;
    } else if (tOpt.textAlign === 'right') {
      posX = canvas.width - 30;
    }

    // Measure maximum line width for background badge
    if (tOpt.backgroundColor) {
      let maxLineWidth = 0;
      lines.forEach((line) => {
        const metrics = ctx.measureText(line);
        if (metrics.width > maxLineWidth) maxLineWidth = metrics.width;
      });

      const pad = tOpt.backgroundPadding ?? 16;
      const bgW = maxLineWidth + pad * 2;
      const bgH = totalTextHeight + pad * 2;

      let bgX = posX - bgW / 2;
      if (tOpt.textAlign === 'left') bgX = posX - pad;
      else if (tOpt.textAlign === 'right') bgX = posX - bgW + pad;

      const bgY = startY - lineHeight / 2 - pad;

      ctx.save();
      ctx.fillStyle = tOpt.backgroundColor;
      ctx.globalAlpha = (tOpt.opacity !== undefined ? tOpt.opacity : 1.0) * (tOpt.backgroundOpacity ?? 0.85);
      ctx.beginPath();
      ctx.roundRect(bgX, bgY, bgW, bgH, 8);
      ctx.fill();
      ctx.restore();
    }

    if (tOpt.dropShadow) {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
    }

    lines.forEach((line, i) => {
      const lineY = startY + i * lineHeight;
      if (tOpt.strokeWidth && tOpt.strokeWidth > 0) {
        ctx.strokeStyle = tOpt.strokeColor || '#000000';
        ctx.lineWidth = tOpt.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.strokeText(line, posX, lineY);
      }
      ctx.fillStyle = tOpt.color || '#ffffff';
      ctx.fillText(line, posX, lineY);
    });
    ctx.restore();
  }

  // 9. Draw Watermark (Text or Image/Logo)
  if (options.watermark) {
    const wOpt = options.watermark;
    const tiled = !wOpt.imageElement && wOpt.repeat && wOpt.text && wOpt.text.trim();

    if (tiled) {
      const wmFontSize = watermarkFontSize(canvas.width, wOpt);
      ctx.save();
      ctx.font = watermarkFont(wmFontSize);
      ctx.fillStyle = wOpt.color || '#ffffff';
      ctx.globalAlpha = wOpt.opacity !== undefined ? wOpt.opacity : 0.4;
      const stepX = wmFontSize * 10;
      const stepY = wmFontSize * 6;
      ctx.rotate(((wOpt.rotation ?? -30) * Math.PI) / 180);
      for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
        for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
          ctx.fillText(wOpt.text!, x, y);
        }
      }
      ctx.restore();
    } else {
      const box = watermarkBox(canvas.width, canvas.height, wOpt, (text, font) => {
        ctx.save();
        ctx.font = font;
        const width = ctx.measureText(text).width;
        ctx.restore();
        return width;
      });
      if (box) {
        ctx.save();
        if (wOpt.imageElement) {
          // Logo watermark
          ctx.globalAlpha = wOpt.opacity !== undefined ? wOpt.opacity : 0.6;
          ctx.drawImage(wOpt.imageElement, box.cx - box.w / 2, box.cy - box.h / 2, box.w, box.h);
        } else {
          // Text watermark, rotated around its own centre so it stays in the chosen spot
          ctx.font = watermarkFont(watermarkFontSize(canvas.width, wOpt));
          ctx.fillStyle = wOpt.color || '#ffffff';
          ctx.globalAlpha = wOpt.opacity !== undefined ? wOpt.opacity : 0.4;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.translate(box.cx, box.cy);
          ctx.rotate(((wOpt.rotation || 0) * Math.PI) / 180);
          ctx.fillText(wOpt.text!, 0, 0);
        }
        ctx.restore();
      }
    }
  }

  return canvas;
}

export interface EncodeOptions {
  /**
   * Use the WebAssembly encoders (MozJPEG, libwebp, OxiPNG): smaller files, but slower than the browser's own,
   * so meant for downloads rather than previews or clipboard copies. Falls back to the browser if they fail.
   */
  best?: boolean;
  /** With `best`, PNG only: reduce to a palette of up to 256 colours at `quality` (like TinyPNG) */
  lossyPng?: boolean;
  /** With `best`, JPEG from a Display P3 canvas: the original photo's colour profile, written into the file */
  icc?: Uint8Array | null;
}

const KIND = { 'image/jpeg': 'jpeg', 'image/webp': 'webp', 'image/png': 'png' } as const;

export async function canvasToBlob(
  canvas: HTMLCanvasElement,
  format: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif' = 'image/png',
  quality: number = 0.92,
  avifCoalesceKey?: string,
  opts: EncodeOptions = {}
): Promise<Blob> {
  // Browsers can't encode AVIF via toBlob, so route it through the WASM encoder
  if (format === 'image/avif') {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D unavailable');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return encodeAvif(imageData, Math.round(quality * 100), avifCoalesceKey);
  }

  // JPG has no transparency and browsers encode transparent pixels as black: put white behind them instead
  const source = format === 'image/jpeg' ? onWhite(canvas) : canvas;

  if (opts.best && canEncodeWasm()) {
    const ctx = source.getContext('2d');
    if (ctx) {
      try {
        // A Display P3 canvas keeps its colours only in a JPG that carries the profile; anything else is
        // converted to sRGB, which every viewer assumes when a file has no profile
        const wide = format === 'image/jpeg' && !!opts.icc && ctx.getContextAttributes?.().colorSpace === 'display-p3';
        const imageData = ctx.getImageData(0, 0, source.width, source.height, { colorSpace: wide ? 'display-p3' : 'srgb' });
        const blob = await encodeWith(KIND[format], imageData, Math.round(quality * 100), avifCoalesceKey, !!opts.lossyPng);
        if (!wide) return blob;
        return new Blob([new Uint8Array(withJpegIcc(new Uint8Array(await blob.arrayBuffer()), opts.icc!))], { type: 'image/jpeg' });
      } catch (err) {
        // A newer request replaced this one: pass that on rather than encoding anyway
        if (isAvifSuperseded(err)) throw err;
        console.warn('WebAssembly encoder failed, using the browser encoder:', err);
      }
    }
  }

  return new Promise((resolve, reject) => {
    source.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to create blob from canvas'));
      },
      format,
      quality
    );
  });
}

/** A copy of the canvas drawn over white */
export function onWhite(canvas: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = canvas.width;
  c.height = canvas.height;
  const colorSpace = canvas.getContext('2d')?.getContextAttributes?.().colorSpace ?? 'srgb';
  const ctx = c.getContext('2d', { colorSpace })!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(canvas, 0, 0);
  return c;
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ICO file generator that wraps PNGs in an ICO container
async function createIcoFile(pngItems: Array<{ size: number; blob: Blob }>): Promise<Blob> {
  const buffers: Uint8Array[] = [];
  for (const item of pngItems) {
    const ab = await item.blob.arrayBuffer();
    buffers.push(new Uint8Array(ab));
  }

  const count = pngItems.length;
  const headerSize = 6 + count * 16;
  let currentOffset = headerSize;

  let totalSize = headerSize;
  for (const b of buffers) {
    totalSize += b.length;
  }

  const icoBuffer = new Uint8Array(totalSize);
  const view = new DataView(icoBuffer.buffer);

  // Header
  view.setUint16(0, 0, true); // Reserved
  view.setUint16(2, 1, true); // Type 1 = Icon
  view.setUint16(4, count, true); // Number of images

  // Directory entries
  for (let i = 0; i < count; i++) {
    const size = pngItems[i].size;
    const b = buffers[i];
    const entryOffset = 6 + i * 16;

    view.setUint8(entryOffset + 0, size >= 256 ? 0 : size); // Width
    view.setUint8(entryOffset + 1, size >= 256 ? 0 : size); // Height
    view.setUint8(entryOffset + 2, 0); // Color count
    view.setUint8(entryOffset + 3, 0); // Reserved
    view.setUint16(entryOffset + 4, 1, true); // Color planes
    view.setUint16(entryOffset + 6, 32, true); // Bits per pixel
    view.setUint32(entryOffset + 8, b.length, true); // Size of image data
    view.setUint32(entryOffset + 12, currentOffset, true); // Offset of image data

    icoBuffer.set(b, currentOffset);
    currentOffset += b.length;
  }

  return new Blob([icoBuffer], { type: 'image/x-icon' });
}

// Lazy loaded JSZip for Favicons and Bulk tools
/** Greedy word wrap that respects explicit newlines; `measure` is usually `ctx.measureText(s).width` */
export function wrapTextLines(text: string, maxWidth: number, measure: (s: string) => number): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split('\n')) {
    let line = '';
    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      const candidate = line ? `${line} ${word}` : word;
      if (line && measure(candidate) > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    lines.push(line);
  }
  return lines;
}

/**
 * Center-crop to a square (no stretching) and downscale in halving steps,
 * which keeps 16/32px icons crisp instead of aliased.
 */
export function renderSquareIcon(img: HTMLImageElement, size: number): HTMLCanvasElement | null {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;
  const side = Math.min(w, h);

  let current = document.createElement('canvas');
  current.width = side;
  current.height = side;
  let ctx = current.getContext('2d');
  if (!ctx) return null;
  ctx.drawImage(img, (w - side) / 2, (h - side) / 2, side, side, 0, 0, side, side);

  while (current.width / 2 >= size) {
    const next = document.createElement('canvas');
    next.width = Math.round(current.width / 2);
    next.height = next.width;
    const nctx = next.getContext('2d');
    if (!nctx) return null;
    nctx.imageSmoothingQuality = 'high';
    nctx.drawImage(current, 0, 0, next.width, next.height);
    current = next;
  }

  const out = document.createElement('canvas');
  out.width = size;
  out.height = size;
  ctx = out.getContext('2d');
  if (!ctx) return null;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(current, 0, 0, size, size);
  return out;
}

export async function generateFaviconBundle(img: HTMLImageElement, zipName: string = 'favicon-package.zip') {
  const JSZipModule = await import('jszip');
  const JSZip = JSZipModule.default;
  const zip = new JSZip();
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512];
  const icoPngItems: Array<{ size: number; blob: Blob }> = [];

  for (const size of sizes) {
    const canvas = renderSquareIcon(img, size);
    if (canvas) {
      const blob = await canvasToBlob(canvas, 'image/png');
      const filename = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
      zip.file(filename, blob);

      if ([16, 32, 48].includes(size)) {
        icoPngItems.push({ size, blob });
      }
    }
  }

  // Generate multi-resolution favicon.ico
  if (icoPngItems.length > 0) {
    const icoBlob = await createIcoFile(icoPngItems);
    zip.file('favicon.ico', icoBlob);
  }

  const manifest = {
    name: 'App',
    short_name: 'App',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#07080a',
    background_color: '#07080a',
    display: 'standalone',
  };
  zip.file('site.webmanifest', JSON.stringify(manifest, null, 2));

  const content = await zip.generateAsync({ type: 'blob' });
  downloadBlob(content, zipName);
}

// Color conversion utilities
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

export function rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
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

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
}

export function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const k = 1 - Math.max(rNorm, gNorm, bNorm);
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  const c = (1 - rNorm - k) / (1 - k);
  const m = (1 - gNorm - k) / (1 - k);
  const y = (1 - bNorm - k) / (1 - k);

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
}

export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
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

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// 100% Client-Side Dominant Color Palette Extractor
export function extractDominantPalette(img: HTMLImageElement, colorCount: number = 6): string[] {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return ['#57C1FF', '#FF6161', '#59D499', '#FFC533'];

  // Scale down for fast sampling
  const sampleW = 80;
  const sampleH = 80;
  canvas.width = sampleW;
  canvas.height = sampleH;
  ctx.drawImage(img, 0, 0, sampleW, sampleH);

  return paletteFromPixels(ctx.getImageData(0, 0, sampleW, sampleH).data, colorCount);
}

/**
 * Dominant colors from raw RGBA pixels, most-covered first. Buckets are averaged (not first-pixel),
 * near-duplicate shades are merged, and the result may be shorter than `colorCount`.
 */
export function paletteFromPixels(data: Uint8ClampedArray, colorCount: number): string[] {
  const buckets: Record<string, { r: number; g: number; b: number; count: number }> = {};

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue; // Ignore transparent pixels

    // Quantize into 32-value intervals
    const key = `${Math.round(data[i] / 32)}-${Math.round(data[i + 1] / 32)}-${Math.round(data[i + 2] / 32)}`;
    const bucket = (buckets[key] ||= { r: 0, g: 0, b: 0, count: 0 });
    bucket.r += data[i];
    bucket.g += data[i + 1];
    bucket.b += data[i + 2];
    bucket.count++;
  }

  const MIN_DISTANCE = 40; // RGB distance below which two swatches look like the same color
  const chosen: { r: number; g: number; b: number }[] = [];
  const sorted = Object.values(buckets).sort((a, b) => b.count - a.count);

  for (const bucket of sorted) {
    if (chosen.length >= colorCount) break;
    const color = { r: bucket.r / bucket.count, g: bucket.g / bucket.count, b: bucket.b / bucket.count };
    const isDistinct = chosen.every((c) => Math.hypot(c.r - color.r, c.g - color.g, c.b - color.b) >= MIN_DISTANCE);
    if (isDistinct) chosen.push(color);
  }

  return chosen.map((c) => rgbToHex(Math.round(c.r), Math.round(c.g), Math.round(c.b)));
}

// Check real alpha channel transparency by sampling pixels
export function checkImageTransparency(img: HTMLImageElement): boolean {
  try {
    const canvas = document.createElement('canvas');
    const sampleW = Math.min(100, img.naturalWidth || img.width);
    const sampleH = Math.min(100, img.naturalHeight || img.height);
    canvas.width = sampleW;
    canvas.height = sampleH;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return false;
    ctx.drawImage(img, 0, 0, sampleW, sampleH);
    const data = ctx.getImageData(0, 0, sampleW, sampleH).data;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 250) {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

export function formatBytes(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
