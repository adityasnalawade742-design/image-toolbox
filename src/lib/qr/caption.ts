/**
 * A caption under a QR code ("Scan me", a Wi-Fi name…) and a printable Wi-Fi card. Text is drawn by the browser, so
 * any script works; the caption shrinks to fit the code's width.
 */
const SANS = '"Barlow", "Helvetica", "Arial", system-ui, sans-serif';

/** Font size that fits `text` in `width`, starting from `size` */
function fit(ctx: CanvasRenderingContext2D, text: string, width: number, size: number, weight = 600) {
  let s = size;
  for (; s > 8; s *= 0.92) {
    ctx.font = `${weight} ${Math.round(s)}px ${SANS}`;
    if (ctx.measureText(text).width <= width) break;
  }
  return Math.round(s);
}

/** The code with a caption band underneath, on the code's light colour */
export function withCaption(qr: HTMLCanvasElement, caption: string, dark: string, light: string): HTMLCanvasElement {
  const text = caption.trim();
  if (!text) return qr;
  const w = qr.width;
  const probe = document.createElement('canvas').getContext('2d')!;
  const size = fit(probe, text, w * 0.86, w * 0.075);
  const band = Math.round(size * 1.9);
  const out = document.createElement('canvas');
  out.width = w;
  out.height = qr.height + band;
  const ctx = out.getContext('2d')!;
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, out.width, out.height);
  ctx.drawImage(qr, 0, 0);
  ctx.fillStyle = dark;
  ctx.font = `600 ${size}px ${SANS}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // The code's own quiet zone already sits above, so the text hugs the bottom of the band
  ctx.fillText(text, w / 2, qr.height + band * 0.42);
  return out;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** The same caption in an SVG from the qrcode library (viewBox 0 0 n n) */
export function svgWithCaption(svg: string, caption: string, dark: string, light: string): string {
  const text = caption.trim();
  const vb = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  if (!text || !vb) return svg;
  const n = Number(vb[1]);
  // SVG can't measure text, so the size comes from an estimate: wide characters (CJK and the like) count as full width
  const ems = [...text].reduce((sum, ch) => sum + (/[\u1100-\uffff]/.test(ch) ? 1 : 0.58), 0);
  const size = Math.min(n * 0.075, (n * 0.86) / Math.max(1, ems));
  const band = n * 0.075 * 1.9;
  const h = n + band;
  const width = Number(svg.match(/\swidth="([\d.]+)"/)?.[1] ?? n);
  return svg
    .replace(/viewBox="0 0 [\d.]+ [\d.]+"/, `viewBox="0 0 ${n} ${h}"`)
    .replace(/\sheight="[\d.]+"/, ` height="${Math.round((width * h) / n)}"`)
    .replace(
      '</svg>',
      `<rect x="0" y="${n}" width="${n}" height="${band}" fill="${light}"/><text x="${n / 2}" y="${n + band * 0.42}" font-family='${SANS}' font-weight="600" font-size="${size}" fill="${dark}" text-anchor="middle" dominant-baseline="middle">${esc(text)}</text></svg>`
    );
}

export interface WifiCardText {
  title: string;
  network: string;
  password: string;
  noPassword: string;
  scan: string;
}

/** A printable A6 card (portrait, 300 dpi): title, the code, network name, password and how to use it */
export function wifiCard(qr: HTMLCanvasElement, ssid: string, password: string, labels: WifiCardText): HTMLCanvasElement {
  const W = 1240;
  const H = 1748;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#141414';
  ctx.lineWidth = 6;
  ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.fillStyle = '#141414';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.font = `700 ${fit(ctx, labels.title, W - 200, 110, 700)}px ${SANS}`;
  ctx.fillText(labels.title, W / 2, 210);
  const q = 760;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(qr, (W - q) / 2, 270, q, q);
  ctx.imageSmoothingEnabled = true;
  let y = 270 + q + 120;
  const line = (label: string, value: string) => {
    ctx.fillStyle = '#5b5b58';
    ctx.font = `500 46px ${SANS}`;
    ctx.fillText(label, W / 2, y);
    y += 82;
    ctx.fillStyle = '#141414';
    ctx.font = `700 ${fit(ctx, value, W - 200, 76, 700)}px ${SANS}`;
    ctx.fillText(value, W / 2, y);
    y += 120;
  };
  line(labels.network, ssid);
  line(labels.password, password || labels.noPassword);
  ctx.fillStyle = '#5b5b58';
  ctx.font = `500 ${fit(ctx, labels.scan, W - 200, 40, 500)}px ${SANS}`;
  ctx.fillText(labels.scan, W / 2, H - 110);
  return c;
}
