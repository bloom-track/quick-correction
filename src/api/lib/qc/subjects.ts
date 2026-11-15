/**
 * Names for a subject node in the curriculum tree (board › class › subject), so
 * papers, marking and screens describe the right syllabus for any board, class
 * and subject rather than assuming one.
 */
export type SubjectInfo = { id: string; board: string; className: string; classLabel: string; subject: string; label: string };

/** Board, class and subject names for a subject node, e.g. CBSE › Class 12 › Mathematics. */
export async function subjectInfo(db: any, subjectId: string | null | undefined): Promise<SubjectInfo | null> {
  if (!subjectId) return null;
  const subject = await db.curriculumNode.findUnique({ where: { id: subjectId } });
  if (!subject || subject.kind !== 'subject') return null;
  const cls = subject.parentId ? await db.curriculumNode.findUnique({ where: { id: subject.parentId } }) : null;
  const board = cls?.parentId ? await db.curriculumNode.findUnique({ where: { id: cls.parentId } }) : null;
  const classLabel = cls?.name ?? '';
  return {
    id: subject.id,
    board: board?.name ?? '',
    classLabel,
    // "Class 12" → "12"; anything else (e.g. "Grade 11", "MYP 5") is kept as written.
    className: classLabel.replace(/^Class\s+/i, ''),
    subject: subject.name,
    label: [board?.name, classLabel, subject.name].filter(Boolean).join(' › '),
  };
}

/** The subject a paper pattern belongs to. */
export async function subjectOfPattern(db: any, patternId: string | null | undefined): Promise<SubjectInfo | null> {
  if (!patternId) return null;
  const p = await db.paperPattern.findUnique({ where: { id: patternId }, select: { subjectId: true } });
  return subjectInfo(db, p?.subjectId);
}
