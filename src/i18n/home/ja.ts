import type { LocalizedHomeData } from '../types';

export const jaHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: '必要な画像ツールが、ここにすべて',
    subtitle:
      '切り抜き、リサイズ、圧縮、形式変換、背景削除、写真の整理がすべて無料。登録不要、透かしなしで、画像はお使いの端末から外に出ません。',
    dropzoneTitle: '画像をドロップして開始',
    dropzoneSubtitle: 'JPG、PNG、WebP、AVIF、GIF、SVG、iPhoneのHEICに対応（最大50 MB）',
  },
  sections: {
    indexTitle: 'すべてのツール',
    indexSubtitle: 'どのツールも同じ画面で使えます。画像を開いて、調整して、ダウンロードするだけです。',
    pillarsTitle: '使い方と特長',
    faqTitle: 'よくある質問',
  },
  trustPillars: [
    {
      title: 'すべての作業をひとつの画面で',
      description:
        'どのツールも同じ操作で開けて、画像をそのまま次のツールに渡せます。たとえば、切り抜いてから圧縮することもできます。',
      icon: 'Layers',
    },
    {
      title: '画像はアップロードされません',
      description:
        '画像はお使いの端末上のブラウザで処理されるため、アップロードを待つ必要がなく、サーバーにコピーが残ることもありません。「WordをPDFに変換」など一部の文書ツールには当サイトのサーバーが必要です。それらのツールには表示があり、ファイルは処理後すぐに削除されます。',
      icon: 'ShieldCheck',
    },
    {
      title: '無料、アカウント不要',
      description: '登録不要、透かしなし、1日の回数制限もありません。1ファイルあたり最大50 MB、一括ツールでは最大50ファイルまで扱えます。',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': '編集・変形',
    'optimize-compress': '最適化・圧縮',
    'convert-formats': '形式変換',
    'pdf-documents': 'PDF・文書',
    utilities: '画像情報・便利ツール',
    developer: '開発者向けツール',
  },
  faqs: [
    {
      question: '画像はどこかにアップロードされますか？',
      answer:
        'いいえ。すべての画像ツールはブラウザ内で動作するため、画像はお使いの端末上で処理され、サーバーに送信されることはありません。背景削除ツールは初回にAIモデルをダウンロードしますが、その後は同じく端末上で動作します。一部の文書ツール（WordをPDFに変換、ExcelをPDFに変換、PowerPointをPDFに変換、PDFをWordに変換、PDF圧縮、PDFパスワード保護、PDFパスワード解除、PDF OCR、PDFをPDF/Aに変換、PDF修復）には当サイトのサーバーが必要です。これらのツールには「サーバーを使用」と表示され、ファイルは結果が返されるとすぐに削除されます。',
    },
    {
      question: '本当に無料ですか？',
      answer: 'はい。すべてのツールをアカウントなしで無料でご利用いただけ、透かしが入ることもありません。',
    },
    {
      question: '画像の大きさに制限はありますか？',
      answer:
        '1枚あたり最大50 MBまで扱えます。一括圧縮と一括リサイズでは、1枚50 MBまでの画像を一度に最大50枚まで処理できます。非常に大きな写真は、古いスマートフォンでは処理に時間がかかることがあります。',
    },
    {
      question: 'どの形式を開いたり保存したりできますか？',
      answer:
        'JPG、PNG、WebP、AVIF、GIF、BMP、SVG、iPhoneのHEIC写真を開けます。保存形式はツールによって異なり、JPG、PNG、WebP、AVIFから選べます。',
    },
    {
      question: 'スマートフォンでも使えますか？',
      answer:
        'はい。iPhoneやAndroidの最新のモバイルブラウザで動作し、iPhoneのHEIC写真にも対応しています。サイトをアプリとしてインストールすることもできます。初回アクセス後はほとんどのツールがオフラインで使えますが、AVIF書き出しと背景削除は一度オンラインで使う必要があります。',
    },
    {
      question: 'ツールを続けて使えますか？',
      answer:
        'はい。編集後に「圧縮」や「リサイズ」などの次のステップを選ぶと、保存や再アップロードをしなくても、画像がそのままそのツールで開きます。',
    },
  ],
};
