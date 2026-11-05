/**
 * International Morse code (ITU-R M.1677-1): letters, digits and the punctuation it defines, both ways, plus the
 * timing used to play or draw it. A dot is one unit, a dash three, the gap inside a letter one, between letters
 * three, between words seven.
 */

export const MORSE: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
  M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
  $: '...-..-', '@': '.--.-.',
};

const FROM_MORSE: Record<string, string> = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));

// Accented letters Morse has no code for are written without the accent; typographic quotes and dashes as their
// plain versions
const PLAIN: Record<string, string> = { '‘': "'", '’': "'", '“': '"', '”': '"', '–': '-', '—': '-', '×': 'X' };

export interface ToMorseResult {
  morse: string;
  /** Characters Morse has no code for, left out */
  skipped: string[];
}

/** Text to Morse: letters separated by a space, words by " / " */
export function textToMorse(text: string): ToMorseResult {
  const skipped = new Set<string>();
  const words = text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) =>
      [...word]
        .map((c) => {
          const code = MORSE[PLAIN[c] ?? c];
          if (!code) skipped.add(c);
          return code;
        })
        .filter(Boolean)
        .join(' ')
    )
    .filter(Boolean);
  return { morse: words.join(' / '), skipped: [...skipped] };
}

export interface FromMorseResult {
  text: string;
  /** Codes that are not Morse letters, shown as "?" */
  unknown: string[];
}

/** Morse to text. Accepts . and - (also • · and – — _), letters split by spaces, words by / | or 3+ spaces */
export function morseToText(morse: string): FromMorseResult {
  const unknown = new Set<string>();
  const clean = morse
    .replace(/[•·∙]/g, '.')
    .replace(/[–—_−]/g, '-')
    .trim();
  const words = clean
    .split(/\s*[/|]\s*|\s{3,}|\n+/)
    .map((w) => w.trim())
    .filter(Boolean)
    .map((word) =>
      word
        .split(/\s+/)
        .map((code) => {
          const ch = FROM_MORSE[code];
          if (!ch) unknown.add(code);
          return ch ?? '?';
        })
        .join('')
    );
  return { text: words.join(' '), unknown: [...unknown] };
}

/** True when the input looks like Morse (only dots, dashes, separators), so the tool can pick the direction */
export function looksLikeMorse(input: string): boolean {
  const s = input.trim();
  return s.length > 0 && /^[.\-•·∙–—_−/|\s]+$/.test(s) && /[.\-•·∙–—_−]/.test(s);
}

/** On/off timing in dot units: true = sound or mark, false = silence or gap */
export type Element = { on: boolean; units: number };

export function morseTiming(morse: string): Element[] {
  const out: Element[] = [];
  const push = (on: boolean, units: number) => {
    const last = out[out.length - 1];
    if (last && last.on === on && !on) last.units = Math.max(last.units, units);
    else out.push({ on, units });
  };
  const words = morse.trim().split(/\s*\/\s*/).filter(Boolean);
  words.forEach((word, wi) => {
    if (wi > 0) push(false, 7);
    word.split(/\s+/).forEach((letter, li) => {
      if (li > 0) push(false, 3);
      [...letter].forEach((sym, si) => {
        if (si > 0) push(false, 1);
        push(true, sym === '-' ? 3 : 1);
      });
    });
  });
  return out;
}

/** Dot length in seconds for a speed in words per minute (PARIS standard: 50 units per word) */
export const dotSeconds = (wpm: number) => 1.2 / wpm;

/** The timing as 16-bit mono PCM samples, with 5 ms ramps so tones don't click */
export function morseSamples(morse: string, wpm: number, frequency: number, sampleRate = 44100): Int16Array {
  const unit = Math.round(dotSeconds(wpm) * sampleRate);
  const timing = morseTiming(morse);
  const total = timing.reduce((n, e) => n + e.units * unit, 0) + unit * 2;
  const pcm = new Int16Array(total);
  const ramp = Math.round(0.005 * sampleRate);
  let at = unit;
  for (const e of timing) {
    const len = e.units * unit;
    if (e.on) {
      for (let i = 0; i < len; i++) {
        const env = Math.min(1, i / ramp, (len - i) / ramp);
        pcm[at + i] = Math.round(Math.sin((2 * Math.PI * frequency * i) / sampleRate) * env * 0.6 * 32767);
      }
    }
    at += len;
  }
  return pcm;
}

/** A WAV file of the samples */
export function wavFile(pcm: Int16Array, sampleRate = 44100): Uint8Array {
  const data = pcm.length * 2;
  const buf = new ArrayBuffer(44 + data);
  const v = new DataView(buf);
  const text = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  text(0, 'RIFF'); v.setUint32(4, 36 + data, true); text(8, 'WAVE');
  text(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sampleRate, true); v.setUint32(28, sampleRate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  text(36, 'data'); v.setUint32(40, data, true);
  new Int16Array(buf, 44).set(pcm);
  return new Uint8Array(buf);
}
