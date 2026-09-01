'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  Command, 
  ArrowRight,
  Crop, 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  FlipHorizontal, 
  RefreshCw, 
  ShieldCheck, 
  Info, 
  Pipette, 
  Palette, 
  Layers, 
  Type, 
  Square, 
  Circle, 
  Globe, 
  Binary, 
  Code, 
  FileCode
} from 'lucide-react';
import { getActiveTools } from '@/config/tools';
import { getLocalizedToolContent } from '@/i18n/tools';
import { getUIStrings } from '@/i18n/ui';
import { getLocalizedUrl } from '@/i18n/locales';

const ICON_MAP: Record<string, React.ElementType> = {
  Crop,
  Maximize2,
  Minimize2,
  RotateCw,
  FlipHorizontal,
  RefreshCw,
  ShieldCheck,
  Info,
  Pipette,
  Palette,
  Layers,
  Type,
  Square,
  Circle,
  Globe,
  Binary,
  Code,
  FileCode
};

interface ToolSearchProps {
  locale?: string;
}

export const ToolSearch: React.FC<ToolSearchProps> = ({ locale = 'en' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const ui = getUIStrings(locale);
  const activeTools = getActiveTools();

  // Map tools with their localized data
  const localizedTools = activeTools.map(tool => {
    const loc = getLocalizedToolContent(tool.slug, locale);
    return {
      ...tool,
      displayName: loc.name || tool.name,
      displayTagline: loc.tagline || tool.tagline,
      searchKeywords: [...tool.keywords, ...(loc.keywords || [])],
      localizedPath: getLocalizedUrl(tool.slug, locale)
    };
  });

  // Filter tools by query across localized name, tagline, keywords, and slug
  const results = query.trim() === ''
    ? localizedTools
    : localizedTools.filter(tool => {
        const q = query.toLowerCase().trim();
        return (
          tool.displayName.toLowerCase().includes(q) ||
          tool.displayTagline.toLowerCase().includes(q) ||
          tool.name.toLowerCase().includes(q) ||
          tool.tagline.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q) ||
          tool.slug.toLowerCase().includes(q) ||
          tool.searchKeywords.some(k => k.toLowerCase().includes(q))
        );
      });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % (results.length || 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      window.location.href = results[selectedIndex].localizedPath;
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:border-sky-500/50 transition-all text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label={ui.searchToolsPlaceholder}
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">
          {locale === 'en' ? 'Search 27 tools...' : ui.searchToolsPlaceholder.replace(' (Ctrl + K)...', '')}
        </span>
        <span className="inline sm:hidden">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-[10px] font-mono text-slate-400">
          <Command className="w-2.5 h-2.5" />K
        </kbd>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder={ui.searchToolsPlaceholder}
                className="w-full py-4 px-3 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-mono"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-50 dark:divide-slate-800/40">
              {results.length > 0 ? (
                results.map((tool, idx) => {
                  const Icon = ICON_MAP[tool.iconName] || Layers;
                  const isSelected = idx === selectedIndex;

                  return (
                    <a
                      key={tool.id}
                      href={tool.localizedPath}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-100'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 rounded-lg ${
                          isSelected 
                            ? 'bg-sky-600 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-xs sm:text-sm truncate">
                            {tool.displayName}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {tool.displayTagline}
                          </div>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isSelected ? 'translate-x-0.5 text-sky-600 dark:text-sky-400' : 'text-slate-300 dark:text-slate-700'
                      }`} />
                    </a>
                  );
                })
              ) : (
                <div className="py-12 text-center text-slate-400 text-xs">
                  {ui.noToolsFound}
                </div>
              )}
            </div>

            {/* Footer Hint */}
            <div className="p-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between px-4">
              <span>Navigate with <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">↓</kbd></span>
              <span>Select with <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">ENTER</kbd></span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
