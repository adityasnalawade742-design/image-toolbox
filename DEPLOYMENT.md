# Deployment & Hosting Guide — Image Toolbox

**Cloudflare Pages Edge Deployment, Continuous Integration, Multi-Country Static Delivery**

---

## 1. Production Deployment: Cloudflare Pages / Workers

Image Toolbox is deployed as a high-performance static site on **Cloudflare's global edge network**.

- **Production URL**: `https://image-toolbox.aditya-s-nalawade742.workers.dev`
- **GitHub Repository**: `adityasnalawade742-design/image-toolbox`
- **Framework Preset**: `Astro`
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Prerendered Static Routes**: **252 Pages** (28 English + 8 Localized Homepages + 216 Localized Tools)

---

## 2. Continuous Deployment (CI/CD)

Whenever commits are pushed to the `main` branch:
1. Cloudflare automatically pulls the latest commit.
2. Runs `npm clean-install` (`npm ci`) using the synchronized `package-lock.json`.
3. Runs `npm run build` compiling the 252 static HTML routes into `dist/`.
4. Distributes static assets across all 300+ Cloudflare edge data centers with sub-50ms TTFB worldwide.

---

## 3. Environment Variables

| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` / `SITE_URL` | Production domain origin | `https://image-toolbox.aditya-s-nalawade742.workers.dev` |

---

## 4. Local Build & Verification Commands

```bash
# 1. Typecheck & Validate Schemas
npx astro check
npx tsc --noEmit

# 2. Compile all 252 static routes
npm run build

# 3. Run automated i18n & multi-country SEO audit
node scripts/test-i18n.mjs
```
