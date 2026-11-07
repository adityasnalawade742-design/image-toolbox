import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Workers-only module used by src/worker.js
  resolve: { alias: { 'cloudflare:email': new URL('./src/__tests__/stubs/cloudflare-email.js', import.meta.url).pathname } },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/lib/**/*.ts', 'src/lib/**/*.tsx'],
    },
  },
});
