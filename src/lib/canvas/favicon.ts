import { canvasToBlob } from './file-utils';

export interface FaviconFile {
  name: string;
  blob: Blob;
  size: number;
}

export interface FaviconPackageResult {
  files: FaviconFile[];
  htmlSnippet: string;
}

/**
 * Creates standard ICO binary file wrapping a 32x32 PNG payload
 */
async function createIcoBlob(png32Blob: Blob): Promise<Blob> {
  const pngBuffer = await png32Blob.arrayBuffer();
  const pngBytes = new Uint8Array(pngBuffer);

  // ICO header: 6 bytes
  // ICONDIR: Reserved (2 bytes, 0), Type (2 bytes, 1 for ICO), Count (2 bytes, 1 image)
  // ICONDIRENTRY: Width (1 byte, 32), Height (1 byte, 32), Colors (1 byte, 0), Reserved (1 byte, 0),
  // Planes (2 bytes, 1), BitCount (2 bytes, 32), BytesInRes (4 bytes, pngBytes.length), ImageOffset (4 bytes, 22)
  const header = new Uint8Array(22);
  const view = new DataView(header.buffer);

  // ICONDIR
  view.setUint16(0, 0, true); // Reserved
  view.setUint16(2, 1, true); // 1 = ICO
  view.setUint16(4, 1, true); // 1 image entry

  // ICONDIRENTRY
  header[6] = 32; // Width (32px)
  header[7] = 32; // Height (32px)
  header[8] = 0;  // Color count
  header[9] = 0;  // Reserved
  view.setUint16(10, 1, true); // Planes
  view.setUint16(12, 32, true); // Bit count (32-bit RGBA)
  view.setUint32(14, pngBytes.length, true); // Image size in bytes
  view.setUint32(18, 22, true); // Offset of image data in ICO file (after 22-byte header)

  return new Blob([header, pngBytes], { type: 'image/x-icon' });
}

/**
 * Renders an image into a squared favicon canvas of exact dimension
 */
async function renderFaviconSquare(
  img: HTMLImageElement,
  size: number,
  backgroundColor?: string
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D canvas context');

  if (backgroundColor && backgroundColor !== 'transparent') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, size, size);
  }

  const origW = img.naturalWidth || img.width;
  const origH = img.naturalHeight || img.height;
  const minDim = Math.min(origW, origH);

  // Center crop source
  const srcX = (origW - minDim) / 2;
  const srcY = (origH - minDim) / 2;

  ctx.drawImage(img, srcX, srcY, minDim, minDim, 0, 0, size, size);

  return canvasToBlob(canvas, 'image/png');
}

/**
 * Generates complete multi-resolution favicon package
 */
export async function generateFaviconPackage(
  img: HTMLImageElement,
  backgroundColor?: string
): Promise<FaviconPackageResult> {
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  const files: FaviconFile[] = [];

  for (const s of sizes) {
    const blob = await renderFaviconSquare(img, s.size, backgroundColor);
    files.push({ name: s.name, blob, size: s.size });
  }

  // Create favicon.ico from 32x32 PNG
  const png32 = files.find(f => f.name === 'favicon-32x32.png')!.blob;
  const icoBlob = await createIcoBlob(png32);
  files.unshift({ name: 'favicon.ico', blob: icoBlob, size: 32 });

  // Create webmanifest JSON file
  const webmanifestContent = JSON.stringify({
    name: "Image Toolbox App",
    short_name: "Toolbox",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  }, null, 2);

  const manifestBlob = new Blob([webmanifestContent], { type: 'application/json' });
  files.push({ name: 'site.webmanifest', blob: manifestBlob, size: 0 });

  const htmlSnippet = `<!-- Favicon & App Icons -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="manifest" href="/site.webmanifest">`;

  return { files, htmlSnippet };
}
