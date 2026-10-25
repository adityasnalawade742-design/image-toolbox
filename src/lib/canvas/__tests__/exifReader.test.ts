// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { readExifSummary } from '../exifReader';

// --- Minimal EXIF JPEG builder (little-endian TIFF inside an APP1 segment) ---
type Entry = { tag: number; type: 2 | 3 | 4 | 5; value: string | number[] };

function encodeValue(e: Entry): Uint8Array {
  if (e.type === 2) return new TextEncoder().encode(`${e.value}\0`);
  const nums = e.value as number[];
  const width = e.type === 3 ? 2 : 4;
  const out = new DataView(new ArrayBuffer(nums.length * width));
  nums.forEach((n, i) => (width === 2 ? out.setUint16(i * 2, n, true) : out.setUint32(i * 4, n, true)));
  return new Uint8Array(out.buffer);
}

const count = (e: Entry) =>
  e.type === 2 ? encodeValue(e).length : e.type === 5 ? (e.value as number[]).length / 2 : (e.value as number[]).length;

function ifdLength(entries: Entry[]): number {
  let len = 2 + entries.length * 12 + 4;
  for (const e of entries) {
    const v = encodeValue(e);
    if (v.length > 4) len += v.length + (v.length % 2);
  }
  return len;
}

function writeIfd(bytes: Uint8Array, offset: number, entries: Entry[]) {
  const view = new DataView(bytes.buffer);
  view.setUint16(offset, entries.length, true);
  let dataOffset = offset + 2 + entries.length * 12 + 4;
  entries.forEach((e, i) => {
    const p = offset + 2 + i * 12;
    const v = encodeValue(e);
    view.setUint16(p, e.tag, true);
    view.setUint16(p + 2, e.type, true);
    view.setUint32(p + 4, count(e), true);
    if (v.length <= 4) {
      bytes.set(v, p + 8);
    } else {
      view.setUint32(p + 8, dataOffset, true);
      bytes.set(v, dataOffset);
      dataOffset += v.length + (v.length % 2);
    }
  });
}

function buildExifJpeg(ifd0: Entry[], exifIfd: Entry[], gpsIfd: Entry[]): Blob {
  const ifd0Full: Entry[] = [...ifd0, { tag: 0x8769, type: 4, value: [0] }, { tag: 0x8825, type: 4, value: [0] }];
  const exifOffset = 8 + ifdLength(ifd0Full);
  const gpsOffset = exifOffset + ifdLength(exifIfd);
  ifd0Full[ifd0Full.length - 2].value = [exifOffset];
  ifd0Full[ifd0Full.length - 1].value = [gpsOffset];

  const tiff = new Uint8Array(gpsOffset + ifdLength(gpsIfd));
  tiff.set([0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00]);
  writeIfd(tiff, 8, ifd0Full);
  writeIfd(tiff, exifOffset, exifIfd);
  writeIfd(tiff, gpsOffset, gpsIfd);

  const header = new TextEncoder().encode('Exif\0\0');
  const segLen = 2 + header.length + tiff.length;
  return new Blob(
    [new Uint8Array([0xff, 0xd8, 0xff, 0xe1, segLen >> 8, segLen & 0xff]), header, tiff, new Uint8Array([0xff, 0xd9])],
    { type: 'image/jpeg' }
  );
}

const cameraPhoto = () =>
  buildExifJpeg(
    [
      { tag: 0x010f, type: 2, value: 'Canon' },
      { tag: 0x0110, type: 2, value: 'EOS R6' },
    ],
    [
      { tag: 0x829a, type: 5, value: [1, 250] }, // ExposureTime 1/250
      { tag: 0x829d, type: 5, value: [28, 10] }, // FNumber 2.8
      { tag: 0x8827, type: 3, value: [400] }, // ISO
      { tag: 0x9003, type: 2, value: '2024:05:01 10:20:30' }, // DateTimeOriginal
      { tag: 0x920a, type: 5, value: [50, 1] }, // FocalLength 50mm
    ],
    [
      { tag: 0x0001, type: 2, value: 'N' },
      { tag: 0x0002, type: 5, value: [48, 1, 51, 1, 30, 1] }, // 48°51'30"
      { tag: 0x0003, type: 2, value: 'E' },
      { tag: 0x0004, type: 5, value: [2, 1, 17, 1, 24, 1] }, // 2°17'24"
    ]
  );

describe('EXIF Reader', () => {
  it('extracts readable camera and exposure details', async () => {
    const summary = await readExifSummary(cameraPhoto());
    const byLabel = Object.fromEntries(summary.tags.map((t) => [t.label, t.value]));

    expect(byLabel['Camera']).toBe('Canon EOS R6');
    expect(byLabel['Exposure']).toBe('1/250 s');
    expect(byLabel['Aperture']).toBe('f/2.8');
    expect(byLabel['ISO']).toBe('400');
    expect(byLabel['Focal Length']).toBe('50 mm');
    expect(byLabel['Taken']).toBe('2024-05-01 10:20:30');
  });

  it('flags embedded GPS location and reports coordinates', async () => {
    const summary = await readExifSummary(cameraPhoto());

    expect(summary.hasGps).toBe(true);
    expect(summary.tags.find((t) => t.label === 'GPS Location')?.value).toBe('48.85833, 2.29000');
  });

  it('returns an empty summary for images without EXIF', async () => {
    const png = new Blob([new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])], { type: 'image/png' });

    await expect(readExifSummary(png)).resolves.toEqual({ tags: [], hasGps: false });
  });
});
