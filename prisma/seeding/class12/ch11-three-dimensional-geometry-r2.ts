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

export const CH11_3D_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-3d-r2-a01', chapter: C, topic: DC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A line makes angles $\\alpha$, $\\beta$ and $\\gamma$ with the positive $x$-, $y$- and $z$-axes respectively. The value of $\\cos 2\\alpha + \\cos 2\\beta + \\cos 2\\gamma$ is',
    options: ['$1$', '$-1$', '$2$', '$0$'],
    answer: 'Correct option: B) $-1$. Using $\\cos 2\\theta = 2\\cos^2\\theta - 1$, the sum is $2(\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma) - 3 = 2(1) - 3 = -1$.',
  },
  {
    id: 'c12-3d-r2-a02', chapter: C, topic: DC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $\\frac{1}{2}$, $\\frac{1}{\\sqrt{2}}$ and $k$ are the direction cosines of a line, then $k$ equals',
    options: ['$\\pm\\frac{1}{2}$', '$\\pm\\frac{1}{\\sqrt{2}}$', '$\\pm\\frac{1}{4}$', '$\\pm\\frac{\\sqrt{3}}{2}$'],
    answer: 'Correct option: A) $\\pm\\frac{1}{2}$. Since $l^2 + m^2 + n^2 = 1$, $k^2 = 1 - \\frac{1}{4} - \\frac{1}{2} = \\frac{1}{4}$, so $k = \\pm\\frac{1}{2}$ (option C forgets to take the square root).',
  },
  {
    id: 'c12-3d-r2-a03', chapter: C, topic: DC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The acute angle that the line $\\frac{x-1}{4} = \\frac{y+2}{-12} = \\frac{z}{3}$ makes with the $y$-axis is',
    options: ['$\\cos^{-1}\\left(\\frac{4}{13}\\right)$', '$\\cos^{-1}\\left(\\frac{12}{13}\\right)$', '$\\cos^{-1}\\left(\\frac{3}{13}\\right)$', '$\\cos^{-1}\\left(\\frac{12}{19}\\right)$'],
    answer: 'Correct option: B) $\\cos^{-1}\\left(\\frac{12}{13}\\right)$. The direction ratios are $4, -12, 3$ with $\\sqrt{16 + 144 + 9} = 13$, so $\\cos\\beta = -\\frac{12}{13}$; the acute angle with the $y$-axis has cosine $\\frac{12}{13}$. (Option D wrongly divides by $4 + 12 + 3 = 19$.)',
  },
  {
    id: 'c12-3d-r2-a04', chapter: C, topic: DC, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): A line with direction ratios $1, 1, 0$ is perpendicular to the $z$-axis.\nReason (R): A line is perpendicular to the $z$-axis exactly when the third of its direction cosines, $n = \\cos\\gamma$, is $0$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true and (R) is the correct explanation of (A). The direction cosines of the line are $\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}, 0$, so $\\cos\\gamma = 0$ and $\\gamma = 90^\\circ$; (R) is the general fact that gives this.',
  },
  {
    id: 'c12-3d-r2-a05', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The Cartesian form of the line $\\vec{r} = (3\\hat{i} - \\hat{k}) + \\lambda(\\hat{i} + 2\\hat{j} - 5\\hat{k})$ is',
    options: [
      '$\\frac{x+3}{1} = \\frac{y}{2} = \\frac{z-1}{-5}$',
      '$\\frac{x-3}{1} = \\frac{y}{2} = \\frac{z+1}{-5}$',
      '$\\frac{x-1}{3} = \\frac{y-2}{2} = \\frac{z+5}{-1}$',
      '$\\frac{x-3}{1} = \\frac{y}{2} = \\frac{z-1}{-5}$',
    ],
    answer: 'Correct option: B) $\\frac{x-3}{1} = \\frac{y}{2} = \\frac{z+1}{-5}$. The line passes through $(3, 0, -1)$ and has direction ratios $1, 2, -5$, so $\\frac{x-3}{1} = \\frac{y-0}{2} = \\frac{z-(-1)}{-5}$.',
  },
  {
    id: 'c12-3d-r2-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The vector equation of the line $\\frac{1-x}{2} = \\frac{y+3}{1} = \\frac{2z-1}{4}$ is',
    options: [
      '$\\vec{r} = \\left(\\hat{i} - 3\\hat{j} + \\frac{1}{2}\\hat{k}\\right) + \\lambda(2\\hat{i} + \\hat{j} + 4\\hat{k})$',
      '$\\vec{r} = \\left(\\hat{i} - 3\\hat{j} + \\frac{1}{2}\\hat{k}\\right) + \\lambda(-2\\hat{i} + \\hat{j} + 2\\hat{k})$',
      '$\\vec{r} = (-\\hat{i} - 3\\hat{j} + \\hat{k}) + \\lambda(-2\\hat{i} + \\hat{j} + 2\\hat{k})$',
      '$\\vec{r} = (\\hat{i} - 3\\hat{j} + \\hat{k}) + \\lambda(-2\\hat{i} + \\hat{j} + 4\\hat{k})$',
    ],
    answer: 'Correct option: B) In standard form $\\frac{x-1}{-2} = \\frac{y+3}{1} = \\frac{z - \\frac{1}{2}}{2}$, so the line passes through $\\left(1, -3, \\frac{1}{2}\\right)$ with direction ratios $-2, 1, 2$.',
  },
  {
    id: 'c12-3d-r2-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The line through $P(1, 0, 3)$ and $Q(3, 4, -1)$ meets the $xy$-plane at the point',
    options: ['$\\left(\\frac{3}{2}, 1, 0\\right)$', '$(2, 2, 0)$', '$\\left(\\frac{5}{2}, 3, 0\\right)$', '$(4, 6, 0)$'],
    answer: 'Correct option: C) $\\left(\\frac{5}{2}, 3, 0\\right)$. Points on $PQ$ are $(1 + 2t, 4t, 3 - 4t)$. On the $xy$-plane $z = 0$, so $t = \\frac{3}{4}$, giving $\\left(\\frac{5}{2}, 3, 0\\right)$.',
  },
  {
    id: 'c12-3d-r2-a08', chapter: C, topic: EQ, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The lines $\\vec{r} = (\\hat{i} + \\hat{j}) + \\lambda(\\hat{i} + 2\\hat{j} + 3\\hat{k})$ and $\\vec{r} = (2\\hat{i} + 3\\hat{j} + 3\\hat{k}) + \\mu(2\\hat{i} + \\hat{j} - \\hat{k})$ intersect.\nReason (R): Any two lines in space that are not parallel must intersect.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) (A) is true but (R) is false. Equating $(1 + \\lambda, 1 + 2\\lambda, 3\\lambda)$ and $(2 + 2\\mu, 3 + \\mu, 3 - \\mu)$ gives $\\mu = 0$, $\\lambda = 1$, and all three coordinates agree at $(2, 3, 3)$, so (A) is true. (R) is false because non-parallel lines in space can be skew.',
  },
  {
    id: 'c12-3d-r2-a09', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the lines $\\vec{r} = \\lambda(\\hat{i} + \\hat{j})$ and $\\vec{r} = 2\\hat{k} + \\mu(\\hat{j} + \\hat{k})$ is',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: B) $\\frac{\\pi}{3}$. $\\cos\\theta = \\frac{(\\hat{i} + \\hat{j}) \\cdot (\\hat{j} + \\hat{k})}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$.',
  },
  {
    id: 'c12-3d-r2-a10', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The lines $\\frac{x-1}{2} = \\frac{y}{k} = \\frac{z+1}{3}$ and $\\frac{x}{4} = \\frac{y-2}{6} = \\frac{z}{6}$ are parallel. The value of $k$ is',
    options: ['$3$', '$-\\frac{13}{3}$', '$6$', '$12$'],
    answer: 'Correct option: A) $3$. Parallel lines have proportional direction ratios: $\\frac{2}{4} = \\frac{k}{6} = \\frac{3}{6}$, so $k = 3$. (Option B is the value that would make the lines perpendicular.)',
  },
  {
    id: 'c12-3d-r2-a11', chapter: C, topic: ANG, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The acute angle between the lines $\\vec{r} = (\\hat{i} + \\hat{k}) + \\lambda(\\hat{i} + 2\\hat{j} - 2\\hat{k})$ and $\\vec{r} = (2\\hat{i} - \\hat{j}) + \\mu(-3\\hat{j} + 4\\hat{k})$ is',
    options: ['$\\cos^{-1}\\left(\\frac{14}{15}\\right)$', '$\\pi - \\cos^{-1}\\left(\\frac{14}{15}\\right)$', '$\\cos^{-1}\\left(\\frac{2}{15}\\right)$', '$\\cos^{-1}\\left(\\frac{14}{25}\\right)$'],
    answer: 'Correct option: A) $\\cos^{-1}\\left(\\frac{14}{15}\\right)$. The dot product of the directions is $0 - 6 - 8 = -14$ and the magnitudes are $3$ and $5$, so $\\cos\\theta = \\frac{|-14|}{15} = \\frac{14}{15}$ for the acute angle. (Option B is the obtuse angle.)',
  },
  {
    id: 'c12-3d-r2-a12', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the line through $A(1, -1, 2)$ and $B(3, 4, -2)$ and the line through $C(0, 3, 2)$ and $D(3, 5, 6)$ is',
    options: ['$0$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: D) $\\frac{\\pi}{2}$. $\\vec{AB} = 2\\hat{i} + 5\\hat{j} - 4\\hat{k}$ and $\\vec{CD} = 3\\hat{i} + 2\\hat{j} + 4\\hat{k}$, and $\\vec{AB} \\cdot \\vec{CD} = 6 + 10 - 16 = 0$, so the lines are perpendicular.',
  },
  {
    id: 'c12-3d-r2-a13', chapter: C, topic: SD, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The distance between the parallel lines $\\vec{r} = \\lambda(\\hat{i} + 2\\hat{j} + 2\\hat{k})$ and $\\vec{r} = 3\\hat{i} + \\mu(2\\hat{i} + 4\\hat{j} + 4\\hat{k})$ is',
    options: ['$3$', '$2\\sqrt{2}$', '$6\\sqrt{2}$', '$\\sqrt{2}$'],
    answer: 'Correct option: B) $2\\sqrt{2}$. With $\\vec{b} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\vec{a}_2 - \\vec{a}_1 = 3\\hat{i}$, $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = 6\\hat{j} - 6\\hat{k}$ with magnitude $6\\sqrt{2}$; dividing by $|\\vec{b}| = 3$ gives $2\\sqrt{2}$.',
  },
  {
    id: 'c12-3d-r2-a14', chapter: C, topic: SD, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The shortest distance between the $z$-axis and the line $\\vec{r} = (\\hat{i} + 2\\hat{j}) + \\lambda(\\hat{i} - \\hat{j})$ is',
    options: ['$\\sqrt{5}$', '$3$', '$\\frac{1}{\\sqrt{2}}$', '$\\frac{3}{\\sqrt{2}}$'],
    answer: 'Correct option: D) $\\frac{3}{\\sqrt{2}}$. The $z$-axis is $\\vec{r} = \\mu\\hat{k}$. $(\\hat{i} - \\hat{j}) \\times \\hat{k} = -\\hat{i} - \\hat{j}$ with magnitude $\\sqrt{2}$, and $(\\vec{a}_2 - \\vec{a}_1) \\cdot (-\\hat{i} - \\hat{j}) = (-\\hat{i} - 2\\hat{j}) \\cdot (-\\hat{i} - \\hat{j}) = 3$, so the distance is $\\frac{3}{\\sqrt{2}}$.',
  },
  {
    id: 'c12-3d-r2-a15', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The foot of the perpendicular from the point $(3, 1, 2)$ to the line $\\vec{r} = \\lambda(\\hat{i} + \\hat{j} + \\hat{k})$ is',
    options: ['$(1, 1, 1)$', '$(2, 2, 2)$', '$(3, 3, 3)$', '$(6, 6, 6)$'],
    answer: 'Correct option: B) $(2, 2, 2)$. For the foot $(\\lambda, \\lambda, \\lambda)$: $(\\lambda - 3) + (\\lambda - 1) + (\\lambda - 2) = 0$, so $\\lambda = 2$.',
  },
  {
    id: 'c12-3d-r2-a16', chapter: C, topic: FT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The foot of the perpendicular from the origin to a line $L$ is $F(2, -1, 2)$. Which of the following could be direction ratios of $L$?',
    options: ['$2, -1, 2$', '$1, 1, 1$', '$1, 2, 0$', '$0, 2, -1$'],
    answer: 'Correct option: C) $1, 2, 0$. $L$ must be perpendicular to $\\vec{OF} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$, and only $2(1) + (-1)(2) + 2(0) = 0$ among the options.',
  },
  {
    id: 'c12-3d-r2-a17', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The foot of the perpendicular from $P(1, 4, -2)$ to a line $L$ is $F(3, 2, 0)$. The image of $P$ in $L$ is',
    options: ['$(2, 3, -1)$', '$(5, 0, 2)$', '$(4, 6, -2)$', '$(-1, 6, -4)$'],
    answer: 'Correct option: B) $(5, 0, 2)$. $F$ is the midpoint of $P$ and its image, so the image is $(2 \\cdot 3 - 1, 2 \\cdot 2 - 4, 2 \\cdot 0 + 2) = (5, 0, 2)$. (Option A is the midpoint of $P$ and $F$.)',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-3d-r2-b01', chapter: C, topic: DC, type: 'short', complexity: 'easy', marks: 2,
    text: 'A line segment $OP$ through the origin $O$ has length $21$ units and direction ratios $2, -3, 6$. Find the coordinates of $P$.',
    answer: 'The magnitude of the direction ratios is $\\sqrt{4 + 9 + 36} = 7$, so the direction cosines are $\\pm\\left(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}\\right)$. Then $P = 21 \\times \\left(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}\\right) = (6, -9, 18)$, or, taking the opposite sense, $P = (-6, 9, -18)$.',
    steps: [
      { step: 'Finds the direction cosines $\\pm\\left(\\frac{2}{7}, -\\frac{3}{7}, \\frac{6}{7}\\right)$', marks: 1 },
      { step: 'Multiplies by $21$ to get $P(6, -9, 18)$ (or $(-6, 9, -18)$)', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b02', chapter: C, topic: DC, type: 'short', complexity: 'easy', marks: 2,
    text: 'Using direction ratios, show that the points $A(2, 3, -4)$, $B(1, -2, 3)$ and $C(3, 8, -11)$ are collinear.',
    answer: 'Direction ratios of $AB$ are $1 - 2, -2 - 3, 3 + 4$, i.e. $-1, -5, 7$. Direction ratios of $BC$ are $3 - 1, 8 + 2, -11 - 3$, i.e. $2, 10, -14$. Since $\\frac{2}{-1} = \\frac{10}{-5} = \\frac{-14}{7} = -2$, the direction ratios are proportional, so $AB \\parallel BC$. As $B$ is common to both, $A$, $B$ and $C$ are collinear.',
    steps: [
      { step: 'Finds direction ratios $-1, -5, 7$ of $AB$ and $2, 10, -14$ of $BC$', marks: 1 },
      { step: 'Shows they are proportional and uses the common point $B$ to conclude collinearity', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b03', chapter: C, topic: ANG, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the values of $p$ for which the angle between the lines $\\vec{r} = (2\\hat{i} - \\hat{j}) + \\lambda(\\hat{i} + \\hat{k})$ and $\\vec{r} = (\\hat{i} + 3\\hat{k}) + \\mu(\\hat{j} + p\\hat{k})$ is $\\frac{\\pi}{3}$.',
    answer: 'With $\\vec{b}_1 = \\hat{i} + \\hat{k}$ and $\\vec{b}_2 = \\hat{j} + p\\hat{k}$: $\\cos\\frac{\\pi}{3} = \\frac{|\\vec{b}_1 \\cdot \\vec{b}_2|}{|\\vec{b}_1||\\vec{b}_2|} = \\frac{|p|}{\\sqrt{2}\\sqrt{1 + p^2}}$. Setting this equal to $\\frac{1}{2}$: $2|p| = \\sqrt{2}\\sqrt{1 + p^2}$, so $4p^2 = 2 + 2p^2$, i.e. $p^2 = 1$. Hence $p = 1$ or $p = -1$.',
    steps: [
      { step: 'Writes $\\frac{|p|}{\\sqrt{2}\\sqrt{1 + p^2}} = \\frac{1}{2}$', marks: 1 },
      { step: 'Solves to get $p^2 = 1$, so $p = \\pm 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b04', chapter: C, topic: ANG, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the acute angle between the lines $\\frac{x-3}{2} = \\frac{1-y}{1} = \\frac{z+2}{2}$ and $\\frac{2x+1}{4} = \\frac{3-y}{2} = \\frac{z-1}{1}$.',
    answer: 'The first line is $\\frac{x-3}{2} = \\frac{y-1}{-1} = \\frac{z+2}{2}$, with direction ratios $2, -1, 2$. The second is $\\frac{x + \\frac{1}{2}}{2} = \\frac{y-3}{-2} = \\frac{z-1}{1}$, with direction ratios $2, -2, 1$. Then $\\cos\\theta = \\frac{|4 + 2 + 2|}{3 \\times 3} = \\frac{8}{9}$, so the acute angle is $\\theta = \\cos^{-1}\\left(\\frac{8}{9}\\right)$.',
    steps: [
      { step: 'Rewrites both lines in standard form to get direction ratios $2, -1, 2$ and $2, -2, 1$', marks: 1 },
      { step: 'Gets $\\cos\\theta = \\frac{8}{9}$, so $\\theta = \\cos^{-1}\\left(\\frac{8}{9}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b05', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the vector and Cartesian equations of the line passing through the point $(4, 0, -3)$ and parallel to the line $\\frac{1-x}{2} = \\frac{2y+3}{4} = \\frac{z}{-1}$.',
    answer: 'In standard form the given line is $\\frac{x-1}{-2} = \\frac{y + \\frac{3}{2}}{2} = \\frac{z}{-1}$, so its direction ratios are $-2, 2, -1$. The required line passes through $(4, 0, -3)$ with these direction ratios. Cartesian: $\\frac{x-4}{-2} = \\frac{y}{2} = \\frac{z+3}{-1}$. Vector: $\\vec{r} = (4\\hat{i} - 3\\hat{k}) + \\lambda(-2\\hat{i} + 2\\hat{j} - \\hat{k})$.',
    steps: [
      { step: 'Finds the direction ratios $-2, 2, -1$ of the given line', marks: 1 },
      { step: 'Writes both the Cartesian and vector equations of the required line', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b06', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'The Cartesian equations of a line are $4x - 8 = 1 - 2y = 4z + 4$. Find the direction cosines of the line and write its vector equation.',
    answer: 'Write the equations as $4(x - 2) = -2\\left(y - \\frac{1}{2}\\right) = 4(z + 1)$ and divide by $4$: $\\frac{x-2}{1} = \\frac{y - \\frac{1}{2}}{-2} = \\frac{z+1}{1}$. So the line passes through $\\left(2, \\frac{1}{2}, -1\\right)$ with direction ratios $1, -2, 1$. Since $\\sqrt{1 + 4 + 1} = \\sqrt{6}$, the direction cosines are $\\frac{1}{\\sqrt{6}}, -\\frac{2}{\\sqrt{6}}, \\frac{1}{\\sqrt{6}}$ (or their negatives). Vector equation: $\\vec{r} = \\left(2\\hat{i} + \\frac{1}{2}\\hat{j} - \\hat{k}\\right) + \\lambda(\\hat{i} - 2\\hat{j} + \\hat{k})$.',
    steps: [
      { step: 'Reduces to standard form, getting the point $\\left(2, \\frac{1}{2}, -1\\right)$ and direction ratios $1, -2, 1$', marks: 1 },
      { step: 'States the direction cosines $\\frac{1}{\\sqrt{6}}, -\\frac{2}{\\sqrt{6}}, \\frac{1}{\\sqrt{6}}$ and the vector equation', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b07', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that $Q(3, 1, 2)$ is the foot of the perpendicular from $P(5, 0, 4)$ to the line $\\frac{x-2}{1} = \\frac{y+3}{4} = \\frac{z-1}{1}$. Hence find the distance of $P$ from the line.',
    answer: '$Q$ lies on the line because $\\frac{3-2}{1} = \\frac{1+3}{4} = \\frac{2-1}{1} = 1$. Also $\\vec{PQ} = -2\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{PQ} \\cdot (\\hat{i} + 4\\hat{j} + \\hat{k}) = -2 + 4 - 2 = 0$, so $PQ$ is perpendicular to the line. Hence $Q$ is the foot of the perpendicular, and the distance of $P$ from the line is $|\\vec{PQ}| = \\sqrt{4 + 1 + 4} = 3$ units.',
    steps: [
      { step: 'Shows $Q$ lies on the line and $\\vec{PQ} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Finds the distance $3$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-b08', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the distance between the parallel lines $\\frac{x-1}{2} = \\frac{y+1}{-1} = \\frac{z}{2}$ and $\\frac{x-2}{-4} = \\frac{y}{2} = \\frac{z-1}{-4}$.',
    answer: 'The directions $2, -1, 2$ and $-4, 2, -4$ are proportional, so take $\\vec{b} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$, $\\vec{a}_1 = \\hat{i} - \\hat{j}$, $\\vec{a}_2 = 2\\hat{i} + \\hat{k}$, so $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} + \\hat{j} + \\hat{k}$. Then $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = ((-1)(1) - (2)(1))\\hat{i} - ((2)(1) - (2)(1))\\hat{j} + ((2)(1) - (-1)(1))\\hat{k} = -3\\hat{i} + 3\\hat{k}$, with magnitude $3\\sqrt{2}$. Distance $= \\frac{3\\sqrt{2}}{|\\vec{b}|} = \\frac{3\\sqrt{2}}{3} = \\sqrt{2}$ units.',
    steps: [
      { step: 'Computes $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = -3\\hat{i} + 3\\hat{k}$ with magnitude $3\\sqrt{2}$', marks: 1 },
      { step: 'Divides by $|\\vec{b}| = 3$ to get $\\sqrt{2}$ units', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-3d-r2-c01', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the shortest distance between the lines $\\frac{x-1}{1} = \\frac{y}{-1} = \\frac{z+2}{1}$ and $\\frac{x-4}{2} = \\frac{y-1}{1} = \\frac{3-z}{1}$.',
    answer: 'The first line passes through $(1, 0, -2)$ with $\\vec{b}_1 = \\hat{i} - \\hat{j} + \\hat{k}$. Writing $\\frac{3-z}{1} = \\frac{z-3}{-1}$, the second passes through $(4, 1, 3)$ with $\\vec{b}_2 = 2\\hat{i} + \\hat{j} - \\hat{k}$. So $\\vec{a}_2 - \\vec{a}_1 = 3\\hat{i} + \\hat{j} + 5\\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((-1)(-1) - (1)(1))\\hat{i} - ((1)(-1) - (1)(2))\\hat{j} + ((1)(1) - (-1)(2))\\hat{k} = 0\\hat{i} + 3\\hat{j} + 3\\hat{k}$, with magnitude $3\\sqrt{2}$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0 + 3 + 15 = 18$. Shortest distance $= \\frac{18}{3\\sqrt{2}} = 3\\sqrt{2}$ units.',
    steps: [
      { step: 'Identifies the points and directions, noting $\\vec{b}_2 = 2\\hat{i} + \\hat{j} - \\hat{k}$, and $\\vec{a}_2 - \\vec{a}_1 = 3\\hat{i} + \\hat{j} + 5\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = 3\\hat{j} + 3\\hat{k}$ with magnitude $3\\sqrt{2}$', marks: 1 },
      { step: 'Gets the dot product $18$ and the distance $3\\sqrt{2}$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-c02', chapter: C, topic: SD, type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the shortest distance between the lines $\\vec{r} = (\\lambda - 1)\\hat{i} + (\\lambda + 1)\\hat{j} - (1 + \\lambda)\\hat{k}$ and $\\vec{r} = (1 - \\mu)\\hat{i} + (2\\mu - 1)\\hat{j} + (\\mu + 2)\\hat{k}$.',
    answer: 'Separate each line into a point and a direction. First: $\\vec{r} = (-\\hat{i} + \\hat{j} - \\hat{k}) + \\lambda(\\hat{i} + \\hat{j} - \\hat{k})$. Second: $\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + \\mu(-\\hat{i} + 2\\hat{j} + \\hat{k})$. So $\\vec{a}_2 - \\vec{a}_1 = 2\\hat{i} - 2\\hat{j} + 3\\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((1)(1) - (-1)(2))\\hat{i} - ((1)(1) - (-1)(-1))\\hat{j} + ((1)(2) - (1)(-1))\\hat{k} = 3\\hat{i} + 0\\hat{j} + 3\\hat{k}$, with magnitude $3\\sqrt{2}$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 6 + 0 + 9 = 15$. Shortest distance $= \\frac{15}{3\\sqrt{2}} = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$ units.',
    steps: [
      { step: 'Rewrites both lines as $\\vec{a} + \\lambda\\vec{b}$, with $\\vec{a}_2 - \\vec{a}_1 = 2\\hat{i} - 2\\hat{j} + 3\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = 3\\hat{i} + 3\\hat{k}$ with magnitude $3\\sqrt{2}$', marks: 1 },
      { step: 'Gets the dot product $15$ and the distance $\\frac{5\\sqrt{2}}{2}$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-c03', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the perpendicular distance of the point $P(6, 2, 2)$ from the line $\\frac{x+1}{2} = \\frac{y-3}{-2} = \\frac{z}{1}$. Hence find the image of $P$ in the line.',
    answer: 'A general point on the line is $F(-1 + 2t, 3 - 2t, t)$, so $\\vec{PF} = (2t - 7)\\hat{i} + (1 - 2t)\\hat{j} + (t - 2)\\hat{k}$. For $PF$ perpendicular to the line: $2(2t - 7) - 2(1 - 2t) + (t - 2) = 0$, i.e. $9t - 18 = 0$, so $t = 2$ and the foot is $F(3, -1, 2)$. Then $\\vec{PF} = -3\\hat{i} - 3\\hat{j}$, so the perpendicular distance is $\\sqrt{9 + 9} = 3\\sqrt{2}$ units. $F$ is the midpoint of $P$ and its image, so the image is $(2 \\cdot 3 - 6, 2(-1) - 2, 2 \\cdot 2 - 2) = (0, -4, 2)$.',
    steps: [
      { step: 'Uses $\\vec{PF} \\cdot \\vec{b} = 0$ to get $t = 2$ and the foot $(3, -1, 2)$', marks: 1 },
      { step: 'Finds the distance $3\\sqrt{2}$ units', marks: 1 },
      { step: 'Uses the midpoint to get the image $(0, -4, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-c04', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the point on the line $\\frac{x-2}{1} = \\frac{y+1}{2} = \\frac{z-3}{-1}$ which is equidistant from the points $A(1, 2, 3)$ and $B(1, 1, 0)$.',
    answer: 'A general point on the line is $Q(2 + t, -1 + 2t, 3 - t)$. Then $QA^2 = (1 + t)^2 + (2t - 3)^2 + (-t)^2 = 6t^2 - 10t + 10$ and $QB^2 = (1 + t)^2 + (2t - 2)^2 + (3 - t)^2 = 6t^2 - 12t + 14$. Setting $QA^2 = QB^2$: $-10t + 10 = -12t + 14$, so $t = 2$. The point is $Q(4, 3, 1)$. (Check: $QA^2 = 9 + 1 + 4 = 14$ and $QB^2 = 9 + 4 + 1 = 14$.)',
    steps: [
      { step: 'Writes the general point $(2 + t, -1 + 2t, 3 - t)$', marks: 1 },
      { step: 'Forms $QA^2 = 6t^2 - 10t + 10$ and $QB^2 = 6t^2 - 12t + 14$ and equates them', marks: 1 },
      { step: 'Gets $t = 2$ and the point $(4, 3, 1)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-c05', chapter: C, topic: ANG, type: 'short', complexity: 'medium', marks: 3,
    text: 'A store room is a cuboid of length $2$ m, breadth $3$ m and height $6$ m. Take one floor corner $O$ as the origin, with the length along the $x$-axis, the breadth along the $y$-axis and the height along the $z$-axis. Find (a) the acute angle between the diagonal from $O$ to the opposite corner and the vertical edge through $O$, and (b) the acute angle between that diagonal and the diagonal from the floor corner $A(2, 0, 0)$ to its opposite corner.',
    answer: 'The diagonal from $O$ goes to $P(2, 3, 6)$, so its direction ratios are $2, 3, 6$ with magnitude $7$. (a) The vertical edge is along $\\hat{k}$, so $\\cos\\theta = \\frac{6}{7}$ and the angle is $\\cos^{-1}\\left(\\frac{6}{7}\\right)$. (b) The diagonal from $A(2, 0, 0)$ goes to the opposite corner $(0, 3, 6)$, with direction ratios $-2, 3, 6$ and magnitude $7$. Then $\\cos\\phi = \\frac{|(2)(-2) + (3)(3) + (6)(6)|}{7 \\times 7} = \\frac{41}{49}$, so the acute angle is $\\cos^{-1}\\left(\\frac{41}{49}\\right)$.',
    steps: [
      { step: 'Sets up the diagonal direction ratios $2, 3, 6$ and $-2, 3, 6$', marks: 1 },
      { step: 'Finds the angle with the vertical edge, $\\cos^{-1}\\left(\\frac{6}{7}\\right)$', marks: 1 },
      { step: 'Finds the angle between the diagonals, $\\cos^{-1}\\left(\\frac{41}{49}\\right)$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-3d-r2-d01', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the vector and Cartesian equations of the line through $A(2, 1, -1)$ and $B(4, 4, 5)$. Find the point where this line meets the $xy$-plane and the ratio in which the $xy$-plane divides the segment $AB$. Also find the point where the line meets the $yz$-plane.',
    answer: '$\\vec{AB} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$. Vector equation: $\\vec{r} = (2\\hat{i} + \\hat{j} - \\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 6\\hat{k})$. Cartesian: $\\frac{x-2}{2} = \\frac{y-1}{3} = \\frac{z+1}{6}$. A general point is $(2 + 2\\lambda, 1 + 3\\lambda, -1 + 6\\lambda)$. On the $xy$-plane $z = 0$, so $\\lambda = \\frac{1}{6}$ and the point is $\\left(\\frac{7}{3}, \\frac{3}{2}, 0\\right)$. Since $\\lambda = \\frac{1}{6}$ lies between $0$ (at $A$) and $1$ (at $B$), the point divides $AB$ internally with $AP : PB = \\frac{1}{6} : \\frac{5}{6} = 1 : 5$. On the $yz$-plane $x = 0$, so $\\lambda = -1$ and the point is $(0, -2, -7)$.',
    steps: [
      { step: 'Writes the vector equation', marks: 1 },
      { step: 'Writes the Cartesian equation', marks: 1 },
      { step: 'Finds the meeting point with the $xy$-plane, $\\left(\\frac{7}{3}, \\frac{3}{2}, 0\\right)$', marks: 1 },
      { step: 'States the ratio $1 : 5$ (internally)', marks: 1 },
      { step: 'Finds the meeting point with the $yz$-plane, $(0, -2, -7)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d02', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Three lines are $L_1: \\vec{r} = (-\\hat{i} - 2\\hat{j} + 3\\hat{k}) + \\lambda(2\\hat{i} + 2\\hat{j} - \\hat{k})$, $L_2: \\vec{r} = (2\\hat{i} - 2\\hat{j}) + \\mu(\\hat{i} - 2\\hat{j} - 2\\hat{k})$ and $L_3: \\vec{r} = (3\\hat{i} + 4\\hat{j} + 2\\hat{k}) + \\nu(2\\hat{j} + \\hat{k})$. Find the vertices of the triangle formed by these lines (each pair meets at one vertex). Show that the triangle is right-angled and find its area.',
    answer: '$L_1$ and $L_2$: $-1 + 2\\lambda = 2 + \\mu$, $-2 + 2\\lambda = -2 - 2\\mu$, $3 - \\lambda = -2\\mu$. The second gives $\\lambda = -\\mu$; then the first gives $\\mu = -1$, $\\lambda = 1$, and the third checks ($2 = 2$). Vertex $P(1, 0, 2)$. $L_1$ and $L_3$: $-1 + 2\\lambda = 3$, $-2 + 2\\lambda = 4 + 2\\nu$, $3 - \\lambda = 2 + \\nu$. So $\\lambda = 2$, then $\\nu = -1$, and the third checks ($1 = 1$). Vertex $Q(3, 2, 1)$. $L_2$ and $L_3$: $2 + \\mu = 3$, $-2 - 2\\mu = 4 + 2\\nu$, $-2\\mu = 2 + \\nu$. So $\\mu = 1$, then $\\nu = -4$, and the third checks ($-2 = -2$). Vertex $R(3, -4, -2)$. Now $\\vec{PQ} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{PR} = 2\\hat{i} - 4\\hat{j} - 4\\hat{k}$, and $\\vec{PQ} \\cdot \\vec{PR} = 4 - 8 + 4 = 0$, so the triangle is right-angled at $P$. $PQ = 3$ and $PR = 6$, so the area is $\\frac{1}{2} \\times 3 \\times 6 = 9$ square units.',
    steps: [
      { step: 'Finds vertex $P(1, 0, 2)$ from $L_1$ and $L_2$ with consistency check', marks: 1 },
      { step: 'Finds vertex $Q(3, 2, 1)$ from $L_1$ and $L_3$', marks: 1 },
      { step: 'Finds vertex $R(3, -4, -2)$ from $L_2$ and $L_3$', marks: 1 },
      { step: 'Shows $\\vec{PQ} \\cdot \\vec{PR} = 0$, so the right angle is at $P$', marks: 1 },
      { step: 'Finds the area $9$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d03', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'A drone lifts off from a point $A(1, 2, 0)$ on level ground and flies in a straight line in the direction of $2\\hat{i} - \\hat{j} + 2\\hat{k}$ at a steady speed of $6$ m/s. Distances are in metres and the $z$-axis is vertical. (a) Write the vector equation of its path. (b) Find its position after $3$ seconds. (c) When does it reach a height of $20$ m, and where is it then? (d) Does the path pass through the point $T(9, -2, 8)$? If so, when is the drone there? (e) Find the angle the path makes with the vertical.',
    answer: '(a) $\\vec{r} = (\\hat{i} + 2\\hat{j}) + \\lambda(2\\hat{i} - \\hat{j} + 2\\hat{k})$. (b) The unit vector along the path is $\\frac{1}{3}(2\\hat{i} - \\hat{j} + 2\\hat{k})$, so the velocity is $6 \\times \\frac{1}{3}(2\\hat{i} - \\hat{j} + 2\\hat{k}) = 4\\hat{i} - 2\\hat{j} + 4\\hat{k}$ m/s. After $t$ seconds the drone is at $(1 + 4t, 2 - 2t, 4t)$; at $t = 3$ it is at $(13, -4, 12)$. (c) $4t = 20$ gives $t = 5$ s, at the point $(21, -8, 20)$. (d) Setting $(1 + 2\\lambda, 2 - \\lambda, 2\\lambda) = (9, -2, 8)$: each coordinate gives $\\lambda = 4$, so $T$ is on the path. Since $\\lambda = 2t$, the drone is at $T$ when $t = 2$ s. (e) The vertical is $\\hat{k}$, so $\\cos\\theta = \\frac{2}{3}$ and the angle is $\\cos^{-1}\\left(\\frac{2}{3}\\right)$.',
    steps: [
      { step: 'Writes the vector equation of the path', marks: 1 },
      { step: 'Finds the velocity $4\\hat{i} - 2\\hat{j} + 4\\hat{k}$ and the position $(13, -4, 12)$ after $3$ s', marks: 1 },
      { step: 'Gets $t = 5$ s and the point $(21, -8, 20)$', marks: 1 },
      { step: 'Shows $T$ is on the path with $\\lambda = 4$, i.e. at $t = 2$ s', marks: 1 },
      { step: 'Finds the angle with the vertical, $\\cos^{-1}\\left(\\frac{2}{3}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d04', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'A line through $P(3, -5, 1)$ meets the line $L: \\frac{x-1}{2} = \\frac{y+1}{-1} = \\frac{z-2}{3}$ at a point $Q$ and is perpendicular to the $x$-axis. Find $Q$, the vector equation of $PQ$, the length $PQ$ and the direction cosines of $PQ$.',
    answer: 'A general point on $L$ is $Q(1 + 2t, -1 - t, 2 + 3t)$, so $\\vec{PQ} = (2t - 2)\\hat{i} + (4 - t)\\hat{j} + (1 + 3t)\\hat{k}$. Perpendicular to the $x$-axis means $\\vec{PQ} \\cdot \\hat{i} = 0$, so $2t - 2 = 0$ and $t = 1$. Then $Q = (3, -2, 5)$ and $\\vec{PQ} = 3\\hat{j} + 4\\hat{k}$. Vector equation of $PQ$: $\\vec{r} = (3\\hat{i} - 5\\hat{j} + \\hat{k}) + \\mu(3\\hat{j} + 4\\hat{k})$. Length $PQ = \\sqrt{0 + 9 + 16} = 5$ units. Direction cosines of $PQ$: $0, \\frac{3}{5}, \\frac{4}{5}$.',
    steps: [
      { step: 'Writes the general point $Q$ and $\\vec{PQ}$', marks: 1 },
      { step: 'Uses $\\vec{PQ} \\cdot \\hat{i} = 0$ to get $t = 1$ and $Q(3, -2, 5)$', marks: 1 },
      { step: 'Writes the vector equation of $PQ$', marks: 1 },
      { step: 'Finds $PQ = 5$ units', marks: 1 },
      { step: 'States the direction cosines $0, \\frac{3}{5}, \\frac{4}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d05', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Show that the lines $L_1: \\frac{x-2}{1} = \\frac{y-1}{2} = \\frac{z-4}{2}$ and $L_2: \\frac{x+1}{2} = \\frac{y+2}{1} = \\frac{z-4}{-2}$ intersect at right angles, and find their point of intersection. Hence find the Cartesian equations of the two lines that bisect the angles between $L_1$ and $L_2$.',
    answer: 'General points are $(2 + s, 1 + 2s, 4 + 2s)$ and $(-1 + 2t, -2 + t, 4 - 2t)$. Equating $x$: $s - 2t = -3$; equating $y$: $2s - t = -3$. Solving, $s = -1$, $t = 1$. Check $z$: $4 - 2 = 2$ and $4 - 2 = 2$, so the lines meet at $X(1, -1, 2)$. The directions $\\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $2\\hat{i} + \\hat{j} - 2\\hat{k}$ have dot product $2 + 2 - 4 = 0$, so the lines are perpendicular. Unit vectors along them are $\\hat{u}_1 = \\frac{1}{3}(\\hat{i} + 2\\hat{j} + 2\\hat{k})$ and $\\hat{u}_2 = \\frac{1}{3}(2\\hat{i} + \\hat{j} - 2\\hat{k})$. The bisectors through $X$ are along $\\hat{u}_1 + \\hat{u}_2 = \\frac{1}{3}(3\\hat{i} + 3\\hat{j})$, i.e. direction ratios $1, 1, 0$, and $\\hat{u}_1 - \\hat{u}_2 = \\frac{1}{3}(-\\hat{i} + \\hat{j} + 4\\hat{k})$, i.e. direction ratios $-1, 1, 4$. Bisectors: $\\frac{x-1}{1} = \\frac{y+1}{1}$, $z = 2$; and $\\frac{x-1}{-1} = \\frac{y+1}{1} = \\frac{z-2}{4}$.',
    steps: [
      { step: 'Solves two coordinate equations to get $s = -1$, $t = 1$ and checks the third', marks: 1 },
      { step: 'States the intersection $(1, -1, 2)$ and shows the directions are perpendicular', marks: 1 },
      { step: 'Writes the unit vectors $\\hat{u}_1$ and $\\hat{u}_2$', marks: 1 },
      { step: 'Finds the bisector directions $1, 1, 0$ and $-1, 1, 4$', marks: 1 },
      { step: 'Writes the equations of both bisectors', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d06', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the shortest distance between the lines $\\frac{x-3}{3} = \\frac{y+3}{2} = \\frac{z+1}{-2}$ and $\\frac{x-4}{1} = \\frac{y-2}{2} = \\frac{z+2}{2}$. Do the lines intersect? Give a reason.',
    answer: 'Here $\\vec{a}_1 = 3\\hat{i} - 3\\hat{j} - \\hat{k}$, $\\vec{b}_1 = 3\\hat{i} + 2\\hat{j} - 2\\hat{k}$, $\\vec{a}_2 = 4\\hat{i} + 2\\hat{j} - 2\\hat{k}$, $\\vec{b}_2 = \\hat{i} + 2\\hat{j} + 2\\hat{k}$, so $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} + 5\\hat{j} - \\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((2)(2) - (-2)(2))\\hat{i} - ((3)(2) - (-2)(1))\\hat{j} + ((3)(2) - (2)(1))\\hat{k} = 8\\hat{i} - 8\\hat{j} + 4\\hat{k}$, with magnitude $\\sqrt{64 + 64 + 16} = 12$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 8 - 40 - 4 = -36$. Shortest distance $= \\frac{|-36|}{12} = 3$ units. The lines do not intersect, because the shortest distance between them is not zero.',
    steps: [
      { step: 'Identifies $\\vec{a}_1, \\vec{b}_1, \\vec{a}_2, \\vec{b}_2$ and $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} + 5\\hat{j} - \\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = 8\\hat{i} - 8\\hat{j} + 4\\hat{k}$ with magnitude $12$', marks: 2 },
      { step: 'Computes the dot product $-36$ and the distance $3$ units', marks: 1 },
      { step: 'Concludes the lines do not intersect since the distance is non-zero', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d07', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'For the lines $L_1: \\vec{r} = (\\hat{i} - \\hat{j} + \\hat{k}) + \\lambda(\\hat{i} + \\hat{j})$ and $L_2: \\vec{r} = (4\\hat{i} - \\hat{j} + 4\\hat{k}) + \\mu(\\hat{j} + \\hat{k})$, find the points $F_1$ on $L_1$ and $F_2$ on $L_2$ such that $F_1F_2$ is perpendicular to both lines. Hence find the shortest distance between the lines and the vector equation of the line $F_1F_2$.',
    answer: 'Take $F_1(1 + \\lambda, -1 + \\lambda, 1)$ and $F_2(4, -1 + \\mu, 4 + \\mu)$. Then $\\vec{F_1F_2} = (3 - \\lambda)\\hat{i} + (\\mu - \\lambda)\\hat{j} + (3 + \\mu)\\hat{k}$. Perpendicular to $\\hat{i} + \\hat{j}$: $(3 - \\lambda) + (\\mu - \\lambda) = 0$, i.e. $\\mu - 2\\lambda = -3$. Perpendicular to $\\hat{j} + \\hat{k}$: $(\\mu - \\lambda) + (3 + \\mu) = 0$, i.e. $2\\mu - \\lambda = -3$. Solving, $\\lambda = 1$ and $\\mu = -1$. So $F_1 = (2, 0, 1)$ and $F_2 = (4, -2, 3)$. $\\vec{F_1F_2} = 2\\hat{i} - 2\\hat{j} + 2\\hat{k}$, so the shortest distance is $\\sqrt{4 + 4 + 4} = 2\\sqrt{3}$ units. (Check by formula: $\\vec{b}_1 \\times \\vec{b}_2 = \\hat{i} - \\hat{j} + \\hat{k}$, $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\hat{i} - \\hat{j} + \\hat{k}) = 3 + 0 + 3 = 6$, and $\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$.) The line $F_1F_2$ is $\\vec{r} = (2\\hat{i} + \\hat{k}) + t(\\hat{i} - \\hat{j} + \\hat{k})$.',
    steps: [
      { step: 'Writes general points $F_1$, $F_2$ and $\\vec{F_1F_2}$', marks: 1 },
      { step: 'Sets up the two perpendicularity conditions', marks: 1 },
      { step: 'Solves to get $\\lambda = 1$, $\\mu = -1$, $F_1(2, 0, 1)$, $F_2(4, -2, 3)$', marks: 1 },
      { step: 'Finds the shortest distance $2\\sqrt{3}$ units', marks: 1 },
      { step: 'Writes $\\vec{r} = (2\\hat{i} + \\hat{k}) + t(\\hat{i} - \\hat{j} + \\hat{k})$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d08', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the values of $p$ for which the shortest distance between the lines $\\vec{r} = (\\hat{i} + 2\\hat{j}) + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = (p\\hat{i} + \\hat{j} + \\hat{k}) + \\mu(\\hat{i} + \\hat{j})$ is $\\sqrt{6}$ units.',
    answer: 'Here $\\vec{b}_1 = \\hat{i} - \\hat{j} + \\hat{k}$, $\\vec{b}_2 = \\hat{i} + \\hat{j}$ and $\\vec{a}_2 - \\vec{a}_1 = (p - 1)\\hat{i} - \\hat{j} + \\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((-1)(0) - (1)(1))\\hat{i} - ((1)(0) - (1)(1))\\hat{j} + ((1)(1) - (-1)(1))\\hat{k} = -\\hat{i} + \\hat{j} + 2\\hat{k}$, with magnitude $\\sqrt{6}$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = -(p - 1) - 1 + 2 = 2 - p$. So the shortest distance is $\\frac{|2 - p|}{\\sqrt{6}}$. Setting it equal to $\\sqrt{6}$: $|2 - p| = 6$, so $p = 8$ or $p = -4$.',
    steps: [
      { step: 'Writes $\\vec{a}_2 - \\vec{a}_1 = (p - 1)\\hat{i} - \\hat{j} + \\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = -\\hat{i} + \\hat{j} + 2\\hat{k}$ with magnitude $\\sqrt{6}$', marks: 1 },
      { step: 'Computes the dot product $2 - p$', marks: 1 },
      { step: 'Sets $\\frac{|2 - p|}{\\sqrt{6}} = \\sqrt{6}$', marks: 1 },
      { step: 'Solves to get $p = 8$ or $p = -4$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d09', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the lines $L_1: \\frac{x-1}{2} = \\frac{y+2}{1} = \\frac{z-3}{-2}$ and $L_2: \\frac{x+1}{-4} = \\frac{y-2}{-2} = \\frac{z-1}{4}$ are parallel, and find the distance between them. Also find the Cartesian equation of the line parallel to both that lies midway between them (in their common plane).',
    answer: 'The direction ratios $-4, -2, 4$ of $L_2$ are $-2$ times $2, 1, -2$, so the lines are parallel with $\\vec{b} = 2\\hat{i} + \\hat{j} - 2\\hat{k}$. $L_2$ passes through $(-1, 2, 1)$, which is not on $L_1$ (its $x$-ratio is $-1$ but its $y$-ratio is $4$), so the lines are distinct. With $\\vec{a}_1 = \\hat{i} - 2\\hat{j} + 3\\hat{k}$ and $\\vec{a}_2 = -\\hat{i} + 2\\hat{j} + \\hat{k}$, $\\vec{a}_2 - \\vec{a}_1 = -2\\hat{i} + 4\\hat{j} - 2\\hat{k}$. $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = ((1)(-2) - (-2)(4))\\hat{i} - ((2)(-2) - (-2)(-2))\\hat{j} + ((2)(4) - (1)(-2))\\hat{k} = 6\\hat{i} + 8\\hat{j} + 10\\hat{k}$, with magnitude $\\sqrt{200} = 10\\sqrt{2}$. Distance $= \\frac{10\\sqrt{2}}{3}$ units. The midpoint of $(1, -2, 3)$ and $(-1, 2, 1)$ is $(0, 0, 2)$, and it is equidistant from both lines, so the midway line is $\\frac{x}{2} = \\frac{y}{1} = \\frac{z-2}{-2}$.',
    steps: [
      { step: 'Shows the direction ratios are proportional, so the lines are parallel', marks: 1 },
      { step: 'Writes $\\vec{a}_2 - \\vec{a}_1 = -2\\hat{i} + 4\\hat{j} - 2\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = 6\\hat{i} + 8\\hat{j} + 10\\hat{k}$ with magnitude $10\\sqrt{2}$', marks: 1 },
      { step: 'Gets the distance $\\frac{10\\sqrt{2}}{3}$ units', marks: 1 },
      { step: 'Uses the midpoint $(0, 0, 2)$ to write $\\frac{x}{2} = \\frac{y}{1} = \\frac{z-2}{-2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d10', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the shortest distance between the lines $\\vec{r} = (1 + \\lambda)\\hat{i} + (1 - 2\\lambda)\\hat{j} + (2 + \\lambda)\\hat{k}$ and $\\vec{r} = (3\\mu - 4)\\hat{i} + (\\mu - 3)\\hat{j} + (5 - \\mu)\\hat{k}$. What does your answer tell you about the lines? Find their common point, if any, and the angle between them.',
    answer: 'First line: $\\vec{a}_1 = \\hat{i} + \\hat{j} + 2\\hat{k}$, $\\vec{b}_1 = \\hat{i} - 2\\hat{j} + \\hat{k}$. Second line: $\\vec{a}_2 = -4\\hat{i} - 3\\hat{j} + 5\\hat{k}$, $\\vec{b}_2 = 3\\hat{i} + \\hat{j} - \\hat{k}$. $\\vec{a}_2 - \\vec{a}_1 = -5\\hat{i} - 4\\hat{j} + 3\\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = ((-2)(-1) - (1)(1))\\hat{i} - ((1)(-1) - (1)(3))\\hat{j} + ((1)(1) - (-2)(3))\\hat{k} = \\hat{i} + 4\\hat{j} + 7\\hat{k}$. $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = -5 - 16 + 21 = 0$, so the shortest distance is $0$. The lines are not parallel, so they intersect. Equating: $1 + \\lambda = 3\\mu - 4$ and $1 - 2\\lambda = \\mu - 3$. From these, $\\lambda = 3\\mu - 5$ and $1 - 6\\mu + 10 = \\mu - 3$, so $\\mu = 2$ and $\\lambda = 1$. Check $z$: $2 + 1 = 3$ and $5 - 2 = 3$. The common point is $(2, -1, 3)$. Since $\\vec{b}_1 \\cdot \\vec{b}_2 = 3 - 2 - 1 = 0$, the lines are perpendicular, i.e. the angle is $\\frac{\\pi}{2}$.',
    steps: [
      { step: 'Separates each line into $\\vec{a} + t\\vec{b}$ form', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = \\hat{i} + 4\\hat{j} + 7\\hat{k}$ and the dot product $0$, so the distance is $0$', marks: 1 },
      { step: 'Concludes the (non-parallel) lines intersect', marks: 1 },
      { step: 'Solves to get $\\lambda = 1$, $\\mu = 2$ and the point $(2, -1, 3)$ with check', marks: 1 },
      { step: 'Shows $\\vec{b}_1 \\cdot \\vec{b}_2 = 0$, so the angle is $\\frac{\\pi}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d11', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the vector equations of the line through $A(-2, 0, 3)$ and $B(0, -2, 0)$ and the line through $C(-2, 0, -3)$ and $D(-4, -2, -2)$. Hence find the shortest distance between these two lines.',
    answer: 'Line $AB$: $\\vec{AB} = 2\\hat{i} - 2\\hat{j} - 3\\hat{k}$, so $\\vec{r} = (-2\\hat{i} + 3\\hat{k}) + \\lambda(2\\hat{i} - 2\\hat{j} - 3\\hat{k})$. Line $CD$: $\\vec{CD} = -2\\hat{i} - 2\\hat{j} + \\hat{k}$, so $\\vec{r} = (-2\\hat{i} - 3\\hat{k}) + \\mu(-2\\hat{i} - 2\\hat{j} + \\hat{k})$. $\\vec{b}_1 \\times \\vec{b}_2 = ((-2)(1) - (-3)(-2))\\hat{i} - ((2)(1) - (-3)(-2))\\hat{j} + ((2)(-2) - (-2)(-2))\\hat{k} = -8\\hat{i} + 4\\hat{j} - 8\\hat{k}$, with magnitude $\\sqrt{64 + 16 + 64} = 12$. $\\vec{a}_2 - \\vec{a}_1 = \\vec{C} - \\vec{A} = -6\\hat{k}$, and $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 48$. Shortest distance $= \\frac{48}{12} = 4$ units.',
    steps: [
      { step: 'Writes the vector equation of $AB$', marks: 1 },
      { step: 'Writes the vector equation of $CD$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = -8\\hat{i} + 4\\hat{j} - 8\\hat{k}$ with magnitude $12$', marks: 1 },
      { step: 'Computes $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 48$', marks: 1 },
      { step: 'Gets the shortest distance $4$ units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d12', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: '$ABCD$ is a square. The vertex $A$ is $(3, 3, 0)$ and the diagonal $BD$ lies along the line $\\frac{x-3}{2} = \\frac{y}{-1} = \\frac{z-3}{2}$. Find the centre of the square, the vertex $C$, the vertices $B$ and $D$, and the area of the square.',
    answer: 'The diagonals of a square bisect each other at right angles, so the centre $O$ is the foot of the perpendicular from $A$ to $BD$, and $C$ is the image of $A$ in $BD$. A general point on $BD$ is $F(3 + 2t, -t, 3 + 2t)$, so $\\vec{AF} = 2t\\hat{i} + (-t - 3)\\hat{j} + (3 + 2t)\\hat{k}$. $\\vec{AF} \\cdot (2\\hat{i} - \\hat{j} + 2\\hat{k}) = 4t + t + 3 + 6 + 4t = 9t + 9 = 0$, so $t = -1$ and the centre is $O(1, 1, 1)$. Then $C = 2O - A = (-1, -1, 2)$. Half-diagonal $OA = |2\\hat{i} + 2\\hat{j} - \\hat{k}| = 3$. $B$ and $D$ lie on the line at distance $3$ from $O$; a unit vector along the line is $\\frac{1}{3}(2\\hat{i} - \\hat{j} + 2\\hat{k})$, so $B, D = (1, 1, 1) \\pm (2, -1, 2)$, i.e. $(3, 0, 3)$ and $(-1, 2, -1)$. Each diagonal is $6$, so the area is $\\frac{1}{2} \\times 6 \\times 6 = 18$ square units (equivalently, side $AB = |(0, -3, 3)| = 3\\sqrt{2}$ and $(3\\sqrt{2})^2 = 18$).',
    steps: [
      { step: 'Recognises that the centre is the foot of the perpendicular from $A$ to $BD$ and sets up $\\vec{AF} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Gets $t = -1$ and the centre $(1, 1, 1)$', marks: 1 },
      { step: 'Finds $C(-1, -1, 2)$ as the image of $A$', marks: 1 },
      { step: 'Finds $B$ and $D$ as $(3, 0, 3)$ and $(-1, 2, -1)$', marks: 1 },
      { step: 'Finds the area $18$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d13', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the foot of the perpendicular from $P(3, 4, -1)$ to the line through $A(0, 1, -1)$ and $B(3, 7, 5)$. Find the length of this perpendicular and the area of triangle $PAB$.',
    answer: '$\\vec{AB} = 3\\hat{i} + 6\\hat{j} + 6\\hat{k}$, parallel to $\\hat{i} + 2\\hat{j} + 2\\hat{k}$, so line $AB$ is $\\vec{r} = (\\hat{j} - \\hat{k}) + t(\\hat{i} + 2\\hat{j} + 2\\hat{k})$. A general point is $F(t, 1 + 2t, -1 + 2t)$, and $\\vec{PF} = (t - 3)\\hat{i} + (2t - 3)\\hat{j} + 2t\\hat{k}$. $\\vec{PF} \\cdot (\\hat{i} + 2\\hat{j} + 2\\hat{k}) = t - 3 + 4t - 6 + 4t = 9t - 9 = 0$, so $t = 1$ and the foot is $F(1, 3, 1)$. $\\vec{PF} = -2\\hat{i} - \\hat{j} + 2\\hat{k}$, so the perpendicular has length $3$ units. $AB = \\sqrt{9 + 36 + 36} = 9$, so the area of triangle $PAB$ is $\\frac{1}{2} \\times 9 \\times 3 = \\frac{27}{2}$ square units.',
    steps: [
      { step: 'Writes the equation of line $AB$', marks: 1 },
      { step: 'Sets up $\\vec{PF} \\cdot \\vec{b} = 0$ and gets $t = 1$', marks: 1 },
      { step: 'States the foot $(1, 3, 1)$', marks: 1 },
      { step: 'Finds the length $3$ units', marks: 1 },
      { step: 'Finds $AB = 9$ and the area $\\frac{27}{2}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d14', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'The foot of the perpendicular from the point $P(k, -1, 1)$ to the line $\\frac{x-5}{2} = \\frac{y+1}{-1} = \\frac{z-4}{2}$ lies in the $xy$-plane. Find $k$, the foot of the perpendicular, the perpendicular distance of $P$ from the line, and the image of $P$ in the line.',
    answer: 'A general point on the line is $F(5 + 2t, -1 - t, 4 + 2t)$. The foot lies in the $xy$-plane, so $4 + 2t = 0$, i.e. $t = -2$, and the foot is $F(1, 1, 0)$. Then $\\vec{PF} = (1 - k)\\hat{i} + 2\\hat{j} - \\hat{k}$ must be perpendicular to $2\\hat{i} - \\hat{j} + 2\\hat{k}$: $2(1 - k) - 2 - 2 = 0$, so $k = -1$. Now $P = (-1, -1, 1)$ and $\\vec{PF} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$, so the perpendicular distance is $\\sqrt{4 + 4 + 1} = 3$ units. The image is $2F - P = (2 + 1, 2 + 1, 0 - 1) = (3, 3, -1)$.',
    steps: [
      { step: 'Uses $z = 0$ on the line to get the foot $F(1, 1, 0)$', marks: 1 },
      { step: 'Sets $\\vec{PF} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Solves to get $k = -1$', marks: 1 },
      { step: 'Finds the distance $3$ units', marks: 1 },
      { step: 'Finds the image $(3, 3, -1)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d15', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the image of the point $P(7, 3, -3)$ in the line $\\vec{r} = (-2\\hat{i} + 2\\hat{j} - 7\\hat{k}) + \\lambda(3\\hat{i} - 2\\hat{j} + 6\\hat{k})$, and the distance between $P$ and its image.\nOR\nFind the coordinates of the foot of the perpendicular and the length of the perpendicular from the point $Q(9, -1, 11)$ to the line $\\vec{r} = (-2\\hat{i} + 2\\hat{j} - 7\\hat{k}) + \\lambda(3\\hat{i} - 2\\hat{j} + 6\\hat{k})$.',
    answer: 'Main question: A general point on the line is $F(-2 + 3\\lambda, 2 - 2\\lambda, -7 + 6\\lambda)$, so $\\vec{PF} = (3\\lambda - 9)\\hat{i} + (-1 - 2\\lambda)\\hat{j} + (6\\lambda - 4)\\hat{k}$. $\\vec{PF} \\cdot (3\\hat{i} - 2\\hat{j} + 6\\hat{k}) = 9\\lambda - 27 + 2 + 4\\lambda + 36\\lambda - 24 = 49\\lambda - 49 = 0$, so $\\lambda = 1$ and the foot is $F(1, 0, -1)$. The image is $P_1 = 2F - P = (2 - 7, 0 - 3, -2 + 3) = (-5, -3, 1)$. Distance $PP_1 = 2|\\vec{PF}| = 2\\sqrt{36 + 9 + 4} = 14$ units.\nOR: With the same general point, $\\vec{QF} = (3\\lambda - 11)\\hat{i} + (3 - 2\\lambda)\\hat{j} + (6\\lambda - 18)\\hat{k}$. $\\vec{QF} \\cdot (3\\hat{i} - 2\\hat{j} + 6\\hat{k}) = 9\\lambda - 33 - 6 + 4\\lambda + 36\\lambda - 108 = 49\\lambda - 147 = 0$, so $\\lambda = 3$ and the foot is $(7, -4, 11)$. Then $\\vec{QF} = -2\\hat{i} - 3\\hat{j} + 0\\hat{k}$, so the length of the perpendicular is $\\sqrt{4 + 9} = \\sqrt{13}$ units.',
    steps: [
      { step: 'Writes the general point and $\\vec{PF}$ (OR: $\\vec{QF}$)', marks: 1 },
      { step: 'Sets the dot product with $3\\hat{i} - 2\\hat{j} + 6\\hat{k}$ to zero: $49\\lambda - 49 = 0$ (OR: $49\\lambda - 147 = 0$)', marks: 1 },
      { step: 'Gets the foot $(1, 0, -1)$ (OR: $\\lambda = 3$)', marks: 1 },
      { step: 'Finds the image $(-5, -3, 1)$ (OR: the foot $(7, -4, 11)$)', marks: 1 },
      { step: 'Finds the distance $14$ units (OR: the length $\\sqrt{13}$ units)', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r2-d16', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'The vertices of triangle $ABC$ are $A(5, 4, 8)$, $B(1, 2, 3)$ and $C(7, -4, 6)$. Find the foot $D$ of the altitude from $A$ to $BC$ and the length of $AD$. Hence find the area of the triangle and the length of the altitude from $B$ to $CA$.',
    answer: '$\\vec{BC} = 6\\hat{i} - 6\\hat{j} + 3\\hat{k}$, parallel to $2\\hat{i} - 2\\hat{j} + \\hat{k}$, so line $BC$ is $\\vec{r} = (\\hat{i} + 2\\hat{j} + 3\\hat{k}) + t(2\\hat{i} - 2\\hat{j} + \\hat{k})$. A general point is $D(1 + 2t, 2 - 2t, 3 + t)$, and $\\vec{AD} = (2t - 4)\\hat{i} + (-2 - 2t)\\hat{j} + (t - 5)\\hat{k}$. $\\vec{AD} \\cdot (2\\hat{i} - 2\\hat{j} + \\hat{k}) = 4t - 8 + 4 + 4t + t - 5 = 9t - 9 = 0$, so $t = 1$ and $D = (3, 0, 4)$. $\\vec{AD} = -2\\hat{i} - 4\\hat{j} - 4\\hat{k}$, so $AD = 6$ units. $BC = \\sqrt{36 + 36 + 9} = 9$, so the area is $\\frac{1}{2} \\times 9 \\times 6 = 27$ square units. $CA = |\\vec{A} - \\vec{C}| = |-2\\hat{i} + 8\\hat{j} + 2\\hat{k}| = \\sqrt{72} = 6\\sqrt{2}$. The altitude from $B$ is $\\frac{2 \\times 27}{6\\sqrt{2}} = \\frac{9}{\\sqrt{2}} = \\frac{9\\sqrt{2}}{2}$ units.',
    steps: [
      { step: 'Writes line $BC$ and sets up $\\vec{AD} \\cdot \\vec{b} = 0$', marks: 1 },
      { step: 'Gets $t = 1$ and $D(3, 0, 4)$', marks: 1 },
      { step: 'Finds $AD = 6$ units', marks: 1 },
      { step: 'Finds $BC = 9$ and the area $27$ square units', marks: 1 },
      { step: 'Finds $CA = 6\\sqrt{2}$ and the altitude from $B$, $\\frac{9\\sqrt{2}}{2}$ units', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-3d-r2-e01', chapter: C, topic: ANG, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An air traffic controller tracks two small aircraft climbing in straight lines. Taking the control tower as the origin, the $z$-axis vertical and distances in km, aircraft 1 flies along $\\vec{r} = \\lambda(2\\hat{i} + 2\\hat{j} + \\hat{k})$ from the tower, and aircraft 2 flies along $\\vec{r} = (5\\hat{i} + 4\\hat{j} + \\hat{k}) + \\mu(\\hat{i} + 2\\hat{j} + 2\\hat{k})$.',
    answer: '(i) $\\frac{2}{3}, \\frac{2}{3}, \\frac{1}{3}$. (ii) $\\cos^{-1}\\left(\\frac{8}{9}\\right)$. (iii) Yes, at $(6, 6, 3)$; OR the point $(4, 4, 2)$, $6$ km from the tower.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the direction cosines of the path of aircraft 1.',
        answer: 'Direction ratios are $2, 2, 1$ with magnitude $3$, so the direction cosines are $\\frac{2}{3}, \\frac{2}{3}, \\frac{1}{3}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the acute angle between the two flight paths.',
        answer: '$(2\\hat{i} + 2\\hat{j} + \\hat{k}) \\cdot (\\hat{i} + 2\\hat{j} + 2\\hat{k}) = 2 + 4 + 2 = 8$ and both magnitudes are $3$, so $\\cos\\theta = \\frac{8}{9}$ and the angle is $\\cos^{-1}\\left(\\frac{8}{9}\\right)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Do the two flight paths cross? If they do, find the point where they cross.\nOR\nFind the point on the path of aircraft 1 at a height of $2$ km, and its distance from the tower.',
        answer: 'Equating $(2\\lambda, 2\\lambda, \\lambda)$ and $(5 + \\mu, 4 + 2\\mu, 1 + 2\\mu)$: from $x$ and $y$, $5 + \\mu = 4 + 2\\mu$, so $\\mu = 1$ and $\\lambda = 3$ (1 mark). Check $z$: $\\lambda = 3$ and $1 + 2\\mu = 3$, which agree, so the paths cross at $(6, 6, 3)$ (1 mark).\nOR: Height $z = \\lambda = 2$, so the point is $(4, 4, 2)$ (1 mark). Its distance from the tower is $\\sqrt{16 + 16 + 4} = 6$ km (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-r2-e02', chapter: C, topic: FT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A straight mountain road runs up a hillside. Taking a survey marker as the origin and distances in units of $100$ m, the road follows the line $\\frac{x-2}{2} = \\frac{y-2}{3} = \\frac{z-2}{6}$. A health centre stands at $H(-2, 3, 11)$, and the district wants to build the shortest possible straight access path from the road to the health centre.',
    answer: '(i) $\\frac{2}{7}, \\frac{3}{7}, \\frac{6}{7}$. (ii) Yes, with $t = 3$. (iii) Junction $(4, 5, 8)$, path length $7$ units ($700$ m); OR $(10, 7, 5)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the direction cosines of the road.',
        answer: 'Direction ratios are $2, 3, 6$ with magnitude $\\sqrt{4 + 9 + 36} = 7$, so the direction cosines are $\\frac{2}{7}, \\frac{3}{7}, \\frac{6}{7}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Check whether a viewpoint at $S(8, 11, 20)$ lies on the road.',
        answer: '$\\frac{8-2}{2} = 3$, $\\frac{11-2}{3} = 3$ and $\\frac{20-2}{6} = 3$; all three ratios are equal, so $S$ lies on the road.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the point on the road where the access path should start, and the length of the access path.\nOR\nA mirror-image site of the health centre on the other side of the road is planned, so that the road is the perpendicular bisector of the segment joining them. Find its coordinates.',
        answer: 'A general point on the road is $F(2 + 2t, 2 + 3t, 2 + 6t)$, and $\\vec{HF} = (4 + 2t)\\hat{i} + (3t - 1)\\hat{j} + (6t - 9)\\hat{k}$. $\\vec{HF} \\cdot (2\\hat{i} + 3\\hat{j} + 6\\hat{k}) = 8 + 4t + 9t - 3 + 36t - 54 = 49t - 49 = 0$, so $t = 1$ and the path starts at $F(4, 5, 8)$ (1 mark). $\\vec{HF} = 6\\hat{i} + 2\\hat{j} - 3\\hat{k}$, so the length is $\\sqrt{36 + 4 + 9} = 7$ units, i.e. $700$ m (1 mark).\nOR: The foot of the perpendicular from $H$ to the road is $F(4, 5, 8)$, found as above (1 mark). The mirror-image site is $2F - H = (8 + 2, 10 - 3, 16 - 11) = (10, 7, 5)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-r2-e03', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A camping tent is shaped like a pyramid on a square base. Taking one corner of the base as the origin $O$, the $z$-axis vertical and distances in feet, the base corners are $O(0, 0, 0)$, $A(4, 0, 0)$, $B(4, 4, 0)$ and $C(0, 4, 0)$, and the top of the tent is at $P(2, 2, 6)$. The edges $OP$, $AP$, $BP$ and $CP$ are straight poles.',
    answer: '(i) $\\frac{x-4}{-1} = \\frac{y}{1} = \\frac{z}{3}$. (ii) $(3, 1, 3)$. (iii) $\\cos^{-1}\\left(\\frac{9}{11}\\right)$; OR $\\cos^{-1}\\left(\\frac{3}{\\sqrt{11}}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the Cartesian equation of the pole $AP$.',
        answer: '$\\vec{AP} = -2\\hat{i} + 2\\hat{j} + 6\\hat{k}$, with direction ratios proportional to $-1, 1, 3$. Through $A(4, 0, 0)$: $\\frac{x-4}{-1} = \\frac{y}{1} = \\frac{z}{3}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'A lamp hook is fixed on pole $AP$ at a height of $3$ feet. Find its coordinates.',
        answer: 'Points on $AP$ are $(4 - t, t, 3t)$. Height $3t = 3$ gives $t = 1$, so the hook is at $(3, 1, 3)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the angle between the poles $OP$ and $AP$.\nOR\nA vertical support rod joins the centre of the base, $(2, 2, 0)$, to the top $P$. Find the angle between the pole $OP$ and this rod.',
        answer: '$OP$ has direction ratios $2, 2, 6$, i.e. $1, 1, 3$, and $AP$ has $-1, 1, 3$; each has magnitude $\\sqrt{11}$ (1 mark). $\\cos\\theta = \\frac{-1 + 1 + 9}{11} = \\frac{9}{11}$, so $\\theta = \\cos^{-1}\\left(\\frac{9}{11}\\right)$ (1 mark).\nOR: The rod is vertical, along $\\hat{k}$, and $OP$ has direction ratios $1, 1, 3$ with magnitude $\\sqrt{11}$ (1 mark). $\\cos\\phi = \\frac{3}{\\sqrt{11}}$, so the angle is $\\cos^{-1}\\left(\\frac{3}{\\sqrt{11}}\\right)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-r2-e04', chapter: C, topic: SD, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Engineers are planning two straight underground tunnels, one for a metro line and one for a water main. Taking a survey point as the origin and distances in units of $10$ m, the metro tunnel passes through $A(0, -2, -3)$ and $B(-6, 2, 1)$, and the water main runs along $\\vec{r} = (-2\\hat{i} + 2\\hat{j} + 2\\hat{k}) + \\mu(2\\hat{i} - 3\\hat{j} + 2\\hat{k})$. Safety rules require at least $20$ m of clearance between the tunnels.',
    answer: '(i) Not parallel: $-3, 2, 2$ and $2, -3, 2$ are not proportional. (ii) $\\vec{r} = (-2\\hat{j} - 3\\hat{k}) + \\lambda(-3\\hat{i} + 2\\hat{j} + 2\\hat{k})$. (iii) $3$ units $= 30$ m, so the rule is met; OR $\\cos^{-1}\\left(\\frac{8}{17}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that the two tunnels are not parallel.',
        answer: '$\\vec{AB} = -6\\hat{i} + 4\\hat{j} + 4\\hat{k}$, with direction ratios proportional to $-3, 2, 2$. The water main has direction ratios $2, -3, 2$. Since $\\frac{-3}{2} \\ne \\frac{2}{-3}$, these are not proportional, so the tunnels are not parallel.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the vector equation of the metro tunnel.',
        answer: 'Through $A(0, -2, -3)$ along $-3\\hat{i} + 2\\hat{j} + 2\\hat{k}$: $\\vec{r} = (-2\\hat{j} - 3\\hat{k}) + \\lambda(-3\\hat{i} + 2\\hat{j} + 2\\hat{k})$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the shortest distance between the two tunnels and say whether the safety rule is met.\nOR\nFind the acute angle between the two tunnels.',
        answer: '$\\vec{b}_1 \\times \\vec{b}_2 = (-3\\hat{i} + 2\\hat{j} + 2\\hat{k}) \\times (2\\hat{i} - 3\\hat{j} + 2\\hat{k}) = ((2)(2) - (2)(-3))\\hat{i} - ((-3)(2) - (2)(2))\\hat{j} + ((-3)(-3) - (2)(2))\\hat{k} = 10\\hat{i} + 10\\hat{j} + 5\\hat{k}$, with magnitude $15$ (1 mark). $\\vec{a}_2 - \\vec{a}_1 = -2\\hat{i} + 4\\hat{j} + 5\\hat{k}$ and the dot product is $-20 + 40 + 25 = 45$, so the shortest distance is $\\frac{45}{15} = 3$ units, i.e. $30$ m, which is more than $20$ m, so the rule is met (1 mark).\nOR: $(-3\\hat{i} + 2\\hat{j} + 2\\hat{k}) \\cdot (2\\hat{i} - 3\\hat{j} + 2\\hat{k}) = -6 - 6 + 4 = -8$ and both magnitudes are $\\sqrt{17}$ (1 mark). So $\\cos\\theta = \\frac{|-8|}{17} = \\frac{8}{17}$ and the acute angle is $\\cos^{-1}\\left(\\frac{8}{17}\\right)$ (1 mark).',
      },
    ],
  },
];
