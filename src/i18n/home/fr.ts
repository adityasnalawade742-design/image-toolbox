import { LocalizedHomeData } from '../types';

export const frHome: LocalizedHomeData = {
  heroPill: 'Confidentialité Totale • Zéro Envoi Serveur • 27 Outils Gratuits',
  heroHeadlineMain: 'Outils d’Image de Haute Précision,',
  heroHeadlineAccent: 'Directement dans Votre Navigateur',
  heroSubheadline: 'Recadrez, redimensionnez, compressez, convertissez et modifiez vos images localement, sans téléversement cloud et avec une qualité irréprochable.',
  guarantee1: '100% Confidentiel en Local',
  guarantee2: 'Vitesse Instantanée sans Téléversement',
  guarantee3: 'Aucune Limite de Taille',
  whyChooseTitle: 'Pourquoi les Professionnels Choisissent Image Toolbox',
  whyChooseSubtitle: 'Conçu pour les développeurs, designers, photographes et utilisateurs soucieux de la confidentialité.',
  feature1Title: 'Zéro Téléversement Serveur',
  feature1Desc: 'Vos images restent sur votre machine. Le calcul HTML5 Canvas gère tout localement avec une isolation complète des données.',
  feature2Title: 'Moteur Canvas Ultra-Performant',
  feature2Desc: 'Prévisualisations instantanées, traitement par lots et encodeurs WebP/PNG optimisés sans file d’attente serveur.',
  feature3Title: 'Idéal Développeurs & Webmasters',
  feature3Desc: 'De l’encodage Base64 à la rastérisation SVG, suppression EXIF et génération de favicons multi-formats.',
  categories: [
    { id: 'edit', label: 'Édition & Transformation', description: 'Recadrer, redimensionner, pivoter, retourner et encadrer' },
    { id: 'optimize', label: 'Optimisation & Compression', description: 'Réduire le poids des fichiers et supprimer les métadonnées' },
    { id: 'convert', label: 'Conversion de Formats', description: 'Convertir entre WebP, PNG, JPG et AVIF' },
    { id: 'utilities', label: 'Calculateurs & Utilitaires', description: 'Pipette à couleurs, calcul de ratios et DPI' },
    { id: 'developer', label: 'Outils Développeur & Web', description: 'Générateur de favicon, encodage Base64 et Data URI' }
  ],
  faqs: [
    {
      question: 'Mes photos sont-elles envoyées sur un serveur distant ?',
      answer: 'Non, jamais. Image Toolbox traite toutes les images directement dans votre navigateur via HTML5 Canvas. Vos fichiers ne transitent pas sur Internet.'
    },
    {
      question: 'Image Toolbox est-il réellement 100% gratuit ?',
      answer: 'Oui, les 27 outils sont entièrement gratuits, sans limite d’utilisation, sans filigrane et sans inscription requise.'
    },
    {
      question: 'Quels formats d’image sont pris en charge ?',
      answer: 'Image Toolbox prend en charge les formats JPG, PNG, WebP, AVIF, SVG, GIF et les Data URI Base64 pour toutes les opérations courantes.'
    },
    {
      question: 'Puis-je traiter plusieurs images par lot ?',
      answer: 'Oui ! Nos outils de redimensionnement et de compression par lots traitent des dizaines d’images simultanément et les téléchargent sous forme d’archive ZIP.'
    }
  ]
};
