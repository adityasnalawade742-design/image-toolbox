export interface TextOverlayOptions {
  text: string;
  fontFamily?: string;
  fontSize: number;
  color: string;
  opacity: number;
  position: 'top' | 'center' | 'bottom';
  bold?: boolean;
  italic?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  dropShadow?: boolean;
}

export interface WatermarkOptions {
  text: string;
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

export function loadImage(src: string | File): Promise<HTMLImageElement> {
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
    if (isOutsideBorder) {
      ctx.strokeRect(borderWidth / 2, borderWidth / 2, canvas.width - borderWidth, canvas.height - borderWidth);
    } else {
      ctx.strokeRect(borderWidth / 2, borderWidth / 2, canvas.width - borderWidth, canvas.height - borderWidth);
    }
    ctx.restore();
  }

  // 8. Draw Text Overlay
  if (options.textOverlay && options.textOverlay.text.trim()) {
    const tOpt = options.textOverlay;
    ctx.save();
    const style = `${tOpt.italic ? 'italic ' : ''}${tOpt.bold ? 'bold ' : ''}${tOpt.fontSize}px ${tOpt.fontFamily || 'Inter, sans-serif'}`;
    ctx.font = style;
    ctx.fillStyle = tOpt.color || '#ffffff';
    ctx.globalAlpha = tOpt.opacity !== undefined ? tOpt.opacity : 1.0;
    ctx.textAlign = tOpt.textAlign || 'center';
    ctx.textBaseline = 'middle';

    if (tOpt.dropShadow) {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
    }

    const lines = tOpt.text.split('\n');
    const lineHeight = tOpt.fontSize * 1.25;
    const totalTextHeight = lines.length * lineHeight;

    let startY = canvas.height / 2;
    if (tOpt.position === 'top') {
      startY = 30 + lineHeight / 2;
    } else if (tOpt.position === 'bottom') {
      startY = canvas.height - 30 - totalTextHeight + lineHeight / 2;
    } else {
      startY = (canvas.height - totalTextHeight) / 2 + lineHeight / 2;
    }

    let posX = canvas.width / 2;
    if (tOpt.textAlign === 'left') posX = 30;
    else if (tOpt.textAlign === 'right') posX = canvas.width - 30;

    lines.forEach((line, i) => {
      ctx.fillText(line, posX, startY + i * lineHeight);
    });
    ctx.restore();
  }

  // 9. Draw Watermark
  if (options.watermark && options.watermark.text.trim()) {
    const wOpt = options.watermark;
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
      const margin = 24;
      const pos = wOpt.position || 'bottom-right';

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

// Lazy loaded JSZip for Favicons and Bulk tools
export async function generateFaviconBundle(img: HTMLImageElement, zipName: string = 'favicon-package.zip') {
  const JSZipModule = await import('jszip');
  const JSZip = JSZipModule.default;
  const zip = new JSZip();
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512];

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
    }
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
