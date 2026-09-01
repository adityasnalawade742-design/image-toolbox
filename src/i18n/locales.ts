import { LocaleConfig } from './types';

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🌐',
    isDefault: true,
    countries: ['Global', 'India', 'United States', 'United Kingdom', 'Canada', 'Australia']
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    countries: ['Spain', 'Mexico', 'Argentina', 'Colombia', 'Chile', 'Peru']
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    countries: ['France', 'Canada', 'Belgium', 'Switzerland']
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    countries: ['Germany', 'Austria', 'Switzerland']
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    countries: ['Brazil', 'Portugal']
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    countries: ['Italy', 'Switzerland']
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    countries: ['Japan']
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    countries: ['South Korea']
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    countries: ['Indonesia']
  }
];

export const NON_DEFAULT_LOCALES = SUPPORTED_LOCALES.filter(l => !l.isDefault);
export const LOCALE_CODES = SUPPORTED_LOCALES.map(l => l.code);

/**
 * Returns the locale configuration for a given code, defaulting to English.
 */
export function getLocaleConfig(code?: string): LocaleConfig {
  if (!code) return SUPPORTED_LOCALES[0];
  const found = SUPPORTED_LOCALES.find(l => l.code.toLowerCase() === code.toLowerCase());
  return found || SUPPORTED_LOCALES[0];
}

/**
 * Extracts locale and tool slug from an Astro URL pathname.
 * Examples:
 *   "/" -> { locale: 'en', toolSlug: '' }
 *   "/crop-image" -> { locale: 'en', toolSlug: 'crop-image' }
 *   "/es" -> { locale: 'es', toolSlug: '' }
 *   "/es/crop-image" -> { locale: 'es', toolSlug: 'crop-image' }
 */
export function parsePathname(pathname: string): { locale: string; toolSlug: string } {
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  
  if (segments.length === 0) {
    return { locale: 'en', toolSlug: '' };
  }

  const firstSeg = segments[0].toLowerCase();
  const isLocale = LOCALE_CODES.includes(firstSeg) && firstSeg !== 'en';

  if (isLocale) {
    return {
      locale: firstSeg,
      toolSlug: segments[1] || ''
    };
  }

  return {
    locale: 'en',
    toolSlug: segments[0] || ''
  };
}

/**
 * Generates the clean localized path for any tool and target locale.
 * Preserves unprefixed English URLs.
 * Examples:
 *   getLocalizedUrl('', 'en') -> '/'
 *   getLocalizedUrl('', 'es') -> '/es'
 *   getLocalizedUrl('crop-image', 'en') -> '/crop-image'
 *   getLocalizedUrl('crop-image', 'es') -> '/es/crop-image'
 */
export function getLocalizedUrl(toolSlug: string, targetLocale: string): string {
  const cleanSlug = (toolSlug || '').replace(/^\/+|\/+$/g, '');
  const loc = targetLocale.toLowerCase();

  if (loc === 'en' || !loc) {
    return cleanSlug ? `/${cleanSlug}` : '/';
  }

  return cleanSlug ? `/${loc}/${cleanSlug}` : `/${loc}`;
}

/**
 * Generates all multi-locale hreflang alternate URL mappings for a given tool slug.
 */
export function getHreflangLinks(toolSlug: string, siteOrigin: string): Array<{ lang: string; href: string }> {
  const origin = siteOrigin.replace(/\/+$/, '');
  const links: Array<{ lang: string; href: string }> = [];

  // 1. Language alternates
  for (const locale of SUPPORTED_LOCALES) {
    const path = getLocalizedUrl(toolSlug, locale.code);
    links.push({
      lang: locale.code,
      href: `${origin}${path}`
    });
  }

  // 2. x-default points to global English
  const defaultPath = getLocalizedUrl(toolSlug, 'en');
  links.push({
    lang: 'x-default',
    href: `${origin}${defaultPath}`
  });

  return links;
}
