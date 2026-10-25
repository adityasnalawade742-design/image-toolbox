import type { LocalizedToolItem } from '../types';

export const frTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Rogner une image",
    shortName: "Rogner",
    tagline: "Gardez la partie de la photo que vous voulez, avec les poignées, des valeurs en pixels exactes ou des formats prêts à l’emploi.",
    intro:
      "Rogner une image coupe une photo à la zone que vous sélectionnez et n’enregistre que cette zone, en pleine résolution. Utilisez-le pour supprimer des bords vides, cadrer un sujet ou adapter l’image au format d’une publication sur les réseaux sociaux. En plus du rognage libre, vous disposez de formats prédéfinis comme 1:1, 4:5, 9:16 et 16:9, de champs en pixels exacts et d’un mode cercle pour les photos de profil.",
    seoTitle: "Rogner une image en ligne – Gratuit, sans envoi",
    seoDescription:
      "Rognez une image en ligne gratuitement : déplacez le cadre ou saisissez des pixels exacts, formats 1:1, 4:5, 16:9 ou 9:16, export JPG, PNG, WebP ou AVIF.",
    keywords: [
      "rogner une image",
      "recadrer une photo en ligne",
      "rogner une image en carré",
      "recadrer une photo pour instagram",
      "rogner une image en 16:9",
      "rogner une image en rond",
      "recadrer une image sans perte de qualité",
    ],
    howToSteps: [
      {
        title: "Ajoutez votre photo",
        description:
          "Déposez une image dans la zone d’import, cliquez pour choisir un fichier ou collez-la avec Ctrl+V. Les fichiers JPG, PNG, WebP, AVIF, GIF et HEIC d’iPhone sont pris en charge.",
      },
      {
        title: "Sélectionnez la zone à garder",
        description:
          "Déplacez le cadre et ses poignées sur l’aperçu, ou cliquez sur un format comme Carré 1:1, Story 9:16 ou un format de réseau social. Pour un résultat précis, saisissez le décalage X, le décalage Y, la largeur et la hauteur en pixels.",
      },
      {
        title: "Choisissez la forme et le format",
        description:
          "Passez en mode Cercle pour un rognage rond. Le format d’origine est conservé par défaut, ou vous pouvez choisir JPG, PNG, WebP ou AVIF sous Enregistrer en.",
      },
      {
        title: "Téléchargez l’image rognée",
        description:
          "Cliquez sur Télécharger pour enregistrer uniquement la zone sélectionnée en pleine résolution, ou copiez-la dans le presse-papiers.",
      },
    ],
    features: [
      {
        title: "Formats et tailles pour les réseaux sociaux",
        description:
          "Original, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 et 21:9, ainsi que les formats portrait Instagram (4:5), Reels et TikTok, miniatures YouTube et épingles Pinterest.",
      },
      {
        title: "Valeurs au pixel près",
        description:
          "Saisissez le décalage, la largeur et la hauteur en pixels, verrouillez les proportions si besoin et voyez la taille finale avant d’enregistrer.",
      },
      {
        title: "Rognage en cercle pour les avatars",
        description:
          "Le mode cercle verrouille le cadre en carré et découpe une image ronde. Enregistrez en PNG ou WebP pour garder les coins transparents.",
      },
      {
        title: "Découpé à partir des pixels d’origine",
        description:
          "L’aperçu peut être réduit pour aller plus vite, mais le fichier téléchargé est découpé dans la photo en pleine résolution, sur votre appareil. Rien n’est envoyé.",
      },
    ],
    faqs: [
      {
        question: "Le rognage réduit-il la qualité de l’image ?",
        answer:
          "Le rognage supprime seulement les pixels hors du cadre ; le reste reste net. Si vous enregistrez en JPG, WebP ou AVIF, l’image est de nouveau compressée : utilisez une qualité de 90 % ou plus, ou enregistrez en PNG, pour rester proche de l’original.",
      },
      {
        question: "Comment rogner une photo en carré pour Instagram ?",
        answer:
          "Cliquez sur Carré 1:1 ou Instagram (1:1) et placez le cadre sur la partie à garder. Pour une publication portrait plus haute, utilisez plutôt le format portrait (4:5).",
      },
      {
        question: "Comment créer une photo de profil ronde ?",
        answer:
          "Choisissez le mode Cercle, placez le cercle sur le visage et enregistrez en PNG ou WebP. Le JPG ne gère pas la transparence : la zone hors du cercle serait remplie de blanc.",
      },
      {
        question: "Puis-je rogner une photo HEIC d’iPhone ?",
        answer:
          "Oui. Le fichier HEIC est converti dans votre navigateur à l’ouverture. Le résultat est enregistré en JPG par défaut, et vous pouvez choisir PNG, WebP ou AVIF.",
      },
      {
        question: "Les données EXIF de la photo sont-elles conservées après le rognage ?",
        answer:
          "Non. Le nouveau fichier est créé uniquement à partir des pixels de l’image : les informations de l’appareil photo et la position GPS de l’original n’y sont pas copiées.",
      },
      {
        question: "Puis-je rogner un GIF animé ?",
        answer:
          "Vous pouvez ouvrir un GIF, mais le résultat est une seule image fixe, car les fichiers JPG, PNG, WebP et AVIF sont enregistrés ici sans animation.",
      },
    ],
  },
  "resize-image": {
    name: "Redimensionner une image",
    shortName: "Redimensionner",
    tagline: "Modifiez la largeur et la hauteur d’une image en pixels ou en pourcentage, avec ou sans conserver les proportions.",
    intro:
      "Redimensionner une image modifie les dimensions en pixels d’une photo ou d’un graphique. Utilisez-le pour réduire une grande photo d’appareil afin de l’envoyer par e-mail ou de la publier sur un site, ou pour obtenir une taille précise comme 1080 × 1080. Vous pouvez saisir une largeur et une hauteur, ou appliquer un pourcentage de 10 % à 300 %, et l’option Ne pas agrandir évite d’agrandir une image par erreur.",
    seoTitle: "Redimensionner une image – En pixels ou en %",
    seoDescription:
      "Redimensionnez une image en ligne gratuitement : largeur et hauteur en pixels ou en pourcentage, proportions conservées, export JPG, PNG, WebP ou AVIF.",
    keywords: [
      "redimensionner une image",
      "redimensionner une image en ligne",
      "changer la taille d’une image en pixels",
      "redimensionner une photo sans perte de qualité",
      "redimensionner une image en 1080x1080",
      "réduire la taille d’une image",
      "redimensionner une image en pourcentage",
    ],
    howToSteps: [
      {
        title: "Ouvrez votre image",
        description: "Déposez, choisissez ou collez (Ctrl+V) une image JPG, PNG, WebP, AVIF ou HEIC d’iPhone.",
      },
      {
        title: "Indiquez la nouvelle taille",
        description:
          "En mode Pixels, saisissez une largeur ou une hauteur ; si Conserver les proportions est activé, l’autre côté se met à jour tout seul. En mode Pourcentage, utilisez le curseur ou les boutons de 25 % à 200 %.",
      },
      {
        title: "Choisissez le format du fichier",
        description:
          "Le format d’origine est conservé par défaut. Vous pouvez choisir JPG, PNG, WebP ou AVIF et régler la qualité pour JPG, WebP et AVIF.",
      },
      {
        title: "Téléchargez le résultat",
        description:
          "Cliquez sur Télécharger pour enregistrer l’image redimensionnée, ou envoyez-la vers Compresser si vous voulez aussi un fichier plus léger.",
      },
    ],
    features: [
      {
        title: "En pixels ou en pourcentage",
        description: "Saisissez des dimensions exactes jusqu’à 10 000 pixels, ou redimensionnez toute l’image de 10 % à 300 %.",
      },
      {
        title: "Proportions verrouillées",
        description:
          "Gardez les proportions d’origine pour que l’image ne soit pas déformée, ou déverrouillez-les pour régler la largeur et la hauteur séparément.",
      },
      {
        title: "Pas d’agrandissement involontaire",
        description:
          "La taille est limitée aux dimensions d’origine : une petite image n’est jamais agrandie et rendue floue par accident.",
      },
      {
        title: "Garde votre type de fichier",
        description: "Un JPG reste un JPG et un PNG reste un PNG, sauf si vous choisissez un autre format.",
      },
    ],
    faqs: [
      {
        question: "Comment redimensionner une image sans perte de qualité ?",
        answer:
          "Réduire une image la garde nette. L’agrandir au-delà de sa taille d’origine ne peut pas ajouter de détails, elle paraîtra donc plus floue ; activez Ne pas agrandir pour l’éviter. Enregistrez en PNG, ou utilisez une qualité de 90 % ou plus pour JPG et WebP.",
      },
      {
        question: "Redimensionner réduit-il le poids du fichier ?",
        answer:
          "En général, oui. Diviser la largeur et la hauteur par deux laisse environ un quart des pixels, donc le fichier devient bien plus léger. Pour un fichier encore plus petit, compressez ensuite le résultat.",
      },
      {
        question: "Puis-je redimensionner à une taille exacte comme 1080 × 1080 ?",
        answer:
          "Oui. Désactivez Conserver les proportions et saisissez les deux valeurs. Si l’original n’est pas carré, il sera déformé : rognez-le d’abord en 1:1, puis redimensionnez-le.",
      },
      {
        question: "Puis-je redimensionner plusieurs images à la fois ?",
        answer:
          "Cette page redimensionne une image à la fois. Pour redimensionner jusqu’à 50 images en une seule fois et les télécharger dans un ZIP, utilisez le Redimensionneur d’images par lot.",
      },
      {
        question: "Puis-je redimensionner les photos de mon iPhone ?",
        answer:
          "Oui. Les photos HEIC sont converties dans votre navigateur et l’image redimensionnée est enregistrée en JPG par défaut.",
      },
    ],
  },
  "compress-image": {
    name: "Compresser une image",
    shortName: "Compresser",
    tagline: "Allégez un fichier image en choisissant un format et une qualité, et voyez la nouvelle taille avant de télécharger.",
    intro:
      "Compresser une image réduit le poids d’une photo pour qu’elle se charge plus vite sur un site ou respecte la limite d’un e-mail ou d’un formulaire d’envoi. L’image est enregistrée de nouveau en WebP (par défaut), AVIF, JPG ou PNG à la qualité choisie, et la taille estimée ainsi que le pourcentage gagné s’affichent pendant que vous déplacez le curseur. Le mode Taille du fichier règle la qualité pour vous quand vous devez rester sous une limite comme 100 KB.",
    seoTitle: "Compresser une image en ligne – Réduire le poids",
    seoDescription:
      "Compressez une image en ligne gratuitement : WebP, AVIF, JPG ou PNG, qualité ou taille cible en KB, gain affiché avant le téléchargement. Sans envoi.",
    keywords: [
      "compresser une image",
      "réduire le poids d’une image",
      "compresser un jpg",
      "compresser une image à 100 ko",
      "compresseur d’image en ligne",
      "compresser une photo pour un e-mail",
      "compresser un png",
      "convertir et compresser en webp",
    ],
    howToSteps: [
      {
        title: "Ajoutez une image",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Choisissez le format de sortie",
        description:
          "WebP est sélectionné par défaut. AVIF donne en général les fichiers les plus légers mais met plus de temps à encoder, JPG s’ouvre partout, et PNG est sans perte, donc c’est lui qui fait gagner le moins de place.",
      },
      {
        title: "Réglez la qualité ou une taille cible",
        description:
          "Déplacez le curseur de qualité et suivez l’estimation de taille, ou passez en mode Taille du fichier et saisissez une taille en KB, ou cliquez sur 50, 100, 200 ou 500 KB.",
      },
      {
        title: "Vérifiez et téléchargez",
        description: "Regardez l’aperçu et le pourcentage gagné, puis cliquez sur Télécharger.",
      },
    ],
    features: [
      {
        title: "Estimation de la taille en direct",
        description:
          "La nouvelle taille et le pourcentage gagné se mettent à jour quand vous changez les réglages, et un avertissement s’affiche si le résultat est plus lourd que l’original.",
      },
      {
        title: "AVIF, WebP, JPG et PNG",
        description:
          "Quatre formats de sortie, dont AVIF, encodé directement dans votre navigateur grâce à un encodeur WebAssembly.",
      },
      {
        title: "Mode taille cible",
        description:
          "Saisissez une taille en KB et l’outil choisit la qualité adaptée. C’est une estimation : vérifiez la taille affichée avant de télécharger.",
      },
      {
        title: "Les dimensions ne changent pas",
        description:
          "La compression garde la largeur et la hauteur. Pour un fichier beaucoup plus léger, redimensionnez d’abord l’image, puis compressez-la.",
      },
    ],
    faqs: [
      {
        question: "De combien mon image va-t-elle s’alléger ?",
        answer:
          "Cela dépend de l’image. Les grandes photos d’appareil s’allègent souvent beaucoup en WebP ou AVIF entre 70 % et 85 % de qualité, alors que les petits graphiques ou les fichiers déjà compressés gagnent parfois très peu. L’estimation en direct montre le résultat avant le téléchargement.",
      },
      {
        question: "Quel format donne le fichier le plus léger : AVIF, WebP ou JPG ?",
        answer:
          "À qualité visuelle comparable, AVIF est généralement le plus léger, suivi de WebP puis de JPG. AVIF met plus de temps à encoder dans le navigateur, surtout pour les grandes photos, et certains anciens logiciels ne savent pas l’ouvrir.",
      },
      {
        question: "Comment compresser une image à 100 KB ?",
        answer:
          "Choisissez Taille du fichier et cliquez sur 100 KB. Si la taille affichée dépasse encore 100 KB, baissez un peu la qualité, ou réduisez d’abord les dimensions avec Redimensionner une image.",
      },
      {
        question: "La compression va-t-elle dégrader ma photo ?",
        answer:
          "WebP, AVIF et JPG suppriment des détails peu visibles. Entre 75 % et 90 % de qualité, la plupart des photos semblent identiques à taille d’affichage normale ; des réglages très bas provoquent du flou et des blocs.",
      },
      {
        question: "Pourquoi le fichier compressé est-il plus lourd que l’original ?",
        answer:
          "Cela arrive quand l’original était déjà bien optimisé, ou quand une photo est enregistrée en PNG. Essayez WebP ou AVIF, ou une qualité plus basse.",
      },
      {
        question: "Les données EXIF sont-elles supprimées lors de la compression ?",
        answer:
          "Oui. Le nouveau fichier est créé à partir des pixels de l’image : les informations de l’appareil photo et la position GPS n’y figurent pas.",
      },
    ],
  },
  "rotate-image": {
    name: "Faire pivoter une image",
    shortName: "Pivoter",
    tagline: "Faites pivoter une image de 90°, 180° ou de n’importe quel angle entre -180° et 180°, puis enregistrez-la au format voulu.",
    intro:
      "Faire pivoter une image corrige les photos qui s’affichent sur le côté ou à l’envers, et redresse celles qui sont légèrement penchées. Utilisez les boutons 90° pour une rotation rapide, ou le curseur Angle personnalisé pour les petites corrections. Si l’angle n’est pas un multiple de 90°, la zone de l’image s’agrandit pour contenir toute l’image pivotée : aucun coin n’est coupé.",
    seoTitle: "Faire pivoter une image – 90°, 180° ou tout angle",
    seoDescription:
      "Faites pivoter une image en ligne gratuitement : 90° à gauche ou à droite, 180° ou angle libre pour la redresser. Export JPG, PNG, WebP ou AVIF.",
    keywords: [
      "faire pivoter une image",
      "pivoter une photo en ligne",
      "tourner une image de 90 degrés",
      "tourner une photo",
      "redresser une photo",
      "pivoter un jpg",
      "faire pivoter une image d’un angle précis",
    ],
    howToSteps: [
      {
        title: "Ouvrez l’image",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Faites-la pivoter",
        description:
          "Cliquez sur +90° pour tourner dans le sens des aiguilles d’une montre, sur -90° pour tourner dans l’autre sens, ou sur 180° pour la mettre à l’envers. Pour une petite correction, déplacez le curseur Angle personnalisé.",
      },
      {
        title: "Choisissez le format",
        description:
          "Le format d’origine est conservé par défaut. Après un angle personnalisé, PNG, WebP et AVIF gardent les nouveaux coins transparents, tandis que JPG les remplit de blanc.",
      },
      {
        title: "Téléchargez",
        description: "Cliquez sur Télécharger pour enregistrer l’image pivotée, ou copiez-la dans le presse-papiers.",
      },
    ],
    features: [
      {
        title: "Rotations rapides de 90° et 180°",
        description: "Corrigez en un clic une photo sur le côté ou à l’envers, et utilisez Réinitialiser pour revenir au départ.",
      },
      {
        title: "N’importe quel angle",
        description: "Redressez un horizon ou un document penché avec le curseur, degré par degré, de -180° à 180°.",
      },
      {
        title: "Rien n’est coupé",
        description: "Pour les angles personnalisés, la zone de sortie est agrandie pour contenir toute l’image pivotée.",
      },
      {
        title: "Compatible avec les photos d’iPhone",
        description: "Les photos HEIC sont converties dans votre navigateur : inutile de les convertir avant.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi ma photo s’affiche-t-elle sur le côté dans certaines applications ?",
        answer:
          "Les téléphones enregistrent souvent l’image dans un seul sens et ajoutent une indication de rotation dans les données EXIF, que certaines applications ignorent. Le fichier téléchargé ici a les pixels réellement tournés, sans indication de rotation : il s’affiche de la même façon partout.",
      },
      {
        question: "Faire pivoter une image réduit-il sa qualité ?",
        answer:
          "Une rotation de 90° ou 180° déplace les pixels sans les modifier. Les autres angles obligent à recalculer les pixels, ce qui adoucit très légèrement l’image. L’enregistrement en JPG, WebP ou AVIF la compresse aussi de nouveau, ce que le PNG évite.",
      },
      {
        question: "Que contiennent les coins après une rotation personnalisée ?",
        answer:
          "La zone de l’image s’agrandit pour contenir l’image tournée. En PNG, WebP et AVIF, les nouveaux coins sont transparents ; en JPG, ils sont blancs.",
      },
      {
        question: "Puis-je faire pivoter une photo HEIC d’iPhone ?",
        answer:
          "Oui. La photo est convertie dans votre navigateur et la version pivotée est enregistrée en JPG, sauf si vous choisissez un autre format.",
      },
    ],
  },
  "flip-image": {
    name: "Retourner une image",
    shortName: "Retourner",
    tagline: "Créez un effet miroir horizontal ou vertical, par exemple pour corriger un selfie inversé ou un texte à l’envers.",
    intro:
      "Retourner une image crée une copie en miroir d’une photo. Un retournement horizontal inverse la gauche et la droite, ce qui corrige les selfies pris avec la caméra frontale où le texte apparaît à l’envers. Un retournement vertical met l’image tête en bas, comme un reflet dans l’eau, et combiner les deux donne le même résultat qu’une rotation de 180°.",
    seoTitle: "Retourner une image – Miroir horizontal ou vertical",
    seoDescription:
      "Retournez une image en ligne gratuitement : miroir horizontal ou vertical pour corriger un selfie ou un texte inversé. Export JPG, PNG, WebP ou AVIF.",
    keywords: [
      "retourner une image",
      "image miroir en ligne",
      "retourner une photo horizontalement",
      "retourner une image verticalement",
      "inverser un selfie",
      "inverser une image gauche droite",
      "effet miroir photo",
    ],
    howToSteps: [
      {
        title: "Ouvrez l’image",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Choisissez le sens",
        description:
          "Cliquez sur Horizontal pour inverser la gauche et la droite, ou sur Vertical pour mettre l’image à l’envers. Cliquez de nouveau sur un bouton pour annuler, ou utilisez Les deux ou Réinitialiser.",
      },
      {
        title: "Choisissez le format",
        description: "Le format d’origine est conservé par défaut, ou vous pouvez enregistrer en JPG, PNG, WebP ou AVIF.",
      },
      {
        title: "Téléchargez",
        description: "Cliquez sur Télécharger pour enregistrer l’image en miroir, ou copiez-la dans le presse-papiers.",
      },
    ],
    features: [
      {
        title: "Miroir horizontal et vertical",
        description: "Retournez dans un sens ou dans les deux, et voyez immédiatement le résultat dans l’aperçu.",
      },
      {
        title: "Les pixels ne sont pas modifiés",
        description: "Un retournement déplace seulement les pixels. Enregistrez en PNG pour garder chaque pixel exactement tel quel.",
      },
      {
        title: "Garde votre format",
        description: "Par défaut, un JPG est enregistré en JPG et un PNG en PNG : vous récupérez le même type de fichier.",
      },
      {
        title: "Traité dans votre navigateur",
        description: "L’image est retournée sur votre appareil et n’est jamais envoyée sur un serveur.",
      },
    ],
    faqs: [
      {
        question: "Quelle est la différence entre retourner et faire pivoter ?",
        answer:
          "Retourner crée une image miroir : le texte se lit à l’envers. Faire pivoter tourne toute l’image autour de son centre, et le texte reste lisible.",
      },
      {
        question: "Comment corriger un selfie inversé ?",
        answer:
          "Beaucoup de caméras frontales enregistrent les selfies en miroir. Ouvrez la photo, cliquez sur Horizontal et téléchargez-la : le texte en arrière-plan se lit de nouveau correctement.",
      },
      {
        question: "Retourner une image réduit-il sa qualité ?",
        answer:
          "Le retournement lui-même ne modifie aucun pixel. Si vous enregistrez en JPG, WebP ou AVIF, l’image est de nouveau compressée : utilisez une qualité élevée ou le PNG.",
      },
      {
        question: "Puis-je retourner une image dans les deux sens à la fois ?",
        answer:
          "Oui. Les deux applique un miroir horizontal et vertical, ce qui revient à faire pivoter l’image de 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Convertisseur d’image universel",
    shortName: "Convertisseur",
    tagline: "Convertissez des images JPG, PNG, WebP, AVIF, GIF, BMP, SVG ou HEIC d’iPhone en JPG, PNG, WebP ou AVIF.",
    intro:
      "Le convertisseur d’image universel change le format d’un fichier image. Il ouvre toute image que votre navigateur sait afficher, comme JPG, PNG, WebP, AVIF, GIF, BMP et SVG, ainsi que les photos HEIC d’iPhone, et l’enregistre en JPG, PNG, WebP ou AVIF. Les photos JPG et HEIC sont réglées sur WebP par défaut et les autres images sur PNG, mais vous pouvez choisir l’un des quatre formats.",
    seoTitle: "Convertisseur d’image – JPG, PNG, WebP, AVIF, HEIC",
    seoDescription:
      "Convertisseur d’image gratuit dans votre navigateur : HEIC, PNG, JPG, WebP, GIF, BMP ou SVG en JPG, PNG, WebP ou AVIF, qualité réglable. Sans envoi.",
    keywords: [
      "convertisseur d’image",
      "convertir une image en jpg",
      "convertir heic en jpg",
      "convertir une image en webp",
      "convertir une image en avif",
      "convertir gif en png",
      "convertir bmp en jpg",
      "convertir le format d’une image en ligne",
    ],
    howToSteps: [
      {
        title: "Ouvrez votre image",
        description: "Déposez, choisissez ou collez une image dans un format que votre navigateur sait ouvrir, ou une photo HEIC d’iPhone.",
      },
      {
        title: "Choisissez le format de sortie",
        description: "Sous Enregistrer en, sélectionnez JPG, PNG, WebP ou AVIF.",
      },
      {
        title: "Réglez la qualité et le fond",
        description:
          "Pour JPG, WebP et AVIF, réglez la qualité. Si l’image a des zones transparentes et que vous avez choisi JPG, choisissez la couleur qui les remplit.",
      },
      {
        title: "Téléchargez le fichier converti",
        description: "Cliquez sur Télécharger. L’AVIF peut prendre quelques secondes pour les grandes photos, car il est encodé dans votre navigateur.",
      },
    ],
    features: [
      {
        title: "De nombreux formats d’entrée",
        description: "Ouvre JPG, PNG, WebP, AVIF, GIF, BMP, SVG et les autres formats pris en charge par votre navigateur, ainsi que HEIC et HEIF.",
      },
      {
        title: "Quatre formats modernes en sortie",
        description: "Enregistrez en JPG, PNG, WebP ou AVIF. L’AVIF est encodé sur votre appareil avec un encodeur WebAssembly.",
      },
      {
        title: "Transparence bien gérée",
        description: "PNG, WebP et AVIF gardent les zones transparentes. Pour le JPG, vous choisissez la couleur qui les remplace.",
      },
      {
        title: "Contrôle de la qualité",
        description: "Réglez la qualité de 10 % à 100 % pour les formats avec perte, afin d’équilibrer poids et détails.",
      },
    ],
    faqs: [
      {
        question: "Comment convertir un HEIC en JPG ?",
        answer:
          "Ouvrez la photo HEIC, sélectionnez JPG sous Enregistrer en et cliquez sur Télécharger. La conversion se fait dans votre navigateur : la photo n’est envoyée nulle part.",
      },
      {
        question: "Quel format choisir ?",
        answer:
          "JPG pour les photos qui doivent s’ouvrir partout, PNG pour les captures d’écran, logos et graphiques aux bords nets ou avec transparence, WebP pour des images web plus légères, et AVIF pour les fichiers les plus légers dans les navigateurs récents.",
      },
      {
        question: "Puis-je convertir en GIF, BMP ou SVG ?",
        answer:
          "Non. Ces formats peuvent être ouverts, mais la sortie est toujours en JPG, PNG, WebP ou AVIF. Un GIF animé devient une seule image fixe.",
      },
      {
        question: "Mon fond transparent sera-t-il conservé ?",
        answer:
          "Oui, si vous enregistrez en PNG, WebP ou AVIF. Le JPG ne gère pas la transparence : les zones transparentes sont remplies avec la couleur choisie.",
      },
      {
        question: "La conversion est-elle sans perte ?",
        answer:
          "L’enregistrement en PNG est sans perte. JPG, WebP et AVIF sont des formats avec perte : une qualité plus élevée garde plus de détails mais donne un fichier plus lourd.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG en PNG",
    shortName: "JPG → PNG",
    tagline: "Transformez une photo JPG en fichier PNG qui ne perdra plus de qualité quand vous la modifierez et l’enregistrerez de nouveau.",
    intro:
      "JPG en PNG convertit une image JPEG au format PNG. Le PNG utilise une compression sans perte : l’image ne perd plus de qualité à chaque modification et enregistrement, ce qui est utile pour les captures d’écran, les graphiques et les fichiers que vous comptez retravailler. Le PNG a exactement les mêmes pixels et les mêmes dimensions que votre JPG, mais le fichier est généralement plus lourd.",
    seoTitle: "Convertir JPG en PNG – Gratuit, dans le navigateur",
    seoDescription:
      "Convertissez un JPG en PNG gratuitement : un PNG sans perte, avec les mêmes pixels et dimensions que votre JPEG, créé dans votre navigateur. Sans envoi.",
    keywords: [
      "convertir jpg en png",
      "jpg en png",
      "jpeg en png",
      "convertisseur jpg en png",
      "transformer un jpg en png",
      "enregistrer un jpg en png",
    ],
    howToSteps: [
      {
        title: "Ouvrez un JPG",
        description: "Déposez un fichier JPG ou JPEG dans la zone d’import, cliquez pour en choisir un ou collez-le avec Ctrl+V.",
      },
      {
        title: "Vérifiez l’aperçu",
        description: "La sortie est toujours en PNG : il n’y a aucun réglage à modifier. Les dimensions restent les mêmes.",
      },
      {
        title: "Téléchargez le PNG",
        description: "Cliquez sur Télécharger PNG, ou envoyez l’image vers un autre outil, comme Redimensionner, avec les boutons Étape suivante.",
      },
    ],
    features: [
      {
        title: "Copie exacte des pixels",
        description: "Chaque pixel du JPG est stocké dans le PNG sans nouvelle perte due à la compression.",
      },
      {
        title: "Idéal pour les retouches répétées",
        description: "Un PNG peut être modifié et enregistré de nombreuses fois sans nouveaux défauts de compression.",
      },
      {
        title: "Mêmes dimensions",
        description: "Le PNG a la même largeur et la même hauteur que le JPG d’origine.",
      },
      {
        title: "Aucun envoi",
        description: "Le fichier est converti dans l’onglet de votre navigateur et reste sur votre appareil.",
      },
    ],
    faqs: [
      {
        question: "Convertir un JPG en PNG améliore-t-il la qualité ?",
        answer:
          "Non. Le PNG garde l’image exactement telle qu’elle est, mais il ne peut pas récupérer les détails déjà supprimés par la compression JPEG.",
      },
      {
        question: "La conversion en PNG rend-elle le fond transparent ?",
        answer:
          "Non. Un JPG n’a pas de transparence : le PNG garde le même fond uni. Pour supprimer le fond, utilisez l’outil Supprimer l’arrière-plan.",
      },
      {
        question: "Pourquoi le PNG est-il plus lourd que le JPG ?",
        answer:
          "Le PNG stocke chaque pixel sans compression avec perte, alors que le JPG supprime les détails fins pour gagner de la place. Les photos enregistrées en PNG sont souvent plusieurs fois plus lourdes.",
      },
      {
        question: "Puis-je convertir plusieurs JPG en PNG à la fois ?",
        answer:
          "Cette page convertit un fichier à la fois. Le Redimensionneur d’images par lot peut enregistrer jusqu’à 50 images en PNG dans un seul ZIP si vous réglez l’échelle sur 100 %.",
      },
      {
        question: "Les données EXIF du JPG sont-elles conservées ?",
        answer:
          "Non. Le PNG est créé uniquement à partir des pixels : les informations de l’appareil photo et la position GPS ne sont pas copiées.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG en JPG",
    shortName: "PNG → JPG",
    tagline: "Convertissez un PNG en fichier JPG plus léger et choisissez la couleur qui remplace les zones transparentes.",
    intro:
      "PNG en JPG transforme une image PNG en JPEG, généralement bien plus léger pour les photos et accepté par presque tous les sites et applications. Le JPEG ne gère pas la transparence : vous choisissez le blanc, le noir ou une couleur personnalisée pour remplir les zones transparentes. Vous pouvez aussi régler la qualité du JPG de 10 % à 100 %.",
    seoTitle: "Convertir PNG en JPG – Choix de la couleur de fond",
    seoDescription:
      "Convertissez un PNG en JPG gratuitement : fond blanc, noir ou personnalisé pour les zones transparentes, qualité réglable. Dans votre navigateur, sans envoi.",
    keywords: [
      "convertir png en jpg",
      "png en jpg",
      "png en jpeg",
      "png en jpg fond blanc",
      "convertisseur png en jpg",
      "réduire le poids d’un png",
    ],
    howToSteps: [
      {
        title: "Ouvrez un PNG",
        description: "Déposez un fichier PNG dans la zone d’import, cliquez pour en choisir un ou collez-le avec Ctrl+V.",
      },
      {
        title: "Choisissez la couleur de fond",
        description: "Choisissez Blanc, Noir ou n’importe quelle couleur avec le sélecteur. Elle remplit toutes les zones transparentes.",
      },
      {
        title: "Réglez la qualité",
        description: "85 % est un bon réglage par défaut. Utilisez une valeur plus élevée pour les images avec du texte ou des traits fins.",
      },
      {
        title: "Téléchargez le JPG",
        description: "Cliquez sur Télécharger JPG pour enregistrer le fichier converti.",
      },
    ],
    features: [
      {
        title: "La couleur de fond de votre choix",
        description: "Les pixels transparents et semi-transparents sont fondus sur du blanc, du noir ou une couleur personnalisée.",
      },
      {
        title: "Qualité réglable",
        description: "Choisissez de 10 % à 100 % pour équilibrer le poids du fichier et les détails.",
      },
      {
        title: "Des photos plus légères",
        description: "Les photos et les captures d’écran détaillées sont généralement bien plus légères en JPG qu’en PNG.",
      },
      {
        title: "Mêmes dimensions",
        description: "Le JPG garde exactement la largeur et la hauteur du PNG.",
      },
    ],
    faqs: [
      {
        question: "Que devient le fond transparent ?",
        answer:
          "Le JPG ne gère pas la transparence : les pixels transparents et semi-transparents sont fondus sur la couleur de fond choisie. Le blanc est sélectionné par défaut.",
      },
      {
        question: "Le JPG sera-t-il plus léger que le PNG ?",
        answer:
          "Pour les photos et les images riches en couleurs, généralement oui, souvent bien plus léger. Pour les graphiques simples avec peu de couleurs, le PNG est parfois déjà léger, et le JPG peut même être plus lourd.",
      },
      {
        question: "Quelle qualité choisir ?",
        answer:
          "85 %, la valeur par défaut, convient à la plupart des photos. Utilisez 90 % à 100 % pour les images avec du texte ou des détails fins, et des valeurs plus basses quand le poids compte plus que les détails.",
      },
      {
        question: "Pourquoi le texte est-il flou dans mon JPG ?",
        answer:
          "La compression JPEG peut adoucir les bords et ajouter de petites taches autour du texte et des traits nets. Augmentez la qualité, ou gardez les logos et les captures d’écran en PNG ou WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG en WebP",
    shortName: "JPG → WebP",
    tagline: "Convertissez vos photos JPG en WebP pour des images plus légères et des pages web plus rapides.",
    intro:
      "JPG en WebP convertit vos photos JPEG au format WebP, que tous les principaux navigateurs actuels savent afficher. À qualité visuelle comparable, un fichier WebP est généralement plus léger que la même image en JPG, donc les pages qui l’utilisent se chargent plus vite. Vous réglez la qualité avec un curseur de 10 % à 100 %, et l’image garde ses dimensions d’origine.",
    seoTitle: "Convertir JPG en WebP – Images web plus légères",
    seoDescription:
      "Convertissez un JPG en WebP gratuitement : des images plus légères pour un site plus rapide, qualité de 10 % à 100 %, taille d’origine conservée. Sans envoi.",
    keywords: [
      "convertir jpg en webp",
      "jpg en webp",
      "jpeg en webp",
      "convertisseur jpg en webp",
      "convertir des photos en webp pour un site",
      "convertisseur d’image webp",
    ],
    howToSteps: [
      {
        title: "Ouvrez un JPG",
        description: "Déposez une photo JPG ou JPEG dans la zone d’import, cliquez pour en choisir une ou collez-la avec Ctrl+V.",
      },
      {
        title: "Réglez la qualité",
        description: "Commencez vers 80 %. Une valeur plus élevée garde plus de détails ; une valeur plus basse donne des fichiers plus légers.",
      },
      {
        title: "Téléchargez le WebP",
        description: "Cliquez sur Télécharger WebP et comparez le poids du nouveau fichier avec l’original.",
      },
    ],
    features: [
      {
        title: "Plus léger à qualité comparable",
        description: "Pour une photo d’aspect identique, le WebP demande généralement moins d’octets que le JPG.",
      },
      {
        title: "Curseur de qualité",
        description: "Choisissez une qualité de 10 % à 100 % selon la vitesse de votre page et le niveau de détail voulu.",
      },
      {
        title: "Dimensions d’origine",
        description: "La photo est convertie sans changer sa largeur ni sa hauteur.",
      },
      {
        title: "Converti sur votre appareil",
        description: "Votre photo est traitée dans le navigateur et n’est pas envoyée.",
      },
    ],
    faqs: [
      {
        question: "Le WebP est-il meilleur que le JPG ?",
        answer:
          "Pour un site web, le WebP donne généralement des fichiers plus légers à qualité visuelle égale et peut aussi gérer la transparence. Le JPG reste accepté par davantage d’anciens logiciels, d’imprimantes et de formulaires d’envoi.",
      },
      {
        question: "Tous les navigateurs prennent-ils en charge le WebP ?",
        answer:
          "Les versions actuelles de Chrome, Edge, Firefox et Safari affichent les images WebP. Certaines anciennes applications et certains anciens systèmes ne savent pas les ouvrir.",
      },
      {
        question: "Pourquoi ai-je obtenu un PNG au lieu d’un WebP ?",
        answer:
          "Certains navigateurs, dont certaines versions de Safari, savent afficher le WebP mais pas en créer. Dans ce cas, l’outil vous prévient et enregistre un PNG ; utilisez Chrome, Edge ou Firefox pour obtenir un fichier WebP.",
      },
      {
        question: "Comment voir le poids du fichier avant de le télécharger ?",
        answer:
          "Ce convertisseur n’affiche pas d’estimation de taille. Compresser une image, avec WebP sélectionné, affiche la taille prévue et le pourcentage gagné pendant que vous réglez la qualité.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG en WebP",
    shortName: "PNG → WebP",
    tagline: "Convertissez vos images PNG en WebP en gardant les fonds transparents, avec un fichier généralement bien plus léger.",
    intro:
      "PNG en WebP convertit des fichiers PNG, comme des captures d’écran, des logos et des graphiques, au format WebP. Le WebP gère la transparence : les zones transparentes le restent après la conversion. Le résultat est généralement bien plus léger que le PNG, et un curseur de qualité vous permet de garder le texte et les traits fins bien nets.",
    seoTitle: "Convertir PNG en WebP – Transparence conservée",
    seoDescription:
      "Convertissez un PNG en WebP gratuitement : fond transparent conservé, fichier généralement bien plus léger et qualité réglable. Dans votre navigateur.",
    keywords: [
      "convertir png en webp",
      "png en webp",
      "png en webp transparent",
      "convertisseur png en webp",
      "réduire le poids d’un png pour un site",
      "webp transparent",
    ],
    howToSteps: [
      {
        title: "Ouvrez un PNG",
        description: "Déposez un fichier PNG dans la zone d’import, cliquez pour en choisir un ou collez une capture d’écran avec Ctrl+V.",
      },
      {
        title: "Réglez la qualité",
        description: "Utilisez 90 % ou plus pour les logos, le texte et les captures d’écran ; 75 % à 85 % suffit généralement pour les photos.",
      },
      {
        title: "Téléchargez le WebP",
        description: "Cliquez sur Télécharger WebP. Les zones transparentes restent transparentes dans le nouveau fichier.",
      },
    ],
    features: [
      {
        title: "Transparence conservée",
        description: "Le canal alpha de votre PNG est enregistré dans le WebP : logos et icônes gardent leur fond transparent.",
      },
      {
        title: "Des fichiers bien plus légers",
        description: "La compression WebP réduit généralement les captures d’écran et les graphiques PNG à une fraction de leur poids.",
      },
      {
        title: "Contrôle de la qualité",
        description: "Réglez la qualité de 10 % à 100 % selon le niveau de détail dont l’image a besoin.",
      },
      {
        title: "Mêmes dimensions",
        description: "Le WebP garde exactement la largeur et la hauteur du PNG.",
      },
    ],
    faqs: [
      {
        question: "La conversion PNG en WebP garde-t-elle le fond transparent ?",
        answer: "Oui. Le WebP gère la transparence : les pixels transparents et semi-transparents sont conservés.",
      },
      {
        question: "Pourquoi le WebP est-il tellement plus léger que le PNG ?",
        answer:
          "Le PNG est sans perte et stocke chaque pixel exactement. Ici, le WebP utilise une compression avec perte, qui supprime les détails peu visibles et fait gagner beaucoup de place.",
      },
      {
        question: "Quelle qualité utiliser pour les logos et les captures d’écran ?",
        answer:
          "Utilisez 90 % à 100 % pour que le texte, les icônes et les traits fins restent nets. Pour les photos, 75 % à 85 % suffit généralement.",
      },
      {
        question: "Puis-je utiliser des images WebP sur mon site ?",
        answer:
          "Oui. Tous les principaux navigateurs actuels affichent le WebP. Si vous devez aussi prendre en charge de très anciens navigateurs ou applications, gardez le PNG d’origine comme solution de secours.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP en JPG",
    shortName: "WebP → JPG",
    tagline: "Convertissez vos images WebP en JPG pour les ouvrir dans n’importe quelle application, visionneuse ou formulaire d’envoi.",
    intro:
      "WebP en JPG convertit les fichiers WebP, courants sur les sites web, en images JPEG standard. Le JPG est le choix le plus sûr quand un ancien logiciel, un formulaire d’envoi ou un service d’impression n’accepte pas le WebP. Si le WebP a des zones transparentes, vous choisissez la couleur qui les remplit, car le JPG ne gère pas la transparence.",
    seoTitle: "Convertir WebP en JPG – Gratuit, sans envoi",
    seoDescription:
      "Convertissez un WebP en JPG gratuitement pour l’ouvrir dans n’importe quelle application. Choisissez la couleur des zones transparentes et la qualité. Sans envoi.",
    keywords: [
      "convertir webp en jpg",
      "webp en jpg",
      "webp en jpeg",
      "enregistrer un webp en jpg",
      "convertisseur webp en jpg",
      "ouvrir un fichier webp",
    ],
    howToSteps: [
      {
        title: "Ouvrez un fichier WebP",
        description: "Déposez une image WebP dans la zone d’import, cliquez pour en choisir une ou collez-la avec Ctrl+V.",
      },
      {
        title: "Réglez la qualité et la couleur de fond",
        description:
          "Choisissez une qualité entre 10 % et 100 %. Si l’image a des parties transparentes, choisissez la couleur qui les remplacera.",
      },
      {
        title: "Téléchargez le JPG",
        description: "Cliquez sur Télécharger JPG pour enregistrer un fichier qui s’ouvre presque partout.",
      },
    ],
    features: [
      {
        title: "Compatibilité maximale",
        description: "Le JPG s’ouvre dans presque tous les logiciels, appareils, imprimantes et formulaires d’envoi en ligne.",
      },
      {
        title: "Couleur de remplissage pour la transparence",
        description: "Les zones transparentes du WebP sont remplies de blanc ou de la couleur de votre choix.",
      },
      {
        title: "Qualité réglable",
        description: "Utilisez le curseur de qualité pour équilibrer le poids du fichier et les détails.",
      },
      {
        title: "Conversion privée",
        description: "L’image est décodée et enregistrée en JPG dans votre navigateur ; rien n’est envoyé.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi les images des sites s’enregistrent-elles en WebP ?",
        answer:
          "Beaucoup de sites diffusent leurs images en WebP parce que les fichiers sont plus légers. Quand vous en enregistrez une, vous obtenez le fichier WebP, que certains anciens logiciels ne savent pas ouvrir.",
      },
      {
        question: "Que deviennent les parties transparentes d’un WebP ?",
        answer:
          "Le JPG ne gère pas la transparence : ces zones sont remplies d’une couleur unie. Le blanc est utilisé par défaut, et vous pouvez choisir une autre couleur.",
      },
      {
        question: "Puis-je convertir un WebP animé ?",
        answer: "Seule une image fixe est convertie, car le JPG ne gère pas l’animation.",
      },
      {
        question: "Le JPG va-t-il perdre en qualité ?",
        answer:
          "Le WebP est décodé puis enregistré de nouveau en JPG, un format avec perte. Utilisez 90 % ou plus pour garder un résultat très proche de l’original.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP en PNG",
    shortName: "WebP → PNG",
    tagline: "Convertissez vos images WebP en fichiers PNG sans perte, qui gardent la transparence et chaque pixel.",
    intro:
      "WebP en PNG convertit vos images WebP en PNG, un format sans perte pris en charge par presque tous les éditeurs et visionneuses. Les zones transparentes le restent, et les pixels décodés sont enregistrés exactement : l’image ne perd pas en qualité quand vous la modifiez et l’enregistrez de nouveau. Utilisez-le quand une application ne sait pas ouvrir le WebP ou quand vous avez besoin d’un fichier à retoucher.",
    seoTitle: "Convertir WebP en PNG – Sans perte, transparent",
    seoDescription:
      "Convertissez un WebP en PNG gratuitement : fond transparent conservé et PNG sans perte qui s’ouvre dans tous les éditeurs d’image. Dans votre navigateur.",
    keywords: [
      "convertir webp en png",
      "webp en png",
      "webp en png transparent",
      "convertisseur webp en png",
      "webp en png sans perte de qualité",
      "enregistrer un webp en png",
    ],
    howToSteps: [
      {
        title: "Ouvrez un fichier WebP",
        description: "Déposez une image WebP dans la zone d’import, cliquez pour en choisir une ou collez-la avec Ctrl+V.",
      },
      {
        title: "Vérifiez l’aperçu",
        description: "La sortie est toujours un PNG sans perte de même taille : il n’y a pas de réglage de qualité.",
      },
      {
        title: "Téléchargez le PNG",
        description: "Cliquez sur Télécharger PNG pour enregistrer le fichier converti.",
      },
    ],
    features: [
      {
        title: "Transparence préservée",
        description: "Les zones transparentes et semi-transparentes du WebP restent transparentes dans le PNG.",
      },
      {
        title: "Sortie sans perte",
        description: "Les pixels décodés sont enregistrés exactement, sans nouvelle perte due à la compression.",
      },
      {
        title: "S’ouvre partout",
        description: "Le PNG est pris en charge par pratiquement tous les éditeurs d’image, visionneuses et logiciels de bureautique.",
      },
      {
        title: "Aucun envoi",
        description: "La conversion se fait dans votre navigateur : le fichier reste sur votre appareil.",
      },
    ],
    faqs: [
      {
        question: "La conversion WebP en PNG garde-t-elle le fond transparent ?",
        answer: "Oui. Le PNG gère complètement la transparence : le fond reste transparent.",
      },
      {
        question: "Pourquoi le PNG est-il plus lourd que le WebP ?",
        answer:
          "La plupart des images WebP utilisent une compression avec perte, alors que le PNG stocke chaque pixel sans perte. La même image demande donc généralement plus d’octets en PNG.",
      },
      {
        question: "La conversion en PNG améliore-t-elle la qualité de l’image ?",
        answer:
          "Non. Le PNG garde l’image exactement telle qu’elle apparaît, mais il ne peut pas récupérer les détails déjà supprimés par la compression WebP.",
      },
      {
        question: "Puis-je convertir un WebP animé en PNG ?",
        answer:
          "L’outil enregistre une seule image fixe. Le PNG produit ici ne contient pas les images de l’animation.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Redimensionneur d’images par lot",
    shortName: "Redimensionner par lot",
    tagline: "Redimensionnez jusqu’à 50 images à la fois, en pourcentage, à une largeur exacte ou dans un cadre maximal, et téléchargez-les dans un seul ZIP.",
    intro:
      "Le redimensionneur d’images par lot applique la même règle de taille à de nombreuses images en une seule fois. Vous pouvez redimensionner chaque fichier en pourcentage, définir une largeur exacte, ou faire tenir chaque image dans un cadre, par exemple 1200 × 800, pour qu’aucun côté ne le dépasse. Chaque fichier peut garder son format d’origine, et tous les résultats se téléchargent ensemble dans un seul ZIP.",
    seoTitle: "Redimensionner plusieurs images à la fois – En lot",
    seoDescription:
      "Redimensionnez jusqu’à 50 images JPG, PNG ou WebP à la fois : en pourcentage, à une largeur exacte ou dans un cadre, formats conservés, dans un seul ZIP.",
    keywords: [
      "redimensionner plusieurs images à la fois",
      "redimensionner des images par lot",
      "redimensionnement d’images en masse",
      "redimensionner des images en lot en ligne",
      "redimensionner plusieurs photos",
      "redimensionner des images et télécharger en zip",
    ],
    howToSteps: [
      {
        title: "Ajoutez vos images",
        description: "Déposez jusqu’à 50 fichiers JPG, PNG ou WebP (50 MB maximum chacun) dans la zone d’import, ou cliquez pour les choisir.",
      },
      {
        title: "Choisissez un mode",
        description:
          "Pourcentage redimensionne chaque image de 10 % à 200 %. Pixels exacts définit la largeur, et aussi la hauteur si vous déverrouillez les proportions. Dans un cadre réduit chaque image pour qu’elle tienne dans la largeur et la hauteur saisies.",
      },
      {
        title: "Choisissez le format de sortie",
        description:
          "Gardez Original, ou convertissez tout en PNG, JPG ou WebP. L’option Ne pas agrandir les petites images est activée par défaut.",
      },
      {
        title: "Redimensionnez et téléchargez",
        description: "Cliquez sur Tout redimensionner, puis sur Télécharger le ZIP, ou enregistrez les fichiers un par un depuis la liste.",
      },
    ],
    features: [
      {
        title: "Trois modes de redimensionnement",
        description: "En pourcentage, à une largeur exacte, ou dans une largeur et une hauteur maximales.",
      },
      {
        title: "Garde le format de chaque fichier",
        description: "Avec Original, les JPG restent en JPG, les PNG en PNG et les WebP en WebP.",
      },
      {
        title: "Pas d’agrandissement",
        description:
          "En modes Pixels exacts et Dans un cadre, les images déjà plus petites que la cible gardent leur taille.",
      },
      {
        title: "Un seul ZIP à télécharger",
        description: "Les fichiers redimensionnés gardent leur nom d’origine suivi de -resized, et se téléchargent ensemble dans une seule archive.",
      },
    ],
    faqs: [
      {
        question: "Combien d’images puis-je redimensionner à la fois ?",
        answer:
          "Jusqu’à 50 images par lot, de 50 MB maximum chacune. Les très grandes photos utilisent beaucoup de mémoire : sur un téléphone, il peut être utile de travailler par petits lots.",
      },
      {
        question: "Mes images seront-elles déformées ?",
        answer:
          "Pas en modes Pourcentage ou Dans un cadre, qui gardent toujours les proportions. En mode Pixels exacts, si vous déverrouillez les proportions et définissez les deux côtés, les images de forme différente seront déformées.",
      },
      {
        question: "Quels formats de fichier sont pris en charge ?",
        answer:
          "JPG, PNG et WebP. Les fichiers HEIC d’iPhone ne sont pas acceptés ici ; convertissez-les d’abord avec le Convertisseur d’image universel.",
      },
      {
        question: "Quelle qualité est utilisée pour les fichiers JPG et WebP ?",
        answer:
          "Les fichiers JPG et WebP redimensionnés sont enregistrés à 90 % de qualité. Quand vous convertissez des images transparentes en JPG, les zones transparentes deviennent blanches.",
      },
      {
        question: "Mes fichiers sont-ils envoyés quelque part ?",
        answer: "Non. Toutes les images sont redimensionnées dans cet onglet du navigateur et le fichier ZIP est créé sur votre appareil.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Compresseur d’images par lot",
    shortName: "Compresser par lot",
    tagline: "Compressez jusqu’à 50 images à la fois en WebP, AVIF, JPG ou PNG et téléchargez-les dans un seul ZIP.",
    intro:
      "Le compresseur d’images par lot réduit le poids de nombreuses images en une seule fois. Vous choisissez un format de sortie et une qualité pour tous les fichiers, lancez la compression, puis voyez la taille d’origine, la nouvelle taille et le pourcentage gagné pour chaque image. C’est pratique pour préparer un dossier de photos pour un site, une boutique en ligne ou un e-mail.",
    seoTitle: "Compresser plusieurs images à la fois – En lot",
    seoDescription:
      "Compressez jusqu’à 50 images à la fois gratuitement : JPG, PNG et WebP vers WebP, AVIF, JPG ou PNG, gain affiché par fichier, le tout dans un seul ZIP.",
    keywords: [
      "compresser plusieurs images",
      "compresser des images par lot",
      "compression d’images en masse",
      "compresser des images en lot en ligne",
      "convertir des images en webp par lot",
      "compresser des photos et télécharger en zip",
    ],
    howToSteps: [
      {
        title: "Ajoutez vos images",
        description: "Déposez jusqu’à 50 fichiers JPG, PNG ou WebP (50 MB maximum chacun), ou cliquez pour les choisir.",
      },
      {
        title: "Choisissez le format et la qualité",
        description:
          "WebP à 80 % est sélectionné par défaut. Choisissez AVIF pour les fichiers les plus légers, JPG pour la compatibilité ou PNG pour une sortie sans perte.",
      },
      {
        title: "Compressez tous les fichiers",
        description: "Cliquez sur Tout compresser et regardez la nouvelle taille et le pourcentage gagné s’afficher pour chaque fichier.",
      },
      {
        title: "Téléchargez les résultats",
        description: "Cliquez sur Télécharger le ZIP pour enregistrer tous les fichiers compressés d’un coup, ou téléchargez-les un par un depuis la liste.",
      },
    ],
    features: [
      {
        title: "Un résultat pour chaque fichier",
        description:
          "Voyez la taille avant et après et le pourcentage gagné pour chaque image, avec une mention claire quand un fichier est devenu plus lourd.",
      },
      {
        title: "Quatre formats de sortie",
        description: "AVIF, WebP, JPG ou PNG, avec un seul réglage de qualité de 10 % à 100 % pour tout le lot.",
      },
      {
        title: "ZIP avec les noms d’origine",
        description: "Chaque fichier garde son nom suivi de -compressed, et les noms en double sont numérotés automatiquement.",
      },
      {
        title: "Fonctionne sur votre appareil",
        description: "Tous les fichiers sont compressés dans votre navigateur et ne quittent jamais votre ordinateur ou votre téléphone.",
      },
    ],
    faqs: [
      {
        question: "Combien d’images puis-je compresser par lot ?",
        answer: "Vous pouvez ajouter jusqu’à 50 images, de 50 MB maximum chacune.",
      },
      {
        question: "Quel format de sortie choisir ?",
        answer:
          "Le WebP offre un bon équilibre entre poids, qualité et compatibilité. L’AVIF est généralement plus léger mais plus lent à encoder, ce qui se remarque avec beaucoup de grandes photos. Le JPG s’ouvre partout, et le PNG est sans perte mais réduit le moins le poids.",
      },
      {
        question: "Pourquoi l’un de mes fichiers est-il devenu plus lourd ?",
        answer:
          "Certaines images sont déjà bien compressées, et les enregistrer de nouveau n’aide pas. La liste signale ces fichiers, pour que vous puissiez garder l’original.",
      },
      {
        question: "La compression par lot modifie-t-elle les dimensions des images ?",
        answer:
          "Non, la largeur et la hauteur restent les mêmes. Pour réduire aussi les dimensions, passez d’abord les fichiers dans le Redimensionneur d’images par lot.",
      },
      {
        question: "Que deviennent les PNG transparents si je choisis JPG ?",
        answer: "Le JPG ne gère pas la transparence : les zones transparentes sont remplies de blanc.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Supprimer les métadonnées d’une image",
    shortName: "Supprimer EXIF",
    tagline: "Supprimez les données EXIF, comme la position GPS, le modèle d’appareil et la date, avant de partager une photo.",
    intro:
      "Supprimer les métadonnées d’une image crée une copie propre de votre photo, sans ses informations EXIF cachées. Les photos prises avec un téléphone ou un appareil photo enregistrent souvent la position GPS du lieu de prise de vue, le modèle de l’appareil, ainsi que la date et l’heure. Cet outil redessine l’image à partir de ses pixels et enregistre un nouveau fichier : ces informations ne sont donc pas reprises. La nouvelle taille du fichier s’affiche avant le téléchargement.",
    seoTitle: "Supprimer les données EXIF d’une photo – GPS",
    seoDescription:
      "Supprimez gratuitement les données EXIF de vos photos : position GPS, modèle d’appareil et date, avant de partager. Traité dans votre navigateur, sans envoi.",
    keywords: [
      "supprimer les données exif",
      "supprimer les métadonnées d’une photo",
      "supprimer la localisation gps d’une photo",
      "effacer les données exif",
      "retirer les métadonnées d’une image",
      "supprimer la position d’une photo",
      "supprimer les métadonnées d’une photo iphone",
    ],
    howToSteps: [
      {
        title: "Ouvrez la photo",
        description: "Déposez, choisissez ou collez une photo JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Vérifiez la copie propre",
        description: "L’aperçu montre l’image qui sera enregistrée, avec la taille de son nouveau fichier.",
      },
      {
        title: "Choisissez le format et la qualité",
        description:
          "Le format d’origine est conservé par défaut. Pour JPG et WebP, utilisez une qualité de 90 % à 100 % pour rester proche de l’original, ou choisissez PNG pour une sortie sans perte.",
      },
      {
        title: "Téléchargez et partagez le nouveau fichier",
        description: "Cliquez sur Télécharger et partagez cette copie plutôt que la photo d’origine.",
      },
    ],
    features: [
      {
        title: "Supprime la position et les données de l’appareil",
        description:
          "Les coordonnées GPS, la marque et le modèle de l’appareil, l’objectif, la date de prise de vue et les autres champs EXIF et IPTC ne sont pas écrits dans le nouveau fichier.",
      },
      {
        title: "Copie propre créée à partir des pixels",
        description: "L’image est redessinée à partir de ses pixels : aucune donnée cachée ne peut être recopiée par accident.",
      },
      {
        title: "Taille du fichier affichée",
        description: "Voyez la taille du fichier nettoyé avant de le télécharger.",
      },
      {
        title: "Fait sur votre appareil",
        description: "Votre photo n’est jamais envoyée : sa position n’est partagée avec personne pendant le traitement.",
      },
    ],
    faqs: [
      {
        question: "Quelles métadonnées sont supprimées ?",
        answer:
          "Toutes : les données EXIF (appareil, réglages, date et GPS), les champs IPTC et XMP comme l’auteur ou le copyright, et le profil de couleur intégré. Seule l’image visible est conservée.",
      },
      {
        question: "Supprimer les métadonnées modifie-t-il la qualité de l’image ?",
        answer:
          "L’image est enregistrée de nouveau. Le PNG garde chaque pixel, tandis que JPG, WebP et AVIF sont de nouveau compressés : choisissez une qualité élevée. Les photos avec un profil de couleur étendu, comme beaucoup de photos d’iPhone, peuvent paraître un peu moins éclatantes, car le profil n’est pas conservé.",
      },
      {
        question: "Comment vérifier que la position a bien disparu ?",
        answer:
          "Ouvrez le fichier téléchargé dans l’Analyseur d’image. Il lit les données EXIF sur votre appareil et affiche un avertissement quand une position GPS est présente.",
      },
      {
        question: "Les applications et les sites suppriment-ils les données EXIF pour moi ?",
        answer:
          "Certaines grandes plateformes suppriment une partie des métadonnées à l’envoi, mais les e-mails, les messageries et les services de partage de fichiers envoient souvent le fichier d’origine tel quel. Les supprimer vous-même est le choix le plus sûr.",
      },
      {
        question: "Puis-je supprimer les métadonnées des photos HEIC d’iPhone ?",
        answer:
          "Oui. La photo HEIC est convertie dans votre navigateur et la copie propre est enregistrée en JPG par défaut.",
      },
    ],
  },
  "image-analyzer": {
    name: "Analyseur d’image",
    shortName: "Analyseur",
    tagline: "Consultez les dimensions, le poids, les proportions, la taille d’impression et les données EXIF d’une image, avec une alerte pour la position GPS.",
    intro:
      "L’analyseur d’image affiche les détails techniques d’un fichier image sans le modifier. Il indique le poids du fichier, le format, les dimensions en pixels, les proportions, le nombre de mégapixels et la présence éventuelle de transparence. Pour les photos, il lit aussi les données EXIF de l’appareil, comme le modèle, l’objectif, l’exposition, l’ISO, la date de prise de vue et la position GPS, et vous prévient quand une photo révèle l’endroit où elle a été prise.",
    seoTitle: "Lire les données EXIF d’une photo – Taille, dimensions",
    seoDescription:
      "Analysez une image gratuitement : dimensions, poids, proportions, taille d’impression et données EXIF, avec une alerte si la photo contient une position GPS.",
    keywords: [
      "lire les données exif en ligne",
      "voir les métadonnées d’une image",
      "connaître les dimensions d’une image",
      "voir les exif d’une photo",
      "savoir si une photo contient la position gps",
      "vérifier la résolution d’une image",
      "informations sur une image en ligne",
    ],
    howToSteps: [
      {
        title: "Ouvrez une image",
        description: "Déposez, choisissez ou collez n’importe quelle image que votre navigateur sait ouvrir, y compris les photos HEIC d’iPhone.",
      },
      {
        title: "Lisez les caractéristiques",
        description:
          "Consultez le poids, le format, les dimensions, les proportions, les mégapixels, la transparence et la taille d’impression à 300 DPI.",
      },
      {
        title: "Vérifiez les données de l’appareil",
        description:
          "La section EXIF indique l’appareil, l’objectif, l’exposition et la date. Si la photo contient une position GPS, un avertissement apparaît avec un bouton pour supprimer les métadonnées.",
      },
      {
        title: "Copiez le rapport",
        description: "Cliquez sur Copier le rapport pour copier toutes les valeurs en texte brut.",
      },
    ],
    features: [
      {
        title: "Caractéristiques techniques",
        description:
          "Poids, format, type MIME, dimensions, proportions, mégapixels, profondeur de couleur, transparence et mémoire utilisée estimée.",
      },
      {
        title: "Lecteur EXIF",
        description:
          "Affiche l’appareil, l’objectif, la date de prise de vue, le temps d’exposition, l’ouverture, l’ISO, la focale, le flash, l’orientation et le logiciel de retouche quand ils sont présents.",
      },
      {
        title: "Alerte de position GPS",
        description:
          "Affiche les coordonnées quand une photo en contient, et propose en un clic de créer une copie sans métadonnées.",
      },
      {
        title: "Taille d’impression estimée",
        description: "Indique la taille de l’image imprimée à 300 DPI, en pouces et en centimètres.",
      },
      {
        title: "Lecture seule, en local",
        description: "Le fichier n’est pas modifié, et toutes les données sont lues sur votre appareil.",
      },
    ],
    faqs: [
      {
        question: "Comment voir les données EXIF d’une photo ?",
        answer:
          "Ouvrez la photo ici et regardez la section Appareil photo et données EXIF. S’il est indiqué qu’il n’y a pas de données EXIF, le fichier a été enregistré sans elles, ce qui est courant pour les captures d’écran et les images téléchargées depuis les réseaux sociaux.",
      },
      {
        question: "Comment savoir si une photo indique où elle a été prise ?",
        answer:
          "Si la photo contient des coordonnées GPS, l’analyseur les affiche avec un avertissement. Cliquez sur Supprimer les métadonnées pour créer une copie sans la position.",
      },
      {
        question: "Quels fichiers contiennent des données EXIF ?",
        answer:
          "Les photos de téléphone et d’appareil photo en JPG et HEIC en contiennent généralement. Les fichiers WebP et AVIF peuvent aussi en contenir, alors que les captures d’écran et beaucoup d’images exportées ou retouchées en ont peu ou pas du tout.",
      },
      {
        question: "Que signifie la taille d’impression à 300 DPI ?",
        answer:
          "C’est la taille d’un tirage à 300 points par pouce, une qualité courante pour les photos imprimées. Par exemple, une image de 3000 × 2000 pixels s’imprime à environ 10 × 6,7 pouces.",
      },
      {
        question: "La profondeur de couleur indiquée est-elle exacte ?",
        answer:
          "Elle se base sur le format et sur la présence de transparence (RGB 24 bits ou RGBA 32 bits). Elle ne détecte pas les images 16 bits ou HDR.",
      },
    ],
  },
  "image-color-picker": {
    name: "Pipette de couleur sur image",
    shortName: "Pipette",
    tagline: "Cliquez sur n’importe quel point d’une image pour obtenir sa couleur exacte en HEX, RGB, HSL, HSV et CMYK.",
    intro:
      "La pipette de couleur trouve la couleur exacte de n’importe quel pixel d’une image. Survolez l’image pour voir une loupe sur les pixels sous le pointeur, puis cliquez pour sélectionner une couleur et copier son code en HEX, RGB, HSL, HSV ou CMYK. Les couleurs sont lues dans l’image en pleine résolution, pas dans l’aperçu réduit.",
    seoTitle: "Pipette de couleur – Code HEX et RGB d’une image",
    seoDescription:
      "Trouvez la couleur d’une image gratuitement : cliquez sur un pixel pour obtenir son code HEX, RGB, HSL, HSV et CMYK, visez avec la loupe, copiez en un clic.",
    keywords: [
      "pipette couleur image",
      "trouver le code hex d’une image",
      "pipette en ligne",
      "connaître la couleur d’une image",
      "code couleur d’une photo",
      "couleur rgb d’une image",
      "trouver une couleur hex",
    ],
    howToSteps: [
      {
        title: "Ouvrez une image",
        description: "Déposez, choisissez ou collez une image. Une capture d’écran collée avec Ctrl+V fonctionne très bien.",
      },
      {
        title: "Visez avec la loupe",
        description: "Déplacez la souris sur l’aperçu ; une loupe ronde montre en grand les pixels sous le pointeur.",
      },
      {
        title: "Cliquez pour prendre la couleur",
        description: "Cliquez ou touchez l’endroit voulu. La couleur s’affiche avec ses valeurs HEX, RGB, HSL, HSV et CMYK.",
      },
      {
        title: "Copiez le code",
        description: "Cliquez sur Copier à côté du format voulu. Les couleurs récentes sont gardées en dessous pour les réutiliser.",
      },
    ],
    features: [
      {
        title: "Loupe",
        description: "Une vue agrandie de 7 × 7 pixels vous aide à viser les petits détails, comme un trait fin ou une seule lettre.",
      },
      {
        title: "Cinq formats de couleur",
        description: "Copiez les valeurs HEX, RGB, HSL, HSV ou CMYK, chacune en un clic.",
      },
      {
        title: "Historique des couleurs",
        description: "Les 12 dernières couleurs choisies sont gardées sous forme de pastilles ; cliquez sur l’une d’elles pour la sélectionner de nouveau.",
      },
      {
        title: "Lecture en pleine résolution",
        description: "Chaque couleur est lue dans les pixels de l’image d’origine : la valeur ne dépend pas de la taille de l’aperçu.",
      },
    ],
    faqs: [
      {
        question: "Comment obtenir le code HEX d’une couleur dans une image ?",
        answer:
          "Ouvrez l’image, cliquez sur la couleur voulue et appuyez sur Copier à côté de la valeur HEX. Vous pouvez la coller dans n’importe quel logiciel de design ou fichier CSS.",
      },
      {
        question: "Puis-je prendre une couleur dans une capture d’écran ?",
        answer:
          "Oui. Faites une capture d’écran, appuyez sur Ctrl+V sur cette page pour la coller, puis cliquez sur la couleur voulue.",
      },
      {
        question: "La pipette fonctionne-t-elle sur téléphone ?",
        answer:
          "Oui. Touchez l’image pour sélectionner une couleur. La loupe n’apparaît qu’avec une souris : zoomez sur la page si vous devez viser une très petite zone.",
      },
      {
        question: "Pourquoi des pixels voisins d’une photo ont-ils des couleurs légèrement différentes ?",
        answer:
          "Les photos contiennent du bruit, des dégradés et des effets de compression : des pixels voisins sont rarement identiques. Prenez plusieurs points et gardez celui qui vous convient.",
      },
      {
        question: "Pourquoi la valeur CMYK diffère-t-elle de mon logiciel d’impression ?",
        answer:
          "Les valeurs CMYK affichées ici sont une simple conversion mathématique à partir du RGB. Les logiciels d’impression utilisent des profils de couleur propres à certaines encres et certains papiers : leurs valeurs peuvent donc être différentes.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Générateur de palette de couleurs",
    shortName: "Palette",
    tagline: "Extrayez les couleurs principales d’une image sous forme de palette, et copiez-les en codes HEX, variables CSS ou JSON.",
    intro:
      "Le générateur de palette trouve les couleurs dominantes d’une photo ou d’un visuel et les affiche sous forme de pastilles. Vous pouvez choisir 3, 4, 5, 6 ou 8 couleurs ; elles sont classées de celle qui couvre la plus grande surface à la plus petite, et les teintes très proches sont fusionnées pour que chaque pastille soit distincte. Copiez la palette en variables CSS ou en tableau JSON, ou téléchargez-la sous forme de nuancier PNG.",
    seoTitle: "Palette de couleurs d’une image – Codes HEX",
    seoDescription:
      "Créez une palette de couleurs à partir d’une image : 3 à 8 couleurs dominantes, codes HEX, variables CSS ou JSON à copier, et nuancier PNG à télécharger.",
    keywords: [
      "palette de couleurs à partir d’une image",
      "extraire les couleurs d’une image",
      "générateur de palette de couleurs",
      "palette de couleurs d’une photo",
      "couleurs dominantes d’une image",
      "extraire les codes hex d’une image",
    ],
    howToSteps: [
      {
        title: "Ouvrez une image",
        description: "Déposez, choisissez ou collez une photo, une illustration, un logo ou une capture d’écran.",
      },
      {
        title: "Choisissez le nombre de couleurs",
        description: "Cliquez sur 3, 4, 5, 6 ou 8. Les pastilles se mettent à jour immédiatement.",
      },
      {
        title: "Copiez une couleur",
        description: "Cliquez sur l’icône de copie d’une pastille pour copier son code HEX.",
      },
      {
        title: "Exportez la palette",
        description: "Utilisez Copier les variables CSS ou Copier le JSON, ou téléchargez la palette sous forme de nuancier PNG.",
      },
    ],
    features: [
      {
        title: "Classées par surface",
        description: "La première pastille est la couleur qui couvre la plus grande partie de l’image.",
      },
      {
        title: "Des teintes distinctes",
        description: "Les couleurs presque identiques sont fusionnées : la palette ne répète pas le même ton.",
      },
      {
        title: "Prêt pour les développeurs",
        description: "Exportez en propriétés personnalisées CSS (--color-1, --color-2, etc.) ou en tableau JSON de codes HEX.",
      },
      {
        title: "Nuancier PNG",
        description: "Téléchargez une image de la palette, avec le code HEX écrit sous chaque pastille.",
      },
    ],
    faqs: [
      {
        question: "Comment les couleurs de la palette sont-elles choisies ?",
        answer:
          "L’image est analysée en petite taille, les couleurs proches sont regroupées, et les groupes qui couvrent la plus grande surface sont affichés en premier. Les pixels transparents sont ignorés.",
      },
      {
        question: "Pourquoi ai-je moins de couleurs que demandé ?",
        answer:
          "Les teintes très proches sont fusionnées pour que chaque pastille soit nettement différente. Une image qui contient peu de couleurs distinctes peut donner moins de pastilles.",
      },
      {
        question: "Comment utiliser la palette en CSS ?",
        answer:
          "Cliquez sur Copier les variables CSS pour obtenir un bloc :root avec des variables nommées --color-1, --color-2, etc., puis collez-le dans votre feuille de style.",
      },
      {
        question: "Pourquoi une petite couleur d’accent manque-t-elle ?",
        answer:
          "La palette privilégie les couleurs qui couvrent une grande surface : un petit détail, comme un petit logo, peut ne pas apparaître. Utilisez la Pipette de couleur pour obtenir la valeur exacte d’un point précis.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Ajouter du texte sur une image",
    shortName: "Ajouter du texte",
    tagline: "Écrivez une légende ou un titre sur une photo, avec la police, la taille, la couleur, le contour et le fond de votre choix.",
    intro:
      "Ajouter du texte sur une image place une ou plusieurs lignes de texte sur une photo. Faites glisser le texte où vous voulez sur l’aperçu, ou placez-le en haut, au centre ou en bas, puis personnalisez-le : sept polices, gras ou italique, alignement, opacité, ombre portée, contour et fond coloré. Le texte est dessiné sur l’image en pleine résolution au moment du téléchargement.",
    seoTitle: "Ajouter du texte sur une image en ligne – Gratuit",
    seoDescription:
      "Ajoutez du texte sur une image gratuitement : placez la légende où vous voulez, réglez police, taille, couleur, contour, ombre et fond, puis enregistrez.",
    keywords: [
      "ajouter du texte sur une image",
      "écrire sur une photo en ligne",
      "écrire sur une image",
      "mettre une légende sur une photo",
      "texte sur photo",
      "ajouter des mots sur une image",
    ],
    howToSteps: [
      {
        title: "Ouvrez votre image",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Saisissez votre texte",
        description: "Écrivez le texte dans la zone prévue. Appuyez sur Entrée pour aller à la ligne.",
      },
      {
        title: "Mettez-le en forme et placez-le",
        description:
          "Choisissez la police, la taille (de 12 à 240 px), la couleur, l’opacité et l’alignement. Faites glisser le texte sur l’aperçu, ou choisissez Haut, Centre, Bas ou Personnalisé.",
      },
      {
        title: "Téléchargez",
        description: "Gardez le format d’origine ou choisissez JPG, PNG, WebP ou AVIF, puis cliquez sur Télécharger.",
      },
    ],
    features: [
      {
        title: "Placement par glisser-déposer",
        description: "Déplacez le texte directement sur l’aperçu pour le placer exactement où vous voulez.",
      },
      {
        title: "Sept polices",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New et Impact, en gras ou en italique.",
      },
      {
        title: "Lisible sur toutes les photos",
        description: "Ajoutez une ombre portée, un contour de 1 à 20 px, ou un fond avec sa propre couleur et sa propre opacité.",
      },
      {
        title: "Texte sur plusieurs lignes",
        description: "Écrivez plusieurs lignes et alignez-les à gauche, au centre ou à droite.",
      },
    ],
    faqs: [
      {
        question: "Comment rendre un texte lisible sur une photo chargée ?",
        answer:
          "Activez Contour et choisissez une couleur qui contraste avec le texte, ou activez Fond du texte pour placer un fond uni ou semi-transparent derrière. Une ombre portée aide aussi sur les zones claires.",
      },
      {
        question: "Puis-je ajouter plusieurs blocs de texte ?",
        answer:
          "L’outil ajoute un seul bloc de texte, qui peut contenir plusieurs lignes. Pour ajouter du texte à un deuxième endroit, téléchargez le résultat, rouvrez-le et ajoutez le texte suivant.",
      },
      {
        question: "Quelles polices puis-je utiliser ?",
        answer:
          "Vous avez le choix entre sept polices. La plupart sont des polices système : si l’une d’elles n’est pas installée sur votre appareil, le navigateur utilise une police proche à la place.",
      },
      {
        question: "Le texte sera-t-il net dans l’image téléchargée ?",
        answer:
          "Oui. Le texte est dessiné à la pleine résolution de votre image. Si vous enregistrez en JPG, utilisez une qualité élevée pour garder des bords de lettres nets.",
      },
    ],
  },
  "watermark-image": {
    name: "Ajouter un filigrane",
    shortName: "Filigrane",
    tagline: "Protégez vos photos avec un filigrane texte ou logo, placé à un endroit ou répété sur toute l’image.",
    intro:
      "Ajouter un filigrane place une mention de copyright, le nom d’un site ou un logo par-dessus une photo. Placez un filigrane texte ou logo à l’une des neuf positions et réglez sa taille et son opacité, ou répétez le texte sur toute l’image, ce qui le rend bien plus difficile à supprimer en rognant. Le logo peut être un fichier PNG, WebP, JPG ou SVG ; un logo sur fond transparent donne le meilleur résultat.",
    seoTitle: "Ajouter un filigrane sur une photo – Texte ou logo",
    seoDescription:
      "Ajoutez un filigrane sur vos photos gratuitement : texte ou logo, neuf positions, opacité et rotation réglables, ou texte répété sur toute l’image.",
    keywords: [
      "ajouter un filigrane sur une photo",
      "filigrane photo",
      "mettre un logo sur une photo",
      "filigrane photo en ligne gratuit",
      "filigrane copyright",
      "filigrane en mosaïque",
      "filigrane transparent",
    ],
    howToSteps: [
      {
        title: "Ouvrez votre photo",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Choisissez texte ou logo",
        description:
          "Sélectionnez Texte et saisissez votre texte, ou sélectionnez Logo et choisissez un fichier PNG, WebP, JPG ou SVG.",
      },
      {
        title: "Placez-le et réglez-le",
        description:
          "Cliquez sur une position dans la grille 3 × 3, puis réglez l’opacité et la taille. Pour un texte, vous pouvez aussi régler la couleur et la rotation, ou activer Répéter sur toute l’image.",
      },
      {
        title: "Téléchargez",
        description: "Gardez le format d’origine ou choisissez-en un autre, puis cliquez sur Télécharger.",
      },
    ],
    features: [
      {
        title: "Texte ou logo",
        description: "Utilisez une mention de copyright ou l’adresse d’un site, ou importez votre propre logo.",
      },
      {
        title: "Neuf positions",
        description: "Coins, bords ou centre, avec une marge qui s’adapte à la taille de l’image.",
      },
      {
        title: "Texte en mosaïque",
        description: "Répétez votre texte sur toute la photo, selon l’angle de votre choix.",
      },
      {
        title: "Opacité, taille et rotation",
        description: "Opacité de 10 % à 100 %, taille du texte de 14 à 140 px, largeur du logo de 5 % à 60 % de l’image, et rotation du texte de -90° à 90°.",
      },
    ],
    faqs: [
      {
        question: "Comment ajouter mon logo en filigrane ?",
        answer:
          "Choisissez Logo, cliquez sur Choisir un logo et sélectionnez votre fichier. Réglez la taille du logo en pourcentage de la largeur de l’image, choisissez une position et baissez l’opacité pour que la photo reste visible.",
      },
      {
        question: "Quelle opacité choisir pour un filigrane ?",
        answer:
          "Entre 30 % et 50 % environ, le filigrane est visible sans masquer la photo. Utilisez une valeur plus élevée s’il doit être facile à lire.",
      },
      {
        question: "Qu’est-ce qu’un filigrane en mosaïque ?",
        answer:
          "Répéter sur toute l’image imprime votre texte de nombreuses fois sur toute la photo. Il est bien plus difficile à supprimer en rognant qu’une seule mention dans un coin. Cette option est disponible pour les filigranes texte.",
      },
      {
        question: "Pourquoi mon logo a-t-il un cadre blanc autour ?",
        answer:
          "Le fichier du logo a un fond uni. Utilisez un PNG, WebP ou SVG sur fond transparent, ou supprimez d’abord le fond avec Supprimer l’arrière-plan.",
      },
      {
        question: "Un filigrane peut-il empêcher la copie de ma photo ?",
        answer:
          "Un filigrane rend la copie moins intéressante et montre à qui appartient l’image, mais il ne peut pas l’empêcher complètement. Les filigranes grands, centrés ou en mosaïque sont plus difficiles à supprimer qu’une petite mention dans un coin.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Ajouter une bordure à une image",
    shortName: "Bordure",
    tagline: "Ajoutez une bordure ou un cadre de couleur autour d’une photo, à l’extérieur de l’image ou par-dessus ses bords.",
    intro:
      "Ajouter une bordure dessine un cadre de couleur autour d’une image. En mode Extérieur, la zone de l’image s’agrandit : toute la photo reste visible à l’intérieur de la bordure. En mode Intérieur, la bordure est dessinée par-dessus les bords et l’image garde sa taille d’origine. Vous pouvez régler l’épaisseur de 1 à 100 pixels, choisir n’importe quelle couleur et une opacité.",
    seoTitle: "Ajouter une bordure à une image – Cadre photo",
    seoDescription:
      "Ajoutez une bordure à une image gratuitement : couleur au choix, épaisseur de 1 à 100 px et opacité, autour de la photo ou sur ses bords. Sans envoi.",
    keywords: [
      "ajouter une bordure à une image",
      "ajouter un cadre à une photo",
      "bordure image en ligne",
      "mettre un cadre autour d’une photo",
      "bordure blanche pour instagram",
      "contour photo",
    ],
    howToSteps: [
      {
        title: "Ouvrez votre image",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Choisissez le placement",
        description: "Extérieur ajoute la bordure autour de la photo et agrandit l’image. Intérieur la dessine par-dessus les bords et garde la taille.",
      },
      {
        title: "Réglez l’épaisseur, la couleur et l’opacité",
        description: "Faites glisser le curseur d’épaisseur de 1 à 100 px, choisissez une couleur et baissez l’opacité pour un cadre plus discret.",
      },
      {
        title: "Téléchargez",
        description: "Gardez le format d’origine ou choisissez JPG, PNG, WebP ou AVIF, puis cliquez sur Télécharger.",
      },
    ],
    features: [
      {
        title: "Extérieur ou intérieur",
        description: "Ajoutez de l’espace autour de la photo, ou gardez exactement les dimensions d’origine.",
      },
      {
        title: "Toutes les épaisseurs et couleurs",
        description: "D’un trait fin de 1 px à un large cadre de 100 px, dans la couleur de votre choix.",
      },
      {
        title: "Opacité réglable",
        description: "Rendez la bordure semi-transparente pour un effet plus léger.",
      },
      {
        title: "Garde votre format",
        description: "L’image avec bordure est enregistrée dans le même format que l’original, sauf si vous en choisissez un autre.",
      },
    ],
    faqs: [
      {
        question: "Ajouter une bordure modifie-t-il la taille de l’image ?",
        answer:
          "En mode Extérieur, l’épaisseur de la bordure s’ajoute de chaque côté : une image de 1000 × 800 avec une bordure de 20 px devient 1040 × 840. Le mode Intérieur garde la taille et recouvre le bord extérieur de la photo.",
      },
      {
        question: "Comment ajouter une bordure blanche pour Instagram ?",
        answer:
          "Rognez d’abord la photo en 1:1, puis ajoutez une bordure blanche en mode Extérieur. Le résultat reste carré, car la même épaisseur est ajoutée de chaque côté.",
      },
      {
        question: "Puis-je créer une bordure aux coins arrondis ?",
        answer:
          "La bordure elle-même est rectangulaire. Pour un effet arrondi, ajoutez d’abord la bordure, puis ouvrez le résultat dans Arrondir les coins d’une image.",
      },
      {
        question: "À quoi sert l’opacité de la bordure ?",
        answer:
          "Une opacité plus faible rend la bordure transparente. En mode Intérieur, la photo apparaît à travers ; en mode Extérieur, la zone de la bordure devient partiellement transparente en PNG, WebP et AVIF, et se mélange au blanc en JPG.",
      },
    ],
  },
  "round-image": {
    name: "Arrondir les coins d’une image",
    shortName: "Coins arrondis",
    tagline: "Arrondissez les coins d’une image ou découpez-la en cercle, avec un fond transparent en PNG.",
    intro:
      "Arrondir les coins d’une image donne des coins doux à une photo, ou la transforme en cercle pour une photo de profil ou une icône d’application. Choisissez le préréglage Petit, Moyen ou Grand, définissez un rayon exact avec le curseur, ou cliquez sur Faire un cercle. Le résultat est enregistré en PNG par défaut : les coins découpés restent transparents.",
    seoTitle: "Arrondir les coins d’une image – Ou en cercle",
    seoDescription:
      "Arrondissez les coins d’une image ou découpez-la en cercle. Réglez le rayon, gardez un fond transparent en PNG ou choisissez une couleur pour le JPG.",
    keywords: [
      "arrondir les coins d’une image",
      "image coins arrondis en ligne",
      "mettre une image en rond",
      "créer une photo de profil ronde",
      "photo de profil ronde",
      "png coins arrondis",
    ],
    howToSteps: [
      {
        title: "Ouvrez votre image",
        description: "Déposez, choisissez ou collez une image JPG, PNG, WebP ou HEIC d’iPhone.",
      },
      {
        title: "Choisissez la forme",
        description: "Cliquez sur Faire un cercle, choisissez des coins Petit, Moyen ou Grand, ou faites glisser le curseur de rayon.",
      },
      {
        title: "Choisissez le format",
        description:
          "PNG est sélectionné par défaut. Si vous choisissez JPG, choisissez du blanc, du noir ou une couleur personnalisée pour les coins.",
      },
      {
        title: "Téléchargez",
        description: "Cliquez sur Télécharger pour enregistrer l’image arrondie, ou copiez-la dans le presse-papiers.",
      },
    ],
    features: [
      {
        title: "Préréglages et rayon exact",
        description: "Préréglages Petit, Moyen et Grand, ou n’importe quel rayon de 0 jusqu’à la moitié du plus petit côté.",
      },
      {
        title: "Avatar rond",
        description: "Transforme l’image en cercle en un clic, prête pour une photo de profil.",
      },
      {
        title: "Coins transparents",
        description: "PNG, WebP et AVIF gardent la zone hors de la courbe transparente.",
      },
      {
        title: "Couleur de remplissage pour le JPG",
        description: "Quand vous enregistrez en JPG, les coins sont remplis de blanc, de noir ou de la couleur de votre choix.",
      },
    ],
    faqs: [
      {
        question: "Comment créer une photo de profil ronde ?",
        answer:
          "Cliquez sur Faire un cercle. Le cercle utilise le plus petit côté de l’image et il est centré : pour une photo qui n’est pas carrée, rognez-la d’abord en 1:1 pour centrer le visage et éviter les espaces vides sur les côtés.",
      },
      {
        question: "Pourquoi mes coins sont-ils blancs ou noirs au lieu d’être transparents ?",
        answer: "Le JPG ne gère pas la transparence. Choisissez PNG, WebP ou AVIF pour garder des coins transparents.",
      },
      {
        question: "Que signifient les préréglages Petit, Moyen et Grand ?",
        answer:
          "Le rayon maximal est égal à la moitié du plus petit côté de l’image. Petit, Moyen et Grand utilisent respectivement 10 %, 25 % et 50 % de ce maximum.",
      },
      {
        question: "Pourquoi mon image arrondie est-elle si lourde ?",
        answer:
          "Le PNG est sans perte : une photo d’appareil en pleine taille peut donner un gros fichier. Redimensionnez d’abord la photo, ou enregistrez en WebP, qui garde aussi la transparence et pèse bien moins lourd.",
      },
    ],
  },
  "favicon-generator": {
    name: "Générateur de favicon",
    shortName: "Favicon",
    tagline: "Créez un favicon.ico, une icône Apple Touch, des icônes Android et un manifeste web à partir d’une seule image, dans un seul ZIP.",
    intro:
      "Le générateur de favicon transforme un logo ou une image en l’ensemble des fichiers d’icône dont un site web a besoin. Il rogne l’image en un carré centré et crée un favicon.ico (en 16, 32 et 48 pixels), des icônes PNG de 16 à 512 pixels, un apple-touch-icon.png de 180 × 180 et un fichier site.webmanifest, le tout dans un seul ZIP. La page affiche aussi les balises link HTML à coller dans la section head de votre site.",
    seoTitle: "Générateur de favicon – ICO, PNG et Apple Touch Icon",
    seoDescription:
      "Générateur de favicon gratuit : depuis un logo PNG, JPG ou SVG, obtenez favicon.ico, des icônes PNG de 16 à 512 px, l’icône Apple Touch et un manifeste en ZIP.",
    keywords: [
      "générateur de favicon",
      "créer un favicon",
      "créer un favicon ico",
      "convertir png en ico",
      "générateur apple touch icon",
      "favicon à partir d’une image",
      "créer une icône de site web",
    ],
    howToSteps: [
      {
        title: "Importez votre logo",
        description:
          "Déposez ou choisissez une image PNG, JPG, SVG ou HEIC. Une image carrée d’au moins 512 × 512 pixels donne le meilleur résultat.",
      },
      {
        title: "Vérifiez qu’il est centré",
        description:
          "Les icônes sont découpées au centre de l’image. Si votre logo est décentré ou si l’image n’est pas carrée, rognez-la d’abord en 1:1 avec Rogner une image.",
      },
      {
        title: "Téléchargez le pack favicon",
        description: "Cliquez sur Télécharger le pack favicon (ZIP) pour obtenir tous les fichiers d’icône et le manifeste.",
      },
      {
        title: "Ajoutez-le à votre site",
        description:
          "Envoyez les fichiers dans le dossier racine de votre site, puis cliquez sur Copier le code et collez les balises HTML dans la section head de vos pages.",
      },
    ],
    features: [
      {
        title: "favicon.ico multi-tailles",
        description: "Un seul fichier ICO qui contient des icônes de 16 × 16, 32 × 32 et 48 × 48 pour les onglets et les favoris.",
      },
      {
        title: "Des icônes PNG pour chaque appareil",
        description: "Des fichiers PNG en 16, 32, 48, 64, 128, 192 et 512 pixels, plus un apple-touch-icon.png de 180 × 180.",
      },
      {
        title: "Manifeste d’application web",
        description: "Un fichier site.webmanifest qui pointe vers les icônes de 192 et 512 pixels, pour Android et les applications web installables.",
      },
      {
        title: "Petites tailles nettes",
        description: "Les icônes sont réduites en plusieurs étapes à partir de l’image complète, ce qui rend les versions de 16 et 32 pixels plus nettes.",
      },
      {
        title: "HTML prêt à coller",
        description: "Copiez en un clic les balises link des icônes et du manifeste.",
      },
    ],
    faqs: [
      {
        question: "Quelle taille doit faire l’image de mon favicon ?",
        answer:
          "Utilisez une image carrée d’au moins 512 × 512 pixels pour que la plus grande icône reste nette. Les formes simples et les couleurs vives restent reconnaissables en 16 × 16.",
      },
      {
        question: "Quels fichiers contient le ZIP ?",
        answer:
          "favicon.ico, de favicon-16x16.png à favicon-512x512.png (16, 32, 48, 64, 128, 192 et 512), apple-touch-icon.png en 180 × 180, et site.webmanifest.",
      },
      {
        question: "Où dois-je placer les fichiers du favicon ?",
        answer:
          "Envoyez-les dans le dossier racine de votre site web, au même endroit que votre page d’accueil. Collez ensuite les balises HTML affichées sur cette page dans la section head de chaque page.",
      },
      {
        question: "Pourquoi une partie de mon logo est-elle coupée ?",
        answer:
          "L’outil prend le plus grand carré centré de votre image. Si le logo est large ou décentré, rognez-le en carré avec un peu d’espace autour avant de générer les icônes.",
      },
      {
        question: "Puis-je utiliser un logo SVG ?",
        answer:
          "Oui. Le SVG est dessiné comme une image et enregistré en fichiers PNG et ICO. Le ZIP ne contient pas de favicon SVG.",
      },
      {
        question: "Dois-je modifier le fichier manifeste ?",
        answer:
          "Oui. site.webmanifest utilise le nom provisoire App et des couleurs de thème sombres. Ouvrez-le dans un éditeur de texte et modifiez name, short_name et les couleurs pour qu’ils correspondent à votre site.",
      },
    ],
  },
  "image-to-base64": {
    name: "Image en Base64",
    shortName: "Image → Base64",
    tagline: "Convertissez un fichier image en chaîne Base64 à copier, avec des extraits HTML et CSS prêts à l’emploi.",
    intro:
      "Image en Base64 encode un fichier image en texte Base64, pour le stocker ou l’envoyer sous forme de texte brut, par exemple dans du JSON, une page HTML ou un fichier CSS. La chaîne est créée à partir des octets d’origine du fichier : l’image n’est ni recompressée ni modifiée. L’outil affiche le nombre de caractères et vous donne aussi une balise img HTML et une règle CSS background-image qui contiennent l’image complète.",
    seoTitle: "Convertir une image en Base64 – Copier la chaîne",
    seoDescription:
      "Convertissez une image en Base64 gratuitement : les octets d’origine d’un JPG, PNG, WebP, GIF ou SVG, à copier en chaîne, en balise img HTML ou en règle CSS.",
    keywords: [
      "image en base64",
      "convertir une image en base64",
      "encoder une image en base64",
      "png en base64",
      "jpg en base64",
      "svg en base64",
      "chaîne base64 d’une image",
    ],
    howToSteps: [
      {
        title: "Ouvrez une image",
        description: "Déposez, choisissez ou collez n’importe quel fichier image. Les petites images, comme les icônes, conviennent le mieux.",
      },
      {
        title: "Récupérez la chaîne Base64",
        description: "La chaîne apparaît immédiatement, avec sa longueur en caractères et sa taille approximative.",
      },
      {
        title: "Copiez ce dont vous avez besoin",
        description: "Cliquez sur Copier le Base64 pour la chaîne seule, ou utilisez Copier le HTML ou Copier le CSS pour un extrait prêt à l’emploi.",
      },
      {
        title: "Collez-la dans votre code",
        description: "Collez la chaîne dans votre JSON, votre HTML, votre CSS ou votre script.",
      },
    ],
    features: [
      {
        title: "Encodage à l’octet près",
        description: "Le fichier d’origine est encodé tel quel, sans recompression ni changement de qualité.",
      },
      {
        title: "Informations de taille",
        description: "Voyez le nombre de caractères et la taille approximative de la chaîne avant de l’utiliser.",
      },
      {
        title: "Extraits HTML et CSS",
        description: "Copiez une balise img ou une règle background-image qui contient la data URI complète.",
      },
      {
        title: "Encodé en local",
        description: "Le fichier est lu et encodé dans votre navigateur et n’est jamais envoyé.",
      },
    ],
    faqs: [
      {
        question: "À quoi sert le Base64 pour les images ?",
        answer:
          "Le Base64 transforme les données binaires d’une image en caractères de texte. Les développeurs l’utilisent pour intégrer de petites images directement dans du HTML, du CSS, du JSON ou des modèles d’e-mail, sans charger de fichier image séparé.",
      },
      {
        question: "Pourquoi la chaîne Base64 est-elle plus lourde que le fichier image ?",
        answer:
          "Le Base64 utilise 4 caractères de texte pour 3 octets : le résultat est donc environ 33 % plus lourd. Une image de 30 KB devient environ 40 KB de texte.",
      },
      {
        question: "Quelle est la différence entre Base64 et data URI ?",
        answer:
          "Le Base64 est seulement le texte encodé. Une data URI ajoute un préfixe comme data:image/png;base64, pour que le navigateur connaisse le type de fichier. Cet outil donne la chaîne seule ; Image en data URI donne la version complète.",
      },
      {
        question: "Faut-il convertir de grandes images en Base64 ?",
        answer:
          "En général, non. Le Base64 convient surtout aux petites images comme les icônes. Les grandes photos alourdissent beaucoup votre HTML ou votre CSS, et le navigateur ne peut pas mettre l’image en cache comme un fichier séparé.",
      },
      {
        question: "Mon image est-elle modifiée pendant l’encodage ?",
        answer:
          "Non, ce sont les octets d’origine qui sont encodés. Seule exception : les photos HEIC d’iPhone, converties d’abord en PNG car la plupart des navigateurs ne savent pas afficher le HEIC.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Image en data URI",
    shortName: "Data URI",
    tagline: "Transformez une image en data URI complète, prête à coller dans un attribut src HTML ou une valeur CSS url().",
    intro:
      "Image en data URI convertit un fichier image en data URI : une seule ligne de texte qui contient à la fois le type de fichier et l’image encodée en Base64. Vous pouvez la coller directement dans un attribut src d’une balise img ou dans une valeur CSS url(), et l’image s’affiche sans fichier séparé. Le type MIME du préfixe est repris de votre fichier, et les octets de l’image ne sont pas modifiés.",
    seoTitle: "Convertir une image en data URI – Pour HTML et CSS",
    seoDescription:
      "Convertissez une image en data URI gratuitement : une chaîne data:image en Base64 avec le bon type MIME, à copier en balise img HTML ou en règle CSS.",
    keywords: [
      "image en data uri",
      "générateur de data uri",
      "convertir une image en data url",
      "data uri base64",
      "image intégrée en css",
      "intégrer une image en html",
      "image data url",
    ],
    howToSteps: [
      {
        title: "Ouvrez une image",
        description: "Déposez, choisissez ou collez n’importe quel fichier image, comme une icône, un logo ou un petit graphique.",
      },
      {
        title: "Récupérez la data URI",
        description: "La data URI complète, qui commence par data:image/, apparaît avec sa longueur et sa taille approximative.",
      },
      {
        title: "Copiez-la",
        description: "Cliquez sur Copier la data URI, ou utilisez Copier le HTML ou Copier le CSS pour un extrait prêt à l’emploi.",
      },
      {
        title: "Collez-la dans votre page",
        description: "Utilisez-la partout où une URL d’image classique fonctionne, comme une balise img ou un fond CSS.",
      },
    ],
    features: [
      {
        title: "Type MIME correct",
        description: "Le préfixe correspond à votre fichier, par exemple image/png, image/jpeg ou image/svg+xml.",
      },
      {
        title: "Octets d’origine",
        description: "Le fichier est encodé tel quel : la qualité et la taille ne changent pas à cause d’une recompression.",
      },
      {
        title: "Extraits prêts à copier",
        description: "Obtenez une balise img complète ou une règle background-image avec la data URI déjà intégrée.",
      },
      {
        title: "Confidentiel",
        description: "La data URI est créée dans votre navigateur : l’image n’est pas envoyée.",
      },
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’une data URI ?",
        answer:
          "Une data URI est un lien qui contient le fichier lui-même au lieu de pointer vers lui. Pour une image, elle commence par data:image/png;base64, ou un préfixe similaire, et le navigateur l’affiche comme une URL d’image classique.",
      },
      {
        question: "Comment utiliser une data URI en CSS ?",
        answer:
          "Cliquez sur Copier le CSS pour obtenir une règle background-image avec l’URI complète dans url(), puis collez-la dans votre feuille de style.",
      },
      {
        question: "Quand faut-il éviter les data URI ?",
        answer:
          "Évitez-les pour les grandes images et pour les images utilisées sur de nombreuses pages. Le texte encodé est environ un tiers plus lourd que le fichier, et le navigateur ne peut pas le mettre en cache séparément.",
      },
      {
        question: "Les images en data URI fonctionnent-elles dans les e-mails ?",
        answer:
          "Cela dépend. Beaucoup de logiciels de messagerie, dont certains webmails, n’affichent pas les images en data URI : testez votre e-mail ou utilisez une image hébergée en ligne.",
      },
      {
        question: "Quels types d’image sont pris en charge ?",
        answer:
          "Toutes les images que votre navigateur sait ouvrir, comme JPG, PNG, GIF, WebP, AVIF et SVG. Les photos HEIC d’iPhone sont d’abord converties en PNG : leur data URI utilise donc image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64 en image",
    shortName: "Base64 → Image",
    tagline: "Collez une chaîne Base64 ou une data URI pour afficher l’image et la télécharger en PNG, JPG ou WebP.",
    intro:
      "Base64 en image décode un texte Base64 pour retrouver une image que vous pouvez voir et enregistrer. Vous pouvez coller une chaîne Base64 seule, une data URI complète, ou un extrait CSS url() ou HTML src qui en contient une ; le Base64 compatible URL et les retours à la ligne sont gérés automatiquement. L’outil détecte si les données sont en PNG, JPEG, GIF, WebP, SVG, BMP ou AVIF, et affiche l’image décodée avec ses dimensions.",
    seoTitle: "Convertir Base64 en image – Aperçu et téléchargement",
    seoDescription:
      "Décodez du Base64 en image gratuitement : collez une chaîne Base64, une data URI ou un extrait CSS ou HTML, voyez l’image et téléchargez-la en PNG, JPG ou WebP.",
    keywords: [
      "base64 en image",
      "décoder une image base64",
      "base64 en png",
      "base64 en jpg",
      "data uri en image",
      "convertir une chaîne base64 en image",
      "visionneuse d’image base64",
    ],
    howToSteps: [
      {
        title: "Collez les données Base64",
        description: "Collez-les dans la zone de texte, cliquez sur Coller, ou chargez un fichier .txt qui contient la chaîne.",
      },
      {
        title: "Vérifiez l’aperçu",
        description: "L’image est décodée automatiquement et affichée avec sa largeur et sa hauteur. Un message d’erreur apparaît si le texte n’est pas valide.",
      },
      {
        title: "Choisissez un format d’export",
        description: "Sélectionnez PNG, JPG ou WebP.",
      },
      {
        title: "Téléchargez l’image",
        description: "Cliquez sur Télécharger pour l’enregistrer sur votre appareil.",
      },
    ],
    features: [
      {
        title: "Accepte de nombreuses formes",
        description:
          "Base64 seul, data URI, extraits CSS url() et HTML src, Base64 compatible URL, et texte réparti sur plusieurs lignes.",
      },
      {
        title: "Détection automatique du format",
        description: "Reconnaît PNG, JPEG, GIF, WebP, SVG, BMP et AVIF à partir des données elles-mêmes, même si le préfixe manque ou est faux.",
      },
      {
        title: "Aperçu immédiat",
        description: "Voyez l’image décodée et ses dimensions dès que vous collez le texte.",
      },
      {
        title: "Trois formats d’export",
        description: "Enregistrez le résultat en PNG, JPG ou WebP.",
      },
    ],
    faqs: [
      {
        question: "Quel type de texte Base64 puis-je coller ?",
        answer:
          "Une chaîne Base64 seule, une data URI comme data:image/png;base64,..., ou un extrait CSS ou HTML qui en contient une. Les espaces, les retours à la ligne et les caractères compatibles URL sont nettoyés automatiquement.",
      },
      {
        question: "Pourquoi ai-je une erreur ?",
        answer:
          "Le texte est souvent tronqué lors de la copie. Vérifiez que vous avez copié toute la chaîne, y compris la fin, qui peut contenir des signes =.",
      },
      {
        question: "Le fichier téléchargé est-il identique à l’original ?",
        answer:
          "L’image est décodée puis enregistrée de nouveau dans le format choisi. Le PNG garde chaque pixel, tandis que JPG et WebP sont de nouveau compressés. Les GIF animés deviennent une seule image fixe, et les graphiques SVG sont enregistrés en images matricielles.",
      },
      {
        question: "Comment l’outil sait-il de quel type d’image il s’agit ?",
        answer:
          "Chaque format commence par une signature connue, par exemple iVBORw0KGgo pour le PNG ou /9j/ pour le JPEG. L’outil lit ces premiers caractères pour décoder l’image correctement.",
      },
      {
        question: "Mes données Base64 sont-elles envoyées sur un serveur ?",
        answer: "Non. Le texte est décodé dans votre navigateur et l’image est créée sur votre appareil.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG en PNG",
    shortName: "SVG → PNG",
    tagline: "Convertissez des fichiers vectoriels SVG en images PNG nettes en taille 1x, 2x, 4x ou 8x, avec la transparence conservée.",
    intro:
      "SVG en PNG transforme un graphique vectoriel, comme un logo ou une icône, en image PNG pour les endroits qui n’acceptent pas les fichiers SVG. Choisissez 1x, 2x, 4x ou 8x la taille du SVG ; comme le vecteur est redessiné à cette taille, une échelle plus grande donne une image plus nette, et non plus floue. Les fonds transparents restent transparents dans le PNG.",
    seoTitle: "Convertir SVG en PNG – Haute résolution, transparent",
    seoDescription:
      "Convertissez un SVG en PNG gratuitement : export en 1x, 2x, 4x ou 8x pour des images nettes en haute résolution, avec fond transparent. Dans votre navigateur.",
    keywords: [
      "convertir svg en png",
      "svg en png",
      "svg en png haute résolution",
      "svg en png transparent",
      "exporter un svg en png",
      "convertisseur svg",
    ],
    howToSteps: [
      {
        title: "Ouvrez un fichier SVG",
        description: "Déposez un fichier .svg dans la zone d’import ou cliquez pour en choisir un.",
      },
      {
        title: "Choisissez l’échelle",
        description: "Sélectionnez 1x, 2x, 4x ou 8x. La largeur et la hauteur de sortie en pixels s’affichent sous les boutons.",
      },
      {
        title: "Téléchargez le PNG",
        description: "Cliquez sur Télécharger PNG pour enregistrer l’image, ou copiez-la dans le presse-papiers.",
      },
    ],
    features: [
      {
        title: "Net à toutes les échelles",
        description: "Le vecteur est redessiné à la taille choisie : les traits et le texte restent nets.",
      },
      {
        title: "Fond transparent",
        description: "Les zones sans remplissage du SVG restent transparentes dans le PNG.",
      },
      {
        title: "Aperçu de la taille de sortie",
        description: "Voyez les dimensions exactes en pixels pour chaque échelle avant de télécharger.",
      },
      {
        title: "PNG sans perte",
        description: "L’image rendue est enregistrée en PNG, sans perte due à la compression.",
      },
    ],
    faqs: [
      {
        question: "Comment obtenir un PNG en haute résolution à partir d’un SVG ?",
        answer:
          "Choisissez 4x ou 8x. Un SVG de 256 × 256 devient 1024 × 1024 en 4x ou 2048 × 2048 en 8x, et reste net car il est redessiné à cette taille.",
      },
      {
        question: "Pourquoi la taille de sortie n’est-elle pas celle que j’attendais ?",
        answer:
          "La taille 1x vient de la largeur et de la hauteur définies dans le fichier SVG. Si le SVG n’a qu’une viewBox, sans largeur ni hauteur, le navigateur peut utiliser une taille par défaut ; ajoutez les attributs width et height pour la contrôler.",
      },
      {
        question: "Pourquoi des polices ou des images manquent-elles dans mon PNG ?",
        answer:
          "Quand un SVG est dessiné comme une image, les navigateurs ne chargent pas les fichiers externes auxquels il renvoie, comme les polices web ou les images liées. Convertissez le texte en tracés et intégrez les images dans le SVG avant la conversion.",
      },
      {
        question: "Le PNG gardera-t-il le fond transparent ?",
        answer: "Oui. Toute zone du SVG sans remplissage ni fond reste transparente.",
      },
      {
        question: "Puis-je convertir un SVG en JPG ?",
        answer:
          "Cet outil enregistre uniquement en PNG. Pour obtenir un JPG, convertissez d’abord en PNG, puis ouvrez le PNG dans PNG en JPG, où vous pouvez aussi choisir une couleur de fond.",
      },
    ],
  },
  "photo-filters": {
    name: "Filtres et effets photo",
    shortName: "Filtres",
    tagline: "Appliquez des styles prêts à l’emploi comme Vintage, Noir ou Cinématique, puis réglez la luminosité, le contraste, les couleurs et le vignettage.",
    intro:
      "Filtres et effets photo change le style et l’ambiance d’une photo. Commencez par l’un des huit préréglages, comme Cinématique, Vintage années 70, Noir intense ou Coucher de soleil, puis réglez avec des curseurs la luminosité, le contraste, la saturation, le sépia, le noir et blanc, la teinte, la clarté, le vignettage et le flou doux. Une vue partagée vous permet de comparer la photo retouchée avec l’original avant de la télécharger en PNG, JPG ou WebP.",
    seoTitle: "Filtres photo en ligne – Effets et préréglages gratuits",
    seoDescription:
      "Filtres photo gratuits en ligne : Vintage, Noir, Cinématique et plus, réglage de la luminosité, du contraste, de la saturation et du vignettage, avant/après.",
    keywords: [
      "filtre photo en ligne",
      "ajouter un filtre à une photo",
      "mettre une photo en noir et blanc",
      "filtre photo vintage",
      "filtre sépia en ligne",
      "régler la luminosité et le contraste en ligne",
      "effet vignettage",
    ],
    howToSteps: [
      {
        title: "Importez une photo",
        description: "Déposez, choisissez ou collez une image JPG, PNG ou WebP.",
      },
      {
        title: "Choisissez un préréglage",
        description:
          "Essayez Cinématique, Vintage années 70, Cyberpunk, Noir intense, Coucher de soleil, Fondu froid, HDR dramatique ou Négatif. Original retire tous les effets.",
      },
      {
        title: "Affinez avec les curseurs",
        description:
          "Réglez la luminosité, le contraste, la saturation, le sépia, le noir et blanc, la teinte, la clarté, le vignettage et le flou doux jusqu’à obtenir le rendu voulu.",
      },
      {
        title: "Comparez et téléchargez",
        description: "Utilisez la comparaison avec l’original pour vérifier l’avant et l’après, puis téléchargez en PNG, WebP ou JPG, ou copiez l’image.",
      },
    ],
    features: [
      {
        title: "Huit préréglages en un clic",
        description: "Des styles prêts à l’emploi, des tons vintage chauds au noir et blanc très contrasté.",
      },
      {
        title: "Neuf curseurs de réglage",
        description: "Luminosité, contraste et saturation jusqu’à 200 %, plus sépia, noir et blanc, teinte, clarté, vignettage et flou.",
      },
      {
        title: "Vue avant/après",
        description: "Faites glisser la ligne de séparation sur la photo pour comparer l’original et la version retouchée, sur ordinateur comme sur écran tactile.",
      },
      {
        title: "Export en pleine résolution",
        description: "Les effets sont appliqués à la photo en pleine taille au moment du téléchargement.",
      },
    ],
    faqs: [
      {
        question: "Comment mettre une photo en noir et blanc ?",
        answer:
          "Cliquez sur le préréglage Noir intense pour un rendu très contrasté, ou réglez le curseur Noir et blanc sur 100 % et ajustez vous-même la luminosité et le contraste.",
      },
      {
        question: "Puis-je annuler un filtre ?",
        answer:
          "Oui. Cliquez sur Réinitialiser pour revenir à tout moment au rendu d’origine. Votre fichier d’origine n’est jamais modifié.",
      },
      {
        question: "Appliquer un filtre réduit-il la résolution ?",
        answer:
          "Non. Le fichier téléchargé a la même largeur et la même hauteur que votre photo d’origine.",
      },
      {
        question: "Quel format de téléchargement choisir ?",
        answer:
          "JPG et WebP sont enregistrés à 95 % de qualité et sont bien plus légers pour les photos. Le PNG garde chaque pixel mais donne des fichiers lourds pour les photos.",
      },
      {
        question: "Puis-je utiliser les filtres sur des photos HEIC d’iPhone ?",
        answer:
          "Cet outil n’ouvre pas les fichiers HEIC. Convertissez d’abord la photo en JPG avec le Convertisseur d’image universel, puis ouvrez le JPG ici.",
      },
    ],
  },
  "meme-generator": {
    name: "Générateur de mèmes",
    shortName: "Créer un mème",
    tagline: "Créez un mème à partir de votre photo ou d’un modèle, avec du texte bien visible en haut, au milieu et en bas.",
    intro:
      "Le générateur de mèmes ajoute des légendes de mème classiques sur une image. Importez votre propre image ou partez de l’un des huit modèles simples intégrés, puis saisissez les légendes du haut, du milieu et du bas ; les lignes longues passent automatiquement à la ligne pour tenir dans la largeur. Choisissez la police (Impact par défaut), la taille, la couleur du texte et du contour, l’alignement et les majuscules, puis téléchargez le mème en PNG, JPG ou WebP, sans filigrane.",
    seoTitle: "Générateur de mèmes – Ajoutez du texte à une image",
    seoDescription:
      "Créez un mème gratuitement : texte en haut, au milieu et en bas de votre photo ou d’un modèle, police, taille et contour au choix, téléchargement sans filigrane.",
    keywords: [
      "générateur de mème",
      "créer un mème",
      "faire un mème",
      "ajouter du texte de mème sur une image",
      "mème police impact",
      "générateur de mème sans filigrane",
      "mème personnalisé avec sa photo",
    ],
    howToSteps: [
      {
        title: "Choisissez une image",
        description: "Importez ou collez une image JPG, PNG ou WebP, ou cliquez sur l’un des modèles rapides.",
      },
      {
        title: "Écrivez les légendes",
        description: "Saisissez les légendes du haut et du bas, et ajoutez une légende au milieu si besoin.",
      },
      {
        title: "Mettez le texte en forme",
        description: "Choisissez la police, la taille, la couleur du texte, la couleur et l’épaisseur du contour, l’alignement, et l’utilisation ou non des majuscules.",
      },
      {
        title: "Téléchargez ou copiez",
        description: "Téléchargez le mème en PNG, WebP ou JPG, ou copiez-le dans le presse-papiers pour le coller dans une conversation.",
      },
    ],
    features: [
      {
        title: "Trois zones de texte",
        description: "Légendes en haut, au milieu et en bas, avec retour à la ligne automatique pour les textes longs.",
      },
      {
        title: "Style de mème classique",
        description: "Texte Impact blanc avec contour noir par défaut, ainsi que les polices Arial, Comic Sans, Montserrat et Times.",
      },
      {
        title: "Le texte suit la taille de l’image",
        description: "La taille du texte dépend de la hauteur de l’image : les légendes ont le même rendu sur les petites et les grandes images.",
      },
      {
        title: "Sans filigrane",
        description: "Votre mème est enregistré exactement tel que vous le voyez, sans logo ajouté.",
      },
    ],
    faqs: [
      {
        question: "Le mème a-t-il un filigrane ?",
        answer: "Non. L’image téléchargée contient uniquement votre image et vos légendes.",
      },
      {
        question: "Quelle police utilise-t-on généralement pour les mèmes ?",
        answer:
          "Le style de mème classique est l’Impact en blanc avec un contour noir, c’est le réglage par défaut ici. Si une police n’est pas installée sur votre appareil, le navigateur en utilise une proche.",
      },
      {
        question: "Puis-je utiliser ma propre image ?",
        answer: "Oui. Importez une image JPG, PNG ou WebP, ou collez-en une depuis le presse-papiers avec Ctrl+V.",
      },
      {
        question: "Ma légende couvre trop l’image. Que faire ?",
        answer:
          "Réduisez la taille du texte, ou déplacez une partie du texte dans la légende du milieu ou du bas. Les légendes longues passent automatiquement sur plusieurs lignes.",
      },
      {
        question: "Puis-je créer des mèmes sur mon téléphone ?",
        answer:
          "Oui. Le générateur de mèmes fonctionne dans les navigateurs mobiles ; saisissez vos légendes et utilisez le bouton de téléchargement pour enregistrer l’image.",
      },
    ],
  },
  "split-image": {
    name: "Découper une image en grille",
    shortName: "Découper en grille",
    tagline: "Découpez une image en grille de tuiles, comme une grille Instagram 3×3 ou un carrousel panoramique, et téléchargez un ZIP.",
    intro:
      "Découper une image en grille divise une image en lignes et en colonnes de fichiers séparés. Utilisez le préréglage Instagram 3×3 pour une grille de profil, Panorama 3×1 ou Carrousel 2×1 pour des publications à faire défiler, 2×2 pour quatre parts égales, ou définissez votre propre grille jusqu’à 12 lignes et 12 colonnes. Toutes les tuiles se téléchargent ensemble sous forme de fichiers PNG numérotés dans un ZIP, ou vous pouvez cliquer sur une tuile pour n’enregistrer qu’elle.",
    seoTitle: "Découper une image en grille – Instagram 3×3, panorama",
    seoDescription:
      "Découpez une image en grille gratuitement : grille Instagram 3x3, carrousel panoramique ou grille jusqu’à 12x12, et toutes les tuiles dans un seul ZIP.",
    keywords: [
      "découper une image en grille",
      "découper une image en plusieurs parties",
      "créer une grille instagram",
      "découper un panorama pour un carrousel instagram",
      "couper une image en morceaux",
      "photo en grille 3x3",
      "diviser une image en tuiles",
    ],
    howToSteps: [
      {
        title: "Importez votre image",
        description: "Déposez, choisissez ou collez une image JPG, PNG ou WebP.",
      },
      {
        title: "Choisissez la grille",
        description:
          "Choisissez Grille Instagram 3×3, Panorama 3×1, Carrousel 2×1 ou Quatre carrés (2×2), ou saisissez votre propre nombre de lignes et de colonnes.",
      },
      {
        title: "Vérifiez l’aperçu",
        description: "L’aperçu montre où l’image sera coupée et le numéro de chaque tuile.",
      },
      {
        title: "Téléchargez les tuiles",
        description: "Cliquez sur Télécharger toutes les tuiles (ZIP), ou cliquez sur une tuile dans l’aperçu pour ne télécharger qu’elle.",
      },
    ],
    features: [
      {
        title: "Préréglages pour les réseaux sociaux",
        description: "En un clic : une grille de profil 3×3, un carrousel panoramique de 3 ou 2 images, ou un découpage 2×2.",
      },
      {
        title: "Grilles personnalisées",
        description: "Toutes les combinaisons de 1 à 12 lignes et de 1 à 12 colonnes, jusqu’à 144 tuiles.",
      },
      {
        title: "Tuiles numérotées",
        description: "Les fichiers sont nommés tile_01, tile_02, etc., de gauche à droite et de haut en bas.",
      },
      {
        title: "Aucune perte de qualité",
        description: "Les tuiles sont découpées dans l’image en pleine résolution et enregistrées en PNG sans perte.",
      },
    ],
    faqs: [
      {
        question: "Dans quel ordre publier les tuiles sur Instagram ?",
        answer:
          "Les tuiles sont numérotées de gauche à droite et de haut en bas, à partir de tile_01. Instagram affiche la publication la plus récente en premier : publiez d’abord la dernière tuile (tile_09 pour une grille 3×3) et terminez par tile_01.",
      },
      {
        question: "Quelle image utiliser pour une grille 3×3 ?",
        answer:
          "Pour des tuiles carrées, partez d’une image carrée ; rognez-la d’abord en 1:1 si besoin. Instagram peut afficher les miniatures du profil avec un recadrage différent : vérifiez le résultat après la publication.",
      },
      {
        question: "Comment découper un panorama pour un carrousel ?",
        answer:
          "Choisissez Panorama 3×1 pour trois images ou Carrousel 2×1 pour deux. Pour des images carrées, la photo doit être trois fois (ou deux fois) plus large que haute.",
      },
      {
        question: "Toutes les tuiles ont-elles exactement la même taille ?",
        answer:
          "Si la largeur ou la hauteur ne se divise pas exactement, la dernière colonne ou la dernière ligne reçoit les pixels en trop : elle peut donc être plus grande d’un ou deux pixels.",
      },
      {
        question: "Le découpage réduit-il la qualité de l’image ?",
        answer: "Non. Chaque tuile est découpée dans les pixels d’origine et enregistrée en PNG, un format sans perte.",
      },
    ],
  },
  "censor-image": {
    name: "Flouter ou pixeliser une image",
    shortName: "Censurer",
    tagline: "Masquez des visages, des plaques d’immatriculation, des noms ou des numéros sur une photo avec une bande noire, une pixellisation ou un flou.",
    intro:
      "Flouter ou pixeliser une image masque les informations privées d’une photo avant de la partager. Dessinez des rectangles ou des ovales sur les visages, les plaques d’immatriculation, les adresses ou les numéros de compte, et choisissez pour chaque zone une bande noire, une pixellisation ou un flou. Les zones floutées sont posées sur une couche fortement pixelisée : les détails d’origine ne peuvent pas réapparaître sur les bords.",
    seoTitle: "Flouter ou pixeliser une image – Visages et texte",
    seoDescription:
      "Floutez, pixelisez ou masquez en noir des visages, des plaques d’immatriculation et du texte privé, avec des rectangles ou des ovales. Gratuit, rien n’est envoyé.",
    keywords: [
      "flouter une image en ligne",
      "pixeliser une image",
      "censurer une photo",
      "flouter un visage sur une photo",
      "masquer une partie d’une image",
      "cacher du texte sur une capture d’écran",
      "flouter une plaque d’immatriculation",
    ],
    howToSteps: [
      {
        title: "Importez l’image",
        description: "Déposez, choisissez ou collez une image JPG, PNG ou WebP, comme une photo ou une capture d’écran.",
      },
      {
        title: "Choisissez la forme et la méthode",
        description:
          "Sélectionnez Rectangle ou Ovale, puis Pixeliser, Flouter ou Bande noire. Pour la pixellisation et le flou, réglez l’intensité de 4 à 45.",
      },
      {
        title: "Dessinez sur les informations privées",
        description: "Faites glisser sur chaque zone à masquer. Utilisez Annuler pour retirer la dernière zone, ou supprimez toutes les zones pour recommencer.",
      },
      {
        title: "Téléchargez l’image censurée",
        description: "Téléchargez-la en PNG, WebP ou JPG, ou copiez-la dans le presse-papiers.",
      },
    ],
    features: [
      {
        title: "Trois méthodes de masquage",
        description: "Bandes noires unies, pixellisation en mosaïque, ou flou par-dessus une base pixelisée.",
      },
      {
        title: "Rectangles et ovales",
        description: "Utilisez des ovales pour les visages et des rectangles pour le texte, les plaques et les numéros.",
      },
      {
        title: "Plusieurs méthodes sur une même image",
        description: "Chaque zone garde la méthode et l’intensité utilisées pour la dessiner : vous pouvez masquer un nom en noir et flouter un visage.",
      },
      {
        title: "Fiable sur les grandes photos",
        description: "L’intensité est adaptée à la résolution de l’image : les photos en haute résolution sont masquées tout aussi bien.",
      },
      {
        title: "Annuler et tout effacer",
        description: "Retirez la dernière zone ou toutes les zones sans recharger la photo.",
      },
    ],
    faqs: [
      {
        question: "Quelle méthode est la plus sûre pour masquer du texte ?",
        answer:
          "La bande noire remplace complètement les pixels : c’est le choix le plus sûr pour les mots de passe, les numéros de compte et les documents. Une pixellisation ou un flou fort fonctionne aussi, mais un petit texte avec des réglages faibles peut parfois être deviné.",
      },
      {
        question: "Quelqu’un peut-il annuler le flou dans le fichier téléchargé ?",
        answer:
          "Les pixels de chaque zone sont remplacés dans l’image téléchargée, et non cachés sur un calque séparé. Votre photo d’origine sur votre appareil n’est pas modifiée : ne partagez que la copie censurée.",
      },
      {
        question: "Les données EXIF sont-elles aussi supprimées ?",
        answer:
          "Oui. Le fichier téléchargé est créé à partir des pixels affichés : les informations de l’appareil photo et la position GPS de l’original n’y figurent pas.",
      },
      {
        question: "Puis-je utiliser différents effets sur la même image ?",
        answer:
          "Oui. Changez la méthode ou l’intensité avant de dessiner la zone suivante. Les zones déjà dessinées gardent leurs propres réglages.",
      },
      {
        question: "Est-ce que cela fonctionne sur téléphone ?",
        answer: "Oui. Faites glisser votre doigt sur la zone à masquer pour dessiner un rectangle ou un ovale.",
      },
    ],
  },
  "remove-background": {
    name: "Supprimer l’arrière-plan",
    shortName: "Supprimer le fond",
    tagline: "Supprimez l’arrière-plan d’une photo avec un modèle d’IA qui fonctionne sur votre appareil, et enregistrez un PNG transparent.",
    intro:
      "Supprimer l’arrière-plan détoure le sujet principal d’une photo et retire tout ce qui se trouve derrière. L’outil utilise un modèle d’IA qui fonctionne dans votre navigateur : vos images ne quittent jamais votre appareil. Le mode Personnes utilise un petit modèle rapide qui fonctionne bien sur téléphone et convient surtout aux personnes, tandis que le mode Objets (HQ) utilise un modèle plus grand pour les produits, les animaux et les autres objets. Enregistrez le résultat en PNG transparent, ou placez-le sur une couleur unie et enregistrez-le en PNG ou JPG.",
    seoTitle: "Supprimer l’arrière-plan d’une image – Gratuit, en local",
    seoDescription:
      "Supprimez l’arrière-plan d’une image gratuitement, avec une IA intégrée à votre navigateur. PNG transparent ou fond uni. Vos photos restent sur votre appareil.",
    keywords: [
      "supprimer l’arrière-plan d’une image",
      "supprimer le fond d’une photo",
      "détourer une image",
      "enlever le fond d’une photo gratuitement",
      "rendre le fond transparent",
      "fond transparent png",
      "détourer une photo en ligne",
    ],
    howToSteps: [
      {
        title: "Importez une photo",
        description: "Déposez, choisissez ou collez une image JPG, PNG ou WebP.",
      },
      {
        title: "Choisissez un mode",
        description:
          "Personnes est sélectionné par défaut et convient surtout aux personnes. Choisissez Objets (HQ) pour les produits, les animaux et les autres sujets, de préférence sur un navigateur d’ordinateur.",
      },
      {
        title: "Attendez le résultat",
        description:
          "La première fois, le modèle est téléchargé dans votre navigateur ; ensuite, il est chargé depuis le cache du navigateur. L’arrière-plan est alors supprimé sur votre appareil.",
      },
      {
        title: "Choisissez le fond et téléchargez",
        description: "Gardez-le transparent et enregistrez en PNG, ou choisissez une couleur unie et enregistrez en PNG ou JPG.",
      },
    ],
    features: [
      {
        title: "Une IA qui fonctionne sur votre appareil",
        description: "Le modèle fonctionne dans votre navigateur : vos photos ne sont jamais envoyées sur un serveur.",
      },
      {
        title: "Deux modèles",
        description: "Un petit modèle rapide pour les personnes, et un modèle plus grand, de haute qualité, pour les produits, les animaux et les objets.",
      },
      {
        title: "Téléchargé une seule fois",
        description: "Votre navigateur garde le modèle après la première utilisation : les images suivantes démarrent bien plus vite.",
      },
      {
        title: "Fond transparent ou coloré",
        description: "Enregistrez un PNG transparent, ou placez le sujet sur la couleur unie de votre choix.",
      },
    ],
    faqs: [
      {
        question: "Mes photos sont-elles envoyées sur un serveur ?",
        answer:
          "Non. Seul le modèle d’IA est téléchargé dans votre navigateur. Vos photos sont traitées sur votre appareil et ne sont envoyées nulle part.",
      },
      {
        question: "Pourquoi la première utilisation prend-elle plus de temps ?",
        answer:
          "Le modèle doit d’abord être téléchargé : environ 7 à 13 MB pour le mode Personnes et environ 115 MB pour le mode Objets (HQ). Votre navigateur le garde, donc les utilisations suivantes démarrent bien plus vite.",
      },
      {
        question: "Quel mode choisir ?",
        answer:
          "Utilisez Personnes pour les photos de personnes : il est rapide et fonctionne sur téléphone. Utilisez Objets (HQ) pour les produits, les animaux et les autres sujets, surtout quand les contours comptent.",
      },
      {
        question: "Est-ce que cela fonctionne sur iPhone et Android ?",
        answer:
          "Oui, le mode Personnes est conçu pour fonctionner sur téléphone. Le mode Objets (HQ) est bien plus lourd et fonctionne mieux dans un navigateur d’ordinateur compatible WebGPU ; sur un téléphone, il peut être lent ou manquer de mémoire.",
      },
      {
        question: "Puis-je mettre une nouvelle couleur de fond derrière le sujet ?",
        answer:
          "Oui. Choisissez une couleur unie, puis enregistrez en PNG ou JPG. Pour un fond transparent, enregistrez en PNG.",
      },
      {
        question: "Pourquoi certains contours ne sont-ils pas parfaits ?",
        answer:
          "Les cheveux fins, la fourrure, le verre et les sujets de couleur proche de l’arrière-plan sont difficiles pour tous les modèles. Essayez le mode Objets (HQ), ou utilisez une photo avec un contraste net entre le sujet et l’arrière-plan.",
      },
    ],
  },
};
