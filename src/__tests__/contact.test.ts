import { beforeEach, describe, expect, it } from 'vitest';
// Plain JS module shared with the Worker
import { buildMessage, handleContact, parseContact, resetLimits } from '../contact.js';

const ok = { name: 'Ada', email: 'ada@example.com', topic: 'bug', message: 'The crop tool hangs on a big HEIC photo.' };

describe('contact form fields', () => {
  it('accepts a normal message and tidies it', () => {
    expect(parseContact({ ...ok, name: '  Ada \n Lovelace ' }).fields).toMatchObject({ name: 'Ada Lovelace', topic: 'bug' });
    expect(parseContact({ ...ok, topic: 'nonsense' }).fields?.topic).toBe('other');
  });
  it('rejects a bad address, a too-short message and header tricks', () => {
    expect(parseContact({ ...ok, email: 'not-an-email' }).error).toBe('email');
    expect(parseContact({ ...ok, email: 'a@b.com\r\nBcc: x@evil.com' }).error).toBe('email');
    expect(parseContact({ ...ok, email: '"x"@example.com' }).error).toBe('email');
    expect(parseContact({ ...ok, message: 'hi' }).error).toBe('message');
  });
  it('treats a filled-in hidden field as spam', () => {
    expect(parseContact({ ...ok, website: 'http://spam.example' }).spam).toBe(true);
  });
});

describe('the email', () => {
  const mime = buildMessage(parseContact({ ...ok, name: 'Zoë "Z" Müller', message: 'Héllo — ünïcode\r\nBcc: evil@example.com\nsecond line' }).fields!, {
    to: 'aditya.contact142@gmail.com',
    userAgent: 'Mozilla/5.0',
    country: 'IN',
    now: new Date('2026-11-07T10:00:00Z'),
    id: '00000000-0000-4000-8000-000000000000',
  });
  const [head, body] = mime.split('\r\n\r\n');
  it('has safe headers, with the visitor in Reply-To', () => {
    expect(head).toContain('To: <aditya.contact142@gmail.com>');
    expect(head).toContain('From: "TadaFile contact form" <contact-form@tadafile.com>');
    expect(head).toMatch(/Reply-To: "=\?UTF-8\?B\?[A-Za-z0-9+/=]+\?=" <ada@example.com>/);
    expect(head).toContain('Message-ID: <00000000-0000-4000-8000-000000000000@tadafile.com>');
    // Header lines only: nothing from the message leaks in as a header
    for (const line of head.split('\r\n')) expect(line).toMatch(/^(From|To|Reply-To|Subject|Date|Message-ID|MIME-Version|Content-Type|Content-Transfer-Encoding): /);
    expect(head).not.toContain('Bcc');
  });
  it('carries the message intact in the body', () => {
    const text = new TextDecoder().decode(Uint8Array.from(atob(body.replace(/\r\n/g, '')), (c) => c.charCodeAt(0)));
    expect(text).toContain('Héllo — ünïcode');
    expect(text).toContain('second line');
    expect(text).toContain('Country: IN');
    expect(body.split('\r\n').every((l) => l.length <= 76)).toBe(true);
  });
});

describe('POST /api/contact', () => {
  const url = new URL('https://tadafile.com/api/contact');
  const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  const sentMail: { from: string; to: string; raw: string }[] = [];
  class EmailMessage {
    constructor(public from: string, public to: string, public raw: string) {}
  }
  const env = { CONTACT_EMAIL: { send: async (m: EmailMessage) => void sentMail.push(m) } };
  // A stand-in request: Node's Request drops the Origin header
  const req = (body: unknown, { origin = 'https://tadafile.com', ip = '1.2.3.4', form = false } = {}) => ({
    method: 'POST',
    headers: new Map(Object.entries({ Origin: origin, 'CF-Connecting-IP': ip, 'Content-Type': form ? 'application/x-www-form-urlencoded' : 'application/json' })),
    json: async () => body,
    formData: async () => new Map(Object.entries(body as object)),
  });
  const call = (r: ReturnType<typeof req>, e: object = env) => handleContact(r as never, url, { json, env: e, EmailMessage });
  beforeEach(() => {
    resetLimits();
    sentMail.length = 0;
  });

  it('sends a valid message to the inbox', async () => {
    const r = await call(req(ok));
    expect(r.status).toBe(200);
    expect(sentMail).toHaveLength(1);
    expect(sentMail[0].to).toBe('aditya.contact142@gmail.com');
  });
  it('refuses other sites and bad input, and pretends to accept spam', async () => {
    expect((await call(req(ok, { origin: 'https://evil.example' }))).status).toBe(403);
    expect((await call(req({ ...ok, email: 'x' }))).status).toBe(400);
    expect((await call(req({ ...ok, website: 'spam' }))).status).toBe(200);
    expect(sentMail).toHaveLength(0);
  });
  it('limits each visitor to 3 messages per 10 minutes', async () => {
    for (let i = 0; i < 3; i++) expect((await call(req(ok, { ip: '9.9.9.9' }))).status).toBe(200);
    expect((await call(req(ok, { ip: '9.9.9.9' }))).status).toBe(429);
    expect((await call(req(ok, { ip: '8.8.8.8' }))).status).toBe(200);
  });
  it('sends a plain (no JavaScript) form post back to the page', async () => {
    const r = await call(req(ok, { form: true }));
    expect(r.status).toBe(303);
    expect(r.headers.get('Location')).toBe('/contact#sent');
    expect((await call(req({ ...ok, message: 'x' }, { form: true }))).headers.get('Location')).toBe('/contact#not-sent');
  });
  it('says so when email is not set up', async () => {
    expect((await call(req(ok), {})).status).toBe(503);
  });
});
