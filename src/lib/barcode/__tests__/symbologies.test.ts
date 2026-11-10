import { describe, it, expect } from 'vitest';
import { checkBarcode, expandUpce, gs1CheckDigit, SYMBOLOGY_ORDER, SYMBOLOGIES } from '../symbologies';
import { barcodeSvg, validAddon } from '../render';

const style = { scale: 2, heightMm: 15, showText: true, bar: '#000000', background: '#ffffff' };

describe('barcode data checks', () => {
  it('computes GS1 check digits', () => {
    expect(gs1CheckDigit('590123412345')).toBe('7');
    expect(gs1CheckDigit('03600029145')).toBe('2');
    expect(gs1CheckDigit('9638507')).toBe('4');
    expect(gs1CheckDigit('978156581231')).toBe('4');
  });

  it('adds a missing check digit and confirms a typed one', () => {
    expect(checkBarcode('ean13', '590123412345')).toEqual({ ok: true, data: '5901234123457', bwipType: 'ean13' });
    expect(checkBarcode('ean13', '5901234123457')).toMatchObject({ ok: true, data: '5901234123457' });
    expect(checkBarcode('ean13', '5901234123458')).toEqual({ ok: false, problem: 'check', expected: '7' });
    expect(checkBarcode('upca', '036000291452')).toMatchObject({ ok: true, data: '036000291452' });
    expect(checkBarcode('ean8', '9638507')).toMatchObject({ ok: true, data: '96385074' });
    expect(checkBarcode('itf14', '1540014128876')).toMatchObject({ ok: true });
  });

  it('accepts spaces and dashes in numbers, rejects letters and wrong lengths', () => {
    expect(checkBarcode('ean13', '590 1234 12345')).toMatchObject({ ok: true, data: '5901234123457' });
    expect(checkBarcode('ean13', '59012341234A')).toEqual({ ok: false, problem: 'digits' });
    expect(checkBarcode('ean13', '12345')).toEqual({ ok: false, problem: 'length', lengths: [12, 13] });
    expect(checkBarcode('ean13', '   ')).toEqual({ ok: false, problem: 'empty' });
  });

  it('handles UPC-E in its 6, 7 and 8 digit forms', () => {
    expect(checkBarcode('upce', '123456')).toMatchObject({ ok: true, data: '01234565' });
    expect(checkBarcode('upce', '0123456')).toMatchObject({ ok: true, data: '01234565' });
    expect(checkBarcode('upce', '01234565')).toMatchObject({ ok: true });
    expect(checkBarcode('upce', '01234567')).toEqual({ ok: false, problem: 'check', expected: '5' });
    expect(checkBarcode('upce', '2123456')).toEqual({ ok: false, problem: 'upceStart' });
  });

  it('keeps a hyphenated ISBN-13, draws others as EAN-13, and converts ISBN-10', () => {
    expect(checkBarcode('isbn', '978-1-56581-231-4')).toEqual({ ok: true, data: '978-1-56581-231-4', bwipType: 'isbn' });
    expect(checkBarcode('isbn', '9781565812314')).toEqual({ ok: true, data: '9781565812314', bwipType: 'ean13' });
    expect(checkBarcode('isbn', '1-56581-231-X')).toEqual({ ok: true, data: '9781565812314', bwipType: 'ean13' });
    expect(checkBarcode('isbn', '1-56581-231-5')).toEqual({ ok: false, problem: 'check', expected: 'X' });
    expect(checkBarcode('isbn', '0-306-40615-2')).toEqual({ ok: true, data: '9780306406157', bwipType: 'ean13' });
    expect(checkBarcode('isbn', '1234567890123')).toEqual({ ok: false, problem: 'isbnPrefix' });
  });

  it('checks Code 39, Code 128 and GS1-128 characters', () => {
    expect(checkBarcode('code39', 'part-42')).toEqual({ ok: true, data: 'PART-42', bwipType: 'code39' });
    expect(checkBarcode('code39', 'PART_42')).toMatchObject({ ok: false, problem: 'chars' });
    expect(checkBarcode('code128', 'Box #7 ^ top')).toMatchObject({ ok: true, data: 'Box #7 ^ top' });
    expect(checkBarcode('code128', 'Café')).toEqual({ ok: false, problem: 'ascii' });
    expect(checkBarcode('gs1_128', '(01)09521234543213(10)ABC')).toMatchObject({ ok: true });
    expect(checkBarcode('gs1_128', '0109521234543213')).toEqual({ ok: false, problem: 'gs1' });
  });

  it('stores non-ASCII text in 2D codes as UTF-8 with the ECI marker', () => {
    expect(checkBarcode('datamatrix', 'Привет')).toEqual({ ok: true, data: '^ECI000026Привет', bwipType: 'datamatrix', parse: true });
    expect(checkBarcode('azteccode', 'é^')).toMatchObject({ data: '^ECI000026é^^', parse: true });
    expect(checkBarcode('pdf417', 'plain text')).toMatchObject({ data: 'plain text' });
  });
});

describe('barcode drawing', () => {
  it('draws every type from its example as SVG', () => {
    for (const type of SYMBOLOGY_ORDER) {
      const c = checkBarcode(type, SYMBOLOGIES[type].example);
      expect(c.ok, type).toBe(true);
      if (!c.ok) continue;
      const svg = barcodeSvg(c, style);
      expect(svg.startsWith('<svg'), type).toBe(true);
      expect(svg.length, type).toBeGreaterThan(200);
    }
  });

  it('uses the chosen colours and leaves the background out when transparent', () => {
    const c = checkBarcode('code128', 'ABC');
    if (!c.ok) throw new Error('unexpected');
    const svg = barcodeSvg(c, { ...style, bar: '#1a3d9c', background: null });
    expect(svg).toContain('#1a3d9c');
    expect(svg).not.toMatch(/<rect[^>]*fill="#ffffff"/i);
  });
});

describe('EAN/UPC/ISBN add-ons', () => {
  it('takes 2 or 5 digits only', () => {
    expect(['05', '51299'].map(validAddon)).toEqual([true, true]);
    expect(['', '1', '123', '5129', '512999', '5a'].some(validAddon)).toBe(false);
  });
  it('draws a wider barcode with the add-on on ISBN, EAN-13 and UPC-A', () => {
    for (const [type, data, addon] of [['isbn', '978-1-56581-231-4', '51299'], ['ean13', '5901234123457', '12'], ['upca', '036000291452', '05']] as const) {
      const c = checkBarcode(type, data);
      if (!c.ok) throw new Error(type);
      const width = (svg: string) => Number(svg.match(/viewBox="0 0 (\d+)/)?.[1]);
      const plain = barcodeSvg(c, style);
      const withAddon = barcodeSvg({ ...c, addon }, style);
      expect(width(withAddon), type).toBeGreaterThan(width(plain) + 20);
      // The add-on's digits are printed too
      expect(withAddon.length, type).toBeGreaterThan(plain.length);
    }
  });
});

describe('UPC-E expansion', () => {
  it('expands to the UPC-A number scanners report', () => {
    // 0123456 → 012345000065 (scanners report it as EAN-13 0012345000065)
    expect(expandUpce('0123456') + gs1CheckDigit(expandUpce('0123456'))).toBe('012345000065');
    expect(expandUpce('0654321')).toBe('06510000432');
    expect(expandUpce('0123453')).toBe('01230000045');
  });
});
