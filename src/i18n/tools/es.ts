import type { LocalizedToolItem } from '../types';

export const esTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Recortar imagen",
    shortName: "Recortar",
    tagline: "Recorta la parte de la foto que quieras con los tiradores, valores exactos en píxeles o proporciones predefinidas.",
    intro:
      "Recortar imagen deja solo la zona que seleccionas de una foto y la guarda a resolución completa. Úsalo para quitar bordes vacíos, encuadrar a una persona u objeto o ajustar la forma que pide una publicación en redes sociales. Además del recorte libre, tiene proporciones predefinidas como 1:1, 4:5, 9:16 y 16:9, campos para valores exactos en píxeles y un modo círculo para fotos de perfil.",
    seoTitle: "Recortar imagen online gratis, sin subir archivos",
    seoDescription:
      "Recortar imagen online gratis. Arrastra el marco o escribe los píxeles exactos, usa 1:1, 4:5, 16:9 o 9:16 y guarda en JPG, PNG, WebP o AVIF. Sin subir nada.",
    keywords: [
      "recortar imagen",
      "recortar foto online",
      "recortar imagen cuadrada",
      "recortar foto para instagram",
      "recortar imagen 16:9",
      "recortar imagen en círculo",
      "recortar imagen sin perder calidad",
    ],
    howToSteps: [
      {
        title: "Añade tu foto",
        description:
          "Suelta una imagen en el recuadro, haz clic para elegir un archivo o pégala con Ctrl+V. Se admiten archivos JPG, PNG, WebP, AVIF, GIF y HEIC de iPhone.",
      },
      {
        title: "Selecciona la zona de recorte",
        description:
          "Arrastra el marco y sus tiradores en la vista previa, o haz clic en una proporción como Cuadrado 1:1, Historia 9:16 o un tamaño para redes sociales. Para un resultado exacto, escribe en píxeles el borde izquierdo, el borde superior, el ancho y el alto.",
      },
      {
        title: "Elige la forma y el formato",
        description:
          "Cambia a Círculo para un recorte redondo. Por defecto se mantiene el formato original, o puedes elegir JPG, PNG, WebP o AVIF en Guardar como.",
      },
      {
        title: "Descarga la imagen recortada",
        description:
          "Haz clic en Descargar para guardar solo la zona seleccionada a resolución completa, o cópiala al portapapeles.",
      },
    ],
    features: [
      {
        title: "Proporciones y tamaños para redes",
        description:
          "Original, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 y 21:9, además de formatos para Instagram vertical (4:5), Reels y TikTok, miniaturas de YouTube y pines de Pinterest.",
      },
      {
        title: "Valores exactos en píxeles",
        description:
          "Escribe la posición, el ancho y el alto en píxeles, bloquea la proporción si lo necesitas y consulta el tamaño final antes de guardar.",
      },
      {
        title: "Recorte en círculo para avatares",
        description:
          "El modo círculo fija el marco en un cuadrado y recorta una imagen redonda. Guarda en PNG o WebP para que las esquinas queden transparentes.",
      },
      {
        title: "Recortada desde los píxeles originales",
        description:
          "La vista previa puede verse reducida para ir más rápido, pero la descarga se recorta de la foto a resolución completa en tu dispositivo. No se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Recortar reduce la calidad de la imagen?",
        answer:
          "Recortar solo elimina los píxeles que quedan fuera del marco; el resto se mantiene nítido. Si guardas en JPG, WebP o AVIF, la imagen se vuelve a comprimir, así que usa una calidad del 90% o más, o guarda en PNG, para quedarte cerca del original.",
      },
      {
        question: "¿Cómo recorto una foto en cuadrado para Instagram?",
        answer:
          "Haz clic en Cuadrado 1:1 o en Instagram (1:1) y arrastra el marco sobre la parte que quieres conservar. Para una publicación vertical más alta, usa Instagram vertical (4:5).",
      },
      {
        question: "¿Cómo hago una foto de perfil circular?",
        answer:
          "Selecciona Círculo, mueve el círculo sobre la cara y guarda en PNG o WebP. JPG no admite transparencia, así que la zona fuera del círculo se rellenaría de blanco.",
      },
      {
        question: "¿Puedo recortar una foto HEIC de iPhone?",
        answer:
          "Sí. El archivo HEIC se convierte en tu navegador al abrirlo. El recorte se guarda en JPG por defecto y puedes cambiar a PNG, WebP o AVIF.",
      },
      {
        question: "¿Se conservan los datos EXIF de la foto después de recortarla?",
        answer:
          "No. El nuevo archivo se crea solo a partir de los píxeles de la imagen, así que los datos de la cámara y la ubicación GPS del original no se copian.",
      },
      {
        question: "¿Puedo recortar un GIF animado?",
        answer:
          "Puedes abrir un GIF, pero el resultado es una sola imagen fija, porque aquí JPG, PNG, WebP y AVIF se guardan sin animación.",
      },
    ],
  },
  "resize-image": {
    name: "Cambiar tamaño de imagen",
    shortName: "Cambiar tamaño",
    tagline: "Cambia el ancho y el alto de una imagen en píxeles o por porcentaje, con la proporción bloqueada o libre.",
    intro:
      "Cambiar tamaño de imagen modifica las dimensiones en píxeles de una foto o un gráfico. Úsalo para que una foto grande de cámara sea lo bastante pequeña para enviarla por correo o subirla a una web, o para ajustarla a un tamaño exacto como 1080 × 1080. Puedes escribir un ancho y un alto o escalarla por porcentaje del 10% al 300%, y la opción No ampliar evita que agrandes una imagen por error.",
    seoTitle: "Cambiar tamaño de imagen online en píxeles o %",
    seoDescription:
      "Cambiar tamaño de imagen online gratis. Fija ancho y alto exactos en píxeles o escala por porcentaje, mantén la proporción y guarda en JPG, PNG, WebP o AVIF.",
    keywords: [
      "cambiar tamaño de imagen",
      "redimensionar imagen online",
      "cambiar tamaño de imagen en píxeles",
      "redimensionar foto sin perder calidad",
      "cambiar tamaño de imagen a 1080x1080",
      "reducir dimensiones de imagen",
      "escalar imagen por porcentaje",
    ],
    howToSteps: [
      {
        title: "Abre tu imagen",
        description: "Suelta, elige o pega (Ctrl+V) una imagen JPG, PNG, WebP, AVIF o HEIC de iPhone.",
      },
      {
        title: "Define el nuevo tamaño",
        description:
          "En el modo Píxeles, escribe un ancho o un alto; con Mantener proporción activado, el otro lado se actualiza solo. En el modo Porcentaje, usa el control deslizante o los botones del 25% al 200%.",
      },
      {
        title: "Elige el formato de archivo",
        description:
          "Por defecto se mantiene el formato original. Puedes cambiar a JPG, PNG, WebP o AVIF y ajustar la calidad de JPG, WebP y AVIF.",
      },
      {
        title: "Descarga el resultado",
        description:
          "Haz clic en Descargar para guardar la imagen redimensionada, o envíala a Comprimir si además quieres un archivo más ligero.",
      },
    ],
    features: [
      {
        title: "Píxeles o porcentaje",
        description: "Escribe dimensiones exactas de hasta 10.000 píxeles o escala toda la imagen del 10% al 300%.",
      },
      {
        title: "Bloqueo de proporción",
        description:
          "Mantén las proporciones originales para que la imagen no se deforme, o desbloquéalas para fijar el ancho y el alto por separado.",
      },
      {
        title: "Evita la ampliación",
        description:
          "Limita el tamaño a las dimensiones originales, para que una imagen pequeña nunca se agrande y se vea borrosa por accidente.",
      },
      {
        title: "Mantiene tu tipo de archivo",
        description: "Un JPG sigue siendo JPG y un PNG sigue siendo PNG, salvo que elijas otro formato.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo cambio el tamaño de una imagen sin perder calidad?",
        answer:
          "Al hacer una imagen más pequeña, se mantiene nítida. Hacerla más grande que el original no puede añadir detalle, así que se verá más suave; activa No ampliar para evitarlo. Guarda en PNG o usa una calidad del 90% o más para JPG y WebP.",
      },
      {
        question: "¿Cambiar el tamaño reduce el peso del archivo?",
        answer:
          "Normalmente, sí. Si reduces el ancho y el alto a la mitad, queda más o menos una cuarta parte de los píxeles, así que el archivo pesa mucho menos. Para archivos aún más ligeros, comprime el resultado después.",
      },
      {
        question: "¿Puedo cambiar a un tamaño exacto como 1080 × 1080?",
        answer:
          "Sí. Desactiva Mantener proporción y escribe ambos números. Si el original no es cuadrado, se deformará, así que primero recórtalo a 1:1 y después cambia el tamaño.",
      },
      {
        question: "¿Puedo cambiar el tamaño de muchas imágenes a la vez?",
        answer:
          "Esta página redimensiona una imagen cada vez. Para redimensionar hasta 50 imágenes en un solo paso y descargarlas en un ZIP, usa el Redimensionador de imágenes por lotes.",
      },
      {
        question: "¿Puedo cambiar el tamaño de fotos de mi iPhone?",
        answer:
          "Sí. Las fotos HEIC se convierten en tu navegador y la imagen redimensionada se guarda en JPG por defecto.",
      },
    ],
  },
  "compress-image": {
    name: "Comprimir imagen",
    shortName: "Comprimir",
    tagline: "Reduce el peso de una imagen eligiendo formato y calidad, y mira el nuevo tamaño antes de descargarla.",
    intro:
      "Comprimir imagen reduce el peso de una foto para que cargue más rápido en una web o quepa en el límite de un correo o de una subida. Vuelve a guardar la imagen en WebP (por defecto), AVIF, JPG o PNG con la calidad que elijas, y muestra el tamaño nuevo estimado y el porcentaje ahorrado mientras mueves el control. El modo Tamaño de archivo ajusta la calidad por ti cuando necesitas quedarte por debajo de un límite, como 100 KB.",
    seoTitle: "Comprimir imagen online: reduce el peso gratis",
    seoDescription:
      "Comprimir imagen online gratis. Elige WebP, AVIF, JPG o PNG, ajusta la calidad o un tamaño objetivo en KB y mira el ahorro antes de descargar. Sin subir nada.",
    keywords: [
      "comprimir imagen",
      "reducir peso de imagen",
      "comprimir jpg",
      "comprimir imagen a 100kb",
      "compresor de imágenes online",
      "comprimir foto para correo",
      "comprimir png",
      "convertir y comprimir a webp",
    ],
    howToSteps: [
      {
        title: "Añade una imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Elige el formato de salida",
        description:
          "WebP está seleccionado por defecto. AVIF suele dar los archivos más ligeros pero tarda más en codificarse, JPG se abre en todas partes y PNG no pierde calidad, por lo que es el que menos espacio ahorra.",
      },
      {
        title: "Ajusta la calidad o un tamaño objetivo",
        description:
          "Mueve el control de calidad y observa el tamaño estimado, o cambia a Tamaño de archivo y escribe un tamaño en KB o haz clic en 50, 100, 200 o 500 KB.",
      },
      {
        title: "Revisa y descarga",
        description: "Mira la vista previa y el porcentaje ahorrado, y haz clic en Descargar.",
      },
    ],
    features: [
      {
        title: "Tamaño estimado en tiempo real",
        description:
          "El nuevo tamaño del archivo y el porcentaje ahorrado se actualizan al cambiar los ajustes, y te avisa si el resultado va a pesar más que el original.",
      },
      {
        title: "AVIF, WebP, JPG y PNG",
        description:
          "Cuatro formatos de salida, incluido AVIF, que se codifica directamente en tu navegador con un codificador WebAssembly.",
      },
      {
        title: "Modo tamaño de archivo",
        description:
          "Escribe un tamaño en KB y la herramienta elige una calidad para conseguirlo. Es una estimación, así que revisa el tamaño en tiempo real antes de descargar.",
      },
      {
        title: "Las dimensiones no cambian",
        description:
          "La compresión mantiene el ancho y el alto. Para que un archivo pese mucho menos, cambia primero su tamaño y después comprímelo.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto se va a reducir mi imagen?",
        answer:
          "Depende de la imagen. Las fotos grandes de cámara suelen reducirse mucho en WebP o AVIF con una calidad del 70% al 85%, mientras que los gráficos pequeños o los archivos ya comprimidos pueden reducirse muy poco. La estimación en tiempo real muestra el resultado antes de descargar.",
      },
      {
        question: "¿Qué formato da el archivo más ligero: AVIF, WebP o JPG?",
        answer:
          "AVIF suele ser el más ligero con una calidad visual similar, seguido de WebP y después JPG. AVIF tarda más en codificarse en el navegador, sobre todo con fotos grandes, y algunos programas antiguos no pueden abrirlo.",
      },
      {
        question: "¿Cómo comprimo una imagen a 100 KB?",
        answer:
          "Elige Tamaño de archivo y haz clic en 100 KB. Si el tamaño en tiempo real sigue por encima de 100 KB, baja un poco más la calidad o reduce primero las dimensiones con Cambiar tamaño de imagen.",
      },
      {
        question: "¿La compresión hará que mi foto se vea peor?",
        answer:
          "WebP, AVIF y JPG eliminan detalles difíciles de ver. Con una calidad del 75% al 90%, la mayoría de las fotos se ven igual a tamaño normal, mientras que los ajustes muy bajos producen desenfoque y zonas con bloques.",
      },
      {
        question: "¿Por qué el archivo comprimido pesa más que el original?",
        answer:
          "Ocurre cuando el original ya estaba bien optimizado o cuando una foto se guarda en PNG. Prueba con WebP o AVIF, o con una calidad más baja.",
      },
      {
        question: "¿Se eliminan los datos EXIF al comprimir una foto?",
        answer:
          "Sí. El nuevo archivo se crea a partir de los píxeles de la imagen, así que no incluye la información de la cámara ni la ubicación GPS.",
      },
    ],
  },
  "rotate-image": {
    name: "Girar imagen",
    shortName: "Girar",
    tagline: "Gira una imagen 90°, 180° o cualquier ángulo de -180° a 180°, y guárdala en el formato que necesites.",
    intro:
      "Girar imagen corrige fotos que aparecen de lado o al revés, y endereza imágenes un poco inclinadas. Usa los botones de 90° para giros rápidos o el control Ángulo personalizado para pequeñas correcciones. Cuando el ángulo no es múltiplo de 90°, el lienzo crece para que quepa toda la imagen girada, así que no se corta ninguna esquina.",
    seoTitle: "Girar imagen online: 90°, 180° o cualquier ángulo",
    seoDescription:
      "Girar imagen online gratis. Rota una foto 90° a la izquierda o a la derecha, 180° o cualquier ángulo para enderezarla, y guárdala en JPG, PNG, WebP o AVIF.",
    keywords: [
      "girar imagen",
      "rotar foto online",
      "girar imagen 90 grados",
      "rotar imagen",
      "enderezar foto",
      "girar jpg",
      "rotar imagen por ángulo",
    ],
    howToSteps: [
      {
        title: "Abre la imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Gírala",
        description:
          "Haz clic en Derecha 90° para girar en el sentido de las agujas del reloj, en Izquierda 90° para girar en sentido contrario o en 180° para ponerla al revés. Para una pequeña corrección, arrastra el control Ángulo personalizado.",
      },
      {
        title: "Elige el formato",
        description:
          "Por defecto se mantiene el formato original. Con un ángulo personalizado, PNG, WebP y AVIF dejan las nuevas esquinas transparentes, mientras que JPG las rellena de blanco.",
      },
      {
        title: "Descarga",
        description: "Haz clic en Descargar para guardar la imagen girada, o cópiala al portapapeles.",
      },
    ],
    features: [
      {
        title: "Giros rápidos de 90° y 180°",
        description: "Corrige fotos de lado o al revés con un clic, y usa Restablecer para volver al principio.",
      },
      {
        title: "Cualquier ángulo",
        description: "Endereza un horizonte o un documento inclinado con el control, en pasos de un grado de -180° a 180°.",
      },
      {
        title: "No se corta nada",
        description: "Con ángulos personalizados, el lienzo de salida se amplía para que quepa toda la imagen girada.",
      },
      {
        title: "Funciona con fotos de iPhone",
        description: "Las fotos HEIC se convierten en tu navegador, así que no tienes que convertirlas antes.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué mi foto se ve de lado en algunas apps?",
        answer:
          "Los teléfonos suelen guardar la imagen en una orientación y añadir una etiqueta de rotación a los datos EXIF, que algunas apps ignoran. El archivo que descargas aquí tiene los píxeles realmente girados y no lleva etiqueta de rotación, así que se ve igual en todas partes.",
      },
      {
        question: "¿Girar una imagen reduce su calidad?",
        answer:
          "Girar 90° o 180° mueve los píxeles sin cambiarlos. Otros ángulos obligan a recalcular los píxeles, lo que suaviza la imagen muy ligeramente. Guardar en JPG, WebP o AVIF también la vuelve a comprimir, algo que PNG evita.",
      },
      {
        question: "¿Qué rellena las esquinas tras un giro personalizado?",
        answer:
          "El lienzo crece para que quepa la imagen girada. En PNG, WebP y AVIF las nuevas esquinas son transparentes; en JPG son blancas.",
      },
      {
        question: "¿Puedo girar una foto HEIC de iPhone?",
        answer:
          "Sí. La foto se convierte en tu navegador y la versión girada se guarda en JPG, salvo que elijas otro formato.",
      },
    ],
  },
  "flip-image": {
    name: "Voltear imagen",
    shortName: "Voltear",
    tagline: "Crea el reflejo de una imagen en horizontal o en vertical, por ejemplo para corregir un selfie invertido o un texto al revés.",
    intro:
      "Voltear imagen crea una copia en espejo de una imagen. El volteo horizontal intercambia izquierda y derecha, lo que corrige los selfies de la cámara frontal en los que el texto aparece al revés. El volteo vertical pone la imagen boca abajo, como un reflejo en el agua, y usar los dos a la vez da el mismo resultado que girarla 180°.",
    seoTitle: "Voltear imagen online: efecto espejo horizontal o vertical",
    seoDescription:
      "Voltear imagen online gratis. Aplica efecto espejo horizontal o vertical, corrige selfies invertidos y textos al revés, y guarda en JPG, PNG, WebP o AVIF.",
    keywords: [
      "voltear imagen",
      "imagen en espejo online",
      "voltear foto horizontalmente",
      "voltear imagen verticalmente",
      "invertir selfie",
      "invertir imagen de izquierda a derecha",
      "reflejar imagen",
    ],
    howToSteps: [
      {
        title: "Abre la imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Elige la dirección",
        description:
          "Haz clic en Horizontal para intercambiar izquierda y derecha, o en Vertical para ponerla boca abajo. Vuelve a hacer clic en un botón para deshacerlo, o usa Ambos o Restablecer.",
      },
      {
        title: "Elige el formato",
        description: "Por defecto se mantiene el formato original, o puedes guardar en JPG, PNG, WebP o AVIF.",
      },
      {
        title: "Descarga",
        description: "Haz clic en Descargar para guardar la imagen en espejo, o cópiala al portapapeles.",
      },
    ],
    features: [
      {
        title: "Espejo horizontal y vertical",
        description: "Voltea en una dirección o en las dos, y mira el resultado en la vista previa al instante.",
      },
      {
        title: "Los píxeles no cambian",
        description: "Voltear solo mueve los píxeles a nuevas posiciones. Guarda en PNG para conservar cada píxel exactamente igual.",
      },
      {
        title: "Mantiene tu formato",
        description: "Por defecto, un JPG se guarda como JPG y un PNG como PNG, así que recibes el mismo tipo de archivo.",
      },
      {
        title: "Se procesa en tu navegador",
        description: "La imagen se voltea en tu dispositivo y nunca se sube a un servidor.",
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre voltear y girar?",
        answer:
          "Voltear crea una imagen en espejo, así que cualquier texto se lee al revés. Girar hace rotar toda la imagen alrededor de su centro, y el texto sigue siendo legible.",
      },
      {
        question: "¿Cómo corrijo un selfie en espejo?",
        answer:
          "Muchas cámaras frontales guardan los selfies como una imagen en espejo. Abre la foto, haz clic en Horizontal y descárgala; el texto del fondo volverá a leerse bien.",
      },
      {
        question: "¿Voltear una imagen reduce su calidad?",
        answer:
          "El volteo en sí no cambia el valor de ningún píxel. Si guardas en JPG, WebP o AVIF, la imagen se vuelve a comprimir, así que usa una calidad alta o PNG.",
      },
      {
        question: "¿Puedo voltear una imagen en ambas direcciones a la vez?",
        answer:
          "Sí. Ambos voltea la imagen en horizontal y en vertical, lo que se ve igual que girarla 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Conversor de imágenes universal",
    shortName: "Conversor",
    tagline: "Convierte imágenes JPG, PNG, WebP, AVIF, GIF, BMP, SVG o HEIC de iPhone a JPG, PNG, WebP o AVIF.",
    intro:
      "El Conversor de imágenes universal cambia una imagen de un formato de archivo a otro. Abre cualquier imagen que tu navegador pueda mostrar, como JPG, PNG, WebP, AVIF, GIF, BMP y SVG, además de fotos HEIC de iPhone, y la guarda en JPG, PNG, WebP o AVIF. Las fotos JPG y HEIC se convierten a WebP por defecto y el resto de imágenes a PNG, pero puedes elegir cualquiera de los cuatro formatos.",
    seoTitle: "Convertir imagen: JPG, PNG, WebP, AVIF y HEIC",
    seoDescription:
      "Convertir imagen gratis en tu navegador. Pasa de HEIC, PNG, JPG, WebP, GIF, BMP o SVG a JPG, PNG, WebP o AVIF con calidad ajustable. Sin subir archivos.",
    keywords: [
      "convertir imagen",
      "convertir imagen a jpg",
      "heic a jpg",
      "convertir imagen a webp",
      "convertir imagen a avif",
      "gif a png",
      "bmp a jpg",
      "conversor de formatos de imagen online",
    ],
    howToSteps: [
      {
        title: "Abre tu imagen",
        description: "Suelta, elige o pega una imagen en cualquier formato que tu navegador pueda abrir, o una foto HEIC de iPhone.",
      },
      {
        title: "Elige el formato de salida",
        description: "En Guardar como, selecciona JPG, PNG, WebP o AVIF.",
      },
      {
        title: "Ajusta la calidad y el fondo",
        description:
          "Para JPG, WebP y AVIF, ajusta la calidad. Si la imagen tiene zonas transparentes y elegiste JPG, escoge el color que las rellena.",
      },
      {
        title: "Descarga el archivo convertido",
        description: "Haz clic en Descargar. AVIF puede tardar unos segundos con fotos grandes porque se codifica en tu navegador.",
      },
    ],
    features: [
      {
        title: "Muchos formatos de entrada",
        description: "Abre JPG, PNG, WebP, AVIF, GIF, BMP, SVG y otros formatos que admita tu navegador, además de HEIC y HEIF.",
      },
      {
        title: "Cuatro formatos modernos de salida",
        description: "Guarda en JPG, PNG, WebP o AVIF. AVIF se codifica en tu dispositivo con un codificador WebAssembly.",
      },
      {
        title: "Transparencia bien gestionada",
        description: "PNG, WebP y AVIF conservan las zonas transparentes. Para JPG, eliges el color que las sustituye.",
      },
      {
        title: "Control de calidad",
        description: "Ajusta la calidad del 10% al 100% en los formatos con pérdida para equilibrar peso y detalle.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo convierto HEIC a JPG?",
        answer:
          "Abre la foto HEIC, selecciona JPG en Guardar como y haz clic en Descargar. La conversión se hace en tu navegador, así que la foto no se envía a ningún sitio.",
      },
      {
        question: "¿Qué formato debo elegir?",
        answer:
          "JPG para fotos que deben abrirse en todas partes, PNG para capturas de pantalla, logotipos y gráficos con bordes nítidos o transparencia, WebP para imágenes web más ligeras y AVIF para los archivos más ligeros en navegadores modernos.",
      },
      {
        question: "¿Puedo convertir a GIF, BMP o SVG?",
        answer:
          "No. Estos formatos se pueden abrir, pero el resultado siempre es JPG, PNG, WebP o AVIF. Un GIF animado se convierte en una sola imagen fija.",
      },
      {
        question: "¿Se mantendrá mi fondo transparente?",
        answer:
          "Sí, si guardas en PNG, WebP o AVIF. JPG no admite transparencia, así que las zonas transparentes se rellenan con el color que elijas.",
      },
      {
        question: "¿La conversión es sin pérdida?",
        answer:
          "Guardar en PNG es sin pérdida. JPG, WebP y AVIF son formatos con pérdida: una calidad más alta conserva más detalle pero crea un archivo más pesado.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG a PNG",
    shortName: "JPG → PNG",
    tagline: "Convierte una foto JPG en un archivo PNG que no perderá más calidad cuando lo edites y lo vuelvas a guardar.",
    intro:
      "JPG a PNG convierte una imagen JPEG al formato PNG. PNG usa compresión sin pérdida, así que la imagen no pierde más calidad cada vez que la editas y la guardas, algo útil para capturas de pantalla, gráficos y archivos que vas a seguir editando. El PNG tiene exactamente los mismos píxeles y dimensiones que tu JPG, pero el archivo suele pesar más.",
    seoTitle: "Convertir JPG a PNG gratis en tu navegador",
    seoDescription:
      "Convertir JPG a PNG online gratis. Obtén un PNG sin pérdida con los mismos píxeles y dimensiones que tu JPEG, creado en tu navegador sin subir el archivo.",
    keywords: [
      "jpg a png",
      "convertir jpg a png",
      "jpeg a png",
      "convertidor de jpg a png",
      "cambiar jpg a png",
      "guardar jpg como png",
    ],
    howToSteps: [
      {
        title: "Abre un JPG",
        description: "Suelta un archivo JPG o JPEG en el recuadro, haz clic para elegir uno o pégalo con Ctrl+V.",
      },
      {
        title: "Revisa la vista previa",
        description: "El resultado siempre es PNG, así que no hay ajustes que cambiar. Las dimensiones se mantienen.",
      },
      {
        title: "Descarga el PNG",
        description: "Haz clic en Descargar PNG, o envía la imagen a otra herramienta, como Cambiar tamaño, desde los botones de Siguiente paso.",
      },
    ],
    features: [
      {
        title: "Copia exacta de los píxeles",
        description: "Cada píxel del JPG se guarda en el PNG sin más pérdida por compresión.",
      },
      {
        title: "Seguro para editar muchas veces",
        description: "Un PNG se puede editar y guardar muchas veces sin nuevos defectos de compresión.",
      },
      {
        title: "Mismas dimensiones",
        description: "El PNG tiene el mismo ancho y alto que el JPG original.",
      },
      {
        title: "Sin subir nada",
        description: "El archivo se convierte dentro de la pestaña de tu navegador y se queda en tu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "¿Convertir JPG a PNG mejora la calidad?",
        answer:
          "No. El PNG conserva la imagen exactamente como está ahora, pero no puede recuperar el detalle que la compresión JPEG ya eliminó.",
      },
      {
        question: "¿Convertir a PNG hace que el fondo sea transparente?",
        answer:
          "No. Un JPG no tiene transparencia, así que el PNG conserva el mismo fondo sólido. Para quitar el fondo, usa la herramienta Quitar fondo.",
      },
      {
        question: "¿Por qué el PNG pesa más que el JPG?",
        answer:
          "PNG guarda cada píxel sin compresión con pérdida, mientras que JPG descarta detalles finos para ahorrar espacio. Las fotos guardadas en PNG suelen pesar varias veces más.",
      },
      {
        question: "¿Puedo convertir varios JPG a PNG a la vez?",
        answer:
          "Esta página convierte un archivo cada vez. El Redimensionador de imágenes por lotes puede guardar hasta 50 imágenes como PNG en un solo ZIP si pones la escala al 100%.",
      },
      {
        question: "¿Se conservan los datos EXIF del JPG?",
        answer:
          "No. El PNG se crea solo a partir de los píxeles, así que no se copia la información de la cámara ni la ubicación GPS.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG a JPG",
    shortName: "PNG → JPG",
    tagline: "Convierte un PNG en un JPG más ligero y elige el color que sustituye las zonas transparentes.",
    intro:
      "PNG a JPG convierte una imagen PNG en JPEG, que en fotos suele pesar mucho menos y que aceptan casi todas las webs y apps. JPEG no admite transparencia, así que eliges blanco, negro o cualquier color personalizado para rellenar las zonas transparentes. También puedes ajustar la calidad del JPG del 10% al 100%.",
    seoTitle: "Convertir PNG a JPG con el color de fondo que elijas",
    seoDescription:
      "Convertir PNG a JPG online gratis. Elige un fondo blanco, negro o personalizado para las zonas transparentes y ajusta la calidad del JPG. Sin subir archivos.",
    keywords: [
      "png a jpg",
      "convertir png a jpg",
      "png a jpeg",
      "png a jpg con fondo blanco",
      "convertidor de png a jpg",
      "reducir peso de png",
    ],
    howToSteps: [
      {
        title: "Abre un PNG",
        description: "Suelta un archivo PNG en el recuadro, haz clic para elegir uno o pégalo con Ctrl+V.",
      },
      {
        title: "Elige el color de fondo",
        description: "Elige Blanco, Negro o cualquier color con el selector. Rellena todas las zonas transparentes.",
      },
      {
        title: "Ajusta la calidad",
        description: "85% es un buen valor por defecto. Usa un valor más alto para imágenes con texto o líneas finas.",
      },
      {
        title: "Descarga el JPG",
        description: "Haz clic en Descargar JPG para guardar el archivo convertido.",
      },
    ],
    features: [
      {
        title: "El color de fondo que tú elijas",
        description: "Los píxeles transparentes y semitransparentes se mezclan con blanco, negro o un color personalizado.",
      },
      {
        title: "Calidad ajustable",
        description: "Elige del 10% al 100% para equilibrar el peso del archivo y el detalle.",
      },
      {
        title: "Archivos más ligeros para fotos",
        description: "Las fotos y las capturas con mucho detalle suelen pesar mucho menos en JPG que en PNG.",
      },
      {
        title: "Mismas dimensiones",
        description: "El JPG mantiene exactamente el ancho y el alto del PNG.",
      },
    ],
    faqs: [
      {
        question: "¿Qué pasa con el fondo transparente?",
        answer:
          "JPG no tiene transparencia, así que los píxeles transparentes y semitransparentes se mezclan con el color de fondo que elijas. El blanco está seleccionado por defecto.",
      },
      {
        question: "¿El JPG pesará menos que el PNG?",
        answer:
          "En fotos e imágenes con muchos colores, normalmente sí, y a menudo mucho menos. En gráficos sencillos con pocos colores, el PNG ya puede ser ligero y el JPG incluso puede pesar más.",
      },
      {
        question: "¿Qué calidad debo usar?",
        answer:
          "El 85%, el valor por defecto, funciona bien para la mayoría de las fotos. Usa del 90% al 100% para imágenes con texto o detalles finos, y valores más bajos cuando el peso del archivo importe más que el detalle.",
      },
      {
        question: "¿Por qué el texto se ve borroso en mi JPG?",
        answer:
          "La compresión JPEG puede suavizar los bordes y añadir pequeñas manchas alrededor del texto y las líneas nítidas. Usa una calidad más alta, o deja los logotipos y las capturas de pantalla en PNG o WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG a WebP",
    shortName: "JPG → WebP",
    tagline: "Convierte fotos JPG a WebP para tener imágenes más ligeras que hacen que las páginas web carguen más rápido.",
    intro:
      "JPG a WebP convierte fotos JPEG al formato WebP, que pueden mostrar todos los navegadores principales actuales. Con una calidad visual similar, un archivo WebP suele pesar menos que la misma imagen en JPG, así que las páginas que lo usan cargan más rápido. Ajustas la calidad con un control del 10% al 100%, y la imagen mantiene sus dimensiones originales.",
    seoTitle: "Convertir JPG a WebP: imágenes web más ligeras",
    seoDescription:
      "Convertir JPG a WebP online gratis. Consigue imágenes más ligeras para webs más rápidas, ajusta la calidad del 10% al 100% y mantén el tamaño original.",
    keywords: [
      "jpg a webp",
      "convertir jpg a webp",
      "jpeg a webp",
      "convertidor de jpg a webp",
      "convertir fotos a webp para web",
      "conversor de imágenes webp",
    ],
    howToSteps: [
      {
        title: "Abre un JPG",
        description: "Suelta una foto JPG o JPEG en el recuadro, haz clic para elegir una o pégala con Ctrl+V.",
      },
      {
        title: "Ajusta la calidad",
        description: "Empieza en torno al 80%. Los valores más altos conservan más detalle; los más bajos dan archivos más ligeros.",
      },
      {
        title: "Descarga el WebP",
        description: "Haz clic en Descargar WebP y compara el peso del nuevo archivo con el del original.",
      },
    ],
    features: [
      {
        title: "Archivos más ligeros con calidad similar",
        description: "WebP suele necesitar menos bytes que JPG para una foto que se ve igual.",
      },
      {
        title: "Control de calidad",
        description: "Elige cualquier calidad del 10% al 100% según la velocidad de tu página y el detalle que necesite la imagen.",
      },
      {
        title: "Dimensiones originales",
        description: "La foto se convierte sin cambiar su ancho ni su alto.",
      },
      {
        title: "Convertida en tu dispositivo",
        description: "Tu foto se procesa en el navegador y no se sube.",
      },
    ],
    faqs: [
      {
        question: "¿WebP es mejor que JPG?",
        answer:
          "Para webs, WebP suele dar archivos más ligeros con la misma calidad visual y además admite transparencia. JPG sigue siendo aceptado por más programas antiguos, impresoras y formularios de subida.",
      },
      {
        question: "¿Todos los navegadores admiten WebP?",
        answer:
          "Las versiones actuales de Chrome, Edge, Firefox y Safari muestran imágenes WebP. Algunas apps y sistemas operativos antiguos no pueden abrirlas.",
      },
      {
        question: "¿Por qué obtuve un PNG en lugar de un WebP?",
        answer:
          "Algunos navegadores, incluidas algunas versiones de Safari, pueden mostrar WebP pero no crearlo. En ese caso la herramienta te avisa y guarda un PNG; usa Chrome, Edge o Firefox para obtener un archivo WebP.",
      },
      {
        question: "¿Cómo puedo ver el peso del archivo antes de descargarlo?",
        answer:
          "Este conversor no muestra una estimación del tamaño. Comprimir imagen, con WebP seleccionado, muestra el tamaño previsto y el porcentaje ahorrado mientras ajustas la calidad.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG a WebP",
    shortName: "PNG → WebP",
    tagline: "Convierte imágenes PNG a WebP y conserva los fondos transparentes, normalmente con un archivo mucho más ligero.",
    intro:
      "PNG a WebP convierte archivos PNG, como capturas de pantalla, logotipos y gráficos, al formato WebP. WebP admite transparencia, así que las zonas transparentes siguen siéndolo después de la conversión. El resultado suele pesar mucho menos que el PNG, y un control de calidad te permite mantener nítidos el texto y las líneas finas.",
    seoTitle: "Convertir PNG a WebP conservando la transparencia",
    seoDescription:
      "Convertir PNG a WebP online gratis. Se conservan los fondos transparentes, los archivos suelen pesar mucho menos y puedes ajustar la calidad. En tu navegador.",
    keywords: [
      "png a webp",
      "convertir png a webp",
      "png a webp transparente",
      "convertidor de png a webp",
      "reducir peso de png para web",
      "webp transparente",
    ],
    howToSteps: [
      {
        title: "Abre un PNG",
        description: "Suelta un archivo PNG en el recuadro, haz clic para elegir uno o pega una captura con Ctrl+V.",
      },
      {
        title: "Ajusta la calidad",
        description: "Usa el 90% o más para logotipos, texto y capturas; para fotos suele bastar del 75% al 85%.",
      },
      {
        title: "Descarga el WebP",
        description: "Haz clic en Descargar WebP. Las zonas transparentes siguen siéndolo en el nuevo archivo.",
      },
    ],
    features: [
      {
        title: "Se conserva la transparencia",
        description: "El canal alfa de tu PNG se guarda en el WebP, así que los logotipos y los iconos mantienen su fondo transparente.",
      },
      {
        title: "Archivos mucho más ligeros",
        description: "La compresión WebP suele reducir las capturas y los gráficos PNG a una fracción de su peso.",
      },
      {
        title: "Control de calidad",
        description: "Ajusta la calidad del 10% al 100% según el detalle que necesite la imagen.",
      },
      {
        title: "Mismas dimensiones",
        description: "El WebP mantiene exactamente el ancho y el alto del PNG.",
      },
    ],
    faqs: [
      {
        question: "¿PNG a WebP conserva el fondo transparente?",
        answer: "Sí. WebP admite transparencia, así que se conservan los píxeles transparentes y semitransparentes.",
      },
      {
        question: "¿Por qué el WebP pesa tanto menos que el PNG?",
        answer:
          "PNG es sin pérdida y guarda cada píxel exactamente. Aquí WebP usa compresión con pérdida, que elimina detalles difíciles de ver y ahorra mucho espacio.",
      },
      {
        question: "¿Qué calidad debo usar para logotipos y capturas de pantalla?",
        answer:
          "Usa del 90% al 100% para que el texto, los iconos y las líneas finas se mantengan nítidos. Para fotos, suele bastar del 75% al 85%.",
      },
      {
        question: "¿Puedo usar imágenes WebP en mi sitio web?",
        answer:
          "Sí. Todos los navegadores principales actuales muestran WebP. Si también das soporte a navegadores o apps muy antiguos, conserva el PNG original como alternativa.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP a JPG",
    shortName: "WebP → JPG",
    tagline: "Convierte imágenes WebP a JPG para que se abran en cualquier app, visor de fotos o formulario de subida.",
    intro:
      "WebP a JPG convierte archivos WebP, muy comunes en las webs, en imágenes JPEG estándar. JPG es la opción más segura cuando un programa antiguo, un formulario de subida o un servicio de impresión no acepta WebP. Si el WebP tiene zonas transparentes, eliges el color que las rellena, porque JPG no admite transparencia.",
    seoTitle: "Convertir WebP a JPG gratis, sin subir archivos",
    seoDescription:
      "Convertir WebP a JPG online gratis. Haz que tus WebP se abran en cualquier app o formulario, elige un color para las zonas transparentes y ajusta la calidad.",
    keywords: [
      "webp a jpg",
      "convertir webp a jpg",
      "webp a jpeg",
      "guardar webp como jpg",
      "convertidor de webp a jpg",
      "abrir archivo webp",
    ],
    howToSteps: [
      {
        title: "Abre un archivo WebP",
        description: "Suelta una imagen WebP en el recuadro, haz clic para elegir una o pégala con Ctrl+V.",
      },
      {
        title: "Ajusta la calidad y el color de relleno",
        description:
          "Elige una calidad entre el 10% y el 100%. Si la imagen tiene partes transparentes, escoge el color que las sustituirá.",
      },
      {
        title: "Descarga el JPG",
        description: "Haz clic en Descargar JPG para guardar un archivo que se abre casi en cualquier sitio.",
      },
    ],
    features: [
      {
        title: "Máxima compatibilidad",
        description: "JPG se abre en casi cualquier programa, dispositivo, impresora y formulario de subida web.",
      },
      {
        title: "Color de relleno para la transparencia",
        description: "Las zonas transparentes del WebP se rellenan de blanco o del color que elijas.",
      },
      {
        title: "Calidad ajustable",
        description: "Usa el control de calidad para equilibrar el peso del archivo y el detalle.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se decodifica y se guarda como JPG en tu navegador; no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué las imágenes de las webs se guardan como WebP?",
        answer:
          "Muchas webs sirven las imágenes en WebP porque los archivos pesan menos. Cuando guardas una, obtienes el archivo WebP, que algunos programas antiguos no pueden abrir.",
      },
      {
        question: "¿Qué pasa con las partes transparentes de un WebP?",
        answer:
          "JPG no admite transparencia, así que esas zonas se rellenan con un color sólido. Por defecto se usa el blanco, y puedes elegir otro color.",
      },
      {
        question: "¿Puedo convertir un WebP animado?",
        answer: "Solo se convierte un fotograma fijo, porque JPG no admite animación.",
      },
      {
        question: "¿El JPG perderá calidad?",
        answer:
          "El WebP se decodifica y se vuelve a guardar como JPG, que es un formato con pérdida. Usa el 90% o más para que el resultado quede muy parecido al original.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP a PNG",
    shortName: "WebP → PNG",
    tagline: "Convierte imágenes WebP en archivos PNG sin pérdida que conservan la transparencia y cada píxel.",
    intro:
      "WebP a PNG convierte imágenes WebP en PNG, un formato sin pérdida que admiten casi todos los editores y visores. Las zonas transparentes siguen siéndolo y los píxeles decodificados se guardan exactamente, así que la imagen no pierde calidad cuando la editas y la vuelves a guardar. Úsalo cuando una app no pueda abrir WebP o cuando necesites un archivo para seguir editándolo.",
    seoTitle: "Convertir WebP a PNG sin pérdida y con transparencia",
    seoDescription:
      "Convertir WebP a PNG online gratis. Conserva los fondos transparentes y obtén un PNG sin pérdida que se abre en cualquier editor. Se convierte en tu navegador.",
    keywords: [
      "webp a png",
      "convertir webp a png",
      "webp a png transparente",
      "convertidor de webp a png",
      "webp a png sin perder calidad",
      "guardar webp como png",
    ],
    howToSteps: [
      {
        title: "Abre un archivo WebP",
        description: "Suelta una imagen WebP en el recuadro, haz clic para elegir una o pégala con Ctrl+V.",
      },
      {
        title: "Revisa la vista previa",
        description: "El resultado siempre es un PNG sin pérdida del mismo tamaño, así que no hay ajuste de calidad.",
      },
      {
        title: "Descarga el PNG",
        description: "Haz clic en Descargar PNG para guardar el archivo convertido.",
      },
    ],
    features: [
      {
        title: "Transparencia conservada",
        description: "Las zonas transparentes y semitransparentes del WebP siguen siéndolo en el PNG.",
      },
      {
        title: "Resultado sin pérdida",
        description: "Los píxeles decodificados se guardan exactamente, sin nueva pérdida por compresión.",
      },
      {
        title: "Se abre en todas partes",
        description: "PNG es compatible con prácticamente todos los editores de imagen, visores y programas de oficina.",
      },
      {
        title: "Sin subir nada",
        description: "La conversión se hace en tu navegador, así que el archivo se queda en tu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "¿WebP a PNG conserva el fondo transparente?",
        answer: "Sí. PNG admite transparencia por completo, así que el fondo sigue siendo transparente.",
      },
      {
        question: "¿Por qué el PNG pesa más que el WebP?",
        answer:
          "La mayoría de las imágenes WebP usan compresión con pérdida, mientras que PNG guarda cada píxel sin pérdida. Por eso la misma imagen suele necesitar más bytes en PNG.",
      },
      {
        question: "¿Convertir a PNG mejora la calidad de la imagen?",
        answer:
          "No. El PNG conserva la imagen exactamente como se ve ahora, pero no puede recuperar el detalle que la compresión WebP ya eliminó.",
      },
      {
        question: "¿Puedo convertir un WebP animado a PNG?",
        answer:
          "La herramienta guarda una sola imagen fija. Aquí el PNG resultante no incluye fotogramas de animación.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Redimensionador de imágenes por lotes",
    shortName: "Redimensionar en lote",
    tagline: "Cambia el tamaño de hasta 50 imágenes a la vez por porcentaje, ancho exacto o un marco máximo, y descárgalas en un solo ZIP.",
    intro:
      "El Redimensionador de imágenes por lotes aplica la misma regla de tamaño a muchas imágenes en un solo paso. Puedes escalar cada archivo por un porcentaje, fijar un ancho exacto o ajustar cada imagen dentro de un marco, como 1200 × 800, para que ningún lado sea más grande que el marco. Cada archivo puede conservar su formato original, y todos los resultados se descargan juntos en un ZIP.",
    seoTitle: "Redimensionar imágenes por lotes: varias a la vez",
    seoDescription:
      "Redimensionar varias imágenes a la vez gratis. Escala hasta 50 archivos JPG, PNG o WebP por porcentaje, ancho exacto o un marco máximo, y descárgalos en un ZIP.",
    keywords: [
      "redimensionar imágenes por lotes",
      "cambiar tamaño de varias imágenes a la vez",
      "redimensionar imágenes en lote",
      "redimensionar imágenes masivamente online",
      "cambiar tamaño de fotos en lote",
      "redimensionar imágenes y descargar zip",
    ],
    howToSteps: [
      {
        title: "Añade tus imágenes",
        description: "Suelta hasta 50 archivos JPG, PNG o WebP (de hasta 50 MB cada uno) en la zona de carga, o haz clic para elegirlos.",
      },
      {
        title: "Elige un modo",
        description:
          "Porcentaje cambia cada imagen del 10% al 200%. Píxeles exactos fija el ancho, y también el alto si desbloqueas la proporción. Ajustar a un marco reduce cada imagen para que quepa dentro del ancho y el alto que escribas.",
      },
      {
        title: "Elige el formato de salida",
        description:
          "Deja Original o convierte todo a PNG, JPG o WebP. No ampliar las imágenes más pequeñas está activado por defecto, así que las imágenes pequeñas no se agrandan.",
      },
      {
        title: "Redimensiona y descarga",
        description: "Haz clic en Redimensionar todas y después en Descargar ZIP, o guarda archivos sueltos desde la lista.",
      },
    ],
    features: [
      {
        title: "Tres modos de redimensionado",
        description: "Escala por porcentaje, fija un ancho exacto o ajusta dentro de un ancho y un alto máximos.",
      },
      {
        title: "Cada archivo mantiene su formato",
        description: "Con Original, los JPG siguen siendo JPG, los PNG siguen siendo PNG y los WebP siguen siendo WebP.",
      },
      {
        title: "Evita la ampliación",
        description:
          "En los modos Píxeles exactos y Ajustar a un marco, las imágenes que ya son más pequeñas que el objetivo mantienen su tamaño.",
      },
      {
        title: "Una sola descarga ZIP",
        description: "Los archivos redimensionados conservan su nombre original con -resized añadido, y se descargan juntos en un solo archivo comprimido.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas imágenes puedo redimensionar a la vez?",
        answer:
          "Hasta 50 imágenes por lote, de hasta 50 MB cada una. Las fotos muy grandes usan mucha memoria, así que en un teléfono puede ayudar trabajar en lotes más pequeños.",
      },
      {
        question: "¿Se deformarán mis imágenes?",
        answer:
          "No en los modos Porcentaje o Ajustar a un marco, que siempre mantienen las proporciones. En el modo Píxeles exactos, si desbloqueas la proporción y fijas ambos lados, las imágenes con otra forma se deformarán.",
      },
      {
        question: "¿Qué formatos de archivo se admiten?",
        answer:
          "JPG, PNG y WebP. Aquí no se aceptan archivos HEIC de iPhone; conviértelos antes con el Conversor de imágenes universal.",
      },
      {
        question: "¿Qué calidad se usa para los archivos JPG y WebP?",
        answer:
          "Los archivos JPG y WebP redimensionados se guardan con una calidad del 90%. Cuando conviertes imágenes transparentes a JPG, las zonas transparentes quedan blancas.",
      },
      {
        question: "¿Se suben mis archivos a algún sitio?",
        answer: "No. Todas las imágenes se redimensionan en esta pestaña del navegador y el archivo ZIP se crea en tu dispositivo.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Compresor de imágenes por lotes",
    shortName: "Comprimir en lote",
    tagline: "Comprime hasta 50 imágenes a la vez en WebP, AVIF, JPG o PNG y descárgalas en un solo ZIP.",
    intro:
      "El Compresor de imágenes por lotes reduce el peso de muchas imágenes en una sola tanda. Eliges un formato de salida y una calidad para todos los archivos, inicias la compresión y ves el tamaño original, el tamaño nuevo y el porcentaje ahorrado de cada imagen. Es útil para preparar una carpeta de fotos para una web, una tienda online o un correo.",
    seoTitle: "Comprimir imágenes por lotes: muchas a la vez",
    seoDescription:
      "Comprimir hasta 50 imágenes a la vez gratis. Convierte JPG, PNG y WebP a WebP, AVIF, JPG o PNG, mira el ahorro de cada archivo y descárgalos en un ZIP.",
    keywords: [
      "comprimir imágenes por lotes",
      "comprimir varias imágenes",
      "comprimir imágenes en lote",
      "comprimir imágenes masivamente online",
      "convertir imágenes a webp en lote",
      "comprimir fotos y descargar zip",
    ],
    howToSteps: [
      {
        title: "Añade tus imágenes",
        description: "Suelta hasta 50 archivos JPG, PNG o WebP (de hasta 50 MB cada uno), o haz clic para elegirlos.",
      },
      {
        title: "Elige formato y calidad",
        description:
          "WebP al 80% está seleccionado por defecto. Elige AVIF para los archivos más ligeros, JPG por compatibilidad o PNG para un resultado sin pérdida.",
      },
      {
        title: "Comprime todos los archivos",
        description: "Haz clic en Comprimir todas y mira cómo aparecen en la lista el nuevo tamaño y el porcentaje ahorrado de cada archivo.",
      },
      {
        title: "Descarga los resultados",
        description: "Haz clic en Descargar ZIP para guardar todos los archivos comprimidos a la vez, o descarga archivos sueltos desde la lista.",
      },
    ],
    features: [
      {
        title: "Resultados de cada archivo",
        description:
          "Mira el tamaño antes y después y el porcentaje ahorrado de cada imagen, con una etiqueta clara cuando un archivo ha quedado más pesado.",
      },
      {
        title: "Cuatro formatos de salida",
        description: "AVIF, WebP, JPG o PNG, con un solo ajuste de calidad del 10% al 100% para todo el lote.",
      },
      {
        title: "ZIP con los nombres originales",
        description: "Cada archivo conserva su nombre con -compressed añadido, y los nombres repetidos se numeran automáticamente.",
      },
      {
        title: "Funciona en tu dispositivo",
        description: "Todos los archivos se comprimen en tu navegador y nunca salen de tu computadora o teléfono.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas imágenes puedo comprimir en un lote?",
        answer: "Puedes añadir hasta 50 imágenes, y cada una puede pesar hasta 50 MB.",
      },
      {
        question: "¿Qué formato de salida debo elegir?",
        answer:
          "WebP es un buen equilibrio entre peso, calidad y compatibilidad. AVIF suele pesar menos pero se codifica más despacio, algo que se nota con muchas fotos grandes. JPG se abre en todas partes, y PNG es sin pérdida pero es el que menos reduce el peso.",
      },
      {
        question: "¿Por qué uno de mis archivos pesa más?",
        answer:
          "Algunas imágenes ya están bien comprimidas y volver a guardarlas no ayuda. La lista marca estos archivos, así que puedes quedarte con el original.",
      },
      {
        question: "¿La compresión por lotes cambia las dimensiones de las imágenes?",
        answer:
          "No, el ancho y el alto se mantienen. Para reducir también las dimensiones, pasa antes los archivos por el Redimensionador de imágenes por lotes.",
      },
      {
        question: "¿Qué pasa con los PNG transparentes si elijo JPG?",
        answer: "JPG no admite transparencia, así que las zonas transparentes se rellenan de blanco.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Eliminar metadatos de imagen",
    shortName: "Quitar EXIF",
    tagline: "Elimina los datos EXIF, como la ubicación GPS, el modelo de cámara y la fecha, de una foto antes de compartirla.",
    intro:
      "Eliminar metadatos de imagen crea una copia limpia de tu foto sin su información EXIF oculta. Las fotos de teléfonos y cámaras suelen registrar la ubicación GPS donde se tomaron, el modelo del dispositivo y la fecha y hora. Esta herramienta vuelve a dibujar la imagen a partir de sus píxeles y guarda un archivo nuevo, así que esa información no se conserva, y te muestra el nuevo tamaño del archivo antes de descargarlo.",
    seoTitle: "Eliminar datos EXIF de fotos: GPS y metadatos",
    seoDescription:
      "Eliminar metadatos EXIF de fotos gratis. Quita la ubicación GPS, el modelo de cámara y la fecha antes de compartir una imagen. Todo en tu navegador.",
    keywords: [
      "eliminar datos exif",
      "quitar metadatos de una foto",
      "eliminar ubicación gps de una foto",
      "borrar exif",
      "quitar metadatos de imagen",
      "borrar datos de ubicación de foto",
      "quitar metadatos de foto de iphone",
    ],
    howToSteps: [
      {
        title: "Abre la foto",
        description: "Suelta, elige o pega una foto JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Revisa la copia limpia",
        description: "La vista previa muestra la imagen que se va a guardar, junto con su nuevo tamaño de archivo.",
      },
      {
        title: "Elige formato y calidad",
        description:
          "Por defecto se mantiene el formato original. Para JPG y WebP, usa una calidad del 90% al 100% para quedarte cerca del original, o elige PNG para un resultado sin pérdida.",
      },
      {
        title: "Descarga y comparte el nuevo archivo",
        description: "Haz clic en Descargar y comparte esta copia en lugar de la foto original.",
      },
    ],
    features: [
      {
        title: "Elimina datos de ubicación y cámara",
        description:
          "Las coordenadas GPS, la marca y el modelo de la cámara, el objetivo, la fecha de captura y otros campos EXIF e IPTC no se escriben en el nuevo archivo.",
      },
      {
        title: "Copia limpia a partir de los píxeles",
        description: "La imagen se vuelve a dibujar a partir de sus píxeles, así que no se puede copiar ningún dato oculto por accidente.",
      },
      {
        title: "Tamaño del archivo a la vista",
        description: "Consulta el peso del archivo limpio antes de descargarlo.",
      },
      {
        title: "Se hace en tu dispositivo",
        description: "Tu foto nunca se sube, así que sus datos de ubicación no se comparten con nadie durante el proceso.",
      },
    ],
    faqs: [
      {
        question: "¿Qué metadatos se eliminan?",
        answer:
          "Todos: los datos EXIF (cámara, ajustes, fecha y GPS), los campos IPTC y XMP, como el autor o el copyright, y el perfil de color incrustado. Solo se conserva la imagen visible.",
      },
      {
        question: "¿Eliminar los metadatos cambia la calidad de la imagen?",
        answer:
          "La imagen se vuelve a guardar. PNG conserva cada píxel, mientras que JPG, WebP y AVIF se vuelven a comprimir, así que elige una calidad alta. Las fotos con un perfil de color amplio, como muchas fotos de iPhone, pueden verse un poco menos vivas porque el perfil no se conserva.",
      },
      {
        question: "¿Cómo puedo comprobar que la ubicación ya no está?",
        answer:
          "Abre el archivo descargado en el Analizador de imágenes. Lee los datos EXIF en tu dispositivo y muestra un aviso cuando hay una ubicación GPS.",
      },
      {
        question: "¿Las apps y las webs eliminan los datos EXIF por mí?",
        answer:
          "Algunas plataformas grandes eliminan parte de los metadatos al subir la foto, pero el correo, las apps de mensajería y los servicios para compartir archivos suelen enviar el archivo original sin cambios. Eliminarlos tú es la opción segura.",
      },
      {
        question: "¿Puedo eliminar los metadatos de fotos HEIC de iPhone?",
        answer:
          "Sí. La foto HEIC se convierte en tu navegador y la copia limpia se guarda en JPG por defecto.",
      },
    ],
  },
  "image-analyzer": {
    name: "Analizador de imágenes",
    shortName: "Analizador",
    tagline: "Consulta las dimensiones, el peso, la relación de aspecto, el tamaño de impresión y los datos EXIF de una imagen, con aviso de ubicación GPS.",
    intro:
      "El Analizador de imágenes muestra los detalles técnicos de un archivo de imagen sin modificarlo. Indica el peso del archivo, el formato, las dimensiones en píxeles, la relación de aspecto, los megapíxeles y si la imagen tiene transparencia. En las fotos, también lee los datos EXIF de la cámara, como el modelo, el objetivo, la exposición, el ISO, la fecha de captura y la ubicación GPS, y te avisa cuando una foto revela dónde se tomó.",
    seoTitle: "Ver datos EXIF, tamaño y dimensiones de una imagen",
    seoDescription:
      "Ver los datos de una imagen gratis: dimensiones, peso, relación de aspecto, tamaño de impresión y EXIF, con aviso si la foto tiene ubicación GPS.",
    keywords: [
      "ver datos exif online",
      "ver metadatos de imagen",
      "saber dimensiones de una imagen",
      "ver exif de una foto",
      "saber si una foto tiene ubicación gps",
      "comprobar resolución de imagen",
      "información de imagen online",
    ],
    howToSteps: [
      {
        title: "Abre una imagen",
        description: "Suelta, elige o pega cualquier imagen que tu navegador pueda abrir, incluidas las fotos HEIC de iPhone.",
      },
      {
        title: "Lee las especificaciones",
        description:
          "Consulta el peso del archivo, el formato, las dimensiones, la relación de aspecto, los megapíxeles, la transparencia y el tamaño de impresión a 300 DPI.",
      },
      {
        title: "Revisa los datos de la cámara",
        description:
          "La sección EXIF muestra la cámara, el objetivo, la exposición y la fecha. Si la foto contiene una ubicación GPS, aparece un aviso con un botón para eliminar los metadatos.",
      },
      {
        title: "Copia el informe",
        description: "Haz clic en Copiar informe para copiar todos los valores como texto sin formato.",
      },
    ],
    features: [
      {
        title: "Especificaciones técnicas",
        description:
          "Peso del archivo, formato, tipo MIME, dimensiones, relación de aspecto, megapíxeles, profundidad de color, transparencia y uso estimado de memoria.",
      },
      {
        title: "Lector de EXIF de cámara",
        description:
          "Muestra la cámara, el objetivo, la fecha de captura, el tiempo de exposición, la apertura, el ISO, la distancia focal, el flash, la orientación y el programa de edición cuando están disponibles.",
      },
      {
        title: "Aviso de ubicación GPS",
        description:
          "Muestra las coordenadas cuando una foto las contiene y ofrece una forma de crear con un clic una copia sin metadatos.",
      },
      {
        title: "Tamaño de impresión estimado",
        description: "Muestra cuánto mide la imagen impresa a 300 DPI, en pulgadas y centímetros.",
      },
      {
        title: "Solo lectura y en local",
        description: "El archivo no se modifica y todos los datos se leen en tu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo veo los datos EXIF de una foto?",
        answer:
          "Abre la foto aquí y mira la sección Datos de cámara y EXIF. Si indica que no hay datos EXIF, el archivo se guardó sin ellos, algo habitual en capturas de pantalla e imágenes descargadas de redes sociales.",
      },
      {
        question: "¿Cómo sé si una foto muestra dónde se tomó?",
        answer:
          "Si la foto contiene coordenadas GPS, el analizador las muestra junto con un aviso. Haz clic en Eliminar metadatos para crear una copia sin la ubicación.",
      },
      {
        question: "¿Qué archivos contienen datos EXIF?",
        answer:
          "Las fotos de teléfonos y cámaras en formato JPG y HEIC normalmente sí. Los archivos WebP y AVIF también pueden tenerlos, mientras que las capturas de pantalla y muchas imágenes exportadas o editadas tienen pocos o ninguno.",
      },
      {
        question: "¿Qué significa el tamaño de impresión a 300 DPI?",
        answer:
          "Es el tamaño de una copia impresa a 300 puntos por pulgada, una calidad habitual para fotos impresas. Por ejemplo, una imagen de 3000 × 2000 píxeles se imprime a unas 10 × 6,7 pulgadas.",
      },
      {
        question: "¿El valor de profundidad de color es exacto?",
        answer:
          "Se basa en el formato y en si la imagen tiene transparencia (RGB de 24 bits o RGBA de 32 bits). No detecta imágenes de 16 bits ni HDR.",
      },
    ],
  },
  "image-color-picker": {
    name: "Selector de color de imagen",
    shortName: "Selector de color",
    tagline: "Haz clic en cualquier punto de una imagen para obtener su color exacto en HEX, RGB, HSL, HSV y CMYK.",
    intro:
      "El Selector de color de imagen encuentra el color exacto de cualquier píxel de una imagen. Mueve el puntero sobre la imagen para ver una vista ampliada de los píxeles que hay debajo y haz clic para seleccionar un color y copiar su código en HEX, RGB, HSL, HSV o CMYK. Los colores se leen de la imagen a resolución completa, no de la vista previa reducida.",
    seoTitle: "Obtener color de una imagen: código HEX y RGB",
    seoDescription:
      "Obtener el color de una imagen online gratis. Haz clic en un píxel para ver su código HEX, RGB, HSL, HSV y CMYK, usa la lupa para afinar y cópialo con un clic.",
    keywords: [
      "obtener color de una imagen",
      "sacar código hex de una imagen",
      "selector de color de imagen",
      "cuentagotas online",
      "encontrar un color en una foto",
      "color rgb de una imagen",
      "buscador de color hex",
    ],
    howToSteps: [
      {
        title: "Abre una imagen",
        description: "Suelta, elige o pega una imagen. Una captura de pantalla pegada con Ctrl+V funciona muy bien.",
      },
      {
        title: "Apunta con la lupa",
        description: "Mueve el ratón sobre la vista previa; una lupa redonda muestra ampliados los píxeles que hay bajo el puntero.",
      },
      {
        title: "Haz clic para elegir el color",
        description: "Haz clic o toca el punto que quieras. El color aparece con sus valores HEX, RGB, HSL, HSV y CMYK.",
      },
      {
        title: "Copia el código",
        description: "Haz clic en Copiar junto al formato que necesites. Los colores recientes se guardan abajo para volver a usarlos rápido.",
      },
    ],
    features: [
      {
        title: "Lupa de aumento",
        description: "Una vista ampliada de 7 × 7 píxeles te ayuda a acertar en detalles pequeños, como una línea fina o una sola letra.",
      },
      {
        title: "Cinco formatos de color",
        description: "Copia los valores HEX, RGB, HSL, HSV o CMYK con un clic cada uno.",
      },
      {
        title: "Historial de colores",
        description: "Los últimos 12 colores que elegiste se guardan como muestras, y al hacer clic en una se vuelve a seleccionar.",
      },
      {
        title: "Muestreo a resolución completa",
        description: "Cada color se lee de los píxeles de la imagen original, así que el valor no depende del tamaño de la vista previa.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo obtengo el código HEX de un color de una imagen?",
        answer:
          "Abre la imagen, haz clic en el color que quieras y pulsa Copiar junto al valor HEX. Puedes pegarlo en cualquier programa de diseño o archivo CSS.",
      },
      {
        question: "¿Puedo elegir un color de una captura de pantalla?",
        answer:
          "Sí. Haz una captura de pantalla, pulsa Ctrl+V en esta página para pegarla y haz clic en el color que necesites.",
      },
      {
        question: "¿El selector de color funciona en teléfonos?",
        answer:
          "Sí. Toca la imagen para seleccionar un color. La lupa solo aparece con el puntero del ratón, así que amplía la página si necesitas acertar en una zona muy pequeña.",
      },
      {
        question: "¿Por qué los píxeles cercanos de una foto tienen colores ligeramente distintos?",
        answer:
          "Las fotos tienen ruido, degradados y efectos de compresión, así que los píxeles vecinos rara vez coinciden exactamente. Prueba varios puntos y elige el que se vea bien.",
      },
      {
        question: "¿Por qué el valor CMYK es distinto al de mi programa de impresión?",
        answer:
          "Los valores CMYK de aquí son una conversión matemática sencilla desde RGB. Los programas de impresión usan perfiles de color para tintas y papeles concretos, así que sus números pueden variar.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Generador de paletas de colores",
    shortName: "Paleta",
    tagline: "Extrae los colores principales de una imagen como paleta y cópialos como códigos HEX, variables CSS o JSON.",
    intro:
      "El Generador de paletas de colores encuentra los colores dominantes de una foto o un diseño y los muestra como muestras. Puedes elegir 3, 4, 5, 6 u 8 colores; se ordenan empezando por el que cubre más superficie, y los tonos muy parecidos se combinan para que cada muestra sea distinta. Copia la paleta como variables CSS o como array JSON, o descárgala como muestrario PNG.",
    seoTitle: "Sacar paleta de colores de una imagen: códigos HEX",
    seoDescription:
      "Sacar la paleta de colores de una imagen gratis. Extrae de 3 a 8 colores dominantes, copia códigos HEX, variables CSS o JSON y descarga un muestrario PNG.",
    keywords: [
      "paleta de colores de una imagen",
      "extraer colores de una imagen",
      "generador de paletas desde imagen",
      "combinación de colores de una foto",
      "colores dominantes de una imagen",
      "extraer códigos hex de una imagen",
    ],
    howToSteps: [
      {
        title: "Abre una imagen",
        description: "Suelta, elige o pega una foto, una ilustración, un logotipo o una captura de pantalla.",
      },
      {
        title: "Elige el número de colores",
        description: "Haz clic en 3, 4, 5, 6 u 8. Las muestras se actualizan al instante.",
      },
      {
        title: "Copia colores sueltos",
        description: "Haz clic en el icono de copiar de una muestra para copiar su código HEX.",
      },
      {
        title: "Exporta la paleta",
        description: "Usa Copiar variables CSS o Copiar JSON, o descarga la paleta como muestrario PNG.",
      },
    ],
    features: [
      {
        title: "Ordenados por superficie",
        description: "La primera muestra es el color que cubre la mayor parte de la imagen.",
      },
      {
        title: "Tonos distintos",
        description: "Los colores casi idénticos se combinan, así que la paleta no repite el mismo tono.",
      },
      {
        title: "Lista para desarrolladores",
        description: "Exporta como propiedades personalizadas de CSS (--color-1, --color-2, etc.) o como array JSON de códigos HEX.",
      },
      {
        title: "Muestrario PNG",
        description: "Descarga una imagen de la paleta con el código HEX de cada color escrito bajo su muestra.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo se eligen los colores de la paleta?",
        answer:
          "La imagen se muestrea a un tamaño pequeño, los colores parecidos se agrupan y los grupos que cubren más superficie se muestran primero. Los píxeles transparentes se ignoran.",
      },
      {
        question: "¿Por qué obtengo menos colores de los que elegí?",
        answer:
          "Los tonos muy próximos entre sí se combinan para que cada muestra sea claramente distinta. Una imagen con pocos colores diferentes puede dar menos muestras.",
      },
      {
        question: "¿Cómo uso la paleta en CSS?",
        answer:
          "Haz clic en Copiar variables CSS para obtener un bloque :root con variables llamadas --color-1, --color-2, etc., y pégalo en tu hoja de estilos.",
      },
      {
        question: "¿Por qué falta un pequeño color de acento?",
        answer:
          "La paleta da prioridad a los colores que cubren más superficie, así que un detalle diminuto, como un logotipo pequeño, puede no aparecer. Usa el Selector de color de imagen para obtener el valor exacto de un punto concreto.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Añadir texto a una imagen",
    shortName: "Añadir texto",
    tagline: "Escribe pies de foto o títulos sobre una foto con la fuente, el tamaño, el color, el contorno y el fondo que elijas.",
    intro:
      "Añadir texto a una imagen coloca una o varias líneas de texto sobre una foto. Arrastra el texto a cualquier punto de la vista previa, o colócalo arriba, en el centro o abajo, y dale estilo con siete fuentes, negrita o cursiva, alineación, opacidad, sombra, contorno y un fondo de color. El texto se dibuja sobre la imagen a resolución completa al descargarla.",
    seoTitle: "Añadir texto a una imagen online gratis",
    seoDescription:
      "Añadir texto a una imagen online gratis. Arrastra el texto, elige fuente, tamaño, color, contorno, sombra y fondo, y guarda en JPG, PNG, WebP o AVIF.",
    keywords: [
      "añadir texto a una imagen",
      "poner texto a una foto online",
      "escribir sobre una imagen",
      "poner letras a una foto",
      "editor de texto en imágenes",
      "agregar texto a una foto",
    ],
    howToSteps: [
      {
        title: "Abre tu imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Escribe tu texto",
        description: "Escribe el texto en el cuadro. Pulsa Enter para empezar una nueva línea.",
      },
      {
        title: "Dale estilo y colócalo",
        description:
          "Elige la fuente, el tamaño (de 12 a 240 px), el color, la opacidad y la alineación. Arrastra el texto en la vista previa, o elige Arriba, Centro, Abajo o Personalizada.",
      },
      {
        title: "Descarga",
        description: "Mantén el formato original o elige JPG, PNG, WebP o AVIF, y haz clic en Descargar.",
      },
    ],
    features: [
      {
        title: "Arrastra para colocar",
        description: "Mueve el texto directamente en la vista previa para ponerlo justo donde quieras.",
      },
      {
        title: "Siete fuentes",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New e Impact, con opciones de negrita y cursiva.",
      },
      {
        title: "Legible en cualquier foto",
        description: "Añade una sombra, un contorno de 1 a 20 px o un fondo con su propio color y opacidad.",
      },
      {
        title: "Texto de varias líneas",
        description: "Escribe varias líneas y alinéalas a la izquierda, al centro o a la derecha.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo hago que el texto se lea bien en una foto con mucho detalle?",
        answer:
          "Activa Contorno y elige un color que contraste con el texto, o activa Fondo del texto para poner detrás un recuadro sólido o semitransparente. Una sombra también ayuda en las zonas claras.",
      },
      {
        question: "¿Puedo añadir más de un bloque de texto?",
        answer:
          "La herramienta añade un bloque de texto, que puede tener varias líneas. Para añadir texto en otro sitio, descarga el resultado, vuelve a abrirlo y añade el siguiente texto.",
      },
      {
        question: "¿Qué fuentes puedo usar?",
        answer:
          "Puedes elegir entre siete fuentes. La mayoría son fuentes del sistema, así que si una no está instalada en tu dispositivo, el navegador usa una parecida.",
      },
      {
        question: "¿El texto se verá nítido en la imagen descargada?",
        answer:
          "Sí. El texto se dibuja a la resolución completa de tu imagen. Si guardas en JPG, usa una calidad alta para que los bordes de las letras queden limpios.",
      },
    ],
  },
  "watermark-image": {
    name: "Poner marca de agua",
    shortName: "Marca de agua",
    tagline: "Protege tus fotos con una marca de agua de texto o logotipo, en un solo punto o repetida por toda la imagen.",
    intro:
      "Poner marca de agua añade un aviso de copyright, el nombre de una web o un logotipo encima de una foto. Coloca una marca de agua de texto o de logotipo en una de nueve posiciones y ajusta su tamaño y opacidad, o repite el texto por toda la imagen, algo mucho más difícil de eliminar recortando. Los logotipos pueden ser archivos PNG, WebP, JPG o SVG; un logotipo con fondo transparente queda mejor.",
    seoTitle: "Poner marca de agua a una foto: texto o logotipo",
    seoDescription:
      "Poner marca de agua a fotos online gratis. Usa texto o tu logotipo en nueve posiciones, ajusta la opacidad y la rotación, o repite el texto por toda la imagen.",
    keywords: [
      "poner marca de agua a una foto",
      "añadir marca de agua a una imagen",
      "poner logo a una foto",
      "marca de agua online gratis",
      "marca de agua de copyright",
      "marca de agua repetida",
      "marca de agua transparente",
    ],
    howToSteps: [
      {
        title: "Abre tu foto",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Elige texto o logotipo",
        description:
          "Selecciona Texto y escribe tu texto, o selecciona Logotipo y elige un archivo PNG, WebP, JPG o SVG.",
      },
      {
        title: "Colócala y dale estilo",
        description:
          "Haz clic en una posición de la cuadrícula de 3 × 3 y ajusta la opacidad y el tamaño. Con texto, también puedes ajustar el color y la rotación, o activar Repetir por toda la imagen.",
      },
      {
        title: "Descarga",
        description: "Mantén el formato original o elige otro, y haz clic en Descargar.",
      },
    ],
    features: [
      {
        title: "Texto o logotipo",
        description: "Usa una línea de copyright o la dirección de una web, o sube tu propio logotipo.",
      },
      {
        title: "Nueve posiciones",
        description: "Esquinas, bordes o centro, con un margen que se adapta al tamaño de la imagen.",
      },
      {
        title: "Patrón de texto repetido",
        description: "Repite tu texto por toda la foto con el ángulo que elijas.",
      },
      {
        title: "Opacidad, tamaño y rotación",
        description: "Opacidad del 10% al 100%, tamaño del texto de 14 a 140 px, ancho del logotipo del 5% al 60% de la imagen y rotación del texto de -90° a 90°.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo añado mi logotipo como marca de agua?",
        answer:
          "Elige Logotipo, haz clic en Elegir logotipo y selecciona tu archivo. Ajusta el tamaño del logotipo como porcentaje del ancho de la imagen, elige una posición y baja la opacidad para que la foto siga viéndose.",
      },
      {
        question: "¿Qué opacidad debe tener una marca de agua?",
        answer:
          "Entre un 30% y un 50% se ve sin tapar la foto. Usa un valor más alto si la marca de agua tiene que leerse con facilidad.",
      },
      {
        question: "¿Qué es una marca de agua repetida?",
        answer:
          "Repetir por toda la imagen imprime tu texto muchas veces sobre toda la foto. Es mucho más difícil de eliminar recortando que una sola marca en una esquina. Está disponible para marcas de agua de texto.",
      },
      {
        question: "¿Por qué mi logotipo tiene un recuadro blanco alrededor?",
        answer:
          "El archivo del logotipo tiene un fondo sólido. Usa un PNG, WebP o SVG con fondo transparente, o quita antes el fondo con Quitar fondo.",
      },
      {
        question: "¿Una marca de agua puede impedir que copien mi foto?",
        answer:
          "Una marca de agua hace que copiar resulte menos atractivo y muestra quién es el dueño de la imagen, pero no puede impedir del todo la copia. Las marcas grandes, centradas o repetidas son más difíciles de eliminar que una pequeña en una esquina.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Añadir borde a una imagen",
    shortName: "Añadir borde",
    tagline: "Añade un borde o marco de color sólido alrededor de una foto, por fuera de la imagen o sobre sus bordes.",
    intro:
      "Añadir borde a una imagen dibuja un marco de color alrededor de una foto. En el modo Por fuera, el lienzo crece, así que toda la foto queda visible dentro del borde; en el modo Por dentro, el borde se dibuja sobre los bordes de la imagen y esta mantiene su tamaño original. Puedes elegir un grosor de 1 a 100 píxeles, cualquier color y un nivel de opacidad.",
    seoTitle: "Añadir borde a una imagen online: marco gratis",
    seoDescription:
      "Añadir borde a una imagen online gratis. Elige un color, un grosor de 1 a 100 px y la opacidad, y colócalo por fuera de la foto o sobre sus bordes.",
    keywords: [
      "añadir borde a una imagen",
      "poner marco a una foto",
      "borde para imagen online",
      "poner un borde a una foto",
      "borde blanco para instagram",
      "contorno para foto",
    ],
    howToSteps: [
      {
        title: "Abre tu imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Elige la ubicación del borde",
        description: "Por fuera añade el borde alrededor de la foto y aumenta el tamaño. Por dentro lo dibuja sobre los bordes y mantiene el tamaño.",
      },
      {
        title: "Ajusta grosor, color y opacidad",
        description: "Arrastra el control de grosor de 1 a 100 px, elige cualquier color y baja la opacidad para un marco más suave.",
      },
      {
        title: "Descarga",
        description: "Mantén el formato original o elige JPG, PNG, WebP o AVIF, y haz clic en Descargar.",
      },
    ],
    features: [
      {
        title: "Por fuera o por dentro",
        description: "Añade espacio alrededor de la foto o conserva exactamente las dimensiones originales.",
      },
      {
        title: "Cualquier grosor y color",
        description: "Desde una línea fina de 1 px hasta un marco ancho de 100 px, en cualquier color.",
      },
      {
        title: "Opacidad ajustable",
        description: "Haz el borde semitransparente para un efecto más ligero.",
      },
      {
        title: "Mantiene tu formato",
        description: "La imagen con borde se guarda en el mismo formato que la original, salvo que elijas otro.",
      },
    ],
    faqs: [
      {
        question: "¿Añadir un borde cambia el tamaño de la imagen?",
        answer:
          "En el modo Por fuera, el grosor del borde se suma a cada lado, así que una imagen de 1000 × 800 con un borde de 20 px pasa a medir 1040 × 840. El modo Por dentro mantiene el tamaño y cubre el borde exterior de la foto.",
      },
      {
        question: "¿Cómo añado un borde blanco para Instagram?",
        answer:
          "Recorta primero la foto a 1:1 y luego añade un borde blanco en el modo Por fuera. El resultado sigue siendo cuadrado porque se añade el mismo grosor a cada lado.",
      },
      {
        question: "¿Puedo hacer un borde con esquinas redondeadas?",
        answer:
          "El borde en sí es rectangular. Para un aspecto redondeado, añade primero el borde y después abre el resultado en Redondear esquinas.",
      },
      {
        question: "¿Para qué sirve la opacidad del borde?",
        answer:
          "Una opacidad más baja hace que el borde sea translúcido. En el modo Por dentro, la foto se ve a través de él; en el modo Por fuera, la zona del borde queda parcialmente transparente en PNG, WebP y AVIF, y se mezcla con blanco en JPG.",
      },
    ],
  },
  "round-image": {
    name: "Redondear esquinas de imagen",
    shortName: "Redondear esquinas",
    tagline: "Redondea las esquinas de una imagen o recórtala en círculo, con fondo transparente en PNG.",
    intro:
      "Redondear esquinas de imagen le da a una foto esquinas suaves y redondeadas o la convierte en un círculo para una foto de perfil o el icono de una app. Elige el valor Pequeño, Mediano o Grande, fija un radio exacto con el control o haz clic en Hacer un círculo. El resultado se guarda en PNG por defecto, así que las esquinas recortadas quedan transparentes.",
    seoTitle: "Redondear esquinas de una imagen o hacerla círculo",
    seoDescription:
      "Redondear esquinas de una imagen online gratis o recortar una foto en círculo. Ajusta el radio, deja el fondo transparente en PNG o elige un color para JPG.",
    keywords: [
      "redondear esquinas de una imagen",
      "imagen con esquinas redondeadas online",
      "hacer una imagen circular",
      "crear foto de perfil circular",
      "foto de perfil redonda",
      "png con esquinas redondeadas",
    ],
    howToSteps: [
      {
        title: "Abre tu imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Elige la forma",
        description: "Haz clic en Hacer un círculo, elige esquinas Pequeñas, Medianas o Grandes, o arrastra el control del radio.",
      },
      {
        title: "Elige el formato",
        description:
          "PNG está seleccionado por defecto. Si eliges JPG, escoge blanco, negro o un color personalizado para las esquinas.",
      },
      {
        title: "Descarga",
        description: "Haz clic en Descargar para guardar la imagen redondeada, o cópiala al portapapeles.",
      },
    ],
    features: [
      {
        title: "Valores predefinidos y radio exacto",
        description: "Valores Pequeño, Mediano y Grande, o cualquier radio desde 0 hasta la mitad del lado más corto.",
      },
      {
        title: "Avatar circular",
        description: "Convierte la imagen en un círculo con un clic, lista para fotos de perfil.",
      },
      {
        title: "Esquinas transparentes",
        description: "PNG, WebP y AVIF mantienen transparente la zona fuera de la curva.",
      },
      {
        title: "Color de relleno para JPG",
        description: "Cuando guardas en JPG, las esquinas se rellenan de blanco, negro o el color que elijas.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo hago una foto de perfil redonda?",
        answer:
          "Haz clic en Hacer un círculo. El círculo usa el lado más corto de la imagen y queda centrado, así que, si la foto no es cuadrada, recórtala antes a 1:1 para centrar la cara y evitar espacios vacíos a los lados.",
      },
      {
        question: "¿Por qué mis esquinas son blancas o negras en lugar de transparentes?",
        answer: "JPG no admite transparencia. Elige PNG, WebP o AVIF para que las esquinas queden transparentes.",
      },
      {
        question: "¿Qué significan los valores Pequeño, Mediano y Grande?",
        answer:
          "El radio máximo posible es la mitad del lado más corto de la imagen. Pequeño, Mediano y Grande usan el 10%, el 25% y el 50% de ese máximo.",
      },
      {
        question: "¿Por qué mi imagen redondeada pesa tanto?",
        answer:
          "PNG es sin pérdida, así que una foto de cámara a tamaño completo puede crear un archivo grande. Cambia antes el tamaño de la foto o guarda en WebP, que también mantiene la transparencia y pesa mucho menos.",
      },
    ],
  },
  "favicon-generator": {
    name: "Generador de favicons",
    shortName: "Favicon",
    tagline: "Crea favicon.ico, un Apple touch icon, iconos para Android y un manifiesto web a partir de una imagen, en un solo ZIP.",
    intro:
      "El Generador de favicons convierte un logotipo o una imagen en el conjunto de archivos de icono que necesita un sitio web. Recorta la imagen en un cuadrado centrado y crea favicon.ico (con tamaños de 16, 32 y 48 píxeles), iconos PNG de 16 a 512 píxeles, un apple-touch-icon.png de 180 × 180 y un archivo site.webmanifest, todo en un ZIP. La página también muestra las etiquetas link de HTML que debes pegar en la sección head de tu sitio.",
    seoTitle: "Generador de favicon: ICO, PNG y Apple touch icon",
    seoDescription:
      "Generador de favicon gratis. Sube un logotipo PNG, JPG o SVG y obtén favicon.ico, iconos PNG de 16 a 512 px, Apple touch icon y manifiesto web en un ZIP.",
    keywords: [
      "generador de favicon",
      "crear favicon",
      "crear favicon ico",
      "png a ico",
      "generador de apple touch icon",
      "favicon desde imagen",
      "generador de iconos para web",
    ],
    howToSteps: [
      {
        title: "Sube tu logotipo",
        description:
          "Suelta o elige una imagen PNG, JPG, SVG o HEIC. Una imagen cuadrada de al menos 512 × 512 píxeles da el mejor resultado.",
      },
      {
        title: "Asegúrate de que esté centrado",
        description:
          "Los iconos se recortan del centro de la imagen. Si tu logotipo no está centrado o la imagen no es cuadrada, recórtala antes a 1:1 con Recortar imagen.",
      },
      {
        title: "Descarga el paquete de favicons",
        description: "Haz clic en Descargar paquete de favicons (ZIP) para obtener todos los archivos de icono y el manifiesto.",
      },
      {
        title: "Añádelo a tu sitio web",
        description:
          "Sube los archivos a la carpeta raíz de tu sitio, haz clic en Copiar código y pega las etiquetas HTML en la sección head de tus páginas.",
      },
    ],
    features: [
      {
        title: "favicon.ico con varios tamaños",
        description: "Un solo archivo ICO con iconos de 16 × 16, 32 × 32 y 48 × 48 para pestañas y marcadores del navegador.",
      },
      {
        title: "Iconos PNG para cada dispositivo",
        description: "Archivos PNG de 16, 32, 48, 64, 128, 192 y 512 píxeles, además de un apple-touch-icon.png de 180 × 180.",
      },
      {
        title: "Manifiesto de app web",
        description: "Un archivo site.webmanifest que apunta a los iconos de 192 y 512 píxeles para Android y las apps web instalables.",
      },
      {
        title: "Tamaños pequeños nítidos",
        description: "Los iconos se reducen en varios pasos desde la imagen completa, lo que mantiene más limpias las versiones de 16 y 32 píxeles.",
      },
      {
        title: "HTML listo para pegar",
        description: "Copia con un clic las etiquetas link de los iconos y del manifiesto.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tamaño debe tener la imagen de mi favicon?",
        answer:
          "Usa una imagen cuadrada de al menos 512 × 512 píxeles para que el icono más grande se vea nítido. Las formas sencillas y los colores intensos siguen siendo reconocibles a 16 × 16.",
      },
      {
        question: "¿Qué archivos incluye el ZIP?",
        answer:
          "favicon.ico, de favicon-16x16.png a favicon-512x512.png (16, 32, 48, 64, 128, 192 y 512), apple-touch-icon.png de 180 × 180 y site.webmanifest.",
      },
      {
        question: "¿Dónde pongo los archivos del favicon?",
        answer:
          "Súbelos a la carpeta raíz de tu sitio web, la misma donde está tu página de inicio. Después pega las etiquetas HTML que se muestran en esta página en la sección head de cada página.",
      },
      {
        question: "¿Por qué se corta parte de mi logotipo?",
        answer:
          "La herramienta toma el cuadrado centrado más grande de tu imagen. Si el logotipo es ancho o no está centrado, recórtalo en un cuadrado con algo de espacio alrededor antes de generar los iconos.",
      },
      {
        question: "¿Puedo usar un logotipo SVG?",
        answer:
          "Sí. El SVG se dibuja como imagen y se guarda en archivos PNG e ICO. El ZIP no incluye un favicon SVG.",
      },
      {
        question: "¿Tengo que editar el archivo del manifiesto?",
        answer:
          "Sí. site.webmanifest usa el nombre provisional App y colores de tema oscuro. Ábrelo en un editor de texto y cambia name, short_name y los colores para que coincidan con tu sitio.",
      },
    ],
  },
  "image-to-base64": {
    name: "Imagen a Base64",
    shortName: "Imagen → Base64",
    tagline: "Convierte un archivo de imagen en una cadena Base64 que puedes copiar, con fragmentos HTML y CSS listos.",
    intro:
      "Imagen a Base64 codifica un archivo de imagen como texto Base64, para que pueda guardarse o enviarse como texto, por ejemplo dentro de un JSON, una página HTML o un archivo CSS. La cadena se crea a partir de los bytes originales del archivo, así que la imagen no se vuelve a comprimir ni cambia. La herramienta muestra el número de caracteres y además te da una etiqueta img de HTML y una regla CSS background-image que contienen la imagen completa.",
    seoTitle: "Convertir imagen a Base64: copia la cadena",
    seoDescription:
      "Convertir imagen a Base64 online gratis. Codifica los bytes originales de un JPG, PNG, WebP, GIF o SVG y copia la cadena, una etiqueta img o una regla CSS.",
    keywords: [
      "imagen a base64",
      "convertir imagen a base64",
      "codificar imagen en base64",
      "png a base64",
      "jpg a base64",
      "svg a base64",
      "cadena base64 de imagen",
    ],
    howToSteps: [
      {
        title: "Abre una imagen",
        description: "Suelta, elige o pega cualquier archivo de imagen. Las imágenes pequeñas, como los iconos, funcionan mejor.",
      },
      {
        title: "Obtén la cadena Base64",
        description: "La cadena aparece al momento, con su longitud en caracteres y su tamaño aproximado.",
      },
      {
        title: "Copia lo que necesites",
        description: "Haz clic en Copiar Base64 para la cadena sola, o usa Copiar HTML o Copiar CSS para un fragmento listo.",
      },
      {
        title: "Pégala en tu código",
        description: "Pega la cadena en tu JSON, HTML, CSS o script.",
      },
    ],
    features: [
      {
        title: "Codificación exacta byte a byte",
        description: "El archivo original se codifica tal cual, sin volver a comprimirlo ni cambiar su calidad.",
      },
      {
        title: "Información de tamaño",
        description: "Consulta el número de caracteres y el tamaño aproximado de la cadena antes de usarla.",
      },
      {
        title: "Fragmentos HTML y CSS",
        description: "Copia una etiqueta img o una regla background-image con la data URI completa incluida.",
      },
      {
        title: "Codificada en local",
        description: "El archivo se lee y se codifica en tu navegador y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Para qué se usa Base64 con imágenes?",
        answer:
          "Base64 convierte los datos binarios de una imagen en caracteres de texto. Los desarrolladores lo usan para incluir imágenes pequeñas directamente en HTML, CSS, JSON o plantillas de correo, así no hay que cargar un archivo de imagen aparte.",
      },
      {
        question: "¿Por qué la cadena Base64 ocupa más que el archivo de imagen?",
        answer:
          "Base64 usa 4 caracteres de texto por cada 3 bytes, así que el resultado es aproximadamente un 33% más grande. Una imagen de 30 KB se convierte en unos 40 KB de texto.",
      },
      {
        question: "¿Qué diferencia hay entre Base64 y una data URI?",
        answer:
          "Base64 es solo el texto codificado. Una data URI añade un prefijo como data:image/png;base64, para que los navegadores sepan el tipo de archivo. Esta herramienta da la cadena sola; Imagen a Data URI da la versión completa.",
      },
      {
        question: "¿Conviene convertir imágenes grandes a Base64?",
        answer:
          "Normalmente no. Base64 funciona mejor con imágenes pequeñas, como iconos. Las fotos grandes hacen que tu HTML o CSS pese mucho más, y el navegador no puede guardar la imagen en caché como archivo aparte.",
      },
      {
        question: "¿Se modifica mi imagen al codificarla?",
        answer:
          "No, se codifican los bytes originales. La única excepción son las fotos HEIC de iPhone, que primero se convierten a PNG porque la mayoría de los navegadores no pueden mostrar HEIC.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Imagen a Data URI",
    shortName: "Data URI",
    tagline: "Convierte una imagen en una data URI completa, lista para pegar en un atributo src de HTML o en un valor url() de CSS.",
    intro:
      "Imagen a Data URI convierte un archivo de imagen en una data URI: una sola línea de texto que contiene tanto el tipo de archivo como la imagen codificada en Base64. Puedes pegarla directamente en un atributo src de una etiqueta img o en un valor url() de CSS, y la imagen se muestra sin un archivo aparte. El tipo MIME del prefijo se toma de tu archivo, y los bytes de la imagen no cambian.",
    seoTitle: "Convertir imagen a Data URI para HTML y CSS",
    seoDescription:
      "Convertir una imagen a data URI online gratis. Obtén una cadena data:image en Base64 con el tipo MIME correcto y cópiala como etiqueta img de HTML o regla CSS.",
    keywords: [
      "imagen a data uri",
      "generador de data uri",
      "convertir imagen a data url",
      "data uri base64",
      "imagen en línea en css",
      "incrustar imagen en html",
      "imagen data url",
    ],
    howToSteps: [
      {
        title: "Abre una imagen",
        description: "Suelta, elige o pega cualquier archivo de imagen, como un icono, un logotipo o un gráfico pequeño.",
      },
      {
        title: "Obtén la data URI",
        description: "La data URI completa, que empieza por data:image/, aparece con su longitud y su tamaño aproximado.",
      },
      {
        title: "Cópiala",
        description: "Haz clic en Copiar data URI, o usa Copiar HTML o Copiar CSS para un fragmento listo.",
      },
      {
        title: "Pégala en tu página",
        description: "Úsala en cualquier sitio donde funcione una URL de imagen normal, como una etiqueta img o un fondo CSS.",
      },
    ],
    features: [
      {
        title: "Tipo MIME correcto",
        description: "El prefijo coincide con tu archivo, por ejemplo image/png, image/jpeg o image/svg+xml.",
      },
      {
        title: "Bytes originales",
        description: "El archivo se codifica tal cual, así que la calidad y el tamaño no cambian por volver a comprimirlo.",
      },
      {
        title: "Fragmentos listos para copiar",
        description: "Obtén una etiqueta img completa o una regla background-image con la data URI ya incluida.",
      },
      {
        title: "Privada",
        description: "La data URI se crea en tu navegador, así que la imagen no se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Qué es una data URI?",
        answer:
          "Una data URI es un enlace que contiene el propio archivo en lugar de apuntar a él. En las imágenes empieza por data:image/png;base64, o un prefijo parecido, y los navegadores la muestran como una URL de imagen normal.",
      },
      {
        question: "¿Cómo uso una data URI en CSS?",
        answer:
          "Haz clic en Copiar CSS para obtener una regla background-image con la URI completa dentro de url(), y pégala en tu hoja de estilos.",
      },
      {
        question: "¿Cuándo debo evitar las data URI?",
        answer:
          "Evítalas con imágenes grandes y con imágenes que se usan en muchas páginas. El texto codificado ocupa aproximadamente un tercio más que el archivo, y el navegador no puede guardarlo en caché por separado.",
      },
      {
        question: "¿Las imágenes con data URI funcionan en los correos?",
        answer:
          "Depende. Muchos programas de correo, incluidos algunos servicios de correo web, no muestran imágenes con data URI, así que prueba tu correo o usa una imagen alojada en internet.",
      },
      {
        question: "¿Qué tipos de imagen se admiten?",
        answer:
          "Cualquier imagen que tu navegador pueda abrir, como JPG, PNG, GIF, WebP, AVIF y SVG. Las fotos HEIC de iPhone se convierten primero a PNG, así que su data URI usa image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64 a imagen",
    shortName: "Base64 → Imagen",
    tagline: "Pega una cadena Base64 o una data URI para ver la imagen y descargarla en PNG, JPG o WebP.",
    intro:
      "Base64 a imagen decodifica texto Base64 para convertirlo de nuevo en una imagen que puedes ver y guardar. Puedes pegar una cadena Base64 sola, una data URI completa o un fragmento CSS url() o HTML src que la contenga; el Base64 seguro para URL y los saltos de línea se gestionan automáticamente. La herramienta detecta si los datos son PNG, JPEG, GIF, WebP, SVG, BMP o AVIF, y muestra la imagen decodificada con sus dimensiones.",
    seoTitle: "Convertir Base64 a imagen: ver y descargar",
    seoDescription:
      "Convertir Base64 a imagen online gratis. Pega una cadena Base64, una data URI o un fragmento CSS o HTML, mira la imagen y descárgala en PNG, JPG o WebP.",
    keywords: [
      "base64 a imagen",
      "decodificar imagen base64",
      "base64 a png",
      "base64 a jpg",
      "data uri a imagen",
      "convertir cadena base64 a imagen",
      "visor de imágenes base64",
    ],
    howToSteps: [
      {
        title: "Pega los datos Base64",
        description: "Pega en el cuadro de texto, haz clic en Pegar o abre un archivo .txt que contenga la cadena.",
      },
      {
        title: "Revisa la vista previa",
        description: "La imagen se decodifica automáticamente y se muestra con su ancho y su alto. Si el texto no es válido, aparece un mensaje de error.",
      },
      {
        title: "Elige un formato de exportación",
        description: "Selecciona PNG, JPG o WebP.",
      },
      {
        title: "Descarga la imagen",
        description: "Haz clic en Descargar para guardarla en tu dispositivo.",
      },
    ],
    features: [
      {
        title: "Acepta muchos tipos de entrada",
        description:
          "Base64 solo, data URI, fragmentos CSS url() y HTML src, Base64 seguro para URL y texto dividido en varias líneas.",
      },
      {
        title: "Detección automática del formato",
        description: "Reconoce PNG, JPEG, GIF, WebP, SVG, BMP y AVIF a partir de los propios datos, aunque falte el prefijo o sea incorrecto.",
      },
      {
        title: "Vista previa al instante",
        description: "Mira la imagen decodificada y sus dimensiones en cuanto pegas el texto.",
      },
      {
        title: "Tres formatos de exportación",
        description: "Guarda el resultado en PNG, JPG o WebP.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de texto Base64 puedo pegar?",
        answer:
          "Una cadena Base64 sola, una data URI como data:image/png;base64,... o un fragmento CSS o HTML que la contenga. Los espacios, los saltos de línea y los caracteres seguros para URL se limpian automáticamente.",
      },
      {
        question: "¿Por qué me sale un error?",
        answer:
          "A menudo el texto se corta al copiarlo. Asegúrate de haber copiado toda la cadena, incluido el final, que puede llevar signos =.",
      },
      {
        question: "¿El archivo descargado es idéntico al original?",
        answer:
          "La imagen se decodifica y se vuelve a guardar en el formato que elijas. PNG conserva cada píxel, mientras que JPG y WebP se vuelven a comprimir. Los GIF animados se convierten en una sola imagen fija, y los gráficos SVG se guardan como imágenes de píxeles.",
      },
      {
        question: "¿Cómo sabe la herramienta qué tipo de imagen es?",
        answer:
          "Cada formato empieza con una firma conocida, por ejemplo iVBORw0KGgo para PNG o /9j/ para JPEG. La herramienta lee estos primeros caracteres para decodificar la imagen correctamente.",
      },
      {
        question: "¿Se envían mis datos Base64 a un servidor?",
        answer: "No. El texto se decodifica en tu navegador y la imagen se crea en tu dispositivo.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG a PNG",
    shortName: "SVG → PNG",
    tagline: "Convierte archivos vectoriales SVG en imágenes PNG nítidas a tamaño 1x, 2x, 4x u 8x, conservando la transparencia.",
    intro:
      "SVG a PNG convierte un gráfico vectorial, como un logotipo o un icono, en una imagen PNG para los sitios que no aceptan archivos SVG. Elige 1x, 2x, 4x u 8x el tamaño propio del SVG; como el vector se vuelve a dibujar a ese tamaño, una escala mayor da una imagen más nítida, no más borrosa. Los fondos transparentes siguen siéndolo en el PNG.",
    seoTitle: "Convertir SVG a PNG en alta resolución y transparente",
    seoDescription:
      "Convertir SVG a PNG online gratis. Exporta a 1x, 2x, 4x u 8x para obtener imágenes nítidas de alta resolución con fondo transparente. En tu navegador.",
    keywords: [
      "svg a png",
      "convertir svg a png",
      "svg a png alta resolución",
      "svg a png transparente",
      "exportar svg como png",
      "convertidor de svg",
    ],
    howToSteps: [
      {
        title: "Abre un archivo SVG",
        description: "Suelta un archivo .svg en el recuadro o haz clic para elegir uno.",
      },
      {
        title: "Elige la escala",
        description: "Selecciona 1x, 2x, 4x u 8x. El ancho y el alto de salida en píxeles se muestran debajo de los botones.",
      },
      {
        title: "Descarga el PNG",
        description: "Haz clic en Descargar PNG para guardar la imagen, o cópiala al portapapeles.",
      },
    ],
    features: [
      {
        title: "Nítido a cualquier escala",
        description: "El vector se vuelve a dibujar al tamaño elegido, así que las líneas y el texto quedan definidos.",
      },
      {
        title: "Fondo transparente",
        description: "Las zonas sin relleno del SVG siguen siendo transparentes en el PNG.",
      },
      {
        title: "Tamaño de salida a la vista",
        description: "Consulta las dimensiones exactas en píxeles de cada escala antes de descargar.",
      },
      {
        title: "PNG sin pérdida",
        description: "La imagen generada se guarda en PNG sin pérdida por compresión.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo obtengo un PNG de alta resolución a partir de un SVG?",
        answer:
          "Elige 4x u 8x. Un SVG de 256 × 256 pasa a medir 1024 × 1024 a 4x o 2048 × 2048 a 8x, y se mantiene nítido porque se vuelve a dibujar a ese tamaño.",
      },
      {
        question: "¿Por qué el tamaño de salida no es el que esperaba?",
        answer:
          "El tamaño 1x sale del ancho y el alto definidos en el archivo SVG. Si el SVG solo tiene un viewBox y no tiene width ni height, el navegador puede usar un tamaño por defecto; añade los atributos width y height para controlarlo.",
      },
      {
        question: "¿Por qué faltan fuentes o imágenes en mi PNG?",
        answer:
          "Cuando un SVG se dibuja como imagen, los navegadores no cargan los archivos externos a los que enlaza, como fuentes web o imágenes enlazadas. Convierte el texto en contornos e incrusta las imágenes en el SVG antes de convertirlo.",
      },
      {
        question: "¿El PNG conservará el fondo transparente?",
        answer: "Sí. Cualquier zona del SVG sin relleno ni fondo sigue siendo transparente.",
      },
      {
        question: "¿Puedo convertir SVG a JPG?",
        answer:
          "Esta herramienta solo guarda en PNG. Para obtener un JPG, convierte primero a PNG y después abre el PNG en PNG a JPG, donde además puedes elegir un color de fondo.",
      },
    ],
  },
  "photo-filters": {
    name: "Filtros y efectos de fotos",
    shortName: "Filtros",
    tagline: "Aplica estilos listos como Vintage, Noir o Cinematográfico, y ajusta el brillo, el contraste, el color y la viñeta.",
    intro:
      "Filtros y efectos de fotos cambia el aspecto y el ambiente de una foto. Empieza con uno de los ocho estilos, como Cinematográfico, Vintage 70, Noir sombrío o Atardecer cálido, y después ajusta con controles deslizantes el brillo, el contraste, la saturación, el sepia, el blanco y negro, el tono, la claridad, la viñeta y el desenfoque suave. Una vista dividida te permite comparar la foto editada con la original antes de descargarla en PNG, JPG o WebP.",
    seoTitle: "Filtros para fotos online: efectos y estilos gratis",
    seoDescription:
      "Aplicar filtros a fotos online gratis. Prueba Vintage, Noir, Cinematográfico y más, ajusta brillo, contraste, saturación y viñeta, y compara antes y después.",
    keywords: [
      "filtros para fotos online",
      "poner filtro a una foto",
      "convertir foto a blanco y negro",
      "filtro vintage para fotos",
      "filtro sepia online",
      "ajustar brillo y contraste online",
      "efecto viñeta",
    ],
    howToSteps: [
      {
        title: "Sube una foto",
        description: "Suelta, elige o pega una imagen JPG, PNG o WebP.",
      },
      {
        title: "Elige un estilo",
        description:
          "Prueba Cinematográfico, Vintage 70, Cyberpunk, Noir sombrío, Atardecer cálido, Frío suave, HDR dramático o Negativo. Original quita todos los efectos.",
      },
      {
        title: "Afina con los controles",
        description:
          "Ajusta el brillo, el contraste, la saturación, el sepia, el blanco y negro, el cambio de tono, la claridad, la viñeta y el enfoque suave hasta que la foto se vea bien.",
      },
      {
        title: "Compara y descarga",
        description: "Usa Comparar con la original para ver el antes y el después, y descarga en PNG, WebP o JPG, o copia la imagen.",
      },
    ],
    features: [
      {
        title: "Ocho estilos con un clic",
        description: "Aspectos listos para usar, desde tonos vintage cálidos hasta un blanco y negro de alto contraste.",
      },
      {
        title: "Nueve controles de ajuste",
        description: "Brillo, contraste y saturación hasta el 200%, además de sepia, blanco y negro, tono, claridad, viñeta y desenfoque.",
      },
      {
        title: "Vista de antes y después",
        description: "Arrastra la línea divisoria sobre la foto para comparar la original con la versión editada, en el ordenador o en pantallas táctiles.",
      },
      {
        title: "Exportación a resolución completa",
        description: "Los efectos se aplican a la foto a tamaño completo al descargarla.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo pongo una foto en blanco y negro?",
        answer:
          "Haz clic en el estilo Noir sombrío para un aspecto de alto contraste, o pon el control Blanco y negro al 100% y ajusta tú el brillo y el contraste.",
      },
      {
        question: "¿Puedo deshacer un filtro?",
        answer:
          "Sí. Haz clic en Restablecer para volver al aspecto original en cualquier momento. Tu archivo original nunca se modifica.",
      },
      {
        question: "¿Aplicar un filtro reduce la resolución?",
        answer:
          "No. La descarga tiene el mismo ancho y alto que tu foto original.",
      },
      {
        question: "¿Qué formato de descarga debo elegir?",
        answer:
          "JPG y WebP se guardan con una calidad del 95% y pesan mucho menos en fotos. PNG conserva cada píxel, pero crea archivos grandes con fotos.",
      },
      {
        question: "¿Puedo usar filtros con fotos HEIC de iPhone?",
        answer:
          "Esta herramienta no abre archivos HEIC. Convierte antes la foto a JPG con el Conversor de imágenes universal y después abre el JPG aquí.",
      },
    ],
  },
  "meme-generator": {
    name: "Generador de memes",
    shortName: "Crear meme",
    tagline: "Haz un meme con tu propia foto o una plantilla, con textos llamativos arriba, en el centro y abajo.",
    intro:
      "El Generador de memes añade los textos clásicos de meme a una imagen. Sube tu propia imagen o empieza con una de las ocho plantillas sencillas incluidas, y escribe los textos superior, central e inferior; las líneas largas se ajustan solas al ancho. Elige la fuente (Impact por defecto), el tamaño, los colores del texto y del contorno, la alineación y las mayúsculas, y descarga el meme en PNG, JPG o WebP sin ninguna marca de agua.",
    seoTitle: "Generador de memes: pon texto a cualquier imagen",
    seoDescription:
      "Crear memes online gratis. Añade textos arriba, en el centro y abajo a tu foto o a una plantilla, elige fuente, tamaño y contorno. Sin marca de agua.",
    keywords: [
      "generador de memes",
      "crear memes",
      "hacer un meme",
      "poner texto de meme a una imagen",
      "meme con fuente impact",
      "generador de memes sin marca de agua",
      "hacer meme con mi foto",
    ],
    howToSteps: [
      {
        title: "Elige una imagen",
        description: "Sube o pega una imagen JPG, PNG o WebP, o haz clic en una de las plantillas rápidas.",
      },
      {
        title: "Escribe los textos",
        description: "Escribe los textos superior e inferior, y añade un texto central si lo necesitas.",
      },
      {
        title: "Dale estilo al texto",
        description: "Elige la fuente, el tamaño, el color del texto, el color y el grosor del contorno, la alineación y si quieres usar mayúsculas.",
      },
      {
        title: "Descarga o copia",
        description: "Descarga el meme en PNG, WebP o JPG, o cópialo al portapapeles para pegarlo en un chat.",
      },
    ],
    features: [
      {
        title: "Tres zonas de texto",
        description: "Textos superior, central e inferior, con ajuste automático de línea para textos largos.",
      },
      {
        title: "Estilo clásico de meme",
        description: "Texto Impact blanco con contorno negro por defecto, además de las fuentes Arial, Comic Sans, Montserrat y Times.",
      },
      {
        title: "El texto se adapta a la imagen",
        description: "El tamaño de fuente depende del alto de la imagen, así que los textos se ven igual en imágenes pequeñas y grandes.",
      },
      {
        title: "Sin marca de agua",
        description: "Tu meme se guarda tal como lo ves, sin ningún logotipo añadido.",
      },
    ],
    faqs: [
      {
        question: "¿El meme lleva marca de agua?",
        answer: "No. La imagen descargada solo contiene tu imagen y tus textos.",
      },
      {
        question: "¿Qué fuente suelen usar los memes?",
        answer:
          "El estilo clásico de meme es Impact en blanco con contorno negro, que aquí viene por defecto. Si una fuente no está instalada en tu dispositivo, el navegador usa una parecida.",
      },
      {
        question: "¿Puedo usar mi propia imagen?",
        answer: "Sí. Sube una imagen JPG, PNG o WebP, o pégala desde el portapapeles con Ctrl+V.",
      },
      {
        question: "Mi texto tapa demasiado la imagen. ¿Qué puedo hacer?",
        answer:
          "Reduce el tamaño de fuente o pasa parte del texto al texto central o inferior. Los textos largos se reparten solos en varias líneas.",
      },
      {
        question: "¿Puedo hacer memes en el teléfono?",
        answer:
          "Sí. El generador de memes funciona en los navegadores móviles; escribe tus textos y usa el botón de descarga para guardar la imagen.",
      },
    ],
  },
  "split-image": {
    name: "Dividir imagen en cuadrícula",
    shortName: "Dividir imagen",
    tagline: "Corta una imagen en una cuadrícula de partes, como una cuadrícula 3×3 de Instagram o un carrusel panorámico, y descarga un ZIP.",
    intro:
      "Dividir imagen en cuadrícula reparte una imagen en filas y columnas de archivos de imagen independientes. Usa el valor Cuadrícula 3×3 de Instagram para un perfil en cuadrícula, Panorámica 3×1 o Carrusel 2×1 para publicaciones que se deslizan, 2×2 para cuatro partes iguales, o define tu propia cuadrícula de hasta 12 filas y 12 columnas. Todas las partes se descargan juntas como archivos PNG numerados en un ZIP, o puedes hacer clic en una sola parte para guardar solo esa.",
    seoTitle: "Dividir imagen en cuadrícula: Instagram 3×3 y panorámica",
    seoDescription:
      "Dividir una imagen en cuadrícula gratis. Crea una cuadrícula 3x3 para Instagram, un carrusel panorámico o una cuadrícula de hasta 12x12 en un ZIP.",
    keywords: [
      "dividir imagen en cuadrícula",
      "dividir imagen",
      "cuadrícula para instagram",
      "dividir panorámica para carrusel de instagram",
      "cortar imagen en partes",
      "foto en cuadrícula 3x3",
      "dividir imagen en trozos",
    ],
    howToSteps: [
      {
        title: "Sube tu imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG o WebP.",
      },
      {
        title: "Elige la cuadrícula",
        description:
          "Elige Cuadrícula 3×3 de Instagram, Panorámica 3×1, Carrusel 2×1 o Cuatro cuadrados (2×2), o escribe tu propio número de filas y columnas.",
      },
      {
        title: "Revisa la vista previa",
        description: "La vista previa muestra por dónde se cortará la imagen y el número de cada parte.",
      },
      {
        title: "Descarga las partes",
        description: "Haz clic en Descargar todas las partes (ZIP), o haz clic en una sola parte de la vista previa para descargar solo esa.",
      },
    ],
    features: [
      {
        title: "Valores para redes sociales",
        description: "Un clic para una cuadrícula de perfil 3×3, un carrusel panorámico de 3 o 2 diapositivas o una división 2×2.",
      },
      {
        title: "Cuadrículas personalizadas",
        description: "Cualquier combinación de 1 a 12 filas y de 1 a 12 columnas, hasta 144 partes.",
      },
      {
        title: "Partes numeradas",
        description: "Los archivos se llaman tile_01, tile_02, etc., de izquierda a derecha y de arriba abajo.",
      },
      {
        title: "Sin pérdida de calidad",
        description: "Las partes se cortan de la imagen a resolución completa y se guardan como archivos PNG sin pérdida.",
      },
    ],
    faqs: [
      {
        question: "¿En qué orden debo publicar las partes en Instagram?",
        answer:
          "Las partes se numeran de izquierda a derecha y de arriba abajo, empezando por tile_01. Instagram muestra primero la publicación más reciente, así que sube primero la última parte (tile_09 en una cuadrícula 3×3) y termina con tile_01.",
      },
      {
        question: "¿Qué imagen debo usar para una cuadrícula 3×3?",
        answer:
          "Para partes cuadradas, empieza con una imagen cuadrada; recórtala antes a 1:1 si hace falta. Instagram puede mostrar las miniaturas del perfil con otro recorte, así que revisa el resultado después de publicar.",
      },
      {
        question: "¿Cómo divido una panorámica para una publicación en carrusel?",
        answer:
          "Elige Panorámica 3×1 para tres diapositivas o Carrusel 2×1 para dos. Para diapositivas cuadradas, la imagen debe ser tres veces (o dos veces) más ancha que alta.",
      },
      {
        question: "¿Todas las partes tienen exactamente el mismo tamaño?",
        answer:
          "Si el ancho o el alto no se pueden dividir en partes iguales, la última columna o fila recibe los píxeles sobrantes, así que puede medir uno o dos píxeles más.",
      },
      {
        question: "¿Dividir la imagen reduce su calidad?",
        answer: "No. Cada parte se corta de los píxeles originales y se guarda en PNG, que es sin pérdida.",
      },
    ],
  },
  "censor-image": {
    name: "Censurar imagen con desenfoque o pixelado",
    shortName: "Censurar foto",
    tagline: "Oculta caras, matrículas, nombres o números en una foto con una barra negra, pixelado o desenfoque.",
    intro:
      "Censurar imagen oculta datos privados de una foto antes de compartirla. Dibuja rectángulos u óvalos sobre caras, matrículas, direcciones o números de cuenta, y elige para cada zona una barra negra, pixelado o desenfoque. Las zonas desenfocadas se colocan sobre una capa con un pixelado grueso, así que los detalles originales no se transparentan por los bordes.",
    seoTitle: "Pixelar o desenfocar imagen: censura caras y texto",
    seoDescription:
      "Censurar imágenes online gratis. Desenfoca, pixela o tapa con negro caras, matrículas y textos privados con rectángulos u óvalos. No se sube nada.",
    keywords: [
      "desenfocar imagen online",
      "pixelar imagen",
      "censurar foto",
      "difuminar cara en una foto",
      "tapar datos en una imagen",
      "tachar texto en una captura de pantalla",
      "difuminar matrícula",
    ],
    howToSteps: [
      {
        title: "Sube la imagen",
        description: "Suelta, elige o pega una imagen JPG, PNG o WebP, como una foto o una captura de pantalla.",
      },
      {
        title: "Elige forma y método",
        description:
          "Selecciona Rectángulo u Óvalo, y luego Pixelar, Desenfocar o Barra negra. Para pixelar y desenfocar, ajusta la intensidad de 4 a 45.",
      },
      {
        title: "Dibuja sobre los datos privados",
        description: "Arrastra sobre cada zona que quieras ocultar. Usa Deshacer para quitar la última zona o Quitar todas las zonas para empezar de nuevo.",
      },
      {
        title: "Descarga la imagen censurada",
        description: "Descárgala en PNG, WebP o JPG, o cópiala al portapapeles.",
      },
    ],
    features: [
      {
        title: "Tres métodos para ocultar",
        description: "Recuadros negros sólidos, pixelado tipo mosaico o desenfoque sobre una base pixelada.",
      },
      {
        title: "Rectángulos y óvalos",
        description: "Usa óvalos para las caras y rectángulos para textos, matrículas y números.",
      },
      {
        title: "Combina métodos en una imagen",
        description: "Cada zona conserva el método y la intensidad con que se dibujó, así que puedes tapar un nombre con negro y desenfocar una cara.",
      },
      {
        title: "Igual de eficaz en fotos grandes",
        description: "La intensidad se adapta a la resolución de la imagen, así que las fotos de alta resolución quedan igual de ocultas.",
      },
      {
        title: "Deshacer y borrar",
        description: "Quita la última zona o todas las zonas sin volver a cargar la foto.",
      },
    ],
    faqs: [
      {
        question: "¿Qué método es más seguro para ocultar texto?",
        answer:
          "La barra negra sustituye los píxeles por completo y es la opción más segura para contraseñas, números de cuenta y documentos. Un pixelado o desenfoque intenso también funciona, pero a veces se puede adivinar un texto pequeño con ajustes débiles.",
      },
      {
        question: "¿Alguien puede quitar el desenfoque en el archivo descargado?",
        answer:
          "Los píxeles de cada zona se sustituyen en la imagen descargada; no se ocultan en una capa aparte. La foto original de tu dispositivo no cambia, así que comparte solo la copia censurada.",
      },
      {
        question: "¿También se eliminan los datos EXIF?",
        answer:
          "Sí. La descarga se crea a partir de los píxeles del lienzo, así que no incluye los datos de la cámara ni la ubicación GPS del original.",
      },
      {
        question: "¿Puedo usar distintos efectos en la misma imagen?",
        answer:
          "Sí. Cambia el método o la intensidad antes de dibujar la siguiente zona. Las zonas que ya dibujaste mantienen sus propios ajustes.",
      },
      {
        question: "¿Funciona en teléfonos?",
        answer: "Sí. Arrastra el dedo sobre la zona que quieras ocultar para dibujar un rectángulo o un óvalo.",
      },
    ],
  },
  "remove-background": {
    name: "Quitar fondo",
    shortName: "Quitar fondo",
    tagline: "Quita el fondo de una foto con un modelo de IA que funciona en tu dispositivo y guarda un PNG transparente.",
    intro:
      "Quitar fondo recorta el sujeto principal de una foto y elimina todo lo que hay detrás. Usa un modelo de IA que funciona en tu navegador, así que tus imágenes nunca salen de tu dispositivo. El modo Personas usa un modelo pequeño y rápido que funciona bien en teléfonos y es ideal para retratos, mientras que el modo Objetos (HQ) usa un modelo más grande para productos, mascotas y otros objetos. Guarda el resultado como PNG transparente, o ponlo sobre un color sólido y guárdalo en PNG o JPG.",
    seoTitle: "Quitar fondo de imagen gratis, en tu dispositivo",
    seoDescription:
      "Quitar fondo de imagen gratis con IA que funciona en tu navegador. Obtén un PNG transparente o un fondo de color sólido. Tus fotos no salen de tu dispositivo.",
    keywords: [
      "quitar fondo de imagen",
      "eliminar fondo de foto",
      "quitar fondo de foto gratis",
      "hacer fondo transparente",
      "poner fondo transparente a una imagen",
      "recortar fondo de imagen",
      "quitar fondo online",
    ],
    howToSteps: [
      {
        title: "Sube una foto",
        description: "Suelta, elige o pega una imagen JPG, PNG o WebP.",
      },
      {
        title: "Elige un modo",
        description:
          "Personas está seleccionado por defecto y es ideal para fotos de gente. Elige Objetos (HQ) para productos, mascotas y otros sujetos, mejor en un navegador de escritorio.",
      },
      {
        title: "Espera el resultado",
        description:
          "La primera vez, el modelo se descarga en tu navegador; después se carga desde la caché del navegador. Luego el fondo se quita en tu dispositivo.",
      },
      {
        title: "Elige el fondo y descarga",
        description: "Déjalo transparente y guarda en PNG, o elige un color sólido y guarda en PNG o JPG.",
      },
    ],
    features: [
      {
        title: "IA que funciona en tu dispositivo",
        description: "El modelo se ejecuta dentro de tu navegador, así que tus fotos nunca se suben a un servidor.",
      },
      {
        title: "Dos modelos",
        description: "Un modelo Personas pequeño y rápido para gente, y un modelo Objetos (HQ) más grande para productos, mascotas y objetos.",
      },
      {
        title: "Se descarga una vez",
        description: "Tu navegador guarda el modelo tras el primer uso, así que las siguientes imágenes empiezan mucho más rápido.",
      },
      {
        title: "Fondo transparente o de color",
        description: "Guarda un PNG transparente o coloca el sujeto sobre el color sólido que elijas.",
      },
    ],
    faqs: [
      {
        question: "¿Se suben mis fotos a un servidor?",
        answer:
          "No. Solo se descarga el modelo de IA en tu navegador. Tus fotos se procesan en tu dispositivo y no se envían a ningún sitio.",
      },
      {
        question: "¿Por qué el primer uso tarda más?",
        answer:
          "Primero hay que descargar el modelo: unos 7 a 13 MB para el modo Personas y unos 115 MB para el modo Objetos (HQ). Tu navegador lo guarda, así que los siguientes usos empiezan mucho más rápido.",
      },
      {
        question: "¿Qué modo debo usar?",
        answer:
          "Usa Personas para fotos de gente; es rápido y funciona en teléfonos. Usa Objetos (HQ) para productos, mascotas y otros sujetos, sobre todo cuando los bordes importan.",
      },
      {
        question: "¿Funciona en teléfonos iPhone y Android?",
        answer:
          "Sí, el modo Personas está pensado para funcionar en teléfonos. El modo Objetos (HQ) es mucho más grande y funciona mejor en un navegador de escritorio compatible con WebGPU; en un teléfono puede ir lento o quedarse sin memoria.",
      },
      {
        question: "¿Puedo poner un nuevo color de fondo detrás del sujeto?",
        answer:
          "Sí. Elige un color sólido y guarda en PNG o JPG. Para un fondo transparente, guarda en PNG.",
      },
      {
        question: "¿Por qué algunos bordes no quedan perfectos?",
        answer:
          "El pelo fino, el pelaje, el cristal y los sujetos con colores parecidos al fondo son difíciles para cualquier modelo. Prueba el modo Objetos (HQ) o usa una foto con un contraste claro entre el sujeto y el fondo.",
      },
    ],
  },
};
