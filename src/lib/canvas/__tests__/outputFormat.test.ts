import { describe, it, expect } from 'vitest';
import { getOutputFormatPolicy } from '../outputFormat';

describe('Output Format Policy', () => {
  it.each([
    ['jpg-to-png', 'image/jpeg', 'image/png'],
    ['webp-to-png', 'image/webp', 'image/png'],
    ['svg-to-png', 'image/svg+xml', 'image/png'],
    ['png-to-jpg', 'image/png', 'image/jpeg'],
    ['webp-to-jpg', 'image/webp', 'image/jpeg'],
    ['jpg-to-webp', 'image/jpeg', 'image/webp'],
    ['png-to-webp', 'image/png', 'image/webp'],
    ['heic-to-jpg', 'image/heic', 'image/jpeg'],
    ['heic-to-png', 'image/heic', 'image/png'],
    ['heic-to-webp', 'image/heic', 'image/webp'],
    ['avif-to-jpg', 'image/avif', 'image/jpeg'],
    ['avif-to-png', 'image/avif', 'image/png'],
    ['jpg-to-avif', 'image/jpeg', 'image/avif'],
    ['png-to-avif', 'image/png', 'image/avif'],
    ['gif-to-png', 'image/gif', 'image/png'],
    ['gif-to-jpg', 'image/gif', 'image/jpeg'],
    ['bmp-to-jpg', 'image/bmp', 'image/jpeg'],
    ['bmp-to-png', 'image/bmp', 'image/png'],
    ['tiff-to-jpg', 'image/tiff', 'image/jpeg'],
    ['tiff-to-png', 'image/tiff', 'image/png'],
    ['svg-to-jpg', 'image/svg+xml', 'image/jpeg'],
    ['svg-to-webp', 'image/svg+xml', 'image/webp'],
  ])('%s always exports its target format, with no picker', (slug, input, expected) => {
    expect(getOutputFormatPolicy(slug, input)).toEqual({ format: expected, selectable: false });
  });

  it.each([
    ['crop-image', 'image/jpeg', 'image/jpeg'],
    ['resize-image', 'image/webp', 'image/webp'],
    ['rotate-image', 'image/png', 'image/png'],
    ['remove-image-metadata', 'image/jpeg', 'image/jpeg'],
    ['watermark-image', 'image/heic', 'image/jpeg'],
    ['add-text-to-image', 'image/gif', 'image/png'],
    ['flip-image', 'image/avif', 'image/avif'],
  ])('%s keeps the input format (%s → %s) and lets the user change it', (slug, input, expected) => {
    expect(getOutputFormatPolicy(slug, input)).toEqual({ format: expected, selectable: true });
  });

  it('round-image defaults to PNG so rounded corners stay transparent', () => {
    expect(getOutputFormatPolicy('round-image', 'image/jpeg')).toEqual({ format: 'image/png', selectable: true });
  });

  it('convert-image offers a picker, defaulting to WebP for JPEG input and PNG otherwise', () => {
    expect(getOutputFormatPolicy('convert-image', 'image/jpeg')).toEqual({ format: 'image/webp', selectable: true });
    expect(getOutputFormatPolicy('convert-image', 'image/png')).toEqual({ format: 'image/png', selectable: true });
  });

  it('compress-image defaults to WebP and is selectable in its own panel', () => {
    expect(getOutputFormatPolicy('compress-image', 'image/png')).toEqual({ format: 'image/webp', selectable: false });
  });
});
