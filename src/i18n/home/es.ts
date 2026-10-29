import type { LocalizedHomeData } from '../types';

export const esHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Todas las herramientas de imagen que necesitas, en un solo lugar',
    subtitle:
      'Recorta, cambia el tamaño, comprime, convierte, quita fondos y retoca fotos gratis. Sin registro, sin marcas de agua y tus archivos no salen de tu dispositivo.',
    dropzoneTitle: 'Suelta una imagen para empezar',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, TIFF, SVG o HEIC de iPhone, hasta 50 MB',
  },
  sections: {
    indexTitle: 'Todas las herramientas',
    indexSubtitle: 'Todas las herramientas usan el mismo espacio de trabajo: abre una imagen, ajústala y descárgala.',
    pillarsTitle: 'Cómo funciona',
    faqTitle: 'Preguntas',
  },
  trustPillars: [
    {
      title: 'Un espacio de trabajo para todo',
      description:
        'Todas las herramientas se abren de la misma forma y puedes pasar tu imagen directamente a la siguiente, por ejemplo, recortar y después comprimir.',
      icon: 'Layers',
    },
    {
      title: 'No se sube nada',
      description:
        'Tu navegador procesa las imágenes en tu propio dispositivo, así que no hay que esperar a que se suban ni queda ninguna copia en un servidor.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Gratis y sin cuenta',
      description: 'Sin registro, sin marcas de agua y sin límites diarios. Cada archivo puede pesar hasta 50 MB; las herramientas por lotes admiten hasta 50 archivos.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Editar y transformar',
    'optimize-compress': 'Optimizar y comprimir',
    'convert-formats': 'Convertir formatos',
    'pdf-documents': 'PDF y documentos',
    utilities: 'Inspección y utilidades',
    developer: 'Herramientas para desarrolladores',
  },
  faqs: [
    {
      question: '¿Se suben mis imágenes a algún sitio?',
      answer:
        'No. Todas las herramientas funcionan dentro de tu navegador, así que tus imágenes se procesan en tu propio dispositivo y nunca se envían a un servidor. El quitafondos descarga su modelo de IA una vez y después también funciona en tu dispositivo.',
    },
    {
      question: '¿De verdad es gratis?',
      answer: 'Sí. Todas las herramientas son gratuitas, no necesitas cuenta y no se añade ninguna marca de agua.',
    },
    {
      question: '¿Qué tamaño pueden tener mis imágenes?',
      answer:
        'Cada imagen puede pesar hasta 50 MB. El compresor y el redimensionador por lotes aceptan hasta 50 imágenes a la vez, de hasta 50 MB cada una. Las fotos muy grandes pueden ir lentas en teléfonos antiguos.',
    },
    {
      question: '¿Qué formatos puedo abrir y guardar?',
      answer:
        'Puedes abrir fotos JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, TIFF, SVG y HEIC de iPhone. Puedes guardar en JPG, PNG, WebP o AVIF, según la herramienta.',
    },
    {
      question: '¿Funciona en mi teléfono?',
      answer:
        'Sí. Las herramientas funcionan en los navegadores móviles actuales de iPhone y Android, también con fotos HEIC de iPhone. Además, puedes instalar el sitio como una app. Después de tu primera visita, la mayoría de las herramientas funcionan sin conexión; la exportación a AVIF y la eliminación de fondo deben usarse una vez con conexión.',
    },
    {
      question: '¿Puedo usar una herramienta tras otra?',
      answer:
        'Sí. Después de editar, elige un siguiente paso, como Comprimir o Cambiar tamaño, y tu imagen se abre en esa herramienta sin tener que guardarla y volver a subirla.',
    },
  ],
};
