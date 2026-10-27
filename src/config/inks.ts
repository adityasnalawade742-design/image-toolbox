import type { ToolCategory } from './tools';

/** Each category prints in one process ink (the solid mark) and a soft tint of it (icon tiles, nav pills) */
export const CATEGORY_INK: Record<ToolCategory, { className: string; tint: string; ink: string }> = {
  'edit-transform': { className: 'ink-edit', tint: 'tint-edit', ink: 'magenta' },
  'optimize-compress': { className: 'ink-optimize', tint: 'tint-optimize', ink: 'cyan' },
  'convert-formats': { className: 'ink-convert', tint: 'tint-convert', ink: 'yellow' },
  'pdf-documents': { className: 'ink-pdf', tint: 'tint-pdf', ink: 'magenta-yellow overprint' },
  utilities: { className: 'ink-inspect', tint: 'tint-inspect', ink: 'key' },
  developer: { className: 'ink-developer', tint: 'tint-developer', ink: 'registration' },
};

export const CATEGORY_ORDER: ToolCategory[] = ['edit-transform', 'optimize-compress', 'convert-formats', 'pdf-documents', 'utilities', 'developer'];
