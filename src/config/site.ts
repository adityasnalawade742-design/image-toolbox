export const SITE_CONFIG = {
  name: (typeof process !== 'undefined' && process.env?.PUBLIC_SITE_NAME) || (import.meta.env?.PUBLIC_SITE_NAME) || 'TadaFile',
  title: 'Precision Image Tools in Your Browser',
  description: 'Free image and PDF tools. Crop, resize, compress, convert and edit images in your browser without uploading them, and merge, sign or convert PDFs.',
  url: ((typeof process !== 'undefined' && process.env?.PUBLIC_SITE_URL) || (import.meta.env?.PUBLIC_SITE_URL) || 'https://tadafile.com').replace(/\/$/, ''),
  author: 'Aditya Nalawade',
  // Named in the privacy policy, terms and about page
  operator: 'Aditya Nalawade',
  operatorCountry: 'India',
  contactEmail: (typeof process !== 'undefined' && process.env?.PUBLIC_CONTACT_EMAIL) || (import.meta.env?.PUBLIC_CONTACT_EMAIL) || 'aditya.contact142@gmail.com',
  // AGPL-3.0 section 13: the site must offer its source code to everyone who uses it over the network
  /** Google Analytics 4 measurement ID; empty turns analytics off */
  gaId: (typeof process !== 'undefined' && process.env?.PUBLIC_GA_ID) ?? (import.meta.env?.PUBLIC_GA_ID) ?? 'G-90H8NVXNYX',
  sourceUrl: (typeof process !== 'undefined' && process.env?.PUBLIC_SOURCE_URL) || (import.meta.env?.PUBLIC_SOURCE_URL) || 'https://github.com/adityasnalawade742-design/image-toolbox',
  issuesUrl: `${(typeof process !== 'undefined' && process.env?.PUBLIC_SOURCE_URL) || (import.meta.env?.PUBLIC_SOURCE_URL) || 'https://github.com/adityasnalawade742-design/image-toolbox'}/issues`,
  locale: 'en',
  defaultTheme: 'light',
};
