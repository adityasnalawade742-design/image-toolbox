import { useId } from 'react';
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, Plus, Trash2, RotateCcw } from 'lucide-react';
import type { TextOverlayOptions } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  layers: TextOverlayOptions[];
  active: number;
  onSelect: (index: number) => void;
  onChange: (layers: TextOverlayOptions[]) => void;
}

const MAX_TEXTS = 10;

const segButton = (selected: boolean) =>
  `min-h-[40px] min-w-[44px] px-2 flex items-center justify-center transition-colors ${
    selected ? 'seg-on' : 'seg-off'
  }`;

const fieldClass = 'w-full border border-ink bg-paper-bright px-2.5 min-h-[40px] text-[15px] text-ink';
const swatchClass = 'w-10 h-10 shrink-0 p-0.5 border border-ink bg-paper-bright cursor-pointer';

export function TextControls({ layers, active, onSelect, onChange: setLayers }: Props) {
  const t = useT();
  const idBase = useId();
  const options = layers[active] ?? layers[0];
  // Every control below edits the selected text block
  const onChange = (next: TextOverlayOptions) => setLayers(layers.map((l, i) => (i === active ? next : l)));
  const hasStroke = Boolean(options.strokeWidth && options.strokeWidth > 0);
  const hasBg = Boolean(options.backgroundColor);

  // A new block takes the selected one's style and lands a little lower, so it doesn't sit on top of it
  const addText = () => {
    if (layers.length >= MAX_TEXTS) return;
    const y = Math.min(90, (options.position === 'custom' ? options.customYPercent ?? 50 : 50) + 15);
    const next: TextOverlayOptions = { ...options, text: t('ctl.text.newText'), position: 'custom', customXPercent: 50, customYPercent: y > 89 ? 20 : y, rotation: 0 };
    setLayers([...layers, next]);
    onSelect(layers.length);
  };
  const removeText = () => {
    if (layers.length < 2) return;
    setLayers(layers.filter((_, i) => i !== active));
    onSelect(Math.max(0, active - 1));
  };

  const fontFamilies = [
    'Inter, sans-serif',
    'Arial, sans-serif',
    'Helvetica, sans-serif',
    'Georgia, serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Impact, sans-serif',
  ];

  const alignments = [
    { id: 'left' as const, label: t('ctl.text.alignLeft'), Icon: AlignLeft },
    { id: 'center' as const, label: t('ctl.text.alignCenter'), Icon: AlignCenter },
    { id: 'right' as const, label: t('ctl.text.alignRight'), Icon: AlignRight },
  ];

  const id = (name: string) => `${idBase}-${name}`;
  // Where the text sits horizontally before it is moved: follows the alignment, like the engine
  const customX = options.customXPercent ?? (options.textAlign === 'left' ? 5 : options.textAlign === 'right' ? 95 : 50);

  return (
    <div className="space-y-5">
      {/* The text blocks on the image: pick one to edit, add another, or remove the selected one */}
      <div className="space-y-2">
        <span className="slug block" id={id('layers')}>{t('ctl.text.layers')}</span>
        <ul className="border border-ink rounded-md divide-y divide-pencil-soft overflow-hidden" aria-labelledby={id('layers')}>
          {layers.map((layer, i) => (
            <li key={i}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => onSelect(i)}
                className={`w-full min-h-[40px] px-3 flex items-center gap-2.5 text-left text-[15px] transition-colors ${i === active ? 'seg-on' : 'seg-off'}`}
              >
                <span className="text-[13px] text-graphite w-4 shrink-0" data-measure>{i + 1}</span>
                <span className="truncate">{layer.text.trim() || t('ctl.text.placeholder')}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={addText} disabled={layers.length >= MAX_TEXTS} className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed">
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.text.addText')}</span>
          </button>
          <button type="button" onClick={removeText} disabled={layers.length < 2} className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed">
            <Trash2 className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.text.removeText')}</span>
          </button>
        </div>
      </div>

      {/* Text */}
      <div className="space-y-1.5">
        <label htmlFor={id('text')} className="slug block">
          {t('ctl.text.text')}
        </label>
        <textarea
          id={id('text')}
          rows={2}
          value={options.text}
          onChange={(e) => onChange({ ...options, text: e.target.value })}
          placeholder={t('ctl.text.placeholder')}
          aria-describedby={id('text-hint')}
          className="w-full border border-ink bg-paper-bright p-2.5 text-[15px] text-ink placeholder:text-graphite resize-none"
        />
        <p id={id('text-hint')} className="text-[13px] text-graphite">
          {t('ctl.text.textHint')}
        </p>
      </div>

      {/* Font and position */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label htmlFor={id('font')} className="block text-[14px] text-graphite">
            {t('ctl.text.font')}
          </label>
          <select
            id={id('font')}
            value={options.fontFamily || 'Inter, sans-serif'}
            onChange={(e) => onChange({ ...options, fontFamily: e.target.value })}
            className={fieldClass}
          >
            {fontFamilies.map((f) => (
              <option key={f} value={f}>
                {f.split(',')[0]}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor={id('position')} className="block text-[14px] text-graphite">
            {t('ctl.text.position')}
          </label>
          <select
            id={id('position')}
            value={options.position}
            onChange={(e) => onChange({ ...options, position: e.target.value as 'top' | 'center' | 'bottom' | 'custom' })}
            className={fieldClass}
          >
            <option value="top">{t('ctl.text.posTop')}</option>
            <option value="center">{t('ctl.text.posCenter')}</option>
            <option value="bottom">{t('ctl.text.posBottom')}</option>
            <option value="custom">{t('ctl.text.posCustom')}</option>
          </select>
        </div>
      </div>

      {/* Custom vertical position */}
      {options.position === 'custom' && (
        <div className="space-y-1.5 p-3 bg-paper-stock border border-pencil">
          {/* Horizontal position: the keyboard route to what dragging the text does */}
          <div className="flex items-baseline justify-between gap-2 text-[15px]">
            <label htmlFor={id('x')} className="text-ink">
              {t('ctl.text.horizontalPosition')}
            </label>
            <span className="font-semibold text-ink" data-measure>
              {customX}%
            </span>
          </div>
          <input
            id={id('x')}
            type="range"
            min="0"
            max="100"
            value={customX}
            onChange={(e) => onChange({ ...options, customXPercent: parseInt(e.target.value) })}
            className="w-full"
          />
          <div className="flex items-baseline justify-between gap-2 text-[15px]">
            <label htmlFor={id('y')} className="text-ink">
              {t('ctl.text.verticalPosition')}
            </label>
            <span className="font-semibold text-ink" data-measure>
              {options.customYPercent ?? 50}%
            </span>
          </div>
          <input
            id={id('y')}
            type="range"
            min="5"
            max="95"
            value={options.customYPercent ?? 50}
            onChange={(e) => onChange({ ...options, customYPercent: parseInt(e.target.value) || 50 })}
            className="w-full"
          />
          <p className="text-[13px] text-graphite">{t('ctl.text.dragHint')}</p>
        </div>
      )}

      {/* Style and alignment */}
      <div className="space-y-1.5">
        <span className="slug block" id={id('style')}>{t('ctl.text.style')}</span>
        <div className="flex flex-wrap gap-2">
          <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby={id('style')}>
            <button
              type="button"
              aria-pressed={!!options.bold}
              aria-label={t('ctl.text.bold')}
              title={t('ctl.text.bold')}
              onClick={() => onChange({ ...options, bold: !options.bold })}
              className={segButton(!!options.bold)}
            >
              <Bold className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-pressed={!!options.italic}
              aria-label={t('ctl.text.italic')}
              title={t('ctl.text.italic')}
              onClick={() => onChange({ ...options, italic: !options.italic })}
              className={segButton(!!options.italic)}
            >
              <Italic className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.text.alignment')}>
            {alignments.map(({ id: align, label, Icon }) => {
              const selected = (options.textAlign || 'center') === align;
              return (
                <button
                  key={align}
                  type="button"
                  aria-pressed={selected}
                  aria-label={label}
                  title={label}
                  onClick={() => onChange({ ...options, textAlign: align })}
                  className={segButton(selected)}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Size and opacity */}
      <div className="space-y-4 pt-4 border-t border-pencil">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2 text-[15px]">
            <label htmlFor={id('size')} className="text-ink">
              {t('ctl.text.size')}
            </label>
            <span className="font-semibold text-ink" data-measure>
              {options.fontSize} px
            </span>
          </div>
          <input
            id={id('size')}
            type="range"
            min="12"
            max="240"
            value={options.fontSize}
            onChange={(e) => onChange({ ...options, fontSize: parseInt(e.target.value) || 36 })}
            className="w-full"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2 text-[15px]">
            <label htmlFor={id('opacity')} className="text-ink">
              {t('ctl.text.opacity')}
            </label>
            <span className="font-semibold text-ink" data-measure>
              {Math.round(options.opacity * 100)}%
            </span>
          </div>
          <input
            id={id('opacity')}
            type="range"
            min="10"
            max="100"
            value={Math.round(options.opacity * 100)}
            onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 100) / 100 })}
            className="w-full"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2 text-[15px]">
            <label htmlFor={id('rotation')} className="text-ink">
              {t('ctl.text.rotation')}
            </label>
            <span className="flex items-center gap-2">
              <span className="font-semibold text-ink" data-measure>
                {options.rotation ?? 0}°
              </span>
              <button
                type="button"
                onClick={() => onChange({ ...options, rotation: 0 })}
                disabled={!options.rotation}
                aria-label={t('ctl.text.rotationReset')}
                title={t('ctl.text.rotationReset')}
                className="w-9 h-9 inline-flex items-center justify-center rounded-md text-ink hover:bg-paper-stock disabled:opacity-30"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
              </button>
            </span>
          </div>
          <input
            id={id('rotation')}
            type="range"
            min="-180"
            max="180"
            value={options.rotation ?? 0}
            onChange={(e) => onChange({ ...options, rotation: parseInt(e.target.value) || 0 })}
            className="w-full"
          />
        </div>
      </div>

      {/* Color and shadow */}
      <div className="space-y-2 pt-4 border-t border-pencil text-[15px]">
        <div className="flex items-center gap-3">
          <label htmlFor={id('color')} className="text-ink">
            {t('ctl.text.color')}
          </label>
          <input
            id={id('color')}
            type="color"
            value={options.color}
            onChange={(e) => onChange({ ...options, color: e.target.value })}
            className={swatchClass}
          />
          <span className="text-[14px] text-graphite uppercase" data-measure>
            {options.color}
          </span>
        </div>

        <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
          <input
            type="checkbox"
            checked={!!options.dropShadow}
            onChange={(e) => onChange({ ...options, dropShadow: e.target.checked })}
           
          />
          <span>{t('ctl.text.shadow')}</span>
        </label>
      </div>

      {/* Outline */}
      <div className="space-y-2 pt-4 border-t border-pencil text-[15px]">
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input
              type="checkbox"
              checked={hasStroke}
              onChange={(e) => {
                onChange({
                  ...options,
                  strokeWidth: e.target.checked ? (options.strokeWidth || 4) : 0,
                  strokeColor: options.strokeColor || '#000000',
                });
              }}
             
            />
            <span className="font-medium">{t('ctl.text.outline')}</span>
          </label>

          {hasStroke && (
            <input
              type="color"
              value={options.strokeColor || '#000000'}
              onChange={(e) => onChange({ ...options, strokeColor: e.target.value })}
              aria-label={t('ctl.text.outlineColor')}
              className={swatchClass}
            />
          )}
        </div>

        {hasStroke && (
          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-2">
              <label htmlFor={id('stroke')} className="text-ink">
                {t('ctl.text.outlineWidth')}
              </label>
              <span className="font-semibold text-ink" data-measure>
                {options.strokeWidth || 4} px
              </span>
            </div>
            <input
              id={id('stroke')}
              type="range"
              min="1"
              max="20"
              value={options.strokeWidth || 4}
              onChange={(e) => onChange({ ...options, strokeWidth: parseInt(e.target.value) || 4 })}
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* Background box */}
      <div className="space-y-2 pt-4 border-t border-pencil text-[15px]">
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input
              type="checkbox"
              checked={hasBg}
              onChange={(e) => {
                onChange({
                  ...options,
                  backgroundColor: e.target.checked ? (options.backgroundColor || '#000000') : undefined,
                  backgroundOpacity: options.backgroundOpacity ?? 0.8,
                });
              }}
             
            />
            <span className="font-medium">{t('ctl.text.background')}</span>
          </label>

          {hasBg && (
            <input
              type="color"
              value={options.backgroundColor || '#000000'}
              onChange={(e) => onChange({ ...options, backgroundColor: e.target.value })}
              aria-label={t('ctl.text.backgroundColor')}
              className={swatchClass}
            />
          )}
        </div>

        {hasBg && (
          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-2">
              <label htmlFor={id('bg-opacity')} className="text-ink">
                {t('ctl.text.backgroundOpacity')}
              </label>
              <span className="font-semibold text-ink" data-measure>
                {Math.round((options.backgroundOpacity ?? 0.8) * 100)}%
              </span>
            </div>
            <input
              id={id('bg-opacity')}
              type="range"
              min="10"
              max="100"
              value={Math.round((options.backgroundOpacity ?? 0.8) * 100)}
              onChange={(e) => onChange({ ...options, backgroundOpacity: (parseInt(e.target.value) || 80) / 100 })}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
