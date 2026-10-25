// Document tools: the browser posts to /api/doc/<endpoint>; the Worker adds the shared secret and forwards
// to the document server. Everything else is static assets.
const DOC_ENDPOINTS = new Set(['convert', 'compress', 'protect', 'unlock', 'repair', 'ocr', 'pdfa']);
const MAX_BODY = 52 * 1024 * 1024;
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

const json = (status, error) =>
  new Response(JSON.stringify({ error }), { status, headers: securityHeaders(new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' })) });

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
  if (!env.DOC_API_URL || !env.DOC_API_SECRET) return json(503, 'offline');
  const origin = env.DOC_API_URL.replace(/\/$/, '');

  if (endpoint === 'health' && request.method === 'GET') {
    try {
      const res = await fetch(`${origin}/health`, { signal: AbortSignal.timeout(5000) });
      return new Response(res.ok ? '{"ok":true}' : '{"ok":false}', { status: res.ok ? 200 : 503, headers: securityHeaders(new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' })) });
    } catch {
      return json(503, 'offline');
    }
  }

  if (request.method !== 'POST' || !DOC_ENDPOINTS.has(endpoint)) return json(404, 'not_found');
  // Same-origin only: other sites can't use the server through this proxy
  if (request.headers.get('Origin') !== url.origin) return json(403, 'forbidden');
  const length = Number(request.headers.get('Content-Length') || 0);
  if (!length || length > MAX_BODY) return json(413, 'too_large');
  if (overLimit(request.headers.get('CF-Connecting-IP') || 'unknown')) return json(429, 'rate_limited');

  const headers = new Headers({
    'Content-Type': request.headers.get('Content-Type') || 'application/octet-stream',
    'Content-Length': String(length),
    'X-Origin-Secret': env.DOC_API_SECRET,
  });
  let res;
  try {
    res = await fetch(`${origin}/v1/${endpoint}${url.search}`, { method: 'POST', headers, body: request.body, signal: AbortSignal.timeout(150_000) });
  } catch {
    return json(503, 'offline');
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

    const assetResponse = await env.ASSETS.fetch(request);
    return new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers: securityHeaders(new Headers(assetResponse.headers)),
    });
  },
};
