import type { LocalizedHomeData } from '../types';

export const frHome: LocalizedHomeData = {
  hero: {
    badge: '🔒 Traitement d’Image 100% Privé dans le Navigateur',
    title: 'Outils d’Image de Haute Précision, Directement dans Votre Navigateur',
    subtitle: 'Rognez, redimensionnez, compressez, convertissez et analysez vos images à vitesse maximale sans aucun envoi vers un serveur.',
    dropzoneTitle: 'Glissez et Déposez vos Images Ici',
    dropzoneSubtitle: 'ou cliquez pour parcourir • PNG, JPG, WebP, SVG, AVIF, GIF',
  },
  trustPillars: [
    { title: 'Zéro Transfert Serveur', description: 'Le traitement complet s’exécute dans votre navigateur via HTML5 Canvas.', icon: 'ShieldCheck' },
    { title: 'Précision Maximale', description: 'Algorithmes de redimensionnement de haute qualité sans dégradation visuelle.', icon: 'Sparkles' },
    { title: 'Vitesse Instantanée', description: 'Aucune latence réseau ni temps d’attente de téléchargement.', icon: 'Zap' },
  ],
  categoryNames: {
    'edit-transform': 'Édition & Transformation',
    'optimize-compress': 'Optimisation & Compression',
    'convert-formats': 'Conversion de Formats',
    'utilities': 'Inspection & Utilitaires',
    'developer': 'Outils Développeur',
  },
  faqs: [
    { question: 'Mes images sont-elles envoyées sur un serveur ?', answer: 'Non. Image Toolbox fonctionne 100% côté client. Vos fichiers ne quittent jamais votre ordinateur.' },
    { question: 'Y a-t-il une limite de taille ?', answer: 'Aucune limite artificielle. Vous pouvez traiter autant d’images que votre appareil peut en gérer.' },
    { question: 'Quels formats sont pris en charge ?', answer: 'PNG, JPEG, WebP, SVG, AVIF, GIF et ICO sont tous compatibles.' },
  ],
};
