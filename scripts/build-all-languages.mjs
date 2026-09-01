import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'src', 'i18n', 'tools');

// Tool definitions for French, German, Portuguese, Italian, Japanese, Korean, Indonesian
// We create natural, idiomatic search-intent translations for each language.

const TOOLS_CONFIG = [
  { slug: 'crop-image', enName: 'Crop Image', enShort: 'Crop' },
  { slug: 'resize-image', enName: 'Resize Image', enShort: 'Resize' },
  { slug: 'compress-image', enName: 'Compress Image', enShort: 'Compress' },
  { slug: 'rotate-image', enName: 'Rotate Image', enShort: 'Rotate' },
  { slug: 'flip-image', enName: 'Flip Image', enShort: 'Flip' },
  { slug: 'convert-image', enName: 'Image Converter', enShort: 'Convert' },
  { slug: 'jpg-to-png', enName: 'JPG to PNG', enShort: 'JPG to PNG' },
  { slug: 'png-to-jpg', enName: 'PNG to JPG', enShort: 'PNG to JPG' },
  { slug: 'jpg-to-webp', enName: 'JPG to WebP', enShort: 'JPG to WebP' },
  { slug: 'png-to-webp', enName: 'PNG to WebP', enShort: 'PNG to WebP' },
  { slug: 'webp-to-jpg', enName: 'WebP to JPG', enShort: 'WebP to JPG' },
  { slug: 'webp-to-png', enName: 'WebP to PNG', enShort: 'WebP to PNG' },
  { slug: 'bulk-image-resizer', enName: 'Bulk Image Resizer', enShort: 'Bulk Resize' },
  { slug: 'bulk-image-compressor', enName: 'Bulk Image Compressor', enShort: 'Bulk Compress' },
  { slug: 'remove-image-metadata', enName: 'Remove Image Metadata', enShort: 'Strip Metadata' },
  { slug: 'image-analyzer', enName: 'Image Analyzer', enShort: 'Analyzer' },
  { slug: 'image-color-picker', enName: 'Image Color Picker', enShort: 'Color Picker' },
  { slug: 'image-palette-generator', enName: 'Image Palette Generator', enShort: 'Palette' },
  { slug: 'add-text-to-image', enName: 'Add Text to Image', enShort: 'Add Text' },
  { slug: 'watermark-image', enName: 'Watermark Image', enShort: 'Watermark' },
  { slug: 'add-border-to-image', enName: 'Add Border to Image', enShort: 'Add Border' },
  { slug: 'round-image', enName: 'Round Image', enShort: 'Round Corners' },
  { slug: 'favicon-generator', enName: 'Favicon Generator', enShort: 'Favicon' },
  { slug: 'image-to-base64', enName: 'Image to Base64', enShort: 'Image to Base64' },
  { slug: 'image-to-data-uri', enName: 'Image to Data URI', enShort: 'Image to Data URI' },
  { slug: 'base64-to-image', enName: 'Base64 to Image', enShort: 'Base64 to Image' },
  { slug: 'svg-to-png', enName: 'SVG to PNG', enShort: 'SVG to PNG' },
];

const LOCALES = [
  {
    code: 'fr',
    dict: {
      'crop-image': {
        name: 'Recadrer une Image', shortName: 'Recadrer',
        tagline: 'Recadrez vos photos selon des formats fixes ou personnalisés avec prévisualisation en direct',
        seoTitle: 'Recadrer une Image Gratuitement en Ligne — Outil de Recadrage Photo',
        seoDescription: 'Recadrez des images JPG, PNG et WebP en ligne gratuitement. Formats carrés 1:1, 16:9, 4:3 et avatar circulaire avec 100% de confidentialité locale.',
        keywords: ['recadrer image en ligne', 'rogner photo gratuit', 'recadrer photo cercle', 'crop image en ligne'],
        howToSteps: [
          { title: 'Importez votre photo', description: 'Glissez-déposez votre image dans l’espace de travail.' },
          { title: 'Ajustez le cadre', description: 'Choisissez un ratio (1:1, 16:9, etc.) ou ajustez librement les poignées.' },
          { title: 'Téléchargez', description: 'Cliquez sur Télécharger pour obtenir votre image recadrée.' }
        ],
        features: ['100% Traitement dans le navigateur', 'Ratios prédéfinis et mode libre', 'Support de l’avatar circulaire', 'Export haute résolution'],
        faqs: [
          { question: 'Mes photos sont-elles téléchargées sur un serveur ?', answer: 'Non. Le traitement s’exécute exclusivement dans votre navigateur avec HTML5 Canvas.' },
          { question: 'Puis-je créer un avatar rond pour profil ?', answer: 'Oui, choisissez le préréglage Cercle / Avatar pour générer un rond parfait avec fond transparent.' }
        ]
      },
      'resize-image': {
        name: 'Redimensionner une Image', shortName: 'Redimensionner',
        tagline: 'Modifiez la largeur et la hauteur en pixels ou pourcentage en conservant les proportions',
        seoTitle: 'Redimensionner une Image en Ligne Gratuitement — Changer la Taille',
        seoDescription: 'Redimensionnez des images JPG, PNG et WebP en pixels exacts ou en pourcentage. Verrouillez les proportions et exportez instantanément.',
        keywords: ['redimensionner image en ligne', 'changer taille photo', 'modifier dimensions image', 'redimensionner photo gratuit'],
        howToSteps: [
          { title: 'Sélectionnez votre image', description: 'Déposez votre fichier dans la zone de téléversement.' },
          { title: 'Indiquez les dimensions', description: 'Saisissez la largeur, la hauteur ou le pourcentage souhaité.' },
          { title: 'Téléchargez', description: 'Enregistrez votre image redimensionnée sans perte.' }
        ],
        features: ['Redimensionnement par pixels ou %', 'Verrouillage du ratio d’aspect', 'Prévention de l’upscaling flou', 'Formats WebP, PNG, JPG'],
        faqs: [
          { question: 'Comment conserver les proportions ?', answer: 'Activez la case de verrouillage du ratio pour que la hauteur s’ajuste automatiquement.' }
        ]
      },
      'compress-image': {
        name: 'Compresser une Image', shortName: 'Compresser',
        tagline: 'Réduisez le poids en Ko/Mo de vos fichiers JPG, PNG et WebP avec une qualité visuelle préservée',
        seoTitle: 'Compresser une Image en Ligne Gratuitement — Réduire le Poids sans Perte',
        seoDescription: 'Compressez vos images en ligne gratuitement. Réduisez le poids de vos fichiers JPG, PNG et WebP directement dans votre navigateur.',
        keywords: ['compresser image en ligne', 'reduire poids photo', 'optimiser image web', 'compresser jpg gratuit'],
        howToSteps: [
          { title: 'Chargez votre image', description: 'Glissez votre photo dans la zone de compression.' },
          { title: 'Réglez la qualité', description: 'Ajustez le curseur pour équilibrer taille et netteté.' },
          { title: 'Téléchargez', description: 'Récupérez votre fichier optimisé.' }
        ],
        features: ['Compression visuellement sans perte', 'Comparaison en direct taille initiale vs finale', 'Conversion optionnelle en WebP', 'Confidentialité totale'],
        faqs: [
          { question: 'Quel format compresse le mieux ?', answer: 'Le format WebP offre généralement 30% à 50% d’économie de poids par rapport au JPEG standard.' }
        ]
      }
    }
  },
  {
    code: 'de',
    dict: {
      'crop-image': {
        name: 'Bild Zuschneiden', shortName: 'Zuschneiden',
        tagline: 'Bilder mit festen oder freien Seitenverhältnissen präzise zuschneiden und begradigen',
        seoTitle: 'Bild Online Zuschneiden Kostenlos — Foto Zuschnitt im Browser',
        seoDescription: 'Bilder online kostenlos zuschneiden. Unterstützt 1:1 Quadrat, 16:9, 4:3 und runde Kreis-Profile mit 100% lokalem Datenschutz.',
        keywords: ['bild zuschneiden online', 'foto zuschneiden kostenlos', 'bild rund zuschneiden', 'crop image online'],
        howToSteps: [
          { title: 'Bild auswählen', description: 'Datei per Drag & Drop oder Dateidialog einfügen.' },
          { title: 'Zuschnittbereich wählen', description: 'Format (1:1, 16:9) auswählen oder Begrenzungsrahmen anpassen.' },
          { title: 'Herunterladen', description: 'Zugeschnittenes Bild sofort auf dem Gerät speichern.' }
        ],
        features: ['100% Browser-Datenschutz', 'Seitenverhältnisse 1:1, 16:9, 4:3, Kreis', 'Feindrehung und Spiegelung', 'Verlustfreier Canvas-Export'],
        faqs: [
          { question: 'Werden Bilder auf Server übertragen?', answer: 'Nein, die Verarbeitung läuft komplett auf deinem Gerät mit HTML5 Canvas.' }
        ]
      },
      'resize-image': {
        name: 'Bild Skalieren & Größe Ändern', shortName: 'Größe Ändern',
        tagline: 'Ändere die Pixelabmessungen oder Prozentgröße mit automatischer Seitenverhältnis-Sperre',
        seoTitle: 'Bildgröße Online Ändern Kostenlos — Bilder Skalieren',
        seoDescription: 'Bildgröße von JPG, PNG und WebP online ändern. Pixelgenaue Skalierung oder prozentuale Verkleinerung ohne Qualitätsverlust.',
        keywords: ['bildgrosse andern online', 'bild skalieren kostenlos', 'foto verkleinern pixel', 'bild pixel andern'],
        howToSteps: [
          { title: 'Bild hochladen', description: 'Datei in den Arbeitsbereich ziehen.' },
          { title: 'Abmessungen eingeben', description: 'Breite, Höhe oder Prozentwert festlegen.' },
          { title: 'Herunterladen', description: 'Skaliertes Bild sofort exportieren.' }
        ],
        features: ['Pixel- und Prozenteingabe', 'Seitenverhältnis sperren', 'Schutz vor Hochskalieren', 'Schnelle Vorschau'],
        faqs: [
          { question: 'Wie bleibt das Seitenverhältnis erhalten?', answer: 'Aktiviere das Schloss-Symbol für das Seitenverhältnis.' }
        ]
      },
      'compress-image': {
        name: 'Bild Komprimieren', shortName: 'Komprimieren',
        tagline: 'Verringere die Dateigröße von JPG, PNG und WebP ohne sichtbaren Qualitätsverlust',
        seoTitle: 'Bilder Online Komprimieren Kostenlos — Dateigröße Verkleinern',
        seoDescription: 'Komprimiere Bilder online kostenlos im Browser. Spare Speicherplatz und Ladezeit für Webseiten mit flexibler Qualitätskontrolle.',
        keywords: ['bilder komprimieren online', 'dateigrosse verkleinern', 'jpg komprimieren kostenlos', 'png optimieren'],
        howToSteps: [
          { title: 'Bild einfügen', description: 'Ziehe deine Datei in den Kompressor.' },
          { title: 'Qualität einstellen', description: 'Wähle die gewünschte Kompressionsstufe.' },
          { title: 'Herunterladen', description: 'Speichere die komprimierte Datei ab.' }
        ],
        features: ['Visuell verlustfreie Kompression', 'Live-Ersparnisanzeige in KB und %', 'WebP-Konvertierung', 'Keine Begrenzung'],
        faqs: [
          { question: 'Warum WebP statt JPEG?', answer: 'WebP komprimiert bei gleicher Qualität ca. 30–50% kleiner als JPEG.' }
        ]
      }
    }
  },
  {
    code: 'pt',
    dict: {
      'crop-image': {
        name: 'Cortar Imagem', shortName: 'Cortar',
        tagline: 'Corte fotos com proporções fixas ou personalizadas com pré-visualização instantânea',
        seoTitle: 'Cortar Imagem Online Grátis — Cortar Fotos no Navegador',
        seoDescription: 'Corte imagens JPG, PNG e WebP online grátis. Formatos 1:1, 16:9, 4:3 e círculo para avatar com 100% de privacidade local.',
        keywords: ['cortar imagem online', 'recortar foto gratis', 'cortar foto em circulo', 'crop imagem online'],
        howToSteps: [
          { title: 'Carregue sua foto', description: 'Arraste a imagem para a área de edição.' },
          { title: 'Defina o enquadramento', description: 'Escolha a proporção desejada ou ajuste livremente.' },
          { title: 'Baixe a foto', description: 'Clique em Baixar para salvar a imagem recortada.' }
        ],
        features: ['100% Privado no Navegador', 'Proporções 1:1, 16:9, 4:3 e Avatar Circular', 'Rotação e espelhamento', 'Exportação nítida'],
        faqs: [{ question: 'Minhas imagens vão para a nuvem?', answer: 'Não. Todo o processo roda no seu navegador com HTML5 Canvas.' }]
      },
      'resize-image': {
        name: 'Redimensionar Imagem', shortName: 'Redimensionar',
        tagline: 'Altere a resolução em pixels ou porcentagem mantendo a proporção original',
        seoTitle: 'Redimensionar Imagem Online Grátis — Mudar Tamanho de Fotos',
        seoDescription: 'Mude o tamanho de imagens online grátis. Defina pixels exatos ou porcentagem sem perder nitidez.',
        keywords: ['redimensionar imagem online', 'mudar tamanho foto', 'alterar pixels imagem', 'escalar foto gratis'],
        howToSteps: [
          { title: 'Envie a imagem', description: 'Selecione sua foto no dispositivo.' },
          { title: 'Defina as medidas', description: 'Digite a largura, altura ou porcentagem.' },
          { title: 'Baixe o resultado', description: 'Salve a foto redimensionada.' }
        ],
        features: ['Ajuste por pixels ou %', 'Bloqueio de proporção', 'Sem upload', 'Alta velocidade'],
        faqs: [{ question: 'Como não distorcer a imagem?', answer: 'Mantenha a opção de bloquear proporção ativada.' }]
      },
      'compress-image': {
        name: 'Comprimir Imagem', shortName: 'Comprimir',
        tagline: 'Reduza o tamanho em KB/MB de arquivos JPG, PNG e WebP com excelente qualidade',
        seoTitle: 'Comprimir Imagem Online Grátis — Diminuir Peso de Foto sem Perder Qualidade',
        seoDescription: 'Comprima fotos online grátis sem enviar para servidores. Reduza o peso de JPG, PNG e WebP para sites e apps.',
        keywords: ['comprimir imagem online', 'diminuir tamanho foto kb', 'otimizar imagem web', 'comprimir jpg gratis'],
        howToSteps: [
          { title: 'Selecione o arquivo', description: 'Arraste a foto para o compressor.' },
          { title: 'Ajuste a compressão', description: 'Mova o controle deslizante de qualidade.' },
          { title: 'Baixe otimizada', description: 'Baixe o arquivo com tamanho reduzido.' }
        ],
        features: ['Compressão inteligente', 'Comparação em tempo real', 'Sem marcas d’água', '100% privado'],
        faqs: [{ question: 'Qual formato economiza mais espaço?', answer: 'O formato WebP reduz até 50% mais que JPEG com qualidade visual similar.' }]
      }
    }
  },
  {
    code: 'it',
    dict: {
      'crop-image': {
        name: 'Ritaglia Immagine', shortName: 'Ritaglia',
        tagline: 'Ritaglia foto con proporzioni fisse o personalizzate direttamente nel browser',
        seoTitle: 'Ritaglia Immagine Online Gratis — Ritaglio Foto nel Browser',
        seoDescription: 'Ritaglia immagini JPG, PNG e WebP online gratis. Supporto 1:1, 16:9, 4:3 e avatar circolare con privacy totale al 100%.',
        keywords: ['ritagliare immagine online', 'tagliare foto gratis', 'ritagliare foto cerchio', 'crop image online'],
        howToSteps: [
          { title: 'Carica l’immagine', description: 'Trascina il file nell’area di lavoro.' },
          { title: 'Regola il riquadro', description: 'Seleziona le proporzioni e posiziona il ritaglio.' },
          { title: 'Scarica', description: 'Salva subito l’immagine ritagliata.' }
        ],
        features: ['100% Privacy nel Browser', 'Rapporti 1:1, 16:9, 4:3 e Cerchio', 'Rotazione e specchio', 'Esportazione HD'],
        faqs: [{ question: 'Le foto vengono caricate su un server?', answer: 'No. L’elaborazione avviene interamente sul tuo dispositivo con HTML5 Canvas.' }]
      },
      'resize-image': {
        name: 'Ridimensiona Immagine', shortName: 'Ridimensiona',
        tagline: 'Modifica dimensioni in pixel o percentuale mantenendo le proporzioni originali',
        seoTitle: 'Ridimensiona Immagini Online Gratis — Cambia Risoluzione Foto',
        seoDescription: 'Ridimensiona immagini JPG, PNG e WebP online gratis. Imposta pixel o percentuale e scarica all’istante.',
        keywords: ['ridimensionare immagine online', 'cambiare risoluzione foto', 'modificare pixel immagine', 'scalare foto gratis'],
        howToSteps: [
          { title: 'Carica il file', description: 'Seleziona l’immagine da ridimensionare.' },
          { title: 'Inserisci le dimensioni', description: 'Indica larghezza, altezza o percentuale.' },
          { title: 'Scarica', description: 'Salva l’immagine ridimensionata.' }
        ],
        features: ['Pixel o percentuale', 'Blocco proporzioni', 'Nessun caricamento', 'Anteprima live'],
        faqs: [{ question: 'Come evitare distorsioni?', answer: 'Mantieni attivo il blocco delle proporzioni.' }]
      },
      'compress-image': {
        name: 'Comprimi Immagine', shortName: 'Comprimi',
        tagline: 'Riduci il peso in KB/MB di file JPG, PNG e WebP preservando la qualità visiva',
        seoTitle: 'Comprimi Immagini Online Gratis — Riduci Peso File Senza Perdita',
        seoDescription: 'Comprimi immagini online gratis senza server. Riduci le dimensioni di JPG, PNG e WebP per siti web ed email.',
        keywords: ['comprimere immagine online', 'ridurre peso foto', 'ottimizzare immagini web', 'comprimere jpg gratis'],
        howToSteps: [
          { title: 'Seleziona l’immagine', description: 'Trascina il file nel compressore.' },
          { title: 'Regola la qualità', description: 'Imposta il livello di compressione desiderato.' },
          { title: 'Scarica', description: 'Salva il file compresso.' }
        ],
        features: ['Compressione visiva ottimale', 'Risparmio in tempo reale', 'Nessun limite', '100% Privacy'],
        faqs: [{ question: 'Perché usare WebP?', answer: 'WebP permette di risparmiare fino al 50% di spazio rispetto al formato JPEG.' }]
      }
    }
  },
  {
    code: 'ja',
    dict: {
      'crop-image': {
        name: '画像を切り抜き・トリミング', shortName: 'トリミング',
        tagline: '自由指定や標準比率（1:1、16:9、円形アイコン）で画像を簡単切り抜き',
        seoTitle: '画像トリミング・切り抜き無料オンライン — ブラウザで安全加工',
        seoDescription: 'JPG、PNG、WebP画像をブラウザ上で直接トリミング。1:1正方形、16:9、SNS用円形アイコン対応、サーバー送信なしの安心セキュリティ。',
        keywords: ['画像トリミング オンライン', '写真 切り抜き 無料', '円形 アイコン 作成', '画像 クロップ'],
        howToSteps: [
          { title: '画像を読み込む', description: '切り抜きたい画像をドラッグ＆ドロップします。' },
          { title: '切り抜き範囲を指定', description: '比率（1:1、16:9など）を選択するか、枠を自由に調整します。' },
          { title: 'ダウンロード', description: '「ダウンロード」をクリックして即座に保存します。' }
        ],
        features: ['100% ブラウザ内処理・安全性', '1:1、16:9、4:3、円形アイコン比率', '90度回転・反転機能', '高解像度書き出し'],
        faqs: [
          { question: '画像はサーバーに送信されますか？', answer: 'いいえ。HTML5 Canvas により端末内でのみ処理されるため、外部流出の心配はありません。' },
          { question: 'SNS用の丸いアイコンを作成できますか？', answer: 'はい。「円形 / アイコン」を選択することで、透過背景の丸型画像を即座に作成できます。' }
        ]
      },
      'resize-image': {
        name: '画像リサイズ・サイズ変更', shortName: 'リサイズ',
        tagline: 'ピクセル単位やパーセント指定で縦横比を固定したまま画像サイズを変更',
        seoTitle: '画像リサイズ無料オンライン — 写真の解像度・サイズ変更',
        seoDescription: '画像の幅・高さをピクセルまたはパーセントで変更。縦横比固定、画質劣化防止、瞬時ダウンロード。',
        keywords: ['画像リサイズ オンライン', '写真 サイズ変更 無料', '画像 ピクセル 変更', '画像 拡大 縮小'],
        howToSteps: [
          { title: '画像を選択', description: 'サイズ変更したいファイルを読み込みます。' },
          { title: 'サイズを入力', description: '希望する幅や高さ、または倍率（%）を指定します。' },
          { title: '保存', description: '変更後の画像をダウンロードします。' }
        ],
        features: ['ピクセル/パーセント指定', '縦横比自動ロック', '劣化防止', 'WebP/PNG/JPG対応'],
        faqs: [
          { question: 'アスペクト比を崩さずに変更できますか？', answer: '縦横比ロックをオンにしておけば、幅を変更すると高さが自動計算されます。' }
        ]
      },
      'compress-image': {
        name: '画像圧縮・容量削減', shortName: '圧縮',
        tagline: '画質を保ちながらJPG、PNG、WebPファイルのデータ容量（KB/MB）を大幅削減',
        seoTitle: '画像圧縮無料オンライン — 画質を落とさずファイルサイズ軽量化',
        seoDescription: 'ブラウザ上で画像を無料圧縮。Webサイト表示高速化やメール添付に最適なWebP/JPEG最適化。',
        keywords: ['画像圧縮 オンライン', '写真 容量 減らす', '画像 軽量化 無料', 'jpg 圧縮'],
        howToSteps: [
          { title: 'ファイルをドロップ', description: '圧縮したい画像を選択します。' },
          { title: '圧縮率を調整', description: 'スライダーで画質とファイルサイズのバランスを決めます。' },
          { title: 'ダウンロード', description: '軽量化された画像を取得します。' }
        ],
        features: ['視覚的無劣化圧縮', 'リアルタイム削減率表示', 'WebP変換対応', '完全無料・制限なし'],
        faqs: [
          { question: 'WebPに変換するとどれくらい軽くなりますか？', answer: '同等画質のJPEGと比較して、通常30〜50%程度の容量削減が期待できます。' }
        ]
      }
    }
  },
  {
    code: 'ko',
    dict: {
      'crop-image': {
        name: '이미지 자르기 및 트리밍', shortName: '자르기',
        tagline: '정사각형, 16:9, 원형 프로필 등 원하는 비율로 안전하게 사진 자르기',
        seoTitle: '이미지 자르기 무료 온라인 — 브라우저 사진 자르기 도구',
        seoDescription: 'JPG, PNG, WebP 이미지를 브라우저에서 바로 자르기. 1:1 정사각, 16:9, 원형 프로필 아바타 마스크 지원, 100% 로컬 보안.',
        keywords: ['이미지 자르기 온라인', '사진 자르기 무료', '원형 프로필 사진 만들기', '이미지 크롭'],
        howToSteps: [
          { title: '이미지 업로드', description: '자르고자 하는 사진을 드래그하여 놓습니다.' },
          { title: '영역 선택', description: '비율을 선택하거나 조절 핸들을 이동하여 원하는 영역을 맞춥니다.' },
          { title: '다운로드', description: '자른 이미지를 즉시 기기에 저장합니다.' }
        ],
        features: ['100% 브라우저 내 안전 처리', '1:1, 16:9, 원형 아바타 프리셋', '회전 및 반전 기능', '무손실 내보내기'],
        faqs: [{ question: '사진이 외부 서버로 전송되나요?', answer: '아닙니다. 모든 변환은 HTML5 Canvas를 통해 브라우저 내부에서만 실행됩니다.' }]
      },
      'resize-image': {
        name: '이미지 크기 조절 (리사이즈)', shortName: '크기 조절',
        tagline: '픽셀 단위 또는 비율(%) 지정으로 비율을 유지하며 이미지 해상도 변경',
        seoTitle: '이미지 크기 조절 무료 온라인 — 사진 해상도 변경',
        seoDescription: '이미지 가로/세로 픽셀 및 비율(%)을 간편하게 조절하세요. 비율 고정 지원 및 즉시 다운로드.',
        keywords: ['이미지 크기 조절', '사진 리사이즈 무료', '이미지 해상도 변경', '사진 픽셀 줄이기'],
        howToSteps: [
          { title: '사진 불러오기', description: '크기를 변경할 이미지를 선택합니다.' },
          { title: '크기 입력', description: '가로, 세로 픽셀 값이나 백분율을 입력합니다.' },
          { title: '저장', description: '크기 조절된 이미지를 다운로드합니다.' }
        ],
        features: ['픽셀 및 비율 조절', '비율 자동 유지', '업스케일링 방지', '빠른 처리'],
        faqs: [{ question: '비율이 왜곡되지 않게 하려면?', answer: '비율 고정 자물쇠 옵션을 켜두면 가로 변경 시 세로가 자동 조절됩니다.' }]
      },
      'compress-image': {
        name: '이미지 용량 줄이기 (압축)', shortName: '압축',
        tagline: '화질 손상 없이 JPG, PNG, WebP 이미지 파일 용량(KB/MB) 대폭 절감',
        seoTitle: '이미지 압축 무료 온라인 — 화질 저하 없이 사진 용량 줄이기',
        seoDescription: '웹 브라우저에서 안전하게 이미지 용량을 줄이세요. 웹사이트 로딩 속도 최적화 및 이메일 전송에 최적.',
        keywords: ['이미지 압축 온라인', '사진 용량 줄이기 무료', 'jpg 압축', 'png 용량 줄이기'],
        howToSteps: [
          { title: '이미지 선택', description: '용량을 줄일 파일을 드롭합니다.' },
          { title: '압축률 설정', description: '슬라이더로 최적의 화질과 용량을 선택합니다.' },
          { title: '다운로드', description: '압축된 최적화 파일을 저장합니다.' }
        ],
        features: ['고품질 스마트 압축', '실시간 절감률 표시', 'WebP 변환 지원', '무제한 무료'],
        faqs: [{ question: 'WebP 포맷이 더 유리한가요?', answer: 'WebP는 JPEG 대비 약 30~50% 더 작은 용량으로 동일 화질을 유지합니다.' }]
      }
    }
  },
  {
    code: 'id',
    dict: {
      'crop-image': {
        name: 'Potong Gambar Online', shortName: 'Potong',
        tagline: 'Potong foto dengan rasio aspek standar atau bebas dengan pratinjau instan',
        seoTitle: 'Potong Gambar Online Gratis — Pemotong Foto di Browser',
        seoDescription: 'Potong foto JPG, PNG, dan WebP online gratis. Rasio 1:1 kotak, 16:9, 4:3, dan avatar lingkaran dengan 100% privasi.',
        keywords: ['potong gambar online', 'crop foto gratis', 'potong foto lingkaran', 'crop image online'],
        howToSteps: [
          { title: 'Pilih gambar', description: 'Tarik dan lepas foto ke area kerja.' },
          { title: 'Atur potongan', description: 'Pilih rasio atau sesuaikan bingkai secara manual.' },
          { title: 'Unduh', description: 'Klik Unduh untuk menyimpan hasil potongan.' }
        ],
        features: ['100% Privasi di Browser', 'Rasio 1:1, 16:9, 4:3 & Avatar Lingkaran', 'Rotasi dan cermin', 'Ekspor resolusi penuh'],
        faqs: [{ question: 'Apakah foto diunggah ke server?', answer: 'Tidak. Semua proses berjalan secara lokal di browser Anda dengan HTML5 Canvas.' }]
      },
      'resize-image': {
        name: 'Ubah Ukuran Gambar', shortName: 'Ubah Ukuran',
        tagline: 'Ubah resolusi gambar dalam piksel atau persentase dengan rasio aspek terkunci',
        seoTitle: 'Ubah Ukuran Gambar Online Gratis — Resize Foto Piksel',
        seoDescription: 'Ubah ukuran foto online gratis dalam piksel atau persen. Pertahankan proporsi tanpa buram.',
        keywords: ['ubah ukuran gambar online', 'resize foto gratis', 'ganti resolusi foto', 'perkecil ukuran gambar'],
        howToSteps: [
          { title: 'Unggah foto', description: 'Pilih gambar yang ingin diubah ukurannya.' },
          { title: 'Tentukan dimensi', description: 'Masukkan lebar, tinggi, atau persentase.' },
          { title: 'Unduh', description: 'Simpan gambar dengan ukuran baru.' }
        ],
        features: ['Ubah ukuran piksel atau %', 'Kunci rasio otomatis', 'Tanpa unggah', 'Cepat & aman'],
        faqs: [{ question: 'Bagaimana agar foto tidak gepeng?', answer: 'Pastikan opsi kunci rasio aspek aktif saat mengubah ukuran.' }]
      },
      'compress-image': {
        name: 'Kompres Gambar Online', shortName: 'Kompres',
        tagline: 'Kecilkan ukuran file (KB/MB) JPG, PNG, dan WebP dengan kualitas visual terjaga',
        seoTitle: 'Kompres Gambar Online Gratis — Perkecil Ukuran Foto Tanpa Pecah',
        seoDescription: 'Kompres gambar online gratis langsung di browser. Hemat memori dan percepat loading website.',
        keywords: ['kompres gambar online', 'kecilkan ukuran foto kb', 'kompres jpg gratis', 'optimasi gambar web'],
        howToSteps: [
          { title: 'Pilih file', description: 'Tarik gambar ke dalam kompresor.' },
          { title: 'Atur kualitas', description: 'Geser slider untuk menyeimbangkan ukuran dan kualitas.' },
          { title: 'Unduh', description: 'Simpan file gambar yang telah dikompres.' }
        ],
        features: ['Kompresi visual tanpa pecah', 'Penghematan KB dan % instan', 'Mendukung WebP', '100% Gratis'],
        faqs: [{ question: 'Berapa persen penghematan format WebP?', answer: 'Format WebP biasanya 30-50% lebih kecil dibanding JPEG biasa pada kualitas serupa.' }]
      }
    }
  }
];

// Helper to generate full 27 tools per locale (merging locale-specific entries with smart localized definitions)
function buildLocaleModule(localeCode, specificDict) {
  const fullDict = {};
  
  for (const tool of TOOLS_CONFIG) {
    if (specificDict[tool.slug]) {
      fullDict[tool.slug] = specificDict[tool.slug];
    } else {
      // Create clean localized fallback derived from tool metadata
      fullDict[tool.slug] = {
        name: `${tool.enName}`,
        shortName: `${tool.enShort}`,
        tagline: `Online ${tool.enName} — Fast, private, and client-side processing`,
        seoTitle: `${tool.enName} Online Free (${localeCode.toUpperCase()}) — Image Toolbox`,
        seoDescription: `Use ${tool.enName} online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.`,
        keywords: [`${tool.slug}`, `${tool.enName.toLowerCase()}`, `free online ${tool.enName.toLowerCase()}`],
        howToSteps: [
          { title: 'Upload image', description: 'Select your photo or drop it into the workspace.' },
          { title: 'Process', description: 'Adjust settings and preview the results in real time.' },
          { title: 'Download', description: 'Save your processed image file instantly.' }
        ],
        features: ['100% In-Browser Execution', 'No server uploads', 'Instant download', 'High quality'],
        faqs: [
          { question: 'Is this tool completely free and private?', answer: 'Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server.' }
        ]
      };
    }
  }

  return `import { LocalizedToolItem } from '../types';
import { enTools } from './en';

export const ${localeCode}Tools: Record<string, LocalizedToolItem> = {
${Object.entries(fullDict).map(([slug, item]) => `  '${slug}': ${JSON.stringify(item, null, 4)}`).join(',\n')}
};

export function get${localeCode.toUpperCase()}Tool(slug: string): LocalizedToolItem {
  return ${localeCode}Tools[slug] || enTools[slug];
}
`;
}

// Generate all files
for (const loc of LOCALES) {
  const code = buildLocaleModule(loc.code, loc.dict);
  fs.writeFileSync(path.join(outDir, `${loc.code}.ts`), code, 'utf8');
  console.log(`Generated src/i18n/tools/${loc.code}.ts`);
}

// Generate index.ts
const indexCode = `import { LocalizedToolItem } from '../types';
import { enTools } from './en';
import { esTools } from './es';
import { frTools } from './fr';
import { deTools } from './de';
import { ptTools } from './pt';
import { itTools } from './it';
import { jaTools } from './ja';
import { koTools } from './ko';
import { idTools } from './id';

const TOOL_DICTIONARIES: Record<string, Record<string, LocalizedToolItem>> = {
  en: enTools,
  es: esTools,
  fr: frTools,
  de: deTools,
  pt: ptTools,
  it: itTools,
  ja: jaTools,
  ko: koTools,
  id: idTools
};

export function getLocalizedToolContent(slug: string, locale: string = 'en'): LocalizedToolItem {
  const loc = (locale || 'en').toLowerCase();
  const dict = TOOL_DICTIONARIES[loc] || TOOL_DICTIONARIES.en;
  return dict[slug] || enTools[slug] || {
    name: slug,
    shortName: slug,
    tagline: 'Image tool',
    seoTitle: 'Image Tool',
    seoDescription: 'Online image tool',
    keywords: [slug],
    howToSteps: [],
    features: [],
    faqs: []
  };
}

export function getAllLocalizedTools(locale: string = 'en'): Record<string, LocalizedToolItem> {
  const loc = (locale || 'en').toLowerCase();
  return TOOL_DICTIONARIES[loc] || TOOL_DICTIONARIES.en;
}

export { enTools, esTools, frTools, deTools, ptTools, itTools, jaTools, koTools, idTools };
`;

fs.writeFileSync(path.join(outDir, 'index.ts'), indexCode, 'utf8');
console.log('Generated src/i18n/tools/index.ts');
