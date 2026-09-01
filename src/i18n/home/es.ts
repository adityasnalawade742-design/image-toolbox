import type { LocalizedHomeData } from '../types';

export const esHome: LocalizedHomeData = {
  hero: {
    badge: '🔒 100% Procesamiento Privado en el Navegador',
    title: 'Herramientas de Imagen de Precisión, Directamente en tu Navegador',
    subtitle: 'Recorta, redimensiona, comprime, convierte e inspecciona imágenes a máxima velocidad sin subir archivos a ningún servidor.',
    dropzoneTitle: 'Arrastra y Suelta tus Imágenes Aquí',
    dropzoneSubtitle: 'o haz clic para explorar en tu dispositivo • PNG, JPG, WebP, SVG, AVIF, GIF',
  },
  trustPillars: [
    {
      title: 'Sin Subidas a Servidores',
      description: 'Todo el procesamiento y manipulación se realiza en tu propio navegador mediante HTML5 Canvas.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Precisión Píxel por Píxel',
      description: 'Preservación de calidad óptima con algoritmos avanzados de remuestreo.',
      icon: 'Sparkles',
    },
    {
      title: 'Velocidad Instantánea',
      description: 'Sin esperas de red ni colas de carga. Procesamiento inmediato en tu equipo.',
      icon: 'Zap',
    },
  ],
  categoryNames: {
    'edit-transform': 'Edición y Transformación',
    'optimize-compress': 'Optimización y Compresión',
    'convert-formats': 'Conversión de Formatos',
    'utilities': 'Inspección y Utilidades',
    'developer': 'Herramientas para Desarrolladores',
  },
  faqs: [
    {
      question: '¿Mis imágenes se envían a algún servidor?',
      answer: 'No. Image Toolbox funciona 100% del lado del cliente. Tus fotos nunca salen de tu navegador ni se almacenan en servidores externos.',
    },
    {
      question: '¿Existe algún límite de tamaño o cuota de uso?',
      answer: 'No. Al procesarse directamente en la memoria de tu dispositivo, puedes procesar imágenes de cualquier tamaño sin restricciones.',
    },
    {
      question: '¿Qué formatos de imagen son compatibles?',
      answer: 'Soporta PNG, JPG/JPEG, WebP, SVG, AVIF, GIF e ICO en todos los navegadores modernos de escritorio y móviles.',
    },
  ],
};
