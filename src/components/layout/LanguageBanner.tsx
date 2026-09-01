import React, { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';
import { languages, defaultLang, showDefaultLang } from '../../i18n/ui';

interface Props {
  currentLocale: string;
  currentSlug?: string;
}

export function LanguageBanner({ currentLocale = 'en', currentSlug = '' }: Props) {
  const [suggestion, setSuggestion] = useState<{ code: string; label: string } | null>(null);

  useEffect(() => {
    if (localStorage.getItem('it_dismiss_lang_banner')) return;

    const browserLang = (navigator.language || '').toLowerCase();
    
    // Core Rule: India remains English. Ignore Hindi or Indian regional redirects.
    if (browserLang.includes('-in') || browserLang.startsWith('hi')) return;

    let detectedCode = '';
    if (browserLang.startsWith('es')) detectedCode = 'es';
    else if (browserLang.startsWith('fr')) detectedCode = 'fr';
    else if (browserLang.startsWith('de')) detectedCode = 'de';
    else if (browserLang.startsWith('pt')) detectedCode = 'pt';
    else if (browserLang.startsWith('it')) detectedCode = 'it';
    else if (browserLang.startsWith('ja')) detectedCode = 'ja';
    else if (browserLang.startsWith('ko')) detectedCode = 'ko';
    else if (browserLang.startsWith('id')) detectedCode = 'id';

    if (detectedCode && detectedCode !== currentLocale && languages[detectedCode as keyof typeof languages]) {
      setSuggestion({
        code: detectedCode,
        label: languages[detectedCode as keyof typeof languages],
      });
    }
  }, [currentLocale]);

  if (!suggestion) return null;

  const cleanSlug = currentSlug ? currentSlug.replace(/^\//, '') : '';
  const targetUrl = !showDefaultLang && suggestion.code === defaultLang
    ? (cleanSlug ? `/${cleanSlug}` : '/')
    : (cleanSlug ? `/${suggestion.code}/${cleanSlug}` : `/${suggestion.code}/`);

  const handleDismiss = () => {
    localStorage.setItem('it_dismiss_lang_banner', 'true');
    setSuggestion(null);
  };

  return (
    <div className="bg-surface border-b border-hairline px-4 py-2.5 text-xs text-body">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Globe className="w-4 h-4 text-accent-blue shrink-0" />
          <span>
            Viewing in {languages[currentLocale as keyof typeof languages] || 'English'}. Would you like to switch to <strong className="text-ink">{suggestion.label}</strong>?
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={targetUrl}
            className="px-3 py-1 bg-white hover:bg-neutral-200 text-black font-medium rounded-md transition-colors"
          >
            Switch to {suggestion.label}
          </a>
          <button
            onClick={handleDismiss}
            className="p-1 text-mute hover:text-ink transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
