import { describe, expect, it } from 'vitest';
import { gifRepeat, muxAnimatedWebp, webpLoops } from '../animation';

const name = (b: Uint8Array, at: number) => String.fromCharCode(...b.subarray(at, at + 4));

/** A still WebP holding the given chunks */
function still(...chunks: [string, number[]][]) {
  const body = chunks.flatMap(([n, data]) => [...[...n].map((c) => c.charCodeAt(0)), data.length, 0, 0, 0, ...data, ...(data.length % 2 ? [0] : [])]);
  return new Uint8Array([...'RIFF'].map((c) => c.charCodeAt(0)).concat([0, 0, 0, 0], [...'WEBP'].map((c) => c.charCodeAt(0)), body));
}

/** The chunks of a RIFF file, as [name, start of body, size] */
function chunks(b: Uint8Array) {
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const out: [string, number, number][] = [];
  for (let at = 12; at + 8 <= b.length; ) {
    const size = view.getUint32(at + 4, true);
    out.push([name(b, at), at + 8, size]);
    at += 8 + size + (size % 2);
  }
  return out;
}

describe('loop counts', () => {
  it('turns the count of repeats a browser reports into what each format stores', () => {
    expect(webpLoops(Infinity)).toBe(0);
    expect(webpLoops(0)).toBe(1);
    expect(webpLoops(2)).toBe(3);
    expect(gifRepeat(Infinity)).toBe(0);
    expect(gifRepeat(0)).toBe(-1);
    expect(gifRepeat(3)).toBe(3);
  });
});

describe('muxAnimatedWebp', () => {
  const a = still(['VP8 ', [1, 2, 3]]);
  const b = still(['ALPH', [9, 9]], ['VP8 ', [4, 5, 6, 7]]);

  it('writes the header, the loop count and one frame per still', () => {
    const out = muxAnimatedWebp([a, b], [100, 250], 320, 240, 0);
    expect(name(out, 0)).toBe('RIFF');
    expect(new DataView(out.buffer).getUint32(4, true)).toBe(out.length - 8);
    expect(name(out, 8)).toBe('WEBP');
    expect(chunks(out).map((c) => c[0])).toEqual(['VP8X', 'ANIM', 'ANMF', 'ANMF']);
  });

  it('flags animation, and alpha when a frame has it', () => {
    const [, at] = chunks(muxAnimatedWebp([a, b], [100, 100], 320, 240, 0))[0];
    const out = muxAnimatedWebp([a, b], [100, 100], 320, 240, 0);
    expect(out[at]).toBe(0x12);
    const [, at2] = chunks(muxAnimatedWebp([a], [100], 320, 240, 0))[0];
    expect(muxAnimatedWebp([a], [100], 320, 240, 0)[at2]).toBe(0x02);
  });

  it('stores the size less one and each duration', () => {
    const out = muxAnimatedWebp([a, b], [100, 250], 320, 240, 3);
    const [, vp8x] = chunks(out)[0];
    expect(out[vp8x + 4] | (out[vp8x + 5] << 8)).toBe(319);
    expect(out[vp8x + 7] | (out[vp8x + 8] << 8)).toBe(239);
    const [, anim] = chunks(out)[1];
    expect(out[anim + 4]).toBe(3);
    const [, second] = chunks(out)[3];
    expect(out[second + 12] | (out[second + 13] << 8)).toBe(250);
    expect(out[second + 15]).toBe(0x02);
  });

  it('carries the image data over, and keeps chunks on even offsets', () => {
    const out = muxAnimatedWebp([a, b], [100, 100], 2, 2, 0);
    const [, first] = chunks(out)[2];
    expect(name(out, first + 16)).toBe('VP8 ');
    expect([...out.subarray(first + 24, first + 27)]).toEqual([1, 2, 3]);
    const [, second] = chunks(out)[3];
    expect(name(out, second + 16)).toBe('ALPH');
    expect(chunks(out).every(([, at]) => (at - 8) % 2 === 0)).toBe(true);
  });

  it('refuses a file with no image data', () => {
    expect(() => muxAnimatedWebp([still(['EXIF', [1, 2]])], [100], 2, 2, 0)).toThrow();
  });
});
