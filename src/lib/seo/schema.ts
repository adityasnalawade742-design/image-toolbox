import { ToolItem } from '@/types/tool';
import { SITE_CONFIG } from '@/config/site';
import { getLocalizedToolContent } from '@/i18n/tools';
import { getUIStrings } from '@/i18n/ui';
import { getLocalizedUrl } from '@/i18n/locales';

export function generateToolStructuredData(tool: ToolItem, locale: string = 'en') {
  const schemaList: Record<string, unknown>[] = [];
  const BASE_URL = (SITE_CONFIG.url || 'https://image-toolbox.aditya-s-nalawade742.workers.dev').replace(/\/+$/, '');

  const loc = getLocalizedToolContent(tool.slug, locale);
  const ui = getUIStrings(locale);
  const toolUrl = `${BASE_URL}${getLocalizedUrl(tool.slug, locale)}`;
  const homeUrl = `${BASE_URL}${getLocalizedUrl('', locale)}`;

  // 1. WebApplication Schema
  schemaList.push({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: loc.name || tool.name,
    url: toolUrl,
    description: loc.seoDescription || tool.seoDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All modern web browsers',
    browserRequirements: 'Requires JavaScript and HTML5 Canvas support',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  });

  // 2. BreadcrumbList Schema
  schemaList.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: ui.home,
        item: homeUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: ui.tools,
        item: `${homeUrl}#tools`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: loc.name || tool.name,
        item: toolUrl
      }
    ]
  });

  // 3. FAQPage Schema
  const faqs = loc.faqs && loc.faqs.length > 0 ? loc.faqs : tool.faqs;
  if (faqs && faqs.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return schemaList;
}

export function generateWebsiteStructuredData(locale: string = 'en') {
  const BASE_URL = (SITE_CONFIG.url || 'https://image-toolbox.aditya-s-nalawade742.workers.dev').replace(/\/+$/, '');
  const ui = getUIStrings(locale);
  const homeUrl = `${BASE_URL}${getLocalizedUrl('', locale)}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ui.brandName,
    url: homeUrl,
    description: ui.supportingMessage,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${homeUrl}?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
