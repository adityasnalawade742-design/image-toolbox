import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../config/site';
import { CATEGORIES, SERVER_TOOLS, TOOLS, type ToolCategory } from '../config/tools';
import { getLocalizedToolContent } from '../i18n/tools';
import { SUPPORTED_LOCALES } from '../i18n/locales';

/**
 * /llms.txt (llmstxt.org): a plain summary of the site for AI assistants and answer engines, built from the same
 * tool list as the pages, so it never goes out of date.
 */
export const GET: APIRoute = async () => {
  const base = SITE_CONFIG.url;
  const languages = Object.values(SUPPORTED_LOCALES).map((l) => l.name);
  const lines: string[] = [
    `# ${SITE_CONFIG.name}`,
    '',
    `> ${SITE_CONFIG.description}`,
    '',
    `${SITE_CONFIG.name} has ${TOOLS.length} free tools. There is no sign-up and no watermark on results. Image tools run entirely in the browser, so the files never leave the device. A few document tools need software that can't run in a browser: they send the file to our server, say so on the page, and delete it as soon as the result is sent back (marked "server" below).`,
    '',
    `Every tool page is available in ${languages.length} languages (${languages.join(', ')}); add the language code to the address, for example ${base}/es/compress-image.`,
    '',
  ];
  for (const [id, cat] of Object.entries(CATEGORIES) as [ToolCategory, (typeof CATEGORIES)[ToolCategory]][]) {
    const tools = TOOLS.filter((t) => t.category === id);
    if (!tools.length) continue;
    lines.push(`## ${cat.name}`, '', cat.description, '');
    for (const t of tools) {
      const text = getLocalizedToolContent(t.slug, 'en');
      const summary = (text.tagline || t.description).trim();
      lines.push(`- [${text.name || t.name}](${base}/${t.slug}): ${summary}${SERVER_TOOLS.has(t.slug) ? ' (server)' : ''}`);
    }
    lines.push('');
  }
  lines.push(
    '## Optional',
    '',
    `- [About](${base}/about): who makes ${SITE_CONFIG.name} and how the tools work`,
    `- [Privacy](${base}/privacy): what happens to files and data`,
    `- [Accessibility](${base}/accessibility): keyboard, screen reader and zoom support`,
    `- [Contact](${base}/contact)`,
    `- [Source code](${SITE_CONFIG.sourceUrl}): AGPL-3.0`,
    ''
  );
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
  });
};
