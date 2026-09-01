import { LocalizedHomeData } from '../types';

export const koHome: LocalizedHomeData = {
  heroPill: '개인정보 보호 최우선 • 서버 업로드 없음 • 27개 무료 도구',
  heroHeadlineMain: '고정밀 이미지 최적화 도구,',
  heroHeadlineAccent: '브라우저에서 바로 사용하세요',
  heroSubheadline: '자르기, 크기 조절, 압축, 포맷 변환, 편집을 클라우드 업로드 없이 로컬에서 즉시 처리합니다. 지연 시간 없이 무손실 고화질을 경험하세요.',
  guarantee1: '100% 브라우저 내 보안 처리',
  guarantee2: '업로드 없는 초고속 작업',
  guarantee3: '파일 크기 무제한',
  whyChooseTitle: '전문가들이 Image Toolbox를 선택하는 이유',
  whyChooseSubtitle: '개발자, 디자이너, 사진작가 및 보안을 중시하는 사용자를 위한 설계.',
  feature1Title: '서버 전송 제로',
  feature1Desc: '이미지는 사용자 기기에 안전하게 유지됩니다. HTML5 Canvas 엔진이 모든 작업을 로컬에서 독립 처리합니다.',
  feature2Title: '초고속 Canvas 엔진',
  feature2Desc: '실시간 미리보기, 다중 파일 일괄 변환, 고성능 WebP/PNG 인코더를 대기 시간 없이 즉시 실행합니다.',
  feature3Title: '개발자 및 웹마스터를 위한 기능',
  feature3Desc: 'Base64 변환부터 벡터 SVG 래스터화, EXIF 메타데이터 제거, 파비콘 패키지 생성까지 한곳에서 지원합니다.',
  categories: [
    { id: 'edit', label: '편집 및 변형', description: '자르기, 크기 조절, 회전, 뒤집기, 액자 테두리' },
    { id: 'optimize', label: '최적화 및 압축', description: '용량 줄이기 및 불필요한 메타데이터 제거' },
    { id: 'convert', label: '포맷 변환', description: 'WebP, PNG, JPG, AVIF 상호 변환' },
    { id: 'utilities', label: '계산기 및 유틸리티', description: '색상 스포이드, 종횡비 및 DPI 계산' },
    { id: 'developer', label: '웹 및 개발자 도구', description: '파비콘 생성기, Base64 및 Data URI 인코더' }
  ],
  faqs: [
    {
      question: '업로드한 이미지가 외부 서버로 전송되나요?',
      answer: '아닙니다. Image Toolbox의 모든 작업은 브라우저 내 HTML5 Canvas를 통해 기기에서 직접 실행되며 인터넷으로 전송되지 않습니다.'
    },
    {
      question: '정말 100% 무료인가요?',
      answer: '네, 27개 모든 도구는 사용 횟수 제한, 워터마크, 회원가입 없이 완전히 무료로 제공됩니다.'
    },
    {
      question: '지원되는 이미지 포맷은 무엇인가요?',
      answer: 'JPG, JPEG, PNG, WebP, AVIF, SVG, GIF 및 Base64 Data URI 포맷을 완벽하게 지원합니다.'
    },
    {
      question: '여러 이미지를 한 번에 처리할 수 있나요?',
      answer: '네! 대량 크기 조절 및 대량 압축 도구를 통해 수십 장의 이미지를 동시에 처리하고 ZIP 파일로 즉시 다운로드할 수 있습니다.'
    }
  ]
};
