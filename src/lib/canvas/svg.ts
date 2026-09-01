import { canvasToBlob, sanitizeFilename } from './file-utils';
import { ProcessingResult } from '@/types/image';

const DANGEROUS_TAGS = ['script', 'iframe', 'object', 'embed', 'foreignObject', 'link', 'meta', 'applet'];

/**
 * Sanitizes SVG markup to prevent XSS, script execution, or arbitrary object embedding.
 */
export function sanitizeSvgMarkup(rawSvg: string): string {
  if (typeof window === 'undefined') return rawSvg;

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawSvg, 'image/svg+xml');

  // Check for XML parsing errors
  const parseError = doc.querySelector('parsererror');
  if (parseError) {
    throw new Error('Malformed SVG document: ' + parseError.textContent);
  }

  // Remove dangerous tags
  DANGEROUS_TAGS.forEach(tag => {
    const elements = doc.querySelectorAll(tag);
    elements.forEach(el => el.remove());
  });

  // Remove dangerous attributes across all elements
  const allElements = doc.querySelectorAll('*');
  allElements.forEach(el => {
    const attributes = Array.from(el.attributes);
    attributes.forEach(attr => {
      const name = attr.name.toLowerCase();
      const value = attr.value.toLowerCase().replace(/\s/g, '');

      if (name.startsWith('on') || value.includes('javascript:') || value.includes('data:text/html')) {
        el.removeAttribute(attr.name);
      }
    });
  });

  const serializer = new XMLSerializer();
  return serializer.serializeToString(doc.documentElement);
}

/**
 * Rasterizes sanitized SVG markup onto an HTML5 Canvas and outputs a high-DPI PNG
 */
export async function rasterizeSvgToPng(
  svgMarkup: string,
  scale: number = 2,
  customWidth?: number,
  customHeight?: number,
  backgroundColor?: string,
  originalFilename: string = 'graphic.svg'
): Promise<ProcessingResult> {
  const sanitized = sanitizeSvgMarkup(svgMarkup);
  const blob = new Blob([sanitized], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.src = url;

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = () => reject(new Error('Failed to load sanitized SVG image for rasterization.'));
  });

  const origW = img.naturalWidth || img.width || 512;
  const origH = img.naturalHeight || img.height || 512;

  const targetW = customWidth ? customWidth : Math.round(origW * scale);
  const targetH = customHeight ? customHeight : Math.round(origH * scale);

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  if (backgroundColor && backgroundColor !== 'transparent') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, targetW, targetH);
  }

  ctx.drawImage(img, 0, 0, targetW, targetH);
  URL.revokeObjectURL(url);

  const pngBlob = await canvasToBlob(canvas, 'image/png');
  const pngUrl = URL.createObjectURL(pngBlob);
  const cleanFilename = sanitizeFilename(originalFilename, 'raster', 'png');

  return {
    blob: pngBlob,
    url: pngUrl,
    width: targetW,
    height: targetH,
    originalSize: blob.size,
    outputSize: pngBlob.size,
    reductionPercentage: 0,
    filename: cleanFilename
  };
}
