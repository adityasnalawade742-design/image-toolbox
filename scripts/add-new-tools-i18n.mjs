import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const NEW_TOOLS_DATA = {
  en: {
    'photo-filters': {
      name: 'Photo Filters & Effects',
      shortName: 'Filters',
      tagline: 'Apply aesthetic color presets, vintage film effects, vignette, and lighting controls in your browser.',
      seoTitle: 'Photo Filters & Effects Online — Free Color Grading & Presets',
      seoDescription: 'Apply cinematic photo filters, contrast, saturation, and vintage presets online for free. 100% private in-browser editing.',
      keywords: ['photo filters online', 'image effects free', 'color grading presets', 'vintage photo editor'],
      howToSteps: [
        { title: 'Upload Photo', description: 'Drag and drop your photo or paste from clipboard (Ctrl+V).' },
        { title: 'Choose Preset or Adjust', description: 'Select a preset (Cinematic, Vintage, Cyberpunk, Noir) or fine-tune brightness, contrast, and vignette.' },
        { title: 'Download Result', description: 'Compare before/after and download your enhanced image in lossless PNG or WebP.' }
      ],
      features: [
        { title: 'Instant GPU Acceleration', description: 'Real-time Canvas and WebGL rendering with zero delay.' },
        { title: '100% Private', description: 'Your photos never leave your device.' },
        { title: 'Before/After Comparison', description: 'Swipeable split comparison slider to inspect fine color adjustments.' }
      ],
      faqs: [
        { question: 'Is this Photo Filters tool free?', answer: 'Yes, it is 100% free with unlimited usage.' },
        { question: 'Does it reduce image quality?', answer: 'No, all filters are rendered at full original resolution.' }
      ]
    },
    'meme-generator': {
      name: 'Meme Generator',
      shortName: 'Meme Maker',
      tagline: 'Create viral memes with customizable top/bottom Impact captions, outline colors, and high-res export.',
      seoTitle: 'Meme Generator Online — Free Viral Meme Maker Without Watermarks',
      seoDescription: 'Create custom memes online for free with classic Impact fonts, custom colors, and zero watermarks. Fast and private.',
      keywords: ['meme generator', 'meme maker online', 'free meme generator no watermark', 'create memes'],
      howToSteps: [
        { title: 'Select Image or Template', description: 'Upload any photo or pick from popular starter meme templates.' },
        { title: 'Customize Captions', description: 'Type top and bottom captions, choose fonts, colors, and outline widths.' },
        { title: 'Download Meme', description: 'Export your meme instantly in high-resolution PNG or JPG format.' }
      ],
      features: [
        { title: 'No Watermarks', description: 'Generate clean memes without any branding or forced watermarks.' },
        { title: 'Classic & Modern Typography', description: 'Impact, Arial, Comic Sans with adjustable outlines and shadows.' },
        { title: '100% Client-Side Privacy', description: 'Images stay strictly on your device.' }
      ],
      faqs: [
        { question: 'Does this meme generator add watermarks?', answer: 'No. All generated memes are 100% watermark-free.' },
        { question: 'Can I upload my own pictures?', answer: 'Yes, you can upload any image or paste from clipboard.' }
      ]
    },
    'split-image': {
      name: 'Image Splitter & Grid Cutter',
      shortName: 'Split Grid',
      tagline: 'Cut photos into Instagram 3×3 grids, panoramic carousel slices, and custom tile matrices with 1-click ZIP download.',
      seoTitle: 'Image Splitter & Grid Cutter — Instagram 3x3 Grid & Panorama Slices',
      seoDescription: 'Split photos into Instagram 3x3 grid tiles, swipeable panorama carousels, or custom rows and columns. Free batch ZIP export.',
      keywords: ['image splitter', 'instagram grid cutter', 'split photo into 3x3', 'panorama carousel splitter'],
      howToSteps: [
        { title: 'Upload Image', description: 'Drag and drop your photo or panorama.' },
        { title: 'Select Split Mode', description: 'Choose Instagram 3×3 Grid, Panorama 3×1, or custom row × column counts.' },
        { title: 'Download Slices', description: 'Download all tiles in a single organized ZIP file or click any tile to download individually.' }
      ],
      features: [
        { title: '1-Click Batch ZIP Export', description: 'Automatically archives all numbered tiles into a single download.' },
        { title: 'Social Media Presets', description: 'Optimized for Instagram 9-grid profiles and swipeable carousels.' },
        { title: 'Lossless Tile Cutting', description: 'Preserves 100% of original image clarity and pixels.' }
      ],
      faqs: [
        { question: 'How do I upload a 3x3 grid to Instagram?', answer: 'Upload the numbered tiles starting from #9 to #1 in reverse order so they align perfectly on your profile.' },
        { question: 'Is there a limit on how many tiles I can cut?', answer: 'You can customize up to 10×10 (100 tiles) per image for free.' }
      ]
    },
    'censor-image': {
      name: 'Blur & Pixelate Censor',
      shortName: 'Censor Photo',
      tagline: 'Redact sensitive info, faces, license plates, and private numbers with Gaussian blur, mosaic pixelation, or blackout bars.',
      seoTitle: 'Blur & Pixelate Image Online — Free Photo Redaction & Privacy Tool',
      seoDescription: 'Blur faces, redact sensitive documents, and pixelate license plates online. 100% private in-browser redaction with automatic EXIF removal.',
      keywords: ['censor image online', 'blur face in photo', 'pixelate sensitive info', 'redact document online'],
      howToSteps: [
        { title: 'Upload Document or Photo', description: 'Drag and drop the image you want to redact.' },
        { title: 'Draw Redaction Boxes', description: 'Click and drag over sensitive areas with Mosaic Pixelation, Blur, or Blackout mode.' },
        { title: 'Download Sanitized Image', description: 'Save the redacted image with all sensitive metadata stripped.' }
      ],
      features: [
        { title: 'Multiple Censor Modes', description: 'Mosaic Pixelation, Heavy Gaussian Blur, and Opaque Blackout bars.' },
        { title: 'EXIF Metadata Auto-Stripping', description: 'Removes GPS coordinates, device info, and camera metadata automatically.' },
        { title: '100% Client-Side Privacy', description: 'Your confidential documents and faces never touch any server.' }
      ],
      faqs: [
        { question: 'Can someone unblur or reverse the censored image?', answer: 'No. The pixelation permanently replaces the original pixel data during rendering.' },
        { question: 'Are my private documents safe?', answer: 'Yes. All redactions are performed entirely in your browser memory.' }
      ]
    }
  },
  es: {
    'photo-filters': {
      name: 'Filtros y Efectos para Fotos',
      shortName: 'Filtros',
      tagline: 'Aplica ajustes de color, efectos cinematográficos y estilo vintage en tu navegador.',
      seoTitle: 'Filtros para Fotos Online Gratis — Efectos y Ajustes de Color',
      seoDescription: 'Aplica filtros cinematográficos, brillo, contraste y efectos vintage a tus fotos online gratis. 100% privado en tu navegador.',
      keywords: ['filtros fotos online', 'efectos fotos gratis', 'editar color foto'],
      howToSteps: [{ title: 'Sube tu Foto', description: 'Arrastra tu imagen o pega con Ctrl+V.' }, { title: 'Elige un Filtro', description: 'Selecciona ajustes cinematográficos, vintage o noir.' }, { title: 'Descarga el Resultado', description: 'Guarda la foto editada en alta calidad.' }],
      features: [{ title: 'Aceleración por GPU', description: 'Renderizado instantáneo.' }, { title: '100% Privado', description: 'Tus fotos no salen de tu dispositivo.' }],
      faqs: [{ question: '¿Es gratis esta herramienta?', answer: 'Sí, es 100% gratuita e ilimitada.' }]
    },
    'meme-generator': {
      name: 'Generador de Memes',
      shortName: 'Memes',
      tagline: 'Crea memes virales con textos Impact personalizados y sin marcas de agua.',
      seoTitle: 'Generador de Memes Online Gratis — Sin Marcas de Agua',
      seoDescription: 'Crea memes personalizados con fuentes clásicas Impact, colores a medida y descarga en alta resolución sin marcas de agua.',
      keywords: ['generador de memes', 'crear memes online gratis', 'hacer memes'],
      howToSteps: [{ title: 'Sube tu Imagen', description: 'Elige una foto o plantilla de meme.' }, { title: 'Escribe el Texto', description: 'Personaliza los textos superior e inferior.' }, { title: 'Descarga tu Meme', description: 'Exporta en PNG o JPG de alta resolución.' }],
      features: [{ title: 'Sin Marcas de Agua', description: 'Memes limpios y listos para compartir.' }, { title: '100% Privado', description: 'Tus imágenes no se envían a servidores.' }],
      faqs: [{ question: '¿Añade marcas de agua?', answer: 'No, todos los memes son 100% limpios.' }]
    },
    'split-image': {
      name: 'Divisor de Imágenes y Cuadrícula',
      shortName: 'Dividir',
      tagline: 'Divide fotos en cuadrículas 3×3 de Instagram y panoramas con descarga en ZIP.',
      seoTitle: 'Divisor de Imágenes Online — Cuadrícula 3x3 de Instagram en ZIP',
      seoDescription: 'Corta fotos en cuadrículas 3x3 para Instagram o carruseles panorámicos. Descarga todas las partes en un solo archivo ZIP.',
      keywords: ['cortar foto en 3x3', 'divisor de imagenes', 'grid instagram online'],
      howToSteps: [{ title: 'Sube tu Foto', description: 'Arrastra tu foto o imagen panorámica.' }, { title: 'Elige la Cuadrícula', description: 'Selecciona modo 3×3 de Instagram o filas y columnas personalizadas.' }, { title: 'Descarga en ZIP', description: 'Descarga todas las partes en un solo archivo comprimido.' }],
      features: [{ title: 'Descarga ZIP en 1 Clic', description: 'Organiza todas las partes numeradas.' }, { title: 'Calidad Sin Pérdidas', description: 'Conserva el 100% de la nitidez original.' }],
      faqs: [{ question: '¿Cómo subir a Instagram?', answer: 'Sube las fotos en orden inverso (#9 al #1) para que se vean alineadas.' }]
    },
    'censor-image': {
      name: 'Censurar y Difuminar Foto',
      shortName: 'Censurar',
      tagline: 'Oculta rostros, matrículas y datos confidenciales con desenfoque o pixelado.',
      seoTitle: 'Censurar y Difuminar Imágenes Online — Pixelado y Privacidad',
      seoDescription: 'Difumina caras, matrículas y datos bancarios en fotos online gratis. Procesamiento 100% privado con eliminación automática de metadatos EXIF.',
      keywords: ['difuminar cara foto', 'pixelar imagen online', 'censurar datos privados'],
      howToSteps: [{ title: 'Sube tu Imagen', description: 'Arrastra el documento o foto que deseas proteger.' }, { title: 'Dibuja las Áreas', description: 'Haz clic y arrastra sobre los datos sensibles.' }, { title: 'Descarga Protegida', description: 'Guarda la imagen saneada sin metadatos.' }],
      features: [{ title: 'Múltiples Modos', description: 'Desenfoque Gaussiano, Pixelado Mosaico y Barras Negras.' }, { title: 'Eliminación de EXIF', description: 'Borra datos de geolocalización y cámara.' }],
      faqs: [{ question: '¿Se puede revertir el censurado?', answer: 'No. El pixelado reemplaza permanentemente los datos originales.' }]
    }
  },
  fr: {
    'photo-filters': {
      name: 'Filtres et Effets Photo',
      shortName: 'Filtres',
      tagline: 'Appliquez des réglages de couleurs, effets vintage et cinématographiques dans votre navigateur.',
      seoTitle: 'Filtres Photo en Ligne Gratuits — Effets et Retouche Couleur',
      seoDescription: 'Appliquez des filtres cinématographiques, contraste, saturation et effets vintage en ligne gratuitement. 100% privé.',
      keywords: ['filtres photo en ligne', 'effets photo gratuits', 'retouche couleur photo'],
      howToSteps: [{ title: 'Téléchargez votre Photo', description: 'Glissez-déposez ou collez avec Ctrl+V.' }, { title: 'Ajustez les Filtres', description: 'Choisissez un préréglage ou ajustez les curseurs.' }, { title: 'Téléchargez le Résultat', description: 'Enregistrez votre photo sublimée.' }],
      features: [{ title: 'Accélération GPU', description: 'Rendu instantané dans le navigateur.' }, { title: '100% Privé', description: 'Vos photos restent sur votre appareil.' }],
      faqs: [{ question: 'Cet outil est-il gratuit ?', answer: 'Oui, 100% gratuit et illimité.' }]
    },
    'meme-generator': {
      name: 'Générateur de Mèmes',
      shortName: 'Mèmes',
      tagline: 'Créez des mèmes viraux avec textes personnalisés et sans filigrane.',
      seoTitle: 'Générateur de Mèmes en Ligne Gratuit — Sans Filigrane',
      seoDescription: 'Créez des mèmes personnalisés avec police Impact, couleurs sur mesure et téléchargement haute résolution sans filigrane.',
      keywords: ['générateur de mèmes', 'créer mème en ligne', 'faire un mème'],
      howToSteps: [{ title: 'Choisissez une Image', description: 'Téléversez une photo ou un modèle de mème.' }, { title: 'Personnalisez le Texte', description: 'Écrivez vos légendes supérieure et inférieure.' }, { title: 'Téléchargez votre Mème', description: 'Exportez en haute résolution PNG ou JPG.' }],
      features: [{ title: 'Sans Filigrane', description: 'Mèmes propres prêts à partager.' }, { title: '100% Privé', description: 'Aucun envoi sur un serveur.' }],
      faqs: [{ question: 'Y a-t-il un filigrane ?', answer: 'Non, tous les mèmes sont 100% sans filigrane.' }]
    },
    'split-image': {
      name: 'Découpeur d’Images et Grille',
      shortName: 'Découper',
      tagline: 'Découpez vos photos en grille 3×3 pour Instagram avec téléchargement ZIP.',
      seoTitle: 'Découpeur d’Images en Grille 3x3 Instagram — Téléchargement ZIP',
      seoDescription: 'Divisez vos photos en grille 3x3 pour Instagram ou en carrousels panoramiques. Téléchargez toutes les parties en un seul fichier ZIP.',
      keywords: ['découper photo en 3x3', 'grille instagram', 'diviser image'],
      howToSteps: [{ title: 'Téléchargez la Photo', description: 'Glissez votre photo ou panorama.' }, { title: 'Choisissez la Grille', description: 'Sélectionnez le format 3×3 ou personnalisé.' }, { title: 'Téléchargez le ZIP', description: 'Récupérez toutes les découpes numérotées.' }],
      features: [{ title: 'Téléchargement ZIP en 1 Clic', description: 'Archive automatique de tous les morceaux.' }, { title: 'Qualité Sans Perte', description: 'Conserve 100% des pixels d’origine.' }],
      faqs: [{ question: 'Comment publier sur Instagram ?', answer: 'Publiez les morceaux dans l’ordre inverse (#9 à #1).' }]
    },
    'censor-image': {
      name: 'Flouter et Censurer une Photo',
      shortName: 'Censurer',
      tagline: 'Masquez visages, plaques et données sensibles par flou ou pixellisation.',
      seoTitle: 'Flouter et Censurer une Image en Ligne — Pixellisation et Confidentialité',
      seoDescription: 'Floutez des visages, plaques d’immatriculation et documents confidentiels en ligne gratuitement. Suppression automatique des métadonnées EXIF.',
      keywords: ['flouter visage photo', 'pixelliser image en ligne', 'censurer document'],
      howToSteps: [{ title: 'Téléchargez votre Image', description: 'Glissez la photo à anonymiser.' }, { title: 'Dessinez les Zones', description: 'Sélectionnez les parties à flouter ou pixelliser.' }, { title: 'Téléchargez l’Image', description: 'Enregistrez la photo nettoyée de ses métadonnées.' }],
      features: [{ title: 'Plusieurs Modes', description: 'Flou Gaussien, Pixellisation Mosaïque et Barres Noires.' }, { title: 'Suppression EXIF', description: 'Supprime les coordonnées GPS et données appareil.' }],
      faqs: [{ question: 'Le floutage est-il réversible ?', answer: 'Non, les pixels sont définitivement modifiés.' }]
    }
  },
  de: {
    'photo-filters': {
      name: 'Fotofilter und Farbeffekte',
      shortName: 'Filter',
      tagline: 'Wende ästhetische Farbfilter, Vintage-Effekte und Beleuchtungsregler im Browser an.',
      seoTitle: 'Fotofilter Online Kostenlos — Farbeffekte und Bildoptimierung',
      seoDescription: 'Wende cineastische Fotofilter, Helligkeit, Kontrast und Vintage-Presets kostenlos online an. 100% privat im Browser.',
      keywords: ['fotofilter online', 'bildeffekte kostenlos', 'farbfilter foto'],
      howToSteps: [{ title: 'Foto Hochladen', description: 'Bild hineinziehen oder mit Strg+V einfügen.' }, { title: 'Filter Auswählen', description: 'Wähle Presets wie Cinematic, Vintage oder Noir.' }, { title: 'Ergebnis Herunterladen', description: 'Speichere das bearbeitete Bild in voller Qualität.' }],
      features: [{ title: 'GPU-Beschleunigung', description: 'Sofortiges Rendern im Browser.' }, { title: '100% Datenschutz', description: 'Fotos verlassen dein Gerät nicht.' }],
      faqs: [{ question: 'Ist dieses Tool kostenlos?', answer: 'Ja, 100% kostenlos und unbegrenzt nutzbar.' }]
    },
    'meme-generator': {
      name: 'Meme Generator',
      shortName: 'Meme Maker',
      tagline: 'Erstelle virale Memes mit individuellen Texten und ohne Wasserzeichen.',
      seoTitle: 'Meme Generator Online Kostenlos — Ohne Wasserzeichen',
      seoDescription: 'Erstelle Memes mit klassischer Impact-Schrift, Farben und Export in hoher Auflösung ohne Wasserzeichen.',
      keywords: ['meme generator', 'memes erstellen online', 'meme maker kostenlos'],
      howToSteps: [{ title: 'Bild Auswählen', description: 'Foto hochladen oder Vorlage wählen.' }, { title: 'Text Anpassen', description: 'Oben und unten Text eingeben.' }, { title: 'Meme Herunterladen', description: 'Als PNG oder JPG speichern.' }],
      features: [{ title: 'Keine Wasserzeichen', description: 'Saubere Memes zum direkten Teilen.' }, { title: '100% Privat', description: 'Keine Server-Uploads.' }],
      faqs: [{ question: 'Gibt es Wasserzeichen?', answer: 'Nein, alle Memes sind 100% wasserzeichenfrei.' }]
    },
    'split-image': {
      name: 'Bildteiler & Grid Cutter',
      shortName: 'Teilen',
      tagline: 'Teile Fotos in Instagram 3×3 Raster und Karussells mit ZIP-Download.',
      seoTitle: 'Bildteiler Online — Instagram 3x3 Raster & Panorama ZIP',
      seoDescription: 'Schneide Bilder in Instagram 3x3 Raster oder Panorama-Karussells. Lade alle Kacheln in einer ZIP-Datei herunter.',
      keywords: ['bild in 3x3 teilen', 'instagram grid cutter', 'bild teilen online'],
      howToSteps: [{ title: 'Foto Hochladen', description: 'Bild oder Panorama hineinziehen.' }, { title: 'Raster Wählen', description: 'Instagram 3×3 oder eigenes Raster wählen.' }, { title: 'ZIP Herunterladen', description: 'Alle Kacheln auf einmal herunterladen.' }],
      features: [{ title: '1-Klick ZIP-Download', description: 'Automatisch nummerierte Kacheln.' }, { title: 'Verlustfreie Qualität', description: 'Volle Pixel-Schärfe.' }],
      faqs: [{ question: 'Wie auf Instagram posten?', answer: 'Kacheln in umgekehrter Reihenfolge (#9 bis #1) hochladen.' }]
    },
    'censor-image': {
      name: 'Bild Verpixeln & Zensieren',
      shortName: 'Zensieren',
      tagline: 'Mache Gesichter, Kennzeichen und vertrauliche Daten durch Unschärfe oder Mosaik unkenntlich.',
      seoTitle: 'Bild Zensieren & Verpixeln Online — Datenschutz & Weichzeichner',
      seoDescription: 'Verpixele Gesichter, Kennzeichen und Dokumente kostenlos online. 100% privat mit automatischer EXIF-Entfernung.',
      keywords: ['gesicht verpixeln online', 'bild zensieren', 'dokument schwärzen'],
      howToSteps: [{ title: 'Bild Hochladen', description: 'Foto zum Zensieren auswählen.' }, { title: 'Bereiche Markieren', description: 'Bereiche mit Weichzeichner oder Mosaik abdecken.' }, { title: 'Geschützt Herunterladen', description: 'Bereinigtes Bild ohne Metadaten speichern.' }],
      features: [{ title: 'Mehrere Modi', description: 'Gaußscher Weichzeichner, Mosaik und schwarze Balken.' }, { title: 'EXIF-Entfernung', description: 'Löscht GPS- und Kameradaten automatisch.' }],
      faqs: [{ question: 'Kann die Zensur rückgängig gemacht werden?', answer: 'Nein, die Pixeldaten werden dauerhaft überschrieben.' }]
    }
  },
  pt: {
    'photo-filters': {
      name: 'Filtros e Efeitos de Foto',
      shortName: 'Filtros',
      tagline: 'Aplique filtros de cor, efeitos vintage e iluminação direto no navegador.',
      seoTitle: 'Filtros para Fotos Online Grátis — Efeitos e Ajustes de Cor',
      seoDescription: 'Aplique filtros cinematográficos, contraste, saturação e estilo vintage online e grátis. 100% privado.',
      keywords: ['filtros de fotos online', 'efeitos para fotos gratis', 'editar cores foto'],
      howToSteps: [{ title: 'Envie sua Foto', description: 'Arraste ou cole com Ctrl+V.' }, { title: 'Escolha o Filtro', description: 'Ajuste brilho, saturação e vinheta.' }, { title: 'Baixe o Resultado', description: 'Salve a foto em alta resolução.' }],
      features: [{ title: 'Aceleração por GPU', description: 'Renderização instantânea.' }, { title: '100% Privado', description: 'Fotos ficam apenas no seu aparelho.' }],
      faqs: [{ question: 'É grátis?', answer: 'Sim, 100% gratuito e sem limites.' }]
    },
    'meme-generator': {
      name: 'Gerador de Memes',
      shortName: 'Memes',
      tagline: 'Crie memes virais com textos personalizados e sem marca d’água.',
      seoTitle: 'Gerador de Memes Online Grátis — Sem Marca d’Água',
      seoDescription: 'Crie memes personalizados com fonte Impact, cores personalizadas e download sem marcas d’água.',
      keywords: ['gerador de memes', 'criar meme online gratis', 'fazer memes'],
      howToSteps: [{ title: 'Escolha a Imagem', description: 'Envie sua foto ou escolha um modelo.' }, { title: 'Edite o Texto', description: 'Escreva as legendas superior e inferior.' }, { title: 'Baixe o Meme', description: 'Exporte em PNG ou JPG de alta qualidade.' }],
      features: [{ title: 'Sem Marca d’Água', description: 'Memes limpos para compartilhar.' }, { title: '100% Privado', description: 'Sem uploads para servidores.' }],
      faqs: [{ question: 'Tem marca d’água?', answer: 'Não, todos os memes são 100% limpos.' }]
    },
    'split-image': {
      name: 'Divisor de Imagens e Grade',
      shortName: 'Dividir',
      tagline: 'Divida fotos em grade 3×3 para Instagram com download em arquivo ZIP.',
      seoTitle: 'Divisor de Fotos Online — Grade 3x3 do Instagram em ZIP',
      seoDescription: 'Corte fotos em grade 3x3 para o Instagram ou carrosséis panorâmicos. Baixe todos os blocos em um arquivo ZIP.',
      keywords: ['dividir foto em 3x3', 'grade instagram online', 'cortar imagem'],
      howToSteps: [{ title: 'Envie a Imagem', description: 'Arraste sua foto ou panorama.' }, { title: 'Escolha a Grade', description: 'Selecione 3×3 ou grade personalizada.' }, { title: 'Baixe em ZIP', description: 'Baixe todas as partes compactadas.' }],
      features: [{ title: 'Download ZIP em 1 Clique', description: 'Todas as partes organizadas.' }, { title: 'Qualidade Sem Perdas', description: 'Preserva 100% da nitidez.' }],
      faqs: [{ question: 'Como postar no Instagram?', answer: 'Poste as imagens na ordem inversa (#9 ao #1).' }]
    },
    'censor-image': {
      name: 'Censurar e Desfocar Foto',
      shortName: 'Censurar',
      tagline: 'Oculte rostos, placas e dados confidenciais com desfoque ou pixelização.',
      seoTitle: 'Censurar e Desfocar Imagem Online — Pixelar e Proteger Privacidade',
      seoDescription: 'Desfoque rostos, placas de veículos e documentos confidenciais online grátis. Remoção automática de metadados EXIF.',
      keywords: ['desfocar rosto online', 'pixelar imagem gratis', 'censurar documento'],
      howToSteps: [{ title: 'Envie sua Imagem', description: 'Escolha a foto para censurar.' }, { title: 'Marque as Áreas', description: 'Arraste sobre os dados confidenciais.' }, { title: 'Baixe Protegida', description: 'Salve a foto higienizada.' }],
      features: [{ title: 'Vários Modos', description: 'Desfoque Gaussiano, Mosaico e Tarjas Pretas.' }, { title: 'Remoção de EXIF', description: 'Apaga dados de GPS e câmera.' }],
      faqs: [{ question: 'A censura pode ser revertida?', answer: 'Não, os dados são permanentemente substituídos.' }]
    }
  },
  it: {
    'photo-filters': {
      name: 'Filtri ed Effetti Foto',
      shortName: 'Filtri',
      tagline: 'Applica filtri colore, effetti vintage e controlli di luce nel browser.',
      seoTitle: 'Filtri Foto Online Gratis — Effetti e Correzione Colore',
      seoDescription: 'Applica filtri cinematografici, contrasto e saturazione online gratis. 100% privato nel tuo browser.',
      keywords: ['filtri foto online', 'effetti foto gratis', 'ritocco colore'],
      howToSteps: [{ title: 'Carica la Foto', description: 'Trascina o incolla con Ctrl+V.' }, { title: 'Regola i Filtri', description: 'Scegli preset o regola i cursori.' }, { title: 'Scarica il Risultato', description: 'Salva l’immagine migliorata.' }],
      features: [{ title: 'Accelerazione GPU', description: 'Rendering immediato.' }, { title: '100% Privato', description: 'Le foto non lasciano il tuo dispositivo.' }],
      faqs: [{ question: 'È gratuito?', answer: 'Sì, 100% gratuito e senza limiti.' }]
    },
    'meme-generator': {
      name: 'Generatore di Meme',
      shortName: 'Meme',
      tagline: 'Crea meme virali con testi personalizzati e senza filigrana.',
      seoTitle: 'Generatore di Meme Online Gratis — Senza Filigrana',
      seoDescription: 'Crea meme personalizzati con font Impact, colori su misura e download in alta risoluzione senza filigrane.',
      keywords: ['generatore di meme', 'creare meme online gratis', 'fare meme'],
      howToSteps: [{ title: 'Carica Immagine', description: 'Carica una foto o scegli un modello.' }, { title: 'Inserisci il Testo', description: 'Scrivi il testo sopra e sotto.' }, { title: 'Scarica il Meme', description: 'Esporta in PNG o JPG ad alta risoluzione.' }],
      features: [{ title: 'Nessuna Filigrana', description: 'Meme puliti pronti per la condivisione.' }, { title: '100% Privato', description: 'Nessun caricamento su server.' }],
      faqs: [{ question: 'Ci sono filigrane?', answer: 'No, tutti i meme sono privi di filigrana.' }]
    },
    'split-image': {
      name: 'Divisore Immagini e Griglia',
      shortName: 'Dividi',
      tagline: 'Dividi foto in griglie 3×3 per Instagram e scarica in archivio ZIP.',
      seoTitle: 'Divisore Immagini Online — Griglia 3x3 Instagram in ZIP',
      seoDescription: 'Taglia foto in griglie 3x3 per Instagram o caroselli panoramici. Scarica tutte le parti in un unico file ZIP.',
      keywords: ['dividere foto in 3x3', 'griglia instagram online', 'tagliare immagini'],
      howToSteps: [{ title: 'Carica la Foto', description: 'Trascina la foto o panorama.' }, { title: 'Seleziona la Griglia', description: 'Scegli 3×3 o righe e colonne personalizzate.' }, { title: 'Scarica in ZIP', description: 'Scarica tutte le sezioni numerate.' }],
      features: [{ title: 'Download ZIP in 1 Clic', description: 'Archivio automatico di tutte le sezioni.' }, { title: 'Qualità Senza Perdite', description: 'Conserva il 100% della nitidezza.' }],
      faqs: [{ question: 'Come pubblicare su Instagram?', answer: 'Pubblica i riquadri in ordine inverso (dal #9 al #1).' }]
    },
    'censor-image': {
      name: 'Sfocare e Censurare Foto',
      shortName: 'Censura',
      tagline: 'Nascondi volti, targhe e dati sensibili con sfocatura o pixelatura.',
      seoTitle: 'Censurare e Sfocare Immagini Online — Pixelare e Proteggere Privacy',
      seoDescription: 'Sfoca volti, targhe e documenti riservati online gratis. Rimozione automatica dei metadati EXIF.',
      keywords: ['sfocare volto foto', 'pixelare immagine gratis', 'censurare documento'],
      howToSteps: [{ title: 'Carica l’Immagine', description: 'Scegli la foto da proteggere.' }, { title: 'Disegna le Aree', description: 'Trascina sopra le informazioni riservate.' }, { title: 'Scarica Protetta', description: 'Salva la foto senza metadati.' }],
      features: [{ title: 'Varie Modalità', description: 'Sfocatura Gaussiana, Mosaico e Barre Nere.' }, { title: 'Rimozione EXIF', description: 'Elimina dati GPS e fotocamera.' }],
      faqs: [{ question: 'La censura è reversibile?', answer: 'No, i pixel vengono sovrascritti definitivamente.' }]
    }
  },
  ja: {
    'photo-filters': {
      name: '写真フィルター＆色調補正',
      shortName: 'フィルター',
      tagline: '映画風のカラープリセット、レトロ調、ビネット効果をブラウザ上で瞬時に適用。',
      seoTitle: '無料写真フィルター＆色調補正オンライン — エフェクト加工',
      seoDescription: '写真にシネマティックフィルター、コントラスト、彩度、レトロ調エフェクトを無料で適用。100%安全なブラウザ処理。',
      keywords: ['写真フィルター', '画像エフェクト', '色調補正 オンライン'],
      howToSteps: [{ title: '写真をアップロード', description: '画像をドラッグ＆ドロップまたはCtrl+Vで貼り付け。' }, { title: 'フィルターを選択', description: 'プリセットまたはスライダーで調整。' }, { title: '画像を保存', description: '高画質PNGまたはWebPでダウンロード。' }],
      features: [{ title: 'GPU高速処理', description: 'リアルタイムで高速レンダリング。' }, { title: 'プライバシー保護', description: '画像は端末内でのみ処理されます。' }],
      faqs: [{ question: '無料で使えますか？', answer: 'はい、完全無料で無制限にご利用いただけます。' }]
    },
    'meme-generator': {
      name: 'ミームジェネレーター',
      shortName: 'ミーム作成',
      tagline: 'インパクトのある文字を入れて透かしなしのオリジナルミームを作成。',
      seoTitle: '無料ミームジェネレーター — 透かしなしで簡単に画像作成',
      seoDescription: '好きな画像やテンプレートに文字を入れて高品質ミームを作成。透かしなしで無料ダウンロード可能。',
      keywords: ['ミームジェネレーター', 'ミーム作成', '画像 文字入れ'],
      howToSteps: [{ title: '画像を選択', description: '手持ちの画像またはテンプレートを選択。' }, { title: '文字を入力', description: '上下のキャプションやフォント色を設定。' }, { title: '保存', description: '高解像度でダウンロード。' }],
      features: [{ title: '透かしなし', description: 'ウォーターマークのないきれいな画像。' }, { title: '安全な処理', description: 'サーバーへのアップロードはありません。' }],
      faqs: [{ question: 'ウォーターマークは入りますか？', answer: 'いいえ、一切入りません。' }]
    },
    'split-image': {
      name: '画像分割・グリッドカッター',
      shortName: '画像分割',
      tagline: 'Instagram用の3×3グリッドやパノラマカルーセル用に画像を分割してZIP保存。',
      seoTitle: '画像分割オンライン — インスタ3x3グリッド・パノラマ切り出し',
      seoDescription: '写真をInstagramの3x3プロフィールグリッドやパノラマ用に分割。一括ZIPダウンロード可能。',
      keywords: ['画像分割', 'インスタ グリッド分割', '写真 3分割'],
      howToSteps: [{ title: '写真をアップロード', description: '分割したい画像をドロップ。' }, { title: 'グリッドを選択', description: '3×3やカスタムの行・列数を指定。' }, { title: 'ZIPでダウンロード', description: '番号順のタイルを一括保存。' }],
      features: [{ title: '1クリックZIP保存', description: '連番付きでまとめてダウンロード。' }, { title: '画質劣化ゼロ', description: '元の解像度を100%保持。' }],
      faqs: [{ question: 'インスタへの投稿順は？', answer: '最後の番号から逆順（#9→#1）に投稿してください。' }]
    },
    'censor-image': {
      name: '写真モザイク・ぼかし加工',
      shortName: 'モザイク',
      tagline: '顔やナンバープレート、個人情報をぼかしやモザイク、黒塗りで隠すプライシーツール。',
      seoTitle: '写真モザイク・ぼかし加工オンライン — 個人情報保護・EXIF削除',
      seoDescription: '写真の顔や車のナンバー、機密書類をモザイクやぼかしで隠す無料ツール。EXIF位置情報も自動削除。',
      keywords: ['写真 モザイク', '顔 ぼかし', '画像 黒塗り'],
      howToSteps: [{ title: '写真をアップロード', description: '加工したい画像を選択。' }, { title: '範囲を選択', description: '隠したい部分をマウスでドラッグ。' }, { title: '保存', description: '個人情報が除去された画像をダウンロード。' }],
      features: [{ title: '複数の加工方式', description: 'モザイク、ガウスぼかし、黒塗りバー。' }, { title: 'EXIFメタデータ削除', description: '位置情報やカメラ情報を自動消去。' }],
      faqs: [{ question: 'モザイクは復元できますか？', answer: 'いいえ、ピクセルが上書きされるため復元不可能です。' }]
    }
  },
  ko: {
    'photo-filters': {
      name: '사진 필터 및 효과',
      shortName: '필터',
      tagline: '시네마틱 프리셋, 빈티지 효과, 비네팅을 브라우저에서 바로 적용하세요.',
      seoTitle: '무료 사진 필터 및 효과 온라인 — 감성 색감 보정',
      seoDescription: '사진에 시네마틱 감성 필터, 대비, 채도, 레트로 효과를 무료로 적용하세요. 100% 안전한 브라우저 처리.',
      keywords: ['사진 필터 온라인', '이미지 보정 무료', '색감 보정'],
      howToSteps: [{ title: '사진 업로드', description: '이미지를 드래그하거나 Ctrl+V로 붙여넣기.' }, { title: '필터 선택', description: '프리셋 또는 세부 슬라이더로 조절.' }, { title: '결과 다운로드', description: '고화질로 바로 저장.' }],
      features: [{ title: 'GPU 가속', description: '지연 없는 실시간 렌더링.' }, { title: '100% 개인정보 보호', description: '사진이 기기를 벗어나지 않습니다.' }],
      faqs: [{ question: '무료인가요?', answer: '네, 100% 완전 무료입니다.' }]
    },
    'meme-generator': {
      name: '밈 생성기 (짤 만들기)',
      shortName: '밈 생성기',
      tagline: '워터마크 없이 원하는 문구를 넣어 나만의 재미있는 짤을 만드세요.',
      seoTitle: '무료 밈 생성기 — 워터마크 없는 짤방 만들기',
      seoDescription: '사진에 텍스트를 넣어 개성 있는 밈을 만드세요. 워터마크 없이 고화질로 무료 다운로드 가능.',
      keywords: ['밈 생성기', '짤 만들기', '짤방 만들기 무료'],
      howToSteps: [{ title: '이미지 선택', description: '사진을 올리거나 템플릿 선택.' }, { title: '문구 입력', description: '상단 및 하단 자막 입력.' }, { title: '밈 저장', description: '고화질로 다운로드.' }],
      features: [{ title: '워터마크 없음', description: '깔끔한 이미지 생성.' }, { title: '개인정보 보호', description: '서버 전송 없음.' }],
      faqs: [{ question: '워터마크가 생기나요?', answer: '아니요, 전혀 생기지 않습니다.' }]
    },
    'split-image': {
      name: '이미지 분할 및 그리드 자르기',
      shortName: '이미지 분할',
      tagline: '인스타그램 3×3 그리드 및 파노라마 슬라이스 분할 후 ZIP 압축 다운로드.',
      seoTitle: '이미지 분할 온라인 — 인스타 3x3 그리드 분할 ZIP 다운로드',
      seoDescription: '사진을 인스타그램 3x3 피드 그리드나 파노라마 슬라이드로 깔끔하게 분할하세요. 일괄 ZIP 다운로드 지원.',
      keywords: ['이미지 분할', '인스타 3x3 자르기', '사진 분할'],
      howToSteps: [{ title: '사진 업로드', description: '분할할 사진을 드롭.' }, { title: '그리드 선택', description: '인스타 3×3 또는 원하는 행/열 설정.' }, { title: 'ZIP 다운로드', description: '번호 매겨진 조각들을 한 번에 저장.' }],
      features: [{ title: '1클릭 ZIP 저장', description: '모든 조각을 압축파일로 다운로드.' }, { title: '화질 손실 없음', description: '원본 해상도 완벽 유지.' }],
      faqs: [{ question: '인스타에 어떻게 올리나요?', answer: '마지막 번호부터 역순(#9→#1)으로 업로드하세요.' }]
    },
    'censor-image': {
      name: '사진 모자이크 및 블러 처리',
      shortName: '모자이크',
      tagline: '얼굴, 차량 번호판, 개인정보를 모자이크, 흐림 효과 또는 블랙바로 가리세요.',
      seoTitle: '사진 모자이크 및 블러 처리 온라인 — 개인정보 보호 및 EXIF 삭제',
      seoDescription: '사진 속 얼굴이나 민감한 서류, 번호판을 모자이크로 가리세요. EXIF 위치 정보도 자동 삭제.',
      keywords: ['사진 모자이크', '얼굴 가리기', '이미지 블러'],
      howToSteps: [{ title: '사진 업로드', description: '가릴 사진 선택.' }, { title: '영역 지정', description: '가릴 부분을 드래그하여 지정.' }, { title: '저장', description: '개인정보가 제거된 이미지 다운로드.' }],
      features: [{ title: '다양한 모드', description: '모자이크, 가우시안 블러, 블랙바.' }, { title: 'EXIF 삭제', description: '위치 정보 자동 제거.' }],
      faqs: [{ question: '모자이크를 복원할 수 있나요?', answer: '아니요, 픽셀이 완전히 덮어씌워지므로 복원 불가능합니다.' }]
    }
  },
  id: {
    'photo-filters': {
      name: 'Filter & Efek Foto',
      shortName: 'Filter',
      tagline: 'Terapkan filter warna estetik, efek vintage, dan pencahayaan di browser.',
      seoTitle: 'Filter Foto Online Gratis — Efek Warna & Grading',
      seoDescription: 'Terapkan filter sinematik, kontras, saturasi, dan efek vintage pada foto secara gratis. 100% aman dan privat.',
      keywords: ['filter foto online', 'efek foto gratis', 'edit warna foto'],
      howToSteps: [{ title: 'Unggah Foto', description: 'Tarik foto atau tempel dengan Ctrl+V.' }, { title: 'Pilih Filter', description: 'Pilih preset sinematik atau atur slider.' }, { title: 'Unduh Hasil', description: 'Simpan foto dengan resolusi penuh.' }],
      features: [{ title: 'Akselerasi GPU', description: 'Pemrosesan instan di browser.' }, { title: '100% Privat', description: 'Foto tidak keluar dari perangkat Anda.' }],
      faqs: [{ question: 'Apakah ini gratis?', answer: 'Ya, 100% gratis tanpa batas.' }]
    },
    'meme-generator': {
      name: 'Pembuat Meme',
      shortName: 'Meme',
      tagline: 'Buat meme viral dengan teks kustom tanpa watermark.',
      seoTitle: 'Pembuat Meme Online Gratis — Tanpa Watermark',
      seoDescription: 'Buat meme kustom dengan font Impact klasik, warna kustom, dan unduh resolusi tinggi tanpa watermark.',
      keywords: ['pembuat meme', 'bikin meme online', 'meme maker gratis'],
      howToSteps: [{ title: 'Pilih Gambar', description: 'Unggah foto atau pilih template.' }, { title: 'Tulis Teks', description: 'Atur tulisan atas dan bawah.' }, { title: 'Unduh Meme', description: 'Simpan format PNG atau JPG.' }],
      features: [{ title: 'Tanpa Watermark', description: 'Meme bersih siap dibagikan.' }, { title: '100% Privat', description: 'Tanpa upload ke server.' }],
      faqs: [{ question: 'Ada watermark?', answer: 'Tidak, semua meme 100% bebas watermark.' }]
    },
    'split-image': {
      name: 'Pemotong & Pemisah Gambar Grid',
      shortName: 'Pemisah Grid',
      tagline: 'Potong foto jadi grid Instagram 3×3 atau panorama dengan unduhan ZIP.',
      seoTitle: 'Pemotong Gambar Online — Grid Instagram 3x3 Format ZIP',
      seoDescription: 'Potong foto menjadi grid 3x3 untuk Instagram atau karosel panorama. Unduh semua potongan dalam satu file ZIP.',
      keywords: ['potong foto jadi 3x3', 'grid instagram online', 'pemotong gambar'],
      howToSteps: [{ title: 'Unggah Foto', description: 'Tarik foto atau gambar panorama.' }, { title: 'Pilih Grid', description: 'Pilih mode 3×3 atau kustom.' }, { title: 'Unduh ZIP', description: 'Unduh semua potongan bernomor.' }],
      features: [{ title: 'Unduh ZIP 1-Klik', description: 'Semua potongan tersusun rapi.' }, { title: 'Kualitas Tanpa Kompresi', description: 'Menjaga 100% ketajaman.' }],
      faqs: [{ question: 'Bagaimana cara upload ke IG?', answer: 'Upload potongan dengan urutan terbalik (#9 ke #1).' }]
    },
    'censor-image': {
      name: 'Sensor & Sensor Buram Foto',
      shortName: 'Sensor',
      tagline: 'Sembunyikan wajah, plat nomor, dan data pribadi dengan efek buram atau mosaik.',
      seoTitle: 'Sensor & Buramkan Gambar Online — Lindungi Privasi & Hapus EXIF',
      seoDescription: 'Buramkan wajah, plat nomor mobil, dan dokumen pribadi online gratis. Penghapusan metadata EXIF otomatis.',
      keywords: ['buramkan wajah foto', 'sensor gambar online', 'pixelate foto'],
      howToSteps: [{ title: 'Unggah Gambar', description: 'Pilih foto yang ingin disensor.' }, { title: 'Tandai Area', description: 'Tarik mouse di atas data sensitif.' }, { title: 'Unduh Gambar', description: 'Simpan foto yang telah disanitasi.' }],
      features: [{ title: 'Banyak Mode', description: 'Gaussian Blur, Pixelate Mosaik, dan Kotak Hitam.' }, { title: 'Hapus EXIF', description: 'Hapus data GPS dan kamera otomatis.' }],
      faqs: [{ question: 'Apakah sensor bisa dibuka kembali?', answer: 'Tidak, data piksel diganti secara permanen.' }]
    }
  },
  tr: {
    'photo-filters': {
      name: 'Fotoğraf Filtreleri ve Efektler',
      shortName: 'Filtreler',
      tagline: 'Estetik renk filtreleri, vintage efektler ve ışık kontrollerini tarayıcınızda uygulayın.',
      seoTitle: 'Ücretsiz Fotoğraf Filtreleri Online — Renk Efektleri ve Ayarlar',
      seoDescription: 'Fotoğraflarınıza sinematik filtreler, kontrast, doygunluk ve vintage efektleri ücretsiz uygulayın. %100 gizli ve güvenli.',
      keywords: ['fotoğraf filtreleri online', 'fotoğraf efektleri ücretsiz', 'renk düzenleme'],
      howToSteps: [{ title: 'Fotoğrafı Yükle', description: 'Resmi sürükleyin veya Ctrl+V ile yapıştırın.' }, { title: 'Filtreyi Seç', description: 'Sinematik veya vintage ayarlarını uygulayın.' }, { title: 'Sonucu İndir', description: 'Geliştirilmiş fotoğrafı yüksek kalitede kaydedin.' }],
      features: [{ title: 'GPU Hızlandırma', description: 'Tarayıcıda anında işleme.' }, { title: '100% Gizlilik', description: 'Fotoğraflarınız cihazınızda kalır.' }],
      faqs: [{ question: 'Bu araç ücretsiz mi?', answer: 'Evet, sınırsız ve tamamen ücretsizdir.' }]
    },
    'meme-generator': {
      name: 'Meme Oluşturucu (Caps Yapıcı)',
      shortName: 'Meme Yapıcı',
      tagline: 'Filigransız, özel yazılı viral memeler ve capsler oluşturun.',
      seoTitle: 'Meme Oluşturucu Online Ücretsiz — Filigransız Caps Yapma',
      seoDescription: 'Klasik Impact yazı tipi ve özel renklerle kendi memelerinizi oluşturun. Filigransız yüksek çözünürlüklü indirme.',
      keywords: ['meme oluşturucu', 'caps yapma online', 'meme maker ücretsiz'],
      howToSteps: [{ title: 'Resim Seç', description: 'Fotoğraf yükleyin veya şablon seçin.' }, { title: 'Yazıyı Düzenle', description: 'Üst ve alt metinleri yazın.' }, { title: 'Meme’i İndir', description: 'Yüksek çözünürlükte kaydedin.' }],
      features: [{ title: 'Filigran Yok', description: 'Paylaşıma hazır temiz görseller.' }, { title: '100% Gizli', description: 'Sunucuya yükleme yapılmaz.' }],
      faqs: [{ question: 'Filigran ekleniyor mu?', answer: 'Hayır, tüm görseller %100 filigransızdır.' }]
    },
    'split-image': {
      name: 'Resim Bölücü & Izgara Kesici',
      shortName: 'Resim Bölücü',
      tagline: 'Fotoğrafları Instagram 3×3 ızgarasına veya panoramaya bölün ve ZIP olarak indirin.',
      seoTitle: 'Resim Bölücü Online — Instagram 3x3 Izgara & Panorama ZIP',
      seoDescription: 'Fotoğrafları Instagram 3x3 profil ızgaralarına veya kaydırılabilir panoramalara bölün. Tek tıkla ZIP formatında indirin.',
      keywords: ['resmi 3x3 bölme', 'instagram ızgara yapıcı', 'resim kesici'],
      howToSteps: [{ title: 'Fotoğrafı Yükle', description: 'Resmi veya panoramayı sürükleyin.' }, { title: 'Izgarayı Seç', description: '3×3 veya özel satır/sütun seçin.' }, { title: 'ZIP İndir', description: 'Numaralandırılmış tüm parçaları kaydedin.' }],
      features: [{ title: 'Tek Tıkla ZIP İndirme', description: 'Tüm parçalar düzenli olarak arşivlenir.' }, { title: 'Kayıpsız Kalite', description: 'Orijinal piksel netliği korunur.' }],
      faqs: [{ question: 'Instagram’a nasıl yüklenir?', answer: 'Kareleri sondan başa doğru (#9’dan #1’e) sırayla yükleyin.' }]
    },
    'censor-image': {
      name: 'Fotoğraf Sansürleme ve Bulanıklaştırma',
      shortName: 'Sansürle',
      tagline: 'Yüzleri, plakaları ve gizli bilgileri bulanıklaştırma veya mozaikle gizleyin.',
      seoTitle: 'Fotoğraf Sansürleme ve Bulanıklaştırma Online — Gizlilik ve EXIF Silme',
      seoDescription: 'Fotoğraflardaki yüzleri, araç plakalarını ve hassas belgeleri ücretsiz sansürleyin. EXIF verileri otomatik silinir.',
      keywords: ['yüz bulanıklaştırma', 'fotoğraf sansürleme', 'mozaik yapma online'],
      howToSteps: [{ title: 'Görseli Yükle', description: 'Sansürlenecek fotoğrafı seçin.' }, { title: 'Alanları Çiz', description: 'Gizlenecek yerlerin üzerini fareyle çizin.' }, { title: 'Güvenle İndir', description: 'Temizlenmiş fotoğrafı kaydedin.' }],
      features: [{ title: 'Çoklu Mod', description: 'Gauss Bulanıklığı, Mozaik ve Siyah Bant.' }, { title: 'EXIF Temizleme', description: 'GPS ve kamera bilgilerini otomatik siler.' }],
      faqs: [{ question: 'Sansür geri alınabilir mi?', answer: 'Hayır, pikseller kalıcı olarak değiştirilir.' }]
    }
  }
};

const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'id', 'tr'];

for (const loc of locales) {
  const filePath = resolve(process.cwd(), `src/i18n/tools/${loc}.ts`);
  let content = readFileSync(filePath, 'utf-8');
  const toolsData = NEW_TOOLS_DATA[loc] || NEW_TOOLS_DATA['en'];

  // Find the closing bracket of the exported object (e.g. "};" at the end of the file)
  const lastCloseIdx = content.lastIndexOf('};');
  if (lastCloseIdx === -1) {
    console.error(`Could not find closing bracket in ${loc}.ts`);
    continue;
  }

  // Format the new tool entries cleanly
  const formattedEntries = Object.entries(toolsData)
    .filter(([slug]) => !content.includes(`"${slug}":`))
    .map(([slug, data]) => {
      const json = JSON.stringify(data, null, 2)
        .split('\n')
        .map((l, i) => (i === 0 ? `  "${slug}": ${l}` : `  ${l}`))
        .join('\n');
      return json;
    })
    .join(',\n');

  if (formattedEntries.trim().length > 0) {
    const before = content.slice(0, lastCloseIdx).trimEnd();
    const needsComma = !before.endsWith(',');
    const newContent = before + (needsComma ? ',\n' : '\n') + formattedEntries + '\n};\n';
    writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Cleanly injected entries into ${loc}.ts`);
  } else {
    console.log(`ℹ️ Entries already present in ${loc}.ts`);
  }
}

console.log('\n🎉 Successfully updated all 10 language dictionaries!');
