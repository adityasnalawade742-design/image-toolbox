export interface ImageAnalysisData {
  filename: string;
  fileSize: number;
  mimeType: string;
  width: number;
  height: number;
  aspectRatio: string;
  megapixels: string;
  hasTransparency: boolean;
  colorDepth: string;
  rawMemorySize: number;
  orientation: 'Landscape' | 'Portrait' | 'Square';
}

function computeGcd(a: number, b: number): number {
  return b === 0 ? a : computeGcd(b, a % b);
}

export function computeAspectRatioString(width: number, height: number): string {
  const gcd = computeGcd(width, height);
  const wRatio = width / gcd;
  const hRatio = height / gcd;

  // If simplified ratio is very complex, round to nearest common decimal
  if (wRatio > 50 || hRatio > 50) {
    const dec = (width / height).toFixed(2);
    return `${dec}:1`;
  }
  return `${wRatio}:${hRatio}`;
}

export async function analyzeImage(
  img: HTMLImageElement,
  file: File
): Promise<ImageAnalysisData> {
  const width = img.naturalWidth || img.width;
  const height = img.naturalHeight || img.height;
  const megapixels = ((width * height) / 1_000_000).toFixed(2);
  const aspectRatio = computeAspectRatioString(width, height);
  
  let orientation: 'Landscape' | 'Portrait' | 'Square' = 'Square';
  if (width > height) orientation = 'Landscape';
  else if (height > width) orientation = 'Portrait';

  // Uncompressed 32-bit RGBA in memory: 4 bytes per pixel
  const rawMemorySize = width * height * 4;

  // Check transparency by sampling pixels on a downsampled canvas (max 200x200)
  let hasTransparency = false;
  try {
    const sampleCanvas = document.createElement('canvas');
    const sampleW = Math.min(width, 200);
    const sampleH = Math.min(height, 200);
    sampleCanvas.width = sampleW;
    sampleCanvas.height = sampleH;
    const ctx = sampleCanvas.getContext('2d', { willReadFrequently: true });
    
    if (ctx) {
      ctx.drawImage(img, 0, 0, sampleW, sampleH);
      const imgData = ctx.getImageData(0, 0, sampleW, sampleH).data;
      for (let i = 3; i < imgData.length; i += 4) {
        if (imgData[i] < 255) {
          hasTransparency = true;
          break;
        }
      }
    }
  } catch (err) {
    console.warn('Transparency check failed:', err);
  }

  return {
    filename: file.name,
    fileSize: file.size,
    mimeType: file.type || 'image/unknown',
    width,
    height,
    aspectRatio,
    megapixels,
    hasTransparency,
    colorDepth: '8-bit per channel (24/32-bit sRGB)',
    rawMemorySize,
    orientation
  };
}
