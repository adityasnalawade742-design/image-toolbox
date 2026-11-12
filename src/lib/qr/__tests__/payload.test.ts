import { describe, it, expect } from 'vitest';
import { cleanIban, parseCoordinates, contactPayload, decodePayload, emailPayload, locationPayload, normaliseLink, phonePayload, sepaPayload, upiPayload, validUpiId, whatsappPayload, wifiPayload } from '../payload';

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
    expect(decodePayload(card)).toEqual({ kind: 'contact', name: 'Ada, Countess', phone: '+44 20 7946 0000', email: 'ada@example.org', org: 'Engines; Ltd', url: 'https://example.org', title: '', workPhone: '', address: '', note: '' });
  });

  it('reads back every field the vCard generator writes', () => {
    const card = contactPayload({
      name: '',
      first: 'Grace',
      last: 'Hopper',
      title: 'Rear Admiral; Navy',
      org: 'US Navy',
      phone: '+1 555 0100',
      workPhone: '+1 555 0199',
      street: '1 Main St, Suite 5',
      city: 'Arlington',
      postcode: '22201',
      country: 'USA',
      email: 'grace@example.org',
      url: 'example.org',
      note: 'Met at the conference',
    });
    expect(decodePayload(card)).toEqual({
      kind: 'contact',
      name: 'Grace Hopper',
      title: 'Rear Admiral; Navy',
      org: 'US Navy',
      phone: '+1 555 0100',
      workPhone: '+1 555 0199',
      address: '1 Main St, Suite 5, Arlington, 22201, USA',
      email: 'grace@example.org',
      url: 'https://example.org',
      note: 'Met at the conference',
    });
  });

  it('treats a lone work number as the work phone, not the main one', () => {
    const d = decodePayload('BEGIN:VCARD\r\nVERSION:3.0\r\nFN:A\r\nTEL;TYPE=WORK:123\r\nEND:VCARD');
    expect(d).toMatchObject({ kind: 'contact', phone: '', workPhone: '123' });
  });

  it('treats web addresses as links and anything else as text', () => {
    expect(decodePayload('https://example.com/x?y=1')).toEqual({ kind: 'link', url: 'https://example.com/x?y=1' });
    expect(decodePayload('just words')).toEqual({ kind: 'text', text: 'just words' });
    expect(decodePayload('javascript:alert(1)')).toEqual({ kind: 'text', text: 'javascript:alert(1)' });
  });
});

describe('more QR formats', () => {
  it('builds WhatsApp, location, UPI and SEPA payloads', () => {
    expect(whatsappPayload('+91 98765-43210', 'Hi there')).toBe('https://wa.me/919876543210?text=Hi%20there');
    expect(whatsappPayload('15551234567', '')).toBe('https://wa.me/15551234567');
    expect(locationPayload(48.8583701, 2.2944813)).toBe('geo:48.85837,2.294481');
    expect(locationPayload(91, 0)).toBeNull();
    expect(upiPayload({ vpa: 'shop@okbank', name: 'My Shop', amount: '250', note: 'Order 42' })).toBe('upi://pay?pa=shop%40okbank&pn=My%20Shop&am=250.00&cu=INR&tn=Order%2042');
    expect(validUpiId('shop@okbank')).toBe(true);
    expect(validUpiId('not an id')).toBe(false);
    expect(cleanIban('DE89 3704 0044 0532 0130 00')).toBe('DE89370400440532013000');
    expect(cleanIban('DE89 3704 0044 0532 0130 01')).toBeNull();
    expect(sepaPayload({ name: 'Red Cross', iban: 'BE72 0000 0000 1616', bic: 'BPOTBEB1', amount: '10', reference: 'Donation' })).toBe(
      'BCD\n002\n1\nSCT\nBPOTBEB1\nRed Cross\nBE72000000001616\nEUR10.00\n\n\nDonation'
    );
    expect(sepaPayload({ name: 'X', iban: 'nope', bic: '', amount: '', reference: '' })).toBeNull();
  });

  it('recognises them when reading', () => {
    expect(decodePayload('geo:48.85837,2.294481')).toEqual({ kind: 'location', lat: 48.85837, lng: 2.294481 });
    expect(decodePayload('upi://pay?pa=shop%40okbank&pn=My%20Shop&am=250.00&cu=INR')).toMatchObject({ kind: 'payment', scheme: 'upi', name: 'My Shop', account: 'shop@okbank', amount: '₹250.00' });
    expect(decodePayload('BCD\n002\n1\nSCT\nBPOTBEB1\nRed Cross\nBE72000000001616\nEUR10.00\n\n\nDonation')).toMatchObject({ kind: 'payment', scheme: 'sepa', name: 'Red Cross', amount: '€10.00', note: 'Donation' });
  });
});

describe('coordinates', () => {
  it('reads typed coordinates and map links', () => {
    expect(parseCoordinates('48.8584, 2.2945')).toEqual({ lat: 48.8584, lng: 2.2945 });
    expect(parseCoordinates('https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,17z')).toEqual({ lat: 48.8583701, lng: 2.2944813 });
    expect(parseCoordinates('https://maps.google.com/?q=-33.8568,151.2153')).toEqual({ lat: -33.8568, lng: 151.2153 });
    expect(parseCoordinates('Eiffel Tower')).toBeNull();
    expect(parseCoordinates('95.1, 10')).toBeNull();
  });
});

describe('vCard with separate names and more fields', () => {
  it('files the contact under the surname and adds title, work phone, address and note', () => {
    const card = contactPayload({ name: '', first: 'Ada', last: 'Lovelace', phone: '+44 1', email: '', org: 'Engines', url: '', title: 'Analyst', workPhone: '+44 2', street: '12 Square', city: 'London', postcode: 'SW1Y', country: 'UK', note: 'Met at the expo; call back' });
    expect(card).toContain('N:Lovelace;Ada;;;');
    expect(card).toContain('FN:Ada Lovelace');
    expect(card).toContain('TITLE:Analyst');
    expect(card).toContain('TEL;TYPE=WORK:+44 2');
    expect(card).toContain('ADR;TYPE=WORK:;;12 Square;London;;SW1Y;UK');
    expect(card).toContain('NOTE:Met at the expo\\; call back');
    expect(decodePayload(card)).toMatchObject({ kind: 'contact', name: 'Ada Lovelace', phone: '+44 1', org: 'Engines' });
  });
});
