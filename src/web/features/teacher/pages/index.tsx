/**
 * Teacher home — `/teacher`. What needs doing, and the shortest path to a new paper.
 */
import { Link } from 'react-router-dom';
import { Button, Alert, AlertDescription } from '@bloomneo/uikit';
import { Plus, FileText, Users, ClipboardCheck, ChevronRight, AlertTriangle, Loader2, FlaskConical, Sparkles } from 'lucide-react';
import { CARD, PageHeader, Stat, IconChip } from '@/shared/ui';
import { SEO } from '@/shared/SEO';
import { api } from '@/shared/api';
import { useAuth } from '@/features/auth/hooks';
import { useLoad, fmtDate } from '../lib/useLoad';
import type { PaperRow, Student, ReviewRow } from '../lib/types';

export default function TeacherHome() {
  const { user } = useAuth();
  const { data, error, loading } = useLoad(async () => {
    const [papers, students, review] = await Promise.all([
      api.get<{ papers: PaperRow[] }>('/api/tutor/papers'),
      api.get<{ students: Student[] } | Student[]>('/api/tutor/students'),
      api.get<{ submissions: ReviewRow[] }>('/api/tutor/review'),
    ]);
    return { papers: papers.papers, students: Array.isArray(students) ? students : students.students, review: review.submissions };
  });

  const first = (user?.name || '').split(' ')[0];
  if (loading) return <div className="grid place-items-center py-20"><Loader2 className="size-5 animate-spin text-muted-foreground" aria-label="Loading" /></div>;
  if (error || !data) return <Alert variant="destructive"><AlertTriangle className="size-4" /><AlertDescription>{error ?? 'Could not load your dashboard.'}</AlertDescription></Alert>;

  const { papers, students, review } = data;
  const tile = `${CARD} block p-3.5 transition hover:-translate-y-0.5 sm:p-4`;
  const hour = new Date().getHours();
  const hello = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <>
      <SEO title="Teacher" />
      <PageHeader
        eyebrow={`${hello} · ${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}`}
        title={first ? `Hello, ${first}` : 'Hello'}
        description="Make a paper, try it out, and check the marks."
        actions={<>
          <Button asChild><Link to="/teacher/chat"><Sparkles className="size-4" /> Create with chat</Link></Button>
          <Button asChild variant="outline"><Link to="/teacher/papers/new"><Plus className="size-4" /> New paper</Link></Button>
        </>}
      />

      <div className="mb-6 grid grid-cols-2 gap-2.5 sm:gap-3 md:mb-8 md:grid-cols-3">
        <Link to="/teacher/papers" className={tile}><Stat tone="purple" icon={FileText} label="Papers" value={papers.length} sub="made so far" /></Link>
        <Link to="/teacher/students" className={tile}><Stat tone="green" icon={Users} label="Students" value={students.length} sub="in your classes" /></Link>
        <Link to="/teacher/review" className={`${tile} col-span-2 md:col-span-1`}><Stat tone="amber" icon={ClipboardCheck} label="To review" value={review.length} sub={review.length ? 'marked, waiting for your check' : 'nothing waiting'} /></Link>
      </div>

      <div className={`${CARD} mb-6 flex items-start gap-3 p-4 md:mb-8`}>
        <IconChip icon={FlaskConical} />
        <div className="text-sm">
          <p className="font-semibold">Try a paper yourself</p>
          <p className="mt-1 text-muted-foreground">
            Create a paper, open it and press <strong>Test it</strong>. It is set for a practice student, you add a photo of an
            answer page, and the marks come back for you to check. No parent account needed.
          </p>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold">Recent papers</h2>
        {papers.length > 0 && <Link to="/teacher/papers" className="text-sm text-primary hover:underline">All papers</Link>}
      </div>
      {papers.length === 0 ? (
        <p className="rounded-[20px] border border-dashed border-border p-8 text-center text-sm text-muted-foreground">No papers yet. Make your first one.</p>
      ) : (
        <ul className={`${CARD} divide-y divide-border/70 overflow-hidden`}>
          {papers.slice(0, 5).map((p) => (
            <li key={p.id}>
              <Link to={`/teacher/papers/${p.id}`} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50">
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{p.title}</span>
                  <span className="text-xs text-muted-foreground">{p.questions} questions · {p.marks} marks · {fmtDate(p.createdAt)}</span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
