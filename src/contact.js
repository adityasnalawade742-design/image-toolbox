// Contact form: the browser posts the form to /api/contact; the Worker emails it to the site's own inbox through
// Cloudflare Email Routing (the send_email binding can only deliver to that verified address). The visitor's address
// goes in Reply-To, so answering is just "Reply". Nothing is stored.

export const LIMITS = { name: 100, email: 254, message: 5000, minMessage: 10 };
export const TOPICS = { bug: 'Bug report', idea: 'Tool idea', privacy: 'Privacy question', business: 'Business or press', other: 'Other' };
const FROM = 'contact-form@tadafile.com';
// A few messages per visitor, so a script can't flood the inbox
const PER_IP = 3;
const WINDOW_MS = 10 * 60_000;
const sent = new Map();

// Plain, unquoted address: nothing that could break out of a header
const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

/** Text without control characters (newlines kept when asked), trimmed and cut to length */
function clean(v, max, multiline = false) {
  let s = String(v ?? '').replace(/\r\n?/g, '\n');
  // eslint-disable-next-line no-control-regex
  s = s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  if (!multiline) s = s.replace(/\s+/g, ' ');
  return s.trim().slice(0, max);
}

/** Check and tidy the fields; `error` names the first problem */
export function parseContact(body) {
  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const topic = Object.hasOwn(TOPICS, body.topic) ? body.topic : 'other';
  const message = clean(body.message, LIMITS.message, true);
  // The hidden trap field: people never see it, form-filling bots fill it in
  const trap = clean(body.website, 200);
  if (trap) return { spam: true };
  if (!EMAIL_RE.test(email)) return { error: 'email' };
  if (message.length < LIMITS.minMessage) return { error: 'message' };
  return { fields: { name, email, topic, message } };
}

const toBase64 = (s) => {
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
};
// Non-ASCII header text as an RFC 2047 encoded word
const word = (s) => (/^[\x20-\x7E]*$/.test(s) ? s : `=?UTF-8?B?${toBase64(s)}?=`);

/** The raw email (MIME) for a checked submission */
export function buildMessage(f, { to, userAgent = '', country = '', now = new Date(), id = crypto.randomUUID() }) {
  const first = f.message.replace(/\s+/g, ' ').slice(0, 60);
  const subject = `[TadaFile] ${TOPICS[f.topic]}: ${first}${f.message.length > 60 ? '…' : ''}`;
  const replyName = f.name ? `"${word(f.name.replace(/["\\]/g, ''))}" ` : '';
  const body = [
    `From: ${f.name || '(no name)'} <${f.email}>`,
    `Topic: ${TOPICS[f.topic]}`,
    country ? `Country: ${country}` : '',
    userAgent ? `Browser: ${clean(userAgent, 300)}` : '',
    '',
    f.message,
  ]
    .filter((l, i, a) => l !== '' || a[i - 1] !== '')
    .join('\n');
  const headers = [
    `From: "TadaFile contact form" <${FROM}>`,
    `To: <${to}>`,
    `Reply-To: ${replyName}<${f.email}>`,
    `Subject: ${word(subject)}`,
    `Date: ${now.toUTCString()}`,
    `Message-ID: <${id}@tadafile.com>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
  ];
  // Base64 in 76-character lines: safe for any language and any line length
  const encoded = toBase64(body).replace(/.{1,76}/g, '$&\r\n');
  return `${headers.join('\r\n')}\r\n\r\n${encoded}`;
}

function limited(ip) {
  const now = Date.now();
  const list = (sent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= PER_IP) return true;
  list.push(now);
  sent.set(ip, list);
  if (sent.size > 5000) sent.clear();
  return false;
}

/**
 * POST /api/contact, as JSON (the page's script) or a plain form post (no JavaScript). JSON gets JSON back;
 * a plain post is sent back to the contact page with a result anchor.
 */
export async function handleContact(request, url, { json, env, EmailMessage }) {
  const isForm = (request.headers.get('Content-Type') || '').includes('application/x-www-form-urlencoded');
  const reply = (status, result) =>
    isForm ? new Response(null, { status: 303, headers: { Location: `/contact#${result === 'sent' ? 'sent' : 'not-sent'}` } }) : json(status, result === 'sent' ? { ok: true } : { error: result });
  if (request.method !== 'POST') return json(405, { error: 'method' });
  if (request.headers.get('Origin') !== url.origin) return json(403, { error: 'origin' });
  let raw;
  try {
    raw = isForm ? Object.fromEntries(await request.formData()) : await request.json();
  } catch {
    return reply(400, 'bad_request');
  }
  const parsed = parseContact(raw || {});
  // Looks sent to a bot, so it doesn't try again
  if (parsed.spam) return reply(200, 'sent');
  if (parsed.error) return reply(400, parsed.error);
  if (limited(request.headers.get('CF-Connecting-IP') || 'local')) return reply(429, 'rate_limited');
  if (!env.CONTACT_EMAIL || !EmailMessage) return reply(503, 'unavailable');
  const to = env.CONTACT_TO || 'aditya.contact142@gmail.com';
  try {
    const mime = buildMessage(parsed.fields, { to, userAgent: request.headers.get('User-Agent') || '', country: request.headers.get('CF-IPCountry') || '' });
    await env.CONTACT_EMAIL.send(new EmailMessage(FROM, to, mime));
  } catch {
    return reply(502, 'send_failed');
  }
  return reply(200, 'sent');
}

/** For tests: forget the per-visitor counts */
export const resetLimits = () => sent.clear();
