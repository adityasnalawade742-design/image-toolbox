import { getCollection, type CollectionEntry } from 'astro:content';

/** "18 November 2026", the style of the information pages */
export const guideDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Every guide, newest first (by last update) */
export async function allGuides(): Promise<CollectionEntry<'guides'>[]> {
  const guides = await getCollection('guides');
  const when = (g: CollectionEntry<'guides'>) => (g.data.updated ?? g.data.published).getTime();
  return guides.sort((a, b) => when(b) - when(a));
}
