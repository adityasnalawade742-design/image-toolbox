import { describe, it, expect } from 'vitest';
import { normalizeBase64Image } from '../base64';

const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
const SVG = btoa('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>');

describe('Base64 Image Normalization', () => {
  it('accepts a bare string and sniffs PNG', () => {
    expect(normalizeBase64Image(PNG)).toBe(`data:image/png;base64,${PNG}`);
  });

  it('keeps a valid data URI and is case-insensitive about the prefix', () => {
    expect(normalizeBase64Image(`Data:image/png;BASE64,${PNG}`)).toBe(`data:image/png;base64,${PNG}`);
  });

  it.each([
    [`"data:image/png;base64,${PNG}"`],
    [`url("data:image/png;base64,${PNG}")`],
    [`<img src="data:image/png;base64,${PNG}" />`],
    [`background-image: url('data:image/png;base64,${PNG}');`],
  ])('unwraps snippets copied from code: %s', (input) => {
    expect(normalizeBase64Image(input)).toBe(`data:image/png;base64,${PNG}`);
  });

  it('strips whitespace and line breaks inside the payload', () => {
    expect(normalizeBase64Image(`${PNG.slice(0, 20)}\n  ${PNG.slice(20)}`)).toBe(`data:image/png;base64,${PNG}`);
  });

  it('converts URL-safe base64 and restores padding', () => {
    const urlSafe = PNG.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    expect(normalizeBase64Image(urlSafe)).toBe(`data:image/png;base64,${PNG}`);
  });

  it('detects SVG and other types instead of assuming PNG, even behind octet-stream', () => {
    expect(normalizeBase64Image(SVG)).toBe(`data:image/svg+xml;base64,${SVG}`);
    expect(normalizeBase64Image(`data:application/octet-stream;base64,${PNG}`)).toBe(`data:image/png;base64,${PNG}`);
    expect(normalizeBase64Image('/9j/4AAQSkZJRgABAQ')).toBe('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ==');
  });

  it('rejects text that is not base64', () => {
    expect(normalizeBase64Image('hello world!')).toBeNull();
    expect(normalizeBase64Image('')).toBeNull();
  });
});
