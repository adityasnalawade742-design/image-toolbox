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
        // Large runtimes are cached on first use instead of precached, so every tool works offline afterwards:
        // the AVIF encoder's WASM and the ONNX runtime used by the background remover (models are cached by transformers.js)
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/_astro/') && url.pathname.endsWith('.wasm'),
            handler: 'CacheFirst',
            options: { cacheName: 'wasm-codecs', expiration: { maxEntries: 8 } },
          },
          {
            urlPattern: ({ url }) => url.hostname === 'cdn.jsdelivr.net' && url.pathname.startsWith('/npm/onnxruntime-web@'),
            handler: 'CacheFirst',
            options: { cacheName: 'onnx-runtime', expiration: { maxEntries: 8 }, cacheableResponse: { statuses: [0, 200] } },
          },
        ],
      },
    }),
  ],
});
