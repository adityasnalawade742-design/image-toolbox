/**
 * What a QR code holds. Encoding follows the formats phones' camera apps understand: plain URLs, WIFI:… (the ZXing
 * Wi-Fi format), mailto:, tel: and vCard 3.0. Decoding recognises the same formats so the reader can show them nicely.
 */

export type QrKind = 'link' | 'text' | 'wifi' | 'email' | 'phone' | 'contact' | 'whatsapp' | 'location' | 'payment';

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

/** wa.me link that opens a WhatsApp chat with this number, with an optional message typed in */
export function whatsappPayload(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ''}`;
}

/** geo: URI (RFC 5870) that phones open in their maps app; null for impossible coordinates */
export function locationPayload(lat: number, lng: number): string | null {
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
  const f = (n: number) => String(Math.round(n * 1e6) / 1e6);
  return `geo:${f(lat)},${f(lng)}`;
}

export interface UpiFields {
  /** UPI ID, such as name@bank */
  vpa: string;
  name: string;
  /** Rupees; empty lets the payer type the amount */
  amount: string;
  note: string;
}

export const validUpiId = (s: string) => /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z][a-zA-Z0-9]{1,63}$/.test(s.trim());

/** upi://pay link that UPI apps (Google Pay, PhonePe, Paytm, BHIM…) open on the payment screen */
export function upiPayload(f: UpiFields): string {
  const q = new URLSearchParams({ pa: f.vpa.trim(), pn: f.name.trim() });
  if (f.amount.trim()) q.set('am', Number(f.amount).toFixed(2));
  q.set('cu', 'INR');
  if (f.note.trim()) q.set('tn', f.note.trim());
  return `upi://pay?${q.toString().replace(/\+/g, '%20')}`;
}

export interface SepaFields {
  name: string;
  iban: string;
  bic: string;
  /** Euros; empty lets the payer type the amount */
  amount: string;
  reference: string;
}

/** IBAN with spaces removed, if its check digits are right (ISO 13616 mod-97) */
export function cleanIban(input: string): string | null {
  const s = input.replace(/\s+/g, '').toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(s)) return null;
  const moved = s.slice(4) + s.slice(0, 4);
  let rem = 0;
  for (const ch of moved) {
    const v = /\d/.test(ch) ? ch : String(ch.charCodeAt(0) - 55);
    for (const d of v) rem = (rem * 10 + Number(d)) % 97;
  }
  return rem === 1 ? s : null;
}

/** EPC QR ("GiroCode"): the European Payments Council format banking apps in the SEPA area read as a transfer */
export function sepaPayload(f: SepaFields): string | null {
  const iban = cleanIban(f.iban);
  if (!iban || !f.name.trim()) return null;
  const amount = f.amount.trim() ? `EUR${Number(f.amount).toFixed(2)}` : '';
  return ['BCD', '002', '1', 'SCT', f.bic.trim().toUpperCase(), f.name.trim().slice(0, 70), iban, amount, '', '', f.reference.trim().slice(0, 140)].join('\n');
}

/** A decoded QR code, recognised as one of the kinds above when it matches its format */
export type Decoded =
  | { kind: 'link'; url: string }
  | { kind: 'wifi'; ssid: string; password: string; security: string; hidden: boolean }
  | { kind: 'email'; to: string; subject: string; body: string }
  | { kind: 'phone'; phone: string }
  | { kind: 'contact'; name: string; phone: string; email: string; org: string; url: string }
  | { kind: 'location'; lat: number; lng: number }
  | { kind: 'payment'; scheme: 'upi' | 'sepa'; name: string; account: string; amount: string; note: string }
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
  const geo = s.match(/^geo:(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/i);
  if (geo) return { kind: 'location', lat: Number(geo[1]), lng: Number(geo[2]) };
  if (/^upi:\/\/pay\?/i.test(s)) {
    const q = new URLSearchParams(s.slice(s.indexOf('?') + 1));
    return { kind: 'payment', scheme: 'upi', name: q.get('pn') || '', account: q.get('pa') || '', amount: q.get('am') ? `₹${q.get('am')}` : '', note: q.get('tn') || '' };
  }
  if (/^BCD\r?\n00[12]\r?\n/.test(s)) {
    const l = s.split(/\r?\n/);
    return { kind: 'payment', scheme: 'sepa', name: l[5] || '', account: l[6] || '', amount: (l[7] || '').replace(/^EUR/, '€'), note: l[10] || l[9] || '' };
  }
  if (/^https?:\/\/\S+$/i.test(s)) return { kind: 'link', url: s };
  return { kind: 'text', text: raw };
}

/** Latitude and longitude from typed coordinates ("48.8584, 2.2945") or a map link that contains them (…/@48.85,2.29,17z, ?q=48.85,2.29) */
export function parseCoordinates(input: string): { lat: number; lng: number } | null {
  const m = input.match(/(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)/);
  if (!m) return null;
  const lat = Number(m[1]);
  const lng = Number(m[2]);
  return Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? { lat, lng } : null;
}
