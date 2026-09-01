import type { LocalizedToolItem } from '../types.ts';
import { enTools } from './en.ts';
import { esTools } from './es.ts';
import { frTools } from './fr.ts';
import { deTools } from './de.ts';
import { ptTools } from './pt.ts';
import { itTools } from './it.ts';
import { jaTools } from './ja.ts';
import { koTools } from './ko.ts';
import { idTools } from './id.ts';
import { trTools } from './tr.ts';

const TOOL_DICTIONARIES: Record<string, Record<string, LocalizedToolItem>> = {
  en: enTools,
  es: esTools,
  fr: frTools,
  de: deTools,
  pt: ptTools,
  it: itTools,
  ja: jaTools,
  ko: koTools,
  id: idTools,
  tr: trTools,
};

export function getLocalizedToolContent(slug: string, locale: string = 'en'): LocalizedToolItem {
  const loc = (locale || 'en').toLowerCase();
  const dict = TOOL_DICTIONARIES[loc] || TOOL_DICTIONARIES.en;
  return dict[slug] || enTools[slug] || {
    name: slug,
    shortName: slug,
    tagline: 'Image tool',
    seoTitle: 'Image Tool',
    seoDescription: 'Online image tool',
    keywords: [slug],
    howToSteps: [],
    features: [],
    faqs: [],
  };
}

export function getAllLocalizedTools(locale: string = 'en'): Record<string, LocalizedToolItem> {
  const loc = (locale || 'en').toLowerCase();
  return TOOL_DICTIONARIES[loc] || TOOL_DICTIONARIES.en;
}

export { enTools, esTools, frTools, deTools, ptTools, itTools, jaTools, koTools, idTools, trTools };
