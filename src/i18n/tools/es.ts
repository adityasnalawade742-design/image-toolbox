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
      "Eliminar metadatos de imagen crea una copia limpia de tu foto sin su información EXIF oculta. Las fotos de móviles y cámaras suelen registrar la ubicación GPS donde se tomaron, el modelo del dispositivo y la fecha y hora. En JPG, PNG y WebP solo se elimina esa información del archivo: la imagen no se vuelve a guardar, así que su calidad y sus colores quedan exactamente iguales. El nuevo tamaño del archivo se muestra antes de descargar.",
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
        title: "Mantén el formato",
        description:
          "Si mantienes el formato original, solo se eliminan los metadatos, sin cambio de calidad. Si cambias de formato, la imagen se vuelve a guardar: para JPG y WebP usa una calidad del 90% al 100%, o elige PNG.",
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
        title: "Sin pérdida de calidad",
        description: "JPG, PNG y WebP conservan sus píxeles exactos y su perfil de color; solo se elimina la información oculta.",
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
          "Los datos EXIF (cámara, ajustes, fecha y GPS), los campos IPTC y XMP como autor o copyright, los comentarios y el texto de PNG. El perfil de color se conserva para que los colores no cambien, y un JPG mantiene su orientación para que no se vea de lado.",
      },
      {
        question: "¿Eliminar los metadatos cambia la calidad de la imagen?",
        answer:
          "No si mantienes el formato: los archivos JPG, PNG y WebP no se vuelven a guardar, así que cada píxel queda igual. Si conviertes a otro formato, o partes de una foto HEIC de iPhone, la imagen se vuelve a guardar, así que elige una calidad alta.",
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
  "svg-to-jpg": {
    name: "SVG a JPG",
    shortName: "SVG → JPG",
    tagline: "Convierte gráficos SVG en imágenes JPG a cualquier escala, con el color de fondo que elijas. La conversión se hace en tu dispositivo.",
    intro: "Los gráficos SVG se ven nítidos a cualquier tamaño, pero muchas apps, redes sociales y formularios de subida solo aceptan imágenes normales. SVG a JPG vuelve a dibujar el SVG a la escala que elijas, de 1x a 8x, y lo guarda como JPG. JPG no admite transparencia, así que las zonas transparentes se rellenan de blanco o del color que elijas. La conversión ocurre en tu navegador, así que el archivo nunca sale de tu dispositivo.",
    seoTitle: "Convertir SVG a JPG gratis y a cualquier tamaño",
    seoDescription: "Convierte gráficos SVG a JPG en tu navegador a escala de 1x a 8x, con el color de fondo que elijas. Gratis y sin subir nada.",
    keywords: [
      "svg a jpg",
      "convertir svg a jpg",
      "svg a jpeg",
      "convertidor svg a jpg",
      "svg a imagen",
    ],
    howToSteps: [
      {
        title: "Añade tu SVG",
        description: "Arrastra, elige o pega un archivo .svg.",
      },
      {
        title: "Elige escala y fondo",
        description: "Elige 1x, 2x, 4x u 8x, y el color que rellena las zonas transparentes.",
      },
      {
        title: "Descarga el JPG",
        description: "Guarda el JPG y úsalo donde quieras.",
      },
    ],
    features: [
      {
        title: "Nítido a cualquier tamaño",
        description: "El SVG se vuelve a dibujar a la escala elegida, así que los bordes se mantienen definidos.",
      },
      {
        title: "Color de fondo a tu elección",
        description: "Las zonas transparentes se rellenan de blanco o de cualquier color.",
      },
      {
        title: "Se abre en todas partes",
        description: "JPG funciona en cualquier app, red social y formulario de subida.",
      },
      {
        title: "Conversión privada",
        description: "El archivo se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿SVG a JPG o SVG a PNG?",
        answer: "Elige PNG para logotipos e iconos, para conservar la transparencia y los colores perfectamente planos. Elige JPG cuando una web o un formulario pida JPG, o para ilustraciones con degradados.",
      },
      {
        question: "¿Qué escala uso?",
        answer: "2x va bien para la mayoría de las pantallas. Usa 4x u 8x para imprimir o para pantallas grandes.",
      },
      {
        question: "¿Por qué mi SVG se ve diferente?",
        answer: "Los SVG que cargan fuentes o imágenes desde internet pueden no dibujar esas partes. Convierte antes el texto en contornos en tu herramienta de diseño.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer: "No. Tu navegador dibuja el SVG en tu dispositivo.",
      },
    ],
  },
  "svg-to-webp": {
    name: "SVG a WebP",
    shortName: "SVG → WebP",
    tagline: "Convierte gráficos SVG en imágenes WebP ligeras a cualquier escala, con transparencia incluida. La conversión se hace en tu dispositivo.",
    intro: "A veces una web, una app o un editor de emails necesita una imagen normal en lugar de un SVG. SVG a WebP vuelve a dibujar el SVG a la escala que elijas, de 1x a 8x, y lo guarda como WebP, un formato ligero que muestran todos los navegadores actuales y que conserva la transparencia. La conversión ocurre en tu navegador, así que el archivo nunca sale de tu dispositivo.",
    seoTitle: "Convertir SVG a WebP: archivos ligeros con transparencia",
    seoDescription: "Convierte gráficos SVG a WebP en tu navegador a escala de 1x a 8x, conservando la transparencia. Gratis y sin subir nada.",
    keywords: [
      "svg a webp",
      "convertir svg a webp",
      "convertidor svg a webp",
      "svg a imagen",
      "webp transparente",
    ],
    howToSteps: [
      {
        title: "Añade tu SVG",
        description: "Arrastra, elige o pega un archivo .svg.",
      },
      {
        title: "Elige escala y calidad",
        description: "Elige 1x, 2x, 4x u 8x, y la calidad del WebP.",
      },
      {
        title: "Descarga el WebP",
        description: "Guarda el WebP y úsalo en tu web o en tu app.",
      },
    ],
    features: [
      {
        title: "Nítido a cualquier tamaño",
        description: "El SVG se vuelve a dibujar a la escala elegida, así que los bordes se mantienen definidos.",
      },
      {
        title: "Conserva la transparencia",
        description: "Las zonas transparentes siguen siéndolo en el WebP.",
      },
      {
        title: "Archivos ligeros",
        description: "WebP suele pesar mucho menos que PNG para la misma imagen.",
      },
      {
        title: "Conversión privada",
        description: "El archivo se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué no usar directamente el SVG?",
        answer: "Usa el SVG donde se admita. Usa WebP donde solo se permitan imágenes normales, como algunas apps, editores de emails y subidas de imágenes.",
      },
      {
        question: "¿Qué escala uso?",
        answer: "2x va bien para la mayoría de las pantallas. Usa 4x u 8x para pantallas grandes.",
      },
      {
        question: "¿Por qué mi SVG se ve diferente?",
        answer: "Los SVG que cargan fuentes o imágenes desde internet pueden no dibujar esas partes. Convierte antes el texto en contornos en tu herramienta de diseño.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer: "No. Tu navegador dibuja el SVG en tu dispositivo.",
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
    tagline: "Quita el fondo de una foto con IA que funciona en tu dispositivo y guarda un PNG transparente.",
    intro:
      "Quitar fondo recorta el sujeto principal de una foto y elimina todo lo que hay detrás. Usa un modelo de IA que funciona en tu navegador, así que tus imágenes nunca salen de tu dispositivo. Elige Rápido, un modelo más pequeño, ágil e ideal para fotos de personas, o Máxima calidad, un modelo más grande con mejores resultados en cualquier sujeto, incluidos productos, mascotas y objetos. Guarda el resultado como PNG transparente o ponlo sobre un color sólido.",
    seoTitle: "Quitar fondo de imagen gratis, en tu dispositivo",
    seoDescription:
      "Quitar fondo de imagen gratis con IA en tu navegador: elige modelo rápido o máxima calidad y guarda un PNG transparente. Tus fotos no salen de tu dispositivo.",
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
        title: "Elige un modelo",
        description:
          "Rápido viene seleccionado por defecto y funciona bien con fotos de personas. Elige Máxima calidad para productos, mascotas, objetos o siempre que quieras los bordes más limpios.",
      },
      {
        title: "Descarga el modelo una vez",
        description:
          "La primera vez que usas un modelo, tu navegador lo descarga: unos 16 MB para Rápido y unos 100 MB para Máxima calidad, que pregunta antes de empezar. Después queda guardado en tu navegador.",
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
        title: "Dos modelos para elegir",
        description: "Rápido es ágil e ideal para personas. Máxima calidad es más grande y más lento, pero da mejores resultados con cualquier sujeto.",
      },
      {
        title: "Se descarga una vez",
        description: "Cada modelo se guarda en tu navegador tras su primer uso, y la herramienta muestra cuáles ya están descargados.",
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
        question: "¿Qué diferencia hay entre Rápido y Máxima calidad?",
        answer:
          "Rápido usa un modelo más pequeño (unos 16 MB) y tarda unos 5 segundos por foto; funciona bien con personas, pero puede pasar por alto partes de objetos. Máxima calidad usa un modelo más grande (unos 100 MB) y tarda unos 15–30 segundos, con mejores resultados en productos, mascotas, objetos y personas.",
      },
      {
        question: "¿Por qué el primer uso tarda más?",
        answer:
          "Primero hay que descargar el modelo. Máxima calidad pregunta antes de descargar su modelo de 100 MB. Después del primer uso, tu navegador guarda el modelo, así que las siguientes fotos empiezan mucho más rápido.",
      },
      {
        question: "¿Funciona en teléfonos iPhone y Android?",
        answer:
          "Sí. Rápido es la mejor opción en teléfonos. Máxima calidad también funciona en teléfonos, pero su descarga más grande y su procesamiento más largo se notan más ahí, sobre todo con datos móviles.",
      },
      {
        question: "¿Puedo poner un nuevo color de fondo detrás del sujeto?",
        answer:
          "Sí. Elige un color sólido y guarda en PNG o JPG. Para un fondo transparente, guarda en PNG.",
      },
      {
        question: "¿Por qué algunos bordes no quedan perfectos?",
        answer:
          "El pelo fino, el pelaje, el cristal y los sujetos con colores parecidos al fondo son difíciles para cualquier modelo. Prueba Máxima calidad o usa una foto con un contraste claro entre el sujeto y el fondo.",
      },
    ],
  },
  "compress-image-to-kb": {
    name: "Comprimir imagen a KB",
    shortName: "Comprimir a KB",
    tagline: "Haz que una foto pese menos que un tamaño exacto, como 20 KB, 50 KB o 100 KB, para formularios online. Funciona en tu dispositivo.",
    intro:
      "Muchos formularios de solicitud y de subida solo aceptan fotos por debajo de un tamaño fijo, como 20 KB o 50 KB, y una foto normal del móvil pesa muchas veces más. Comprimir imagen a KB hace que el archivo pese menos que el límite que elijas. Prueba niveles de calidad hasta encontrar el mejor que cabe, y solo reduce las dimensiones de la foto cuando incluso la calidad más baja seguiría pesando demasiado. También puedes fijar dimensiones exactas, como una foto de pasaporte de 35 × 45 mm, y la foto se recorta desde el centro para llenarlas. Todo ocurre en tu navegador, así que las fotos tuyas y de tus documentos nunca se suben.",
    seoTitle: "Comprimir imagen a 20 KB, 50 KB o 100 KB gratis",
    seoDescription:
      "Comprimir imagen a 20 KB, 50 KB, 100 KB o cualquier tamaño para formularios online. Mantiene la mejor calidad que cabe. Gratis, privado y sin subir nada.",
    keywords: [
      "comprimir imagen a 20 kb",
      "comprimir imagen a 50 kb",
      "comprimir imagen a 100 kb",
      "reducir tamaño de imagen en kb",
      "reducir peso de foto en kb",
      "comprimir jpg a 200 kb",
      "foto de pasaporte en kb",
    ],
    howToSteps: [
      {
        title: "Añade tu foto",
        description: "Arrastra, elige o pega una foto JPG, PNG, WebP o HEIC de iPhone.",
      },
      {
        title: "Elige el límite de tamaño",
        description: "Elige de 10 KB a 1 MB, o escribe el límite exacto que pide tu formulario.",
      },
      {
        title: "Ajusta las dimensiones si hace falta",
        description: "Mantén el tamaño original, o elige una foto de pasaporte, un cuadrado de 2 × 2 pulgadas o un ancho y un alto personalizados.",
      },
      {
        title: "Descarga",
        description: "Comprueba que el resultado indica que está por debajo del límite y descarga el JPG o el WebP.",
      },
    ],
    features: [
      {
        title: "Siempre por debajo del límite",
        description: "La herramienta mide el archivo real que crea, así que la descarga pesa menos que el tamaño que elegiste, no solo algo parecido.",
      },
      {
        title: "La mejor calidad que cabe",
        description: "Mantiene la calidad más alta que cabe y solo reduce las dimensiones cuando no queda otra opción.",
      },
      {
        title: "Pasaporte y tamaños personalizados",
        description: "Ajustes predefinidos para fotos de pasaporte de 35 × 45 mm y fotos de 2 × 2 pulgadas, o cualquier ancho y alto que necesites.",
      },
      {
        title: "Privado por diseño",
        description: "Tu foto se procesa en tu navegador y nunca se sube, algo importante con fotos de documentos de identidad y de solicitudes.",
      },
    ],
    faqs: [
      {
        question: "¿El archivo quedará de verdad por debajo del límite?",
        answer:
          "Sí. La herramienta comprueba el tamaño del archivo real que crea y solo muestra un mensaje de éxito cuando está por debajo de tu límite. Cuenta 1 KB como 1024 bytes, como hacen Windows y la mayoría de los formularios, así que el archivo también queda por debajo del límite si un formulario cuenta 1 KB como 1000 bytes.",
      },
      {
        question: "¿Por qué cambiaron las dimensiones de mi foto?",
        answer:
          "Con Mantener tamaño seleccionado, la herramienta primero baja la calidad. Si el archivo sigue pesando demasiado con la calidad más baja, reduce el ancho y el alto paso a paso hasta que cabe. El mensaje del resultado te avisa cuando ha pasado esto y muestra el nuevo tamaño.",
      },
      {
        question: "¿Por qué no llega a mi límite?",
        answer:
          "Cuando fijas dimensiones exactas, la herramienta no puede hacer la foto más pequeña, así que puede ser imposible llegar a un límite muy bajo con dimensiones grandes. Sube el límite, elige dimensiones más pequeñas o selecciona Mantener tamaño.",
      },
      {
        question: "¿Qué tamaño y formato necesita mi formulario?",
        answer:
          "Cada formulario fija sus propias reglas. Lee sus instrucciones para saber el tamaño máximo de archivo, el ancho y el alto en píxeles o milímetros y el formato, y pon los mismos valores aquí. JPG se acepta casi en todas partes.",
      },
      {
        question: "¿Comprimir reduce la calidad?",
        answer:
          "Siempre se pierde algo de calidad cuando una foto se hace mucho más pequeña, pero la herramienta conserva tanta como permite el límite. Para caras, un límite de 30 KB o más suele verse limpio con dimensiones de foto de pasaporte.",
      },
      {
        question: "¿Se sube mi foto?",
        answer:
          "No. Tu navegador comprime la foto en tu dispositivo. No se envía nada a ningún servidor, así que es seguro usarlo con fotos de documentos de identidad y otros documentos.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC a JPG",
    shortName: "HEIC → JPG",
    tagline: "Convierte fotos HEIC del iPhone a JPG para que se abran en cualquier ordenador, móvil o web. La conversión se hace en tu dispositivo.",
    intro:
      "Los iPhone y muchos móviles recientes guardan las fotos en HEIC, un formato que mantiene buena calidad en archivos más pequeños. Sin embargo, muchos ordenadores con Windows, apps antiguas y formularios de subida no pueden abrirlo. HEIC a JPG convierte la foto en un JPG estándar que funciona casi en todas partes. La foto se decodifica y se convierte dentro de tu navegador, así que nunca sale de tu dispositivo, y el JPG convertido no incluye los datos de ubicación, cámara y fecha guardados en el original.",
    seoTitle: "Convertir HEIC a JPG gratis, sin subir archivos",
    seoDescription:
      "Convertir HEIC a JPG en tu navegador: pasa las fotos del iPhone a JPG en Windows, Mac, Android y iPhone. Gratis, privado y sin subir nada.",
    keywords: [
      "heic a jpg",
      "convertir heic a jpg",
      "pasar foto de iphone a jpg",
      "convertidor heic",
      "heic a jpeg",
      "abrir heic en windows",
    ],
    howToSteps: [
      {
        title: "Añade tu foto HEIC",
        description: "Arrastra, elige o pega un archivo .heic o .heif de tu iPhone o tu ordenador.",
      },
      {
        title: "Espera a la vista previa",
        description: "Tu navegador decodifica la foto. Las fotos grandes pueden tardar unos segundos.",
      },
      {
        title: "Descarga el JPG",
        description: "Guarda la foto convertida. Se abre en cualquier visor de fotos, navegador o formulario de subida.",
      },
    ],
    features: [
      {
        title: "Funciona en todas partes",
        description: "JPG se abre en Windows, Mac y Android, en cualquier navegador y en casi cualquier web.",
      },
      {
        title: "Conversión privada",
        description: "La foto se convierte en tu dispositivo y nunca se sube.",
      },
      {
        title: "Sin datos de ubicación",
        description: "La ubicación GPS, los datos de la cámara y las fechas del original no se copian en el JPG.",
      },
      {
        title: "Sigue editando",
        description: "Envía la foto convertida directamente para recortarla, cambiar su tamaño o comprimirla.",
      },
    ],
    faqs: [
      {
        question: "¿Qué es un archivo HEIC?",
        answer:
          "HEIC (High Efficiency Image Container) es el formato de foto que los iPhone usan por defecto desde iOS 11. Guarda las fotos en más o menos la mitad de espacio que un JPG con una calidad similar, pero muchos ordenadores y webs todavía no pueden abrirlo.",
      },
      {
        question: "¿El JPG se verá igual?",
        answer:
          "Sí, para verla con normalidad. El JPG se guarda en alta calidad. Los archivos JPG suelen pesar más que el HEIC original, porque la compresión JPG es menos eficiente.",
      },
      {
        question: "¿Puedo convertir varias fotos HEIC a la vez?",
        answer:
          "Esta herramienta convierte una foto cada vez. Si un solo archivo HEIC contiene varias imágenes, como una ráfaga, se convierte la primera.",
      },
      {
        question: "¿Cómo hago que mi iPhone haga las fotos en JPG?",
        answer:
          "En el iPhone, abre Ajustes, luego Cámara, luego Formatos, y elige Más compatible. A partir de entonces, las fotos nuevas se guardan en JPG. Las que ya hiciste se quedan en HEIC.",
      },
      {
        question: "¿Se sube mi foto?",
        answer: "No. El decodificador HEIC funciona en tu navegador, así que la foto se queda en tu dispositivo.",
      },
    ],
  },
  "heic-to-png": {
    name: "HEIC a PNG",
    shortName: "HEIC → PNG",
    tagline: "Convierte fotos HEIC del iPhone a PNG sin pérdida para editar y diseñar. La conversión se hace en tu dispositivo.",
    intro:
      "HEIC es el formato de foto que los iPhone usan por defecto, y muchas herramientas de diseño, apps antiguas y webs no pueden abrirlo. HEIC a PNG convierte la foto a PNG, un formato sin pérdida, así que no se pierde más detalle cuando la editas y la vuelves a guardar. Por eso es una buena opción para fotos que vas a retocar, meter en un diseño o recortar. La conversión se hace dentro de tu navegador, así que la foto nunca sale de tu dispositivo. Para compartir o subir, HEIC a JPG da archivos mucho más pequeños.",
    seoTitle: "Convertir HEIC a PNG gratis y sin pérdida",
    seoDescription:
      "Convertir HEIC a PNG en tu navegador: pasa las fotos del iPhone a PNG sin pérdida para editar y diseñar. Gratis, privado y sin subir nada.",
    keywords: [
      "heic a png",
      "convertir heic a png",
      "pasar foto de iphone a png",
      "convertidor de heic a png",
      "heif a png",
    ],
    howToSteps: [
      {
        title: "Añade tu foto HEIC",
        description: "Arrastra, elige o pega un archivo .heic o .heif.",
      },
      {
        title: "Espera a la vista previa",
        description: "Tu navegador decodifica la foto en tu dispositivo.",
      },
      {
        title: "Descarga el PNG",
        description: "Guarda el PNG sin pérdida y ábrelo en cualquier editor o herramienta de diseño.",
      },
    ],
    features: [
      {
        title: "Resultado sin pérdida",
        description: "PNG conserva cada píxel de la foto decodificada, así que editarla varias veces no añade artefactos de compresión.",
      },
      {
        title: "Se abre en cualquier editor",
        description: "PNG funciona en Photoshop, GIMP, Figma, Canva, Office y cualquier navegador.",
      },
      {
        title: "Conversión privada",
        description: "La foto se convierte en tu dispositivo y nunca se sube.",
      },
      {
        title: "Sin datos de ubicación",
        description: "La ubicación GPS y los datos de la cámara del original no se copian en el PNG.",
      },
    ],
    faqs: [
      {
        question: "PNG o JPG: ¿cuál elijo?",
        answer:
          "Elige PNG cuando vayas a seguir editando la foto o necesites píxeles exactos. Elige JPG para compartir, enviar por correo y formularios de subida, porque los PNG de fotos pesan varias veces más.",
      },
      {
        question: "¿Por qué el PNG pesa tanto más que el HEIC?",
        answer:
          "HEIC usa una compresión con pérdida muy eficiente. PNG es sin pérdida, así que guarda muchos más datos. Una foto de iPhone de 2 MB puede convertirse en un PNG de 10 MB o más.",
      },
      {
        question: "¿El PNG tiene fondo transparente?",
        answer:
          "No. Las fotos no tienen transparencia, así que el PNG es totalmente opaco. Para quitar el fondo, abre el resultado en Quitar fondo.",
      },
      {
        question: "¿Se sube mi foto?",
        answer: "No. El decodificador HEIC funciona en tu navegador, así que la foto se queda en tu dispositivo.",
      },
    ],
  },
  "heic-to-webp": {
    name: "HEIC a WebP",
    shortName: "HEIC → WebP",
    tagline: "Convierte fotos HEIC y HEIF del iPhone a WebP, un formato web ligero que se abre en cualquier navegador. La conversión se hace en tu dispositivo.",
    intro: "HEIC (también llamado HEIF) es el formato de foto que usan por defecto los iPhone y muchos móviles Android, pero la mayoría de los sitios web, gestores de contenido y apps de Windows no pueden mostrarlo. HEIC a WebP convierte la foto a WebP, un formato moderno compatible con todos los navegadores actuales que mantiene los archivos pequeños, a menudo más que un JPG con la misma calidad. Por eso es una buena opción para fotos que vas a publicar en una web, un blog o una tienda online. La conversión ocurre en tu navegador, así que la foto nunca sale de tu dispositivo.",
    seoTitle: "Convertir HEIC a WebP gratis y en privado, también HEIF",
    seoDescription: "Convierte fotos HEIC y HEIF del iPhone a WebP en tu navegador. Archivos ligeros para webs, calidad ajustable y nada se sube a ningún servidor.",
    keywords: [
      "heic a webp",
      "heif a webp",
      "convertir heic a webp",
      "foto de iphone a webp",
      "convertidor heic a webp",
    ],
    howToSteps: [
      {
        title: "Añade tu foto HEIC",
        description: "Arrastra, elige o pega un archivo .heic o .heif.",
      },
      {
        title: "Elige la calidad",
        description: "Un 85% va bien para la mayoría de las fotos. Bájala para archivos más ligeros o súbela para más detalle.",
      },
      {
        title: "Descarga el WebP",
        description: "Guarda el archivo WebP y súbelo a tu web o compártelo.",
      },
    ],
    features: [
      {
        title: "Archivos ligeros",
        description: "Los WebP suelen pesar menos que un JPG con la misma calidad visual, así que las páginas cargan más rápido.",
      },
      {
        title: "Funciona en todos los navegadores",
        description: "Chrome, Safari, Firefox y Edge muestran WebP, igual que WordPress, Shopify y la mayoría de los creadores de webs.",
      },
      {
        title: "Conversión privada",
        description: "La foto se convierte en tu dispositivo y nunca se sube.",
      },
      {
        title: "Sin datos de ubicación",
        description: "La ubicación GPS y los datos de la cámara del original no se copian al WebP.",
      },
    ],
    faqs: [
      {
        question: "¿HEIF es lo mismo que HEIC?",
        answer: "En fotos, sí. HEIF es el formato de archivo y HEIC es el nombre y la extensión que usa Apple para las fotos guardadas en él. Aquí funcionan tanto los archivos .heic como los .heif.",
      },
      {
        question: "WebP o JPG: ¿cuál elijo?",
        answer: "Elige WebP para webs y tiendas online, donde los archivos ligeros cargan más rápido. Elige JPG si la foto va por correo, a una imprenta o a apps y formularios antiguos que no aceptan WebP.",
      },
      {
        question: "¿Qué calidad debo usar?",
        answer: "Con un 85% la mayoría de las fotos se ven igual que el original. Usa un 90% o más para fotos con mucho detalle, o entre un 70% y un 80% si lo más importante es el peso.",
      },
      {
        question: "¿Se sube mi foto?",
        answer: "No. El decodificador HEIC funciona en tu navegador, así que la foto se queda en tu dispositivo.",
      },
    ],
  },
  "avif-to-jpg": {
    name: "AVIF a JPG",
    shortName: "AVIF → JPG",
    tagline: "Convierte imágenes AVIF a JPG para que se abran en cualquier app, editor o formulario de subida. La conversión se hace en tu dispositivo.",
    intro: "AVIF es un formato de imagen moderno que ya usan muchas webs porque sus archivos pesan muy poco. Pero cuando guardas una de esas imágenes, los visores de fotos antiguos, Office, muchos editores y gran parte de los formularios de subida no pueden abrirla. AVIF a JPG convierte la imagen a JPG, el formato que funciona en todas partes. Elige la calidad, revisa la vista previa y descárgala. La conversión ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo.",
    seoTitle: "Convertir AVIF a JPG gratis, rápido y en privado",
    seoDescription: "Convierte imágenes AVIF a JPG en tu navegador. Funciona con cualquier app y formulario de subida, calidad ajustable y no se sube nada.",
    keywords: [
      "avif a jpg",
      "convertir avif a jpg",
      "avif a jpeg",
      "convertidor avif",
      "abrir archivo avif",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen AVIF",
        description: "Arrastra, elige o pega un archivo .avif.",
      },
      {
        title: "Elige la calidad",
        description: "Un 85% va bien para la mayoría de las imágenes. Súbela para más detalle o bájala para un archivo más ligero.",
      },
      {
        title: "Descarga el JPG",
        description: "Guarda el JPG y ábrelo, edítalo o súbelo donde quieras.",
      },
    ],
    features: [
      {
        title: "Se abre en todas partes",
        description: "JPG funciona en cualquier visor de fotos, editor, móvil, cliente de correo y formulario de subida.",
      },
      {
        title: "Calidad ajustable",
        description: "Elige el equilibrio entre peso del archivo y detalle antes de descargar.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
      {
        title: "Transparencia resuelta",
        description: "JPG no admite transparencia, así que las zonas transparentes se rellenan con el color que elijas.",
      },
    ],
    faqs: [
      {
        question: "¿Qué es un archivo AVIF?",
        answer: "AVIF es un formato de imagen basado en el códec de vídeo AV1. Genera archivos mucho más pequeños que JPG con la misma calidad, por eso lo usan muchas webs, pero el software antiguo no puede abrirlo.",
      },
      {
        question: "¿El JPG pesará más que el AVIF?",
        answer: "Normalmente, sí. AVIF comprime de forma muy eficiente, así que la misma imagen en JPG suele pesar dos o tres veces más. Es el precio de tener un archivo que cualquier programa puede abrir.",
      },
      {
        question: "¿Por qué mi navegador no abre el AVIF?",
        answer: "Los navegadores muy antiguos no pueden decodificar AVIF. Las versiones actuales de Chrome, Edge, Firefox y Safari (versión 16 o posterior) sí pueden. Si el archivo sigue sin abrirse, puede estar dañado.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. Tu navegador decodifica y convierte la imagen en tu dispositivo.",
      },
    ],
  },
  "avif-to-png": {
    name: "AVIF a PNG",
    shortName: "AVIF → PNG",
    tagline: "Convierte imágenes AVIF a PNG sin pérdida, conservando la transparencia, para editar y diseñar. La conversión se hace en tu dispositivo.",
    intro: "Las imágenes AVIF son ligeras y nítidas, pero muchos editores, herramientas de diseño y apps antiguas no pueden abrirlas. AVIF a PNG convierte la imagen a PNG, un formato sin pérdida que conserva las zonas transparentes, así que es una buena opción para logotipos, gráficos y cualquier cosa que vayas a seguir editando. La conversión ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo. Para fotos que quieras compartir, AVIF a JPG da archivos más pequeños.",
    seoTitle: "Convertir AVIF a PNG gratis y sin pérdida",
    seoDescription: "Convierte imágenes AVIF a PNG sin pérdida en tu navegador, conservando la transparencia. Gratis, privado y sin subir nada.",
    keywords: [
      "avif a png",
      "convertir avif a png",
      "convertidor avif a png",
      "avif a png transparente",
      "abrir archivo avif",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen AVIF",
        description: "Arrastra, elige o pega un archivo .avif.",
      },
      {
        title: "Revisa la vista previa",
        description: "Tu navegador decodifica la imagen en tu dispositivo.",
      },
      {
        title: "Descarga el PNG",
        description: "Guarda el PNG sin pérdida y ábrelo en cualquier editor o herramienta de diseño.",
      },
    ],
    features: [
      {
        title: "Resultado sin pérdida",
        description: "PNG conserva cada píxel de la imagen decodificada, así que editarla y volver a guardarla no añade artefactos.",
      },
      {
        title: "Conserva la transparencia",
        description: "Las zonas transparentes del AVIF siguen siéndolo en el PNG.",
      },
      {
        title: "Se abre en cualquier editor",
        description: "PNG funciona en Photoshop, GIMP, Figma, Canva, Office y cualquier navegador.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué el PNG pesa tanto más que el AVIF?",
        answer: "AVIF usa una compresión con pérdida muy eficiente, mientras que PNG es sin pérdida y guarda muchos más datos. Un PNG puede pesar fácilmente diez veces más que el AVIF.",
      },
      {
        question: "¿El PNG conserva la transparencia?",
        answer: "Sí. Si el AVIF tiene zonas transparentes, siguen siéndolo en el PNG.",
      },
      {
        question: "PNG o JPG: ¿cuál elijo?",
        answer: "Elige PNG para gráficos, transparencia o si vas a seguir editando. Elige JPG para fotos que vas a compartir o subir, porque los archivos pesan mucho menos.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. La conversión se hace en tu navegador, así que la imagen se queda en tu dispositivo.",
      },
    ],
  },
  "jpg-to-avif": {
    name: "JPG a AVIF",
    shortName: "JPG → AVIF",
    tagline: "Convierte fotos JPG a AVIF, el formato web moderno con los archivos más pequeños. La conversión se hace en tu dispositivo.",
    intro: "AVIF genera archivos mucho más pequeños que JPG con la misma calidad visual, a menudo la mitad, así que las páginas cargan más rápido y gastan menos datos. Todos los navegadores actuales pueden mostrarlo. JPG a AVIF convierte tu foto a AVIF con la calidad que elijas, lo que resulta útil para webs, tiendas online y blogs donde cada kilobyte cuenta. La codificación ocurre en tu navegador, así que la foto nunca sale de tu dispositivo. Con fotos grandes puede tardar unos segundos.",
    seoTitle: "Convertir JPG a AVIF gratis: imágenes más ligeras",
    seoDescription: "Convierte fotos JPG a AVIF en tu navegador y consigue imágenes web mucho más ligeras. Calidad ajustable, gratis y sin subir nada.",
    keywords: [
      "jpg a avif",
      "convertir jpg a avif",
      "jpeg a avif",
      "convertidor avif",
      "imagen a avif",
    ],
    howToSteps: [
      {
        title: "Añade tu foto JPG",
        description: "Arrastra, elige o pega un archivo .jpg o .jpeg.",
      },
      {
        title: "Elige la calidad",
        description: "Empieza con un 85%. AVIF se mantiene nítido con ajustes más bajos que JPG, así que prueba valores menores para archivos más ligeros.",
      },
      {
        title: "Descarga el AVIF",
        description: "Guarda el archivo AVIF y súbelo a tu web.",
      },
    ],
    features: [
      {
        title: "Archivos mucho más ligeros",
        description: "Un AVIF suele pesar alrededor de la mitad que un JPG que se ve igual.",
      },
      {
        title: "Compatible con todos los navegadores actuales",
        description: "Chrome, Edge, Firefox y Safari 16 o posterior muestran AVIF.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
      {
        title: "Sin datos de ubicación",
        description: "La ubicación GPS y los datos de la cámara del JPG no se copian al AVIF.",
      },
    ],
    faqs: [
      {
        question: "AVIF o WebP: ¿cuál es mejor?",
        answer: "AVIF suele dar archivos más pequeños con la misma calidad, mientras que WebP codifica más rápido y funciona en algunas apps antiguas. Todos los navegadores actuales muestran los dos.",
      },
      {
        question: "¿Cualquier app puede abrir AVIF?",
        answer: "No. Los navegadores sí, pero algunos visores de fotos, editores y formularios de subida antiguos no. Guarda el JPG original para esos casos y usa AVIF en la web.",
      },
      {
        question: "¿Por qué la conversión tarda unos segundos?",
        answer: "La codificación AVIF hace mucho trabajo para encontrar el archivo más pequeño. Se ejecuta en tu dispositivo, así que las fotos grandes tardan más en móviles lentos.",
      },
      {
        question: "¿Se sube mi foto?",
        answer: "No. El codificador AVIF funciona en tu navegador, así que la foto se queda en tu dispositivo.",
      },
    ],
  },
  "png-to-avif": {
    name: "PNG a AVIF",
    shortName: "PNG → AVIF",
    tagline: "Convierte imágenes PNG a AVIF para tener archivos web mucho más ligeros, con transparencia incluida. La conversión se hace en tu dispositivo.",
    intro: "Los archivos PNG suelen pesar mucho, sobre todo las capturas de pantalla, las fotos y los gráficos con detalle. AVIF guarda la misma imagen en una fracción del espacio y conserva la transparencia, así que va bien para logotipos, imágenes de producto e ilustraciones en la web. PNG a AVIF convierte tu imagen con la calidad que elijas, y todos los navegadores actuales pueden mostrar el resultado. La codificación ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo.",
    seoTitle: "Convertir PNG a AVIF: archivos ligeros con transparencia",
    seoDescription: "Convierte imágenes PNG a AVIF en tu navegador. Imágenes web mucho más ligeras que conservan la transparencia, calidad ajustable y sin subir nada.",
    keywords: [
      "png a avif",
      "convertir png a avif",
      "convertidor png a avif",
      "avif transparente",
      "imagen a avif",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen PNG",
        description: "Arrastra, elige o pega un archivo .png.",
      },
      {
        title: "Elige la calidad",
        description: "Un 85% va bien para la mayoría de las imágenes. Usa un valor más alto para texto nítido y líneas finas.",
      },
      {
        title: "Descarga el AVIF",
        description: "Guarda el archivo AVIF y súbelo a tu web.",
      },
    ],
    features: [
      {
        title: "Una fracción del peso",
        description: "Un AVIF suele pesar muchas veces menos que el PNG del que procede.",
      },
      {
        title: "Conserva la transparencia",
        description: "Los fondos transparentes siguen siéndolo en el AVIF.",
      },
      {
        title: "Compatible con todos los navegadores actuales",
        description: "Chrome, Edge, Firefox y Safari 16 o posterior muestran AVIF.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿AVIF es sin pérdida como PNG?",
        answer: "Aquí no. El AVIF se comprime con la calidad que elijas, así que pueden cambiar detalles muy pequeños. Con un 85% o más, la mayoría de las imágenes se ven igual que el PNG.",
      },
      {
        question: "¿AVIF conserva la transparencia?",
        answer: "Sí. Las zonas transparentes del PNG siguen siéndolo en el AVIF.",
      },
      {
        question: "¿Cuándo me conviene quedarme con el PNG?",
        answer: "Guarda el PNG para editar, para imprimir y para apps que no pueden abrir AVIF. Usa el AVIF en las webs.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. El codificador AVIF funciona en tu navegador, así que la imagen se queda en tu dispositivo.",
      },
    ],
  },
  "gif-to-png": {
    name: "GIF a PNG",
    shortName: "GIF → PNG",
    tagline: "Guarda un GIF como imagen fija PNG sin pérdida, conservando su transparencia. La conversión se hace en tu dispositivo.",
    intro: "GIF es un formato antiguo que admite como máximo 256 colores, y muchos editores y formularios de subida lo manejan mal. GIF a PNG guarda la imagen como PNG, un formato sin pérdida que abre cualquier editor y herramienta de diseño, y conserva las zonas transparentes. Si el GIF es animado, el PNG es una imagen fija de su primer fotograma. La conversión ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo.",
    seoTitle: "Convertir GIF a PNG gratis y con transparencia",
    seoDescription: "Convierte un GIF en una imagen fija PNG sin pérdida en tu navegador, conservando la transparencia. Gratis, privado y sin subir nada.",
    keywords: [
      "gif a png",
      "convertir gif a png",
      "convertidor gif a png",
      "gif a png transparente",
      "primer fotograma de gif a png",
    ],
    howToSteps: [
      {
        title: "Añade tu GIF",
        description: "Arrastra, elige o pega un archivo .gif.",
      },
      {
        title: "Revisa la vista previa",
        description: "Los GIF animados muestran su primer fotograma.",
      },
      {
        title: "Descarga el PNG",
        description: "Guarda el PNG y ábrelo en cualquier editor.",
      },
    ],
    features: [
      {
        title: "Sin pérdida",
        description: "Cada píxel del fotograma del GIF se conserva exactamente.",
      },
      {
        title: "Conserva la transparencia",
        description: "Las zonas transparentes del GIF siguen siéndolo en el PNG.",
      },
      {
        title: "Se abre en cualquier editor",
        description: "PNG funciona en Photoshop, GIMP, Figma, Canva, Office y cualquier navegador.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Qué pasa con un GIF animado?",
        answer: "El PNG es una imagen fija del primer fotograma. Los PNG creados aquí no tienen animación.",
      },
      {
        question: "¿Cambiarán los colores?",
        answer: "No. Un GIF tiene como máximo 256 colores, y PNG los guarda todos exactamente.",
      },
      {
        question: "¿Puedo cambiar el tamaño de la imagen al convertirla?",
        answer: "Sí. Indica un nuevo ancho o alto en los campos de tamaño antes de descargar.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. La conversión se hace en tu navegador, así que la imagen se queda en tu dispositivo.",
      },
    ],
  },
  "gif-to-jpg": {
    name: "GIF a JPG",
    shortName: "GIF → JPG",
    tagline: "Guarda un GIF como imagen fija JPG que se abre en cualquier sitio. La conversión se hace en tu dispositivo.",
    intro: "Algunos formularios de subida, servicios de impresión y apps solo aceptan JPG. GIF a JPG guarda un GIF como imagen fija JPG con la calidad que elijas. Como JPG no admite transparencia, las zonas transparentes se rellenan con el color de fondo que elijas. Si el GIF es animado, el JPG muestra su primer fotograma. La conversión ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo.",
    seoTitle: "Convertir GIF a JPG gratis y en privado",
    seoDescription: "Convierte un GIF en una imagen fija JPG en tu navegador. Elige la calidad y el color de fondo. Gratis y sin subir nada.",
    keywords: [
      "gif a jpg",
      "convertir gif a jpg",
      "gif a jpeg",
      "convertidor gif a jpg",
      "primer fotograma de gif a jpg",
    ],
    howToSteps: [
      {
        title: "Añade tu GIF",
        description: "Arrastra, elige o pega un archivo .gif.",
      },
      {
        title: "Elige calidad y fondo",
        description: "Elige la calidad del JPG y, si el GIF tiene transparencia, el color que la rellena.",
      },
      {
        title: "Descarga el JPG",
        description: "Guarda el JPG y úsalo donde quieras.",
      },
    ],
    features: [
      {
        title: "Se abre en todas partes",
        description: "JPG funciona en cualquier visor, editor, móvil, servicio de impresión y formulario de subida.",
      },
      {
        title: "Color de fondo a tu elección",
        description: "Las zonas transparentes se rellenan de blanco o del color que elijas.",
      },
      {
        title: "Calidad ajustable",
        description: "Ajusta el equilibrio entre peso del archivo y detalle.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Qué pasa con un GIF animado?",
        answer: "El JPG es una imagen fija del primer fotograma. JPG no admite animación.",
      },
      {
        question: "¿Por qué hay un color de fondo?",
        answer: "JPG no admite transparencia, así que las zonas transparentes del GIF necesitan un color sólido. Se usa blanco salvo que elijas otro.",
      },
      {
        question: "¿Debería elegir PNG?",
        answer: "Elige PNG para logotipos, texto y gráficos con colores planos, o para conservar la transparencia. Elige JPG cuando un formulario o servicio lo pida.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. La conversión se hace en tu navegador, así que la imagen se queda en tu dispositivo.",
      },
    ],
  },
  "bmp-to-jpg": {
    name: "BMP a JPG",
    shortName: "BMP → JPG",
    tagline: "Convierte imágenes BMP de Windows, que pesan mucho, en archivos JPG ligeros. La conversión se hace en tu dispositivo.",
    intro: "BMP es un formato antiguo de Windows que guarda las imágenes sin compresión, así que los archivos pesan mucho y muchas webs y apps no los aceptan. BMP a JPG convierte la imagen a JPG, que suele pesar una fracción del original, con la calidad que elijas. Es la solución rápida para escaneos, capturas de software antiguo e imágenes exportadas desde programas heredados. La conversión ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo.",
    seoTitle: "Convertir BMP a JPG gratis: archivos más ligeros",
    seoDescription: "Convierte imágenes BMP a JPG en tu navegador. Archivos mucho más ligeros que se abren en cualquier sitio, calidad ajustable y sin subir nada.",
    keywords: [
      "bmp a jpg",
      "convertir bmp a jpg",
      "bmp a jpeg",
      "convertidor bmp",
      "mapa de bits a jpg",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen BMP",
        description: "Arrastra, elige o pega un archivo .bmp.",
      },
      {
        title: "Elige la calidad",
        description: "Un 85% va bien para la mayoría de las imágenes. Súbela para capturas de pantalla con texto pequeño.",
      },
      {
        title: "Descarga el JPG",
        description: "Guarda el JPG, mucho más ligero.",
      },
    ],
    features: [
      {
        title: "Archivos mucho más ligeros",
        description: "Un JPG suele pesar una décima parte del BMP, o menos.",
      },
      {
        title: "Se abre en todas partes",
        description: "JPG funciona en cualquier visor, editor, móvil y formulario de subida.",
      },
      {
        title: "Calidad ajustable",
        description: "Ajusta el equilibrio entre peso del archivo y detalle.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué los BMP pesan tanto?",
        answer: "La mayoría de los BMP guardan cada píxel sin compresión. JPG comprime la imagen, por eso el archivo convertido pesa mucho menos.",
      },
      {
        question: "¿JPG es buena opción para capturas de pantalla?",
        answer: "Para capturas con texto pequeño o líneas nítidas, BMP a PNG las mantiene definidas. JPG es mejor para fotos y escaneos.",
      },
      {
        question: "¿Qué archivos BMP se pueden abrir?",
        answer: "Los tipos de mapa de bits de Windows habituales que admiten los navegadores. Algunas variantes poco comunes, como ciertos BMP comprimidos o muy antiguos, pueden no abrirse.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. La conversión se hace en tu navegador, así que la imagen se queda en tu dispositivo.",
      },
    ],
  },
  "bmp-to-png": {
    name: "BMP a PNG",
    shortName: "BMP → PNG",
    tagline: "Convierte imágenes BMP de Windows a PNG sin pérdida, con una fracción del peso. La conversión se hace en tu dispositivo.",
    intro: "Los archivos BMP no tienen compresión y pesan mucho, pero convertirlos a JPG puede emborronar el texto y las líneas nítidas. BMP a PNG convierte la imagen a PNG, que la comprime sin perder ni un solo píxel, así que las capturas de pantalla, los diagramas y los gráficos quedan exactamente igual en un archivo mucho más ligero. La conversión ocurre en tu navegador, así que la imagen nunca sale de tu dispositivo.",
    seoTitle: "Convertir BMP a PNG gratis y sin pérdida",
    seoDescription: "Convierte imágenes BMP a PNG sin pérdida en tu navegador. Archivos más ligeros que conservan cada píxel. Gratis, privado y sin subir nada.",
    keywords: [
      "bmp a png",
      "convertir bmp a png",
      "convertidor bmp a png",
      "mapa de bits a png",
      "convertidor bmp",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen BMP",
        description: "Arrastra, elige o pega un archivo .bmp.",
      },
      {
        title: "Revisa la vista previa",
        description: "Tu navegador abre la imagen en tu dispositivo.",
      },
      {
        title: "Descarga el PNG",
        description: "Guarda el PNG sin pérdida.",
      },
    ],
    features: [
      {
        title: "Sin pérdida",
        description: "Cada píxel del BMP se conserva exactamente.",
      },
      {
        title: "Archivos más ligeros",
        description: "PNG comprime la imagen sin pérdida, a menudo hasta una fracción del peso del BMP.",
      },
      {
        title: "Ideal para capturas de pantalla",
        description: "El texto, las líneas y los colores planos se mantienen nítidos.",
      },
      {
        title: "Conversión privada",
        description: "La imagen se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto menos pesa el PNG?",
        answer: "Depende de la imagen. Las capturas de pantalla y los gráficos suelen quedarse en una décima parte del peso del BMP, mientras que las fotos con mucho detalle se reducen menos.",
      },
      {
        question: "¿BMP a PNG o BMP a JPG?",
        answer: "Elige PNG para capturas de pantalla, diagramas y gráficos, o cuando necesites píxeles exactos. Elige JPG para fotos, donde da un archivo mucho más ligero.",
      },
      {
        question: "¿Qué archivos BMP se pueden abrir?",
        answer: "Los tipos de mapa de bits de Windows habituales que admiten los navegadores. Algunas variantes poco comunes pueden no abrirse.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer: "No. La conversión se hace en tu navegador, así que la imagen se queda en tu dispositivo.",
      },
    ],
  },
  "tiff-to-jpg": {
    name: "TIFF a JPG",
    shortName: "TIFF → JPG",
    tagline: "Convierte escaneos e imágenes TIFF en archivos JPG ligeros que se abren en cualquier sitio. La conversión se hace en tu dispositivo.",
    intro: "TIFF es el formato que generan muchos escáneres, programas de fax, cámaras y flujos de trabajo de impresión. Los archivos suelen pesar mucho, y ni Chrome, ni Edge, ni Firefox, ni la mayoría de las webs pueden mostrarlos. TIFF a JPG convierte la imagen a JPG, que suele pesar una fracción del original, con la calidad que elijas. También funcionan los TIFF comprimidos, incluidos los archivos de fax en blanco y negro. Si el archivo tiene varias páginas, se convierte la primera; TIFF a PDF conserva todas las páginas. La conversión ocurre en tu navegador, así que el archivo nunca sale de tu dispositivo.",
    seoTitle: "Convertir TIFF a JPG gratis, rápido y privado",
    seoDescription: "Convierte escaneos e imágenes TIFF a JPG en tu navegador. Archivos más ligeros que se abren en cualquier sitio, calidad ajustable y sin subir nada.",
    keywords: [
      "tiff a jpg",
      "tif a jpg",
      "convertir tiff a jpg",
      "tiff a jpeg",
      "convertidor tiff",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen TIFF",
        description: "Arrastra, elige o pega un archivo .tif o .tiff.",
      },
      {
        title: "Elige la calidad",
        description: "Un 85% va bien para fotos. Usa un valor más alto para escaneos con texto pequeño.",
      },
      {
        title: "Descarga el JPG",
        description: "Guarda el JPG y compártelo o súbelo.",
      },
    ],
    features: [
      {
        title: "Archivos mucho más ligeros",
        description: "Un JPG suele pesar una fracción de lo que pesa el TIFF.",
      },
      {
        title: "Se abre en todas partes",
        description: "El JPG funciona en cualquier visor, editor, móvil y formulario de subida.",
      },
      {
        title: "Casi todos los tipos de TIFF",
        description: "Se abren los TIFF sin compresión, LZW, Deflate, PackBits, JPEG y de fax en blanco y negro.",
      },
      {
        title: "Conversión privada",
        description: "El archivo se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué mi navegador no abre archivos TIFF?",
        answer: "De los navegadores principales, solo Safari muestra TIFF. Chrome, Edge y Firefox no, así que esta herramienta decodifica el archivo por sí misma, en tu dispositivo.",
      },
      {
        question: "¿Qué pasa con un TIFF de varias páginas?",
        answer: "Se convierte la primera página. Para conservar todas, usa TIFF a PDF, que crea una página de PDF por cada página del TIFF.",
      },
      {
        question: "¿Se reduce un escaneo muy grande?",
        answer: "Las páginas de más de unos 16 megapíxeles, como 4000 × 4000 píxeles, se reducen a ese tamaño para que cualquier navegador, iPhone incluido, pueda procesarlas. Los escaneos y las fotos normales no se redimensionan.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer: "No. El TIFF se decodifica y se convierte en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "tiff-to-png": {
    name: "TIFF a PNG",
    shortName: "TIFF → PNG",
    tagline: "Convierte imágenes TIFF a PNG sin pérdida, que cualquier navegador y editor puede abrir. La conversión se hace en tu dispositivo.",
    intro: "Los archivos TIFF de escáneres, cámaras y programas de diseño no se pueden mostrar en Chrome, Edge, Firefox ni en la mayoría de las webs. TIFF a PNG convierte la imagen a PNG, que no tiene pérdida, igual que el TIFF, así que se conserva cada píxel y también la transparencia. Por eso es una buena opción para documentos escaneados, dibujos de línea y gráficos que vayas a seguir editando. Si el archivo tiene varias páginas, se convierte la primera; TIFF a PDF conserva todas las páginas. La conversión ocurre en tu navegador, así que el archivo nunca sale de tu dispositivo.",
    seoTitle: "Convertir TIFF a PNG gratis y sin pérdida",
    seoDescription: "Convierte imágenes TIFF a PNG sin pérdida en tu navegador, conservando cada píxel y la transparencia. Gratis, privado y sin subir nada.",
    keywords: [
      "tiff a png",
      "tif a png",
      "convertir tiff a png",
      "convertidor tiff a png",
      "tiff a png sin pérdida",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen TIFF",
        description: "Arrastra, elige o pega un archivo .tif o .tiff.",
      },
      {
        title: "Revisa la vista previa",
        description: "Tu navegador decodifica la imagen en tu dispositivo.",
      },
      {
        title: "Descarga el PNG",
        description: "Guarda el PNG sin pérdida y ábrelo en cualquier editor.",
      },
    ],
    features: [
      {
        title: "Sin pérdida",
        description: "Cada píxel de la página TIFF se conserva exactamente.",
      },
      {
        title: "Conserva la transparencia",
        description: "Las zonas transparentes del TIFF siguen siendo transparentes en el PNG.",
      },
      {
        title: "Casi todos los tipos de TIFF",
        description: "Se abren los TIFF sin compresión, LZW, Deflate, PackBits, JPEG y de fax en blanco y negro.",
      },
      {
        title: "Conversión privada",
        description: "El archivo se convierte en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿El PNG pesará menos que el TIFF?",
        answer: "A menudo sí, sobre todo con TIFF sin compresión y escaneos en blanco y negro. Un TIFF que ya estaba comprimido puede dar un PNG de un peso parecido.",
      },
      {
        question: "¿Qué pasa con un TIFF de varias páginas?",
        answer: "Se convierte la primera página. Para conservar todas, usa TIFF a PDF, que crea una página de PDF por cada página del TIFF.",
      },
      {
        question: "¿Se reduce un escaneo muy grande?",
        answer: "Las páginas de más de unos 16 megapíxeles, como 4000 × 4000 píxeles, se reducen a ese tamaño para que cualquier navegador, iPhone incluido, pueda procesarlas. Los escaneos y las fotos normales no se redimensionan.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer: "No. El TIFF se decodifica y se convierte en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "jpg-to-pdf": {
    name: "JPG a PDF",
    shortName: "JPG → PDF",
    tagline: "Convierte una o varias fotos en un solo PDF, en el orden que elijas, con páginas A4 o Carta. No se sube nada.",
    intro:
      "JPG a PDF reúne tus fotos en un solo archivo PDF, una foto por página. Es la forma rápida de enviar páginas escaneadas, recibos, apuntes o fotos de documentos de identidad como un único documento. Añade imágenes JPG, PNG, WebP o HEIC de iPhone, ordénalas y elige el tamaño de página, la orientación y los márgenes. Las fotos JPG se colocan en el PDF sin volver a comprimirse, así que conservan su calidad original. Tu navegador crea el PDF, así que tus documentos nunca se suben a un servidor.",
    seoTitle: "JPG a PDF: une varias fotos en un PDF gratis",
    seoDescription:
      "JPG a PDF gratis: convierte fotos JPG, PNG y del iPhone en un solo PDF. Ordena las páginas y elige A4 o Carta. Sin subir nada y sin marca de agua.",
    keywords: [
      "jpg a pdf",
      "imagen a pdf",
      "convertir foto a pdf",
      "png a pdf",
      "unir imágenes en un pdf",
      "convertidor jpg a pdf",
    ],
    howToSteps: [
      {
        title: "Añade tus imágenes",
        description: "Arrastra o elige una o varias imágenes JPG, PNG, WebP o HEIC. Puedes añadir más en cualquier momento.",
      },
      {
        title: "Ordénalas",
        description: "Usa los botones de subir y bajar para ordenar las páginas, y quita las que no necesites.",
      },
      {
        title: "Elige el diseño de página",
        description: "Elige A4, Carta (Letter) o una página que se ajuste a cada imagen, además de la orientación y el margen.",
      },
      {
        title: "Crea el PDF",
        description: "Descarga un PDF con cada imagen en su propia página.",
      },
    ],
    features: [
      {
        title: "Muchas imágenes, un PDF",
        description: "Une en un solo documento tantas fotos como pueda manejar tu dispositivo.",
      },
      {
        title: "Calidad JPG original",
        description: "Las fotos JPG se insertan tal cual, sin otra ronda de compresión.",
      },
      {
        title: "A4, Carta o según la imagen",
        description: "Tamaños de papel estándar con orientación automática, o páginas del tamaño exacto de cada imagen.",
      },
      {
        title: "Privado y sin marca de agua",
        description: "El PDF se crea en tu dispositivo, no lleva marca de agua y no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas imágenes puedo añadir?",
        answer:
          "No hay un límite fijo. Decenas de fotos del móvil funcionan en la mayoría de los dispositivos; los lotes muy grandes pueden agotar la memoria de los móviles antiguos.",
      },
      {
        question: "¿Las fotos perderán calidad?",
        answer:
          "Las fotos JPG se colocan en el PDF sin volver a comprimirse, así que conservan su calidad original. Las imágenes PNG siguen sin pérdida. Las imágenes WebP y HEIC se convierten primero a JPG de alta calidad, porque PDF no puede guardarlas directamente.",
      },
      {
        question: "¿Por qué mi PDF pesa tanto?",
        answer:
          "El PDF contiene tus fotos a resolución completa. Para que pese menos, reduce antes las fotos con Comprimir imagen o Cambiar tamaño de imagen y luego añádelas aquí.",
      },
      {
        question: "¿Las fotos del móvil que salen de lado se girarán bien?",
        answer:
          "Sí. Las fotos se colocan tal como se ven en tu móvil, usando la orientación guardada en el archivo.",
      },
      {
        question: "¿Se sube mi documento?",
        answer:
          "No. Tu navegador crea el PDF en tu dispositivo, así que los recibos, documentos de identidad y documentos privados nunca salen de él.",
      },
    ],
  },
  "png-to-pdf": {
    name: "PNG a PDF",
    shortName: "PNG → PDF",
    tagline: "Convierte imágenes PNG y capturas de pantalla en un solo PDF, en el orden que elijas. La conversión se hace en tu dispositivo.",
    intro: "PNG a PDF une una o varias imágenes PNG, como capturas de pantalla, escaneos o diagramas, en un solo PDF fácil de enviar por correo, imprimir o subir. Ordena las páginas como quieras, elige A4, Carta o una página que se ajuste a cada imagen, y ajusta la orientación y los márgenes. Las imágenes conservan su resolución completa. Todo ocurre en tu navegador, así que tus imágenes nunca se suben. Las fotos JPG, WebP y HEIC del iPhone pueden ir en el mismo PDF.",
    seoTitle: "Convertir PNG a PDF gratis: une varias imágenes",
    seoDescription: "Convierte imágenes PNG y capturas de pantalla en un solo PDF en tu navegador. Ordena las páginas y elige A4 o Carta. Gratis, privado y sin subir nada.",
    keywords: [
      "png a pdf",
      "convertir png a pdf",
      "convertidor png a pdf",
      "captura de pantalla a pdf",
      "unir png en un pdf",
    ],
    howToSteps: [
      {
        title: "Añade tus imágenes PNG",
        description: "Arrastra o elige una o varias imágenes. Puedes añadir más después.",
      },
      {
        title: "Ordena las páginas",
        description: "Arrastra o usa los botones de flecha para fijar el orden, y luego elige el tamaño de página, la orientación y el margen.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda un PDF con una página para cada imagen.",
      },
    ],
    features: [
      {
        title: "Muchas imágenes, un PDF",
        description: "Une capturas de pantalla o escaneos en un solo documento.",
      },
      {
        title: "Tu orden de páginas",
        description: "Reordena las páginas antes de crear el PDF.",
      },
      {
        title: "Opciones de tamaño de página",
        description: "A4, Carta o cada página del tamaño de su imagen.",
      },
      {
        title: "Conversión privada",
        description: "El PDF se crea en tu dispositivo y no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Las imágenes pierden calidad?",
        answer: "No. Cada imagen se coloca en el PDF a su resolución completa.",
      },
      {
        question: "¿Puedo mezclar PNG con otros formatos?",
        answer: "Sí. Las imágenes JPG, WebP y HEIC del iPhone pueden ir en el mismo PDF.",
      },
      {
        question: "¿Qué hace la opción Según imagen?",
        answer: "Cada página toma el tamaño y la forma de su imagen, sin borde blanco, lo que va bien para capturas de pantalla y diapositivas.",
      },
      {
        question: "¿Se suben mis imágenes?",
        answer: "No. El PDF se crea en tu navegador, así que las imágenes se quedan en tu dispositivo.",
      },
    ],
  },
  "heic-to-pdf": {
    name: "HEIC a PDF",
    shortName: "HEIC → PDF",
    tagline: "Convierte fotos HEIC del iPhone, como recibos y documentos, en un solo PDF. La conversión se hace en tu dispositivo.",
    intro: "El iPhone guarda las fotos en HEIC, pero los formularios de gastos, los colegios, los bancos y las oficinas suelen pedir un PDF. HEIC a PDF convierte una o varias fotos HEIC, como recibos, documentos de identidad, formularios o páginas escritas a mano, en un solo PDF que puedes subir o enviar por correo. Ordena las páginas y elige A4, Carta o páginas del tamaño de cada foto. Todo ocurre en tu navegador, así que tus fotos nunca se suben.",
    seoTitle: "Convertir HEIC a PDF gratis: fotos del iPhone a PDF",
    seoDescription: "Convierte fotos HEIC del iPhone en un solo PDF en tu navegador. Ordena las páginas y elige A4 o Carta. Gratis, privado y sin subir nada.",
    keywords: [
      "heic a pdf",
      "convertir heic a pdf",
      "foto de iphone a pdf",
      "heif a pdf",
      "convertidor heic a pdf",
    ],
    howToSteps: [
      {
        title: "Añade tus fotos HEIC",
        description: "Arrastra o elige uno o varios archivos .heic o .heif.",
      },
      {
        title: "Ordena las páginas",
        description: "Fija el orden y luego elige el tamaño de página, la orientación y el margen.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda un PDF con una página para cada foto.",
      },
    ],
    features: [
      {
        title: "Varias fotos, un PDF",
        description: "Une recibos o páginas de documentos en un solo archivo.",
      },
      {
        title: "Tu orden de páginas",
        description: "Reordena las páginas antes de crear el PDF.",
      },
      {
        title: "Opciones de tamaño de página",
        description: "A4, Carta o cada página del tamaño de su foto.",
      },
      {
        title: "Conversión privada",
        description: "Tus fotos se convierten en tu dispositivo y nunca se suben.",
      },
    ],
    faqs: [
      {
        question: "¿HEIF es lo mismo que HEIC?",
        answer: "En fotos, sí. Aquí funcionan tanto los archivos .heic como los .heif.",
      },
      {
        question: "¿Puedo añadir también imágenes JPG o PNG?",
        answer: "Sí. Las imágenes JPG, PNG y WebP pueden ir en el mismo PDF.",
      },
      {
        question: "¿El PDF se leerá bien si son documentos?",
        answer: "Sí. Las fotos se colocan a resolución completa. Para un resultado más claro, fotografía los documentos bien planos y con buena luz.",
      },
      {
        question: "¿Se suben mis fotos?",
        answer: "No. El decodificador HEIC y el creador de PDF funcionan en tu navegador, así que tus fotos se quedan en tu dispositivo.",
      },
    ],
  },
  "tiff-to-pdf": {
    name: "TIFF a PDF",
    shortName: "TIFF → PDF",
    tagline: "Convierte escaneos y faxes TIFF en un PDF, con todas las páginas de un TIFF multipágina en orden. La conversión se hace en tu dispositivo.",
    intro: "Los escáneres y los programas de fax suelen guardar los documentos como archivos TIFF de varias páginas, pero casi todo el mundo espera un PDF. TIFF a PDF convierte cada página de cada TIFF en una página de PDF, en orden, para que un contrato escaneado o un fax se convierta en un solo documento que puedes abrir, enviar por correo y subir en cualquier sitio. Añade varios archivos, reordena las páginas y elige A4, Carta o páginas del tamaño de cada imagen. Todo ocurre en tu navegador, así que tus documentos nunca se suben.",
    seoTitle: "Convertir TIFF a PDF gratis: escaneos de varias páginas",
    seoDescription: "Convierte escaneos y faxes TIFF a PDF en tu navegador. Todas las páginas de un TIFF multipágina, en orden. Gratis, privado y sin subir nada.",
    keywords: [
      "tiff a pdf",
      "tif a pdf",
      "convertir tiff a pdf",
      "tiff multipágina a pdf",
      "fax tiff a pdf",
    ],
    howToSteps: [
      {
        title: "Añade tus archivos TIFF",
        description: "Arrastra o elige uno o varios archivos .tif o .tiff. Cada página aparece en la lista.",
      },
      {
        title: "Ordena las páginas",
        description: "Fija el orden y luego elige el tamaño de página, la orientación y el margen.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda un PDF con todas las páginas.",
      },
    ],
    features: [
      {
        title: "Se conservan todas las páginas",
        description: "Cada página de un TIFF multipágina se convierte en una página del PDF, en orden.",
      },
      {
        title: "Formatos de fax y escaneo",
        description: "Se abren los TIFF de fax en blanco y negro y los comprimidos con LZW, Deflate, PackBits y JPEG.",
      },
      {
        title: "Tu orden de páginas",
        description: "Reordena o quita páginas antes de crear el PDF.",
      },
      {
        title: "Conversión privada",
        description: "Tus documentos se convierten en tu dispositivo y nunca se suben.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas páginas puede tener un TIFF?",
        answer: "Hasta 200 páginas por archivo. Las páginas posteriores a la 200 se omiten, así que divide antes los documentos muy largos en TIFF más pequeños.",
      },
      {
        question: "¿Puedo mezclar TIFF con otras imágenes?",
        answer: "Sí. Las imágenes JPG, PNG, WebP y HEIC del iPhone pueden ir en el mismo PDF.",
      },
      {
        question: "¿Se puede buscar en el texto del PDF?",
        answer: "No. Cada página se coloca como imagen, tal como estaba en el TIFF. Para copiar el texto, abre una página en Imagen a texto.",
      },
      {
        question: "¿Se suben mis documentos?",
        answer: "No. El TIFF se decodifica y el PDF se crea en tu navegador, así que tus documentos se quedan en tu dispositivo.",
      },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF a JPG",
    shortName: "PDF → JPG",
    tagline: "Guarda cada página de un PDF como imagen JPG o PNG, de una en una o todas juntas en un ZIP. No se sube nada.",
    intro:
      "PDF a JPG convierte las páginas de un PDF en imágenes que puedes publicar, compartir en un chat, insertar en una diapositiva o subir a un formulario que solo acepta imágenes. Elige JPG para archivos pequeños o PNG para texto nítido, y elige la resolución: 72 dpi para pantallas, 150 dpi para la mayoría de los usos o 300 dpi para imprimir. Descarga una sola página o todas a la vez en un archivo ZIP. Tu navegador abre el PDF en tu dispositivo, así que los documentos privados nunca se suben.",
    seoTitle: "PDF a JPG: convierte todas las páginas gratis",
    seoDescription:
      "PDF a JPG gratis: convierte las páginas de un PDF en imágenes JPG o PNG. Elige 72, 150 o 300 dpi y descarga una página o todas en un ZIP. Sin subir nada.",
    keywords: [
      "pdf a jpg",
      "pdf a imagen",
      "convertir pdf a jpg",
      "pdf a png",
      "página de pdf a imagen",
      "guardar pdf como jpg",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Arrastra o elige un archivo PDF. Sus páginas aparecen como vistas previas.",
      },
      {
        title: "Elige formato y resolución",
        description: "Elige JPG o PNG, y 72, 150 o 300 dpi.",
      },
      {
        title: "Descarga",
        description: "Guarda una sola página o descarga todas juntas en un archivo ZIP.",
      },
    ],
    features: [
      {
        title: "Todas las páginas o solo una",
        description: "Descarga la página que necesites, o todas a la vez en un ZIP.",
      },
      {
        title: "Resolución para imprimir",
        description: "Renderiza hasta 300 dpi para un texto nítido y para imprimir.",
      },
      {
        title: "JPG o PNG",
        description: "JPG para archivos pequeños, PNG para texto y diagramas nítidos.",
      },
      {
        title: "Tus documentos privados siguen siendo privados",
        description: "El PDF se abre en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Qué resolución elijo?",
        answer:
          "150 dpi sirve para la mayoría de los usos, desde compartir hasta diapositivas. Elige 300 dpi para imprimir o ampliar texto pequeño, y 72 dpi para los archivos más pequeños. Las resoluciones más altas tardan más y generan archivos más grandes.",
      },
      {
        question: "¿JPG o PNG?",
        answer:
          "JPG da archivos mucho más pequeños y es lo mejor para páginas con fotos. PNG mantiene el texto y los dibujos de líneas perfectamente nítidos, pero los archivos pesan más.",
      },
      {
        question: "¿Puedo convertir un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin protección y prueba con esa copia.",
      },
      {
        question: "¿El texto se podrá seleccionar?",
        answer:
          "No. Cada página se convierte en una imagen, así que el texto no se puede seleccionar ni buscar. Conserva el PDF original si necesitas el texto.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador lee y renderiza el PDF, así que los contratos, extractos y otros documentos privados nunca salen de tu dispositivo.",
      },
    ],
  },
  "pdf-to-png": {
    name: "PDF a PNG",
    shortName: "PDF → PNG",
    tagline: "Guarda cada página de un PDF como imagen PNG nítida y sin pérdida, de una en una o todas en un ZIP. La conversión se hace en tu dispositivo.",
    intro: "PDF a PNG convierte cada página de un PDF en una imagen PNG. PNG es sin pérdida, así que el texto, las líneas y los diagramas se mantienen perfectamente nítidos, lo que lo convierte en la opción adecuada para diapositivas, documentos y gráficos que quieras meter en una presentación, un diseño o una página web. Elige la resolución y descarga páginas sueltas o todas juntas en un ZIP. Tu navegador abre el PDF, que nunca se sube.",
    seoTitle: "Convertir PDF a PNG gratis: páginas nítidas",
    seoDescription: "Convierte las páginas de un PDF en imágenes PNG nítidas en tu navegador. Elige 72, 150 o 300 dpi y descarga una página o todas. Gratis y privado.",
    keywords: [
      "pdf a png",
      "convertir pdf a png",
      "convertidor pdf a png",
      "página de pdf a imagen",
      "pdf a png alta resolución",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Arrastra o elige un archivo PDF. Sus páginas aparecen como miniaturas.",
      },
      {
        title: "Elige la resolución",
        description: "150 dpi va bien para pantallas. Usa 300 dpi para imprimir o ampliar.",
      },
      {
        title: "Descarga las páginas",
        description: "Guarda una página como PNG, o todas juntas en un ZIP.",
      },
    ],
    features: [
      {
        title: "Texto y líneas nítidos",
        description: "PNG es sin pérdida, así que el texto pequeño y las líneas finas se mantienen definidos.",
      },
      {
        title: "Resolución a elegir",
        description: "72, 150 o 300 dpi, desde vistas previas para la web hasta impresión.",
      },
      {
        title: "Todas las páginas a la vez",
        description: "Descarga todas las páginas en un ZIP, con nombres en orden de página.",
      },
      {
        title: "Conversión privada",
        description: "El PDF se abre en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿PNG o JPG para páginas de PDF?",
        answer: "PNG mantiene el texto y los diagramas perfectamente nítidos. JPG da archivos más pequeños y va bien para páginas que son sobre todo fotos. Puedes cambiar a JPG en la misma herramienta.",
      },
      {
        question: "¿Qué resolución elijo?",
        answer: "150 dpi se ve bien en pantalla. 300 dpi es para imprimir o cuando necesitas ampliar, y genera archivos más grandes.",
      },
      {
        question: "¿Puedo convertir un PDF protegido con contraseña?",
        answer: "No si necesita contraseña para abrirse. Ábrelo en un lector de PDF, guarda una copia sin contraseña y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. Tu navegador lee y dibuja el PDF, así que se queda en tu dispositivo.",
      },
    ],
  },
  "merge-images": {
    name: "Unir imágenes",
    shortName: "Unir",
    tagline: "Une fotos lado a lado, apiladas o en cuadrícula, con espaciado y color de fondo, y guarda una sola imagen.",
    intro:
      "Unir imágenes combina varias imágenes en una: lado a lado para comparar el antes y el después, apiladas para capturas de pantalla largas y guías paso a paso, o en cuadrícula para un collage sencillo. Ordena las imágenes, elige el espacio entre ellas y el color de fondo, y deja que la herramienta iguale sus alturas o anchuras para que los bordes queden alineados. Guarda el resultado en JPG, PNG o WebP. Todo ocurre en tu navegador, así que tus fotos nunca se suben.",
    seoTitle: "Unir imágenes online: combina fotos gratis",
    seoDescription:
      "Unir imágenes online gratis: combina fotos lado a lado, en vertical o en cuadrícula en tu navegador. Añade espaciado y color de fondo. Privado y sin subir nada.",
    keywords: [
      "unir imágenes",
      "juntar fotos",
      "combinar imágenes",
      "poner dos fotos juntas",
      "hacer collage de fotos",
      "unir imágenes verticalmente",
    ],
    howToSteps: [
      {
        title: "Añade tus imágenes",
        description: "Arrastra o elige dos o más imágenes JPG, PNG, WebP o HEIC.",
      },
      {
        title: "Ordénalas",
        description: "Usa los botones de subir y bajar para fijar el orden, y quita las que no necesites.",
      },
      {
        title: "Elige el diseño",
        description: "Lado a lado, apiladas o una cuadrícula con el número de columnas que quieras, además del espaciado y el fondo.",
      },
      {
        title: "Descarga",
        description: "Guarda la imagen unida en JPG, PNG o WebP.",
      },
    ],
    features: [
      {
        title: "Tres diseños",
        description: "Horizontal para comparaciones, vertical para capturas y guías, y cuadrícula para collages.",
      },
      {
        title: "Bordes alineados",
        description: "Iguala alturas o anchuras automáticamente, o mantén cada imagen en su tamaño original.",
      },
      {
        title: "Espaciado y fondo",
        description: "Fija el espacio entre imágenes y rellénalo con cualquier color, o déjalo transparente en PNG y WebP.",
      },
      {
        title: "Privado",
        description: "Las imágenes se unen en tu dispositivo y nunca se suben.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas imágenes puedo unir?",
        answer:
          "Todas las que quieras, dentro de la memoria de tu dispositivo. Los resultados muy grandes se reducen automáticamente para no superar el tamaño que los navegadores pueden guardar.",
      },
      {
        question: "¿Qué hace Igualar tamaños?",
        answer:
          "En una fila, cada imagen se escala a la misma altura; en una columna, a la misma anchura; en una cuadrícula, cada imagen llena una celda del mismo tamaño. Desactívalo para mantener cada imagen en su tamaño original.",
      },
      {
        question: "¿El fondo puede ser transparente?",
        answer:
          "Sí. Elige Transparente y guarda en PNG o WebP. JPG no admite transparencia, así que usa el color de fondo en su lugar.",
      },
      {
        question: "¿Cómo hago una imagen de antes y después?",
        answer:
          "Añade las dos fotos, elige Lado a lado, deja Igualar tamaños activado y añade un pequeño espacio. Las dos imágenes tendrán la misma altura.",
      },
      {
        question: "¿Se suben mis imágenes?",
        answer: "No. Tu navegador combina las imágenes en tu dispositivo.",
      },
    ],
  },
  "merge-pdf": {
    name: "Unir PDF",
    shortName: "Unir PDF",
    tagline: "Combina varios archivos PDF en uno, en el orden que elijas. Los archivos se unen en tu dispositivo.",
    intro:
      "Unir PDF junta dos o más archivos PDF en un solo documento. Añade los archivos, ordénalos con los botones de mover, revisa la primera página de cada uno y descarga un PDF con todas las páginas seguidas. Es la forma rápida de enviar un informe con sus anexos, varias páginas escaneadas o un conjunto de facturas en un solo archivo. La unión se hace en tu navegador, así que tus documentos nunca se suben a un servidor.",
    seoTitle: "Unir PDF online – gratis y sin subir archivos",
    seoDescription:
      "Unir PDF gratis: combina varios archivos PDF en uno desde tu navegador, en el orden que quieras. Privado, sin subir archivos y sin marca de agua.",
    keywords: [
      "unir pdf",
      "juntar pdf",
      "combinar pdf",
      "unir pdf gratis",
      "unir archivos pdf en uno",
      "unir pdf online",
    ],
    howToSteps: [
      {
        title: "Añade tus PDF",
        description: "Suelta o elige dos o más archivos PDF. Puedes añadir más en cualquier momento.",
      },
      {
        title: "Ordénalos",
        description: "Usa los botones de subir y bajar para ordenar los archivos y quita los que no necesites.",
      },
      {
        title: "Descarga",
        description: "Guarda un PDF que contiene todas las páginas, archivo tras archivo.",
      },
    ],
    features: [
      {
        title: "Tantos archivos como quieras",
        description: "Combina tantos PDF como aguante tu dispositivo, con el total de páginas a la vista.",
      },
      {
        title: "Tu orden",
        description: "Ordena los archivos con botones que también funcionan con el teclado y con lectores de pantalla.",
      },
      {
        title: "Páginas intactas",
        description:
          "Las páginas se copian tal cual, sin volver a comprimirlas, así que el texto sigue nítido y se puede buscar.",
      },
      {
        title: "Privado y gratis",
        description: "Los archivos se unen en tu dispositivo, sin subidas, sin registro y sin marca de agua.",
      },
    ],
    faqs: [
      {
        question: "¿Hay un límite de archivos que puedo unir?",
        answer:
          "No hay un límite fijo. Decenas de PDF normales funcionan en la mayoría de los dispositivos; los archivos muy grandes pueden ir lentos en móviles antiguos.",
      },
      {
        question: "¿Siguen funcionando los enlaces y los marcadores?",
        answer:
          "Los enlaces de las páginas se conservan. La lista de marcadores (el índice del panel lateral de un lector de PDF) no se copia al archivo unido.",
      },
      {
        question: "¿Unir reduce la calidad?",
        answer:
          "No. Las páginas se copian tal cual, así que el texto, las imágenes y los gráficos vectoriales se ven exactamente igual.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "split-pdf": {
    name: "Dividir PDF",
    shortName: "Dividir PDF",
    tagline: "Divide un PDF por rangos de páginas, cada pocas páginas o en páginas sueltas. Funciona en tu dispositivo.",
    intro:
      "Dividir PDF separa un PDF en varios más pequeños. Escribe rangos de páginas como 1-3, 5, 8- para obtener un archivo por rango, divide cada pocas páginas para cortar un escaneo largo en partes iguales o guarda cada página como un PDF propio. La herramienta muestra los archivos que obtendrás antes de descargarlos, y si son varios llegan juntos en un ZIP. La división se hace en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Dividir PDF online – por páginas o rangos, gratis",
    seoDescription:
      "Dividir PDF gratis: separa un PDF en varios archivos por rangos de páginas, cada N páginas o página a página, en tu navegador. Privado y sin subir nada.",
    keywords: [
      "dividir pdf",
      "separar pdf",
      "separar páginas pdf",
      "dividir pdf gratis",
      "dividir pdf en varios archivos",
      "cortar pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige un PDF. Sus páginas aparecen como vistas previas.",
      },
      {
        title: "Elige cómo dividir",
        description: "Escribe rangos de páginas, elige un número de páginas por archivo o separa todas las páginas.",
      },
      {
        title: "Revisa la lista",
        description: "El panel muestra cada archivo que obtendrás y sus páginas.",
      },
      {
        title: "Descarga",
        description: "Guarda un PDF, o un ZIP si hay varios archivos.",
      },
    ],
    features: [
      {
        title: "Tres formas de dividir",
        description: "Rangos a medida, grupos iguales de páginas o una página por archivo.",
      },
      {
        title: "Revisa antes de guardar",
        description: "Primero se listan todos los archivos resultantes con sus números de página.",
      },
      {
        title: "Una sola descarga ZIP",
        description: "Varios archivos llegan juntos, con el nombre de sus páginas.",
      },
      {
        title: "Privado",
        description: "El PDF se divide en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo escribo los rangos de páginas?",
        answer:
          "Separa los rangos con comas. 1-3 significa las páginas 1 a 3, 5 solo la página 5 y 8- desde la página 8 hasta el final. Cada rango se convierte en un PDF propio.",
      },
      {
        question: "¿Puedo obtener un PDF con solo algunas páginas?",
        answer:
          "Sí. Escribe un solo rango, como 2-4, para descargar solo esas páginas. Extraer páginas de PDF también te permite elegir páginas haciendo clic en ellas.",
      },
      {
        question: "¿Dividir cambia las páginas?",
        answer: "No. Las páginas se copian tal cual, así que el texto sigue nítido y se puede buscar.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "extract-pdf-pages": {
    name: "Extraer páginas de PDF",
    shortName: "Extraer páginas",
    tagline: "Elige las páginas que necesitas de un PDF y guárdalas como un PDF nuevo. Funciona en tu dispositivo.",
    intro:
      "Extraer páginas de PDF te permite elegir páginas de un PDF por sus vistas previas y guardar solo esas páginas como un documento nuevo. Es útil para enviar un capítulo de un informe largo, la página firmada de un contrato o un solo extracto de un lote. Marca las páginas que quieras, o usa Seleccionar todo y desmarca las pocas que no, y descarga. El archivo original no cambia, y todo ocurre en tu navegador.",
    seoTitle: "Extraer páginas de un PDF – gratis, sin subirlo",
    seoDescription:
      "Extraer páginas de PDF gratis: elige páginas por su vista previa y guárdalas como un PDF nuevo desde tu navegador. Privado y sin subir nada.",
    keywords: [
      "extraer páginas pdf",
      "extraer páginas de un pdf",
      "sacar páginas de un pdf",
      "separar hojas de un pdf",
      "guardar páginas de un pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige un PDF para ver todas sus páginas.",
      },
      {
        title: "Marca las páginas que quieras",
        description: "Usa la casilla bajo cada página, o Seleccionar todo y desmarca las que no necesites.",
      },
      {
        title: "Descarga",
        description: "Guarda un PDF nuevo solo con esas páginas, en su orden original.",
      },
    ],
    features: [
      {
        title: "Elige por vista previa",
        description: "Ve cada página antes de elegir.",
      },
      {
        title: "Apto para teclado",
        description: "Cada página tiene una casilla con etiqueta, así que no hace falta ratón.",
      },
      {
        title: "Páginas intactas",
        description: "Las páginas elegidas se copian tal cual, con texto nítido y que se puede buscar.",
      },
      {
        title: "Privado",
        description: "Las páginas se extraen en tu dispositivo y nunca se suben.",
      },
    ],
    faqs: [
      {
        question: "¿Cambia mi PDF original?",
        answer: "No. Se crea un PDF nuevo con las páginas que elegiste; el archivo original se queda como estaba.",
      },
      {
        question: "¿Puedo cambiar el orden de las páginas?",
        answer:
          "Las páginas extraídas mantienen su orden original. Para reordenar, girar o eliminar páginas, usa Organizar PDF.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "organize-pdf": {
    name: "Organizar PDF",
    shortName: "Organizar PDF",
    tagline: "Reordena, gira y elimina páginas de un PDF y guarda el PDF nuevo. Funciona en tu dispositivo.",
    intro:
      "Organizar PDF muestra todas las páginas de un PDF para que lo pongas en orden: mueve páginas antes o después, endereza escaneos que están de lado y elimina páginas en blanco o que no quieras. Cada página tiene sus propios botones, que también funcionan con el teclado, y con el ratón puedes arrastrar las páginas a su sitio. Deshacer todos los cambios lo devuelve todo a como estaba. Cuando esté bien, descarga el PDF nuevo. Todo esto ocurre en tu navegador, así que el documento nunca se sube.",
    seoTitle: "Organizar PDF – reordenar, girar y eliminar páginas",
    seoDescription:
      "Organizar PDF gratis: reordena, gira y elimina páginas de un PDF en tu navegador con vistas previas y descarga el PDF nuevo. Privado y sin subir nada.",
    keywords: [
      "organizar pdf",
      "ordenar páginas pdf",
      "reordenar páginas pdf",
      "eliminar páginas pdf",
      "borrar páginas de un pdf",
      "mover páginas pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige un PDF para ver todas sus páginas.",
      },
      {
        title: "Ordena las páginas",
        description:
          "Usa los botones bajo cada página para moverla, girarla o eliminarla, o arrastra las páginas a su sitio.",
      },
      {
        title: "Descarga",
        description: "Guarda el PDF reorganizado. Deshacer todos los cambios vuelve a empezar desde el original.",
      },
    ],
    features: [
      {
        title: "Mover, girar, eliminar",
        description:
          "Todas las operaciones de página en una sola vista, con vistas previas que se actualizan al momento.",
      },
      {
        title: "Arrastrar o botones",
        description:
          "Arrastra con el ratón o usa los botones, que también funcionan con el teclado y con lectores de pantalla.",
      },
      {
        title: "Sin pérdida",
        description:
          "Las páginas se reordenan, no se vuelven a renderizar, así que el texto sigue nítido y se puede buscar.",
      },
      {
        title: "Privado",
        description: "El PDF se reorganiza en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Girar una página reduce la calidad?",
        answer: "No. El giro se guarda como un ajuste de la página, así que no se redibuja ni se comprime nada.",
      },
      {
        question: "¿Puedo deshacer un cambio?",
        answer:
          "Sí. Deshacer todos los cambios devuelve cada página a su posición y giro originales. Tu archivo original nunca cambia.",
      },
      {
        question: "¿Puedo añadir páginas de otro PDF?",
        answer: "Combina primero los archivos con Unir PDF y luego organiza aquí el archivo unido.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Girar PDF",
    shortName: "Girar PDF",
    tagline: "Gira todas las páginas, o solo las que elijas, 90 o 180 grados. Funciona en tu dispositivo.",
    intro:
      "Girar PDF corrige páginas que se abren de lado o del revés, un problema habitual en documentos escaneados y fotos guardadas como PDF. Elige 90 grados a la derecha, 180 grados o 90 grados a la izquierda, y aplícalo a todas las páginas o solo a las que marques. Las vistas previas muestran el resultado antes de descargar. El giro se guarda como un ajuste de la página, así que el texto y las imágenes conservan toda su calidad, y nada sale de tu navegador.",
    seoTitle: "Girar PDF online – rotar páginas para siempre, gratis",
    seoDescription:
      "Girar PDF gratis: rota todas las páginas o solo algunas 90 o 180 grados en tu navegador y guarda el cambio de forma permanente. Privado, sin subir nada.",
    keywords: [
      "girar pdf",
      "rotar pdf",
      "girar páginas pdf",
      "rotar pdf y guardar",
      "girar pdf permanentemente",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige un PDF para ver sus páginas.",
      },
      {
        title: "Elige el giro",
        description: "Elige 90° a la derecha, 180° o 90° a la izquierda, para todas las páginas o las que marques.",
      },
      {
        title: "Descarga",
        description: "Guarda el PDF con las páginas giradas de forma permanente.",
      },
    ],
    features: [
      {
        title: "Todas o solo algunas páginas",
        description: "Corrige un escaneo de lado sin tocar el resto.",
      },
      {
        title: "Vista previa en directo",
        description: "Las vistas previas giran a medida que eliges, antes de guardar nada.",
      },
      {
        title: "Sin pérdida de calidad",
        description: "El giro es un ajuste de la página, así que no se redibuja nada.",
      },
      {
        title: "Privado",
        description: "El PDF se gira en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿El giro se guarda de forma permanente?",
        answer: "Sí. El PDF descargado se abre con las páginas giradas en cualquier lector de PDF.",
      },
      {
        question: "¿Puedo girar páginas en ángulos distintos?",
        answer: "Usa Organizar PDF, donde cada página tiene su propio botón de girar.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "add-page-numbers-pdf": {
    name: "Añadir números de página a PDF",
    shortName: "Números de página",
    tagline: "Numera las páginas de un PDF con la posición, el formato y el número inicial que elijas. Funciona en tu dispositivo.",
    intro:
      "Añadir números de página pone un número en cada página de un PDF, algo que suelen necesitar los informes, las tesis y los apuntes impresos. Elige una de seis posiciones arriba o abajo, un formato (1, 1 / N o – 1 –), el número inicial, el tamaño del texto y la distancia al borde. También puedes dejar sin número la primera página, como una portada. Una vista previa muestra cómo quedará el número. Los números se añaden en tu navegador, así que el documento nunca se sube.",
    seoTitle: "Numerar páginas de un PDF – gratis, sin subirlo",
    seoDescription:
      "Numerar páginas PDF gratis: elige la posición, el formato y el número inicial en tu navegador y deja la portada sin número. Privado y sin subir nada.",
    keywords: [
      "numerar páginas pdf",
      "añadir números de página pdf",
      "poner número de página en pdf",
      "paginar pdf",
      "insertar números de página pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige el PDF que quieres numerar.",
      },
      {
        title: "Elige el estilo",
        description: "Elige la posición, el formato, el número inicial, el tamaño y la distancia al borde.",
      },
      {
        title: "Salta la portada si hace falta",
        description: "Marca la opción para dejar la primera página sin número.",
      },
      {
        title: "Descarga",
        description: "Guarda el PDF numerado.",
      },
    ],
    features: [
      {
        title: "Seis posiciones",
        description: "Arriba o abajo, a la izquierda, al centro o a la derecha.",
      },
      {
        title: "Tres formatos",
        description: "Números simples, el estilo 1 / 12 o – 1 –.",
      },
      {
        title: "Cualquier número inicial",
        description: "Continúa la numeración de otro documento y salta una portada.",
      },
      {
        title: "Privado",
        description: "Los números se añaden en tu dispositivo; no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo empezar por un número distinto de 1?",
        answer: "Sí. Pon cualquier número en Empezar en, por ejemplo para continuar desde un capítulo anterior.",
      },
      {
        question: "¿Los números taparán mi contenido?",
        answer:
          "Se colocan en el margen de la página. Si tus páginas tienen márgenes muy pequeños, elige una distancia al borde menor o un tamaño de texto más pequeño.",
      },
      {
        question: "¿Por qué los números salen de lado en algunas páginas?",
        answer:
          "Algunos PDF guardan las páginas giradas. El número sigue la orientación guardada de la página, así que en esas páginas puede aparecer girado. Corrige antes el giro con Girar PDF u Organizar PDF.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "watermark-pdf": {
    name: "Marca de agua en PDF",
    shortName: "Marca de agua PDF",
    tagline: "Estampa un texto o un logotipo en las páginas de un PDF y arrástralo a su sitio. Funciona en tu dispositivo.",
    intro:
      "Marca de agua en PDF añade un sello como CONFIDENCIAL, BORRADOR, tu nombre o tu logotipo a las páginas de un PDF. Escribe el texto en cualquier idioma o elige una imagen de logotipo, ajusta su tamaño, opacidad y ángulo, y arrástralo donde quieras en la vista previa de la página, o usa los controles deslizantes de posición. Aplícalo a todas las páginas o a un rango de páginas. La marca de agua se añade en tu navegador, así que el documento nunca se sube.",
    seoTitle: "Poner marca de agua a un PDF – texto o logotipo",
    seoDescription:
      "Marca de agua PDF gratis: añade un texto o un logotipo a las páginas en tu navegador, ajusta tamaño, opacidad y ángulo y arrástralo. Sin subir nada.",
    keywords: [
      "marca de agua pdf",
      "poner marca de agua a un pdf",
      "añadir marca de agua pdf",
      "sello en pdf",
      "poner logo en pdf",
      "marca de agua confidencial pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige el PDF que quieres marcar.",
      },
      {
        title: "Crea la marca de agua",
        description: "Escribe el texto y elige su color, o elige una imagen de logotipo.",
      },
      {
        title: "Colócala",
        description:
          "Ajusta el tamaño, la opacidad y el ángulo, y arrástrala en la vista previa o usa los controles deslizantes.",
      },
      {
        title: "Descarga",
        description: "Elige todas las páginas o un rango y guarda el PDF con marca de agua.",
      },
    ],
    features: [
      {
        title: "Texto en cualquier idioma",
        description: "El texto se dibuja como imagen, así que todos los alfabetos y acentos se ven bien.",
      },
      {
        title: "Marcas de agua con logotipo",
        description: "Usa un logotipo en PNG, JPG, WebP o SVG.",
      },
      {
        title: "Arrastra a su sitio",
        description:
          "Mueve la marca de agua en la vista previa de la página o usa controles deslizantes que también funcionan con el teclado.",
      },
      {
        title: "Privado",
        description: "La marca de agua se añade en tu dispositivo; no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Se puede quitar la marca de agua más tarde?",
        answer:
          "Se añade como una imagen encima de la página. Alguien con un editor de PDF podría quitarla, así que una marca de agua disuade de copiar más que impedirlo.",
      },
      {
        question: "¿Puedo poner marca de agua solo en algunas páginas?",
        answer: "Sí. Elige Páginas y escribe un rango como 1-3, 5.",
      },
      {
        question: "¿La marca de agua tapa el texto?",
        answer:
          "Baja la opacidad para que la página siga siendo legible. Lo habitual en marcas de agua diagonales es un 15–30%.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "sign-pdf": {
    name: "Firmar PDF",
    shortName: "Firmar PDF",
    tagline: "Dibuja, escribe o sube tu firma y colócala en cualquier página de un PDF. Funciona en tu dispositivo.",
    intro:
      "Firmar PDF pone tu firma manuscrita en un documento sin imprimirlo ni escanearlo. Dibuja la firma con el ratón, el dedo o un lápiz óptico, escribe tu nombre o usa una foto de tu firma, cuyo fondo blanco se puede volver transparente. Después elige la página, ajusta el tamaño y arrastra la firma a su sitio o usa los controles deslizantes de posición. La firma se añade en tu navegador, así que ni el documento ni tu firma se suben nunca.",
    seoTitle: "Firmar PDF online – gratis y sin subir archivos",
    seoDescription:
      "Firmar PDF gratis: dibuja, escribe o usa una imagen de tu firma y colócala en cualquier página desde tu navegador. Privado y sin subir nada.",
    keywords: [
      "firmar pdf",
      "firmar pdf gratis",
      "firmar pdf online",
      "añadir firma a pdf",
      "poner firma en pdf",
      "firma electrónica pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige el documento que quieres firmar.",
      },
      {
        title: "Crea tu firma",
        description: "Dibújala, escribe tu nombre o elige una foto de tu firma.",
      },
      {
        title: "Colócala",
        description:
          "Elige la página, ajusta el tamaño y arrastra la firma a su sitio, o usa los controles deslizantes.",
      },
      {
        title: "Descarga",
        description: "Guarda el PDF firmado.",
      },
    ],
    features: [
      {
        title: "Tres formas de firmar",
        description: "Dibuja, escribe o sube una imagen, en tinta azul o negra.",
      },
      {
        title: "Firmas limpias a partir de fotos",
        description: "El fondo de papel de una foto de tu firma se puede volver transparente.",
      },
      {
        title: "Colocación precisa",
        description: "Arrastra en la vista previa o usa controles deslizantes que también funcionan con el teclado.",
      },
      {
        title: "Privado",
        description: "Tu documento y tu firma se quedan en tu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "¿Es una firma digital con validez legal?",
        answer:
          "Añade una imagen de tu firma, como firmar en papel. No es una firma digital certificada basada en un certificado. Muchos formularios cotidianos la aceptan, pero los contratos que exigen una firma electrónica certificada necesitan un servicio de firma específico.",
      },
      {
        question: "¿Puedo firmar en más de una página?",
        answer:
          "Firma una página, descarga el PDF, vuelve a abrir el PDF firmado y coloca la firma en la siguiente página.",
      },
      {
        question: "¿Se guarda mi firma en algún sitio?",
        answer: "No. Solo existe en tu navegador mientras la página está abierta y dentro del PDF que descargas.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "fill-pdf-form": {
    name: "Rellenar formulario PDF",
    shortName: "Rellenar formulario",
    tagline: "Rellena los campos de un formulario PDF y guárdalo, bloqueado si quieres. Funciona en tu dispositivo.",
    intro:
      "Rellenar formulario PDF encuentra los campos rellenables de un formulario PDF, como cuadros de texto, casillas y listas desplegables, y muestra cada uno con su nombre para que los completes rápido. Descarga el PDF rellenado o aplánalo para que las respuestas pasen a formar parte de la página y ya no se puedan cambiar. Es práctico para solicitudes, formularios de impuestos y documentos de inscripción. El formulario se rellena en tu navegador, así que tus datos personales nunca se suben.",
    seoTitle: "Rellenar formulario PDF online – gratis y privado",
    seoDescription:
      "Rellenar PDF gratis: completa formularios PDF rellenables en tu navegador, con campos de texto, casillas y listas. Aplana para bloquear. Sin subir nada.",
    keywords: [
      "rellenar pdf",
      "rellenar formulario pdf",
      "rellenar pdf online",
      "pdf rellenable",
      "completar formulario pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu formulario PDF",
        description: "Suelta o elige un PDF con campos rellenables.",
      },
      {
        title: "Rellena los campos",
        description: "Escribe en los campos de texto, marca casillas y elige en las listas.",
      },
      {
        title: "Bloquéalo si hace falta",
        description: "Marca Aplanar para que las respuestas formen parte de la página.",
      },
      {
        title: "Descarga",
        description: "Guarda el formulario completado.",
      },
    ],
    features: [
      {
        title: "Todos los campos habituales",
        description: "Cuadros de texto, texto de varias líneas, casillas, botones de opción y listas desplegables.",
      },
      {
        title: "Opción de aplanar",
        description: "Bloquea las respuestas para que el formulario no se pueda editar después.",
      },
      {
        title: "Campos accesibles",
        description:
          "Cada campo es un campo normal con etiqueta que funciona con el teclado y con lectores de pantalla.",
      },
      {
        title: "Privado",
        description: "Tus respuestas se quedan en tu dispositivo; no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué dice que mi PDF no tiene campos rellenables?",
        answer:
          "Algunos formularios son solo páginas impresas sin campos de formulario reales, y otros usan un formato antiguo (XFA) que esta herramienta no puede leer. Para formularios sin campos, añade una firma con Firmar PDF o imprímelos y rellénalos a mano.",
      },
      {
        question: "¿Qué hace Aplanar?",
        answer:
          "Convierte las respuestas en contenido normal de la página. El formulario se ve igual, pero nadie puede cambiar las respuestas ni los campos.",
      },
      {
        question: "¿Se admiten los campos de firma?",
        answer: "Los campos de firma y de botón se omiten. Usa Firmar PDF para colocar tu firma en la página.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "remove-pdf-metadata": {
    name: "Eliminar metadatos de PDF",
    shortName: "Metadatos PDF",
    tagline: "Consulta y elimina el autor, el título, el software y las fechas ocultos en un PDF. Funciona en tu dispositivo.",
    intro:
      "Los archivos PDF suelen llevar datos ocultos: el nombre del autor, el título del documento, el software con el que se creó y cuándo se creó y se modificó. Eliminar metadatos de PDF muestra lo que hay guardado en tu archivo y descarga una copia sin esos datos, algo útil antes de compartir un documento públicamente o enviar un CV. Las páginas en sí no cambian. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Eliminar metadatos de PDF – verlos y borrarlos gratis",
    seoDescription:
      "Eliminar metadatos PDF gratis: consulta el autor, el título, el software y las fechas ocultos en un PDF y bórralos en tu navegador. Sin subir nada.",
    keywords: [
      "eliminar metadatos pdf",
      "borrar metadatos pdf",
      "quitar autor pdf",
      "ver metadatos pdf",
      "limpiar metadatos pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige un PDF para ver la información guardada en él.",
      },
      {
        title: "Revisa lo encontrado",
        description: "La lista muestra el título, el autor, el software, las fechas y los metadatos XMP.",
      },
      {
        title: "Descarga la copia limpia",
        description: "Guarda una copia sin esa información.",
      },
    ],
    features: [
      {
        title: "Revisa antes de eliminar",
        description: "Cada dato guardado aparece con su valor.",
      },
      {
        title: "Información del documento y XMP",
        description: "Se vacían los dos lugares donde los PDF guardan metadatos.",
      },
      {
        title: "Páginas intactas",
        description: "El texto, las imágenes y el diseño quedan exactamente igual.",
      },
      {
        title: "Privado",
        description: "El PDF se limpia en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Qué se elimina exactamente?",
        answer:
          "La información del documento (título, autor, asunto, palabras clave, software de creación, productor y fechas) y el flujo de metadatos XMP.",
      },
      {
        question: "¿Elimina todo lo personal del PDF?",
        answer:
          "No. El texto de las páginas, los comentarios y los datos dentro de las imágenes incrustadas (como los datos EXIF de las fotos) no cambian. Revisa el contenido en sí antes de compartirlo.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "crop-pdf": {
    name: "Recortar PDF",
    shortName: "Recortar PDF",
    tagline: "Recorta los márgenes de todas las páginas de un PDF. Funciona en tu dispositivo.",
    intro:
      "Recortar PDF recorta los bordes de todas las páginas y quita márgenes blancos anchos, bordes del escáner o marcas de impresión para que el contenido llene la pantalla al leer en el móvil. Indica cuánto recortar por arriba, la derecha, abajo y la izquierda, y la vista previa muestra qué parte de la página se queda. El recorte se guarda como un ajuste de la página, así que el texto conserva toda su calidad. Todo ocurre en tu navegador, así que el documento nunca se sube.",
    seoTitle: "Recortar PDF online – quitar márgenes, gratis",
    seoDescription:
      "Recortar PDF gratis: recorta los márgenes de las páginas en tu navegador con vista previa en directo. Quita bordes blancos y del escáner. Sin subir nada.",
    keywords: [
      "recortar pdf",
      "recortar páginas pdf",
      "quitar márgenes pdf",
      "recortar márgenes pdf",
      "cortar página pdf",
    ],
    howToSteps: [
      {
        title: "Añade tu PDF",
        description: "Suelta o elige el PDF que quieres recortar.",
      },
      {
        title: "Ajusta los márgenes",
        description: "Usa los controles deslizantes de cada lado; la vista previa muestra lo que se queda.",
      },
      {
        title: "Descarga",
        description: "Guarda el PDF con todas las páginas recortadas.",
      },
    ],
    features: [
      {
        title: "Control de los cuatro lados",
        description: "Recorta arriba, a la derecha, abajo y a la izquierda por separado.",
      },
      {
        title: "Vista previa en directo",
        description: "La zona recortada aparece sombreada en la primera página.",
      },
      {
        title: "Sin pérdida de calidad",
        description: "Las páginas no se redibujan, así que el texto sigue nítido y se puede buscar.",
      },
      {
        title: "Privado",
        description: "El PDF se recorta en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Recortar reduce el tamaño del archivo?",
        answer:
          "No. La zona recortada se oculta, no se borra, así que el tamaño del archivo es más o menos el mismo. Un editor de PDF todavía puede mostrar la zona oculta.",
      },
      {
        question: "¿Puedo recortar páginas de forma distinta?",
        answer:
          "Se aplican los mismos márgenes a todas las páginas. Para recortar páginas de forma distinta, divide el PDF, recorta cada parte y vuelve a unirlas.",
      },
      {
        question: "¿Puedo usar un PDF protegido con contraseña?",
        answer:
          "Todavía no. Si un PDF necesita contraseña para abrirse, la herramienta te lo dirá. Ábrelo en un lector de PDF con la contraseña, guarda una copia sin ella y usa esa copia.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer:
          "No. Tu navegador abre y modifica el PDF en tu dispositivo, así que los contratos, extractos y otros documentos privados nunca salen de él.",
      },
    ],
  },
  "edit-pdf": {
    name: "Editar PDF",
    shortName: "Editar PDF",
    tagline:
      "Añade texto, imágenes, resaltados, dibujos, formas y enlaces a un PDF, o blanquea y censura partes de él. Gratis y funciona en tu dispositivo.",
    intro:
      "Editar PDF abre tu documento página a página y te permite añadirle cosas: escribe texto del tamaño y color que quieras, coloca un logotipo o un sello, resalta o subraya líneas, dibuja a mano alzada, añade recuadros, círculos y flechas, y haz que ciertas zonas abran una web. Blanquear tapa lo que no quieres mostrar, y Censurar elimina del archivo los datos privados para siempre. Mueve, cambia de tamaño y elimina lo que hayas añadido, deshaz cualquier paso y luego descarga el PDF editado. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Editar PDF online – editor de PDF gratis, sin subir nada",
    seoDescription:
      "Edita PDF en tu navegador: añade texto, imágenes, resaltados, dibujos, formas y enlaces, blanquea o censura. Gratis, sin registro y sin subir nada.",
    keywords: [
      "editar pdf",
      "editor de pdf",
      "editar pdf online gratis",
      "añadir texto a pdf",
      "anotar pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF. Sus páginas se abren en el editor.",
      },
      {
        title: "Añade lo que necesites",
        description:
          "Elige una herramienta y toca o arrastra sobre la página. Mueve, cambia de tamaño o elimina cualquier cosa que hayas añadido.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia editada. Tu archivo original no cambia.",
      },
    ],
    features: [
      {
        title: "Todo en un mismo editor",
        description:
          "Texto, imágenes, resaltados, dibujos, formas, enlaces, blanqueo y censura están en el mismo editor, así que puedes combinarlos.",
      },
      {
        title: "Deshacer y rehacer",
        description:
          "Mueve, cambia de tamaño o elimina cualquier cosa que hayas añadido, y deshaz un paso si cambias de opinión.",
      },
      {
        title: "Censura de verdad",
        description: "Las zonas censuradas se eliminan del archivo, no solo se tapan.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo cambiar el texto que ya tiene el PDF?",
        answer:
          "No directamente. Tápalo con Blanquear y escribe el texto nuevo encima. El texto antiguo sigue en el archivo, debajo, así que usa Censurar para cualquier cosa privada.",
      },
      {
        question: "¿Se puede buscar el texto que añado?",
        answer:
          "Sí. El texto que escribes es texto PDF real, así que se puede seleccionar, buscar y copiar, salvo en las páginas que censures.",
      },
      {
        question: "¿Funciona en el móvil?",
        answer: "Sí. Toca y arrastra con el dedo; para dibujar puedes usar el dedo o un lápiz óptico.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "add-text-to-pdf": {
    name: "Añadir texto a PDF",
    shortName: "Añadir texto",
    tagline:
      "Escribe texto en cualquier parte de una página PDF, con la fuente, el tamaño y el color que elijas. Gratis y funciona en tu dispositivo.",
    intro:
      "Añadir texto a PDF te permite escribir en un documento sin imprimirlo: rellena un formulario que no tiene campos, añade una nota, una fecha o una dirección, o rotula un plano. Toca donde debe empezar el texto, escríbelo y elige la fuente, el tamaño, el color y la negrita. Arrastra el texto para ajustar su posición y añade tantos textos como necesites, en tantas páginas como quieras. El texto que añades es texto PDF real, así que se mantiene nítido y se puede buscar. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Añadir texto a PDF – gratis, escribe en cualquier PDF",
    seoDescription:
      "Escribe texto en cualquier parte de un PDF desde tu navegador. Elige fuente, tamaño y color, colócalo con precisión y descárgalo. Gratis, sin subir nada.",
    keywords: [
      "añadir texto a pdf",
      "escribir en un pdf",
      "insertar texto en pdf",
      "escribir sobre un pdf",
      "agregar texto a pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Toca donde va el texto",
        description: "Escríbelo en el cuadro y elige la fuente, el tamaño y el color. Arrástralo a su sitio.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia con tu texto añadido.",
      },
    ],
    features: [
      {
        title: "Tu fuente, tamaño y color",
        description:
          "Sin serifa, con serifa o monoespaciada estilo máquina de escribir, de 6 a 72 pt, en negrita o normal y en cualquier color.",
      },
      {
        title: "Muchos idiomas",
        description: "Puedes escribir en alfabeto latino, griego y cirílico, y también en japonés y coreano.",
      },
      {
        title: "Texto nítido y que se puede buscar",
        description: "El texto es texto PDF real, no una imagen de él.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo rellenar un formulario que no tiene campos?",
        answer:
          "Sí. Toca cada línea en blanco y escribe. Para PDF con campos de formulario reales, Rellenar formulario PDF es más rápido.",
      },
      {
        question: "¿Puedo cambiar el texto que ya tiene el PDF?",
        answer:
          "No directamente. Tápalo con Blanquear y escribe el texto nuevo encima. El texto antiguo sigue en el archivo, debajo, así que usa Censurar para cualquier cosa privada.",
      },
      {
        question: "¿Puedo escribir en varias páginas?",
        answer:
          "Sí. Cambia de página con las flechas que hay sobre la página; lo que añadas en cada una se conserva.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "add-image-to-pdf": {
    name: "Añadir imagen a PDF",
    shortName: "Añadir imagen",
    tagline:
      "Coloca un logotipo, una foto o la imagen de un sello en cualquier página de un PDF y ajusta su tamaño. Gratis y funciona en tu dispositivo.",
    intro:
      "Añadir imagen a PDF pone una imagen en una página de tu documento: el logotipo de tu empresa en una carta, un sello en un certificado, una foto en un formulario o una firma escaneada. Toca donde debe ir la imagen y elígela en tu dispositivo. Arrástrala a su sitio y tira de la esquina para cambiar su tamaño; las proporciones se mantienen. Funcionan imágenes JPG, PNG con transparencia, WebP, GIF, TIFF y HEIC del iPhone. Todo ocurre en tu navegador, así que no se sube ni el PDF ni la imagen.",
    seoTitle: "Añadir imagen a PDF – inserta un logo o una foto, gratis",
    seoDescription:
      "Inserta un logotipo, una foto o un sello en un PDF desde tu navegador. Colócalo, cambia el tamaño y descarga. JPG, PNG, HEIC. Gratis, sin subir nada.",
    keywords: [
      "añadir imagen a pdf",
      "insertar imagen en pdf",
      "poner logo en pdf",
      "agregar foto a pdf",
      "insertar sello en pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF y ve a la página que quieras.",
      },
      {
        title: "Añade la imagen",
        description:
          "Toca la página donde debe ir y elige una imagen. Arrástrala y cambia su tamaño desde la esquina.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia con la imagen añadida.",
      },
    ],
    features: [
      {
        title: "Se mantiene la transparencia",
        description: "Un logotipo PNG con fondo transparente sigue siendo transparente en la página.",
      },
      {
        title: "Cualquier formato de imagen",
        description: "Puedes colocar imágenes JPG, PNG, WebP, GIF, TIFF y HEIC del iPhone.",
      },
      {
        title: "Se mantienen las proporciones",
        description: "Al cambiar el tamaño se conserva la forma de la imagen, así que nunca se ve estirada.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Se verá nítida la imagen?",
        answer:
          "Las imágenes se colocan con hasta 2000 píxeles de ancho, lo que se ve nítido al imprimir en tamaños normales.",
      },
      {
        question: "¿Puedo poner el mismo logotipo en todas las páginas?",
        answer:
          "Para repetir un logotipo en todas las páginas, Marca de agua en PDF lo hace en un solo paso. Aquí colocas las imágenes una a una.",
      },
      {
        question: "¿Funciona en el móvil?",
        answer: "Sí. Toca y arrastra con el dedo; para dibujar puedes usar el dedo o un lápiz óptico.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "highlight-pdf": {
    name: "Resaltar PDF",
    shortName: "Resaltar",
    tagline: "Resalta, subraya o tacha texto en un PDF. Gratis y funciona en tu dispositivo.",
    intro:
      "Resaltar PDF te permite marcar un documento como lo harías con un rotulador: arrastra sobre una línea para resaltarla en amarillo, verde, rosa o azul, subrayarla o tacharla. Es útil para estudiar, revisar un contrato o enseñar a alguien exactamente qué parte importa. Las marcas se pueden mover, cambiar de tamaño y eliminar, y puedes deshacer cualquier paso. El resaltado es translúcido, así que el texto de debajo se sigue leyendo. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Resaltar PDF online – subrayador de PDF gratis",
    seoDescription:
      "Resalta, subraya o tacha texto en un PDF desde tu navegador. Cuatro colores de subrayador, deshacer y sin registro. No se sube nada.",
    keywords: [
      "resaltar pdf",
      "subrayar pdf",
      "resaltar texto en pdf",
      "subrayador pdf",
      "tachar texto en pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Arrastra sobre el texto",
        description: "Elige Resaltado, Subrayado o Tachado y un color, y arrastra sobre la línea.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia marcada.",
      },
    ],
    features: [
      {
        title: "Colores de subrayador",
        description: "Amarillo, verde, rosa y azul, o el color que elijas.",
      },
      {
        title: "Subrayado y tachado",
        description: "Marca cambios o correcciones además de los puntos clave.",
      },
      {
        title: "El texto se sigue leyendo",
        description: "Los resaltados son translúcidos, como un subrayador de verdad.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿El resaltado se ajusta solo al texto?",
        answer:
          "No. Cubre la zona sobre la que arrastras, así que arrastra a lo largo de la línea que quieras marcar. Después puedes cambiar su tamaño desde la esquina.",
      },
      {
        question: "¿Puedo quitar un resaltado?",
        answer: "Sí. Selecciónalo y pulsa Eliminar, o usa Deshacer.",
      },
      {
        question: "¿Funciona en el móvil?",
        answer: "Sí. Toca y arrastra con el dedo; para dibujar puedes usar el dedo o un lápiz óptico.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "draw-on-pdf": {
    name: "Dibujar en PDF",
    shortName: "Dibujar en PDF",
    tagline:
      "Dibuja a mano alzada en las páginas de un PDF con el dedo, el ratón o un lápiz óptico. Gratis y funciona en tu dispositivo.",
    intro:
      "Dibujar en PDF convierte la página en una hoja en la que puedes escribir. Rodea un detalle en un plano, esboza una idea, marca casillas, añade notas a mano o tus iniciales. Elige un color y un grosor y dibuja con el dedo en el móvil o la tableta, con un lápiz óptico o con el ratón. Cada trazo se puede mover o eliminar, y puedes deshacer tantos pasos como necesites. El dibujo se guarda como líneas nítidas, no como una imagen borrosa. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Dibujar en PDF – anotaciones a mano alzada gratis",
    seoDescription:
      "Dibuja en las páginas de un PDF desde tu navegador con el dedo, el ratón o un lápiz óptico. Elige color y grosor, deshaz y descarga. Gratis, sin subir nada.",
    keywords: [
      "dibujar en pdf",
      "escribir a mano en pdf",
      "dibujar sobre un pdf",
      "anotar pdf a mano",
      "herramienta de dibujo pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Dibuja en la página",
        description: "Elige un color y un grosor y dibuja con el dedo, el lápiz o el ratón.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia con tu dibujo.",
      },
    ],
    features: [
      {
        title: "Dedo, lápiz óptico o ratón",
        description: "El dibujo responde al tacto, al lápiz y al ratón.",
      },
      {
        title: "Líneas nítidas",
        description: "Los trazos se guardan como líneas vectoriales que siguen nítidas al ampliar.",
      },
      {
        title: "Deshacer y rehacer",
        description:
          "Mueve, cambia de tamaño o elimina cualquier cosa que hayas añadido, y deshaz un paso si cambias de opinión.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo firmar con esto?",
        answer:
          "Puedes, pero Firmar PDF crea una firma más limpia que puedes escribir, dibujar o elegir como imagen y colocar con precisión.",
      },
      {
        question: "¿Puedo borrar parte de un trazo?",
        answer: "Cada trazo es una sola pieza: selecciónalo y elimínalo, o deshazlo, y vuelve a dibujarlo.",
      },
      {
        question: "¿Funciona en el móvil?",
        answer: "Sí. Toca y arrastra con el dedo; para dibujar puedes usar el dedo o un lápiz óptico.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "add-shapes-to-pdf": {
    name: "Añadir formas a PDF",
    shortName: "Añadir formas",
    tagline:
      "Añade rectángulos, círculos, líneas y flechas a un PDF para señalar cosas. Gratis y funciona en tu dispositivo.",
    intro:
      "Añadir formas a PDF te ayuda a marcar planos, capturas de pantalla, formularios e informes: dibuja un recuadro alrededor de un total, rodea un error o añade una flecha que apunte a la parte que necesita atención. Elige rectángulo, elipse, línea o flecha, un color y un grosor de línea, y arrastra sobre la página. Los rectángulos y las elipses pueden tener solo contorno o ir rellenos. Las formas se pueden mover, cambiar de tamaño y eliminar en cualquier momento. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Añadir formas a PDF – recuadros, círculos y flechas",
    seoDescription:
      "Añade rectángulos, círculos, líneas y flechas a un PDF desde tu navegador. Elige color y grosor, mueve y cambia el tamaño. Gratis, sin subir nada.",
    keywords: [
      "añadir formas a pdf",
      "dibujar flecha en pdf",
      "dibujar recuadro en pdf",
      "marcar con un círculo en pdf",
      "anotar pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Dibuja la forma",
        description: "Elige rectángulo, elipse, línea o flecha y arrastra sobre la página.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia marcada.",
      },
    ],
    features: [
      {
        title: "Cuatro formas",
        description: "Rectángulos, elipses, líneas y flechas.",
      },
      {
        title: "Contorno o relleno",
        description: "Dibuja solo el contorno de un recuadro o rellénalo de un color sólido.",
      },
      {
        title: "Nítidas a cualquier tamaño",
        description: "Las formas se guardan como gráficos vectoriales.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo cambiar una forma después de dibujarla?",
        answer:
          "Sí. Selecciónala para moverla, cambiar su tamaño desde la esquina o cambiar su color y grosor.",
      },
      {
        question: "¿Puedo tapar texto con una forma?",
        answer:
          "Un rectángulo relleno tapa lo que hay debajo, pero el contenido sigue en el archivo. Usa Censurar para eliminar información privada.",
      },
      {
        question: "¿Funciona en el móvil?",
        answer: "Sí. Toca y arrastra con el dedo; para dibujar puedes usar el dedo o un lápiz óptico.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "add-links-to-pdf": {
    name: "Añadir enlaces a PDF",
    shortName: "Añadir enlaces",
    tagline:
      "Haz que cualquier zona de una página PDF abra una web o un correo. Gratis y funciona en tu dispositivo.",
    intro:
      "Añadir enlaces a PDF hace que tu documento sea clicable: convierte una dirección web impresa en un folleto en un enlace real, enlaza un logotipo a tu web o haz que una dirección de correo abra un mensaje nuevo. Arrastra sobre el texto o la zona que debe ser clicable y escribe la dirección. Los enlaces funcionan en cualquier lector de PDF, en ordenadores y móviles. La página se ve igual; el contorno discontinuo que ves mientras editas no se guarda. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Añadir enlaces a PDF – haz clicable el texto, gratis",
    seoDescription:
      "Añade enlaces web y de correo clicables a cualquier zona de un PDF desde tu navegador. Funcionan en cualquier lector de PDF. Gratis, sin subir nada.",
    keywords: [
      "añadir enlace a pdf",
      "insertar hipervínculo en pdf",
      "poner enlace en pdf",
      "enlace clicable pdf",
      "hipervínculo pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Arrastra sobre la zona clicable",
        description: "Luego escribe la dirección web, como example.com, o una dirección de correo.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia con enlaces que funcionan.",
      },
    ],
    features: [
      {
        title: "Enlaces web y de correo",
        description: "Los enlaces abren una web o un correo nuevo a la dirección que escribas.",
      },
      {
        title: "Invisibles en la página",
        description: "La página no cambia; solo la zona se vuelve clicable.",
      },
      {
        title: "Funciona en cualquier lector",
        description:
          "Los enlaces PDF estándar se abren en Acrobat, en los navegadores, en Vista Previa y en las apps del móvil.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que escribir https://?",
        answer:
          "No. Escribe example.com y se añade https://. Una dirección de correo se convierte en un enlace mailto.",
      },
      {
        question: "¿Puede un enlace llevar a otra página del PDF?",
        answer: "Todavía no. Aquí los enlaces abren webs y direcciones de correo.",
      },
      {
        question: "¿Por qué no funciona el enlace en mi visor?",
        answer:
          "Algunos visores de imágenes y las vistas previas de las apps de mensajería no abren enlaces de PDF. Abre el archivo en un lector de PDF o en un navegador.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "whiteout-pdf": {
    name: "Blanquear PDF",
    shortName: "Blanquear",
    tagline:
      "Tapa partes de una página PDF con recuadros blancos y escribe encima si quieres. Gratis y funciona en tu dispositivo.",
    intro:
      "Blanquear PDF funciona como la cinta correctora: arrastra sobre una fecha equivocada, un precio antiguo o una línea que no quieras mostrar, y un recuadro blanco la tapa. Añade texto nuevo encima con la herramienta Texto para hacer una corrección. Si la página no es blanca, elige un color que coincida. Blanquear solo tapa el contenido; el texto original sigue en el archivo y aún se puede copiar o encontrar con una búsqueda. Para eliminar información privada para siempre, usa Censurar PDF. Todo ocurre en tu navegador, así que el documento nunca sale de tu dispositivo.",
    seoTitle: "Blanquear PDF – cinta correctora para PDF, gratis",
    seoDescription:
      "Tapa partes de un PDF con recuadros blancos y escribe correcciones encima, desde tu navegador. Gratis, sin registro y sin subir nada.",
    keywords: [
      "tapar texto en pdf",
      "borrar texto de pdf",
      "corrector pdf",
      "tipex pdf",
      "ocultar texto en pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Arrastra sobre lo que quieras tapar",
        description:
          "Un recuadro blanco lo tapa. Si lo necesitas, añade texto nuevo encima con la herramienta Texto.",
      },
      {
        title: "Descarga el PDF",
        description: "Guarda la copia corregida.",
      },
    ],
    features: [
      {
        title: "Escribe encima",
        description: "Combina Blanquear con texto para corregir una fecha, un nombre o un número.",
      },
      {
        title: "Igual que el fondo",
        description: "Elige cualquier color para las páginas que no sean blancas.",
      },
      {
        title: "Mueve y cambia el tamaño",
        description: "Ajusta cada recuadro hasta que tape exactamente lo que quieres.",
      },
      {
        title: "Edición privada",
        description: "El PDF se edita en tu dispositivo y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿El texto tapado desaparece de verdad?",
        answer:
          "No. Blanquear lo oculta, pero sigue en el archivo, donde se puede copiar o encontrar con una búsqueda. Usa Censurar PDF para eliminarlo.",
      },
      {
        question: "¿Puedo cambiar una palabra del PDF?",
        answer: "Tapa la palabra con Blanquear y escribe la palabra nueva encima con la herramienta Texto.",
      },
      {
        question: "¿Funciona en el móvil?",
        answer: "Sí. Toca y arrastra con el dedo; para dibujar puedes usar el dedo o un lápiz óptico.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "redact-pdf": {
    name: "Censurar PDF",
    shortName: "Censurar PDF",
    tagline:
      "Tapa con negro la información privada de un PDF y elimínala del archivo para siempre. Gratis y funciona en tu dispositivo.",
    intro:
      "Censurar PDF oculta nombres, números de cuenta, direcciones y otros datos privados antes de compartir un documento, y los elimina de verdad. Arrastra recuadros negros sobre lo que debe desaparecer. Al descargar, cada página censurada se convierte en una imagen con los recuadros incrustados, así que el texto de debajo desaparece del archivo: no se puede copiar, buscar ni recuperar quitando el recuadro. Los valores de los formularios y los comentarios de esas páginas también se eliminan. Las páginas sin censurar se quedan como estaban. Todo ocurre en tu navegador, así que el documento nunca se sube.",
    seoTitle: "Censurar PDF – elimina texto privado para siempre, gratis",
    seoDescription:
      "Tapa con negro y elimina para siempre la información privada de un PDF, desde tu navegador. Censura real, no solo tapar. Gratis, sin subir nada.",
    keywords: [
      "censurar pdf",
      "censurar pdf gratis",
      "ocultar información en pdf",
      "anonimizar pdf",
      "eliminar datos confidenciales de pdf",
    ],
    howToSteps: [
      {
        title: "Abre tu PDF",
        description: "Arrastra o elige un PDF.",
      },
      {
        title: "Arrastra sobre la información privada",
        description: "Tapa con un recuadro negro cada nombre, número o línea que deba desaparecer.",
      },
      {
        title: "Descarga el PDF censurado",
        description: "Comprueba el resultado y comparte la copia censurada, no el original.",
      },
    ],
    features: [
      {
        title: "Eliminado de verdad",
        description: "El texto tapado se borra del archivo, no se esconde bajo un recuadro.",
      },
      {
        title: "También valores de formularios y comentarios",
        description: "Los campos rellenados y los comentarios de las páginas censuradas también se eliminan.",
      },
      {
        title: "El resto de páginas, intactas",
        description: "Solo las páginas con zonas censuradas se convierten en imágenes.",
      },
      {
        title: "Sin subir nada",
        description: "Los documentos privados se censuran en tu dispositivo; nadie más los ve.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué ya no puedo seleccionar texto en la página censurada?",
        answer:
          "Para eliminar el texto oculto para siempre, la página entera se guarda como imagen. El texto de las demás páginas se puede seguir seleccionando.",
      },
      {
        question: "¿Es lo mismo un rectángulo negro en un editor de PDF normal?",
        answer:
          "No. Un recuadro normal solo tapa el texto, que todavía se puede copiar o encontrar con una búsqueda. Esta herramienta lo elimina.",
      },
      {
        question: "¿Se elimina algo más?",
        answer:
          "En las páginas censuradas también se eliminan los campos de formulario, los comentarios y los enlaces, y se descartan las etiquetas de accesibilidad del documento, porque pueden repetir el texto de la página. El título y los datos del autor se mantienen; Eliminar metadatos de PDF los borra.",
      },
      {
        question: "¿Se sube mi PDF?",
        answer: "No. El PDF se abre y se guarda en tu navegador, así que se queda en tu dispositivo.",
      },
    ],
  },
  "passport-photo-maker": {
    name: "Crear foto de pasaporte",
    shortName: "Foto de pasaporte",
    tagline: "Haz una foto de pasaporte o visado del tamaño correcto, con fondo liso opcional, e imprime varias en una sola hoja.",
    intro:
      "Crear foto de pasaporte convierte una foto normal en una foto de pasaporte, visado o documento de identidad del tamaño exacto que necesitas: 35 × 45 mm, 2 × 2 pulgadas, 33 × 48 mm o un tamaño personalizado. Mueve y amplía la foto hasta que la coronilla y la barbilla queden sobre las líneas guía, cambia el fondo por blanco, gris claro o azul claro si lo necesitas, y descarga una foto a 300 DPI o una hoja para imprimir en papel fotográfico de 4 × 6 pulgadas o A4, con líneas de corte. Todo ocurre en tu navegador, así que tu foto nunca se sube.",
    seoTitle: "Foto de pasaporte online – 35×45 mm y 2×2 in, gratis",
    seoDescription:
      "Foto de pasaporte online: crea fotos de pasaporte y visado de 35×45 mm, 2×2 in o a medida, con fondo blanco y hoja para imprimir 4×6 o A4. Gratis y privado.",
    keywords: [
      "foto de pasaporte",
      "foto tamaño pasaporte",
      "foto carnet online",
      "foto 35x45",
      "foto para visado online",
      "imprimir fotos de pasaporte",
    ],
    howToSteps: [
      {
        title: "Añade una foto",
        description: "Elige una foto clara, de frente, con luz uniforme y expresión neutra.",
      },
      {
        title: "Elige el tamaño",
        description: "Elige 35 × 45 mm, 2 × 2 in, 33 × 48 mm o introduce un tamaño personalizado.",
      },
      {
        title: "Encuádrala",
        description: "Arrastra o usa los controles deslizantes para que la coronilla y la barbilla queden sobre las líneas discontinuas.",
      },
      {
        title: "Elige el fondo",
        description: "Mantenlo o cámbialo por blanco, gris claro o azul claro.",
      },
      {
        title: "Descarga",
        description: "Guarda una foto o una hoja para imprimir en papel de 4 × 6 in o A4, como JPG o PDF.",
      },
    ],
    features: [
      {
        title: "Tamaños habituales incluidos",
        description: "35 × 45 mm, 2 × 2 in y 33 × 48 mm, además de cualquier tamaño personalizado en milímetros.",
      },
      {
        title: "Guías para la cabeza",
        description: "Unas líneas discontinuas y un óvalo muestran dónde debe quedar la cabeza.",
      },
      {
        title: "Fondos lisos",
        description: "Un modelo de IA en tu dispositivo cambia el fondo por blanco, gris claro o azul claro.",
      },
      {
        title: "Hojas para imprimir",
        description: "Llena papel fotográfico de 4 × 6 in o A4 con copias y líneas de corte, a 300 DPI.",
      },
    ],
    faqs: [
      {
        question: "¿Aceptarán mi foto?",
        answer:
          "Depende de la oficina donde la presentes. Cada país fija sus normas sobre tamaño, posición de la cabeza, fondo, expresión y gafas. Esta herramienta acierta con el tamaño y la composición; consulta las normas oficiales antes de imprimir.",
      },
      {
        question: "¿Cómo imprimo la hoja al tamaño correcto?",
        answer:
          "Imprime al 100 % (tamaño real), no con «Ajustar a la página». La opción PDF usa el tamaño exacto del papel, así que las fotos se imprimen a su tamaño real en cualquier impresora.",
      },
      {
        question: "¿Qué resolución tienen las fotos?",
        answer:
          "300 DPI, el estándar para imprimir fotos. Una foto de 35 × 45 mm tiene 413 × 531 píxeles.",
      },
      {
        question: "¿Cómo funciona el cambio de fondo?",
        answer:
          "Un modelo de IA se descarga una vez (unos 16 MB) y se ejecuta en tu navegador para separarte del fondo. Revisa los bordes alrededor del pelo antes de imprimir.",
      },
      {
        question: "¿Se sube mi foto?",
        answer:
          "No. La foto se procesa en tu navegador, en tu dispositivo, y no se envía nada a ningún servidor.",
      },
    ],
  },
  "signature-extractor": {
    name: "Extraer firma",
    shortName: "Firma en PNG",
    tagline: "Convierte una foto de tu firma en un PNG limpio con fondo transparente.",
    intro:
      "Extraer firma toma una foto o un escaneo de tu firma en papel y la convierte en una imagen limpia con solo la tinta sobre un fondo transparente. Ignora las sombras y la luz irregular de las fotos hechas con el móvil, recorta el espacio vacío alrededor de la firma y puede cambiar el color de la tinta a negro o azul. Usa el PNG con Firmar PDF, en Word o en cualquier formulario que pida una imagen de la firma. La foto se procesa en tu navegador, así que tu firma nunca se sube.",
    seoTitle: "Extraer firma de una imagen – PNG transparente",
    seoDescription:
      "Extraer firma de una foto: conviértela en un PNG transparente en tu navegador. Quita el papel y las sombras, recorta y cambia el color. Gratis y privado.",
    keywords: [
      "firma transparente",
      "firma en png",
      "quitar fondo a una firma",
      "extraer firma de imagen",
      "firma digital desde foto",
    ],
    howToSteps: [
      {
        title: "Firma en papel blanco",
        description: "Usa un bolígrafo oscuro y haz una foto con buena luz, o escanea la página.",
      },
      {
        title: "Añade la foto",
        description: "Suelta o elige la foto. La firma se extrae al instante.",
      },
      {
        title: "Ajústala",
        description: "Ajusta la sensibilidad y elige tinta original, negra o azul.",
      },
      {
        title: "Descarga",
        description: "Guarda el PNG transparente.",
      },
    ],
    features: [
      {
        title: "Sin problemas con las sombras",
        description: "Cada punto se compara con el papel que lo rodea, así que la luz irregular no deja manchas grises.",
      },
      {
        title: "Bordes suaves",
        description: "Los bordes de los trazos se difuminan suavemente en lugar de verse dentados.",
      },
      {
        title: "Recorte automático",
        description: "Se elimina el papel vacío alrededor de la firma.",
      },
      {
        title: "Privado",
        description: "Tu firma se queda en tu dispositivo.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo consigo el mejor resultado?",
        answer:
          "Firma con un bolígrafo oscuro en papel blanco liso y haz la foto de frente, con luz de día y sin que tu sombra caiga sobre la página.",
      },
      {
        question: "¿Por qué faltan partes de mi firma?",
        answer:
          "Los trazos tenues o finos pueden perderse. Sube la sensibilidad; si empieza a aparecer la textura del papel, bájala un poco.",
      },
      {
        question: "¿Puedo usarla para firmar un PDF?",
        answer:
          "Sí. En Firmar PDF, elige Imagen y selecciona el PNG que descargaste.",
      },
      {
        question: "¿Se sube mi firma?",
        answer:
          "No. Se procesa en tu navegador y nunca se envía a ningún sitio.",
      },
    ],
  },
  "change-image-dpi": {
    name: "Cambiar DPI de imagen",
    shortName: "Cambiar DPI",
    tagline: "Cambia los DPI de un JPG o PNG, por ejemplo a 300 DPI para imprimir o para formularios, sin cambiar sus píxeles.",
    intro:
      "Cambiar DPI de imagen fija el valor de resolución guardado en un archivo JPG o PNG, como 300 DPI para imprimir o el valor que pide un formulario de solicitud. Los píxeles no se tocan, así que la calidad y el tamaño del archivo siguen igual: solo cambia el tamaño de impresión, y la herramienta lo muestra en centímetros y pulgadas. Actualiza los dos sitios donde un JPG puede guardar los DPI, para que Windows, Mac y las apps de fotos lean todos el nuevo valor. Todo funciona en tu navegador, así que la imagen nunca se sube.",
    seoTitle: "Cambiar DPI de una imagen a 300 online – gratis",
    seoDescription:
      "Cambiar DPI de un JPG o PNG a 300, 200, 72 o cualquier valor en tu navegador. Los píxeles no cambian y ves el tamaño de impresión. Gratis y privado.",
    keywords: [
      "cambiar dpi",
      "cambiar dpi de una imagen",
      "convertir imagen a 300 dpi",
      "cambiar dpi de foto",
      "aumentar dpi de imagen",
      "convertidor de dpi",
    ],
    howToSteps: [
      {
        title: "Añade tu imagen",
        description: "Suelta o elige un JPG o PNG. WebP y HEIC se convierten primero a JPG.",
      },
      {
        title: "Elige los DPI",
        description: "Elige 72, 96, 150, 200, 300 o 600, o escribe cualquier valor.",
      },
      {
        title: "Comprueba el tamaño de impresión",
        description: "Mira de qué tamaño se imprimirá la imagen con esos DPI.",
      },
      {
        title: "Descarga",
        description: "Guarda la imagen con los nuevos DPI.",
      },
    ],
    features: [
      {
        title: "Sin pérdida de calidad",
        description: "Solo cambia el valor de DPI; los datos de la imagen no se tocan.",
      },
      {
        title: "Se lee en todas partes",
        description: "Se actualizan tanto la resolución JFIF como la EXIF de un JPG, así que todas las apps muestran los mismos DPI.",
      },
      {
        title: "Tamaño de impresión a la vista",
        description: "Mira el tamaño de impresión en centímetros y pulgadas antes de descargar.",
      },
      {
        title: "Privado",
        description: "La imagen se cambia en tu navegador y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Cambiar los DPI mejora la calidad?",
        answer:
          "No. Los DPI son solo una etiqueta que indica a las impresoras de qué tamaño imprimir. Para tener más detalle necesitas más píxeles, y ninguna herramienta puede crearlos de verdad.",
      },
      {
        question: "Un formulario pide 200 DPI y un tamaño en centímetros. ¿Qué hago?",
        answer:
          "Fija aquí los DPI y comprueba el tamaño de impresión. Si no coincide, cambia el tamaño de la imagen a los píxeles que pide el formulario: centímetros ÷ 2,54 × DPI. Por ejemplo, 3,5 cm a 200 DPI son 276 píxeles.",
      },
      {
        question: "¿Por qué mi imagen dice «Sin definir»?",
        answer:
          "Muchas fotos del móvil y capturas de pantalla no guardan los DPI. Entonces la mayoría de las apps suponen 72 o 96. Fijar un valor aquí lo soluciona.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer:
          "No. El cambio se hace en tu navegador, en tu dispositivo.",
      },
    ],
  },
  "blur-background": {
    name: "Desenfocar fondo",
    shortName: "Desenfocar fondo",
    tagline: "Desenfoca el fondo de una foto como el modo retrato de una cámara y mantén a la persona nítida. Funciona en tu dispositivo.",
    intro:
      "Desenfocar fondo da a cualquier foto el fondo suave y desenfocado del modo retrato de una cámara. Un modelo de IA encuentra a la persona en tu dispositivo y luego desenfoca el fondo mientras el sujeto se mantiene nítido, sin halo borroso alrededor de los bordes. Un control deslizante ajusta la intensidad del desenfoque, y guardas el resultado como JPG o PNG. No se sube nada: la foto y el modelo se quedan en tu navegador.",
    seoTitle: "Desenfocar fondo de foto online – Efecto retrato gratis",
    seoDescription:
      "Desenfocar fondo de una foto online y mantener a la persona nítida, como en modo retrato. Intensidad ajustable, funciona en tu navegador, gratis y privado.",
    keywords: [
      "desenfocar fondo",
      "desenfocar fondo de foto",
      "modo retrato online",
      "difuminar fondo de foto",
      "efecto bokeh online",
      "desenfocar fondo de imagen online",
    ],
    howToSteps: [
      {
        title: "Añade una foto",
        description: "Suelta, elige o pega una foto de una persona. También funcionan las fotos HEIC de iPhone.",
      },
      {
        title: "Espera a que se detecte el sujeto",
        description: "El modelo de IA encuentra a la persona en tu dispositivo. La primera vez descarga unos 16 MB.",
      },
      {
        title: "Ajusta el desenfoque",
        description: "Mueve el control Intensidad del desenfoque hasta que el fondo quede como quieres.",
      },
      {
        title: "Descarga",
        description: "Guarda la foto como JPG, o como PNG para obtener la mejor calidad.",
      },
    ],
    features: [
      {
        title: "Efecto modo retrato",
        description: "El fondo se suaviza mientras la persona queda nítida.",
      },
      {
        title: "Sin halo",
        description: "El desenfoque rellena la zona detrás del sujeto con el fondo que la rodea, así que los bordes quedan limpios.",
      },
      {
        title: "Ajustable",
        description: "Elige desde un suavizado ligero hasta un desenfoque intenso.",
      },
      {
        title: "Privado",
        description: "La foto se procesa en tu navegador y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Funciona con fotos sin personas?",
        answer:
          "Está pensado para fotos de personas. Con mascotas y objetos suele funcionar, pero el modelo puede pasar por alto partes de ellos; en esos casos, revisa los bordes antes de guardar.",
      },
      {
        question: "¿Por qué la primera foto tarda más?",
        answer:
          "El modelo de IA se descarga una vez (unos 16 MB) y se queda en tu navegador. Después, las fotos se procesan en pocos segundos.",
      },
      {
        question: "¿Perderá calidad mi foto?",
        answer:
          "La persona mantiene la resolución completa. Las fotos muy grandes (de más de unos 16 megapíxeles) se reducen primero para que funcionen en móviles; la página te avisa cuando ocurre.",
      },
      {
        question: "¿Se sube mi foto?",
        answer:
          "No. La detección del sujeto y el desenfoque se hacen en tu dispositivo.",
      },
    ],
  },
  "change-background": {
    name: "Cambiar fondo",
    shortName: "Cambiar fondo",
    tagline: "Sustituye el fondo de una foto por un color u otra imagen. El sujeto se recorta en tu dispositivo.",
    intro:
      "Cambiar fondo sustituye el fondo de una foto por un color sólido o una imagen que elijas. Un modelo de IA recorta a la persona en tu dispositivo y luego la coloca sobre el nuevo fondo, escalado para llenar todo el encuadre. Elige blanco para un aspecto limpio de producto o de perfil, cualquier color del selector o tu propia imagen de fondo, y descarga el resultado como JPG o PNG. La foto nunca se sube.",
    seoTitle: "Cambiar fondo de foto online – Color o imagen, gratis",
    seoDescription:
      "Cambiar fondo de una foto a blanco, a cualquier color o a tu propia imagen. El sujeto se recorta en tu navegador. Gratis, privado y sin registro.",
    keywords: [
      "cambiar fondo de foto",
      "cambiar fondo",
      "poner fondo blanco a una foto",
      "reemplazar fondo de imagen",
      "cambiar fondo de imagen online",
      "editor de fondo de fotos",
    ],
    howToSteps: [
      {
        title: "Añade una foto",
        description: "Suelta, elige o pega una foto. También funcionan las fotos HEIC de iPhone.",
      },
      {
        title: "Espera al recorte",
        description: "El modelo de IA separa al sujeto en tu dispositivo. La primera vez descarga unos 16 MB.",
      },
      {
        title: "Elige el fondo",
        description: "Elige un color o usa una imagen como nuevo fondo.",
      },
      {
        title: "Descarga",
        description: "Guarda la foto como JPG o PNG.",
      },
    ],
    features: [
      {
        title: "Color o imagen",
        description: "Colores listos para usar, un selector de color o cualquier imagen tuya.",
      },
      {
        title: "Llena el encuadre",
        description: "La imagen de fondo se escala y se centra para cubrir toda la foto.",
      },
      {
        title: "Resolución completa",
        description: "El resultado mantiene el tamaño de tu foto.",
      },
      {
        title: "Privado",
        description: "Todo ocurre en tu navegador; no se sube nada.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo conseguir un fondo transparente?",
        answer:
          "Sí: usa Quitar fondo, que guarda un PNG sin ningún fondo.",
      },
      {
        question: "¿Funciona con productos y mascotas?",
        answer:
          "Funciona mejor con personas. Para productos, mascotas y objetos, el modelo Máxima calidad de Quitar fondo da bordes más limpios; después puedes añadir un fondo en cualquier editor.",
      },
      {
        question: "¿Por qué la primera foto tarda más?",
        answer:
          "El modelo de IA se descarga una vez (unos 16 MB) y se queda en tu navegador, así que las siguientes fotos tardan solo unos segundos.",
      },
      {
        question: "¿Se sube mi foto?",
        answer:
          "No. El recorte y el nuevo fondo se hacen en tu dispositivo.",
      },
    ],
  },
  "image-to-text": {
    name: "Imagen a texto",
    shortName: "Imagen a texto",
    tagline: "Copia el texto de una foto, captura de pantalla o escaneo (OCR) en 10 idiomas. La imagen se lee en tu dispositivo.",
    intro:
      "Imagen a texto lee las palabras de una foto, una captura de pantalla o una página escaneada y te las da como texto que puedes copiar, editar o guardar como archivo TXT. Usa Tesseract OCR en tu navegador, con inglés, español, francés, alemán, portugués, italiano, japonés, coreano, indonesio y turco. Una barra de progreso muestra cuánto lleva, y si la imagen está demasiado borrosa para un resultado fiable, la página te lo dice. La imagen nunca se sube.",
    seoTitle: "Imagen a texto – OCR online gratis",
    seoDescription:
      "Imagen a texto: extrae el texto de imágenes, capturas y escaneos con OCR gratis en 10 idiomas. Copia o descarga el texto. En tu navegador, sin subir nada.",
    keywords: [
      "imagen a texto",
      "extraer texto de imagen",
      "ocr online",
      "convertir imagen a texto",
      "foto a texto",
      "pasar imagen a texto",
    ],
    howToSteps: [
      {
        title: "Añade una imagen",
        description: "Suelta, elige o pega una foto, captura de pantalla o escaneo con texto.",
      },
      {
        title: "Comprueba el idioma",
        description: "El idioma de la página ya viene elegido; cámbialo si el texto está en otro.",
      },
      {
        title: "Espera al texto",
        description: "El texto aparece en cuanto se lee. Puedes corregirlo directamente en el cuadro.",
      },
      {
        title: "Copia o descarga",
        description: "Usa Copiar texto, o Descargar texto (TXT) para guardarlo como archivo TXT.",
      },
    ],
    features: [
      {
        title: "10 idiomas",
        description: "Incluidos japonés y coreano. Cada idioma descarga de 1 a 4 MB una sola vez.",
      },
      {
        title: "Resultado editable",
        description: "Corrige cualquier palabra en el cuadro antes de copiarla o guardarla.",
      },
      {
        title: "Sincero sobre la calidad",
        description: "Aparece un aviso cuando la imagen es demasiado borrosa o pequeña para leerla con fiabilidad.",
      },
      {
        title: "Privado",
        description: "La imagen se lee en tu navegador y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Puede leer escritura a mano?",
        answer:
          "No de forma fiable. Está pensado para texto impreso, como documentos, capturas de pantalla, carteles y etiquetas. La letra a mano clara a veces funciona, pero cuenta con errores.",
      },
      {
        question: "¿Cómo consigo el mejor resultado?",
        answer:
          "Usa una foto nítida, bien iluminada y tomada de frente, con el texto grande en el encuadre. Las capturas de pantalla se leen casi a la perfección.",
      },
      {
        question: "¿Puede leer un PDF?",
        answer:
          "Convierte primero la página en imagen con PDF a JPG y luego añade esa imagen aquí.",
      },
      {
        question: "¿Se sube mi imagen?",
        answer:
          "No. El texto se lee en tu dispositivo; ni la imagen ni el texto salen de tu navegador.",
      },
    ],
  },
  "qr-code-generator": {
    name: "Generador de códigos QR",
    shortName: "Generador QR",
    tagline: "Crea un código QR para un enlace, texto, red Wi-Fi, correo, teléfono o contacto, con tus colores y tu logotipo, en PNG o SVG.",
    intro:
      "Generador de códigos QR crea un código QR para un enlace web, texto sin formato, el acceso a una red Wi-Fi, un correo, un número de teléfono o una tarjeta de contacto. Elige los colores, el tamaño y la corrección de errores, añade tu logotipo en el centro y descárgalo como imagen PNG o como archivo SVG, que se ve nítido a cualquier tamaño. Cada código se comprueba leyéndolo de nuevo, así sabes que se escanea antes de imprimirlo. Los códigos se crean en tu navegador, gratis, sin registro y sin caducidad.",
    seoTitle: "Generador de códigos QR gratis – Logo, colores, PNG y SVG",
    seoDescription:
      "Generador de códigos QR para enlaces, Wi-Fi, correo, teléfono o contactos, con tus colores y logotipo. En PNG o SVG. Gratis, sin registro, sin caducidad.",
    keywords: [
      "generador de códigos qr",
      "crear código qr",
      "generador de qr gratis",
      "código qr con logo",
      "código qr wifi",
      "código qr svg",
    ],
    howToSteps: [
      {
        title: "Elige el contenido",
        description: "Elige enlace, texto, Wi-Fi, correo, teléfono o contacto.",
      },
      {
        title: "Rellena los datos",
        description: "El código QR se actualiza mientras escribes.",
      },
      {
        title: "Dale estilo",
        description: "Ajusta los colores y el tamaño, y añade un logotipo si quieres.",
      },
      {
        title: "Descarga",
        description: "Guárdalo como PNG, o como SVG para imprimir y para tamaños grandes.",
      },
    ],
    features: [
      {
        title: "Comprobado antes de guardar",
        description: "El código se vuelve a leer automáticamente, y te avisamos si puede que no se escanee.",
      },
      {
        title: "Logotipo y colores",
        description: "Añade tu logotipo; se usa la corrección de errores más alta para que siga siendo legible.",
      },
      {
        title: "PNG y SVG",
        description: "El SVG se ve nítido a cualquier tamaño, ideal para imprimir.",
      },
      {
        title: "No caduca",
        description: "La información se guarda en el propio código, no en un servidor, así que funciona para siempre.",
      },
    ],
    faqs: [
      {
        question: "¿Caducan estos códigos QR?",
        answer:
          "No. Son códigos estáticos: todo se guarda en el propio patrón, sin redirección a través de nuestro servidor, así que funcionan para siempre.",
      },
      {
        question: "¿Puedo hacer seguimiento de los escaneos o cambiar el enlace después?",
        answer:
          "No. Para eso hace falta un código dinámico que pase cada escaneo por un servidor, y esta herramienta no lo hace. La ventaja es que nadie ve quién escanea tu código.",
      },
      {
        question: "¿Cómo funciona el código Wi-Fi?",
        answer:
          "Los móviles que lo escanean ofrecen conectarse a la red con el nombre y la contraseña que has introducido. La contraseña se guarda en el código, así que compártelo solo con quien le darías la contraseña.",
      },
      {
        question: "¿Qué corrección de errores elijo?",
        answer:
          "M sirve para la mayoría de los usos. H resiste más daños y se usa automáticamente con un logotipo; L crea el código más pequeño para textos largos.",
      },
      {
        question: "¿Se envía a algún sitio lo que escribo?",
        answer:
          "No. El código se crea en tu navegador.",
      },
    ],
  },
  "qr-code-reader": {
    name: "Lector de códigos QR",
    shortName: "Lector QR",
    tagline: "Lee un código QR desde una imagen o con tu cámara y mira el enlace, la contraseña Wi-Fi o el contacto que contiene antes de abrirlo.",
    intro:
      "Lector de códigos QR descifra códigos QR de una foto, una captura de pantalla o tu cámara. Muestra lo que contiene el código antes de que pase nada: la dirección web completa, una red Wi-Fi y su contraseña, un correo, un número de teléfono o una tarjeta de contacto que puedes guardar. Los enlaces nunca se abren solos, así que puedes revisarlos antes, una buena costumbre porque los códigos QR se usan a menudo para llevar a la gente a sitios falsos. Las imágenes y los fotogramas de la cámara se leen en tu dispositivo.",
    seoTitle: "Lector de códigos QR online – Desde imagen o cámara",
    seoDescription:
      "Escanear código QR desde una imagen, una captura o la cámara en tu navegador. Mira el enlace, la contraseña Wi-Fi o el contacto antes de abrirlo. Gratis.",
    keywords: [
      "lector de códigos qr",
      "escanear código qr desde imagen",
      "leer código qr",
      "escáner qr online",
      "lector qr online",
      "escanear qr desde captura de pantalla",
    ],
    howToSteps: [
      {
        title: "Añade el código",
        description: "Suelta o elige una imagen con un código QR, o usa Escanear con la cámara.",
      },
      {
        title: "Mira lo que contiene",
        description: "Los enlaces, los datos Wi-Fi, los correos, los teléfonos y los contactos se muestran con claridad.",
      },
      {
        title: "Comprueba antes de abrir",
        description: "Lee la dirección completa antes de pulsar Abrir enlace.",
      },
      {
        title: "Úsalo",
        description: "Copia el texto, abre el enlace, llama, escribe un correo o guarda el contacto.",
      },
    ],
    features: [
      {
        title: "Imagen o cámara",
        description: "Lee códigos en capturas de pantalla y fotos, o apunta la cámara a uno.",
      },
      {
        title: "Seguro por defecto",
        description: "Los enlaces nunca se abren automáticamente; primero ves la dirección completa.",
      },
      {
        title: "Wi-Fi y contactos",
        description: "Muestra las contraseñas de red y te deja guardar tarjetas de contacto.",
      },
      {
        title: "Privado",
        description: "Las imágenes y los fotogramas de la cámara se procesan en tu navegador y nunca se suben.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo escaneo un código QR que está en mi propia pantalla?",
        answer:
          "Haz una captura de pantalla y añádela aquí; no necesitas un segundo dispositivo.",
      },
      {
        question: "¿Por qué debo revisar los enlaces antes?",
        answer:
          "A veces los códigos QR de carteles, parquímetros y correos se sustituyen por otros que llevan a sitios falsos. Asegúrate de que la dirección es la que esperas antes de abrirla o de introducir ningún dato.",
      },
      {
        question: "La cámara no se inicia. ¿Qué puedo hacer?",
        answer:
          "Permite el acceso a la cámara para este sitio en los ajustes del navegador, o haz una foto del código y añade la imagen.",
      },
      {
        question: "¿Se envían mis imágenes o la cámara a algún sitio?",
        answer:
          "No. Todo se lee en tu dispositivo.",
      },
    ],
  },
  "barcode-generator": {
    name: "Generador de códigos de barras",
    shortName: "Códigos de barras",
    tagline: "Crea códigos de barras Code 128, EAN, UPC, ISBN, Code 39, ITF-14, GS1-128, Data Matrix, PDF417 y Aztec en PNG o SVG. Gratis y funciona en tu dispositivo.",
    intro:
      "Generador de códigos de barras crea los códigos que de verdad se imprimen: Code 128 para etiquetas de envío e inventario, EAN y UPC para productos, ISBN para libros, Code 39 para piezas y credenciales, ITF-14 para cajas, GS1-128 para logística, y los códigos 2D Data Matrix, PDF417 y Aztec. Escribe el número o el texto y el código de barras aparece al instante. Los dígitos de control se añaden por ti y los errores se señalan mientras escribes. Cada código de barras se vuelve a leer con un motor de escaneo antes de que lo descargues en PNG o SVG. Todo ocurre en tu navegador.",
    seoTitle: "Generador de códigos de barras – Gratis, PNG y SVG",
    seoDescription:
      "Crea códigos de barras Code 128, EAN-13, UPC, ISBN, Code 39, Data Matrix y PDF417 en tu navegador. Dígito de control incluido, probados, PNG o SVG.",
    keywords: [
      "generador de códigos de barras",
      "crear código de barras",
      "generador de código de barras gratis",
      "código de barras online",
      "generador code 128",
    ],
    howToSteps: [
      {
        title: "Elige el tipo de código",
        description: "Code 128 sirve para la mayoría de las etiquetas; elige EAN o UPC para productos e ISBN para libros.",
      },
      {
        title: "Escribe el número o el texto",
        description: "El código de barras aparece mientras escribes. Los problemas, como un dígito de control incorrecto, se explican.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o como SVG para imprimir.",
      },
    ],
    features: [
      {
        title: "Comprobado mientras escribes",
        description: "Las longitudes incorrectas, las letras en códigos solo numéricos y los dígitos de control erróneos se señalan antes de descargar.",
      },
      {
        title: "Probado al escanear",
        description: "Cada código de barras se vuelve a leer con un motor de escaneo, así sabes que funciona antes de imprimirlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
      {
        title: "Creado en tu dispositivo",
        description: "Los códigos se dibujan en tu navegador; nada de lo que escribes se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de código de barras debo usar?",
        answer:
          "Para tus propias etiquetas, inventario o envíos, Code 128: admite letras y dígitos y lo lee cualquier escáner. Para productos que se venden en tiendas, EAN-13 (o UPC-A en Norteamérica). Para libros, ISBN.",
      },
      {
        question: "¿Tengo que registrar el número?",
        answer:
          "Para vender un producto en tiendas, sí: los números EAN y UPC los asigna GS1, la organización que gestiona el sistema. Para tu propio stock, estanterías o uso interno, sirve cualquier número.",
      },
      {
        question: "¿A qué tamaño debo imprimirlo?",
        answer:
          "Mantén las barras nítidas y dales espacio: imprime al 100% (sin estirarlo), deja un margen blanco alrededor del código y usa barras oscuras sobre un fondo claro.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "ean-barcode-generator": {
    name: "Generador de códigos de barras EAN",
    shortName: "Código EAN",
    tagline: "Crea códigos de barras de producto EAN-13 y EAN-8 con el dígito de control añadido. Gratis y funciona en tu dispositivo.",
    intro:
      "EAN-13 es el código de barras de los productos en tiendas de todo el mundo, y EAN-8 su versión corta para envases pequeños. Escribe los 12 primeros dígitos (o 7 para EAN-8) y el dígito de control se calcula y se añade; si escribes los 13, la herramienta comprueba que el último es correcto. El código se dibuja según el estándar, con los dígitos debajo, y se vuelve a leer con un motor de escaneo antes de guardarlo como PNG o SVG. No se sube nada.",
    seoTitle: "Generador de código de barras EAN-13 – Gratis",
    seoDescription:
      "Crea códigos de barras EAN-13 y EAN-8 en tu navegador. El dígito de control se calcula solo, probado al escanear, PNG o SVG para imprimir. Gratis.",
    keywords: [
      "generador de código de barras ean",
      "generador ean 13",
      "crear código ean 13",
      "código de barras ean-8",
      "código ean gratis",
    ],
    howToSteps: [
      {
        title: "Escribe el número EAN",
        description: "12 dígitos para EAN-13 o 7 para EAN-8; el dígito de control se añade. Cambia el tipo en la lista.",
      },
      {
        title: "Ajusta el tamaño",
        description: "Define el ancho y la altura de las barras para tu etiqueta.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG, o como SVG para el diseño del envase.",
      },
    ],
    features: [
      {
        title: "Dígito de control calculado",
        description: "Si omites el último dígito, se calcula; si lo escribes, se comprueba.",
      },
      {
        title: "Probado al escanear",
        description: "Cada código de barras se vuelve a leer con un motor de escaneo, así sabes que funciona antes de imprimirlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
      {
        title: "Creado en tu dispositivo",
        description: "Los códigos se dibujan en tu navegador; nada de lo que escribes se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que registrar el número?",
        answer:
          "Para vender un producto en tiendas, sí: los números EAN y UPC los asigna GS1, la organización que gestiona el sistema. Para tu propio stock, estanterías o uso interno, sirve cualquier número.",
      },
      {
        question: "¿Qué diferencia hay entre EAN-13 y UPC-A?",
        answer:
          "Son el mismo sistema: un número UPC-A es un EAN-13 con un 0 delante. Las tiendas de todo el mundo leen los dos. Usa UPC-A si tu distribuidor te lo pide; si no, EAN-13.",
      },
      {
        question: "¿A qué tamaño debo imprimirlo?",
        answer:
          "Mantén las barras nítidas y dales espacio: imprime al 100% (sin estirarlo), deja un margen blanco alrededor del código y usa barras oscuras sobre un fondo claro.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "upc-barcode-generator": {
    name: "Generador de códigos de barras UPC",
    shortName: "Código UPC",
    tagline: "Crea códigos de barras de producto UPC-A y UPC-E para EE. UU. y Canadá, con el dígito de control añadido. Gratis y funciona en tu dispositivo.",
    intro:
      "UPC-A es el código de barras de 12 dígitos de los productos que se venden en EE. UU. y Canadá, y UPC-E su forma comprimida para artículos pequeños como latas y cosméticos. Escribe los 11 primeros dígitos de un UPC-A y el dígito de control se añade; escribe los 12 y se comprueba. UPC-E admite 6 dígitos, o de 7 a 8 que empiecen por 0 o 1. Cada código se dibuja según el estándar, se vuelve a leer con un motor de escaneo y se guarda como PNG o SVG. Todo ocurre en tu navegador.",
    seoTitle: "Generador de códigos UPC – UPC-A y UPC-E, gratis",
    seoDescription:
      "Crea códigos de barras UPC-A y UPC-E en tu navegador con el dígito de control añadido. Probados al escanear, PNG o SVG para envases. Gratis, sin subir nada.",
    keywords: [
      "generador de código de barras upc",
      "generador upc-a",
      "crear código upc",
      "código de barras upc-e",
      "código upc gratis",
    ],
    howToSteps: [
      {
        title: "Escribe el número UPC",
        description: "11 dígitos para UPC-A, o un número UPC-E; elige el tipo en la lista.",
      },
      {
        title: "Ajusta el tamaño",
        description: "Define el ancho y la altura de las barras para tu envase.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o como SVG para imprimir.",
      },
    ],
    features: [
      {
        title: "Dígito de control calculado",
        description: "El último dígito se calcula o se comprueba por ti.",
      },
      {
        title: "UPC-E para artículos pequeños",
        description: "Crea la versión corta UPC-E para latas, tubos y cajas pequeñas.",
      },
      {
        title: "Probado al escanear",
        description: "Cada código de barras se vuelve a leer con un motor de escaneo, así sabes que funciona antes de imprimirlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que registrar el número?",
        answer:
          "Para vender un producto en tiendas, sí: los números EAN y UPC los asigna GS1, la organización que gestiona el sistema. Para tu propio stock, estanterías o uso interno, sirve cualquier número.",
      },
      {
        question: "¿Cuándo debo usar UPC-E?",
        answer:
          "Solo cuando el envase es demasiado pequeño para UPC-A y tu número se puede comprimir; los números UPC-E empiezan por 0 o 1.",
      },
      {
        question: "¿A qué tamaño debo imprimirlo?",
        answer:
          "Mantén las barras nítidas y dales espacio: imprime al 100% (sin estirarlo), deja un margen blanco alrededor del código y usa barras oscuras sobre un fondo claro.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "isbn-barcode-generator": {
    name: "Generador de códigos de barras ISBN",
    shortName: "Código ISBN",
    tagline: "Crea el código de barras de la contracubierta de un libro a partir de su ISBN-13 o ISBN-10. Gratis y funciona en tu dispositivo.",
    intro:
      "El código de barras de la contracubierta de un libro es su ISBN escrito como EAN-13. Escribe tu ISBN-13, o un ISBN-10 antiguo que se convierte por ti, y el código aparece con el dígito de control verificado. Si escribes el ISBN con sus guiones, tal como figura en la página de créditos, la línea del ISBN se imprime encima de las barras, como esperan las editoriales y las librerías. Descárgalo en SVG para quien diseñe tu cubierta, o en PNG. Todo ocurre en tu navegador.",
    seoTitle: "Generador de códigos de barras ISBN – Gratis, SVG",
    seoDescription:
      "Crea el código de barras ISBN para la cubierta de tu libro en el navegador. ISBN-13 o ISBN-10, dígito de control verificado, SVG para imprimir. Gratis.",
    keywords: [
      "generador de código de barras isbn",
      "código de barras isbn",
      "crear código de barras para libro",
      "isbn a código de barras",
      "código isbn gratis",
    ],
    howToSteps: [
      {
        title: "Escribe el ISBN",
        description: "Usa los guiones de tu página de créditos para imprimir la línea del ISBN encima de las barras.",
      },
      {
        title: "Revisa la vista previa",
        description: "El dígito de control se verifica y el código se prueba al escanear.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como SVG para quien diseñe tu cubierta, o como PNG.",
      },
    ],
    features: [
      {
        title: "ISBN-10 convertido",
        description: "Un ISBN-10 antiguo se convierte en el ISBN-13 que necesita el código de barras.",
      },
      {
        title: "Línea del ISBN sobre las barras",
        description: "Con guiones, el ISBN legible se imprime encima del código de barras.",
      },
      {
        title: "Probado al escanear",
        description: "Cada código de barras se vuelve a leer con un motor de escaneo, así sabes que funciona antes de imprimirlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
    ],
    faqs: [
      {
        question: "¿Dónde consigo un ISBN?",
        answer:
          "En la agencia del ISBN de tu país, o a través de tu editorial o de tu plataforma de autoedición. Esta herramienta dibuja el código de barras de un ISBN que ya tienes.",
      },
      {
        question: "¿Puedo añadir el precio (el código pequeño de la derecha)?",
        answer:
          "Todavía no. El complemento de precio de 5 dígitos que se usa en EE. UU. no está incluido.",
      },
      {
        question: "¿A qué tamaño debo imprimirlo?",
        answer:
          "Mantén las barras nítidas y dales espacio: imprime al 100% (sin estirarlo), deja un margen blanco alrededor del código y usa barras oscuras sobre un fondo claro.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "data-matrix-generator": {
    name: "Generador de Data Matrix",
    shortName: "Data Matrix",
    tagline: "Crea códigos Data Matrix para piezas, etiquetas y envases a partir de un texto o un enlace. Gratis y funciona en tu dispositivo.",
    intro:
      "Data Matrix es un pequeño código 2D cuadrado que guarda mucha información en muy poco espacio, por eso se usa en componentes electrónicos, envases de medicamentos, muestras de laboratorio y etiquetas de envío. Escribe el texto, un número de serie o un enlace y el código aparece al instante, con el tamaño que da el ancho de módulo elegido. Lo leen las cámaras de los móviles y los escáneres industriales, y cada código se vuelve a leer antes de que lo descargues en PNG o SVG. Todo ocurre en tu navegador.",
    seoTitle: "Generador de Data Matrix – Código 2D gratis, PNG y SVG",
    seoDescription:
      "Crea códigos Data Matrix a partir de texto, números de serie o enlaces en tu navegador. Probados al escanear, PNG o SVG a cualquier tamaño. Gratis.",
    keywords: [
      "generador data matrix",
      "crear código data matrix",
      "código data matrix gratis",
      "generador de códigos 2d",
      "data matrix online",
    ],
    howToSteps: [
      {
        title: "Escribe el contenido",
        description: "Texto, un número de serie o un enlace.",
      },
      {
        title: "Elige el tamaño",
        description: "Define el ancho de módulo; Data Matrix sigue siendo legible impreso muy pequeño.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o SVG.",
      },
    ],
    features: [
      {
        title: "Cabe en poco espacio",
        description: "Guarda mucho más que un código de barras 1D en un cuadrado diminuto.",
      },
      {
        title: "Cualquier idioma",
        description: "El texto en cualquier idioma se guarda de forma que los escáneres lo lean correctamente.",
      },
      {
        title: "Probado al escanear",
        description: "Cada código de barras se vuelve a leer con un motor de escaneo, así sabes que funciona antes de imprimirlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
    ],
    faqs: [
      {
        question: "¿Data Matrix o código QR?",
        answer:
          "Los dos son códigos cuadrados. Data Matrix sigue siendo legible a tamaños más pequeños y es el estándar en piezas y medicamentos; el código QR es lo que esperan la mayoría de los móviles para los enlaces.",
      },
      {
        question: "¿Los móviles pueden leer Data Matrix?",
        answer:
          "Muchas apps de escaneo pueden, y también Google Lens. La app de cámara integrada de algunos móviles solo lee códigos QR.",
      },
      {
        question: "¿A qué tamaño debo imprimirlo?",
        answer:
          "Mantén las barras nítidas y dales espacio: imprime al 100% (sin estirarlo), deja un margen blanco alrededor del código y usa barras oscuras sobre un fondo claro.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "pdf417-generator": {
    name: "Generador de códigos PDF417",
    shortName: "PDF417",
    tagline: "Crea códigos de barras PDF417, el código apilado de billetes, documentos de identidad y documentos de envío. Gratis y funciona en tu dispositivo.",
    intro:
      "PDF417 es el código de barras ancho y apilado que ves en tarjetas de embarque, permisos de conducir y documentos de envío. Guarda cientos de caracteres, y los escáneres pueden leerlo aunque una parte esté dañada. Escribe o pega el texto y el código aparece; elige el ancho de módulo que encaje en tu diseño y descárgalo como PNG o SVG después de que un motor de escaneo lo haya vuelto a leer. Todo ocurre en tu navegador, así que los datos nunca salen de tu dispositivo.",
    seoTitle: "Generador de códigos PDF417 – Gratis, PNG y SVG",
    seoDescription:
      "Crea códigos de barras PDF417 para billetes, credenciales y documentos en tu navegador. Admite texto largo, probado al escanear, PNG o SVG. Gratis.",
    keywords: [
      "generador pdf417",
      "generador de código de barras pdf417",
      "código pdf 417",
      "código de barras apilado",
      "pdf417 online",
    ],
    howToSteps: [
      {
        title: "Escribe o pega el texto",
        description: "PDF417 admite texto largo, como varios campos de un formulario.",
      },
      {
        title: "Elige el tamaño",
        description: "Define el ancho de módulo para tu billete o documento.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o SVG.",
      },
    ],
    features: [
      {
        title: "Admite texto largo",
        description: "Cientos de caracteres en un solo código de barras.",
      },
      {
        title: "Resistente a daños",
        description: "La corrección de errores integrada lo mantiene legible aunque esté rayado.",
      },
      {
        title: "Probado al escanear",
        description: "Cada código de barras se vuelve a leer con un motor de escaneo, así sabes que funciona antes de imprimirlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
    ],
    faqs: [
      {
        question: "¿Puedo crear el código de barras de un permiso de conducir?",
        answer:
          "PDF417 es el tipo de código que se usa, pero los documentos de identidad oficiales siguen formatos estrictos y los emiten las autoridades. Usa esta herramienta para tus propios billetes, etiquetas y documentos.",
      },
      {
        question: "¿Qué escáneres leen PDF417?",
        answer:
          "La mayoría de los escáneres 2D y muchas apps de escaneo para móvil.",
      },
      {
        question: "¿A qué tamaño debo imprimirlo?",
        answer:
          "Mantén las barras nítidas y dales espacio: imprime al 100% (sin estirarlo), deja un margen blanco alrededor del código y usa barras oscuras sobre un fondo claro.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "barcode-scanner": {
    name: "Lector de códigos de barras",
    shortName: "Lector de códigos",
    tagline: "Lee EAN, UPC, Code 128, Code 39, Data Matrix, PDF417, QR y más desde una foto o con tu cámara. Gratis y funciona en tu dispositivo.",
    intro:
      "Lector de códigos de barras lee códigos de barras de una foto, una captura de pantalla o tu cámara: códigos de producto (EAN y UPC), ISBN de libros, etiquetas Code 128 y Code 39, cajas ITF, GS1 DataBar y códigos 2D como Data Matrix, PDF417, Aztec y códigos QR. Encuentra varios códigos en una misma imagen y muestra cada uno con su tipo, listo para copiar. La imagen de la cámara y las fotos se procesan en tu navegador y nunca se suben.",
    seoTitle: "Lector de códigos de barras online – Foto o cámara",
    seoDescription:
      "Escanea códigos EAN, UPC, Code 128, Data Matrix, PDF417 y QR desde una foto o con tu cámara, en tu navegador. Gratis, privado, sin subir nada.",
    keywords: [
      "lector de código de barras online",
      "escanear código de barras",
      "leer código de barras",
      "escanear código de barras desde imagen",
      "escáner de código de barras",
    ],
    howToSteps: [
      {
        title: "Añade una foto o usa la cámara",
        description: "Suelta una imagen, pega una captura de pantalla o apunta la cámara al código de barras.",
      },
      {
        title: "Lee el resultado",
        description: "Cada código encontrado se muestra con su tipo, como EAN-13 o Data Matrix.",
      },
      {
        title: "Cópialo",
        description: "Copia el número o el texto, o abre el enlace que contenga.",
      },
    ],
    features: [
      {
        title: "Decenas de tipos",
        description: "Códigos de barras 1D, códigos 2D y códigos QR en un solo lector.",
      },
      {
        title: "Varios a la vez",
        description: "Encuentra más de un código de barras en una imagen.",
      },
      {
        title: "Cámara o foto",
        description: "Escanea en directo con la cámara o desde cualquier imagen guardada.",
      },
      {
        title: "Privado",
        description: "Las imágenes y los fotogramas de la cámara se leen en tu dispositivo y nunca se suben.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué no encuentra mi código de barras?",
        answer:
          "Asegúrate de que está enfocado, bien iluminado y ocupa buena parte de la imagen, sin reflejos fuertes. Los códigos muy pequeños o borrosos no se pueden leer.",
      },
      {
        question: "¿Puede buscar el producto?",
        answer:
          "No. Lee el número del código de barras; no consulta bases de datos de productos, así que nada de lo que escaneas se envía a ningún sitio.",
      },
      {
        question: "¿La cámara necesita permiso?",
        answer:
          "Sí, tu navegador lo pide una vez. El vídeo se queda en tu dispositivo y se detiene en cuanto encuentra un código.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. Las fotos y los fotogramas de la cámara se leen en tu navegador y se quedan en tu dispositivo.",
      },
    ],
  },
  "wifi-qr-code-generator": {
    name: "Generador de códigos QR de Wi-Fi",
    shortName: "QR de Wi-Fi",
    tagline: "Crea un código QR que tus invitados escanean para conectarse a tu Wi-Fi sin escribir la contraseña. Gratis y funciona en tu dispositivo.",
    intro:
      "Un código QR de Wi-Fi permite que invitados, clientes y familia se conecten a tu red apuntando la cámara del móvil: sin deletrear una contraseña larga. Escribe el nombre de la red y la contraseña, elige el tipo de seguridad y el código aparece al instante. Los iPhone y los móviles Android lo entienden con la cámara integrada. Imprímelo para la nevera, una mesa de cafetería o una sala de reuniones. Tu contraseña se mete en el código dentro de tu navegador y nunca se sube.",
    seoTitle: "Código QR de Wi-Fi – Comparte el Wi-Fi sin contraseña",
    seoDescription:
      "Crea un código QR de Wi-Fi en tu navegador para que tus invitados se conecten escaneándolo. Funciona con la cámara de iPhone y Android. Gratis, sin subir nada.",
    keywords: [
      "generador qr wifi",
      "código qr wifi",
      "crear qr para wifi",
      "compartir wifi con qr",
      "qr contraseña wifi",
    ],
    howToSteps: [
      {
        title: "Escribe los datos de la red",
        description: "Nombre de la red (SSID), contraseña y tipo de seguridad.",
      },
      {
        title: "Dale estilo",
        description: "Elige colores o añade un logotipo si quieres.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o SVG e imprímelo o añádelo a tu diseño.",
      },
    ],
    features: [
      {
        title: "Funciona con la cámara del móvil",
        description: "Las cámaras de iPhone y Android ofrecen unirse a la red en cuanto lo ven.",
      },
      {
        title: "Comprobado antes de guardar",
        description: "El código QR se vuelve a leer en cuanto se crea, así sabes que se escanea.",
      },
      {
        title: "Tus colores y tu logotipo",
        description: "Elige los colores y añade un logotipo en el centro; la corrección de errores se sube para que se siga pudiendo escanear.",
      },
      {
        title: "Privado",
        description: "El código se crea en tu navegador. Tus datos no se suben ni se guardan.",
      },
    ],
    faqs: [
      {
        question: "¿Es seguro imprimir mi contraseña de Wi-Fi?",
        answer:
          "Cualquiera que escanee el código puede unirse a la red, igual que si le dijeras la contraseña. Usa una red de invitados en lugares públicos.",
      },
      {
        question: "¿Qué tipo de seguridad elijo?",
        answer:
          "WPA/WPA2/WPA3 para casi cualquier router moderno. WEP solo para los muy antiguos; «Ninguna» para redes sin contraseña.",
      },
      {
        question: "¿Caduca el código QR?",
        answer:
          "No. La información está dentro del propio código, no en un servidor, así que funciona mientras los datos sigan siendo correctos.",
      },
      {
        question: "¿Se guardan mis datos?",
        answer:
          "No. El código QR se crea en tu navegador y nada de lo que escribes sale de tu dispositivo.",
      },
    ],
  },
  "whatsapp-qr-code-generator": {
    name: "Generador de códigos QR de WhatsApp",
    shortName: "QR de WhatsApp",
    tagline: "Crea un código QR que abre un chat de WhatsApp con tu número y un mensaje listo para enviar. Gratis y funciona en tu dispositivo.",
    intro:
      "Un código QR de WhatsApp permite que tus clientes empiecen un chat contigo sin guardar antes tu número. Escribe tu número de teléfono con el prefijo internacional y, si quieres, un mensaje que ya aparecerá escrito, como «Hola, quiero reservar una mesa». Al escanear el código se abre WhatsApp en ese chat. Ponlo en tu escaparate, en la carta, en un folleto o en tu tarjeta de visita. El código se crea en tu navegador y no se sube nada.",
    seoTitle: "Generador de QR de WhatsApp – Enlace a chat, gratis",
    seoDescription:
      "Crea un código QR que abre un chat de WhatsApp con tu número y un mensaje listo. Para tiendas, cartas y tarjetas de visita. Gratis, sin subir nada.",
    keywords: [
      "código qr whatsapp",
      "generador qr whatsapp",
      "crear qr de whatsapp",
      "qr enlace whatsapp",
      "qr wa.me",
    ],
    howToSteps: [
      {
        title: "Escribe tu número",
        description: "Con el prefijo internacional, por ejemplo +44 7700 900123.",
      },
      {
        title: "Añade un mensaje",
        description: "Opcional: un texto que ya aparece escrito para quien lo escanea.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o SVG e imprímelo o añádelo a tu diseño.",
      },
    ],
    features: [
      {
        title: "Sin guardar el número",
        description: "La gente chatea contigo sin añadirte antes a sus contactos.",
      },
      {
        title: "Mensaje preparado",
        description: "Empieza la conversación con tus propias palabras.",
      },
      {
        title: "Comprobado antes de guardar",
        description: "El código QR se vuelve a leer en cuanto se crea, así sabes que se escanea.",
      },
      {
        title: "Tus colores y tu logotipo",
        description: "Elige los colores y añade un logotipo en el centro; la corrección de errores se sube para que se siga pudiendo escanear.",
      },
    ],
    faqs: [
      {
        question: "¿Funciona con WhatsApp Business?",
        answer:
          "Sí. Abre un chat con la cuenta de WhatsApp que use ese número, sea cual sea.",
      },
      {
        question: "¿Por qué necesito el prefijo internacional?",
        answer:
          "Los enlaces de WhatsApp usan el número internacional completo, así el código funciona desde cualquier país.",
      },
      {
        question: "¿Caduca el código QR?",
        answer:
          "No. La información está dentro del propio código, no en un servidor, así que funciona mientras los datos sigan siendo correctos.",
      },
      {
        question: "¿Se guardan mis datos?",
        answer:
          "No. El código QR se crea en tu navegador y nada de lo que escribes sale de tu dispositivo.",
      },
    ],
  },
  "vcard-qr-code-generator": {
    name: "Generador de códigos QR vCard",
    shortName: "QR vCard",
    tagline: "Crea un código QR que guarda tu nombre, teléfono, correo y sitio web en los contactos de un móvil. Gratis y funciona en tu dispositivo.",
    intro:
      "Un código QR vCard convierte una tarjeta de visita en un solo escaneo: la gente apunta la cámara y su móvil le ofrece guardarte como contacto, con tu nombre, teléfono, correo, empresa y sitio web ya rellenados. Escribe tus datos, dale estilo al código con tus colores o tu logotipo y descárgalo para tu tarjeta de visita, tu firma de correo, tu acreditación o tu stand. Los datos se meten en el código dentro de tu navegador y no se guardan en ningún sitio.",
    seoTitle: "Generador de QR vCard – QR para tarjeta de visita, gratis",
    seoDescription:
      "Crea un código QR vCard que guarda tus datos de contacto con un solo escaneo. Para tarjetas de visita y acreditaciones. Colores y logotipo, gratis.",
    keywords: [
      "código qr vcard",
      "qr tarjeta de visita",
      "qr de contacto",
      "generador qr vcard",
      "código qr con datos de contacto",
    ],
    howToSteps: [
      {
        title: "Escribe tus datos",
        description: "Nombre, teléfono, correo, empresa y sitio web.",
      },
      {
        title: "Dale estilo",
        description: "Elige colores o añade tu logotipo.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o SVG e imprímelo o añádelo a tu diseño.",
      },
    ],
    features: [
      {
        title: "Se guarda con un escaneo",
        description: "Los móviles ofrecen añadir el contacto con todos los campos rellenados.",
      },
      {
        title: "Comprobado antes de guardar",
        description: "El código QR se vuelve a leer en cuanto se crea, así sabes que se escanea.",
      },
      {
        title: "Tus colores y tu logotipo",
        description: "Elige los colores y añade un logotipo en el centro; la corrección de errores se sube para que se siga pudiendo escanear.",
      },
      {
        title: "Privado",
        description: "El código se crea en tu navegador. Tus datos no se suben ni se guardan.",
      },
    ],
    faqs: [
      {
        question: "¿Hace falta una app?",
        answer:
          "No. La cámara integrada de los iPhone y de la mayoría de los móviles Android reconoce los códigos QR de contacto.",
      },
      {
        question: "¿Puedo cambiar mis datos más adelante?",
        answer:
          "Los datos están dentro del código, así que crea un código nuevo cuando cambien.",
      },
      {
        question: "¿Caduca el código QR?",
        answer:
          "No. La información está dentro del propio código, no en un servidor, así que funciona mientras los datos sigan siendo correctos.",
      },
      {
        question: "¿Se guardan mis datos?",
        answer:
          "No. El código QR se crea en tu navegador y nada de lo que escribes sale de tu dispositivo.",
      },
    ],
  },
  "payment-qr-code-generator": {
    name: "Generador de códigos QR de pago",
    shortName: "QR de pago",
    tagline: "Crea un código QR para pagos UPI en la India o transferencias SEPA en Europa. Gratis y funciona en tu dispositivo.",
    intro:
      "Un código QR de pago permite que te paguen escaneando en lugar de escribir los datos de la cuenta. Elige UPI, el sistema que hay detrás de Google Pay, PhonePe, Paytm y BHIM en la India, o una transferencia SEPA, el código QR EPC que leen muchas apps bancarias en Europa. Escribe tu cuenta y, si quieres, un importe fijo y una nota; los datos se comprueban (formato del ID de UPI, dígitos de control del IBAN) antes de crear el código. No se sube nada, y ningún dinero pasa por este sitio.",
    seoTitle: "Generador de QR de pago – UPI y SEPA, gratis",
    seoDescription:
      "Crea un código QR de pago UPI o un código QR de transferencia SEPA (EPC) en tu navegador. Datos de la cuenta comprobados. Gratis, sin subir nada.",
    keywords: [
      "generador de qr de pago",
      "código qr para transferencia",
      "qr sepa",
      "código qr epc",
      "generador qr upi",
    ],
    howToSteps: [
      {
        title: "Elige UPI o SEPA",
        description: "UPI para la India; transferencia SEPA para cuentas bancarias en euros en Europa.",
      },
      {
        title: "Escribe la cuenta",
        description: "Tu ID de UPI o tu IBAN y tu nombre, más un importe y una nota opcionales.",
      },
      {
        title: "Descárgalo",
        description: "Guárdalo como PNG o SVG e imprímelo o añádelo a tu diseño.",
      },
    ],
    features: [
      {
        title: "Datos de la cuenta comprobados",
        description: "Se comprueba el formato de los ID de UPI y los dígitos de control de los IBAN.",
      },
      {
        title: "Importe fijo opcional",
        description: "Déjalo vacío para que quien paga escriba el importe.",
      },
      {
        title: "Comprobado antes de guardar",
        description: "El código QR se vuelve a leer en cuanto se crea, así sabes que se escanea.",
      },
      {
        title: "Privado",
        description: "El código se crea en tu navegador. Tus datos no se suben ni se guardan.",
      },
    ],
    faqs: [
      {
        question: "¿Qué apps lo leen?",
        answer:
          "Los códigos UPI se abren en apps UPI como Google Pay, PhonePe, Paytm y BHIM. Los códigos SEPA (EPC) los leen muchas apps bancarias de Alemania, Austria, los Países Bajos, Bélgica, Finlandia y otros países SEPA; no todos los bancos los admiten.",
      },
      {
        question: "¿Es seguro?",
        answer:
          "El código solo rellena los datos del pago; quien paga sigue confirmando el pago en su propia app. Revisa bien los datos antes de imprimir el código.",
      },
      {
        question: "¿Caduca el código QR?",
        answer:
          "No. La información está dentro del propio código, no en un servidor, así que funciona mientras los datos sigan siendo correctos.",
      },
      {
        question: "¿Se guardan mis datos?",
        answer:
          "No. El código QR se crea en tu navegador y nada de lo que escribes sale de tu dispositivo.",
      },
    ],
  },
  "bulk-qr-code-generator": {
    name: "Generador masivo de códigos QR",
    shortName: "QR masivos",
    tagline: "Crea cientos de códigos QR a la vez desde una lista o un CSV y descárgalos en un solo ZIP. Gratis y funciona en tu dispositivo.",
    intro:
      "Generador masivo de códigos QR convierte una lista en códigos QR: enlaces para cada página de producto, códigos para cada mesa, etiquetas de activos para todo un almacén. Pega un enlace o un texto por línea, o carga un archivo CSV, y si quieres pon un nombre de archivo delante de cada uno para identificar los archivos fácilmente. Elige PNG o SVG y un tamaño, y descárgalos todos en un solo ZIP. Se crean hasta 1.000 códigos en tu navegador; tu lista nunca se sube.",
    seoTitle: "Generador masivo de códigos QR – Gratis, de CSV a ZIP",
    seoDescription:
      "Crea hasta 1.000 códigos QR a la vez desde una lista o un CSV en tu navegador. Tus propios nombres de archivo, PNG o SVG, un solo ZIP. Gratis, sin subir nada.",
    keywords: [
      "generador de códigos qr masivo",
      "crear varios códigos qr",
      "generar códigos qr desde csv",
      "códigos qr en lote",
      "generar qr masivos",
    ],
    howToSteps: [
      {
        title: "Pega tu lista",
        description: "Un enlace o un texto por línea, o carga un archivo CSV o de texto.",
      },
      {
        title: "Pon nombre a los archivos",
        description: "Si quieres, empieza cada línea con un nombre de archivo y una coma.",
      },
      {
        title: "Descarga el ZIP",
        description: "Elige PNG o SVG y un tamaño, y guarda todos los códigos a la vez.",
      },
    ],
    features: [
      {
        title: "Hasta 1.000 códigos",
        description: "Crea un lote entero de una sola vez.",
      },
      {
        title: "Tus nombres de archivo",
        description: "Pon a cada archivo el nombre de tu producto, mesa o activo.",
      },
      {
        title: "PNG o SVG",
        description: "Imágenes para documentos, o vectores para imprimir.",
      },
      {
        title: "Privado",
        description: "Tu lista se procesa en tu navegador y nunca se sube.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo añado nombres de archivo?",
        answer:
          "Marca la opción y escribe cada línea como nombre, contenido (por ejemplo: mesa-4, https://example.com/menu). Sin nombres, los archivos se numeran.",
      },
      {
        question: "¿Puedo crear códigos de Wi-Fi o de contacto en lote?",
        answer:
          "Sí, si cada línea contiene el contenido completo del código, como WIFI:T:WPA;S:Name;P:password;;. Para códigos sueltos, el Generador de códigos QR lo rellena por ti.",
      },
      {
        question: "¿Hay un límite?",
        answer:
          "1.000 códigos por lote. Haz varios lotes si necesitas más.",
      },
      {
        question: "¿Se guardan mis datos?",
        answer:
          "No. El código QR se crea en tu navegador y nada de lo que escribes sale de tu dispositivo.",
      },
    ],
  },
  "bulk-barcode-generator": {
    name: "Generador masivo de códigos de barras",
    shortName: "Códigos de barras en lote",
    tagline: "Crea cientos de códigos de barras a la vez desde una lista o un CSV, comprobados y guardados en un solo ZIP. Gratis y funciona en tu dispositivo.",
    intro:
      "Generador masivo de códigos de barras crea un código de barras para cada línea de una lista: códigos de producto para un catálogo, etiquetas Code 128 para un almacén, ISBN para una colección de libros. Elige el tipo de código, pega los números o carga un CSV, y cada línea se comprueba mientras escribes: las longitudes incorrectas, las letras en códigos solo numéricos y los dígitos de control erróneos se listan por línea, y los dígitos de control que faltan se añaden. Descarga los válidos como PNG o SVG en un solo ZIP. Se crean hasta 1.000 códigos de barras en tu navegador y no se sube nada.",
    seoTitle: "Generador masivo de códigos de barras – CSV a ZIP",
    seoDescription:
      "Crea hasta 1.000 códigos de barras a la vez desde una lista o un CSV: Code 128, EAN, UPC, ISBN, Data Matrix y más. Comprobados, ZIP en PNG o SVG. Gratis.",
    keywords: [
      "generador de códigos de barras masivo",
      "crear varios códigos de barras",
      "generar códigos de barras desde csv",
      "códigos de barras en lote",
      "generar códigos de barras desde excel",
    ],
    howToSteps: [
      {
        title: "Elige el tipo de código",
        description: "Code 128, EAN-13, UPC-A, ISBN, Data Matrix y más.",
      },
      {
        title: "Pega tu lista",
        description: "Un número o texto por línea, con un nombre de archivo delante si quieres; los problemas se listan por línea.",
      },
      {
        title: "Descarga el ZIP",
        description: "Elige PNG o SVG y guarda todos los códigos válidos a la vez.",
      },
    ],
    features: [
      {
        title: "Comprobado mientras escribes",
        description: "Las longitudes incorrectas, las letras en códigos solo numéricos y los dígitos de control erróneos se señalan antes de descargar.",
      },
      {
        title: "Dígitos de control añadidos",
        description: "Los números EAN, UPC, ITF-14 e ISBN reciben su dígito de control cuando falta.",
      },
      {
        title: "Tus nombres de archivo",
        description: "Pon a cada archivo el nombre de su producto o artículo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG para documentos y etiquetas, SVG para imprenta y programas de diseño a cualquier tamaño.",
      },
    ],
    faqs: [
      {
        question: "¿Qué pasa con las líneas que tienen problemas?",
        answer:
          "Se listan con el motivo y se dejan fuera del ZIP; el resto se crea.",
      },
      {
        question: "¿Tengo que registrar el número?",
        answer:
          "Para vender un producto en tiendas, sí: los números EAN y UPC los asigna GS1, la organización que gestiona el sistema. Para tu propio stock, estanterías o uso interno, sirve cualquier número.",
      },
      {
        question: "¿Hay un límite?",
        answer:
          "1.000 códigos de barras por lote. Haz varios lotes si necesitas más.",
      },
      {
        question: "¿Se sube algo?",
        answer:
          "No. El código se crea en tu navegador, y lo que escribes se queda en tu dispositivo.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word a PDF",
    shortName: "Word → PDF",
    tagline: "Convierte documentos de Word a PDF conservando el diseño, las fuentes y las imágenes. Gratis, sin registro y sin marca de agua.",
    intro:
      "Word a PDF convierte documentos de Word en un PDF que se ve igual en cualquier dispositivo y está listo para enviar por correo, imprimir o subir a un portal. Acepta DOC, DOCX, ODT, RTF o TXT. Se conservan los encabezados, los pies de página, los números de página, las tablas y las imágenes. La conversión usa LibreOffice en nuestro servidor: tu archivo se envía por una conexión cifrada y se elimina en cuanto vuelve el PDF.",
    seoTitle: "Convertir Word a PDF gratis – sin registro",
    seoDescription:
      "Convertir Word a PDF online y gratis. Conserva el diseño, las fuentes y las imágenes. Sin registro ni marca de agua; los archivos se eliminan al momento.",
    keywords: [
      "convertir word a pdf",
      "word a pdf",
      "docx a pdf",
      "doc a pdf",
      "pasar word a pdf",
      "convertidor word a pdf gratis",
    ],
    howToSteps: [
      {
        title: "Elige tu archivo",
        description: "Suelta o elige un archivo DOC, DOCX, ODT, RTF o TXT de hasta 30 MB.",
      },
      {
        title: "Convierte",
        description: "Haz clic en «Convertir a PDF». El archivo se convierte en nuestro servidor, normalmente en unos segundos.",
      },
      {
        title: "Descarga el PDF",
        description: "El PDF se descarga automáticamente; puedes volver a descargarlo con el botón.",
      },
    ],
    features: [
      {
        title: "Diseño intacto",
        description: "El texto, las tablas, las imágenes y los saltos de página se quedan donde estaban.",
      },
      {
        title: "Fuentes comunes incluidas",
        description: "Fuentes métricamente compatibles con Calibri, Cambria, Arial y Times, además de fuentes Noto para la mayoría de los idiomas.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se guarda nada después de la conversión.",
      },
      {
        title: "Gratis",
        description: "Sin registro, sin marca de agua y sin límite diario.",
      },
    ],
    faqs: [
      {
        question: "¿Mi PDF se verá exactamente igual que el original?",
        answer:
          "En la mayoría de los documentos, sí. Las fuentes poco comunes que no están instaladas en el servidor se sustituyen por otras parecidas, y algunos diseños muy complejos pueden desplazarse ligeramente. Revisa el PDF antes de enviarlo.",
      },
      {
        question: "¿Aparecen los cambios controlados y los comentarios en el PDF?",
        answer:
          "El documento se convierte tal como se muestra al abrirlo, así que acepta o rechaza antes los cambios controlados si no quieres que se vean.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "excel-to-pdf": {
    name: "Excel a PDF",
    shortName: "Excel → PDF",
    tagline: "Convierte hojas de cálculo de Excel a PDF conservando el diseño, las fuentes y las imágenes. Gratis, sin registro y sin marca de agua.",
    intro:
      "Excel a PDF convierte hojas de cálculo de Excel en un PDF que se ve igual en cualquier dispositivo y está listo para enviar por correo, imprimir o subir a un portal. Acepta XLS, XLSX, ODS o CSV. Cada hoja con contenido pasa a formar parte del PDF, con la configuración de página guardada en el archivo. La conversión usa LibreOffice en nuestro servidor: tu archivo se envía por una conexión cifrada y se elimina en cuanto vuelve el PDF.",
    seoTitle: "Convertir Excel a PDF gratis – sin registro",
    seoDescription:
      "Convertir Excel a PDF online y gratis. Conserva el diseño, las fuentes y las imágenes. Sin registro ni marca de agua; los archivos se eliminan al momento.",
    keywords: [
      "convertir excel a pdf",
      "excel a pdf",
      "xlsx a pdf",
      "xls a pdf",
      "pasar excel a pdf",
      "csv a pdf",
    ],
    howToSteps: [
      {
        title: "Elige tu archivo",
        description: "Suelta o elige un archivo XLS, XLSX, ODS o CSV de hasta 30 MB.",
      },
      {
        title: "Convierte",
        description: "Haz clic en «Convertir a PDF». El archivo se convierte en nuestro servidor, normalmente en unos segundos.",
      },
      {
        title: "Descarga el PDF",
        description: "El PDF se descarga automáticamente; puedes volver a descargarlo con el botón.",
      },
    ],
    features: [
      {
        title: "Diseño intacto",
        description: "El texto, las tablas, las imágenes y los saltos de página se quedan donde estaban.",
      },
      {
        title: "Fuentes comunes incluidas",
        description: "Fuentes métricamente compatibles con Calibri, Cambria, Arial y Times, además de fuentes Noto para la mayoría de los idiomas.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se guarda nada después de la conversión.",
      },
      {
        title: "Gratis",
        description: "Sin registro, sin marca de agua y sin límite diario.",
      },
    ],
    faqs: [
      {
        question: "¿Mi PDF se verá exactamente igual que el original?",
        answer:
          "En la mayoría de los documentos, sí. Las fuentes poco comunes que no están instaladas en el servidor se sustituyen por otras parecidas, y algunos diseños muy complejos pueden desplazarse ligeramente. Revisa el PDF antes de enviarlo.",
      },
      {
        question: "¿Por qué mi hoja se divide en varias páginas?",
        answer:
          "El PDF sigue la configuración de impresión guardada en la hoja de cálculo. Para que una hoja quepa en una página, ajusta el escalado de impresión a «Ajustar hoja en una página» en Excel antes de convertir.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "powerpoint-to-pdf": {
    name: "PowerPoint a PDF",
    shortName: "PPT → PDF",
    tagline: "Convierte presentaciones de PowerPoint a PDF conservando el diseño, las fuentes y las imágenes. Gratis, sin registro y sin marca de agua.",
    intro:
      "PowerPoint a PDF convierte presentaciones de PowerPoint en un PDF que se ve igual en cualquier dispositivo y está listo para enviar por correo, imprimir o subir a un portal. Acepta PPT, PPTX u ODP. Cada diapositiva se convierte en una página del PDF. La conversión usa LibreOffice en nuestro servidor: tu archivo se envía por una conexión cifrada y se elimina en cuanto vuelve el PDF.",
    seoTitle: "Convertir PowerPoint a PDF gratis – sin registro",
    seoDescription:
      "Convertir PowerPoint a PDF online y gratis. Conserva el diseño, las fuentes y las imágenes. Sin registro ni marca de agua; los archivos se eliminan al momento.",
    keywords: [
      "convertir powerpoint a pdf",
      "powerpoint a pdf",
      "ppt a pdf",
      "pptx a pdf",
      "pasar presentación a pdf",
    ],
    howToSteps: [
      {
        title: "Elige tu archivo",
        description: "Suelta o elige un archivo PPT, PPTX u ODP de hasta 30 MB.",
      },
      {
        title: "Convierte",
        description: "Haz clic en «Convertir a PDF». El archivo se convierte en nuestro servidor, normalmente en unos segundos.",
      },
      {
        title: "Descarga el PDF",
        description: "El PDF se descarga automáticamente; puedes volver a descargarlo con el botón.",
      },
    ],
    features: [
      {
        title: "Diseño intacto",
        description: "El texto, las tablas, las imágenes y los saltos de página se quedan donde estaban.",
      },
      {
        title: "Fuentes comunes incluidas",
        description: "Fuentes métricamente compatibles con Calibri, Cambria, Arial y Times, además de fuentes Noto para la mayoría de los idiomas.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se guarda nada después de la conversión.",
      },
      {
        title: "Gratis",
        description: "Sin registro, sin marca de agua y sin límite diario.",
      },
    ],
    faqs: [
      {
        question: "¿Mi PDF se verá exactamente igual que el original?",
        answer:
          "En la mayoría de los documentos, sí. Las fuentes poco comunes que no están instaladas en el servidor se sustituyen por otras parecidas, y algunos diseños muy complejos pueden desplazarse ligeramente. Revisa el PDF antes de enviarlo.",
      },
      {
        question: "¿Se conservan las animaciones y los vídeos?",
        answer:
          "No. Un PDF muestra cada diapositiva como una página estática, así que las animaciones, las transiciones y los vídeos incrustados se omiten.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF a Word",
    shortName: "PDF → Word",
    tagline: "Convierte un PDF en un documento de Word editable (DOCX). Gratis y sin registro.",
    intro:
      "PDF a Word convierte un PDF en un archivo DOCX que puedes editar en Word, Google Docs o LibreOffice. Funciona mejor con PDF creados a partir de un documento de texto, como informes exportados, cartas y formularios; el texto, los párrafos y las imágenes pasan como contenido editable. Los diseños complejos, como revistas, columnas y formularios, pueden necesitar algún retoque después. Los PDF escaneados son solo imágenes de texto, así que pásalos antes por OCR de PDF. La conversión usa LibreOffice en nuestro servidor y el archivo se elimina justo después.",
    seoTitle: "PDF a Word – convertir a DOCX editable gratis",
    seoDescription:
      "PDF a Word online y gratis: convierte un PDF en un archivo DOCX editable. Ideal para PDF de texto; los archivos se eliminan justo después. Sin registro.",
    keywords: [
      "pdf a word",
      "convertir pdf a word",
      "pdf a docx",
      "pdf a word editable",
      "pasar pdf a word gratis",
    ],
    howToSteps: [
      {
        title: "Elige tu PDF",
        description: "Suelta o elige un PDF de hasta 30 MB.",
      },
      {
        title: "Convierte",
        description: "Haz clic en «Convertir a Word». El PDF se convierte en nuestro servidor.",
      },
      {
        title: "Edita el documento",
        description: "Abre el DOCX descargado en Word, Google Docs o LibreOffice.",
      },
    ],
    features: [
      {
        title: "Texto editable",
        description: "Los párrafos y los títulos se convierten en texto normal y editable.",
      },
      {
        title: "Imágenes conservadas",
        description: "Las imágenes del PDF se colocan en el documento.",
      },
      {
        title: "Funciona con Word y Docs",
        description: "El DOCX se abre en Microsoft Word, Google Docs y LibreOffice.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se conserva nada después de la conversión.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué mi documento se ve distinto del PDF?",
        answer:
          "Los PDF guardan posiciones exactas, mientras que en los documentos de Word el texto fluye. Los documentos sencillos se convierten bien; las columnas, los cuadros de texto y los formularios complejos pueden necesitar ajustes después de la conversión.",
      },
      {
        question: "¿Puede convertir un PDF escaneado?",
        answer:
          "Un PDF escaneado contiene imágenes de texto, no texto. Pásalo antes por OCR de PDF y después convierte a Word el PDF ya con búsqueda.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "compress-pdf": {
    name: "Comprimir PDF",
    shortName: "Comprimir PDF",
    tagline: "Reduce el tamaño de un PDF para correos y formularios de subida, con tres niveles de calidad. Gratis y sin registro.",
    intro:
      "Comprimir PDF reduce el tamaño de archivo de un PDF para que quepa en los adjuntos de correo y en los límites de tamaño de los portales de subida. Funciona mejor con PDF con fotos y escaneos, cuyas imágenes se vuelven a comprimir y se reducen; elige «Más pequeño» para pantallas y correo, «Equilibrado» para la mayoría de los usos o «Alta calidad» para conservar el detalle al imprimir. El resultado muestra cuánto se ha reducido el archivo, y si un PDF ya es compacto recibes el original en lugar de un archivo más grande. La compresión usa Ghostscript en nuestro servidor y el archivo se elimina justo después.",
    seoTitle: "Comprimir PDF – reducir el tamaño de un PDF gratis",
    seoDescription:
      "Comprimir PDF online y gratis para reducir su tamaño, con tres niveles de calidad. Muestra cuánto se reduce; los archivos se eliminan justo después. Sin registro.",
    keywords: [
      "comprimir pdf",
      "reducir tamaño pdf",
      "compresor pdf",
      "hacer pdf más pequeño",
      "comprimir pdf a 1 mb",
      "comprimir pdf gratis",
    ],
    howToSteps: [
      {
        title: "Elige tu PDF",
        description: "Suelta o elige un PDF de hasta 30 MB.",
      },
      {
        title: "Elige un nivel",
        description: "Más pequeño, Equilibrado o Alta calidad.",
      },
      {
        title: "Comprime y descarga",
        description: "Mira el tamaño antes y después y guarda el PDF más pequeño.",
      },
    ],
    features: [
      {
        title: "Tres niveles de calidad",
        description: "Desde archivos para correo hasta documentos con calidad de impresión.",
      },
      {
        title: "Nunca más grande",
        description: "Si un PDF no se puede reducir, recibes el original.",
      },
      {
        title: "Compresión real",
        description: "Las imágenes se vuelven a comprimir y el contenido duplicado se fusiona, algo que las herramientas del navegador no pueden hacer.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se conserva nada después de la compresión.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto se reducirá mi PDF?",
        answer:
          "Depende del contenido. Los escaneos y los PDF con muchas fotos suelen reducirse entre un 50 y un 90 %. Los PDF de solo texto ya son pequeños y puede que apenas cambien.",
      },
      {
        question: "¿El texto seguirá nítido?",
        answer:
          "Sí. El texto y los gráficos vectoriales se mantienen tal cual; solo se vuelven a comprimir las imágenes.",
      },
      {
        question: "Mi PDF debe pesar menos de un tamaño concreto. ¿Qué hago?",
        answer:
          "Prueba primero con «Más pequeño». Si sigue siendo demasiado grande, divide el PDF en partes con Dividir PDF y comprime cada parte.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "protect-pdf": {
    name: "Proteger PDF",
    shortName: "Proteger PDF",
    tagline: "Añade una contraseña a un PDF con cifrado AES-256. Gratis y sin registro.",
    intro:
      "Proteger PDF bloquea un PDF con una contraseña, de modo que no se puede abrir sin ella. Úsalo antes de enviar por correo extractos bancarios, nóminas, documentos de identidad o contratos. El PDF se cifra con AES-256, el cifrado más fuerte que admiten los lectores de PDF, y se abre con normalidad en Acrobat, navegadores y apps del móvil una vez introducida la contraseña. Elige una contraseña de al menos seis caracteres y guárdala bien: nadie puede recuperarla. El cifrado se hace con qpdf en nuestro servidor; el archivo y la contraseña se eliminan justo después.",
    seoTitle: "Proteger PDF con contraseña – AES-256, gratis",
    seoDescription:
      "Proteger PDF con contraseña online y gratis, con cifrado AES-256. El archivo y la contraseña se eliminan justo después de procesarlos. Sin registro.",
    keywords: [
      "proteger pdf con contraseña",
      "proteger pdf",
      "cifrar pdf",
      "bloquear pdf",
      "poner contraseña a un pdf",
    ],
    howToSteps: [
      {
        title: "Elige tu PDF",
        description: "Suelta o elige un PDF de hasta 30 MB.",
      },
      {
        title: "Elige una contraseña",
        description: "Escríbela dos veces; usa al menos seis caracteres.",
      },
      {
        title: "Protege y descarga",
        description: "Guarda el PDF bloqueado y apunta la contraseña en un lugar seguro.",
      },
    ],
    features: [
      {
        title: "Cifrado AES-256",
        description: "El cifrado de PDF más fuerte, compatible con todos los lectores modernos.",
      },
      {
        title: "Se abre en todas partes",
        description: "Acrobat, los navegadores y las apps del móvil piden la contraseña.",
      },
      {
        title: "La contraseña nunca se guarda",
        description: "Se usa una vez para cifrar el archivo y luego se descarta.",
      },
      {
        title: "Gratis",
        description: "Sin registro y sin marca de agua.",
      },
    ],
    faqs: [
      {
        question: "¿Y si olvido la contraseña?",
        answer:
          "No se puede recuperar, ni nosotros ni nadie. Conserva una copia del original sin proteger o guarda la contraseña en un lugar seguro.",
      },
      {
        question: "¿Puedo quitar la contraseña más adelante?",
        answer:
          "Sí. Usa Desbloquear PDF con la contraseña correcta.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "unlock-pdf": {
    name: "Desbloquear PDF",
    shortName: "Desbloquear PDF",
    tagline: "Quita la contraseña de un PDF que puedes abrir para que deje de pedirla. Gratis y sin registro.",
    intro:
      "Desbloquear PDF quita la contraseña de un PDF cuando la conoces, para que el archivo se abra sin pedirla cada vez y se pueda editar, unir o firmar con las demás herramientas de este sitio. También quita las restricciones de impresión y copia que tienen algunos PDF. Debes introducir la contraseña correcta: esta herramienta no adivina ni rompe contraseñas. El desbloqueo se hace con qpdf en nuestro servidor; el archivo y la contraseña se eliminan justo después.",
    seoTitle: "Desbloquear PDF – quitar la contraseña de un PDF gratis",
    seoDescription:
      "Desbloquear PDF online y gratis: quita la contraseña de un PDF que puedes abrir. El archivo y la contraseña se eliminan justo después. Sin registro.",
    keywords: [
      "desbloquear pdf",
      "quitar contraseña pdf",
      "eliminar contraseña de pdf",
      "desproteger pdf",
      "quitar protección pdf",
    ],
    howToSteps: [
      {
        title: "Elige tu PDF",
        description: "Suelta o elige el PDF protegido.",
      },
      {
        title: "Introduce la contraseña",
        description: "Escribe la contraseña que abre el PDF.",
      },
      {
        title: "Desbloquea y descarga",
        description: "Guarda una copia sin contraseña.",
      },
    ],
    features: [
      {
        title: "Se acabó pedir la contraseña",
        description: "La copia desbloqueada se abre directamente.",
      },
      {
        title: "Edítalo aquí",
        description: "Une, firma u organiza el PDF desbloqueado con las demás herramientas.",
      },
      {
        title: "Restricciones eliminadas",
        description: "También se quitan los límites de impresión y copia.",
      },
      {
        title: "La contraseña nunca se guarda",
        description: "Se usa una vez y luego se descarta junto con el archivo.",
      },
    ],
    faqs: [
      {
        question: "¿Puede desbloquear un PDF si no sé la contraseña?",
        answer:
          "No. Necesitas la contraseña que abre el archivo. Esta herramienta no adivina ni rompe contraseñas.",
      },
      {
        question: "¿Por qué dice que la contraseña es incorrecta?",
        answer:
          "Revisa las mayúsculas y los espacios. Los extractos bancarios suelen usar una combinación, como parte de tu nombre y tu fecha de nacimiento; el remitente suele explicar el formato.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR de PDF",
    shortName: "OCR PDF",
    tagline: "Haz que un PDF escaneado se pueda buscar y seleccionar reconociendo su texto. Gratis y sin registro.",
    intro:
      "OCR de PDF reconoce el texto de un PDF escaneado y lo añade como una capa invisible, para que puedas buscar, seleccionar y copiar el texto mientras las páginas se ven exactamente igual. Es útil para contratos, recibos, libros y documentos antiguos escaneados. Elige el idioma del documento para obtener los mejores resultados; las páginas que ya contienen texto se dejan como están. El reconocimiento usa Tesseract y OCRmyPDF en nuestro servidor y el archivo se elimina justo después.",
    seoTitle: "OCR de PDF – hacer buscables los PDF escaneados gratis",
    seoDescription:
      "OCR de PDF online y gratis: haz que los PDF escaneados se puedan buscar y copiar. 10 idiomas; los archivos se eliminan justo después de procesarlos.",
    keywords: [
      "ocr pdf",
      "ocr pdf online gratis",
      "pdf escaneado a texto",
      "hacer pdf buscable",
      "reconocer texto en pdf",
      "pdf con texto seleccionable",
    ],
    howToSteps: [
      {
        title: "Elige tu PDF escaneado",
        description: "Suelta o elige un PDF de hasta 30 MB.",
      },
      {
        title: "Elige el idioma",
        description: "Elige el idioma en que está escrito el documento.",
      },
      {
        title: "Hazlo buscable",
        description: "Descarga el PDF con texto seleccionable y con búsqueda.",
      },
    ],
    features: [
      {
        title: "Se ve igual",
        description: "La capa de texto es invisible; el escaneo no cambia.",
      },
      {
        title: "Diez idiomas",
        description: "Inglés, alemán, español, francés, portugués, italiano, japonés, coreano, indonesio y turco.",
      },
      {
        title: "Omite páginas con texto",
        description: "Las páginas que ya tienen texto no se vuelven a procesar.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se conserva nada después de el reconocimiento.",
      },
    ],
    faqs: [
      {
        question: "¿Qué precisión tiene?",
        answer:
          "Los escaneos limpios y rectos a 300 ppp dan muy buenos resultados. La escritura a mano, las fotos de baja resolución y las fuentes poco comunes se reconocen con menos fiabilidad.",
      },
      {
        question: "¿Puedo convertir el resultado a Word?",
        answer:
          "Sí. Cuando el PDF ya permite búsquedas, PDF a Word puede convertir su texto en un documento editable.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "pdf-to-pdfa": {
    name: "PDF a PDF/A",
    shortName: "PDF → PDF/A",
    tagline: "Convierte un PDF a PDF/A para archivarlo a largo plazo y para portales oficiales. Gratis y sin registro.",
    intro:
      "PDF a PDF/A convierte un PDF en PDF/A-2b, la versión de archivo del PDF que incrusta las fuentes y la información de color para que el documento se vea igual dentro de décadas. Algunos juzgados, portales de impuestos, universidades y sitios de la administración solo aceptan subidas en PDF/A. La conversión usa OCRmyPDF y Ghostscript en nuestro servidor y el archivo se elimina justo después.",
    seoTitle: "Convertir PDF a PDF/A – PDF/A-2b gratis",
    seoDescription:
      "Convertir PDF a PDF/A-2b online y gratis, para archivar y para portales oficiales. Los archivos se eliminan justo después. Sin registro.",
    keywords: [
      "pdf a pdf/a",
      "convertir pdf a pdf/a",
      "convertidor pdf/a",
      "pdf/a-2b",
      "archivar pdf",
    ],
    howToSteps: [
      {
        title: "Elige tu PDF",
        description: "Suelta o elige un PDF de hasta 30 MB.",
      },
      {
        title: "Convierte",
        description: "Haz clic en «Convertir a PDF/A».",
      },
      {
        title: "Descarga",
        description: "Sube el archivo PDF/A donde te lo pidan.",
      },
    ],
    features: [
      {
        title: "PDF/A-2b",
        description: "El estándar de archivo ampliamente aceptado.",
      },
      {
        title: "Fuentes incrustadas",
        description: "El texto se ve igual en cualquier ordenador.",
      },
      {
        title: "Aspecto sin cambios",
        description: "Las páginas conservan su contenido y su diseño.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se conserva nada después de la conversión.",
      },
    ],
    faqs: [
      {
        question: "¿Qué versión de PDF/A obtengo?",
        answer:
          "PDF/A-2b, que aceptan la mayoría de los portales. Si un portal pide expresamente PDF/A-1 o PDF/A-3, consulta sus instrucciones.",
      },
      {
        question: "¿Por qué el archivo PDF/A es más grande?",
        answer:
          "PDF/A debe incrustar todas las fuentes y perfiles de color para que el documento se pueda leer por sí solo, lo que aumenta el tamaño.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
  "repair-pdf": {
    name: "Reparar PDF",
    shortName: "Reparar PDF",
    tagline: "Arregla un PDF dañado que no se abre o muestra errores. Gratis y sin registro.",
    intro:
      "Reparar PDF reconstruye la estructura interna de un PDF dañado, de los que no se abren, muestran un error o se abren con páginas que faltan tras una descarga interrumpida o una exportación defectuosa. Reescribe el archivo para que los lectores de PDF puedan volver a leerlo y recupera lo que se pueda recuperar. Los archivos muy dañados no siempre se pueden salvar. La reparación se hace con qpdf en nuestro servidor y el archivo se elimina justo después.",
    seoTitle: "Reparar PDF – arreglar archivos PDF dañados gratis",
    seoDescription:
      "Reparar PDF online y gratis: arregla archivos PDF dañados o corruptos que no se abren. Los archivos se eliminan justo después. Sin registro.",
    keywords: [
      "reparar pdf",
      "reparar pdf dañado",
      "arreglar pdf corrupto",
      "reparar pdf online",
      "pdf no se abre",
    ],
    howToSteps: [
      {
        title: "Elige el PDF dañado",
        description: "Suelta o elige el PDF que no se abre bien.",
      },
      {
        title: "Repara",
        description: "Haz clic en «Reparar PDF» para reconstruir su estructura.",
      },
      {
        title: "Descarga",
        description: "Abre la copia reparada en tu lector de PDF.",
      },
    ],
    features: [
      {
        title: "Reconstruye la estructura",
        description: "Arregla las tablas de referencias cruzadas rotas y la estructura del archivo.",
      },
      {
        title: "Conserva lo que puede",
        description: "Se conservan las páginas y el contenido legibles.",
      },
      {
        title: "Rápido",
        description: "La mayoría de los archivos se reparan en segundos.",
      },
      {
        title: "Archivos eliminados al momento",
        description: "No se conserva nada después de la reparación.",
      },
    ],
    faqs: [
      {
        question: "¿Se puede reparar cualquier PDF?",
        answer:
          "No. Si faltan partes del archivo o se han sobrescrito, no se pueden recuperar. Si puedes, vuelve a descargar o exportar el original.",
      },
      {
        question: "¿Por qué dice que el archivo no es un PDF?",
        answer:
          "El archivo no empieza como un PDF, así que puede ser otro tipo de archivo o estar dañado sin remedio.",
      },
      {
        question: "¿Se sube mi archivo?",
        answer:
          "Sí. Esta herramienta necesita nuestro servidor, así que el archivo se envía por una conexión cifrada, se procesa y se elimina en cuanto se devuelve el resultado. Nunca se guarda, se comparte ni se mira. La mayoría de las demás herramientas de este sitio funcionan por completo en tu navegador.",
      },
      {
        question: "¿Hay un límite de tamaño?",
        answer:
          "Los archivos pueden pesar hasta 30 MB. Los archivos muy grandes o complejos pueden tardar hasta un par de minutos.",
      },
    ],
  },
};
