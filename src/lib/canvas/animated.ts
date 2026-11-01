/**
 * Whether a file holds an animation. Everything that draws an image on a canvas keeps only its first frame, so the
 * tools say so instead of handing back a suspiciously small "compressed" file.
 */
const ascii = (b: Uint8Array, start: number, text: string) => [...text].every((c, i) => b[start + i] === c.charCodeAt(0));

function isApng(b: Uint8Array): boolean {
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  // The animation chunk has to come before the image data
  for (let at = 8; at + 8 <= b.length; at += 12 + view.getUint32(at)) {
    if (ascii(b, at + 4, 'acTL')) return true;
    if (ascii(b, at + 4, 'IDAT')) return false;
  }
  return false;
}

function isAnimatedGif(b: Uint8Array): boolean {
  const skipSubBlocks = (from: number) => {
    let at = from;
    while (at < b.length && b[at] !== 0) at += b[at] + 1;
    return at + 1;
  };
  const colorTable = (flags: number) => (flags & 0x80 ? 3 * 2 ** ((flags & 7) + 1) : 0);
  let at = 13 + colorTable(b[10]);
  let frames = 0;
  while (at < b.length) {
    if (b[at] === 0x2c) {
      if (++frames > 1) return true;
      at = skipSubBlocks(at + 10 + colorTable(b[at + 9]) + 1);
    } else if (b[at] === 0x21) {
      at = skipSubBlocks(at + 2);
    } else {
      return false;
    }
  }
  return false;
}

export function isAnimatedBytes(b: Uint8Array): boolean {
  if (ascii(b, 0, 'GIF8')) return isAnimatedGif(b);
  if (ascii(b, 0, '\x89PNG')) return isApng(b);
  if (ascii(b, 0, 'RIFF') && ascii(b, 8, 'WEBPVP8X')) return (b[20] & 0x02) !== 0;
  // An AVIF image sequence
  return ascii(b, 4, 'ftypavis');
}

export async function isAnimatedImage(file: Blob): Promise<boolean> {
  return isAnimatedBytes(new Uint8Array(await file.arrayBuffer()));
}
