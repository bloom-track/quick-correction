/**
 * Loads the Class 12 Mathematics question bank (prisma/seeding/class12/*.ts)
 * into the topics under CBSE › Class 12 › Mathematics. Ids listed in
 * class12/reviewed.json (checked independently) load approved; others as drafts.
 * Skips ids that already exist, so admin edits and approvals are kept.
 * Run: npm run db:seed:class12:questions   (after db:seed:class12)
 */
import 'dotenv/config';
import { databaseClass } from '@bloomneo/appkit/database';
import { readFileSync } from 'node:fs';
import { CLASS12_QUESTIONS } from './class12/index.js';

// Questions already checked independently load approved; anything new loads as a draft.
const reviewed = new Set<string>(JSON.parse(readFileSync(new URL('./class12/reviewed.json', import.meta.url), 'utf8')).ids);

async function main() {
  const db = await databaseClass.get();
  const cls = await db.curriculumNode.findFirst({ where: { kind: 'class', name: 'Class 12', parent: { kind: 'board', name: { startsWith: 'CBSE' } } } });
  const subject = cls && await db.curriculumNode.findFirst({ where: { kind: 'subject', name: 'Mathematics', parentId: cls.id } });
  if (!subject) throw new Error('No CBSE › Class 12 › Mathematics. Run npm run db:seed:library and db:seed:class12 first');

  const topicIds = new Map<string, string>();
  for (const ch of await db.curriculumNode.findMany({ where: { kind: 'chapter', parentId: subject.id } })) {
    for (const t of await db.curriculumNode.findMany({ where: { kind: 'topic', parentId: ch.id } })) topicIds.set(`${ch.name}|${t.name}`, t.id);
  }

  let added = 0, missing = 0, drafts = 0;
  for (const q of CLASS12_QUESTIONS) {
    if (await db.question.findUnique({ where: { id: q.id } })) continue;
    const topicId = topicIds.get(`${q.chapter}|${q.topic}`);
    if (!topicId) { console.warn(`No topic "${q.topic}" under "${q.chapter}"; skipped ${q.id}`); missing++; continue; }
    await db.question.create({
      data: {
        id: q.id, topicId, type: q.type, complexity: q.complexity, marks: q.marks, competency: !!q.competency, text: q.text,
        options: q.options ?? undefined, answer: q.answer, markingSteps: q.steps ?? undefined, parts: q.parts ?? undefined,
        source: 'ai', reviewStatus: reviewed.has(q.id) ? 'approved' : 'draft', isActive: reviewed.has(q.id),
      },
    });
    added++;
    if (!reviewed.has(q.id)) drafts++;
  }
  console.log(`✅ Class 12 questions: ${added} added (${added - drafts} approved, ${drafts} drafts for review)${missing ? `, ${missing} skipped (unknown topic)` : ''}.`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
