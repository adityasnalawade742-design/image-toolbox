export type SupportedLocale = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ja' | 'ko' | 'id';

export interface LocaleInfo {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
  hrefLang: string;
}

export interface HowToStep {
  title: string;
  description: string;
}

export interface ToolFeature {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocalizedToolItem {
  name: string;
  shortName: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  howToSteps: HowToStep[];
  features: ToolFeature[];
  faqs: FAQItem[];
}

export interface LocalizedHomeData {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
  };
  trustPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  categoryNames: Record<string, string>;
  faqs: FAQItem[];
}
