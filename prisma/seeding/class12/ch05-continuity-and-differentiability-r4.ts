import type { Class12Question } from './types.js';

const C = 'Continuity and Differentiability';
const CONT = 'Continuity and finding unknown constants';
const DIFF = 'Differentiability';
const CHAIN = 'Chain rule and implicit differentiation';
const INV = 'Derivatives of inverse trigonometric functions';
const LOG = 'Logarithmic differentiation';
const PARAM = 'Parametric differentiation';
const SECOND = 'Second-order derivatives';

const AR_OPTS = [
  'Both A and R are true, and R is the correct explanation of A.',
  'Both A and R are true, but R is not the correct explanation of A.',
  'A is true, but R is false.',
  'A is false, but R is true.',
];

export const CH05_CD_R4: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-cd-r4-a01', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of points in the interval $[0, 2\\pi]$ at which $f(x) = \\tan x$ is discontinuous is',
    options: ['$1$', '$2$', '$3$', '$4$'],
    answer: 'Correct option: B) $2$. $\\tan x = \\frac{\\sin x}{\\cos x}$ is continuous wherever $\\cos x \\neq 0$. In $[0, 2\\pi]$, $\\cos x = 0$ only at $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$.',
  },
  {
    id: 'c12-cd-r4-a02', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = \\frac{\\sin\\left(x^{2}\\right)}{1 - \\cos x}$ for $x \\neq 0$ and $f(0) = k$, and $f$ is continuous at $x = 0$, then $k$ equals',
    options: ['$\\frac{1}{2}$', '$1$', '$4$', '$2$'],
    answer: 'Correct option: D) $2$. Write $\\frac{\\sin x^{2}}{1 - \\cos x} = \\frac{\\sin x^{2}}{x^{2}} \\cdot \\frac{x^{2}}{2\\sin^{2}(x/2)} = \\frac{\\sin x^{2}}{x^{2}} \\cdot 2\\left(\\frac{x/2}{\\sin(x/2)}\\right)^{2} \\to 1 \\cdot 2 \\cdot 1 = 2$, so $k = 2$.',
  },
  {
    id: 'c12-cd-r4-a03', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $k$ for which $f(x) = \\frac{\\log(1 + 5x)}{\\sin 2x}$ for $x \\neq 0$ and $f(0) = k$ is continuous at $x = 0$ is',
    options: ['$\\frac{2}{5}$', '$5$', '$\\frac{5}{2}$', '$10$'],
    answer: 'Correct option: C) $\\frac{5}{2}$. $\\frac{\\log(1 + 5x)}{\\sin 2x} = \\frac{\\log(1 + 5x)}{5x} \\cdot \\frac{2x}{\\sin 2x} \\cdot \\frac{5}{2} \\to 1 \\cdot 1 \\cdot \\frac{5}{2}$, so $k = \\frac{5}{2}$.',
  },
  {
    id: 'c12-cd-r4-a04', chapter: C, topic: CONT, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f(x) = x[x]$, where $[x]$ is the greatest integer less than or equal to $x$, is discontinuous at $x = 1$.\nReason (R): A function whose formula contains the greatest integer function is discontinuous at every real number.',
    options: AR_OPTS,
    answer: 'Correct option: C) A is true, but R is false. As $x \\to 1^{-}$, $[x] = 0$ so $f(x) \\to 0$, while $f(1) = 1 \\cdot 1 = 1$ and $\\lim_{x \\to 1^{+}} f(x) = 1$; the left limit differs, so A is true. R is false: near $x = 0.5$ we have $[x] = 0$, so $f(x) = 0$ and $f$ is continuous at $0.5$.',
  },
  {
    id: 'c12-cd-r4-a05', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For the function $f(x) = |x|^{3}$, the value of $f\'(0)$ is',
    options: ['$0$', '$1$', '$-1$', 'it does not exist'],
    answer: 'Correct option: A) $0$. $\\frac{f(h) - f(0)}{h} = \\frac{|h|^{3}}{h} = h|h|$, which tends to $0$ as $h \\to 0^{+}$ and as $h \\to 0^{-}$. So $f\'(0) = 0$.',
  },
  {
    id: 'c12-cd-r4-a06', chapter: C, topic: DIFF, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $f(x) = x|x|$, then $f\'(-2)$ equals',
    options: ['$-4$', '$4$', '$0$', 'it does not exist'],
    answer: 'Correct option: B) $4$. For $x < 0$, $|x| = -x$, so $f(x) = -x^{2}$ and $f\'(x) = -2x$. Hence $f\'(-2) = 4$.',
  },
  {
    id: 'c12-cd-r4-a07', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f(x) = \\sqrt{|x|}$ at $x = 0$ is',
    options: ['continuous but not differentiable', 'differentiable with $f\'(0) = 0$', 'differentiable with $f\'(0) = 1$', 'not continuous'],
    answer: 'Correct option: A) continuous but not differentiable. $\\sqrt{|x|} \\to 0 = f(0)$, so $f$ is continuous. But $\\frac{f(h) - f(0)}{h} = \\frac{\\sqrt{|h|}}{h}$ equals $\\frac{1}{\\sqrt{h}} \\to \\infty$ for $h > 0$, so the derivative does not exist.',
  },
  {
    id: 'c12-cd-r4-a08', chapter: C, topic: DIFF, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $f$ is differentiable at $x = a$, then $|f|$ is also differentiable at $x = a$.\nReason (R): The function $g(x) = |x|$ is continuous at $x = 0$ but not differentiable at $x = 0$.',
    options: AR_OPTS,
    answer: 'Correct option: D) A is false, but R is true. R is true. For A, take $f(x) = x$, which is differentiable at $0$, while $|f|(x) = |x|$ is not differentiable at $0$, so A is false.',
  },
  {
    id: 'c12-cd-r4-a09', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = \\tan^{3}\\left(x^{2}\\right)$, then $\\frac{dy}{dx}$ is',
    options: ['$3\\tan^{2}\\left(x^{2}\\right)\\sec^{2}\\left(x^{2}\\right)$', '$6x\\tan^{2}\\left(x^{2}\\right)$', '$6x\\tan^{2}\\left(x^{2}\\right)\\sec^{2}\\left(x^{2}\\right)$', '$6x\\sec^{2}\\left(x^{2}\\right)$'],
    answer: 'Correct option: C) $6x\\tan^{2}(x^{2})\\sec^{2}(x^{2})$. By the chain rule, $\\frac{dy}{dx} = 3\\tan^{2}(x^{2}) \\cdot \\sec^{2}(x^{2}) \\cdot 2x$.',
  },
  {
    id: 'c12-cd-r4-a10', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $x^{2/3} + y^{2/3} = a^{2/3}$, where $a$ is a positive constant, then $\\frac{dy}{dx}$ equals',
    options: ['$\\left(\\frac{y}{x}\\right)^{1/3}$', '$-\\left(\\frac{x}{y}\\right)^{1/3}$', '$-\\left(\\frac{y}{x}\\right)^{1/3}$', '$-\\left(\\frac{y}{x}\\right)^{2/3}$'],
    answer: 'Correct option: C) $-\\left(\\frac{y}{x}\\right)^{1/3}$. Differentiating, $\\frac{2}{3}x^{-1/3} + \\frac{2}{3}y^{-1/3}\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x^{-1/3}}{y^{-1/3}} = -\\left(\\frac{y}{x}\\right)^{1/3}$.',
  },
  {
    id: 'c12-cd-r4-a11', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = e^{\\sqrt{\\log x}}$, $x > 1$, then $\\frac{dy}{dx}$ is',
    options: ['$\\frac{e^{\\sqrt{\\log x}}}{2\\sqrt{\\log x}}$', '$\\frac{e^{\\sqrt{\\log x}}}{2x\\sqrt{\\log x}}$', '$\\frac{e^{\\sqrt{\\log x}}}{x}$', '$\\frac{e^{\\sqrt{\\log x}}}{2x}$'],
    answer: 'Correct option: B) $\\frac{e^{\\sqrt{\\log x}}}{2x\\sqrt{\\log x}}$. Chain rule: $\\frac{dy}{dx} = e^{\\sqrt{\\log x}} \\cdot \\frac{1}{2\\sqrt{\\log x}} \\cdot \\frac{1}{x}$.',
  },
  {
    id: 'c12-cd-r4-a12', chapter: C, topic: INV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $0 < x < 1$, the derivative of $\\sin^{-1}\\left(\\sqrt{x}\\right)$ with respect to $x$ is',
    options: ['$\\frac{1}{\\sqrt{1 - x}}$', '$\\frac{1}{2\\sqrt{1 - x}}$', '$\\frac{1}{2\\sqrt{x(1 - x)}}$', '$\\frac{1}{2\\sqrt{x}\\sqrt{1 + x}}$'],
    answer: 'Correct option: C) $\\frac{1}{2\\sqrt{x(1 - x)}}$. $\\frac{d}{dx}\\sin^{-1}\\sqrt{x} = \\frac{1}{\\sqrt{1 - x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{1}{2\\sqrt{x(1 - x)}}$.',
  },
  {
    id: 'c12-cd-r4-a13', chapter: C, topic: INV, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'For $0 < x < 1$, the derivative of $\\sin^{-1}x + \\sin^{-1}\\sqrt{1 - x^{2}}$ with respect to $x$ is',
    options: ['$\\frac{2}{\\sqrt{1 - x^{2}}}$', '$\\frac{1}{\\sqrt{1 - x^{2}}}$', '$-\\frac{1}{\\sqrt{1 - x^{2}}}$', '$0$'],
    answer: 'Correct option: D) $0$. Put $x = \\sin\\theta$ with $0 < \\theta < \\frac{\\pi}{2}$. Then $\\sqrt{1 - x^{2}} = \\cos\\theta = \\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$ and $\\frac{\\pi}{2} - \\theta$ lies in $\\left(0, \\frac{\\pi}{2}\\right)$, so the sum is $\\theta + \\frac{\\pi}{2} - \\theta = \\frac{\\pi}{2}$, a constant.',
  },
  {
    id: 'c12-cd-r4-a14', chapter: C, topic: INV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $-1 < x < 1$, the derivative of $\\sin^{-1}x$ with respect to $\\cos^{-1}x$ is',
    options: ['$1$', '$\\frac{x}{\\sqrt{1 - x^{2}}}$', '$0$', '$-1$'],
    answer: 'Correct option: D) $-1$. $\\frac{d}{dx}\\sin^{-1}x = \\frac{1}{\\sqrt{1 - x^{2}}}$ and $\\frac{d}{dx}\\cos^{-1}x = -\\frac{1}{\\sqrt{1 - x^{2}}}$, so the required derivative is their ratio, $-1$.',
  },
  {
    id: 'c12-cd-r4-a15', chapter: C, topic: LOG, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = (\\tan x)^{x}$, $0 < x < \\frac{\\pi}{2}$, then the value of $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{4}$ is',
    options: ['$\\frac{\\pi}{4}$', '$1$', '$\\frac{\\pi}{2}$', '$\\pi$'],
    answer: 'Correct option: C) $\\frac{\\pi}{2}$. $\\log y = x\\log\\tan x$, so $\\frac{1}{y}\\frac{dy}{dx} = \\log\\tan x + x\\frac{\\sec^{2}x}{\\tan x}$. At $x = \\frac{\\pi}{4}$: $y = 1$, $\\log\\tan\\frac{\\pi}{4} = 0$, and $\\frac{\\pi}{4} \\cdot \\frac{2}{1} = \\frac{\\pi}{2}$.',
  },
  {
    id: 'c12-cd-r4-a16', chapter: C, topic: LOG, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = x^{2}e^{3x}\\sin x$, $x > 0$, then the value of $\\frac{1}{y}\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$ is',
    options: ['$3 + \\frac{2}{\\pi}$', '$\\frac{4}{\\pi}$', '$4 + \\frac{4}{\\pi}$', '$3 + \\frac{4}{\\pi}$'],
    answer: 'Correct option: D) $3 + \\frac{4}{\\pi}$. $\\log y = 2\\log x + 3x + \\log\\sin x$, so $\\frac{1}{y}\\frac{dy}{dx} = \\frac{2}{x} + 3 + \\cot x$. At $x = \\frac{\\pi}{2}$, $\\cot x = 0$, giving $\\frac{4}{\\pi} + 3$.',
  },
  {
    id: 'c12-cd-r4-a17', chapter: C, topic: PARAM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $x = at^{2}$ and $y = 2at$, where $a \\neq 0$, then $\\frac{dy}{dx}$ (for $t \\neq 0$) is',
    options: ['$t$', '$\\frac{1}{t}$', '$\\frac{2}{t}$', '$\\frac{1}{2t}$'],
    answer: 'Correct option: B) $\\frac{1}{t}$. $\\frac{dx}{dt} = 2at$ and $\\frac{dy}{dt} = 2a$, so $\\frac{dy}{dx} = \\frac{2a}{2at} = \\frac{1}{t}$.',
  },
  {
    id: 'c12-cd-r4-a18', chapter: C, topic: PARAM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $x = \\sin t$ and $y = \\sin 2t$, then the value of $\\frac{dy}{dx}$ at $t = \\frac{\\pi}{6}$ is',
    options: ['$\\frac{1}{\\sqrt{3}}$', '$\\sqrt{3}$', '$\\frac{2}{\\sqrt{3}}$', '$2\\sqrt{3}$'],
    answer: 'Correct option: C) $\\frac{2}{\\sqrt{3}}$. $\\frac{dy}{dx} = \\frac{2\\cos 2t}{\\cos t}$. At $t = \\frac{\\pi}{6}$: $\\frac{2 \\cdot \\frac{1}{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{2}{\\sqrt{3}}$.',
  },
  {
    id: 'c12-cd-r4-a19', chapter: C, topic: SECOND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = x^{7}$, $x > 0$, then $\\frac{x\\,y\'\'}{y\'}$ equals',
    options: ['$7$', '$42$', '$6$', '$1$'],
    answer: 'Correct option: C) $6$. $y\' = 7x^{6}$ and $y\'\' = 42x^{5}$, so $\\frac{x\\,y\'\'}{y\'} = \\frac{42x^{6}}{7x^{6}} = 6$.',
  },
  {
    id: 'c12-cd-r4-a20', chapter: C, topic: SECOND, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $y = x\\log x$ for $x > 0$, then $\\frac{d^{2}y}{dx^{2}} = \\frac{1}{x}$.\nReason (R): If $y = \\log x$ for $x > 0$, then $\\frac{d^{2}y}{dx^{2}} = \\frac{1}{x}$.',
    options: AR_OPTS,
    answer: 'Correct option: C) A is true, but R is false. For A, $y\' = \\log x + 1$ and $y\'\' = \\frac{1}{x}$. For R, $y\' = \\frac{1}{x}$ and $y\'\' = -\\frac{1}{x^{2}}$, not $\\frac{1}{x}$, so R is false.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-cd-r4-b01', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $k$ for which $f(x) = \\frac{1 - \\cos x}{x\\log(1 + x)}$ for $x > -1$, $x \\neq 0$, and $f(0) = k$, is continuous at $x = 0$.',
    answer: 'Write $f(x) = \\frac{1 - \\cos x}{x^{2}} \\cdot \\frac{x}{\\log(1 + x)}$. Since $\\frac{1 - \\cos x}{x^{2}} = \\frac{2\\sin^{2}(x/2)}{x^{2}} \\to \\frac{1}{2}$ and $\\frac{\\log(1 + x)}{x} \\to 1$, we get $\\lim_{x \\to 0} f(x) = \\frac{1}{2}$. Continuity at $0$ needs $k = \\frac{1}{2}$.',
    steps: [
      { step: 'Splits $f(x)$ into standard limits and finds $\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^{2}} = \\frac{1}{2}$ and $\\lim_{x \\to 0}\\frac{\\log(1 + x)}{x} = 1$, so $\\lim f(x) = \\frac{1}{2}$', marks: 1 },
      { step: 'Equates the limit with $f(0)$ to get $k = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-b02', chapter: C, topic: DIFF, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the left-hand and right-hand derivatives of $f(x) = |\\sin x|$ at $x = 0$, and state whether $f$ is differentiable at $x = 0$.',
    answer: 'Here $f(0) = 0$. For small $h > 0$, $|\\sin h| = \\sin h$, so the right-hand derivative is $\\lim_{h \\to 0^{+}}\\frac{\\sin h}{h} = 1$. For small $h < 0$, $|\\sin h| = -\\sin h$, so the left-hand derivative is $\\lim_{h \\to 0^{-}}\\frac{-\\sin h}{h} = -1$. They are not equal, so $f$ is not differentiable at $x = 0$.',
    steps: [
      { step: 'Finds the right-hand derivative $1$ using $|\\sin h| = \\sin h$ for small $h > 0$ and the standard limit', marks: 1 },
      { step: 'Finds the left-hand derivative $-1$ and concludes $f$ is not differentiable at $0$ since $-1 \\neq 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-b03', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $\\tan y = x + y$, show that $\\frac{dy}{dx} = \\cot^{2}y$.',
    answer: 'Differentiate both sides with respect to $x$: $\\sec^{2}y\\,\\frac{dy}{dx} = 1 + \\frac{dy}{dx}$. Then $\\frac{dy}{dx}\\left(\\sec^{2}y - 1\\right) = 1$, and since $\\sec^{2}y - 1 = \\tan^{2}y$, $\\frac{dy}{dx} = \\frac{1}{\\tan^{2}y} = \\cot^{2}y$.',
    steps: [
      { step: 'Differentiates implicitly to get $\\sec^{2}y\\frac{dy}{dx} = 1 + \\frac{dy}{dx}$', marks: 1 },
      { step: 'Collects $\\frac{dy}{dx}$ and uses $\\sec^{2}y - 1 = \\tan^{2}y$ to reach $\\cot^{2}y$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-b04', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\sin^{-1}\\left(\\frac{1}{\\sqrt{1 + x^{2}}}\\right)$, $x > 0$.',
    answer: 'Put $x = \\cot\\theta$ with $0 < \\theta < \\frac{\\pi}{2}$. Then $\\frac{1}{\\sqrt{1 + x^{2}}} = \\frac{1}{\\operatorname{cosec}\\theta} = \\sin\\theta$, so $y = \\sin^{-1}(\\sin\\theta) = \\theta = \\cot^{-1}x$. Therefore $\\frac{dy}{dx} = -\\frac{1}{1 + x^{2}}$.',
    steps: [
      { step: 'Substitutes $x = \\cot\\theta$ (valid for $x > 0$) and simplifies to $y = \\cot^{-1}x$', marks: 1 },
      { step: 'Differentiates to get $-\\frac{1}{1 + x^{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-b05', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $y = \\frac{x^{3}e^{2x}}{(x + 1)^{2}}$ for $x > 0$, use logarithmic differentiation to find the value of $\\frac{dy}{dx}$ at $x = 1$.',
    answer: 'Taking logarithms, $\\log y = 3\\log x + 2x - 2\\log(x + 1)$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{3}{x} + 2 - \\frac{2}{x + 1}$. At $x = 1$, $y = \\frac{e^{2}}{4}$ and the bracket is $3 + 2 - 1 = 4$, so $\\frac{dy}{dx} = \\frac{e^{2}}{4} \\cdot 4 = e^{2}$.',
    steps: [
      { step: 'Takes logarithms and differentiates to get $\\frac{1}{y}\\frac{dy}{dx} = \\frac{3}{x} + 2 - \\frac{2}{x + 1}$', marks: 1 },
      { step: 'Evaluates at $x = 1$ using $y(1) = \\frac{e^{2}}{4}$ to get $e^{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-b06', chapter: C, topic: SECOND, type: 'short', complexity: 'easy', marks: 2,
    text: 'If $x = t^{2}$ and $y = t^{3}$, where $t > 0$, find $\\frac{d^{2}y}{dx^{2}}$ in terms of $t$.',
    answer: '$\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}$. Then $\\frac{d^{2}y}{dx^{2}} = \\frac{d}{dt}\\left(\\frac{3t}{2}\\right) \\cdot \\frac{dt}{dx} = \\frac{3}{2} \\cdot \\frac{1}{2t} = \\frac{3}{4t}$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = \\frac{3t}{2}$', marks: 1 },
      { step: 'Differentiates with respect to $t$ and divides by $\\frac{dx}{dt} = 2t$ to get $\\frac{3}{4t}$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-cd-r4-c01', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 3,
    text: 'The function $f$ is defined by $f(x) = \\frac{2\\sin x - \\sin 2x}{x^{3}}$ for $x < 0$, $f(0) = a$, and $f(x) = \\frac{b\\left(1 - \\cos 2x\\right)}{x^{2}}$ for $x > 0$. Find $a$ and $b$ if $f$ is continuous at $x = 0$.',
    answer: 'For $x < 0$: $2\\sin x - \\sin 2x = 2\\sin x(1 - \\cos x)$, so $f(x) = 2 \\cdot \\frac{\\sin x}{x} \\cdot \\frac{1 - \\cos x}{x^{2}} \\to 2 \\cdot 1 \\cdot \\frac{1}{2} = 1$. For $x > 0$: $1 - \\cos 2x = 2\\sin^{2}x$, so $f(x) = 2b\\left(\\frac{\\sin x}{x}\\right)^{2} \\to 2b$. Continuity needs $1 = a = 2b$, so $a = 1$ and $b = \\frac{1}{2}$.',
    steps: [
      { step: 'Finds the left-hand limit $1$ by factorising $2\\sin x - \\sin 2x = 2\\sin x(1 - \\cos x)$', marks: 1 },
      { step: 'Finds the right-hand limit $2b$ using $1 - \\cos 2x = 2\\sin^{2}x$', marks: 1 },
      { step: 'Equates both limits with $f(0) = a$ to get $a = 1$ and $b = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c02', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the value of $k$ for which $f(x) = \\frac{\\sqrt{3}\\cos x - \\sin x}{\\pi - 3x}$ for $x \\neq \\frac{\\pi}{3}$, and $f\\left(\\frac{\\pi}{3}\\right) = k$, is continuous at $x = \\frac{\\pi}{3}$.',
    answer: 'Write $\\sqrt{3}\\cos x - \\sin x = 2\\cos\\left(x + \\frac{\\pi}{6}\\right)$. Put $x = \\frac{\\pi}{3} + h$ with $h \\to 0$: the numerator becomes $2\\cos\\left(\\frac{\\pi}{2} + h\\right) = -2\\sin h$ and the denominator is $\\pi - \\pi - 3h = -3h$. So $f(x) = \\frac{-2\\sin h}{-3h} = \\frac{2}{3} \\cdot \\frac{\\sin h}{h} \\to \\frac{2}{3}$. Hence $k = \\frac{2}{3}$.',
    steps: [
      { step: 'Rewrites the numerator as $2\\cos\\left(x + \\frac{\\pi}{6}\\right)$', marks: 1 },
      { step: 'Substitutes $x = \\frac{\\pi}{3} + h$ to get $\\frac{-2\\sin h}{-3h}$', marks: 1 },
      { step: 'Uses $\\frac{\\sin h}{h} \\to 1$ to get the limit $\\frac{2}{3}$, so $k = \\frac{2}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c03', chapter: C, topic: DIFF, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f(x) = \\sin x$ for $x \\le \\frac{\\pi}{4}$ and $f(x) = ax + b$ for $x > \\frac{\\pi}{4}$. Find the values of $a$ and $b$ for which $f$ is differentiable at $x = \\frac{\\pi}{4}$.',
    answer: 'Differentiability needs continuity, so $a\\cdot\\frac{\\pi}{4} + b = \\sin\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}$. The left-hand derivative is $\\cos\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}$ and the right-hand derivative is $a$, so $a = \\frac{1}{\\sqrt{2}}$. Then $b = \\frac{1}{\\sqrt{2}} - \\frac{\\pi}{4\\sqrt{2}} = \\frac{4 - \\pi}{4\\sqrt{2}}$.',
    steps: [
      { step: 'Writes the continuity condition $a\\frac{\\pi}{4} + b = \\frac{1}{\\sqrt{2}}$', marks: 1 },
      { step: 'Equates left-hand derivative $\\cos\\frac{\\pi}{4}$ with right-hand derivative $a$ to get $a = \\frac{1}{\\sqrt{2}}$', marks: 1 },
      { step: 'Substitutes to get $b = \\frac{4 - \\pi}{4\\sqrt{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c04', chapter: C, topic: DIFF, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $f(x) = x \\cdot \\frac{e^{1/x} - 1}{e^{1/x} + 1}$ for $x \\neq 0$ and $f(0) = 0$. Show that $f$ is continuous at $x = 0$ but not differentiable at $x = 0$.',
    answer: 'For $x \\neq 0$, $\\left|\\frac{e^{1/x} - 1}{e^{1/x} + 1}\\right| < 1$, so $|f(x)| \\le |x| \\to 0$; hence $\\lim_{x \\to 0} f(x) = 0 = f(0)$ and $f$ is continuous. Now $\\frac{f(h) - f(0)}{h} = \\frac{e^{1/h} - 1}{e^{1/h} + 1}$. As $h \\to 0^{+}$, $e^{1/h} \\to \\infty$ and the ratio tends to $1$. As $h \\to 0^{-}$, $e^{1/h} \\to 0$ and the ratio tends to $\\frac{0 - 1}{0 + 1} = -1$. The one-sided derivatives $1$ and $-1$ differ, so $f$ is not differentiable at $0$.',
    steps: [
      { step: 'Shows $|f(x)| \\le |x|$, so $\\lim_{x \\to 0} f(x) = 0 = f(0)$ and $f$ is continuous', marks: 1 },
      { step: 'Forms the difference quotient $\\frac{e^{1/h} - 1}{e^{1/h} + 1}$ and finds the right-hand derivative $1$', marks: 1 },
      { step: 'Finds the left-hand derivative $-1$ and concludes $f$ is not differentiable at $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c05', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 3,
    text: 'The point $(1, 1)$ lies on the curve $\\left(x^{2} + y^{2}\\right)^{2} = 4xy$. Find the slope $\\frac{dy}{dx}$ of the curve at this point.',
    answer: 'Check: $(1 + 1)^{2} = 4 = 4 \\cdot 1 \\cdot 1$. Differentiating both sides with respect to $x$: $2\\left(x^{2} + y^{2}\\right)\\left(2x + 2y\\frac{dy}{dx}\\right) = 4y + 4x\\frac{dy}{dx}$. At $(1, 1)$: $2 \\cdot 2\\left(2 + 2\\frac{dy}{dx}\\right) = 4 + 4\\frac{dy}{dx}$, i.e. $8 + 8\\frac{dy}{dx} = 4 + 4\\frac{dy}{dx}$. So $4\\frac{dy}{dx} = -4$ and $\\frac{dy}{dx} = -1$.',
    steps: [
      { step: 'Differentiates the left side by the chain rule: $2(x^{2} + y^{2})(2x + 2y\\frac{dy}{dx})$', marks: 1 },
      { step: 'Differentiates the right side by the product rule: $4y + 4x\\frac{dy}{dx}$', marks: 1 },
      { step: 'Substitutes $(1, 1)$ and solves to get $\\frac{dy}{dx} = -1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c06', chapter: C, topic: INV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\sin^{-1}\\left(x\\sqrt{1 - x} - \\sqrt{x}\\sqrt{1 - x^{2}}\\right)$, where $0 < x < 1$.',
    answer: 'Let $A = \\sin^{-1}x$ and $B = \\sin^{-1}\\sqrt{x}$. Then $\\sin A = x$, $\\cos A = \\sqrt{1 - x^{2}}$, $\\sin B = \\sqrt{x}$, $\\cos B = \\sqrt{1 - x}$, so the expression is $\\sin A\\cos B - \\cos A\\sin B = \\sin(A - B)$. For $0 < x < 1$ we have $x < \\sqrt{x}$, so $A - B$ lies in $\\left(-\\frac{\\pi}{2}, 0\\right)$ and $y = A - B = \\sin^{-1}x - \\sin^{-1}\\sqrt{x}$. Hence $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^{2}}} - \\frac{1}{2\\sqrt{x}\\sqrt{1 - x}}$.',
    steps: [
      { step: 'Substitutes $A = \\sin^{-1}x$ and $B = \\sin^{-1}\\sqrt{x}$ and recognises $\\sin(A - B)$', marks: 1 },
      { step: 'Justifies that $A - B$ lies in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so $y = \\sin^{-1}x - \\sin^{-1}\\sqrt{x}$', marks: 1 },
      { step: 'Differentiates to get $\\frac{1}{\\sqrt{1 - x^{2}}} - \\frac{1}{2\\sqrt{x}\\sqrt{1 - x}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c07', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\tan^{-1}\\left(\\frac{x}{1 + \\sqrt{1 - x^{2}}}\\right)$, $-1 < x < 1$.',
    answer: 'Put $x = \\sin\\theta$ with $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$, so $\\sqrt{1 - x^{2}} = \\cos\\theta$. Then $\\frac{x}{1 + \\sqrt{1 - x^{2}}} = \\frac{\\sin\\theta}{1 + \\cos\\theta} = \\frac{2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}}{2\\cos^{2}\\frac{\\theta}{2}} = \\tan\\frac{\\theta}{2}$. As $\\frac{\\theta}{2} \\in \\left(-\\frac{\\pi}{4}, \\frac{\\pi}{4}\\right)$, $y = \\frac{\\theta}{2} = \\frac{1}{2}\\sin^{-1}x$. Therefore $\\frac{dy}{dx} = \\frac{1}{2\\sqrt{1 - x^{2}}}$.',
    steps: [
      { step: 'Substitutes $x = \\sin\\theta$ and writes the argument as $\\frac{\\sin\\theta}{1 + \\cos\\theta}$', marks: 1 },
      { step: 'Simplifies with half-angle formulas to $\\tan\\frac{\\theta}{2}$, so $y = \\frac{1}{2}\\sin^{-1}x$ (range checked)', marks: 1 },
      { step: 'Differentiates to get $\\frac{1}{2\\sqrt{1 - x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c08', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = x^{x} + \\left(\\frac{1}{x}\\right)^{x}$, $x > 0$, and simplify your answer.',
    answer: 'Let $u = x^{x}$ and $v = \\left(\\frac{1}{x}\\right)^{x} = x^{-x}$. From $\\log u = x\\log x$, $\\frac{du}{dx} = x^{x}(1 + \\log x)$. From $\\log v = -x\\log x$, $\\frac{dv}{dx} = -x^{-x}(1 + \\log x)$. Adding, $\\frac{dy}{dx} = (1 + \\log x)\\left(x^{x} - x^{-x}\\right)$.',
    steps: [
      { step: 'Finds $\\frac{d}{dx}x^{x} = x^{x}(1 + \\log x)$ by logarithmic differentiation', marks: 1 },
      { step: 'Rewrites the second term as $x^{-x}$ and finds its derivative $-x^{-x}(1 + \\log x)$', marks: 1 },
      { step: 'Adds and factors to get $(1 + \\log x)(x^{x} - x^{-x})$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c09', chapter: C, topic: PARAM, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $x = t\\log t$ and $y = \\frac{\\log t}{t}$, where $t > 0$ and $t \\neq \\frac{1}{e}$, find $\\frac{dy}{dx}$ in terms of $t$, and its value at $t = 1$.',
    answer: '$\\frac{dx}{dt} = \\log t + 1$ and $\\frac{dy}{dt} = \\frac{t \\cdot \\frac{1}{t} - \\log t}{t^{2}} = \\frac{1 - \\log t}{t^{2}}$. Hence $\\frac{dy}{dx} = \\frac{1 - \\log t}{t^{2}(1 + \\log t)}$. At $t = 1$, $\\log t = 0$ and $\\frac{dy}{dx} = \\frac{1}{1} = 1$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt} = 1 + \\log t$ by the product rule', marks: 1 },
      { step: 'Finds $\\frac{dy}{dt} = \\frac{1 - \\log t}{t^{2}}$ by the quotient rule', marks: 1 },
      { step: 'Divides to state $\\frac{dy}{dx}$ and evaluates $1$ at $t = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-c10', chapter: C, topic: SECOND, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y = \\left(\\sin^{-1}x\\right)^{2}$, where $-1 < x < 1$, prove that $\\left(1 - x^{2}\\right)\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} = 2$.',
    answer: '$\\frac{dy}{dx} = \\frac{2\\sin^{-1}x}{\\sqrt{1 - x^{2}}}$, so $\\sqrt{1 - x^{2}}\\,\\frac{dy}{dx} = 2\\sin^{-1}x$. Differentiating again: $\\sqrt{1 - x^{2}}\\,\\frac{d^{2}y}{dx^{2}} - \\frac{x}{\\sqrt{1 - x^{2}}}\\frac{dy}{dx} = \\frac{2}{\\sqrt{1 - x^{2}}}$. Multiplying by $\\sqrt{1 - x^{2}}$ gives $\\left(1 - x^{2}\\right)\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} = 2$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = \\frac{2\\sin^{-1}x}{\\sqrt{1 - x^{2}}}$ and clears the denominator', marks: 1 },
      { step: 'Differentiates the relation again, using the product rule on the left side', marks: 1 },
      { step: 'Multiplies by $\\sqrt{1 - x^{2}}$ to reach the required result', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-cd-r4-d01', chapter: C, topic: CONT, type: 'long', complexity: 'hard', marks: 5,
    text: 'The function $f$ is defined by $f(x) = \\frac{\\tan 3x}{x}$ for $-\\frac{\\pi}{6} < x < 0$, $f(0) = a$, $f(x) = \\frac{\\log(1 + bx)}{x}$ for $0 < x < 1$, and $f(x) = \\frac{c}{x}$ for $x \\ge 1$.\n(a) Find $a$ and $b$ so that $f$ is continuous at $x = 0$.\n(b) With this value of $b$, find $c$ so that $f$ is continuous at $x = 1$.\n(c) Find $f(2)$.',
    answer: '(a) For $x < 0$, $\\frac{\\tan 3x}{x} = 3 \\cdot \\frac{\\tan 3x}{3x} \\to 3$. For $x > 0$, $\\frac{\\log(1 + bx)}{x} = b \\cdot \\frac{\\log(1 + bx)}{bx} \\to b$. Continuity at $0$ needs $a = 3 = b$. (b) With $b = 3$, $\\lim_{x \\to 1^{-}} \\frac{\\log(1 + 3x)}{x} = \\log 4$, and $f(1) = c$, so continuity at $1$ needs $c = \\log 4 = 2\\log 2$. (c) $f(2) = \\frac{c}{2} = \\frac{\\log 4}{2} = \\log 2$.',
    steps: [
      { step: 'Finds the left-hand limit at $0$: $\\lim \\frac{\\tan 3x}{x} = 3$', marks: 1 },
      { step: 'Finds the right-hand limit at $0$: $\\lim \\frac{\\log(1 + bx)}{x} = b$', marks: 1 },
      { step: 'Equates with $f(0) = a$ to get $a = b = 3$', marks: 1 },
      { step: 'Uses continuity at $x = 1$: $c = \\log(1 + 3) = \\log 4$', marks: 1 },
      { step: 'Computes $f(2) = \\frac{\\log 4}{2} = \\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d02', chapter: C, topic: DIFF, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = x|x|$.\n(a) Using the definition of the derivative, show that $f\'(0)$ exists and find it.\n(b) Find $f\'(x)$ for $x > 0$ and for $x < 0$, and hence show that $f\'(x) = 2|x|$ for every real $x$.\n(c) Find $f\'\'(x)$ for $x \\neq 0$, and show that $f\'\'(0)$ does not exist.',
    answer: '(a) $\\frac{f(h) - f(0)}{h} = \\frac{h|h|}{h} = |h| \\to 0$ as $h \\to 0^{+}$ and as $h \\to 0^{-}$, so $f\'(0) = 0$. (b) For $x > 0$, $f(x) = x^{2}$ and $f\'(x) = 2x$. For $x < 0$, $f(x) = -x^{2}$ and $f\'(x) = -2x$. With $f\'(0) = 0$, this gives $f\'(x) = 2|x|$ for all $x$. (c) For $x > 0$, $f\'\'(x) = 2$, and for $x < 0$, $f\'\'(x) = -2$. At $0$: $\\frac{f\'(h) - f\'(0)}{h} = \\frac{2|h|}{h}$, which is $2$ for $h > 0$ and $-2$ for $h < 0$. The one-sided limits differ, so $f\'\'(0)$ does not exist.',
    steps: [
      { step: 'Forms $\\frac{f(h) - f(0)}{h} = |h|$ and finds $f\'(0) = 0$', marks: 1 },
      { step: 'Finds $f\'(x) = 2x$ for $x > 0$ and $-2x$ for $x < 0$', marks: 1 },
      { step: 'Combines with $f\'(0) = 0$ to state $f\'(x) = 2|x|$ for all $x$', marks: 1 },
      { step: 'Finds $f\'\'(x) = 2$ for $x > 0$ and $-2$ for $x < 0$', marks: 1 },
      { step: 'Shows the one-sided limits of $\\frac{f\'(h) - f\'(0)}{h}$ are $2$ and $-2$, so $f\'\'(0)$ does not exist', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d03', chapter: C, topic: CHAIN, type: 'long', complexity: 'hard', marks: 5,
    text: 'Consider the curve $x^{2} - xy + y^{2} = 3$.\n(a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.\n(b) Find the points of the curve at which the tangent is parallel to the $x$-axis.\n(c) Find $\\frac{d^{2}y}{dx^{2}}$ at each of these points.',
    answer: '(a) Differentiating, $2x - y - x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}$. (b) The tangent is horizontal when $\\frac{dy}{dx} = 0$, i.e. $y = 2x$ (then $2y - x = 3x \\neq 0$). Substituting in the curve: $x^{2} - 2x^{2} + 4x^{2} = 3x^{2} = 3$, so $x = \\pm 1$. The points are $(1, 2)$ and $(-1, -2)$. (c) Differentiate $2x - y - xy\' + 2yy\' = 0$ again: $2 - y\' - y\' - xy\'\' + 2y\'^{2} + 2yy\'\' = 0$, so $y\'\'(2y - x) = 2y\' - 2 - 2y\'^{2}$. Where $y\' = 0$, $y\'\' = \\frac{-2}{2y - x}$. At $(1, 2)$: $2y - x = 3$, so $y\'\' = -\\frac{2}{3}$. At $(-1, -2)$: $2y - x = -3$, so $y\'\' = \\frac{2}{3}$.',
    steps: [
      { step: 'Differentiates implicitly and solves to get $\\frac{dy}{dx} = \\frac{y - 2x}{2y - x}$', marks: 1 },
      { step: 'Sets $\\frac{dy}{dx} = 0$ to get $y = 2x$', marks: 1 },
      { step: 'Substitutes into the curve to get $x = \\pm 1$ and the points $(1, 2)$, $(-1, -2)$', marks: 1 },
      { step: 'Differentiates again to get $y\'\'(2y - x) = 2y\' - 2 - 2y\'^{2}$, so $y\'\' = \\frac{-2}{2y - x}$ where $y\' = 0$', marks: 1 },
      { step: 'Evaluates $y\'\' = -\\frac{2}{3}$ at $(1, 2)$ and $\\frac{2}{3}$ at $(-1, -2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d04', chapter: C, topic: INV, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $y = \\cos^{-1}\\left(\\frac{1 - x^{2}}{1 + x^{2}}\\right)$ for all real $x$.\n(a) Simplify $y$ for $x \\ge 0$ and for $x < 0$.\n(b) Find $\\frac{dy}{dx}$ for $x > 0$ and for $x < 0$.\n(c) Find the left-hand and right-hand derivatives of $y$ at $x = 0$, and state whether $y$ is differentiable at $x = 0$.',
    answer: '(a) Put $x = \\tan\\theta$, $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$. Then $\\frac{1 - x^{2}}{1 + x^{2}} = \\cos 2\\theta$. For $x \\ge 0$, $2\\theta \\in [0, \\pi)$, so $y = 2\\theta = 2\\tan^{-1}x$. For $x < 0$, $2\\theta \\in (-\\pi, 0)$, so $y = -2\\theta = -2\\tan^{-1}x$. (b) For $x > 0$, $\\frac{dy}{dx} = \\frac{2}{1 + x^{2}}$; for $x < 0$, $\\frac{dy}{dx} = -\\frac{2}{1 + x^{2}}$. (c) $y(0) = \\cos^{-1}1 = 0$. Right-hand derivative: $\\lim_{h \\to 0^{+}}\\frac{2\\tan^{-1}h}{h} = 2$. Left-hand derivative: $\\lim_{h \\to 0^{-}}\\frac{-2\\tan^{-1}h}{h} = -2$. They are unequal, so $y$ is not differentiable at $x = 0$.',
    steps: [
      { step: 'Substitutes $x = \\tan\\theta$ to get $\\cos^{-1}(\\cos 2\\theta)$', marks: 1 },
      { step: 'Uses the principal range to get $y = 2\\tan^{-1}x$ for $x \\ge 0$ and $y = -2\\tan^{-1}x$ for $x < 0$', marks: 1 },
      { step: 'Differentiates each branch: $\\frac{2}{1 + x^{2}}$ and $-\\frac{2}{1 + x^{2}}$', marks: 1 },
      { step: 'Finds the right-hand derivative $2$ and left-hand derivative $-2$ at $x = 0$', marks: 1 },
      { step: 'Concludes $y$ is not differentiable at $0$ since the one-sided derivatives differ', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d05', chapter: C, topic: LOG, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $y = x^{\\log x} + (\\sin x)^{\\sin x}$, where $0 < x < \\pi$.\n(a) Find $\\frac{dy}{dx}$.\n(b) Find the value of the derivative of $x^{\\log x}$ at $x = e$, and of $(\\sin x)^{\\sin x}$ at $x = \\frac{\\pi}{2}$.',
    answer: '(a) Let $u = x^{\\log x}$. Then $\\log u = (\\log x)^{2}$, so $\\frac{1}{u}\\frac{du}{dx} = \\frac{2\\log x}{x}$ and $\\frac{du}{dx} = 2x^{\\log x - 1}\\log x$. Let $v = (\\sin x)^{\\sin x}$. Then $\\log v = \\sin x\\log\\sin x$, so $\\frac{1}{v}\\frac{dv}{dx} = \\cos x\\log\\sin x + \\sin x \\cdot \\frac{\\cos x}{\\sin x} = \\cos x\\left(1 + \\log\\sin x\\right)$, and $\\frac{dv}{dx} = (\\sin x)^{\\sin x}\\cos x\\left(1 + \\log\\sin x\\right)$. Hence $\\frac{dy}{dx} = 2x^{\\log x - 1}\\log x + (\\sin x)^{\\sin x}\\cos x\\left(1 + \\log\\sin x\\right)$. (b) At $x = e$: $\\log e = 1$ and $e^{1 - 1} = 1$, so $\\frac{du}{dx} = 2 \\cdot 1 \\cdot 1 = 2$. At $x = \\frac{\\pi}{2}$: $\\cos\\frac{\\pi}{2} = 0$, so $\\frac{dv}{dx} = 0$.',
    steps: [
      { step: 'Takes logarithms for the first term: $\\log u = (\\log x)^{2}$', marks: 1 },
      { step: 'Differentiates to get $\\frac{du}{dx} = 2x^{\\log x - 1}\\log x$', marks: 1 },
      { step: 'Takes logarithms for the second term and differentiates to get $\\frac{dv}{dx} = (\\sin x)^{\\sin x}\\cos x(1 + \\log\\sin x)$', marks: 1 },
      { step: 'Adds the two derivatives to state $\\frac{dy}{dx}$', marks: 1 },
      { step: 'Evaluates $2$ at $x = e$ for the first term and $0$ at $x = \\frac{\\pi}{2}$ for the second', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d06', chapter: C, topic: PARAM, type: 'long', complexity: 'hard', marks: 5,
    text: 'An ellipse is given by $x = a\\cos\\theta$ and $y = b\\sin\\theta$, where $a, b > 0$ and $0 < \\theta < \\pi$.\n(a) Show that $\\frac{dy}{dx} = -\\frac{b}{a}\\cot\\theta$.\n(b) Show that $\\frac{d^{2}y}{dx^{2}} = -\\frac{b}{a^{2}\\sin^{3}\\theta}$.\n(c) Express $\\frac{d^{2}y}{dx^{2}}$ in terms of $y$, and find its value at $\\theta = \\frac{\\pi}{2}$.',
    answer: '(a) $\\frac{dx}{d\\theta} = -a\\sin\\theta$ and $\\frac{dy}{d\\theta} = b\\cos\\theta$, so $\\frac{dy}{dx} = \\frac{b\\cos\\theta}{-a\\sin\\theta} = -\\frac{b}{a}\\cot\\theta$. (b) $\\frac{d}{d\\theta}\\left(-\\frac{b}{a}\\cot\\theta\\right) = \\frac{b}{a}\\operatorname{cosec}^{2}\\theta$. Dividing by $\\frac{dx}{d\\theta} = -a\\sin\\theta$: $\\frac{d^{2}y}{dx^{2}} = \\frac{b}{a\\sin^{2}\\theta} \\cdot \\frac{1}{-a\\sin\\theta} = -\\frac{b}{a^{2}\\sin^{3}\\theta}$. (c) Since $\\sin\\theta = \\frac{y}{b}$, $\\sin^{3}\\theta = \\frac{y^{3}}{b^{3}}$, so $\\frac{d^{2}y}{dx^{2}} = -\\frac{b^{4}}{a^{2}y^{3}}$. At $\\theta = \\frac{\\pi}{2}$, $\\sin\\theta = 1$, so the value is $-\\frac{b}{a^{2}}$.',
    steps: [
      { step: 'Finds $\\frac{dx}{d\\theta}$ and $\\frac{dy}{d\\theta}$ and gets $\\frac{dy}{dx} = -\\frac{b}{a}\\cot\\theta$', marks: 1 },
      { step: 'Differentiates $\\frac{dy}{dx}$ with respect to $\\theta$ to get $\\frac{b}{a}\\operatorname{cosec}^{2}\\theta$', marks: 1 },
      { step: 'Divides by $\\frac{dx}{d\\theta}$ to get $-\\frac{b}{a^{2}\\sin^{3}\\theta}$', marks: 1 },
      { step: 'Uses $\\sin\\theta = \\frac{y}{b}$ to get $-\\frac{b^{4}}{a^{2}y^{3}}$', marks: 1 },
      { step: 'Evaluates $-\\frac{b}{a^{2}}$ at $\\theta = \\frac{\\pi}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d07', chapter: C, topic: SECOND, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $y = \\cos\\left(m\\sin^{-1}x\\right)$, where $-1 < x < 1$ and $m$ is a constant.\n(a) Show that $\\sqrt{1 - x^{2}}\\,\\frac{dy}{dx} = -m\\sin\\left(m\\sin^{-1}x\\right)$.\n(b) Hence show that $\\left(1 - x^{2}\\right)\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} + m^{2}y = 0$.\n(c) For $m = 3$, find the value of $\\frac{d^{2}y}{dx^{2}}$ at $x = 0$.',
    answer: '(a) $\\frac{dy}{dx} = -\\sin\\left(m\\sin^{-1}x\\right) \\cdot \\frac{m}{\\sqrt{1 - x^{2}}}$. Multiplying by $\\sqrt{1 - x^{2}}$ gives the result. (b) Differentiate the relation in (a): $\\sqrt{1 - x^{2}}\\,\\frac{d^{2}y}{dx^{2}} - \\frac{x}{\\sqrt{1 - x^{2}}}\\frac{dy}{dx} = -m\\cos\\left(m\\sin^{-1}x\\right) \\cdot \\frac{m}{\\sqrt{1 - x^{2}}} = -\\frac{m^{2}y}{\\sqrt{1 - x^{2}}}$. Multiply by $\\sqrt{1 - x^{2}}$: $\\left(1 - x^{2}\\right)\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} = -m^{2}y$, which is the required relation. (c) At $x = 0$, the relation gives $\\frac{d^{2}y}{dx^{2}} = -m^{2}y(0)$. Since $y(0) = \\cos 0 = 1$, for $m = 3$ the value is $-9$.',
    steps: [
      { step: 'Differentiates by the chain rule to get $\\frac{dy}{dx} = -\\frac{m\\sin(m\\sin^{-1}x)}{\\sqrt{1 - x^{2}}}$ and clears the denominator', marks: 1 },
      { step: 'Differentiates the relation from (a) once more, including the factor $\\frac{-x}{\\sqrt{1 - x^{2}}}$', marks: 1 },
      { step: 'Recognises $\\cos(m\\sin^{-1}x) = y$ on the right side', marks: 1 },
      { step: 'Multiplies by $\\sqrt{1 - x^{2}}$ to reach $(1 - x^{2})y\'\' - xy\' + m^{2}y = 0$', marks: 1 },
      { step: 'Substitutes $x = 0$, $y(0) = 1$, $m = 3$ to get $-9$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r4-d08', chapter: C, topic: DIFF, type: 'long', complexity: 'hard', marks: 5,
    text: 'On the interval $(-\\pi, \\pi)$, let $f(x) = \\sin|x| - |\\sin x|$ and $g(x) = \\sin|x| + |\\sin x|$.\n(a) Write $f$ and $g$ without modulus signs for $x \\ge 0$ and for $x < 0$.\n(b) Show that $f$ is differentiable at $x = 0$ and find $f\'(0)$.\n(c) Show that $g$ is not differentiable at $x = 0$.',
    answer: '(a) For $0 \\le x < \\pi$: $|x| = x$ and $|\\sin x| = \\sin x$, so $f(x) = \\sin x - \\sin x = 0$ and $g(x) = 2\\sin x$. For $-\\pi < x < 0$: $|x| = -x$ so $\\sin|x| = -\\sin x$, and $|\\sin x| = -\\sin x$, so $f(x) = -\\sin x + \\sin x = 0$ and $g(x) = -2\\sin x$. (b) $f(x) = 0$ for every $x$ in $(-\\pi, \\pi)$, a constant function, so it is differentiable at $0$ with $f\'(0) = 0$. (c) $g(0) = 0$. Right-hand derivative: $\\lim_{h \\to 0^{+}}\\frac{2\\sin h}{h} = 2$. Left-hand derivative: $\\lim_{h \\to 0^{-}}\\frac{-2\\sin h}{h} = -2$. They differ, so $g$ is not differentiable at $0$.',
    steps: [
      { step: 'Writes $f(x) = 0$ and $g(x) = 2\\sin x$ for $0 \\le x < \\pi$', marks: 1 },
      { step: 'Writes $f(x) = 0$ and $g(x) = -2\\sin x$ for $-\\pi < x < 0$', marks: 1 },
      { step: 'Concludes $f \\equiv 0$ near $0$, so $f\'(0) = 0$', marks: 1 },
      { step: 'Finds the right-hand derivative $2$ of $g$ at $0$', marks: 1 },
      { step: 'Finds the left-hand derivative $-2$ and concludes $g$ is not differentiable at $0$', marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-cd-r4-e01', chapter: C, topic: CONT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A taxi company charges a fare of $F(x) = 30 + 8[x]$ rupees for a trip of $x$ kilometres, where $x \\ge 0$ and $[x]$ is the greatest integer less than or equal to $x$. In other words, there is a fixed charge of $30$ rupees and $8$ rupees for every completed kilometre. A passenger wonders whether the fare changes smoothly as the distance increases.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the fare for a trip of $2.6$ km and for a trip of exactly $3$ km.',
        answer: '$F(2.6) = 30 + 8[2.6] = 30 + 16 = 46$ rupees. $F(3) = 30 + 8 \\cdot 3 = 54$ rupees.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\lim_{x \\to 3^{-}} F(x)$ and $\\lim_{x \\to 3^{+}} F(x)$.',
        answer: 'Just below $3$, $[x] = 2$, so $F(x) = 46$ and the left-hand limit is $46$. Just above $3$, $[x] = 3$, so $F(x) = 54$ and the right-hand limit is $54$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Is $F$ continuous at $x = 3$? Is it continuous at $x = 3.5$?\nOR\nA rival company charges $G(x) = 30 + 8x$ rupees for $0 \\le x \\le 5$ and $G(x) = ax + b$ rupees for $x > 5$. If $G$ is continuous at $x = 5$ and $G(10) = 95$, find $a$ and $b$.',
        answer: 'At $x = 3$ the left-hand limit $46$ differs from the right-hand limit $54$, so $F$ is not continuous at $3$ (the fare jumps by $8$ rupees). At $x = 3.5$, $[x] = 3$ for all $x$ near $3.5$, so $F$ is constant $54$ there and is continuous. OR: $G(5) = 70$, so continuity at $5$ gives $5a + b = 70$; also $10a + b = 95$. Subtracting, $5a = 25$, so $a = 5$ and $b = 45$.',
      },
    ],
    answer: 'Fares: $F(2.6) = 46$, $F(3) = 54$. Left limit $46$, right limit $54$ at $x = 3$, so $F$ is discontinuous at $3$ but continuous at $3.5$ (OR: $a = 5$, $b = 45$).',
  },
  {
    id: 'c12-cd-r4-e02', chapter: C, topic: DIFF, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A full-wave rectifier in a phone charger converts an alternating signal into a one-directional voltage. Its output after $t$ milliseconds is modelled by $V(t) = 5|\\sin t|$ volts, for $0 < t < 2\\pi$. An engineer wants to know how smoothly the output changes at the instant it touches zero.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write $V(t)$ without the modulus sign on $(0, \\pi)$ and on $(\\pi, 2\\pi)$.',
        answer: 'On $(0, \\pi)$, $\\sin t > 0$, so $V(t) = 5\\sin t$. On $(\\pi, 2\\pi)$, $\\sin t < 0$, so $V(t) = -5\\sin t$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the left-hand and right-hand derivatives of $V$ at $t = \\pi$.',
        answer: '$V(\\pi) = 0$ and $V$ is continuous there. Left-hand derivative: derivative of $5\\sin t$ at $\\pi$ is $5\\cos\\pi = -5$. Right-hand derivative: derivative of $-5\\sin t$ at $\\pi$ is $-5\\cos\\pi = 5$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Is $V$ differentiable at $t = \\pi$? Find the rate of change of $V$ at $t = \\frac{\\pi}{3}$ and at $t = \\frac{4\\pi}{3}$.\nOR\nFind $\\frac{d^{2}V}{dt^{2}}$ for $0 < t < \\pi$ and show that $\\frac{d^{2}V}{dt^{2}} + V = 0$ there.',
        answer: 'The one-sided derivatives $-5$ and $5$ are unequal, so $V$ is not differentiable at $t = \\pi$ (a sharp corner). At $t = \\frac{\\pi}{3}$ (in $(0, \\pi)$): $V\' = 5\\cos\\frac{\\pi}{3} = \\frac{5}{2}$ volts per ms. At $t = \\frac{4\\pi}{3}$ (in $(\\pi, 2\\pi)$): $V\' = -5\\cos\\frac{4\\pi}{3} = \\frac{5}{2}$ volts per ms. OR: on $(0, \\pi)$, $V\' = 5\\cos t$ and $V\'\' = -5\\sin t = -V$, so $V\'\' + V = 0$.',
      },
    ],
    answer: 'On $(0, \\pi)$, $V = 5\\sin t$; on $(\\pi, 2\\pi)$, $V = -5\\sin t$. At $t = \\pi$ the derivatives are $-5$ and $5$, so $V$ is not differentiable there; the rate is $\\frac{5}{2}$ at both $\\frac{\\pi}{3}$ and $\\frac{4\\pi}{3}$ (OR: $V\'\' + V = 0$ on $(0, \\pi)$).',
  },
  {
    id: 'c12-cd-r4-e03', chapter: C, topic: CHAIN, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A ladder $13$ m long leans against a vertical wall. When its foot is $x$ metres from the wall, its top is at a height of $y$ metres, so that $x^{2} + y^{2} = 169$ with $x, y > 0$. A safety inspector studies how the height of the top changes with the position of the foot.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Differentiate $x^{2} + y^{2} = 169$ implicitly to find $\\frac{dy}{dx}$.',
        answer: '$2x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the value of $\\frac{dy}{dx}$ when the foot is $5$ m from the wall.',
        answer: 'When $x = 5$, $y = \\sqrt{169 - 25} = 12$. So $\\frac{dy}{dx} = -\\frac{5}{12}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $\\frac{d^{2}y}{dx^{2}}$ in terms of $y$, and its value when $x = 5$.\nOR\nFind the position of the foot (the value of $x$) at which $\\frac{dy}{dx} = -1$.',
        answer: 'From $\\frac{dy}{dx} = -\\frac{x}{y}$: $\\frac{d^{2}y}{dx^{2}} = -\\frac{y - x\\frac{dy}{dx}}{y^{2}} = -\\frac{y + \\frac{x^{2}}{y}}{y^{2}} = -\\frac{x^{2} + y^{2}}{y^{3}} = -\\frac{169}{y^{3}}$. At $x = 5$, $y = 12$, so the value is $-\\frac{169}{1728}$. OR: $-\\frac{x}{y} = -1$ gives $x = y$, so $2x^{2} = 169$ and $x = \\frac{13}{\\sqrt{2}} = \\frac{13\\sqrt{2}}{2}$ m (about $9.19$ m).',
      },
    ],
    answer: '$\\frac{dy}{dx} = -\\frac{x}{y}$, equal to $-\\frac{5}{12}$ at $x = 5$; $\\frac{d^{2}y}{dx^{2}} = -\\frac{169}{y^{3}} = -\\frac{169}{1728}$ at $x = 5$ (OR: $x = \\frac{13}{\\sqrt{2}}$ m).',
  },
  {
    id: 'c12-cd-r4-e04', chapter: C, topic: SECOND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A parachutist is falling against air resistance. In a simplified model, the distance fallen after $t$ seconds is $s(t) = 10t + 10e^{-t} - 10$ metres, for $t \\ge 0$. A safety engineer wants the velocity and the acceleration of the parachutist.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the velocity $v = \\frac{ds}{dt}$.',
        answer: '$v = \\frac{ds}{dt} = 10 - 10e^{-t}$ metres per second.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the acceleration $a = \\frac{d^{2}s}{dt^{2}}$.',
        answer: '$a = \\frac{d}{dt}\\left(10 - 10e^{-t}\\right) = 10e^{-t}$ metres per second squared.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $\\frac{d^{2}s}{dt^{2}} + \\frac{ds}{dt} = 10$.\nOR\nFind the time at which the velocity is $5$ m/s, and the acceleration at that time.',
        answer: '$\\frac{d^{2}s}{dt^{2}} + \\frac{ds}{dt} = 10e^{-t} + 10 - 10e^{-t} = 10$. OR: $10 - 10e^{-t} = 5$ gives $e^{-t} = \\frac{1}{2}$, so $t = \\log 2$ seconds (about $0.69$ s). Then $a = 10e^{-t} = 10 \\cdot \\frac{1}{2} = 5$ m/s$^{2}$.',
      },
    ],
    answer: '$v = 10 - 10e^{-t}$ and $a = 10e^{-t}$, so $a + v = 10$ (OR: $v = 5$ m/s at $t = \\log 2$ s, where $a = 5$ m/s$^{2}$).',
  },
];
