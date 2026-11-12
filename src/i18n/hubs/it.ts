import type { HubTexts } from './types';

export const itHubs: HubTexts = {
  labels: {
    server: 'Usa il nostro server',
    more: 'Altre raccolte',
    allTools: 'Tutti i {count} strumenti',
  },
  pages: {
    'pdf-tools': {
      title: 'Strumenti PDF gratis: unisci, converti, modifica e firma',
      description: '57 strumenti PDF gratuiti in un unico posto: unisci, dividi e comprimi PDF, converti da e verso Word o immagini, modifica, firma e proteggi. Senza registrazione né filigrane.',
      h1: 'Strumenti PDF',
      intro:
        'Tutto per lavorare con i PDF, gratis e senza account: unisci e dividi file, trasforma Word, Excel, PowerPoint e immagini in PDF e viceversa, modifica, compila, firma e proteggi. La maggior parte degli strumenti funziona nel browser, quindi il PDF non lascia il tuo dispositivo; i pochi che richiedono il nostro server sono segnalati, e i loro file vengono eliminati subito dopo.',
      groups: {
        toPdf: 'Converti in PDF',
        fromPdf: 'Converti da PDF',
        edit: 'Modifica e annota',
        pages: 'Organizza le pagine',
        secure: 'Firma, proteggi e pulisci',
        fix: 'Comprimi, ripara e controlla',
      },
      faqs: [
        { question: 'Questi strumenti PDF sono gratuiti?', answer: 'Sì. Tutti gli strumenti si usano gratis e senza account, senza filigrana e senza limiti giornalieri.' },
        {
          question: 'I miei PDF vengono caricati?',
          answer:
            'La maggior parte degli strumenti funziona nel browser, quindi il file resta sul tuo dispositivo. Quelli segnalati con “Usa il nostro server”, come Word in PDF, Comprimi PDF e OCR PDF, inviano il file con una connessione cifrata e lo eliminano appena restituiscono il risultato.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Strumenti gratis per modificare immagini: ritaglia e ridimensiona',
      description: '42 strumenti gratuiti per modificare foto nel browser: ritaglia, ridimensiona e ruota, rimuovi o cambia lo sfondo, aggiungi testo e filigrane, correggi i colori e adatta le immagini ai social.',
      h1: 'Strumenti per modificare immagini',
      intro:
        'Modifiche rapide senza installare nulla: ritaglia e ridimensiona, scontorna o sostituisci lo sfondo, aggiungi testo, filigrane e bordi, aumenta la nitidezza e correggi i colori, oppure adatta un’immagine a Instagram, YouTube e altri social. Tutti gli strumenti funzionano nel browser, quindi le tue foto non vengono mai caricate e mantengono il formato quando possibile.',
      groups: {
        basics: 'Ritaglia, ridimensiona e ruota',
        background: 'Sfondi e scontorni',
        text: 'Testo, filigrane e annotazioni',
        enhance: 'Correggi e migliora',
        social: 'Formati per i social',
        combine: 'Unisci e dividi',
      },
      faqs: [
        { question: 'Devo installare un’app?', answer: 'No. Gli strumenti funzionano in qualsiasi browser recente, su computer o telefono, e le tue foto restano sul tuo dispositivo.' },
        {
          question: 'La mia foto perde qualità?',
          answer: 'Le modifiche si fanno sulla foto a piena risoluzione, salvata nel formato originale quando possibile. I file JPG e WebP vengono salvati di nuovo ad alta qualità.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Convertitore di immagini gratis: HEIC, JPG, PNG, WebP, AVIF',
      description: '26 convertitori di immagini gratuiti nel browser: HEIC in JPG, JPG in PNG, WebP e AVIF, GIF, BMP, TIFF e SVG nei formati comuni, più file alla volta.',
      h1: 'Convertitori di formato immagine',
      intro:
        'Porta un’immagine nel formato che ti serve: foto HEIC dell’iPhone in JPG, PNG in JPG o WebP per file più leggeri, AVIF per il web, oppure GIF, BMP, TIFF e SVG nei formati di uso comune. La maggior parte dei convertitori accetta più file alla volta, e tutti funzionano nel browser, quindi non si carica nulla. Non sai quale usare? Il Convertitore di immagini universale apre quasi ogni immagine e la salva in JPG, PNG, WebP o AVIF.',
      groups: {
        any: 'Qualsiasi formato',
        heic: 'Foto dell’iPhone (HEIC)',
        jpgPng: 'JPG e PNG',
        web: 'WebP e AVIF',
        other: 'GIF, BMP, TIFF e SVG',
        pdf: 'In PDF e testo',
      },
      faqs: [
        {
          question: 'Quale formato scelgo?',
          answer: 'JPG per foto che devono aprirsi ovunque, PNG per screenshot, loghi e trasparenza, WebP o AVIF per file più leggeri sui siti. Le foto HEIC dell’iPhone conviene convertirle in JPG per condividerle.',
        },
        { question: 'Posso convertire molte immagini insieme?', answer: 'Sì. Trascina più file su un convertitore: vengono convertiti insieme con le stesse impostazioni e scaricati in un unico ZIP.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Generatore e lettore di QR code e codici a barre gratis',
      description: '15 strumenti gratuiti per creare QR code di link, Wi-Fi, contatti, WhatsApp e pagamenti, generare codici a barre EAN, UPC e ISBN e leggere codici con la fotocamera.',
      h1: 'Strumenti per QR code e codici a barre',
      intro:
        'Crea un QR code per un link, una rete Wi-Fi, un biglietto da visita, una chat WhatsApp o un pagamento, genera codici a barre EAN, UPC, ISBN, Data Matrix e PDF417, oppure creane centinaia da un elenco e stampali su un foglio. Puoi anche leggere codici da una foto o con la fotocamera. Tutto funziona nel browser, senza registrazione.',
      groups: {
        qr: 'QR code',
        barcodes: 'Codici a barre',
        read: 'Scansiona e leggi',
      },
      faqs: [
        { question: 'I QR code scadono?', answer: 'No. Il contenuto è salvato nel codice stesso, non dietro un nostro link, quindi funziona finché il codice stampato è leggibile.' },
        {
          question: 'Posso usare questi codici a barre su prodotti in negozio?',
          answer: 'I codici rispettano lo standard, ma i numeri EAN e UPC dei prodotti venduti in negozio devono essere assegnati da GS1. Per magazzino, scaffali o eventi va bene qualsiasi numero.',
        },
      ],
    },
    'image-utilities': {
      title: 'Utilità per immagini gratis: EXIF, contagocce, DPI e altro',
      description: '21 strumenti gratuiti per analizzare e misurare immagini: vedi e rimuovi i metadati, preleva colori, cambia i DPI, converti pixel in pollici o cm, confronta foto e copia il testo dalle immagini.',
      h1: 'Utilità per immagini',
      intro:
        'Piccoli strumenti per le domande che nascono con le immagini: cosa rivelano i metadati di una foto e come rimuoverli, quali colori usa, quanto viene grande in stampa a certi DPI, se due foto sono diverse o che testo contiene. Funzionano tutti nel browser, quindi le tue immagini restano sul tuo dispositivo.',
      groups: {
        inspect: 'Analizza le foto',
        colour: 'Colori',
        size: 'Dimensioni, DPI e stampa',
        text: 'Testo e messaggi nascosti',
      },
      faqs: [
        {
          question: 'Posso togliere la posizione da una foto?',
          answer: 'Sì. Rimuovi metadati immagine cancella la posizione GPS, i dati della fotocamera e gli altri dati EXIF, e il Visualizzatore EXIF mostra cosa contiene una foto prima di condividerla.',
        },
        {
          question: 'Che DPI servono per stampare?',
          answer: '300 DPI è il valore abituale per foto e documenti. I DPI fissano solo la dimensione di stampa, non il numero di pixel: Cambia DPI immagine li scrive nel file, e i calcolatori Da pixel a pollici e Da pixel a cm mostrano quanto verrà grande in stampa.',
        },
      ],
    },
  },
};
