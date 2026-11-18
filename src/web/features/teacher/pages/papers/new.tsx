/**
 * New paper — `/teacher/papers/new`.
 *
 * Pick a pattern and chapters; the page asks the generator for a preview as
 * you change things, so the marks, sections and any shortfall in the question
 * bank are visible before anything is saved. Shuffle tries another selection.
 */
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Alert, AlertDescription, AlertTitle, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, toast } from '@bloomneo/uikit';
import { Shuffle, Loader2, AlertTriangle, Check, ArrowLeft, FileText, ClipboardList, Sparkles } from 'lucide-react';
import { SEO } from '@/shared/SEO';
import { api } from '@/shared/api';
import { CARD, IconChip, PageHeader } from '@/shared/ui';
import { useLoad } from '../../lib/useLoad';
import type { Subject, Preview } from '../../lib/types';

function Step({ n, title, hint, right, children }: { n: number; title: string; hint?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className={`${CARD} p-5 md:p-6`}>
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">{n}</span>
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-bold leading-7 tracking-tight">{title}</h2>
          {hint && <p className="text-sm text-muted-foreground">{hint}</p>}
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}

export default function NewPaperPage() {
  const navigate = useNavigate();
  const setup = useLoad(async () => (await api.get<{ subjects: Subject[] }>('/api/tutor/setup')).subjects);
  // Any subject the admin has set up (patterns and chapters); remembered between visits.
  const [subjectId, setSubjectId] = React.useState(() => { try { return localStorage.getItem('qc.paper.subject') ?? ''; } catch { return ''; } });
  const subject = setup.data?.find((x) => x.id === subjectId) ?? setup.data?.[0];

  const [patternId, setPatternId] = React.useState('');
  const [chapterIds, setChapterIds] = React.useState<string[]>([]);
  const [marks, setMarks] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [variant, setVariant] = React.useState(0);
  const [preview, setPreview] = React.useState<Preview | null>(null);
  const [previewError, setPreviewError] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  // Start with the first pattern and every chapter, as most tests are; again whenever the subject changes.
  React.useEffect(() => {
    if (subject && !subject.patterns.some((p) => p.id === patternId)) { setPatternId(subject.patterns[0].id); setChapterIds(subject.chapters.map((c) => c.id)); }
  }, [subject, patternId]);

  function pickSubject(id: string) {
    setSubjectId(id);
    try { localStorage.setItem('qc.paper.subject', id); } catch { /* private mode: not remembered */ }
  }

  const body = React.useMemo(() => ({
    patternId, chapterIds: chapterIds.length === subject?.chapters.length ? [] : chapterIds, variant,
    ...(Number(marks) > 0 ? { targetMarks: Number(marks) } : {}),
  }), [patternId, chapterIds, variant, marks, subject]);

  // Ask for a preview a moment after the last change.
  React.useEffect(() => {
    if (!patternId || chapterIds.length === 0) { setPreview(null); return; }
    let live = true;
    setBusy(true);
    const t = setTimeout(async () => {
      try {
        const r = await api.post<{ paper: Preview }>('/api/tutor/papers', { ...body, preview: true });
        if (live) { setPreview(r.paper); setPreviewError(null); }
      } catch (err) {
        if (live) { setPreview(null); setPreviewError(err instanceof Error ? err.message : 'Could not build a preview.'); }
      } finally {
        if (live) setBusy(false);
      }
    }, 350);
    return () => { live = false; clearTimeout(t); };
  }, [body, patternId, chapterIds.length]);

  async function create() {
    if (saving || !preview) return;
    setSaving(true);
    try {
      const r = await api.post<{ paper: { id: string } }>('/api/tutor/papers', { ...body, ...(title.trim() ? { title: title.trim() } : {}) });
      toast.success('Paper created');
      navigate(`/teacher/papers/${r.paper.id}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not create the paper.');
      setSaving(false);
    }
  }

  if (setup.loading) return <div className="grid place-items-center py-20"><Loader2 className="size-5 animate-spin text-muted-foreground" aria-label="Loading" /></div>;
  if (setup.error || !subject) {
    return <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertTitle>Cannot make papers yet</AlertTitle><AlertDescription>{setup.error ?? 'No subject with paper patterns and chapters is set up. Ask the admin to add one.'}</AlertDescription></Alert>;
  }

  const allChapters = chapterIds.length === subject.chapters.length;
  const pattern = subject.patterns.find((p) => p.id === patternId);
  const bySection = preview ? preview.layout.map((s) => ({ title: s.title, n: s.questionIds.length, marks: s.questionIds.length * s.marksEach })) : [];
  const quickMarks = [...new Set([20, 30, 40, 50, 80].filter((m) => m !== pattern?.totalMarks))].slice(0, 4);

  return (
    <>
      <SEO title="New paper" />
      <Link to="/teacher/papers" className="mb-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Papers</Link>
      <PageHeader
        eyebrow="New paper"
        title="Set up a paper"
        description={(setup.data?.length ?? 0) > 1 ? undefined : subject.label}
        actions={<Button asChild variant="outline"><Link to="/teacher/chat"><Sparkles className="size-4" /> Describe it in chat instead</Link></Button>}
      />
      {(setup.data?.length ?? 0) > 1 && (
        <label className="-mt-4 mb-6 block max-w-sm space-y-1">
          <span className="text-xs font-semibold text-muted-foreground">Subject</span>
          <Select value={subject.id} onValueChange={pickSubject}>
            <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>{setup.data!.map((x) => <SelectItem key={x.id} value={x.id}>{x.label}</SelectItem>)}</SelectContent>
          </Select>
        </label>
      )}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-5">
          <Step n={1} title="What kind of paper?" hint="This sets the sections, marks and time.">
            <div role="radiogroup" aria-label="Paper pattern" className="grid gap-3 sm:grid-cols-2">
              {subject.patterns.map((p) => {
                const on = p.id === patternId;
                return (
                  <button key={p.id} type="button" role="radio" aria-checked={on} onClick={() => setPatternId(p.id)}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl p-4 text-left ring-1 transition ${on ? 'bg-primary/5 ring-2 ring-primary' : 'ring-border hover:bg-muted/50'}`}>
                    <IconChip icon={p.sections.reduce((n, x) => n + x.count, 0) > 20 ? FileText : ClipboardList} tone={on ? 'blue' : 'purple'} />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2 font-bold">{p.name}{on && <Check className="size-4 text-primary" />}</span>
                      <span className="mt-0.5 block text-xs font-medium text-muted-foreground">{p.totalMarks} marks · {p.durationMins} min · {p.sections.reduce((n, x) => n + x.count, 0)} questions</span>
                      {p.description && <span className="mt-1 block text-xs text-muted-foreground">{p.description}</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          </Step>

          <Step
            n={2}
            title="Which chapters?"
            hint={allChapters ? 'All chapters are included. Tap to leave some out.' : `${chapterIds.length} of ${subject.chapters.length} chosen.`}
            right={<Button variant="ghost" size="sm" className="shrink-0" onClick={() => setChapterIds(allChapters ? [] : subject.chapters.map((c) => c.id))}>{allChapters ? 'Clear all' : 'Select all'}</Button>}
          >
            <div className="flex flex-wrap gap-2">
              {subject.chapters.map((c) => {
                const on = chapterIds.includes(c.id);
                return (
                  <button key={c.id} type="button" aria-pressed={on}
                    onClick={() => setChapterIds(on ? chapterIds.filter((x) => x !== c.id) : [...chapterIds, c.id])}
                    className={`inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full px-3.5 text-sm font-medium ring-1 transition ${on ? 'bg-primary/10 text-primary ring-primary/40' : 'text-muted-foreground ring-border hover:bg-muted/60 hover:text-foreground'}`}>
                    {on && <Check className="size-3.5" />}{c.name}
                  </button>
                );
              })}
            </div>
            {chapterIds.length === 0 && <p className="mt-3 text-sm text-destructive">Pick at least one chapter to see a preview.</p>}
          </Step>

          <Step n={3} title="Details" hint="Both are optional.">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="paper-marks" className="text-sm font-semibold">Total marks</label>
                <div className="flex flex-wrap gap-1.5">
                  {[{ v: '', l: `Standard${pattern ? ` (${pattern.totalMarks})` : ''}` }, ...quickMarks.map((m) => ({ v: String(m), l: String(m) }))].map((o) => (
                    <button key={o.l} type="button" aria-pressed={marks === o.v} onClick={() => setMarks(o.v)}
                      className={`h-8 cursor-pointer rounded-full px-3 text-xs font-semibold ring-1 transition ${marks === o.v ? 'bg-primary/10 text-primary ring-primary/40' : 'text-muted-foreground ring-border hover:bg-muted/60'}`}>{o.l}</button>
                  ))}
                </div>
                <Input id="paper-marks" type="number" min={1} max={200} inputMode="numeric" value={marks} onChange={(e) => setMarks(e.target.value)} placeholder="Or type your own" />
              </div>
              <div className="space-y-2">
                <label htmlFor="paper-title" className="text-sm font-semibold">Title</label>
                <Input id="paper-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={preview?.title ?? 'Unit test'} />
                <p className="text-xs text-muted-foreground">Leave blank and we'll name it from the pattern and chapters.</p>
              </div>
            </div>
          </Step>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className={`${CARD} p-5`}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Your paper</h2>
              {busy && <Loader2 className="size-4 animate-spin text-muted-foreground" aria-label="Updating" />}
            </div>
            {chapterIds.length === 0 ? (
              <p className="text-sm text-muted-foreground">Pick at least one chapter and your paper shows up here.</p>
            ) : previewError ? (
              <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertDescription>{previewError}</AlertDescription></Alert>
            ) : !preview ? (
              <p className="text-sm text-muted-foreground">Building…</p>
            ) : (
              <>
                <p className="text-lg font-extrabold leading-tight tracking-tight">{title.trim() || preview.title}</p>
                <div className="my-4 grid grid-cols-3 gap-2 text-center">
                  {[[preview.marks, 'marks'], [preview.questions.length, 'questions'], [preview.durationMins, 'minutes']].map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-muted/60 py-2.5"><div className="text-xl font-extrabold tabular-nums">{v}</div><div className="text-[11px] font-medium text-muted-foreground">{l}</div></div>
                  ))}
                </div>
                <ul className="mb-4 divide-y divide-border/70 text-sm">
                  {bySection.map((x) => (
                    <li key={x.title} className="flex justify-between gap-2 py-1.5"><span className="truncate">{x.title}</span><span className="shrink-0 text-muted-foreground">{x.n} Q · {x.marks} m</span></li>
                  ))}
                </ul>
                {(preview.shortBy > 0 || preview.missingQuestions > 0) && (
                  <Alert className="mb-4 border-amber-500/40 bg-amber-500/10">
                    <AlertTriangle className="size-4" />
                    <AlertDescription className="text-xs">
                      {preview.shortBy > 0
                        ? `The question bank has ${preview.shortBy} marks fewer than the ${marks} you asked for on these chapters.`
                        : `The question bank is short by ${preview.missingQuestions} question${preview.missingQuestions === 1 ? '' : 's'} for this pattern on these chapters. Add chapters or lower the marks.`}
                    </AlertDescription>
                  </Alert>
                )}
                <Button className="h-11 w-full text-base font-semibold" onClick={create} disabled={saving || busy}>{saving && <Loader2 className="size-4 animate-spin" />} Create paper</Button>
                <Button variant="ghost" className="mt-2 w-full" onClick={() => setVariant((v) => v + 1)} disabled={busy}><Shuffle className="size-4" /> Try different questions</Button>
              </>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
