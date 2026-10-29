import type { LocalizedHomeData } from '../types';

export const deHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Alle Bildtools, die du brauchst, an einem Ort',
    subtitle:
      'Bilder kostenlos zuschneiden, verkleinern, komprimieren, umwandeln, Hintergründe entfernen und Fotos bereinigen. Ohne Anmeldung, ohne Wasserzeichen, und deine Dateien bleiben auf deinem Gerät.',
    dropzoneTitle: 'Bild ablegen und loslegen',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, TIFF, SVG oder iPhone-HEIC, bis 50 MB',
  },
  sections: {
    indexTitle: 'Alle Tools',
    indexSubtitle: 'Jedes Tool funktioniert gleich: Bild öffnen, anpassen, herunterladen.',
    pillarsTitle: 'So funktioniert es',
    faqTitle: 'Fragen',
  },
  trustPillars: [
    {
      title: 'Ein Arbeitsbereich für alles',
      description:
        'Jedes Tool öffnet sich auf die gleiche Weise, und du kannst dein Bild direkt an das nächste weitergeben, zum Beispiel erst zuschneiden und dann komprimieren.',
      icon: 'Layers',
    },
    {
      title: 'Nichts wird hochgeladen',
      description:
        'Dein Browser verarbeitet die Bilder auf deinem eigenen Gerät. Du wartest also nicht auf einen Upload, und auf keinem Server liegt eine Kopie.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Kostenlos, ohne Konto',
      description:
        'Keine Anmeldung, keine Wasserzeichen und keine Tageslimits. Einzelne Dateien dürfen bis zu 50 MB groß sein, die Tools für mehrere Bilder nehmen bis zu 50 Dateien auf.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Bearbeiten & Umformen',
    'optimize-compress': 'Optimieren & Komprimieren',
    'convert-formats': 'Formate umwandeln',
    'pdf-documents': 'PDF & Dokumente',
    utilities: 'Prüfen & Hilfsmittel',
    developer: 'Entwickler-Tools',
  },
  faqs: [
    {
      question: 'Werden meine Bilder irgendwo hochgeladen?',
      answer:
        'Nein. Jedes Tool läuft in deinem Browser. Deine Bilder werden also auf deinem eigenen Gerät verarbeitet und nie an einen Server gesendet. Der Hintergrund-Entferner lädt sein KI-Modell einmalig herunter und arbeitet danach ebenfalls auf deinem Gerät.',
    },
    {
      question: 'Ist das wirklich kostenlos?',
      answer: 'Ja. Alle Tools kannst du ohne Konto kostenlos nutzen, und nichts bekommt ein Wasserzeichen.',
    },
    {
      question: 'Wie groß dürfen meine Bilder sein?',
      answer:
        'Einzelne Bilder dürfen bis zu 50 MB groß sein. „Mehrere Bilder komprimieren“ und „Mehrere Bilder skalieren“ nehmen bis zu 50 Bilder auf einmal auf, jedes bis zu 50 MB. Sehr große Fotos können auf älteren Handys langsam sein.',
    },
    {
      question: 'Welche Formate kann ich öffnen und speichern?',
      answer:
        'Du kannst JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, TIFF, SVG und iPhone-HEIC-Fotos öffnen. Je nach Tool speicherst du als JPG, PNG, WebP oder AVIF.',
    },
    {
      question: 'Funktioniert das auf meinem Handy?',
      answer:
        'Ja. Die Tools funktionieren in aktuellen mobilen Browsern auf iPhone und Android, auch mit HEIC-Fotos vom iPhone. Du kannst die Website auch als App installieren. Nach dem ersten Besuch funktionieren die meisten Tools offline; AVIF-Export und Hintergrundentfernung musst du einmal online verwenden.',
    },
    {
      question: 'Kann ich mehrere Tools nacheinander nutzen?',
      answer:
        'Ja. Wähle nach dem Bearbeiten einen nächsten Schritt wie Komprimieren oder Größe ändern. Dein Bild öffnet sich dann direkt in diesem Tool, ohne dass du es speichern und neu hochladen musst.',
    },
  ],
};
