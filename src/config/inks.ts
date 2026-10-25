import type { ToolCategory } from './tools';

/** Each category prints in one process ink; the mark is the only color in the chrome */
export const CATEGORY_INK: Record<ToolCategory, { className: string; ink: string }> = {
  'edit-transform': { className: 'ink-edit', ink: 'magenta' },
  'optimize-compress': { className: 'ink-optimize', ink: 'cyan' },
  'convert-formats': { className: 'ink-convert', ink: 'yellow' },
  utilities: { className: 'ink-inspect', ink: 'key' },
  developer: { className: 'ink-developer', ink: 'registration' },
};

export const CATEGORY_ORDER: ToolCategory[] = ['edit-transform', 'optimize-compress', 'convert-formats', 'utilities', 'developer'];
