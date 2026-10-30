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
      "Rimuovi metadati immagine crea una copia pulita della tua foto senza le informazioni EXIF nascoste. Le foto di smartphone e fotocamere spesso registrano la posizione GPS dello scatto, il modello del dispositivo e la data e l’ora. Per JPG, PNG e WebP vengono tolte dal file solo queste informazioni: l’immagine non viene salvata di nuovo, quindi qualità e colori restano esattamente uguali. La nuova dimensione del file viene mostrata prima del download.",
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
        title: "Mantieni il formato",
        description:
          "Mantenendo il formato originale vengono tolti solo i metadati, senza alcuna perdita di qualità. Se cambi formato, l’immagine viene salvata di nuovo: per JPG e WebP usa una qualità dal 90% al 100%, o scegli PNG.",
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
        title: "Nessuna perdita di qualità",
        description: "JPG, PNG e WebP mantengono i pixel esatti e il profilo colore; vengono tolti solo i dati nascosti.",
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
          "I dati EXIF (fotocamera, impostazioni, data e GPS), i campi IPTC e XMP come autore o copyright, i commenti e il testo dei PNG. Il profilo colore viene mantenuto perché i colori non cambino, e un JPG conserva l’orientamento per non apparire di lato.",
      },
      {
        question: "Rimuovere i metadati cambia la qualità dell’immagine?",
        answer:
          "No, se mantieni il formato: i file JPG, PNG e WebP non vengono salvati di nuovo, quindi ogni pixel resta uguale. Se converti in un altro formato, o parti da una foto HEIC di iPhone, l’immagine viene salvata di nuovo, quindi scegli una qualità alta.",
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
  "svg-to-jpg": {
    name: "Da SVG a JPG",
    shortName: "SVG → JPG",
    tagline: "Trasforma le grafiche SVG in immagini JPG a qualsiasi scala, con il colore di sfondo che scegli. La conversione avviene sul tuo dispositivo.",
    intro: "Le grafiche SVG restano nitide a qualsiasi dimensione, ma molte app, social network e moduli di caricamento accettano solo immagini normali. Da SVG a JPG ridisegna l’SVG alla scala che scegli, da 1x a 8x, e lo salva in JPG. Il JPG non supporta la trasparenza, quindi le aree trasparenti vengono riempite di bianco o di un colore a tua scelta. La conversione avviene nel tuo browser, quindi il file non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire SVG in JPG – Qualsiasi dimensione, gratis",
    seoDescription: "Converti le grafiche SVG in JPG nel browser, con scala da 1x a 8x e il colore di sfondo che preferisci. Gratis e niente viene caricato.",
    keywords: [
      "svg in jpg",
      "convertire svg in jpg",
      "da svg a jpg",
      "svg in jpeg",
      "svg in immagine",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’SVG",
        description: "Trascina, scegli o incolla un file .svg.",
      },
      {
        title: "Scegli scala e sfondo",
        description: "Scegli 1x, 2x, 4x o 8x, e il colore che riempie le aree trasparenti.",
      },
      {
        title: "Scarica il JPG",
        description: "Salva il JPG e usalo ovunque.",
      },
    ],
    features: [
      {
        title: "Nitida a ogni dimensione",
        description: "L’SVG viene ridisegnato alla scala scelta, quindi i bordi restano netti.",
      },
      {
        title: "Colore di sfondo a scelta",
        description: "Le aree trasparenti vengono riempite di bianco o di qualsiasi altro colore.",
      },
      {
        title: "Si apre ovunque",
        description: "Il JPG funziona in ogni app, social network e modulo di caricamento.",
      },
      {
        title: "Conversione privata",
        description: "Il file viene convertito sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Da SVG a JPG o da SVG a PNG?",
        answer: "Scegli PNG per loghi e icone, per mantenere la trasparenza e colori pieni perfetti. Scegli JPG quando un sito o un modulo chiede un JPG, o per illustrazioni con sfumature.",
      },
      {
        question: "Quale scala devo usare?",
        answer: "2x va bene per la maggior parte degli schermi. Usa 4x o 8x per la stampa o per display grandi.",
      },
      {
        question: "Perché il mio SVG appare diverso?",
        answer: "Gli SVG che caricano caratteri o immagini dal web potrebbero non disegnare quelle parti. Converti prima il testo in tracciati nel tuo programma di grafica.",
      },
      {
        question: "Il mio file viene caricato?",
        answer: "No. Il browser disegna l’SVG sul tuo dispositivo.",
      },
    ],
  },
  "svg-to-webp": {
    name: "Da SVG a WebP",
    shortName: "SVG → WebP",
    tagline: "Trasforma le grafiche SVG in immagini WebP leggere a qualsiasi scala, trasparenza inclusa. La conversione avviene sul tuo dispositivo.",
    intro: "A volte un sito, un’app o un editor di email ha bisogno di un’immagine normale invece di un SVG. Da SVG a WebP ridisegna l’SVG alla scala che scegli, da 1x a 8x, e lo salva in WebP, un formato leggero che tutti i browser attuali mostrano e che mantiene la trasparenza. La conversione avviene nel tuo browser, quindi il file non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire SVG in WebP – File leggeri, trasparenza",
    seoDescription: "Converti le grafiche SVG in WebP nel browser, con scala da 1x a 8x e trasparenza mantenuta. Gratis e niente viene caricato.",
    keywords: [
      "svg in webp",
      "convertire svg in webp",
      "da svg a webp",
      "svg in immagine",
      "webp trasparente",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’SVG",
        description: "Trascina, scegli o incolla un file .svg.",
      },
      {
        title: "Scegli scala e qualità",
        description: "Scegli 1x, 2x, 4x o 8x, e la qualità del WebP.",
      },
      {
        title: "Scarica il WebP",
        description: "Salva il WebP e usalo sul tuo sito o nella tua app.",
      },
    ],
    features: [
      {
        title: "Nitida a ogni dimensione",
        description: "L’SVG viene ridisegnato alla scala scelta, quindi i bordi restano netti.",
      },
      {
        title: "Trasparenza mantenuta",
        description: "Le aree trasparenti restano trasparenti nel WebP.",
      },
      {
        title: "File leggeri",
        description: "A parità di immagine, un WebP pesa di solito molto meno di un PNG.",
      },
      {
        title: "Conversione privata",
        description: "Il file viene convertito sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Perché non usare direttamente l’SVG?",
        answer: "Usa l’SVG dove è supportato. Usa WebP dove sono ammesse solo immagini normali, come in alcune app, negli editor di email e nei caricamenti di immagini.",
      },
      {
        question: "Quale scala devo usare?",
        answer: "2x va bene per la maggior parte degli schermi. Usa 4x o 8x per display grandi.",
      },
      {
        question: "Perché il mio SVG appare diverso?",
        answer: "Gli SVG che caricano caratteri o immagini dal web potrebbero non disegnare quelle parti. Converti prima il testo in tracciati nel tuo programma di grafica.",
      },
      {
        question: "Il mio file viene caricato?",
        answer: "No. Il browser disegna l’SVG sul tuo dispositivo.",
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
    tagline: "Rimuovi lo sfondo da una foto con un’IA che funziona sul tuo dispositivo, e salva un PNG trasparente.",
    intro:
      "Rimuovi sfondo ritaglia il soggetto principale di una foto ed elimina tutto ciò che c’è dietro, usando un modello di IA che funziona nel browser, quindi le tue immagini non lasciano mai il dispositivo. Scegli Veloce, un modello più piccolo, rapido e ideale per le foto di persone, oppure Massima qualità, un modello più grande con risultati migliori su qualsiasi soggetto, compresi prodotti, animali e oggetti. Salva il risultato come PNG trasparente, oppure mettilo su un colore pieno.",
    seoTitle: "Rimuovere sfondo immagine – Gratis, sul dispositivo",
    seoDescription:
      "Rimuovere sfondo immagine gratis con un’IA nel browser. Scegli il modello veloce o la massima qualità e salva un PNG trasparente. Foto sempre sul dispositivo.",
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
        title: "Scegli un modello",
        description:
          "Veloce è selezionato per impostazione predefinita e funziona bene per le foto di persone. Scegli Massima qualità per prodotti, animali, oggetti o ogni volta che vuoi i bordi più puliti.",
      },
      {
        title: "Scarica il modello una volta",
        description:
          "La prima volta che usi un modello, il browser lo scarica: circa 16 MB per Veloce e circa 100 MB per Massima qualità, che chiede conferma prima di iniziare. Dopo resta salvato nel browser.",
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
        title: "Due modelli tra cui scegliere",
        description: "Veloce è rapido e ideale per le persone. Massima qualità è più grande e più lento, ma dà risultati migliori su qualsiasi soggetto.",
      },
      {
        title: "Si scarica una volta sola",
        description: "Ogni modello resta salvato nel browser dopo il primo utilizzo, e lo strumento mostra quali sono già stati scaricati.",
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
        question: "Qual è la differenza tra Veloce e Massima qualità?",
        answer:
          "Veloce usa un modello più piccolo (circa 16 MB) e impiega circa 5 secondi per foto; funziona bene per le persone, ma può tralasciare parti degli oggetti. Massima qualità usa un modello più grande (circa 100 MB) e impiega circa 15–30 secondi, con risultati migliori su prodotti, animali, oggetti e persone.",
      },
      {
        question: "Perché il primo utilizzo richiede più tempo?",
        answer:
          "Prima bisogna scaricare il modello. Massima qualità chiede conferma prima di scaricare il suo modello da 100 MB. Dopo il primo utilizzo il browser conserva il modello, quindi le foto successive partono molto più in fretta.",
      },
      {
        question: "Funziona su iPhone e telefoni Android?",
        answer:
          "Sì. Veloce è la scelta migliore sui telefoni. Anche Massima qualità funziona sui telefoni, ma lì il download più pesante e i tempi di elaborazione più lunghi si notano di più, soprattutto con i dati mobili.",
      },
      {
        question: "Posso mettere un nuovo colore di sfondo dietro il soggetto?",
        answer:
          "Sì. Scegli un colore pieno, poi salva in PNG o JPG. Per uno sfondo trasparente, salva in PNG.",
      },
      {
        question: "Perché alcuni bordi non sono perfetti?",
        answer:
          "Capelli sottili, pelo, vetro e soggetti con colori simili allo sfondo sono difficili per qualsiasi modello. Prova Massima qualità, oppure usa una foto con un contrasto netto tra soggetto e sfondo.",
      },
    ],
  },
  "compress-image-to-kb": {
    name: "Comprimi immagine in KB",
    shortName: "Comprimi in KB",
    tagline: "Rendi una foto più leggera di un peso esatto, come 20 KB, 50 KB o 100 KB, per i moduli online. Funziona sul tuo dispositivo.",
    intro:
      "Molti moduli di domanda e di caricamento accettano solo foto sotto un peso fisso, come 20 KB o 50 KB, e una normale foto scattata col telefono pesa molte volte di più. Comprimi immagine in KB rende il file più leggero del limite che scegli. Prova diversi livelli di qualità finché trova il migliore che rientra nel limite, e riduce le dimensioni della foto solo quando anche la qualità più bassa la lascerebbe troppo pesante. Puoi anche impostare dimensioni esatte, come una foto per passaporto da 35 × 45 mm, e la foto viene ritagliata dal centro per riempirle. Tutto avviene nel tuo browser, quindi le foto di te e dei tuoi documenti non vengono mai caricate.",
    seoTitle: "Comprimere immagine a 20 KB, 50 KB o 100 KB – Gratis",
    seoDescription:
      "Comprimere immagine a 20 KB, 50 KB, 100 KB o qualsiasi peso per i moduli online, con la migliore qualità possibile. Gratis, privato, nessun upload.",
    keywords: [
      "comprimere immagine a 20 kb",
      "comprimere immagine a 50 kb",
      "comprimere foto a 100 kb",
      "ridurre peso foto in kb",
      "ridurre kb foto",
      "comprimere jpg a 200 kb",
      "peso foto tessera in kb",
    ],
    howToSteps: [
      {
        title: "Aggiungi la foto",
        description: "Trascina, scegli o incolla una foto JPG, PNG, WebP o HEIC di iPhone.",
      },
      {
        title: "Scegli il limite di peso",
        description: "Seleziona da 10 KB a 1 MB, oppure scrivi il limite esatto richiesto dal modulo.",
      },
      {
        title: "Imposta le dimensioni se serve",
        description:
          "Mantieni le dimensioni originali, oppure scegli una foto passaporto, un quadrato di 2 × 2 pollici o larghezza e altezza personalizzate.",
      },
      {
        title: "Scarica",
        description: "Controlla che il risultato indichi che è sotto il limite, poi scarica il JPG o il WebP.",
      },
    ],
    features: [
      {
        title: "Sempre sotto il limite",
        description:
          "Lo strumento misura il file reale che crea, quindi il download pesa meno del limite scelto, non solo all’incirca quanto.",
      },
      {
        title: "La migliore qualità possibile",
        description: "Mantiene la qualità più alta che rientra nel limite e riduce le dimensioni solo quando è necessario.",
      },
      {
        title: "Passaporto e dimensioni personalizzate",
        description:
          "Preimpostazioni per foto per passaporto da 35 × 45 mm e foto da 2 × 2 pollici, oppure qualsiasi larghezza e altezza ti serva.",
      },
      {
        title: "Privacy fin dalla progettazione",
        description:
          "La foto viene elaborata nel tuo browser e non viene mai caricata, un aspetto importante per le foto di documenti e domande.",
      },
    ],
    faqs: [
      {
        question: "Il file sarà davvero sotto il limite?",
        answer:
          "Sì. Lo strumento controlla il peso del file reale che crea e mostra un messaggio di successo solo quando è sotto il tuo limite. Conta 1 KB come 1.024 byte, come fanno Windows e la maggior parte dei moduli, quindi il file è sotto il limite anche se un modulo conta 1 KB come 1.000 byte.",
      },
      {
        question: "Perché sono cambiate le dimensioni della foto?",
        answer:
          "Con Mantieni dimensioni selezionato, lo strumento abbassa prima la qualità. Se il file è ancora troppo pesante alla qualità più bassa, riduce larghezza e altezza un passo alla volta finché rientra nel limite. Il messaggio del risultato ti avvisa quando succede e mostra le nuove dimensioni.",
      },
      {
        question: "Perché non riesce a raggiungere il mio limite?",
        answer:
          "Quando imposti dimensioni esatte, lo strumento non può rimpicciolire la foto, quindi un limite molto basso con dimensioni grandi potrebbe essere irraggiungibile. Alza il limite, scegli dimensioni più piccole o seleziona Mantieni dimensioni.",
      },
      {
        question: "Quale peso e formato richiede il mio modulo?",
        answer:
          "Ogni modulo ha le sue regole. Leggi le istruzioni per il peso massimo del file, la larghezza e l’altezza in pixel o millimetri e il formato, poi imposta gli stessi valori qui. Il JPG è accettato quasi ovunque.",
      },
      {
        question: "La compressione riduce la qualità?",
        answer:
          "Quando una foto diventa molto più leggera si perde sempre un po’ di qualità, ma lo strumento ne conserva quanta il limite consente. Per i volti, un limite di 30 KB o più di solito dà un risultato pulito alle dimensioni di una foto per passaporto.",
      },
      {
        question: "La mia foto viene caricata?",
        answer:
          "No. La foto viene compressa dal browser sul tuo dispositivo. Niente viene inviato a un server, quindi puoi usarlo in sicurezza con foto di documenti d’identità e altri documenti.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "Da HEIC a JPG",
    shortName: "HEIC → JPG",
    tagline: "Converti le foto HEIC di iPhone in JPG, così si aprono su qualsiasi computer, telefono o sito. La conversione avviene sul tuo dispositivo.",
    intro:
      "Gli iPhone e molti telefoni recenti salvano le foto in HEIC, un formato che mantiene una buona qualità in file più leggeri. Molti computer Windows, app meno recenti e moduli di caricamento però non riescono ad aprirlo. Da HEIC a JPG converte la foto in un JPG standard che funziona quasi ovunque. La foto viene decodificata e convertita nel tuo browser, quindi non lascia mai il tuo dispositivo, e il JPG convertito non include i dati di posizione, fotocamera e data salvati nell’originale.",
    seoTitle: "Convertire HEIC in JPG – Gratis, senza upload",
    seoDescription:
      "Convertire HEIC in JPG nel browser: trasforma le foto di iPhone in JPG su Windows, Mac, Android e iPhone. Gratis, privato, niente viene caricato.",
    keywords: [
      "heic in jpg",
      "convertire heic in jpg",
      "foto iphone in jpg",
      "convertitore heic",
      "heic in jpeg",
      "aprire heic su windows",
    ],
    howToSteps: [
      {
        title: "Aggiungi la foto HEIC",
        description: "Trascina, scegli o incolla un file .heic o .heif dal tuo iPhone o computer.",
      },
      {
        title: "Attendi l’anteprima",
        description: "Il browser decodifica la foto. Le foto grandi possono richiedere qualche secondo.",
      },
      {
        title: "Scarica il JPG",
        description: "Salva la foto convertita. Si apre in qualsiasi visualizzatore di foto, browser o modulo di caricamento.",
      },
    ],
    features: [
      {
        title: "Funziona ovunque",
        description: "Il JPG si apre su Windows, Mac, Android, in ogni browser e su quasi tutti i siti.",
      },
      {
        title: "Conversione privata",
        description: "La foto viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
      {
        title: "Nessun dato di posizione",
        description: "Posizione GPS, dati della fotocamera e date dell’originale non vengono copiati nel JPG.",
      },
      {
        title: "Continua a modificare",
        description: "Passa subito la foto convertita agli strumenti per ritagliarla, ridimensionarla o comprimerla.",
      },
    ],
    faqs: [
      {
        question: "Che cos’è un file HEIC?",
        answer:
          "HEIC (High Efficiency Image Container) è il formato che gli iPhone usano per le foto per impostazione predefinita da iOS 11. Salva le foto in circa metà dello spazio di un JPG con qualità simile, ma molti computer e siti non riescono ancora ad aprirlo.",
      },
      {
        question: "Il JPG avrà lo stesso aspetto?",
        answer:
          "Sì, per una visione normale. Il JPG viene salvato ad alta qualità. I file JPG di solito pesano più dell’originale HEIC, perché la compressione JPG è meno efficiente.",
      },
      {
        question: "Posso convertire più foto HEIC insieme?",
        answer:
          "Questo strumento converte una foto alla volta. Se un singolo file HEIC contiene più immagini, come una raffica, viene convertita la prima immagine.",
      },
      {
        question: "Come faccio a far scattare all’iPhone foto in JPG?",
        answer:
          "Sull’iPhone apri Impostazioni, poi Fotocamera, poi Formati, e scegli Più compatibile. Le nuove foto vengono salvate in JPG. Le foto che hai già scattato restano in HEIC.",
      },
      {
        question: "La mia foto viene caricata?",
        answer: "No. Il decodificatore HEIC funziona nel tuo browser, quindi la foto resta sul tuo dispositivo.",
      },
    ],
  },
  "heic-to-png": {
    name: "Da HEIC a PNG",
    shortName: "HEIC → PNG",
    tagline: "Converti le foto HEIC di iPhone in PNG senza perdita, per modifiche e grafica. La conversione avviene sul tuo dispositivo.",
    intro:
      "HEIC è il formato che gli iPhone usano per le foto per impostazione predefinita, e molti programmi di grafica, app meno recenti e siti non riescono ad aprirlo. Da HEIC a PNG converte la foto in PNG, un formato senza perdita, così non perdi altri dettagli quando la modifichi e la salvi di nuovo. È quindi una buona scelta per le foto che ritoccherai, inserirai in un progetto grafico o scontornerai. La conversione avviene nel tuo browser, quindi la foto non lascia mai il tuo dispositivo. Per condividere o caricare, lo strumento Da HEIC a JPG produce file molto più leggeri.",
    seoTitle: "Convertire HEIC in PNG – Gratis, senza perdita",
    seoDescription:
      "Convertire HEIC in PNG senza perdita nel browser, per modificare le foto di iPhone e usarle nei progetti grafici. Gratis, privato, niente viene caricato.",
    keywords: [
      "heic in png",
      "convertire heic in png",
      "foto iphone in png",
      "convertitore heic png",
      "heif in png",
    ],
    howToSteps: [
      {
        title: "Aggiungi la foto HEIC",
        description: "Trascina, scegli o incolla un file .heic o .heif.",
      },
      {
        title: "Attendi l’anteprima",
        description: "Il browser decodifica la foto sul tuo dispositivo.",
      },
      {
        title: "Scarica il PNG",
        description: "Salva il PNG senza perdita e aprilo in qualsiasi editor o programma di grafica.",
      },
    ],
    features: [
      {
        title: "Output senza perdita",
        description:
          "Il PNG conserva ogni pixel della foto decodificata, quindi le modifiche ripetute non aggiungono artefatti di compressione.",
      },
      {
        title: "Si apre in qualsiasi editor",
        description: "Il PNG funziona in Photoshop, GIMP, Figma, Canva, Office e in ogni browser.",
      },
      {
        title: "Conversione privata",
        description: "La foto viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
      {
        title: "Nessun dato di posizione",
        description: "Posizione GPS e dati della fotocamera dell’originale non vengono copiati nel PNG.",
      },
    ],
    faqs: [
      {
        question: "PNG o JPG: quale scegliere?",
        answer:
          "Scegli PNG se modificherai ancora la foto o ti servono i pixel esatti. Scegli JPG per condividere, inviare per email e usare nei moduli di caricamento, perché i PNG di foto pesano diverse volte di più.",
      },
      {
        question: "Perché il PNG pesa molto più dell’HEIC?",
        answer:
          "HEIC usa una compressione con perdita molto efficiente. PNG è senza perdita, quindi memorizza molti più dati. Una foto di iPhone da 2 MB può diventare un PNG da 10 MB o più.",
      },
      {
        question: "Il PNG ha lo sfondo trasparente?",
        answer:
          "No. Le foto non hanno trasparenza, quindi il PNG è completamente opaco. Per rimuovere lo sfondo, apri il risultato in Rimuovi sfondo.",
      },
      {
        question: "La mia foto viene caricata?",
        answer: "No. Il decodificatore HEIC funziona nel tuo browser, quindi la foto resta sul tuo dispositivo.",
      },
    ],
  },
  "heic-to-webp": {
    name: "Da HEIC a WebP",
    shortName: "HEIC → WebP",
    tagline: "Converti le foto HEIC e HEIF dell’iPhone in WebP, un formato web leggero che si apre in ogni browser. La conversione avviene sul tuo dispositivo.",
    intro: "HEIC (chiamato anche HEIF) è il formato foto che iPhone e molti telefoni Android usano di default, ma la maggior parte dei siti web, dei CMS e delle app per Windows non riesce a mostrarlo. Da HEIC a WebP converte la foto in WebP, un formato moderno supportato da tutti i browser attuali che mantiene i file leggeri, spesso più di un JPG di pari qualità. È quindi una buona scelta per le foto da pubblicare su un sito, un blog o un negozio online. La conversione avviene nel tuo browser, quindi la foto non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire HEIC in WebP – Gratis, privato, anche HEIF",
    seoDescription: "Converti le foto HEIC e HEIF dell’iPhone in WebP nel browser. File leggeri per il web, qualità regolabile e nessun caricamento.",
    keywords: [
      "heic in webp",
      "heif in webp",
      "convertire heic in webp",
      "foto iphone in webp",
      "convertitore heic webp",
    ],
    howToSteps: [
      {
        title: "Aggiungi la foto HEIC",
        description: "Trascina, scegli o incolla un file .heic o .heif.",
      },
      {
        title: "Scegli la qualità",
        description: "L’85% va bene per la maggior parte delle foto. Abbassala per file più leggeri, alzala per più dettagli.",
      },
      {
        title: "Scarica il WebP",
        description: "Salva il file WebP e caricalo sul tuo sito o condividilo.",
      },
    ],
    features: [
      {
        title: "File leggeri",
        description: "A parità di qualità visiva, un WebP pesa di solito meno di un JPG, quindi le pagine si caricano più in fretta.",
      },
      {
        title: "Funziona in ogni browser",
        description: "Chrome, Safari, Firefox ed Edge mostrano i WebP, così come WordPress, Shopify e la maggior parte dei site builder.",
      },
      {
        title: "Conversione privata",
        description: "La foto viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
      {
        title: "Nessun dato sulla posizione",
        description: "La posizione GPS e i dati della fotocamera dell’originale non vengono copiati nel WebP.",
      },
    ],
    faqs: [
      {
        question: "HEIF e HEIC sono la stessa cosa?",
        answer: "Per le foto, sì. HEIF è il formato di file, e HEIC è il nome e l’estensione che Apple usa per le foto salvate in quel formato. Qui funzionano sia i file .heic sia i .heif.",
      },
      {
        question: "WebP o JPG: quale scegliere?",
        answer: "Scegli WebP per siti e negozi online, dove i file leggeri si caricano più in fretta. Scegli JPG se la foto va per email, in tipografia, o ad app e moduli di caricamento datati che non accettano WebP.",
      },
      {
        question: "Quale qualità devo usare?",
        answer: "All’85% la maggior parte delle foto appare identica all’originale. Usa il 90% o più per foto molto dettagliate, oppure dal 70% all’80% quando conta soprattutto il peso del file.",
      },
      {
        question: "La mia foto viene caricata?",
        answer: "No. Il decoder HEIC funziona nel tuo browser, quindi la foto resta sul tuo dispositivo.",
      },
    ],
  },
  "avif-to-jpg": {
    name: "Da AVIF a JPG",
    shortName: "AVIF → JPG",
    tagline: "Converti le immagini AVIF in JPG per aprirle in qualsiasi app, editor e modulo di caricamento. La conversione avviene sul tuo dispositivo.",
    intro: "AVIF è un formato immagine moderno che oggi molti siti usano perché i suoi file sono molto leggeri. Quando salvi una di queste immagini, però, i visualizzatori di foto meno recenti, Office, molti editor e tanti moduli di caricamento non riescono ad aprirla. Da AVIF a JPG converte l’immagine in JPG, il formato che funziona ovunque. Scegli la qualità, controlla il risultato nell’anteprima e scaricalo. La conversione avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire AVIF in JPG – Gratis, veloce, privato",
    seoDescription: "Converti le immagini AVIF in JPG nel browser. Compatibile con ogni app e modulo di caricamento, qualità regolabile e nessun caricamento.",
    keywords: [
      "avif in jpg",
      "convertire avif in jpg",
      "da avif a jpg",
      "convertitore avif",
      "aprire file avif",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine AVIF",
        description: "Trascina, scegli o incolla un file .avif.",
      },
      {
        title: "Scegli la qualità",
        description: "L’85% va bene per la maggior parte delle immagini. Alzala per più dettagli, abbassala per un file più leggero.",
      },
      {
        title: "Scarica il JPG",
        description: "Salva il JPG e aprilo, modificalo o caricalo ovunque.",
      },
    ],
    features: [
      {
        title: "Si apre ovunque",
        description: "Il JPG funziona in ogni visualizzatore di foto, editor, telefono, programma di posta e modulo di caricamento.",
      },
      {
        title: "Qualità regolabile",
        description: "Scegli l’equilibrio tra peso del file e dettaglio prima di scaricare.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
      {
        title: "Trasparenza gestita",
        description: "Il JPG non supporta la trasparenza, quindi le aree trasparenti vengono riempite con un colore a tua scelta.",
      },
    ],
    faqs: [
      {
        question: "Che cos’è un file AVIF?",
        answer: "AVIF è un formato immagine basato sul codec video AV1. A parità di qualità produce file molto più leggeri del JPG, ed è per questo che molti siti lo usano, ma i software meno recenti non riescono ad aprirlo.",
      },
      {
        question: "Il JPG peserà più dell’AVIF?",
        answer: "Di solito sì. AVIF comprime in modo molto efficiente, quindi la stessa immagine in JPG pesa spesso due o tre volte tanto. È il prezzo di un file che ogni programma può aprire.",
      },
      {
        question: "Perché il mio browser non apre l’AVIF?",
        answer: "I browser molto vecchi non sanno decodificare AVIF. Le versioni attuali di Chrome, Edge, Firefox e Safari (dalla versione 16 in poi) ci riescono tutte. Se il file continua a non aprirsi, potrebbe essere danneggiato.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. Il browser decodifica e converte l’immagine sul tuo dispositivo.",
      },
    ],
  },
  "avif-to-png": {
    name: "Da AVIF a PNG",
    shortName: "AVIF → PNG",
    tagline: "Converti le immagini AVIF in PNG senza perdita, mantenendo la trasparenza, per modifiche e grafica. La conversione avviene sul tuo dispositivo.",
    intro: "Le immagini AVIF sono leggere e nitide, ma molti editor, programmi di grafica e app meno recenti non riescono ad aprirle. Da AVIF a PNG converte l’immagine in PNG, un formato senza perdita che mantiene le aree trasparenti: è quindi una buona scelta per loghi, grafiche e tutto ciò che modificherai ancora. La conversione avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo. Per le foto da condividere, lo strumento Da AVIF a JPG produce file più leggeri.",
    seoTitle: "Convertire AVIF in PNG – Gratis, senza perdita",
    seoDescription: "Converti le immagini AVIF in PNG senza perdita nel browser, mantenendo la trasparenza. Gratis, privato, niente viene caricato.",
    keywords: [
      "avif in png",
      "convertire avif in png",
      "da avif a png",
      "avif in png trasparente",
      "aprire file avif",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine AVIF",
        description: "Trascina, scegli o incolla un file .avif.",
      },
      {
        title: "Controlla l’anteprima",
        description: "Il browser decodifica l’immagine sul tuo dispositivo.",
      },
      {
        title: "Scarica il PNG",
        description: "Salva il PNG senza perdita e aprilo in qualsiasi editor o programma di grafica.",
      },
    ],
    features: [
      {
        title: "Output senza perdita",
        description: "Il PNG conserva ogni pixel dell’immagine decodificata, quindi modificarla e salvarla di nuovo non aggiunge artefatti.",
      },
      {
        title: "Trasparenza mantenuta",
        description: "Le aree trasparenti dell’AVIF restano trasparenti nel PNG.",
      },
      {
        title: "Si apre in qualsiasi editor",
        description: "Il PNG funziona in Photoshop, GIMP, Figma, Canva, Office e in ogni browser.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Perché il PNG pesa molto più dell’AVIF?",
        answer: "AVIF usa una compressione con perdita molto efficiente, mentre PNG è senza perdita e memorizza molti più dati. Un PNG può facilmente pesare dieci volte l’AVIF.",
      },
      {
        question: "Il PNG mantiene la trasparenza?",
        answer: "Sì. Se l’AVIF ha aree trasparenti, restano trasparenti nel PNG.",
      },
      {
        question: "PNG o JPG: quale scegliere?",
        answer: "Scegli PNG per grafiche, trasparenza o ulteriori modifiche. Scegli JPG per le foto da condividere o caricare, perché i file sono molto più leggeri.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. La conversione avviene nel tuo browser, quindi l’immagine resta sul tuo dispositivo.",
      },
    ],
  },
  "jpg-to-avif": {
    name: "Da JPG a AVIF",
    shortName: "JPG → AVIF",
    tagline: "Converti le foto JPG in AVIF, il moderno formato web con i file più leggeri. La conversione avviene sul tuo dispositivo.",
    intro: "A parità di qualità visiva, AVIF produce file molto più leggeri del JPG, spesso la metà, così le pagine si caricano più in fretta e consumano meno dati. Tutti i browser attuali lo mostrano. Da JPG a AVIF converte la tua foto in AVIF con la qualità che scegli, ed è quindi utile per siti, negozi online e blog dove ogni kilobyte conta. La codifica avviene nel tuo browser, quindi la foto non lascia mai il tuo dispositivo. Con le foto grandi può richiedere qualche secondo.",
    seoTitle: "Convertire JPG in AVIF – Immagini più leggere, gratis",
    seoDescription: "Converti le foto JPG in AVIF nel browser per immagini web molto più leggere. Qualità regolabile, gratis e niente viene caricato.",
    keywords: [
      "jpg in avif",
      "convertire jpg in avif",
      "da jpg a avif",
      "convertitore avif",
      "immagine in avif",
    ],
    howToSteps: [
      {
        title: "Aggiungi la foto JPG",
        description: "Trascina, scegli o incolla un file .jpg o .jpeg.",
      },
      {
        title: "Scegli la qualità",
        description: "Parti dall’85%. AVIF resta nitido con impostazioni più basse rispetto al JPG, quindi prova valori più bassi per file più leggeri.",
      },
      {
        title: "Scarica l’AVIF",
        description: "Salva il file AVIF e caricalo sul tuo sito.",
      },
    ],
    features: [
      {
        title: "File molto più leggeri",
        description: "Un AVIF pesa spesso circa la metà di un JPG dall’aspetto identico.",
      },
      {
        title: "Mostrato da tutti i browser attuali",
        description: "Chrome, Edge, Firefox e Safari 16 o successivi mostrano tutti i file AVIF.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
      {
        title: "Nessun dato di posizione",
        description: "Posizione GPS e dati della fotocamera del JPG non vengono copiati nell’AVIF.",
      },
    ],
    faqs: [
      {
        question: "AVIF o WebP: quale è meglio?",
        answer: "AVIF di solito produce file più leggeri a parità di qualità, mentre WebP si codifica più in fretta e funziona in alcune app meno recenti. Entrambi sono mostrati da tutti i browser attuali.",
      },
      {
        question: "Tutte le app possono aprire AVIF?",
        answer: "No. I browser sì, ma alcuni visualizzatori di foto, editor e moduli di caricamento meno recenti no. Per quelli conserva il JPG originale e usa AVIF sul web.",
      },
      {
        question: "Perché la conversione richiede qualche secondo?",
        answer: "La codifica AVIF fa molto lavoro per trovare il file più leggero. Avviene sul tuo dispositivo, quindi con le foto grandi richiede più tempo sui telefoni più lenti.",
      },
      {
        question: "La mia foto viene caricata?",
        answer: "No. L’encoder AVIF funziona nel tuo browser, quindi la foto resta sul tuo dispositivo.",
      },
    ],
  },
  "png-to-avif": {
    name: "Da PNG a AVIF",
    shortName: "PNG → AVIF",
    tagline: "Converti le immagini PNG in AVIF per file web molto più leggeri, trasparenza inclusa. La conversione avviene sul tuo dispositivo.",
    intro: "I file PNG sono spesso pesanti, soprattutto screenshot, foto e grafiche dettagliate. AVIF memorizza la stessa immagine in una frazione dello spazio e mantiene la trasparenza, quindi è adatto a loghi, immagini di prodotti e illustrazioni sul web. Da PNG a AVIF converte la tua immagine con la qualità che scegli, e ogni browser attuale può mostrare il risultato. La codifica avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire PNG in AVIF – File leggeri, trasparenza",
    seoDescription: "Converti le immagini PNG in AVIF nel browser. Immagini web molto più leggere con la trasparenza mantenuta, qualità regolabile, nessun caricamento.",
    keywords: [
      "png in avif",
      "convertire png in avif",
      "da png a avif",
      "avif trasparente",
      "immagine in avif",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine PNG",
        description: "Trascina, scegli o incolla un file .png.",
      },
      {
        title: "Scegli la qualità",
        description: "L’85% va bene per la maggior parte delle immagini. Usa un valore più alto per testo nitido e linee sottili.",
      },
      {
        title: "Scarica l’AVIF",
        description: "Salva il file AVIF e caricalo sul tuo sito.",
      },
    ],
    features: [
      {
        title: "Una frazione del peso",
        description: "Un AVIF è spesso molte volte più leggero del PNG da cui deriva.",
      },
      {
        title: "Trasparenza mantenuta",
        description: "Gli sfondi trasparenti restano trasparenti nell’AVIF.",
      },
      {
        title: "Mostrato da tutti i browser attuali",
        description: "Chrome, Edge, Firefox e Safari 16 o successivi mostrano tutti i file AVIF.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "AVIF è senza perdita come PNG?",
        answer: "Non qui. L’AVIF viene compresso con la qualità che scegli, quindi i dettagli più minuti possono cambiare. Dall’85% in su, la maggior parte delle immagini appare identica al PNG.",
      },
      {
        question: "AVIF mantiene la trasparenza?",
        answer: "Sì. Le aree trasparenti del PNG restano trasparenti nell’AVIF.",
      },
      {
        question: "Quando conviene tenere il PNG?",
        answer: "Tieni il PNG per le modifiche, per la stampa e per le app che non aprono AVIF. Usa l’AVIF sui siti web.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. L’encoder AVIF funziona nel tuo browser, quindi l’immagine resta sul tuo dispositivo.",
      },
    ],
  },
  "gif-to-png": {
    name: "Da GIF a PNG",
    shortName: "GIF → PNG",
    tagline: "Salva una GIF come immagine fissa PNG senza perdita, mantenendo la trasparenza. La conversione avviene sul tuo dispositivo.",
    intro: "GIF è un formato datato che contiene al massimo 256 colori, e molti editor e moduli di caricamento lo gestiscono male. Da GIF a PNG salva l’immagine in PNG, un formato senza perdita che si apre in ogni editor e programma di grafica, e mantiene le aree trasparenti. Se la GIF è animata, il PNG è un’immagine fissa del suo primo fotogramma. La conversione avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire GIF in PNG – Gratis, trasparenza mantenuta",
    seoDescription: "Converti una GIF in un’immagine fissa PNG senza perdita nel browser, mantenendo la trasparenza. Gratis, privato, niente viene caricato.",
    keywords: [
      "gif in png",
      "convertire gif in png",
      "da gif a png",
      "gif in png trasparente",
      "primo fotogramma gif in png",
    ],
    howToSteps: [
      {
        title: "Aggiungi la GIF",
        description: "Trascina, scegli o incolla un file .gif.",
      },
      {
        title: "Controlla l’anteprima",
        description: "Le GIF animate mostrano il primo fotogramma.",
      },
      {
        title: "Scarica il PNG",
        description: "Salva il PNG e aprilo in qualsiasi editor.",
      },
    ],
    features: [
      {
        title: "Senza perdita",
        description: "Ogni pixel del fotogramma della GIF viene mantenuto esattamente.",
      },
      {
        title: "Trasparenza mantenuta",
        description: "Le aree trasparenti della GIF restano trasparenti nel PNG.",
      },
      {
        title: "Si apre in qualsiasi editor",
        description: "Il PNG funziona in Photoshop, GIMP, Figma, Canva, Office e in ogni browser.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Cosa succede a una GIF animata?",
        answer: "Il PNG è un’immagine fissa del primo fotogramma. I file PNG creati qui non sono animati.",
      },
      {
        question: "I colori cambieranno?",
        answer: "No. Una GIF ha al massimo 256 colori, e il PNG li memorizza tutti esattamente.",
      },
      {
        question: "Posso ridimensionare l’immagine durante la conversione?",
        answer: "Sì. Imposta una nuova larghezza o altezza nei campi delle dimensioni prima di scaricare.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. La conversione avviene nel tuo browser, quindi l’immagine resta sul tuo dispositivo.",
      },
    ],
  },
  "gif-to-jpg": {
    name: "Da GIF a JPG",
    shortName: "GIF → JPG",
    tagline: "Salva una GIF come immagine fissa JPG che si apre ovunque. La conversione avviene sul tuo dispositivo.",
    intro: "Alcuni moduli di caricamento, servizi di stampa e app accettano solo JPG. Da GIF a JPG salva una GIF come immagine fissa JPG con la qualità che scegli. Poiché il JPG non supporta la trasparenza, le aree trasparenti vengono riempite con un colore di sfondo a tua scelta. Se la GIF è animata, il JPG mostra il suo primo fotogramma. La conversione avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire GIF in JPG – Gratis e privato",
    seoDescription: "Converti una GIF in un’immagine fissa JPG nel browser. Scegli qualità e colore di sfondo. Gratis e niente viene caricato.",
    keywords: [
      "gif in jpg",
      "convertire gif in jpg",
      "da gif a jpg",
      "gif in jpeg",
      "primo fotogramma gif in jpg",
    ],
    howToSteps: [
      {
        title: "Aggiungi la GIF",
        description: "Trascina, scegli o incolla un file .gif.",
      },
      {
        title: "Scegli qualità e sfondo",
        description: "Scegli la qualità del JPG e, se la GIF ha parti trasparenti, il colore con cui riempirle.",
      },
      {
        title: "Scarica il JPG",
        description: "Salva il JPG e usalo ovunque.",
      },
    ],
    features: [
      {
        title: "Si apre ovunque",
        description: "Il JPG funziona in ogni visualizzatore, editor, telefono, servizio di stampa e modulo di caricamento.",
      },
      {
        title: "Colore di sfondo a scelta",
        description: "Le aree trasparenti vengono riempite di bianco o del colore che preferisci.",
      },
      {
        title: "Qualità regolabile",
        description: "Imposta l’equilibrio tra peso del file e dettaglio.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Cosa succede a una GIF animata?",
        answer: "Il JPG è un’immagine fissa del primo fotogramma. Il JPG non può essere animato.",
      },
      {
        question: "Perché c’è un colore di sfondo?",
        answer: "Il JPG non supporta la trasparenza, quindi le aree trasparenti della GIF hanno bisogno di un colore pieno. Viene usato il bianco, a meno che tu non ne scelga un altro.",
      },
      {
        question: "Conviene scegliere PNG?",
        answer: "Scegli PNG per loghi, testo e grafiche a tinta unita, o per mantenere la trasparenza. Scegli JPG quando un modulo o un servizio lo richiede.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. La conversione avviene nel tuo browser, quindi l’immagine resta sul tuo dispositivo.",
      },
    ],
  },
  "bmp-to-jpg": {
    name: "Da BMP a JPG",
    shortName: "BMP → JPG",
    tagline: "Converti le pesanti immagini BMP di Windows in file JPG leggeri. La conversione avviene sul tuo dispositivo.",
    intro: "BMP è un vecchio formato di Windows che salva le immagini senza compressione, quindi i file sono molto pesanti e molti siti e app non li accettano. Da BMP a JPG converte l’immagine in JPG, di solito una frazione del peso originale, con la qualità che scegli. È la soluzione rapida per scansioni, screenshot di vecchi software e immagini esportate da programmi datati. La conversione avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire BMP in JPG – Gratis, file più leggeri",
    seoDescription: "Converti le immagini BMP in JPG nel browser. File molto più leggeri che si aprono ovunque, qualità regolabile e niente viene caricato.",
    keywords: [
      "bmp in jpg",
      "convertire bmp in jpg",
      "da bmp a jpg",
      "convertitore bmp",
      "bitmap in jpg",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine BMP",
        description: "Trascina, scegli o incolla un file .bmp.",
      },
      {
        title: "Scegli la qualità",
        description: "L’85% va bene per la maggior parte delle immagini. Alzala per gli screenshot con testo piccolo.",
      },
      {
        title: "Scarica il JPG",
        description: "Salva il JPG, molto più leggero.",
      },
    ],
    features: [
      {
        title: "File molto più leggeri",
        description: "Un JPG pesa spesso un decimo del BMP, o anche meno.",
      },
      {
        title: "Si apre ovunque",
        description: "Il JPG funziona in ogni visualizzatore, editor, telefono e modulo di caricamento.",
      },
      {
        title: "Qualità regolabile",
        description: "Imposta l’equilibrio tra peso del file e dettaglio.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Perché i file BMP sono così pesanti?",
        answer: "La maggior parte dei file BMP memorizza ogni pixel senza compressione. Il JPG comprime l’immagine, ed è per questo che il file convertito è molto più leggero.",
      },
      {
        question: "Il JPG è la scelta giusta per gli screenshot?",
        answer: "Per gli screenshot con testo piccolo o linee nette, lo strumento Da BMP a PNG li mantiene nitidi. Il JPG è ideale per foto e scansioni.",
      },
      {
        question: "Quali file BMP si possono aprire?",
        answer: "I tipi comuni di bitmap di Windows supportati dai browser. Alcune varianti insolite, come certi BMP compressi o molto vecchi, potrebbero non aprirsi.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. La conversione avviene nel tuo browser, quindi l’immagine resta sul tuo dispositivo.",
      },
    ],
  },
  "bmp-to-png": {
    name: "Da BMP a PNG",
    shortName: "BMP → PNG",
    tagline: "Converti le immagini BMP di Windows in PNG senza perdita, a una frazione del peso. La conversione avviene sul tuo dispositivo.",
    intro: "I file BMP non sono compressi e pesano molto, ma convertirli in JPG può sfocare testo e linee nette. Da BMP a PNG converte invece l’immagine in PNG, che la comprime senza perdere un solo pixel: screenshot, diagrammi e grafiche restano esattamente come erano, in un file molto più leggero. La conversione avviene nel tuo browser, quindi l’immagine non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire BMP in PNG – Gratis, senza perdita",
    seoDescription: "Converti le immagini BMP in PNG senza perdita nel browser. File più leggeri con ogni pixel intatto. Gratis, privato, niente viene caricato.",
    keywords: [
      "bmp in png",
      "convertire bmp in png",
      "da bmp a png",
      "bitmap in png",
      "convertitore bmp",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine BMP",
        description: "Trascina, scegli o incolla un file .bmp.",
      },
      {
        title: "Controlla l’anteprima",
        description: "Il browser apre l’immagine sul tuo dispositivo.",
      },
      {
        title: "Scarica il PNG",
        description: "Salva il PNG senza perdita.",
      },
    ],
    features: [
      {
        title: "Senza perdita",
        description: "Ogni pixel del BMP viene mantenuto esattamente.",
      },
      {
        title: "File più leggeri",
        description: "Il PNG comprime l’immagine senza perdita, spesso a una frazione del peso del BMP.",
      },
      {
        title: "Ideale per gli screenshot",
        description: "Testo, linee e colori pieni restano nitidi.",
      },
      {
        title: "Conversione privata",
        description: "L’immagine viene convertita sul tuo dispositivo e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Quanto è più leggero il PNG?",
        answer: "Dipende dall’immagine. Screenshot e grafiche spesso si riducono a un decimo del peso del BMP, mentre le foto dettagliate si riducono meno.",
      },
      {
        question: "Da BMP a PNG o da BMP a JPG?",
        answer: "Scegli PNG per screenshot, diagrammi e grafiche, o quando ti servono i pixel esatti. Scegli JPG per le foto, dove produce un file molto più leggero.",
      },
      {
        question: "Quali file BMP si possono aprire?",
        answer: "I tipi comuni di bitmap di Windows supportati dai browser. Alcune varianti insolite potrebbero non aprirsi.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer: "No. La conversione avviene nel tuo browser, quindi l’immagine resta sul tuo dispositivo.",
      },
    ],
  },
  "tiff-to-jpg": {
    name: "Da TIFF a JPG",
    shortName: "TIFF → JPG",
    tagline: "Converti scansioni e immagini TIFF in file JPG leggeri che si aprono ovunque. La conversione avviene sul tuo dispositivo.",
    intro: "TIFF è il formato prodotto da molti scanner, programmi fax, fotocamere e flussi di stampa. I file sono spesso pesanti, e Chrome, Edge, Firefox e la maggior parte dei siti non riescono a mostrarli. Da TIFF a JPG converte l’immagine in JPG, di solito una frazione del peso, con la qualità che scegli. Funzionano anche i TIFF compressi, compresi i file fax in bianco e nero. Se il file ha più pagine, viene convertita la prima; Da TIFF a PDF mantiene tutte le pagine. La conversione avviene nel tuo browser, quindi il file non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire TIFF in JPG – Gratis, veloce, privato",
    seoDescription: "Converti scansioni e immagini TIFF in JPG nel browser. File più leggeri che si aprono ovunque, qualità regolabile, niente viene caricato.",
    keywords: [
      "tiff in jpg",
      "tif in jpg",
      "convertire tiff in jpg",
      "tiff in jpeg",
      "convertitore tiff",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine TIFF",
        description: "Trascina, scegli o incolla un file .tif o .tiff.",
      },
      {
        title: "Scegli la qualità",
        description: "L’85% va bene per le foto. Usa un valore più alto per le scansioni con testo piccolo.",
      },
      {
        title: "Scarica il JPG",
        description: "Salva il JPG e condividilo o caricalo.",
      },
    ],
    features: [
      {
        title: "File molto più leggeri",
        description: "Un JPG pesa di solito una frazione del TIFF.",
      },
      {
        title: "Si apre ovunque",
        description: "Il JPG funziona in ogni visualizzatore, editor, telefono e modulo di caricamento.",
      },
      {
        title: "Quasi tutti i tipi di TIFF",
        description: "Si aprono TIFF non compressi, LZW, Deflate, PackBits, JPEG e fax in bianco e nero.",
      },
      {
        title: "Conversione privata",
        description: "Il file viene convertito sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Perché il mio browser non apre i file TIFF?",
        answer: "Tra i browser principali, solo Safari mostra i TIFF. Chrome, Edge e Firefox no, quindi questo strumento decodifica il file da sé, sul tuo dispositivo.",
      },
      {
        question: "Cosa succede con un TIFF di più pagine?",
        answer: "Viene convertita la prima pagina. Per mantenere tutte le pagine, usa Da TIFF a PDF, che crea una pagina PDF per ogni pagina del TIFF.",
      },
      {
        question: "Una scansione molto grande viene ridimensionata?",
        answer: "Le pagine oltre circa 16 megapixel, per esempio 4.000 × 4.000 pixel, vengono ridotte a quella dimensione perché ogni browser, iPhone compresi, possa elaborarle. Le scansioni e le foto normali non vengono ridimensionate.",
      },
      {
        question: "Il mio file viene caricato?",
        answer: "No. Il TIFF viene decodificato e convertito nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "tiff-to-png": {
    name: "Da TIFF a PNG",
    shortName: "TIFF → PNG",
    tagline: "Converti le immagini TIFF in PNG senza perdita, che ogni browser ed editor apre. La conversione avviene sul tuo dispositivo.",
    intro: "I file TIFF di scanner, fotocamere e software di grafica non si possono visualizzare in Chrome, Edge, Firefox né sulla maggior parte dei siti. Da TIFF a PNG converte l’immagine in PNG, che è senza perdita come il TIFF: ogni pixel viene mantenuto, e anche la trasparenza. Per questo è una buona scelta per documenti scansionati, disegni al tratto e grafiche che modificherai ancora. Se il file ha più pagine, viene convertita la prima; Da TIFF a PDF mantiene tutte le pagine. La conversione avviene nel tuo browser, quindi il file non lascia mai il tuo dispositivo.",
    seoTitle: "Convertire TIFF in PNG – Gratis, senza perdita",
    seoDescription: "Converti le immagini TIFF in PNG senza perdita nel browser, con ogni pixel e la trasparenza intatti. Gratis, privato, niente viene caricato.",
    keywords: [
      "tiff in png",
      "tif in png",
      "convertire tiff in png",
      "da tiff a png",
      "tiff in png senza perdita",
    ],
    howToSteps: [
      {
        title: "Aggiungi l’immagine TIFF",
        description: "Trascina, scegli o incolla un file .tif o .tiff.",
      },
      {
        title: "Controlla l’anteprima",
        description: "Il browser decodifica l’immagine sul tuo dispositivo.",
      },
      {
        title: "Scarica il PNG",
        description: "Salva il PNG senza perdita e aprilo in qualsiasi editor.",
      },
    ],
    features: [
      {
        title: "Senza perdita",
        description: "Ogni pixel della pagina TIFF viene mantenuto esattamente.",
      },
      {
        title: "Trasparenza mantenuta",
        description: "Le aree trasparenti del TIFF restano trasparenti nel PNG.",
      },
      {
        title: "Quasi tutti i tipi di TIFF",
        description: "Si aprono TIFF non compressi, LZW, Deflate, PackBits, JPEG e fax in bianco e nero.",
      },
      {
        title: "Conversione privata",
        description: "Il file viene convertito sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Il PNG sarà più leggero del TIFF?",
        answer: "Spesso sì, soprattutto con i TIFF non compressi e le scansioni in bianco e nero. Un TIFF già compresso può dare un PNG di peso simile.",
      },
      {
        question: "Cosa succede con un TIFF di più pagine?",
        answer: "Viene convertita la prima pagina. Per mantenere tutte le pagine, usa Da TIFF a PDF, che crea una pagina PDF per ogni pagina del TIFF.",
      },
      {
        question: "Una scansione molto grande viene ridimensionata?",
        answer: "Le pagine oltre circa 16 megapixel, per esempio 4.000 × 4.000 pixel, vengono ridotte a quella dimensione perché ogni browser, iPhone compresi, possa elaborarle. Le scansioni e le foto normali non vengono ridimensionate.",
      },
      {
        question: "Il mio file viene caricato?",
        answer: "No. Il TIFF viene decodificato e convertito nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "jpg-to-pdf": {
    name: "Da JPG a PDF",
    shortName: "JPG → PDF",
    tagline: "Trasforma una o più foto in un unico PDF, nell’ordine che scegli, con pagine A4 o Lettera (US). Niente viene caricato.",
    intro:
      "Da JPG a PDF mette le tue foto in un unico file PDF, una foto per pagina. È il modo rapido per inviare pagine scansionate, ricevute, appunti o foto di documenti come un solo documento. Aggiungi immagini JPG, PNG, WebP o HEIC di iPhone, mettile in ordine e scegli formato della pagina, orientamento e margini. Le foto JPG vengono inserite nel PDF senza essere ricompresse, quindi mantengono la qualità originale. Il PDF viene creato dal tuo browser, quindi i tuoi documenti non vengono mai caricati su un server.",
    seoTitle: "JPG in PDF – Unire foto in un PDF gratis",
    seoDescription:
      "JPG in PDF nel browser: converti foto JPG, PNG e di iPhone in un unico PDF. Riordina le pagine, scegli A4 o Lettera (US). Gratis, senza upload né filigrana.",
    keywords: [
      "jpg in pdf",
      "immagine in pdf",
      "convertire foto in pdf",
      "png in pdf",
      "unire immagini in pdf",
      "convertitore jpg pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi le immagini",
        description:
          "Trascina o scegli una o più immagini JPG, PNG, WebP o HEIC. Puoi aggiungerne altre in qualsiasi momento.",
      },
      {
        title: "Mettile in ordine",
        description: "Usa i pulsanti su e giù per disporre le pagine, e rimuovi quelle che non ti servono.",
      },
      {
        title: "Scegli il layout della pagina",
        description: "Scegli A4, Lettera (US) o una pagina adatta a ogni immagine, l’orientamento e il margine.",
      },
      {
        title: "Crea il PDF",
        description: "Scarica un unico PDF con ogni immagine su una pagina a sé.",
      },
    ],
    features: [
      {
        title: "Tante immagini, un PDF",
        description: "Unisci in un unico documento tutte le foto che il tuo dispositivo riesce a gestire.",
      },
      {
        title: "Qualità JPG originale",
        description: "Le foto JPG vengono incorporate così come sono, senza un’altra compressione.",
      },
      {
        title: "A4, Lettera (US) o adatta all’immagine",
        description:
          "Formati carta standard con orientamento automatico, oppure pagine delle dimensioni esatte di ogni immagine.",
      },
      {
        title: "Privato e senza filigrana",
        description: "Il PDF viene creato sul tuo dispositivo, non ha filigrane e niente viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Quante immagini posso aggiungere?",
        answer:
          "Non c’è un limite fisso. Decine di foto del telefono funzionano sulla maggior parte dei dispositivi; gruppi molto grandi possono esaurire la memoria sui telefoni più vecchi.",
      },
      {
        question: "Le foto perderanno qualità?",
        answer:
          "Le foto JPG vengono inserite nel PDF senza ricompressione, quindi mantengono la qualità originale. Le immagini PNG restano senza perdita. Le immagini WebP e HEIC vengono prima convertite in JPG ad alta qualità, perché il PDF non può contenerle direttamente.",
      },
      {
        question: "Perché il mio PDF è così pesante?",
        answer:
          "Il PDF contiene le tue foto alla massima risoluzione. Per renderlo più leggero, riduci prima le foto con Comprimi immagine o Ridimensiona immagine, poi aggiungile qui.",
      },
      {
        question: "Le foto del telefono scattate di lato verranno ruotate correttamente?",
        answer:
          "Sì. Le foto vengono inserite come appaiono sul telefono, usando l’orientamento salvato nel file.",
      },
      {
        question: "Il mio documento viene caricato?",
        answer:
          "No. Il PDF viene creato dal browser sul tuo dispositivo, quindi ricevute, documenti d’identità e documenti privati non lo lasciano mai.",
      },
    ],
  },
  "png-to-pdf": {
    name: "Da PNG a PDF",
    shortName: "PNG → PDF",
    tagline: "Trasforma immagini PNG e screenshot in un unico PDF, nell’ordine che scegli. La conversione avviene sul tuo dispositivo.",
    intro: "Da PNG a PDF unisce una o più immagini PNG, come screenshot, scansioni o diagrammi, in un unico PDF facile da inviare per email, stampare o caricare. Metti le pagine nell’ordine che vuoi, scegli A4, Lettera (US) o una pagina adatta a ogni immagine, e imposta orientamento e margini. Le immagini mantengono la piena risoluzione. Tutto avviene nel tuo browser, quindi le tue immagini non vengono mai caricate. Anche foto JPG, WebP e HEIC di iPhone possono entrare nello stesso PDF.",
    seoTitle: "Convertire PNG in PDF – Unire immagini, gratis",
    seoDescription: "Converti immagini PNG e screenshot in un unico PDF nel browser. Riordina le pagine, scegli A4 o Lettera (US). Gratis, privato, nessun caricamento.",
    keywords: [
      "png in pdf",
      "convertire png in pdf",
      "da png a pdf",
      "screenshot in pdf",
      "unire png in pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi le immagini PNG",
        description: "Trascina o scegli una o più immagini. Puoi aggiungerne altre in seguito.",
      },
      {
        title: "Disponi le pagine",
        description: "Trascina le pagine o usa i pulsanti freccia per impostare l’ordine, poi scegli formato della pagina, orientamento e margine.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva un unico PDF con una pagina per ogni immagine.",
      },
    ],
    features: [
      {
        title: "Tante immagini, un PDF",
        description: "Unisci screenshot o scansioni in un unico documento.",
      },
      {
        title: "L’ordine che vuoi tu",
        description: "Riordina le pagine prima di creare il PDF.",
      },
      {
        title: "Formati di pagina a scelta",
        description: "A4, Lettera (US) o ogni pagina delle dimensioni della sua immagine.",
      },
      {
        title: "Conversione privata",
        description: "Il PDF viene creato sul tuo dispositivo e niente viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Le immagini perdono qualità?",
        answer: "No. Ogni immagine viene inserita nel PDF alla piena risoluzione.",
      },
      {
        question: "Posso mescolare PNG con altri formati?",
        answer: "Sì. Immagini JPG, WebP e HEIC di iPhone possono entrare nello stesso PDF.",
      },
      {
        question: "A cosa serve Adatta all’immagine?",
        answer: "Ogni pagina prende le dimensioni e la forma della sua immagine, senza bordo bianco: è l’ideale per screenshot e slide.",
      },
      {
        question: "Le mie immagini vengono caricate?",
        answer: "No. Il PDF viene creato nel tuo browser, quindi le immagini restano sul tuo dispositivo.",
      },
    ],
  },
  "heic-to-pdf": {
    name: "Da HEIC a PDF",
    shortName: "HEIC → PDF",
    tagline: "Trasforma le foto HEIC di iPhone, come ricevute e documenti, in un unico PDF. La conversione avviene sul tuo dispositivo.",
    intro: "Gli iPhone salvano le foto in HEIC, ma note spese, scuole, banche e uffici di solito chiedono un PDF. Da HEIC a PDF trasforma una o più foto HEIC, come ricevute, documenti d’identità, moduli o pagine scritte a mano, in un unico PDF da caricare o inviare per email. Metti le pagine in ordine e scegli A4, Lettera (US) o pagine delle dimensioni di ogni foto. Tutto avviene nel tuo browser, quindi le tue foto non vengono mai caricate.",
    seoTitle: "Convertire HEIC in PDF – Foto iPhone in PDF, gratis",
    seoDescription: "Converti le foto HEIC di iPhone in un unico PDF nel browser. Riordina le pagine, scegli A4 o Lettera (US). Gratis, privato, niente viene caricato.",
    keywords: [
      "heic in pdf",
      "convertire heic in pdf",
      "foto iphone in pdf",
      "heif in pdf",
      "convertitore heic pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi le foto HEIC",
        description: "Trascina o scegli uno o più file .heic o .heif.",
      },
      {
        title: "Disponi le pagine",
        description: "Imposta l’ordine, poi scegli formato della pagina, orientamento e margine.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva un unico PDF con una pagina per ogni foto.",
      },
    ],
    features: [
      {
        title: "Più foto, un PDF",
        description: "Unisci ricevute o pagine di documenti in un unico file.",
      },
      {
        title: "L’ordine che vuoi tu",
        description: "Riordina le pagine prima di creare il PDF.",
      },
      {
        title: "Formati di pagina a scelta",
        description: "A4, Lettera (US) o ogni pagina delle dimensioni della sua foto.",
      },
      {
        title: "Conversione privata",
        description: "Le tue foto vengono convertite sul tuo dispositivo e non vengono mai caricate.",
      },
    ],
    faqs: [
      {
        question: "HEIF e HEIC sono la stessa cosa?",
        answer: "Per le foto, sì. Qui funzionano sia i file .heic sia i .heif.",
      },
      {
        question: "Posso aggiungere anche immagini JPG o PNG?",
        answer: "Sì. Immagini JPG, PNG e WebP possono entrare nello stesso PDF.",
      },
      {
        question: "Il PDF sarà leggibile per i documenti?",
        answer: "Sì. Le foto vengono inserite alla piena risoluzione. Per il risultato più chiaro, fotografa i documenti in piano e con una buona luce.",
      },
      {
        question: "Le mie foto vengono caricate?",
        answer: "No. Il decoder HEIC e la creazione del PDF avvengono nel tuo browser, quindi le tue foto restano sul tuo dispositivo.",
      },
    ],
  },
  "tiff-to-pdf": {
    name: "Da TIFF a PDF",
    shortName: "TIFF → PDF",
    tagline: "Trasforma scansioni e fax TIFF in un PDF, con tutte le pagine di un TIFF multipagina in ordine. La conversione avviene sul tuo dispositivo.",
    intro: "Scanner e programmi fax spesso salvano i documenti come file TIFF multipagina, ma quasi tutti si aspettano un PDF. Da TIFF a PDF trasforma ogni pagina di ogni TIFF in una pagina PDF, in ordine, così un contratto scansionato o un fax diventa un unico documento da aprire, inviare per email e caricare ovunque. Aggiungi più file, riordina le pagine e scegli A4, Lettera (US) o pagine delle dimensioni di ogni immagine. Tutto avviene nel tuo browser, quindi i tuoi documenti non vengono mai caricati.",
    seoTitle: "Convertire TIFF in PDF – Scansioni multipagina, gratis",
    seoDescription: "Converti scansioni e fax TIFF in PDF nel browser. Tutte le pagine di un TIFF multipagina, in ordine. Gratis, privato, niente viene caricato.",
    keywords: [
      "tiff in pdf",
      "tif in pdf",
      "convertire tiff in pdf",
      "tiff multipagina in pdf",
      "fax tiff in pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi i file TIFF",
        description: "Trascina o scegli uno o più file .tif o .tiff. Ogni pagina compare nell’elenco.",
      },
      {
        title: "Disponi le pagine",
        description: "Imposta l’ordine, poi scegli formato della pagina, orientamento e margine.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva un unico PDF con tutte le pagine.",
      },
    ],
    features: [
      {
        title: "Tutte le pagine mantenute",
        description: "Ogni pagina di un TIFF multipagina diventa una pagina PDF, in ordine.",
      },
      {
        title: "Formati fax e di scansione",
        description: "Si aprono TIFF fax in bianco e nero e TIFF con compressione LZW, Deflate, PackBits e JPEG.",
      },
      {
        title: "L’ordine che vuoi tu",
        description: "Riordina o rimuovi pagine prima di creare il PDF.",
      },
      {
        title: "Conversione privata",
        description: "I tuoi documenti vengono convertiti sul tuo dispositivo e non vengono mai caricati.",
      },
    ],
    faqs: [
      {
        question: "Quante pagine può avere un TIFF?",
        answer: "Fino a 200 pagine per file. Le pagine dopo la 200ª vengono escluse, quindi dividi prima i documenti molto lunghi in TIFF più piccoli.",
      },
      {
        question: "Posso mescolare TIFF e altre immagini?",
        answer: "Sì. Immagini JPG, PNG, WebP e HEIC di iPhone possono entrare nello stesso PDF.",
      },
      {
        question: "Il testo nel PDF è ricercabile?",
        answer: "No. Ogni pagina viene inserita come immagine, così com’era nel TIFF. Per copiare il testo, apri una pagina in Da immagine a testo.",
      },
      {
        question: "I miei documenti vengono caricati?",
        answer: "No. Il TIFF viene decodificato e il PDF viene creato nel tuo browser, quindi i tuoi documenti restano sul tuo dispositivo.",
      },
    ],
  },
  "pdf-to-jpg": {
    name: "Da PDF a JPG",
    shortName: "PDF → JPG",
    tagline: "Salva ogni pagina di un PDF come immagine JPG o PNG, una pagina alla volta o tutte insieme in uno ZIP. Niente viene caricato.",
    intro:
      "Da PDF a JPG trasforma le pagine di un PDF in immagini che puoi pubblicare, condividere in chat, inserire in una slide o caricare in un modulo che accetta solo immagini. Scegli JPG per file leggeri o PNG per un testo nitido, e scegli la risoluzione: 72 dpi per gli schermi, 150 dpi per la maggior parte degli usi o 300 dpi per la stampa. Scarica una singola pagina o tutte le pagine insieme in un file ZIP. Il PDF viene aperto dal browser sul tuo dispositivo, quindi i documenti privati non vengono mai caricati.",
    seoTitle: "Convertire PDF in JPG – Tutte le pagine, gratis",
    seoDescription:
      "Convertire PDF in JPG o PNG nel browser. Scegli 72, 150 o 300 dpi e scarica una pagina o tutte in uno ZIP. Gratis, nessun upload.",
    keywords: [
      "pdf in jpg",
      "pdf in immagine",
      "convertire pdf in jpg",
      "pdf in png",
      "pagina pdf in immagine",
      "salvare pdf come jpg",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un file PDF. Le sue pagine compaiono come anteprime.",
      },
      {
        title: "Scegli formato e risoluzione",
        description: "Scegli JPG o PNG, e 72, 150 o 300 dpi.",
      },
      {
        title: "Scarica",
        description: "Salva una singola pagina, o scarica tutte le pagine insieme in un file ZIP.",
      },
    ],
    features: [
      {
        title: "Tutte le pagine o una sola",
        description: "Scarica la pagina che ti serve, o tutte le pagine insieme in uno ZIP.",
      },
      {
        title: "Risoluzione da stampa",
        description: "Rendering fino a 300 dpi per un testo nitido e per la stampa.",
      },
      {
        title: "JPG o PNG",
        description: "JPG per file leggeri, PNG per testo e diagrammi nitidi.",
      },
      {
        title: "I documenti privati restano privati",
        description: "Il PDF viene aperto sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Quale risoluzione scegliere?",
        answer:
          "150 dpi va bene per la maggior parte degli usi, dalla condivisione alle slide. Scegli 300 dpi per stampare o per ingrandire testo piccolo, e 72 dpi per i file più leggeri. Le risoluzioni più alte richiedono più tempo e producono file più pesanti.",
      },
      {
        question: "JPG o PNG?",
        answer:
          "Il JPG produce file molto più leggeri ed è ideale per pagine con foto. Il PNG mantiene testo e disegni al tratto perfettamente nitidi, ma i file sono più pesanti.",
      },
      {
        question: "Posso convertire un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia non protetta e prova con quella copia.",
      },
      {
        question: "Il testo resterà selezionabile?",
        answer:
          "No. Ogni pagina diventa un’immagine, quindi il testo non può essere selezionato né cercato. Conserva il PDF originale se ti serve il testo.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene letto e visualizzato dal tuo browser, quindi contratti, estratti conto e altri documenti privati non lasciano mai il tuo dispositivo.",
      },
    ],
  },
  "pdf-to-png": {
    name: "Da PDF a PNG",
    shortName: "PDF → PNG",
    tagline: "Salva ogni pagina di un PDF come immagine PNG nitida e senza perdita, una pagina alla volta o tutte insieme in uno ZIP. La conversione avviene sul tuo dispositivo.",
    intro: "Da PDF a PNG trasforma ogni pagina di un PDF in un’immagine PNG. Il PNG è senza perdita, quindi testo, linee e diagrammi restano perfettamente nitidi: è la scelta giusta per slide, documenti e grafici da inserire in una presentazione, un progetto grafico o una pagina web. Scegli la risoluzione, poi scarica le singole pagine o tutte le pagine insieme in uno ZIP. Il PDF viene aperto nel tuo browser e non viene mai caricato.",
    seoTitle: "Convertire PDF in PNG – Pagine nitide, gratis",
    seoDescription: "Converti le pagine di un PDF in immagini PNG nitide nel browser. Scegli 72, 150 o 300 dpi, scarica una pagina o tutte. Gratis e privato.",
    keywords: [
      "pdf in png",
      "convertire pdf in png",
      "da pdf a png",
      "pagina pdf in immagine",
      "pdf in png alta risoluzione",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un file PDF. Le sue pagine compaiono come miniature.",
      },
      {
        title: "Scegli la risoluzione",
        description: "150 dpi va bene per gli schermi. Usa 300 dpi per la stampa o per ingrandire.",
      },
      {
        title: "Scarica le pagine",
        description: "Salva una pagina in PNG, o tutte le pagine insieme in uno ZIP.",
      },
    ],
    features: [
      {
        title: "Testo e linee nitidi",
        description: "Il PNG è senza perdita, quindi testo piccolo e linee sottili restano netti.",
      },
      {
        title: "Risoluzione a scelta",
        description: "72, 150 o 300 dpi, dalle anteprime web alla stampa.",
      },
      {
        title: "Tutte le pagine in una volta",
        description: "Scarica tutte le pagine in un unico ZIP, con i nomi nell’ordine delle pagine.",
      },
      {
        title: "Conversione privata",
        description: "Il PDF viene aperto sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "PNG o JPG per le pagine di un PDF?",
        answer: "Il PNG mantiene testo e diagrammi perfettamente nitidi. Il JPG produce file più leggeri ed è adatto a pagine composte soprattutto da foto. Puoi passare a JPG nello stesso strumento.",
      },
      {
        question: "Quale risoluzione scegliere?",
        answer: "150 dpi ha un buon aspetto sullo schermo. 300 dpi serve per la stampa o quando devi ingrandire, e produce file più pesanti.",
      },
      {
        question: "Posso convertire un PDF protetto da password?",
        answer: "Non se richiede una password per essere aperto. Aprilo in un lettore PDF, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene letto e visualizzato dal tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "merge-images": {
    name: "Unisci immagini",
    shortName: "Unisci",
    tagline: "Unisci foto affiancate, impilate o in griglia, con spaziatura e colore di sfondo, e salva un’unica immagine.",
    intro:
      "Unisci immagini combina più immagini in una sola: affiancate per confronti prima e dopo, impilate per screenshot lunghi e guide passo passo, oppure in griglia per un collage semplice. Metti le immagini in ordine, scegli lo spazio tra loro e il colore di sfondo, e lascia che lo strumento uniformi altezze o larghezze perché i bordi siano allineati. Salva il risultato in JPG, PNG o WebP. Tutto avviene nel tuo browser, quindi le tue foto non vengono mai caricate.",
    seoTitle: "Unire immagini online – Combina foto gratis",
    seoDescription:
      "Unire foto affiancate, in verticale o in griglia nel browser. Aggiungi spaziatura e un colore di sfondo. Gratis, privato, nessun upload.",
    keywords: [
      "unire immagini",
      "unire foto",
      "combinare immagini",
      "mettere due foto affiancate",
      "creare collage foto",
      "unire immagini in verticale",
    ],
    howToSteps: [
      {
        title: "Aggiungi le immagini",
        description: "Trascina o scegli due o più immagini JPG, PNG, WebP o HEIC.",
      },
      {
        title: "Ordinale",
        description: "Usa i pulsanti su e giù per impostare l’ordine, e rimuovi quelle che non ti servono.",
      },
      {
        title: "Scegli il layout",
        description:
          "Affiancate, impilate o in griglia con il numero di colonne che vuoi, più spaziatura e sfondo.",
      },
      {
        title: "Scarica",
        description: "Salva l’immagine unita in JPG, PNG o WebP.",
      },
    ],
    features: [
      {
        title: "Tre layout",
        description: "Orizzontale per i confronti, verticale per screenshot e guide, e griglia per i collage.",
      },
      {
        title: "Bordi allineati",
        description:
          "Uniforma altezze o larghezze automaticamente, oppure mantieni ogni immagine alle sue dimensioni originali.",
      },
      {
        title: "Spaziatura e sfondo",
        description:
          "Imposta lo spazio tra le immagini e riempilo con qualsiasi colore, o lascialo trasparente in PNG e WebP.",
      },
      {
        title: "Privato",
        description: "Le immagini vengono unite sul tuo dispositivo e non vengono mai caricate.",
      },
    ],
    faqs: [
      {
        question: "Quante immagini posso unire?",
        answer:
          "Quante ne vuoi, nei limiti della memoria del tuo dispositivo. I risultati molto grandi vengono ridotti automaticamente per restare entro le dimensioni che i browser possono salvare.",
      },
      {
        question: "Cosa fa Uniforma dimensioni?",
        answer:
          "In una riga, ogni immagine viene scalata alla stessa altezza; in una colonna, alla stessa larghezza; in una griglia, ogni immagine riempie una cella delle stesse dimensioni. Disattivalo per mantenere ogni immagine alle sue dimensioni originali.",
      },
      {
        question: "Lo sfondo può essere trasparente?",
        answer:
          "Sì. Scegli Trasparente e salva in PNG o WebP. Il JPG non supporta la trasparenza, quindi usa al suo posto il colore di sfondo.",
      },
      {
        question: "Come creo un’immagine prima e dopo?",
        answer:
          "Aggiungi le due foto, scegli Affiancate, lascia attivo Uniforma dimensioni e aggiungi un piccolo spazio. Le due immagini avranno la stessa altezza.",
      },
      {
        question: "Le mie immagini vengono caricate?",
        answer: "No. Le immagini vengono combinate dal browser sul tuo dispositivo.",
      },
    ],
  },
  "merge-pdf": {
    name: "Unisci PDF",
    shortName: "Unisci PDF",
    tagline: "Combina più file PDF in uno solo, nell’ordine che scegli. I file vengono uniti sul tuo dispositivo.",
    intro:
      "Unisci PDF mette insieme due o più file PDF in un unico documento. Aggiungi i file, mettili in ordine con i pulsanti di spostamento, controlla la prima pagina di ciascuno e scarica un solo PDF con tutte le pagine in sequenza. È il modo rapido per inviare una relazione con i suoi allegati, varie pagine scansionate o un gruppo di fatture come un unico file. L’unione avviene nel tuo browser, quindi i tuoi documenti non vengono mai caricati su un server.",
    seoTitle: "Unire PDF online – Gratis, senza upload",
    seoDescription:
      "Unire PDF nel browser: combina più file in uno solo, nell’ordine che vuoi, e scarica un unico PDF. Gratis, privato, senza upload e senza filigrana.",
    keywords: [
      "unire pdf",
      "unire file pdf",
      "unire pdf online gratis",
      "combinare pdf",
      "unire più pdf in uno",
      "unisci pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi i PDF",
        description: "Trascina o scegli due o più file PDF. Puoi aggiungerne altri in qualsiasi momento.",
      },
      {
        title: "Mettili in ordine",
        description: "Usa i pulsanti su e giù per ordinare i file, e rimuovi quelli che non ti servono.",
      },
      {
        title: "Scarica",
        description: "Salva un unico PDF con tutte le pagine, un file dopo l’altro.",
      },
    ],
    features: [
      {
        title: "Tutti i file che vuoi",
        description: "Unisci tutti i PDF che il tuo dispositivo riesce a gestire, con il totale delle pagine sempre visibile.",
      },
      {
        title: "Il tuo ordine",
        description: "Ordina i file con pulsanti che funzionano anche da tastiera e con gli screen reader.",
      },
      {
        title: "Pagine invariate",
        description:
          "Le pagine vengono copiate così come sono, senza ricompressione, quindi il testo resta nitido e ricercabile.",
      },
      {
        title: "Privato e gratuito",
        description: "I file vengono uniti sul tuo dispositivo, senza upload, senza registrazione e senza filigrana.",
      },
    ],
    faqs: [
      {
        question: "C’è un limite al numero di file che posso unire?",
        answer:
          "Non c’è un limite fisso. Decine di PDF normali funzionano sulla maggior parte dei dispositivi; i file molto grandi possono essere lenti sui telefoni più vecchi.",
      },
      {
        question: "I link e i segnalibri continueranno a funzionare?",
        answer:
          "I link nelle pagine vengono mantenuti. L’elenco dei segnalibri (la struttura nel pannello laterale del lettore PDF) non viene copiato nel file unito.",
      },
      {
        question: "L’unione riduce la qualità?",
        answer:
          "No. Le pagine vengono copiate così come sono, quindi testo, immagini e grafica vettoriale restano identici.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "split-pdf": {
    name: "Dividi PDF",
    shortName: "Dividi PDF",
    tagline: "Dividi un PDF per intervalli di pagine, ogni tot pagine o in pagine singole. Funziona sul tuo dispositivo.",
    intro:
      "Dividi PDF suddivide un PDF in più file più piccoli. Inserisci intervalli di pagine come 1-3, 5, 8- per ottenere un file per ogni intervallo, dividi ogni tot pagine per tagliare una lunga scansione in parti uguali, oppure salva ogni pagina come PDF a sé. Lo strumento elenca i file che otterrai prima di scaricarli, e più file arrivano insieme in un unico ZIP. La divisione avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Dividere PDF online – Per pagine o intervalli, gratis",
    seoDescription:
      "Dividere PDF nel browser: separa un PDF in più file per intervalli di pagine, ogni N pagine o pagina per pagina. Gratis, privato, nessun upload.",
    keywords: [
      "dividere pdf",
      "dividere pagine pdf",
      "separare pagine pdf",
      "dividere pdf online gratis",
      "dividi pdf",
      "separare pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un PDF. Le sue pagine compaiono come anteprime.",
      },
      {
        title: "Scegli come dividere",
        description: "Inserisci gli intervalli di pagine, scegli un numero di pagine per file o dividi ogni pagina.",
      },
      {
        title: "Controlla l’elenco",
        description: "Il pannello mostra ogni file che otterrai e le sue pagine.",
      },
      {
        title: "Scarica",
        description: "Salva un PDF, o uno ZIP quando i file sono più di uno.",
      },
    ],
    features: [
      {
        title: "Tre modi per dividere",
        description: "Intervalli personalizzati, gruppi uguali di pagine o una pagina per file.",
      },
      {
        title: "Guarda prima di salvare",
        description: "Ogni file risultante e i suoi numeri di pagina vengono elencati prima.",
      },
      {
        title: "Un solo download ZIP",
        description: "Più file arrivano insieme, con il nome delle loro pagine.",
      },
      {
        title: "Privato",
        description: "Il PDF viene diviso sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Come scrivo gli intervalli di pagine?",
        answer:
          "Separa gli intervalli con le virgole. 1-3 indica le pagine da 1 a 3, 5 indica solo la pagina 5 e 8- indica dalla pagina 8 alla fine. Ogni intervallo diventa un PDF a sé.",
      },
      {
        question: "Posso ottenere un PDF con solo alcune pagine?",
        answer:
          "Sì. Inserisci un solo intervallo, per esempio 2-4, per scaricare solo quelle pagine. Anche Estrai pagine PDF ti permette di scegliere le pagine cliccandole.",
      },
      {
        question: "La divisione modifica le pagine?",
        answer: "No. Le pagine vengono copiate così come sono, quindi il testo resta nitido e ricercabile.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "extract-pdf-pages": {
    name: "Estrai pagine PDF",
    shortName: "Estrai pagine",
    tagline: "Scegli le pagine che ti servono da un PDF e salvale come nuovo PDF. Funziona sul tuo dispositivo.",
    intro:
      "Estrai pagine PDF ti permette di scegliere le pagine di un PDF dalle anteprime e di salvare solo quelle come nuovo documento. È utile per inviare un capitolo di una lunga relazione, la pagina firmata di un contratto o un singolo estratto conto da un gruppo di documenti. Spunta le pagine che vuoi, oppure usa Seleziona tutto e togli la spunta alle poche che non ti servono, poi scarica. Il file originale non viene modificato, e tutto avviene nel tuo browser.",
    seoTitle: "Estrarre pagine da PDF – Gratis, senza upload",
    seoDescription:
      "Estrarre pagine da PDF nel browser: scegli le pagine dalle anteprime e salvale come nuovo PDF. Gratis, privato e niente viene caricato.",
    keywords: [
      "estrarre pagine da pdf",
      "estrarre pagine pdf",
      "estrai pagine pdf",
      "salvare pagine di un pdf",
      "selezionare pagine pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un PDF per vederne tutte le pagine.",
      },
      {
        title: "Spunta le pagine che vuoi",
        description: "Usa la casella sotto ogni pagina, oppure Seleziona tutto e togli la spunta a quelle che non ti servono.",
      },
      {
        title: "Scarica",
        description: "Salva un nuovo PDF con solo quelle pagine, nel loro ordine originale.",
      },
    ],
    features: [
      {
        title: "Scegli dall’anteprima",
        description: "Vedi ogni pagina prima di scegliere.",
      },
      {
        title: "Adatto alla tastiera",
        description: "Ogni pagina ha una casella di controllo con etichetta, quindi il mouse non serve.",
      },
      {
        title: "Pagine invariate",
        description: "Le pagine scelte vengono copiate così come sono, con testo nitido e ricercabile.",
      },
      {
        title: "Privato",
        description: "Le pagine vengono estratte sul tuo dispositivo e non vengono mai caricate.",
      },
    ],
    faqs: [
      {
        question: "Il mio PDF originale viene modificato?",
        answer:
          "No. Viene creato un nuovo PDF con le pagine che hai scelto; il file originale resta com’era.",
      },
      {
        question: "Posso cambiare l’ordine delle pagine?",
        answer:
          "Le pagine estratte mantengono il loro ordine originale. Per riordinare, ruotare o eliminare pagine, usa Organizza PDF.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "organize-pdf": {
    name: "Organizza PDF",
    shortName: "Organizza PDF",
    tagline: "Riordina, ruota ed elimina le pagine di un PDF, poi salva il nuovo PDF. Funziona sul tuo dispositivo.",
    intro:
      "Organizza PDF mostra tutte le pagine di un PDF così puoi sistemarlo: sposta le pagine prima o dopo, raddrizza le scansioni di lato ed elimina le pagine bianche o indesiderate. Ogni pagina ha i suoi pulsanti, che funzionano anche da tastiera, e con il mouse puoi trascinare le pagine al loro posto. Annulla tutte le modifiche rimette tutto com’era. Quando è a posto, scarica il nuovo PDF. Tutto questo avviene nel tuo browser, quindi il documento non viene mai caricato.",
    seoTitle: "Organizzare pagine PDF – Riordina, ruota, elimina",
    seoDescription:
      "Organizzare PDF nel browser: riordina, ruota ed elimina le pagine con le anteprime e scarica il nuovo PDF. Gratis, privato, nessun upload.",
    keywords: [
      "organizzare pdf",
      "riordinare pagine pdf",
      "spostare pagine pdf",
      "eliminare pagine pdf",
      "rimuovere pagine da pdf",
      "organizza pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un PDF per vederne tutte le pagine.",
      },
      {
        title: "Sistema le pagine",
        description:
          "Usa i pulsanti sotto ogni pagina per spostarla, ruotarla o eliminarla, oppure trascina le pagine al loro posto.",
      },
      {
        title: "Scarica",
        description: "Salva il PDF riorganizzato. Annulla tutte le modifiche riparte dall’originale.",
      },
    ],
    features: [
      {
        title: "Sposta, ruota, elimina",
        description: "Tutte le operazioni sulle pagine in un’unica vista, con anteprime che si aggiornano mentre lavori.",
      },
      {
        title: "Trascinamento o pulsanti",
        description: "Trascina con il mouse oppure usa i pulsanti, che funzionano anche con tastiera e screen reader.",
      },
      {
        title: "Senza perdita",
        description: "Le pagine vengono riordinate, non ridisegnate, quindi il testo resta nitido e ricercabile.",
      },
      {
        title: "Privato",
        description: "Il PDF viene riorganizzato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Ruotare una pagina ne riduce la qualità?",
        answer:
          "No. La rotazione viene salvata come impostazione della pagina, quindi niente viene ridisegnato o compresso.",
      },
      {
        question: "Posso annullare una modifica?",
        answer:
          "Sì. Annulla tutte le modifiche riporta ogni pagina alla posizione e alla rotazione originali. Il file originale non viene mai modificato.",
      },
      {
        question: "Posso aggiungere pagine da un altro PDF?",
        answer: "Prima combina i file con Unisci PDF, poi organizza qui il file unito.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Ruota PDF",
    shortName: "Ruota PDF",
    tagline: "Ruota tutte le pagine, o solo quelle che scegli, di 90 o 180 gradi. Funziona sul tuo dispositivo.",
    intro:
      "Ruota PDF sistema le pagine che si aprono di lato o capovolte, un problema comune con i documenti scansionati e con le foto salvate come PDF. Scegli 90 gradi a destra, 180 gradi o 90 gradi a sinistra, e applica la rotazione a tutte le pagine o solo a quelle che spunti. Le anteprime mostrano il risultato prima del download. La rotazione viene salvata come impostazione della pagina, quindi testo e immagini mantengono la piena qualità, e niente lascia il tuo browser.",
    seoTitle: "Ruotare PDF online – Gratis, in modo permanente",
    seoDescription:
      "Ruotare PDF nel browser: gira tutte le pagine o solo quelle scelte di 90 o 180 gradi e salva in modo permanente. Gratis, privato, nessun upload.",
    keywords: [
      "ruotare pdf",
      "ruotare pagine pdf",
      "girare pdf",
      "ruotare pdf e salvare",
      "ruota pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un PDF per vederne le pagine.",
      },
      {
        title: "Scegli la rotazione",
        description: "Scegli 90° a destra, 180° o 90° a sinistra, per tutte le pagine o per quelle che spunti.",
      },
      {
        title: "Scarica",
        description: "Salva il PDF con le pagine ruotate in modo definitivo.",
      },
    ],
    features: [
      {
        title: "Tutte le pagine o solo alcune",
        description: "Sistema una scansione di lato senza toccare il resto.",
      },
      {
        title: "Anteprima in tempo reale",
        description: "Le anteprime delle pagine ruotano mentre scegli, prima che venga salvato qualcosa.",
      },
      {
        title: "Nessuna perdita di qualità",
        description: "La rotazione è un’impostazione della pagina, quindi niente viene ridisegnato.",
      },
      {
        title: "Privato",
        description: "Il PDF viene ruotato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "La rotazione viene salvata in modo permanente?",
        answer: "Sì. Il PDF scaricato si apre con le pagine ruotate in qualsiasi lettore PDF.",
      },
      {
        question: "Posso ruotare le pagine di angoli diversi?",
        answer: "Usa Organizza PDF, dove ogni pagina ha il suo pulsante di rotazione.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "add-page-numbers-pdf": {
    name: "Aggiungi numeri di pagina al PDF",
    shortName: "Numeri di pagina",
    tagline: "Numera le pagine di un PDF con la posizione, il formato e il numero iniziale che scegli. Funziona sul tuo dispositivo.",
    intro:
      "Aggiungi numeri di pagina mette un numero su ogni pagina di un PDF, cosa che spesso serve a relazioni, tesi e dispense stampate. Scegli una delle sei posizioni in alto o in basso, un formato (1, 1 / N o – 1 –), il numero iniziale, la dimensione del testo e la distanza dal bordo. Puoi anche lasciare senza numero la prima pagina, come una copertina. Un’anteprima mostra come apparirà il numero. I numeri vengono aggiunti nel tuo browser, quindi il documento non viene mai caricato.",
    seoTitle: "Numerare pagine PDF – Gratis, senza upload",
    seoDescription:
      "Numerare le pagine di un PDF nel browser: scegli posizione, formato e numero iniziale, e salta la copertina. Gratis, privato, nessun upload.",
    keywords: [
      "numerare pagine pdf",
      "aggiungere numeri di pagina pdf",
      "inserire numeri di pagina pdf",
      "numerazione pagine pdf",
      "impaginare pdf numeri",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli il PDF da numerare.",
      },
      {
        title: "Scegli lo stile",
        description: "Scegli posizione, formato, numero iniziale, dimensione e distanza dal bordo.",
      },
      {
        title: "Salta la copertina se serve",
        description: "Spunta l’opzione per lasciare la prima pagina senza numero.",
      },
      {
        title: "Scarica",
        description: "Salva il PDF numerato.",
      },
    ],
    features: [
      {
        title: "Sei posizioni",
        description: "In alto o in basso, a sinistra, al centro o a destra.",
      },
      {
        title: "Tre formati",
        description: "Numeri semplici, stile “1 / 12” o “– 1 –”.",
      },
      {
        title: "Qualsiasi numero iniziale",
        description: "Continua la numerazione di un altro documento e salta la copertina.",
      },
      {
        title: "Privato",
        description: "I numeri vengono aggiunti sul tuo dispositivo; niente viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Posso partire da un numero diverso da 1?",
        answer: "Sì. Imposta Inizia da su qualsiasi numero, per esempio per continuare da un capitolo precedente.",
      },
      {
        question: "I numeri copriranno il contenuto?",
        answer:
          "Vengono collocati nel margine della pagina. Se le tue pagine hanno margini molto stretti, scegli una distanza dal bordo minore o una dimensione del testo più piccola.",
      },
      {
        question: "Perché su alcune pagine i numeri sono di lato?",
        answer:
          "Alcuni PDF memorizzano le pagine ruotate. Il numero segue l’orientamento memorizzato della pagina, quindi su quelle pagine può apparire girato. Prima correggi la rotazione con Ruota PDF o Organizza PDF.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "watermark-pdf": {
    name: "Filigrana PDF",
    shortName: "Filigrana PDF",
    tagline: "Applica un testo o un logo sulle pagine di un PDF, poi trascinalo al suo posto. Funziona sul tuo dispositivo.",
    intro:
      "Filigrana PDF aggiunge alle pagine di un PDF un timbro come RISERVATO, BOZZA, il tuo nome o il tuo logo. Scrivi il testo in qualsiasi lingua o scegli un’immagine del logo, poi imposta dimensione, opacità e angolo e trascinalo dove vuoi sull’anteprima della pagina, oppure usa i cursori di posizione. Applicalo a tutte le pagine o a un intervallo di pagine. La filigrana viene aggiunta nel tuo browser, quindi il documento non viene mai caricato.",
    seoTitle: "Filigrana PDF online – Testo o logo, gratis",
    seoDescription:
      "Aggiungere una filigrana a un PDF nel browser: testo o logo, con dimensione, opacità e angolo, da trascinare al suo posto. Gratis, privato, nessun upload.",
    keywords: [
      "filigrana pdf",
      "aggiungere filigrana pdf",
      "inserire filigrana pdf",
      "timbro pdf",
      "aggiungere logo a pdf",
      "filigrana riservato pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli il PDF da timbrare.",
      },
      {
        title: "Crea la filigrana",
        description: "Scrivi il testo e scegline il colore, oppure scegli un’immagine del logo.",
      },
      {
        title: "Posizionala",
        description: "Imposta dimensione, opacità e angolo, poi trascinala sull’anteprima o usa i cursori.",
      },
      {
        title: "Scarica",
        description: "Scegli tutte le pagine o un intervallo e salva il PDF con la filigrana.",
      },
    ],
    features: [
      {
        title: "Testo in qualsiasi lingua",
        description: "Il testo viene disegnato come immagine, quindi ogni alfabeto e accento appare correttamente.",
      },
      {
        title: "Filigrane con logo",
        description: "Usa un logo PNG, JPG, WebP o SVG.",
      },
      {
        title: "Trascina al suo posto",
        description: "Sposta la filigrana sull’anteprima della pagina o usa i cursori, che funzionano anche da tastiera.",
      },
      {
        title: "Privato",
        description: "La filigrana viene aggiunta sul tuo dispositivo; niente viene caricato.",
      },
    ],
    faqs: [
      {
        question: "La filigrana si può rimuovere in seguito?",
        answer:
          "Viene aggiunta come immagine sopra la pagina. Chi ha un editor PDF potrebbe comunque rimuoverla, quindi una filigrana scoraggia la copia più che impedirla.",
      },
      {
        question: "Posso applicare la filigrana solo ad alcune pagine?",
        answer: "Sì. Scegli Pagine e inserisci un intervallo come 1-3, 5.",
      },
      {
        question: "La filigrana copre il testo?",
        answer:
          "Abbassa l’opacità per mantenere la pagina leggibile. Il 15–30% è il valore tipico per le filigrane diagonali.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "sign-pdf": {
    name: "Firma PDF",
    shortName: "Firma PDF",
    tagline: "Disegna o scrivi la tua firma, o usane un’immagine, e posizionala su qualsiasi pagina di un PDF. Funziona sul tuo dispositivo.",
    intro:
      "Firma PDF mette la tua firma autografa su un documento senza stamparlo e scansionarlo. Disegna la firma con il mouse, il dito o un pennino, scrivi il tuo nome, oppure usa una foto della tua firma, il cui sfondo bianco può diventare trasparente. Poi scegli la pagina, imposta la dimensione e trascina la firma al suo posto, oppure usa i cursori di posizione. La firma viene aggiunta nel tuo browser, quindi né il documento né la tua firma vengono mai caricati.",
    seoTitle: "Firmare PDF online – Gratis, senza upload",
    seoDescription:
      "Firmare un PDF nel browser: disegna o scrivi la tua firma, o usane un’immagine, e posizionala su qualsiasi pagina. Gratis, privato, niente viene caricato.",
    keywords: [
      "firmare pdf",
      "firmare pdf online gratis",
      "aggiungere firma a pdf",
      "firma elettronica pdf",
      "inserire firma su pdf",
      "firma pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli il documento da firmare.",
      },
      {
        title: "Crea la tua firma",
        description: "Disegnala, scrivi il tuo nome o scegli una foto della tua firma.",
      },
      {
        title: "Posizionala",
        description: "Scegli la pagina, imposta la dimensione e trascina la firma dove deve stare, oppure usa i cursori.",
      },
      {
        title: "Scarica",
        description: "Salva il PDF firmato.",
      },
    ],
    features: [
      {
        title: "Tre modi per firmare",
        description: "Disegna, scrivi o usa un’immagine, con inchiostro blu o nero.",
      },
      {
        title: "Firme pulite dalle foto",
        description: "Lo sfondo della carta in una foto della firma può diventare trasparente.",
      },
      {
        title: "Posizionamento preciso",
        description: "Trascina sull’anteprima o usa i cursori, che funzionano anche da tastiera.",
      },
      {
        title: "Privato",
        description: "Il documento e la firma restano sul tuo dispositivo.",
      },
    ],
    faqs: [
      {
        question: "È una firma digitale con valore legale?",
        answer:
          "Aggiunge un’immagine della tua firma, come quando firmi su carta. Non è una firma digitale certificata con un certificato. Molti moduli di uso quotidiano la accettano, ma i contratti che richiedono una firma elettronica certificata hanno bisogno di un servizio di firma dedicato.",
      },
      {
        question: "Posso firmare più di una pagina?",
        answer:
          "Firma una pagina, scarica, poi apri di nuovo il PDF firmato e posiziona la firma sulla pagina successiva.",
      },
      {
        question: "La mia firma viene salvata da qualche parte?",
        answer:
          "No. Esiste solo nel tuo browser mentre la pagina è aperta e all’interno del PDF che scarichi.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "fill-pdf-form": {
    name: "Compila modulo PDF",
    shortName: "Compila modulo",
    tagline: "Compila i campi di un modulo PDF e salvalo, anche bloccato se vuoi. Funziona sul tuo dispositivo.",
    intro:
      "Compila modulo PDF trova i campi compilabili di un modulo PDF, come caselle di testo, caselle di controllo ed elenchi a discesa, e li mostra uno per uno con il loro nome, così puoi completarli in fretta. Scarica il PDF compilato, oppure appiattiscilo perché le risposte diventino parte della pagina e non si possano più modificare. È comodo per domande di iscrizione, moduli fiscali e documenti di registrazione. Il modulo viene compilato nel tuo browser, quindi i tuoi dati personali non vengono mai caricati.",
    seoTitle: "Compilare modulo PDF online – Gratis e privato",
    seoDescription:
      "Compilare PDF nel browser: campi di testo, caselle di controllo ed elenchi dei moduli compilabili. Appiattisci per bloccare le risposte. Gratis, nessun upload.",
    keywords: [
      "compilare pdf",
      "compilare modulo pdf",
      "compilare pdf online",
      "pdf compilabile",
      "riempire modulo pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il modulo PDF",
        description: "Trascina o scegli un PDF con campi compilabili.",
      },
      {
        title: "Compila i campi",
        description: "Scrivi nei campi di testo, spunta le caselle e scegli dagli elenchi.",
      },
      {
        title: "Bloccalo se serve",
        description: "Spunta Appiattisci per rendere le risposte parte della pagina.",
      },
      {
        title: "Scarica",
        description: "Salva il modulo compilato.",
      },
    ],
    features: [
      {
        title: "Tutti i campi comuni",
        description: "Caselle di testo, testo su più righe, caselle di controllo, pulsanti di opzione ed elenchi a discesa.",
      },
      {
        title: "Opzione Appiattisci",
        description: "Blocca le risposte così il modulo non può più essere modificato.",
      },
      {
        title: "Campi accessibili",
        description: "Ogni campo è un normale campo di input con etichetta, che funziona con tastiera e screen reader.",
      },
      {
        title: "Privato",
        description: "Le tue risposte restano sul tuo dispositivo; niente viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Perché dice che il mio PDF non ha campi compilabili?",
        answer:
          "Alcuni moduli sono semplici pagine stampate senza veri campi, e alcuni usano un formato più vecchio (XFA) che questo strumento non sa leggere. Per i moduli senza campi, aggiungi una firma con Firma PDF oppure stampa e compila a mano.",
      },
      {
        question: "Cosa fa Appiattisci?",
        answer:
          "Trasforma le risposte in normale contenuto della pagina. Il modulo ha lo stesso aspetto, ma nessuno può più modificare le risposte o i campi.",
      },
      {
        question: "I campi firma sono supportati?",
        answer: "I campi firma e i pulsanti vengono saltati. Usa Firma PDF per posizionare la tua firma sulla pagina.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "remove-pdf-metadata": {
    name: "Rimuovi metadati PDF",
    shortName: "Metadati PDF",
    tagline: "Vedi e rimuovi autore, titolo, software e date nascosti in un PDF. Funziona sul tuo dispositivo.",
    intro:
      "I file PDF spesso contengono dettagli nascosti: il nome dell’autore, il titolo del documento, il software che l’ha creato e quando è stato creato e modificato. Rimuovi metadati PDF mostra cosa è salvato nel tuo file e scarica una copia senza queste informazioni, cosa utile prima di condividere pubblicamente un documento o di inviare un CV. Le pagine in sé non vengono modificate. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Rimuovere metadati PDF – Vedi ed elimina, gratis",
    seoDescription:
      "Rimuovere metadati PDF nel browser: vedi autore, titolo, software e date nascosti nel file ed eliminali. Gratis, privato e niente viene caricato.",
    keywords: [
      "rimuovere metadati pdf",
      "eliminare metadati pdf",
      "cancellare autore pdf",
      "pulire metadati pdf",
      "vedere metadati pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli un PDF per vedere le informazioni salvate al suo interno.",
      },
      {
        title: "Controlla cosa è stato trovato",
        description: "L’elenco mostra titolo, autore, software, date e metadati XMP.",
      },
      {
        title: "Scarica la copia pulita",
        description: "Salva una copia senza quelle informazioni.",
      },
    ],
    features: [
      {
        title: "Guarda prima di rimuovere",
        description: "Ogni dettaglio salvato viene elencato con il suo valore.",
      },
      {
        title: "Informazioni documento e XMP",
        description: "Vengono ripuliti entrambi i punti in cui i PDF conservano i metadati.",
      },
      {
        title: "Pagine intatte",
        description: "Testo, immagini e impaginazione restano esattamente uguali.",
      },
      {
        title: "Privato",
        description: "Il PDF viene ripulito sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Cosa viene rimosso esattamente?",
        answer:
          "Le informazioni del documento (titolo, autore, oggetto, parole chiave, software di creazione, produttore e date) e il flusso di metadati XMP.",
      },
      {
        question: "Rimuove tutti i dati personali dal PDF?",
        answer:
          "No. Il testo sulle pagine, i commenti e i dettagli all’interno delle immagini incorporate (come i dati EXIF delle foto) non vengono modificati. Controlla il contenuto stesso prima di condividerlo.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "crop-pdf": {
    name: "Ritaglia PDF",
    shortName: "Ritaglia PDF",
    tagline: "Rifila i margini di tutte le pagine di un PDF. Funziona sul tuo dispositivo.",
    intro:
      "Ritaglia PDF rifila i bordi di ogni pagina, eliminando ampi margini bianchi, bordi dello scanner o segni di stampa, così il contenuto riempie lo schermo quando leggi dal telefono. Imposta quanto rifilare in alto, a destra, in basso e a sinistra, e l’anteprima mostra quale parte della pagina resta. Il ritaglio viene salvato come impostazione della pagina, quindi il testo mantiene la piena qualità. Tutto avviene nel tuo browser, quindi il documento non viene mai caricato.",
    seoTitle: "Ritagliare PDF online – Rifila i margini, gratis",
    seoDescription:
      "Ritagliare PDF nel browser: rifila i margini delle pagine con anteprima in tempo reale ed elimina bordi bianchi e dello scanner. Gratis, privato, nessun upload.",
    keywords: [
      "ritagliare pdf",
      "ritagliare pagine pdf",
      "tagliare margini pdf",
      "rimuovere margini pdf",
      "ritaglia pdf",
    ],
    howToSteps: [
      {
        title: "Aggiungi il PDF",
        description: "Trascina o scegli il PDF da ritagliare.",
      },
      {
        title: "Imposta i margini",
        description: "Usa i cursori per ogni lato; l’anteprima mostra cosa resta.",
      },
      {
        title: "Scarica",
        description: "Salva il PDF con tutte le pagine ritagliate.",
      },
    ],
    features: [
      {
        title: "Controllo sui quattro lati",
        description: "Rifila separatamente il lato superiore, destro, inferiore e sinistro.",
      },
      {
        title: "Anteprima in tempo reale",
        description: "L’area rifilata viene ombreggiata sulla prima pagina.",
      },
      {
        title: "Nessuna perdita di qualità",
        description: "Le pagine non vengono ridisegnate, quindi il testo resta nitido e ricercabile.",
      },
      {
        title: "Privato",
        description: "Il PDF viene ritagliato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Il ritaglio rende il file più leggero?",
        answer:
          "No. L’area rifilata viene nascosta, non eliminata, quindi il peso del file resta più o meno lo stesso. Un editor PDF può ancora mostrare l’area nascosta.",
      },
      {
        question: "Posso ritagliare le pagine in modo diverso?",
        answer:
          "Gli stessi margini valgono per tutte le pagine. Per ritagliare le pagine in modo diverso, dividi il PDF, ritaglia ogni parte e poi uniscile di nuovo.",
      },
      {
        question: "Posso usare un PDF protetto da password?",
        answer:
          "Non ancora. Se un PDF richiede una password per essere aperto, lo strumento te lo dirà. Aprilo in un lettore PDF con la password, salva una copia senza password e usa quella copia.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer:
          "No. Il PDF viene aperto e modificato dal tuo browser sul tuo dispositivo, quindi contratti, estratti conto e altri documenti privati non lo lasciano mai.",
      },
    ],
  },
  "edit-pdf": {
    name: "Modifica PDF",
    shortName: "Modifica PDF",
    tagline: "Aggiungi testo, immagini, evidenziazioni, disegni, forme e link a un PDF, oppure coprine o oscurane delle parti. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Modifica PDF apre il documento pagina per pagina e ti permette di aggiungere ciò che serve: scrivi testo di qualsiasi dimensione e colore, inserisci un logo o un timbro, evidenzia o sottolinea righe, disegna a mano libera, aggiungi riquadri, cerchi e frecce e fai in modo che alcune aree aprano un sito web. Il Bianchetto copre ciò che non vuoi mostrare, mentre Oscura elimina definitivamente i dati privati dal file. Sposta, ridimensiona ed elimina ciò che hai aggiunto, annulla qualsiasi passaggio, poi scarica il PDF modificato. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Modificare PDF online – Editor PDF gratis, nessun upload",
    seoDescription:
      "Modifica PDF nel browser: aggiungi testo, immagini, evidenziazioni, disegni, forme e link, usa il bianchetto o oscura. Gratis, senza iscrizione, nessun upload.",
    keywords: [
      "modificare pdf",
      "editor pdf",
      "modificare pdf online gratis",
      "scrivere su pdf",
      "aggiungere testo a pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF. Le pagine si aprono nell’editor.",
      },
      {
        title: "Aggiungi ciò che ti serve",
        description:
          "Scegli uno strumento, poi tocca o trascina sulla pagina. Sposta, ridimensiona o elimina tutto ciò che hai aggiunto.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia modificata. Il file originale non viene cambiato.",
      },
    ],
    features: [
      {
        title: "Tutto in un solo editor",
        description:
          "Testo, immagini, evidenziazioni, disegni, forme, link, bianchetto e oscuramento sono nello stesso editor, così puoi combinarli.",
      },
      {
        title: "Annulla e ripeti",
        description: "Sposta, ridimensiona o elimina tutto ciò che hai aggiunto, e annulla un passaggio se cambi idea.",
      },
      {
        title: "Oscuramento vero",
        description: "Le aree oscurate vengono eliminate dal file, non solo coperte.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Posso modificare il testo già presente nel PDF?",
        answer:
          "Non direttamente. Coprilo con il Bianchetto e scrivi sopra il nuovo testo. Il vecchio testo resta comunque nel file, sotto, quindi per tutto ciò che è privato usa Oscura.",
      },
      {
        question: "Il testo che aggiungo è ricercabile?",
        answer:
          "Sì. Il testo che scrivi è vero testo PDF, quindi si può selezionare, cercare e copiare, tranne nelle pagine che oscuri.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Tocca e trascina con il dito; per disegnare puoi usare il dito o un pennino.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "add-text-to-pdf": {
    name: "Aggiungi testo al PDF",
    shortName: "Aggiungi testo",
    tagline: "Scrivi testo in qualsiasi punto di una pagina PDF, con il carattere, la dimensione e il colore che preferisci. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Aggiungi testo al PDF ti permette di scrivere su un documento senza stamparlo: compila un modulo che non ha campi, aggiungi una nota, una data o un indirizzo, oppure inserisci le didascalie di un disegno. Tocca il punto in cui deve iniziare il testo, scrivilo, poi scegli carattere, dimensione, colore e grassetto. Trascina il testo per rifinirne la posizione e aggiungi tutti i testi che ti servono, su tutte le pagine che vuoi. Il testo aggiunto è vero testo PDF, quindi resta nitido e si può cercare. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Aggiungere testo a PDF – Scrivi su qualsiasi PDF, gratis",
    seoDescription:
      "Scrivi testo in qualsiasi punto di un PDF nel browser. Scegli carattere, dimensione e colore, posizionalo con precisione e scarica. Gratis, nessun upload.",
    keywords: [
      "aggiungere testo a pdf",
      "scrivere su pdf",
      "inserire testo in pdf",
      "scrivere su pdf online",
      "compilare pdf senza campi",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Tocca dove va il testo",
        description:
          "Scrivilo nella casella, poi scegli carattere, dimensione e colore. Trascinalo nella posizione giusta.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia con il testo aggiunto.",
      },
    ],
    features: [
      {
        title: "Carattere, dimensione e colore a scelta",
        description:
          "Senza grazie, con grazie o monospaziato stile macchina da scrivere, da 6 a 72 pt, in grassetto o normale, di qualsiasi colore.",
      },
      {
        title: "Molte lingue",
        description: "Puoi scrivere in alfabeto latino, greco e cirillico, oltre che in giapponese e coreano.",
      },
      {
        title: "Testo nitido e ricercabile",
        description: "Il testo è vero testo PDF, non un’immagine del testo.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Posso compilare un modulo che non ha campi?",
        answer: "Sì. Tocca ogni riga vuota e scrivi. Per i PDF con veri campi modulo, Compila modulo PDF è più rapido.",
      },
      {
        question: "Posso modificare il testo già presente nel PDF?",
        answer:
          "Non direttamente. Coprilo con il Bianchetto e scrivi sopra il nuovo testo. Il vecchio testo resta comunque nel file, sotto, quindi per tutto ciò che è privato usa Oscura.",
      },
      {
        question: "Posso scrivere su più pagine?",
        answer: "Sì. Cambia pagina con le frecce sopra la pagina; ciò che aggiungi su ogni pagina viene conservato.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "add-image-to-pdf": {
    name: "Aggiungi immagine al PDF",
    shortName: "Aggiungi immagine",
    tagline: "Inserisci un logo, una foto o l’immagine di un timbro in qualsiasi pagina di un PDF e regolane le dimensioni. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Aggiungi immagine al PDF inserisce un’immagine in una pagina del documento: il logo aziendale su una lettera, un timbro o un sigillo su un certificato, una foto su un modulo o una firma scansionata. Tocca il punto in cui va messa l’immagine e sceglila dal tuo dispositivo. Trascinala nella posizione giusta e tira l’angolo per ridimensionarla; le proporzioni vengono mantenute. Funzionano le immagini JPG, PNG con trasparenza, WebP, GIF, TIFF e HEIC dell’iPhone. Tutto avviene nel tuo browser, quindi né il PDF né l’immagine vengono caricati.",
    seoTitle: "Aggiungere immagine a PDF – Inserisci logo o foto, gratis",
    seoDescription:
      "Inserisci un logo, una foto o un timbro in un PDF nel browser. Trascina per posizionare, ridimensiona e scarica. JPG, PNG, HEIC. Gratis, nessun upload.",
    keywords: [
      "inserire immagine in pdf",
      "aggiungere immagine a pdf",
      "inserire logo in pdf",
      "aggiungere foto a pdf",
      "inserire timbro su pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF e vai alla pagina che ti interessa.",
      },
      {
        title: "Aggiungi l’immagine",
        description:
          "Tocca la pagina nel punto in cui deve andare e scegli un’immagine. Trascinala e ridimensionala dall’angolo.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia con l’immagine aggiunta.",
      },
    ],
    features: [
      {
        title: "Trasparenza mantenuta",
        description: "Un logo PNG con sfondo trasparente resta trasparente sulla pagina.",
      },
      {
        title: "Qualsiasi formato di immagine",
        description: "Puoi inserire immagini JPG, PNG, WebP, GIF, TIFF e HEIC dell’iPhone.",
      },
      {
        title: "Proporzioni mantenute",
        description: "Il ridimensionamento mantiene la forma dell’immagine, che non appare mai deformata.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "L’immagine sarà nitida?",
        answer:
          "Le immagini vengono inserite con una larghezza massima di 2.000 pixel, che restano nitidi nella stampa a dimensioni normali.",
      },
      {
        question: "Posso mettere lo stesso logo su tutte le pagine?",
        answer:
          "Per ripetere un logo su ogni pagina, Filigrana PDF lo fa in un solo passaggio. Qui inserisci le immagini una alla volta.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Tocca e trascina con il dito; per disegnare puoi usare il dito o un pennino.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "highlight-pdf": {
    name: "Evidenzia PDF",
    shortName: "Evidenzia",
    tagline: "Evidenzia, sottolinea o barra il testo di un PDF. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Evidenzia PDF ti permette di segnare un documento come faresti con una penna: trascina su una riga per evidenziarla in giallo, verde, rosa o blu, sottolinearla o barrarla. È comodo per studiare, rivedere un contratto o mostrare a qualcuno esattamente quale parte conta. I segni si possono spostare, ridimensionare ed eliminare, e puoi annullare qualsiasi passaggio. L’evidenziazione è trasparente, quindi il testo sottostante resta leggibile. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Evidenziare PDF online – Evidenziatore PDF gratis",
    seoDescription:
      "Evidenzia, sottolinea o barra il testo di un PDF nel browser. Quattro colori da evidenziatore, annulla, senza registrazione. Nessun upload.",
    keywords: [
      "evidenziare pdf",
      "evidenziatore pdf",
      "evidenziare testo pdf",
      "sottolineare pdf",
      "barrare testo pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Trascina sul testo",
        description: "Scegli evidenziazione, sottolineatura o barrato e un colore, poi trascina sulla riga.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia con i segni.",
      },
    ],
    features: [
      {
        title: "Colori da evidenziatore",
        description: "Giallo, verde, rosa e blu, oppure qualsiasi colore tu scelga.",
      },
      {
        title: "Sottolineatura e barrato",
        description: "Segna modifiche o correzioni oltre ai punti chiave.",
      },
      {
        title: "Il testo resta leggibile",
        description: "Le evidenziazioni sono trasparenti, come un vero evidenziatore.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "L’evidenziazione si aggancia al testo?",
        answer:
          "No. Copre l’area su cui trascini, quindi trascina lungo la riga che vuoi segnare. Poi puoi ridimensionarla dall’angolo.",
      },
      {
        question: "Posso togliere un’evidenziazione?",
        answer: "Sì. Selezionala e premi Elimina, oppure usa Annulla.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Tocca e trascina con il dito; per disegnare puoi usare il dito o un pennino.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "draw-on-pdf": {
    name: "Disegna su PDF",
    shortName: "Disegna su PDF",
    tagline: "Disegna a mano libera sulle pagine di un PDF con il dito, il mouse o un pennino. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Disegna su PDF trasforma la pagina in un foglio su cui scrivere. Cerchia un dettaglio su una planimetria, abbozza un’idea, spunta caselle, aggiungi note scritte a mano o le tue iniziali. Scegli un colore e uno spessore e disegna con il dito su telefono o tablet, con un pennino o con il mouse. Ogni tratto si può spostare o eliminare, e puoi annullare tutti i passaggi che vuoi. Il disegno viene salvato come linee nitide, non come un’immagine sfocata. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Disegnare su PDF – Annotazioni a mano libera, gratis",
    seoDescription:
      "Disegna sulle pagine di un PDF nel browser con il dito, il mouse o un pennino. Scegli colore e spessore, annulla e scarica. Gratis, nessun upload.",
    keywords: [
      "disegnare su pdf",
      "scrivere a mano su pdf",
      "annotare pdf",
      "disegnare su pdf online",
      "penna su pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Disegna sulla pagina",
        description: "Scegli un colore e uno spessore, poi disegna con il dito, il pennino o il mouse.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia con il tuo disegno.",
      },
    ],
    features: [
      {
        title: "Dito, pennino o mouse",
        description: "Il disegno segue il tocco, il pennino e il mouse.",
      },
      {
        title: "Linee nitide",
        description: "I tratti vengono salvati come linee vettoriali che restano nitide quando ingrandisci.",
      },
      {
        title: "Annulla e ripeti",
        description: "Sposta, ridimensiona o elimina tutto ciò che hai aggiunto, e annulla un passaggio se cambi idea.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Posso usarlo per firmare?",
        answer:
          "Sì, ma Firma PDF crea una firma più pulita, che puoi scrivere, disegnare o caricare come immagine e posizionare con precisione.",
      },
      {
        question: "Posso cancellare solo una parte di un tratto?",
        answer: "Ogni tratto è un unico elemento: selezionalo ed eliminalo, oppure annullalo, poi disegnalo di nuovo.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Tocca e trascina con il dito; per disegnare puoi usare il dito o un pennino.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "add-shapes-to-pdf": {
    name: "Aggiungi forme al PDF",
    shortName: "Aggiungi forme",
    tagline: "Aggiungi rettangoli, cerchi, linee e frecce a un PDF per mettere in evidenza qualcosa. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Aggiungi forme al PDF ti aiuta a segnare planimetrie, screenshot, moduli e report: disegna un riquadro intorno a un totale, cerchia un errore o aggiungi una freccia che indica la parte a cui fare attenzione. Scegli rettangolo, ellisse, linea o freccia, un colore e uno spessore della linea, poi trascina sulla pagina. Rettangoli ed ellissi possono avere solo il contorno o essere pieni. Le forme si possono spostare, ridimensionare ed eliminare in qualsiasi momento. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Aggiungere forme a PDF – Riquadri, cerchi e frecce, gratis",
    seoDescription:
      "Aggiungi rettangoli, cerchi, linee e frecce a un PDF nel browser. Scegli colore e spessore, sposta e ridimensiona. Gratis, nessun upload.",
    keywords: [
      "aggiungere forme a pdf",
      "disegnare frecce su pdf",
      "disegnare rettangolo su pdf",
      "cerchiare su pdf",
      "annotare pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Disegna la forma",
        description: "Scegli rettangolo, ellisse, linea o freccia e trascina sulla pagina.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia con i segni.",
      },
    ],
    features: [
      {
        title: "Quattro forme",
        description: "Rettangoli, ellissi, linee e frecce.",
      },
      {
        title: "Contorno o riempimento",
        description: "Disegna solo il contorno di un riquadro o riempilo con un colore pieno.",
      },
      {
        title: "Nitide a qualsiasi dimensione",
        description: "Le forme vengono salvate come grafica vettoriale.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Posso modificare una forma dopo averla disegnata?",
        answer: "Sì. Selezionala per spostarla, ridimensionarla dall’angolo o cambiarne colore e spessore.",
      },
      {
        question: "Posso coprire del testo con una forma?",
        answer:
          "Un rettangolo pieno copre ciò che c’è sotto, ma il contenuto resta nel file. Usa Oscura per eliminare le informazioni private.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Tocca e trascina con il dito; per disegnare puoi usare il dito o un pennino.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "add-links-to-pdf": {
    name: "Aggiungi link al PDF",
    shortName: "Aggiungi link",
    tagline: "Fai in modo che qualsiasi area di una pagina PDF apra un sito web o un’email. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Aggiungi link al PDF rende cliccabile il tuo documento: trasforma un indirizzo web stampato in una brochure in un link vero, collega un logo al tuo sito o fai in modo che un indirizzo email apra un nuovo messaggio. Trascina sul testo o sull’area da rendere cliccabile e scrivi l’indirizzo. I link funzionano in qualsiasi lettore PDF, su computer e telefoni. La pagina resta identica; il contorno tratteggiato che vedi durante la modifica non viene salvato. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Aggiungere link a PDF – Rendi cliccabile il testo, gratis",
    seoDescription:
      "Aggiungi link cliccabili a siti web ed email in qualsiasi area di un PDF, nel browser. Funziona in ogni lettore PDF. Gratis, privato, nessun upload.",
    keywords: [
      "inserire link in pdf",
      "aggiungere link a pdf",
      "inserire collegamento ipertestuale pdf",
      "link cliccabile pdf",
      "hyperlink pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Trascina sull’area cliccabile",
        description: "Poi scrivi l’indirizzo web, come example.com, oppure un indirizzo email.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia con i link funzionanti.",
      },
    ],
    features: [
      {
        title: "Link web ed email",
        description: "I link aprono un sito web o una nuova email all’indirizzo che inserisci.",
      },
      {
        title: "Invisibili sulla pagina",
        description: "La pagina resta identica; diventa solo cliccabile l’area.",
      },
      {
        title: "Funziona in ogni lettore",
        description: "I link PDF standard si aprono in Acrobat, nei browser, in Anteprima e nelle app per telefono.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Devo scrivere https://?",
        answer: "No. Scrivi example.com e https:// viene aggiunto. Un indirizzo email diventa un link mailto.",
      },
      {
        question: "Un link può portare a un’altra pagina del PDF?",
        answer: "Non ancora. Qui i link aprono siti web e indirizzi email.",
      },
      {
        question: "Perché il link non funziona nel mio visualizzatore?",
        answer:
          "Alcuni visualizzatori di immagini e le anteprime delle app di messaggistica non aprono i link dei PDF. Apri il file in un lettore PDF o in un browser.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "whiteout-pdf": {
    name: "Bianchetto PDF",
    shortName: "Bianchetto",
    tagline: "Copri parti di una pagina PDF con riquadri bianchi e, se vuoi, scrivici sopra. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Bianchetto PDF funziona come un correttore a nastro: trascina su una data sbagliata, un prezzo vecchio o una riga che non vuoi mostrare, e un riquadro bianco la copre. Aggiungi sopra un nuovo testo con lo strumento Testo per fare una correzione. Se la pagina non è bianca, scegli un colore uguale al suo. Il bianchetto copre soltanto il contenuto; il testo originale resta nel file e si può ancora copiare o trovare con una ricerca. Per eliminare definitivamente le informazioni private, usa Oscura PDF. Tutto avviene nel tuo browser, quindi il documento non lascia mai il tuo dispositivo.",
    seoTitle: "Bianchetto PDF – Correttore per PDF online, gratis",
    seoDescription:
      "Copri parti di un PDF con riquadri bianchi e scrivi sopra le correzioni, nel browser. Gratis, senza registrazione, nessun upload.",
    keywords: [
      "bianchetto pdf",
      "cancellare testo pdf",
      "coprire testo pdf",
      "correttore pdf",
      "sbianchettare pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Trascina su ciò che vuoi coprire",
        description: "Un riquadro bianco lo copre. Se serve, aggiungi sopra un nuovo testo con lo strumento Testo.",
      },
      {
        title: "Scarica il PDF",
        description: "Salva la copia corretta.",
      },
    ],
    features: [
      {
        title: "Scrivici sopra",
        description: "Usa il bianchetto insieme al testo per correggere una data, un nome o un numero.",
      },
      {
        title: "Uguale allo sfondo",
        description: "Scegli qualsiasi colore per le pagine che non sono bianche.",
      },
      {
        title: "Sposta e ridimensiona",
        description: "Regola ogni riquadro finché non copre esattamente ciò che vuoi.",
      },
      {
        title: "Modifica privata",
        description: "Il PDF viene modificato sul tuo dispositivo e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Il testo coperto sparisce davvero?",
        answer:
          "No. Il bianchetto lo nasconde, ma resta nel file, dove si può copiare o trovare con una ricerca. Usa Oscura PDF per eliminarlo.",
      },
      {
        question: "Posso cambiare una parola nel PDF?",
        answer: "Copri la parola con il bianchetto, poi scrivi sopra la nuova parola con lo strumento Testo.",
      },
      {
        question: "Funziona sui telefoni?",
        answer: "Sì. Tocca e trascina con il dito; per disegnare puoi usare il dito o un pennino.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "redact-pdf": {
    name: "Oscura PDF",
    shortName: "Oscura PDF",
    tagline: "Copri di nero le informazioni private di un PDF ed eliminale definitivamente dal file. Gratis e funziona sul tuo dispositivo.",
    intro:
      "Oscura PDF nasconde nomi, numeri di conto, indirizzi e altri dati privati prima che tu condivida un documento, e li elimina davvero. Trascina dei riquadri neri su ciò che deve sparire. Quando scarichi, ogni pagina con un oscuramento viene trasformata in un’immagine con i riquadri impressi, quindi il testo sottostante sparisce dal file: non si può copiare, cercare né recuperare togliendo il riquadro. Anche i valori dei moduli e i commenti di quelle pagine vengono eliminati. Le pagine senza oscuramenti restano come erano. Tutto avviene nel tuo browser, quindi il documento non viene mai caricato.",
    seoTitle: "Oscura PDF – Elimina i dati privati per sempre, gratis",
    seoDescription:
      "Oscura ed elimina definitivamente le informazioni private da un PDF, nel browser. Un vero oscuramento, non una semplice copertura. Gratis, nessun upload.",
    keywords: [
      "oscurare pdf",
      "oscurare testo pdf",
      "anonimizzare pdf",
      "censurare pdf",
      "rimuovere dati sensibili da pdf",
    ],
    howToSteps: [
      {
        title: "Apri il PDF",
        description: "Trascina o scegli un PDF.",
      },
      {
        title: "Trascina sulle informazioni private",
        description: "Copri con un riquadro nero ogni nome, numero o riga da eliminare.",
      },
      {
        title: "Scarica il PDF oscurato",
        description: "Controlla il risultato, poi condividi la copia oscurata, non l’originale.",
      },
    ],
    features: [
      {
        title: "Eliminato davvero",
        description: "Il testo coperto viene cancellato dal file, non nascosto sotto un riquadro.",
      },
      {
        title: "Anche moduli e commenti",
        description: "Anche i campi compilati e i commenti delle pagine oscurate vengono eliminati.",
      },
      {
        title: "Le altre pagine restano intatte",
        description: "Solo le pagine con oscuramenti vengono trasformate in immagini.",
      },
      {
        title: "Nessun upload",
        description: "I documenti privati vengono oscurati sul tuo dispositivo; nessun altro li vede.",
      },
    ],
    faqs: [
      {
        question: "Perché non riesco più a selezionare il testo nella pagina oscurata?",
        answer:
          "Per eliminare definitivamente il testo nascosto, l’intera pagina viene salvata come immagine. Il testo delle altre pagine resta selezionabile.",
      },
      {
        question: "Un rettangolo nero in un normale editor PDF è la stessa cosa?",
        answer:
          "No. Un semplice riquadro copre soltanto il testo, che si può ancora copiare o trovare con una ricerca. Questo strumento lo elimina.",
      },
      {
        question: "Viene eliminato anche altro?",
        answer:
          "Nelle pagine oscurate vengono eliminati anche campi modulo, commenti e link, e i tag di accessibilità del documento vengono rimossi perché possono ripetere il testo della pagina. Titolo e autore vengono mantenuti; per cancellarli usa Rimuovi metadati PDF.",
      },
      {
        question: "Il mio PDF viene caricato?",
        answer: "No. Il PDF viene aperto e salvato nel tuo browser, quindi resta sul tuo dispositivo.",
      },
    ],
  },
  "passport-photo-maker": {
    name: "Generatore di fototessere",
    shortName: "Fototessera",
    tagline: "Crea una foto per passaporto o visto nella misura giusta, con uno sfondo uniforme opzionale, e stampane diverse su un unico foglio.",
    intro:
      "Il Generatore di fototessere trasforma una foto qualsiasi in una foto per passaporto, visto o documento d’identità nella misura esatta che ti serve: 35 × 45 mm, 2 × 2 pollici, 33 × 48 mm o una misura personalizzata. Sposta e ingrandisci la foto finché la sommità della testa e il mento non si trovano sulle linee guida, sostituisci lo sfondo con un bianco, un grigio chiaro o un azzurro uniforme se serve, e scarica una foto a 300 DPI o un foglio di stampa per carta fotografica 4 × 6 pollici o A4, con le linee per ritagliare. Tutto avviene nel tuo browser, quindi la tua foto non viene mai caricata.",
    seoTitle: "Fototessera online – 35×45 mm, 2×2 in, gratis",
    seoDescription:
      "Fototessera online per passaporto e visto: 35×45 mm, 2×2 in o misura personalizzata, sfondo bianco e foglio di stampa 4×6 o A4. Gratis e privato.",
    keywords: [
      "fototessera online",
      "fototessera passaporto",
      "foto 35x45",
      "foto 2x2 per visto",
      "foto per visto online",
      "fototessere da stampare",
    ],
    howToSteps: [
      {
        title: "Aggiungi una foto",
        description: "Scegli una foto nitida, frontale, con luce uniforme ed espressione neutra.",
      },
      {
        title: "Scegli la misura",
        description: "Scegli 35 × 45 mm, 2 × 2 in, 33 × 48 mm o inserisci una misura personalizzata.",
      },
      {
        title: "Allinea la foto",
        description: "Trascina o usa i cursori in modo che la sommità della testa e il mento siano sulle linee tratteggiate.",
      },
      {
        title: "Imposta lo sfondo",
        description: "Scegli Mantieni o sostituisci lo sfondo con Bianco, Grigio chiaro o Azzurro.",
      },
      {
        title: "Scarica",
        description: "Salva Una foto o un Foglio di stampa per carta 4 × 6 in o A4, in JPG o PDF.",
      },
    ],
    features: [
      {
        title: "Misure comuni già pronte",
        description: "35 × 45 mm, 2 × 2 in e 33 × 48 mm, più qualsiasi misura personalizzata in millimetri.",
      },
      {
        title: "Guide per la testa",
        description: "Linee tratteggiate e un ovale mostrano dove deve stare la testa.",
      },
      {
        title: "Sfondi uniformi",
        description: "Un modello di IA sul tuo dispositivo sostituisce lo sfondo con bianco, grigio chiaro o azzurro.",
      },
      {
        title: "Fogli di stampa",
        description: "Riempi la carta fotografica 4 × 6 in o A4 di copie con le linee di taglio, a 300 DPI.",
      },
    ],
    faqs: [
      {
        question: "La mia foto sarà accettata?",
        answer:
          "Dipende dall’ufficio a cui presenti la domanda. Ogni paese stabilisce regole su misura, posizione della testa, sfondo, espressione e occhiali. Questo strumento imposta correttamente misura e impaginazione; controlla le regole ufficiali prima di stampare.",
      },
      {
        question: "Come stampo il foglio nella misura giusta?",
        answer:
          "Stampa al 100% (dimensioni effettive), non con “adatta alla pagina”. L’opzione PDF usa il formato esatto della carta, quindi le foto escono nella misura reale con qualsiasi stampante.",
      },
      {
        question: "Che risoluzione hanno le foto?",
        answer:
          "300 DPI, lo standard per la stampa fotografica. Una foto 35 × 45 mm è di 413 × 531 pixel.",
      },
      {
        question: "Come funziona la sostituzione dello sfondo?",
        answer:
          "Un modello di IA viene scaricato una volta (circa 16 MB) e funziona nel tuo browser per separarti dallo sfondo. Controlla i bordi intorno ai capelli prima di stampare.",
      },
      {
        question: "La mia foto viene caricata?",
        answer:
          "No. La foto viene elaborata nel tuo browser sul tuo dispositivo e nulla viene inviato a un server.",
      },
    ],
  },
  "signature-extractor": {
    name: "Estrattore di firma",
    shortName: "Firma PNG",
    tagline: "Trasforma la foto della tua firma in un PNG pulito con sfondo trasparente.",
    intro:
      "L’Estrattore di firma prende una foto o una scansione della tua firma su carta e la trasforma in un’immagine pulita del solo inchiostro su sfondo trasparente. Ignora le ombre e la luce irregolare delle foto fatte col telefono, rifila lo spazio vuoto intorno alla firma e può ricolorare l’inchiostro di nero o di blu. Usa il PNG con Firma PDF, in Word o in qualsiasi modulo che chieda un’immagine della firma. La foto viene elaborata nel tuo browser, quindi la tua firma non viene mai caricata.",
    seoTitle: "Estrarre la firma da una foto – PNG trasparente",
    seoDescription:
      "Firma trasparente in PNG: trasforma la foto della tua firma in un PNG senza sfondo nel browser. Rimuove carta e ombre, ritaglia e ricolora. Gratis e privato.",
    keywords: [
      "firma trasparente",
      "firma png",
      "estrarre firma da foto",
      "rimuovere sfondo firma",
      "firma digitale da foto",
    ],
    howToSteps: [
      {
        title: "Firma su carta bianca",
        description: "Usa una penna scura e scatta una foto con una buona luce, o scansiona la pagina.",
      },
      {
        title: "Aggiungi la foto",
        description: "Trascina o scegli la foto. La firma viene estratta subito.",
      },
      {
        title: "Rifinisci",
        description: "Regola la sensibilità e scegli inchiostro originale, nero o blu.",
      },
      {
        title: "Scarica",
        description: "Salva il PNG trasparente.",
      },
    ],
    features: [
      {
        title: "Gestisce le ombre",
        description: "Ogni punto viene confrontato con la carta intorno, quindi la luce irregolare non lascia macchie grigie.",
      },
      {
        title: "Bordi morbidi",
        description: "I bordi dei tratti sfumano dolcemente invece di apparire seghettati.",
      },
      {
        title: "Ritaglio automatico",
        description: "La carta vuota intorno alla firma viene rifilata.",
      },
      {
        title: "Privato",
        description: "La tua firma resta sul tuo dispositivo.",
      },
    ],
    faqs: [
      {
        question: "Come ottengo il risultato migliore?",
        answer:
          "Firma con una penna scura su carta bianca liscia e scatta la foto dritta, alla luce del giorno, senza che la tua ombra cada sulla pagina.",
      },
      {
        question: "Perché mancano parti della mia firma?",
        answer:
          "I tratti deboli o sottili possono sparire. Aumenta la sensibilità; se inizia a comparire la trama della carta, abbassala leggermente.",
      },
      {
        question: "Posso usarla per firmare un PDF?",
        answer:
          "Sì. In Firma PDF, scegli Immagine e seleziona il PNG che hai scaricato.",
      },
      {
        question: "La mia firma viene caricata?",
        answer:
          "No. Viene elaborata nel tuo browser e non viene mai inviata da nessuna parte.",
      },
    ],
  },
  "change-image-dpi": {
    name: "Cambia DPI immagine",
    shortName: "Cambia DPI",
    tagline: "Imposta i DPI di un JPG o PNG, ad esempio 300 DPI per la stampa o per i moduli, senza modificarne i pixel.",
    intro:
      "Cambia DPI immagine imposta il valore di risoluzione salvato in un file JPG o PNG, ad esempio 300 DPI per la stampa o il valore richiesto da un modulo di domanda. I pixel non vengono toccati, quindi qualità e peso del file restano gli stessi: cambia solo il formato di stampa, che lo strumento mostra in centimetri e pollici. Aggiorna entrambi i punti in cui un JPG può salvare i DPI, così Windows, Mac e le app di foto leggono il nuovo valore. Tutto funziona nel tuo browser, quindi l’immagine non viene mai caricata.",
    seoTitle: "Cambiare DPI immagine a 300 online – Gratis",
    seoDescription:
      "Cambiare DPI di un JPG o PNG a 300, 200, 72 o qualsiasi valore nel browser. I pixel non cambiano; vedi il formato di stampa. Gratis e privato.",
    keywords: [
      "cambiare dpi immagine",
      "convertire immagine a 300 dpi",
      "cambiare dpi foto",
      "aumentare dpi immagine",
      "impostare dpi",
      "convertitore dpi",
    ],
    howToSteps: [
      {
        title: "Aggiungi la tua immagine",
        description: "Trascina o scegli un JPG o PNG. WebP e HEIC vengono prima convertiti in JPG.",
      },
      {
        title: "Scegli i DPI",
        description: "Scegli 72, 96, 150, 200, 300 o 600, o digita un valore qualsiasi.",
      },
      {
        title: "Controlla il formato di stampa",
        description: "Vedi quanto verrà grande l’immagine stampata con quei DPI.",
      },
      {
        title: "Scarica",
        description: "Salva l’immagine con i nuovi DPI.",
      },
    ],
    features: [
      {
        title: "Nessuna perdita di qualità",
        description: "Cambia solo il valore dei DPI; i dati dell’immagine restano intatti.",
      },
      {
        title: "Letto ovunque",
        description: "Vengono aggiornate sia la risoluzione JFIF sia quella EXIF di un JPG, così ogni app mostra gli stessi DPI.",
      },
      {
        title: "Formato di stampa visibile",
        description: "Vedi il formato di stampa in centimetri e pollici prima di scaricare.",
      },
      {
        title: "Privato",
        description: "L’immagine viene modificata nel tuo browser e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Cambiare i DPI migliora la qualità?",
        answer:
          "No. I DPI sono solo un’etichetta che dice alle stampanti quanto stampare grande l’immagine. Per avere più dettagli servono più pixel, e nessuno strumento può davvero crearli.",
      },
      {
        question: "Un modulo richiede 200 DPI e una misura in centimetri. Cosa faccio?",
        answer:
          "Imposta qui i DPI, poi controlla il formato di stampa. Se non corrisponde, ridimensiona l’immagine alla misura in pixel richiesta dal modulo: centimetri ÷ 2,54 × DPI. Ad esempio 3,5 cm a 200 DPI sono 276 pixel.",
      },
      {
        question: "Perché la mia immagine dice “Non impostato”?",
        answer:
          "Molte foto del telefono e molti screenshot non salvano i DPI. La maggior parte delle app allora presume 72 o 96. Impostare un valore qui risolve il problema.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer:
          "No. La modifica avviene nel tuo browser sul tuo dispositivo.",
      },
    ],
  },
  "blur-background": {
    name: "Sfoca sfondo",
    shortName: "Sfoca sfondo",
    tagline: "Sfoca lo sfondo di una foto come la modalità ritratto della fotocamera, mantenendo nitida la persona. Funziona sul tuo dispositivo.",
    intro:
      "Sfoca sfondo dà a qualsiasi foto lo sfondo morbido e fuori fuoco della modalità ritratto di una fotocamera. Un modello di IA trova la persona sul tuo dispositivo, poi lo sfondo viene sfocato mentre il soggetto resta nitido, senza aloni sfocati attorno ai bordi. Un cursore regola l’intensità della sfocatura e salvi il risultato in JPG o PNG. Non viene caricato nulla: la foto e il modello restano nel tuo browser.",
    seoTitle: "Sfocare lo sfondo di una foto online – Effetto ritratto",
    seoDescription:
      "Sfocare lo sfondo di una foto online mantenendo nitida la persona, come in modalità ritratto. Intensità regolabile, nel browser, gratis e privato.",
    keywords: [
      "sfocare lo sfondo",
      "sfocare sfondo foto",
      "modalità ritratto online",
      "sfocare sfondo immagine",
      "effetto bokeh online",
      "sfondo sfocato",
    ],
    howToSteps: [
      {
        title: "Aggiungi una foto",
        description: "Trascina, scegli o incolla la foto di una persona. Funzionano anche le foto HEIC di iPhone.",
      },
      {
        title: "Attendi il rilevamento",
        description: "Il modello di IA trova la persona sul tuo dispositivo. La prima volta scarica circa 16 MB.",
      },
      {
        title: "Regola la sfocatura",
        description: "Sposta il cursore finché lo sfondo non ti sembra giusto.",
      },
      {
        title: "Scarica",
        description: "Salva la foto in JPG, oppure in PNG per la massima qualità.",
      },
    ],
    features: [
      {
        title: "Effetto ritratto",
        description: "Lo sfondo diventa morbido mentre la persona resta nitida.",
      },
      {
        title: "Nessun alone",
        description: "La sfocatura riempie l’area dietro al soggetto con lo sfondo circostante, così i bordi restano puliti.",
      },
      {
        title: "Regolabile",
        description: "Scegli qualsiasi livello, da un leggero ammorbidimento a una sfocatura forte.",
      },
      {
        title: "Privato",
        description: "La foto viene elaborata nel tuo browser e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Funziona con foto senza persone?",
        answer:
          "È pensato per le foto di persone. Animali e oggetti spesso funzionano, ma il modello può perderne alcune parti; in quei casi controlla i bordi prima di salvare.",
      },
      {
        question: "Perché la prima foto è più lenta?",
        answer:
          "Il modello di IA viene scaricato una volta (circa 16 MB) e resta nel tuo browser. Dopo, le foto vengono elaborate in pochi secondi.",
      },
      {
        question: "La mia foto perderà qualità?",
        answer:
          "La persona mantiene la risoluzione piena. Le foto molto grandi (oltre circa 16 megapixel) vengono prima ridotte per funzionare sui telefoni; la pagina ti avvisa quando succede.",
      },
      {
        question: "La mia foto viene caricata?",
        answer:
          "No. Il rilevamento del soggetto e la sfocatura avvengono sul tuo dispositivo.",
      },
    ],
  },
  "change-background": {
    name: "Cambia sfondo",
    shortName: "Cambia sfondo",
    tagline: "Sostituisci lo sfondo di una foto con un colore o un’altra immagine. Il soggetto viene ritagliato sul tuo dispositivo.",
    intro:
      "Cambia sfondo sostituisce lo sfondo di una foto con un colore pieno o un’immagine a tua scelta. Un modello di IA ritaglia la persona sul tuo dispositivo, poi la posiziona sul nuovo sfondo, adattato per riempire l’inquadratura. Scegli il bianco per un aspetto pulito da prodotto o da profilo, qualsiasi colore dal selettore, oppure usa una tua immagine come sfondo, e scarica in JPG o PNG. La foto non viene mai caricata.",
    seoTitle: "Cambiare sfondo foto online – Colore o immagine, gratis",
    seoDescription:
      "Cambiare lo sfondo di una foto con il bianco, un colore o una tua immagine. Il soggetto viene ritagliato nel browser. Gratis, privato, senza registrazione.",
    keywords: [
      "cambiare sfondo foto",
      "cambiare sfondo immagine",
      "sostituire sfondo foto",
      "foto sfondo bianco",
      "mettere sfondo a una foto",
      "cambia sfondo online",
    ],
    howToSteps: [
      {
        title: "Aggiungi una foto",
        description: "Trascina, scegli o incolla una foto. Funzionano anche le foto HEIC di iPhone.",
      },
      {
        title: "Attendi il ritaglio",
        description: "Il modello di IA separa il soggetto sul tuo dispositivo. La prima volta scarica circa 16 MB.",
      },
      {
        title: "Scegli lo sfondo",
        description: "Scegli un colore oppure usa un’immagine come nuovo sfondo.",
      },
      {
        title: "Scarica",
        description: "Salva la foto in JPG o PNG.",
      },
    ],
    features: [
      {
        title: "Colore o immagine",
        description: "Colori pronti, un selettore di colore o qualsiasi tua immagine.",
      },
      {
        title: "Riempie l’inquadratura",
        description: "Un’immagine di sfondo viene ridimensionata e centrata per coprire tutta la foto.",
      },
      {
        title: "Risoluzione piena",
        description: "Il risultato mantiene le dimensioni della tua foto.",
      },
      {
        title: "Privato",
        description: "Tutto avviene nel tuo browser; non viene caricato nulla.",
      },
    ],
    faqs: [
      {
        question: "Posso avere invece uno sfondo trasparente?",
        answer:
          "Sì: usa Rimuovi sfondo, che salva un PNG senza alcuno sfondo.",
      },
      {
        question: "Funziona con prodotti e animali?",
        answer:
          "Funziona meglio con le persone. Per prodotti, animali e oggetti, il modello Massima qualità di Rimuovi sfondo dà bordi più puliti; poi puoi aggiungere uno sfondo in qualsiasi editor.",
      },
      {
        question: "Perché la prima foto è più lenta?",
        answer:
          "Il modello di IA viene scaricato una volta (circa 16 MB) e resta nel tuo browser, quindi le foto successive richiedono solo pochi secondi.",
      },
      {
        question: "La mia foto viene caricata?",
        answer:
          "No. Il ritaglio e il nuovo sfondo vengono creati sul tuo dispositivo.",
      },
    ],
  },
  "image-to-text": {
    name: "Da immagine a testo",
    shortName: "Immagine in testo",
    tagline: "Copia il testo da una foto, uno screenshot o una scansione (OCR) in 10 lingue. L’immagine viene letta sul tuo dispositivo.",
    intro:
      "Da immagine a testo legge le parole in una foto, uno screenshot o una pagina scansionata e te le restituisce come testo da copiare, modificare o salvare in un file TXT. Usa Tesseract OCR nel tuo browser, con inglese, spagnolo, francese, tedesco, portoghese, italiano, giapponese, coreano, indonesiano e turco. Una barra di avanzamento mostra a che punto è arrivato e, se l’immagine è troppo sfocata per un risultato affidabile, la pagina te lo dice. L’immagine non viene mai caricata.",
    seoTitle: "Immagine in testo – OCR online gratis",
    seoDescription:
      "Immagine in testo: estrai il testo da immagini, screenshot e scansioni con OCR gratis in 10 lingue. Copia o scarica il testo. Nel browser, nulla viene caricato.",
    keywords: [
      "immagine in testo",
      "estrarre testo da immagine",
      "ocr online",
      "da foto a testo",
      "convertire immagine in testo",
      "copiare testo da immagine",
    ],
    howToSteps: [
      {
        title: "Aggiungi un’immagine",
        description: "Trascina, scegli o incolla una foto, uno screenshot o una scansione con del testo.",
      },
      {
        title: "Controlla la lingua",
        description: "La lingua della pagina viene scelta per te; cambiala se il testo è in un’altra.",
      },
      {
        title: "Attendi il testo",
        description: "Il testo compare appena è stato letto. Puoi correggerlo direttamente nel riquadro.",
      },
      {
        title: "Copia o scarica",
        description: "Copia il testo oppure salvalo come file TXT.",
      },
    ],
    features: [
      {
        title: "10 lingue",
        description: "Inclusi giapponese e coreano. Ogni lingua scarica da 1 a 4 MB una sola volta.",
      },
      {
        title: "Risultato modificabile",
        description: "Correggi qualsiasi parola nel riquadro prima di copiare o salvare.",
      },
      {
        title: "Onesto sulla qualità",
        description: "Compare un avviso quando l’immagine è troppo sfocata o piccola per essere letta in modo affidabile.",
      },
      {
        title: "Privato",
        description: "L’immagine viene letta nel tuo browser e non viene mai caricata.",
      },
    ],
    faqs: [
      {
        question: "Legge la scrittura a mano?",
        answer:
          "Non in modo affidabile. È pensato per il testo stampato, come documenti, screenshot, cartelli ed etichette. Una calligrafia ordinata a volte funziona, ma aspettati degli errori.",
      },
      {
        question: "Come ottengo il risultato migliore?",
        answer:
          "Usa una foto nitida e ben illuminata, scattata frontalmente, con il testo grande nell’inquadratura. Gli screenshot vengono letti quasi alla perfezione.",
      },
      {
        question: "Può leggere un PDF?",
        answer:
          "Prima converti la pagina in immagine con Da PDF a JPG, poi aggiungi qui quell’immagine.",
      },
      {
        question: "La mia immagine viene caricata?",
        answer:
          "No. Il testo viene letto sul tuo dispositivo; l’immagine e il testo non lasciano mai il tuo browser.",
      },
    ],
  },
  "qr-code-generator": {
    name: "Generatore di codici QR",
    shortName: "Generatore QR",
    tagline: "Crea un codice QR per link, testo, rete Wi-Fi, email, numero di telefono o contatto, con i tuoi colori e il tuo logo, in PNG o SVG.",
    intro:
      "Generatore di codici QR crea un codice QR per un link web, un testo semplice, l’accesso a una rete Wi-Fi, un’email, un numero di telefono o un biglietto da visita. Scegli i colori, le dimensioni e la correzione degli errori, aggiungi il tuo logo al centro e scaricalo come immagine PNG o file SVG, che resta nitido a qualsiasi dimensione. Ogni codice viene verificato rileggendolo, così sai che funziona prima di stamparlo. I codici vengono creati nel tuo browser, gratis, senza registrazione e senza scadenza.",
    seoTitle: "Generatore di codici QR gratis – Logo, colori, PNG e SVG",
    seoDescription:
      "Generatore di codici QR gratis per link, Wi-Fi, email, telefono o contatti, con colori e logo. Scarica PNG o SVG. Senza registrazione, non scadono mai.",
    keywords: [
      "generatore di codici qr",
      "generatore qr code",
      "creare qr code",
      "qr code gratis",
      "qr code con logo",
      "qr code wifi",
    ],
    howToSteps: [
      {
        title: "Scegli il contenuto",
        description: "Scegli link, testo, Wi-Fi, email, telefono o contatto.",
      },
      {
        title: "Inserisci i dati",
        description: "Il codice QR si aggiorna mentre scrivi.",
      },
      {
        title: "Personalizzalo",
        description: "Imposta colori e dimensioni e, se vuoi, aggiungi un logo.",
      },
      {
        title: "Scarica",
        description: "Salvalo in PNG, oppure in SVG per la stampa e i formati grandi.",
      },
    ],
    features: [
      {
        title: "Verificato prima di salvare",
        description: "Il codice viene riletto automaticamente e vieni avvisato se potrebbe non essere letto.",
      },
      {
        title: "Logo e colori",
        description: "Aggiungi il tuo logo; viene usata la correzione degli errori più forte per mantenere il codice leggibile.",
      },
      {
        title: "PNG e SVG",
        description: "L’SVG resta nitido a qualsiasi dimensione, ideale per la stampa.",
      },
      {
        title: "Non scade mai",
        description: "Le informazioni sono salvate nel codice stesso, non su un server, quindi funziona per sempre.",
      },
    ],
    faqs: [
      {
        question: "Questi codici QR scadono?",
        answer:
          "No. Sono codici statici: tutto è salvato nel disegno stesso del codice, senza reindirizzamenti attraverso il nostro server, quindi continuano a funzionare per sempre.",
      },
      {
        question: "Posso tracciare le scansioni o cambiare il link in seguito?",
        answer:
          "No. Servirebbe un codice dinamico che fa passare ogni scansione da un server, e questo strumento non lo fa. Il lato positivo è che nessuno vede chi scansiona il tuo codice.",
      },
      {
        question: "Come funziona il codice Wi-Fi?",
        answer:
          "I telefoni che lo scansionano propongono di connettersi alla rete con il nome e la password che hai inserito. La password è salvata nel codice, quindi condividilo solo con le persone a cui la daresti.",
      },
      {
        question: "Quale correzione degli errori devo scegliere?",
        answer:
          "M va bene per la maggior parte degli usi. H resiste a più danni e viene usata automaticamente con un logo; L crea il codice più piccolo per i testi lunghi.",
      },
      {
        question: "Ciò che scrivo viene inviato da qualche parte?",
        answer:
          "No. Il codice viene creato nel tuo browser.",
      },
    ],
  },
  "qr-code-reader": {
    name: "Lettore di codici QR",
    shortName: "Lettore QR",
    tagline: "Leggi un codice QR da un’immagine o dalla fotocamera e vedi il link, la password Wi-Fi o il contatto che contiene prima di aprirlo.",
    intro:
      "Lettore di codici QR decodifica i codici QR da una foto, da uno screenshot o dalla tua fotocamera. Ti mostra cosa contiene il codice prima che succeda qualsiasi cosa: l’indirizzo web completo, una rete Wi-Fi e la sua password, un’email, un numero di telefono o un biglietto da visita che puoi salvare. I link non si aprono mai da soli, così puoi controllarli prima: un’abitudine utile, perché i codici QR vengono spesso usati per mandare le persone su siti falsi. Le immagini e i fotogrammi della fotocamera vengono letti sul tuo dispositivo.",
    seoTitle: "Lettore di codici QR online – Da immagine o fotocamera",
    seoDescription:
      "Lettore di codici QR online: scansiona un codice da immagine, screenshot o fotocamera nel browser. Vedi link, password Wi-Fi o contatto prima di aprirlo.",
    keywords: [
      "lettore codici qr",
      "leggere qr code da immagine",
      "scanner qr code online",
      "leggere codice qr",
      "scanner qr",
      "decodificare qr code",
    ],
    howToSteps: [
      {
        title: "Aggiungi il codice",
        description: "Trascina o scegli un’immagine con un codice QR, oppure scansionalo con la fotocamera.",
      },
      {
        title: "Vedi cosa contiene",
        description: "Link, dati Wi-Fi, email, numeri di telefono e contatti vengono mostrati in modo chiaro.",
      },
      {
        title: "Controlla prima di aprire",
        description: "Leggi l’indirizzo completo prima di aprire un link.",
      },
      {
        title: "Usalo",
        description: "Copia il testo, apri il link, chiama, scrivi un’email o salva il contatto.",
      },
    ],
    features: [
      {
        title: "Immagine o fotocamera",
        description: "Leggi i codici in screenshot e foto, oppure inquadrane uno con la fotocamera.",
      },
      {
        title: "Sicuro di default",
        description: "I link non si aprono mai automaticamente; prima vedi l’indirizzo completo.",
      },
      {
        title: "Wi-Fi e contatti",
        description: "Mostra le password delle reti e ti permette di salvare i biglietti da visita.",
      },
      {
        title: "Privato",
        description: "Le immagini e i fotogrammi della fotocamera vengono elaborati nel tuo browser e non vengono mai caricati.",
      },
    ],
    faqs: [
      {
        question: "Come scansiono un codice QR che si trova sul mio schermo?",
        answer:
          "Fai uno screenshot e aggiungilo qui; non ti serve un secondo dispositivo.",
      },
      {
        question: "Perché dovrei controllare prima i link?",
        answer:
          "I codici QR su manifesti, parchimetri ed email a volte vengono sostituiti con altri che portano a siti falsi. Assicurati che l’indirizzo sia quello che ti aspetti prima di aprirlo o di inserire qualsiasi dato.",
      },
      {
        question: "La fotocamera non si avvia. Cosa posso fare?",
        answer:
          "Consenti l’accesso alla fotocamera per questo sito nelle impostazioni del browser, oppure scatta una foto del codice e aggiungi l’immagine.",
      },
      {
        question: "Le mie immagini o la fotocamera vengono inviate da qualche parte?",
        answer:
          "No. Tutto viene letto sul tuo dispositivo.",
      },
    ],
  },
  "barcode-generator": {
    name: "Generatore di codici a barre",
    shortName: "Generatore codici a barre",
    tagline: "Crea codici a barre Code 128, EAN, UPC, ISBN, Code 39, ITF-14, GS1-128, Data Matrix, PDF417 e Aztec in PNG o SVG. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Generatore di codici a barre crea i codici a barre che si stampano davvero: Code 128 per etichette di spedizione e di magazzino, EAN e UPC per i prodotti, ISBN per i libri, Code 39 per componenti e badge, ITF-14 per i cartoni, GS1-128 per la logistica e i codici 2D Data Matrix, PDF417 e Aztec. Scrivi il numero o il testo e il codice a barre compare subito. Le cifre di controllo vengono aggiunte per te e gli errori vengono segnalati mentre scrivi. Ogni codice a barre viene riletto con un motore di scansione prima che tu lo scarichi in PNG o SVG. Tutto avviene nel tuo browser.",
    seoTitle: "Generatore di codici a barre gratis – PNG e SVG",
    seoDescription:
      "Crea codici a barre Code 128, EAN-13, UPC, ISBN, Code 39, Data Matrix e PDF417 nel browser. Cifra di controllo aggiunta, scansione verificata, PNG o SVG.",
    keywords: [
      "generatore codici a barre",
      "generatore di codici a barre gratis",
      "creare codice a barre",
      "generatore code 128",
      "codice a barre online",
    ],
    howToSteps: [
      {
        title: "Scegli il tipo di codice a barre",
        description: "Code 128 va bene per la maggior parte delle etichette; scegli EAN o UPC per i prodotti e ISBN per i libri.",
      },
      {
        title: "Scrivi il numero o il testo",
        description: "Il codice a barre compare mentre scrivi. I problemi, come una cifra di controllo sbagliata, vengono spiegati.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o in SVG per la stampa.",
      },
    ],
    features: [
      {
        title: "Controllato mentre scrivi",
        description: "Lunghezze sbagliate, lettere in codici solo numerici e cifre di controllo errate vengono segnalate prima del download.",
      },
      {
        title: "Scansione verificata",
        description: "Ogni codice a barre viene riletto con un motore di scansione, così sai che funziona prima di stamparlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
      {
        title: "Creato sul tuo dispositivo",
        description: "I codici vengono disegnati nel browser; niente di ciò che scrivi viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Quale tipo di codice a barre devo usare?",
        answer:
          "Per le tue etichette, l’inventario o le spedizioni, Code 128: contiene lettere e cifre e ogni scanner lo legge. Per i prodotti venduti nei negozi, EAN-13 (o UPC-A in Nord America). Per i libri, ISBN.",
      },
      {
        question: "Devo registrare il numero?",
        answer:
          "Per vendere un prodotto nei negozi, sì: i numeri EAN e UPC vengono rilasciati da GS1, l’organizzazione che gestisce il sistema. Per il tuo magazzino, gli scaffali o un uso interno va bene qualsiasi numero.",
      },
      {
        question: "Quanto grande devo stamparlo?",
        answer:
          "Mantieni le barre nitide e lascia loro spazio: stampa al 100% (senza deformarlo), lascia un margine bianco intorno al codice e usa barre scure su sfondo chiaro.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "ean-barcode-generator": {
    name: "Generatore di codici a barre EAN",
    shortName: "Codice EAN",
    tagline: "Crea codici a barre EAN-13 ed EAN-8 per i prodotti, con la cifra di controllo aggiunta per te. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "EAN-13 è il codice a barre presente sui prodotti nei negozi di tutto il mondo, ed EAN-8 è la sua versione corta per le confezioni piccole. Scrivi le prime 12 cifre (o 7 per EAN-8) e la cifra di controllo viene calcolata e aggiunta; se le scrivi tutte e 13, lo strumento conferma che l’ultima cifra è corretta. Il codice a barre viene disegnato secondo lo standard, con le cifre sotto, e riletto con un motore di scansione prima che tu lo salvi in PNG o SVG. Non viene caricato nulla.",
    seoTitle: "Generatore EAN-13 gratis – Cifra di controllo inclusa",
    seoDescription:
      "Crea codici a barre EAN-13 ed EAN-8 nel browser. Cifra di controllo calcolata per te, scansione verificata, PNG o SVG per la stampa. Gratis, nulla caricato.",
    keywords: [
      "generatore codice a barre ean",
      "generatore ean 13",
      "codice a barre ean-13",
      "codice a barre ean-8",
      "creare codice a barre prodotto",
    ],
    howToSteps: [
      {
        title: "Scrivi il numero EAN",
        description: "12 cifre per EAN-13 o 7 per EAN-8; la cifra di controllo viene aggiunta. Cambia tipo dall’elenco.",
      },
      {
        title: "Regola le dimensioni",
        description: "Imposta larghezza e altezza delle barre per la tua etichetta.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG, o in SVG per la grafica della confezione.",
      },
    ],
    features: [
      {
        title: "Cifra di controllo calcolata",
        description: "Ometti l’ultima cifra e viene calcolata; scrivila e viene verificata.",
      },
      {
        title: "Scansione verificata",
        description: "Ogni codice a barre viene riletto con un motore di scansione, così sai che funziona prima di stamparlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
      {
        title: "Creato sul tuo dispositivo",
        description: "I codici vengono disegnati nel browser; niente di ciò che scrivi viene caricato.",
      },
    ],
    faqs: [
      {
        question: "Devo registrare il numero?",
        answer:
          "Per vendere un prodotto nei negozi, sì: i numeri EAN e UPC vengono rilasciati da GS1, l’organizzazione che gestisce il sistema. Per il tuo magazzino, gli scaffali o un uso interno va bene qualsiasi numero.",
      },
      {
        question: "Che differenza c’è tra EAN-13 e UPC-A?",
        answer:
          "Fanno parte dello stesso sistema: un numero UPC-A è un EAN-13 con uno 0 iniziale. I negozi di tutto il mondo li leggono entrambi. Usa UPC-A se te lo chiede il tuo rivenditore, altrimenti EAN-13.",
      },
      {
        question: "Quanto grande devo stamparlo?",
        answer:
          "Mantieni le barre nitide e lascia loro spazio: stampa al 100% (senza deformarlo), lascia un margine bianco intorno al codice e usa barre scure su sfondo chiaro.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "upc-barcode-generator": {
    name: "Generatore di codici a barre UPC",
    shortName: "Codice UPC",
    tagline: "Crea codici a barre UPC-A e UPC-E per i prodotti destinati a Stati Uniti e Canada, con la cifra di controllo aggiunta. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "UPC-A è il codice a barre a 12 cifre dei prodotti venduti negli Stati Uniti e in Canada, e UPC-E è la sua forma compressa per articoli piccoli come lattine e cosmetici. Scrivi le prime 11 cifre di un UPC-A e la cifra di controllo viene aggiunta; scrivile tutte e 12 e viene verificata. UPC-E accetta 6 cifre, oppure da 7 a 8 che iniziano con 0 o 1. Ogni codice a barre viene disegnato secondo lo standard, riletto con un motore di scansione e salvato in PNG o SVG. Tutto avviene nel tuo browser.",
    seoTitle: "Generatore di codici a barre UPC – UPC-A e UPC-E gratis",
    seoDescription:
      "Crea codici a barre UPC-A e UPC-E nel browser con la cifra di controllo aggiunta. Scansione verificata, PNG o SVG per le confezioni. Gratis, nulla caricato.",
    keywords: [
      "generatore codice a barre upc",
      "generatore upc-a",
      "creare codice upc",
      "codice a barre upc-e",
      "codice a barre upc gratis",
    ],
    howToSteps: [
      {
        title: "Scrivi il numero UPC",
        description: "11 cifre per UPC-A, oppure un numero UPC-E; scegli il tipo dall’elenco.",
      },
      {
        title: "Regola le dimensioni",
        description: "Imposta larghezza e altezza delle barre in base alla confezione.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG, o in SVG per la stampa.",
      },
    ],
    features: [
      {
        title: "Cifra di controllo calcolata",
        description: "L’ultima cifra viene calcolata o verificata per te.",
      },
      {
        title: "UPC-E per articoli piccoli",
        description: "Crea la versione corta UPC-E per lattine, tubetti e scatoline.",
      },
      {
        title: "Scansione verificata",
        description: "Ogni codice a barre viene riletto con un motore di scansione, così sai che funziona prima di stamparlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
    ],
    faqs: [
      {
        question: "Devo registrare il numero?",
        answer:
          "Per vendere un prodotto nei negozi, sì: i numeri EAN e UPC vengono rilasciati da GS1, l’organizzazione che gestisce il sistema. Per il tuo magazzino, gli scaffali o un uso interno va bene qualsiasi numero.",
      },
      {
        question: "Quando devo usare UPC-E?",
        answer:
          "Solo quando la confezione è troppo piccola per UPC-A e il tuo numero può essere compresso; i numeri UPC-E iniziano con 0 o 1.",
      },
      {
        question: "Quanto grande devo stamparlo?",
        answer:
          "Mantieni le barre nitide e lascia loro spazio: stampa al 100% (senza deformarlo), lascia un margine bianco intorno al codice e usa barre scure su sfondo chiaro.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "isbn-barcode-generator": {
    name: "Generatore di codici a barre ISBN",
    shortName: "Codice ISBN",
    tagline: "Crea il codice a barre per la quarta di copertina di un libro dal suo ISBN-13 o ISBN-10. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Il codice a barre sul retro di un libro è il suo ISBN scritto come EAN-13. Scrivi il tuo ISBN-13, o un vecchio ISBN-10 che viene convertito per te, e il codice a barre compare con la cifra di controllo verificata. Scrivi l’ISBN con i trattini, come è stampato nella pagina del copyright, e la riga dell’ISBN viene stampata sopra le barre come si aspettano editori e librerie. Scaricalo in SVG per chi progetta la copertina, oppure in PNG. Tutto avviene nel tuo browser.",
    seoTitle: "Generatore codice a barre ISBN gratis – Per libri, in SVG",
    seoDescription:
      "Crea nel browser il codice a barre ISBN per la copertina del libro: ISBN-13 o ISBN-10, cifra di controllo verificata, SVG per la stampa. Gratis, nulla caricato.",
    keywords: [
      "generatore codice a barre isbn",
      "codice a barre libro",
      "codice a barre isbn",
      "da isbn a codice a barre",
      "codice a barre isbn gratis",
    ],
    howToSteps: [
      {
        title: "Scrivi l’ISBN",
        description: "Usa i trattini della pagina del copyright per stampare la riga dell’ISBN sopra le barre.",
      },
      {
        title: "Controlla l’anteprima",
        description: "La cifra di controllo viene verificata e il codice a barre viene testato con una scansione.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in SVG per chi progetta la copertina, oppure in PNG.",
      },
    ],
    features: [
      {
        title: "ISBN-10 convertito",
        description: "Un vecchio ISBN-10 viene trasformato nell’ISBN-13 di cui il codice a barre ha bisogno.",
      },
      {
        title: "Riga ISBN sopra le barre",
        description: "Con i trattini, l’ISBN leggibile viene stampato sopra il codice a barre.",
      },
      {
        title: "Scansione verificata",
        description: "Ogni codice a barre viene riletto con un motore di scansione, così sai che funziona prima di stamparlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
    ],
    faqs: [
      {
        question: "Dove ottengo un ISBN?",
        answer:
          "Dall’agenzia ISBN del tuo Paese, oppure tramite il tuo editore o la piattaforma di self-publishing. Questo strumento disegna il codice a barre per un ISBN che hai già.",
      },
      {
        question: "Posso aggiungere il prezzo (il piccolo codice a barre a destra)?",
        answer:
          "Non ancora. L’add-on di prezzo a 5 cifre usato negli Stati Uniti non è incluso.",
      },
      {
        question: "Quanto grande devo stamparlo?",
        answer:
          "Mantieni le barre nitide e lascia loro spazio: stampa al 100% (senza deformarlo), lascia un margine bianco intorno al codice e usa barre scure su sfondo chiaro.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "data-matrix-generator": {
    name: "Generatore di Data Matrix",
    shortName: "Data Matrix",
    tagline: "Crea codici Data Matrix per componenti, etichette e confezioni da un testo o un link. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Data Matrix è un piccolo codice 2D quadrato che contiene molte informazioni in pochissimo spazio, ed è per questo che si usa su componenti elettronici, confezioni di farmaci, campioni di laboratorio ed etichette di spedizione. Scrivi il testo, un numero di serie o un link e il codice compare subito, con le dimensioni date dalla larghezza del modulo che scegli. Lo leggono le fotocamere dei telefoni e gli scanner industriali, e ogni codice viene riletto prima che tu lo scarichi in PNG o SVG. Tutto avviene nel tuo browser.",
    seoTitle: "Generatore Data Matrix gratis – Codice 2D in PNG e SVG",
    seoDescription:
      "Crea codici Data Matrix da testo, numeri di serie o link nel browser. Scansione verificata, PNG o SVG, a qualsiasi dimensione. Gratis, nulla viene caricato.",
    keywords: [
      "generatore data matrix",
      "generatore codice datamatrix",
      "codice data matrix",
      "generatore codici 2d",
      "datamatrix online",
    ],
    howToSteps: [
      {
        title: "Scrivi il contenuto",
        description: "Testo, un numero di serie o un link.",
      },
      {
        title: "Scegli le dimensioni",
        description: "Imposta la larghezza del modulo; Data Matrix resta leggibile anche stampato molto piccolo.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o SVG.",
      },
    ],
    features: [
      {
        title: "Sta in poco spazio",
        description: "Contiene molto più di un codice a barre 1D in un quadratino.",
      },
      {
        title: "Qualsiasi lingua",
        description: "Il testo in qualsiasi lingua viene memorizzato in modo che gli scanner lo rileggano correttamente.",
      },
      {
        title: "Scansione verificata",
        description: "Ogni codice a barre viene riletto con un motore di scansione, così sai che funziona prima di stamparlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
    ],
    faqs: [
      {
        question: "Data Matrix o codice QR?",
        answer:
          "Sono entrambi codici quadrati. Data Matrix resta leggibile a dimensioni più piccole ed è lo standard su componenti e farmaci; i codici QR sono quelli che la maggior parte dei telefoni si aspetta per i link.",
      },
      {
        question: "I telefoni leggono i Data Matrix?",
        answer:
          "Molte app di scansione per telefono sì, e anche Google Lens. L’app fotocamera integrata di alcuni telefoni legge solo i codici QR.",
      },
      {
        question: "Quanto grande devo stamparlo?",
        answer:
          "Mantieni le barre nitide e lascia loro spazio: stampa al 100% (senza deformarlo), lascia un margine bianco intorno al codice e usa barre scure su sfondo chiaro.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "pdf417-generator": {
    name: "Generatore di codici a barre PDF417",
    shortName: "PDF417",
    tagline: "Crea codici a barre PDF417, il codice impilato usato su biglietti, documenti d’identità e documenti di spedizione. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "PDF417 è il codice a barre largo e impilato che vedi su carte d’imbarco, patenti di guida e documenti di spedizione. Contiene centinaia di caratteri e gli scanner riescono a leggerlo anche quando una parte è danneggiata. Scrivi o incolla il testo e il codice a barre compare; scegli la larghezza del modulo adatta al tuo layout, poi scaricalo in PNG o SVG dopo che è stato riletto con un motore di scansione. Tutto avviene nel tuo browser, quindi i dati non lasciano mai il tuo dispositivo.",
    seoTitle: "Generatore di codici a barre PDF417 gratis – PNG e SVG",
    seoDescription:
      "Crea codici a barre PDF417 nel browser per biglietti, documenti d’identità e altri documenti. Testi lunghi, scansione verificata, PNG o SVG. Gratis.",
    keywords: [
      "generatore pdf417",
      "generatore codice a barre pdf417",
      "codice a barre pdf 417",
      "codice a barre impilato",
      "codice a barre carta d’imbarco",
    ],
    howToSteps: [
      {
        title: "Scrivi o incolla il testo",
        description: "PDF417 contiene testi lunghi, come diversi campi di un modulo.",
      },
      {
        title: "Scegli le dimensioni",
        description: "Imposta la larghezza del modulo per il tuo biglietto o documento.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o SVG.",
      },
    ],
    features: [
      {
        title: "Contiene testi lunghi",
        description: "Centinaia di caratteri in un solo codice a barre.",
      },
      {
        title: "Resistente ai danni",
        description: "La correzione degli errori integrata lo mantiene leggibile anche se graffiato.",
      },
      {
        title: "Scansione verificata",
        description: "Ogni codice a barre viene riletto con un motore di scansione, così sai che funziona prima di stamparlo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
    ],
    faqs: [
      {
        question: "Posso creare il codice a barre di una patente di guida?",
        answer:
          "PDF417 è il tipo di codice a barre usato, ma i documenti d’identità ufficiali seguono formati rigorosi e vengono rilasciati dalle autorità. Usalo per i tuoi biglietti, etichette e documenti.",
      },
      {
        question: "Quali scanner leggono PDF417?",
        answer:
          "La maggior parte degli scanner 2D e molte app di scansione per telefono.",
      },
      {
        question: "Quanto grande devo stamparlo?",
        answer:
          "Mantieni le barre nitide e lascia loro spazio: stampa al 100% (senza deformarlo), lascia un margine bianco intorno al codice e usa barre scure su sfondo chiaro.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "barcode-scanner": {
    name: "Lettore di codici a barre",
    shortName: "Lettore codici a barre",
    tagline: "Leggi EAN, UPC, Code 128, Code 39, Data Matrix, PDF417, codici QR e altri da una foto o dalla fotocamera. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Lettore di codici a barre legge i codici a barre da una foto, da uno screenshot o dalla tua fotocamera: codici prodotto (EAN e UPC), ISBN sui libri, etichette Code 128 e Code 39, cartoni ITF, GS1 DataBar e codici 2D come Data Matrix, PDF417, Aztec e codici QR. Trova più codici in un’unica immagine e mostra ciascuno con il suo tipo, pronto da copiare. L’immagine della fotocamera e le foto vengono elaborate nel tuo browser e non vengono mai caricate.",
    seoTitle: "Lettore di codici a barre online – Da foto o fotocamera",
    seoDescription:
      "Scansiona codici EAN, UPC, Code 128, Data Matrix, PDF417 e QR da una foto o dalla fotocamera, nel browser. Gratis, privato, nulla viene caricato.",
    keywords: [
      "lettore codici a barre online",
      "leggere codice a barre da immagine",
      "scanner codici a barre",
      "leggere codice a barre da foto",
      "lettore codice a barre",
    ],
    howToSteps: [
      {
        title: "Aggiungi una foto o usa la fotocamera",
        description: "Trascina un’immagine, incolla uno screenshot o inquadra il codice a barre con la fotocamera.",
      },
      {
        title: "Leggi il risultato",
        description: "Ogni codice a barre trovato viene mostrato con il suo tipo, come EAN-13 o Data Matrix.",
      },
      {
        title: "Copialo",
        description: "Copia il numero o il testo, oppure apri il link che contiene.",
      },
    ],
    features: [
      {
        title: "Decine di tipi",
        description: "Codici a barre 1D, codici 2D e codici QR in un unico lettore.",
      },
      {
        title: "Più codici insieme",
        description: "Trova più di un codice a barre in un’immagine.",
      },
      {
        title: "Fotocamera o foto",
        description: "Scansiona dal vivo con la fotocamera o da qualsiasi immagine salvata.",
      },
      {
        title: "Privato",
        description: "Le immagini e i fotogrammi della fotocamera vengono letti sul tuo dispositivo e non vengono mai caricati.",
      },
    ],
    faqs: [
      {
        question: "Perché il mio codice a barre non viene trovato?",
        answer:
          "Assicurati che sia a fuoco, ben illuminato e che occupi buona parte dell’immagine, senza riflessi forti. I codici a barre molto piccoli o sfocati non si possono leggere.",
      },
      {
        question: "Può cercare il prodotto?",
        answer:
          "No. Legge il numero contenuto nel codice a barre; non cerca nei database di prodotti, quindi niente di ciò che scansioni viene inviato da nessuna parte.",
      },
      {
        question: "La fotocamera ha bisogno di un permesso?",
        answer:
          "Sì, il browser lo chiede una volta. Il video resta sul tuo dispositivo e si ferma appena viene trovato un codice.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Le immagini vengono lette nel tuo browser e restano sul tuo dispositivo.",
      },
    ],
  },
  "wifi-qr-code-generator": {
    name: "Generatore di codici QR Wi-Fi",
    shortName: "Codice QR Wi-Fi",
    tagline: "Crea un codice QR che gli ospiti scansionano per connettersi al tuo Wi-Fi senza digitare la password. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Un codice QR Wi-Fi permette a ospiti, clienti e familiari di connettersi alla tua rete inquadrandolo con la fotocamera del telefono: niente più password lunghe da dettare lettera per lettera. Inserisci il nome della rete e la password, scegli il tipo di sicurezza e il codice compare subito. iPhone e telefoni Android lo riconoscono con la fotocamera integrata. Stampalo per il frigorifero, il tavolo di un bar o una sala riunioni. La password viene inserita nel codice nel tuo browser e non viene mai caricata.",
    seoTitle: "QR code Wi-Fi gratis – Condividi il Wi-Fi senza password",
    seoDescription:
      "Crea un codice QR Wi-Fi nel browser: gli ospiti si connettono alla tua rete scansionandolo. Funziona con le fotocamere di iPhone e Android. Gratis.",
    keywords: [
      "qr code wifi",
      "generatore qr code wifi",
      "qr code password wifi",
      "condividere wifi con qr code",
      "creare qr code wi-fi",
    ],
    howToSteps: [
      {
        title: "Inserisci i dati della rete",
        description: "Nome della rete (SSID), password e tipo di sicurezza.",
      },
      {
        title: "Personalizzalo",
        description: "Scegli i colori o aggiungi un logo, se vuoi.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o SVG, poi stampalo o aggiungilo alla tua grafica.",
      },
    ],
    features: [
      {
        title: "Funziona con la fotocamera del telefono",
        description: "Le fotocamere di iPhone e Android propongono di connettersi alla rete quando lo inquadrano.",
      },
      {
        title: "Verificato prima del salvataggio",
        description: "Il codice QR viene riletto appena creato, così sai che si scansiona.",
      },
      {
        title: "I tuoi colori e il tuo logo",
        description: "Scegli i colori e aggiungi un logo al centro; la correzione degli errori viene aumentata così si legge comunque.",
      },
      {
        title: "Privato",
        description: "Il codice viene creato nel tuo browser. I tuoi dati non vengono caricati né salvati.",
      },
    ],
    faqs: [
      {
        question: "È sicuro stampare la password del Wi-Fi?",
        answer:
          "Chiunque scansioni il codice può connettersi alla rete, proprio come se gli avessi detto la password. Nei luoghi pubblici usa una rete ospiti.",
      },
      {
        question: "Quale tipo di sicurezza scelgo?",
        answer:
          "WPA/WPA2/WPA3 per quasi tutti i router moderni. WEP solo per quelli molto vecchi; Nessuna per le reti senza password.",
      },
      {
        question: "Il codice QR scade?",
        answer:
          "No. Le informazioni sono dentro il codice stesso, non su un server, quindi funziona finché i dati restano corretti.",
      },
      {
        question: "Le mie informazioni vengono salvate?",
        answer:
          "No. Il codice QR viene creato nel tuo browser e niente di ciò che scrivi lascia il tuo dispositivo.",
      },
    ],
  },
  "whatsapp-qr-code-generator": {
    name: "Generatore di codici QR per WhatsApp",
    shortName: "QR WhatsApp",
    tagline: "Crea un codice QR che apre una chat WhatsApp con il tuo numero, con un messaggio pronto da inviare. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Un codice QR per WhatsApp permette ai clienti di iniziare una chat con te senza dover prima salvare il tuo numero. Inserisci il tuo numero di telefono con il prefisso internazionale e, se vuoi, un messaggio che sarà già scritto per loro, come “Ciao, vorrei prenotare un tavolo”. Scansionando il codice si apre WhatsApp su quella chat. Mettilo sulla vetrina del negozio, sul menu, su un volantino o sul biglietto da visita. Il codice viene creato nel tuo browser e non viene caricato nulla.",
    seoTitle: "QR code WhatsApp gratis – Link alla chat con messaggio",
    seoDescription:
      "Crea un codice QR che apre una chat WhatsApp con il tuo numero e un messaggio pronto. Per negozi, menu e biglietti da visita. Gratis, nulla viene caricato.",
    keywords: [
      "qr code whatsapp",
      "generatore qr code whatsapp",
      "codice qr per whatsapp",
      "qr code link chat whatsapp",
      "qr code wa.me",
    ],
    howToSteps: [
      {
        title: "Inserisci il tuo numero",
        description: "Con il prefisso internazionale, ad esempio +44 7700 900123.",
      },
      {
        title: "Aggiungi un messaggio",
        description: "Facoltativo: un testo già scritto per chi scansiona il codice.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o SVG, poi stampalo o aggiungilo alla tua grafica.",
      },
    ],
    features: [
      {
        title: "Senza salvare il numero",
        description: "Le persone ti scrivono senza doverti prima aggiungere ai contatti.",
      },
      {
        title: "Messaggio pronto",
        description: "Inizia la conversazione con le tue parole.",
      },
      {
        title: "Verificato prima del salvataggio",
        description: "Il codice QR viene riletto appena creato, così sai che si scansiona.",
      },
      {
        title: "I tuoi colori e il tuo logo",
        description: "Scegli i colori e aggiungi un logo al centro; la correzione degli errori viene aumentata così si legge comunque.",
      },
    ],
    faqs: [
      {
        question: "Funziona con WhatsApp Business?",
        answer:
          "Sì. Apre una chat con l’account WhatsApp che usa quel numero, qualunque esso sia.",
      },
      {
        question: "Perché serve il prefisso internazionale?",
        answer:
          "I link di WhatsApp usano il numero internazionale completo, così il codice funziona da qualsiasi Paese.",
      },
      {
        question: "Il codice QR scade?",
        answer:
          "No. Le informazioni sono dentro il codice stesso, non su un server, quindi funziona finché i dati restano corretti.",
      },
      {
        question: "Le mie informazioni vengono salvate?",
        answer:
          "No. Il codice QR viene creato nel tuo browser e niente di ciò che scrivi lascia il tuo dispositivo.",
      },
    ],
  },
  "vcard-qr-code-generator": {
    name: "Generatore di codici QR vCard",
    shortName: "Codice QR vCard",
    tagline: "Crea un codice QR che salva il tuo nome, telefono, email e sito web nei contatti di un telefono. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Un codice QR vCard trasforma un biglietto da visita in una sola scansione: le persone lo inquadrano con la fotocamera e il telefono propone di salvarti come contatto, con nome, numero di telefono, email, azienda e sito web già compilati. Inserisci i tuoi dati, personalizza il codice con i tuoi colori o il tuo logo e scaricalo per il biglietto da visita, la firma email, il badge o lo stand. I dati vengono inseriti nel codice nel tuo browser e non vengono salvati da nessuna parte.",
    seoTitle: "QR code vCard gratis – Biglietto da visita con QR",
    seoDescription:
      "Crea un codice QR vCard che salva i tuoi dati di contatto con una sola scansione. Per biglietti da visita e badge. Colori e logo, gratis, nulla viene caricato.",
    keywords: [
      "qr code vcard",
      "qr code biglietto da visita",
      "qr code contatto",
      "generatore qr code vcard",
      "codice qr con dati di contatto",
    ],
    howToSteps: [
      {
        title: "Inserisci i tuoi dati",
        description: "Nome, telefono, email, azienda e sito web.",
      },
      {
        title: "Personalizzalo",
        description: "Scegli i colori o aggiungi il tuo logo.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o SVG, poi stampalo o aggiungilo alla tua grafica.",
      },
    ],
    features: [
      {
        title: "Si salva con una scansione",
        description: "I telefoni propongono di aggiungere il contatto con tutti i campi compilati.",
      },
      {
        title: "Verificato prima del salvataggio",
        description: "Il codice QR viene riletto appena creato, così sai che si scansiona.",
      },
      {
        title: "I tuoi colori e il tuo logo",
        description: "Scegli i colori e aggiungi un logo al centro; la correzione degli errori viene aumentata così si legge comunque.",
      },
      {
        title: "Privato",
        description: "Il codice viene creato nel tuo browser. I tuoi dati non vengono caricati né salvati.",
      },
    ],
    faqs: [
      {
        question: "Serve un’app?",
        answer:
          "No. La fotocamera integrata degli iPhone e della maggior parte dei telefoni Android riconosce i codici QR dei contatti.",
      },
      {
        question: "Posso cambiare i miei dati in seguito?",
        answer:
          "I dati sono dentro il codice, quindi crea un nuovo codice quando cambiano.",
      },
      {
        question: "Il codice QR scade?",
        answer:
          "No. Le informazioni sono dentro il codice stesso, non su un server, quindi funziona finché i dati restano corretti.",
      },
      {
        question: "Le mie informazioni vengono salvate?",
        answer:
          "No. Il codice QR viene creato nel tuo browser e niente di ciò che scrivi lascia il tuo dispositivo.",
      },
    ],
  },
  "payment-qr-code-generator": {
    name: "Generatore di codici QR per pagamenti",
    shortName: "QR per pagamenti",
    tagline: "Crea un codice QR per pagamenti UPI in India o bonifici SEPA in Europa. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Un codice QR per pagamenti permette alle persone di pagarti scansionando il codice invece di digitare i dati del conto. Scegli UPI, il sistema dietro Google Pay, PhonePe, Paytm e BHIM in India, oppure un bonifico SEPA, il codice QR EPC che molte app bancarie in Europa sanno leggere. Inserisci il tuo conto e, se vuoi, un importo fisso e una nota; i dati vengono controllati (formato dell’ID UPI, cifre di controllo dell’IBAN) prima che il codice venga creato. Non viene caricato nulla e nessun denaro passa da questo sito.",
    seoTitle: "QR code per pagamenti gratis – UPI e bonifico SEPA",
    seoDescription:
      "Crea un codice QR di pagamento UPI o un codice QR per bonifico SEPA (EPC) nel browser. Dati del conto verificati. Gratis, nulla viene caricato.",
    keywords: [
      "generatore qr code pagamento",
      "qr code bonifico",
      "qr code sepa",
      "qr code epc",
      "qr code upi",
    ],
    howToSteps: [
      {
        title: "Scegli UPI o SEPA",
        description: "UPI per l’India; bonifico SEPA per i conti in euro in Europa.",
      },
      {
        title: "Inserisci il conto",
        description: "Il tuo ID UPI o IBAN e il nome, più importo e nota facoltativi.",
      },
      {
        title: "Scaricalo",
        description: "Salvalo in PNG o SVG, poi stampalo o aggiungilo alla tua grafica.",
      },
    ],
    features: [
      {
        title: "Dati del conto verificati",
        description: "Degli ID UPI viene controllato il formato, degli IBAN le cifre di controllo.",
      },
      {
        title: "Importo fisso facoltativo",
        description: "Lascialo vuoto per far scrivere l’importo a chi paga.",
      },
      {
        title: "Verificato prima del salvataggio",
        description: "Il codice QR viene riletto appena creato, così sai che si scansiona.",
      },
      {
        title: "Privato",
        description: "Il codice viene creato nel tuo browser. I tuoi dati non vengono caricati né salvati.",
      },
    ],
    faqs: [
      {
        question: "Quali app lo leggono?",
        answer:
          "I codici UPI si aprono nelle app UPI come Google Pay, PhonePe, Paytm e BHIM. I codici SEPA (EPC) vengono letti da molte app bancarie in Germania, Austria, Paesi Bassi, Belgio, Finlandia e altri Paesi SEPA; non tutte le banche li supportano.",
      },
      {
        question: "È sicuro?",
        answer:
          "Il codice compila solo i dati del pagamento; chi paga conferma comunque il pagamento nella propria app. Controlla bene i dati prima di stampare il codice.",
      },
      {
        question: "Il codice QR scade?",
        answer:
          "No. Le informazioni sono dentro il codice stesso, non su un server, quindi funziona finché i dati restano corretti.",
      },
      {
        question: "Le mie informazioni vengono salvate?",
        answer:
          "No. Il codice QR viene creato nel tuo browser e niente di ciò che scrivi lascia il tuo dispositivo.",
      },
    ],
  },
  "bulk-qr-code-generator": {
    name: "Generatore di codici QR in blocco",
    shortName: "Codici QR in blocco",
    tagline: "Crea centinaia di codici QR in una volta da un elenco o un CSV e scaricali in un unico ZIP. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Generatore di codici QR in blocco trasforma un elenco in codici QR: link per ogni pagina prodotto, codici per ogni tavolo, etichette per tutti i beni di un magazzino. Incolla un link o un testo per riga, oppure carica un file CSV, e se vuoi metti un nome file prima di ciascuno, così è facile abbinare i file. Scegli PNG o SVG e una dimensione, poi scaricali tutti in un unico ZIP. Fino a 1.000 codici vengono creati nel tuo browser; il tuo elenco non viene mai caricato.",
    seoTitle: "Generatore di codici QR in blocco gratis – Da CSV a ZIP",
    seoDescription:
      "Crea fino a 1.000 codici QR in una volta da un elenco o un CSV nel browser. Nomi file a scelta, PNG o SVG, un unico ZIP. Gratis, nulla viene caricato.",
    keywords: [
      "generatore qr code in blocco",
      "generare più qr code insieme",
      "qr code da csv",
      "creare qr code multipli",
      "generatore qr code massivo",
    ],
    howToSteps: [
      {
        title: "Incolla il tuo elenco",
        description: "Un link o un testo per riga, oppure carica un file CSV o di testo.",
      },
      {
        title: "Dai un nome ai file",
        description: "Se vuoi, inizia ogni riga con un nome file e una virgola.",
      },
      {
        title: "Scarica lo ZIP",
        description: "Scegli PNG o SVG e una dimensione, poi salva tutti i codici in una volta.",
      },
    ],
    features: [
      {
        title: "Fino a 1.000 codici",
        description: "Crea un intero lotto in un colpo solo.",
      },
      {
        title: "I tuoi nomi file",
        description: "Dai a ogni file un nome che corrisponda al prodotto, al tavolo o al bene.",
      },
      {
        title: "PNG o SVG",
        description: "Immagini per i documenti, o vettoriali per la stampa.",
      },
      {
        title: "Privato",
        description: "Il tuo elenco viene elaborato nel browser e non viene mai caricato.",
      },
    ],
    faqs: [
      {
        question: "Come aggiungo i nomi dei file?",
        answer:
          "Spunta l’opzione e scrivi ogni riga come nome, contenuto (ad esempio: tavolo-4, https://example.com/menu). Senza nomi, i file vengono numerati.",
      },
      {
        question: "Posso creare in blocco codici Wi-Fi o di contatto?",
        answer:
          "Sì, se ogni riga contiene il contenuto completo del codice, come WIFI:T:WPA;S:Nome;P:password;;. Per i codici singoli, Generatore di codici QR compila questi dati per te.",
      },
      {
        question: "C’è un limite?",
        answer:
          "1.000 codici per lotto. Per averne di più, crea più lotti.",
      },
      {
        question: "Le mie informazioni vengono salvate?",
        answer:
          "No. Il codice QR viene creato nel tuo browser e niente di ciò che scrivi lascia il tuo dispositivo.",
      },
    ],
  },
  "bulk-barcode-generator": {
    name: "Generatore di codici a barre in blocco",
    shortName: "Codici a barre in blocco",
    tagline: "Crea centinaia di codici a barre in una volta da un elenco o un CSV, controllati e salvati in un unico ZIP. Gratis, e funziona sul tuo dispositivo.",
    intro:
      "Generatore di codici a barre in blocco crea un codice a barre per ogni riga di un elenco: codici prodotto per un catalogo, etichette Code 128 per un magazzino, ISBN per una collana di libri. Scegli il tipo di codice a barre, incolla i numeri o carica un CSV, e ogni riga viene controllata mentre scrivi: lunghezze sbagliate, lettere in codici solo numerici e cifre di controllo errate vengono elencate per riga, e le cifre di controllo mancanti vengono aggiunte. Scarica quelli validi in PNG o SVG in un unico ZIP. Fino a 1.000 codici a barre vengono creati nel tuo browser e non viene caricato nulla.",
    seoTitle: "Generatore di codici a barre in blocco – Da CSV a ZIP",
    seoDescription:
      "Crea fino a 1.000 codici a barre in una volta da un elenco o CSV: Code 128, EAN, UPC, ISBN, Data Matrix e altri. Controllati, ZIP in PNG o SVG. Gratis.",
    keywords: [
      "generatore codici a barre in blocco",
      "generare più codici a barre",
      "codici a barre da csv",
      "creare codici a barre multipli",
      "generatore massivo codici a barre",
    ],
    howToSteps: [
      {
        title: "Scegli il tipo di codice a barre",
        description: "Code 128, EAN-13, UPC-A, ISBN, Data Matrix e altri.",
      },
      {
        title: "Incolla il tuo elenco",
        description: "Un numero o un testo per riga, eventualmente preceduto da un nome file; i problemi vengono elencati per riga.",
      },
      {
        title: "Scarica lo ZIP",
        description: "Scegli PNG o SVG, poi salva tutti i codici a barre validi in una volta.",
      },
    ],
    features: [
      {
        title: "Controllato mentre scrivi",
        description: "Lunghezze sbagliate, lettere in codici solo numerici e cifre di controllo errate vengono segnalate prima del download.",
      },
      {
        title: "Cifre di controllo aggiunte",
        description: "I numeri EAN, UPC, ITF-14 e ISBN ricevono la cifra di controllo quando manca.",
      },
      {
        title: "I tuoi nomi file",
        description: "Dai a ogni file il nome del suo prodotto o articolo.",
      },
      {
        title: "PNG o SVG",
        description: "PNG per documenti ed etichette, SVG per la stampa e i programmi di grafica, a qualsiasi dimensione.",
      },
    ],
    faqs: [
      {
        question: "Cosa succede alle righe con problemi?",
        answer:
          "Vengono elencate con il motivo ed escluse dallo ZIP; gli altri codici vengono creati.",
      },
      {
        question: "Devo registrare il numero?",
        answer:
          "Per vendere un prodotto nei negozi, sì: i numeri EAN e UPC vengono rilasciati da GS1, l’organizzazione che gestisce il sistema. Per il tuo magazzino, gli scaffali o un uso interno va bene qualsiasi numero.",
      },
      {
        question: "C’è un limite?",
        answer:
          "1.000 codici a barre per lotto. Per averne di più, crea più lotti.",
      },
      {
        question: "Viene caricato qualcosa?",
        answer:
          "No. Il codice viene creato nel tuo browser e ciò che scrivi resta sul tuo dispositivo.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word in PDF",
    shortName: "Word → PDF",
    tagline: "Converti documenti Word in PDF mantenendo layout, font e immagini. Gratis, senza registrazione e senza filigrana.",
    intro:
      "Word in PDF trasforma i documenti Word in un PDF che appare uguale su ogni dispositivo ed è pronto da inviare via email, stampare o caricare su un portale. Accetta DOC, DOCX, ODT, RTF o TXT. Intestazioni, piè di pagina, numeri di pagina, tabelle e immagini vengono mantenuti. La conversione usa LibreOffice sul nostro server: il file viene inviato tramite una connessione crittografata ed eliminato non appena il PDF torna indietro.",
    seoTitle: "Convertire Word in PDF – Gratis, senza registrazione",
    seoDescription:
      "Convertire Word in PDF online gratis: mantiene layout, font e immagini. Nessuna registrazione, nessuna filigrana; i file vengono eliminati subito dopo.",
    keywords: [
      "convertire word in pdf",
      "word in pdf",
      "da word a pdf",
      "docx in pdf",
      "doc in pdf",
      "convertitore word pdf gratis",
    ],
    howToSteps: [
      {
        title: "Scegli il file",
        description: "Trascina o scegli un file DOC, DOCX, ODT, RTF o TXT fino a 30 MB.",
      },
      {
        title: "Converti",
        description: "Fai clic su Converti in PDF. Il file viene convertito sul nostro server, di solito in pochi secondi.",
      },
      {
        title: "Scarica il PDF",
        description: "Il PDF viene scaricato automaticamente; puoi scaricarlo di nuovo con il pulsante.",
      },
    ],
    features: [
      {
        title: "Layout mantenuto",
        description: "Testo, tabelle, immagini e interruzioni di pagina restano dove erano.",
      },
      {
        title: "Font comuni inclusi",
        description: "Font con metriche compatibili con Calibri, Cambria, Arial e Times, più i font Noto per la maggior parte delle lingue.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la conversione.",
      },
      {
        title: "Gratis",
        description: "Nessuna registrazione, nessuna filigrana, nessun limite giornaliero.",
      },
    ],
    faqs: [
      {
        question: "Il PDF sarà identico all’originale?",
        answer:
          "Per la maggior parte dei documenti, sì. I font rari non installati sul server vengono sostituiti da font simili e alcuni layout molto complessi possono spostarsi leggermente. Controlla il PDF prima di inviarlo.",
      },
      {
        question: "Le revisioni e i commenti compaiono nel PDF?",
        answer:
          "Il documento viene convertito così come appare quando lo apri, quindi accetta o rifiuta prima le revisioni se non vuoi che siano visibili.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "excel-to-pdf": {
    name: "Excel in PDF",
    shortName: "Excel → PDF",
    tagline: "Converti fogli di calcolo Excel in PDF mantenendo layout, font e immagini. Gratis, senza registrazione e senza filigrana.",
    intro:
      "Excel in PDF trasforma i fogli di calcolo Excel in un PDF che appare uguale su ogni dispositivo ed è pronto da inviare via email, stampare o caricare su un portale. Accetta XLS, XLSX, ODS o CSV. Ogni foglio con contenuto entra nel PDF, usando l’impostazione di pagina salvata nel file. La conversione usa LibreOffice sul nostro server: il file viene inviato tramite una connessione crittografata ed eliminato non appena il PDF torna indietro.",
    seoTitle: "Convertire Excel in PDF – Gratis, senza registrazione",
    seoDescription:
      "Convertire Excel in PDF online gratis: mantiene layout, font e immagini. Nessuna registrazione, nessuna filigrana; i file vengono eliminati subito dopo.",
    keywords: [
      "convertire excel in pdf",
      "excel in pdf",
      "da excel a pdf",
      "xlsx in pdf",
      "xls in pdf",
      "foglio excel in pdf",
    ],
    howToSteps: [
      {
        title: "Scegli il file",
        description: "Trascina o scegli un file XLS, XLSX, ODS o CSV fino a 30 MB.",
      },
      {
        title: "Converti",
        description: "Fai clic su Converti in PDF. Il file viene convertito sul nostro server, di solito in pochi secondi.",
      },
      {
        title: "Scarica il PDF",
        description: "Il PDF viene scaricato automaticamente; puoi scaricarlo di nuovo con il pulsante.",
      },
    ],
    features: [
      {
        title: "Layout mantenuto",
        description: "Testo, tabelle, immagini e interruzioni di pagina restano dove erano.",
      },
      {
        title: "Font comuni inclusi",
        description: "Font con metriche compatibili con Calibri, Cambria, Arial e Times, più i font Noto per la maggior parte delle lingue.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la conversione.",
      },
      {
        title: "Gratis",
        description: "Nessuna registrazione, nessuna filigrana, nessun limite giornaliero.",
      },
    ],
    faqs: [
      {
        question: "Il PDF sarà identico all’originale?",
        answer:
          "Per la maggior parte dei documenti, sì. I font rari non installati sul server vengono sostituiti da font simili e alcuni layout molto complessi possono spostarsi leggermente. Controlla il PDF prima di inviarlo.",
      },
      {
        question: "Perché il mio foglio è diviso su più pagine?",
        answer:
          "Il PDF segue le impostazioni di stampa salvate nel foglio di calcolo. Per far stare un foglio in una sola pagina, imposta la scala di stampa su “Adatta alla pagina” in Excel prima di convertire.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "powerpoint-to-pdf": {
    name: "PowerPoint in PDF",
    shortName: "PPT → PDF",
    tagline: "Converti presentazioni PowerPoint in PDF mantenendo layout, font e immagini. Gratis, senza registrazione e senza filigrana.",
    intro:
      "PowerPoint in PDF trasforma le presentazioni PowerPoint in un PDF che appare uguale su ogni dispositivo ed è pronto da inviare via email, stampare o caricare su un portale. Accetta PPT, PPTX o ODP. Ogni diapositiva diventa una pagina del PDF. La conversione usa LibreOffice sul nostro server: il file viene inviato tramite una connessione crittografata ed eliminato non appena il PDF torna indietro.",
    seoTitle: "Convertire PowerPoint in PDF – Gratis, senza registrazione",
    seoDescription:
      "Convertire PowerPoint in PDF online gratis: mantiene layout, font e immagini. Nessuna registrazione, nessuna filigrana; i file vengono eliminati subito dopo.",
    keywords: [
      "convertire powerpoint in pdf",
      "powerpoint in pdf",
      "ppt in pdf",
      "pptx in pdf",
      "diapositive in pdf",
    ],
    howToSteps: [
      {
        title: "Scegli il file",
        description: "Trascina o scegli un file PPT, PPTX o ODP fino a 30 MB.",
      },
      {
        title: "Converti",
        description: "Fai clic su Converti in PDF. Il file viene convertito sul nostro server, di solito in pochi secondi.",
      },
      {
        title: "Scarica il PDF",
        description: "Il PDF viene scaricato automaticamente; puoi scaricarlo di nuovo con il pulsante.",
      },
    ],
    features: [
      {
        title: "Layout mantenuto",
        description: "Testo, tabelle, immagini e interruzioni di pagina restano dove erano.",
      },
      {
        title: "Font comuni inclusi",
        description: "Font con metriche compatibili con Calibri, Cambria, Arial e Times, più i font Noto per la maggior parte delle lingue.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la conversione.",
      },
      {
        title: "Gratis",
        description: "Nessuna registrazione, nessuna filigrana, nessun limite giornaliero.",
      },
    ],
    faqs: [
      {
        question: "Il PDF sarà identico all’originale?",
        answer:
          "Per la maggior parte dei documenti, sì. I font rari non installati sul server vengono sostituiti da font simili e alcuni layout molto complessi possono spostarsi leggermente. Controlla il PDF prima di inviarlo.",
      },
      {
        question: "Animazioni e video vengono mantenuti?",
        answer:
          "No. Un PDF mostra ogni diapositiva come una pagina statica, quindi animazioni, transizioni e video incorporati vengono esclusi.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF in Word",
    shortName: "PDF → Word",
    tagline: "Trasforma un PDF in un documento Word (DOCX) modificabile. Gratis, senza registrazione.",
    intro:
      "PDF in Word converte un PDF in un file DOCX che puoi modificare in Word, Google Docs o LibreOffice. Funziona al meglio con i PDF creati da un documento di testo, come report esportati, lettere e moduli; testo, paragrafi e immagini diventano contenuto modificabile. I layout complessi, come riviste, colonne e moduli, possono richiedere qualche ritocco dopo. I PDF scansionati sono solo immagini di testo, quindi passali prima in OCR PDF. La conversione usa LibreOffice sul nostro server e il file viene eliminato subito dopo.",
    seoTitle: "PDF in Word – DOCX modificabile, gratis",
    seoDescription:
      "PDF in Word online gratis: converti un PDF in un file DOCX modificabile. Ideale per i PDF di testo; i file vengono eliminati subito dopo. Senza registrazione.",
    keywords: [
      "pdf in word",
      "convertire pdf in word",
      "da pdf a word",
      "pdf in docx",
      "pdf in word modificabile",
      "pdf in doc gratis",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF",
        description: "Trascina o scegli un PDF fino a 30 MB.",
      },
      {
        title: "Converti",
        description: "Fai clic su Converti in Word. Il PDF viene convertito sul nostro server.",
      },
      {
        title: "Modifica il documento",
        description: "Apri il DOCX scaricato in Word, Google Docs o LibreOffice.",
      },
    ],
    features: [
      {
        title: "Testo modificabile",
        description: "Paragrafi e titoli diventano testo normale e modificabile.",
      },
      {
        title: "Immagini mantenute",
        description: "Le immagini del PDF vengono inserite nel documento.",
      },
      {
        title: "Funziona con Word e Docs",
        description: "Il DOCX si apre in Microsoft Word, Google Docs e LibreOffice.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la conversione.",
      },
    ],
    faqs: [
      {
        question: "Perché il documento è diverso dal PDF?",
        answer:
          "I PDF memorizzano posizioni esatte, mentre nei documenti Word il testo scorre. I documenti semplici si convertono bene; colonne, caselle di testo e moduli complessi possono richiedere aggiustamenti dopo la conversione.",
      },
      {
        question: "Può convertire un PDF scansionato?",
        answer:
          "Un PDF scansionato contiene immagini di testo, non testo. Passalo prima in OCR PDF, poi converti in Word il PDF ricercabile.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "compress-pdf": {
    name: "Comprimi PDF",
    shortName: "Comprimi PDF",
    tagline: "Rendi un PDF più leggero per email e moduli di caricamento, con tre livelli di qualità. Gratis, senza registrazione.",
    intro:
      "Comprimi PDF riduce il peso di un PDF perché rientri negli allegati email e nei limiti di dimensione dei portali di caricamento. Funziona al meglio con i PDF che contengono foto e scansioni, le cui immagini vengono ricompresse e ridimensionate; scegli Minimo per schermi ed email, Bilanciato per la maggior parte degli usi o Alta qualità per mantenere i dettagli in stampa. Il risultato mostra di quanto si è ridotto il file e, se un PDF è già compatto, riottieni l’originale invece di un file più grande. La compressione usa Ghostscript sul nostro server e il file viene eliminato subito dopo.",
    seoTitle: "Comprimere PDF – Riduci il peso del PDF, gratis",
    seoDescription:
      "Comprimere PDF online gratis: riduci il peso del file con tre livelli di qualità e vedi il risparmio. File eliminati subito dopo. Senza registrazione.",
    keywords: [
      "comprimere pdf",
      "ridurre dimensioni pdf",
      "comprimi pdf",
      "compressore pdf",
      "rimpicciolire pdf",
      "comprimere pdf a 1 mb",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF",
        description: "Trascina o scegli un PDF fino a 30 MB.",
      },
      {
        title: "Scegli un livello",
        description: "Minimo, Bilanciato o Alta qualità.",
      },
      {
        title: "Comprimi e scarica",
        description: "Vedi il peso prima e dopo e salva il PDF più leggero.",
      },
    ],
    features: [
      {
        title: "Tre livelli di qualità",
        description: "Da file adatti all’email a documenti con qualità di stampa.",
      },
      {
        title: "Mai più grande",
        description: "Se un PDF non può essere ridotto, riottieni l’originale.",
      },
      {
        title: "Compressione vera",
        description: "Le immagini vengono ricompresse e i contenuti duplicati uniti, cosa che gli strumenti nel browser non possono fare.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la compressione.",
      },
    ],
    faqs: [
      {
        question: "Di quanto si ridurrà il mio PDF?",
        answer:
          "Dipende dal contenuto. Le scansioni e i PDF pieni di foto spesso si riducono del 50–90%. I PDF di solo testo sono già leggeri e potrebbero cambiare appena.",
      },
      {
        question: "Il testo resterà nitido?",
        answer: "Sì. Il testo e la grafica vettoriale restano come sono; vengono ricompresse solo le immagini.",
      },
      {
        question: "Il mio PDF deve stare sotto una certa dimensione. Cosa faccio?",
        answer:
          "Prova prima Minimo. Se è ancora troppo grande, dividi il PDF in parti con Dividi PDF e comprimi ogni parte.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "protect-pdf": {
    name: "Proteggi PDF",
    shortName: "Proteggi PDF",
    tagline: "Aggiungi una password a un PDF con crittografia AES-256. Gratis, senza registrazione.",
    intro:
      "Proteggi PDF blocca un PDF con una password, così non può essere aperto senza. Usalo prima di inviare via email estratti conto, buste paga, documenti d’identità o contratti. Il PDF viene crittografato con AES-256, la crittografia più robusta supportata dai lettori PDF, e si apre normalmente in Acrobat, nei browser e nelle app per telefono una volta inserita la password. Scegli una password di almeno sei caratteri e conservala con cura: nessuno può recuperarla. La crittografia avviene con qpdf sul nostro server; il file e la password vengono eliminati subito dopo.",
    seoTitle: "Proteggere PDF con password – AES-256, gratis",
    seoDescription:
      "Proteggere PDF con password online gratis: aggiungi la crittografia AES-256 al file. Il file e la password vengono eliminati subito dopo. Senza registrazione.",
    keywords: [
      "proteggere pdf con password",
      "mettere password a pdf",
      "crittografare pdf",
      "bloccare pdf",
      "proteggi pdf",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF",
        description: "Trascina o scegli un PDF fino a 30 MB.",
      },
      {
        title: "Imposta una password",
        description: "Digitala due volte; usa almeno sei caratteri.",
      },
      {
        title: "Proteggi e scarica",
        description: "Salva il PDF bloccato e conserva la password in un posto sicuro.",
      },
    ],
    features: [
      {
        title: "Crittografia AES-256",
        description: "La crittografia PDF più robusta, supportata da tutti i lettori moderni.",
      },
      {
        title: "Si apre ovunque",
        description: "Acrobat, browser e app per telefono chiedono la password.",
      },
      {
        title: "Password mai conservata",
        description: "Viene usata una volta per crittografare il file, poi scartata.",
      },
      {
        title: "Gratis",
        description: "Nessuna registrazione e nessuna filigrana.",
      },
    ],
    faqs: [
      {
        question: "E se dimentico la password?",
        answer:
          "Non può essere recuperata, né da noi né da nessun altro. Tieni una copia dell’originale non protetto o conserva la password in un posto sicuro.",
      },
      {
        question: "Posso rimuovere la password in seguito?",
        answer: "Sì. Usa Sblocca PDF con la password corretta.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "unlock-pdf": {
    name: "Sblocca PDF",
    shortName: "Sblocca PDF",
    tagline: "Rimuovi la password da un PDF che riesci ad aprire, così non te la chiede più. Gratis, senza registrazione.",
    intro:
      "Sblocca PDF rimuove la password da un PDF quando la conosci, così il file si apre senza chiederla ogni volta e può essere modificato, unito o firmato con gli altri strumenti di questo sito. Rimuove anche le restrizioni di stampa e copia presenti in alcuni PDF. Devi inserire la password corretta: questo strumento non indovina né forza le password. Lo sblocco avviene con qpdf sul nostro server; il file e la password vengono eliminati subito dopo.",
    seoTitle: "Sbloccare PDF – Rimuovi la password dal PDF, gratis",
    seoDescription:
      "Sbloccare PDF online gratis: rimuovi la password da un PDF che riesci ad aprire. Il file e la password vengono eliminati subito dopo. Senza registrazione.",
    keywords: [
      "sbloccare pdf",
      "rimuovere password pdf",
      "togliere password pdf",
      "decrittografare pdf",
      "sbloccare pdf protetto",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF",
        description: "Trascina o scegli il PDF protetto.",
      },
      {
        title: "Inserisci la password",
        description: "Digita la password che apre il PDF.",
      },
      {
        title: "Sblocca e scarica",
        description: "Salva una copia senza password.",
      },
    ],
    features: [
      {
        title: "Niente più richieste di password",
        description: "La copia sbloccata si apre direttamente.",
      },
      {
        title: "Modificalo qui",
        description: "Unisci, firma o organizza il PDF sbloccato con gli altri strumenti.",
      },
      {
        title: "Restrizioni rimosse",
        description: "Anche i limiti di stampa e copia vengono tolti.",
      },
      {
        title: "Password mai conservata",
        description: "Viene usata una volta, poi scartata insieme al file.",
      },
    ],
    faqs: [
      {
        question: "Può sbloccare un PDF se non conosco la password?",
        answer: "No. Serve la password che apre il file. Questo strumento non indovina né forza le password.",
      },
      {
        question: "Perché dice che la password è sbagliata?",
        answer:
          "Controlla maiuscole e spazi. Gli estratti conto usano spesso una combinazione, come parte del nome e la data di nascita; di solito chi li invia spiega il formato.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR PDF",
    shortName: "OCR PDF",
    tagline: "Rendi un PDF scansionato ricercabile e selezionabile riconoscendone il testo. Gratis, senza registrazione.",
    intro:
      "OCR PDF riconosce il testo in un PDF scansionato e lo aggiunge come livello invisibile, così puoi cercare, selezionare e copiare il testo mentre le pagine restano identiche. È utile per contratti scansionati, ricevute, libri e documenti vecchi. Scegli la lingua del documento per ottenere i risultati migliori; le pagine che contengono già testo restano come sono. Il riconoscimento usa Tesseract e OCRmyPDF sul nostro server e il file viene eliminato subito dopo.",
    seoTitle: "OCR PDF – Rendi ricercabili i PDF scansionati, gratis",
    seoDescription:
      "OCR PDF online gratis: rendi i PDF scansionati ricercabili e il loro testo copiabile. 10 lingue; i file vengono eliminati subito dopo.",
    keywords: [
      "ocr pdf",
      "pdf ricercabile",
      "pdf scansionato in testo",
      "ocr pdf online",
      "rendere pdf ricercabile",
      "riconoscimento testo pdf",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF scansionato",
        description: "Trascina o scegli un PDF fino a 30 MB.",
      },
      {
        title: "Scegli la lingua",
        description: "Scegli la lingua in cui è scritto il documento.",
      },
      {
        title: "Rendilo ricercabile",
        description: "Scarica il PDF con testo selezionabile e ricercabile.",
      },
    ],
    features: [
      {
        title: "Aspetto invariato",
        description: "Il livello di testo è invisibile; la scansione non cambia.",
      },
      {
        title: "Dieci lingue",
        description: "Inglese, tedesco, spagnolo, francese, portoghese, italiano, giapponese, coreano, indonesiano e turco.",
      },
      {
        title: "Salta le pagine con testo",
        description: "Le pagine che hanno già testo non vengono rielaborate.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo il riconoscimento.",
      },
    ],
    faqs: [
      {
        question: "Quanto è preciso?",
        answer:
          "Scansioni pulite e dritte a 300 dpi danno ottimi risultati. Scrittura a mano, foto a bassa risoluzione e font insoliti vengono riconosciuti in modo meno affidabile.",
      },
      {
        question: "Posso convertire il risultato in Word?",
        answer:
          "Sì. Una volta che il PDF è ricercabile, PDF in Word può trasformarne il testo in un documento modificabile.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "pdf-to-pdfa": {
    name: "PDF in PDF/A",
    shortName: "PDF → PDF/A",
    tagline: "Converti un PDF in PDF/A per l’archiviazione a lungo termine e i portali ufficiali. Gratis, senza registrazione.",
    intro:
      "PDF in PDF/A converte un PDF in PDF/A-2b, la versione del PDF per l’archiviazione che incorpora font e informazioni sul colore, così il documento avrà lo stesso aspetto anche tra decenni. Alcuni tribunali, portali fiscali, università e siti della pubblica amministrazione accettano solo caricamenti in PDF/A. La conversione usa OCRmyPDF e Ghostscript sul nostro server e il file viene eliminato subito dopo.",
    seoTitle: "Convertire PDF in PDF/A – PDF/A-2b, gratis",
    seoDescription:
      "Convertire PDF in PDF/A-2b online gratis, per l’archiviazione e i portali ufficiali. I file vengono eliminati subito dopo. Senza registrazione.",
    keywords: [
      "pdf in pdf/a",
      "convertire pdf in pdf/a",
      "convertitore pdf/a",
      "pdf/a-2b",
      "archiviare pdf",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF",
        description: "Trascina o scegli un PDF fino a 30 MB.",
      },
      {
        title: "Converti",
        description: "Fai clic su Converti in PDF/A.",
      },
      {
        title: "Scarica",
        description: "Carica il file PDF/A dove è richiesto.",
      },
    ],
    features: [
      {
        title: "PDF/A-2b",
        description: "Lo standard di archiviazione ampiamente accettato.",
      },
      {
        title: "Font incorporati",
        description: "Il testo appare uguale su qualsiasi computer.",
      },
      {
        title: "Aspetto invariato",
        description: "Le pagine mantengono contenuto e layout.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la conversione.",
      },
    ],
    faqs: [
      {
        question: "Quale versione di PDF/A ottengo?",
        answer:
          "PDF/A-2b, accettato dalla maggior parte dei portali. Se un portale richiede specificamente PDF/A-1 o PDF/A-3, controlla le sue istruzioni.",
      },
      {
        question: "Perché il file PDF/A è più grande?",
        answer:
          "Il PDF/A deve incorporare tutti i font e i profili colore perché il documento resti leggibile da solo, e questo aumenta il peso.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  "repair-pdf": {
    name: "Ripara PDF",
    shortName: "Ripara PDF",
    tagline: "Ripara un PDF danneggiato che non si apre o mostra errori. Gratis, senza registrazione.",
    intro:
      "Ripara PDF ricostruisce la struttura interna di un PDF danneggiato, quello che non si apre, mostra un errore o si apre con pagine mancanti dopo un download interrotto o un’esportazione difettosa. Riscrive il file perché i lettori PDF possano leggerlo di nuovo e recupera ciò che è recuperabile. I file molto corrotti non sempre si possono salvare. La riparazione avviene con qpdf sul nostro server e il file viene eliminato subito dopo.",
    seoTitle: "Riparare PDF – Sistema i file PDF danneggiati, gratis",
    seoDescription:
      "Riparare PDF online gratis: sistema i file PDF danneggiati o corrotti che non si aprono. I file vengono eliminati subito dopo. Senza registrazione.",
    keywords: [
      "riparare pdf",
      "riparare pdf danneggiato",
      "pdf corrotto",
      "riparare pdf online",
      "pdf non si apre",
    ],
    howToSteps: [
      {
        title: "Scegli il PDF danneggiato",
        description: "Trascina o scegli il PDF che non si apre correttamente.",
      },
      {
        title: "Ripara",
        description: "Fai clic su Ripara PDF per ricostruirne la struttura.",
      },
      {
        title: "Scarica",
        description: "Apri la copia riparata nel tuo lettore PDF.",
      },
    ],
    features: [
      {
        title: "Ricostruisce la struttura",
        description: "Corregge tabelle dei riferimenti incrociati e strutture del file danneggiate.",
      },
      {
        title: "Conserva il possibile",
        description: "Le pagine e i contenuti leggibili vengono mantenuti.",
      },
      {
        title: "Veloce",
        description: "La maggior parte dei file viene riparata in pochi secondi.",
      },
      {
        title: "File eliminati subito",
        description: "Nulla viene conservato dopo la riparazione.",
      },
    ],
    faqs: [
      {
        question: "Ogni PDF può essere riparato?",
        answer:
          "No. Se parti del file mancano o sono state sovrascritte, non possono essere recuperate. Se puoi, prova a scaricare o esportare di nuovo l’originale.",
      },
      {
        question: "Perché dice che il file non è un PDF?",
        answer:
          "Il file non inizia affatto come un PDF, quindi potrebbe essere un altro tipo di file o essere danneggiato in modo irreparabile.",
      },
      {
        question: "Il mio file viene caricato?",
        answer:
          "Sì. Questo strumento ha bisogno del nostro server, quindi il file viene inviato tramite una connessione crittografata, elaborato ed eliminato non appena il risultato viene restituito. Non viene mai conservato, condiviso né visionato. La maggior parte degli altri strumenti di questo sito funziona interamente nel tuo browser.",
      },
      {
        question: "C’è un limite di dimensione?",
        answer: "I file possono arrivare a 30 MB. I file molto grandi o complessi possono richiedere fino a un paio di minuti.",
      },
    ],
  },
  // PDF utilities
"pdf-to-text": {
    "name": "PDF in testo",
    "shortName": "PDF in testo",
    "tagline": "Estrai il testo di un PDF come semplice file .txt, pagina per pagina, pronto da copiare o modificare. Gratis e funziona sul tuo dispositivo.",
    "intro": "PDF in testo estrae il testo da un PDF così puoi copiarlo, cercarlo, modificarlo o incollarlo altrove, senza copiare una pagina alla volta. Righe e paragrafi vengono mantenuti, e ogni pagina può essere segnata così sai da dove viene il testo. Scegli tutte le pagine o solo alcune, poi copia il testo o scaricalo come file .txt. Funziona con i PDF che contengono testo vero, come i documenti salvati da Word o da un sito web; per le pagine scansionate usa OCR PDF. Tutto avviene nel tuo browser.",
    "seoTitle": "Convertire PDF in testo – Gratis, copia o salva in TXT",
    "seoDescription": "Estrai il testo da un PDF nel browser e salvalo come file .txt o copialo. Scegli le pagine, mantieni i paragrafi. Gratis, nessun upload.",
    "keywords": [
      "pdf in testo",
      "pdf in txt",
      "estrarre testo da pdf",
      "copiare testo da pdf",
      "convertire pdf in testo"
    ],
    "howToSteps": [
      {
        "title": "Apri il PDF",
        "description": "Trascina o scegli un PDF; il suo testo viene letto subito."
      },
      {
        "title": "Scegli le pagine",
        "description": "Tutte le pagine, o un intervallo come 1-3, 5. Se vuoi, segna dove inizia ogni pagina."
      },
      {
        "title": "Copia o scarica",
        "description": "Copia il testo, o salvalo come file .txt."
      }
    ],
    "features": [
      {
        "title": "Paragrafi mantenuti",
        "description": "Gli a capo e gli spazi tra i paragrafi seguono la pagina."
      },
      {
        "title": "Pagina per pagina",
        "description": "Segna dove inizia ogni pagina, o scegli solo alcune pagine."
      },
      {
        "title": "Qualsiasi lingua",
        "description": "Il testo in qualsiasi alfabeto contenuto nel PDF esce così com’è."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Perché non viene trovato nessun testo?",
        "answer": "Probabilmente il PDF è una scansione: immagini delle pagine senza testo all’interno. OCR PDF legge il testo dalle immagini."
      },
      {
        "question": "L’impaginazione viene mantenuta?",
        "answer": "Le parole e il loro ordine sì; la grafica no. I PDF memorizzano il testo in base alla posizione, quindi le colonne affiancate possono essere lette di traverso e le tabelle escono come righe di testo."
      },
      {
        "question": "Posso ottenere Markdown?",
        "answer": "Sì. Cambia il formato in Markdown, oppure usa PDF in Markdown, che riconosce anche titoli ed elenchi."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "pdf-to-markdown": {
    "name": "PDF in Markdown",
    "shortName": "PDF in Markdown",
    "tagline": "Trasforma un PDF in Markdown con titoli ed elenchi, per appunti, wiki e strumenti di IA. Gratis e funziona sul tuo dispositivo.",
    "intro": "PDF in Markdown trasforma il testo di un PDF in Markdown: il testo più grande diventa un titolo, le righe puntate e numerate diventano elenchi e le righe spezzate vengono riunite in paragrafi, ricomponendo le parole divise da un trattino. Il risultato è pronto per app di appunti come Obsidian e Notion, per wiki e documentazione, o da incollare in un assistente di IA. Scegli le pagine, copia il Markdown o scaricalo come file .md. Tutto avviene nel tuo browser.",
    "seoTitle": "Convertire PDF in Markdown – Gratis, con titoli ed elenchi",
    "seoDescription": "Converti PDF in Markdown nel browser: titoli dal testo più grande, elenchi, paragrafi riuniti. Per appunti, wiki e strumenti di IA. Gratis, nessun upload.",
    "keywords": [
      "pdf in markdown",
      "convertire pdf in markdown",
      "pdf in md",
      "convertitore pdf markdown",
      "pdf in obsidian"
    ],
    "howToSteps": [
      {
        "title": "Apri il PDF",
        "description": "Trascina o scegli un PDF che contiene testo."
      },
      {
        "title": "Controlla il Markdown",
        "description": "Titoli ed elenchi vengono riconosciuti; scegli le pagine che ti servono."
      },
      {
        "title": "Copia o scarica",
        "description": "Copia il Markdown, o salvalo come file .md."
      }
    ],
    "features": [
      {
        "title": "Titoli riconosciuti",
        "description": "Il testo più grande del corpo diventa titoli # del livello giusto."
      },
      {
        "title": "Elenchi e paragrafi",
        "description": "I punti elenco diventano elenchi e le righe spezzate diventano paragrafi interi."
      },
      {
        "title": "Ideale per gli strumenti di IA",
        "description": "Un Markdown pulito è facile da leggere per assistenti e app di appunti."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Le tabelle vengono convertite?",
        "answer": "No. Le celle delle tabelle escono come righe di testo; sistemale a mano se ti serve una tabella Markdown."
      },
      {
        "question": "Perché non viene trovato nessun testo?",
        "answer": "Probabilmente il PDF è una scansione: immagini delle pagine senza testo all’interno. OCR PDF legge il testo dalle immagini."
      },
      {
        "question": "L’impaginazione viene mantenuta?",
        "answer": "Le parole e il loro ordine sì; la grafica no. I PDF memorizzano il testo in base alla posizione, quindi le colonne affiancate possono essere lette di traverso e le tabelle escono come righe di testo."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "text-to-pdf": {
    "name": "Testo in PDF",
    "shortName": "Testo in PDF",
    "tagline": "Trasforma testo semplice o un file .txt in un PDF pulito, con carattere, dimensione e margini a tua scelta. Gratis e funziona sul tuo dispositivo.",
    "intro": "Testo in PDF trasforma appunti, log, elenchi o qualsiasi testo semplice in un PDF ordinato che appare uguale su ogni dispositivo. Scrivi o incolla il testo, oppure apri un file .txt, poi scegli A4 o Lettera (US), un carattere senza grazie, con grazie o in stile macchina da scrivere, la dimensione del testo e i margini. Le righe lunghe vanno a capo in modo ordinato, gli a capo vengono mantenuti e le pagine possono essere numerate. L’anteprima mostra il PDF esattamente come verrà salvato, e il testo al suo interno resta ricercabile. Tutto avviene nel tuo browser.",
    "seoTitle": "Convertire testo in PDF – Da TXT a PDF, gratis",
    "seoDescription": "Converti testo o un file .txt in PDF nel browser. Scegli carattere, dimensione, margini e numeri di pagina; anteprima dal vivo. Gratis, nessun upload.",
    "keywords": [
      "testo in pdf",
      "txt in pdf",
      "convertire testo in pdf",
      "blocco note in pdf",
      "convertire txt in pdf"
    ],
    "howToSteps": [
      {
        "title": "Aggiungi il testo",
        "description": "Scrivi, incolla o apri un file .txt."
      },
      {
        "title": "Scegli l’aspetto",
        "description": "Formato pagina, carattere, dimensione del testo, margini e numeri di pagina."
      },
      {
        "title": "Scarica il PDF",
        "description": "Controlla l’anteprima e salvalo."
      }
    ],
    "features": [
      {
        "title": "Anteprima dal vivo",
        "description": "Vedi ogni pagina come verrà salvata prima di scaricare."
      },
      {
        "title": "Testo ricercabile",
        "description": "Il PDF contiene testo vero, non un’immagine del testo."
      },
      {
        "title": "Molte lingue",
        "description": "Il testo in alfabeto latino, greco e cirillico, in giapponese e in coreano viene scritto con caratteri che lo includono."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Tabulazioni e spazi vengono mantenuti?",
        "answer": "Gli a capo e gli spazi a inizio riga vengono mantenuti; le tabulazioni diventano quattro spazi."
      },
      {
        "question": "Posso formattare il testo?",
        "answer": "Per titoli, grassetto ed elenchi, usa Markdown in PDF."
      },
      {
        "question": "C’è un limite di dimensione?",
        "answer": "Nessun limite fisso; i testi molto lunghi richiedono solo qualche secondo in più."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "markdown-to-pdf": {
    "name": "Markdown in PDF",
    "shortName": "Markdown in PDF",
    "tagline": "Trasforma Markdown in un PDF formattato con titoli, elenchi, codice e link funzionanti. Gratis e funziona sul tuo dispositivo.",
    "intro": "Markdown in PDF trasforma file README, appunti e documentazione scritti in Markdown in un PDF ben formattato da condividere o stampare. Titoli, grassetto e corsivo, codice in linea, elenchi, citazioni, blocchi di codice, righe orizzontali e link vengono impaginati, e i link restano cliccabili nel PDF. Incolla il tuo Markdown o apri un file .md, scegli formato pagina, carattere e margini, e controlla l’anteprima dal vivo prima di scaricare. Tutto avviene nel tuo browser.",
    "seoTitle": "Convertire Markdown in PDF – Gratis, anteprima dal vivo",
    "seoDescription": "Converti Markdown in PDF nel browser: titoli, elenchi, blocchi di codice e link cliccabili, con anteprima dal vivo. Gratis, nessun upload.",
    "keywords": [
      "markdown in pdf",
      "md in pdf",
      "convertire markdown in pdf",
      "readme in pdf",
      "convertitore markdown pdf"
    ],
    "howToSteps": [
      {
        "title": "Aggiungi il Markdown",
        "description": "Incollalo o apri un file .md."
      },
      {
        "title": "Scegli l’aspetto",
        "description": "Formato pagina, carattere, dimensione del testo, margini e numeri di pagina."
      },
      {
        "title": "Scarica il PDF",
        "description": "Controlla l’anteprima e salvalo."
      }
    ],
    "features": [
      {
        "title": "Formattazione mantenuta",
        "description": "Titoli, grassetto, corsivo, codice, elenchi, citazioni e righe."
      },
      {
        "title": "Link cliccabili",
        "description": "I link del tuo Markdown funzionano nel PDF."
      },
      {
        "title": "Anteprima dal vivo",
        "description": "Vedi le pagine prima di scaricare."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Tabelle e immagini sono supportate?",
        "answer": "Non ancora. Tabelle e immagini nel Markdown compaiono come testo; titoli, elenchi, codice e link vengono impaginati."
      },
      {
        "question": "Quale Markdown segue?",
        "answer": "La sintassi comune usata da GitHub e dalla maggior parte degli editor: # titoli, **grassetto**, *corsivo*, `codice`, elenchi, > citazioni, ``` blocchi di codice e [link](…)."
      },
      {
        "question": "Il testo è ricercabile?",
        "answer": "Sì. Il PDF contiene testo vero, quindi si può selezionare, cercare e copiare."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "extract-images-from-pdf": {
    "name": "Estrai immagini da PDF",
    "shortName": "Estrai immagini",
    "tagline": "Salva tutte le immagini contenute in un PDF alla loro risoluzione, in PNG o JPG, in un unico ZIP. Gratis e funziona sul tuo dispositivo.",
    "intro": "Estrai immagini da PDF trova le foto, i loghi e le illustrazioni incorporati in un PDF e li salva alla risoluzione con cui sono memorizzati, invece di uno screenshot della pagina. Ogni immagine viene mostrata con le sue dimensioni e le pagine in cui compare; un’immagine usata su molte pagine, come un logo, viene elencata una sola volta. Guardale a grandezza intera, togli la spunta a quelle che non ti servono e scaricale come PNG senza perdita o come JPG più leggeri, tutte insieme in uno ZIP. Tutto avviene nel tuo browser.",
    "seoTitle": "Estrarre immagini da PDF – Gratis, risoluzione originale",
    "seoDescription": "Salva le immagini contenute in un PDF alla loro risoluzione, nel browser. Visualizza, scegli e scarica PNG o JPG in un unico ZIP. Gratis, nessun upload.",
    "keywords": [
      "estrarre immagini da pdf",
      "estrattore immagini pdf",
      "salvare immagini da pdf",
      "prendere foto da pdf",
      "scaricare immagini da pdf"
    ],
    "howToSteps": [
      {
        "title": "Apri il PDF",
        "description": "Nelle sue pagine vengono cercate le immagini."
      },
      {
        "title": "Scegli le immagini",
        "description": "Guardale a grandezza intera e togli la spunta a quelle che non vuoi."
      },
      {
        "title": "Scaricale",
        "description": "Salva file PNG o JPG, tutti insieme in uno ZIP."
      }
    ],
    "features": [
      {
        "title": "Risoluzione originale",
        "description": "Le immagini escono alle dimensioni memorizzate nel PDF, non come screenshot."
      },
      {
        "title": "Ogni immagine una volta",
        "description": "Un logo ripetuto su ogni pagina viene elencato una volta, con le sue pagine."
      },
      {
        "title": "Niente elementi superflui",
        "description": "Le immagini minuscole come icone e linee possono essere escluse."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Perché manca un’immagine?",
        "answer": "Alcuni PDF disegnano la grafica con linee e forme invece che con immagini, e questa non può essere estratta come immagine. Per salvare l’aspetto di una pagina, usa Da PDF a JPG."
      },
      {
        "question": "PNG o JPG?",
        "answer": "Il PNG conserva ogni pixel esattamente; il JPG crea file molto più leggeri per le foto."
      },
      {
        "question": "Riottengo i file originali?",
        "answer": "Ottieni i dati dell’immagine memorizzati nel PDF, decodificati alla loro risoluzione. Il formato e il nome del file originale non vengono conservati in un PDF."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "delete-blank-pages-pdf": {
    "name": "Elimina pagine vuote dal PDF",
    "shortName": "Elimina pagine vuote",
    "tagline": "Trova le pagine vuote in un PDF scansionato e rimuovile dopo un rapido controllo. Gratis e funziona sul tuo dispositivo.",
    "intro": "La scansione fronte-retro lascia retri vuoti nei tuoi PDF. Elimina pagine vuote esamina ogni pagina, spunta quelle vuote e ti permette di controllarle prima che venga rimosso qualcosa: guarda qualsiasi pagina a grandezza intera, togli la spunta a una pagina che vuoi tenere o spuntane una tu. Le pagine vuote scansionate raramente sono bianche al 100%, quindi un cursore di sensibilità decide quanta grana della carta, trasparenza dal retro o un numero di pagina isolato conta ancora come pagina vuota. Poi scarica il PDF senza quelle pagine. Tutto avviene nel tuo browser.",
    "seoTitle": "Eliminare pagine vuote dal PDF – Gratis, automatico",
    "seoDescription": "Trova ed elimina le pagine vuote dai PDF scansionati nel browser. Rilevamento automatico, sensibilità regolabile, controllo prima di eliminare. Gratis.",
    "keywords": [
      "eliminare pagine vuote pdf",
      "rimuovere pagine bianche pdf",
      "cancellare pagine vuote pdf",
      "togliere pagine bianche da pdf",
      "rimuovere pagine vuote da pdf"
    ],
    "howToSteps": [
      {
        "title": "Apri il PDF",
        "description": "Ogni pagina viene controllata per vedere se ha contenuto."
      },
      {
        "title": "Controlla le pagine spuntate",
        "description": "Le pagine vuote vengono spuntate; regola la sensibilità o metti e togli le spunte."
      },
      {
        "title": "Scarica",
        "description": "Salva il PDF senza le pagine spuntate."
      }
    ],
    "features": [
      {
        "title": "Rilevamento automatico",
        "description": "Le pagine vuote vengono trovate e spuntate per te."
      },
      {
        "title": "Sensibilità regolabile",
        "description": "Decidi se le pagine quasi vuote contano come vuote."
      },
      {
        "title": "Controllo prima di eliminare",
        "description": "Apri qualsiasi pagina a grandezza intera prima che venga rimossa."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Elimina anche le pagine con poco testo?",
        "answer": "Con l’impostazione predefinita, le pagine con una riga di testo vengono mantenute. Aumenta la sensibilità per rimuovere anche le pagine con solo un numero di pagina o segni leggeri."
      },
      {
        "question": "Perché una pagina vuota non è spuntata?",
        "answer": "Il rumore dello scanner, un bordo scuro o la trasparenza dal retro possono sembrare contenuto. Aumenta la sensibilità o spuntala tu."
      },
      {
        "question": "Il resto del PDF viene modificato?",
        "answer": "No. Le altre pagine vengono copiate così come sono."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "compare-pdf": {
    "name": "Confronta PDF",
    "shortName": "Confronta PDF",
    "tagline": "Scopri cosa è cambiato tra due versioni di un PDF: il testo parola per parola e ogni pagina pixel per pixel. Gratis e funziona sul tuo dispositivo.",
    "intro": "Confronta PDF mostra le differenze tra due versioni di un documento, come un contratto prima e dopo le modifiche o due bozze di una relazione. La vista testo elenca ogni parola rimossa e aggiunta, con solo i passaggi modificati se preferisci, e il conteggio delle modifiche. La vista visiva mette le pagine una accanto all’altra ed evidenzia ogni differenza in magenta, così noti anche le modifiche a immagini, impaginazione e firme. Scarica le modifiche come report di testo. Tutto avviene nel tuo browser.",
    "seoTitle": "Confrontare PDF online – Trova le differenze, gratis",
    "seoDescription": "Confronta due PDF nel browser: parole modificate evidenziate e pagine confrontate pixel per pixel. Gratis, riservato, nessun upload.",
    "keywords": [
      "confrontare pdf",
      "confrontare due file pdf",
      "differenze tra pdf",
      "trovare differenze tra due pdf",
      "confronto pdf online"
    ],
    "howToSteps": [
      {
        "title": "Aggiungi entrambi i PDF",
        "description": "Prima l’originale, poi la versione modificata."
      },
      {
        "title": "Guarda le modifiche",
        "description": "Leggi le modifiche al testo, o passa al confronto visivo pagina per pagina."
      },
      {
        "title": "Salva un report",
        "description": "Scarica le modifiche al testo come report .txt."
      }
    ],
    "features": [
      {
        "title": "Parola per parola",
        "description": "Parole rimosse in rosso, parole aggiunte in verde, con un totale."
      },
      {
        "title": "Pixel per pixel",
        "description": "Ogni differenza visiva su una pagina evidenziata in magenta."
      },
      {
        "title": "Solo le modifiche",
        "description": "Nascondi il testo invariato per concentrarti su ciò che è diverso."
      },
      {
        "title": "Riservato",
        "description": "Entrambi i documenti restano sul tuo dispositivo."
      }
    ],
    "faqs": [
      {
        "question": "I PDF devono avere lo stesso numero di pagine?",
        "answer": "No. Il testo viene confrontato nel suo insieme, quindi le pagine aggiunte o rimosse compaiono come testo aggiunto o rimosso. La vista visiva confronta le pagine con lo stesso numero."
      },
      {
        "question": "Perché la vista visiva mostra modifiche che la vista testo non mostra?",
        "answer": "Immagini, impaginazione, colori e firme non sono testo; la vista visiva li rileva."
      },
      {
        "question": "Può confrontare PDF scansionati?",
        "answer": "La vista visiva sì. Per la vista testo, passa prima entrambi i file in OCR PDF."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
  "overlay-pdf": {
    "name": "Sovrapponi PDF",
    "shortName": "Sovrapponi PDF",
    "tagline": "Metti una carta intestata, uno sfondo o un timbro da un PDF sopra o sotto le pagine di un altro. Gratis e funziona sul tuo dispositivo.",
    "intro": "Sovrapponi PDF combina due PDF pagina su pagina: metti la carta intestata della tua azienda dietro una lettera, uno sfondo grafico sotto una relazione o un foglio “Bozza” o “Approvato” sopra ogni pagina. Scegli se la sovrapposizione va sopra o sotto, quale pagina della sovrapposizione va dove (la prima su ogni pagina, o pagina per pagina), quali pagine coprire e quanto deve essere intensa. L’anteprima mostra ogni pagina come verrà salvata. Tutto avviene nel tuo browser.",
    "seoTitle": "Sovrapporre PDF – Aggiungi carta intestata o sfondo, gratis",
    "seoDescription": "Metti una carta intestata, uno sfondo o un timbro in PDF sopra o sotto le pagine di un altro PDF, nel browser. Anteprima dal vivo. Gratis, nessun upload.",
    "keywords": [
      "sovrapporre pdf",
      "aggiungere carta intestata a pdf",
      "sfondo pdf",
      "sovrapporre un pdf a un altro",
      "carta intestata pdf"
    ],
    "howToSteps": [
      {
        "title": "Apri il PDF",
        "description": "Il documento su cui va la sovrapposizione."
      },
      {
        "title": "Scegli il PDF da sovrapporre",
        "description": "Una carta intestata, uno sfondo o un foglio con un timbro; imposta sopra o sotto, pagine e opacità."
      },
      {
        "title": "Scarica il PDF",
        "description": "Controlla l’anteprima e salvalo."
      }
    ],
    "features": [
      {
        "title": "Sopra o sotto",
        "description": "Un timbro sopra il testo, o una carta intestata dietro."
      },
      {
        "title": "Abbinamento delle pagine",
        "description": "Usa la prima pagina della sovrapposizione ovunque, o abbina le pagine una per una."
      },
      {
        "title": "Resta nitido",
        "description": "La sovrapposizione viene inserita come contenuto vettoriale, non come immagine."
      },
      {
        "title": "Riservato",
        "description": "Il PDF viene elaborato nel tuo browser e non viene mai caricato."
      }
    ],
    "faqs": [
      {
        "question": "Perché non vedo la sovrapposizione sotto?",
        "answer": "Alcuni PDF dipingono uno sfondo bianco su ogni pagina, che nasconde tutto ciò che sta sotto. Metti invece la sovrapposizione sopra con un’opacità più bassa."
      },
      {
        "question": "E se le pagine hanno dimensioni diverse?",
        "answer": "La sovrapposizione viene adattata a ogni pagina, mantenendo le proporzioni, e centrata."
      },
      {
        "question": "Posso usare un’immagine come sovrapposizione?",
        "answer": "Usa Da JPG a PDF per trasformare prima l’immagine in PDF, oppure Filigrana PDF per inserire un’immagine direttamente."
      },
      {
        "question": "Il mio PDF viene caricato?",
        "answer": "No. Tutto avviene nel tuo browser, quindi il documento resta sul tuo dispositivo."
      }
    ]
  },
};
