import { LocaleInfo, SupportedLocale } from './types';

export const SUPPORTED_LOCALES: Record<SupportedLocale, LocaleInfo> = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', hrefLang: 'en' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', hrefLang: 'es' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', hrefLang: 'fr' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', hrefLang: 'de' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', hrefLang: 'pt' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', hrefLang: 'it' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', hrefLang: 'ja' },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', hrefLang: 'ko' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', hrefLang: 'id' },
};

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export function getHreflangLinks(currentSlug: string = '', baseUrl: string = 'https://image-toolbox.aditya-s-nalawade742.workers.dev') {
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanSlug = currentSlug.replace(/^\//, '');

  const links: { lang: string; href: string }[] = [];

  // Default English unprefixed canonical
  const defaultPath = cleanSlug ? `/${cleanSlug}` : '/';
  links.push({ lang: 'en', href: `${cleanBase}${defaultPath}` });

  // Localized routes
  for (const locale of Object.keys(SUPPORTED_LOCALES) as SupportedLocale[]) {
    if (locale === 'en') continue;
    const locPath = cleanSlug ? `/${locale}/${cleanSlug}` : `/${locale}/`;
    links.push({ lang: locale, href: `${cleanBase}${locPath}` });
  }

  // x-default points to default English route
  links.push({ lang: 'x-default', href: `${cleanBase}${defaultPath}` });

  return links;
}
