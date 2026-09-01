export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle Cloud AI Upscale API route
    if (url.pathname === '/api/upscale' && request.method === 'POST') {
      try {
        // Forward request to Oracle VPS Real-ESRGAN backend via hostname
        const vpsResponse = await fetch('http://130.210.63.16.sslip.io/api/upscale', {
          method: 'POST',
          headers: request.headers,
          body: request.body,
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
        return new Response(
          JSON.stringify({ error: 'Failed to connect to Oracle Cloud AI backend', details: err.message }),
          {
            status: 502,
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

    // Serve static assets for all other routes
    return env.ASSETS.fetch(request);
  },
};
