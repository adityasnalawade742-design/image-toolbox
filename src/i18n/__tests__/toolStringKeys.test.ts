import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

// Each tool page sends only the strings its code uses; the list is generated from the code and must match it
describe('per-tool string list', () => {
  it('is up to date with the components', () => {
    expect(() => execFileSync(process.execPath, [join(__dirname, '../../../scripts/string-usage.mjs'), '--check'], { stdio: 'pipe' })).not.toThrow();
  });
});

describe('a string a page was not sent', () => {
  it('still shows (in English) and is recorded for the audit', async () => {
    const g = globalThis as unknown as { window?: { __missingStrings?: Set<string> } };
    g.window = {};
    try {
      const { createT } = await import('../strings');
      const t = createT({ 'ws.download': 'Descargar {format}' });
      expect(t('ws.download', { format: 'PNG' })).toBe('Descargar PNG');
      expect(t('ctl.crop.shape' as never)).not.toBe('ctl.crop.shape');
      expect([...(g.window.__missingStrings ?? [])]).toEqual(['ctl.crop.shape']);
    } finally {
      delete g.window;
    }
  });
});
