import { describe, it, expect } from 'vitest';
import { tidyCjk } from '../tidyCjk';

describe('tidying Chinese and Japanese OCR text', () => {
  it('takes out a space between two Chinese or Japanese characters', () => {
    expect(tidyCjk('求めまし\nた。 東京の天気')).toBe('求めまし\nた。東京の天気');
  });
  it('takes out the spaces around an ASCII comma read between Chinese characters', () => {
    expect(tidyCjk('年度預算 , 並要求')).toBe('年度預算,並要求');
  });
  it('keeps line breaks, and spaces next to Latin text', () => {
    expect(tidyCjk('请阅读 Annual Report 2026 的内容\n第二行')).toBe('请阅读 Annual Report 2026 的内容\n第二行');
  });
  it('leaves Latin punctuation between Latin words alone', () => {
    expect(tidyCjk('Hello , world. 你好')).toBe('Hello , world. 你好');
  });
});
