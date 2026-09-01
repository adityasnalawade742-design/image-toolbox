# Deployment & Hosting Guide — Image Toolbox

**Vercel Production Deployment, Staging VPS Environment, Domain Mapping & Infrastructure**

---

## 1. Primary Production Deployment: Vercel

Image Toolbox is architected for zero-config, static edge delivery on **Vercel**.

### Build Settings:
- **Framework Preset**: Next.js (App Router)
- **Build Command**: `next build` (or `npm run build`)
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Runtime**: 20.x or 22.x LTS

### Required Production Environment Variables:
```env
NEXT_PUBLIC_SITE_URL=https://imagetoolbox.com
```
*No secrets, API keys, or database URLs are required for standard operation.*

---

## 2. Custom Domain & HTTPS Setup

1. **Vercel Custom Domain Configuration**:
   - Add `imagetoolbox.com` and `www.imagetoolbox.com` under Vercel Project Settings > Domains.
   - Set `https://imagetoolbox.com` as the canonical domain with automatic 308 redirect from `www.imagetoolbox.com`.
2. **DNS Records (Cloudflare or Domain Registrar)**:
   - `A` Record: `@` -> `76.76.21.21` (Vercel IP)
   - `CNAME` Record: `www` -> `cname.vercel-dns.com`
3. **SSL / HTTPS**:
   - Vercel automatically provisions and renews Let's Encrypt / DigiCert SSL certificates with HTTP-to-HTTPS redirection.

---

## 3. Staging & Future Backend Infrastructure: Oracle Cloud VPS

The Oracle Cloud Free Tier VPS instance (`130.210.35.124`) is maintained as:
1. **Live Staging Environment**: Continuous testing and live build validation.
2. **Optional Future Backend Node**: Ready to host containerized heavy compute workloads (e.g. video transcoding, deep learning background removal) at `api.imagetoolbox.com` if ever desired.

### VPS System Architecture:
- **Service Name**: `image-toolbox.service` (Managed via `systemd`)
- **Internal Port**: `127.0.0.1:3000` (Node.js Next.js Server)
- **Reverse Proxy**: Caddy server on ports 80/443

---

## 4. Local Build & Verification Commands

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript strict typecheck
npm run typecheck

# 3. Compile optimized production build (Prerenders 33 static pages)
npm run build

# 4. Start production server locally
npm start
```
