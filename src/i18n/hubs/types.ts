import type { HubSlug } from '../../config/hubs';

export interface HubText {
  /** Search result title, without the site name */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Group headings, by the group keys in config/hubs.ts */
  groups: Record<string, string>;
  faqs: { question: string; answer: string }[];
}

export interface HubTexts {
  labels: {
    /** On tools that send files to the server */
    server: string;
    /** Heading over the links to the other collections */
    more: string;
    /** Link back to the full list on the home page; {count} is the number of tools */
    allTools: string;
  };
  pages: Record<HubSlug, HubText>;
}
