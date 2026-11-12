import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { SERVER_TOOLS, TOOLS } from '../../../config/tools';
import { getOrganizationSchema, getWebApplicationSchema, getWebSiteSchema } from '../schema';

describe('site schema', () => {
  it('links the site and every tool to one organization', () => {
    const org = getOrganizationSchema();
    expect(org['@type']).toBe('Organization');
    expect(org.logo.url).toMatch(/^https:\/\/.+\/icon-512\.png$/);
    expect(getWebSiteSchema('en', 'd', 'https://x/').publisher['@id']).toBe(org['@id']);
    expect(getWebApplicationSchema('Crop', 'd', 'https://x/crop').publisher['@id']).toBe(org['@id']);
  });
});

describe('server tools list (llms.txt marks these as using the server)', () => {
  it('names exactly the tools whose page runs the server document workspace', () => {
    const src = readFileSync(resolve(__dirname, '../../../components/shared/ToolWorkspace.tsx'), 'utf8');
    const usesServer = new Set([...src.matchAll(/<DocumentToolWorkspace tool="([^"]+)"/g)].map((m) => m[1]));
    expect([...SERVER_TOOLS].sort()).toEqual([...usesServer].sort());
    const slugs = new Set(TOOLS.map((t) => t.slug));
    for (const s of SERVER_TOOLS) expect(slugs.has(s), s).toBe(true);
  });
});
