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

export const HomeCategoryTools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTools = TOOLS_REGISTRY.filter(tool => {
    if (tool.status !== 'active') return false;
    const matchesCat = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
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
          {CATEGORIES_CONFIG.map(cat => {
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
            placeholder="Filter tools..."
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
        {filteredTools.map((tool) => (
          <a
            key={tool.slug}
            href={`/${tool.slug}`}
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
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-500 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {tool.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs font-semibold text-sky-600 dark:text-sky-400">
              <span>Open Tool</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-16 space-y-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">No tools found</p>
          <p className="text-xs text-slate-500">Try a different search query or category filter</p>
        </div>
      )}

    </div>
  );
};
