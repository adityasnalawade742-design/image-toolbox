import { describe, it, expect } from 'vitest';
import { contactPayload, decodePayload, emailPayload, normaliseLink, phonePayload, wifiPayload } from '../payload';

describe('QR payloads', () => {
  it('adds https:// to bare web addresses only', () => {
    expect(normaliseLink('example.com/a')).toBe('https://example.com/a');
    expect(normaliseLink('http://x.org')).toBe('http://x.org');
    expect(normaliseLink('  ')).toBe('');
  });

  it('escapes Wi-Fi fields and reads them back', () => {
    const p = wifiPayload({ ssid: 'Café;Net', password: 'a:b\\c,d"e', security: 'WPA', hidden: true });
    expect(p).toBe('WIFI:T:WPA;S:Café\\;Net;P:a\\:b\\\\c\\,d\\"e;H:true;;');
    expect(decodePayload(p)).toEqual({ kind: 'wifi', ssid: 'Café;Net', password: 'a:b\\c,d"e', security: 'WPA', hidden: true });
  });

  it('leaves the password out of open networks', () => {
    expect(wifiPayload({ ssid: 'Guest', password: 'ignored', security: 'nopass', hidden: false })).toBe('WIFI:T:nopass;S:Guest;;');
  });

  it('builds and reads email, phone and contact codes', () => {
    const mail = emailPayload({ to: 'a@b.com', subject: 'Hi & bye', body: 'Line 1\nLine 2' });
    expect(mail).toBe('mailto:a@b.com?subject=Hi%20%26%20bye&body=Line%201%0ALine%202');
    expect(decodePayload(mail)).toEqual({ kind: 'email', to: 'a@b.com', subject: 'Hi & bye', body: 'Line 1\nLine 2' });

    expect(phonePayload('+1 (555) 010-9999')).toBe('tel:+15550109999');
    expect(decodePayload('tel:+15550109999')).toEqual({ kind: 'phone', phone: '+15550109999' });

    const card = contactPayload({ name: 'Ada, Countess', phone: '+44 20 7946 0000', email: 'ada@example.org', org: 'Engines; Ltd', url: 'example.org' });
    expect(card).toContain('FN:Ada\\, Countess');
    expect(card).toContain('URL:https://example.org');
    expect(decodePayload(card)).toEqual({ kind: 'contact', name: 'Ada, Countess', phone: '+44 20 7946 0000', email: 'ada@example.org', org: 'Engines; Ltd', url: 'https://example.org' });
  });

  it('treats web addresses as links and anything else as text', () => {
    expect(decodePayload('https://example.com/x?y=1')).toEqual({ kind: 'link', url: 'https://example.com/x?y=1' });
    expect(decodePayload('just words')).toEqual({ kind: 'text', text: 'just words' });
    expect(decodePayload('javascript:alert(1)')).toEqual({ kind: 'text', text: 'javascript:alert(1)' });
  });
});
