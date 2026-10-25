import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ui, languages, defaultLang, showDefaultLang } from '../../i18n/ui';

interface Props {
  currentLocale: string;
  currentSlug?: string;
}

type Lang = keyof typeof ui;

// Phrased in the visitor's own language, since that's the one they read
function phrase(lang: Lang, key: 'banner.available' | 'banner.switchTo' | 'banner.dismiss', language: string) {
  const dict = ui[lang] as Record<string, string>;
  const fallback = ui[defaultLang] as Record<string, string>;
  return (dict[key] ?? fallback[key] ?? key).split('{language}').join(language);
}

export function LanguageBanner({ currentLocale = 'en', currentSlug = '' }: Props) {
  const [suggestion, setSuggestion] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem('it_dismiss_lang_banner')) return;
    } catch {
      return;
    }

    const browserLang = (navigator.language || '').toLowerCase();
    // India stays on English: Hindi and Indian-English browsers get no suggestion
    if (browserLang.includes('-in') || browserLang.startsWith('hi')) return;

    const detected = browserLang.slice(0, 2) as Lang;
    if (detected !== currentLocale && detected in languages) setSuggestion(detected);
  }, [currentLocale]);

  if (!suggestion) return null;

  const cleanSlug = currentSlug ? currentSlug.replace(/^\//, '') : '';
  const targetUrl =
    !showDefaultLang && suggestion === defaultLang
      ? cleanSlug ? `/${cleanSlug}` : '/'
      : cleanSlug ? `/${suggestion}/${cleanSlug}` : `/${suggestion}/`;
  const languageName = languages[suggestion];

  const handleDismiss = () => {
    try {
      localStorage.setItem('it_dismiss_lang_banner', 'true');
    } catch {
      // storage unavailable: dismiss for this page view only
    }
    setSuggestion(null);
  };

  return (
    <aside lang={suggestion} aria-labelledby="lang-banner-text" className="bg-process-yellow text-ink border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 text-[15px]">
        <span id="lang-banner-text">{phrase(suggestion, 'banner.available', languageName)}</span>
        <div className="flex items-center gap-1 shrink-0">
          <a href={targetUrl} className="btn-ink min-h-[36px] px-3 text-[14px]">
            {phrase(suggestion, 'banner.switchTo', languageName)}
          </a>
          <button
            type="button"
            onClick={handleDismiss}
            className="p-2 text-ink hover:bg-paper/60"
            aria-label={phrase(suggestion, 'banner.dismiss', languageName)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
