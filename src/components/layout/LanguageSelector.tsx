import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { languages, defaultLang, showDefaultLang } from '../../i18n/ui';
import { SupportedLocale } from '../../i18n/types';

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const cleanSlug = currentSlug ? currentSlug.replace(/^\//, '') : '';

  const getTargetUrl = (targetLocale: string) => {
    if (!showDefaultLang && targetLocale === defaultLang) {
      return cleanSlug ? `/${cleanSlug}` : '/';
    }
    return cleanSlug ? `/${targetLocale}/${cleanSlug}` : `/${targetLocale}/`;
  };

  const activeLangName = languages[currentLocale as keyof typeof languages] || 'English';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-body hover:text-ink bg-surface-elevated hover:bg-surface-card border border-hairline rounded-md transition-all h-[36px]"
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-accent-blue" />
        <span>{activeLangName}</span>
        <ChevronDown className={`w-3 h-3 text-mute transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 bg-surface-elevated border border-hairline rounded-lg shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {(Object.entries(languages) as [SupportedLocale, string][]).map(([code, label]) => {
            const isSelected = code === currentLocale;
            return (
              <a
                key={code}
                href={getTargetUrl(code)}
                className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                  isSelected
                    ? 'bg-accent-blue/15 text-accent-blue font-semibold'
                    : 'text-body hover:bg-surface-card hover:text-ink'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{label}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
