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

export const CH10_VEC_R3: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────
  {
    id: 'c12-vec-r3-a01', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $p$ for which $\\frac{1}{7}(2\\hat{i} + 3\\hat{j} + p\\hat{k})$ is a unit vector is',
    options: ['$6$', '$\\pm 6$', '$\\pm 36$', '$\\sqrt{6}$'],
    answer: 'Correct option: B) $\\pm 6$. A unit vector has magnitude $1$, so $\\frac{1}{7}\\sqrt{4 + 9 + p^{2}} = 1$, giving $p^{2} = 36$ and $p = \\pm 6$. Option A misses the negative root.',
  },
  {
    id: 'c12-vec-r3-a02', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $\\vec{a} = \\hat{i} + \\hat{j}$, $\\vec{b} = \\hat{j} + \\hat{k}$ and $\\vec{c} = \\hat{k} + \\hat{i}$. Then $|\\vec{a} + \\vec{b} + \\vec{c}|$ equals',
    options: ['$3\\sqrt{2}$', '$2\\sqrt{3}$', '$6$', '$\\sqrt{3}$'],
    answer: 'Correct option: B) $2\\sqrt{3}$. The sum is $2\\hat{i} + 2\\hat{j} + 2\\hat{k}$, whose magnitude is $\\sqrt{4 + 4 + 4} = 2\\sqrt{3}$. Option A adds the three magnitudes instead, which is only valid if the vectors are parallel.',
  },
  {
    id: 'c12-vec-r3-a03', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $|\\vec{a}| = 5$ and $|\\vec{b}| = 12$, which of the following can NOT be the value of $|\\vec{a} + \\vec{b}|$?',
    options: ['$17$', '$13$', '$7$', '$6$'],
    answer: 'Correct option: D) $6$. For any two vectors, $\\big||\\vec{a}| - |\\vec{b}|\\big| \\le |\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$, so $|\\vec{a} + \\vec{b}|$ lies between $7$ and $17$. The value $6$ is outside this range; $17$ and $7$ occur for parallel vectors and $13$ for perpendicular ones.',
  },
  {
    id: 'c12-vec-r3-a04', chapter: C, topic: TB, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'A vector of magnitude $6\\sqrt{3}$ has direction cosines equal in magnitude, makes an obtuse angle with the positive $x$-axis and acute angles with the positive $y$- and $z$-axes. The vector is',
    options: ['$6\\hat{i} + 6\\hat{j} + 6\\hat{k}$', '$-6\\hat{i} + 6\\hat{j} + 6\\hat{k}$', '$-2\\hat{i} + 2\\hat{j} + 2\\hat{k}$', '$-6\\sqrt{3}\\hat{i} + 6\\sqrt{3}\\hat{j} + 6\\sqrt{3}\\hat{k}$'],
    answer: 'Correct option: B) $-6\\hat{i} + 6\\hat{j} + 6\\hat{k}$. Equal magnitudes with $l^{2} + m^{2} + n^{2} = 1$ give $|l| = |m| = |n| = \\frac{1}{\\sqrt{3}}$, with $l < 0$ and $m, n > 0$. The vector is $6\\sqrt{3}\\left(-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}\\right)$. Option A has the right magnitude but the wrong sign for $l$; options C and D have the wrong magnitudes ($2\\sqrt{3}$ and $18$).',
  },
  {
    id: 'c12-vec-r3-a05', chapter: C, topic: TB, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): A line can make angles $30^{\\circ}$, $60^{\\circ}$ and $60^{\\circ}$ with the three coordinate axes.\nReason (R): The direction cosines $l, m, n$ of any line satisfy $l^{2} + m^{2} + n^{2} = 1$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. (R) is the standard identity. Using it, $\\cos^{2}30^{\\circ} + \\cos^{2}60^{\\circ} + \\cos^{2}60^{\\circ} = \\frac{3}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{5}{4} \\ne 1$, so no line has these angles and (A) is false.',
  },
  {
    id: 'c12-vec-r3-a06', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The centroid of the triangle with vertices $A(1, 2, 3)$, $B(4, -2, 0)$ and $C(-2, 6, 3)$ is',
    options: ['$(1, 2, 2)$', '$(3, 6, 6)$', '$(1, 2, 3)$', '$(2, 4, 4)$'],
    answer: 'Correct option: A) $(1, 2, 2)$. The centroid is the mean of the vertices: $\\left(\\frac{1 + 4 - 2}{3}, \\frac{2 - 2 + 6}{3}, \\frac{3 + 0 + 3}{3}\\right) = (1, 2, 2)$. Option B forgets to divide by $3$.',
  },
  {
    id: 'c12-vec-r3-a07', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Points $A$ and $B$ have position vectors $\\vec{a}$ and $\\vec{b}$. The point $C$ with position vector $\\frac{3\\vec{a} - \\vec{b}}{2}$ divides $AB$',
    options: ['internally in the ratio $1 : 3$', 'externally in the ratio $1 : 3$', 'externally in the ratio $3 : 1$', 'internally in the ratio $3 : 1$'],
    answer: 'Correct option: B) externally in the ratio $1 : 3$. For external division in the ratio $m : n$ the position vector is $\\frac{m\\vec{b} - n\\vec{a}}{m - n}$. With $m = 1$, $n = 3$ this is $\\frac{\\vec{b} - 3\\vec{a}}{-2} = \\frac{3\\vec{a} - \\vec{b}}{2}$. The minus sign inside the numerator shows the division is external.',
  },
  {
    id: 'c12-vec-r3-a08', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The mid-points of the sides $BC$, $CA$ and $AB$ of a triangle $ABC$ are $D(2, 1, 3)$, $E(3, -1, 2)$ and $F(1, 2, 0)$. The vertex $A$ is',
    options: ['$(6, 2, 5)$', '$(4, -2, 5)$', '$(2, 0, -1)$', '$\\left(2, \\frac{1}{2}, 1\\right)$'],
    answer: 'Correct option: C) $(2, 0, -1)$. $AFDE$ is a parallelogram (the medial triangle construction), so $\\vec{A} = \\vec{E} + \\vec{F} - \\vec{D} = (3 + 1 - 2,\\, -1 + 2 - 1,\\, 2 + 0 - 3) = (2, 0, -1)$. Option D is the mid-point of $EF$ and option A is $D + E + F$.',
  },
  {
    id: 'c12-vec-r3-a09', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A point $P$ divides the segment $AB$ of length $15$ units internally in the ratio $2 : 3$. The length $AP$ is',
    options: ['$9$', '$10$', '$5$', '$6$'],
    answer: 'Correct option: D) $6$. $AP : PB = 2 : 3$ means $AP = \\frac{2}{2 + 3} \\times 15 = 6$. Option A is $PB$, and options B and C come from using $\\frac{2}{3}$ and $\\frac{1}{3}$ of the length.',
  },
  {
    id: 'c12-vec-r3-a10', chapter: C, topic: TP, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The points $A(1, 0, 2)$, $B(2, 2, 3)$ and $C(4, 6, 6)$ are collinear.\nReason (R): Three points $A$, $B$, $C$ are collinear if $\\overrightarrow{AC} = k\\,\\overrightarrow{AB}$ for some scalar $k$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. (R) is the correct collinearity test. Here $\\overrightarrow{AB} = (1, 2, 1)$ and $\\overrightarrow{AC} = (3, 6, 4)$; the first two components suggest $k = 3$ but the third gives $\\frac{4}{1} \\ne 3$, so $\\overrightarrow{AC}$ is not a multiple of $\\overrightarrow{AB}$ and the points are not collinear.',
  },
  {
    id: 'c12-vec-r3-a11', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The vectors $\\vec{a}$ and $\\vec{b}$ have equal magnitudes and $\\vec{a} \\cdot \\vec{b} = \\frac{1}{2}|\\vec{a}|^{2}$. The angle between them is',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: C) $\\frac{\\pi}{3}$. $\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|} = \\frac{\\frac{1}{2}|\\vec{a}|^{2}}{|\\vec{a}|^{2}} = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$.',
  },
  {
    id: 'c12-vec-r3-a12', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For non-zero vectors $\\vec{a}$ and $\\vec{b}$, the equation $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$ holds exactly when',
    options: ['$\\vec{a}$ is parallel to $\\vec{b}$', '$\\vec{a}$ is perpendicular to $\\vec{b}$', '$|\\vec{a}| = |\\vec{b}|$', '$\\vec{a} = \\vec{b}$'],
    answer: 'Correct option: B) $\\vec{a}$ is perpendicular to $\\vec{b}$. Squaring, $|\\vec{a}|^{2} + 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^{2} = |\\vec{a}|^{2} - 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^{2}$, so $4\\,\\vec{a} \\cdot \\vec{b} = 0$. (Both diagonals of a parallelogram are equal only for a rectangle.)',
  },
  {
    id: 'c12-vec-r3-a13', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The scalar projection of $\\vec{a} = \\lambda\\hat{i} + \\hat{j} - 2\\hat{k}$ on $\\vec{b} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ is $2$. Then $\\lambda$ equals',
    options: ['$4$', '$6$', '$8$', '$-4$'],
    answer: 'Correct option: C) $8$. $\\vec{a} \\cdot \\vec{b} = \\lambda + 2 - 4 = \\lambda - 2$ and $|\\vec{b}| = 3$, so $\\frac{\\lambda - 2}{3} = 2$ and $\\lambda = 8$. Option A forgets to divide by $|\\vec{b}|$.',
  },
  {
    id: 'c12-vec-r3-a14', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A vector $\\vec{a}$ satisfies $\\vec{a} \\cdot \\hat{i} = 1$, $\\vec{a} \\cdot (\\hat{i} + \\hat{j}) = 3$ and $\\vec{a} \\cdot (\\hat{i} + \\hat{j} + \\hat{k}) = 6$. Then $\\vec{a}$ is',
    options: ['$\\hat{i} + 3\\hat{j} + 6\\hat{k}$', '$6\\hat{i} + 3\\hat{j} + \\hat{k}$', '$\\hat{i} + 2\\hat{j} + 3\\hat{k}$', '$3\\hat{i} + 2\\hat{j} + \\hat{k}$'],
    answer: 'Correct option: C) $\\hat{i} + 2\\hat{j} + 3\\hat{k}$. Write $\\vec{a} = x\\hat{i} + y\\hat{j} + z\\hat{k}$. Then $x = 1$, $x + y = 3$ and $x + y + z = 6$, so $y = 2$ and $z = 3$. Option A reads the three right-hand sides as the components themselves.',
  },
  {
    id: 'c12-vec-r3-a15', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The angle between vectors $\\vec{a}$ and $\\vec{b}$ is $120^{\\circ}$, $|\\vec{a}| = 2$ and $|\\vec{b}| = 3$. Then $\\vec{a} \\cdot (\\vec{a} + \\vec{b})$ equals',
    options: ['$7$', '$10$', '$1$', '$-3$'],
    answer: 'Correct option: C) $1$. $\\vec{a} \\cdot (\\vec{a} + \\vec{b}) = |\\vec{a}|^{2} + \\vec{a} \\cdot \\vec{b} = 4 + (2)(3)\\cos 120^{\\circ} = 4 - 3 = 1$. Option A uses $\\cos 120^{\\circ} = +\\frac{1}{2}$ and option D is $\\vec{a} \\cdot \\vec{b}$ alone.',
  },
  {
    id: 'c12-vec-r3-a16', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{b} = 2\\hat{j} - \\hat{k}$, then $\\vec{a} \\times \\vec{b}$ is',
    options: ['$3\\hat{i} - \\hat{j} - 2\\hat{k}$', '$-3\\hat{i} + \\hat{j} + 2\\hat{k}$', '$-3\\hat{i} - \\hat{j} + 2\\hat{k}$', '$\\hat{i} + \\hat{j} - \\hat{k}$'],
    answer: 'Correct option: B) $-3\\hat{i} + \\hat{j} + 2\\hat{k}$. Expanding the determinant: $\\hat{i}(1 \\cdot (-1) - 1 \\cdot 2) - \\hat{j}(1 \\cdot (-1) - 1 \\cdot 0) + \\hat{k}(1 \\cdot 2 - 1 \\cdot 0) = -3\\hat{i} + \\hat{j} + 2\\hat{k}$. Option A is $\\vec{b} \\times \\vec{a}$ and option C forgets the sign of the $\\hat{j}$ term.',
  },
  {
    id: 'c12-vec-r3-a17', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Non-zero vectors $\\vec{a}$ and $\\vec{b}$ satisfy $\\vec{a} \\times \\vec{b} = \\vec{0}$, with $|\\vec{a}| = 2$ and $|\\vec{b}| = 3$. Then $\\vec{a} \\cdot \\vec{b}$ equals',
    options: ['$6$', '$-6$', '$6$ or $-6$', '$0$'],
    answer: 'Correct option: C) $6$ or $-6$. A zero cross product means the vectors are parallel ($\\sin\\theta = 0$), so $\\theta = 0$ or $\\pi$ and $\\vec{a} \\cdot \\vec{b} = (2)(3)\\cos\\theta = \\pm 6$. Options A and B each cover only one of the two possible directions.',
  },
  {
    id: 'c12-vec-r3-a18', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the triangle with vertices $A(4, 3, 2)$, $B(1, 1, 2)$ and $C(1, 3, 1)$ is',
    options: ['$7$', '$\\frac{7}{2}$', '$\\sqrt{7}$', '$\\frac{\\sqrt{13}}{2}$'],
    answer: 'Correct option: B) $\\frac{7}{2}$. $\\overrightarrow{AB} = (-3, -2, 0)$ and $\\overrightarrow{AC} = (-3, 0, -1)$, so $\\overrightarrow{AB} \\times \\overrightarrow{AC} = 2\\hat{i} - 3\\hat{j} - 6\\hat{k}$ with magnitude $\\sqrt{4 + 9 + 36} = 7$. The triangle has half this area. Option A is the parallelogram area.',
  },
  {
    id: 'c12-vec-r3-a19', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the triangle with vertices $A(1, 1, 1)$, $B(2, 3, 4)$ and $C(4, 7, 10)$ is',
    options: ['$\\frac{\\sqrt{14}}{2}$', '$\\sqrt{14}$', '$0$', '$\\frac{3\\sqrt{14}}{2}$'],
    answer: 'Correct option: C) $0$. $\\overrightarrow{AB} = (1, 2, 3)$ and $\\overrightarrow{AC} = (3, 6, 9) = 3\\,\\overrightarrow{AB}$, so $\\overrightarrow{AB} \\times \\overrightarrow{AC} = \\vec{0}$. The points are collinear and enclose no area.',
  },
  {
    id: 'c12-vec-r3-a20', chapter: C, topic: TV, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The parallelogram with adjacent sides $2\\hat{i} + 3\\hat{j}$ and $4\\hat{i} + 6\\hat{j}$ has zero area.\nReason (R): The area of a parallelogram with adjacent sides $\\vec{a}$ and $\\vec{b}$ is $|\\vec{a} \\times \\vec{b}|$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and (R) explains (A). (R) is the area formula. Here $4\\hat{i} + 6\\hat{j} = 2(2\\hat{i} + 3\\hat{j})$, so the sides are parallel, their cross product is $\\vec{0}$, and by (R) the area is $0$.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-vec-r3-b01', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $\\vec{a} = 2\\hat{i} + \\hat{j} - \\hat{k}$ and $\\vec{b} = -2\\hat{i} + 4\\hat{j} + \\hat{k}$. Find the unit vector in the direction of $2\\vec{a} - \\vec{b}$.',
    answer: '$2\\vec{a} - \\vec{b} = (4\\hat{i} + 2\\hat{j} - 2\\hat{k}) - (-2\\hat{i} + 4\\hat{j} + \\hat{k}) = 6\\hat{i} - 2\\hat{j} - 3\\hat{k}$. Its magnitude is $\\sqrt{36 + 4 + 9} = 7$. The required unit vector is $\\frac{1}{7}(6\\hat{i} - 2\\hat{j} - 3\\hat{k})$.',
    steps: [
      { step: 'Computes $2\\vec{a} - \\vec{b} = 6\\hat{i} - 2\\hat{j} - 3\\hat{k}$', marks: 1 },
      { step: 'Finds the magnitude $7$ and divides to get $\\frac{1}{7}(6\\hat{i} - 2\\hat{j} - 3\\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-b02', chapter: C, topic: TB, type: 'short', complexity: 'easy', marks: 2,
    text: 'On a map, $\\hat{i}$ points east and $\\hat{j}$ points north. A cyclist rides $12$ km due east and then $5$ km due north. Write her resultant displacement as a vector, and find its magnitude and the unit vector along it.',
    answer: 'The resultant displacement is $12\\hat{i} + 5\\hat{j}$ (in km). Its magnitude is $\\sqrt{144 + 25} = 13$ km. The unit vector along it is $\\frac{1}{13}(12\\hat{i} + 5\\hat{j})$.',
    steps: [
      { step: 'Adds the two displacements to get $12\\hat{i} + 5\\hat{j}$', marks: 1 },
      { step: 'Finds magnitude $13$ km and unit vector $\\frac{1}{13}(12\\hat{i} + 5\\hat{j})$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-b03', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 2,
    text: 'The points $A$ and $B$ have coordinates $(4, 1, -2)$ and $(1, -2, 4)$. Find the coordinates of every point $P$ on the line $AB$ with $AP = 2\\,PB$.',
    answer: 'Two points satisfy $AP = 2PB$. Internally, $P$ divides $AB$ in the ratio $2 : 1$: $P = \\frac{1\\cdot(4, 1, -2) + 2\\cdot(1, -2, 4)}{3} = (2, -1, 2)$. Externally, $P$ divides $AB$ in the ratio $2 : 1$: $P = \\frac{2\\cdot(1, -2, 4) - 1\\cdot(4, 1, -2)}{2 - 1} = (-2, -5, 10)$. The points are $(2, -1, 2)$ and $(-2, -5, 10)$.',
    steps: [
      { step: 'Recognises two cases (internal and external division in the ratio $2 : 1$) and gets the internal point $(2, -1, 2)$', marks: 1 },
      { step: 'Uses the external section formula to get $(-2, -5, 10)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-b04', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using vectors, show that the triangle with vertices $A(1, 0, 2)$, $B(2, 2, 0)$ and $C(3, -2, 1)$ is an isosceles right-angled triangle.',
    answer: '$\\overrightarrow{AB} = (1, 2, -2)$ and $\\overrightarrow{AC} = (2, -2, -1)$. Then $|\\overrightarrow{AB}| = \\sqrt{1 + 4 + 4} = 3$ and $|\\overrightarrow{AC}| = \\sqrt{4 + 4 + 1} = 3$, so $AB = AC$. Also $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2 - 4 + 2 = 0$, so the angle at $A$ is $90^{\\circ}$. Hence the triangle is isosceles and right-angled at $A$.',
    steps: [
      { step: 'Finds $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ and shows $|\\overrightarrow{AB}| = |\\overrightarrow{AC}| = 3$', marks: 1 },
      { step: 'Shows $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$ and concludes a right angle at $A$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-b05', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'For the points $A(2, 1, -1)$, $B(4, -1, 2)$ and $C(3, 3, -3)$, find the projection of $\\overrightarrow{AB}$ on $\\overrightarrow{AC}$, and say whether $\\angle BAC$ is acute or obtuse.',
    answer: '$\\overrightarrow{AB} = (2, -2, 3)$ and $\\overrightarrow{AC} = (1, 2, -2)$. Then $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2 - 4 - 6 = -8$ and $|\\overrightarrow{AC}| = 3$. The projection of $\\overrightarrow{AB}$ on $\\overrightarrow{AC}$ is $\\frac{-8}{3}$. Since the dot product is negative, $\\cos\\angle BAC < 0$ and $\\angle BAC$ is obtuse.',
    steps: [
      { step: 'Finds $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, the dot product $-8$ and $|\\overrightarrow{AC}| = 3$ to get projection $-\\frac{8}{3}$', marks: 1 },
      { step: 'Uses the negative sign of the dot product to conclude the angle is obtuse', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-b06', chapter: C, topic: TV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Let $\\vec{a} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$ and $\\vec{b} = 2\\hat{i} + \\hat{j} - \\hat{k}$. Find $\\vec{a} \\times \\vec{b}$ and verify that it is perpendicular to both $\\vec{a}$ and $\\vec{b}$.',
    answer: '$\\vec{a} \\times \\vec{b} = \\hat{i}((-2)(-1) - 3 \\cdot 1) - \\hat{j}(1 \\cdot (-1) - 3 \\cdot 2) + \\hat{k}(1 \\cdot 1 - (-2)\\cdot 2) = -\\hat{i} + 7\\hat{j} + 5\\hat{k}$. Check: $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = -1 - 14 + 15 = 0$ and $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{b} = -2 + 7 - 5 = 0$, so it is perpendicular to both.',
    steps: [
      { step: 'Expands the determinant to get $-\\hat{i} + 7\\hat{j} + 5\\hat{k}$', marks: 1 },
      { step: 'Shows both dot products are $0$', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-vec-r3-c01', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 3,
    text: '$ABCDEF$ is a regular hexagon with its vertices taken in order, $\\overrightarrow{AB} = \\vec{a}$ and $\\overrightarrow{BC} = \\vec{b}$. In a regular hexagon $AD$ is parallel to $BC$ and twice as long, and $EF$ is equal and opposite to $BC$. Express $\\overrightarrow{AD}$, $\\overrightarrow{CD}$, $\\overrightarrow{AE}$ and $\\overrightarrow{EF}$ in terms of $\\vec{a}$ and $\\vec{b}$.',
    answer: 'Since $AD \\parallel BC$ and $AD = 2BC$, $\\overrightarrow{AD} = 2\\vec{b}$. By the triangle law, $\\overrightarrow{AD} = \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD}$, so $\\overrightarrow{CD} = 2\\vec{b} - \\vec{a} - \\vec{b} = \\vec{b} - \\vec{a}$. The side $DE$ is equal and opposite to $AB$, so $\\overrightarrow{DE} = -\\vec{a}$ and $\\overrightarrow{AE} = \\overrightarrow{AD} + \\overrightarrow{DE} = 2\\vec{b} - \\vec{a}$. Finally $\\overrightarrow{EF} = -\\vec{b}$.',
    steps: [
      { step: 'Writes $\\overrightarrow{AD} = 2\\vec{b}$ from the parallel and twice-as-long fact', marks: 1 },
      { step: 'Uses the triangle law to get $\\overrightarrow{CD} = \\vec{b} - \\vec{a}$', marks: 1 },
      { step: 'Gets $\\overrightarrow{AE} = 2\\vec{b} - \\vec{a}$ (using $\\overrightarrow{DE} = -\\vec{a}$) and $\\overrightarrow{EF} = -\\vec{b}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c02', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 3,
    text: 'A rover starts at $P(2, -1, 3)$ and travels $12$ units in a straight line whose direction ratios are $1, -2, 2$, moving in the sense in which the first direction ratio is positive. Find the direction cosines of its path, its displacement vector and its final position.',
    answer: 'The magnitude of $\\hat{i} - 2\\hat{j} + 2\\hat{k}$ is $\\sqrt{1 + 4 + 4} = 3$, so the direction cosines are $\\frac{1}{3}, -\\frac{2}{3}, \\frac{2}{3}$. The displacement is $12$ times the unit vector: $12\\left(\\frac{1}{3}\\hat{i} - \\frac{2}{3}\\hat{j} + \\frac{2}{3}\\hat{k}\\right) = 4\\hat{i} - 8\\hat{j} + 8\\hat{k}$. The final position is $(2 + 4,\\, -1 - 8,\\, 3 + 8) = (6, -9, 11)$.',
    steps: [
      { step: 'Finds the direction cosines $\\frac{1}{3}, -\\frac{2}{3}, \\frac{2}{3}$', marks: 1 },
      { step: 'Scales the unit vector by $12$ to get displacement $4\\hat{i} - 8\\hat{j} + 8\\hat{k}$', marks: 1 },
      { step: 'Adds it to the start point to get $(6, -9, 11)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c03', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 3,
    text: 'The vertices $A$, $B$, $C$ of a triangle have position vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$. Using the section formula, show that the three medians pass through the single point with position vector $\\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$.',
    answer: 'The mid-point $D$ of $BC$ has position vector $\\frac{\\vec{b} + \\vec{c}}{2}$. The point $G$ dividing the median $AD$ internally in the ratio $2 : 1$ has position vector $\\frac{1\\cdot\\vec{a} + 2\\cdot\\frac{\\vec{b} + \\vec{c}}{2}}{3} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$. This expression is symmetric in $\\vec{a}$, $\\vec{b}$, $\\vec{c}$, so the point dividing the median from $B$ (or from $C$) in the ratio $2 : 1$ has the same position vector. Hence all three medians pass through this one point.',
    steps: [
      { step: 'Writes the mid-point of $BC$ as $\\frac{\\vec{b} + \\vec{c}}{2}$', marks: 1 },
      { step: 'Applies the section formula in the ratio $2 : 1$ on $AD$ to get $\\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$', marks: 1 },
      { step: 'Uses symmetry to show the other two medians give the same point', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c04', chapter: C, topic: TP, type: 'short', complexity: 'hard', marks: 3,
    text: '$ABCD$ is a tetrahedron (a pyramid with four triangular faces) whose vertices have position vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$, $\\vec{d}$. Using position vectors, prove that the three segments joining the mid-points of opposite edges ($AB$ and $CD$, $AC$ and $BD$, $AD$ and $BC$) all have the same mid-point.',
    answer: 'The mid-points of $AB$ and $CD$ are $\\frac{\\vec{a} + \\vec{b}}{2}$ and $\\frac{\\vec{c} + \\vec{d}}{2}$; the mid-point of the segment joining them is $\\frac{1}{2}\\left(\\frac{\\vec{a} + \\vec{b}}{2} + \\frac{\\vec{c} + \\vec{d}}{2}\\right) = \\frac{\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d}}{4}$. For $AC$ and $BD$ it is $\\frac{1}{2}\\left(\\frac{\\vec{a} + \\vec{c}}{2} + \\frac{\\vec{b} + \\vec{d}}{2}\\right)$, and for $AD$ and $BC$ it is $\\frac{1}{2}\\left(\\frac{\\vec{a} + \\vec{d}}{2} + \\frac{\\vec{b} + \\vec{c}}{2}\\right)$. Each simplifies to $\\frac{\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d}}{4}$, so the three segments are concurrent and bisect one another at that point.',
    steps: [
      { step: 'Finds the mid-point of the segment joining the mid-points of $AB$ and $CD$ as $\\frac{\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d}}{4}$', marks: 1 },
      { step: 'Repeats for the pairs $AC, BD$ and $AD, BC$ and gets the same expression', marks: 1 },
      { step: 'Concludes all three segments share a common mid-point', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c05', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 3,
    text: 'The vectors $\\vec{a}$ and $\\vec{b}$ are perpendicular, with $|\\vec{a}| = 3$ and $|\\vec{b}| = 4$. Find $|\\vec{a} + \\vec{b}|$, $|\\vec{a} - \\vec{b}|$ and the angle between $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$.',
    answer: 'Since $\\vec{a} \\cdot \\vec{b} = 0$: $|\\vec{a} + \\vec{b}|^{2} = 9 + 16 = 25$ and $|\\vec{a} - \\vec{b}|^{2} = 9 + 16 = 25$, so both magnitudes are $5$. Also $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^{2} - |\\vec{b}|^{2} = 9 - 16 = -7$. Then $\\cos\\theta = \\frac{-7}{5 \\times 5} = -\\frac{7}{25}$, so $\\theta = \\cos^{-1}\\left(-\\frac{7}{25}\\right)$, which is obtuse.',
    steps: [
      { step: 'Expands $|\\vec{a} \\pm \\vec{b}|^{2}$ using $\\vec{a} \\cdot \\vec{b} = 0$ to get both magnitudes $5$', marks: 1 },
      { step: 'Computes $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^{2} - |\\vec{b}|^{2} = -7$', marks: 1 },
      { step: 'Gets $\\cos\\theta = -\\frac{7}{25}$ and the angle $\\cos^{-1}\\left(-\\frac{7}{25}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c06', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 3,
    text: 'A cube of edge $a$ has one vertex at the origin $O$ and three edges along the positive coordinate axes. Find the angle between the body diagonal that starts at $O$ and the body diagonal that starts at $(a, 0, 0)$.',
    answer: 'The body diagonal from $O$ ends at $(a, a, a)$, giving the vector $a\\hat{i} + a\\hat{j} + a\\hat{k}$. The diagonal from $(a, 0, 0)$ ends at the opposite vertex $(0, a, a)$, giving $-a\\hat{i} + a\\hat{j} + a\\hat{k}$. Their dot product is $-a^{2} + a^{2} + a^{2} = a^{2}$ and each has magnitude $a\\sqrt{3}$. So $\\cos\\theta = \\frac{a^{2}}{3a^{2}} = \\frac{1}{3}$ and $\\theta = \\cos^{-1}\\frac{1}{3}$, independent of $a$.',
    steps: [
      { step: 'Writes the two diagonal vectors $a(\\hat{i} + \\hat{j} + \\hat{k})$ and $a(-\\hat{i} + \\hat{j} + \\hat{k})$', marks: 1 },
      { step: 'Finds the dot product $a^{2}$ and the magnitudes $a\\sqrt{3}$', marks: 1 },
      { step: 'Gets $\\cos\\theta = \\frac{1}{3}$, so $\\theta = \\cos^{-1}\\frac{1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c07', chapter: C, topic: TS, type: 'short', complexity: 'hard', marks: 3,
    text: 'For any two non-zero vectors $\\vec{a}$ and $\\vec{b}$, prove that the vectors $|\\vec{a}|\\,\\vec{b} + |\\vec{b}|\\,\\vec{a}$ and $|\\vec{a}|\\,\\vec{b} - |\\vec{b}|\\,\\vec{a}$ are perpendicular to each other.',
    answer: 'Take the dot product: $(|\\vec{a}|\\vec{b} + |\\vec{b}|\\vec{a}) \\cdot (|\\vec{a}|\\vec{b} - |\\vec{b}|\\vec{a}) = |\\vec{a}|^{2}(\\vec{b} \\cdot \\vec{b}) - |\\vec{a}||\\vec{b}|(\\vec{b} \\cdot \\vec{a}) + |\\vec{b}||\\vec{a}|(\\vec{a} \\cdot \\vec{b}) - |\\vec{b}|^{2}(\\vec{a} \\cdot \\vec{a})$. The two middle terms cancel because $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$, leaving $|\\vec{a}|^{2}|\\vec{b}|^{2} - |\\vec{b}|^{2}|\\vec{a}|^{2} = 0$. A zero dot product of non-zero vectors means they are perpendicular. (Geometrically, these are the diagonals of a rhombus.)',
    steps: [
      { step: 'Sets up the dot product of the two given vectors and expands it', marks: 1 },
      { step: 'Cancels the cross terms using $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$', marks: 1 },
      { step: 'Uses $\\vec{x} \\cdot \\vec{x} = |\\vec{x}|^{2}$ to get $0$ and concludes perpendicularity', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c08', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A parallelogram has adjacent sides $\\vec{a} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{b} = \\hat{i} + \\hat{j} + \\hat{k}$. Find its area and the lengths of its two altitudes (the perpendicular distances between opposite sides).',
    answer: '$\\vec{a} \\times \\vec{b} = \\hat{i}(-1 - 2) - \\hat{j}(2 - 2) + \\hat{k}(2 + 1) = -3\\hat{i} + 3\\hat{k}$, so the area is $|\\vec{a} \\times \\vec{b}| = \\sqrt{9 + 9} = 3\\sqrt{2}$ square units. Area $=$ base $\\times$ altitude. With base $|\\vec{a}| = 3$ the altitude is $\\frac{3\\sqrt{2}}{3} = \\sqrt{2}$; with base $|\\vec{b}| = \\sqrt{3}$ the altitude is $\\frac{3\\sqrt{2}}{\\sqrt{3}} = \\sqrt{6}$.',
    steps: [
      { step: 'Computes $\\vec{a} \\times \\vec{b} = -3\\hat{i} + 3\\hat{k}$', marks: 1 },
      { step: 'Finds the area $3\\sqrt{2}$', marks: 1 },
      { step: 'Divides the area by each side length to get altitudes $\\sqrt{2}$ and $\\sqrt{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c09', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A parallelogram has adjacent sides $\\vec{a} = \\lambda\\hat{i} + 2\\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} - \\hat{j} + 2\\hat{k}$. Find the values of $\\lambda$ for which its area is $\\sqrt{35}$, and the smallest area the parallelogram can have.',
    answer: '$\\vec{a} \\times \\vec{b} = \\hat{i}(4 + 1) - \\hat{j}(2\\lambda - 1) + \\hat{k}(-\\lambda - 2) = 5\\hat{i} + (1 - 2\\lambda)\\hat{j} - (\\lambda + 2)\\hat{k}$. So $|\\vec{a} \\times \\vec{b}|^{2} = 25 + (1 - 2\\lambda)^{2} + (\\lambda + 2)^{2} = 30 + 5\\lambda^{2}$. Setting this equal to $35$ gives $\\lambda^{2} = 1$, so $\\lambda = \\pm 1$. Since $30 + 5\\lambda^{2} \\ge 30$ with equality at $\\lambda = 0$, the smallest area is $\\sqrt{30}$.',
    steps: [
      { step: 'Computes $\\vec{a} \\times \\vec{b}$ in terms of $\\lambda$ and its squared magnitude $30 + 5\\lambda^{2}$', marks: 1 },
      { step: 'Solves $30 + 5\\lambda^{2} = 35$ to get $\\lambda = \\pm 1$', marks: 1 },
      { step: 'Argues the minimum is at $\\lambda = 0$, giving area $\\sqrt{30}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-c10', chapter: C, topic: TV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ satisfy $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$. Prove that $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{c} = \\vec{c} \\times \\vec{a}$. Hence, if $|\\vec{a}| = 3$, $|\\vec{b}| = 4$ and $|\\vec{c}| = 5$, find $|\\vec{a} \\times \\vec{b}|$.',
    answer: 'From $\\vec{c} = -\\vec{a} - \\vec{b}$: $\\vec{b} \\times \\vec{c} = -\\vec{b} \\times \\vec{a} - \\vec{b} \\times \\vec{b} = \\vec{a} \\times \\vec{b}$, and $\\vec{c} \\times \\vec{a} = -\\vec{a} \\times \\vec{a} - \\vec{b} \\times \\vec{a} = \\vec{a} \\times \\vec{b}$. So all three are equal. Now $|\\vec{c}|^{2} = |\\vec{a} + \\vec{b}|^{2} = 9 + 16 + 2\\,\\vec{a} \\cdot \\vec{b} = 25$ gives $\\vec{a} \\cdot \\vec{b} = 0$, so $\\vec{a} \\perp \\vec{b}$ and $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}| = 12$.',
    steps: [
      { step: 'Substitutes $\\vec{c} = -(\\vec{a} + \\vec{b})$ and shows $\\vec{b} \\times \\vec{c} = \\vec{a} \\times \\vec{b}$', marks: 1 },
      { step: 'Shows $\\vec{c} \\times \\vec{a} = \\vec{a} \\times \\vec{b}$ as well', marks: 1 },
      { step: 'Uses $|\\vec{c}|^{2} = |\\vec{a} + \\vec{b}|^{2}$ to find $\\vec{a} \\cdot \\vec{b} = 0$ and hence $|\\vec{a} \\times \\vec{b}| = 12$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-vec-r3-d01', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: '(a) For vectors $\\vec{a}$ and $\\vec{b}$ with angle $\\theta$ between them, prove that $|\\vec{a} \\times \\vec{b}|^{2} + (\\vec{a} \\cdot \\vec{b})^{2} = |\\vec{a}|^{2}|\\vec{b}|^{2}$.\n(b) For $\\vec{a} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{b} = 3\\hat{i} + 4\\hat{k}$, find $\\vec{a} \\cdot \\vec{b}$ and use the identity in (a) to find $|\\vec{a} \\times \\vec{b}|$.\n(c) Find $\\vec{a} \\times \\vec{b}$ directly to confirm the value in (b), and state the area of the parallelogram with $\\vec{a}$ and $\\vec{b}$ as adjacent sides.',
    answer: '(a) $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ and $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$. Squaring and adding gives $|\\vec{a}|^{2}|\\vec{b}|^{2}(\\sin^{2}\\theta + \\cos^{2}\\theta) = |\\vec{a}|^{2}|\\vec{b}|^{2}$.\n(b) $\\vec{a} \\cdot \\vec{b} = 6 + 0 + 8 = 14$, $|\\vec{a}|^{2} = 9$, $|\\vec{b}|^{2} = 25$. So $|\\vec{a} \\times \\vec{b}|^{2} = 9 \\times 25 - 14^{2} = 225 - 196 = 29$ and $|\\vec{a} \\times \\vec{b}| = \\sqrt{29}$.\n(c) $\\vec{a} \\times \\vec{b} = \\hat{i}(-4 - 0) - \\hat{j}(8 - 6) + \\hat{k}(0 + 3) = -4\\hat{i} - 2\\hat{j} + 3\\hat{k}$, with magnitude $\\sqrt{16 + 4 + 9} = \\sqrt{29}$, which agrees. The parallelogram has area $\\sqrt{29}$ square units.',
    steps: [
      { step: '(a) States $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ and $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$', marks: 1 },
      { step: '(a) Squares, adds and uses $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$', marks: 1 },
      { step: '(b) Finds $\\vec{a} \\cdot \\vec{b} = 14$ and gets $|\\vec{a} \\times \\vec{b}| = \\sqrt{225 - 196} = \\sqrt{29}$', marks: 1 },
      { step: '(c) Computes $\\vec{a} \\times \\vec{b} = -4\\hat{i} - 2\\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: '(c) Confirms the magnitude $\\sqrt{29}$ and states the area', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d02', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'A rectangular box has one corner at the origin $O$ and edges of lengths $2$, $3$ and $6$ along the positive $x$-, $y$- and $z$-axes, so the corner farthest from $O$ is $P(2, 3, 6)$.\n(a) Find the length of the body diagonal $OP$ and its direction cosines.\n(b) Another body diagonal runs from $A(2, 0, 0)$ to the opposite corner $Q(0, 3, 6)$. Find the angle between $OP$ and $AQ$.\n(c) Find the scalar projection of the edge $\\overrightarrow{OC}$, where $C(0, 0, 6)$, on $\\overrightarrow{OP}$.',
    answer: '(a) $\\overrightarrow{OP} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$, so $|OP| = \\sqrt{4 + 9 + 36} = 7$. The direction cosines are $\\frac{2}{7}, \\frac{3}{7}, \\frac{6}{7}$.\n(b) $\\overrightarrow{AQ} = -2\\hat{i} + 3\\hat{j} + 6\\hat{k}$, also of magnitude $7$. $\\overrightarrow{OP} \\cdot \\overrightarrow{AQ} = -4 + 9 + 36 = 41$, so $\\cos\\theta = \\frac{41}{49}$ and $\\theta = \\cos^{-1}\\frac{41}{49}$.\n(c) $\\overrightarrow{OC} \\cdot \\overrightarrow{OP} = 36$, so the scalar projection is $\\frac{36}{7}$.',
    steps: [
      { step: '(a) Finds $|OP| = 7$', marks: 1 },
      { step: '(a) Gives the direction cosines $\\frac{2}{7}, \\frac{3}{7}, \\frac{6}{7}$', marks: 1 },
      { step: '(b) Writes $\\overrightarrow{AQ} = -2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ and finds the dot product $41$', marks: 1 },
      { step: '(b) Gets $\\cos\\theta = \\frac{41}{49}$ and the angle', marks: 1 },
      { step: '(c) Finds the scalar projection $\\frac{36}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d03', chapter: C, topic: TP, type: 'long', complexity: 'hard', marks: 5,
    text: 'In triangle $OAB$, take $O$ as the origin with $\\overrightarrow{OA} = \\vec{a}$ and $\\overrightarrow{OB} = \\vec{b}$ (non-collinear). The point $C$ lies on $OA$ with $OC : CA = 1 : 2$, and the point $D$ lies on $OB$ with $OD : DB = 3 : 1$. The lines $AD$ and $BC$ meet at $P$.\n(a) Write the position vectors of $C$ and $D$.\n(b) Writing $P$ once as a point of $AD$ and once as a point of $BC$, find $\\overrightarrow{OP}$ in terms of $\\vec{a}$ and $\\vec{b}$.\n(c) Find the ratios $AP : PD$ and $BP : PC$.',
    answer: '(a) $\\vec{c} = \\frac{1}{3}\\vec{a}$ and $\\vec{d} = \\frac{3}{4}\\vec{b}$.\n(b) A point of $AD$: $\\overrightarrow{OP} = (1 - s)\\vec{a} + s\\cdot\\frac{3}{4}\\vec{b}$. A point of $BC$: $\\overrightarrow{OP} = \\frac{t}{3}\\vec{a} + (1 - t)\\vec{b}$. Since $\\vec{a}$ and $\\vec{b}$ are non-collinear, compare coefficients: $1 - s = \\frac{t}{3}$ and $\\frac{3s}{4} = 1 - t$. Substituting $t = 1 - \\frac{3s}{4}$ into the first gives $3 - 3s = 1 - \\frac{3s}{4}$, so $s = \\frac{8}{9}$ and $t = \\frac{1}{3}$. Hence $\\overrightarrow{OP} = \\frac{1}{9}\\vec{a} + \\frac{2}{3}\\vec{b} = \\frac{\\vec{a} + 6\\vec{b}}{9}$.\n(c) $P$ divides $AD$ in the ratio $s : (1 - s) = \\frac{8}{9} : \\frac{1}{9}$, so $AP : PD = 8 : 1$. $P$ divides $BC$ in the ratio $t : (1 - t) = \\frac{1}{3} : \\frac{2}{3}$, so $BP : PC = 1 : 2$.',
    steps: [
      { step: '(a) Gets $\\vec{c} = \\frac{1}{3}\\vec{a}$ and $\\vec{d} = \\frac{3}{4}\\vec{b}$ from the section formula', marks: 1 },
      { step: '(b) Writes $P$ in parametric form on $AD$ and on $BC$', marks: 1 },
      { step: '(b) Equates coefficients of the non-collinear $\\vec{a}$, $\\vec{b}$ and solves $s = \\frac{8}{9}$, $t = \\frac{1}{3}$', marks: 1 },
      { step: '(b) States $\\overrightarrow{OP} = \\frac{\\vec{a} + 6\\vec{b}}{9}$', marks: 1 },
      { step: '(c) Reads off $AP : PD = 8 : 1$ and $BP : PC = 1 : 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d04', chapter: C, topic: TV, type: 'long', complexity: 'medium', marks: 5,
    text: 'A rigid body spins about an axis through the origin $O$ with angular velocity $\\vec{\\omega} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ (rad/s). The velocity of a point of the body with position vector $\\vec{r}$ (in metres) is $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$ (in m/s). For the point $P(1, 3, -1)$:\n(a) find $\\vec{v}$ and the speed of $P$;\n(b) show that $\\vec{v}$ is perpendicular to both $\\vec{\\omega}$ and $\\overrightarrow{OP}$;\n(c) find the distance of $P$ from the axis of rotation, given that speed $= |\\vec{\\omega}| \\times$ distance from the axis.',
    answer: '(a) $\\vec{v} = \\vec{\\omega} \\times \\vec{r} = \\hat{i}((-1)(-1) - 2 \\cdot 3) - \\hat{j}(2 \\cdot (-1) - 2 \\cdot 1) + \\hat{k}(2 \\cdot 3 - (-1) \\cdot 1) = -5\\hat{i} + 4\\hat{j} + 7\\hat{k}$. The speed is $|\\vec{v}| = \\sqrt{25 + 16 + 49} = \\sqrt{90} = 3\\sqrt{10}$ m/s.\n(b) $\\vec{v} \\cdot \\vec{\\omega} = -10 - 4 + 14 = 0$ and $\\vec{v} \\cdot \\vec{r} = -5 + 12 - 7 = 0$, so $\\vec{v}$ is perpendicular to both.\n(c) $|\\vec{\\omega}| = \\sqrt{4 + 1 + 4} = 3$, so the distance is $\\frac{3\\sqrt{10}}{3} = \\sqrt{10}$ metres.',
    steps: [
      { step: '(a) Expands the determinant to get $\\vec{v} = -5\\hat{i} + 4\\hat{j} + 7\\hat{k}$', marks: 1 },
      { step: '(a) Finds the speed $3\\sqrt{10}$ m/s', marks: 1 },
      { step: '(b) Shows both dot products ($\\vec{v} \\cdot \\vec{\\omega}$ and $\\vec{v} \\cdot \\vec{r}$) are zero', marks: 1 },
      { step: '(c) Finds $|\\vec{\\omega}| = 3$', marks: 1 },
      { step: '(c) Divides to get distance $\\sqrt{10}$ m', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d05', chapter: C, topic: TS, type: 'long', complexity: 'hard', marks: 5,
    text: 'Prove, using the scalar product, that the three altitudes of a triangle meet at a single point.\nTake a triangle $ABC$ in which the altitudes from $A$ and $B$ meet at $H$. Use $H$ as the origin, with $\\overrightarrow{HA} = \\vec{a}$, $\\overrightarrow{HB} = \\vec{b}$ and $\\overrightarrow{HC} = \\vec{c}$.\n(a) Write the conditions "$HA \\perp BC$" and "$HB \\perp CA$" as scalar-product equations.\n(b) Combine them to show $\\vec{c} \\cdot (\\vec{a} - \\vec{b}) = 0$.\n(c) Conclude that $HC \\perp AB$ and hence that the third altitude also passes through $H$.',
    answer: '(a) $\\overrightarrow{BC} = \\vec{c} - \\vec{b}$ and $\\overrightarrow{CA} = \\vec{a} - \\vec{c}$. The altitude from $A$ is perpendicular to $BC$, so $\\vec{a} \\cdot (\\vec{c} - \\vec{b}) = 0$, that is $\\vec{a} \\cdot \\vec{c} = \\vec{a} \\cdot \\vec{b}$ ... (1). The altitude from $B$ is perpendicular to $CA$, so $\\vec{b} \\cdot (\\vec{a} - \\vec{c}) = 0$, that is $\\vec{b} \\cdot \\vec{a} = \\vec{b} \\cdot \\vec{c}$ ... (2).\n(b) From (1) and (2), $\\vec{a} \\cdot \\vec{c} = \\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{c}$. So $\\vec{a} \\cdot \\vec{c} - \\vec{b} \\cdot \\vec{c} = 0$, which is $\\vec{c} \\cdot (\\vec{a} - \\vec{b}) = 0$.\n(c) Since $\\overrightarrow{AB} = \\vec{b} - \\vec{a}$, we get $\\overrightarrow{HC} \\cdot \\overrightarrow{AB} = -\\vec{c} \\cdot (\\vec{a} - \\vec{b}) = 0$. So $HC$ is perpendicular to $AB$ (or $H$ coincides with $C$), meaning the line through $C$ perpendicular to $AB$, the third altitude, passes through $H$. All three altitudes are concurrent at $H$.',
    steps: [
      { step: '(a) Writes $\\overrightarrow{BC} = \\vec{c} - \\vec{b}$, $\\overrightarrow{CA} = \\vec{a} - \\vec{c}$ and the equation $\\vec{a} \\cdot (\\vec{c} - \\vec{b}) = 0$', marks: 1 },
      { step: '(a) Writes the second equation $\\vec{b} \\cdot (\\vec{a} - \\vec{c}) = 0$', marks: 1 },
      { step: '(b) Equates the two to get $\\vec{a} \\cdot \\vec{c} = \\vec{b} \\cdot \\vec{c}$', marks: 1 },
      { step: '(b) Rearranges to $\\vec{c} \\cdot (\\vec{a} - \\vec{b}) = 0$', marks: 1 },
      { step: '(c) Interprets this as $HC \\perp AB$ and concludes the altitudes are concurrent', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d06', chapter: C, topic: TP, type: 'long', complexity: 'medium', marks: 5,
    text: 'The points $A(1, 2, 3)$, $B(4, 6, 3)$, $C(8, 6, 6)$ and $D(5, 2, 6)$ are taken in order.\n(a) Show that $ABCD$ is a parallelogram.\n(b) Show that it is a rhombus.\n(c) Show that it is not a square.\n(d) Show that its diagonals are perpendicular.\n(e) Find its area.',
    answer: '(a) $\\overrightarrow{AB} = (3, 4, 0)$ and $\\overrightarrow{DC} = (8 - 5, 6 - 2, 6 - 6) = (3, 4, 0)$, so $\\overrightarrow{AB} = \\overrightarrow{DC}$ and $ABCD$ is a parallelogram.\n(b) $\\overrightarrow{AD} = (4, 0, 3)$. $|\\overrightarrow{AB}| = \\sqrt{9 + 16} = 5$ and $|\\overrightarrow{AD}| = \\sqrt{16 + 9} = 5$, so adjacent sides are equal and it is a rhombus.\n(c) $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 12 + 0 + 0 = 12 \\ne 0$, so the angle at $A$ is not a right angle; it is not a square.\n(d) $\\overrightarrow{AC} = (7, 4, 3)$ and $\\overrightarrow{BD} = (1, -4, 3)$. $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = 7 - 16 + 9 = 0$, so the diagonals are perpendicular.\n(e) $\\overrightarrow{AB} \\times \\overrightarrow{AD} = (12, -9, -16)$, so the area is $\\sqrt{144 + 81 + 256} = \\sqrt{481}$ square units.',
    steps: [
      { step: '(a) Shows $\\overrightarrow{AB} = \\overrightarrow{DC} = (3, 4, 0)$', marks: 1 },
      { step: '(b) Shows $|\\overrightarrow{AB}| = |\\overrightarrow{AD}| = 5$', marks: 1 },
      { step: '(c) Shows $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 12 \\ne 0$, so not a square', marks: 1 },
      { step: '(d) Shows $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = 0$', marks: 1 },
      { step: '(e) Finds $\\overrightarrow{AB} \\times \\overrightarrow{AD} = (12, -9, -16)$ and area $\\sqrt{481}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d07', chapter: C, topic: TB, type: 'long', complexity: 'medium', marks: 5,
    text: 'On a map, $\\hat{i}$ points east and $\\hat{j}$ points north, with speeds in km/h. In still water a motorboat travels at $13$ km/h and its pilot steers in the direction of $5\\hat{i} + 12\\hat{j}$. The river current carries the water westward at $5$ km/h.\n(a) Write the velocity of the boat relative to the water as a vector.\n(b) Find the actual velocity of the boat relative to the ground.\n(c) State the direction and speed of the boat over the ground, and the time it needs to travel $30$ km along its actual path.\n(d) Find the angle between the direction in which the boat is steered and its actual direction of travel.',
    answer: '(a) The unit vector along $5\\hat{i} + 12\\hat{j}$ is $\\frac{1}{13}(5\\hat{i} + 12\\hat{j})$, so the velocity relative to the water is $13 \\times \\frac{1}{13}(5\\hat{i} + 12\\hat{j}) = 5\\hat{i} + 12\\hat{j}$.\n(b) The current is $-5\\hat{i}$, so the velocity over the ground is $(5\\hat{i} + 12\\hat{j}) + (-5\\hat{i}) = 12\\hat{j}$.\n(c) The boat moves due north at $12$ km/h, so $30$ km takes $\\frac{30}{12} = 2.5$ hours.\n(d) Between $\\vec{u} = 5\\hat{i} + 12\\hat{j}$ and $\\vec{w} = 12\\hat{j}$: $\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{w}}{|\\vec{u}||\\vec{w}|} = \\frac{144}{13 \\times 12} = \\frac{12}{13}$, so $\\theta = \\cos^{-1}\\frac{12}{13}$, about $22.6^{\\circ}$.',
    steps: [
      { step: '(a) Gives the relative velocity $5\\hat{i} + 12\\hat{j}$', marks: 1 },
      { step: '(b) Adds the current $-5\\hat{i}$ to get ground velocity $12\\hat{j}$', marks: 1 },
      { step: '(c) States due north at $12$ km/h and time $2.5$ hours', marks: 1 },
      { step: '(d) Uses the dot product of the two directions to get $\\cos\\theta = \\frac{12}{13}$', marks: 1 },
      { step: '(d) States the angle $\\cos^{-1}\\frac{12}{13} \\approx 22.6^{\\circ}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r3-d08', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: 'A triangle $ABC$ has vertices $A(1, 0, 0)$, $B(0, 2, 0)$ and $C(0, 0, 3)$, and $O$ is the origin.\n(a) Find $\\overrightarrow{AB} \\times \\overrightarrow{AC}$ and the area of triangle $ABC$.\n(b) Using the vector product, find the areas of the triangles $OBC$, $OCA$ and $OAB$.\n(c) Show that the sum of the squares of the three areas in (b) equals the square of the area in (a).',
    answer: '(a) $\\overrightarrow{AB} = (-1, 2, 0)$ and $\\overrightarrow{AC} = (-1, 0, 3)$, so $\\overrightarrow{AB} \\times \\overrightarrow{AC} = 6\\hat{i} + 3\\hat{j} + 2\\hat{k}$. Its magnitude is $\\sqrt{36 + 9 + 4} = 7$, so the area of $ABC$ is $\\frac{7}{2}$.\n(b) $\\overrightarrow{OB} \\times \\overrightarrow{OC} = (0, 2, 0) \\times (0, 0, 3) = 6\\hat{i}$, so area $OBC = 3$. $\\overrightarrow{OC} \\times \\overrightarrow{OA} = (0, 0, 3) \\times (1, 0, 0) = 3\\hat{j}$, so area $OCA = \\frac{3}{2}$. $\\overrightarrow{OA} \\times \\overrightarrow{OB} = (1, 0, 0) \\times (0, 2, 0) = 2\\hat{k}$, so area $OAB = 1$.\n(c) $3^{2} + \\left(\\frac{3}{2}\\right)^{2} + 1^{2} = 9 + \\frac{9}{4} + 1 = \\frac{49}{4} = \\left(\\frac{7}{2}\\right)^{2}$. The areas of the three faces meeting at $O$ square-sum to the square of the area of the opposite face.',
    steps: [
      { step: '(a) Computes $\\overrightarrow{AB} \\times \\overrightarrow{AC} = 6\\hat{i} + 3\\hat{j} + 2\\hat{k}$', marks: 1 },
      { step: '(a) Gets the area $\\frac{7}{2}$', marks: 1 },
      { step: '(b) Finds the three cross products $6\\hat{i}$, $3\\hat{j}$, $2\\hat{k}$', marks: 1 },
      { step: '(b) Halves their magnitudes to get areas $3$, $\\frac{3}{2}$, $1$', marks: 1 },
      { step: '(c) Verifies $9 + \\frac{9}{4} + 1 = \\frac{49}{4} = \\left(\\frac{7}{2}\\right)^{2}$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-vec-r3-e01', chapter: C, topic: TS, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A robotic arm used in a factory has its shoulder joint at the origin $O$ of a coordinate system measured in decimetres. The upper arm runs from the shoulder to the elbow $E(2, 3, 6)$, and the forearm runs from the elbow to the wrist $W(8, 5, 3)$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the lengths of the upper arm $OE$ and the forearm $EW$.', answer: '$\\overrightarrow{OE} = (2, 3, 6)$, so $|OE| = \\sqrt{4 + 9 + 36} = 7$ dm. $\\overrightarrow{EW} = (8 - 2, 5 - 3, 3 - 6) = (6, 2, -3)$, so $|EW| = \\sqrt{36 + 4 + 9} = 7$ dm. Both segments are $7$ dm long.' },
      { label: '(ii)', marks: 1, text: 'Show that the arm is bent at a right angle at the elbow, that is, that $\\overrightarrow{OE}$ is perpendicular to $\\overrightarrow{EW}$.', answer: '$\\overrightarrow{OE} \\cdot \\overrightarrow{EW} = (2)(6) + (3)(2) + (6)(-3) = 12 + 6 - 18 = 0$. The dot product of two non-zero vectors is zero, so they are perpendicular.' },
      { label: '(iii)', marks: 2, text: 'Find the straight-line distance of the wrist from the shoulder.\nOR\nFind the area of the triangle $OEW$ formed by the shoulder, elbow and wrist.', answer: 'Distance: $\\overrightarrow{OW} = (8, 5, 3)$, so $|OW| = \\sqrt{64 + 25 + 9} = \\sqrt{98} = 7\\sqrt{2}$ dm (this agrees with Pythagoras, $\\sqrt{7^{2} + 7^{2}}$, as the angle at $E$ is a right angle).\nOR Area: since $OE \\perp EW$, area $= \\frac{1}{2} \\times 7 \\times 7 = \\frac{49}{2}$ square dm. Check: $\\overrightarrow{OE} \\times \\overrightarrow{EW} = (3 \\cdot (-3) - 6 \\cdot 2,\\; 6 \\cdot 6 - 2 \\cdot (-3),\\; 2 \\cdot 2 - 3 \\cdot 6) = (-21, 42, -14)$ with magnitude $\\sqrt{441 + 1764 + 196} = 49$, and half of $49$ is $\\frac{49}{2}$.' },
    ],
    answer: '(i) Both $7$ dm. (ii) $\\overrightarrow{OE} \\cdot \\overrightarrow{EW} = 0$. (iii) $|OW| = 7\\sqrt{2}$ dm, OR area $\\frac{49}{2}$ square dm.',
  },
  {
    id: 'c12-vec-r3-e02', chapter: C, topic: TP, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An undersea monitoring cable is stretched in a straight line from a sensor $A(1, 3, -9)$ on the seabed to a floating drone $B(7, 9, 3)$ above the water. Coordinates are in metres, and the sea surface is the plane $z = 0$ (so negative $z$ means below the surface).',
    parts: [
      { label: '(i)', marks: 1, text: 'In what ratio does the sea surface divide the cable $AB$?', answer: 'Let the surface divide $AB$ in the ratio $m : n$. The $z$-coordinate is $\\frac{3m - 9n}{m + n} = 0$, so $m = 3n$ and $m : n = 3 : 1$ (internally).' },
      { label: '(ii)', marks: 1, text: 'Find the point where the cable crosses the sea surface.', answer: 'With ratio $3 : 1$, the point is $\\frac{1\\cdot A + 3\\cdot B}{4} = \\left(\\frac{1 + 21}{4}, \\frac{3 + 27}{4}, \\frac{-9 + 9}{4}\\right) = \\left(\\frac{11}{2}, \\frac{15}{2}, 0\\right)$.' },
      { label: '(iii)', marks: 2, text: 'A clamp is fixed on the cable at a depth of $6$ m below the surface. Find its position.\nOR\nThe cable is extended beyond $B$ in the same straight line to a kite at height $15$ m above the surface. Find the position of the kite.', answer: 'Clamp: let it divide $AB$ in the ratio $m : n$. Then $\\frac{3m - 9n}{m + n} = -6$, so $3m - 9n = -6m - 6n$, $9m = 3n$ and $m : n = 1 : 3$. The position is $\\frac{3A + 1\\cdot B}{4} = \\left(\\frac{3 + 7}{4}, \\frac{9 + 9}{4}, \\frac{-27 + 3}{4}\\right) = \\left(\\frac{5}{2}, \\frac{9}{2}, -6\\right)$.\nOR Kite: let it divide $AB$ in the ratio $m : n$. Then $\\frac{3m - 9n}{m + n} = 15$, so $3m - 9n = 15m + 15n$, $-12m = 24n$ and $m : n = -2 : 1$, an external division in the ratio $2 : 1$. The position is $2B - A = (14 - 1, 18 - 3, 6 + 9) = (13, 15, 15)$.' },
    ],
    answer: '(i) $3 : 1$. (ii) $\\left(\\frac{11}{2}, \\frac{15}{2}, 0\\right)$. (iii) Clamp at $\\left(\\frac{5}{2}, \\frac{9}{2}, -6\\right)$, OR kite at $(13, 15, 15)$.',
  },
  {
    id: 'c12-vec-r3-e03', chapter: C, topic: TB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A security camera is mounted at the origin $O$ of a warehouse, with distances in metres. Its axis (the direction it is pointing) is along the vector $\\vec{a} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$. A package sits at the point $P(6, -3, 6)$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the unit vector along the camera axis and its direction cosines.', answer: '$|\\vec{a}| = \\sqrt{4 + 1 + 4} = 3$, so the unit vector is $\\frac{1}{3}(2\\hat{i} + \\hat{j} + 2\\hat{k})$ and the direction cosines are $\\frac{2}{3}, \\frac{1}{3}, \\frac{2}{3}$.' },
      { label: '(ii)', marks: 1, text: 'Find the distance of the package from the camera.', answer: '$\\overrightarrow{OP} = (6, -3, 6)$, so $|OP| = \\sqrt{36 + 9 + 36} = 9$ m.' },
      { label: '(iii)', marks: 2, text: 'Find how far along the camera axis the package lies (the scalar projection of $\\overrightarrow{OP}$ on $\\vec{a}$) and its perpendicular distance from the axis line.\nOR\nA second package is placed on the axis at a distance of $12$ m from the camera. Find its coordinates.', answer: 'Along the axis: $\\frac{\\overrightarrow{OP} \\cdot \\vec{a}}{|\\vec{a}|} = \\frac{12 - 3 + 12}{3} = 7$ m. Perpendicular distance: by Pythagoras, $\\sqrt{|OP|^{2} - 7^{2}} = \\sqrt{81 - 49} = \\sqrt{32} = 4\\sqrt{2}$ m.\nOR The point is $12$ times the unit vector: $12 \\times \\frac{1}{3}(2, 1, 2) = (8, 4, 8)$.' },
    ],
    answer: '(i) $\\frac{1}{3}(2\\hat{i} + \\hat{j} + 2\\hat{k})$; $\\frac{2}{3}, \\frac{1}{3}, \\frac{2}{3}$. (ii) $9$ m. (iii) Projection $7$ m and perpendicular distance $4\\sqrt{2}$ m, OR the point $(8, 4, 8)$.',
  },
  {
    id: 'c12-vec-r3-e04', chapter: C, topic: TV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A mechanic tightens a bolt with a spanner. Take the centre of the bolt as the origin $O$. A force $\\vec{F}$ acting at a point with position vector $\\vec{r}$ produces a turning effect (torque) $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. The mechanic pushes the end of the spanner, at $\\vec{r} = 20\\hat{i} + 15\\hat{j}$ (in cm), with a force $\\vec{F} = -8\\hat{k}$ (in newtons).',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the torque vector $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.', answer: '$\\vec{r} \\times \\vec{F} = \\hat{i}(15 \\cdot (-8) - 0) - \\hat{j}(20 \\cdot (-8) - 0) + \\hat{k}(0) = -120\\hat{i} + 160\\hat{j}$ (in N cm).' },
      { label: '(ii)', marks: 1, text: 'Find the magnitude of the torque.', answer: '$|\\vec{\\tau}| = \\sqrt{120^{2} + 160^{2}} = \\sqrt{14400 + 25600} = \\sqrt{40000} = 200$ N cm.' },
      { label: '(iii)', marks: 2, text: 'Show that $\\vec{\\tau}$ is perpendicular to both $\\vec{r}$ and $\\vec{F}$.\nOR\nThe bolt needs a torque of at least $240$ N cm to loosen. Keeping the same direction of the arm and the same force, find the least length of the spanner arm needed.', answer: '$\\vec{\\tau} \\cdot \\vec{r} = (-120)(20) + (160)(15) + 0 = -2400 + 2400 = 0$ and $\\vec{\\tau} \\cdot \\vec{F} = 0 + 0 + 0 = 0$. So $\\vec{\\tau}$ is perpendicular to both.\nOR Here $\\vec{r} \\perp \\vec{F}$, so $|\\vec{\\tau}| = |\\vec{r}||\\vec{F}| = |\\vec{r}| \\times 8$. The present arm length is $\\sqrt{400 + 225} = 25$ cm, which gives $200$ N cm. For $240$ N cm we need $|\\vec{r}| = \\frac{240}{8} = 30$ cm, so the arm must be at least $30$ cm long.' },
    ],
    answer: '(i) $-120\\hat{i} + 160\\hat{j}$ N cm. (ii) $200$ N cm. (iii) $\\vec{\\tau} \\cdot \\vec{r} = \\vec{\\tau} \\cdot \\vec{F} = 0$, OR the arm must be at least $30$ cm.',
  },
];
