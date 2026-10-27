import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraOff, Copy, Check, ExternalLink, Download, ScanLine } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { useT } from '../../shared/I18nContext';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { downloadBlob } from '../../../lib/canvas/engine';
import { decodeQr } from '../../../lib/qr/decode';
import { decodePayload, type Decoded } from '../../../lib/qr/payload';

const ACCEPT = 'image/jpeg,image/png,image/webp,image/gif,image/bmp,image/heic,image/heif,.heic,.heif';

export function QrReaderWorkspace() {
  const t = useT();
  const [preview, setPreview] = useState<string | null>(null);
  const [results, setResults] = useState<string[] | null>(null);
  const [scanning, setScanning] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    setScanning(false);
  };
  useEffect(() => stopCamera, []);

  const readFile = async (file: File) => {
    stopCamera();
    setError(null);
    setBusy(true);
    try {
      const image = await loadImageFile(file);
      setPreview((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return image.url;
      });
      setResults(await decodeQr(image.img));
    } catch {
      setError(t('ws.errDecode'));
    } finally {
      setBusy(false);
    }
  };
  useImageIntake(readFile);

  const startCamera = async () => {
    setError(null);
    setResults(null);
    if (!navigator.mediaDevices?.getUserMedia) {
      setError(t('ctl.qrread.noCamera'));
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      streamRef.current = stream;
      setScanning(true);
    } catch (err: any) {
      setError(err?.name === 'NotAllowedError' ? t('ctl.qrread.cameraDenied') : t('ctl.qrread.noCamera'));
    }
  };

  // While the camera runs, look at a few frames a second until a code is found
  useEffect(() => {
    if (!scanning || !videoRef.current || !streamRef.current) return;
    const video = videoRef.current;
    video.srcObject = streamRef.current;
    video.play().catch(() => {});
    let stopped = false;
    const frame = document.createElement('canvas');
    const tick = async () => {
      if (stopped) return;
      if (video.readyState >= 2 && video.videoWidth) {
        frame.width = video.videoWidth;
        frame.height = video.videoHeight;
        frame.getContext('2d')!.drawImage(video, 0, 0);
        const found = await decodeQr(frame);
        if (found.length && !stopped) {
          setPreview((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return null;
          });
          setResults(found);
          stopCamera();
          return;
        }
      }
      window.setTimeout(tick, 250);
    };
    tick();
    return () => {
      stopped = true;
    };
  }, [scanning]);

  const view = scanning ? (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-xl border border-ink bg-process-key">
        <video ref={videoRef} playsInline muted className="block w-full max-h-[60vh] object-contain" aria-label={t('ctl.qrread.cameraView')} />
        <div className="absolute inset-[18%] border-2 border-paper-bright rounded-lg pointer-events-none" aria-hidden="true" />
      </div>
      <p role="status" className="text-[15px] text-ink">
        {t('ctl.qrread.looking')}
      </p>
      <button type="button" onClick={stopCamera} className="btn-rule">
        <CameraOff className="w-4 h-4" aria-hidden="true" />
        <span>{t('ctl.qrread.stopCamera')}</span>
      </button>
    </div>
  ) : (
    <div className="space-y-3">
      {preview ? (
        <div className="bg-paper-bright border border-ink flex items-center justify-center p-4 min-h-[200px] rounded-xl">
          <img src={preview} alt="" className="block max-h-[50vh] max-w-full object-contain" />
        </div>
      ) : (
        !results && <ProofDropZone onFiles={(files) => readFile(files[0])} accept={ACCEPT} title={t('ctl.qrread.dropTitle')} hint={t('ctl.qrread.dropHint')} />
      )}
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={startCamera} className="btn-rule">
          <Camera className="w-4 h-4" aria-hidden="true" />
          <span>{t('ctl.qrread.useCamera')}</span>
        </button>
        {(preview || results) && (
          <button type="button" onClick={() => inputRef.current?.click()} className="btn-rule">
            <ScanLine className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.qrread.another')}</span>
          </button>
        )}
      </div>
      <p className="text-[13px] text-graphite">{t('ctl.qrread.privacy')}</p>
    </div>
  );

  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) readFile(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <div className="min-w-0">{view}</div>
      <div className="min-w-0 space-y-3" aria-live="polite">
        {busy && <p className="text-[15px] text-ink">{t('ctl.qrread.reading')}</p>}
        {error && (
          <p role="alert" className="p-3 bg-accent-red-soft rounded-md border border-accent-red text-[15px] text-accent-red">
            {error}
          </p>
        )}
        {results && results.length === 0 && <p className="p-3 rounded-md border border-ink bg-paper-bright text-[15px] text-ink">{t('ctl.qrread.none')}</p>}
        {results?.map((raw, i) => <ResultCard key={i} raw={raw} />)}
      </div>
    </div>
  );
}

function ResultCard({ raw }: { raw: string }) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const d: Decoded = decodePayload(raw);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(d.kind === 'wifi' ? d.password || d.ssid : raw);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the text is selectable on the page
    }
  };
  const row = (label: string, value: string) =>
    value ? (
      <div className="flex justify-between gap-3 py-1.5">
        <dt className="text-graphite shrink-0">{label}</dt>
        <dd className="text-ink font-semibold text-right break-all">{value}</dd>
      </div>
    ) : null;

  return (
    <section className="border border-ink bg-paper-bright rounded-xl">
      <h2 className="slug px-4 py-2.5 border-b border-ink">{t(`ctl.qr.kind.${d.kind}`)}</h2>
      <div className="p-4 space-y-3 text-[15px]">
        {d.kind === 'link' && (
          <>
            <p className="font-semibold text-ink break-all select-all">{d.url}</p>
            <p className="text-[13px] text-graphite">{t('ctl.qrread.checkLink')}</p>
            <a href={d.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-rule w-full">
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.qrread.open')}</span>
            </a>
          </>
        )}
        {d.kind === 'wifi' && (
          <dl className="divide-y divide-pencil-soft">
            {row(t('ctl.qr.ssid'), d.ssid)}
            {row(t('ctl.qr.password'), d.password)}
            {row(t('ctl.qr.security'), d.security === 'nopass' ? t('ctl.qr.open') : d.security)}
          </dl>
        )}
        {d.kind === 'email' && (
          <>
            <dl className="divide-y divide-pencil-soft">
              {row(t('ctl.qr.emailTo'), d.to)}
              {row(t('ctl.qr.subject'), d.subject)}
            </dl>
            {d.body && <p className="whitespace-pre-wrap text-ink">{d.body}</p>}
            <a href={raw} className="btn-rule w-full">
              <span>{t('ctl.qrread.writeEmail')}</span>
            </a>
          </>
        )}
        {d.kind === 'phone' && (
          <>
            <p className="font-semibold text-ink">{d.phone}</p>
            <a href={`tel:${d.phone}`} className="btn-rule w-full">
              <span>{t('ctl.qrread.call')}</span>
            </a>
          </>
        )}
        {d.kind === 'contact' && (
          <>
            <dl className="divide-y divide-pencil-soft">
              {row(t('ctl.qr.name'), d.name)}
              {row(t('ctl.qr.phone'), d.phone)}
              {row(t('ctl.qr.email'), d.email)}
              {row(t('ctl.qr.org'), d.org)}
              {row(t('ctl.qr.website'), d.url)}
            </dl>
            <button type="button" onClick={() => downloadBlob(new Blob([raw], { type: 'text/vcard' }), `${(d.name || 'contact').replace(/[^\p{L}\p{N} _-]/gu, '')}.vcf`)} className="btn-rule w-full">
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.qrread.saveContact')}</span>
            </button>
          </>
        )}
        {d.kind === 'text' && <p className="whitespace-pre-wrap break-words text-ink select-all">{d.text}</p>}
        <button type="button" onClick={copy} className="btn-rule w-full">
          {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          <span>{copied ? t('ws.copiedShort') : d.kind === 'wifi' && d.password ? t('ctl.qrread.copyPassword') : t('ctl.qrread.copy')}</span>
        </button>
      </div>
    </section>
  );
}
