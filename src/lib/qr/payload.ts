/**
 * What a QR code holds. Encoding follows the formats phones' camera apps understand: plain URLs, WIFI:… (the ZXing
 * Wi-Fi format), mailto:, tel: and vCard 3.0. Decoding recognises the same formats so the reader can show them nicely.
 */

export type QrKind = 'link' | 'text' | 'wifi' | 'email' | 'phone' | 'contact';

export interface WifiFields {
  ssid: string;
  password: string;
  security: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface EmailFields {
  to: string;
  subject: string;
  body: string;
}

export interface ContactFields {
  name: string;
  phone: string;
  email: string;
  org: string;
  url: string;
}

/** Special characters in WIFI: fields are escaped with a backslash */
const wifiEscape = (s: string) => s.replace(/([\\;,:"])/g, '\\$1');
/** vCard text values escape backslashes, commas and semicolons, and use \n for new lines */
const vcardEscape = (s: string) => s.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\r?\n/g, '\\n');

/** A web address with https:// added when no scheme was typed ("example.com" → "https://example.com") */
export function normaliseLink(input: string): string {
  const s = input.trim();
  if (!s) return '';
  return /^[a-z][a-z0-9+.-]*:/i.test(s) ? s : `https://${s}`;
}

export function wifiPayload(f: WifiFields): string {
  const pass = f.security === 'nopass' ? '' : `P:${wifiEscape(f.password)};`;
  return `WIFI:T:${f.security};S:${wifiEscape(f.ssid)};${pass}${f.hidden ? 'H:true;' : ''};`;
}

export function emailPayload(f: EmailFields): string {
  const q = [f.subject && `subject=${encodeURIComponent(f.subject)}`, f.body && `body=${encodeURIComponent(f.body)}`].filter(Boolean).join('&');
  return `mailto:${f.to.trim()}${q ? `?${q}` : ''}`;
}

export function phonePayload(phone: string): string {
  return `tel:${phone.replace(/[^\d+*#]/g, '')}`;
}

export function contactPayload(f: ContactFields): string {
  const lines = ['BEGIN:VCARD', 'VERSION:3.0', `N:${vcardEscape(f.name)};;;;`, `FN:${vcardEscape(f.name)}`];
  if (f.org) lines.push(`ORG:${vcardEscape(f.org)}`);
  if (f.phone) lines.push(`TEL;TYPE=CELL:${f.phone.trim()}`);
  if (f.email) lines.push(`EMAIL:${f.email.trim()}`);
  if (f.url) lines.push(`URL:${normaliseLink(f.url)}`);
  lines.push('END:VCARD');
  return lines.join('\r\n');
}

/** A decoded QR code, recognised as one of the kinds above when it matches its format */
export type Decoded =
  | { kind: 'link'; url: string }
  | { kind: 'wifi'; ssid: string; password: string; security: string; hidden: boolean }
  | { kind: 'email'; to: string; subject: string; body: string }
  | { kind: 'phone'; phone: string }
  | { kind: 'contact'; name: string; phone: string; email: string; org: string; url: string }
  | { kind: 'text'; text: string };

/** Split WIFI: fields on unescaped semicolons and undo the escaping */
function wifiFields(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  let key = '';
  let value = '';
  let inKey = true;
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (c === '\\' && i + 1 < body.length) {
      if (inKey) key += body[++i];
      else value += body[++i];
    } else if (inKey && c === ':') {
      inKey = false;
    } else if (!inKey && c === ';') {
      out[key.toUpperCase()] = value;
      key = '';
      value = '';
      inKey = true;
    } else if (inKey) {
      key += c;
    } else {
      value += c;
    }
  }
  return out;
}

const vcardUnescape = (s: string) => s.replace(/\\n/gi, '\n').replace(/\\([,;\\])/g, '$1');

export function decodePayload(raw: string): Decoded {
  const s = raw.trim();
  if (/^WIFI:/i.test(s)) {
    const f = wifiFields(s.slice(5));
    return { kind: 'wifi', ssid: f.S || '', password: f.P || '', security: f.T || 'nopass', hidden: /^true$/i.test(f.H || '') };
  }
  if (/^BEGIN:VCARD/i.test(s)) {
    const get = (name: string) => {
      const m = s.match(new RegExp(`^${name}(?:;[^:\\r\\n]*)?:(.*)$`, 'im'));
      return m ? vcardUnescape(m[1].trim()) : '';
    };
    return { kind: 'contact', name: get('FN') || get('N').replace(/;+/g, ' ').trim(), phone: get('TEL'), email: get('EMAIL'), org: get('ORG'), url: get('URL') };
  }
  if (/^mailto:/i.test(s)) {
    const [addr, query = ''] = s.slice(7).split('?');
    const params = new URLSearchParams(query);
    return { kind: 'email', to: decodeURIComponent(addr), subject: params.get('subject') || '', body: params.get('body') || '' };
  }
  if (/^tel:/i.test(s)) return { kind: 'phone', phone: s.slice(4) };
  if (/^https?:\/\/\S+$/i.test(s)) return { kind: 'link', url: s };
  return { kind: 'text', text: raw };
}
