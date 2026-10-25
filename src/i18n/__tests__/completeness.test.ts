import { describe, it, expect } from 'vitest';
import { en } from '../strings/en';
import { ui, languages } from '../ui';
import { enTools } from '../tools/en';
import { getAllLocalizedTools } from '../tools';
import { getLocalizedHomeData } from '../home';
import { enHome } from '../home/en';

const LOCALES = Object.keys(languages).filter((l) => l !== 'en');
// Run one language with: I18N_LOCALE=de npx vitest run src/i18n/__tests__/completeness.test.ts
const ONLY = process.env.I18N_LOCALE;
const targets = ONLY ? [ONLY] : LOCALES;

const placeholders = (s: string) => (s.match(/\{[a-zA-Z]+\}/g) || []).sort();

describe.each(targets)('Translation completeness: %s', (locale) => {
  it('translates every interface string and keeps its placeholders', async () => {
    const mod = await import(`../strings/${locale}.ts`);
    const strings: Record<string, string> = mod.strings;
    const missing = Object.keys(en).filter((k) => !strings[k]?.trim());
    expect(missing, `missing keys in strings/${locale}.ts`).toEqual([]);
    for (const [key, value] of Object.entries(en)) {
      expect(placeholders(strings[key]), `placeholders in ${key}`).toEqual(placeholders(value));
    }
  });

  it('translates every page-chrome string', () => {
    const dict = ui[locale as keyof typeof ui] as Record<string, string>;
    const missing = Object.keys(ui.en).filter((k) => !dict[k]?.trim());
    expect(missing, `missing keys in ui/${locale}.ts`).toEqual([]);
  });

  it('has full content for every tool page', () => {
    const tools = getAllLocalizedTools(locale);
    for (const slug of Object.keys(enTools)) {
      const item = tools[slug];
      expect(item, `${slug} missing`).toBeDefined();
      expect(item.intro?.trim(), `${slug}.intro`).toBeTruthy();
      expect(item.seoTitle.length, `${slug}.seoTitle length`).toBeLessThanOrEqual(60);
      expect(item.seoTitle, `${slug}.seoTitle still English`).not.toEqual(enTools[slug].seoTitle);
      expect(item.howToSteps.length, `${slug}.howToSteps`).toBe(enTools[slug].howToSteps.length);
      expect(item.faqs.length, `${slug}.faqs`).toBe(enTools[slug].faqs.length);
      expect(item.features.length, `${slug}.features`).toBe(enTools[slug].features.length);
    }
  });

  it('has full home page content', () => {
    const home = getLocalizedHomeData(locale);
    expect(home.sections, 'home.sections').toBeDefined();
    expect(home.faqs.length).toBe(enHome.faqs.length);
    expect(home.trustPillars.length).toBe(enHome.trustPillars.length);
    expect(home.hero.title).not.toEqual(enHome.hero.title);
  });
});
