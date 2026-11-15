import type { Class12Question } from './types.js';

const C = 'Vector Algebra';
const TB = 'Vector basics, direction cosines and unit vectors';
const TP = 'Position vectors and section formula';
const TS = 'Scalar product and projection';
const TV = 'Vector product and area';

const AR_OPTIONS = [
  'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
  'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
  '(A) is true, but (R) is false.',
  '(A) is false, but (R) is true.',
];

export const CH10_VEC_R2: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────
  {
    id: 'c12-vec-r2-a01', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The length of the vector $\\overrightarrow{PQ}$, where $P$ is $(1, 0, -2)$ and $Q$ is $(3, -4, 2)$, is',
    options: ['$\\sqrt{29}$', '$36$', '$6$', '$10$'],
    answer: 'Correct option: C) $6$. $\\overrightarrow{PQ} = 2\\hat{i} - 4\\hat{j} + 4\\hat{k}$, so $|\\overrightarrow{PQ}| = \\sqrt{4 + 16 + 16} = 6$. Option A is the length of $\\overrightarrow{OQ}$, option B forgets the square root and option D adds the absolute values of the components.',
  },
  {
    id: 'c12-vec-r2-a02', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A unit vector that makes equal acute angles with all three coordinate axes is',
    options: ['$\\hat{i} + \\hat{j} + \\hat{k}$', '$\\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$', '$\\frac{1}{3}(\\hat{i} + \\hat{j} + \\hat{k})$', '$-\\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$'],
    answer: 'Correct option: B) $\\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$. Equal angles mean $l = m = n$, and $3l^{2} = 1$ gives $l = \\frac{1}{\\sqrt{3}}$ (positive for acute angles). Option A is not a unit vector, option C has magnitude $\\frac{1}{\\sqrt{3}}$, and option D makes obtuse angles.',
  },
  {
    id: 'c12-vec-r2-a03', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $|\\vec{a}| = 3$ and $k$ is a scalar with $-2 \\le k \\le 1$, then $|k\\vec{a}|$ takes all values in the interval',
    options: ['$[-6, 3]$', '$[3, 6]$', '$[0, 3]$', '$[0, 6]$'],
    answer: 'Correct option: D) $[0, 6]$. $|k\\vec{a}| = |k| \\times 3$, and $|k|$ runs over $[0, 2]$ as $k$ runs over $[-2, 1]$ (it is $0$ at $k = 0$ and largest, $2$, at $k = -2$). So $|k\\vec{a}|$ runs over $[0, 6]$. A magnitude is never negative, which rules out option A.',
  },
  {
    id: 'c12-vec-r2-a04', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A line has direction cosines $l, m, n$ with $l = \\frac{1}{2}$ and $m = \\frac{1}{2}$. Then $n$ is',
    options: ['$\\pm\\frac{1}{\\sqrt{2}}$', '$\\pm\\frac{1}{2}$', '$0$', '$\\frac{1}{4}$'],
    answer: 'Correct option: A) $\\pm\\frac{1}{\\sqrt{2}}$. From $l^{2} + m^{2} + n^{2} = 1$: $n^{2} = 1 - \\frac{1}{4} - \\frac{1}{4} = \\frac{1}{2}$, so $n = \\pm\\frac{1}{\\sqrt{2}}$. Option C wrongly uses $l + m + n = 1$.',
  },
  {
    id: 'c12-vec-r2-a05', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A vector makes angles $\\alpha$, $\\beta$, $\\gamma$ with the positive $x$-, $y$- and $z$-axes. The value of $\\cos 2\\alpha + \\cos 2\\beta + \\cos 2\\gamma$ is',
    options: ['$1$', '$-1$', '$0$', '$3$'],
    answer: 'Correct option: B) $-1$. $\\cos 2\\theta = 2\\cos^{2}\\theta - 1$, so the sum is $2(\\cos^{2}\\alpha + \\cos^{2}\\beta + \\cos^{2}\\gamma) - 3 = 2 - 3 = -1$.',
  },
  {
    id: 'c12-vec-r2-a06', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $\\vec{a} + \\vec{b} = 3\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{a} - \\vec{b} = \\hat{i} + 3\\hat{j} - 2\\hat{k}$, then $|\\vec{b}|$ is',
    options: ['$\\sqrt{5}$', '$9$', '$\\sqrt{14}$', '$3$'],
    answer: 'Correct option: D) $3$. Subtracting and halving, $\\vec{b} = \\frac{1}{2}[(3\\hat{i} - \\hat{j} + 2\\hat{k}) - (\\hat{i} + 3\\hat{j} - 2\\hat{k})] = \\hat{i} - 2\\hat{j} + 2\\hat{k}$, so $|\\vec{b}| = \\sqrt{1 + 4 + 4} = 3$. Option A is $|\\vec{a}|$ and option C is $|\\vec{a} + \\vec{b}|$.',
  },
  {
    id: 'c12-vec-r2-a07', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\vec{a}$ and $\\vec{b}$ are non-collinear vectors. The value of $x$ for which $(x - 2)\\vec{a} + \\vec{b}$ and $(2x + 1)\\vec{a} - \\vec{b}$ are collinear is',
    options: ['$\\frac{1}{3}$', '$-3$', '$3$', '$-\\frac{1}{3}$'],
    answer: 'Correct option: A) $\\frac{1}{3}$. Since $\\vec{a}$ and $\\vec{b}$ are non-collinear, the coefficients must be proportional: $\\frac{x - 2}{2x + 1} = \\frac{1}{-1}$, so $x - 2 = -2x - 1$ and $x = \\frac{1}{3}$.',
  },
  {
    id: 'c12-vec-r2-a08', chapter: C, topic: TB, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The vector $\\hat{i} + \\hat{j} + \\hat{k}$ is equally inclined to the three coordinate axes.\nReason (R): The direction cosines $l, m, n$ of any line satisfy $l^{2} + m^{2} + n^{2} = 1$.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both are true, but (R) does not explain (A). The direction cosines of $\\hat{i} + \\hat{j} + \\hat{k}$ are all $\\frac{1}{\\sqrt{3}}$, so the angles with the axes are equal; that comes from the equal components, not from the identity in (R), which is true for every line.',
  },
  {
    id: 'c12-vec-r2-a09', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The vertices of a triangle have position vectors $2\\hat{i} - \\hat{j} + 4\\hat{k}$, $-\\hat{i} + 5\\hat{j} + \\hat{k}$ and $5\\hat{i} + 2\\hat{j} - 2\\hat{k}$. The position vector of its centroid is',
    options: ['$6\\hat{i} + 6\\hat{j} + 3\\hat{k}$', '$3\\hat{i} + 3\\hat{j} + \\frac{3}{2}\\hat{k}$', '$2\\hat{i} + 2\\hat{j} + \\hat{k}$', '$\\frac{1}{2}\\hat{i} + 2\\hat{j} + \\frac{5}{2}\\hat{k}$'],
    answer: 'Correct option: C) $2\\hat{i} + 2\\hat{j} + \\hat{k}$. The centroid is $\\frac{1}{3}(\\vec{a} + \\vec{b} + \\vec{c}) = \\frac{1}{3}(6\\hat{i} + 6\\hat{j} + 3\\hat{k})$. Option A forgets to divide and option B divides by $2$.',
  },
  {
    id: 'c12-vec-r2-a10', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The point dividing the join of the points with position vectors $2\\vec{a} - 3\\vec{b}$ and $\\vec{a} + \\vec{b}$ internally in the ratio $3 : 1$ has position vector',
    options: ['$\\frac{5}{4}\\vec{a}$', '$\\frac{7}{4}\\vec{a} - 2\\vec{b}$', '$\\frac{1}{2}\\vec{a} + 3\\vec{b}$', '$\\frac{5}{4}\\vec{a} - \\frac{3}{2}\\vec{b}$'],
    answer: 'Correct option: A) $\\frac{5}{4}\\vec{a}$. $\\vec{r} = \\frac{3(\\vec{a} + \\vec{b}) + 1(2\\vec{a} - 3\\vec{b})}{3 + 1} = \\frac{5\\vec{a} + 0\\vec{b}}{4}$. Option B uses the ratio the wrong way round, weighting the first point by $3$.',
  },
  {
    id: 'c12-vec-r2-a11', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For the points $A(2, 3, -4)$, $B(1, -2, 3)$ and $C(3, 8, -11)$, which statement is true?',
    options: ['$B$ is the mid-point of $AC$', '$A$ is the mid-point of $BC$', '$C$ is the mid-point of $AB$', 'The points are not collinear'],
    answer: 'Correct option: B) $A$ is the mid-point of $BC$. $\\overrightarrow{AB} = -\\hat{i} - 5\\hat{j} + 7\\hat{k}$ and $\\overrightarrow{AC} = \\hat{i} + 5\\hat{j} - 7\\hat{k} = -\\overrightarrow{AB}$, so the points are collinear with $A$ exactly halfway; indeed $\\frac{1}{2}(\\vec{b} + \\vec{c}) = 2\\hat{i} + 3\\hat{j} - 4\\hat{k} = \\vec{a}$.',
  },
  {
    id: 'c12-vec-r2-a12', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two points divide the segment joining $A(1, -2, 3)$ and $B(4, 7, -6)$ into three equal parts. The one nearer to $A$ is',
    options: ['$(3, 4, -3)$', '$\\left(\\frac{5}{2}, \\frac{5}{2}, -\\frac{3}{2}\\right)$', '$(2, 1, 0)$', '$(1, 3, -3)$'],
    answer: 'Correct option: C) $(2, 1, 0)$. The point nearer to $A$ divides $AB$ internally in $1 : 2$: $\\frac{2\\vec{a} + \\vec{b}}{3} = \\frac{(2 + 4, -4 + 7, 6 - 6)}{3} = (2, 1, 0)$. Option A is the other point of trisection (nearer to $B$) and option B is the mid-point.',
  },
  {
    id: 'c12-vec-r2-a13', chapter: C, topic: TP, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The mid-point of the segment joining the points with position vectors $3\\hat{i} + 2\\hat{j} - \\hat{k}$ and $-\\hat{i} + 4\\hat{j} + 5\\hat{k}$ has position vector $2\\hat{i} - \\hat{j} - 3\\hat{k}$.\nReason (R): The mid-point of the segment joining points with position vectors $\\vec{a}$ and $\\vec{b}$ has position vector $\\frac{\\vec{a} + \\vec{b}}{2}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, (R) is true. By (R) the mid-point is $\\frac{1}{2}(2\\hat{i} + 6\\hat{j} + 4\\hat{k}) = \\hat{i} + 3\\hat{j} + 2\\hat{k}$. The vector in (A) is $\\frac{\\vec{a} - \\vec{b}}{2}$, a common slip.',
  },
  {
    id: 'c12-vec-r2-a14', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: '$G$ is the centroid of triangle $ABC$ and $O$ is any point in space. Then $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$ equals',
    options: ['$\\vec{0}$', '$\\overrightarrow{OG}$', '$2\\overrightarrow{OG}$', '$3\\overrightarrow{OG}$'],
    answer: 'Correct option: D) $3\\overrightarrow{OG}$. Taking $O$ as origin, $\\overrightarrow{OG} = \\frac{1}{3}(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC})$, so the sum is $3\\overrightarrow{OG}$. Option A is true only for $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC}$, that is when $O = G$.',
  },
  {
    id: 'c12-vec-r2-a15', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the vectors $\\hat{i} - \\hat{j}$ and $\\hat{j} - \\hat{k}$ is',
    options: ['$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{6}$', '$\\frac{5\\pi}{6}$'],
    answer: 'Correct option: B) $\\frac{2\\pi}{3}$. The dot product is $0 - 1 + 0 = -1$ and each magnitude is $\\sqrt{2}$, so $\\cos\\theta = -\\frac{1}{2}$ and $\\theta = \\frac{2\\pi}{3}$. Option A ignores the minus sign.',
  },
  {
    id: 'c12-vec-r2-a16', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $|\\vec{a}| = 3$, $|\\vec{b}| = 4$ and $\\vec{a} \\cdot \\vec{b} = 6\\sqrt{3}$, the angle between $\\vec{a}$ and $\\vec{b}$ is',
    options: ['$\\frac{\\pi}{3}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: C) $\\frac{\\pi}{6}$. $\\cos\\theta = \\frac{6\\sqrt{3}}{3 \\times 4} = \\frac{\\sqrt{3}}{2}$, so $\\theta = \\frac{\\pi}{6}$. Option A comes from confusing $\\cos$ with $\\sin$.',
  },
  {
    id: 'c12-vec-r2-a17', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The vector projection (projection vector) of $\\vec{a} = 2\\hat{i} + \\hat{j} - \\hat{k}$ on $\\vec{b} = \\hat{i} + \\hat{j} + \\hat{k}$ is',
    options: ['$\\frac{2}{\\sqrt{3}}$', '$\\frac{2}{3}(\\hat{i} + \\hat{j} + \\hat{k})$', '$\\frac{2}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$', '$\\frac{1}{3}(2\\hat{i} + \\hat{j} - \\hat{k})$'],
    answer: 'Correct option: B) $\\frac{2}{3}(\\hat{i} + \\hat{j} + \\hat{k})$. The projection vector is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^{2}}\\vec{b} = \\frac{2}{3}\\vec{b}$. Option A is the scalar projection, and option C divides by $|\\vec{b}|$ instead of $|\\vec{b}|^{2}$.',
  },
  {
    id: 'c12-vec-r2-a18', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For vectors with $\\vec{a} \\neq \\vec{0}$, $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$ and $\\vec{b} \\neq \\vec{c}$. Which conclusion is always correct?',
    options: ['$\\vec{b} = \\vec{c}$', '$\\vec{b} - \\vec{c}$ is parallel to $\\vec{a}$', '$\\vec{b} - \\vec{c}$ is perpendicular to $\\vec{a}$', '$\\vec{b}$ is perpendicular to $\\vec{c}$'],
    answer: 'Correct option: C) $\\vec{b} - \\vec{c}$ is perpendicular to $\\vec{a}$. The condition gives $\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = 0$ with both vectors non-zero. The dot product cannot be "cancelled", so option A does not follow.',
  },
  {
    id: 'c12-vec-r2-a19', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A parallelogram has adjacent sides $\\vec{a} = \\hat{i} + \\hat{j}$ and $\\vec{b} = \\hat{j} + \\hat{k}$. The angle between its diagonals is',
    options: ['$\\frac{\\pi}{3}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: D) $\\frac{\\pi}{2}$. The diagonals are $\\vec{a} + \\vec{b} = \\hat{i} + 2\\hat{j} + \\hat{k}$ and $\\vec{a} - \\vec{b} = \\hat{i} - \\hat{k}$, whose dot product is $1 + 0 - 1 = 0$. (This happens because $|\\vec{a}| = |\\vec{b}|$, so the figure is a rhombus.) Option A is the angle between the sides themselves.',
  },
  {
    id: 'c12-vec-r2-a20', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The angle between $\\vec{a}$ and $\\vec{b}$ is $\\frac{\\pi}{3}$, $|\\vec{a}| = 2$ and $|\\vec{a} - \\vec{b}| = \\sqrt{7}$. Then $|\\vec{b}|$ is',
    options: ['$3$', '$1$', '$\\sqrt{7}$', '$2$'],
    answer: 'Correct option: A) $3$. $|\\vec{a} - \\vec{b}|^{2} = 4 + |\\vec{b}|^{2} - 2 \\times 2|\\vec{b}| \\times \\frac{1}{2}$, so $|\\vec{b}|^{2} - 2|\\vec{b}| - 3 = 0$, giving $|\\vec{b}| = 3$ (the root $-1$ is rejected).',
  },
  {
    id: 'c12-vec-r2-a21', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following vectors is perpendicular to $2\\hat{i} - \\hat{j} + 3\\hat{k}$?',
    options: ['$\\hat{i} + \\hat{j} + \\hat{k}$', '$-2\\hat{i} + \\hat{j} - 3\\hat{k}$', '$\\hat{i} + 2\\hat{j} + \\hat{k}$', '$\\hat{i} + 5\\hat{j} + \\hat{k}$'],
    answer: 'Correct option: D) $\\hat{i} + 5\\hat{j} + \\hat{k}$, since $(2)(1) + (-1)(5) + (3)(1) = 0$. The other dot products are $4$, $-14$ and $3$; option B is in fact parallel (opposite) to the given vector.',
  },
  {
    id: 'c12-vec-r2-a22', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $|\\vec{a}| = 2$, $|\\vec{b}| = 3$ and $|\\vec{a} + \\vec{b}| = 4$, then $|\\vec{a} - \\vec{b}|$ equals',
    options: ['$1$', '$\\sqrt{10}$', '$\\sqrt{26}$', '$\\sqrt{22}$'],
    answer: 'Correct option: B) $\\sqrt{10}$. Adding the expansions, $|\\vec{a} + \\vec{b}|^{2} + |\\vec{a} - \\vec{b}|^{2} = 2(|\\vec{a}|^{2} + |\\vec{b}|^{2}) = 26$, so $|\\vec{a} - \\vec{b}|^{2} = 26 - 16 = 10$. (Equivalently $\\vec{a} \\cdot \\vec{b} = \\frac{3}{2}$.) Option A wrongly subtracts magnitudes.',
  },
  {
    id: 'c12-vec-r2-a23', chapter: C, topic: TS, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): If $\\vec{a} \\cdot \\vec{b} = 0$, then $\\vec{a} = \\vec{0}$ or $\\vec{b} = \\vec{0}$.\nReason (R): The dot product of two non-zero perpendicular vectors is zero.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, (R) is true. For example $\\hat{i} \\cdot \\hat{j} = 0$ although neither vector is zero; (R) is exactly why a zero dot product does not force a zero vector.',
  },
  {
    id: 'c12-vec-r2-a24', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\hat{i} \\times (\\hat{j} + \\hat{k})$ is',
    options: ['$\\hat{k} - \\hat{j}$', '$\\hat{j} + \\hat{k}$', '$\\hat{j} - \\hat{k}$', '$\\vec{0}$'],
    answer: 'Correct option: A) $\\hat{k} - \\hat{j}$. $\\hat{i} \\times \\hat{j} = \\hat{k}$ and $\\hat{i} \\times \\hat{k} = -\\hat{j}$. Option C has the sign of $\\hat{i} \\times \\hat{k}$ wrong.',
  },
  {
    id: 'c12-vec-r2-a25', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the triangle whose vertices have position vectors $\\hat{i}$, $\\hat{j}$ and $\\hat{k}$ is',
    options: ['$\\frac{1}{2}$', '$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{3}{2}$'],
    answer: 'Correct option: C) $\\frac{\\sqrt{3}}{2}$. The sides from $\\hat{i}$ are $-\\hat{i} + \\hat{j}$ and $-\\hat{i} + \\hat{k}$, whose cross product is $\\hat{i} + \\hat{j} + \\hat{k}$ of magnitude $\\sqrt{3}$; the area is half of this. Option B forgets the $\\frac{1}{2}$.',
  },
  {
    id: 'c12-vec-r2-a26', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The sine of the angle between $\\vec{a} = 2\\hat{i} + \\hat{j} - \\hat{k}$ and $\\vec{b} = \\hat{i} - \\hat{j} + 2\\hat{k}$ is',
    options: ['$\\frac{1}{6}$', '$\\frac{\\sqrt{35}}{6}$', '$\\frac{\\sqrt{35}}{36}$', '$\\frac{5}{6}$'],
    answer: 'Correct option: B) $\\frac{\\sqrt{35}}{6}$. $\\vec{a} \\times \\vec{b} = \\hat{i} - 5\\hat{j} - 3\\hat{k}$ with magnitude $\\sqrt{35}$, and $|\\vec{a}||\\vec{b}| = \\sqrt{6} \\times \\sqrt{6} = 6$. Option A is $|\\cos\\theta|$ (since $\\vec{a} \\cdot \\vec{b} = -1$) and option C divides by $36$ instead of $6$.',
  },
  {
    id: 'c12-vec-r2-a27', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For two vectors $\\vec{a}$ and $\\vec{b}$, both $\\vec{a} \\times \\vec{b} = \\vec{0}$ and $\\vec{a} \\cdot \\vec{b} = 0$. Then',
    options: ['$\\vec{a}$ is perpendicular to $\\vec{b}$', '$\\vec{a}$ is parallel to $\\vec{b}$', '$|\\vec{a}| = |\\vec{b}|$', '$\\vec{a} = \\vec{0}$ or $\\vec{b} = \\vec{0}$'],
    answer: 'Correct option: D) $\\vec{a} = \\vec{0}$ or $\\vec{b} = \\vec{0}$. If both were non-zero, the first condition would need $\\sin\\theta = 0$ and the second $\\cos\\theta = 0$, which cannot happen together.',
  },
  {
    id: 'c12-vec-r2-a28', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the parallelogram with adjacent sides $2\\hat{i} - \\hat{j}$ and $\\hat{j} + 3\\hat{k}$ is',
    options: ['$7$', '$\\frac{7}{2}$', '$49$', '$5\\sqrt{2}$'],
    answer: 'Correct option: A) $7$. $(2\\hat{i} - \\hat{j}) \\times (\\hat{j} + 3\\hat{k}) = -3\\hat{i} - 6\\hat{j} + 2\\hat{k}$, of magnitude $\\sqrt{9 + 36 + 4} = 7$. Option B is the triangle area and option D is $|\\vec{a}||\\vec{b}|$.',
  },
  {
    id: 'c12-vec-r2-a29', chapter: C, topic: TV, type: 'mcq', complexity: 'hard', marks: 1,
    text: '$\\hat{a}$ and $\\hat{b}$ are unit vectors inclined at $\\frac{\\pi}{4}$. The area of the parallelogram whose diagonals are $2\\hat{a} - \\hat{b}$ and $4\\hat{a} - 5\\hat{b}$ is',
    options: ['$3\\sqrt{2}$', '$\\frac{3}{\\sqrt{2}}$', '$7\\sqrt{2}$', '$\\frac{7}{\\sqrt{2}}$'],
    answer: 'Correct option: B) $\\frac{3}{\\sqrt{2}}$. $(2\\hat{a} - \\hat{b}) \\times (4\\hat{a} - 5\\hat{b}) = -10\\,\\hat{a} \\times \\hat{b} - 4\\,\\hat{b} \\times \\hat{a} = -6\\,\\hat{a} \\times \\hat{b}$, of magnitude $6\\sin\\frac{\\pi}{4} = 3\\sqrt{2}$. The area is half the magnitude of the cross product of the diagonals, $\\frac{3}{\\sqrt{2}}$. Option A forgets the $\\frac{1}{2}$; options C and D treat $\\hat{b} \\times \\hat{a}$ as $+\\hat{a} \\times \\hat{b}$.',
  },
  {
    id: 'c12-vec-r2-a30', chapter: C, topic: TV, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): For any two vectors $\\vec{a}$ and $\\vec{b}$, the vector $\\vec{a} \\times \\vec{b}$ is perpendicular to $\\vec{a} + \\vec{b}$.\nReason (R): $\\vec{a} \\times \\vec{b}$ is perpendicular to both $\\vec{a}$ and $\\vec{b}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and (R) explains (A). By (R), $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 0$ and $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{b} = 0$, so $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{a} + \\vec{b}) = 0$.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-vec-r2-b01', chapter: C, topic: TB, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the direction cosines of the vector $4\\hat{i} - 4\\hat{j} + 2\\hat{k}$ and hence write the angles it makes with the coordinate axes.',
    answer: 'The magnitude is $\\sqrt{16 + 16 + 4} = 6$, so the direction cosines are $\\frac{4}{6}, -\\frac{4}{6}, \\frac{2}{6}$, that is $\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}$. The angles with the $x$-, $y$- and $z$-axes are $\\cos^{-1}\\frac{2}{3}$, $\\cos^{-1}\\left(-\\frac{2}{3}\\right) = \\pi - \\cos^{-1}\\frac{2}{3}$ and $\\cos^{-1}\\frac{1}{3}$.',
    steps: [
      { step: 'Finds the magnitude $6$ and the direction cosines $\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}$', marks: 1 },
      { step: 'Writes the angles $\\cos^{-1}\\frac{2}{3}$, $\\pi - \\cos^{-1}\\frac{2}{3}$, $\\cos^{-1}\\frac{1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b02', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'Express $\\vec{r} = 3\\hat{i} - \\hat{j} + 7\\hat{k}$ in the form $x\\vec{a} + y\\vec{b}$, where $\\vec{a} = \\hat{i} + 2\\hat{k}$ and $\\vec{b} = \\hat{j} - \\hat{k}$.',
    answer: '$x\\vec{a} + y\\vec{b} = x\\hat{i} + y\\hat{j} + (2x - y)\\hat{k}$. Comparing with $\\vec{r}$: $x = 3$, $y = -1$, and the $\\hat{k}$ part needs $2x - y = 7$, which holds since $6 + 1 = 7$. So $\\vec{r} = 3\\vec{a} - \\vec{b}$.',
    steps: [
      { step: 'Writes $x\\vec{a} + y\\vec{b}$ in components and compares with $\\vec{r}$', marks: 1 },
      { step: 'Gets $x = 3$, $y = -1$ and checks the third component, so $\\vec{r} = 3\\vec{a} - \\vec{b}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b03', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'A vector $\\vec{r}$ of magnitude $6$ makes an angle of $\\frac{\\pi}{4}$ with the positive $x$-axis, $\\frac{\\pi}{3}$ with the positive $y$-axis and an obtuse angle with the positive $z$-axis. Find $\\vec{r}$.',
    answer: 'Here $l = \\cos\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}$ and $m = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$. Then $n^{2} = 1 - \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$, and since the angle with the $z$-axis is obtuse, $n = -\\frac{1}{2}$. So $\\vec{r} = 6\\left(\\frac{1}{\\sqrt{2}}\\hat{i} + \\frac{1}{2}\\hat{j} - \\frac{1}{2}\\hat{k}\\right) = 3\\sqrt{2}\\,\\hat{i} + 3\\hat{j} - 3\\hat{k}$.',
    steps: [
      { step: 'Uses $l^{2} + m^{2} + n^{2} = 1$ and the obtuse condition to get $n = -\\frac{1}{2}$', marks: 1 },
      { step: 'Writes $\\vec{r} = 3\\sqrt{2}\\,\\hat{i} + 3\\hat{j} - 3\\hat{k}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b04', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'In triangle $ABC$, $\\overrightarrow{AB} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\overrightarrow{BC} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$. Find $\\overrightarrow{CA}$, show that the triangle is isosceles, and find its perimeter.',
    answer: 'By the triangle law, $\\overrightarrow{CA} = -(\\overrightarrow{AB} + \\overrightarrow{BC}) = -(3\\hat{i} + \\hat{j}) = -3\\hat{i} - \\hat{j}$. The side lengths are $|\\overrightarrow{AB}| = \\sqrt{4 + 1 + 4} = 3$, $|\\overrightarrow{BC}| = \\sqrt{1 + 4 + 4} = 3$ and $|\\overrightarrow{CA}| = \\sqrt{9 + 1} = \\sqrt{10}$. Since $AB = BC$, the triangle is isosceles, and its perimeter is $6 + \\sqrt{10}$ units.',
    steps: [
      { step: 'Finds $\\overrightarrow{CA} = -3\\hat{i} - \\hat{j}$ using the triangle law', marks: 1 },
      { step: 'Finds the lengths $3, 3, \\sqrt{10}$, concludes isosceles and gives perimeter $6 + \\sqrt{10}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b05', chapter: C, topic: TP, type: 'short', complexity: 'easy', marks: 2,
    text: 'Two vertices of a triangle are $A(3, -1, 2)$ and $B(-2, 4, 1)$, and its centroid is $G(1, 2, -1)$. Using position vectors, find the third vertex $C$.',
    answer: 'The centroid satisfies $\\vec{g} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$, so $\\vec{c} = 3\\vec{g} - \\vec{a} - \\vec{b} = (3 - 3 + 2)\\hat{i} + (6 + 1 - 4)\\hat{j} + (-3 - 2 - 1)\\hat{k} = 2\\hat{i} + 3\\hat{j} - 6\\hat{k}$. So $C$ is $(2, 3, -6)$.',
    steps: [
      { step: 'Writes $\\vec{c} = 3\\vec{g} - \\vec{a} - \\vec{b}$ from the centroid formula', marks: 1 },
      { step: 'Gets $C(2, 3, -6)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b06', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the point $P(3, 1, 0)$ lies on the segment joining $A(1, -1, 2)$ and $B(7, 5, -4)$, and find the ratio in which $P$ divides $AB$.',
    answer: 'Let $P$ divide $AB$ in the ratio $k : 1$. The $x$-coordinate gives $\\frac{7k + 1}{k + 1} = 3$, so $k = \\frac{1}{2}$. With $k = \\frac{1}{2}$: $y = \\frac{\\frac{5}{2} - 1}{\\frac{3}{2}} = 1$ and $z = \\frac{-2 + 2}{\\frac{3}{2}} = 0$, which match $P$. So $P$ lies on $AB$ and divides it internally in the ratio $1 : 2$. (Equivalently, $\\overrightarrow{AP} = 2\\hat{i} + 2\\hat{j} - 2\\hat{k} = \\frac{1}{3}\\overrightarrow{AB}$.)',
    steps: [
      { step: 'Uses the section formula with ratio $k : 1$ on one coordinate to get $k = \\frac{1}{2}$', marks: 1 },
      { step: 'Checks the other coordinates agree and concludes the internal ratio $1 : 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b07', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 2,
    text: '$ABCD$ is any quadrilateral, and $P$, $Q$, $R$, $S$ are the mid-points of $AB$, $BC$, $CD$ and $DA$. Using position vectors, prove that $PQRS$ is a parallelogram.',
    answer: 'Let the position vectors of $A, B, C, D$ be $\\vec{a}, \\vec{b}, \\vec{c}, \\vec{d}$. Then $\\vec{p} = \\frac{\\vec{a} + \\vec{b}}{2}$, $\\vec{q} = \\frac{\\vec{b} + \\vec{c}}{2}$, $\\vec{r} = \\frac{\\vec{c} + \\vec{d}}{2}$, $\\vec{s} = \\frac{\\vec{d} + \\vec{a}}{2}$. So $\\overrightarrow{PQ} = \\vec{q} - \\vec{p} = \\frac{\\vec{c} - \\vec{a}}{2}$ and $\\overrightarrow{SR} = \\vec{r} - \\vec{s} = \\frac{\\vec{c} - \\vec{a}}{2}$. Since $\\overrightarrow{PQ} = \\overrightarrow{SR}$, the sides $PQ$ and $SR$ are equal and parallel, so $PQRS$ is a parallelogram.',
    steps: [
      { step: 'Writes the position vectors of $P, Q, R, S$ by the mid-point formula', marks: 1 },
      { step: 'Shows $\\overrightarrow{PQ} = \\overrightarrow{SR} = \\frac{1}{2}(\\vec{c} - \\vec{a})$ and concludes', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b08', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 2,
    text: '$\\vec{a}$ and $\\vec{b}$ are non-collinear vectors. The points $A$, $B$, $C$ have position vectors $\\vec{a} - 2\\vec{b}$, $2\\vec{a} + \\vec{b}$ and $\\lambda\\vec{a} + 7\\vec{b}$. Find $\\lambda$ if $A$, $B$, $C$ are collinear.',
    answer: '$\\overrightarrow{AB} = \\vec{a} + 3\\vec{b}$ and $\\overrightarrow{AC} = (\\lambda - 1)\\vec{a} + 9\\vec{b}$. For collinearity $\\overrightarrow{AC} = t\\,\\overrightarrow{AB}$. Since $\\vec{a}, \\vec{b}$ are non-collinear we compare coefficients: $9 = 3t$ gives $t = 3$, and then $\\lambda - 1 = 3$, so $\\lambda = 4$.',
    steps: [
      { step: 'Writes $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ and sets $\\overrightarrow{AC} = t\\,\\overrightarrow{AB}$', marks: 1 },
      { step: 'Compares coefficients (valid as $\\vec{a}, \\vec{b}$ are non-collinear) to get $\\lambda = 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b09', chapter: C, topic: TS, type: 'short', complexity: 'easy', marks: 2,
    text: 'For $\\vec{a} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\vec{b} = 3\\hat{i} - 4\\hat{j}$, find the cosine of the angle between them and the projection of $\\vec{b}$ on $\\vec{a}$.',
    answer: '$\\vec{a} \\cdot \\vec{b} = 3 - 8 + 0 = -5$, $|\\vec{a}| = 3$ and $|\\vec{b}| = 5$. So $\\cos\\theta = \\frac{-5}{3 \\times 5} = -\\frac{1}{3}$. The projection of $\\vec{b}$ on $\\vec{a}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|} = -\\frac{5}{3}$.',
    steps: [
      { step: 'Finds $\\vec{a} \\cdot \\vec{b} = -5$ and $\\cos\\theta = -\\frac{1}{3}$', marks: 1 },
      { step: 'Gets the projection of $\\vec{b}$ on $\\vec{a}$ as $-\\frac{5}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b10', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: '$\\hat{a}$ and $\\hat{b}$ are unit vectors such that $\\hat{a} + 2\\hat{b}$ is perpendicular to $5\\hat{a} - 4\\hat{b}$. Find the angle between $\\hat{a}$ and $\\hat{b}$.',
    answer: '$(\\hat{a} + 2\\hat{b}) \\cdot (5\\hat{a} - 4\\hat{b}) = 5|\\hat{a}|^{2} - 4\\hat{a} \\cdot \\hat{b} + 10\\hat{a} \\cdot \\hat{b} - 8|\\hat{b}|^{2} = 5 + 6\\hat{a} \\cdot \\hat{b} - 8 = 0$. So $\\hat{a} \\cdot \\hat{b} = \\frac{1}{2}$, that is $\\cos\\theta = \\frac{1}{2}$, and the angle is $\\frac{\\pi}{3}$.',
    steps: [
      { step: 'Expands the dot product using $|\\hat{a}| = |\\hat{b}| = 1$ to get $6\\hat{a} \\cdot \\hat{b} - 3 = 0$', marks: 1 },
      { step: 'Gets $\\cos\\theta = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b11', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'A constant force $\\vec{F} = 3\\hat{i} + 2\\hat{j} - 4\\hat{k}$ (in newtons) moves a small block in a straight line from $A(1, -1, 2)$ to $B(3, 2, 1)$ (in metres). Find the work done by the force and the cosine of the angle between the force and the displacement.',
    answer: 'The displacement is $\\vec{d} = \\overrightarrow{AB} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$. Work done $= \\vec{F} \\cdot \\vec{d} = 6 + 6 + 4 = 16$ J. With $|\\vec{F}| = \\sqrt{29}$ and $|\\vec{d}| = \\sqrt{14}$, $\\cos\\theta = \\frac{16}{\\sqrt{29}\\sqrt{14}} = \\frac{16}{\\sqrt{406}}$.',
    steps: [
      { step: 'Finds $\\vec{d} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and work $\\vec{F} \\cdot \\vec{d} = 16$ J', marks: 1 },
      { step: 'Gets $\\cos\\theta = \\frac{16}{\\sqrt{406}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b12', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $|\\vec{a}| = |\\vec{b}| = 2$ and $|\\vec{a} + \\vec{b}| = 2\\sqrt{3}$, find the angle between $\\vec{a}$ and $\\vec{b}$ and the value of $|\\vec{a} - \\vec{b}|$.',
    answer: '$|\\vec{a} + \\vec{b}|^{2} = 4 + 4 + 2\\vec{a} \\cdot \\vec{b} = 12$, so $\\vec{a} \\cdot \\vec{b} = 2$ and $\\cos\\theta = \\frac{2}{2 \\times 2} = \\frac{1}{2}$, giving $\\theta = \\frac{\\pi}{3}$. Then $|\\vec{a} - \\vec{b}|^{2} = 4 + 4 - 2 \\times 2 = 4$, so $|\\vec{a} - \\vec{b}| = 2$.',
    steps: [
      { step: 'Expands $|\\vec{a} + \\vec{b}|^{2}$ to get $\\vec{a} \\cdot \\vec{b} = 2$ and the angle $\\frac{\\pi}{3}$', marks: 1 },
      { step: 'Finds $|\\vec{a} - \\vec{b}| = 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b13', chapter: C, topic: TV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the area of the parallelogram whose adjacent sides are $\\vec{a} = 3\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} - \\hat{k}$.',
    answer: '$\\vec{a} \\times \\vec{b} = [(-1)(-1) - (2)(2)]\\hat{i} - [(3)(-1) - (2)(1)]\\hat{j} + [(3)(2) - (-1)(1)]\\hat{k} = -3\\hat{i} + 5\\hat{j} + 7\\hat{k}$. Area $= |\\vec{a} \\times \\vec{b}| = \\sqrt{9 + 25 + 49} = \\sqrt{83}$ square units.',
    steps: [
      { step: 'Finds $\\vec{a} \\times \\vec{b} = -3\\hat{i} + 5\\hat{j} + 7\\hat{k}$', marks: 1 },
      { step: 'Gets the area $\\sqrt{83}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b14', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 2,
    text: 'In parallelogram $ABCD$, $\\overrightarrow{AB} = 2\\hat{i} + \\hat{j} - \\hat{k}$ and the diagonal $\\overrightarrow{AC} = 3\\hat{i} - \\hat{j} + 2\\hat{k}$. Find $\\overrightarrow{AD}$ and the area of the parallelogram.',
    answer: '$\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}$ and $\\overrightarrow{BC} = \\overrightarrow{AD}$, so $\\overrightarrow{AD} = \\overrightarrow{AC} - \\overrightarrow{AB} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$. $\\overrightarrow{AB} \\times \\overrightarrow{AD} = [(1)(3) - (-1)(-2)]\\hat{i} - [(2)(3) - (-1)(1)]\\hat{j} + [(2)(-2) - (1)(1)]\\hat{k} = \\hat{i} - 7\\hat{j} - 5\\hat{k}$, of magnitude $\\sqrt{75} = 5\\sqrt{3}$. Area $= 5\\sqrt{3}$ square units.',
    steps: [
      { step: 'Finds $\\overrightarrow{AD} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: 'Computes $\\overrightarrow{AB} \\times \\overrightarrow{AD}$ and gets the area $5\\sqrt{3}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b15', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $|\\vec{a}| = 2$, $|\\vec{b}| = 7$, $\\vec{a} \\times \\vec{b} = 3\\hat{i} + 2\\hat{j} + 6\\hat{k}$ and $\\vec{a} \\cdot \\vec{b} > 0$, find the angle between $\\vec{a}$ and $\\vec{b}$ and the value of $\\vec{a} \\cdot \\vec{b}$.',
    answer: '$|\\vec{a} \\times \\vec{b}| = \\sqrt{9 + 4 + 36} = 7$. So $\\sin\\theta = \\frac{7}{2 \\times 7} = \\frac{1}{2}$. As $\\vec{a} \\cdot \\vec{b} > 0$, the angle is acute, so $\\theta = \\frac{\\pi}{6}$. Then $\\vec{a} \\cdot \\vec{b} = 2 \\times 7 \\times \\cos\\frac{\\pi}{6} = 7\\sqrt{3}$.',
    steps: [
      { step: 'Finds $|\\vec{a} \\times \\vec{b}| = 7$ and $\\sin\\theta = \\frac{1}{2}$, choosing $\\theta = \\frac{\\pi}{6}$ from $\\vec{a} \\cdot \\vec{b} > 0$', marks: 1 },
      { step: 'Gets $\\vec{a} \\cdot \\vec{b} = 7\\sqrt{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-b16', chapter: C, topic: TV, type: 'short', complexity: 'hard', marks: 2,
    text: 'If $|\\vec{a}| = 5$, $|\\vec{b}| = 3$ and $|\\vec{a} \\times \\vec{b}| = 12$, find all possible values of $|\\vec{a} + \\vec{b}|$.',
    answer: '$\\sin\\theta = \\frac{12}{5 \\times 3} = \\frac{4}{5}$, so $\\cos\\theta = \\pm\\frac{3}{5}$ and $\\vec{a} \\cdot \\vec{b} = 15\\cos\\theta = \\pm 9$. Then $|\\vec{a} + \\vec{b}|^{2} = 25 + 9 + 2\\vec{a} \\cdot \\vec{b} = 34 \\pm 18$, which is $52$ or $16$. So $|\\vec{a} + \\vec{b}| = 2\\sqrt{13}$ (angle acute) or $4$ (angle obtuse).',
    steps: [
      { step: 'Gets $\\sin\\theta = \\frac{4}{5}$ and hence $\\vec{a} \\cdot \\vec{b} = \\pm 9$ (both signs)', marks: 1 },
      { step: 'Expands $|\\vec{a} + \\vec{b}|^{2}$ to get $2\\sqrt{13}$ or $4$', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-vec-r2-c01', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the vector $\\vec{r}$ for which $\\vec{r} \\cdot (\\hat{i} + \\hat{j}) = 3$, $\\vec{r} \\cdot (\\hat{j} + \\hat{k}) = 5$ and $\\vec{r} \\cdot (\\hat{i} + \\hat{k}) = 4$. Hence find the cosine of the angle between $\\vec{r}$ and $\\hat{i} + \\hat{j} + \\hat{k}$.',
    answer: 'Let $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$. The conditions give $x + y = 3$, $y + z = 5$, $x + z = 4$. Adding, $2(x + y + z) = 12$, so $x + y + z = 6$; hence $z = 3$, $x = 1$, $y = 2$ and $\\vec{r} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$.\nThen $\\vec{r} \\cdot (\\hat{i} + \\hat{j} + \\hat{k}) = 6$, $|\\vec{r}| = \\sqrt{14}$ and $|\\hat{i} + \\hat{j} + \\hat{k}| = \\sqrt{3}$, so $\\cos\\theta = \\frac{6}{\\sqrt{42}} = \\sqrt{\\frac{6}{7}}$.',
    steps: [
      { step: 'Writes the three linear equations $x + y = 3$, $y + z = 5$, $x + z = 4$', marks: 1 },
      { step: 'Solves to get $\\vec{r} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: 'Finds $\\cos\\theta = \\frac{6}{\\sqrt{42}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-c02', chapter: C, topic: TS, type: 'short', complexity: 'hard', marks: 3,
    text: 'In triangle $ABC$, $D$ is the mid-point of $BC$. Using the scalar product, prove that $AB^{2} + AC^{2} = 2(AD^{2} + BD^{2})$.',
    answer: 'Take $D$ as the origin. Let $\\overrightarrow{DB} = \\vec{u}$, so $\\overrightarrow{DC} = -\\vec{u}$ (as $D$ is the mid-point), and let $\\overrightarrow{DA} = \\vec{v}$.\nThen $\\overrightarrow{AB} = \\vec{u} - \\vec{v}$ and $\\overrightarrow{AC} = -\\vec{u} - \\vec{v}$.\n$AB^{2} + AC^{2} = (\\vec{u} - \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) + (\\vec{u} + \\vec{v}) \\cdot (\\vec{u} + \\vec{v}) = (|\\vec{u}|^{2} - 2\\vec{u} \\cdot \\vec{v} + |\\vec{v}|^{2}) + (|\\vec{u}|^{2} + 2\\vec{u} \\cdot \\vec{v} + |\\vec{v}|^{2}) = 2|\\vec{u}|^{2} + 2|\\vec{v}|^{2}$.\nSince $|\\vec{u}| = BD$ and $|\\vec{v}| = AD$, $AB^{2} + AC^{2} = 2(AD^{2} + BD^{2})$.',
    steps: [
      { step: 'Sets up vectors with $D$ as origin, $\\overrightarrow{DC} = -\\overrightarrow{DB}$, and writes $\\overrightarrow{AB}$, $\\overrightarrow{AC}$', marks: 1 },
      { step: 'Expands $|\\overrightarrow{AB}|^{2} + |\\overrightarrow{AC}|^{2}$ using dot products, the cross terms cancelling', marks: 1 },
      { step: 'Identifies $|\\vec{u}| = BD$, $|\\vec{v}| = AD$ and concludes', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-c03', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'The points $A(0, 1, 1)$, $B(1, 5, 0)$, $C(4, 5, 3)$ and $D(4, -1, 6)$ are the vertices, in order, of a plane convex quadrilateral $ABCD$. Using the fact that the area of such a quadrilateral is $\\frac{1}{2}|\\overrightarrow{AC} \\times \\overrightarrow{BD}|$, find its area, and check the answer by splitting it into triangles $ABC$ and $ACD$.',
    answer: '$\\overrightarrow{AC} = 4\\hat{i} + 4\\hat{j} + 2\\hat{k}$ and $\\overrightarrow{BD} = 3\\hat{i} - 6\\hat{j} + 6\\hat{k}$. $\\overrightarrow{AC} \\times \\overrightarrow{BD} = (24 + 12)\\hat{i} - (24 - 6)\\hat{j} + (-24 - 12)\\hat{k} = 36\\hat{i} - 18\\hat{j} - 36\\hat{k}$, of magnitude $\\sqrt{1296 + 324 + 1296} = 54$. Area $= 27$ square units.\nCheck: $\\overrightarrow{AB} = \\hat{i} + 4\\hat{j} - \\hat{k}$, $\\overrightarrow{AB} \\times \\overrightarrow{AC} = 12\\hat{i} - 6\\hat{j} - 12\\hat{k}$ (magnitude $18$), so area $ABC = 9$. $\\overrightarrow{AD} = 4\\hat{i} - 2\\hat{j} + 5\\hat{k}$, $\\overrightarrow{AC} \\times \\overrightarrow{AD} = 24\\hat{i} - 12\\hat{j} - 24\\hat{k}$ (magnitude $36$), so area $ACD = 18$. Total $9 + 18 = 27$ square units, as before.',
    steps: [
      { step: 'Finds $\\overrightarrow{AC}$, $\\overrightarrow{BD}$ and $\\overrightarrow{AC} \\times \\overrightarrow{BD} = 36\\hat{i} - 18\\hat{j} - 36\\hat{k}$', marks: 1 },
      { step: 'Gets the area $27$ square units', marks: 1 },
      { step: 'Checks with triangle areas $9$ and $18$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-c04', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 3,
    text: 'In triangle $ABC$, $D$ is a point on $AB$ and $E$ a point on $AC$ such that $AD : DB = AE : EC = 2 : 1$. Using position vectors, prove that $DE$ is parallel to $BC$ and $DE = \\frac{2}{3}BC$.',
    answer: 'Let the position vectors of $A, B, C$ be $\\vec{a}, \\vec{b}, \\vec{c}$. By the section formula (internal, $2 : 1$), $\\vec{d} = \\frac{2\\vec{b} + \\vec{a}}{3}$ and $\\vec{e} = \\frac{2\\vec{c} + \\vec{a}}{3}$.\nThen $\\overrightarrow{DE} = \\vec{e} - \\vec{d} = \\frac{2(\\vec{c} - \\vec{b})}{3} = \\frac{2}{3}\\overrightarrow{BC}$.\nSo $\\overrightarrow{DE}$ is a positive scalar multiple of $\\overrightarrow{BC}$: $DE \\parallel BC$ and $DE = \\frac{2}{3}BC$.',
    steps: [
      { step: 'Writes $\\vec{d}$ and $\\vec{e}$ by the section formula', marks: 1 },
      { step: 'Finds $\\overrightarrow{DE} = \\frac{2}{3}(\\vec{c} - \\vec{b})$', marks: 1 },
      { step: 'Concludes $DE \\parallel BC$ and $DE = \\frac{2}{3}BC$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-c05', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 3,
    text: 'The points $A(3, 0, 2)$, $B(1, -1, 0)$ and $C(1, 2, 4)$ are given. Find the unit vectors along $\\overrightarrow{BA}$ and $\\overrightarrow{BC}$, and hence find a unit vector along the internal bisector of $\\angle ABC$.',
    answer: '$\\overrightarrow{BA} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ with magnitude $3$, so its unit vector is $\\frac{1}{3}(2\\hat{i} + \\hat{j} + 2\\hat{k})$. $\\overrightarrow{BC} = 3\\hat{j} + 4\\hat{k}$ with magnitude $5$, so its unit vector is $\\frac{1}{5}(3\\hat{j} + 4\\hat{k})$.\nThe sum of two unit vectors lies along the bisector of the angle between them (it is the diagonal of a rhombus): $\\frac{2}{3}\\hat{i} + \\left(\\frac{1}{3} + \\frac{3}{5}\\right)\\hat{j} + \\left(\\frac{2}{3} + \\frac{4}{5}\\right)\\hat{k} = \\frac{2}{15}(5\\hat{i} + 7\\hat{j} + 11\\hat{k})$.\nSince $|5\\hat{i} + 7\\hat{j} + 11\\hat{k}| = \\sqrt{25 + 49 + 121} = \\sqrt{195}$, the unit vector along the bisector is $\\frac{1}{\\sqrt{195}}(5\\hat{i} + 7\\hat{j} + 11\\hat{k})$.',
    steps: [
      { step: 'Finds the unit vectors $\\frac{1}{3}(2\\hat{i} + \\hat{j} + 2\\hat{k})$ and $\\frac{1}{5}(3\\hat{j} + 4\\hat{k})$', marks: 1 },
      { step: 'Adds them, giving a vector along $5\\hat{i} + 7\\hat{j} + 11\\hat{k}$', marks: 1 },
      { step: 'Normalises to $\\frac{1}{\\sqrt{195}}(5\\hat{i} + 7\\hat{j} + 11\\hat{k})$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-vec-r2-d01', chapter: C, topic: TV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $\\vec{a} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\vec{b} = 4\\hat{i} + 3\\hat{k}$.\n(a) Find $\\cos\\theta$, where $\\theta$ is the angle between $\\vec{a}$ and $\\vec{b}$.\n(b) Find $\\vec{a} \\times \\vec{b}$ and verify that it is perpendicular to both $\\vec{a}$ and $\\vec{b}$.\n(c) Find $\\sin\\theta$ from $|\\vec{a} \\times \\vec{b}|$ and check that $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$.\n(d) Find the area of the triangle with adjacent sides $\\vec{a}$ and $\\vec{b}$, and the unit vectors perpendicular to its plane.',
    answer: '(a) $\\vec{a} \\cdot \\vec{b} = 4 + 0 + 6 = 10$, $|\\vec{a}| = 3$, $|\\vec{b}| = 5$, so $\\cos\\theta = \\frac{10}{15} = \\frac{2}{3}$.\n(b) $\\vec{a} \\times \\vec{b} = (6 - 0)\\hat{i} - (3 - 8)\\hat{j} + (0 - 8)\\hat{k} = 6\\hat{i} + 5\\hat{j} - 8\\hat{k}$. Check: $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 6 + 10 - 16 = 0$ and $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{b} = 24 + 0 - 24 = 0$.\n(c) $|\\vec{a} \\times \\vec{b}| = \\sqrt{36 + 25 + 64} = \\sqrt{125} = 5\\sqrt{5}$, so $\\sin\\theta = \\frac{5\\sqrt{5}}{15} = \\frac{\\sqrt{5}}{3}$. Then $\\sin^{2}\\theta + \\cos^{2}\\theta = \\frac{5}{9} + \\frac{4}{9} = 1$.\n(d) Area $= \\frac{1}{2}|\\vec{a} \\times \\vec{b}| = \\frac{5\\sqrt{5}}{2}$ square units. The unit vectors perpendicular to the plane are $\\pm\\frac{1}{5\\sqrt{5}}(6\\hat{i} + 5\\hat{j} - 8\\hat{k})$.',
    steps: [
      { step: '(a) Gets $\\cos\\theta = \\frac{2}{3}$', marks: 1 },
      { step: '(b) Finds $\\vec{a} \\times \\vec{b} = 6\\hat{i} + 5\\hat{j} - 8\\hat{k}$ and verifies both dot products are $0$', marks: 1 },
      { step: '(c) Gets $|\\vec{a} \\times \\vec{b}| = 5\\sqrt{5}$, $\\sin\\theta = \\frac{\\sqrt{5}}{3}$ and checks the identity', marks: 1 },
      { step: '(d) Gets the area $\\frac{5\\sqrt{5}}{2}$', marks: 1 },
      { step: '(d) Writes the unit normals $\\pm\\frac{1}{5\\sqrt{5}}(6\\hat{i} + 5\\hat{j} - 8\\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d02', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: '(a) The vertices $A$, $B$, $C$ of a triangle have position vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$. Prove that the area of the triangle is $\\frac{1}{2}|\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a}|$, and deduce a condition for $A$, $B$, $C$ to be collinear.\n(b) Use the formula to find the area of the triangle with vertices $(1, 0, 1)$, $(2, 1, 0)$ and $(0, 2, 3)$.\n(c) Use the condition to show that the points $(1, -1, 2)$, $(2, 1, 1)$ and $(4, 5, -1)$ are collinear.',
    answer: '(a) Area $= \\frac{1}{2}|\\overrightarrow{AB} \\times \\overrightarrow{AC}| = \\frac{1}{2}|(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a})|$. Expanding, $(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a}) = \\vec{b} \\times \\vec{c} - \\vec{b} \\times \\vec{a} - \\vec{a} \\times \\vec{c} + \\vec{a} \\times \\vec{a} = \\vec{b} \\times \\vec{c} + \\vec{a} \\times \\vec{b} + \\vec{c} \\times \\vec{a}$ (using $\\vec{a} \\times \\vec{a} = \\vec{0}$ and anti-commutativity). So area $= \\frac{1}{2}|\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a}|$. The points are collinear exactly when the area is zero, that is when $\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a} = \\vec{0}$.\n(b) $\\vec{a} = \\hat{i} + \\hat{k}$, $\\vec{b} = 2\\hat{i} + \\hat{j}$, $\\vec{c} = 2\\hat{j} + 3\\hat{k}$. $\\vec{a} \\times \\vec{b} = -\\hat{i} + 2\\hat{j} + \\hat{k}$, $\\vec{b} \\times \\vec{c} = 3\\hat{i} - 6\\hat{j} + 4\\hat{k}$, $\\vec{c} \\times \\vec{a} = 2\\hat{i} + 3\\hat{j} - 2\\hat{k}$. Sum $= 4\\hat{i} - \\hat{j} + 3\\hat{k}$, of magnitude $\\sqrt{26}$. Area $= \\frac{\\sqrt{26}}{2}$ square units.\n(c) $\\vec{a} = \\hat{i} - \\hat{j} + 2\\hat{k}$, $\\vec{b} = 2\\hat{i} + \\hat{j} + \\hat{k}$, $\\vec{c} = 4\\hat{i} + 5\\hat{j} - \\hat{k}$. $\\vec{a} \\times \\vec{b} = -3\\hat{i} + 3\\hat{j} + 3\\hat{k}$, $\\vec{b} \\times \\vec{c} = -6\\hat{i} + 6\\hat{j} + 6\\hat{k}$, $\\vec{c} \\times \\vec{a} = 9\\hat{i} - 9\\hat{j} - 9\\hat{k}$. The sum is $\\vec{0}$, so the points are collinear.',
    steps: [
      { step: '(a) Writes area $= \\frac{1}{2}|(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a})|$ and expands correctly to the cyclic sum', marks: 1 },
      { step: '(a) States the collinearity condition $\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{c} + \\vec{c} \\times \\vec{a} = \\vec{0}$', marks: 1 },
      { step: '(b) Computes the three cross products and their sum $4\\hat{i} - \\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: '(b) Gets the area $\\frac{\\sqrt{26}}{2}$ square units', marks: 1 },
      { step: '(c) Shows the cyclic sum is $\\vec{0}$ for the given points, so they are collinear', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d03', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: 'A triangular sail is fixed at the origin $O$ and at the point $P(2, 1, 2)$; its third corner $Q(1, \\lambda, 0)$ can be slid along a rail, so $\\lambda$ can vary (distances in metres).\n(a) For $\\lambda = 2$, find the area of the sail and a unit vector perpendicular to it.\n(b) Show that, for a general $\\lambda$, the area of the sail is $\\frac{1}{2}\\sqrt{8\\lambda^{2} - 4\\lambda + 5}$.\n(c) Find the value of $\\lambda$ for which the area is least, and the least area.\n(d) Find $\\lambda$ for which the sail has a right angle at $O$, and verify the area in this case using $\\frac{1}{2} \\times OP \\times OQ$.',
    answer: '(a) $\\overrightarrow{OP} \\times \\overrightarrow{OQ} = (2\\hat{i} + \\hat{j} + 2\\hat{k}) \\times (\\hat{i} + 2\\hat{j}) = (0 - 4)\\hat{i} - (0 - 2)\\hat{j} + (4 - 1)\\hat{k} = -4\\hat{i} + 2\\hat{j} + 3\\hat{k}$, of magnitude $\\sqrt{29}$. Area $= \\frac{\\sqrt{29}}{2}$ m$^{2}$; a unit normal is $\\frac{1}{\\sqrt{29}}(-4\\hat{i} + 2\\hat{j} + 3\\hat{k})$ (or its negative).\n(b) $\\overrightarrow{OP} \\times \\overrightarrow{OQ} = (2\\hat{i} + \\hat{j} + 2\\hat{k}) \\times (\\hat{i} + \\lambda\\hat{j}) = -2\\lambda\\,\\hat{i} + 2\\hat{j} + (2\\lambda - 1)\\hat{k}$. Its squared magnitude is $4\\lambda^{2} + 4 + 4\\lambda^{2} - 4\\lambda + 1 = 8\\lambda^{2} - 4\\lambda + 5$, so area $= \\frac{1}{2}\\sqrt{8\\lambda^{2} - 4\\lambda + 5}$.\n(c) $8\\lambda^{2} - 4\\lambda + 5 = 8\\left(\\lambda - \\frac{1}{4}\\right)^{2} + \\frac{9}{2}$ is least at $\\lambda = \\frac{1}{4}$, with value $\\frac{9}{2}$. Least area $= \\frac{1}{2}\\sqrt{\\frac{9}{2}} = \\frac{3}{2\\sqrt{2}} = \\frac{3\\sqrt{2}}{4}$ m$^{2}$.\n(d) A right angle at $O$ needs $\\overrightarrow{OP} \\cdot \\overrightarrow{OQ} = 2 + \\lambda = 0$, so $\\lambda = -2$. The formula gives $\\frac{1}{2}\\sqrt{32 + 8 + 5} = \\frac{1}{2}\\sqrt{45} = \\frac{3\\sqrt{5}}{2}$. Also $OP = 3$ and $OQ = \\sqrt{1 + 4} = \\sqrt{5}$, so $\\frac{1}{2} \\times 3 \\times \\sqrt{5} = \\frac{3\\sqrt{5}}{2}$ m$^{2}$, which agrees.',
    steps: [
      { step: '(a) Finds $\\overrightarrow{OP} \\times \\overrightarrow{OQ} = -4\\hat{i} + 2\\hat{j} + 3\\hat{k}$, area $\\frac{\\sqrt{29}}{2}$ and the unit normal', marks: 1 },
      { step: '(b) Finds the general cross product $-2\\lambda\\hat{i} + 2\\hat{j} + (2\\lambda - 1)\\hat{k}$ and the area expression', marks: 1 },
      { step: '(c) Minimises $8\\lambda^{2} - 4\\lambda + 5$ to get $\\lambda = \\frac{1}{4}$', marks: 1 },
      { step: '(c) Gets the least area $\\frac{3\\sqrt{2}}{4}$ m$^{2}$', marks: 1 },
      { step: '(d) Gets $\\lambda = -2$ from the zero dot product and verifies the area $\\frac{3\\sqrt{5}}{2}$ both ways', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d04', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'The vertices of a triangle are $A(2, -1, 1)$, $B(3, 1, 3)$ and $C(4, -4, 3)$.\n(a) Using the scalar product, show that the triangle is right-angled at $A$.\n(b) Find $\\cos B$ and $\\cos C$.\n(c) Find the projection of $\\overrightarrow{BC}$ on $\\overrightarrow{BA}$.\n(d) Find the area of the triangle.',
    answer: '(a) $\\overrightarrow{AB} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\overrightarrow{AC} = 2\\hat{i} - 3\\hat{j} + 2\\hat{k}$. $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2 - 6 + 4 = 0$, so $\\angle A = 90^{\\circ}$.\n(b) $|\\overrightarrow{AB}| = 3$, $|\\overrightarrow{AC}| = \\sqrt{17}$, $\\overrightarrow{BC} = \\hat{i} - 5\\hat{j}$, $|\\overrightarrow{BC}| = \\sqrt{26}$ (and $9 + 17 = 26$, as expected). $\\cos B = \\frac{\\overrightarrow{BA} \\cdot \\overrightarrow{BC}}{|\\overrightarrow{BA}||\\overrightarrow{BC}|} = \\frac{(-1)(1) + (-2)(-5) + 0}{3\\sqrt{26}} = \\frac{9}{3\\sqrt{26}} = \\frac{3}{\\sqrt{26}}$. $\\cos C = \\frac{\\overrightarrow{CA} \\cdot \\overrightarrow{CB}}{|\\overrightarrow{CA}||\\overrightarrow{CB}|} = \\frac{(-2)(-1) + (3)(5) + 0}{\\sqrt{17}\\sqrt{26}} = \\frac{17}{\\sqrt{17}\\sqrt{26}} = \\frac{\\sqrt{17}}{\\sqrt{26}}$.\n(c) Projection of $\\overrightarrow{BC}$ on $\\overrightarrow{BA}$ $= \\frac{\\overrightarrow{BC} \\cdot \\overrightarrow{BA}}{|\\overrightarrow{BA}|} = \\frac{9}{3} = 3$ (equal to $BA$, since the foot of the perpendicular from $C$ to line $BA$ is $A$ itself).\n(d) Area $= \\frac{1}{2} \\times AB \\times AC = \\frac{1}{2} \\times 3 \\times \\sqrt{17} = \\frac{3\\sqrt{17}}{2}$ square units.',
    steps: [
      { step: '(a) Finds $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ and shows their dot product is $0$', marks: 1 },
      { step: '(b) Gets $\\cos B = \\frac{3}{\\sqrt{26}}$', marks: 1 },
      { step: '(b) Gets $\\cos C = \\frac{\\sqrt{17}}{\\sqrt{26}}$', marks: 1 },
      { step: '(c) Gets the projection $3$', marks: 1 },
      { step: '(d) Gets the area $\\frac{3\\sqrt{17}}{2}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d05', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'In triangle $ABC$, let $a = BC$, $b = CA$, $c = AB$. Using vectors $\\vec{a} = \\overrightarrow{BC}$, $\\vec{b} = \\overrightarrow{CA}$, $\\vec{c} = \\overrightarrow{AB}$ and the scalar product, prove that\n(a) $c^{2} = a^{2} + b^{2} - 2ab\\cos C$ (the cosine rule);\n(b) $a = b\\cos C + c\\cos B$ (the projection formula).',
    answer: 'By the triangle law, $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$.\nPlaced tail to tail, $\\overrightarrow{BC}$ and $\\overrightarrow{CA}$ make the angle $\\pi - C$, so $\\vec{a} \\cdot \\vec{b} = ab\\cos(\\pi - C) = -ab\\cos C$. Similarly $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ make the angle $\\pi - B$, so $\\vec{a} \\cdot \\vec{c} = -ac\\cos B$.\n(a) $\\vec{c} = -(\\vec{a} + \\vec{b})$, so $c^{2} = \\vec{c} \\cdot \\vec{c} = (\\vec{a} + \\vec{b}) \\cdot (\\vec{a} + \\vec{b}) = a^{2} + b^{2} + 2\\vec{a} \\cdot \\vec{b} = a^{2} + b^{2} - 2ab\\cos C$.\n(b) Taking the dot product of $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$ with $\\vec{a}$: $a^{2} + \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c} = 0$, so $a^{2} = ab\\cos C + ac\\cos B$. Dividing by $a \\neq 0$: $a = b\\cos C + c\\cos B$.',
    steps: [
      { step: 'Writes $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$', marks: 1 },
      { step: 'Correctly uses the angles $\\pi - C$ and $\\pi - B$ to get $\\vec{a} \\cdot \\vec{b} = -ab\\cos C$ and $\\vec{a} \\cdot \\vec{c} = -ac\\cos B$', marks: 1 },
      { step: '(a) Squares $\\vec{c} = -(\\vec{a} + \\vec{b})$ to reach the cosine rule', marks: 1 },
      { step: '(b) Dots the triangle-law equation with $\\vec{a}$ to get $a^{2} = ab\\cos C + ac\\cos B$', marks: 1 },
      { step: '(b) Divides by $a$ to reach the projection formula', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d06', chapter: C, topic: TS, type: 'long', complexity: 'hard', marks: 5,
    text: 'Vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ have $|\\vec{a}| = 1$, $|\\vec{b}| = 2$ and $|\\vec{c}| = 3$. The projection of $\\vec{b}$ on $\\vec{a}$ equals the projection of $\\vec{c}$ on $\\vec{a}$, and $\\vec{b}$ is perpendicular to $\\vec{c}$.\n(a) Find $|3\\vec{a} - 2\\vec{b} + 2\\vec{c}|$.\n(b) If, in addition, $\\vec{a}$ is perpendicular to $\\vec{b} + \\vec{c}$, find $|\\vec{a} + \\vec{b} + \\vec{c}|$ and the angle between $\\vec{a} + \\vec{b} + \\vec{c}$ and $\\vec{c}$.',
    answer: '(a) Equal projections on $\\vec{a}$ mean $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|} = \\frac{\\vec{a} \\cdot \\vec{c}}{|\\vec{a}|}$, so $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$. Also $\\vec{b} \\cdot \\vec{c} = 0$.\n$|3\\vec{a} - 2\\vec{b} + 2\\vec{c}|^{2} = 9|\\vec{a}|^{2} + 4|\\vec{b}|^{2} + 4|\\vec{c}|^{2} - 12\\vec{a} \\cdot \\vec{b} + 12\\vec{a} \\cdot \\vec{c} - 8\\vec{b} \\cdot \\vec{c} = 9 + 16 + 36 + 12(\\vec{a} \\cdot \\vec{c} - \\vec{a} \\cdot \\vec{b}) - 0 = 61$. So $|3\\vec{a} - 2\\vec{b} + 2\\vec{c}| = \\sqrt{61}$.\n(b) $\\vec{a} \\cdot (\\vec{b} + \\vec{c}) = 0$ with $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$ gives $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c} = 0$. So the three vectors are mutually perpendicular and $|\\vec{a} + \\vec{b} + \\vec{c}|^{2} = 1 + 4 + 9 = 14$, giving $|\\vec{a} + \\vec{b} + \\vec{c}| = \\sqrt{14}$. Then $(\\vec{a} + \\vec{b} + \\vec{c}) \\cdot \\vec{c} = |\\vec{c}|^{2} = 9$, so $\\cos\\phi = \\frac{9}{3\\sqrt{14}} = \\frac{3}{\\sqrt{14}}$ and the angle is $\\cos^{-1}\\frac{3}{\\sqrt{14}}$.',
    steps: [
      { step: 'Translates the conditions into $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$ and $\\vec{b} \\cdot \\vec{c} = 0$', marks: 1 },
      { step: '(a) Expands $|3\\vec{a} - 2\\vec{b} + 2\\vec{c}|^{2}$ correctly with all cross terms', marks: 1 },
      { step: '(a) Gets $\\sqrt{61}$', marks: 1 },
      { step: '(b) Deduces $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c} = 0$ and $|\\vec{a} + \\vec{b} + \\vec{c}| = \\sqrt{14}$', marks: 1 },
      { step: '(b) Gets the angle $\\cos^{-1}\\frac{3}{\\sqrt{14}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d07', chapter: C, topic: TP, type: 'long', complexity: 'hard', marks: 5,
    text: '(a) $ABCD$ is a parallelogram and $E$ is the mid-point of $AB$. Using vectors, prove that the segment $DE$ meets the diagonal $AC$ at a point $P$ that trisects both: $AP = \\frac{1}{3}AC$ and $DP : PE = 2 : 1$.\n(b) For the parallelogram with $A(1, 0, 2)$, $B(5, 2, 4)$ and $D(2, 3, 1)$, find $C$ and the coordinates of $P$, and check that $P$ lies on $DE$.',
    answer: '(a) Take $A$ as origin, $\\overrightarrow{AB} = \\vec{b}$ and $\\overrightarrow{AD} = \\vec{d}$. Then $\\overrightarrow{AC} = \\vec{b} + \\vec{d}$ and $\\overrightarrow{AE} = \\frac{1}{2}\\vec{b}$.\nA point on $AC$ has position vector $\\lambda(\\vec{b} + \\vec{d})$. A point on $DE$ has position vector $\\vec{d} + \\mu\\left(\\frac{1}{2}\\vec{b} - \\vec{d}\\right) = \\frac{\\mu}{2}\\vec{b} + (1 - \\mu)\\vec{d}$.\nAt the intersection, since $\\vec{b}$ and $\\vec{d}$ are non-collinear, the coefficients match: $\\lambda = \\frac{\\mu}{2}$ and $\\lambda = 1 - \\mu$. So $\\mu = \\frac{2}{3}$ and $\\lambda = \\frac{1}{3}$.\nHence $\\overrightarrow{AP} = \\frac{1}{3}\\overrightarrow{AC}$, so $AP = \\frac{1}{3}AC$; and $\\overrightarrow{DP} = \\frac{2}{3}\\overrightarrow{DE}$, so $DP : PE = 2 : 1$.\n(b) $\\vec{c} = \\vec{b} + \\vec{d} - \\vec{a} = (5 + 2 - 1, 2 + 3 - 0, 4 + 1 - 2)$, so $C$ is $(6, 5, 3)$. $\\vec{p} = \\vec{a} + \\frac{1}{3}(\\vec{c} - \\vec{a}) = (1, 0, 2) + \\frac{1}{3}(5, 5, 1) = \\left(\\frac{8}{3}, \\frac{5}{3}, \\frac{7}{3}\\right)$. Check: $E = (3, 1, 3)$ and $\\vec{d} + \\frac{2}{3}(\\vec{e} - \\vec{d}) = (2, 3, 1) + \\frac{2}{3}(1, -2, 2) = \\left(\\frac{8}{3}, \\frac{5}{3}, \\frac{7}{3}\\right)$, the same point, so $P$ lies on $DE$.',
    steps: [
      { step: '(a) Sets up $A$ as origin with $\\vec{b}$, $\\vec{d}$ and writes general points on $AC$ and $DE$', marks: 1 },
      { step: '(a) Equates coefficients (non-collinear $\\vec{b}, \\vec{d}$) to get $\\lambda = \\frac{1}{3}$, $\\mu = \\frac{2}{3}$', marks: 1 },
      { step: '(a) Interprets as $AP = \\frac{1}{3}AC$ and $DP : PE = 2 : 1$', marks: 1 },
      { step: '(b) Finds $C(6, 5, 3)$ and $P\\left(\\frac{8}{3}, \\frac{5}{3}, \\frac{7}{3}\\right)$', marks: 1 },
      { step: '(b) Finds $E(3, 1, 3)$ and checks $P$ divides $DE$ in $2 : 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r2-d08', chapter: C, topic: TB, type: 'long', complexity: 'medium', marks: 5,
    text: 'A vector $\\vec{r}$ makes angles $\\alpha$, $\\beta$, $\\gamma$ with the positive $x$-, $y$- and $z$-axes.\n(a) Prove that $\\cos^{2}\\alpha + \\cos^{2}\\beta + \\cos^{2}\\gamma = 1$, and deduce that $\\sin^{2}\\alpha + \\sin^{2}\\beta + \\sin^{2}\\gamma = 2$.\n(b) Find all vectors of magnitude $6$ for which $\\alpha = \\beta$ and $\\gamma = \\frac{\\pi}{4}$.\n(c) Show that the vectors found in (b) are perpendicular to each other.',
    answer: '(a) Let $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$ with $|\\vec{r}| = r$. Then $\\cos\\alpha = \\frac{\\vec{r} \\cdot \\hat{i}}{r} = \\frac{x}{r}$, and similarly $\\cos\\beta = \\frac{y}{r}$, $\\cos\\gamma = \\frac{z}{r}$. So $\\cos^{2}\\alpha + \\cos^{2}\\beta + \\cos^{2}\\gamma = \\frac{x^{2} + y^{2} + z^{2}}{r^{2}} = 1$. Then $\\sin^{2}\\alpha + \\sin^{2}\\beta + \\sin^{2}\\gamma = 3 - (\\cos^{2}\\alpha + \\cos^{2}\\beta + \\cos^{2}\\gamma) = 2$.\n(b) With $\\gamma = \\frac{\\pi}{4}$, $\\cos^{2}\\gamma = \\frac{1}{2}$, so $2\\cos^{2}\\alpha = \\frac{1}{2}$ and $\\cos\\alpha = \\cos\\beta = \\pm\\frac{1}{2}$ (equal, since $\\alpha = \\beta$). The vectors are $6\\left(\\frac{1}{2}\\hat{i} + \\frac{1}{2}\\hat{j} + \\frac{1}{\\sqrt{2}}\\hat{k}\\right) = 3\\hat{i} + 3\\hat{j} + 3\\sqrt{2}\\,\\hat{k}$ and $6\\left(-\\frac{1}{2}\\hat{i} - \\frac{1}{2}\\hat{j} + \\frac{1}{\\sqrt{2}}\\hat{k}\\right) = -3\\hat{i} - 3\\hat{j} + 3\\sqrt{2}\\,\\hat{k}$.\n(c) Their dot product is $-9 - 9 + 18 = 0$, so they are perpendicular.',
    steps: [
      { step: '(a) Expresses $\\cos\\alpha, \\cos\\beta, \\cos\\gamma$ as $\\frac{x}{r}, \\frac{y}{r}, \\frac{z}{r}$ and proves the identity', marks: 1 },
      { step: '(a) Deduces the sine-squared sum is $2$', marks: 1 },
      { step: '(b) Gets $\\cos\\alpha = \\cos\\beta = \\pm\\frac{1}{2}$', marks: 1 },
      { step: '(b) Writes both vectors $\\pm 3\\hat{i} \\pm 3\\hat{j} + 3\\sqrt{2}\\,\\hat{k}$ (same signs on $\\hat{i}$ and $\\hat{j}$)', marks: 1 },
      { step: '(c) Shows their dot product is $0$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-vec-r2-e01', chapter: C, topic: TS, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a warehouse, a robot pushes a crate up a straight ramp from the point $A(1, 2, 0)$ to the point $B(5, 4, 4)$, with distances in metres. Throughout the motion the robot applies a constant force $\\vec{F} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ newtons. The work done by a constant force is the scalar product of the force and the displacement.',
    answer: '(i) $4\\hat{i} + 2\\hat{j} + 4\\hat{k}$, length $6$ m. (ii) $38$ J. (iii) $\\cos^{-1}\\frac{19}{21}$; OR $\\frac{19}{3}$ N.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the displacement vector of the crate and its length.',
        answer: '$\\vec{d} = \\overrightarrow{AB} = 4\\hat{i} + 2\\hat{j} + 4\\hat{k}$, with length $\\sqrt{16 + 4 + 16} = 6$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the work done by the robot.',
        answer: '$W = \\vec{F} \\cdot \\vec{d} = 8 + 6 + 24 = 38$ J.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the angle between the applied force and the displacement.\nOR\nFind the component (scalar projection) of the force along the direction of motion.',
        answer: '$|\\vec{F}| = \\sqrt{4 + 9 + 36} = 7$ and $|\\vec{d}| = 6$ (1 mark). $\\cos\\theta = \\frac{38}{7 \\times 6} = \\frac{19}{21}$, so $\\theta = \\cos^{-1}\\frac{19}{21}$ (1 mark).\nOR\nThe component is $\\frac{\\vec{F} \\cdot \\vec{d}}{|\\vec{d}|}$ (1 mark) $= \\frac{38}{6} = \\frac{19}{3}$ N (1 mark).',
      },
    ],
  },
  {
    id: 'c12-vec-r2-e02', chapter: C, topic: TB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery drone takes off from its base at the origin $O$ and flies in a straight line to a rooftop point $A(6, 2, 3)$. After picking up a parcel it flies straight to a balcony at $B(10, -2, 5)$. Distances are in metres, and the $z$-axis points vertically upward.',
    answer: '(i) $7$ m. (ii) $\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}$. (iii) $\\cos^{-1}\\frac{11}{21}$; OR $(22, 2, 11)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'How far is the rooftop point $A$ from the base?',
        answer: '$|\\overrightarrow{OA}| = \\sqrt{36 + 4 + 9} = 7$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the direction cosines of the second leg $\\overrightarrow{AB}$.',
        answer: '$\\overrightarrow{AB} = 4\\hat{i} - 4\\hat{j} + 2\\hat{k}$ with length $6$, so the direction cosines are $\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the angle through which the drone turns at $A$, that is, the angle between the directions $\\overrightarrow{OA}$ and $\\overrightarrow{AB}$.\nOR\nFrom $B$ the drone flies $14$ m in the direction of $\\overrightarrow{OA}$. Find its new position.',
        answer: '$\\overrightarrow{OA} \\cdot \\overrightarrow{AB} = 24 - 8 + 6 = 22$ (1 mark). $\\cos\\theta = \\frac{22}{7 \\times 6} = \\frac{11}{21}$, so the angle is $\\cos^{-1}\\frac{11}{21}$ (1 mark).\nOR\nThe unit vector along $\\overrightarrow{OA}$ is $\\frac{1}{7}(6\\hat{i} + 2\\hat{j} + 3\\hat{k})$, so the displacement is $14 \\times$ that $= 12\\hat{i} + 4\\hat{j} + 6\\hat{k}$ (1 mark). New position $= (10 + 12, -2 + 4, 5 + 6) = (22, 2, 11)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-vec-r2-e03', chapter: C, topic: TP, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A straight water pipeline runs from a pump at $P(2, -1, 3)$ to a tank at $Q(8, 5, -6)$, with distances in metres; the ground is the plane $z = 0$. Two valves are fitted at the points that divide $PQ$ into three equal parts, and the pipe may later be extended beyond $Q$ along the same line.',
    answer: '(i) $3\\sqrt{17}$ m. (ii) $(4, 1, 0)$ and $(6, 3, -3)$. (iii) $R(10, 7, -9)$ with $QR = \\frac{1}{3}PQ$; OR ratio $1 : 2$ at $(4, 1, 0)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the length of the pipeline $PQ$.',
        answer: '$\\overrightarrow{PQ} = 6\\hat{i} + 6\\hat{j} - 9\\hat{k}$, so $PQ = \\sqrt{36 + 36 + 81} = \\sqrt{153} = 3\\sqrt{17}$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the positions of the two valves.',
        answer: 'They divide $PQ$ internally in $1 : 2$ and $2 : 1$: $\\frac{2\\vec{p} + \\vec{q}}{3} = (4, 1, 0)$ and $\\frac{\\vec{p} + 2\\vec{q}}{3} = (6, 3, -3)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The extended pipe ends at the point $R$ that divides $PQ$ externally in the ratio $4 : 1$. Find $R$ and show that $QR$ equals the spacing between the valves.\nOR\nFind the ratio in which the ground $z = 0$ divides $PQ$, and the point where the pipe meets the ground.',
        answer: '$\\vec{r} = \\frac{4\\vec{q} - \\vec{p}}{4 - 1} = \\frac{(32 - 2, 20 + 1, -24 - 3)}{3} = (10, 7, -9)$ (1 mark). $\\overrightarrow{QR} = 2\\hat{i} + 2\\hat{j} - 3\\hat{k} = \\frac{1}{3}\\overrightarrow{PQ}$, so $QR = \\sqrt{17}$ m, the same as the spacing between valves (1 mark).\nOR\nFor ratio $k : 1$, the $z$-coordinate $\\frac{-6k + 3}{k + 1} = 0$ gives $k = \\frac{1}{2}$, so the ratio is $1 : 2$ internally (1 mark). The point is $\\frac{2\\vec{p} + \\vec{q}}{3} = (4, 1, 0)$, which is the first valve (1 mark).',
      },
    ],
  },
  {
    id: 'c12-vec-r2-e04', chapter: C, topic: TV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A triangular solar panel is mounted with its corners at $A(4, 0, 0)$, $B(0, 4, 0)$ and $C(0, 0, 2)$, with distances in metres and the $z$-axis pointing vertically upward. The panel collects the most energy when sunlight falls along the direction perpendicular to its surface.',
    answer: '(i) $\\overrightarrow{AB} = -4\\hat{i} + 4\\hat{j}$, $\\overrightarrow{AC} = -4\\hat{i} + 2\\hat{k}$. (ii) $8\\hat{i} + 8\\hat{j} + 16\\hat{k}$. (iii) $4\\sqrt{6}$ m$^{2}$; OR $\\cos^{-1}\\frac{2}{\\sqrt{6}}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the vectors $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ along two edges of the panel.',
        answer: '$\\overrightarrow{AB} = -4\\hat{i} + 4\\hat{j}$ and $\\overrightarrow{AC} = -4\\hat{i} + 2\\hat{k}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\overrightarrow{AB} \\times \\overrightarrow{AC}$.',
        answer: '$\\overrightarrow{AB} \\times \\overrightarrow{AC} = (8 - 0)\\hat{i} - (-8 - 0)\\hat{j} + (0 + 16)\\hat{k} = 8\\hat{i} + 8\\hat{j} + 16\\hat{k}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area of the panel.\nOR\nFind the angle that the direction perpendicular to the panel (pointing upward) makes with the vertical.',
        answer: '$|8\\hat{i} + 8\\hat{j} + 16\\hat{k}| = \\sqrt{64 + 64 + 256} = \\sqrt{384} = 8\\sqrt{6}$ (1 mark). Area $= \\frac{1}{2} \\times 8\\sqrt{6} = 4\\sqrt{6}$ m$^{2}$ (1 mark).\nOR\nThe upward unit normal is $\\frac{1}{\\sqrt{6}}(\\hat{i} + \\hat{j} + 2\\hat{k})$ (1 mark). Its dot product with $\\hat{k}$ is $\\frac{2}{\\sqrt{6}}$, so the angle is $\\cos^{-1}\\frac{2}{\\sqrt{6}} = \\cos^{-1}\\sqrt{\\frac{2}{3}}$ (1 mark).',
      },
    ],
  },
];
