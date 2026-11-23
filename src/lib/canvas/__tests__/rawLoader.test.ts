import { describe, it, expect, beforeAll } from 'vitest';
import { isRawFile, toRgba, RAW_ACCEPT, RawDecodeError } from '../rawLoader';
import { getOutputFormatPolicy, defaultQuality } from '../outputFormat';
import { BATCH_TOOLS } from '../convertFile';
import { TOOLS } from '../../../config/tools';

beforeAll(() => {
  // happy-dom has no ImageData; a minimal stand-in with the same shape
  if (typeof globalThis.ImageData === 'undefined') {
    (globalThis as any).ImageData = class {
      constructor(public data: Uint8ClampedArray, public width: number, public height: number) {}
    };
  }
});

describe('isRawFile', () => {
  it('knows the common camera endings, in any case', () => {
    for (const name of ['IMG_0001.CR2', 'a.cr3', 'DSC_1.NEF', 'DSC01.ARW', 'photo.dng', 'x.RAF', 'P1.ORF', 'P1.RW2', 'IMGP.PEF']) {
      expect(isRawFile({ name }), name).toBe(true);
    }
  });
  it('knows RAW MIME types even without an ending', () => {
    expect(isRawFile({ name: 'photo', type: 'image/x-canon-cr2' })).toBe(true);
    expect(isRawFile({ name: 'photo', type: 'image/x-adobe-dng' })).toBe(true);
  });
  it('leaves ordinary images and look-alike names alone', () => {
    for (const name of ['photo.jpg', 'a.png', 'raw.txt', 'notes.cr2.pdf', 'tiff.tif']) expect(isRawFile({ name }), name).toBe(false);
  });
  it('matches the accept list of the tool', () => {
    const tool = TOOLS.find((t) => t.slug === 'raw-to-jpg')!;
    expect(tool.accept).toBe(RAW_ACCEPT);
  });
});

describe('toRgba', () => {
  it('turns RGB samples into opaque RGBA', () => {
    const img = toRgba({ width: 2, height: 1, colors: 3, bits: 8, data: new Uint8Array([10, 20, 30, 40, 50, 60]) });
    expect([...img.data]).toEqual([10, 20, 30, 255, 40, 50, 60, 255]);
    expect(img.width).toBe(2);
  });
  it('spreads a single grey channel to all three', () => {
    const img = toRgba({ width: 2, height: 1, colors: 1, bits: 8, data: new Uint8Array([7, 200]) });
    expect([...img.data]).toEqual([7, 7, 7, 255, 200, 200, 200, 255]);
  });
  it('scales 16-bit samples down to 8 bits', () => {
    const img = toRgba({ width: 1, height: 1, colors: 3, bits: 16, data: new Uint16Array([0xffff, 0x8000, 0x00ff]) });
    expect([...img.data]).toEqual([255, 128, 0, 255]);
  });
  it('refuses an image with missing pixels', () => {
    expect(() => toRgba({ width: 4, height: 4, colors: 3, bits: 8, data: new Uint8Array(3) })).toThrow(RawDecodeError);
  });
});

describe('RAW to JPG settings', () => {
  it('always saves JPG, at photo quality, through the queue', () => {
    expect(getOutputFormatPolicy('raw-to-jpg', 'image/x-raw')).toEqual({ format: 'image/jpeg', selectable: false });
    expect(defaultQuality('raw-to-jpg')).toBe(92);
    expect(BATCH_TOOLS.has('raw-to-jpg')).toBe(true);
  });
});
