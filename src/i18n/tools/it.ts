import type { LocalizedToolItem } from '../types';

export const itTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Ritaglia immagine",
    shortName: "Ritaglia",
    tagline: "Ritaglia la parte di foto che ti serve con le maniglie, con valori esatti in pixel o con proporzioni già pronte.",
    intro:
      "Ritaglia immagine riduce una foto all’area che selezioni e salva solo quella, alla massima risoluzione. Usalo per eliminare bordi vuoti, inquadrare un soggetto o ottenere la forma richiesta da un post sui social. Oltre al ritaglio libero, offre proporzioni predefinite come 1:1, 4:5, 9:16 e 16:9, campi per i pixel esatti e una modalità cerchio per le immagini del profilo.",
    seoTitle: "Ritagliare immagine online – Gratis, senza upload",
    seoDescription:
      "Ritaglia immagini online gratis. Trascina la cornice o inserisci i pixel esatti, usa i formati 1:1, 4:5, 16:9 o 9:16 e salva in JPG, PNG, WebP o AVIF. Senza upload.",
    keywords: [
      "ritagliare immagine",
      "ritagliare foto online",
      "ritagliare foto quadrata",
      "ritagliare foto per instagram",
      "ritagliare immagine 16:9",
      "ritagliare foto a cerchio",
      "ritagliare immagine senza perdere qualità",
    ],
    howToSteps: [
      {
        title: "Aggiungi la foto",
        description:
          "Trascina un’immagine nell’area di caricamento, clicca per scegliere un file o incollala con Ctrl+V. Sono supportati JPG, PNG, WebP, AVIF, GIF e HEIC di iPhone.",
      },
      {
        title: "Seleziona l’area da ritagliare",
        description:
          "Trascina la cornice e le sue maniglie sull’anteprima, oppure clicca un formato come Quadrato 1:1, Storia 9:16 o un formato social. Per un risultato esatto, inserisci in pixel lo spostamento X, lo spostamento Y, la larghezza e l’altezza.",
      },
      {
        title: "Scegli forma e formato",
        description:
          "Passa a Cerchio per un ritaglio rotondo (1:1). Di norma viene mantenuto il formato originale del file, ma puoi scegliere JPG, PNG, WebP o AVIF in Salva come.",
      },
      {
        title: "Scarica l’immagine ritagliata",
        description:
          "Clicca Scarica per salvare solo l’area selezionata alla massima risoluzione, oppure copiala negli appunti.",
      },
    ],
    features: [
      {
        title: "Proporzioni e formati social",
        description:
          "Originali, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 e 21:9, più le forme per i post verticali di Instagram (4:5), Reels e TikTok, miniature di YouTube e pin di Pinterest.",
      },
      {
        title: "Valori esatti in pixel",
        description:
          "Inserisci spostamento, larghezza e altezza in pixel, blocca le proporzioni se ti serve e vedi le dimensioni finali prima di salvare.",
      },
      {
        title: "Ritaglio a cerchio per gli avatar",
        description:
          "La modalità cerchio blocca la cornice su un quadrato e ritaglia un’immagine rotonda. Salva in PNG o WebP per mantenere trasparenti gli angoli.",
      },
      {
        title: "Ritagliata dai pixel originali",
        description:
          "L’anteprima può essere ridotta per velocità, ma il download viene ritagliato dalla foto a piena risoluzione sul tuo dispositivo. Nessun file viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Il ritaglio riduce la qualità dell’immagine?",
        answer:
          "Il ritaglio elimina solo i pixel fuori dalla cornice; gli altri restano nitidi. Se salvi in JPG, WebP o AVIF, l’immagine viene compressa di nuovo: usa una qualità del 90% o più, oppure salva in PNG, per restare vicino all’originale.",
      },
      {
        question: "Come ritaglio una foto quadrata per Instagram?",
        answer:
          "Clicca Quadrato 1:1 o il formato Post di Instagram (1:1) e trascina la cornice sulla parte da tenere. Per un post verticale più alto, usa invece il formato verticale 4:5.",
      },
      {
        question: "Come creo un’immagine del profilo rotonda?",
        answer:
          "Seleziona Cerchio (1:1), sposta il cerchio sul viso e salva in PNG o WebP. JPG non supporta la trasparenza, quindi l’area fuori dal cerchio verrebbe riempita di bianco.",
      },
      {
        question: "Posso ritagliare una foto HEIC di iPhone?",
        answer:
          "Sì. Il file HEIC viene convertito nel browser quando lo apri. Il ritaglio viene salvato in JPG per impostazione predefinita, e puoi passare a PNG, WebP o AVIF.",
      },
      {
        question: "I dati EXIF della foto restano dopo il ritaglio?",
        answer:
          "No. Il nuovo file viene creato solo dai pixel dell’immagine, quindi i dettagli della fotocamera e la posizione GPS dell’originale non vengono copiati.",
      },
      {
        question: "Posso ritagliare una GIF animata?",
        answer:
          "Puoi aprire una GIF, ma il risultato è una singola immagine fissa, perché qui JPG, PNG, WebP e AVIF vengono salvati senza animazione.",
      },
    ],
  },
  "resize-image": {
    name: "Ridimensiona immagine",
    shortName: "Ridimensiona",
    tagline: "Cambia larghezza e altezza di un’immagine in pixel o in percentuale, con proporzioni bloccate o libere.",
    intro:
      "Ridimensiona immagine cambia le dimensioni in pixel di una foto o di una grafica. Usalo per rendere una grande foto della fotocamera abbastanza piccola per un’email o un sito, o per ottenere una misura esatta come 1080 × 1080. Puoi inserire larghezza e altezza o scalare in percentuale dal 10% al 300%, e l’opzione Non ingrandire evita di ingrandire un’immagine per errore.",
    seoTitle: "Ridimensionare immagine online – Pixel o percentuale",
    seoDescription:
      "Ridimensiona immagini online gratis. Inserisci larghezza e altezza esatte in pixel o scala in percentuale, mantieni le proporzioni e salva in JPG, PNG, WebP o AVIF.",
    keywords: [
      "ridimensionare immagine",
      "ridimensionare foto online",
      "cambiare dimensioni immagine in pixel",
      "ridimensionare foto senza perdere qualità",
      "ridimensionare immagine 1080x1080",
      "ridurre dimensioni immagine",
      "scalare immagine in percentuale",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla (Ctrl+V) un’immagine JPG, PNG, WebP, AVIF o HEIC di iPhone.",
      },
      {
        title: "Imposta le nuove dimensioni",
        description:
          "In modalità Pixel, inserisci larghezza o altezza; con Mantieni proporzioni attivo, l’altro lato si aggiorna da solo. In modalità Percentuale, usa il cursore o i pulsanti dal 25% al 200%.",
      },
      {
        title: "Scegli il formato del file",
        description:
          "Di norma viene mantenuto il formato originale. Puoi passare a JPG, PNG, WebP o AVIF e impostare la qualità per JPG, WebP e AVIF.",
      },
      {
        title: "Scarica il risultato",
        description:
          "Clicca Scarica per salvare l’immagine ridimensionata, oppure inviala a Comprimi se vuoi anche un file più leggero.",
      },
    ],
    features: [
      {
        title: "Pixel o percentuale",
        description: "Inserisci dimensioni esatte fino a 10.000 pixel, o scala l’intera immagine dal 10% al 300%.",
      },
      {
        title: "Blocco delle proporzioni",
        description:
          "Mantieni le proporzioni originali perché l’immagine non si deformi, o sbloccale per impostare larghezza e altezza separatamente.",
      },
      {
        title: "Niente ingrandimenti",
        description:
          "Limita le dimensioni a quelle originali, così un’immagine piccola non viene mai ingrandita e sfocata per sbaglio.",
      },
      {
        title: "Mantiene il tipo di file",
        description: "Un JPG resta JPG e un PNG resta PNG, a meno che tu non scelga un altro formato.",
      },
    ],
    faqs: [
      {
        question: "Come ridimensiono un’immagine senza perdere qualità?",
        answer:
          "Rimpicciolire un’immagine la mantiene nitida. Ingrandirla oltre l’originale non può aggiungere dettagli, quindi apparirà più morbida; attiva Non ingrandire per evitarlo. Salva in PNG, o usa una qualità del 90% o più per JPG e WebP.",
      },
      {
        question: "Ridimensionare riduce il peso del file?",
        answer:
          "Di solito sì. Dimezzando larghezza e altezza resta circa un quarto dei pixel, quindi il file diventa molto più leggero. Per file ancora più leggeri, comprimi il risultato.",
      },
      {
        question: "Posso ridimensionare a una misura esatta come 1080 × 1080?",
        answer:
          "Sì. Disattiva Mantieni proporzioni e inserisci entrambi i numeri. Se l’originale non è quadrato verrà deformato, quindi ritaglialo prima in 1:1 e poi ridimensionalo.",
      },
      {
        question: "Posso ridimensionare molte immagini insieme?",
        answer:
          "Questa pagina ridimensiona un’immagine alla volta. Per ridimensionare fino a 50 immagini in un solo passaggio e scaricarle in uno ZIP, usa Ridimensionamento immagini in blocco.",
      },
      {
        question: "Posso ridimensionare le foto del mio iPhone?",
        answer:
          "Sì. Le foto HEIC vengono convertite nel browser e l’immagine ridimensionata viene salvata in JPG per impostazione predefinita.",
      },
    ],
  },
  "compress-image": {
    name: "Comprimi immagine",
    shortName: "Comprimi",
    tagline: "Rendi più leggero il file di un’immagine scegliendo formato e qualità, e vedi il nuovo peso prima di scaricarla.",
    intro:
      "Comprimi immagine riduce il peso di una foto, così si carica più in fretta su un sito o rientra nei limiti di un’email o di un upload. Salva di nuovo l’immagine in WebP (predefinito), AVIF, JPG o PNG alla qualità che scegli, e mostra il peso stimato e la percentuale risparmiata mentre muovi il cursore. La modalità Peso file imposta la qualità per te quando devi restare sotto un limite, per esempio 100 KB.",
    seoTitle: "Comprimere immagine online – Riduci il peso del file",
    seoDescription:
      "Comprimi immagini online gratis. Scegli WebP, AVIF, JPG o PNG, imposta la qualità o un peso in KB e vedi il risparmio prima di scaricare. Nessun upload necessario.",
    keywords: [
      "comprimere immagine",
      "ridurre peso immagine",
      "comprimere jpg",
      "comprimere immagine a 100 kb",
      "compressore immagini online",
      "comprimere foto per email",
      "comprimere png",
      "convertire e comprimere in webp",
    ],
    howToSteps: [
      {
        title: "Aggiungi un’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scegli il formato di uscita",
        description:
          "WebP è selezionato per impostazione predefinita. AVIF di solito crea i file più leggeri ma richiede più tempo, JPG si apre ovunque e PNG è senza perdita, quindi fa risparmiare meno spazio.",
      },
      {
        title: "Imposta la qualità o un peso obiettivo",
        description:
          "Muovi il cursore della qualità e guarda la stima del peso, oppure passa a Peso file e inserisci un valore in KB o clicca 50, 100, 200 o 500 KB.",
      },
      {
        title: "Controlla e scarica",
        description: "Guarda l’anteprima e la percentuale risparmiata, poi clicca Scarica.",
      },
    ],
    features: [
      {
        title: "Stima del peso in tempo reale",
        description:
          "Il nuovo peso e la percentuale risparmiata si aggiornano mentre cambi le impostazioni, e ricevi un avviso se il risultato sarebbe più pesante dell’originale.",
      },
      {
        title: "AVIF, WebP, JPG e PNG",
        description:
          "Quattro formati di uscita, incluso AVIF, codificato direttamente nel browser con un encoder WebAssembly.",
      },
      {
        title: "Modalità peso obiettivo",
        description:
          "Inserisci un peso in KB e lo strumento sceglie la qualità adatta. È una stima, quindi controlla il peso in tempo reale prima di scaricare.",
      },
      {
        title: "Le dimensioni non cambiano",
        description:
          "La compressione mantiene larghezza e altezza. Per un file molto più leggero, prima ridimensiona e poi comprimi.",
      },
    ],
    faqs: [
      {
        question: "Quanto diventerà più leggera la mia immagine?",
        answer:
          "Dipende dall’immagine. Le grandi foto della fotocamera spesso si riducono molto in WebP o AVIF con qualità dal 70% all’85%, mentre piccole grafiche o file già compressi possono ridursi pochissimo. La stima in tempo reale mostra il risultato prima del download.",
      },
      {
        question: "Quale formato crea il file più leggero: AVIF, WebP o JPG?",
        answer:
          "AVIF di solito è il più leggero a parità di qualità visiva, seguito da WebP e poi da JPG. AVIF richiede più tempo per la codifica nel browser, soprattutto con foto grandi, e alcuni programmi meno recenti non riescono ad aprirlo.",
      },
      {
        question: "Come comprimo un’immagine a 100 KB?",
        answer:
          "Scegli Peso file e clicca 100 KB. Se il peso in tempo reale supera ancora i 100 KB, abbassa un po’ la qualità, o riduci prima le dimensioni con Ridimensiona immagine.",
      },
      {
        question: "La compressione peggiorerà l’aspetto della foto?",
        answer:
          "WebP, AVIF e JPG eliminano dettagli difficili da vedere. Con una qualità dal 75% al 90% la maggior parte delle foto appare identica alle normali dimensioni di visualizzazione, mentre valori molto bassi causano sfocature e zone a blocchi.",
      },
      {
        question: "Perché il file compresso è più pesante dell’originale?",
        answer:
          "Succede quando l’originale era già ben ottimizzato, o quando una foto viene salvata in PNG. Prova WebP o AVIF, o una qualità più bassa.",
      },
      {
        question: "I dati EXIF vengono rimossi quando comprimo una foto?",
        answer:
          "Sì. Il nuovo file viene creato dai pixel dell’immagine, quindi le informazioni della fotocamera e la posizione GPS non sono incluse.",
      },
    ],
  },
  "rotate-image": {
    name: "Ruota immagine",
    shortName: "Ruota",
    tagline: "Ruota un’immagine di 90°, 180° o di qualsiasi angolo tra -180° e 180°, e salvala nel formato che ti serve.",
    intro:
      "Ruota immagine sistema le foto che appaiono di lato o capovolte e raddrizza le immagini leggermente storte. Usa i pulsanti da 90° per le rotazioni rapide o il cursore Angolo personalizzato per le piccole correzioni. Quando l’angolo non è un multiplo di 90°, la tela si allarga per contenere tutta l’immagine ruotata, così nessun angolo viene tagliato.",
    seoTitle: "Ruotare immagine online – 90°, 180° o qualsiasi angolo",
    seoDescription:
      "Ruota immagini online gratis. Gira una foto di 90° a sinistra o a destra, di 180° o di un angolo a scelta, poi salva in JPG, PNG, WebP o AVIF. Senza upload.",
    keywords: [
      "ruotare immagine",
      "ruotare foto online",
      "ruotare immagine di 90 gradi",
      "girare foto",
      "raddrizzare foto",
      "ruotare jpg",
      "ruotare immagine di un angolo",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Ruotala",
        description:
          "Clicca Destra 90° per girare in senso orario, Sinistra 90° per il senso antiorario, o 180° per capovolgerla. Per una piccola correzione, trascina il cursore Angolo personalizzato.",
      },
      {
        title: "Scegli il formato",
        description:
          "Di norma viene mantenuto il formato originale. Dopo un angolo personalizzato, PNG, WebP e AVIF lasciano trasparenti i nuovi angoli, mentre JPG li riempie di bianco.",
      },
      {
        title: "Scarica",
        description: "Clicca Scarica per salvare l’immagine ruotata, oppure copiala negli appunti.",
      },
    ],
    features: [
      {
        title: "Rotazioni rapide di 90° e 180°",
        description: "Sistema con un clic le foto di lato o capovolte, e usa Ripristina per tornare all’inizio.",
      },
      {
        title: "Qualsiasi angolo",
        description: "Raddrizza un orizzonte o un documento storto con il cursore, a passi di un grado da -180° a 180°.",
      },
      {
        title: "Niente viene tagliato",
        description: "Con gli angoli personalizzati, la tela di uscita si allarga per contenere tutta l’immagine ruotata.",
      },
      {
        title: "Funziona con le foto di iPhone",
        description: "Le foto HEIC vengono convertite nel browser, quindi non devi convertirle prima.",
      },
    ],
    faqs: [
      {
        question: "Perché la mia foto appare di lato in alcune app?",
        answer:
          "I telefoni spesso salvano l’immagine in un verso e aggiungono un tag di rotazione nei dati EXIF, che alcune app ignorano. Il file che scarichi qui ha i pixel effettivamente ruotati e nessun tag di rotazione, quindi appare uguale ovunque.",
      },
      {
        question: "Ruotare un’immagine ne riduce la qualità?",
        answer:
          "Ruotare di 90° o 180° sposta i pixel senza modificarli. Gli altri angoli richiedono di ricalcolare i pixel, e l’immagine diventa appena più morbida. Salvare in JPG, WebP o AVIF la comprime di nuovo, cosa che PNG evita.",
      },
      {
        question: "Cosa riempie gli angoli dopo una rotazione personalizzata?",
        answer:
          "La tela si allarga per contenere l’immagine ruotata. In PNG, WebP e AVIF le nuove aree negli angoli sono trasparenti; in JPG sono bianche.",
      },
      {
        question: "Posso ruotare una foto HEIC di iPhone?",
        answer:
          "Sì. La foto viene convertita nel browser e la versione ruotata viene salvata in JPG, a meno che tu non scelga un altro formato.",
      },
    ],
  },
  "flip-image": {
    name: "Capovolgi immagine",
    shortName: "Capovolgi",
    tagline: "Specchia un’immagine in orizzontale o in verticale, per esempio per correggere un selfie invertito o un testo al contrario.",
    intro:
      "Capovolgi immagine crea una copia speculare di un’immagine. Il capovolgimento orizzontale scambia sinistra e destra, e corregge i selfie della fotocamera frontale in cui le scritte appaiono al contrario. Quello verticale capovolge l’immagine come un riflesso nell’acqua, e usarli entrambi dà lo stesso risultato di una rotazione di 180°.",
    seoTitle: "Specchiare immagine online – Orizzontale o verticale",
    seoDescription:
      "Specchia una foto in orizzontale o in verticale, gratis. Correggi selfie invertiti e testi al contrario e salva in JPG, PNG, WebP o AVIF. Senza upload.",
    keywords: [
      "specchiare immagine",
      "capovolgere immagine",
      "immagine speculare online",
      "capovolgere foto orizzontalmente",
      "capovolgere immagine verticalmente",
      "specchiare selfie",
      "invertire foto",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scegli la direzione",
        description:
          "Clicca Orizzontale per scambiare sinistra e destra, o Verticale per capovolgerla. Clicca di nuovo un pulsante per annullarlo, oppure usa Entrambi o Ripristina.",
      },
      {
        title: "Scegli il formato",
        description: "Di norma viene mantenuto il formato originale, oppure puoi salvare in JPG, PNG, WebP o AVIF.",
      },
      {
        title: "Scarica",
        description: "Clicca Scarica per salvare l’immagine specchiata, oppure copiala negli appunti.",
      },
    ],
    features: [
      {
        title: "Specchio orizzontale e verticale",
        description: "Capovolgi in una direzione o in entrambe e vedi subito il risultato nell’anteprima.",
      },
      {
        title: "I pixel non cambiano",
        description: "Il capovolgimento sposta solo i pixel in nuove posizioni. Salva in PNG per mantenere ogni pixel esattamente com’era.",
      },
      {
        title: "Mantiene il formato",
        description: "Per impostazione predefinita un JPG viene salvato in JPG e un PNG in PNG, quindi ottieni lo stesso tipo di file.",
      },
      {
        title: "Elaborata nel browser",
        description: "L’immagine viene capovolta sul tuo dispositivo e non viene mai caricata su un server.",
      },
    ],
    faqs: [
      {
        question: "Che differenza c’è tra capovolgere e ruotare?",
        answer:
          "Capovolgere crea un’immagine speculare, quindi ogni testo si legge al contrario. Ruotare gira l’intera immagine attorno al centro, e il testo resta leggibile.",
      },
      {
        question: "Come correggo un selfie specchiato?",
        answer:
          "Molte fotocamere frontali salvano i selfie a specchio. Apri la foto, clicca Orizzontale e scaricala: le scritte sullo sfondo si leggeranno di nuovo correttamente.",
      },
      {
        question: "Capovolgere un’immagine ne riduce la qualità?",
        answer:
          "Il capovolgimento non modifica il valore di nessun pixel. Se salvi in JPG, WebP o AVIF l’immagine viene compressa di nuovo, quindi usa una qualità alta o PNG.",
      },
      {
        question: "Posso capovolgere un’immagine in entrambe le direzioni?",
        answer:
          "Sì. Entrambi specchia l’immagine in orizzontale e in verticale, con lo stesso risultato di una rotazione di 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Convertitore di immagini universale",
    shortName: "Convertitore",
    tagline: "Converti immagini JPG, PNG, WebP, AVIF, GIF, BMP, SVG o HEIC di iPhone in JPG, PNG, WebP o AVIF.",
    intro:
      "Convertitore di immagini universale cambia il formato di un file immagine. Apre qualsiasi immagine che il browser può mostrare, come JPG, PNG, WebP, AVIF, GIF, BMP e SVG, oltre alle foto HEIC di iPhone, e la salva in JPG, PNG, WebP o AVIF. Le foto JPG e HEIC sono impostate su WebP e le altre immagini su PNG, ma puoi scegliere uno qualsiasi dei quattro formati.",
    seoTitle: "Convertitore immagini – JPG, PNG, WebP, AVIF, HEIC",
    seoDescription:
      "Convertitore di immagini gratuito nel browser. Converti HEIC, PNG, JPG, WebP, GIF, BMP o SVG in JPG, PNG, WebP o AVIF con qualità regolabile. Senza upload.",
    keywords: [
      "convertitore immagini",
      "convertire immagine in jpg",
      "convertire heic in jpg",
      "convertire immagine in webp",
      "convertire immagine in avif",
      "convertire gif in png",
      "convertire bmp in jpg",
      "convertire formato immagine online",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla un’immagine in un formato che il browser può aprire, o una foto HEIC di iPhone.",
      },
      {
        title: "Scegli il formato di uscita",
        description: "In Salva come, seleziona JPG, PNG, WebP o AVIF.",
      },
      {
        title: "Regola qualità e sfondo",
        description:
          "Per JPG, WebP e AVIF, imposta la qualità. Se l’immagine ha aree trasparenti e hai scelto JPG, scegli il colore che le riempirà.",
      },
      {
        title: "Scarica il file convertito",
        description: "Clicca Scarica. Con le foto grandi AVIF può richiedere qualche secondo, perché viene codificato nel browser.",
      },
    ],
    features: [
      {
        title: "Molti formati in ingresso",
        description: "Apre JPG, PNG, WebP, AVIF, GIF, BMP, SVG e gli altri formati supportati dal browser, più HEIC e HEIF.",
      },
      {
        title: "Quattro formati moderni in uscita",
        description: "Salva in JPG, PNG, WebP o AVIF. AVIF viene codificato sul tuo dispositivo con un encoder WebAssembly.",
      },
      {
        title: "Trasparenza gestita correttamente",
        description: "PNG, WebP e AVIF mantengono le aree trasparenti. Per JPG, scegli tu il colore che le sostituisce.",
      },
      {
        title: "Controllo della qualità",
        description: "Imposta la qualità dal 10% al 100% per i formati con perdita, per bilanciare peso e dettaglio.",
      },
    ],
    faqs: [
      {
        question: "Come converto HEIC in JPG?",
        answer:
          "Apri la foto HEIC, seleziona JPG in Salva come e clicca Scarica. La conversione avviene nel browser, quindi la foto non viene inviata da nessuna parte.",
      },
      {
        question: "Quale formato devo scegliere?",
        answer:
          "JPG per le foto che devono aprirsi ovunque, PNG per screenshot, loghi e grafiche con bordi netti o trasparenza, WebP per immagini web più leggere, e AVIF per i file più leggeri nei browser moderni.",
      },
      {
        question: "Posso convertire in GIF, BMP o SVG?",
        answer:
          "No. Questi formati si possono aprire, ma l’uscita è sempre JPG, PNG, WebP o AVIF. Una GIF animata diventa una singola immagine fissa.",
      },
      {
        question: "Lo sfondo trasparente verrà mantenuto?",
        answer:
          "Sì, se salvi in PNG, WebP o AVIF. JPG non supporta la trasparenza, quindi le aree trasparenti vengono riempite con il colore che scegli.",
      },
      {
        question: "La conversione è senza perdita?",
        answer:
          "Salvare in PNG è senza perdita. JPG, WebP e AVIF sono formati con perdita: una qualità più alta conserva più dettagli ma crea un file più pesante.",
      },
    ],
  },
  "jpg-to-png": {
    name: "Da JPG a PNG",
    shortName: "JPG → PNG",
    tagline: "Trasforma una foto JPG in un file PNG che non perde altra qualità quando lo modifichi e lo salvi di nuovo.",
    intro:
      "Da JPG a PNG converte un’immagine JPEG nel formato PNG. PNG usa una compressione senza perdita, quindi l’immagine non perde altra qualità a ogni modifica e salvataggio: utile per screenshot, grafiche e file su cui lavorerai in seguito. Il PNG ha esattamente gli stessi pixel e le stesse dimensioni del JPG, ma di solito il file è più pesante.",
    seoTitle: "Convertire JPG in PNG – Gratis, nel tuo browser",
    seoDescription:
      "Converti JPG in PNG online gratis. Ottieni un PNG senza perdita con gli stessi pixel e le stesse dimensioni del tuo JPEG, creato nel browser senza caricare il file.",
    keywords: [
      "convertire jpg in png",
      "da jpg a png",
      "jpeg in png",
      "convertitore jpg png",
      "cambiare jpg in png",
      "salvare jpg come png",
    ],
    howToSteps: [
      {
        title: "Apri un JPG",
        description: "Trascina un file JPG o JPEG nell’area di caricamento, clicca per sceglierne uno o incollalo con Ctrl+V.",
      },
      {
        title: "Controlla l’anteprima",
        description: "L’uscita è sempre PNG, quindi non ci sono impostazioni da cambiare. Le dimensioni restano le stesse.",
      },
      {
        title: "Scarica il PNG",
        description: "Clicca Scarica PNG, oppure invia l’immagine a un altro strumento, come Ridimensiona, con i pulsanti del passo successivo.",
      },
    ],
    features: [
      {
        title: "Copia esatta dei pixel",
        description: "Ogni pixel del JPG viene salvato nel PNG senza ulteriori perdite di compressione.",
      },
      {
        title: "Sicuro per le modifiche ripetute",
        description: "Un PNG si può modificare e salvare molte volte senza nuovi artefatti di compressione.",
      },
      {
        title: "Stesse dimensioni",
        description: "Il PNG ha la stessa larghezza e altezza del JPG originale.",
      },
      {
        title: "Nessun upload",
        description: "Il file viene convertito nella scheda del browser e resta sul tuo dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Convertire da JPG a PNG migliora la qualità?",
        answer:
          "No. Il PNG mantiene l’immagine esattamente com’è ora, ma non può recuperare i dettagli che la compressione JPEG ha già eliminato.",
      },
      {
        question: "Convertire in PNG rende lo sfondo trasparente?",
        answer:
          "No. Un JPG non ha trasparenza, quindi il PNG mantiene lo stesso sfondo pieno. Per rimuovere lo sfondo, usa lo strumento Rimuovi sfondo.",
      },
      {
        question: "Perché il PNG pesa più del JPG?",
        answer:
          "PNG salva ogni pixel senza compressione con perdita, mentre JPG elimina i dettagli più fini per risparmiare spazio. Le foto salvate in PNG spesso pesano diverse volte di più.",
      },
      {
        question: "Posso convertire più JPG in PNG insieme?",
        answer:
          "Questa pagina converte un file alla volta. Ridimensionamento immagini in blocco può salvare fino a 50 immagini in PNG in un unico ZIP, se imposti la scala al 100%.",
      },
      {
        question: "I dati EXIF del JPG vengono mantenuti?",
        answer:
          "No. Il PNG viene creato solo dai pixel, quindi le informazioni della fotocamera e la posizione GPS non vengono copiate.",
      },
    ],
  },
  "png-to-jpg": {
    name: "Da PNG a JPG",
    shortName: "PNG → JPG",
    tagline: "Converti un PNG in un file JPG più leggero e scegli il colore che sostituisce le aree trasparenti.",
    intro:
      "Da PNG a JPG trasforma un’immagine PNG in un JPEG, che per le foto di solito è molto più leggero ed è accettato da quasi tutti i siti e le app. JPEG non supporta la trasparenza, quindi scegli bianco, nero o un colore personalizzato per riempire le aree trasparenti. Puoi anche impostare la qualità del JPG dal 10% al 100%.",
    seoTitle: "Convertire PNG in JPG – Scegli il colore di sfondo",
    seoDescription:
      "Converti PNG in JPG online gratis. Scegli uno sfondo bianco, nero o personalizzato per le aree trasparenti e imposta la qualità del JPG. Senza upload.",
    keywords: [
      "convertire png in jpg",
      "da png a jpg",
      "png in jpeg",
      "png in jpg con sfondo bianco",
      "convertitore png jpg",
      "ridurre peso png",
    ],
    howToSteps: [
      {
        title: "Apri un PNG",
        description: "Trascina un file PNG nell’area di caricamento, clicca per sceglierne uno o incollalo con Ctrl+V.",
      },
      {
        title: "Scegli il colore di sfondo",
        description: "Scegli Bianco, Nero o un colore qualsiasi con il selettore. Riempirà tutte le aree trasparenti.",
      },
      {
        title: "Imposta la qualità",
        description: "85% è un buon valore predefinito. Usa un valore più alto per immagini con testo o linee sottili.",
      },
      {
        title: "Scarica il JPG",
        description: "Clicca Scarica JPG per salvare il file convertito.",
      },
    ],
    features: [
      {
        title: "Colore di sfondo a scelta",
        description: "I pixel trasparenti e semitrasparenti vengono fusi su bianco, nero o un colore personalizzato.",
      },
      {
        title: "Qualità regolabile",
        description: "Scegli dal 10% al 100% per bilanciare peso del file e dettaglio.",
      },
      {
        title: "File più leggeri per le foto",
        description: "Foto e screenshot ricchi di dettagli di solito pesano molto meno in JPG che in PNG.",
      },
      {
        title: "Stesse dimensioni",
        description: "Il JPG mantiene esattamente la larghezza e l’altezza del PNG.",
      },
    ],
    faqs: [
      {
        question: "Cosa succede allo sfondo trasparente?",
        answer:
          "JPG non supporta la trasparenza, quindi i pixel trasparenti e semitrasparenti vengono fusi sul colore di sfondo che scegli. Il bianco è selezionato per impostazione predefinita.",
      },
      {
        question: "Il JPG sarà più leggero del PNG?",
        answer:
          "Per le foto e le immagini con molti colori, di solito sì, spesso molto più leggero. Per grafiche semplici con pochi colori il PNG può essere già leggero, e il JPG può persino pesare di più.",
      },
      {
        question: "Quale qualità devo usare?",
        answer:
          "85%, il valore predefinito, va bene per la maggior parte delle foto. Usa dal 90% al 100% per immagini con testo o dettagli fini, e valori più bassi quando il peso conta più del dettaglio.",
      },
      {
        question: "Perché il testo appare sfocato nel mio JPG?",
        answer:
          "La compressione JPEG può aggiungere bordi morbidi e piccole macchie attorno a testo e linee nette. Usa una qualità più alta, oppure tieni loghi e screenshot in PNG o WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "Da JPG a WebP",
    shortName: "JPG → WebP",
    tagline: "Converti le foto JPG in WebP per file più leggeri che fanno caricare più in fretta le pagine web.",
    intro:
      "Da JPG a WebP converte le foto JPEG nel formato WebP, che tutti i principali browser attuali sanno mostrare. A parità di qualità visiva, un file WebP di solito è più leggero della stessa immagine in JPG, quindi le pagine che lo usano si caricano più in fretta. Imposti la qualità con un cursore dal 10% al 100%, e l’immagine mantiene le sue dimensioni originali.",
    seoTitle: "Convertire JPG in WebP – Immagini web più leggere",
    seoDescription:
      "Converti JPG in WebP online gratis. Immagini più leggere per siti più veloci, qualità regolabile dal 10% al 100% e dimensioni originali. Senza upload.",
    keywords: [
      "convertire jpg in webp",
      "da jpg a webp",
      "jpeg in webp",
      "convertitore jpg webp",
      "convertire foto in webp per sito",
      "convertitore immagini webp",
    ],
    howToSteps: [
      {
        title: "Apri un JPG",
        description: "Trascina una foto JPG o JPEG nell’area di caricamento, clicca per sceglierne una o incollala con Ctrl+V.",
      },
      {
        title: "Imposta la qualità",
        description: "Parti da circa l’80%. Valori più alti conservano più dettagli; valori più bassi creano file più leggeri.",
      },
      {
        title: "Scarica il WebP",
        description: "Clicca Scarica WebP e confronta il nuovo peso con quello dell’originale.",
      },
    ],
    features: [
      {
        title: "File più leggeri a qualità simile",
        description: "Per una foto che appare uguale, WebP di solito richiede meno byte di JPG.",
      },
      {
        title: "Cursore della qualità",
        description: "Scegli una qualità qualsiasi dal 10% al 100% in base alla velocità della pagina e al dettaglio che ti serve.",
      },
      {
        title: "Dimensioni originali",
        description: "La foto viene convertita senza cambiarne larghezza o altezza.",
      },
      {
        title: "Convertita sul tuo dispositivo",
        description: "La foto viene elaborata nel browser e non viene caricata.",
      },
    ],
    faqs: [
      {
        question: "WebP è meglio di JPG?",
        answer:
          "Per i siti web, WebP di solito offre file più leggeri a parità di qualità visiva e supporta anche la trasparenza. JPG è ancora accettato da più programmi meno recenti, stampanti e moduli di caricamento.",
      },
      {
        question: "Tutti i browser supportano WebP?",
        answer:
          "Le versioni attuali di Chrome, Edge, Firefox e Safari mostrano le immagini WebP. Alcune app e sistemi operativi meno recenti non riescono ad aprirle.",
      },
      {
        question: "Perché ho ottenuto un PNG invece di un WebP?",
        answer:
          "Alcuni browser, tra cui alcune versioni di Safari, sanno mostrare WebP ma non crearlo. In quel caso lo strumento te lo segnala e salva un PNG; usa Chrome, Edge o Firefox per ottenere un file WebP.",
      },
      {
        question: "Come posso vedere il peso del file prima di scaricarlo?",
        answer:
          "Questo convertitore non mostra una stima del peso. Comprimi immagine, con WebP selezionato, mostra il peso previsto e la percentuale risparmiata mentre regoli la qualità.",
      },
    ],
  },
  "png-to-webp": {
    name: "Da PNG a WebP",
    shortName: "PNG → WebP",
    tagline: "Converti le immagini PNG in WebP mantenendo gli sfondi trasparenti, di solito con un file molto più leggero.",
    intro:
      "Da PNG a WebP converte file PNG come screenshot, loghi e grafiche nel formato WebP. WebP supporta la trasparenza, quindi le aree trasparenti restano tali dopo la conversione. Il risultato di solito è molto più leggero del PNG, e un cursore della qualità ti permette di mantenere nitidi testo e linee sottili.",
    seoTitle: "Convertire PNG in WebP – Mantiene la trasparenza",
    seoDescription:
      "Converti PNG in WebP online gratis. Gli sfondi trasparenti restano, i file sono di solito molto più leggeri e puoi impostare la qualità. Tutto nel browser.",
    keywords: [
      "convertire png in webp",
      "da png a webp",
      "png in webp trasparente",
      "convertitore png webp",
      "ridurre peso png per sito",
      "webp trasparente",
    ],
    howToSteps: [
      {
        title: "Apri un PNG",
        description: "Trascina un file PNG nell’area di caricamento, clicca per sceglierne uno o incolla uno screenshot con Ctrl+V.",
      },
      {
        title: "Imposta la qualità",
        description: "Usa il 90% o più per loghi, testo e screenshot; per le foto di solito basta dal 75% all’85%.",
      },
      {
        title: "Scarica il WebP",
        description: "Clicca Scarica WebP. Le aree trasparenti restano trasparenti nel nuovo file.",
      },
    ],
    features: [
      {
        title: "Trasparenza mantenuta",
        description: "Il canale alfa del PNG viene salvato nel WebP, così loghi e icone mantengono lo sfondo trasparente.",
      },
      {
        title: "File molto più leggeri",
        description: "La compressione WebP di solito riduce screenshot e grafiche PNG a una frazione del loro peso.",
      },
      {
        title: "Controllo della qualità",
        description: "Imposta la qualità dal 10% al 100% in base a quanto dettaglio serve all’immagine.",
      },
      {
        title: "Stesse dimensioni",
        description: "Il WebP mantiene esattamente la larghezza e l’altezza del PNG.",
      },
    ],
    faqs: [
      {
        question: "Da PNG a WebP mantiene lo sfondo trasparente?",
        answer: "Sì. WebP supporta la trasparenza, quindi i pixel trasparenti e semitrasparenti vengono mantenuti.",
      },
      {
        question: "Perché il WebP è molto più leggero del PNG?",
        answer:
          "PNG è senza perdita e salva ogni pixel in modo esatto. Qui WebP usa una compressione con perdita, che elimina dettagli difficili da vedere e fa risparmiare molto spazio.",
      },
      {
        question: "Quale qualità devo usare per loghi e screenshot?",
        answer:
          "Usa dal 90% al 100%, così testo, icone e linee sottili restano nitidi. Per le foto di solito basta dal 75% all’85%.",
      },
      {
        question: "Posso usare immagini WebP sul mio sito?",
        answer:
          "Sì. Tutti i principali browser attuali mostrano WebP. Se supporti anche browser o app molto vecchi, tieni il PNG originale come alternativa.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "Da WebP a JPG",
    shortName: "WebP → JPG",
    tagline: "Converti le immagini WebP in JPG per aprirle in qualsiasi app, visualizzatore di foto o modulo di caricamento.",
    intro:
      "Da WebP a JPG converte i file WebP, comuni sui siti web, in normali immagini JPEG. JPG è la scelta più sicura quando un programma meno recente, un modulo di caricamento o un servizio di stampa non accetta WebP. Se il WebP ha aree trasparenti, scegli il colore che le riempie, perché JPG non supporta la trasparenza.",
    seoTitle: "Convertire WebP in JPG – Gratis, senza upload",
    seoDescription:
      "Converti WebP in JPG online gratis. Apri le immagini WebP in qualsiasi app o modulo, scegli un colore per le aree trasparenti e imposta la qualità. Senza upload.",
    keywords: [
      "convertire webp in jpg",
      "da webp a jpg",
      "webp in jpeg",
      "salvare webp come jpg",
      "convertitore webp jpg",
      "aprire file webp",
    ],
    howToSteps: [
      {
        title: "Apri un file WebP",
        description: "Trascina un’immagine WebP nell’area di caricamento, clicca per sceglierne una o incollala con Ctrl+V.",
      },
      {
        title: "Imposta qualità e colore di riempimento",
        description:
          "Scegli una qualità tra il 10% e il 100%. Se l’immagine ha parti trasparenti, scegli il colore che le sostituirà.",
      },
      {
        title: "Scarica il JPG",
        description: "Clicca Scarica JPG per salvare un file che si apre quasi ovunque.",
      },
    ],
    features: [
      {
        title: "Massima compatibilità",
        description: "JPG si apre in quasi ogni programma, dispositivo, stampante e modulo di caricamento dei siti.",
      },
      {
        title: "Colore per la trasparenza",
        description: "Le aree trasparenti del WebP vengono riempite di bianco o del colore che scegli.",
      },
      {
        title: "Qualità regolabile",
        description: "Usa il cursore della qualità per bilanciare peso del file e dettaglio.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene decodificata e salvata in JPG nel browser; nessun file viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Perché le immagini dei siti si salvano in WebP?",
        answer:
          "Molti siti forniscono le immagini in WebP perché i file sono più leggeri. Quando ne salvi una, ottieni il file WebP, che alcuni programmi meno recenti non riescono ad aprire.",
      },
      {
        question: "Cosa succede alle parti trasparenti di un WebP?",
        answer:
          "JPG non supporta la trasparenza, quindi quelle aree vengono riempite con un colore pieno. Per impostazione predefinita si usa il bianco, e puoi scegliere un altro colore.",
      },
      {
        question: "Posso convertire un WebP animato?",
        answer: "Viene convertito solo un singolo fotogramma fisso, perché JPG non supporta l’animazione.",
      },
      {
        question: "Il JPG perderà qualità?",
        answer:
          "Il WebP viene decodificato e salvato di nuovo in JPG, che è un formato con perdita. Usa il 90% o più per mantenere il risultato molto vicino all’originale.",
      },
    ],
  },
  "webp-to-png": {
    name: "Da WebP a PNG",
    shortName: "WebP → PNG",
    tagline: "Converti le immagini WebP in file PNG senza perdita che mantengono la trasparenza e ogni pixel.",
    intro:
      "Da WebP a PNG converte le immagini WebP in PNG, un formato senza perdita supportato da quasi ogni editor e visualizzatore. Le aree trasparenti restano trasparenti e i pixel decodificati vengono salvati in modo esatto, quindi l’immagine non perde qualità quando la modifichi e la salvi di nuovo. Usalo quando un’app non apre i WebP o quando ti serve un file da modificare ancora.",
    seoTitle: "Convertire WebP in PNG – Senza perdita, trasparente",
    seoDescription:
      "Converti WebP in PNG online gratis. Mantieni gli sfondi trasparenti e ottieni un PNG senza perdita che si apre in qualsiasi editor. Conversione nel browser.",
    keywords: [
      "convertire webp in png",
      "da webp a png",
      "webp in png trasparente",
      "convertitore webp png",
      "webp in png senza perdere qualità",
      "salvare webp come png",
    ],
    howToSteps: [
      {
        title: "Apri un file WebP",
        description: "Trascina un’immagine WebP nell’area di caricamento, clicca per sceglierne una o incollala con Ctrl+V.",
      },
      {
        title: "Controlla l’anteprima",
        description: "L’uscita è sempre un PNG senza perdita delle stesse dimensioni, quindi non c’è un’impostazione di qualità.",
      },
      {
        title: "Scarica il PNG",
        description: "Clicca Scarica PNG per salvare il file convertito.",
      },
    ],
    features: [
      {
        title: "Trasparenza preservata",
        description: "Le aree trasparenti e semitrasparenti del WebP restano trasparenti nel PNG.",
      },
      {
        title: "Uscita senza perdita",
        description: "I pixel decodificati vengono salvati in modo esatto, senza nuove perdite di compressione.",
      },
      {
        title: "Si apre ovunque",
        description: "PNG è supportato praticamente da tutti gli editor di immagini, i visualizzatori e i programmi da ufficio.",
      },
      {
        title: "Nessun upload",
        description: "La conversione avviene nel browser, quindi il file resta sul tuo dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Da WebP a PNG mantiene lo sfondo trasparente?",
        answer: "Sì. PNG supporta pienamente la trasparenza, quindi lo sfondo resta trasparente.",
      },
      {
        question: "Perché il PNG pesa più del WebP?",
        answer:
          "La maggior parte delle immagini WebP usa una compressione con perdita, mentre PNG salva ogni pixel senza perdita. Per questo la stessa immagine in PNG di solito richiede più byte.",
      },
      {
        question: "Convertire in PNG migliora la qualità dell’immagine?",
        answer:
          "No. Il PNG mantiene l’immagine esattamente come appare ora, ma non può recuperare i dettagli che la compressione WebP ha già eliminato.",
      },
      {
        question: "Posso convertire un WebP animato in PNG?",
        answer:
          "Lo strumento salva una sola immagine fissa. Qui l’uscita PNG non include i fotogrammi dell’animazione.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Ridimensionamento immagini in blocco",
    shortName: "Ridimensiona in blocco",
    tagline: "Ridimensiona fino a 50 immagini insieme in percentuale, a una larghezza esatta o entro un riquadro massimo, e scaricale in un unico ZIP.",
    intro:
      "Ridimensionamento immagini in blocco applica la stessa regola di dimensione a molte immagini in un solo passaggio. Puoi scalare ogni file in percentuale, impostare una larghezza esatta o adattare ogni immagine a un riquadro come 1200 × 800, così nessun lato supera il riquadro. Ogni file può mantenere il suo formato originale, e tutti i risultati si scaricano insieme in un unico ZIP.",
    seoTitle: "Ridimensionare più immagini insieme – In blocco",
    seoDescription:
      "Ridimensiona più immagini insieme, gratis. Scala fino a 50 file JPG, PNG o WebP in percentuale, a larghezza esatta o entro un riquadro e ottieni uno ZIP.",
    keywords: [
      "ridimensionare più immagini insieme",
      "ridimensionare immagini in blocco",
      "ridimensionamento batch immagini",
      "ridimensionare foto in blocco online",
      "ridimensionare tante foto insieme",
      "ridimensionare immagini e scaricare zip",
    ],
    howToSteps: [
      {
        title: "Aggiungi le immagini",
        description: "Trascina fino a 50 file JPG, PNG o WebP (fino a 50 MB ciascuno) nell’area di caricamento, o clicca per sceglierli.",
      },
      {
        title: "Scegli una modalità",
        description:
          "Percentuale ridimensiona ogni immagine dal 10% al 200%. Pixel esatti imposta la larghezza, e anche l’altezza se sblocchi le proporzioni. Adatta al riquadro riduce ogni immagine per farla stare nella larghezza e nell’altezza che inserisci.",
      },
      {
        title: "Scegli il formato di uscita",
        description:
          "Lascia Originale, oppure converti tutto in PNG, JPG o WebP. Non ingrandire le immagini più piccole è attivo per impostazione predefinita, così le immagini piccole non vengono ingrandite.",
      },
      {
        title: "Ridimensiona e scarica",
        description: "Clicca Ridimensiona tutto, poi Scarica ZIP, oppure salva i singoli file dall’elenco.",
      },
    ],
    features: [
      {
        title: "Tre modalità di ridimensionamento",
        description: "Scala in percentuale, imposta una larghezza esatta o adatta a una larghezza e un’altezza massime.",
      },
      {
        title: "Mantiene il formato di ogni file",
        description: "Con Originale, i JPG restano JPG, i PNG restano PNG e i file WebP restano WebP.",
      },
      {
        title: "Niente ingrandimenti",
        description:
          "Nelle modalità Pixel esatti e Adatta al riquadro, le immagini già più piccole della misura indicata mantengono le loro dimensioni.",
      },
      {
        title: "Un unico download ZIP",
        description: "I file ridimensionati mantengono il nome originale con l’aggiunta di -resized e si scaricano insieme in un unico archivio.",
      },
    ],
    faqs: [
      {
        question: "Quante immagini posso ridimensionare insieme?",
        answer:
          "Fino a 50 immagini per lotto, ciascuna fino a 50 MB. Le foto molto grandi usano molta memoria, quindi sul telefono può aiutare lavorare in lotti più piccoli.",
      },
      {
        question: "Le mie immagini verranno deformate?",
        answer:
          "Non nelle modalità Percentuale e Adatta al riquadro, che mantengono sempre le proporzioni. In modalità Pixel esatti, se sblocchi le proporzioni e imposti entrambi i lati, le immagini con una forma diversa verranno deformate.",
      },
      {
        question: "Quali formati di file sono supportati?",
        answer:
          "JPG, PNG e WebP. I file HEIC di iPhone non sono accettati qui; convertili prima con il Convertitore di immagini universale.",
      },
      {
        question: "Quale qualità si usa per i file JPG e WebP?",
        answer:
          "I file JPG e WebP ridimensionati vengono salvati con qualità al 90%. Quando converti immagini trasparenti in JPG, le aree trasparenti diventano bianche.",
      },
      {
        question: "I miei file vengono caricati da qualche parte?",
        answer: "No. Tutte le immagini vengono ridimensionate in questa scheda del browser e il file ZIP viene creato sul tuo dispositivo.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Compressione immagini in blocco",
    shortName: "Comprimi in blocco",
    tagline: "Comprimi fino a 50 immagini insieme in WebP, AVIF, JPG o PNG e scaricale in un unico ZIP.",
    intro:
      "Compressione immagini in blocco riduce il peso di molte immagini in un solo lotto. Scegli un formato di uscita e una qualità per tutti i file, avvii la compressione e vedi peso originale, nuovo peso e percentuale risparmiata per ogni immagine. È utile per preparare una cartella di foto per un sito, un negozio online o un’email.",
    seoTitle: "Comprimere più immagini insieme – Compressione in blocco",
    seoDescription:
      "Comprimi gratis fino a 50 immagini insieme. Converti JPG, PNG e WebP in WebP, AVIF, JPG o PNG, vedi il risparmio per ogni file e scarica tutto in uno ZIP.",
    keywords: [
      "comprimere più immagini insieme",
      "comprimere immagini in blocco",
      "compressione batch immagini",
      "comprimere foto in blocco online",
      "convertire immagini in webp in blocco",
      "comprimere foto e scaricare zip",
    ],
    howToSteps: [
      {
        title: "Aggiungi le immagini",
        description: "Trascina fino a 50 file JPG, PNG o WebP (fino a 50 MB ciascuno), o clicca per sceglierli.",
      },
      {
        title: "Scegli formato e qualità",
        description:
          "WebP all’80% è selezionato per impostazione predefinita. Scegli AVIF per i file più leggeri, JPG per la compatibilità o PNG per un’uscita senza perdita.",
      },
      {
        title: "Comprimi tutti i file",
        description: "Clicca Comprimi tutto e guarda comparire nell’elenco il nuovo peso e la percentuale risparmiata di ogni file.",
      },
      {
        title: "Scarica i risultati",
        description: "Clicca Scarica ZIP per salvare tutti i file compressi insieme, o scarica i singoli file dall’elenco.",
      },
    ],
    features: [
      {
        title: "Risultati per ogni file",
        description:
          "Vedi il peso prima e dopo e la percentuale risparmiata per ogni immagine, con un’etichetta chiara quando un file è diventato più pesante.",
      },
      {
        title: "Quattro formati di uscita",
        description: "AVIF, WebP, JPG o PNG, con un’unica impostazione di qualità dal 10% al 100% per tutto il lotto.",
      },
      {
        title: "ZIP con i nomi originali",
        description: "Ogni file mantiene il suo nome con l’aggiunta di -compressed, e i nomi duplicati vengono numerati in automatico.",
      },
      {
        title: "Funziona sul tuo dispositivo",
        description: "Tutti i file vengono compressi nel browser e non lasciano mai il tuo computer o telefono.",
      },
    ],
    faqs: [
      {
        question: "Quante immagini posso comprimere in un lotto?",
        answer: "Puoi aggiungere fino a 50 immagini, e ognuna può arrivare a 50 MB.",
      },
      {
        question: "Quale formato di uscita devo scegliere?",
        answer:
          "WebP è un buon equilibrio tra peso, qualità e compatibilità. AVIF di solito è più leggero ma la codifica è più lenta, e si nota con molte foto grandi. JPG si apre ovunque, e PNG è senza perdita ma riduce il peso meno di tutti.",
      },
      {
        question: "Perché uno dei miei file è diventato più pesante?",
        answer:
          "Alcune immagini sono già ben compresse, e salvarle di nuovo non aiuta. L’elenco segnala questi file, così puoi tenere l’originale.",
      },
      {
        question: "La compressione in blocco cambia le dimensioni delle immagini?",
        answer:
          "No, larghezza e altezza restano le stesse. Per ridurre anche le dimensioni, passa prima i file in Ridimensionamento immagini in blocco.",
      },
      {
        question: "Cosa succede ai PNG trasparenti se scelgo JPG?",
        answer: "JPG non supporta la trasparenza, quindi le aree trasparenti vengono riempite di bianco.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Rimuovi metadati immagine",
    shortName: "Rimuovi EXIF",
    tagline: "Rimuovi da una foto i dati EXIF come posizione GPS, modello della fotocamera e data, prima di condividerla.",
    intro:
      "Rimuovi metadati immagine crea una copia pulita della foto senza le informazioni EXIF nascoste. Le foto di telefoni e fotocamere spesso registrano la posizione GPS in cui sono state scattate, il modello del dispositivo, la data e l’ora. Questo strumento ridisegna l’immagine dai suoi pixel e salva un nuovo file, così quelle informazioni non vengono copiate, e mostra il nuovo peso prima del download.",
    seoTitle: "Rimuovere dati EXIF dalle foto – GPS e metadati",
    seoDescription:
      "Rimuovi gratis i metadati EXIF dalle foto. Elimina posizione GPS, modello della fotocamera e data prima di condividerle. Tutto nel browser, nessun upload.",
    keywords: [
      "rimuovere dati exif",
      "rimuovere metadati foto",
      "rimuovere posizione gps da foto",
      "cancellare exif",
      "eliminare metadati immagine",
      "cancellare dati posizione foto",
      "rimuovere metadati foto iphone",
    ],
    howToSteps: [
      {
        title: "Apri la foto",
        description: "Trascina, scegli o incolla una foto JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Controlla la copia pulita",
        description: "L’anteprima mostra l’immagine che verrà salvata, insieme al suo nuovo peso.",
      },
      {
        title: "Scegli formato e qualità",
        description:
          "Di norma viene mantenuto il formato originale. Per JPG e WebP, usa una qualità dal 90% al 100% per restare vicino all’originale, o scegli PNG per un’uscita senza perdita.",
      },
      {
        title: "Scarica e condividi il nuovo file",
        description: "Clicca Scarica e condividi questa copia al posto della foto originale.",
      },
    ],
    features: [
      {
        title: "Rimuove posizione e dati della fotocamera",
        description:
          "Coordinate GPS, marca e modello della fotocamera, obiettivo, data di scatto e altri campi EXIF e IPTC non vengono scritti nel nuovo file.",
      },
      {
        title: "Copia pulita dai pixel",
        description: "L’immagine viene ridisegnata dai suoi pixel, quindi nessun dato nascosto può essere copiato per sbaglio.",
      },
      {
        title: "Indicazione del peso",
        description: "Vedi il peso del file pulito prima di scaricarlo.",
      },
      {
        title: "Tutto sul tuo dispositivo",
        description: "La foto non viene mai caricata, quindi i suoi dati di posizione non vengono condivisi con nessuno durante l’elaborazione.",
      },
    ],
    faqs: [
      {
        question: "Quali metadati vengono rimossi?",
        answer:
          "Tutti: i dati EXIF (fotocamera, impostazioni, data e GPS), i campi IPTC e XMP come autore o copyright, e il profilo colore incorporato. Resta solo l’immagine visibile.",
      },
      {
        question: "Rimuovere i metadati cambia la qualità dell’immagine?",
        answer:
          "L’immagine viene salvata di nuovo. PNG mantiene ogni pixel, mentre JPG, WebP e AVIF vengono compressi di nuovo, quindi scegli una qualità alta. Le foto con un profilo colore ampio, come molte foto di iPhone, possono apparire un po’ meno vivaci perché il profilo non viene mantenuto.",
      },
      {
        question: "Come verifico che la posizione sia sparita?",
        answer:
          "Apri il file scaricato in Analizzatore di immagini. Legge i dati EXIF sul tuo dispositivo e mostra un avviso quando è presente una posizione GPS.",
      },
      {
        question: "App e siti rimuovono i dati EXIF al posto mio?",
        answer:
          "Alcune grandi piattaforme rimuovono parte dei metadati al caricamento, ma email, app di messaggistica e servizi di condivisione file spesso inviano il file originale senza modifiche. Rimuoverli tu è la scelta sicura.",
      },
      {
        question: "Posso rimuovere i metadati dalle foto HEIC di iPhone?",
        answer:
          "Sì. La foto HEIC viene convertita nel browser e la copia pulita viene salvata in JPG per impostazione predefinita.",
      },
    ],
  },
  "image-analyzer": {
    name: "Analizzatore di immagini",
    shortName: "Analizzatore",
    tagline: "Vedi dimensioni, peso, proporzioni, formato di stampa e dati EXIF della fotocamera di un’immagine, con un avviso per la posizione GPS.",
    intro:
      "Analizzatore di immagini mostra i dettagli tecnici di un file immagine senza modificarlo. Indica peso, formato, dimensioni in pixel, proporzioni, megapixel e se l’immagine ha trasparenza. Per le foto legge anche i dati EXIF della fotocamera, come modello, obiettivo, esposizione, ISO, data di scatto e posizione GPS, e ti avvisa quando una foto rivela dove è stata scattata.",
    seoTitle: "Analizzatore immagini – Verifica EXIF, peso e dimensioni",
    seoDescription:
      "Verifica gratis i dettagli di un’immagine: dimensioni, peso, proporzioni, formato di stampa e dati EXIF, con un avviso se la foto contiene la posizione GPS.",
    keywords: [
      "visualizzare dati exif online",
      "leggere metadati immagine",
      "verificare dimensioni immagine",
      "vedere exif foto",
      "verificare se una foto ha la posizione gps",
      "controllare risoluzione immagine",
      "informazioni immagine online",
    ],
    howToSteps: [
      {
        title: "Apri un’immagine",
        description: "Trascina, scegli o incolla qualsiasi immagine che il browser può aprire, comprese le foto HEIC di iPhone.",
      },
      {
        title: "Leggi le specifiche",
        description:
          "Vedi peso, formato, dimensioni, proporzioni, megapixel, trasparenza e formato di stampa a 300 DPI.",
      },
      {
        title: "Controlla i dati della fotocamera",
        description:
          "La sezione EXIF elenca fotocamera, obiettivo, esposizione e data. Se la foto contiene una posizione GPS, compare un avviso con un pulsante per rimuovere i metadati.",
      },
      {
        title: "Copia il report",
        description: "Clicca Copia report per copiare tutti i valori come testo semplice.",
      },
    ],
    features: [
      {
        title: "Specifiche tecniche",
        description:
          "Peso, formato, tipo MIME, dimensioni, proporzioni, megapixel, profondità colore, trasparenza e memoria stimata.",
      },
      {
        title: "Lettore EXIF della fotocamera",
        description:
          "Mostra fotocamera, obiettivo, data di scatto, tempo di esposizione, apertura, ISO, lunghezza focale, flash, orientamento e software di modifica, quando presenti.",
      },
      {
        title: "Avviso posizione GPS",
        description:
          "Mostra le coordinate quando una foto le contiene e offre un modo rapido, con un clic, per creare una copia senza metadati.",
      },
      {
        title: "Stima del formato di stampa",
        description: "Mostra quanto viene grande l’immagine stampata a 300 DPI, in pollici e centimetri.",
      },
      {
        title: "Sola lettura e in locale",
        description: "Il file non viene modificato, e tutti i dati vengono letti sul tuo dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Come vedo i dati EXIF di una foto?",
        answer:
          "Apri la foto qui e guarda la sezione Dati della fotocamera ed EXIF. Se indica che non ci sono metadati EXIF, il file è stato salvato senza, come succede spesso con screenshot e immagini scaricate dai social.",
      },
      {
        question: "Come capisco se una foto mostra dove è stata scattata?",
        answer:
          "Se la foto contiene coordinate GPS, l’analizzatore le mostra insieme a un avviso. Clicca Rimuovi metadati per creare una copia senza la posizione.",
      },
      {
        question: "Quali file contengono dati EXIF?",
        answer:
          "Di solito le foto di telefoni e fotocamere in formato JPG e HEIC. Anche i file WebP e AVIF possono contenerli, mentre screenshot e molte immagini esportate o modificate ne hanno pochi o nessuno.",
      },
      {
        question: "Cosa significa formato di stampa a 300 DPI?",
        answer:
          "È la dimensione di una stampa a 300 punti per pollice, una qualità comune per le stampe fotografiche. Per esempio, un’immagine di 3000 × 2000 pixel si stampa a circa 10 × 6,7 pollici.",
      },
      {
        question: "Il valore della profondità colore è esatto?",
        answer:
          "Si basa sul formato e sulla presenza di trasparenza (RGB a 24 bit o RGBA a 32 bit). Non rileva immagini a 16 bit o HDR.",
      },
    ],
  },
  "image-color-picker": {
    name: "Selettore colore da immagine",
    shortName: "Selettore colore",
    tagline: "Clicca un punto qualsiasi di un’immagine per ottenere il colore esatto in HEX, RGB, HSL, HSV e CMYK.",
    intro:
      "Selettore colore da immagine trova il colore esatto di qualsiasi pixel di un’immagine. Muovi il puntatore sull’immagine per vedere ingranditi i pixel sottostanti, poi clicca per scegliere un colore e copiarne il codice in HEX, RGB, HSL, HSV o CMYK. I colori vengono letti dall’immagine a piena risoluzione, non dall’anteprima ridotta.",
    seoTitle: "Selettore colore da immagine – Codice HEX e RGB",
    seoDescription:
      "Prendi colori da qualsiasi immagine, gratis. Clicca un pixel per ottenere il codice HEX, RGB, HSL, HSV e CMYK, usa la lente per la precisione e copia con un clic.",
    keywords: [
      "selettore colore da immagine",
      "trovare codice hex da immagine",
      "contagocce online",
      "trovare colore in una foto",
      "colore rgb da immagine",
      "trovare codice colore hex",
      "prendere colore da immagine",
    ],
    howToSteps: [
      {
        title: "Apri un’immagine",
        description: "Trascina, scegli o incolla un’immagine. Uno screenshot incollato con Ctrl+V funziona bene.",
      },
      {
        title: "Mira con la lente",
        description: "Muovi il mouse sull’anteprima: una lente rotonda mostra ingranditi i pixel sotto il puntatore.",
      },
      {
        title: "Clicca per scegliere il colore",
        description: "Clicca o tocca il punto che vuoi. Il colore compare con i suoi valori HEX, RGB, HSL, HSV e CMYK.",
      },
      {
        title: "Copia il codice",
        description: "Clicca Copia accanto al formato che ti serve. I colori recenti restano qui sotto per riusarli in fretta.",
      },
    ],
    features: [
      {
        title: "Lente d’ingrandimento",
        description: "Una vista ingrandita di 7 × 7 pixel ti aiuta a centrare i dettagli piccoli, come una linea sottile o una singola lettera.",
      },
      {
        title: "Cinque formati di colore",
        description: "Copia i valori HEX, RGB, HSL, HSV o CMYK con un clic ciascuno.",
      },
      {
        title: "Cronologia dei colori",
        description: "Gli ultimi 12 colori scelti restano come campioni, e cliccandone uno lo selezioni di nuovo.",
      },
      {
        title: "Campionamento a piena risoluzione",
        description: "Ogni colore viene letto dai pixel dell’immagine originale, quindi il valore non dipende dalle dimensioni dell’anteprima.",
      },
    ],
    faqs: [
      {
        question: "Come ottengo il codice HEX di un colore in un’immagine?",
        answer:
          "Apri l’immagine, clicca il colore che vuoi e premi Copia accanto al valore HEX. Puoi incollarlo in qualsiasi programma di grafica o file CSS.",
      },
      {
        question: "Posso prendere un colore da uno screenshot?",
        answer:
          "Sì. Fai uno screenshot, premi Ctrl+V in questa pagina per incollarlo e clicca il colore che ti serve.",
      },
      {
        question: "Il selettore colore funziona sui telefoni?",
        answer:
          "Sì. Tocca l’immagine per scegliere un colore. La lente compare solo con il puntatore del mouse, quindi ingrandisci la pagina se devi centrare un’area molto piccola.",
      },
      {
        question: "Perché pixel vicini di una foto hanno colori leggermente diversi?",
        answer:
          "Le foto contengono rumore, sfumature ed effetti della compressione, quindi pixel vicini raramente coincidono. Prova qualche punto e scegli quello che sembra giusto.",
      },
      {
        question: "Perché il valore CMYK è diverso da quello del mio software di stampa?",
        answer:
          "Qui i valori CMYK sono una semplice conversione matematica da RGB. I software di stampa usano profili colore per inchiostri e carte specifici, quindi i loro numeri possono essere diversi.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Generatore di palette da immagine",
    shortName: "Palette",
    tagline: "Estrai i colori principali di un’immagine come palette e copiali come codici HEX, variabili CSS o JSON.",
    intro:
      "Generatore di palette da immagine trova i colori dominanti di una foto o di una grafica e li mostra come campioni. Puoi scegliere 3, 4, 5, 6 o 8 colori; sono ordinati dal colore che copre l’area maggiore, e le tonalità molto simili vengono unite perché ogni campione sia distinto. Copia la palette come variabili CSS o array JSON, o scaricala come tavolozza PNG.",
    seoTitle: "Palette colori da immagine – Estrai i codici HEX",
    seoDescription:
      "Crea gratis una palette di colori da qualsiasi immagine. Estrai da 3 a 8 colori dominanti, copia codici HEX, variabili CSS o JSON e scarica una tavolozza PNG.",
    keywords: [
      "palette colori da immagine",
      "estrarre colori da immagine",
      "generatore palette colori",
      "schema colori da foto",
      "colori dominanti immagine",
      "estrarre codici hex da immagine",
    ],
    howToSteps: [
      {
        title: "Apri un’immagine",
        description: "Trascina, scegli o incolla una foto, un’illustrazione, un logo o uno screenshot.",
      },
      {
        title: "Scegli il numero di colori",
        description: "Clicca 3, 4, 5, 6 o 8. I campioni si aggiornano subito.",
      },
      {
        title: "Copia i singoli colori",
        description: "Clicca l’icona di copia su un campione per copiarne il codice HEX.",
      },
      {
        title: "Esporta la palette",
        description: "Usa Copia variabili CSS o Copia JSON, oppure scarica la palette come tavolozza PNG.",
      },
    ],
    features: [
      {
        title: "Ordinati per copertura",
        description: "Il primo campione è il colore che copre la parte più grande dell’immagine.",
      },
      {
        title: "Tonalità distinte",
        description: "I colori quasi identici vengono uniti, così la palette non ripete la stessa tinta.",
      },
      {
        title: "Pronta per gli sviluppatori",
        description: "Esporta come proprietà personalizzate CSS (--color-1, --color-2 e così via) o come array JSON di codici HEX.",
      },
      {
        title: "Tavolozza PNG",
        description: "Scarica un’immagine della palette con il codice HEX scritto sotto ogni campione.",
      },
    ],
    faqs: [
      {
        question: "Come vengono scelti i colori della palette?",
        answer:
          "L’immagine viene campionata a dimensioni ridotte, i colori simili vengono raggruppati e i gruppi che coprono l’area maggiore vengono mostrati per primi. I pixel trasparenti vengono ignorati.",
      },
      {
        question: "Perché ottengo meno colori di quelli selezionati?",
        answer:
          "Le tonalità molto vicine tra loro vengono unite, così ogni campione è chiaramente diverso. Un’immagine con pochi colori distinti può restituire meno campioni.",
      },
      {
        question: "Come uso la palette nel CSS?",
        answer:
          "Clicca Copia variabili CSS per ottenere un blocco :root con variabili chiamate --color-1, --color-2 e così via, poi incollalo nel tuo foglio di stile.",
      },
      {
        question: "Perché manca un piccolo colore d’accento?",
        answer:
          "La palette privilegia i colori che coprono un’area più grande, quindi un dettaglio minuscolo come un piccolo logo può non comparire. Usa Selettore colore da immagine per il valore esatto di un punto specifico.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Aggiungi testo all’immagine",
    shortName: "Aggiungi testo",
    tagline: "Scrivi didascalie o titoli su una foto scegliendo carattere, dimensione, colore, contorno e riquadro di sfondo.",
    intro:
      "Aggiungi testo all’immagine inserisce una o più righe di testo su un’immagine. Trascina il testo in qualsiasi punto dell’anteprima, o posizionalo in alto, al centro o in basso, e personalizzalo con sette caratteri, grassetto o corsivo, allineamento, opacità, ombra, contorno e un riquadro di sfondo colorato. Il testo viene disegnato sull’immagine a piena risoluzione quando la scarichi.",
    seoTitle: "Aggiungere testo a foto online – Scritte gratis",
    seoDescription:
      "Aggiungi testo alle immagini gratis. Trascina le scritte dove vuoi, scegli carattere, colore, contorno, ombra e riquadro, poi salva in JPG, PNG, WebP o AVIF.",
    keywords: [
      "aggiungere testo a immagine",
      "scrivere su foto online",
      "scrivere su immagine",
      "aggiungere didascalia a foto",
      "editor testo su immagine",
      "mettere scritte su foto",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scrivi il testo",
        description: "Inserisci il testo nella casella. Premi Invio per andare a capo.",
      },
      {
        title: "Personalizza e posiziona",
        description:
          "Scegli carattere, dimensione (da 12 a 240 px), colore, opacità e allineamento. Trascina il testo sull’anteprima, o scegli In alto, Al centro, In basso o Personalizzata (Y%).",
      },
      {
        title: "Scarica",
        description: "Mantieni il formato originale o scegli JPG, PNG, WebP o AVIF, poi clicca Scarica.",
      },
    ],
    features: [
      {
        title: "Trascina per posizionare",
        description: "Sposta il testo direttamente sull’anteprima per metterlo esattamente dove vuoi.",
      },
      {
        title: "Sette caratteri",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New e Impact, con grassetto e corsivo.",
      },
      {
        title: "Leggibile su qualsiasi foto",
        description: "Aggiungi un’ombra, un contorno da 1 a 20 px o un riquadro di sfondo con colore e opacità propri.",
      },
      {
        title: "Testo su più righe",
        description: "Scrivi più righe e allineale a sinistra, al centro o a destra.",
      },
    ],
    faqs: [
      {
        question: "Come rendo leggibile il testo su una foto piena di dettagli?",
        answer:
          "Attiva Contorno e scegli un colore che contrasti con il testo, oppure attiva Riquadro di sfondo per mettere dietro un riquadro pieno o semitrasparente. Anche l’ombra aiuta sulle zone chiare.",
      },
      {
        question: "Posso aggiungere più di un blocco di testo?",
        answer:
          "Lo strumento aggiunge un blocco di testo, che può avere più righe. Per aggiungere testo in un secondo punto, scarica il risultato, riaprilo e aggiungi il testo successivo.",
      },
      {
        question: "Quali caratteri posso usare?",
        answer:
          "Puoi scegliere tra sette caratteri. Quasi tutti sono caratteri di sistema, quindi se uno non è installato sul tuo dispositivo, il browser usa un carattere simile.",
      },
      {
        question: "Il testo sarà nitido nell’immagine scaricata?",
        answer:
          "Sì. Il testo viene disegnato alla piena risoluzione dell’immagine. Se salvi in JPG, usa una qualità alta per mantenere puliti i bordi delle lettere.",
      },
    ],
  },
  "watermark-image": {
    name: "Filigrana immagine",
    shortName: "Filigrana",
    tagline: "Proteggi le tue foto con una filigrana di testo o un logo, in un solo punto o ripetuta su tutta l’immagine.",
    intro:
      "Filigrana immagine aggiunge sopra una foto un avviso di copyright, il nome di un sito o un logo. Posiziona una filigrana di testo o un logo in uno dei nove punti e impostane dimensione e opacità, oppure ripeti il testo su tutta l’immagine, che così è molto più difficile da eliminare con un ritaglio. I loghi possono essere file PNG, WebP, JPG o SVG; un logo con sfondo trasparente dà il risultato migliore.",
    seoTitle: "Filigrana foto online – Aggiungi testo o logo",
    seoDescription:
      "Aggiungi gratis una filigrana alle foto. Usa un testo o il tuo logo, scegli tra nove posizioni, imposta opacità e rotazione o ripeti il testo su tutta l’immagine.",
    keywords: [
      "filigrana foto",
      "aggiungere filigrana a foto",
      "aggiungere logo a foto",
      "filigrana foto online gratis",
      "watermark foto",
      "filigrana ripetuta",
      "filigrana trasparente",
    ],
    howToSteps: [
      {
        title: "Apri la foto",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scegli testo o logo",
        description:
          "Seleziona Testo e scrivi il tuo testo, oppure seleziona Logo e scegli un file PNG, WebP, JPG o SVG.",
      },
      {
        title: "Posiziona e personalizza",
        description:
          "Clicca una posizione nella griglia 3 × 3, poi imposta opacità e dimensione. Per il testo puoi anche impostare colore e rotazione, o attivare Ripeti su tutta l’immagine.",
      },
      {
        title: "Scarica",
        description: "Mantieni il formato originale o scegline un altro, poi clicca Scarica.",
      },
    ],
    features: [
      {
        title: "Testo o logo",
        description: "Usa una riga di copyright o l’indirizzo di un sito, oppure carica l’immagine del tuo logo.",
      },
      {
        title: "Nove posizioni",
        description: "Angoli, bordi o centro, con un margine che si adatta alle dimensioni dell’immagine.",
      },
      {
        title: "Testo ripetuto a motivo",
        description: "Ripeti il testo su tutta la foto con l’angolo che scegli.",
      },
      {
        title: "Opacità, dimensione e rotazione",
        description: "Opacità dal 10% al 100%, testo da 14 a 140 px, larghezza del logo dal 5% al 60% dell’immagine e rotazione del testo da -90° a 90°.",
      },
    ],
    faqs: [
      {
        question: "Come aggiungo il mio logo come filigrana?",
        answer:
          "Scegli Logo, clicca Scegli il logo e seleziona il file. Imposta la dimensione del logo come percentuale della larghezza dell’immagine, scegli una posizione e abbassa l’opacità perché la foto resti visibile.",
      },
      {
        question: "Che opacità deve avere una filigrana?",
        answer:
          "Tra il 30% e il 50% circa è visibile senza coprire la foto. Usa un valore più alto se la filigrana deve essere ben leggibile.",
      },
      {
        question: "Cos’è una filigrana ripetuta?",
        answer:
          "Ripeti su tutta l’immagine stampa il testo molte volte su tutta la foto. È molto più difficile da eliminare con un ritaglio rispetto a un singolo segno in un angolo. È disponibile per le filigrane di testo.",
      },
      {
        question: "Perché il mio logo ha un riquadro bianco attorno?",
        answer:
          "Il file del logo ha uno sfondo pieno. Usa un PNG, WebP o SVG con sfondo trasparente, oppure rimuovi prima lo sfondo con Rimuovi sfondo.",
      },
      {
        question: "Una filigrana può impedire che copino la mia foto?",
        answer:
          "Una filigrana rende la copia meno interessante e mostra chi possiede l’immagine, ma non può impedirla del tutto. Segni grandi, centrali o ripetuti sono più difficili da eliminare di un piccolo segno in un angolo.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Aggiungi bordo all’immagine",
    shortName: "Aggiungi bordo",
    tagline: "Aggiungi un bordo o una cornice in tinta unita attorno a una foto, all’esterno dell’immagine o sopra i suoi bordi.",
    intro:
      "Aggiungi bordo all’immagine disegna una cornice colorata attorno a un’immagine. In modalità Esterno la tela si allarga, così tutta la foto resta visibile dentro il bordo; in modalità Interno il bordo viene disegnato sopra i margini e l’immagine mantiene le dimensioni originali. Puoi impostare uno spessore da 1 a 100 pixel, un colore qualsiasi e un livello di opacità.",
    seoTitle: "Aggiungere bordo a foto online – Cornice gratis",
    seoDescription:
      "Aggiungi gratis un bordo alle immagini online. Scegli colore, spessore da 1 a 100 px e opacità, e posizionalo attorno alla foto o sopra i suoi bordi. Senza upload.",
    keywords: [
      "aggiungere bordo a immagine",
      "aggiungere cornice a foto",
      "bordo immagine online",
      "mettere un bordo a una foto",
      "bordo bianco per instagram",
      "contorno foto",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scegli la posizione del bordo",
        description: "Esterno aggiunge il bordo attorno alla foto e ne aumenta le dimensioni. Interno lo disegna sopra i margini e mantiene le dimensioni.",
      },
      {
        title: "Imposta spessore, colore e opacità",
        description: "Trascina il cursore dello spessore da 1 a 100 px, scegli un colore qualsiasi e abbassa l’opacità per una cornice più leggera.",
      },
      {
        title: "Scarica",
        description: "Mantieni il formato originale o scegli JPG, PNG, WebP o AVIF, poi clicca Scarica.",
      },
    ],
    features: [
      {
        title: "Esterno o interno",
        description: "Aggiungi spazio attorno alla foto, oppure mantieni esattamente le dimensioni originali.",
      },
      {
        title: "Qualsiasi spessore e colore",
        description: "Da una linea sottile di 1 px a una cornice larga 100 px, in qualsiasi colore.",
      },
      {
        title: "Opacità regolabile",
        description: "Rendi il bordo semitrasparente per un effetto più leggero.",
      },
      {
        title: "Mantiene il formato",
        description: "L’immagine con il bordo viene salvata nello stesso formato dell’originale, a meno che tu non ne scelga un altro.",
      },
    ],
    faqs: [
      {
        question: "Aggiungere un bordo cambia le dimensioni dell’immagine?",
        answer:
          "In modalità Esterno lo spessore del bordo si aggiunge su ogni lato, quindi un’immagine di 1000 × 800 con un bordo di 20 px diventa 1040 × 840. La modalità Interno mantiene le dimensioni e copre il margine esterno della foto.",
      },
      {
        question: "Come aggiungo un bordo bianco per Instagram?",
        answer:
          "Ritaglia prima la foto in 1:1, poi aggiungi un bordo bianco in modalità Esterno. Il risultato resta quadrato perché lo stesso spessore si aggiunge su ogni lato.",
      },
      {
        question: "Posso creare un bordo con gli angoli arrotondati?",
        answer:
          "Il bordo è rettangolare. Per un effetto arrotondato, aggiungi prima il bordo e poi apri il risultato in Arrotonda angoli immagine.",
      },
      {
        question: "A cosa serve l’opacità del bordo?",
        answer:
          "Un’opacità più bassa rende il bordo più trasparente. In modalità Interno la foto si vede attraverso il bordo; in modalità Esterno l’area del bordo diventa in parte trasparente in PNG, WebP e AVIF, e si fonde con il bianco in JPG.",
      },
    ],
  },
  "round-image": {
    name: "Arrotonda angoli immagine",
    shortName: "Angoli arrotondati",
    tagline: "Arrotonda gli angoli di un’immagine o ritagliala a cerchio, con sfondo trasparente in PNG.",
    intro:
      "Arrotonda angoli immagine dà a un’immagine angoli morbidi o la trasforma in un cerchio per un’immagine del profilo o l’icona di un’app. Scegli il preset Piccolo, Medio o Grande, imposta un raggio esatto con il cursore o clicca Crea un cerchio. Il risultato viene salvato in PNG per impostazione predefinita, così gli angoli tagliati restano trasparenti.",
    seoTitle: "Arrotondare angoli immagine online – Anche a cerchio",
    seoDescription:
      "Arrotonda gratis gli angoli di un’immagine o ritaglia una foto a cerchio. Imposta il raggio, mantieni lo sfondo trasparente in PNG o scegli un colore per il JPG.",
    keywords: [
      "arrotondare angoli immagine",
      "angoli arrotondati immagine online",
      "ritagliare immagine a cerchio",
      "creare foto profilo rotonda",
      "immagine profilo rotonda",
      "png con angoli arrotondati",
    ],
    howToSteps: [
      {
        title: "Apri l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scegli la forma",
        description: "Clicca Crea un cerchio, scegli angoli Piccolo, Medio o Grande, o trascina il cursore del raggio.",
      },
      {
        title: "Scegli il formato",
        description:
          "PNG è selezionato per impostazione predefinita. Se scegli JPG, scegli bianco, nero o un colore personalizzato per gli angoli.",
      },
      {
        title: "Scarica",
        description: "Clicca Scarica per salvare l’immagine arrotondata, oppure copiala negli appunti.",
      },
    ],
    features: [
      {
        title: "Preset e raggio esatto",
        description: "Preset Piccolo, Medio e Grande, o qualsiasi raggio da 0 fino a metà del lato più corto.",
      },
      {
        title: "Avatar rotondo",
        description: "Trasforma l’immagine in un cerchio con un clic, pronta per le immagini del profilo.",
      },
      {
        title: "Angoli trasparenti",
        description: "PNG, WebP e AVIF lasciano trasparente l’area fuori dalla curva.",
      },
      {
        title: "Colore di riempimento per JPG",
        description: "Quando salvi in JPG, gli angoli vengono riempiti di bianco, nero o di un colore a tua scelta.",
      },
    ],
    faqs: [
      {
        question: "Come creo un’immagine del profilo rotonda?",
        answer:
          "Clicca Crea un cerchio. Il cerchio usa il lato più corto dell’immagine ed è centrato, quindi se la foto non è quadrata, ritagliala prima in 1:1 per centrare il viso ed evitare spazi vuoti ai lati.",
      },
      {
        question: "Perché i miei angoli sono bianchi o neri invece che trasparenti?",
        answer: "JPG non supporta la trasparenza. Scegli PNG, WebP o AVIF per mantenere trasparenti gli angoli.",
      },
      {
        question: "Cosa significano i preset Piccolo, Medio e Grande?",
        answer:
          "Il raggio massimo possibile è metà del lato più corto dell’immagine. Piccolo, Medio e Grande usano il 10%, il 25% e il 50% di quel massimo.",
      },
      {
        question: "Perché il file dell’immagine arrotondata è così pesante?",
        answer:
          "PNG è senza perdita, quindi una foto della fotocamera a piena dimensione può creare un file grande. Ridimensiona prima la foto, o salva in WebP, che mantiene anch’esso la trasparenza ed è molto più leggero.",
      },
    ],
  },
  "favicon-generator": {
    name: "Generatore di favicon",
    shortName: "Favicon",
    tagline: "Crea favicon.ico, un’icona Apple touch, le icone Android e un web manifest da una sola immagine, in un unico ZIP.",
    intro:
      "Generatore di favicon trasforma un logo o un’immagine nella serie di icone che serve a un sito web. Ritaglia l’immagine in un quadrato centrato e crea favicon.ico (con le dimensioni 16, 32 e 48 pixel), icone PNG da 16 a 512 pixel, un apple-touch-icon.png di 180 × 180 e un file site.webmanifest, tutto in un unico ZIP. La pagina mostra anche i tag link HTML da incollare nella sezione head del tuo sito.",
    seoTitle: "Generatore favicon – ICO, PNG e icona Apple touch",
    seoDescription:
      "Generatore di favicon gratuito. Carica un logo PNG, JPG o SVG e ottieni favicon.ico, icone PNG da 16 a 512 px, un’icona Apple touch e un web manifest in uno ZIP.",
    keywords: [
      "generatore favicon",
      "creare favicon",
      "creare favicon ico",
      "convertire png in ico",
      "generatore apple touch icon",
      "favicon da immagine",
      "creare icona sito web",
    ],
    howToSteps: [
      {
        title: "Carica il logo",
        description:
          "Trascina o scegli un’immagine PNG, JPG, SVG o HEIC. Un’immagine quadrata di almeno 512 × 512 pixel dà il risultato migliore.",
      },
      {
        title: "Assicurati che sia centrato",
        description:
          "Le icone vengono ritagliate dal centro dell’immagine. Se il logo non è centrato o l’immagine non è quadrata, ritagliala prima in 1:1 con Ritaglia immagine.",
      },
      {
        title: "Scarica il pacchetto favicon",
        description: "Clicca Scarica pacchetto favicon (ZIP) per ottenere tutte le icone e il manifest.",
      },
      {
        title: "Aggiungilo al tuo sito",
        description:
          "Carica i file nella cartella principale del sito, poi clicca Copia codice e incolla i tag HTML nella sezione head delle tue pagine.",
      },
    ],
    features: [
      {
        title: "favicon.ico in più dimensioni",
        description: "Un solo file ICO con icone 16 × 16, 32 × 32 e 48 × 48 per le schede del browser e i preferiti.",
      },
      {
        title: "Icone PNG per ogni dispositivo",
        description: "File PNG a 16, 32, 48, 64, 128, 192 e 512 pixel, più un apple-touch-icon.png di 180 × 180.",
      },
      {
        title: "Web app manifest",
        description: "Un file site.webmanifest che punta alle icone da 192 e 512 pixel per Android e per le web app installabili.",
      },
      {
        title: "Dimensioni piccole nitide",
        description: "Le icone vengono ridotte in più passaggi dall’immagine intera, e così le versioni da 16 e 32 pixel restano più pulite.",
      },
      {
        title: "HTML pronto da incollare",
        description: "Copia con un clic i tag link per le icone e il manifest.",
      },
    ],
    faqs: [
      {
        question: "Quanto deve essere grande l’immagine per la favicon?",
        answer:
          "Usa un’immagine quadrata di almeno 512 × 512 pixel, così l’icona più grande resta nitida. Forme semplici e colori decisi restano riconoscibili anche a 16 × 16.",
      },
      {
        question: "Quali file ci sono nello ZIP?",
        answer:
          "favicon.ico, da favicon-16x16.png a favicon-512x512.png (16, 32, 48, 64, 128, 192 e 512), apple-touch-icon.png a 180 × 180 e site.webmanifest.",
      },
      {
        question: "Dove metto i file della favicon?",
        answer:
          "Caricali nella cartella principale del tuo sito, la stessa della home page. Poi incolla i tag HTML mostrati in questa pagina nella sezione head di ogni pagina.",
      },
      {
        question: "Perché una parte del mio logo viene tagliata?",
        answer:
          "Lo strumento prende il quadrato centrato più grande dell’immagine. Se il logo è largo o non è centrato, ritaglialo a quadrato lasciando un po’ di spazio attorno prima di generare le icone.",
      },
      {
        question: "Posso usare un logo SVG?",
        answer:
          "Sì. L’SVG viene disegnato come immagine e salvato in file PNG e ICO. Lo ZIP non include una favicon SVG.",
      },
      {
        question: "Devo modificare il file manifest?",
        answer:
          "Sì. site.webmanifest usa il nome segnaposto App e colori del tema scuri. Aprilo in un editor di testo e cambia name, short_name e i colori in base al tuo sito.",
      },
    ],
  },
  "image-to-base64": {
    name: "Da immagine a Base64",
    shortName: "Immagine → Base64",
    tagline: "Converti un file immagine in una stringa Base64 da copiare, con snippet HTML e CSS già pronti.",
    intro:
      "Da immagine a Base64 codifica un file immagine come testo Base64, così può essere salvato o inviato come semplice testo, per esempio dentro un JSON, una pagina HTML o un file CSS. La stringa viene creata dai byte originali del file, quindi l’immagine non viene ricompressa né modificata. Lo strumento mostra il numero di caratteri e ti dà anche un tag img HTML e una regola CSS background-image che contengono l’intera immagine.",
    seoTitle: "Convertire immagine in Base64 – Copia la stringa",
    seoDescription:
      "Converti immagini in Base64 online gratis. Codifica i byte originali di JPG, PNG, WebP, GIF o SVG e copia la stringa, un tag img HTML o una regola CSS con un clic.",
    keywords: [
      "immagine in base64",
      "convertire immagine in base64",
      "codificare immagine base64",
      "png in base64",
      "jpg in base64",
      "svg in base64",
      "stringa base64 immagine",
    ],
    howToSteps: [
      {
        title: "Apri un’immagine",
        description: "Trascina, scegli o incolla qualsiasi file immagine. Le immagini piccole come le icone funzionano meglio.",
      },
      {
        title: "Ottieni la stringa Base64",
        description: "La stringa compare subito, con la sua lunghezza in caratteri e il peso approssimativo.",
      },
      {
        title: "Copia ciò che ti serve",
        description: "Clicca Copia Base64 per la sola stringa, oppure usa Copia HTML o Copia CSS per uno snippet già pronto.",
      },
      {
        title: "Incollala nel codice",
        description: "Incolla la stringa nel tuo JSON, HTML, CSS o script.",
      },
    ],
    features: [
      {
        title: "Codifica esatta dei byte",
        description: "Il file originale viene codificato così com’è, senza ricompressione né cambi di qualità.",
      },
      {
        title: "Informazioni sul peso",
        description: "Vedi il numero di caratteri e il peso approssimativo della stringa prima di usarla.",
      },
      {
        title: "Snippet HTML e CSS",
        description: "Copia un tag img o una regola background-image con il data URI completo già incluso.",
      },
      {
        title: "Codificata in locale",
        description: "Il file viene letto e codificato nel browser e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "A cosa serve Base64 con le immagini?",
        answer:
          "Base64 trasforma i dati binari di un’immagine in caratteri di testo. Gli sviluppatori lo usano per inserire piccole immagini direttamente in HTML, CSS, JSON o modelli di email, così non serve caricare un file immagine separato.",
      },
      {
        question: "Perché la stringa Base64 pesa più del file immagine?",
        answer:
          "Base64 usa 4 caratteri di testo ogni 3 byte, quindi il risultato è circa il 33% più grande. Un’immagine di 30 KB diventa circa 40 KB di testo.",
      },
      {
        question: "Che differenza c’è tra Base64 e un data URI?",
        answer:
          "Base64 è solo il testo codificato. Un data URI aggiunge un prefisso come data:image/png;base64, così i browser conoscono il tipo di file. Questo strumento dà la sola stringa; Da immagine a data URI dà la versione completa.",
      },
      {
        question: "Conviene convertire in Base64 le immagini grandi?",
        answer:
          "Di solito no. Base64 funziona meglio con immagini piccole come le icone. Le foto grandi appesantiscono molto HTML o CSS, e il browser non può memorizzare nella cache l’immagine come file separato.",
      },
      {
        question: "La mia immagine viene modificata durante la codifica?",
        answer:
          "No, vengono codificati i byte originali. L’unica eccezione sono le foto HEIC di iPhone, che vengono prima convertite in PNG perché la maggior parte dei browser non sa mostrare HEIC.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Da immagine a data URI",
    shortName: "Data URI",
    tagline: "Trasforma un’immagine in un data URI completo, pronto da incollare in un attributo src HTML o in un valore url() CSS.",
    intro:
      "Da immagine a data URI converte un file immagine in un data URI: una riga di testo che contiene sia il tipo di file sia l’immagine codificata in Base64. Puoi incollarlo direttamente in un attributo src di img o in un valore url() CSS, e l’immagine si vede senza un file separato. Il tipo MIME del prefisso viene preso dal tuo file, e i byte dell’immagine non vengono modificati.",
    seoTitle: "Convertire immagine in data URI – Per HTML e CSS",
    seoDescription:
      "Converti gratis un’immagine in data URI. Ottieni una stringa Base64 data:image con il tipo MIME corretto e copiala come tag img HTML o regola CSS di sfondo.",
    keywords: [
      "immagine in data uri",
      "generatore data uri",
      "convertire immagine in data url",
      "data uri base64",
      "immagine inline nel css",
      "incorporare immagine in html",
      "immagine data url",
    ],
    howToSteps: [
      {
        title: "Apri un’immagine",
        description: "Trascina, scegli o incolla qualsiasi file immagine, come un’icona, un logo o una piccola grafica.",
      },
      {
        title: "Ottieni il data URI",
        description: "Il data URI completo, che inizia con data:image/, compare con la sua lunghezza e il peso approssimativo.",
      },
      {
        title: "Copialo",
        description: "Clicca Copia data URI, oppure usa Copia HTML o Copia CSS per uno snippet già pronto.",
      },
      {
        title: "Incollalo nella pagina",
        description: "Usalo ovunque funzioni un normale URL di immagine, come un tag img o uno sfondo CSS.",
      },
    ],
    features: [
      {
        title: "Tipo MIME corretto",
        description: "Il prefisso corrisponde al tuo file, per esempio image/png, image/jpeg o image/svg+xml.",
      },
      {
        title: "Byte originali",
        description: "Il file viene codificato così com’è, quindi qualità e peso non cambiano per una ricompressione.",
      },
      {
        title: "Snippet pronti da copiare",
        description: "Ottieni un tag img completo o una regola background-image con il data URI già inserito.",
      },
      {
        title: "Privato",
        description: "Il data URI viene creato nel browser, quindi l’immagine non viene caricata.",
      },
    ],
    faqs: [
      {
        question: "Cos’è un data URI?",
        answer:
          "Un data URI è un link che contiene il file stesso invece di puntare a esso. Per le immagini inizia con data:image/png;base64, o un prefisso simile, e i browser lo mostrano come un normale URL di immagine.",
      },
      {
        question: "Come uso un data URI nel CSS?",
        answer:
          "Clicca Copia CSS per ottenere una regola background-image con l’URI completo dentro url(), e incollala nel tuo foglio di stile.",
      },
      {
        question: "Quando è meglio evitare i data URI?",
        answer:
          "Evitali per le immagini grandi e per quelle usate in molte pagine. Il testo codificato è circa un terzo più grande del file, e il browser non può memorizzarlo nella cache separatamente.",
      },
      {
        question: "Le immagini data URI funzionano nelle email?",
        answer:
          "Il supporto varia. Molti programmi di posta, compresi alcuni servizi webmail, non mostrano le immagini data URI, quindi prova la tua email o usa un’immagine ospitata online.",
      },
      {
        question: "Quali tipi di immagine sono supportati?",
        answer:
          "Qualsiasi immagine che il browser può aprire, come JPG, PNG, GIF, WebP, AVIF e SVG. Le foto HEIC di iPhone vengono prima convertite in PNG, quindi il loro data URI usa image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Da Base64 a immagine",
    shortName: "Base64 → Immagine",
    tagline: "Incolla una stringa Base64 o un data URI per vedere l’anteprima dell’immagine e scaricarla in PNG, JPG o WebP.",
    intro:
      "Da Base64 a immagine decodifica il testo Base64 e lo trasforma di nuovo in un’immagine da vedere e salvare. Puoi incollare una semplice stringa Base64, un data URI completo, o uno snippet CSS url() o HTML src che ne contenga uno; Base64 URL-safe e a capo vengono gestiti in automatico. Lo strumento rileva se i dati sono PNG, JPEG, GIF, WebP, SVG, BMP o AVIF, e mostra l’immagine decodificata con le sue dimensioni.",
    seoTitle: "Convertire Base64 in immagine – Anteprima e download",
    seoDescription:
      "Decodifica Base64 in immagine online e gratis. Incolla una stringa Base64, un data URI o uno snippet CSS o HTML, vedi l’anteprima e scaricala in PNG, JPG o WebP.",
    keywords: [
      "base64 in immagine",
      "decodificare immagine base64",
      "base64 in png",
      "base64 in jpg",
      "data uri in immagine",
      "convertire stringa base64 in immagine",
      "visualizzatore immagini base64",
    ],
    howToSteps: [
      {
        title: "Incolla i dati Base64",
        description: "Incolla nella casella di testo, clicca Incolla, o carica un file .txt che contiene la stringa.",
      },
      {
        title: "Controlla l’anteprima",
        description: "L’immagine viene decodificata in automatico e mostrata con larghezza e altezza. Se il testo non è valido compare un messaggio di errore.",
      },
      {
        title: "Scegli un formato di esportazione",
        description: "Seleziona PNG, JPG o WebP.",
      },
      {
        title: "Scarica l’immagine",
        description: "Clicca Scarica per salvarla sul tuo dispositivo.",
      },
    ],
    features: [
      {
        title: "Accetta molte forme di input",
        description:
          "Base64 semplice, data URI, snippet CSS url() e HTML src, Base64 URL-safe e testo diviso su più righe.",
      },
      {
        title: "Rilevamento automatico del formato",
        description: "Riconosce PNG, JPEG, GIF, WebP, SVG, BMP e AVIF dai dati stessi, anche se il prefisso manca o è sbagliato.",
      },
      {
        title: "Anteprima immediata",
        description: "Vedi l’immagine decodificata e le sue dimensioni appena incolli.",
      },
      {
        title: "Tre formati di esportazione",
        description: "Salva il risultato in PNG, JPG o WebP.",
      },
    ],
    faqs: [
      {
        question: "Che tipo di testo Base64 posso incollare?",
        answer:
          "Una semplice stringa Base64, un data URI come data:image/png;base64,..., o uno snippet CSS o HTML che ne contenga uno. Spazi, a capo e caratteri URL-safe vengono sistemati in automatico.",
      },
      {
        question: "Perché ricevo un errore?",
        answer:
          "Spesso il testo viene troncato durante la copia. Assicurati di aver copiato l’intera stringa, compresa la parte finale, che può contenere segni =.",
      },
      {
        question: "Il file scaricato è identico all’originale?",
        answer:
          "L’immagine viene decodificata e salvata di nuovo nel formato che scegli. PNG mantiene ogni pixel, mentre JPG e WebP vengono compressi di nuovo. Le GIF animate diventano una singola immagine fissa, e le grafiche SVG vengono salvate come immagini a pixel.",
      },
      {
        question: "Come capisce lo strumento di che tipo di immagine si tratta?",
        answer:
          "Ogni formato inizia con una firma nota, per esempio iVBORw0KGgo per PNG o /9j/ per JPEG. Lo strumento legge questi primi caratteri per decodificare correttamente l’immagine.",
      },
      {
        question: "I miei dati Base64 vengono inviati a un server?",
        answer: "No. Il testo viene decodificato nel browser e l’immagine viene creata sul tuo dispositivo.",
      },
    ],
  },
  "svg-to-png": {
    name: "Da SVG a PNG",
    shortName: "SVG → PNG",
    tagline: "Converti file vettoriali SVG in immagini PNG nitide a 1x, 2x, 4x o 8x, mantenendo la trasparenza.",
    intro:
      "Da SVG a PNG trasforma una grafica vettoriale, come un logo o un’icona, in un’immagine PNG per i casi in cui i file SVG non sono accettati. Scegli 1x, 2x, 4x o 8x la dimensione propria dell’SVG; poiché il vettore viene ridisegnato a quella dimensione, una scala maggiore dà un’immagine più nitida, non sfocata. Gli sfondi trasparenti restano trasparenti nel PNG.",
    seoTitle: "Convertire SVG in PNG – Alta risoluzione, trasparente",
    seoDescription:
      "Converti SVG in PNG online gratis. Esporta a 1x, 2x, 4x o 8x per immagini nitide ad alta risoluzione con sfondo trasparente. Conversione nel browser.",
    keywords: [
      "convertire svg in png",
      "da svg a png",
      "svg in png alta risoluzione",
      "svg in png trasparente",
      "esportare svg come png",
      "convertitore svg",
    ],
    howToSteps: [
      {
        title: "Apri un file SVG",
        description: "Trascina un file .svg nell’area di caricamento o clicca per sceglierne uno.",
      },
      {
        title: "Scegli la scala",
        description: "Seleziona 1x, 2x, 4x o 8x. Larghezza e altezza in pixel dell’uscita sono indicate sotto i pulsanti.",
      },
      {
        title: "Scarica il PNG",
        description: "Clicca Scarica PNG per salvare l’immagine, oppure copiala negli appunti.",
      },
    ],
    features: [
      {
        title: "Nitida a ogni scala",
        description: "Il vettore viene ridisegnato alla dimensione scelta, quindi linee e testo restano netti.",
      },
      {
        title: "Sfondo trasparente",
        description: "Le aree senza riempimento nell’SVG restano trasparenti nel PNG.",
      },
      {
        title: "Anteprima delle dimensioni",
        description: "Vedi le dimensioni esatte in pixel per ogni scala prima di scaricare.",
      },
      {
        title: "PNG senza perdita",
        description: "L’immagine generata viene salvata in PNG senza perdite di compressione.",
      },
    ],
    faqs: [
      {
        question: "Come ottengo un PNG ad alta risoluzione da un SVG?",
        answer:
          "Scegli 4x o 8x. Un SVG di 256 × 256 diventa 1024 × 1024 a 4x o 2048 × 2048 a 8x, e resta nitido perché viene ridisegnato a quella dimensione.",
      },
      {
        question: "Perché le dimensioni di uscita non sono quelle che mi aspettavo?",
        answer:
          "La dimensione 1x deriva da larghezza e altezza impostate nel file SVG. Se l’SVG ha solo un viewBox senza width o height, il browser può usare una dimensione predefinita; aggiungi gli attributi width e height per controllarla.",
      },
      {
        question: "Perché nel mio PNG mancano caratteri o immagini?",
        answer:
          "Quando un SVG viene disegnato come immagine, i browser non caricano i file esterni a cui rimanda, come web font o immagini collegate. Converti il testo in tracciati e incorpora le immagini nell’SVG prima della conversione.",
      },
      {
        question: "Il PNG manterrà lo sfondo trasparente?",
        answer: "Sì. Ogni area dell’SVG senza riempimento o sfondo resta trasparente.",
      },
      {
        question: "Posso convertire SVG in JPG?",
        answer:
          "Questo strumento salva solo in PNG. Per ottenere un JPG, converti prima in PNG e poi apri il PNG in Da PNG a JPG, dove puoi anche scegliere un colore di sfondo.",
      },
    ],
  },
  "photo-filters": {
    name: "Filtri ed effetti foto",
    shortName: "Filtri",
    tagline: "Applica stili già pronti come Vintage, Noir o Cinematografico, poi regola luminosità, contrasto, colore e vignettatura.",
    intro:
      "Filtri ed effetti foto cambia l’aspetto e l’atmosfera di una foto. Parti da uno degli otto preset, come Cinematografico, Vintage anni 70, Noir intenso o Tramonto caldo, poi regola con i cursori luminosità, contrasto, saturazione, seppia, bianco e nero, tonalità, nitidezza, vignettatura ed effetto flou. Una vista divisa ti permette di confrontare la foto modificata con l’originale prima di scaricarla in PNG, JPG o WebP.",
    seoTitle: "Filtri per foto online – Effetti e preset gratis",
    seoDescription:
      "Applica filtri alle foto online gratis. Prova Vintage, Noir, Cinematografico e altri, regola luminosità, contrasto e vignettatura e confronta prima e dopo.",
    keywords: [
      "filtri foto online",
      "aggiungere filtro a foto",
      "foto in bianco e nero online",
      "filtro vintage foto",
      "filtro seppia online",
      "regolare luminosità e contrasto online",
      "effetto vignettatura",
    ],
    howToSteps: [
      {
        title: "Carica una foto",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG o WebP.",
      },
      {
        title: "Scegli un preset",
        description:
          "Prova Cinematografico, Vintage anni 70, Cyberpunk, Noir intenso, Tramonto caldo, Sbiadito freddo, HDR drammatico o Negativo. Originale rimuove tutti gli effetti.",
      },
      {
        title: "Perfeziona con i cursori",
        description:
          "Regola luminosità, contrasto, saturazione, seppia, bianco e nero, tonalità, nitidezza, vignettatura ed effetto flou finché la foto non ti convince.",
      },
      {
        title: "Confronta e scarica",
        description: "Usa Confronta con l’originale per vedere il prima e il dopo, poi scarica in PNG, WebP o JPG, oppure copia l’immagine.",
      },
    ],
    features: [
      {
        title: "Otto preset con un clic",
        description: "Stili già pronti, dai toni vintage caldi al bianco e nero ad alto contrasto.",
      },
      {
        title: "Nove cursori di regolazione",
        description: "Luminosità, contrasto e saturazione fino al 200%, più seppia, bianco e nero, tonalità, nitidezza, vignettatura e sfocatura.",
      },
      {
        title: "Vista prima e dopo",
        description: "Trascina la linea di divisione sulla foto per confrontare l’originale e la versione modificata, su computer o touch screen.",
      },
      {
        title: "Esportazione a piena risoluzione",
        description: "Gli effetti vengono applicati alla foto a dimensione intera quando la scarichi.",
      },
    ],
    faqs: [
      {
        question: "Come rendo una foto in bianco e nero?",
        answer:
          "Clicca il preset Noir intenso per un effetto ad alto contrasto, oppure porta il cursore Bianco e nero al 100% e regola tu luminosità e contrasto.",
      },
      {
        question: "Posso annullare un filtro?",
        answer:
          "Sì. Clicca Ripristina per tornare all’aspetto originale in qualsiasi momento. Il file originale non viene mai modificato.",
      },
      {
        question: "Applicare un filtro riduce la risoluzione?",
        answer:
          "No. Il download ha la stessa larghezza e altezza della foto originale.",
      },
      {
        question: "Quale formato di download devo scegliere?",
        answer:
          "JPG e WebP vengono salvati con qualità al 95% e per le foto sono molto più leggeri. PNG mantiene ogni pixel ma crea file pesanti per le foto.",
      },
      {
        question: "Posso usare i filtri sulle foto HEIC di iPhone?",
        answer:
          "Questo strumento non apre i file HEIC. Converti prima la foto in JPG con il Convertitore di immagini universale, poi apri qui il JPG.",
      },
    ],
  },
  "meme-generator": {
    name: "Generatore di meme",
    shortName: "Crea meme",
    tagline: "Crea un meme dalla tua foto o da un modello di partenza, con scritte grandi in alto, al centro e in basso.",
    intro:
      "Generatore di meme aggiunge a un’immagine le classiche scritte dei meme. Carica una tua immagine o parti da uno degli otto semplici modelli integrati, poi scrivi il testo in alto, al centro e in basso; le righe lunghe vanno a capo in automatico per stare nella larghezza. Scegli il carattere (Impact per impostazione predefinita), la dimensione, i colori del testo e del contorno, l’allineamento e il maiuscolo, e scarica il meme in PNG, JPG o WebP senza alcuna filigrana.",
    seoTitle: "Creare meme online – Aggiungi scritte a ogni immagine",
    seoDescription:
      "Crea meme online gratis. Aggiungi testo in alto, al centro e in basso a una foto o a un modello, scegli carattere e contorno e scarica senza filigrana.",
    keywords: [
      "creare meme",
      "generatore di meme",
      "meme generator",
      "aggiungere testo meme a immagine",
      "meme con font impact",
      "creare meme senza filigrana",
      "meme personalizzato da foto",
    ],
    howToSteps: [
      {
        title: "Scegli un’immagine",
        description: "Carica o incolla un’immagine JPG, PNG o WebP, oppure clicca uno dei modelli rapidi.",
      },
      {
        title: "Scrivi le didascalie",
        description: "Scrivi il testo in alto e in basso, e aggiungi un testo al centro se ti serve.",
      },
      {
        title: "Personalizza il testo",
        description: "Scegli carattere, dimensione, colore del testo, colore e spessore del contorno, allineamento e se usare il maiuscolo.",
      },
      {
        title: "Scarica o copia",
        description: "Scarica il meme in PNG, WebP o JPG, oppure copialo negli appunti per incollarlo in una chat.",
      },
    ],
    features: [
      {
        title: "Tre aree di testo",
        description: "Testo in alto, al centro e in basso, con a capo automatico per i testi lunghi.",
      },
      {
        title: "Stile meme classico",
        description: "Testo Impact bianco con contorno nero per impostazione predefinita, più i caratteri Arial, Comic Sans, Montserrat e Times.",
      },
      {
        title: "Il testo si adatta all’immagine",
        description: "La dimensione del carattere è relativa all’altezza dell’immagine, quindi le scritte appaiono uguali su immagini piccole e grandi.",
      },
      {
        title: "Nessuna filigrana",
        description: "Il meme viene salvato esattamente come lo vedi, senza alcun logo aggiunto.",
      },
    ],
    faqs: [
      {
        question: "Il meme ha una filigrana?",
        answer: "No. L’immagine scaricata contiene solo la tua immagine e le tue scritte.",
      },
      {
        question: "Quale carattere usano di solito i meme?",
        answer:
          "Lo stile classico dei meme è Impact bianco con contorno nero, che qui è l’impostazione predefinita. Se un carattere non è installato sul tuo dispositivo, il browser ne usa uno simile.",
      },
      {
        question: "Posso usare una mia immagine?",
        answer: "Sì. Carica un’immagine JPG, PNG o WebP, oppure incollala dagli appunti con Ctrl+V.",
      },
      {
        question: "La scritta copre troppo l’immagine. Cosa posso fare?",
        answer:
          "Riduci la dimensione del carattere, o sposta parte del testo nella scritta al centro o in basso. Le scritte lunghe vanno a capo su più righe in automatico.",
      },
      {
        question: "Posso creare meme dal telefono?",
        answer:
          "Sì. Il generatore di meme funziona nei browser mobili: scrivi le didascalie e usa il pulsante di download per salvare l’immagine.",
      },
    ],
  },
  "split-image": {
    name: "Dividi immagine in griglia",
    shortName: "Dividi in griglia",
    tagline: "Taglia un’immagine in una griglia di riquadri, come una griglia Instagram 3×3 o un carosello panoramico, e scarica uno ZIP.",
    intro:
      "Dividi immagine in griglia suddivide un’immagine in righe e colonne di file separati. Usa il preset Instagram 3×3 per una griglia del profilo, Panorama 3×1 o Carosello 2×1 per post da scorrere, 2×2 per quattro parti uguali, o imposta una griglia personalizzata fino a 12 righe e 12 colonne. Tutti i riquadri si scaricano insieme come file PNG numerati in uno ZIP, oppure puoi cliccare un singolo riquadro per salvare solo quello.",
    seoTitle: "Dividere immagine in griglia – Instagram 3×3",
    seoDescription:
      "Dividi un’immagine in griglia online gratis. Crea una griglia Instagram 3x3, un carosello panoramico o una griglia fino a 12x12 e scarica tutto in uno ZIP.",
    keywords: [
      "dividere immagine in griglia",
      "dividere immagine in parti",
      "griglia instagram",
      "dividere panorama per carosello instagram",
      "tagliare immagine in pezzi",
      "foto griglia 3x3",
      "dividere immagine in riquadri",
    ],
    howToSteps: [
      {
        title: "Carica l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG o WebP.",
      },
      {
        title: "Scegli la griglia",
        description:
          "Scegli Griglia Instagram 3×3, Panorama 3×1, Carosello 2×1 o Quattro quadrati (2×2), oppure inserisci il numero di righe e colonne che vuoi.",
      },
      {
        title: "Controlla l’anteprima",
        description: "L’anteprima mostra dove verrà tagliata l’immagine e il numero di ogni riquadro.",
      },
      {
        title: "Scarica i riquadri",
        description: "Clicca Scarica tutti i riquadri (ZIP), oppure clicca un singolo riquadro nell’anteprima per scaricare solo quello.",
      },
    ],
    features: [
      {
        title: "Preset per i social",
        description: "Un clic per una griglia del profilo 3×3, un carosello panoramico a 3 o 2 slide, o una divisione 2×2.",
      },
      {
        title: "Griglie personalizzate",
        description: "Qualsiasi combinazione da 1 a 12 righe e da 1 a 12 colonne, fino a 144 riquadri.",
      },
      {
        title: "Riquadri numerati",
        description: "I file si chiamano tile_01, tile_02 e così via, da sinistra a destra e dall’alto in basso.",
      },
      {
        title: "Nessuna perdita di qualità",
        description: "I riquadri vengono tagliati dall’immagine a piena risoluzione e salvati come file PNG senza perdita.",
      },
    ],
    faqs: [
      {
        question: "In che ordine devo pubblicare i riquadri su Instagram?",
        answer:
          "I riquadri sono numerati da sinistra a destra e dall’alto in basso, a partire da tile_01. Instagram mostra per primo il post più recente, quindi carica per primo l’ultimo riquadro (tile_09 per una griglia 3×3) e finisci con tile_01.",
      },
      {
        question: "Quale immagine devo usare per una griglia 3×3?",
        answer:
          "Per riquadri quadrati, parti da un’immagine quadrata; se serve, ritagliala prima in 1:1. Instagram può mostrare le miniature del profilo con un ritaglio diverso, quindi controlla il risultato dopo la pubblicazione.",
      },
      {
        question: "Come divido un panorama per un post a carosello?",
        answer:
          "Scegli Panorama 3×1 per tre slide o Carosello 2×1 per due. Per slide quadrate, l’immagine deve essere larga tre volte (o due volte) la sua altezza.",
      },
      {
        question: "I riquadri hanno tutti esattamente la stessa dimensione?",
        answer:
          "Se larghezza o altezza non si possono dividere in parti uguali, l’ultima colonna o riga riceve i pixel in più, quindi può essere più grande di uno o due pixel.",
      },
      {
        question: "Dividere l’immagine ne riduce la qualità?",
        answer: "No. Ogni riquadro viene tagliato dai pixel originali e salvato in PNG, che è senza perdita.",
      },
    ],
  },
  "censor-image": {
    name: "Sfoca e pixela immagine",
    shortName: "Censura foto",
    tagline: "Nascondi volti, targhe, nomi o numeri in una foto con una barra nera, l’effetto pixel o la sfocatura.",
    intro:
      "Sfoca e pixela immagine nasconde i dettagli privati di un’immagine prima di condividerla. Disegna rettangoli od ovali su volti, targhe, indirizzi o numeri di conto, e scegli per ogni area una barra nera piena, l’effetto pixel o la sfocatura. Le aree sfocate vengono poste sopra uno strato a pixel grossi, così i dettagli originali non traspaiono ai bordi.",
    seoTitle: "Sfocare o pixelare foto – Censura volti e testo",
    seoDescription:
      "Censura immagini online gratis. Sfoca, pixela o copri di nero volti, targhe e testi privati con rettangoli od ovali. Nessun file viene caricato.",
    keywords: [
      "sfocare immagine online",
      "pixelare immagine",
      "censurare foto",
      "sfocare volto in foto",
      "oscurare parte di immagine",
      "coprire testo in screenshot",
      "sfocare targa",
    ],
    howToSteps: [
      {
        title: "Carica l’immagine",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG o WebP, come una foto o uno screenshot.",
      },
      {
        title: "Scegli forma e metodo",
        description:
          "Seleziona Rettangolo od Ovale, poi Pixel, Sfocatura o Barra nera. Per pixel e sfocatura, imposta l’intensità da 4 a 45.",
      },
      {
        title: "Disegna sui dettagli privati",
        description: "Trascina su ogni area da nascondere. Usa Annulla per togliere l’ultima area o Rimuovi tutti i riquadri per ricominciare.",
      },
      {
        title: "Scarica l’immagine censurata",
        description: "Scaricala in PNG, WebP o JPG, oppure copiala negli appunti.",
      },
    ],
    features: [
      {
        title: "Tre metodi per nascondere",
        description: "Riquadri neri pieni, effetto mosaico a pixel o sfocatura sopra una base a pixel.",
      },
      {
        title: "Rettangoli e ovali",
        description: "Usa gli ovali per i volti e i rettangoli per testi, targhe e numeri.",
      },
      {
        title: "Metodi diversi nella stessa immagine",
        description: "Ogni area mantiene il metodo e l’intensità con cui è stata disegnata, così puoi coprire di nero un nome e sfocare un volto.",
      },
      {
        title: "Efficace anche sulle foto grandi",
        description: "L’intensità si adatta alla risoluzione dell’immagine, quindi anche le foto ad alta risoluzione vengono nascoste altrettanto bene.",
      },
      {
        title: "Annulla e cancella",
        description: "Rimuovi l’ultima area o tutte le aree senza ricaricare la foto.",
      },
    ],
    faqs: [
      {
        question: "Qual è il metodo più sicuro per nascondere un testo?",
        answer:
          "La barra nera sostituisce completamente i pixel ed è la scelta più sicura per password, numeri di conto e documenti. Anche un effetto pixel o una sfocatura forti funzionano, ma un testo piccolo con impostazioni deboli a volte si può indovinare.",
      },
      {
        question: "Qualcuno può annullare la sfocatura nel file scaricato?",
        answer:
          "Nell’immagine scaricata i pixel di ogni area vengono sostituiti, non nascosti su un livello separato. La foto originale sul tuo dispositivo non viene modificata, quindi condividi solo la copia censurata.",
      },
      {
        question: "Vengono rimossi anche i dati EXIF?",
        answer:
          "Sì. Il download viene creato dai pixel della tela, quindi i dettagli della fotocamera e la posizione GPS dell’originale non sono inclusi.",
      },
      {
        question: "Posso usare effetti diversi nella stessa immagine?",
        answer:
          "Sì. Cambia metodo o intensità prima di disegnare l’area successiva. Le aree già disegnate mantengono le loro impostazioni.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Trascina il dito sull’area da nascondere per disegnare un riquadro o un ovale.",
      },
    ],
  },
  "remove-background": {
    name: "Rimuovi sfondo",
    shortName: "Rimuovi sfondo",
    tagline: "Rimuovi lo sfondo da una foto con un modello di IA che funziona sul tuo dispositivo, e salva un PNG trasparente.",
    intro:
      "Rimuovi sfondo ritaglia il soggetto principale di una foto ed elimina tutto ciò che c’è dietro. Usa un modello di IA che funziona nel browser, quindi le tue immagini non lasciano mai il dispositivo. La modalità Persone usa un modello piccolo e veloce che funziona bene sui telefoni ed è ideale per le persone, mentre la modalità Oggetti (HQ) usa un modello più grande per prodotti, animali e altri oggetti. Salva il risultato come PNG trasparente, oppure mettilo su un colore pieno e salvalo in PNG o JPG.",
    seoTitle: "Rimuovere sfondo immagine – Gratis, sul dispositivo",
    seoDescription:
      "Rimuovi gratis lo sfondo dalle immagini con un’IA che funziona nel browser. Ottieni un PNG trasparente o uno sfondo a tinta unita. Le foto restano sul dispositivo.",
    keywords: [
      "rimuovere sfondo immagine",
      "rimuovere sfondo foto gratis",
      "togliere sfondo foto",
      "rendere sfondo trasparente",
      "sfondo trasparente png",
      "scontornare immagine",
      "rimuovere sfondo online",
    ],
    howToSteps: [
      {
        title: "Carica una foto",
        description: "Trascina, scegli o incolla un’immagine JPG, PNG o WebP.",
      },
      {
        title: "Scegli una modalità",
        description:
          "Persone è selezionata per impostazione predefinita ed è ideale per le persone. Scegli Oggetti (HQ) per prodotti, animali e altri soggetti, meglio se in un browser da computer.",
      },
      {
        title: "Attendi il risultato",
        description:
          "La prima volta il modello viene scaricato nel browser; poi viene caricato dalla cache del browser. Lo sfondo viene quindi rimosso sul tuo dispositivo.",
      },
      {
        title: "Scegli lo sfondo e scarica",
        description: "Lascialo trasparente e salva in PNG, oppure scegli un colore pieno e salva in PNG o JPG.",
      },
    ],
    features: [
      {
        title: "IA che funziona sul tuo dispositivo",
        description: "Il modello funziona nel browser, quindi le tue foto non vengono mai caricate su un server.",
      },
      {
        title: "Due modelli",
        description: "Un modello Persone piccolo e veloce, e un modello Oggetti (HQ) più grande per prodotti, animali e oggetti.",
      },
      {
        title: "Scaricato una sola volta",
        description: "Il browser conserva il modello dopo il primo uso, quindi le immagini successive partono molto più in fretta.",
      },
      {
        title: "Sfondo trasparente o colorato",
        description: "Salva un PNG trasparente, oppure metti il soggetto su un colore pieno a tua scelta.",
      },
    ],
    faqs: [
      {
        question: "Le mie foto vengono caricate su un server?",
        answer:
          "No. Nel browser viene scaricato solo il modello di IA. Le foto vengono elaborate sul tuo dispositivo e non vengono inviate da nessuna parte.",
      },
      {
        question: "Perché il primo utilizzo richiede più tempo?",
        answer:
          "Prima bisogna scaricare il modello: circa da 7 a 13 MB per la modalità Persone e circa 115 MB per la modalità Oggetti (HQ). Il browser lo conserva, quindi gli utilizzi successivi partono molto più in fretta.",
      },
      {
        question: "Quale modalità devo usare?",
        answer:
          "Usa Persone per le foto di persone: è veloce e funziona sui telefoni. Usa Oggetti (HQ) per prodotti, animali e altri soggetti, soprattutto quando i bordi sono importanti.",
      },
      {
        question: "Funziona su iPhone e telefoni Android?",
        answer:
          "Sì, la modalità Persone è pensata per funzionare sui telefoni. La modalità Oggetti (HQ) è molto più grande e funziona meglio in un browser da computer con supporto WebGPU; su un telefono può essere lenta o esaurire la memoria.",
      },
      {
        question: "Posso mettere un nuovo colore di sfondo dietro il soggetto?",
        answer:
          "Sì. Scegli un colore pieno, poi salva in PNG o JPG. Per uno sfondo trasparente, salva in PNG.",
      },
      {
        question: "Perché alcuni bordi non sono perfetti?",
        answer:
          "Capelli sottili, pelo, vetro e soggetti con colori simili allo sfondo sono difficili per qualsiasi modello. Prova la modalità Oggetti (HQ), o usa una foto con un contrasto netto tra soggetto e sfondo.",
      },
    ],
  },
};
