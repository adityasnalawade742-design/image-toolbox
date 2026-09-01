export type ToolCategory = 
  | 'edit'
  | 'optimize'
  | 'convert'
  | 'utilities'
  | 'developer';

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolHowToStep {
  title: string;
  description: string;
}

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: ToolCategory;
  description?: string;
  iconName: string;
  status: 'active' | 'upcoming';
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  supportedFormats: string[];
  relatedToolSlugs: string[];
  howToSteps: ToolHowToStep[];
  faqs: ToolFAQ[];
  features: string[];
}
