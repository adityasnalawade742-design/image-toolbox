import { LocalizedHomeData } from '../types';

export const itHome: LocalizedHomeData = {
  heroPill: 'Massima Privacy • Nessun Caricamento su Server • 27 Strumenti Gratuiti',
  heroHeadlineMain: 'Strumenti di Precisione per Immagini,',
  heroHeadlineAccent: 'Direttamente nel tuo Browser',
  heroSubheadline: 'Ritaglia, ridimensiona, comprimi, converti e modifica immagini localmente senza upload nel cloud, con velocità istantanea e massima qualità.',
  guarantee1: '100% Privacy nel Browser',
  guarantee2: 'Velocità Istantanea Senza Upload',
  guarantee3: 'Nessun Limite di Dimensione',
  whyChooseTitle: 'Perché i Professionisti Scelgono Image Toolbox',
  whyChooseSubtitle: 'Progettato per sviluppatori, designer, fotografi e utenti attenti alla privacy.',
  feature1Title: 'Zero Invio a Server',
  feature1Desc: 'Le immagini rimangono sul tuo dispositivo. I calcoli HTML5 Canvas avvengono localmente in totale isolamento.',
  feature2Title: 'Motore Canvas Ultrarapido',
  feature2Desc: 'Anteprime live in tempo reale, operazioni batch ed encoder WebP/PNG ottimizzati senza code di attesa.',
  feature3Title: 'Ideale per Sviluppatori e Webmaster',
  feature3Desc: 'Dalla codifica Base64 alla rasterizzazione SVG, pulizia EXIF e generazione di pacchetti favicon completi.',
  categories: [
    { id: 'edit', label: 'Modifica e Trasforma', description: 'Ritaglia, ridimensiona, ruota, capovolgi e incornicia' },
    { id: 'optimize', label: 'Ottimizza e Comprimi', description: 'Riduci il peso dei file e rimuovi metadati non necessari' },
    { id: 'convert', label: 'Converti Formati', description: 'Converti tra WebP, PNG, JPG e AVIF' },
    { id: 'utilities', label: 'Calcolatori e Utilità', description: 'Pipetta contagocce, proporzioni e calcolo DPI' },
    { id: 'developer', label: 'Strumenti per Sviluppatori', description: 'Generatore favicon, Base64 e Data URI' }
  ],
  faqs: [
    {
      question: 'Le mie immagini vengono caricate su un server esterno?',
      answer: 'No. Mai. Image Toolbox elabora tutto nel tuo browser con HTML5 Canvas. I tuoi file non lasciano mai il tuo dispositivo.'
    },
    {
      question: 'Image Toolbox è davvero gratis al 100%?',
      answer: 'Sì, tutti i 27 strumenti sono completamente gratuiti, senza limiti di utilizzo, senza filigrane e senza registrazione.'
    },
    {
      question: 'Quali formati sono supportati?',
      answer: 'Image Toolbox supporta JPG, JPEG, PNG, WebP, AVIF, SVG, GIF e Data URI Base64 per tutte le operazioni.'
    },
    {
      question: 'Posso elaborare più immagini contemporaneamente?',
      answer: 'Certamente! I nostri strumenti batch permettono di elaborare decine di foto simultaneamente e scaricarle in un unico archivio ZIP.'
    }
  ]
};
