import type { Class12Question } from './types.js';

const C = 'Inverse Trigonometric Functions';
const DR = 'Domain, range and principal values';
const GR = 'Graphs of inverse trigonometric functions';
const EV = 'Evaluating expressions with principal values';

const AR_OPTIONS = [
  'Both A and R are true, and R is the correct explanation of A.',
  'Both A and R are true, but R is not the correct explanation of A.',
  'A is true, but R is false.',
  'A is false, but R is true.',
];

export const CH02_ITF_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-itf-r3-a01', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value of $\\sec^{-1}(-\\sqrt{2})$ is',
    options: ['$-\\frac{\\pi}{4}$', '$\\frac{\\pi}{4}$', '$\\frac{5\\pi}{4}$', '$\\frac{3\\pi}{4}$'],
    answer: 'Correct option: D) $\\frac{3\\pi}{4}$. We need $\\cos\\theta = -\\frac{1}{\\sqrt{2}}$ with $\\theta \\in [0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$, which gives $\\theta = \\frac{3\\pi}{4}$. $-\\frac{\\pi}{4}$ is the value of $\\operatorname{cosec}^{-1}(-\\sqrt{2})$, $\\frac{\\pi}{4}$ has a positive secant, and $\\frac{5\\pi}{4}$ is outside the principal range.',
  },
  {
    id: 'c12-itf-r3-a02', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The domain of $f(x) = \\sin^{-1}\\left(\\frac{3x + 1}{4}\\right)$ is',
    options: ['$[-1, 1]$', '$\\left[-\\frac{5}{3}, 1\\right]$', '$\\left[-1, \\frac{5}{3}\\right]$', '$\\left[-\\frac{5}{3}, \\frac{5}{3}\\right]$'],
    answer: 'Correct option: B) $\\left[-\\frac{5}{3}, 1\\right]$. We need $-1 \\le \\frac{3x + 1}{4} \\le 1$, so $-4 \\le 3x + 1 \\le 4$, i.e. $-5 \\le 3x \\le 3$ and $-\\frac{5}{3} \\le x \\le 1$. Option A is the domain of $\\sin^{-1}$ itself.',
  },
  {
    id: 'c12-itf-r3-a03', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value of $\\operatorname{cosec}^{-1}\\left(\\frac{2}{\\sqrt{3}}\\right)$ is',
    options: ['$\\frac{2\\pi}{3}$', '$-\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$'],
    answer: 'Correct option: D) $\\frac{\\pi}{3}$. We need $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ with $\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$, so $\\theta = \\frac{\\pi}{3}$. $\\frac{2\\pi}{3}$ has the same sine but is outside the principal range, $-\\frac{\\pi}{3}$ has a negative cosecant, and $\\frac{\\pi}{6}$ has cosecant $2$.',
  },
  {
    id: 'c12-itf-r3-a04', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The range of the function $f(x) = 3\\cot^{-1} x - \\pi$, $x \\in \\mathbb{R}$, is',
    options: ['$(-\\pi, 2\\pi)$', '$[-\\pi, 2\\pi]$', '$(0, 3\\pi)$', '$(-3\\pi, 0)$'],
    answer: 'Correct option: A) $(-\\pi, 2\\pi)$. Since $0 < \\cot^{-1} x < \\pi$ (open interval), $0 < 3\\cot^{-1} x < 3\\pi$, and subtracting $\\pi$ gives $-\\pi < f(x) < 2\\pi$. Option B wrongly includes the end points, option C forgets to subtract $\\pi$, and option D subtracts $\\pi$ before multiplying by 3.',
  },
  {
    id: 'c12-itf-r3-a05', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The domain of the function $f(x) = \\sqrt{\\cos^{-1} x - \\frac{\\pi}{2}}$ is',
    options: ['$[0, 1]$', '$[-1, 0]$', '$[-1, 1]$', '$(-1, 0)$'],
    answer: 'Correct option: B) $[-1, 0]$. $\\cos^{-1} x$ needs $x \\in [-1, 1]$, and the root needs $\\cos^{-1} x \\ge \\frac{\\pi}{2}$. Since $\\cos^{-1}$ is decreasing and $\\cos^{-1} 0 = \\frac{\\pi}{2}$, this holds exactly when $x \\le 0$. Together, $-1 \\le x \\le 0$, with both end points allowed (at $x = 0$ the root is of $0$, which is fine).',
  },
  {
    id: 'c12-itf-r3-a06', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The domain of the function $f(x) = \\sec^{-1}(x^{2} + 1)$ is',
    options: ['$\\mathbb{R}$', '$(-\\infty, -1] \\cup [1, \\infty)$', '$[1, \\infty)$', '$\\mathbb{R} - \\{0\\}$'],
    answer: 'Correct option: A) $\\mathbb{R}$. $\\sec^{-1} t$ is defined when $|t| \\ge 1$. Here $t = x^{2} + 1 \\ge 1$ for every real $x$, so $f$ is defined everywhere. Option B is the domain of $\\sec^{-1}$ in the variable $t$, not in $x$.',
  },
  {
    id: 'c12-itf-r3-a07', chapter: C, topic: GR, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The graph of $y = \\cot^{-1} x$ crosses the $x$-axis at exactly one point.\nReason (R): $\\cot^{-1} x$ takes every value in the interval $(0, \\pi)$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false, but R is true. R is true: the range of $\\cot^{-1}$ is $(0, \\pi)$ and every value in it is taken. But because $0$ is not in this range, $y = \\cot^{-1} x$ is never $0$: the graph never meets the $x$-axis (it only approaches $y = 0$ as $x \\to \\infty$). So A is false.',
  },
  {
    id: 'c12-itf-r3-a08', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\sin^{-1}\\left(\\sin\\left(-\\frac{11\\pi}{6}\\right)\\right)$ is',
    options: ['$-\\frac{11\\pi}{6}$', '$-\\frac{\\pi}{6}$', '$\\frac{\\pi}{6}$', '$\\frac{5\\pi}{6}$'],
    answer: 'Correct option: C) $\\frac{\\pi}{6}$. $\\sin\\left(-\\frac{11\\pi}{6}\\right) = \\sin\\left(-\\frac{11\\pi}{6} + 2\\pi\\right) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$, and $\\frac{\\pi}{6}$ lies in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. $-\\frac{11\\pi}{6}$ is outside the principal range, and $-\\frac{\\pi}{6}$ has the wrong sign.',
  },
  {
    id: 'c12-itf-r3-a09', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\tan^{-1}\\left(\\tan\\left(-\\frac{7\\pi}{5}\\right)\\right)$ is',
    options: ['$-\\frac{7\\pi}{5}$', '$\\frac{3\\pi}{5}$', '$\\frac{2\\pi}{5}$', '$-\\frac{2\\pi}{5}$'],
    answer: 'Correct option: D) $-\\frac{2\\pi}{5}$. Tangent has period $\\pi$, so $\\tan\\left(-\\frac{7\\pi}{5}\\right) = \\tan\\left(-\\frac{7\\pi}{5} + \\pi\\right) = \\tan\\left(-\\frac{2\\pi}{5}\\right)$, and $-\\frac{2\\pi}{5} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$. $\\frac{3\\pi}{5}$ has the same tangent but is outside the principal range.',
  },
  {
    id: 'c12-itf-r3-a10', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\cot^{-1}\\left(\\cot\\frac{9\\pi}{7}\\right)$ is',
    options: ['$\\frac{9\\pi}{7}$', '$-\\frac{5\\pi}{7}$', '$\\frac{2\\pi}{7}$', '$\\frac{5\\pi}{7}$'],
    answer: 'Correct option: C) $\\frac{2\\pi}{7}$. Cotangent has period $\\pi$, so $\\cot\\frac{9\\pi}{7} = \\cot\\left(\\frac{9\\pi}{7} - \\pi\\right) = \\cot\\frac{2\\pi}{7}$, and $\\frac{2\\pi}{7} \\in (0, \\pi)$. $-\\frac{5\\pi}{7}$ has the same cotangent but lies outside $(0, \\pi)$, and $\\frac{5\\pi}{7}$ has a negative cotangent.',
  },
  {
    id: 'c12-itf-r3-a11', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\sin^{-1}\\left(\\cos\\left(-\\frac{2\\pi}{9}\\right)\\right)$ is',
    options: ['$-\\frac{2\\pi}{9}$', '$\\frac{2\\pi}{9}$', '$\\frac{5\\pi}{18}$', '$\\frac{13\\pi}{18}$'],
    answer: 'Correct option: C) $\\frac{5\\pi}{18}$. $\\cos\\left(-\\frac{2\\pi}{9}\\right) = \\cos\\frac{2\\pi}{9} = \\sin\\left(\\frac{\\pi}{2} - \\frac{2\\pi}{9}\\right) = \\sin\\frac{5\\pi}{18}$, and $\\frac{5\\pi}{18} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. $\\frac{13\\pi}{18}$ has the same sine but is outside the principal range; $\\pm\\frac{2\\pi}{9}$ confuse sine with cosine.',
  },
  {
    id: 'c12-itf-r3-a12', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\sin\\left(\\cot^{-1}\\left(-\\frac{5}{12}\\right)\\right)$ is',
    options: ['$\\frac{5}{13}$', '$-\\frac{12}{13}$', '$\\frac{13}{12}$', '$\\frac{12}{13}$'],
    answer: 'Correct option: D) $\\frac{12}{13}$. Let $\\theta = \\cot^{-1}\\left(-\\frac{5}{12}\\right) \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, where sine is positive. Then $\\operatorname{cosec}^{2}\\theta = 1 + \\frac{25}{144} = \\frac{169}{144}$, so $\\sin\\theta = \\frac{12}{13}$. Option B has the wrong sign, A is $|\\cos\\theta|$, and C is $\\operatorname{cosec}\\theta$.',
  },
  {
    id: 'c12-itf-r3-a13', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\sec\\left(\\sin^{-1}\\left(-\\frac{3}{5}\\right)\\right)$ is',
    options: ['$\\frac{5}{4}$', '$-\\frac{5}{4}$', '$\\frac{5}{3}$', '$\\frac{4}{5}$'],
    answer: 'Correct option: A) $\\frac{5}{4}$. Let $\\theta = \\sin^{-1}\\left(-\\frac{3}{5}\\right) \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, where cosine is positive. So $\\cos\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ and $\\sec\\theta = \\frac{5}{4}$. Option B has the wrong sign, C is $|\\operatorname{cosec}\\theta|$, and D is $\\cos\\theta$.',
  },
  {
    id: 'c12-itf-r3-a14', chapter: C, topic: EV, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The value of $\\cos\\left(\\tan^{-1}\\left(\\sin\\left(\\cos^{-1}\\frac{\\sqrt{3}}{2}\\right)\\right)\\right)$ is',
    options: ['$\\frac{1}{\\sqrt{5}}$', '$\\frac{2}{\\sqrt{5}}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$'],
    answer: 'Correct option: B) $\\frac{2}{\\sqrt{5}}$. Working from the inside: $\\cos^{-1}\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{6}$, so $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$. Then $\\tan^{-1}\\frac{1}{2} = \\theta$ is acute with $\\tan\\theta = \\frac{1}{2}$, so the hypotenuse is $\\sqrt{5}$ and $\\cos\\theta = \\frac{2}{\\sqrt{5}}$. Option A is $\\sin\\theta$; options C and D stop at an earlier stage.',
  },
  {
    id: 'c12-itf-r3-a15', chapter: C, topic: GR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The graph of $y = \\sec^{-1} x$ (principal branch) has a horizontal asymptote with equation',
    options: ['$y = 0$', '$y = \\pi$', '$y = \\frac{\\pi}{2}$', '$x = 1$'],
    answer: 'Correct option: C) $y = \\frac{\\pi}{2}$. As $x \\to \\infty$, $\\sec^{-1} x \\to \\frac{\\pi}{2}$ from below, and as $x \\to -\\infty$, $\\sec^{-1} x \\to \\frac{\\pi}{2}$ from above, but $\\frac{\\pi}{2}$ is never attained. The graph meets $y = 0$ at $(1, 0)$ and $y = \\pi$ at $(-1, \\pi)$, so those lines are not asymptotes, and the graph has no vertical asymptote.',
  },
  {
    id: 'c12-itf-r3-a16', chapter: C, topic: GR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Which of the following points lies on the graph of $y = \\operatorname{cosec}^{-1} x$ (principal branch)?',
    options: ['$\\left(2, -\\frac{\\pi}{6}\\right)$', '$\\left(-2, \\frac{\\pi}{6}\\right)$', '$\\left(-2, -\\frac{\\pi}{6}\\right)$', '$\\left(\\frac{1}{2}, \\frac{\\pi}{6}\\right)$'],
    answer: 'Correct option: C) $\\operatorname{cosec}\\left(-\\frac{\\pi}{6}\\right) = -2$ and $-\\frac{\\pi}{6}$ is in the principal range, so $\\operatorname{cosec}^{-1}(-2) = -\\frac{\\pi}{6}$. For $x = 2$ the value is $+\\frac{\\pi}{6}$, so A is wrong, and likewise B has the wrong sign. In D, $x = \\frac{1}{2}$ is not in the domain $|x| \\ge 1$.',
  },
  {
    id: 'c12-itf-r3-a17', chapter: C, topic: GR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The graphs of $y = \\sin^{-1} x$ and $y = \\tan^{-1} x$ (principal branches) are drawn on the same axes. The number of points common to both graphs is',
    options: ['$1$', '$2$', '$3$', '$0$'],
    answer: 'Correct option: A) $1$. Both graphs pass through the origin. For $0 < x \\le 1$, $\\sin^{-1} x$ is above $\\tan^{-1} x$ (the sine curve rises faster than the tangent curve, e.g. at $x = 1$ the values are $\\frac{\\pi}{2}$ and $\\frac{\\pi}{4}$), and for $-1 \\le x < 0$ the curves are in the reverse order, so they never meet again. Only $(0, 0)$ is common (the graph of $\\tan^{-1}$ extends beyond $[-1, 1]$, but $\\sin^{-1}$ does not).',
  },
  {
    id: 'c12-itf-r3-a18', chapter: C, topic: GR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The set of all $x \\in [-1, 1]$ for which the graph of $y = \\cos^{-1} x$ lies on or below the horizontal line $y = \\frac{\\pi}{3}$ is',
    options: ['$\\left[-1, \\frac{1}{2}\\right]$', '$\\left[\\frac{1}{2}, 1\\right]$', '$\\left[\\frac{\\sqrt{3}}{2}, 1\\right]$', '$\\left[0, \\frac{1}{2}\\right]$'],
    answer: 'Correct option: B) $\\left[\\frac{1}{2}, 1\\right]$. $\\cos^{-1} x$ is decreasing on $[-1, 1]$ and $\\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}$, so $\\cos^{-1} x \\le \\frac{\\pi}{3}$ exactly when $x \\ge \\frac{1}{2}$. Option A is the set where the graph is on or above the line, and option C would correspond to the height $\\frac{\\pi}{6}$.',
  },
  {
    id: 'c12-itf-r3-a19', chapter: C, topic: EV, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $\\sec^{-1}\\left(\\sec\\frac{4\\pi}{3}\\right) = \\frac{2\\pi}{3}$.\nReason (R): $\\sec^{-1}(\\sec x) = x$ for every $x \\in [0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both are true, but R does not explain A. A is true: $\\sec\\frac{4\\pi}{3} = -2$ and $\\sec^{-1}(-2) = \\frac{2\\pi}{3}$. R is also true, as it is just the statement that $\\sec^{-1}$ undoes $\\sec$ on the principal branch. But $\\frac{4\\pi}{3}$ is outside $[0, \\pi]$, so R does not apply to it and cannot explain A.',
  },
  {
    id: 'c12-itf-r3-a20', chapter: C, topic: EV, type: 'assertion_reason', complexity: 'hard', marks: 1,
    text: 'Assertion (A): $\\sin\\left(\\cos^{-1} x\\right) = \\sqrt{1 - x^{2}}$ for every $x \\in [-1, 1]$.\nReason (R): $\\cos^{-1} x \\in [0, \\pi]$, so $\\sin\\left(\\cos^{-1} x\\right) \\ge 0$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and R explains A. Let $\\theta = \\cos^{-1} x$, so $\\sin^{2}\\theta = 1 - x^{2}$. Because $\\theta \\in [0, \\pi]$, $\\sin\\theta \\ge 0$ (R), so the positive root is taken: $\\sin\\theta = \\sqrt{1 - x^{2}}$ for negative $x$ as well as positive $x$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-itf-r3-b01', chapter: C, topic: DR, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the domain of $f(x) = \\sin^{-1}\\left(\\sqrt{x} - 2\\right)$, and find $f(4)$ and $f(9)$.',
    answer: '$\\sqrt{x}$ needs $x \\ge 0$, and $\\sin^{-1}$ needs $-1 \\le \\sqrt{x} - 2 \\le 1$, i.e. $1 \\le \\sqrt{x} \\le 3$. Squaring (all quantities non-negative), $1 \\le x \\le 9$. The domain is $[1, 9]$. $f(4) = \\sin^{-1}(2 - 2) = \\sin^{-1} 0 = 0$ and $f(9) = \\sin^{-1}(3 - 2) = \\sin^{-1} 1 = \\frac{\\pi}{2}$.',
    steps: [
      { step: 'Writes $-1 \\le \\sqrt{x} - 2 \\le 1$ and gets the domain $[1, 9]$', marks: 1 },
      { step: 'Gets $f(4) = 0$ and $f(9) = \\frac{\\pi}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-b02', chapter: C, topic: EV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the value of $\\tan^{-1}(-\\sqrt{3}) + 2\\cot^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$.',
    answer: '$\\tan^{-1}(-\\sqrt{3}) = -\\frac{\\pi}{3}$ (range $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$) and $\\cot^{-1}\\frac{1}{\\sqrt{3}} = \\frac{\\pi}{3}$ (range $(0, \\pi)$, and $\\cot\\frac{\\pi}{3} = \\frac{1}{\\sqrt{3}}$). The value is $-\\frac{\\pi}{3} + 2 \\cdot \\frac{\\pi}{3} = \\frac{\\pi}{3}$.',
    steps: [
      { step: 'Finds $\\tan^{-1}(-\\sqrt{3}) = -\\frac{\\pi}{3}$ and $\\cot^{-1}\\frac{1}{\\sqrt{3}} = \\frac{\\pi}{3}$ (both needed for this mark)', marks: 1 },
      { step: 'Combines to get $\\frac{\\pi}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-b03', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the domain and the range of $f(x) = \\sin^{-1}\\left(\\frac{1}{x}\\right)$.',
    answer: 'We need $x \\neq 0$ and $-1 \\le \\frac{1}{x} \\le 1$, i.e. $|x| \\ge 1$. The domain is $(-\\infty, -1] \\cup [1, \\infty)$. For such $x$, $\\frac{1}{x}$ takes every value in $[-1, 0) \\cup (0, 1]$ (never $0$). Since $\\sin^{-1}$ is increasing with $\\sin^{-1}(\\pm 1) = \\pm\\frac{\\pi}{2}$ and $\\sin^{-1} 0 = 0$, the range is $\\left[-\\frac{\\pi}{2}, 0\\right) \\cup \\left(0, \\frac{\\pi}{2}\\right]$.',
    steps: [
      { step: 'Uses $\\left|\\frac{1}{x}\\right| \\le 1$ to get the domain $(-\\infty, -1] \\cup [1, \\infty)$', marks: 1 },
      { step: 'Notes $\\frac{1}{x} \\neq 0$ and gets the range $\\left[-\\frac{\\pi}{2}, 0\\right) \\cup \\left(0, \\frac{\\pi}{2}\\right]$ (with $0$ excluded)', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-b04', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Write $\\cos^{-1}\\left(\\sqrt{\\frac{1 + \\cos x}{2}}\\right)$, where $-\\pi < x < 0$, in its simplest form.',
    answer: '$\\frac{1 + \\cos x}{2} = \\cos^{2}\\frac{x}{2}$, so the square root is $\\left|\\cos\\frac{x}{2}\\right|$. For $-\\pi < x < 0$, $\\frac{x}{2} \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, where cosine is positive, so the root equals $\\cos\\frac{x}{2}$. The expression is $\\cos^{-1}\\left(\\cos\\frac{x}{2}\\right)$. But $\\frac{x}{2}$ is negative, so it is not in $[0, \\pi]$; using $\\cos\\frac{x}{2} = \\cos\\left(-\\frac{x}{2}\\right)$ with $-\\frac{x}{2} \\in \\left(0, \\frac{\\pi}{2}\\right)$, the value is $-\\frac{x}{2}$.',
    steps: [
      { step: 'Simplifies the root to $\\cos\\frac{x}{2}$, justifying the sign from $\\frac{x}{2} \\in \\left(-\\frac{\\pi}{2}, 0\\right)$', marks: 1 },
      { step: 'Uses the range $[0, \\pi]$ and the evenness of cosine to get $-\\frac{x}{2}$ (not $\\frac{x}{2}$)', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-b05', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 2,
    text: 'Find the value of $\\cos\\left(2\\cot^{-1}(-2)\\right)$.',
    answer: 'Let $\\theta = \\cot^{-1}(-2)$, so $\\cot\\theta = -2$ and $\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$. Then $\\cos 2\\theta = \\frac{\\cot^{2}\\theta - 1}{\\cot^{2}\\theta + 1} = \\frac{4 - 1}{4 + 1} = \\frac{3}{5}$. (Check: $\\cos\\theta = -\\frac{2}{\\sqrt{5}}$ in the second quadrant, and $2\\cos^{2}\\theta - 1 = \\frac{8}{5} - 1 = \\frac{3}{5}$.) The value is $\\frac{3}{5}$.',
    steps: [
      { step: 'Puts $\\theta = \\cot^{-1}(-2)$ and writes $\\cos 2\\theta$ in terms of $\\cot\\theta$ (or finds $\\cos\\theta = -\\frac{2}{\\sqrt{5}}$ with the correct sign)', marks: 1 },
      { step: 'Gets $\\frac{3}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-b06', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Sketch the graph of $y = \\sec^{-1} x$ (principal branch) for $1 \\le x \\le 2$, marking the end points, and state its range on this interval.',
    answer: 'On $x \\ge 1$ the graph of $\\sec^{-1} x$ is an increasing curve. At $x = 1$, $y = \\sec^{-1} 1 = 0$, and at $x = 2$, $y = \\sec^{-1} 2 = \\frac{\\pi}{3}$. So the curve starts at $(1, 0)$ and rises to $\\left(2, \\frac{\\pi}{3}\\right)$, flattening as $x$ grows (it stays below the asymptote $y = \\frac{\\pi}{2}$). Since the function is increasing, the range on this interval is $\\left[0, \\frac{\\pi}{3}\\right]$.',
    steps: [
      { step: 'Draws an increasing curve from $(1, 0)$ to $\\left(2, \\frac{\\pi}{3}\\right)$', marks: 1 },
      { step: 'States the range $\\left[0, \\frac{\\pi}{3}\\right]$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-itf-r3-c01', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\sec^{-1}\\left(\\sec\\frac{11\\pi}{6}\\right) + \\operatorname{cosec}^{-1}\\left(\\operatorname{cosec}\\frac{7\\pi}{6}\\right) + \\cot^{-1}\\left(\\cot\\left(-\\frac{3\\pi}{4}\\right)\\right)$.',
    answer: '$\\sec\\frac{11\\pi}{6} = \\sec\\left(2\\pi - \\frac{\\pi}{6}\\right) = \\sec\\frac{\\pi}{6}$, and $\\frac{\\pi}{6} \\in [0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$, so the first term is $\\frac{\\pi}{6}$. $\\operatorname{cosec}\\frac{7\\pi}{6} = -2$, and $\\operatorname{cosec}^{-1}(-2) = -\\frac{\\pi}{6}$ (range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$), so the second term is $-\\frac{\\pi}{6}$. $\\cot\\left(-\\frac{3\\pi}{4}\\right) = \\cot\\left(-\\frac{3\\pi}{4} + \\pi\\right) = \\cot\\frac{\\pi}{4} = 1$, so the third term is $\\cot^{-1} 1 = \\frac{\\pi}{4}$. The sum is $\\frac{\\pi}{6} - \\frac{\\pi}{6} + \\frac{\\pi}{4} = \\frac{\\pi}{4}$.',
    steps: [
      { step: 'Gets $\\sec^{-1}\\left(\\sec\\frac{11\\pi}{6}\\right) = \\frac{\\pi}{6}$', marks: 1 },
      { step: 'Gets $\\operatorname{cosec}^{-1}\\left(\\operatorname{cosec}\\frac{7\\pi}{6}\\right) = -\\frac{\\pi}{6}$ and $\\cot^{-1}\\left(\\cot\\left(-\\frac{3\\pi}{4}\\right)\\right) = \\frac{\\pi}{4}$ (not $-\\frac{3\\pi}{4}$)', marks: 1 },
      { step: 'Adds to get $\\frac{\\pi}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c02', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the domain of $f(x) = \\cos^{-1}\\left(\\frac{x}{1 + x}\\right)$, and find $f(0)$ and $f(1)$.',
    answer: 'We need $x \\neq -1$ and $\\left|\\frac{x}{1 + x}\\right| \\le 1$, i.e. $x^{2} \\le (1 + x)^{2} = 1 + 2x + x^{2}$, which gives $0 \\le 1 + 2x$, i.e. $x \\ge -\\frac{1}{2}$. This automatically excludes $x = -1$. At $x = -\\frac{1}{2}$ the argument is $-1$, which is allowed. The domain is $\\left[-\\frac{1}{2}, \\infty\\right)$. $f(0) = \\cos^{-1} 0 = \\frac{\\pi}{2}$ and $f(1) = \\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}$.',
    steps: [
      { step: 'Writes $\\left|\\frac{x}{1 + x}\\right| \\le 1$ (with $x \\neq -1$) and squares to get $x^{2} \\le (1 + x)^{2}$', marks: 1 },
      { step: 'Reduces to $x \\ge -\\frac{1}{2}$ and states the domain $\\left[-\\frac{1}{2}, \\infty\\right)$', marks: 1 },
      { step: 'Gets $f(0) = \\frac{\\pi}{2}$ and $f(1) = \\frac{\\pi}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c03', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the domain and the range of $f(x) = \\sin^{-1}\\left(\\frac{x}{1 + x^{2}}\\right)$.',
    answer: 'Since $(1 - |x|)^{2} \\ge 0$, we have $1 + x^{2} \\ge 2|x|$, so $\\left|\\frac{x}{1 + x^{2}}\\right| \\le \\frac{1}{2}$ for every real $x$. This is inside $[-1, 1]$, so the domain is $\\mathbb{R}$. Let $u = \\frac{x}{1 + x^{2}}$. It is continuous, equals $\\frac{1}{2}$ at $x = 1$, $-\\frac{1}{2}$ at $x = -1$ and $0$ at $x = 0$, and never goes beyond $\\pm\\frac{1}{2}$, so $u$ takes every value in $\\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$. As $\\sin^{-1}$ is increasing, $f$ takes every value from $\\sin^{-1}\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$ to $\\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$. The range is $\\left[-\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right]$.',
    steps: [
      { step: 'Shows $\\left|\\frac{x}{1 + x^{2}}\\right| \\le \\frac{1}{2}$, so the domain is $\\mathbb{R}$', marks: 1 },
      { step: 'States that $\\frac{x}{1 + x^{2}}$ takes every value in $\\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$ (both end values reached, at $x = \\mp 1$)', marks: 1 },
      { step: 'Uses that $\\sin^{-1}$ is increasing to get the range $\\left[-\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c04', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Consider $y = \\sec^{-1} x$ (principal branch).\n(i) State its domain and range, the points of the graph at $x = 1$ and $x = -1$, and its horizontal asymptote.\n(ii) Find the set of values of $y$ when $x \\in [-2, -1] \\cup [2, \\infty)$.',
    answer: '(i) Domain $(-\\infty, -1] \\cup [1, \\infty)$, range $[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$. The graph passes through $(1, 0)$ and $(-1, \\pi)$, and has the horizontal asymptote $y = \\frac{\\pi}{2}$ on both sides.\n(ii) For $x \\ge 2$, $\\sec^{-1} x = \\cos^{-1}\\frac{1}{x}$ with $\\frac{1}{x} \\in \\left(0, \\frac{1}{2}\\right]$, and the function is increasing from $\\sec^{-1} 2 = \\frac{\\pi}{3}$ towards $\\frac{\\pi}{2}$ without reaching it: values $\\left[\\frac{\\pi}{3}, \\frac{\\pi}{2}\\right)$. For $-2 \\le x \\le -1$, the function is increasing in $x$ from $\\sec^{-1}(-2) = \\frac{2\\pi}{3}$ to $\\sec^{-1}(-1) = \\pi$: values $\\left[\\frac{2\\pi}{3}, \\pi\\right]$. The set of values is $\\left[\\frac{\\pi}{3}, \\frac{\\pi}{2}\\right) \\cup \\left[\\frac{2\\pi}{3}, \\pi\\right]$.',
    steps: [
      { step: '(i) States the domain, range, points $(1, 0)$ and $(-1, \\pi)$ and the asymptote $y = \\frac{\\pi}{2}$', marks: 1 },
      { step: '(ii) Gets $\\left[\\frac{\\pi}{3}, \\frac{\\pi}{2}\\right)$ for $x \\ge 2$', marks: 1 },
      { step: '(ii) Gets $\\left[\\frac{2\\pi}{3}, \\pi\\right]$ for $-2 \\le x \\le -1$ and gives the union', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c05', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Write $\\cos^{-1}\\left(\\frac{3\\cos x + 4\\sin x}{5}\\right)$, where $\\frac{\\pi}{2} \\le x \\le \\pi$, in its simplest form, and check it at $x = \\frac{\\pi}{2}$.',
    answer: 'Let $\\alpha = \\tan^{-1}\\frac{4}{3}$, an acute angle with $\\cos\\alpha = \\frac{3}{5}$ and $\\sin\\alpha = \\frac{4}{5}$. Then $\\frac{3\\cos x + 4\\sin x}{5} = \\cos x\\cos\\alpha + \\sin x\\sin\\alpha = \\cos(x - \\alpha)$. For $\\frac{\\pi}{2} \\le x \\le \\pi$, $x - \\alpha \\in \\left[\\frac{\\pi}{2} - \\alpha, \\pi - \\alpha\\right]$. Since $0 < \\alpha < \\frac{\\pi}{2}$, this interval lies inside $[0, \\pi]$, the principal range of $\\cos^{-1}$. So the expression equals $x - \\alpha = x - \\tan^{-1}\\frac{4}{3}$. Check at $x = \\frac{\\pi}{2}$: the left side is $\\cos^{-1}\\frac{4}{5}$ and the right side is $\\frac{\\pi}{2} - \\tan^{-1}\\frac{4}{3}$, which is the angle whose cosine is $\\sin\\alpha = \\frac{4}{5}$, so they agree.',
    steps: [
      { step: 'Writes $\\frac{3}{5} = \\cos\\alpha$, $\\frac{4}{5} = \\sin\\alpha$ with $\\alpha = \\tan^{-1}\\frac{4}{3}$ and reduces the argument to $\\cos(x - \\alpha)$', marks: 1 },
      { step: 'Shows $x - \\alpha \\in [0, \\pi]$ for the given $x$ and concludes the expression is $x - \\tan^{-1}\\frac{4}{3}$', marks: 1 },
      { step: 'Checks the result at $x = \\frac{\\pi}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c06', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the values of\n(i) $\\cos\\left(\\tan^{-1}\\left(-\\frac{4}{3}\\right)\\right)$\n(ii) $\\sin\\left(\\sec^{-1}\\left(-\\frac{13}{5}\\right)\\right)$\n(iii) $\\cot\\left(\\operatorname{cosec}^{-1}\\left(-\\frac{13}{12}\\right)\\right)$',
    answer: '(i) Let $\\theta = \\tan^{-1}\\left(-\\frac{4}{3}\\right) \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, where cosine is positive. $\\sec^{2}\\theta = 1 + \\frac{16}{9} = \\frac{25}{9}$, so $\\cos\\theta = \\frac{3}{5}$.\n(ii) Let $\\phi = \\sec^{-1}\\left(-\\frac{13}{5}\\right)$, so $\\cos\\phi = -\\frac{5}{13}$ and $\\phi \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, where sine is positive. $\\sin\\phi = \\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$.\n(iii) Let $\\psi = \\operatorname{cosec}^{-1}\\left(-\\frac{13}{12}\\right)$, so $\\sin\\psi = -\\frac{12}{13}$ and $\\psi \\in \\left[-\\frac{\\pi}{2}, 0\\right)$, where cosine is positive. $\\cos\\psi = \\sqrt{1 - \\frac{144}{169}} = \\frac{5}{13}$, so $\\cot\\psi = \\frac{\\cos\\psi}{\\sin\\psi} = \\frac{5/13}{-12/13} = -\\frac{5}{12}$.',
    steps: [
      { step: '(i) Gets $\\frac{3}{5}$, with cosine positive in $\\left(-\\frac{\\pi}{2}, 0\\right)$', marks: 1 },
      { step: '(ii) Gets $\\frac{12}{13}$, with sine positive in $\\left(\\frac{\\pi}{2}, \\pi\\right)$', marks: 1 },
      { step: '(iii) Gets $-\\frac{5}{12}$, with the angle in $\\left[-\\frac{\\pi}{2}, 0\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c07', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f(x) = \\sec^{-1}(2x) + \\sin^{-1} x$. Find the domain of $f$, and find $f(1)$ and $f(-1)$.',
    answer: '$\\sec^{-1}(2x)$ needs $|2x| \\ge 1$, i.e. $x \\le -\\frac{1}{2}$ or $x \\ge \\frac{1}{2}$. $\\sin^{-1} x$ needs $-1 \\le x \\le 1$. Both must hold, so the domain is $\\left[-1, -\\frac{1}{2}\\right] \\cup \\left[\\frac{1}{2}, 1\\right]$. $f(1) = \\sec^{-1} 2 + \\sin^{-1} 1 = \\frac{\\pi}{3} + \\frac{\\pi}{2} = \\frac{5\\pi}{6}$. $f(-1) = \\sec^{-1}(-2) + \\sin^{-1}(-1) = \\frac{2\\pi}{3} - \\frac{\\pi}{2} = \\frac{\\pi}{6}$.',
    steps: [
      { step: 'Finds the two conditions $|2x| \\ge 1$ and $-1 \\le x \\le 1$', marks: 1 },
      { step: 'Intersects to get the domain $\\left[-1, -\\frac{1}{2}\\right] \\cup \\left[\\frac{1}{2}, 1\\right]$', marks: 1 },
      { step: 'Gets $f(1) = \\frac{5\\pi}{6}$ and $f(-1) = \\frac{\\pi}{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c08', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $g(x) = \\tan^{-1}(\\tan x)$ for $x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$.\n(i) Find a formula for $g(x)$ on each of the two intervals.\n(ii) Describe the graph of $g$, including what happens at $x = \\frac{\\pi}{2}$.\n(iii) Solve $g(x) = -\\frac{\\pi}{6}$.',
    answer: '(i) For $x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, $x$ is in the principal range, so $g(x) = x$. For $x \\in \\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$, $\\tan x = \\tan(x - \\pi)$ and $x - \\pi \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so $g(x) = x - \\pi$.\n(ii) The graph is two parallel line segments of slope $1$. The first runs from $\\left(-\\frac{\\pi}{2}, -\\frac{\\pi}{2}\\right)$ to $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ through the origin (end points not included). The second runs from $\\left(\\frac{\\pi}{2}, -\\frac{\\pi}{2}\\right)$ through $(\\pi, 0)$ to $\\left(\\frac{3\\pi}{2}, \\frac{\\pi}{2}\\right)$ (end points not included). $g$ is not defined at $x = \\frac{\\pi}{2}$, where the graph jumps from height $\\frac{\\pi}{2}$ down to $-\\frac{\\pi}{2}$.\n(iii) On the first interval, $x = -\\frac{\\pi}{6}$. On the second, $x - \\pi = -\\frac{\\pi}{6}$ gives $x = \\frac{5\\pi}{6}$, which lies in $\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$. The solutions are $x = -\\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.',
    steps: [
      { step: '(i) Gets $g(x) = x$ and $g(x) = x - \\pi$ with the principal-range justification', marks: 1 },
      { step: '(ii) Describes the two parallel segments and the break at $x = \\frac{\\pi}{2}$', marks: 1 },
      { step: '(iii) Gets both solutions $x = -\\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c09', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the value of $\\tan\\left(\\frac{1}{2}\\sec^{-1}(-3)\\right)$.',
    answer: 'Let $\\theta = \\sec^{-1}(-3)$, so $\\cos\\theta = -\\frac{1}{3}$ and $\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$. Then $\\frac{\\theta}{2} \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$, so $\\tan\\frac{\\theta}{2} > 0$. Using $\\tan^{2}\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{1 + \\cos\\theta} = \\frac{1 + \\frac{1}{3}}{1 - \\frac{1}{3}} = \\frac{4/3}{2/3} = 2$, we get $\\tan\\frac{\\theta}{2} = \\sqrt{2}$.',
    steps: [
      { step: 'Sets $\\theta = \\sec^{-1}(-3)$, finds $\\cos\\theta = -\\frac{1}{3}$ and places $\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$', marks: 1 },
      { step: 'Uses $\\tan^{2}\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{1 + \\cos\\theta} = 2$', marks: 1 },
      { step: 'Uses $\\frac{\\theta}{2} \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$ to take the positive root and gets $\\sqrt{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-c10', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve for $x$: $\\sin\\left(2\\tan^{-1} x\\right) = \\frac{4}{5}$.',
    answer: 'Let $\\theta = \\tan^{-1} x$, so $x = \\tan\\theta$. Then $\\sin 2\\theta = \\frac{2\\tan\\theta}{1 + \\tan^{2}\\theta} = \\frac{2x}{1 + x^{2}}$. The equation becomes $\\frac{2x}{1 + x^{2}} = \\frac{4}{5}$, i.e. $10x = 4 + 4x^{2}$, so $2x^{2} - 5x + 2 = 0$, which factors as $(2x - 1)(x - 2) = 0$. Hence $x = \\frac{1}{2}$ or $x = 2$. Check: both are positive, so $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$ and $2\\theta \\in (0, \\pi)$, where sine is positive; and for each, $\\frac{2x}{1 + x^{2}} = \\frac{1}{5/4} = \\frac{4}{5}$ and $\\frac{4}{5}$ respectively. Both are solutions.',
    steps: [
      { step: 'Writes $\\sin 2\\theta = \\frac{2x}{1 + x^{2}}$ with $x = \\tan\\theta$', marks: 1 },
      { step: 'Forms and factorises $2x^{2} - 5x + 2 = 0$', marks: 1 },
      { step: 'Gets $x = \\frac{1}{2}$ and $x = 2$ and checks both', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-itf-r3-d01', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = \\cos^{-1}\\left(\\sqrt{1 - x^{2}}\\right)$.\n(i) Find the domain of $f$.\n(ii) Find the range of $f$.\n(iii) Find $f\\left(\\frac{1}{2}\\right)$ and $f\\left(-\\frac{1}{2}\\right)$, and say whether $f$ is one-one.\n(iv) Solve $f(x) = \\frac{\\pi}{3}$.\n(v) Show that $f(x) = \\left|\\sin^{-1} x\\right|$ for every $x$ in the domain.',
    answer: '(i) The root needs $1 - x^{2} \\ge 0$, i.e. $-1 \\le x \\le 1$. For such $x$, $0 \\le \\sqrt{1 - x^{2}} \\le 1$, which is inside the domain of $\\cos^{-1}$. Domain: $[-1, 1]$.\n(ii) $\\sqrt{1 - x^{2}}$ takes every value in $[0, 1]$ (it is $0$ at $x = \\pm 1$ and $1$ at $x = 0$, and is continuous). $\\cos^{-1}$ is decreasing with $\\cos^{-1} 0 = \\frac{\\pi}{2}$ and $\\cos^{-1} 1 = 0$, so the range is $\\left[0, \\frac{\\pi}{2}\\right]$.\n(iii) $f\\left(\\pm\\frac{1}{2}\\right) = \\cos^{-1}\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{6}$. Two different inputs give the same value, so $f$ is not one-one.\n(iv) $\\sqrt{1 - x^{2}} = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$, so $1 - x^{2} = \\frac{1}{4}$ and $x = \\pm\\frac{\\sqrt{3}}{2}$. Both lie in $[-1, 1]$.\n(v) Put $x = \\sin\\theta$ with $\\theta = \\sin^{-1} x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Then $\\sqrt{1 - x^{2}} = \\sqrt{\\cos^{2}\\theta} = \\cos\\theta$ (cosine is non-negative there), so $f(x) = \\cos^{-1}(\\cos\\theta)$. If $0 \\le x \\le 1$, then $\\theta \\in \\left[0, \\frac{\\pi}{2}\\right] \\subset [0, \\pi]$ and $f(x) = \\theta = \\sin^{-1} x$. If $-1 \\le x < 0$, then $\\theta < 0$, and $\\cos\\theta = \\cos(-\\theta)$ with $-\\theta \\in \\left(0, \\frac{\\pi}{2}\\right]$, so $f(x) = -\\theta = -\\sin^{-1} x$. In both cases $f(x) = |\\sin^{-1} x|$.',
    steps: [
      { step: '(i) Domain $[-1, 1]$, checking the argument stays in $[0, 1]$', marks: 1 },
      { step: '(ii) Range $\\left[0, \\frac{\\pi}{2}\\right]$', marks: 1 },
      { step: '(iii) Gets $\\frac{\\pi}{6}$ for both inputs and says not one-one', marks: 1 },
      { step: '(iv) Gets $x = \\pm\\frac{\\sqrt{3}}{2}$', marks: 1 },
      { step: '(v) Shows $f(x) = \\sin^{-1} x$ for $x \\ge 0$ and $-\\sin^{-1} x$ for $x < 0$, hence $|\\sin^{-1} x|$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d02', chapter: C, topic: EV, type: 'long', complexity: 'hard', marks: 5,
    text: '(a) Write $\\tan^{-1}\\left(\\frac{\\sqrt{1 + x^{2}} - 1}{x}\\right)$, where $x \\neq 0$, in its simplest form, and check the result at $x = 1$.\n(b) Write $\\sin^{-1}\\left(\\frac{2x}{1 + x^{2}}\\right)$, where $x > 1$, in its simplest form, and check the result at $x = \\sqrt{3}$.',
    answer: '(a) Put $x = \\tan\\theta$ with $\\theta = \\tan^{-1} x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, $\\theta \\neq 0$. Then $\\sqrt{1 + x^{2}} = \\sec\\theta$ (positive), and $\\frac{\\sec\\theta - 1}{\\tan\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^{2}\\frac{\\theta}{2}}{2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}} = \\tan\\frac{\\theta}{2}$. Since $\\frac{\\theta}{2} \\in \\left(-\\frac{\\pi}{4}, \\frac{\\pi}{4}\\right)$, inside the principal range, the expression equals $\\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1} x$. Check at $x = 1$: the left side is $\\tan^{-1}(\\sqrt{2} - 1) = \\frac{\\pi}{8}$ (as $\\tan\\frac{\\pi}{8} = \\sqrt{2} - 1$), and the right side is $\\frac{1}{2} \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{8}$.\n(b) Put $x = \\tan\\theta$ with $\\theta = \\tan^{-1} x \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$ because $x > 1$. Then $\\frac{2x}{1 + x^{2}} = \\sin 2\\theta$, so the expression is $\\sin^{-1}(\\sin 2\\theta)$. Here $2\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. But $\\sin 2\\theta = \\sin(\\pi - 2\\theta)$ and $\\pi - 2\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$, so the value is $\\pi - 2\\theta = \\pi - 2\\tan^{-1} x$. Check at $x = \\sqrt{3}$: the left side is $\\sin^{-1}\\frac{2\\sqrt{3}}{4} = \\sin^{-1}\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$; the right side is $\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$.',
    steps: [
      { step: '(a) Substitutes $x = \\tan\\theta$ and reduces the fraction to $\\frac{1 - \\cos\\theta}{\\sin\\theta}$', marks: 1 },
      { step: '(a) Gets $\\tan\\frac{\\theta}{2}$, checks $\\frac{\\theta}{2}$ is in the principal range and gives $\\frac{1}{2}\\tan^{-1} x$ (with the check at $x = 1$)', marks: 1 },
      { step: '(b) Writes the argument as $\\sin 2\\theta$ with $\\theta \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$', marks: 1 },
      { step: '(b) Notes $2\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$ is outside the principal range and uses $\\sin 2\\theta = \\sin(\\pi - 2\\theta)$', marks: 1 },
      { step: '(b) Gives $\\pi - 2\\tan^{-1} x$ and checks it at $x = \\sqrt{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d03', chapter: C, topic: EV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the principal values of\n(i) $\\sin^{-1}\\left(\\cos\\frac{11\\pi}{9}\\right)$\n(ii) $\\cos^{-1}\\left(\\sin\\left(-\\frac{7\\pi}{9}\\right)\\right)$\n(iii) $\\tan^{-1}\\left(\\cot\\frac{8\\pi}{9}\\right)$\n(iv) $\\operatorname{cosec}^{-1}\\left(\\operatorname{cosec}\\frac{13\\pi}{9}\\right)$\nand hence find the sum of all four.',
    answer: '(i) $\\cos\\frac{11\\pi}{9} = \\cos\\left(\\pi + \\frac{2\\pi}{9}\\right) = -\\cos\\frac{2\\pi}{9} = -\\sin\\left(\\frac{\\pi}{2} - \\frac{2\\pi}{9}\\right) = -\\sin\\frac{5\\pi}{18} = \\sin\\left(-\\frac{5\\pi}{18}\\right)$. As $-\\frac{5\\pi}{18} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, the value is $-\\frac{5\\pi}{18}$.\n(ii) $\\sin\\left(-\\frac{7\\pi}{9}\\right) = -\\sin\\frac{7\\pi}{9} = -\\sin\\frac{2\\pi}{9} = -\\cos\\left(\\frac{\\pi}{2} - \\frac{2\\pi}{9}\\right) = -\\cos\\frac{5\\pi}{18} = \\cos\\left(\\pi - \\frac{5\\pi}{18}\\right) = \\cos\\frac{13\\pi}{18}$. As $\\frac{13\\pi}{18} \\in [0, \\pi]$, the value is $\\frac{13\\pi}{18}$.\n(iii) $\\cot\\frac{8\\pi}{9} = \\tan\\left(\\frac{\\pi}{2} - \\frac{8\\pi}{9}\\right) = \\tan\\left(-\\frac{7\\pi}{18}\\right)$. As $-\\frac{7\\pi}{18} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, the value is $-\\frac{7\\pi}{18}$.\n(iv) $\\operatorname{cosec}\\frac{13\\pi}{9} = \\operatorname{cosec}\\left(\\frac{13\\pi}{9} - 2\\pi\\right) = \\operatorname{cosec}\\left(-\\frac{5\\pi}{9}\\right)$, but $-\\frac{5\\pi}{9}$ is outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Since $\\sin\\left(-\\frac{5\\pi}{9}\\right) = -\\sin\\frac{5\\pi}{9} = -\\sin\\frac{4\\pi}{9} = \\sin\\left(-\\frac{4\\pi}{9}\\right)$, we have $\\operatorname{cosec}\\frac{13\\pi}{9} = \\operatorname{cosec}\\left(-\\frac{4\\pi}{9}\\right)$ with $-\\frac{4\\pi}{9} \\in \\left[-\\frac{\\pi}{2}, 0\\right)$. The value is $-\\frac{4\\pi}{9}$.\nSum $= -\\frac{5\\pi}{18} + \\frac{13\\pi}{18} - \\frac{7\\pi}{18} - \\frac{8\\pi}{18} = -\\frac{7\\pi}{18}$.',
    steps: [
      { step: '(i) Gets $-\\frac{5\\pi}{18}$', marks: 1 },
      { step: '(ii) Gets $\\frac{13\\pi}{18}$', marks: 1 },
      { step: '(iii) Gets $-\\frac{7\\pi}{18}$', marks: 1 },
      { step: '(iv) Gets $-\\frac{4\\pi}{9}$ with the principal-range reasoning', marks: 1 },
      { step: 'Adds correctly to get $-\\frac{7\\pi}{18}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d04', chapter: C, topic: EV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using principal values, solve for $x$, or state that there is no solution:\n(i) $\\sin^{-1}(3x - 1) = -\\frac{\\pi}{6}$\n(ii) $3\\cos^{-1} x = 2\\pi$\n(iii) $\\cot^{-1}(x^{2} - 3) = \\frac{3\\pi}{4}$\n(iv) $\\sec^{-1}(2x) = \\frac{5\\pi}{6}$\n(v) $2\\cos^{-1} x = 3\\pi$',
    answer: '(i) $3x - 1 = \\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$, so $x = \\frac{1}{6}$. (The argument $-\\frac{1}{2}$ is in $[-1, 1]$, and $-\\frac{\\pi}{6}$ is in the range of $\\sin^{-1}$.)\n(ii) $\\cos^{-1} x = \\frac{2\\pi}{3}$, which is in $[0, \\pi]$, so $x = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$.\n(iii) $\\frac{3\\pi}{4}$ is in $(0, \\pi)$, so $x^{2} - 3 = \\cot\\frac{3\\pi}{4} = -1$, giving $x^{2} = 2$ and $x = \\pm\\sqrt{2}$.\n(iv) $\\frac{5\\pi}{6}$ is in $[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$, so $2x = \\sec\\frac{5\\pi}{6} = -\\frac{2}{\\sqrt{3}}$ and $x = -\\frac{1}{\\sqrt{3}}$. (Here $|2x| = \\frac{2}{\\sqrt{3}} \\ge 1$, as required.)\n(v) $\\cos^{-1} x = \\frac{3\\pi}{2}$, but $\\cos^{-1} x \\le \\pi$ always, so there is no solution.',
    steps: [
      { step: '(i) Gets $x = \\frac{1}{6}$', marks: 1 },
      { step: '(ii) Gets $x = -\\frac{1}{2}$', marks: 1 },
      { step: '(iii) Gets $x = \\pm\\sqrt{2}$', marks: 1 },
      { step: '(iv) Gets $x = -\\frac{1}{\\sqrt{3}}$', marks: 1 },
      { step: '(v) Says there is no solution because $\\frac{3\\pi}{2}$ is outside $[0, \\pi]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d05', chapter: C, topic: GR, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $h(x) = \\cot^{-1}(x - 1)$, $x \\in \\mathbb{R}$.\n(i) Write the domain and range of $h$, and the equations of the horizontal asymptotes of its graph.\n(ii) Find $h(0)$, $h(1)$ and $h(2)$, and describe how the graph of $h$ is obtained from the graph of $y = \\cot^{-1} x$.\n(iii) Solve $h(x) = \\frac{\\pi}{3}$.\n(iv) Find all $x$ for which $h(x) \\ge \\frac{3\\pi}{4}$.\n(v) Find the set of values of $h(x)$ for $1 \\le x \\le 1 + \\sqrt{3}$.',
    answer: '(i) $x - 1$ takes every real value, so the domain is $\\mathbb{R}$ and the range is $(0, \\pi)$. As $x \\to \\infty$, $h(x) \\to 0$ and as $x \\to -\\infty$, $h(x) \\to \\pi$, so the asymptotes are $y = 0$ and $y = \\pi$.\n(ii) $h(0) = \\cot^{-1}(-1) = \\frac{3\\pi}{4}$, $h(1) = \\cot^{-1} 0 = \\frac{\\pi}{2}$, $h(2) = \\cot^{-1} 1 = \\frac{\\pi}{4}$. The graph is that of $y = \\cot^{-1} x$ shifted $1$ unit to the right (the asymptotes and the range are unchanged).\n(iii) $x - 1 = \\cot\\frac{\\pi}{3} = \\frac{1}{\\sqrt{3}}$, so $x = 1 + \\frac{1}{\\sqrt{3}}$.\n(iv) $h$ is strictly decreasing, and $h(0) = \\frac{3\\pi}{4}$, so $h(x) \\ge \\frac{3\\pi}{4}$ exactly when $x \\le 0$. The set is $(-\\infty, 0]$.\n(v) $h$ is decreasing, with $h(1) = \\frac{\\pi}{2}$ and $h(1 + \\sqrt{3}) = \\cot^{-1}\\sqrt{3} = \\frac{\\pi}{6}$. The set of values is $\\left[\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right]$.',
    steps: [
      { step: '(i) Domain $\\mathbb{R}$, range $(0, \\pi)$ and asymptotes $y = 0$, $y = \\pi$', marks: 1 },
      { step: '(ii) Gets $\\frac{3\\pi}{4}$, $\\frac{\\pi}{2}$, $\\frac{\\pi}{4}$ and the shift of $1$ to the right', marks: 1 },
      { step: '(iii) Gets $x = 1 + \\frac{1}{\\sqrt{3}}$', marks: 1 },
      { step: '(iv) Uses that $h$ is decreasing to get $(-\\infty, 0]$', marks: 1 },
      { step: '(v) Gets $\\left[\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d06', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'The cotangent function is one-one on $(0, \\pi)$, which gives the principal $\\cot^{-1}$ with range $(0, \\pi)$. Instead, consider $s(x) = \\cot x$ on the interval $(\\pi, 2\\pi)$, a non-principal branch. In this question $g$ denotes the inverse of this restricted function, while $\\cot^{-1}$ always means the principal inverse cotangent.\n(i) Explain why $s : (\\pi, 2\\pi) \\to \\mathbb{R}$ is one-one and onto.\n(ii) Show that its inverse is $g(y) = \\pi + \\cot^{-1} y$ for $y \\in \\mathbb{R}$.\n(iii) Find $g(1)$ and $g(-\\sqrt{3})$.\n(iv) Find the principal value $\\cot^{-1}\\left(\\cot\\frac{7\\pi}{4}\\right)$, and explain how it is related to $g(-1)$.\n(v) State the range of $g$ and the equations of the horizontal asymptotes of its graph.',
    answer: '(i) On $(\\pi, 2\\pi)$, $\\sin x \\neq 0$, and $\\frac{d}{dx}\\cot x = -\\operatorname{cosec}^{2}x < 0$, so $\\cot x$ is strictly decreasing, hence one-one. As $x \\to \\pi^{+}$, $\\cot x \\to +\\infty$ and as $x \\to 2\\pi^{-}$, $\\cot x \\to -\\infty$; being continuous, it takes every real value, so it is onto $\\mathbb{R}$.\n(ii) Take $y \\in \\mathbb{R}$ and let $x = \\pi + \\cot^{-1} y$. Since $\\cot^{-1} y \\in (0, \\pi)$, $x \\in (\\pi, 2\\pi)$. Also $\\cot x = \\cot(\\pi + \\cot^{-1} y) = \\cot(\\cot^{-1} y) = y$. So $x$ is the unique point of $(\\pi, 2\\pi)$ with $s(x) = y$, and $g(y) = \\pi + \\cot^{-1} y$.\n(iii) $g(1) = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$. $g(-\\sqrt{3}) = \\pi + \\frac{5\\pi}{6} = \\frac{11\\pi}{6}$.\n(iv) $\\cot\\frac{7\\pi}{4} = -1$, and the principal value is $\\cot^{-1}(-1) = \\frac{3\\pi}{4}$. It differs from $\\frac{7\\pi}{4}$ because $\\frac{7\\pi}{4}$ is not in $(0, \\pi)$. The other branch gives $g(-1) = \\pi + \\frac{3\\pi}{4} = \\frac{7\\pi}{4}$, which is exactly the principal value plus $\\pi$.\n(v) $g(y) = \\pi + \\cot^{-1} y$ with $\\cot^{-1} y \\in (0, \\pi)$, so the range of $g$ is $(\\pi, 2\\pi)$. The graph approaches the horizontal line $y = \\pi$ as the input $\\to +\\infty$ and the line $y = 2\\pi$ as the input $\\to -\\infty$; these are the asymptotes.',
    steps: [
      { step: '(i) Argues $\\cot x$ is strictly decreasing from $+\\infty$ to $-\\infty$ on $(\\pi, 2\\pi)$, hence one-one and onto', marks: 1 },
      { step: '(ii) Shows $\\pi + \\cot^{-1} y \\in (\\pi, 2\\pi)$ and $\\cot(\\pi + \\cot^{-1} y) = y$', marks: 1 },
      { step: '(iii) Gets $\\frac{5\\pi}{4}$ and $\\frac{11\\pi}{6}$', marks: 1 },
      { step: '(iv) Gets $\\frac{3\\pi}{4}$ with the principal-range reason, and links $g(-1) = \\frac{7\\pi}{4}$', marks: 1 },
      { step: '(v) Gets the range $(\\pi, 2\\pi)$ and the asymptotes $y = \\pi$, $y = 2\\pi$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d07', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $g(x) = \\sec^{-1}(1 - x^{2})$.\n(i) Find the domain of $g$.\n(ii) Find $g(0)$, $g(\\sqrt{2})$ and $g(\\sqrt{3})$.\n(iii) Solve $g(x) = \\frac{3\\pi}{4}$.\n(iv) Find the range of $g$.\n(v) Explain why $g(x)$ can never equal $\\frac{\\pi}{2}$, and why $g$ is not one-one.',
    answer: '(i) We need $|1 - x^{2}| \\ge 1$. Either $1 - x^{2} \\ge 1$, i.e. $x^{2} \\le 0$, so $x = 0$; or $1 - x^{2} \\le -1$, i.e. $x^{2} \\ge 2$, so $|x| \\ge \\sqrt{2}$. Domain: $\\{0\\} \\cup (-\\infty, -\\sqrt{2}] \\cup [\\sqrt{2}, \\infty)$.\n(ii) $g(0) = \\sec^{-1} 1 = 0$. $g(\\sqrt{2}) = \\sec^{-1}(-1) = \\pi$. $g(\\sqrt{3}) = \\sec^{-1}(-2) = \\frac{2\\pi}{3}$.\n(iii) $1 - x^{2} = \\sec\\frac{3\\pi}{4} = -\\sqrt{2}$, so $x^{2} = 1 + \\sqrt{2}$ and $x = \\pm\\sqrt{1 + \\sqrt{2}}$. Since $1 + \\sqrt{2} \\approx 2.41 \\ge 2$, both values are in the domain.\n(iv) At $x = 0$, $g = 0$. For $|x| \\ge \\sqrt{2}$, $t = 1 - x^{2}$ takes every value in $(-\\infty, -1]$, and $\\sec^{-1}$ maps $(-\\infty, -1]$ onto $\\left(\\frac{\\pi}{2}, \\pi\\right]$. Range: $\\{0\\} \\cup \\left(\\frac{\\pi}{2}, \\pi\\right]$.\n(v) $\\frac{\\pi}{2}$ is not in the range of $\\sec^{-1}$, because $\\sec\\frac{\\pi}{2}$ is not defined; indeed it is missing from the range found in (iv). $g$ depends only on $x^{2}$, so $g(-x) = g(x)$: for example $g(\\sqrt{3}) = g(-\\sqrt{3}) = \\frac{2\\pi}{3}$, so $g$ is not one-one.',
    steps: [
      { step: '(i) Sets $|1 - x^{2}| \\ge 1$ and solves both cases', marks: 1 },
      { step: '(i) and (ii) States the full domain and gets $g(0) = 0$, $g(\\sqrt{2}) = \\pi$, $g(\\sqrt{3}) = \\frac{2\\pi}{3}$', marks: 1 },
      { step: '(iii) Gets $x = \\pm\\sqrt{1 + \\sqrt{2}}$ and checks it is in the domain', marks: 1 },
      { step: '(iv) Gets the range $\\{0\\} \\cup \\left(\\frac{\\pi}{2}, \\pi\\right]$', marks: 1 },
      { step: '(v) Gives the reason $\\frac{\\pi}{2}$ is excluded and a valid pair such as $g(\\sqrt{3}) = g(-\\sqrt{3})$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r3-d08', chapter: C, topic: EV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Take $\\pi \\approx 3.14$. Find the principal values of\n(i) $\\sin^{-1}(\\sin 4)$\n(ii) $\\cos^{-1}(\\cos 8)$\n(iii) $\\tan^{-1}(\\tan 6)$\n(iv) $\\cot^{-1}(\\cot 2)$\nwhere the angles are in radians, and hence find the value of their sum in terms of $\\pi$.',
    answer: '(i) $\\frac{\\pi}{2} \\approx 1.57 < 4 < \\frac{3\\pi}{2} \\approx 4.71$, so $4$ is outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Using $\\sin 4 = \\sin(\\pi - 4)$ with $\\pi - 4 \\approx -0.86 \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, the value is $\\pi - 4$.\n(ii) $2\\pi \\approx 6.28 < 8 < 3\\pi \\approx 9.42$. $\\cos 8 = \\cos(8 - 2\\pi)$ with $8 - 2\\pi \\approx 1.72 \\in [0, \\pi]$, so the value is $8 - 2\\pi$.\n(iii) $6$ is between $\\frac{3\\pi}{2} \\approx 4.71$ and $\\frac{5\\pi}{2} \\approx 7.85$. $\\tan 6 = \\tan(6 - 2\\pi)$ with $6 - 2\\pi \\approx -0.28 \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so the value is $6 - 2\\pi$.\n(iv) $0 < 2 < \\pi$, so $2 \\in (0, \\pi)$, the principal range of $\\cot^{-1}$, and the value is $2$.\nSum $= (\\pi - 4) + (8 - 2\\pi) + (6 - 2\\pi) + 2 = 12 - 3\\pi$.',
    steps: [
      { step: '(i) Gets $\\pi - 4$ with the range check', marks: 1 },
      { step: '(ii) Gets $8 - 2\\pi$ with the range check', marks: 1 },
      { step: '(iii) Gets $6 - 2\\pi$ with the range check', marks: 1 },
      { step: '(iv) Gets $2$', marks: 1 },
      { step: 'Adds correctly to get $12 - 3\\pi$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-itf-r3-e01', chapter: C, topic: EV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A billboard is 3 m tall, and its bottom edge is 1 m above the eye level of an observer who stands at a horizontal distance of $d$ metres from it ($d > 0$). The angle (in radians) from eye level up to the top edge is $\\alpha = \\tan^{-1}\\left(\\frac{4}{d}\\right)$ and up to the bottom edge is $\\beta = \\tan^{-1}\\left(\\frac{1}{d}\\right)$. The angle that the billboard subtends at the observer\'s eye is $\\alpha - \\beta$.',
    answer: '(i) $\\alpha = \\frac{\\pi}{4}$ and $\\beta = \\frac{\\pi}{6}$. (ii) $\\tan(\\alpha - \\beta) = \\frac{3d}{d^{2} + 4}$. (iii) $d = 1$ m or $d = 4$ m. OR: $d = \\frac{4}{\\sqrt{3}}$ m and $\\tan(\\alpha - \\beta) = \\frac{3\\sqrt{3}}{7}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\alpha$ when $d = 4$, and $\\beta$ when $d = \\sqrt{3}$.',
        answer: '$\\alpha = \\tan^{-1}\\frac{4}{4} = \\tan^{-1} 1 = \\frac{\\pi}{4}$. $\\beta = \\tan^{-1}\\frac{1}{\\sqrt{3}} = \\frac{\\pi}{6}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Show that $\\tan(\\alpha - \\beta) = \\frac{3d}{d^{2} + 4}$.',
        answer: '$\\tan\\alpha = \\frac{4}{d}$ and $\\tan\\beta = \\frac{1}{d}$, so $\\tan(\\alpha - \\beta) = \\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta} = \\frac{\\frac{3}{d}}{1 + \\frac{4}{d^{2}}} = \\frac{3d}{d^{2} + 4}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the distances $d$ at which $\\tan(\\alpha - \\beta) = \\frac{3}{5}$.\nOR\nFind the distance at which $\\alpha = \\frac{\\pi}{3}$, and find $\\tan(\\alpha - \\beta)$ at that distance.',
        answer: '$\\frac{3d}{d^{2} + 4} = \\frac{3}{5}$ gives $5d = d^{2} + 4$, i.e. $d^{2} - 5d + 4 = 0$ (1 mark). So $(d - 1)(d - 4) = 0$ and $d = 1$ m or $d = 4$ m (1 mark). (Both work: at $d = 4$, $\\alpha - \\beta = \\frac{\\pi}{4} - \\tan^{-1}\\frac{1}{4}$ and at $d = 1$ the angles are $\\tan^{-1} 4$ and $\\frac{\\pi}{4}$, both differences being acute with tangent $\\frac{3}{5}$.)\nOR: $\\tan^{-1}\\frac{4}{d} = \\frac{\\pi}{3}$ gives $\\frac{4}{d} = \\sqrt{3}$, so $d = \\frac{4}{\\sqrt{3}}$ m (1 mark). Then $\\tan(\\alpha - \\beta) = \\frac{3d}{d^{2} + 4} = \\frac{3 \\cdot \\frac{4}{\\sqrt{3}}}{\\frac{16}{3} + 4} = \\frac{4\\sqrt{3}}{\\frac{28}{3}} = \\frac{3\\sqrt{3}}{7}$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-r3-e02', chapter: C, topic: DR, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A vertical pole 3 m tall casts a shadow of length $s$ metres ($s > 0$) on level ground. The angle of elevation of the sun is $\\theta = \\cot^{-1}\\left(\\frac{s}{3}\\right)$ radians.',
    answer: '(i) $\\frac{\\pi}{6}$. (ii) $\\left(0, \\frac{\\pi}{2}\\right)$. (iii) $\\sqrt{3} \\le s \\le 3\\sqrt{3}$. OR: $s = 3$ m and $\\sin\\theta = \\frac{3}{5}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the angle of elevation of the sun when the shadow is $3\\sqrt{3}$ m long.',
        answer: '$\\theta = \\cot^{-1}\\frac{3\\sqrt{3}}{3} = \\cot^{-1}\\sqrt{3} = \\frac{\\pi}{6}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'As $s$ takes all positive values, what set of values does $\\theta$ take?',
        answer: 'For $s > 0$, $\\frac{s}{3}$ takes every positive value. $\\cot^{-1}$ maps $(0, \\infty)$ onto $\\left(0, \\frac{\\pi}{2}\\right)$ (it is decreasing, with $\\cot^{-1} 0 = \\frac{\\pi}{2}$ and values tending to $0$ for large arguments), so $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the shadow lengths for which the sun\'s elevation is between $\\frac{\\pi}{6}$ and $\\frac{\\pi}{3}$ (inclusive).\nOR\nFind the shadow length when $\\theta = \\frac{\\pi}{4}$, and find $\\sin\\theta$ when $s = 4$.',
        answer: '$\\cot^{-1}$ is decreasing, so $\\frac{\\pi}{6} \\le \\cot^{-1}\\frac{s}{3} \\le \\frac{\\pi}{3}$ means $\\cot\\frac{\\pi}{3} \\le \\frac{s}{3} \\le \\cot\\frac{\\pi}{6}$, i.e. $\\frac{1}{\\sqrt{3}} \\le \\frac{s}{3} \\le \\sqrt{3}$ (1 mark). So $\\sqrt{3} \\le s \\le 3\\sqrt{3}$ (about 1.73 m to 5.20 m) (1 mark).\nOR: $\\cot^{-1}\\frac{s}{3} = \\frac{\\pi}{4}$ gives $\\frac{s}{3} = 1$, so $s = 3$ m (1 mark). For $s = 4$, $\\cot\\theta = \\frac{4}{3}$ with $\\theta$ acute, so the hypotenuse is $\\sqrt{3^{2} + 4^{2}} = 5$ and $\\sin\\theta = \\frac{3}{5}$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-r3-e03', chapter: C, topic: GR, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A rotating mirror tracks a signal of strength $x$ (where $|x| \\ge 1$) and turns through an angle $\\theta(x) = \\operatorname{cosec}^{-1} x$ radians (principal value). Engineers study the graph of $\\theta$ against $x$ to set the limits of the motor.',
    answer: '(i) Range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$. (ii) $\\frac{\\pi}{3}$ and $-\\frac{\\pi}{6}$. (iii) $\\frac{2}{\\sqrt{3}} \\le x \\le 2$. OR: $x = -\\frac{2}{\\sqrt{3}}$; $\\theta$ is never $0$ since $\\operatorname{cosec}\\theta$ is never $0$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the range of $\\theta$, and the value that $\\theta$ never takes.',
        answer: 'The range of $\\operatorname{cosec}^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$. The value $0$ is never taken (the graph only approaches $\\theta = 0$ as $x \\to \\pm\\infty$).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\theta\\left(\\frac{2}{\\sqrt{3}}\\right)$ and $\\theta(-2)$.',
        answer: '$\\theta\\left(\\frac{2}{\\sqrt{3}}\\right) = \\frac{\\pi}{3}$, since $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$. $\\theta(-2) = -\\frac{\\pi}{6}$, since $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$ and $-\\frac{\\pi}{6}$ is in the principal range.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'For $x \\ge 1$, the graph of $\\theta$ falls from $\\left(1, \\frac{\\pi}{2}\\right)$ towards the line $\\theta = 0$. The motor allows $\\frac{\\pi}{6} \\le \\theta \\le \\frac{\\pi}{3}$. Find the allowed values of $x \\ge 1$.\nOR\nFind the value of $x$ for which $\\theta(x) = -\\frac{\\pi}{3}$, and explain why $\\theta$ can never be $0$.',
        answer: 'Since $\\theta$ is decreasing for $x \\ge 1$, $\\frac{\\pi}{6} \\le \\operatorname{cosec}^{-1} x \\le \\frac{\\pi}{3}$ means $\\operatorname{cosec}\\frac{\\pi}{3} \\le x \\le \\operatorname{cosec}\\frac{\\pi}{6}$ (1 mark). So $\\frac{2}{\\sqrt{3}} \\le x \\le 2$ (1 mark).\nOR: $-\\frac{\\pi}{3}$ is in the principal range, so $x = \\operatorname{cosec}\\left(-\\frac{\\pi}{3}\\right) = -\\frac{2}{\\sqrt{3}}$ (1 mark). $\\theta = 0$ would need $x = \\operatorname{cosec} 0 = \\frac{1}{\\sin 0}$, which does not exist; equivalently $|x| \\ge 1$ means $\\left|\\frac{1}{x}\\right| = |\\sin\\theta|$ is never $0$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-r3-e04', chapter: C, topic: EV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A rotary dial can be turned through any real angle $\\varphi$ (in radians). Sensors on the dial report only principal values. Sensor S reports $\\sin^{-1}(\\sin\\varphi)$, sensor C reports $\\cos^{-1}(\\cos\\varphi)$ and sensor T reports $\\tan^{-1}(\\tan\\varphi)$ (where defined).',
    answer: '(i) $-\\frac{\\pi}{6}$. (ii) $\\frac{5\\pi}{6}$. (iii) $\\varphi = \\frac{5\\pi}{4}$. OR: T reads $-\\frac{\\pi}{3}$ at $\\frac{2\\pi}{3}$, and $\\varphi = \\frac{3\\pi}{4}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'What does sensor S report when $\\varphi = -\\frac{5\\pi}{6}$?',
        answer: '$\\sin\\left(-\\frac{5\\pi}{6}\\right) = -\\frac{1}{2}$ and $\\sin^{-1}\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'What does sensor C report when $\\varphi = -\\frac{5\\pi}{6}$?',
        answer: '$\\cos\\left(-\\frac{5\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$ and $\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{5\\pi}{6}$ (in $[0, \\pi]$).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that for $\\pi \\le \\varphi \\le 2\\pi$, sensor C reports $2\\pi - \\varphi$, and hence find the angle $\\varphi$ in this interval at which C reports $\\frac{3\\pi}{4}$.\nOR\nFind the reading of sensor T when $\\varphi = \\frac{2\\pi}{3}$, and find the angle $\\varphi \\in \\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$ at which T reports $-\\frac{\\pi}{4}$.',
        answer: 'For $\\pi \\le \\varphi \\le 2\\pi$, $\\cos\\varphi = \\cos(2\\pi - \\varphi)$ and $2\\pi - \\varphi \\in [0, \\pi]$, so C reports $2\\pi - \\varphi$ (1 mark). Then $2\\pi - \\varphi = \\frac{3\\pi}{4}$ gives $\\varphi = \\frac{5\\pi}{4}$, which is in $[\\pi, 2\\pi]$ (1 mark).\nOR: $\\tan\\frac{2\\pi}{3} = -\\sqrt{3}$, so T reports $\\tan^{-1}(-\\sqrt{3}) = -\\frac{\\pi}{3}$ (1 mark). For $\\varphi \\in \\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$, $\\tan\\varphi = \\tan(\\varphi - \\pi)$ with $\\varphi - \\pi \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so T reports $\\varphi - \\pi$; setting $\\varphi - \\pi = -\\frac{\\pi}{4}$ gives $\\varphi = \\frac{3\\pi}{4}$ (1 mark).',
      },
    ],
  },
];
