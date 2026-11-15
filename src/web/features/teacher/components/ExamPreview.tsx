/**
 * ExamPreview — the paper full screen, as it will print. "Download PDF" opens
 * the browser's print dialog, where the destination "Save as PDF" writes the
 * file; the stylesheet hides everything but the sheet and sets A4 pages with
 * page numbers. The answer key is opt-in and never in the default PDF.
 */
import * as React from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@bloomneo/uikit';
import { FileDown, X } from 'lucide-react';
import { ExamPaper } from './ExamPaper';
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

export function ExamPreview({ allowAnswers, onClose, ...paper }: Props) {
  const [answers, setAnswers] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('exam-printing');
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.title;
    document.title = paper.title;        // the PDF's default file name
    return () => {
      document.body.classList.remove('exam-printing');
      window.removeEventListener('keydown', onKey);
      document.title = prev;
    };
  }, [onClose, paper.title]);

  return createPortal(
    <div className="exam-overlay" role="dialog" aria-label="Paper preview">
      <div className="exam-bar">
        <Button size="sm" onClick={() => window.print()}><FileDown className="size-4" /> Download PDF</Button>
        {allowAnswers && (
          <label><input type="checkbox" checked={answers} onChange={(e) => setAnswers(e.target.checked)} /> Add marking scheme (teacher copy)</label>
        )}
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>In the print window choose “Save as PDF”.</span>
        <Button size="sm" variant="ghost" onClick={onClose} aria-label="Close preview" style={{ color: 'inherit' }}><X className="size-4" /></Button>
      </div>
      <div className="exam-scroll">
        <ExamPaper {...paper} includeAnswers={answers} />
      </div>
    </div>,
    document.body,
  );
}
