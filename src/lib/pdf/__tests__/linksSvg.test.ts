import { describe, expect, it } from 'vitest';
import { PDFDocument, PDFName, PDFString, StandardFonts } from 'pdf-lib';
import { optimize } from 'svgo';
import { findLinks, urlsInText } from '../links';
import { DEFAULT_SVG_OPTIONS, optimizeSvg } from '../../svg/optimize';
// Plain JS module shared with the Worker
import { checkUrl, handleLinkCheck, publicHttpUrl, MAX_URLS } from '../../../linkcheck.js';

describe('links in text', () => {
  it('finds addresses and trims the punctuation around them', () => {
    expect(urlsInText('See https://example.com/a. Or (www.test.org/b), and https://en.wikipedia.org/wiki/Foo_(bar).')).toEqual([
      'https://example.com/a',
      'https://www.test.org/b',
      'https://en.wikipedia.org/wiki/Foo_(bar)',
    ]);
  });
});

describe('links in a PDF', () => {
  it('lists web, email and in-document links, and flags a link to a missing page', async () => {
    const doc = await PDFDocument.create();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const [p1, p2] = [doc.addPage(), doc.addPage()];
    p1.drawText('Contents', { x: 50, y: 700, font, size: 12 });
    const ctx = doc.context;
    const link = (page: typeof p1, extra: object) => page.node.addAnnot(ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 10, 10], ...extra })));
    link(p1, { A: { S: 'URI', URI: PDFString.of('https://example.com/') } });
    link(p1, { A: { S: 'URI', URI: PDFString.of('mailto:hi@example.com') } });
    link(p1, { Dest: [p2.ref, PDFName.of('Fit')] });
    link(p2, { A: { S: 'URI', URI: PDFString.of('https://example.com/') } });
    // A link to a page that was deleted
    const gone = doc.addPage();
    link(p2, { Dest: [gone.ref, PDFName.of('Fit')] });
    doc.removePage(2);
    const found = await findLinks(await doc.save(), ['Visit www.tadafile.com today', '']);
    const by = (t: string) => found.find((f) => f.target === t);
    expect(by('https://example.com/')).toMatchObject({ kind: 'web', pages: [1, 2], clickable: true });
    expect(by('mailto:hi@example.com')?.kind).toBe('email');
    expect(by('page 2')).toMatchObject({ kind: 'page', pageOk: true });
    expect(by('missing page')).toMatchObject({ kind: 'page', pageOk: false });
    expect(by('https://www.tadafile.com')).toMatchObject({ clickable: false, pages: [1] });
  });
});

describe('link checker (Worker)', () => {
  it('only allows public web addresses', () => {
    for (const ok of ['https://example.com/x', 'http://93.184.216.34/']) expect(publicHttpUrl(ok)).toBeTruthy();
    for (const bad of ['ftp://example.com', 'http://localhost:3000', 'http://127.0.0.1', 'http://10.0.0.5', 'http://192.168.1.1', 'http://172.20.0.1', 'http://169.254.169.254/latest', 'http://[::1]/', 'http://user:pw@example.com', 'http://intranet/', 'http://printer.local/', 'javascript:alert(1)'])
      expect(publicHttpUrl(bad), bad).toBeNull();
  });
  it('reports status, redirects and failures', async () => {
    const fake = (async (url: string, init: { method: string }) => {
      if (url.includes('down')) throw new TypeError('fetch failed');
      if (url.includes('nohead') && init.method === 'HEAD') return new Response(null, { status: 405 });
      if (url.includes('moved')) return Object.defineProperty(new Response(null, { status: 200 }), 'url', { value: 'https://example.com/new' });
      return new Response(null, { status: url.includes('404') ? 404 : 200 });
    }) as unknown as typeof fetch;
    expect(await checkUrl('https://example.com/ok', fake)).toEqual({ url: 'https://example.com/ok', status: 200, finalUrl: undefined });
    expect((await checkUrl('https://example.com/404', fake)).status).toBe(404);
    expect((await checkUrl('https://example.com/nohead', fake)).status).toBe(200);
    expect((await checkUrl('https://example.com/moved', fake)).finalUrl).toBe('https://example.com/new');
    expect(await checkUrl('https://down.example.com/', fake)).toMatchObject({ status: 0, error: 'unreachable' });
  });
  it('refuses other sites, too many addresses and bad requests', async () => {
    const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status });
    const deps = { json, overLimit: () => false };
    const url = new URL('https://tadafile.com/api/links');
    // A stand-in: Node's Request drops the Origin header
    const req = (origin: string, body: unknown) => ({ method: 'POST', headers: new Map([['Origin', origin]]), json: async () => body });
    expect((await handleLinkCheck(req('https://evil.example', { urls: ['https://a.com'] }) as never, url, deps)).status).toBe(403);
    expect((await handleLinkCheck(req('https://tadafile.com', { urls: Array(MAX_URLS + 1).fill('https://a.com') }) as never, url, deps)).status).toBe(400);
    const r = await handleLinkCheck(req('https://tadafile.com', { urls: ['http://127.0.0.1/'] }) as never, url, deps);
    expect((await r.json()).results).toEqual([{ url: 'http://127.0.0.1/', status: 0, error: 'not_public' }]);
  });
});

describe('SVG optimiser', () => {
  const svg = `<?xml version="1.0"?><!-- made by hand --><svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" viewBox="0 0 100 100"><title>Logo</title><metadata>junk</metadata><g inkscape:label="Layer 1"><path id="shape" d="M 10.123456 10.987654 L 90.000000 10.000000 L 90.000000 90.000000 Z" fill="#ff0000"/></g></svg>`;
  it('shrinks the file and keeps the viewBox, title and IDs by default', () => {
    const r = optimizeSvg(optimize, svg, DEFAULT_SVG_OPTIONS);
    expect(r.after).toBeLessThan(r.before);
    expect(r.svg).toContain('viewBox="0 0 100 100"');
    expect(r.svg).toContain('<title>Logo</title>');
    expect(r.svg).toContain('id="shape"');
    expect(r.svg).not.toContain('made by hand');
    expect(r.svg).not.toContain('inkscape');
  });
  it('removes titles and IDs when asked', () => {
    const r = optimizeSvg(optimize, svg, { ...DEFAULT_SVG_OPTIONS, removeTitles: true, cleanIds: true });
    expect(r.svg).not.toContain('<title>');
    expect(r.svg).not.toContain('id="shape"');
  });
});

describe('WebP kinds', async () => {
  const { webpKind } = await import('../imagesToPdf');
  const head = (chunk: string, flags = 0) => {
    const b = new Uint8Array(32);
    b.set([...'RIFF'].map((c) => c.charCodeAt(0)), 0);
    b.set([...'WEBP'].map((c) => c.charCodeAt(0)), 8);
    b.set([...chunk].map((c) => c.charCodeAt(0)), 12);
    b[20] = flags;
    return b;
  };
  it('tells lossless and transparent WebP from lossy', () => {
    expect(webpKind(head('VP8L'))).toBe('lossless');
    expect(webpKind(head('VP8X', 0x10))).toBe('alpha');
    expect(webpKind(head('VP8X', 0))).toBe('lossy');
    expect(webpKind(head('VP8 '))).toBe('lossy');
    expect(webpKind(new Uint8Array(32))).toBeNull();
  });
});
