/**
 * Dynamic in-browser HEIC/HEIF decoder for Apple iPhone photos.
 * Dynamically loads heic2any only on demand to keep initial page bundle ultra-light.
 */

export async function convertHeicToBlob(file: File | Blob): Promise<Blob> {
  if (typeof window === 'undefined') {
    throw new Error('HEIC conversion only supported in browser runtime');
  }

  const heic2anyModule = await import('heic2any');
  const heic2any = heic2anyModule.default || heic2anyModule;

  const result = await heic2any({
    blob: file,
    toType: 'image/png',
    quality: 0.95,
  });

  if (Array.isArray(result)) {
    return result[0];
  }
  return result;
}

export function isHeicFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    name.endsWith('.heic') ||
    name.endsWith('.heif') ||
    file.type === 'image/heic' ||
    file.type === 'image/heif'
  );
}
