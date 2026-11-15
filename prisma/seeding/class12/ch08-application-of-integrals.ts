import type { Class12Question } from './types.js';

const C = 'Application of Integrals';
const U = 'Area under simple curves';
const B = 'Area bounded by a curve and lines';

export const CH08_AOI: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-aoi-a01', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the line $y = 2x$, the x-axis and the ordinates $x = 0$ and $x = 3$ is',
    options: ['$9$ sq units', '$18$ sq units', '$6$ sq units', '$3$ sq units'],
    answer: 'Correct option: A) $9$ sq units. Area $= \\int_{0}^{3} 2x \\, dx = [x^{2}]_{0}^{3} = 9$. $18$ forgets the factor $\\frac{1}{2}$ from integrating $x$, and $6$ is just the height of the line at $x = 3$.',
  },
  {
    id: 'c12-aoi-a02', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\sqrt{x}$, the x-axis and the line $x = 9$ is',
    options: ['$18$ sq units', '$27$ sq units', '$9$ sq units', '$36$ sq units'],
    answer: 'Correct option: A) $18$ sq units. Area $= \\int_{0}^{9} x^{1/2} \\, dx = \\frac{2}{3}[x^{3/2}]_{0}^{9} = \\frac{2}{3} \\times 27 = 18$. $27$ drops the factor $\\frac{2}{3}$, and $36$ wrongly includes the lower half of $y^{2} = x$, which is not part of $y = \\sqrt{x}$.',
  },
  {
    id: 'c12-aoi-a03', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the parabola $y^{2} = 8x$ and the line $x = 2$ is',
    options: ['$\\frac{16}{3}$ sq units', '$\\frac{32}{3}$ sq units', '$\\frac{8}{3}$ sq units', '$\\frac{64}{3}$ sq units'],
    answer: 'Correct option: B) $\\frac{32}{3}$ sq units. The region is symmetric about the x-axis, so area $= 2\\int_{0}^{2} \\sqrt{8x} \\, dx = 2 \\times 2\\sqrt{2} \\times \\frac{2}{3}[x^{3/2}]_{0}^{2} = 2 \\times 2\\sqrt{2} \\times \\frac{2}{3} \\times 2\\sqrt{2} = \\frac{32}{3}$. $\\frac{16}{3}$ is only the part above the x-axis.',
  },
  {
    id: 'c12-aoi-a04', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the curve $x = y^{2}$, the y-axis and the lines $y = 0$ and $y = 3$ is',
    options: ['$27$ sq units', '$18$ sq units', '$9$ sq units', '$3$ sq units'],
    answer: 'Correct option: C) $9$ sq units. Using horizontal strips, area $= \\int_{0}^{3} y^{2} \\, dy = \\frac{1}{3}[y^{3}]_{0}^{3} = 9$. $27$ forgets to divide by $3$, and $18$ doubles the area as if the region were symmetric about the y-axis.',
  },
  {
    id: 'c12-aoi-a05', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region in the first quadrant bounded by the curve $y = x^{2}$, the y-axis and the lines $y = 1$ and $y = 4$ is given by',
    options: ['$\\int_{1}^{4} y^{2} \\, dy$', '$\\int_{1}^{2} x^{2} \\, dx$', '$\\int_{1}^{4} \\sqrt{y} \\, dy$', '$\\int_{1}^{4} x^{2} \\, dx$'],
    answer: 'Correct option: C) $\\int_{1}^{4} \\sqrt{y} \\, dy$. The region lies between the y-axis and the curve, so we use horizontal strips of length $x = \\sqrt{y}$ from $y = 1$ to $y = 4$ (its value is $\\frac{14}{3}$). $\\int_{1}^{2} x^{2} \\, dx$ is the area between the curve and the x-axis, a different region.',
  },
  {
    id: 'c12-aoi-a06', chapter: C, topic: B, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The area of the region enclosed by the line $\\frac{x}{4} + \\frac{y}{3} = 1$ and the coordinate axes is $6$ sq units.\nReason (R): The line $\\frac{x}{4} + \\frac{y}{3} = 1$ meets the coordinate axes at $(3, 0)$ and $(0, 4)$.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: C) A is true, but R is false. The line meets the axes at $(4, 0)$ and $(0, 3)$, so R is false. Area $= \\int_{0}^{4} 3\\left(1 - \\frac{x}{4}\\right) dx = 3\\left[x - \\frac{x^{2}}{8}\\right]_{0}^{4} = 3 \\times 2 = 6$, so A is true.',
  },
  {
    id: 'c12-aoi-a07', chapter: C, topic: B, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region enclosed by the parabola $y = x^{2}$ and the line $y = 4$ is',
    options: ['$\\frac{16}{3}$ sq units', '$16$ sq units', '$\\frac{32}{3}$ sq units', '$\\frac{64}{3}$ sq units'],
    answer: 'Correct option: C) $\\frac{32}{3}$ sq units. The line meets the parabola at $x = \\pm 2$, so area $= \\int_{-2}^{2} (4 - x^{2}) \\, dx = 16 - \\frac{16}{3} = \\frac{32}{3}$. $\\frac{16}{3}$ is only one half of the region, and $16$ is the rectangle $4 \\times 4$ without removing the area under the parabola.',
  },
  {
    id: 'c12-aoi-a08', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the curve $y = x|x|$, the x-axis and the ordinates $x = -3$ and $x = 3$ is',
    options: ['$0$', '$9$ sq units', '$18$ sq units', '$36$ sq units'],
    answer: 'Correct option: C) $18$ sq units. For $x \\ge 0$, $y = x^{2}$, and for $x < 0$, $y = -x^{2}$, so the two parts are equal in size, one above and one below the x-axis. Area $= 2\\int_{0}^{3} x^{2} \\, dx = 2 \\times 9 = 18$. $0$ is the signed integral, which is not an area.',
  },
  {
    id: 'c12-aoi-a09', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\cos x$ and the x-axis between $x = 0$ and $x = \\pi$ is',
    options: ['$0$', '$1$ sq unit', '$\\pi$ sq units', '$2$ sq units'],
    answer: 'Correct option: D) $2$ sq units. $\\cos x \\ge 0$ on $[0, \\frac{\\pi}{2}]$ and $\\le 0$ on $[\\frac{\\pi}{2}, \\pi]$. Area $= \\int_{0}^{\\pi/2} \\cos x \\, dx + \\left|\\int_{\\pi/2}^{\\pi} \\cos x \\, dx\\right| = 1 + 1 = 2$. $0$ comes from integrating straight across, and $1$ counts only one part.',
  },
  {
    id: 'c12-aoi-a10', chapter: C, topic: B, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by $y = |x - 2|$, the x-axis and the lines $x = 0$ and $x = 3$ is',
    options: ['$\\frac{3}{2}$ sq units', '$\\frac{5}{2}$ sq units', '$2$ sq units', '$4$ sq units'],
    answer: 'Correct option: B) $\\frac{5}{2}$ sq units. Area $= \\int_{0}^{2} (2 - x) \\, dx + \\int_{2}^{3} (x - 2) \\, dx = 2 + \\frac{1}{2} = \\frac{5}{2}$. $\\frac{3}{2}$ comes from integrating $x - 2$ without the modulus and dropping the sign, and $2$ counts only the part from $0$ to $2$.',
  },
  {
    id: 'c12-aoi-a11', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the part of the ellipse $\\frac{x^{2}}{16} + \\frac{y^{2}}{9} = 1$ lying in the first quadrant is',
    options: ['$12\\pi$ sq units', '$3\\pi$ sq units', '$6\\pi$ sq units', '$12$ sq units'],
    answer: 'Correct option: B) $3\\pi$ sq units. In the first quadrant $y = \\frac{3}{4}\\sqrt{16 - x^{2}}$, so area $= \\frac{3}{4}\\int_{0}^{4} \\sqrt{16 - x^{2}} \\, dx = \\frac{3}{4} \\times 4\\pi = 3\\pi$. $12\\pi$ is the whole ellipse and $6\\pi$ is half of it.',
  },
  {
    id: 'c12-aoi-a12', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\sqrt{4 - x^{2}}$, the x-axis and the lines $x = 0$ and $x = 2$ is',
    options: ['$\\frac{\\pi}{2}$ sq units', '$\\pi$ sq units', '$2\\pi$ sq units', '$4\\pi$ sq units'],
    answer: 'Correct option: B) $\\pi$ sq units. The region is a quarter of a circle of radius $2$. Using $\\int \\sqrt{a^{2} - x^{2}} \\, dx = \\frac{x}{2}\\sqrt{a^{2} - x^{2}} + \\frac{a^{2}}{2}\\sin^{-1}\\frac{x}{a}$, the value is $2 \\times \\frac{\\pi}{2} = \\pi$. $2\\pi$ is the semicircle and $4\\pi$ the full circle.',
  },
  {
    id: 'c12-aoi-a13', chapter: C, topic: U, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The area of the region bounded by the curve $y = \\sin x$ and the x-axis between $x = 0$ and $x = 2\\pi$ is $4$ sq units.\nReason (R): When a curve lies below the x-axis over part of an interval, the area of that part equals the absolute value of the definite integral over that part.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. $\\int_{0}^{\\pi} \\sin x \\, dx = 2$ and $\\int_{\\pi}^{2\\pi} \\sin x \\, dx = -2$. By R the second part contributes $|-2| = 2$, so the area is $2 + 2 = 4$.',
  },
  {
    id: 'c12-aoi-a14', chapter: C, topic: B, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The area of the region enclosed by the parabola $y = x^{2}$ and the line $y = k$ ($k > 0$) is $36$ sq units. The value of $k$ is',
    options: ['$3$', '$6$', '$9$', '$27$'],
    answer: 'Correct option: C) $9$. The line meets the parabola at $x = \\pm\\sqrt{k}$. Area $= 2\\int_{0}^{\\sqrt{k}} (k - x^{2}) \\, dx = 2\\left(k^{3/2} - \\frac{k^{3/2}}{3}\\right) = \\frac{4}{3}k^{3/2}$. Setting this to $36$ gives $k^{3/2} = 27$, so $k = 9$. $27$ is the value of $k^{3/2}$, not $k$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-aoi-b01', chapter: C, topic: B, type: 'short', complexity: 'easy', marks: 2,
    text: 'Using integration, find the area of the region bounded by the line $x = 2y + 1$, the y-axis and the lines $y = 0$ and $y = 2$.',
    answer: 'For $0 \\le y \\le 2$ the line has $x = 2y + 1 > 0$, so the region lies to the right of the y-axis. Using horizontal strips, area $= \\int_{0}^{2} (2y + 1) \\, dy = [y^{2} + y]_{0}^{2} = 4 + 2 = 6$. The required area is $6$ sq units.',
    steps: [
      { step: 'Writes the area as $\\int_{0}^{2} (2y + 1) \\, dy$', marks: 1 },
      { step: 'Evaluates to get $6$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-b02', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using integration, find the area of the region bounded by the ellipse $\\frac{x^{2}}{9} + \\frac{y^{2}}{4} = 1$ and the x-axis, lying above the x-axis.',
    answer: 'Above the x-axis, $y = \\frac{2}{3}\\sqrt{9 - x^{2}}$ for $-3 \\le x \\le 3$. Area $= \\int_{-3}^{3} \\frac{2}{3}\\sqrt{9 - x^{2}} \\, dx = \\frac{4}{3}\\int_{0}^{3} \\sqrt{9 - x^{2}} \\, dx = \\frac{4}{3}\\left[\\frac{x}{2}\\sqrt{9 - x^{2}} + \\frac{9}{2}\\sin^{-1}\\frac{x}{3}\\right]_{0}^{3} = \\frac{4}{3} \\times \\frac{9\\pi}{4} = 3\\pi$. The required area is $3\\pi$ sq units.',
    steps: [
      { step: 'Writes $y = \\frac{2}{3}\\sqrt{9 - x^{2}}$ and the area as $\\frac{4}{3}\\int_{0}^{3} \\sqrt{9 - x^{2}} \\, dx$ (or over $-3$ to $3$)', marks: 1 },
      { step: 'Integrates correctly and gets $3\\pi$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-b03', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the area of the region in the first quadrant bounded by the parabola $y^{2} = 9x$, the x-axis and the line $x = 4$.',
    answer: 'In the first quadrant $y = 3\\sqrt{x}$. Area $= \\int_{0}^{4} 3\\sqrt{x} \\, dx = 3 \\times \\frac{2}{3}[x^{3/2}]_{0}^{4} = 2 \\times 8 = 16$. The required area is $16$ sq units.',
    steps: [
      { step: 'Writes $y = 3\\sqrt{x}$ and the area as $\\int_{0}^{4} 3\\sqrt{x} \\, dx$', marks: 1 },
      { step: 'Evaluates to get $16$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-b04', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using integration, find the area of the region bounded by the curve $y = |x + 1|$, the x-axis and the lines $x = -3$ and $x = 1$.',
    answer: 'For $x < -1$, $y = -(x + 1)$; for $x \\ge -1$, $y = x + 1$. Area $= \\int_{-3}^{-1} -(x + 1) \\, dx + \\int_{-1}^{1} (x + 1) \\, dx = \\left[-\\frac{x^{2}}{2} - x\\right]_{-3}^{-1} + \\left[\\frac{x^{2}}{2} + x\\right]_{-1}^{1} = 2 + 2 = 4$. The required area is $4$ sq units.',
    steps: [
      { step: 'Splits the modulus at $x = -1$ and writes the two integrals', marks: 1 },
      { step: 'Evaluates each as $2$ and gets total area $4$ sq units', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-aoi-c01', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 3,
    text: 'Using integration, find the area of the smaller region cut off from the circle $x^{2} + y^{2} = 36$ by the line $x = 3$.',
    answer: 'The smaller region lies between $x = 3$ and $x = 6$ and is symmetric about the x-axis. Area $= 2\\int_{3}^{6} \\sqrt{36 - x^{2}} \\, dx = 2\\left[\\frac{x}{2}\\sqrt{36 - x^{2}} + 18\\sin^{-1}\\frac{x}{6}\\right]_{3}^{6}$. At $x = 6$: $0 + 18 \\times \\frac{\\pi}{2} = 9\\pi$. At $x = 3$: $\\frac{3}{2}\\sqrt{27} + 18 \\times \\frac{\\pi}{6} = \\frac{9\\sqrt{3}}{2} + 3\\pi$. So area $= 2\\left(6\\pi - \\frac{9\\sqrt{3}}{2}\\right) = 12\\pi - 9\\sqrt{3}$ sq units.',
    steps: [
      { step: 'Sets up area $= 2\\int_{3}^{6} \\sqrt{36 - x^{2}} \\, dx$ using symmetry', marks: 1 },
      { step: 'Uses the standard integral of $\\sqrt{a^{2} - x^{2}}$ correctly', marks: 1 },
      { step: 'Substitutes limits and gets $12\\pi - 9\\sqrt{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-c02', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the area of the region bounded by the curve $y = \\sin x$, the x-axis and the lines $x = 0$ and $x = \\frac{3\\pi}{2}$.',
    answer: '$\\sin x \\ge 0$ on $[0, \\pi]$ and $\\sin x \\le 0$ on $[\\pi, \\frac{3\\pi}{2}]$. Area $= \\int_{0}^{\\pi} \\sin x \\, dx + \\left|\\int_{\\pi}^{3\\pi/2} \\sin x \\, dx\\right| = [-\\cos x]_{0}^{\\pi} + \\left|[-\\cos x]_{\\pi}^{3\\pi/2}\\right| = 2 + |0 - 1| = 2 + 1 = 3$. The required area is $3$ sq units.',
    steps: [
      { step: 'Notes the sign change at $x = \\pi$ and splits the integral', marks: 1 },
      { step: 'Finds the first part as $2$', marks: 1 },
      { step: 'Takes the absolute value of the second part ($1$) and gets total $3$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-c03', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the area of the region enclosed by the parabola $y^{2} = 4x$ and the line $y = 2x$.',
    answer: 'Substituting $y = 2x$ into $y^{2} = 4x$: $4x^{2} = 4x$, so $x = 0$ or $x = 1$, giving the points $(0, 0)$ and $(1, 2)$. For $0 \\le x \\le 1$, the upper arm $y = 2\\sqrt{x}$ lies above the line. Area $= \\int_{0}^{1} (2\\sqrt{x} - 2x) \\, dx = \\left[\\frac{4}{3}x^{3/2} - x^{2}\\right]_{0}^{1} = \\frac{4}{3} - 1 = \\frac{1}{3}$. The required area is $\\frac{1}{3}$ sq unit.',
    steps: [
      { step: 'Finds the intersection points $(0, 0)$ and $(1, 2)$', marks: 1 },
      { step: 'Sets up area $= \\int_{0}^{1} (2\\sqrt{x} - 2x) \\, dx$', marks: 1 },
      { step: 'Evaluates to get $\\frac{1}{3}$ sq unit', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-c04', chapter: C, topic: B, type: 'short', complexity: 'hard', marks: 3,
    text: 'Using integration, find the area of the region bounded by the curve $y = |x| + |x - 2|$, the x-axis and the lines $x = -1$ and $x = 3$.',
    answer: 'Write the function piecewise: for $x < 0$, $y = 2 - 2x$; for $0 \\le x \\le 2$, $y = 2$; for $x > 2$, $y = 2x - 2$. It is positive throughout. Area $= \\int_{-1}^{0} (2 - 2x) \\, dx + \\int_{0}^{2} 2 \\, dx + \\int_{2}^{3} (2x - 2) \\, dx = [2x - x^{2}]_{-1}^{0} + 4 + [x^{2} - 2x]_{2}^{3} = 3 + 4 + 3 = 10$. The required area is $10$ sq units.',
    steps: [
      { step: 'Writes $y$ piecewise on $x < 0$, $0 \\le x \\le 2$ and $x > 2$', marks: 1 },
      { step: 'Sets up the three integrals with correct limits', marks: 1 },
      { step: 'Evaluates them as $3$, $4$, $3$ and gets total area $10$ sq units', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-aoi-d01', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the triangle whose vertices are $A(1, 1)$, $B(3, 5)$ and $C(6, 2)$.',
    answer: 'Equations of the sides: $AB$: slope $\\frac{5 - 1}{3 - 1} = 2$, so $y = 2x - 1$. $BC$: slope $\\frac{2 - 5}{6 - 3} = -1$, so $y = 8 - x$. $AC$: slope $\\frac{2 - 1}{6 - 1} = \\frac{1}{5}$, so $y = \\frac{x + 4}{5}$. Side $AC$ is the lower boundary throughout; the upper boundary is $AB$ for $1 \\le x \\le 3$ and $BC$ for $3 \\le x \\le 6$. Area $= \\int_{1}^{3} \\left(2x - 1 - \\frac{x + 4}{5}\\right) dx + \\int_{3}^{6} \\left(8 - x - \\frac{x + 4}{5}\\right) dx = \\int_{1}^{3} \\frac{9x - 9}{5} \\, dx + \\int_{3}^{6} \\frac{36 - 6x}{5} \\, dx = \\frac{9}{5}\\left[\\frac{x^{2}}{2} - x\\right]_{1}^{3} + \\frac{6}{5}\\left[6x - \\frac{x^{2}}{2}\\right]_{3}^{6} = \\frac{9}{5} \\times 2 + \\frac{6}{5} \\times \\frac{9}{2} = \\frac{18}{5} + \\frac{27}{5} = 9$. The area of the triangle is $9$ sq units.',
    steps: [
      { step: 'Finds the equations of $AB$ ($y = 2x - 1$) and $BC$ ($y = 8 - x$)', marks: 1 },
      { step: 'Finds the equation of $AC$ ($y = \\frac{x + 4}{5}$)', marks: 1 },
      { step: 'Sets up the area as two integrals split at $x = 3$ with $AC$ as the lower boundary', marks: 1 },
      { step: 'Evaluates the first integral as $\\frac{18}{5}$', marks: 1 },
      { step: 'Evaluates the second as $\\frac{27}{5}$ and gets total area $9$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d02', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the triangle formed by the lines $y = 2x$, $2y = x$ and $x + y = 6$.',
    answer: 'Vertices: $y = 2x$ and $2y = x$ meet at $O(0, 0)$; $y = 2x$ and $x + y = 6$ meet at $P(2, 4)$; $2y = x$ and $x + y = 6$ meet at $Q(4, 2)$. The lower boundary is $y = \\frac{x}{2}$ for $0 \\le x \\le 4$. The upper boundary is $y = 2x$ for $0 \\le x \\le 2$ and $y = 6 - x$ for $2 \\le x \\le 4$. Area $= \\int_{0}^{2} \\left(2x - \\frac{x}{2}\\right) dx + \\int_{2}^{4} \\left(6 - x - \\frac{x}{2}\\right) dx = \\left[\\frac{3x^{2}}{4}\\right]_{0}^{2} + \\left[6x - \\frac{3x^{2}}{4}\\right]_{2}^{4} = 3 + (12 - 9) = 6$. The required area is $6$ sq units.',
    steps: [
      { step: 'Finds the vertex $(2, 4)$', marks: 1 },
      { step: 'Finds the vertices $(0, 0)$ and $(4, 2)$', marks: 1 },
      { step: 'Sets up the area as two integrals split at $x = 2$ with correct upper and lower boundaries', marks: 1 },
      { step: 'Evaluates the first integral as $3$', marks: 1 },
      { step: 'Evaluates the second as $3$ and gets total area $6$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d03', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the area of the region in the first quadrant enclosed by the x-axis, the line $x = \\sqrt{3}\\, y$ and the circle $x^{2} + y^{2} = 16$.',
    answer: 'Intersection of $y = \\frac{x}{\\sqrt{3}}$ with the circle: $x^{2} + \\frac{x^{2}}{3} = 16$, so $x^{2} = 12$, $x = 2\\sqrt{3}$, $y = 2$. The circle meets the x-axis at $(4, 0)$. The region is under the line from $x = 0$ to $2\\sqrt{3}$ and under the circle from $x = 2\\sqrt{3}$ to $4$. Area $= \\int_{0}^{2\\sqrt{3}} \\frac{x}{\\sqrt{3}} \\, dx + \\int_{2\\sqrt{3}}^{4} \\sqrt{16 - x^{2}} \\, dx$. First part $= \\frac{1}{\\sqrt{3}} \\times \\frac{12}{2} = 2\\sqrt{3}$. Second part $= \\left[\\frac{x}{2}\\sqrt{16 - x^{2}} + 8\\sin^{-1}\\frac{x}{4}\\right]_{2\\sqrt{3}}^{4} = 4\\pi - \\left(2\\sqrt{3} + \\frac{8\\pi}{3}\\right) = \\frac{4\\pi}{3} - 2\\sqrt{3}$. Total area $= 2\\sqrt{3} + \\frac{4\\pi}{3} - 2\\sqrt{3} = \\frac{4\\pi}{3}$ sq units.',
    steps: [
      { step: 'Finds the intersection point $(2\\sqrt{3}, 2)$', marks: 1 },
      { step: 'Splits the region and writes the two integrals', marks: 1 },
      { step: 'Evaluates the line part as $2\\sqrt{3}$', marks: 1 },
      { step: 'Evaluates the circle part as $\\frac{4\\pi}{3} - 2\\sqrt{3}$', marks: 1 },
      { step: 'Adds to get $\\frac{4\\pi}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d04', chapter: C, topic: U, type: 'long', complexity: 'medium', marks: 5,
    text: 'Sketch the ellipse $9x^{2} + 4y^{2} = 36$ and, using integration, find the area enclosed by it.',
    answer: 'Dividing by $36$: $\\frac{x^{2}}{4} + \\frac{y^{2}}{9} = 1$, an ellipse centred at the origin meeting the x-axis at $(\\pm 2, 0)$ and the y-axis at $(0, \\pm 3)$. It is symmetric about both axes, so area $= 4 \\times$ (area in the first quadrant). In the first quadrant $y = \\frac{3}{2}\\sqrt{4 - x^{2}}$. Area $= 4\\int_{0}^{2} \\frac{3}{2}\\sqrt{4 - x^{2}} \\, dx = 6\\left[\\frac{x}{2}\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2}\\right]_{0}^{2} = 6 \\times 2 \\times \\frac{\\pi}{2} = 6\\pi$. The area enclosed is $6\\pi$ sq units.',
    steps: [
      { step: 'Writes the standard form and sketches with intercepts $(\\pm 2, 0)$, $(0, \\pm 3)$', marks: 1 },
      { step: 'Uses symmetry: area $= 4 \\times$ first-quadrant area', marks: 1 },
      { step: 'Writes $y = \\frac{3}{2}\\sqrt{4 - x^{2}}$ and the integral $\\int_{0}^{2}$', marks: 1 },
      { step: 'Applies the standard integral of $\\sqrt{a^{2} - x^{2}}$ correctly', marks: 1 },
      { step: 'Gets area $6\\pi$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d05', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the area of the region bounded by the parabola $x^{2} = 4y$ and the line $y = x + 3$.',
    answer: 'Substituting $y = x + 3$: $x^{2} = 4x + 12$, so $x^{2} - 4x - 12 = 0$, $(x - 6)(x + 2) = 0$, giving $x = -2$ and $x = 6$ (points $(-2, 1)$ and $(6, 9)$). Between them the line lies above the parabola $y = \\frac{x^{2}}{4}$. Area $= \\int_{-2}^{6} \\left(x + 3 - \\frac{x^{2}}{4}\\right) dx = \\left[\\frac{x^{2}}{2} + 3x - \\frac{x^{3}}{12}\\right]_{-2}^{6} = (18 + 18 - 18) - \\left(2 - 6 + \\frac{2}{3}\\right) = 18 + \\frac{10}{3} = \\frac{64}{3}$. The required area is $\\frac{64}{3}$ sq units.',
    steps: [
      { step: 'Forms $x^{2} - 4x - 12 = 0$', marks: 1 },
      { step: 'Gets intersection points at $x = -2$ and $x = 6$', marks: 1 },
      { step: 'Sets up area $= \\int_{-2}^{6} \\left(x + 3 - \\frac{x^{2}}{4}\\right) dx$', marks: 1 },
      { step: 'Integrates correctly', marks: 1 },
      { step: 'Substitutes limits and gets $\\frac{64}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d06', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'The area of the region enclosed by the parabola $y = x^{2}$ and the line $y = mx$, where $m > 0$, is $36$ sq units. Using integration, find the value of $m$.',
    answer: 'The curves meet where $x^{2} = mx$, that is at $x = 0$ and $x = m$. For $0 \\le x \\le m$, $mx \\ge x^{2}$, so the line is above the parabola. Area $= \\int_{0}^{m} (mx - x^{2}) \\, dx = \\left[\\frac{mx^{2}}{2} - \\frac{x^{3}}{3}\\right]_{0}^{m} = \\frac{m^{3}}{2} - \\frac{m^{3}}{3} = \\frac{m^{3}}{6}$. Setting $\\frac{m^{3}}{6} = 36$ gives $m^{3} = 216$, so $m = 6$.',
    steps: [
      { step: 'Finds the intersection at $x = 0$ and $x = m$', marks: 1 },
      { step: 'Identifies the line as the upper boundary and sets up $\\int_{0}^{m} (mx - x^{2}) \\, dx$', marks: 1 },
      { step: 'Integrates correctly', marks: 1 },
      { step: 'Gets area $= \\frac{m^{3}}{6}$', marks: 1 },
      { step: 'Solves $\\frac{m^{3}}{6} = 36$ to get $m = 6$', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d07', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Using integration, find the area of the smaller region bounded by the ellipse $\\frac{x^{2}}{16} + \\frac{y^{2}}{9} = 1$ and the line $\\frac{x}{4} + \\frac{y}{3} = 1$.',
    answer: 'The line meets the ellipse at $(4, 0)$ and $(0, 3)$, so the smaller region lies in the first quadrant between the line (below) and the ellipse arc (above) for $0 \\le x \\le 4$. On the ellipse $y = \\frac{3}{4}\\sqrt{16 - x^{2}}$; on the line $y = 3 - \\frac{3x}{4}$. Area $= \\int_{0}^{4} \\frac{3}{4}\\sqrt{16 - x^{2}} \\, dx - \\int_{0}^{4} \\left(3 - \\frac{3x}{4}\\right) dx$. First integral $= \\frac{3}{4}\\left[\\frac{x}{2}\\sqrt{16 - x^{2}} + 8\\sin^{-1}\\frac{x}{4}\\right]_{0}^{4} = \\frac{3}{4} \\times 4\\pi = 3\\pi$. Second integral $= \\left[3x - \\frac{3x^{2}}{8}\\right]_{0}^{4} = 12 - 6 = 6$. Required area $= 3\\pi - 6 = 3(\\pi - 2)$ sq units.',
    steps: [
      { step: 'Finds the intersection points $(4, 0)$ and $(0, 3)$ and identifies the region', marks: 1 },
      { step: 'Writes the area as (ellipse integral) minus (line integral) from $0$ to $4$', marks: 1 },
      { step: 'Evaluates the ellipse part as $3\\pi$', marks: 1 },
      { step: 'Evaluates the line part as $6$', marks: 1 },
      { step: 'Gets the area $3\\pi - 6$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d08', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Using integration, find the area of the region $\\{(x, y) : 0 \\le y \\le x^{2} + 2, \\; 0 \\le y \\le x + 4, \\; 0 \\le x \\le 3\\}$.',
    answer: 'The parabola $y = x^{2} + 2$ and the line $y = x + 4$ meet where $x^{2} - x - 2 = 0$, so $x = 2$ (the other root $x = -1$ is outside $[0, 3]$). For $0 \\le x \\le 2$, $x^{2} + 2 \\le x + 4$, so the parabola is the upper boundary; for $2 \\le x \\le 3$, the line is lower and is the upper boundary. Area $= \\int_{0}^{2} (x^{2} + 2) \\, dx + \\int_{2}^{3} (x + 4) \\, dx = \\left[\\frac{x^{3}}{3} + 2x\\right]_{0}^{2} + \\left[\\frac{x^{2}}{2} + 4x\\right]_{2}^{3} = \\left(\\frac{8}{3} + 4\\right) + \\left(\\frac{33}{2} - 10\\right) = \\frac{20}{3} + \\frac{13}{2} = \\frac{79}{6}$. The required area is $\\frac{79}{6}$ sq units.',
    steps: [
      { step: 'Finds that the curve and line meet at $x = 2$ within the interval', marks: 1 },
      { step: 'Identifies the upper boundary on $[0, 2]$ and on $[2, 3]$', marks: 1 },
      { step: 'Sets up the two integrals', marks: 1 },
      { step: 'Evaluates them as $\\frac{20}{3}$ and $\\frac{13}{2}$', marks: 1 },
      { step: 'Gets total area $\\frac{79}{6}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d09', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'The region bounded by the parabola $y = 4x - x^{2}$ and the x-axis is divided into two parts of equal area by the line $y = mx$, where $0 < m < 4$. Using integration, find $m$.',
    answer: 'The parabola meets the x-axis at $x = 0$ and $x = 4$, so the whole region has area $\\int_{0}^{4} (4x - x^{2}) \\, dx = 32 - \\frac{64}{3} = \\frac{32}{3}$. The line $y = mx$ meets the parabola where $4x - x^{2} = mx$, that is at $x = 0$ and $x = 4 - m$. Between these the parabola lies above the line, so the part cut off above the line has area $\\int_{0}^{4 - m} \\left[(4 - m)x - x^{2}\\right] dx = \\frac{(4 - m)^{3}}{2} - \\frac{(4 - m)^{3}}{3} = \\frac{(4 - m)^{3}}{6}$. This must be half the whole region: $\\frac{(4 - m)^{3}}{6} = \\frac{16}{3}$, so $(4 - m)^{3} = 32$, $4 - m = 2\\sqrt[3]{4}$ and $m = 4 - 2\\sqrt[3]{4}$ (about $0.83$).',
    steps: [
      { step: 'Finds the total area $\\int_{0}^{4} (4x - x^{2}) \\, dx = \\frac{32}{3}$', marks: 1 },
      { step: 'Finds that the line meets the parabola at $x = 0$ and $x = 4 - m$', marks: 1 },
      { step: 'Sets up the area between parabola and line as $\\int_{0}^{4 - m} \\left[(4 - m)x - x^{2}\\right] dx$', marks: 1 },
      { step: 'Evaluates it as $\\frac{(4 - m)^{3}}{6}$', marks: 1 },
      { step: 'Equates to $\\frac{16}{3}$ and gets $m = 4 - 2\\sqrt[3]{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d10', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5, competency: true,
    text: 'The cross-section of a road tunnel is bounded by the ground (the x-axis) and the curve $y = 6 - \\frac{x^{2}}{6}$, where $x$ and $y$ are in metres. (a) Using integration, find the area of the cross-section of the tunnel. (b) Ventilation ducts run along the top of the tunnel in the part lying above the height $y = 2$. Find the area of the cross-section above $y = 2$.',
    answer: '(a) The curve meets the ground where $6 - \\frac{x^{2}}{6} = 0$, so $x = \\pm 6$. By symmetry, area $= 2\\int_{0}^{6} \\left(6 - \\frac{x^{2}}{6}\\right) dx = 2\\left[6x - \\frac{x^{3}}{18}\\right]_{0}^{6} = 2(36 - 12) = 48$ sq m. (b) The curve meets $y = 2$ where $\\frac{x^{2}}{6} = 4$, so $x = \\pm 2\\sqrt{6}$. Area above $y = 2$ $= 2\\int_{0}^{2\\sqrt{6}} \\left(6 - \\frac{x^{2}}{6} - 2\\right) dx = 2\\left[4x - \\frac{x^{3}}{18}\\right]_{0}^{2\\sqrt{6}} = 2\\left(8\\sqrt{6} - \\frac{48\\sqrt{6}}{18}\\right) = 2\\left(8\\sqrt{6} - \\frac{8\\sqrt{6}}{3}\\right) = \\frac{32\\sqrt{6}}{3}$ sq m (about $26.13$ sq m).',
    steps: [
      { step: 'Finds the ground points $x = \\pm 6$ and sets up the tunnel area integral', marks: 1 },
      { step: 'Gets the tunnel area $48$ sq m', marks: 1 },
      { step: 'Finds where the curve meets $y = 2$: $x = \\pm 2\\sqrt{6}$', marks: 1 },
      { step: 'Sets up $2\\int_{0}^{2\\sqrt{6}} \\left(4 - \\frac{x^{2}}{6}\\right) dx$', marks: 1 },
      { step: 'Evaluates to get $\\frac{32\\sqrt{6}}{3}$ sq m', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-d11', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Sketch the region bounded by the curve $y = 2x - x^{2}$ and the line $y = -x$, and find its area using integration. Also find the area of the part of this region that lies above the x-axis.',
    answer: 'The parabola $y = 2x - x^{2}$ opens downward, has vertex $(1, 1)$ and meets the x-axis at $x = 0$ and $x = 2$. It meets $y = -x$ where $2x - x^{2} = -x$, so $x(3 - x) = 0$, giving $(0, 0)$ and $(3, -3)$. For $0 \\le x \\le 3$ the parabola is above the line. Area $= \\int_{0}^{3} \\left[(2x - x^{2}) - (-x)\\right] dx = \\int_{0}^{3} (3x - x^{2}) \\, dx = \\left[\\frac{3x^{2}}{2} - \\frac{x^{3}}{3}\\right]_{0}^{3} = \\frac{27}{2} - 9 = \\frac{9}{2}$ sq units. The part above the x-axis is bounded by the parabola and the x-axis from $x = 0$ to $x = 2$ (the line is below the axis there): area $= \\int_{0}^{2} (2x - x^{2}) \\, dx = 4 - \\frac{8}{3} = \\frac{4}{3}$ sq units.',
    steps: [
      { step: 'Sketches the parabola with vertex $(1, 1)$ and the line, and finds the intersections $(0, 0)$ and $(3, -3)$', marks: 1 },
      { step: 'Sets up the area as $\\int_{0}^{3} (3x - x^{2}) \\, dx$', marks: 1 },
      { step: 'Evaluates the total area as $\\frac{9}{2}$ sq units', marks: 1 },
      { step: 'Identifies the part above the x-axis as $\\int_{0}^{2} (2x - x^{2}) \\, dx$', marks: 1 },
      { step: 'Evaluates it as $\\frac{4}{3}$ sq units', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-aoi-e01', chapter: C, topic: U, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A town council is laying an elliptical lawn in a park. Taking the centre of the lawn as the origin and the axes along its longest and shortest widths, the boundary of the lawn is $\\frac{x^{2}}{36} + \\frac{y^{2}}{16} = 1$, where $x$ and $y$ are in metres.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Express $y$ in terms of $x$ for the part of the boundary lying above the x-axis.',
        answer: '$y = \\frac{2}{3}\\sqrt{36 - x^{2}}$, for $-6 \\le x \\le 6$ (from $y^{2} = 16\\left(1 - \\frac{x^{2}}{36}\\right) = \\frac{4}{9}(36 - x^{2})$).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the area of the part of the lawn in the first quadrant.',
        answer: 'Area $= \\int_{0}^{6} \\frac{2}{3}\\sqrt{36 - x^{2}} \\, dx = \\frac{2}{3}\\left[\\frac{x}{2}\\sqrt{36 - x^{2}} + 18\\sin^{-1}\\frac{x}{6}\\right]_{0}^{6} = \\frac{2}{3} \\times 9\\pi = 6\\pi$ sq m.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using integration, find the total area of the lawn. OR Using integration, find the area of the part of the lawn lying between the lines $x = -3$ and $x = 3$.',
        answer: 'By symmetry about both axes, total area $= 4 \\times 6\\pi = 24\\pi$ sq m (about $75.4$ sq m). OR Area $= 2\\int_{-3}^{3} \\frac{2}{3}\\sqrt{36 - x^{2}} \\, dx = \\frac{8}{3}\\int_{0}^{3} \\sqrt{36 - x^{2}} \\, dx = \\frac{8}{3}\\left[\\frac{x}{2}\\sqrt{36 - x^{2}} + 18\\sin^{-1}\\frac{x}{6}\\right]_{0}^{3} = \\frac{8}{3}\\left(\\frac{9\\sqrt{3}}{2} + 3\\pi\\right) = 12\\sqrt{3} + 8\\pi$ sq m (about $45.9$ sq m).',
      },
    ],
    answer: '(i) $y = \\frac{2}{3}\\sqrt{36 - x^{2}}$. (ii) $6\\pi$ sq m. (iii) Total area $24\\pi$ sq m; OR the strip between $x = -3$ and $x = 3$ has area $12\\sqrt{3} + 8\\pi$ sq m.',
  },
  {
    id: 'c12-aoi-e02', chapter: C, topic: B, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A school is marking out a play zone. One edge is a curved kerb along the parabola $y = \\frac{x^{2}}{4}$ and the other edge is a straight footpath along the line $y = 4$, where $x$ and $y$ are in metres. The play zone is the region enclosed between the kerb and the footpath.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the points where the footpath meets the kerb.',
        answer: '$\\frac{x^{2}}{4} = 4$ gives $x = \\pm 4$, so the points are $(-4, 4)$ and $(4, 4)$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write an integral with respect to $y$ that gives the area of the play zone.',
        answer: 'On the kerb $x = \\pm 2\\sqrt{y}$, and the region is symmetric about the y-axis, so area $= 2\\int_{0}^{4} 2\\sqrt{y} \\, dy$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area of the play zone. OR Find the area of the part of the play zone with $x \\ge 0$ that lies between the lines $y = 1$ and $y = 4$.',
        answer: 'Area $= 4\\int_{0}^{4} \\sqrt{y} \\, dy = 4 \\times \\frac{2}{3}[y^{3/2}]_{0}^{4} = 4 \\times \\frac{16}{3} = \\frac{64}{3}$ sq m (about $21.3$ sq m). OR Area $= \\int_{1}^{4} 2\\sqrt{y} \\, dy = \\frac{4}{3}[y^{3/2}]_{1}^{4} = \\frac{4}{3}(8 - 1) = \\frac{28}{3}$ sq m.',
      },
    ],
    answer: '(i) $(-4, 4)$ and $(4, 4)$. (ii) $2\\int_{0}^{4} 2\\sqrt{y} \\, dy$. (iii) $\\frac{64}{3}$ sq m; OR $\\frac{28}{3}$ sq m.',
  },
  {
    id: 'c12-aoi-e03', chapter: C, topic: B, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A circular stained-glass window has radius $4$ dm. Taking its centre as the origin, its edge is the circle $x^{2} + y^{2} = 16$ (units in dm). A straight horizontal lead bar is fixed along the line $y = 2$, and the glass above the bar is coloured blue.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the coordinates of the ends of the bar, where it meets the edge of the window.',
        answer: '$x^{2} + 4 = 16$ gives $x = \\pm 2\\sqrt{3}$, so the ends are $(-2\\sqrt{3}, 2)$ and $(2\\sqrt{3}, 2)$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write an integral that gives the area of the blue glass.',
        answer: 'Area $= \\int_{-2\\sqrt{3}}^{2\\sqrt{3}} \\left(\\sqrt{16 - x^{2}} - 2\\right) dx$, or equivalently $2\\int_{0}^{2\\sqrt{3}} \\left(\\sqrt{16 - x^{2}} - 2\\right) dx$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area of the blue glass. OR Using integration, find the area of the part of the window that lies above the x-axis between the lines $x = 0$ and $x = 2$.',
        answer: 'Area $= 2\\left[\\frac{x}{2}\\sqrt{16 - x^{2}} + 8\\sin^{-1}\\frac{x}{4} - 2x\\right]_{0}^{2\\sqrt{3}} = 2\\left(2\\sqrt{3} + \\frac{8\\pi}{3} - 4\\sqrt{3}\\right) = \\frac{16\\pi}{3} - 4\\sqrt{3}$ sq dm (about $9.83$ sq dm). OR Area $= \\int_{0}^{2} \\sqrt{16 - x^{2}} \\, dx = \\left[\\frac{x}{2}\\sqrt{16 - x^{2}} + 8\\sin^{-1}\\frac{x}{4}\\right]_{0}^{2} = 2\\sqrt{3} + \\frac{4\\pi}{3}$ sq dm.',
      },
    ],
    answer: '(i) $(\\pm 2\\sqrt{3}, 2)$. (ii) $\\int_{-2\\sqrt{3}}^{2\\sqrt{3}} (\\sqrt{16 - x^{2}} - 2) \\, dx$. (iii) $\\frac{16\\pi}{3} - 4\\sqrt{3}$ sq dm; OR $2\\sqrt{3} + \\frac{4\\pi}{3}$ sq dm.',
  },
];
