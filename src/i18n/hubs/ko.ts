import type { HubTexts } from './types';

export const koHubs: HubTexts = {
  labels: {
    server: '서버 사용',
    more: '다른 모음',
    allTools: '도구 {count}개 모두',
  },
  pages: {
    'pdf-tools': {
      title: '무료 PDF 도구: 합치기, 변환, 편집, 서명',
      description: '무료 PDF 도구 57개를 한곳에. PDF 합치기, 나누기, 압축, Word나 이미지와 서로 변환, 편집, 서명, 보호까지. 가입도 워터마크도 없어요.',
      h1: 'PDF 도구',
      intro:
        'PDF 작업에 필요한 모든 것을 무료로, 계정 없이 쓸 수 있어요. 파일 합치기와 나누기, Word·Excel·PowerPoint·이미지와 PDF 간 변환, 편집, 입력, 서명, 보호까지 할 수 있어요. 대부분의 도구는 브라우저에서 동작해서 PDF가 기기 밖으로 나가지 않아요. 서버가 필요한 일부 도구에는 표시가 있고, 그 파일은 처리 직후 삭제돼요.',
      groups: {
        toPdf: 'PDF로 변환',
        fromPdf: 'PDF에서 변환',
        edit: '편집과 주석',
        pages: '페이지 정리',
        secure: '서명, 보호, 정보 정리',
        fix: '압축, 복구, 확인',
      },
      faqs: [
        { question: 'PDF 도구는 무료인가요?', answer: '네. 모든 도구를 계정 없이 무료로 쓸 수 있고, 워터마크도 하루 사용 제한도 없어요.' },
        {
          question: 'PDF가 업로드되나요?',
          answer:
            '대부분의 도구는 브라우저 안에서 동작해서 파일이 기기에 그대로 있어요. 워드 PDF 변환, PDF 압축, PDF OCR처럼 ‘서버 사용’ 표시가 있는 도구는 암호화된 연결로 파일을 보내고, 결과를 돌려준 직후 삭제해요.',
        },
      ],
    },
    'image-editing-tools': {
      title: '무료 이미지 편집 도구: 자르기, 크기 조정, 배경 제거',
      description: '브라우저에서 쓰는 무료 사진 편집 도구 42개. 자르기, 크기 조정, 회전, 배경 제거나 변경, 텍스트와 워터마크 추가, 색 보정, SNS용 크기 맞추기까지.',
      h1: '이미지 편집 도구',
      intro:
        '설치 없이 빠르게 편집하세요. 자르기와 크기 조정, 배경 따내기나 바꾸기, 텍스트·워터마크·테두리 추가, 선명하게 하기와 색 보정, Instagram·YouTube 등 SNS용 크기 맞추기를 할 수 있어요. 모든 도구가 브라우저에서 동작해서 사진이 업로드되지 않고, 가능하면 원래 형식을 유지해요.',
      groups: {
        basics: '자르기, 크기 조정, 회전',
        background: '배경과 따내기',
        text: '텍스트, 워터마크, 표시',
        enhance: '보정과 개선',
        social: 'SNS용 크기',
        combine: '합치기와 나누기',
      },
      faqs: [
        { question: '앱을 설치해야 하나요?', answer: '아니요. 컴퓨터든 휴대폰이든 최신 브라우저에서 바로 쓸 수 있고, 사진은 기기에 그대로 있어요.' },
        {
          question: '사진 화질이 떨어지나요?',
          answer: '편집은 원래 크기의 사진에 하고, 가능하면 원래 형식으로 저장해요. JPG와 WebP 파일은 높은 품질로 다시 저장해요.',
        },
      ],
    },
    'image-format-converters': {
      title: '무료 이미지 변환기: HEIC, JPG, PNG, WebP, AVIF',
      description: '무료 이미지 변환기 26개. HEIC를 JPG로, JPG를 PNG·WebP·AVIF로, GIF·BMP·TIFF·SVG도 여러 파일을 한 번에 변환해요.',
      h1: '이미지 형식 변환기',
      intro:
        '이미지를 필요한 형식으로 바꾸세요. iPhone의 HEIC 사진을 JPG로, PNG를 더 가벼운 JPG나 WebP로, 웹용 AVIF로, GIF·BMP·TIFF·SVG를 흔히 쓰는 형식으로 바꿀 수 있어요. 대부분의 변환기는 여러 파일을 한 번에 받고, 모두 브라우저에서 동작해서 아무것도 업로드되지 않아요. 어떤 걸 쓸지 모르겠다면 ‘이미지 형식 변환기’가 거의 모든 이미지를 열어 JPG, PNG, WebP, AVIF로 저장해요.',
      groups: {
        any: '모든 형식',
        heic: 'iPhone 사진 (HEIC)',
        jpgPng: 'JPG와 PNG',
        web: 'WebP와 AVIF',
        other: 'GIF, BMP, TIFF, SVG',
        pdf: 'PDF와 텍스트로',
      },
      faqs: [
        {
          question: '어떤 형식을 골라야 하나요?',
          answer: '어디서나 열려야 하는 사진은 JPG, 스크린샷·로고·투명 배경은 PNG, 웹사이트용 가벼운 파일은 WebP나 AVIF가 좋아요. iPhone의 HEIC 사진은 공유할 때 JPG로 바꾸는 게 좋아요.',
        },
        { question: '여러 이미지를 한 번에 변환할 수 있나요?', answer: '네. 변환기에 여러 파일을 놓으면 같은 설정으로 함께 변환되고, ZIP 하나로 내려받을 수 있어요.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: '무료 QR 코드·바코드 생성기와 스캐너',
      description: '링크, Wi-Fi, 연락처, WhatsApp, 결제용 QR 코드를 만들고, EAN·UPC·ISBN 바코드를 만들고, 카메라로 코드를 읽는 무료 도구 15개.',
      h1: 'QR 코드·바코드 도구',
      intro:
        '링크, Wi-Fi 네트워크, 연락처 카드, WhatsApp 채팅, 결제용 QR 코드를 만들고, EAN·UPC·ISBN·데이터 매트릭스·PDF417 바코드를 만들거나, 목록으로 수백 개를 한 번에 만들어 한 장에 인쇄할 수 있어요. 사진이나 카메라로 코드를 읽을 수도 있어요. 모두 브라우저에서 동작하고 가입이 필요 없어요.',
      groups: {
        qr: 'QR 코드',
        barcodes: '바코드',
        read: '스캔과 읽기',
      },
      faqs: [
        { question: 'QR 코드에 유효 기간이 있나요?', answer: '아니요. 내용이 코드 자체에 들어 있고 저희 링크를 거치지 않아서, 인쇄된 코드를 읽을 수 있는 한 계속 작동해요.' },
        {
          question: '이 바코드를 매장 판매 상품에 쓸 수 있나요?',
          answer: '바코드는 표준대로 만들어지지만, 매장에서 파는 상품의 EAN·UPC 번호는 GS1에서 받아야 해요. 재고, 선반, 행사용이라면 어떤 번호든 괜찮아요.',
        },
      ],
    },
    'image-utilities': {
      title: '무료 이미지 유틸리티: EXIF 뷰어, 색상 추출, DPI',
      description: '이미지를 살펴보고 재는 무료 도구 21개. 메타데이터 보기와 지우기, 색 추출, DPI 변경, 픽셀을 인치나 cm로 환산, 사진 비교, 이미지 속 글자 복사까지.',
      h1: '이미지 유틸리티',
      intro:
        '이미지에 관해 궁금한 점을 풀어 주는 작은 도구들이에요. 사진 메타데이터에서 무엇이 드러나고 어떻게 지우는지, 어떤 색을 쓰는지, 특정 DPI로 얼마나 크게 인쇄되는지, 두 사진이 다른지, 어떤 글자가 들어 있는지 확인할 수 있어요. 모두 브라우저에서 동작해서 이미지가 기기에 그대로 있어요.',
      groups: {
        inspect: '사진 살펴보기',
        colour: '색',
        size: '크기, DPI, 인쇄',
        text: '글자와 숨은 메시지',
      },
      faqs: [
        {
          question: '사진에서 위치 정보를 지울 수 있나요?',
          answer: '네. ‘이미지 메타데이터 제거’가 GPS 위치, 카메라 정보 등 EXIF 데이터를 지우고, ‘EXIF 뷰어’로 공유하기 전에 사진에 무엇이 들어 있는지 볼 수 있어요.',
        },
        {
          question: '인쇄하려면 DPI가 얼마나 필요한가요?',
          answer: '사진과 문서는 보통 300 DPI면 돼요. DPI는 인쇄 크기만 정하고 픽셀 수는 바꾸지 않아요. ‘이미지 DPI 변경’으로 파일에 적고, ‘픽셀을 인치로’와 ‘픽셀을 cm로’로 인쇄 크기를 확인하세요.',
        },
      ],
    },
  },
};
