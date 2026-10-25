import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import pwa from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://image-toolbox.aditya-s-nalawade742.workers.dev',
  output: 'static',
  vite: {
    // The AVIF encoder worker code-splits its WASM codec, which requires ES module workers
    worker: { format: 'es' },
    // Pre-bundling breaks @jsquash's relative .wasm URLs in dev
    optimizeDeps: { exclude: ['@jsquash/avif'] },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    pwa({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Image Toolbox — Privacy-First Image Suite',
        short_name: 'ImageToolbox',
        description: 'Free image tools that run in your browser: crop, resize, compress, convert and more.',
        theme_color: '#fbfbf9',
        background_color: '#fbfbf9',
        display: 'standalone',
        orientation: 'any',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,webp,woff2}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        navigateFallback: '/',
      },
    }),
  ],
});
