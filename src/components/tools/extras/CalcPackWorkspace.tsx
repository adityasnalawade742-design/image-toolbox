import React, { useMemo, useState } from 'react';
import { ArrowLeftRight, Check, Copy } from 'lucide-react';
import { useLocale, useT } from '../../shared/I18nContext';
import { contrast, formats, nearestName, parseColor, suggestFix, toHex, wcag, type RGBA } from '../../../lib/color/color';
import { COMMON_RATIOS, PAPERS, fromMm, heightFor, nearestPaper, parseRatio, ratioOf, show, toMm, widthFor, type Paper, type Unit } from '../../../lib/print/paper';

const fieldClass = 'w-full min-h-[44px] px-3 border border-ink bg-paper-bright text-[16px] text-ink rounded-md';
const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
const card = 'border border-ink bg-paper-bright p-5 rounded-xl';

function CopyButton({ text }: { text: string }) {
  const t = useT();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        } catch {
          // The value stays selectable
        }
      }}
      aria-label={`${t('ctl.colorconv.copy')} ${text}`}
      className="shrink-0 w-10 h-10 flex items-center justify-center border border-pencil rounded-md hover:border-ink text-ink"
    >
      {done ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}

/** A colour field: type any notation or use the system colour picker */
function ColorField({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (v: string) => void }) {
  const t = useT();
  const parsed = parseColor(value);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="slug block">{label}</label>
      <div className="flex gap-2">
        <input
          type="color"
          aria-label={`${label}: ${t('ctl.colorconv.picker')}`}
          value={parsed ? toHex({ ...parsed, a: 1 }) : '#000000'}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-11 shrink-0 border border-ink rounded-md bg-transparent cursor-pointer"
        />
        <input id={id} type="text" spellCheck={false} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} className={`${fieldClass} font-mono`} aria-invalid={!parsed} />
      </div>
      {!parsed && value.trim() && <p className="text-[13px] text-accent-red">{t('ctl.colorconv.invalid')}</p>}
    </div>
  );
}

// ---------- Color converter ----------
export function ColorConverterWorkspace() {
  const t = useT();
  const [value, setValue] = useState('#3366CC');
  const c = parseColor(value);
  const f = c ? formats(c) : null;
  const name = c ? nearestName(c) : null;
  const rows: [string, string][] = f
    ? [
        ['HEX', f.hex],
        ['RGB', f.rgb],
        ['HSL', f.hsl],
        ['HSV / HSB', f.hsv],
        ['CMYK', f.cmyk],
        ['CIE Lab', f.lab],
        ['OKLCH', f.oklch],
      ]
    : [];
  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-5">
        <div className={card}>
          <ColorField id="cc-input" label={t('ctl.colorconv.input')} value={value} onChange={setValue} />
          <p className="mt-2 text-[13px] text-graphite">{t('ctl.colorconv.inputHint')}</p>
        </div>
        {f && (
          <ul className="border-y border-ink divide-y divide-pencil-soft" aria-live="polite">
            {rows.map(([label, v]) => (
              <li key={label} className="flex items-center gap-3 py-2">
                <span className="w-28 shrink-0 text-[14px] text-graphite">{label}</span>
                <code className="flex-1 min-w-0 break-all text-[15px] text-ink" data-measure>{v}</code>
                <CopyButton text={v} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={`${card} space-y-4`}>
        <div className="h-36 rounded-lg border border-ink canvas-checkerboard overflow-hidden" aria-hidden="true">
          <div className="w-full h-full" style={{ background: c ? toHex(c) : 'transparent' }} />
        </div>
        {name && (
          <p className="text-[15px] text-ink" data-measure>
            {name.exact ? t('ctl.colorconv.named', { name: name.name }) : t('ctl.colorconv.nearest', { name: name.name })}
          </p>
        )}
        <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.colorconv.cmykNote')}</p>
      </div>
    </div>
  );
}

// ---------- Contrast checker ----------
export function ContrastCheckerWorkspace() {
  const t = useT();
  const locale = useLocale();
  const [fg, setFg] = useState('#767676');
  const [bg, setBg] = useState('#FFFFFF');
  const F = parseColor(fg), B = parseColor(bg);
  const ratio = F && B ? contrast(F, { ...B, a: 1 }) : null;
  const grade = ratio ? wcag(ratio) : null;
  const fix = (target: number) => (F && B ? suggestFix({ ...F, a: 1 }, { ...B, a: 1 }, target) : null);
  const fixAA = ratio && ratio < 4.5 ? fix(4.5) : null;
  const fixAAA = ratio && ratio < 7 ? fix(7) : null;
  const rows: [string, string, boolean][] = grade
    ? [
        [t('ctl.contrast.normalText'), 'AA 4.5:1', grade.aaNormal],
        [t('ctl.contrast.normalText'), 'AAA 7:1', grade.aaaNormal],
        [t('ctl.contrast.largeText'), 'AA 3:1', grade.aaLarge],
        [t('ctl.contrast.largeText'), 'AAA 4.5:1', grade.aaaLarge],
        [t('ctl.contrast.ui'), 'AA 3:1', grade.ui],
      ]
    : [];
  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-5">
        <div className={`${card} grid gap-4 sm:grid-cols-[1fr_auto_1fr] items-end`}>
          <ColorField id="ct-fg" label={t('ctl.contrast.text')} value={fg} onChange={setFg} />
          <button
            type="button"
            onClick={() => {
              setFg(bg);
              setBg(fg);
            }}
            aria-label={t('ctl.contrast.swap')}
            title={t('ctl.contrast.swap')}
            className="w-11 h-11 justify-self-center flex items-center justify-center border border-ink rounded-md hover:bg-paper-stock"
          >
            <ArrowLeftRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <ColorField id="ct-bg" label={t('ctl.contrast.background')} value={bg} onChange={setBg} />
        </div>
        {F && B && (
          <div className="rounded-xl border border-ink p-6 space-y-3" style={{ background: toHex({ ...B, a: 1 }), color: toHex(F) }} aria-label={t('ctl.contrast.preview')}>
            <p className="text-[32px] font-bold leading-tight">{t('ctl.contrast.sampleLarge')}</p>
            <p className="text-[16px] leading-relaxed">{t('ctl.contrast.sampleNormal')}</p>
            <span className="inline-block border-2 rounded-md px-3 py-1.5 text-[14px] font-semibold" style={{ borderColor: toHex(F) }}>{t('ctl.contrast.sampleButton')}</span>
          </div>
        )}
      </div>
      <div className={`${card} space-y-4`} aria-live="polite">
        <div>
          <p className="slug">{t('ctl.contrast.ratio')}</p>
          <p className="font-condensed font-bold text-[48px] leading-none text-ink" data-measure>{ratio ? `${ratio.toLocaleString(locale, { maximumFractionDigits: 2 })}:1` : '—'}</p>
        </div>
        <ul className="divide-y divide-pencil-soft border-y border-pencil-soft text-[15px]">
          {rows.map(([what, level, pass], i) => (
            <li key={i} className="flex items-center justify-between gap-3 py-2">
              <span className="text-ink">{what} <span className="text-graphite">· {level}</span></span>
              <span className={`font-semibold ${pass ? 'text-accent-green' : 'text-accent-red'}`}>{pass ? t('ctl.contrast.pass') : t('ctl.contrast.fail')}</span>
            </li>
          ))}
        </ul>
        {(fixAA || fixAAA) && (
          <div className="space-y-2">
            <p className="text-[14px] text-ink">{t('ctl.contrast.suggest')}</p>
            {[
              [fixAA, 'AA'],
              [fixAAA, 'AAA'],
            ].map(([c, level]) =>
              c ? (
                <button key={level as string} type="button" onClick={() => setFg(toHex(c as RGBA).toUpperCase())} className="btn-rule min-h-[44px] w-full justify-start">
                  <span className="w-5 h-5 rounded border border-ink" style={{ background: toHex(c as RGBA) }} aria-hidden="true" />
                  {t('ctl.contrast.use', { color: toHex(c as RGBA).toUpperCase(), level: level as string })}
                </button>
              ) : null
            )}
          </div>
        )}
        <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.contrast.note')}</p>
      </div>
    </div>
  );
}

// ---------- Paper sizes ----------
const GROUPS: Paper['group'][] = ['iso-a', 'us', 'iso-b', 'iso-c', 'photo', 'envelope', 'jis'];
const UNITS: Unit[] = ['mm', 'cm', 'in', 'pt', 'px'];

export function PaperSizeWorkspace() {
  const t = useT();
  const [group, setGroup] = useState<Paper['group']>('iso-a');
  const [unit, setUnit] = useState<Unit>('mm');
  const [dpi, setDpi] = useState(300);
  const [w, setW] = useState('210');
  const [h, setH] = useState('297');
  const [inUnit, setInUnit] = useState<Unit>('mm');
  const size = (p: { w: number; h: number }, u: Unit) => `${show(fromMm(p.w, u, dpi), u)} × ${show(fromMm(p.h, u, dpi), u)}`;
  const W = toMm(parseFloat(w), inUnit, dpi), H = toMm(parseFloat(h), inUnit, dpi);
  const valid = W > 0 && H > 0;
  const near = valid ? nearestPaper(W, H) : null;
  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-4">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label={t('ctl.paper.group')}>
          {GROUPS.map((g) => (
            <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)} className={`${seg(group === g)} border border-ink rounded-md`}>
              {t(`ctl.paper.g.${g}` as 'ctl.paper.g.us')}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto border border-ink rounded-xl bg-paper-bright">
          <table className="w-full text-[15px] whitespace-nowrap">
            <thead>
              <tr className="border-b border-ink text-left">
                <th scope="col" className="px-3 py-2 font-semibold text-ink">{t('ctl.paper.size')}</th>
                <th scope="col" className="px-3 py-2 font-semibold text-ink">{t(`ctl.paper.u.${unit}` as 'ctl.paper.u.mm')}</th>
                {unit !== 'in' && <th scope="col" className="px-3 py-2 font-semibold text-ink">{t('ctl.paper.u.in')}</th>}
                {unit !== 'px' && <th scope="col" className="px-3 py-2 font-semibold text-ink">{t('ctl.paper.pxAt', { dpi })}</th>}
              </tr>
            </thead>
            <tbody>
              {PAPERS.filter((p) => p.group === group).map((p) => (
                <tr key={p.id} className="border-b border-pencil-soft last:border-0" data-measure>
                  <th scope="row" className="px-3 py-1.5 text-left font-semibold text-ink">{p.name}</th>
                  <td className="px-3 py-1.5 text-ink">{size(p, unit)}</td>
                  {unit !== 'in' && <td className="px-3 py-1.5 text-graphite">{size(p, 'in')}</td>}
                  {unit !== 'px' && <td className="px-3 py-1.5 text-graphite">{size(p, 'px')}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-5">
        <div className={`${card} space-y-4`}>
          <div className="space-y-2">
            <span className="slug block" id="paper-unit">{t('ctl.paper.showIn')}</span>
            <div className="grid grid-cols-5 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="paper-unit">
              {UNITS.map((u) => (
                <button key={u} type="button" aria-pressed={unit === u} onClick={() => setUnit(u)} className={seg(unit === u)}>{u}</button>
              ))}
            </div>
          </div>
          <label className="block space-y-1.5">
            <span className="slug block">{t('ctl.paper.dpi')}</span>
            <input type="number" inputMode="numeric" min={1} max={2400} value={dpi} onChange={(e) => setDpi(Math.max(1, Math.min(2400, parseInt(e.target.value, 10) || 0)))} className={fieldClass} />
          </label>
        </div>
        <div className={`${card} space-y-3`}>
          <h2 className="text-[17px] font-bold text-ink">{t('ctl.paper.convert')}</h2>
          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
            <label className="space-y-1">
              <span className="text-[13px] text-graphite">{t('ctl.paper.width')}</span>
              <input type="number" inputMode="decimal" min={0} value={w} onChange={(e) => setW(e.target.value)} className={fieldClass} />
            </label>
            <label className="space-y-1">
              <span className="text-[13px] text-graphite">{t('ctl.paper.height')}</span>
              <input type="number" inputMode="decimal" min={0} value={h} onChange={(e) => setH(e.target.value)} className={fieldClass} />
            </label>
            <select aria-label={t('ctl.paper.unit')} value={inUnit} onChange={(e) => setInUnit(e.target.value as Unit)} className="min-h-[44px] px-2 border border-ink bg-paper-bright rounded-md text-[15px]">
              {UNITS.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
          {valid && (
            <dl className="divide-y divide-pencil-soft border-y border-pencil-soft text-[15px]" aria-live="polite" data-measure>
              {UNITS.filter((u) => u !== inUnit).map((u) => (
                <div key={u} className="flex justify-between gap-3 py-1.5">
                  <dt className="text-graphite">{u}{u === 'px' ? ` (${dpi} DPI)` : ''}</dt>
                  <dd className="text-ink font-semibold">{size({ w: W, h: H }, u)}</dd>
                </div>
              ))}
              {near && (
                <div className="flex justify-between gap-3 py-1.5">
                  <dt className="text-graphite">{t('ctl.paper.closest')}</dt>
                  <dd className="text-ink font-semibold text-right">{near.off < 1.5 ? near.paper.name : t('ctl.paper.closeTo', { name: near.paper.name, mm: Math.round(near.off) })}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Aspect ratio ----------
export function AspectRatioWorkspace() {
  const t = useT();
  const locale = useLocale();
  const [w, setW] = useState('1920');
  const [h, setH] = useState('1080');
  const [ratio, setRatio] = useState('16:9');
  const [newW, setNewW] = useState('1280');
  const [newH, setNewH] = useState('');
  const r = ratioOf(parseFloat(w), parseFloat(h));
  const target = parseRatio(ratio);
  const solvedH = target && parseFloat(newW) > 0 ? heightFor(parseFloat(newW), target[0], target[1]) : null;
  const solvedW = target && !newW && parseFloat(newH) > 0 ? widthFor(parseFloat(newH), target[0], target[1]) : null;
  const num = (v: number, d = 2) => v.toLocaleString(locale, { maximumFractionDigits: d });
  const common = useMemo(() => COMMON_RATIOS, []);
  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-5">
        <div className={`${card} space-y-4`}>
          <h2 className="text-[17px] font-bold text-ink">{t('ctl.ratio.find')}</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="block space-y-1.5">
              <span className="slug block">{t('ctl.paper.width')}</span>
              <input type="number" inputMode="numeric" min={1} value={w} onChange={(e) => setW(e.target.value)} className={fieldClass} />
            </label>
            <label className="block space-y-1.5">
              <span className="slug block">{t('ctl.paper.height')}</span>
              <input type="number" inputMode="numeric" min={1} value={h} onChange={(e) => setH(e.target.value)} className={fieldClass} />
            </label>
          </div>
          {r && (
            <dl className="divide-y divide-pencil-soft border-y border-pencil-soft text-[15px]" aria-live="polite" data-measure>
              <div className="flex justify-between gap-3 py-1.5">
                <dt className="text-graphite">{t('ctl.ratio.ratio')}</dt>
                <dd className="text-ink font-bold text-[18px]">{r.w}:{r.h}</dd>
              </div>
              <div className="flex justify-between gap-3 py-1.5">
                <dt className="text-graphite">{t('ctl.ratio.decimal')}</dt>
                <dd className="text-ink font-semibold">{num(r.value, 3)}:1</dd>
              </div>
              <div className="flex justify-between gap-3 py-1.5">
                <dt className="text-graphite">{t('ctl.ratio.closest')}</dt>
                <dd className="text-ink font-semibold text-right">
                  {r.nearest.w}:{r.nearest.h} · {t(`ctl.ratio.c.${`${r.nearest.w}x${r.nearest.h}`.replace(/\./g, '_')}` as 'ctl.ratio.c.16x9')}
                  {!r.nearest.exact && <span className="block text-[13px] font-normal text-graphite">{t('ctl.ratio.approx')}</span>}
                </dd>
              </div>
            </dl>
          )}
        </div>
        <div className={`${card} space-y-4`}>
          <h2 className="text-[17px] font-bold text-ink">{t('ctl.ratio.resize')}</h2>
          <label className="block space-y-1.5">
            <span className="slug block">{t('ctl.ratio.ratio')}</span>
            <input type="text" value={ratio} onChange={(e) => setRatio(e.target.value)} placeholder="16:9" className={`${fieldClass} font-mono`} aria-invalid={!target} />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block space-y-1.5">
              <span className="slug block">{t('ctl.paper.width')}</span>
              <input type="number" inputMode="numeric" min={1} value={newW} onChange={(e) => { setNewW(e.target.value); if (e.target.value) setNewH(''); }} placeholder={solvedW ? num(solvedW, 0) : ''} className={fieldClass} />
            </label>
            <label className="block space-y-1.5">
              <span className="slug block">{t('ctl.paper.height')}</span>
              <input type="number" inputMode="numeric" min={1} value={newH} onChange={(e) => { setNewH(e.target.value); if (e.target.value) setNewW(''); }} placeholder={solvedH ? num(solvedH, 0) : ''} className={fieldClass} />
            </label>
          </div>
          {(solvedH || solvedW) && (
            <p className="text-[17px] text-ink font-semibold" aria-live="polite" data-measure>
              {solvedH ? `${newW} × ${num(solvedH, 2)}` : `${num(solvedW!, 2)} × ${newH}`}
              {(solvedH ?? solvedW)! % 1 !== 0 && <span className="block text-[13px] font-normal text-graphite">{t('ctl.ratio.rounded', { value: num(Math.round((solvedH ?? solvedW)!), 0) })}</span>}
            </p>
          )}
        </div>
      </div>
      <div className={`${card} space-y-2`}>
        <h2 className="text-[17px] font-bold text-ink">{t('ctl.ratio.common')}</h2>
        <ul className="divide-y divide-pencil-soft">
          {common.map(([a, b]) => {
            const key = `${a}x${b}`.replace(/\./g, '_');
            return (
              <li key={key}>
                <button type="button" onClick={() => setRatio(`${a}:${b}`)} className="w-full flex items-center justify-between gap-3 py-2 text-left hover:bg-paper-stock rounded-md px-1 min-h-[44px]">
                  <span className="font-semibold text-ink">{a}:{b}</span>
                  <span className="text-[14px] text-graphite text-right">{t(`ctl.ratio.c.${key}` as 'ctl.ratio.c.16x9')}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
