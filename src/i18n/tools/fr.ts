import { LocalizedToolItem } from '../types';
import { enTools } from './en';

export const frTools: Record<string, LocalizedToolItem> = {
  'crop-image': {
    "name": "Recadrer une Image",
    "shortName": "Recadrer",
    "tagline": "Recadrez vos photos selon des formats fixes ou personnalisés avec prévisualisation en direct",
    "seoTitle": "Recadrer une Image Gratuitement en Ligne — Outil de Recadrage Photo",
    "seoDescription": "Recadrez des images JPG, PNG et WebP en ligne gratuitement. Formats carrés 1:1, 16:9, 4:3 et avatar circulaire avec 100% de confidentialité locale.",
    "keywords": [
        "recadrer image en ligne",
        "rogner photo gratuit",
        "recadrer photo cercle",
        "crop image en ligne"
    ],
    "howToSteps": [
        {
            "title": "Importez votre photo",
            "description": "Glissez-déposez votre image dans l’espace de travail."
        },
        {
            "title": "Ajustez le cadre",
            "description": "Choisissez un ratio (1:1, 16:9, etc.) ou ajustez librement les poignées."
        },
        {
            "title": "Téléchargez",
            "description": "Cliquez sur Télécharger pour obtenir votre image recadrée."
        }
    ],
    "features": [
        "100% Traitement dans le navigateur",
        "Ratios prédéfinis et mode libre",
        "Support de l’avatar circulaire",
        "Export haute résolution"
    ],
    "faqs": [
        {
            "question": "Mes photos sont-elles téléchargées sur un serveur ?",
            "answer": "Non. Le traitement s’exécute exclusivement dans votre navigateur avec HTML5 Canvas."
        },
        {
            "question": "Puis-je créer un avatar rond pour profil ?",
            "answer": "Oui, choisissez le préréglage Cercle / Avatar pour générer un rond parfait avec fond transparent."
        }
    ]
},
  'resize-image': {
    "name": "Redimensionner une Image",
    "shortName": "Redimensionner",
    "tagline": "Modifiez la largeur et la hauteur en pixels ou pourcentage en conservant les proportions",
    "seoTitle": "Redimensionner une Image en Ligne Gratuitement — Changer la Taille",
    "seoDescription": "Redimensionnez des images JPG, PNG et WebP en pixels exacts ou en pourcentage. Verrouillez les proportions et exportez instantanément.",
    "keywords": [
        "redimensionner image en ligne",
        "changer taille photo",
        "modifier dimensions image",
        "redimensionner photo gratuit"
    ],
    "howToSteps": [
        {
            "title": "Sélectionnez votre image",
            "description": "Déposez votre fichier dans la zone de téléversement."
        },
        {
            "title": "Indiquez les dimensions",
            "description": "Saisissez la largeur, la hauteur ou le pourcentage souhaité."
        },
        {
            "title": "Téléchargez",
            "description": "Enregistrez votre image redimensionnée sans perte."
        }
    ],
    "features": [
        "Redimensionnement par pixels ou %",
        "Verrouillage du ratio d’aspect",
        "Prévention de l’upscaling flou",
        "Formats WebP, PNG, JPG"
    ],
    "faqs": [
        {
            "question": "Comment conserver les proportions ?",
            "answer": "Activez la case de verrouillage du ratio pour que la hauteur s’ajuste automatiquement."
        }
    ]
},
  'compress-image': {
    "name": "Compresser une Image",
    "shortName": "Compresser",
    "tagline": "Réduisez le poids en Ko/Mo de vos fichiers JPG, PNG et WebP avec une qualité visuelle préservée",
    "seoTitle": "Compresser une Image en Ligne Gratuitement — Réduire le Poids sans Perte",
    "seoDescription": "Compressez vos images en ligne gratuitement. Réduisez le poids de vos fichiers JPG, PNG et WebP directement dans votre navigateur.",
    "keywords": [
        "compresser image en ligne",
        "reduire poids photo",
        "optimiser image web",
        "compresser jpg gratuit"
    ],
    "howToSteps": [
        {
            "title": "Chargez votre image",
            "description": "Glissez votre photo dans la zone de compression."
        },
        {
            "title": "Réglez la qualité",
            "description": "Ajustez le curseur pour équilibrer taille et netteté."
        },
        {
            "title": "Téléchargez",
            "description": "Récupérez votre fichier optimisé."
        }
    ],
    "features": [
        "Compression visuellement sans perte",
        "Comparaison en direct taille initiale vs finale",
        "Conversion optionnelle en WebP",
        "Confidentialité totale"
    ],
    "faqs": [
        {
            "question": "Quel format compresse le mieux ?",
            "answer": "Le format WebP offre généralement 30% à 50% d’économie de poids par rapport au JPEG standard."
        }
    ]
},
  'rotate-image': {
    "name": "Faire Pivoter une Image",
    "shortName": "Rotate",
    "tagline": "Online Rotate Image — Fast, private, and client-side processing",
    "seoTitle": "Rotate Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Rotate Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "rotate-image",
        "rotate image",
        "free online rotate image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'flip-image': {
    "name": "Retourner une Image",
    "shortName": "Flip",
    "tagline": "Online Flip Image — Fast, private, and client-side processing",
    "seoTitle": "Flip Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Flip Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "flip-image",
        "flip image",
        "free online flip image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'convert-image': {
    "name": "Image Converter",
    "shortName": "Convert",
    "tagline": "Online Image Converter — Fast, private, and client-side processing",
    "seoTitle": "Image Converter Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Image Converter online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "convert-image",
        "image converter",
        "free online image converter"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'jpg-to-png': {
    "name": "JPG to PNG",
    "shortName": "JPG to PNG",
    "tagline": "Online JPG to PNG — Fast, private, and client-side processing",
    "seoTitle": "JPG to PNG Online Free (FR) — Image Toolbox",
    "seoDescription": "Use JPG to PNG online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "jpg-to-png",
        "jpg to png",
        "free online jpg to png"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'png-to-jpg': {
    "name": "PNG to JPG",
    "shortName": "PNG to JPG",
    "tagline": "Online PNG to JPG — Fast, private, and client-side processing",
    "seoTitle": "PNG to JPG Online Free (FR) — Image Toolbox",
    "seoDescription": "Use PNG to JPG online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "png-to-jpg",
        "png to jpg",
        "free online png to jpg"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'jpg-to-webp': {
    "name": "JPG to WebP",
    "shortName": "JPG to WebP",
    "tagline": "Online JPG to WebP — Fast, private, and client-side processing",
    "seoTitle": "JPG to WebP Online Free (FR) — Image Toolbox",
    "seoDescription": "Use JPG to WebP online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "jpg-to-webp",
        "jpg to webp",
        "free online jpg to webp"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'png-to-webp': {
    "name": "PNG to WebP",
    "shortName": "PNG to WebP",
    "tagline": "Online PNG to WebP — Fast, private, and client-side processing",
    "seoTitle": "PNG to WebP Online Free (FR) — Image Toolbox",
    "seoDescription": "Use PNG to WebP online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "png-to-webp",
        "png to webp",
        "free online png to webp"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'webp-to-jpg': {
    "name": "WebP to JPG",
    "shortName": "WebP to JPG",
    "tagline": "Online WebP to JPG — Fast, private, and client-side processing",
    "seoTitle": "WebP to JPG Online Free (FR) — Image Toolbox",
    "seoDescription": "Use WebP to JPG online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "webp-to-jpg",
        "webp to jpg",
        "free online webp to jpg"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'webp-to-png': {
    "name": "WebP to PNG",
    "shortName": "WebP to PNG",
    "tagline": "Online WebP to PNG — Fast, private, and client-side processing",
    "seoTitle": "WebP to PNG Online Free (FR) — Image Toolbox",
    "seoDescription": "Use WebP to PNG online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "webp-to-png",
        "webp to png",
        "free online webp to png"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'bulk-image-resizer': {
    "name": "Bulk Image Resizer",
    "shortName": "Bulk Resize",
    "tagline": "Online Bulk Image Resizer — Fast, private, and client-side processing",
    "seoTitle": "Bulk Image Resizer Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Bulk Image Resizer online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "bulk-image-resizer",
        "bulk image resizer",
        "free online bulk image resizer"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'bulk-image-compressor': {
    "name": "Bulk Image Compressor",
    "shortName": "Bulk Compress",
    "tagline": "Online Bulk Image Compressor — Fast, private, and client-side processing",
    "seoTitle": "Bulk Image Compressor Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Bulk Image Compressor online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "bulk-image-compressor",
        "bulk image compressor",
        "free online bulk image compressor"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'remove-image-metadata': {
    "name": "Remove Image Metadata",
    "shortName": "Strip Metadata",
    "tagline": "Online Remove Image Metadata — Fast, private, and client-side processing",
    "seoTitle": "Remove Image Metadata Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Remove Image Metadata online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "remove-image-metadata",
        "remove image metadata",
        "free online remove image metadata"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'image-analyzer': {
    "name": "Analyseur d'Image",
    "shortName": "Analyzer",
    "tagline": "Online Image Analyzer — Fast, private, and client-side processing",
    "seoTitle": "Image Analyzer Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Image Analyzer online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "image-analyzer",
        "image analyzer",
        "free online image analyzer"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'image-color-picker': {
    "name": "Image Color Picker",
    "shortName": "Color Picker",
    "tagline": "Online Image Color Picker — Fast, private, and client-side processing",
    "seoTitle": "Image Color Picker Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Image Color Picker online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "image-color-picker",
        "image color picker",
        "free online image color picker"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'image-palette-generator': {
    "name": "Image Palette Generator",
    "shortName": "Palette",
    "tagline": "Online Image Palette Generator — Fast, private, and client-side processing",
    "seoTitle": "Image Palette Generator Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Image Palette Generator online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "image-palette-generator",
        "image palette generator",
        "free online image palette generator"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'add-text-to-image': {
    "name": "Add Text to Image",
    "shortName": "Add Text",
    "tagline": "Online Add Text to Image — Fast, private, and client-side processing",
    "seoTitle": "Add Text to Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Add Text to Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "add-text-to-image",
        "add text to image",
        "free online add text to image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'watermark-image': {
    "name": "Watermark Image",
    "shortName": "Watermark",
    "tagline": "Online Watermark Image — Fast, private, and client-side processing",
    "seoTitle": "Watermark Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Watermark Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "watermark-image",
        "watermark image",
        "free online watermark image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'add-border-to-image': {
    "name": "Add Border to Image",
    "shortName": "Add Border",
    "tagline": "Online Add Border to Image — Fast, private, and client-side processing",
    "seoTitle": "Add Border to Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Add Border to Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "add-border-to-image",
        "add border to image",
        "free online add border to image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'round-image': {
    "name": "Arrondir les Coins d'Image",
    "shortName": "Round Corners",
    "tagline": "Online Round Image — Fast, private, and client-side processing",
    "seoTitle": "Round Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Round Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "round-image",
        "round image",
        "free online round image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'favicon-generator': {
    "name": "Générateur de Favicon",
    "shortName": "Favicon",
    "tagline": "Online Favicon Generator — Fast, private, and client-side processing",
    "seoTitle": "Favicon Generator Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Favicon Generator online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "favicon-generator",
        "favicon generator",
        "free online favicon generator"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'image-to-base64': {
    "name": "Image to Base64",
    "shortName": "Image to Base64",
    "tagline": "Online Image to Base64 — Fast, private, and client-side processing",
    "seoTitle": "Image to Base64 Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Image to Base64 online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "image-to-base64",
        "image to base64",
        "free online image to base64"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'image-to-data-uri': {
    "name": "Image to Data URI",
    "shortName": "Image to Data URI",
    "tagline": "Online Image to Data URI — Fast, private, and client-side processing",
    "seoTitle": "Image to Data URI Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Image to Data URI online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "image-to-data-uri",
        "image to data uri",
        "free online image to data uri"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'base64-to-image': {
    "name": "Base64 to Image",
    "shortName": "Base64 to Image",
    "tagline": "Online Base64 to Image — Fast, private, and client-side processing",
    "seoTitle": "Base64 to Image Online Free (FR) — Image Toolbox",
    "seoDescription": "Use Base64 to Image online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "base64-to-image",
        "base64 to image",
        "free online base64 to image"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
},
  'svg-to-png': {
    "name": "SVG to PNG",
    "shortName": "SVG to PNG",
    "tagline": "Online SVG to PNG — Fast, private, and client-side processing",
    "seoTitle": "SVG to PNG Online Free (FR) — Image Toolbox",
    "seoDescription": "Use SVG to PNG online for free in your browser with 100% client-side privacy. Fast processing with zero server uploads.",
    "keywords": [
        "svg-to-png",
        "svg to png",
        "free online svg to png"
    ],
    "howToSteps": [
        {
            "title": "Upload image",
            "description": "Select your photo or drop it into the workspace."
        },
        {
            "title": "Process",
            "description": "Adjust settings and preview the results in real time."
        },
        {
            "title": "Download",
            "description": "Save your processed image file instantly."
        }
    ],
    "features": [
        "100% In-Browser Execution",
        "No server uploads",
        "Instant download",
        "High quality"
    ],
    "faqs": [
        {
            "question": "Is this tool completely free and private?",
            "answer": "Yes, all processing occurs directly in your web browser with HTML5 Canvas. Your images are never uploaded to any server."
        }
    ]
}
};

export function getFRTool(slug: string): LocalizedToolItem {
  return frTools[slug] || enTools[slug];
}
