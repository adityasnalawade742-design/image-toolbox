import type { SupportedLocale } from '../types';
import type { HubTexts } from './types';
import { enHubs } from './en';
import { esHubs } from './es';
import { frHubs } from './fr';
import { deHubs } from './de';
import { ptHubs } from './pt';
import { itHubs } from './it';
import { jaHubs } from './ja';
import { koHubs } from './ko';
import { idHubs } from './id';
import { trHubs } from './tr';

export const HUB_TEXTS: Record<SupportedLocale, HubTexts> = {
  en: enHubs,
  es: esHubs,
  fr: frHubs,
  de: deHubs,
  pt: ptHubs,
  it: itHubs,
  ja: jaHubs,
  ko: koHubs,
  id: idHubs,
  tr: trHubs,
};

export const getHubTexts = (locale: string): HubTexts => HUB_TEXTS[locale as SupportedLocale] ?? enHubs;
