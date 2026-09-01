import { LocalizedHomeData } from '../types';

export const esHome: LocalizedHomeData = {
  heroPill: 'Privacidad Garantizada • Sin Subidas al Servidor • 27 Herramientas Gratis',
  heroHeadlineMain: 'Herramientas de Imagen de Precisión,',
  heroHeadlineAccent: 'Directamente en tu Navegador',
  heroSubheadline: 'Recorta, redimensiona, comprime, convierte y edita fotos localmente sin subir archivos a la nube, con latencia cero y máxima calidad.',
  guarantee1: '100% Privacidad en el Navegador',
  guarantee2: 'Velocidad Instantánea sin Esperas',
  guarantee3: 'Sin Límites de Tamaño',
  whyChooseTitle: 'Por qué los Profesionales Eligen Image Toolbox',
  whyChooseSubtitle: 'Diseñado para desarrolladores, diseñadores, fotógrafos y usuarios que valoran su privacidad.',
  feature1Title: 'Cero Subidas al Servidor',
  feature1Desc: 'Tus fotos permanecen en tu dispositivo de forma segura. El motor HTML5 Canvas procesa todo en tu navegador con total aislamiento.',
  feature2Title: 'Motor Canvas Ultrarrápido',
  feature2Desc: 'Vista previa en tiempo real, operaciones por lotes y codificadores WebP/PNG de alto rendimiento sin colas de servidor.',
  feature3Title: 'Listo para Desarrolladores y Webmasters',
  feature3Desc: 'Desde codificación Base64 hasta rasterización SVG, eliminación de EXIF y generador de favicons en un solo lugar.',
  categories: [
    { id: 'edit', label: 'Editar y Transformar', description: 'Recorta, redimensiona, rota, voltea y enmarca imágenes' },
    { id: 'optimize', label: 'Optimizar y Comprimir', description: 'Reduce tamaño de archivo y elimina metadatos innecesarios' },
    { id: 'convert', label: 'Convertir Formatos', description: 'Convierte entre formatos WebP, PNG, JPG y AVIF' },
    { id: 'utilities', label: 'Calculadoras y Utilidades', description: 'Selector de color, proporciones y cálculo de DPI' },
    { id: 'developer', label: 'Desarrollo Web', description: 'Generador de favicon, codificador Base64 y Data URIs' }
  ],
  faqs: [
    {
      question: '¿Mis fotos o archivos se suben a algún servidor externo?',
      answer: 'No. Nunca. Image Toolbox ejecuta todas las operaciones de imagen dentro de tu navegador web mediante HTML5 Canvas. Tus archivos jamás se transmiten por internet ni se guardan en la nube.'
    },
    {
      question: '¿Image Toolbox es realmente 100% gratuito?',
      answer: 'Sí, las 27 herramientas son completamente gratuitas, sin límites de uso, sin cuotas, sin marcas de agua y sin necesidad de registrarse.'
    },
    {
      question: '¿Qué formatos de imagen puedo convertir y optimizar?',
      answer: 'Image Toolbox admite JPG, JPEG, PNG, WebP, AVIF, SVG, GIF y Data URIs Base64 en todas las operaciones estándar de conversión, redimensión y compresión.'
    },
    {
      question: '¿Puedo procesar varias imágenes en lote?',
      answer: '¡Sí! Disponemos de herramientas dedicadas de redimensión y compresión masiva que procesan docenas de imágenes a la vez y las empaquetan en un archivo ZIP descargable al instante.'
    }
  ]
};
