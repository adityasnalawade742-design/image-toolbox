// The site moved to tadafile.com. This Worker keeps the old address (image-toolbox.<account>.workers.dev) and
// www.tadafile.com working: every request gets a permanent redirect to the same path on https://tadafile.com, so old
// links and anything search engines found keep landing on the right page.
const TARGET = 'https://tadafile.com';

export default {
  fetch(request) {
    const url = new URL(request.url);
    // Pages are served without a trailing slash (wrangler.json html_handling), so drop it here and save a second hop
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
    return new Response(null, {
      status: 301,
      headers: { Location: `${TARGET}${path}${url.search}`, 'Cache-Control': 'public, max-age=86400' },
    });
  },
};
