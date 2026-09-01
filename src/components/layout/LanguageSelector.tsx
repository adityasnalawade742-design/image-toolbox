import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { defaultLang, showDefaultLang } from '../../i18n/ui';
import { SUPPORTED_LOCALES } from '../../i18n/locales';
import type { SupportedLocale } from '../../i18n/types';

interface Props {
  currentLocale: string;
  currentSlug?: string;
}

export function LanguageSelector({ currentLocale = 'en', currentSlug = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const cleanSlug = currentSlug ? currentSlug.replace(/^\//, '') : '';

  const getTargetUrl = (targetLocale: string) => {
    if (!showDefaultLang && targetLocale === defaultLang) {
      return cleanSlug ? `/${cleanSlug}` : '/';
    }
    return cleanSlug ? `/${targetLocale}/${cleanSlug}` : `/${targetLocale}/`;
  };

  const handleSelectLanguage = (code: string) => {
    try {
      localStorage.setItem('it_preferred_lang', code);
    } catch {
      // localStorage may be disabled
    }
    setIsOpen(false);
  };

  const currentInfo = SUPPORTED_LOCALES[currentLocale as SupportedLocale] || SUPPORTED_LOCALES.en;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-body hover:text-ink bg-surface-elevated hover:bg-surface-card border border-hairline rounded-md transition-all h-[36px]"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-accent-blue" />
        <span className="truncate max-w-[100px]">{currentInfo.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-mute transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-1.5 w-52 bg-surface-elevated border border-hairline rounded-lg shadow-2xl py-1.5 z-50 max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150 divide-y divide-hairline-soft"
        >
          {(Object.entries(SUPPORTED_LOCALES) as [SupportedLocale, typeof currentInfo][]).map(([code, info]) => {
            const isSelected = code === currentLocale;
            return (
              <a
                key={code}
                role="menuitem"
                href={getTargetUrl(code)}
                onClick={() => handleSelectLanguage(code)}
                className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                  isSelected
                    ? 'bg-accent-blue/15 text-accent-blue font-semibold'
                    : 'text-body hover:bg-surface-card hover:text-ink'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{info.flag}</span>
                  <span className="font-medium text-ink">{info.nativeName}</span>
                  {info.name !== info.nativeName && (
                    <span className="text-[10px] text-mute font-sans">({info.name})</span>
                  )}
                </div>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0"></span>}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
