// Stand-in for the Workers-only 'cloudflare:email' module, so worker.js can be imported in tests
export class EmailMessage {
  constructor(from, to, raw) {
    this.from = from;
    this.to = to;
    this.raw = raw;
  }
}
