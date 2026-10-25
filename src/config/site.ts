export const SITE_CONFIG = {
  name: (typeof process !== 'undefined' && process.env?.PUBLIC_SITE_NAME) || (import.meta.env?.PUBLIC_SITE_NAME) || 'Image Toolbox',
  title: 'Precision Image Tools in Your Browser',
  description: 'Free, private, and ultra-fast client-side image processing. Crop, resize, compress, convert, and inspect images directly in your browser with zero server uploads.',
  url: ((typeof process !== 'undefined' && process.env?.PUBLIC_SITE_URL) || (import.meta.env?.PUBLIC_SITE_URL) || 'https://image-toolbox.aditya-s-nalawade742.workers.dev').replace(/\/$/, ''),
  author: 'Aditya Nalawade',
  // Named in the privacy policy, terms and about page
  operator: 'Aditya Nalawade',
  operatorCountry: 'India',
  contactEmail: (typeof process !== 'undefined' && process.env?.PUBLIC_CONTACT_EMAIL) || (import.meta.env?.PUBLIC_CONTACT_EMAIL) || 'itsdenshin@gmail.com',
  // AGPL-3.0 section 13: the site must offer its source code to everyone who uses it over the network
  sourceUrl: (typeof process !== 'undefined' && process.env?.PUBLIC_SOURCE_URL) || (import.meta.env?.PUBLIC_SOURCE_URL) || 'https://github.com/adityasnalawade742-design/image-toolbox',
  issuesUrl: `${(typeof process !== 'undefined' && process.env?.PUBLIC_SOURCE_URL) || (import.meta.env?.PUBLIC_SOURCE_URL) || 'https://github.com/adityasnalawade742-design/image-toolbox'}/issues`,
  locale: 'en',
  defaultTheme: 'light',
};
