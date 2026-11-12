import { describe, expect, it } from 'vitest';
import { HUBS, HUB_CATEGORIES } from '../hubs';
import { TOOLS } from '../tools';
import { HUB_TEXTS } from '../../i18n/hubs';

const listed = HUBS.flatMap((h) => h.groups.flatMap((g) => g.slugs));

describe('collection pages', () => {
  it('list every tool of the categories they cover, exactly once', () => {
    const expected = TOOLS.filter((t) => HUB_CATEGORIES.includes(t.category)).map((t) => t.slug).sort();
    expect([...listed].sort()).toEqual(expected);
    expect(new Set(listed).size).toBe(listed.length);
  });

  it('only list real tools', () => {
    const slugs = new Set(TOOLS.map((t) => t.slug));
    for (const s of listed) expect(slugs.has(s), s).toBe(true);
  });

  it('use addresses no tool uses', () => {
    const slugs = new Set(TOOLS.map((t) => t.slug));
    for (const h of HUBS) expect(slugs.has(h.slug), h.slug).toBe(false);
  });

  it('have their texts in every language, with the right number of tools', () => {
    for (const [lang, texts] of Object.entries(HUB_TEXTS)) {
      for (const hub of HUBS) {
        const page = texts.pages[hub.slug];
        expect(page, `${lang} ${hub.slug}`).toBeTruthy();
        expect(page.title && page.description && page.h1 && page.intro, `${lang} ${hub.slug}`).toBeTruthy();
        for (const g of hub.groups) expect(page.groups[g.key], `${lang} ${hub.slug} ${g.key}`).toBeTruthy();
        expect(page.faqs.length, `${lang} ${hub.slug}`).toBeGreaterThan(0);
        // The description states the number of tools: it must match the page
        const count = hub.groups.reduce((n, g) => n + g.slugs.length, 0);
        expect(Number(page.description.match(/\d+/)?.[0]), `${lang} ${hub.slug}`).toBe(count);
      }
    }
  });
});
