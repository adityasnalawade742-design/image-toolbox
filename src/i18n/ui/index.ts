import { UIStrings } from '../types';
import { enUI } from './en';
import { esUI } from './es';
import { frUI } from './fr';
import { deUI } from './de';
import { ptUI } from './pt';
import { itUI } from './it';
import { jaUI } from './ja';
import { koUI } from './ko';
import { idUI } from './id';

const UI_DICTIONARIES: Record<string, UIStrings> = {
  en: enUI,
  es: esUI,
  fr: frUI,
  de: deUI,
  pt: ptUI,
  it: itUI,
  ja: jaUI,
  ko: koUI,
  id: idUI
};

export function getUIStrings(locale: string = 'en'): UIStrings {
  const loc = (locale || 'en').toLowerCase();
  return UI_DICTIONARIES[loc] || UI_DICTIONARIES.en;
}

export { enUI, esUI, frUI, deUI, ptUI, itUI, jaUI, koUI, idUI };
