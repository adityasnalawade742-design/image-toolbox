import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import type { ToolCategory } from '../../config/tools';
import { showDefaultLang, defaultLang } from '../../i18n/ui';
import { createT, type Strings } from '../../i18n/strings';
import { trapTab } from './dialogFocus';
import { rankTools } from '../../lib/search/rank';
import { track, searchTerm } from '../../lib/analytics/track';
import { ToolResultList } from './ToolResultList';

/** One tool, in the page's language. Built by Header.astro so the full tool content of every language stays out of the bundle. */
export interface SearchItem {
  slug: string;
  category: ToolCategory;
  name: string;
  tagline: string;
  keywords: string[];
  popular?: boolean;
}

interface Props {
  locale?: string;
  strings?: Strings;
  /** How many tools there are (shown before the index has loaded) */
  count: number;
  /** The search index for this language, fetched the first time search is about to open */
  indexUrl: string;
}

let indexCache: { url: string; items: Promise<SearchItem[]> } | null = null;
/** The search index for a language, fetched once and shared by every search field on the page */
export const loadIndex = (url: string) => {
  if (indexCache?.url !== url) {
    const items = fetch(url).then((r) => (r.ok ? (r.json() as Promise<SearchItem[]>) : []));
    // A failed fetch (offline) is tried again next time
    items.then((list) => !list.length && (indexCache = null), () => (indexCache = null));
    indexCache = { url, items: items.catch(() => []) };
  }
  return indexCache.items;
};

/** The tools to show for a query: the matches, or popular tools when nothing matches (so there's always somewhere to go) */
export function useToolMatches(items: SearchItem[], query: string) {
  // Best matches first: understands "image to pdf", synonyms, partial words and small typos
  const matches = useMemo(() => rankTools(items, query), [items, query]);
  const noMatch = query.trim() !== '' && items.length > 0 && matches.length === 0;
  const list = useMemo(() => (noMatch ? items.filter((i) => i.popular).slice(0, 6) : matches), [noMatch, items, matches]);
  return { list, matches, noMatch };
}

export const toolHref = (locale: string, slug: string) => (!showDefaultLang && locale === defaultLang ? `/${slug}` : `/${locale}/${slug}`);

export function ToolSearch({ locale = 'en', strings = {}, count, indexUrl }: Props) {
  const t = useMemo(() => createT(strings), [strings]);
  const [items, setItems] = useState<SearchItem[]>([]);
  const prefetch = () => {
    loadIndex(indexUrl).then(setItems);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Suggestions shown for a query that matched nothing open with Enter only after the visitor moved to one
  const [moved, setMoved] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
      prefetch();
      setSelectedIndex(0);
      track('search_open', { source: 'header' });
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const { list, noMatch } = useToolMatches(items, query);

  const go = (idx: number) => {
    const tool = list[idx];
    if (!tool) return;
    track('search_select', { source: 'header', search_term: searchTerm(query), tool: tool.slug, position: idx + 1, suggested: noMatch ? 1 : 0 });
    window.location.href = toolHref(locale, tool.slug);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        onPointerEnter={prefetch}
        onFocus={prefetch}
        onTouchStart={prefetch}
        className="flex items-center gap-2 h-10 px-3 rounded-md whitespace-nowrap text-[15px] text-ink bg-paper-bright border border-ink hover:bg-paper-stock transition-colors"
        aria-haspopup="dialog"
      >
        <Search className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">{t('search.trigger')}</span>
        <span className="sr-only sm:hidden">{t('search.trigger')}</span>
        <kbd className="hidden md:inline rounded-xs text-[12px] text-graphite border border-pencil px-1 leading-5">
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
            className="w-full max-w-xl bg-paper border border-ink rounded-xl overflow-hidden shadow-lg"
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                close();
                return;
              }
              trapTab(e);
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
                aria-activedescendant={list[selectedIndex] ? `tool-search-results-${list[selectedIndex].slug}` : undefined}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                  setMoved(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setMoved(true);
                    setSelectedIndex((prev) => (prev + 1) % Math.max(1, list.length));
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setMoved(true);
                    setSelectedIndex((prev) => (prev - 1 + list.length) % Math.max(1, list.length));
                  } else if (e.key === 'Enter' && list[selectedIndex] && (!noMatch || moved)) {
                    go(selectedIndex);
                  }
                }}
                placeholder={t('search.placeholder', { count })}
                className="w-full bg-transparent text-lg text-ink placeholder:text-graphite focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              <button type="button" onClick={close} className="w-10 h-10 -mr-2 flex items-center justify-center text-ink hover:bg-paper-stock" aria-label={t('search.close')}>
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto">
              <ToolResultList
                id="tool-search-results"
                label={t('search.results')}
                tools={list}
                selected={selectedIndex}
                onPick={go}
                onHover={setSelectedIndex}
                emptyNote={noMatch ? t('search.noResults', { query }) : undefined}
                suggestionsLabel={t('search.popular')}
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-2 border-t border-ink text-[12px] text-graphite">
              {/* Keys only help with a keyboard; touch screens get just the count */}
              <span className="hidden [@media(pointer:fine)]:inline">{t('search.hint')}</span>
              <span className="ml-auto" data-measure>{t('search.count', { count: noMatch ? 0 : list.length })}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
