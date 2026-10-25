import { describe, it, expect } from 'vitest';
import { createUniqueNamer, outputFileName } from '../fileNames';

describe('Output File Names', () => {
  it('replaces the extension and adds a suffix', () => {
    expect(outputFileName('holiday.photo.JPG', 'compressed', 'webp')).toBe('holiday.photo-compressed.webp');
    expect(outputFileName('scan', 'resized', 'png')).toBe('scan-resized.png');
  });

  it('numbers colliding names so ZIP entries never overwrite each other', () => {
    const unique = createUniqueNamer();
    expect(unique('a-compressed.webp')).toBe('a-compressed.webp');
    expect(unique('a-compressed.webp')).toBe('a-compressed (2).webp');
    expect(unique('A-compressed.webp')).toBe('A-compressed (3).webp');
    expect(unique('b-compressed.webp')).toBe('b-compressed.webp');
  });
});
