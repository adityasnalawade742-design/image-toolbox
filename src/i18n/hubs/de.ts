import type { HubTexts } from './types';

export const deHubs: HubTexts = {
  labels: {
    server: 'Nutzt unseren Server',
    more: 'Weitere Sammlungen',
    allTools: 'Alle {count} Tools',
  },
  pages: {
    'pdf-tools': {
      title: 'Kostenlose PDF-Tools: zusammenfügen, umwandeln, signieren',
      description: '57 kostenlose PDF-Tools an einem Ort: PDFs zusammenfügen, teilen und komprimieren, aus und in Word oder Bilder umwandeln, bearbeiten, signieren und schützen. Ohne Anmeldung, ohne Wasserzeichen.',
      h1: 'PDF-Tools',
      intro:
        'Alles für die Arbeit mit PDFs, kostenlos und ohne Konto: Dateien zusammenfügen und teilen, Word, Excel, PowerPoint und Bilder in PDFs umwandeln und zurück, bearbeiten, ausfüllen, signieren und schützen. Die meisten Tools laufen in deinem Browser, das PDF bleibt also auf deinem Gerät; die wenigen, die unseren Server brauchen, sind gekennzeichnet, und ihre Dateien werden gleich danach gelöscht.',
      groups: {
        toPdf: 'In PDF umwandeln',
        fromPdf: 'PDF umwandeln',
        edit: 'Bearbeiten und kommentieren',
        pages: 'Seiten ordnen',
        secure: 'Signieren, schützen und bereinigen',
        fix: 'Komprimieren, reparieren und prüfen',
      },
      faqs: [
        { question: 'Sind diese PDF-Tools kostenlos?', answer: 'Ja. Alle Tools sind kostenlos und ohne Konto nutzbar, ohne Wasserzeichen und ohne Tageslimit.' },
        {
          question: 'Werden meine PDFs hochgeladen?',
          answer:
            'Die meisten Tools arbeiten in deinem Browser, die Datei bleibt also auf deinem Gerät. Tools mit dem Hinweis „Nutzt unseren Server“, etwa Word in PDF, PDF komprimieren und PDF-OCR, senden die Datei über eine verschlüsselte Verbindung und löschen sie, sobald das Ergebnis zurückgeschickt ist.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Kostenlose Bildbearbeitung: zuschneiden, Größe ändern',
      description: '42 kostenlose Tools zur Bildbearbeitung im Browser: zuschneiden, Größe ändern und drehen, Hintergrund entfernen oder ändern, Text und Wasserzeichen hinzufügen, Farben korrigieren und Bilder für soziale Netzwerke anpassen.',
      h1: 'Tools zur Bildbearbeitung',
      intro:
        'Schnelle Bearbeitungen ohne Installation: zuschneiden und skalieren, Hintergrund freistellen oder ersetzen, Text, Wasserzeichen und Rahmen hinzufügen, schärfen und Farben korrigieren oder ein Bild für Instagram, YouTube und andere Netzwerke zuschneiden. Alle Tools laufen in deinem Browser, deine Fotos werden also nie hochgeladen und behalten nach Möglichkeit ihr Format.',
      groups: {
        basics: 'Zuschneiden, skalieren und drehen',
        background: 'Hintergründe und Freistellen',
        text: 'Text, Wasserzeichen und Markierungen',
        enhance: 'Korrigieren und verbessern',
        social: 'Größen für soziale Netzwerke',
        combine: 'Zusammenfügen und teilen',
      },
      faqs: [
        { question: 'Muss ich eine App installieren?', answer: 'Nein. Die Tools laufen in jedem aktuellen Browser auf Computer und Handy, und deine Fotos bleiben auf deinem Gerät.' },
        {
          question: 'Verliert mein Foto an Qualität?',
          answer: 'Bearbeitet wird das Foto in voller Größe und nach Möglichkeit in seinem ursprünglichen Format gespeichert. JPG- und WebP-Dateien werden in hoher Qualität neu gespeichert.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Kostenloser Bildkonverter: HEIC, JPG, PNG, WebP, AVIF',
      description: '26 kostenlose Bildkonverter im Browser: HEIC in JPG, JPG in PNG, WebP und AVIF, GIF, BMP, TIFF und SVG in gängige Formate, mehrere Dateien auf einmal.',
      h1: 'Bildformat-Konverter',
      intro:
        'Wandle ein Bild in das Format um, das du brauchst: HEIC-Fotos vom iPhone in JPG, PNG in JPG oder WebP für kleinere Dateien, AVIF fürs Web oder GIF, BMP, TIFF und SVG in gängige Formate. Die meisten Konverter nehmen mehrere Dateien auf einmal, und alle laufen in deinem Browser, es wird also nichts hochgeladen. Unsicher, welcher passt? Der Universelle Bildkonverter öffnet fast jedes Bild und speichert es als JPG, PNG, WebP oder AVIF.',
      groups: {
        any: 'Jedes Format',
        heic: 'iPhone-Fotos (HEIC)',
        jpgPng: 'JPG und PNG',
        web: 'WebP und AVIF',
        other: 'GIF, BMP, TIFF und SVG',
        pdf: 'In PDF und Text',
      },
      faqs: [
        {
          question: 'Welches Format soll ich wählen?',
          answer: 'JPG für Fotos, die sich überall öffnen sollen, PNG für Screenshots, Logos und Transparenz, WebP oder AVIF für kleinere Dateien auf Websites. HEIC-Fotos vom iPhone wandelst du zum Teilen am besten in JPG um.',
        },
        { question: 'Kann ich viele Bilder auf einmal umwandeln?', answer: 'Ja. Zieh mehrere Dateien auf einen Konverter: Sie werden mit denselben Einstellungen umgewandelt und als eine ZIP-Datei heruntergeladen.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Kostenloser QR-Code- und Barcode-Generator und -Scanner',
      description: '15 kostenlose Tools für QR-Codes zu Links, WLAN, Kontakten, WhatsApp und Zahlungen, für EAN-, UPC- und ISBN-Barcodes und zum Lesen von Codes mit der Kamera.',
      h1: 'QR-Code- und Barcode-Tools',
      intro:
        'Erstelle einen QR-Code für einen Link, ein WLAN, eine Visitenkarte, einen WhatsApp-Chat oder eine Zahlung, erzeuge EAN-, UPC-, ISBN-, Data-Matrix- und PDF417-Barcodes oder Hunderte auf einmal aus einer Liste und drucke sie auf einem Bogen. Du kannst Codes auch aus einem Foto oder mit der Kamera lesen. Alles läuft in deinem Browser, ohne Anmeldung.',
      groups: {
        qr: 'QR-Codes',
        barcodes: 'Barcodes',
        read: 'Scannen und lesen',
      },
      faqs: [
        { question: 'Laufen die QR-Codes ab?', answer: 'Nein. Der Inhalt steckt im Code selbst, nicht hinter einem Link von uns, er funktioniert also, solange der gedruckte Code lesbar ist.' },
        {
          question: 'Kann ich diese Barcodes auf Produkten im Handel nutzen?',
          answer: 'Die Barcodes entsprechen dem Standard, aber EAN- und UPC-Nummern für Produkte im Handel vergibt GS1. Für eigenen Bestand, Regale oder Veranstaltungen funktioniert jede Nummer.',
        },
      ],
    },
    'image-utilities': {
      title: 'Kostenlose Bild-Tools: EXIF-Viewer, Farbwähler, DPI',
      description: '21 kostenlose Tools zum Prüfen und Messen von Bildern: Metadaten ansehen und entfernen, Farben aufnehmen, DPI ändern, Pixel in Zoll oder cm umrechnen, Fotos vergleichen und Text aus Bildern kopieren.',
      h1: 'Bild-Werkzeuge',
      intro:
        'Kleine Tools für die Fragen rund um Bilder: was die Metadaten eines Fotos verraten und wie du sie entfernst, welche Farben es nutzt, wie groß es bei einer bestimmten DPI gedruckt wird, ob zwei Fotos sich unterscheiden oder welchen Text es enthält. Alle laufen in deinem Browser, deine Bilder bleiben also auf deinem Gerät.',
      groups: {
        inspect: 'Fotos prüfen',
        colour: 'Farben',
        size: 'Größen, DPI und Druck',
        text: 'Text und versteckte Nachrichten',
      },
      faqs: [
        {
          question: 'Kann ich den Standort aus einem Foto entfernen?',
          answer: 'Ja. Bild-Metadaten entfernen löscht den GPS-Standort, Kameradaten und andere EXIF-Daten, und der EXIF-Viewer zeigt vor dem Teilen, was ein Foto enthält.',
        },
        {
          question: 'Welche DPI brauche ich zum Drucken?',
          answer: '300 DPI sind für Fotos und Dokumente üblich. Die DPI legen nur die Druckgröße fest, nicht die Pixelzahl: DPI ändern schreibt sie in die Datei, und die Rechner Pixel in Zoll und Pixel in cm zeigen, wie groß das Bild gedruckt wird.',
        },
      ],
    },
  },
};
