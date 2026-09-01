'use client';

import React, { useState } from 'react';
import { 
  Crop, 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  FlipHorizontal, 
  RefreshCw, 
  Layers, 
  Pipette, 
  ShieldCheck, 
  Info, 
  Palette, 
  Type, 
  Square, 
  Circle, 
  Binary, 
  Code, 
  FileCode,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TOOLS_REGISTRY, CATEGORIES_CONFIG } from '@/config/tools';
import { getLocalizedToolContent } from '@/i18n/tools';
import { getUIStrings } from '@/i18n/ui';
import { getHomeContent } from '@/i18n/home';
import { getLocalizedUrl } from '@/i18n/locales';

interface HomeCategoryToolsProps {
  locale?: string;
}

export const HomeCategoryTools: React.FC<HomeCategoryToolsProps> = ({ locale = 'en' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ui = getUIStrings(locale);
  const homeContent = getHomeContent(locale);

  // Map category labels from home localization
  const localizedCategories = [
    { id: 'all', label: ui.allTools },
    ...CATEGORIES_CONFIG.map(cat => {
      const match = homeContent.categories?.find(c => c.id === cat.id);
      return {
        id: cat.id,
        label: match?.label || cat.label
      };
    })
  ];

  const filteredTools = TOOLS_REGISTRY.filter(tool => {
    if (tool.status !== 'active') return false;
    const loc = getLocalizedToolContent(tool.slug, locale);
    const matchesCat = activeCategory === 'all' || tool.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      loc.name.toLowerCase().includes(q) || 
      loc.tagline.toLowerCase().includes(q) ||
      tool.name.toLowerCase().includes(q) || 
      tool.tagline.toLowerCase().includes(q) ||
      tool.keywords.some(k => k.toLowerCase().includes(q)) ||
      loc.keywords.some(k => k.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-sky-600 dark:text-sky-400";
    switch (iconName) {
      case 'Crop': return <Crop className={iconClass} />;
      case 'Maximize2': return <Maximize2 className={iconClass} />;
      case 'Minimize2': return <Minimize2 className={iconClass} />;
      case 'RotateCw': return <RotateCw className={iconClass} />;
      case 'FlipHorizontal': return <FlipHorizontal className={iconClass} />;
      case 'RefreshCw': return <RefreshCw className={iconClass} />;
      case 'Layers': return <Layers className={iconClass} />;
      case 'Pipette': return <Pipette className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Info': return <Info className={iconClass} />;
      case 'Palette': return <Palette className={iconClass} />;
      case 'Type': return <Type className={iconClass} />;
      case 'Square': return <Square className={iconClass} />;
      case 'Circle': return <Circle className={iconClass} />;
      case 'Binary': return <Binary className={iconClass} />;
      case 'Code': return <Code className={iconClass} />;
      case 'FileCode': return <FileCode className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div id="tools" className="space-y-8 scroll-mt-20">
      
      {/* Category Tabs & Quick Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        
        {/* Category Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {localizedCategories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quick Inline Filter Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ui.filterTools}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-500"
          />
          <svg className="w-4 h-4 absolute left-3 top-2 text-slate-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTools.map((tool) => {
          const loc = getLocalizedToolContent(tool.slug, locale);
          const toolUrl = getLocalizedUrl(tool.slug, locale);

          return (
            <a
              key={tool.slug}
              href={toolUrl}
              className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 hover:border-sky-500/50 hover:bg-sky-500/[0.02] dark:hover:bg-sky-500/[0.04] transition-all flex flex-col justify-between space-y-4 hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-sky-500/10 border border-sky-500/20 group-hover:scale-110 transition-transform">
                    {renderIcon(tool.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {tool.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-sky-500 transition-colors">
                    {loc.name || tool.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {loc.tagline || tool.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                <span>{loc.shortName || tool.shortName}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="py-16 text-center text-slate-400 text-xs">
          {ui.noToolsFound}
        </div>
      )}

    </div>
  );
};
