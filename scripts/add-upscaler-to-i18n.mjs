import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const locales = {
  en: {
    name: 'AI Image Upscaler',
    shortName: 'AI Upscaler',
    tagline: 'Enhance photo resolution with 2× and 4× neural super-resolution in your browser.',
    seoTitle: 'AI Image Upscaler Online — Free 2x & 4x Neural Super-Resolution',
    seoDescription: 'Upscale and enhance images with AI super-resolution directly in your browser. 2x and 4x scaling with zero server uploads and 100% privacy.',
    keywords: ['ai image upscaler', 'ai super resolution', 'upscale image online', 'enhance photo resolution', 'sub-pixel cnn'],
    howToSteps: [
      { title: 'Upload Photo', description: 'Drag and drop any JPG, PNG, or WebP photo into the workspace.' },
      { title: 'Choose Scale Factor', description: 'Select 2× or 4× neural super-resolution mode.' },
      { title: 'Download Upscaled Image', description: 'Inspect the before/after comparison and download the enhanced high-resolution file.' },
    ],
    features: [
      { title: '100% In-Browser Inference', description: 'Neural network runs entirely on your device via WebGPU / WebGL.' },
      { title: 'Sub-Pixel Super-Resolution', description: 'Reconstructs high-frequency edge gradients on the luminance channel.' },
      { title: 'Interactive Before/After Slider', description: 'Compare original and AI-upscaled details side by side.' },
    ],
    faqs: [
      { question: 'Is my image uploaded to any server or AI API?', answer: 'No. All neural inference runs 100% client-side inside your browser memory.' },
      { question: 'What is the maximum supported resolution?', answer: 'Input images up to 4 Megapixels (e.g. 2000×2000 px) are supported to prevent browser memory limits.' },
    ],
  },
  es: {
    name: 'Escalador de Imágenes por IA',
    shortName: 'Escalar IA',
    tagline: 'Aumenta la resolución de tus fotos con superresolución neuronal 2× y 4× en tu navegador.',
    seoTitle: 'Escalador de Imágenes con IA Online — Superresolución 2x y 4x Gratis',
    seoDescription: 'Aumenta la calidad y resolución de tus fotos con IA directamente en tu navegador. Procesamiento 100% privado y gratuito.',
    keywords: ['escalador de imagenes ia', 'aumentar resolucion foto ia', 'superresolucion online', 'mejorar calidad foto'],
    howToSteps: [
      { title: 'Sube tu Imagen', description: 'Arrastra y suelta cualquier foto JPG, PNG o WebP.' },
      { title: 'Elige el Factor de Escala', description: 'Selecciona el modo de superresolución 2× o 4×.' },
      { title: 'Descarga el Resultado', description: 'Compara el antes/después y descarga la imagen mejorada en alta resolución.' },
    ],
    features: [
      { title: 'Inferencia 100% en el Navegador', description: 'La red neuronal se ejecuta en tu dispositivo sin servidores.' },
      { title: 'Superresolución Subpíxel', description: 'Reconstruye gradientes de alta frecuencia en el canal de luminancia.' },
    ],
    faqs: [
      { question: '¿Mis imágenes se envían a un servidor?', answer: 'No. Todo el procesamiento se realiza en la memoria de tu navegador.' },
    ],
  },
  fr: {
    name: "Agrandisseur d'Image par IA",
    shortName: 'Agrandir IA',
    tagline: 'Améliorez la résolution de vos photos avec la super-résolution neuronale 2× et 4× dans votre navigateur.',
    seoTitle: "Agrandisseur d'Image IA Gratuit — Super-Résolution 2x et 4x Online",
    seoDescription: 'Agrandissez vos images avec l’intelligence artificielle directement dans votre navigateur. Zéro envoi vers un serveur, 100% privé.',
    keywords: ['agrandisseur image ia', 'super resolution ia', 'augmenter resolution photo', 'ia gratuite'],
    howToSteps: [
      { title: 'Déposez votre image', description: 'Glissez-déposez une image JPG, PNG ou WebP.' },
      { title: 'Choisissez le facteur', description: 'Sélectionnez le mode 2× ou 4×.' },
      { title: 'Téléchargez', description: 'Téléchargez votre image haute résolution.' },
    ],
    features: [
      { title: '100% Local', description: 'Traitement entièrement exécuté dans votre navigateur.' },
    ],
    faqs: [
      { question: 'Mes images sont-elles envoyées sur un serveur ?', answer: 'Non. Tout le calcul neuronal a lieu en local sur votre appareil.' },
    ],
  },
  de: {
    name: 'KI Bild-Upscaler',
    shortName: 'KI Skalieren',
    tagline: 'Erhöhe die Bildauflösung mit 2× und 4× neuronaler Super-Resolution direkt im Browser.',
    seoTitle: 'KI Bild-Upscaler Online — Kostenlose 2x & 4x Bildvergrößerung',
    seoDescription: 'Bilder mit künstlicher Intelligenz hochskalieren und schärfen. 100% lokale Verarbeitung im Browser ohne Uploads.',
    keywords: ['ki bild upscaler', 'bildauflösung verbessern ki', 'super resolution online', 'foto vergrößern ohne qualitätsverlust'],
    howToSteps: [
      { title: 'Bild hochladen', description: 'Ziehe ein JPG-, PNG- oder WebP-Bild in den Bereich.' },
      { title: 'Skalierung wählen', description: 'Wähle 2× oder 4× Vergrößerung.' },
      { title: 'Herunterladen', description: 'Vergleiche das Vorher/Nachher und lade das hochauflösende Bild herunter.' },
    ],
    features: [
      { title: '100% Privatsphäre', description: 'Das neuronale Netz läuft vollständig auf deiner Hardware.' },
    ],
    faqs: [
      { question: 'Werden Daten hochgeladen?', answer: 'Nein, das Modell rechnet direkt im Arbeitsspeicher deines Browsers.' },
    ],
  },
  pt: {
    name: 'Upscaler de Imagem por IA',
    shortName: 'Escalar IA',
    tagline: 'Aumente a resolução de suas fotos com super-resolução neural 2× e 4× no seu navegador.',
    seoTitle: 'Upscaler de Imagem com IA Online — Super-Resolução 2x e 4x Grátis',
    seoDescription: 'Aumente o tamanho e a nitidez das suas imagens com inteligência artificial no navegador. Sem uploads e 100% gratuito.',
    keywords: ['upscaler imagem ia', 'aumentar resolucao foto ia', 'melhorar qualidade imagem online'],
    howToSteps: [
      { title: 'Envie a Imagem', description: 'Arraste e solte uma imagem JPG, PNG ou WebP.' },
      { title: 'Escolha a Escala', description: 'Selecione 2× ou 4×.' },
      { title: 'Baixe o Resultado', description: 'Salve a imagem em alta resolução.' },
    ],
    features: [
      { title: '100% no Navegador', description: 'Inferência neural direta no seu dispositivo.' },
    ],
    faqs: [
      { question: 'Minhas fotos são enviadas para algum servidor?', answer: 'Não. Todo o processo ocorre localmente no seu navegador.' },
    ],
  },
  it: {
    name: 'Upscaler Immagini con IA',
    shortName: 'Ingrandisci IA',
    tagline: 'Migliora la risoluzione delle tue foto con la super-risoluzione neurale 2× e 4× nel browser.',
    seoTitle: 'Upscaler Immagini IA Online — Super-Risoluzione 2x e 4x Gratis',
    seoDescription: 'Ingrandisci e migliora la qualità delle tue foto con l’intelligenza artificiale direttamente nel browser.',
    keywords: ['upscaler immagini ia', 'aumentare risoluzione foto ia', 'migliorare foto online'],
    howToSteps: [
      { title: 'Carica Immagine', description: 'Seleziona una foto JPG, PNG o WebP.' },
      { title: 'Scegli il Fattore', description: 'Seleziona 2× o 4×.' },
      { title: 'Scarica', description: 'Salva l’immagine ad alta risoluzione.' },
    ],
    features: [
      { title: '100% nel Browser', description: 'Elaborazione neurale locale e privata.' },
    ],
    faqs: [
      { question: 'Le mie immagini vengono salvate online?', answer: 'No. Tutto viene elaborato nella memoria del tuo browser.' },
    ],
  },
  ja: {
    name: 'AI画像高画質化・拡大',
    shortName: 'AI拡大',
    tagline: 'ブラウザ内で2倍・4倍のニューラル超解像により写真を劣化なく高解像度化。',
    seoTitle: 'AI画像拡大・高画質化ツール — 無料 2倍・4倍 超解像 (サーバー送信なし)',
    seoDescription: 'ブラウザ上で完結するAI画像拡大ツール。サーバーへの画像アップロードなしで2倍・4倍の超解像処理を行い、高画質で保存できます。',
    keywords: ['ai画像拡大', '画像高画質化', '写真超解像', 'ai高画質化無料'],
    howToSteps: [
      { title: '画像をアップロード', description: 'JPG、PNG、WebP形式の画像をドラッグ＆ドロップします。' },
      { title: '倍率を選択', description: '2倍または4倍の超解像モードを選択します。' },
      { title: '高画質画像をダウンロード', description: 'Before/Afterスライダーで確認して保存します。' },
    ],
    features: [
      { title: '100% ブラウザ内処理', description: 'WebGPU / WebGLを活用し、端末内だけで安全に推論を実行。' },
    ],
    faqs: [
      { question: '画像はサーバーに送信されますか？', answer: 'いいえ。画像データは一切サーバーに送信されず、端末内で安全に処理されます。' },
    ],
  },
  ko: {
    name: 'AI 이미지 업스케일러',
    shortName: 'AI 확대',
    tagline: '브라우저 내에서 2배 및 4배 뉴럴 초해상화로 사진 해상도와 선명도를 향상시킵니다.',
    seoTitle: 'AI 이미지 업스케일러 — 무료 2배·4배 사진 고화질 확대',
    seoDescription: '서버 업로드 없이 브라우저에서 직접 AI 초해상화 모델로 사진을 2배, 4배 고화질로 확대하세요.',
    keywords: ['ai 이미지 업스케일러', '사진 고화질 변환', '이미지 해상도 높이기', 'ai 사진 확대'],
    howToSteps: [
      { title: '이미지 업로드', description: 'JPG, PNG, WebP 이미지를 작업 공간에 끌어다 놓습니다.' },
      { title: '배율 선택', description: '2배 또는 4배 모드를 선택합니다.' },
      { title: '다운로드', description: '전후 비교를 확인하고 고해상도 이미지를 저장합니다.' },
    ],
    features: [
      { title: '100% 로컬 브라우저 연산', description: '외부 서버 전송 없이 사용자 기기에서 직접 신경망을 실행합니다.' },
    ],
    faqs: [
      { question: '이미지가 서버에 저장되나요?', answer: '아닙니다. 모든 과정은 브라우저 메모리 내에서만 처리됩니다.' },
    ],
  },
  id: {
    name: 'Peningkat Resolusi Gambar AI',
    shortName: 'Tingkatkan AI',
    tagline: 'Tingkatkan resolusi foto dengan super-resolusi saraf 2× dan 4× langsung di browser Anda.',
    seoTitle: 'Peningkat Resolusi Gambar AI Online — Super-Resolusi 2x & 4x Gratis',
    seoDescription: 'Tingkatkan kualitas dan ukuran foto dengan AI langsung di browser Anda tanpa unggah ke server.',
    keywords: ['peningkat resolusi gambar ai', 'ai super resolution', 'perjelas foto online'],
    howToSteps: [
      { title: 'Unggah Gambar', description: 'Pilih gambar JPG, PNG, atau WebP.' },
      { title: 'Pilih Skala', description: 'Pilih mode 2× atau 4×.' },
      { title: 'Unduh Hasil', description: 'Simpan gambar resolusi tinggi.' },
    ],
    features: [
      { title: '100% di Browser', description: 'Diproses secara lokal di perangkat Anda.' },
    ],
    faqs: [
      { question: 'Apakah gambar saya aman?', answer: 'Ya, gambar tidak pernah meninggalkan perangkat Anda.' },
    ],
  },
  tr: {
    name: 'Yapay Zeka ile Resim Büyütme (AI Upscaler)',
    shortName: 'AI Büyüt',
    tagline: 'Tarayıcınızda 2× ve 4× nöral süper çözünürlük ile fotoğrafları netleştirip büyütün.',
    seoTitle: 'AI Resim Büyütme ve Netleştirme — Ücretsiz 2x & 4x Süper Çözünürlük',
    seoDescription: 'Fotoğraflarınızı yapay zeka süper çözünürlük ile sunucuya yüklemeden 2 kat ve 4 kat büyütün. %100 gizli ve ücretsiz.',
    keywords: ['ai resim büyütme', 'fotoğraf netleştirme yapay zeka', 'resim çözünürlüğü artırma', 'super resolution online'],
    howToSteps: [
      { title: 'Fotoğrafı Yükleyin', description: 'Büyütmek istediğiniz JPG, PNG veya WebP görselini seçin.' },
      { title: 'Büyütme Oranını Seçin', description: '2× veya 4× nöral süper çözünürlük modunu belirleyin.' },
      { title: 'Yüksek Kalitede İndirin', description: 'Önce/Sonra karşılaştırmasını inceleyip yüksek çözünürlüklü görseli indirin.' },
    ],
    features: [
      { title: '%100 Tarayıcı İçi Çıkarım', description: 'Nöral ağ doğrudan cihazınızın donanımı (WebGPU/WebGL) üzerinde çalışır.' },
      { title: 'Alt-Piksel Süper Çözünürlük', description: 'Parlaklık kanalında yüksek frekanslı kenar gradyanlarını yeniden sentezler.' },
      { title: 'Canlı Önce/Sonra Kaydırıcısı', description: 'Orijinal ve AI ile büyütülmüş görseli yan yana sürükleyerek karşılaştırın.' },
    ],
    faqs: [
      { question: 'Resimlerim bir sunucuya yükleniyor mu?', answer: 'Hayır. Tüm yapay zeka işlemleri %100 cihazınızın tarayıcı belleğinde gerçekleşir.' },
      { question: 'Maksimum desteklenen çözünürlük nedir?', answer: 'Tarayıcı bellek sınırlarını korumak için 4 Megapiksele kadar (örn. 2000×2000 px) giriş görselleri desteklenir.' },
    ],
  },
};

for (const [lang, data] of Object.entries(locales)) {
  const filePath = resolve(process.cwd(), `src/i18n/tools/${lang}.ts`);
  let content = readFileSync(filePath, 'utf8');

  if (!content.includes('"ai-image-upscaler"') && !content.includes("'ai-image-upscaler'")) {
    const serialized = JSON.stringify(data, null, 2);
    // Insert before the last closing brace
    const lastBraceIdx = content.lastIndexOf('};');
    if (lastBraceIdx !== -1) {
      const updated = content.slice(0, lastBraceIdx) + `  "ai-image-upscaler": ${serialized},\n` + content.slice(lastBraceIdx);
      writeFileSync(filePath, updated, 'utf8');
      console.log(`  ✅ Added ai-image-upscaler to src/i18n/tools/${lang}.ts`);
    }
  }
}
console.log('🎉 AI Image Upscaler translation dictionary updated across all 10 languages!');
