import React, { useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { createT, type Strings } from '../../i18n/strings';
import { track, searchTerm } from '../../lib/analytics/track';
import { loadIndex, toolHref, useToolMatches, type SearchItem } from './ToolSearch';
import { ToolResultList } from './ToolResultList';

interface Props {
  locale?: string;
  strings?: Strings;
  count: number;
  indexUrl: string;
}

// The field's results show the best few; the header search lists every match
const SHOWN = 8;

/** The home page's own search field: results open under it as the visitor types */
export function HomeSearch({ locale = 'en', strings = {}, count, indexUrl }: Props) {
  const t = useMemo(() => createT(strings), [strings]);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState(0);
  const [moved, setMoved] = useState(false);
  const opened = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { list: all, noMatch } = useToolMatches(items, query);
  const list = all.slice(0, SHOWN);
  const open = focused && query.trim() !== '' && items.length > 0;

  const prefetch = () => {
    loadIndex(indexUrl).then(setItems);
    if (!opened.current) {
      opened.current = true;
      track('search_open', { source: 'home' });
    }
  };

  const go = (idx: number) => {
    const tool = list[idx];
    if (!tool) return;
    track('search_select', { source: 'home', search_term: searchTerm(query), tool: tool.slug, position: idx + 1, suggested: noMatch ? 1 : 0 });
    window.location.href = toolHref(locale, tool.slug);
  };

  return (
    <div className="relative" role="search">
      <div className="flex items-center gap-3 h-[52px] pl-4 pr-1.5 rounded-md border border-ink bg-paper-bright focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#0072b0]">
        <Search className="w-5 h-5 shrink-0 text-ink" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-label={t('search.dialogLabel')}
          aria-expanded={open}
          aria-controls="home-search-results"
          aria-autocomplete="list"
          aria-activedescendant={open && list[selected] ? `home-search-results-${list[selected].slug}` : undefined}
          autoComplete="off"
          enterKeyHint="go"
          value={query}
          placeholder={t('search.placeholder', { count })}
          onFocus={() => {
            setFocused(true);
            prefetch();
          }}
          onBlur={() => setFocused(false)}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(0);
            setMoved(false);
            prefetch();
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' && list.length) {
              e.preventDefault();
              setMoved(true);
              setSelected((p) => (p + 1) % list.length);
            } else if (e.key === 'ArrowUp' && list.length) {
              e.preventDefault();
              setMoved(true);
              setSelected((p) => (p - 1 + list.length) % list.length);
            } else if (e.key === 'Enter' && list[selected] && (!noMatch || moved)) {
              e.preventDefault();
              go(selected);
            } else if (e.key === 'Escape') {
              setQuery('');
            }
          }}
          className="flex-1 min-w-0 h-full bg-transparent text-[17px] text-ink placeholder:text-graphite focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md text-ink hover:bg-paper-stock"
            aria-label={t('search.clear')}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {open && (
        // Keeps focus in the field while a result is pressed, so the click lands before the list closes
        <div className="absolute inset-x-0 top-full mt-2 z-30 bg-paper border border-ink rounded-xl shadow-lg overflow-hidden" onMouseDown={(e) => e.preventDefault()}>
          <div className="max-h-[min(60vh,28rem)] overflow-y-auto">
            <ToolResultList
              id="home-search-results"
              label={t('search.results')}
              tools={list}
              selected={selected}
              onPick={go}
              onHover={setSelected}
              emptyNote={noMatch ? t('search.noResults', { query }) : undefined}
              suggestionsLabel={t('search.popular')}
            />
          </div>
        </div>
      )}
    </div>
  );
}
