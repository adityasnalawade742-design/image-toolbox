import { SITE_CONFIG } from '../../config/site';

export function getWebApplicationSchema(toolName: string, description: string, url: string, locale: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${toolName} — TadaFile`,
    description: description,
    url: url,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any (Web Browser)',
    inLanguage: locale,
    browserRequirements: 'Requires JavaScript. Requires HTML5 Canvas support.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };
}

const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;

/** Who runs the site: helps search engines and AI assistants recognise the brand (homepage) */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_CONFIG.name,
    url: `${SITE_CONFIG.url}/`,
    logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icon-512.png`, width: 512, height: 512 },
    description: SITE_CONFIG.description,
    sameAs: [SITE_CONFIG.sourceUrl],
  };
}

/** The site itself, in the page's language, published by the organization (homepage) */
export function getWebSiteSchema(locale: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url,
    description,
    inLanguage: locale,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** A collection page listing tools: what the page is, and the tools on it in order */
export function getCollectionSchema(name: string, description: string, url: string, locale: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    inLanguage: locale,
    isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, url: item.url })),
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
