import { LocalizedHomeData } from '../types';

export const enHome: LocalizedHomeData = {
  hero: {
    badge: '🔒 100% Private Client-Side Image Processing',
    title: 'Precision Image Tools, Directly in Your Browser',
    subtitle: 'Crop, resize, compress, convert, and inspect images at maximum speed with zero server uploads and zero privacy risks.',
    dropzoneTitle: 'Drag & Drop Images Here',
    dropzoneSubtitle: 'or click to browse from your device • PNG, JPG, WebP, SVG, AVIF, GIF',
  },
  trustPillars: [
    {
      title: 'Zero Server Uploads',
      description: 'All image rendering and manipulation is performed directly on your device via HTML5 Canvas.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Lossless Precision',
      description: 'Pixel-perfect quality preservation with sub-pixel sampling algorithms.',
      icon: 'Sparkles',
    },
    {
      title: 'Instant Local Speed',
      description: 'Zero network latency, zero upload queues, and zero file size waiting times.',
      icon: 'Zap',
    },
  ],
  categoryNames: {
    'edit-transform': 'Edit & Transform',
    'optimize-compress': 'Optimize & Compress',
    'convert-formats': 'Convert Formats',
    'utilities': 'Inspect & Utilities',
    'developer': 'Developer Tools',
  },
  faqs: [
    {
      question: 'Are my images uploaded to any remote server?',
      answer: 'No. Image Toolbox uses 100% client-side HTML5 Canvas and Web API technology. Your photos never leave your device.',
    },
    {
      question: 'Is there a file size limit or image count quota?',
      answer: 'No. Because processing is performed locally on your computer, there are no artificial limits or paywalls.',
    },
    {
      question: 'Which image formats are supported?',
      answer: 'We support PNG, JPEG (JPG), WebP, SVG, AVIF, GIF, and ICO formats across all modern desktop and mobile browsers.',
    },
  ],
};
