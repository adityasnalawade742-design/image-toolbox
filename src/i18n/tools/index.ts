import type { LocalizedToolItem } from '../types';
import { enTools } from './en';
import { esTools } from './es';
import { frTools } from './fr';
import { deTools } from './de';
import { ptTools } from './pt';
import { itTools } from './it';
import { jaTools } from './ja';
import { koTools } from './ko';
import { idTools } from './id';

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

export { enTools, esTools, frTools, deTools, ptTools, itTools, jaTools, koTools, idTools };
