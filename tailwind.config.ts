import type { Config } from 'tailwindcss';

// Press proof sheet: coated paper, key-black ink, flat process inks as category marks.
// Legacy token names (surface, hairline, mute, accent-*) are kept and remapped so every
// component inherits the world; accent-* text colors are text-safe (≥4.5:1 on paper).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    borderRadius: {
      none: '0',
      xs: '0',
      sm: '0',
      DEFAULT: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: 'none',
      DEFAULT: 'none',
      md: 'none',
      lg: 'none',
      xl: 'none',
      '2xl': 'none',
      inner: 'none',
    },
    extend: {
      colors: {
        paper: { DEFAULT: '#fbfbf9', stock: '#f1f1ec', bright: '#ffffff' },
        graphite: '#5b5b58',
        pencil: { DEFAULT: '#cfcfc8', soft: '#e4e4de' },
        nonrepro: '#9fd3e6',
        process: {
          cyan: '#00a0df',
          magenta: '#e4007c',
          yellow: '#ffe100',
          key: '#141414',
        },

        canvas: '#fbfbf9',
        surface: {
          DEFAULT: '#fbfbf9',
          elevated: '#f1f1ec',
          card: '#ffffff',
        },
        hairline: {
          DEFAULT: '#cfcfc8',
          soft: '#e4e4de',
          strong: '#141414',
        },
        ink: '#141414',
        body: '#2b2b29',
        charcoal: '#2b2b29',
        mute: '#5b5b58',
        ash: '#6d6d69',
        stone: '#9a9a93',
        accent: {
          blue: '#00729e',
          'blue-soft': '#dff2f9',
          red: '#c2006a',
          'red-soft': '#fbe3ef',
          green: '#1d7440',
          'green-soft': '#e1f1e6',
          yellow: '#7d6300',
          'yellow-soft': '#fff6bf',
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
