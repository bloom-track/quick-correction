/**
 * One Class 12 Mathematics question bank item, written in our own words for the
 * current CBSE syllabus. `chapter` and `topic` are names under
 * CBSE › Class 12 › Mathematics (curriculum-xii.data.ts).
 *
 * - mcq / assertion_reason: 1 mark, 4 options, answer starts "Correct option: X) " and says why.
 * - short (2 or 3 marks) and long (5 marks): `steps` with marks summing to `marks`.
 * - case (4 marks): a shared situation in `text`, and `parts` whose marks sum to 4.
 */
export type Class12Question = {
  id: string;
  chapter: string;
  topic: string;
  type: 'mcq' | 'assertion_reason' | 'short' | 'long' | 'case';
  complexity: 'easy' | 'medium' | 'hard';
  marks: number;
  competency?: boolean;
  text: string;
  options?: string[];
  answer: string;
  steps?: { step: string; marks: number }[];
  parts?: { label: string; marks: number; text: string; answer: string }[];
};
