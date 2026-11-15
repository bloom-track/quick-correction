/**
 * Class 12 Mathematics: creates the current-syllabus topics under each chapter
 * (curriculum-xii.data.ts) and loads the tagged board papers
 * (docs/content/board-history-xii.json) as this subject's board history.
 * Topics an admin already has are kept; board rows are upserted by paper and
 * question number. Safe to re-run.
 * Run: npm run db:seed:class12   (after db:seed:library)
 */
import 'dotenv/config';
import { existsSync, readFileSync } from 'node:fs';
import { databaseClass } from '@bloomneo/appkit/database';
import { TOPICS_XII } from './curriculum-xii.data.js';

const historyFile = new URL('../../docs/content/board-history-xii.json', import.meta.url);

async function main() {
  const db = await databaseClass.get();
  const cls = await db.curriculumNode.findFirst({ where: { kind: 'class', name: 'Class 12', parent: { kind: 'board', name: { startsWith: 'CBSE' } } } });
  const subject = cls && await db.curriculumNode.findFirst({ where: { kind: 'subject', name: 'Mathematics', parentId: cls.id } });
  if (!subject) throw new Error('No CBSE › Class 12 › Mathematics in the library. Run npm run db:seed:library first');

  let topics = 0;
  for (const [chapterName, names] of Object.entries(TOPICS_XII)) {
    const chapter = await db.curriculumNode.findFirst({ where: { kind: 'chapter', name: chapterName, parentId: subject.id } });
    if (!chapter) { console.warn(`No chapter "${chapterName}" under Class 12 Mathematics; skipped`); continue; }
    for (const [i, name] of names.entries()) {
      if (await db.curriculumNode.findFirst({ where: { parentId: chapter.id, name } })) continue;
      await db.curriculumNode.create({ data: { kind: 'topic', name, parentId: chapter.id, position: i } });
      topics++;
    }
  }

  // Paper layouts: the same five-section 80-mark design CBSE uses for Class 12, and a unit test.
  const LAYOUTS = [
    { name: 'Board paper', description: 'Full 80-mark CBSE board layout.', durationMins: 180, sections: [
      { title: 'Section A', type: 'mcq', count: 20, marksEach: 1, note: 'Multiple choice and assertion–reason questions of 1 mark each.' },
      { title: 'Section B', type: 'short', count: 5, marksEach: 2, note: 'Very short answer questions of 2 marks each.', choices: 2 },
      { title: 'Section C', type: 'short', count: 6, marksEach: 3, note: 'Short answer questions of 3 marks each.', choices: 2 },
      { title: 'Section D', type: 'long', count: 4, marksEach: 5, note: 'Long answer questions of 5 marks each.', choices: 2 },
      { title: 'Section E', type: 'case', count: 3, marksEach: 4, note: 'Case-study based questions of 4 marks each.' },
    ] },
    { name: 'Unit test', description: 'A third of the board layout, for one or a few chapters.', durationMins: 60, sections: [
      { title: 'Section A', type: 'mcq', count: 7, marksEach: 1, note: 'Multiple choice and assertion–reason questions of 1 mark each.' },
      { title: 'Section B', type: 'short', count: 2, marksEach: 2, note: 'Very short answer questions of 2 marks each.' },
      { title: 'Section C', type: 'short', count: 2, marksEach: 3, note: 'Short answer questions of 3 marks each.' },
      { title: 'Section D', type: 'long', count: 2, marksEach: 5, note: 'Long answer questions of 5 marks each.', choices: 1 },
      { title: 'Section E', type: 'case', count: 1, marksEach: 4, note: 'Case-study based questions of 4 marks each.' },
    ] },
  ];
  let layouts = 0;
  for (const [position, l] of LAYOUTS.entries()) {
    if (await db.paperPattern.findFirst({ where: { subjectId: subject.id, name: l.name } })) continue;
    await db.paperPattern.create({ data: { subjectId: subject.id, position, ...l } });
    layouts++;
  }

  let board = 0;
  if (existsSync(historyFile)) {
    const rows = JSON.parse(readFileSync(historyFile, 'utf8')) as any[];
    for (const r of rows) {
      const qno = String(r.qno);
      const data = {
        paperId: r.paperId, year: r.year, exam: r.exam, series: r.series ?? null, qno, section: String(r.section), marks: r.marks,
        type: r.type, chapter: r.chapter, topic: r.topic, complexity: r.complexity, competency: !!r.competency,
        internalChoice: !!r.internalChoice, hasFigure: !!r.hasFigure, legacySyllabus: !!r.legacySyllabus,
        summary: r.summary ?? null, template: r.template ?? null, parts: r.parts ?? undefined, confidence: r.confidence ?? null,
        subjectId: subject.id,
      };
      await db.boardQuestion.upsert({ where: { paperId_qno: { paperId: r.paperId, qno } }, create: data, update: data });
      board++;
    }
  }
  console.log(`✅ Class 12 Mathematics: ${topics} topics added, ${layouts} paper layouts added, ${board} board questions loaded.`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
