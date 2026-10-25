import type { LocalizedHomeData, SupportedLocale } from '../types.ts';
import { enHome } from './en.ts';
import { esHome } from './es.ts';
import { frHome } from './fr.ts';
import { deHome } from './de.ts';
import { ptHome } from './pt.ts';
import { itHome } from './it.ts';
import { jaHome } from './ja.ts';
import { koHome } from './ko.ts';
import { idHome } from './id.ts';
import { trHome } from './tr.ts';

const HOME_DICTIONARIES: Record<SupportedLocale, LocalizedHomeData> = {
  en: enHome,
  es: esHome,
  fr: frHome,
  de: deHome,
  pt: ptHome,
  it: itHome,
  ja: jaHome,
  ko: koHome,
  id: idHome,
  tr: trHome,
};

export function getLocalizedHomeData(locale: string = 'en'): LocalizedHomeData {
  const loc = (locale || 'en').toLowerCase() as SupportedLocale;
  return HOME_DICTIONARIES[loc] || HOME_DICTIONARIES.en;
}
