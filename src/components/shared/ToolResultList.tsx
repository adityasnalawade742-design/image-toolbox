import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ToolCategory } from '../../config/tools';
import { CATEGORY_INK } from '../../config/inks';

export interface ResultTool {
  slug: string;
  category: ToolCategory;
  name: string;
  tagline: string;
}

interface Props {
  id: string;
  label: string;
  tools: ResultTool[];
  selected: number;
  onPick: (index: number) => void;
  onHover: (index: number) => void;
  /** Shown above the list when nothing matched and the list holds suggestions instead */
  emptyNote?: string;
  /** Heading for the suggestions */
  suggestionsLabel?: string;
  className?: string;
}

/** Tool search results, shared by the header search and the home page search field */
export function ToolResultList({ id, label, tools, selected, onPick, onHover, emptyNote, suggestionsLabel, className = '' }: Props) {
  return (
    <>
      {emptyNote && (
        <div className="px-4 pt-5 pb-3 space-y-3 border-b border-pencil-soft">
          <p className="text-[15px] text-graphite">{emptyNote}</p>
          {suggestionsLabel && tools.length > 0 && <p className="slug">{suggestionsLabel}</p>}
        </div>
      )}
      <ul id={id} role="listbox" aria-label={label} className={`divide-y divide-pencil-soft ${className}`}>
        {tools.map((tool, idx) => {
          const isSelected = idx === selected;
          return (
            <li
              key={tool.slug}
              id={`${id}-${tool.slug}`}
              role="option"
              aria-selected={isSelected}
              onClick={() => onPick(idx)}
              onMouseEnter={() => onHover(idx)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${isSelected ? 'seg-on' : 'text-ink'}`}
            >
              <span className={`w-3 h-3 shrink-0 rounded-full ${CATEGORY_INK[tool.category].className}`} aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold">{tool.name}</span>
                <span className="block text-[13px] truncate text-graphite">{tool.tagline}</span>
              </span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
