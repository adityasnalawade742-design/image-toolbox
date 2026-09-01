import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, ArrowRight, X } from 'lucide-react';
import { TOOLS } from '../../config/tools';
import { getAllLocalizedTools } from '../../i18n/tools';
import { showDefaultLang, defaultLang } from '../../i18n/ui';

interface Props {
  locale?: string;
}

export function ToolSearch({ locale = 'en' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const localizedTools = getAllLocalizedTools(locale);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filteredTools = TOOLS.filter((tool) => {
    const locTool = localizedTools[tool.slug];
    const q = query.toLowerCase();
    const matchSlug = tool.slug.toLowerCase().includes(q);
    const matchName = (locTool?.name || tool.name).toLowerCase().includes(q);
    const matchDesc = (locTool?.tagline || tool.description).toLowerCase().includes(q);
    const matchKeywords = (locTool?.keywords || []).some((k) => k.toLowerCase().includes(q));
    return matchSlug || matchName || matchDesc || matchKeywords;
  });

  const getToolUrl = (slug: string) => {
    if (!showDefaultLang && locale === defaultLang) {
      return `/${slug}`;
    }
    return `/${locale}/${slug}`;
  };

  const handleSelect = (slug: string) => {
    window.location.href = getToolUrl(slug);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-mute hover:text-ink bg-surface-elevated hover:bg-surface-card border border-hairline rounded-md transition-all h-[36px]"
        aria-label="Search tools"
      >
        <Search className="w-3.5 h-3.5 text-mute" />
        <span className="hidden sm:inline">Search tools...</span>
        <div className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-medium text-body raycast-keycap rounded-xs">
          <span>⌘</span>
          <span>K</span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-canvas/80 backdrop-blur-md">
          <div className="w-full max-w-xl bg-surface border border-hairline-strong rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Top Command Search Bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-hairline">
              <Search className="w-4 h-4 text-accent-red shrink-0" />
              <input
                ref={inputRef}
                type="text"
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
                    handleSelect(filteredTools[selectedIndex].slug);
                  }
                }}
                placeholder="Search 27 tools or actions..."
                className="w-full bg-transparent text-sm text-ink placeholder-ash focus:outline-none"
              />
              <button onClick={() => setIsOpen(false)} className="text-ash hover:text-ink">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-1.5 divide-y divide-hairline-soft">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool, idx) => {
                  const locTool = localizedTools[tool.slug];
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={tool.slug}
                      onClick={() => handleSelect(tool.slug)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-2.5 rounded-md cursor-pointer transition-all ${
                        isSelected ? 'bg-surface-card border border-hairline' : 'hover:bg-surface-elevated'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${isSelected ? 'bg-white text-black' : 'bg-surface-elevated text-accent-red'}`}>
                          <Command className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-ink">
                            {locTool?.name || tool.name}
                          </div>
                          <div className="text-[11px] text-mute line-clamp-1">
                            {locTool?.tagline || tool.description}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-stone'}`} />
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center text-xs text-mute">
                  No image tools matching "{query}"
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2.5 bg-surface-elevated border-t border-hairline flex items-center justify-between text-[11px] text-mute">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><kbd className="raycast-keycap px-1 py-0.5 rounded-xs">↑</kbd><kbd className="raycast-keycap px-1 py-0.5 rounded-xs">↓</kbd> Navigate</span>
                <span className="flex items-center gap-1"><kbd className="raycast-keycap px-1 py-0.5 rounded-xs">↵</kbd> Open</span>
                <span className="flex items-center gap-1"><kbd className="raycast-keycap px-1 py-0.5 rounded-xs">Esc</kbd> Close</span>
              </div>
              <span className="font-mono">27 Tools</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
