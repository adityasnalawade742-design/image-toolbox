import React, { useState } from 'react';
import { useLocale, useT } from '../../shared/I18nContext';
import { aspectRatio, convertLength, formatLength, megapixels, type LengthUnit } from '../../../lib/calc/printUnits';

const DPIS = [72, 96, 150, 300, 600];
const UNITS: LengthUnit[] = ['px', 'in', 'cm', 'mm'];
// Values people commonly look up, for the table under each converter
const COMMON: Record<LengthUnit, number[]> = {
  px: [100, 300, 500, 800, 1000, 1200, 1920, 3000],
  in: [1, 2, 3, 4, 5, 6, 8, 10],
  cm: [1, 2, 5, 10, 15, 20, 21, 30],
  mm: [10, 25, 50, 100, 148, 210, 297, 420],
};

/** A result to read (not an input): grouped and with the language's decimal mark, e.g. 2,54 in German */
const useNumber = () => {
  const locale = useLocale();
  return (value: number, digits = 3, minDigits = 0) => value.toLocaleString(locale, { maximumFractionDigits: digits, minimumFractionDigits: minDigits });
};

const fieldClass = 'w-full min-h-[44px] px-3 border border-ink bg-paper-bright text-[16px] text-ink';
const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;

function DpiPicker({ dpi, setDpi }: { dpi: number; setDpi: (v: number) => void }) {
  const t = useT();
  return (
    <div className="space-y-1.5">
      <span className="slug block" id="calc-dpi-label">{t('ctl.calc.dpi')}</span>
      <div className="grid grid-cols-5 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="calc-dpi-label">
        {DPIS.map((d) => (
          <button key={d} type="button" aria-pressed={dpi === d} onClick={() => setDpi(d)} className={seg(dpi === d)} data-measure>
            {d}
          </button>
        ))}
      </div>
      <label htmlFor="calc-dpi" className="block text-[14px] text-graphite pt-1">{t('ctl.calc.dpiCustom')}</label>
      <input
        id="calc-dpi"
        type="number"
        inputMode="numeric"
        min={1}
        max={10000}
        value={dpi}
        onChange={(e) => {
          const v = parseInt(e.target.value, 10);
          if (v >= 1 && v <= 10000) setDpi(v);
        }}
        className={fieldClass}
        data-measure
      />
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.calc.dpiHint')}</p>
    </div>
  );
}

/** Type in any unit; the others follow. `from` is the unit the page is about, shown first. */
export function UnitConverterWorkspace({ from, to }: { from: LengthUnit; to: LengthUnit }) {
  const t = useT();
  const num = useNumber();
  const [dpi, setDpi] = useState(300);
  const [edited, setEdited] = useState<{ unit: LengthUnit; text: string }>({ unit: from, text: from === 'px' ? '1000' : '1' });
  const value = parseFloat(edited.text);
  const valid = Number.isFinite(value) && value >= 0;
  const order = [from, to, ...UNITS.filter((u) => u !== from && u !== to)];
  const name = (u: LengthUnit) => t(`ctl.calc.unit.${u}`);

  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 border border-ink bg-paper-bright p-5 rounded-xl">
          {order.map((u) => (
            <label key={u} htmlFor={`calc-${u}`} className="block space-y-1.5">
              <span className="slug block">{name(u)}</span>
              <input
                id={`calc-${u}`}
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={edited.unit === u ? edited.text : valid ? formatLength(convertLength(value, edited.unit, u, dpi), u) : ''}
                onChange={(e) => setEdited({ unit: u, text: e.target.value })}
                className={fieldClass}
                data-measure
              />
            </label>
          ))}
        </div>
        <div className="space-y-2">
          <h2 className="text-[17px] font-bold text-ink">{t('ctl.calc.common', { dpi })}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-ink text-left">
                  <th scope="col" className="py-2 pr-4 font-semibold text-ink">{name(from)}</th>
                  <th scope="col" className="py-2 font-semibold text-ink">{name(to)}</th>
                </tr>
              </thead>
              <tbody>
                {COMMON[from].map((v) => (
                  <tr key={v} className="border-b border-pencil-soft" data-measure>
                    <td className="py-1.5 pr-4 text-ink">{num(v)}</td>
                    <td className="py-1.5 text-ink">{num(convertLength(v, from, to, dpi), to === 'px' ? 0 : 3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="space-y-5 border border-ink bg-paper-bright p-5 rounded-xl">
        <DpiPicker dpi={dpi} setDpi={setDpi} />
        <p className="text-[14px] text-ink pt-4 border-t border-ink" data-measure>{t('ctl.calc.rule', { dpi, cm: num(dpi / 2.54, 1, 1) })}</p>
      </div>
    </div>
  );
}

/** What a picture's pixel size means: print size at each DPI, megapixels and shape */
export function ResolutionCalcWorkspace() {
  const t = useT();
  const num = useNumber();
  const [w, setW] = useState('4000');
  const [h, setH] = useState('3000');
  const [dpi, setDpi] = useState(300);
  const width = parseInt(w, 10);
  const height = parseInt(h, 10);
  const valid = width > 0 && height > 0;
  const size = (d: number) => `${num(width / d, 2, 2)} × ${num(height / d, 2, 2)} in`;
  const sizeCm = (d: number) => `${num((width / d) * 2.54, 1, 1)} × ${num((height / d) * 2.54, 1, 1)} cm`;

  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <div className="min-w-0 space-y-6">
        <div className="grid gap-4 grid-cols-2 border border-ink bg-paper-bright p-5 rounded-xl">
          <label htmlFor="calc-w" className="block space-y-1.5">
            <span className="slug block">{t('ctl.calc.widthPx')}</span>
            <input id="calc-w" type="number" inputMode="numeric" min={1} value={w} onChange={(e) => setW(e.target.value)} className={fieldClass} data-measure />
          </label>
          <label htmlFor="calc-h" className="block space-y-1.5">
            <span className="slug block">{t('ctl.calc.heightPx')}</span>
            <input id="calc-h" type="number" inputMode="numeric" min={1} value={h} onChange={(e) => setH(e.target.value)} className={fieldClass} data-measure />
          </label>
        </div>
        {valid && (
          <>
            <dl className="border-y border-ink divide-y divide-pencil-soft text-[15px]" data-measure aria-live="polite">
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-graphite">{t('ctl.calc.printAt', { dpi })}</dt>
                <dd className="text-ink font-semibold text-right">{size(dpi)}<span className="block text-[13px] font-normal text-graphite">{sizeCm(dpi)}</span></dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-graphite">{t('ctl.calc.megapixels')}</dt>
                <dd className="text-ink font-semibold">{num(megapixels(width, height), 1, 1)} MP</dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt className="text-graphite">{t('ctl.calc.ratio')}</dt>
                <dd className="text-ink font-semibold">{aspectRatio(width, height)}</dd>
              </div>
            </dl>
            <div className="space-y-2">
              <h2 className="text-[17px] font-bold text-ink">{t('ctl.calc.printTable')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[15px] border-collapse">
                  <thead>
                    <tr className="border-b border-ink text-left">
                      <th scope="col" className="py-2 pr-4 font-semibold text-ink">DPI</th>
                      <th scope="col" className="py-2 pr-4 font-semibold text-ink">{t('ctl.calc.unit.in')}</th>
                      <th scope="col" className="py-2 font-semibold text-ink">{t('ctl.calc.unit.cm')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DPIS.map((d) => (
                      <tr key={d} className="border-b border-pencil-soft" data-measure>
                        <td className="py-1.5 pr-4 text-ink">{d}</td>
                        <td className="py-1.5 pr-4 text-ink whitespace-nowrap">{size(d)}</td>
                        <td className="py-1.5 text-ink whitespace-nowrap">{sizeCm(d)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="space-y-5 border border-ink bg-paper-bright p-5 rounded-xl">
        <DpiPicker dpi={dpi} setDpi={setDpi} />
      </div>
    </div>
  );
}
