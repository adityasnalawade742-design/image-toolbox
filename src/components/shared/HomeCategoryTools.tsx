import React from 'react';
import { CATEGORIES, TOOLS, ToolCategory } from '../../config/tools';
import { getAllLocalizedTools } from '../../i18n/tools';
import { showDefaultLang, defaultLang } from '../../i18n/ui';
import {
  Crop,
  Scaling,
  RotateCw,
  FlipHorizontal,
  Type,
  ShieldCheck,
  Square,
  CircleDot,
  Minimize2,
  Archive,
  ShieldAlert,
  Repeat,
  Layers,
  ArrowRightLeft,
  BarChart2,
  Pipette,
  Palette,
  Globe,
  Binary,
  Code,
  FileCode,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface Props {
  locale?: string;
  categoryNames?: Record<string, string>;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Crop: <Crop className="w-4 h-4" />,
  Scaling: <Scaling className="w-4 h-4" />,
  RotateCw: <RotateCw className="w-4 h-4" />,
  FlipHorizontal: <FlipHorizontal className="w-4 h-4" />,
  Type: <Type className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Square: <Square className="w-4 h-4" />,
  CircleDot: <CircleDot className="w-4 h-4" />,
  Minimize2: <Minimize2 className="w-4 h-4" />,
  Archive: <Archive className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  Repeat: <Repeat className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  ArrowRightLeft: <ArrowRightLeft className="w-4 h-4" />,
  BarChart2: <BarChart2 className="w-4 h-4" />,
  Pipette: <Pipette className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Binary: <Binary className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  FileCode: <FileCode className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
};

export function HomeCategoryTools({ locale = 'en', categoryNames = {} }: Props) {
  const localizedTools = getAllLocalizedTools(locale);

  const getToolUrl = (slug: string) => {
    if (!showDefaultLang && locale === defaultLang) {
      return `/${slug}`;
    }
    return `/${locale}/${slug}`;
  };

  const categoryKeys = Object.keys(CATEGORIES) as ToolCategory[];

  return (
    <div className="space-y-16" id="tools">
      {categoryKeys.map((catKey) => {
        const cat = CATEGORIES[catKey];
        const catTools = TOOLS.filter((tool) => tool.category === catKey);
        const displayName = categoryNames[catKey] || cat.name;

        return (
          <section key={catKey} id={catKey} className="scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-hairline pb-3 mb-6">
              <div>
                <h2 className="text-lg font-semibold text-ink tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-red"></span>
                  <span>{displayName}</span>
                </h2>
                <p className="text-xs text-mute mt-0.5">{cat.description}</p>
              </div>
              <span className="text-[11px] font-mono text-ash">{catTools.length} Tools</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {catTools.map((tool) => {
                const loc = localizedTools[tool.slug];
                const title = loc?.name || tool.name;
                const desc = loc?.tagline || tool.description;

                return (
                  <a
                    key={tool.slug}
                    href={getToolUrl(tool.slug)}
                    className="group relative p-4 rounded-lg bg-surface hover:bg-surface-elevated border border-hairline hover:border-hairline-strong transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-8 h-8 rounded-md bg-surface-card border border-hairline flex items-center justify-center text-accent-blue group-hover:text-ink transition-colors">
                          {ICON_MAP[tool.iconName] || <Crop className="w-4 h-4" />}
                        </div>
                        <div className="flex items-center gap-1.5">
                          {tool.badge && (
                            <span className="px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accent-blue bg-accent-blue-soft rounded-xs">
                              {tool.badge}
                            </span>
                          )}
                          <ArrowUpRight className="w-3.5 h-3.5 text-stone group-hover:text-ink transition-colors" />
                        </div>
                      </div>

                      <h3 className="text-xs font-semibold text-ink group-hover:text-white transition-colors mb-1">
                        {title}
                      </h3>
                      <p className="text-[11px] text-mute line-clamp-2 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-hairline-soft flex items-center justify-between text-[10px] text-ash font-mono">
                      <span>100% Client-Side</span>
                      <span className="text-body font-medium">Free</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
