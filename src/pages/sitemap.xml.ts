import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../config/site';
import { TOOLS } from '../config/tools';
import { HUBS } from '../config/hubs';
import { SUPPORTED_LOCALES } from '../i18n/locales';
import type { SupportedLocale } from '../i18n/types';
import { allGuides } from '../lib/guides';

export const GET: APIRoute = async () => {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '');
  const nonDefaultLocales = (Object.keys(SUPPORTED_LOCALES) as SupportedLocale[]).filter((l) => l !== 'en');
  const now = new Date().toISOString().split('T')[0];

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];

  // 1. Default English Homepage
  urls.push({
    loc: `${baseUrl}/`,
    lastmod: now,
    changefreq: 'daily',
    priority: '1.0',
  });

  // 2. Default English Tool Pages (27 tools)
  for (const tool of TOOLS) {
    urls.push({
      loc: `${baseUrl}/${tool.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: tool.popular ? '0.9' : '0.8',
    });
  }

  // Collection pages, in every language
  for (const hub of HUBS) {
    urls.push({ loc: `${baseUrl}/${hub.slug}`, lastmod: now, changefreq: 'weekly', priority: '0.9' });
    for (const locale of nonDefaultLocales) {
      urls.push({ loc: `${baseUrl}/${locale}/${hub.slug}`, lastmod: now, changefreq: 'weekly', priority: '0.8' });
    }
  }

  // Information pages (English only)
  for (const page of ['about', 'contact', 'privacy', 'terms', 'accessibility']) {
    urls.push({ loc: `${baseUrl}/${page}`, lastmod: now, changefreq: 'monthly', priority: '0.3' });
  }

  // Guides (English only), dated by their last update
  const guides = await allGuides();
  if (guides.length) urls.push({ loc: `${baseUrl}/guides`, lastmod: now, changefreq: 'weekly', priority: '0.6' });
  for (const g of guides) {
    urls.push({ loc: `${baseUrl}/guides/${g.id}`, lastmod: (g.data.updated ?? g.data.published).toISOString().split('T')[0], changefreq: 'monthly', priority: '0.6' });
  }

  // 3. Localized Homepages (8 locales)
  for (const locale of nonDefaultLocales) {
    urls.push({
      loc: `${baseUrl}/${locale}`,
      lastmod: now,
      changefreq: 'daily',
      priority: '0.9',
    });
  }

  // 4. Localized Tool Pages (8 locales × 27 tools = 216 routes)
  for (const locale of nonDefaultLocales) {
    for (const tool of TOOLS) {
      urls.push({
        loc: `${baseUrl}/${locale}/${tool.slug}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: tool.popular ? '0.8' : '0.7',
      });
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
