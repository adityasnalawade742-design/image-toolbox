// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import assets from '../modelAssets.json';

const pkg = (name: string) => JSON.parse(readFileSync(resolve(__dirname, '../../../../node_modules', name, 'package.json'), 'utf8'));

// The self-hosted files (scripts/self-host-models.mjs) must match the libraries that load them
describe('self-hosted model assets', () => {
  it('serves the IMG.LY data that matches the installed @imgly/background-removal', () => {
    expect(assets.imgly.version).toBe(pkg('@imgly/background-removal').version);
  });

  it('names the installed Tesseract versions (the OCR files are served from paths containing them)', () => {
    expect(assets.ocr.version).toBe(pkg('tesseract.js').version);
    expect(assets.ocr.coreVersion).toBe(pkg('tesseract.js-core').version);
  });

  it('pins every file by revision and SHA-256', () => {
    expect(assets.modnet.revision).toMatch(/^[0-9a-f]{40}$/);
    expect(assets.imgly.resourcesSha256).toMatch(/^[0-9a-f]{64}$/);
    for (const hash of Object.values(assets.modnet.files)) expect(hash).toMatch(/^[0-9a-f]{64}$/);
    expect(assets.ocr.tessdata.commit).toMatch(/^[0-9a-f]{40}$/);
    for (const hash of Object.values(assets.ocr.tessdata.langs)) expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });
});
