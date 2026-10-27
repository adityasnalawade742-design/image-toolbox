import React, { useState, useRef, useEffect, useId } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { defaultLang, showDefaultLang } from '../../i18n/ui';
import { SUPPORTED_LOCALES } from '../../i18n/locales';
import type { SupportedLocale } from '../../i18n/types';

interface Props {
  currentLocale: string;
  currentSlug?: string;
  /** Translated "Language" label for the button's accessible name */
  languageLabel?: string;
}

export function LanguageSelector({ currentLocale = 'en', currentSlug = '', languageLabel = 'Language' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && dropdownRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
        buttonRef.current?.focus();
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
    <div
      className="relative"
      ref={dropdownRef}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={listId}
        className="flex items-center gap-2 h-10 px-3 rounded-md text-[15px] text-ink bg-paper-bright border border-ink hover:bg-paper-stock transition-colors"
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">{languageLabel}: </span>
        <span className="hidden sm:inline truncate max-w-[110px]">{currentInfo.nativeName}</span>
        <span className="sm:hidden uppercase text-[13px] font-semibold">{currentInfo.code}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul
          id={listId}
          className="absolute right-0 mt-2 w-60 bg-paper border border-ink rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto divide-y divide-pencil-soft"
        >
          {(Object.entries(SUPPORTED_LOCALES) as [SupportedLocale, typeof currentInfo][]).map(([code, info]) => {
            const isSelected = code === currentLocale;
            return (
              <li key={code}>
              <a
                href={getTargetUrl(code)}
                onClick={() => handleSelectLanguage(code)}
                lang={info.hrefLang}
                aria-current={isSelected ? 'page' : undefined}
                className={`flex items-center justify-between gap-3 px-4 min-h-[44px] text-[15px] transition-colors ${
                  isSelected ? 'seg-on' : 'text-ink hover:bg-paper-stock'
                }`}
              >
                <span>{info.nativeName}</span>
                {info.name !== info.nativeName && (
                  <span className="text-[13px] text-graphite">{info.name}</span>
                )}
              </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
