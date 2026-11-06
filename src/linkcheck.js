/**
 * PDF Link Checker's server side: the browser can't read other sites' responses, so the Worker checks each address.
 * Only the addresses come here, never the PDF. Public http(s) addresses only; private and local ones are refused.
 */
export const MAX_URLS = 20;
const TIMEOUT = 8000;
const UA = 'TadaFile-LinkCheck/1.0 (+https://tadafile.com/pdf-link-checker)';

/** The address if it's a public web address we may request, otherwise null */
export function publicHttpUrl(s) {
  let u;
  try {
    u = new URL(String(s).trim());
  } catch {
    return null;
  }
  if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
  if (u.username || u.password) return null;
  const host = u.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (!host.includes('.') && !host.includes(':')) return null;
  if (/(^|\.)(localhost|local|internal|intranet|home|lan|corp|test|invalid|example)$/.test(host)) return null;
  const v4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host);
  if (v4) {
    const [a, b] = [Number(v4[1]), Number(v4[2])];
    if (a === 0 || a === 10 || a === 127 || a >= 224 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127)) return null;
  }
  if (host.includes(':') && (host === '::1' || host === '::' || /^f[cd]/.test(host) || /^fe[89ab]/.test(host) || host.startsWith('::ffff:'))) return null;
  return u.href;
}

/** One address: its status, where it ends up after redirects, or why it couldn't be reached */
export async function checkUrl(url, fetchImpl = fetch) {
  const attempt = async (method) => {
    const res = await fetchImpl(url, { method, redirect: 'follow', headers: { 'User-Agent': UA, Accept: '*/*' }, signal: AbortSignal.timeout(TIMEOUT) });
    // Don't download pages: only the status matters
    try {
      await res.body?.cancel();
    } catch {
      /* already closed */
    }
    return res;
  };
  try {
    let res = await attempt('HEAD');
    // Some servers refuse HEAD; ask again with GET
    if ([403, 405, 501].includes(res.status)) res = await attempt('GET');
    const finalUrl = res.url && res.url !== url ? res.url : undefined;
    return { url, status: res.status, finalUrl };
  } catch (err) {
    const name = err && err.name;
    return { url, status: 0, error: name === 'TimeoutError' || name === 'AbortError' ? 'timeout' : 'unreachable' };
  }
}

/** POST /api/links { urls: [...] } -> { results: [...] } */
export async function handleLinkCheck(request, url, { json, overLimit }) {
  if (request.method !== 'POST') return json(405, { error: 'method' });
  if (request.headers.get('Origin') !== url.origin) return json(403, { error: 'forbidden' });
  if (overLimit(request.headers.get('CF-Connecting-IP') || 'unknown')) return json(429, { error: 'rate_limited' });
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'bad_request' });
  }
  const urls = Array.isArray(body && body.urls) ? body.urls : [];
  if (!urls.length || urls.length > MAX_URLS) return json(400, { error: 'bad_request', max: MAX_URLS });
  const results = [];
  const queue = [...new Set(urls.map(String))];
  const worker = async () => {
    while (queue.length) {
      const raw = queue.shift();
      const safe = publicHttpUrl(raw);
      results.push(safe ? { ...(await checkUrl(safe)), url: raw } : { url: raw, status: 0, error: 'not_public' });
    }
  };
  await Promise.all(Array.from({ length: 5 }, worker));
  return json(200, { results });
}
