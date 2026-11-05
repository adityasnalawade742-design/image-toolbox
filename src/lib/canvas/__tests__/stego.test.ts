import { describe, expect, it } from 'vitest';
import { StegoError, capacity, crc32, hideMessage, inspect, revealMessage } from '../stego';

// A noisy opaque test picture
function picture(w: number, h: number, alpha = 255) {
  const px = new Uint8ClampedArray(w * h * 4);
  let s = 12345;
  for (let i = 0; i < px.length; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    px[i] = (i & 3) === 3 ? alpha : s & 255;
  }
  return px;
}

describe('crc32', () => {
  it('matches the standard check value', () => {
    expect(crc32(new TextEncoder().encode('123456789'))).toBe(0xcbf43926);
  });
});

describe('hide and reveal', () => {
  it('round-trips text, including emoji and other scripts', async () => {
    const px = picture(64, 64);
    const message = 'Meet at 7 — café ☕ 日本語 🙂';
    const out = await hideMessage(px, message);
    expect(await revealMessage(out)).toBe(message);
  });
  it('changes no value by more than 1 and leaves alpha alone', async () => {
    const px = picture(32, 32);
    const out = await hideMessage(px, 'x'.repeat(200));
    let max = 0;
    for (let i = 0; i < px.length; i++) {
      max = Math.max(max, Math.abs(px[i] - out[i]));
      if ((i & 3) === 3) expect(out[i]).toBe(px[i]);
    }
    expect(max).toBe(1);
  });
  it('uses only opaque pixels', async () => {
    const px = picture(16, 16, 128);
    expect(capacity(px)).toBe(0);
    await expect(hideMessage(px, 'hi')).rejects.toMatchObject({ code: 'too-long' });
  });
  it('reports the space and refuses a message that does not fit', async () => {
    const px = picture(10, 10); // 100 pixels, 300 bits, 37 bytes
    expect(capacity(px)).toBe(37 - 13);
    await expect(hideMessage(px, 'a'.repeat(25))).rejects.toBeInstanceOf(StegoError);
    expect(await revealMessage(await hideMessage(px, 'a'.repeat(24)))).toBe('a'.repeat(24));
  });
  it('finds nothing in an ordinary picture', async () => {
    const px = picture(40, 40);
    expect(inspect(px)).toEqual({ found: false, encrypted: false });
    await expect(revealMessage(px)).rejects.toMatchObject({ code: 'no-message' });
  });
  it('detects damage with the checksum', async () => {
    const out = await hideMessage(picture(40, 40), 'hello world');
    out[200] ^= 1; // a bit inside the message
    await expect(revealMessage(out)).rejects.toMatchObject({ code: 'no-message' });
  });
});

describe('password', () => {
  it('encrypts: needs the password, rejects a wrong one, opens with the right one', async () => {
    const out = await hideMessage(picture(80, 80), 'top secret', 'correct horse');
    expect(inspect(out)).toEqual({ found: true, encrypted: true });
    await expect(revealMessage(out)).rejects.toMatchObject({ code: 'needs-password' });
    await expect(revealMessage(out, 'wrong')).rejects.toMatchObject({ code: 'wrong-password' });
    expect(await revealMessage(out, 'correct horse')).toBe('top secret');
  });
  it('does not store the message in readable form', async () => {
    const out = await hideMessage(picture(80, 80), 'PLAINTEXT-MARKER', 'pw');
    const bits: number[] = [];
    for (let i = 0; i < out.length; i++) if ((i & 3) !== 3) bits.push(out[i] & 1);
    const bytes = new Uint8Array(bits.length >> 3);
    for (let i = 0; i < bytes.length * 8; i++) bytes[i >> 3] |= bits[i] << (7 - (i & 7));
    expect(new TextDecoder('latin1').decode(bytes)).not.toContain('PLAINTEXT-MARKER');
  });
});
