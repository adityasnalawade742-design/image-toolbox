import { describe, expect, it } from 'vitest';
import { TOOLS } from '../../../config/tools';
import { enTools } from '../../../i18n/tools/en';
import { getAllLocalizedTools } from '../../../i18n/tools';
import { rankTools } from '../rank';

// The real English search index, as the site builds it
const items = TOOLS.map((t) => ({ slug: t.slug, name: enTools[t.slug]?.name || t.name, tagline: enTools[t.slug]?.tagline || t.description, keywords: enTools[t.slug]?.keywords || [], popular: !!t.popular }));
const top = (q: string, n = 3) => rankTools(items, q).slice(0, n).map((t) => t.slug);

describe('tool search', () => {
  it.each([
    ['image to pdf', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf']],
    ['photo to pdf', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf']],
    ['images to pdf', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf']],
    ['image to png', ['convert-image', 'jpg-to-png', 'webp-to-png', 'heic-to-png', 'svg-to-png', 'gif-to-png', 'bmp-to-png', 'avif-to-png', 'tiff-to-png']],
    ['picture to jpg', ['convert-image', 'png-to-jpg', 'webp-to-jpg', 'heic-to-jpg', 'gif-to-jpg', 'bmp-to-jpg', 'avif-to-jpg', 'tiff-to-jpg', 'svg-to-jpg']],
    ['pdf to image', ['pdf-to-jpg', 'pdf-to-png']],
    ['pdf to jpeg', ['pdf-to-jpg']],
  ])('"%s" puts a matching conversion first', (q, expected) => {
    expect(expected).toContain(top(q, 1)[0]);
  });

  it.each([
    ['jpeg to png', 'jpg-to-png'],
    ['heic to jpg', 'heic-to-jpg'],
    ['pdf to word', 'pdf-to-word'],
    ['word to pdf', 'word-to-pdf'],
    ['docx to pdf', 'word-to-pdf'],
    ['excel to pdf', 'excel-to-pdf'],
    ['ppt to pdf', 'powerpoint-to-pdf'],
    ['combine pdf', 'merge-pdf'],
    ['merge pdf', 'merge-pdf'],
    ['remove bg', 'remove-background'],
    ['remove background', 'remove-background'],
    ['compress image', 'compress-image'],
    ['qr code', 'qr-code-generator'],
    ['crop', 'crop-image'],
    ['sign pdf', 'sign-pdf'],
  ])('"%s" finds %s first', (q, slug) => {
    expect(top(q, 1)[0]).toBe(slug);
  });

  it.each([
    ['make pdf smaller', 'compress-pdf'],
    ['reduce photo size', 'compress-image'],
    ['shrink image', 'compress-image'],
    ['compres', 'compress-image'],
    ['compres pdf', 'compress-pdf'],
    ['watermrk', 'watermark-image'],
    ['password pdf', 'protect-pdf'],
    ['image to text', 'image-to-text'],
    ['how to convert jpg to png online free', 'jpg-to-png'],
  ])('"%s" has %s in the top three', (q, slug) => {
    expect(top(q)).toContain(slug);
  });

  it.each([
    ['image to png', ['convert-image', 'jpg-to-png']],
    ['photo to jpg', ['convert-image', 'png-to-jpg']],
    ['image to pdf', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf']],
    ['pdf to image', ['pdf-to-jpg', 'pdf-to-png']],
  ])('"%s" starts with %j', (q, expected) => {
    expect(top(q, expected.length)).toEqual(expected);
  });

  it('shows every tool, in order, for an empty query', () => {
    expect(rankTools(items, '  ').length).toBe(items.length);
  });

  it('still answers when not every word matches', () => {
    expect(rankTools(items, 'pdf zzzqqq').length).toBeGreaterThan(0);
  });

  it('matches Japanese written without spaces', () => {
    const ja = [{ slug: 'jpg-to-pdf', name: 'JPGをPDFに変換', tagline: '画像をPDFにまとめます', keywords: ['画像 pdf 変換'] }, { slug: 'crop-image', name: '画像を切り抜き', tagline: '', keywords: [] }];
    expect(rankTools(ja, '画像をpdfに')[0].slug).toBe('jpg-to-pdf');
  });

  it.each([
    ['ja', '画像をpdfに', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf']],
    ['ja', '画像をpdfに変換', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf']],
    ['ja', 'pdfから画像', ['pdf-to-jpg', 'pdf-to-png']],
    ['ko', '이미지를 pdf로', ['jpg-to-pdf', 'png-to-pdf', 'heic-to-pdf', 'tiff-to-pdf']],
    ['ko', '사진을 png로 변환', ['convert-image', 'jpg-to-png']],
  ])('%s: "%s" puts a matching conversion first', (lang, q, expected) => {
    const loc = getAllLocalizedTools(lang as never);
    const list = TOOLS.map((t) => ({ slug: t.slug, name: loc[t.slug]?.name || t.name, tagline: loc[t.slug]?.tagline || '', keywords: loc[t.slug]?.keywords || [] }));
    expect(expected).toContain(rankTools(list, q)[0]?.slug);
  });
});
