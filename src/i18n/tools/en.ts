import { LocalizedToolItem } from '../types';
import { TOOLS_REGISTRY } from '../../config/tools';

export const enTools: Record<string, LocalizedToolItem> = {};

for (const tool of TOOLS_REGISTRY) {
  enTools[tool.slug] = {
    name: tool.name,
    shortName: tool.shortName,
    tagline: tool.tagline,
    seoTitle: tool.seoTitle,
    seoDescription: tool.seoDescription,
    keywords: tool.keywords,
    howToSteps: tool.howToSteps,
    features: tool.features,
    faqs: tool.faqs
  };
}
