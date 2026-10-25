import type { LocalizedHomeData } from '../types';

export const itHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Tutti gli strumenti per le immagini, in un unico posto',
    subtitle:
      'Ritaglia, ridimensiona, comprimi, converti, rimuovi lo sfondo e ritocca le tue foto gratis. Nessuna registrazione, nessuna filigrana, e i file restano sul tuo dispositivo.',
    dropzoneTitle: 'Trascina qui un’immagine per iniziare',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, SVG o HEIC di iPhone, fino a 50 MB',
  },
  sections: {
    indexTitle: 'Tutti gli strumenti',
    indexSubtitle: 'Ogni strumento usa lo stesso spazio di lavoro: apri un’immagine, regola, scarica.',
    pillarsTitle: 'Come funziona',
    faqTitle: 'Domande',
  },
  trustPillars: [
    {
      title: 'Un solo spazio di lavoro per tutto',
      description:
        'Ogni strumento si apre allo stesso modo e puoi passare l’immagine direttamente al successivo, per esempio ritagliare e poi comprimere.',
      icon: 'Layers',
    },
    {
      title: 'Nessun file viene caricato',
      description:
        'Le immagini vengono elaborate dal browser sul tuo dispositivo: nessuna attesa per l’upload e nessuna copia su un server.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Gratis, senza account',
      description:
        'Nessuna registrazione, nessuna filigrana e nessun limite giornaliero. I singoli file possono arrivare a 50 MB; gli strumenti in blocco accettano fino a 50 file.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Modifica e trasforma',
    'optimize-compress': 'Ottimizza e comprimi',
    'convert-formats': 'Converti formati',
    'pdf-documents': 'PDF e documenti',
    utilities: 'Analisi e utilità',
    developer: 'Strumenti per sviluppatori',
  },
  faqs: [
    {
      question: 'Le mie immagini vengono caricate da qualche parte?',
      answer:
        'No. Ogni strumento funziona nel browser, quindi le immagini vengono elaborate sul tuo dispositivo e non vengono mai inviate a un server. Lo strumento per rimuovere lo sfondo scarica il suo modello di IA una sola volta, poi funziona anche lui sul dispositivo.',
    },
    {
      question: 'È davvero gratis?',
      answer: 'Sì. Tutti gli strumenti sono gratuiti, senza account, e nessuna immagine riceve una filigrana.',
    },
    {
      question: 'Quanto possono essere grandi le immagini?',
      answer:
        'Le singole immagini possono arrivare a 50 MB. Il compressore e il ridimensionatore in blocco accettano fino a 50 immagini alla volta, ciascuna fino a 50 MB. Le foto molto grandi possono essere lente sui telefoni meno recenti.',
    },
    {
      question: 'Quali formati posso aprire e salvare?',
      answer:
        'Puoi aprire foto JPG, PNG, WebP, AVIF, GIF, BMP, SVG e HEIC di iPhone. Puoi salvare in JPG, PNG, WebP o AVIF, a seconda dello strumento.',
    },
    {
      question: 'Funziona sul telefono?',
      answer:
        'Sì. Gli strumenti funzionano nei browser mobili attuali su iPhone e Android, anche con le foto HEIC di iPhone. Puoi anche installare il sito come app. Dopo la prima visita la maggior parte degli strumenti funziona offline; l’esportazione AVIF e la rimozione dello sfondo vanno usate una volta online.',
    },
    {
      question: 'Posso usare uno strumento dopo l’altro?',
      answer:
        'Sì. Dopo la modifica, scegli un passo successivo come Comprimi o Ridimensiona e l’immagine si apre in quello strumento, senza doverla salvare e caricare di nuovo.',
    },
  ],
};
