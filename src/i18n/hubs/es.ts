import type { HubTexts } from './types';

export const esHubs: HubTexts = {
  labels: {
    server: 'Usa nuestro servidor',
    more: 'Más colecciones',
    allTools: 'Las {count} herramientas',
  },
  pages: {
    'pdf-tools': {
      title: 'Herramientas PDF gratis: unir, convertir, editar y firmar',
      description: '57 herramientas PDF gratis: une, divide y comprime PDF, convierte a y desde Word o imágenes, edita, firma y protege. Sin registro ni marcas de agua.',
      h1: 'Herramientas PDF',
      intro:
        'Todo para trabajar con PDF, gratis y sin cuenta: une y divide archivos, pasa Word, Excel, PowerPoint e imágenes a PDF y al revés, edita, rellena, firma y protege. La mayoría de las herramientas funcionan en tu navegador, así que el PDF no sale de tu dispositivo; las pocas que necesitan nuestro servidor están marcadas, y sus archivos se borran justo después.',
      groups: {
        toPdf: 'Convertir a PDF',
        fromPdf: 'Convertir desde PDF',
        edit: 'Editar y anotar',
        pages: 'Organizar páginas',
        secure: 'Firmar, proteger y limpiar',
        fix: 'Comprimir, reparar y revisar',
      },
      faqs: [
        { question: '¿Estas herramientas PDF son gratis?', answer: 'Sí. Todas se usan gratis y sin cuenta, sin marca de agua ni límite diario.' },
        {
          question: '¿Se suben mis PDF?',
          answer:
            'La mayoría de las herramientas funcionan dentro de tu navegador, así que el archivo se queda en tu dispositivo. Las marcadas con «Usa nuestro servidor», como Word a PDF, Comprimir PDF y OCR de PDF, envían el archivo por una conexión cifrada y lo borran en cuanto devuelven el resultado.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Herramientas gratis para editar imágenes: recortar, redimensionar',
      description: '42 herramientas gratis para editar fotos: recorta, redimensiona, gira, quita o cambia el fondo, añade texto y marcas de agua y adapta imágenes a redes.',
      h1: 'Herramientas para editar imágenes',
      intro:
        'Ediciones rápidas sin instalar nada: recorta y redimensiona, quita o cambia el fondo, añade texto, marcas de agua y bordes, mejora la nitidez y los colores, o adapta una imagen a Instagram, YouTube y otras redes. Todas funcionan en tu navegador, así que tus fotos nunca se suben y conservan su formato siempre que es posible.',
      groups: {
        basics: 'Recortar, redimensionar y girar',
        background: 'Fondos y recortes',
        text: 'Texto, marcas de agua y anotaciones',
        enhance: 'Corregir y mejorar',
        social: 'Tamaños para redes sociales',
        combine: 'Unir y dividir',
      },
      faqs: [
        { question: '¿Tengo que instalar una app?', answer: 'No. Las herramientas funcionan en cualquier navegador actual, en ordenador o en el móvil, y tus fotos se quedan en tu dispositivo.' },
        {
          question: '¿Mi foto pierde calidad?',
          answer: 'Los cambios se hacen sobre la foto a tamaño completo, que se guarda en su formato original siempre que es posible. Los JPG y WebP se vuelven a guardar con alta calidad.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Conversor de imágenes gratis: HEIC, JPG, PNG, WebP, AVIF',
      description: '26 conversores de imágenes gratis en tu navegador: HEIC a JPG, JPG a PNG, WebP y AVIF, GIF, BMP, TIFF y SVG a formatos comunes, con varios archivos a la vez.',
      h1: 'Conversores de formato de imagen',
      intro:
        'Pasa una imagen al formato que necesitas: fotos HEIC del iPhone a JPG, PNG a JPG o WebP para archivos más ligeros, AVIF para la web, o GIF, BMP, TIFF y SVG a formatos de uso diario. La mayoría de los conversores aceptan varios archivos a la vez, y todos funcionan en tu navegador, así que no se sube nada. ¿No sabes cuál usar? El Conversor de imágenes universal abre casi cualquier imagen y la guarda como JPG, PNG, WebP o AVIF.',
      groups: {
        any: 'Cualquier formato',
        heic: 'Fotos del iPhone (HEIC)',
        jpgPng: 'JPG y PNG',
        web: 'WebP y AVIF',
        other: 'GIF, BMP, TIFF y SVG',
        pdf: 'A PDF y texto',
      },
      faqs: [
        {
          question: '¿Qué formato elijo?',
          answer: 'JPG para fotos que deben abrirse en cualquier sitio, PNG para capturas, logotipos y transparencia, y WebP o AVIF para archivos más ligeros en webs. Las fotos HEIC del iPhone conviene pasarlas a JPG para compartirlas.',
        },
        { question: '¿Puedo convertir muchas imágenes a la vez?', answer: 'Sí. Suelta varios archivos en un conversor y se convierten juntos con los mismos ajustes; luego se descargan en un solo ZIP.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Generador y lector de códigos QR y de barras gratis',
      description: '15 herramientas gratis: códigos QR de enlaces, wifi, contactos, WhatsApp y pagos, códigos de barras EAN, UPC e ISBN, y lectura de códigos con la cámara.',
      h1: 'Herramientas de códigos QR y de barras',
      intro:
        'Crea un código QR para un enlace, una red wifi, una tarjeta de contacto, un chat de WhatsApp o un pago, genera códigos de barras EAN, UPC, ISBN, Data Matrix y PDF417, o crea cientos a la vez desde una lista e imprímelos en una hoja. También puedes leer códigos desde una foto o la cámara. Todo funciona en tu navegador y sin registro.',
      groups: {
        qr: 'Códigos QR',
        barcodes: 'Códigos de barras',
        read: 'Escanear y leer',
      },
      faqs: [
        { question: '¿Los códigos QR caducan?', answer: 'No. El contenido va dentro del propio código, no detrás de un enlace nuestro, así que funciona mientras el código impreso se pueda leer.' },
        {
          question: '¿Puedo usar estos códigos de barras en productos de tienda?',
          answer: 'Los códigos se dibujan según el estándar, pero los números EAN y UPC de productos que se venden en tiendas los asigna GS1. Para tu inventario, estanterías o eventos sirve cualquier número.',
        },
      ],
    },
    'image-utilities': {
      title: 'Utilidades de imagen gratis: visor EXIF, cuentagotas, DPI',
      description: '21 herramientas gratis para analizar imágenes: ve y borra metadatos, toma colores, cambia DPI, pasa píxeles a pulgadas o cm y copia texto de imágenes.',
      h1: 'Utilidades de imagen',
      intro:
        'Pequeñas herramientas para las dudas que surgen con las imágenes: qué revelan los metadatos de una foto y cómo quitarlos, qué colores usa, a qué tamaño se imprime con ciertos DPI, si dos fotos son distintas o qué texto contiene. Todas funcionan en tu navegador, así que tus imágenes se quedan en tu dispositivo.',
      groups: {
        inspect: 'Analizar fotos',
        colour: 'Colores',
        size: 'Tamaños, DPI e impresión',
        text: 'Texto y mensajes ocultos',
      },
      faqs: [
        {
          question: '¿Puedo quitar la ubicación de una foto?',
          answer: 'Sí. Eliminar metadatos de imagen borra la ubicación GPS, los datos de la cámara y el resto de datos EXIF, y Visor EXIF muestra lo que contiene una foto antes de compartirla.',
        },
        {
          question: '¿Qué DPI necesito para imprimir?',
          answer: '300 DPI es lo habitual para fotos y documentos. Los DPI solo fijan el tamaño impreso, no la cantidad de píxeles: Cambiar DPI de imagen los escribe en el archivo, y las calculadoras Píxeles a pulgadas y Píxeles a cm muestran a qué tamaño se imprimirá.',
        },
      ],
    },
  },
};
