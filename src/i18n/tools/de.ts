import type { LocalizedToolItem } from '../types';

export const deTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Bild zuschneiden",
    shortName: "Zuschneiden",
    tagline: "Schneide genau den Teil eines Fotos aus, den du brauchst: mit Ziehpunkten, exakten Pixelwerten oder fertigen Seitenverhältnissen.",
    intro:
      "Bild zuschneiden kürzt ein Foto auf den gewählten Bereich und speichert nur diesen Bereich in voller Auflösung. So entfernst du leere Ränder, rückst ein Motiv in den Mittelpunkt oder bringst ein Bild in die Form, die ein Social-Media-Beitrag braucht. Neben dem freien Zuschnitt gibt es Vorgaben wie 1:1, 4:5, 9:16 und 16:9, exakte Pixelangaben und einen Kreismodus für Profilbilder.",
    seoTitle: "Bild zuschneiden online – kostenlos, ohne Upload",
    seoDescription:
      "Bild zuschneiden, kostenlos: Rahmen ziehen oder Pixel eingeben, Vorgaben wie 1:1, 4:5, 16:9 und 9:16 nutzen und als JPG, PNG, WebP oder AVIF speichern.",
    keywords: [
      "bild zuschneiden",
      "foto zuschneiden online",
      "bild quadratisch zuschneiden",
      "bild für instagram zuschneiden",
      "bild auf 16:9 zuschneiden",
      "bild rund zuschneiden",
      "bild zuschneiden ohne qualitätsverlust",
    ],
    howToSteps: [
      {
        title: "Foto hinzufügen",
        description:
          "Zieh ein Bild in das Upload-Feld, klicke, um eine Datei auszuwählen, oder füge es mit Ctrl+V ein. JPG, PNG, WebP, AVIF, GIF und iPhone-HEIC werden unterstützt.",
      },
      {
        title: "Ausschnitt wählen",
        description:
          "Zieh den Rahmen und seine Ziehpunkte in der Vorschau oder klicke auf ein Verhältnis wie „Quadrat“ (1:1), „Story“ (9:16) oder ein Social-Media-Format. Für ein exaktes Ergebnis gibst du linken Rand, oberen Rand, Breite und Höhe in Pixeln ein.",
      },
      {
        title: "Form und Format wählen",
        description:
          "Wechsle zu „Kreis“ (1:1) für einen runden Zuschnitt. Standardmäßig bleibt das Originalformat erhalten, unter „Speichern als“ kannst du aber auch JPG, PNG, WebP oder AVIF wählen.",
      },
      {
        title: "Zugeschnittenes Bild herunterladen",
        description:
          "Klicke auf „Herunterladen“, um nur den gewählten Bereich in voller Auflösung zu speichern, oder kopiere ihn in die Zwischenablage.",
      },
    ],
    features: [
      {
        title: "Seitenverhältnisse und Social-Media-Formate",
        description:
          "Original, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 und 21:9, dazu Formate für Instagram-Hochformat (4:5), Reels und TikTok, YouTube-Thumbnails und Pinterest-Pins.",
      },
      {
        title: "Pixelgenaue Eingabe",
        description:
          "Gib Position, Breite und Höhe in Pixeln ein, sperre bei Bedarf das Verhältnis und sieh die endgültige Größe, bevor du speicherst.",
      },
      {
        title: "Runder Zuschnitt für Profilbilder",
        description:
          "Im Kreismodus wird der Rahmen auf ein Quadrat festgelegt und ein rundes Bild ausgeschnitten. Speichere als PNG oder WebP, damit die Ecken transparent bleiben.",
      },
      {
        title: "Aus den Originalpixeln geschnitten",
        description:
          "Die Vorschau ist für mehr Tempo eventuell verkleinert, der Download wird aber aus dem Foto in voller Auflösung auf deinem Gerät geschnitten. Nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Verschlechtert Zuschneiden die Bildqualität?",
        answer:
          "Beim Zuschneiden werden nur die Pixel außerhalb des Rahmens entfernt, der Rest bleibt scharf. Speicherst du als JPG, WebP oder AVIF, wird das Bild erneut komprimiert. Nutze dann 90 % Qualität oder mehr oder speichere als PNG, um nah am Original zu bleiben.",
      },
      {
        question: "Wie schneide ich ein Foto für Instagram quadratisch zu?",
        answer:
          "Klicke auf „Quadrat“ (1:1) oder unter „Social-Media-Formate“ auf „Beitrag“ und zieh den Rahmen über den Teil, den du behalten willst. Für einen höheren Hochformat-Beitrag nimmst du stattdessen „Hochformat“ (4:5).",
      },
      {
        question: "Wie erstelle ich ein rundes Profilbild?",
        answer:
          "Wähle „Kreis“ (1:1), schieb den Kreis über das Gesicht und speichere als PNG oder WebP. JPG kann keine Transparenz speichern, deshalb würde der Bereich außerhalb des Kreises weiß gefüllt.",
      },
      {
        question: "Kann ich ein iPhone-Foto im HEIC-Format zuschneiden?",
        answer:
          "Ja. Die HEIC-Datei wird beim Öffnen in deinem Browser umgewandelt. Das Ergebnis wird standardmäßig als JPG gespeichert, du kannst aber auch PNG, WebP oder AVIF wählen.",
      },
      {
        question: "Bleiben die EXIF-Daten nach dem Zuschneiden erhalten?",
        answer:
          "Nein. Die neue Datei wird nur aus den Bildpixeln erstellt. Kameradaten und GPS-Standort des Originals werden also nicht übernommen.",
      },
      {
        question: "Kann ich ein animiertes GIF zuschneiden?",
        answer:
          "Du kannst ein GIF öffnen, das Ergebnis ist aber ein einzelnes Standbild, weil JPG, PNG, WebP und AVIF hier ohne Animation gespeichert werden.",
      },
    ],
  },
  "resize-image": {
    name: "Bildgröße ändern",
    shortName: "Größe ändern",
    tagline: "Ändere Breite und Höhe eines Bildes in Pixeln oder Prozent, mit festem oder freiem Seitenverhältnis.",
    intro:
      "Bildgröße ändern passt die Pixelmaße eines Fotos oder einer Grafik an. So machst du ein großes Kamerafoto klein genug für eine E-Mail oder eine Website oder bringst es auf eine exakte Größe wie 1080 × 1080. Du gibst Breite und Höhe ein oder skalierst um 10 % bis 300 %. Die Option „Nicht vergrößern“ verhindert, dass du ein Bild aus Versehen vergrößerst.",
    seoTitle: "Bild verkleinern online – exakte Pixel oder Prozent",
    seoDescription:
      "Bild verkleinern oder Bildgröße ändern, kostenlos: Breite und Höhe in Pixeln eingeben oder in Prozent skalieren und als JPG, PNG, WebP oder AVIF speichern.",
    keywords: [
      "bild verkleinern",
      "bildgröße ändern",
      "bildgröße ändern online",
      "bild auf pixel verkleinern",
      "foto verkleinern ohne qualitätsverlust",
      "bild auf 1080x1080 ändern",
      "bild skalieren",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein JPG-, PNG-, WebP-, AVIF- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es mit Ctrl+V ein.",
      },
      {
        title: "Neue Größe festlegen",
        description:
          "Im Modus „Pixel“ gibst du eine Breite oder Höhe ein. Ist „Seitenverhältnis beibehalten“ aktiv, passt sich die andere Seite automatisch an. Im Modus „Prozent“ nutzt du den Schieberegler oder die Schaltflächen von 25 % bis 200 %.",
      },
      {
        title: "Dateiformat wählen",
        description:
          "Standardmäßig bleibt das Originalformat erhalten. Du kannst zu JPG, PNG, WebP oder AVIF wechseln und für JPG, WebP und AVIF die Qualität einstellen.",
      },
      {
        title: "Ergebnis herunterladen",
        description:
          "Klicke auf „Herunterladen“, um das skalierte Bild zu speichern, oder schick es an „Komprimieren“, wenn die Datei auch kleiner werden soll.",
      },
    ],
    features: [
      {
        title: "Pixel oder Prozent",
        description: "Gib exakte Maße bis 10.000 Pixel ein oder skaliere das ganze Bild von 10 % bis 300 %.",
      },
      {
        title: "Festes Seitenverhältnis",
        description:
          "Behalte die ursprünglichen Proportionen bei, damit nichts verzerrt wird, oder löse die Sperre, um Breite und Höhe getrennt festzulegen.",
      },
      {
        title: "Kein versehentliches Vergrößern",
        description:
          "Begrenzt die Größe auf die Originalmaße, damit ein kleines Bild nie aus Versehen vergrößert und unscharf wird.",
      },
      {
        title: "Dein Dateityp bleibt",
        description: "Ein JPG bleibt ein JPG und ein PNG bleibt ein PNG, außer du wählst ein anderes Format.",
      },
    ],
    faqs: [
      {
        question: "Wie verkleinere ich ein Bild ohne Qualitätsverlust?",
        answer:
          "Beim Verkleinern bleibt ein Bild scharf. Beim Vergrößern über das Original hinaus kommen keine Details dazu, es wirkt also weicher. Aktiviere „Nicht vergrößern“, um das zu vermeiden. Speichere als PNG oder nutze für JPG und WebP 90 % Qualität oder mehr.",
      },
      {
        question: "Wird die Datei durch das Verkleinern kleiner?",
        answer:
          "Meistens ja. Halbierst du Breite und Höhe, bleibt etwa ein Viertel der Pixel übrig, und die Datei wird deutlich kleiner. Für noch kleinere Dateien komprimierst du das Ergebnis danach.",
      },
      {
        question: "Kann ich auf eine exakte Größe wie 1080 × 1080 ändern?",
        answer:
          "Ja. Schalte „Seitenverhältnis beibehalten“ aus und gib beide Werte ein. Ist das Original nicht quadratisch, wird es verzerrt. Schneide es deshalb zuerst auf 1:1 zu und ändere dann die Größe.",
      },
      {
        question: "Kann ich viele Bilder auf einmal verkleinern?",
        answer:
          "Diese Seite bearbeitet ein Bild nach dem anderen. Um bis zu 50 Bilder in einem Schritt zu skalieren und als ZIP herunterzuladen, nutze „Mehrere Bilder skalieren“.",
      },
      {
        question: "Kann ich Fotos vom iPhone verkleinern?",
        answer:
          "Ja. HEIC-Fotos werden in deinem Browser umgewandelt, und das skalierte Bild wird standardmäßig als JPG gespeichert.",
      },
    ],
  },
  "compress-image": {
    name: "Bild komprimieren",
    shortName: "Komprimieren",
    tagline: "Mach eine Bilddatei kleiner, indem du Format und Qualität wählst, und sieh die neue Größe vor dem Download.",
    intro:
      "Bild komprimieren verringert die Dateigröße eines Fotos, damit es auf einer Website schneller lädt oder in eine E-Mail oder unter ein Upload-Limit passt. Das Bild wird neu als WebP (Standard), AVIF, JPG oder PNG in der gewählten Qualität gespeichert. Während du den Regler bewegst, siehst du die geschätzte neue Größe und die Ersparnis in Prozent. Im Modus „Dateigröße“ wird die Qualität für dich gewählt, wenn du unter einem Limit wie 100 KB bleiben musst.",
    seoTitle: "Bild komprimieren online – Dateigröße verkleinern",
    seoDescription:
      "Bild komprimieren, kostenlos und ohne Upload: WebP, AVIF, JPG oder PNG wählen, Qualität oder Zielgröße in KB festlegen und die Ersparnis vor dem Download sehen.",
    keywords: [
      "bild komprimieren",
      "dateigröße bild verkleinern",
      "jpg komprimieren",
      "bild auf 100 kb verkleinern",
      "bild komprimieren online",
      "foto für e-mail verkleinern",
      "png komprimieren",
      "bilder in webp umwandeln",
    ],
    howToSteps: [
      {
        title: "Bild hinzufügen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Ausgabeformat wählen",
        description:
          "WebP ist voreingestellt. AVIF ergibt meist die kleinsten Dateien, braucht aber länger zum Kodieren. JPG öffnet sich überall, und PNG ist verlustfrei und spart daher am wenigsten Platz.",
      },
      {
        title: "Qualität oder Zielgröße festlegen",
        description:
          "Bewege den Qualitätsregler und beobachte die geschätzte Größe, oder wechsle zu „Dateigröße“ und gib eine Größe in KB ein oder klicke auf 50, 100, 200 oder 500 KB.",
      },
      {
        title: "Prüfen und herunterladen",
        description: "Sieh dir die Vorschau und die Ersparnis in Prozent an und klicke dann auf „Herunterladen“.",
      },
    ],
    features: [
      {
        title: "Live-Schätzung der Größe",
        description:
          "Neue Dateigröße und Ersparnis aktualisieren sich bei jeder Änderung, und du wirst gewarnt, wenn das Ergebnis größer als das Original wäre.",
      },
      {
        title: "AVIF, WebP, JPG und PNG",
        description:
          "Vier Ausgabeformate, darunter AVIF, das mit einem WebAssembly-Encoder direkt in deinem Browser kodiert wird.",
      },
      {
        title: "Modus für die Zielgröße",
        description:
          "Gib eine Größe in KB ein, und das Tool wählt dafür eine Qualitätsstufe. Das ist eine Schätzung, prüfe also die Live-Größe vor dem Download.",
      },
      {
        title: "Maße bleiben gleich",
        description:
          "Beim Komprimieren bleiben Breite und Höhe erhalten. Soll eine Datei viel kleiner werden, verkleinere sie zuerst und komprimiere sie dann.",
      },
    ],
    faqs: [
      {
        question: "Wie viel kleiner wird mein Bild?",
        answer:
          "Das hängt vom Bild ab. Große Kamerafotos schrumpfen als WebP oder AVIF bei 70 % bis 85 % Qualität oft stark, kleine Grafiken oder bereits komprimierte Dateien dagegen kaum. Die Live-Schätzung zeigt dir das Ergebnis vor dem Download.",
      },
      {
        question: "Welches Format ergibt die kleinste Datei: AVIF, WebP oder JPG?",
        answer:
          "Bei ähnlicher Bildqualität ist AVIF meist am kleinsten, danach folgen WebP und JPG. AVIF braucht im Browser länger zum Kodieren, vor allem bei großen Fotos, und manche älteren Programme können es nicht öffnen.",
      },
      {
        question: "Wie komprimiere ich ein Bild auf 100 KB?",
        answer:
          "Wähle „Dateigröße“ und klicke auf 100 KB. Liegt die Live-Größe noch über 100 KB, senke die Qualität etwas weiter oder verkleinere das Bild zuerst mit „Bildgröße ändern“.",
      },
      {
        question: "Sieht mein Foto nach dem Komprimieren schlechter aus?",
        answer:
          "WebP, AVIF und JPG entfernen Details, die schwer zu erkennen sind. Bei 75 % bis 90 % Qualität sehen die meisten Fotos in normaler Größe gleich aus, sehr niedrige Werte führen dagegen zu Unschärfe und Blockbildung.",
      },
      {
        question: "Warum ist die komprimierte Datei größer als das Original?",
        answer:
          "Das passiert, wenn das Original bereits gut optimiert war oder ein Foto als PNG gespeichert wird. Versuch es mit WebP oder AVIF oder einer niedrigeren Qualität.",
      },
      {
        question: "Werden beim Komprimieren die EXIF-Daten entfernt?",
        answer:
          "Ja. Die neue Datei wird aus den Bildpixeln erstellt, Kamerainformationen und GPS-Standort sind also nicht enthalten.",
      },
    ],
  },
  "rotate-image": {
    name: "Bild drehen",
    shortName: "Drehen",
    tagline: "Dreh ein Bild um 90°, 180° oder einen beliebigen Winkel von -180° bis 180° und speichere es im gewünschten Format.",
    intro:
      "Bild drehen korrigiert Fotos, die seitlich oder auf dem Kopf stehen, und richtet leicht schiefe Bilder gerade aus. Nutze die 90°-Schaltflächen für schnelle Drehungen oder den Regler „Eigener Winkel“ für kleine Korrekturen. Ist der Winkel kein Vielfaches von 90°, wächst die Arbeitsfläche mit, damit das ganze gedrehte Bild hineinpasst und keine Ecken abgeschnitten werden.",
    seoTitle: "Bild drehen online – 90°, 180° oder beliebiger Winkel",
    seoDescription:
      "Bild drehen, kostenlos: Foto um 90° nach links oder rechts, um 180° oder einen eigenen Winkel drehen und als JPG, PNG, WebP oder AVIF speichern. Ohne Upload.",
    keywords: [
      "bild drehen",
      "foto drehen online",
      "bild um 90 grad drehen",
      "jpg drehen",
      "foto gerade ausrichten",
      "bild drehen und speichern",
      "bild um winkel drehen",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Bild drehen",
        description:
          "Klicke auf „Rechts 90°“, um im Uhrzeigersinn zu drehen, auf „Links 90°“ für gegen den Uhrzeigersinn oder auf 180°, um das Bild auf den Kopf zu stellen. Für kleine Korrekturen ziehst du den Regler „Eigener Winkel“.",
      },
      {
        title: "Format wählen",
        description:
          "Standardmäßig bleibt das Originalformat erhalten. Nach einem eigenen Winkel bleiben die neuen Ecken in PNG, WebP und AVIF transparent, JPG füllt sie weiß.",
      },
      {
        title: "Herunterladen",
        description: "Klicke auf „Herunterladen“, um das gedrehte Bild zu speichern, oder kopiere es in die Zwischenablage.",
      },
    ],
    features: [
      {
        title: "Schnell um 90° und 180° drehen",
        description: "Korrigiere seitliche oder auf dem Kopf stehende Fotos mit einem Klick. Mit „Zurücksetzen“ gehst du zurück zum Anfang.",
      },
      {
        title: "Jeder Winkel",
        description: "Richte einen schiefen Horizont oder ein Dokument mit dem Regler gerade aus, in Schritten von einem Grad von -180° bis 180°.",
      },
      {
        title: "Nichts wird abgeschnitten",
        description: "Bei eigenen Winkeln wird die Arbeitsfläche vergrößert, damit das ganze gedrehte Bild hineinpasst.",
      },
      {
        title: "Funktioniert mit iPhone-Fotos",
        description: "HEIC-Fotos werden in deinem Browser umgewandelt, du musst sie also nicht vorher konvertieren.",
      },
    ],
    faqs: [
      {
        question: "Warum steht mein Foto in manchen Apps seitlich?",
        answer:
          "Handys speichern das Bild oft in einer Richtung und hängen ein Drehungs-Tag an die EXIF-Daten an, das manche Apps ignorieren. In der Datei, die du hier herunterlädst, sind die Pixel selbst gedreht und es gibt kein Drehungs-Tag. Sie sieht daher überall gleich aus.",
      },
      {
        question: "Verschlechtert das Drehen die Bildqualität?",
        answer:
          "Bei 90° oder 180° werden Pixel nur verschoben, nicht verändert. Bei anderen Winkeln müssen die Pixel neu berechnet werden, was das Bild ganz leicht weicher macht. Beim Speichern als JPG, WebP oder AVIF wird es außerdem erneut komprimiert, was du mit PNG vermeidest.",
      },
      {
        question: "Was füllt die Ecken nach einer freien Drehung?",
        answer:
          "Die Arbeitsfläche wächst mit dem gedrehten Bild. In PNG, WebP und AVIF sind die neuen Eckbereiche transparent, in JPG sind sie weiß.",
      },
      {
        question: "Kann ich ein iPhone-Foto im HEIC-Format drehen?",
        answer:
          "Ja. Das Foto wird in deinem Browser umgewandelt, und die gedrehte Version wird als JPG gespeichert, außer du wählst ein anderes Format.",
      },
    ],
  },
  "flip-image": {
    name: "Bild spiegeln",
    shortName: "Spiegeln",
    tagline: "Spiegle ein Bild horizontal oder vertikal, zum Beispiel um ein seitenverkehrtes Selfie oder spiegelverkehrte Schrift zu korrigieren.",
    intro:
      "Bild spiegeln erstellt eine gespiegelte Kopie eines Bildes. Beim horizontalen Spiegeln werden links und rechts vertauscht. Das korrigiert Selfies von der Frontkamera, auf denen Schrift spiegelverkehrt erscheint. Beim vertikalen Spiegeln steht das Bild auf dem Kopf wie eine Spiegelung im Wasser, und beide Richtungen zusammen ergeben dasselbe wie eine Drehung um 180°.",
    seoTitle: "Bild spiegeln online – horizontal oder vertikal",
    seoDescription:
      "Bild spiegeln, kostenlos: Foto horizontal oder vertikal spiegeln, verkehrte Selfies und Schrift korrigieren und als JPG, PNG, WebP oder AVIF speichern.",
    keywords: [
      "bild spiegeln",
      "foto spiegeln online",
      "bild horizontal spiegeln",
      "bild vertikal spiegeln",
      "selfie spiegeln",
      "bild seitenverkehrt machen",
      "spiegelbild erstellen",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Richtung wählen",
        description:
          "Klicke auf „Horizontal“, um links und rechts zu tauschen, oder auf „Vertikal“, um das Bild auf den Kopf zu stellen. Ein zweiter Klick macht die Spiegelung rückgängig. Alternativ nutzt du „Beides spiegeln“ oder „Zurücksetzen“.",
      },
      {
        title: "Format wählen",
        description: "Standardmäßig bleibt das Originalformat erhalten, du kannst aber auch als JPG, PNG, WebP oder AVIF speichern.",
      },
      {
        title: "Herunterladen",
        description: "Klicke auf „Herunterladen“, um das gespiegelte Bild zu speichern, oder kopiere es in die Zwischenablage.",
      },
    ],
    features: [
      {
        title: "Horizontal und vertikal spiegeln",
        description: "Spiegle in eine oder beide Richtungen und sieh das Ergebnis sofort in der Vorschau.",
      },
      {
        title: "Pixel bleiben unverändert",
        description: "Beim Spiegeln werden Pixel nur an neue Positionen verschoben. Speichere als PNG, damit jedes Pixel exakt erhalten bleibt.",
      },
      {
        title: "Dein Format bleibt",
        description: "Ein JPG wird standardmäßig als JPG gespeichert und ein PNG als PNG. Du bekommst also dieselbe Dateiart zurück.",
      },
      {
        title: "Im Browser verarbeitet",
        description: "Das Bild wird auf deinem Gerät gespiegelt und nie auf einen Server hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen Spiegeln und Drehen?",
        answer:
          "Beim Spiegeln entsteht ein Spiegelbild, Text ist also spiegelverkehrt. Beim Drehen wird das ganze Bild um seine Mitte gedreht, und Text bleibt lesbar.",
      },
      {
        question: "Wie korrigiere ich ein gespiegeltes Selfie?",
        answer:
          "Viele Frontkameras speichern Selfies als Spiegelbild. Öffne das Foto, klicke auf „Horizontal“ und lade es herunter. Schrift im Hintergrund ist dann wieder richtig lesbar.",
      },
      {
        question: "Verschlechtert das Spiegeln die Bildqualität?",
        answer:
          "Das Spiegeln selbst verändert keine Pixelwerte. Speicherst du als JPG, WebP oder AVIF, wird das Bild erneut komprimiert. Nutze also eine hohe Qualität oder PNG.",
      },
      {
        question: "Kann ich ein Bild in beide Richtungen gleichzeitig spiegeln?",
        answer:
          "Ja. „Beides spiegeln“ spiegelt das Bild horizontal und vertikal. Das sieht genauso aus wie eine Drehung um 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Universeller Bildkonverter",
    shortName: "Konverter",
    tagline: "Wandle JPG, PNG, WebP, AVIF, GIF, BMP, SVG oder iPhone-HEIC in JPG, PNG, WebP oder AVIF um.",
    intro:
      "Der Universelle Bildkonverter wandelt ein Bild von einem Dateiformat in ein anderes um. Er öffnet jedes Bild, das dein Browser anzeigen kann, etwa JPG, PNG, WebP, AVIF, GIF, BMP und SVG, dazu HEIC-Fotos vom iPhone, und speichert es als JPG, PNG, WebP oder AVIF. JPG- und HEIC-Fotos stehen standardmäßig auf WebP, andere Bilder auf PNG, du kannst aber jedes der vier Formate wählen.",
    seoTitle: "Bildformat umwandeln – JPG, PNG, WebP, AVIF, HEIC",
    seoDescription:
      "Bildformat umwandeln, kostenlos im Browser: HEIC, PNG, JPG, WebP, GIF, BMP oder SVG in JPG, PNG, WebP oder AVIF konvertieren, mit wählbarer Qualität.",
    keywords: [
      "bild umwandeln",
      "bildformat ändern",
      "bild konvertieren online",
      "heic in jpg umwandeln",
      "bild in webp umwandeln",
      "bild in avif umwandeln",
      "gif in png umwandeln",
      "bmp in jpg umwandeln",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein Bild in einem beliebigen Format, das dein Browser öffnen kann, oder ein iPhone-HEIC-Foto hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Ausgabeformat wählen",
        description: "Wähle unter „Speichern als“ JPG, PNG, WebP oder AVIF.",
      },
      {
        title: "Qualität und Hintergrund anpassen",
        description:
          "Für JPG, WebP und AVIF stellst du die Qualität ein. Hat das Bild transparente Bereiche und du hast JPG gewählt, bestimmst du die Farbe, mit der sie gefüllt werden.",
      },
      {
        title: "Umgewandelte Datei herunterladen",
        description: "Klicke auf „Herunterladen“. AVIF kann bei großen Fotos ein paar Sekunden dauern, weil es in deinem Browser kodiert wird.",
      },
    ],
    features: [
      {
        title: "Viele Eingabeformate",
        description: "Öffnet JPG, PNG, WebP, AVIF, GIF, BMP, SVG und weitere Formate, die dein Browser unterstützt, dazu HEIC und HEIF.",
      },
      {
        title: "Vier moderne Ausgabeformate",
        description: "Speichere als JPG, PNG, WebP oder AVIF. AVIF wird mit einem WebAssembly-Encoder auf deinem Gerät kodiert.",
      },
      {
        title: "Transparenz richtig behandelt",
        description: "PNG, WebP und AVIF behalten transparente Bereiche. Bei JPG wählst du die Farbe, die sie ersetzt.",
      },
      {
        title: "Qualität im Griff",
        description: "Stell die Qualität für verlustbehaftete Formate von 10 % bis 100 % ein, um Dateigröße und Details abzuwägen.",
      },
    ],
    faqs: [
      {
        question: "Wie wandle ich HEIC in JPG um?",
        answer:
          "Öffne das HEIC-Foto, wähle unter „Speichern als“ JPG und klicke auf „Herunterladen“. Die Umwandlung passiert in deinem Browser, das Foto wird also nirgendwohin gesendet.",
      },
      {
        question: "Welches Format soll ich wählen?",
        answer:
          "JPG für Fotos, die sich überall öffnen lassen müssen, PNG für Screenshots, Logos und Grafiken mit scharfen Kanten oder Transparenz, WebP für kleinere Bilder im Web und AVIF für die kleinsten Dateien in modernen Browsern.",
      },
      {
        question: "Kann ich in GIF, BMP oder SVG umwandeln?",
        answer:
          "Nein. Diese Formate lassen sich öffnen, gespeichert wird aber immer als JPG, PNG, WebP oder AVIF. Ein animiertes GIF wird zu einem einzelnen Standbild.",
      },
      {
        question: "Bleibt mein transparenter Hintergrund erhalten?",
        answer:
          "Ja, wenn du als PNG, WebP oder AVIF speicherst. JPG kann keine Transparenz speichern, daher werden transparente Bereiche mit der gewählten Farbe gefüllt.",
      },
      {
        question: "Ist die Umwandlung verlustfrei?",
        answer:
          "Speichern als PNG ist verlustfrei. JPG, WebP und AVIF sind verlustbehaftete Formate: Eine höhere Qualität erhält mehr Details, erzeugt aber eine größere Datei.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG in PNG",
    shortName: "JPG → PNG",
    tagline: "Mach aus einem JPG-Foto eine PNG-Datei, die beim erneuten Bearbeiten und Speichern nicht weiter an Qualität verliert.",
    intro:
      "JPG in PNG wandelt ein JPEG-Bild in das PNG-Format um. PNG komprimiert verlustfrei, das Bild verliert also nicht bei jedem Bearbeiten und Speichern weiter an Qualität. Das ist praktisch für Screenshots, Grafiken und Dateien, an denen du später weiterarbeiten willst. Das PNG hat exakt dieselben Pixel und Maße wie dein JPG, die Datei ist aber meist größer.",
    seoTitle: "JPG in PNG umwandeln – kostenlos im Browser",
    seoDescription:
      "JPG in PNG umwandeln, kostenlos: Du bekommst ein verlustfreies PNG mit denselben Pixeln und Maßen wie dein JPEG, erstellt im Browser ohne Upload.",
    keywords: [
      "jpg in png umwandeln",
      "jpg in png",
      "jpeg in png umwandeln",
      "jpg to png",
      "jpg in png konvertieren",
      "jpg als png speichern",
    ],
    howToSteps: [
      {
        title: "JPG öffnen",
        description: "Zieh eine JPG- oder JPEG-Datei in das Upload-Feld, klicke, um eine auszuwählen, oder füge sie mit Ctrl+V ein.",
      },
      {
        title: "Vorschau prüfen",
        description: "Das Ergebnis ist immer ein PNG, es gibt also nichts einzustellen. Die Maße bleiben gleich.",
      },
      {
        title: "PNG herunterladen",
        description: "Klicke auf „PNG herunterladen“ oder schick das Bild über „Nächster Schritt“ an ein anderes Tool wie „Größe ändern“.",
      },
    ],
    features: [
      {
        title: "Exakte Pixelkopie",
        description: "Jedes Pixel des JPG wird ohne weiteren Kompressionsverlust im PNG gespeichert.",
      },
      {
        title: "Sicher für wiederholtes Bearbeiten",
        description: "Ein PNG kannst du beliebig oft bearbeiten und speichern, ohne dass neue Kompressionsartefakte entstehen.",
      },
      {
        title: "Gleiche Maße",
        description: "Das PNG hat dieselbe Breite und Höhe wie das ursprüngliche JPG.",
      },
      {
        title: "Kein Upload",
        description: "Die Datei wird in deinem Browser-Tab umgewandelt und bleibt auf deinem Gerät.",
      },
    ],
    faqs: [
      {
        question: "Verbessert die Umwandlung von JPG in PNG die Qualität?",
        answer:
          "Nein. PNG hält das Bild genau so fest, wie es jetzt ist, kann aber keine Details zurückholen, die die JPEG-Kompression bereits entfernt hat.",
      },
      {
        question: "Wird der Hintergrund durch die Umwandlung in PNG transparent?",
        answer:
          "Nein. Ein JPG hat keine Transparenz, das PNG behält also denselben einfarbigen Hintergrund. Um den Hintergrund zu entfernen, nutze das Tool „Hintergrund entfernen“.",
      },
      {
        question: "Warum ist die PNG-Datei größer als das JPG?",
        answer:
          "PNG speichert jedes Pixel ohne verlustbehaftete Kompression, während JPG feine Details verwirft, um Platz zu sparen. Als PNG gespeicherte Fotos sind oft um ein Mehrfaches größer.",
      },
      {
        question: "Kann ich mehrere JPGs auf einmal in PNG umwandeln?",
        answer:
          "Diese Seite wandelt eine Datei nach der anderen um. Mit „Mehrere Bilder skalieren“ kannst du bis zu 50 Bilder als PNG in einer ZIP-Datei speichern, wenn du die Skalierung auf 100 % stellst.",
      },
      {
        question: "Bleiben die EXIF-Daten des JPG erhalten?",
        answer:
          "Nein. Das PNG wird nur aus den Pixeln erstellt, Kamerainformationen und GPS-Standort werden also nicht übernommen.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG in JPG",
    shortName: "PNG → JPG",
    tagline: "Wandle ein PNG in eine kleinere JPG-Datei um und wähle die Farbe, die transparente Bereiche ersetzt.",
    intro:
      "PNG in JPG macht aus einem PNG-Bild ein JPEG. Bei Fotos ist das meist deutlich kleiner, und fast jede Website und App akzeptiert es. JPEG kann keine Transparenz speichern, deshalb füllst du transparente Bereiche mit Weiß, Schwarz oder einer eigenen Farbe. Außerdem kannst du die JPG-Qualität von 10 % bis 100 % einstellen.",
    seoTitle: "PNG in JPG umwandeln – mit wählbarer Hintergrundfarbe",
    seoDescription:
      "PNG in JPG umwandeln, kostenlos: weißen, schwarzen oder eigenen Hintergrund für Transparenz wählen und die JPG-Qualität einstellen. Ohne Upload.",
    keywords: [
      "png in jpg umwandeln",
      "png in jpg",
      "png in jpeg umwandeln",
      "png in jpg mit weißem hintergrund",
      "png in jpg konvertieren",
      "png dateigröße verkleinern",
    ],
    howToSteps: [
      {
        title: "PNG öffnen",
        description: "Zieh eine PNG-Datei in das Upload-Feld, klicke, um eine auszuwählen, oder füge sie mit Ctrl+V ein.",
      },
      {
        title: "Hintergrundfarbe wählen",
        description: "Wähle „Weiß“, „Schwarz“ oder eine beliebige Farbe mit dem Farbwähler. Sie füllt alle transparenten Bereiche.",
      },
      {
        title: "Qualität einstellen",
        description: "85 % ist ein guter Standardwert. Für Bilder mit Text oder feinen Linien nimmst du einen höheren Wert.",
      },
      {
        title: "JPG herunterladen",
        description: "Klicke auf „JPG herunterladen“, um die umgewandelte Datei zu speichern.",
      },
    ],
    features: [
      {
        title: "Hintergrundfarbe nach Wahl",
        description: "Transparente und halbtransparente Pixel werden mit Weiß, Schwarz oder einer eigenen Farbe verrechnet.",
      },
      {
        title: "Einstellbare Qualität",
        description: "Wähle 10 % bis 100 %, um Dateigröße und Details abzuwägen.",
      },
      {
        title: "Kleinere Dateien bei Fotos",
        description: "Fotos und detailreiche Screenshots sind als JPG meist viel kleiner als als PNG.",
      },
      {
        title: "Gleiche Maße",
        description: "Das JPG behält exakt die Breite und Höhe des PNG.",
      },
    ],
    faqs: [
      {
        question: "Was passiert mit dem transparenten Hintergrund?",
        answer:
          "JPG hat keine Transparenz. Transparente und halbtransparente Pixel werden daher mit der gewählten Hintergrundfarbe verrechnet. Voreingestellt ist Weiß.",
      },
      {
        question: "Wird das JPG kleiner als das PNG?",
        answer:
          "Bei Fotos und Bildern mit vielen Farben meistens ja, oft sogar deutlich. Bei einfachen Grafiken mit wenigen Farben ist das PNG vielleicht schon klein, und das JPG kann sogar größer werden.",
      },
      {
        question: "Welche Qualität soll ich verwenden?",
        answer:
          "Der Standardwert von 85 % passt für die meisten Fotos. Nimm 90 % bis 100 % für Bilder mit Text oder feinen Details und niedrigere Werte, wenn dir die Dateigröße wichtiger ist als Details.",
      },
      {
        question: "Warum sieht Text in meinem JPG unscharf aus?",
        answer:
          "Die JPEG-Kompression kann weiche Kanten und kleine Flecken um scharfen Text und Linien erzeugen. Nutze eine höhere Qualität oder behalte Logos und Screenshots als PNG oder WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG in WebP",
    shortName: "JPG → WebP",
    tagline: "Wandle JPG-Fotos in WebP um, damit Bilddateien kleiner werden und Webseiten schneller laden.",
    intro:
      "JPG in WebP wandelt JPEG-Fotos in das WebP-Format um, das alle aktuellen großen Browser anzeigen können. Bei ähnlicher Bildqualität ist eine WebP-Datei meist kleiner als dasselbe Bild als JPG, Seiten damit laden also schneller. Die Qualität stellst du mit einem Regler von 10 % bis 100 % ein, und das Bild behält seine ursprünglichen Maße.",
    seoTitle: "JPG in WebP umwandeln – kleinere Bilder fürs Web",
    seoDescription:
      "JPG in WebP umwandeln, kostenlos: kleinere Bilder für schnellere Websites, Qualität von 10 % bis 100 % einstellbar, Originalgröße bleibt. Ohne Upload.",
    keywords: [
      "jpg in webp umwandeln",
      "jpg in webp",
      "jpeg in webp umwandeln",
      "jpg in webp konvertieren",
      "bilder für website in webp umwandeln",
      "webp konverter",
    ],
    howToSteps: [
      {
        title: "JPG öffnen",
        description: "Zieh ein JPG- oder JPEG-Foto in das Upload-Feld, klicke, um eines auszuwählen, oder füge es mit Ctrl+V ein.",
      },
      {
        title: "Qualität einstellen",
        description: "Starte bei etwa 80 %. Höhere Werte erhalten mehr Details, niedrigere ergeben kleinere Dateien.",
      },
      {
        title: "WebP herunterladen",
        description: "Klicke auf „WebP herunterladen“ und vergleiche die neue Dateigröße mit dem Original.",
      },
    ],
    features: [
      {
        title: "Kleinere Dateien bei ähnlicher Qualität",
        description: "WebP braucht für ein gleich aussehendes Foto meist weniger Bytes als JPG.",
      },
      {
        title: "Qualitätsregler",
        description: "Wähle eine beliebige Qualität von 10 % bis 100 %, passend zur Ladezeit deiner Seite und zu den nötigen Bilddetails.",
      },
      {
        title: "Originalmaße",
        description: "Das Foto wird umgewandelt, ohne Breite oder Höhe zu ändern.",
      },
      {
        title: "Auf deinem Gerät umgewandelt",
        description: "Dein Foto wird im Browser verarbeitet und nicht hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Ist WebP besser als JPG?",
        answer:
          "Für Websites liefert WebP meist kleinere Dateien bei gleicher Bildqualität und kann auch Transparenz speichern. JPG wird aber noch von mehr älteren Programmen, Druckern und Upload-Formularen akzeptiert.",
      },
      {
        question: "Unterstützen alle Browser WebP?",
        answer:
          "Aktuelle Versionen von Chrome, Edge, Firefox und Safari zeigen WebP-Bilder an. Manche älteren Apps und Betriebssysteme können sie nicht öffnen.",
      },
      {
        question: "Warum habe ich ein PNG statt eines WebP bekommen?",
        answer:
          "Manche Browser, darunter einige Safari-Versionen, können WebP anzeigen, aber nicht erstellen. Dann weist dich das Tool darauf hin und speichert ein PNG. Nutze Chrome, Edge oder Firefox, um eine WebP-Datei zu erhalten.",
      },
      {
        question: "Wie sehe ich die Dateigröße vor dem Download?",
        answer:
          "Dieser Konverter zeigt keine Größenschätzung an. „Bild komprimieren“ mit WebP als Format zeigt dir die erwartete Größe und die Ersparnis in Prozent, während du die Qualität anpasst.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG in WebP",
    shortName: "PNG → WebP",
    tagline: "Wandle PNG-Bilder in WebP um, behalte transparente Hintergründe und erhalte meist eine viel kleinere Datei.",
    intro:
      "PNG in WebP wandelt PNG-Dateien wie Screenshots, Logos und Grafiken in das WebP-Format um. WebP unterstützt Transparenz, transparente Bereiche bleiben also auch nach der Umwandlung transparent. Das Ergebnis ist meist viel kleiner als das PNG, und mit einem Qualitätsregler hältst du Text und dünne Linien scharf.",
    seoTitle: "PNG in WebP umwandeln – Transparenz bleibt erhalten",
    seoDescription:
      "PNG in WebP umwandeln, kostenlos: Transparente Hintergründe bleiben erhalten, Dateien werden meist viel kleiner, die Qualität ist einstellbar.",
    keywords: [
      "png in webp umwandeln",
      "png in webp",
      "png in webp transparent",
      "png in webp konvertieren",
      "png verkleinern für website",
      "transparentes webp",
    ],
    howToSteps: [
      {
        title: "PNG öffnen",
        description: "Zieh eine PNG-Datei in das Upload-Feld, klicke, um eine auszuwählen, oder füge einen Screenshot mit Ctrl+V ein.",
      },
      {
        title: "Qualität einstellen",
        description: "Nimm 90 % oder mehr für Logos, Text und Screenshots. Für Fotos reichen meist 75 % bis 85 %.",
      },
      {
        title: "WebP herunterladen",
        description: "Klicke auf „WebP herunterladen“. Transparente Bereiche bleiben in der neuen Datei transparent.",
      },
    ],
    features: [
      {
        title: "Transparenz bleibt",
        description: "Der Alphakanal deines PNG wird im WebP gespeichert, Logos und Icons behalten also ihren durchsichtigen Hintergrund.",
      },
      {
        title: "Viel kleinere Dateien",
        description: "Die WebP-Kompression verkleinert PNG-Screenshots und -Grafiken meist auf einen Bruchteil ihrer Größe.",
      },
      {
        title: "Qualität im Griff",
        description: "Stell die Qualität von 10 % bis 100 % ein, je nachdem, wie viele Details das Bild braucht.",
      },
      {
        title: "Gleiche Maße",
        description: "Das WebP behält exakt die Breite und Höhe des PNG.",
      },
    ],
    faqs: [
      {
        question: "Bleibt bei PNG in WebP der transparente Hintergrund erhalten?",
        answer: "Ja. WebP unterstützt Transparenz, transparente und halbtransparente Pixel bleiben also erhalten.",
      },
      {
        question: "Warum ist das WebP so viel kleiner als das PNG?",
        answer:
          "PNG ist verlustfrei und speichert jedes Pixel exakt. WebP nutzt hier eine verlustbehaftete Kompression, die schwer erkennbare Details entfernt und so viel Platz spart.",
      },
      {
        question: "Welche Qualität eignet sich für Logos und Screenshots?",
        answer:
          "Nimm 90 % bis 100 %, damit Text, Icons und dünne Linien scharf bleiben. Für Fotos reichen meist 75 % bis 85 %.",
      },
      {
        question: "Kann ich WebP-Bilder auf meiner Website verwenden?",
        answer:
          "Ja. Alle aktuellen großen Browser zeigen WebP an. Wenn du auch sehr alte Browser oder Apps unterstützt, behalte das ursprüngliche PNG als Ausweichlösung.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP in JPG",
    shortName: "WebP → JPG",
    tagline: "Wandle WebP-Bilder in JPG um, damit sie sich in jeder App, jedem Bildbetrachter und jedem Upload-Formular öffnen.",
    intro:
      "WebP in JPG wandelt WebP-Dateien, die auf Websites häufig vorkommen, in normale JPEG-Bilder um. JPG ist die sicherste Wahl, wenn ein älteres Programm, ein Upload-Formular oder ein Druckdienst kein WebP annimmt. Hat das WebP transparente Bereiche, wählst du die Füllfarbe, denn JPG kann keine Transparenz speichern.",
    seoTitle: "WebP in JPG umwandeln – kostenlos, ohne Upload",
    seoDescription:
      "WebP in JPG umwandeln, kostenlos: WebP-Bilder in jeder App und jedem Upload-Formular öffnen, Füllfarbe für Transparenz wählen, Qualität einstellen. Ohne Upload.",
    keywords: [
      "webp in jpg umwandeln",
      "webp in jpg",
      "webp in jpeg umwandeln",
      "webp als jpg speichern",
      "webp in jpg konvertieren",
      "webp datei öffnen",
    ],
    howToSteps: [
      {
        title: "WebP-Datei öffnen",
        description: "Zieh ein WebP-Bild in das Upload-Feld, klicke, um eines auszuwählen, oder füge es mit Ctrl+V ein.",
      },
      {
        title: "Qualität und Füllfarbe festlegen",
        description:
          "Wähle eine Qualität zwischen 10 % und 100 %. Hat das Bild transparente Stellen, bestimmst du die Farbe, die sie ersetzt.",
      },
      {
        title: "JPG herunterladen",
        description: "Klicke auf „JPG herunterladen“, um eine Datei zu speichern, die sich fast überall öffnen lässt.",
      },
    ],
    features: [
      {
        title: "Maximale Kompatibilität",
        description: "JPG öffnet sich in fast jedem Programm, auf jedem Gerät, jedem Drucker und in jedem Upload-Formular.",
      },
      {
        title: "Füllfarbe für Transparenz",
        description: "Transparente Bereiche des WebP werden mit Weiß oder einer Farbe deiner Wahl gefüllt.",
      },
      {
        title: "Einstellbare Qualität",
        description: "Mit dem Qualitätsregler wägst du Dateigröße und Details ab.",
      },
      {
        title: "Private Umwandlung",
        description: "Das Bild wird in deinem Browser dekodiert und als JPG gespeichert. Nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Warum werden Bilder von Websites als WebP gespeichert?",
        answer:
          "Viele Websites liefern Bilder als WebP aus, weil die Dateien kleiner sind. Speicherst du eines, bekommst du die WebP-Datei, die manche älteren Programme nicht öffnen können.",
      },
      {
        question: "Was passiert mit transparenten Stellen eines WebP?",
        answer:
          "JPG kann keine Transparenz speichern, diese Bereiche werden daher mit einer Volltonfarbe gefüllt. Standardmäßig ist das Weiß, du kannst aber eine andere Farbe wählen.",
      },
      {
        question: "Kann ich ein animiertes WebP umwandeln?",
        answer: "Es wird nur ein einzelnes Standbild umgewandelt, weil JPG keine Animation speichern kann.",
      },
      {
        question: "Verliert das JPG an Qualität?",
        answer:
          "Das WebP wird dekodiert und erneut als JPG gespeichert, und JPG ist verlustbehaftet. Nutze 90 % oder mehr, damit das Ergebnis sehr nah am Original bleibt.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP in PNG",
    shortName: "WebP → PNG",
    tagline: "Wandle WebP-Bilder in verlustfreie PNG-Dateien um, die Transparenz und jedes Pixel behalten.",
    intro:
      "WebP in PNG wandelt WebP-Bilder in PNG um, ein verlustfreies Format, das fast jedes Bildprogramm und jeder Bildbetrachter unterstützt. Transparente Bereiche bleiben transparent, und die dekodierten Pixel werden exakt gespeichert. Das Bild verliert also keine Qualität, wenn du es bearbeitest und erneut speicherst. Nutze es, wenn eine App kein WebP öffnen kann oder du eine Datei zum Weiterbearbeiten brauchst.",
    seoTitle: "WebP in PNG umwandeln – verlustfrei, transparent",
    seoDescription:
      "WebP in PNG umwandeln, kostenlos: transparente Hintergründe behalten und ein verlustfreies PNG erhalten, das jedes Bildprogramm öffnet.",
    keywords: [
      "webp in png umwandeln",
      "webp in png",
      "webp in png transparent",
      "webp in png konvertieren",
      "webp in png ohne qualitätsverlust",
      "webp als png speichern",
    ],
    howToSteps: [
      {
        title: "WebP-Datei öffnen",
        description: "Zieh ein WebP-Bild in das Upload-Feld, klicke, um eines auszuwählen, oder füge es mit Ctrl+V ein.",
      },
      {
        title: "Vorschau prüfen",
        description: "Das Ergebnis ist immer ein verlustfreies PNG in derselben Größe, es gibt also keine Qualitätseinstellung.",
      },
      {
        title: "PNG herunterladen",
        description: "Klicke auf „PNG herunterladen“, um die umgewandelte Datei zu speichern.",
      },
    ],
    features: [
      {
        title: "Transparenz bleibt erhalten",
        description: "Transparente und halbtransparente Bereiche des WebP bleiben im PNG transparent.",
      },
      {
        title: "Verlustfreie Ausgabe",
        description: "Die dekodierten Pixel werden exakt gespeichert, ohne neuen Kompressionsverlust.",
      },
      {
        title: "Öffnet sich überall",
        description: "PNG wird von praktisch allen Bildprogrammen, Bildbetrachtern und Office-Programmen unterstützt.",
      },
      {
        title: "Kein Upload",
        description: "Die Umwandlung läuft in deinem Browser, die Datei bleibt also auf deinem Gerät.",
      },
    ],
    faqs: [
      {
        question: "Bleibt bei WebP in PNG der transparente Hintergrund erhalten?",
        answer: "Ja. PNG unterstützt Transparenz vollständig, der Hintergrund bleibt also durchsichtig.",
      },
      {
        question: "Warum ist das PNG größer als das WebP?",
        answer:
          "Die meisten WebP-Bilder nutzen eine verlustbehaftete Kompression, während PNG jedes Pixel verlustfrei speichert. Dasselbe Bild braucht als PNG daher meist mehr Bytes.",
      },
      {
        question: "Verbessert die Umwandlung in PNG die Bildqualität?",
        answer:
          "Nein. Das PNG hält das Bild genau so fest, wie es jetzt aussieht, kann aber keine Details zurückholen, die die WebP-Kompression bereits entfernt hat.",
      },
      {
        question: "Kann ich ein animiertes WebP in PNG umwandeln?",
        answer:
          "Das Tool speichert ein einzelnes Standbild. Die PNG-Ausgabe enthält hier keine Animationsbilder.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Mehrere Bilder skalieren",
    shortName: "Stapel skalieren",
    tagline: "Ändere die Größe von bis zu 50 Bildern auf einmal, in Prozent, auf eine exakte Breite oder in einen Rahmen, und lade sie als ZIP herunter.",
    intro:
      "Mehrere Bilder skalieren wendet dieselbe Größenregel in einem Schritt auf viele Bilder an. Du kannst jede Datei um einen Prozentwert skalieren, eine exakte Breite festlegen oder jedes Bild in einen Rahmen wie 1200 × 800 einpassen, sodass keine Seite größer als der Rahmen ist. Jede Datei kann ihr Originalformat behalten, und alle Ergebnisse lädst du zusammen als ZIP herunter.",
    seoTitle: "Mehrere Bilder verkleinern – Größe stapelweise ändern",
    seoDescription:
      "Mehrere Bilder auf einmal verkleinern, kostenlos: bis zu 50 JPG-, PNG- oder WebP-Dateien in Prozent, auf eine Breite oder in einen Rahmen skalieren, als ZIP.",
    keywords: [
      "mehrere bilder verkleinern",
      "mehrere bilder gleichzeitig verkleinern",
      "bildgröße mehrerer bilder ändern",
      "bilder stapelweise verkleinern",
      "batch bilder verkleinern",
      "fotos verkleinern und als zip herunterladen",
    ],
    howToSteps: [
      {
        title: "Bilder hinzufügen",
        description: "Zieh bis zu 50 JPG-, PNG- oder WebP-Dateien (je bis 50 MB) in den Upload-Bereich oder klicke, um sie auszuwählen.",
      },
      {
        title: "Modus wählen",
        description:
          "„Prozent“ skaliert jedes Bild auf 10 % bis 200 %. „Exakte Pixel“ legt die Breite fest und, wenn du das Seitenverhältnis löst, auch die Höhe. „Einpassen“ verkleinert jedes Bild so, dass es in die eingegebene Breite und Höhe passt.",
      },
      {
        title: "Ausgabeformat wählen",
        description:
          "Behalte „Original“ bei oder wandle alles in PNG, JPG oder WebP um. „Kleinere Bilder nicht vergrößern“ ist standardmäßig aktiv, damit kleinere Bilder nicht vergrößert werden.",
      },
      {
        title: "Skalieren und herunterladen",
        description: "Klicke auf „Alle skalieren“ und dann auf „ZIP herunterladen“ oder speichere einzelne Dateien aus der Liste.",
      },
    ],
    features: [
      {
        title: "Drei Modi",
        description: "Skaliere in Prozent, lege eine exakte Breite fest oder passe in eine maximale Breite und Höhe ein.",
      },
      {
        title: "Jede Datei behält ihr Format",
        description: "Mit „Original“ bleiben JPGs JPG, PNGs PNG und WebP-Dateien WebP.",
      },
      {
        title: "Kein Vergrößern",
        description:
          "In den Modi „Exakte Pixel“ und „Einpassen“ behalten Bilder, die schon kleiner als das Ziel sind, ihre Größe.",
      },
      {
        title: "Ein ZIP-Download",
        description: "Skalierte Dateien behalten ihren Originalnamen mit dem Zusatz -resized und werden zusammen in einem Archiv heruntergeladen.",
      },
    ],
    faqs: [
      {
        question: "Wie viele Bilder kann ich auf einmal skalieren?",
        answer:
          "Bis zu 50 Bilder pro Durchgang, jedes bis 50 MB. Sehr große Fotos brauchen viel Arbeitsspeicher. Auf dem Handy kann es daher helfen, in kleineren Gruppen zu arbeiten.",
      },
      {
        question: "Werden meine Bilder verzerrt?",
        answer:
          "Nicht in den Modi „Prozent“ oder „Einpassen“, die immer die Proportionen beibehalten. Löst du im Modus „Exakte Pixel“ das Seitenverhältnis und legst beide Seiten fest, werden Bilder mit anderer Form verzerrt.",
      },
      {
        question: "Welche Dateiformate werden unterstützt?",
        answer:
          "JPG, PNG und WebP. HEIC-Dateien vom iPhone werden hier nicht angenommen. Wandle sie zuerst mit dem Universellen Bildkonverter um.",
      },
      {
        question: "Mit welcher Qualität werden JPG- und WebP-Dateien gespeichert?",
        answer:
          "Skalierte JPG- und WebP-Dateien werden mit 90 % Qualität gespeichert. Wandelst du transparente Bilder in JPG um, werden transparente Bereiche weiß.",
      },
      {
        question: "Werden meine Dateien irgendwo hochgeladen?",
        answer: "Nein. Alle Bilder werden in diesem Browser-Tab skaliert, und die ZIP-Datei wird auf deinem Gerät erstellt.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Mehrere Bilder komprimieren",
    shortName: "Stapel komprimieren",
    tagline: "Komprimiere bis zu 50 Bilder auf einmal zu WebP, AVIF, JPG oder PNG und lade sie in einer ZIP-Datei herunter.",
    intro:
      "Mehrere Bilder komprimieren verringert die Dateigröße vieler Bilder in einem Durchgang. Du wählst ein Ausgabeformat und eine Qualität für alle Dateien, startest die Komprimierung und siehst für jedes Bild die ursprüngliche Größe, die neue Größe und die Ersparnis in Prozent. Das ist praktisch, um einen Ordner mit Fotos für eine Website, einen Onlineshop oder eine E-Mail vorzubereiten.",
    seoTitle: "Mehrere Bilder komprimieren – bis zu 50 auf einmal",
    seoDescription:
      "Bis zu 50 Bilder auf einmal komprimieren, kostenlos: JPG, PNG und WebP in WebP, AVIF, JPG oder PNG umwandeln, Ersparnis pro Datei sehen, alles als ZIP.",
    keywords: [
      "mehrere bilder komprimieren",
      "bilder stapelweise komprimieren",
      "mehrere bilder gleichzeitig komprimieren",
      "batch bilder komprimieren",
      "mehrere bilder in webp umwandeln",
      "fotos komprimieren und als zip herunterladen",
    ],
    howToSteps: [
      {
        title: "Bilder hinzufügen",
        description: "Zieh bis zu 50 JPG-, PNG- oder WebP-Dateien (je bis 50 MB) hierher oder klicke, um sie auszuwählen.",
      },
      {
        title: "Format und Qualität wählen",
        description:
          "Voreingestellt ist WebP mit 80 %. Wähle AVIF für die kleinsten Dateien, JPG für maximale Kompatibilität oder PNG für verlustfreie Ausgabe.",
      },
      {
        title: "Alle Dateien komprimieren",
        description: "Klicke auf „Alle komprimieren“ und sieh zu, wie für jede Datei die neue Größe und die Ersparnis in der Liste erscheinen.",
      },
      {
        title: "Ergebnisse herunterladen",
        description: "Klicke auf „ZIP herunterladen“, um alle komprimierten Dateien auf einmal zu speichern, oder lade einzelne Dateien aus der Liste herunter.",
      },
    ],
    features: [
      {
        title: "Ergebnis für jede Datei",
        description:
          "Sieh für jedes Bild die Größe vorher und nachher und die Ersparnis in Prozent. Ist eine Datei größer geworden, wird das klar gekennzeichnet.",
      },
      {
        title: "Vier Ausgabeformate",
        description: "AVIF, WebP, JPG oder PNG, mit einer Qualitätseinstellung von 10 % bis 100 % für alle Dateien.",
      },
      {
        title: "ZIP mit Originalnamen",
        description: "Jede Datei behält ihren Namen mit dem Zusatz -compressed, doppelte Namen werden automatisch nummeriert.",
      },
      {
        title: "Läuft auf deinem Gerät",
        description: "Alle Dateien werden in deinem Browser komprimiert und verlassen nie deinen Computer oder dein Handy.",
      },
    ],
    faqs: [
      {
        question: "Wie viele Bilder kann ich in einem Durchgang komprimieren?",
        answer: "Du kannst bis zu 50 Bilder hinzufügen, und jedes darf bis zu 50 MB groß sein.",
      },
      {
        question: "Welches Ausgabeformat soll ich wählen?",
        answer:
          "WebP ist ein guter Kompromiss aus Größe, Qualität und Unterstützung. AVIF ist meist kleiner, kodiert aber langsamer, was bei vielen großen Fotos spürbar ist. JPG öffnet sich überall, und PNG ist verlustfrei, verkleinert die Dateien aber am wenigsten.",
      },
      {
        question: "Warum ist eine meiner Dateien größer geworden?",
        answer:
          "Manche Bilder sind bereits gut komprimiert, und erneutes Speichern bringt nichts. Die Liste markiert diese Dateien, sodass du für sie das Original behalten kannst.",
      },
      {
        question: "Ändert die Stapel-Komprimierung die Bildmaße?",
        answer:
          "Nein, Breite und Höhe bleiben gleich. Willst du auch die Maße verringern, schick die Dateien zuerst durch „Mehrere Bilder skalieren“.",
      },
      {
        question: "Was passiert mit transparenten PNGs, wenn ich JPG wähle?",
        answer: "JPG kann keine Transparenz speichern, transparente Bereiche werden daher weiß gefüllt.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Bild-Metadaten entfernen",
    shortName: "EXIF entfernen",
    tagline: "Entferne EXIF-Daten wie GPS-Standort, Kameramodell und Datum aus einem Foto, bevor du es teilst.",
    intro:
      "Bild-Metadaten entfernen erstellt eine saubere Kopie deines Fotos ohne die versteckten EXIF-Informationen. Fotos von Handys und Kameras speichern oft den GPS-Standort der Aufnahme, das Gerätemodell sowie Datum und Uhrzeit. Bei JPG, PNG und WebP werden nur diese Angaben aus der Datei entfernt: Das Bild selbst wird nicht neu gespeichert, Qualität und Farben bleiben also exakt gleich. Die neue Dateigröße siehst du vor dem Herunterladen.",
    seoTitle: "EXIF-Daten entfernen – GPS und Metadaten löschen",
    seoDescription:
      "EXIF-Daten aus Fotos entfernen, kostenlos: GPS-Standort, Kameramodell und Datum löschen, bevor du ein Bild teilst. Im Browser verarbeitet, nie hochgeladen.",
    keywords: [
      "exif daten entfernen",
      "metadaten aus foto entfernen",
      "gps daten aus foto entfernen",
      "standort aus foto entfernen",
      "bild metadaten löschen",
      "exif daten löschen online",
      "metadaten iphone foto entfernen",
    ],
    howToSteps: [
      {
        title: "Foto öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Foto hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Saubere Kopie prüfen",
        description: "Die Vorschau zeigt das Bild, das gespeichert wird, zusammen mit seiner neuen Dateigröße.",
      },
      {
        title: "Format beibehalten",
        description:
          "Behältst du das Originalformat, werden nur die Metadaten entfernt, ohne Qualitätsverlust. Wechselst du das Format, wird das Bild neu gespeichert: Wähle bei JPG und WebP 90 % bis 100 % Qualität oder nimm PNG.",
      },
      {
        title: "Neue Datei herunterladen und teilen",
        description: "Klicke auf „Herunterladen“ und teile diese Kopie statt des Originalfotos.",
      },
    ],
    features: [
      {
        title: "Entfernt Standort- und Kameradaten",
        description:
          "GPS-Koordinaten, Kamerahersteller und -modell, Objektiv, Aufnahmedatum und weitere EXIF- und IPTC-Felder werden nicht in die neue Datei geschrieben.",
      },
      {
        title: "Kein Qualitätsverlust",
        description: "JPG, PNG und WebP behalten ihre exakten Pixel und ihr Farbprofil; nur die versteckten Daten werden entfernt.",
      },
      {
        title: "Anzeige der Dateigröße",
        description: "Sieh die Größe der bereinigten Datei, bevor du sie herunterlädst.",
      },
      {
        title: "Auf deinem Gerät erledigt",
        description: "Dein Foto wird nie hochgeladen, seine Standortdaten werden dabei also mit niemandem geteilt.",
      },
    ],
    faqs: [
      {
        question: "Welche Metadaten werden entfernt?",
        answer:
          "EXIF-Daten (Kamera, Einstellungen, Datum und GPS), IPTC- und XMP-Felder wie Autor oder Copyright, Kommentare und PNG-Text. Das Farbprofil bleibt erhalten, damit sich die Farben nicht ändern, und ein JPG behält seine Ausrichtung, damit es nicht seitlich angezeigt wird.",
      },
      {
        question: "Ändert das Entfernen der Metadaten die Bildqualität?",
        answer:
          "Nicht, wenn du das Format beibehältst: JPG-, PNG- und WebP-Dateien werden nicht neu gespeichert, jedes Pixel bleibt gleich. Konvertierst du in ein anderes Format oder startest du mit einem HEIC-Foto vom iPhone, wird das Bild neu gespeichert. Wähle dann eine hohe Qualität.",
      },
      {
        question: "Wie prüfe ich, ob der Standort entfernt wurde?",
        answer:
          "Öffne die heruntergeladene Datei in der Bildanalyse. Sie liest EXIF-Daten auf deinem Gerät und zeigt eine Warnung, wenn ein GPS-Standort enthalten ist.",
      },
      {
        question: "Entfernen Apps und Websites die EXIF-Daten für mich?",
        answer:
          "Manche großen Plattformen entfernen beim Hochladen einen Teil der Metadaten. E-Mail, Messenger und Dateifreigaben senden die Originaldatei aber oft unverändert. Die Daten selbst zu entfernen ist die sichere Wahl.",
      },
      {
        question: "Kann ich Metadaten aus HEIC-Fotos vom iPhone entfernen?",
        answer:
          "Ja. Das HEIC-Foto wird in deinem Browser umgewandelt, und die saubere Kopie wird standardmäßig als JPG gespeichert.",
      },
    ],
  },
  "image-analyzer": {
    name: "Bildanalyse",
    shortName: "Analyse",
    tagline: "Sieh Maße, Dateigröße, Seitenverhältnis, Druckgröße und EXIF-Kameradaten eines Bildes, mit Warnung bei GPS-Standort.",
    intro:
      "Die Bildanalyse zeigt die technischen Details einer Bilddatei, ohne sie zu verändern. Sie nennt Dateigröße, Format, Pixelmaße, Seitenverhältnis, Megapixel und ob das Bild Transparenz hat. Bei Fotos liest sie außerdem EXIF-Kameradaten wie Kameramodell, Objektiv, Belichtung, ISO, Aufnahmedatum und GPS-Standort und warnt dich, wenn ein Foto verrät, wo es aufgenommen wurde.",
    seoTitle: "EXIF-Daten anzeigen – Bildgröße und Maße prüfen",
    seoDescription:
      "EXIF-Daten anzeigen und Bilddetails prüfen, kostenlos: Maße, Dateigröße, Seitenverhältnis, Druckgröße und Kameradaten, mit Warnung bei GPS-Daten.",
    keywords: [
      "exif daten anzeigen",
      "exif viewer online",
      "bild metadaten anzeigen",
      "bildgröße prüfen",
      "foto exif daten auslesen",
      "gps daten im foto prüfen",
      "bildauflösung prüfen",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein beliebiges Bild, das dein Browser öffnen kann, hierher, wähle es aus oder füge es ein. Auch HEIC-Fotos vom iPhone funktionieren.",
      },
      {
        title: "Technische Daten lesen",
        description:
          "Sieh Dateigröße, Format, Maße, Seitenverhältnis, Megapixel, Transparenz und Druckgröße bei 300 DPI.",
      },
      {
        title: "Kameradaten prüfen",
        description:
          "Der EXIF-Bereich listet Kamera, Objektiv, Belichtung und Datum auf. Enthält das Foto einen GPS-Standort, erscheint eine Warnung mit einer Schaltfläche zum Entfernen der Metadaten.",
      },
      {
        title: "Bericht kopieren",
        description: "Klicke auf „Bericht kopieren“, um alle Werte als reinen Text zu kopieren.",
      },
    ],
    features: [
      {
        title: "Technische Daten",
        description:
          "Dateigröße, Format, MIME-Typ, Maße, Seitenverhältnis, Megapixel, Farbtiefe, Transparenz und geschätzter Speicherbedarf.",
      },
      {
        title: "EXIF-Kameradaten lesen",
        description:
          "Zeigt Kamera, Objektiv, Aufnahmedatum, Belichtungszeit, Blende, ISO, Brennweite, Blitz, Ausrichtung und Bearbeitungssoftware, sofern vorhanden.",
      },
      {
        title: "Warnung bei GPS-Standort",
        description:
          "Zeigt die Koordinaten an, wenn ein Foto sie enthält, und bietet dir mit einem Klick eine Kopie ohne Metadaten an.",
      },
      {
        title: "Geschätzte Druckgröße",
        description: "Zeigt, wie groß das Bild bei 300 DPI gedruckt wird, in Zoll und Zentimetern.",
      },
      {
        title: "Nur lesen, nur lokal",
        description: "Die Datei wird nicht verändert, und alle Daten werden auf deinem Gerät gelesen.",
      },
    ],
    faqs: [
      {
        question: "Wie sehe ich die EXIF-Daten eines Fotos?",
        answer:
          "Öffne das Foto hier und sieh dir den Bereich „Kamera- und EXIF-Daten“ an. Steht dort, dass keine EXIF-Daten vorhanden sind, wurde die Datei ohne sie gespeichert. Das ist bei Screenshots und Bildern aus sozialen Netzwerken üblich.",
      },
      {
        question: "Wie erkenne ich, ob ein Foto verrät, wo es aufgenommen wurde?",
        answer:
          "Enthält das Foto GPS-Koordinaten, zeigt die Analyse sie an und blendet eine Warnung ein. Klicke auf „Metadaten entfernen“, um eine Kopie ohne Standort zu erstellen.",
      },
      {
        question: "Welche Dateien enthalten EXIF-Daten?",
        answer:
          "Fotos von Handys und Kameras im JPG- und HEIC-Format meistens schon. Auch WebP- und AVIF-Dateien können sie enthalten, Screenshots und viele exportierte oder bearbeitete Bilder dagegen kaum oder gar keine.",
      },
      {
        question: "Was bedeutet die Druckgröße bei 300 DPI?",
        answer:
          "Das ist die Größe eines Ausdrucks mit 300 Punkten pro Zoll, einer üblichen Qualität für Fotoabzüge. Ein Bild mit 3000 × 2000 Pixeln wird zum Beispiel etwa 10 × 6,7 Zoll groß gedruckt.",
      },
      {
        question: "Ist der Wert für die Farbtiefe exakt?",
        answer:
          "Er basiert auf dem Format und darauf, ob das Bild Transparenz hat (24-Bit-RGB oder 32-Bit-RGBA). 16-Bit- oder HDR-Bilder werden nicht erkannt.",
      },
    ],
  },
  "image-color-picker": {
    name: "Farbwähler für Bilder",
    shortName: "Farbwähler",
    tagline: "Klicke auf eine beliebige Stelle im Bild und erhalte die exakte Farbe als HEX, RGB, HSL, HSV und CMYK.",
    intro:
      "Der Farbwähler für Bilder findet die exakte Farbe jedes Pixels in einem Bild. Bewege den Zeiger über das Bild, um eine vergrößerte Ansicht der Pixel darunter zu sehen, und klicke dann, um eine Farbe auszuwählen und ihren Code als HEX, RGB, HSL, HSV oder CMYK zu kopieren. Die Farben werden aus dem Bild in voller Auflösung gelesen, nicht aus der verkleinerten Vorschau.",
    seoTitle: "Farbe aus Bild bestimmen – HEX- und RGB-Code",
    seoDescription:
      "Farbe aus Bild bestimmen, kostenlos: Klicke auf ein Pixel und erhalte HEX-, RGB-, HSL-, HSV- und CMYK-Code, mit Lupe und Kopieren per Klick.",
    keywords: [
      "farbe aus bild bestimmen",
      "farbe aus bild auslesen",
      "hex code aus bild",
      "farbpipette online",
      "farbwähler bild",
      "rgb farbe aus bild",
      "farbcode herausfinden",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein Bild hierher, wähle es aus oder füge es ein. Ein mit Ctrl+V eingefügter Screenshot funktioniert gut.",
      },
      {
        title: "Mit der Lupe zielen",
        description: "Bewege die Maus über die Vorschau. Eine runde Lupe zeigt die Pixel unter dem Zeiger vergrößert an.",
      },
      {
        title: "Farbe per Klick aufnehmen",
        description: "Klicke oder tippe auf die gewünschte Stelle. Die Farbe erscheint mit ihren Werten als HEX, RGB, HSL, HSV und CMYK.",
      },
      {
        title: "Code kopieren",
        description: "Klicke neben dem gewünschten Format auf „Kopieren“. Zuletzt gewählte Farben werden darunter gespeichert, damit du sie schnell wiederverwenden kannst.",
      },
    ],
    features: [
      {
        title: "Lupe",
        description: "Eine vergrößerte Ansicht von 7 × 7 Pixeln hilft dir, kleine Details wie eine dünne Linie oder einen einzelnen Buchstaben zu treffen.",
      },
      {
        title: "Fünf Farbformate",
        description: "Kopiere HEX-, RGB-, HSL-, HSV- oder CMYK-Werte mit jeweils einem Klick.",
      },
      {
        title: "Farbverlauf",
        description: "Die letzten 12 gewählten Farben bleiben als Farbfelder erhalten. Ein Klick darauf wählt sie erneut aus.",
      },
      {
        title: "Abtastung in voller Auflösung",
        description: "Jede Farbe wird aus den Originalpixeln des Bildes gelesen, der Wert hängt also nicht von der Vorschaugröße ab.",
      },
    ],
    faqs: [
      {
        question: "Wie bekomme ich den HEX-Code einer Farbe in einem Bild?",
        answer:
          "Öffne das Bild, klicke auf die gewünschte Farbe und tippe neben dem HEX-Wert auf „Kopieren“. Du kannst ihn in jedes Designprogramm oder jede CSS-Datei einfügen.",
      },
      {
        question: "Kann ich eine Farbe aus einem Screenshot aufnehmen?",
        answer:
          "Ja. Mach einen Screenshot, drücke auf dieser Seite Ctrl+V, um ihn einzufügen, und klicke auf die Farbe, die du brauchst.",
      },
      {
        question: "Funktioniert der Farbwähler auf dem Handy?",
        answer:
          "Ja. Tippe auf das Bild, um eine Farbe auszuwählen. Die Lupe erscheint nur mit Mauszeiger. Zoome also in die Seite hinein, wenn du eine sehr kleine Stelle treffen musst.",
      },
      {
        question: "Warum haben benachbarte Pixel in einem Foto leicht unterschiedliche Farben?",
        answer:
          "Fotos enthalten Rauschen, Verläufe und Kompressionseffekte, daher stimmen benachbarte Pixel selten exakt überein. Nimm ein paar Punkte auf und wähle den, der richtig aussieht.",
      },
      {
        question: "Warum weicht der CMYK-Wert von meiner Drucksoftware ab?",
        answer:
          "Die CMYK-Werte hier sind eine einfache mathematische Umrechnung aus RGB. Drucksoftware nutzt Farbprofile für bestimmte Druckfarben und Papiere, ihre Werte können daher abweichen.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Farbpaletten-Generator",
    shortName: "Palette",
    tagline: "Extrahiere die Hauptfarben eines Bildes als Palette und kopiere sie als HEX-Codes, CSS-Variablen oder JSON.",
    intro:
      "Der Farbpaletten-Generator findet die dominanten Farben in einem Foto oder Design und zeigt sie als Farbfelder an. Du kannst 3, 4, 5, 6 oder 8 Farben wählen. Sie sind nach der Fläche sortiert, die sie abdecken, und sehr ähnliche Töne werden zusammengefasst, damit jedes Farbfeld eigenständig ist. Kopiere die Palette als CSS-Variablen oder JSON-Array oder lade sie als PNG-Farbtafel herunter.",
    seoTitle: "Farbpalette aus Bild erstellen – HEX-Codes auslesen",
    seoDescription:
      "Farbpalette aus Bild erstellen, kostenlos: 3 bis 8 dominante Farben auslesen, HEX-Codes, CSS-Variablen oder JSON kopieren und eine PNG-Farbtafel herunterladen.",
    keywords: [
      "farbpalette aus bild",
      "farbpalette aus bild erstellen",
      "farben aus bild extrahieren",
      "farbschema aus foto",
      "dominante farben im bild",
      "farbpalette generator",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein Foto, eine Illustration, ein Logo oder einen Screenshot hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Anzahl der Farben wählen",
        description: "Klicke auf 3, 4, 5, 6 oder 8. Die Farbfelder aktualisieren sich sofort.",
      },
      {
        title: "Einzelne Farben kopieren",
        description: "Klicke auf das Kopiersymbol eines Farbfelds, um seinen HEX-Code zu kopieren.",
      },
      {
        title: "Palette exportieren",
        description: "Nutze „CSS-Variablen kopieren“ oder „JSON kopieren“ oder lade die Palette als PNG-Farbtafel herunter.",
      },
    ],
    features: [
      {
        title: "Nach Fläche sortiert",
        description: "Das erste Farbfeld ist die Farbe, die den größten Teil des Bildes abdeckt.",
      },
      {
        title: "Klar unterscheidbare Töne",
        description: "Fast identische Farben werden zusammengefasst, damit die Palette denselben Ton nicht wiederholt.",
      },
      {
        title: "Bereit für Entwickler",
        description: "Exportiere als CSS Custom Properties (--color-1, --color-2 und so weiter) oder als JSON-Array mit HEX-Codes.",
      },
      {
        title: "PNG-Farbtafel",
        description: "Lade ein Bild der Palette herunter, bei dem unter jedem Farbfeld der HEX-Code steht.",
      },
    ],
    faqs: [
      {
        question: "Wie werden die Farben der Palette ausgewählt?",
        answer:
          "Das Bild wird in kleiner Größe abgetastet, ähnliche Farben werden gruppiert, und die Gruppen mit der größten Fläche werden zuerst angezeigt. Transparente Pixel werden ignoriert.",
      },
      {
        question: "Warum bekomme ich weniger Farben, als ich gewählt habe?",
        answer:
          "Sehr ähnliche Töne werden zusammengefasst, damit sich jedes Farbfeld klar unterscheidet. Ein Bild mit nur wenigen verschiedenen Farben liefert daher eventuell weniger Farbfelder.",
      },
      {
        question: "Wie nutze ich die Palette in CSS?",
        answer:
          "Klicke auf „CSS-Variablen kopieren“, um einen :root-Block mit den Variablen --color-1, --color-2 und so weiter zu erhalten, und füge ihn in dein Stylesheet ein.",
      },
      {
        question: "Warum fehlt eine kleine Akzentfarbe?",
        answer:
          "Die Palette bevorzugt Farben, die eine größere Fläche abdecken. Ein winziges Detail wie ein kleines Logo taucht daher eventuell nicht auf. Nutze den Farbwähler für Bilder, um den exakten Wert einer bestimmten Stelle zu erhalten.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Text in Bild einfügen",
    shortName: "Text einfügen",
    tagline: "Schreib Bildunterschriften oder Titel auf ein Foto, mit Schriftart, Größe, Farbe, Kontur und Hintergrundbox nach Wahl.",
    intro:
      "Text in Bild einfügen setzt eine oder mehrere Textzeilen auf ein Bild. Zieh den Text an eine beliebige Stelle der Vorschau oder platziere ihn oben, in der Mitte oder unten. Gestalte ihn mit sieben Schriftarten, fett oder kursiv, Ausrichtung, Deckkraft, Schlagschatten, Kontur und einer farbigen Hintergrundbox. Beim Download wird der Text auf das Bild in voller Auflösung gezeichnet.",
    seoTitle: "Text in Bild einfügen – online und kostenlos",
    seoDescription:
      "Text in Bild einfügen, kostenlos: Text frei verschieben, Schrift, Größe, Farbe, Kontur, Schatten und Hintergrundbox wählen, als JPG, PNG, WebP oder AVIF.",
    keywords: [
      "text in bild einfügen",
      "text auf foto schreiben",
      "bild beschriften",
      "foto beschriften online",
      "text auf bild schreiben",
      "bildunterschrift hinzufügen",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Text eingeben",
        description: "Gib den Text in das Feld ein. Mit Enter beginnst du eine neue Zeile.",
      },
      {
        title: "Gestalten und platzieren",
        description:
          "Wähle Schriftart, Größe (12 bis 240 px), Farbe, Deckkraft und Ausrichtung. Zieh den Text in der Vorschau oder wähle „Oben“, „Mitte“, „Unten“ oder „Eigene“ für eine eigene vertikale Position.",
      },
      {
        title: "Herunterladen",
        description: "Behalte das Originalformat oder wähle JPG, PNG, WebP oder AVIF und klicke dann auf „Herunterladen“.",
      },
    ],
    features: [
      {
        title: "Platzieren per Ziehen",
        description: "Verschiebe den Text direkt in der Vorschau genau dorthin, wo du ihn haben willst.",
      },
      {
        title: "Sieben Schriftarten",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New und Impact, jeweils auch fett und kursiv.",
      },
      {
        title: "Lesbar auf jedem Foto",
        description: "Füge einen Schlagschatten, eine Kontur von 1 bis 20 px oder eine Hintergrundbox mit eigener Farbe und Deckkraft hinzu.",
      },
      {
        title: "Mehrzeiliger Text",
        description: "Schreib mehrere Zeilen und richte sie linksbündig, zentriert oder rechtsbündig aus.",
      },
    ],
    faqs: [
      {
        question: "Wie mache ich Text auf einem unruhigen Foto lesbar?",
        answer:
          "Schalte „Kontur“ ein und wähle eine Farbe, die sich vom Text abhebt, oder aktiviere „Hintergrundbox“, um eine deckende oder halbtransparente Box hinter den Text zu legen. Auch ein Schlagschatten hilft auf hellen Flächen.",
      },
      {
        question: "Kann ich mehr als einen Textblock einfügen?",
        answer:
          "Das Tool fügt einen Textblock ein, der mehrere Zeilen haben kann. Für Text an einer zweiten Stelle lädst du das Ergebnis herunter, öffnest es erneut und fügst den nächsten Text hinzu.",
      },
      {
        question: "Welche Schriftarten kann ich nutzen?",
        answer:
          "Du hast sieben Schriftarten zur Auswahl. Die meisten sind Systemschriften. Ist eine davon auf deinem Gerät nicht installiert, nutzt der Browser stattdessen eine ähnliche Schrift.",
      },
      {
        question: "Ist der Text im heruntergeladenen Bild scharf?",
        answer:
          "Ja. Der Text wird in der vollen Auflösung deines Bildes gezeichnet. Speicherst du als JPG, nutze eine hohe Qualität, damit die Buchstabenkanten sauber bleiben.",
      },
    ],
  },
  "watermark-image": {
    name: "Wasserzeichen einfügen",
    shortName: "Wasserzeichen",
    tagline: "Schütze deine Fotos mit einem Wasserzeichen aus Text oder Logo, an einer Stelle oder über das ganze Bild wiederholt.",
    intro:
      "Wasserzeichen einfügen legt einen Copyright-Hinweis, einen Website-Namen oder ein Logo über ein Foto. Platziere ein Text- oder Logo-Wasserzeichen an einer von neun Positionen und stelle Größe und Deckkraft ein, oder wiederhole den Text über das ganze Bild, was sich viel schwerer wegschneiden lässt. Logos können PNG-, WebP-, JPG- oder SVG-Dateien sein. Ein Logo mit transparentem Hintergrund sieht am besten aus.",
    seoTitle: "Wasserzeichen einfügen online – Text oder Logo",
    seoDescription:
      "Wasserzeichen auf Fotos einfügen, kostenlos: Text oder Logo nutzen, aus neun Positionen wählen, Deckkraft und Drehung einstellen oder Text wiederholen.",
    keywords: [
      "wasserzeichen einfügen",
      "wasserzeichen auf foto",
      "wasserzeichen erstellen online",
      "logo auf foto einfügen",
      "copyright wasserzeichen",
      "wasserzeichen kostenlos",
      "transparentes wasserzeichen",
    ],
    howToSteps: [
      {
        title: "Foto öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Text oder Logo wählen",
        description:
          "Wähle „Text“ und gib deinen Text ein, oder wähle „Logo-Bild“ und eine PNG-, WebP-, JPG- oder SVG-Datei.",
      },
      {
        title: "Platzieren und gestalten",
        description:
          "Klicke auf eine Position im 3 × 3-Raster und stelle dann Deckkraft und Größe ein. Bei Text kannst du auch Farbe und Drehung festlegen oder „Über das ganze Bild wiederholen“ einschalten.",
      },
      {
        title: "Herunterladen",
        description: "Behalte das Originalformat oder wähle ein anderes und klicke dann auf „Herunterladen“.",
      },
    ],
    features: [
      {
        title: "Text oder Logo",
        description: "Nutze eine Copyright-Zeile oder Website-Adresse oder lade dein eigenes Logo hoch.",
      },
      {
        title: "Neun Positionen",
        description: "Ecken, Ränder oder Mitte, mit einem Abstand, der sich an die Bildgröße anpasst.",
      },
      {
        title: "Wiederholtes Textmuster",
        description: "Wiederhole deinen Text im gewählten Winkel über das ganze Foto.",
      },
      {
        title: "Deckkraft, Größe und Drehung",
        description: "Deckkraft von 10 % bis 100 %, Textgröße von 14 bis 140 px, Logobreite von 5 % bis 60 % des Bildes und Textdrehung von -90° bis 90°.",
      },
    ],
    faqs: [
      {
        question: "Wie füge ich mein Logo als Wasserzeichen ein?",
        answer:
          "Wähle „Logo-Bild“, klicke auf „Logo auswählen“ und wähle deine Datei. Lege die Logogröße als Prozentwert der Bildbreite fest, wähle eine Position und senke die Deckkraft, damit das Foto sichtbar bleibt.",
      },
      {
        question: "Welche Deckkraft sollte ein Wasserzeichen haben?",
        answer:
          "Etwa 30 % bis 50 % sind sichtbar, ohne das Foto zu verdecken. Nimm einen höheren Wert, wenn das Wasserzeichen gut lesbar sein muss.",
      },
      {
        question: "Was ist ein wiederholtes Wasserzeichen?",
        answer:
          "„Über das ganze Bild wiederholen“ setzt deinen Text viele Male über das ganze Foto. Das lässt sich durch Zuschneiden viel schwerer entfernen als ein einzelnes Zeichen in einer Ecke. Die Option gibt es für Text-Wasserzeichen.",
      },
      {
        question: "Warum hat mein Logo einen weißen Kasten drumherum?",
        answer:
          "Die Logodatei hat einen einfarbigen Hintergrund. Nutze ein PNG, WebP oder SVG mit transparentem Hintergrund oder entferne den Hintergrund zuerst mit „Hintergrund entfernen“.",
      },
      {
        question: "Kann ein Wasserzeichen verhindern, dass mein Foto kopiert wird?",
        answer:
          "Ein Wasserzeichen macht das Kopieren weniger attraktiv und zeigt, wem das Bild gehört, kann das Kopieren aber nicht ganz verhindern. Große, mittige oder wiederholte Zeichen sind schwerer zu entfernen als ein kleines Zeichen in der Ecke.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Rahmen um Bild hinzufügen",
    shortName: "Rahmen",
    tagline: "Füge einem Foto einen einfarbigen Rahmen hinzu, außerhalb des Bildes oder über seinen Rändern.",
    intro:
      "Rahmen um Bild hinzufügen zeichnet einen farbigen Rahmen um ein Bild. Im Modus „Außen“ wächst die Arbeitsfläche, sodass das ganze Foto innerhalb des Rahmens sichtbar bleibt. Im Modus „Innen“ wird der Rahmen über die Ränder gezeichnet, und das Bild behält seine Originalgröße. Du stellst eine Breite von 1 bis 100 Pixeln, eine beliebige Farbe und die Deckkraft ein.",
    seoTitle: "Rahmen um Bild erstellen – online und kostenlos",
    seoDescription:
      "Rahmen um ein Bild erstellen, kostenlos: Farbe, Breite von 1 bis 100 px und Deckkraft wählen, Rahmen außen ums Foto oder über die Ränder legen.",
    keywords: [
      "rahmen um bild",
      "bilderrahmen online erstellen",
      "rahmen um foto hinzufügen",
      "bild mit rahmen versehen",
      "weißer rand für instagram",
      "rand um bild hinzufügen",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Position des Rahmens wählen",
        description: "„Außen“ legt den Rahmen um das Foto und vergrößert das Bild. „Innen“ zeichnet ihn über die Ränder, und die Größe bleibt gleich.",
      },
      {
        title: "Breite, Farbe und Deckkraft festlegen",
        description: "Zieh den Breitenregler von 1 bis 100 px, wähle eine beliebige Farbe und senke die Deckkraft für einen weicheren Rahmen.",
      },
      {
        title: "Herunterladen",
        description: "Behalte das Originalformat oder wähle JPG, PNG, WebP oder AVIF und klicke dann auf „Herunterladen“.",
      },
    ],
    features: [
      {
        title: "Außen oder innen",
        description: "Füge Platz um das Foto hinzu oder behalte exakt die ursprünglichen Maße.",
      },
      {
        title: "Jede Breite und Farbe",
        description: "Von einer dünnen 1-px-Linie bis zu einem breiten 100-px-Rahmen, in jeder Farbe.",
      },
      {
        title: "Einstellbare Deckkraft",
        description: "Mach den Rahmen halbtransparent für einen leichteren Effekt.",
      },
      {
        title: "Dein Format bleibt",
        description: "Das Bild mit Rahmen wird im selben Format wie das Original gespeichert, außer du wählst ein anderes.",
      },
    ],
    faqs: [
      {
        question: "Ändert ein Rahmen die Bildgröße?",
        answer:
          "Im Modus „Außen“ kommt die Rahmenbreite an jeder Seite hinzu. Ein Bild mit 1000 × 800 Pixeln und einem 20-px-Rahmen wird also 1040 × 840 groß. Der Modus „Innen“ behält die Größe und verdeckt den äußeren Rand des Fotos.",
      },
      {
        question: "Wie füge ich einen weißen Rand für Instagram hinzu?",
        answer:
          "Schneide das Foto zuerst auf 1:1 zu und füge dann im Modus „Außen“ einen weißen Rahmen hinzu. Das Ergebnis bleibt quadratisch, weil an jeder Seite dieselbe Breite hinzukommt.",
      },
      {
        question: "Kann ich einen Rahmen mit abgerundeten Ecken erstellen?",
        answer:
          "Der Rahmen selbst ist rechteckig. Für einen runden Look fügst du zuerst den Rahmen hinzu und öffnest das Ergebnis dann in „Bildecken abrunden“.",
      },
      {
        question: "Was bewirkt die Deckkraft des Rahmens?",
        answer:
          "Eine geringere Deckkraft macht den Rahmen durchscheinend. Im Modus „Innen“ scheint das Foto hindurch. Im Modus „Außen“ wird der Rahmenbereich in PNG, WebP und AVIF teilweise transparent und in JPG mit Weiß gemischt.",
      },
    ],
  },
  "round-image": {
    name: "Bildecken abrunden",
    shortName: "Ecken runden",
    tagline: "Runde die Ecken eines Bildes ab oder schneide es kreisrund aus, mit transparentem Hintergrund als PNG.",
    intro:
      "Bildecken abrunden gibt einem Bild weich abgerundete Ecken oder macht daraus einen Kreis für ein Profilbild oder App-Icon. Wähle die Vorgabe „Klein“, „Mittel“ oder „Groß“, stelle mit dem Regler einen exakten Radius ein oder klicke auf „Kreis erstellen“. Das Ergebnis wird standardmäßig als PNG gespeichert, damit die weggeschnittenen Ecken transparent bleiben.",
    seoTitle: "Bildecken abrunden online – auch Bild rund machen",
    seoDescription:
      "Bildecken abrunden oder Foto rund ausschneiden, kostenlos: Eckenradius einstellen, transparenten Hintergrund als PNG behalten oder Füllfarbe für JPG wählen.",
    keywords: [
      "bild ecken abrunden",
      "abgerundete ecken bild online",
      "bild rund machen",
      "profilbild rund machen",
      "rundes profilbild erstellen",
      "png abgerundete ecken",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Form wählen",
        description: "Klicke auf „Kreis erstellen“, wähle kleine, mittlere oder große Ecken oder zieh den Radius-Regler.",
      },
      {
        title: "Format wählen",
        description:
          "PNG ist voreingestellt. Wählst du JPG, bestimmst du Weiß, Schwarz oder eine eigene Farbe für die Ecken.",
      },
      {
        title: "Herunterladen",
        description: "Klicke auf „Herunterladen“, um das abgerundete Bild zu speichern, oder kopiere es in die Zwischenablage.",
      },
    ],
    features: [
      {
        title: "Vorgaben und exakter Radius",
        description: "Vorgaben „Klein“, „Mittel“ und „Groß“ oder ein beliebiger Radius von 0 bis zur Hälfte der kürzeren Seite.",
      },
      {
        title: "Runder Avatar",
        description: "Macht aus dem Bild mit einem Klick einen Kreis, fertig für Profilbilder.",
      },
      {
        title: "Transparente Ecken",
        description: "PNG, WebP und AVIF lassen den Bereich außerhalb der Rundung transparent.",
      },
      {
        title: "Füllfarbe für JPG",
        description: "Speicherst du als JPG, werden die Ecken mit Weiß, Schwarz oder einer Farbe deiner Wahl gefüllt.",
      },
    ],
    faqs: [
      {
        question: "Wie erstelle ich ein rundes Profilbild?",
        answer:
          "Klicke auf „Kreis erstellen“. Der Kreis richtet sich nach der kürzeren Bildseite und wird zentriert. Schneide ein nicht quadratisches Foto deshalb zuerst auf 1:1 zu, um das Gesicht mittig zu platzieren und leere Flächen an den Seiten zu vermeiden.",
      },
      {
        question: "Warum sind meine Ecken weiß oder schwarz statt transparent?",
        answer: "JPG kann keine Transparenz speichern. Wähle PNG, WebP oder AVIF, damit die Ecken transparent bleiben.",
      },
      {
        question: "Was bedeuten die Vorgaben „Klein“, „Mittel“ und „Groß“?",
        answer:
          "Der größtmögliche Radius ist die Hälfte der kürzeren Bildseite. „Klein“, „Mittel“ und „Groß“ nutzen 10 %, 25 % und 50 % dieses Maximums.",
      },
      {
        question: "Warum ist mein abgerundetes Bild so groß?",
        answer:
          "PNG ist verlustfrei, ein Kamerafoto in voller Größe kann daher eine große Datei ergeben. Verkleinere das Foto zuerst oder speichere es als WebP, das ebenfalls Transparenz behält und viel kleiner ist.",
      },
    ],
  },
  "favicon-generator": {
    name: "Favicon-Generator",
    shortName: "Favicon",
    tagline: "Erstelle aus einem Bild favicon.ico, ein Apple Touch Icon, Android-Icons und ein Web-Manifest, alles in einer ZIP-Datei.",
    intro:
      "Der Favicon-Generator macht aus einem Logo oder Bild alle Icon-Dateien, die eine Website braucht. Er schneidet das Bild auf ein mittiges Quadrat zu und erstellt favicon.ico (mit 16, 32 und 48 Pixeln), PNG-Icons von 16 bis 512 Pixeln, eine apple-touch-icon.png mit 180 × 180 Pixeln und eine site.webmanifest-Datei, alles in einer ZIP-Datei. Die Seite zeigt dir außerdem die HTML-Link-Tags, die du in den Head-Bereich deiner Website einfügst.",
    seoTitle: "Favicon erstellen – ICO, PNG und Apple Touch Icon",
    seoDescription:
      "Favicon erstellen, kostenlos: PNG-, JPG- oder SVG-Logo hochladen und favicon.ico, PNG-Icons von 16 bis 512 px, Apple Touch Icon und Manifest als ZIP erhalten.",
    keywords: [
      "favicon erstellen",
      "favicon generator",
      "favicon ico erstellen",
      "png in ico umwandeln",
      "apple touch icon erstellen",
      "favicon aus bild erstellen",
      "website icon erstellen",
    ],
    howToSteps: [
      {
        title: "Logo hochladen",
        description:
          "Zieh ein PNG-, JPG-, SVG- oder HEIC-Bild hierher oder wähle es aus. Ein quadratisches Bild mit mindestens 512 × 512 Pixeln liefert das beste Ergebnis.",
      },
      {
        title: "Auf Zentrierung achten",
        description:
          "Die Icons werden aus der Bildmitte geschnitten. Sitzt dein Logo nicht mittig oder ist das Bild nicht quadratisch, schneide es zuerst mit „Bild zuschneiden“ auf 1:1 zu.",
      },
      {
        title: "Favicon-Paket herunterladen",
        description: "Klicke auf „Favicon-Paket herunterladen (ZIP)“, um alle Icon-Dateien und das Manifest zu erhalten.",
      },
      {
        title: "Zur Website hinzufügen",
        description:
          "Lade die Dateien in den Hauptordner deiner Website hoch, klicke dann auf „Code kopieren“ und füge die HTML-Tags in den Head-Bereich deiner Seiten ein.",
      },
    ],
    features: [
      {
        title: "favicon.ico in mehreren Größen",
        description: "Eine ICO-Datei mit Icons in 16 × 16, 32 × 32 und 48 × 48 für Browser-Tabs und Lesezeichen.",
      },
      {
        title: "PNG-Icons für jedes Gerät",
        description: "PNG-Dateien mit 16, 32, 48, 64, 128, 192 und 512 Pixeln, dazu eine apple-touch-icon.png mit 180 × 180.",
      },
      {
        title: "Web-App-Manifest",
        description: "Eine site.webmanifest-Datei, die für Android und installierbare Web-Apps auf die Icons mit 192 und 512 Pixeln verweist.",
      },
      {
        title: "Klare kleine Größen",
        description: "Die Icons werden in mehreren Schritten aus dem vollen Bild verkleinert, so bleiben die Versionen mit 16 und 32 Pixeln sauberer.",
      },
      {
        title: "HTML zum Einfügen",
        description: "Kopiere die Link-Tags für die Icons und das Manifest mit einem Klick.",
      },
    ],
    faqs: [
      {
        question: "Wie groß sollte mein Favicon-Bild sein?",
        answer:
          "Nutze ein quadratisches Bild mit mindestens 512 × 512 Pixeln, damit das größte Icon scharf bleibt. Einfache Formen und kräftige Farben bleiben auch bei 16 × 16 erkennbar.",
      },
      {
        question: "Welche Dateien enthält die ZIP-Datei?",
        answer:
          "favicon.ico, favicon-16x16.png bis favicon-512x512.png (16, 32, 48, 64, 128, 192 und 512), apple-touch-icon.png mit 180 × 180 und site.webmanifest.",
      },
      {
        question: "Wohin kommen die Favicon-Dateien?",
        answer:
          "Lade sie in den Hauptordner deiner Website hoch, also dorthin, wo auch deine Startseite liegt. Füge dann die HTML-Tags von dieser Seite in den Head-Bereich jeder Seite ein.",
      },
      {
        question: "Warum wird ein Teil meines Logos abgeschnitten?",
        answer:
          "Das Tool nimmt das größte mittige Quadrat aus deinem Bild. Ist das Logo breit oder nicht zentriert, schneide es vor dem Erstellen der Icons auf ein Quadrat mit etwas Platz drumherum zu.",
      },
      {
        question: "Kann ich ein SVG-Logo verwenden?",
        answer:
          "Ja. Das SVG wird als Bild gezeichnet und als PNG- und ICO-Dateien gespeichert. Die ZIP-Datei enthält kein SVG-Favicon.",
      },
      {
        question: "Muss ich die Manifest-Datei bearbeiten?",
        answer:
          "Ja. site.webmanifest nutzt den Platzhalternamen App und dunkle Theme-Farben. Öffne die Datei in einem Texteditor und passe name, short_name und die Farben an deine Website an.",
      },
    ],
  },
  "image-to-base64": {
    name: "Bild in Base64",
    shortName: "Bild → Base64",
    tagline: "Wandle eine Bilddatei in einen Base64-String zum Kopieren um, mit fertigen HTML- und CSS-Snippets.",
    intro:
      "Bild in Base64 kodiert eine Bilddatei als Base64-Text, damit sie als reiner Text gespeichert oder versendet werden kann, zum Beispiel in JSON, einer HTML-Seite oder einer CSS-Datei. Der String wird aus den Original-Bytes der Datei erstellt, das Bild wird also weder neu komprimiert noch verändert. Das Tool zeigt die Zeichenzahl an und liefert dir außerdem ein HTML-img-Tag und eine CSS-background-image-Regel, die das komplette Bild enthalten.",
    seoTitle: "Bild in Base64 umwandeln – Base64-String kopieren",
    seoDescription:
      "Bild in Base64 umwandeln, kostenlos: Original-Bytes von JPG, PNG, WebP, GIF oder SVG kodieren, String, HTML-img-Tag oder CSS-Regel per Klick kopieren.",
    keywords: [
      "bild in base64 umwandeln",
      "bild zu base64",
      "base64 bild kodieren",
      "png in base64",
      "jpg in base64",
      "svg in base64",
      "base64 string aus bild",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh eine beliebige Bilddatei hierher, wähle sie aus oder füge sie ein. Kleine Bilder wie Icons eignen sich am besten.",
      },
      {
        title: "Base64-String erhalten",
        description: "Der String erscheint sofort, zusammen mit seiner Länge in Zeichen und seiner ungefähren Größe.",
      },
      {
        title: "Kopieren, was du brauchst",
        description: "Klicke auf „Base64 kopieren“ für den reinen String oder nutze „HTML kopieren“ oder „CSS kopieren“ für ein fertiges Snippet.",
      },
      {
        title: "In deinen Code einfügen",
        description: "Füge den String in dein JSON, HTML, CSS oder Skript ein.",
      },
    ],
    features: [
      {
        title: "Byte-genaue Kodierung",
        description: "Die Originaldatei wird so kodiert, wie sie ist, ohne neue Kompression oder Qualitätsänderung.",
      },
      {
        title: "Angaben zur Größe",
        description: "Sieh die Zeichenzahl und die ungefähre Größe des Strings, bevor du ihn verwendest.",
      },
      {
        title: "HTML- und CSS-Snippets",
        description: "Kopiere ein img-Tag oder eine background-image-Regel, in der die komplette Data-URI bereits enthalten ist.",
      },
      {
        title: "Lokal kodiert",
        description: "Die Datei wird in deinem Browser gelesen und kodiert und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wofür wird Base64 bei Bildern verwendet?",
        answer:
          "Base64 wandelt binäre Bilddaten in reine Textzeichen um. Entwickler nutzen das, um kleine Bilder direkt in HTML, CSS, JSON oder E-Mail-Vorlagen einzubetten, sodass keine separate Bilddatei geladen werden muss.",
      },
      {
        question: "Warum ist der Base64-String größer als die Bilddatei?",
        answer:
          "Base64 braucht für je 3 Bytes 4 Textzeichen, das Ergebnis ist also etwa 33 % größer. Aus einem Bild mit 30 KB werden rund 40 KB Text.",
      },
      {
        question: "Was ist der Unterschied zwischen Base64 und einer Data-URI?",
        answer:
          "Base64 ist nur der kodierte Text. Eine Data-URI fügt ein Präfix wie data:image/png;base64, hinzu, damit Browser den Dateityp kennen. Dieses Tool liefert den reinen String, „Bild in Data-URI“ die vollständige Version.",
      },
      {
        question: "Sollte ich große Bilder in Base64 umwandeln?",
        answer:
          "Meistens nicht. Base64 eignet sich am besten für kleine Bilder wie Icons. Große Fotos machen dein HTML oder CSS deutlich schwerer, und der Browser kann das Bild nicht als eigene Datei zwischenspeichern.",
      },
      {
        question: "Wird mein Bild beim Kodieren verändert?",
        answer:
          "Nein, die Original-Bytes werden kodiert. Einzige Ausnahme sind HEIC-Fotos vom iPhone: Sie werden zuerst in PNG umgewandelt, weil die meisten Browser HEIC nicht anzeigen können.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Bild in Data-URI",
    shortName: "Data-URI",
    tagline: "Mach aus einem Bild eine vollständige Data-URI, die du direkt in ein HTML-src-Attribut oder einen CSS-url()-Wert einfügen kannst.",
    intro:
      "Bild in Data-URI wandelt eine Bilddatei in eine Data-URI um: eine Textzeile, die sowohl den Dateityp als auch das Base64-kodierte Bild enthält. Du kannst sie direkt in ein img-src-Attribut oder einen CSS-url()-Wert einfügen, und das Bild wird ohne separate Datei angezeigt. Der MIME-Typ im Präfix stammt aus deiner Datei, und die Bild-Bytes werden nicht verändert.",
    seoTitle: "Bild in Data-URI umwandeln – für HTML und CSS",
    seoDescription:
      "Bild in Data-URI umwandeln, kostenlos: einen data:image-Base64-String mit korrektem MIME-Typ erhalten und als HTML-img-Tag oder CSS-background-Regel kopieren.",
    keywords: [
      "bild in data uri umwandeln",
      "data uri generator",
      "bild in data url umwandeln",
      "base64 data uri",
      "bild in css einbetten",
      "bild in html einbetten",
      "data url bild",
    ],
    howToSteps: [
      {
        title: "Bild öffnen",
        description: "Zieh eine beliebige Bilddatei hierher, wähle sie aus oder füge sie ein, zum Beispiel ein Icon, Logo oder eine kleine Grafik.",
      },
      {
        title: "Data-URI erhalten",
        description: "Die vollständige Data-URI, beginnend mit data:image/, erscheint mit ihrer Länge und ungefähren Größe.",
      },
      {
        title: "Kopieren",
        description: "Klicke auf „Data-URI kopieren“ oder nutze „HTML kopieren“ oder „CSS kopieren“ für ein fertiges Snippet.",
      },
      {
        title: "In deine Seite einfügen",
        description: "Nutze sie überall dort, wo eine normale Bild-URL funktioniert, etwa in einem img-Tag oder einem CSS-Hintergrund.",
      },
    ],
    features: [
      {
        title: "Korrekter MIME-Typ",
        description: "Das Präfix passt zu deiner Datei, zum Beispiel image/png, image/jpeg oder image/svg+xml.",
      },
      {
        title: "Original-Bytes",
        description: "Die Datei wird so kodiert, wie sie ist. Qualität und Größe ändern sich also nicht durch erneute Kompression.",
      },
      {
        title: "Snippets zum Kopieren",
        description: "Erhalte ein komplettes img-Tag oder eine background-image-Regel, in der die Data-URI bereits steckt.",
      },
      {
        title: "Privat",
        description: "Die Data-URI wird in deinem Browser erstellt, das Bild wird also nicht hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Was ist eine Data-URI?",
        answer:
          "Eine Data-URI ist ein Link, der die Datei selbst enthält, statt auf sie zu verweisen. Bei Bildern beginnt sie mit data:image/png;base64, oder einem ähnlichen Präfix, und Browser zeigen sie wie eine normale Bild-URL an.",
      },
      {
        question: "Wie nutze ich eine Data-URI in CSS?",
        answer:
          "Klicke auf „CSS kopieren“, um eine background-image-Regel mit der vollständigen URI in url() zu erhalten, und füge sie in dein Stylesheet ein.",
      },
      {
        question: "Wann sollte ich auf Data-URIs verzichten?",
        answer:
          "Bei großen Bildern und bei Bildern, die auf vielen Seiten vorkommen. Der kodierte Text ist etwa ein Drittel größer als die Datei, und der Browser kann ihn nicht separat zwischenspeichern.",
      },
      {
        question: "Funktionieren Bilder als Data-URI in E-Mails?",
        answer:
          "Das ist unterschiedlich. Viele E-Mail-Programme, darunter einige Webmail-Dienste, zeigen Data-URI-Bilder nicht an. Teste deine E-Mail also oder nutze ein online gehostetes Bild.",
      },
      {
        question: "Welche Bildtypen werden unterstützt?",
        answer:
          "Jedes Bild, das dein Browser öffnen kann, etwa JPG, PNG, GIF, WebP, AVIF und SVG. HEIC-Fotos vom iPhone werden zuerst in PNG umgewandelt, ihre Data-URI nutzt daher image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64 in Bild",
    shortName: "Base64 → Bild",
    tagline: "Füge einen Base64-String oder eine Data-URI ein, sieh dir das Bild an und lade es als PNG, JPG oder WebP herunter.",
    intro:
      "Base64 in Bild dekodiert Base64-Text zurück in ein Bild, das du ansehen und speichern kannst. Du kannst einen reinen Base64-String, eine vollständige Data-URI oder ein CSS-url()- oder HTML-src-Snippet einfügen, das eine solche URI enthält. URL-sicheres Base64 und Zeilenumbrüche werden automatisch verarbeitet. Das Tool erkennt, ob es sich um PNG, JPEG, GIF, WebP, SVG, BMP oder AVIF handelt, und zeigt das dekodierte Bild mit seinen Maßen an.",
    seoTitle: "Base64 in Bild umwandeln – Vorschau und Download",
    seoDescription:
      "Base64 in Bild umwandeln, kostenlos: Base64-String, Data-URI oder CSS- bzw. HTML-Snippet einfügen, das Bild ansehen und als PNG, JPG oder WebP herunterladen.",
    keywords: [
      "base64 in bild umwandeln",
      "base64 bild dekodieren",
      "base64 in png",
      "base64 in jpg",
      "data uri in bild",
      "base64 string in bild umwandeln",
      "base64 bild anzeigen",
    ],
    howToSteps: [
      {
        title: "Base64-Daten einfügen",
        description: "Füge den Text in das Textfeld ein, klicke auf „Einfügen“ oder lade eine .txt-Datei, die den String enthält.",
      },
      {
        title: "Vorschau prüfen",
        description: "Das Bild wird automatisch dekodiert und mit Breite und Höhe angezeigt. Ist der Text ungültig, erscheint eine Fehlermeldung.",
      },
      {
        title: "Exportformat wählen",
        description: "Wähle PNG, JPG oder WebP.",
      },
      {
        title: "Bild herunterladen",
        description: "Klicke auf „Herunterladen“, um das dekodierte Bild auf deinem Gerät zu speichern.",
      },
    ],
    features: [
      {
        title: "Nimmt viele Eingabeformen an",
        description:
          "Reines Base64, Data-URIs, CSS-url()- und HTML-src-Snippets, URL-sicheres Base64 und Text, der über mehrere Zeilen umbrochen ist.",
      },
      {
        title: "Automatische Formaterkennung",
        description: "Erkennt PNG, JPEG, GIF, WebP, SVG, BMP und AVIF an den Daten selbst, auch wenn das Präfix fehlt oder falsch ist.",
      },
      {
        title: "Sofortige Vorschau",
        description: "Sieh das dekodierte Bild und seine Maße, sobald du den Text einfügst.",
      },
      {
        title: "Drei Exportformate",
        description: "Speichere das Ergebnis als PNG, JPG oder WebP.",
      },
    ],
    faqs: [
      {
        question: "Welchen Base64-Text kann ich einfügen?",
        answer:
          "Einen reinen Base64-String, eine Data-URI wie data:image/png;base64,... oder ein CSS- oder HTML-Snippet, das eine solche URI enthält. Leerzeichen, Zeilenumbrüche und URL-sichere Zeichen werden automatisch bereinigt.",
      },
      {
        question: "Warum bekomme ich eine Fehlermeldung?",
        answer:
          "Oft wird der Text beim Kopieren abgeschnitten. Achte darauf, dass du den ganzen String kopiert hast, einschließlich des Endes, das =-Zeichen enthalten kann.",
      },
      {
        question: "Ist die heruntergeladene Datei identisch mit dem Original?",
        answer:
          "Das Bild wird dekodiert und im gewählten Format neu gespeichert. PNG erhält jedes Pixel, JPG und WebP werden dagegen erneut komprimiert. Animierte GIFs werden zu einem einzelnen Standbild, und SVG-Grafiken werden als Pixelbilder gespeichert.",
      },
      {
        question: "Woher weiß das Tool, um welchen Bildtyp es sich handelt?",
        answer:
          "Jedes Format beginnt mit einer bekannten Signatur, zum Beispiel iVBORw0KGgo bei PNG oder /9j/ bei JPEG. Das Tool liest diese ersten Zeichen, um das Bild richtig zu dekodieren.",
      },
      {
        question: "Werden meine Base64-Daten an einen Server gesendet?",
        answer: "Nein. Der Text wird in deinem Browser dekodiert, und das Bild entsteht auf deinem Gerät.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG in PNG",
    shortName: "SVG → PNG",
    tagline: "Wandle SVG-Vektordateien in scharfe PNG-Bilder in 1-, 2-, 4- oder 8-facher Größe um, mit erhaltener Transparenz.",
    intro:
      "SVG in PNG macht aus einer Vektorgrafik, etwa einem Logo oder Icon, ein PNG-Bild für Stellen, die keine SVG-Dateien annehmen. Wähle 1x, 2x, 4x oder 8x die eigene Größe des SVG. Weil die Vektorgrafik in dieser Größe neu gezeichnet wird, ergibt eine höhere Skalierung ein schärferes statt eines unscharfen Bildes. Transparente Hintergründe bleiben im PNG transparent.",
    seoTitle: "SVG in PNG umwandeln – hochauflösend, transparent",
    seoDescription:
      "SVG in PNG umwandeln, kostenlos: in 1x, 2x, 4x oder 8x exportieren und scharfe, hochauflösende Bilder mit transparentem Hintergrund erhalten.",
    keywords: [
      "svg in png umwandeln",
      "svg in png",
      "svg in png hohe auflösung",
      "svg in png transparent",
      "svg als png exportieren",
      "svg konverter",
    ],
    howToSteps: [
      {
        title: "SVG-Datei öffnen",
        description: "Zieh eine .svg-Datei in das Upload-Feld oder klicke, um eine auszuwählen.",
      },
      {
        title: "Skalierung wählen",
        description: "Wähle 1x, 2x, 4x oder 8x. Breite und Höhe der Ausgabe in Pixeln stehen unter den Schaltflächen.",
      },
      {
        title: "PNG herunterladen",
        description: "Klicke auf „PNG herunterladen“, um das Bild zu speichern, oder kopiere es in die Zwischenablage.",
      },
    ],
    features: [
      {
        title: "Scharf in jeder Größe",
        description: "Die Vektorgrafik wird in der gewählten Größe neu gerendert, Linien und Text bleiben also gestochen scharf.",
      },
      {
        title: "Transparenter Hintergrund",
        description: "Bereiche ohne Füllung im SVG bleiben im PNG transparent.",
      },
      {
        title: "Vorschau der Ausgabegröße",
        description: "Sieh die exakten Pixelmaße für jede Skalierung, bevor du herunterlädst.",
      },
      {
        title: "Verlustfreies PNG",
        description: "Das gerenderte Bild wird ohne Kompressionsverlust als PNG gespeichert.",
      },
    ],
    faqs: [
      {
        question: "Wie bekomme ich ein hochauflösendes PNG aus einem SVG?",
        answer:
          "Wähle 4x oder 8x. Ein SVG mit 256 × 256 wird bei 4x zu 1024 × 1024 oder bei 8x zu 2048 × 2048 und bleibt scharf, weil es in dieser Größe neu gezeichnet wird.",
      },
      {
        question: "Warum hat die Ausgabe nicht die erwartete Größe?",
        answer:
          "Die Größe bei 1x stammt aus Breite und Höhe in der SVG-Datei. Hat das SVG nur eine viewBox und keine Breite oder Höhe, nutzt der Browser eventuell eine Standardgröße. Füge width- und height-Attribute hinzu, um das zu steuern.",
      },
      {
        question: "Warum fehlen Schriften oder Bilder in meinem PNG?",
        answer:
          "Wird ein SVG als Bild gezeichnet, laden Browser keine externen Dateien, auf die es verweist, etwa Webfonts oder verlinkte Bilder. Wandle Text in Pfade um und bette Bilder vor dem Umwandeln in das SVG ein.",
      },
      {
        question: "Behält das PNG den transparenten Hintergrund?",
        answer: "Ja. Jeder Bereich des SVG ohne Füllung oder Hintergrund bleibt transparent.",
      },
      {
        question: "Kann ich SVG in JPG umwandeln?",
        answer:
          "Dieses Tool speichert nur PNG. Für ein JPG wandelst du zuerst in PNG um und öffnest das PNG dann in „PNG in JPG“, wo du auch eine Hintergrundfarbe wählen kannst.",
      },
    ],
  },
  "photo-filters": {
    name: "Fotofilter & Effekte",
    shortName: "Filter",
    tagline: "Nutze fertige Looks wie Vintage, Noir oder Kino-Look und passe dann Helligkeit, Kontrast, Farbe und Vignette an.",
    intro:
      "Fotofilter & Effekte verändert Look und Stimmung eines Fotos. Starte mit einem von acht Presets wie „Kino-Look“, „Vintage 70er“, „Düsteres Noir“ oder „Warmer Abend“ und passe dann Helligkeit, Kontrast, Sättigung, Sepia, Schwarzweiß, Farbton, Klarheit, Vignette und Weichzeichner mit Reglern an. In einer geteilten Ansicht vergleichst du das bearbeitete Foto mit dem Original, bevor du es als PNG, JPG oder WebP herunterlädst.",
    seoTitle: "Fotofilter online – kostenlose Effekte und Presets",
    seoDescription:
      "Fotofilter online, kostenlos: Vintage, Noir, Kino-Look und mehr testen, Helligkeit, Kontrast, Sättigung und Vignette anpassen, vorher und nachher vergleichen.",
    keywords: [
      "fotofilter online",
      "filter auf foto legen",
      "foto schwarz weiß machen",
      "vintage filter foto",
      "sepia filter online",
      "helligkeit und kontrast online anpassen",
      "vignette effekt",
    ],
    howToSteps: [
      {
        title: "Foto hochladen",
        description: "Zieh ein JPG-, PNG- oder WebP-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Preset wählen",
        description:
          "Probier „Kino-Look“, „Vintage 70er“, „Cyberpunk“, „Düsteres Noir“, „Warmer Abend“, „Kühl & blass“, „Dramatisches HDR“ oder „Negativ“. „Original“ entfernt alle Effekte.",
      },
      {
        title: "Mit Reglern verfeinern",
        description:
          "Passe Helligkeit, Kontrast, Sättigung, Sepia, Schwarzweiß, Farbton, Klarheit, Vignette und Weichzeichner an, bis das Foto passt.",
      },
      {
        title: "Vergleichen und herunterladen",
        description: "Prüfe mit „Mit Original vergleichen“ vorher und nachher und lade dann als PNG, WebP oder JPG herunter oder kopiere das Bild.",
      },
    ],
    features: [
      {
        title: "Acht Presets per Klick",
        description: "Fertige Looks von warmen Vintage-Tönen bis zu kontrastreichem Schwarzweiß.",
      },
      {
        title: "Neun Regler",
        description: "Helligkeit, Kontrast und Sättigung bis 200 %, dazu Sepia, Schwarzweiß, Farbton, Klarheit, Vignette und Weichzeichner.",
      },
      {
        title: "Vorher-nachher-Ansicht",
        description: "Zieh die Trennlinie über das Foto, um Original und bearbeitete Version zu vergleichen, am Computer oder auf dem Touchscreen.",
      },
      {
        title: "Export in voller Auflösung",
        description: "Beim Download werden die Effekte auf das Foto in voller Größe angewendet.",
      },
    ],
    faqs: [
      {
        question: "Wie mache ich ein Foto schwarz-weiß?",
        answer:
          "Klicke auf das Preset „Düsteres Noir“ für einen kontrastreichen Look oder stelle den Regler „Schwarzweiß“ auf 100 % und passe Helligkeit und Kontrast selbst an.",
      },
      {
        question: "Kann ich einen Filter rückgängig machen?",
        answer:
          "Ja. Mit „Zurücksetzen“ kehrst du jederzeit zum ursprünglichen Look zurück. Deine Originaldatei wird nie verändert.",
      },
      {
        question: "Senkt ein Filter die Auflösung?",
        answer:
          "Nein. Der Download hat dieselbe Breite und Höhe wie dein Originalfoto.",
      },
      {
        question: "Welches Download-Format soll ich wählen?",
        answer:
          "JPG und WebP werden mit 95 % Qualität gespeichert und sind bei Fotos viel kleiner. PNG erhält jedes Pixel, erzeugt bei Fotos aber große Dateien.",
      },
      {
        question: "Kann ich Filter auf HEIC-Fotos vom iPhone anwenden?",
        answer:
          "Dieses Tool öffnet keine HEIC-Dateien. Wandle das Foto zuerst mit dem Universellen Bildkonverter in JPG um und öffne dann das JPG hier.",
      },
    ],
  },
  "meme-generator": {
    name: "Meme-Generator",
    shortName: "Meme-Maker",
    tagline: "Erstelle ein Meme aus deinem eigenen Foto oder einer Vorlage, mit fetten Texten oben, in der Mitte und unten.",
    intro:
      "Der Meme-Generator setzt klassische Meme-Texte auf ein Bild. Lade dein eigenes Bild hoch oder starte mit einer von acht einfachen Vorlagen und gib dann die Texte für oben, Mitte und unten ein. Lange Zeilen werden automatisch umbrochen, damit sie in die Breite passen. Wähle Schriftart (standardmäßig Impact), Größe, Text- und Konturfarbe, Ausrichtung und Großbuchstaben und lade das Meme ohne Wasserzeichen als PNG, JPG oder WebP herunter.",
    seoTitle: "Meme-Generator – Text auf jedes Bild setzen",
    seoDescription:
      "Memes online erstellen, kostenlos: Text oben, in der Mitte und unten auf dein Foto oder eine Vorlage setzen, Schrift und Kontur wählen, ohne Wasserzeichen.",
    keywords: [
      "meme generator",
      "meme erstellen",
      "meme maker",
      "meme selber machen",
      "text auf meme schreiben",
      "meme generator ohne wasserzeichen",
      "meme aus eigenem foto",
    ],
    howToSteps: [
      {
        title: "Bild wählen",
        description: "Lade ein JPG-, PNG- oder WebP-Bild hoch oder füge es ein, oder klicke auf eine der Vorlagen.",
      },
      {
        title: "Texte schreiben",
        description: "Gib den Text für oben und unten ein und füge bei Bedarf einen Text für die Mitte hinzu.",
      },
      {
        title: "Text gestalten",
        description: "Wähle Schriftart, Größe, Textfarbe, Konturfarbe und -stärke, Ausrichtung und ob nur Großbuchstaben genutzt werden.",
      },
      {
        title: "Herunterladen oder kopieren",
        description: "Lade das Meme als PNG, WebP oder JPG herunter oder kopiere es in die Zwischenablage, um es in einen Chat einzufügen.",
      },
    ],
    features: [
      {
        title: "Drei Textbereiche",
        description: "Texte oben, in der Mitte und unten, mit automatischem Zeilenumbruch bei langem Text.",
      },
      {
        title: "Klassischer Meme-Stil",
        description: "Standardmäßig weißer Impact-Text mit schwarzer Kontur, dazu die Schriften Arial, Comic Sans, Montserrat und Times.",
      },
      {
        title: "Text wächst mit dem Bild",
        description: "Die Schriftgröße richtet sich nach der Bildhöhe, Texte sehen also auf kleinen und großen Bildern gleich aus.",
      },
      {
        title: "Kein Wasserzeichen",
        description: "Dein Meme wird genau so gespeichert, wie du es siehst, ohne zusätzliches Logo.",
      },
    ],
    faqs: [
      {
        question: "Hat das Meme ein Wasserzeichen?",
        answer: "Nein. Das heruntergeladene Bild enthält nur dein Bild und deine Texte.",
      },
      {
        question: "Welche Schrift nutzen Memes normalerweise?",
        answer:
          "Der klassische Meme-Stil ist Impact in Weiß mit schwarzer Kontur, und genau das ist hier voreingestellt. Ist eine Schrift auf deinem Gerät nicht installiert, nutzt der Browser eine ähnliche.",
      },
      {
        question: "Kann ich mein eigenes Bild verwenden?",
        answer: "Ja. Lade ein JPG-, PNG- oder WebP-Bild hoch oder füge eines mit Ctrl+V aus der Zwischenablage ein.",
      },
      {
        question: "Mein Text verdeckt zu viel vom Bild. Was kann ich tun?",
        answer:
          "Verringere die Schriftgröße oder verschiebe einen Teil des Textes in den Text für die Mitte oder unten. Lange Texte werden automatisch auf mehrere Zeilen umbrochen.",
      },
      {
        question: "Kann ich Memes auf dem Handy erstellen?",
        answer:
          "Ja. Der Meme-Generator funktioniert in mobilen Browsern. Gib deine Texte ein und speichere das Bild mit der Download-Schaltfläche.",
      },
    ],
  },
  "split-image": {
    name: "Bild in Raster teilen",
    shortName: "Raster teilen",
    tagline: "Teile ein Bild in ein Raster aus Kacheln, etwa ein 3×3-Instagram-Raster oder ein Panorama-Karussell, und lade eine ZIP-Datei herunter.",
    intro:
      "Bild in Raster teilen zerlegt ein Bild in Zeilen und Spalten aus einzelnen Bilddateien. Nutze die Vorlage „Instagram-Raster 3×3“ für ein Profilraster, Panorama 3×1 oder Karussell 2×1 für Beiträge zum Wischen, 2×2 für vier gleiche Teile, oder lege ein eigenes Raster mit bis zu 12 Zeilen und 12 Spalten fest. Alle Kacheln werden zusammen als nummerierte PNG-Dateien in einer ZIP-Datei heruntergeladen, oder du klickst auf eine einzelne Kachel, um nur diese zu speichern.",
    seoTitle: "Bild teilen – Instagram-Raster 3×3 und Panorama",
    seoDescription:
      "Bild online in ein Raster teilen, kostenlos: 3x3-Instagram-Raster, Panorama-Karussell oder eigenes Raster bis 12x12 erstellen, alle Kacheln als ZIP laden.",
    keywords: [
      "bild teilen",
      "bild in mehrere teile teilen",
      "bild in raster teilen",
      "instagram raster erstellen",
      "panorama für instagram teilen",
      "bild in 9 teile teilen",
      "bild zerschneiden online",
    ],
    howToSteps: [
      {
        title: "Bild hochladen",
        description: "Zieh ein JPG-, PNG- oder WebP-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Raster wählen",
        description:
          "Wähle „Instagram-Raster 3×3“, Panorama 3×1, Karussell 2×1 oder „Vier Quadrate“ (2×2) oder gib deine eigene Anzahl an Zeilen und Spalten ein.",
      },
      {
        title: "Vorschau prüfen",
        description: "Die Vorschau zeigt, wo das Bild geschnitten wird, und die Nummer jeder Kachel.",
      },
      {
        title: "Kacheln herunterladen",
        description: "Klicke auf „Alle Kacheln herunterladen (ZIP)“ oder auf eine einzelne Kachel in der Vorschau, um nur diese herunterzuladen.",
      },
    ],
    features: [
      {
        title: "Vorlagen für Social Media",
        description: "Ein Klick für ein 3×3-Profilraster, ein Panorama-Karussell mit 3 oder 2 Folien oder eine Aufteilung in 2×2.",
      },
      {
        title: "Eigene Raster",
        description: "Jede Kombination aus 1 bis 12 Zeilen und 1 bis 12 Spalten, bis zu 144 Kacheln.",
      },
      {
        title: "Nummerierte Kacheln",
        description: "Die Dateien heißen tile_01, tile_02 und so weiter, von links nach rechts und von oben nach unten.",
      },
      {
        title: "Kein Qualitätsverlust",
        description: "Die Kacheln werden aus dem Bild in voller Auflösung geschnitten und als verlustfreie PNG-Dateien gespeichert.",
      },
    ],
    faqs: [
      {
        question: "In welcher Reihenfolge poste ich die Kacheln auf Instagram?",
        answer:
          "Die Kacheln sind von links nach rechts und von oben nach unten nummeriert, beginnend mit tile_01. Instagram zeigt den neuesten Beitrag zuerst. Lade also die letzte Kachel zuerst hoch (bei einem 3×3-Raster tile_09) und ende mit tile_01.",
      },
      {
        question: "Welches Bild eignet sich für ein 3×3-Raster?",
        answer:
          "Für quadratische Kacheln startest du mit einem quadratischen Bild. Schneide es bei Bedarf zuerst auf 1:1 zu. Instagram zeigt Profil-Vorschaubilder eventuell mit anderem Ausschnitt, prüfe das Ergebnis also nach dem Posten.",
      },
      {
        question: "Wie teile ich ein Panorama für einen Karussell-Beitrag?",
        answer:
          "Wähle Panorama 3×1 für drei Folien oder Karussell 2×1 für zwei. Für quadratische Folien sollte das Bild dreimal (bzw. zweimal) so breit wie hoch sein.",
      },
      {
        question: "Sind alle Kacheln exakt gleich groß?",
        answer:
          "Lässt sich die Breite oder Höhe nicht gleichmäßig teilen, bekommt die letzte Spalte oder Zeile die übrigen Pixel und ist daher eventuell ein oder zwei Pixel größer.",
      },
      {
        question: "Verschlechtert das Teilen die Bildqualität?",
        answer: "Nein. Jede Kachel wird aus den Originalpixeln geschnitten und als PNG gespeichert, und PNG ist verlustfrei.",
      },
    ],
  },
  "censor-image": {
    name: "Bild verpixeln & zensieren",
    shortName: "Zensieren",
    tagline: "Verberge Gesichter, Kennzeichen, Namen oder Nummern in einem Foto mit schwarzem Balken, Verpixelung oder Unschärfe.",
    intro:
      "Bild verpixeln & zensieren verbirgt private Details in einem Bild, bevor du es teilst. Zeichne Rechtecke oder Ovale über Gesichter, Kennzeichen, Adressen oder Kontonummern und wähle für jeden Bereich einen schwarzen Balken, eine Verpixelung oder Unschärfe. Unscharfe Bereiche liegen über einer groben verpixelten Ebene, damit die ursprünglichen Details an den Rändern nicht durchscheinen.",
    seoTitle: "Bild verpixeln oder unkenntlich machen – online",
    seoDescription:
      "Bild verpixeln oder unscharf machen, kostenlos: Gesichter, Kennzeichen und private Texte mit Rechtecken oder Ovalen verpixeln oder schwärzen. Ohne Upload.",
    keywords: [
      "bild verpixeln",
      "bild unkenntlich machen",
      "gesicht verpixeln",
      "foto zensieren",
      "bild unscharf machen online",
      "text im screenshot schwärzen",
      "kennzeichen verpixeln",
    ],
    howToSteps: [
      {
        title: "Bild hochladen",
        description: "Zieh ein JPG-, PNG- oder WebP-Bild hierher, wähle es aus oder füge es ein, etwa ein Foto oder einen Screenshot.",
      },
      {
        title: "Form und Methode wählen",
        description:
          "Wähle „Rechteck“ oder „Oval“ und dann „Verpixeln“, „Weichzeichnen“ oder „Schwarzer Balken“. Beim Verpixeln und Weichzeichnen stellst du die Stärke von 4 bis 45 ein.",
      },
      {
        title: "Private Details übermalen",
        description: "Zieh über jeden Bereich, den du verbergen willst. Mit „Letzten Bereich entfernen“ nimmst du den letzten Bereich zurück, mit „Alle Bereiche entfernen“ fängst du neu an.",
      },
      {
        title: "Zensiertes Bild herunterladen",
        description: "Lade es als PNG, WebP oder JPG herunter oder kopiere es in die Zwischenablage.",
      },
    ],
    features: [
      {
        title: "Drei Methoden zum Verbergen",
        description: "Schwarze Balken, Mosaik-Verpixelung oder Unschärfe über einer verpixelten Grundlage.",
      },
      {
        title: "Rechtecke und Ovale",
        description: "Nutze Ovale für Gesichter und Rechtecke für Text, Kennzeichen und Nummern.",
      },
      {
        title: "Methoden in einem Bild mischen",
        description: "Jeder Bereich behält die Methode und Stärke, mit der er gezeichnet wurde. So kannst du einen Namen schwärzen und ein Gesicht weichzeichnen.",
      },
      {
        title: "Gleichmäßig auch bei großen Fotos",
        description: "Die Stärke wird an die Bildauflösung angepasst, hochauflösende Fotos werden also genauso gut unkenntlich gemacht.",
      },
      {
        title: "Rückgängig und entfernen",
        description: "Entferne den letzten oder alle Bereiche, ohne das Foto neu zu laden.",
      },
    ],
    faqs: [
      {
        question: "Welche Methode verbirgt Text am sichersten?",
        answer:
          "Ein schwarzer Balken ersetzt die Pixel vollständig und ist die sicherste Wahl für Passwörter, Kontonummern und Dokumente. Starke Verpixelung oder Unschärfe funktioniert auch, kleiner Text lässt sich bei schwachen Einstellungen aber manchmal erraten.",
      },
      {
        question: "Kann jemand die Unschärfe in der heruntergeladenen Datei rückgängig machen?",
        answer:
          "Die Pixel in jedem Bereich werden im heruntergeladenen Bild ersetzt, nicht auf einer separaten Ebene versteckt. Dein Originalfoto auf deinem Gerät bleibt unverändert, teile also nur die zensierte Kopie.",
      },
      {
        question: "Werden auch die EXIF-Daten entfernt?",
        answer:
          "Ja. Der Download wird aus den Pixeln der Arbeitsfläche erstellt, Kameradaten und GPS-Standort des Originals sind also nicht enthalten.",
      },
      {
        question: "Kann ich verschiedene Effekte im selben Bild nutzen?",
        answer:
          "Ja. Ändere Methode oder Stärke, bevor du den nächsten Bereich zeichnest. Bereits gezeichnete Bereiche behalten ihre eigenen Einstellungen.",
      },
      {
        question: "Funktioniert das auf dem Handy?",
        answer: "Ja. Zieh mit dem Finger über den Bereich, den du verbergen willst, um ein Rechteck oder Oval zu zeichnen.",
      },
    ],
  },
  "remove-background": {
    name: "Hintergrund entfernen",
    shortName: "Freistellen",
    tagline: "Entferne den Hintergrund eines Fotos mit KI, die auf deinem Gerät läuft, und speichere ein transparentes PNG.",
    intro:
      "Hintergrund entfernen stellt das Hauptmotiv eines Fotos frei und entfernt alles dahinter. Dafür nutzt es ein KI-Modell, das in deinem Browser läuft, deine Bilder verlassen also nie dein Gerät. Wähle „Schnell“, ein kleineres Modell, das flott arbeitet und sich am besten für Fotos von Menschen eignet, oder „Beste Qualität“, ein größeres Modell mit besseren Ergebnissen bei jedem Motiv, auch bei Produkten, Haustieren und Objekten. Speichere das Ergebnis als transparentes PNG oder setze es auf eine Volltonfarbe.",
    seoTitle: "Hintergrund entfernen – kostenlos, auf deinem Gerät",
    seoDescription:
      "Hintergrund entfernen, kostenlos mit KI im Browser: schnelles Modell oder beste Qualität wählen, transparentes PNG speichern. Fotos bleiben auf deinem Gerät.",
    keywords: [
      "hintergrund entfernen",
      "bild hintergrund entfernen",
      "hintergrund entfernen kostenlos",
      "foto freistellen",
      "bild freistellen online",
      "hintergrund transparent machen",
      "hintergrund entfernen online",
    ],
    howToSteps: [
      {
        title: "Foto hochladen",
        description: "Zieh ein JPG-, PNG- oder WebP-Bild hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Modell wählen",
        description:
          "„Schnell“ ist voreingestellt und eignet sich gut für Fotos von Menschen. Wähle „Beste Qualität“ für Produkte, Haustiere, Objekte oder immer dann, wenn du möglichst saubere Kanten willst.",
      },
      {
        title: "Modell einmalig herunterladen",
        description:
          "Wenn du ein Modell zum ersten Mal nutzt, lädt dein Browser es herunter: etwa 16 MB für „Schnell“ und etwa 100 MB für „Beste Qualität“, das vorher nachfragt. Danach ist es in deinem Browser gespeichert.",
      },
      {
        title: "Hintergrund wählen und herunterladen",
        description: "Lass ihn transparent und speichere als PNG oder wähle eine Volltonfarbe und speichere als PNG oder JPG.",
      },
    ],
    features: [
      {
        title: "KI, die auf deinem Gerät läuft",
        description: "Das Modell läuft in deinem Browser, deine Fotos werden also nie auf einen Server hochgeladen.",
      },
      {
        title: "Zwei Modelle zur Auswahl",
        description: "„Schnell“ arbeitet flott und eignet sich am besten für Menschen. „Beste Qualität“ ist größer und langsamer, liefert aber bei jedem Motiv bessere Ergebnisse.",
      },
      {
        title: "Einmal heruntergeladen",
        description: "Jedes Modell wird nach der ersten Nutzung in deinem Browser gespeichert, und das Tool zeigt, welche bereits heruntergeladen sind.",
      },
      {
        title: "Transparenter oder farbiger Hintergrund",
        description: "Speichere ein transparentes PNG oder setze das Motiv auf eine Volltonfarbe deiner Wahl.",
      },
    ],
    faqs: [
      {
        question: "Werden meine Fotos auf einen Server hochgeladen?",
        answer:
          "Nein. Nur das KI-Modell wird in deinen Browser geladen. Deine Fotos werden auf deinem Gerät verarbeitet und nirgendwohin gesendet.",
      },
      {
        question: "Was ist der Unterschied zwischen „Schnell“ und „Beste Qualität“?",
        answer:
          "„Schnell“ nutzt ein kleineres Modell (etwa 16 MB) und braucht etwa 5 Sekunden pro Foto. Es funktioniert gut bei Menschen, kann aber Teile von Objekten übersehen. „Beste Qualität“ nutzt ein größeres Modell (etwa 100 MB) und braucht etwa 15–30 Sekunden, mit besseren Ergebnissen bei Produkten, Haustieren, Objekten und Menschen.",
      },
      {
        question: "Warum dauert die erste Nutzung länger?",
        answer:
          "Das Modell muss zuerst heruntergeladen werden. „Beste Qualität“ fragt nach, bevor es sein 100-MB-Modell herunterlädt. Nach der ersten Nutzung speichert dein Browser das Modell, spätere Fotos starten also viel schneller.",
      },
      {
        question: "Funktioniert das auf iPhone und Android?",
        answer:
          "Ja. „Schnell“ ist auf Handys die beste Wahl. „Beste Qualität“ läuft auch auf Handys, aber der größere Download und die längere Verarbeitung fallen dort stärker auf, besonders mit mobilen Daten.",
      },
      {
        question: "Kann ich eine neue Hintergrundfarbe hinter das Motiv setzen?",
        answer:
          "Ja. Wähle eine Volltonfarbe und speichere als PNG oder JPG. Für einen transparenten Hintergrund speicherst du als PNG.",
      },
      {
        question: "Warum sind manche Kanten nicht perfekt?",
        answer:
          "Feine Haare, Fell, Glas und Motive mit ähnlichen Farben wie der Hintergrund sind für jedes Modell schwierig. Versuch „Beste Qualität“ oder nutze ein Foto mit klarem Kontrast zwischen Motiv und Hintergrund.",
      },
    ],
  },
  "compress-image-to-kb": {
    name: "Bild auf KB verkleinern",
    shortName: "Auf KB verkleinern",
    tagline: "Mach ein Foto kleiner als eine exakte Dateigröße, etwa 20 KB, 50 KB oder 100 KB, für Online-Formulare. Läuft auf deinem Gerät.",
    intro:
      "Viele Antrags- und Upload-Formulare nehmen nur Fotos unter einer festen Größe an, etwa 20 KB oder 50 KB, und ein normales Handyfoto ist um ein Vielfaches größer. Bild auf KB verkleinern macht die Datei kleiner als das Limit, das du wählst. Es probiert Qualitätsstufen durch, bis es die beste findet, die passt, und verkleinert die Abmessungen des Fotos nur, wenn selbst die niedrigste Qualität noch zu groß wäre. Du kannst auch exakte Abmessungen festlegen, etwa ein Passfoto mit 35 × 45 mm, und das Foto wird von der Mitte aus zugeschnitten, um sie auszufüllen. Alles passiert in deinem Browser, Fotos von dir und deinen Dokumenten werden also nie hochgeladen.",
    seoTitle: "Bild auf 20 KB, 50 KB oder 100 KB verkleinern",
    seoDescription:
      "Bild auf 20 KB verkleinern, oder auf 50 KB, 100 KB und jede andere Größe für Online-Formulare: beste passende Qualität, kostenlos und ohne Upload.",
    keywords: [
      "bild auf 20 kb verkleinern",
      "bild auf 50 kb verkleinern",
      "foto auf 100 kb verkleinern",
      "bild kb verkleinern",
      "jpg auf 200 kb komprimieren",
      "bildgröße in kb reduzieren",
      "passfoto kb verkleinern",
    ],
    howToSteps: [
      {
        title: "Foto hinzufügen",
        description: "Zieh ein JPG-, PNG-, WebP- oder iPhone-HEIC-Foto hierher, wähle es aus oder füge es ein.",
      },
      {
        title: "Größenlimit wählen",
        description: "Wähle 10 KB bis 1 MB oder gib genau das Limit ein, das dein Formular verlangt.",
      },
      {
        title: "Bei Bedarf Abmessungen festlegen",
        description: "Behalte die Originalgröße oder wähle ein Passfoto, ein Quadrat mit 2 × 2 Zoll oder eine eigene Breite und Höhe.",
      },
      {
        title: "Herunterladen",
        description: "Prüf, ob beim Ergebnis steht, dass es unter dem Limit liegt, und lade dann das JPG oder WebP herunter.",
      },
    ],
    features: [
      {
        title: "Immer unter dem Limit",
        description: "Das Tool misst die tatsächlich erzeugte Datei, der Download ist also kleiner als die gewählte Größe und nicht nur knapp daran.",
      },
      {
        title: "Beste Qualität, die passt",
        description: "Es behält die höchste Qualität, die passt, und verkleinert die Abmessungen nur, wenn es sein muss.",
      },
      {
        title: "Passfoto und eigene Größen",
        description: "Vorgaben für Passfotos mit 35 × 45 mm und Fotos mit 2 × 2 Zoll oder jede Breite und Höhe, die du brauchst.",
      },
      {
        title: "Privat von Grund auf",
        description: "Dein Foto wird in deinem Browser verarbeitet und nie hochgeladen, was bei Fotos für Ausweise und Anträge wichtig ist.",
      },
    ],
    faqs: [
      {
        question: "Liegt die Datei wirklich unter dem Limit?",
        answer:
          "Ja. Das Tool prüft die Größe der tatsächlich erzeugten Datei und zeigt nur dann eine Erfolgsmeldung, wenn sie unter deinem Limit liegt. Es rechnet 1 KB als 1.024 Byte, so wie Windows und die meisten Formulare, die Datei liegt also auch dann unter dem Limit, wenn ein Formular 1 KB als 1.000 Byte zählt.",
      },
      {
        question: "Warum haben sich die Abmessungen meines Fotos geändert?",
        answer:
          "Wenn „Größe beibehalten“ ausgewählt ist, senkt das Tool zuerst die Qualität. Ist die Datei bei der niedrigsten Qualität immer noch zu groß, verkleinert es Breite und Höhe Schritt für Schritt, bis sie passt. Die Ergebnismeldung sagt dir, wenn das passiert ist, und zeigt die neue Größe.",
      },
      {
        question: "Warum erreicht es mein Limit nicht?",
        answer:
          "Wenn du exakte Abmessungen festlegst, kann das Tool das Foto nicht kleiner machen, ein sehr niedriges Limit bei großen Abmessungen ist also eventuell nicht erreichbar. Erhöhe das Limit, wähle kleinere Abmessungen oder wähle „Größe beibehalten“.",
      },
      {
        question: "Welche Größe und welches Format braucht mein Formular?",
        answer:
          "Jedes Formular legt eigene Regeln fest. Lies in seinen Hinweisen nach, welche maximale Dateigröße, welche Breite und Höhe in Pixeln oder Millimetern und welches Format verlangt sind, und stell hier dieselben Werte ein. JPG wird fast überall angenommen.",
      },
      {
        question: "Verringert das Komprimieren die Qualität?",
        answer:
          "Etwas Qualität geht immer verloren, wenn ein Foto viel kleiner gemacht wird, aber das Tool behält so viel, wie das Limit zulässt. Bei Gesichtern sieht ein Limit von 30 KB oder mehr in Passfotogröße meist sauber aus.",
      },
      {
        question: "Wird mein Foto hochgeladen?",
        answer:
          "Nein. Das Foto wird von deinem Browser auf deinem Gerät komprimiert. Nichts wird an einen Server gesendet, du kannst es also bedenkenlos mit Ausweisfotos und Dokumenten nutzen.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC in JPG",
    shortName: "HEIC → JPG",
    tagline: "Wandle iPhone-HEIC-Fotos in JPG um, damit sie sich auf jedem Computer, jedem Handy und jeder Website öffnen. Die Umwandlung läuft auf deinem Gerät.",
    intro:
      "iPhones und viele neuere Handys speichern Fotos als HEIC, ein Format, das gute Qualität in kleineren Dateien bietet. Viele Windows-Computer, ältere Apps und Upload-Formulare können es aber nicht öffnen. HEIC in JPG wandelt das Foto in ein normales JPG um, das fast überall funktioniert. Das Foto wird in deinem Browser dekodiert und umgewandelt, es verlässt also nie dein Gerät, und das umgewandelte JPG enthält nicht die Standort-, Kamera- und Datumsangaben, die im Original gespeichert sind.",
    seoTitle: "HEIC in JPG umwandeln – kostenlos, ohne Upload",
    seoDescription:
      "HEIC in JPG umwandeln, kostenlos im Browser: iPhone-Fotos als JPG speichern, auf Windows, Mac, Android und iPhone. Privat, nichts wird hochgeladen.",
    keywords: [
      "heic in jpg umwandeln",
      "heic in jpg",
      "iphone foto in jpg umwandeln",
      "heic konverter",
      "heic in jpeg",
      "heic öffnen windows",
    ],
    howToSteps: [
      {
        title: "HEIC-Foto hinzufügen",
        description: "Zieh eine .heic- oder .heif-Datei von deinem iPhone oder Computer hierher, wähle sie aus oder füge sie ein.",
      },
      {
        title: "Auf die Vorschau warten",
        description: "Dein Browser dekodiert das Foto. Große Fotos können einige Sekunden dauern.",
      },
      {
        title: "JPG herunterladen",
        description: "Speichere das umgewandelte Foto. Es öffnet sich in jedem Bildbetrachter, jedem Browser und jedem Upload-Formular.",
      },
    ],
    features: [
      {
        title: "Funktioniert überall",
        description: "JPG öffnet sich auf Windows, Mac und Android, in jedem Browser und auf fast jeder Website.",
      },
      {
        title: "Private Umwandlung",
        description: "Das Foto wird auf deinem Gerät umgewandelt und nie hochgeladen.",
      },
      {
        title: "Keine Standortdaten",
        description: "GPS-Standort, Kameradaten und Datumsangaben des Originals werden nicht ins JPG übernommen.",
      },
      {
        title: "Weiter bearbeiten",
        description: "Schick das umgewandelte Foto direkt weiter, um es zuzuschneiden, in der Größe zu ändern oder zu komprimieren.",
      },
    ],
    faqs: [
      {
        question: "Was ist eine HEIC-Datei?",
        answer:
          "HEIC (High Efficiency Image Container) ist das Fotoformat, das iPhones seit iOS 11 standardmäßig verwenden. Es speichert Fotos bei ähnlicher Qualität in etwa der Hälfte des Platzes eines JPG, viele Computer und Websites können es aber noch nicht öffnen.",
      },
      {
        question: "Sieht das JPG genauso aus?",
        answer:
          "Ja, bei normaler Betrachtung. Das JPG wird in hoher Qualität gespeichert. JPG-Dateien sind meist größer als das HEIC-Original, weil die JPG-Komprimierung weniger effizient ist.",
      },
      {
        question: "Kann ich mehrere HEIC-Fotos auf einmal umwandeln?",
        answer:
          "Dieses Tool wandelt jeweils ein Foto um. Enthält eine einzelne HEIC-Datei mehrere Bilder, etwa eine Serienaufnahme, wird das erste Bild umgewandelt.",
      },
      {
        question: "Wie bringe ich mein iPhone dazu, stattdessen JPG-Fotos aufzunehmen?",
        answer:
          "Öffne auf dem iPhone „Einstellungen“, dann „Kamera“, dann „Formate“ und wähle „Maximale Kompatibilität“. Neue Fotos werden dann als JPG gespeichert. Bereits aufgenommene Fotos bleiben im HEIC-Format.",
      },
      {
        question: "Wird mein Foto hochgeladen?",
        answer: "Nein. Der HEIC-Decoder läuft in deinem Browser, das Foto bleibt also auf deinem Gerät.",
      },
    ],
  },
  "heic-to-png": {
    name: "HEIC in PNG",
    shortName: "HEIC → PNG",
    tagline: "Wandle iPhone-HEIC-Fotos in verlustfreies PNG um, für Bearbeitung und Design. Die Umwandlung läuft auf deinem Gerät.",
    intro:
      "HEIC ist das Fotoformat, das iPhones standardmäßig verwenden, und viele Designtools, ältere Apps und Websites können es nicht öffnen. HEIC in PNG wandelt das Foto in PNG um, ein verlustfreies Format, sodass beim erneuten Bearbeiten und Speichern keine weiteren Details verloren gehen. Damit ist es eine gute Wahl für Fotos, die du retuschieren, in ein Design einbauen oder freistellen willst. Die Umwandlung passiert in deinem Browser, das Foto verlässt also nie dein Gerät. Zum Teilen oder Hochladen liefert „HEIC in JPG“ deutlich kleinere Dateien.",
    seoTitle: "HEIC in PNG umwandeln – kostenlos, verlustfrei",
    seoDescription:
      "HEIC in PNG umwandeln, kostenlos im Browser: iPhone-Fotos als verlustfreies PNG für Bearbeitung und Design speichern. Privat, nichts wird hochgeladen.",
    keywords: [
      "heic in png umwandeln",
      "heic in png",
      "iphone foto in png umwandeln",
      "heic in png konverter",
      "heif in png",
    ],
    howToSteps: [
      {
        title: "HEIC-Foto hinzufügen",
        description: "Zieh eine .heic- oder .heif-Datei hierher, wähle sie aus oder füge sie ein.",
      },
      {
        title: "Auf die Vorschau warten",
        description: "Dein Browser dekodiert das Foto auf deinem Gerät.",
      },
      {
        title: "PNG herunterladen",
        description: "Speichere das verlustfreie PNG und öffne es in jedem Bildbearbeitungsprogramm oder Designtool.",
      },
    ],
    features: [
      {
        title: "Verlustfreie Ausgabe",
        description: "PNG behält jedes Pixel des dekodierten Fotos, wiederholtes Bearbeiten erzeugt also keine Kompressionsartefakte.",
      },
      {
        title: "Öffnet sich in jedem Editor",
        description: "PNG funktioniert in Photoshop, GIMP, Figma, Canva, Office und jedem Browser.",
      },
      {
        title: "Private Umwandlung",
        description: "Das Foto wird auf deinem Gerät umgewandelt und nie hochgeladen.",
      },
      {
        title: "Keine Standortdaten",
        description: "GPS-Standort und Kameradaten des Originals werden nicht ins PNG übernommen.",
      },
    ],
    faqs: [
      {
        question: "PNG oder JPG: Was soll ich wählen?",
        answer:
          "Wähle PNG, wenn du das Foto weiterbearbeiten willst oder exakte Pixel brauchst. Wähle JPG zum Teilen, für E-Mails und Upload-Formulare, denn PNG-Dateien von Fotos sind um ein Mehrfaches größer.",
      },
      {
        question: "Warum ist das PNG so viel größer als das HEIC?",
        answer:
          "HEIC nutzt eine sehr effiziente verlustbehaftete Komprimierung. PNG ist verlustfrei und speichert daher weit mehr Daten. Aus einem iPhone-Foto mit 2 MB kann ein PNG mit 10 MB oder mehr werden.",
      },
      {
        question: "Hat das PNG einen transparenten Hintergrund?",
        answer:
          "Nein. Fotos haben keine Transparenz, das PNG ist also vollständig deckend. Um den Hintergrund zu entfernen, öffne das Ergebnis in „Hintergrund entfernen“.",
      },
      {
        question: "Wird mein Foto hochgeladen?",
        answer: "Nein. Der HEIC-Decoder läuft in deinem Browser, das Foto bleibt also auf deinem Gerät.",
      },
    ],
  },
  "jpg-to-pdf": {
    name: "JPG in PDF",
    shortName: "JPG → PDF",
    tagline: "Mach aus einem oder mehreren Fotos ein einziges PDF, in der Reihenfolge deiner Wahl, mit A4- oder Letter-Seiten. Nichts wird hochgeladen.",
    intro:
      "JPG in PDF packt deine Fotos in eine PDF-Datei, ein Foto pro Seite. So verschickst du gescannte Seiten, Belege, Notizen oder Ausweisfotos schnell als ein einziges Dokument. Füge JPG-, PNG-, WebP- oder iPhone-HEIC-Bilder hinzu, bring sie in die richtige Reihenfolge und wähle Seitengröße, Ausrichtung und Ränder. JPG-Fotos werden ohne erneute Komprimierung ins PDF eingefügt und behalten so ihre Originalqualität. Das PDF wird von deinem Browser erstellt, deine Dokumente werden also nie auf einen Server hochgeladen.",
    seoTitle: "JPG in PDF umwandeln – mehrere Bilder, kostenlos",
    seoDescription:
      "JPG in PDF umwandeln, kostenlos: JPG-, PNG- und iPhone-Fotos zu einem PDF zusammenfügen, Seiten sortieren, A4 oder Letter. Ohne Upload, ohne Wasserzeichen.",
    keywords: [
      "jpg in pdf umwandeln",
      "bild in pdf umwandeln",
      "foto in pdf umwandeln",
      "png in pdf",
      "bilder zu pdf zusammenfügen",
      "jpg in pdf konverter",
    ],
    howToSteps: [
      {
        title: "Bilder hinzufügen",
        description: "Zieh ein oder mehrere JPG-, PNG-, WebP- oder HEIC-Bilder hierher oder wähle sie aus. Du kannst jederzeit weitere hinzufügen.",
      },
      {
        title: "In die richtige Reihenfolge bringen",
        description: "Ordne die Seiten mit den Schaltflächen nach oben und nach unten und entferne alle, die du nicht brauchst.",
      },
      {
        title: "Seitenlayout wählen",
        description: "Wähle A4, Letter oder eine Seite passend zu jedem Bild, dazu die Ausrichtung und den Rand.",
      },
      {
        title: "PDF erstellen",
        description: "Lade ein PDF herunter, in dem jedes Bild auf einer eigenen Seite steht.",
      },
    ],
    features: [
      {
        title: "Viele Bilder, ein PDF",
        description: "Füge so viele Fotos zu einem Dokument zusammen, wie dein Gerät verarbeiten kann.",
      },
      {
        title: "Originale JPG-Qualität",
        description: "JPG-Fotos werden unverändert eingebettet, ohne eine weitere Komprimierungsrunde.",
      },
      {
        title: "A4, Letter oder Bildgröße",
        description: "Standardpapierformate mit automatischer Ausrichtung oder Seiten in genau der Größe jedes Bildes.",
      },
      {
        title: "Privat und ohne Wasserzeichen",
        description: "Das PDF wird auf deinem Gerät erstellt, hat kein Wasserzeichen, und nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wie viele Bilder kann ich hinzufügen?",
        answer:
          "Es gibt keine feste Grenze. Dutzende Handyfotos funktionieren auf den meisten Geräten; bei sehr großen Mengen kann älteren Handys der Speicher ausgehen.",
      },
      {
        question: "Verlieren die Fotos an Qualität?",
        answer:
          "JPG-Fotos werden ohne erneute Komprimierung ins PDF eingefügt und behalten so ihre Originalqualität. PNG-Bilder bleiben verlustfrei. WebP- und HEIC-Bilder werden zuerst in hochwertiges JPG umgewandelt, weil PDF sie nicht direkt speichern kann.",
      },
      {
        question: "Warum ist mein PDF so groß?",
        answer:
          "Das PDF enthält deine Fotos in voller Auflösung. Um es kleiner zu machen, verkleinere die Fotos zuerst mit „Bild komprimieren“ oder „Bildgröße ändern“ und füge sie dann hier hinzu.",
      },
      {
        question: "Werden seitlich gedrehte Handyfotos richtig ausgerichtet?",
        answer:
          "Ja. Fotos werden so eingefügt, wie sie auf deinem Handy erscheinen, anhand der in der Datei gespeicherten Ausrichtung.",
      },
      {
        question: "Wird mein Dokument hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät erstellt, Belege, Ausweise und private Dokumente verlassen es also nie.",
      },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF in JPG",
    shortName: "PDF → JPG",
    tagline: "Speichere jede Seite eines PDFs als JPG- oder PNG-Bild, einzeln oder alle zusammen in einer ZIP-Datei. Nichts wird hochgeladen.",
    intro:
      "PDF in JPG macht aus den Seiten eines PDFs Bilder, die du posten, in einem Chat teilen, in eine Folie einfügen oder in ein Formular hochladen kannst, das nur Bilder annimmt. Wähle JPG für kleine Dateien oder PNG für scharfen Text und lege die Auflösung fest: 72 dpi für Bildschirme, 150 dpi für die meisten Zwecke oder 300 dpi zum Drucken. Lade eine einzelne Seite oder alle Seiten auf einmal in einer ZIP-Datei herunter. Das PDF wird von deinem Browser auf deinem Gerät geöffnet, private Dokumente werden also nie hochgeladen.",
    seoTitle: "PDF in JPG umwandeln – alle Seiten, kostenlos",
    seoDescription:
      "PDF in JPG umwandeln, kostenlos: PDF-Seiten als JPG oder PNG speichern, 72, 150 oder 300 dpi wählen, eine Seite oder alle als ZIP laden. Ohne Upload.",
    keywords: [
      "pdf in jpg umwandeln",
      "pdf in bild umwandeln",
      "pdf in jpg",
      "pdf in png",
      "pdf seite als bild speichern",
      "pdf als jpg speichern",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh eine PDF-Datei hierher oder wähle sie aus. Ihre Seiten erscheinen als Vorschau.",
      },
      {
        title: "Format und Auflösung wählen",
        description: "Wähle JPG oder PNG und 72, 150 oder 300 dpi.",
      },
      {
        title: "Herunterladen",
        description: "Speichere eine einzelne Seite oder lade alle Seiten zusammen in einer ZIP-Datei herunter.",
      },
    ],
    features: [
      {
        title: "Alle Seiten oder nur eine",
        description: "Lade die Seite herunter, die du brauchst, oder alle Seiten auf einmal als ZIP.",
      },
      {
        title: "Auflösung in Druckqualität",
        description: "Rendere mit bis zu 300 dpi für scharfen Text und zum Drucken.",
      },
      {
        title: "JPG oder PNG",
        description: "JPG für kleine Dateien, PNG für gestochen scharfen Text und Diagramme.",
      },
      {
        title: "Private Dokumente bleiben privat",
        description: "Das PDF wird auf deinem Gerät geöffnet und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Welche Auflösung soll ich wählen?",
        answer:
          "150 dpi passt für die meisten Zwecke, vom Teilen bis zu Präsentationsfolien. Wähle 300 dpi zum Drucken oder zum Hineinzoomen in kleinen Text und 72 dpi für die kleinsten Dateien. Höhere Auflösungen dauern länger und ergeben größere Dateien.",
      },
      {
        question: "JPG oder PNG?",
        answer:
          "JPG ergibt deutlich kleinere Dateien und eignet sich am besten für Seiten mit Fotos. PNG hält Text und Strichzeichnungen perfekt scharf, die Dateien sind aber größer.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF umwandeln?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine ungeschützte Kopie und versuch es mit dieser Kopie.",
      },
      {
        question: "Lässt sich der Text noch markieren?",
        answer:
          "Nein. Jede Seite wird zu einem Bild, der Text lässt sich also nicht markieren oder durchsuchen. Behalte das Original-PDF, wenn du den Text brauchst.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser gelesen und gerendert, Verträge, Kontoauszüge und andere private Dokumente verlassen also nie dein Gerät.",
      },
    ],
  },
  "merge-images": {
    name: "Bilder zusammenfügen",
    shortName: "Zusammenfügen",
    tagline: "Füge Fotos nebeneinander, untereinander oder in einem Raster zusammen, mit Abstand und Hintergrundfarbe, und speichere ein einziges Bild.",
    intro:
      "Bilder zusammenfügen kombiniert mehrere Bilder zu einem: nebeneinander für Vorher-nachher-Vergleiche, untereinander für lange Screenshots und Schritt-für-Schritt-Anleitungen oder in einem Raster für eine einfache Collage. Bring die Bilder in die richtige Reihenfolge, wähle den Abstand zwischen ihnen und die Hintergrundfarbe und lass das Tool ihre Höhen oder Breiten angleichen, damit die Kanten bündig sind. Speichere das Ergebnis als JPG, PNG oder WebP. Alles passiert in deinem Browser, deine Fotos werden also nie hochgeladen.",
    seoTitle: "Bilder zusammenfügen online – kostenlos, ohne Upload",
    seoDescription:
      "Bilder zusammenfügen, kostenlos im Browser: Fotos nebeneinander, untereinander oder im Raster kombinieren, mit Abstand und Hintergrundfarbe. Ohne Upload.",
    keywords: [
      "bilder zusammenfügen",
      "fotos zusammenfügen",
      "bilder kombinieren",
      "zwei bilder nebeneinander",
      "collage erstellen",
      "bilder untereinander zusammenfügen",
    ],
    howToSteps: [
      {
        title: "Bilder hinzufügen",
        description: "Zieh zwei oder mehr JPG-, PNG-, WebP- oder HEIC-Bilder hierher oder wähle sie aus.",
      },
      {
        title: "Bilder anordnen",
        description: "Lege mit den Schaltflächen nach oben und nach unten die Reihenfolge fest und entferne alle, die du nicht brauchst.",
      },
      {
        title: "Layout wählen",
        description: "Nebeneinander, untereinander oder ein Raster mit der gewünschten Spaltenzahl, dazu Abstand und Hintergrund.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das zusammengefügte Bild als JPG, PNG oder WebP.",
      },
    ],
    features: [
      {
        title: "Drei Layouts",
        description: "Horizontal für Vergleiche, vertikal für Screenshots und Anleitungen und ein Raster für Collagen.",
      },
      {
        title: "Bündige Kanten",
        description: "Höhen oder Breiten automatisch angleichen oder jedes Bild in seiner Originalgröße lassen.",
      },
      {
        title: "Abstand und Hintergrund",
        description: "Leg den Abstand zwischen den Bildern fest und füll ihn mit einer beliebigen Farbe, oder lass ihn bei PNG und WebP transparent.",
      },
      {
        title: "Privat",
        description: "Die Bilder werden auf deinem Gerät zusammengefügt und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wie viele Bilder kann ich zusammenfügen?",
        answer:
          "So viele du willst, im Rahmen des Speichers deines Geräts. Sehr große Ergebnisse werden automatisch verkleinert, damit sie innerhalb der Größe bleiben, die Browser speichern können.",
      },
      {
        question: "Was macht „Größen angleichen“?",
        answer:
          "In einer Reihe wird jedes Bild auf dieselbe Höhe skaliert, in einer Spalte auf dieselbe Breite, und in einem Raster füllt jedes Bild eine gleich große Zelle. Schalte es aus, um jedes Bild in seiner Originalgröße zu lassen.",
      },
      {
        question: "Kann der Hintergrund transparent sein?",
        answer:
          "Ja. Wähle „Transparent“ und speichere als PNG oder WebP. JPG kann keine Transparenz speichern und verwendet stattdessen die Hintergrundfarbe.",
      },
      {
        question: "Wie erstelle ich ein Vorher-nachher-Bild?",
        answer:
          "Füge die beiden Fotos hinzu, wähle „Nebeneinander“, lass „Größen angleichen“ eingeschaltet und füge einen kleinen Abstand hinzu. Die beiden Bilder haben dann dieselbe Höhe.",
      },
      {
        question: "Werden meine Bilder hochgeladen?",
        answer: "Nein. Die Bilder werden von deinem Browser auf deinem Gerät kombiniert.",
      },
    ],
  },
  "merge-pdf": {
    name: "PDF zusammenfügen",
    shortName: "PDF zusammenfügen",
    tagline: "Füge mehrere PDF-Dateien in der gewünschten Reihenfolge zu einer zusammen. Die Dateien werden auf deinem Gerät zusammengefügt.",
    intro:
      "PDF zusammenfügen verbindet zwei oder mehr PDF-Dateien zu einem einzigen Dokument. Füge die Dateien hinzu, bring sie mit den Schaltflächen zum Verschieben in die richtige Reihenfolge, prüf jeweils die erste Seite und lade ein PDF mit allen Seiten nacheinander herunter. So verschickst du einen Bericht samt Anhängen, mehrere gescannte Seiten oder eine Reihe von Rechnungen schnell als eine Datei. Das Zusammenfügen passiert in deinem Browser, deine Dokumente werden also nie auf einen Server hochgeladen.",
    seoTitle: "PDF zusammenfügen online – kostenlos, ohne Upload",
    seoDescription:
      "PDF zusammenfügen, kostenlos: mehrere PDF-Dateien im Browser in beliebiger Reihenfolge zu einem PDF verbinden. Privat, ohne Upload, ohne Wasserzeichen.",
    keywords: [
      "pdf zusammenfügen",
      "pdf dateien zusammenfügen",
      "pdf zusammenführen",
      "pdf zusammenfügen kostenlos",
      "mehrere pdf zu einer datei",
      "pdf verbinden",
    ],
    howToSteps: [
      {
        title: "PDFs hinzufügen",
        description:
          "Zieh zwei oder mehr PDF-Dateien hierher oder wähle sie aus. Du kannst jederzeit weitere hinzufügen.",
      },
      {
        title: "Reihenfolge festlegen",
        description:
          "Ordne die Dateien mit den Schaltflächen nach oben und nach unten an und entferne alle, die du nicht brauchst.",
      },
      {
        title: "Herunterladen",
        description: "Speichere ein PDF, das alle Seiten enthält, Datei für Datei.",
      },
    ],
    features: [
      {
        title: "Beliebig viele Dateien",
        description: "Füge so viele PDFs zusammen, wie dein Gerät schafft; die Gesamtzahl der Seiten wird angezeigt.",
      },
      {
        title: "Deine Reihenfolge",
        description:
          "Ordne die Dateien mit Schaltflächen an, die auch mit der Tastatur und mit Screenreadern funktionieren.",
      },
      {
        title: "Seiten unverändert",
        description:
          "Die Seiten werden ohne erneute Komprimierung übernommen, Text bleibt also scharf und durchsuchbar.",
      },
      {
        title: "Privat und kostenlos",
        description:
          "Die Dateien werden auf deinem Gerät zusammengefügt, ohne Upload, ohne Anmeldung und ohne Wasserzeichen.",
      },
    ],
    faqs: [
      {
        question: "Wie viele Dateien kann ich höchstens zusammenfügen?",
        answer:
          "Es gibt keine feste Grenze. Dutzende normale PDFs funktionieren auf den meisten Geräten; sehr große Dateien können auf älteren Smartphones langsam sein.",
      },
      {
        question: "Funktionieren Links und Lesezeichen noch?",
        answer:
          "Links auf den Seiten bleiben erhalten. Die Lesezeichenliste (die Gliederung in der Seitenleiste eines PDF-Readers) wird nicht in die zusammengefügte Datei übernommen.",
      },
      {
        question: "Verschlechtert das Zusammenfügen die Qualität?",
        answer:
          "Nein. Die Seiten werden unverändert übernommen, Text, Bilder und Vektorgrafiken sehen also genau gleich aus.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "split-pdf": {
    name: "PDF teilen",
    shortName: "PDF teilen",
    tagline: "Teile ein PDF nach Seitenbereichen, alle paar Seiten oder in einzelne Seiten. Läuft auf deinem Gerät.",
    intro:
      "PDF teilen zerlegt ein PDF in mehrere kleinere. Gib Seitenbereiche wie 1-3, 5, 8- ein, um für jeden Bereich eine Datei zu erhalten, teile alle paar Seiten, um einen langen Scan in gleich große Teile zu schneiden, oder speichere jede Seite als eigenes PDF. Das Tool listet die Dateien auf, die du erhältst, bevor du sie herunterlädst, und mehrere Dateien kommen gemeinsam in einer ZIP-Datei. Das Teilen passiert in deinem Browser, das Dokument verlässt dein Gerät also nie.",
    seoTitle: "PDF teilen – nach Seiten oder Bereichen, kostenlos",
    seoDescription:
      "PDF teilen, kostenlos: ein PDF im Browser nach Seitenbereichen, alle N Seiten oder in einzelne Seiten aufteilen. Privat, und nichts wird hochgeladen.",
    keywords: [
      "pdf teilen",
      "pdf aufteilen",
      "pdf seiten trennen",
      "pdf teilen kostenlos",
      "pdf in einzelne seiten aufteilen",
      "pdf splitten",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh ein PDF hierher oder wähle es aus. Seine Seiten erscheinen als Vorschau.",
      },
      {
        title: "Aufteilung wählen",
        description: "Gib Seitenbereiche ein, wähle eine Seitenzahl pro Datei oder teile nach jeder Seite.",
      },
      {
        title: "Liste prüfen",
        description: "Das Bedienfeld zeigt jede Datei, die du erhältst, mit ihren Seiten.",
      },
      {
        title: "Herunterladen",
        description: "Speichere ein PDF oder eine ZIP-Datei, wenn es mehrere Dateien sind.",
      },
    ],
    features: [
      {
        title: "Drei Arten zu teilen",
        description: "Eigene Bereiche, gleich große Seitengruppen oder eine Seite pro Datei.",
      },
      {
        title: "Erst sehen, dann speichern",
        description: "Jede entstehende Datei wird vorher mit ihren Seitenzahlen aufgelistet.",
      },
      {
        title: "Ein ZIP-Download",
        description: "Mehrere Dateien kommen zusammen an, benannt nach ihren Seiten.",
      },
      {
        title: "Privat",
        description: "Das PDF wird auf deinem Gerät geteilt und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wie gebe ich Seitenbereiche ein?",
        answer:
          "Trenne Bereiche mit Kommas. 1-3 bedeutet Seite 1 bis 3, 5 nur Seite 5 und 8- Seite 8 bis zum Ende. Jeder Bereich wird ein eigenes PDF.",
      },
      {
        question: "Kann ich ein PDF mit nur einigen Seiten erhalten?",
        answer:
          "Ja. Gib einen einzelnen Bereich ein, etwa 2-4, um nur diese Seiten herunterzuladen. Mit PDF-Seiten extrahieren kannst du Seiten auch per Klick auswählen.",
      },
      {
        question: "Verändert das Teilen die Seiten?",
        answer: "Nein. Die Seiten werden unverändert übernommen, Text bleibt also scharf und durchsuchbar.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "extract-pdf-pages": {
    name: "PDF-Seiten extrahieren",
    shortName: "Seiten extrahieren",
    tagline: "Wähle die Seiten aus, die du aus einem PDF brauchst, und speichere sie als neues PDF. Läuft auf deinem Gerät.",
    intro:
      "PDF-Seiten extrahieren lässt dich Seiten eines PDFs anhand ihrer Vorschau auswählen und nur diese Seiten als neues Dokument speichern. Das ist praktisch, um ein Kapitel eines langen Berichts, die unterschriebene Seite eines Vertrags oder einen einzelnen Auszug aus einem Stapel zu verschicken. Hake die gewünschten Seiten an oder nutze „Alle auswählen“ und entferne die wenigen, die du nicht brauchst, und lade dann herunter. Die Originaldatei wird nicht verändert, und alles passiert in deinem Browser.",
    seoTitle: "PDF-Seiten extrahieren – kostenlos, ohne Upload",
    seoDescription:
      "PDF Seiten extrahieren, kostenlos: Seiten eines PDFs per Vorschau auswählen und im Browser als neues PDF speichern. Privat, und nichts wird hochgeladen.",
    keywords: [
      "pdf seiten extrahieren",
      "seiten aus pdf extrahieren",
      "pdf seiten speichern",
      "einzelne seiten aus pdf speichern",
      "pdf seiten herauslösen",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh ein PDF hierher oder wähle es aus, um alle Seiten zu sehen.",
      },
      {
        title: "Gewünschte Seiten anhaken",
        description:
          "Nutze das Kästchen unter jeder Seite oder „Alle auswählen“ und entferne die Haken bei denen, die du nicht brauchst.",
      },
      {
        title: "Herunterladen",
        description: "Speichere ein neues PDF nur mit diesen Seiten, in ihrer ursprünglichen Reihenfolge.",
      },
    ],
    features: [
      {
        title: "Auswahl per Vorschau",
        description: "Sieh dir jede Seite an, bevor du wählst.",
      },
      {
        title: "Tastaturfreundlich",
        description: "Jede Seite hat ein beschriftetes Kontrollkästchen, eine Maus ist also nicht nötig.",
      },
      {
        title: "Seiten unverändert",
        description: "Die gewählten Seiten werden unverändert übernommen, mit scharfem, durchsuchbarem Text.",
      },
      {
        title: "Privat",
        description: "Die Seiten werden auf deinem Gerät extrahiert und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Verändert das mein Original-PDF?",
        answer: "Nein. Es wird ein neues PDF mit den gewählten Seiten erstellt; die Originaldatei bleibt, wie sie war.",
      },
      {
        question: "Kann ich die Reihenfolge der Seiten ändern?",
        answer:
          "Extrahierte Seiten behalten ihre ursprüngliche Reihenfolge. Zum Umsortieren, Drehen oder Löschen von Seiten nutze PDF organisieren.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "organize-pdf": {
    name: "PDF organisieren",
    shortName: "PDF organisieren",
    tagline: "Sortiere, drehe und lösche PDF-Seiten und speichere dann das neue PDF. Läuft auf deinem Gerät.",
    intro:
      "PDF organisieren zeigt alle Seiten eines PDFs, damit du es in Form bringen kannst: Seiten nach vorne oder hinten verschieben, quer liegende Scans aufrichten und leere oder unerwünschte Seiten löschen. Jede Seite hat eigene Schaltflächen, die auch mit der Tastatur funktionieren, und mit der Maus kannst du Seiten an ihren Platz ziehen. „Alle Änderungen zurücksetzen“ stellt den Ausgangszustand wieder her. Wenn alles passt, lade das neue PDF herunter. All das passiert in deinem Browser, das Dokument wird also nie hochgeladen.",
    seoTitle: "PDF-Seiten sortieren, drehen und löschen",
    seoDescription:
      "PDF Seiten sortieren, drehen und löschen, kostenlos: Seiten im Browser mit Vorschau neu anordnen und das neue PDF herunterladen. Privat, ohne Upload.",
    keywords: [
      "pdf seiten sortieren",
      "pdf seiten neu anordnen",
      "pdf seiten verschieben",
      "pdf seiten löschen",
      "seiten aus pdf entfernen",
      "pdf organisieren",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh ein PDF hierher oder wähle es aus, um alle Seiten zu sehen.",
      },
      {
        title: "Seiten anordnen",
        description:
          "Verschiebe, drehe oder lösche jede Seite mit den Schaltflächen darunter, oder zieh Seiten an ihren Platz.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das neu geordnete PDF. „Alle Änderungen zurücksetzen“ beginnt wieder beim Original.",
      },
    ],
    features: [
      {
        title: "Verschieben, drehen, löschen",
        description: "Alle Seitenaktionen in einer Ansicht, mit Vorschauen, die sich laufend aktualisieren.",
      },
      {
        title: "Ziehen oder Schaltflächen",
        description:
          "Zieh mit der Maus oder nutze die Schaltflächen, die auch mit der Tastatur und mit Screenreadern funktionieren.",
      },
      {
        title: "Verlustfrei",
        description: "Die Seiten werden umsortiert, nicht neu gerendert, Text bleibt also scharf und durchsuchbar.",
      },
      {
        title: "Privat",
        description: "Das PDF wird auf deinem Gerät neu geordnet und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Verschlechtert das Drehen einer Seite die Qualität?",
        answer:
          "Nein. Die Drehung wird als Seiteneinstellung gespeichert, es wird also nichts neu gezeichnet oder komprimiert.",
      },
      {
        question: "Kann ich eine Änderung rückgängig machen?",
        answer:
          "Ja. „Alle Änderungen zurücksetzen“ bringt jede Seite an ihre ursprüngliche Position und Drehung zurück. Deine Originaldatei wird nie verändert.",
      },
      {
        question: "Kann ich Seiten aus einem anderen PDF hinzufügen?",
        answer:
          "Füge die Dateien zuerst mit PDF zusammenfügen zusammen und organisiere dann die zusammengefügte Datei hier.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "rotate-pdf": {
    name: "PDF drehen",
    shortName: "PDF drehen",
    tagline: "Drehe alle Seiten oder nur die ausgewählten um 90 oder 180 Grad. Läuft auf deinem Gerät.",
    intro:
      "PDF drehen korrigiert Seiten, die sich quer oder auf dem Kopf stehend öffnen, ein häufiges Problem bei gescannten Dokumenten und als PDF gespeicherten Fotos. Wähle 90 Grad nach rechts, 180 Grad oder 90 Grad nach links und wende das auf alle Seiten oder nur auf die angehakten Seiten an. Die Vorschauen zeigen das Ergebnis vor dem Herunterladen. Die Drehung wird als Seiteneinstellung gespeichert, Text und Bilder behalten also ihre volle Qualität, und nichts verlässt deinen Browser.",
    seoTitle: "PDF drehen online – dauerhaft speichern, kostenlos",
    seoDescription:
      "PDF drehen, kostenlos: alle oder ausgewählte Seiten eines PDFs im Browser um 90 oder 180 Grad drehen und dauerhaft speichern. Privat, ohne Upload.",
    keywords: [
      "pdf drehen",
      "pdf seiten drehen",
      "pdf drehen und speichern",
      "pdf dauerhaft drehen",
      "pdf um 90 grad drehen",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh ein PDF hierher oder wähle es aus, um seine Seiten zu sehen.",
      },
      {
        title: "Drehung wählen",
        description: "Wähle 90° rechts, 180° oder 90° links, für alle Seiten oder die angehakten Seiten.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das PDF mit dauerhaft gedrehten Seiten.",
      },
    ],
    features: [
      {
        title: "Alle oder ausgewählte Seiten",
        description: "Korrigiere einen einzelnen quer liegenden Scan, ohne den Rest anzurühren.",
      },
      {
        title: "Live-Vorschau",
        description: "Die Seitenvorschauen drehen sich bei deiner Auswahl mit, bevor etwas gespeichert wird.",
      },
      {
        title: "Kein Qualitätsverlust",
        description: "Die Drehung ist eine Seiteneinstellung, es wird also nichts neu gezeichnet.",
      },
      {
        title: "Privat",
        description: "Das PDF wird auf deinem Gerät gedreht und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wird die Drehung dauerhaft gespeichert?",
        answer: "Ja. Das heruntergeladene PDF öffnet sich in jedem PDF-Reader mit gedrehten Seiten.",
      },
      {
        question: "Kann ich Seiten unterschiedlich weit drehen?",
        answer: "Nutze PDF organisieren, dort hat jede Seite eine eigene Schaltfläche zum Drehen.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "add-page-numbers-pdf": {
    name: "Seitenzahlen in PDF einfügen",
    shortName: "Seitenzahlen",
    tagline: "Nummeriere die Seiten eines PDFs mit Position, Format und Startnummer deiner Wahl. Läuft auf deinem Gerät.",
    intro:
      "Seitenzahlen einfügen setzt auf jede Seite eines PDFs eine Nummer, wie sie Berichte, Abschlussarbeiten und ausgedruckte Handouts oft brauchen. Wähle eine von sechs Positionen oben oder unten, ein Format (1, 1 / N oder – 1 –), die Startnummer, die Textgröße und den Abstand vom Rand. Die erste Seite, etwa ein Deckblatt, kannst du auch ohne Nummer lassen. Eine Vorschau zeigt, wie die Nummer aussehen wird. Die Nummern werden in deinem Browser eingefügt, das Dokument wird also nie hochgeladen.",
    seoTitle: "Seitenzahlen in PDF einfügen – kostenlos, ohne Upload",
    seoDescription:
      "PDF Seitenzahlen einfügen, kostenlos: Position, Format und Startnummer im Browser wählen und das Deckblatt auslassen. Privat, und nichts wird hochgeladen.",
    keywords: [
      "pdf seitenzahlen einfügen",
      "seitenzahlen in pdf einfügen",
      "pdf nummerieren",
      "pdf seiten nummerieren",
      "pdf paginieren",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh das PDF, das nummeriert werden soll, hierher oder wähle es aus.",
      },
      {
        title: "Stil wählen",
        description: "Wähle Position, Format, Startnummer, Größe und Abstand vom Rand.",
      },
      {
        title: "Deckblatt bei Bedarf auslassen",
        description: "Hake die Option an, um die erste Seite ohne Nummer zu lassen.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das nummerierte PDF.",
      },
    ],
    features: [
      {
        title: "Sechs Positionen",
        description: "Oben oder unten, jeweils links, mittig oder rechts.",
      },
      {
        title: "Drei Formate",
        description: "Einfache Zahlen, im Stil „1 / 12“ oder „– 1 –“.",
      },
      {
        title: "Beliebige Startnummer",
        description: "Setze die Nummerierung eines anderen Dokuments fort und lass ein Deckblatt aus.",
      },
      {
        title: "Privat",
        description: "Die Nummern werden auf deinem Gerät eingefügt; nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Kann ich mit einer anderen Zahl als 1 beginnen?",
        answer: "Ja. Stell „Beginnen bei“ auf eine beliebige Zahl, etwa um an ein vorheriges Kapitel anzuschließen.",
      },
      {
        question: "Verdecken die Nummern meinen Inhalt?",
        answer:
          "Sie werden in den Seitenrand gesetzt. Wenn deine Seiten sehr schmale Ränder haben, wähle einen kleineren Abstand vom Rand oder eine kleinere Textgröße.",
      },
      {
        question: "Warum stehen die Nummern auf manchen Seiten quer?",
        answer:
          "Manche PDFs speichern Seiten gedreht. Die Nummer folgt der gespeicherten Ausrichtung der Seite und kann auf diesen Seiten daher gedreht erscheinen. Korrigiere die Drehung zuerst mit PDF drehen oder PDF organisieren.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "watermark-pdf": {
    name: "Wasserzeichen in PDF einfügen",
    shortName: "PDF-Wasserzeichen",
    tagline: "Setze Text oder ein Logo als Stempel auf PDF-Seiten und zieh ihn an die richtige Stelle. Läuft auf deinem Gerät.",
    intro:
      "Wasserzeichen in PDF einfügen setzt einen Stempel wie VERTRAULICH, ENTWURF, deinen Namen oder dein Logo auf die Seiten eines PDFs. Gib den Text in einer beliebigen Sprache ein oder wähle ein Logo-Bild, stell dann Größe, Deckkraft und Winkel ein und zieh das Wasserzeichen in der Seitenvorschau an die gewünschte Stelle, oder nutze die Positionsregler. Wende es auf alle Seiten oder auf einen Seitenbereich an. Das Wasserzeichen wird in deinem Browser eingefügt, das Dokument wird also nie hochgeladen.",
    seoTitle: "Wasserzeichen in PDF einfügen – Text oder Logo",
    seoDescription:
      "PDF Wasserzeichen einfügen, kostenlos: Text oder Logo im Browser auf PDF-Seiten setzen, Größe, Deckkraft und Winkel wählen, an die Stelle ziehen. Ohne Upload.",
    keywords: [
      "pdf wasserzeichen einfügen",
      "wasserzeichen in pdf einfügen",
      "pdf wasserzeichen",
      "pdf stempel einfügen",
      "logo in pdf einfügen",
      "pdf vertraulich stempel",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh das PDF, das gestempelt werden soll, hierher oder wähle es aus.",
      },
      {
        title: "Wasserzeichen erstellen",
        description: "Gib den Text ein und wähle seine Farbe, oder wähle ein Logo-Bild.",
      },
      {
        title: "Platzieren",
        description:
          "Stell Größe, Deckkraft und Winkel ein und zieh es dann in der Vorschau an seinen Platz, oder nutze die Regler.",
      },
      {
        title: "Herunterladen",
        description: "Wähle alle Seiten oder einen Bereich und speichere das PDF mit Wasserzeichen.",
      },
    ],
    features: [
      {
        title: "Text in jeder Sprache",
        description: "Der Text wird als Bild gezeichnet, daher erscheinen alle Schriften und Akzente korrekt.",
      },
      {
        title: "Logo-Wasserzeichen",
        description: "Verwende ein Logo als PNG, JPG, WebP oder SVG.",
      },
      {
        title: "Per Ziehen platzieren",
        description:
          "Verschiebe das Wasserzeichen in der Seitenvorschau oder nutze Regler, die auch mit der Tastatur funktionieren.",
      },
      {
        title: "Privat",
        description: "Das Wasserzeichen wird auf deinem Gerät eingefügt; nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Kann das Wasserzeichen später entfernt werden?",
        answer:
          "Es wird als Bild über der Seite eingefügt. Wer einen PDF-Editor hat, könnte es trotzdem entfernen; ein Wasserzeichen erschwert das Kopieren also eher, als dass es das Kopieren verhindert.",
      },
      {
        question: "Kann ich nur einige Seiten mit einem Wasserzeichen versehen?",
        answer: "Ja. Wähle „Seiten“ und gib einen Bereich wie 1-3, 5 ein.",
      },
      {
        question: "Verdeckt das Wasserzeichen den Text?",
        answer:
          "Verringere die Deckkraft, damit die Seite lesbar bleibt. 15–30 % sind für diagonale Wasserzeichen üblich.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "sign-pdf": {
    name: "PDF unterschreiben",
    shortName: "PDF unterschreiben",
    tagline: "Zeichne oder tippe deine Unterschrift oder lade sie als Bild hoch und platziere sie auf einer beliebigen Seite eines PDFs. Läuft auf deinem Gerät.",
    intro:
      "PDF unterschreiben setzt deine handschriftliche Unterschrift auf ein Dokument, ohne dass du es ausdrucken und einscannen musst. Zeichne die Unterschrift mit Maus, Finger oder Stift, tippe deinen Namen oder nutze ein Foto deiner Unterschrift, dessen weißer Hintergrund transparent gemacht werden kann. Wähle dann die Seite, stell die Größe ein und zieh die Unterschrift an ihren Platz, oder nutze die Positionsregler. Die Unterschrift wird in deinem Browser eingefügt, das Dokument und deine Unterschrift werden also nie hochgeladen.",
    seoTitle: "PDF unterschreiben online – kostenlos, ohne Upload",
    seoDescription:
      "PDF unterschreiben, kostenlos: Unterschrift im Browser zeichnen, tippen oder als Bild einfügen und auf jeder Seite platzieren. Privat, nichts wird hochgeladen.",
    keywords: [
      "pdf unterschreiben",
      "pdf unterschreiben kostenlos",
      "unterschrift in pdf einfügen",
      "pdf online unterschreiben",
      "pdf digital unterschreiben",
      "pdf elektronisch unterschreiben",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh das Dokument, das du unterschreiben willst, hierher oder wähle es aus.",
      },
      {
        title: "Unterschrift erstellen",
        description: "Zeichne sie, tippe deinen Namen oder wähle ein Foto deiner Unterschrift.",
      },
      {
        title: "Platzieren",
        description:
          "Wähle die Seite, stell die Größe ein und zieh die Unterschrift an die richtige Stelle, oder nutze die Regler.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das unterschriebene PDF.",
      },
    ],
    features: [
      {
        title: "Drei Arten zu unterschreiben",
        description: "Zeichnen, tippen oder hochladen, in blauer oder schwarzer Tinte.",
      },
      {
        title: "Saubere Unterschriften aus Fotos",
        description: "Der Papierhintergrund eines Unterschriftsfotos kann transparent gemacht werden.",
      },
      {
        title: "Genaue Platzierung",
        description: "Zieh in der Vorschau oder nutze Regler, die auch mit der Tastatur funktionieren.",
      },
      {
        title: "Privat",
        description: "Dein Dokument und deine Unterschrift bleiben auf deinem Gerät.",
      },
    ],
    faqs: [
      {
        question: "Ist das eine rechtsverbindliche digitale Signatur?",
        answer:
          "Es wird ein Bild deiner Unterschrift eingefügt, wie beim Unterschreiben auf Papier. Es ist keine zertifizierte digitale Signatur mit Zertifikat. Viele alltägliche Formulare akzeptieren das, aber Verträge, die eine zertifizierte elektronische Signatur verlangen, brauchen einen eigenen Signaturdienst.",
      },
      {
        question: "Kann ich auf mehr als einer Seite unterschreiben?",
        answer:
          "Unterschreibe eine Seite und lade das PDF herunter, öffne dann das unterschriebene PDF erneut und platziere die Unterschrift auf der nächsten Seite.",
      },
      {
        question: "Wird meine Unterschrift irgendwo gespeichert?",
        answer:
          "Nein. Sie existiert nur in deinem Browser, solange die Seite geöffnet ist, und in dem PDF, das du herunterlädst.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "fill-pdf-form": {
    name: "PDF-Formular ausfüllen",
    shortName: "Formular ausfüllen",
    tagline: "Füll die Felder eines PDF-Formulars aus und speichere es, auf Wunsch fixiert. Läuft auf deinem Gerät.",
    intro:
      "PDF-Formular ausfüllen findet die ausfüllbaren Felder in einem PDF-Formular, etwa Textfelder, Kontrollkästchen und Dropdown-Listen, und zeigt jedes mit seinem Namen an, damit du sie schnell ausfüllen kannst. Lade das ausgefüllte PDF herunter oder fixiere es, damit die Antworten Teil der Seite werden und sich nicht mehr ändern lassen. Das ist praktisch für Anträge, Steuerformulare und Anmeldeunterlagen. Das Formular wird in deinem Browser ausgefüllt, deine persönlichen Daten werden also nie hochgeladen.",
    seoTitle: "PDF-Formular online ausfüllen – kostenlos, privat",
    seoDescription:
      "PDF ausfüllen, kostenlos: ausfüllbare PDF-Formulare im Browser bearbeiten, mit Textfeldern, Kontrollkästchen und Listen. Antworten fixieren. Ohne Upload.",
    keywords: [
      "pdf ausfüllen",
      "pdf formular ausfüllen",
      "pdf online ausfüllen",
      "ausfüllbares pdf",
      "pdf formular ausfüllen kostenlos",
    ],
    howToSteps: [
      {
        title: "PDF-Formular hinzufügen",
        description: "Zieh ein PDF mit ausfüllbaren Feldern hierher oder wähle es aus.",
      },
      {
        title: "Felder ausfüllen",
        description: "Tippe in Textfelder, hake Kontrollkästchen an und wähle aus Listen.",
      },
      {
        title: "Bei Bedarf fixieren",
        description: "Hake „Formular fixieren“ an, damit die Antworten Teil der Seite werden.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das ausgefüllte Formular.",
      },
    ],
    features: [
      {
        title: "Alle gängigen Felder",
        description: "Textfelder, mehrzeiliger Text, Kontrollkästchen, Optionsfelder und Dropdown-Listen.",
      },
      {
        title: "Option zum Fixieren",
        description: "Fixiere die Antworten, damit das Formular danach nicht mehr bearbeitet werden kann.",
      },
      {
        title: "Barrierefreie Felder",
        description:
          "Jedes Feld ist ein normales beschriftetes Eingabefeld, das mit der Tastatur und mit Screenreadern funktioniert.",
      },
      {
        title: "Privat",
        description: "Deine Antworten bleiben auf deinem Gerät; nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Warum heißt es, mein PDF habe keine ausfüllbaren Felder?",
        answer:
          "Manche Formulare sind nur gedruckte Seiten ohne echte Formularfelder, und manche nutzen ein älteres Format (XFA), das dieses Tool nicht lesen kann. Bei Formularen ohne Felder füge mit PDF unterschreiben eine Unterschrift hinzu oder drucke das Formular aus und füll es von Hand aus.",
      },
      {
        question: "Was bewirkt „Formular fixieren“?",
        answer:
          "Es verwandelt die Antworten in normalen Seiteninhalt. Das Formular sieht gleich aus, aber niemand kann die Antworten oder die Felder ändern.",
      },
      {
        question: "Werden Unterschriftsfelder unterstützt?",
        answer:
          "Unterschrifts- und Schaltflächenfelder werden übersprungen. Nutze PDF unterschreiben, um deine Unterschrift auf der Seite zu platzieren.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "remove-pdf-metadata": {
    name: "PDF-Metadaten entfernen",
    shortName: "PDF-Metadaten",
    tagline: "Sieh dir Autor, Titel, Software und Datumsangaben an, die in einem PDF versteckt sind, und entferne sie. Läuft auf deinem Gerät.",
    intro:
      "PDF-Dateien enthalten oft versteckte Angaben: den Namen des Autors, den Dokumenttitel, die Software, mit der sie erstellt wurden, und wann sie erstellt und geändert wurden. PDF-Metadaten entfernen zeigt, was in deiner Datei gespeichert ist, und lädt eine Kopie ohne diese Angaben herunter. Das ist nützlich, bevor du ein Dokument öffentlich teilst oder einen Lebenslauf verschickst. Die Seiten selbst werden nicht verändert. Alles passiert in deinem Browser, das Dokument verlässt dein Gerät also nie.",
    seoTitle: "PDF-Metadaten entfernen – ansehen und löschen",
    seoDescription:
      "PDF Metadaten entfernen, kostenlos: Autor, Titel, Software und Datumsangaben eines PDFs im Browser ansehen und löschen. Privat, nichts wird hochgeladen.",
    keywords: [
      "pdf metadaten entfernen",
      "pdf metadaten löschen",
      "pdf autor entfernen",
      "pdf metadaten anzeigen",
      "pdf eigenschaften löschen",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh ein PDF hierher oder wähle es aus, um die darin gespeicherten Angaben zu sehen.",
      },
      {
        title: "Gefundenes prüfen",
        description: "Die Liste zeigt Titel, Autor, Software, Datumsangaben und XMP-Metadaten.",
      },
      {
        title: "Bereinigte Kopie herunterladen",
        description: "Speichere eine Kopie, aus der diese Angaben entfernt wurden.",
      },
    ],
    features: [
      {
        title: "Erst sehen, dann entfernen",
        description: "Jede gespeicherte Angabe wird mit ihrem Wert aufgelistet.",
      },
      {
        title: "Dokumentinfo und XMP",
        description: "Beide Stellen, an denen PDFs Metadaten speichern, werden geleert.",
      },
      {
        title: "Seiten unangetastet",
        description: "Text, Bilder und Layout bleiben genau gleich.",
      },
      {
        title: "Privat",
        description: "Das PDF wird auf deinem Gerät bereinigt und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Was genau wird entfernt?",
        answer:
          "Die Dokumentinformationen (Titel, Autor, Thema, Stichwörter, Erstellungssoftware, Produzent und Datumsangaben) und der XMP-Metadatenstrom.",
      },
      {
        question: "Entfernt das alles Persönliche aus dem PDF?",
        answer:
          "Nein. Text auf den Seiten, Kommentare und Angaben in eingebetteten Bildern (etwa EXIF-Daten von Fotos) werden nicht verändert. Prüf den Inhalt selbst, bevor du das Dokument teilst.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "crop-pdf": {
    name: "PDF zuschneiden",
    shortName: "PDF zuschneiden",
    tagline: "Schneide die Ränder jeder Seite eines PDFs ab. Läuft auf deinem Gerät.",
    intro:
      "PDF zuschneiden kürzt die Kanten jeder Seite und entfernt breite weiße Ränder, Scannerkanten oder Druckermarken, damit der Inhalt beim Lesen auf dem Smartphone den Bildschirm füllt. Leg fest, wie viel oben, rechts, unten und links abgeschnitten wird, und die Vorschau zeigt, welcher Teil der Seite bleibt. Der Zuschnitt wird als Seiteneinstellung gespeichert, Text behält also seine volle Qualität. Alles passiert in deinem Browser, das Dokument wird also nie hochgeladen.",
    seoTitle: "PDF zuschneiden online – Seitenränder entfernen",
    seoDescription:
      "PDF zuschneiden, kostenlos: Seitenränder im Browser mit Live-Vorschau abschneiden und weiße Ränder oder Scannerkanten entfernen. Privat, ohne Upload.",
    keywords: [
      "pdf zuschneiden",
      "pdf seiten zuschneiden",
      "pdf ränder entfernen",
      "pdf rand abschneiden",
      "pdf beschneiden",
    ],
    howToSteps: [
      {
        title: "PDF hinzufügen",
        description: "Zieh das PDF, das zugeschnitten werden soll, hierher oder wähle es aus.",
      },
      {
        title: "Ränder einstellen",
        description: "Nutze die Regler für jede Kante; die Vorschau zeigt, was bleibt.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das PDF mit allen Seiten zugeschnitten.",
      },
    ],
    features: [
      {
        title: "Alle vier Kanten",
        description: "Schneide oben, rechts, unten und links getrennt ab.",
      },
      {
        title: "Live-Vorschau",
        description: "Der abgeschnittene Bereich wird auf der ersten Seite schattiert angezeigt.",
      },
      {
        title: "Kein Qualitätsverlust",
        description: "Die Seiten werden nicht neu gezeichnet, Text bleibt also scharf und durchsuchbar.",
      },
      {
        title: "Privat",
        description: "Das PDF wird auf deinem Gerät zugeschnitten und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wird die Datei durch das Zuschneiden kleiner?",
        answer:
          "Nein. Der abgeschnittene Bereich wird ausgeblendet, nicht gelöscht, die Dateigröße bleibt also etwa gleich. Ein PDF-Editor kann den ausgeblendeten Bereich weiterhin anzeigen.",
      },
      {
        question: "Kann ich Seiten unterschiedlich zuschneiden?",
        answer:
          "Für alle Seiten gelten dieselben Ränder. Um Seiten unterschiedlich zuzuschneiden, teile das PDF, schneide jeden Teil zu und füge die Teile wieder zusammen.",
      },
      {
        question: "Kann ich ein passwortgeschütztes PDF verwenden?",
        answer:
          "Noch nicht. Wenn ein PDF zum Öffnen ein Passwort braucht, sagt dir das Tool Bescheid. Öffne es mit dem Passwort in einem PDF-Reader, speichere eine Kopie ohne Passwort und verwende diese Kopie.",
      },
      {
        question: "Wird mein PDF hochgeladen?",
        answer:
          "Nein. Das PDF wird von deinem Browser auf deinem Gerät geöffnet und bearbeitet, Verträge, Kontoauszüge und andere private Dokumente verlassen es also nie.",
      },
    ],
  },
  "passport-photo-maker": {
    name: "Passfoto erstellen",
    shortName: "Passfoto",
    tagline: "Erstelle ein Pass- oder Visumfoto in der richtigen Größe, auf Wunsch mit einfarbigem Hintergrund, und drucke mehrere auf einem Bogen.",
    intro:
      "Passfoto erstellen macht aus einem normalen Foto ein Pass-, Visum- oder Ausweisfoto in genau der Größe, die du brauchst: 35 × 45 mm, 2 × 2 Zoll, 33 × 48 mm oder eine eigene Größe. Verschieb und zoom das Foto, bis Scheitel und Kinn auf den Hilfslinien liegen, ersetz den Hintergrund bei Bedarf durch schlichtes Weiß, Hellgrau oder Hellblau und lade ein Foto mit 300 DPI herunter oder einen Druckbogen für 4 × 6 Zoll großes Fotopapier oder A4, mit Schnittlinien. Alles passiert in deinem Browser, dein Foto wird also nie hochgeladen.",
    seoTitle: "Passfoto selbst erstellen – 35×45 mm, kostenlos",
    seoDescription:
      "Passfoto selbst erstellen: Pass- und Visumfotos in 35×45 mm, 2×2 in oder eigener Größe, weißer Hintergrund, Druckbogen für 4×6 oder A4. Kostenlos, privat.",
    keywords: [
      "passfoto selbst erstellen",
      "passbild erstellen",
      "passfoto 35x45",
      "passbild online erstellen",
      "visumfoto erstellen",
      "passfotos drucken",
    ],
    howToSteps: [
      {
        title: "Foto hinzufügen",
        description: "Wähle ein klares Foto von vorn, mit gleichmäßigem Licht und neutralem Gesichtsausdruck.",
      },
      {
        title: "Größe wählen",
        description: "Wähle 35 × 45 mm, 2 × 2 in, 33 × 48 mm oder gib eine eigene Größe ein.",
      },
      {
        title: "Ausrichten",
        description: "Zieh das Foto oder nutze die Regler, bis Scheitel und Kinn auf den gestrichelten Linien liegen.",
      },
      {
        title: "Hintergrund festlegen",
        description: "Behalte ihn oder ersetze ihn durch Weiß, Hellgrau oder Hellblau.",
      },
      {
        title: "Herunterladen",
        description: "Speichere ein Foto oder einen Druckbogen für 4 × 6 in oder A4, als JPG oder PDF.",
      },
    ],
    features: [
      {
        title: "Gängige Größen eingebaut",
        description: "35 × 45 mm, 2 × 2 in und 33 × 48 mm, dazu jede eigene Größe in Millimetern.",
      },
      {
        title: "Hilfslinien für den Kopf",
        description: "Gestrichelte Linien und ein Oval zeigen, wo der Kopf sitzen soll.",
      },
      {
        title: "Einfarbige Hintergründe",
        description: "Ein KI-Modell auf deinem Gerät ersetzt den Hintergrund durch Weiß, Hellgrau oder Hellblau.",
      },
      {
        title: "Druckbögen",
        description: "Füll 4 × 6 in großes Fotopapier oder A4 mit Kopien und Schnittlinien, mit 300 DPI.",
      },
    ],
    faqs: [
      {
        question: "Wird mein Foto akzeptiert?",
        answer:
          "Das hängt von der Behörde ab, bei der du es einreichst. Jedes Land legt Regeln für Größe, Kopfposition, Hintergrund, Gesichtsausdruck und Brille fest. Dieses Tool sorgt für die richtige Größe und Anordnung; prüf vor dem Drucken die offiziellen Vorgaben.",
      },
      {
        question: "Wie drucke ich den Bogen in der richtigen Größe?",
        answer:
          "Drucke mit 100 % (tatsächliche Größe), nicht mit „An Seite anpassen“. Die PDF-Option nutzt genau das Papierformat, die Fotos werden also auf jedem Drucker in ihrer echten Größe gedruckt.",
      },
      {
        question: "Welche Auflösung haben die Fotos?",
        answer:
          "300 DPI, der Standard für den Fotodruck. Ein Foto mit 35 × 45 mm hat 413 × 531 Pixel.",
      },
      {
        question: "Wie funktioniert das Ersetzen des Hintergrunds?",
        answer:
          "Ein KI-Modell wird einmal heruntergeladen (etwa 16 MB) und läuft in deinem Browser, um dich vom Hintergrund zu trennen. Prüf vor dem Drucken die Kanten um die Haare.",
      },
      {
        question: "Wird mein Foto hochgeladen?",
        answer:
          "Nein. Das Foto wird in deinem Browser auf deinem Gerät verarbeitet, und nichts wird an einen Server gesendet.",
      },
    ],
  },
  "signature-extractor": {
    name: "Unterschrift extrahieren",
    shortName: "Unterschrift als PNG",
    tagline: "Mach aus einem Foto deiner Unterschrift ein sauberes PNG mit transparentem Hintergrund.",
    intro:
      "Unterschrift extrahieren nimmt ein Foto oder einen Scan deiner Unterschrift auf Papier und macht daraus ein sauberes Bild, das nur die Tinte auf transparentem Hintergrund zeigt. Schatten und ungleichmäßiges Licht von Handyfotos werden ignoriert, der leere Platz um die Unterschrift wird abgeschnitten, und die Tinte kann schwarz oder blau eingefärbt werden. Nutze das PNG mit PDF unterschreiben, in Word oder in jedem Formular, das ein Bild deiner Unterschrift verlangt. Das Foto wird in deinem Browser verarbeitet, deine Unterschrift wird also nie hochgeladen.",
    seoTitle: "Unterschrift freistellen – transparentes PNG",
    seoDescription:
      "Unterschrift freistellen: Foto deiner Unterschrift im Browser zum transparenten PNG machen. Entfernt Papier und Schatten, schneidet zu. Gratis, privat.",
    keywords: [
      "unterschrift freistellen",
      "unterschrift transparent",
      "unterschrift als png",
      "unterschrift hintergrund entfernen",
      "unterschrift digitalisieren",
    ],
    howToSteps: [
      {
        title: "Auf weißem Papier unterschreiben",
        description: "Nimm einen dunklen Stift und fotografiere bei gutem Licht, oder scanne die Seite.",
      },
      {
        title: "Foto hinzufügen",
        description: "Zieh das Foto hierher oder wähle es aus. Die Unterschrift wird sofort extrahiert.",
      },
      {
        title: "Feinabstimmen",
        description: "Stell die Empfindlichkeit ein und wähle als Tinte Original, Schwarz oder Blau.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das transparente PNG.",
      },
    ],
    features: [
      {
        title: "Kommt mit Schatten klar",
        description: "Jede Stelle wird mit dem Papier um sie herum verglichen, ungleichmäßiges Licht hinterlässt also keine grauen Flecken.",
      },
      {
        title: "Weiche Kanten",
        description: "Strichkanten laufen sanft aus, statt gezackt auszusehen.",
      },
      {
        title: "Automatischer Zuschnitt",
        description: "Leeres Papier um die Unterschrift wird abgeschnitten.",
      },
      {
        title: "Privat",
        description: "Deine Unterschrift bleibt auf deinem Gerät.",
      },
    ],
    faqs: [
      {
        question: "Wie bekomme ich das beste Ergebnis?",
        answer:
          "Unterschreib mit einem dunklen Stift auf einfachem weißem Papier und fotografiere die Seite gerade von oben bei Tageslicht, ohne dass dein Schatten darauf fällt.",
      },
      {
        question: "Warum fehlen Teile meiner Unterschrift?",
        answer:
          "Blasse oder dünne Striche können verloren gehen. Erhöhe die Empfindlichkeit; wenn dann die Papierstruktur sichtbar wird, senk sie wieder etwas.",
      },
      {
        question: "Kann ich damit ein PDF unterschreiben?",
        answer:
          "Ja. Wähle in PDF unterschreiben „Bild“ und dann das heruntergeladene PNG.",
      },
      {
        question: "Wird meine Unterschrift hochgeladen?",
        answer:
          "Nein. Sie wird in deinem Browser verarbeitet und nirgendwohin gesendet.",
      },
    ],
  },
  "change-image-dpi": {
    name: "DPI ändern",
    shortName: "DPI ändern",
    tagline: "Stell die DPI eines JPG oder PNG ein, etwa 300 DPI für den Druck oder für Formulare, ohne die Pixel zu verändern.",
    intro:
      "DPI ändern setzt den Auflösungswert, der in einer JPG- oder PNG-Datei gespeichert ist, zum Beispiel 300 DPI für den Druck oder den Wert, den ein Antragsformular verlangt. Die Pixel werden nicht angetastet, Qualität und Dateigröße bleiben also gleich: Nur die Druckgröße ändert sich, und das Tool zeigt sie in Zentimetern und Zoll an. Es aktualisiert beide Stellen, an denen ein JPG die DPI speichern kann, damit Windows, Mac und Foto-Apps alle den neuen Wert lesen. Alles läuft in deinem Browser, das Bild wird also nie hochgeladen.",
    seoTitle: "DPI ändern – Bild online auf 300 DPI setzen",
    seoDescription:
      "DPI ändern: Stell die DPI eines JPG oder PNG im Browser auf 300, 200, 72 oder jeden anderen Wert. Pixel bleiben gleich, Druckgröße sichtbar. Kostenlos, privat.",
    keywords: [
      "dpi ändern",
      "bild auf 300 dpi ändern",
      "dpi von bild ändern",
      "foto dpi ändern",
      "dpi erhöhen",
      "dpi konverter",
    ],
    howToSteps: [
      {
        title: "Bild hinzufügen",
        description: "Zieh ein JPG oder PNG hierher oder wähle es aus. WebP und HEIC werden zuerst in JPG umgewandelt.",
      },
      {
        title: "DPI wählen",
        description: "Wähle 72, 96, 150, 200, 300 oder 600, oder gib einen beliebigen Wert ein.",
      },
      {
        title: "Druckgröße prüfen",
        description: "Sieh, wie groß das Bild mit dieser DPI gedruckt wird.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das Bild mit der neuen DPI.",
      },
    ],
    features: [
      {
        title: "Kein Qualitätsverlust",
        description: "Nur der DPI-Wert wird geändert; die Bilddaten bleiben unangetastet.",
      },
      {
        title: "Überall lesbar",
        description: "Sowohl die JFIF- als auch die EXIF-Auflösung eines JPG werden aktualisiert, damit jede App dieselbe DPI anzeigt.",
      },
      {
        title: "Druckgröße sichtbar",
        description: "Sieh die Druckgröße in Zentimetern und Zoll, bevor du herunterlädst.",
      },
      {
        title: "Privat",
        description: "Das Bild wird in deinem Browser geändert und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Verbessert das Ändern der DPI die Qualität?",
        answer:
          "Nein. DPI ist nur eine Angabe, die Druckern sagt, wie groß gedruckt werden soll. Für mehr Details brauchst du mehr Pixel, und die kann kein Tool wirklich erzeugen.",
      },
      {
        question: "Ein Formular verlangt 200 DPI und eine Größe in Zentimetern. Was tun?",
        answer:
          "Stell hier die DPI ein und prüf dann die Druckgröße. Wenn sie nicht passt, skaliere das Bild auf die Pixelgröße, die das Formular braucht: Zentimeter ÷ 2,54 × DPI. Zum Beispiel sind 3,5 cm bei 200 DPI 276 Pixel.",
      },
      {
        question: "Warum steht bei meinem Bild „Nicht festgelegt“?",
        answer:
          "Viele Handyfotos und Screenshots speichern keine DPI. Die meisten Apps gehen dann von 72 oder 96 aus. Wenn du hier einen Wert festlegst, ist das behoben.",
      },
      {
        question: "Wird mein Bild hochgeladen?",
        answer:
          "Nein. Die Änderung passiert in deinem Browser auf deinem Gerät.",
      },
    ],
  },
  "blur-background": {
    name: "Hintergrund unscharf machen",
    shortName: "Hintergrund unscharf",
    tagline: "Mach den Hintergrund eines Fotos unscharf wie mit dem Porträtmodus einer Kamera, die Person bleibt scharf. Läuft auf deinem Gerät.",
    intro:
      "Hintergrund unscharf machen gibt jedem Foto den weichen, unscharfen Hintergrund des Porträtmodus einer Kamera. Ein KI-Modell findet die Person auf deinem Gerät, dann wird der Hintergrund weichgezeichnet, während das Motiv scharf bleibt, ohne verschwommenen Lichthof an den Kanten. Mit einem Regler stellst du ein, wie stark die Unschärfe ist, und speicherst das Ergebnis als JPG oder PNG. Nichts wird hochgeladen: Das Foto und das Modell bleiben beide in deinem Browser.",
    seoTitle: "Hintergrund unscharf machen – Porträt-Effekt online",
    seoDescription:
      "Hintergrund unscharf machen: Verwisch den Hintergrund eines Fotos online, die Person bleibt scharf wie im Porträtmodus. Stärke einstellbar, kostenlos, privat.",
    keywords: [
      "hintergrund unscharf machen",
      "foto hintergrund unscharf machen",
      "porträtmodus online",
      "hintergrund weichzeichnen",
      "bokeh effekt online",
      "bild hintergrund verschwommen machen",
    ],
    howToSteps: [
      {
        title: "Foto hinzufügen",
        description: "Zieh ein Foto einer Person hierher, wähle es aus oder füge es ein. iPhone-HEIC-Fotos funktionieren auch.",
      },
      {
        title: "Auf das Motiv warten",
        description: "Das KI-Modell findet die Person auf deinem Gerät. Beim ersten Mal lädt es etwa 16 MB herunter.",
      },
      {
        title: "Unschärfe einstellen",
        description: "Beweg den Regler „Stärke der Unschärfe“, bis der Hintergrund passt.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das Foto als JPG oder für die beste Qualität als PNG.",
      },
    ],
    features: [
      {
        title: "Porträtmodus-Look",
        description: "Der Hintergrund wird weich, die Person bleibt gestochen scharf.",
      },
      {
        title: "Kein Lichthof",
        description: "Die Unschärfe hinter dem Motiv wird aus dem umgebenden Hintergrund aufgefüllt, die Kanten bleiben also sauber.",
      },
      {
        title: "Einstellbar",
        description: "Wähle alles von einer leichten Weichzeichnung bis zu starker Unschärfe.",
      },
      {
        title: "Privat",
        description: "Das Foto wird in deinem Browser bearbeitet und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Funktioniert es auch bei Fotos ohne Menschen?",
        answer:
          "Es ist für Fotos von Menschen gemacht. Haustiere und Objekte klappen oft, aber das Modell kann Teile davon übersehen; prüf in diesem Fall die Kanten, bevor du speicherst.",
      },
      {
        question: "Warum dauert das erste Foto länger?",
        answer:
          "Das KI-Modell wird einmal heruntergeladen (etwa 16 MB) und bleibt in deinem Browser. Danach werden Fotos in wenigen Sekunden bearbeitet.",
      },
      {
        question: "Verliert mein Foto an Qualität?",
        answer:
          "Die Person behält die volle Auflösung. Sehr große Fotos (über etwa 16 Megapixel) werden zuerst verkleinert, damit sie auf Handys funktionieren; die Seite sagt dir, wenn das passiert.",
      },
      {
        question: "Wird mein Foto hochgeladen?",
        answer:
          "Nein. Das Finden des Motivs und das Weichzeichnen passieren beide auf deinem Gerät.",
      },
    ],
  },
  "change-background": {
    name: "Hintergrund ändern",
    shortName: "Hintergrund ändern",
    tagline: "Ersetz den Hintergrund eines Fotos durch eine Farbe oder ein anderes Bild. Das Motiv wird auf deinem Gerät freigestellt.",
    intro:
      "Hintergrund ändern tauscht den Hintergrund eines Fotos gegen eine Volltonfarbe oder ein Bild deiner Wahl. Ein KI-Modell stellt die Person auf deinem Gerät frei und setzt sie dann auf den neuen Hintergrund, so skaliert, dass er das ganze Bild füllt. Wähl Weiß für einen sauberen Produkt- oder Profil-Look, eine beliebige Farbe aus der Farbauswahl oder ein eigenes Hintergrundbild, und lade das Ergebnis als JPG oder PNG herunter. Das Foto wird nie hochgeladen.",
    seoTitle: "Foto-Hintergrund ändern – Farbe oder Bild, kostenlos",
    seoDescription:
      "Hintergrund ändern: Setz dein Foto online auf Weiß, eine beliebige Farbe oder ein eigenes Bild. Das Motiv wird im Browser freigestellt. Kostenlos und privat.",
    keywords: [
      "hintergrund ändern",
      "foto hintergrund ändern",
      "hintergrund ersetzen",
      "weißer hintergrund foto",
      "bild hintergrund austauschen",
      "hintergrund einfügen",
    ],
    howToSteps: [
      {
        title: "Foto hinzufügen",
        description: "Zieh ein Foto hierher, wähle es aus oder füge es ein. iPhone-HEIC-Fotos funktionieren auch.",
      },
      {
        title: "Auf das Freistellen warten",
        description: "Das KI-Modell trennt das Motiv auf deinem Gerät ab. Beim ersten Mal lädt es etwa 16 MB herunter.",
      },
      {
        title: "Hintergrund wählen",
        description: "Wähle eine Farbe oder nimm ein Bild als neuen Hintergrund.",
      },
      {
        title: "Herunterladen",
        description: "Speichere das Foto als JPG oder PNG.",
      },
    ],
    features: [
      {
        title: "Farbe oder Bild",
        description: "Fertige Farben, eine Farbauswahl oder ein beliebiges eigenes Bild.",
      },
      {
        title: "Füllt das Bild",
        description: "Ein Hintergrundbild wird skaliert und zentriert, sodass es das ganze Foto bedeckt.",
      },
      {
        title: "Volle Auflösung",
        description: "Das Ergebnis behält die Größe deines Fotos.",
      },
      {
        title: "Privat",
        description: "Alles passiert in deinem Browser; nichts wird hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Kann ich stattdessen einen transparenten Hintergrund bekommen?",
        answer:
          "Ja: Nutze „Hintergrund entfernen“, das ein PNG ganz ohne Hintergrund speichert.",
      },
      {
        question: "Funktioniert es bei Produkten und Haustieren?",
        answer:
          "Am besten funktioniert es bei Menschen. Für Produkte, Haustiere und Objekte liefert das Modell „Beste Qualität“ in „Hintergrund entfernen“ sauberere Kanten; danach kannst du in jedem Bildeditor einen Hintergrund hinzufügen.",
      },
      {
        question: "Warum dauert das erste Foto länger?",
        answer:
          "Das KI-Modell wird einmal heruntergeladen (etwa 16 MB) und bleibt in deinem Browser, spätere Fotos dauern also nur Sekunden.",
      },
      {
        question: "Wird mein Foto hochgeladen?",
        answer:
          "Nein. Das Freistellen und der neue Hintergrund entstehen auf deinem Gerät.",
      },
    ],
  },
  "image-to-text": {
    name: "Bild in Text",
    shortName: "Bild in Text",
    tagline: "Kopier den Text aus einem Foto, Screenshot oder Scan (OCR) in 10 Sprachen. Das Bild wird auf deinem Gerät gelesen.",
    intro:
      "Bild in Text liest die Wörter in einem Foto, Screenshot oder gescannten Dokument und gibt sie dir als Text, den du kopieren, bearbeiten oder als TXT-Datei speichern kannst. Dafür läuft Tesseract OCR in deinem Browser, mit Englisch, Spanisch, Französisch, Deutsch, Portugiesisch, Italienisch, Japanisch, Koreanisch, Indonesisch und Türkisch. Ein Fortschrittsbalken zeigt, wie weit es ist, und wenn das Bild für ein verlässliches Ergebnis zu unscharf ist, sagt die Seite es dir. Das Bild wird nie hochgeladen.",
    seoTitle: "Bild in Text umwandeln – kostenlose OCR online",
    seoDescription:
      "Bild in Text umwandeln: Lies Text aus Bildern, Screenshots und Scans mit kostenloser OCR in 10 Sprachen aus, kopier oder speichere ihn. Im Browser, ohne Upload.",
    keywords: [
      "bild in text umwandeln",
      "text aus bild extrahieren",
      "ocr online",
      "foto in text umwandeln",
      "text aus bild kopieren",
      "screenshot in text umwandeln",
    ],
    howToSteps: [
      {
        title: "Bild hinzufügen",
        description: "Zieh ein Foto, einen Screenshot oder einen Scan mit Text hierher, wähle ihn aus oder füge ihn ein.",
      },
      {
        title: "Sprache prüfen",
        description: "Die Sprache der Seite ist schon gewählt; ändere sie, wenn der Text in einer anderen Sprache ist.",
      },
      {
        title: "Auf den Text warten",
        description: "Der Text erscheint, sobald er gelesen ist. Du kannst ihn direkt im Feld korrigieren.",
      },
      {
        title: "Kopieren oder herunterladen",
        description: "Kopier den Text mit „Text kopieren“ oder speichere ihn mit „Text herunterladen (TXT)“ als TXT-Datei.",
      },
    ],
    features: [
      {
        title: "10 Sprachen",
        description: "Darunter Japanisch und Koreanisch. Jede Sprache lädt einmalig 1 bis 4 MB herunter.",
      },
      {
        title: "Bearbeitbares Ergebnis",
        description: "Korrigier jedes Wort im Feld, bevor du es kopierst oder speicherst.",
      },
      {
        title: "Ehrlich bei der Qualität",
        description: "Eine Warnung erscheint, wenn das Bild zu unscharf oder zu klein ist, um es verlässlich zu lesen.",
      },
      {
        title: "Privat",
        description: "Das Bild wird in deinem Browser gelesen und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Kann es Handschrift lesen?",
        answer:
          "Nicht zuverlässig. Es ist für gedruckten Text gemacht, etwa Dokumente, Screenshots, Schilder und Etiketten. Ordentliche Handschrift klappt manchmal, aber rechne mit Fehlern.",
      },
      {
        question: "Wie bekomme ich das beste Ergebnis?",
        answer:
          "Nimm ein scharfes, gut beleuchtetes Foto, gerade von vorn aufgenommen, mit großem Text im Bild. Screenshots werden fast perfekt gelesen.",
      },
      {
        question: "Kann es ein PDF lesen?",
        answer:
          "Wandle die Seite zuerst mit „PDF in JPG“ in ein Bild um und füge dann dieses Bild hier hinzu.",
      },
      {
        question: "Wird mein Bild hochgeladen?",
        answer:
          "Nein. Der Text wird auf deinem Gerät gelesen; Bild und Text verlassen nie deinen Browser.",
      },
    ],
  },
  "qr-code-generator": {
    name: "QR-Code-Generator",
    shortName: "QR-Generator",
    tagline: "Erstell einen QR-Code für einen Link, Text, ein Wi-Fi-Netzwerk, eine E-Mail, Telefonnummer oder einen Kontakt, mit deinen Farben und Logo, als PNG oder SVG.",
    intro:
      "QR-Code-Generator erstellt einen QR-Code für einen Weblink, einfachen Text, Wi-Fi-Zugangsdaten (WLAN), eine E-Mail, eine Telefonnummer oder eine Visitenkarte. Wähle die Farben, die Größe und die Fehlerkorrektur, setz dein Logo in die Mitte und lade den Code als PNG-Bild oder als SVG-Datei herunter, die in jeder Größe scharf bleibt. Jeder Code wird geprüft, indem er wieder ausgelesen wird, so weißt du vor dem Drucken, dass er sich scannen lässt. Die Codes entstehen in deinem Browser, kostenlos, ohne Anmeldung und ohne Ablaufdatum.",
    seoTitle: "QR-Code erstellen – kostenlos, mit Logo, PNG & SVG",
    seoDescription:
      "QR-Code erstellen für Links, Wi-Fi, E-Mail, Telefon oder Kontakte, mit deinen Farben und Logo. Als PNG oder SVG. Kostenlos, ohne Anmeldung, ohne Ablauf.",
    keywords: [
      "qr code erstellen",
      "qr code generator",
      "qr code generator kostenlos",
      "qr code mit logo",
      "wlan qr code erstellen",
      "qr code svg",
    ],
    howToSteps: [
      {
        title: "Inhalt wählen",
        description: "Wähle Link, Text, Wi-Fi, E-Mail, Telefon oder Kontakt.",
      },
      {
        title: "Angaben ausfüllen",
        description: "Der QR-Code aktualisiert sich, während du tippst.",
      },
      {
        title: "Gestalten",
        description: "Leg Farben und Größe fest und füge bei Bedarf ein Logo hinzu.",
      },
      {
        title: "Herunterladen",
        description: "Speichere ihn als PNG oder für Druck und große Formate als SVG.",
      },
    ],
    features: [
      {
        title: "Vor dem Speichern geprüft",
        description: "Der Code wird automatisch wieder ausgelesen, und du wirst gewarnt, wenn er sich vielleicht nicht scannen lässt.",
      },
      {
        title: "Logo und Farben",
        description: "Füge dein Logo hinzu; die stärkste Fehlerkorrektur wird genutzt, damit der Code lesbar bleibt.",
      },
      {
        title: "PNG und SVG",
        description: "SVG bleibt in jeder Größe scharf, ideal für den Druck.",
      },
      {
        title: "Läuft nie ab",
        description: "Die Daten stecken im Code selbst, nicht auf einem Server, deshalb funktioniert er für immer.",
      },
    ],
    faqs: [
      {
        question: "Laufen diese QR-Codes ab?",
        answer:
          "Nein. Es sind statische Codes: Alles steckt im Muster selbst, ohne Weiterleitung über unseren Server, deshalb funktionieren sie für immer.",
      },
      {
        question: "Kann ich Scans nachverfolgen oder den Link später ändern?",
        answer:
          "Nein. Dafür braucht es einen dynamischen Code, der jeden Scan über einen Server leitet, und das macht dieses Tool nicht. Der Vorteil: Niemand sieht, wer deinen Code scannt.",
      },
      {
        question: "Wie funktioniert der Wi-Fi-Code?",
        answer:
          "Handys, die ihn scannen, bieten an, sich mit dem eingegebenen Netzwerknamen und Passwort zu verbinden. Das Passwort steckt im Code, teil ihn also nur mit Leuten, denen du es auch geben würdest.",
      },
      {
        question: "Welche Fehlerkorrektur soll ich wählen?",
        answer:
          "M passt für die meisten Zwecke. H übersteht mehr Beschädigung und wird mit Logo automatisch genutzt; L ergibt den kleinsten Code für langen Text.",
      },
      {
        question: "Wird das, was ich eingebe, irgendwohin gesendet?",
        answer:
          "Nein. Der Code entsteht in deinem Browser.",
      },
    ],
  },
  "qr-code-reader": {
    name: "QR-Code-Leser",
    shortName: "QR-Leser",
    tagline: "Lies einen QR-Code aus einem Bild oder mit deiner Kamera und sieh den Link, das Wi-Fi-Passwort oder den Kontakt darin, bevor du ihn öffnest.",
    intro:
      "QR-Code-Leser entschlüsselt QR-Codes aus einem Foto, einem Screenshot oder mit deiner Kamera. Es zeigt, was der Code enthält, bevor irgendetwas passiert: die vollständige Webadresse, ein Wi-Fi-Netzwerk mit Passwort, eine E-Mail, eine Telefonnummer oder eine Visitenkarte, die du speichern kannst. Links öffnen sich nie von selbst, du kannst sie also zuerst prüfen. Das ist eine gute Gewohnheit, denn QR-Codes werden oft genutzt, um Leute auf gefälschte Seiten zu schicken. Bilder und Kamerabilder werden auf deinem Gerät gelesen.",
    seoTitle: "QR-Code scannen online – aus Bild oder mit Kamera",
    seoDescription:
      "QR-Code scannen aus einem Bild, Screenshot oder mit der Kamera, direkt im Browser. Sieh Link, Wi-Fi-Passwort oder Kontakt vor dem Öffnen. Kostenlos und privat.",
    keywords: [
      "qr code scannen",
      "qr code aus bild scannen",
      "qr code scanner online",
      "qr code lesen",
      "qr code scanner",
      "qr code auslesen",
    ],
    howToSteps: [
      {
        title: "Code hinzufügen",
        description: "Zieh ein Bild mit einem QR-Code hierher oder wähle es aus, oder tipp auf „Mit Kamera scannen“.",
      },
      {
        title: "Inhalt ansehen",
        description: "Links, Wi-Fi-Daten, E-Mails, Telefonnummern und Kontakte werden klar angezeigt.",
      },
      {
        title: "Vor dem Öffnen prüfen",
        description: "Lies die vollständige Adresse, bevor du auf „Link öffnen“ tippst.",
      },
      {
        title: "Nutzen",
        description: "Kopier den Text, öffne den Link, ruf an, schreib eine E-Mail oder speichere den Kontakt.",
      },
    ],
    features: [
      {
        title: "Bild oder Kamera",
        description: "Lies Codes in Screenshots und Fotos oder halte deine Kamera auf einen Code.",
      },
      {
        title: "Standardmäßig sicher",
        description: "Links öffnen sich nie automatisch; du siehst zuerst die vollständige Adresse.",
      },
      {
        title: "Wi-Fi und Kontakte",
        description: "Zeigt Netzwerkpasswörter an und lässt dich Visitenkarten speichern.",
      },
      {
        title: "Privat",
        description: "Bilder und Kamerabilder werden in deinem Browser verarbeitet und nie hochgeladen.",
      },
    ],
    faqs: [
      {
        question: "Wie scanne ich einen QR-Code auf meinem eigenen Bildschirm?",
        answer:
          "Mach einen Screenshot und füge ihn hier hinzu; du brauchst kein zweites Gerät.",
      },
      {
        question: "Warum sollte ich Links zuerst prüfen?",
        answer:
          "QR-Codes auf Plakaten, Parkautomaten und in E-Mails werden manchmal gegen solche ausgetauscht, die auf gefälschte Seiten führen. Prüf, ob die Adresse die erwartete ist, bevor du sie öffnest oder irgendwelche Daten eingibst.",
      },
      {
        question: "Die Kamera startet nicht. Was kann ich tun?",
        answer:
          "Erlaube den Kamerazugriff für diese Seite in den Einstellungen deines Browsers, oder mach ein Foto vom Code und füge stattdessen das Bild hinzu.",
      },
      {
        question: "Werden meine Bilder oder meine Kamera irgendwohin gesendet?",
        answer:
          "Nein. Alles wird auf deinem Gerät gelesen.",
      },
    ],
  },
};
