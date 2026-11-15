import type { Class12Question } from './types.js';

const C = 'Three Dimensional Geometry';
const DC = 'Direction cosines and direction ratios of a line';
const EQ = 'Equation of a line';
const ANG = 'Angle between two lines';
const SD = 'Shortest distance between two lines';
const FT = 'Foot of perpendicular and image of a point';

const AR_OPTIONS = [
  'Both (A) and (R) are true and (R) is the correct explanation of (A).',
  'Both (A) and (R) are true but (R) is not the correct explanation of (A).',
  '(A) is true but (R) is false.',
  '(A) is false but (R) is true.',
];

export const CH11_3D: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-3d-a01', chapter: C, topic: DC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A line makes angles of $90^\\circ$, $60^\\circ$ and $30^\\circ$ with the positive $x$-, $y$- and $z$-axes respectively. Its direction cosines are',
    options: ['$1, \\frac{1}{2}, \\frac{\\sqrt{3}}{2}$', '$0, \\frac{1}{2}, \\frac{\\sqrt{3}}{2}$', '$0, \\frac{\\sqrt{3}}{2}, \\frac{1}{2}$', '$0, \\frac{1}{2}, \\frac{1}{2}$'],
    answer: 'Correct option: B) $0, \\frac{1}{2}, \\frac{\\sqrt{3}}{2}$, because the direction cosines are $\\cos 90^\\circ = 0$, $\\cos 60^\\circ = \\frac{1}{2}$ and $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ (and $0 + \\frac{1}{4} + \\frac{3}{4} = 1$).',
  },
  {
    id: 'c12-3d-a02', chapter: C, topic: DC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The direction cosines of the line $\\frac{x-2}{3} = \\frac{1-y}{6} = \\frac{z+4}{-2}$ are',
    options: ['$\\frac{3}{7}, \\frac{6}{7}, -\\frac{2}{7}$', '$3, -6, -2$', '$\\frac{3}{7}, -\\frac{6}{7}, -\\frac{2}{7}$', '$\\frac{3}{11}, -\\frac{6}{11}, -\\frac{2}{11}$'],
    answer: 'Correct option: C) $\\frac{3}{7}, -\\frac{6}{7}, -\\frac{2}{7}$. Writing $\\frac{1-y}{6} = \\frac{y-1}{-6}$, the direction ratios are $3, -6, -2$ with $\\sqrt{9 + 36 + 4} = 7$, so dividing by $7$ gives the direction cosines.',
  },
  {
    id: 'c12-3d-a03', chapter: C, topic: DC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A line makes an angle of $\\frac{\\pi}{3}$ with the positive $x$-axis and also an angle of $\\frac{\\pi}{3}$ with the positive $z$-axis. The acute angle it makes with the positive $y$-axis is',
    options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: A) $\\frac{\\pi}{4}$. From $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$, $\\cos^2\\beta = 1 - \\frac{1}{4} - \\frac{1}{4} = \\frac{1}{2}$, so $\\cos\\beta = \\frac{1}{\\sqrt{2}}$ for the acute angle, giving $\\beta = \\frac{\\pi}{4}$.',
  },
  {
    id: 'c12-3d-a04', chapter: C, topic: DC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Direction ratios of the line $2x - 1 = 3y + 2 = 6 - z$ are',
    options: ['$2, 3, -1$', '$3, 2, 6$', '$1, 1, -1$', '$3, 2, -6$'],
    answer: 'Correct option: D) $3, 2, -6$. In standard form the line is $\\frac{x - \\frac{1}{2}}{\\frac{1}{2}} = \\frac{y + \\frac{2}{3}}{\\frac{1}{3}} = \\frac{z - 6}{-1}$, so the direction ratios are $\\frac{1}{2}, \\frac{1}{3}, -1$, which are proportional to $3, 2, -6$.',
  },
  {
    id: 'c12-3d-a05', chapter: C, topic: DC, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): A line can make angles of $45^\\circ$, $45^\\circ$ and $60^\\circ$ with the positive $x$-, $y$- and $z$-axes respectively.\nReason (R): If $l, m, n$ are the direction cosines of a line, then $l^2 + m^2 + n^2 = 1$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false but (R) is true. (R) is the standard identity. For the given angles, $\\cos^2 45^\\circ + \\cos^2 45^\\circ + \\cos^2 60^\\circ = \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{4} = \\frac{5}{4} \\ne 1$, so no line can make these angles and (A) is false.',
  },
  {
    id: 'c12-3d-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The Cartesian equation of the line passing through the point $(1, -2, 3)$ and parallel to the vector $2\\hat{i} - \\hat{j} + 4\\hat{k}$ is',
    options: [
      '$\\frac{x+1}{2} = \\frac{y-2}{-1} = \\frac{z+3}{4}$',
      '$\\frac{x-1}{2} = \\frac{y+2}{-1} = \\frac{z-3}{4}$',
      '$\\frac{x-2}{1} = \\frac{y+1}{-2} = \\frac{z-4}{3}$',
      '$\\frac{x-1}{2} = \\frac{y+2}{1} = \\frac{z-3}{4}$',
    ],
    answer: 'Correct option: B) $\\frac{x-1}{2} = \\frac{y+2}{-1} = \\frac{z-3}{4}$. A line through $(x_1, y_1, z_1)$ with direction ratios $a, b, c$ is $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$; here the point is $(1, -2, 3)$ and the direction ratios are $2, -1, 4$.',
  },
  {
    id: 'c12-3d-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The vector equation of the line through the points $A(2, 0, -1)$ and $B(3, 4, 1)$ is',
    options: [
      '$\\vec{r} = 2\\hat{i} - \\hat{k} + \\lambda(\\hat{i} + 4\\hat{j} + 2\\hat{k})$',
      '$\\vec{r} = 2\\hat{i} - \\hat{k} + \\lambda(3\\hat{i} + 4\\hat{j} + \\hat{k})$',
      '$\\vec{r} = \\hat{i} + 4\\hat{j} + 2\\hat{k} + \\lambda(2\\hat{i} - \\hat{k})$',
      '$\\vec{r} = 2\\hat{i} - \\hat{k} + \\lambda(5\\hat{i} + 4\\hat{j})$',
    ],
    answer: 'Correct option: A) $\\vec{r} = 2\\hat{i} - \\hat{k} + \\lambda(\\hat{i} + 4\\hat{j} + 2\\hat{k})$. The line passes through $A$ with direction $\\vec{AB} = (3-2)\\hat{i} + (4-0)\\hat{j} + (1+1)\\hat{k} = \\hat{i} + 4\\hat{j} + 2\\hat{k}$.',
  },
  {
    id: 'c12-3d-a08', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The point $(a, b, 3)$ lies on the line $\\frac{x-1}{2} = \\frac{y+3}{-1} = \\frac{z+1}{4}$. The values of $a$ and $b$ are',
    options: ['$a = 3, b = -2$', '$a = 2, b = -3$', '$a = 3, b = -4$', '$a = 5, b = -5$'],
    answer: 'Correct option: C) $a = 3, b = -4$. Setting each ratio equal to $\\lambda$, the $z$-coordinate gives $\\frac{3+1}{4} = 1$, so $\\lambda = 1$. Then $a = 1 + 2(1) = 3$ and $b = -3 - 1 = -4$.',
  },
  {
    id: 'c12-3d-a09', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The vector equation of the line passing through $(2, -1, 3)$ and making equal angles with the three coordinate axes is',
    options: [
      '$\\vec{r} = 2\\hat{i} - \\hat{j} + 3\\hat{k} + \\lambda(2\\hat{i} - \\hat{j} + 3\\hat{k})$',
      '$\\vec{r} = \\hat{i} + \\hat{j} + \\hat{k} + \\lambda(2\\hat{i} - \\hat{j} + 3\\hat{k})$',
      '$\\vec{r} = 2\\hat{i} - \\hat{j} + 3\\hat{k} + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$',
      '$\\vec{r} = 2\\hat{i} - \\hat{j} + 3\\hat{k} + \\lambda(\\hat{i} + \\hat{j} + \\hat{k})$',
    ],
    answer: 'Correct option: D) $\\vec{r} = 2\\hat{i} - \\hat{j} + 3\\hat{k} + \\lambda(\\hat{i} + \\hat{j} + \\hat{k})$. Equal angles with the axes means equal direction cosines, so the direction ratios are $1, 1, 1$; the line must pass through $2\\hat{i} - \\hat{j} + 3\\hat{k}$.',
  },
  {
    id: 'c12-3d-a10', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the lines $\\frac{x-1}{1} = \\frac{y+2}{2} = \\frac{z}{2}$ and $\\frac{x+3}{2} = \\frac{y-1}{-2} = \\frac{z-4}{1}$ is',
    options: ['$\\frac{\\pi}{2}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{4}$', '$0$'],
    answer: 'Correct option: A) $\\frac{\\pi}{2}$. The direction ratios are $1, 2, 2$ and $2, -2, 1$, and $1(2) + 2(-2) + 2(1) = 0$, so $\\cos\\theta = 0$ and the lines are perpendicular.',
  },
  {
    id: 'c12-3d-a11', chapter: C, topic: ANG, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The lines $\\frac{x+2}{p} = \\frac{1-y}{-3} = \\frac{z-4}{-2}$ and $\\frac{x-5}{4} = \\frac{y}{2} = \\frac{z+1}{p+1}$ are perpendicular. The value of $p$ is',
    options: ['$4$', '$-2$', '$-3$', '$2$'],
    answer: 'Correct option: B) $-2$. Since $\\frac{1-y}{-3} = \\frac{y-1}{3}$, the direction ratios are $p, 3, -2$ and $4, 2, p+1$. Perpendicularity gives $4p + 6 - 2(p+1) = 0$, i.e. $2p + 4 = 0$, so $p = -2$.',
  },
  {
    id: 'c12-3d-a12', chapter: C, topic: ANG, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The lines $\\vec{r} = \\hat{i} + \\lambda(2\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = 3\\hat{j} + \\mu(-4\\hat{i} + 2\\hat{j} - 2\\hat{k})$ are parallel.\nReason (R): Two lines are parallel if their direction ratios are proportional.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true and (R) is the correct explanation of (A). The direction $-4\\hat{i} + 2\\hat{j} - 2\\hat{k} = -2(2\\hat{i} - \\hat{j} + \\hat{k})$, so the direction ratios are proportional, which is exactly why the lines are parallel (they are distinct, since $(0, 3, 0)$ is not on the first line).',
  },
  {
    id: 'c12-3d-a13', chapter: C, topic: FT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The image of the point $P(2, -1, 5)$ in the $x$-axis is',
    options: ['$(-2, -1, 5)$', '$(2, 0, 0)$', '$(2, 1, -5)$', '$(-2, 1, -5)$'],
    answer: 'Correct option: C) $(2, 1, -5)$. The foot of the perpendicular from $P$ to the $x$-axis is $(2, 0, 0)$, which is the midpoint of $P$ and its image, so the image is $(2, 2(0) + 1, 2(0) - 5) = (2, 1, -5)$.',
  },
  {
    id: 'c12-3d-a14', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The length of the perpendicular from the point $(3, -4, 12)$ to the line $\\frac{x}{0} = \\frac{y}{1} = \\frac{z}{0}$ is',
    options: ['$13$', '$5$', '$4$', '$3\\sqrt{17}$'],
    answer: 'Correct option: D) $3\\sqrt{17}$. The line is the $y$-axis, and the foot of the perpendicular is $(0, -4, 0)$, so the length is $\\sqrt{3^2 + 12^2} = \\sqrt{153} = 3\\sqrt{17}$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-3d-b01', chapter: C, topic: DC, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the direction cosines of the line passing through the points $A(1, -2, 4)$ and $B(3, 4, 1)$.',
    answer: 'Direction ratios of $AB$ are $3 - 1, 4 + 2, 1 - 4$, i.e. $2, 6, -3$. Their magnitude is $\\sqrt{4 + 36 + 9} = 7$. So the direction cosines are $\\frac{2}{7}, \\frac{6}{7}, -\\frac{3}{7}$ (or, taking the opposite sense, $-\\frac{2}{7}, -\\frac{6}{7}, \\frac{3}{7}$).',
    steps: [
      { step: 'Finds direction ratios $2, 6, -3$', marks: 1 },
      { step: 'Divides by $7$ to get direction cosines $\\frac{2}{7}, \\frac{6}{7}, -\\frac{3}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-b02', chapter: C, topic: ANG, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the angle between the lines $\\vec{r} = (\\hat{i} - \\hat{j}) + \\lambda(2\\hat{i} + 2\\hat{j} + \\hat{k})$ and $\\vec{r} = (3\\hat{i} + \\hat{k}) + \\mu(4\\hat{i} + \\hat{j} + 8\\hat{k})$.',
    answer: 'Take $\\vec{b}_1 = 2\\hat{i} + 2\\hat{j} + \\hat{k}$ and $\\vec{b}_2 = 4\\hat{i} + \\hat{j} + 8\\hat{k}$. Then $\\vec{b}_1 \\cdot \\vec{b}_2 = 8 + 2 + 8 = 18$, $|\\vec{b}_1| = 3$, $|\\vec{b}_2| = 9$. So $\\cos\\theta = \\frac{18}{3 \\times 9} = \\frac{2}{3}$, and the angle is $\\theta = \\cos^{-1}\\left(\\frac{2}{3}\\right)$.',
    steps: [
      { step: 'Computes $\\vec{b}_1 \\cdot \\vec{b}_2 = 18$ and magnitudes $3$ and $9$', marks: 1 },
      { step: 'States $\\theta = \\cos^{-1}\\left(\\frac{2}{3}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-b03', chapter: C, topic: ANG, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $\\lambda$ for which the lines $\\frac{x-2}{3} = \\frac{2y-1}{\\lambda} = \\frac{3-z}{2}$ and $\\frac{1-x}{\\lambda} = \\frac{y+3}{2} = \\frac{z-1}{4}$ are perpendicular.',
    answer: 'Rewrite the first line as $\\frac{x-2}{3} = \\frac{y - \\frac{1}{2}}{\\frac{\\lambda}{2}} = \\frac{z-3}{-2}$, with direction ratios $3, \\frac{\\lambda}{2}, -2$. Rewrite the second as $\\frac{x-1}{-\\lambda} = \\frac{y+3}{2} = \\frac{z-1}{4}$, with direction ratios $-\\lambda, 2, 4$. For perpendicular lines, $3(-\\lambda) + \\frac{\\lambda}{2}(2) + (-2)(4) = 0$, i.e. $-2\\lambda - 8 = 0$, so $\\lambda = -4$.',
    steps: [
      { step: 'Writes both lines in standard form with direction ratios $3, \\frac{\\lambda}{2}, -2$ and $-\\lambda, 2, 4$', marks: 1 },
      { step: 'Uses $a_1a_2 + b_1b_2 + c_1c_2 = 0$ to get $\\lambda = -4$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-b04', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the vector equation of the line passing through the point $(1, -1, 2)$ and perpendicular to both the lines $\\vec{r} = (2\\hat{i} + \\hat{j}) + \\lambda(\\hat{i} + 2\\hat{j} - \\hat{k})$ and $\\vec{r} = (\\hat{j} - 3\\hat{k}) + \\mu(3\\hat{i} + \\hat{k})$.',
    answer: 'The required direction is perpendicular to $\\vec{b}_1 = \\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{b}_2 = 3\\hat{i} + \\hat{k}$, so it is along $\\vec{b}_1 \\times \\vec{b}_2 = (2 \\cdot 1 - (-1) \\cdot 0)\\hat{i} - (1 \\cdot 1 - (-1) \\cdot 3)\\hat{j} + (1 \\cdot 0 - 2 \\cdot 3)\\hat{k} = 2\\hat{i} - 4\\hat{j} - 6\\hat{k}$, i.e. along $\\hat{i} - 2\\hat{j} - 3\\hat{k}$. The line is $\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + t(\\hat{i} - 2\\hat{j} - 3\\hat{k})$.',
    steps: [
      { step: 'Finds the direction $\\vec{b}_1 \\times \\vec{b}_2 = 2\\hat{i} - 4\\hat{j} - 6\\hat{k}$ (or a multiple)', marks: 1 },
      { step: 'Writes $\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + t(\\hat{i} - 2\\hat{j} - 3\\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-b05', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the point on the line $\\frac{x+1}{2} = \\frac{y-3}{-1} = \\frac{z-2}{3}$ whose $x$-coordinate and $z$-coordinate are equal.',
    answer: 'A general point on the line is $(2\\lambda - 1, 3 - \\lambda, 3\\lambda + 2)$. Setting $2\\lambda - 1 = 3\\lambda + 2$ gives $\\lambda = -3$. The point is $(-7, 6, -7)$.',
    steps: [
      { step: 'Writes the general point $(2\\lambda - 1, 3 - \\lambda, 3\\lambda + 2)$ and equates $x$ and $z$', marks: 1 },
      { step: 'Gets $\\lambda = -3$ and the point $(-7, 6, -7)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-b06', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the coordinates of the foot of the perpendicular drawn from the origin to the line $\\frac{x-2}{1} = \\frac{y-3}{1} = \\frac{z-2}{3}$.',
    answer: 'A general point on the line is $F(2 + t, 3 + t, 2 + 3t)$. For $OF$ to be perpendicular to the line (direction ratios $1, 1, 3$): $(2 + t) + (3 + t) + 3(2 + 3t) = 0$, i.e. $11 + 11t = 0$, so $t = -1$. The foot of the perpendicular is $(1, 2, -1)$.',
    steps: [
      { step: 'Takes the general point and sets up $\\vec{OF} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Gets $t = -1$ and the foot $(1, 2, -1)$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-3d-c01', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the shortest distance between the lines $\\vec{r} = (\\hat{i} + 2\\hat{j} - \\hat{k}) + \\lambda(2\\hat{i} - \\hat{j} + 2\\hat{k})$ and $\\vec{r} = (3\\hat{i} - \\hat{j} + \\hat{k}) + \\mu(4\\hat{i} - 2\\hat{j} + 4\\hat{k})$.',
    answer: 'Since $4\\hat{i} - 2\\hat{j} + 4\\hat{k} = 2(2\\hat{i} - \\hat{j} + 2\\hat{k})$, the lines are parallel with $\\vec{b} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$. Here $\\vec{a}_2 - \\vec{a}_1 = 2\\hat{i} - 3\\hat{j} + 2\\hat{k}$. Then $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = ((-1)(2) - (2)(-3))\\hat{i} - ((2)(2) - (2)(2))\\hat{j} + ((2)(-3) - (-1)(2))\\hat{k} = 4\\hat{i} + 0\\hat{j} - 4\\hat{k}$, with magnitude $4\\sqrt{2}$, and $|\\vec{b}| = 3$. Shortest distance $= \\frac{|\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1)|}{|\\vec{b}|} = \\frac{4\\sqrt{2}}{3}$ units.',
    steps: [
      { step: 'Shows the lines are parallel and writes $\\vec{b}$ and $\\vec{a}_2 - \\vec{a}_1 = 2\\hat{i} - 3\\hat{j} + 2\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = 4\\hat{i} - 4\\hat{k}$', marks: 1 },
      { step: 'Gets the distance $\\frac{4\\sqrt{2}}{3}$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-c02', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the foot of the perpendicular drawn from the point $P(4, 2, 2)$ to the line $\\frac{x-1}{2} = \\frac{y+1}{1} = \\frac{z-2}{-2}$. Hence find the perpendicular distance of $P$ from the line.',
    answer: 'A general point on the line is $Q(1 + 2t, -1 + t, 2 - 2t)$, so $\\vec{PQ} = (2t - 3)\\hat{i} + (t - 3)\\hat{j} - 2t\\hat{k}$. For $PQ$ perpendicular to the line (direction ratios $2, 1, -2$): $2(2t - 3) + (t - 3) + 4t = 0$, i.e. $9t - 9 = 0$, so $t = 1$. The foot is $(3, 0, 0)$. Then $\\vec{PQ} = -\\hat{i} - 2\\hat{j} - 2\\hat{k}$, so the perpendicular distance is $\\sqrt{1 + 4 + 4} = 3$ units.',
    steps: [
      { step: 'Writes the general point and $\\vec{PQ}$, and sets $\\vec{PQ} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Gets $t = 1$ and the foot $(3, 0, 0)$', marks: 1 },
      { step: 'Finds the distance $3$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-c03', chapter: C, topic: SD, type: 'short', complexity: 'hard', marks: 3,
    text: 'Show that the lines $\\vec{r} = (-2\\hat{i} - 4\\hat{j} - \\hat{k}) + \\lambda(4\\hat{i} - 3\\hat{j} + 2\\hat{k})$ and $\\vec{r} = (4\\hat{i} + 4\\hat{k}) + \\mu(3\\hat{i} - 4\\hat{j} - 2\\hat{k})$ are skew, and find the shortest distance between them.',
    answer: 'Here $\\vec{b}_1 = 4\\hat{i} - 3\\hat{j} + 2\\hat{k}$, $\\vec{b}_2 = 3\\hat{i} - 4\\hat{j} - 2\\hat{k}$ and $\\vec{a}_2 - \\vec{a}_1 = 6\\hat{i} + 4\\hat{j} + 5\\hat{k}$. The directions are not proportional, so the lines are not parallel. $\\vec{b}_1 \\times \\vec{b}_2 = ((-3)(-2) - (2)(-4))\\hat{i} - ((4)(-2) - (2)(3))\\hat{j} + ((4)(-4) - (-3)(3))\\hat{k} = 14\\hat{i} + 14\\hat{j} - 7\\hat{k}$, with magnitude $\\sqrt{196 + 196 + 49} = 21$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 84 + 56 - 35 = 105$. Shortest distance $= \\frac{105}{21} = 5$ units. Since this is not zero and the lines are not parallel, they do not meet, so they are skew.',
    steps: [
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = 14\\hat{i} + 14\\hat{j} - 7\\hat{k}$ with magnitude $21$', marks: 1 },
      { step: 'Computes $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 105$', marks: 1 },
      { step: 'Gets shortest distance $5$ units and concludes skew (not parallel, distance non-zero)', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-c04', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'Show that the lines $\\frac{x-1}{2} = \\frac{y+1}{3} = \\frac{z-2}{-1}$ and $\\frac{x-4}{1} = \\frac{y}{-2} = \\frac{z-3}{2}$ intersect. Find their point of intersection and its distance from the point $Q(5, 1, 3)$.',
    answer: 'General points are $(1 + 2s, -1 + 3s, 2 - s)$ and $(4 + t, -2t, 3 + 2t)$. Equating $x$: $2s - t = 3$; equating $y$: $3s + 2t = 1$. Solving, $s = 1$, $t = -1$. Check $z$: $2 - 1 = 1$ and $3 + 2(-1) = 1$, so the $z$-coordinates agree and the lines intersect, at $(3, 2, 1)$. Distance from $Q(5, 1, 3)$ is $\\sqrt{(5-3)^2 + (1-2)^2 + (3-1)^2} = \\sqrt{9} = 3$ units.',
    steps: [
      { step: 'Writes general points and solves the $x$ and $y$ equations to get $s = 1$, $t = -1$', marks: 1 },
      { step: 'Verifies the $z$-coordinates agree and gives the point $(3, 2, 1)$', marks: 1 },
      { step: 'Finds the distance $3$ units', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-3d-d01', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the lines $\\vec{r} = (-5\\hat{j} + 6\\hat{k}) + \\lambda(\\hat{i} + 2\\hat{j} - \\hat{k})$ and $\\vec{r} = (5\\hat{i} - 2\\hat{j} + 6\\hat{k}) + \\mu(3\\hat{i} - \\hat{j} + 2\\hat{k})$ intersect, and find their point of intersection. Also find the acute angle between the lines.',
    answer: 'General points are $(\\lambda, -5 + 2\\lambda, 6 - \\lambda)$ and $(5 + 3\\mu, -2 - \\mu, 6 + 2\\mu)$. Equating components: $\\lambda = 5 + 3\\mu$, $-5 + 2\\lambda = -2 - \\mu$, $6 - \\lambda = 6 + 2\\mu$. Substituting the first into the second: $-5 + 10 + 6\\mu = -2 - \\mu$, so $\\mu = -1$ and $\\lambda = 2$. Check the third: $6 - 2 = 4$ and $6 + 2(-1) = 4$, which agree, so the lines intersect. The point of intersection is $(2, -1, 4)$. For the angle, $\\vec{b}_1 \\cdot \\vec{b}_2 = 3 - 2 - 2 = -1$, $|\\vec{b}_1| = \\sqrt{6}$, $|\\vec{b}_2| = \\sqrt{14}$, so $\\cos\\theta = \\frac{|-1|}{\\sqrt{6}\\sqrt{14}} = \\frac{1}{2\\sqrt{21}}$ and the acute angle is $\\theta = \\cos^{-1}\\left(\\frac{1}{2\\sqrt{21}}\\right)$.',
    steps: [
      { step: 'Writes general points and equates the three components', marks: 1 },
      { step: 'Solves two equations to get $\\lambda = 2$, $\\mu = -1$', marks: 1 },
      { step: 'Verifies the third equation is satisfied', marks: 1 },
      { step: 'States the point of intersection $(2, -1, 4)$', marks: 1 },
      { step: 'Finds the acute angle $\\cos^{-1}\\left(\\frac{1}{2\\sqrt{21}}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d02', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the value of $b$ for which the lines $\\frac{x+1}{2} = \\frac{y-b}{1} = \\frac{z-1}{-1}$ and $\\frac{x-4}{3} = \\frac{y-1}{-2} = \\frac{z-2}{2}$ intersect. Also find their point of intersection.',
    answer: 'General points are $(-1 + 2s, b + s, 1 - s)$ and $(4 + 3t, 1 - 2t, 2 + 2t)$. Equating $x$: $2s - 3t = 5$. Equating $z$: $-s - 2t = 1$, so $s = -1 - 2t$. Then $-2 - 4t - 3t = 5$, giving $t = -1$ and $s = 1$. Equating $y$: $b + 1 = 1 - 2(-1) = 3$, so $b = 2$. The point of intersection is $(4 - 3, 1 + 2, 2 - 2) = (1, 3, 0)$. Check on the first line: $\\frac{1+1}{2} = \\frac{3-2}{1} = \\frac{0-1}{-1} = 1$.',
    steps: [
      { step: 'Writes general points of both lines', marks: 1 },
      { step: 'Solves the $x$ and $z$ equations to get $s = 1$, $t = -1$', marks: 2 },
      { step: 'Uses the $y$ equation to get $b = 2$', marks: 1 },
      { step: 'States the point of intersection $(1, 3, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d03', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: '$A(1, 2, -1)$, $B(3, 0, 2)$ and $C(4, 1, 5)$ are three consecutive vertices of a parallelogram $ABCD$. Find the coordinates of $D$, the vector equations of the diagonals $AC$ and $BD$, and the point where the diagonals intersect.',
    answer: 'In a parallelogram the diagonals bisect each other, so $\\vec{D} = \\vec{A} + \\vec{C} - \\vec{B} = (1 + 4 - 3, 2 + 1 - 0, -1 + 5 - 2) = (2, 3, 2)$. Diagonal $AC$: direction $\\vec{AC} = 3\\hat{i} - \\hat{j} + 6\\hat{k}$, so $\\vec{r} = (\\hat{i} + 2\\hat{j} - \\hat{k}) + \\lambda(3\\hat{i} - \\hat{j} + 6\\hat{k})$. Diagonal $BD$: direction $\\vec{BD} = -\\hat{i} + 3\\hat{j}$, so $\\vec{r} = (3\\hat{i} + 2\\hat{k}) + \\mu(-\\hat{i} + 3\\hat{j})$. Equating: $1 + 3\\lambda = 3 - \\mu$, $2 - \\lambda = 3\\mu$, $-1 + 6\\lambda = 2$. The third gives $\\lambda = \\frac{1}{2}$, then $\\mu = \\frac{1}{2}$, and the first checks: $\\frac{5}{2} = \\frac{5}{2}$. The diagonals intersect at $\\left(\\frac{5}{2}, \\frac{3}{2}, 2\\right)$, the midpoint of both $AC$ and $BD$.',
    steps: [
      { step: 'Finds $D(2, 3, 2)$', marks: 1 },
      { step: 'Writes the equation of diagonal $AC$', marks: 1 },
      { step: 'Writes the equation of diagonal $BD$', marks: 1 },
      { step: 'Solves for $\\lambda = \\frac{1}{2}$, $\\mu = \\frac{1}{2}$ and checks consistency', marks: 1 },
      { step: 'States the intersection $\\left(\\frac{5}{2}, \\frac{3}{2}, 2\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d04', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the vector and Cartesian equations of the line passing through the point of intersection of the lines $\\frac{x-1}{2} = \\frac{y+2}{1} = \\frac{z-3}{-1}$ and $\\frac{x-4}{1} = \\frac{y+4}{-3} = \\frac{z-4}{2}$, and perpendicular to both of them.',
    answer: 'General points are $(1 + 2s, -2 + s, 3 - s)$ and $(4 + t, -4 - 3t, 4 + 2t)$. Equating $x$: $2s - t = 3$; equating $y$: $s + 3t = -2$. Solving, $t = -1$, $s = 1$. Check $z$: $3 - 1 = 2$ and $4 - 2 = 2$. The point of intersection is $(3, -1, 2)$. The required direction is $(2\\hat{i} + \\hat{j} - \\hat{k}) \\times (\\hat{i} - 3\\hat{j} + 2\\hat{k}) = (2 - 3)\\hat{i} - (4 + 1)\\hat{j} + (-6 - 1)\\hat{k} = -\\hat{i} - 5\\hat{j} - 7\\hat{k}$, i.e. along $\\hat{i} + 5\\hat{j} + 7\\hat{k}$. Vector equation: $\\vec{r} = (3\\hat{i} - \\hat{j} + 2\\hat{k}) + \\mu(\\hat{i} + 5\\hat{j} + 7\\hat{k})$. Cartesian equation: $\\frac{x-3}{1} = \\frac{y+1}{5} = \\frac{z-2}{7}$.',
    steps: [
      { step: 'Solves the general points to get $s = 1$, $t = -1$', marks: 1 },
      { step: 'Verifies the $z$-coordinates and gets the point $(3, -1, 2)$', marks: 1 },
      { step: 'Finds the direction $\\vec{b}_1 \\times \\vec{b}_2 = -\\hat{i} - 5\\hat{j} - 7\\hat{k}$ (or a multiple)', marks: 2 },
      { step: 'Writes both the vector and Cartesian equations', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d05', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'The vertices of a triangle are $A(2, 1, -1)$, $B(4, -3, 5)$ and $C(3, 5, 2)$. Find the vector equations of the median through $A$ and the median through $B$. Find the point where these medians meet and verify that it is the centroid of the triangle.',
    answer: 'Midpoint of $BC$: $M = \\left(\\frac{7}{2}, 1, \\frac{7}{2}\\right)$, so $\\vec{AM} = \\frac{3}{2}\\hat{i} + \\frac{9}{2}\\hat{k}$, parallel to $\\hat{i} + 3\\hat{k}$. Median through $A$: $\\vec{r} = (2\\hat{i} + \\hat{j} - \\hat{k}) + \\lambda(\\hat{i} + 3\\hat{k})$. Midpoint of $CA$: $N = \\left(\\frac{5}{2}, 3, \\frac{1}{2}\\right)$, so $\\vec{BN} = -\\frac{3}{2}\\hat{i} + 6\\hat{j} - \\frac{9}{2}\\hat{k}$, parallel to $-\\hat{i} + 4\\hat{j} - 3\\hat{k}$. Median through $B$: $\\vec{r} = (4\\hat{i} - 3\\hat{j} + 5\\hat{k}) + \\mu(-\\hat{i} + 4\\hat{j} - 3\\hat{k})$. Equating: $2 + \\lambda = 4 - \\mu$, $1 = -3 + 4\\mu$, $-1 + 3\\lambda = 5 - 3\\mu$. So $\\mu = 1$, $\\lambda = 1$, and the third checks ($2 = 2$). The medians meet at $(3, 1, 2)$. The centroid is $\\left(\\frac{2 + 4 + 3}{3}, \\frac{1 - 3 + 5}{3}, \\frac{-1 + 5 + 2}{3}\\right) = (3, 1, 2)$, the same point.',
    steps: [
      { step: 'Finds midpoints $\\left(\\frac{7}{2}, 1, \\frac{7}{2}\\right)$ and $\\left(\\frac{5}{2}, 3, \\frac{1}{2}\\right)$', marks: 1 },
      { step: 'Writes the median through $A$', marks: 1 },
      { step: 'Writes the median through $B$', marks: 1 },
      { step: 'Solves to get $\\lambda = 1$, $\\mu = 1$ with consistency check', marks: 1 },
      { step: 'States the point $(3, 1, 2)$ and verifies it is the centroid', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d06', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the coordinates of the foot of the perpendicular and the length of the perpendicular drawn from the point $P(6, -2, 1)$ to the line $\\frac{x-1}{3} = \\frac{y+2}{2} = \\frac{z}{-1}$. Also find the Cartesian equation of this perpendicular.',
    answer: 'A general point on the line is $Q(1 + 3t, -2 + 2t, -t)$, so $\\vec{PQ} = (3t - 5)\\hat{i} + 2t\\hat{j} + (-t - 1)\\hat{k}$. For $PQ$ perpendicular to the line (direction ratios $3, 2, -1$): $3(3t - 5) + 2(2t) - (-t - 1) = 0$, i.e. $14t - 14 = 0$, so $t = 1$. The foot is $(4, 0, -1)$. Then $\\vec{PQ} = -2\\hat{i} + 2\\hat{j} - 2\\hat{k}$, so the length of the perpendicular is $\\sqrt{4 + 4 + 4} = 2\\sqrt{3}$ units. The perpendicular passes through $P(6, -2, 1)$ with direction ratios $1, -1, 1$: $\\frac{x-6}{1} = \\frac{y+2}{-1} = \\frac{z-1}{1}$.',
    steps: [
      { step: 'Writes the general point and $\\vec{PQ}$', marks: 1 },
      { step: 'Uses $\\vec{PQ} \\cdot \\vec{b} = 0$ to get $t = 1$', marks: 1 },
      { step: 'States the foot $(4, 0, -1)$', marks: 1 },
      { step: 'Finds the length $2\\sqrt{3}$ units', marks: 1 },
      { step: 'Writes the perpendicular $\\frac{x-6}{1} = \\frac{y+2}{-1} = \\frac{z-1}{1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d07', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the image of the point $P(5, -2, 3)$ in the line $\\frac{x-2}{1} = \\frac{y+1}{-2} = \\frac{z-1}{2}$. Also find the equation of the line joining $P$ and its image, and the distance between them.',
    answer: 'A general point on the line is $Q(2 + t, -1 - 2t, 1 + 2t)$, so $\\vec{PQ} = (t - 3)\\hat{i} + (1 - 2t)\\hat{j} + (2t - 2)\\hat{k}$. Perpendicularity with direction ratios $1, -2, 2$: $(t - 3) - 2(1 - 2t) + 2(2t - 2) = 0$, i.e. $9t - 9 = 0$, so $t = 1$ and the foot is $F(3, -3, 3)$. $F$ is the midpoint of $P$ and its image $P\'$, so $P\' = (2 \\cdot 3 - 5, 2(-3) + 2, 2 \\cdot 3 - 3) = (1, -4, 3)$. The line $PP\'$ has direction $\\vec{PP\'} = -4\\hat{i} - 2\\hat{j}$, parallel to $2\\hat{i} + \\hat{j}$: $\\vec{r} = (5\\hat{i} - 2\\hat{j} + 3\\hat{k}) + \\mu(2\\hat{i} + \\hat{j})$, i.e. $\\frac{x-5}{2} = \\frac{y+2}{1}$, $z = 3$. Distance $PP\' = \\sqrt{16 + 4 + 0} = 2\\sqrt{5}$ units.',
    steps: [
      { step: 'Writes the general point and $\\vec{PQ}$, and sets $\\vec{PQ} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Gets $t = 1$ and the foot $(3, -3, 3)$', marks: 1 },
      { step: 'Uses the midpoint to get the image $(1, -4, 3)$', marks: 1 },
      { step: 'Writes the equation of line $PP\'$', marks: 1 },
      { step: 'Finds the distance $2\\sqrt{5}$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d08', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'In triangle $ABC$, the vertex is $A(4, 2, -2)$ and the side $BC$ lies along the line $\\frac{x}{2} = \\frac{y-1}{2} = \\frac{z+1}{1}$. If $BC = 5$ units, find the foot of the perpendicular from $A$ to $BC$, the length of this altitude, and the area of triangle $ABC$.',
    answer: 'A general point on $BC$ is $Q(2t, 1 + 2t, -1 + t)$, so $\\vec{AQ} = (2t - 4)\\hat{i} + (2t - 1)\\hat{j} + (t + 1)\\hat{k}$. Perpendicularity with direction ratios $2, 2, 1$: $2(2t - 4) + 2(2t - 1) + (t + 1) = 0$, i.e. $9t - 9 = 0$, so $t = 1$. The foot is $(2, 3, 0)$. Then $\\vec{AQ} = -2\\hat{i} + \\hat{j} + 2\\hat{k}$, so the altitude is $\\sqrt{4 + 1 + 4} = 3$ units. Area $= \\frac{1}{2} \\times BC \\times \\text{altitude} = \\frac{1}{2} \\times 5 \\times 3 = \\frac{15}{2}$ square units.',
    steps: [
      { step: 'Writes the general point on $BC$ and $\\vec{AQ}$', marks: 1 },
      { step: 'Uses perpendicularity to get $t = 1$', marks: 1 },
      { step: 'States the foot $(2, 3, 0)$', marks: 1 },
      { step: 'Finds the altitude $3$ units', marks: 1 },
      { step: 'Finds the area $\\frac{15}{2}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d09', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the coordinates of the points on the line $\\frac{x+1}{2} = \\frac{y-1}{-1} = \\frac{z}{2}$ which are at a distance of $3\\sqrt{2}$ units from the point $P(3, 2, 1)$.\nOR\nFind the image of the point $P(3, 2, 1)$ in the line $\\frac{x+1}{2} = \\frac{y-1}{-1} = \\frac{z}{2}$.',
    answer: 'Main question: A general point on the line is $Q(-1 + 2s, 1 - s, 2s)$, so $\\vec{PQ} = (2s - 4)\\hat{i} + (-1 - s)\\hat{j} + (2s - 1)\\hat{k}$ and $PQ^2 = (2s - 4)^2 + (s + 1)^2 + (2s - 1)^2 = 9s^2 - 18s + 18$. Setting $PQ^2 = 18$: $9s^2 - 18s = 0$, so $s = 0$ or $s = 2$. The points are $(-1, 1, 0)$ and $(3, -1, 4)$. (Check: distances $\\sqrt{16 + 1 + 1}$ and $\\sqrt{0 + 9 + 9}$, both $3\\sqrt{2}$.)\nOR: With the same general point, $\\vec{PQ} \\cdot (2\\hat{i} - \\hat{j} + 2\\hat{k}) = 2(2s - 4) + (1 + s) + 2(2s - 1) = 9s - 9 = 0$, so $s = 1$ and the foot is $F(1, 0, 2)$. The image is $P\' = (2 \\cdot 1 - 3, 2 \\cdot 0 - 2, 2 \\cdot 2 - 1) = (-1, -2, 3)$.',
    steps: [
      { step: 'Writes the general point $(-1 + 2s, 1 - s, 2s)$ and $\\vec{PQ}$ (OR: same)', marks: 1 },
      { step: 'Forms $PQ^2 = 9s^2 - 18s + 18$ (OR: sets $\\vec{PQ} \\cdot \\vec{b} = 0$)', marks: 1 },
      { step: 'Solves $9s^2 - 18s = 0$ (OR: $9s - 9 = 0$)', marks: 1 },
      { step: 'Gets $s = 0, 2$ (OR: foot $(1, 0, 2)$)', marks: 1 },
      { step: 'States the points $(-1, 1, 0)$ and $(3, -1, 4)$ (OR: image $(-1, -2, 3)$)', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d10', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the shortest distance between the lines $\\vec{r} = (2\\hat{i} + 3\\hat{j} - 2\\hat{k}) + \\lambda(4\\hat{i} - 2\\hat{j} - 3\\hat{k})$ and $\\vec{r} = (3\\hat{i} - 3\\hat{j} + \\hat{k}) + \\mu(4\\hat{i} - \\hat{j} - 3\\hat{k})$.',
    answer: 'Here $\\vec{a}_1 = 2\\hat{i} + 3\\hat{j} - 2\\hat{k}$, $\\vec{b}_1 = 4\\hat{i} - 2\\hat{j} - 3\\hat{k}$, $\\vec{a}_2 = 3\\hat{i} - 3\\hat{j} + \\hat{k}$, $\\vec{b}_2 = 4\\hat{i} - \\hat{j} - 3\\hat{k}$, and $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} - 6\\hat{j} + 3\\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((-2)(-3) - (-3)(-1))\\hat{i} - ((4)(-3) - (-3)(4))\\hat{j} + ((4)(-1) - (-2)(4))\\hat{k} = 3\\hat{i} + 0\\hat{j} + 4\\hat{k}$, with magnitude $5$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 3 + 0 + 12 = 15$. Shortest distance $= \\frac{15}{5} = 3$ units.',
    steps: [
      { step: 'Identifies $\\vec{a}_1, \\vec{b}_1, \\vec{a}_2, \\vec{b}_2$ and $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} - 6\\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = 3\\hat{i} + 4\\hat{k}$ and its magnitude $5$', marks: 2 },
      { step: 'Computes the dot product $15$', marks: 1 },
      { step: 'Gets shortest distance $3$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d11', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the shortest distance between the lines $\\frac{x+1}{-4} = \\frac{y+3}{3} = \\frac{z+4}{2}$ and $\\frac{x-4}{-4} = \\frac{y-4}{1} = \\frac{z-3}{1}$. Hence state whether the lines intersect.',
    answer: 'The first line passes through $(-1, -3, -4)$ with $\\vec{b}_1 = -4\\hat{i} + 3\\hat{j} + 2\\hat{k}$; the second through $(4, 4, 3)$ with $\\vec{b}_2 = -4\\hat{i} + \\hat{j} + \\hat{k}$. So $\\vec{a}_2 - \\vec{a}_1 = 5\\hat{i} + 7\\hat{j} + 7\\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((3)(1) - (2)(1))\\hat{i} - ((-4)(1) - (2)(-4))\\hat{j} + ((-4)(1) - (3)(-4))\\hat{k} = \\hat{i} - 4\\hat{j} + 8\\hat{k}$, with magnitude $\\sqrt{1 + 16 + 64} = 9$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 5 - 28 + 56 = 33$. Shortest distance $= \\frac{33}{9} = \\frac{11}{3}$ units. Since this is not zero, the lines do not intersect (they are skew, as they are also not parallel).',
    steps: [
      { step: 'Identifies points, direction vectors and $\\vec{a}_2 - \\vec{a}_1 = 5\\hat{i} + 7\\hat{j} + 7\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = \\hat{i} - 4\\hat{j} + 8\\hat{k}$ with magnitude $9$', marks: 2 },
      { step: 'Computes the dot product $33$ and the distance $\\frac{11}{3}$ units', marks: 1 },
      { step: 'Concludes the lines do not intersect', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d12', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the line through the points $A(2, -1, 1)$ and $B(4, 0, 3)$ is parallel to the line through the points $C(1, 2, 0)$ and $D(5, 4, 4)$. Write the vector equations of both lines and find the distance between them.',
    answer: '$\\vec{AB} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ and $\\vec{CD} = 4\\hat{i} + 2\\hat{j} + 4\\hat{k} = 2\\vec{AB}$, so the lines are parallel. Line $AB$: $\\vec{r} = (2\\hat{i} - \\hat{j} + \\hat{k}) + \\lambda(2\\hat{i} + \\hat{j} + 2\\hat{k})$. Line $CD$: $\\vec{r} = (\\hat{i} + 2\\hat{j}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$. With $\\vec{b} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ and $\\vec{a}_2 - \\vec{a}_1 = -\\hat{i} + 3\\hat{j} - \\hat{k}$: $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = ((1)(-1) - (2)(3))\\hat{i} - ((2)(-1) - (2)(-1))\\hat{j} + ((2)(3) - (1)(-1))\\hat{k} = -7\\hat{i} + 0\\hat{j} + 7\\hat{k}$, with magnitude $\\sqrt{49 + 49} = 7\\sqrt{2}$. Since this is non-zero, $C$ is not on line $AB$ and the lines are distinct. Distance $= \\frac{7\\sqrt{2}}{|\\vec{b}|} = \\frac{7\\sqrt{2}}{3}$ units.',
    steps: [
      { step: 'Shows $\\vec{CD} = 2\\vec{AB}$, so the lines are parallel', marks: 1 },
      { step: 'Writes the vector equations of both lines', marks: 1 },
      { step: 'Computes $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = -7\\hat{i} + 7\\hat{k}$ with magnitude $7\\sqrt{2}$', marks: 2 },
      { step: 'Gets the distance $\\frac{7\\sqrt{2}}{3}$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-d13', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Consider the lines $L_1: \\vec{r} = (-4\\hat{i} - 3\\hat{k}) + \\lambda(-4\\hat{i} + 3\\hat{j} + \\hat{k})$ and $L_2: \\vec{r} = (2\\hat{i} + \\hat{j} - 2\\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$. (a) Determine whether $L_1$ and $L_2$ intersect, and find the shortest distance between them. (b) Find the vector equation of the line through the origin that is perpendicular to both $L_1$ and $L_2$.',
    answer: '(a) Equating components: $-4 - 4\\lambda = 2 + 2\\mu$, $3\\lambda = 1 + \\mu$, $-3 + \\lambda = -2 + 2\\mu$. From the second, $\\mu = 3\\lambda - 1$; the first then gives $-4 - 4\\lambda = 6\\lambda$, so $\\lambda = -\\frac{2}{5}$ and $\\mu = -\\frac{11}{5}$. In the third, the left side is $-\\frac{17}{5}$ but the right side is $-\\frac{32}{5}$, so there is no common point: the lines do not intersect (and they are not parallel, so they are skew). $\\vec{b}_1 \\times \\vec{b}_2 = ((3)(2) - (1)(1))\\hat{i} - ((-4)(2) - (1)(2))\\hat{j} + ((-4)(1) - (3)(2))\\hat{k} = 5\\hat{i} + 10\\hat{j} - 10\\hat{k}$, with magnitude $15$. $\\vec{a}_2 - \\vec{a}_1 = 6\\hat{i} + \\hat{j} + \\hat{k}$, and the dot product is $30 + 10 - 10 = 30$. Shortest distance $= \\frac{30}{15} = 2$ units. (b) The direction is along $\\vec{b}_1 \\times \\vec{b}_2$, i.e. $\\hat{i} + 2\\hat{j} - 2\\hat{k}$, so the line is $\\vec{r} = t(\\hat{i} + 2\\hat{j} - 2\\hat{k})$.',
    steps: [
      { step: 'Solves two component equations and shows the third fails, so no intersection', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = 5\\hat{i} + 10\\hat{j} - 10\\hat{k}$ with magnitude $15$', marks: 1 },
      { step: 'Computes $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 30$', marks: 1 },
      { step: 'Gets shortest distance $2$ units', marks: 1 },
      { step: 'Writes $\\vec{r} = t(\\hat{i} + 2\\hat{j} - 2\\hat{k})$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-3d-e01', chapter: C, topic: SD, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At a concert, two laser beams are fired across the hall in straight lines. Taking a point on the lighting rig as the origin and distances in metres, beam $P$ travels along $\\vec{r} = (\\hat{i} - \\hat{j}) + \\lambda(2\\hat{i} + \\hat{j} - 2\\hat{k})$ and beam $Q$ travels along $\\vec{r} = (2\\hat{i} + 3\\hat{j} + \\hat{k}) + \\mu(\\hat{i} + 2\\hat{j} + 2\\hat{k})$. The lighting engineer needs to know how close the beams come to each other.',
    answer: '(i) $\\frac{2}{3}, \\frac{1}{3}, -\\frac{2}{3}$. (ii) $90^\\circ$. (iii) $\\frac{5}{3}$ m; OR the points $(3, 0, -2)$ and $(-1, -2, 2)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the direction cosines of beam $P$.',
        answer: 'Direction ratios are $2, 1, -2$ with magnitude $\\sqrt{4 + 1 + 4} = 3$, so the direction cosines are $\\frac{2}{3}, \\frac{1}{3}, -\\frac{2}{3}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the angle between the two beams.',
        answer: '$(2\\hat{i} + \\hat{j} - 2\\hat{k}) \\cdot (\\hat{i} + 2\\hat{j} + 2\\hat{k}) = 2 + 2 - 4 = 0$, so $\\cos\\theta = 0$ and the beams are at $90^\\circ$ to each other.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the shortest distance between the two beams.\nOR\nFind the coordinates of the points on beam $P$ that are at a distance of $3$ m from the point $(1, -1, 0)$.',
        answer: '$\\vec{b}_1 \\times \\vec{b}_2 = (1 \\cdot 2 - (-2) \\cdot 2)\\hat{i} - (2 \\cdot 2 - (-2) \\cdot 1)\\hat{j} + (2 \\cdot 2 - 1 \\cdot 1)\\hat{k} = 6\\hat{i} - 6\\hat{j} + 3\\hat{k}$, magnitude $9$. $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} + 4\\hat{j} + \\hat{k}$, and $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 6 - 24 + 3 = -15$. Shortest distance $= \\frac{|-15|}{9} = \\frac{5}{3}$ m (1 mark for the cross product, 1 mark for the distance).\nOR: Points on beam $P$ are $(1 + 2\\lambda, -1 + \\lambda, -2\\lambda)$; their distance from $(1, -1, 0)$ is $\\sqrt{4\\lambda^2 + \\lambda^2 + 4\\lambda^2} = 3|\\lambda|$. Setting $3|\\lambda| = 3$ gives $\\lambda = \\pm 1$, so the points are $(3, 0, -2)$ and $(-1, -2, 2)$ (1 mark for $\\lambda = \\pm 1$, 1 mark for the points).',
      },
    ],
  },
  {
    id: 'c12-3d-e02', chapter: C, topic: FT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An adventure park runs a straight zip line from the top of tower $A$ to the top of tower $B$. Taking a point on the ground as the origin, with the $z$-axis vertical and distances in metres, the cable starts at $A(2, 1, 12)$ and ends at $B(14, 5, 6)$. A security camera is fixed at $C(10, 6, 15)$.',
    answer: '(i) $\\frac{6}{7}, \\frac{2}{7}, -\\frac{3}{7}$. (ii) $(8, 3, 9)$. (iii) Foot $(8, 3, 9)$, distance $7$ m; OR length $14$ m and angle $\\cos^{-1}\\left(\\frac{3}{7}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the direction cosines of the zip line from $A$ to $B$.',
        answer: 'Direction ratios are $12, 4, -6$, proportional to $6, 2, -3$, with magnitude $7$. Direction cosines: $\\frac{6}{7}, \\frac{2}{7}, -\\frac{3}{7}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the point on the zip line where a rider is at a height of $9$ m.',
        answer: 'The line is $\\frac{x-2}{6} = \\frac{y-1}{2} = \\frac{z-12}{-3} = t$. Height $z = 12 - 3t = 9$ gives $t = 1$, so the point is $(8, 3, 9)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the point on the zip line nearest to the camera, and the distance of the camera from the zip line.\nOR\nFind the length of the cable $AB$ and the acute angle the cable makes with the vertical.',
        answer: 'A general point is $Q(2 + 6t, 1 + 2t, 12 - 3t)$ and $\\vec{CQ} = (6t - 8)\\hat{i} + (2t - 5)\\hat{j} + (-3 - 3t)\\hat{k}$. Setting $\\vec{CQ} \\cdot (6\\hat{i} + 2\\hat{j} - 3\\hat{k}) = 0$: $36t - 48 + 4t - 10 + 9 + 9t = 0$, i.e. $49t - 49 = 0$, so $t = 1$ and the nearest point is $(8, 3, 9)$ (1 mark). Then $\\vec{CQ} = -2\\hat{i} - 3\\hat{j} - 6\\hat{k}$, so the distance is $\\sqrt{4 + 9 + 36} = 7$ m (1 mark).\nOR: $AB = \\sqrt{12^2 + 4^2 + 6^2} = \\sqrt{196} = 14$ m (1 mark). The vertical is the $z$-axis, so $\\cos\\theta = \\left|-\\frac{3}{7}\\right| = \\frac{3}{7}$ and the acute angle is $\\cos^{-1}\\left(\\frac{3}{7}\\right)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-e03', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a factory, straight pipes run through the workshop. Taking a corner of the floor as the origin and distances in metres, pipe 1 runs along $\\vec{r} = (\\hat{i} + 2\\hat{j} - \\hat{k}) + \\lambda(2\\hat{i} - \\hat{j} + 2\\hat{k})$ and pipe 2 runs along $\\vec{r} = (3\\hat{i} + \\hat{j} + 2\\hat{k}) + \\mu(-4\\hat{i} + 2\\hat{j} - 4\\hat{k})$. A new pipe is to be fitted through a valve at $V(0, 4, 1)$.',
    answer: '(i) Pipe 2 direction $= -2 \\times$ pipe 1 direction, so parallel. (ii) $\\frac{x}{2} = \\frac{y-4}{-1} = \\frac{z-1}{2}$. (iii) $\\frac{\\sqrt{5}}{3}$ m; OR $\\cos^{-1}\\left(\\frac{4}{9}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that pipe 1 and pipe 2 are parallel.',
        answer: '$-4\\hat{i} + 2\\hat{j} - 4\\hat{k} = -2(2\\hat{i} - \\hat{j} + 2\\hat{k})$, so the direction ratios are proportional and the pipes are parallel.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the Cartesian equation of the new pipe through $V$ that is parallel to pipe 1.',
        answer: 'Through $(0, 4, 1)$ with direction ratios $2, -1, 2$: $\\frac{x}{2} = \\frac{y-4}{-1} = \\frac{z-1}{2}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the distance between pipe 1 and pipe 2.\nOR\nA third pipe runs along $\\vec{r} = (2\\hat{i} + \\hat{k}) + t(\\hat{i} + 2\\hat{j} + 2\\hat{k})$. Find the angle between pipe 1 and this third pipe.',
        answer: 'With $\\vec{b} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{a}_2 - \\vec{a}_1 = 2\\hat{i} - \\hat{j} + 3\\hat{k}$: $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = ((-1)(3) - (2)(-1))\\hat{i} - ((2)(3) - (2)(2))\\hat{j} + ((2)(-1) - (-1)(2))\\hat{k} = -\\hat{i} - 2\\hat{j} + 0\\hat{k}$, magnitude $\\sqrt{5}$ (1 mark). Distance $= \\frac{\\sqrt{5}}{|\\vec{b}|} = \\frac{\\sqrt{5}}{3}$ m (1 mark).\nOR: $(2\\hat{i} - \\hat{j} + 2\\hat{k}) \\cdot (\\hat{i} + 2\\hat{j} + 2\\hat{k}) = 2 - 2 + 4 = 4$ and both magnitudes are $3$ (1 mark), so $\\cos\\theta = \\frac{4}{9}$ and $\\theta = \\cos^{-1}\\left(\\frac{4}{9}\\right)$ (1 mark).',
      },
    ],
  },
];
