import { esUi } from './ui/es';
import { frUi } from './ui/fr';
import { deUi } from './ui/de';
import { ptUi } from './ui/pt';
import { itUi } from './ui/it';
import { jaUi } from './ui/ja';
import { koUi } from './ui/ko';
import { idUi } from './ui/id';
import { trUi } from './ui/tr';

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  id: 'Bahasa Indonesia',
  tr: 'Türkçe',
} as const;

export const defaultLang = 'en' as const;
export const showDefaultLang = false; // Preserves unprefixed canonicals (/crop-image) for India & global SEO

export const ui = {
  en: {
    'nav.allTools': 'All Tools',
    'nav.skip': 'Skip to main content',
    'nav.edit': 'Edit',
    'nav.compress': 'Compress',
    'nav.convert': 'Convert',
    'nav.utilities': 'Utilities',
    'search.placeholder': 'Search 27 precision image tools... (Ctrl+K)',
    'search.noResults': 'No matching tools found.',
    'dropzone.title': 'Drop your images here or click to browse',
    'dropzone.subtitle': 'Supports PNG, JPG, WebP, SVG, AVIF, GIF — 100% in-browser processing',
    'dropzone.button': 'Choose Image',
    'banner.message': 'Viewing in English. Would you like to switch to',
    'banner.switch': 'Switch',
    'banner.dismiss': 'Dismiss',
    'banner.available': 'This page is also available in {language}.',
    'banner.switchTo': 'Switch to {language}',
    'nav.toolIndex': 'Tool index',
    'home.specTools': 'Tools',
    'home.specFormats': 'Formats',
    'home.specUploads': 'Uploads',
    'tool.home': 'Home',
    'tool.howTo': 'How to use {tool}',
    'tool.features': 'What it does',
    'tool.faq': 'Questions',
    'tool.related': 'Related tools',
    'tool.faviconGuideTitle': 'Installing your favicons',
    'tool.faviconGuideText': 'Unzip the package into your website’s root folder, then add these tags inside your page’s <head>:',
    'ad.label': 'Advertisement',
    'footer.tagline': 'Free image tools that run on your device. Nothing is uploaded.',
    'footer.popular': 'Popular tools',
    'footer.categories': 'Categories',
    'footer.sitemap': 'Sitemap',
    'footer.source': "Source code (AGPL-3.0)",
    'footer.toolCount': '{count} tools · 10 languages · no sign-up',
    'workspace.uploadNew': 'Upload Different Image',
    'workspace.download': 'Download Processed Image',
    'workspace.processing': 'Processing...',
    'workspace.original': 'Original',
    'workspace.processed': 'Processed',
    'footer.privacy': '100% Client-Side Privacy: Your images are processed in your browser and never uploaded to any server.',
    'footer.rights': 'All rights reserved.',
  },
  es: esUi,
  fr: frUi,
  de: deUi,
  pt: ptUi,
  it: itUi,
  ja: jaUi,
  ko: koUi,
  id: idUi,
  tr: trUi,
} as const;

export const routes: Record<string, Record<string, string>> = {};
