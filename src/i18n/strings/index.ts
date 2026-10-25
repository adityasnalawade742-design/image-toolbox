import { en, type StringKey } from './en';
import type { SupportedLocale } from '../types';

export type { StringKey };
export type Strings = Partial<Record<StringKey, string>>;

// Translations are partial: any missing key falls back to English
const LOCALES: Partial<Record<SupportedLocale, Strings>> = import.meta.glob(['./*.ts', '!./en.ts', '!./index.ts'], { eager: true, import: 'strings' }) as never;

function localeStrings(locale: string): Strings {
  const entry = Object.entries(LOCALES).find(([path]) => path === `./${locale}.ts`);
  return (entry?.[1] as Strings) || {};
}

/** All interface strings for a locale, English filling any gaps */
export function getStrings(locale: string = 'en'): Record<StringKey, string> {
  return { ...en, ...(locale === 'en' ? {} : localeStrings(locale)) } as Record<StringKey, string>;
}

/** Only the keys under the given prefixes, so each island ships just what it renders */
export function pickStrings(locale: string, ...prefixes: string[]): Strings {
  const all = getStrings(locale);
  return Object.fromEntries(Object.entries(all).filter(([k]) => prefixes.some((p) => k.startsWith(p)))) as Strings;
}

/** `t('ws.savedAs', { format: 'PNG' })` with `{format}` placeholders; falls back to English, then the key */
export function createT(strings: Strings) {
  return (key: StringKey, vars?: Record<string, string | number>): string => {
    let text = strings[key] ?? en[key] ?? key;
    if (vars) for (const [name, value] of Object.entries(vars)) text = text.split(`{${name}}`).join(String(value));
    return text;
  };
}
