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

export const CH10_VEC_R4: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────
  {
    id: 'c12-vec-r4-a01', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The vector of magnitude $9$ units in the direction opposite to $\\hat{i} + 2\\hat{j} + 2\\hat{k}$ is',
    options: [
      '$-3\\hat{i} - 6\\hat{j} - 6\\hat{k}$',
      '$3\\hat{i} + 6\\hat{j} + 6\\hat{k}$',
      '$-9\\hat{i} - 18\\hat{j} - 18\\hat{k}$',
      '$-\\hat{i} - 2\\hat{j} - 2\\hat{k}$',
    ],
    answer: 'Correct option: A) $-3\\hat{i} - 6\\hat{j} - 6\\hat{k}$. The magnitude of $\\hat{i} + 2\\hat{j} + 2\\hat{k}$ is $3$, so the opposite unit vector is $-\\frac{1}{3}(\\hat{i} + 2\\hat{j} + 2\\hat{k})$, and multiplying by $9$ gives $-3(\\hat{i} + 2\\hat{j} + 2\\hat{k})$.',
  },
  {
    id: 'c12-vec-r4-a02', chapter: C, topic: TB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following can be the direction cosines of a straight line?',
    options: [
      '$\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2}$',
      '$\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2}$',
      '$\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}$',
      '$\\frac{1}{3}, \\frac{2}{3}, \\frac{1}{3}$',
    ],
    answer: 'Correct option: B) $\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2}$. Direction cosines must satisfy $l^2 + m^2 + n^2 = 1$. For B: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{4} = 1$. The sums for the others are $\\frac{3}{4}$, $\\frac{4}{3}$ and $\\frac{2}{3}$.',
  },
  {
    id: 'c12-vec-r4-a03', chapter: C, topic: TB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A vector parallel to $2\\hat{i} - 6\\hat{j} + 3\\hat{k}$ has $\\hat{j}$-component equal to $18$. Its magnitude is',
    options: ['$7$', '$18$', '$21$', '$63$'],
    answer: 'Correct option: C) $21$. The vector is $\\lambda(2\\hat{i} - 6\\hat{j} + 3\\hat{k})$ with $-6\\lambda = 18$, so $\\lambda = -3$. Its magnitude is $|\\lambda| \\times 7 = 21$.',
  },
  {
    id: 'c12-vec-r4-a04', chapter: C, topic: TB, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): Every vector has a unit vector in its direction.\nReason (R): The unit vector in the direction of $\\vec{a}$ is $\\frac{\\vec{a}}{|\\vec{a}|}$, which is defined only when $|\\vec{a}| \\neq 0$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. The zero vector has magnitude $0$ and no definite direction, so it has no unit vector in its direction. (R) is correct because $\\frac{\\vec{a}}{|\\vec{a}|}$ needs $|\\vec{a}| \\neq 0$.',
  },
  {
    id: 'c12-vec-r4-a05', chapter: C, topic: TP, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Three vertices of a parallelogram $ABCD$, taken in order, are $A(1, 2, -1)$, $B(3, 0, 2)$ and $C(4, 1, 5)$. The fourth vertex $D$ is',
    options: ['$(0, 1, -4)$', '$(2, 3, 2)$', '$(6, -1, 8)$', '$\\left(\\frac{5}{2}, \\frac{3}{2}, 2\\right)$'],
    answer: 'Correct option: B) $(2, 3, 2)$. In a parallelogram the diagonals $AC$ and $BD$ have the same mid-point, so $A + C = B + D$ and $D = A + C - B = (1 + 4 - 3,\\ 2 + 1 - 0,\\ -1 + 5 - 2) = (2, 3, 2)$.',
  },
  {
    id: 'c12-vec-r4-a06', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'With $O$ as origin, the points $A$ and $B$ have position vectors $\\vec{a}$ and $\\vec{b}$. $M$ is the mid-point of $AB$ and $N$ is the point on $OB$ with $ON : NB = 2 : 1$. Then $\\overrightarrow{MN}$ is',
    options: [
      '$\\frac{\\vec{b} - 3\\vec{a}}{6}$',
      '$\\frac{3\\vec{a} - \\vec{b}}{6}$',
      '$\\frac{4\\vec{b} - 3\\vec{a}}{6}$',
      '$\\frac{\\vec{a} + \\vec{b}}{6}$',
    ],
    answer: 'Correct option: A) $\\frac{\\vec{b} - 3\\vec{a}}{6}$. $\\overrightarrow{OM} = \\frac{\\vec{a} + \\vec{b}}{2}$ and $\\overrightarrow{ON} = \\frac{2}{3}\\vec{b}$, so $\\overrightarrow{MN} = \\frac{2}{3}\\vec{b} - \\frac{\\vec{a} + \\vec{b}}{2} = \\frac{4\\vec{b} - 3\\vec{a} - 3\\vec{b}}{6} = \\frac{\\vec{b} - 3\\vec{a}}{6}$.',
  },
  {
    id: 'c12-vec-r4-a07', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The centroid of triangle $ABC$ is $G(2, 1, 0)$ and the vertex $A$ is $(1, -2, 3)$. The mid-point of $BC$ is',
    options: [
      '$(5, 5, -3)$',
      '$\\left(\\frac{5}{2}, \\frac{5}{2}, -\\frac{3}{2}\\right)$',
      '$\\left(\\frac{3}{2}, -\\frac{1}{2}, \\frac{3}{2}\\right)$',
      '$(3, 4, -3)$',
    ],
    answer: 'Correct option: B) $\\left(\\frac{5}{2}, \\frac{5}{2}, -\\frac{3}{2}\\right)$. The centroid divides the median $AM$ in the ratio $2 : 1$, so $G = \\frac{A + 2M}{3}$ and $M = \\frac{3G - A}{2} = \\frac{(6 - 1,\\ 3 + 2,\\ 0 - 3)}{2} = \\left(\\frac{5}{2}, \\frac{5}{2}, -\\frac{3}{2}\\right)$.',
  },
  {
    id: 'c12-vec-r4-a08', chapter: C, topic: TP, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The point $R$ divides the segment $PQ$ externally in the ratio $3 : 2$. Then $P$ divides the segment $RQ$',
    options: [
      'internally in the ratio $3 : 1$',
      'externally in the ratio $3 : 1$',
      'externally in the ratio $2 : 3$',
      'internally in the ratio $2 : 3$',
    ],
    answer: 'Correct option: B) externally in the ratio $3 : 1$. By the external section formula $\\vec{r} = 3\\vec{q} - 2\\vec{p}$. Rearranging, $\\vec{p} = \\frac{3\\vec{q} - \\vec{r}}{2}$, which is the external division of $RQ$ with $RP : PQ = 3 : 1$. As a check, with $P = 0$ and $Q = 1$ on a number line, $R = 3$; then $P$ lies outside $RQ$ and $RP = 3$, $PQ = 1$.',
  },
  {
    id: 'c12-vec-r4-a09', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the vectors $\\hat{i} + \\sqrt{3}\\,\\hat{j}$ and $\\sqrt{3}\\,\\hat{i} + \\hat{j}$ is',
    options: ['$30^{\\circ}$', '$60^{\\circ}$', '$45^{\\circ}$', '$90^{\\circ}$'],
    answer: 'Correct option: A) $30^{\\circ}$. The dot product is $\\sqrt{3} + \\sqrt{3} = 2\\sqrt{3}$ and each vector has magnitude $2$, so $\\cos\\theta = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$ and $\\theta = 30^{\\circ}$.',
  },
  {
    id: 'c12-vec-r4-a10', chapter: C, topic: TS, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $|\\vec{a}| = 3$ and $|\\vec{b}| = 2$, then $(2\\vec{a} + 3\\vec{b}) \\cdot (2\\vec{a} - 3\\vec{b})$ equals',
    options: ['$0$', '$72$', '$36$', '$-36$'],
    answer: 'Correct option: A) $0$. $(2\\vec{a} + 3\\vec{b}) \\cdot (2\\vec{a} - 3\\vec{b}) = 4|\\vec{a}|^2 - 9|\\vec{b}|^2 = 4(9) - 9(4) = 0$.',
  },
  {
    id: 'c12-vec-r4-a11', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A force $\\vec{F} = 6\\hat{i} - 2\\hat{j} + 3\\hat{k}$ (in newtons) acts on a particle. The component of $\\vec{F}$ along the direction of $\\hat{i} + 2\\hat{j} + 2\\hat{k}$ is',
    options: ['$\\frac{8}{3}$', '$\\frac{8}{9}$', '$8$', '$\\frac{2}{3}$'],
    answer: 'Correct option: A) $\\frac{8}{3}$. The component is the scalar projection $\\frac{\\vec{F} \\cdot \\vec{d}}{|\\vec{d}|} = \\frac{6 - 4 + 6}{3} = \\frac{8}{3}$. Dividing by $|\\vec{d}|^2$ instead, or not dividing at all, gives the other values.',
  },
  {
    id: 'c12-vec-r4-a12', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The unit vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ satisfy $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$. Then $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$ equals',
    options: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$-1$', '$0$'],
    answer: 'Correct option: B) $-\\frac{3}{2}$. Since $|\\vec{a} + \\vec{b} + \\vec{c}|^2 = 0$, we get $3 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$, so the sum is $-\\frac{3}{2}$.',
  },
  {
    id: 'c12-vec-r4-a13', chapter: C, topic: TS, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The vector $3\\hat{i} + 4\\hat{j} + \\lambda\\hat{k}$, with $\\lambda > 0$, makes an angle of $45^{\\circ}$ with the positive $z$-axis. Then $\\lambda$ equals',
    options: ['$5$', '$5\\sqrt{2}$', '$25$', '$7$'],
    answer: 'Correct option: A) $5$. The cosine of the angle with the $z$-axis is $\\frac{\\lambda}{\\sqrt{25 + \\lambda^2}} = \\frac{1}{\\sqrt{2}}$. Squaring, $2\\lambda^2 = 25 + \\lambda^2$, so $\\lambda^2 = 25$ and $\\lambda = 5$ (as $\\lambda > 0$).',
  },
  {
    id: 'c12-vec-r4-a14', chapter: C, topic: TS, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): For any two vectors $\\vec{a}$ and $\\vec{b}$, $|\\vec{a} \\cdot \\vec{b}| \\le |\\vec{a}|\\,|\\vec{b}|$.\nReason (R): $\\vec{a} \\cdot \\vec{b} = |\\vec{a}|\\,|\\vec{b}|\\cos\\theta$, and $-1 \\le \\cos\\theta \\le 1$ for every angle $\\theta$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both true, and (R) explains (A). Taking absolute values, $|\\vec{a} \\cdot \\vec{b}| = |\\vec{a}|\\,|\\vec{b}|\\,|\\cos\\theta| \\le |\\vec{a}|\\,|\\vec{b}|$ because $|\\cos\\theta| \\le 1$.',
  },
  {
    id: 'c12-vec-r4-a15', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\hat{k} \\times (\\hat{i} - \\hat{j})$ is',
    options: ['$\\hat{i} + \\hat{j}$', '$\\hat{i} - \\hat{j}$', '$\\hat{j} - \\hat{i}$', '$-\\hat{i} - \\hat{j}$'],
    answer: 'Correct option: A) $\\hat{i} + \\hat{j}$. $\\hat{k} \\times \\hat{i} = \\hat{j}$ and $\\hat{k} \\times \\hat{j} = -\\hat{i}$, so $\\hat{k} \\times (\\hat{i} - \\hat{j}) = \\hat{j} - (-\\hat{i}) = \\hat{i} + \\hat{j}$.',
  },
  {
    id: 'c12-vec-r4-a16', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For vectors $\\vec{a}$ and $\\vec{b}$ inclined at $30^{\\circ}$, $|\\vec{a}| = 3$ and $|\\vec{a} \\times \\vec{b}| = 3$. Then $|\\vec{b}|$ equals',
    options: ['$1$', '$2$', '$4$', '$\\frac{2}{\\sqrt{3}}$'],
    answer: 'Correct option: B) $2$. $|\\vec{a} \\times \\vec{b}| = |\\vec{a}|\\,|\\vec{b}|\\sin 30^{\\circ}$, so $3 = 3\\,|\\vec{b}| \\cdot \\frac{1}{2}$ and $|\\vec{b}| = 2$.',
  },
  {
    id: 'c12-vec-r4-a17', chapter: C, topic: TV, type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\hat{a}$ and $\\hat{b}$ are unit vectors with $|\\hat{a} \\times \\hat{b}| = \\frac{1}{2}$ and $\\hat{a} \\cdot \\hat{b} < 0$. The angle between them is',
    options: ['$30^{\\circ}$', '$60^{\\circ}$', '$120^{\\circ}$', '$150^{\\circ}$'],
    answer: 'Correct option: D) $150^{\\circ}$. For unit vectors $|\\hat{a} \\times \\hat{b}| = \\sin\\theta = \\frac{1}{2}$, so $\\theta = 30^{\\circ}$ or $150^{\\circ}$. A negative dot product means $\\cos\\theta < 0$, so $\\theta$ is obtuse: $150^{\\circ}$.',
  },
  {
    id: 'c12-vec-r4-a18', chapter: C, topic: TV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The vectors $\\vec{a} = \\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{b} = 2\\hat{i} + 4\\hat{j} + \\lambda\\hat{k}$ satisfy $\\vec{a} \\times \\vec{b} = \\vec{0}$. Then $\\lambda$ is',
    options: ['$2$', '$-2$', '$4$', '$-4$'],
    answer: 'Correct option: B) $-2$. The cross product of non-zero vectors is zero only when they are parallel, so $\\vec{b} = 2\\vec{a} = 2\\hat{i} + 4\\hat{j} - 2\\hat{k}$, giving $\\lambda = -2$.',
  },
  {
    id: 'c12-vec-r4-a19', chapter: C, topic: TV, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): If $\\vec{a} \\times \\vec{b} = \\vec{a} \\times \\vec{c}$ for a non-zero $\\vec{a}$, then $\\vec{b} = \\vec{c}$.\nReason (R): The vector product of two non-zero vectors is the zero vector if and only if they are parallel.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. From $\\vec{a} \\times (\\vec{b} - \\vec{c}) = \\vec{0}$ we only get that $\\vec{b} - \\vec{c}$ is parallel to $\\vec{a}$ (or zero), not that $\\vec{b} = \\vec{c}$. For example $\\vec{b} = \\hat{j}$ and $\\vec{c} = \\hat{j} + \\vec{a}$ give equal cross products. (R) is a true statement.',
  },
  {
    id: 'c12-vec-r4-a20', chapter: C, topic: TV, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'Non-zero vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ satisfy $\\vec{a} \\times \\vec{b} = \\vec{c}$ and $\\vec{b} \\times \\vec{c} = \\vec{a}$. Then $|\\vec{b}|$ equals',
    options: ['$1$', '$|\\vec{a}|$', '$2$', 'it cannot be determined from the data'],
    answer: 'Correct option: A) $1$. From $\\vec{a} = \\vec{b} \\times \\vec{c}$, $\\vec{a} \\perp \\vec{b}$, so $|\\vec{c}| = |\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|$. Also $\\vec{c} \\perp \\vec{b}$ (as $\\vec{c} = \\vec{a} \\times \\vec{b}$), so $|\\vec{a}| = |\\vec{b} \\times \\vec{c}| = |\\vec{b}||\\vec{c}|$. Hence $|\\vec{a}| = |\\vec{b}|^2|\\vec{a}|$ and, as $|\\vec{a}| \\neq 0$, $|\\vec{b}| = 1$.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-vec-r4-b01', chapter: C, topic: TB, type: 'short', complexity: 'easy', marks: 2,
    text: 'In a parallelogram $ABCD$, $\\overrightarrow{AB} = \\vec{a}$ and $\\overrightarrow{AD} = \\vec{b}$. Express $\\overrightarrow{AC}$, $\\overrightarrow{DB}$ and $\\overrightarrow{AM}$ in terms of $\\vec{a}$ and $\\vec{b}$, where $M$ is the mid-point of $BC$.',
    answer: 'Since $\\overrightarrow{BC} = \\overrightarrow{AD} = \\vec{b}$, the triangle law gives $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC} = \\vec{a} + \\vec{b}$. Also $\\overrightarrow{DB} = \\overrightarrow{DA} + \\overrightarrow{AB} = -\\vec{b} + \\vec{a} = \\vec{a} - \\vec{b}$. As $M$ is the mid-point of $BC$, $\\overrightarrow{BM} = \\frac{1}{2}\\vec{b}$, so $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\vec{a} + \\frac{1}{2}\\vec{b}$.',
    steps: [
      { step: 'Uses the triangle law with $\\overrightarrow{BC} = \\overrightarrow{AD}$ to get $\\overrightarrow{AC} = \\vec{a} + \\vec{b}$ and $\\overrightarrow{DB} = \\vec{a} - \\vec{b}$', marks: 1 },
      { step: 'Uses $\\overrightarrow{BM} = \\frac{1}{2}\\vec{b}$ to get $\\overrightarrow{AM} = \\vec{a} + \\frac{1}{2}\\vec{b}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-b02', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 2,
    text: 'In triangle $ABC$ with $A(1, -1, 2)$, $B(4, 3, 2)$ and $C(7, -1, 10)$, the internal bisector of $\\angle A$ meets $BC$ at $D$. Using the fact that $D$ divides $BC$ internally in the ratio $AB : AC$, find the coordinates of $D$.',
    answer: '$\\overrightarrow{AB} = 3\\hat{i} + 4\\hat{j}$, so $AB = 5$; $\\overrightarrow{AC} = 6\\hat{i} + 8\\hat{k}$, so $AC = 10$. Hence $BD : DC = AB : AC = 1 : 2$. By the section formula, $D = \\frac{2B + 1\\cdot C}{3} = \\frac{(8 + 7,\\ 6 - 1,\\ 4 + 10)}{3} = \\left(5, \\frac{5}{3}, \\frac{14}{3}\\right)$.',
    steps: [
      { step: 'Finds $AB = 5$ and $AC = 10$ and so the ratio $BD : DC = 1 : 2$', marks: 1 },
      { step: 'Applies the internal section formula to get $D = \\left(5, \\frac{5}{3}, \\frac{14}{3}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-b03', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $\\hat{a}$ and $\\hat{b}$ are unit vectors inclined at an angle $\\theta$, prove that $\\sin\\frac{\\theta}{2} = \\frac{1}{2}|\\hat{a} - \\hat{b}|$.',
    answer: '$|\\hat{a} - \\hat{b}|^2 = |\\hat{a}|^2 - 2\\hat{a} \\cdot \\hat{b} + |\\hat{b}|^2 = 2 - 2\\cos\\theta = 4\\sin^2\\frac{\\theta}{2}$. For $0 \\le \\theta \\le \\pi$, $\\sin\\frac{\\theta}{2} \\ge 0$, so taking square roots, $|\\hat{a} - \\hat{b}| = 2\\sin\\frac{\\theta}{2}$, that is $\\sin\\frac{\\theta}{2} = \\frac{1}{2}|\\hat{a} - \\hat{b}|$.',
    steps: [
      { step: 'Expands $|\\hat{a} - \\hat{b}|^2 = 2 - 2\\cos\\theta$ using unit magnitudes and the dot product', marks: 1 },
      { step: 'Uses $1 - \\cos\\theta = 2\\sin^2\\frac{\\theta}{2}$ and takes the non-negative square root', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-b04', chapter: C, topic: TS, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the unit vectors lying in the $xy$-plane that are perpendicular to $3\\hat{i} - 4\\hat{j} + \\hat{k}$.',
    answer: 'A vector in the $xy$-plane is $x\\hat{i} + y\\hat{j}$. Perpendicularity gives $3x - 4y = 0$, so $x : y = 4 : 3$ and the vector is a multiple of $4\\hat{i} + 3\\hat{j}$, which has magnitude $5$. The unit vectors are $\\pm\\frac{1}{5}(4\\hat{i} + 3\\hat{j})$.',
    steps: [
      { step: 'Writes $x\\hat{i} + y\\hat{j}$ and sets the dot product to zero to get $3x - 4y = 0$', marks: 1 },
      { step: 'Normalises to get both unit vectors $\\pm\\frac{4\\hat{i} + 3\\hat{j}}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-b05', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find a vector of magnitude $12$ that is perpendicular to both $\\vec{a} = 3\\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\vec{b} = 2\\hat{i} + 2\\hat{j} + \\hat{k}$ and makes an acute angle with the positive $z$-axis.',
    answer: '$\\vec{a} \\times \\vec{b} = (2 - 4)\\hat{i} - (3 - 4)\\hat{j} + (6 - 4)\\hat{k} = -2\\hat{i} + \\hat{j} + 2\\hat{k}$, with magnitude $3$. The vectors perpendicular to both are parallel to this one. An acute angle with the positive $z$-axis needs a positive $\\hat{k}$-component, so we take the direction $\\frac{-2\\hat{i} + \\hat{j} + 2\\hat{k}}{3}$. The required vector is $12 \\times \\frac{-2\\hat{i} + \\hat{j} + 2\\hat{k}}{3} = -8\\hat{i} + 4\\hat{j} + 8\\hat{k}$.',
    steps: [
      { step: 'Computes $\\vec{a} \\times \\vec{b} = -2\\hat{i} + \\hat{j} + 2\\hat{k}$ and its magnitude $3$', marks: 1 },
      { step: 'Chooses the sense with positive $\\hat{k}$-component and scales to magnitude $12$: $-8\\hat{i} + 4\\hat{j} + 8\\hat{k}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-b06', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 2,
    text: 'The vectors $\\vec{a}$ and $\\vec{b}$ have $|\\vec{a}| = 2$, $|\\vec{b}| = 3$ and the angle between them is $60^{\\circ}$. Find the area of triangle $OAB$, where $\\overrightarrow{OA} = 2\\vec{a} + 3\\vec{b}$ and $\\overrightarrow{OB} = \\vec{a} - \\vec{b}$.',
    answer: '$\\overrightarrow{OA} \\times \\overrightarrow{OB} = (2\\vec{a} + 3\\vec{b}) \\times (\\vec{a} - \\vec{b}) = -2(\\vec{a} \\times \\vec{b}) + 3(\\vec{b} \\times \\vec{a}) = -5(\\vec{a} \\times \\vec{b})$, using $\\vec{a} \\times \\vec{a} = \\vec{b} \\times \\vec{b} = \\vec{0}$. Now $|\\vec{a} \\times \\vec{b}| = 2 \\cdot 3 \\cdot \\sin 60^{\\circ} = 3\\sqrt{3}$, so $|\\overrightarrow{OA} \\times \\overrightarrow{OB}| = 15\\sqrt{3}$ and the area is $\\frac{1}{2} \\cdot 15\\sqrt{3} = \\frac{15\\sqrt{3}}{2}$ square units.',
    steps: [
      { step: 'Expands the cross product to get $-5(\\vec{a} \\times \\vec{b})$', marks: 1 },
      { step: 'Finds $|\\vec{a} \\times \\vec{b}| = 3\\sqrt{3}$ and the area $\\frac{15\\sqrt{3}}{2}$', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-vec-r4-c01', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 3,
    text: 'Show that the vectors $\\vec{a} = 3\\hat{i} + 2\\hat{j} - 2\\hat{k}$, $\\vec{b} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{c} = \\hat{i} - \\hat{j} - \\hat{k}$ can be the sides of a right-angled triangle, and find its area.',
    answer: '$\\vec{b} + \\vec{c} = 3\\hat{i} + 2\\hat{j} - 2\\hat{k} = \\vec{a}$, so the three vectors can be placed head to tail to form a triangle. $\\vec{b} \\cdot \\vec{c} = 2 - 3 + 1 = 0$, so $\\vec{b} \\perp \\vec{c}$ and the triangle is right-angled between sides $\\vec{b}$ and $\\vec{c}$ (check: $|\\vec{b}|^2 + |\\vec{c}|^2 = 14 + 3 = 17 = |\\vec{a}|^2$). The area is $\\frac{1}{2}|\\vec{b}||\\vec{c}| = \\frac{1}{2}\\sqrt{14}\\sqrt{3} = \\frac{\\sqrt{42}}{2}$ square units.',
    steps: [
      { step: 'Shows $\\vec{b} + \\vec{c} = \\vec{a}$, so the vectors form a triangle', marks: 1 },
      { step: 'Shows $\\vec{b} \\cdot \\vec{c} = 0$, giving the right angle (Pythagoras $14 + 3 = 17$)', marks: 1 },
      { step: 'Area $= \\frac{1}{2}|\\vec{b}||\\vec{c}| = \\frac{\\sqrt{42}}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c02', chapter: C, topic: TB, type: 'short', complexity: 'medium', marks: 3,
    text: 'A vector $\\vec{r}$ of magnitude $6$ makes equal acute angles with the positive $x$- and $y$-axes and an angle of $135^{\\circ}$ with the positive $z$-axis. Find its direction cosines, the angle it makes with the $x$-axis, and $\\vec{r}$ in component form.',
    answer: 'Let the direction cosines be $l, m, n$ with $l = m$ (acute) and $n = \\cos 135^{\\circ} = -\\frac{1}{\\sqrt{2}}$. From $l^2 + m^2 + n^2 = 1$: $2l^2 + \\frac{1}{2} = 1$, so $l^2 = \\frac{1}{4}$ and $l = m = \\frac{1}{2}$ (positive since acute). The direction cosines are $\\frac{1}{2}, \\frac{1}{2}, -\\frac{1}{\\sqrt{2}}$ and the angle with the $x$-axis is $60^{\\circ}$. Then $\\vec{r} = 6(l\\hat{i} + m\\hat{j} + n\\hat{k}) = 3\\hat{i} + 3\\hat{j} - 3\\sqrt{2}\\,\\hat{k}$. Check: $9 + 9 + 18 = 36$.',
    steps: [
      { step: 'Finds $n = \\cos 135^{\\circ} = -\\frac{1}{\\sqrt{2}}$ and uses $l = m$ with $l^2 + m^2 + n^2 = 1$', marks: 1 },
      { step: 'Gets $l = m = \\frac{1}{2}$ and the angle $60^{\\circ}$ with the $x$-axis', marks: 1 },
      { step: 'Writes $\\vec{r} = 3\\hat{i} + 3\\hat{j} - 3\\sqrt{2}\\,\\hat{k}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c03', chapter: C, topic: TB, type: 'short', complexity: 'easy', marks: 3,
    text: 'Show that the points $A(4, 1, 1)$, $B(1, 4, 1)$ and $C(1, 1, 4)$ are the vertices of an equilateral triangle. Also find $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA}$ and the unit vector along $\\overrightarrow{AB}$.',
    answer: '$\\overrightarrow{AB} = -3\\hat{i} + 3\\hat{j}$, $\\overrightarrow{BC} = -3\\hat{j} + 3\\hat{k}$ and $\\overrightarrow{CA} = 3\\hat{i} - 3\\hat{k}$. Each has magnitude $\\sqrt{9 + 9} = 3\\sqrt{2}$, so $AB = BC = CA$ and the triangle is equilateral. The sum is $(-3 + 0 + 3)\\hat{i} + (3 - 3 + 0)\\hat{j} + (0 + 3 - 3)\\hat{k} = \\vec{0}$, as it must be for a closed triangle. The unit vector along $\\overrightarrow{AB}$ is $\\frac{-3\\hat{i} + 3\\hat{j}}{3\\sqrt{2}} = \\frac{-\\hat{i} + \\hat{j}}{\\sqrt{2}}$.',
    steps: [
      { step: 'Finds the three side vectors $\\overrightarrow{AB}$, $\\overrightarrow{BC}$, $\\overrightarrow{CA}$', marks: 1 },
      { step: 'Shows all three magnitudes equal $3\\sqrt{2}$ and the sum is $\\vec{0}$', marks: 1 },
      { step: 'Gives the unit vector $\\frac{-\\hat{i} + \\hat{j}}{\\sqrt{2}}$ along $\\overrightarrow{AB}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c04', chapter: C, topic: TP, type: 'short', complexity: 'medium', marks: 3,
    text: 'The mid-points of the sides $BC$, $CA$ and $AB$ of triangle $ABC$ are $D$, $E$ and $F$. If $A$, $B$, $C$ have position vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$, show that triangles $ABC$ and $DEF$ have the same centroid.',
    answer: 'By the mid-point formula, $D = \\frac{\\vec{b} + \\vec{c}}{2}$, $E = \\frac{\\vec{c} + \\vec{a}}{2}$ and $F = \\frac{\\vec{a} + \\vec{b}}{2}$. The centroid of $DEF$ is $\\frac{1}{3}\\left(\\frac{\\vec{b} + \\vec{c}}{2} + \\frac{\\vec{c} + \\vec{a}}{2} + \\frac{\\vec{a} + \\vec{b}}{2}\\right) = \\frac{1}{3} \\cdot \\frac{2(\\vec{a} + \\vec{b} + \\vec{c})}{2} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$, which is the centroid of $ABC$.',
    steps: [
      { step: 'Writes the position vectors of $D$, $E$, $F$ as mid-points', marks: 1 },
      { step: 'Forms the centroid of $DEF$ as one third of their sum', marks: 1 },
      { step: 'Simplifies to $\\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$ and concludes it equals the centroid of $ABC$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c05', chapter: C, topic: TP, type: 'short', complexity: 'hard', marks: 3,
    text: 'In triangle $ABC$, $D$ is the point on $BC$ with $BD : DC = 1 : 2$ and $E$ is the mid-point of $AD$. The line $BE$ is extended to meet $AC$ at $F$. Taking $A$ as the origin with $\\overrightarrow{AB} = \\vec{b}$ and $\\overrightarrow{AC} = \\vec{c}$, find the ratio $AF : FC$.',
    answer: '$D = \\frac{2\\vec{b} + \\vec{c}}{3}$ and $E = \\frac{D}{2} = \\frac{2\\vec{b} + \\vec{c}}{6}$. A point on line $BE$ is $\\vec{b} + t(E - \\vec{b}) = \\vec{b} + t\\left(\\frac{\\vec{c} - 4\\vec{b}}{6}\\right) = \\left(1 - \\frac{2t}{3}\\right)\\vec{b} + \\frac{t}{6}\\vec{c}$. A point on $AC$ is a multiple of $\\vec{c}$ alone, so the coefficient of $\\vec{b}$ must vanish: $1 - \\frac{2t}{3} = 0$, $t = \\frac{3}{2}$. Then $F = \\frac{3}{2} \\cdot \\frac{1}{6}\\vec{c} = \\frac{1}{4}\\vec{c}$, so $AF = \\frac{1}{4}AC$ and $AF : FC = 1 : 3$.',
    steps: [
      { step: 'Finds $D = \\frac{2\\vec{b} + \\vec{c}}{3}$ and $E = \\frac{2\\vec{b} + \\vec{c}}{6}$', marks: 1 },
      { step: 'Writes a general point of line $BE$ and requires it to lie along $\\vec{c}$ (coefficient of $\\vec{b}$ zero), giving $t = \\frac{3}{2}$', marks: 1 },
      { step: 'Gets $F = \\frac{1}{4}\\vec{c}$ and so $AF : FC = 1 : 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c06', chapter: C, topic: TS, type: 'short', complexity: 'medium', marks: 3,
    text: 'For any two vectors $\\vec{a}$ and $\\vec{b}$, prove that $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$, and state when equality holds.',
    answer: '$|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + 2\\,\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2$. Since $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta \\le |\\vec{a}||\\vec{b}|$, we get $|\\vec{a} + \\vec{b}|^2 \\le |\\vec{a}|^2 + 2|\\vec{a}||\\vec{b}| + |\\vec{b}|^2 = (|\\vec{a}| + |\\vec{b}|)^2$. Both sides are non-negative, so taking square roots gives $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$. Equality needs $\\cos\\theta = 1$, that is $\\theta = 0$: the vectors point in the same direction (or one of them is the zero vector).',
    steps: [
      { step: 'Expands $|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2$', marks: 1 },
      { step: 'Uses $\\vec{a} \\cdot \\vec{b} \\le |\\vec{a}||\\vec{b}|$ to bound by $(|\\vec{a}| + |\\vec{b}|)^2$ and takes square roots', marks: 1 },
      { step: 'States equality holds when the vectors have the same direction ($\\cos\\theta = 1$) or one is zero', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c07', chapter: C, topic: TS, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $\\vec{a} = 2\\hat{i} + 4\\hat{j} + 5\\hat{k}$ and $\\vec{b} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$. Find the real number $\\lambda$ for which $|\\vec{a} + \\lambda\\vec{b}|$ is least, and the least value. Show that for this $\\lambda$ the vector $\\vec{a} + \\lambda\\vec{b}$ is perpendicular to $\\vec{b}$.',
    answer: '$|\\vec{a}|^2 = 45$, $\\vec{a} \\cdot \\vec{b} = 4 + 4 + 10 = 18$ and $|\\vec{b}|^2 = 9$. So $|\\vec{a} + \\lambda\\vec{b}|^2 = 45 + 36\\lambda + 9\\lambda^2 = 9(\\lambda + 2)^2 + 9$. This is least when $\\lambda = -2$, and the least value of $|\\vec{a} + \\lambda\\vec{b}|$ is $\\sqrt{9} = 3$. For $\\lambda = -2$: $\\vec{a} - 2\\vec{b} = -2\\hat{i} + 2\\hat{j} + \\hat{k}$, whose magnitude is $3$ and whose dot product with $\\vec{b}$ is $-4 + 2 + 2 = 0$, so it is perpendicular to $\\vec{b}$.',
    steps: [
      { step: 'Expands $|\\vec{a} + \\lambda\\vec{b}|^2 = 45 + 36\\lambda + 9\\lambda^2$ using the dot products', marks: 1 },
      { step: 'Completes the square to get $\\lambda = -2$ and least value $3$', marks: 1 },
      { step: 'Shows $(\\vec{a} - 2\\vec{b}) \\cdot \\vec{b} = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c08', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $\\vec{a} = 3\\hat{i} + 2\\hat{j} - 2\\hat{k}$ and $\\vec{b} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$. Find the unit vectors that are perpendicular to both $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$.',
    answer: '$\\vec{a} + \\vec{b} = 5\\hat{i} + 4\\hat{j} - 3\\hat{k}$ and $\\vec{a} - \\vec{b} = \\hat{i} - \\hat{k}$. Their cross product is $\\begin{vmatrix}\\hat{i} & \\hat{j} & \\hat{k}\\\\ 5 & 4 & -3\\\\ 1 & 0 & -1\\end{vmatrix} = (-4 - 0)\\hat{i} - (-5 + 3)\\hat{j} + (0 - 4)\\hat{k} = -4\\hat{i} + 2\\hat{j} - 4\\hat{k}$, of magnitude $6$. The required unit vectors are $\\pm\\frac{1}{6}(-4\\hat{i} + 2\\hat{j} - 4\\hat{k}) = \\pm\\frac{1}{3}(2\\hat{i} - \\hat{j} + 2\\hat{k})$.',
    steps: [
      { step: 'Computes $\\vec{a} + \\vec{b} = 5\\hat{i} + 4\\hat{j} - 3\\hat{k}$ and $\\vec{a} - \\vec{b} = \\hat{i} - \\hat{k}$', marks: 1 },
      { step: 'Finds their cross product $-4\\hat{i} + 2\\hat{j} - 4\\hat{k}$ and its magnitude $6$', marks: 1 },
      { step: 'Divides by the magnitude and gives both signs: $\\pm\\frac{2\\hat{i} - \\hat{j} + 2\\hat{k}}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c09', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A parallelogram has adjacent sides $\\vec{a} = -\\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$. Find its area, the lengths of its diagonals and the cosine of the acute angle between the diagonals.',
    answer: '$\\vec{a} \\times \\vec{b} = (3 - 2)\\hat{i} - (-3 - 1)\\hat{j} + (-2 - 1)\\hat{k} = \\hat{i} + 4\\hat{j} - 3\\hat{k}$, so the area is $\\sqrt{1 + 16 + 9} = \\sqrt{26}$ square units. The diagonals are $\\vec{a} + \\vec{b} = 3\\hat{j} + 4\\hat{k}$ (length $5$) and $\\vec{a} - \\vec{b} = -2\\hat{i} - \\hat{j} - 2\\hat{k}$ (length $3$). Their dot product is $-3 - 8 = -11$, so the cosine of the angle between them is $\\frac{-11}{15}$, and the acute angle between the diagonals has cosine $\\frac{11}{15}$.',
    steps: [
      { step: 'Finds $\\vec{a} \\times \\vec{b} = \\hat{i} + 4\\hat{j} - 3\\hat{k}$ and the area $\\sqrt{26}$', marks: 1 },
      { step: 'Finds the diagonals $\\vec{a} + \\vec{b}$, $\\vec{a} - \\vec{b}$ and their lengths $5$ and $3$', marks: 1 },
      { step: 'Uses the dot product $-11$ to get acute-angle cosine $\\frac{11}{15}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-c10', chapter: C, topic: TV, type: 'short', complexity: 'medium', marks: 3,
    text: 'The mid-points of the sides $BC$, $CA$, $AB$ of triangle $ABC$ are $D$, $E$, $F$. Using the vector product, prove that the area of triangle $DEF$ is one-fourth of the area of triangle $ABC$.',
    answer: 'Let $A$, $B$, $C$ have position vectors $\\vec{a}$, $\\vec{b}$, $\\vec{c}$. Then $D = \\frac{\\vec{b} + \\vec{c}}{2}$, $E = \\frac{\\vec{c} + \\vec{a}}{2}$, $F = \\frac{\\vec{a} + \\vec{b}}{2}$, so $\\overrightarrow{ED} = \\frac{\\vec{b} - \\vec{a}}{2}$ and $\\overrightarrow{EF} = \\frac{\\vec{b} - \\vec{c}}{2}$. Since $\\vec{b} - \\vec{c} = (\\vec{b} - \\vec{a}) - (\\vec{c} - \\vec{a})$, $\\overrightarrow{ED} \\times \\overrightarrow{EF} = \\frac{1}{4}(\\vec{b} - \\vec{a}) \\times \\big[(\\vec{b} - \\vec{a}) - (\\vec{c} - \\vec{a})\\big] = -\\frac{1}{4}(\\vec{b} - \\vec{a}) \\times (\\vec{c} - \\vec{a}) = -\\frac{1}{4}\\,\\overrightarrow{AB} \\times \\overrightarrow{AC}$. Taking magnitudes, $\\frac{1}{2}|\\overrightarrow{ED} \\times \\overrightarrow{EF}| = \\frac{1}{4} \\cdot \\frac{1}{2}|\\overrightarrow{AB} \\times \\overrightarrow{AC}|$, that is, area of $DEF$ is $\\frac{1}{4}$ area of $ABC$.',
    steps: [
      { step: 'Writes the position vectors of $D$, $E$, $F$ and the side vectors $\\overrightarrow{ED}$, $\\overrightarrow{EF}$', marks: 1 },
      { step: 'Expands $\\overrightarrow{ED} \\times \\overrightarrow{EF}$ and relates it to $-\\frac{1}{4}\\overrightarrow{AB} \\times \\overrightarrow{AC}$', marks: 1 },
      { step: 'Takes magnitudes and halves to conclude area$(DEF) = \\frac{1}{4}$ area$(ABC)$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-vec-r4-d01', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: '$ABCD$ is a parallelogram with $\\overrightarrow{AB} = \\vec{a}$ and $\\overrightarrow{AD} = \\vec{b}$, and $P$, $Q$, $R$, $S$ are the mid-points of $AB$, $BC$, $CD$, $DA$.\n(a) Taking $A$ as origin, write the position vectors of $P$, $Q$, $R$, $S$.\n(b) Show that $PQRS$ is a parallelogram.\n(c) Prove that the area of $PQRS$ is half the area of $ABCD$.\n(d) For $\\vec{a} = 2\\hat{i} + \\hat{j} - \\hat{k}$ and $\\vec{b} = \\hat{i} + 3\\hat{j} + 2\\hat{k}$, find the area of $PQRS$.',
    answer: '(a) With $A$ as origin, $B = \\vec{a}$, $D = \\vec{b}$, $C = \\vec{a} + \\vec{b}$. So $P = \\frac{\\vec{a}}{2}$, $Q = \\frac{\\vec{a} + (\\vec{a} + \\vec{b})}{2} = \\vec{a} + \\frac{\\vec{b}}{2}$, $R = \\frac{(\\vec{a} + \\vec{b}) + \\vec{b}}{2} = \\frac{\\vec{a}}{2} + \\vec{b}$, $S = \\frac{\\vec{b}}{2}$.\n(b) $\\overrightarrow{PQ} = Q - P = \\frac{\\vec{a} + \\vec{b}}{2}$ and $\\overrightarrow{SR} = R - S = \\frac{\\vec{a} + \\vec{b}}{2}$. So $\\overrightarrow{PQ} = \\overrightarrow{SR}$: one pair of opposite sides is equal and parallel, hence $PQRS$ is a parallelogram.\n(c) $\\overrightarrow{PS} = S - P = \\frac{\\vec{b} - \\vec{a}}{2}$. Then $\\overrightarrow{PQ} \\times \\overrightarrow{PS} = \\frac{1}{4}(\\vec{a} + \\vec{b}) \\times (\\vec{b} - \\vec{a}) = \\frac{1}{4}(\\vec{a} \\times \\vec{b} - \\vec{a} \\times \\vec{a} + \\vec{b} \\times \\vec{b} - \\vec{b} \\times \\vec{a}) = \\frac{1}{4}(2\\,\\vec{a} \\times \\vec{b}) = \\frac{1}{2}\\vec{a} \\times \\vec{b}$. So area of $PQRS = \\frac{1}{2}|\\vec{a} \\times \\vec{b}|$, which is half the area $|\\vec{a} \\times \\vec{b}|$ of $ABCD$.\n(d) $\\vec{a} \\times \\vec{b} = (2 + 3)\\hat{i} - (4 + 1)\\hat{j} + (6 - 1)\\hat{k} = 5\\hat{i} - 5\\hat{j} + 5\\hat{k}$, with magnitude $5\\sqrt{3}$. So area of $ABCD = 5\\sqrt{3}$ and area of $PQRS = \\frac{5\\sqrt{3}}{2}$ square units.',
    steps: [
      { step: 'Writes $P = \\frac{\\vec{a}}{2}$, $Q = \\vec{a} + \\frac{\\vec{b}}{2}$, $R = \\frac{\\vec{a}}{2} + \\vec{b}$, $S = \\frac{\\vec{b}}{2}$ using the mid-point formula', marks: 1 },
      { step: 'Shows $\\overrightarrow{PQ} = \\overrightarrow{SR} = \\frac{\\vec{a} + \\vec{b}}{2}$ so $PQRS$ is a parallelogram', marks: 1 },
      { step: 'Finds $\\overrightarrow{PS} = \\frac{\\vec{b} - \\vec{a}}{2}$ and expands $\\overrightarrow{PQ} \\times \\overrightarrow{PS}$', marks: 1 },
      { step: 'Obtains $\\frac{1}{2}\\vec{a} \\times \\vec{b}$ and concludes the area is half that of $ABCD$', marks: 1 },
      { step: 'Computes $\\vec{a} \\times \\vec{b} = 5\\hat{i} - 5\\hat{j} + 5\\hat{k}$ and the area $\\frac{5\\sqrt{3}}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d02', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'The vertices of a triangle are $A(4, 4, -2)$, $B(1, 2, -1)$ and $C(5, 6, 1)$.\n(a) Find $\\overrightarrow{BA}$ and $\\overrightarrow{BC}$.\n(b) Find the scalar projection of $\\overrightarrow{BA}$ on $\\overrightarrow{BC}$.\n(c) Hence find the foot $P$ of the perpendicular from $A$ to the line $BC$.\n(d) Find the length $AP$ and verify that $AP$ is perpendicular to $BC$.\n(e) Find the image $A\'$ of $A$ in the line $BC$.',
    answer: '(a) $\\overrightarrow{BA} = (3, 2, -1)$ and $\\overrightarrow{BC} = (4, 4, 2)$, with $|\\overrightarrow{BC}| = 6$.\n(b) $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = 12 + 8 - 2 = 18$, so the scalar projection is $\\frac{18}{6} = 3$.\n(c) $\\overrightarrow{BP}$ is the vector projection, $\\overrightarrow{BP} = \\frac{\\overrightarrow{BA} \\cdot \\overrightarrow{BC}}{|\\overrightarrow{BC}|^2}\\overrightarrow{BC} = \\frac{18}{36}(4, 4, 2) = (2, 2, 1)$. So $P = B + (2, 2, 1) = (3, 4, 0)$.\n(d) $\\overrightarrow{AP} = (3 - 4, 4 - 4, 0 + 2) = (-1, 0, 2)$, so $AP = \\sqrt{1 + 0 + 4} = \\sqrt{5}$. Also $\\overrightarrow{AP} \\cdot \\overrightarrow{BC} = -4 + 0 + 4 = 0$, so $AP \\perp BC$.\n(e) $P$ is the mid-point of $AA\'$, so $A\' = 2P - A = (6 - 4, 8 - 4, 0 + 2) = (2, 4, 2)$.',
    steps: [
      { step: 'Finds $\\overrightarrow{BA} = (3, 2, -1)$, $\\overrightarrow{BC} = (4, 4, 2)$ and $|\\overrightarrow{BC}| = 6$', marks: 1 },
      { step: 'Computes $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = 18$ and scalar projection $3$', marks: 1 },
      { step: 'Uses the vector projection $\\overrightarrow{BP} = \\frac{18}{36}\\overrightarrow{BC}$ to get $P(3, 4, 0)$', marks: 1 },
      { step: 'Finds $AP = \\sqrt{5}$ and verifies $\\overrightarrow{AP} \\cdot \\overrightarrow{BC} = 0$', marks: 1 },
      { step: 'Uses $P$ as mid-point of $AA\'$ to get $A\'(2, 4, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d03', chapter: C, topic: TS, type: 'long', complexity: 'hard', marks: 5,
    text: '$ABCD$ is a parallelogram whose diagonals meet at $O$.\n(a) Taking $O$ as origin, with $\\overrightarrow{OA} = \\vec{u}$ and $\\overrightarrow{OB} = \\vec{v}$, write $\\overrightarrow{OC}$ and $\\overrightarrow{OD}$, and show that $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = |\\vec{u}|^2 - |\\vec{v}|^2$.\n(b) Deduce that a parallelogram is a rectangle if and only if its diagonals are equal.\n(c) For a rectangle $ABCD$ and any point $P$ in space, prove that $PA^2 + PC^2 = PB^2 + PD^2$.',
    answer: '(a) The diagonals of a parallelogram bisect each other, so $\\overrightarrow{OC} = -\\vec{u}$ and $\\overrightarrow{OD} = -\\vec{v}$. Then $\\overrightarrow{AB} = \\vec{v} - \\vec{u}$ and $\\overrightarrow{AD} = -\\vec{v} - \\vec{u}$, so $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = (\\vec{v} - \\vec{u}) \\cdot (-\\vec{v} - \\vec{u}) = -|\\vec{v}|^2 - \\vec{v} \\cdot \\vec{u} + \\vec{u} \\cdot \\vec{v} + |\\vec{u}|^2 = |\\vec{u}|^2 - |\\vec{v}|^2$.\n(b) The diagonals are $AC = 2|\\vec{u}|$ and $BD = 2|\\vec{v}|$. A parallelogram is a rectangle exactly when the angle at $A$ is a right angle, that is when $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$. By (a) this holds exactly when $|\\vec{u}| = |\\vec{v}|$, that is when $AC = BD$.\n(c) For a rectangle $|\\vec{u}| = |\\vec{v}|$ by (b). Let $P$ have position vector $\\vec{p}$. Then $PA^2 + PC^2 = |\\vec{p} - \\vec{u}|^2 + |\\vec{p} + \\vec{u}|^2 = 2|\\vec{p}|^2 + 2|\\vec{u}|^2$ and $PB^2 + PD^2 = |\\vec{p} - \\vec{v}|^2 + |\\vec{p} + \\vec{v}|^2 = 2|\\vec{p}|^2 + 2|\\vec{v}|^2$. As $|\\vec{u}| = |\\vec{v}|$, the two sums are equal.',
    steps: [
      { step: 'Uses bisecting diagonals to write $\\overrightarrow{OC} = -\\vec{u}$, $\\overrightarrow{OD} = -\\vec{v}$ and the side vectors $\\overrightarrow{AB}$, $\\overrightarrow{AD}$', marks: 1 },
      { step: 'Expands $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = |\\vec{u}|^2 - |\\vec{v}|^2$', marks: 1 },
      { step: 'Deduces the rectangle iff equal-diagonals result from the right angle at $A$', marks: 1 },
      { step: 'Expands $PA^2 + PC^2 = 2|\\vec{p}|^2 + 2|\\vec{u}|^2$', marks: 1 },
      { step: 'Expands $PB^2 + PD^2 = 2|\\vec{p}|^2 + 2|\\vec{v}|^2$ and uses $|\\vec{u}| = |\\vec{v}|$ to conclude', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d04', chapter: C, topic: TS, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $\\vec{a} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$, $\\vec{b} = 2\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{c} = 2\\hat{i} - 2\\hat{j} + \\hat{k}$.\n(a) Show that $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ are mutually perpendicular and each has magnitude $3$.\n(b) If $\\vec{r} = x\\vec{a} + y\\vec{b} + z\\vec{c}$, show by taking dot products that $x = \\frac{\\vec{r} \\cdot \\vec{a}}{9}$, and write the matching formulas for $y$ and $z$.\n(c) Express $\\vec{r} = 2\\hat{i} + \\hat{j} + 7\\hat{k}$ in the form $x\\vec{a} + y\\vec{b} + z\\vec{c}$.\n(d) Check your answer by comparing $|\\vec{r}|^2$ with $9(x^2 + y^2 + z^2)$.',
    answer: '(a) $\\vec{a} \\cdot \\vec{b} = 2 + 2 - 4 = 0$, $\\vec{a} \\cdot \\vec{c} = 2 - 4 + 2 = 0$, $\\vec{b} \\cdot \\vec{c} = 4 - 2 - 2 = 0$, so they are mutually perpendicular. Each of $|\\vec{a}|, |\\vec{b}|, |\\vec{c}|$ is $\\sqrt{1 + 4 + 4} = 3$.\n(b) Taking the dot product of $\\vec{r} = x\\vec{a} + y\\vec{b} + z\\vec{c}$ with $\\vec{a}$ and using $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c} = 0$ gives $\\vec{r} \\cdot \\vec{a} = x|\\vec{a}|^2 = 9x$, so $x = \\frac{\\vec{r} \\cdot \\vec{a}}{9}$. Similarly $y = \\frac{\\vec{r} \\cdot \\vec{b}}{9}$ and $z = \\frac{\\vec{r} \\cdot \\vec{c}}{9}$.\n(c) $\\vec{r} \\cdot \\vec{a} = 2 + 2 + 14 = 18$, $\\vec{r} \\cdot \\vec{b} = 4 + 1 - 14 = -9$, $\\vec{r} \\cdot \\vec{c} = 4 - 2 + 7 = 9$. So $x = 2$, $y = -1$, $z = 1$, and $\\vec{r} = 2\\vec{a} - \\vec{b} + \\vec{c}$. (Check: $2(1, 2, 2) - (2, 1, -2) + (2, -2, 1) = (2, 1, 7)$.)\n(d) $|\\vec{r}|^2 = 4 + 1 + 49 = 54$ and $9(x^2 + y^2 + z^2) = 9(4 + 1 + 1) = 54$, so they agree.',
    steps: [
      { step: 'Shows the three dot products are zero and each magnitude is $3$', marks: 1 },
      { step: 'Dots $\\vec{r}$ with $\\vec{a}$ to derive $x = \\frac{\\vec{r} \\cdot \\vec{a}}{9}$ and states the formulas for $y$, $z$', marks: 1 },
      { step: 'Computes $\\vec{r} \\cdot \\vec{a} = 18$, $\\vec{r} \\cdot \\vec{b} = -9$, $\\vec{r} \\cdot \\vec{c} = 9$', marks: 1 },
      { step: 'Gets $x = 2$, $y = -1$, $z = 1$ and writes $\\vec{r} = 2\\vec{a} - \\vec{b} + \\vec{c}$', marks: 1 },
      { step: 'Verifies $|\\vec{r}|^2 = 54 = 9(x^2 + y^2 + z^2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d05', chapter: C, topic: TP, type: 'long', complexity: 'hard', marks: 5,
    text: 'In triangle $ABC$, the point $D$ lies on $BC$ with $BD : DC = 1 : 2$ and the point $E$ lies on $CA$ with $CE : EA = 1 : 2$. The lines $AD$ and $BE$ meet at $P$. Take $A$ as origin with $\\overrightarrow{AB} = \\vec{b}$ and $\\overrightarrow{AC} = \\vec{c}$.\n(a) Find the position vectors of $D$ and $E$.\n(b) Find the ratios $AP : PD$ and $BP : PE$.\n(c) The line $CP$ meets $AB$ at $F$. Find the ratio $AF : FB$.',
    answer: '(a) $D = \\frac{2\\vec{b} + \\vec{c}}{3}$ (since $BD : DC = 1 : 2$) and, as $CE : EA = 1 : 2$, $E = \\frac{1 \\cdot \\vec{0} + 2\\vec{c}}{3} = \\frac{2}{3}\\vec{c}$.\n(b) A point of $AD$ is $s\\cdot\\frac{2\\vec{b} + \\vec{c}}{3}$. A point of $BE$ is $\\vec{b} + t\\left(\\frac{2}{3}\\vec{c} - \\vec{b}\\right) = (1 - t)\\vec{b} + \\frac{2t}{3}\\vec{c}$. At $P$ these agree. Since $\\vec{b}$ and $\\vec{c}$ are not parallel, the coefficients match: $\\frac{2s}{3} = 1 - t$ and $\\frac{s}{3} = \\frac{2t}{3}$. So $s = 2t$, then $\\frac{4t}{3} = 1 - t$ gives $t = \\frac{3}{7}$ and $s = \\frac{6}{7}$. Hence $AP : PD = \\frac{6}{7} : \\frac{1}{7} = 6 : 1$ and $BP : PE = \\frac{3}{7} : \\frac{4}{7} = 3 : 4$.\n(c) $P = \\frac{6}{7} \\cdot \\frac{2\\vec{b} + \\vec{c}}{3} = \\frac{4}{7}\\vec{b} + \\frac{2}{7}\\vec{c}$. A point of line $CP$ is $\\vec{c} + u(P - \\vec{c}) = \\frac{4u}{7}\\vec{b} + \\left(1 - \\frac{5u}{7}\\right)\\vec{c}$. It lies on $AB$ when the $\\vec{c}$ coefficient is zero: $u = \\frac{7}{5}$, giving $F = \\frac{4}{5}\\vec{b}$. So $AF = \\frac{4}{5}AB$ and $AF : FB = 4 : 1$.',
    steps: [
      { step: 'Finds $D = \\frac{2\\vec{b} + \\vec{c}}{3}$ and $E = \\frac{2}{3}\\vec{c}$', marks: 1 },
      { step: 'Writes parametric points of $AD$ and $BE$ and equates coefficients of $\\vec{b}$ and $\\vec{c}$', marks: 1 },
      { step: 'Solves $s = \\frac{6}{7}$, $t = \\frac{3}{7}$', marks: 1 },
      { step: 'States $AP : PD = 6 : 1$ and $BP : PE = 3 : 4$', marks: 1 },
      { step: 'Finds $P = \\frac{4\\vec{b} + 2\\vec{c}}{7}$, intersects $CP$ with $AB$ to get $F = \\frac{4}{5}\\vec{b}$ and $AF : FB = 4 : 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d06', chapter: C, topic: TB, type: 'long', complexity: 'medium', marks: 5,
    text: 'A pyramid has a square base $OABC$ with $O(0, 0, 0)$, $A(4, 0, 0)$, $B(4, 4, 0)$, $C(0, 4, 0)$ and its apex at $P(2, 2, 3)$.\n(a) Find the vector $\\overrightarrow{PO}$, its length and its direction cosines.\n(b) Write $\\overrightarrow{PA}$, $\\overrightarrow{PB}$, $\\overrightarrow{PC}$ and show that all four slant edges $PO$, $PA$, $PB$, $PC$ are equal in length.\n(c) Find the cosine of $\\angle APB$.\n(d) Find the cosine of $\\angle APC$.',
    answer: '(a) $\\overrightarrow{PO} = (0 - 2, 0 - 2, 0 - 3) = -2\\hat{i} - 2\\hat{j} - 3\\hat{k}$, length $\\sqrt{4 + 4 + 9} = \\sqrt{17}$. Direction cosines: $-\\frac{2}{\\sqrt{17}}, -\\frac{2}{\\sqrt{17}}, -\\frac{3}{\\sqrt{17}}$.\n(b) $\\overrightarrow{PA} = (2, -2, -3)$, $\\overrightarrow{PB} = (2, 2, -3)$, $\\overrightarrow{PC} = (-2, 2, -3)$. Each has length $\\sqrt{4 + 4 + 9} = \\sqrt{17}$, the same as $PO$, so all four slant edges are equal.\n(c) $\\overrightarrow{PA} \\cdot \\overrightarrow{PB} = 4 - 4 + 9 = 9$, so $\\cos\\angle APB = \\frac{9}{17}$.\n(d) $\\overrightarrow{PA} \\cdot \\overrightarrow{PC} = -4 - 4 + 9 = 1$, so $\\cos\\angle APC = \\frac{1}{17}$.',
    steps: [
      { step: 'Finds $\\overrightarrow{PO}$ and its length $\\sqrt{17}$', marks: 1 },
      { step: 'Gives the direction cosines of $\\overrightarrow{PO}$', marks: 1 },
      { step: 'Writes $\\overrightarrow{PA}$, $\\overrightarrow{PB}$, $\\overrightarrow{PC}$ and shows all four lengths equal $\\sqrt{17}$', marks: 1 },
      { step: 'Computes $\\cos\\angle APB = \\frac{9}{17}$', marks: 1 },
      { step: 'Computes $\\cos\\angle APC = \\frac{1}{17}$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d07', chapter: C, topic: TV, type: 'long', complexity: 'hard', marks: 5,
    text: 'A triangular roof panel has corners $A(1, 2, 1)$, $B(4, 4, 3)$ and $C(0, 4, -1)$.\n(a) Find $\\overrightarrow{AB} \\times \\overrightarrow{AC}$ and the area of the panel.\n(b) Drop the $x$-coordinate of each corner to get its shadow in the $yz$-plane, and find the area of that shadow triangle with a two-dimensional cross product.\n(c) Find in the same way the areas of the shadows in the $xz$-plane and the $xy$-plane.\n(d) Compare the three shadow areas with the components of $\\overrightarrow{AB} \\times \\overrightarrow{AC}$, and verify that the sum of the squares of the three shadow areas equals the square of the area of the panel.',
    answer: '(a) $\\overrightarrow{AB} = (3, 2, 2)$ and $\\overrightarrow{AC} = (-1, 2, -2)$. $\\overrightarrow{AB} \\times \\overrightarrow{AC} = (2\\cdot(-2) - 2\\cdot 2)\\hat{i} - (3\\cdot(-2) - 2\\cdot(-1))\\hat{j} + (3\\cdot 2 - 2\\cdot(-1))\\hat{k} = -8\\hat{i} + 4\\hat{j} + 8\\hat{k}$. Its magnitude is $\\sqrt{64 + 16 + 64} = 12$, so the area of the panel is $6$ square units.\n(b) In the $yz$-plane the shadow corners are $(2, 1)$, $(4, 3)$, $(4, -1)$. The side vectors are $(2, 2)$ and $(2, -2)$, with two-dimensional cross product $2(-2) - 2(2) = -8$, so the shadow area is $\\frac{8}{2} = 4$.\n(c) In the $xz$-plane the corners are $(1, 1)$, $(4, 3)$, $(0, -1)$; sides $(3, 2)$ and $(-1, -2)$ give $3(-2) - 2(-1) = -4$, so the area is $2$. In the $xy$-plane the corners are $(1, 2)$, $(4, 4)$, $(0, 4)$; sides $(3, 2)$ and $(-1, 2)$ give $6 + 2 = 8$, so the area is $4$.\n(d) The components of $\\overrightarrow{AB} \\times \\overrightarrow{AC}$ are $-8$, $4$, $8$, and each shadow area equals half the absolute value of the matching component ($4$, $2$, $4$). Finally $4^2 + 2^2 + 4^2 = 36 = 6^2$, the square of the area of the panel.',
    steps: [
      { step: 'Computes $\\overrightarrow{AB} \\times \\overrightarrow{AC} = -8\\hat{i} + 4\\hat{j} + 8\\hat{k}$', marks: 1 },
      { step: 'Finds the area of the panel $= \\frac{1}{2}\\times 12 = 6$', marks: 1 },
      { step: 'Finds the shadow area $4$ in the $yz$-plane using a two-dimensional cross product', marks: 1 },
      { step: 'Finds the shadow areas $2$ ($xz$-plane) and $4$ ($xy$-plane)', marks: 1 },
      { step: 'Matches shadow areas to half the components and verifies $4^2 + 2^2 + 4^2 = 6^2$', marks: 1 },
    ],
  },
  {
    id: 'c12-vec-r4-d08', chapter: C, topic: TV, type: 'long', complexity: 'medium', marks: 5,
    text: 'A force $\\vec{F} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ (in newtons) acts along a line through the point $A(3, -1, 3)$, with distances in metres. The moment of the force about a point $O\'$ is $\\vec{M} = \\overrightarrow{O\'A} \\times \\vec{F}$. Take $O\'$ to be the point $(1, 2, 1)$.\n(a) Find $\\overrightarrow{O\'A}$ and $|\\vec{F}|$.\n(b) Find the moment $\\vec{M}$ of the force about $O\'$.\n(c) Find $|\\vec{M}|$ and hence the perpendicular distance from $O\'$ to the line of action of the force.\n(d) Find the unit vector along the axis about which the force tends to turn, and verify that $\\vec{M}$ is perpendicular to $\\vec{F}$.',
    answer: '(a) $\\overrightarrow{O\'A} = (3 - 1, -1 - 2, 3 - 1) = 2\\hat{i} - 3\\hat{j} + 2\\hat{k}$ and $|\\vec{F}| = \\sqrt{4 + 9 + 36} = 7$ N.\n(b) $\\vec{M} = \\overrightarrow{O\'A} \\times \\vec{F} = (-3\\cdot 6 - 2\\cdot 3)\\hat{i} - (2\\cdot 6 - 2\\cdot 2)\\hat{j} + (2\\cdot 3 - (-3)\\cdot 2)\\hat{k} = -24\\hat{i} - 8\\hat{j} + 12\\hat{k}$ (N m).\n(c) $|\\vec{M}| = \\sqrt{576 + 64 + 144} = 28$ N m. Since $|\\vec{M}| = |\\overrightarrow{O\'A}||\\vec{F}|\\sin\\theta = d|\\vec{F}|$, where $d$ is the perpendicular distance from $O\'$ to the line of action, $d = \\frac{28}{7} = 4$ m.\n(d) The axis is along $\\frac{\\vec{M}}{|\\vec{M}|} = \\frac{-24\\hat{i} - 8\\hat{j} + 12\\hat{k}}{28} = \\frac{-6\\hat{i} - 2\\hat{j} + 3\\hat{k}}{7}$. Check: $\\vec{M} \\cdot \\vec{F} = -48 - 24 + 72 = 0$, so $\\vec{M} \\perp \\vec{F}$.',
    steps: [
      { step: 'Finds $\\overrightarrow{O\'A} = 2\\hat{i} - 3\\hat{j} + 2\\hat{k}$ and $|\\vec{F}| = 7$', marks: 1 },
      { step: 'Computes $\\vec{M} = -24\\hat{i} - 8\\hat{j} + 12\\hat{k}$', marks: 1 },
      { step: 'Finds $|\\vec{M}| = 28$', marks: 1 },
      { step: 'Uses $|\\vec{M}| = d|\\vec{F}|$ to get the distance $4$ m', marks: 1 },
      { step: 'Gives the unit axis $\\frac{-6\\hat{i} - 2\\hat{j} + 3\\hat{k}}{7}$ and verifies $\\vec{M} \\cdot \\vec{F} = 0$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-vec-r4-e01', chapter: C, topic: TS, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A crate of weight $200$ N rests on a smooth ramp. Take $\\hat{i}$ along the horizontal direction in which the ramp rises and $\\hat{k}$ vertically upward, so the weight is $\\vec{W} = -200\\hat{k}$ (in newtons). The line of steepest descent of the ramp, pointing down the slope, is along the vector $-4\\hat{i} - 3\\hat{k}$. The crate is released and slides $7.5$ m down the ramp.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the unit vector $\\hat{d}$ pointing down the slope.', answer: '$|-4\\hat{i} - 3\\hat{k}| = \\sqrt{16 + 9} = 5$, so $\\hat{d} = \\frac{-4\\hat{i} - 3\\hat{k}}{5}$.' },
      { label: '(ii)', marks: 1, text: 'Find the component of the weight along the slope.', answer: 'The component is the scalar projection $\\vec{W} \\cdot \\hat{d} = \\frac{(-200\\hat{k}) \\cdot (-4\\hat{i} - 3\\hat{k})}{5} = \\frac{600}{5} = 120$ N.' },
      { label: '(iii)', marks: 2, text: 'Find the work done by the weight during the slide.\nOR\nFind the component of the weight perpendicular to the ramp, as a vector, and its magnitude.', answer: 'Work: the displacement is $7.5\\hat{d} = -6\\hat{i} - 4.5\\hat{k}$, so work $= \\vec{W} \\cdot \\vec{s} = (-200\\hat{k}) \\cdot (-6\\hat{i} - 4.5\\hat{k}) = 900$ J (equivalently $120 \\times 7.5$).\nOR the perpendicular component: $\\vec{W}_{\\perp} = \\vec{W} - (\\vec{W} \\cdot \\hat{d})\\hat{d} = (0, 0, -200) - 120\\cdot\\frac{(-4, 0, -3)}{5} = (0, 0, -200) - (-96, 0, -72) = 96\\hat{i} - 128\\hat{k}$, with magnitude $\\sqrt{9216 + 16384} = 160$ N. (Check: $120^2 + 160^2 = 200^2$.)' },
    ],
    answer: '(i) $\\frac{-4\\hat{i} - 3\\hat{k}}{5}$. (ii) $120$ N. (iii) Work $= 900$ J, OR perpendicular component $96\\hat{i} - 128\\hat{k}$ of magnitude $160$ N.',
  },
  {
    id: 'c12-vec-r4-e02', chapter: C, topic: TV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A straight wire segment in a laboratory carries a current $I = 4$ A. Its length vector (in the direction of the current) is $\\vec{L} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$ metres. The magnetic field in the region is $\\vec{B} = 0.1(2\\hat{i} - \\hat{j} + 2\\hat{k})$ tesla. The magnetic force on the segment is $\\vec{F} = I\\,(\\vec{L} \\times \\vec{B})$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $\\vec{L} \\times (2\\hat{i} - \\hat{j} + 2\\hat{k})$.', answer: '$\\vec{L} \\times (2\\hat{i} - \\hat{j} + 2\\hat{k}) = (2\\cdot 2 - (-1)(-1))\\hat{i} - (2\\cdot 2 - (-1)\\cdot 2)\\hat{j} + (2\\cdot(-1) - 2\\cdot 2)\\hat{k} = 3\\hat{i} - 6\\hat{j} - 6\\hat{k}$.' },
      { label: '(ii)', marks: 1, text: 'Find the force $\\vec{F}$ on the wire and its magnitude.', answer: '$\\vec{F} = 4 \\times 0.1\\,(3\\hat{i} - 6\\hat{j} - 6\\hat{k}) = 1.2\\hat{i} - 2.4\\hat{j} - 2.4\\hat{k}$ newtons, and $|\\vec{F}| = 0.4 \\times 9 = 3.6$ N.' },
      { label: '(iii)', marks: 2, text: 'Show that the wire is perpendicular to the field, and hence that the force has the largest value possible for this current, length and field.\nOR\nFind the direction cosines of the force.', answer: '$\\vec{L} \\cdot (2\\hat{i} - \\hat{j} + 2\\hat{k}) = 4 - 2 - 2 = 0$, so $\\vec{L} \\perp \\vec{B}$ and $\\sin\\theta = 1$. The force magnitude $I|\\vec{L}||\\vec{B}|\\sin\\theta$ is greatest when $\\sin\\theta = 1$: $4 \\times 3 \\times 0.3 = 3.6$ N, which matches (ii).\nOR the direction cosines of $\\vec{F}$ are those of $3\\hat{i} - 6\\hat{j} - 6\\hat{k}$ (magnitude $9$): $\\frac{1}{3}, -\\frac{2}{3}, -\\frac{2}{3}$.' },
    ],
    answer: '(i) $3\\hat{i} - 6\\hat{j} - 6\\hat{k}$. (ii) $\\vec{F} = 1.2\\hat{i} - 2.4\\hat{j} - 2.4\\hat{k}$ N, $|\\vec{F}| = 3.6$ N. (iii) $\\vec{L} \\cdot \\vec{B} = 0$, so the force is the maximum $3.6$ N, OR direction cosines $\\frac{1}{3}, -\\frac{2}{3}, -\\frac{2}{3}$.',
  },
  {
    id: 'c12-vec-r4-e03', chapter: C, topic: TP, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A ski lift cable runs in a straight line from the bottom station $A(2, -4, 10)$ to the top station $B(14, 8, 34)$, with coordinates in metres. Three support poles stand at equal spacing along the cable, dividing $AB$ into four equal parts.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the position of the pole nearest to the bottom station $A$.', answer: 'It divides $AB$ in the ratio $1 : 3$: $\\frac{3A + B}{4} = \\frac{(6 + 14,\\ -12 + 8,\\ 30 + 34)}{4} = (5, -1, 16)$.' },
      { label: '(ii)', marks: 1, text: 'Find the position of the middle pole and the distance between consecutive poles.', answer: 'The middle pole is the mid-point of $AB$: $(8, 2, 22)$. Consecutive poles differ by $\\frac{1}{4}\\overrightarrow{AB} = (3, 3, 6)$, so the spacing is $\\sqrt{9 + 9 + 36} = \\sqrt{54} = 3\\sqrt{6}$ m.' },
      { label: '(iii)', marks: 2, text: 'The cable is to be extended beyond $B$ to a new station $R$ with $BR = \\frac{1}{2}AB$. Find $R$ and the ratio in which $B$ divides $AR$.\nOR\nShow that the middle pole is the mid-point of the first and third poles, and find the third pole.', answer: '$\\overrightarrow{BR} = \\frac{1}{2}\\overrightarrow{AB} = (6, 6, 12)$, so $R = B + (6, 6, 12) = (20, 14, 46)$. Since $AB : BR = 2 : 1$, $B$ divides $AR$ internally in the ratio $2 : 1$. Check: $\\frac{1\\cdot A + 2\\cdot R}{3} = \\frac{(2 + 40,\\ -4 + 28,\\ 10 + 92)}{3} = (14, 8, 34) = B$.\nOR the third pole divides $AB$ in the ratio $3 : 1$: $\\frac{A + 3B}{4} = \\frac{(2 + 42,\\ -4 + 24,\\ 10 + 102)}{4} = (11, 5, 28)$. The mid-point of the first pole $(5, -1, 16)$ and the third pole $(11, 5, 28)$ is $(8, 2, 22)$, the middle pole.' },
    ],
    answer: '(i) $(5, -1, 16)$. (ii) Middle pole $(8, 2, 22)$; spacing $3\\sqrt{6}$ m. (iii) $R(20, 14, 46)$ and $B$ divides $AR$ in $2 : 1$, OR third pole $(11, 5, 28)$ with the mid-point check.',
  },
  {
    id: 'c12-vec-r4-e04', chapter: C, topic: TB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A street lamp of weight $30$ N is held at rest by three cables. Taking $\\hat{k}$ vertically upward, the weight is $-30\\hat{k}$. The tensions (in newtons) in two of the cables are $\\vec{T}_1 = -10\\hat{i} - \\hat{j} + 12\\hat{k}$ and $\\vec{T}_2 = 6\\hat{i} + 8\\hat{j} + 14\\hat{k}$. For the lamp to be at rest, the sum of the weight and the three tensions must be the zero vector.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $\\vec{T}_1 + \\vec{T}_2$.', answer: '$\\vec{T}_1 + \\vec{T}_2 = (-10 + 6)\\hat{i} + (-1 + 8)\\hat{j} + (12 + 14)\\hat{k} = -4\\hat{i} + 7\\hat{j} + 26\\hat{k}$.' },
      { label: '(ii)', marks: 1, text: 'Find the tension $\\vec{T}_3$ in the third cable and its magnitude.', answer: '$\\vec{T}_3 = -(-30\\hat{k} + \\vec{T}_1 + \\vec{T}_2) = -(-4\\hat{i} + 7\\hat{j} - 4\\hat{k}) = 4\\hat{i} - 7\\hat{j} + 4\\hat{k}$. Its magnitude is $\\sqrt{16 + 49 + 16} = 9$ N.' },
      { label: '(iii)', marks: 2, text: 'Find the direction cosines of $\\vec{T}_3$ and show that the third cable makes equal angles with the $x$-axis and the $z$-axis.\nOR\nFind the component of $\\vec{T}_3$ along the direction of $\\vec{T}_2$.', answer: 'The direction cosines of $\\vec{T}_3$ are $\\frac{4}{9}, -\\frac{7}{9}, \\frac{4}{9}$. The cosines with the $x$-axis and $z$-axis are both $\\frac{4}{9}$, so the angles are equal (about $63.6^{\\circ}$ each).\nOR the component along $\\vec{T}_2$ is $\\frac{\\vec{T}_3 \\cdot \\vec{T}_2}{|\\vec{T}_2|} = \\frac{24 - 56 + 56}{\\sqrt{296}} = \\frac{24}{2\\sqrt{74}} = \\frac{12}{\\sqrt{74}}$ N.' },
    ],
    answer: '(i) $-4\\hat{i} + 7\\hat{j} + 26\\hat{k}$. (ii) $\\vec{T}_3 = 4\\hat{i} - 7\\hat{j} + 4\\hat{k}$, magnitude $9$ N. (iii) Direction cosines $\\frac{4}{9}, -\\frac{7}{9}, \\frac{4}{9}$ (equal angles with $x$ and $z$ axes), OR component along $\\vec{T}_2$ is $\\frac{12}{\\sqrt{74}}$ N.',
  },
];
