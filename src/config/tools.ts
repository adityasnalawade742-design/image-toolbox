import { ToolItem } from '../types/tool';

export const TOOLS_REGISTRY: ToolItem[] = [
  // 1. CROP IMAGE (Active)
  {
    id: 'crop-image',
    slug: 'crop-image',
    name: 'Crop Image',
    shortName: 'Crop',
    tagline: 'Trim, crop, and frame images with custom and standard aspect ratios',
    category: 'edit',
    status: 'active',
    iconName: 'Crop',
    seoTitle: 'Crop Image Online Free — Precision Browser Image Cropper',
    seoDescription: 'Crop JPG, PNG, and WebP images online directly in your browser. Freeform and fixed aspect ratios (1:1, 16:9, 4:3, circle avatar) with 100% client-side privacy.',
    keywords: ['crop image online', 'free image cropper', 'photo crop tool', 'circular crop avatar', 'aspect ratio crop', 'square crop'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['resize-image', 'compress-image', 'rotate-image', 'flip-image'],
    howToSteps: [
      {
        title: 'Upload your image',
        description: 'Drag and drop your image into the drop area, choose a file from your device, or paste directly with Ctrl+V.'
      },
      {
        title: 'Select aspect ratio and crop area',
        description: 'Choose a preset ratio like 1:1 Square, 16:9 Widescreen, 4:3, or drag the handles for freeform custom cropping.'
      },
      {
        title: 'Adjust transformations (optional)',
        description: 'Rotate left/right, use fine angle rotation, flip horizontally/vertically, or enable circular avatar mask mode.'
      },
      {
        title: 'Download cropped image',
        description: 'Click Download to instantly save your cropped image in WebP, PNG, or JPG format with zero quality loss.'
      }
    ],
    faqs: [
      {
        question: 'Is my uploaded image uploaded to a server?',
        answer: 'No. All cropping and processing happens directly inside your web browser using HTML5 Canvas. Your image never leaves your computer or phone.'
      },
      {
        question: 'Can I crop an image into a circle for social media avatars?',
        answer: 'Yes! Select the Circle / Avatar preset to crop your image with a clean circular mask and transparent background.'
      },
      {
        question: 'Does cropping reduce image resolution or clarity?',
        answer: 'No. The crop tool extracts pixels at full native resolution from the source image without artificial compression.'
      },
      {
        question: 'What image formats are supported?',
        answer: 'You can crop JPG, PNG, WebP, AVIF, and GIF files, and export them as WebP, PNG, or JPG.'
      }
    ],
    features: [
      '100% In-Browser Privacy — Zero server uploads',
      'Preset Aspect Ratios: 1:1, 16:9, 9:16, 4:3, 3:2, 21:9, Circle',
      'Fine rotation slider (-45° to +45°) and 90° step rotations',
      'Horizontal & Vertical flipping',
      'Multi-touch & mouse drag handle support',
      'Multi-format export (WebP, PNG, JPG)'
    ]
  },

  // 2. RESIZE IMAGE (Active)
  {
    id: 'resize-image',
    slug: 'resize-image',
    name: 'Resize Image',
    shortName: 'Resize',
    tagline: 'Change image dimensions by pixels or percentage with aspect ratio lock',
    category: 'edit',
    status: 'active',
    iconName: 'Maximize2',
    seoTitle: 'Resize Image Online Free — Change Dimensions & Scale Photos',
    seoDescription: 'Resize JPG, PNG, and WebP images by exact pixel dimensions or percentage scaling. Lock aspect ratio, prevent upscaling, and export instantly in your browser.',
    keywords: ['resize image online', 'image resizer', 'change image size', 'scale photo pixels', 'reduce image dimensions', 'photo resizer free'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    relatedToolSlugs: ['crop-image', 'compress-image', 'rotate-image', 'flip-image'],
    howToSteps: [
      {
        title: 'Select or drop your image',
        description: 'Upload the photo you want to resize from your computer or mobile device.'
      },
      {
        title: 'Specify dimensions or percentage',
        description: 'Enter your target Width and Height in pixels, or choose a percentage scale (e.g. 50%, 75%).'
      },
      {
        title: 'Lock aspect ratio (optional)',
        description: 'Keep the aspect ratio lock enabled to prevent your image from stretching or distorting.'
      },
      {
        title: 'Download resized image',
        description: 'Select your preferred output format and quality, then click Download to save the scaled file.'
      }
    ],
    faqs: [
      {
        question: 'How do I resize an image without losing quality?',
        answer: 'Our tool uses multi-step high-quality bicubic canvas sampling. Downscaling preserves sharpness while significantly decreasing file size.'
      },
      {
        question: 'How do I prevent image stretching?',
        answer: 'Ensure the "Maintain Aspect Ratio" checkbox is checked. Changing the width will automatically compute the proportional height.'
      },
      {
        question: 'Can I resize images on mobile?',
        answer: 'Yes! Image Toolbox is fully responsive and touch-optimized for iPhone, iPad, and Android devices.'
      }
    ],
    features: [
      'Exact pixel dimension input with real-time scaling',
      'Percentage-based quick presets (25%, 50%, 75%, 150%, 200%)',
      'Aspect ratio lock & unlock support',
      'Upscaling prevention toggle to avoid pixelation',
      'Real-time output dimensions & file size preview',
      'Export to WebP, PNG, or JPG'
    ]
  },

  // 3. COMPRESS IMAGE (Active)
  {
    id: 'compress-image',
    slug: 'compress-image',
    name: 'Compress Image',
    shortName: 'Compress',
    tagline: 'Reduce image file size with smart compression while maintaining visual clarity',
    category: 'optimize',
    status: 'active',
    iconName: 'Minimize2',
    seoTitle: 'Compress Image Online Free — Reduce JPG, PNG & WebP File Size',
    seoDescription: 'Compress images online with adjustable quality controls. Dramatically reduce file size up to 80% with live file size reduction comparison and zero server uploads.',
    keywords: ['compress image online', 'reduce image file size', 'image compressor free', 'compress jpg', 'compress png', 'compress webp', 'photo size reducer'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    relatedToolSlugs: ['resize-image', 'crop-image', 'convert-image', 'jpg-to-webp'],
    howToSteps: [
      {
        title: 'Upload your image',
        description: 'Drop or select any JPG, PNG, or WebP image you want to optimize.'
      },
      {
        title: 'Adjust compression quality',
        description: 'Move the quality slider to find your desired balance between file size reduction and image fidelity.'
      },
      {
        title: 'Compare original vs compressed size',
        description: 'View the live reduction percentage and exact byte savings in real time.'
      },
      {
        title: 'Save optimized image',
        description: 'Click Download to save the lightweight, compressed image instantly.'
      }
    ],
    faqs: [
      {
        question: 'How much can I reduce my image size?',
        answer: 'Depending on the image and format, compression typically reduces file size by 50% to 85% with virtually imperceptible difference in visual quality.'
      },
      {
        question: 'Is WebP better than JPG for compression?',
        answer: 'Yes! WebP provides on average 25–35% smaller file sizes compared to JPEG at equivalent visual quality.'
      },
      {
        question: 'Are my private photos uploaded to a cloud server?',
        answer: 'Never. Compression is executed entirely within your browser using local canvas quantization.'
      }
    ],
    features: [
      'Interactive quality slider from 10% to 100%',
      'Live reduction percentage (e.g. "Saved 78.4%")',
      'Side-by-side file size metrics (Original vs Output)',
      'Smart WebP / JPG / PNG output selection',
      'Zero server upload — 100% private and instantaneous'
    ]
  },

  // 4. ROTATE IMAGE (Active - Phase 2A)
  {
    id: 'rotate-image',
    slug: 'rotate-image',
    name: 'Rotate Image',
    shortName: 'Rotate',
    tagline: 'Rotate images by 90°, 180°, 270°, or any fine custom angle',
    category: 'edit',
    status: 'active',
    iconName: 'RotateCw',
    seoTitle: 'Rotate Image Online Free — 90° Steps & Fine Angle Straightener',
    seoDescription: 'Rotate JPG, PNG, and WebP images online for free. Rotate 90 degrees left or right, flip 180 degrees, or straighten photos with precision fine angle controls.',
    keywords: ['rotate image online', 'straighten photo', 'rotate jpg 90 degrees', 'turn photo', 'rotate png online free', 'image angle straightener'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['flip-image', 'crop-image', 'resize-image', 'compress-image'],
    howToSteps: [
      {
        title: 'Upload your photo',
        description: 'Select or drag your image into the workspace.'
      },
      {
        title: 'Select rotation angle',
        description: 'Use the quick buttons for 90° Left, 90° Right, or 180°, or use the fine angle slider to straighten skewed photos.'
      },
      {
        title: 'Choose export format',
        description: 'Select your preferred output format (WebP, PNG, or JPG).'
      },
      {
        title: 'Download rotated image',
        description: 'Click Download to instantly save your correctly oriented image.'
      }
    ],
    faqs: [
      {
        question: 'Does rotating an image reduce picture quality?',
        answer: 'No. When using PNG or high-quality WebP/JPG export, pixels are mapped with high-precision canvas interpolation preserving sharpness.'
      },
      {
        question: 'Can I straighten a crooked photo?',
        answer: 'Yes! Use the Fine Adjustment slider (-45° to +45°) to straighten horizons and tilted pictures with single-degree precision.'
      },
      {
        question: 'Are my images stored anywhere?',
        answer: 'No. Rotation is processed 100% locally in your browser memory.'
      }
    ],
    features: [
      'Quick 90° Clockwise and Counter-Clockwise rotation',
      '180° Inversion in one click',
      'Precision fine-angle slider for straightening crooked photos',
      'Automatic canvas boundary recalculation without cropping corners',
      'Export to WebP, PNG, or JPG',
      'Zero server upload'
    ]
  },

  // 5. FLIP IMAGE (Active - Phase 2A)
  {
    id: 'flip-image',
    slug: 'flip-image',
    name: 'Flip Image',
    shortName: 'Flip',
    tagline: 'Mirror images horizontally or vertically in one click',
    category: 'edit',
    status: 'active',
    iconName: 'FlipHorizontal',
    seoTitle: 'Flip Image Online Free — Mirror Photo Horizontally & Vertically',
    seoDescription: 'Mirror and flip images horizontally or vertically online for free. Create mirror effects, invert selfies, and download high-resolution output directly in your browser.',
    keywords: ['flip image online', 'mirror photo', 'flip image horizontally', 'flip vertically', 'mirror image online free', 'invert photo'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['rotate-image', 'crop-image', 'resize-image', 'compress-image'],
    howToSteps: [
      {
        title: 'Choose your photo',
        description: 'Drop or select any image you wish to mirror or flip.'
      },
      {
        title: 'Select flip direction',
        description: 'Click "Flip Horizontally" to mirror left-to-right, or "Flip Vertically" for an upside-down mirror effect.'
      },
      {
        title: 'Choose output format',
        description: 'Select WebP, PNG, or JPG output.'
      },
      {
        title: 'Download mirrored image',
        description: 'Save your flipped photo instantly with original resolution preserved.'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between horizontal and vertical flip?',
        answer: 'Horizontal flip creates a classic mirror reflection (left becomes right, ideal for un-inverting front camera selfies). Vertical flip turns the image upside down.'
      },
      {
        question: 'Can I flip both horizontally and vertically?',
        answer: 'Yes! You can toggle both axes to mirror and invert the image simultaneously.'
      },
      {
        question: 'Is my original image altered?',
        answer: 'No, your original file on your computer remains untouched. The flipped version is saved as a separate download.'
      }
    ],
    features: [
      'Instant Horizontal Mirror (Flip X)',
      'Instant Vertical Invert (Flip Y)',
      'Simultaneous dual-axis flipping',
      'Maintains 100% native resolution and clarity',
      'Export to WebP, PNG, or JPG',
      'No registration, watermark, or server uploads'
    ]
  },

  // 6. IMAGE CONVERTER (Active - Phase 2A)
  {
    id: 'convert-image',
    slug: 'convert-image',
    name: 'Image Converter',
    shortName: 'Convert',
    tagline: 'Convert images between JPG, PNG, and WebP formats instantly',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'Image Converter Online — Convert JPG, PNG & WebP Free',
    seoDescription: 'Fast, free image format converter. Convert JPG, PNG, and WebP files online directly in your browser with transparency controls and zero server uploads.',
    keywords: ['image converter', 'convert image online', 'photo converter free', 'jpg to png', 'png to jpg', 'webp converter'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['jpg-to-png', 'png-to-jpg', 'jpg-to-webp', 'png-to-webp', 'compress-image'],
    howToSteps: [
      {
        title: 'Upload your source image',
        description: 'Choose or drop any JPG, PNG, WebP, AVIF, or GIF image.'
      },
      {
        title: 'Select target format',
        description: 'Choose whether you want to convert into PNG (lossless), WebP (modern lightweight), or JPG (universal compatibility).'
      },
      {
        title: 'Set background or quality (optional)',
        description: 'When converting transparent PNG to JPG, pick a background color (White, Black, or Custom). For JPG/WebP, adjust the quality slider.'
      },
      {
        title: 'Download converted image',
        description: 'Click Download to instantly receive your new converted file.'
      }
    ],
    faqs: [
      {
        question: 'Which image format should I convert to?',
        answer: 'Use WebP for fastest website loading and smallest size. Use PNG for graphics with transparent backgrounds or crisp text. Use JPG for standard photographs and maximum compatibility.'
      },
      {
        question: 'What happens to transparent backgrounds when converting to JPG?',
        answer: 'Because JPEG does not support transparency, transparent areas are cleanly filled with your chosen background color (default is pure White).'
      },
      {
        question: 'Are my converted files private?',
        answer: 'Yes! All conversions execute in your local browser using HTML5 Canvas with zero server uploads.'
      }
    ],
    features: [
      'Universal conversion between JPG, PNG, and WebP',
      'Transparency background color compositing for JPEG',
      'Lossless PNG encoding mode',
      'Adjustable WebP and JPG lossy quality controls',
      'Instant client-side conversion without file size limits'
    ]
  },

  // 7. JPG TO PNG (Active - Phase 2A)
  {
    id: 'jpg-to-png',
    slug: 'jpg-to-png',
    name: 'JPG to PNG Converter',
    shortName: 'JPG to PNG',
    tagline: 'Convert JPG images to lossless PNG format with maximum clarity',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'JPG to PNG Converter Online Free — Convert JPEG to PNG',
    seoDescription: 'Convert JPG photos to PNG format online for free. Lossless encoding, high quality, and 100% client-side privacy without server uploads.',
    keywords: ['jpg to png', 'convert jpg to png', 'jpeg to png converter', 'jpg to png free online', 'photo to png'],
    supportedFormats: ['image/jpeg'],
    relatedToolSlugs: ['png-to-jpg', 'jpg-to-webp', 'compress-image', 'resize-image', 'crop-image'],
    howToSteps: [
      {
        title: 'Upload your JPG image',
        description: 'Select or drag your JPG/JPEG file into the upload zone.'
      },
      {
        title: 'Preview PNG conversion',
        description: 'Review the lossless PNG preview and output file dimensions.'
      },
      {
        title: 'Download PNG file',
        description: 'Click Download to instantly save your converted PNG image.'
      }
    ],
    faqs: [
      {
        question: 'Why convert JPG to PNG?',
        answer: 'PNG is a lossless format that prevents further compression degradation when editing and is ideal for graphics, logos, and illustrations.'
      },
      {
        question: 'Will converting JPG to PNG create transparency?',
        answer: 'Converting a JPG to PNG does not automatically remove the background, but the new PNG format will allow transparent layers in image editors.'
      },
      {
        question: 'Is this JPG to PNG converter free?',
        answer: 'Yes, 100% free with no registration, no watermarks, and no usage limits.'
      }
    ],
    features: [
      'Lossless PNG output format',
      'Preserves original pixel resolution',
      '100% in-browser processing with zero server uploads',
      'Fast, instant conversion'
    ]
  },

  // 8. PNG TO JPG (Active - Phase 2A)
  {
    id: 'png-to-jpg',
    slug: 'png-to-jpg',
    name: 'PNG to JPG Converter',
    shortName: 'PNG to JPG',
    tagline: 'Convert PNG images to universally compatible JPG format',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'PNG to JPG Converter Online Free — Convert PNG to JPEG',
    seoDescription: 'Convert PNG images to JPG/JPEG online for free. Clean background compositing for transparent PNGs, quality control, and zero server uploads.',
    keywords: ['png to jpg', 'convert png to jpg', 'png to jpeg online', 'png to jpg free', 'image format converter'],
    supportedFormats: ['image/png'],
    relatedToolSlugs: ['jpg-to-png', 'png-to-webp', 'compress-image', 'resize-image', 'crop-image'],
    howToSteps: [
      {
        title: 'Upload PNG image',
        description: 'Drop or select the PNG file you want to convert.'
      },
      {
        title: 'Select background & quality',
        description: 'Choose a background color (default White) to replace transparent areas, and adjust JPG quality.'
      },
      {
        title: 'Download JPG file',
        description: 'Click Download to save your optimized JPG image.'
      }
    ],
    faqs: [
      {
        question: 'Why convert PNG to JPG?',
        answer: 'JPG files are much smaller in file size and universally supported across all devices, email clients, and printing systems.'
      },
      {
        question: 'What happens to transparent pixels in PNG?',
        answer: 'Because JPG does not support alpha transparency, transparent areas are cleanly filled with your selected background color (White by default).'
      },
      {
        question: 'Can I control the JPEG output quality?',
        answer: 'Yes! Use the quality slider (10% to 100%) to balance file size reduction and image clarity.'
      }
    ],
    features: [
      'Smart background compositing (White, Black, or Custom)',
      'Adjustable JPEG compression quality slider',
      'Significantly smaller file size for photos',
      'Zero server upload — 100% private'
    ]
  },

  // 9. JPG TO WEBP (Active - Phase 2A)
  {
    id: 'jpg-to-webp',
    slug: 'jpg-to-webp',
    name: 'JPG to WebP Converter',
    shortName: 'JPG to WebP',
    tagline: 'Convert JPG to modern WebP format to speed up web pages',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'JPG to WebP Converter Online Free — Fast Modern Web Formatting',
    seoDescription: 'Convert JPG images to modern WebP format online. Reduce image file size by 30%+ while preserving visual quality for faster website performance.',
    keywords: ['jpg to webp', 'convert jpg to webp', 'jpeg to webp online free', 'photo to webp', 'compress to webp'],
    supportedFormats: ['image/jpeg'],
    relatedToolSlugs: ['webp-to-jpg', 'png-to-webp', 'compress-image', 'convert-image'],
    howToSteps: [
      {
        title: 'Select your JPG photo',
        description: 'Upload the JPG image you want to optimize for the web.'
      },
      {
        title: 'Adjust WebP compression quality',
        description: 'Set your preferred quality level (80%–90% is optimal for websites).'
      },
      {
        title: 'Download WebP image',
        description: 'Save your lightweight WebP file for immediate website use.'
      }
    ],
    faqs: [
      {
        question: 'Why is WebP better than JPG?',
        answer: 'WebP provides 25% to 35% smaller file sizes than JPEG at equivalent visual quality, improving website load times and SEO scores.'
      },
      {
        question: 'Do all modern browsers support WebP?',
        answer: 'Yes! WebP is supported by Chrome, Safari, Firefox, Edge, iOS, Android, and over 97% of global web browsers.'
      }
    ],
    features: [
      '30%+ file size reduction compared to JPEG',
      'High-fidelity browser canvas WebP quantization',
      'Adjustable compression quality slider',
      '100% private in-browser conversion'
    ]
  },

  // 10. PNG TO WEBP (Active - Phase 2A)
  {
    id: 'png-to-webp',
    slug: 'png-to-webp',
    name: 'PNG to WebP Converter',
    shortName: 'PNG to WebP',
    tagline: 'Convert PNG to WebP with full alpha transparency support',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'PNG to WebP Converter Online Free — Transparent WebP Converter',
    seoDescription: 'Convert PNG images to WebP online for free. Retain full transparent backgrounds with up to 70% smaller file sizes than standard PNG.',
    keywords: ['png to webp', 'convert png to webp', 'transparent webp converter', 'png to webp free online', 'shrink png to webp'],
    supportedFormats: ['image/png'],
    relatedToolSlugs: ['webp-to-png', 'jpg-to-webp', 'compress-image', 'convert-image'],
    howToSteps: [
      {
        title: 'Upload your PNG file',
        description: 'Drop or choose the PNG image with or without transparency.'
      },
      {
        title: 'Adjust quality',
        description: 'Choose your desired compression level. WebP preserves alpha channels completely.'
      },
      {
        title: 'Download WebP file',
        description: 'Save your ultra-compact transparent WebP image.'
      }
    ],
    faqs: [
      {
        question: 'Does WebP support transparent backgrounds like PNG?',
        answer: 'Yes! WebP fully supports 8-bit alpha channel transparency while achieving significantly smaller file sizes than PNG.'
      },
      {
        question: 'How much smaller is WebP than PNG?',
        answer: 'WebP images with transparency are typically 50% to 75% smaller than the original PNG file.'
      }
    ],
    features: [
      'Full alpha transparency channel retention',
      'Drastic file size savings compared to PNG',
      'Adjustable quality controls',
      'Instant in-browser processing'
    ]
  },

  // 11. WEBP TO JPG (Active - Phase 2A)
  {
    id: 'webp-to-jpg',
    slug: 'webp-to-jpg',
    name: 'WebP to JPG Converter',
    shortName: 'WebP to JPG',
    tagline: 'Convert WebP images to universally compatible JPG format',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'WebP to JPG Converter Online Free — Convert WebP to JPEG',
    seoDescription: 'Convert WebP images to JPG format online for free. Ensure compatibility with legacy apps, photo editors, and systems with zero server uploads.',
    keywords: ['webp to jpg', 'convert webp to jpg', 'webp to jpeg online free', 'save webp as jpg'],
    supportedFormats: ['image/webp'],
    relatedToolSlugs: ['jpg-to-webp', 'webp-to-png', 'convert-image', 'compress-image'],
    howToSteps: [
      {
        title: 'Upload WebP file',
        description: 'Select the WebP image you want to convert to JPG.'
      },
      {
        title: 'Set background color & quality',
        description: 'Choose background color for any transparent areas and adjust output quality.'
      },
      {
        title: 'Download JPG image',
        description: 'Save your standard JPEG file instantly.'
      }
    ],
    faqs: [
      {
        question: 'Why convert WebP to JPG?',
        answer: 'Some older desktop applications, photo editing software, and legacy systems do not support WebP. JPG ensures 100% universal compatibility.'
      },
      {
        question: 'What happens to transparency in WebP when converting to JPG?',
        answer: 'Transparent pixels are cleanly composited over your chosen background color (default is pure White).'
      }
    ],
    features: [
      '100% Universal JPG compatibility',
      'Background color compositing for transparent WebP images',
      'Adjustable compression quality',
      'Zero server upload'
    ]
  },

  // 12. WEBP TO PNG (Active - Phase 2A)
  {
    id: 'webp-to-png',
    slug: 'webp-to-png',
    name: 'WebP to PNG Converter',
    shortName: 'WebP to PNG',
    tagline: 'Convert WebP images to lossless PNG format with transparent backgrounds',
    category: 'convert',
    status: 'active',
    iconName: 'RefreshCw',
    seoTitle: 'WebP to PNG Converter Online Free — Convert WebP to PNG',
    seoDescription: 'Convert WebP to PNG format online for free. Full transparency preservation, lossless encoding, and complete client-side privacy.',
    keywords: ['webp to png', 'convert webp to png', 'webp to png transparent', 'save webp as png free'],
    supportedFormats: ['image/webp'],
    relatedToolSlugs: ['png-to-webp', 'webp-to-jpg', 'convert-image', 'compress-image'],
    howToSteps: [
      {
        title: 'Select your WebP image',
        description: 'Upload the WebP file you wish to convert.'
      },
      {
        title: 'Review PNG preview',
        description: 'Check the lossless preview with full transparency preserved.'
      },
      {
        title: 'Download PNG file',
        description: 'Click Download to receive your high-quality PNG image.'
      }
    ],
    faqs: [
      {
        question: 'Will WebP transparency be preserved in PNG?',
        answer: 'Yes! Converting WebP to PNG preserves the exact alpha transparency channel with lossless fidelity.'
      },
      {
        question: 'Can I open PNG in all graphics software?',
        answer: 'Yes! PNG is supported by every graphics editor, Photoshop, Figma, Canva, and operating system.'
      }
    ],
    features: [
      'Lossless PNG output',
      '100% transparent background preservation',
      'Compatible with all graphics editing software',
      'Zero server uploads'
    ]
  },

  // 13. BULK IMAGE RESIZER (Active - Phase 2B)
  {
    id: 'bulk-image-resizer',
    slug: 'bulk-image-resizer',
    name: 'Bulk Image Resizer',
    shortName: 'Bulk Resize',
    tagline: 'Resize multiple images simultaneously and download as a ZIP',
    category: 'edit',
    status: 'active',
    iconName: 'Maximize2',
    seoTitle: 'Bulk Image Resizer Online Free — Batch Resize Photos to ZIP',
    seoDescription: 'Batch resize multiple JPG, PNG, and WebP images online for free. Resize by pixels or percentage, lock aspect ratio, and download all resized photos in a single ZIP file.',
    keywords: ['bulk image resizer', 'batch image resizer', 'resize multiple images online', 'batch photo resizer free', 'resize photos to zip'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
    relatedToolSlugs: ['resize-image', 'bulk-image-compressor', 'compress-image', 'jpg-to-webp', 'png-to-webp'],
    howToSteps: [
      {
        title: 'Upload multiple images',
        description: 'Drag and drop up to 50 photos into the batch queue or select files from your computer.'
      },
      {
        title: 'Configure target dimensions',
        description: 'Choose exact pixel dimensions or scale percentage (e.g. 50%), and toggle aspect ratio lock.'
      },
      {
        title: 'Process batch in your browser',
        description: 'Click Resize All Images to execute fast, memory-safe client-side processing with live progress tracking.'
      },
      {
        title: 'Download individual files or ZIP',
        description: 'Download photos individually or click "Download All as ZIP" to receive your complete resized batch.'
      }
    ],
    faqs: [
      {
        question: 'How many images can I resize at once?',
        answer: 'You can resize up to 50 images in a single batch. All processing happens in your browser with controlled memory management.'
      },
      {
        question: 'Are different image orientations handled properly?',
        answer: 'Yes! When "Preserve individual aspect ratios" is checked, each portrait or landscape photo scales proportionally without distortion.'
      },
      {
        question: 'Are my batch photos uploaded to any server?',
        answer: 'No. All resizing and ZIP generation occur 100% locally in your browser memory.'
      }
    ],
    features: [
      'Batch processing up to 50 images simultaneously',
      'Exact pixel dimension input or percentage scaling (25%, 50%, 75%, 150%, 200%)',
      'Individual aspect ratio lock preservation per image',
      'Sequential memory-safe processing with cancel control',
      'One-click ZIP archive generation and download',
      'Zero server upload — 100% private'
    ]
  },

  // 14. BULK IMAGE COMPRESSOR (Active - Phase 2B)
  {
    id: 'bulk-image-compressor',
    slug: 'bulk-image-compressor',
    name: 'Bulk Image Compressor',
    shortName: 'Bulk Compress',
    tagline: 'Compress dozens of images simultaneously and download as a ZIP',
    category: 'optimize',
    status: 'active',
    iconName: 'Layers',
    seoTitle: 'Bulk Image Compressor — Batch Compress Multiple Photos Online',
    seoDescription: 'Batch compress multiple JPG, PNG, and WebP photos online for free. Reduce file size up to 80%, monitor real-time cumulative savings, and download all compressed files in a ZIP archive.',
    keywords: ['bulk image compressor', 'batch photo compression', 'compress multiple images online', 'bulk reduce image size', 'compress photos to zip'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
    relatedToolSlugs: ['compress-image', 'bulk-image-resizer', 'resize-image', 'jpg-to-webp', 'png-to-webp'],
    howToSteps: [
      {
        title: 'Upload batch of photos',
        description: 'Drop or select up to 50 JPG, PNG, or WebP files into the bulk queue.'
      },
      {
        title: 'Select output format and quality',
        description: 'Choose your desired compression quality level (75%–85% is ideal for web performance).'
      },
      {
        title: 'Compress in your browser',
        description: 'Click Compress All Images to optimize your files locally with live file-size reduction tracking.'
      },
      {
        title: 'Download complete ZIP archive',
        description: 'Click "Download All as ZIP" to save the entire optimized batch in one archive.'
      }
    ],
    faqs: [
      {
        question: 'How much file size reduction can I expect?',
        answer: 'Most photo batches see 50% to 80% total file size savings when converted to WebP or optimized JPEG.'
      },
      {
        question: 'Does bulk compression freeze or crash my browser?',
        answer: 'No. Image Toolbox uses sequential processing and immediately releases memory for each image before proceeding to the next.'
      },
      {
        question: 'How do I download all compressed files?',
        answer: 'Once processing finishes, click "Download All as ZIP" to receive a single organized ZIP archive.'
      }
    ],
    features: [
      'Batch compress up to 50 photos at once',
      'Real-time cumulative batch file size savings tracker',
      'Adjustable compression quality slider',
      'Safe sequential memory cleanup preventing tab crashes',
      'One-click ZIP archive download with lazy-loaded JSZip',
      '100% In-Browser Privacy'
    ]
  },

  // 15. REMOVE IMAGE METADATA (Active - Phase 3A)
  {
    id: 'remove-image-metadata',
    slug: 'remove-image-metadata',
    name: 'Remove Image Metadata',
    shortName: 'Remove Metadata',
    tagline: 'Strip EXIF, GPS location, camera model, and private timestamps from photos',
    category: 'utilities',
    status: 'active',
    iconName: 'ShieldCheck',
    seoTitle: 'Remove Image Metadata Online Free — Strip EXIF & GPS from Photos',
    seoDescription: 'Strip EXIF, GPS location coordinates, camera models, and private metadata tags from JPG, PNG, and WebP photos online for free with 100% in-browser security.',
    keywords: ['remove image metadata', 'strip exif data online', 'remove gps from photo', 'clean photo metadata', 'exif remover free'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
    relatedToolSlugs: ['image-analyzer', 'compress-image', 'convert-image', 'bulk-image-compressor'],
    howToSteps: [
      {
        title: 'Upload your photo',
        description: 'Drop or select any JPG, PNG, or WebP photo containing EXIF or location tags.'
      },
      {
        title: 'Re-encode in browser',
        description: 'Image Toolbox automatically re-encodes pure pixel data into a fresh buffer, stripping all EXIF and GPS markers.'
      },
      {
        title: 'Choose output format',
        description: 'Select your preferred export format (JPG, PNG, or WebP) and adjust visual quality if desired.'
      },
      {
        title: 'Download sanitized photo',
        description: 'Click Download Clean Image to save your privacy-safe photo immediately.'
      }
    ],
    faqs: [
      {
        question: 'What metadata is removed from my photos?',
        answer: 'All EXIF tags including GPS location coordinates, camera and lens models, date/time timestamps, device serial numbers, and software editing tags are completely removed.'
      },
      {
        question: 'Does stripping metadata reduce picture quality?',
        answer: 'No. The pixel data is drawn directly onto an HTML5 canvas at native resolution and re-encoded at high quality.'
      },
      {
        question: 'Are my private photos uploaded to a server?',
        answer: 'No. All processing happens 100% locally inside your browser. Your images never touch any external server.'
      }
    ],
    features: [
      'Strips GPS coordinates and location tags',
      'Removes camera model, lens metadata, and serial numbers',
      'Erases timestamps and software edit history',
      'Re-encodes to clean JPG, PNG, or WebP format',
      '100% In-Browser Privacy — Zero server uploads'
    ]
  },

  // 16. IMAGE ANALYZER (Active - Phase 3A)
  {
    id: 'image-analyzer',
    slug: 'image-analyzer',
    name: 'Image Analyzer',
    shortName: 'Analyzer',
    tagline: 'Inspect image dimensions, aspect ratio, megapixels, transparency, and memory details',
    category: 'utilities',
    status: 'active',
    iconName: 'Info',
    seoTitle: 'Image Analyzer Online Free — Inspect Dimensions, Alpha & Specs',
    seoDescription: 'Analyze image dimensions, megapixels, aspect ratios, alpha channel transparency, MIME types, and uncompressed memory footprint directly in your browser.',
    keywords: ['image analyzer', 'inspect image properties', 'photo dimensions checker', 'check image aspect ratio', 'image transparency detector'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['remove-image-metadata', 'resize-image', 'crop-image', 'image-color-picker'],
    howToSteps: [
      {
        title: 'Select an image to inspect',
        description: 'Drag and drop or choose any image file from your device.'
      },
      {
        title: 'Review property summary',
        description: 'Inspect basic information including file size, dimensions, resolution (megapixels), and orientation.'
      },
      {
        title: 'Inspect technical details',
        description: 'Check alpha transparency, color depth, and uncompressed RAM memory requirements.'
      },
      {
        title: 'Copy analysis report',
        description: 'Click Copy Summary to copy a clean formatted diagnostic report to your clipboard.'
      }
    ],
    faqs: [
      {
        question: 'How does the analyzer detect transparency?',
        answer: 'The analyzer samples the image alpha channel in browser memory to verify whether any non-opaque pixels are present.'
      },
      {
        question: 'What is the uncompressed memory footprint?',
        answer: 'This represents the approximate amount of RAM the decoded 32-bit RGBA bitmap requires in graphics memory (width × height × 4 bytes).'
      }
    ],
    features: [
      'Exact pixel dimensions and megapixel calculation',
      'Simplified aspect ratio and orientation detection',
      'Automatic alpha channel transparency verification',
      'Uncompressed RAM footprint calculation',
      'One-click summary copy to clipboard'
    ]
  },

  // 17. IMAGE COLOR PICKER (Active - Phase 3A)
  {
    id: 'image-color-picker',
    slug: 'image-color-picker',
    name: 'Image Color Picker',
    shortName: 'Color Picker',
    tagline: 'Extract HEX, RGB, and HSL color codes directly from any image with an eyedropper',
    category: 'utilities',
    status: 'active',
    iconName: 'Pipette',
    seoTitle: 'Image Color Picker — Extract HEX, RGB & HSL Codes Online Free',
    seoDescription: 'Pick colors from any photo online with an interactive eyedropper. Extract HEX, RGB, and HSL color values with one-click clipboard copying and touch support.',
    keywords: ['image color picker', 'extract colors from photo', 'hex picker from image', 'online eyedropper tool', 'photo color identifier'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['image-palette-generator', 'image-analyzer', 'crop-image'],
    howToSteps: [
      {
        title: 'Upload your photo',
        description: 'Choose or drop any image into the color picker workspace.'
      },
      {
        title: 'Click or tap any pixel',
        description: 'Click anywhere on desktop or tap on mobile to select the exact pixel color.'
      },
      {
        title: 'Inspect color formats',
        description: 'View the instant color preview with exact HEX, RGB, and HSL values.'
      },
      {
        title: 'Copy color codes',
        description: 'Click the Copy button next to HEX, RGB, or HSL to paste directly into your design tool or CSS.'
      }
    ],
    faqs: [
      {
        question: 'Does this color picker work on mobile devices?',
        answer: 'Yes! The canvas features touch listeners that let you tap anywhere on mobile screens to sample colors effortlessly.'
      },
      {
        question: 'Does the color picker support transparent PNGs?',
        answer: 'Yes. If a sampled pixel has an alpha channel, the RGBA format is automatically displayed with transparency opacity.'
      }
    ],
    features: [
      'Interactive canvas eyedropper with crosshair tracking',
      'Instant HEX, RGB, and HSL code extraction',
      'One-click copy buttons with visual feedback',
      'Mobile touch-friendly color selection',
      '100% In-Browser Execution'
    ]
  },

  // 18. IMAGE PALETTE GENERATOR (Active - Phase 3A)
  {
    id: 'image-palette-generator',
    slug: 'image-palette-generator',
    name: 'Image Palette Generator',
    shortName: 'Palette Generator',
    tagline: 'Extract dominant color palettes and harmonies from any photo',
    category: 'utilities',
    status: 'active',
    iconName: 'Palette',
    seoTitle: 'Image Palette Generator Online — Extract Dominant Color Schemes',
    seoDescription: 'Extract beautiful 3, 5, or 8-color dominant palettes from any image online for free. Copy individual HEX codes or the entire color palette in one click.',
    keywords: ['image palette generator', 'extract color palette from photo', 'color scheme generator from image', 'dominant photo colors', 'hex palette creator'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['image-color-picker', 'image-analyzer', 'crop-image'],
    howToSteps: [
      {
        title: 'Upload your image',
        description: 'Choose or drop any photograph, illustration, or graphic.'
      },
      {
        title: 'Select palette density',
        description: 'Choose between 3, 5, or 8 dominant color clusters depending on your project needs.'
      },
      {
        title: 'Copy swatches or full palette',
        description: 'Click Copy on individual colors or click "Copy Full Palette" to export all HEX codes at once.'
      }
    ],
    faqs: [
      {
        question: 'How does the palette generator extract dominant colors?',
        answer: 'Image Toolbox uses an efficient downsampled spatial quantization algorithm that groups similar color pixels and selects representative distinct centers.'
      },
      {
        question: 'Can I copy the entire palette at once?',
        answer: 'Yes! Click the "Copy Full Palette" button in the header bar to copy a comma-separated list of all HEX codes.'
      }
    ],
    features: [
      'Extract 3, 5, or 8 dominant color clusters',
      'Continuous gradient and individual color swatch previews',
      'Instant HEX and RGB code extraction',
      'Copy individual swatches or the entire palette in one click',
      'Fast, memory-safe in-browser quantization'
    ]
  },

  // 19. ADD TEXT TO IMAGE (Active - Phase 3B)
  {
    id: 'add-text-to-image',
    slug: 'add-text-to-image',
    name: 'Add Text to Image',
    shortName: 'Add Text',
    tagline: 'Overlay customizable text, captions, and titles directly onto images with drag & drop positioning',
    category: 'edit',
    status: 'active',
    iconName: 'Type',
    seoTitle: 'Add Text to Image Online Free — Custom Fonts & Captions',
    seoDescription: 'Add text, captions, and watermarks to photos online for free. Custom fonts, colors, shadows, opacity, and direct drag-and-drop text positioning with 100% in-browser privacy.',
    keywords: ['add text to image', 'write on photo online', 'photo caption maker', 'text overlay on picture', 'add title to image free'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['watermark-image', 'crop-image', 'resize-image', 'add-border-to-image'],
    howToSteps: [
      {
        title: 'Upload your image',
        description: 'Drop or select your JPG, PNG, or WebP photo into the editor workspace.'
      },
      {
        title: 'Type your text and choose styling',
        description: 'Enter your custom message, choose font family, adjust size, color, opacity, bold/italic, and drop shadow.'
      },
      {
        title: 'Position text on image',
        description: 'Drag text directly across the canvas with mouse or finger to position it perfectly.'
      },
      {
        title: 'Download full-resolution image',
        description: 'Click Download to export your image with crisp, full-resolution text rendered.'
      }
    ],
    faqs: [
      {
        question: 'Can I position text anywhere on the image?',
        answer: 'Yes! Simply click and drag the text on desktop, or drag with your finger on touchscreens to place it anywhere.'
      },
      {
        question: 'Does adding text reduce original photo resolution?',
        answer: 'No. The final output is rendered at the full native resolution of your original photo.'
      }
    ],
    features: [
      'Direct mouse and touch drag positioning',
      'Curated web-safe typography (Inter, Arial, Georgia, Impact, etc.)',
      'Adjustable size, color, opacity, bold, italic, and drop shadow',
      'Multi-line text support with alignment controls',
      '100% In-Browser Privacy — Zero server uploads'
    ]
  },

  // 20. WATERMARK IMAGE (Active - Phase 3B)
  {
    id: 'watermark-image',
    slug: 'watermark-image',
    name: 'Watermark Image',
    shortName: 'Watermark',
    tagline: 'Protect your photos with customizable text or transparent logo watermarks',
    category: 'edit',
    status: 'active',
    iconName: 'ShieldCheck',
    seoTitle: 'Watermark Image Online Free — Add Text & Logo Watermarks',
    seoDescription: 'Add custom text or transparent PNG logo watermarks to your photos online. 9 grid presets, angle rotation, opacity slider, and repeating tiled patterns with complete in-browser security.',
    keywords: ['watermark image online', 'add watermark to photo', 'copyright watermark creator', 'batch watermark tool', 'photo logo overlay'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['add-text-to-image', 'compress-image', 'resize-image', 'crop-image'],
    howToSteps: [
      {
        title: 'Upload base photo',
        description: 'Drop or choose your original photo.'
      },
      {
        title: 'Choose Text or Logo watermark',
        description: 'Type your copyright text or upload your transparent PNG logo image.'
      },
      {
        title: 'Adjust placement and styling',
        description: 'Select from 9 position presets or drag directly, adjust opacity, angle, or enable tiled repeating mode.'
      },
      {
        title: 'Download protected image',
        description: 'Export your watermarked photo in WebP, PNG, or JPG format.'
      }
    ],
    faqs: [
      {
        question: 'Can I upload a transparent logo watermark?',
        answer: 'Yes! Upload any transparent PNG or WebP logo file to overlay it seamlessly onto your photos.'
      },
      {
        question: 'What is tiled watermark mode?',
        answer: 'Tiled mode repeats your text or logo watermark in a continuous diagonal grid across the entire image to prevent unauthorized cropping.'
      }
    ],
    features: [
      'Dual mode: Custom Text or Uploaded PNG Logo watermark',
      '9 Quick grid position presets + direct canvas dragging',
      'Continuous repeating tiled watermark pattern option',
      'Fine rotation angle and opacity control',
      '100% In-Browser Privacy'
    ]
  },

  // 21. ADD BORDER TO IMAGE (Active - Phase 3B)
  {
    id: 'add-border-to-image',
    slug: 'add-border-to-image',
    name: 'Add Border to Image',
    shortName: 'Add Border',
    tagline: 'Add stylish solid borders, photo frames, and colored margins to photos',
    category: 'edit',
    status: 'active',
    iconName: 'Square',
    seoTitle: 'Add Border to Image Online Free — Photo Frames & Margins',
    seoDescription: 'Add custom width, color, and opacity borders to your photos online for free. Support for outside canvas expansion and inside inset border modes with 100% client-side privacy.',
    keywords: ['add border to image', 'photo frame online', 'add white border to photo', 'image margin tool', 'picture border maker'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['round-image', 'crop-image', 'resize-image', 'add-text-to-image'],
    howToSteps: [
      {
        title: 'Upload your photo',
        description: 'Choose or drop any image file into the border workspace.'
      },
      {
        title: 'Select border placement mode',
        description: 'Choose Outside Frame (expands canvas dimensions) or Inside Border (insets over edges).'
      },
      {
        title: 'Adjust width and color',
        description: 'Use the slider to select border thickness (0–200px) and choose your border color.'
      },
      {
        title: 'Download framed photo',
        description: 'Click Download Bordered Image to save your finished photo.'
      }
    ],
    faqs: [
      {
        question: 'Does adding an outside border crop my original photo?',
        answer: 'No! Outside frame mode expands the total canvas dimensions so your original photo remains 100% visible and uncropped.'
      },
      {
        question: 'What is the difference between outside frame and inside border?',
        answer: 'Outside Frame expands the canvas width and height to add borders around the photo without covering any pixels. Inside Inset draws the border directly over the outer edges of the photo, maintaining exact original dimensions.'
      },
      {
        question: 'Can I choose custom border colors and opacities?',
        answer: 'Yes! You can pick any hex color or preset color (white, black, transparent, accents) and adjust the border opacity from 0% to 100%.'
      }
    ],
    features: [
      'Outside Frame mode (expands total dimensions without cropping)',
      'Inside Inset Border mode',
      'Precise width slider (0–200px) and color picker',
      'Adjustable border opacity',
      'Full resolution export'
    ]
  },

  // 22. ROUND IMAGE (Active - Phase 3B)
  {
    id: 'round-image',
    slug: 'round-image',
    name: 'Round Image & Rounded Corners',
    shortName: 'Round Image',
    tagline: 'Create circular avatars and smooth rounded corners with transparent backgrounds',
    category: 'edit',
    status: 'active',
    iconName: 'Circle',
    seoTitle: 'Round Image Online Free — Circular Avatar & Rounded Corners',
    seoDescription: 'Create circular profile pictures or smooth rounded corners for images online for free. Support for transparent PNG/WebP backgrounds and custom JPEG background colors.',
    keywords: ['round image online', 'circular photo maker', 'round image corners', 'circle avatar creator', 'rounded picture tool'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'],
    relatedToolSlugs: ['add-border-to-image', 'crop-image', 'resize-image', 'compress-image'],
    howToSteps: [
      {
        title: 'Upload photo',
        description: 'Drop or select your photo into the rounded corner workspace.'
      },
      {
        title: 'Select preset or custom radius',
        description: 'Choose Small (16px), Medium (32px), Large (64px), or 1:1 Circle avatar preset.'
      },
      {
        title: 'Configure background transparency',
        description: 'Export as PNG or WebP for transparent corners, or choose a custom background color for JPG.'
      },
      {
        title: 'Download rounded image',
        description: 'Click Download Rounded Image to save your profile picture or rounded graphic.'
      }
    ],
    faqs: [
      {
        question: 'How do I create a perfect circle for social media profile pictures?',
        answer: 'Select the "Circle" preset. If your image is rectangular, it will automatically crop to a centered square and apply a perfect circular mask.'
      },
      {
        question: 'Will the corners be transparent?',
        answer: 'Yes! When exporting in PNG or WebP format, the outer corner area is completely transparent.'
      }
    ],
    features: [
      'Instant Circle / Profile Avatar preset with center cropping',
      'Quick corner radius presets: Small (16px), Medium (32px), Large (64px)',
      'Fine custom radius slider control',
      'Full alpha transparency support for PNG/WebP',
      '100% In-Browser Execution'
    ]
  },

  // 23. FAVICON GENERATOR (Active - Phase 3C)
  {
    id: 'favicon-generator',
    slug: 'favicon-generator',
    name: 'Favicon & App Icon Generator',
    shortName: 'Favicon Generator',
    tagline: 'Generate complete multi-size favicon packages, favicon.ico, and app icons in one click',
    category: 'developer',
    status: 'active',
    iconName: 'Globe',
    seoTitle: 'Favicon Generator Online Free — Multi-Size ICO & App Icons',
    seoDescription: 'Create high-quality favicons and app icons online for free. Generates favicon.ico, 16x16, 32x32, Apple Touch 180x180, and Android Chrome icons with downloadable ZIP and HTML code.',
    keywords: ['favicon generator', 'make favicon.ico online', 'app icon creator', 'apple touch icon generator', 'generate website favicon'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
    relatedToolSlugs: ['svg-to-png', 'resize-image', 'crop-image', 'round-image'],
    howToSteps: [
      {
        title: 'Upload your logo or icon',
        description: 'Drop or select your square or rectangular brand logo.'
      },
      {
        title: 'Choose background option',
        description: 'Keep original transparent background or select a solid background fill.'
      },
      {
        title: 'Copy HTML snippet',
        description: 'Copy the ready-to-use <head> link tags for your website.'
      },
      {
        title: 'Download complete favicon ZIP',
        description: 'Click Download Complete Favicon ZIP to receive all PNG sizes, favicon.ico, and site.webmanifest.'
      }
    ],
    faqs: [
      {
        question: 'What sizes are included in the generated ZIP?',
        answer: 'The package contains favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon-48x48.png, apple-touch-icon.png (180x180), android-chrome-192x192.png, android-chrome-512x512.png, and site.webmanifest.'
      },
      {
        question: 'Is favicon.ico compatible with all browsers?',
        answer: 'Yes! The generated favicon.ico includes standard binary header structures compatible with modern and legacy web browsers.'
      }
    ],
    features: [
      'Generates 16x16, 32x32, 48x48, 180x180, 192x192, 512x512, and favicon.ico',
      'One-click ZIP archive download with site.webmanifest',
      'Copyable HTML <head> integration code',
      'Transparent or custom background support',
      '100% In-Browser Execution'
    ]
  },

  // 24. IMAGE TO BASE64 (Active - Phase 3C)
  {
    id: 'image-to-base64',
    slug: 'image-to-base64',
    name: 'Image to Base64 Converter',
    shortName: 'Image to Base64',
    tagline: 'Convert images into raw Base64 strings or complete Data URIs for inline embedding',
    category: 'developer',
    status: 'active',
    iconName: 'Binary',
    seoTitle: 'Image to Base64 Converter Online Free — Fast & Privacy First',
    seoDescription: 'Convert JPG, PNG, WebP, SVG, and GIF images to Base64 strings and Data URIs online. Instant clipboard copy, payload metrics, and .txt download with 100% client-side privacy.',
    keywords: ['image to base64', 'convert photo to base64', 'base64 image encoder', 'picture to base64 string', 'inline image encoder'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif'],
    relatedToolSlugs: ['base64-to-image', 'image-to-data-uri', 'image-analyzer', 'convert-image'],
    howToSteps: [
      {
        title: 'Upload image file',
        description: 'Drop or select any image to encode into Base64 format.'
      },
      {
        title: 'Select output mode',
        description: 'Choose between Raw Base64 string or complete Data URI with MIME prefix.'
      },
      {
        title: 'Copy string or download',
        description: 'Click Copy String to paste into HTML/CSS, or Download .txt to save the encoded payload.'
      }
    ],
    faqs: [
      {
        question: 'Why should I convert an image to Base64?',
        answer: 'Base64 allows you to embed small icons directly into HTML or CSS files, eliminating additional HTTP roundtrips.'
      },
      {
        question: 'How much does Base64 increase file size?',
        answer: 'Base64 encoding increases the binary data size by approximately 33% due to 6-bit to 8-bit character representation.'
      }
    ],
    features: [
      'Encodes JPG, PNG, WebP, SVG, and GIF files',
      'Dual modes: Raw Base64 string and complete Data URI',
      'One-click clipboard copy and .txt file download',
      'Payload size and encoding overhead metrics',
      '100% In-Browser Privacy — Zero server uploads'
    ]
  },

  // 25. IMAGE TO DATA URI (Active - Phase 3C)
  {
    id: 'image-to-data-uri',
    slug: 'image-to-data-uri',
    name: 'Image to Data URI Converter',
    shortName: 'Image to Data URI',
    tagline: 'Convert images into data:image/...;base64,... Data URIs for inline HTML and CSS',
    category: 'developer',
    status: 'active',
    iconName: 'Code',
    seoTitle: 'Image to Data URI Converter Online Free — HTML & CSS Embedding',
    seoDescription: 'Convert images into data:image/...;base64 Data URIs online for free. Embed images directly into HTML <img> tags or CSS background-image properties with 100% in-browser security.',
    keywords: ['image to data uri', 'data uri generator', 'base64 data uri', 'convert image to data url', 'embed image in css'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif'],
    relatedToolSlugs: ['image-to-base64', 'base64-to-image', 'image-analyzer', 'convert-image'],
    howToSteps: [
      {
        title: 'Upload image file',
        description: 'Select any PNG, JPG, WebP, or SVG file.'
      },
      {
        title: 'Review Data URI output',
        description: 'View the complete formatted data URI with proper MIME type headers.'
      },
      {
        title: 'Copy or embed',
        description: 'Copy the Data URI directly into your HTML src attribute or CSS background-image URL.'
      }
    ],
    faqs: [
      {
        question: 'How do I use a Data URI in HTML?',
        answer: 'Paste the entire string directly into the src attribute of an image tag: <img src="data:image/png;base64,..." alt="Embedded image">'
      },
      {
        question: 'How do I use a Data URI in CSS stylesheets?',
        answer: 'Set the Data URI inside the url() function for background-image: background-image: url("data:image/svg+xml;base64,...");'
      },
      {
        question: 'When should I use Data URIs instead of external image files?',
        answer: 'Data URIs are ideal for small icons, logos, or loading spinners where eliminating HTTP round-trips and request overhead improves rendering performance.'
      }
    ],
    features: [
      'Generates complete data:image/...;base64,... syntax',
      'Instant clipboard copy and .txt file download',
      'Accurate MIME type detection',
      '100% Client-Side Encoding'
    ]
  },

  // 26. BASE64 TO IMAGE (Active - Phase 3C)
  {
    id: 'base64-to-image',
    slug: 'base64-to-image',
    name: 'Base64 to Image Decoder',
    shortName: 'Base64 to Image',
    tagline: 'Decode Base64 strings and Data URIs back into downloadable PNG, JPG, or WebP image files',
    category: 'developer',
    status: 'active',
    iconName: 'FileCode',
    seoTitle: 'Base64 to Image Decoder Online Free — Convert Base64 to PNG/JPG',
    seoDescription: 'Decode Base64 strings and Data URIs back into full-resolution image files online for free. Instant preview, dimension inspection, and PNG/JPG download with 100% browser privacy.',
    keywords: ['base64 to image', 'decode base64 to png', 'base64 image viewer', 'convert base64 to picture', 'data uri to image'],
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif'],
    relatedToolSlugs: ['image-to-base64', 'image-to-data-uri', 'image-analyzer', 'convert-image'],
    howToSteps: [
      {
        title: 'Paste Base64 string',
        description: 'Paste your raw Base64 string or complete Data URI into the text box.'
      },
      {
        title: 'Decode and preview',
        description: 'Click Decode to Image to inspect image dimensions, MIME type, and decoded file size.'
      },
      {
        title: 'Download image',
        description: 'Choose your desired export format (PNG, JPG, WebP) and click Download Image File.'
      }
    ],
    faqs: [
      {
        question: 'Does this tool support raw Base64 without data: prefix?',
        answer: 'Yes! The decoder automatically detects magic headers and resolves MIME types for raw Base64 payloads.'
      },
      {
        question: 'What image formats can be decoded from Base64?',
        answer: 'The decoder supports PNG, JPEG/JPG, WebP, GIF, and SVG formats encoded as Base64 strings or Data URIs.'
      },
      {
        question: 'Is decoding Base64 strings safe and private?',
        answer: 'Yes. All decoding executes strictly inside your browser in isolated memory without uploading any data to external servers.'
      }
    ],
    features: [
      'Decodes raw Base64 and complete Data URI strings',
      'Safe in-memory image rendering without DOM HTML injection',
      'Dimension and file size diagnostics',
      'Export to PNG, JPG, or WebP',
      '100% In-Browser Execution'
    ]
  },

  // 27. SVG TO PNG (Active - Phase 3C)
  {
    id: 'svg-to-png',
    slug: 'svg-to-png',
    name: 'SVG to High-Resolution PNG Converter',
    shortName: 'SVG to PNG',
    tagline: 'Convert vector SVG files and markup into crisp, high-resolution PNG images up to 8x scale',
    category: 'developer',
    status: 'active',
    iconName: 'FileCode',
    seoTitle: 'SVG to PNG Converter Online Free — High-DPI Vector Rasterizer',
    seoDescription: 'Convert SVG vector files to crisp PNG images online for free. Up to 8x resolution scaling (1x, 2x HD, 4x 4K, 8x Print), custom dimensions, transparent background, and safe XML sanitization.',
    keywords: ['svg to png', 'convert svg to high resolution png', 'vector to png converter', 'rasterize svg online', 'svg to 4k png'],
    supportedFormats: ['image/svg+xml'],
    relatedToolSlugs: ['favicon-generator', 'convert-image', 'resize-image', 'image-to-base64'],
    howToSteps: [
      {
        title: 'Upload SVG file or paste markup',
        description: 'Drop an SVG file or paste raw SVG XML code.'
      },
      {
        title: 'Choose resolution multiplier',
        description: 'Select 1x, 2x HD, 4x 4K, or 8x Print scaling multiplier.'
      },
      {
        title: 'Set background color',
        description: 'Keep transparent or select a solid background fill.'
      },
      {
        title: 'Download crisp PNG',
        description: 'Click Download Raster PNG to save your high-resolution image.'
      }
    ],
    faqs: [
      {
        question: 'Can I export SVGs at higher resolutions without pixelation?',
        answer: 'Yes! Because SVG is vector-based, choosing 2x, 4x, or 8x scaling rasterizes the vector mathematics directly at ultra-sharp native resolutions.'
      },
      {
        question: 'Is SVG rasterization secure?',
        answer: 'Yes. Image Toolbox sanitizes SVG XML, stripping all script tags, foreign objects, and event handlers before rendering.'
      }
    ],
    features: [
      'High-DPI resolution multipliers (1x, 2x HD, 4x 4K, 8x Print)',
      'Upload file or paste raw SVG XML markup',
      'Safe DOMParser sanitization removing dangerous scripts',
      'Transparent background or solid background color options',
      '100% In-Browser Privacy'
    ]
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'edit', label: 'Edit & Transform', description: 'Crop, resize, rotate, flip, and frame photos' },
  { id: 'optimize', label: 'Optimize & Compress', description: 'Shrink file sizes and remove unnecessary metadata' },
  { id: 'convert', label: 'Convert Formats', description: 'Convert between WebP, PNG, JPG, and AVIF' },
  { id: 'utilities', label: 'Calculators & Utilities', description: 'Color picker, aspect ratio, and DPI calculations' },
  { id: 'developer', label: 'Web & Developer', description: 'Favicon generator, Base64 encoder, and Data URIs' },
];

export function getToolBySlug(slug: string): ToolItem | undefined {
  return TOOLS_REGISTRY.find(t => t.slug === slug);
}

export function getActiveTools(): ToolItem[] {
  return TOOLS_REGISTRY.filter(t => t.status === 'active');
}

export function getRelatedTools(toolSlug: string): ToolItem[] {
  const tool = getToolBySlug(toolSlug);
  if (!tool) return [];
  return tool.relatedToolSlugs
    .map(slug => getToolBySlug(slug))
    .filter((t): t is ToolItem => t !== undefined);
}
