import type { Class12Question } from './types.js';

const C = 'Application of Integrals';
const U = 'Area under simple curves';
const B = 'Area bounded by a curve and lines';

const AR_OPTIONS = [
  'Both A and R are true, and R is the correct explanation of A.',
  'Both A and R are true, but R is not the correct explanation of A.',
  'A is true, but R is false.',
  'A is false, but R is true.',
];

export const CH08_AOI_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-aoi-r2-a01', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the line $y = x + 2$, the x-axis and the lines $x = 0$ and $x = 2$ is',
    options: ['$4$ sq units', '$6$ sq units', '$8$ sq units', '$12$ sq units'],
    answer: 'Correct option: B) $6$ sq units. Area $= \\int_{0}^{2} (x + 2) \\, dx = \\left[\\frac{x^{2}}{2} + 2x\\right]_{0}^{2} = 2 + 4 = 6$. $8$ comes from forgetting the $\\frac{1}{2}$ in $\\frac{x^{2}}{2}$, and $4$ counts only the rectangle of height $2$.',
  },
  {
    id: 'c12-aoi-r2-a02', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the curve $y = x^{3}$, the x-axis and the lines $x = 0$ and $x = 2$ is',
    options: ['$2$ sq units', '$8$ sq units', '$16$ sq units', '$4$ sq units'],
    answer: 'Correct option: D) $4$ sq units. Area $= \\int_{0}^{2} x^{3} \\, dx = \\left[\\frac{x^{4}}{4}\\right]_{0}^{2} = \\frac{16}{4} = 4$. $16$ forgets to divide by $4$, and $8$ is just the height of the curve at $x = 2$.',
  },
  {
    id: 'c12-aoi-r2-a03', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\sin 2x$, the x-axis and the lines $x = 0$ and $x = \\frac{\\pi}{4}$ is',
    options: ['$1$ sq unit', '$\\frac{1}{2}$ sq unit', '$2$ sq units', '$\\frac{\\pi}{4}$ sq unit'],
    answer: 'Correct option: B) $\\frac{1}{2}$ sq unit. $\\sin 2x \\ge 0$ on $\\left[0, \\frac{\\pi}{4}\\right]$, so area $= \\int_{0}^{\\pi/4} \\sin 2x \\, dx = \\left[-\\frac{\\cos 2x}{2}\\right]_{0}^{\\pi/4} = 0 + \\frac{1}{2} = \\frac{1}{2}$. $1$ forgets the factor $\\frac{1}{2}$ from the chain rule, and $2$ multiplies by $2$ instead of dividing.',
  },
  {
    id: 'c12-aoi-r2-a04', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region in the first quadrant enclosed by the circle $x^{2} + y^{2} = 9$ and the coordinate axes is',
    options: ['$\\frac{9\\pi}{4}$ sq units', '$9\\pi$ sq units', '$\\frac{3\\pi}{4}$ sq units', '$\\frac{9\\pi}{2}$ sq units'],
    answer: 'Correct option: A) $\\frac{9\\pi}{4}$ sq units. Area $= \\int_{0}^{3} \\sqrt{9 - x^{2}} \\, dx = \\left[\\frac{x}{2}\\sqrt{9 - x^{2}} + \\frac{9}{2}\\sin^{-1}\\frac{x}{3}\\right]_{0}^{3} = \\frac{9}{2} \\times \\frac{\\pi}{2} = \\frac{9\\pi}{4}$. $9\\pi$ is the whole circle, $\\frac{9\\pi}{2}$ is a semicircle, and $\\frac{3\\pi}{4}$ uses the radius $3$ in place of $r^{2} = 9$.',
  },
  {
    id: 'c12-aoi-r2-a05', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region enclosed by the ellipse $\\frac{x^{2}}{64} + \\frac{y^{2}}{9} = 1$ is',
    options: ['$6\\pi$ sq units', '$11\\pi$ sq units', '$24\\pi$ sq units', '$48\\pi$ sq units'],
    answer: 'Correct option: C) $24\\pi$ sq units. By symmetry, area $= 4\\int_{0}^{8} \\frac{3}{8}\\sqrt{64 - x^{2}} \\, dx = \\frac{3}{2} \\times 16\\pi = 24\\pi$ (that is, $\\pi ab$ with $a = 8$, $b = 3$). $6\\pi$ is only the first-quadrant part, $48\\pi$ doubles the area, and $11\\pi$ wrongly adds $a$ and $b$.',
  },
  {
    id: 'c12-aoi-r2-a06', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the curve $y = x^{2}$, the x-axis and the lines $x = 1$ and $x = 3$ is given by',
    options: ['$\\int_{1}^{9} \\sqrt{y} \\, dy$', '$\\int_{1}^{3} x^{2} \\, dx$', '$\\int_{1}^{3} \\sqrt{x} \\, dx$', '$\\int_{0}^{3} x^{2} \\, dx$'],
    answer: 'Correct option: B) $\\int_{1}^{3} x^{2} \\, dx$. The region lies between the curve and the x-axis, so we use vertical strips of height $x^{2}$ from $x = 1$ to $x = 3$ (its value is $\\frac{26}{3}$). $\\int_{1}^{9} \\sqrt{y} \\, dy$ is the area between the curve and the y-axis, and $\\int_{0}^{3} x^{2} \\, dx$ uses the wrong lower limit.',
  },
  {
    id: 'c12-aoi-r2-a07', chapter: C, topic: B, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the line $y = 2x - 2$, the x-axis and the lines $x = 0$ and $x = 3$ is',
    options: ['$3$ sq units', '$4$ sq units', '$5$ sq units', '$1$ sq unit'],
    answer: 'Correct option: C) $5$ sq units. The line crosses the x-axis at $x = 1$ and lies below it on $[0, 1]$. Area $= \\left|\\int_{0}^{1} (2x - 2) \\, dx\\right| + \\int_{1}^{3} (2x - 2) \\, dx = |-1| + 4 = 5$. $3$ is the signed integral over $[0, 3]$, $4$ counts only the part above the axis, and $1$ only the part below.',
  },
  {
    id: 'c12-aoi-r2-a08', chapter: C, topic: U, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The area of the region bounded by the curve $y = x^{3}$, the x-axis and the lines $x = -1$ and $x = 1$ is $\\frac{1}{2}$ sq unit.\nReason (R): $\\int_{-1}^{1} x^{3} \\, dx = 0$.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both A and R are true, but R is not the correct explanation of A. Since $x^{3}$ is odd, $\\int_{-1}^{1} x^{3} \\, dx = 0$, so R is true. But area cannot be found from this signed integral: the part on $[-1, 0]$ lies below the axis, so area $= 2\\int_{0}^{1} x^{3} \\, dx = 2 \\times \\frac{1}{4} = \\frac{1}{2}$, so A is true for a different reason.',
  },
  {
    id: 'c12-aoi-r2-a09', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region enclosed by the curve $x = 9 - y^{2}$ and the y-axis is',
    options: ['$18$ sq units', '$27$ sq units', '$54$ sq units', '$36$ sq units'],
    answer: 'Correct option: D) $36$ sq units. The curve meets the y-axis where $9 - y^{2} = 0$, that is at $y = \\pm 3$. Using horizontal strips, area $= \\int_{-3}^{3} (9 - y^{2}) \\, dy = 2\\left[9y - \\frac{y^{3}}{3}\\right]_{0}^{3} = 2(27 - 9) = 36$. $18$ is only the half above the x-axis, and $54$ is the rectangle $9 \\times 6$ without subtracting $\\int y^{2} \\, dy$.',
  },
  {
    id: 'c12-aoi-r2-a10', chapter: C, topic: B, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region enclosed by the curve $y = |x|$ and the line $y = 3$ is',
    options: ['$9$ sq units', '$18$ sq units', '$\\frac{9}{2}$ sq units', '$6$ sq units'],
    answer: 'Correct option: A) $9$ sq units. The line meets $y = |x|$ at $x = \\pm 3$. By symmetry, area $= 2\\int_{0}^{3} (3 - x) \\, dx = 2\\left[3x - \\frac{x^{2}}{2}\\right]_{0}^{3} = 2 \\times \\frac{9}{2} = 9$. $\\frac{9}{2}$ is only one half, and $18$ is the whole rectangle $6 \\times 3$.',
  },
  {
    id: 'c12-aoi-r2-a11', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\sec^{2} x$, the x-axis and the lines $x = 0$ and $x = \\frac{\\pi}{4}$ is',
    options: ['$\\sqrt{2}$ sq units', '$1$ sq unit', '$\\frac{\\pi}{4}$ sq unit', '$2$ sq units'],
    answer: 'Correct option: B) $1$ sq unit. $\\sec^{2} x > 0$, so area $= \\int_{0}^{\\pi/4} \\sec^{2} x \\, dx = [\\tan x]_{0}^{\\pi/4} = 1 - 0 = 1$. $\\sqrt{2}$ is $\\sec\\frac{\\pi}{4}$, which comes from integrating to $\\sec x$, and $2$ is the height of the curve at $x = \\frac{\\pi}{4}$.',
  },
  {
    id: 'c12-aoi-r2-a12', chapter: C, topic: U, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\sqrt{x - 1}$, the x-axis and the line $x = 5$ is',
    options: ['$\\frac{8}{3}$ sq units', '$8$ sq units', '$\\frac{16}{3}$ sq units', '$\\frac{32}{3}$ sq units'],
    answer: 'Correct option: C) $\\frac{16}{3}$ sq units. The curve starts at $(1, 0)$, so area $= \\int_{1}^{5} (x - 1)^{1/2} \\, dx = \\frac{2}{3}\\left[(x - 1)^{3/2}\\right]_{1}^{5} = \\frac{2}{3} \\times 8 = \\frac{16}{3}$. $8$ drops the factor $\\frac{2}{3}$, and $\\frac{32}{3}$ wrongly doubles it as if the lower half of $y^{2} = x - 1$ were included.',
  },
  {
    id: 'c12-aoi-r2-a13', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the curve $y = x^{2} - 2x$ and the x-axis is',
    options: ['$\\frac{2}{3}$ sq unit', '$\\frac{4}{3}$ sq units', '$\\frac{8}{3}$ sq units', '$4$ sq units'],
    answer: 'Correct option: B) $\\frac{4}{3}$ sq units. The curve meets the x-axis at $x = 0$ and $x = 2$ and lies below it in between. Area $= \\left|\\int_{0}^{2} (x^{2} - 2x) \\, dx\\right| = \\left|\\frac{8}{3} - 4\\right| = \\frac{4}{3}$. $\\frac{8}{3}$ and $4$ are the two separate pieces $\\int_{0}^{2} x^{2} \\, dx$ and $\\int_{0}^{2} 2x \\, dx$.',
  },
  {
    id: 'c12-aoi-r2-a14', chapter: C, topic: U, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The area of the region bounded by the curve $y = \\sin x$, the x-axis and the lines $x = 0$ and $x = a$, where $0 < a \\le \\pi$, is $\\frac{1}{2}$ sq unit. The value of $a$ is',
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$'],
    answer: 'Correct option: C) $\\frac{\\pi}{3}$. On $[0, a]$, $\\sin x \\ge 0$, so area $= \\int_{0}^{a} \\sin x \\, dx = 1 - \\cos a$. Setting $1 - \\cos a = \\frac{1}{2}$ gives $\\cos a = \\frac{1}{2}$, so $a = \\frac{\\pi}{3}$. $\\frac{2\\pi}{3}$ gives area $\\frac{3}{2}$; it comes from solving $\\cos a = -\\frac{1}{2}$.',
  },
  {
    id: 'c12-aoi-r2-a15', chapter: C, topic: U, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region in the first quadrant bounded by the curve $y = 2\\sqrt{x}$, the y-axis and the line $y = 2$ is',
    options: ['$\\frac{1}{3}$ sq unit', '$\\frac{4}{3}$ sq units', '$\\frac{8}{3}$ sq units', '$\\frac{2}{3}$ sq unit'],
    answer: 'Correct option: D) $\\frac{2}{3}$ sq unit. The region lies between the y-axis and the curve, where $x = \\frac{y^{2}}{4}$. Area $= \\int_{0}^{2} \\frac{y^{2}}{4} \\, dy = \\frac{8}{12} = \\frac{2}{3}$. $\\frac{4}{3}$ is $\\int_{0}^{1} 2\\sqrt{x} \\, dx$, the area between the curve and the x-axis, which is a different region.',
  },
  {
    id: 'c12-aoi-r2-a16', chapter: C, topic: U, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The area of the region bounded by the curve $y = x^{2} + 1$, the x-axis and the lines $x = -1$ and $x = 1$ is $\\frac{8}{3}$ sq units.\nReason (R): The curve $y = x^{2} + 1$ is symmetric about the y-axis, so the area from $x = -1$ to $x = 1$ is twice the area from $x = 0$ to $x = 1$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both A and R are true, and R is the correct explanation of A. Replacing $x$ by $-x$ leaves $y = x^{2} + 1$ unchanged, so R is true. Using it, area $= 2\\int_{0}^{1} (x^{2} + 1) \\, dx = 2\\left(\\frac{1}{3} + 1\\right) = \\frac{8}{3}$, so A is true and follows from R.',
  },
  {
    id: 'c12-aoi-r2-a17', chapter: C, topic: B, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the region bounded by the line $y = x$, the line $x + y = 4$ and the x-axis is',
    options: ['$4$ sq units', '$8$ sq units', '$2$ sq units', '$6$ sq units'],
    answer: 'Correct option: A) $4$ sq units. The lines meet at $(2, 2)$, and $x + y = 4$ meets the x-axis at $(4, 0)$. Area $= \\int_{0}^{2} x \\, dx + \\int_{2}^{4} (4 - x) \\, dx = 2 + 2 = 4$. $2$ counts only one of the two parts, and $8$ is the area under $x + y = 4$ from $0$ to $4$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-aoi-r2-b01', chapter: C, topic: U, type: 'short', complexity: 'easy', marks: 2,
    text: 'Using integration, find the area of the region bounded by the curve $y = x^{2} + 1$, the x-axis and the lines $x = 0$ and $x = 3$.',
    answer: 'The curve $y = x^{2} + 1$ lies above the x-axis for all $x$. Area $= \\int_{0}^{3} (x^{2} + 1) \\, dx = \\left[\\frac{x^{3}}{3} + x\\right]_{0}^{3} = 9 + 3 = 12$. The required area is $12$ sq units.',
    steps: [
      { step: 'Writes the area as $\\int_{0}^{3} (x^{2} + 1) \\, dx$', marks: 1 },
      { step: 'Evaluates to get $12$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-b02', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the area of the region bounded by the curve $y = \\cos x$, the x-axis and the lines $x = -\\frac{\\pi}{2}$ and $x = \\frac{\\pi}{3}$.',
    answer: 'On $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{3}\\right]$, $\\cos x \\ge 0$, so the curve stays on or above the x-axis. Area $= \\int_{-\\pi/2}^{\\pi/3} \\cos x \\, dx = [\\sin x]_{-\\pi/2}^{\\pi/3} = \\frac{\\sqrt{3}}{2} - (-1) = 1 + \\frac{\\sqrt{3}}{2}$. The required area is $1 + \\frac{\\sqrt{3}}{2}$ sq units (about $1.87$ sq units).',
    steps: [
      { step: 'Notes $\\cos x \\ge 0$ on the interval and writes $\\int_{-\\pi/2}^{\\pi/3} \\cos x \\, dx$', marks: 1 },
      { step: 'Evaluates to get $1 + \\frac{\\sqrt{3}}{2}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-b03', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using integration, find the area of the region bounded by the line $y = 2x + 3$, the x-axis and the lines $x = -3$ and $x = 1$.',
    answer: 'The line crosses the x-axis at $x = -\\frac{3}{2}$; it is below the axis on $\\left[-3, -\\frac{3}{2}\\right]$ and above it on $\\left[-\\frac{3}{2}, 1\\right]$. Area $= \\left|\\int_{-3}^{-3/2} (2x + 3) \\, dx\\right| + \\int_{-3/2}^{1} (2x + 3) \\, dx = \\left|[x^{2} + 3x]_{-3}^{-3/2}\\right| + [x^{2} + 3x]_{-3/2}^{1} = \\left|-\\frac{9}{4} - 0\\right| + \\left(4 + \\frac{9}{4}\\right) = \\frac{9}{4} + \\frac{25}{4} = \\frac{17}{2}$. The required area is $\\frac{17}{2}$ sq units.',
    steps: [
      { step: 'Finds that the line crosses the x-axis at $x = -\\frac{3}{2}$ and splits the integral there', marks: 1 },
      { step: 'Evaluates the parts as $\\frac{9}{4}$ and $\\frac{25}{4}$ and gets $\\frac{17}{2}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-b04', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using integration, find the area of the part of the ellipse $4x^{2} + 25y^{2} = 100$ that lies in the first quadrant.',
    answer: 'Dividing by $100$: $\\frac{x^{2}}{25} + \\frac{y^{2}}{4} = 1$. In the first quadrant $y = \\frac{2}{5}\\sqrt{25 - x^{2}}$, $0 \\le x \\le 5$. Area $= \\frac{2}{5}\\int_{0}^{5} \\sqrt{25 - x^{2}} \\, dx = \\frac{2}{5}\\left[\\frac{x}{2}\\sqrt{25 - x^{2}} + \\frac{25}{2}\\sin^{-1}\\frac{x}{5}\\right]_{0}^{5} = \\frac{2}{5} \\times \\frac{25\\pi}{4} = \\frac{5\\pi}{2}$. The required area is $\\frac{5\\pi}{2}$ sq units.',
    steps: [
      { step: 'Writes $y = \\frac{2}{5}\\sqrt{25 - x^{2}}$ and the area as $\\frac{2}{5}\\int_{0}^{5} \\sqrt{25 - x^{2}} \\, dx$', marks: 1 },
      { step: 'Integrates correctly and gets $\\frac{5\\pi}{2}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-b05', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 2,
    text: 'Using integration, find the area of the region in the first quadrant bounded by the parabola $y^{2} = 4x$, the y-axis and the line $y = 4$.',
    answer: 'The region lies between the y-axis and the parabola, where $x = \\frac{y^{2}}{4}$, for $0 \\le y \\le 4$. Using horizontal strips, area $= \\int_{0}^{4} \\frac{y^{2}}{4} \\, dy = \\left[\\frac{y^{3}}{12}\\right]_{0}^{4} = \\frac{64}{12} = \\frac{16}{3}$. The required area is $\\frac{16}{3}$ sq units.',
    steps: [
      { step: 'Writes $x = \\frac{y^{2}}{4}$ and the area as $\\int_{0}^{4} \\frac{y^{2}}{4} \\, dy$', marks: 1 },
      { step: 'Evaluates to get $\\frac{16}{3}$ sq units', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-aoi-r2-c01', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 3,
    text: 'Using integration, find the area of the region enclosed by the parabola $y^{2} = x$ and the line $x + y = 2$.',
    answer: 'Substituting $x = 2 - y$ into $y^{2} = x$: $y^{2} + y - 2 = 0$, so $(y + 2)(y - 1) = 0$, giving $y = -2$ and $y = 1$ (points $(4, -2)$ and $(1, 1)$). For $-2 \\le y \\le 1$ the line ($x = 2 - y$) lies to the right of the parabola ($x = y^{2}$). Using horizontal strips, area $= \\int_{-2}^{1} (2 - y - y^{2}) \\, dy = \\left[2y - \\frac{y^{2}}{2} - \\frac{y^{3}}{3}\\right]_{-2}^{1} = \\left(2 - \\frac{1}{2} - \\frac{1}{3}\\right) - \\left(-4 - 2 + \\frac{8}{3}\\right) = \\frac{7}{6} + \\frac{10}{3} = \\frac{9}{2}$. The required area is $\\frac{9}{2}$ sq units.',
    steps: [
      { step: 'Finds the intersection points $(1, 1)$ and $(4, -2)$', marks: 1 },
      { step: 'Sets up area $= \\int_{-2}^{1} (2 - y - y^{2}) \\, dy$ (or an equivalent split with vertical strips)', marks: 1 },
      { step: 'Evaluates to get $\\frac{9}{2}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-c02', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 3,
    text: 'Using integration, find the area of the region in the first quadrant bounded by the circle $x^{2} + y^{2} = 8$, the x-axis and the lines $x = 0$ and $x = 2$.',
    answer: 'In the first quadrant $y = \\sqrt{8 - x^{2}}$. Area $= \\int_{0}^{2} \\sqrt{8 - x^{2}} \\, dx = \\left[\\frac{x}{2}\\sqrt{8 - x^{2}} + 4\\sin^{-1}\\frac{x}{2\\sqrt{2}}\\right]_{0}^{2} = \\left(\\frac{2}{2} \\times 2 + 4 \\times \\frac{\\pi}{4}\\right) - 0 = 2 + \\pi$. The required area is $(2 + \\pi)$ sq units.',
    steps: [
      { step: 'Writes $y = \\sqrt{8 - x^{2}}$ and the area as $\\int_{0}^{2} \\sqrt{8 - x^{2}} \\, dx$', marks: 1 },
      { step: 'Applies the standard integral of $\\sqrt{a^{2} - x^{2}}$ with $a = 2\\sqrt{2}$', marks: 1 },
      { step: 'Substitutes limits ($\\sin^{-1}\\frac{1}{\\sqrt{2}} = \\frac{\\pi}{4}$) and gets $2 + \\pi$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-c03', chapter: C, topic: B, type: 'short', complexity: 'medium', marks: 3,
    text: 'Using integration, find the area of the triangle formed by the lines $y = 2x + 4$, $y = 4 - x$ and the x-axis.',
    answer: 'The line $y = 2x + 4$ meets the x-axis at $(-2, 0)$, the line $y = 4 - x$ meets it at $(4, 0)$, and the two lines meet at $(0, 4)$. The upper boundary is $y = 2x + 4$ for $-2 \\le x \\le 0$ and $y = 4 - x$ for $0 \\le x \\le 4$. Area $= \\int_{-2}^{0} (2x + 4) \\, dx + \\int_{0}^{4} (4 - x) \\, dx = [x^{2} + 4x]_{-2}^{0} + \\left[4x - \\frac{x^{2}}{2}\\right]_{0}^{4} = 4 + 8 = 12$. The area of the triangle is $12$ sq units.',
    steps: [
      { step: 'Finds the vertices $(-2, 0)$, $(4, 0)$ and $(0, 4)$', marks: 1 },
      { step: 'Sets up the two integrals split at $x = 0$', marks: 1 },
      { step: 'Evaluates them as $4$ and $8$ and gets $12$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-c04', chapter: C, topic: U, type: 'short', complexity: 'medium', marks: 3,
    text: 'Using integration, find the area of the region in the first quadrant bounded by the ellipse $\\frac{x^{2}}{16} + \\frac{y^{2}}{4} = 1$, the x-axis and the lines $x = 0$ and $x = 2$.',
    answer: 'In the first quadrant $y = \\frac{1}{2}\\sqrt{16 - x^{2}}$. Area $= \\frac{1}{2}\\int_{0}^{2} \\sqrt{16 - x^{2}} \\, dx = \\frac{1}{2}\\left[\\frac{x}{2}\\sqrt{16 - x^{2}} + 8\\sin^{-1}\\frac{x}{4}\\right]_{0}^{2} = \\frac{1}{2}\\left(\\sqrt{12} + 8 \\times \\frac{\\pi}{6}\\right) = \\frac{1}{2}\\left(2\\sqrt{3} + \\frac{4\\pi}{3}\\right) = \\sqrt{3} + \\frac{2\\pi}{3}$. The required area is $\\sqrt{3} + \\frac{2\\pi}{3}$ sq units (about $3.83$ sq units).',
    steps: [
      { step: 'Writes $y = \\frac{1}{2}\\sqrt{16 - x^{2}}$ and the area as $\\frac{1}{2}\\int_{0}^{2} \\sqrt{16 - x^{2}} \\, dx$', marks: 1 },
      { step: 'Applies the standard integral of $\\sqrt{a^{2} - x^{2}}$ correctly', marks: 1 },
      { step: 'Substitutes limits and gets $\\sqrt{3} + \\frac{2\\pi}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-c05', chapter: C, topic: B, type: 'short', complexity: 'hard', marks: 3,
    text: 'Using integration, find the area of the region bounded by the curve $y = |x^{2} - 4|$, the x-axis and the lines $x = 0$ and $x = 3$.',
    answer: 'For $0 \\le x \\le 2$, $x^{2} - 4 \\le 0$, so $y = 4 - x^{2}$; for $2 \\le x \\le 3$, $y = x^{2} - 4$. Area $= \\int_{0}^{2} (4 - x^{2}) \\, dx + \\int_{2}^{3} (x^{2} - 4) \\, dx = \\left[4x - \\frac{x^{3}}{3}\\right]_{0}^{2} + \\left[\\frac{x^{3}}{3} - 4x\\right]_{2}^{3} = \\frac{16}{3} + \\left(-3 + \\frac{16}{3}\\right) = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$. The required area is $\\frac{23}{3}$ sq units.',
    steps: [
      { step: 'Removes the modulus: $4 - x^{2}$ on $[0, 2]$ and $x^{2} - 4$ on $[2, 3]$', marks: 1 },
      { step: 'Evaluates the first integral as $\\frac{16}{3}$', marks: 1 },
      { step: 'Evaluates the second as $\\frac{7}{3}$ and gets total area $\\frac{23}{3}$ sq units', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-aoi-r2-d01', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the triangle whose vertices are $P(2, 0)$, $Q(4, 5)$ and $R(6, 3)$.',
    answer: 'Equations of the sides: $PQ$: slope $\\frac{5}{2}$, so $y = \\frac{5}{2}(x - 2) = \\frac{5x - 10}{2}$. $QR$: slope $\\frac{3 - 5}{6 - 4} = -1$, so $y = 9 - x$. $PR$: slope $\\frac{3}{4}$, so $y = \\frac{3}{4}(x - 2)$. Side $PR$ is the lower boundary for $2 \\le x \\le 6$; the upper boundary is $PQ$ on $[2, 4]$ and $QR$ on $[4, 6]$. Area $= \\int_{2}^{4} \\left[\\frac{5}{2}(x - 2) - \\frac{3}{4}(x - 2)\\right] dx + \\int_{4}^{6} \\left[9 - x - \\frac{3}{4}(x - 2)\\right] dx = \\int_{2}^{4} \\frac{7}{4}(x - 2) \\, dx + \\int_{4}^{6} \\frac{42 - 7x}{4} \\, dx$, since $9 - x - \\frac{3x - 6}{4} = \\frac{42 - 7x}{4}$. First: $\\frac{7}{4}\\left[\\frac{(x - 2)^{2}}{2}\\right]_{2}^{4} = \\frac{7}{4} \\times 2 = \\frac{7}{2}$. Second: $\\frac{1}{4}\\left[42x - \\frac{7x^{2}}{2}\\right]_{4}^{6} = \\frac{1}{4}\\left[(252 - 126) - (168 - 56)\\right] = \\frac{14}{4} = \\frac{7}{2}$. Area $= \\frac{7}{2} + \\frac{7}{2} = 7$ sq units.',
    steps: [
      { step: 'Finds the equations of $PQ$ ($y = \\frac{5x - 10}{2}$) and $QR$ ($y = 9 - x$)', marks: 1 },
      { step: 'Finds the equation of $PR$ ($y = \\frac{3}{4}(x - 2)$)', marks: 1 },
      { step: 'Sets up the area as two integrals split at $x = 4$ with $PR$ as the lower boundary', marks: 1 },
      { step: 'Evaluates the first integral as $\\frac{7}{2}$', marks: 1 },
      { step: 'Evaluates the second as $\\frac{7}{2}$ and gets total area $7$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d02', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the triangle formed by the lines $3x - 2y + 1 = 0$, $2x + 3y - 21 = 0$ and $x - 5y + 9 = 0$.',
    answer: 'Vertices: $3x - 2y + 1 = 0$ and $x - 5y + 9 = 0$ meet at $A(1, 2)$; $3x - 2y + 1 = 0$ and $2x + 3y - 21 = 0$ meet at $B(3, 5)$; $2x + 3y - 21 = 0$ and $x - 5y + 9 = 0$ meet at $C(6, 3)$. In slope form the lines are $y = \\frac{3x + 1}{2}$ ($AB$), $y = \\frac{21 - 2x}{3}$ ($BC$) and $y = \\frac{x + 9}{5}$ ($AC$). $AC$ is the lower boundary for $1 \\le x \\le 6$; the upper boundary is $AB$ on $[1, 3]$ and $BC$ on $[3, 6]$. Area $= \\int_{1}^{3} \\left(\\frac{3x + 1}{2} - \\frac{x + 9}{5}\\right) dx + \\int_{3}^{6} \\left(\\frac{21 - 2x}{3} - \\frac{x + 9}{5}\\right) dx = \\int_{1}^{3} \\frac{13x - 13}{10} \\, dx + \\int_{3}^{6} \\frac{78 - 13x}{15} \\, dx = \\frac{13}{10}\\left[\\frac{x^{2}}{2} - x\\right]_{1}^{3} + \\frac{13}{15}\\left[6x - \\frac{x^{2}}{2}\\right]_{3}^{6} = \\frac{13}{10} \\times 2 + \\frac{13}{15} \\times \\frac{9}{2} = \\frac{13}{5} + \\frac{39}{10} = \\frac{13}{2}$. The area of the triangle is $\\frac{13}{2}$ sq units.',
    steps: [
      { step: 'Finds the vertex $B(3, 5)$', marks: 1 },
      { step: 'Finds the vertices $A(1, 2)$ and $C(6, 3)$', marks: 1 },
      { step: 'Sets up the area as two integrals split at $x = 3$ with correct upper and lower boundaries', marks: 1 },
      { step: 'Evaluates the first integral as $\\frac{13}{5}$', marks: 1 },
      { step: 'Evaluates the second as $\\frac{39}{10}$ and gets total area $\\frac{13}{2}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d03', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Sketch the parabola $y = x^{2} - 4x + 3$ and the line $y = x - 1$. Using integration, find the area of the region enclosed between them. Also find the area of the region bounded by the parabola and the x-axis.',
    answer: 'The parabola $y = (x - 1)(x - 3)$ opens upward, has vertex $(2, -1)$ and meets the x-axis at $x = 1$ and $x = 3$. It meets the line where $x^{2} - 4x + 3 = x - 1$, that is $x^{2} - 5x + 4 = 0$, so $x = 1$ and $x = 4$ (points $(1, 0)$ and $(4, 3)$). For $1 \\le x \\le 4$ the line lies above the parabola. Area $= \\int_{1}^{4} \\left[(x - 1) - (x^{2} - 4x + 3)\\right] dx = \\int_{1}^{4} (-x^{2} + 5x - 4) \\, dx = \\left[-\\frac{x^{3}}{3} + \\frac{5x^{2}}{2} - 4x\\right]_{1}^{4} = \\left(-\\frac{64}{3} + 40 - 16\\right) - \\left(-\\frac{1}{3} + \\frac{5}{2} - 4\\right) = \\frac{8}{3} + \\frac{11}{6} = \\frac{9}{2}$ sq units. The parabola lies below the x-axis between $x = 1$ and $x = 3$, so the area it bounds with the x-axis is $\\left|\\int_{1}^{3} (x^{2} - 4x + 3) \\, dx\\right| = \\left|\\left[\\frac{x^{3}}{3} - 2x^{2} + 3x\\right]_{1}^{3}\\right| = \\left|0 - \\frac{4}{3}\\right| = \\frac{4}{3}$ sq units.',
    steps: [
      { step: 'Sketches the parabola (vertex $(2, -1)$, roots $1$ and $3$) and finds the intersections with the line at $x = 1$ and $x = 4$', marks: 1 },
      { step: 'Sets up the enclosed area as $\\int_{1}^{4} (-x^{2} + 5x - 4) \\, dx$', marks: 1 },
      { step: 'Evaluates it as $\\frac{9}{2}$ sq units', marks: 1 },
      { step: 'Sets up the area with the x-axis as $\\left|\\int_{1}^{3} (x^{2} - 4x + 3) \\, dx\\right|$', marks: 1 },
      { step: 'Evaluates it as $\\frac{4}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d04', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the part of the region enclosed by the ellipse $\\frac{x^{2}}{25} + \\frac{y^{2}}{16} = 1$ that lies between the lines $x = -\\frac{5}{2}$ and $x = \\frac{5}{2}$.',
    answer: 'Above the x-axis $y = \\frac{4}{5}\\sqrt{25 - x^{2}}$. The region is symmetric about both axes, so area $= 4\\int_{0}^{5/2} \\frac{4}{5}\\sqrt{25 - x^{2}} \\, dx = \\frac{16}{5}\\left[\\frac{x}{2}\\sqrt{25 - x^{2}} + \\frac{25}{2}\\sin^{-1}\\frac{x}{5}\\right]_{0}^{5/2}$. At $x = \\frac{5}{2}$: $\\frac{5}{4}\\sqrt{\\frac{75}{4}} + \\frac{25}{2} \\times \\frac{\\pi}{6} = \\frac{25\\sqrt{3}}{8} + \\frac{25\\pi}{12}$; at $x = 0$ the value is $0$. Area $= \\frac{16}{5}\\left(\\frac{25\\sqrt{3}}{8} + \\frac{25\\pi}{12}\\right) = 10\\sqrt{3} + \\frac{20\\pi}{3}$ sq units (about $38.26$ sq units).',
    steps: [
      { step: 'Writes $y = \\frac{4}{5}\\sqrt{25 - x^{2}}$', marks: 1 },
      { step: 'Uses symmetry to write area $= 4\\int_{0}^{5/2} \\frac{4}{5}\\sqrt{25 - x^{2}} \\, dx$', marks: 1 },
      { step: 'Applies the standard integral of $\\sqrt{a^{2} - x^{2}}$ correctly', marks: 1 },
      { step: 'Evaluates the bracket at $x = \\frac{5}{2}$ as $\\frac{25\\sqrt{3}}{8} + \\frac{25\\pi}{12}$', marks: 1 },
      { step: 'Gets area $10\\sqrt{3} + \\frac{20\\pi}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d05', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Using integration, find the area of the region $\\{(x, y) : x^{2} \\le y \\le |x| + 2\\}$.',
    answer: 'Both $y = x^{2}$ and $y = |x| + 2$ are symmetric about the y-axis, so the area is twice the area for $x \\ge 0$. For $x \\ge 0$ the boundaries are $y = x^{2}$ and $y = x + 2$, which meet where $x^{2} - x - 2 = 0$, so $x = 2$ (the root $x = -1$ is not in $x \\ge 0$); the point is $(2, 4)$, and by symmetry the other corner is $(-2, 4)$. For $0 \\le x \\le 2$, $x + 2 \\ge x^{2}$. Area $= 2\\int_{0}^{2} (x + 2 - x^{2}) \\, dx = 2\\left[\\frac{x^{2}}{2} + 2x - \\frac{x^{3}}{3}\\right]_{0}^{2} = 2\\left(2 + 4 - \\frac{8}{3}\\right) = 2 \\times \\frac{10}{3} = \\frac{20}{3}$. The required area is $\\frac{20}{3}$ sq units.',
    steps: [
      { step: 'Notes the symmetry about the y-axis and writes $y = x + 2$ for $x \\ge 0$', marks: 1 },
      { step: 'Finds the intersection points $(2, 4)$ and $(-2, 4)$', marks: 1 },
      { step: 'Sets up area $= 2\\int_{0}^{2} (x + 2 - x^{2}) \\, dx$', marks: 1 },
      { step: 'Integrates correctly to get $\\frac{10}{3}$ for one half', marks: 1 },
      { step: 'Gets total area $\\frac{20}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d06', chapter: C, topic: U, type: 'long', complexity: 'medium', marks: 5,
    text: 'Sketch the curve $y = x^{2} - 2x - 3$ and, using integration, find the area of the region bounded by the curve, the x-axis and the lines $x = 0$ and $x = 4$.',
    answer: 'The curve $y = (x + 1)(x - 3)$ is an upward parabola with vertex $(1, -4)$, meeting the x-axis at $x = -1$ and $x = 3$. On $[0, 3]$ it lies below the x-axis and on $[3, 4]$ above it. Let $F(x) = \\frac{x^{3}}{3} - x^{2} - 3x$. Then $F(0) = 0$, $F(3) = 9 - 9 - 9 = -9$ and $F(4) = \\frac{64}{3} - 16 - 12 = -\\frac{20}{3}$. Area $= \\left|\\int_{0}^{3} (x^{2} - 2x - 3) \\, dx\\right| + \\int_{3}^{4} (x^{2} - 2x - 3) \\, dx = |F(3) - F(0)| + (F(4) - F(3)) = 9 + \\frac{7}{3} = \\frac{34}{3}$. The required area is $\\frac{34}{3}$ sq units.',
    steps: [
      { step: 'Sketches the parabola and finds where it crosses the x-axis ($x = -1$, $x = 3$)', marks: 1 },
      { step: 'Splits the area at $x = 3$, taking the absolute value of the part below the axis', marks: 1 },
      { step: 'Integrates correctly', marks: 1 },
      { step: 'Gets the two parts as $9$ and $\\frac{7}{3}$', marks: 1 },
      { step: 'Gets total area $\\frac{34}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d07', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the region bounded by the curve $y = 2\\sqrt{x}$, the line $y = x - 3$ and the x-axis.',
    answer: 'The curve $y = 2\\sqrt{x}$ is the upper half of $y^{2} = 4x$. It meets the line where $2\\sqrt{x} = x - 3$; with $t = \\sqrt{x}$, $t^{2} - 2t - 3 = 0$, so $t = 3$ (the root $t = -1$ is rejected since $t \\ge 0$), giving $x = 9$ and the point $(9, 6)$. The line meets the x-axis at $(3, 0)$. The region lies under the curve from $x = 0$ to $x = 9$, with the part under the line from $x = 3$ to $x = 9$ removed. Area $= \\int_{0}^{9} 2\\sqrt{x} \\, dx - \\int_{3}^{9} (x - 3) \\, dx = \\frac{4}{3}[x^{3/2}]_{0}^{9} - \\left[\\frac{(x - 3)^{2}}{2}\\right]_{3}^{9} = \\frac{4}{3} \\times 27 - 18 = 36 - 18 = 18$. The required area is $18$ sq units.',
    steps: [
      { step: 'Solves $2\\sqrt{x} = x - 3$ to get the intersection $(9, 6)$, rejecting the extra root', marks: 1 },
      { step: 'Finds that the line meets the x-axis at $(3, 0)$ and identifies the region', marks: 1 },
      { step: 'Sets up area $= \\int_{0}^{9} 2\\sqrt{x} \\, dx - \\int_{3}^{9} (x - 3) \\, dx$', marks: 1 },
      { step: 'Evaluates the integrals as $36$ and $18$', marks: 1 },
      { step: 'Gets area $18$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d08', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Using integration, find the area of the region enclosed by the curves $y = |x - 2|$ and $y = 4 - |x|$.',
    answer: 'Find where they meet. For $x \\ge 2$: $x - 2 = 4 - x$ gives $x = 3$, point $(3, 1)$. For $x \\le 0$: $2 - x = 4 + x$ gives $x = -1$, point $(-1, 3)$. For $0 \\le x \\le 2$ the graphs are $y = 2 - x$ and $y = 4 - x$, which are parallel and do not meet. On $[-1, 3]$, $4 - |x| \\ge |x - 2|$. Area $= \\int_{-1}^{0} \\left[(4 + x) - (2 - x)\\right] dx + \\int_{0}^{2} \\left[(4 - x) - (2 - x)\\right] dx + \\int_{2}^{3} \\left[(4 - x) - (x - 2)\\right] dx = \\int_{-1}^{0} (2 + 2x) \\, dx + \\int_{0}^{2} 2 \\, dx + \\int_{2}^{3} (6 - 2x) \\, dx = [2x + x^{2}]_{-1}^{0} + 4 + [6x - x^{2}]_{2}^{3} = 1 + 4 + 1 = 6$. The required area is $6$ sq units.',
    steps: [
      { step: 'Finds the meeting points $(-1, 3)$ and $(3, 1)$, noting the parallel pieces on $[0, 2]$', marks: 1 },
      { step: 'Writes both functions piecewise on $[-1, 0]$, $[0, 2]$ and $[2, 3]$', marks: 1 },
      { step: 'Sets up the three integrals of (upper minus lower)', marks: 1 },
      { step: 'Evaluates them as $1$, $4$ and $1$', marks: 1 },
      { step: 'Gets total area $6$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d09', chapter: C, topic: U, type: 'long', complexity: 'hard', marks: 5,
    text: 'Using integration, find the area enclosed by the ellipse $x^{2} + 9y^{2} = 36$. Also find the area of the part of the ellipse that lies to the right of the line $x = 3$.',
    answer: 'Dividing by $36$: $\\frac{x^{2}}{36} + \\frac{y^{2}}{4} = 1$, so above the x-axis $y = \\frac{1}{3}\\sqrt{36 - x^{2}}$. Whole area $= 4\\int_{0}^{6} \\frac{1}{3}\\sqrt{36 - x^{2}} \\, dx = \\frac{4}{3}\\left[\\frac{x}{2}\\sqrt{36 - x^{2}} + 18\\sin^{-1}\\frac{x}{6}\\right]_{0}^{6} = \\frac{4}{3} \\times 9\\pi = 12\\pi$ sq units. The part to the right of $x = 3$ is symmetric about the x-axis: area $= 2\\int_{3}^{6} \\frac{1}{3}\\sqrt{36 - x^{2}} \\, dx = \\frac{2}{3}\\left[\\frac{x}{2}\\sqrt{36 - x^{2}} + 18\\sin^{-1}\\frac{x}{6}\\right]_{3}^{6} = \\frac{2}{3}\\left[9\\pi - \\left(\\frac{9\\sqrt{3}}{2} + 3\\pi\\right)\\right] = \\frac{2}{3}\\left(6\\pi - \\frac{9\\sqrt{3}}{2}\\right) = 4\\pi - 3\\sqrt{3}$ sq units (about $7.37$ sq units).',
    steps: [
      { step: 'Writes the standard form and $y = \\frac{1}{3}\\sqrt{36 - x^{2}}$', marks: 1 },
      { step: 'Uses symmetry and the standard integral to get the whole area $12\\pi$ sq units', marks: 1 },
      { step: 'Sets up the area to the right of $x = 3$ as $\\frac{2}{3}\\int_{3}^{6} \\sqrt{36 - x^{2}} \\, dx$', marks: 1 },
      { step: 'Evaluates the bracket at $6$ ($9\\pi$) and at $3$ ($\\frac{9\\sqrt{3}}{2} + 3\\pi$)', marks: 1 },
      { step: 'Gets $4\\pi - 3\\sqrt{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d10', chapter: C, topic: U, type: 'long', complexity: 'hard', marks: 5, competency: true,
    text: 'The front of an arched doorway is the region bounded by the floor (the x-axis), the two vertical sides $x = -1$ and $x = 1$, and the arch $y = 2 + \\sqrt{4 - x^{2}}$, where $x$ and $y$ are in metres. (a) Using integration, find the area of the front of the doorway. (b) The part of the doorway above the height $y = 2$ is filled with glass. Find the area of the glass.',
    answer: '(a) Area $= \\int_{-1}^{1} \\left(2 + \\sqrt{4 - x^{2}}\\right) dx = \\int_{-1}^{1} 2 \\, dx + 2\\int_{0}^{1} \\sqrt{4 - x^{2}} \\, dx = 4 + 2\\left[\\frac{x}{2}\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2}\\right]_{0}^{1} = 4 + 2\\left(\\frac{\\sqrt{3}}{2} + \\frac{\\pi}{3}\\right) = 4 + \\sqrt{3} + \\frac{2\\pi}{3}$ sq m (about $7.83$ sq m). (b) Above $y = 2$ the glass lies between $y = 2$ and the arch for $-1 \\le x \\le 1$: area $= \\int_{-1}^{1} \\left(2 + \\sqrt{4 - x^{2}} - 2\\right) dx = 2\\int_{0}^{1} \\sqrt{4 - x^{2}} \\, dx = \\sqrt{3} + \\frac{2\\pi}{3}$ sq m (about $3.83$ sq m).',
    steps: [
      { step: 'Sets up the doorway area as $\\int_{-1}^{1} \\left(2 + \\sqrt{4 - x^{2}}\\right) dx$', marks: 1 },
      { step: 'Uses symmetry and the standard integral of $\\sqrt{a^{2} - x^{2}}$', marks: 1 },
      { step: 'Gets the doorway area $4 + \\sqrt{3} + \\frac{2\\pi}{3}$ sq m', marks: 1 },
      { step: 'Sets up the glass area as $\\int_{-1}^{1} \\sqrt{4 - x^{2}} \\, dx$', marks: 1 },
      { step: 'Gets the glass area $\\sqrt{3} + \\frac{2\\pi}{3}$ sq m', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d11', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'Using integration, find the area of the region $\\{(x, y) : y \\le x + 3, \\; 5x + 2y \\le 13, \\; 2x + 5y \\ge 1\\}$.',
    answer: 'The region is the triangle bounded by $y = x + 3$, $y = \\frac{13 - 5x}{2}$ and $y = \\frac{1 - 2x}{5}$. Vertices: $y = x + 3$ and $y = \\frac{1 - 2x}{5}$ meet at $(-2, 1)$; $y = x + 3$ and $y = \\frac{13 - 5x}{2}$ meet at $(1, 4)$; $y = \\frac{13 - 5x}{2}$ and $y = \\frac{1 - 2x}{5}$ meet at $(3, -1)$. The lower boundary is $y = \\frac{1 - 2x}{5}$ for $-2 \\le x \\le 3$; the upper boundary is $y = x + 3$ on $[-2, 1]$ and $y = \\frac{13 - 5x}{2}$ on $[1, 3]$. Area $= \\int_{-2}^{1} \\left(x + 3 - \\frac{1 - 2x}{5}\\right) dx + \\int_{1}^{3} \\left(\\frac{13 - 5x}{2} - \\frac{1 - 2x}{5}\\right) dx = \\int_{-2}^{1} \\frac{7x + 14}{5} \\, dx + \\int_{1}^{3} \\frac{63 - 21x}{10} \\, dx = \\frac{7}{5}\\left[\\frac{x^{2}}{2} + 2x\\right]_{-2}^{1} + \\frac{21}{10}\\left[3x - \\frac{x^{2}}{2}\\right]_{1}^{3} = \\frac{7}{5} \\times \\frac{9}{2} + \\frac{21}{10} \\times 2 = \\frac{63}{10} + \\frac{42}{10} = \\frac{21}{2}$. The required area is $\\frac{21}{2}$ sq units.',
    steps: [
      { step: 'Recognises the region as a triangle and finds the vertex $(1, 4)$', marks: 1 },
      { step: 'Finds the vertices $(-2, 1)$ and $(3, -1)$', marks: 1 },
      { step: 'Sets up two integrals split at $x = 1$ with $2x + 5y = 1$ as the lower boundary', marks: 1 },
      { step: 'Evaluates the first integral as $\\frac{63}{10}$', marks: 1 },
      { step: 'Evaluates the second as $\\frac{21}{5}$ and gets total area $\\frac{21}{2}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d12', chapter: C, topic: U, type: 'long', complexity: 'hard', marks: 5,
    text: 'Sketch the curve $x = 5 + 4y - y^{2}$ and, using integration, find the area of the region it encloses with the y-axis. Also find the area of the part of this region that lies in the first quadrant.',
    answer: 'The curve $x = 9 - (y - 2)^{2}$ is a parabola opening to the left with vertex $(9, 2)$. It meets the y-axis where $5 + 4y - y^{2} = 0$, that is $(5 - y)(1 + y) = 0$, so at $(0, -1)$ and $(0, 5)$. Using horizontal strips, area $= \\int_{-1}^{5} (5 + 4y - y^{2}) \\, dy = \\left[5y + 2y^{2} - \\frac{y^{3}}{3}\\right]_{-1}^{5} = \\left(25 + 50 - \\frac{125}{3}\\right) - \\left(-5 + 2 + \\frac{1}{3}\\right) = \\frac{100}{3} + \\frac{8}{3} = 36$ sq units. The part in the first quadrant has $y \\ge 0$: area $= \\int_{0}^{5} (5 + 4y - y^{2}) \\, dy = \\frac{100}{3}$ sq units.',
    steps: [
      { step: 'Sketches the parabola (vertex $(9, 2)$, opening left) and finds the y-intercepts $y = -1$, $y = 5$', marks: 1 },
      { step: 'Sets up the area as $\\int_{-1}^{5} (5 + 4y - y^{2}) \\, dy$', marks: 1 },
      { step: 'Evaluates it as $36$ sq units', marks: 1 },
      { step: 'Sets up the first-quadrant part as $\\int_{0}^{5} (5 + 4y - y^{2}) \\, dy$', marks: 1 },
      { step: 'Evaluates it as $\\frac{100}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d13', chapter: C, topic: B, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using integration, find the area of the region in the first quadrant bounded by the parabola $y = \\frac{x^{2}}{2}$, the line $x + y = 4$ and the x-axis.',
    answer: 'The parabola and the line meet where $\\frac{x^{2}}{2} = 4 - x$, that is $x^{2} + 2x - 8 = 0$, so $(x + 4)(x - 2) = 0$; in the first quadrant $x = 2$, giving the point $(2, 2)$. The line meets the x-axis at $(4, 0)$. The region lies under the parabola for $0 \\le x \\le 2$ and under the line for $2 \\le x \\le 4$. Area $= \\int_{0}^{2} \\frac{x^{2}}{2} \\, dx + \\int_{2}^{4} (4 - x) \\, dx = \\left[\\frac{x^{3}}{6}\\right]_{0}^{2} + \\left[4x - \\frac{x^{2}}{2}\\right]_{2}^{4} = \\frac{4}{3} + (8 - 6) = \\frac{4}{3} + 2 = \\frac{10}{3}$. The required area is $\\frac{10}{3}$ sq units.',
    steps: [
      { step: 'Forms $x^{2} + 2x - 8 = 0$ and gets the intersection $(2, 2)$', marks: 1 },
      { step: 'Finds that the line meets the x-axis at $(4, 0)$ and splits the region at $x = 2$', marks: 1 },
      { step: 'Sets up the two integrals', marks: 1 },
      { step: 'Evaluates them as $\\frac{4}{3}$ and $2$', marks: 1 },
      { step: 'Gets total area $\\frac{10}{3}$ sq units', marks: 1 },
    ],
  },
  {
    id: 'c12-aoi-r2-d14', chapter: C, topic: B, type: 'long', complexity: 'hard', marks: 5,
    text: 'The region in the first quadrant bounded by the parabola $y = 4 - x^{2}$ and the coordinate axes is divided into two parts by the line $y = 3x$. Using integration, find the area of each part.',
    answer: 'The line meets the parabola where $4 - x^{2} = 3x$, that is $x^{2} + 3x - 4 = 0$, so $(x + 4)(x - 1) = 0$; in the first quadrant $x = 1$, giving the point $(1, 3)$. The whole first-quadrant region has area $\\int_{0}^{2} (4 - x^{2}) \\, dx = 8 - \\frac{8}{3} = \\frac{16}{3}$. Part 1 (next to the y-axis, between the line below and the parabola above, $0 \\le x \\le 1$): area $= \\int_{0}^{1} (4 - x^{2} - 3x) \\, dx = \\left[4x - \\frac{x^{3}}{3} - \\frac{3x^{2}}{2}\\right]_{0}^{1} = 4 - \\frac{1}{3} - \\frac{3}{2} = \\frac{13}{6}$ sq units. Part 2 (between the line, the parabola and the x-axis): area $= \\frac{16}{3} - \\frac{13}{6} = \\frac{19}{6}$ sq units. (Check directly: $\\int_{0}^{1} 3x \\, dx + \\int_{1}^{2} (4 - x^{2}) \\, dx = \\frac{3}{2} + \\frac{5}{3} = \\frac{19}{6}$.)',
    steps: [
      { step: 'Finds the intersection of the line and parabola at $(1, 3)$', marks: 1 },
      { step: 'Finds the whole first-quadrant area $\\frac{16}{3}$', marks: 1 },
      { step: 'Sets up the part next to the y-axis as $\\int_{0}^{1} (4 - x^{2} - 3x) \\, dx$', marks: 1 },
      { step: 'Evaluates it as $\\frac{13}{6}$ sq units', marks: 1 },
      { step: 'Gets the other part as $\\frac{19}{6}$ sq units', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-aoi-r2-e01', chapter: C, topic: U, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A designer prints a wave pattern along the bottom edge of a banner. Taking the bottom edge as the x-axis, one wave is the region between the x-axis and the curve $y = 2\\sin x$ for $0 \\le x \\le \\pi$, where $x$ and $y$ are in decimetres. The inside of each wave is filled with ink.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'At what points does one wave meet the bottom edge, and what is its greatest height?',
        answer: 'It meets the x-axis where $2\\sin x = 0$, at $x = 0$ and $x = \\pi$. The greatest height is $2$ dm, at $x = \\frac{\\pi}{2}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write an integral that gives the area of one wave.',
        answer: 'Area $= \\int_{0}^{\\pi} 2\\sin x \\, dx$ (the curve is on or above the x-axis throughout).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area inked in one wave. OR Find the area of the part of one wave lying between the lines $x = \\frac{\\pi}{6}$ and $x = \\frac{\\pi}{2}$.',
        answer: 'Area $= 2[-\\cos x]_{0}^{\\pi} = 2(1 + 1) = 4$ sq dm. OR Area $= \\int_{\\pi/6}^{\\pi/2} 2\\sin x \\, dx = 2[-\\cos x]_{\\pi/6}^{\\pi/2} = 2\\left(0 + \\frac{\\sqrt{3}}{2}\\right) = \\sqrt{3}$ sq dm (about $1.73$ sq dm).',
      },
    ],
    answer: '(i) $x = 0$ and $x = \\pi$; greatest height $2$ dm. (ii) $\\int_{0}^{\\pi} 2\\sin x \\, dx$. (iii) $4$ sq dm; OR $\\sqrt{3}$ sq dm.',
  },
  {
    id: 'c12-aoi-r2-e02', chapter: C, topic: U, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A skateboard ramp has a flat side panel. Taking the bottom front corner as the origin, the panel is bounded by the ground (the x-axis), the vertical back edge $x = 4$ and the curved riding surface $y = \\frac{x^{2}}{8}$, where $x$ and $y$ are in metres.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the height of the ramp at its back edge.',
        answer: 'At $x = 4$, $y = \\frac{16}{8} = 2$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write an integral with respect to $x$ that gives the area of the side panel.',
        answer: 'Area $= \\int_{0}^{4} \\frac{x^{2}}{8} \\, dx$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area of the side panel. OR The space above the riding surface, between the curve, the y-axis and the line $y = 2$, is covered by a safety net. Using integration with respect to $y$, find the area of this net.',
        answer: 'Area $= \\left[\\frac{x^{3}}{24}\\right]_{0}^{4} = \\frac{64}{24} = \\frac{8}{3}$ sq m. OR On the curve $x = \\sqrt{8y} = 2\\sqrt{2}\\sqrt{y}$. Area $= \\int_{0}^{2} 2\\sqrt{2}\\, y^{1/2} \\, dy = 2\\sqrt{2} \\times \\frac{2}{3}[y^{3/2}]_{0}^{2} = 2\\sqrt{2} \\times \\frac{2}{3} \\times 2\\sqrt{2} = \\frac{16}{3}$ sq m (this agrees with the rectangle $4 \\times 2$ minus the panel, $8 - \\frac{8}{3}$).',
      },
    ],
    answer: '(i) $2$ m. (ii) $\\int_{0}^{4} \\frac{x^{2}}{8} \\, dx$. (iii) $\\frac{8}{3}$ sq m; OR the net has area $\\frac{16}{3}$ sq m.',
  },
  {
    id: 'c12-aoi-r2-e03', chapter: C, topic: B, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A company logo is drawn on a coordinate grid (units in cm). Its curved edge is the parabola $y = 6 - x^{2}$ and its straight edge is the line $y = x$. The logo is the region enclosed between the curve and the line.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the points where the straight edge meets the curved edge.',
        answer: '$6 - x^{2} = x$ gives $x^{2} + x - 6 = 0$, so $x = 2$ or $x = -3$. The points are $(2, 2)$ and $(-3, -3)$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write an integral that gives the area of the logo.',
        answer: 'The parabola lies above the line between the meeting points, so area $= \\int_{-3}^{2} (6 - x^{2} - x) \\, dx$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area of the logo. OR Find the area of the part of the logo that lies in the first quadrant.',
        answer: 'Area $= \\left[6x - \\frac{x^{3}}{3} - \\frac{x^{2}}{2}\\right]_{-3}^{2} = \\left(12 - \\frac{8}{3} - 2\\right) - \\left(-18 + 9 - \\frac{9}{2}\\right) = \\frac{22}{3} + \\frac{27}{2} = \\frac{125}{6}$ sq cm (about $20.8$ sq cm). OR In the first quadrant the logo lies between the line and the parabola for $0 \\le x \\le 2$: area $= \\int_{0}^{2} (6 - x - x^{2}) \\, dx = 12 - 2 - \\frac{8}{3} = \\frac{22}{3}$ sq cm.',
      },
    ],
    answer: '(i) $(2, 2)$ and $(-3, -3)$. (ii) $\\int_{-3}^{2} (6 - x - x^{2}) \\, dx$. (iii) $\\frac{125}{6}$ sq cm; OR $\\frac{22}{3}$ sq cm.',
  },
  {
    id: 'c12-aoi-r2-e04', chapter: C, topic: B, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'The front face of a camping tent is a flat sheet. Taking the middle of the bottom edge as the origin, the face is bounded by the ground (the x-axis) and the two sloping sides, which together form the graph of $y = 3 - \\frac{3}{2}|x|$, where $x$ and $y$ are in metres.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the points where the sloping sides meet the ground, and the height of the tent.',
        answer: '$3 - \\frac{3}{2}|x| = 0$ gives $x = \\pm 2$, so the sides meet the ground at $(-2, 0)$ and $(2, 0)$. The height is $3$ m, at $x = 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write an integral, using symmetry, that gives the area of the front face.',
        answer: 'Area $= 2\\int_{0}^{2} \\left(3 - \\frac{3x}{2}\\right) dx$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the area of the front face. OR The door is the part of the front face between the lines $x = -1$ and $x = 1$. Using integration, find the area of the door.',
        answer: 'Area $= 2\\left[3x - \\frac{3x^{2}}{4}\\right]_{0}^{2} = 2(6 - 3) = 6$ sq m. OR Door area $= 2\\int_{0}^{1} \\left(3 - \\frac{3x}{2}\\right) dx = 2\\left[3x - \\frac{3x^{2}}{4}\\right]_{0}^{1} = 2\\left(3 - \\frac{3}{4}\\right) = \\frac{9}{2}$ sq m.',
      },
    ],
    answer: '(i) $(-2, 0)$ and $(2, 0)$; height $3$ m. (ii) $2\\int_{0}^{2} \\left(3 - \\frac{3x}{2}\\right) dx$. (iii) $6$ sq m; OR the door has area $\\frac{9}{2}$ sq m.',
  },
];
