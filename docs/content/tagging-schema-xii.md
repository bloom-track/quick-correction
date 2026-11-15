# Tagging schema for CBSE Class 12 Mathematics board questions

Turns each previous-year paper into structured rows: one row per question. A case study is one row, with
its sub-parts in `parts`. The paper text is in `docs/content/pyq-xii-text/` (not in git); the tagged rows go
in `docs/content/tagged-history-xii/<folder>/<paper>.json`.

## Row fields

| field | values |
|---|---|
| `year` | 2012–2026 |
| `exam` | `main`, `compartment` |
| `series` | paper code as printed, e.g. `65/1/1` (`?` if not printed) |
| `qno` | question number as printed |
| `section` | the printed section letter (`A`, `B`, …); `-` if the paper has no sections |
| `marks` | marks for the question |
| `type` | `mcq`, `assertion_reason`, `short` (up to 3 marks, worked answer), `long` (4 marks or more), `case` |
| `chapter` | exactly one of the chapter names below |
| `topic` | one topic listed for that chapter (current or legacy), or `NEW: <name>` |
| `alsoTouches` | other chapters involved (else `[]`) |
| `complexity` | `easy`, `medium`, `hard` |
| `competency` | `true` for application, real-life or higher-order questions |
| `internalChoice` | `true` if the question has an OR alternative (tag the first alternative; mention the other in `summary`) |
| `hasFigure` | `true` if a diagram or graph is printed |
| `legacySyllabus` | `true` if the question needs a topic CBSE has since cut (any legacy topic below) |
| `summary` | your OWN paraphrase, at most 25 words. Never copy the question's wording |
| `template` | a reusable template with `{placeholders}`, in your own words |
| `parts` | `case` only: `[{label, marks, summary}]` |
| `confidence` | `high`, `medium`, `low` (low when the text is unreadable) |

## Paper formats by year

- 2023–2026: 38 questions, 80 marks: A 20×1 (18 MCQ + 2 assertion-reason), B 5×2, C 6×3, D 4×5, E 3×4 case studies.
- 2022: Term-2 paper, 40 marks, fewer questions, with a case-based section; tag what is printed.
- 2020: 36 questions: A 20×1, B 6×2, C 6×4, D 4×6.
- 2016–2019: 29 questions: A 4×1, B 8×2, C 11×4, D 6×6.
- 2012–2015: 26 or 29 questions in sections A–C or A–D.

## Chapters and topics (names exactly as written)

The current topics are in `prisma/seeding/curriculum-xii.data.ts` (`TOPICS_XII`), and the cut ones are in
`LEGACY_TOPICS_XII`. Tag with a legacy topic and `legacySyllabus: true` when a question needs it.

## Rules

- Read the English questions only; ignore the Hindi half of bilingual papers and the general instructions.
- OCR text garbles maths. Infer the question from context, and use `confidence: low` when you can't.
- Sets of one series (e.g. 65/1/1, 65/1/2, 65/1/3) share many questions. Tag every printed question in every
  set you are given anyway, since each paper is a separate record.
- Never copy question wording into `summary` or `template`.
