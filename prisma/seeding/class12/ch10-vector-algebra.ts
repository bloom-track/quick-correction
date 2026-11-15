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

export const CH10_VEC: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────
  {
    id: 'c12-vec-a01', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The magnitude of the vector $2\\hat{i} - 6\\hat{j} + 3\\hat{k}$ is',
    options: ['$\\sqrt{13}$', '$7$', '$11$', '$49$'],
    answer: 'Correct option: B) $7$, since $\\sqrt{2^{2} + (-6)^{2} + 3^{2}} = \\sqrt{49} = 7$. $49$ forgets the square root and $11$ just adds the absolute values of the components.',
  },
  {
    id: 'c12-vec-a02', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The unit vector in the direction of $5\\hat{j} - 12\\hat{k}$ is',
    options: ['$\\frac{1}{13}(5\\hat{j} - 12\\hat{k})$', '$\\frac{1}{17}(5\\hat{j} - 12\\hat{k})$', '$\\frac{1}{169}(5\\hat{j} - 12\\hat{k})$', '$\\frac{1}{13}(5\\hat{j} + 12\\hat{k})$'],
    answer: 'Correct option: A) $\\frac{1}{13}(5\\hat{j} - 12\\hat{k})$. The magnitude is $\\sqrt{25 + 144} = 13$, and dividing the vector by its magnitude keeps the direction (including the minus sign).',
  },
  {
    id: 'c12-vec-a03', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The direction cosines of the vector $\\overrightarrow{AB}$, where $A(1, 2, -1)$ and $B(3, -1, 5)$, are',
    options: ['$\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}$', '$-\\frac{2}{7}, \\frac{3}{7}, -\\frac{6}{7}$', '$2, -3, 6$', '$\\frac{4}{7}, \\frac{1}{7}, \\frac{4}{7}$'],
    answer: 'Correct option: A) $\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}$. $\\overrightarrow{AB} = 2\\hat{i} - 3\\hat{j} + 6\\hat{k}$ with magnitude $7$, so the direction cosines are the components divided by $7$. Option B is for $\\overrightarrow{BA}$ and option C gives direction ratios, not cosines.',
  },
  {
    id: 'c12-vec-a04', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The vectors $2\\hat{i} + 3\\hat{j} - 6\\hat{k}$ and $\\lambda\\hat{i} - 9\\hat{j} + \\mu\\hat{k}$ are collinear. Then',
    options: ['$\\lambda = -6, \\mu = 18$', '$\\lambda = 6, \\mu = -18$', '$\\lambda = -6, \\mu = -18$', '$\\lambda = 6, \\mu = 18$'],
    answer: 'Correct option: A) $\\lambda = -6, \\mu = 18$. Collinear vectors have proportional components: $\\frac{\\lambda}{2} = \\frac{-9}{3} = \\frac{\\mu}{-6} = -3$, so $\\lambda = -6$ and $\\mu = 18$.',
  },
  {
    id: 'c12-vec-a05', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A vector makes angles $60^{\\circ}$ and $45^{\\circ}$ with the positive $x$-axis and $y$-axis respectively, and an acute angle with the positive $z$-axis. The angle it makes with the $z$-axis is',
    options: ['$30^{\\circ}$', '$45^{\\circ}$', '$60^{\\circ}$', '$90^{\\circ}$'],
    answer: 'Correct option: C) $60^{\\circ}$. From $\\cos^{2}\\alpha + \\cos^{2}\\beta + \\cos^{2}\\gamma = 1$: $\\frac{1}{4} + \\frac{1}{2} + \\cos^{2}\\gamma = 1$, so $\\cos\\gamma = \\frac{1}{2}$ (acute), giving $\\gamma = 60^{\\circ}$.',
  },
  {
    id: 'c12-vec-a06', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'In a triangle $ABC$, $\\overrightarrow{AB} = \\vec{a}$ and $\\overrightarrow{BC} = \\vec{b}$. Then $\\overrightarrow{CA}$ is',
    options: ['$\\vec{a} + \\vec{b}$', '$\\vec{a} - \\vec{b}$', '$-(\\vec{a} + \\vec{b})$', '$\\vec{b} - \\vec{a}$'],
    answer: 'Correct option: C) $-(\\vec{a} + \\vec{b})$. By the triangle law $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\vec{0}$, so $\\overrightarrow{CA} = -(\\vec{a} + \\vec{b})$. Option A is $\\overrightarrow{AC}$, the opposite direction.',
  },
  {
    id: 'c12-vec-a07', chapter: C, topic: TB, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The vectors $\\vec{a} = 2\\hat{i} - 3\\hat{j} + \\hat{k}$ and $\\vec{b} = -4\\hat{i} + 6\\hat{j} - 2\\hat{k}$ are collinear.\nReason (R): Two non-zero vectors are collinear if and only if one of them is a scalar multiple of the other.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and (R) explains (A). Here $\\vec{b} = -2\\vec{a}$, so by the scalar-multiple test in (R) the vectors are collinear.',
  },
  {
    id: 'c12-vec-a08', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The position vector of the mid-point $M$ of a segment $AB$ is $3\\hat{i} - \\hat{j} + 2\\hat{k}$ and that of $A$ is $\\hat{i} + 2\\hat{j} - 4\\hat{k}$. The position vector of $B$ is',
    options: ['$5\\hat{i} - 4\\hat{j} + 8\\hat{k}$', '$2\\hat{i} + \\frac{1}{2}\\hat{j} - \\hat{k}$', '$2\\hat{i} - 3\\hat{j} + 6\\hat{k}$', '$4\\hat{i} + \\hat{j} - 2\\hat{k}$'],
    answer: 'Correct option: A) $5\\hat{i} - 4\\hat{j} + 8\\hat{k}$. Since $\\vec{m} = \\frac{\\vec{a} + \\vec{b}}{2}$, $\\vec{b} = 2\\vec{m} - \\vec{a} = (6 - 1)\\hat{i} + (-2 - 2)\\hat{j} + (4 + 4)\\hat{k}$.',
  },
  {
    id: 'c12-vec-a09', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The position vectors of $P$ and $Q$ are $\\hat{i} + 2\\hat{j} - \\hat{k}$ and $3\\hat{i} - \\hat{j} + 2\\hat{k}$. The position vector of the point $R$ that divides $PQ$ externally in the ratio $2 : 1$ is',
    options: ['$5\\hat{i} - 4\\hat{j} + 5\\hat{k}$', '$\\frac{1}{3}(7\\hat{i} + 3\\hat{k})$', '$-\\hat{i} + 5\\hat{j} - 4\\hat{k}$', '$4\\hat{i} + \\hat{j} + \\hat{k}$'],
    answer: 'Correct option: A) $5\\hat{i} - 4\\hat{j} + 5\\hat{k}$. External division in $m : n = 2 : 1$ gives $\\vec{r} = \\frac{2\\vec{q} - \\vec{p}}{2 - 1} = (6 - 1)\\hat{i} + (-2 - 2)\\hat{j} + (4 + 1)\\hat{k}$. Option B is the internal division point.',
  },
  {
    id: 'c12-vec-a10', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The $yz$-plane divides the segment joining $(3, 1, -2)$ and $(-6, 4, 5)$ in the ratio',
    options: ['$1 : 2$ internally', '$2 : 1$ internally', '$1 : 2$ externally', '$2 : 1$ externally'],
    answer: 'Correct option: A) $1 : 2$ internally. On the $yz$-plane $x = 0$, so for ratio $k : 1$, $\\frac{-6k + 3}{k + 1} = 0$, giving $k = \\frac{1}{2}$, which is positive, so the division is internal in $1 : 2$.',
  },
  {
    id: 'c12-vec-a11', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'In triangle $ABC$, $\\overrightarrow{AB} = 3\\hat{i} + \\hat{j} - \\hat{k}$ and $\\overrightarrow{AC} = \\hat{i} - 3\\hat{j} + 5\\hat{k}$. The length of the median through $A$ is',
    options: ['$3$', '$6$', '$\\sqrt{14}$', '$9$'],
    answer: 'Correct option: A) $3$. If $D$ is the mid-point of $BC$, $\\overrightarrow{AD} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC}) = 2\\hat{i} - \\hat{j} + 2\\hat{k}$, whose length is $\\sqrt{4 + 1 + 4} = 3$. Option B forgets the factor $\\frac{1}{2}$ and option C is half of $BC$.',
  },
  {
    id: 'c12-vec-a12', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The scalar projection of $\\vec{a} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ on $\\vec{b} = \\hat{i} - 2\\hat{j} + 2\\hat{k}$ is',
    options: ['$-\\frac{6}{\\sqrt{14}}$', '$-2$', '$2$', '$-6$'],
    answer: 'Correct option: B) $-2$. Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{2 - 6 - 2}{3} = -2$. Option A is the projection of $\\vec{b}$ on $\\vec{a}$; option D is just the dot product.',
  },
  {
    id: 'c12-vec-a13', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\lambda$ for which $3\\hat{i} + \\lambda\\hat{j} - 2\\hat{k}$ and $2\\hat{i} - 4\\hat{j} + 5\\hat{k}$ are perpendicular is',
    options: ['$1$', '$-1$', '$4$', '$-4$'],
    answer: 'Correct option: B) $-1$. Perpendicular means the dot product is zero: $6 - 4\\lambda - 10 = 0$, so $\\lambda = -1$.',
  },
  {
    id: 'c12-vec-a14', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\hat{a}$ and $\\hat{b}$ are unit vectors such that $\\hat{a} - \\hat{b}$ is also a unit vector. The angle between $\\hat{a}$ and $\\hat{b}$ is',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$'],
    answer: 'Correct option: B) $\\frac{\\pi}{3}$. $|\\hat{a} - \\hat{b}|^{2} = 1 + 1 - 2\\cos\\theta = 1$, so $\\cos\\theta = \\frac{1}{2}$. The value $\\frac{2\\pi}{3}$ would be the answer if $\\hat{a} + \\hat{b}$ were a unit vector.',
  },
  {
    id: 'c12-vec-a15', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $|\\vec{a}| = 2$, $|\\vec{b}| = 3$ and $\\vec{a} \\cdot \\vec{b} = -3$, then $|\\vec{a} + \\vec{b}|$ equals',
    options: ['$\\sqrt{7}$', '$\\sqrt{19}$', '$\\sqrt{13}$', '$1$'],
    answer: 'Correct option: A) $\\sqrt{7}$. $|\\vec{a} + \\vec{b}|^{2} = |\\vec{a}|^{2} + |\\vec{b}|^{2} + 2\\vec{a} \\cdot \\vec{b} = 4 + 9 - 6 = 7$. Option B uses $-2\\vec{a} \\cdot \\vec{b}$ by mistake and option C ignores the dot-product term.',
  },
  {
    id: 'c12-vec-a16', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The angle between $\\vec{a} = x\\hat{i} - 2\\hat{j} + \\hat{k}$ and $\\vec{b} = x\\hat{i} + x\\hat{j} - 3\\hat{k}$ is obtuse exactly when',
    options: ['$-1 < x < 3$', '$x < -1$ or $x > 3$', '$-3 < x < 1$', '$x > 0$'],
    answer: 'Correct option: A) $-1 < x < 3$. The angle is obtuse when $\\vec{a} \\cdot \\vec{b} = x^{2} - 2x - 3 = (x - 3)(x + 1) < 0$, that is $-1 < x < 3$ (the vectors are never in exactly opposite directions, so no value needs to be removed). Option B is the condition for an acute angle.',
  },
  {
    id: 'c12-vec-a17', chapter: C, topic: TS, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'Vectors $\\vec{a}, \\vec{b}, \\vec{c}$ satisfy $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, with $|\\vec{a}| = 3$, $|\\vec{b}| = 8$ and $|\\vec{c}| = 7$. The angle between $\\vec{a}$ and $\\vec{b}$ is',
    options: ['$30^{\\circ}$', '$60^{\\circ}$', '$120^{\\circ}$', '$150^{\\circ}$'],
    answer: 'Correct option: C) $120^{\\circ}$. $\\vec{c} = -(\\vec{a} + \\vec{b})$, so $49 = 9 + 64 + 2\\vec{a} \\cdot \\vec{b}$, giving $\\vec{a} \\cdot \\vec{b} = -12$ and $\\cos\\theta = \\frac{-12}{3 \\times 8} = -\\frac{1}{2}$. Dropping the sign gives the wrong answer $60^{\\circ}$.',
  },
  {
    id: 'c12-vec-a18', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For two non-zero vectors $\\vec{a}$ and $\\vec{b}$, $\\vec{a} \\cdot \\vec{b} = |\\vec{a}|\\,|\\vec{b}|$. The angle between them is',
    options: ['$0$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
    answer: 'Correct option: A) $0$. $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$, so $\\cos\\theta = 1$ and $\\theta = 0$: the vectors point in the same direction.',
  },
  {
    id: 'c12-vec-a19', chapter: C, topic: TS, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $\\hat{a}$ and $\\hat{b}$ are unit vectors inclined at an angle $\\frac{\\pi}{3}$, then $\\hat{a} \\cdot \\hat{b} = \\frac{\\sqrt{3}}{2}$.\nReason (R): For any two vectors, $\\vec{a} \\cdot \\vec{b} = |\\vec{a}|\\,|\\vec{b}|\\cos\\theta$, where $\\theta$ is the angle between them.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, (R) is true. By (R), $\\hat{a} \\cdot \\hat{b} = 1 \\times 1 \\times \\cos\\frac{\\pi}{3} = \\frac{1}{2}$, not $\\frac{\\sqrt{3}}{2}$ (that is $\\sin\\frac{\\pi}{3}$).',
  },
  {
    id: 'c12-vec-a20', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $|\\vec{a}| = 4$, $|\\vec{b}| = 3$ and the angle between $\\vec{a}$ and $\\vec{b}$ is $\\frac{\\pi}{6}$, then $|\\vec{a} \\times \\vec{b}|$ is',
    options: ['$6$', '$6\\sqrt{3}$', '$12$', '$3$'],
    answer: 'Correct option: A) $6$. $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta = 12 \\times \\frac{1}{2} = 6$. Option B uses $\\cos\\theta$, which belongs to the dot product.',
  },
  {
    id: 'c12-vec-a21', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'In triangle $ABC$, $\\overrightarrow{AB} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\overrightarrow{AC} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$. The area of the triangle is',
    options: ['$\\frac{\\sqrt{65}}{2}$', '$\\sqrt{65}$', '$\\frac{65}{2}$', '$\\frac{9}{2}$'],
    answer: 'Correct option: A) $\\frac{\\sqrt{65}}{2}$. $\\overrightarrow{AB} \\times \\overrightarrow{AC} = -2\\hat{i} + 6\\hat{j} + 5\\hat{k}$ with magnitude $\\sqrt{65}$, and the area is half of this. Option B is the parallelogram area; option D wrongly uses $\\frac{1}{2}|\\overrightarrow{AB}||\\overrightarrow{AC}|$.',
  },
  {
    id: 'c12-vec-a22', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A unit vector perpendicular to both $\\hat{i} + \\hat{j}$ and $\\hat{j} + \\hat{k}$ is',
    options: ['$\\frac{1}{\\sqrt{3}}(\\hat{i} - \\hat{j} + \\hat{k})$', '$\\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$', '$\\frac{1}{3}(\\hat{i} - \\hat{j} + \\hat{k})$', '$\\frac{1}{\\sqrt{3}}(-\\hat{i} + \\hat{j} + \\hat{k})$'],
    answer: 'Correct option: A) $\\frac{1}{\\sqrt{3}}(\\hat{i} - \\hat{j} + \\hat{k})$. $(\\hat{i} + \\hat{j}) \\times (\\hat{j} + \\hat{k}) = \\hat{i} - \\hat{j} + \\hat{k}$, of magnitude $\\sqrt{3}$. Option C divides by $3$ and is not a unit vector; B and D are not perpendicular to both.',
  },
  {
    id: 'c12-vec-a23', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $|\\vec{a}| = 3$ and $|\\vec{b}| = 4$, then $|\\vec{a} \\times \\vec{b}|^{2} + (\\vec{a} \\cdot \\vec{b})^{2}$ equals',
    options: ['$144$', '$7$', '$12$', '$49$'],
    answer: 'Correct option: A) $144$. $|\\vec{a}|^{2}|\\vec{b}|^{2}\\sin^{2}\\theta + |\\vec{a}|^{2}|\\vec{b}|^{2}\\cos^{2}\\theta = |\\vec{a}|^{2}|\\vec{b}|^{2} = 9 \\times 16 = 144$, whatever the angle.',
  },
  {
    id: 'c12-vec-a24', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For non-zero vectors $\\vec{a}$ and $\\vec{b}$ with $\\vec{a} \\cdot \\vec{b} > 0$, $|\\vec{a} \\times \\vec{b}| = \\sqrt{3}\\,(\\vec{a} \\cdot \\vec{b})$. The angle between them is',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{3}$'],
    answer: 'Correct option: B) $\\frac{\\pi}{3}$. Dividing, $\\tan\\theta = \\sqrt{3}$ with $\\theta$ acute (because $\\vec{a} \\cdot \\vec{b} > 0$), so $\\theta = \\frac{\\pi}{3}$. Option A comes from inverting the ratio.',
  },
  {
    id: 'c12-vec-a25', chapter: C, topic: TV, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): For $\\vec{a} = \\hat{i} + \\hat{j}$ and $\\vec{b} = \\hat{i} - \\hat{j}$, $\\vec{a} \\times \\vec{b} = -2\\hat{k}$.\nReason (R): For any two vectors, $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) (A) is true, (R) is false. $(\\hat{i} + \\hat{j}) \\times (\\hat{i} - \\hat{j}) = -\\hat{i} \\times \\hat{j} + \\hat{j} \\times \\hat{i} = -\\hat{k} - \\hat{k} = -2\\hat{k}$, so (A) holds. The cross product is anti-commutative: $\\vec{a} \\times \\vec{b} = -\\vec{b} \\times \\vec{a}$, so (R) is false.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-vec-b01', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find a vector of magnitude $10$ units in the direction of $\\overrightarrow{AB}$, where $A$ is $(1, -2, 3)$ and $B$ is $(7, 1, 5)$.',
    answer: '$\\overrightarrow{AB} = (7 - 1)\\hat{i} + (1 + 2)\\hat{j} + (5 - 3)\\hat{k} = 6\\hat{i} + 3\\hat{j} + 2\\hat{k}$, with $|\\overrightarrow{AB}| = \\sqrt{36 + 9 + 4} = 7$. The unit vector is $\\frac{1}{7}(6\\hat{i} + 3\\hat{j} + 2\\hat{k})$, so the required vector is $\\frac{10}{7}(6\\hat{i} + 3\\hat{j} + 2\\hat{k}) = \\frac{60}{7}\\hat{i} + \\frac{30}{7}\\hat{j} + \\frac{20}{7}\\hat{k}$.',
    steps: [
      { step: 'Finds $\\overrightarrow{AB} = 6\\hat{i} + 3\\hat{j} + 2\\hat{k}$ and its magnitude $7$', marks: 1 },
      { step: 'Scales the unit vector by $10$ to get $\\frac{10}{7}(6\\hat{i} + 3\\hat{j} + 2\\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b02', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'A vector $\\vec{r}$ has magnitude $14$ and direction ratios $2, 3, -6$. If $\\vec{r}$ makes an acute angle with the positive $x$-axis, find its direction cosines and write $\\vec{r}$ in component form.',
    answer: '$\\sqrt{2^{2} + 3^{2} + (-6)^{2}} = 7$, so the direction cosines are $\\pm\\left(\\frac{2}{7}, \\frac{3}{7}, -\\frac{6}{7}\\right)$. An acute angle with the $x$-axis needs $l > 0$, so $l = \\frac{2}{7}$, $m = \\frac{3}{7}$, $n = -\\frac{6}{7}$. Then $\\vec{r} = 14\\left(\\frac{2}{7}\\hat{i} + \\frac{3}{7}\\hat{j} - \\frac{6}{7}\\hat{k}\\right) = 4\\hat{i} + 6\\hat{j} - 12\\hat{k}$.',
    steps: [
      { step: 'Gets the direction cosines $\\frac{2}{7}, \\frac{3}{7}, -\\frac{6}{7}$, choosing the sign from the acute-angle condition', marks: 1 },
      { step: 'Writes $\\vec{r} = 4\\hat{i} + 6\\hat{j} - 12\\hat{k}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b03', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using vectors, find the value of $\\lambda$ for which the points $A(2, -1, 3)$, $B(4, 3, -1)$ and $C(\\lambda, 7, -5)$ are collinear.',
    answer: '$\\overrightarrow{AB} = 2\\hat{i} + 4\\hat{j} - 4\\hat{k}$ and $\\overrightarrow{AC} = (\\lambda - 2)\\hat{i} + 8\\hat{j} - 8\\hat{k}$. For collinearity $\\overrightarrow{AC}$ must be a scalar multiple of $\\overrightarrow{AB}$. Comparing the $\\hat{j}$ and $\\hat{k}$ parts, $\\overrightarrow{AC} = 2\\overrightarrow{AB}$, so $\\lambda - 2 = 4$ and $\\lambda = 6$.',
    steps: [
      { step: 'Writes $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ and uses the scalar-multiple condition', marks: 1 },
      { step: 'Finds $\\lambda = 6$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b04', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 2,
    text: 'The position vectors of $P$ and $Q$ are $2\\vec{a} + \\vec{b}$ and $\\vec{a} - 3\\vec{b}$. Find the position vector of the point $R$ that divides $PQ$ externally in the ratio $1 : 2$, and show that $P$ is the mid-point of $RQ$.',
    answer: 'External division in $1 : 2$: $\\vec{r} = \\frac{1 \\cdot (\\vec{a} - 3\\vec{b}) - 2(2\\vec{a} + \\vec{b})}{1 - 2} = \\frac{-3\\vec{a} - 5\\vec{b}}{-1} = 3\\vec{a} + 5\\vec{b}$. Mid-point of $RQ$ $= \\frac{(3\\vec{a} + 5\\vec{b}) + (\\vec{a} - 3\\vec{b})}{2} = 2\\vec{a} + \\vec{b}$, which is the position vector of $P$. So $P$ is the mid-point of $RQ$.',
    steps: [
      { step: 'Applies the external section formula to get $\\vec{r} = 3\\vec{a} + 5\\vec{b}$', marks: 1 },
      { step: 'Shows the mid-point of $RQ$ is $2\\vec{a} + \\vec{b}$, the position vector of $P$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b05', chapter: C, topic: TP, type: 'short', complexity: 'easy', marks: 2,
    text: 'The position vectors of $A$ and $B$ are $2\\hat{i} + 3\\hat{j} - 4\\hat{k}$ and $6\\hat{i} - \\hat{j} + 4\\hat{k}$. Find the position vector of the point $D$ that divides $AB$ internally in the ratio $3 : 1$, and find its distance from the origin.',
    answer: '$\\vec{d} = \\frac{3\\vec{b} + 1 \\cdot \\vec{a}}{3 + 1} = \\frac{(18 + 2)\\hat{i} + (-3 + 3)\\hat{j} + (12 - 4)\\hat{k}}{4} = 5\\hat{i} + 2\\hat{k}$. Its distance from the origin is $|\\vec{d}| = \\sqrt{25 + 0 + 4} = \\sqrt{29}$ units.',
    steps: [
      { step: 'Uses the internal section formula to get $\\vec{d} = 5\\hat{i} + 2\\hat{k}$', marks: 1 },
      { step: 'Finds the distance $\\sqrt{29}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b06', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $|\\vec{a}| = 2$, $|\\vec{b}| = 3$ and $|2\\vec{a} - \\vec{b}| = \\sqrt{13}$, find the angle between $\\vec{a}$ and $\\vec{b}$.',
    answer: '$|2\\vec{a} - \\vec{b}|^{2} = 4|\\vec{a}|^{2} + |\\vec{b}|^{2} - 4\\vec{a} \\cdot \\vec{b} = 16 + 9 - 4\\vec{a} \\cdot \\vec{b} = 13$, so $\\vec{a} \\cdot \\vec{b} = 3$. Then $\\cos\\theta = \\frac{3}{2 \\times 3} = \\frac{1}{2}$, so the angle is $\\theta = \\frac{\\pi}{3}$.',
    steps: [
      { step: 'Expands $|2\\vec{a} - \\vec{b}|^{2}$ to get $\\vec{a} \\cdot \\vec{b} = 3$', marks: 1 },
      { step: 'Finds $\\cos\\theta = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b07', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $\\vec{a} = 2\\hat{i} - \\hat{j} + \\hat{k}$, $\\vec{b} = \\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{c} = 3\\hat{i} + \\hat{j} + 2\\hat{k}$. Find $\\lambda$ such that $\\vec{a} + \\lambda\\vec{b}$ is perpendicular to $\\vec{c}$.',
    answer: '$(\\vec{a} + \\lambda\\vec{b}) \\cdot \\vec{c} = \\vec{a} \\cdot \\vec{c} + \\lambda\\,\\vec{b} \\cdot \\vec{c}$. Here $\\vec{a} \\cdot \\vec{c} = 6 - 1 + 2 = 7$ and $\\vec{b} \\cdot \\vec{c} = 3 + 2 - 2 = 3$. Setting $7 + 3\\lambda = 0$ gives $\\lambda = -\\frac{7}{3}$.',
    steps: [
      { step: 'Sets $(\\vec{a} + \\lambda\\vec{b}) \\cdot \\vec{c} = 0$ and finds $\\vec{a} \\cdot \\vec{c} = 7$, $\\vec{b} \\cdot \\vec{c} = 3$', marks: 1 },
      { step: 'Solves to get $\\lambda = -\\frac{7}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b08', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: '$\\vec{a}$, $\\vec{b}$ and $\\vec{c}$ are mutually perpendicular vectors of equal magnitude. Show that $\\vec{a} + \\vec{b} + \\vec{c}$ is equally inclined to $\\vec{a}$, $\\vec{b}$ and $\\vec{c}$, and find the angle of inclination.',
    answer: 'Let $|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = k$, with $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{c} = \\vec{c} \\cdot \\vec{a} = 0$. Then $|\\vec{a} + \\vec{b} + \\vec{c}|^{2} = 3k^{2}$, so $|\\vec{a} + \\vec{b} + \\vec{c}| = \\sqrt{3}k$. If $\\alpha$ is the angle with $\\vec{a}$, $\\cos\\alpha = \\frac{(\\vec{a} + \\vec{b} + \\vec{c}) \\cdot \\vec{a}}{\\sqrt{3}k \\cdot k} = \\frac{k^{2}}{\\sqrt{3}k^{2}} = \\frac{1}{\\sqrt{3}}$. In the same way the cosines of the angles with $\\vec{b}$ and $\\vec{c}$ are also $\\frac{1}{\\sqrt{3}}$, so the sum is equally inclined to all three, at the angle $\\cos^{-1}\\frac{1}{\\sqrt{3}}$.',
    steps: [
      { step: 'Finds $|\\vec{a} + \\vec{b} + \\vec{c}| = \\sqrt{3}k$ using the zero dot products', marks: 1 },
      { step: 'Shows each cosine is $\\frac{1}{\\sqrt{3}}$, so the angle is $\\cos^{-1}\\frac{1}{\\sqrt{3}}$ with all three', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b09', chapter: C, topic: TS, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the projection of $\\vec{a} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ on $\\vec{b} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$.',
    answer: '$\\vec{a} \\cdot \\vec{b} = 2 + 6 + 12 = 20$ and $|\\vec{b}| = \\sqrt{1 + 4 + 4} = 3$. Projection of $\\vec{a}$ on $\\vec{b}$ $= \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{20}{3}$.',
    steps: [
      { step: 'Finds $\\vec{a} \\cdot \\vec{b} = 20$ and $|\\vec{b}| = 3$', marks: 1 },
      { step: 'Gets the projection $\\frac{20}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b10', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find all vectors of magnitude $6$ that are perpendicular to both $\\vec{a} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$ and $\\vec{b} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$.',
    answer: '$\\vec{a} \\times \\vec{b} = (2 \\cdot 2 - (-2) \\cdot 1)\\hat{i} - (1 \\cdot 2 - (-2) \\cdot 2)\\hat{j} + (1 \\cdot 1 - 2 \\cdot 2)\\hat{k} = 6\\hat{i} - 6\\hat{j} - 3\\hat{k}$, with magnitude $\\sqrt{36 + 36 + 9} = 9$. The required vectors are $\\pm\\frac{6}{9}(6\\hat{i} - 6\\hat{j} - 3\\hat{k}) = \\pm(4\\hat{i} - 4\\hat{j} - 2\\hat{k})$.',
    steps: [
      { step: 'Finds $\\vec{a} \\times \\vec{b} = 6\\hat{i} - 6\\hat{j} - 3\\hat{k}$ with magnitude $9$', marks: 1 },
      { step: 'Gets both vectors $\\pm(4\\hat{i} - 4\\hat{j} - 2\\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b11', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 2,
    text: 'The diagonals of a parallelogram are $\\vec{d_1} = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{d_2} = \\hat{i} - 3\\hat{j} + 4\\hat{k}$. Find the area of the parallelogram.',
    answer: 'Area $= \\frac{1}{2}|\\vec{d_1} \\times \\vec{d_2}|$. $\\vec{d_1} \\times \\vec{d_2} = (4 - 6)\\hat{i} - (12 + 2)\\hat{j} + (-9 - 1)\\hat{k} = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$, with magnitude $\\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$. Area $= 5\\sqrt{3}$ square units.',
    steps: [
      { step: 'Finds $\\vec{d_1} \\times \\vec{d_2} = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$', marks: 1 },
      { step: 'Uses area $= \\frac{1}{2}|\\vec{d_1} \\times \\vec{d_2}|$ to get $5\\sqrt{3}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b12', chapter: C, topic: TV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Using vectors, find the area of the triangle with vertices $A(1, 1, 1)$, $B(1, 2, 3)$ and $C(2, 3, 1)$.',
    answer: '$\\overrightarrow{AB} = \\hat{j} + 2\\hat{k}$ and $\\overrightarrow{AC} = \\hat{i} + 2\\hat{j}$. $\\overrightarrow{AB} \\times \\overrightarrow{AC} = (0 - 4)\\hat{i} - (0 - 2)\\hat{j} + (0 - 1)\\hat{k} = -4\\hat{i} + 2\\hat{j} - \\hat{k}$, with magnitude $\\sqrt{21}$. Area $= \\frac{\\sqrt{21}}{2}$ square units.',
    steps: [
      { step: 'Finds $\\overrightarrow{AB} \\times \\overrightarrow{AC} = -4\\hat{i} + 2\\hat{j} - \\hat{k}$', marks: 1 },
      { step: 'Gets the area $\\frac{\\sqrt{21}}{2}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-b13', chapter: C, topic: TV, type: 'short', complexity: 'hard', marks: 2,
    text: 'If $\\vec{a} \\times \\vec{b} = \\vec{c} \\times \\vec{d}$ and $\\vec{a} \\times \\vec{c} = \\vec{b} \\times \\vec{d}$, show that $\\vec{a} - \\vec{d}$ is parallel to $\\vec{b} - \\vec{c}$, where $\\vec{a} \\neq \\vec{d}$ and $\\vec{b} \\neq \\vec{c}$.',
    answer: '$(\\vec{a} - \\vec{d}) \\times (\\vec{b} - \\vec{c}) = \\vec{a} \\times \\vec{b} - \\vec{a} \\times \\vec{c} - \\vec{d} \\times \\vec{b} + \\vec{d} \\times \\vec{c} = \\vec{a} \\times \\vec{b} - \\vec{a} \\times \\vec{c} + \\vec{b} \\times \\vec{d} - \\vec{c} \\times \\vec{d}$ (using $\\vec{p} \\times \\vec{q} = -\\vec{q} \\times \\vec{p}$). Grouping, this is $(\\vec{a} \\times \\vec{b} - \\vec{c} \\times \\vec{d}) - (\\vec{a} \\times \\vec{c} - \\vec{b} \\times \\vec{d}) = \\vec{0} - \\vec{0} = \\vec{0}$. Both vectors are non-zero and their cross product is zero, so $\\vec{a} - \\vec{d}$ is parallel to $\\vec{b} - \\vec{c}$.',
    steps: [
      { step: 'Expands $(\\vec{a} - \\vec{d}) \\times (\\vec{b} - \\vec{c})$ and rewrites terms using anti-commutativity', marks: 1 },
      { step: 'Uses the given equalities to show it is $\\vec{0}$ and concludes the vectors are parallel', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-vec-c01', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 3,
    text: 'Vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ have magnitudes $3$, $4$ and $5$, and each is perpendicular to the sum of the other two. Find $|\\vec{a} + \\vec{b} + \\vec{c}|$.',
    answer: 'Given $\\vec{a} \\cdot (\\vec{b} + \\vec{c}) = 0$, $\\vec{b} \\cdot (\\vec{c} + \\vec{a}) = 0$ and $\\vec{c} \\cdot (\\vec{a} + \\vec{b}) = 0$. Adding, $2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$. Now $|\\vec{a} + \\vec{b} + \\vec{c}|^{2} = |\\vec{a}|^{2} + |\\vec{b}|^{2} + |\\vec{c}|^{2} + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 9 + 16 + 25 + 0 = 50$. So $|\\vec{a} + \\vec{b} + \\vec{c}| = 5\\sqrt{2}$.',
    steps: [
      { step: 'Writes the three perpendicularity conditions and adds them to get $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a} = 0$', marks: 1 },
      { step: 'Expands $|\\vec{a} + \\vec{b} + \\vec{c}|^{2}$', marks: 1 },
      { step: 'Gets $|\\vec{a} + \\vec{b} + \\vec{c}| = 5\\sqrt{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-c02', chapter: C, topic: TS, type: 'short', complexity: 'hard', marks: 3,
    text: 'Express $\\vec{b} = \\hat{i} + \\hat{j} + 4\\hat{k}$ as the sum of a vector parallel to $\\vec{a} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and a vector perpendicular to $\\vec{a}$.',
    answer: 'The part parallel to $\\vec{a}$ is the vector projection $\\vec{b}_1 = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|^{2}}\\vec{a}$. Here $\\vec{a} \\cdot \\vec{b} = 2 - 1 + 8 = 9$ and $|\\vec{a}|^{2} = 9$, so $\\vec{b}_1 = 2\\hat{i} - \\hat{j} + 2\\hat{k}$. The perpendicular part is $\\vec{b}_2 = \\vec{b} - \\vec{b}_1 = -\\hat{i} + 2\\hat{j} + 2\\hat{k}$. Check: $\\vec{b}_2 \\cdot \\vec{a} = -2 - 2 + 4 = 0$. So $\\vec{b} = (2\\hat{i} - \\hat{j} + 2\\hat{k}) + (-\\hat{i} + 2\\hat{j} + 2\\hat{k})$.',
    steps: [
      { step: 'Writes the parallel part as $\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}|^{2}}\\vec{a}$ (or as $\\lambda\\vec{a}$ with $(\\vec{b} - \\lambda\\vec{a}) \\cdot \\vec{a} = 0$)', marks: 1 },
      { step: 'Finds the parallel part $2\\hat{i} - \\hat{j} + 2\\hat{k}$', marks: 1 },
      { step: 'Finds the perpendicular part $-\\hat{i} + 2\\hat{j} + 2\\hat{k}$ and checks its dot product with $\\vec{a}$ is $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-c03', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 3,
    text: 'Points $A$, $B$, $C$ have position vectors $\\hat{i} - 2\\hat{j} + 3\\hat{k}$, $3\\hat{i} + \\hat{k}$ and $7\\hat{i} + 4\\hat{j} - 3\\hat{k}$. Show that $A$, $B$, $C$ are collinear and find the ratio in which $B$ divides $AC$.',
    answer: '$\\overrightarrow{AB} = 2\\hat{i} + 2\\hat{j} - 2\\hat{k}$ and $\\overrightarrow{BC} = 4\\hat{i} + 4\\hat{j} - 4\\hat{k} = 2\\overrightarrow{AB}$. The two vectors are parallel and share the point $B$, so $A$, $B$, $C$ are collinear. Since $\\overrightarrow{BC} = 2\\overrightarrow{AB}$ in the same direction, $AB : BC = 1 : 2$, so $B$ divides $AC$ internally in the ratio $1 : 2$. Check: $\\frac{2(\\hat{i} - 2\\hat{j} + 3\\hat{k}) + (7\\hat{i} + 4\\hat{j} - 3\\hat{k})}{3} = 3\\hat{i} + \\hat{k}$, which is $\\vec{b}$.',
    steps: [
      { step: 'Finds $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$', marks: 1 },
      { step: 'Shows $\\overrightarrow{BC} = 2\\overrightarrow{AB}$ with a common point, so the points are collinear', marks: 1 },
      { step: 'Concludes $B$ divides $AC$ internally in $1 : 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-c04', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $\\vec{a} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$, $\\vec{b} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ and $\\vec{c} = 3\\hat{i} + \\hat{j} - \\hat{k}$. Find a vector $\\vec{d}$ that is perpendicular to both $\\vec{a}$ and $\\vec{b}$ and satisfies $\\vec{c} \\cdot \\vec{d} = 20$.',
    answer: '$\\vec{d}$ is parallel to $\\vec{a} \\times \\vec{b} = 6\\hat{i} - 6\\hat{j} - 3\\hat{k} = 3(2\\hat{i} - 2\\hat{j} - \\hat{k})$. Let $\\vec{d} = \\lambda(2\\hat{i} - 2\\hat{j} - \\hat{k})$. Then $\\vec{c} \\cdot \\vec{d} = \\lambda(6 - 2 + 1) = 5\\lambda = 20$, so $\\lambda = 4$ and $\\vec{d} = 8\\hat{i} - 8\\hat{j} - 4\\hat{k}$.',
    steps: [
      { step: 'Finds $\\vec{a} \\times \\vec{b} = 6\\hat{i} - 6\\hat{j} - 3\\hat{k}$', marks: 1 },
      { step: 'Writes $\\vec{d}$ as a multiple of it and uses $\\vec{c} \\cdot \\vec{d} = 20$', marks: 1 },
      { step: 'Gets $\\vec{d} = 8\\hat{i} - 8\\hat{j} - 4\\hat{k}$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-vec-d01', chapter: C, topic: TV, type: 'long', complexity: 'medium', marks: 5,
    text: 'The vertices of a triangle are $A(1, 1, 2)$, $B(2, 3, 5)$ and $C(1, 5, 5)$.\n(a) Using vectors, find the area of triangle $ABC$.\n(b) Find the length of the perpendicular from $A$ to $BC$.\n(c) Find a unit vector perpendicular to the plane of the triangle.',
    answer: '(a) $\\overrightarrow{AB} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$, $\\overrightarrow{AC} = 4\\hat{j} + 3\\hat{k}$. $\\overrightarrow{AB} \\times \\overrightarrow{AC} = (6 - 12)\\hat{i} - (3 - 0)\\hat{j} + (4 - 0)\\hat{k} = -6\\hat{i} - 3\\hat{j} + 4\\hat{k}$, with magnitude $\\sqrt{36 + 9 + 16} = \\sqrt{61}$. Area $= \\frac{\\sqrt{61}}{2}$ square units.\n(b) $\\overrightarrow{BC} = -\\hat{i} + 2\\hat{j}$, so $BC = \\sqrt{5}$. Area $= \\frac{1}{2} \\times BC \\times h$, so $h = \\frac{2 \\times \\text{area}}{BC} = \\frac{\\sqrt{61}}{\\sqrt{5}} = \\sqrt{\\frac{61}{5}}$ units (about $3.49$).\n(c) A unit vector perpendicular to the plane is $\\pm\\frac{1}{\\sqrt{61}}(-6\\hat{i} - 3\\hat{j} + 4\\hat{k})$.',
    steps: [
      { step: 'Writes $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$', marks: 1 },
      { step: 'Finds $\\overrightarrow{AB} \\times \\overrightarrow{AC} = -6\\hat{i} - 3\\hat{j} + 4\\hat{k}$', marks: 1 },
      { step: 'Gets area $\\frac{\\sqrt{61}}{2}$', marks: 1 },
      { step: 'Finds $BC = \\sqrt{5}$ and the perpendicular length $\\sqrt{\\frac{61}{5}}$', marks: 1 },
      { step: 'Writes the unit normal $\\pm\\frac{1}{\\sqrt{61}}(-6\\hat{i} - 3\\hat{j} + 4\\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-d02', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: 'In triangle $ABC$, let $a$, $b$, $c$ be the lengths of the sides $BC$, $CA$, $AB$ opposite the angles $A$, $B$, $C$. Using the vector product, prove the sine rule: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.',
    answer: 'Let $\\vec{a} = \\overrightarrow{BC}$, $\\vec{b} = \\overrightarrow{CA}$, $\\vec{c} = \\overrightarrow{AB}$. By the triangle law, $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$.\nTaking the cross product with $\\vec{a}$: $\\vec{a} \\times \\vec{a} + \\vec{a} \\times \\vec{b} + \\vec{a} \\times \\vec{c} = \\vec{0}$, so $\\vec{a} \\times \\vec{b} = -\\vec{a} \\times \\vec{c} = \\vec{c} \\times \\vec{a}$.\nTaking the cross product with $\\vec{b}$: $\\vec{b} \\times \\vec{a} + \\vec{b} \\times \\vec{c} = \\vec{0}$, so $\\vec{b} \\times \\vec{c} = \\vec{a} \\times \\vec{b}$.\nHence $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{c} = \\vec{c} \\times \\vec{a}$, and so their magnitudes are equal.\nThe angle between $\\overrightarrow{BC}$ and $\\overrightarrow{CA}$ (placed tail to tail) is $\\pi - C$, and $\\sin(\\pi - C) = \\sin C$. Similarly the angle between $\\vec{b}$ and $\\vec{c}$ is $\\pi - A$, and between $\\vec{c}$ and $\\vec{a}$ is $\\pi - B$. So $ab\\sin C = bc\\sin A = ca\\sin B$.\nDividing throughout by $abc$: $\\frac{\\sin C}{c} = \\frac{\\sin A}{a} = \\frac{\\sin B}{b}$, that is $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.',
    steps: [
      { step: 'Sets up side vectors and writes $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$', marks: 1 },
      { step: 'Crosses with $\\vec{a}$ (and $\\vec{b}$) to show $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{c} = \\vec{c} \\times \\vec{a}$', marks: 2 },
      { step: 'Converts to magnitudes, correctly using angles $\\pi - C$, $\\pi - A$, $\\pi - B$ to get $ab\\sin C = bc\\sin A = ca\\sin B$', marks: 1 },
      { step: 'Divides by $abc$ to reach the sine rule', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-d03', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $\\vec{a} = 2\\hat{i} - 2\\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$.\n(a) Find the angle between $\\vec{a}$ and $\\vec{b}$.\n(b) Find the scalar projection of $\\vec{a}$ on $\\vec{b}$ and the vector component of $\\vec{a}$ along $\\vec{b}$.\n(c) Find $|\\vec{a} + \\vec{b}|$.\n(d) Find $\\lambda$ such that $\\vec{a} + \\lambda\\vec{b}$ is perpendicular to $\\vec{a} - \\vec{b}$.',
    answer: '(a) $\\vec{a} \\cdot \\vec{b} = 2 - 4 - 2 = -4$, $|\\vec{a}| = |\\vec{b}| = 3$. $\\cos\\theta = -\\frac{4}{9}$, so $\\theta = \\cos^{-1}\\left(-\\frac{4}{9}\\right) = \\pi - \\cos^{-1}\\frac{4}{9}$.\n(b) Scalar projection $= \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = -\\frac{4}{3}$. Vector component $= \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^{2}}\\vec{b} = -\\frac{4}{9}(\\hat{i} + 2\\hat{j} - 2\\hat{k}) = -\\frac{4}{9}\\hat{i} - \\frac{8}{9}\\hat{j} + \\frac{8}{9}\\hat{k}$.\n(c) $|\\vec{a} + \\vec{b}|^{2} = 9 + 9 + 2(-4) = 10$, so $|\\vec{a} + \\vec{b}| = \\sqrt{10}$. (Directly: $\\vec{a} + \\vec{b} = 3\\hat{i} - \\hat{k}$.)\n(d) $(\\vec{a} + \\lambda\\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^{2} - \\vec{a} \\cdot \\vec{b} + \\lambda\\,\\vec{a} \\cdot \\vec{b} - \\lambda|\\vec{b}|^{2} = 9 + 4 - 4\\lambda - 9\\lambda = 13 - 13\\lambda = 0$, so $\\lambda = 1$.',
    steps: [
      { step: 'Finds $\\vec{a} \\cdot \\vec{b} = -4$ and the angle $\\cos^{-1}\\left(-\\frac{4}{9}\\right)$', marks: 1 },
      { step: 'Gets scalar projection $-\\frac{4}{3}$ and vector component $-\\frac{4}{9}(\\hat{i} + 2\\hat{j} - 2\\hat{k})$', marks: 1 },
      { step: 'Gets $|\\vec{a} + \\vec{b}| = \\sqrt{10}$', marks: 1 },
      { step: 'Sets up and expands $(\\vec{a} + \\lambda\\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = 0$', marks: 1 },
      { step: 'Solves to get $\\lambda = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-d04', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using the scalar product of vectors, prove that:\n(a) the diagonals of a rhombus are perpendicular to each other;\n(b) the angle in a semicircle is a right angle.',
    answer: '(a) Let the rhombus be $OACB$ with $\\overrightarrow{OA} = \\vec{a}$ and $\\overrightarrow{OB} = \\vec{b}$, where $|\\vec{a}| = |\\vec{b}|$ (all sides equal). The diagonals are $\\overrightarrow{OC} = \\vec{a} + \\vec{b}$ and $\\overrightarrow{BA} = \\vec{a} - \\vec{b}$. Then $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^{2} - |\\vec{b}|^{2} = 0$, so the diagonals are perpendicular.\n(b) Let $AB$ be a diameter of a circle with centre $O$ and radius $r$, and $P$ any other point on the circle. Take $O$ as origin, $\\overrightarrow{OA} = \\vec{a}$, so $\\overrightarrow{OB} = -\\vec{a}$, and $\\overrightarrow{OP} = \\vec{p}$ with $|\\vec{p}| = |\\vec{a}| = r$. Then $\\overrightarrow{PA} = \\vec{a} - \\vec{p}$ and $\\overrightarrow{PB} = -\\vec{a} - \\vec{p}$. $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = (\\vec{a} - \\vec{p}) \\cdot (-\\vec{a} - \\vec{p}) = -|\\vec{a}|^{2} + |\\vec{p}|^{2} = -r^{2} + r^{2} = 0$. So $\\angle APB = 90^{\\circ}$.',
    steps: [
      { step: '(a) Writes the diagonals as $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$ with $|\\vec{a}| = |\\vec{b}|$', marks: 1 },
      { step: '(a) Shows their dot product is $|\\vec{a}|^{2} - |\\vec{b}|^{2} = 0$', marks: 1 },
      { step: '(b) Sets up position vectors $\\vec{a}$, $-\\vec{a}$, $\\vec{p}$ with $|\\vec{p}| = |\\vec{a}|$', marks: 1 },
      { step: '(b) Writes $\\overrightarrow{PA}$ and $\\overrightarrow{PB}$ and expands their dot product', marks: 1 },
      { step: '(b) Shows the dot product is $0$, so $\\angle APB = 90^{\\circ}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-d05', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $\\vec{a} = \\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{b} = 5\\hat{i} - 3\\hat{j} - \\hat{k}$. Find a vector $\\vec{c}$ such that $\\vec{a} \\times \\vec{c} = \\vec{b}$ and $\\vec{a} \\cdot \\vec{c} = 1$. Verify your answer.',
    answer: 'Let $\\vec{c} = x\\hat{i} + y\\hat{j} + z\\hat{k}$. Then $\\vec{a} \\times \\vec{c} = (2z + y)\\hat{i} - (z + x)\\hat{j} + (y - 2x)\\hat{k}$.\nEquating with $\\vec{b}$: $2z + y = 5$, $z + x = 3$, $y - 2x = -1$. The condition $\\vec{a} \\cdot \\vec{c} = 1$ gives $x + 2y - z = 1$.\nFrom the second and third equations, $z = 3 - x$ and $y = 2x - 1$. Substituting in $x + 2y - z = 1$: $x + 4x - 2 - 3 + x = 1$, so $6x = 6$ and $x = 1$. Then $y = 1$ and $z = 2$. (The first equation is consistent: $4 + 1 = 5$.)\nSo $\\vec{c} = \\hat{i} + \\hat{j} + 2\\hat{k}$.\nVerification: $\\vec{a} \\cdot \\vec{c} = 1 + 2 - 2 = 1$, and $\\vec{a} \\times \\vec{c} = (4 + 1)\\hat{i} - (2 + 1)\\hat{j} + (1 - 2)\\hat{k} = 5\\hat{i} - 3\\hat{j} - \\hat{k} = \\vec{b}$.',
    steps: [
      { step: 'Takes $\\vec{c} = x\\hat{i} + y\\hat{j} + z\\hat{k}$ and expands $\\vec{a} \\times \\vec{c}$ correctly', marks: 1 },
      { step: 'Equates components with $\\vec{b}$ to get three equations', marks: 1 },
      { step: 'Writes $x + 2y - z = 1$ from the dot-product condition', marks: 1 },
      { step: 'Solves to get $\\vec{c} = \\hat{i} + \\hat{j} + 2\\hat{k}$', marks: 1 },
      { step: 'Verifies both conditions', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-d06', chapter: C, topic: TP, type: 'long', complexity: 'hard', marks: 5,
    text: 'The points $A(1, 1, 1)$, $B(3, 2, 3)$, $C(4, 4, 2)$ and $D(2, 3, 0)$ are taken in order.\n(a) Show that $ABCD$ is a parallelogram.\n(b) Using the section formula, show that its diagonals bisect each other and find their common mid-point.\n(c) Find the area of $ABCD$.\n(d) Find the distance between the parallel sides $AB$ and $DC$, and state whether $ABCD$ is a rectangle.',
    answer: '(a) $\\overrightarrow{AB} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ and $\\overrightarrow{DC} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$, so $\\overrightarrow{AB} = \\overrightarrow{DC}$: one pair of opposite sides is equal and parallel, so $ABCD$ is a parallelogram. (Also $\\overrightarrow{AD} = \\overrightarrow{BC} = \\hat{i} + 2\\hat{j} - \\hat{k}$.)\n(b) Mid-point of $AC$ $= \\frac{1}{2}(5\\hat{i} + 5\\hat{j} + 3\\hat{k})$ and mid-point of $BD$ $= \\frac{1}{2}(5\\hat{i} + 5\\hat{j} + 3\\hat{k})$. They coincide at $\\left(\\frac{5}{2}, \\frac{5}{2}, \\frac{3}{2}\\right)$, so the diagonals bisect each other.\n(c) $\\overrightarrow{AB} \\times \\overrightarrow{AD} = (-1 - 4)\\hat{i} - (-2 - 2)\\hat{j} + (4 - 1)\\hat{k} = -5\\hat{i} + 4\\hat{j} + 3\\hat{k}$, with magnitude $\\sqrt{50} = 5\\sqrt{2}$. Area $= 5\\sqrt{2}$ square units.\n(d) $|\\overrightarrow{AB}| = 3$, so the distance between $AB$ and $DC$ is $\\frac{\\text{area}}{AB} = \\frac{5\\sqrt{2}}{3}$ units. Since $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 2 + 2 - 2 = 2 \\neq 0$, the angle at $A$ is not a right angle, so $ABCD$ is not a rectangle.',
    steps: [
      { step: 'Shows $\\overrightarrow{AB} = \\overrightarrow{DC}$, so $ABCD$ is a parallelogram', marks: 1 },
      { step: 'Finds both diagonal mid-points equal to $\\left(\\frac{5}{2}, \\frac{5}{2}, \\frac{3}{2}\\right)$', marks: 1 },
      { step: 'Finds $\\overrightarrow{AB} \\times \\overrightarrow{AD} = -5\\hat{i} + 4\\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: 'Gets area $5\\sqrt{2}$ square units', marks: 1 },
      { step: 'Gets distance $\\frac{5\\sqrt{2}}{3}$ and shows $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} \\neq 0$, so not a rectangle', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-vec-e01', chapter: C, topic: TS, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A survey team sets up a base station at the origin $O$ on a hillside, with distances in hundreds of metres. Two signal towers stand at $A$ and $B$ with position vectors $\\overrightarrow{OA} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ and $\\overrightarrow{OB} = 6\\hat{i} + 2\\hat{j} - 3\\hat{k}$. A cable is to be laid directly from tower $A$ to tower $B$.',
    answer: '(i) $7$ units ($700$ m). (ii) $\\frac{1}{7\\sqrt{2}}(4\\hat{i} - \\hat{j} - 9\\hat{k})$. (iii) $90^{\\circ}$; OR area $\\frac{49}{2}$ square units.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the distance of tower $A$ from the base station.',
        answer: '$|\\overrightarrow{OA}| = \\sqrt{4 + 9 + 36} = 7$ units, that is $700$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the unit vector in the direction of the cable from $A$ to $B$.',
        answer: '$\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = 4\\hat{i} - \\hat{j} - 9\\hat{k}$, with magnitude $\\sqrt{16 + 1 + 81} = \\sqrt{98} = 7\\sqrt{2}$. The unit vector is $\\frac{1}{7\\sqrt{2}}(4\\hat{i} - \\hat{j} - 9\\hat{k})$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the angle $\\angle AOB$ between the directions of the two towers as seen from the base station.\nOR\nFind the area of the triangle $OAB$ formed by the base station and the two towers.',
        answer: '$\\overrightarrow{OA} \\cdot \\overrightarrow{OB} = 12 + 6 - 18 = 0$, so $\\cos\\angle AOB = 0$ and $\\angle AOB = 90^{\\circ}$ (1 mark for the dot product, 1 mark for the angle).\nOR\n$\\overrightarrow{OA} \\times \\overrightarrow{OB} = (-9 - 12)\\hat{i} - (-6 - 36)\\hat{j} + (4 - 18)\\hat{k} = -21\\hat{i} + 42\\hat{j} - 14\\hat{k}$, with magnitude $\\sqrt{441 + 1764 + 196} = 49$. Area $= \\frac{49}{2}$ square units ($245000$ square metres) (1 mark for the cross product, 1 mark for the area). Equivalently, since $OA \\perp OB$, area $= \\frac{1}{2} \\times 7 \\times 7$.',
      },
    ],
  },
  {
    id: 'c12-vec-e02', chapter: C, topic: TB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'For a school camp, a tent pole stands vertically with its foot at the origin $O$ on level ground (the $xy$-plane) and its top at $P(0, 0, 6)$, with distances in metres. Taut ropes run in straight lines from $P$ to pegs in the ground. The first rope goes to a peg at $A(3, 2, 0)$ and a second rope goes to a peg at $B(-2, 3, 0)$.',
    answer: '(i) $7$ m. (ii) $\\frac{3}{7}, \\frac{2}{7}, -\\frac{6}{7}$. (iii) $\\cos^{-1}\\frac{6}{7}$; OR both ropes are $7$ m and the angle between them is $\\cos^{-1}\\frac{36}{49}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the length of the rope $PA$.',
        answer: '$\\overrightarrow{PA} = 3\\hat{i} + 2\\hat{j} - 6\\hat{k}$, so $PA = \\sqrt{9 + 4 + 36} = 7$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the direction cosines of $\\overrightarrow{PA}$.',
        answer: 'Dividing the components of $\\overrightarrow{PA}$ by $7$: $\\frac{3}{7}, \\frac{2}{7}, -\\frac{6}{7}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the angle that the rope $PA$ makes with the pole (that is, with $\\overrightarrow{PO}$).\nOR\nShow that the two ropes have equal length and find the angle between them at $P$.',
        answer: '$\\overrightarrow{PO} = -6\\hat{k}$. $\\cos\\theta = \\frac{\\overrightarrow{PA} \\cdot \\overrightarrow{PO}}{|\\overrightarrow{PA}||\\overrightarrow{PO}|} = \\frac{36}{7 \\times 6} = \\frac{6}{7}$, so $\\theta = \\cos^{-1}\\frac{6}{7}$ (1 mark for the dot product set-up, 1 mark for the angle).\nOR\n$\\overrightarrow{PB} = -2\\hat{i} + 3\\hat{j} - 6\\hat{k}$, so $PB = \\sqrt{4 + 9 + 36} = 7$ m $= PA$ (1 mark). $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = -6 + 6 + 36 = 36$, so $\\cos\\phi = \\frac{36}{49}$ and the angle is $\\cos^{-1}\\frac{36}{49}$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-vec-e03', chapter: C, topic: TP, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A town is laying out a triangular flower bed in a park. On the park map, with the origin at the entrance gate and distances in metres, the corners of the bed are $A(1, 1, 0)$, $B(5, 3, 0)$ and $C(3, 7, 0)$. A straight stone path is to run from corner $A$ to the mid-point $M$ of the side $BC$.',
    answer: '(i) $4\\hat{i} + 5\\hat{j}$. (ii) $5$ m. (iii) $10$ square metres; OR $G = 3\\hat{i} + \\frac{11}{3}\\hat{j}$ with $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the position vector of $M$.',
        answer: '$\\vec{m} = \\frac{1}{2}\\left[(5\\hat{i} + 3\\hat{j}) + (3\\hat{i} + 7\\hat{j})\\right] = 4\\hat{i} + 5\\hat{j}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the length of the path $AM$.',
        answer: '$\\overrightarrow{AM} = 3\\hat{i} + 4\\hat{j}$, so $AM = \\sqrt{9 + 16} = 5$ m.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using vectors, find the area of the flower bed.\nOR\nA fountain is placed at the centroid $G$ of the bed. Find the position vector of $G$ and show that $G$ lies on the path $AM$ with $AG : GM = 2 : 1$.',
        answer: '$\\overrightarrow{AB} = 4\\hat{i} + 2\\hat{j}$, $\\overrightarrow{AC} = 2\\hat{i} + 6\\hat{j}$, so $\\overrightarrow{AB} \\times \\overrightarrow{AC} = (24 - 4)\\hat{k} = 20\\hat{k}$ (1 mark). Area $= \\frac{1}{2} \\times 20 = 10$ square metres (1 mark).\nOR\n$\\vec{g} = \\frac{1}{3}\\left[(1 + 5 + 3)\\hat{i} + (1 + 3 + 7)\\hat{j}\\right] = 3\\hat{i} + \\frac{11}{3}\\hat{j}$ (1 mark). Then $\\overrightarrow{AG} = 2\\hat{i} + \\frac{8}{3}\\hat{j} = \\frac{2}{3}(3\\hat{i} + 4\\hat{j}) = \\frac{2}{3}\\overrightarrow{AM}$, so $G$ lies on $AM$ and $AG : GM = 2 : 1$ (1 mark).',
      },
    ],
  },
];
