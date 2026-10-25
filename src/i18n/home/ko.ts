import type { LocalizedHomeData } from '../types';

export const koHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: '필요한 이미지 도구를 한곳에서',
    subtitle:
      '사진 자르기, 크기 조절, 압축, 형식 변환, 배경 제거, 정리까지 무료로 할 수 있어요. 가입도 워터마크도 없고, 이미지는 내 기기에만 머물러요.',
    dropzoneTitle: '이미지를 끌어다 놓아 시작하세요',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, SVG, iPhone HEIC, 최대 50 MB',
  },
  sections: {
    indexTitle: '전체 도구',
    indexSubtitle: '모든 도구는 같은 작업 공간을 써요. 이미지를 열고, 조정하고, 다운로드하세요.',
    pillarsTitle: '이렇게 작동해요',
    faqTitle: '자주 묻는 질문',
  },
  trustPillars: [
    {
      title: '모든 작업을 하나의 작업 공간에서',
      description:
        '모든 도구가 같은 방식으로 열리고, 이미지를 바로 다음 도구로 넘길 수 있어요. 예를 들어 자른 다음 압축할 수 있어요.',
      icon: 'Layers',
    },
    {
      title: '이미지는 업로드되지 않아요',
      description:
        '이미지는 내 기기의 브라우저에서 처리되기 때문에 업로드를 기다릴 필요가 없고 서버에 사본이 남지 않아요. 워드 PDF 변환 같은 일부 문서 도구는 저희 서버가 필요해요. 이런 도구에는 표시가 있고, 파일은 처리 직후 삭제돼요.',
      icon: 'ShieldCheck',
    },
    {
      title: '계정 없이 무료',
      description: '가입, 워터마크, 일일 사용 제한이 없어요. 파일 하나는 최대 50 MB까지, 일괄 도구는 최대 50개 파일까지 처리해요.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': '편집 및 변형',
    'optimize-compress': '최적화 및 압축',
    'convert-formats': '형식 변환',
    'pdf-documents': 'PDF·문서',
    utilities: '검사 및 유틸리티',
    developer: '개발자 도구',
  },
  faqs: [
    {
      question: '이미지가 어딘가에 업로드되나요?',
      answer:
        '아니요. 모든 이미지 도구는 브라우저 안에서 실행되므로 이미지는 내 기기에서 처리되고 서버로 전송되지 않아요. 배경 제거 도구는 AI 모델을 한 번 다운로드한 뒤 마찬가지로 기기에서 작동해요. 일부 문서 도구(워드 PDF 변환, 엑셀 PDF 변환, PPT PDF 변환, PDF 워드 변환, PDF 압축, PDF 비밀번호 설정, PDF 비밀번호 해제, PDF OCR, PDF/A 변환, PDF 복구)는 저희 서버가 필요해요. 이런 도구에는 “서버 사용” 표시가 있고, 결과를 돌려보내는 즉시 파일이 삭제돼요.',
    },
    {
      question: '정말 무료인가요?',
      answer: '네. 모든 도구를 계정 없이 무료로 사용할 수 있고, 워터마크도 붙지 않아요.',
    },
    {
      question: '이미지 크기는 얼마까지 가능한가요?',
      answer:
        '이미지 하나는 최대 50 MB까지 가능해요. 일괄 압축기와 일괄 크기 조절기는 한 번에 최대 50개 이미지를, 각각 최대 50 MB까지 받아요. 아주 큰 사진은 오래된 휴대폰에서 느릴 수 있어요.',
    },
    {
      question: '어떤 형식을 열고 저장할 수 있나요?',
      answer:
        'JPG, PNG, WebP, AVIF, GIF, BMP, SVG, iPhone HEIC 사진을 열 수 있어요. 도구에 따라 JPG, PNG, WebP, AVIF로 저장할 수 있어요.',
    },
    {
      question: '휴대폰에서도 되나요?',
      answer:
        '네. iPhone과 Android의 최신 모바일 브라우저에서 작동하며, iPhone HEIC 사진도 열 수 있어요. 사이트를 앱으로 설치할 수도 있어요. 처음 방문한 뒤에는 대부분의 도구를 오프라인에서 쓸 수 있지만, AVIF 저장과 배경 제거는 온라인 상태에서 한 번 사용해야 해요.',
    },
    {
      question: '여러 도구를 연달아 쓸 수 있나요?',
      answer:
        '네. 편집을 마친 뒤 압축이나 크기 조절 같은 다음 단계를 고르면, 저장하고 다시 업로드할 필요 없이 그 도구에서 이미지가 바로 열려요.',
    },
  ],
};
