import { LoadedImage } from '@/types/image';

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB

export const SUPPORTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/gif',
  'image/svg+xml'
];

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: 'No file selected.' };
  }

  if (!SUPPORTED_IMAGE_TYPES.includes(file.type) && !file.type.startsWith('image/')) {
    return {
      valid: false,
      error: `Unsupported format (${file.type || 'Unknown'}). Please select a JPG, PNG, WebP, AVIF, or GIF image.`
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File is too large (${formatBytes(file.size)}). Maximum supported file size is 50 MB.`
    };
  }

  return { valid: true };
}

export function formatBytes(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function sanitizeFilename(name: string, suffix: string = '', extension: string = ''): string {
  const base = name.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9._-]/g, '_');
  const cleanSuffix = suffix ? `-${suffix}` : '';
  const cleanExt = extension ? (extension.startsWith('.') ? extension : `.${extension}`) : '';
  return `${base}${cleanSuffix}${cleanExt}`;
}

export function loadImageFromFile(file: File): Promise<LoadedImage> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    
    img.onload = () => {
      resolve({
        id: `img-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight,
        objectUrl
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image. The file may be corrupt.'));
    };

    img.src = objectUrl;
  });
}

export function canvasToBlob(
  canvas: HTMLCanvasElement,
  format: string = 'image/webp',
  quality: number = 0.9
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    // If format is JPEG, fill transparent background with white
    if (format === 'image/jpeg') {
      const opaqueCanvas = document.createElement('canvas');
      opaqueCanvas.width = canvas.width;
      opaqueCanvas.height = canvas.height;
      const ctx = opaqueCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(canvas, 0, 0);
        opaqueCanvas.toBlob(
          (blob) => (blob ? resolve(blob) : reject(new Error('Canvas blob generation failed'))),
          format,
          quality
        );
        return;
      }
    }

    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to convert canvas to blob.'));
      },
      format,
      quality
    );
  });
}

export function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

export function getExtensionFromMime(mime: string): string {
  switch (mime) {
    case 'image/jpeg': return 'jpg';
    case 'image/png': return 'png';
    case 'image/webp': return 'webp';
    case 'image/avif': return 'avif';
    default: return 'jpg';
  }
}
