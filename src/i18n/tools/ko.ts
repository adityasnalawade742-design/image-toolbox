import { LocalizedToolItem } from '../types';
import { enTools } from './en';

export const koTools: Record<string, LocalizedToolItem> = {
  'crop-image': {
    "name": "이미지 자르기 및 트리밍",
    "shortName": "자르기",
    "tagline": "정사각형, 16:9, 원형 프로필 등 원하는 비율로 안전하게 사진 자르기",
    "seoTitle": "이미지 자르기 무료 온라인 — 브라우저 사진 자르기 도구",
    "seoDescription": "JPG, PNG, WebP 이미지를 브라우저에서 바로 자르기. 1:1 정사각, 16:9, 원형 프로필 아바타 마스크 지원, 100% 로컬 보안.",
    "keywords": [
        "이미지 자르기 온라인",
        "사진 자르기 무료",
        "원형 프로필 사진 만들기",
        "이미지 크롭"
    ],
    "howToSteps": [
        {
            "title": "이미지 업로드",
            "description": "자르고자 하는 사진을 드래그하여 놓습니다."
        },
        {
            "title": "영역 선택",
            "description": "비율을 선택하거나 조절 핸들을 이동하여 원하는 영역을 맞춥니다."
        },
        {
            "title": "다운로드",
            "description": "자른 이미지를 즉시 기기에 저장합니다."
        }
    ],
    "features": [
        "100% 브라우저 내 안전 처리",
        "1:1, 16:9, 원형 아바타 프리셋",
        "회전 및 반전 기능",
        "무손실 내보내기"
    ],
    "faqs": [
        {
            "question": "사진이 외부 서버로 전송되나요?",
            "answer": "아닙니다. 모든 변환은 HTML5 Canvas를 통해 브라우저 내부에서만 실행됩니다."
        }
    ]
},
  'resize-image': {
    "name": "이미지 크기 조절 (리사이즈)",
    "shortName": "크기 조절",
    "tagline": "픽셀 단위 또는 비율(%) 지정으로 비율을 유지하며 이미지 해상도 변경",
    "seoTitle": "이미지 크기 조절 무료 온라인 — 사진 해상도 변경",
    "seoDescription": "이미지 가로/세로 픽셀 및 비율(%)을 간편하게 조절하세요. 비율 고정 지원 및 즉시 다운로드.",
    "keywords": [
        "이미지 크기 조절",
        "사진 리사이즈 무료",
        "이미지 해상도 변경",
        "사진 픽셀 줄이기"
    ],
    "howToSteps": [
        {
            "title": "사진 불러오기",
            "description": "크기를 변경할 이미지를 선택합니다."
        },
        {
            "title": "크기 입력",
            "description": "가로, 세로 픽셀 값이나 백분율을 입력합니다."
        },
        {
            "title": "저장",
            "description": "크기 조절된 이미지를 다운로드합니다."
        }
    ],
    "features": [
        "픽셀 및 비율 조절",
        "비율 자동 유지",
        "업스케일링 방지",
        "빠른 처리"
    ],
    "faqs": [
        {
            "question": "비율이 왜곡되지 않게 하려면?",
            "answer": "비율 고정 자물쇠 옵션을 켜두면 가로 변경 시 세로가 자동 조절됩니다."
        }
    ]
},
  'compress-image': {
    "name": "이미지 용량 줄이기 (압축)",
    "shortName": "압축",
    "tagline": "화질 손상 없이 JPG, PNG, WebP 이미지 파일 용량(KB/MB) 대폭 절감",
    "seoTitle": "이미지 압축 무료 온라인 — 화질 저하 없이 사진 용량 줄이기",
    "seoDescription": "웹 브라우저에서 안전하게 이미지 용량을 줄이세요. 웹사이트 로딩 속도 최적화 및 이메일 전송에 최적.",
    "keywords": [
        "이미지 압축 온라인",
        "사진 용량 줄이기 무료",
        "jpg 압축",
        "png 용량 줄이기"
    ],
    "howToSteps": [
        {
            "title": "이미지 선택",
            "description": "용량을 줄일 파일을 드롭합니다."
        },
        {
            "title": "압축률 설정",
            "description": "슬라이더로 최적의 화질과 용량을 선택합니다."
        },
        {
            "title": "다운로드",
            "description": "압축된 최적화 파일을 저장합니다."
        }
    ],
    "features": [
        "고품질 스마트 압축",
        "실시간 절감률 표시",
        "WebP 변환 지원",
        "무제한 무료"
    ],
    "faqs": [
        {
            "question": "WebP 포맷이 더 유리한가요?",
            "answer": "WebP는 JPEG 대비 약 30~50% 더 작은 용량으로 동일 화질을 유지합니다."
        }
    ]
},
  'rotate-image': {
    "name": "Rotate Image",
    "shortName": "Rotate",
    "tagline": "Online Rotate Image — Fast, private, and client-side processing",
    "seoTitle": "Rotate Image Online Free (KO) — Image Toolbox",
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
    "name": "Flip Image",
    "shortName": "Flip",
    "tagline": "Online Flip Image — Fast, private, and client-side processing",
    "seoTitle": "Flip Image Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Image Converter Online Free (KO) — Image Toolbox",
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
    "seoTitle": "JPG to PNG Online Free (KO) — Image Toolbox",
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
    "seoTitle": "PNG to JPG Online Free (KO) — Image Toolbox",
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
    "seoTitle": "JPG to WebP Online Free (KO) — Image Toolbox",
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
    "seoTitle": "PNG to WebP Online Free (KO) — Image Toolbox",
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
    "seoTitle": "WebP to JPG Online Free (KO) — Image Toolbox",
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
    "seoTitle": "WebP to PNG Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Bulk Image Resizer Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Bulk Image Compressor Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Remove Image Metadata Online Free (KO) — Image Toolbox",
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
    "name": "Image Analyzer",
    "shortName": "Analyzer",
    "tagline": "Online Image Analyzer — Fast, private, and client-side processing",
    "seoTitle": "Image Analyzer Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Image Color Picker Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Image Palette Generator Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Add Text to Image Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Watermark Image Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Add Border to Image Online Free (KO) — Image Toolbox",
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
    "name": "Round Image",
    "shortName": "Round Corners",
    "tagline": "Online Round Image — Fast, private, and client-side processing",
    "seoTitle": "Round Image Online Free (KO) — Image Toolbox",
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
    "name": "Favicon Generator",
    "shortName": "Favicon",
    "tagline": "Online Favicon Generator — Fast, private, and client-side processing",
    "seoTitle": "Favicon Generator Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Image to Base64 Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Image to Data URI Online Free (KO) — Image Toolbox",
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
    "seoTitle": "Base64 to Image Online Free (KO) — Image Toolbox",
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
    "seoTitle": "SVG to PNG Online Free (KO) — Image Toolbox",
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

export function getKOTool(slug: string): LocalizedToolItem {
  return koTools[slug] || enTools[slug];
}
