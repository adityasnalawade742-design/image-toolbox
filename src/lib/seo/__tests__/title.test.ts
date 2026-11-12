import { describe, expect, it } from 'vitest';
import { brandedTitle, titleWidth } from '../title';

describe('title width', () => {
  it('counts Japanese and Korean characters twice', () => {
    expect(titleWidth('Crop Image')).toBe(10);
    expect(titleWidth('画像の切り抜き')).toBe(14);
    expect(titleWidth('배경 제거')).toBe(9);
    expect(titleWidth('PDF圧縮')).toBe(7);
  });

  it('adds the site name only when the title still fits', () => {
    expect(brandedTitle('Crop Image – Free Online Cropper', 'TadaFile')).toBe('Crop Image – Free Online Cropper | TadaFile');
    // 27 wide characters + Latin: wider than 60 with the site name, so it is left off
    const ja = 'コンタクトシート作成 – 写真をサムネイル一覧のPDFに、無料';
    expect(brandedTitle(ja, 'TadaFile')).toBe(ja);
    expect(titleWidth(ja)).toBeLessThanOrEqual(60);
  });
});
