/**
 * ExamPreview — the paper as a real PDF, shown inline. The PDF is generated in
 * the browser (see lib/examPdf) and embedded, so what is on screen is the file
 * that downloads. The marking scheme is opt-in and regenerates the file.
 */
import * as React from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@bloomneo/uikit';
import { FileDown, FileText, X, Loader2, ExternalLink, AlertTriangle } from 'lucide-react';
import { ExamPaper } from './ExamPaper';
import { buildExamPdf } from '../lib/examPdf';
import { buildExamDocx } from '../lib/examDocx';
import type { LayoutSection, Question } from '../lib/types';

type Props = {
  title: string;
  eyebrow?: string;
  durationMins: number;
  questions: Question[];
  layout?: LayoutSection[] | null;
  /** The teacher may add the marking scheme to the PDF. */
  allowAnswers?: boolean;
  onClose: () => void;
};

const fileName = (t: string, ext = 'pdf') => `${t.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-') || 'paper'}.${ext}`;

export function ExamPreview({ allowAnswers, onClose, ...paper }: Props) {
  const [answers, setAnswers] = React.useState(false);
  const [url, setUrl] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState<[number, number] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const paperRef = React.useRef<HTMLDivElement>(null);
  const keyRef = React.useRef<HTMLDivElement>(null);
  const phone = React.useMemo(() => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent), []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Build (and rebuild when the marking scheme is switched) once the hidden sheets are laid out.
  React.useEffect(() => {
    let live = true;
    let made: string | null = null;
    setError(null); setProgress([0, 1]); setUrl(null);
    const t = setTimeout(async () => {
      try {
        const parts = [paperRef.current, answers ? keyRef.current : null].filter(Boolean) as HTMLElement[];
        const blob = await buildExamPdf(parts, (d, n) => live && setProgress([d, n]));
        if (!live) return;
        made = URL.createObjectURL(blob);
        setUrl(made); setProgress(null);
      } catch (e) {
        if (live) { setError(e instanceof Error ? e.message : 'Could not build the PDF.'); setProgress(null); }
      }
    }, 150);
    return () => { live = false; clearTimeout(t); if (made) URL.revokeObjectURL(made); };
  }, [answers, paper.title, paper.questions]);

  const download = () => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url; a.download = fileName(paper.title); a.click();
  };

  const [wordBusy, setWordBusy] = React.useState(false);
  const downloadWord = async () => {
    if (wordBusy) return;
    setWordBusy(true);
    try {
      const blob = await buildExamDocx({ ...paper, includeAnswers: answers });
      const u = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = u; a.download = fileName(paper.title, 'docx'); a.click();
      setTimeout(() => URL.revokeObjectURL(u), 10_000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not build the Word file.');
    } finally {
      setWordBusy(false);
    }
  };

  return createPortal(
    <div className="exam-overlay" role="dialog" aria-label="Paper PDF">
      <div className="exam-bar">
        <Button size="sm" onClick={download} disabled={!url}><FileDown className="size-4" /> Download PDF</Button>
        <Button size="sm" variant="secondary" onClick={downloadWord} disabled={wordBusy}>
          {wordBusy ? <Loader2 className="size-4 animate-spin" /> : <FileText className="size-4" />} Download Word
        </Button>
        {allowAnswers && (
          <label><input type="checkbox" checked={answers} onChange={(e) => setAnswers(e.target.checked)} /> Add marking scheme (teacher copy)</label>
        )}
        <span style={{ flex: 1 }} />
        {progress && <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Building page {Math.max(progress[0], 1)}{progress[1] > 1 ? ` of ${progress[1]}` : ''}…</span>}
        <Button size="sm" variant="ghost" onClick={onClose} aria-label="Close preview" style={{ color: 'inherit' }}><X className="size-4" /></Button>
      </div>

      <div className="exam-viewer">
        {error ? (
          <div className="exam-state"><AlertTriangle className="size-6" /><p>{error}</p></div>
        ) : !url ? (
          <div className="exam-state"><Loader2 className="size-6 animate-spin" /><p>Making your PDF…</p></div>
        ) : phone ? (
          <div className="exam-state">
            <p>Your PDF is ready.</p>
            <Button onClick={() => window.open(url, '_blank')}><ExternalLink className="size-4" /> Open PDF</Button>
            <Button variant="outline" onClick={download}><FileDown className="size-4" /> Download</Button>
          </div>
        ) : (
          <iframe title="Question paper PDF" src={`${url}#view=FitH`} className="exam-frame" />
        )}
      </div>

      {/* Hidden sheets the PDF is drawn from, at the printed width. */}
      <div className="exam-raster" aria-hidden>
        <div ref={paperRef}><ExamPaper {...paper} only="paper" /></div>
        {allowAnswers && <div ref={keyRef}><ExamPaper {...paper} only="key" includeAnswers /></div>}
      </div>
    </div>,
    document.body,
  );
}
