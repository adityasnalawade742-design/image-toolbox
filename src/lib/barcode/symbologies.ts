/**
 * Barcode types the generator makes, and the checks that turn what someone typed into data the barcode can hold:
 * digits only where the standard says so, the right length, and the check digit added (or confirmed) for
 * EAN / UPC / ITF-14 / ISBN. Drawing is done by bwip-js (MIT); see render.ts.
 */

export type Symbology = 'code128' | 'ean13' | 'ean8' | 'upca' | 'upce' | 'isbn' | 'code39' | 'itf14' | 'gs1_128' | 'datamatrix' | 'pdf417' | 'azteccode';

export interface SymbologyInfo {
  /** Name shown in the type list (the same in every language) */
  label: string;
  /** 1D barcodes have a height and a text line; 2D codes are squares or blocks */
  twoD: boolean;
  /** Typical data, shown as the placeholder */
  example: string;
  /** Most characters the field accepts */
  maxLength: number;
}

export const SYMBOLOGIES: Record<Symbology, SymbologyInfo> = {
  code128: { label: 'Code 128', twoD: false, example: 'ABC-12345', maxLength: 80 },
  ean13: { label: 'EAN-13', twoD: false, example: '590123412345', maxLength: 13 },
  ean8: { label: 'EAN-8', twoD: false, example: '9638507', maxLength: 8 },
  upca: { label: 'UPC-A', twoD: false, example: '03600029145', maxLength: 12 },
  upce: { label: 'UPC-E', twoD: false, example: '0123456', maxLength: 8 },
  isbn: { label: 'ISBN', twoD: false, example: '978-1-56581-231-4', maxLength: 17 },
  code39: { label: 'Code 39', twoD: false, example: 'PART-0042', maxLength: 43 },
  itf14: { label: 'ITF-14', twoD: false, example: '1540014128876', maxLength: 14 },
  gs1_128: { label: 'GS1-128', twoD: false, example: '(01)09521234543213(10)LOT42', maxLength: 90 },
  datamatrix: { label: 'Data Matrix', twoD: true, example: 'https://example.com/item/42', maxLength: 1500 },
  pdf417: { label: 'PDF417', twoD: true, example: 'Ticket 42 / Row B / Seat 7', maxLength: 1500 },
  azteccode: { label: 'Aztec', twoD: true, example: 'https://example.com/ticket/42', maxLength: 1500 },
};

export const SYMBOLOGY_ORDER: Symbology[] = ['code128', 'ean13', 'ean8', 'upca', 'upce', 'isbn', 'code39', 'itf14', 'gs1_128', 'datamatrix', 'pdf417', 'azteccode'];

/** Why some data can't go in a barcode; the editor turns these into messages */
export type BarcodeProblem =
  | { problem: 'empty' }
  | { problem: 'digits' }
  | { problem: 'length'; lengths: number[] }
  | { problem: 'check'; expected: string }
  | { problem: 'chars'; allowed: string }
  | { problem: 'ascii' }
  | { problem: 'tooLong'; max: number }
  | { problem: 'upceStart' }
  | { problem: 'isbnPrefix' }
  | { problem: 'gs1' };

/** `parse`: the data starts with the ECI marker, in bwip-js ^ syntax (non-ASCII text in 2D codes) */
export type Checked = { ok: true; data: string; bwipType: string; parse?: boolean } | ({ ok: false } & BarcodeProblem);

/** GS1 check digit (EAN, UPC, ITF-14, ISBN-13): weights 3 and 1 from the right */
export function gs1CheckDigit(digits: string): string {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) sum += Number(digits[digits.length - 1 - i]) * (i % 2 === 0 ? 3 : 1);
  return String((10 - (sum % 10)) % 10);
}

/** Digits with the check digit added, or confirmed when it was typed */
function withCheck(digits: string, dataLength: number): Checked | string {
  if (!/^\d+$/.test(digits)) return { ok: false, problem: 'digits' };
  if (digits.length !== dataLength && digits.length !== dataLength + 1) return { ok: false, problem: 'length', lengths: [dataLength, dataLength + 1] };
  const check = gs1CheckDigit(digits.slice(0, dataLength));
  if (digits.length === dataLength + 1 && digits[dataLength] !== check) return { ok: false, problem: 'check', expected: check };
  return digits.slice(0, dataLength) + check;
}

/** UPC-E: 6 digits (number system 0 assumed), or 7–8 starting with 0 or 1 */
function upce(raw: string): Checked {
  if (!/^\d+$/.test(raw)) return { ok: false, problem: 'digits' };
  if (raw.length < 6 || raw.length > 8) return { ok: false, problem: 'length', lengths: [6, 7, 8] };
  const body = raw.length === 6 ? `0${raw}` : raw.slice(0, 7);
  if (body[0] !== '0' && body[0] !== '1') return { ok: false, problem: 'upceStart' };
  // The check digit is the UPC-A one: expand the zero-suppressed number first
  const upcA = expandUpce(body);
  const check = gs1CheckDigit(upcA);
  if (raw.length === 8 && raw[7] !== check) return { ok: false, problem: 'check', expected: check };
  return { ok: true, data: body + check, bwipType: 'upce' };
}

/** The 11-digit UPC-A body (without check digit) a 7-digit UPC-E body (number system + 6 digits) stands for */
export function expandUpce(body: string): string {
  const d = body.slice(1, 7);
  const last = d[5];
  const middle =
    last <= '2' ? `${d.slice(0, 2)}${last}0000${d.slice(2, 5)}` : last === '3' ? `${d.slice(0, 3)}00000${d.slice(3, 5)}` : last === '4' ? `${d.slice(0, 4)}00000${d[4]}` : `${d.slice(0, 5)}0000${last}`;
  return body[0] + middle;
}

/** ISBN: kept with its hyphens when it has the four of an ISBN-13 (printed above the bars); otherwise drawn as its EAN-13 */
function isbn(raw: string): Checked {
  const s = raw.trim().toUpperCase();
  const compact = s.replace(/[\s-]/g, '');
  if (/^\d{9}[\dX]$/.test(compact)) {
    // ISBN-10 → ISBN-13: 978 + first nine digits + a new check digit
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += Number(compact[i]) * (10 - i);
    const c10 = (11 - (sum % 11)) % 11;
    if ((c10 === 10 ? 'X' : String(c10)) !== compact[9]) return { ok: false, problem: 'check', expected: c10 === 10 ? 'X' : String(c10) };
    const body = `978${compact.slice(0, 9)}`;
    return { ok: true, data: body + gs1CheckDigit(body), bwipType: 'ean13' };
  }
  if (!/^\d+$/.test(compact)) return { ok: false, problem: 'digits' };
  if (compact.length !== 12 && compact.length !== 13) return { ok: false, problem: 'length', lengths: [10, 13] };
  if (!/^97[89]/.test(compact)) return { ok: false, problem: 'isbnPrefix' };
  const checked = withCheck(compact, 12);
  if (typeof checked !== 'string') return checked;
  const hyphenated = /^\d{3}-\d+-\d+-\d+-\d$/.test(s) && s.replace(/-/g, '') === checked;
  return hyphenated ? { ok: true, data: s, bwipType: 'isbn' } : { ok: true, data: checked, bwipType: 'ean13' };
}

const CODE39 = /^[0-9A-Z \-.$/+%]+$/;


/** Check typed data for a barcode type; on success, `data` is what to draw and `bwipType` the encoder to use */
export function checkBarcode(type: Symbology, raw: string): Checked {
  const text = raw.trim();
  if (!text) return { ok: false, problem: 'empty' };
  const max = SYMBOLOGIES[type].maxLength;
  const digitsOnly = text.replace(/[\s-]/g, '');
  const gtin = (dataLength: number, bwipType: string): Checked => {
    const r = withCheck(digitsOnly, dataLength);
    return typeof r === 'string' ? { ok: true, data: r, bwipType } : r;
  };
  switch (type) {
    case 'ean13':
      return gtin(12, 'ean13');
    case 'ean8':
      return gtin(7, 'ean8');
    case 'upca':
      return gtin(11, 'upca');
    case 'itf14':
      return gtin(13, 'itf14');
    case 'upce':
      return upce(digitsOnly);
    case 'isbn':
      return isbn(text);
    case 'code39': {
      const up = text.toUpperCase();
      if (up.length > max) return { ok: false, problem: 'tooLong', max };
      return CODE39.test(up) ? { ok: true, data: up, bwipType: 'code39' } : { ok: false, problem: 'chars', allowed: 'A–Z 0–9 - . $ / + % ' };
    }
    case 'code128':
      if (text.length > max) return { ok: false, problem: 'tooLong', max };
      // Code 128 holds printable ASCII
      return /^[\x20-\x7e]+$/.test(text) ? { ok: true, data: text, bwipType: 'code128' } : { ok: false, problem: 'ascii' };
    case 'gs1_128':
      if (text.length > max) return { ok: false, problem: 'tooLong', max };
      return /^(\(\d{2,4}\)[^()]+)+$/.test(text) ? { ok: true, data: text, bwipType: 'gs1_128' } : { ok: false, problem: 'gs1' };
    default:
      if (text.length > max) return { ok: false, problem: 'tooLong', max };
      if (/^[\x00-\x7f]*$/.test(text)) return { ok: true, data: text, bwipType: type };
      // bwip-js stores text as UTF-8; the ECI 26 marker tells scanners so instead of leaving them to guess.
      // In this mode a ^ in the text is written ^^
      return { ok: true, data: `^ECI000026${text.replace(/\^/g, '^^')}`, bwipType: type, parse: true };
  }
}
