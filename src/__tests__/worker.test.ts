// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import worker from '../worker.js';

function makeEnv() {
  return {
    ASSETS: { fetch: vi.fn(async () => new Response('page', { status: 200 })) },
  };
}

describe('Edge Worker', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it.each([
    ['GET', '/health'],
    ['POST', '/api/compress'],
    ['POST', '/api/upscale'],
  ])('never proxies %s %s to an external backend', async (method, path) => {
    const outbound = vi.fn();
    vi.stubGlobal('fetch', outbound);
    const env = makeEnv();

    await worker.fetch(
      new Request(`https://site.test${path}`, { method, body: method === 'POST' ? 'x' : undefined }),
      env
    );

    expect(outbound).not.toHaveBeenCalled();
    expect(env.ASSETS.fetch).toHaveBeenCalledTimes(1);
  });

  it('passes static assets through unchanged', async () => {
    const env = makeEnv();

    const res = await worker.fetch(new Request('https://site.test/crop-image'), env);

    expect(res.status).toBe(200);
    expect(await res.text()).toBe('page');
  });

  // Security headers come from public/_headers (Cloudflare's static asset serving), not the Worker
  it('sets the security headers for every path in public/_headers', () => {
    // Normalise line endings: a Windows checkout may turn this file into CRLF
    const rules = readFileSync(resolve(__dirname, '../../public/_headers'), 'utf8').replace(/\r\n/g, '\n');
    const block = rules.split(/^\/\*\s*$/m)[1] || '';
    expect(block).toMatch(/^\s+X-Frame-Options: DENY$/m);
    expect(block).toMatch(/^\s+X-Content-Type-Options: nosniff$/m);
    expect(block).toMatch(/^\s+Referrer-Policy: strict-origin-when-cross-origin$/m);
    expect(block).toMatch(/^\s+Permissions-Policy: camera=\(\), microphone=\(\), geolocation=\(\)$/m);
  });
});
