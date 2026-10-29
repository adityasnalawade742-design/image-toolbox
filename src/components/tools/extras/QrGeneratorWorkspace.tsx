import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, CheckCircle2, AlertTriangle, ImagePlus, X, FileCode2 } from 'lucide-react';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { decodeWithJsQr } from '../../../lib/qr/decode';
import {
  cleanIban,
  contactPayload,
  emailPayload,
  locationPayload,
  normaliseLink,
  parseCoordinates,
  phonePayload,
  sepaPayload,
  upiPayload,
  validUpiId,
  whatsappPayload,
  wifiPayload,
  type QrKind,
  type WifiFields,
} from '../../../lib/qr/payload';

type Level = 'L' | 'M' | 'Q' | 'H';
const KINDS: QrKind[] = ['link', 'text', 'wifi', 'email', 'phone', 'contact', 'whatsapp', 'location', 'payment'];
// The logo covers the middle of the code; at this size the highest error correction still recovers it
const LOGO_SHARE = 0.22;

const lum = (hex: string) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};

const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

export function QrGeneratorWorkspace({ defaultKind = 'link' }: { defaultKind?: QrKind } = {}) {
  const t = useT();
  const [kind, setKind] = useState<QrKind>(defaultKind);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const [wifi, setWifi] = useState<WifiFields>({ ssid: '', password: '', security: 'WPA', hidden: false });
  const [email, setEmail] = useState({ to: '', subject: '', body: '' });
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState({ name: '', phone: '', email: '', org: '', url: '' });
  const [wa, setWa] = useState({ phone: '', message: '' });
  const [place, setPlace] = useState('');
  const [scheme, setScheme] = useState<'upi' | 'sepa'>('upi');
  const [upi, setUpi] = useState({ vpa: '', name: '', amount: '', note: '' });
  const [sepa, setSepa] = useState({ name: '', iban: '', bic: '', amount: '', reference: '' });
  const [size, setSize] = useState(1024);
  const [margin, setMargin] = useState(4);
  const [level, setLevel] = useState<Level>('M');
  const [dark, setDark] = useState('#141414');
  const [light, setLight] = useState('#ffffff');
  const [logo, setLogo] = useState<{ img: HTMLImageElement; name: string } | null>(null);
  const [scans, setScans] = useState<boolean | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const payload = (() => {
    switch (kind) {
      case 'link':
        return normaliseLink(link);
      case 'text':
        return text;
      case 'wifi':
        return wifi.ssid ? wifiPayload(wifi) : '';
      case 'email':
        return email.to.trim() ? emailPayload(email) : '';
      case 'phone':
        return phone.replace(/[^\d+]/g, '') ? phonePayload(phone) : '';
      case 'contact':
        return contact.name.trim() ? contactPayload(contact) : '';
      case 'whatsapp':
        return wa.phone.replace(/\D/g, '').length >= 7 ? whatsappPayload(wa.phone, wa.message) : '';
      case 'location': {
        const c = parseCoordinates(place);
        return c ? locationPayload(c.lat, c.lng) || '' : '';
      }
      case 'payment':
        // Money goes exactly where the code says, so nothing is made until the account is valid
        if (scheme === 'upi') return validUpiId(upi.vpa) && upi.name.trim() ? upiPayload(upi) : '';
        return sepaPayload(sepa) || '';
    }
  })();
  const coords = kind === 'location' ? parseCoordinates(place) : null;
  // A logo hides part of the code: only the highest error correction reliably survives that
  const effectiveLevel: Level = logo ? 'H' : level;
  const contrast = (Math.max(lum(dark), lum(light)) + 0.05) / (Math.min(lum(dark), lum(light)) + 0.05);
  const inverted = lum(dark) > lum(light);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    setScans(null);
    if (!payload) {
      canvas.width = canvas.height = 0;
      setError(null);
      return;
    }
    const id = window.setTimeout(async () => {
      try {
        await QRCode.toCanvas(canvas, payload, { errorCorrectionLevel: effectiveLevel, margin, width: size, color: { dark, light } });
        if (logo) {
          const ctx = canvas.getContext('2d')!;
          const box = Math.round(canvas.width * LOGO_SHARE);
          const x = Math.round((canvas.width - box) / 2);
          const pad = Math.round(box * 0.08);
          ctx.fillStyle = light;
          ctx.fillRect(x - pad, x - pad, box + pad * 2, box + pad * 2);
          const s = Math.min(box / logo.img.naturalWidth, box / logo.img.naturalHeight);
          const w = logo.img.naturalWidth * s;
          const h = logo.img.naturalHeight * s;
          ctx.drawImage(logo.img, x + (box - w) / 2, x + (box - h) / 2, w, h);
        }
        if (cancelled) return;
        setError(null);
        // Read our own output back: the strictest way to promise it scans
        setScans(decodeWithJsQr(canvas) === payload);
      } catch {
        if (!cancelled) setError(t('ctl.qr.tooLong'));
      }
    }, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, [payload, effectiveLevel, margin, size, dark, light, logo, t]);

  const baseName = 'qr-code';
  const downloadPng = async () => {
    if (!canvasRef.current || !payload) return;
    downloadBlob(await canvasToBlob(canvasRef.current, 'image/png'), `${baseName}.png`);
    setStatus(t('ctl.pdf.done', { name: `${baseName}.png` }));
  };
  const downloadSvg = async () => {
    if (!payload) return;
    let svg = await QRCode.toString(payload, { type: 'svg', errorCorrectionLevel: effectiveLevel, margin, width: size, color: { dark, light } });
    if (logo) {
      // Same placement as the PNG, with the logo embedded so the file stands alone
      const c = document.createElement('canvas');
      c.width = logo.img.naturalWidth;
      c.height = logo.img.naturalHeight;
      c.getContext('2d')!.drawImage(logo.img, 0, 0);
      const vb = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
      const n = vb ? Number(vb[1]) : size;
      const box = n * LOGO_SHARE;
      const pad = box * 0.08;
      const x = (n - box) / 2;
      const s = Math.min(box / c.width, box / c.height);
      const w = c.width * s;
      const h = c.height * s;
      svg = svg.replace(
        '</svg>',
        `<rect x="${x - pad}" y="${x - pad}" width="${box + pad * 2}" height="${box + pad * 2}" fill="${light}"/><image x="${x + (box - w) / 2}" y="${x + (box - h) / 2}" width="${w}" height="${h}" href="${c.toDataURL('image/png')}"/></svg>`
      );
    }
    downloadBlob(new Blob([svg], { type: 'image/svg+xml' }), `${baseName}.svg`);
    setStatus(t('ctl.pdf.done', { name: `${baseName}.svg` }));
  };

  const chooseLogo = async (file: File) => {
    try {
      const image = await loadImageFile(file);
      setLogo({ img: image.img, name: file.name });
    } catch {
      setError(t('ws.errDecode'));
    }
  };

  const input = (id: string, label: string, value: string, onChange: (v: string) => void, extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-[14px] text-ink">
        {label}
      </label>
      <input id={id} value={value} onChange={(e) => onChange(e.target.value)} className={field} {...extra} />
    </div>
  );

  const content = (
    <div className="space-y-3">
      {kind === 'link' && input('qr-link', t('ctl.qr.linkLabel'), link, setLink, { type: 'url', inputMode: 'url', placeholder: 'https://', autoComplete: 'url' })}
      {kind === 'text' && (
        <div className="space-y-1">
          <label htmlFor="qr-text" className="block text-[14px] text-ink">
            {t('ctl.qr.textLabel')}
          </label>
          <textarea id="qr-text" value={text} onChange={(e) => setText(e.target.value)} rows={4} className={`${field} py-2 resize-y`} />
        </div>
      )}
      {kind === 'wifi' && (
        <>
          {input('qr-ssid', t('ctl.qr.ssid'), wifi.ssid, (v) => setWifi({ ...wifi, ssid: v }), { autoComplete: 'off' })}
          {wifi.security !== 'nopass' && input('qr-pass', t('ctl.qr.password'), wifi.password, (v) => setWifi({ ...wifi, password: v }), { autoComplete: 'off' })}
          <Segmented
            label={t('ctl.qr.security')}
            value={wifi.security}
            options={[
              { value: 'WPA', label: 'WPA/WPA2/WPA3' },
              { value: 'WEP', label: 'WEP' },
              { value: 'nopass', label: t('ctl.qr.open') },
            ]}
            onChange={(v) => setWifi({ ...wifi, security: v })}
          />
          <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
            <input type="checkbox" checked={wifi.hidden} onChange={(e) => setWifi({ ...wifi, hidden: e.target.checked })} className="w-5 h-5" />
            {t('ctl.qr.hidden')}
          </label>
        </>
      )}
      {kind === 'email' && (
        <>
          {input('qr-to', t('ctl.qr.emailTo'), email.to, (v) => setEmail({ ...email, to: v }), { type: 'email', inputMode: 'email', autoComplete: 'email' })}
          {input('qr-subject', t('ctl.qr.subject'), email.subject, (v) => setEmail({ ...email, subject: v }))}
          <div className="space-y-1">
            <label htmlFor="qr-body" className="block text-[14px] text-ink">
              {t('ctl.qr.message')}
            </label>
            <textarea id="qr-body" value={email.body} onChange={(e) => setEmail({ ...email, body: e.target.value })} rows={3} className={`${field} py-2 resize-y`} />
          </div>
        </>
      )}
      {kind === 'phone' && input('qr-phone', t('ctl.qr.phone'), phone, setPhone, { type: 'tel', inputMode: 'tel', autoComplete: 'tel' })}
      {kind === 'contact' && (
        <>
          {input('qr-name', t('ctl.qr.name'), contact.name, (v) => setContact({ ...contact, name: v }), { autoComplete: 'name' })}
          {input('qr-cphone', t('ctl.qr.phone'), contact.phone, (v) => setContact({ ...contact, phone: v }), { type: 'tel', inputMode: 'tel' })}
          {input('qr-cemail', t('ctl.qr.email'), contact.email, (v) => setContact({ ...contact, email: v }), { type: 'email', inputMode: 'email' })}
          {input('qr-org', t('ctl.qr.org'), contact.org, (v) => setContact({ ...contact, org: v }))}
          {input('qr-url', t('ctl.qr.website'), contact.url, (v) => setContact({ ...contact, url: v }), { type: 'url', inputMode: 'url' })}
        </>
      )}
      {kind === 'whatsapp' && (
        <>
          {input('qr-wa-phone', t('ctl.qr.waPhone'), wa.phone, (v) => setWa({ ...wa, phone: v }), { type: 'tel', inputMode: 'tel', autoComplete: 'tel', placeholder: '+44 7700 900123' })}
          <div className="space-y-1">
            <label htmlFor="qr-wa-msg" className="block text-[14px] text-ink">
              {t('ctl.qr.waMessage')}
            </label>
            <textarea id="qr-wa-msg" value={wa.message} onChange={(e) => setWa({ ...wa, message: e.target.value })} rows={3} className={`${field} py-2 resize-y`} />
          </div>
          <p className="text-[13px] text-graphite">{t('ctl.qr.waHint')}</p>
        </>
      )}
      {kind === 'location' && (
        <>
          {input('qr-place', t('ctl.qr.coords'), place, setPlace, { placeholder: '48.8584, 2.2945', autoComplete: 'off' })}
          <p className={`text-[13px] ${place.trim() && !coords ? 'text-accent-red' : 'text-graphite'}`} aria-live="polite">
            {coords ? t('ctl.qr.coordsFound', { lat: coords.lat, lng: coords.lng }) : place.trim() ? t('ctl.qr.coordsBad') : t('ctl.qr.coordsHint')}
          </p>
        </>
      )}
      {kind === 'payment' && (
        <>
          <Segmented
            label={t('ctl.qr.payScheme')}
            value={scheme}
            options={[
              { value: 'upi', label: t('ctl.qr.payUpi') },
              { value: 'sepa', label: t('ctl.qr.paySepa') },
            ]}
            onChange={setScheme}
          />
          {scheme === 'upi' ? (
            <>
              {input('qr-upi', t('ctl.qr.upiId'), upi.vpa, (v) => setUpi({ ...upi, vpa: v }), { placeholder: 'name@bank', autoComplete: 'off', autoCapitalize: 'none' })}
              {upi.vpa.trim() && !validUpiId(upi.vpa) && <p className="text-[13px] text-accent-red">{t('ctl.qr.upiIdBad')}</p>}
              {input('qr-upi-name', t('ctl.qr.payName'), upi.name, (v) => setUpi({ ...upi, name: v }))}
              {input('qr-upi-amount', t('ctl.qr.amount'), upi.amount, (v) => setUpi({ ...upi, amount: v.replace(/[^\d.]/g, '') }), { inputMode: 'decimal', placeholder: '₹' })}
              {input('qr-upi-note', t('ctl.qr.note'), upi.note, (v) => setUpi({ ...upi, note: v }))}
            </>
          ) : (
            <>
              {input('qr-sepa-name', t('ctl.qr.payName'), sepa.name, (v) => setSepa({ ...sepa, name: v }))}
              {input('qr-iban', 'IBAN', sepa.iban, (v) => setSepa({ ...sepa, iban: v }), { autoComplete: 'off', autoCapitalize: 'characters', placeholder: 'DE89 3704 0044 0532 0130 00' })}
              {sepa.iban.replace(/\s/g, '').length >= 15 && !cleanIban(sepa.iban) && <p className="text-[13px] text-accent-red">{t('ctl.qr.ibanBad')}</p>}
              {input('qr-bic', t('ctl.qr.bic'), sepa.bic, (v) => setSepa({ ...sepa, bic: v }), { autoComplete: 'off', autoCapitalize: 'characters' })}
              {input('qr-sepa-amount', t('ctl.qr.amount'), sepa.amount, (v) => setSepa({ ...sepa, amount: v.replace(/[^\d.]/g, '') }), { inputMode: 'decimal', placeholder: '€' })}
              {input('qr-sepa-ref', t('ctl.qr.reference'), sepa.reference, (v) => setSepa({ ...sepa, reference: v }))}
            </>
          )}
          <p className="text-[13px] text-graphite">{t('ctl.qr.payHint')}</p>
        </>
      )}
    </div>
  );

  const panel = (
    <>
      <Segmented label={t('ctl.qr.kind')} value={kind} cols={3} options={KINDS.map((k) => ({ value: k, label: t(`ctl.qr.kind.${k}`) }))} onChange={setKind} />
      {content}
      <div className="pt-4 border-t border-ink space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <label className="space-y-1 text-[14px] text-ink">
            <span className="block">{t('ctl.qr.dark')}</span>
            <input type="color" value={dark} onChange={(e) => setDark(e.target.value)} className="w-full h-10 border border-ink rounded-md cursor-pointer bg-paper-bright" />
          </label>
          <label className="space-y-1 text-[14px] text-ink">
            <span className="block">{t('ctl.qr.light')}</span>
            <input type="color" value={light} onChange={(e) => setLight(e.target.value)} className="w-full h-10 border border-ink rounded-md cursor-pointer bg-paper-bright" />
          </label>
        </div>
        {logo ? (
          <div className="flex items-center gap-2">
            <span className="flex-1 min-w-0 truncate text-[14px] text-ink">{t('ctl.qr.logoChosen', { name: logo.name })}</span>
            <button type="button" onClick={() => setLogo(null)} className="btn-rule" aria-label={t('ctl.qr.logoRemove')}>
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => logoInputRef.current?.click()} className="btn-rule w-full">
            <ImagePlus className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.qr.addLogo')}</span>
          </button>
        )}
        <input
          ref={logoInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/svg+xml"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) chooseLogo(e.target.files[0]);
            e.target.value = '';
          }}
        />
        {logo ? (
          <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.qr.logoNote')}</p>
        ) : (
          <Segmented
            label={t('ctl.qr.correction')}
            value={level}
            options={(['L', 'M', 'Q', 'H'] as Level[]).map((l) => ({ value: l, label: l }))}
            onChange={setLevel}
          />
        )}
        <RangeField id="qr-size" label={t('ctl.qr.size')} value={size} min={256} max={2048} step={64} unit=" px" onChange={setSize} />
        <RangeField id="qr-margin" label={t('ctl.qr.margin')} value={margin} min={0} max={8} onChange={setMargin} />
      </div>
    </>
  );

  return (
    <>
      <PdfToolLayout
        icon={QrCode}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={downloadPng}
        actionDisabled={!payload || !!error}
        status={status}
        error={error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 sm:p-10 rounded-xl">
          {payload ? (
            <canvas ref={canvasRef} role="img" aria-label={t('ctl.qr.preview')} className="block w-full max-w-[min(100%,360px)] h-auto" style={{ imageRendering: 'pixelated' }} />
          ) : (
            <>
              <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
              <p className="text-[16px] text-graphite text-center max-w-xs">{t('ctl.qr.empty')}</p>
            </>
          )}
        </div>
        {payload && !error && (
          <div className="space-y-2">
            {scans === true && (
              <p className="flex items-center gap-2 text-[15px] text-accent-green">
                <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                {t('ctl.qr.scansOk')}
              </p>
            )}
            {scans === false && (
              <p className="flex items-start gap-2 text-[15px] text-accent-red">
                <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
                {t('ctl.qr.scansBad')}
              </p>
            )}
            {(contrast < 4 || inverted) && (
              <p className="flex items-start gap-2 text-[14px] text-accent-yellow">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                {inverted ? t('ctl.qr.inverted') : t('ctl.qr.lowContrast')}
              </p>
            )}
            {margin < 2 && <p className="text-[14px] text-accent-yellow">{t('ctl.qr.smallMargin')}</p>}
            <button type="button" onClick={downloadSvg} className="btn-rule">
              <FileCode2 className="w-4 h-4" aria-hidden="true" />
              <span>{t('ws.download', { format: 'SVG' })}</span>
            </button>
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}
