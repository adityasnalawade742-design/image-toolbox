/**
 * Blur a photo's background without smearing the subject into it.
 *
 * A plain blur mixes the person's colours into the background around them, leaving a halo. Here every pixel is
 * weighted by how much it is background (1 - subject alpha) and the blurred colour is divided by the blurred weight
 * ("normalised convolution"), so the area behind the subject is filled from the surrounding background only.
 * Three box-blur passes approximate a Gaussian; each pass costs the same whatever the radius.
 */

/** One horizontal + vertical box blur of `src` (interleaved channels) in place, using running sums */
function boxBlur(src: Float32Array, w: number, h: number, channels: number, r: number, tmp: Float32Array) {
  const size = 2 * r + 1;
  // Horizontal, edges clamped
  for (let y = 0; y < h; y++) {
    const row = y * w;
    for (let c = 0; c < channels; c++) {
      let sum = 0;
      for (let k = -r; k <= r; k++) sum += src[(row + Math.min(w - 1, Math.max(0, k))) * channels + c];
      for (let x = 0; x < w; x++) {
        tmp[(row + x) * channels + c] = sum / size;
        const add = Math.min(w - 1, x + r + 1);
        const drop = Math.max(0, x - r);
        sum += src[(row + add) * channels + c] - src[(row + drop) * channels + c];
      }
    }
  }
  // Vertical
  for (let x = 0; x < w; x++) {
    for (let c = 0; c < channels; c++) {
      let sum = 0;
      for (let k = -r; k <= r; k++) sum += tmp[(Math.min(h - 1, Math.max(0, k)) * w + x) * channels + c];
      for (let y = 0; y < h; y++) {
        src[(y * w + x) * channels + c] = sum / size;
        const add = Math.min(h - 1, y + r + 1);
        const drop = Math.max(0, y - r);
        sum += tmp[(add * w + x) * channels + c] - tmp[(drop * w + x) * channels + c];
      }
    }
  }
}

/**
 * The background of `rgba` blurred by about `radius` pixels, with the subject (by `subjectAlpha`, 0–255 per pixel)
 * left out of the average. Returns opaque RGBA the same size; pixels with no background nearby keep their colour.
 */
export function blurBackground(rgba: Uint8ClampedArray, subjectAlpha: Uint8ClampedArray, w: number, h: number, radius: number): Uint8ClampedArray<ArrayBuffer> {
  const n = w * h;
  // Premultiplied background colour plus its weight, as 4 channels
  const acc = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    const wt = 1 - subjectAlpha[i] / 255;
    acc[i * 4] = rgba[i * 4] * wt;
    acc[i * 4 + 1] = rgba[i * 4 + 1] * wt;
    acc[i * 4 + 2] = rgba[i * 4 + 2] * wt;
    acc[i * 4 + 3] = wt;
  }
  const r = Math.max(1, Math.round(radius / 2));
  const tmp = new Float32Array(n * 4);
  for (let pass = 0; pass < 3; pass++) boxBlur(acc, w, h, 4, r, tmp);

  const out = new Uint8ClampedArray(n * 4);
  for (let i = 0; i < n; i++) {
    const wt = acc[i * 4 + 3];
    if (wt > 1e-4) {
      out[i * 4] = acc[i * 4] / wt;
      out[i * 4 + 1] = acc[i * 4 + 1] / wt;
      out[i * 4 + 2] = acc[i * 4 + 2] / wt;
    } else {
      // Deep inside the subject with no background within reach: hidden by the subject anyway
      out[i * 4] = rgba[i * 4];
      out[i * 4 + 1] = rgba[i * 4 + 1];
      out[i * 4 + 2] = rgba[i * 4 + 2];
    }
    out[i * 4 + 3] = 255;
  }
  return out;
}
