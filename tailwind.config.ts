import type { Config } from 'tailwindcss';

// Press proof sheet, friendly edition: coated paper, key-black ink, process inks as category marks and soft tints.
// Legacy token names (surface, hairline, mute, accent-*) are kept and remapped so every
// component inherits the world; accent-* text colors are text-safe (≥4.5:1 on paper).
/** A theme color: RGB channels from a CSS variable, with Tailwind's opacity modifier */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // dark: styles follow the theme the page script sets (data-theme on <html>), not only the device setting
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    // Friendly proof sheet: soft corners on surfaces and controls, one soft lift for floating pieces
    borderRadius: {
      none: '0',
      xs: '4px',
      sm: '6px',
      DEFAULT: '8px',
      md: '10px',
      lg: '12px',
      xl: '16px',
      '2xl': '20px',
      '3xl': '24px',
      full: '9999px',
    },
    // Soft lift for floating pieces only; the values live in global.css so dark mode can deepen them
    boxShadow: {
      none: 'none',
      sm: 'var(--shadow-sm)',
      DEFAULT: 'var(--shadow)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'none',
      '2xl': 'none',
      inner: 'none',
    },
    extend: {
      // Every color is a CSS variable (RGB channels) set in global.css: light by default, dark (cool graphite)
      // under [data-theme='dark']. Channels keep Tailwind's opacity modifiers working (bg-ink/40)
      colors: {
        paper: { DEFAULT: v('paper'), stock: v('paper-stock'), bright: v('paper-bright') },
        graphite: v('graphite'),
        pencil: { DEFAULT: v('pencil'), soft: v('pencil-soft') },
        nonrepro: v('nonrepro'),
        process: {
          cyan: v('process-cyan'),
          magenta: v('process-magenta'),
          yellow: v('process-yellow'),
          key: v('process-key'),
        },
        focus: v('focus'),
        // Dimming over images and behind dialogs: always dark, in both themes
        shade: v('shade'),

        canvas: v('paper'),
        surface: {
          DEFAULT: v('paper'),
          elevated: v('paper-stock'),
          card: v('paper-bright'),
        },
        hairline: {
          DEFAULT: v('pencil'),
          soft: v('pencil-soft'),
          strong: v('ink'),
        },
        ink: v('ink'),
        body: v('body'),
        charcoal: v('body'),
        mute: v('graphite'),
        ash: v('ash'),
        stone: v('stone'),
        accent: {
          blue: v('accent-blue'),
          'blue-soft': v('accent-blue-soft'),
          red: v('accent-red'),
          'red-soft': v('accent-red-soft'),
          green: v('accent-green'),
          'green-soft': v('accent-green-soft'),
          yellow: v('accent-yellow'),
          'yellow-soft': v('accent-yellow-soft'),
        },
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Hiragino Sans', 'Noto Sans JP', 'Noto Sans KR', 'sans-serif'],
        condensed: ['"Barlow Semi Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
        // Measurements and metadata: Barlow with tabular figures (see global.css)
        mono: ['Barlow', 'system-ui', 'sans-serif'],
        code: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
