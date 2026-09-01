import { LocalizedToolItem } from '../types';
import { enTools } from './en';

export const jaTools: Record<string, LocalizedToolItem> = {
  'crop-image': {
    "name": "画像を切り抜き・トリミング",
    "shortName": "トリミング",
    "tagline": "自由指定や標準比率（1:1、16:9、円形アイコン）で画像を簡単切り抜き",
    "seoTitle": "画像トリミング・切り抜き無料オンライン — ブラウザで安全加工",
    "seoDescription": "JPG、PNG、WebP画像をブラウザ上で直接トリミング。1:1正方形、16:9、SNS用円形アイコン対応、サーバー送信なしの安心セキュリティ。",
    "keywords": [
        "画像トリミング オンライン",
        "写真 切り抜き 無料",
        "円形 アイコン 作成",
        "画像 クロップ"
    ],
    "howToSteps": [
        {
            "title": "画像を読み込む",
            "description": "切り抜きたい画像をドラッグ＆ドロップします。"
        },
        {
            "title": "切り抜き範囲を指定",
            "description": "比率（1:1、16:9など）を選択するか、枠を自由に調整します。"
        },
        {
            "title": "ダウンロード",
            "description": "「ダウンロード」をクリックして即座に保存します。"
        }
    ],
    "features": [
        "100% ブラウザ内処理・安全性",
        "1:1、16:9、4:3、円形アイコン比率",
        "90度回転・反転機能",
        "高解像度書き出し"
    ],
    "faqs": [
        {
            "question": "画像はサーバーに送信されますか？",
            "answer": "いいえ。HTML5 Canvas により端末内でのみ処理されるため、外部流出の心配はありません。"
        },
        {
            "question": "SNS用の丸いアイコンを作成できますか？",
            "answer": "はい。「円形 / アイコン」を選択することで、透過背景の丸型画像を即座に作成できます。"
        }
    ]
},
  'resize-image': {
    "name": "画像リサイズ・サイズ変更",
    "shortName": "リサイズ",
    "tagline": "ピクセル単位やパーセント指定で縦横比を固定したまま画像サイズを変更",
    "seoTitle": "画像リサイズ無料オンライン — 写真の解像度・サイズ変更",
    "seoDescription": "画像の幅・高さをピクセルまたはパーセントで変更。縦横比固定、画質劣化防止、瞬時ダウンロード。",
    "keywords": [
        "画像リサイズ オンライン",
        "写真 サイズ変更 無料",
        "画像 ピクセル 変更",
        "画像 拡大 縮小"
    ],
    "howToSteps": [
        {
            "title": "画像を選択",
            "description": "サイズ変更したいファイルを読み込みます。"
        },
        {
            "title": "サイズを入力",
            "description": "希望する幅や高さ、または倍率（%）を指定します。"
        },
        {
            "title": "保存",
            "description": "変更後の画像をダウンロードします。"
        }
    ],
    "features": [
        "ピクセル/パーセント指定",
        "縦横比自動ロック",
        "劣化防止",
        "WebP/PNG/JPG対応"
    ],
    "faqs": [
        {
            "question": "アスペクト比を崩さずに変更できますか？",
            "answer": "縦横比ロックをオンにしておけば、幅を変更すると高さが自動計算されます。"
        }
    ]
},
  'compress-image': {
    "name": "画像圧縮・容量削減",
    "shortName": "圧縮",
    "tagline": "画質を保ちながらJPG、PNG、WebPファイルのデータ容量（KB/MB）を大幅削減",
    "seoTitle": "画像圧縮無料オンライン — 画質を落とさずファイルサイズ軽量化",
    "seoDescription": "ブラウザ上で画像を無料圧縮。Webサイト表示高速化やメール添付に最適なWebP/JPEG最適化。",
    "keywords": [
        "画像圧縮 オンライン",
        "写真 容量 減らす",
        "画像 軽量化 無料",
        "jpg 圧縮"
    ],
    "howToSteps": [
        {
            "title": "ファイルをドロップ",
            "description": "圧縮したい画像を選択します。"
        },
        {
            "title": "圧縮率を調整",
            "description": "スライダーで画質とファイルサイズのバランスを決めます。"
        },
        {
            "title": "ダウンロード",
            "description": "軽量化された画像を取得します。"
        }
    ],
    "features": [
        "視覚的無劣化圧縮",
        "リアルタイム削減率表示",
        "WebP変換対応",
        "完全無料・制限なし"
    ],
    "faqs": [
        {
            "question": "WebPに変換するとどれくらい軽くなりますか？",
            "answer": "同等画質のJPEGと比較して、通常30〜50%程度の容量削減が期待できます。"
        }
    ]
},
  'rotate-image': {
    "name": "画像を回転・傾き補正",
    "shortName": "Rotate",
    "tagline": "Online Rotate Image — Fast, private, and client-side processing",
    "seoTitle": "Rotate Image Online Free (JA) — Image Toolbox",
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
    "name": "画像を反転・ミラー",
    "shortName": "Flip",
    "tagline": "Online Flip Image — Fast, private, and client-side processing",
    "seoTitle": "Flip Image Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Image Converter Online Free (JA) — Image Toolbox",
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
    "seoTitle": "JPG to PNG Online Free (JA) — Image Toolbox",
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
    "seoTitle": "PNG to JPG Online Free (JA) — Image Toolbox",
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
    "seoTitle": "JPG to WebP Online Free (JA) — Image Toolbox",
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
    "seoTitle": "PNG to WebP Online Free (JA) — Image Toolbox",
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
    "seoTitle": "WebP to JPG Online Free (JA) — Image Toolbox",
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
    "seoTitle": "WebP to PNG Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Bulk Image Resizer Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Bulk Image Compressor Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Remove Image Metadata Online Free (JA) — Image Toolbox",
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
    "name": "画像解析・プロパティ確認",
    "shortName": "Analyzer",
    "tagline": "Online Image Analyzer — Fast, private, and client-side processing",
    "seoTitle": "Image Analyzer Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Image Color Picker Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Image Palette Generator Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Add Text to Image Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Watermark Image Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Add Border to Image Online Free (JA) — Image Toolbox",
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
    "name": "画像を丸く切り抜き",
    "shortName": "Round Corners",
    "tagline": "Online Round Image — Fast, private, and client-side processing",
    "seoTitle": "Round Image Online Free (JA) — Image Toolbox",
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
    "name": "ファビコン作成ツール",
    "shortName": "Favicon",
    "tagline": "Online Favicon Generator — Fast, private, and client-side processing",
    "seoTitle": "Favicon Generator Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Image to Base64 Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Image to Data URI Online Free (JA) — Image Toolbox",
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
    "seoTitle": "Base64 to Image Online Free (JA) — Image Toolbox",
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
    "seoTitle": "SVG to PNG Online Free (JA) — Image Toolbox",
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

export function getJATool(slug: string): LocalizedToolItem {
  return jaTools[slug] || enTools[slug];
}
