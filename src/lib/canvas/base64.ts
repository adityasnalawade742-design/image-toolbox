// Leading base64 characters of each format's magic bytes
const SIGNATURES: [string, string][] = [
  ['iVBORw0KGgo', 'image/png'],
  ['/9j/', 'image/jpeg'],
  ['R0lGOD', 'image/gif'],
  ['UklGR', 'image/webp'],
  ['PHN2Zy', 'image/svg+xml'], // "<svg"
  ['PD94bWw', 'image/svg+xml'], // "<?xml"
  ['Qk', 'image/bmp'],
  ['AAAAIGZ0eXBhdmlm', 'image/avif'],
  ['AAAAHGZ0eXBhdmlm', 'image/avif'],
];

/**
 * Turn pasted Base64 in any common shape (bare string, data URI, or a CSS/HTML snippet;
 * URL-safe alphabet; wrapped lines) into a `data:` URI with the real image MIME type.
 * Returns null when the input isn't base64.
 */
export function normalizeBase64Image(input: string): string | null {
  let text = input.trim();

  // Pull a data URI out of snippets like url("…"), src="…", or surrounding quotes
  const embedded = text.match(/data:[^"'()\s;,]*(?:;[^"'()\s,]*)?,[^"'()]+/i);
  if (embedded) text = embedded[0];
  text = text.replace(/^["']|["']$/g, '');

  let declaredMime: string | null = null;
  const prefix = text.match(/^data:([^;,]*)(;[^,]*)?,/i);
  if (prefix) {
    declaredMime = prefix[1].toLowerCase();
    text = text.slice(prefix[0].length);
  }

  let payload = text.replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
  if (!payload || !/^[A-Za-z0-9+/]+={0,2}$/.test(payload)) return null;
  payload = payload.replace(/=+$/, '');
  payload += '='.repeat((4 - (payload.length % 4)) % 4);

  const sniffed = SIGNATURES.find(([sig]) => payload.startsWith(sig))?.[1];
  const mime = sniffed || (declaredMime?.startsWith('image/') ? declaredMime : 'image/png');
  return `data:${mime};base64,${payload}`;
}
