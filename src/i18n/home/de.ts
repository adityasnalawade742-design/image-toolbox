import { LocalizedHomeData } from '../types';

export const deHome: LocalizedHomeData = {
  heroPill: 'Datenschutz Zuerst • Keine Server-Uploads • 27 Kostenlose Werkzeuge',
  heroHeadlineMain: 'Präzise Bildwerkzeuge,',
  heroHeadlineAccent: 'Direkt in Deinem Browser',
  heroSubheadline: 'Bilder zuschneiden, skalieren, komprimieren, konvertieren und bearbeiten — lokal auf deinem Gerät, ohne Cloud-Uploads und mit maximaler Qualität.',
  guarantee1: '100% Datenschutz im Browser',
  guarantee2: 'Sofortige Geschwindigkeit ohne Upload',
  guarantee3: 'Keine Dateigrößen-Beschränkungen',
  whyChooseTitle: 'Warum Profis Image Toolbox Wählen',
  whyChooseSubtitle: 'Entwickelt für Entwickler, Designer, Fotografen und datenschutzbewusste Anwender.',
  feature1Title: 'Keine Server-Uploads',
  feature1Desc: 'Deine Bilder bleiben sicher auf deinem Gerät. HTML5 Canvas führt alle Berechnungen lokal und isoliert aus.',
  feature2Title: 'Blitzschnelle Canvas-Engine',
  feature2Desc: 'Live-Vorschau in Echtzeit, Stapelverarbeitung und leistungsstarke WebP/PNG-Encoder ohne Server-Warteschlangen.',
  feature3Title: 'Bereit für Entwickler & Webmaster',
  feature3Desc: 'Von Base64-Kodierung bis zu SVG-Rasterung, EXIF-Bereinigung und Multi-Auflösungs-Favicon-Erstellung.',
  categories: [
    { id: 'edit', label: 'Bearbeiten & Transformieren', description: 'Zuschneiden, skalieren, drehen, spiegeln und Rahmen hinzufügen' },
    { id: 'optimize', label: 'Optimieren & Komprimieren', description: 'Dateigrößen verringern und unnötige Metadaten entfernen' },
    { id: 'convert', label: 'Formate Konvertieren', description: 'Zwischen WebP, PNG, JPG und AVIF umwandeln' },
    { id: 'utilities', label: 'Rechner & Hilfsprogramme', description: 'Farbpipette, Seitenverhältnisse und DPI-Rechner' },
    { id: 'developer', label: 'Web- & Entwicklertools', description: 'Favicon-Generator, Base64-Encoder und Data URIs' }
  ],
  faqs: [
    {
      question: 'Werden meine Bilder auf einen Server hochgeladen?',
      answer: 'Nein. Niemals. Image Toolbox führt alle Bildoperationen vollständig im Browser mit HTML5 Canvas aus. Deine Bilder verlassen niemals dein Gerät.'
    },
    {
      question: 'Ist Image Toolbox wirklich 100% kostenlos?',
      answer: 'Ja, alle 27 Werkzeuge sind völlig kostenlos, ohne Nutzungslimits, ohne Wasserzeichen und ohne Registrierung nutzbar.'
    },
    {
      question: 'Welche Bildformate werden unterstützt?',
      answer: 'Unterstützt werden JPG, PNG, WebP, AVIF, SVG, GIF und Base64 Data URIs für alle gängigen Konvertierungs- und Optimierungsaufgaben.'
    },
    {
      question: 'Kann ich mehrere Bilder auf einmal bearbeiten?',
      answer: 'Ja! Mit unseren Stapelverarbeitungs-Werkzeugen kannst du Dutzende Bilder gleichzeitig verarbeiten und als ZIP-Datei herunterladen.'
    }
  ]
};
