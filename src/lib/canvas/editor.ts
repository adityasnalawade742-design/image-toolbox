import { ExportFormat, ProcessingResult } from '@/types/image';
import { canvasToBlob, sanitizeFilename } from './file-utils';

export interface TextOverlayConfig {
  text: string;
  fontFamily: string;
  fontSize: number; // in px relative to base resolution
  color: string;
  opacity: number; // 0 to 1
  bold: boolean;
  italic: boolean;
  align: 'left' | 'center' | 'right';
  xPct: number; // 0 to 100 percentage from left
  yPct: number; // 0 to 100 percentage from top
  hasShadow: boolean;
  shadowColor?: string;
  shadowBlur?: number;
}

export interface WatermarkConfig {
  type: 'text' | 'image';
  // Text Watermark
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  opacity: number; // 0 to 1
  rotation?: number; // degrees
  // Image Watermark
  watermarkImg?: HTMLImageElement | null;
  scale?: number; // 0.1 to 2.0
  // Positioning
  xPct: number; // 0 to 100
  yPct: number; // 0 to 100
  isTiled: boolean;
  tileSpacing?: number; // px
}

export interface BorderConfig {
  width: number; // px
  color: string;
  opacity: number; // 0 to 1
  mode: 'inside' | 'outside';
  backgroundColor?: string;
}

export interface RoundConfig {
  radius: number; // px
  isCircle: boolean;
  backgroundColor?: string;
}

/**
 * Draws rounded rectangle path on canvas context
 */
function drawRoundedRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.arcTo(x + width, y, x + width, y + r, r);
  ctx.lineTo(x + width, y + height - r);
  ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
  ctx.lineTo(x + r, y + height);
  ctx.arcTo(x, y + height, x, y + height - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/**
 * Renders Text Overlay on an image at full resolution
 */
export async function renderTextOverlayToBlob(
  img: HTMLImageElement,
  config: TextOverlayConfig,
  format: ExportFormat = 'image/png',
  quality: number = 0.92,
  originalFilename: string = 'image.png',
  originalSize: number = 0
): Promise<ProcessingResult> {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  // Draw base image
  ctx.drawImage(img, 0, 0, w, h);

  if (config.text.trim()) {
    ctx.save();
    ctx.globalAlpha = config.opacity;
    
    const fontStyle = `${config.italic ? 'italic ' : ''}${config.bold ? 'bold ' : ''}${config.fontSize}px ${config.fontFamily}`;
    ctx.font = fontStyle;
    ctx.fillStyle = config.color;
    ctx.textAlign = config.align;
    ctx.textBaseline = 'middle';

    if (config.hasShadow) {
      ctx.shadowColor = config.shadowColor || 'rgba(0, 0, 0, 0.75)';
      ctx.shadowBlur = config.shadowBlur || 8;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
    }

    const posX = (config.xPct / 100) * w;
    const posY = (config.yPct / 100) * h;

    const lines = config.text.split('\n');
    const lineHeight = config.fontSize * 1.25;
    const startY = posY - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, idx) => {
      ctx.fillText(line, posX, startY + idx * lineHeight);
    });

    ctx.restore();
  }

  const blob = await canvasToBlob(canvas, format, quality);
  const url = URL.createObjectURL(blob);
  const ext = format === 'image/jpeg' ? 'jpg' : format === 'image/webp' ? 'webp' : 'png';
  const cleanFilename = sanitizeFilename(originalFilename, 'text', ext);

  return {
    blob,
    url,
    width: w,
    height: h,
    originalSize,
    outputSize: blob.size,
    reductionPercentage: 0,
    filename: cleanFilename
  };
}

/**
 * Renders Watermark (Text or Image) on an image at full resolution
 */
export async function renderWatermarkToBlob(
  img: HTMLImageElement,
  config: WatermarkConfig,
  format: ExportFormat = 'image/png',
  quality: number = 0.92,
  originalFilename: string = 'image.png',
  originalSize: number = 0
): Promise<ProcessingResult> {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  // Base image
  ctx.drawImage(img, 0, 0, w, h);

  ctx.save();
  ctx.globalAlpha = config.opacity;

  if (config.type === 'text' && config.text?.trim()) {
    const fontSize = config.fontSize || Math.round(w * 0.05);
    const fontFamily = config.fontFamily || 'Inter, sans-serif';
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = config.color || '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (config.isTiled) {
      const spacing = config.tileSpacing || Math.round(fontSize * 4);
      const rot = ((config.rotation || -30) * Math.PI) / 180;

      for (let y = -h; y < h * 2; y += spacing) {
        for (let x = -w; x < w * 2; x += spacing * 1.5) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rot);
          ctx.fillText(config.text, 0, 0);
          ctx.restore();
        }
      }
    } else {
      const posX = (config.xPct / 100) * w;
      const posY = (config.yPct / 100) * h;
      const rot = ((config.rotation || 0) * Math.PI) / 180;

      ctx.save();
      ctx.translate(posX, posY);
      if (rot !== 0) ctx.rotate(rot);
      ctx.fillText(config.text, 0, 0);
      ctx.restore();
    }
  } else if (config.type === 'image' && config.watermarkImg) {
    const wmImg = config.watermarkImg;
    const wmScale = config.scale || 0.5;
    const wmWidth = (wmImg.naturalWidth || wmImg.width) * wmScale;
    const wmHeight = (wmImg.naturalHeight || wmImg.height) * wmScale;

    if (config.isTiled) {
      const spacingX = wmWidth * 1.8;
      const spacingY = wmHeight * 1.8;

      for (let y = 0; y < h; y += spacingY) {
        for (let x = 0; x < w; x += spacingX) {
          ctx.drawImage(wmImg, x, y, wmWidth, wmHeight);
        }
      }
    } else {
      const posX = (config.xPct / 100) * w - wmWidth / 2;
      const posY = (config.yPct / 100) * h - wmHeight / 2;
      ctx.drawImage(wmImg, posX, posY, wmWidth, wmHeight);
    }
  }

  ctx.restore();

  const blob = await canvasToBlob(canvas, format, quality);
  const url = URL.createObjectURL(blob);
  const ext = format === 'image/jpeg' ? 'jpg' : format === 'image/webp' ? 'webp' : 'png';
  const cleanFilename = sanitizeFilename(originalFilename, 'watermarked', ext);

  return {
    blob,
    url,
    width: w,
    height: h,
    originalSize,
    outputSize: blob.size,
    reductionPercentage: 0,
    filename: cleanFilename
  };
}

/**
 * Renders Border (Inside or Outside) onto an image
 */
export async function renderBorderToBlob(
  img: HTMLImageElement,
  config: BorderConfig,
  format: ExportFormat = 'image/png',
  quality: number = 0.92,
  originalFilename: string = 'image.png',
  originalSize: number = 0
): Promise<ProcessingResult> {
  const origW = img.naturalWidth || img.width;
  const origH = img.naturalHeight || img.height;
  const bw = Math.max(0, Math.round(config.width));

  let finalW = origW;
  let finalH = origH;
  let imgX = 0;
  let imgY = 0;

  if (config.mode === 'outside' && bw > 0) {
    finalW = origW + bw * 2;
    finalH = origH + bw * 2;
    imgX = bw;
    imgY = bw;
  }

  const canvas = document.createElement('canvas');
  canvas.width = finalW;
  canvas.height = finalH;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  // Background / Border Fill
  if (bw > 0) {
    ctx.save();
    ctx.globalAlpha = config.opacity;
    ctx.fillStyle = config.color;
    ctx.fillRect(0, 0, finalW, finalH);
    ctx.restore();
  }

  // Draw image
  ctx.drawImage(img, imgX, imgY, origW, origH);

  // If inside border mode, draw stroke over image
  if (config.mode === 'inside' && bw > 0) {
    ctx.save();
    ctx.globalAlpha = config.opacity;
    ctx.strokeStyle = config.color;
    ctx.lineWidth = bw * 2; // centered stroke requires 2x width
    ctx.strokeRect(0, 0, finalW, finalH);
    ctx.restore();
  }

  const blob = await canvasToBlob(canvas, format, quality);
  const url = URL.createObjectURL(blob);
  const ext = format === 'image/jpeg' ? 'jpg' : format === 'image/webp' ? 'webp' : 'png';
  const cleanFilename = sanitizeFilename(originalFilename, 'border', ext);

  return {
    blob,
    url,
    width: finalW,
    height: finalH,
    originalSize,
    outputSize: blob.size,
    reductionPercentage: 0,
    filename: cleanFilename
  };
}

/**
 * Renders Rounded Corners or Circular Mask onto an image
 */
export async function renderRoundedCornersToBlob(
  img: HTMLImageElement,
  config: RoundConfig,
  format: ExportFormat = 'image/png',
  quality: number = 0.92,
  originalFilename: string = 'image.png',
  originalSize: number = 0
): Promise<ProcessingResult> {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;

  let finalW = w;
  let finalH = h;
  let drawX = 0;
  let drawY = 0;
  let drawW = w;
  let drawH = h;

  // If circle mask on non-square image, crop to center square
  if (config.isCircle) {
    const minDim = Math.min(w, h);
    finalW = minDim;
    finalH = minDim;
    drawX = (minDim - w) / 2;
    drawY = (minDim - h) / 2;
  }

  const canvas = document.createElement('canvas');
  canvas.width = finalW;
  canvas.height = finalH;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  // Fill background for non-transparent formats (e.g. JPEG)
  if (format === 'image/jpeg' || config.backgroundColor) {
    ctx.fillStyle = config.backgroundColor || '#FFFFFF';
    ctx.fillRect(0, 0, finalW, finalH);
  }

  ctx.save();

  if (config.isCircle) {
    const radius = finalW / 2;
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
  } else if (config.radius > 0) {
    drawRoundedRectPath(ctx, 0, 0, finalW, finalH, config.radius);
    ctx.clip();
  }

  ctx.drawImage(img, drawX, drawY, drawW, drawH);
  ctx.restore();

  const blob = await canvasToBlob(canvas, format, quality);
  const url = URL.createObjectURL(blob);
  const ext = format === 'image/jpeg' ? 'jpg' : format === 'image/webp' ? 'webp' : 'png';
  const cleanFilename = sanitizeFilename(originalFilename, 'rounded', ext);

  return {
    blob,
    url,
    width: finalW,
    height: finalH,
    originalSize,
    outputSize: blob.size,
    reductionPercentage: 0,
    filename: cleanFilename
  };
}
