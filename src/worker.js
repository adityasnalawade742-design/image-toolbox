export default {
  async fetch(request, env) {
    // All image processing runs in the browser; the worker only serves static assets with production security headers
    const assetResponse = await env.ASSETS.fetch(request);
    const secHeaders = new Headers(assetResponse.headers);
    secHeaders.set('X-Frame-Options', 'DENY');
    secHeaders.set('X-Content-Type-Options', 'nosniff');
    secHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    secHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    return new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers: secHeaders,
    });
  },
};
