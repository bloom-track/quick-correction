/**
 * Applies the corrections from the question-by-question review
 * (question-review.data.json): missing answers and marking steps, case-study
 * parts, fixed working, reworded copies, and the review status and note
 * (flagged for a person, or rejected as a duplicate).
 *
 * Each correction finds its question by id, or by the question's original text
 * when the id differs (AI-imported questions get new ids on a fresh database).
 * A question whose text was edited since is left alone. Safe to re-run.
 * Run: npm run db:seed:review   (after the other question seeds)
 */
import 'dotenv/config';
import { readFileSync } from 'node:fs';
import { databaseClass } from '@bloomneo/appkit/database';

type Correction = {
  // 'redrawn': the figure was fixed after the review flagged it; it goes back to draft for approval.
  id: string; originalText: string; verdict: 'fix' | 'flag' | 'duplicate' | 'redrawn';
  reviewStatus: string; reviewNote: string | null; changes: Record<string, unknown>;
};
const data = JSON.parse(readFileSync(new URL('./question-review.data.json', import.meta.url), 'utf8')) as {
  corrections: Correction[]; textbookRefs: { id: string; originalText: string; textbookRef: string }[];
};

async function main() {
  const db = await databaseClass.get();
  const find = async (id: string, text: string, changedText?: unknown) =>
    (await db.question.findUnique({ where: { id } }))
    ?? (await db.question.findFirst({ where: { text } }))
    ?? (typeof changedText === 'string' ? await db.question.findFirst({ where: { text: changedText } }) : null);

  let applied = 0, missing = 0, skipped = 0;
  for (const c of data.corrections) {
    const q = await find(c.id, c.originalText, c.changes.text);
    if (!q) { missing++; continue; }
    const target = typeof c.changes.text === 'string' ? c.changes.text : c.originalText;
    if (q.text !== c.originalText && q.text !== target) { skipped++; continue; }   // edited since: keep the edit
    const live = c.reviewStatus === 'approved';
    await db.question.update({
      where: { id: q.id },
      data: {
        ...(c.changes as object),
        reviewStatus: c.verdict === 'fix' ? q.reviewStatus : c.reviewStatus,
        isActive: c.verdict === 'fix' ? q.isActive : live,
        ...(c.verdict === 'fix' ? {} : { reviewNote: c.reviewNote }),
      },
    });
    applied++;
  }
  for (const r of data.textbookRefs) {
    const q = await find(r.id, r.originalText);
    if (q && !q.textbookRef) await db.question.update({ where: { id: q.id }, data: { textbookRef: r.textbookRef } });
  }
  console.log(`✅ Review corrections: ${applied} applied, ${skipped} kept (edited since), ${missing} not in this database.`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
