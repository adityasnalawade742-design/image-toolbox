/**
 * Which interface strings each tool page needs. Follows the tool workspace's static imports (and, for tools with their
 * own workspace, that component's imports), collecting every `ctl.*` key the code mentions, plus prefixes of keys it
 * builds (`ctl.graph.c.${name}`). Lazily loaded workspaces are followed only for the tool they belong to.
 *
 * Writes src/i18n/toolStringKeys.json; `npm run build` runs it first and a test fails if the file is out of date.
 * usage: node scripts/string-usage.mjs [--check]
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const WORKSPACE = join(ROOT, 'src/components/shared/ToolWorkspace.tsx');
const OUT = join(ROOT, 'src/i18n/toolStringKeys.json');

const resolveImport = (from, spec) => {
  if (!spec.startsWith('.')) return null;
  const base = resolve(dirname(from), spec);
  for (const p of [base, `${base}.tsx`, `${base}.ts`, join(base, 'index.tsx'), join(base, 'index.ts')]) if (existsSync(p) && !p.endsWith(dirname(p))) return p.endsWith('.ts') || p.endsWith('.tsx') ? p : null;
  return null;
};

// Static imports only: `import(...)` (lazy workspaces) is handled per tool
const staticImports = (file, src) =>
  [...src.matchAll(/^\s*(?:import|export)\s[^;]*?from\s+['"]([^'"]+)['"]/gm), ...src.matchAll(/^\s*import\s+['"]([^'"]+)['"]/gm)]
    .map((m) => resolveImport(file, m[1]))
    .filter(Boolean);

const keysIn = (src) => {
  const keys = new Set();
  for (const m of src.matchAll(/['"`]((?:ctl)\.[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)+)['"`]/g)) keys.add(m[1]);
  // A key built from a prefix: keep the prefix (a group must be named, never all of ctl.)
  for (const m of src.matchAll(/`(ctl\.[A-Za-z0-9_]+\.[A-Za-z0-9_.]*)\$\{/g)) keys.add(m[1]);
  for (const m of src.matchAll(/`(ctl\.[A-Za-z0-9_]+)\.\$\{/g)) keys.add(m[1] + '.');
  return keys;
};

const cache = new Map();
function closure(entry) {
  const seen = new Set();
  const keys = new Set();
  const stack = [entry];
  while (stack.length) {
    const f = stack.pop();
    if (seen.has(f)) continue;
    seen.add(f);
    let src = cache.get(f);
    if (src === undefined) {
      src = readFileSync(f, 'utf8');
      cache.set(f, src);
    }
    for (const k of keysIn(src)) keys.add(k);
    for (const dep of staticImports(f, src)) if (dep.startsWith(join(ROOT, 'src'))) stack.push(dep);
  }
  return keys;
}

const ws = readFileSync(WORKSPACE, 'utf8');
// const FooWorkspace = standaloneTool(() => import('../tools/x/FooWorkspace'), 'FooWorkspace');
const lazy = new Map([...ws.matchAll(/const (\w+) = standaloneTool\(\(\) => import\('([^']+)'\)/g)].map((m) => [m[1], resolveImport(WORKSPACE, m[2])]));
// 'slug': <FooWorkspace ... />
const slugComponent = [...ws.matchAll(/^\s*'([a-z0-9-]+)':\s*<(\w+)/gm)].map((m) => [m[1], m[2]]);

const generic = closure(WORKSPACE);
const bySlug = {};
for (const [slug, comp] of slugComponent) {
  const file = lazy.get(comp);
  if (!file) continue;
  const extra = [...closure(file)].filter((k) => !generic.has(k)).sort();
  if (extra.length) bySlug[slug] = extra;
}
const data = { generic: [...generic].sort(), bySlug };
const json = JSON.stringify(data, null, 1) + '\n';

if (process.argv.includes('--check')) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';
  if (current.replace(/\r\n/g, '\n') !== json) {
    console.error('src/i18n/toolStringKeys.json is out of date: run node scripts/string-usage.mjs');
    process.exit(1);
  }
} else {
  writeFileSync(OUT, json);
  const sizes = Object.values(bySlug).map((v) => v.length);
  console.log(`[string-usage] ${data.generic.length} keys for every tool page; ${Object.keys(bySlug).length} tools add their own (up to ${Math.max(0, ...sizes)})`);
}
