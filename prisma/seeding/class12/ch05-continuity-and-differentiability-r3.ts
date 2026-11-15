import type { Class12Question } from './types.js';

const C = 'Continuity and Differentiability';
const CONT = 'Continuity and finding unknown constants';
const DIFF = 'Differentiability';
const CHAIN = 'Chain rule and implicit differentiation';
const INV = 'Derivatives of inverse trigonometric functions';
const LOG = 'Logarithmic differentiation';
const PARAM = 'Parametric differentiation';
const SECOND = 'Second-order derivatives';

export const CH05_CD_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-cd-r3-a01', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = \\frac{e^{2x} - 1}{\\sin 4x}$ for $x \\neq 0$ and $f(0) = k$, and $f$ is continuous at $x = 0$, then $k$ equals',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$2$', '$1$'],
    answer: 'Correct option: B) $\\frac{1}{2}$. Write $\\frac{e^{2x} - 1}{\\sin 4x} = \\frac{e^{2x} - 1}{2x} \\cdot \\frac{4x}{\\sin 4x} \\cdot \\frac{2x}{4x} \\to 1 \\cdot 1 \\cdot \\frac{1}{2}$, so $k = \\frac{1}{2}$.',
  },
  {
    id: 'c12-cd-r3-a02', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f(x) = x\\sin\\left(\\frac{1}{x}\\right)$ for $x \\neq 0$ and $f(0) = k$. The value of $k$ for which $f$ is continuous at $x = 0$ is',
    options: ['$1$', '$0$', '$-1$', 'no value of $k$ makes $f$ continuous'],
    answer: 'Correct option: B) $0$. Since $\\left|x\\sin\\frac{1}{x}\\right| \\le |x|$, the limit of $f(x)$ as $x \\to 0$ is $0$, so continuity needs $k = 0$.',
  },
  {
    id: 'c12-cd-r3-a03', chapter: C, topic: CONT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = \\frac{1}{x^{2} - 5x + 6}$ is discontinuous at exactly the points',
    options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 1$ and $x = 6$', '$x = -1$ and $x = -6$'],
    answer: 'Correct option: A) $x = 2$ and $x = 3$. $f$ is a rational function, discontinuous only where the denominator $x^{2} - 5x + 6 = (x - 2)(x - 3)$ is zero, that is at $x = 2$ and $x = 3$.',
  },
  {
    id: 'c12-cd-r3-a04', chapter: C, topic: CONT, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The function $f(x) = \\frac{|x|}{x}$ for $x \\neq 0$, with $f(0) = 1$, is not continuous at $x = 0$.\nReason (R): $\\lim_{x \\to 0^{-}} \\frac{|x|}{x} = -1$ and $\\lim_{x \\to 0^{+}} \\frac{|x|}{x} = 1$, so $\\lim_{x \\to 0} f(x)$ does not exist.',
    options: ['Both A and R are true, and R is the correct explanation of A.', 'Both A and R are true, but R is not the correct explanation of A.', 'A is true, but R is false.', 'A is false, but R is true.'],
    answer: 'Correct option: A) Both are true and R explains A. For $x < 0$, $f(x) = -1$ and for $x > 0$, $f(x) = 1$, so the left and right limits differ, the limit does not exist, and $f$ cannot be continuous at $0$.',
  },
  {
    id: 'c12-cd-r3-a05', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f(x) = \\frac{k\\cos x}{\\pi - 2x}$ for $x \\neq \\frac{\\pi}{2}$ and $f\\left(\\frac{\\pi}{2}\\right) = 3$ is continuous at $x = \\frac{\\pi}{2}$, then $k$ is',
    options: ['$3$', '$6$', '$\\frac{3}{2}$', '$12$'],
    answer: 'Correct option: B) $6$. Put $h = \\frac{\\pi}{2} - x$. Then $\\cos x = \\sin h$ and $\\pi - 2x = 2h$, so $f(x) = \\frac{k\\sin h}{2h} \\to \\frac{k}{2}$. Continuity needs $\\frac{k}{2} = 3$, so $k = 6$.',
  },
  {
    id: 'c12-cd-r3-a06', chapter: C, topic: CONT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f(x) = \\frac{1}{x - 1}$ and $g(x) = x^{2} + 1$. The composite function $f \\circ g$ is discontinuous at',
    options: ['$x = 0$ only', '$x = 1$ only', '$x = 1$ and $x = -1$', 'no point; it is continuous everywhere'],
    answer: 'Correct option: A) $x = 0$ only. $(f \\circ g)(x) = \\frac{1}{x^{2} + 1 - 1} = \\frac{1}{x^{2}}$, which is undefined only at $x = 0$ (the point where $g(x) = 1$).',
  },
  {
    id: 'c12-cd-r3-a07', chapter: C, topic: DIFF, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of points in the interval $(0, 2\\pi)$ at which $f(x) = |\\cos x|$ is not differentiable is',
    options: ['$1$', '$2$', '$3$', '$4$'],
    answer: 'Correct option: B) $2$. $|\\cos x|$ has a corner exactly where $\\cos x = 0$ and changes sign, namely $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$ in $(0, 2\\pi)$.',
  },
  {
    id: 'c12-cd-r3-a08', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f(x) = x^{2}\\sin\\left(\\frac{1}{x}\\right)$ for $x \\neq 0$ and $f(0) = 0$. Then $f\'(0)$ is',
    options: ['$0$', '$1$', '$-1$', 'does not exist'],
    answer: 'Correct option: A) $0$. $f\'(0) = \\lim_{h \\to 0} \\frac{h^{2}\\sin(1/h) - 0}{h} = \\lim_{h \\to 0} h\\sin\\frac{1}{h} = 0$.',
  },
  {
    id: 'c12-cd-r3-a09', chapter: C, topic: DIFF, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f(x) = |x|\\sin x$ at $x = 0$ is',
    options: ['not continuous', 'continuous but not differentiable', 'differentiable with $f\'(0) = 0$', 'differentiable with $f\'(0) = 1$'],
    answer: 'Correct option: C) differentiable with $f\'(0) = 0$. $\\frac{f(h) - f(0)}{h} = \\frac{|h|\\sin h}{h} = |h| \\cdot \\frac{\\sin h}{h}$, which tends to $0 \\cdot 1 = 0$ from both sides.',
  },
  {
    id: 'c12-cd-r3-a10', chapter: C, topic: DIFF, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f(x) = x + |x|$ is not differentiable at $x = 0$.\nReason (R): If $g$ is differentiable at a point and $h$ is not differentiable at that point, then $g + h$ is not differentiable at that point.',
    options: ['Both A and R are true, and R is the correct explanation of A.', 'Both A and R are true, but R is not the correct explanation of A.', 'A is true, but R is false.', 'A is false, but R is true.'],
    answer: 'Correct option: A) Both are true and R explains A. Here $g(x) = x$ is differentiable and $h(x) = |x|$ is not at $0$. Directly, $f(x) = 2x$ for $x > 0$ and $f(x) = 0$ for $x < 0$, so the right derivative is $2$ and the left derivative is $0$.',
  },
  {
    id: 'c12-cd-r3-a11', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $0 < x < \\pi$, the derivative of $\\log\\left(\\tan\\frac{x}{2}\\right)$ with respect to $x$ is',
    options: ['$\\sec x$', '$\\operatorname{cosec} x$', '$\\cot x$', '$\\frac{1}{2}\\operatorname{cosec} x$'],
    answer: 'Correct option: B) $\\operatorname{cosec} x$. The derivative is $\\frac{1}{\\tan(x/2)} \\cdot \\sec^{2}\\frac{x}{2} \\cdot \\frac{1}{2} = \\frac{1}{2\\sin\\frac{x}{2}\\cos\\frac{x}{2}} = \\frac{1}{\\sin x}$.',
  },
  {
    id: 'c12-cd-r3-a12', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = xe^{y}$, then $\\frac{dy}{dx}$ equals',
    options: ['$\\frac{e^{y}}{1 - y}$', '$\\frac{e^{y}}{1 + y}$', '$e^{y}$', '$\\frac{e^{y}}{1 - x}$'],
    answer: 'Correct option: A) $\\frac{e^{y}}{1 - y}$. Differentiating, $\\frac{dy}{dx} = e^{y} + xe^{y}\\frac{dy}{dx}$, so $\\frac{dy}{dx} = \\frac{e^{y}}{1 - xe^{y}}$. Since $xe^{y} = y$, this is $\\frac{e^{y}}{1 - y}$.',
  },
  {
    id: 'c12-cd-r3-a13', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = \\tan\\sqrt{x}$, then the value of $\\frac{dy}{dx}$ at $x = \\frac{\\pi^{2}}{16}$ is',
    options: ['$\\frac{4}{\\pi}$', '$2$', '$\\frac{2}{\\pi}$', '$\\frac{\\pi}{4}$'],
    answer: 'Correct option: A) $\\frac{4}{\\pi}$. $\\frac{dy}{dx} = \\sec^{2}\\sqrt{x} \\cdot \\frac{1}{2\\sqrt{x}}$. At $x = \\frac{\\pi^{2}}{16}$, $\\sqrt{x} = \\frac{\\pi}{4}$, so $\\sec^{2}\\frac{\\pi}{4} = 2$ and $2\\sqrt{x} = \\frac{\\pi}{2}$. Hence the value is $\\frac{2}{\\pi/2} = \\frac{4}{\\pi}$.',
  },
  {
    id: 'c12-cd-r3-a14', chapter: C, topic: CHAIN, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The functions $f$ and $g$ are differentiable, with $g(1) = 2$, $g\'(1) = 5$, $f(2) = 3$ and $f\'(2) = 4$. Then the derivative of $f(g(x))$ at $x = 1$ is',
    options: ['$12$', '$20$', '$9$', '$15$'],
    answer: 'Correct option: B) $20$. By the chain rule, $\\frac{d}{dx}f(g(x)) = f\'(g(x))\\,g\'(x)$. At $x = 1$ this is $f\'(2) \\cdot g\'(1) = 4 \\times 5 = 20$.',
  },
  {
    id: 'c12-cd-r3-a15', chapter: C, topic: INV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $\\frac{1}{2} < x < 1$, the derivative of $\\cos^{-1}\\left(4x^{3} - 3x\\right)$ with respect to $x$ is',
    options: ['$\\frac{3}{\\sqrt{1 - x^{2}}}$', '$-\\frac{3}{\\sqrt{1 - x^{2}}}$', '$-\\frac{1}{3\\sqrt{1 - x^{2}}}$', '$-\\frac{3}{1 + x^{2}}$'],
    answer: 'Correct option: B) $-\\frac{3}{\\sqrt{1 - x^{2}}}$. Put $x = \\cos\\theta$ with $0 < \\theta < \\frac{\\pi}{3}$. Then $4x^{3} - 3x = \\cos 3\\theta$ and $3\\theta \\in (0, \\pi)$, so the function equals $3\\theta = 3\\cos^{-1}x$, whose derivative is $-\\frac{3}{\\sqrt{1 - x^{2}}}$.',
  },
  {
    id: 'c12-cd-r3-a16', chapter: C, topic: INV, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): For $-1 < x < 1$, $\\frac{d}{dx}\\left(\\sin^{-1}x + \\cos^{-1}x\\right) = 0$.\nReason (R): $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ for every $x \\in [-1, 1]$.',
    options: ['Both A and R are true, and R is the correct explanation of A.', 'Both A and R are true, but R is not the correct explanation of A.', 'A is true, but R is false.', 'A is false, but R is true.'],
    answer: 'Correct option: A) Both are true and R explains A. The sum is the constant $\\frac{\\pi}{2}$, and the derivative of a constant is $0$. Directly, $\\frac{1}{\\sqrt{1 - x^{2}}} - \\frac{1}{\\sqrt{1 - x^{2}}} = 0$.',
  },
  {
    id: 'c12-cd-r3-a17', chapter: C, topic: LOG, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $y = x^{1/x}$, $x > 0$, then the value of $\\frac{dy}{dx}$ at $x = e$ is',
    options: ['$0$', '$e^{1/e}$', '$\\frac{1}{e^{2}}$', '$e^{\\frac{1}{e} - 2}$'],
    answer: 'Correct option: A) $0$. Taking logarithms, $\\log y = \\frac{\\log x}{x}$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{1 - \\log x}{x^{2}}$, so $\\frac{dy}{dx} = x^{1/x}\\cdot\\frac{1 - \\log x}{x^{2}}$. At $x = e$, $1 - \\log e = 0$, so the derivative is $0$.',
  },
  {
    id: 'c12-cd-r3-a18', chapter: C, topic: LOG, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = \\frac{(x + 1)^{2}(x + 2)^{3}}{(x + 3)^{4}}$, then the value of $\\frac{1}{y}\\frac{dy}{dx}$ at $x = 0$ is',
    options: ['$\\frac{13}{6}$', '$\\frac{29}{6}$', '$\\frac{17}{6}$', '$\\frac{7}{6}$'],
    answer: 'Correct option: A) $\\frac{13}{6}$. $\\log y = 2\\log(x + 1) + 3\\log(x + 2) - 4\\log(x + 3)$, so $\\frac{1}{y}\\frac{dy}{dx} = \\frac{2}{x + 1} + \\frac{3}{x + 2} - \\frac{4}{x + 3}$. At $x = 0$: $2 + \\frac{3}{2} - \\frac{4}{3} = \\frac{13}{6}$.',
  },
  {
    id: 'c12-cd-r3-a19', chapter: C, topic: PARAM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $x = t + \\frac{1}{t}$ and $y = t - \\frac{1}{t}$, then $\\frac{dy}{dx}$ (for $t \\neq 0, \\pm 1$) is',
    options: ['$\\frac{t^{2} + 1}{t^{2} - 1}$', '$\\frac{t^{2} - 1}{t^{2} + 1}$', '$-\\frac{t^{2} + 1}{t^{2} - 1}$', '$\\frac{t - 1}{t + 1}$'],
    answer: 'Correct option: A) $\\frac{t^{2} + 1}{t^{2} - 1}$. $\\frac{dx}{dt} = 1 - \\frac{1}{t^{2}}$ and $\\frac{dy}{dt} = 1 + \\frac{1}{t^{2}}$, so $\\frac{dy}{dx} = \\frac{1 + 1/t^{2}}{1 - 1/t^{2}} = \\frac{t^{2} + 1}{t^{2} - 1}$.',
  },
  {
    id: 'c12-cd-r3-a20', chapter: C, topic: SECOND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = \\sin(\\log x)$, $x > 0$, then $x^{2}\\frac{d^{2}y}{dx^{2}} + x\\frac{dy}{dx}$ equals',
    options: ['$y$', '$-y$', '$0$', '$\\cos(\\log x)$'],
    answer: 'Correct option: B) $-y$. $\\frac{dy}{dx} = \\frac{\\cos(\\log x)}{x}$ and $\\frac{d^{2}y}{dx^{2}} = \\frac{-\\sin(\\log x) - \\cos(\\log x)}{x^{2}}$. So $x^{2}y\'\' + xy\' = -\\sin(\\log x) - \\cos(\\log x) + \\cos(\\log x) = -\\sin(\\log x) = -y$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-cd-r3-b01', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the value of $k$ for which $f(x) = \\frac{\\sqrt{2 + x} - \\sqrt{2 - x}}{x}$ for $x \\neq 0$, with $f(0) = k$, is continuous at $x = 0$.',
    answer: 'Multiply numerator and denominator by $\\sqrt{2 + x} + \\sqrt{2 - x}$. The numerator becomes $(2 + x) - (2 - x) = 2x$, so for $x \\neq 0$, $f(x) = \\frac{2}{\\sqrt{2 + x} + \\sqrt{2 - x}}$. Hence $\\lim_{x \\to 0} f(x) = \\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$. For continuity $k = \\frac{1}{\\sqrt{2}}$.',
    steps: [
      { step: 'Rationalises with the conjugate and cancels $x$ to get $\\frac{2}{\\sqrt{2 + x} + \\sqrt{2 - x}}$', marks: 1 },
      { step: 'Takes the limit $\\frac{1}{\\sqrt{2}}$ and equates it to $f(0) = k$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-b02', chapter: C, topic: DIFF, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $f(x) = x\\sin\\left(\\frac{1}{x}\\right)$ for $x \\neq 0$ and $f(0) = 0$. Show that $f$ is continuous at $x = 0$ but not differentiable at $x = 0$.',
    answer: 'Continuity: $\\left|x\\sin\\frac{1}{x}\\right| \\le |x| \\to 0$, so $\\lim_{x \\to 0} f(x) = 0 = f(0)$ and $f$ is continuous at $0$. Differentiability: $\\frac{f(h) - f(0)}{h} = \\frac{h\\sin(1/h)}{h} = \\sin\\frac{1}{h}$. As $h \\to 0$ this oscillates between $-1$ and $1$ and has no limit, so $f\'(0)$ does not exist.',
    steps: [
      { step: 'Shows $\\lim_{x \\to 0} x\\sin\\frac{1}{x} = 0 = f(0)$ using $|\\sin| \\le 1$, so $f$ is continuous', marks: 1 },
      { step: 'Forms the difference quotient $\\sin\\frac{1}{h}$ and states it has no limit as $h \\to 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-b03', chapter: C, topic: CHAIN, type: 'short', complexity: 'easy', marks: 2,
    text: 'The point $(16, 36)$ lies on the curve $\\sqrt{x} + \\sqrt{y} = 10$. Find $\\frac{dy}{dx}$ at this point.',
    answer: 'Differentiating $\\sqrt{x} + \\sqrt{y} = 10$ with respect to $x$: $\\frac{1}{2\\sqrt{x}} + \\frac{1}{2\\sqrt{y}}\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{\\sqrt{y}}{\\sqrt{x}}$. At $(16, 36)$: $\\frac{dy}{dx} = -\\frac{6}{4} = -\\frac{3}{2}$.',
    steps: [
      { step: 'Differentiates implicitly and obtains $\\frac{dy}{dx} = -\\frac{\\sqrt{y}}{\\sqrt{x}}$', marks: 1 },
      { step: 'Substitutes $(16, 36)$ to get $-\\frac{3}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-b04', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $\\frac{dy}{dx}$ if $y = \\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right)$, where $\\frac{1}{\\sqrt{2}} < x < 1$.',
    answer: 'Put $x = \\sin\\theta$, so $\\theta \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$ and $\\theta = \\sin^{-1}x$. Then $2x\\sqrt{1 - x^{2}} = \\sin 2\\theta$ with $2\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, which is outside the principal range, so $\\sin^{-1}(\\sin 2\\theta) = \\pi - 2\\theta$. Hence $y = \\pi - 2\\sin^{-1}x$ and $\\frac{dy}{dx} = -\\frac{2}{\\sqrt{1 - x^{2}}}$.',
    steps: [
      { step: 'Substitutes $x = \\sin\\theta$ and uses $\\sin^{-1}(\\sin 2\\theta) = \\pi - 2\\theta$ because $2\\theta \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$', marks: 1 },
      { step: 'Writes $y = \\pi - 2\\sin^{-1}x$ and differentiates to $-\\frac{2}{\\sqrt{1 - x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-b05', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 2,
    text: 'Differentiate $y = \\left(1 + x^{2}\\right)^{x}$ with respect to $x$.',
    answer: 'Taking logarithms, $\\log y = x\\log(1 + x^{2})$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\log(1 + x^{2}) + x \\cdot \\frac{2x}{1 + x^{2}}$. Therefore $\\frac{dy}{dx} = (1 + x^{2})^{x}\\left[\\log(1 + x^{2}) + \\frac{2x^{2}}{1 + x^{2}}\\right]$.',
    steps: [
      { step: 'Takes logarithms to get $\\log y = x\\log(1 + x^{2})$', marks: 1 },
      { step: 'Differentiates with the product rule and multiplies back by $y$ to state the result', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-b06', chapter: C, topic: SECOND, type: 'short', complexity: 'easy', marks: 2,
    text: 'If $y = e^{x}(\\sin x + \\cos x)$, show that $\\frac{d^{2}y}{dx^{2}} - 2\\frac{dy}{dx} + 2y = 0$.',
    answer: '$\\frac{dy}{dx} = e^{x}(\\sin x + \\cos x) + e^{x}(\\cos x - \\sin x) = 2e^{x}\\cos x$. Then $\\frac{d^{2}y}{dx^{2}} = 2e^{x}\\cos x - 2e^{x}\\sin x = 2e^{x}(\\cos x - \\sin x)$. So $\\frac{d^{2}y}{dx^{2}} - 2\\frac{dy}{dx} + 2y = 2e^{x}(\\cos x - \\sin x) - 4e^{x}\\cos x + 2e^{x}(\\sin x + \\cos x) = 0$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = 2e^{x}\\cos x$ using the product rule', marks: 1 },
      { step: 'Finds $\\frac{d^{2}y}{dx^{2}}$ and substitutes to show the expression is $0$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-cd-r3-c01', chapter: C, topic: CONT, type: 'short', complexity: 'medium', marks: 3,
    text: 'The function $f$ is defined by $f(x) = \\frac{\\sqrt{1 + kx} - \\sqrt{1 - kx}}{x}$ for $x < 0$ (close to $0$), $f(0) = m$, and $f(x) = \\frac{e^{5x} - 1}{2x}$ for $x > 0$. Find $k$ and $m$ so that $f$ is continuous at $x = 0$.',
    answer: 'Left-hand limit: multiplying by the conjugate, $\\frac{\\sqrt{1 + kx} - \\sqrt{1 - kx}}{x} = \\frac{2k}{\\sqrt{1 + kx} + \\sqrt{1 - kx}} \\to \\frac{2k}{2} = k$. Right-hand limit: $\\frac{e^{5x} - 1}{2x} = \\frac{5}{2}\\cdot\\frac{e^{5x} - 1}{5x} \\to \\frac{5}{2}$. Continuity needs left limit = $f(0)$ = right limit, so $k = m = \\frac{5}{2}$.',
    steps: [
      { step: 'Finds the left-hand limit $k$ by rationalising', marks: 1 },
      { step: 'Finds the right-hand limit $\\frac{5}{2}$ using $\\frac{e^{u} - 1}{u} \\to 1$', marks: 1 },
      { step: 'Equates both limits with $f(0)$ to get $k = m = \\frac{5}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c02', chapter: C, topic: DIFF, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $f(x) = e^{2x}$ for $x \\le 0$ and $f(x) = ax^{2} + bx + 1$ for $x > 0$. Find the values of $a$ and $b$ for which $f$ is differentiable at $x = 0$ and $f\'$ is also differentiable at $x = 0$.',
    answer: 'Here $f(0) = 1$ and the right-hand value tends to $1$, so $f$ is continuous. For $x < 0$: $f\'(x) = 2e^{2x}$, so $f\'(0^{-}) = 2$. For $x > 0$: $f\'(x) = 2ax + b$, so $f\'(0^{+}) = b$. Differentiability at $0$ needs $b = 2$. Now $f\'(0) = 2$, $f\'(x) = 2e^{2x}$ for $x \\le 0$ and $f\'(x) = 2ax + 2$ for $x > 0$. Left derivative of $f\'$ at $0$ is $4e^{0} = 4$ and right derivative is $2a$. Equating, $a = 2$. So $a = 2$, $b = 2$.',
    steps: [
      { step: 'Computes $f\'(0^{-}) = 2$ and $f\'(0^{+}) = b$ and gets $b = 2$', marks: 1 },
      { step: 'Writes $f\'(x)$ on both sides of $0$ with $f\'(0) = 2$', marks: 1 },
      { step: 'Equates the left derivative $4$ and the right derivative $2a$ of $f\'$ at $0$ to get $a = 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c03', chapter: C, topic: CHAIN, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $\\tan^{-1}\\left(\\frac{y}{x}\\right) = \\frac{1}{2}\\log\\left(x^{2} + y^{2}\\right)$, where $x > 0$, show that $\\frac{dy}{dx} = \\frac{x + y}{x - y}$.',
    answer: 'Differentiate both sides with respect to $x$. Left side: $\\frac{1}{1 + y^{2}/x^{2}}\\cdot\\frac{x\\frac{dy}{dx} - y}{x^{2}} = \\frac{x\\frac{dy}{dx} - y}{x^{2} + y^{2}}$. Right side: $\\frac{1}{2}\\cdot\\frac{2x + 2y\\frac{dy}{dx}}{x^{2} + y^{2}} = \\frac{x + y\\frac{dy}{dx}}{x^{2} + y^{2}}$. Equating, $x\\frac{dy}{dx} - y = x + y\\frac{dy}{dx}$, so $(x - y)\\frac{dy}{dx} = x + y$ and $\\frac{dy}{dx} = \\frac{x + y}{x - y}$.',
    steps: [
      { step: 'Differentiates the left side with the chain and quotient rules to get $\\frac{x y\' - y}{x^{2} + y^{2}}$', marks: 1 },
      { step: 'Differentiates the right side to get $\\frac{x + y y\'}{x^{2} + y^{2}}$', marks: 1 },
      { step: 'Equates, collects the $\\frac{dy}{dx}$ terms and solves for $\\frac{x + y}{x - y}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c04', chapter: C, topic: INV, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y = x\\sin^{-1}x + \\sqrt{1 - x^{2}}$, where $-1 < x < 1$, show that $\\frac{dy}{dx} = \\sin^{-1}x$ and hence find $\\frac{d^{2}y}{dx^{2}}$.',
    answer: 'By the product rule, $\\frac{d}{dx}\\left(x\\sin^{-1}x\\right) = \\sin^{-1}x + \\frac{x}{\\sqrt{1 - x^{2}}}$. Also $\\frac{d}{dx}\\sqrt{1 - x^{2}} = \\frac{-x}{\\sqrt{1 - x^{2}}}$. Adding, the terms in $\\frac{x}{\\sqrt{1 - x^{2}}}$ cancel and $\\frac{dy}{dx} = \\sin^{-1}x$. Differentiating again, $\\frac{d^{2}y}{dx^{2}} = \\frac{1}{\\sqrt{1 - x^{2}}}$.',
    steps: [
      { step: 'Applies the product rule to $x\\sin^{-1}x$', marks: 1 },
      { step: 'Differentiates $\\sqrt{1 - x^{2}}$ and shows the sum is $\\sin^{-1}x$', marks: 1 },
      { step: 'Differentiates $\\sin^{-1}x$ to get $\\frac{d^{2}y}{dx^{2}} = \\frac{1}{\\sqrt{1 - x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c05', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y = (1 + x)^{1/x}$, $x > 0$, find $\\frac{dy}{dx}$ and its value at $x = 1$.',
    answer: 'Taking logarithms, $\\log y = \\frac{\\log(1 + x)}{x}$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{1}{x(1 + x)} - \\frac{\\log(1 + x)}{x^{2}}$. Hence $\\frac{dy}{dx} = (1 + x)^{1/x}\\left[\\frac{1}{x(1 + x)} - \\frac{\\log(1 + x)}{x^{2}}\\right]$. At $x = 1$: $y = 2$ and the bracket is $\\frac{1}{2} - \\log 2$, so $\\frac{dy}{dx} = 2\\left(\\frac{1}{2} - \\log 2\\right) = 1 - 2\\log 2$.',
    steps: [
      { step: 'Takes logarithms to get $\\log y = \\frac{\\log(1 + x)}{x}$', marks: 1 },
      { step: 'Differentiates with the quotient rule and multiplies by $y$ to state $\\frac{dy}{dx}$', marks: 1 },
      { step: 'Substitutes $x = 1$ to get $1 - 2\\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c06', chapter: C, topic: LOG, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\frac{dy}{dx}$ if $y = (\\log x)^{\\log x}$, $x > 1$.',
    answer: 'Taking logarithms, $\\log y = \\log x \\cdot \\log(\\log x)$. Differentiating with the product rule, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{1}{x}\\log(\\log x) + \\log x \\cdot \\frac{1}{\\log x}\\cdot\\frac{1}{x} = \\frac{\\log(\\log x) + 1}{x}$. Therefore $\\frac{dy}{dx} = \\frac{(\\log x)^{\\log x}}{x}\\left[1 + \\log(\\log x)\\right]$.',
    steps: [
      { step: 'Takes logarithms to get $\\log y = \\log x\\cdot\\log(\\log x)$', marks: 1 },
      { step: 'Differentiates with the product rule, including the chain rule on $\\log(\\log x)$', marks: 1 },
      { step: 'Simplifies and multiplies by $y$ to state the final result', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c07', chapter: C, topic: PARAM, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $x = a\\left(\\cos t + \\log\\tan\\frac{t}{2}\\right)$ and $y = a\\sin t$, where $a > 0$ and $0 < t < \\frac{\\pi}{2}$, show that $\\frac{dy}{dx} = \\tan t$.',
    answer: '$\\frac{dy}{dt} = a\\cos t$. For $x$: $\\frac{d}{dt}\\log\\tan\\frac{t}{2} = \\frac{1}{\\tan(t/2)}\\sec^{2}\\frac{t}{2}\\cdot\\frac{1}{2} = \\frac{1}{2\\sin\\frac{t}{2}\\cos\\frac{t}{2}} = \\frac{1}{\\sin t}$. So $\\frac{dx}{dt} = a\\left(-\\sin t + \\frac{1}{\\sin t}\\right) = \\frac{a\\cos^{2}t}{\\sin t}$. Therefore $\\frac{dy}{dx} = \\frac{a\\cos t}{a\\cos^{2}t/\\sin t} = \\frac{\\sin t}{\\cos t} = \\tan t$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dt} = a\\cos t$', marks: 1 },
      { step: 'Finds $\\frac{dx}{dt} = a\\left(-\\sin t + \\frac{1}{\\sin t}\\right) = \\frac{a\\cos^{2}t}{\\sin t}$ using $\\frac{d}{dt}\\log\\tan\\frac{t}{2} = \\frac{1}{\\sin t}$', marks: 1 },
      { step: 'Divides to obtain $\\frac{dy}{dx} = \\tan t$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c08', chapter: C, topic: SECOND, type: 'short', complexity: 'medium', marks: 3,
    text: 'If $y = e^{a\\sin^{-1}x}$, where $-1 < x < 1$ and $a$ is a constant, show that $(1 - x^{2})\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} - a^{2}y = 0$.',
    answer: '$\\frac{dy}{dx} = e^{a\\sin^{-1}x}\\cdot\\frac{a}{\\sqrt{1 - x^{2}}} = \\frac{ay}{\\sqrt{1 - x^{2}}}$, so $\\sqrt{1 - x^{2}}\\,\\frac{dy}{dx} = ay$. Differentiating again: $\\sqrt{1 - x^{2}}\\,\\frac{d^{2}y}{dx^{2}} - \\frac{x}{\\sqrt{1 - x^{2}}}\\frac{dy}{dx} = a\\frac{dy}{dx} = \\frac{a^{2}y}{\\sqrt{1 - x^{2}}}$. Multiplying by $\\sqrt{1 - x^{2}}$ gives $(1 - x^{2})\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} = a^{2}y$, that is $(1 - x^{2})\\frac{d^{2}y}{dx^{2}} - x\\frac{dy}{dx} - a^{2}y = 0$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = \\frac{ay}{\\sqrt{1 - x^{2}}}$ using the chain rule', marks: 1 },
      { step: 'Differentiates $\\sqrt{1 - x^{2}}\\,\\frac{dy}{dx} = ay$ again with the product rule', marks: 1 },
      { step: 'Substitutes $a\\frac{dy}{dx}$ and simplifies to the required equation', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c09', chapter: C, topic: PARAM, type: 'short', complexity: 'hard', marks: 3,
    text: 'If $x = a\\cos^{3}t$ and $y = a\\sin^{3}t$, where $a > 0$ and $0 < t < \\frac{\\pi}{2}$, find $\\frac{d^{2}y}{dx^{2}}$ and its value at $t = \\frac{\\pi}{4}$.',
    answer: '$\\frac{dx}{dt} = -3a\\cos^{2}t\\sin t$ and $\\frac{dy}{dt} = 3a\\sin^{2}t\\cos t$, so $\\frac{dy}{dx} = -\\tan t$. Then $\\frac{d^{2}y}{dx^{2}} = \\frac{d}{dt}(-\\tan t)\\cdot\\frac{dt}{dx} = -\\sec^{2}t \\cdot \\frac{1}{-3a\\cos^{2}t\\sin t} = \\frac{\\sec^{4}t}{3a\\sin t}$. At $t = \\frac{\\pi}{4}$: $\\sec^{4}\\frac{\\pi}{4} = 4$ and $\\sin\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}$, so the value is $\\frac{4\\sqrt{2}}{3a}$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx} = -\\tan t$', marks: 1 },
      { step: 'Differentiates $-\\tan t$ with respect to $t$ and divides by $\\frac{dx}{dt}$ to get $\\frac{\\sec^{4}t}{3a\\sin t}$', marks: 1 },
      { step: 'Substitutes $t = \\frac{\\pi}{4}$ to get $\\frac{4\\sqrt{2}}{3a}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-c10', chapter: C, topic: DIFF, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f(x) = |x|(x - 1)$. Find the left-hand and right-hand derivatives of $f$ at $x = 0$, and hence decide whether $f$ is differentiable at $x = 0$. Is $f$ differentiable at $x = 1$?',
    answer: 'For $x < 0$, $|x| = -x$ so $f(x) = -x(x - 1) = x - x^{2}$. For $x \\ge 0$, $f(x) = x^{2} - x$. Also $f(0) = 0$. Left-hand derivative at $0$: $\\lim_{h \\to 0^{-}}\\frac{h - h^{2}}{h} = \\lim (1 - h) = 1$. Right-hand derivative at $0$: $\\lim_{h \\to 0^{+}}\\frac{h^{2} - h}{h} = \\lim (h - 1) = -1$. They are unequal, so $f$ is not differentiable at $x = 0$. Near $x = 1$, $f(x) = x^{2} - x$, a polynomial, so $f$ is differentiable at $x = 1$ with $f\'(1) = 2(1) - 1 = 1$.',
    steps: [
      { step: 'Writes $f(x)$ without the modulus as $x - x^{2}$ for $x < 0$ and $x^{2} - x$ for $x \\ge 0$', marks: 1 },
      { step: 'Finds left derivative $1$ and right derivative $-1$ at $0$ and concludes $f$ is not differentiable there', marks: 1 },
      { step: 'Notes $f$ equals the polynomial $x^{2} - x$ near $x = 1$, so it is differentiable there', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-cd-r3-d01', chapter: C, topic: DIFF, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = x^{2}\\sin\\left(\\frac{1}{x}\\right)$ for $x \\neq 0$ and $f(0) = 0$.\n(a) Show that $f$ is differentiable at $x = 0$ and find $f\'(0)$.\n(b) Find $f\'(x)$ for $x \\neq 0$.\n(c) Show that $f\'$ is not continuous at $x = 0$.',
    answer: '(a) $\\frac{f(h) - f(0)}{h} = h\\sin\\frac{1}{h}$, and $\\left|h\\sin\\frac{1}{h}\\right| \\le |h| \\to 0$. So $f\'(0)$ exists and equals $0$. (b) For $x \\neq 0$, by the product and chain rules, $f\'(x) = 2x\\sin\\frac{1}{x} + x^{2}\\cos\\frac{1}{x}\\cdot\\left(-\\frac{1}{x^{2}}\\right) = 2x\\sin\\frac{1}{x} - \\cos\\frac{1}{x}$. (c) As $x \\to 0$, $2x\\sin\\frac{1}{x} \\to 0$ but $\\cos\\frac{1}{x}$ oscillates between $-1$ and $1$ and has no limit. Hence $\\lim_{x \\to 0} f\'(x)$ does not exist, while $f\'(0) = 0$, so $f\'$ is not continuous at $0$.',
    steps: [
      { step: 'Forms the difference quotient $h\\sin\\frac{1}{h}$ at $0$', marks: 1 },
      { step: 'Shows its limit is $0$ by bounding with $|h|$, so $f\'(0) = 0$', marks: 1 },
      { step: 'Differentiates for $x \\neq 0$ to get $2x\\sin\\frac{1}{x} - \\cos\\frac{1}{x}$', marks: 1 },
      { step: 'Shows $2x\\sin\\frac{1}{x} \\to 0$ while $\\cos\\frac{1}{x}$ has no limit as $x \\to 0$', marks: 1 },
      { step: 'Concludes $\\lim_{x \\to 0} f\'(x)$ does not exist, so $f\'$ is not continuous at $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d02', chapter: C, topic: DIFF, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $f(x) = |x - 1|$ and $g(x) = f(f(x))$ for all real $x$.\n(a) Write $g(x)$ without modulus signs on each of the intervals $x < 0$, $0 \\le x < 1$, $1 \\le x < 2$ and $x \\ge 2$.\n(b) Show that $g$ is continuous at every real number.\n(c) Find all points at which $g$ is not differentiable.',
    answer: '(a) $g(x) = ||x - 1| - 1|$. For $x \\ge 1$, $|x - 1| = x - 1$ and $g(x) = |x - 2|$; for $x < 1$, $|x - 1| = 1 - x$ and $g(x) = |-x| = |x|$. Hence $g(x) = -x$ for $x < 0$; $g(x) = x$ for $0 \\le x < 1$; $g(x) = 2 - x$ for $1 \\le x < 2$; $g(x) = x - 2$ for $x \\ge 2$. (b) Each piece is a polynomial, so $g$ is continuous inside each interval. At $x = 0$: both sides tend to $0 = g(0)$. At $x = 1$: left limit $1$, right limit $2 - 1 = 1$, and $g(1) = 1$. At $x = 2$: left limit $0$, right limit $0$, and $g(2) = 0$. So $g$ is continuous everywhere. (c) Slopes of the pieces are $-1, 1, -1, 1$ in order. At $x = 0$: left derivative $-1$, right derivative $1$. At $x = 1$: left $1$, right $-1$. At $x = 2$: left $-1$, right $1$. In each case they differ, so $g$ is not differentiable at $x = 0, 1, 2$ and is differentiable everywhere else.',
    steps: [
      { step: 'Splits $g(x) = ||x - 1| - 1|$ according to $x \\ge 1$ or $x < 1$', marks: 1 },
      { step: 'States the four pieces $-x$, $x$, $2 - x$, $x - 2$ on the given intervals', marks: 1 },
      { step: 'Checks limits and values at $0$, $1$ and $2$ to show continuity', marks: 1 },
      { step: 'Finds the one-sided derivatives $\\mp 1$ at each of $0$, $1$, $2$', marks: 1 },
      { step: 'Concludes $g$ is not differentiable exactly at $x = 0, 1, 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d03', chapter: C, topic: CONT, type: 'long', complexity: 'medium', marks: 5,
    text: 'The function $f$ is defined on $[0, 8]$ by $f(x) = \\frac{x^{3} - 27}{x^{2} - 9}$ for $0 \\le x < 3$, $f(3) = a$, $f(x) = bx + c$ for $3 < x < 5$, and $f(x) = \\frac{17}{2}$ for $5 \\le x \\le 8$.\n(a) Find $a$, $b$ and $c$ so that $f$ is continuous on $[0, 8]$.\n(b) With these values, examine whether $f$ is differentiable at $x = 3$ and at $x = 5$.',
    answer: '(a) For $x < 3$, $\\frac{x^{3} - 27}{x^{2} - 9} = \\frac{(x - 3)(x^{2} + 3x + 9)}{(x - 3)(x + 3)} = \\frac{x^{2} + 3x + 9}{x + 3}$, which tends to $\\frac{27}{6} = \\frac{9}{2}$ as $x \\to 3$. Continuity at $3$ needs $a = \\frac{9}{2}$ and $3b + c = \\frac{9}{2}$. Continuity at $5$ needs $5b + c = \\frac{17}{2}$. Subtracting, $2b = 4$, so $b = 2$ and $c = \\frac{9}{2} - 6 = -\\frac{3}{2}$. (b) At $x = 3$: for $x < 3$, $f(x) = \\frac{x^{2} + 3x + 9}{x + 3}$ and its derivative is $\\frac{(2x + 3)(x + 3) - (x^{2} + 3x + 9)}{(x + 3)^{2}}$, which at $x = 3$ is $\\frac{9 \\cdot 6 - 27}{36} = \\frac{3}{4}$. The right derivative is $b = 2$. These differ, so $f$ is not differentiable at $3$. At $x = 5$: left derivative is $b = 2$ and right derivative is $0$ (constant), so $f$ is not differentiable at $5$.',
    steps: [
      { step: 'Cancels $x - 3$ and finds $\\lim_{x \\to 3^{-}} f(x) = \\frac{9}{2}$, giving $a = \\frac{9}{2}$', marks: 1 },
      { step: 'Writes the continuity conditions $3b + c = \\frac{9}{2}$ and $5b + c = \\frac{17}{2}$', marks: 1 },
      { step: 'Solves to get $b = 2$ and $c = -\\frac{3}{2}$', marks: 1 },
      { step: 'Finds the left derivative $\\frac{3}{4}$ and right derivative $2$ at $x = 3$, so not differentiable', marks: 1 },
      { step: 'Finds the left derivative $2$ and right derivative $0$ at $x = 5$, so not differentiable', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d04', chapter: C, topic: LOG, type: 'long', complexity: 'hard', marks: 5,
    text: 'If $y = x^{x^{x}}$, where $x > 0$, find $\\frac{dy}{dx}$ and hence evaluate it at $x = 1$.',
    answer: 'Taking logarithms, $\\log y = x^{x}\\log x$. Let $u = x^{x}$. Then $\\log u = x\\log x$, so $\\frac{1}{u}\\frac{du}{dx} = \\log x + 1$ and $\\frac{du}{dx} = x^{x}(1 + \\log x)$. Differentiating $\\log y = u\\log x$: $\\frac{1}{y}\\frac{dy}{dx} = \\frac{du}{dx}\\log x + \\frac{u}{x} = x^{x}(1 + \\log x)\\log x + \\frac{x^{x}}{x}$. Therefore $\\frac{dy}{dx} = x^{x^{x}}\\cdot x^{x}\\left[(1 + \\log x)\\log x + \\frac{1}{x}\\right]$. At $x = 1$: $y = 1$, $x^{x} = 1$, $\\log 1 = 0$, so the bracket is $0 + 1 = 1$ and $\\frac{dy}{dx} = 1$.',
    steps: [
      { step: 'Takes logarithms to write $\\log y = x^{x}\\log x$', marks: 1 },
      { step: 'Finds $\\frac{d}{dx}x^{x} = x^{x}(1 + \\log x)$ by logarithmic differentiation', marks: 1 },
      { step: 'Differentiates $\\log y$ by the product rule to get $x^{x}(1 + \\log x)\\log x + \\frac{x^{x}}{x}$', marks: 1 },
      { step: 'Multiplies by $y$ to state $\\frac{dy}{dx}$', marks: 1 },
      { step: 'Substitutes $x = 1$ to get $1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d05', chapter: C, topic: PARAM, type: 'long', complexity: 'medium', marks: 5,
    text: 'If $x = a(\\cos t + t\\sin t)$ and $y = a(\\sin t - t\\cos t)$, where $a > 0$ and $0 < t < \\frac{\\pi}{2}$:\n(a) Show that $\\frac{dy}{dx} = \\tan t$.\n(b) Show that $\\frac{d^{2}y}{dx^{2}} = \\frac{\\sec^{3}t}{at}$.\n(c) Find the value of $\\frac{d^{2}y}{dx^{2}}$ at $t = \\frac{\\pi}{4}$.',
    answer: '(a) $\\frac{dx}{dt} = a(-\\sin t + \\sin t + t\\cos t) = at\\cos t$ and $\\frac{dy}{dt} = a(\\cos t - \\cos t + t\\sin t) = at\\sin t$. So $\\frac{dy}{dx} = \\frac{at\\sin t}{at\\cos t} = \\tan t$. (b) $\\frac{d^{2}y}{dx^{2}} = \\frac{d}{dt}(\\tan t)\\cdot\\frac{dt}{dx} = \\sec^{2}t\\cdot\\frac{1}{at\\cos t} = \\frac{\\sec^{3}t}{at}$. (c) At $t = \\frac{\\pi}{4}$, $\\sec^{3}\\frac{\\pi}{4} = (\\sqrt{2})^{3} = 2\\sqrt{2}$, so $\\frac{d^{2}y}{dx^{2}} = \\frac{2\\sqrt{2}}{a\\cdot\\pi/4} = \\frac{8\\sqrt{2}}{\\pi a}$.',
    steps: [
      { step: 'Finds $\\frac{dx}{dt} = at\\cos t$', marks: 1 },
      { step: 'Finds $\\frac{dy}{dt} = at\\sin t$ and divides to get $\\frac{dy}{dx} = \\tan t$', marks: 1 },
      { step: 'Differentiates $\\tan t$ with respect to $t$ to get $\\sec^{2}t$', marks: 1 },
      { step: 'Divides by $\\frac{dx}{dt}$ to obtain $\\frac{\\sec^{3}t}{at}$', marks: 1 },
      { step: 'Substitutes $t = \\frac{\\pi}{4}$ to get $\\frac{8\\sqrt{2}}{\\pi a}$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d06', chapter: C, topic: SECOND, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $y = e^{\\tan^{-1}x}$.\n(a) Show that $(1 + x^{2})\\frac{dy}{dx} = y$.\n(b) Hence show that $(1 + x^{2})\\frac{d^{2}y}{dx^{2}} + (2x - 1)\\frac{dy}{dx} = 0$.\n(c) Show that $\\frac{d^{2}y}{dx^{2}} = \\frac{(1 - 2x)\\,y}{(1 + x^{2})^{2}}$ and find the value of $\\frac{d^{2}y}{dx^{2}}$ at $x = 0$.',
    answer: '(a) $\\frac{dy}{dx} = e^{\\tan^{-1}x}\\cdot\\frac{1}{1 + x^{2}} = \\frac{y}{1 + x^{2}}$, so $(1 + x^{2})y\' = y$. (b) Differentiate $(1 + x^{2})y\' = y$: $2xy\' + (1 + x^{2})y\'\' = y\'$, which gives $(1 + x^{2})y\'\' + (2x - 1)y\' = 0$. (c) From (b), $y\'\' = \\frac{(1 - 2x)y\'}{1 + x^{2}}$, and substituting $y\' = \\frac{y}{1 + x^{2}}$ from (a) gives $y\'\' = \\frac{(1 - 2x)\\,y}{(1 + x^{2})^{2}}$. At $x = 0$: $y = e^{0} = 1$, so $y\'\'(0) = 1$.',
    steps: [
      { step: 'Differentiates $y$ by the chain rule and rearranges to $(1 + x^{2})y\' = y$', marks: 1 },
      { step: 'Differentiates $(1 + x^{2})y\' = y$ with the product rule to get the second-order relation in (b)', marks: 1 },
      { step: 'Rearranges (b) to $y\'\' = \\frac{(1 - 2x)y\'}{1 + x^{2}}$ and substitutes $y\'$ from (a) to get $\\frac{(1 - 2x)y}{(1 + x^{2})^{2}}$', marks: 1 },
      { step: 'Finds $y(0) = e^{0} = 1$', marks: 1 },
      { step: 'Substitutes $x = 0$ to get $y\'\'(0) = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d07', chapter: C, topic: INV, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $y = \\cot^{-1}\\left(\\frac{\\sqrt{1 + \\sin x} + \\sqrt{1 - \\sin x}}{\\sqrt{1 + \\sin x} - \\sqrt{1 - \\sin x}}\\right)$, where $0 < x < \\pi$.\n(a) Simplify $y$ and find $\\frac{dy}{dx}$ when $0 < x < \\frac{\\pi}{2}$.\n(b) Simplify $y$ and find $\\frac{dy}{dx}$ when $\\frac{\\pi}{2} < x < \\pi$.\n(c) Using $y\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi}{4}$, decide whether $y$ is differentiable at $x = \\frac{\\pi}{2}$.',
    answer: 'Use $1 + \\sin x = \\left(\\sin\\frac{x}{2} + \\cos\\frac{x}{2}\\right)^{2}$ and $1 - \\sin x = \\left(\\sin\\frac{x}{2} - \\cos\\frac{x}{2}\\right)^{2}$, so the square roots are the absolute values of these. Write $s = \\sin\\frac{x}{2}$ and $c = \\cos\\frac{x}{2}$. (a) For $0 < x < \\frac{\\pi}{2}$, $c > s > 0$, so $\\sqrt{1 + \\sin x} = c + s$ and $\\sqrt{1 - \\sin x} = c - s$. The fraction is $\\frac{(c + s) + (c - s)}{(c + s) - (c - s)} = \\frac{2c}{2s} = \\cot\\frac{x}{2}$. Then $y = \\cot^{-1}\\left(\\cot\\frac{x}{2}\\right) = \\frac{x}{2}$ (as $\\frac{x}{2} \\in (0, \\pi)$), and $\\frac{dy}{dx} = \\frac{1}{2}$. (b) For $\\frac{\\pi}{2} < x < \\pi$, $s > c > 0$, so $\\sqrt{1 - \\sin x} = s - c$. The fraction is $\\frac{(s + c) + (s - c)}{(s + c) - (s - c)} = \\frac{2s}{2c} = \\tan\\frac{x}{2}$. Then $y = \\cot^{-1}\\left(\\tan\\frac{x}{2}\\right) = \\frac{\\pi}{2} - \\frac{x}{2}$, and $\\frac{dy}{dx} = -\\frac{1}{2}$. (c) At $x = \\frac{\\pi}{2}$ the left derivative is $\\frac{1}{2}$ and the right derivative is $-\\frac{1}{2}$ (both pieces equal $\\frac{\\pi}{4}$ there, so $y$ is continuous). The one-sided derivatives differ, so $y$ is not differentiable at $x = \\frac{\\pi}{2}$.',
    steps: [
      { step: 'Rewrites $1 \\pm \\sin x$ as perfect squares of $\\sin\\frac{x}{2} \\pm \\cos\\frac{x}{2}$ and handles the absolute values', marks: 1 },
      { step: 'For $0 < x < \\frac{\\pi}{2}$, simplifies the fraction to $\\cot\\frac{x}{2}$, so $y = \\frac{x}{2}$ and $\\frac{dy}{dx} = \\frac{1}{2}$', marks: 1 },
      { step: 'For $\\frac{\\pi}{2} < x < \\pi$, simplifies the fraction to $\\tan\\frac{x}{2}$, so $y = \\frac{\\pi}{2} - \\frac{x}{2}$', marks: 1 },
      { step: 'States $\\frac{dy}{dx} = -\\frac{1}{2}$ on $\\left(\\frac{\\pi}{2}, \\pi\\right)$', marks: 1 },
      { step: 'Compares the one-sided derivatives $\\frac{1}{2}$ and $-\\frac{1}{2}$ at $\\frac{\\pi}{2}$ and concludes not differentiable', marks: 1 },
    ],
  },
  {
    id: 'c12-cd-r3-d08', chapter: C, topic: CHAIN, type: 'long', complexity: 'hard', marks: 5,
    text: 'A curve is given implicitly by $xe^{y} + ye^{x} = 1$.\n(a) Find $\\frac{dy}{dx}$ in terms of $x$ and $y$.\n(b) Verify that the point $(1, 0)$ lies on the curve and find the value of $\\frac{dy}{dx}$ there.\n(c) Find the value of $\\frac{d^{2}y}{dx^{2}}$ at $(1, 0)$.',
    answer: '(a) Differentiating, $e^{y} + xe^{y}\\frac{dy}{dx} + \\frac{dy}{dx}e^{x} + ye^{x} = 0$, so $\\frac{dy}{dx} = -\\frac{e^{y} + ye^{x}}{xe^{y} + e^{x}}$. (b) At $(1, 0)$: $1\\cdot e^{0} + 0\\cdot e^{1} = 1$, so the point is on the curve. Then $\\frac{dy}{dx} = -\\frac{1 + 0}{1 + e} = -\\frac{1}{1 + e}$. (c) Write $y\' = \\frac{dy}{dx}$ and differentiate $y\'(xe^{y} + e^{x}) = -(e^{y} + ye^{x})$: $y\'\'(xe^{y} + e^{x}) + y\'\\left(e^{y} + xe^{y}y\' + e^{x}\\right) = -\\left(e^{y}y\' + y\'e^{x} + ye^{x}\\right)$. At $(1, 0)$ with $p = y\' = -\\frac{1}{1 + e}$: $y\'\'(1 + e) + p(1 + p + e) = -p(1 + e)$. So $y\'\'(1 + e) = -p\\left[2(1 + e) + p\\right] = \\frac{1}{1 + e}\\left[2(1 + e) - \\frac{1}{1 + e}\\right] = 2 - \\frac{1}{(1 + e)^{2}}$. Hence $\\frac{d^{2}y}{dx^{2}} = \\frac{2}{1 + e} - \\frac{1}{(1 + e)^{3}}$.',
    steps: [
      { step: 'Differentiates the equation implicitly with the product rule on both terms', marks: 1 },
      { step: 'Solves to state $\\frac{dy}{dx} = -\\frac{e^{y} + ye^{x}}{xe^{y} + e^{x}}$', marks: 1 },
      { step: 'Verifies the point and finds $\\frac{dy}{dx} = -\\frac{1}{1 + e}$ at $(1, 0)$', marks: 1 },
      { step: 'Differentiates the relation again to get an equation containing $\\frac{d^{2}y}{dx^{2}}$', marks: 1 },
      { step: 'Substitutes $(1, 0)$ and $\\frac{dy}{dx}$ to get $\\frac{2}{1 + e} - \\frac{1}{(1 + e)^{3}}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-cd-r3-e01', chapter: C, topic: CONT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An audio chip outputs a voltage $s(t)$ volts, where $t$ is the time in milliseconds measured from the moment a signal is switched on at $t = 0$. The designer models the output as $s(t) = \\frac{\\sin 4t}{2t}$ for $t < 0$ (the pre-signal), $s(0) = A$, and $s(t) = \\frac{e^{pt} - 1}{t}$ for $t > 0$, where $A$ and $p$ are constants. The chip must not have a sudden jump in voltage at $t = 0$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\lim_{t \\to 0^{-}} s(t)$.',
        answer: '$\\frac{\\sin 4t}{2t} = 2\\cdot\\frac{\\sin 4t}{4t} \\to 2\\cdot 1 = 2$. So the left-hand limit is $2$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\lim_{t \\to 0^{+}} s(t)$ in terms of $p$, and hence find the value of $p$ for which the left and right limits are equal.',
        answer: '$\\frac{e^{pt} - 1}{t} = p\\cdot\\frac{e^{pt} - 1}{pt} \\to p$ (for $p \\neq 0$). Equating with the left-hand limit $2$ gives $p = 2$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $A$ for $s$ to be continuous at $t = 0$, and find the voltage at $t = 0.5$ ms.\nOR\nIf the designer instead takes $p = 3$ and $A = 2$, show that $s$ is not continuous at $t = 0$ and find the size of the jump in voltage.',
        answer: 'Continuity needs $A = \\lim_{t \\to 0} s(t) = 2$. With $p = 2$, $s(0.5) = \\frac{e^{2 \\times 0.5} - 1}{0.5} = 2(e - 1)$ volts, about $3.44$ V. OR: with $p = 3$, the right-hand limit is $3$ while the left-hand limit and $s(0)$ are both $2$. Since the right-hand limit differs from $s(0)$, $s$ is not continuous at $0$, and the jump in voltage is $3 - 2 = 1$ volt.',
      },
    ],
    answer: 'Left limit $2$; right limit $p$ so $p = 2$; $A = 2$ and $s(0.5) = 2(e - 1)$ V (OR: jump of $1$ V when $p = 3$).',
  },
  {
    id: 'c12-cd-r3-e02', chapter: C, topic: DIFF, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'The edge of a stone garden path is laid out along the curve $y = x|x - 2|$ for $0 \\le x \\le 4$, where $x$ and $y$ are in metres, measured on a coordinate grid fixed to the garden. The landscaper wants to know whether the edge has a sharp corner.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write $y$ without the modulus sign for $0 \\le x < 2$ and for $2 \\le x \\le 4$.',
        answer: 'For $0 \\le x < 2$, $|x - 2| = 2 - x$, so $y = x(2 - x) = 2x - x^{2}$. For $2 \\le x \\le 4$, $|x - 2| = x - 2$, so $y = x(x - 2) = x^{2} - 2x$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the left-hand derivative and the right-hand derivative of $y$ at $x = 2$.',
        answer: 'For $x < 2$, $\\frac{dy}{dx} = 2 - 2x$, so the left-hand derivative at $2$ is $2 - 4 = -2$. For $x > 2$, $\\frac{dy}{dx} = 2x - 2$, so the right-hand derivative at $2$ is $4 - 2 = 2$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $\\frac{dy}{dx}$ at $x = 1$ and at $x = 3$, and state whether the edge has a sharp corner at $x = 2$.\nOR\nShow that $y$ is continuous at $x = 2$, and explain why the edge nevertheless has a sharp corner there.',
        answer: 'At $x = 1$ (where $y = 2x - x^{2}$), $\\frac{dy}{dx} = 2 - 2 = 0$. At $x = 3$ (where $y = x^{2} - 2x$), $\\frac{dy}{dx} = 6 - 2 = 4$. Since the left and right derivatives at $x = 2$ are $-2$ and $2$, which are unequal, $y$ is not differentiable at $2$, so there is a sharp corner there. OR: both $2x - x^{2}$ and $x^{2} - 2x$ equal $0$ at $x = 2$, so the left limit, right limit and $y(2) = 0$ agree and $y$ is continuous. The curve has no gap, but its slope jumps from $-2$ to $2$, so the direction changes abruptly and a corner forms.',
      },
    ],
    answer: '(i) $2x - x^{2}$ and $x^{2} - 2x$; (ii) $-2$ and $2$; (iii) slopes $0$ and $4$, and a corner at $x = 2$ (OR continuity shown and the corner explained by the unequal slopes).',
  },
  {
    id: 'c12-cd-r3-e03', chapter: C, topic: LOG, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a laboratory, the size of a bacterial colony is modelled by $N(t) = (t + 1)^{t}$ thousand cells, where $t \\ge 0$ is the time in hours since the experiment began.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Take logarithms and write $\\log N$ in terms of $t$.',
        answer: '$\\log N = t\\log(t + 1)$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\frac{dN}{dt}$, the rate of growth of the colony.',
        answer: 'Differentiating $\\log N = t\\log(t + 1)$: $\\frac{1}{N}\\frac{dN}{dt} = \\log(t + 1) + \\frac{t}{t + 1}$. So $\\frac{dN}{dt} = (t + 1)^{t}\\left[\\log(t + 1) + \\frac{t}{t + 1}\\right]$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the rate of growth at $t = 1$ hour.\nOR\nShow that the colony is growing at every instant $t > 0$.',
        answer: 'At $t = 1$: $N = 2$ and the bracket is $\\log 2 + \\frac{1}{2}$, so $\\frac{dN}{dt} = 2\\log 2 + 1$ thousand cells per hour, about $2.39$ thousand per hour. OR: for $t > 0$, $(t + 1)^{t} > 0$, $\\log(t + 1) > 0$ and $\\frac{t}{t + 1} > 0$, so every factor of $\\frac{dN}{dt}$ is positive. Hence $\\frac{dN}{dt} > 0$ and the colony is always growing.',
      },
    ],
    answer: '$\\log N = t\\log(t + 1)$; $\\frac{dN}{dt} = (t + 1)^{t}\\left[\\log(t + 1) + \\frac{t}{t + 1}\\right]$; rate at $t = 1$ is $2\\log 2 + 1$ thousand per hour (OR positive for all $t > 0$).',
  },
  {
    id: 'c12-cd-r3-e04', chapter: C, topic: SECOND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A test sled is pushed along a straight track against a damping brake. Its distance from the starting line after $t$ seconds is $s(t) = t^{2}e^{-t}$ metres, for $t \\ge 0$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the velocity $v = \\frac{ds}{dt}$ of the sled.',
        answer: 'By the product rule, $v = 2te^{-t} - t^{2}e^{-t} = e^{-t}\\left(2t - t^{2}\\right) = te^{-t}(2 - t)$ m/s.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the acceleration $a = \\frac{d^{2}s}{dt^{2}}$ of the sled.',
        answer: '$a = \\frac{d}{dt}\\left[e^{-t}(2t - t^{2})\\right] = -e^{-t}(2t - t^{2}) + e^{-t}(2 - 2t) = e^{-t}\\left(t^{2} - 4t + 2\\right)$ m/s$^{2}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the time $t > 0$ at which the sled momentarily stops, and its acceleration at that moment.\nOR\nFind the times $t > 0$ at which the acceleration is zero.',
        answer: 'The sled stops when $v = 0$: $te^{-t}(2 - t) = 0$, so for $t > 0$, $t = 2$ s. Then $a = e^{-2}(4 - 8 + 2) = -2e^{-2}$ m/s$^{2}$, about $-0.27$ m/s$^{2}$. OR: $a = 0$ needs $t^{2} - 4t + 2 = 0$, so $t = \\frac{4 \\pm \\sqrt{8}}{2} = 2 \\pm \\sqrt{2}$. Both are positive, so the acceleration is zero at $t = 2 - \\sqrt{2}$ s and $t = 2 + \\sqrt{2}$ s.',
      },
    ],
    answer: '$v = te^{-t}(2 - t)$; $a = e^{-t}(t^{2} - 4t + 2)$; stops at $t = 2$ with $a = -2e^{-2}$ (OR $a = 0$ at $t = 2 \\pm \\sqrt{2}$).',
  },
];
