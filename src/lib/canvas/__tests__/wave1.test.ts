import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { fitDpi, pageLayout } from '../../pdf/imagesToPdf';
import { readDpi } from '../dpi';
import { rotatedCropSize, straighteningAngle } from '../engine';
import { toolOutputName } from '../../storage/fileNames';
import { addPageNumbers, numberedRange, pageLabel } from '../../pdf/pageOps';

/** A minimal little-endian TIFF header with XResolution and ResolutionUnit */
function tiff(res: number, unit: number) {
  const b = new Uint8Array(64);
  const dv = new DataView(b.buffer);
  b.set([0x49, 0x49, 42, 0]);
  dv.setUint32(4, 8, true);
  dv.setUint16(8, 2, true);
  // tag 282 XResolution, RATIONAL, count 1, value at offset 40
  dv.setUint16(10, 282, true);
  dv.setUint16(12, 5, true);
  dv.setUint32(14, 1, true);
  dv.setUint32(18, 40, true);
  // tag 296 ResolutionUnit, SHORT
  dv.setUint16(22, 296, true);
  dv.setUint16(24, 3, true);
  dv.setUint32(26, 1, true);
  dv.setUint16(30, unit, true);
  dv.setUint32(40, res, true);
  dv.setUint32(44, 1, true);
  return b;
}

describe('image to PDF page size', () => {
  it('uses the DPI a scan declares, and 96 when it declares none or a phone-style 72', () => {
    expect(fitDpi(300)).toBe(300);
    expect(fitDpi(72)).toBe(96);
    expect(fitDpi(null)).toBe(96);
    // A 300 DPI A4 scan (2480 × 3508 px) makes an A4 page (595 × 842 pt)
    const l = pageLayout(2480, 3508, { pageSize: 'fit', orientation: 'auto', margin: 'none' }, 300);
    expect(l.pageW).toBeCloseTo(595.2, 0);
    expect(l.pageH).toBeCloseTo(841.9, 0);
  });
  it('reads a TIFF scan’s resolution, in inches or centimetres', () => {
    expect(readDpi(tiff(300, 2))).toBe(300);
    expect(readDpi(tiff(118, 3))).toBeCloseTo(299.7, 0);
  });
});

describe('download names', () => {
  it('converters keep the plain name; editors say what they did', () => {
    expect(toolOutputName('heic-to-jpg', 'IMG_1234', 'jpg', 'HEIC')).toBe('IMG_1234.jpg');
    expect(toolOutputName('convert-image', 'logo', 'png', 'png')).toBe('logo-converted.png');
    expect(toolOutputName('crop-image', 'photo', 'jpg', 'jpg')).toBe('photo-cropped.jpg');
    expect(toolOutputName('compress-image', 'photo', 'jpeg', 'jpg')).toBe('photo-compressed.jpeg');
  });
});

describe('rotate and crop', () => {
  it('keeps the photo’s proportions and fits inside the turned picture', () => {
    const r = rotatedCropSize(4000, 3000, 3);
    expect(r.width / r.height).toBeCloseTo(4 / 3, 2);
    expect(r.width).toBeLessThan(4000);
    expect(r.width).toBeGreaterThan(3500);
    expect(rotatedCropSize(4000, 3000, 90)).toEqual({ width: 3000, height: 4000 });
    expect(rotatedCropSize(4000, 3000, 0)).toEqual({ width: 4000, height: 3000 });
    // Exactly halfway keeps the photo's orientation, whichever way it turns
    for (const a of [45, -45, 135, -135, 225, 315]) expect(rotatedCropSize(4000, 3000, a).width).toBeGreaterThan(rotatedCropSize(4000, 3000, a).height);
    // Crops by default only when straightening, not for big turns
    expect([3, -12, 15, 87, 183, 357].every(straighteningAngle)).toBe(true);
    expect([16, 30, 45, 60, 135].some(straighteningAngle)).toBe(false);
  });
});

describe('page numbers', () => {
  it('fills a custom label and numbers only the chosen range', async () => {
    expect(pageLabel(3, 10, 'custom', 'Page {page} of {pages}')).toBe('Page 3 of 10');
    expect(numberedRange(10, { from: 2, to: 9 })).toEqual({ first: 1, last: 8 });
    expect(numberedRange(10, { skipFirst: true })).toEqual({ first: 1, last: 9 });
    const doc = await PDFDocument.create();
    for (let i = 0; i < 4; i++) doc.addPage([300, 400]);
    const out = await addPageNumbers(await doc.save(), { position: 'bottom-center', format: 'custom', template: 'Page {page} of {pages}', start: 1, fontSize: 10, margin: 20, from: 2, to: 4 });
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const pdf = await pdfjs.getDocument({ data: out }).promise;
    const texts = [];
    for (let i = 1; i <= 4; i++) texts.push((await (await pdf.getPage(i)).getTextContent()).items.map((x) => ('str' in x ? x.str : '')).join(''));
    expect(texts).toEqual(['', 'Page 1 of 3', 'Page 2 of 3', 'Page 3 of 3']);
    // Loading pdf.js and the fonts can pass 5 s when the whole suite runs at once
  }, 20000);
});
