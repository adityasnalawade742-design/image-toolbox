// Static files are served directly by Cloudflare (security headers come from public/_headers), so this Worker
// only runs for requests that match no file.
//
// Document tools: the browser posts to /api/doc/<endpoint>; the Worker adds the shared secret and forwards to the
// document server on Google Cloud Run.
const DOC_ENDPOINTS = new Set(['convert', 'compress', 'protect', 'unlock', 'repair', 'ocr', 'pdfa']);
// Cloud Run accepts request bodies up to 32 MiB
const MAX_BODY = 31 * 1024 * 1024;
// Best-effort per-isolate limit; Cloudflare's own protections sit in front of this
const RATE_LIMIT = 20; // jobs per IP per minute
const recent = new Map();

function securityHeaders(headers) {
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return headers;
}

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: securityHeaders(new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' })) });

function overLimit(ip) {
  const now = Date.now();
  const list = (recent.get(ip) || []).filter((t) => now - t < 60_000);
  list.push(now);
  recent.set(ip, list);
  if (recent.size > 5000) recent.clear();
  return list.length > RATE_LIMIT;
}

async function proxyDoc(request, env, url) {
  const endpoint = url.pathname.slice('/api/doc/'.length);
  const configured = Boolean(env.DOC_API_URL && env.DOC_API_SECRET);

  // Answered from configuration alone: tool pages ask this on load, and calling Cloud Run would wake (and bill)
  // the server for every page view. A server that is down shows up as 'offline' on the job itself.
  if (endpoint === 'health' && request.method === 'GET') return json(configured ? 200 : 503, { ok: configured });

  if (!configured) return json(503, { error: 'offline' });
  if (request.method !== 'POST' || !DOC_ENDPOINTS.has(endpoint)) return json(404, { error: 'not_found' });
  // Same-origin only: other sites can't use the server through this proxy
  if (request.headers.get('Origin') !== url.origin) return json(403, { error: 'forbidden' });
  const length = Number(request.headers.get('Content-Length') || 0);
  if (!length || length > MAX_BODY) return json(413, { error: 'too_large' });
  if (overLimit(request.headers.get('CF-Connecting-IP') || 'unknown')) return json(429, { error: 'rate_limited' });

  const origin = env.DOC_API_URL.replace(/\/$/, '');
  const headers = new Headers({
    'Content-Type': request.headers.get('Content-Type') || 'application/octet-stream',
    'Content-Length': String(length),
    'X-Origin-Secret': env.DOC_API_SECRET,
  });
  let res;
  try {
    // Long enough for a cold start (the server sleeps when idle) plus a multi-page OCR job
    res = await fetch(`${origin}/v1/${endpoint}${url.search}`, { method: 'POST', headers, body: request.body, signal: AbortSignal.timeout(290_000) });
  } catch {
    return json(503, { error: 'offline' });
  }
  const out = securityHeaders(new Headers({ 'Cache-Control': 'no-store' }));
  for (const h of ['Content-Type', 'Content-Disposition', 'X-Size-Before', 'X-Size-After']) {
    const v = res.headers.get(h);
    if (v) out.set(h, v);
  }
  return new Response(res.body, { status: res.status, headers: out });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/doc/')) return proxyDoc(request, env, url);
    return env.ASSETS.fetch(request);
  },
};
