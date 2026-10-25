// Static files are served directly by Cloudflare (security headers come from public/_headers), so this Worker
// only runs for requests that match no file. It stays as the place for future /api routes.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
