import JSZip from 'jszip';

export interface ImageProcessingOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'image/jpeg' | 'image/png' | 'image/webp';
  rotation?: number; // 0, 90, 180, 270
  flipH?: boolean;
  flipV?: boolean;
  crop?: { x: number; y: number; width: number; height: number };
  textOverlay?: { text: string; fontSize: number; color: string; position: 'top' | 'center' | 'bottom'; opacity: number };
  watermark?: { text: string; opacity: number; color: string };
  border?: { width: number; color: string };
  cornerRadius?: number;
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

  let srcX = 0;
  let srcY = 0;
  let srcW = img.naturalWidth || img.width;
  let srcH = img.naturalHeight || img.height;

  if (options.crop) {
    srcX = options.crop.x;
    srcY = options.crop.y;
    srcW = options.crop.width;
    srcH = options.crop.height;
  }

  let targetW = options.width || srcW;
  let targetH = options.height || srcH;

  const rotation = options.rotation || 0;
  const is90or270 = rotation === 90 || rotation === 270;

  canvas.width = is90or270 ? targetH : targetW;
  canvas.height = is90or270 ? targetW : targetH;

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.scale(options.flipH ? -1 : 1, options.flipV ? -1 : 1);

  if (options.cornerRadius && options.cornerRadius > 0) {
    ctx.beginPath();
    const r = options.cornerRadius;
    const drawW = is90or270 ? targetH : targetW;
    const drawH = is90or270 ? targetW : targetH;
    ctx.roundRect(-drawW / 2, -drawH / 2, drawW, drawH, r);
    ctx.clip();
  }

  const drawW = is90or270 ? targetH : targetW;
  const drawH = is90or270 ? targetW : targetH;
  ctx.drawImage(img, srcX, srcY, srcW, srcH, -drawW / 2, -drawH / 2, drawW, drawH);
  ctx.restore();

  if (options.border && options.border.width > 0) {
    ctx.lineWidth = options.border.width;
    ctx.strokeStyle = options.border.color;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }

  if (options.textOverlay && options.textOverlay.text) {
    ctx.save();
    ctx.font = `bold ${options.textOverlay.fontSize}px Inter, sans-serif`;
    ctx.fillStyle = options.textOverlay.color;
    ctx.globalAlpha = options.textOverlay.opacity;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let posY = canvas.height / 2;
    if (options.textOverlay.position === 'top') posY = options.textOverlay.fontSize + 20;
    if (options.textOverlay.position === 'bottom') posY = canvas.height - options.textOverlay.fontSize - 20;

    ctx.fillText(options.textOverlay.text, canvas.width / 2, posY);
    ctx.restore();
  }

  if (options.watermark && options.watermark.text) {
    ctx.save();
    ctx.font = '24px Inter, sans-serif';
    ctx.fillStyle = options.watermark.color || '#ffffff';
    ctx.globalAlpha = options.watermark.opacity || 0.3;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText(options.watermark.text, canvas.width - 20, canvas.height - 20);
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

export async function generateFaviconBundle(img: HTMLImageElement, zipName: string = 'favicon-package.zip') {
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
