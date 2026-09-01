/**
 * Image Preprocessing & YCbCr Luminance Decomposition
 */

export interface PreprocessedImage {
  width: number;
  height: number;
  yChannel: Float32Array;
  cbChannel: Float32Array;
  crChannel: Float32Array;
}

export interface TileCoordinates {
  x: number;
  y: number;
  w: number;
  h: number;
  outX: number;
  outY: number;
  outW: number;
  outH: number;
}

/**
 * Extract YCbCr channels from an HTMLImageElement
 */
export function extractYCbCrFromImage(img: HTMLImageElement): PreprocessedImage {
  const width = img.naturalWidth || img.width;
  const height = img.naturalHeight || img.height;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Failed to create canvas 2D context for image decoding');

  ctx.drawImage(img, 0, 0, width, height);
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;

  const numPixels = width * height;
  const yChannel = new Float32Array(numPixels);
  const cbChannel = new Float32Array(numPixels);
  const crChannel = new Float32Array(numPixels);

  for (let i = 0; i < numPixels; i++) {
    const idx = i * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    // Standard ITU-R BT.601 YCbCr Color Conversion
    yChannel[i] = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;
    cbChannel[i] = (-0.168736 * r - 0.331264 * g + 0.5 * b + 128) / 255.0;
    crChannel[i] = (0.5 * r - 0.418688 * g - 0.081312 * b + 128) / 255.0;
  }

  return { width, height, yChannel, cbChannel, crChannel };
}

/**
 * Compute adaptive tile coordinates with overlap margin
 */
export function generateTileGrid(
  width: number,
  height: number,
  tileSize: number = 256,
  overlap: number = 16,
  scale: 2 | 4 = 2
): TileCoordinates[] {
  // If the image is small enough, process as single tile for best speed & quality
  if (width <= tileSize && height <= tileSize) {
    return [
      {
        x: 0,
        y: 0,
        w: width,
        h: height,
        outX: 0,
        outY: 0,
        outW: width * scale,
        outH: height * scale,
      },
    ];
  }

  const tiles: TileCoordinates[] = [];
  const stride = tileSize - overlap * 2;

  for (let y = 0; y < height; y += stride) {
    for (let x = 0; x < width; x += stride) {
      const tileX = Math.max(0, x - overlap);
      const tileY = Math.max(0, y - overlap);
      const tileW = Math.min(width - tileX, tileSize);
      const tileH = Math.min(height - tileY, tileSize);

      tiles.push({
        x: tileX,
        y: tileY,
        w: tileW,
        h: tileH,
        outX: tileX * scale,
        outY: tileY * scale,
        outW: tileW * scale,
        outH: tileH * scale,
      });
    }
  }

  return tiles;
}
