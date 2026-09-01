export interface LocaleConfig {
  code: string;           // 'en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'id'
  name: string;           // 'Spanish', 'French', etc.
  nativeName: string;     // 'Español', 'Français', etc.
  flag: string;           // '🇪🇸', '🇫🇷', etc.
  isDefault?: boolean;
  countries: string[];    // Target country names for documentation & suggestions
}

export interface UIStrings {
  brandName: string;
  tagline: string;
  supportingMessage: string;
  home: string;
  tools: string;
  chooseImage: string;
  chooseImages: string;
  orDragAndDrop: string;
  pasteHint: string;
  browseTools: string;
  allTools: string;
  popularTools: string;
  privacyBadge: string;
  privacyExplanation: string;
  howToUse: string;
  frequentlyAskedQuestions: string;
  relatedTools: string;
  download: string;
  processing: string;
  reset: string;
  width: string;
  height: string;
  quality: string;
  format: string;
  aspectRatio: string;
  originalSize: string;
  newSize: string;
  saved: string;
  dimensions: string;
  freeform: string;
  circleAvatar: string;
  filterTools: string;
  searchToolsPlaceholder: string;
  noToolsFound: string;
  featuresTitle: string;
  step: string;
  language: string;
  switchLanguageSuggestion: string;
  switchLanguageBtn: string;
  dismiss: string;
  viewAll: string;
}

export interface LocalizedToolItem {
  name: string;
  shortName: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  howToSteps: Array<{
    title: string;
    description: string;
  }>;
  features: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LocalizedCategory {
  id: string;
  label: string;
  description: string;
}

export interface LocalizedHomeData {
  heroPill: string;
  heroHeadlineMain: string;
  heroHeadlineAccent: string;
  heroSubheadline: string;
  guarantee1: string;
  guarantee2: string;
  guarantee3: string;
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  categories: LocalizedCategory[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}
