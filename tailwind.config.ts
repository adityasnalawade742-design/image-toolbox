import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#07080a',
        surface: {
          DEFAULT: '#0d0d0d',
          elevated: '#101111',
          card: '#121212',
        },
        hairline: {
          DEFAULT: '#242728',
          soft: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
        ink: '#f4f4f6',
        body: '#cdcdcd',
        charcoal: '#d3d3d4',
        mute: '#9c9c9d',
        ash: '#6a6b6c',
        stone: '#434345',
        accent: {
          blue: '#57c1ff',
          'blue-soft': 'rgba(87, 193, 255, 0.15)',
          red: '#ff6161',
          'red-soft': 'rgba(255, 97, 97, 0.15)',
          green: '#59d499',
          'green-soft': 'rgba(89, 212, 153, 0.15)',
          yellow: '#ffc533',
          'yellow-soft': 'rgba(255, 197, 51, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '10px',
        xl: '16px',
      },
    },
  },
  plugins: [],
} satisfies Config;
