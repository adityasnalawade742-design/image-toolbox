import { getCollection, type CollectionEntry } from 'astro:content';

/** "18 November 2026", the style of the information pages */
export const guideDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/**
 * Whether a guide is out: its `published` date (midnight UTC) has come. Guides with a later date are written ahead and
 * stay off the site (no page, no listing, no sitemap entry) until a build on or after that day; the scheduled workflow
 * (.github/workflows/publish-guides.yml) runs that build. `astro dev` shows them all, to read them before they go out.
 */
export const isPublished = (g: CollectionEntry<'guides'>, now = new Date()) => import.meta.env.DEV || g.data.published.getTime() <= now.getTime();

/** Every published guide, newest first (by last update) */
export async function allGuides(): Promise<CollectionEntry<'guides'>[]> {
  const guides = (await getCollection('guides')).filter((g) => isPublished(g));
  const when = (g: CollectionEntry<'guides'>) => (g.data.updated ?? g.data.published).getTime();
  return guides.sort((a, b) => when(b) - when(a));
}
