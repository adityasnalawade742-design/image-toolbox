/**
 * Hide a message in a picture's pixels (steganography), and find it again.
 *
 * The message is written into the lowest bit of the red, green and blue values of fully opaque pixels, so no value
 * changes by more than 1 and the picture looks the same. Semi-transparent pixels are skipped: browsers store them
 * premultiplied, which rounds those bits away when the picture is saved. Only a lossless copy keeps the message, so
 * the result is always a PNG; a JPG, a resize or a social network's recompression destroys it.
 *
 * Layout: "TDF1" (4 bytes) · flags (1: bit 0 = encrypted) · payload length (4, big-endian) · payload · CRC-32 (4).
 * Encrypted payloads are salt (16) · IV (12) · AES-256-GCM ciphertext, keyed by PBKDF2-SHA-256 from the password.
 */

const MAGIC = [0x54, 0x44, 0x46, 0x31]; // "TDF1"
const HEADER = 4 + 1 + 4;
const TRAILER = 4;
const ITERATIONS = 250_000;

let crcTable: Uint32Array | null = null;
export function crc32(bytes: Uint8Array): number {
  if (!crcTable) {
    crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c >>> 0;
    }
  }
  let crc = 0xffffffff;
  for (const b of bytes) crc = crcTable[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

/** Opaque pixels' colour channels, in order: where message bits go */
function slots(rgba: Uint8ClampedArray): number[] {
  const out: number[] = [];
  for (let i = 0; i < rgba.length; i += 4) if (rgba[i + 3] === 255) out.push(i, i + 1, i + 2);
  return out;
}

/** How many message bytes fit (before encryption overhead) */
export function capacity(rgba: Uint8ClampedArray, encrypted = false): number {
  let opaque = 0;
  for (let i = 3; i < rgba.length; i += 4) if (rgba[i] === 255) opaque++;
  return Math.max(0, Math.floor((opaque * 3) / 8) - HEADER - TRAILER - (encrypted ? 16 + 12 + 16 : 0));
}

export class StegoError extends Error {
  constructor(public code: 'too-long' | 'no-message' | 'needs-password' | 'wrong-password') {
    super(code);
  }
}

async function key(password: string, salt: Uint8Array, usage: KeyUsage) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: salt as BufferSource, iterations: ITERATIONS, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, [usage]);
}

/** Write the message into a copy of the pixels */
export async function hideMessage(rgba: Uint8ClampedArray, message: string, password = ''): Promise<Uint8ClampedArray<ArrayBuffer>> {
  let payload = new TextEncoder().encode(message);
  if (password) {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const sealed = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await key(password, salt, 'encrypt'), payload));
    payload = new Uint8Array([...salt, ...iv, ...sealed]);
  }
  const data = new Uint8Array(HEADER + payload.length + TRAILER);
  data.set(MAGIC, 0);
  data[4] = password ? 1 : 0;
  new DataView(data.buffer).setUint32(5, payload.length);
  data.set(payload, HEADER);
  new DataView(data.buffer).setUint32(HEADER + payload.length, crc32(payload));
  const where = slots(rgba);
  if (data.length * 8 > where.length) throw new StegoError('too-long');
  const out = new Uint8ClampedArray(new ArrayBuffer(rgba.length));
  out.set(rgba);
  for (let bit = 0; bit < data.length * 8; bit++) {
    const v = (data[bit >> 3] >> (7 - (bit & 7))) & 1;
    const at = where[bit];
    out[at] = (out[at] & 0xfe) | v;
  }
  return out;
}

function readBytes(rgba: Uint8ClampedArray, where: number[], from: number, count: number): Uint8Array | null {
  if ((from + count) * 8 > where.length) return null;
  const out = new Uint8Array(count);
  for (let i = 0; i < count * 8; i++) out[i >> 3] |= (rgba[where[from * 8 + i]] & 1) << (7 - (i & 7));
  return out;
}

/** Whether the picture holds a message, and if it's password-protected */
export function inspect(rgba: Uint8ClampedArray): { found: boolean; encrypted: boolean } {
  const head = readBytes(rgba, slots(rgba), 0, HEADER);
  const found = !!head && MAGIC.every((m, i) => head[i] === m);
  return { found, encrypted: found && (head![4] & 1) === 1 };
}

/** Read the message back; throws StegoError when there is none or the password is wrong */
export async function revealMessage(rgba: Uint8ClampedArray, password = ''): Promise<string> {
  const where = slots(rgba);
  const head = readBytes(rgba, where, 0, HEADER);
  if (!head || !MAGIC.every((m, i) => head[i] === m)) throw new StegoError('no-message');
  const length = new DataView(head.buffer).getUint32(5);
  const body = readBytes(rgba, where, HEADER, length + TRAILER);
  if (!body) throw new StegoError('no-message');
  const payload = body.subarray(0, length);
  if (new DataView(body.buffer).getUint32(length) !== crc32(payload)) throw new StegoError('no-message');
  if (!(head[4] & 1)) return new TextDecoder().decode(payload);
  if (!password) throw new StegoError('needs-password');
  try {
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: payload.slice(16, 28) }, await key(password, payload.slice(0, 16), 'decrypt'), payload.slice(28));
    return new TextDecoder().decode(plain);
  } catch {
    throw new StegoError('wrong-password');
  }
}
