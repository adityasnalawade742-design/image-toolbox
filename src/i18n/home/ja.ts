import { LocalizedHomeData } from '../types';

export const jaHome: LocalizedHomeData = {
  heroPill: 'プライバシー優先 • サーバー送信なし • 27個の無料ツール',
  heroHeadlineMain: '高精度な画像編集・変換ツール群、',
  heroHeadlineAccent: 'すべてブラウザ上で完結',
  heroSubheadline: 'トリミング、リサイズ、圧縮、フォーマット変換、編集をブラウザ内で安全に実行。クラウドへのアップロード不要で、高速かつ劣化のない仕上がりを実現します。',
  guarantee1: '100% ブラウザ内処理・安全',
  guarantee2: 'アップロード待ち時間ゼロ',
  guarantee3: 'ファイルサイズ制限なし',
  whyChooseTitle: 'Image Toolbox が選ばれる理由',
  whyChooseSubtitle: '開発者、デザイナー、クリエイター、プライバシーを重視するすべてのユーザーのために設計。',
  feature1Title: 'サーバーアップロード一切なし',
  feature1Desc: '画像データはお使いのデバイス内でのみ処理されます。HTML5 Canvas により外部サーバーへのデータ漏洩を防ぎます。',
  feature2Title: '超高速 Canvas エンジン',
  feature2Desc: 'リアルタイムプレビュー、一括バッチ処理、高品質な WebP/PNG エンコードを待ち時間なしで提供。',
  feature3Title: 'エンジニア・Web担当者に最適',
  feature3Desc: 'Base64 変換、SVG の高解像度 PNG 化、EXIF メタデータ削除、マルチサイズ Favicon 生成まで幅広く網羅。',
  categories: [
    { id: 'edit', label: '編集・変形', description: '切り抜き、リサイズ、回転、反転、角丸・枠線追加' },
    { id: 'optimize', label: '最適化・圧縮', description: 'ファイルサイズ削減、不要なメタデータの除去' },
    { id: 'convert', label: '形式変換', description: 'WebP、PNG、JPG、AVIF 間の相互変換' },
    { id: 'utilities', label: '計算・ユーティリティ', description: 'スポイトカラー抽出、アスペクト比計算、DPI診断' },
    { id: 'developer', label: 'Web・開発者ツール', description: 'Favicon 生成、Base64 相互変換、Data URI 作成' }
  ],
  faqs: [
    {
      question: '画像ファイルが外部サーバーに送信されることはありますか？',
      answer: 'いいえ、一切ありません。Image Toolbox はブラウザの HTML5 Canvas と Web API のみを使用して端末内で直接処理します。'
    },
    {
      question: '利用は本当に完全無料ですか？',
      answer: 'はい。27 個すべてのツールが完全無料で、回数制限、ファイル数制限、透かし（ウォーターマーク）の追加、会員登録などは一切不要です。'
    },
    {
      question: 'どの画像フォーマットに対応していますか？',
      answer: 'JPG、JPEG、PNG、WebP、AVIF、SVG、GIF、Base64 Data URI に対応しています。'
    },
    {
      question: '複数画像の一括処理は可能ですか？',
      answer: 'はい！一括リサイズツールおよび一括圧縮ツールにより、大量の画像を一括処理して ZIP ファイルとして即座にダウンロードできます。'
    }
  ]
};
