import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Copy, Download, Image as ImageIcon, Play, Square } from 'lucide-react';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { downloadBlob } from '../../../lib/canvas/engine';
import { MORSE, looksLikeMorse, morseSamples, morseTiming, morseToText, textToMorse, wavFile, dotSeconds } from '../../../lib/text/morse';

const fieldClass = 'w-full min-h-[160px] p-3 border border-ink bg-paper-bright text-[17px] text-ink rounded-md leading-relaxed';
const RATE = 44100;

/** The Morse drawn as dots and dashes under each letter, wrapped into lines, for a picture of the message */
function drawMorse(text: string): HTMLCanvasElement {
  const words = text.toUpperCase().split(/\s+/).filter(Boolean);
  const W = 1600, pad = 60, unit = 12, gapLetter = 30, gapWord = 70, lineH = 130;
  const letterWidth = (code: string) => [...code].reduce((w, s, i) => w + (s === '-' ? unit * 3 : unit) + (i ? unit : 0), 0);
  // Lay out words into lines
  const lines: { ch: string; code: string; x: number }[][] = [[]];
  let x = pad;
  let right = pad;
  for (const word of words) {
    const letters = [...word].map((ch) => ({ ch, code: MORSE[ch] || '' })).filter((l) => l.code);
    const width = letters.reduce((w, l, i) => w + Math.max(letterWidth(l.code), 26) + (i ? gapLetter : 0), 0);
    if (x > pad && x + width > W - pad) {
      lines.push([]);
      x = pad;
    }
    for (const l of letters) {
      lines[lines.length - 1].push({ ...l, x });
      right = Math.max(right, x + Math.max(letterWidth(l.code), 26));
      x += Math.max(letterWidth(l.code), 26) + gapLetter;
    }
    x += gapWord - gapLetter;
  }
  const c = document.createElement('canvas');
  // As wide as the longest line, so short messages don't sit in empty space
  c.width = Math.min(W, right + pad);
  c.height = (Math.max(1, lines.length) - 1) * lineH + 64 + pad * 2;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#141414';
  ctx.font = '600 34px Barlow, system-ui, sans-serif';
  ctx.textBaseline = 'alphabetic';
  lines.forEach((line, li) => {
    const top = pad + li * lineH;
    for (const l of line) {
      ctx.fillText(l.ch, l.x, top + 34);
      let sx = l.x;
      for (const s of l.code) {
        const w = s === '-' ? unit * 3 : unit;
        ctx.beginPath();
        ctx.roundRect(sx, top + 52, w, unit, unit / 2);
        ctx.fill();
        sx += w + unit;
      }
    }
  });
  return c;
}

export function MorseWorkspace() {
  const t = useT();
  const [text, setText] = useState('SOS');
  const [morse, setMorse] = useState('... --- ...');
  const [wpm, setWpm] = useState(18);
  const [tone, setTone] = useState(600);
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState<'text' | 'morse' | null>(null);
  const audio = useRef<{ ctx: AudioContext; src: AudioBufferSourceNode } | null>(null);

  const fromText = (v: string) => {
    setText(v);
    setMorse(textToMorse(v).morse);
  };
  const fromMorse = (v: string) => {
    setMorse(v);
    setText(morseToText(v).text);
  };
  // Pasting Morse into the text box (or text into the Morse box) goes to the right place
  const onTextChange = (v: string) => (looksLikeMorse(v) && /[.-]{2}|[.-] [.-]/.test(v) ? fromMorse(v) : fromText(v));

  const skipped = useMemo(() => textToMorse(text).skipped, [text]);
  const unknown = useMemo(() => morseToText(morse).unknown, [morse]);
  const seconds = useMemo(() => morseTiming(morse).reduce((n, e) => n + e.units, 0) * dotSeconds(wpm), [morse, wpm]);

  const stop = () => {
    audio.current?.src.stop();
    audio.current?.ctx.close();
    audio.current = null;
    setPlaying(false);
  };
  useEffect(() => stop, []);

  const play = () => {
    if (playing) return stop();
    const pcm = morseSamples(morse, wpm, tone, RATE);
    if (!pcm.length) return;
    const ctx = new AudioContext({ sampleRate: RATE });
    const buffer = ctx.createBuffer(1, pcm.length, RATE);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < pcm.length; i++) data[i] = pcm[i] / 32768;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    src.onended = () => {
      if (audio.current?.src === src) stop();
    };
    src.start();
    audio.current = { ctx, src };
    setPlaying(true);
  };

  const copy = async (which: 'text' | 'morse') => {
    try {
      await navigator.clipboard.writeText(which === 'text' ? text : morse);
      setCopied(which);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard blocked: the text is still selectable
    }
  };

  const saveWav = () => downloadBlob(new Blob([new Uint8Array(wavFile(morseSamples(morse, wpm, tone, RATE), RATE))], { type: 'audio/wav' }), 'morse-code.wav');
  const saveImage = () => drawMorse(morseToText(morse).text).toBlob((b) => b && downloadBlob(b, 'morse-code.png'), 'image/png');
  const empty = !morse.trim();

  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-5">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="morse-text" className="slug">{t('ctl.morse.text')}</label>
            <button type="button" onClick={() => copy('text')} className="inline-flex items-center gap-1.5 min-h-[36px] text-[14px] text-ink underline hover:no-underline">
              <Copy className="w-4 h-4" aria-hidden="true" />
              {copied === 'text' ? t('ctl.morse.copied') : t('ctl.morse.copy')}
            </button>
          </div>
          <textarea id="morse-text" value={text} onChange={(e) => onTextChange(e.target.value)} className={fieldClass} spellCheck={false} />
          {skipped.length > 0 && <p className="text-[14px] text-graphite">{t('ctl.morse.skipped', { chars: skipped.join(' ') })}</p>}
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="morse-code" className="slug">{t('ctl.morse.code')}</label>
            <button type="button" onClick={() => copy('morse')} className="inline-flex items-center gap-1.5 min-h-[36px] text-[14px] text-ink underline hover:no-underline">
              <Copy className="w-4 h-4" aria-hidden="true" />
              {copied === 'morse' ? t('ctl.morse.copied') : t('ctl.morse.copy')}
            </button>
          </div>
          <textarea id="morse-code" value={morse} onChange={(e) => fromMorse(e.target.value)} className={`${fieldClass} font-code tracking-wider`} spellCheck={false} />
          <p className="text-[14px] text-graphite">{t('ctl.morse.codeHint')}</p>
          {unknown.length > 0 && <p className="text-[14px] text-accent-red">{t('ctl.morse.unknown', { codes: unknown.join('  ') })}</p>}
        </div>
      </div>

      <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
        <div className="border border-ink bg-paper-bright rounded-xl p-4 space-y-5">
          <RangeField id="morse-wpm" label={t('ctl.morse.speed')} value={wpm} min={5} max={40} unit=" wpm" onChange={setWpm} />
          <RangeField id="morse-tone" label={t('ctl.morse.tone')} value={tone} min={300} max={1000} step={10} unit=" Hz" onChange={setTone} />
          <p className="text-[14px] text-graphite" data-measure>{t('ctl.morse.length', { seconds: seconds.toFixed(1) })}</p>
          <button type="button" onClick={play} disabled={empty} className="btn-ink w-full min-h-[48px] disabled:cursor-not-allowed">
            {playing ? <Square className="w-5 h-5" aria-hidden="true" /> : <Play className="w-5 h-5" aria-hidden="true" />}
            <span>{playing ? t('ctl.morse.stop') : t('ctl.morse.play')}</span>
          </button>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <button type="button" onClick={saveWav} disabled={empty} className="btn-rule disabled:opacity-50">
              <Download className="w-4 h-4" aria-hidden="true" />
              {t('ctl.morse.saveAudio')}
            </button>
            <button type="button" onClick={saveImage} disabled={empty} className="btn-rule disabled:opacity-50">
              <ImageIcon className="w-4 h-4" aria-hidden="true" />
              {t('ctl.morse.saveImage')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
