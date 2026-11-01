/**
 * Animated GIF and WebP: read every frame with the browser's ImageDecoder and write them back as the same kind of file.
 * Where a browser has no ImageDecoder these return null, and the page says only the first frame is kept.
 */
import { canvasToBlob } from './engine';

export interface AnimationFrame {
  canvas: HTMLCanvasElement;
  ms: number;
}

export interface Animation {
  type: 'image/gif' | 'image/webp';
  frames: AnimationFrame[];
  /** Plays after the first, as browsers report it; Infinity is forever */
  repeats: number;
}

// Beyond this a tab could run out of memory, as decoded frames take 4 bytes per pixel
const MAX_TOTAL_PIXELS = 400_000_000;

const ascii = (b: Uint8Array, at: number, text: string) => [...text].every((c, i) => b[at + i] === c.charCodeAt(0));

export async function decodeAnimation(file: Blob): Promise<Animation | null> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const type = ascii(bytes, 0, 'GIF8') ? 'image/gif' : ascii(bytes, 0, 'RIFF') && ascii(bytes, 8, 'WEBP') ? 'image/webp' : null;
  const Decoder = (globalThis as any).ImageDecoder;
  if (!type || !Decoder) return null;
  let decoder: any;
  try {
    if (!(await Decoder.isTypeSupported(type))) return null;
    decoder = new Decoder({ data: bytes, type });
    await decoder.tracks.ready;
    await decoder.completed;
    const track = decoder.tracks.selectedTrack;
    const frames: AnimationFrame[] = [];
    for (let i = 0; i < track.frameCount; i++) {
      const { image } = await decoder.decode({ frameIndex: i });
      if ((i + 1) * image.displayWidth * image.displayHeight > MAX_TOTAL_PIXELS) {
        image.close();
        return null;
      }
      const canvas = document.createElement('canvas');
      canvas.width = image.displayWidth;
      canvas.height = image.displayHeight;
      canvas.getContext('2d')!.drawImage(image, 0, 0);
      frames.push({ canvas, ms: (image.duration ?? 100_000) / 1000 });
      image.close();
    }
    if (frames.length < 2) return null;
    return { type, frames, repeats: track.repetitionCount };
  } catch (err) {
    console.warn('Could not read the animation:', err);
    return null;
  } finally {
    decoder?.close();
  }
}

const u16 = (n: number) => [n & 255, (n >> 8) & 255];
const u24 = (n: number) => [n & 255, (n >> 8) & 255, (n >> 16) & 255];
const u32 = (n: number) => [n & 255, (n >> 8) & 255, (n >> 16) & 255, (n >>> 24) & 255];
const text = (s: string) => [...s].map((c) => c.charCodeAt(0));

function joined(parts: (number[] | Uint8Array)[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((sum, p) => sum + p.length, 0));
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.length;
  }
  return out;
}

const chunk = (name: string, body: Uint8Array) => joined([text(name), u32(body.length), body, body.length % 2 ? [0] : []]);

/** Join still WebP files into an animated one. Each frame must be the size of the canvas. */
export function muxAnimatedWebp(stills: Uint8Array[], durations: number[], width: number, height: number, loops: number): Uint8Array {
  let hasAlpha = false;
  const frames = stills.map((still, i) => {
    const keep: Uint8Array[] = [];
    const view = new DataView(still.buffer, still.byteOffset, still.byteLength);
    for (let at = 12; at + 8 <= still.length; ) {
      const size = view.getUint32(at + 4, true);
      const end = at + 8 + size + (size % 2);
      if (ascii(still, at, 'ALPH') || ascii(still, at, 'VP8L')) hasAlpha = true;
      if (ascii(still, at, 'ALPH') || ascii(still, at, 'VP8 ') || ascii(still, at, 'VP8L')) keep.push(still.subarray(at, end));
      at = end;
    }
    if (!keep.length) throw new Error('Not a still WebP');
    const position = [...u24(0), ...u24(0), ...u24(width - 1), ...u24(height - 1), ...u24(Math.min(0xffffff, Math.round(durations[i]))), 0x02 /* replace, don't blend */];
    return chunk('ANMF', joined([position, ...keep]));
  });
  const header = chunk('VP8X', joined([[0x02 | (hasAlpha ? 0x10 : 0), 0, 0, 0], u24(width - 1), u24(height - 1)]));
  const anim = chunk('ANIM', joined([[0, 0, 0, 0], u16(Math.min(loops, 0xffff))]));
  const body = joined([text('WEBP'), header, anim, ...frames]);
  return joined([text('RIFF'), u32(body.length), body]);
}

async function encodeGif(frames: AnimationFrame[], quality: number, repeats: number): Promise<Blob> {
  const { GIFEncoder, quantize, applyPalette } = await import('gifenc');
  const { width, height } = frames[0].canvas;
  const pixels = frames.map((f) => f.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, width, height).data);
  // One palette for the whole file, from a sample of every frame. Lower quality means fewer colors
  const colors = Math.max(16, Math.min(255, Math.round(255 * quality)));
  const step = Math.max(1, Math.floor((frames.length * width * height) / 1_000_000));
  const sample: number[] = [];
  for (const p of pixels) for (let i = 0; i < p.length; i += 4 * step) if (p[i + 3] >= 128) sample.push(p[i], p[i + 1], p[i + 2], 255);
  const palette: number[][] = quantize(new Uint8Array(sample), colors, { format: 'rgb444' });
  const clear = palette.length;
  palette.push([0, 0, 0]);
  const seeThrough = pixels.some((p) => {
    for (let i = 3; i < p.length; i += 4) if (p[i] < 128) return true;
    return false;
  });

  const gif = GIFEncoder();
  let previous: Uint8ClampedArray | null = null;
  for (let f = 0; f < frames.length; f++) {
    const p = pixels[f];
    const index: Uint8Array = applyPalette(new Uint8Array(p.buffer, p.byteOffset, p.byteLength), palette.slice(0, clear), 'rgb444');
    for (let i = 0; i < index.length; i++) {
      const o = i * 4;
      if (p[o + 3] < 128) index[i] = clear;
      // A pixel that hasn't changed needn't be stored again, which is most of what makes a GIF small
      else if (previous && !seeThrough && previous[o] === p[o] && previous[o + 1] === p[o + 1] && previous[o + 2] === p[o + 2]) index[i] = clear;
    }
    gif.writeFrame(index, width, height, { palette: f === 0 ? palette : undefined, delay: frames[f].ms, transparent: true, transparentIndex: clear, dispose: seeThrough ? 2 : 1, repeat: gifRepeat(repeats) });
    previous = p;
    await new Promise((r) => setTimeout(r));
  }
  gif.finish();
  return new Blob([new Uint8Array(gif.bytes())], { type: 'image/gif' });
}

/** A GIF stores 0 for forever and leaves the count out, which the encoder calls -1, to play once */
export const gifRepeat = (repeats: number) => (repeats === Infinity ? 0 : repeats === 0 ? -1 : repeats);

/** A WebP stores total plays, with 0 for forever */
export const webpLoops = (repeats: number) => (repeats === Infinity ? 0 : repeats + 1);

/** Write an animation back as its own format, each frame first passed through `change` (resizing, for example) */
export async function encodeAnimation(animation: Animation, change: (frame: HTMLCanvasElement) => HTMLCanvasElement, quality: number): Promise<Blob> {
  const frames = animation.frames.map((f) => ({ canvas: change(f.canvas), ms: f.ms }));
  if (animation.type === 'image/gif') return encodeGif(frames, quality, animation.repeats);
  const stills: Uint8Array[] = [];
  for (const f of frames) {
    const blob = await canvasToBlob(f.canvas, 'image/webp', quality, undefined, { best: true });
    if (blob.type !== 'image/webp') throw new Error('This browser cannot write WebP');
    stills.push(new Uint8Array(await blob.arrayBuffer()));
  }
  const { width, height } = frames[0].canvas;
  return new Blob([new Uint8Array(muxAnimatedWebp(stills, frames.map((f) => f.ms), width, height, webpLoops(animation.repeats)))], { type: 'image/webp' });
}
