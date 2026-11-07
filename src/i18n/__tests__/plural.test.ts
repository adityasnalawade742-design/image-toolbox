import { describe, expect, it } from 'vitest';
import { createT, getStrings, pickStrings } from '../strings';

describe('counts of one', () => {
  it('uses the singular form for exactly 1', () => {
    const t = createT(getStrings('en'));
    expect(t('ctl.pdf.pagesCount', { n: 1 })).toBe('1 page');
    expect(t('ctl.pdf.pagesCount', { n: 2 })).toBe('2 pages');
    expect(t('ctl.pdf.pagesCount', { n: 0 })).toBe('0 pages');
    expect(t('ctl.topdf.done', { n: 1 })).toBe('PDF created with 1 page.');
  });
  it('works in other languages and is shipped with the pages that use the count', () => {
    const t = createT(pickStrings('de', 'ctl.pdf.pagesCount'));
    expect(t('ctl.pdf.pagesCount', { n: 1 })).toBe('1 Seite');
    expect(t('ctl.pdf.pagesCount', { n: 3 })).toBe('3 Seiten');
  });
  it('leaves strings without a singular form alone', () => {
    const t = createT(getStrings('en'));
    expect(t('ws.download', { format: 'PNG', n: 1 })).toBe(getStrings('en')['ws.download'].replace('{format}', 'PNG'));
  });
});
