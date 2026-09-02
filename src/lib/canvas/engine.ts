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
  position?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  rotation?: number;
  repeat?: boolean;
}

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
  backgroundColor?: string; // For JPG conversion / background fill
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
    proxyImg.src = canvas.toDataURL('image/jpeg', 0.88);
  });
}

export function processCanvas(
  img: HTMLImageElement,
  options: ImageProcessingOptions = {}
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
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

  ctx.drawImage(img, srcX, srcY, srcW, srcH, -targetW / 2, -targetH / 2, targetW, targetH);
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
    const margin = 24;
    const pos = wOpt.position || 'bottom-right';

    if (wOpt.imageElement) {
      // Image Logo Watermark
      const wmImg = wOpt.imageElement;
      const scale = (wOpt.imageScale || 20) / 100;
      const wmTargetW = Math.max(20, Math.round(canvas.width * scale));
      const wmTargetH = Math.round((wmTargetW / (wmImg.naturalWidth || wmImg.width || 1)) * (wmImg.naturalHeight || wmImg.height || 1));

      let wx = canvas.width - wmTargetW - margin;
      let wy = canvas.height - wmTargetH - margin;

      if (pos.includes('left')) wx = margin;
      else if (pos.includes('center')) wx = (canvas.width - wmTargetW) / 2;

      if (pos.startsWith('top')) wy = margin;
      else if (pos.startsWith('center') || pos === 'center') wy = (canvas.height - wmTargetH) / 2;

      ctx.save();
      ctx.globalAlpha = wOpt.opacity !== undefined ? wOpt.opacity : 0.6;
      ctx.drawImage(wmImg, wx, wy, wmTargetW, wmTargetH);
      ctx.restore();
    } else if (wOpt.text && wOpt.text.trim()) {
      // Text Watermark
      const wmFontSize = wOpt.fontSize || Math.max(16, Math.round(canvas.width / 25));
      ctx.save();
      ctx.font = `600 ${wmFontSize}px Inter, sans-serif`;
      ctx.fillStyle = wOpt.color || '#ffffff';
      ctx.globalAlpha = wOpt.opacity !== undefined ? wOpt.opacity : 0.4;

      if (wOpt.repeat) {
        const stepX = wmFontSize * 10;
        const stepY = wmFontSize * 6;
        ctx.rotate(((wOpt.rotation || -30) * Math.PI) / 180);
        for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
          for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
            ctx.fillText(wOpt.text, x, y);
          }
        }
      } else {
        let x = canvas.width - margin;
        let y = canvas.height - margin;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';

        if (pos.includes('left')) {
          x = margin;
          ctx.textAlign = 'left';
        } else if (pos.includes('center')) {
          x = canvas.width / 2;
          ctx.textAlign = 'center';
        }

        if (pos.startsWith('top')) {
          y = margin;
          ctx.textBaseline = 'top';
        } else if (pos.startsWith('center') || pos === 'center') {
          y = canvas.height / 2;
          ctx.textBaseline = 'middle';
        }

        ctx.fillText(wOpt.text, x, y);
      }
      ctx.restore();
    }
  }

  return canvas;
}

export function canvasToBlob(
  canvas: HTMLCanvasElement,
  format: 'image/jpeg' | 'image/png' | 'image/webp' = 'image/png',
  quality: number = 0.92
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to create blob from canvas'));
      },
      format,
      quality
    );
  });
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
export async function generateFaviconBundle(img: HTMLImageElement, zipName: string = 'favicon-package.zip') {
  const JSZipModule = await import('jszip');
  const JSZip = JSZipModule.default;
  const zip = new JSZip();
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512];
  const icoPngItems: Array<{ size: number; blob: Blob }> = [];

  for (const size of sizes) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0, size, size);
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

  const data = ctx.getImageData(0, 0, sampleW, sampleH).data;
  const colorBuckets: Record<string, { r: number; g: number; b: number; count: number }> = {};

  for (let i = 0; i < data.length; i += 16) {
    const a = data[i + 3];
    if (a < 128) continue; // Ignore transparent pixels

    // Quantize into 32-value intervals
    const r = Math.round(data[i] / 32) * 32;
    const g = Math.round(data[i + 1] / 32) * 32;
    const b = Math.round(data[i + 2] / 32) * 32;
    const key = `${r}-${g}-${b}`;

    if (!colorBuckets[key]) {
      colorBuckets[key] = { r: data[i], g: data[i + 1], b: data[i + 2], count: 0 };
    }
    colorBuckets[key].count++;
  }

  const sorted = Object.values(colorBuckets).sort((a, b) => b.count - a.count);
  const palette = sorted.slice(0, colorCount).map((c) => rgbToHex(c.r, c.g, c.b));

  while (palette.length < colorCount) {
    palette.push('#FFFFFF');
  }

  return palette;
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
