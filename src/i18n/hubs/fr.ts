import type { HubTexts } from './types';

export const frHubs: HubTexts = {
  labels: {
    server: 'Utilise notre serveur',
    more: 'Autres collections',
    allTools: 'Les {count} outils',
  },
  pages: {
    'pdf-tools': {
      title: 'Outils PDF gratuits : fusionner, convertir, modifier, signer',
      description: '57 outils PDF gratuits au même endroit : fusionnez, divisez et compressez des PDF, convertissez depuis et vers Word ou des images, modifiez, signez et protégez. Sans inscription ni filigrane.',
      h1: 'Outils PDF',
      intro:
        'Tout pour travailler avec des PDF, gratuitement et sans compte : fusionnez et divisez des fichiers, transformez Word, Excel, PowerPoint et des images en PDF et inversement, modifiez, remplissez, signez et protégez-les. La plupart des outils fonctionnent dans votre navigateur, donc le PDF ne quitte pas votre appareil ; les quelques outils qui ont besoin de notre serveur sont signalés, et leurs fichiers sont supprimés aussitôt.',
      groups: {
        toPdf: 'Convertir en PDF',
        fromPdf: 'Convertir un PDF',
        edit: 'Modifier et annoter',
        pages: 'Organiser les pages',
        secure: 'Signer, protéger et nettoyer',
        fix: 'Compresser, réparer et vérifier',
      },
      faqs: [
        { question: 'Ces outils PDF sont-ils gratuits ?', answer: 'Oui. Tous les outils sont gratuits, sans compte, sans filigrane et sans limite quotidienne.' },
        {
          question: 'Mes PDF sont-ils envoyés en ligne ?',
          answer:
            'La plupart des outils fonctionnent dans votre navigateur : le fichier reste sur votre appareil. Les outils marqués « Utilise notre serveur », comme Word en PDF, Compresser PDF et OCR PDF, envoient le fichier par une connexion chiffrée et le suppriment dès que le résultat est renvoyé.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Outils de retouche photo gratuits : rogner, redimensionner',
      description: '42 outils gratuits de retouche photo dans votre navigateur : rognez, redimensionnez et faites pivoter, supprimez ou changez le fond, ajoutez du texte et des filigranes, corrigez les couleurs et adaptez vos images aux réseaux sociaux.',
      h1: 'Outils de retouche d’images',
      intro:
        'Des retouches rapides sans rien installer : rognez et redimensionnez, détourez ou remplacez le fond, ajoutez du texte, des filigranes et des bordures, améliorez la netteté et les couleurs, ou adaptez une image à Instagram, YouTube et d’autres réseaux. Tous les outils fonctionnent dans votre navigateur : vos photos ne sont jamais envoyées et gardent leur format dès que possible.',
      groups: {
        basics: 'Rogner, redimensionner et pivoter',
        background: 'Fonds et détourage',
        text: 'Texte, filigranes et annotations',
        enhance: 'Corriger et améliorer',
        social: 'Formats pour les réseaux sociaux',
        combine: 'Assembler et découper',
      },
      faqs: [
        { question: 'Faut-il installer une application ?', answer: 'Non. Les outils fonctionnent dans tout navigateur récent, sur ordinateur comme sur téléphone, et vos photos restent sur votre appareil.' },
        {
          question: 'Ma photo perd-elle en qualité ?',
          answer: 'Les retouches sont faites sur la photo en pleine taille, enregistrée dans son format d’origine dès que possible. Les JPG et WebP sont réenregistrés en haute qualité.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Convertisseur d’images gratuit : HEIC, JPG, PNG, WebP, AVIF',
      description: '26 convertisseurs d’images gratuits dans votre navigateur : HEIC en JPG, JPG en PNG, WebP et AVIF, GIF, BMP, TIFF et SVG vers des formats courants, plusieurs fichiers à la fois.',
      h1: 'Convertisseurs de format d’image',
      intro:
        'Passez une image au format qu’il vous faut : photos HEIC de l’iPhone en JPG, PNG en JPG ou WebP pour des fichiers plus légers, AVIF pour le web, ou GIF, BMP, TIFF et SVG vers des formats courants. La plupart des convertisseurs acceptent plusieurs fichiers à la fois, et tous fonctionnent dans votre navigateur : rien n’est envoyé. Vous hésitez ? Le Convertisseur d’image universel ouvre presque toutes les images et les enregistre en JPG, PNG, WebP ou AVIF.',
      groups: {
        any: 'Tous formats',
        heic: 'Photos d’iPhone (HEIC)',
        jpgPng: 'JPG et PNG',
        web: 'WebP et AVIF',
        other: 'GIF, BMP, TIFF et SVG',
        pdf: 'Vers PDF et texte',
      },
      faqs: [
        {
          question: 'Quel format choisir ?',
          answer: 'JPG pour des photos qui doivent s’ouvrir partout, PNG pour les captures, logos et la transparence, WebP ou AVIF pour des fichiers plus légers sur le web. Les photos HEIC d’un iPhone se partagent mieux en JPG.',
        },
        { question: 'Puis-je convertir plusieurs images à la fois ?', answer: 'Oui. Déposez plusieurs fichiers sur un convertisseur : ils sont convertis ensemble avec les mêmes réglages, puis téléchargés dans un seul ZIP.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Générateur et lecteur de QR codes et codes-barres gratuit',
      description: '15 outils gratuits pour créer des QR codes de liens, Wi-Fi, contacts, WhatsApp et paiements, générer des codes-barres EAN, UPC et ISBN, et lire des codes avec la caméra.',
      h1: 'Outils QR code et codes-barres',
      intro:
        'Créez un QR code pour un lien, un réseau Wi-Fi, une fiche contact, une discussion WhatsApp ou un paiement, générez des codes-barres EAN, UPC, ISBN, Data Matrix et PDF417, ou créez-en des centaines d’un coup à partir d’une liste et imprimez-les sur une feuille. Vous pouvez aussi lire des codes depuis une photo ou la caméra. Tout fonctionne dans votre navigateur, sans inscription.',
      groups: {
        qr: 'QR codes',
        barcodes: 'Codes-barres',
        read: 'Scanner et lire',
      },
      faqs: [
        { question: 'Les QR codes expirent-ils ?', answer: 'Non. Le contenu est stocké dans le code lui-même, pas derrière un lien à nous : il fonctionne tant que le code imprimé reste lisible.' },
        {
          question: 'Puis-je utiliser ces codes-barres sur des produits en magasin ?',
          answer: 'Les codes-barres respectent la norme, mais les numéros EAN et UPC des produits vendus en magasin doivent être attribués par GS1. Pour votre stock, vos rayonnages ou vos événements, n’importe quel numéro convient.',
        },
      ],
    },
    'image-utilities': {
      title: 'Utilitaires d’image gratuits : EXIF, pipette, DPI et plus',
      description: '21 outils gratuits pour analyser et mesurer des images : voyez et supprimez les métadonnées, prélevez des couleurs, changez le DPI, convertissez pixels en pouces ou cm, comparez des photos et copiez le texte d’une image.',
      h1: 'Utilitaires d’image',
      intro:
        'De petits outils pour les questions qu’on se pose sur les images : ce que révèlent les métadonnées d’une photo et comment les supprimer, quelles couleurs elle utilise, à quelle taille elle s’imprime selon le DPI, si deux photos diffèrent ou quel texte elle contient. Tous fonctionnent dans votre navigateur : vos images restent sur votre appareil.',
      groups: {
        inspect: 'Analyser des photos',
        colour: 'Couleurs',
        size: 'Tailles, DPI et impression',
        text: 'Texte et messages cachés',
      },
      faqs: [
        {
          question: 'Puis-je retirer la position d’une photo ?',
          answer: 'Oui. Supprimer les métadonnées d’une image efface la position GPS, les informations de l’appareil et les autres données EXIF, et la Visionneuse EXIF montre ce que contient une photo avant de la partager.',
        },
        {
          question: 'Quel DPI faut-il pour imprimer ?',
          answer: '300 DPI est la valeur habituelle pour les photos et les documents. Le DPI ne fixe que la taille imprimée, pas le nombre de pixels : Changer le DPI d’une image l’écrit dans le fichier, et les calculateurs Pixels en pouces et Pixels en cm indiquent la taille d’impression.',
        },
      ],
    },
  },
};
