export function getWebApplicationSchema(toolName: string, description: string, url: string, locale: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${toolName} — Image Toolbox`,
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
