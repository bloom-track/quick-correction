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

export const CH11_3D_R4: Class12Question[] = [
  // ---------------- Section A ----------------
  {
    id: 'c12-3d-r4-a01', chapter: C, topic: DC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The direction cosines $l, m, n$ of a line satisfy $m = l$ and $n = 2l$, with $l > 0$. They are',
    options: ['$\\frac{1}{3}, \\frac{1}{3}, \\frac{2}{3}$', '$\\frac{1}{\\sqrt{6}}, \\frac{1}{\\sqrt{6}}, \\frac{2}{\\sqrt{6}}$', '$\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{2}{\\sqrt{3}}$', '$\\frac{1}{\\sqrt{5}}, \\frac{1}{\\sqrt{5}}, \\frac{2}{\\sqrt{5}}$'],
    answer: 'Correct option: B) $\\frac{1}{\\sqrt{6}}, \\frac{1}{\\sqrt{6}}, \\frac{2}{\\sqrt{6}}$. From $l^2 + m^2 + n^2 = 1$ we get $l^2 + l^2 + 4l^2 = 6l^2 = 1$, so $l = \\frac{1}{\\sqrt{6}}$, $m = \\frac{1}{\\sqrt{6}}$, $n = \\frac{2}{\\sqrt{6}}$. Option A just divides the ratios $1, 1, 2$ by $3$, which does not give a unit vector.',
  },
  {
    id: 'c12-3d-r4-a02', chapter: C, topic: DC, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The direction cosines of the line directed from $A(2, -3, 1)$ to $B(-2, 0, -11)$ are $-\\frac{4}{13}, \\frac{3}{13}, -\\frac{12}{13}$.\nReason (R): The line directed from $B$ to $A$ has the same direction cosines as the line directed from $A$ to $B$.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) (A) is true but (R) is false. Here $\\overrightarrow{AB} = (-4, 3, -12)$ with $|AB| = \\sqrt{16 + 9 + 144} = 13$, so (A) is true. Reversing the direction changes the sign of every direction cosine ($\\frac{4}{13}, -\\frac{3}{13}, \\frac{12}{13}$ for $B$ to $A$), so (R) is false.',
  },
  {
    id: 'c12-3d-r4-a03', chapter: C, topic: DC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following can be the direction cosines of a line?',
    options: ['$\\frac{1}{2}, \\frac{1}{2}, \\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2}$', '$\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}$', '$\\frac{1}{3}, \\frac{2}{3}, 1$'],
    answer: 'Correct option: B) $\\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2}$. Only for option B is the sum of squares $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{4} = 1$. The sums for the others are $\\frac{3}{4}$, $\\frac{4}{3}$ and $\\frac{14}{9}$.',
  },
  {
    id: 'c12-3d-r4-a04', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The Cartesian equation of the line through $(2, -1, 3)$ that is perpendicular to both the lines with direction ratios $1, 1, 0$ and $0, 1, 1$ is',
    options: ['$\\frac{x-2}{1} = \\frac{y+1}{1} = \\frac{z-3}{1}$', '$\\frac{x-2}{1} = \\frac{y+1}{-1} = \\frac{z-3}{1}$', '$\\frac{x-2}{1} = \\frac{y+1}{-1} = \\frac{z-3}{-1}$', '$\\frac{x-2}{1} = \\frac{y+1}{0} = \\frac{z-3}{-1}$'],
    answer: 'Correct option: B) $\\frac{x-2}{1} = \\frac{y+1}{-1} = \\frac{z-3}{1}$. A direction perpendicular to both is $(1, 1, 0) \\times (0, 1, 1) = (1\\cdot 1 - 0\\cdot 1,\\ 0\\cdot 0 - 1\\cdot 1,\\ 1\\cdot 1 - 1\\cdot 0) = (1, -1, 1)$. Option A is the sum of the two vectors, not the cross product.',
  },
  {
    id: 'c12-3d-r4-a05', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The $y$-coordinate of the point on the line $\\frac{x-3}{2} = \\frac{y+1}{3} = \\frac{z-2}{-1}$ whose $z$-coordinate is $4$ is',
    options: ['$5$', '$-6$', '$-7$', '$7$'],
    answer: 'Correct option: C) $-7$. Put $z = 4$: $\\frac{4-2}{-1} = -2$, so the common ratio is $-2$ and $y + 1 = 3(-2) = -6$, giving $y = -7$.',
  },
  {
    id: 'c12-3d-r4-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The points $A(1, -2, 3)$, $B(2, 0, 5)$ and $C(4, k, m)$ are collinear. The value of $k + m$ is',
    options: ['$11$', '$13$', '$15$', '$36$'],
    answer: 'Correct option: B) $13$. $\\overrightarrow{AB} = (1, 2, 2)$ and $\\overrightarrow{AC} = (3, k + 2, m - 3)$ must be proportional, so $\\overrightarrow{AC} = 3\\overrightarrow{AB} = (3, 6, 6)$. Then $k = 4$, $m = 9$ and $k + m = 13$ ($36$ is the product $km$).',
  },
  {
    id: 'c12-3d-r4-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The line $x = 1 + 2t$, $y = 3 - t$, $z = 3t - 2$ has Cartesian (symmetric) form',
    options: ['$\\frac{x-1}{2} = \\frac{y-3}{-1} = \\frac{z+2}{3}$', '$\\frac{x-1}{2} = \\frac{y-3}{1} = \\frac{z+2}{3}$', '$\\frac{x+1}{2} = \\frac{y+3}{-1} = \\frac{z-2}{3}$', '$\\frac{x-1}{2} = \\frac{y+3}{-1} = \\frac{z-2}{3}$'],
    answer: 'Correct option: A) $\\frac{x-1}{2} = \\frac{y-3}{-1} = \\frac{z+2}{3}$. Solving each equation for $t$ gives $t = \\frac{x-1}{2} = \\frac{y-3}{-1} = \\frac{z+2}{3}$. The other options change a sign in a coordinate offset or in a direction ratio.',
  },
  {
    id: 'c12-3d-r4-a08', chapter: C, topic: ANG, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The acute angle between the lines $\\vec{r} = (\\hat{i} + \\hat{j}) + \\lambda(3\\hat{i} - 4\\hat{j})$ and $\\vec{r} = \\hat{k} + \\mu(5\\hat{i} + 12\\hat{j})$ is',
    options: ['$\\cos^{-1}\\left(-\\frac{33}{65}\\right)$', '$\\cos^{-1}\\left(\\frac{63}{65}\\right)$', '$\\cos^{-1}\\left(\\frac{33}{65}\\right)$', '$\\cos^{-1}\\left(\\frac{33}{169}\\right)$'],
    answer: 'Correct option: C) $\\cos^{-1}\\left(\\frac{33}{65}\\right)$. $\\vec{b}_1 \\cdot \\vec{b}_2 = 15 - 48 = -33$ and $|\\vec{b}_1||\\vec{b}_2| = 5 \\times 13 = 65$. The acute angle uses $\\frac{|-33|}{65} = \\frac{33}{65}$; a negative cosine would be obtuse.',
  },
  {
    id: 'c12-3d-r4-a09', chapter: C, topic: ANG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'In a cube, a face diagonal and a body diagonal start from the same vertex, and the face diagonal lies on a face through that vertex. The cosine of the angle between them is',
    options: ['$\\frac{1}{\\sqrt{3}}$', '$\\sqrt{\\frac{2}{3}}$', '$\\frac{1}{\\sqrt{2}}$', '$\\frac{2}{3}$'],
    answer: 'Correct option: B) $\\sqrt{\\frac{2}{3}}$. Take the vertex as the origin and edge $1$: the diagonals have direction ratios $(1, 1, 0)$ and $(1, 1, 1)$, so $\\cos\\theta = \\frac{2}{\\sqrt{2}\\sqrt{3}} = \\sqrt{\\frac{2}{3}}$. Option A is the angle between an edge and the body diagonal.',
  },
  {
    id: 'c12-3d-r4-a10', chapter: C, topic: ANG, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $\\theta$ is the acute angle between the lines with direction ratios $1, 2, 2$ and $2, 3, 6$, then $\\sin\\theta$ equals',
    options: ['$\\frac{20}{21}$', '$\\frac{\\sqrt{41}}{21}$', '$\\frac{\\sqrt{41}}{7}$', '$\\frac{1}{21}$'],
    answer: 'Correct option: B) $\\frac{\\sqrt{41}}{21}$. $\\cos\\theta = \\frac{2 + 6 + 12}{3 \\times 7} = \\frac{20}{21}$, so $\\sin\\theta = \\sqrt{1 - \\frac{400}{441}} = \\frac{\\sqrt{41}}{21}$. Option A is $\\cos\\theta$. (Check: $|(1,2,2)\\times(2,3,6)| = |(6,-2,-1)| = \\sqrt{41}$.)',
  },
  {
    id: 'c12-3d-r4-a11', chapter: C, topic: SD, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The shortest distance between the lines $\\frac{x}{1} = \\frac{y-1}{2} = \\frac{z-1}{2}$ and $\\frac{x-1}{2} = \\frac{y-3}{1} = \\frac{z+1}{-2}$ is',
    options: ['$4$', '$\\frac{4}{9}$', '$\\frac{4}{3}$', '$12$'],
    answer: 'Correct option: C) $\\frac{4}{3}$. $\\vec{b}_1 \\times \\vec{b}_2 = (1, 2, 2) \\times (2, 1, -2) = (-6, 6, -3)$ with magnitude $9$, and $\\vec{a}_2 - \\vec{a}_1 = (1, 2, -2)$ gives a dot product of $-6 + 12 + 6 = 12$. So the distance is $\\frac{12}{9} = \\frac{4}{3}$ (option D forgets to divide).',
  },
  {
    id: 'c12-3d-r4-a12', chapter: C, topic: SD, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The lines $\\frac{x-1}{2} = \\frac{y-2}{3} = \\frac{z-3}{4}$ and $\\frac{x-2}{3} = \\frac{y-3}{4} = \\frac{z-4}{5}$ intersect.\nReason (R): Two non-parallel lines through $\\vec{a}_1$ and $\\vec{a}_2$ with direction vectors $\\vec{b}_1$ and $\\vec{b}_2$ intersect exactly when $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true and (R) is the correct explanation of (A). The lines are not parallel, $\\vec{b}_1 \\times \\vec{b}_2 = (2,3,4) \\times (3,4,5) = (-1, 2, -1)$ and $\\vec{a}_2 - \\vec{a}_1 = (1, 1, 1)$, so the dot product is $-1 + 2 - 1 = 0$. Hence the lines are coplanar and intersect, (A) is true, and (R) is the very condition that proves it.',
  },
  {
    id: 'c12-3d-r4-a13', chapter: C, topic: SD, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The distance between the parallel lines $\\vec{r} = (\\hat{i} + 2\\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 6\\hat{k})$ and $\\vec{r} = (-3\\hat{i} - 3\\hat{j} - \\hat{k}) + \\mu(4\\hat{i} + 6\\hat{j} + 12\\hat{k})$ is',
    options: ['$\\frac{3}{2}$', '$3$', '$21$', '$\\sqrt{34}$'],
    answer: 'Correct option: B) $3$. With $\\vec{b} = (2, 3, 6)$ and $\\vec{a}_2 - \\vec{a}_1 = (-4, -3, -3)$, $(\\vec{a}_2 - \\vec{a}_1) \\times \\vec{b} = (-9, 18, -6)$ has magnitude $21$, and $|\\vec{b}| = 7$. The distance is $\\frac{21}{7} = 3$ (dividing by $|(4,6,12)| = 14$ gives the wrong value $\\frac{3}{2}$).',
  },
  {
    id: 'c12-3d-r4-a14', chapter: C, topic: FT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The foot of the perpendicular from $P(1, 2, 3)$ to the line $\\frac{x-1}{2} = \\frac{y+1}{1} = \\frac{z}{2}$ is',
    options: ['$(5, 1, 4)$', '$(-1, -2, -2)$', '$(3, 0, 2)$', '$\\left(2, -\\frac{1}{2}, 1\\right)$'],
    answer: 'Correct option: C) $(3, 0, 2)$. A point of the line is $(1 + 2t, -1 + t, 2t)$, so $\\overrightarrow{PF} = (2t, t - 3, 2t - 3)$. Perpendicularity to $(2, 1, 2)$ gives $4t + t - 3 + 4t - 6 = 9t - 9 = 0$, so $t = 1$ and $F = (3, 0, 2)$. The other options are points of the line for other values of $t$.',
  },
  {
    id: 'c12-3d-r4-a15', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The foot of the perpendicular from $P(-3, 2, 4)$ to the $z$-axis is',
    options: ['$(-3, 2, 0)$', '$(0, 2, 0)$', '$(0, 0, 4)$', '$(-3, 0, 0)$'],
    answer: 'Correct option: C) $(0, 0, 4)$. Every point of the $z$-axis is $(0, 0, s)$. The vector from it to $P$ is $(-3, 2, 4 - s)$, which is perpendicular to $(0, 0, 1)$ when $s = 4$. So the foot is $(0, 0, 4)$.',
  },
  {
    id: 'c12-3d-r4-a16', chapter: C, topic: FT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The perpendicular distance of the point $(3, 0, 0)$ from the line $x = y = z$ is',
    options: ['$3$', '$\\sqrt{3}$', '$\\sqrt{6}$', '$3\\sqrt{2}$'],
    answer: 'Correct option: C) $\\sqrt{6}$. The line passes through the origin with direction $(1, 1, 1)$. The projection of $(3, 0, 0)$ on it has length $\\frac{3}{\\sqrt{3}} = \\sqrt{3}$, so the distance is $\\sqrt{9 - 3} = \\sqrt{6}$ (options A and B are the distance to the origin and the projection).',
  },
  {
    id: 'c12-3d-r4-a17', chapter: C, topic: FT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The image of the point $P(1, -2, 3)$ in a line $L$ is $Q(5, -2, -5)$. The perpendicular distance of $P$ from $L$ is',
    options: ['$4\\sqrt{5}$', '$2\\sqrt{5}$', '$5$', '$10$'],
    answer: 'Correct option: B) $2\\sqrt{5}$. The foot of the perpendicular is the midpoint of $PQ$, so the distance from $P$ to $L$ is half of $PQ$. $PQ = |(4, 0, -8)| = 4\\sqrt{5}$, so the required distance is $2\\sqrt{5}$.',
  },
  {
    id: 'c12-3d-r4-a18', chapter: C, topic: ANG, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The lines with direction cosines $\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}$ and $\\frac{2}{3}, \\frac{1}{3}, -\\frac{2}{3}$ are perpendicular.\nReason (R): Two lines with direction cosines $l_1, m_1, n_1$ and $l_2, m_2, n_2$ are perpendicular exactly when $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true and (R) is the correct explanation of (A). $\\frac{1}{3}\\cdot\\frac{2}{3} + \\frac{2}{3}\\cdot\\frac{1}{3} + \\frac{2}{3}\\cdot\\left(-\\frac{2}{3}\\right) = \\frac{2 + 2 - 4}{9} = 0$, so (A) is true, and it is true precisely because of the condition stated in (R).',
  },
  // ---------------- Section B ----------------
  {
    id: 'c12-3d-r4-b01', chapter: C, topic: DC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the length of the projection of the line segment joining $P(1, 3, -2)$ and $Q(6, 1, 8)$ on the line whose direction ratios are $3, -4, 12$. Also write the direction cosines of that line.',
    answer: '$\\overrightarrow{PQ} = (5, -2, 10)$. The direction cosines of the line are $\\frac{3}{13}, -\\frac{4}{13}, \\frac{12}{13}$ (or all signs reversed), since $\\sqrt{9 + 16 + 144} = 13$. The projection of $PQ$ is $\\left|5\\cdot\\frac{3}{13} + (-2)\\cdot\\left(-\\frac{4}{13}\\right) + 10\\cdot\\frac{12}{13}\\right| = \\frac{15 + 8 + 120}{13} = \\frac{143}{13} = 11$ units.',
    steps: [
      { step: 'Finds the direction cosines $\\frac{3}{13}, -\\frac{4}{13}, \\frac{12}{13}$', marks: 1 },
      { step: 'Takes the dot product of $\\overrightarrow{PQ} = (5, -2, 10)$ with the direction cosines to get the projection $11$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-b02', chapter: C, topic: EQ, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the vector and Cartesian equations of the line through the point that divides the segment joining $A(2, -1, 4)$ and $B(7, 4, -1)$ internally in the ratio $2 : 3$, and parallel to the line $\\frac{x-1}{2} = \\frac{y+2}{-1} = \\frac{z}{3}$.',
    answer: 'The dividing point is $\\frac{3A + 2B}{5} = \\left(\\frac{6 + 14}{5}, \\frac{-3 + 8}{5}, \\frac{12 - 2}{5}\\right) = (4, 1, 2)$. The given line has direction ratios $2, -1, 3$. So the vector equation is $\\vec{r} = (4\\hat{i} + \\hat{j} + 2\\hat{k}) + \\lambda(2\\hat{i} - \\hat{j} + 3\\hat{k})$ and the Cartesian form is $\\frac{x-4}{2} = \\frac{y-1}{-1} = \\frac{z-2}{3}$.',
    steps: [
      { step: 'Finds the dividing point $(4, 1, 2)$ using the section formula', marks: 1 },
      { step: 'Writes both equations with direction $(2, -1, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-b03', chapter: C, topic: ANG, type: 'short', complexity: 'easy', marks: 2,
    text: 'The points $P(2, -1, 3)$, $Q(3, 0, 3)$ and $R(3, -1, 4)$ are given. Show that triangle $PQR$ is equilateral, and confirm the angle at $P$ by finding the angle between the lines $PQ$ and $PR$ using their direction ratios.',
    answer: '$\\overrightarrow{PQ} = (1, 1, 0)$, $\\overrightarrow{PR} = (1, 0, 1)$ and $\\overrightarrow{QR} = (0, -1, 1)$, so $PQ = PR = QR = \\sqrt{2}$ and the triangle is equilateral. The angle between $PQ$ and $PR$ satisfies $\\cos\\theta = \\frac{1 + 0 + 0}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$, so $\\theta = 60^\\circ$, as expected for an equilateral triangle.',
    steps: [
      { step: 'Finds the three side vectors and shows all lengths equal $\\sqrt{2}$', marks: 1 },
      { step: 'Uses direction ratios $(1,1,0)$ and $(1,0,1)$ to get $\\cos\\theta = \\frac{1}{2}$, so $\\theta = 60^\\circ$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-b04', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the shortest distance between the lines $\\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-3}{2}$ and $\\frac{x+3}{2} = \\frac{y+2}{1} = \\frac{z+3}{-2}$.',
    answer: 'Here $\\vec{a}_1 = (1, 2, 3)$, $\\vec{b}_1 = (1, 2, 2)$, $\\vec{a}_2 = (-3, -2, -3)$, $\\vec{b}_2 = (2, 1, -2)$. $\\vec{b}_1 \\times \\vec{b}_2 = (-6, 6, -3)$ with magnitude $9$. $\\vec{a}_2 - \\vec{a}_1 = (-4, -4, -6)$, and its dot product with the cross product is $24 - 24 + 18 = 18$. The shortest distance is $\\frac{18}{9} = 2$ units.',
    steps: [
      { step: 'Finds $\\vec{b}_1 \\times \\vec{b}_2 = (-6, 6, -3)$ and its magnitude $9$', marks: 1 },
      { step: 'Finds $(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2) = 18$ and the distance $2$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-b05', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the foot of the perpendicular and the perpendicular distance of the point $P(7, 1, -3)$ from the line $x = 3 + t$, $y = -1 + 2t$, $z = 2 - 2t$.',
    answer: 'The line has direction $(1, 2, -2)$. For the point $(3 + t, -1 + 2t, 2 - 2t)$, $\\overrightarrow{PF} = (t - 4, 2t - 2, 5 - 2t)$. Perpendicularity gives $(t - 4) + 2(2t - 2) - 2(5 - 2t) = 9t - 18 = 0$, so $t = 2$ and the foot is $F(5, 3, -2)$. $\\overrightarrow{PF} = (-2, 2, 1)$, so the distance is $\\sqrt{4 + 4 + 1} = 3$ units.',
    steps: [
      { step: 'Writes $\\overrightarrow{PF}$ for a general point and gets $t = 2$ from perpendicularity', marks: 1 },
      { step: 'Finds the foot $(5, 3, -2)$ and the distance $3$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-b06', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the image of the point $P(7, 1, 8)$ in the line through $A(1, 1, 2)$ and $B(3, 5, 6)$.',
    answer: 'The line has direction $\\overrightarrow{AB} = (2, 4, 4)$, i.e. $(1, 2, 2)$, and the point $(1 + t, 1 + 2t, 2 + 2t)$. $\\overrightarrow{PF} = (t - 6, 2t, 2t - 6)$ and perpendicularity gives $(t - 6) + 4t + 2(2t - 6) = 9t - 18 = 0$, so $t = 2$ and the foot is $F(3, 5, 6)$. The image is $2F - P = (6 - 7, 10 - 1, 12 - 8) = (-1, 9, 4)$.',
    steps: [
      { step: 'Finds the foot $F(3, 5, 6)$ from the perpendicularity condition ($t = 2$)', marks: 1 },
      { step: 'Uses the midpoint property to get the image $(-1, 9, 4)$', marks: 1 },
    ],
  },
  // ---------------- Section C ----------------
  {
    id: 'c12-3d-r4-c01', chapter: C, topic: DC, type: 'short', complexity: 'medium', marks: 3,
    text: 'The points $A(1, -1, 2)$, $B(2, 1, 2)$ and $C(1, 1, 3)$ are given. Find the direction cosines of a line that is perpendicular to both $AB$ and $AC$.',
    answer: '$\\overrightarrow{AB} = (1, 2, 0)$ and $\\overrightarrow{AC} = (0, 2, 1)$. If $(a, b, c)$ is perpendicular to both, then $a + 2b = 0$ and $2b + c = 0$, so $a = -2b$ and $c = -2b$; taking $b = -1$ gives direction ratios $(2, -1, 2)$ (the cross product is $(2, -1, 2)$ too). Since $\\sqrt{4 + 1 + 4} = 3$, the direction cosines are $\\frac{2}{3}, -\\frac{1}{3}, \\frac{2}{3}$ (or all signs reversed).',
    steps: [
      { step: 'Finds $\\overrightarrow{AB} = (1, 2, 0)$ and $\\overrightarrow{AC} = (0, 2, 1)$', marks: 1 },
      { step: 'Gets direction ratios $(2, -1, 2)$ from the two perpendicularity conditions or the cross product', marks: 1 },
      { step: 'Divides by $3$ to get the direction cosines', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'The line through $A(5, 4, -6)$ and $B(4, 2, -3)$ meets the $x$-axis. Find the point where it meets the $x$-axis and the ratio in which this point divides $AB$.',
    answer: '$\\overrightarrow{AB} = (-1, -2, 3)$, so a point of the line is $(5 - t, 4 - 2t, -6 + 3t)$. It lies on the $x$-axis when $y = z = 0$: $4 - 2t = 0$ and $-6 + 3t = 0$ both give $t = 2$ (so the line does meet the axis). The point is $(3, 0, 0)$. Since $t = 2$ is beyond $B$ (where $t = 1$), the point divides $AB$ externally in the ratio $2 : 1$ (i.e. $AX : XB = 2 : 1$).',
    steps: [
      { step: 'Writes a general point $(5 - t, 4 - 2t, -6 + 3t)$ of the line', marks: 1 },
      { step: 'Uses $y = z = 0$ to get $t = 2$ and the point $(3, 0, 0)$', marks: 1 },
      { step: 'Identifies the external ratio $2 : 1$ from $t = 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c03', chapter: C, topic: ANG, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the value of $k$ for which the angle between the lines $\\vec{r} = (2\\hat{i} - \\hat{k}) + \\lambda(\\hat{i} + \\hat{j})$ and $\\vec{r} = \\hat{j} + \\mu(\\hat{i} + k\\hat{j} + \\hat{k})$ is $45^\\circ$.',
    answer: 'The direction vectors are $(1, 1, 0)$ and $(1, k, 1)$. $\\cos 45^\\circ = \\frac{|1 + k|}{\\sqrt{2}\\sqrt{k^2 + 2}} = \\frac{1}{\\sqrt{2}}$, so $|1 + k| = \\sqrt{k^2 + 2}$. Squaring, $1 + 2k + k^2 = k^2 + 2$, so $2k = 1$ and $k = \\frac{1}{2}$. Check: $|1.5| = \\sqrt{2.25}$, so it holds.',
    steps: [
      { step: 'Writes $\\cos\\theta = \\frac{|1 + k|}{\\sqrt{2}\\sqrt{k^2 + 2}}$ and sets $\\theta = 45^\\circ$', marks: 1 },
      { step: 'Reduces to $|1 + k| = \\sqrt{k^2 + 2}$ and squares', marks: 1 },
      { step: 'Solves $k = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c04', chapter: C, topic: SD, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the shortest distance between the lines $x = 1 + 2s$, $y = 2 - s$, $z = 3 + 2s$ and $x = 4 - t$, $y = -1 + 2t$, $z = -2 + 2t$.',
    answer: 'The lines pass through $\\vec{a}_1 = (1, 2, 3)$ and $\\vec{a}_2 = (4, -1, -2)$ with directions $\\vec{b}_1 = (2, -1, 2)$ and $\\vec{b}_2 = (-1, 2, 2)$. $\\vec{b}_1 \\times \\vec{b}_2 = (-6, -6, 3)$ with magnitude $9$. $\\vec{a}_2 - \\vec{a}_1 = (3, -3, -5)$ and the dot product is $-18 + 18 - 15 = -15$. The shortest distance is $\\frac{15}{9} = \\frac{5}{3}$ units.',
    steps: [
      { step: 'Reads off points and directions from the parametric forms', marks: 1 },
      { step: 'Finds $\\vec{b}_1 \\times \\vec{b}_2 = (-6, -6, 3)$ and magnitude $9$', marks: 1 },
      { step: 'Finds the dot product $-15$ and the distance $\\frac{5}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c05', chapter: C, topic: SD, type: 'short', complexity: 'hard', marks: 3,
    text: 'The points $A(1, 1, 1)$, $B(1, -1, -1)$, $C(-1, 1, -1)$ and $D(-1, -1, 1)$ are the vertices of a regular tetrahedron. Find the shortest distance between the opposite edges $AB$ and $CD$, and compare it with the length of an edge.',
    answer: '$\\overrightarrow{AB} = (0, -2, -2)$ and $\\overrightarrow{CD} = (0, -2, 2)$, so take directions $(0, 1, 1)$ and $(0, 1, -1)$. Their cross product is $(-2, 0, 0)$ with magnitude $2$. $\\overrightarrow{AC} = (-2, 0, -2)$ and its dot product with $(-2, 0, 0)$ is $4$. The shortest distance is $\\frac{4}{2} = 2$ units. Each edge has length $|AB| = 2\\sqrt{2}$, so the shortest distance between opposite edges is the edge length divided by $\\sqrt{2}$.',
    steps: [
      { step: 'Finds the direction vectors of $AB$ and $CD$ and their cross product (magnitude $2$)', marks: 1 },
      { step: 'Finds $\\overrightarrow{AC}\\cdot(\\text{cross product}) = 4$ and the distance $2$', marks: 1 },
      { step: 'Finds the edge length $2\\sqrt{2}$ and states the ratio $\\sqrt{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c06', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 3,
    text: 'A particle moves so that its position at time $t$ seconds is $\\vec{r}(t) = (\\hat{i} - 2\\hat{j} + 3\\hat{k}) + t(2\\hat{i} + 2\\hat{j} - \\hat{k})$ (distances in metres). A sensor is fixed at $P(9, 3, 2)$. Find the time at which the particle is nearest to the sensor, and the least distance.',
    answer: 'The particle moves along a straight line with direction $(2, 2, -1)$, and the nearest point is the foot of the perpendicular from $P$. $\\overrightarrow{PQ} = (2t - 8, 2t - 5, 1 - t)$ for the point $Q$ at time $t$. Perpendicularity gives $2(2t - 8) + 2(2t - 5) - (1 - t) = 9t - 27 = 0$, so $t = 3$ seconds. Then $Q = (7, 4, 0)$ and $\\overrightarrow{PQ} = (-2, 1, -2)$, so the least distance is $\\sqrt{4 + 1 + 4} = 3$ m.',
    steps: [
      { step: 'Writes $\\overrightarrow{PQ}$ for the position at time $t$', marks: 1 },
      { step: 'Uses $\\overrightarrow{PQ}\\cdot(2, 2, -1) = 0$ to get $t = 3$ s', marks: 1 },
      { step: 'Finds the position $(7, 4, 0)$ and the least distance $3$ m', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c07', chapter: C, topic: FT, type: 'short', complexity: 'medium', marks: 3,
    text: 'In triangle $ABC$ with $A(3, 3, 5)$, $B(1, 2, 3)$ and $C(5, -2, 1)$, show that the angle at $B$ is a right angle. Find the foot $D$ of the perpendicular from $B$ to the hypotenuse $AC$ and verify that $BD^2 = AD \\cdot DC$.',
    answer: '$\\overrightarrow{BA} = (2, 1, 2)$ and $\\overrightarrow{BC} = (4, -4, -2)$ have dot product $8 - 4 - 4 = 0$, so the angle at $B$ is $90^\\circ$. The line $AC$ is $(3 + 2s, 3 - 5s, 5 - 4s)$ with direction $\\overrightarrow{AC} = (2, -5, -4)$. $\\overrightarrow{BD} = (2 + 2s, 1 - 5s, 2 - 4s)$, and perpendicularity gives $2(2 + 2s) - 5(1 - 5s) - 4(2 - 4s) = 45s - 9 = 0$, so $s = \\frac{1}{5}$ and $D = \\left(\\frac{17}{5}, 2, \\frac{21}{5}\\right)$. $BD^2 = \\left|\\left(\\frac{12}{5}, 0, \\frac{6}{5}\\right)\\right|^2 = \\frac{180}{25} = \\frac{36}{5}$. $AC = \\sqrt{45}$, $AD = \\frac{1}{5}\\sqrt{45}$ and $DC = \\frac{4}{5}\\sqrt{45}$, so $AD\\cdot DC = \\frac{4}{25}\\cdot 45 = \\frac{36}{5} = BD^2$.',
    steps: [
      { step: 'Shows $\\overrightarrow{BA}\\cdot\\overrightarrow{BC} = 0$', marks: 1 },
      { step: 'Finds the parameter $s = \\frac{1}{5}$ and the foot $D\\left(\\frac{17}{5}, 2, \\frac{21}{5}\\right)$', marks: 1 },
      { step: 'Computes $BD^2 = \\frac{36}{5}$ and $AD\\cdot DC = \\frac{36}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-c08', chapter: C, topic: ANG, type: 'short', complexity: 'hard', marks: 3,
    text: 'Two lines through a point $P$ have direction ratios $2, 3, 6$ and $6, 2, 3$. Find the acute angle between them and the direction cosines of the line through $P$ that bisects this acute angle.',
    answer: 'The unit vectors along the lines are $\\frac{1}{7}(2, 3, 6)$ and $\\frac{1}{7}(6, 2, 3)$. Their dot product is $\\frac{12 + 6 + 18}{49} = \\frac{36}{49} > 0$, so the acute angle is $\\cos^{-1}\\left(\\frac{36}{49}\\right)$. The bisector of the acute angle is along the sum of the unit vectors, $\\frac{1}{7}(8, 5, 9)$, with direction ratios $8, 5, 9$. As $\\sqrt{64 + 25 + 81} = \\sqrt{170}$, the direction cosines are $\\frac{8}{\\sqrt{170}}, \\frac{5}{\\sqrt{170}}, \\frac{9}{\\sqrt{170}}$.',
    steps: [
      { step: 'Finds the acute angle $\\cos^{-1}\\left(\\frac{36}{49}\\right)$', marks: 1 },
      { step: 'Adds the two unit vectors to get the bisector direction $(8, 5, 9)$', marks: 1 },
      { step: 'Normalises to the direction cosines $\\frac{8}{\\sqrt{170}}, \\frac{5}{\\sqrt{170}}, \\frac{9}{\\sqrt{170}}$', marks: 1 },
    ],
  },
  // ---------------- Section D ----------------
  {
    id: 'c12-3d-r4-d01', chapter: C, topic: DC, type: 'long', complexity: 'hard', marks: 5,
    text: 'A line $L$ is perpendicular to the line with direction ratios $2, 3, -2$ and makes equal angles with the positive $y$-axis and the positive $z$-axis. (a) Find the direction cosines of $L$. (b) Find the acute angle that $L$ makes with the $x$-axis. (c) Write the Cartesian equation of the line through $P(1, -2, 3)$ parallel to $L$.',
    answer: '(a) Let the direction cosines be $l, m, n$. Equal angles with the positive $y$- and $z$-axes give $m = n$. Perpendicularity to $(2, 3, -2)$ gives $2l + 3m - 2n = 0$, so $2l + m = 0$ and $l = -\\frac{m}{2}$. Then $l^2 + m^2 + n^2 = \\frac{m^2}{4} + 2m^2 = \\frac{9m^2}{4} = 1$, so $m = \\pm\\frac{2}{3}$. The direction cosines are $-\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}$ (or all signs reversed, which is the same line). (b) $|\\cos\\alpha| = \\frac{1}{3}$, so the acute angle with the $x$-axis is $\\cos^{-1}\\left(\\frac{1}{3}\\right)$. (c) Direction ratios $-1, 2, 2$, so $\\frac{x-1}{-1} = \\frac{y+2}{2} = \\frac{z-3}{2}$.',
    steps: [
      { step: 'Writes $m = n$ and $2l + 3m - 2n = 0$', marks: 1 },
      { step: 'Solves to $l = -\\frac{m}{2}$', marks: 1 },
      { step: 'Uses $l^2 + m^2 + n^2 = 1$ to get the direction cosines $-\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}$', marks: 1 },
      { step: 'Finds the acute angle $\\cos^{-1}\\left(\\frac{1}{3}\\right)$ with the $x$-axis', marks: 1 },
      { step: 'Writes the Cartesian equation $\\frac{x-1}{-1} = \\frac{y+2}{2} = \\frac{z-3}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d02', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'The points $A(-1, 2, 0)$, $B(5, -1, 6)$, $C(-2, -2, -1)$ and $D(3, 3, 4)$ are given. Show that the lines $AB$ and $CD$ intersect, find their point of intersection, the ratio in which it divides each of $AB$ and $CD$, and the acute angle between the lines.',
    answer: '$\\overrightarrow{AB} = (6, -3, 6)$ and $\\overrightarrow{CD} = (5, 5, 5)$. Points of $AB$ are $(-1 + 6\\lambda, 2 - 3\\lambda, 6\\lambda)$ and points of $CD$ are $(-2 + 5\\mu, -2 + 5\\mu, -1 + 5\\mu)$. Equating $x$ and $y$: $-1 + 6\\lambda = 2 - 3\\lambda$ gives $\\lambda = \\frac{1}{3}$, and then $-1 + 2 = 1 = -2 + 5\\mu$ gives $\\mu = \\frac{3}{5}$. The $z$ values are $6\\cdot\\frac{1}{3} = 2$ and $-1 + 3 = 2$, equal, so the lines intersect at $X(1, 1, 2)$. On $AB$, $AX : XB = \\frac{1}{3} : \\frac{2}{3} = 1 : 2$ (internally). On $CD$, $CX : XD = \\frac{3}{5} : \\frac{2}{5} = 3 : 2$ (internally). The angle: $\\cos\\theta = \\frac{|2\\cdot 1 - 1\\cdot 1 + 2\\cdot 1|}{3\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$, so $\\theta = \\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$.',
    steps: [
      { step: 'Writes general points of $AB$ and $CD$', marks: 1 },
      { step: 'Solves two coordinates to get $\\lambda = \\frac{1}{3}$, $\\mu = \\frac{3}{5}$', marks: 1 },
      { step: 'Checks the third coordinate and states the point $(1, 1, 2)$', marks: 1 },
      { step: 'Finds the ratios $1 : 2$ on $AB$ and $3 : 2$ on $CD$', marks: 1 },
      { step: 'Finds the angle $\\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d03', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $A$ be the point $(1, 0, 4)$ and let $L$ be the line $\\frac{x-2}{1} = \\frac{y+1}{2} = \\frac{z-4}{2}$. Find the point $B$ on $L$ for which $AB$ is perpendicular to the vector $\\hat{i} - 2\\hat{j}$. Write the Cartesian equation of the line $AB$, find the length $AB$, and find the angle between $AB$ and $L$.',
    answer: 'A point of $L$ is $B(2 + t, -1 + 2t, 4 + 2t)$, so $\\overrightarrow{AB} = (1 + t, -1 + 2t, 2t)$. $AB \\perp (1, -2, 0)$ gives $(1 + t) - 2(-1 + 2t) = 3 - 3t = 0$, so $t = 1$ and $B = (3, 1, 6)$. Then $\\overrightarrow{AB} = (2, 1, 2)$ and the line $AB$ is $\\frac{x-1}{2} = \\frac{y}{1} = \\frac{z-4}{2}$. $AB = \\sqrt{4 + 1 + 4} = 3$ units. The angle with $L$ (direction $(1, 2, 2)$, magnitude $3$): $\\cos\\theta = \\frac{2 + 2 + 4}{3\\cdot 3} = \\frac{8}{9}$, so $\\theta = \\cos^{-1}\\left(\\frac{8}{9}\\right)$.',
    steps: [
      { step: 'Writes $B$ and $\\overrightarrow{AB}$ in terms of $t$', marks: 1 },
      { step: 'Uses $\\overrightarrow{AB}\\cdot(1, -2, 0) = 0$ to get $t = 1$', marks: 1 },
      { step: 'States $B(3, 1, 6)$ and the equation of $AB$', marks: 1 },
      { step: 'Finds $AB = 3$', marks: 1 },
      { step: 'Finds the angle $\\cos^{-1}\\left(\\frac{8}{9}\\right)$ with $L$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d04', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'In triangle $RAC$ with $R(1, 0, 2)$, $A(5, 4, 4)$ and $C(5, -2, -2)$, show that the angle at $R$ is a right angle. Find the vector equation of the median $RM$ from $R$ to the side $AC$ and its length, and show that $MR = MA = MC$.',
    answer: '$\\overrightarrow{RA} = (4, 4, 2)$ and $\\overrightarrow{RC} = (4, -2, -4)$, with dot product $16 - 8 - 8 = 0$, so the angle at $R$ is $90^\\circ$. The midpoint of $AC$ is $M(5, 1, 1)$. $\\overrightarrow{RM} = (4, 1, -1)$, so the median is $\\vec{r} = (\\hat{i} + 2\\hat{k}) + \\lambda(4\\hat{i} + \\hat{j} - \\hat{k})$. Its length is $RM = \\sqrt{16 + 1 + 1} = 3\\sqrt{2}$. $AC = |(0, -6, -6)| = 6\\sqrt{2}$, so $MA = MC = 3\\sqrt{2}$, and hence $MR = MA = MC$: in a right triangle the midpoint of the hypotenuse is equidistant from all three vertices.',
    steps: [
      { step: 'Shows $\\overrightarrow{RA}\\cdot\\overrightarrow{RC} = 0$', marks: 1 },
      { step: 'Finds the midpoint $M(5, 1, 1)$', marks: 1 },
      { step: 'Writes the vector equation of $RM$ with direction $(4, 1, -1)$', marks: 1 },
      { step: 'Finds $RM = 3\\sqrt{2}$', marks: 1 },
      { step: 'Finds $MA = MC = 3\\sqrt{2}$ and concludes', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d05', chapter: C, topic: ANG, type: 'long', complexity: 'hard', marks: 5,
    text: 'The vertices of triangle $ABC$ are $A(1, -1, 2)$, $B(3, 0, 4)$ and $C(3, -5, 6)$. Find $AB$, $AC$ and the cosine of the angle at $A$. Find the Cartesian equation of the bisector of angle $A$, the point $D$ where it meets $BC$, and verify that $BD : DC = AB : AC$.',
    answer: '$\\overrightarrow{AB} = (2, 1, 2)$, $AB = 3$; $\\overrightarrow{AC} = (2, -4, 4)$, $AC = 6$. $\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = 4 - 4 + 8 = 8$, so $\\cos A = \\frac{8}{18} = \\frac{4}{9}$. The unit vectors along $AB$ and $AC$ are $\\left(\\frac{2}{3}, \\frac{1}{3}, \\frac{2}{3}\\right)$ and $\\left(\\frac{1}{3}, -\\frac{2}{3}, \\frac{2}{3}\\right)$; their sum $\\left(1, -\\frac{1}{3}, \\frac{4}{3}\\right)$ gives the direction ratios $3, -1, 4$ of the bisector. The bisector is $\\frac{x-1}{3} = \\frac{y+1}{-1} = \\frac{z-2}{4}$. Points of $BC$ are $(3, -5s, 4 + 2s)$ since $\\overrightarrow{BC} = (0, -5, 2)$. Equating with $(1 + 3k, -1 - k, 2 + 4k)$: $x$ gives $k = \\frac{2}{3}$; then $y = -\\frac{5}{3}$ gives $s = \\frac{1}{3}$, and $z = \\frac{14}{3}$ on both. So $D = \\left(3, -\\frac{5}{3}, \\frac{14}{3}\\right)$ and $BD : DC = \\frac{1}{3} : \\frac{2}{3} = 1 : 2 = 3 : 6 = AB : AC$.',
    steps: [
      { step: 'Finds $AB = 3$, $AC = 6$ and $\\cos A = \\frac{4}{9}$', marks: 1 },
      { step: 'Adds the unit vectors to get the bisector direction $(3, -1, 4)$', marks: 1 },
      { step: 'Writes the Cartesian equation of the bisector', marks: 1 },
      { step: 'Finds $D\\left(3, -\\frac{5}{3}, \\frac{14}{3}\\right)$ by intersecting with $BC$', marks: 1 },
      { step: 'Shows $BD : DC = 1 : 2 = AB : AC$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d06', chapter: C, topic: DC, type: 'long', complexity: 'hard', marks: 5,
    text: 'Three lines through a point have direction cosines $\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}$ for the first, $\\frac{2}{3}, \\frac{1}{3}, -\\frac{2}{3}$ for the second, and the third is perpendicular to both. (a) Show that the first two lines are perpendicular. (b) Find the direction cosines of the third line. (c) The segment $PQ$ joins $P(2, -1, 1)$ and $Q(5, -4, 13)$. Find the lengths of its projections on the three lines and verify that the sum of their squares equals $PQ^2$.',
    answer: '(a) $\\frac{1}{3}\\cdot\\frac{2}{3} + \\frac{2}{3}\\cdot\\frac{1}{3} + \\frac{2}{3}\\cdot\\left(-\\frac{2}{3}\\right) = \\frac{2 + 2 - 4}{9} = 0$. (b) Let the third have direction ratios $a, b, c$: $a + 2b + 2c = 0$ and $2a + b - 2c = 0$. Adding gives $3a + 3b = 0$, so $b = -a$, and then $c = \\frac{a}{2}$; taking $a = -2$ gives $(-2, 2, -1)$. As $\\sqrt{4 + 4 + 1} = 3$, the direction cosines are $-\\frac{2}{3}, \\frac{2}{3}, -\\frac{1}{3}$ (or all signs reversed). (c) $\\overrightarrow{PQ} = (3, -3, 12)$. The projections have lengths $\\left|\\frac{3 - 6 + 24}{3}\\right| = 7$, $\\left|\\frac{6 - 3 - 24}{3}\\right| = 7$ and $\\left|\\frac{-6 - 6 - 12}{3}\\right| = 8$. Their squares sum to $49 + 49 + 64 = 162$, and $PQ^2 = 9 + 9 + 144 = 162$.',
    steps: [
      { step: 'Shows the first two lines are perpendicular', marks: 1 },
      { step: 'Sets up two perpendicularity equations for the third line', marks: 1 },
      { step: 'Solves and normalises to the direction cosines $\\mp\\left(\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}\\right)$', marks: 1 },
      { step: 'Finds the three projection lengths $7, 7, 8$', marks: 1 },
      { step: 'Verifies $49 + 49 + 64 = 162 = PQ^2$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d07', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the shortest distance between the lines $L_1: \\vec{r} = (3\\hat{i} + \\hat{j} - 2\\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 6\\hat{k})$ and $L_2: \\frac{2x+2}{6} = \\frac{3-y}{6} = \\frac{3z-3}{6}$. Hence show that the lines are skew and also perpendicular to each other.',
    answer: 'Rewrite $L_2$: $\\frac{2x+2}{6} = \\frac{x+1}{3}$, $\\frac{3-y}{6} = \\frac{y-3}{-6}$ and $\\frac{3z-3}{6} = \\frac{z-1}{2}$, so $L_2$ is $\\frac{x+1}{3} = \\frac{y-3}{-6} = \\frac{z-1}{2}$, through $(-1, 3, 1)$ with direction $(3, -6, 2)$. For $L_1$: $\\vec{a}_1 = (3, 1, -2)$, $\\vec{b}_1 = (2, 3, 6)$. $\\vec{b}_1 \\times \\vec{b}_2 = (2, 3, 6) \\times (3, -6, 2) = (42, 14, -21)$ with magnitude $\\sqrt{1764 + 196 + 441} = 49$. $\\vec{a}_2 - \\vec{a}_1 = (-4, 2, 3)$ and the dot product is $-168 + 28 - 63 = -203$. The shortest distance is $\\frac{203}{49} = \\frac{29}{7}$ units. Since this is not zero (and the lines are not parallel), they are skew. Also $\\vec{b}_1\\cdot\\vec{b}_2 = 6 - 18 + 12 = 0$, so the lines are perpendicular.',
    steps: [
      { step: 'Rewrites $L_2$ as $\\frac{x+1}{3} = \\frac{y-3}{-6} = \\frac{z-1}{2}$ with direction $(3, -6, 2)$', marks: 1 },
      { step: 'Finds $\\vec{b}_1 \\times \\vec{b}_2 = (42, 14, -21)$ with magnitude $49$', marks: 1 },
      { step: 'Finds $(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2) = -203$', marks: 1 },
      { step: 'Gets the shortest distance $\\frac{29}{7}$', marks: 1 },
      { step: 'Concludes the lines are skew and shows $\\vec{b}_1\\cdot\\vec{b}_2 = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d08', chapter: C, topic: SD, type: 'long', complexity: 'medium', marks: 5,
    text: 'A cube of side $6$ has one vertex at $O(0, 0, 0)$ and the edges from $O$ along the positive axes, so that $A(6, 0, 0)$, $C(0, 6, 0)$ and the vertex opposite $O$ is $F(6, 6, 6)$. Find the shortest distance between the body diagonal $OF$ and the face diagonal $AC$ of the base. Find the points $P$ on $OF$ and $Q$ on $AC$ at which the shortest distance is attained, and verify the length of $PQ$.',
    answer: '$OF$ passes through $O$ with direction $(1, 1, 1)$; $AC$ passes through $A(6, 0, 0)$ with direction $\\overrightarrow{AC} = (-6, 6, 0)$, i.e. $(-1, 1, 0)$. $(1, 1, 1) \\times (-1, 1, 0) = (-1, -1, 2)$ with magnitude $\\sqrt{6}$. $\\overrightarrow{OA} = (6, 0, 0)$ and its dot product with the cross product is $-6$. The shortest distance is $\\frac{6}{\\sqrt{6}} = \\sqrt{6}$ units. For the feet take $P(s, s, s)$ and $Q(6 - u, u, 0)$, so $\\overrightarrow{PQ} = (6 - u - s, u - s, -s)$. $PQ \\perp (1, 1, 1)$ gives $6 - 3s = 0$, so $s = 2$. $PQ \\perp (-1, 1, 0)$ gives $-(6 - u - s) + (u - s) = 2u - 6 = 0$, so $u = 3$. Hence $P(2, 2, 2)$, $Q(3, 3, 0)$ and $\\overrightarrow{PQ} = (1, 1, -2)$ with length $\\sqrt{6}$, agreeing with the formula.',
    steps: [
      { step: 'Writes directions $(1, 1, 1)$ and $(-1, 1, 0)$ and the cross product $(-1, -1, 2)$ with magnitude $\\sqrt{6}$', marks: 1 },
      { step: 'Finds the dot product $-6$ and the distance $\\sqrt{6}$', marks: 1 },
      { step: 'Sets up $P(s, s, s)$, $Q(6 - u, u, 0)$ and the two perpendicularity conditions', marks: 1 },
      { step: 'Solves $s = 2$, $u = 3$ to get $P(2, 2, 2)$, $Q(3, 3, 0)$', marks: 1 },
      { step: 'Verifies $|PQ| = \\sqrt{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d09', chapter: C, topic: SD, type: 'long', complexity: 'hard', marks: 5,
    text: 'Consider the lines $L_1: \\frac{x-1}{2} = \\frac{y+1}{3} = \\frac{z-2}{6}$ and $L_2: \\frac{x+3}{6} = \\frac{y}{2} = \\frac{z-k}{-3}$. (a) Find the value of $k$ for which the lines intersect, and their point of intersection. (b) For $k = 18$, find the shortest distance between the lines.',
    answer: '$\\vec{a}_1 = (1, -1, 2)$, $\\vec{b}_1 = (2, 3, 6)$, $\\vec{a}_2 = (-3, 0, k)$, $\\vec{b}_2 = (6, 2, -3)$. $\\vec{b}_1 \\times \\vec{b}_2 = (-21, 42, -14)$ with magnitude $49$. $\\vec{a}_2 - \\vec{a}_1 = (-4, 1, k - 2)$ and the dot product is $84 + 42 - 14(k - 2) = 154 - 14k$. (a) The lines intersect when this is $0$, i.e. $k = 11$. Then points $(1 + 2\\lambda, -1 + 3\\lambda, 2 + 6\\lambda)$ and $(-3 + 6\\mu, 2\\mu, 11 - 3\\mu)$ coincide for $\\lambda = 1$, $\\mu = 1$, giving the point $(3, 2, 8)$. (b) For $k = 18$ the dot product is $154 - 252 = -98$, so the shortest distance is $\\frac{98}{49} = 2$ units.',
    steps: [
      { step: 'Finds $\\vec{b}_1 \\times \\vec{b}_2 = (-21, 42, -14)$ with magnitude $49$', marks: 1 },
      { step: 'Finds $(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2) = 154 - 14k$', marks: 1 },
      { step: 'Sets it to zero to get $k = 11$', marks: 1 },
      { step: 'Finds the point of intersection $(3, 2, 8)$', marks: 1 },
      { step: 'Finds the shortest distance $2$ for $k = 18$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d10', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'In triangle $PQR$, the vertex $P$ is $(7, 2, 0)$ and the vertices $Q$ and $R$ lie on the line $L: \\frac{x-1}{2} = \\frac{y+1}{2} = \\frac{z}{1}$, with $Q = (1, -1, 0)$ and $PQ = PR$. Find the foot $F$ of the perpendicular from $P$ to $L$, the coordinates of $R$, the length of $QR$ and the area of the triangle.',
    answer: 'A point of $L$ is $(1 + 2t, -1 + 2t, t)$, so $\\overrightarrow{PF} = (2t - 6, 2t - 3, t)$. Perpendicularity to $(2, 2, 1)$ gives $2(2t - 6) + 2(2t - 3) + t = 9t - 18 = 0$, so $t = 2$ and $F = (5, 3, 2)$, with $PF = |(-2, 1, 2)| = 3$. Since $PQ = PR$, $F$ is the midpoint of $QR$, so $R = 2F - Q = (9, 7, 4)$. $QR = |(8, 8, 4)| = 12$. The area is $\\frac{1}{2} \\cdot QR \\cdot PF = \\frac{1}{2}\\cdot 12 \\cdot 3 = 18$ square units. (Check: $PQ^2 = 36 + 9 + 0 = 45$ and $PR^2 = 4 + 25 + 16 = 45$.)',
    steps: [
      { step: 'Writes $\\overrightarrow{PF}$ for a general point of $L$', marks: 1 },
      { step: 'Gets $t = 2$ and $F(5, 3, 2)$', marks: 1 },
      { step: 'Uses the midpoint property to get $R(9, 7, 4)$', marks: 1 },
      { step: 'Finds $QR = 12$', marks: 1 },
      { step: 'Finds the area $18$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d11', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $L$ be the line $\\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-1}{2}$, and let $A(4, 2, 4)$ and $B(1, 5, 7)$ be two points. Find the images $A\'$ and $B\'$ of $A$ and $B$ in $L$. Show that $A\'B\' = AB$ and that the lines $AB$ and $A\'B\'$ make the same angle with $L$.',
    answer: 'The line passes through $(1, 2, 1)$ with direction $(1, 2, 2)$. For $A$: $\\overrightarrow{PA}$ from $(1 + t, 2 + 2t, 1 + 2t)$ is $(3 - t, -2t, 3 - 2t)$ and perpendicularity gives $(3 - t) - 4t + 2(3 - 2t) = 9 - 9t = 0$, so $t = 1$, the foot is $(2, 4, 3)$ and $A\' = 2(2, 4, 3) - (4, 2, 4) = (0, 6, 2)$. For $B$: the vector is $(-t, 3 - 2t, 6 - 2t)$ and perpendicularity gives $-t + 2(3 - 2t) + 2(6 - 2t) = 18 - 9t = 0$, so $t = 2$, the foot is $(3, 6, 5)$ and $B\' = 2(3, 6, 5) - (1, 5, 7) = (5, 7, 3)$. Then $\\overrightarrow{AB} = (-3, 3, 3)$ and $\\overrightarrow{A\'B\'} = (5, 1, 1)$, with $|AB|^2 = 27 = |A\'B\'|^2$, so $A\'B\' = AB = 3\\sqrt{3}$. With $L$ of direction $(1, 2, 2)$ (magnitude $3$): $\\overrightarrow{AB}\\cdot(1, 2, 2) = -3 + 6 + 6 = 9$ and $\\overrightarrow{A\'B\'}\\cdot(1, 2, 2) = 5 + 2 + 2 = 9$. Both lines have $\\cos\\theta = \\frac{9}{3\\sqrt{3}\\cdot 3} = \\frac{1}{\\sqrt{3}}$, so they make equal angles with $L$.',
    steps: [
      { step: 'Finds the foot $(2, 4, 3)$ and the image $A\'(0, 6, 2)$', marks: 1 },
      { step: 'Finds the foot $(3, 6, 5)$ and the image $B\'(5, 7, 3)$', marks: 1 },
      { step: 'Shows $|AB|^2 = |A\'B\'|^2 = 27$', marks: 1 },
      { step: 'Computes both dot products with $(1, 2, 2)$ as $9$', marks: 1 },
      { step: 'Gets $\\cos\\theta = \\frac{1}{\\sqrt{3}}$ for both and concludes', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d12', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'A cable is to run from a station $A(4, 2, 4)$ to a point $P$ on a straight pipeline $L: \\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-1}{2}$, and then on to a station $B(8, 10, 12)$. The points $A$, $B$ and the pipeline lie in one plane and $A$, $B$ are on the same side of the pipeline. Find the point $P$ for which the total length $AP + PB$ is least, and find this least length.',
    answer: 'The foot of the perpendicular from $A$ to $L$: for $(1 + t, 2 + 2t, 1 + 2t)$ the vector to $A$ is $(3 - t, -2t, 3 - 2t)$, and perpendicularity to $(1, 2, 2)$ gives $9 - 9t = 0$, so $t = 1$ and the foot is $(2, 4, 3)$. The image of $A$ in $L$ is $A\' = (0, 6, 2)$. For every $P$ on $L$, $AP = A\'P$, so $AP + PB = A\'P + PB \\geq A\'B$, with equality when $P$ lies on the segment $A\'B$. $\\overrightarrow{A\'B} = (8, 4, 10)$, so the points of the line $A\'B$ are $(8m, 6 + 4m, 2 + 10m)$. Setting equal to $(1 + t, 2 + 2t, 1 + 2t)$: $m = \\frac{1}{2}$ gives $(4, 8, 7)$, and $t = 3$ gives $(4, 8, 7)$ on $L$ as well. So $P = (4, 8, 7)$. The least length is $A\'B = |(8, 4, 10)| = \\sqrt{64 + 16 + 100} = \\sqrt{180} = 6\\sqrt{5}$ units. (Check: $AP = |(0, 6, 3)| = \\sqrt{45}$ and $PB = |(4, 2, 5)| = \\sqrt{45}$, total $2\\sqrt{45} = 6\\sqrt{5}$.)',
    steps: [
      { step: 'Finds the foot $(2, 4, 3)$ of the perpendicular from $A$ to $L$', marks: 1 },
      { step: 'Finds the image $A\'(0, 6, 2)$', marks: 1 },
      { step: 'Argues $AP + PB = A\'P + PB \\geq A\'B$, least when $P$ is on $A\'B$', marks: 1 },
      { step: 'Finds $P = (4, 8, 7)$ where $A\'B$ meets $L$', marks: 1 },
      { step: 'Finds the least length $6\\sqrt{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d13', chapter: C, topic: FT, type: 'long', complexity: 'hard', marks: 5,
    text: 'A line $L$ passes through $A(0, 1, 1)$ and has direction ratios $1, p, 2$. The foot of the perpendicular from $P(4, 3, 6)$ to $L$ has $x$-coordinate $2$. Find the possible values of $p$, and for each the foot of the perpendicular and the perpendicular distance of $P$ from $L$.',
    answer: 'Points of $L$ are $(t, 1 + pt, 1 + 2t)$. The foot has $x = 2$, so $F = (2, 1 + 2p, 5)$. Then $\\overrightarrow{PF} = (-2, 2p - 2, -1)$. Perpendicularity to $(1, p, 2)$ gives $-2 + p(2p - 2) - 2 = 2p^2 - 2p - 4 = 0$, i.e. $p^2 - p - 2 = 0$, so $p = 2$ or $p = -1$. For $p = 2$: $F = (2, 5, 5)$, $\\overrightarrow{PF} = (-2, 2, -1)$ and the distance is $3$. For $p = -1$: $F = (2, -1, 5)$, $\\overrightarrow{PF} = (-2, -4, -1)$ and the distance is $\\sqrt{21}$.',
    steps: [
      { step: 'Writes the foot as $(2, 1 + 2p, 5)$ using $x = 2$', marks: 1 },
      { step: 'Writes $\\overrightarrow{PF}$ and applies perpendicularity to get $2p^2 - 2p - 4 = 0$', marks: 1 },
      { step: 'Solves $p = 2$ or $p = -1$', marks: 1 },
      { step: 'Finds the feet $(2, 5, 5)$ and $(2, -1, 5)$', marks: 1 },
      { step: 'Finds the distances $3$ and $\\sqrt{21}$', marks: 1 },
    ],
  },
  {
    id: 'c12-3d-r4-d14', chapter: C, topic: FT, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $L$ be the line $\\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-1}{2}$ and $M$ be the line $\\frac{x-4}{1} = \\frac{y-2}{2} = \\frac{z-4}{2}$. Show that $M$ is parallel to $L$ and find the distance between them. Find the Cartesian equation of the image of $M$ in $L$ and the distance between $M$ and its image.',
    answer: 'Both lines have direction ratios $1, 2, 2$, so they are parallel. $L$ passes through $(1, 2, 1)$ and $M$ through $A(4, 2, 4)$. $\\overrightarrow{PA} = (3, 0, 3)$ and $(3, 0, 3) \\times (1, 2, 2) = (-6, -3, 6)$ with magnitude $9$, so the distance is $\\frac{9}{3} = 3$ units. The image of $M$ in $L$ is a line parallel to $L$, found from the image of the point $A$. For $(1 + t, 2 + 2t, 1 + 2t)$, perpendicularity gives $9 - 9t = 0$, $t = 1$, the foot is $(2, 4, 3)$ and the image of $A$ is $(0, 6, 2)$. The image line is $\\frac{x}{1} = \\frac{y-6}{2} = \\frac{z-2}{2}$. The distance between $M$ and its image is twice the distance from $M$ to $L$, i.e. $6$ units ($L$ lies midway).',
    steps: [
      { step: 'Shows $M \\parallel L$ (equal direction ratios)', marks: 1 },
      { step: 'Finds the distance $3$ between $L$ and $M$', marks: 1 },
      { step: 'Finds the foot $(2, 4, 3)$ of the perpendicular from $A$ to $L$', marks: 1 },
      { step: 'Finds the image of $M$: $\\frac{x}{1} = \\frac{y-6}{2} = \\frac{z-2}{2}$', marks: 1 },
      { step: 'States the distance $6$ between $M$ and its image', marks: 1 },
    ],
  },
  // ---------------- Section E ----------------
  {
    id: 'c12-3d-r4-e01', chapter: C, topic: DC, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A tracking antenna stands at the origin $O$ of a coordinate system whose $z$-axis is vertical (distances in km). A weather balloon is at $P(-6, 2, 3)$ and a drone is at $Q(2, 3, 6)$.',
    answer: '(i) $-\\frac{6}{7}, \\frac{2}{7}, \\frac{3}{7}$. (ii) $\\cos^{-1}\\left(\\frac{3}{7}\\right)$. (iii) $\\cos^{-1}\\left(\\frac{12}{49}\\right)$; OR $\\frac{12}{7}$ km.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the direction cosines of the line $OP$.', answer: '$OP = \\sqrt{36 + 4 + 9} = 7$, so the direction cosines are $-\\frac{6}{7}, \\frac{2}{7}, \\frac{3}{7}$.' },
      { label: '(ii)', marks: 1, text: 'Find the angle that the line $OP$ makes with the vertical.', answer: 'The vertical is the $z$-axis, so $\\cos\\gamma = n = \\frac{3}{7}$ and the angle is $\\cos^{-1}\\left(\\frac{3}{7}\\right)$.' },
      { label: '(iii)', marks: 2, text: 'Find the acute angle between the lines $OP$ and $OQ$.\nOR\nFind the length of the projection of $OQ$ on the line $OP$.', answer: '$\\overrightarrow{OP}\\cdot\\overrightarrow{OQ} = -12 + 6 + 18 = 12$ and $|OP| = |OQ| = 7$ (1 mark). So $\\cos\\theta = \\frac{12}{49}$ and the acute angle is $\\cos^{-1}\\left(\\frac{12}{49}\\right)$ (1 mark).\nOR: the projection of $OQ$ on $OP$ is $\\frac{|\\overrightarrow{OQ}\\cdot\\overrightarrow{OP}|}{|OP|} = \\frac{12}{7}$ km (2 marks: 1 for the dot product and the magnitude, 1 for the result).' },
    ],
  },
  {
    id: 'c12-3d-r4-e02', chapter: C, topic: SD, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In an amusement park two straight rails are laid. Taking a point on the ground as the origin with the $z$-axis vertical and distances in metres, rail 1 is along $\\vec{r} = (\\hat{i} + 3\\hat{j} + 10\\hat{k}) + \\lambda(2\\hat{i} + \\hat{j} - 2\\hat{k})$ and rail 2 is along $\\vec{r} = (\\hat{i} + 8\\hat{j} + 2\\hat{k}) + \\mu(\\hat{i} + 2\\hat{j} + 2\\hat{k})$. A support strut will join the two rails along the shortest possible link.',
    answer: '(i) The rails are perpendicular. (ii) $(6, -6, 3)$, magnitude $9$. (iii) $6$ m; OR the strut meets rail 1 at $\\left(\\frac{17}{3}, \\frac{16}{3}, \\frac{16}{3}\\right)$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Show that the two rails are perpendicular to each other.', answer: '$(2, 1, -2)\\cdot(1, 2, 2) = 2 + 2 - 4 = 0$, so the rails are perpendicular.' },
      { label: '(ii)', marks: 1, text: 'Find $\\vec{b}_1 \\times \\vec{b}_2$ and its magnitude.', answer: '$(2, 1, -2) \\times (1, 2, 2) = (1\\cdot 2 - (-2)\\cdot 2,\\ -2\\cdot 1 - 2\\cdot 2,\\ 2\\cdot 2 - 1\\cdot 1) = (6, -6, 3)$, with magnitude $\\sqrt{36 + 36 + 9} = 9$.' },
      { label: '(iii)', marks: 2, text: 'Find the length of the shortest strut.\nOR\nFind the point where the shortest strut meets rail 1.', answer: '$\\vec{a}_2 - \\vec{a}_1 = (0, 5, -8)$ and its dot product with $(6, -6, 3)$ is $-30 - 24 = -54$ (1 mark). The shortest distance is $\\frac{54}{9} = 6$ m (1 mark).\nOR: with $P_1 = (1 + 2\\lambda, 3 + \\lambda, 10 - 2\\lambda)$ on rail 1 and $P_2 = (1 + \\mu, 8 + 2\\mu, 2 + 2\\mu)$ on rail 2, $\\overrightarrow{P_1P_2}$ is perpendicular to both rails: $2(\\mu - 2\\lambda) + (5 + 2\\mu - \\lambda) - 2(-8 + 2\\mu + 2\\lambda) = 21 - 9\\lambda = 0$ and $(\\mu - 2\\lambda) + 2(5 + 2\\mu - \\lambda) + 2(-8 + 2\\mu + 2\\lambda) = 9\\mu - 6 = 0$. So $\\lambda = \\frac{7}{3}$, $\\mu = \\frac{2}{3}$ (1 mark) and $P_1 = \\left(\\frac{17}{3}, \\frac{16}{3}, \\frac{16}{3}\\right)$ (1 mark).' },
    ],
  },
  {
    id: 'c12-3d-r4-e03', chapter: C, topic: FT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A robotic arm turns a tool through a half-turn ($180^\\circ$) about a straight rod passing through $A(1, -1, 2)$ and $B(3, 1, 3)$ (distances in metres). The tip of the tool starts at $P(5, 0, 1)$.',
    answer: '(i) $\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + \\lambda(2\\hat{i} + 2\\hat{j} + \\hat{k})$. (ii) $F(3, 1, 3)$, radius $3$ m. (iii) $(1, 2, 5)$; OR $3\\pi$ m.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the vector equation of the rod.', answer: '$\\overrightarrow{AB} = (2, 2, 1)$, so $\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + \\lambda(2\\hat{i} + 2\\hat{j} + \\hat{k})$.' },
      { label: '(ii)', marks: 1, text: 'Find the foot $F$ of the perpendicular from $P$ to the rod and the radius of the circle in which the tip moves.', answer: 'For $(1 + 2\\lambda, -1 + 2\\lambda, 2 + \\lambda)$, $\\overrightarrow{PF} = (2\\lambda - 4, 2\\lambda - 1, \\lambda + 1)$ and perpendicularity gives $2(2\\lambda - 4) + 2(2\\lambda - 1) + (\\lambda + 1) = 9\\lambda - 9 = 0$, so $\\lambda = 1$ and $F = (3, 1, 3)$. The radius is $PF = |(-2, 1, 2)| = 3$ m.' },
      { label: '(iii)', marks: 2, text: 'Find the final position of the tip after the half-turn.\nOR\nFind the length of the path travelled by the tip.', answer: 'A half-turn about the rod takes $P$ to its image in the rod, so the final position is $2F - P = (6 - 5, 2 - 0, 6 - 1) = (1, 2, 5)$ (2 marks: 1 for using the midpoint property, 1 for the result).\nOR: the tip travels along half of a circle of radius $3$ m (1 mark), so the length is $\\pi \\times 3 = 3\\pi$ m $\\approx 9.42$ m (1 mark).' },
    ],
  },
  {
    id: 'c12-3d-r4-e04', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A railway line runs straight from $A(1, 2, -1)$ to $B(5, 6, 1)$ (distances in units of $100$ m). A road passes through $C(7, 6, -2)$ in the direction $2\\hat{i} + \\hat{j} - \\hat{k}$.',
    answer: '(i) $\\vec{r} = (\\hat{i} + 2\\hat{j} - \\hat{k}) + \\lambda(2\\hat{i} + 2\\hat{j} + \\hat{k})$. (ii) They cross at $(3, 4, 0)$. (iii) $k = 1$; OR $\\cos^{-1}\\left(\\frac{5}{3\\sqrt{6}}\\right)$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the vector equation of the railway line.', answer: '$\\overrightarrow{AB} = (4, 4, 2)$, which has direction ratios $2, 2, 1$, so $\\vec{r} = (\\hat{i} + 2\\hat{j} - \\hat{k}) + \\lambda(2\\hat{i} + 2\\hat{j} + \\hat{k})$.' },
      { label: '(ii)', marks: 1, text: 'Show that the road meets the railway line and find the point where they cross.', answer: 'The railway has points $(1 + 2\\lambda, 2 + 2\\lambda, -1 + \\lambda)$ and the road has points $(7 + 2u, 6 + u, -2 - u)$. Taking $\\lambda = 1$ gives $(3, 4, 0)$, and $u = -2$ gives $(7 - 4, 6 - 2, -2 + 2) = (3, 4, 0)$ as well, so they meet at $(3, 4, 0)$.' },
      { label: '(iii)', marks: 2, text: 'The road is to be re-laid through the crossing point with direction ratios $1, k, -4$ so that it is perpendicular to the railway. Find $k$.\nOR\nFind the acute angle between the existing road and the railway line.', answer: 'Perpendicularity: $(2, 2, 1)\\cdot(1, k, -4) = 2 + 2k - 4 = 0$ (1 mark), so $k = 1$ (1 mark).\nOR: $\\cos\\theta = \\frac{|4 + 2 - 1|}{3\\sqrt{6}} = \\frac{5}{3\\sqrt{6}}$ (1 mark), so $\\theta = \\cos^{-1}\\left(\\frac{5}{3\\sqrt{6}}\\right)$ (1 mark).' },
    ],
  },
];
