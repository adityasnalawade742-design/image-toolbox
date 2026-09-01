import type { LocalizedHomeData, SupportedLocale } from '../types.ts';
import { enHome } from './en.ts';
import { esHome } from './es.ts';
import { frHome } from './fr.ts';
import { deHome, ptHome, itHome, jaHome, koHome, idHome, trHome } from './others.ts';

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
