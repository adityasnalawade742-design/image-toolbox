import React, { useState } from 'react';
import { Scaling } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { resizePages, type PageSizeName, type ResizeOptions } from '../../../lib/pdf/resizePages';
import { OutputPages, useOutputPreview } from './OutputPreview';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

export function ResizePagesWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [size, setSize] = useState<PageSizeName>('a4');
  const [orientation, setOrientation] = useState<ResizeOptions['orientation']>('auto');
  const [mode, setMode] = useState<ResizeOptions['mode']>('fit');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);
  const { out, building } = useOutputPreview(async () => (pdf.bytes ? resizePages(pdf.bytes, { size, orientation, mode }) : null), [pdf.bytes, size, orientation, mode], (err) => setError(editError(err)));

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = () => {
    if (!out) return;
    const name = pdfName(pdf.file?.name, size);
    savePdf(out.bytes, name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const panel = (
    <>
      <Segmented
        label={t('ctl.impose.paper')}
        value={size}
        cols={3}
        onChange={setSize}
        options={[
          { value: 'a4', label: 'A4' },
          { value: 'a3', label: 'A3' },
          { value: 'a5', label: 'A5' },
          { value: 'letter', label: 'Letter' },
          { value: 'legal', label: 'Legal' },
          { value: 'tabloid', label: 'Tabloid' },
        ]}
      />
      <Segmented
        label={t('ctl.sheet.orientation')}
        value={orientation}
        cols={3}
        onChange={setOrientation}
        options={[
          { value: 'auto', label: t('ctl.resize.asPages') },
          { value: 'portrait', label: t('ctl.sheet.portrait') },
          { value: 'landscape', label: t('ctl.sheet.landscape') },
        ]}
      />
      <Segmented
        label={t('ctl.resize.content')}
        value={mode}
        onChange={setMode}
        options={[
          { value: 'fit', label: t('ctl.resize.fit') },
          { value: 'keep', label: t('ctl.resize.keep') },
        ]}
      />
      <p className="text-[13px] text-graphite leading-relaxed">{t(mode === 'fit' ? 'ctl.resize.fitNote' : 'ctl.resize.keepNote')}</p>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={Scaling}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!out || building}
        busy={building}
        status={building ? t('ctl.pdf.working') : status}
        error={error}
      >
        <OutputPages out={out} building={building} page={page} onPage={setPage} />
      </PdfToolLayout>
    </>
  );
}
