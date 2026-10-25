/**
 * Client for the document server, reached through the site's Worker at /api/doc/*.
 * Uploads use XHR so the tools can show upload progress; the server answers with the finished file.
 */

export type DocEndpoint = 'convert' | 'compress' | 'protect' | 'unlock' | 'repair' | 'ocr' | 'pdfa';

export type DocErrorCode =
  | 'offline'
  | 'busy'
  | 'too_large'
  | 'rate_limited'
  | 'unsupported_type'
  | 'wrong_password'
  | 'already_encrypted'
  | 'encrypted'
  | 'timeout'
  | 'failed';

export class DocError extends Error {
  constructor(public code: DocErrorCode) {
    super(code);
  }
}

export interface DocResult {
  blob: Blob;
  sizeBefore?: number;
  sizeAfter?: number;
}

export type DocProgress = { stage: 'uploading'; fraction: number } | { stage: 'processing' };

let healthCache: { ok: boolean; at: number } | null = null;

/** True when the document server answers its health check (cached for 30 s) */
export async function isServiceOnline(): Promise<boolean> {
  if (healthCache && Date.now() - healthCache.at < 30_000) return healthCache.ok;
  let ok = false;
  try {
    const res = await fetch('/api/doc/health', { signal: AbortSignal.timeout(6000), cache: 'no-store' });
    ok = res.ok;
  } catch {
    ok = false;
  }
  healthCache = { ok, at: Date.now() };
  return ok;
}

const KNOWN: Record<string, DocErrorCode> = {
  offline: 'offline',
  busy: 'busy',
  too_large: 'too_large',
  rate_limited: 'rate_limited',
  unsupported_type: 'unsupported_type',
  wrong_password: 'wrong_password',
  already_encrypted: 'already_encrypted',
  encrypted: 'encrypted',
  timeout: 'timeout',
};

export function runDocJob(
  endpoint: DocEndpoint,
  file: File,
  params: Record<string, string> = {},
  fields: Record<string, string> = {},
  onProgress?: (p: DocProgress) => void
): Promise<DocResult> {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('file', file, file.name);
    for (const [k, v] of Object.entries(fields)) form.append(k, v);
    const qs = new URLSearchParams(params).toString();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `/api/doc/${endpoint}${qs ? `?${qs}` : ''}`);
    xhr.responseType = 'blob';
    xhr.timeout = 180_000;
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress?.({ stage: 'uploading', fraction: e.loaded / e.total });
    };
    xhr.upload.onload = () => onProgress?.({ stage: 'processing' });
    xhr.onload = async () => {
      if (xhr.status === 200) {
        const num = (h: string) => {
          const v = xhr.getResponseHeader(h);
          return v ? Number(v) : undefined;
        };
        resolve({ blob: xhr.response, sizeBefore: num('X-Size-Before'), sizeAfter: num('X-Size-After') });
        return;
      }
      let code: DocErrorCode = xhr.status === 413 ? 'too_large' : xhr.status === 503 ? 'busy' : 'failed';
      try {
        const body = JSON.parse(await (xhr.response as Blob).text());
        code = KNOWN[body.error] || code;
      } catch {
        // not JSON
      }
      if (code === 'offline') healthCache = { ok: false, at: Date.now() };
      reject(new DocError(code));
    };
    xhr.onerror = () => reject(new DocError('offline'));
    xhr.ontimeout = () => reject(new DocError('timeout'));
    xhr.send(form);
  });
}
