import { ToolItem } from '@/types/tool';
import { SITE_CONFIG } from '@/config/site';

export function generateToolStructuredData(tool: ToolItem) {
  const schemaList: Record<string, unknown>[] = [];
  const BASE_URL = SITE_CONFIG.url;

  // 1. WebApplication Schema
  schemaList.push({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    url: `${BASE_URL}/${tool.slug}`,
    description: tool.seoDescription,
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
        name: 'Home',
        item: BASE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: `${BASE_URL}#tools`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tool.name,
        item: `${BASE_URL}/${tool.slug}`
      }
    ]
  });

  // 3. FAQPage Schema (if FAQs exist)
  if (tool.faqs && tool.faqs.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tool.faqs.map(faq => ({
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

export function generateWebsiteStructuredData() {
  const BASE_URL = SITE_CONFIG.url;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: BASE_URL,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
