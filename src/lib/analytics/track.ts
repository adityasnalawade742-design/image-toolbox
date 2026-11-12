/**
 * A Google Analytics event, when the tag is on the page (Analytics.astro). Consent Mode still applies: without consent
 * Google only receives a cookieless ping. Never pass file names, file contents or anything typed into a tool.
 */
export function track(event: string, params: Record<string, string | number> = {}): void {
  try {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', event, params);
  } catch {
    // Analytics must never break a tool
  }
}

/** What a visitor typed into tool search: trimmed and shortened, it only says which tool they were looking for */
export const searchTerm = (query: string) => query.trim().toLowerCase().slice(0, 60);
