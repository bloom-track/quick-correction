import type { Class12Question } from './types.js';

const C = 'Continuity and Differentiability';
const CONT = 'Continuity and finding unknown constants';
const DIFF = 'Differentiability';
const CHAIN = 'Chain rule and implicit differentiation';
const INV = 'Derivatives of inverse trigonometric functions';
const LOG = 'Logarithmic differentiation';
const PARAM = 'Parametric differentiation';
const SECOND = 'Second-order derivatives';

export const CH05_CD: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-cd-a01', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = \\frac{x^{2} - 9}{x - 3}$ for $x \\neq 3$ and $f(3) = k$ is continuous at $x = 3$. The value of $k$ is',
    options: ['$3$', '$6$', '$9$', '$0$'],
    answer: 'Correct option: B) $6$. For $x \\neq 3$, $f(x) = x + 3$, so $\\lim_{x \\to 3} f(x) = 6$, and continuity needs $k = 6$.',
  },
  {
    id: 'c12-cd-a02', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $f(x) = kx + 1$ for $x \\le 2$ and $f(x) = 3x - 1$ for $x > 2$ is continuous at $x = 2$, then $k$ equals',
    options: ['$1$', '$2$', '$3$', '$\\frac{5}{2}$'],
    answer: 'Correct option: B) $2$. The left-hand value is $2k + 1$ and the right-hand limit is $3(2) - 1 = 5$. Setting $2k + 1 = 5$ gives $k = 2$.',
  },
  {
    id: 'c12-cd-a03', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $k$ for which $f(x) = \\frac{\\sin 5x}{3x}$ for $x \\neq 0$ and $f(0) = k$ is continuous at $x = 0$ is',
    options: ['$\\frac{5}{3}$', '$\\frac{3}{5}$', '$1$', '$5$'],
    answer: 'Correct option: A) $\\frac{5}{3}$. $\\lim_{x \\to 0} \\frac{\\sin 5x}{3x} = \\frac{5}{3} \\lim_{x \\to 0} \\frac{\\sin 5x}{5x} = \\frac{5}{3}$, so $k = \\frac{5}{3}$.',
  },
  {
    id: 'c12-cd-a04', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = \\frac{1 - \\cos 4x}{x^{2}}$ for $x \\neq 0$ and $f(0) = k$, and $f$ is continuous at $x = 0$, then $k$ is',
    options: ['$8$', '$4$', '$16$', '$2$'],
    answer: 'Correct option: A) $8$. $1 - \\cos 4x = 2\\sin^{2} 2x$, so $\\frac{1 - \\cos 4x}{x^{2}} = 8 \\left(\\frac{\\sin 2x}{2x}\\right)^{2} \\to 8$ as $x \\to 0$. Hence $k = 8$.',
  },
  {
    id: 'c12-cd-a05', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $f(x) = [x]$, where $[x]$ denotes the greatest integer less than or equal to $x$. At which of the following points is $f$ continuous?',
    options: ['$x = 1$', '$x = -2$', '$x = 2.5$', '$x = 0$'],
    answer: 'Correct option: C) $x = 2.5$. The greatest integer function jumps at every integer, so it is discontinuous at $1$, $-2$ and $0$. Near $2.5$ it is constantly $2$, so it is continuous there.',
  },
  {
    id: 'c12-cd-a06', chapter: C, topic: CONT, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The function $f(x) = |x - 2|$ is continuous at $x = 2$.\nReason (R): If $g$ is a continuous function, then $|g|$ is also continuous.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. $g(x) = x - 2$ is a polynomial and hence continuous, so by R, $|x - 2|$ is continuous everywhere, in particular at $x = 2$.',
  },
  {
    id: 'c12-cd-a07', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of points at which $f(x) = |x + 1| + |x - 2| + |x - 5|$ is not differentiable is',
    options: ['$0$', '$1$', '$2$', '$3$'],
    answer: 'Correct option: D) $3$. Each modulus term has a corner where its inside is zero, at $x = -1$, $x = 2$ and $x = 5$. At each of these the left and right derivatives differ (for example at $x = -1$ they are $-3$ and $-1$, at $x = 2$ they are $-1$ and $1$, at $x = 5$ they are $1$ and $3$), and $f$ is differentiable everywhere else.',
  },
  {
    id: 'c12-cd-a08', chapter: C, topic: DIFF, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = (x - 2)|x - 2|$ at $x = 2$ is',
    options: [
      'continuous but not differentiable',
      'differentiable but not continuous',
      'both continuous and differentiable',
      'neither continuous nor differentiable',
    ],
    answer: 'Correct option: C) both continuous and differentiable. $f(2) = 0$ and $\\frac{f(2 + h) - f(2)}{h} = |h| \\to 0$ from both sides, so $f\'(2) = 0$ exists; a differentiable function is also continuous. (Option B is impossible in any case.)',
  },
  {
    id: 'c12-cd-a09', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = ax^{2} + 1$ for $x \\le 1$ and $f(x) = 4x + b$ for $x > 1$ is differentiable at $x = 1$, then $(a, b)$ is',
    options: ['$(2, -1)$', '$(2, 1)$', '$(4, 1)$', '$(1, 2)$'],
    answer: 'Correct option: A) $(2, -1)$. Equal derivatives at $x = 1$: $2a = 4$, so $a = 2$. Continuity at $x = 1$: $a + 1 = 4 + b$, so $3 = 4 + b$ and $b = -1$.',
  },
  {
    id: 'c12-cd-a10', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The left-hand derivative of $f(x) = 2x + 3|x|$ at $x = 0$ is',
    options: ['$-1$', '$5$', '$1$', '$-5$'],
    answer: 'Correct option: A) $-1$. For $x < 0$, $|x| = -x$, so $f(x) = 2x - 3x = -x$ and the left-hand derivative is $-1$. (The right-hand derivative is $5$, which is the trap in option B.)',
  },
  {
    id: 'c12-cd-a11', chapter: C, topic: DIFF, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f(x) = |x - 3|$ is continuous at $x = 3$ but not differentiable at $x = 3$.\nReason (R): Every function that is differentiable at a point is continuous at that point.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: B) Both are true but R does not explain A. A is true: the left and right limits equal $f(3) = 0$, while the left and right derivatives are $-1$ and $1$. R is a true theorem, but it goes from differentiability to continuity and says nothing about why $f$ fails to be differentiable.',
  },
  {
    id: 'c12-cd-a12', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The derivative of $\\cos^{3}(2x)$ with respect to $x$ is',
    options: [
      '$-6\\cos^{2}(2x)\\sin(2x)$',
      '$-3\\cos^{2}(2x)\\sin(2x)$',
      '$6\\cos^{2}(2x)\\sin(2x)$',
      '$-6\\cos(2x)\\sin^{2}(2x)$',
    ],
    answer: 'Correct option: A) $-6\\cos^{2}(2x)\\sin(2x)$. By the chain rule, $3\\cos^{2}(2x) \\cdot (-\\sin 2x) \\cdot 2$.',
  },
  {
    id: 'c12-cd-a13', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = \\log(\\sec x + \\tan x)$, then $\\frac{dy}{dx}$ is',
    options: ['$\\sec x$', '$\\tan x$', '$\\sec x \\tan x$', '$\\frac{1}{\\sec x + \\tan x}$'],
    answer: 'Correct option: A) $\\sec x$. $\\frac{dy}{dx} = \\frac{\\sec x \\tan x + \\sec^{2} x}{\\sec x + \\tan x} = \\frac{\\sec x(\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x$.',
  },
  {
    id: 'c12-cd-a14', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $x^{2} + xy + y^{2} = 7$, then $\\frac{dy}{dx}$ equals',
    options: [
      '$-\\frac{2x + y}{x + 2y}$',
      '$\\frac{2x + y}{x + 2y}$',
      '$-\\frac{x + 2y}{2x + y}$',
      '$-\\frac{2x}{2y}$',
    ],
    answer: 'Correct option: A) $-\\frac{2x + y}{x + 2y}$. Differentiating: $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$, so $(x + 2y)\\frac{dy}{dx} = -(2x + y)$.',
  },
  {
    id: 'c12-cd-a15', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = e^{\\sin\\sqrt{x}}$, $x > 0$, then $\\frac{dy}{dx}$ is',
    options: [
      '$\\frac{e^{\\sin\\sqrt{x}}\\cos\\sqrt{x}}{2\\sqrt{x}}$',
      '$e^{\\sin\\sqrt{x}}\\cos\\sqrt{x}$',
      '$\\frac{e^{\\cos\\sqrt{x}}}{2\\sqrt{x}}$',
      '$2\\sqrt{x}\\,e^{\\sin\\sqrt{x}}\\cos\\sqrt{x}$',
    ],
    answer: 'Correct option: A) $\\frac{e^{\\sin\\sqrt{x}}\\cos\\sqrt{x}}{2\\sqrt{x}}$. Chain rule through three layers: $e^{\\sin\\sqrt{x}} \\cdot \\cos\\sqrt{x} \\cdot \\frac{1}{2\\sqrt{x}}$.',
  },
  {
    id: 'c12-cd-a16', chapter: C, topic: INV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The derivative of $\\tan^{-1}(x^{2})$ with respect to $x$ is',
    options: ['$\\frac{2x}{1 + x^{4}}$', '$\\frac{1}{1 + x^{4}}$', '$\\frac{2x}{1 + x^{2}}$', '$\\frac{2x}{\\sqrt{1 - x^{4}}}$'],
    answer: 'Correct option: A) $\\frac{2x}{1 + x^{4}}$. $\\frac{d}{dx}\\tan^{-1} u = \\frac{1}{1 + u^{2}}\\frac{du}{dx}$ with $u = x^{2}$.',
  },
  {
    id: 'c12-cd-a17', chapter: C, topic: INV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $-1 < x < 1$, the derivative of $\\sin^{-1}\\left(\\frac{2x}{1 + x^{2}}\\right)$ with respect to $x$ is',
    options: ['$\\frac{2}{1 + x^{2}}$', '$\\frac{1}{1 + x^{2}}$', '$-\\frac{2}{1 + x^{2}}$', '$\\frac{2}{\\sqrt{1 - x^{2}}}$'],
    answer: 'Correct option: A) $\\frac{2}{1 + x^{2}}$. Put $x = \\tan\\theta$ with $-\\frac{\\pi}{4} < \\theta < \\frac{\\pi}{4}$; then the expression is $\\sin^{-1}(\\sin 2\\theta) = 2\\theta = 2\\tan^{-1} x$, whose derivative is $\\frac{2}{1 + x^{2}}$.',
  },
  {
    id: 'c12-cd-a18', chapter: C, topic: LOG, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = x^{3x}$, $x > 0$, then $\\frac{dy}{dx}$ is',
    options: [
      '$3x^{3x}(1 + \\log x)$',
      '$3x \\cdot x^{3x - 1}$',
      '$x^{3x}(1 + \\log x)$',
      '$3x^{3x}\\log x$',
    ],
    answer: 'Correct option: A) $3x^{3x}(1 + \\log x)$. $\\log y = 3x\\log x$, so $\\frac{1}{y}\\frac{dy}{dx} = 3\\log x + 3$. Option B wrongly uses the power rule on a variable exponent.',
  },
  {
    id: 'c12-cd-a19', chapter: C, topic: LOG, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $y = x^{\\sin x}$, $x > 0$, then the value of $\\frac{dy}{dx}$ at $x = \\frac{\\pi}{2}$ is',
    options: ['$1$', '$\\frac{\\pi}{2}$', '$0$', '$\\frac{2}{\\pi}$'],
    answer: 'Correct option: A) $1$. $\\log y = \\sin x \\log x$, so $\\frac{dy}{dx} = x^{\\sin x}\\left(\\cos x\\log x + \\frac{\\sin x}{x}\\right)$. At $x = \\frac{\\pi}{2}$: $\\frac{\\pi}{2}\\left(0 + \\frac{2}{\\pi}\\right) = 1$.',
  },
  {
    id: 'c12-cd-a20', chapter: C, topic: PARAM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $x = 3t^{2}$ and $y = 2t^{3}$, then $\\frac{dy}{dx}$ (for $t \\neq 0$) is',
    options: ['$t$', '$t^{2}$', '$\\frac{1}{t}$', '$\\frac{2t}{3}$'],
    answer: 'Correct option: A) $t$. $\\frac{dy}{dt} = 6t^{2}$ and $\\frac{dx}{dt} = 6t$, so $\\frac{dy}{dx} = \\frac{6t^{2}}{6t} = t$.',
  },
  {
    id: 'c12-cd-a21', chapter: C, topic: SECOND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = Ae^{3x} + Be^{-3x}$, where $A$ and $B$ are constants, then $\\frac{d^{2}y}{dx^{2}}$ equals',
    options: ['$9y$', '$-9y$', '$3y$', '$6y$'],
    answer: 'Correct option: A) $9y$. $\\frac{dy}{dx} = 3Ae^{3x} - 3Be^{-3x}$ and $\\frac{d^{2}y}{dx^{2}} = 9Ae^{3x} + 9Be^{-3x} = 9y$.',
  },
  {
    id: 'c12-cd-a22', chapter: C, topic: SECOND, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $y = \\sin 2x$, then $\\frac{d^{2}y}{dx^{2}} + 4y = 0$.\nReason (R): For any constant $k$, $\\frac{d^{2}}{dx^{2}}(\\sin kx) = -k^{2}\\sin kx$.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. Differentiating twice, $\\frac{d}{dx}\\sin kx = k\\cos kx$ and then $-k^{2}\\sin kx$. With $k = 2$, $y\'\' = -4\\sin 2x = -4y$, which is exactly A.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-cd-b01', chapter: C, topic: CONT, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the value of $k$ for which $f(x) = \\frac{x^{3} - 8}{x - 2}$ for $x \\neq 2$, and $f(2) = k$, is continuous at $x = 2$.',
    answer: 'For $x \\neq 2$, $\\frac{x^{3} - 8}{x - 2} = x^{2} + 2x + 4$. So $\\lim_{x \\to 2} f(x) = 4 + 4 + 4 = 12$. For continuity at $x = 2$ we need $f(2) = 12$, so $k = 12$.',
    steps: [
      { step: 'Factorises and finds $\\lim_{x \\to 2} f(x) = 12$', marks: 1 },
      { step: 'Equates to $f(2)$ and states $k = 12$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b02', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 2,
    text: 'The function $f$ is defined by $f(x) = ax + 1$ for $x < 1$, $f(1) = 5$, and $f(x) = bx^{2} - 3$ for $x > 1$. If $f$ is continuous at $x = 1$, find $a$ and $b$.',
    answer: 'Left-hand limit at $1$: $a + 1$. Right-hand limit at $1$: $b - 3$. Continuity needs both to equal $f(1) = 5$. So $a + 1 = 5$, giving $a = 4$, and $b - 3 = 5$, giving $b = 8$.',
    steps: [
      { step: 'Writes LHL $= a + 1$ and RHL $= b - 3$ and equates each to $5$', marks: 1 },
      { step: 'Gets $a = 4$ and $b = 8$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b03', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $k$ so that $f(x) = \\frac{\\sqrt{1 + x} - 1}{x}$ for $-1 \\le x < 0$ and $x > 0$, with $f(0) = k$, is continuous at $x = 0$.',
    answer: 'Rationalise: $\\frac{\\sqrt{1 + x} - 1}{x} \\cdot \\frac{\\sqrt{1 + x} + 1}{\\sqrt{1 + x} + 1} = \\frac{x}{x(\\sqrt{1 + x} + 1)} = \\frac{1}{\\sqrt{1 + x} + 1}$. As $x \\to 0$ this tends to $\\frac{1}{2}$. So continuity at $0$ requires $k = \\frac{1}{2}$.',
    steps: [
      { step: 'Rationalises and finds the limit $\\frac{1}{2}$', marks: 1 },
      { step: 'States $k = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b04', chapter: C, topic: DIFF, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $f(x) = 3x - 2$ for $x \\le 2$ and $f(x) = x^{2}$ for $x > 2$. Show that $f$ is continuous at $x = 2$ but not differentiable at $x = 2$.',
    answer: 'Continuity: $f(2) = 4$, LHL $= 3(2) - 2 = 4$, RHL $= 2^{2} = 4$, so $f$ is continuous at $2$. Derivatives: LHD $= \\lim_{h \\to 0^-} \\frac{3(2 + h) - 2 - 4}{h} = 3$. RHD $= \\lim_{h \\to 0^+} \\frac{(2 + h)^{2} - 4}{h} = \\lim_{h \\to 0^+}(4 + h) = 4$. Since $3 \\neq 4$, $f$ is not differentiable at $x = 2$.',
    steps: [
      { step: 'Shows LHL $=$ RHL $= f(2) = 4$, so continuous', marks: 1 },
      { step: 'Finds LHD $= 3$, RHD $= 4$ and concludes not differentiable', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b05', chapter: C, topic: CHAIN, type: 'short', complexity: 'easy', marks: 2,
    text: 'Differentiate $y = \\sqrt{\\cos(3x + 1)}$ with respect to $x$.',
    answer: 'By the chain rule, $\\frac{dy}{dx} = \\frac{1}{2\\sqrt{\\cos(3x + 1)}} \\cdot (-\\sin(3x + 1)) \\cdot 3 = -\\frac{3\\sin(3x + 1)}{2\\sqrt{\\cos(3x + 1)}}$.',
    steps: [
      { step: 'Differentiates the square root correctly: $\\frac{1}{2\\sqrt{\\cos(3x + 1)}}$', marks: 1 },
      { step: 'Multiplies by $-\\sin(3x + 1) \\cdot 3$ to get the final answer', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b06', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 2,
    text: 'The point $(1, 2)$ lies on the curve $x^{2}y + xy^{2} = 6$. Find $\\frac{dy}{dx}$ at this point.',
    answer: 'Differentiate implicitly: $2xy + x^{2}\\frac{dy}{dx} + y^{2} + 2xy\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{2xy + y^{2}}{x^{2} + 2xy}$. At $(1, 2)$: $\\frac{dy}{dx} = -\\frac{4 + 4}{1 + 4} = -\\frac{8}{5}$.',
    steps: [
      { step: 'Differentiates implicitly using the product rule and gets the expression for $\\frac{dy}{dx}$', marks: 1 },
      { step: 'Substitutes $(1, 2)$ to get $-\\frac{8}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b07', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\tan^{-1}\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$, $-\\frac{\\pi}{4} < x < \\frac{\\pi}{4}$.',
    answer: 'Divide numerator and denominator by $\\cos x$: $\\frac{1 - \\tan x}{1 + \\tan x} = \\tan\\left(\\frac{\\pi}{4} - x\\right)$. Since $0 < \\frac{\\pi}{4} - x < \\frac{\\pi}{2}$, $y = \\frac{\\pi}{4} - x$. Hence $\\frac{dy}{dx} = -1$.',
    steps: [
      { step: 'Simplifies to $y = \\frac{\\pi}{4} - x$ (with the range justified)', marks: 1 },
      { step: 'States $\\frac{dy}{dx} = -1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b08', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 2,
    text: 'Differentiate $y = (\\log x)^{x}$, $x > 1$, with respect to $x$.',
    answer: 'Take logs: $\\log y = x\\log(\\log x)$. Differentiate: $\\frac{1}{y}\\frac{dy}{dx} = \\log(\\log x) + x \\cdot \\frac{1}{\\log x} \\cdot \\frac{1}{x} = \\log(\\log x) + \\frac{1}{\\log x}$. So $\\frac{dy}{dx} = (\\log x)^{x}\\left[\\log(\\log x) + \\frac{1}{\\log x}\\right]$.',
    steps: [
      { step: 'Takes logarithms and differentiates both sides correctly', marks: 1 },
      { step: 'Writes $\\frac{dy}{dx} = (\\log x)^{x}\\left[\\log(\\log x) + \\frac{1}{\\log x}\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b09', chapter: C, topic: LOG, type: 'short', complexity: 'hard', marks: 2,
    text: 'If $y^{x} = e^{y - x}$, prove that $\\frac{dy}{dx} = \\frac{(1 + \\log y)^{2}}{\\log y}$.',
    answer: 'Taking logs, $x\\log y = y - x$, so $x(1 + \\log y) = y$, i.e. $x = \\frac{y}{1 + \\log y}$. Differentiating $x\\log y = y - x$: $\\log y + \\frac{x}{y}\\frac{dy}{dx} = \\frac{dy}{dx} - 1$, so $\\frac{dy}{dx}\\left(1 - \\frac{x}{y}\\right) = 1 + \\log y$ and $\\frac{dy}{dx} = \\frac{y(1 + \\log y)}{y - x}$. Now $y - x = y - \\frac{y}{1 + \\log y} = \\frac{y\\log y}{1 + \\log y}$. Hence $\\frac{dy}{dx} = \\frac{y(1 + \\log y)(1 + \\log y)}{y\\log y} = \\frac{(1 + \\log y)^{2}}{\\log y}$.',
    steps: [
      { step: 'Takes logs and differentiates to get $\\frac{dy}{dx} = \\frac{y(1 + \\log y)}{y - x}$', marks: 1 },
      { step: 'Eliminates $x$ using $x = \\frac{y}{1 + \\log y}$ to reach the required result', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b10', chapter: C, topic: PARAM, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $x = 2\\cos t - \\cos 2t$ and $y = 2\\sin t - \\sin 2t$, find $\\frac{dy}{dx}$ at $t = \\frac{\\pi}{6}$.',
    answer: '$\\frac{dx}{dt} = -2\\sin t + 2\\sin 2t$ and $\\frac{dy}{dt} = 2\\cos t - 2\\cos 2t$. So $\\frac{dy}{dx} = \\frac{\\cos t - \\cos 2t}{\\sin 2t - \\sin t}$. At $t = \\frac{\\pi}{6}$: numerator $= \\frac{\\sqrt{3}}{2} - \\frac{1}{2}$, denominator $= \\frac{\\sqrt{3}}{2} - \\frac{1}{2}$. Hence $\\frac{dy}{dx} = 1$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt}$, $\\frac{dy}{dt}$ and their ratio', marks: 1 },
      { step: 'Evaluates at $t = \\frac{\\pi}{6}$ to get $1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b11', chapter: C, topic: SECOND, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find $\\frac{d^{2}y}{dx^{2}}$ if $y = x^{3}\\log x$, $x > 0$.',
    answer: '$\\frac{dy}{dx} = 3x^{2}\\log x + x^{3} \\cdot \\frac{1}{x} = 3x^{2}\\log x + x^{2}$. Then $\\frac{d^{2}y}{dx^{2}} = 6x\\log x + 3x^{2} \\cdot \\frac{1}{x} + 2x = 6x\\log x + 5x$.',
    steps: [
      { step: 'First derivative $3x^{2}\\log x + x^{2}$', marks: 1 },
      { step: 'Second derivative $6x\\log x + 5x$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-b12', chapter: C, topic: SECOND, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $y = e^{2x}(a + bx)$, where $a$ and $b$ are constants, show that $\\frac{d^{2}y}{dx^{2}} - 4\\frac{dy}{dx} + 4y = 0$.',
    answer: '$y\' = 2e^{2x}(a + bx) + be^{2x} = 2y + be^{2x}$. Differentiating again, $y\'\' = 2y\' + 2be^{2x}$. From the first line, $be^{2x} = y\' - 2y$, so $y\'\' = 2y\' + 2(y\' - 2y) = 4y\' - 4y$. Hence $y\'\' - 4y\' + 4y = 0$.',
    steps: [
      { step: 'Finds $y\' = 2y + be^{2x}$', marks: 1 },
      { step: 'Finds $y\'\'$, eliminates $b$ and obtains the result', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-cd-c01', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the values of $a$ and $b$ for which the function $f(x) = \\frac{\\sin ax}{2x}$ for $x < 0$, $f(0) = 3$, and $f(x) = \\frac{\\tan bx}{x}$ for $x > 0$ is continuous at $x = 0$.',
    answer: 'LHL: $\\lim_{x \\to 0^-}\\frac{\\sin ax}{2x} = \\frac{a}{2}\\lim\\frac{\\sin ax}{ax} = \\frac{a}{2}$. RHL: $\\lim_{x \\to 0^+}\\frac{\\tan bx}{x} = b\\lim\\frac{\\tan bx}{bx} = b$. For continuity, LHL $=$ RHL $= f(0) = 3$. So $\\frac{a}{2} = 3$, giving $a = 6$, and $b = 3$.',
    steps: [
      { step: 'Finds LHL $= \\frac{a}{2}$', marks: 1 },
      { step: 'Finds RHL $= b$', marks: 1 },
      { step: 'Equates both to $3$ and gets $a = 6$, $b = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c02', chapter: C, topic: DIFF, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the values of $a$ and $b$ such that $f(x) = x^{3} + ax$ for $x \\le 1$ and $f(x) = bx^{2} + 2$ for $x > 1$ is differentiable at $x = 1$.',
    answer: 'A differentiable function is continuous, so at $x = 1$: $1 + a = b + 2$, i.e. $a - b = 1$. LHD at $1$ $= 3x^{2} + a$ at $x = 1$ $= 3 + a$. RHD at $1$ $= 2bx$ at $x = 1$ $= 2b$. Differentiability needs $3 + a = 2b$. Subtracting the first condition from this: $(3 + a) - (1 + a) = 2b - (b + 2)$, so $2 = b - 2$, giving $b = 4$ and $a = 5$. Check: $f(1) = 6$ from both sides and both derivatives equal $8$.',
    steps: [
      { step: 'Continuity condition $1 + a = b + 2$', marks: 1 },
      { step: 'Equal one-sided derivatives $3 + a = 2b$', marks: 1 },
      { step: 'Solves to get $a = 5$, $b = 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c03', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $\\tan(x + y) + \\tan(x - y) = 1$, find $\\frac{dy}{dx}$.',
    answer: 'Differentiate both sides: $\\sec^{2}(x + y)\\left(1 + \\frac{dy}{dx}\\right) + \\sec^{2}(x - y)\\left(1 - \\frac{dy}{dx}\\right) = 0$. Collect terms: $\\frac{dy}{dx}\\left[\\sec^{2}(x + y) - \\sec^{2}(x - y)\\right] = -\\left[\\sec^{2}(x + y) + \\sec^{2}(x - y)\\right]$. Hence $\\frac{dy}{dx} = \\frac{\\sec^{2}(x + y) + \\sec^{2}(x - y)}{\\sec^{2}(x - y) - \\sec^{2}(x + y)}$.',
    steps: [
      { step: 'Differentiates each tangent term with the chain rule', marks: 1 },
      { step: 'Collects the $\\frac{dy}{dx}$ terms correctly', marks: 1 },
      { step: 'States the final expression for $\\frac{dy}{dx}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c04', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Differentiate $\\tan^{-1}\\left(\\frac{3x - x^{3}}{1 - 3x^{2}}\\right)$ with respect to $\\tan^{-1}\\left(\\frac{2x}{1 - x^{2}}\\right)$, for $-\\frac{1}{\\sqrt{3}} < x < \\frac{1}{\\sqrt{3}}$.',
    answer: 'Put $x = \\tan\\theta$ with $-\\frac{\\pi}{6} < \\theta < \\frac{\\pi}{6}$. Then $u = \\tan^{-1}(\\tan 3\\theta) = 3\\theta = 3\\tan^{-1} x$, since $3\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$. Also $v = \\tan^{-1}(\\tan 2\\theta) = 2\\theta = 2\\tan^{-1} x$, since $2\\theta \\in \\left(-\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right)$. So $\\frac{du}{dx} = \\frac{3}{1 + x^{2}}$, $\\frac{dv}{dx} = \\frac{2}{1 + x^{2}}$, and $\\frac{du}{dv} = \\frac{3}{2}$.',
    steps: [
      { step: 'Simplifies $u = 3\\tan^{-1} x$ with the range justified', marks: 1 },
      { step: 'Simplifies $v = 2\\tan^{-1} x$', marks: 1 },
      { step: 'Finds $\\frac{du}{dv} = \\frac{3}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c05', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = (\\cos x)^{\\sin x} + (\\sin x)^{\\cos x}$, $0 < x < \\frac{\\pi}{2}$.',
    answer: 'Let $u = (\\cos x)^{\\sin x}$ and $v = (\\sin x)^{\\cos x}$. $\\log u = \\sin x\\log\\cos x$, so $\\frac{du}{dx} = (\\cos x)^{\\sin x}\\left[\\cos x\\log\\cos x - \\sin x\\tan x\\right]$. $\\log v = \\cos x\\log\\sin x$, so $\\frac{dv}{dx} = (\\sin x)^{\\cos x}\\left[-\\sin x\\log\\sin x + \\cos x\\cot x\\right]$. Hence $\\frac{dy}{dx} = (\\cos x)^{\\sin x}\\left[\\cos x\\log\\cos x - \\sin x\\tan x\\right] + (\\sin x)^{\\cos x}\\left[\\cos x\\cot x - \\sin x\\log\\sin x\\right]$.',
    steps: [
      { step: 'Splits into $u + v$ and finds $\\frac{du}{dx}$ by logarithms', marks: 1 },
      { step: 'Finds $\\frac{dv}{dx}$ by logarithms', marks: 1 },
      { step: 'Adds to give the final $\\frac{dy}{dx}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c06', chapter: C, topic: PARAM, type: 'short', complexity: 'hard', marks: 3,
    text: 'If $x = a(t - \\sin t)$ and $y = a(1 - \\cos t)$, where $a > 0$, find $\\frac{d^{2}y}{dx^{2}}$ at $t = \\frac{\\pi}{2}$.',
    answer: '$\\frac{dx}{dt} = a(1 - \\cos t)$, $\\frac{dy}{dt} = a\\sin t$, so $\\frac{dy}{dx} = \\frac{\\sin t}{1 - \\cos t} = \\frac{2\\sin\\frac{t}{2}\\cos\\frac{t}{2}}{2\\sin^{2}\\frac{t}{2}} = \\cot\\frac{t}{2}$. Then $\\frac{d^{2}y}{dx^{2}} = \\frac{d}{dt}\\left(\\cot\\frac{t}{2}\\right) \\cdot \\frac{dt}{dx} = -\\frac{1}{2}\\csc^{2}\\frac{t}{2} \\cdot \\frac{1}{a(1 - \\cos t)} = -\\frac{1}{2}\\csc^{2}\\frac{t}{2} \\cdot \\frac{1}{2a\\sin^{2}\\frac{t}{2}} = -\\frac{1}{4a\\sin^{4}\\frac{t}{2}}$. At $t = \\frac{\\pi}{2}$, $\\sin^{4}\\frac{\\pi}{4} = \\frac{1}{4}$, so $\\frac{d^{2}y}{dx^{2}} = -\\frac{1}{a}$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = \\cot\\frac{t}{2}$', marks: 1 },
      { step: 'Differentiates again with respect to $t$ and multiplies by $\\frac{dt}{dx}$', marks: 1 },
      { step: 'Evaluates at $t = \\frac{\\pi}{2}$ to get $-\\frac{1}{a}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c07', chapter: C, topic: SECOND, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y = \\log\\left(x + \\sqrt{1 + x^{2}}\\right)$, prove that $(1 + x^{2})\\frac{d^{2}y}{dx^{2}} + x\\frac{dy}{dx} = 0$.',
    answer: '$\\frac{dy}{dx} = \\frac{1}{x + \\sqrt{1 + x^{2}}}\\left(1 + \\frac{x}{\\sqrt{1 + x^{2}}}\\right) = \\frac{1}{x + \\sqrt{1 + x^{2}}} \\cdot \\frac{\\sqrt{1 + x^{2}} + x}{\\sqrt{1 + x^{2}}} = \\frac{1}{\\sqrt{1 + x^{2}}}$. So $\\sqrt{1 + x^{2}}\\,y\' = 1$. Differentiating: $\\sqrt{1 + x^{2}}\\,y\'\' + \\frac{x}{\\sqrt{1 + x^{2}}}y\' = 0$. Multiplying by $\\sqrt{1 + x^{2}}$: $(1 + x^{2})y\'\' + xy\' = 0$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 + x^{2}}}$', marks: 1 },
      { step: 'Differentiates $\\sqrt{1 + x^{2}}\\,y\' = 1$ again', marks: 1 },
      { step: 'Simplifies to the required relation', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-c08', chapter: C, topic: LOG, type: 'short', complexity: 'hard', marks: 3,
    text: 'If $x^{y} = y^{x}$, where $x, y > 0$, find $\\frac{dy}{dx}$.',
    answer: 'Take logs: $y\\log x = x\\log y$. Differentiate: $\\frac{dy}{dx}\\log x + \\frac{y}{x} = \\log y + \\frac{x}{y}\\frac{dy}{dx}$. Collect: $\\frac{dy}{dx}\\left(\\log x - \\frac{x}{y}\\right) = \\log y - \\frac{y}{x}$. Multiply numerator and denominator by $xy$: $\\frac{dy}{dx} = \\frac{y(x\\log y - y)}{x(y\\log x - x)}$.',
    steps: [
      { step: 'Takes logarithms: $y\\log x = x\\log y$', marks: 1 },
      { step: 'Differentiates both sides using the product rule', marks: 1 },
      { step: 'Solves to $\\frac{dy}{dx} = \\frac{y(x\\log y - y)}{x(y\\log x - x)}$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-cd-d01', chapter: C, topic: LOG, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $\\frac{dy}{dx}$ if $y = (\\tan x)^{\\cot x} + (\\cot x)^{\\tan x}$, $0 < x < \\frac{\\pi}{2}$.',
    answer: 'Let $u = (\\tan x)^{\\cot x}$ and $v = (\\cot x)^{\\tan x}$, so $y = u + v$.\n$\\log u = \\cot x\\log\\tan x$. Differentiating, $\\frac{1}{u}\\frac{du}{dx} = -\\csc^{2}x\\log\\tan x + \\cot x \\cdot \\frac{\\sec^{2}x}{\\tan x}$. Since $\\cot x \\cdot \\frac{\\sec^{2}x}{\\tan x} = \\cot^{2}x\\sec^{2}x = \\csc^{2}x$, $\\frac{du}{dx} = (\\tan x)^{\\cot x}\\csc^{2}x\\,(1 - \\log\\tan x)$.\n$\\log v = \\tan x\\log\\cot x$. Differentiating, $\\frac{1}{v}\\frac{dv}{dx} = \\sec^{2}x\\log\\cot x + \\tan x \\cdot \\frac{-\\csc^{2}x}{\\cot x}$. Since $\\tan^{2}x\\csc^{2}x = \\sec^{2}x$, $\\frac{dv}{dx} = (\\cot x)^{\\tan x}\\sec^{2}x\\,(\\log\\cot x - 1)$.\nHence $\\frac{dy}{dx} = (\\tan x)^{\\cot x}\\csc^{2}x\\,(1 - \\log\\tan x) + (\\cot x)^{\\tan x}\\sec^{2}x\\,(\\log\\cot x - 1)$.',
    steps: [
      { step: 'Splits $y = u + v$ and takes logarithms of each', marks: 1 },
      { step: 'Differentiates $\\log u$ correctly', marks: 1 },
      { step: 'Simplifies to $\\frac{du}{dx} = (\\tan x)^{\\cot x}\\csc^{2}x(1 - \\log\\tan x)$', marks: 1 },
      { step: 'Finds $\\frac{dv}{dx} = (\\cot x)^{\\tan x}\\sec^{2}x(\\log\\cot x - 1)$', marks: 1 },
      { step: 'Adds to state the final $\\frac{dy}{dx}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-d02', chapter: C, topic: CHAIN, type: 'long', complexity: 'hard', marks: 5,
    text: 'Consider the curve $x^{3} + y^{3} - 3xy = 3$.\n(a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.\n(b) Verify that $(2, 1)$ lies on the curve and find the values of $\\frac{dy}{dx}$ and $\\frac{d^{2}y}{dx^{2}}$ at $(2, 1)$.',
    answer: '(a) Differentiate: $3x^{2} + 3y^{2}y\' - 3y - 3xy\' = 0$, i.e. $x^{2} + y^{2}y\' - y - xy\' = 0$. So $y\'(y^{2} - x) = y - x^{2}$ and $\\frac{dy}{dx} = \\frac{y - x^{2}}{y^{2} - x}$.\n(b) At $(2, 1)$: $8 + 1 - 6 = 3$, so the point lies on the curve. $y\' = \\frac{1 - 4}{1 - 2} = 3$.\nDifferentiate $x^{2} + y^{2}y\' - y - xy\' = 0$ again: $2x + 2y(y\')^{2} + y^{2}y\'\' - y\' - y\' - xy\'\' = 0$, so $y\'\'(y^{2} - x) = 2y\' - 2x - 2y(y\')^{2}$. At $(2, 1)$ with $y\' = 3$: $y\'\'(1 - 2) = 6 - 4 - 18 = -16$, so $\\frac{d^{2}y}{dx^{2}} = 16$.',
    steps: [
      { step: 'Differentiates the relation implicitly', marks: 1 },
      { step: 'Gets $\\frac{dy}{dx} = \\frac{y - x^{2}}{y^{2} - x}$', marks: 1 },
      { step: 'Verifies $(2, 1)$ is on the curve and finds $y\' = 3$', marks: 1 },
      { step: 'Differentiates a second time correctly', marks: 1 },
      { step: 'Substitutes to get $\\frac{d^{2}y}{dx^{2}} = 16$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-d03', chapter: C, topic: INV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $u = \\tan^{-1}\\left(\\frac{\\sqrt{1 + x^{2}} - 1}{x}\\right)$ and $v = \\sin^{-1}\\left(\\frac{2x}{1 + x^{2}}\\right)$, where $-1 < x < 1$ and $x \\neq 0$. Find $\\frac{du}{dv}$.',
    answer: 'Put $x = \\tan\\theta$, where $-\\frac{\\pi}{4} < \\theta < \\frac{\\pi}{4}$, $\\theta \\neq 0$.\nFor $u$: $\\frac{\\sqrt{1 + \\tan^{2}\\theta} - 1}{\\tan\\theta} = \\frac{\\sec\\theta - 1}{\\tan\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^{2}\\frac{\\theta}{2}}{2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}} = \\tan\\frac{\\theta}{2}$. Since $\\frac{\\theta}{2} \\in \\left(-\\frac{\\pi}{8}, \\frac{\\pi}{8}\\right)$, $u = \\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1} x$, so $\\frac{du}{dx} = \\frac{1}{2(1 + x^{2})}$.\nFor $v$: $\\frac{2\\tan\\theta}{1 + \\tan^{2}\\theta} = \\sin 2\\theta$, and $2\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so $v = 2\\theta = 2\\tan^{-1} x$ and $\\frac{dv}{dx} = \\frac{2}{1 + x^{2}}$.\nTherefore $\\frac{du}{dv} = \\frac{1/(2(1 + x^{2}))}{2/(1 + x^{2})} = \\frac{1}{4}$.',
    steps: [
      { step: 'Uses the substitution $x = \\tan\\theta$ with the correct range', marks: 1 },
      { step: 'Simplifies $u = \\frac{1}{2}\\tan^{-1} x$', marks: 1 },
      { step: 'Simplifies $v = 2\\tan^{-1} x$', marks: 1 },
      { step: 'Finds $\\frac{du}{dx}$ and $\\frac{dv}{dx}$', marks: 1 },
      { step: 'Concludes $\\frac{du}{dv} = \\frac{1}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-d04', chapter: C, topic: PARAM, type: 'long', complexity: 'hard', marks: 5,
    text: 'If $x = e^{t}\\cos t$ and $y = e^{t}\\sin t$, find $\\frac{dy}{dx}$ and show that $\\frac{d^{2}y}{dx^{2}} = \\frac{2(x^{2} + y^{2})}{(x - y)^{3}}$. Hence find the values of $\\frac{dy}{dx}$ and $\\frac{d^{2}y}{dx^{2}}$ at $t = 0$.',
    answer: '$\\frac{dx}{dt} = e^{t}(\\cos t - \\sin t)$ and $\\frac{dy}{dt} = e^{t}(\\sin t + \\cos t)$. So $\\frac{dy}{dx} = \\frac{\\cos t + \\sin t}{\\cos t - \\sin t} = \\frac{x + y}{x - y}$ (multiplying top and bottom by $e^{t}$).\nDifferentiate $\\frac{dy}{dx} = \\frac{x + y}{x - y}$ with respect to $x$: $\\frac{d^{2}y}{dx^{2}} = \\frac{(1 + y\')(x - y) - (x + y)(1 - y\')}{(x - y)^{2}} = \\frac{2xy\' - 2y}{(x - y)^{2}}$. Substituting $y\' = \\frac{x + y}{x - y}$: $2xy\' - 2y = \\frac{2x(x + y) - 2y(x - y)}{x - y} = \\frac{2(x^{2} + y^{2})}{x - y}$. Hence $\\frac{d^{2}y}{dx^{2}} = \\frac{2(x^{2} + y^{2})}{(x - y)^{3}}$.\nAt $t = 0$: $x = 1$, $y = 0$. So $\\frac{dy}{dx} = \\frac{1 + 0}{1 - 0} = 1$ and $\\frac{d^{2}y}{dx^{2}} = \\frac{2(1 + 0)}{1^{3}} = 2$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$', marks: 1 },
      { step: 'Writes $\\frac{dy}{dx} = \\frac{x + y}{x - y}$', marks: 1 },
      { step: 'Differentiates again by the quotient rule', marks: 1 },
      { step: 'Substitutes $y\'$ and simplifies to $\\frac{2(x^{2} + y^{2})}{(x - y)^{3}}$', marks: 1 },
      { step: 'Evaluates at $t = 0$: $\\frac{dy}{dx} = 1$, $\\frac{d^{2}y}{dx^{2}} = 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-d05', chapter: C, topic: SECOND, type: 'long', complexity: 'medium', marks: 5,
    text: 'If $y = \\left(x + \\sqrt{x^{2} - 1}\\right)^{m}$, $x > 1$, prove that $(x^{2} - 1)\\frac{d^{2}y}{dx^{2}} + x\\frac{dy}{dx} - m^{2}y = 0$.',
    answer: '$\\frac{dy}{dx} = m\\left(x + \\sqrt{x^{2} - 1}\\right)^{m - 1}\\left(1 + \\frac{x}{\\sqrt{x^{2} - 1}}\\right) = m\\left(x + \\sqrt{x^{2} - 1}\\right)^{m - 1} \\cdot \\frac{\\sqrt{x^{2} - 1} + x}{\\sqrt{x^{2} - 1}} = \\frac{my}{\\sqrt{x^{2} - 1}}$.\nSo $\\sqrt{x^{2} - 1}\\,y\' = my$. Squaring: $(x^{2} - 1)(y\')^{2} = m^{2}y^{2}$.\nDifferentiating: $2x(y\')^{2} + (x^{2} - 1) \\cdot 2y\'y\'\' = 2m^{2}yy\'$.\nDividing by $2y\'$ (which is non-zero for $m \\neq 0$; for $m = 0$, $y = 1$ and the result is immediate): $(x^{2} - 1)y\'\' + xy\' = m^{2}y$, i.e. $(x^{2} - 1)y\'\' + xy\' - m^{2}y = 0$.',
    steps: [
      { step: 'Differentiates using the chain rule', marks: 1 },
      { step: 'Simplifies to $\\frac{dy}{dx} = \\frac{my}{\\sqrt{x^{2} - 1}}$', marks: 1 },
      { step: 'Squares to get $(x^{2} - 1)(y\')^{2} = m^{2}y^{2}$', marks: 1 },
      { step: 'Differentiates again correctly', marks: 1 },
      { step: 'Divides by $2y\'$ and reaches the required relation', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-d06', chapter: C, topic: LOG, type: 'long', complexity: 'hard', marks: 5,
    text: 'Differentiate $x^{\\sin x}$ with respect to $(\\sin x)^{x}$, for $0 < x < \\pi$.',
    answer: 'Let $u = x^{\\sin x}$ and $v = (\\sin x)^{x}$.\n$\\log u = \\sin x\\log x$, so $\\frac{1}{u}\\frac{du}{dx} = \\cos x\\log x + \\frac{\\sin x}{x}$ and $\\frac{du}{dx} = x^{\\sin x}\\left(\\cos x\\log x + \\frac{\\sin x}{x}\\right)$.\n$\\log v = x\\log\\sin x$, so $\\frac{1}{v}\\frac{dv}{dx} = \\log\\sin x + x\\cot x$ and $\\frac{dv}{dx} = (\\sin x)^{x}(\\log\\sin x + x\\cot x)$.\nHence $\\frac{du}{dv} = \\frac{du/dx}{dv/dx} = \\frac{x^{\\sin x}\\left(\\cos x\\log x + \\frac{\\sin x}{x}\\right)}{(\\sin x)^{x}(\\log\\sin x + x\\cot x)}$, wherever the denominator is non-zero.',
    steps: [
      { step: 'Takes logarithms of $u$ and differentiates', marks: 1 },
      { step: 'Gets $\\frac{du}{dx} = x^{\\sin x}\\left(\\cos x\\log x + \\frac{\\sin x}{x}\\right)$', marks: 1 },
      { step: 'Takes logarithms of $v$ and differentiates', marks: 1 },
      { step: 'Gets $\\frac{dv}{dx} = (\\sin x)^{x}(\\log\\sin x + x\\cot x)$', marks: 1 },
      { step: 'Divides to state $\\frac{du}{dv}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-cd-e01', chapter: C, topic: DIFF, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cycling park is building a ramp. Along the horizontal distance $x$ (in metres), the height of the ramp (in decimetres) is designed as $h(x) = x^{2} + 2$ for $0 \\le x \\le 2$ and $h(x) = ax + b$ for $2 < x \\le 5$, where $a$ and $b$ are constants. For a safe ride the ramp must have no gap (continuous) and no sharp corner (differentiable) at $x = 2$.',
    answer: '(i) $2a + b = 6$. (ii) $a = 4$. (iii) $a = 4$, $b = -2$, $h(5) = 18$ decimetres. OR: LHD $= 4$, RHD $= 3$, so not differentiable at $x = 2$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the condition on $a$ and $b$ for $h$ to be continuous at $x = 2$.',
        answer: 'LHL $= 2^{2} + 2 = 6$ and RHL $= 2a + b$. Continuity needs $2a + b = 6$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the condition for the left-hand and right-hand derivatives of $h$ at $x = 2$ to be equal, and find $a$.',
        answer: 'LHD $= 2x$ at $x = 2$ $= 4$; RHD $= a$. Equal derivatives need $a = 4$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $b$ and the height of the ramp at $x = 5$.\nOR\nIf instead the builder uses $a = 3$ and $b = 0$, show that the ramp is continuous at $x = 2$ but has a sharp corner there.',
        answer: 'With $a = 4$, $2(4) + b = 6$ gives $b = -2$. So $h(x) = 4x - 2$ on $(2, 5]$ and $h(5) = 20 - 2 = 18$ decimetres.\nOR: With $a = 3$, $b = 0$: RHL $= 3(2) = 6 =$ LHL $= h(2)$, so $h$ is continuous at $2$. LHD $= 4$ but RHD $= 3$, so $h$ is not differentiable at $x = 2$ (a sharp corner).',
      },
    ],
  },
  {
    id: 'c12-cd-e02', chapter: C, topic: CONT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A mall parking lot charges according to the time parked. For $t$ hours, the charge in rupees is $C(t) = 30t$ for $0 \\le t \\le 2$, $C(t) = at + b$ for $2 < t \\le 6$, and $C(t) = 150$ for $6 < t \\le 12$ (a daily cap). The mall wants the charge to change without sudden jumps, so $C$ must be continuous at $t = 2$ and $t = 6$.',
    answer: '(i) $2a + b = 60$. (ii) $6a + b = 150$. (iii) $a = 22.5$, $b = 15$, $C(4) = 105$ rupees. OR: LHD $= 22.5$, RHD $= 0$ at $t = 6$, so $C$ is not differentiable there.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the condition for $C$ to be continuous at $t = 2$.',
        answer: 'LHL $= 30(2) = 60$ and RHL $= 2a + b$. So $2a + b = 60$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the condition for $C$ to be continuous at $t = 6$.',
        answer: 'LHL $= 6a + b$ and RHL $= 150$. So $6a + b = 150$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $a$ and $b$, and the charge for parking $4$ hours.\nOR\nTaking the values of $a$ and $b$ that make $C$ continuous, show that $C$ is not differentiable at $t = 6$.',
        answer: 'Subtracting, $4a = 90$, so $a = 22.5$ and $b = 60 - 45 = 15$. Then $C(4) = 22.5 \\times 4 + 15 = 105$ rupees.\nOR: With $a = 22.5$, $b = 15$, $C$ is continuous at $6$ (both sides give $150$). LHD at $6$ $= a = 22.5$, while RHD $= 0$ since $C$ is constant after $6$. As $22.5 \\neq 0$, $C$ is not differentiable at $t = 6$.',
      },
    ],
  },
  {
    id: 'c12-cd-e03', chapter: C, topic: PARAM, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A drone is launched for a survey. After $t$ seconds its horizontal distance from the launch point is $x = 4t$ metres and its height is $y = 8t - t^{2}$ metres, for $0 \\le t \\le 8$.',
    answer: '(i) $\\frac{dy}{dx} = 2 - \\frac{t}{2}$. (ii) $t = 4$ s, at $(16, 16)$. (iii) $\\frac{d^{2}y}{dx^{2}} = -\\frac{1}{8}$. OR: slope $1$ at $x = 8$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\frac{dy}{dx}$ in terms of $t$.',
        answer: '$\\frac{dx}{dt} = 4$ and $\\frac{dy}{dt} = 8 - 2t$, so $\\frac{dy}{dx} = \\frac{8 - 2t}{4} = 2 - \\frac{t}{2}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'At what time is the path of the drone horizontal, and where is the drone then?',
        answer: '$\\frac{dy}{dx} = 0$ when $2 - \\frac{t}{2} = 0$, i.e. $t = 4$ seconds. Then $x = 16$ m and $y = 32 - 16 = 16$ m, so the drone is at $(16, 16)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $\\frac{d^{2}y}{dx^{2}}$.\nOR\nFind the slope of the path, $\\frac{dy}{dx}$, when the drone is $8$ m away horizontally from the launch point.',
        answer: '$\\frac{d^{2}y}{dx^{2}} = \\frac{d}{dt}\\left(2 - \\frac{t}{2}\\right) \\cdot \\frac{dt}{dx} = -\\frac{1}{2} \\cdot \\frac{1}{4} = -\\frac{1}{8}$.\nOR: $x = 8$ gives $t = 2$, so $\\frac{dy}{dx} = 2 - 1 = 1$.',
      },
    ],
  },
];
