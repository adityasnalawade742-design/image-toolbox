import { LocalizedHomeData } from '../types';

export const enHome: LocalizedHomeData = {
  heroPill: 'Privacy-First • Zero Server Uploads • 27 Free In-Browser Tools',
  heroHeadlineMain: 'Precision Image Tools,',
  heroHeadlineAccent: 'Directly in Your Browser',
  heroSubheadline: 'Crop, resize, compress, convert, edit, and inspect images locally with zero cloud uploads, zero latency, and uncompromising output quality.',
  guarantee1: '100% In-Browser Privacy',
  guarantee2: 'Instant Zero-Upload Speed',
  guarantee3: 'No File Size Restrictions',
  whyChooseTitle: 'Why Professionals Choose Image Toolbox',
  whyChooseSubtitle: 'Engineered for developers, designers, photographers, and privacy-conscious users.',
  feature1Title: 'Zero Server Uploads',
  feature1Desc: 'Your images remain securely on your local device. HTML5 Canvas computation handles everything locally with complete data isolation.',
  feature2Title: 'Lightning-Fast Canvas Engine',
  feature2Desc: 'Experience instant live previews, multi-threaded batch operations, and high-performance WebP and PNG encoders without waiting for server queues.',
  feature3Title: 'Developer & Webmaster Ready',
  feature3Desc: 'From Base64 encoding to vector SVG rasterization, EXIF stripping, and multi-resolution favicon generation in one unified workspace.',
  categories: [
    { id: 'edit', label: 'Edit & Transform', description: 'Crop, resize, rotate, flip, and frame photos' },
    { id: 'optimize', label: 'Optimize & Compress', description: 'Shrink file sizes and remove unnecessary metadata' },
    { id: 'convert', label: 'Convert Formats', description: 'Convert between WebP, PNG, JPG, and AVIF' },
    { id: 'utilities', label: 'Calculators & Utilities', description: 'Color picker, aspect ratio, and DPI calculations' },
    { id: 'developer', label: 'Web & Developer', description: 'Favicon generator, Base64 encoder, and Data URIs' }
  ],
  faqs: [
    {
      question: 'Are my photos or files uploaded to any external server?',
      answer: 'No. Never. Image Toolbox executes all image processing operations entirely within your device’s web browser using HTML5 Canvas and modern Web APIs. Your images are never transmitted over the internet or saved to any cloud server.'
    },
    {
      question: 'Is Image Toolbox really 100% free to use?',
      answer: 'Yes, all 27 tools are completely free with no usage limits, no file quotas, no watermarks, and no sign-up or registration required.'
    },
    {
      question: 'What image formats can I convert and optimize?',
      answer: 'Image Toolbox supports JPG, JPEG, PNG, WebP, AVIF, SVG, GIF, and Base64 Data URIs across all standard operations including conversion, resizing, cropping, and compression.'
    },
    {
      question: 'Can I process multiple images in bulk?',
      answer: 'Yes! We provide dedicated Bulk Image Resizer and Bulk Image Compressor tools capable of processing dozens of images at once and bundling them into a single instant ZIP download.'
    }
  ]
};
