export const SITE_CONFIG = {
  name: (typeof process !== 'undefined' && process.env?.PUBLIC_SITE_NAME) || (import.meta.env?.PUBLIC_SITE_NAME) || 'Image Toolbox',
  title: 'Precision Image Tools in Your Browser',
  description: 'Free, private, and ultra-fast client-side image processing. Crop, resize, compress, convert, and inspect images directly in your browser with zero server uploads.',
  url: ((typeof process !== 'undefined' && process.env?.PUBLIC_SITE_URL) || (import.meta.env?.PUBLIC_SITE_URL) || 'https://image-toolbox.aditya-s-nalawade742.workers.dev').replace(/\/$/, ''),
  author: 'Web Image Tools',
  locale: 'en',
  defaultTheme: 'dark',
};
