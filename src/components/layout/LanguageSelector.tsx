'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { SUPPORTED_LOCALES, getLocaleConfig, getLocalizedUrl } from '@/i18n/locales';

interface LanguageSelectorProps {
  currentLocale: string;
  toolSlug?: string;
  isCompact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLocale = 'en',
  toolSlug = '',
  isCompact = false
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLocale = getLocaleConfig(currentLocale);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectLanguage = (targetCode: string) => {
    try {
      localStorage.setItem('image_toolbox_lang', targetCode);
    } catch {}

    const targetUrl = getLocalizedUrl(toolSlug, targetCode);
    setIsOpen(false);
    window.location.href = targetUrl;
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select language. Currently ${activeLocale.nativeName}`}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        <span className="text-sm">{activeLocale.flag}</span>
        {!isCompact && (
          <span className="hidden sm:inline-block font-medium">
            {activeLocale.nativeName}
          </span>
        )}
        <span className="sm:hidden font-mono uppercase font-bold text-[10px]">
          {activeLocale.code}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-52 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] shadow-xl shadow-slate-900/10 dark:shadow-sky-950/20 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/80 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Select Language / Idioma
          </div>
          <div className="max-h-72 overflow-y-auto py-1 space-y-0.5">
            {SUPPORTED_LOCALES.map(loc => {
              const isSelected = loc.code === activeLocale.code;
              return (
                <button
                  key={loc.code}
                  type="button"
                  onClick={() => handleSelectLanguage(loc.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-medium rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{loc.flag}</span>
                    <div className="flex flex-col">
                      <span className="leading-tight">{loc.nativeName}</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">{loc.name}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-sky-500" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
