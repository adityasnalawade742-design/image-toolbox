import type { LocalizedHomeData, SupportedLocale } from '../types';
import { enHome } from './en';
import { esHome } from './es';
import { frHome } from './fr';
import { deHome, ptHome, itHome, jaHome, koHome, idHome } from './others';

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
};

export function getLocalizedHomeData(locale: string = 'en'): LocalizedHomeData {
  const loc = (locale || 'en').toLowerCase() as SupportedLocale;
  return HOME_DICTIONARIES[loc] || HOME_DICTIONARIES.en;
}
