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

export const CH11_3D_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-3d-r3-a01', chapter: C, topic: DC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A line makes an angle of $60^\\circ$ with the positive $x$-axis and equal acute angles with the positive $y$- and $z$-axes. The cosine of that equal angle is',
    options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{4}$', '$\\frac{\\sqrt{6}}{4}$', '$\\frac{3}{8}$'],
    answer: 'Correct option: C) $\\frac{\\sqrt{6}}{4}$. With $l = \\frac{1}{2}$ and $m = n$, $l^2 + m^2 + n^2 = 1$ gives $2m^2 = \\frac{3}{4}$, so $m^2 = \\frac{3}{8}$ and the cosine is $\\sqrt{\\frac{3}{8}} = \\frac{\\sqrt{6}}{4}$ (option D forgets the square root).',
  },
  {
    id: 'c12-3d-r3-a02', chapter: C, topic: DC, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): A line through the origin with direction ratios $3, 4, 12$ has direction cosines $\\frac{3}{13}, \\frac{4}{13}, \\frac{12}{13}$ and also $-\\frac{3}{13}, -\\frac{4}{13}, -\\frac{12}{13}$.\nReason (R): The direction cosines of a line are unique.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) (A) is true but (R) is false. Since $\\sqrt{9 + 16 + 144} = 13$, both sets are valid direction cosines of the same line, one for each sense of travel. So the direction cosines of a line are not unique and (R) is false.',
  },
  {
    id: 'c12-3d-r3-a03', chapter: C, topic: DC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The direction cosines of the ray drawn from the point $P(-6, 3, -2)$ towards the origin are',
    options: [
      '$\\frac{6}{7}, -\\frac{3}{7}, \\frac{2}{7}$',
      '$-\\frac{6}{7}, \\frac{3}{7}, -\\frac{2}{7}$',
      '$\\frac{6}{11}, -\\frac{3}{11}, \\frac{2}{11}$',
      '$\\frac{6}{7}, \\frac{3}{7}, \\frac{2}{7}$',
    ],
    answer: 'Correct option: A) $\\frac{6}{7}, -\\frac{3}{7}, \\frac{2}{7}$. The ray goes from $P$ to $O$, so its direction ratios are $0 - (-6), 0 - 3, 0 - (-2) = 6, -3, 2$, and $\\sqrt{36 + 9 + 4} = 7$. Option B is the opposite sense (from the origin towards $P$).',
  },
  {
    id: 'c12-3d-r3-a04', chapter: C, topic: DC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A line lies in the $xy$-plane and makes an angle of $30^\\circ$ with the positive $x$-axis and an acute angle with the positive $y$-axis. Its direction cosines are',
    options: [
      '$\\frac{\\sqrt{3}}{2}, \\frac{1}{2}, 0$',
      '$\\frac{1}{2}, \\frac{\\sqrt{3}}{2}, 0$',
      '$\\frac{\\sqrt{3}}{2}, \\frac{1}{2}, 1$',
      '$\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}, 0$',
    ],
    answer: 'Correct option: A) $\\frac{\\sqrt{3}}{2}, \\frac{1}{2}, 0$. A line in the $xy$-plane makes $90^\\circ$ with the $z$-axis, so $n = 0$. Its angle with the $y$-axis is $90^\\circ - 30^\\circ = 60^\\circ$, so $m = \\cos 60^\\circ = \\frac{1}{2}$ and $l = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.',
  },
  {
    id: 'c12-3d-r3-a05', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The Cartesian equation of the line through the point $(2, -3, 5)$ and parallel to the $y$-axis is',
    options: [
      '$\\frac{x-2}{0} = \\frac{y+3}{1} = \\frac{z-5}{0}$',
      '$\\frac{x-2}{1} = \\frac{y+3}{0} = \\frac{z-5}{1}$',
      '$\\frac{x}{0} = \\frac{y}{1} = \\frac{z}{0}$',
      '$\\frac{x-2}{0} = \\frac{y-3}{1} = \\frac{z+5}{0}$',
    ],
    answer: 'Correct option: A) $\\frac{x-2}{0} = \\frac{y+3}{1} = \\frac{z-5}{0}$. A line parallel to the $y$-axis has direction ratios $0, 1, 0$ and here passes through $(2, -3, 5)$. Option C is the $y$-axis itself, and option D has the signs of the point wrong.',
  },
  {
    id: 'c12-3d-r3-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The line $\\frac{x-1}{2} = \\frac{y+2}{3} = \\frac{z-5}{-1}$ meets the $xz$-plane at the point',
    options: [
      '$\\left(\\frac{7}{3}, 0, \\frac{13}{3}\\right)$',
      '$\\left(-\\frac{1}{3}, 0, \\frac{17}{3}\\right)$',
      '$(5, 0, 3)$',
      '$\\left(\\frac{7}{3}, 0, \\frac{17}{3}\\right)$',
    ],
    answer: 'Correct option: A) $\\left(\\frac{7}{3}, 0, \\frac{13}{3}\\right)$. A general point is $(1 + 2\\lambda, -2 + 3\\lambda, 5 - \\lambda)$. On the $xz$-plane $y = 0$, so $\\lambda = \\frac{2}{3}$, giving $x = \\frac{7}{3}$ and $z = \\frac{13}{3}$.',
  },
  {
    id: 'c12-3d-r3-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following points lies on the line $\\vec{r} = (2\\hat{i} - \\hat{j} + 3\\hat{k}) + \\lambda(\\hat{i} + 3\\hat{j} - 2\\hat{k})$?',
    options: ['$(4, 5, 1)$', '$(3, 2, -1)$', '$(4, 5, -1)$', '$(5, 8, -1)$'],
    answer: 'Correct option: C) $(4, 5, -1)$. Taking $\\lambda = 2$ gives $(2 + 2, -1 + 6, 3 - 4) = (4, 5, -1)$. For the other points the three coordinates do not give one common value of $\\lambda$.',
  },
  {
    id: 'c12-3d-r3-a08', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The Cartesian equation of the line through $A(-1, 3, 2)$ and the midpoint of the segment joining $B(3, 1, -4)$ and $C(5, -3, 2)$ is',
    options: [
      '$\\frac{x+1}{5} = \\frac{y-3}{-4} = \\frac{z-2}{-3}$',
      '$\\frac{x+1}{9} = \\frac{y-3}{-5} = \\frac{z-2}{-4}$',
      '$\\frac{x+1}{2} = \\frac{y-3}{-1} = \\frac{z-2}{-3}$',
      '$\\frac{x+1}{5} = \\frac{y-3}{4} = \\frac{z-2}{3}$',
    ],
    answer: 'Correct option: A) $\\frac{x+1}{5} = \\frac{y-3}{-4} = \\frac{z-2}{-3}$. The midpoint is $(4, -1, -1)$, so the direction ratios are $4 + 1, -1 - 3, -1 - 2 = 5, -4, -3$. Option B uses $B + C$ instead of the midpoint, and option C uses $B$ instead of the midpoint.',
  },
  {
    id: 'c12-3d-r3-a09', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the $x$-axis and the line $\\frac{x}{1} = \\frac{y}{1} = \\frac{z}{\\sqrt{2}}$ is',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
    answer: 'Correct option: C) $\\frac{\\pi}{3}$. The line has direction ratios $1, 1, \\sqrt{2}$ with magnitude $\\sqrt{1 + 1 + 2} = 2$, so its direction cosine with the $x$-axis is $\\frac{1}{2}$ and the angle is $\\frac{\\pi}{3}$.',
  },
  {
    id: 'c12-3d-r3-a10', chapter: C, topic: ANG, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The lines $\\frac{x-1}{k} = \\frac{y+2}{1} = \\frac{z}{3}$ and $\\frac{x+2}{k-5} = \\frac{y-4}{3} = \\frac{z-1}{1}$ are perpendicular. The values of $k$ are',
    options: ['$2$ and $3$', '$-2$ and $-3$', '$1$ and $6$', '$-1$ and $-6$'],
    answer: 'Correct option: A) $2$ and $3$. Perpendicularity gives $k(k - 5) + 1 \\cdot 3 + 3 \\cdot 1 = 0$, i.e. $k^2 - 5k + 6 = 0$, so $k = 2$ or $k = 3$.',
  },
  {
    id: 'c12-3d-r3-a11', chapter: C, topic: ANG, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The acute angle between the lines with direction ratios $2, -1, 2$ and $1, 2, -2$ is $\\cos^{-1}\\left(-\\frac{4}{9}\\right)$.\nReason (R): The acute angle $\\theta$ between lines with direction ratios $a_1, b_1, c_1$ and $a_2, b_2, c_2$ satisfies $\\cos\\theta = \\frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\sqrt{a_2^2 + b_2^2 + c_2^2}}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false but (R) is true. The dot product is $2 - 2 - 4 = -4$ and both magnitudes are $3$, so by (R) the acute angle has $\\cos\\theta = \\frac{4}{9}$, which is positive. An acute angle cannot have a negative cosine, so (A) is false, while (R) is the correct formula.',
  },
  {
    id: 'c12-3d-r3-a12', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle between the line segments joining the origin to $P(1, 1, 1)$ and to $Q(1, 1, -1)$ is',
    options: ['$\\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$', '$\\cos^{-1}\\left(\\frac{1}{3}\\right)$', '$\\cos^{-1}\\left(\\frac{2}{3}\\right)$', '$\\frac{\\pi}{3}$'],
    answer: 'Correct option: B) $\\cos^{-1}\\left(\\frac{1}{3}\\right)$. The dot product of $(1, 1, 1)$ and $(1, 1, -1)$ is $1 + 1 - 1 = 1$ and each magnitude is $\\sqrt{3}$, so $\\cos\\theta = \\frac{1}{3}$.',
  },
  {
    id: 'c12-3d-r3-a13', chapter: C, topic: SD, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The shortest distance between the lines $\\vec{r} = \\lambda(\\hat{i} + \\hat{j})$ and $\\vec{r} = \\hat{k} + \\mu(\\hat{i} - \\hat{j})$ is',
    options: ['$\\frac{1}{2}$', '$1$', '$\\sqrt{2}$', '$2$'],
    answer: 'Correct option: B) $1$. Here $\\vec{b}_1 \\times \\vec{b}_2 = (\\hat{i} + \\hat{j}) \\times (\\hat{i} - \\hat{j}) = -2\\hat{k}$ with magnitude $2$, and $\\vec{a}_2 - \\vec{a}_1 = \\hat{k}$. The distance is $\\frac{|\\hat{k} \\cdot (-2\\hat{k})|}{2} = 1$.',
  },
  {
    id: 'c12-3d-r3-a14', chapter: C, topic: SD, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The distance between the parallel lines $\\vec{r} = (\\hat{i} + 2\\hat{j}) + \\lambda\\hat{k}$ and $\\vec{r} = (4\\hat{i} + 6\\hat{j} + 3\\hat{k}) + \\mu(2\\hat{k})$ is',
    options: ['$3$', '$5$', '$7$', '$\\sqrt{34}$'],
    answer: 'Correct option: B) $5$. Both lines are parallel to the $z$-axis, so their distance is the distance between their points in the $xy$-plane, $(1, 2)$ and $(4, 6)$, which is $\\sqrt{9 + 16} = 5$. Option D wrongly includes the $z$-difference.',
  },
  {
    id: 'c12-3d-r3-a15', chapter: C, topic: SD, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The lines $\\frac{x-1}{2} = \\frac{y-2}{3} = \\frac{z-3}{4}$ and $\\frac{x-2}{1} = \\frac{y-4}{2} = \\frac{z-k}{3}$ intersect. The value of $k$ is',
    options: ['$4$', '$5$', '$6$', '$7$'],
    answer: 'Correct option: C) $6$. For lines that intersect, $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$. Here $\\vec{b}_1 \\times \\vec{b}_2 = \\hat{i} - 2\\hat{j} + \\hat{k}$ and $\\vec{a}_2 - \\vec{a}_1 = \\hat{i} + 2\\hat{j} + (k - 3)\\hat{k}$, so $1 - 4 + (k - 3) = 0$ and $k = 6$.',
  },
  {
    id: 'c12-3d-r3-a16', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The length of the perpendicular drawn from the point $P(5, -4, 2)$ to the line $\\frac{x}{2} = \\frac{y}{-1} = \\frac{z}{2}$ is',
    options: ['$3$', '$6$', '$3\\sqrt{5}$', '$9$'],
    answer: 'Correct option: A) $3$. The line passes through the origin, so $OP^2 = 45$. The projection of $OP$ on the line is $\\frac{10 + 4 + 4}{3} = 6$, so the perpendicular length is $\\sqrt{45 - 36} = 3$. Option B is only the projection and option C is $OP$.',
  },
  {
    id: 'c12-3d-r3-a17', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The foot of the perpendicular from $P(6, -1, 3)$ to the line $\\vec{r} = (\\hat{i} + \\hat{j}) + \\lambda(2\\hat{i} - \\hat{j} + 2\\hat{k})$ is',
    options: ['$(3, 0, 2)$', '$(5, -1, 4)$', '$(7, -2, 6)$', '$(5, -1, 5)$'],
    answer: 'Correct option: B) $(5, -1, 4)$. With $\\vec{b} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{a} = \\hat{i} + \\hat{j}$, $\\overrightarrow{AP} = (5, -2, 3)$ and $\\lambda = \\frac{\\overrightarrow{AP} \\cdot \\vec{b}}{|\\vec{b}|^2} = \\frac{18}{9} = 2$, so the foot is $(1 + 4, 1 - 2, 0 + 4) = (5, -1, 4)$.',
  },
  {
    id: 'c12-3d-r3-a18', chapter: C, topic: FT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The image of the point $P(3, 3, 0)$ in the line $\\frac{x}{1} = \\frac{y}{2} = \\frac{z}{2}$ is',
    options: ['$(1, 2, 2)$', '$(-1, 1, 4)$', '$(-3, -3, 0)$', '$(5, 7, 4)$'],
    answer: 'Correct option: B) $(-1, 1, 4)$. A point of the line is $(\\lambda, 2\\lambda, 2\\lambda)$, and $(\\lambda - 3, 2\\lambda - 3, 2\\lambda) \\cdot (1, 2, 2) = 9\\lambda - 9 = 0$ gives $\\lambda = 1$, so the foot is $(1, 2, 2)$. The image is $2(1, 2, 2) - (3, 3, 0) = (-1, 1, 4)$ (option A is only the foot).',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-3d-r3-b01', chapter: C, topic: DC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the direction cosines of a line that is perpendicular to both of the lines having direction ratios $2, -1, 3$ and $1, 2, -1$.',
    answer: 'A line perpendicular to both has direction ratios along the cross product $(2, -1, 3) \\times (1, 2, -1) = ((-1)(-1) - (3)(2))\\hat{i} - ((2)(-1) - (3)(1))\\hat{j} + ((2)(2) - (-1)(1))\\hat{k} = -5\\hat{i} + 5\\hat{j} + 5\\hat{k}$. So the direction ratios are proportional to $-1, 1, 1$, and dividing by $\\sqrt{3}$ the direction cosines are $-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}$ (or the negatives of these).',
    steps: [
      { step: 'Takes the cross product of the two direction vectors and gets $-5, 5, 5$ (proportional to $-1, 1, 1$)', marks: 1 },
      { step: 'Divides by the magnitude $\\sqrt{3}$ to state the direction cosines $-\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-b02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the vector and Cartesian equations of the line passing through the centroid of the triangle with vertices $A(1, 4, 2)$, $B(5, -2, 7)$ and $C(0, 1, 3)$ and through the point $H(-2, 3, -2)$.',
    answer: 'The centroid is $G\\left(\\frac{1 + 5 + 0}{3}, \\frac{4 - 2 + 1}{3}, \\frac{2 + 7 + 3}{3}\\right) = (2, 1, 4)$. The direction is $\\overrightarrow{GH} = (-4, 2, -6)$, which is proportional to $(2, -1, 3)$. Vector equation: $\\vec{r} = (2\\hat{i} + \\hat{j} + 4\\hat{k}) + \\lambda(2\\hat{i} - \\hat{j} + 3\\hat{k})$. Cartesian equation: $\\frac{x-2}{2} = \\frac{y-1}{-1} = \\frac{z-4}{3}$.',
    steps: [
      { step: 'Finds the centroid $G(2, 1, 4)$ and the direction $\\overrightarrow{GH} = (-4, 2, -6) \\propto (2, -1, 3)$', marks: 1 },
      { step: 'Writes the vector equation and the Cartesian equation of the line through $G$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-b03', chapter: C, topic: ANG, type: 'short', complexity: 'easy', marks: 2,
    text: 'Two lines have direction cosines $\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2}$ and $0, \\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}$ respectively. Find the acute angle between them.',
    answer: 'For direction cosines, $\\cos\\theta = |l_1l_2 + m_1m_2 + n_1n_2| = \\left|\\frac{1}{\\sqrt{2}} \\cdot 0 + \\frac{1}{2} \\cdot \\frac{1}{\\sqrt{2}} + \\frac{1}{2} \\cdot \\frac{1}{\\sqrt{2}}\\right| = \\frac{1}{\\sqrt{2}}$. Hence $\\theta = \\frac{\\pi}{4}$.',
    steps: [
      { step: 'Uses $\\cos\\theta = |l_1l_2 + m_1m_2 + n_1n_2|$ with the given direction cosines (no division needed)', marks: 1 },
      { step: 'Evaluates the sum as $\\frac{1}{\\sqrt{2}}$ and gets $\\theta = \\frac{\\pi}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-b04', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the shortest distance between the $y$-axis and the line $\\frac{x-4}{3} = \\frac{y-5}{1} = \\frac{z-3}{4}$.',
    answer: 'The $y$-axis passes through $O(0, 0, 0)$ with $\\vec{b}_1 = \\hat{j}$. The line passes through $(4, 5, 3)$ with $\\vec{b}_2 = 3\\hat{i} + \\hat{j} + 4\\hat{k}$. $\\vec{b}_1 \\times \\vec{b}_2 = 4\\hat{i} - 3\\hat{k}$ with magnitude $5$. Then $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = (4)(4) + (3)(-3) = 7$. The shortest distance is $\\frac{7}{5}$ units.',
    steps: [
      { step: 'Finds $\\vec{b}_1 \\times \\vec{b}_2 = 4\\hat{i} - 3\\hat{k}$ with magnitude $5$', marks: 1 },
      { step: 'Evaluates $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 7$ and gets the distance $\\frac{7}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-b05', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the foot of the perpendicular from the point $P(-1, 4, 2)$ to the line $\\vec{r} = (2\\hat{i} + \\hat{j} - \\hat{k}) + \\lambda(2\\hat{i} - 2\\hat{j} + \\hat{k})$, and the length of the perpendicular.',
    answer: 'A point $F$ of the line is $(2 + 2\\lambda, 1 - 2\\lambda, -1 + \\lambda)$. Then $\\overrightarrow{PF} = (3 + 2\\lambda, -3 - 2\\lambda, -3 + \\lambda)$. Perpendicularity gives $2(3 + 2\\lambda) - 2(-3 - 2\\lambda) + (-3 + \\lambda) = 9\\lambda + 9 = 0$, so $\\lambda = -1$ and the foot is $F(0, 3, -2)$. The length is $PF = \\sqrt{1 + 1 + 16} = 3\\sqrt{2}$ units.',
    steps: [
      { step: 'Writes $\\overrightarrow{PF}$ for a general point of the line and applies $\\overrightarrow{PF} \\cdot \\vec{b} = 0$ to get $\\lambda = -1$, foot $(0, 3, -2)$', marks: 1 },
      { step: 'Finds the length $PF = 3\\sqrt{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-b06', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the distance between the point $P(5, 1, 3)$ and its image in the line $\\frac{x-2}{1} = \\frac{y-1}{-2} = \\frac{z}{2}$.',
    answer: 'A point of the line is $F(2 + \\lambda, 1 - 2\\lambda, 2\\lambda)$ and $\\overrightarrow{PF} = (\\lambda - 3, -2\\lambda, 2\\lambda - 3)$. Perpendicularity to $(1, -2, 2)$ gives $(\\lambda - 3) + 4\\lambda + 4\\lambda - 6 = 9\\lambda - 9 = 0$, so $\\lambda = 1$ and the foot is $F(3, -1, 2)$. $PF = \\sqrt{4 + 4 + 1} = 3$. The foot is the midpoint of $P$ and its image $P\'$, so $PP\' = 2 \\times 3 = 6$ units (the image is $(1, -3, 1)$).',
    steps: [
      { step: 'Finds the foot $F(3, -1, 2)$ using the perpendicularity condition', marks: 1 },
      { step: 'Uses $F$ as the midpoint of $PP\'$: $PF = 3$, so the distance to the image is $6$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-3d-r3-c01', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the Cartesian equation of the line that passes through $P(1, 2, -1)$, meets the $z$-axis, and is perpendicular to the $z$-axis.',
    answer: 'Let the line meet the $z$-axis at $Q(0, 0, t)$. Then $\\overrightarrow{PQ} = (-1, -2, t + 1)$. Perpendicular to the $z$-axis (direction $(0, 0, 1)$) means $t + 1 = 0$, so $t = -1$ and $Q = (0, 0, -1)$. The direction ratios are $-1, -2, 0$, i.e. $1, 2, 0$. The line is $\\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z+1}{0}$.',
    steps: [
      { step: 'Takes the meeting point as $Q(0, 0, t)$ and writes $\\overrightarrow{PQ} = (-1, -2, t + 1)$', marks: 1 },
      { step: 'Applies perpendicularity to the $z$-axis to get $t = -1$', marks: 1 },
      { step: 'Writes the line $\\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z+1}{0}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    competency: true,
    text: 'Two drones take off together. With positions in metres and $t$ in seconds, drone A is at $\\vec{r}_A = (\\hat{i} + 2\\hat{k}) + t(2\\hat{i} + \\hat{j} - \\hat{k})$ and drone B is at $\\vec{r}_B = (11\\hat{i} - \\hat{j} - 3\\hat{k}) + t(-2\\hat{i} + \\hat{j} + \\hat{k})$. Show that their flight paths cross, find the crossing point, and decide whether the drones collide there. How far apart are they when drone A is at the crossing point?',
    answer: 'Equate points of the two paths: $1 + 2\\lambda = 11 - 2\\mu$, $\\lambda = -1 + \\mu$, $2 - \\lambda = -3 + \\mu$. The second gives $\\lambda = \\mu - 1$; the first then gives $4\\mu = 12$, so $\\mu = 3$, $\\lambda = 2$, and the third holds ($2 - 2 = 0 = -3 + 3$). So the paths cross at $(5, 2, 0)$. Drone A is there at $t = 2$ s but drone B only at $t = 3$ s, so there is no collision. At $t = 2$ drone B is at $(7, 1, -1)$, so the drones are $\\sqrt{4 + 1 + 1} = \\sqrt{6}$ m apart.',
    steps: [
      { step: 'Equates the position vectors and solves for $\\lambda = 2$, $\\mu = 3$, checking the third coordinate, so the paths cross at $(5, 2, 0)$', marks: 1 },
      { step: 'Notes the drones reach the point at different times ($t = 2$ and $t = 3$), so no collision', marks: 1 },
      { step: 'Finds drone B at $t = 2$ as $(7, 1, -1)$ and the separation $\\sqrt{6}$ m', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c03', chapter: C, topic: ANG, type: 'short', complexity: 'medium', marks: 3,
    text: 'The vertices of a triangle are $A(1, -1, 2)$, $B(3, 1, 3)$ and $C(4, 2, -1)$. Show that the triangle is right-angled at $B$ and find the angle at $A$.',
    answer: '$\\overrightarrow{BA} = (-2, -2, -1)$ and $\\overrightarrow{BC} = (1, 1, -4)$, so $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = -2 - 2 + 4 = 0$ and the angle at $B$ is $90^\\circ$. For the angle at $A$, $\\overrightarrow{AB} = (2, 2, 1)$ with $|\\overrightarrow{AB}| = 3$ and $\\overrightarrow{AC} = (3, 3, -3)$ with $|\\overrightarrow{AC}| = 3\\sqrt{3}$. The dot product is $6 + 6 - 3 = 9$, so $\\cos A = \\frac{9}{3 \\cdot 3\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$ and $\\angle A = \\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$.',
    steps: [
      { step: 'Finds $\\overrightarrow{BA}$ and $\\overrightarrow{BC}$ and shows their dot product is $0$, so the angle at $B$ is a right angle', marks: 1 },
      { step: 'Finds $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, their magnitudes $3$ and $3\\sqrt{3}$ and the dot product $9$', marks: 1 },
      { step: 'Gets $\\cos A = \\frac{1}{\\sqrt{3}}$, so $\\angle A = \\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c04', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 3,
    text: 'A tetrahedron has vertices $P(0, 0, 0)$, $Q(4, 0, 0)$, $R(1, 3, 0)$ and $S(2, 6, 4)$. Find the shortest distance between the opposite edges $PQ$ and $RS$.',
    answer: 'Edge $PQ$ lies along $\\vec{b}_1 = \\hat{i}$ (through $P$), and edge $RS$ has direction $\\overrightarrow{RS} = \\hat{i} + 3\\hat{j} + 4\\hat{k}$ (through $R$). $\\vec{b}_1 \\times \\vec{b}_2 = \\hat{i} \\times (\\hat{i} + 3\\hat{j} + 4\\hat{k}) = 3\\hat{k} - 4\\hat{j}$, with magnitude $5$. $\\overrightarrow{PR} = \\hat{i} + 3\\hat{j}$, and $\\overrightarrow{PR} \\cdot (-4\\hat{j} + 3\\hat{k}) = -12$. The shortest distance is $\\frac{|-12|}{5} = \\frac{12}{5}$ units.',
    steps: [
      { step: 'Identifies a point and direction for each edge: $P$, $\\hat{i}$ and $R$, $\\hat{i} + 3\\hat{j} + 4\\hat{k}$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = -4\\hat{j} + 3\\hat{k}$ with magnitude $5$', marks: 1 },
      { step: 'Evaluates $\\overrightarrow{PR} \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = -12$ and gets the distance $\\frac{12}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c05', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the shortest distance between the lines $\\frac{x+1}{2} = \\frac{y-1}{2} = \\frac{4-z}{3}$ and $\\frac{x+2}{2} = \\frac{y-1}{1} = \\frac{-z}{2}$.',
    answer: 'Rewrite as $\\frac{x+1}{2} = \\frac{y-1}{2} = \\frac{z-4}{-3}$ and $\\frac{x+2}{2} = \\frac{y-1}{1} = \\frac{z}{-2}$. So $\\vec{a}_1 = (-1, 1, 4)$, $\\vec{b}_1 = (2, 2, -3)$, $\\vec{a}_2 = (-2, 1, 0)$, $\\vec{b}_2 = (2, 1, -2)$. $\\vec{b}_1 \\times \\vec{b}_2 = (-4 + 3)\\hat{i} - (-4 + 6)\\hat{j} + (2 - 4)\\hat{k} = -\\hat{i} - 2\\hat{j} - 2\\hat{k}$, with magnitude $3$. $\\vec{a}_2 - \\vec{a}_1 = (-1, 0, -4)$, and the dot product is $1 + 0 + 8 = 9$. The shortest distance is $\\frac{9}{3} = 3$ units.',
    steps: [
      { step: 'Rewrites both lines in standard form to read off the direction ratios $2, 2, -3$ and $2, 1, -2$ and the points $(-1, 1, 4)$, $(-2, 1, 0)$', marks: 1 },
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = -\\hat{i} - 2\\hat{j} - 2\\hat{k}$ with magnitude $3$', marks: 1 },
      { step: 'Finds $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 9$ and the distance $3$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c06', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the point on the line $\\vec{r} = (-\\hat{i} + 2\\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 6\\hat{k})$ that is nearest to the point $P(4, -3, 10)$, and the least distance of $P$ from the line.',
    answer: 'The nearest point is the foot $F$ of the perpendicular from $P$. A point of the line is $(-1 + 2\\lambda, 3\\lambda, 2 + 6\\lambda)$, so $\\overrightarrow{PF} = (2\\lambda - 5, 3\\lambda + 3, 6\\lambda - 8)$. Perpendicularity to $(2, 3, 6)$ gives $2(2\\lambda - 5) + 3(3\\lambda + 3) + 6(6\\lambda - 8) = 49\\lambda - 49 = 0$, so $\\lambda = 1$ and $F = (1, 3, 8)$. The least distance is $PF = \\sqrt{9 + 36 + 4} = 7$ units.',
    steps: [
      { step: 'Writes $\\overrightarrow{PF}$ for a general point $F$ of the line', marks: 1 },
      { step: 'Applies $\\overrightarrow{PF} \\cdot \\vec{b} = 0$ to get $\\lambda = 1$ and $F(1, 3, 8)$', marks: 1 },
      { step: 'Finds $PF = 7$ as the least distance', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c07', chapter: C, topic: FT, type: 'short', complexity: 'hard', marks: 3,
    text: 'The foot of the perpendicular drawn from the origin to a line $L$ is $F(2, -2, 1)$, and $L$ has direction ratios $1, 2, k$. Find $k$, write the Cartesian equation of $L$, and find the image of the origin in $L$.',
    answer: '$OF$ is perpendicular to $L$, so $(2, -2, 1) \\cdot (1, 2, k) = 2 - 4 + k = 0$, giving $k = 2$. The line passes through $F(2, -2, 1)$ with direction ratios $1, 2, 2$: $\\frac{x-2}{1} = \\frac{y+2}{2} = \\frac{z-1}{2}$. $F$ is the midpoint of the origin and its image, so the image is $2F = (4, -4, 2)$.',
    steps: [
      { step: 'Uses $\\overrightarrow{OF} \\cdot (1, 2, k) = 0$ to get $k = 2$', marks: 1 },
      { step: 'Writes $L$ as $\\frac{x-2}{1} = \\frac{y+2}{2} = \\frac{z-1}{2}$', marks: 1 },
      { step: 'Uses $F$ as the midpoint of the origin and its image to get $(4, -4, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-c08', chapter: C, topic: DC, type: 'short', complexity: 'hard', marks: 3,
    text: 'The direction cosines $l, m, n$ of a line satisfy $l + m + n = 0$ and $l^2 + m^2 = n^2$. Find the direction cosines of the two lines that satisfy these conditions, and the acute angle between them.',
    answer: 'From the first relation $n = -(l + m)$, so $l^2 + m^2 = (l + m)^2$ gives $2lm = 0$, hence $l = 0$ or $m = 0$. If $l = 0$ then $n = -m$ and $l^2 + m^2 + n^2 = 1$ gives $m^2 = \\frac{1}{2}$: direction cosines $0, \\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}$. If $m = 0$ then $n = -l$ and $l^2 = \\frac{1}{2}$: direction cosines $\\frac{1}{\\sqrt{2}}, 0, -\\frac{1}{\\sqrt{2}}$ (each with the opposite sign also allowed). The angle between these lines has $\\cos\\theta = \\left|0 + 0 + \\frac{1}{2}\\right| = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{3}$.',
    steps: [
      { step: 'Eliminates $n$ using $n = -(l + m)$ and gets $lm = 0$', marks: 1 },
      { step: 'Uses $l^2 + m^2 + n^2 = 1$ in each case to get the two lines $\\left(0, \\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}\\right)$ and $\\left(\\frac{1}{\\sqrt{2}}, 0, -\\frac{1}{\\sqrt{2}}\\right)$', marks: 1 },
      { step: 'Finds $\\cos\\theta = \\frac{1}{2}$, so the acute angle is $\\frac{\\pi}{3}$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-3d-r3-d01', chapter: C, topic: DC, type: 'long', complexity: 'hard', marks: 5,
    text: 'A line makes angles of $45^\\circ$ and $60^\\circ$ with the positive $x$-axis and $y$-axis respectively. (a) Find the possible angles it makes with the positive $z$-axis. (b) Write its direction cosines in each case and the Cartesian equation of each such line passing through $P(2, -1, 3)$. (c) Find the acute angle between these two lines.',
    answer: '(a) $\\cos^2\\gamma = 1 - \\cos^2 45^\\circ - \\cos^2 60^\\circ = 1 - \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$, so $\\cos\\gamma = \\pm\\frac{1}{2}$ and $\\gamma = 60^\\circ$ or $120^\\circ$. (b) The direction cosines are $\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2}$ and $\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, -\\frac{1}{2}$, with direction ratios $\\sqrt{2}, 1, 1$ and $\\sqrt{2}, 1, -1$. Through $P(2, -1, 3)$ the lines are $\\frac{x-2}{\\sqrt{2}} = \\frac{y+1}{1} = \\frac{z-3}{1}$ and $\\frac{x-2}{\\sqrt{2}} = \\frac{y+1}{1} = \\frac{z-3}{-1}$. (c) $\\cos\\theta = \\left|\\frac{1}{2} + \\frac{1}{4} - \\frac{1}{4}\\right| = \\frac{1}{2}$, so the acute angle is $60^\\circ$.',
    steps: [
      { step: 'Uses $l^2 + m^2 + n^2 = 1$ to get $\\cos^2\\gamma = \\frac{1}{4}$ and $\\gamma = 60^\\circ$ or $120^\\circ$', marks: 1 },
      { step: 'Writes both sets of direction cosines $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\pm\\frac{1}{2}\\right)$', marks: 1 },
      { step: 'Writes the Cartesian equation through $P$ for the first line', marks: 1 },
      { step: 'Writes the Cartesian equation through $P$ for the second line', marks: 1 },
      { step: 'Finds $\\cos\\theta = \\frac{1}{2}$ and the acute angle $60^\\circ$ between the lines', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d02', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the equation of the line through $P(1, 1, 1)$ that meets both of the lines $L_1: \\vec{r} = (\\hat{i} + 4\\hat{j} + 2\\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + 2\\hat{k})$ and $L_2: \\vec{r} = (\\hat{i} + 4\\hat{j} + 8\\hat{k}) + \\mu(2\\hat{i} + \\hat{j} - \\hat{k})$.',
    answer: 'Let the required line meet $L_1$ at $Q_1(1 + \\lambda, 4 - \\lambda, 2 + 2\\lambda)$ and $L_2$ at $Q_2(1 + 2\\mu, 4 + \\mu, 8 - \\mu)$. Then $\\overrightarrow{PQ_1} = (\\lambda, 3 - \\lambda, 1 + 2\\lambda)$ and $\\overrightarrow{PQ_2} = (2\\mu, 3 + \\mu, 7 - \\mu)$ must be proportional: $\\frac{\\lambda}{2\\mu} = \\frac{3 - \\lambda}{3 + \\mu} = \\frac{1 + 2\\lambda}{7 - \\mu}$. The first two ratios give $\\lambda + \\lambda\\mu - 2\\mu = 0$, and the first and third give $7\\lambda - 5\\lambda\\mu - 2\\mu = 0$. Using $2\\mu = \\lambda + \\lambda\\mu$ in the second gives $6\\lambda(1 - \\mu) = 0$. The case $\\lambda = 0$ gives $\\mu = 0$, but then $(0, 3, 1)$ and $(0, 3, 7)$ are not proportional, so it is rejected. Hence $\\mu = 1$ and then $\\lambda = 1$. So $Q_1 = (2, 3, 4)$ and $Q_2 = (3, 5, 7)$, and $\\overrightarrow{PQ_1} = (1, 2, 3)$, $\\overrightarrow{PQ_2} = (2, 4, 6)$ are indeed proportional. The line is $\\frac{x-1}{1} = \\frac{y-1}{2} = \\frac{z-1}{3}$.',
    steps: [
      { step: 'Takes general points $Q_1$ on $L_1$ and $Q_2$ on $L_2$ and writes $\\overrightarrow{PQ_1}$ and $\\overrightarrow{PQ_2}$', marks: 1 },
      { step: 'States that $\\overrightarrow{PQ_1}$ and $\\overrightarrow{PQ_2}$ are proportional and forms the equations in $\\lambda$ and $\\mu$', marks: 1 },
      { step: 'Solves the equations to get $\\mu = 1$, $\\lambda = 1$ (rejecting the degenerate case $\\lambda = 0$)', marks: 1 },
      { step: 'Finds $Q_1(2, 3, 4)$, $Q_2(3, 5, 7)$ and the direction ratios $1, 2, 3$', marks: 1 },
      { step: 'Writes the line $\\frac{x-1}{1} = \\frac{y-1}{2} = \\frac{z-1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d03', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the Cartesian equations of the line that is parallel to the vector $\\hat{i} - \\hat{j} + 2\\hat{k}$ and meets both of the lines $L_1: \\vec{r} = (\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} + \\hat{j} - \\hat{k})$ and $L_2: \\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$. Also find the length of the part of this line between $L_1$ and $L_2$.',
    answer: 'Let the line meet $L_1$ at $Q_1(\\lambda, 1 + \\lambda, 1 - \\lambda)$ and $L_2$ at $Q_2(1 + 2\\mu, -1 + \\mu, 2 + 2\\mu)$. Then $\\overrightarrow{Q_1Q_2} = (1 + 2\\mu - \\lambda, -2 + \\mu - \\lambda, 1 + 2\\mu + \\lambda)$ must equal $k(1, -1, 2)$. So $1 + 2\\mu - \\lambda = k$, $-2 + \\mu - \\lambda = -k$ and $1 + 2\\mu + \\lambda = 2k$. Subtracting the first from the third gives $2\\lambda = k$. The first then gives $2\\mu = 3\\lambda - 1$, and adding the first two gives $3\\mu = 2\\lambda + 1$. Eliminating $\\mu$: $3(3\\lambda - 1) = 2(2\\lambda + 1)$, so $\\lambda = 1$, $\\mu = 1$, $k = 2$. Hence $Q_1 = (1, 2, 0)$ and $Q_2 = (3, 0, 4)$. The line is $\\frac{x-1}{1} = \\frac{y-2}{-1} = \\frac{z}{2}$, and the intercepted length is $|Q_1Q_2| = |(2, -2, 4)| = 2\\sqrt{6}$ units.',
    steps: [
      { step: 'Takes general points $Q_1$ on $L_1$ and $Q_2$ on $L_2$', marks: 1 },
      { step: 'Sets $\\overrightarrow{Q_1Q_2} = k(1, -1, 2)$ and writes the three equations', marks: 1 },
      { step: 'Solves to get $\\lambda = 1$, $\\mu = 1$, $k = 2$', marks: 1 },
      { step: 'Finds $Q_1(1, 2, 0)$, $Q_2(3, 0, 4)$ and writes $\\frac{x-1}{1} = \\frac{y-2}{-1} = \\frac{z}{2}$', marks: 1 },
      { step: 'Finds the intercepted length $2\\sqrt{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d04', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'In triangle $PQR$ with $P(2, -1, 3)$, $Q(4, 3, -1)$ and $R(-2, 5, 7)$, let $M$ and $N$ be the midpoints of $PQ$ and $PR$. Find the vector equation of the line $MN$. Show that $MN$ is parallel to $QR$ and half its length, and that the median from $P$ meets $MN$ at the midpoint of $MN$.',
    answer: '$M = (3, 1, 1)$ and $N = (0, 2, 5)$. $\\overrightarrow{MN} = (-3, 1, 4)$, so the line $MN$ is $\\vec{r} = (3\\hat{i} + \\hat{j} + \\hat{k}) + \\lambda(-3\\hat{i} + \\hat{j} + 4\\hat{k})$. $\\overrightarrow{QR} = (-6, 2, 8) = 2\\overrightarrow{MN}$, so $MN \\parallel QR$ and $MN = \\frac{1}{2}QR$ (lengths $\\sqrt{26}$ and $2\\sqrt{26}$). The midpoint of $QR$ is $L(1, 4, 3)$, so the median is $\\vec{r} = (2\\hat{i} - \\hat{j} + 3\\hat{k}) + s(-\\hat{i} + 5\\hat{j})$, since $\\overrightarrow{PL} = (-1, 5, 0)$. The midpoint of $MN$ is $\\left(\\frac{3}{2}, \\frac{3}{2}, 3\\right)$. Putting $s = \\frac{1}{2}$ in the median gives $\\left(\\frac{3}{2}, \\frac{3}{2}, 3\\right)$, so the median passes through the midpoint of $MN$.',
    steps: [
      { step: 'Finds the midpoints $M(3, 1, 1)$ and $N(0, 2, 5)$', marks: 1 },
      { step: 'Writes the vector equation of line $MN$ with direction $(-3, 1, 4)$', marks: 1 },
      { step: 'Shows $\\overrightarrow{QR} = 2\\overrightarrow{MN}$, so $MN \\parallel QR$ and $MN = \\frac{1}{2}QR$', marks: 1 },
      { step: 'Finds $L(1, 4, 3)$ and the equation of the median $PL$', marks: 1 },
      { step: 'Shows the median passes through the midpoint $\\left(\\frac{3}{2}, \\frac{3}{2}, 3\\right)$ of $MN$ (for $s = \\frac{1}{2}$)', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d05', chapter: C, topic: ANG, type: 'long', complexity: 'medium', marks: 5,
    text: 'The points $A(1, 0, 2)$, $B(3, 2, 3)$, $C(2, 4, 5)$ and $D(0, 2, 4)$ are the vertices of a quadrilateral $ABCD$. Show that it is a rhombus. Find the angle between its diagonals, the acute angle of the rhombus at $A$, and the Cartesian equation of the diagonal $BD$.',
    answer: '$\\overrightarrow{AB} = (2, 2, 1)$, $\\overrightarrow{DC} = (2, 2, 1)$, $\\overrightarrow{AD} = (-1, 2, 2)$ and $\\overrightarrow{BC} = (-1, 2, 2)$. So $AB \\parallel DC$ with $AB = DC$, making $ABCD$ a parallelogram, and $AB = AD = 3$, so all sides are equal and it is a rhombus. The diagonals are $\\overrightarrow{AC} = (1, 4, 3)$ and $\\overrightarrow{BD} = (-3, 0, 1)$ with dot product $-3 + 0 + 3 = 0$, so they meet at $90^\\circ$. At $A$, $\\cos A = \\frac{\\overrightarrow{AB} \\cdot \\overrightarrow{AD}}{|AB||AD|} = \\frac{-2 + 4 + 2}{9} = \\frac{4}{9}$, so the angle is $\\cos^{-1}\\left(\\frac{4}{9}\\right)$. The diagonal $BD$ passes through $B(3, 2, 3)$ with direction ratios $-3, 0, 1$: $\\frac{x-3}{-3} = \\frac{y-2}{0} = \\frac{z-3}{1}$.',
    steps: [
      { step: 'Shows $\\overrightarrow{AB} = \\overrightarrow{DC}$ (so a parallelogram) and $\\overrightarrow{AD} = \\overrightarrow{BC}$', marks: 1 },
      { step: 'Shows $|AB| = |AD| = 3$, so $ABCD$ is a rhombus', marks: 1 },
      { step: 'Finds the diagonals $\\overrightarrow{AC}$, $\\overrightarrow{BD}$ and shows their dot product is $0$ (angle $90^\\circ$)', marks: 1 },
      { step: 'Finds $\\cos A = \\frac{4}{9}$ for the acute angle of the rhombus', marks: 1 },
      { step: 'Writes $\\frac{x-3}{-3} = \\frac{y-2}{0} = \\frac{z-3}{1}$ for the diagonal $BD$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d06', chapter: C, topic: ANG, type: 'long', complexity: 'medium', marks: 5,
    text: 'A cube has side $4$ and vertices $O(0, 0, 0)$, $A(4, 0, 0)$, $B(4, 4, 0)$, $C(0, 4, 0)$, $D(0, 0, 4)$, $E(4, 0, 4)$, $F(4, 4, 4)$ and $G(0, 4, 4)$. Its four body diagonals are $OF$, $AG$, $BD$ and $CE$. Find the angle between $OF$ and each of the other three body diagonals. Also show that $OF$ is perpendicular to the face diagonal $AC$, and find the angle between $OF$ and the face diagonal $OB$.',
    answer: '$\\overrightarrow{OF} = (4, 4, 4)$, $\\overrightarrow{AG} = (-4, 4, 4)$, $\\overrightarrow{BD} = (-4, -4, 4)$, $\\overrightarrow{CE} = (4, -4, 4)$, each of length $4\\sqrt{3}$. $\\overrightarrow{OF} \\cdot \\overrightarrow{AG} = 16$, $\\overrightarrow{OF} \\cdot \\overrightarrow{BD} = -16$, $\\overrightarrow{OF} \\cdot \\overrightarrow{CE} = 16$. Since $|OF||AG| = 48$, the acute angle in each case has $\\cos\\theta = \\frac{16}{48} = \\frac{1}{3}$, i.e. $\\cos^{-1}\\left(\\frac{1}{3}\\right)$. $\\overrightarrow{AC} = (-4, 4, 0)$ gives $\\overrightarrow{OF} \\cdot \\overrightarrow{AC} = -16 + 16 + 0 = 0$, so $OF \\perp AC$. $\\overrightarrow{OB} = (4, 4, 0)$ with length $4\\sqrt{2}$ gives $\\overrightarrow{OF} \\cdot \\overrightarrow{OB} = 32$, so $\\cos\\theta = \\frac{32}{4\\sqrt{3} \\cdot 4\\sqrt{2}} = \\frac{2}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3}$ and the angle is $\\cos^{-1}\\left(\\frac{\\sqrt{6}}{3}\\right)$.',
    steps: [
      { step: 'Writes the vectors along the four body diagonals, each of length $4\\sqrt{3}$', marks: 1 },
      { step: 'Finds the dot products of $OF$ with $AG$, $BD$ and $CE$ ($16$, $-16$, $16$)', marks: 1 },
      { step: 'Concludes each acute angle is $\\cos^{-1}\\left(\\frac{1}{3}\\right)$', marks: 1 },
      { step: 'Shows $\\overrightarrow{OF} \\cdot \\overrightarrow{AC} = 0$, so $OF \\perp AC$', marks: 1 },
      { step: 'Finds the angle with $OB$: $\\cos\\theta = \\frac{\\sqrt{6}}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d07', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    competency: true,
    text: 'Two aircraft fly in straight lines for the four minutes after noon. With positions in km ($z$ vertical) and $t$ in minutes, aircraft A is at $(5, 4, 8) + t(0, -2, -2)$ and aircraft B is at $(-1, -5, 5) + t(2, -2, -1)$. (a) Find the shortest distance between the two flight paths. (b) Find the least distance between the two aircraft at the same instant, and the time at which it occurs. (c) Explain why the answer to (b) is larger than the answer to (a).',
    answer: '(a) $\\vec{b}_1 = (0, -2, -2)$, $\\vec{b}_2 = (2, -2, -1)$. $\\vec{b}_1 \\times \\vec{b}_2 = (2 - 4)\\hat{i} - (0 + 4)\\hat{j} + (0 + 4)\\hat{k} = -2\\hat{i} - 4\\hat{j} + 4\\hat{k}$, with magnitude $6$. $\\vec{a}_2 - \\vec{a}_1 = (-6, -9, -3)$, and the dot product is $12 + 36 - 12 = 36$. The shortest distance between the paths is $\\frac{36}{6} = 6$ km. (b) At time $t$ the position difference is $(6 - 2t, 9, 3 - t)$, so the squared distance is $(6 - 2t)^2 + 81 + (3 - t)^2 = 5(3 - t)^2 + 81$. This is least at $t = 3$ minutes, when the distance is $\\sqrt{81} = 9$ km. (c) The shortest distance $6$ km is measured between the two nearest points of the paths, which are $(5, -5, -1)$ on A\'s path (reached at $t = 4.5$ min) and $(3, -9, 3)$ on B\'s path (reached at $t = 2$ min). The aircraft are never at these two points at the same time (A does not even reach its point within the four minutes), so the distance between the aircraft at any one instant is never less than $6$ km and here it is $9$ km. The paths are the same lines for all time, but (b) compares positions at equal times, which is a restricted choice of points, so its minimum is at least as large as (a).',
    steps: [
      { step: 'Computes $\\vec{b}_1 \\times \\vec{b}_2 = -2\\hat{i} - 4\\hat{j} + 4\\hat{k}$ with magnitude $6$', marks: 1 },
      { step: 'Evaluates $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 36$ and gets the shortest distance $6$ km', marks: 1 },
      { step: 'Writes the squared separation at time $t$ as $5(3 - t)^2 + 81$', marks: 1 },
      { step: 'Finds the least distance $9$ km at $t = 3$ minutes', marks: 1 },
      { step: 'Explains that the nearest points of the paths, $(5, -5, -1)$ and $(3, -9, 3)$, are reached at different times ($t = 4.5$ and $t = 2$ min), so the same-time distance cannot be smaller than $6$ km', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d08', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'A cuboid has the vertex $O$ at the origin and the edges $OA = 4$, $OC = 3$ and $OO\' = 2$ along the $x$-, $y$- and $z$-axes. Its vertices are $A(4, 0, 0)$, $B(4, 3, 0)$, $C(0, 3, 0)$ and $O\'(0, 0, 2)$, $A\'(4, 0, 2)$, $B\'(4, 3, 2)$, $C\'(0, 3, 2)$. Find the shortest distance between the space diagonal $OB\'$ and (a) the edge $AA\'$, (b) the edge $AB$.',
    answer: 'The diagonal $OB\'$ passes through $O$ with direction $\\vec{b}_1 = (4, 3, 2)$. (a) Edge $AA\'$ passes through $A(4, 0, 0)$ with direction $\\vec{b}_2 = (0, 0, 1)$. $\\vec{b}_1 \\times \\vec{b}_2 = (3, -4, 0)$ with magnitude $5$, and $\\overrightarrow{OA} \\cdot (3, -4, 0) = 12$. The shortest distance is $\\frac{12}{5}$ units. (b) Edge $AB$ passes through $A(4, 0, 0)$ with direction $\\vec{b}_3 = (0, 1, 0)$. $\\vec{b}_1 \\times \\vec{b}_3 = (3 \\cdot 0 - 2 \\cdot 1, 2 \\cdot 0 - 4 \\cdot 0, 4 \\cdot 1 - 0) = (-2, 0, 4)$ with magnitude $2\\sqrt{5}$, and $\\overrightarrow{OA} \\cdot (-2, 0, 4) = -8$. The shortest distance is $\\frac{8}{2\\sqrt{5}} = \\frac{4}{\\sqrt{5}}$ units.',
    steps: [
      { step: 'Takes the point and direction of the diagonal: $O$ and $(4, 3, 2)$', marks: 1 },
      { step: 'For $AA\'$: finds $\\vec{b}_1 \\times \\vec{b}_2 = (3, -4, 0)$ with magnitude $5$', marks: 1 },
      { step: 'For $AA\'$: finds $\\overrightarrow{OA} \\cdot (3, -4, 0) = 12$ and the distance $\\frac{12}{5}$', marks: 1 },
      { step: 'For $AB$: finds $\\vec{b}_1 \\times \\vec{b}_3 = (-2, 0, 4)$ with magnitude $2\\sqrt{5}$', marks: 1 },
      { step: 'For $AB$: finds $\\overrightarrow{OA} \\cdot (-2, 0, 4) = -8$ and the distance $\\frac{4}{\\sqrt{5}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d09', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    competency: true,
    text: 'Three straight pipes run through a plant room (distances in metres). Pipe 1 passes through $(0, 1, 2)$ with direction ratios $1, 2, 2$. Pipe 2 passes through $(3, 2, 4)$ with direction ratios $2, 3, 2$. Pipe 3 passes through $(-1, -2, 4)$ with direction ratios $2, -2, 1$. Safety rules require every pair of pipes to be at least $2.5$ m apart. Find the shortest distance between pipes 1 and 2 and between pipes 1 and 3, and state which of these pairs break the rule and by how much.',
    answer: 'Pipes 1 and 2: $\\vec{b}_1 \\times \\vec{b}_2 = (1, 2, 2) \\times (2, 3, 2) = (4 - 6)\\hat{i} - (2 - 4)\\hat{j} + (3 - 4)\\hat{k} = -2\\hat{i} + 2\\hat{j} - \\hat{k}$, with magnitude $3$. $\\vec{a}_2 - \\vec{a}_1 = (3, 1, 2)$, and the dot product is $-6 + 2 - 2 = -6$. The distance is $\\frac{6}{3} = 2$ m. Pipes 1 and 3: $\\vec{b}_1 \\times \\vec{b}_3 = (1, 2, 2) \\times (2, -2, 1) = (2 + 4)\\hat{i} - (1 - 4)\\hat{j} + (-2 - 4)\\hat{k} = 6\\hat{i} + 3\\hat{j} - 6\\hat{k}$, with magnitude $9$. $\\vec{a}_3 - \\vec{a}_1 = (-1, -3, 2)$, and the dot product is $-6 - 9 - 12 = -27$. The distance is $\\frac{27}{9} = 3$ m. Pipes 1 and 2 are $2$ m apart, which breaks the $2.5$ m rule by $0.5$ m. Pipes 1 and 3 are $3$ m apart, which meets the rule.',
    steps: [
      { step: 'For pipes 1 and 2: finds $\\vec{b}_1 \\times \\vec{b}_2 = -2\\hat{i} + 2\\hat{j} - \\hat{k}$ with magnitude $3$', marks: 1 },
      { step: 'For pipes 1 and 2: finds $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = -6$ and the distance $2$ m', marks: 1 },
      { step: 'For pipes 1 and 3: finds $\\vec{b}_1 \\times \\vec{b}_3 = 6\\hat{i} + 3\\hat{j} - 6\\hat{k}$ with magnitude $9$', marks: 1 },
      { step: 'For pipes 1 and 3: finds the dot product $-27$ and the distance $3$ m', marks: 1 },
      { step: 'Compares with $2.5$ m: pipes 1 and 2 break the rule by $0.5$ m and pipes 1 and 3 meet it', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d10', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $L_1$ be the line $\\frac{x-3}{1} = \\frac{y}{2} = \\frac{z-3}{2}$ and let $L_2$ be the line obtained by replacing every point of $L_1$ by its image in the origin (the point diametrically opposite through $O$). Write the equation of $L_2$, show that $L_1$ and $L_2$ are parallel, and find the distance between them. Also find the feet $F_1$ and $F_2$ of the perpendiculars from the origin to $L_1$ and $L_2$, and show that the origin is the midpoint of $F_1F_2$.',
    answer: 'The image of $(x, y, z)$ in the origin is $(-x, -y, -z)$. $L_1$ passes through $(3, 0, 3)$, so $L_2$ passes through $(-3, 0, -3)$. Its direction is the same, $1, 2, 2$, so $L_2$ is $\\frac{x+3}{1} = \\frac{y}{2} = \\frac{z+3}{2}$ and the lines are parallel. $\\vec{a}_2 - \\vec{a}_1 = (-6, 0, -6)$ and $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = (1, 2, 2) \\times (-6, 0, -6) = (-12, -6, 12)$ with magnitude $18$. The distance is $\\frac{18}{|\\vec{b}|} = \\frac{18}{3} = 6$ units. The foot on $L_1$: a point is $(3 + \\lambda, 2\\lambda, 3 + 2\\lambda)$ and perpendicularity to $(1, 2, 2)$ gives $(3 + \\lambda) + 4\\lambda + 2(3 + 2\\lambda) = 9\\lambda + 9 = 0$, so $\\lambda = -1$ and $F_1 = (2, -2, 1)$. By symmetry $F_2 = (-2, 2, -1)$ (check: $(-3 + \\mu) + 4\\mu + 2(-3 + 2\\mu) = 9\\mu - 9 = 0$ gives $\\mu = 1$ and $F_2 = (-2, 2, -1)$). The midpoint of $F_1F_2$ is $(0, 0, 0)$, and $F_1F_2 = 6$ confirms the distance.',
    steps: [
      { step: 'Forms $L_2$ through $(-3, 0, -3)$ with the same direction ratios $1, 2, 2$', marks: 1 },
      { step: 'Notes the equal direction ratios, so the lines are parallel', marks: 1 },
      { step: 'Finds the distance between the parallel lines as $6$ units', marks: 1 },
      { step: 'Finds the feet $F_1(2, -2, 1)$ and $F_2(-2, 2, -1)$', marks: 1 },
      { step: 'Shows the origin is the midpoint of $F_1F_2$ and $F_1F_2 = 6$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d11', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'A guy-wire leaves the point $P(5, -2, 3)$ in the direction $2\\hat{i} + 4\\hat{j} + 5\\hat{k}$ and meets the line $L: \\frac{x-1}{2} = \\frac{y+1}{1} = \\frac{z-2}{2}$ at the point $M$. Find $M$ and the length $PM$. Find also the foot $F$ of the perpendicular from $P$ to $L$, the length $PF$, and the acute angle between the wire and $L$.',
    answer: 'A point of the wire is $(5 + 2s, -2 + 4s, 3 + 5s)$ and a point of $L$ is $(1 + 2\\lambda, -1 + \\lambda, 2 + 2\\lambda)$. Equating: $5 + 2s = 1 + 2\\lambda$, $-2 + 4s = -1 + \\lambda$, $3 + 5s = 2 + 2\\lambda$. The first gives $\\lambda = 2 + s$ and the second gives $\\lambda = 4s - 1$, so $s = 1$ and $\\lambda = 3$ (the third equation checks: $8 = 8$). So $M = (7, 2, 8)$ and $PM = |(2, 4, 5)| = \\sqrt{45} = 3\\sqrt{5}$ units. For the foot, $F = (1 + 2\\lambda, -1 + \\lambda, 2 + 2\\lambda)$ and $\\overrightarrow{PF} = (2\\lambda - 4, \\lambda + 1, 2\\lambda - 1)$. Perpendicularity to $(2, 1, 2)$ gives $4\\lambda - 8 + \\lambda + 1 + 4\\lambda - 2 = 9\\lambda - 9 = 0$, so $\\lambda = 1$ and $F = (3, 0, 4)$, with $PF = |(-2, 2, 1)| = 3$ units. The angle $\\theta$ between the wire and $L$ has $\\cos\\theta = \\frac{|(2, 4, 5) \\cdot (2, 1, 2)|}{3\\sqrt{5} \\cdot 3} = \\frac{18}{9\\sqrt{5}} = \\frac{2}{\\sqrt{5}}$, so $\\theta = \\cos^{-1}\\left(\\frac{2}{\\sqrt{5}}\\right)$. As expected $PF < PM$.',
    steps: [
      { step: 'Equates a general point of the wire with a general point of $L$ and forms three equations', marks: 1 },
      { step: 'Solves to get $s = 1$, $\\lambda = 3$ and $M(7, 2, 8)$', marks: 1 },
      { step: 'Finds $PM = 3\\sqrt{5}$', marks: 1 },
      { step: 'Finds the foot $F(3, 0, 4)$ using perpendicularity and $PF = 3$', marks: 1 },
      { step: 'Finds $\\cos\\theta = \\frac{2}{\\sqrt{5}}$ for the angle between the wire and $L$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d12', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'The lines $L_1: \\frac{x}{-1} = \\frac{y-3}{4} = \\frac{z-3}{1}$ and $M: \\frac{x-1}{1} = \\frac{y+1}{2} = \\frac{z-2}{2}$ intersect. Find the point of intersection and the Cartesian equation of the image of $L_1$ in the line $M$.',
    answer: 'A point of $L_1$ is $(-\\lambda, 3 + 4\\lambda, 3 + \\lambda)$ and a point of $M$ is $(1 + t, -1 + 2t, 2 + 2t)$. Equating: $-\\lambda = 1 + t$, $3 + 4\\lambda = -1 + 2t$, $3 + \\lambda = 2 + 2t$. From the first $t = -\\lambda - 1$; the second then gives $3 + 4\\lambda = -3 - 2\\lambda$, so $\\lambda = -1$ and $t = 0$, and the third holds ($2 = 2$). The point of intersection is $I(1, -1, 2)$. Take the point $A(0, 3, 3)$ on $L_1$ ($\\lambda = 0$). Its foot on $M$: $\\overrightarrow{AF} = (1 + t, -4 + 2t, -1 + 2t)$ and perpendicularity to $(1, 2, 2)$ gives $1 + t - 8 + 4t - 2 + 4t = 9t - 9 = 0$, so $t = 1$ and $F = (2, 1, 4)$. The image of $A$ is $A\' = 2F - A = (4, -1, 5)$. The image of $L_1$ is the line through $I(1, -1, 2)$ and $A\'(4, -1, 5)$, with direction ratios $(3, 0, 3) \\propto (1, 0, 1)$: $\\frac{x-1}{1} = \\frac{y+1}{0} = \\frac{z-2}{1}$.',
    steps: [
      { step: 'Equates general points of $L_1$ and $M$ and solves to get the intersection $I(1, -1, 2)$', marks: 1 },
      { step: 'Chooses a point on $L_1$, such as $A(0, 3, 3)$, to reflect', marks: 1 },
      { step: 'Finds the foot of the perpendicular from $A$ to $M$: $F(2, 1, 4)$', marks: 1 },
      { step: 'Finds the image $A\'(4, -1, 5)$ of $A$ using the midpoint relation', marks: 1 },
      { step: 'Writes the image line through $I$ and $A\'$: $\\frac{x-1}{1} = \\frac{y+1}{0} = \\frac{z-2}{1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d13', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $L$ be the line $\\frac{x-2}{2} = \\frac{y+1}{3} = \\frac{z-1}{6}$ and let $P$ be the point $(7, -4, 9)$. Find the foot $F$ of the perpendicular from $P$ to $L$ and the length $PF$. Find the points $R$ on $L$ for which $PR = 7\\sqrt{5}$, and the area of triangle $PFR$.',
    answer: 'A point of $L$ is $(2 + 2\\lambda, -1 + 3\\lambda, 1 + 6\\lambda)$, so $\\overrightarrow{PF} = (2\\lambda - 5, 3\\lambda + 3, 6\\lambda - 8)$. Perpendicularity to $(2, 3, 6)$ gives $2(2\\lambda - 5) + 3(3\\lambda + 3) + 6(6\\lambda - 8) = 49\\lambda - 49 = 0$, so $\\lambda = 1$ and $F = (4, 2, 7)$. $PF = |(-3, 6, -2)| = 7$ units. Since $PF \\perp L$, triangle $PFR$ is right-angled at $F$ for any $R$ on $L$, so $FR^2 = PR^2 - PF^2 = 245 - 49 = 196$ and $FR = 14$. The unit vector along $L$ is $\\frac{1}{7}(2, 3, 6)$, so $R = F \\pm 14 \\cdot \\frac{1}{7}(2, 3, 6) = F \\pm (4, 6, 12)$, giving $R = (8, 8, 19)$ or $R = (0, -4, -5)$. The area of triangle $PFR$ is $\\frac{1}{2} \\cdot PF \\cdot FR = \\frac{1}{2} \\cdot 7 \\cdot 14 = 49$ square units.',
    steps: [
      { step: 'Writes $\\overrightarrow{PF}$ for a general point of $L$ and applies perpendicularity to get $\\lambda = 1$, $F(4, 2, 7)$', marks: 1 },
      { step: 'Finds $PF = 7$', marks: 1 },
      { step: 'Uses the right angle at $F$ to get $FR = 14$ from $PR = 7\\sqrt{5}$', marks: 1 },
      { step: 'Moves $14$ units along the unit direction $\\frac{1}{7}(2, 3, 6)$ each way to get $R(8, 8, 19)$ and $R(0, -4, -5)$', marks: 1 },
      { step: 'Finds the area $\\frac{1}{2} \\cdot 7 \\cdot 14 = 49$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r3-d14', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    competency: true,
    text: 'A ski lift runs along the straight line through the stations $A(2, 1, 3)$ and $B(6, 5, 5)$ (distances in metres). A cafe stands at $H(9, 5, 8)$. Find the foot $F$ of the perpendicular from $H$ to the line $AB$ and the length $HF$. Does $F$ lie between $A$ and $B$? The cafe needs a cable to a point of the lift between the stations $A$ and $B$ (inclusive): find the point of the lift nearest to the cafe and the length of the shortest such cable.',
    answer: 'The line is $\\vec{r} = (2\\hat{i} + \\hat{j} + 3\\hat{k}) + t(4\\hat{i} + 4\\hat{j} + 2\\hat{k})$, with $t = 0$ at $A$ and $t = 1$ at $B$. For the foot, $\\overrightarrow{AH} = (7, 4, 5)$ and $t = \\frac{\\overrightarrow{AH} \\cdot (4, 4, 2)}{|(4, 4, 2)|^2} = \\frac{28 + 16 + 10}{36} = \\frac{3}{2}$. So $F = (2 + 6, 1 + 6, 3 + 3) = (8, 7, 6)$ and $HF = |(-1, 2, -2)| = 3$ m. Because $t = \\frac{3}{2} > 1$, $F$ lies beyond $B$ (it divides $AB$ externally in the ratio $3 : 1$), not between $A$ and $B$. Along the lift the distance to $H$ decreases as $t$ increases up to $t = \\frac{3}{2}$, so on the section between the stations the nearest point is $B$ itself. The shortest cable has length $HB = |(3, 0, 3)| = 3\\sqrt{2}$ m $\\approx 4.24$ m.',
    steps: [
      { step: 'Writes the line $AB$ with direction $(4, 4, 2)$ and a general point', marks: 1 },
      { step: 'Finds the parameter $t = \\frac{3}{2}$ from perpendicularity', marks: 1 },
      { step: 'Finds the foot $F(8, 7, 6)$ and $HF = 3$ m', marks: 1 },
      { step: 'Observes $t > 1$, so $F$ lies beyond $B$ (external ratio $3 : 1$) and not between the stations', marks: 1 },
      { step: 'Concludes the nearest point on the section is $B$ and the shortest cable is $HB = 3\\sqrt{2}$ m', marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-3d-r3-e01', chapter: C, topic: DC, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A footbridge has a vertical mast with its base at the origin. Taking the $z$-axis vertical and distances in metres, the top of the mast is at $M(0, 0, 12)$. Two straight stay cables run from the top of the mast to anchor points on the level deck: cable 1 goes to $A(3, 4, 0)$ and cable 2 goes to $B(-4, 3, 0)$.',
    answer: '(i) $\\frac{3}{13}, \\frac{4}{13}, -\\frac{12}{13}$. (ii) $\\cos^{-1}\\left(\\frac{144}{169}\\right)$. (iii) $\\left(2, \\frac{8}{3}, 4\\right)$; OR $\\cos^{-1}\\left(\\frac{5\\sqrt{2}}{26}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the direction cosines of cable 1, from $M$ towards $A$.',
        answer: '$\\overrightarrow{MA} = (3, 4, -12)$ with length $\\sqrt{9 + 16 + 144} = 13$. The direction cosines are $\\frac{3}{13}, \\frac{4}{13}, -\\frac{12}{13}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the angle between cable 1 and cable 2 at the top of the mast.',
        answer: '$\\overrightarrow{MB} = (-4, 3, -12)$ with length $13$. $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = -12 + 12 + 144 = 144$, so $\\cos\\theta = \\frac{144}{169}$ and the angle is $\\cos^{-1}\\left(\\frac{144}{169}\\right)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'A lamp is fixed on cable 1 at a height of $4$ m above the deck. Find its coordinates.\nOR\nFind the acute angle between cable 1 and the straight edge $AB$ of the deck.',
        answer: 'Points of cable 1 are $(3t, 4t, 12 - 12t)$ (1 mark). Height $4$ gives $12 - 12t = 4$, so $t = \\frac{2}{3}$ and the lamp is at $\\left(2, \\frac{8}{3}, 4\\right)$ (1 mark).\nOR: $\\overrightarrow{AB} = (-7, -1, 0)$ with length $\\sqrt{50} = 5\\sqrt{2}$, and $\\overrightarrow{MA} \\cdot \\overrightarrow{AB} = -21 - 4 = -25$ (1 mark). So $\\cos\\theta = \\frac{25}{13 \\cdot 5\\sqrt{2}} = \\frac{5}{13\\sqrt{2}} = \\frac{5\\sqrt{2}}{26}$ and the acute angle is $\\cos^{-1}\\left(\\frac{5\\sqrt{2}}{26}\\right)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-r3-e02', chapter: C, topic: SD, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Two cable-car ropeways cross over a valley. Taking a survey point as the origin and distances in units of $100$ m, ropeway 1 runs through the points $P_1(1, -3, 1)$ and $P_2(3, -5, 4)$, and ropeway 2 runs through the points $Q_1(-2, 2, 1)$ and $Q_2(2, -1, 4)$. Safety rules require at least $250$ m between the two ropeways.',
    answer: '(i) $\\vec{r} = (\\hat{i} - 3\\hat{j} + \\hat{k}) + \\lambda(2\\hat{i} - 2\\hat{j} + 3\\hat{k})$. (ii) Direction ratios $2, -2, 3$ and $4, -3, 3$ are not proportional. (iii) $3$ units $= 300$ m, so the rule is met; OR $\\cos^{-1}\\left(\\frac{23}{17\\sqrt{2}}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the vector equation of ropeway 1.',
        answer: '$\\overrightarrow{P_1P_2} = (2, -2, 3)$. Through $P_1(1, -3, 1)$: $\\vec{r} = (\\hat{i} - 3\\hat{j} + \\hat{k}) + \\lambda(2\\hat{i} - 2\\hat{j} + 3\\hat{k})$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Show that the two ropeways are not parallel.',
        answer: '$\\overrightarrow{Q_1Q_2} = (4, -3, 3)$. The ratios $\\frac{2}{4}$, $\\frac{-2}{-3}$, $\\frac{3}{3}$ are $\\frac{1}{2}, \\frac{2}{3}, 1$, which are not equal, so the direction ratios are not proportional and the ropeways are not parallel.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the shortest distance between the two ropeways and say whether the safety rule is met.\nOR\nFind the acute angle between the two ropeways.',
        answer: '$\\vec{b}_1 \\times \\vec{b}_2 = (2, -2, 3) \\times (4, -3, 3) = (-6 + 9)\\hat{i} - (6 - 12)\\hat{j} + (-6 + 8)\\hat{k} = 3\\hat{i} + 6\\hat{j} + 2\\hat{k}$, with magnitude $7$. $\\vec{a}_2 - \\vec{a}_1 = (-3, 5, 0)$ and the dot product is $-9 + 30 + 0 = 21$, so the shortest distance is $\\frac{21}{7} = 3$ units (1 mark). That is $300$ m, which is more than $250$ m, so the rule is met (1 mark).\nOR: $\\vec{b}_1 \\cdot \\vec{b}_2 = 8 + 6 + 9 = 23$, with $|\\vec{b}_1| = \\sqrt{17}$ and $|\\vec{b}_2| = \\sqrt{34}$ (1 mark). So $\\cos\\theta = \\frac{23}{\\sqrt{17}\\sqrt{34}} = \\frac{23}{17\\sqrt{2}}$ and the acute angle is $\\cos^{-1}\\left(\\frac{23}{17\\sqrt{2}}\\right)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-r3-e03', chapter: C, topic: FT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'On a hillside solar farm, a straight cable trench runs from the junction box $A(2, -1, 0)$ to the substation $B(6, 7, 8)$ (distances in metres, $z$ vertical). An inverter is placed at $P(9, 7, 2)$, and it is to be connected to the trench by the shortest possible cable.',
    answer: '(i) $\\frac{x-2}{1} = \\frac{y+1}{2} = \\frac{z}{2}$. (ii) $12$ m. (iii) Foot $(5, 5, 6)$, length $6$ m; OR image $(1, 3, 10)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the Cartesian equation of the line along which the trench runs.',
        answer: '$\\overrightarrow{AB} = (4, 8, 8)$, which is proportional to $(1, 2, 2)$. The line is $\\frac{x-2}{1} = \\frac{y+1}{2} = \\frac{z}{2}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the length of the trench from $A$ to $B$.',
        answer: '$AB = \\sqrt{16 + 64 + 64} = \\sqrt{144} = 12$ m.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the point of the trench where the cable from $P$ should be attached and the length of the cable.\nOR\nA second inverter is placed at the mirror image of $P$ in the line of the trench. Find its coordinates.',
        answer: 'A point of the trench is $F(2 + \\lambda, -1 + 2\\lambda, 2\\lambda)$ and $\\overrightarrow{PF} = (\\lambda - 7, 2\\lambda - 8, 2\\lambda - 2)$. Perpendicularity to $(1, 2, 2)$ gives $\\lambda - 7 + 4\\lambda - 16 + 4\\lambda - 4 = 9\\lambda - 27 = 0$, so $\\lambda = 3$ and $F = (5, 5, 6)$ (1 mark). $PF = |(-4, -2, 4)| = 6$ m (1 mark). The point lies on the trench between $A$ and $B$, because $\\overrightarrow{AF} = 3(1, 2, 2)$ is shorter than $\\overrightarrow{AB} = 4(1, 2, 2)$.\nOR: With the foot $F(5, 5, 6)$ found as above (1 mark), the image is $2F - P = (10 - 9, 10 - 7, 12 - 2) = (1, 3, 10)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-3d-r3-e04', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Two straight steel poles cross in the roof frame of a hall. Taking a corner of the floor as the origin, with the $z$-axis vertical and distances in metres, pole 1 joins $A(1, -1, 1)$ to $B(5, 5, 9)$ and pole 2 joins $C(1, 6, 1)$ to $D(5, -2, 9)$. The poles are to be bolted together where they cross.',
    answer: '(i) $\\vec{r} = (\\hat{i} - \\hat{j} + \\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 4\\hat{k})$. (ii) $\\frac{x-1}{1} = \\frac{y-6}{-2} = \\frac{z-1}{2}$. (iii) The poles cross at $(3, 2, 5)$; OR $\\cos^{-1}\\left(\\frac{4}{3\\sqrt{29}}\\right)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the vector equation of pole 1.',
        answer: '$\\overrightarrow{AB} = (4, 6, 8) \\propto (2, 3, 4)$. Through $A(1, -1, 1)$: $\\vec{r} = (\\hat{i} - \\hat{j} + \\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 4\\hat{k})$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the Cartesian equation of pole 2.',
        answer: '$\\overrightarrow{CD} = (4, -8, 8) \\propto (1, -2, 2)$. Through $C(1, 6, 1)$: $\\frac{x-1}{1} = \\frac{y-6}{-2} = \\frac{z-1}{2}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that the poles cross and find the point where they should be bolted together.\nOR\nFind the acute angle between the two poles.',
        answer: 'A point of pole 1 is $(1 + 2\\lambda, -1 + 3\\lambda, 1 + 4\\lambda)$ and a point of pole 2 is $(1 + \\mu, 6 - 2\\mu, 1 + 2\\mu)$. Equating: $2\\lambda = \\mu$, $-1 + 3\\lambda = 6 - 2\\mu$, $4\\lambda = 2\\mu$. The first and third agree, and the second gives $-1 + 3\\lambda = 6 - 4\\lambda$, so $\\lambda = 1$ and $\\mu = 2$ (1 mark). So the poles cross at $(3, 2, 5)$ (1 mark).\nOR: $(2, 3, 4) \\cdot (1, -2, 2) = 2 - 6 + 8 = 4$, with magnitudes $\\sqrt{29}$ and $3$ (1 mark). So $\\cos\\theta = \\frac{4}{3\\sqrt{29}}$ and the acute angle is $\\cos^{-1}\\left(\\frac{4}{3\\sqrt{29}}\\right)$ (1 mark).',
      },
    ],
  },
];
