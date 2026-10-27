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

  it('pins every file by revision and SHA-256', () => {
    expect(assets.modnet.revision).toMatch(/^[0-9a-f]{40}$/);
    expect(assets.imgly.resourcesSha256).toMatch(/^[0-9a-f]{64}$/);
    for (const hash of Object.values(assets.modnet.files)) expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });
});
