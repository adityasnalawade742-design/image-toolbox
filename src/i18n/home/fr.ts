import type { LocalizedHomeData } from '../types';

export const frHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Tous les outils d’image dont vous avez besoin, au même endroit',
    subtitle:
      'Rognez, redimensionnez, compressez, convertissez, supprimez l’arrière-plan et nettoyez vos photos gratuitement. Sans inscription, sans filigrane, et vos images restent sur votre appareil.',
    dropzoneTitle: 'Déposez une image pour commencer',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, TIFF, SVG ou HEIC d’iPhone, jusqu’à 50 MB',
  },
  sections: {
    indexTitle: 'Tous les outils',
    indexSubtitle: 'Chaque outil utilise le même espace de travail : ouvrez une image, ajustez, téléchargez.',
    pillarsTitle: 'Comment ça marche',
    faqTitle: 'Questions',
  },
  trustPillars: [
    {
      title: 'Un seul espace de travail pour tout',
      description:
        'Chaque outil s’ouvre de la même façon, et vous pouvez passer directement votre image à l’outil suivant, par exemple rogner, puis compresser.',
      icon: 'Layers',
    },
    {
      title: 'Les images ne sont jamais envoyées',
      description:
        'Les images sont traitées par votre navigateur, sur votre propre appareil : pas d’attente d’envoi, et aucune copie sur un serveur. Quelques outils de documents, comme Word en PDF, ont besoin de notre serveur : ils sont signalés, et les fichiers sont supprimés juste après.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Gratuit, sans compte',
      description: 'Sans inscription, sans filigrane et sans limite quotidienne. Chaque fichier peut peser jusqu’à 50 MB ; les outils par lot acceptent jusqu’à 50 fichiers.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Retouche et transformation',
    'optimize-compress': 'Optimisation et compression',
    'convert-formats': 'Conversion de formats',
    'pdf-documents': 'PDF et documents',
    utilities: 'Analyse et utilitaires',
    developer: 'Outils pour développeurs',
  },
  faqs: [
    {
      question: 'Mes images sont-elles envoyées quelque part ?',
      answer:
        'Non. Chaque outil d’image fonctionne dans votre navigateur : vos images sont traitées sur votre propre appareil et ne sont jamais envoyées sur un serveur. L’outil de suppression d’arrière-plan télécharge son modèle d’IA une seule fois, puis fonctionne lui aussi sur votre appareil. Quelques outils de documents (Word en PDF, Excel en PDF, PowerPoint en PDF, PDF en Word, Compresser PDF, Protéger PDF, Déverrouiller PDF, OCR PDF, PDF en PDF/A et Réparer PDF) ont besoin de notre serveur : ils portent la mention « Utilise notre serveur », et votre fichier est supprimé dès que le résultat est renvoyé.',
    },
    {
      question: 'Est-ce vraiment gratuit ?',
      answer: 'Oui. Tous les outils sont gratuits et utilisables sans compte, et aucun filigrane n’est ajouté.',
    },
    {
      question: 'Quelle taille peuvent faire mes images ?',
      answer:
        'Chaque image peut peser jusqu’à 50 MB. Le compresseur et le redimensionneur par lot acceptent jusqu’à 50 images à la fois, de 50 MB maximum chacune. Les très grandes photos peuvent être lentes à traiter sur les anciens téléphones.',
    },
    {
      question: 'Quels formats puis-je ouvrir et enregistrer ?',
      answer:
        'Vous pouvez ouvrir des photos JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, TIFF, SVG et HEIC d’iPhone. Vous pouvez enregistrer en JPG, PNG, WebP ou AVIF, selon l’outil.',
    },
    {
      question: 'Est-ce que ça fonctionne sur mon téléphone ?',
      answer:
        'Oui. Les outils fonctionnent dans les navigateurs mobiles actuels sur iPhone et Android, y compris avec les photos HEIC d’iPhone. Vous pouvez aussi installer le site comme une application. Après votre première visite, la plupart des outils fonctionnent hors ligne ; l’export AVIF et la suppression d’arrière-plan doivent être utilisés une fois en ligne.',
    },
    {
      question: 'Puis-je utiliser plusieurs outils à la suite ?',
      answer:
        'Oui. Après une modification, choisissez une étape suivante, comme Compresser ou Redimensionner, et votre image s’ouvre dans cet outil sans avoir à l’enregistrer puis à la réimporter.',
    },
  ],
};
