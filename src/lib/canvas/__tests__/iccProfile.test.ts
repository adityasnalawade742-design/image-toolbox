import { describe, it, expect } from 'vitest';
import { isDisplayP3, readJpegIcc, withJpegIcc } from '../iccProfile';

const ascii = (s: string) => Array.from(s, (c) => c.charCodeAt(0));
const seg = (marker: number, data: number[]) => [0xff, marker, (data.length + 2) >> 8, (data.length + 2) & 0xff, ...data];
// SOI, JFIF APP0, EXIF APP1, a quantisation table, start of scan with some "image data", EOI
const JPEG = Uint8Array.from([
  0xff, 0xd8,
  ...seg(0xe0, ascii('JFIF\0\x01\x01\0\0\x01\0\x01\0\0')),
  ...seg(0xe1, ascii('Exif\0\0rest')),
  ...seg(0xdb, [0, 1, 2, 3]),
  ...seg(0xda, [9, 9]),
  1, 2, 3, 0xff, 0xd9,
]);

const profile = (n: number, desc: string) => {
  const p = new Uint8Array(n);
  p.set(ascii(desc), 128);
  for (let i = 200; i < n; i++) p[i] = i % 251;
  return p;
};

describe('ICC profiles in JPEG', () => {
  it('writes a profile after the header segments and reads it back', () => {
    const icc = profile(3000, 'desc Display P3');
    const out = withJpegIcc(JPEG, icc);
    expect(readJpegIcc(out)).toEqual(icc);
    // SOI (2) + APP0 (18) + APP1 (14), then the APP2 profile
    expect([out[34], out[35]]).toEqual([0xff, 0xe2]);
    expect(Array.from(out.subarray(out.length - 5))).toEqual([1, 2, 3, 0xff, 0xd9]);
    expect(out.length).toBe(JPEG.length + 4 + 14 + icc.length);
  });

  it('splits a large profile into numbered chunks and joins them back', () => {
    const icc = profile(150_000, 'desc');
    const out = withJpegIcc(JPEG, icc);
    expect(readJpegIcc(out)).toEqual(icc);
  });

  it('replaces a profile the file already had', () => {
    const once = withJpegIcc(JPEG, profile(500, 'first'));
    const icc = profile(700, 'second');
    const twice = withJpegIcc(once, icc);
    expect(readJpegIcc(twice)).toEqual(icc);
    expect(twice.length).toBe(JPEG.length + 4 + 14 + 700);
  });

  it('has no profile in a plain JPEG', () => {
    expect(readJpegIcc(JPEG)).toBeNull();
  });

  it('recognises Display P3 by its description, ASCII or UTF-16', () => {
    expect(isDisplayP3(profile(600, 'Display P3'))).toBe(true);
    const utf16 = new Uint8Array(600);
    utf16.set(Array.from('Display P3').flatMap((c) => [0, c.charCodeAt(0)]), 300);
    expect(isDisplayP3(utf16)).toBe(true);
    expect(isDisplayP3(profile(600, 'sRGB IEC61966-2.1'))).toBe(false);
  });
});
