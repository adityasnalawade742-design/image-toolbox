export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle Cloud AI Upscale API route
    if (url.pathname === '/api/upscale' && request.method === 'POST') {
      try {
        const endpoint = env?.CLOUD_AI_ENDPOINT || 'http://130.210.63.16.sslip.io/api/upscale';
        // Forward request to Oracle VPS Real-ESRGAN backend with 30s timeout
        const vpsResponse = await fetch(endpoint, {
          method: 'POST',
          headers: request.headers,
          body: request.body,
          signal: AbortSignal.timeout(30000),
        });

        const headers = new Headers(vpsResponse.headers);
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.set('Access-Control-Allow-Headers', '*');

        return new Response(vpsResponse.body, {
          status: vpsResponse.status,
          statusText: vpsResponse.statusText,
          headers,
        });
      } catch (err) {
        const isTimeout = err?.name === 'TimeoutError' || err?.message?.includes('timeout');
        return new Response(
          JSON.stringify({
            error: isTimeout ? 'Cloud AI backend request timed out after 30s' : 'Failed to connect to Oracle Cloud AI backend',
            details: err?.message || 'Unknown error',
          }),
          {
            status: isTimeout ? 504 : 502,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
    }

    // Handle CORS preflight
    if (url.pathname === '/api/upscale' && request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': '*',
        },
      });
    }

    // Serve static assets for all other routes with production security headers
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
