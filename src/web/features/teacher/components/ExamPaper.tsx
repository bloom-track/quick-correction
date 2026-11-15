/**
 * ExamPaper — the question paper laid out like a printed board paper: header
 * with time and marks, numbered general instructions, a banner per section,
 * marks down the right margin, options in columns and a centred OR. It is a
 * fixed A4 sheet in black on white, so the PDF (the browser's Save as PDF)
 * matches the screen. With `includeAnswers` a marking scheme follows on new
 * pages. PaperSheet stays the on-screen working view.
 */
import { MathText } from '@/shared/MathText';
import type { LayoutSection, Question } from '../lib/types';
import './exam-paper.css';

type Q = Omit<Question, 'section' | 'alternate'>;

type Props = {
  title: string;
  /** e.g. "Class 12 · Mathematics" */
  eyebrow?: string;
  durationMins: number;
  questions: Question[];
  layout?: LayoutSection[] | null;
  includeAnswers?: boolean;
};

/** "180" → "3 hours", "90" → "1 hour 30 minutes", "45" → "45 minutes". */
function duration(mins: number) {
  const h = Math.floor(mins / 60), m = mins % 60;
  const hours = h ? `${h} hour${h === 1 ? '' : 's'}` : '';
  const minutes = m ? `${m} minute${m === 1 ? '' : 's'}` : '';
  return [hours, minutes].filter(Boolean).join(' ');
}

/** Rough printed width of an option, ignoring LaTeX commands and braces. */
function width(s: string) {
  return s.replace(/\\[a-zA-Z]+/g, 'x').replace(/[${}\\^_]/g, '').length;
}
function columns(options: (string | number)[]) {
  const longest = Math.max(...options.map((o) => width(String(o))));
  return longest <= 14 ? 'c4' : longest <= 46 ? 'c2' : 'c1';
}

/** Part labels may or may not carry their own brackets. */
const label = (l: string) => `(${l.replace(/^\(|\)$/g, '')})`;

function Marks({ n }: { n: number }) {
  return <span className="exam-marks">[{n}]</span>;
}

function Body({ q, number }: { q: Q; number?: number }) {
  const cols = q.options ? columns(q.options) : 'c2';
  return (
    <>
      <div className="exam-row">
        <span className="exam-qn">{number != null ? `${number}.` : ''}</span>
        <p className="exam-text"><MathText text={q.text} /></p>
        <Marks n={q.marks} />
      </div>
      {q.figureSvg && (
        <img className="exam-fig exam-indent" alt={q.figureAlt || 'Figure'} src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(q.figureSvg)}`} />
      )}
      {q.options && (
        <ol className={`exam-opts exam-indent ${cols}`}>
          {q.options.map((o, i) => (
            <li key={i}><span>({String.fromCharCode(65 + i)})</span><span><MathText text={String(o)} /></span></li>
          ))}
        </ol>
      )}
      {q.parts && (
        <ol className="exam-parts">
          {q.parts.map((p) => (
            <li key={p.label}>
              <span>{label(p.label)}</span>
              <span className="exam-text"><MathText text={p.text} /></span>
              <Marks n={p.marks} />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

function Answer({ q }: { q: Q }) {
  return (
    <div className="exam-key-a">
      {q.answer && <p className="exam-text"><MathText text={q.answer} /></p>}
      {q.parts?.filter((p) => p.answer).map((p) => (
        <p key={p.label} className="exam-text"><b>{label(p.label)}</b> <MathText text={p.answer!} /></p>
      ))}
      {!!q.markingSteps?.length && (
        <ul className="exam-steps">
          {q.markingSteps.map((m, i) => <li key={i}><span><MathText text={m.step} /></span><span>{m.marks}</span></li>)}
        </ul>
      )}
    </div>
  );
}

export function ExamPaper({ title, eyebrow, durationMins, questions, layout, includeAnswers }: Props) {
  const total = questions.reduce((n, q) => n + q.marks, 0);
  const order: string[] = [];
  for (const q of questions) if (!order.includes(q.section)) order.push(q.section);
  // Number questions in the order they print.
  const sections = order.map((s) => ({ title: s, qs: questions.filter((q) => q.section === s) }));
  let n = 0;
  const numbered = sections.map((s) => ({ ...s, items: s.qs.map((q) => ({ q, n: ++n })) }));

  const choice = numbered.filter((s) => s.qs.some((q) => q.alternate)).map((s) => s.title.replace(/^Section\s+/i, ''));
  const instructions = [
    `This question paper contains ${questions.length} questions. All questions are compulsory unless an internal choice is given.`,
    `The paper has ${sections.length} section${sections.length === 1 ? '' : 's'}, as shown below.`,
    ...(choice.length ? [`There is an internal choice (OR) in Section${choice.length > 1 ? 's' : ''} ${choice.join(', ')}. Attempt only one of the two alternatives.`] : []),
    'The marks for each question or part are shown in brackets at the right of the page.',
    'Show all the steps of your working. Use of a calculator is not permitted.',
  ];

  return (
    <article className="exam-sheet">
      <header className="exam-head">
        {eyebrow && <p className="exam-eyebrow">{eyebrow}</p>}
        <h1 className="exam-title">{title}</h1>
        <div className="exam-meta">
          <span>Time allowed: {duration(durationMins)}</span>
          <span>Maximum marks: {total}</span>
        </div>
        <div className="exam-candidate"><span>Name</span><span>Roll no.</span><span>Date</span></div>
      </header>

      <section className="exam-instr">
        <h3>General instructions</h3>
        <ol>{instructions.map((t, i) => <li key={i}>{t}</li>)}</ol>
        <table>
          <thead><tr><th>Section</th><th>Questions</th><th>Marks each</th><th>Marks</th></tr></thead>
          <tbody>
            {numbered.map((s) => {
              const each = [...new Set(s.qs.map((q) => q.marks))];
              return (
                <tr key={s.title}>
                  <td>{s.title.replace(/^Section\s+/i, '')}</td>
                  <td>{s.qs.length}</td>
                  <td>{each.join(' / ')}</td>
                  <td>{s.qs.reduce((x, q) => x + q.marks, 0)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {numbered.map((s) => {
        const note = layout?.find((l) => l.title === s.title)?.note;
        return (
          <section key={s.title} className="exam-section">
            <div className="exam-section-head">
              <h3>{s.title.replace(/^Section\s+/i, 'Section – ')}</h3>
              <p>{note ? `${note} ` : ''}({s.qs.length} question{s.qs.length === 1 ? '' : 's'}, {s.qs.reduce((x, q) => x + q.marks, 0)} marks)</p>
            </div>
            <ol className="exam-qs">
              {s.items.map(({ q, n: num }) => (
                <li key={q.id} className={q.marks >= 4 ? 'exam-q-long' : undefined}>
                  <Body q={q} number={num} />
                  {q.alternate && (<><div className="exam-or">OR</div><Body q={q.alternate} /></>)}
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <p className="exam-end">— End of question paper —</p>

      {includeAnswers && (
        <section className="exam-key">
          <div className="exam-section-head">
            <h3>Marking scheme</h3>
            <p>For the teacher. Accept any other correct method and award marks accordingly.</p>
          </div>
          <ol className="exam-qs">
            {numbered.flatMap((s) => s.items).map(({ q, n: num }) => (
              <li key={q.id}>
                <div className="exam-row">
                  <span className="exam-qn">{num}.</span>
                  <div>
                    <Answer q={q} />
                    {q.alternate && (<><div className="exam-or">OR</div><Answer q={q.alternate} /></>)}
                  </div>
                  <Marks n={q.marks} />
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
}
