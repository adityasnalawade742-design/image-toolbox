import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'src', 'i18n', 'tools');

// Master tool templates translated for 8 languages
const LOCALES_DATA = {
  es: {
    'crop-image': {
      name: 'Recortar Imagen',
      shortName: 'Recortar',
      tagline: 'Recorta y encuadra fotos con relaciones de aspecto estándar y personalizadas',
      seoTitle: 'Recortar Imagen Online Gratis — Editor de Recorte en el Navegador',
      seoDescription: 'Recorta imágenes JPG, PNG y WebP online directamente en tu navegador. Proporciones fijas (1:1, 16:9, 4:3, círculo) con 100% de privacidad local.',
      keywords: ['recortar imagen online', 'cortar fotos gratis', 'recortador de fotos', 'recortar foto en circulo', 'crop imagen'],
      howToSteps: [
        { title: 'Sube tu imagen', description: 'Arrastra y suelta tu archivo o elígelo desde tu dispositivo.' },
        { title: 'Elige la proporción y área', description: 'Selecciona 1:1 Cuadrado, 16:9, 4:3 o ajusta manualmente el marco.' },
        { title: 'Ajusta rotación o reflejo', description: 'Gira la imagen o activa el modo avatar circular si lo deseas.' },
        { title: 'Descarga la imagen', description: 'Haz clic en Descargar para guardar tu foto recortada al instante.' }
      ],
      features: ['100% Privacidad en el Navegador', 'Proporciones 1:1, 16:9, 4:3, Círculo', 'Rotación precisa y reflejo', 'Exportación en WebP, PNG y JPG'],
      faqs: [
        { question: '¿Mis fotos se suben a un servidor?', answer: 'No. El recorte se realiza enteramente en tu navegador mediante HTML5 Canvas.' },
        { question: '¿Puedo recortar una foto en círculo para perfil?', answer: 'Sí, selecciona el ajuste Círculo / Avatar para obtener una máscara circular con fondo transparente.' },
        { question: '¿El recorte reduce la resolución original?', answer: 'No. El recorte extrae los píxeles a resolución nativa sin compresión artificial.' }
      ]
    },
    'resize-image': {
      name: 'Redimensionar Imagen',
      shortName: 'Redimensionar',
      tagline: 'Cambia las dimensiones de tus imágenes por píxeles o porcentaje con bloqueo de proporción',
      seoTitle: 'Redimensionar Imagen Online Gratis — Cambiar Tamaño de Fotos',
      seoDescription: 'Cambia el tamaño de imágenes JPG, PNG y WebP por píxeles exactos o porcentaje. Bloquea la proporción y exporta al instante.',
      keywords: ['redimensionar imagen online', 'cambiar tamano foto', 'escalar imagen pixeles', 'reducir dimensiones foto'],
      howToSteps: [
        { title: 'Sube tu foto', description: 'Arrastra y suelta tu imagen en el área de trabajo.' },
        { title: 'Ingresa dimensiones', description: 'Especifica el ancho o alto en píxeles o porcentaje.' },
        { title: 'Ajusta opciones', description: 'Bloquea la relación de aspecto para evitar deformaciones.' },
        { title: 'Descarga imagen', description: 'Guarda tu foto redimensionada en el formato deseado.' }
      ],
      features: ['Redimensión por píxeles o porcentaje', 'Bloqueo automático de proporción', 'Prevención de pixelado/upscaling', 'Exportación multiformato'],
      faqs: [
        { question: '¿Cómo redimensionar manteniendo las proporciones?', answer: 'Mantén activada la casilla de bloqueo de relación de aspecto al cambiar el ancho o alto.' },
        { question: '¿Puedo reducir el tamaño en porcentaje?', answer: 'Sí, puedes elegir la pestaña de Porcentaje y escalar al 50%, 75% o valor personalizado.' }
      ]
    },
    'compress-image': {
      name: 'Comprimir Imagen',
      shortName: 'Comprimir',
      tagline: 'Reduce el peso de archivos JPG, PNG y WebP manteniendo una excelente calidad visual',
      seoTitle: 'Comprimir Imagen Online Gratis — Reducir Peso de Fotos sin Perder Calidad',
      seoDescription: 'Comprime imágenes online gratis. Reduce drásticamente el tamaño en KB/MB de archivos JPG, PNG y WebP en tu navegador.',
      keywords: ['comprimir imagen online', 'reducir peso foto', 'optimizar imagen web', 'comprimir jpg gratis', 'comprimir png'],
      howToSteps: [
        { title: 'Sube el archivo', description: 'Selecciona o arrastra la imagen que deseas optimizar.' },
        { title: 'Ajusta nivel de compresión', description: 'Mueve el control deslizante para balancear tamaño y calidad.' },
        { title: 'Compara el ahorro', description: 'Observa la comparativa en tiempo real de peso original vs optimizado.' },
        { title: 'Descarga optimizada', description: 'Guarda tu archivo comprimido con un solo clic.' }
      ],
      features: ['Compresión visualmente sin pérdida', 'Control deslizante de calidad en tiempo real', 'Diagnóstico de ahorro de KB y %', 'Conversión a WebP para máximo ahorro'],
      faqs: [
        { question: '¿Por qué comprimir imágenes?', answer: 'Las imágenes comprimidas cargan mucho más rápido en páginas web y consumen menos datos móviles.' },
        { question: '¿Qué formato ofrece mayor compresión?', answer: 'El formato WebP suele ofrecer un 30% a 50% mayor compresión que JPEG con calidad visual idéntica.' }
      ]
    },
    'rotate-image': {
      name: 'Rotar Imagen',
      shortName: 'Rotar',
      tagline: 'Gira fotos 90°, 180°, 270° o ajusta ángulos precisos con enderezado automático',
      seoTitle: 'Rotar Imagen Online Gratis — Girar Fotos 90 Grados o Ángulo Personalizado',
      seoDescription: 'Rota fotos online gratis en cualquier ángulo o pasos de 90°. Corrige orientación de fotos de cámara al instante en tu navegador.',
      keywords: ['rotar imagen online', 'girar foto gratis', 'orientacion foto 90 grados', 'enderezar imagen'],
      howToSteps: [
        { title: 'Carga tu foto', description: 'Selecciona la imagen que necesita corrección de ángulo.' },
        { title: 'Elige ángulo de rotación', description: 'Usa los botones de 90° a la izquierda/derecha o el deslizador de precisión.' },
        { title: 'Descarga', description: 'Guarda la foto en su orientación correcta.' }
      ],
      features: ['Rotación rápida de 90°, 180° y 270°', 'Control de ángulo fino (-45° a +45°)', 'Fondo transparente o blanco para JPEG', 'Procesamiento en canvas sin pérdida'],
      faqs: [
        { question: '¿Rotar una foto degrada su nitidez?', answer: 'Las rotaciones de 90° exactas reasignan píxeles sin interpolación destructiva.' }
      ]
    },
    'flip-image': {
      name: 'Voltear Imagen',
      shortName: 'Voltear',
      tagline: 'Refleja fotos horizontal y verticalmente creando efectos espejo instantáneos',
      seoTitle: 'Voltear Imagen Online Gratis — Efecto Espejo Horizontal y Vertical',
      seoDescription: 'Invierte fotos horizontal o verticalmente online gratis. Crea efectos de reflejo especular en segundos con total privacidad.',
      keywords: ['voltear imagen online', 'efecto espejo foto', 'invertir foto horizontalmente', 'reflejar imagen'],
      howToSteps: [
        { title: 'Sube la foto', description: 'Arrastra tu imagen al panel.' },
        { title: 'Selecciona modo espejo', description: 'Haz clic en Voltear Horizontal o Voltear Vertical.' },
        { title: 'Descarga', description: 'Guarda tu imagen con efecto espejo aplicado.' }
      ],
      features: ['Volteo horizontal (eje Y)', 'Volteo vertical (eje X)', 'Combinación simultánea', 'Exportación instantánea'],
      faqs: [
        { question: '¿Cómo voltear una selfie en espejo?', answer: 'Usa el botón "Voltear Horizontal" para corregir la perspectiva de cámara frontal.' }
      ]
    },
    'convert-image': {
      name: 'Convertidor de Imágenes',
      shortName: 'Convertir',
      tagline: 'Convierte imágenes entre formatos PNG, JPG, WebP y AVIF con ajuste de calidad',
      seoTitle: 'Convertir Imágenes Online Gratis — JPG, PNG, WebP, AVIF',
      seoDescription: 'Convierte formatos de imagen online en tu navegador. Soporte completo para JPG a PNG, PNG a WebP, WebP a JPG y más.',
      keywords: ['convertir imagen online', 'cambiar formato foto', 'convertidor jpg a png', 'convertidor png a webp'],
      howToSteps: [
        { title: 'Sube imagen', description: 'Carga cualquier archivo compatible.' },
        { title: 'Elige formato de destino', description: 'Selecciona PNG, JPG o WebP.' },
        { title: 'Descarga convertida', description: 'Obtén tu archivo convertido en segundos.' }
      ],
      features: ['Soporte para JPG, PNG, WebP, AVIF', 'Control de transparencia y color de fondo', 'Ajuste de calidad para formatos con pérdida', 'Descarga instantánea'],
      faqs: [
        { question: '¿Qué formato es mejor para fotos con transparencia?', answer: 'PNG y WebP son ideales porque preservan el canal alfa transparente.' }
      ]
    },
    'jpg-to-png': {
      name: 'Convertir JPG a PNG',
      shortName: 'JPG a PNG',
      tagline: 'Transforma fotos JPEG en formato PNG sin pérdida con soporte para canal alfa',
      seoTitle: 'Convertir JPG a PNG Online Gratis — Alta Calidad',
      seoDescription: 'Convierte archivos JPG a PNG online gratis. Obtén imágenes nítidas sin compresión destructiva directamente en tu navegador.',
      keywords: ['jpg a png online', 'convertir jpg a png gratis', 'transformar jpeg en png'],
      howToSteps: [
        { title: 'Sube tu JPG', description: 'Selecciona el archivo .jpg o .jpeg.' },
        { title: 'Procesa a PNG', description: 'El motor convierte la matriz de píxeles a formato PNG sin pérdida.' },
        { title: 'Descarga', description: 'Guarda tu archivo .png listo para usar.' }
      ],
      features: ['Conversión 100% sin pérdida', 'Procesamiento en memoria local', 'Sin marcas de agua'],
      faqs: [{ question: '¿JPG a PNG mejora la calidad de una foto borrosa?', answer: 'PNG previene mayor degradación futura, pero no añade información que el JPG original no tuviera.' }]
    },
    'png-to-jpg': {
      name: 'Convertir PNG a JPG',
      shortName: 'PNG a JPG',
      tagline: 'Convierte gráficos PNG a formato JPEG ligero con fondo blanco o de color',
      seoTitle: 'Convertir PNG a JPG Online Gratis — Reducir Peso de Imagen',
      seoDescription: 'Convierte imágenes PNG a JPG online gratis para reducir el tamaño del archivo con fondo personalizable.',
      keywords: ['png a jpg online', 'convertir png a jpeg gratis', 'pasar de png a jpg'],
      howToSteps: [
        { title: 'Sube tu PNG', description: 'Carga tu archivo PNG.' },
        { title: 'Elige color de fondo', description: 'Elige fondo blanco o personalizado para sustituir transparencias.' },
        { title: 'Descarga JPG', description: 'Guarda el archivo JPEG comprimido.' }
      ],
      features: ['Sustitución inteligente de transparencia', 'Control de calidad JPEG', 'Gran reducción de tamaño'],
      faqs: [{ question: '¿Qué pasa con el fondo transparente al pasar a JPG?', answer: 'Como JPG no admite transparencia, se rellena automáticamente con color blanco o el color que elijas.' }]
    },
    'jpg-to-webp': {
      name: 'Convertir JPG a WebP',
      shortName: 'JPG a WebP',
      tagline: 'Optimiza fotos JPG transformándolas al formato moderno WebP de Google',
      seoTitle: 'Convertir JPG a WebP Online Gratis — Optimización Web',
      seoDescription: 'Convierte fotos JPG a WebP online gratis. Ahorra hasta 35% de espacio en tu web con calidad idéntica.',
      keywords: ['jpg a webp online', 'convertir jpeg a webp', 'optimizar fotos para web'],
      howToSteps: [
        { title: 'Sube JPG', description: 'Selecciona tus fotos JPEG.' },
        { title: 'Ajusta calidad WebP', description: 'Selecciona entre 80% y 95% para un balance perfecto.' },
        { title: 'Descarga WebP', description: 'Guarda tu imagen optimizada para la web.' }
      ],
      features: ['Ahorro de hasta 35% sobre JPG', 'Compatible con todos los navegadores modernos', 'Procesamiento instantáneo'],
      faqs: [{ question: '¿Todos los navegadores soportan WebP?', answer: 'Sí, Chrome, Safari, Firefox, Edge y navegadores móviles tienen soporte nativo total.' }]
    },
    'png-to-webp': {
      name: 'Convertir PNG a WebP',
      shortName: 'PNG a WebP',
      tagline: 'Reduce drásticamente el peso de PNGs transparentes convirtiéndolos a WebP',
      seoTitle: 'Convertir PNG a WebP Online Gratis — Preserva Transparencia',
      seoDescription: 'Convierte PNG a WebP online gratis preservando la transparencia con un tamaño de archivo hasta 70% menor.',
      keywords: ['png a webp online', 'convertir png a webp con transparencia', 'reducir peso de png'],
      howToSteps: [
        { title: 'Carga el PNG', description: 'Arrastra tu archivo PNG con o sin transparencia.' },
        { title: 'Genera WebP', description: 'El convertidor preserva el canal alfa con compresión moderna.' },
        { title: 'Descarga', description: 'Guarda tu imagen WebP transparente y liviana.' }
      ],
      features: ['Conserva transparencia alfa', 'Reducción masiva de KB', 'Carga ultra rápida'],
      faqs: [{ question: '¿WebP admite transparencia como PNG?', answer: 'Sí, WebP soporta transparencia con mucha mayor compresión que PNG.' }]
    },
    'webp-to-jpg': {
      name: 'Convertir WebP a JPG',
      shortName: 'WebP a JPG',
      tagline: 'Transforma imágenes WebP en archivos JPEG universales para compatibilidad total',
      seoTitle: 'Convertir WebP a JPG Online Gratis — Compatibilidad Universal',
      seoDescription: 'Convierte archivos WebP a JPG online gratis para abrirlos en cualquier visor o software antiguo.',
      keywords: ['webp a jpg online', 'convertir webp a jpeg', 'pasar webp a imagen jpg'],
      howToSteps: [
        { title: 'Sube archivo WebP', description: 'Carga tu imagen WebP descargada de la web.' },
        { title: 'Convierte a JPG', description: 'Procesa el archivo al formato JPEG universal.' },
        { title: 'Descarga', description: 'Obtén tu foto JPG compatible.' }
      ],
      features: ['Compatibilidad universal', 'Control de calidad', 'Fondo blanco automático'],
      faqs: [{ question: '¿Por qué convertir WebP a JPG?', answer: 'Para poder editar o imprimir en aplicaciones que aún no reconocen el formato WebP.' }]
    },
    'webp-to-png': {
      name: 'Convertir WebP a PNG',
      shortName: 'WebP a PNG',
      tagline: 'Extrae imágenes WebP a formato PNG sin pérdida con fondo transparente intacto',
      seoTitle: 'Convertir WebP a PNG Online Gratis — Con Transparencia',
      seoDescription: 'Convierte WebP a PNG online gratis manteniendo la máxima resolución y transparencia original.',
      keywords: ['webp a png online', 'convertir webp a png transparente', 'guardar webp como png'],
      howToSteps: [
        { title: 'Sube WebP', description: 'Selecciona la imagen WebP.' },
        { title: 'Genera PNG', description: 'Procesa a formato PNG sin pérdida.' },
        { title: 'Descarga', description: 'Guarda tu archivo PNG.' }
      ],
      features: ['Sin pérdida de calidad', 'Transparencia intacta', 'Rápido y privado'],
      faqs: [{ question: '¿Se mantiene la transparencia al convertir de WebP a PNG?', answer: 'Sí, cualquier zona transparente en el WebP se conserva fielmente en el PNG.' }]
    },
    'bulk-image-resizer': {
      name: 'Redimensionador de Imágenes por Lote',
      shortName: 'Redimensionar por Lote',
      tagline: 'Cambia el tamaño de decenas de imágenes simultáneamente y descárgalas en ZIP',
      seoTitle: 'Redimensionar Imágenes por Lote Online Gratis — Procesamiento Masivo',
      seoDescription: 'Redimensiona múltiples fotos a la vez online gratis. Escala por píxeles o porcentaje y descarga todo en un archivo ZIP.',
      keywords: ['redimensionar fotos por lote', 'escalar imagenes masivamente', 'cambiar tamano fotos en lote', 'bulk image resizer'],
      howToSteps: [
        { title: 'Sube múltiples fotos', description: 'Arrastra hasta 50 imágenes a la vez.' },
        { title: 'Define dimensiones', description: 'Establece el ancho/alto o porcentaje para todo el lote.' },
        { title: 'Procesa el lote', description: 'Observa el progreso secuencial de cada foto.' },
        { title: 'Descarga ZIP', description: 'Descarga todas las fotos redimensionadas en un solo archivo ZIP.' }
      ],
      features: ['Hasta 50 imágenes por lote', 'Empaquetado ZIP instantáneo', 'Prevención de colapso de memoria', 'Cancelación en cualquier momento'],
      faqs: [{ question: '¿Existe límite en el número de fotos?', answer: 'Puedes procesar decenas de fotos simultáneamente según la memoria de tu dispositivo.' }]
    },
    'bulk-image-compressor': {
      name: 'Compresor de Imágenes por Lote',
      shortName: 'Comprimir por Lote',
      tagline: 'Comprime decenas de archivos JPG, PNG y WebP al mismo tiempo con descarga en ZIP',
      seoTitle: 'Comprimir Imágenes por Lote Online Gratis — Optimización Masiva',
      seoDescription: 'Comprime múltiples fotos simultáneamente online gratis. Ahorra megabytes y descarga tus imágenes optimizadas en un ZIP.',
      keywords: ['comprimir fotos por lote', 'comprimir imagenes masivamente', 'optimizar imagenes en lote', 'bulk compress images'],
      howToSteps: [
        { title: 'Selecciona tus fotos', description: 'Arrastra una colección de archivos a optimizar.' },
        { title: 'Configura calidad', description: 'Elige el porcentaje de compresión para todo el lote.' },
        { title: 'Inicia compresión', description: 'El motor procesa cada imagen con métricas de ahorro.' },
        { title: 'Descarga ZIP', description: 'Obtén todas las fotos comprimidas en un único archivo ZIP.' }
      ],
      features: ['Compresión masiva en lote', 'Cálculo de ahorro total en MB', 'Archivo ZIP automático', '100% privado en tu navegador'],
      faqs: [{ question: '¿Mis imágenes por lote se suben a un servidor?', answer: 'No. El procesamiento y empaquetado ZIP se ejecutan íntegramente en la memoria de tu navegador.' }]
    },
    'remove-image-metadata': {
      name: 'Eliminar Metadatos de Imágenes',
      shortName: 'Eliminar Metadatos',
      tagline: 'Limpia datos EXIF, ubicación GPS, modelo de cámara y fecha para proteger tu privacidad',
      seoTitle: 'Eliminar Metadatos EXIF de Fotos Online Gratis — Limpieza de GPS y Privacidad',
      seoDescription: 'Borra metadatos EXIF y GPS de tus fotos online gratis antes de compartirlas en redes sociales o internet.',
      keywords: ['eliminar metadatos foto', 'borrar exif online', 'quitar gps de foto', 'limpiar metadatos imagen'],
      howToSteps: [
        { title: 'Sube tu foto', description: 'Carga cualquier imagen tomada con cámara o móvil.' },
        { title: 'Limpia datos EXIF', description: 'El lienzo redibuja los píxeles puros eliminando cabeceras ocultas.' },
        { title: 'Descarga limpia', description: 'Guarda tu foto libre de datos de ubicación y cámara.' }
      ],
      features: ['Elimina ubicación GPS', 'Borra fecha, hora y modelo de cámara', 'Protección total de privacidad', 'Descarga instantánea'],
      faqs: [{ question: '¿Por qué es importante eliminar metadatos?', answer: 'Las fotos tomadas con teléfonos incluyen coordenadas GPS exactas que revelan dónde vives o trabajas.' }]
    },
    'image-analyzer': {
      name: 'Analizador de Imágenes',
      shortName: 'Analizador',
      tagline: 'Inspecciona resolución, relación de aspecto, tipo MIME, espacio de color y peso',
      seoTitle: 'Analizador de Imágenes Online Gratis — Inspeccionar Propiedades y Dimensiones',
      seoDescription: 'Analiza propiedades técnicas de imágenes online gratis: dimensiones exactas, ratio, peso en bytes, formato y estructura de píxeles.',
      keywords: ['analizar imagen online', 'ver propiedades de foto', 'inspeccionar resolucion imagen', 'diagnostico de imagen'],
      howToSteps: [
        { title: 'Sube tu imagen', description: 'Carga el archivo que deseas inspeccionar.' },
        { title: 'Revisa métricas', description: 'Consulta ancho, alto, ratio, tipo MIME y densidad de píxeles.' }
      ],
      features: ['Dimensiones y ratio exactos', 'Tamaño en bytes y formato MIME', 'Visualización de detalles técnicos', 'Sin descargas necesarias'],
      faqs: [{ question: '¿Qué información puedo ver?', answer: 'Podrás verificar resolución nativa, relación de aspecto, formato MIME y tamaño exacto en disco.' }]
    },
    'image-color-picker': {
      name: 'Selector de Color en Imagen',
      shortName: 'Selector de Color',
      tagline: 'Extrae códigos HEX, RGB y HSL de cualquier píxel de tu foto con lupa de precisión',
      seoTitle: 'Selector de Color en Imagen Online Gratis — Cuentagotas HEX y RGB',
      seoDescription: 'Extrae colores de fotos online con cuentagotas y lupa interactiva. Copia códigos HEX, RGB y HSL con un solo clic.',
      keywords: ['selector de color imagen', 'cuentagotas online', 'extraer color de foto', 'hex color picker image'],
      howToSteps: [
        { title: 'Sube tu imagen', description: 'Carga la foto de la que deseas extraer colores.' },
        { title: 'Pasa el cursor o haz clic', description: 'Usa la lupa para apuntar al píxel exacto.' },
        { title: 'Copia el código', description: 'Haz clic en el formato HEX, RGB o HSL para copiarlo.' }
      ],
      features: ['Lupa de aumento en tiempo real', 'Valores HEX, RGB y HSL', 'Copia rápida al portapapeles', 'Optimizado a 60fps'],
      faqs: [{ question: '¿Es preciso al seleccionar píxeles individuales?', answer: 'Sí, la lupa de aumento permite apuntar al píxel exacto con coordenadas x,y precisas.' }]
    },
    'image-palette-generator': {
      name: 'Generador de Paletas de Color',
      shortName: 'Generador de Paletas',
      tagline: 'Extrae automáticamente los colores dominantes y armoniosos de cualquier fotografía',
      seoTitle: 'Generador de Paletas de Color desde Foto Online Gratis',
      seoDescription: 'Genera paletas de colores dominantes a partir de imágenes online gratis. Copia códigos HEX y exporta tu esquema de color.',
      keywords: ['generador de paleta de color', 'extraer paleta de foto', 'colores dominantes imagen', 'palette generator image'],
      howToSteps: [
        { title: 'Sube tu foto', description: 'Carga cualquier fotografía o diseño.' },
        { title: 'Genera la paleta', description: 'El algoritmo de cuantización detecta los tonos dominantes.' },
        { title: 'Copia los tonos', description: 'Copia códigos individuales o exporta la paleta completa.' }
      ],
      features: ['Detección de tonos dominantes', 'Muestrarios interactivos con código HEX', 'Exportación de paleta', 'Ideal para diseñadores'],
      faqs: [{ question: '¿Cómo se calculan los colores dominantes?', answer: 'Se utiliza un algoritmo de agrupamiento de color que analiza la frecuencia e intensidad de los tonos en la imagen.' }]
    },
    'add-text-to-image': {
      name: 'Añadir Texto a Imagen',
      shortName: 'Añadir Texto',
      tagline: 'Inserta títulos, textos estilizados y pies de foto con tipografías y sombras personalizadas',
      seoTitle: 'Añadir Texto a Foto Online Gratis — Editor de Texto en Imagen',
      seoDescription: 'Añade texto personalizado a fotos online gratis. Personaliza fuentes, colores, tamaños, sombras y posición con vista previa.',
      keywords: ['anadir texto a foto', 'poner texto en imagen gratis', 'escribir en foto online', 'editor texto foto'],
      howToSteps: [
        { title: 'Sube tu foto', description: 'Carga la imagen que deseas editar.' },
        { title: 'Escribe tu texto', description: 'Introduce el mensaje y personaliza fuente, tamaño y color.' },
        { title: 'Posiciona y descarga', description: 'Arrastra el texto al lugar deseado y descarga en alta resolución.' }
      ],
      features: ['Múltiples fuentes modernas', 'Control de tamaño, color y opacidad', 'Efecto de sombra para legibilidad', 'Exportación en alta resolución'],
      faqs: [{ question: '¿El texto se exporta con máxima nitidez?', answer: 'Sí, el renderizado final se calcula sobre las dimensiones nativas de la imagen original.' }]
    },
    'watermark-image': {
      name: 'Poner Marca de Agua en Imagen',
      shortName: 'Marca de Agua',
      tagline: 'Protege tus fotos con marcas de agua de texto o logotipos con opacidad ajustable',
      seoTitle: 'Poner Marca de Agua a Fotos Online Gratis — Proteger Imágenes',
      seoDescription: 'Añade marcas de agua de texto o logo a tus fotos online gratis. Protege tus derechos de autor con opacidad y posición personalizada.',
      keywords: ['poner marca de agua foto', 'marcar imagenes online', 'watermark foto gratis', 'proteger fotos copyright'],
      howToSteps: [
        { title: 'Carga tu foto base', description: 'Sube la imagen que deseas proteger.' },
        { title: 'Configura marca de agua', description: 'Escribe texto o sube tu logo PNG con transparencia.' },
        { title: 'Ajusta posición y opacidad', description: 'Ubica la marca en esquinas, centro o patrón repetido.' },
        { title: 'Descarga protegida', description: 'Guarda tu foto con marca de agua aplicada.' }
      ],
      features: ['Modo texto y modo logotipo', 'Opacidad y escala personalizables', 'Posiciones preestablecidas y arrastre libre', 'Exportación sin marcas adicionales'],
      faqs: [{ question: '¿Puedo usar mi propio logo transparente?', answer: 'Sí, puedes subir cualquier archivo PNG con transparencia para usarlo como sello de agua.' }]
    },
    'add-border-to-image': {
      name: 'Añadir Borde a Imagen',
      shortName: 'Añadir Borde',
      tagline: 'Agrega marcos elegantes, bordes de colores y márgenes personalizados a tus fotos',
      seoTitle: 'Añadir Borde a Foto Online Gratis — Marcos y Márgenes para Fotos',
      seoDescription: 'Pon marcos y bordes de colores a tus fotos online gratis. Modos de marco exterior o interior con grosor y color a medida.',
      keywords: ['anadir borde a foto', 'marco para fotos online', 'borde blanco foto', 'foto con marco gratis'],
      howToSteps: [
        { title: 'Sube tu foto', description: 'Elige la imagen que deseas enmarcar.' },
        { title: 'Elige modo de borde', description: 'Selecciona Marco Exterior (expande lienzo) o Borde Interior.' },
        { title: 'Ajusta grosor y color', description: 'Define los píxeles de grosor y el color deseado.' },
        { title: 'Descarga', description: 'Guarda tu foto enmarcada.' }
      ],
      features: ['Marco exterior sin recortar la foto', 'Borde interior sobre los márgenes', 'Selector de color y opacidad', 'Resolución original'],
      faqs: [
        { question: '¿El marco exterior recorta mi foto original?', answer: 'No, el modo exterior amplía las dimensiones totales del lienzo manteniendo la foto intacta.' },
        { question: '¿Puedo elegir borde blanco estilo polaroid?', answer: 'Sí, puedes seleccionar color blanco y grosor amplio para crear efectos clásicos.' }
      ]
    },
    'round-image': {
      name: 'Redondear Esquinas de Imagen',
      shortName: 'Redondear Esquinas',
      tagline: 'Crea avatares circulares y bordes redondeados suaves con fondo transparente',
      seoTitle: 'Redondear Esquinas de Foto Online Gratis — Avatar Circular y Bordes Suaves',
      seoDescription: 'Redondea las esquinas de fotos online gratis. Crea fotos de perfil circulares o tarjetas con esquinas redondeadas en PNG/WebP.',
      keywords: ['redondear esquinas foto', 'foto circular online', 'crear avatar redondo', 'round image online'],
      howToSteps: [
        { title: 'Sube tu foto', description: 'Carga la imagen a redondear.' },
        { title: 'Elige radio o círculo', description: 'Selecciona radio en píxeles o el ajuste de Avatar Circular.' },
        { title: 'Descarga con transparencia', description: 'Guarda en PNG o WebP para mantener las esquinas transparentes.' }
      ],
      features: ['Ajuste de avatar circular 1:1', 'Radio de curvatura personalizado (0 a 500px)', 'Fondo transparente para PNG y WebP', 'Vista previa en tiempo real'],
      faqs: [{ question: '¿Cómo crear un círculo perfecto para foto de perfil?', answer: 'Elige el ajuste "Círculo / Avatar"; la herramienta centrará y aplicará la máscara circular automáticamente.' }]
    },
    'favicon-generator': {
      name: 'Generador de Favicons e Iconos',
      shortName: 'Generador de Favicon',
      tagline: 'Genera paquetes completos de favicons (.ico, .png, manifest y etiquetas HTML) para tu web',
      seoTitle: 'Generador de Favicon Online Gratis — Crear Favicon ICO y PNG para Web',
      seoDescription: 'Crea paquetes de favicons completos online gratis. Genera favicon.ico, iconos para Apple Touch y código HTML listo para pegar.',
      keywords: ['generador favicon online', 'crear favicon ico', 'favicon generator free', 'iconos para web'],
      howToSteps: [
        { title: 'Sube tu logo o imagen', description: 'Carga tu icono o logotipo en formato PNG o JPG.' },
        { title: 'Encuadra el icono', description: 'Ajusta el recorte cuadrado y color de fondo si es necesario.' },
        { title: 'Descarga paquete ZIP', description: 'Obtén favicon.ico, PNGs de múltiples resoluciones y el snippet HTML.' }
      ],
      features: ['Genera favicon.ico (16x16, 32x32, 48x48)', 'Iconos Apple Touch (180x180) y Android', 'Código HTML listo para el <head>', 'Descarga en paquete ZIP'],
      faqs: [{ question: '¿Incluye el archivo favicon.ico real?', answer: 'Sí, genera un archivo binario .ico compatible con navegadores antiguos y modernos.' }]
    },
    'image-to-base64': {
      name: 'Convertir Imagen a Base64',
      shortName: 'Imagen a Base64',
      tagline: 'Codifica imágenes en cadenas de texto Base64 para incrustar directamente en código',
      seoTitle: 'Convertir Imagen a Base64 Online Gratis — Codificador de Imagen a Texto',
      seoDescription: 'Convierte imágenes a texto Base64 online gratis. Copia el string codificado o descárgalo en archivo .txt sin enviar datos a servidores.',
      keywords: ['imagen a base64', 'convertir foto a base64', 'image to base64 converter', 'codificar imagen base64'],
      howToSteps: [
        { title: 'Carga tu archivo', description: 'Selecciona cualquier imagen PNG, JPG, WebP o SVG.' },
        { title: 'Copia el texto Base64', description: 'Elige formato Data URI o Base64 puro y haz clic en Copiar.' }
      ],
      features: ['Copia con un clic', 'Descarga en archivo .txt', 'Métricas de tamaño y sobrecarga', '100% privado en tu navegador'],
      faqs: [{ question: '¿Por qué usar Base64 en imágenes?', answer: 'Permite incrustar iconos y gráficos directamente en HTML o CSS evitando solicitudes HTTP adicionales.' }]
    },
    'image-to-data-uri': {
      name: 'Convertir Imagen a Data URI',
      shortName: 'Imagen a Data URI',
      tagline: 'Genera Data URIs listos para usar en etiquetas <img> de HTML o background-image de CSS',
      seoTitle: 'Convertir Imagen a Data URI Online Gratis — Incrustar en HTML y CSS',
      seoDescription: 'Genera Data URIs (data:image/...;base64) a partir de imágenes online gratis para incrustar en código web.',
      keywords: ['imagen a data uri', 'data uri generator', 'convertir imagen a data url', 'embed image css'],
      howToSteps: [
        { title: 'Sube la imagen', description: 'Selecciona tu archivo gráfico.' },
        { title: 'Copia el Data URI', description: 'Copia el código data:image/... formateado para tu HTML o CSS.' }
      ],
      features: ['Sintaxis completa data:image/...', 'Detección automática de tipo MIME', 'Copia instantánea al portapapeles', 'Seguridad total en local'],
      faqs: [{ question: '¿Cómo incrustar un Data URI en HTML?', answer: 'Pega la cadena directamente en el atributo src: <img src="data:image/png;base64,...">' }]
    },
    'base64-to-image': {
      name: 'Decodificar Base64 a Imagen',
      shortName: 'Base64 a Imagen',
      tagline: 'Decodifica cadenas Base64 y Data URIs para ver y descargar archivos PNG, JPG o WebP',
      seoTitle: 'Decodificar Base64 a Imagen Online Gratis — Ver y Descargar Fotos',
      seoDescription: 'Decodifica texto Base64 a imagen online gratis. Previsualiza la foto y descárgala en formato PNG o JPG con total privacidad.',
      keywords: ['base64 a imagen', 'decodificar base64 a foto', 'base64 image viewer', 'convertir base64 a archivo'],
      howToSteps: [
        { title: 'Pega la cadena Base64', description: 'Pega tu texto Base64 o Data URI en el cuadro.' },
        { title: 'Previsualiza y descarga', description: 'Inspecciona dimensiones y descarga el archivo en PNG o JPG.' }
      ],
      features: ['Soporta Base64 puro y Data URIs', 'Previsualización segura en memoria', 'Exportación a PNG, JPG o WebP', 'Diagnóstico de resolución'],
      faqs: [{ question: '¿Admite cadenas Base64 sin prefijo data:?', answer: 'Sí, la herramienta detecta automáticamente las firmas binarias y resuelve el formato.' }]
    },
    'svg-to-png': {
      name: 'Convertir SVG a PNG de Alta Resolución',
      shortName: 'SVG a PNG',
      tagline: 'Rasteriza vectores y código SVG en imágenes PNG nítidas hasta 8x de escala',
      seoTitle: 'Convertir SVG a PNG de Alta Resolución Online Gratis — Rasterizador Vectorial',
      seoDescription: 'Convierte archivos vectoriales SVG a PNG nítidos online gratis. Multiplicadores hasta 8x (HD, 4K, 8K), fondo transparente y sanitización XML segura.',
      keywords: ['svg a png alta resolucion', 'convertir vector a png', 'rasterizar svg online', 'svg to 4k png'],
      howToSteps: [
        { title: 'Sube archivo SVG o pega código', description: 'Arrastra tu archivo .svg o pega código XML.' },
        { title: 'Elige multiplicador de escala', description: 'Selecciona 1x, 2x HD, 4x 4K u 8x para impresión.' },
        { title: 'Descarga PNG nítido', description: 'Guarda tu imagen rasterizada en máxima resolución.' }
      ],
      features: ['Escalado vectorial nítido hasta 8x', 'Sanitización segura contra scripts XML', 'Fondo transparente o relleno de color', '100% privado en navegador'],
      faqs: [
        { question: '¿Se pixela el PNG al exportar en alta resolución?', answer: 'No, porque el archivo SVG es vectorial y se dibuja directamente en la resolución seleccionada.' },
        { question: '¿Es seguro convertir archivos SVG?', answer: 'Sí, el código SVG se desinfecta eliminando cualquier script o elemento malicioso antes de renderizar.' }
      ]
    }
  }
};

// Generates TypeScript module
function generateTS(locale, dict) {
  return `import { LocalizedToolItem } from '../types';
import { enTools } from './en';

export const ${locale}Tools: Record<string, LocalizedToolItem> = {
${Object.entries(dict).map(([slug, item]) => `  '${slug}': ${JSON.stringify(item, null, 4)}`).join(',\n')}
};

export function get${locale.toUpperCase()}Tool(slug: string): LocalizedToolItem {
  return ${locale}Tools[slug] || enTools[slug];
}
`;
}

// Generate Spanish
const esTS = generateTS('es', LOCALES_DATA.es);
fs.writeFileSync(path.join(outDir, 'es.ts'), esTS, 'utf8');
console.log('Created src/i18n/tools/es.ts');
