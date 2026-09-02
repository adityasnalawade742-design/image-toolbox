import { describe, it, expect } from 'vitest';
import { languages, defaultLang, ui } from '../ui';
import { TOOLS } from '../../config/tools';

describe('Internationalization (i18n) Configuration', () => {
  it('supports 10 core languages with English as default', () => {
    expect(defaultLang).toBe('en');
    expect(Object.keys(languages)).toHaveLength(10);
    expect(languages).toHaveProperty('en');
    expect(languages).toHaveProperty('es');
    expect(languages).toHaveProperty('fr');
    expect(languages).toHaveProperty('de');
    expect(languages).toHaveProperty('ja');
  });

  it('contains essential UI translation strings for all languages', () => {
    for (const [langKey] of Object.entries(languages)) {
      const langDict = ui[langKey as keyof typeof ui];
      expect(langDict).toBeDefined();
      expect(langDict['nav.allTools']).toBeTruthy();
    }
  });

  it('contains valid tool definitions in TOOLS registry', () => {
    expect(TOOLS.length).toBeGreaterThanOrEqual(24);
    TOOLS.forEach((tool) => {
      expect(tool.slug).toBeTruthy();
      expect(tool.name).toBeTruthy();
      expect(tool.description).toBeTruthy();
      expect(tool.category).toBeTruthy();
    });
  });
});
