import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  const localizedUI: Record<string, string> = ui[lang] || ui[defaultLang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (key in localizedUI ? localizedUI[key] : ui[defaultLang][key]) || (key as string);
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const pathName = cleanPath.replaceAll('/', '');
    
    const routeMap: Record<string, string> | undefined =
      l !== defaultLang && l in routes
        ? routes[l as keyof typeof routes]
        : undefined;
        
    const translatedPath = routeMap?.[pathName]
      ? '/' + routeMap[pathName]
      : cleanPath;

    if (!showDefaultLang && l === defaultLang) {
      return translatedPath === '' ? '/' : translatedPath;
    }
    
    const finalRoute = translatedPath === '/' ? '' : translatedPath;
    return `/${l}${finalRoute}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined || path === '') {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0] as Record<string, string> | undefined;
    return route ? route[path] : path;
  }

  const currentRoutes = routes[currentLang];
  if (!currentRoutes) return path;

  const reversedKey = Object.keys(currentRoutes).find((key) => currentRoutes[key] === path);
  return reversedKey || path;
}
