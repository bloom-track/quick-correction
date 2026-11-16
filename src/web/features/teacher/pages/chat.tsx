/**
 * Create — `/teacher/chat`.
 *
 * Make a paper by talking: "board paper on calculus and vectors, 80 marks".
 * Each reply is something to tap (chips, a chapter picker, a paper card), so a
 * teacher can get from "hi" to a saved paper without typing much. Everything
 * is real: the preview comes from the same generator as the paper form, and
 * Create saves the paper and opens it. Nothing is assigned to students here.
 */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert, AlertDescription, toast } from '@bloomneo/uikit';
import { ArrowUp, Check, Loader2, Shuffle, FileText, Timer, Layers, Zap, GraduationCap, ListChecks, SquarePen, AlertTriangle } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { api } from '@/shared/api';
import { LogoMark } from '@/shared/Logo';
import { CARD, PageHeader } from '@/shared/ui';
import { useLoad } from '../lib/useLoad';
import type { Preview, Subject } from '../lib/types';

type Draft = { patternId?: string; chapterIds?: string[]; marks?: number; variant: number };
type Msg =
  | { id: number; from: 'me'; text: string }
  | { id: number; from: 'ai'; kind: 'text'; text: string; chips?: { label: string; say: string }[] }
  | { id: number; from: 'ai'; kind: 'picker' }
  | { id: number; from: 'ai'; kind: 'paper'; preview: Preview; chapters: string; saved?: boolean }
  | { id: number; from: 'ai'; kind: 'error'; text: string };

type NewMsg = Msg extends infer M ? (M extends Msg ? Omit<M, 'id'> : never) : never;

let uid = 1;
const nid = () => uid++;

const STOP = new Set(['and', 'of', 'the', 'in', 'to']);
const words = (s: string) => s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w));

/** Which chapters does this sentence name? Full names win, then whole-word matches. */
function findChapters(text: string, chapters: Subject['chapters']): string[] {
  const t = text.toLowerCase();
  if (/\b(all chapters|full syllabus|whole syllabus|everything|entire)\b/.test(t)) return chapters.map((c) => c.id);
  // Broad words teachers use for a group of chapters.
  const group = (re: RegExp) => chapters.filter((c) => re.test(c.name)).map((c) => c.id);
  const groups = [
    ...(/\bcalculus\b/.test(t) ? group(/continuity|derivative|integral|differential/i) : []),
    ...(/\b(3-?d|three dimensional)\b/.test(t) ? group(/three dimensional/i) : []),
    ...(/\balgebra\b/.test(t) && !/vector/.test(t) ? group(/matrices|determinants|relations/i) : []),
  ];
  const full = chapters.filter((c) => t.includes(c.name.toLowerCase()));
  const keep = full.filter((c) => !full.some((o) => o !== c && o.name.toLowerCase().includes(c.name.toLowerCase())));
  if (keep.length) return [...new Set([...keep.map((c) => c.id), ...groups])];
  const tw = new Set(words(t).map((w) => w.slice(0, 5)));
  const fuzzy = chapters
    .filter((c) => {
      const cw = words(c.name);
      const hit = cw.filter((w) => tw.has(w.slice(0, 5))).length;
      return cw.length > 0 && hit / cw.length >= 0.5;
    })
    .map((c) => c.id);
  return [...new Set([...fuzzy, ...groups])];
}

function findPattern(text: string, subject: Subject): string | undefined {
  const t = text.toLowerCase();
  const by = (re: RegExp) => subject.patterns.find((p) => re.test(p.name))?.id;
  if (/\b(board|pre-?board|sample paper|full paper)\b/.test(t)) return by(/board/i) ?? subject.patterns[0].id;
  if (/\b(unit|class test|quick|short test|chapter test|practice test)\b/.test(t)) return by(/unit|test/i);
  return undefined;
}

export default function ChatPage() {
  const navigate = useNavigate();
  const setup = useLoad(async () => (await api.get<{ subjects: Subject[] }>('/api/tutor/setup')).subjects);
  const subject = React.useMemo(() => {
    const list = setup.data ?? [];
    let saved = '';
    try { saved = localStorage.getItem('qc.paper.subject') ?? ''; } catch { /* private mode */ }
    return list.find((s) => s.id === saved) ?? list[0];
  }, [setup.data]);

  const [msgs, setMsgs] = React.useState<Msg[]>([]);
  const [draft, setDraft] = React.useState<Draft>({ variant: 0 });
  const [text, setText] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [picked, setPicked] = React.useState<string[]>([]);
  const endRef = React.useRef<HTMLDivElement>(null);
  const boxRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [msgs, busy]);
  React.useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  }, [text]);

  const push = (m: NewMsg) => setMsgs((x) => [...x, { ...m, id: nid() } as Msg]);

  async function build(d: Draft) {
    if (!subject) return;
    const patternId = d.patternId ?? subject.patterns[0].id;
    const chapterIds = d.chapterIds?.length ? d.chapterIds : subject.chapters.map((c) => c.id);
    setBusy(true);
    try {
      const body = {
        patternId, variant: d.variant,
        chapterIds: chapterIds.length === subject.chapters.length ? [] : chapterIds,
        ...(d.marks ? { targetMarks: d.marks } : {}),
      };
      const r = await api.post<{ paper: Preview }>('/api/tutor/papers', { ...body, preview: true });
      const names = chapterIds.length === subject.chapters.length
        ? 'All chapters'
        : subject.chapters.filter((c) => chapterIds.includes(c.id)).map((c) => c.name).join(', ');
      push({ from: 'ai', kind: 'paper', preview: r.paper, chapters: names });
    } catch (err) {
      push({ from: 'ai', kind: 'error', text: err instanceof Error ? err.message : 'Could not build that paper.' });
    } finally {
      setBusy(false);
    }
  }

  async function create(m: Extract<Msg, { kind: 'paper' }>) {
    if (!subject || busy) return;
    setBusy(true);
    try {
      const patternId = draft.patternId ?? subject.patterns[0].id;
      const chapterIds = draft.chapterIds?.length ? draft.chapterIds : subject.chapters.map((c) => c.id);
      const r = await api.post<{ paper: { id: string } }>('/api/tutor/papers', {
        patternId, variant: draft.variant,
        chapterIds: chapterIds.length === subject.chapters.length ? [] : chapterIds,
        ...(draft.marks ? { targetMarks: draft.marks } : {}),
        title: m.preview.title,
      });
      toast.success('Paper created');
      navigate(`/teacher/papers/${r.paper.id}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not create the paper.');
      setBusy(false);
    }
  }

  async function send(raw: string) {
    const said = raw.trim();
    if (!said || busy || !subject) return;
    setText('');
    push({ from: 'me', text: said });
    const t = said.toLowerCase();

    if (/^(hi|hello|hey|help)\b/.test(t) && said.length < 20) {
      push({ from: 'ai', kind: 'text', text: 'Tell me what you need: the kind of paper, the chapters, and the marks if you care. Or tap one below.', chips: STARTERS });
      return;
    }
    if (/\b(pick|choose|select|which)\b.*\bchapters?\b|\bchapters?\b.*\b(pick|choose|select)\b/.test(t)) {
      setPicked(draft.chapterIds ?? []);
      push({ from: 'ai', kind: 'picker' });
      return;
    }

    const next: Draft = { ...draft };
    const shuffle = /\b(shuffle|another|different|new set|redo|regenerate)\b/.test(t);
    if (shuffle) next.variant = draft.variant + 1;
    const pat = findPattern(said, subject);
    if (pat) next.patternId = pat;
    const ch = findChapters(said, subject.chapters);
    if (ch.length) next.chapterIds = ch;
    const marks = t.match(/(\d{2,3})\s*marks?/);
    if (marks) next.marks = Number(marks[1]);
    if (/\b(shorter|quick)\b/.test(t) && !marks) next.marks = 30;

    const understood = shuffle || pat || ch.length || marks || /\b(shorter|quick)\b/.test(t) || /\b(paper|test|exam|make|create|generate)\b/.test(t);
    if (!understood) {
      push({ from: 'ai', kind: 'text', text: "I didn't catch that. Name a paper type (board paper, unit test), some chapters, or a number of marks.", chips: STARTERS });
      return;
    }
    setDraft(next);
    await build(next);
  }

  function start(kind: 'board' | 'unit' | 'pick') {
    if (kind === 'pick') { void send('Let me pick chapters'); return; }
    void send(kind === 'board' ? 'Make a full board paper on all chapters' : 'Make a quick unit test');
  }

  function reset() { setMsgs([]); setDraft({ variant: 0 }); setText(''); }

  if (setup.loading) return <div className="grid place-items-center py-20"><Loader2 className="size-5 animate-spin text-muted-foreground" aria-label="Loading" /></div>;
  if (setup.error || !subject) return <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertDescription>{setup.error ?? 'No subject has been set up yet.'}</AlertDescription></Alert>;

  const empty = msgs.length === 0;

  return (
    <>
      <SEO title="Create with chat" />
      <div className="mx-auto flex min-h-[calc(100dvh-13rem)] max-w-3xl flex-col lg:min-h-[calc(100dvh-9rem)]">
        {empty ? (
          <div className="flex flex-1 flex-col justify-center pb-6">
            <PageHeader eyebrow={subject.label} title="What paper do you need?" description="Describe it in a sentence. You can change anything before it is saved." />
            <div className="grid gap-3 sm:grid-cols-3">
              {([
                { k: 'board', icon: GraduationCap, t: 'Full board paper', d: 'Every section, board marks' },
                { k: 'unit', icon: Zap, t: 'Quick unit test', d: 'About 30 marks, one hour' },
                { k: 'pick', icon: ListChecks, t: 'Pick chapters', d: 'Choose what to cover' },
              ] as const).map(({ k, icon: I, t, d }) => (
                <button key={k} onClick={() => start(k)} className={`${CARD} flex cursor-pointer flex-col items-start gap-3 p-4 text-left transition hover:-translate-y-0.5`}>
                  <span className="grid size-10 place-items-center rounded-[14px] bg-primary/10 text-primary"><I className="size-[18px]" /></span>
                  <span><span className="block text-sm font-semibold">{t}</span><span className="text-xs text-muted-foreground">{d}</span></span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 space-y-5 pb-6">
            {msgs.map((m) => (
              <Row key={m.id} m={m} subject={subject} picked={picked} setPicked={setPicked}
                onChip={(s) => void send(s)}
                onUse={() => { const next = { ...draft, chapterIds: picked }; setDraft(next); push({ from: 'me', text: `Use ${picked.length || 'all'} chapter${picked.length === 1 ? '' : 's'}` }); void build(next); }}
                onShuffle={() => void send('Shuffle')}
                onCreate={(p) => void create(p)}
                busy={busy} />
            ))}
            {busy && <AiRow><div className="flex h-7 items-center gap-1" aria-label="Working">{[0, 150, 300].map((d) => <span key={d} className="size-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: `${d}ms` }} />)}</div></AiRow>}
            <div ref={endRef} className="scroll-mb-40" />
          </div>
        )}

        <form
          onSubmit={(e) => { e.preventDefault(); void send(text); }}
          className="sticky bottom-24 flex items-end gap-2 rounded-[1.75rem] bg-card p-2 pl-3 shadow-[0_12px_32px_-12px_rgba(15,23,51,0.3)] ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 lg:bottom-6"
        >
          {!empty && (
            <button type="button" onClick={reset} aria-label="New chat" className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full text-muted-foreground hover:bg-muted">
              <SquarePen className="size-5" />
            </button>
          )}
          <textarea
            ref={boxRef} rows={1} value={text} onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send(text); } }}
            placeholder="e.g. Board paper on calculus and vectors, 80 marks"
            aria-label="Describe the paper"
            className="max-h-[140px] min-h-10 flex-1 resize-none bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground"
          />
          <Button type="submit" size="icon" disabled={!text.trim() || busy} className="size-10 shrink-0 rounded-full" aria-label="Send">
            <ArrowUp className="size-5" />
          </Button>
        </form>
      </div>
    </>
  );
}

const STARTERS = [
  { label: 'Full board paper', say: 'Make a full board paper on all chapters' },
  { label: 'Quick unit test', say: 'Make a quick unit test' },
  { label: 'Pick chapters', say: 'Let me pick chapters' },
];

function AiRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <LogoMark className="mt-0.5 size-7 shrink-0" />
      <div className="min-w-0 flex-1 space-y-3">{children}</div>
    </div>
  );
}

function Row({ m, subject, picked, setPicked, onChip, onUse, onShuffle, onCreate, busy }: {
  m: Msg; subject: Subject; picked: string[]; setPicked: (p: string[]) => void;
  onChip: (s: string) => void; onUse: () => void; onShuffle: () => void;
  onCreate: (p: Extract<Msg, { kind: 'paper' }>) => void; busy: boolean;
}) {
  if (m.from === 'me') {
    return <div className="flex justify-end"><p className="max-w-[85%] rounded-[20px] rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground">{m.text}</p></div>;
  }
  if (m.kind === 'text') {
    return (
      <AiRow>
        <p className="text-sm leading-relaxed">{m.text}</p>
        {m.chips && (
          <div className="flex flex-wrap gap-2">
            {m.chips.map((c) => <button key={c.label} onClick={() => onChip(c.say)} disabled={busy} className="cursor-pointer rounded-full bg-card px-3 py-1.5 text-[13px] font-medium ring-1 ring-border transition hover:text-primary disabled:opacity-50">{c.label}</button>)}
          </div>
        )}
      </AiRow>
    );
  }
  if (m.kind === 'error') {
    return <AiRow><Alert variant="destructive"><AlertTriangle className="size-4" /><AlertDescription>{m.text}</AlertDescription></Alert></AiRow>;
  }
  if (m.kind === 'picker') {
    return (
      <AiRow>
        <p className="text-sm">Which chapters should it cover?</p>
        <div className={`${CARD} p-3`}>
          <div className="flex flex-wrap gap-2">
            {subject.chapters.map((c) => {
              const on = picked.includes(c.id);
              return (
                <button key={c.id} onClick={() => setPicked(on ? picked.filter((x) => x !== c.id) : [...picked, c.id])}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium ring-1 transition ${on ? 'bg-primary/10 text-primary ring-primary/40' : 'bg-background ring-border hover:text-primary'}`}>
                  {on && <Check className="size-3.5" />}{c.name}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Button size="sm" onClick={onUse} disabled={busy}>Use {picked.length || 'all'} chapter{picked.length === 1 ? '' : 's'}</Button>
            <Button size="sm" variant="ghost" onClick={() => setPicked(subject.chapters.map((c) => c.id))}>Select all</Button>
          </div>
        </div>
      </AiRow>
    );
  }
  const p = m.preview;
  return (
    <AiRow>
      <p className="text-sm">Here is a paper for you. Shuffle it for a different set of questions, or tell me what to change.</p>
      <div className={`${CARD} p-4`}>
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-[14px] bg-primary/10 text-primary"><FileText className="size-[18px]" /></span>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-bold tracking-tight">{p.title}</h3>
            <p className="mt-0.5 flex flex-wrap gap-x-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Layers className="size-3.5" />{p.questions.length} questions · {p.marks} marks</span>
              <span className="inline-flex items-center gap-1"><Timer className="size-3.5" />{p.durationMins} min</span>
            </p>
            <p className="mt-1 truncate text-xs text-muted-foreground">{m.chapters}</p>
          </div>
        </div>
        <ul className="mt-3 divide-y divide-border/70 text-sm">
          {p.layout.map((s) => (
            <li key={s.title} className="flex items-center justify-between gap-3 py-1.5">
              <span className="min-w-0 truncate">{s.title}</span>
              <span className="shrink-0 text-xs text-muted-foreground">{s.questionIds.length} × {s.marksEach} marks</span>
            </li>
          ))}
        </ul>
        {p.shortBy > 0 && (
          <p className="mt-3 rounded-xl bg-warning/15 px-3 py-2 text-xs">The question bank is {p.missingQuestions} question{p.missingQuestions === 1 ? '' : 's'} short for these chapters, so the paper has {p.shortBy} fewer marks than planned.</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => onCreate(m)} disabled={busy}><Check className="size-4" /> Create paper</Button>
          <Button variant="outline" onClick={onShuffle} disabled={busy}><Shuffle className="size-4" /> Shuffle</Button>
          <Button variant="ghost" onClick={() => onChip('Let me pick chapters')} disabled={busy}>Change chapters</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {['Make it shorter', 'Make it 80 marks'].map((s) => <button key={s} onClick={() => onChip(s)} disabled={busy} className="cursor-pointer rounded-full bg-card px-3 py-1.5 text-[13px] font-medium ring-1 ring-border transition hover:text-primary disabled:opacity-50">{s}</button>)}
      </div>
    </AiRow>
  );
}
