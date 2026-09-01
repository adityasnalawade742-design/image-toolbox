export interface LocaleConfig {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  isDefault?: boolean;
}

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', isDefault: true },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt-br', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' }
];

export const UI_STRINGS = {
  en: {
    brandName: 'Image Toolbox',
    tagline: 'Free Online Image Tools',
    supportingMessage: 'Crop, resize, compress, convert, and optimize images directly in your browser.',
    chooseImage: 'Choose Image',
    orDragAndDrop: 'or drag and drop here',
    pasteHint: 'Supports Ctrl+V / ⌘+V clipboard paste',
    browseTools: 'Browse Tools',
    popularTools: 'Popular Tools',
    allTools: 'All Image Tools',
    privateByDesign: 'Private by Design',
    privacyExplanation: 'Your images are processed directly in your browser. Files never leave your device or get uploaded to external servers.',
    howToUse: 'How to Use',
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    relatedTools: 'Related Tools',
    download: 'Download',
    processing: 'Processing...',
    reset: 'Reset',
    width: 'Width',
    height: 'Height',
    quality: 'Quality',
    format: 'Format',
    aspectRatio: 'Aspect Ratio',
    originalSize: 'Original Size',
    newSize: 'New Size',
    savings: 'Saved',
    dimensions: 'Dimensions',
    freeform: 'Freeform',
    circle: 'Circle / Avatar',
  }
};
