import type { APIRoute } from 'astro';
import { TOOLS_REGISTRY } from '../config/tools';
import { SITE_CONFIG } from '../config/site';
import { NON_DEFAULT_LOCALES } from '../i18n/locales';

export const GET: APIRoute = async () => {
  const BASE_URL = (SITE_CONFIG.url || 'https://image-toolbox.aditya-s-nalawade742.workers.dev').replace(/\/+$/, '');
  const activeTools = TOOLS_REGISTRY.filter((t) => t.status === 'active');
  const now = new Date().toISOString().split('T')[0];

  const urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];

  // 1. Global English Homepage (Canonical & Default)
  urls.push({
    loc: `${BASE_URL}/`,
    lastmod: now,
    changefreq: 'daily',
    priority: '1.0'
  });

  // 2. English Canonical Tool Pages
  for (const tool of activeTools) {
    urls.push({
      loc: `${BASE_URL}/${tool.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9'
    });
  }

  // 3. Localized Homepages (es, fr, de, pt, it, ja, ko, id)
  for (const loc of NON_DEFAULT_LOCALES) {
    urls.push({
      loc: `${BASE_URL}/${loc.code}`,
      lastmod: now,
      changefreq: 'daily',
      priority: '0.95'
    });
  }

  // 4. Localized Tool Pages (8 locales * 27 tools = 216 pages)
  for (const loc of NON_DEFAULT_LOCALES) {
    for (const tool of activeTools) {
      urls.push({
        loc: `${BASE_URL}/${loc.code}/${tool.slug}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: '0.85'
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
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

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
