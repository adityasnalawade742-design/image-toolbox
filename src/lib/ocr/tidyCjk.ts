// Chinese and Japanese have no spaces between words. Tesseract's text already leaves them out, but not always next to
// punctuation ("た。 東京", "預算 , 並"); Thai is not touched, as it does put spaces between phrases
const CJK = '\\u3000-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff\\uff00-\\uffef';
const CJK_GAP = new RegExp(`(?<=[${CJK}])[ \\t]+(?=[${CJK}])`, 'g');
const CJK_ASCII_PUNCT = new RegExp(`(?<=[${CJK}])[ \\t]*([,.;:!?])[ \\t]*(?=[${CJK}])`, 'g');
export const tidyCjk = (text: string) => text.replace(CJK_ASCII_PUNCT, '$1').replace(CJK_GAP, '');
