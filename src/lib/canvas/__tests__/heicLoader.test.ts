import { describe, it, expect } from 'vitest';
import { isHeicFile } from '../heicLoader';

describe('HEIC/HEIF Image Loader Utility', () => {
  it('identifies .heic and .heif files accurately', () => {
    const heicFile = new File(['mock'], 'IMG_4092.HEIC', { type: 'image/heic' });
    const heifFile = new File(['mock'], 'photo.heif', { type: 'image/heif' });
    const pngFile = new File(['mock'], 'image.png', { type: 'image/png' });
    const jpgFile = new File(['mock'], 'photo.jpg', { type: 'image/jpeg' });

    expect(isHeicFile(heicFile)).toBe(true);
    expect(isHeicFile(heifFile)).toBe(true);
    expect(isHeicFile(pngFile)).toBe(false);
    expect(isHeicFile(jpgFile)).toBe(false);
  });
});
