import { TOOLS } from '../config/tools';
import { getAllLocalizedTools } from './tools';
import type { SearchItem } from '../components/shared/ToolSearch';

/** What the search box shows and matches, in one language; served as /search-index/<locale>.json */
export function searchItems(locale: string): SearchItem[] {
  const localized = getAllLocalizedTools(locale as never);
  return TOOLS.map((tool) => {
    const loc = localized[tool.slug];
    return { slug: tool.slug, category: tool.category, name: loc?.name || tool.name, tagline: loc?.tagline || tool.description, keywords: loc?.keywords || [] };
  });
}

export const searchIndexUrl = (locale: string) => `/search-index/${locale}.json`;
