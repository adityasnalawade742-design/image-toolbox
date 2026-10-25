# Document service

The server-side tools of Image Toolbox. Everything else on the site runs in the browser.

| Endpoint | Tool | Engine |
| :--- | :--- | :--- |
| `POST /v1/convert?to=pdf` | Word / Excel / PowerPoint (and ODF, RTF, TXT, CSV) to PDF | LibreOffice |
| `POST /v1/convert?to=docx` | PDF to Word | LibreOffice PDF import |
| `POST /v1/compress?preset=screen\|ebook\|printer` | Compress PDF | Ghostscript |
| `POST /v1/protect` (`password`) | Protect PDF, AES-256 | qpdf |
| `POST /v1/unlock` (`password`) | Unlock PDF | qpdf |
| `POST /v1/repair` | Repair PDF | qpdf |
| `POST /v1/ocr?lang=eng+deu` | OCR to searchable PDF | ocrmypdf + Tesseract |
| `POST /v1/pdfa` | PDF/A-2b | ocrmypdf |
| `GET /health` | Load and queue | |

Every `/v1/*` request needs the `X-Origin-Secret` header. Only the site's Cloudflare Worker knows it. Uploads go in the multipart field `file` and are limited to 50 MB.

**Privacy:**
- Each job runs in its own temporary folder (in RAM, inside a read-only container), which is deleted once the result has been sent.
- Caddy keeps no request logs.

## Setup on Oracle Cloud (Ubuntu 24.04, Ampere A1)
1. Create the instance and open TCP 80 and 443 in the subnet's Security List.
2. Copy this folder to the server and run `bash setup.sh`. It installs Docker, opens the host firewall, writes `.env` (an `sslip.io` domain for the server's IP plus a random secret) and starts the stack.
3. Give the site the URL and the secret:
   - Set `DOC_API_URL` in `wrangler.json` to `https://<domain>`.
   - Run `npx wrangler secret put DOC_API_SECRET` with the `ORIGIN_SECRET` from `.env`.

**Updating:** `sudo docker compose up -d --build`.

**Logs** (service errors only): `sudo docker compose logs api`.

## Keeping a free instance alive
Oracle can reclaim Always Free instances it considers idle (low CPU, network and memory use over 7 days). The reliable fix is to upgrade the Oracle account to **Pay As You Go**. Usage within the Always Free limits stays free, and idle reclamation no longer applies.
