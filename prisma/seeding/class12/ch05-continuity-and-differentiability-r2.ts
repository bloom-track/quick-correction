import type { Class12Question } from './types.js';

const C = 'Continuity and Differentiability';
const CONT = 'Continuity and finding unknown constants';
const DIFF = 'Differentiability';
const CHAIN = 'Chain rule and implicit differentiation';
const INV = 'Derivatives of inverse trigonometric functions';
const LOG = 'Logarithmic differentiation';
const PARAM = 'Parametric differentiation';
const SECOND = 'Second-order derivatives';

export const CH05_CD_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-cd-r2-a01', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $f(x) = \\frac{x^{2} - 5x + 6}{x - 2}$ for $x \\neq 2$ and $f(2) = k$, and $f$ is continuous at $x = 2$, then $k$ equals',
    options: ['$1$', '$0$', '$-1$', '$5$'],
    answer: 'Correct option: C) $-1$. For $x \\neq 2$, $\\frac{(x - 2)(x - 3)}{x - 2} = x - 3$, so $\\lim_{x \\to 2} f(x) = 2 - 3 = -1$ and continuity needs $k = -1$.',
  },
  {
    id: 'c12-cd-r2-a02', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = kx^{2}$ for $x \\le 2$ and $f(x) = 3$ for $x > 2$ is continuous at $x = 2$. The value of $k$ is',
    options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{3}{2}$', '$12$'],
    answer: 'Correct option: A) $\\frac{3}{4}$. The left-hand value is $f(2) = 4k$ and the right-hand limit is $3$. So $4k = 3$, giving $k = \\frac{3}{4}$.',
  },
  {
    id: 'c12-cd-r2-a03', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = \\frac{\\tan 4x}{\\sin 2x}$ for $x \\neq 0$ and $f(0) = k$ makes $f$ continuous at $x = 0$, then $k$ is',
    options: ['$\\frac{1}{2}$', '$2$', '$4$', '$8$'],
    answer: 'Correct option: B) $2$. $\\frac{\\tan 4x}{\\sin 2x} = \\frac{\\tan 4x}{4x} \\cdot \\frac{2x}{\\sin 2x} \\cdot 2 \\to 1 \\cdot 1 \\cdot 2 = 2$, so $k = 2$.',
  },
  {
    id: 'c12-cd-r2-a04', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $k$ for which $f(x) = \\frac{\\sin x - \\cos x}{x - \\frac{\\pi}{4}}$ for $x \\neq \\frac{\\pi}{4}$ and $f\\left(\\frac{\\pi}{4}\\right) = k$ is continuous at $x = \\frac{\\pi}{4}$ is',
    options: ['$\\frac{1}{\\sqrt{2}}$', '$0$', '$-\\sqrt{2}$', '$\\sqrt{2}$'],
    answer: 'Correct option: D) $\\sqrt{2}$. Put $x = \\frac{\\pi}{4} + h$. Then $\\sin x - \\cos x = \\sqrt{2}\\sin\\left(x - \\frac{\\pi}{4}\\right) = \\sqrt{2}\\sin h$, so $f = \\frac{\\sqrt{2}\\sin h}{h} \\to \\sqrt{2}$ as $h \\to 0$.',
  },
  {
    id: 'c12-cd-r2-a05', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = \\frac{x^{2} - 1}{x^{2} + 1}$ is',
    options: ['continuous at every real number', 'discontinuous only at $x = 1$', 'discontinuous only at $x = -1$', 'discontinuous at both $x = 1$ and $x = -1$'],
    answer: 'Correct option: A) continuous at every real number. It is a rational function whose denominator $x^{2} + 1$ is never zero, so it is continuous everywhere. The zeros of the numerator do not cause discontinuity.',
  },
  {
    id: 'c12-cd-r2-a06', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = \\frac{1 - \\sin x}{(\\pi - 2x)^{2}}$ for $x \\neq \\frac{\\pi}{2}$ and $f\\left(\\frac{\\pi}{2}\\right) = k$, and $f$ is continuous at $x = \\frac{\\pi}{2}$, then $k$ is',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{2}$', '$0$'],
    answer: 'Correct option: B) $\\frac{1}{8}$. Put $x = \\frac{\\pi}{2} - h$: $1 - \\sin x = 1 - \\cos h = 2\\sin^{2}\\frac{h}{2}$ and $(\\pi - 2x)^{2} = 4h^{2}$. So $f = \\frac{1}{8}\\left(\\frac{\\sin(h/2)}{h/2}\\right)^{2} \\to \\frac{1}{8}$.',
  },
  {
    id: 'c12-cd-r2-a07', chapter: C, topic: CONT, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The function $f(x) = \\frac{1}{x - 2}$ is continuous at every point of its domain.\nReason (R): A rational function is continuous at every point where its denominator is non-zero.',
    options: ['Both A and R are true, and R is the correct explanation of A.', 'Both A and R are true, but R is not the correct explanation of A.', 'A is true, but R is false.', 'A is false, but R is true.'],
    answer: 'Correct option: A) Both are true and R explains A. The domain of $f$ is all reals except $2$, which is exactly where the denominator is non-zero, so by R, $f$ is continuous at every point of its domain.',
  },
  {
    id: 'c12-cd-r2-a08', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f(x) = e^{|x|}$ at $x = 0$ is',
    options: ['continuous but not differentiable', 'differentiable but not continuous', 'both continuous and differentiable', 'neither continuous nor differentiable'],
    answer: 'Correct option: A) continuous but not differentiable. $f$ is a composition of continuous functions, so it is continuous. For $x < 0$, $f = e^{-x}$ with left derivative $-1$ at $0$; for $x > 0$, $f = e^{x}$ with right derivative $1$. Since $-1 \\neq 1$, $f$ is not differentiable at $0$.',
  },
  {
    id: 'c12-cd-r2-a09', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f(x) = x^{2}$ for $x \\le 1$ and $f(x) = 2x - 1$ for $x > 1$. At $x = 1$, $f$ is',
    options: ['continuous but not differentiable', 'differentiable but not continuous', 'both continuous and differentiable', 'neither continuous nor differentiable'],
    answer: 'Correct option: C) both continuous and differentiable. Both pieces give the value $1$ at $x = 1$, so $f$ is continuous. The left derivative is $2x = 2$ and the right derivative is $2$, so they agree and $f\'(1) = 2$.',
  },
  {
    id: 'c12-cd-r2-a10', chapter: C, topic: DIFF, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following functions is differentiable at $x = 0$?',
    options: ['$|x|$', '$|\\sin x|$', '$x + |x|$', '$\\cos|x|$'],
    answer: 'Correct option: D) $\\cos|x|$. Since cosine is even, $\\cos|x| = \\cos x$ for all $x$, which is differentiable everywhere. The others have unequal one-sided derivatives at $0$ ($-1$ and $1$ for the first two, $0$ and $2$ for $x + |x|$).',
  },
  {
    id: 'c12-cd-r2-a11', chapter: C, topic: DIFF, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $f(x) = |x - 1| + |x - 3|$, then $f\'(2)$ equals',
    options: ['$2$', '$0$', '$-2$', '$1$'],
    answer: 'Correct option: B) $0$. For $1 < x < 3$, $|x - 1| = x - 1$ and $|x - 3| = 3 - x$, so $f(x) = 2$, a constant. Hence $f\'(2) = 0$.',
  },
  {
    id: 'c12-cd-r2-a12', chapter: C, topic: DIFF, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): If a function is continuous at $x = a$, then it is differentiable at $x = a$.\nReason (R): The function $f(x) = |x|$ is continuous at $x = 0$ but not differentiable at $x = 0$.',
    options: ['Both A and R are true, and R is the correct explanation of A.', 'Both A and R are true, but R is not the correct explanation of A.', 'A is true, but R is false.', 'A is false, but R is true.'],
    answer: 'Correct option: D) A is false and R is true. R is a counterexample to A: $|x|$ is continuous at $0$, but its left and right derivatives there are $-1$ and $1$. Continuity does not imply differentiability.',
  },
  {
    id: 'c12-cd-r2-a13', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The derivative of $\\log\\left(\\cos x^{2}\\right)$ with respect to $x$ is',
    options: ['$-2x\\tan\\left(x^{2}\\right)$', '$-\\tan\\left(x^{2}\\right)$', '$2x\\tan\\left(x^{2}\\right)$', '$-2x\\cot\\left(x^{2}\\right)$'],
    answer: 'Correct option: A) $-2x\\tan\\left(x^{2}\\right)$. By the chain rule, $\\frac{1}{\\cos x^{2}} \\cdot \\left(-\\sin x^{2}\\right) \\cdot 2x = -2x\\tan\\left(x^{2}\\right)$.',
  },
  {
    id: 'c12-cd-r2-a14', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = e^{x^{2} + 3x}$, then $\\frac{dy}{dx}$ is',
    options: ['$e^{x^{2} + 3x}$', '$(x^{2} + 3x)e^{x^{2} + 3x - 1}$', '$(2x + 3)e^{x^{2} + 3x}$', '$(2x + 3)e^{2x + 3}$'],
    answer: 'Correct option: C) $(2x + 3)e^{x^{2} + 3x}$. $\\frac{d}{dx}e^{u} = e^{u}\\frac{du}{dx}$ with $u = x^{2} + 3x$, so $\\frac{du}{dx} = 2x + 3$.',
  },
  {
    id: 'c12-cd-r2-a15', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = \\sin(x + y)$, then $\\frac{dy}{dx}$ equals',
    options: ['$\\frac{\\cos(x + y)}{1 + \\cos(x + y)}$', '$\\frac{\\cos(x + y)}{1 - \\cos(x + y)}$', '$\\cos(x + y)$', '$\\frac{1 - \\cos(x + y)}{\\cos(x + y)}$'],
    answer: 'Correct option: B) $\\frac{\\cos(x + y)}{1 - \\cos(x + y)}$. Differentiating, $\\frac{dy}{dx} = \\cos(x + y)\\left(1 + \\frac{dy}{dx}\\right)$, so $\\frac{dy}{dx}\\left(1 - \\cos(x + y)\\right) = \\cos(x + y)$.',
  },
  {
    id: 'c12-cd-r2-a16', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $f(x) = \\sqrt{x^{2} + 9}$, then $f\'(4)$ is',
    options: ['$\\frac{1}{5}$', '$\\frac{8}{5}$', '$\\frac{1}{10}$', '$\\frac{4}{5}$'],
    answer: 'Correct option: D) $\\frac{4}{5}$. $f\'(x) = \\frac{2x}{2\\sqrt{x^{2} + 9}} = \\frac{x}{\\sqrt{x^{2} + 9}}$, so $f\'(4) = \\frac{4}{5}$.',
  },
  {
    id: 'c12-cd-r2-a17', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The derivative of $\\sin^{2} x$ with respect to $\\cos^{2} x$ is',
    options: ['$-1$', '$1$', '$-\\tan^{2} x$', '$\\tan x$'],
    answer: 'Correct option: A) $-1$. $\\frac{d}{dx}\\sin^{2} x = 2\\sin x\\cos x$ and $\\frac{d}{dx}\\cos^{2} x = -2\\cos x\\sin x$; their ratio is $-1$. (Indeed $\\sin^{2} x = 1 - \\cos^{2} x$.)',
  },
  {
    id: 'c12-cd-r2-a18', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The point $(1, 2)$ lies on the curve $x^{3} + y^{3} = 9$. The value of $\\frac{dy}{dx}$ at this point is',
    options: ['$-4$', '$\\frac{1}{4}$', '$-\\frac{1}{4}$', '$-\\frac{1}{2}$'],
    answer: 'Correct option: C) $-\\frac{1}{4}$. Differentiating, $3x^{2} + 3y^{2}\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x^{2}}{y^{2}} = -\\frac{1}{4}$ at $(1, 2)$.',
  },
  {
    id: 'c12-cd-r2-a19', chapter: C, topic: INV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $-\\frac{1}{2} < x < \\frac{1}{2}$, the derivative of $\\cos^{-1}(2x)$ with respect to $x$ is',
    options: ['$-\\frac{1}{\\sqrt{1 - 4x^{2}}}$', '$-\\frac{2}{\\sqrt{1 - 4x^{2}}}$', '$\\frac{2}{\\sqrt{1 - 4x^{2}}}$', '$-\\frac{2}{\\sqrt{1 - 2x^{2}}}$'],
    answer: 'Correct option: B) $-\\frac{2}{\\sqrt{1 - 4x^{2}}}$. $\\frac{d}{dx}\\cos^{-1} u = -\\frac{1}{\\sqrt{1 - u^{2}}}\\frac{du}{dx}$ with $u = 2x$, giving $-\\frac{2}{\\sqrt{1 - 4x^{2}}}$.',
  },
  {
    id: 'c12-cd-r2-a20', chapter: C, topic: INV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $x < 1$, the derivative of $\\tan^{-1}\\left(\\frac{1 + x}{1 - x}\\right)$ with respect to $x$ is',
    options: ['$\\frac{1}{1 + x^{2}}$', '$\\frac{2}{1 + x^{2}}$', '$-\\frac{1}{1 + x^{2}}$', '$0$'],
    answer: 'Correct option: A) $\\frac{1}{1 + x^{2}}$. Since $\\frac{1 + x}{1 - x} = \\frac{\\tan\\frac{\\pi}{4} + \\tan\\theta}{1 - \\tan\\frac{\\pi}{4}\\tan\\theta}$ with $x = \\tan\\theta$, $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{4}$, the expression equals $\\frac{\\pi}{4} + \\tan^{-1} x$, whose derivative is $\\frac{1}{1 + x^{2}}$.',
  },
  {
    id: 'c12-cd-r2-a21', chapter: C, topic: INV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $0 < x < 1$, the derivative of $\\cos^{-1}\\left(2x^{2} - 1\\right)$ with respect to $x$ is',
    options: ['$\\frac{2}{\\sqrt{1 - x^{2}}}$', '$-\\frac{1}{\\sqrt{1 - x^{2}}}$', '$-\\frac{4x}{\\sqrt{1 - x^{2}}}$', '$-\\frac{2}{\\sqrt{1 - x^{2}}}$'],
    answer: 'Correct option: D) $-\\frac{2}{\\sqrt{1 - x^{2}}}$. Put $x = \\cos\\theta$ with $0 < \\theta < \\frac{\\pi}{2}$. Then $2x^{2} - 1 = \\cos 2\\theta$ and $0 < 2\\theta < \\pi$, so the expression is $2\\theta = 2\\cos^{-1} x$, with derivative $-\\frac{2}{\\sqrt{1 - x^{2}}}$.',
  },
  {
    id: 'c12-cd-r2-a22', chapter: C, topic: LOG, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): For $x > 0$, $\\frac{d}{dx}\\left(x^{x}\\right) = x \\cdot x^{x - 1}$.\nReason (R): When both the base and the exponent are functions of $x$, the derivative is found by first taking logarithms.',
    options: ['Both A and R are true, and R is the correct explanation of A.', 'Both A and R are true, but R is not the correct explanation of A.', 'A is true, but R is false.', 'A is false, but R is true.'],
    answer: 'Correct option: D) A is false and R is true. The power rule needs a constant exponent. Taking logs, $\\log y = x\\log x$, so $\\frac{dy}{dx} = x^{x}(1 + \\log x)$, not $x \\cdot x^{x - 1} = x^{x}$.',
  },
  {
    id: 'c12-cd-r2-a23', chapter: C, topic: LOG, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $y = x^{x^{2}}$, $x > 0$, then the value of $\\frac{dy}{dx}$ at $x = e$ is',
    options: ['$e^{e^{2} + 1}$', '$2e^{e^{2} + 1}$', '$3e^{e^{2} + 1}$', '$3e^{e^{2}}$'],
    answer: 'Correct option: C) $3e^{e^{2} + 1}$. $\\log y = x^{2}\\log x$, so $\\frac{1}{y}\\frac{dy}{dx} = 2x\\log x + x$. At $x = e$, $y = e^{e^{2}}$ and the bracket is $2e + e = 3e$, so $\\frac{dy}{dx} = 3e \\cdot e^{e^{2}} = 3e^{e^{2} + 1}$.',
  },
  {
    id: 'c12-cd-r2-a24', chapter: C, topic: PARAM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $x = \\sec\\theta$ and $y = \\tan\\theta$, then $\\frac{dy}{dx}$ is',
    options: ['$\\sin\\theta$', '$\\csc\\theta$', '$\\sec\\theta$', '$\\cot\\theta$'],
    answer: 'Correct option: B) $\\csc\\theta$. $\\frac{dy}{d\\theta} = \\sec^{2}\\theta$ and $\\frac{dx}{d\\theta} = \\sec\\theta\\tan\\theta$, so $\\frac{dy}{dx} = \\frac{\\sec\\theta}{\\tan\\theta} = \\frac{1}{\\sin\\theta} = \\csc\\theta$.',
  },
  {
    id: 'c12-cd-r2-a25', chapter: C, topic: PARAM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $x = \\log t$ and $y = t^{2}$, $t > 0$, then $\\frac{dy}{dx}$ is',
    options: ['$2t^{2}$', '$2t$', '$\\frac{2}{t}$', '$\\frac{t^{2}}{2}$'],
    answer: 'Correct option: A) $2t^{2}$. $\\frac{dy}{dt} = 2t$ and $\\frac{dx}{dt} = \\frac{1}{t}$, so $\\frac{dy}{dx} = 2t \\cdot t = 2t^{2}$.',
  },
  {
    id: 'c12-cd-r2-a26', chapter: C, topic: SECOND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $y = xe^{x}$, then $\\frac{d^{2}y}{dx^{2}}$ is',
    options: ['$(x + 1)e^{x}$', '$xe^{x}$', '$2e^{x}$', '$(x + 2)e^{x}$'],
    answer: 'Correct option: D) $(x + 2)e^{x}$. $\\frac{dy}{dx} = e^{x} + xe^{x} = (x + 1)e^{x}$, and differentiating again gives $e^{x} + (x + 1)e^{x} = (x + 2)e^{x}$.',
  },
  {
    id: 'c12-cd-r2-a27', chapter: C, topic: SECOND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = \\tan x$, then $\\frac{d^{2}y}{dx^{2}}$ in terms of $y$ is',
    options: ['$1 + y^{2}$', '$2y$', '$2y(1 + y^{2})$', '$2(1 + y^{2})$'],
    answer: 'Correct option: C) $2y(1 + y^{2})$. $\\frac{dy}{dx} = \\sec^{2} x = 1 + y^{2}$. Differentiating again, $\\frac{d^{2}y}{dx^{2}} = 2y\\frac{dy}{dx} = 2y(1 + y^{2})$.',
  },
  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-cd-r2-b01', chapter: C, topic: CONT, type: 'short', complexity: 'easy', marks: 2,
    text: 'Examine whether the function $f(x) = \\frac{x^{2} - 3x - 10}{x - 5}$ for $x \\neq 5$, with $f(5) = 8$, is continuous at $x = 5$. If it is not, state the value of $f(5)$ that would make it continuous.',
    answer: 'For $x \\neq 5$, $\\frac{x^{2} - 3x - 10}{x - 5} = \\frac{(x - 5)(x + 2)}{x - 5} = x + 2$, so $\\lim_{x \\to 5} f(x) = 7$. Since $f(5) = 8 \\neq 7$, $f$ is not continuous at $x = 5$. Redefining $f(5) = 7$ would make it continuous.',
    steps: [
      { step: 'Factorises and finds $\\lim_{x \\to 5} f(x) = 7$', marks: 1 },
      { step: 'Concludes $f$ is discontinuous at $5$ and that $f(5) = 7$ would make it continuous', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b02', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $k$ for which $f(x) = \\frac{\\tan x - \\sin x}{x^{3}}$ for $x \\neq 0$, with $f(0) = k$, is continuous at $x = 0$.',
    answer: '$\\tan x - \\sin x = \\tan x(1 - \\cos x) = \\tan x \\cdot 2\\sin^{2}\\frac{x}{2}$. So $f(x) = \\frac{\\tan x}{x} \\cdot \\frac{2\\sin^{2}(x/2)}{x^{2}} = \\frac{\\tan x}{x} \\cdot \\frac{1}{2}\\left(\\frac{\\sin(x/2)}{x/2}\\right)^{2}$. As $x \\to 0$ this tends to $1 \\cdot \\frac{1}{2} \\cdot 1 = \\frac{1}{2}$. For continuity, $k = \\frac{1}{2}$.',
    steps: [
      { step: 'Rewrites $\\tan x - \\sin x = \\tan x \\cdot 2\\sin^{2}\\frac{x}{2}$ and splits into standard limits', marks: 1 },
      { step: 'Finds the limit $\\frac{1}{2}$ and states $k = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b03', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the function $f(x) = x - [x]$, where $[x]$ is the greatest integer less than or equal to $x$, is discontinuous at every integer.',
    answer: 'Let $n$ be any integer. Then $f(n) = n - n = 0$. For $n - 1 \\le x < n$, $[x] = n - 1$, so the left-hand limit is $\\lim_{x \\to n^-}(x - n + 1) = 1$. For $n \\le x < n + 1$, $[x] = n$, so the right-hand limit is $\\lim_{x \\to n^+}(x - n) = 0$. Since the left-hand limit $1 \\neq 0 = f(n)$, $f$ is discontinuous at $x = n$. As $n$ was any integer, $f$ is discontinuous at every integer.',
    steps: [
      { step: 'Finds $f(n) = 0$, LHL $= 1$ and RHL $= 0$ at an integer $n$', marks: 1 },
      { step: 'Concludes discontinuity at every integer since LHL $\\neq f(n)$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b04', chapter: C, topic: DIFF, type: 'short', complexity: 'easy', marks: 2,
    text: 'Show that $f(x) = x^{2} + 3x$ for $x < 0$ and $f(x) = \\sin 3x$ for $x \\ge 0$ is differentiable at $x = 0$, and find $f\'(0)$.',
    answer: '$f(0) = \\sin 0 = 0$. LHD $= \\lim_{h \\to 0^-}\\frac{(h^{2} + 3h) - 0}{h} = \\lim_{h \\to 0^-}(h + 3) = 3$. RHD $= \\lim_{h \\to 0^+}\\frac{\\sin 3h - 0}{h} = 3\\lim_{h \\to 0^+}\\frac{\\sin 3h}{3h} = 3$. Since LHD $=$ RHD, $f$ is differentiable at $x = 0$ and $f\'(0) = 3$.',
    steps: [
      { step: 'Finds LHD $= 3$', marks: 1 },
      { step: 'Finds RHD $= 3$ and concludes $f\'(0) = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b05', chapter: C, topic: DIFF, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the left-hand and right-hand derivatives of $f(x) = |x^{2} - 9|$ at $x = 3$, and hence decide whether $f$ is differentiable at $x = 3$.',
    answer: '$f(3) = 0$. Just to the left of $3$ (for $-3 < x < 3$), $x^{2} - 9 < 0$, so $f(x) = 9 - x^{2}$ and LHD $= \\lim_{h \\to 0^-}\\frac{9 - (3 + h)^{2}}{h} = \\lim_{h \\to 0^-}(-6 - h) = -6$. For $x > 3$, $f(x) = x^{2} - 9$ and RHD $= \\lim_{h \\to 0^+}\\frac{(3 + h)^{2} - 9}{h} = \\lim_{h \\to 0^+}(6 + h) = 6$. Since $-6 \\neq 6$, $f$ is not differentiable at $x = 3$.',
    steps: [
      { step: 'Finds LHD $= -6$ using $f(x) = 9 - x^{2}$ to the left of $3$', marks: 1 },
      { step: 'Finds RHD $= 6$ and concludes $f$ is not differentiable at $3$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b06', chapter: C, topic: CHAIN, type: 'short', complexity: 'easy', marks: 2,
    text: 'Differentiate $y = \\cos\\left(\\sqrt{x^{2} + 1}\\right)$ with respect to $x$.',
    answer: 'By the chain rule, $\\frac{dy}{dx} = -\\sin\\left(\\sqrt{x^{2} + 1}\\right) \\cdot \\frac{1}{2\\sqrt{x^{2} + 1}} \\cdot 2x = -\\frac{x\\sin\\left(\\sqrt{x^{2} + 1}\\right)}{\\sqrt{x^{2} + 1}}$.',
    steps: [
      { step: 'Differentiates the outer cosine and the square root correctly', marks: 1 },
      { step: 'Multiplies by $2x$ and simplifies to the final answer', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b07', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $\\cos(xy) = x + y$, find $\\frac{dy}{dx}$.',
    answer: 'Differentiating both sides: $-\\sin(xy)\\left(y + x\\frac{dy}{dx}\\right) = 1 + \\frac{dy}{dx}$. So $-y\\sin(xy) - 1 = \\frac{dy}{dx}\\left(1 + x\\sin(xy)\\right)$, giving $\\frac{dy}{dx} = -\\frac{1 + y\\sin(xy)}{1 + x\\sin(xy)}$.',
    steps: [
      { step: 'Differentiates $\\cos(xy)$ using the chain and product rules', marks: 1 },
      { step: 'Collects terms to get $\\frac{dy}{dx} = -\\frac{1 + y\\sin(xy)}{1 + x\\sin(xy)}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b08', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\sqrt{\\frac{1 - \\sin 2x}{1 + \\sin 2x}}$, $0 < x < \\frac{\\pi}{4}$.',
    answer: '$1 - \\sin 2x = (\\cos x - \\sin x)^{2}$ and $1 + \\sin 2x = (\\cos x + \\sin x)^{2}$. On $\\left(0, \\frac{\\pi}{4}\\right)$, $\\cos x > \\sin x > 0$, so $y = \\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = \\frac{1 - \\tan x}{1 + \\tan x} = \\tan\\left(\\frac{\\pi}{4} - x\\right)$. Hence $\\frac{dy}{dx} = -\\sec^{2}\\left(\\frac{\\pi}{4} - x\\right)$.',
    steps: [
      { step: 'Simplifies $y = \\tan\\left(\\frac{\\pi}{4} - x\\right)$ using the perfect squares and the sign on the interval', marks: 1 },
      { step: 'Differentiates to get $-\\sec^{2}\\left(\\frac{\\pi}{4} - x\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b09', chapter: C, topic: INV, type: 'short', complexity: 'hard', marks: 2,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\sin^{-1}\\left(\\frac{5x + 12\\sqrt{1 - x^{2}}}{13}\\right)$, where $-1 < x < \\frac{5}{13}$.',
    answer: 'Let $x = \\sin\\theta$ with $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$, so $\\sqrt{1 - x^{2}} = \\cos\\theta$. Let $\\alpha$ be the acute angle with $\\cos\\alpha = \\frac{5}{13}$, $\\sin\\alpha = \\frac{12}{13}$. Then $\\frac{5\\sin\\theta + 12\\cos\\theta}{13} = \\sin\\theta\\cos\\alpha + \\cos\\theta\\sin\\alpha = \\sin(\\theta + \\alpha)$. The condition $x < \\frac{5}{13} = \\cos\\alpha = \\sin\\left(\\frac{\\pi}{2} - \\alpha\\right)$ gives $\\theta < \\frac{\\pi}{2} - \\alpha$, so $-\\frac{\\pi}{2} < \\theta + \\alpha < \\frac{\\pi}{2}$. Hence $y = \\theta + \\alpha = \\sin^{-1} x + \\alpha$, and $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^{2}}}$.',
    steps: [
      { step: 'Substitutes $x = \\sin\\theta$ and writes the expression as $\\sin(\\theta + \\alpha)$', marks: 1 },
      { step: 'Justifies the range, gets $y = \\sin^{-1} x + \\alpha$ and $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b10', chapter: C, topic: INV, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\tan^{-1}\\left(\\frac{x}{\\sqrt{1 - x^{2}}}\\right)$, $-1 < x < 1$.',
    answer: 'Put $x = \\sin\\theta$ with $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$, so $\\sqrt{1 - x^{2}} = \\cos\\theta > 0$. Then $\\frac{x}{\\sqrt{1 - x^{2}}} = \\tan\\theta$ and $y = \\tan^{-1}(\\tan\\theta) = \\theta = \\sin^{-1} x$. Hence $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^{2}}}$.',
    steps: [
      { step: 'Simplifies $y = \\sin^{-1} x$', marks: 1 },
      { step: 'States $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b11', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 2,
    text: 'Differentiate $y = (\\sin x)^{\\log x}$, $0 < x < \\pi$, with respect to $x$.',
    answer: 'Taking logarithms, $\\log y = \\log x \\cdot \\log(\\sin x)$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{1}{x}\\log(\\sin x) + \\log x \\cdot \\frac{\\cos x}{\\sin x}$. Hence $\\frac{dy}{dx} = (\\sin x)^{\\log x}\\left[\\frac{\\log(\\sin x)}{x} + \\cot x\\log x\\right]$.',
    steps: [
      { step: 'Takes logarithms and differentiates the product correctly', marks: 1 },
      { step: 'Writes $\\frac{dy}{dx} = (\\sin x)^{\\log x}\\left[\\frac{\\log(\\sin x)}{x} + \\cot x\\log x\\right]$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b12', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $y = \\frac{(2x + 1)^{3}\\sqrt{x^{2} + 1}}{(x - 3)^{4}}$, use logarithmic differentiation to find the value of $\\frac{dy}{dx}$ at $x = 0$.',
    answer: 'Near $x = 0$, $2x + 1 > 0$ and $(x - 3)^{4} = (3 - x)^{4}$ with $3 - x > 0$. Taking logarithms, $\\log y = 3\\log(2x + 1) + \\frac{1}{2}\\log(x^{2} + 1) - 4\\log(3 - x)$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{6}{2x + 1} + \\frac{x}{x^{2} + 1} + \\frac{4}{3 - x}$. At $x = 0$: $y = \\frac{1 \\cdot 1}{81} = \\frac{1}{81}$ and the bracket is $6 + 0 + \\frac{4}{3} = \\frac{22}{3}$. So $\\frac{dy}{dx} = \\frac{1}{81} \\cdot \\frac{22}{3} = \\frac{22}{243}$.',
    steps: [
      { step: 'Takes logarithms and differentiates to get $\\frac{1}{y}\\frac{dy}{dx} = \\frac{6}{2x + 1} + \\frac{x}{x^{2} + 1} + \\frac{4}{3 - x}$', marks: 1 },
      { step: 'Evaluates at $x = 0$ to get $\\frac{22}{243}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b13', chapter: C, topic: PARAM, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $x = \\frac{2t}{1 + t^{2}}$ and $y = \\frac{1 - t^{2}}{1 + t^{2}}$, show that $\\frac{dy}{dx} = -\\frac{x}{y}$ (for $t \\neq \\pm 1$).',
    answer: '$\\frac{dx}{dt} = \\frac{2(1 + t^{2}) - 2t \\cdot 2t}{(1 + t^{2})^{2}} = \\frac{2(1 - t^{2})}{(1 + t^{2})^{2}}$ and $\\frac{dy}{dt} = \\frac{-2t(1 + t^{2}) - (1 - t^{2})2t}{(1 + t^{2})^{2}} = \\frac{-4t}{(1 + t^{2})^{2}}$. So $\\frac{dy}{dx} = \\frac{-4t}{2(1 - t^{2})} = -\\frac{2t}{1 - t^{2}}$. Also $-\\frac{x}{y} = -\\frac{2t/(1 + t^{2})}{(1 - t^{2})/(1 + t^{2})} = -\\frac{2t}{1 - t^{2}}$. Hence $\\frac{dy}{dx} = -\\frac{x}{y}$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$ by the quotient rule', marks: 1 },
      { step: 'Gets $\\frac{dy}{dx} = -\\frac{2t}{1 - t^{2}}$ and shows it equals $-\\frac{x}{y}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b14', chapter: C, topic: PARAM, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $x = \\log(1 + t^{2})$ and $y = t - \\tan^{-1} t$, find $\\frac{dy}{dx}$ and its value at $t = 3$.',
    answer: '$\\frac{dx}{dt} = \\frac{2t}{1 + t^{2}}$ and $\\frac{dy}{dt} = 1 - \\frac{1}{1 + t^{2}} = \\frac{t^{2}}{1 + t^{2}}$. So $\\frac{dy}{dx} = \\frac{t^{2}}{2t} = \\frac{t}{2}$ (for $t \\neq 0$). At $t = 3$, $\\frac{dy}{dx} = \\frac{3}{2}$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$', marks: 1 },
      { step: 'Gets $\\frac{dy}{dx} = \\frac{t}{2}$ and the value $\\frac{3}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-b15', chapter: C, topic: SECOND, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $y = \\frac{\\log x}{x}$, $x > 0$, show that $x^{2}\\frac{d^{2}y}{dx^{2}} + 3x\\frac{dy}{dx} + y = 0$.',
    answer: 'Write $xy = \\log x$. Differentiating, $y + x\\frac{dy}{dx} = \\frac{1}{x}$, i.e. $xy + x^{2}\\frac{dy}{dx} = 1$. Differentiating $y + xy\' = \\frac{1}{x}$ again: $2y\' + xy\'\' = -\\frac{1}{x^{2}}$, so $x^{3}y\'\' + 2x^{2}y\' = -1 = -(xy + x^{2}y\')$. Hence $x^{3}y\'\' + 3x^{2}y\' + xy = 0$, and dividing by $x$, $x^{2}y\'\' + 3xy\' + y = 0$.',
    steps: [
      { step: 'Differentiates $xy = \\log x$ to get $y + xy\' = \\frac{1}{x}$', marks: 1 },
      { step: 'Differentiates again and eliminates to reach the required relation', marks: 1 },
    ],
  },
  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-cd-r2-c01', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the values of $a$ and $b$ if the function $f(x) = \\frac{1 - \\cos ax}{x\\sin x}$ for $x < 0$, $f(0) = 2$, and $f(x) = \\frac{\\sqrt{1 + bx} - 1}{x}$ for $x > 0$ is continuous at $x = 0$.',
    answer: 'LHL: $1 - \\cos ax = 2\\sin^{2}\\frac{ax}{2}$, so $\\frac{1 - \\cos ax}{x\\sin x} = \\frac{a^{2}}{2}\\left(\\frac{\\sin(ax/2)}{ax/2}\\right)^{2} \\cdot \\frac{x}{\\sin x} \\to \\frac{a^{2}}{2}$ (for $a \\neq 0$; if $a = 0$ the left piece is $0$ and continuity fails). RHL: $\\frac{\\sqrt{1 + bx} - 1}{x} = \\frac{bx}{x(\\sqrt{1 + bx} + 1)} = \\frac{b}{\\sqrt{1 + bx} + 1} \\to \\frac{b}{2}$. Continuity needs LHL $=$ RHL $= f(0) = 2$: $\\frac{a^{2}}{2} = 2$ gives $a = \\pm 2$, and $\\frac{b}{2} = 2$ gives $b = 4$.',
    steps: [
      { step: 'Finds LHL $= \\frac{a^{2}}{2}$', marks: 1 },
      { step: 'Finds RHL $= \\frac{b}{2}$ by rationalising', marks: 1 },
      { step: 'Equates to $2$ and gets $a = \\pm 2$, $b = 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c02', chapter: C, topic: DIFF, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $f(x) = [x]\\sin(\\pi x)$, where $[x]$ is the greatest integer less than or equal to $x$. Show that $f$ is continuous at $x = 1$ but not differentiable at $x = 1$.',
    answer: '$f(1) = 1 \\cdot \\sin\\pi = 0$. For $0 \\le x < 1$, $[x] = 0$, so $f(x) = 0$ and LHL $= 0$. For $1 \\le x < 2$, $[x] = 1$, so $f(x) = \\sin\\pi x$ and RHL $= \\sin\\pi = 0$. Hence $f$ is continuous at $x = 1$.\nLHD $= \\lim_{h \\to 0^-}\\frac{0 - 0}{h} = 0$.\nRHD $= \\lim_{h \\to 0^+}\\frac{\\sin(\\pi + \\pi h) - 0}{h} = \\lim_{h \\to 0^+}\\frac{-\\sin\\pi h}{h} = -\\pi$.\nSince $0 \\neq -\\pi$, $f$ is not differentiable at $x = 1$.',
    steps: [
      { step: 'Shows LHL $=$ RHL $= f(1) = 0$, so $f$ is continuous', marks: 1 },
      { step: 'Finds LHD $= 0$', marks: 1 },
      { step: 'Finds RHD $= -\\pi$ and concludes $f$ is not differentiable at $1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c03', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y\\sqrt{1 - x^{2}} + x\\sqrt{1 - y^{2}} = \\frac{1}{2}$, where $-1 < x < 1$ and $-1 < y < 1$, prove that $\\frac{dy}{dx} = -\\sqrt{\\frac{1 - y^{2}}{1 - x^{2}}}$.',
    answer: 'Put $x = \\sin A$ and $y = \\sin B$ with $A, B \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, so $\\sqrt{1 - x^{2}} = \\cos A$ and $\\sqrt{1 - y^{2}} = \\cos B$. The relation becomes $\\sin B\\cos A + \\sin A\\cos B = \\frac{1}{2}$, i.e. $\\sin(A + B) = \\frac{1}{2}$. Since $A + B$ lies in $(-\\pi, \\pi)$, it equals $\\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$; either way it is a constant. So $\\sin^{-1} x + \\sin^{-1} y = $ constant. Differentiating, $\\frac{1}{\\sqrt{1 - x^{2}}} + \\frac{1}{\\sqrt{1 - y^{2}}}\\frac{dy}{dx} = 0$, hence $\\frac{dy}{dx} = -\\frac{\\sqrt{1 - y^{2}}}{\\sqrt{1 - x^{2}}} = -\\sqrt{\\frac{1 - y^{2}}{1 - x^{2}}}$.',
    steps: [
      { step: 'Substitutes $x = \\sin A$, $y = \\sin B$ and gets $\\sin(A + B) = \\frac{1}{2}$', marks: 1 },
      { step: 'Concludes $\\sin^{-1} x + \\sin^{-1} y$ is constant', marks: 1 },
      { step: 'Differentiates to obtain the required result', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c04', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\frac{\\sin x - x\\cos x}{x\\sin x + \\cos x}$, and simplify your answer.',
    answer: 'Let $N = \\sin x - x\\cos x$ and $D = x\\sin x + \\cos x$. Then $N\' = \\cos x - \\cos x + x\\sin x = x\\sin x$ and $D\' = \\sin x + x\\cos x - \\sin x = x\\cos x$. By the quotient rule, $\\frac{dy}{dx} = \\frac{x\\sin x(x\\sin x + \\cos x) - x\\cos x(\\sin x - x\\cos x)}{(x\\sin x + \\cos x)^{2}} = \\frac{x^{2}\\sin^{2} x + x^{2}\\cos^{2} x}{(x\\sin x + \\cos x)^{2}} = \\frac{x^{2}}{(x\\sin x + \\cos x)^{2}}$.',
    steps: [
      { step: 'Finds $N\' = x\\sin x$ and $D\' = x\\cos x$', marks: 1 },
      { step: 'Applies the quotient rule correctly', marks: 1 },
      { step: 'Simplifies to $\\frac{x^{2}}{(x\\sin x + \\cos x)^{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c05', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\tan^{-1}\\left(\\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{\\sqrt{1 + x} + \\sqrt{1 - x}}\\right)$, $-1 < x < 1$.',
    answer: 'Put $x = \\cos 2\\theta$ with $0 < \\theta < \\frac{\\pi}{2}$. Then $\\sqrt{1 + x} = \\sqrt{2}\\cos\\theta$ and $\\sqrt{1 - x} = \\sqrt{2}\\sin\\theta$. The fraction becomes $\\frac{\\cos\\theta - \\sin\\theta}{\\cos\\theta + \\sin\\theta} = \\frac{1 - \\tan\\theta}{1 + \\tan\\theta} = \\tan\\left(\\frac{\\pi}{4} - \\theta\\right)$. Since $-\\frac{\\pi}{4} < \\frac{\\pi}{4} - \\theta < \\frac{\\pi}{4}$, $y = \\frac{\\pi}{4} - \\theta = \\frac{\\pi}{4} - \\frac{1}{2}\\cos^{-1} x$. Hence $\\frac{dy}{dx} = -\\frac{1}{2} \\cdot \\left(-\\frac{1}{\\sqrt{1 - x^{2}}}\\right) = \\frac{1}{2\\sqrt{1 - x^{2}}}$.',
    steps: [
      { step: 'Substitutes $x = \\cos 2\\theta$ and simplifies the roots', marks: 1 },
      { step: 'Gets $y = \\frac{\\pi}{4} - \\frac{1}{2}\\cos^{-1} x$ with the range justified', marks: 1 },
      { step: 'Finds $\\frac{dy}{dx} = \\frac{1}{2\\sqrt{1 - x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c06', chapter: C, topic: INV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $y = \\sin^{-1}\\left(\\frac{1 - x^{2}}{1 + x^{2}}\\right) + \\cos^{-1}\\left(\\frac{2x}{1 + x^{2}}\\right)$. Find $\\frac{dy}{dx}$ when (i) $0 < x < 1$ and (ii) $x > 1$.',
    answer: 'Put $x = \\tan\\theta$ with $0 < \\theta < \\frac{\\pi}{2}$. Then $\\frac{1 - x^{2}}{1 + x^{2}} = \\cos 2\\theta$ and $\\frac{2x}{1 + x^{2}} = \\sin 2\\theta$.\n(i) $0 < x < 1$: $0 < 2\\theta < \\frac{\\pi}{2}$. $\\sin^{-1}(\\cos 2\\theta) = \\sin^{-1}\\sin\\left(\\frac{\\pi}{2} - 2\\theta\\right) = \\frac{\\pi}{2} - 2\\theta$ and $\\cos^{-1}(\\sin 2\\theta) = \\cos^{-1}\\cos\\left(\\frac{\\pi}{2} - 2\\theta\\right) = \\frac{\\pi}{2} - 2\\theta$. So $y = \\pi - 4\\theta = \\pi - 4\\tan^{-1} x$ and $\\frac{dy}{dx} = -\\frac{4}{1 + x^{2}}$.\n(ii) $x > 1$: $\\frac{\\pi}{2} < 2\\theta < \\pi$. Now $\\frac{\\pi}{2} - 2\\theta \\in \\left(-\\frac{\\pi}{2}, 0\\right)$, so $\\sin^{-1}(\\cos 2\\theta) = \\frac{\\pi}{2} - 2\\theta$ still; but $\\sin 2\\theta = \\cos\\left(2\\theta - \\frac{\\pi}{2}\\right)$ with $2\\theta - \\frac{\\pi}{2} \\in \\left(0, \\frac{\\pi}{2}\\right)$, so $\\cos^{-1}(\\sin 2\\theta) = 2\\theta - \\frac{\\pi}{2}$. Then $y = 0$ for all $x > 1$, and $\\frac{dy}{dx} = 0$.',
    steps: [
      { step: 'Substitutes $x = \\tan\\theta$ and rewrites both arguments', marks: 1 },
      { step: 'Case (i): $y = \\pi - 4\\tan^{-1} x$, $\\frac{dy}{dx} = -\\frac{4}{1 + x^{2}}$', marks: 1 },
      { step: 'Case (ii): $y = 0$, so $\\frac{dy}{dx} = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c07', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = (2x + 3)^{x - 5} + x^{\\sqrt{x}}$, $x > 0$.',
    answer: 'Let $u = (2x + 3)^{x - 5}$ and $v = x^{\\sqrt{x}}$.\n$\\log u = (x - 5)\\log(2x + 3)$, so $\\frac{1}{u}\\frac{du}{dx} = \\log(2x + 3) + \\frac{2(x - 5)}{2x + 3}$.\n$\\log v = \\sqrt{x}\\log x$, so $\\frac{1}{v}\\frac{dv}{dx} = \\frac{\\log x}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x} = \\frac{\\log x + 2}{2\\sqrt{x}}$.\nHence $\\frac{dy}{dx} = (2x + 3)^{x - 5}\\left[\\log(2x + 3) + \\frac{2(x - 5)}{2x + 3}\\right] + x^{\\sqrt{x}} \\cdot \\frac{2 + \\log x}{2\\sqrt{x}}$.',
    steps: [
      { step: 'Finds $\\frac{du}{dx}$ by logarithms', marks: 1 },
      { step: 'Finds $\\frac{dv}{dx}$ by logarithms', marks: 1 },
      { step: 'Adds to give the final $\\frac{dy}{dx}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c08', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $f(x) = (1 + x)(1 + x^{2})(1 + x^{4})(1 + x^{8})$, use logarithmic differentiation to find $f\'(1)$.',
    answer: 'For $x > -1$ every factor is positive, so $\\log f(x) = \\log(1 + x) + \\log(1 + x^{2}) + \\log(1 + x^{4}) + \\log(1 + x^{8})$. Differentiating, $\\frac{f\'(x)}{f(x)} = \\frac{1}{1 + x} + \\frac{2x}{1 + x^{2}} + \\frac{4x^{3}}{1 + x^{4}} + \\frac{8x^{7}}{1 + x^{8}}$. At $x = 1$: $f(1) = 2^{4} = 16$ and the sum is $\\frac{1}{2} + 1 + 2 + 4 = \\frac{15}{2}$. So $f\'(1) = 16 \\cdot \\frac{15}{2} = 120$.',
    steps: [
      { step: 'Takes logarithms of the product', marks: 1 },
      { step: 'Differentiates each term correctly', marks: 1 },
      { step: 'Evaluates at $x = 1$ to get $f\'(1) = 120$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c09', chapter: C, topic: PARAM, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $x = \\frac{3at}{1 + t^{3}}$ and $y = \\frac{3at^{2}}{1 + t^{3}}$, where $a \\neq 0$ and $t \\neq -1$, find $\\frac{dy}{dx}$ in terms of $t$, and its value at $t = 1$.',
    answer: '$\\frac{dx}{dt} = 3a \\cdot \\frac{(1 + t^{3}) - t \\cdot 3t^{2}}{(1 + t^{3})^{2}} = \\frac{3a(1 - 2t^{3})}{(1 + t^{3})^{2}}$ and $\\frac{dy}{dt} = 3a \\cdot \\frac{2t(1 + t^{3}) - t^{2} \\cdot 3t^{2}}{(1 + t^{3})^{2}} = \\frac{3a(2t - t^{4})}{(1 + t^{3})^{2}}$. So $\\frac{dy}{dx} = \\frac{t(2 - t^{3})}{1 - 2t^{3}}$ (where $1 - 2t^{3} \\neq 0$). At $t = 1$ (the point $\\left(\\frac{3a}{2}, \\frac{3a}{2}\\right)$), $\\frac{dy}{dx} = \\frac{1 \\cdot 1}{-1} = -1$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt}$', marks: 1 },
      { step: 'Finds $\\frac{dy}{dt}$ and $\\frac{dy}{dx} = \\frac{t(2 - t^{3})}{1 - 2t^{3}}$', marks: 1 },
      { step: 'Evaluates at $t = 1$ to get $-1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-c10', chapter: C, topic: SECOND, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y = \\frac{\\sin^{-1} x}{\\sqrt{1 - x^{2}}}$, $-1 < x < 1$, show that $(1 - x^{2})\\frac{d^{2}y}{dx^{2}} - 3x\\frac{dy}{dx} - y = 0$.',
    answer: 'Write $\\sqrt{1 - x^{2}}\\,y = \\sin^{-1} x$. Differentiating, $\\sqrt{1 - x^{2}}\\,y\' - \\frac{x}{\\sqrt{1 - x^{2}}}y = \\frac{1}{\\sqrt{1 - x^{2}}}$. Multiplying by $\\sqrt{1 - x^{2}}$: $(1 - x^{2})y\' - xy = 1$. Differentiating again: $-2xy\' + (1 - x^{2})y\'\' - y - xy\' = 0$, i.e. $(1 - x^{2})y\'\' - 3xy\' - y = 0$.',
    steps: [
      { step: 'Differentiates $\\sqrt{1 - x^{2}}\\,y = \\sin^{-1} x$', marks: 1 },
      { step: 'Obtains $(1 - x^{2})y\' - xy = 1$', marks: 1 },
      { step: 'Differentiates again to reach the required relation', marks: 1 },
    ],
  },
  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-cd-r2-d01', chapter: C, topic: DIFF, type: 'long', complexity: 'hard', marks: 5,
    text: 'The function $f$ is defined by $f(x) = ax + b$ for $x \\le -1$, $f(x) = x^{3}$ for $-1 < x < 1$, and $f(x) = cx^{2} + dx$ for $x \\ge 1$. Find $a$, $b$, $c$ and $d$ if $f$ is differentiable at every real number. Hence write $f\'(x)$ for all real $x$.',
    answer: 'Each piece is a polynomial, so only $x = -1$ and $x = 1$ need checking.\nAt $x = -1$: continuity needs $-a + b = (-1)^{3} = -1$. LHD $= a$. RHD $= \\lim_{h \\to 0^+}\\frac{(-1 + h)^{3} - (-1)}{h} = \\lim_{h \\to 0^+}(3 - 3h + h^{2}) = 3$. So $a = 3$ and $b = a - 1 = 2$.\nAt $x = 1$: $f(1) = c + d$ and LHL $= 1$, so $c + d = 1$. LHD $= \\lim_{h \\to 0^-}\\frac{(1 + h)^{3} - 1}{h} = 3$. RHD $= \\lim_{h \\to 0^+}\\frac{c(1 + h)^{2} + d(1 + h) - (c + d)}{h} = 2c + d$. So $2c + d = 3$; with $c + d = 1$ this gives $c = 2$, $d = -1$.\nHence $f\'(x) = 3$ for $x \\le -1$, $f\'(x) = 3x^{2}$ for $-1 < x < 1$, and $f\'(x) = 4x - 1$ for $x \\ge 1$.',
    steps: [
      { step: 'Continuity at $x = -1$: $-a + b = -1$', marks: 1 },
      { step: 'Equal derivatives at $x = -1$ give $a = 3$, $b = 2$', marks: 1 },
      { step: 'Continuity at $x = 1$: $c + d = 1$', marks: 1 },
      { step: 'Equal derivatives at $x = 1$: $2c + d = 3$, so $c = 2$, $d = -1$', marks: 1 },
      { step: 'Writes $f\'(x)$ on each interval', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d02', chapter: C, topic: CHAIN, type: 'long', complexity: 'medium', marks: 5,
    text: 'A curve is given implicitly by $e^{xy} + y = x + 1$.\n(a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.\n(b) Show that the curve passes through the origin, and find the values of $\\frac{dy}{dx}$ and $\\frac{d^{2}y}{dx^{2}}$ at the origin.',
    answer: '(a) Differentiating, $e^{xy}\\left(y + x\\frac{dy}{dx}\\right) + \\frac{dy}{dx} = 1$. So $\\frac{dy}{dx}\\left(xe^{xy} + 1\\right) = 1 - ye^{xy}$ and $\\frac{dy}{dx} = \\frac{1 - ye^{xy}}{1 + xe^{xy}}$.\n(b) At $(0, 0)$: $e^{0} + 0 = 1 = 0 + 1$, so the origin is on the curve. There $\\frac{dy}{dx} = \\frac{1 - 0}{1 + 0} = 1$.\nDifferentiate $e^{xy}(y + xy\') + y\' = 1$ again: $e^{xy}(y + xy\')^{2} + e^{xy}(2y\' + xy\'\') + y\'\' = 0$. At $(0, 0)$ with $y\' = 1$: $1 \\cdot 0 + 1 \\cdot (2 + 0) + y\'\' = 0$, so $\\frac{d^{2}y}{dx^{2}} = -2$.',
    steps: [
      { step: 'Differentiates the relation implicitly', marks: 1 },
      { step: 'Gets $\\frac{dy}{dx} = \\frac{1 - ye^{xy}}{1 + xe^{xy}}$', marks: 1 },
      { step: 'Verifies the origin is on the curve and finds $y\' = 1$ there', marks: 1 },
      { step: 'Differentiates a second time correctly', marks: 1 },
      { step: 'Substitutes to get $\\frac{d^{2}y}{dx^{2}} = -2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d03', chapter: C, topic: INV, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $y = \\sin^{-1}\\left(\\frac{x + \\sqrt{1 - x^{2}}}{\\sqrt{2}}\\right)$, $-1 < x < 1$.\n(a) Find $\\frac{dy}{dx}$ for $-1 < x < \\frac{1}{\\sqrt{2}}$ and for $\\frac{1}{\\sqrt{2}} < x < 1$.\n(b) Is $y$ differentiable at $x = \\frac{1}{\\sqrt{2}}$? Justify your answer.',
    answer: 'Put $x = \\sin\\theta$ with $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$, so $\\sqrt{1 - x^{2}} = \\cos\\theta$ and $\\frac{\\sin\\theta + \\cos\\theta}{\\sqrt{2}} = \\sin\\left(\\theta + \\frac{\\pi}{4}\\right)$, where $\\theta + \\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right)$.\n(a) If $-1 < x \\le \\frac{1}{\\sqrt{2}}$, then $\\theta \\le \\frac{\\pi}{4}$ and $\\theta + \\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right]$, so $y = \\theta + \\frac{\\pi}{4} = \\sin^{-1} x + \\frac{\\pi}{4}$ and $\\frac{dy}{dx} = \\frac{1}{\\sqrt{1 - x^{2}}}$ (for $x < \\frac{1}{\\sqrt{2}}$).\nIf $\\frac{1}{\\sqrt{2}} \\le x < 1$, then $\\theta + \\frac{\\pi}{4} \\in \\left[\\frac{\\pi}{2}, \\frac{3\\pi}{4}\\right)$; since $\\sin\\left(\\theta + \\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{3\\pi}{4} - \\theta\\right)$ with $\\frac{3\\pi}{4} - \\theta \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right]$, $y = \\frac{3\\pi}{4} - \\sin^{-1} x$ and $\\frac{dy}{dx} = -\\frac{1}{\\sqrt{1 - x^{2}}}$ (for $x > \\frac{1}{\\sqrt{2}}$).\n(b) Both formulas give $y = \\frac{\\pi}{2}$ at $x = \\frac{1}{\\sqrt{2}}$, so $y$ is continuous there. LHD $= \\frac{1}{\\sqrt{1 - \\frac{1}{2}}} = \\sqrt{2}$ and RHD $= -\\sqrt{2}$. Since they differ, $y$ is not differentiable at $x = \\frac{1}{\\sqrt{2}}$.',
    steps: [
      { step: 'Substitutes $x = \\sin\\theta$ and writes the argument as $\\sin\\left(\\theta + \\frac{\\pi}{4}\\right)$', marks: 1 },
      { step: 'For $x \\le \\frac{1}{\\sqrt{2}}$: $y = \\sin^{-1} x + \\frac{\\pi}{4}$ with the range justified', marks: 1 },
      { step: 'For $x \\ge \\frac{1}{\\sqrt{2}}$: $y = \\frac{3\\pi}{4} - \\sin^{-1} x$ with the range justified', marks: 1 },
      { step: 'States $\\frac{dy}{dx} = \\pm\\frac{1}{\\sqrt{1 - x^{2}}}$ on the two intervals', marks: 1 },
      { step: 'Finds LHD $= \\sqrt{2}$, RHD $= -\\sqrt{2}$ and concludes not differentiable', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d04', chapter: C, topic: LOG, type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $\\frac{dy}{dx}$ if $y = x^{e^{x}} + e^{x^{x}}$, $x > 0$.',
    answer: 'Let $u = x^{e^{x}}$ and $v = e^{x^{x}}$, so $y = u + v$.\n$\\log u = e^{x}\\log x$, so $\\frac{1}{u}\\frac{du}{dx} = e^{x}\\log x + \\frac{e^{x}}{x}$ and $\\frac{du}{dx} = x^{e^{x}}e^{x}\\left(\\log x + \\frac{1}{x}\\right)$.\nFor $v$, let $w = x^{x}$: $\\log w = x\\log x$, so $\\frac{dw}{dx} = x^{x}(1 + \\log x)$. Then $\\frac{dv}{dx} = e^{w}\\frac{dw}{dx} = e^{x^{x}}x^{x}(1 + \\log x)$.\nHence $\\frac{dy}{dx} = x^{e^{x}}e^{x}\\left(\\log x + \\frac{1}{x}\\right) + e^{x^{x}}x^{x}(1 + \\log x)$.',
    steps: [
      { step: 'Splits $y = u + v$', marks: 1 },
      { step: 'Takes logarithms of $u$ and differentiates', marks: 1 },
      { step: 'Gets $\\frac{du}{dx} = x^{e^{x}}e^{x}\\left(\\log x + \\frac{1}{x}\\right)$', marks: 1 },
      { step: 'Finds $\\frac{d}{dx}x^{x} = x^{x}(1 + \\log x)$', marks: 1 },
      { step: 'Gets $\\frac{dv}{dx} = e^{x^{x}}x^{x}(1 + \\log x)$ and adds', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d05', chapter: C, topic: LOG, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $x^{y}\\,y^{x} = 16$, where $x, y > 0$.\n(a) Find $\\frac{dy}{dx}$.\n(b) Verify that the point $(2, 2)$ satisfies the relation, and find the values of $\\frac{dy}{dx}$ and $\\frac{d^{2}y}{dx^{2}}$ there.',
    answer: '(a) Taking logarithms, $y\\log x + x\\log y = \\log 16$. Differentiating, $\\frac{dy}{dx}\\log x + \\frac{y}{x} + \\log y + \\frac{x}{y}\\frac{dy}{dx} = 0$. So $\\frac{dy}{dx}\\left(\\log x + \\frac{x}{y}\\right) = -\\left(\\log y + \\frac{y}{x}\\right)$, i.e. $\\frac{dy}{dx} = -\\frac{y(x\\log y + y)}{x(y\\log x + x)}$.\n(b) $2^{2} \\cdot 2^{2} = 16$, so $(2, 2)$ satisfies the relation. There $\\frac{dy}{dx} = -\\frac{2(2\\log 2 + 2)}{2(2\\log 2 + 2)} = -1$.\nDifferentiate $y\'\\log x + \\frac{y}{x} + \\log y + \\frac{x}{y}y\' = 0$ again: $y\'\'\\log x + \\frac{y\'}{x} + \\frac{xy\' - y}{x^{2}} + \\frac{y\'}{y} + \\frac{y - xy\'}{y^{2}}y\' + \\frac{x}{y}y\'\' = 0$. At $(2, 2)$ with $y\' = -1$: $y\'\'(\\log 2 + 1) - \\frac{1}{2} - 1 - \\frac{1}{2} - 1 = 0$, so $\\frac{d^{2}y}{dx^{2}} = \\frac{3}{1 + \\log 2}$.',
    steps: [
      { step: 'Takes logarithms and differentiates implicitly', marks: 1 },
      { step: 'Gets $\\frac{dy}{dx} = -\\frac{y(x\\log y + y)}{x(y\\log x + x)}$', marks: 1 },
      { step: 'Verifies $(2, 2)$ and finds $\\frac{dy}{dx} = -1$', marks: 1 },
      { step: 'Differentiates a second time correctly', marks: 1 },
      { step: 'Substitutes to get $\\frac{d^{2}y}{dx^{2}} = \\frac{3}{1 + \\log 2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d06', chapter: C, topic: PARAM, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $x = e^{t} + e^{-t}$ and $y = e^{t} - e^{-t}$, where $t \\neq 0$.\n(a) Show that $\\frac{dy}{dx} = \\frac{x}{y}$.\n(b) Show that $\\frac{d^{2}y}{dx^{2}} = -\\frac{4}{y^{3}}$.\n(c) Find the value of $\\frac{d^{2}y}{dx^{2}}$ at $t = \\log 2$.',
    answer: '(a) $\\frac{dx}{dt} = e^{t} - e^{-t} = y$ and $\\frac{dy}{dt} = e^{t} + e^{-t} = x$. Since $t \\neq 0$, $y \\neq 0$, and $\\frac{dy}{dx} = \\frac{x}{y}$.\n(b) $\\frac{d^{2}y}{dx^{2}} = \\frac{d}{dx}\\left(\\frac{x}{y}\\right) = \\frac{y - x\\frac{dy}{dx}}{y^{2}} = \\frac{y - \\frac{x^{2}}{y}}{y^{2}} = \\frac{y^{2} - x^{2}}{y^{3}}$. Now $x^{2} - y^{2} = (e^{t} + e^{-t})^{2} - (e^{t} - e^{-t})^{2} = 4$, so $\\frac{d^{2}y}{dx^{2}} = -\\frac{4}{y^{3}}$.\n(c) At $t = \\log 2$: $y = 2 - \\frac{1}{2} = \\frac{3}{2}$, so $y^{3} = \\frac{27}{8}$ and $\\frac{d^{2}y}{dx^{2}} = -\\frac{32}{27}$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt} = y$ and $\\frac{dy}{dt} = x$', marks: 1 },
      { step: 'Concludes $\\frac{dy}{dx} = \\frac{x}{y}$', marks: 1 },
      { step: 'Differentiates $\\frac{x}{y}$ with respect to $x$ to get $\\frac{y^{2} - x^{2}}{y^{3}}$', marks: 1 },
      { step: 'Uses $x^{2} - y^{2} = 4$ to get $-\\frac{4}{y^{3}}$', marks: 1 },
      { step: 'Evaluates $-\\frac{32}{27}$ at $t = \\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d07', chapter: C, topic: SECOND, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $y = \\sqrt{1 - x^{2}}\\,\\sin^{-1} x$, $-1 < x < 1$.\n(a) Show that $(1 - x^{2})\\frac{dy}{dx} + xy = 1 - x^{2}$.\n(b) Hence show that $(1 - x^{2})\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} + y + 2x = 0$.\n(c) Find the value of $\\frac{d^{2}y}{dx^{2}}$ at $x = 0$.',
    answer: '(a) By the product rule, $\\frac{dy}{dx} = -\\frac{x}{\\sqrt{1 - x^{2}}}\\sin^{-1} x + \\sqrt{1 - x^{2}} \\cdot \\frac{1}{\\sqrt{1 - x^{2}}} = 1 - \\frac{x\\sin^{-1} x}{\\sqrt{1 - x^{2}}}$. Multiplying by $1 - x^{2}$: $(1 - x^{2})y\' = (1 - x^{2}) - x\\sqrt{1 - x^{2}}\\sin^{-1} x = (1 - x^{2}) - xy$. Hence $(1 - x^{2})y\' + xy = 1 - x^{2}$.\n(b) Differentiating: $-2xy\' + (1 - x^{2})y\'\' + y + xy\' = -2x$, so $(1 - x^{2})y\'\' - xy\' + y + 2x = 0$.\n(c) At $x = 0$: $y = 0$, and from (a) $y\'(0) = 1$. Then (b) gives $y\'\'(0) - 0 + 0 + 0 = 0$, so $\\frac{d^{2}y}{dx^{2}} = 0$ at $x = 0$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx}$ by the product rule', marks: 1 },
      { step: 'Rearranges to the relation in (a)', marks: 1 },
      { step: 'Differentiates the relation in (a)', marks: 1 },
      { step: 'Simplifies to the relation in (b)', marks: 1 },
      { step: 'Finds $y\'(0) = 1$ and $y\'\'(0) = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r2-d08', chapter: C, topic: CONT, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $f(x) = [x] + |x - 1|$ for $0 < x < 3$, where $[x]$ is the greatest integer less than or equal to $x$. Write $f(x)$ without the bracket and the modulus on each of the intervals $(0, 1)$, $[1, 2)$ and $[2, 3)$. Hence find all points in $(0, 3)$ where $f$ is discontinuous, and all points where $f$ is not differentiable.',
    answer: 'On $(0, 1)$: $[x] = 0$ and $|x - 1| = 1 - x$, so $f(x) = 1 - x$.\nOn $[1, 2)$: $[x] = 1$ and $|x - 1| = x - 1$, so $f(x) = x$.\nOn $[2, 3)$: $[x] = 2$ and $|x - 1| = x - 1$, so $f(x) = x + 1$.\nAt $x = 1$: LHL $= \\lim_{x \\to 1^-}(1 - x) = 0$ but $f(1) = 1$, so $f$ is discontinuous at $1$.\nAt $x = 2$: LHL $= \\lim_{x \\to 2^-} x = 2$ but $f(2) = 3$, so $f$ is discontinuous at $2$.\nAt every other point of $(0, 3)$, $f$ is given by a linear expression near the point, so it is continuous and differentiable there. A function that is not continuous at a point cannot be differentiable there, so $f$ is discontinuous exactly at $x = 1, 2$ and not differentiable exactly at $x = 1, 2$.',
    steps: [
      { step: 'Writes $f(x) = 1 - x$ on $(0, 1)$ and $f(x) = x$ on $[1, 2)$', marks: 1 },
      { step: 'Writes $f(x) = x + 1$ on $[2, 3)$', marks: 1 },
      { step: 'Shows discontinuity at $x = 1$', marks: 1 },
      { step: 'Shows discontinuity at $x = 2$', marks: 1 },
      { step: 'Concludes continuity and differentiability elsewhere, and non-differentiability exactly at $1$ and $2$', marks: 1 },
    ],
  },
  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-cd-r2-e01', chapter: C, topic: DIFF, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A camping company designs a tent whose front face is $4$ m wide. Measured from one corner of the base, at a horizontal distance of $x$ metres the height of the tent is $h(x) = 3 - \\frac{3}{2}|x - 2|$ metres, for $0 \\le x \\le 4$. The tent has a ridge (a sharp top) at the middle.',
    answer: '(i) LHL $=$ RHL $= h(2) = 3$, so continuous. (ii) LHD $= \\frac{3}{2}$, RHD $= -\\frac{3}{2}$. (iii) $h\'(1) = \\frac{3}{2}$, $h\'(3) = -\\frac{3}{2}$; not differentiable only at $x = 2$. OR: $a = 3$, $b = \\frac{3}{4}$, $k\'(2) = 0$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that $h$ is continuous at $x = 2$.',
        answer: '$h(2) = 3$. For $x < 2$, $h(x) = 3 - \\frac{3}{2}(2 - x)$, which tends to $3$; for $x > 2$, $h(x) = 3 - \\frac{3}{2}(x - 2)$, which also tends to $3$. So LHL $=$ RHL $= h(2)$ and $h$ is continuous at $x = 2$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the left-hand and right-hand derivatives of $h$ at $x = 2$.',
        answer: 'For $0 \\le x < 2$, $h(x) = \\frac{3}{2}x$, so LHD $= \\frac{3}{2}$. For $2 < x \\le 4$, $h(x) = 6 - \\frac{3}{2}x$, so RHD $= -\\frac{3}{2}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $h\'(1)$ and $h\'(3)$, and state all points of $(0, 4)$ at which $h$ is not differentiable.\nOR\nTo remove the ridge, the designer replaces $h$ by an arch $k(x) = a - b(x - 2)^{2}$ with $k(0) = 0$ and $k(2) = 3$. Find $a$ and $b$, and show that $k\'(2) = 0$.',
        answer: 'On $(0, 2)$, $h(x) = \\frac{3}{2}x$, so $h\'(1) = \\frac{3}{2}$. On $(2, 4)$, $h(x) = 6 - \\frac{3}{2}x$, so $h\'(3) = -\\frac{3}{2}$. Since LHD $\\neq$ RHD at $x = 2$ and $h$ is linear on each side, $h$ is not differentiable only at $x = 2$.\nOR: $k(2) = a = 3$, and $k(0) = 3 - 4b = 0$ gives $b = \\frac{3}{4}$. Then $k\'(x) = -2b(x - 2) = -\\frac{3}{2}(x - 2)$, so $k\'(2) = 0$.',
      },
    ],
  },
  {
    id: 'c12-cd-r2-e02', chapter: C, topic: SECOND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A shock absorber in a car is being tested. After $t$ seconds, the displacement of its piston from the rest position is $x = e^{-t}\\sin t$ centimetres, for $t \\ge 0$.',
    answer: '(i) $\\frac{dx}{dt} = e^{-t}(\\cos t - \\sin t)$. (ii) $t = \\frac{\\pi}{4}$ s. (iii) $\\frac{d^{2}x}{dt^{2}} = -2e^{-t}\\cos t$, so $\\frac{d^{2}x}{dt^{2}} + 2\\frac{dx}{dt} + 2x = 0$. OR: $-2$ cm/s$^{2}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the velocity $\\frac{dx}{dt}$ of the piston.',
        answer: 'By the product rule, $\\frac{dx}{dt} = -e^{-t}\\sin t + e^{-t}\\cos t = e^{-t}(\\cos t - \\sin t)$ cm/s.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the first time $t > 0$ at which the velocity is zero.',
        answer: '$e^{-t} > 0$, so we need $\\cos t = \\sin t$, i.e. $\\tan t = 1$. The smallest positive solution is $t = \\frac{\\pi}{4}$ seconds.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $\\frac{d^{2}x}{dt^{2}} + 2\\frac{dx}{dt} + 2x = 0$.\nOR\nFind the acceleration $\\frac{d^{2}x}{dt^{2}}$ of the piston at $t = 0$.',
        answer: '$\\frac{d^{2}x}{dt^{2}} = -e^{-t}(\\cos t - \\sin t) + e^{-t}(-\\sin t - \\cos t) = -2e^{-t}\\cos t$. Then $\\frac{d^{2}x}{dt^{2}} + 2\\frac{dx}{dt} + 2x = -2e^{-t}\\cos t + 2e^{-t}\\cos t - 2e^{-t}\\sin t + 2e^{-t}\\sin t = 0$.\nOR: $\\frac{d^{2}x}{dt^{2}} = -2e^{-t}\\cos t$, so at $t = 0$ the acceleration is $-2$ cm/s$^{2}$.',
      },
    ],
  },
  {
    id: 'c12-cd-r2-e03', chapter: C, topic: PARAM, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A Ferris wheel has radius $20$ m and its centre is $22$ m above the ground. A seat starts at the lowest point. When the wheel has turned through an angle $\\theta$ (in radians), the seat is at horizontal position $x = 20\\sin\\theta$ m from the vertical line through the centre, and at height $y = 22 - 20\\cos\\theta$ m above the ground, for $0 < \\theta < \\frac{\\pi}{2}$.',
    answer: '(i) $\\frac{dy}{dx} = \\tan\\theta$. (ii) $\\sqrt{3}$. (iii) $\\frac{d^{2}y}{dx^{2}} = \\frac{\\sec^{3}\\theta}{20}$, equal to $\\frac{\\sqrt{2}}{10}$ at $\\theta = \\frac{\\pi}{4}$. OR: $\\theta = \\frac{\\pi}{4}$, seat at $(10\\sqrt{2}, 22 - 10\\sqrt{2})$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\frac{dy}{dx}$ in terms of $\\theta$.',
        answer: '$\\frac{dx}{d\\theta} = 20\\cos\\theta$ and $\\frac{dy}{d\\theta} = 20\\sin\\theta$, so $\\frac{dy}{dx} = \\frac{20\\sin\\theta}{20\\cos\\theta} = \\tan\\theta$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the value of $\\frac{dy}{dx}$ when $\\theta = \\frac{\\pi}{3}$.',
        answer: '$\\frac{dy}{dx} = \\tan\\frac{\\pi}{3} = \\sqrt{3}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $\\frac{d^{2}y}{dx^{2}}$ in terms of $\\theta$, and its value at $\\theta = \\frac{\\pi}{4}$.\nOR\nFind the angle $\\theta$ at which $\\frac{dy}{dx} = 1$, and the position $(x, y)$ of the seat at that moment.',
        answer: '$\\frac{d^{2}y}{dx^{2}} = \\frac{d}{d\\theta}(\\tan\\theta) \\cdot \\frac{d\\theta}{dx} = \\sec^{2}\\theta \\cdot \\frac{1}{20\\cos\\theta} = \\frac{\\sec^{3}\\theta}{20}$. At $\\theta = \\frac{\\pi}{4}$, $\\sec^{3}\\theta = 2\\sqrt{2}$, so $\\frac{d^{2}y}{dx^{2}} = \\frac{2\\sqrt{2}}{20} = \\frac{\\sqrt{2}}{10}$.\nOR: $\\tan\\theta = 1$ with $0 < \\theta < \\frac{\\pi}{2}$ gives $\\theta = \\frac{\\pi}{4}$. Then $x = 20 \\cdot \\frac{1}{\\sqrt{2}} = 10\\sqrt{2}$ m and $y = 22 - 10\\sqrt{2}$ m.',
      },
    ],
  },
  {
    id: 'c12-cd-r2-e04', chapter: C, topic: INV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A statue $10$ m tall stands on a pedestal $30$ m high. A visitor, whose eye level is taken to be at the ground, stands $x$ metres from the foot of the pedestal ($x > 0$). The angle (in radians) that the statue subtends at the visitor\'s eye is $\\theta(x) = \\tan^{-1}\\left(\\frac{40}{x}\\right) - \\tan^{-1}\\left(\\frac{30}{x}\\right)$.',
    answer: '(i) $-\\frac{30}{x^{2} + 900}$. (ii) $\\frac{d\\theta}{dx} = \\frac{30}{x^{2} + 900} - \\frac{40}{x^{2} + 1600} = \\frac{10(1200 - x^{2})}{(x^{2} + 900)(x^{2} + 1600)}$. (iii) $x = 20\\sqrt{3}$ m. OR: $\\frac{1}{1500}$ radian per metre.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\frac{d}{dx}\\tan^{-1}\\left(\\frac{30}{x}\\right)$.',
        answer: '$\\frac{1}{1 + \\frac{900}{x^{2}}} \\cdot \\left(-\\frac{30}{x^{2}}\\right) = -\\frac{30}{x^{2} + 900}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\frac{d\\theta}{dx}$.',
        answer: 'Similarly $\\frac{d}{dx}\\tan^{-1}\\left(\\frac{40}{x}\\right) = -\\frac{40}{x^{2} + 1600}$. So $\\frac{d\\theta}{dx} = \\frac{30}{x^{2} + 900} - \\frac{40}{x^{2} + 1600} = \\frac{10(1200 - x^{2})}{(x^{2} + 900)(x^{2} + 1600)}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the distance $x$ at which $\\frac{d\\theta}{dx} = 0$.\nOR\nFind the value of $\\frac{d\\theta}{dx}$ when the visitor stands $30$ m from the pedestal.',
        answer: '$\\frac{d\\theta}{dx} = 0$ when $30(x^{2} + 1600) = 40(x^{2} + 900)$, i.e. $10x^{2} = 12000$, so $x^{2} = 1200$ and $x = 20\\sqrt{3}$ m (about $34.6$ m).\nOR: At $x = 30$, $\\frac{d\\theta}{dx} = \\frac{30}{1800} - \\frac{40}{2500} = \\frac{1}{60} - \\frac{2}{125} = \\frac{25 - 24}{1500} = \\frac{1}{1500}$ radian per metre.',
      },
    ],
  },
];
