import type { Class12Question } from './types.js';

const C = 'Inverse Trigonometric Functions';
const DR = 'Domain, range and principal values';
const GR = 'Graphs of inverse trigonometric functions';
const EV = 'Evaluating expressions with principal values';

export const CH02_ITF: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-itf-a01', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value of $\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right)$ is',
    options: ['$-\\frac{\\pi}{6}$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{6}$', '$\\frac{7\\pi}{6}$'],
    answer: 'Correct option: C) $\\frac{5\\pi}{6}$. The principal range of $\\cos^{-1}$ is $[0, \\pi]$, and $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$. $-\\frac{\\pi}{6}$ and $\\frac{7\\pi}{6}$ lie outside $[0, \\pi]$, and $\\frac{2\\pi}{3}$ gives cosine $-\\frac{1}{2}$.',
  },
  {
    id: 'c12-itf-a02', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The domain of the function $f(x) = \\sin^{-1}(3x - 2)$ is',
    options: ['$[-1, 1]$', '$\\left[\\frac{1}{3}, 1\\right]$', '$\\left[-\\frac{1}{3}, 1\\right]$', '$\\left[\\frac{2}{3}, 1\\right]$'],
    answer: 'Correct option: B) $\\left[\\frac{1}{3}, 1\\right]$. We need $-1 \\le 3x - 2 \\le 1$, so $1 \\le 3x \\le 3$, giving $\\frac{1}{3} \\le x \\le 1$.',
  },
  {
    id: 'c12-itf-a03', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value of $\\cot^{-1}(-1)$ is',
    options: ['$-\\frac{\\pi}{4}$', '$\\frac{3\\pi}{4}$', '$\\frac{\\pi}{4}$', '$-\\frac{3\\pi}{4}$'],
    answer: 'Correct option: B) $\\frac{3\\pi}{4}$. The principal range of $\\cot^{-1}$ is $(0, \\pi)$, and $\\cot\\frac{3\\pi}{4} = -1$. $-\\frac{\\pi}{4}$ would be the answer for $\\tan^{-1}(-1)$, not $\\cot^{-1}(-1)$.',
  },
  {
    id: 'c12-itf-a04', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value branch (range) of $\\sec^{-1} x$ is',
    options: ['$[0, \\pi]$', '$[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$', '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$', '$(0, \\pi)$'],
    answer: 'Correct option: B) $[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$. $\\sec^{-1}$ takes values in $[0, \\pi]$ like $\\cos^{-1}$, but $\\frac{\\pi}{2}$ is excluded because $\\sec\\frac{\\pi}{2}$ is not defined. Option C is the range of $\\operatorname{cosec}^{-1}$ and option D is the range of $\\cot^{-1}$.',
  },
  {
    id: 'c12-itf-a05', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $\\cos^{-1} x = 3y$ for some $x \\in [-1, 1]$, then $y$ always lies in',
    options: ['$\\left[0, \\frac{\\pi}{3}\\right]$', '$[0, \\pi]$', '$\\left[-\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right]$', '$\\left(0, \\frac{\\pi}{3}\\right)$'],
    answer: 'Correct option: A) $\\left[0, \\frac{\\pi}{3}\\right]$. Since $0 \\le \\cos^{-1} x \\le \\pi$, we get $0 \\le 3y \\le \\pi$, so $0 \\le y \\le \\frac{\\pi}{3}$. The end points are included because $\\cos^{-1} 1 = 0$ and $\\cos^{-1}(-1) = \\pi$.',
  },
  {
    id: 'c12-itf-a06', chapter: C, topic: DR, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The domain of $f(x) = \\sin^{-1}(x - 3)$ is $[2, 4]$.\nReason (R): The domain of $\\sin^{-1} x$ is $[-1, 1]$.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. Because $\\sin^{-1}$ is defined only on $[-1, 1]$, we need $-1 \\le x - 3 \\le 1$, which gives $2 \\le x \\le 4$.',
  },
  {
    id: 'c12-itf-a07', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\sin^{-1}\\left(\\sin\\frac{4\\pi}{5}\\right)$ is',
    options: ['$\\frac{4\\pi}{5}$', '$\\frac{\\pi}{5}$', '$-\\frac{\\pi}{5}$', '$-\\frac{4\\pi}{5}$'],
    answer: 'Correct option: B) $\\frac{\\pi}{5}$. $\\frac{4\\pi}{5}$ is outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, but $\\sin\\frac{4\\pi}{5} = \\sin\\left(\\pi - \\frac{4\\pi}{5}\\right) = \\sin\\frac{\\pi}{5}$, and $\\frac{\\pi}{5}$ lies in the principal range.',
  },
  {
    id: 'c12-itf-a08', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\tan^{-1}\\sqrt{3} - \\sec^{-1}(-2)$ is',
    options: ['$-\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\pi$', '$0$'],
    answer: 'Correct option: A) $-\\frac{\\pi}{3}$. $\\tan^{-1}\\sqrt{3} = \\frac{\\pi}{3}$ and $\\sec^{-1}(-2) = \\frac{2\\pi}{3}$ (since $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ and the range is $[0, \\pi] - \\{\\frac{\\pi}{2}\\}$). So the value is $\\frac{\\pi}{3} - \\frac{2\\pi}{3} = -\\frac{\\pi}{3}$.',
  },
  {
    id: 'c12-itf-a09', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\cos^{-1}\\left(\\cos\\frac{7\\pi}{6}\\right)$ is',
    options: ['$\\frac{7\\pi}{6}$', '$\\frac{5\\pi}{6}$', '$\\frac{\\pi}{6}$', '$-\\frac{5\\pi}{6}$'],
    answer: 'Correct option: B) $\\frac{5\\pi}{6}$. $\\frac{7\\pi}{6}$ is outside $[0, \\pi]$, but $\\cos\\frac{7\\pi}{6} = \\cos\\left(2\\pi - \\frac{7\\pi}{6}\\right) = \\cos\\frac{5\\pi}{6}$, and $\\frac{5\\pi}{6} \\in [0, \\pi]$.',
  },
  {
    id: 'c12-itf-a10', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\sin\\left(\\frac{\\pi}{3} - \\cot^{-1}\\left(-\\frac{1}{\\sqrt{3}}\\right)\\right)$ is',
    options: ['$-\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$0$', '$-\\frac{1}{2}$'],
    answer: 'Correct option: A) $-\\frac{\\sqrt{3}}{2}$. $\\cot^{-1}\\left(-\\frac{1}{\\sqrt{3}}\\right) = \\frac{2\\pi}{3}$ (range $(0, \\pi)$). So the expression is $\\sin\\left(\\frac{\\pi}{3} - \\frac{2\\pi}{3}\\right) = \\sin\\left(-\\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$. Taking the inverse cotangent as $-\\frac{\\pi}{3}$ wrongly gives $\\frac{\\sqrt{3}}{2}$.',
  },
  {
    id: 'c12-itf-a11', chapter: C, topic: GR, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'On the interval $[-1, 1]$, the graphs of $y = \\cos^{-1} x$ and $y = \\sin^{-1} x$ are drawn on the same axes. The set of all $x$ for which the graph of $y = \\cos^{-1} x$ lies strictly above the graph of $y = \\sin^{-1} x$ is',
    options: ['$\\left[-1, \\frac{1}{\\sqrt{2}}\\right)$', '$\\left(\\frac{1}{\\sqrt{2}}, 1\\right]$', '$[-1, 0)$', '$\\left[-1, \\frac{1}{2}\\right)$'],
    answer: 'Correct option: A) $\\left[-1, \\frac{1}{\\sqrt{2}}\\right)$. $\\cos^{-1} x$ is decreasing and $\\sin^{-1} x$ is increasing on $[-1, 1]$, and both equal $\\frac{\\pi}{4}$ at $x = \\frac{1}{\\sqrt{2}}$, so the curves cross only there. At $x = -1$, $\\cos^{-1}(-1) = \\pi > -\\frac{\\pi}{2} = \\sin^{-1}(-1)$, so $\\cos^{-1}$ is above for every $x < \\frac{1}{\\sqrt{2}}$.',
  },
  {
    id: 'c12-itf-a12', chapter: C, topic: GR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A graph is defined only for $x \\le -1$ and $x \\ge 1$. Its $y$-values lie in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ but never equal $0$, it passes through $\\left(1, \\frac{\\pi}{2}\\right)$ and $\\left(-1, -\\frac{\\pi}{2}\\right)$, and it approaches $y = 0$ as $x \\to \\pm\\infty$. The graph is that of',
    options: ['$y = \\sec^{-1} x$', '$y = \\operatorname{cosec}^{-1} x$', '$y = \\cot^{-1} x$', '$y = \\tan^{-1} x$'],
    answer: 'Correct option: B) $y = \\operatorname{cosec}^{-1} x$. Its domain is $(-\\infty, -1] \\cup [1, \\infty)$ and its range is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$. $\\sec^{-1}$ has range in $[0, \\pi]$, while $\\cot^{-1}$ and $\\tan^{-1}$ are defined for all real $x$.',
  },
  {
    id: 'c12-itf-a13', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The domain of $f(x) = \\cos^{-1}(x^{2} - 5)$ is',
    options: ['$[2, \\sqrt{6}]$', '$[-\\sqrt{6}, -2] \\cup [2, \\sqrt{6}]$', '$[-\\sqrt{6}, \\sqrt{6}]$', '$[4, 6]$'],
    answer: 'Correct option: B) $[-\\sqrt{6}, -2] \\cup [2, \\sqrt{6}]$. We need $-1 \\le x^{2} - 5 \\le 1$, so $4 \\le x^{2} \\le 6$, which holds for $2 \\le |x| \\le \\sqrt{6}$. Option A forgets the negative values and option D gives the interval for $x^{2}$, not $x$.',
  },
  {
    id: 'c12-itf-a14', chapter: C, topic: EV, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $\\tan^{-1}\\left(\\tan\\frac{3\\pi}{4}\\right) = -\\frac{\\pi}{4}$.\nReason (R): $\\tan^{-1}(\\tan x) = x$ for every real $x$ with $\\cos x \\neq 0$.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: C) A is true, but R is false. $\\tan\\frac{3\\pi}{4} = -1$ and $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$, so A is true. R is false: $\\tan^{-1}(\\tan x) = x$ only for $x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$; A itself is a counter-example, since $\\frac{3\\pi}{4} \\neq -\\frac{\\pi}{4}$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-itf-b01', chapter: C, topic: DR, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the domain of the function $f(x) = \\cos^{-1}(2x + 3)$.',
    answer: '$\\cos^{-1}$ is defined only on $[-1, 1]$, so $-1 \\le 2x + 3 \\le 1$. Subtracting 3: $-4 \\le 2x \\le -2$, so $-2 \\le x \\le -1$. The domain is $[-2, -1]$.',
    steps: [
      { step: 'Writes the condition $-1 \\le 2x + 3 \\le 1$', marks: 1 },
      { step: 'Solves to get the domain $[-2, -1]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b02', chapter: C, topic: EV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the value of $\\tan^{-1}(-1) + \\cos^{-1}\\left(-\\frac{1}{2}\\right) + \\sin^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)$.',
    answer: 'Using principal values: $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$ (range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$), $\\cos^{-1}\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$ (range $[0, \\pi]$), $\\sin^{-1}\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$. Sum $= -\\frac{\\pi}{4} + \\frac{2\\pi}{3} + \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$.',
    steps: [
      { step: 'Finds all three principal values $-\\frac{\\pi}{4}$, $\\frac{2\\pi}{3}$, $\\frac{\\pi}{3}$ (all three needed for this mark)', marks: 1 },
      { step: 'Adds to get $\\frac{3\\pi}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b03', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the domain of $f(x) = \\sin^{-1}(2x^{2} - 3)$.',
    answer: 'We need $-1 \\le 2x^{2} - 3 \\le 1$, so $2 \\le 2x^{2} \\le 4$, i.e. $1 \\le x^{2} \\le 2$. This means $1 \\le |x| \\le \\sqrt{2}$. The domain is $[-\\sqrt{2}, -1] \\cup [1, \\sqrt{2}]$.',
    steps: [
      { step: 'Sets up $-1 \\le 2x^{2} - 3 \\le 1$ and reduces it to $1 \\le x^{2} \\le 2$', marks: 1 },
      { step: 'States the domain $[-\\sqrt{2}, -1] \\cup [1, \\sqrt{2}]$, including both negative and positive parts', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b04', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the domain of $f(x) = \\sec^{-1}(3x - 1)$.',
    answer: '$\\sec^{-1} t$ is defined for $|t| \\ge 1$, i.e. $t \\le -1$ or $t \\ge 1$. So $3x - 1 \\le -1$, giving $x \\le 0$, or $3x - 1 \\ge 1$, giving $x \\ge \\frac{2}{3}$. The domain is $(-\\infty, 0] \\cup \\left[\\frac{2}{3}, \\infty\\right)$.',
    steps: [
      { step: 'Uses the domain of $\\sec^{-1}$: $3x - 1 \\le -1$ or $3x - 1 \\ge 1$', marks: 1 },
      { step: 'Gets the domain $(-\\infty, 0] \\cup \\left[\\frac{2}{3}, \\infty\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b05', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\sin^{-1}\\left(\\sin\\frac{13\\pi}{7}\\right) + \\cos^{-1}\\left(\\cos\\frac{13\\pi}{7}\\right)$.',
    answer: '$\\frac{13\\pi}{7} = 2\\pi - \\frac{\\pi}{7}$. So $\\sin\\frac{13\\pi}{7} = \\sin\\left(-\\frac{\\pi}{7}\\right)$, and since $-\\frac{\\pi}{7} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, $\\sin^{-1}\\left(\\sin\\frac{13\\pi}{7}\\right) = -\\frac{\\pi}{7}$. Also $\\cos\\frac{13\\pi}{7} = \\cos\\frac{\\pi}{7}$ and $\\frac{\\pi}{7} \\in [0, \\pi]$, so $\\cos^{-1}\\left(\\cos\\frac{13\\pi}{7}\\right) = \\frac{\\pi}{7}$. The sum is $-\\frac{\\pi}{7} + \\frac{\\pi}{7} = 0$.',
    steps: [
      { step: 'Finds $\\sin^{-1}\\left(\\sin\\frac{13\\pi}{7}\\right) = -\\frac{\\pi}{7}$', marks: 1 },
      { step: 'Finds $\\cos^{-1}\\left(\\cos\\frac{13\\pi}{7}\\right) = \\frac{\\pi}{7}$ and the sum $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b06', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $\\sin\\left(2\\tan^{-1}\\frac{1}{2}\\right)$.',
    answer: 'Let $\\theta = \\tan^{-1}\\frac{1}{2}$, so $\\tan\\theta = \\frac{1}{2}$ with $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$. Then $\\sin 2\\theta = \\frac{2\\tan\\theta}{1 + \\tan^{2}\\theta} = \\frac{2 \\cdot \\frac{1}{2}}{1 + \\frac{1}{4}} = \\frac{1}{\\frac{5}{4}} = \\frac{4}{5}$. The value is $\\frac{4}{5}$.',
    steps: [
      { step: 'Puts $\\theta = \\tan^{-1}\\frac{1}{2}$ and uses $\\sin 2\\theta = \\frac{2\\tan\\theta}{1 + \\tan^{2}\\theta}$ (or finds $\\sin\\theta$, $\\cos\\theta$ from a triangle)', marks: 1 },
      { step: 'Gets $\\frac{4}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b07', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Write $\\tan^{-1}\\left(\\frac{1 + \\cos x}{\\sin x}\\right)$, where $0 < x < \\pi$, in its simplest form.',
    answer: '$1 + \\cos x = 2\\cos^{2}\\frac{x}{2}$ and $\\sin x = 2\\sin\\frac{x}{2}\\cos\\frac{x}{2}$, so the fraction is $\\cot\\frac{x}{2} = \\tan\\left(\\frac{\\pi}{2} - \\frac{x}{2}\\right)$. Since $0 < x < \\pi$, $\\frac{\\pi}{2} - \\frac{x}{2} \\in \\left(0, \\frac{\\pi}{2}\\right)$, which is inside the principal range of $\\tan^{-1}$. Hence the expression equals $\\frac{\\pi}{2} - \\frac{x}{2}$.',
    steps: [
      { step: 'Uses half-angle identities to rewrite the fraction as $\\tan\\left(\\frac{\\pi}{2} - \\frac{x}{2}\\right)$', marks: 1 },
      { step: 'Checks the angle is in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ and gives $\\frac{\\pi}{2} - \\frac{x}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b08', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Sketch the graph of $y = \\sin^{-1} x$ for $-\\frac{1}{2} \\le x \\le 1$ (principal branch), marking the end points, and state its range on this interval.',
    answer: 'The graph is the increasing curve of $y = \\sin^{-1} x$ through the origin. At $x = -\\frac{1}{2}$, $y = -\\frac{\\pi}{6}$; at $x = 0$, $y = 0$; at $x = 1$, $y = \\frac{\\pi}{2}$. So the curve starts at $\\left(-\\frac{1}{2}, -\\frac{\\pi}{6}\\right)$, passes through $(0, 0)$ and rises to $\\left(1, \\frac{\\pi}{2}\\right)$, getting steeper near $x = 1$. Since the function is increasing, the range on this interval is $\\left[-\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right]$.',
    steps: [
      { step: 'Draws an increasing curve from $\\left(-\\frac{1}{2}, -\\frac{\\pi}{6}\\right)$ through $(0, 0)$ to $\\left(1, \\frac{\\pi}{2}\\right)$', marks: 1 },
      { step: 'States the range $\\left[-\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-b09', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 2,
    text: 'Find the value of $\\sin\\left(\\frac{1}{2}\\cos^{-1}\\left(-\\frac{7}{25}\\right)\\right)$.',
    answer: 'Let $\\theta = \\cos^{-1}\\left(-\\frac{7}{25}\\right)$, so $\\cos\\theta = -\\frac{7}{25}$ and $\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$. Then $\\frac{\\theta}{2} \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$, so $\\sin\\frac{\\theta}{2} > 0$. Using $\\sin^{2}\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{2} = \\frac{1 + \\frac{7}{25}}{2} = \\frac{16}{25}$, we get $\\sin\\frac{\\theta}{2} = \\frac{4}{5}$.',
    steps: [
      { step: 'Sets $\\theta = \\cos^{-1}\\left(-\\frac{7}{25}\\right)$ and uses $\\sin^{2}\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{2} = \\frac{16}{25}$', marks: 1 },
      { step: 'Uses $\\frac{\\theta}{2} \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$ to take the positive root and gets $\\frac{4}{5}$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-itf-c01', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\cos^{-1}\\left(\\cos\\frac{5\\pi}{4}\\right) + \\sin^{-1}\\left(\\sin\\frac{5\\pi}{4}\\right) + \\tan^{-1}\\left(\\tan\\frac{5\\pi}{4}\\right)$.',
    answer: '$\\cos\\frac{5\\pi}{4} = -\\frac{1}{\\sqrt{2}}$, so $\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right) = \\frac{3\\pi}{4}$. $\\sin\\frac{5\\pi}{4} = -\\frac{1}{\\sqrt{2}}$, so $\\sin^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right) = -\\frac{\\pi}{4}$. $\\tan\\frac{5\\pi}{4} = 1$, so $\\tan^{-1} 1 = \\frac{\\pi}{4}$. The sum is $\\frac{3\\pi}{4} - \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{3\\pi}{4}$.',
    steps: [
      { step: 'Gets $\\cos^{-1}\\left(\\cos\\frac{5\\pi}{4}\\right) = \\frac{3\\pi}{4}$', marks: 1 },
      { step: 'Gets $\\sin^{-1}\\left(\\sin\\frac{5\\pi}{4}\\right) = -\\frac{\\pi}{4}$ and $\\tan^{-1}\\left(\\tan\\frac{5\\pi}{4}\\right) = \\frac{\\pi}{4}$', marks: 1 },
      { step: 'Adds to get $\\frac{3\\pi}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-c02', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f(x) = \\sin^{-1}(2x - 1) + \\cos^{-1}\\left(\\frac{x}{2}\\right)$. Find the domain of $f$, and find $f(0)$ and $f(1)$.',
    answer: '$\\sin^{-1}(2x - 1)$ needs $-1 \\le 2x - 1 \\le 1$, i.e. $0 \\le x \\le 1$. $\\cos^{-1}\\frac{x}{2}$ needs $-1 \\le \\frac{x}{2} \\le 1$, i.e. $-2 \\le x \\le 2$. Both must hold, so the domain is $[0, 1] \\cap [-2, 2] = [0, 1]$. $f(0) = \\sin^{-1}(-1) + \\cos^{-1} 0 = -\\frac{\\pi}{2} + \\frac{\\pi}{2} = 0$. $f(1) = \\sin^{-1} 1 + \\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{2} + \\frac{\\pi}{3} = \\frac{5\\pi}{6}$.',
    steps: [
      { step: 'Finds the two separate conditions $[0, 1]$ and $[-2, 2]$', marks: 1 },
      { step: 'Takes the intersection to get domain $[0, 1]$', marks: 1 },
      { step: 'Gets $f(0) = 0$ and $f(1) = \\frac{5\\pi}{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-c03', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Sketch the principal branch of $y = \\cos^{-1} x$, state whether it is increasing or decreasing, and use it to find the set of values of $y$ when $-\\frac{\\sqrt{3}}{2} \\le x \\le \\frac{1}{2}$.',
    answer: 'The graph runs from $(-1, \\pi)$ through $\\left(0, \\frac{\\pi}{2}\\right)$ down to $(1, 0)$; its domain is $[-1, 1]$ and range $[0, \\pi]$. It is strictly decreasing on $[-1, 1]$. So on $\\left[-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right]$ the largest value is at the left end, $\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{5\\pi}{6}$, and the smallest is at the right end, $\\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}$. The values of $y$ form $\\left[\\frac{\\pi}{3}, \\frac{5\\pi}{6}\\right]$.',
    steps: [
      { step: 'Sketches the curve through $(-1, \\pi)$, $\\left(0, \\frac{\\pi}{2}\\right)$, $(1, 0)$', marks: 1 },
      { step: 'States that $\\cos^{-1} x$ is decreasing and finds the end values $\\frac{5\\pi}{6}$ and $\\frac{\\pi}{3}$', marks: 1 },
      { step: 'Gives the set $\\left[\\frac{\\pi}{3}, \\frac{5\\pi}{6}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-c04', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Write $\\tan^{-1}\\left(\\sqrt{\\frac{1 - \\cos x}{1 + \\cos x}}\\right)$, where $\\pi < x < 2\\pi$, in its simplest form.',
    answer: '$\\frac{1 - \\cos x}{1 + \\cos x} = \\frac{2\\sin^{2}\\frac{x}{2}}{2\\cos^{2}\\frac{x}{2}} = \\tan^{2}\\frac{x}{2}$, so the square root is $\\left|\\tan\\frac{x}{2}\\right|$. For $\\pi < x < 2\\pi$, $\\frac{x}{2} \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, where $\\tan\\frac{x}{2} < 0$. So $\\left|\\tan\\frac{x}{2}\\right| = -\\tan\\frac{x}{2} = \\tan\\left(\\pi - \\frac{x}{2}\\right)$. Now $\\pi - \\frac{x}{2} \\in \\left(0, \\frac{\\pi}{2}\\right)$, inside the principal range of $\\tan^{-1}$. Hence the expression equals $\\pi - \\frac{x}{2}$.',
    steps: [
      { step: 'Rewrites the root as $\\left|\\tan\\frac{x}{2}\\right|$ using half-angle identities', marks: 1 },
      { step: 'Uses $\\frac{x}{2} \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$ to write it as $-\\tan\\frac{x}{2} = \\tan\\left(\\pi - \\frac{x}{2}\\right)$', marks: 1 },
      { step: 'Checks $\\pi - \\frac{x}{2}$ is in the principal range and gives the answer $\\pi - \\frac{x}{2}$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-itf-d01', chapter: C, topic: DR, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $g(x) = \\cos^{-1}(3 - x^{2})$.\n(i) Find the domain of $g$.\n(ii) Solve $g(x) = \\frac{\\pi}{3}$.\n(iii) Find the values of $x$ at which $g$ takes its greatest value, and state that value.\n(iv) Find the range of $h(x) = 2g(x) - \\pi$.',
    answer: '(i) We need $-1 \\le 3 - x^{2} \\le 1$. From $3 - x^{2} \\le 1$: $x^{2} \\ge 2$. From $3 - x^{2} \\ge -1$: $x^{2} \\le 4$. So $2 \\le x^{2} \\le 4$, i.e. $\\sqrt{2} \\le |x| \\le 2$. Domain: $[-2, -\\sqrt{2}] \\cup [\\sqrt{2}, 2]$.\n(ii) $g(x) = \\frac{\\pi}{3}$ means $3 - x^{2} = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$, so $x^{2} = \\frac{5}{2}$ and $x = \\pm\\frac{\\sqrt{10}}{2}$. Both lie in the domain since $2 \\le \\frac{5}{2} \\le 4$.\n(iii) The greatest value of $\\cos^{-1}$ is $\\pi$, reached when its argument is $-1$: $3 - x^{2} = -1$, so $x = \\pm 2$. The greatest value is $\\pi$.\n(iv) As $x$ runs over the domain, $3 - x^{2}$ takes every value in $[-1, 1]$, so $g(x)$ takes every value in $[0, \\pi]$. Then $2g(x) - \\pi$ takes every value in $[-\\pi, \\pi]$. Range of $h$: $[-\\pi, \\pi]$.',
    steps: [
      { step: '(i) Sets up $-1 \\le 3 - x^{2} \\le 1$ and reduces to $2 \\le x^{2} \\le 4$', marks: 1 },
      { step: '(i) States the domain $[-2, -\\sqrt{2}] \\cup [\\sqrt{2}, 2]$', marks: 1 },
      { step: '(ii) Gets $x = \\pm\\frac{\\sqrt{10}}{2}$', marks: 1 },
      { step: '(iii) Gets $x = \\pm 2$ and greatest value $\\pi$', marks: 1 },
      { step: '(iv) Gets the range $[-\\pi, \\pi]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-d02', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = \\sin^{-1}(x^{2} - 4x + 3)$.\n(i) Find the domain of $f$.\n(ii) Solve $f(x) = \\frac{\\pi}{6}$.\n(iii) Find the set of values taken by $f(x)$ when $2 \\le x \\le 3$.',
    answer: '(i) $x^{2} - 4x + 3 = (x - 2)^{2} - 1$. We need $-1 \\le (x - 2)^{2} - 1 \\le 1$, i.e. $0 \\le (x - 2)^{2} \\le 2$. The left inequality always holds; the right gives $|x - 2| \\le \\sqrt{2}$. Domain: $[2 - \\sqrt{2}, 2 + \\sqrt{2}]$.\n(ii) $f(x) = \\frac{\\pi}{6}$ means $x^{2} - 4x + 3 = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$, so $(x - 2)^{2} = \\frac{3}{2}$ and $x = 2 \\pm \\frac{\\sqrt{6}}{2}$. Both lie in the domain because $\\frac{3}{2} \\le 2$.\n(iii) For $2 \\le x \\le 3$, $(x - 2)^{2}$ increases from $0$ to $1$, so $u = (x - 2)^{2} - 1$ increases from $-1$ to $0$, taking every value in $[-1, 0]$. As $\\sin^{-1}$ is increasing, $f(x)$ takes every value from $\\sin^{-1}(-1) = -\\frac{\\pi}{2}$ to $\\sin^{-1} 0 = 0$. The set is $\\left[-\\frac{\\pi}{2}, 0\\right]$.',
    steps: [
      { step: '(i) Completes the square and sets up $0 \\le (x - 2)^{2} \\le 2$', marks: 1 },
      { step: '(i) States the domain $[2 - \\sqrt{2}, 2 + \\sqrt{2}]$', marks: 1 },
      { step: '(ii) Gets $x = 2 \\pm \\frac{\\sqrt{6}}{2}$ and checks they are in the domain', marks: 1 },
      { step: '(iii) Shows the argument runs over $[-1, 0]$ for $2 \\le x \\le 3$', marks: 1 },
      { step: '(iii) Uses that $\\sin^{-1}$ is increasing to get $\\left[-\\frac{\\pi}{2}, 0\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-d03', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'The sine function is not one-one on $\\mathbb{R}$, so to define an inverse we restrict it. Instead of the principal interval, consider $s(x) = \\sin x$ on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$. This is a non-principal branch: in this question $g$ denotes the inverse of this restricted function, while $\\sin^{-1}$ always means the usual principal inverse sine with range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.\n(i) Explain why $s : \\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right] \\to [-1, 1]$ is one-one and onto.\n(ii) Show that its inverse is $g(y) = \\pi - \\sin^{-1} y$ for $y \\in [-1, 1]$, where $\\sin^{-1}$ is the principal inverse sine.\n(iii) Find $g\\left(\\frac{1}{2}\\right)$ and $g\\left(-\\frac{\\sqrt{3}}{2}\\right)$.\n(iv) Find the principal value $\\sin^{-1}\\left(\\sin\\frac{4\\pi}{3}\\right)$ and explain why it differs from $\\frac{4\\pi}{3}$.',
    answer: '(i) On $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$, $\\sin x$ decreases steadily from $\\sin\\frac{\\pi}{2} = 1$ to $\\sin\\frac{3\\pi}{2} = -1$ (its derivative $\\cos x \\le 0$ there, zero only at the end points). A strictly decreasing function is one-one, and since it is continuous it takes every value between $1$ and $-1$, so it is onto $[-1, 1]$.\n(ii) Take $y \\in [-1, 1]$ and let $x = \\pi - \\sin^{-1} y$. Since $\\sin^{-1} y \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, $x \\in \\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$. Also $\\sin x = \\sin(\\pi - \\sin^{-1} y) = \\sin(\\sin^{-1} y) = y$. So $x$ is the unique point of the restricted interval with $s(x) = y$, and $g(y) = \\pi - \\sin^{-1} y$ is the inverse.\n(iii) $g\\left(\\frac{1}{2}\\right) = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$. $g\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\pi - \\left(-\\frac{\\pi}{3}\\right) = \\frac{4\\pi}{3}$.\n(iv) $\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$, and the principal value is $\\sin^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\frac{\\pi}{3}$. It differs from $\\frac{4\\pi}{3}$ because $\\frac{4\\pi}{3}$ is not in the principal range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$; $\\frac{4\\pi}{3}$ is the value given by the other branch $g$.',
    steps: [
      { step: '(i) Argues $\\sin x$ is strictly decreasing from $1$ to $-1$ on the interval, hence one-one and onto', marks: 1 },
      { step: '(ii) Shows $\\pi - \\sin^{-1} y$ lies in $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$', marks: 1 },
      { step: '(ii) Shows $\\sin(\\pi - \\sin^{-1} y) = y$', marks: 1 },
      { step: '(iii) Gets $\\frac{5\\pi}{6}$ and $\\frac{4\\pi}{3}$', marks: 1 },
      { step: '(iv) Gets $-\\frac{\\pi}{3}$ with the principal-range reason', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-d04', chapter: C, topic: EV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the principal values of\n(i) $\\tan^{-1}\\left(\\tan\\frac{9\\pi}{8}\\right)$\n(ii) $\\cos^{-1}\\left(\\cos\\left(-\\frac{8\\pi}{3}\\right)\\right)$\n(iii) $\\sin^{-1}\\left(\\cos\\frac{33\\pi}{10}\\right)$\n(iv) $\\sec^{-1}\\left(\\sec\\frac{7\\pi}{4}\\right)$\nand hence find the sum of all four.',
    answer: '(i) $\\tan\\frac{9\\pi}{8} = \\tan\\left(\\pi + \\frac{\\pi}{8}\\right) = \\tan\\frac{\\pi}{8}$, and $\\frac{\\pi}{8} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so the value is $\\frac{\\pi}{8}$.\n(ii) $\\cos\\left(-\\frac{8\\pi}{3}\\right) = \\cos\\frac{8\\pi}{3} = \\cos\\left(2\\pi + \\frac{2\\pi}{3}\\right) = \\cos\\frac{2\\pi}{3}$, and $\\frac{2\\pi}{3} \\in [0, \\pi]$, so the value is $\\frac{2\\pi}{3}$.\n(iii) $\\cos\\frac{33\\pi}{10} = \\cos\\left(2\\pi + \\frac{13\\pi}{10}\\right) = \\cos\\frac{13\\pi}{10} = -\\cos\\frac{3\\pi}{10} = -\\sin\\left(\\frac{\\pi}{2} - \\frac{3\\pi}{10}\\right) = -\\sin\\frac{\\pi}{5} = \\sin\\left(-\\frac{\\pi}{5}\\right)$. Since $-\\frac{\\pi}{5} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, the value is $-\\frac{\\pi}{5}$.\n(iv) $\\sec\\frac{7\\pi}{4} = \\frac{1}{\\cos\\frac{7\\pi}{4}} = \\sqrt{2} = \\sec\\frac{\\pi}{4}$, and $\\frac{\\pi}{4} \\in [0, \\pi] - \\{\\frac{\\pi}{2}\\}$, so the value is $\\frac{\\pi}{4}$.\nSum $= \\frac{\\pi}{8} + \\frac{2\\pi}{3} - \\frac{\\pi}{5} + \\frac{\\pi}{4} = \\frac{15\\pi + 80\\pi - 24\\pi + 30\\pi}{120} = \\frac{101\\pi}{120}$.',
    steps: [
      { step: '(i) Gets $\\frac{\\pi}{8}$', marks: 1 },
      { step: '(ii) Gets $\\frac{2\\pi}{3}$', marks: 1 },
      { step: '(iii) Gets $-\\frac{\\pi}{5}$', marks: 1 },
      { step: '(iv) Gets $\\frac{\\pi}{4}$', marks: 1 },
      { step: 'Adds correctly to get $\\frac{101\\pi}{120}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-d05', chapter: C, topic: EV, type: 'long', complexity: 'hard', marks: 5,
    text: '(a) Write $\\tan^{-1}\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$, where $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$, in simplest form, and hence find its value at $x = \\frac{\\pi}{3}$.\n(b) Write $\\tan^{-1}\\left(\\frac{\\sqrt{1 + \\cos x} + \\sqrt{1 - \\cos x}}{\\sqrt{1 + \\cos x} - \\sqrt{1 - \\cos x}}\\right)$, where $0 < x < \\frac{\\pi}{2}$, in simplest form.',
    answer: '(a) Divide numerator and denominator by $\\cos x$ (when $\\cos x \\neq 0$; the final form also holds at $x = \\frac{\\pi}{2}$ by direct check): $\\frac{1 - \\tan x}{1 + \\tan x} = \\tan\\left(\\frac{\\pi}{4} - x\\right)$. For $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$, $\\frac{\\pi}{4} - x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, the principal range of $\\tan^{-1}$. So the expression equals $\\frac{\\pi}{4} - x$. At $x = \\frac{\\pi}{3}$ its value is $\\frac{\\pi}{4} - \\frac{\\pi}{3} = -\\frac{\\pi}{12}$.\n(b) For $0 < x < \\frac{\\pi}{2}$, $\\frac{x}{2} \\in \\left(0, \\frac{\\pi}{4}\\right)$, so $\\cos\\frac{x}{2} > 0$ and $\\sin\\frac{x}{2} > 0$. Then $\\sqrt{1 + \\cos x} = \\sqrt{2}\\cos\\frac{x}{2}$ and $\\sqrt{1 - \\cos x} = \\sqrt{2}\\sin\\frac{x}{2}$. The fraction becomes $\\frac{\\cos\\frac{x}{2} + \\sin\\frac{x}{2}}{\\cos\\frac{x}{2} - \\sin\\frac{x}{2}} = \\frac{1 + \\tan\\frac{x}{2}}{1 - \\tan\\frac{x}{2}} = \\tan\\left(\\frac{\\pi}{4} + \\frac{x}{2}\\right)$. Since $\\frac{\\pi}{4} + \\frac{x}{2} \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$, which is inside the principal range, the expression equals $\\frac{\\pi}{4} + \\frac{x}{2}$.',
    steps: [
      { step: '(a) Rewrites the fraction as $\\tan\\left(\\frac{\\pi}{4} - x\\right)$ and checks the angle is in the principal range, giving $\\frac{\\pi}{4} - x$', marks: 1 },
      { step: '(a) Gets the value $-\\frac{\\pi}{12}$ at $x = \\frac{\\pi}{3}$', marks: 1 },
      { step: '(b) Writes $\\sqrt{1 + \\cos x} = \\sqrt{2}\\cos\\frac{x}{2}$ and $\\sqrt{1 - \\cos x} = \\sqrt{2}\\sin\\frac{x}{2}$, with the sign justified', marks: 1 },
      { step: '(b) Reduces the fraction to $\\tan\\left(\\frac{\\pi}{4} + \\frac{x}{2}\\right)$', marks: 1 },
      { step: '(b) Checks $\\frac{\\pi}{4} + \\frac{x}{2} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ and gives $\\frac{\\pi}{4} + \\frac{x}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-d06', chapter: C, topic: DR, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $f(x) = 2\\sin^{-1} x + \\frac{\\pi}{2}$.\n(i) Write the domain and the range of $f$.\n(ii) Solve $f(x) = \\frac{\\pi}{6}$.\n(iii) Find the set of values of $f(x)$ when $-\\frac{1}{2} \\le x \\le \\frac{\\sqrt{3}}{2}$.\n(iv) Is $f$ one-one on its domain? Give a reason.',
    answer: '(i) $f$ is defined where $\\sin^{-1} x$ is, so the domain is $[-1, 1]$. Since $-\\frac{\\pi}{2} \\le \\sin^{-1} x \\le \\frac{\\pi}{2}$, we get $-\\pi \\le 2\\sin^{-1} x \\le \\pi$ and $-\\frac{\\pi}{2} \\le f(x) \\le \\frac{3\\pi}{2}$. Range: $\\left[-\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$.\n(ii) $2\\sin^{-1} x + \\frac{\\pi}{2} = \\frac{\\pi}{6}$ gives $\\sin^{-1} x = -\\frac{\\pi}{6}$, so $x = -\\frac{1}{2}$.\n(iii) $\\sin^{-1}$ is increasing, so for $-\\frac{1}{2} \\le x \\le \\frac{\\sqrt{3}}{2}$, $-\\frac{\\pi}{6} \\le \\sin^{-1} x \\le \\frac{\\pi}{3}$. Then $-\\frac{\\pi}{3} + \\frac{\\pi}{2} \\le f(x) \\le \\frac{2\\pi}{3} + \\frac{\\pi}{2}$, i.e. $f(x) \\in \\left[\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right]$.\n(iv) Yes. $\\sin^{-1} x$ is strictly increasing on $[-1, 1]$, so $2\\sin^{-1} x + \\frac{\\pi}{2}$ is also strictly increasing, and a strictly increasing function is one-one.',
    steps: [
      { step: '(i) Domain $[-1, 1]$ and range $\\left[-\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$', marks: 1 },
      { step: '(ii) Gets $x = -\\frac{1}{2}$', marks: 1 },
      { step: '(iii) Finds $-\\frac{\\pi}{6} \\le \\sin^{-1} x \\le \\frac{\\pi}{3}$ on the interval', marks: 1 },
      { step: '(iii) Gets $\\left[\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right]$', marks: 1 },
      { step: '(iv) Says yes, because $f$ is strictly increasing', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-itf-e01', chapter: C, topic: EV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A security camera is fixed at the top of a 6 m pole in a parking lot. When a person stands at a horizontal distance of $x$ metres from the foot of the pole ($x > 0$), the camera must tilt down by an angle of depression $\\theta(x) = \\tan^{-1}\\left(\\frac{6}{x}\\right)$ (in radians) to point at the person\'s feet.',
    answer: '(i) $\\frac{\\pi}{6}$. (ii) $\\left(0, \\frac{\\pi}{2}\\right)$. (iii) $2\\sqrt{3} \\le x \\le 6\\sqrt{3}$. OR: $x = 6$ m and $\\cos\\theta = \\frac{4}{5}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the angle of depression when the person is $6\\sqrt{3}$ m from the pole.',
        answer: '$\\theta = \\tan^{-1}\\left(\\frac{6}{6\\sqrt{3}}\\right) = \\tan^{-1}\\frac{1}{\\sqrt{3}} = \\frac{\\pi}{6}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'As $x$ takes all positive values, what set of values does $\\theta$ take?',
        answer: 'For $x > 0$, $\\frac{6}{x}$ takes every positive value. $\\tan^{-1}$ maps $(0, \\infty)$ onto $\\left(0, \\frac{\\pi}{2}\\right)$, so $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The camera can only tilt between $\\frac{\\pi}{6}$ and $\\frac{\\pi}{3}$ (inclusive). Find the distances $x$ at which it can see a person\'s feet.\nOR\nFind the distance at which $\\theta = \\frac{\\pi}{4}$, and find $\\cos\\theta$ when the person is 8 m from the pole.',
        answer: 'We need $\\frac{\\pi}{6} \\le \\tan^{-1}\\frac{6}{x} \\le \\frac{\\pi}{3}$. Since $\\tan$ is increasing on $\\left(0, \\frac{\\pi}{2}\\right)$, this means $\\frac{1}{\\sqrt{3}} \\le \\frac{6}{x} \\le \\sqrt{3}$. From $\\frac{6}{x} \\le \\sqrt{3}$: $x \\ge 2\\sqrt{3}$. From $\\frac{6}{x} \\ge \\frac{1}{\\sqrt{3}}$: $x \\le 6\\sqrt{3}$. So $2\\sqrt{3} \\le x \\le 6\\sqrt{3}$ (about 3.46 m to 10.39 m). (1 mark for the inequality on $\\frac{6}{x}$, 1 mark for the interval.)\nOR: $\\tan^{-1}\\frac{6}{x} = \\frac{\\pi}{4}$ gives $\\frac{6}{x} = 1$, so $x = 6$ m (1 mark). At $x = 8$, $\\tan\\theta = \\frac{6}{8} = \\frac{3}{4}$ with $\\theta$ acute, so the hypotenuse is $\\sqrt{6^{2} + 8^{2}} = 10$ and $\\cos\\theta = \\frac{8}{10} = \\frac{4}{5}$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-e02', chapter: C, topic: DR, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'While building a calculator app, a student finds that the cosine function is not one-one on $\\mathbb{R}$, so the "$\\cos^{-1}$" key must return a single agreed value. The app uses the principal branch, on which $\\cos x$ is restricted to an interval where it is one-one and takes every value in $[-1, 1]$. A classmate suggests that a different (non-principal) interval could also work, but the app keeps the principal branch, so every value the app displays is a principal value.',
    answer: '(i) Principal range $[0, \\pi]$; another such interval is $[\\pi, 2\\pi]$. (ii) $\\frac{2\\pi}{3}$. (iii) Domain $[0, 1]$, range $[0, \\pi]$. OR: $\\frac{\\pi}{4}$ and $\\frac{2\\pi}{3}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the principal value branch (range) used for $\\cos^{-1}$, and one other (non-principal) interval of length $\\pi$ on which $\\cos x$ is one-one and onto $[-1, 1]$.',
        answer: 'The principal branch is $[0, \\pi]$. Another valid interval is $[\\pi, 2\\pi]$, where $\\cos x$ increases from $-1$ to $1$ (any interval $[k\\pi, (k + 1)\\pi]$ with integer $k \\neq 0$ is acceptable).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'What value should the app display for $\\cos^{-1}\\left(-\\frac{1}{2}\\right)$?',
        answer: '$\\frac{2\\pi}{3}$, since $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ and $\\frac{2\\pi}{3} \\in [0, \\pi]$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the domain and range of $h(x) = \\cos^{-1}(2x - 1)$.\nOR\nFind the values the app displays for $\\cos^{-1}\\left(\\cos\\frac{7\\pi}{4}\\right)$ and $\\cos^{-1}\\left(\\cos\\frac{4\\pi}{3}\\right)$.',
        answer: 'Need $-1 \\le 2x - 1 \\le 1$, so $0 \\le 2x \\le 2$ and the domain is $[0, 1]$ (1 mark). As $x$ runs over $[0, 1]$, $2x - 1$ takes every value in $[-1, 1]$, so the range is $[0, \\pi]$ (1 mark).\nOR: $\\cos\\frac{7\\pi}{4} = \\cos\\left(2\\pi - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{4}$, so the display is $\\frac{\\pi}{4}$ (1 mark). $\\cos\\frac{4\\pi}{3} = \\cos\\left(2\\pi - \\frac{4\\pi}{3}\\right) = \\cos\\frac{2\\pi}{3}$, so the display is $\\frac{2\\pi}{3}$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-e03', chapter: C, topic: GR, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An automatic gate has a hinged arm. When the end of the arm is displaced $x$ metres sideways from its rest position ($-2 \\le x \\le 2$), the arm makes an angle $\\theta(x) = \\sin^{-1}\\left(\\frac{x}{2}\\right)$ radians with the vertical. Engineers plot the graph of $\\theta$ against $x$ to set the motor limits.',
    answer: '(i) Domain $[-2, 2]$, range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. (ii) $\\frac{\\pi}{6}$. (iii) $-1 \\le x \\le \\sqrt{2}$. OR: range $\\left[0, \\frac{\\pi}{3}\\right]$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Explain why $x$ must lie in $[-2, 2]$, and write the range of $\\theta$.',
        answer: '$\\sin^{-1}$ needs $-1 \\le \\frac{x}{2} \\le 1$, i.e. $-2 \\le x \\le 2$. The range is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the angle when the displacement is $1$ m.',
        answer: '$\\theta(1) = \\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The graph of $\\theta$ is increasing and passes through $\\left(-2, -\\frac{\\pi}{2}\\right)$, $(0, 0)$ and $\\left(2, \\frac{\\pi}{2}\\right)$. The motor allows $-\\frac{\\pi}{6} \\le \\theta \\le \\frac{\\pi}{4}$. Find the allowed displacements $x$.\nOR\nSketch the graph of $\\theta$ for $0 \\le x \\le \\sqrt{3}$ and state the set of angles reached.',
        answer: 'Since $\\theta$ is increasing, $-\\frac{\\pi}{6} \\le \\theta \\le \\frac{\\pi}{4}$ means $\\sin\\left(-\\frac{\\pi}{6}\\right) \\le \\frac{x}{2} \\le \\sin\\frac{\\pi}{4}$, i.e. $-\\frac{1}{2} \\le \\frac{x}{2} \\le \\frac{1}{\\sqrt{2}}$ (1 mark). So $-1 \\le x \\le \\sqrt{2}$ (1 mark).\nOR: The graph rises from $(0, 0)$ to $\\left(\\sqrt{3}, \\frac{\\pi}{3}\\right)$, since $\\sin^{-1}\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$ (1 mark for the sketch with end points). The set of angles is $\\left[0, \\frac{\\pi}{3}\\right]$ (1 mark).',
      },
    ],
  },
];
