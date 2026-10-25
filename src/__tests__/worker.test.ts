// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
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

  it('serves static assets with security headers', async () => {
    const env = makeEnv();

    const res = await worker.fetch(new Request('https://site.test/crop-image'), env);

    expect(res.status).toBe(200);
    expect(await res.text()).toBe('page');
    expect(res.headers.get('X-Frame-Options')).toBe('DENY');
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
  });
});
