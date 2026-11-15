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

export const CH02_ITF_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-itf-r2-a01', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value of $\\operatorname{cosec}^{-1}(-\\sqrt{2})$ is',
    options: ['$-\\frac{\\pi}{4}$', '$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{4}$', '$\\frac{\\pi}{4}$'],
    answer: 'Correct option: A) $-\\frac{\\pi}{4}$. The principal range of $\\operatorname{cosec}^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$, and $\\operatorname{cosec}\\left(-\\frac{\\pi}{4}\\right) = -\\sqrt{2}$. $\\frac{5\\pi}{4}$ also has cosecant $-\\sqrt{2}$ but lies outside the principal range, and $\\frac{3\\pi}{4}$, $\\frac{\\pi}{4}$ have cosecant $+\\sqrt{2}$.',
  },
  {
    id: 'c12-itf-r2-a02', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The domain of $f(x) = \\cos^{-1}\\left(\\frac{2 - x}{4}\\right)$ is',
    options: ['$[-2, 6]$', '$[-6, 2]$', '$[2, 6]$', '$[-1, 1]$'],
    answer: 'Correct option: A) $[-2, 6]$. We need $-1 \\le \\frac{2 - x}{4} \\le 1$, i.e. $-4 \\le 2 - x \\le 4$, so $-6 \\le -x \\le 2$ and $-2 \\le x \\le 6$. Option B comes from forgetting to reverse the inequalities when multiplying by $-1$, and option D is the domain of $\\cos^{-1}$ itself.',
  },
  {
    id: 'c12-itf-r2-a03', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The principal value of $\\tan^{-1}\\left(-\\frac{1}{\\sqrt{3}}\\right)$ is',
    options: ['$\\frac{5\\pi}{6}$', '$-\\frac{\\pi}{6}$', '$\\frac{\\pi}{6}$', '$-\\frac{\\pi}{3}$'],
    answer: 'Correct option: B) $-\\frac{\\pi}{6}$. The principal range of $\\tan^{-1}$ is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ and $\\tan\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{\\sqrt{3}}$. $\\frac{5\\pi}{6}$ has the same tangent but is outside the principal range, and $\\tan\\left(-\\frac{\\pi}{3}\\right) = -\\sqrt{3}$.',
  },
  {
    id: 'c12-itf-r2-a04', chapter: C, topic: DR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following pairs of a function and its principal value branch is stated INCORRECTLY?',
    options: [
      '$\\sin^{-1} x$ : $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
      '$\\cot^{-1} x$ : $(0, \\pi)$',
      '$\\operatorname{cosec}^{-1} x$ : $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$',
      '$\\tan^{-1} x$ : $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
    ],
    answer: 'Correct option: D) The principal branch of $\\tan^{-1} x$ is the open interval $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$: $\\tan x$ is not defined at $\\pm\\frac{\\pi}{2}$, so these end points are never values of $\\tan^{-1} x$. The other three pairs are correct.',
  },
  {
    id: 'c12-itf-r2-a05', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $\\cot^{-1} x = 2y$ for some real number $x$, then $y$ always lies in',
    options: ['$\\left(0, \\frac{\\pi}{2}\\right)$', '$\\left[0, \\frac{\\pi}{2}\\right]$', '$\\left(-\\frac{\\pi}{4}, \\frac{\\pi}{4}\\right)$', '$(0, \\pi)$'],
    answer: 'Correct option: A) $\\left(0, \\frac{\\pi}{2}\\right)$. The principal range of $\\cot^{-1}$ is the open interval $(0, \\pi)$, so $0 < 2y < \\pi$, giving $0 < y < \\frac{\\pi}{2}$. The end points are excluded because $\\cot^{-1} x$ never equals $0$ or $\\pi$. Option C would come from using the range of $\\tan^{-1}$, and option D forgets to divide by 2.',
  },
  {
    id: 'c12-itf-r2-a06', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The domain of $f(x) = \\cos^{-1}(|x| - 2)$ is',
    options: ['$[1, 3]$', '$[-3, -1] \\cup [1, 3]$', '$[-3, 3]$', '$[-1, 1]$'],
    answer: 'Correct option: B) $[-3, -1] \\cup [1, 3]$. We need $-1 \\le |x| - 2 \\le 1$, so $1 \\le |x| \\le 3$, which holds for $1 \\le x \\le 3$ and for $-3 \\le x \\le -1$. Option A misses the negative values, and option C wrongly includes $|x| < 1$, where $|x| - 2 < -1$.',
  },
  {
    id: 'c12-itf-r2-a07', chapter: C, topic: DR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The range of the function $f(x) = 2\\tan^{-1} x + \\pi$, $x \\in \\mathbb{R}$, is',
    options: ['$(0, 2\\pi)$', '$[0, 2\\pi]$', '$(-\\pi, \\pi)$', '$\\left(\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right)$'],
    answer: 'Correct option: A) $(0, 2\\pi)$. Since $-\\frac{\\pi}{2} < \\tan^{-1} x < \\frac{\\pi}{2}$ (open interval), $-\\pi < 2\\tan^{-1} x < \\pi$ and adding $\\pi$ gives $0 < f(x) < 2\\pi$, with every value in between taken. Option B wrongly includes the end points, option C forgets to add $\\pi$, and option D forgets to double.',
  },
  {
    id: 'c12-itf-r2-a08', chapter: C, topic: DR, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The principal value of $\\operatorname{cosec}^{-1}(2)$ is $\\frac{\\pi}{6}$.\nReason (R): The principal value branch of $\\operatorname{cosec}^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and R explains A. Both $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ have cosecant $2$, but only $\\frac{\\pi}{6}$ lies in the principal branch given in R, so R is exactly why the principal value is $\\frac{\\pi}{6}$.',
  },
  {
    id: 'c12-itf-r2-a09', chapter: C, topic: EV, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $\\cos^{-1}\\left(\\cos\\left(-\\frac{\\pi}{3}\\right)\\right) = -\\frac{\\pi}{3}$.\nReason (R): The principal value branch of $\\cos^{-1}$ is $[0, \\pi]$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false, but R is true. $\\cos\\left(-\\frac{\\pi}{3}\\right) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$, and $\\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}$. The value $-\\frac{\\pi}{3}$ cannot be correct because it is outside the principal range $[0, \\pi]$ stated (correctly) in R.',
  },
  {
    id: 'c12-itf-r2-a10', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\cos\\left(\\sec^{-1} 2 + \\operatorname{cosec}^{-1} 2\\right)$ is',
    options: ['$0$', '$1$', '$\\frac{1}{2}$', '$-1$'],
    answer: 'Correct option: A) $0$. $\\sec^{-1} 2 = \\frac{\\pi}{3}$ (since $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$) and $\\operatorname{cosec}^{-1} 2 = \\frac{\\pi}{6}$ (since $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$). Their sum is $\\frac{\\pi}{2}$, and $\\cos\\frac{\\pi}{2} = 0$.',
  },
  {
    id: 'c12-itf-r2-a11', chapter: C, topic: EV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\sin\\left(\\cos^{-1}\\frac{3}{5}\\right)$ is',
    options: ['$\\frac{4}{5}$', '$\\frac{3}{4}$', '$-\\frac{4}{5}$', '$\\frac{3}{5}$'],
    answer: 'Correct option: A) $\\frac{4}{5}$. Let $\\theta = \\cos^{-1}\\frac{3}{5}$, so $\\cos\\theta = \\frac{3}{5}$ and $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$. Then $\\sin\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$, positive because $\\theta$ is in the first quadrant. $\\frac{3}{4}$ is $\\tan\\theta$ inverted wrongly, and $-\\frac{4}{5}$ has the wrong sign.',
  },
  {
    id: 'c12-itf-r2-a12', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\cos\\left(\\tan^{-1}\\left(-\\frac{3}{4}\\right)\\right)$ is',
    options: ['$\\frac{4}{5}$', '$-\\frac{4}{5}$', '$\\frac{3}{5}$', '$-\\frac{3}{5}$'],
    answer: 'Correct option: A) $\\frac{4}{5}$. Let $\\theta = \\tan^{-1}\\left(-\\frac{3}{4}\\right)$; then $\\theta \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, where cosine is positive. From $\\tan\\theta = -\\frac{3}{4}$, $\\sec^{2}\\theta = 1 + \\frac{9}{16} = \\frac{25}{16}$, so $\\cos\\theta = \\frac{4}{5}$. Option B wrongly takes the angle in the second quadrant; C and D give the sine size instead of the cosine.',
  },
  {
    id: 'c12-itf-r2-a13', chapter: C, topic: EV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\cos^{-1}\\left(\\sin\\left(-\\frac{\\pi}{7}\\right)\\right)$ is',
    options: ['$\\frac{9\\pi}{14}$', '$-\\frac{\\pi}{7}$', '$\\frac{5\\pi}{14}$', '$\\frac{4\\pi}{7}$'],
    answer: 'Correct option: A) $\\frac{9\\pi}{14}$. $\\sin\\left(-\\frac{\\pi}{7}\\right) = \\cos\\left(\\frac{\\pi}{2} + \\frac{\\pi}{7}\\right) = \\cos\\frac{9\\pi}{14}$, and $\\frac{9\\pi}{14} \\in [0, \\pi]$, so it is the principal value. $-\\frac{\\pi}{7}$ is outside $[0, \\pi]$, and $\\cos\\frac{5\\pi}{14} = \\sin\\frac{\\pi}{7}$ is positive, so $\\frac{5\\pi}{14}$ has the wrong sign.',
  },
  {
    id: 'c12-itf-r2-a14', chapter: C, topic: GR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The graph of $y = \\tan^{-1} x$ (principal branch) has which horizontal asymptotes?',
    options: ['$y = -\\frac{\\pi}{2}$ and $y = \\frac{\\pi}{2}$', '$y = 0$ and $y = \\pi$', '$x = -1$ and $x = 1$', '$y = -\\pi$ and $y = \\pi$'],
    answer: 'Correct option: A) As $x \\to \\infty$, $\\tan^{-1} x \\to \\frac{\\pi}{2}$, and as $x \\to -\\infty$, $\\tan^{-1} x \\to -\\frac{\\pi}{2}$, without ever reaching these values. Option B gives the asymptotes of $y = \\cot^{-1} x$.',
  },
  {
    id: 'c12-itf-r2-a15', chapter: C, topic: GR, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Which of the following points lies on the graph of $y = \\cot^{-1} x$ (principal branch)?',
    options: ['$\\left(1, \\frac{\\pi}{4}\\right)$', '$\\left(-1, -\\frac{\\pi}{4}\\right)$', '$(0, 0)$', '$\\left(\\sqrt{3}, \\frac{\\pi}{3}\\right)$'],
    answer: 'Correct option: A) $\\cot^{-1} 1 = \\frac{\\pi}{4}$. The graph has $y$-values in $(0, \\pi)$, so $-\\frac{\\pi}{4}$ and $0$ are impossible ($\\cot^{-1}(-1) = \\frac{3\\pi}{4}$ and $\\cot^{-1} 0 = \\frac{\\pi}{2}$), and $\\cot^{-1}\\sqrt{3} = \\frac{\\pi}{6}$, not $\\frac{\\pi}{3}$.',
  },
  {
    id: 'c12-itf-r2-a16', chapter: C, topic: GR, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The graph of $y = \\sin^{-1} x$ can be obtained from the graph of $y = \\sin x$, $-\\frac{\\pi}{2} \\le x \\le \\frac{\\pi}{2}$, by reflecting it in',
    options: ['the $x$-axis', 'the $y$-axis', 'the line $y = x$', 'the origin'],
    answer: 'Correct option: C) The graph of an inverse function is the mirror image of the graph of the original (one-one) function in the line $y = x$, because the point $(a, b)$ on one graph corresponds to $(b, a)$ on the other.',
  },
  {
    id: 'c12-itf-r2-a17', chapter: C, topic: GR, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The graphs of $y = \\tan^{-1} x$ and $y = \\cot^{-1} x$ (principal branches) are drawn on the same axes. They',
    options: [
      'meet only at $\\left(1, \\frac{\\pi}{4}\\right)$',
      'meet at $\\left(1, \\frac{\\pi}{4}\\right)$ and at $\\left(-1, -\\frac{\\pi}{4}\\right)$',
      'meet only at $\\left(-1, \\frac{3\\pi}{4}\\right)$',
      'never meet',
    ],
    answer: 'Correct option: A) For $x < 0$, $\\tan^{-1} x < 0$ while $\\cot^{-1} x \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, so the graphs cannot meet there. For $x \\ge 0$, $\\tan^{-1} x$ is increasing and $\\cot^{-1} x$ is decreasing, so they meet at most once, and at $x = 1$ both equal $\\frac{\\pi}{4}$. At $x = -1$ the values are $-\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$, which differ.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-itf-r2-b01', chapter: C, topic: DR, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the domain of $f(x) = \\cos^{-1}\\left(\\frac{x}{2} - 1\\right)$ and find $f(2)$.',
    answer: '$\\cos^{-1}$ needs $-1 \\le \\frac{x}{2} - 1 \\le 1$. Adding 1: $0 \\le \\frac{x}{2} \\le 2$, so $0 \\le x \\le 4$. The domain is $[0, 4]$. $f(2) = \\cos^{-1}(1 - 1) = \\cos^{-1} 0 = \\frac{\\pi}{2}$.',
    steps: [
      { step: 'Solves $-1 \\le \\frac{x}{2} - 1 \\le 1$ to get the domain $[0, 4]$', marks: 1 },
      { step: 'Gets $f(2) = \\cos^{-1} 0 = \\frac{\\pi}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b02', chapter: C, topic: EV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the value of $\\operatorname{cosec}^{-1}(-2) + \\cot^{-1}(-\\sqrt{3})$.',
    answer: '$\\operatorname{cosec}^{-1}(-2) = -\\frac{\\pi}{6}$, since $\\operatorname{cosec}\\left(-\\frac{\\pi}{6}\\right) = -2$ and $-\\frac{\\pi}{6} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$. $\\cot^{-1}(-\\sqrt{3}) = \\frac{5\\pi}{6}$, since $\\cot\\frac{5\\pi}{6} = -\\sqrt{3}$ and $\\frac{5\\pi}{6} \\in (0, \\pi)$. The sum is $-\\frac{\\pi}{6} + \\frac{5\\pi}{6} = \\frac{2\\pi}{3}$.',
    steps: [
      { step: 'Finds $\\operatorname{cosec}^{-1}(-2) = -\\frac{\\pi}{6}$ and $\\cot^{-1}(-\\sqrt{3}) = \\frac{5\\pi}{6}$ using the principal ranges (both needed for this mark)', marks: 1 },
      { step: 'Adds to get $\\frac{2\\pi}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b03', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $\\tan\\left(\\cos^{-1}\\left(-\\frac{4}{5}\\right)\\right)$.',
    answer: 'Let $\\theta = \\cos^{-1}\\left(-\\frac{4}{5}\\right)$. Then $\\cos\\theta = -\\frac{4}{5}$ and, since the argument is negative, $\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, where $\\sin\\theta > 0$. So $\\sin\\theta = \\sqrt{1 - \\frac{16}{25}} = \\frac{3}{5}$ and $\\tan\\theta = \\frac{3/5}{-4/5} = -\\frac{3}{4}$.',
    steps: [
      { step: 'Places $\\theta$ in $\\left(\\frac{\\pi}{2}, \\pi\\right)$ and finds $\\sin\\theta = \\frac{3}{5}$', marks: 1 },
      { step: 'Gets $\\tan\\theta = -\\frac{3}{4}$ (with the negative sign)', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b04', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the domain of $f(x) = \\sqrt{\\sin^{-1} x}$.',
    answer: 'First, $\\sin^{-1} x$ is defined only for $-1 \\le x \\le 1$. Second, the square root needs $\\sin^{-1} x \\ge 0$. Since $\\sin^{-1}$ is increasing with $\\sin^{-1} 0 = 0$, $\\sin^{-1} x \\ge 0$ exactly when $x \\ge 0$. Together: $0 \\le x \\le 1$. The domain is $[0, 1]$.',
    steps: [
      { step: 'Writes both conditions: $-1 \\le x \\le 1$ and $\\sin^{-1} x \\ge 0$', marks: 1 },
      { step: 'Uses $\\sin^{-1} x \\ge 0 \\iff x \\ge 0$ to get the domain $[0, 1]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b05', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the domain of $f(x) = \\cos^{-1}\\left(\\frac{2}{x}\\right)$.',
    answer: 'We need $x \\neq 0$ and $-1 \\le \\frac{2}{x} \\le 1$, i.e. $\\left|\\frac{2}{x}\\right| \\le 1$, which means $|x| \\ge 2$. So $x \\le -2$ or $x \\ge 2$. The domain is $(-\\infty, -2] \\cup [2, \\infty)$.',
    steps: [
      { step: 'Writes $\\left|\\frac{2}{x}\\right| \\le 1$ (with $x \\neq 0$) and reduces to $|x| \\ge 2$', marks: 1 },
      { step: 'States the domain $(-\\infty, -2] \\cup [2, \\infty)$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b06', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\cos^{-1}\\left(\\cos\\left(-\\frac{17\\pi}{5}\\right)\\right) + \\tan^{-1}\\left(\\tan\\left(-\\frac{17\\pi}{5}\\right)\\right)$.',
    answer: 'Cosine is even and has period $2\\pi$: $\\cos\\left(-\\frac{17\\pi}{5}\\right) = \\cos\\frac{17\\pi}{5} = \\cos\\left(\\frac{17\\pi}{5} - 4\\pi\\right) = \\cos\\left(-\\frac{3\\pi}{5}\\right) = \\cos\\frac{3\\pi}{5}$. Since $\\frac{3\\pi}{5} \\in [0, \\pi]$, the first term is $\\frac{3\\pi}{5}$. Tangent has period $\\pi$: $\\tan\\left(-\\frac{17\\pi}{5}\\right) = \\tan\\left(-\\frac{17\\pi}{5} + 3\\pi\\right) = \\tan\\left(-\\frac{2\\pi}{5}\\right)$. Since $-\\frac{2\\pi}{5} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, the second term is $-\\frac{2\\pi}{5}$. The sum is $\\frac{3\\pi}{5} - \\frac{2\\pi}{5} = \\frac{\\pi}{5}$.',
    steps: [
      { step: 'Gets $\\cos^{-1}\\left(\\cos\\left(-\\frac{17\\pi}{5}\\right)\\right) = \\frac{3\\pi}{5}$', marks: 1 },
      { step: 'Gets $\\tan^{-1}\\left(\\tan\\left(-\\frac{17\\pi}{5}\\right)\\right) = -\\frac{2\\pi}{5}$ and the sum $\\frac{\\pi}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b07', chapter: C, topic: EV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the value of $\\cos\\left(2\\sin^{-1}\\frac{1}{3}\\right)$.',
    answer: 'Let $\\theta = \\sin^{-1}\\frac{1}{3}$, so $\\sin\\theta = \\frac{1}{3}$. Then $\\cos 2\\theta = 1 - 2\\sin^{2}\\theta = 1 - 2 \\cdot \\frac{1}{9} = \\frac{7}{9}$.',
    steps: [
      { step: 'Puts $\\theta = \\sin^{-1}\\frac{1}{3}$ and uses $\\cos 2\\theta = 1 - 2\\sin^{2}\\theta$', marks: 1 },
      { step: 'Gets $\\frac{7}{9}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b08', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $x$ if $\\cos^{-1}\\left(\\frac{x}{3}\\right) - \\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2}$.',
    answer: '$\\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$, so $\\cos^{-1}\\frac{x}{3} = \\frac{\\pi}{2} + \\frac{\\pi}{6} = \\frac{2\\pi}{3}$. This is in $[0, \\pi]$, so $\\frac{x}{3} = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, giving $x = -\\frac{3}{2}$.',
    steps: [
      { step: 'Uses $\\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$ to get $\\cos^{-1}\\frac{x}{3} = \\frac{2\\pi}{3}$', marks: 1 },
      { step: 'Gets $x = -\\frac{3}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b09', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 2,
    text: 'Sketch the graph of $y = \\tan^{-1} x$ (principal branch) for $-1 \\le x \\le \\sqrt{3}$, marking the end points, and state its range on this interval.',
    answer: 'The graph is the increasing curve of $y = \\tan^{-1} x$ through the origin. At $x = -1$, $y = -\\frac{\\pi}{4}$; at $x = 0$, $y = 0$; at $x = \\sqrt{3}$, $y = \\frac{\\pi}{3}$. So the curve starts at $\\left(-1, -\\frac{\\pi}{4}\\right)$, passes through $(0, 0)$ and rises to $\\left(\\sqrt{3}, \\frac{\\pi}{3}\\right)$, flattening as $x$ grows (it stays below the asymptote $y = \\frac{\\pi}{2}$). Since the function is increasing, the range on this interval is $\\left[-\\frac{\\pi}{4}, \\frac{\\pi}{3}\\right]$.',
    steps: [
      { step: 'Draws an increasing curve from $\\left(-1, -\\frac{\\pi}{4}\\right)$ through $(0, 0)$ to $\\left(\\sqrt{3}, \\frac{\\pi}{3}\\right)$', marks: 1 },
      { step: 'States the range $\\left[-\\frac{\\pi}{4}, \\frac{\\pi}{3}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b10', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Write $\\cot^{-1}\\left(\\frac{1}{\\sqrt{x^{2} - 1}}\\right)$, where $x > 1$, in its simplest form.',
    answer: 'Put $x = \\sec\\theta$ with $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$ (possible since $x > 1$), so $\\theta = \\sec^{-1} x$. Then $\\sqrt{x^{2} - 1} = \\sqrt{\\sec^{2}\\theta - 1} = \\tan\\theta$ (positive in the first quadrant), and $\\frac{1}{\\tan\\theta} = \\cot\\theta$. Since $\\theta \\in (0, \\pi)$, the principal range of $\\cot^{-1}$, $\\cot^{-1}(\\cot\\theta) = \\theta$. The expression equals $\\sec^{-1} x$ (equivalently $\\tan^{-1}\\sqrt{x^{2} - 1}$).',
    steps: [
      { step: 'Substitutes $x = \\sec\\theta$, $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$, and reduces the argument to $\\cot\\theta$', marks: 1 },
      { step: 'Uses the principal range to conclude the expression is $\\sec^{-1} x$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-b11', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 2,
    text: 'Find the value of $\\tan\\left(\\frac{1}{2}\\sin^{-1}\\frac{24}{25}\\right)$.',
    answer: 'Let $\\theta = \\sin^{-1}\\frac{24}{25}$, so $\\sin\\theta = \\frac{24}{25}$ and $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$. Then $\\cos\\theta = \\sqrt{1 - \\frac{576}{625}} = \\frac{7}{25}$ (positive). Using $\\tan\\frac{\\theta}{2} = \\frac{\\sin\\theta}{1 + \\cos\\theta} = \\frac{24/25}{32/25} = \\frac{3}{4}$. (This is positive, as it should be, since $\\frac{\\theta}{2} \\in \\left(0, \\frac{\\pi}{4}\\right)$.)',
    steps: [
      { step: 'Finds $\\cos\\theta = \\frac{7}{25}$ with the first-quadrant sign', marks: 1 },
      { step: 'Uses a half-angle formula to get $\\tan\\frac{\\theta}{2} = \\frac{3}{4}$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-itf-r2-c01', chapter: C, topic: EV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\sin^{-1}\\left(\\sin\\frac{17\\pi}{8}\\right) - \\cot^{-1}\\left(\\cot\\left(-\\frac{\\pi}{8}\\right)\\right) + \\cos^{-1}\\left(\\sin\\frac{5\\pi}{8}\\right)$.',
    answer: '$\\sin\\frac{17\\pi}{8} = \\sin\\left(2\\pi + \\frac{\\pi}{8}\\right) = \\sin\\frac{\\pi}{8}$, and $\\frac{\\pi}{8} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so the first term is $\\frac{\\pi}{8}$. $\\cot\\left(-\\frac{\\pi}{8}\\right) = \\cot\\left(\\pi - \\frac{\\pi}{8}\\right) = \\cot\\frac{7\\pi}{8}$ (cot has period $\\pi$), and $\\frac{7\\pi}{8} \\in (0, \\pi)$, so the second term is $\\frac{7\\pi}{8}$. $\\sin\\frac{5\\pi}{8} = \\cos\\left(\\frac{\\pi}{2} - \\frac{5\\pi}{8}\\right) = \\cos\\left(-\\frac{\\pi}{8}\\right) = \\cos\\frac{\\pi}{8}$, and $\\frac{\\pi}{8} \\in [0, \\pi]$, so the third term is $\\frac{\\pi}{8}$. The value is $\\frac{\\pi}{8} - \\frac{7\\pi}{8} + \\frac{\\pi}{8} = -\\frac{5\\pi}{8}$.',
    steps: [
      { step: 'Gets $\\sin^{-1}\\left(\\sin\\frac{17\\pi}{8}\\right) = \\frac{\\pi}{8}$ and $\\cos^{-1}\\left(\\sin\\frac{5\\pi}{8}\\right) = \\frac{\\pi}{8}$', marks: 1 },
      { step: 'Gets $\\cot^{-1}\\left(\\cot\\left(-\\frac{\\pi}{8}\\right)\\right) = \\frac{7\\pi}{8}$ (not $-\\frac{\\pi}{8}$), using the range $(0, \\pi)$', marks: 1 },
      { step: 'Combines to get $-\\frac{5\\pi}{8}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-c02', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the domain of $f(x) = \\sin^{-1}\\left(\\frac{x - 1}{2}\\right) + \\cos^{-1}(x^{2} - 3)$, and find $f(2)$.',
    answer: 'First term: $-1 \\le \\frac{x - 1}{2} \\le 1$ gives $-1 \\le x \\le 3$. Second term: $-1 \\le x^{2} - 3 \\le 1$ gives $2 \\le x^{2} \\le 4$, i.e. $x \\in [-2, -\\sqrt{2}] \\cup [\\sqrt{2}, 2]$. Both must hold. $[-1, 3]$ contains no point of $[-2, -\\sqrt{2}]$ (since $-\\sqrt{2} < -1$), and it contains all of $[\\sqrt{2}, 2]$. So the domain is $[\\sqrt{2}, 2]$. $f(2) = \\sin^{-1}\\frac{1}{2} + \\cos^{-1} 1 = \\frac{\\pi}{6} + 0 = \\frac{\\pi}{6}$.',
    steps: [
      { step: 'Gets $[-1, 3]$ from the first term and $[-2, -\\sqrt{2}] \\cup [\\sqrt{2}, 2]$ from the second term', marks: 1 },
      { step: 'Intersects correctly to get the domain $[\\sqrt{2}, 2]$', marks: 1 },
      { step: 'Gets $f(2) = \\frac{\\pi}{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-c03', chapter: C, topic: GR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Sketch the principal branch of $y = \\cot^{-1} x$, showing its asymptotes and the point where it meets the $y$-axis. State whether it is increasing or decreasing, and use it to find the set of values of $y$ when $-\\sqrt{3} \\le x \\le 1$.',
    answer: 'The graph is defined for all real $x$, with values in $(0, \\pi)$. It meets the $y$-axis at $\\left(0, \\frac{\\pi}{2}\\right)$, approaches the asymptote $y = \\pi$ as $x \\to -\\infty$ and the asymptote $y = 0$ as $x \\to \\infty$. It is strictly decreasing. So on $[-\\sqrt{3}, 1]$ the largest value is at the left end, $\\cot^{-1}(-\\sqrt{3}) = \\frac{5\\pi}{6}$, and the smallest at the right end, $\\cot^{-1} 1 = \\frac{\\pi}{4}$. The values of $y$ form $\\left[\\frac{\\pi}{4}, \\frac{5\\pi}{6}\\right]$.',
    steps: [
      { step: 'Sketches a decreasing curve through $\\left(0, \\frac{\\pi}{2}\\right)$ with asymptotes $y = 0$ and $y = \\pi$', marks: 1 },
      { step: 'Finds the end values $\\cot^{-1}(-\\sqrt{3}) = \\frac{5\\pi}{6}$ and $\\cot^{-1} 1 = \\frac{\\pi}{4}$', marks: 1 },
      { step: 'Uses that the function is decreasing to give $\\left[\\frac{\\pi}{4}, \\frac{5\\pi}{6}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-c04', chapter: C, topic: EV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Write $\\cot^{-1}\\left(\\frac{\\sqrt{1 + x^{2}} + 1}{x}\\right)$, where $x > 0$, in its simplest form, and hence find its value at $x = \\sqrt{3}$.',
    answer: 'Put $x = \\tan\\theta$ with $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$, so $\\theta = \\tan^{-1} x$. Then $\\sqrt{1 + x^{2}} = \\sec\\theta$ (positive), and the argument is $\\frac{\\sec\\theta + 1}{\\tan\\theta} = \\frac{1 + \\cos\\theta}{\\sin\\theta} = \\frac{2\\cos^{2}\\frac{\\theta}{2}}{2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}} = \\cot\\frac{\\theta}{2}$. Since $\\frac{\\theta}{2} \\in \\left(0, \\frac{\\pi}{4}\\right) \\subset (0, \\pi)$, the principal range of $\\cot^{-1}$, the expression equals $\\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1} x$. At $x = \\sqrt{3}$: $\\frac{1}{2} \\cdot \\frac{\\pi}{3} = \\frac{\\pi}{6}$ (check: the argument is $\\frac{2 + 1}{\\sqrt{3}} = \\sqrt{3}$ and $\\cot^{-1}\\sqrt{3} = \\frac{\\pi}{6}$).',
    steps: [
      { step: 'Substitutes $x = \\tan\\theta$ and simplifies the argument to $\\frac{1 + \\cos\\theta}{\\sin\\theta}$', marks: 1 },
      { step: 'Reduces it to $\\cot\\frac{\\theta}{2}$ and checks $\\frac{\\theta}{2} \\in (0, \\pi)$ to get $\\frac{1}{2}\\tan^{-1} x$', marks: 1 },
      { step: 'Gets the value $\\frac{\\pi}{6}$ at $x = \\sqrt{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-c05', chapter: C, topic: DR, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the domain and the range of $f(x) = \\cos^{-1}\\left(\\frac{1}{1 + x^{2}}\\right)$.',
    answer: 'For every real $x$, $1 + x^{2} \\ge 1$, so $0 < \\frac{1}{1 + x^{2}} \\le 1$, which is inside $[-1, 1]$. Hence the domain is $\\mathbb{R}$. As $x$ runs over $\\mathbb{R}$, $t = \\frac{1}{1 + x^{2}}$ takes every value in $(0, 1]$ (the value $1$ at $x = 0$, and values close to $0$ for large $|x|$, but never $0$). $\\cos^{-1}$ is decreasing, with $\\cos^{-1} 1 = 0$ and $\\cos^{-1} t \\to \\frac{\\pi}{2}$ as $t \\to 0^{+}$. So the range is $\\left[0, \\frac{\\pi}{2}\\right)$.',
    steps: [
      { step: 'Shows $0 < \\frac{1}{1 + x^{2}} \\le 1$ for all $x$, so the domain is $\\mathbb{R}$', marks: 1 },
      { step: 'States that the argument takes every value in $(0, 1]$', marks: 1 },
      { step: 'Uses that $\\cos^{-1}$ is decreasing to get the range $\\left[0, \\frac{\\pi}{2}\\right)$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-itf-r2-d01', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = \\cos^{-1}\\left(\\frac{x^{2} - 1}{x^{2} + 1}\\right)$.\n(i) Show that $f$ is defined for every real $x$.\n(ii) Find the range of $f$.\n(iii) Solve $f(x) = \\frac{2\\pi}{3}$.\n(iv) Is $f$ one-one on $\\mathbb{R}$? Give a reason.',
    answer: '(i) Let $t = \\frac{x^{2} - 1}{x^{2} + 1}$. Since $x^{2} - 1 < x^{2} + 1$, $t < 1$. Also $t + 1 = \\frac{2x^{2}}{x^{2} + 1} \\ge 0$, so $t \\ge -1$. Thus $-1 \\le t < 1$ for every real $x$, and $\\cos^{-1} t$ is always defined. Domain: $\\mathbb{R}$.\n(ii) Write $t = 1 - \\frac{2}{x^{2} + 1}$. At $x = 0$, $t = -1$; as $x^{2}$ grows, $t$ increases towards $1$ without reaching it. So $t$ takes every value in $[-1, 1)$. As $\\cos^{-1}$ is decreasing with $\\cos^{-1}(-1) = \\pi$ and $\\cos^{-1} t \\to 0$ as $t \\to 1$, the range of $f$ is $(0, \\pi]$.\n(iii) $f(x) = \\frac{2\\pi}{3}$ means $\\frac{x^{2} - 1}{x^{2} + 1} = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$. Then $2x^{2} - 2 = -x^{2} - 1$, so $3x^{2} = 1$ and $x = \\pm\\frac{1}{\\sqrt{3}}$.\n(iv) No. $f$ depends only on $x^{2}$, so $f(-x) = f(x)$; for example $f\\left(\\frac{1}{\\sqrt{3}}\\right) = f\\left(-\\frac{1}{\\sqrt{3}}\\right) = \\frac{2\\pi}{3}$ with $\\frac{1}{\\sqrt{3}} \\neq -\\frac{1}{\\sqrt{3}}$.',
    steps: [
      { step: '(i) Shows $-1 \\le \\frac{x^{2} - 1}{x^{2} + 1} < 1$ for all real $x$', marks: 1 },
      { step: '(ii) Shows the argument takes every value in $[-1, 1)$', marks: 1 },
      { step: '(ii) Gets the range $(0, \\pi]$, with $0$ excluded', marks: 1 },
      { step: '(iii) Gets $x = \\pm\\frac{1}{\\sqrt{3}}$', marks: 1 },
      { step: '(iv) Says not one-one, with two different $x$ giving the same value', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d02', chapter: C, topic: EV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Using principal values, find\n(i) $\\sin\\left(\\cos^{-1}\\left(-\\frac{5}{13}\\right)\\right)$\n(ii) $\\tan\\left(\\sec^{-1}(-3)\\right)$\n(iii) $\\cos\\left(2\\tan^{-1}\\left(-\\frac{1}{3}\\right)\\right)$\n(iv) $\\operatorname{cosec}\\left(\\cot^{-1}\\left(-\\frac{3}{4}\\right)\\right)$\n(v) $\\sin\\left(\\sin^{-1}\\frac{3}{5} + \\cos^{-1}\\left(-\\frac{4}{5}\\right)\\right)$',
    answer: '(i) Let $\\alpha = \\cos^{-1}\\left(-\\frac{5}{13}\\right) \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$. Sine is positive there, so $\\sin\\alpha = \\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$.\n(ii) Let $\\beta = \\sec^{-1}(-3)$, so $\\cos\\beta = -\\frac{1}{3}$ and $\\beta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$. Then $\\sin\\beta = \\sqrt{1 - \\frac{1}{9}} = \\frac{2\\sqrt{2}}{3}$ and $\\tan\\beta = \\frac{2\\sqrt{2}/3}{-1/3} = -2\\sqrt{2}$.\n(iii) Let $\\gamma = \\tan^{-1}\\left(-\\frac{1}{3}\\right)$. Then $\\cos 2\\gamma = \\frac{1 - \\tan^{2}\\gamma}{1 + \\tan^{2}\\gamma} = \\frac{1 - \\frac{1}{9}}{1 + \\frac{1}{9}} = \\frac{8}{10} = \\frac{4}{5}$.\n(iv) Let $\\delta = \\cot^{-1}\\left(-\\frac{3}{4}\\right) \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$. $\\operatorname{cosec}^{2}\\delta = 1 + \\cot^{2}\\delta = 1 + \\frac{9}{16} = \\frac{25}{16}$, and $\\operatorname{cosec}\\delta > 0$ in the second quadrant, so $\\operatorname{cosec}\\delta = \\frac{5}{4}$.\n(v) Let $p = \\sin^{-1}\\frac{3}{5} \\in \\left(0, \\frac{\\pi}{2}\\right)$: $\\sin p = \\frac{3}{5}$, $\\cos p = \\frac{4}{5}$. Let $q = \\cos^{-1}\\left(-\\frac{4}{5}\\right) \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$: $\\cos q = -\\frac{4}{5}$, $\\sin q = \\frac{3}{5}$. Then $\\sin(p + q) = \\sin p\\cos q + \\cos p\\sin q = \\frac{3}{5}\\left(-\\frac{4}{5}\\right) + \\frac{4}{5} \\cdot \\frac{3}{5} = 0$. (In fact $p + q = \\pi$.)',
    steps: [
      { step: '(i) Gets $\\frac{12}{13}$ with the correct sign', marks: 1 },
      { step: '(ii) Gets $-2\\sqrt{2}$', marks: 1 },
      { step: '(iii) Gets $\\frac{4}{5}$', marks: 1 },
      { step: '(iv) Gets $\\frac{5}{4}$ (positive, angle in the second quadrant)', marks: 1 },
      { step: '(v) Finds the sines and cosines of both angles and gets $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d03', chapter: C, topic: DR, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = \\sec^{-1}\\left(\\frac{x + 1}{x - 1}\\right)$.\n(i) Find the domain of $f$.\n(ii) Find $f(3)$ and $f\\left(\\frac{1}{3}\\right)$.\n(iii) Solve $f(x) = \\frac{3\\pi}{4}$.\n(iv) Find the range of $f$, and explain why $f(x)$ can never equal $\\frac{\\pi}{2}$.',
    answer: '(i) We need $x \\neq 1$ and $\\left|\\frac{x + 1}{x - 1}\\right| \\ge 1$, i.e. $|x + 1| \\ge |x - 1|$. Squaring (both sides are non-negative): $x^{2} + 2x + 1 \\ge x^{2} - 2x + 1$, so $4x \\ge 0$ and $x \\ge 0$. Domain: $[0, 1) \\cup (1, \\infty)$.\n(ii) $f(3) = \\sec^{-1} 2 = \\frac{\\pi}{3}$. $f\\left(\\frac{1}{3}\\right) = \\sec^{-1}\\left(\\frac{4/3}{-2/3}\\right) = \\sec^{-1}(-2) = \\frac{2\\pi}{3}$.\n(iii) $\\frac{x + 1}{x - 1} = \\sec\\frac{3\\pi}{4} = -\\sqrt{2}$. So $x + 1 = -\\sqrt{2}x + \\sqrt{2}$, $x(1 + \\sqrt{2}) = \\sqrt{2} - 1$ and $x = \\frac{\\sqrt{2} - 1}{\\sqrt{2} + 1} = (\\sqrt{2} - 1)^{2} = 3 - 2\\sqrt{2}$, which lies in $[0, 1)$, so it is in the domain.\n(iv) Let $t = \\frac{x + 1}{x - 1} = 1 + \\frac{2}{x - 1}$. For $0 \\le x < 1$, $t$ runs over $(-\\infty, -1]$ ($t = -1$ at $x = 0$); for $x > 1$, $t$ runs over $(1, \\infty)$. $\\sec^{-1}$ maps $(-\\infty, -1]$ onto $\\left(\\frac{\\pi}{2}, \\pi\\right]$ and $(1, \\infty)$ onto $\\left(0, \\frac{\\pi}{2}\\right)$. So the range is $\\left(0, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{\\pi}{2}, \\pi\\right]$. $f(x) = \\frac{\\pi}{2}$ would need $\\sec\\frac{\\pi}{2}$, which is not defined; $\\frac{\\pi}{2}$ is excluded from the principal range of $\\sec^{-1}$.',
    steps: [
      { step: '(i) Writes $|x + 1| \\ge |x - 1|$ with $x \\neq 1$ and reduces it to $x \\ge 0$', marks: 1 },
      { step: '(i) and (ii) States the domain $[0, 1) \\cup (1, \\infty)$ and gets $f(3) = \\frac{\\pi}{3}$, $f\\left(\\frac{1}{3}\\right) = \\frac{2\\pi}{3}$', marks: 1 },
      { step: '(iii) Gets $x = 3 - 2\\sqrt{2}$ and checks it is in the domain', marks: 1 },
      { step: '(iv) Finds the set of values of the argument: $(-\\infty, -1] \\cup (1, \\infty)$', marks: 1 },
      { step: '(iv) Gets the range $\\left(0, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{\\pi}{2}, \\pi\\right]$ with the reason $\\frac{\\pi}{2}$ is never taken', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d04', chapter: C, topic: GR, type: 'long', complexity: 'medium', marks: 5,
    text: 'Consider $y = \\operatorname{cosec}^{-1} x$ (principal branch).\n(i) Write its domain and range.\n(ii) Describe its graph: the points where $x = \\pm 1$, its behaviour as $x \\to \\pm\\infty$, and whether it is increasing or decreasing on each part of the domain.\n(iii) Find the set of values of $y$ when $x \\ge 2$.\n(iv) Find the set of values of $y$ when $-2 \\le x \\le -1$.\n(v) Solve $\\operatorname{cosec}^{-1} x = -\\frac{\\pi}{4}$.',
    answer: '(i) Domain $(-\\infty, -1] \\cup [1, \\infty)$; range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$.\n(ii) The graph has two separate pieces. The right piece starts at $\\left(1, \\frac{\\pi}{2}\\right)$ and falls towards $y = 0$ as $x \\to \\infty$. The left piece ends at $\\left(-1, -\\frac{\\pi}{2}\\right)$ and approaches $y = 0$ from below as $x \\to -\\infty$. The line $y = 0$ is an asymptote, never reached. On each piece the function is decreasing.\n(iii) On $[2, \\infty)$ the function decreases from $\\operatorname{cosec}^{-1} 2 = \\frac{\\pi}{6}$ towards $0$ without reaching it. Set: $\\left(0, \\frac{\\pi}{6}\\right]$.\n(iv) On $[-2, -1]$ the function decreases from $\\operatorname{cosec}^{-1}(-2) = -\\frac{\\pi}{6}$ to $\\operatorname{cosec}^{-1}(-1) = -\\frac{\\pi}{2}$. Set: $\\left[-\\frac{\\pi}{2}, -\\frac{\\pi}{6}\\right]$.\n(v) $-\\frac{\\pi}{4}$ is in the range, so $x = \\operatorname{cosec}\\left(-\\frac{\\pi}{4}\\right) = -\\sqrt{2}$.',
    steps: [
      { step: '(i) States the domain and range correctly', marks: 1 },
      { step: '(ii) Describes both pieces: end points $\\left(1, \\frac{\\pi}{2}\\right)$, $\\left(-1, -\\frac{\\pi}{2}\\right)$, asymptote $y = 0$, decreasing on each piece', marks: 1 },
      { step: '(iii) Gets $\\left(0, \\frac{\\pi}{6}\\right]$', marks: 1 },
      { step: '(iv) Gets $\\left[-\\frac{\\pi}{2}, -\\frac{\\pi}{6}\\right]$', marks: 1 },
      { step: '(v) Gets $x = -\\sqrt{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d05', chapter: C, topic: EV, type: 'long', complexity: 'hard', marks: 5,
    text: '(a) Write $\\cot^{-1}\\left(\\frac{\\sin x}{1 - \\cos x}\\right)$, where $0 < x < 2\\pi$, in its simplest form, and hence find its value at $x = \\frac{5\\pi}{3}$.\n(b) Show that $\\cos^{-1}\\left(\\frac{1 - x^{2}}{1 + x^{2}}\\right) = -2\\tan^{-1} x$ for $x < 0$, and check your result at $x = -1$.',
    answer: '(a) $\\sin x = 2\\sin\\frac{x}{2}\\cos\\frac{x}{2}$ and $1 - \\cos x = 2\\sin^{2}\\frac{x}{2}$, which is non-zero for $0 < x < 2\\pi$. So the argument is $\\frac{\\cos\\frac{x}{2}}{\\sin\\frac{x}{2}} = \\cot\\frac{x}{2}$. Since $\\frac{x}{2} \\in (0, \\pi)$, the principal range of $\\cot^{-1}$, the expression equals $\\frac{x}{2}$. At $x = \\frac{5\\pi}{3}$ the value is $\\frac{5\\pi}{6}$ (check: the argument is $\\frac{-\\sqrt{3}/2}{1/2} = -\\sqrt{3}$, and $\\cot^{-1}(-\\sqrt{3}) = \\frac{5\\pi}{6}$).\n(b) Put $x = \\tan\\theta$ with $\\theta = \\tan^{-1} x \\in \\left(-\\frac{\\pi}{2}, 0\\right)$ because $x < 0$. Then $\\frac{1 - \\tan^{2}\\theta}{1 + \\tan^{2}\\theta} = \\cos 2\\theta$, so the expression is $\\cos^{-1}(\\cos 2\\theta)$. Here $2\\theta \\in (-\\pi, 0)$, outside $[0, \\pi]$, but $\\cos 2\\theta = \\cos(-2\\theta)$ and $-2\\theta \\in (0, \\pi)$. Hence $\\cos^{-1}(\\cos 2\\theta) = -2\\theta = -2\\tan^{-1} x$. Check at $x = -1$: left side $\\cos^{-1} 0 = \\frac{\\pi}{2}$; right side $-2\\left(-\\frac{\\pi}{4}\\right) = \\frac{\\pi}{2}$. They agree.',
    steps: [
      { step: '(a) Rewrites the argument as $\\cot\\frac{x}{2}$ and uses $\\frac{x}{2} \\in (0, \\pi)$ to get $\\frac{x}{2}$', marks: 1 },
      { step: '(a) Gets the value $\\frac{5\\pi}{6}$ at $x = \\frac{5\\pi}{3}$', marks: 1 },
      { step: '(b) Substitutes $x = \\tan\\theta$ with $\\theta \\in \\left(-\\frac{\\pi}{2}, 0\\right)$ and gets $\\cos^{-1}(\\cos 2\\theta)$', marks: 1 },
      { step: '(b) Notes $2\\theta \\notin [0, \\pi]$ and uses $\\cos 2\\theta = \\cos(-2\\theta)$ with $-2\\theta \\in (0, \\pi)$ to get $-2\\tan^{-1} x$', marks: 1 },
      { step: '(b) Checks both sides equal $\\frac{\\pi}{2}$ at $x = -1$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d06', chapter: C, topic: DR, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $f(x) = \\tan^{-1}(x^{2} - 2x)$, $x \\in \\mathbb{R}$.\n(i) Write the domain of $f$ and find its range.\n(ii) Solve $f(x) = \\frac{\\pi}{4}$.\n(iii) Solve $f(x) = -\\frac{\\pi}{4}$.\n(iv) Is $f$ one-one? Give a reason.',
    answer: '(i) $\\tan^{-1}$ is defined for every real number, so the domain is $\\mathbb{R}$. Write $x^{2} - 2x = (x - 1)^{2} - 1$, which takes every value in $[-1, \\infty)$ (minimum $-1$ at $x = 1$). As $\\tan^{-1}$ is increasing, $f$ takes every value from $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$ upwards, approaching but never reaching $\\frac{\\pi}{2}$. Range: $\\left[-\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$.\n(ii) $x^{2} - 2x = \\tan\\frac{\\pi}{4} = 1$, so $(x - 1)^{2} = 2$ and $x = 1 \\pm \\sqrt{2}$.\n(iii) $x^{2} - 2x = \\tan\\left(-\\frac{\\pi}{4}\\right) = -1$, so $(x - 1)^{2} = 0$ and $x = 1$ (only one solution, at the minimum).\n(iv) No. For example $f(0) = \\tan^{-1} 0 = 0$ and $f(2) = \\tan^{-1} 0 = 0$, but $0 \\neq 2$. (Also part (ii) gives two different $x$ with the same value.)',
    steps: [
      { step: '(i) Domain $\\mathbb{R}$ and shows $x^{2} - 2x \\ge -1$ by completing the square', marks: 1 },
      { step: '(i) Gets the range $\\left[-\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$', marks: 1 },
      { step: '(ii) Gets $x = 1 \\pm \\sqrt{2}$', marks: 1 },
      { step: '(iii) Gets $x = 1$', marks: 1 },
      { step: '(iv) Says not one-one with a valid pair such as $f(0) = f(2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d07', chapter: C, topic: GR, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $g(x) = \\sin^{-1}(\\sin x)$ for $0 \\le x \\le 2\\pi$, where $\\sin^{-1}$ is the principal inverse sine.\n(i) Show that $g(x) = x$ for $0 \\le x \\le \\frac{\\pi}{2}$ and $g(x) = \\pi - x$ for $\\frac{\\pi}{2} \\le x \\le \\frac{3\\pi}{2}$.\n(ii) Find a formula for $g(x)$ when $\\frac{3\\pi}{2} \\le x \\le 2\\pi$.\n(iii) Sketch the graph of $g$ on $[0, 2\\pi]$, marking the corner points.\n(iv) Solve $g(x) = \\frac{\\pi}{6}$ for $0 \\le x \\le 2\\pi$.',
    answer: '(i) For $0 \\le x \\le \\frac{\\pi}{2}$, $x$ is in the principal range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so $\\sin^{-1}(\\sin x) = x$. For $\\frac{\\pi}{2} \\le x \\le \\frac{3\\pi}{2}$, $\\sin x = \\sin(\\pi - x)$ and $\\pi - x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so $g(x) = \\pi - x$.\n(ii) For $\\frac{3\\pi}{2} \\le x \\le 2\\pi$, $\\sin x = \\sin(x - 2\\pi)$ and $x - 2\\pi \\in \\left[-\\frac{\\pi}{2}, 0\\right]$, which is in the principal range. So $g(x) = x - 2\\pi$.\n(iii) The graph is made of three straight segments: from $(0, 0)$ up to $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ (slope $1$), down to $\\left(\\frac{3\\pi}{2}, -\\frac{\\pi}{2}\\right)$ (slope $-1$), and up to $(2\\pi, 0)$ (slope $1$). It is a zig-zag that stays between $y = -\\frac{\\pi}{2}$ and $y = \\frac{\\pi}{2}$.\n(iv) On $\\left[0, \\frac{\\pi}{2}\\right]$: $x = \\frac{\\pi}{6}$. On $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$: $\\pi - x = \\frac{\\pi}{6}$ gives $x = \\frac{5\\pi}{6}$, which is in this interval. On $\\left[\\frac{3\\pi}{2}, 2\\pi\\right]$: $x - 2\\pi = \\frac{\\pi}{6}$ gives $x = \\frac{13\\pi}{6}$, outside the interval. Solutions: $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.',
    steps: [
      { step: '(i) Justifies $g(x) = x$ on $\\left[0, \\frac{\\pi}{2}\\right]$ and $g(x) = \\pi - x$ on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$ using the principal range', marks: 1 },
      { step: '(ii) Gets $g(x) = x - 2\\pi$ with the principal-range check', marks: 1 },
      { step: '(iii) Draws the zig-zag through $(0, 0)$, $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, $\\left(\\frac{3\\pi}{2}, -\\frac{\\pi}{2}\\right)$, $(2\\pi, 0)$', marks: 1 },
      { step: '(iv) Solves on each piece and gets $x = \\frac{\\pi}{6}$', marks: 1 },
      { step: '(iv) Gets $x = \\frac{5\\pi}{6}$ and rejects the value from the third piece', marks: 1 },
    ],
  },
  {
    id: 'c12-itf-r2-d08', chapter: C, topic: EV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $\\alpha = \\cos^{-1}\\left(-\\frac{3}{5}\\right)$ and $\\beta = \\tan^{-1}\\left(-\\frac{12}{5}\\right)$ (principal values).\n(i) State the interval in which $\\alpha$ lies and find $\\sin\\alpha$.\n(ii) State the interval in which $\\beta$ lies and find $\\sin\\beta$ and $\\cos\\beta$.\n(iii) Find $\\cos(\\alpha - \\beta)$.\n(iv) Find $\\sin(\\alpha + \\beta)$.\n(v) Given that $0 < \\alpha + \\beta < \\frac{\\pi}{2}$, express $\\alpha + \\beta$ as a single principal value.',
    answer: '(i) $\\alpha \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$ since its cosine is negative. $\\sin\\alpha = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ (positive there).\n(ii) $\\beta \\in \\left(-\\frac{\\pi}{2}, 0\\right)$ since its tangent is negative. $\\sec^{2}\\beta = 1 + \\frac{144}{25} = \\frac{169}{25}$, so $\\cos\\beta = \\frac{5}{13}$ (positive) and $\\sin\\beta = \\tan\\beta\\cos\\beta = -\\frac{12}{13}$.\n(iii) $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta = \\left(-\\frac{3}{5}\\right)\\frac{5}{13} + \\frac{4}{5}\\left(-\\frac{12}{13}\\right) = -\\frac{15}{65} - \\frac{48}{65} = -\\frac{63}{65}$.\n(iv) $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta = \\frac{4}{5} \\cdot \\frac{5}{13} + \\left(-\\frac{3}{5}\\right)\\left(-\\frac{12}{13}\\right) = \\frac{20}{65} + \\frac{36}{65} = \\frac{56}{65}$.\n(v) $\\alpha + \\beta$ lies in $\\left(0, \\frac{\\pi}{2}\\right) \\subset \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ and its sine is $\\frac{56}{65}$, so $\\alpha + \\beta = \\sin^{-1}\\frac{56}{65}$.',
    steps: [
      { step: '(i) $\\alpha \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$ and $\\sin\\alpha = \\frac{4}{5}$', marks: 1 },
      { step: '(ii) $\\beta \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, $\\cos\\beta = \\frac{5}{13}$, $\\sin\\beta = -\\frac{12}{13}$', marks: 1 },
      { step: '(iii) Gets $\\cos(\\alpha - \\beta) = -\\frac{63}{65}$', marks: 1 },
      { step: '(iv) Gets $\\sin(\\alpha + \\beta) = \\frac{56}{65}$', marks: 1 },
      { step: '(v) Uses the principal range of $\\sin^{-1}$ to write $\\alpha + \\beta = \\sin^{-1}\\frac{56}{65}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-itf-r2-e01', chapter: C, topic: EV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A painter leans a 5 m ladder against a vertical wall on level ground. When the foot of the ladder is $x$ metres from the wall ($0 < x < 5$), the ladder makes an angle $\\theta = \\cos^{-1}\\left(\\frac{x}{5}\\right)$ (in radians) with the ground.',
    answer: '(i) $\\frac{\\pi}{3}$. (ii) $\\left(0, \\frac{\\pi}{2}\\right)$. (iii) $\\sin\\theta = \\frac{4}{5}$, top of the ladder 4 m high. OR: $\\cos\\delta = \\frac{24}{25}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the angle the ladder makes with the ground when its foot is 2.5 m from the wall.',
        answer: '$\\theta = \\cos^{-1}\\frac{2.5}{5} = \\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'As $x$ takes all values in $(0, 5)$, what set of values does $\\theta$ take?',
        answer: '$\\frac{x}{5}$ takes every value in $(0, 1)$. $\\cos^{-1}$ is decreasing with $\\cos^{-1} 0 = \\frac{\\pi}{2}$ and $\\cos^{-1} 1 = 0$, so $\\theta$ takes every value in $\\left(0, \\frac{\\pi}{2}\\right)$ (end points excluded).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'When the foot is 3 m from the wall, find $\\sin\\theta$ and the height at which the top of the ladder touches the wall.\nOR\nThe foot of the ladder is moved from 3 m to 4 m away from the wall, so the angle drops from $\\cos^{-1}\\frac{3}{5}$ to $\\cos^{-1}\\frac{4}{5}$. Show that the decrease $\\delta$ in the angle satisfies $\\cos\\delta = \\frac{24}{25}$.',
        answer: '$\\theta = \\cos^{-1}\\frac{3}{5}$ is acute, so $\\sin\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ (1 mark). The height is $5\\sin\\theta = 5 \\cdot \\frac{4}{5} = 4$ m (1 mark).\nOR: Let $a = \\cos^{-1}\\frac{3}{5}$ and $b = \\cos^{-1}\\frac{4}{5}$, both acute, so $\\sin a = \\frac{4}{5}$ and $\\sin b = \\frac{3}{5}$ (1 mark). Then $\\cos\\delta = \\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b = \\frac{3}{5} \\cdot \\frac{4}{5} + \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-r2-e02', chapter: C, topic: DR, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A Ferris wheel has radius 10 m and its centre is 12 m above the ground. During the first half-turn after a rider boards at the lowest point, the rider\'s height above the ground is $h = 12 - 10\\cos\\theta$ metres, where $\\theta \\in [0, \\pi]$ is the angle turned. The control room display works backwards and shows $\\theta = \\cos^{-1}\\left(\\frac{12 - h}{10}\\right)$.',
    answer: '(i) $2 \\le h \\le 22$. (ii) $\\frac{2\\pi}{3}$. (iii) $7 \\le h \\le 12 + 5\\sqrt{2}$. OR: $0$ and $\\pi$; $h = 23$ is outside the domain.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'For which heights $h$ is the display formula defined?',
        answer: 'We need $-1 \\le \\frac{12 - h}{10} \\le 1$, i.e. $-10 \\le 12 - h \\le 10$, so $2 \\le h \\le 22$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'What angle does the display show when the rider is 17 m above the ground?',
        answer: '$\\theta = \\cos^{-1}\\left(\\frac{12 - 17}{10}\\right) = \\cos^{-1}\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the set of heights of the rider while the display shows angles from $\\frac{\\pi}{3}$ to $\\frac{3\\pi}{4}$ (inclusive).\nOR\nFind the angles shown when $h = 2$ and when $h = 22$, and explain why the display cannot show an angle for $h = 23$.',
        answer: 'On $[0, \\pi]$, $\\cos\\theta$ decreases, so $h = 12 - 10\\cos\\theta$ increases with $\\theta$ (1 mark for this reasoning). At $\\theta = \\frac{\\pi}{3}$, $h = 12 - 5 = 7$; at $\\theta = \\frac{3\\pi}{4}$, $h = 12 + 10 \\cdot \\frac{1}{\\sqrt{2}} = 12 + 5\\sqrt{2} \\approx 19.07$. So $7 \\le h \\le 12 + 5\\sqrt{2}$ (1 mark).\nOR: $h = 2$: $\\cos^{-1}(1) = 0$; $h = 22$: $\\cos^{-1}(-1) = \\pi$ (1 mark). For $h = 23$, $\\frac{12 - 23}{10} = -1.1$, which is outside $[-1, 1]$, the domain of $\\cos^{-1}$ (the wheel never reaches 23 m) (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-r2-e03', chapter: C, topic: GR, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A sound engineer uses a dial whose setting $x$ can be any real number. The dial turns a pointer through an angle $\\theta(x) = \\tan^{-1} x$ radians (principal value). The engineer studies the graph of $\\theta$ against $x$ to understand how the pointer moves.',
    answer: '(i) Range $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$; asymptotes $y = \\pm\\frac{\\pi}{2}$. (ii) $-\\frac{\\pi}{3}$. (iii) $\\sqrt{3} < x < 2 + \\sqrt{3}$. OR: $\\frac{\\pi}{12}$; increasing graph.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the set of angles the pointer can show, and the equations of the horizontal asymptotes of the graph.',
        answer: 'The range of $\\tan^{-1}$ is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$; the graph approaches $\\theta = \\frac{\\pi}{2}$ as $x \\to \\infty$ and $\\theta = -\\frac{\\pi}{2}$ as $x \\to -\\infty$, so these lines are the asymptotes.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the angle when the dial is set at $x = -\\sqrt{3}$.',
        answer: '$\\theta(-\\sqrt{3}) = \\tan^{-1}(-\\sqrt{3}) = -\\frac{\\pi}{3}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'A warning light comes on when $\\frac{\\pi}{3} < \\theta < \\frac{5\\pi}{12}$. Find the dial settings for which the light is on. (You may use $\\tan\\frac{5\\pi}{12} = 2 + \\sqrt{3}$.)\nOR\nFind the angle at $x = 2 - \\sqrt{3}$ (you may use $\\tan\\frac{\\pi}{12} = 2 - \\sqrt{3}$), and use the graph to explain why a larger setting always gives a larger angle.',
        answer: 'Since $\\theta$ is increasing and both angles lie in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, $\\frac{\\pi}{3} < \\tan^{-1} x < \\frac{5\\pi}{12}$ means $\\tan\\frac{\\pi}{3} < x < \\tan\\frac{5\\pi}{12}$ (1 mark). So $\\sqrt{3} < x < 2 + \\sqrt{3}$ (about 1.73 to 3.73) (1 mark).\nOR: $\\theta(2 - \\sqrt{3}) = \\frac{\\pi}{12}$, since $\\frac{\\pi}{12}$ is in the principal range and $\\tan\\frac{\\pi}{12} = 2 - \\sqrt{3}$ (1 mark). The graph of $\\tan^{-1} x$ rises steadily from left to right (it is strictly increasing on $\\mathbb{R}$), so a larger $x$ always gives a larger $\\theta$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-itf-r2-e04', chapter: C, topic: EV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An airport radar measures the straight-line (slant) distance $d$ km to an aircraft and its height $h$ km. The angle of elevation of the aircraft from the radar is computed as $\\theta = \\sin^{-1}\\left(\\frac{h}{d}\\right)$ radians.',
    answer: '(i) $\\frac{\\pi}{6}$. (ii) $\\tan\\theta = \\frac{4}{3}$, horizontal distance 3 km. (iii) $\\frac{\\pi}{12}$. OR: $\\frac{33}{65}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the angle of elevation when the aircraft is 3 km high at a slant distance of 6 km.',
        answer: '$\\theta = \\sin^{-1}\\frac{3}{6} = \\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'For $h = 4$ and $d = 5$, find $\\tan\\theta$ and the horizontal distance of the aircraft from the radar.',
        answer: '$\\sin\\theta = \\frac{4}{5}$ with $\\theta$ acute, so $\\cos\\theta = \\frac{3}{5}$ and $\\tan\\theta = \\frac{4}{3}$. The horizontal distance is $d\\cos\\theta = 5 \\cdot \\frac{3}{5} = 3$ km.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'As the aircraft comes in to land, the ratio $\\frac{h}{d}$ falls from $\\frac{1}{\\sqrt{2}}$ to $\\frac{1}{2}$. Find the decrease in the angle of elevation.\nOR\nTwo aircraft are seen at elevations $\\sin^{-1}\\frac{3}{5}$ and $\\sin^{-1}\\frac{5}{13}$. Find the cosine of the sum of these two angles.',
        answer: 'The angle changes from $\\sin^{-1}\\frac{1}{\\sqrt{2}} = \\frac{\\pi}{4}$ to $\\sin^{-1}\\frac{1}{2} = \\frac{\\pi}{6}$ (1 mark). The decrease is $\\frac{\\pi}{4} - \\frac{\\pi}{6} = \\frac{\\pi}{12}$ radians (1 mark).\nOR: Let $a = \\sin^{-1}\\frac{3}{5}$ and $b = \\sin^{-1}\\frac{5}{13}$, both acute, so $\\cos a = \\frac{4}{5}$ and $\\cos b = \\frac{12}{13}$ (1 mark). $\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b = \\frac{48}{65} - \\frac{15}{65} = \\frac{33}{65}$ (1 mark).',
      },
    ],
  },
];
