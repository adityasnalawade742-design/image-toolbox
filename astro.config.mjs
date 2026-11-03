import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://tadafile.com',
  output: 'static',
  // Astro 7's default strips the spaces between inline elements, which runs words together
  compressHTML: true,
  vite: {
    // The AVIF encoder worker code-splits its WASM codec, which requires ES module workers
    worker: { format: 'es' },
    // Pre-bundling breaks @jsquash's relative .wasm URLs in dev
    optimizeDeps: { exclude: ['@jsquash/avif'] },
  },
  integrations: [
    react(),
  ],
});
