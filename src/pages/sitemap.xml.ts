import type { APIRoute } from 'astro';
import { TOOLS_REGISTRY } from '../config/tools';
import { SITE_CONFIG } from '../config/site';

export const GET: APIRoute = async () => {
  const BASE_URL = SITE_CONFIG.url;
  const activeTools = TOOLS_REGISTRY.filter((t) => t.status === 'active');
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${activeTools
    .map(
      (tool) => `
  <url>
    <loc>${BASE_URL}/${tool.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
