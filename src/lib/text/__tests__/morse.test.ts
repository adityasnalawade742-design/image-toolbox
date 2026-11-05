import { describe, expect, it } from 'vitest';
import { MORSE, dotSeconds, looksLikeMorse, morseSamples, morseTiming, morseToText, textToMorse, wavFile } from '../morse';

describe('textToMorse', () => {
  it('writes letters with spaces and words with a slash', () => {
    expect(textToMorse('SOS').morse).toBe('... --- ...');
    expect(textToMorse('Hello world').morse).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
  });
  it('handles digits and punctuation from the ITU list', () => {
    expect(textToMorse('Call 911!').morse).toBe('-.-. .- .-.. .-.. / ----. .---- .---- -.-.--');
    expect(textToMorse('a@b.c').morse).toBe('.- .--.-. -... .-.-.- -.-.');
  });
  it('drops accents and maps typographic quotes, and reports what it skipped', () => {
    expect(textToMorse('Café').morse).toBe('-.-. .- ..-. .');
    expect(textToMorse('it’s').morse).toBe('.. - .----. ...');
    const r = textToMorse('a # b 😀');
    expect(r.morse).toBe('.- / -...');
    expect(r.skipped).toEqual(['#', '😀']);
  });
  it('collapses extra spaces and ignores empty input', () => {
    expect(textToMorse('  a   b ').morse).toBe('.- / -...');
    expect(textToMorse('').morse).toBe('');
  });
});

describe('morseToText', () => {
  it('reads letters and words back', () => {
    expect(morseToText('... --- ...').text).toBe('SOS');
    expect(morseToText('.... . .-.. .-.. --- / .-- --- .-. .-.. -..').text).toBe('HELLO WORLD');
  });
  it('accepts other dot and dash characters and word separators', () => {
    expect(morseToText('••• ––– •••').text).toBe('SOS');
    expect(morseToText('.- | -...').text).toBe('A B');
    expect(morseToText('.-   -...').text).toBe('A B');
  });
  it('marks unknown codes with ? and lists them', () => {
    const r = morseToText('.- ........ -...');
    expect(r.text).toBe('A?B');
    expect(r.unknown).toEqual(['........']);
  });
  it('round-trips every character in the table', () => {
    for (const [ch, code] of Object.entries(MORSE)) expect(morseToText(code).text).toBe(ch);
    expect(morseToText(textToMorse('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 0123456789').morse).text).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG 0123456789');
  });
});

describe('looksLikeMorse', () => {
  it('tells Morse from text', () => {
    expect(looksLikeMorse('... --- ...')).toBe(true);
    expect(looksLikeMorse('•• / –')).toBe(true);
    expect(looksLikeMorse('hello')).toBe(false);
    expect(looksLikeMorse(' / ')).toBe(false);
    expect(looksLikeMorse('')).toBe(false);
  });
});

describe('timing', () => {
  it('uses 1/3/1/3/7 units', () => {
    expect(morseTiming('.- / -')).toEqual([
      { on: true, units: 1 }, { on: false, units: 1 }, { on: true, units: 3 },
      { on: false, units: 7 }, { on: true, units: 3 },
    ]);
    expect(morseTiming('. .')).toEqual([{ on: true, units: 1 }, { on: false, units: 3 }, { on: true, units: 1 }]);
  });
  it('matches the PARIS standard: 20 wpm is a 60 ms dot', () => {
    expect(dotSeconds(20)).toBeCloseTo(0.06);
    // PARIS + word gap is 50 units
    const units = morseTiming(textToMorse('PARIS').morse).reduce((n, e) => n + e.units, 0) + 7;
    expect(units).toBe(50);
  });
  it('makes a WAV of the right length with silence between tones', () => {
    const rate = 8000;
    const pcm = morseSamples('.', 20, 600, rate);
    const unit = Math.round(0.06 * rate);
    expect(pcm.length).toBe(unit * 3);
    expect(Math.max(...pcm.slice(unit, unit * 2).map(Math.abs))).toBeGreaterThan(10000);
    expect(Math.max(...pcm.slice(0, unit).map(Math.abs))).toBe(0);
    const wav = wavFile(pcm, rate);
    expect(String.fromCharCode(...wav.slice(0, 4))).toBe('RIFF');
    expect(wav.length).toBe(44 + pcm.length * 2);
  });
});
