import { SUPPORTED_LOCALES } from '@/i18n/locales';

export const SITE_CONFIG = {
  name: 'Image Toolbox',
  tagline: 'Precision Image Tools in Your Browser',
  description: 'Free, fast, and privacy-first online image tools. Crop, resize, compress, convert, and optimize images directly in your browser with zero server uploads.',
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://image-toolbox.aditya-s-nalawade742.workers.dev',
  author: 'Image Toolbox Team',
  twitterHandle: '@imagetoolbox',
  defaultLocale: 'en',
  locales: SUPPORTED_LOCALES.map(l => l.code),
};
