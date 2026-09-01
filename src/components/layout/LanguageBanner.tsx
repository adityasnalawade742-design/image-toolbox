'use client';

import React, { useState, useEffect } from 'react';
import { Globe, X, ArrowRight } from 'lucide-react';
import { SUPPORTED_LOCALES, getLocaleConfig, getLocalizedUrl } from '@/i18n/locales';

interface LanguageBannerProps {
  currentLocale: string;
  toolSlug?: string;
}

export const LanguageBanner: React.FC<LanguageBannerProps> = ({
  currentLocale = 'en',
  toolSlug = ''
}) => {
  const [suggestion, setSuggestion] = useState<{
    code: string;
    nativeName: string;
    targetUrl: string;
  } | null>(null);

  useEffect(() => {
    // 1. Check if user already dismissed banner or manually chose language
    try {
      const dismissed = localStorage.getItem('image_toolbox_dismiss_lang_banner');
      const savedLang = localStorage.getItem('image_toolbox_lang');
      if (dismissed || savedLang) return;
    } catch {}

    // 2. Detect browser language
    if (typeof window === 'undefined' || !navigator.language) return;

    const browserLang = navigator.language.toLowerCase();

    // 3. Strict India Rule: India always stays English by default
    if (browserLang.includes('-in') || browserLang === 'hi' || browserLang.startsWith('hi-')) {
      return;
    }

    // 4. Find matching supported non-default locale (e.g. 'es-ES' -> 'es', 'fr-FR' -> 'fr')
    const primaryCode = browserLang.split('-')[0];
    if (primaryCode === currentLocale) return;

    const matchedLocale = SUPPORTED_LOCALES.find(
      l => !l.isDefault && (l.code === primaryCode || browserLang.startsWith(l.code))
    );

    if (matchedLocale && matchedLocale.code !== currentLocale) {
      const targetUrl = getLocalizedUrl(toolSlug, matchedLocale.code);
      setSuggestion({
        code: matchedLocale.code,
        nativeName: matchedLocale.nativeName,
        targetUrl
      });
    }
  }, [currentLocale, toolSlug]);

  const handleDismiss = () => {
    try {
      localStorage.setItem('image_toolbox_dismiss_lang_banner', 'true');
    } catch {}
    setSuggestion(null);
  };

  const handleAccept = () => {
    if (!suggestion) return;
    try {
      localStorage.setItem('image_toolbox_lang', suggestion.code);
    } catch {}
    window.location.href = suggestion.targetUrl;
  };

  if (!suggestion) return null;

  return (
    <aside aria-label="Language recommendation" className="w-full bg-gradient-to-r from-sky-950/90 via-slate-900/90 to-sky-950/90 border-b border-sky-500/30 text-white px-4 py-2 text-xs shadow-md backdrop-blur-md animate-in slide-in-from-top-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <span className="text-slate-200">
            Viewing in {getLocaleConfig(currentLocale).nativeName}. Would you like to switch to{' '}
            <strong className="text-sky-400 font-bold">{suggestion.nativeName}</strong>?
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all shadow-sm"
          >
            <span>Switch to {suggestion.nativeName}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss language suggestion"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
