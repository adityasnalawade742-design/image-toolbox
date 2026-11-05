import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

// The English strings are split over several files and spread into one object, so a key defined twice wouldn't be a
// type error: the later file would silently replace the earlier text (another tool's label).
describe('English interface strings', () => {
  it('defines every key only once across its files', () => {
    const dir = join(__dirname, '../strings/en');
    const files = [...readdirSync(dir).filter((f) => f.endsWith('.ts')).map((f) => join(dir, f)), join(__dirname, '../strings/en.ts')];
    const seen = new Map<string, string>();
    const dups: string[] = [];
    for (const f of files)
      for (const m of readFileSync(f, 'utf8').matchAll(/^\s*'([\w.]+)':/gm)) {
        if (seen.has(m[1])) dups.push(`${m[1]} (${seen.get(m[1])} and ${f.split(/[\\/]/).pop()})`);
        else seen.set(m[1], f.split(/[\\/]/).pop()!);
      }
    expect(dups).toEqual([]);
  });
});
