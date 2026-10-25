import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import { TOOLS } from '../../config/tools';
import { CATEGORY_INK } from '../../config/inks';
import { getAllLocalizedTools } from '../../i18n/tools';
import { showDefaultLang, defaultLang } from '../../i18n/ui';
import { createT, type Strings } from '../../i18n/strings';

interface Props {
  locale?: string;
  strings?: Strings;
}

export function ToolSearch({ locale = 'en', strings = {} }: Props) {
  const t = useMemo(() => createT(strings), [strings]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const localizedTools = getAllLocalizedTools(locale);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const q = query.trim().toLowerCase();
  const filteredTools = TOOLS.filter((tool) => {
    if (!q) return true;
    const loc = localizedTools[tool.slug];
    return [tool.slug, loc?.name || tool.name, loc?.tagline || tool.description, ...(loc?.keywords || [])].some((s) =>
      s.toLowerCase().includes(q)
    );
  });

  const getToolUrl = (slug: string) => (!showDefaultLang && locale === defaultLang ? `/${slug}` : `/${locale}/${slug}`);

  const go = (slug: string) => {
    window.location.href = getToolUrl(slug);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 h-10 px-3 whitespace-nowrap text-[15px] text-ink bg-paper-bright border border-ink hover:bg-paper-stock transition-colors"
        aria-haspopup="dialog"
      >
        <Search className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">{t('search.trigger')}</span>
        <span className="sr-only sm:hidden">{t('search.trigger')}</span>
        <kbd className="hidden md:inline text-[12px] text-graphite border border-pencil px-1 leading-5">
          {isMac ? '⌘K' : 'Ctrl K'}
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4 bg-process-key/40"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t('search.dialogLabel')}
            className="w-full max-w-xl bg-paper border border-ink"
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                close();
                return;
              }
              // Modal: Tab cycles inside the dialog instead of reaching the page behind it
              if (e.key === 'Tab') {
                const focusable = [...e.currentTarget.querySelectorAll<HTMLElement>('input, button, a[href], [tabindex]:not([tabindex="-1"])')].filter(
                  (el) => !el.hasAttribute('disabled') && el.getClientRects().length > 0
                );
                if (!focusable.length) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  first.focus();
                }
              }
            }}
          >
            <div className="color-bar" aria-hidden="true"><span /><span /><span /><span /></div>
            <div className="flex items-center gap-3 px-4 h-14 border-b border-ink focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#0072b0]">
              <Search className="w-5 h-5 text-ink shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                role="combobox"
                aria-expanded="true"
                aria-controls="tool-search-results"
                aria-activedescendant={filteredTools[selectedIndex] ? `tool-opt-${filteredTools[selectedIndex].slug}` : undefined}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredTools.length));
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev - 1 + filteredTools.length) % Math.max(1, filteredTools.length));
                  } else if (e.key === 'Enter' && filteredTools[selectedIndex]) {
                    go(filteredTools[selectedIndex].slug);
                  }
                }}
                placeholder={t('search.placeholder', { count: TOOLS.length })}
                className="w-full bg-transparent text-lg text-ink placeholder:text-graphite focus:outline-none"
              />
              <button type="button" onClick={close} className="w-10 h-10 -mr-2 flex items-center justify-center text-ink hover:bg-paper-stock" aria-label={t('search.close')}>
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <ul id="tool-search-results" role="listbox" aria-label={t('search.results')} className="max-h-[55vh] overflow-y-auto divide-y divide-pencil-soft">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool, idx) => {
                  const loc = localizedTools[tool.slug];
                  const isSelected = idx === selectedIndex;
                  return (
                    <li
                      key={tool.slug}
                      id={`tool-opt-${tool.slug}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => go(tool.slug)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${isSelected ? 'seg-on' : 'text-ink'}`}
                    >
                      <span className={`w-3 h-3 shrink-0 ${CATEGORY_INK[tool.category].className}`} aria-hidden="true" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-semibold">{loc?.name || tool.name}</span>
                        <span className="block text-[13px] truncate text-graphite">
                          {loc?.tagline || tool.description}
                        </span>
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </li>
                  );
                })
              ) : (
                <li className="px-4 py-10 text-center text-[15px] text-graphite">{t('search.noResults', { query })}</li>
              )}
            </ul>

            <div className="flex items-center justify-between px-4 py-2 border-t border-ink text-[12px] text-graphite">
              <span>{t('search.hint')}</span>
              <span data-measure>{t('search.count', { count: filteredTools.length })}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
