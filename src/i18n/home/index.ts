import { LocalizedHomeData } from '../types';
import { enHome } from './en';
import { esHome } from './es';
import { frHome } from './fr';
import { deHome } from './de';
import { ptHome } from './pt';
import { itHome } from './it';
import { jaHome } from './ja';
import { koHome } from './ko';
import { idHome } from './id';

const HOME_DICTIONARIES: Record<string, LocalizedHomeData> = {
  en: enHome,
  es: esHome,
  fr: frHome,
  de: deHome,
  pt: ptHome,
  it: itHome,
  ja: jaHome,
  ko: koHome,
  id: idHome
};

export function getHomeContent(locale: string = 'en'): LocalizedHomeData {
  const loc = (locale || 'en').toLowerCase();
  return HOME_DICTIONARIES[loc] || HOME_DICTIONARIES.en;
}

export { enHome, esHome, frHome, deHome, ptHome, itHome, jaHome, koHome, idHome };
