import type { Class12Question } from './types.js';

const C = 'Integrals';

const AR_OPTIONS = [
  'Both A and R are true, and R is the correct explanation of A.',
  'Both A and R are true, but R is not the correct explanation of A.',
  'A is true, but R is false.',
  'A is false, but R is true.',
];

export const CH07_INT_R2: Class12Question[] = [
  // ───────────── Section A (1 mark) ─────────────
  {
    id: 'c12-int-r2-a01', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{x^{3} - 8}{x - 2}\\,dx$ is equal to',
    options: ['$\\frac{x^{3}}{3} - x^{2} + 4x + C$', '$\\frac{x^{3}}{3} + 2x^{2} + 4x + C$', '$\\frac{x^{3}}{3} + x^{2} + 4x + C$', '$\\frac{x^{3}}{3} + x^{2} - 4x + C$'],
    answer: 'Correct option: C) $\\frac{x^{3}}{3} + x^{2} + 4x + C$. Since $x^{3} - 8 = (x - 2)(x^{2} + 2x + 4)$, the integrand is $x^{2} + 2x + 4$, whose integral is $\\frac{x^{3}}{3} + x^{2} + 4x + C$.',
  },
  {
    id: 'c12-int-r2-a02', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\cot^{2} x\\,dx$ is equal to',
    options: ['$-\\cot x - x + C$', '$\\cot x - x + C$', '$-\\cot x + x + C$', '$\\frac{\\cot^{3} x}{3} + C$'],
    answer: 'Correct option: A) $-\\cot x - x + C$. Write $\\cot^{2} x = \\operatorname{cosec}^{2} x - 1$; since $\\int \\operatorname{cosec}^{2} x\\,dx = -\\cot x$, the integral is $-\\cot x - x + C$.',
  },
  {
    id: 'c12-int-r2-a03', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\frac{2^{x} + 3^{x}}{6^{x}}\\,dx$ is equal to',
    options: ['$\\frac{3^{-x}}{\\log 3} + \\frac{2^{-x}}{\\log 2} + C$', '$-\\frac{3^{-x}}{\\log 3} - \\frac{2^{-x}}{\\log 2} + C$', '$-3^{-x}\\log 3 - 2^{-x}\\log 2 + C$', '$\\frac{x}{\\log 6} + C$'],
    answer: 'Correct option: B) $-\\frac{3^{-x}}{\\log 3} - \\frac{2^{-x}}{\\log 2} + C$. The integrand is $\\left(\\frac{1}{3}\\right)^{x} + \\left(\\frac{1}{2}\\right)^{x} = 3^{-x} + 2^{-x}$, and $\\int a^{-x}\\,dx = -\\frac{a^{-x}}{\\log a} + C$. Option A misses the minus sign from the $-x$ in the power.',
  },
  {
    id: 'c12-int-r2-a04', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int (\\sin x + \\cos x)^{2}\\,dx$ is equal to',
    options: ['$x + \\frac{1}{2}\\cos 2x + C$', '$\\frac{(\\sin x + \\cos x)^{3}}{3} + C$', '$x - \\cos 2x + C$', '$x - \\frac{1}{2}\\cos 2x + C$'],
    answer: 'Correct option: D) $x - \\frac{1}{2}\\cos 2x + C$. Expanding, $(\\sin x + \\cos x)^{2} = 1 + 2\\sin x\\cos x = 1 + \\sin 2x$, and $\\int \\sin 2x\\,dx = -\\frac{1}{2}\\cos 2x$. Option B wrongly treats the bracket like a power of $x$.',
  },
  {
    id: 'c12-int-r2-a05', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\cos^{2}\\left(\\frac{x}{2}\\right)dx$ is equal to',
    options: ['$\\frac{x}{2} - \\frac{\\sin x}{2} + C$', '$\\frac{x}{2} + \\frac{\\sin x}{2} + C$', '$\\frac{x}{2} + \\sin x + C$', '$x + \\frac{\\sin x}{2} + C$'],
    answer: 'Correct option: B) $\\frac{x}{2} + \\frac{\\sin x}{2} + C$. Using $\\cos^{2}\\frac{x}{2} = \\frac{1 + \\cos x}{2}$, the integral is $\\frac{1}{2}(x + \\sin x) + C$.',
  },
  {
    id: 'c12-int-r2-a06', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int x\\,e^{x^{2}}\\,dx$ is equal to',
    options: ['$e^{x^{2}} + C$', '$2e^{x^{2}} + C$', '$\\frac{x^{2}}{2}e^{x^{2}} + C$', '$\\frac{1}{2}e^{x^{2}} + C$'],
    answer: 'Correct option: D) $\\frac{1}{2}e^{x^{2}} + C$. Put $t = x^{2}$, so $x\\,dx = \\frac{dt}{2}$ and the integral is $\\frac{1}{2}\\int e^{t}\\,dt = \\frac{1}{2}e^{x^{2}} + C$.',
  },
  {
    id: 'c12-int-r2-a07', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{(\\tan^{-1} x)^{2}}{1 + x^{2}}\\,dx$ is equal to',
    options: ['$\\frac{(\\tan^{-1} x)^{3}}{3} + C$', '$(\\tan^{-1} x)^{3} + C$', '$\\frac{2\\tan^{-1} x}{1 + x^{2}} + C$', '$\\frac{(\\tan^{-1} x)^{3}}{3(1 + x^{2})} + C$'],
    answer: 'Correct option: A) $\\frac{(\\tan^{-1} x)^{3}}{3} + C$. Put $t = \\tan^{-1} x$, $dt = \\frac{dx}{1 + x^{2}}$; then $\\int t^{2}\\,dt = \\frac{t^{3}}{3} + C$.',
  },
  {
    id: 'c12-int-r2-a08', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{\\cos x}{3 + 2\\sin x}\\,dx$ is equal to',
    options: ['$\\log|3 + 2\\sin x| + C$', '$\\frac{1}{2}\\log|3 + 2\\sin x| + C$', '$2\\log|3 + 2\\sin x| + C$', '$-\\frac{1}{2}\\log|3 + 2\\sin x| + C$'],
    answer: 'Correct option: B) $\\frac{1}{2}\\log|3 + 2\\sin x| + C$. Put $t = 3 + 2\\sin x$, $dt = 2\\cos x\\,dx$, so the integral is $\\frac{1}{2}\\int \\frac{dt}{t} = \\frac{1}{2}\\log|t| + C$.',
  },
  {
    id: 'c12-int-r2-a09', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{e^{x} + 1}{e^{x} + x}\\,dx$ is equal to',
    options: ['$\\log|e^{x} + 1| + C$', '$e^{x} + x + C$', '$\\log|e^{x} + x| + C$', '$x + \\log|e^{x} + x| + C$'],
    answer: 'Correct option: C) $\\log|e^{x} + x| + C$. The numerator $e^{x} + 1$ is the derivative of the denominator $e^{x} + x$, and $\\int \\frac{f\'(x)}{f(x)}\\,dx = \\log|f(x)| + C$.',
  },
  {
    id: 'c12-int-r2-a10', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\frac{dx}{\\sqrt{x}\\,(1 + \\sqrt{x})^{2}}$, $x > 0$, is equal to',
    options: ['$-\\frac{2}{1 + \\sqrt{x}} + C$', '$\\frac{2}{1 + \\sqrt{x}} + C$', '$-\\frac{1}{1 + \\sqrt{x}} + C$', '$2\\log(1 + \\sqrt{x}) + C$'],
    answer: 'Correct option: A) $-\\frac{2}{1 + \\sqrt{x}} + C$. Put $t = 1 + \\sqrt{x}$, so $dt = \\frac{dx}{2\\sqrt{x}}$; the integral is $2\\int \\frac{dt}{t^{2}} = -\\frac{2}{t} + C$. Option C forgets the factor $2$.',
  },
  {
    id: 'c12-int-r2-a11', chapter: C, topic: 'Integration by parts', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int x\\cos x\\,dx$ is equal to',
    options: ['$x\\sin x - \\cos x + C$', '$-x\\sin x + \\cos x + C$', '$x\\sin x + \\cos x + C$', '$\\frac{x^{2}}{2}\\sin x + C$'],
    answer: 'Correct option: C) $x\\sin x + \\cos x + C$. By parts with $u = x$, $dv = \\cos x\\,dx$: $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.',
  },
  {
    id: 'c12-int-r2-a12', chapter: C, topic: 'Integration by parts', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int e^{x}(\\tan x + \\sec^{2} x)\\,dx$ is equal to',
    options: ['$e^{x}\\sec^{2} x + C$', '$e^{x}\\tan x + C$', '$e^{x}(\\tan x + \\sec x) + C$', '$e^{x}\\sec x\\tan x + C$'],
    answer: 'Correct option: B) $e^{x}\\tan x + C$. With $f(x) = \\tan x$, $f\'(x) = \\sec^{2} x$, so the integrand is $e^{x}[f(x) + f\'(x)]$ and its integral is $e^{x}f(x) + C$.',
  },
  {
    id: 'c12-int-r2-a13', chapter: C, topic: 'Integration by parts', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $\\int e^{x}\\left(\\log x + \\frac{1}{x}\\right)dx = e^{x}\\log x + C$.\nReason (R): $\\int \\log x\\,dx = x\\log x - x + C$.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both A and R are true, but R is not the correct explanation of A. A follows from $\\int e^{x}[f(x) + f\'(x)]\\,dx = e^{x}f(x) + C$ with $f(x) = \\log x$. R is also true (by parts), but it is not what gives A.',
  },
  {
    id: 'c12-int-r2-a14', chapter: C, topic: 'Special forms of integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{dx}{x^{2} - 9}$ is equal to',
    options: ['$\\frac{1}{6}\\log\\left|\\frac{x + 3}{x - 3}\\right| + C$', '$\\frac{1}{3}\\log\\left|\\frac{x - 3}{x + 3}\\right| + C$', '$\\frac{1}{3}\\tan^{-1}\\frac{x}{3} + C$', '$\\frac{1}{6}\\log\\left|\\frac{x - 3}{x + 3}\\right| + C$'],
    answer: 'Correct option: D) $\\frac{1}{6}\\log\\left|\\frac{x - 3}{x + 3}\\right| + C$, from $\\int \\frac{dx}{x^{2} - a^{2}} = \\frac{1}{2a}\\log\\left|\\frac{x - a}{x + a}\\right| + C$ with $a = 3$. Option A has the fraction upside down and C is the formula for $x^{2} + a^{2}$.',
  },
  {
    id: 'c12-int-r2-a15', chapter: C, topic: 'Special forms of integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\frac{dx}{\\sqrt{x^{2} + 4x + 13}}$ is equal to',
    options: ['$\\sin^{-1}\\left(\\frac{x + 2}{3}\\right) + C$', '$\\frac{1}{3}\\tan^{-1}\\left(\\frac{x + 2}{3}\\right) + C$', '$\\log\\left|x + 2 + \\sqrt{x^{2} + 4x + 13}\\right| + C$', '$\\log\\left|x + 2 - \\sqrt{x^{2} + 4x + 13}\\right| + C$'],
    answer: 'Correct option: C) $\\log\\left|x + 2 + \\sqrt{x^{2} + 4x + 13}\\right| + C$. Completing the square, $x^{2} + 4x + 13 = (x + 2)^{2} + 3^{2}$, and $\\int \\frac{du}{\\sqrt{u^{2} + a^{2}}} = \\log\\left|u + \\sqrt{u^{2} + a^{2}}\\right| + C$.',
  },
  {
    id: 'c12-int-r2-a16', chapter: C, topic: 'Special forms of integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\sqrt{4 - x^{2}}\\,dx$ is equal to',
    options: ['$\\frac{x}{2}\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2} + C$', '$\\frac{x}{2}\\sqrt{4 - x^{2}} + 4\\sin^{-1}\\frac{x}{2} + C$', '$\\frac{x}{2}\\sqrt{4 - x^{2}} - 2\\sin^{-1}\\frac{x}{2} + C$', '$x\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2} + C$'],
    answer: 'Correct option: A) $\\frac{x}{2}\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2} + C$, from $\\int \\sqrt{a^{2} - x^{2}}\\,dx = \\frac{x}{2}\\sqrt{a^{2} - x^{2}} + \\frac{a^{2}}{2}\\sin^{-1}\\frac{x}{a} + C$ with $a = 2$. Option B uses $a^{2}$ instead of $\\frac{a^{2}}{2}$.',
  },
  {
    id: 'c12-int-r2-a17', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\int_{1}^{4} \\frac{dx}{\\sqrt{x}}$ is',
    options: ['$1$', '$4$', '$2$', '$\\frac{14}{3}$'],
    answer: 'Correct option: C) $2$. $\\int x^{-1/2}\\,dx = 2\\sqrt{x}$, so the value is $2(\\sqrt{4} - \\sqrt{1}) = 2$. Option A forgets the factor $2$; option D integrates $\\sqrt{x}$ instead.',
  },
  {
    id: 'c12-int-r2-a18', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\int_{0}^{\\pi/4} \\tan x\\,dx$ is',
    options: ['$\\log 2$', '$1$', '$-\\frac{1}{2}\\log 2$', '$\\frac{1}{2}\\log 2$'],
    answer: 'Correct option: D) $\\frac{1}{2}\\log 2$. $\\int \\tan x\\,dx = \\log|\\sec x|$, so the value is $\\log\\sec\\frac{\\pi}{4} - \\log\\sec 0 = \\log\\sqrt{2} = \\frac{1}{2}\\log 2$.',
  },
  {
    id: 'c12-int-r2-a19', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\int_{0}^{\\pi/2} \\sin^{2} x\\,dx$ is',
    options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\frac{1}{2}$', '$\\frac{\\pi}{8}$'],
    answer: 'Correct option: A) $\\frac{\\pi}{4}$. Using $\\sin^{2} x = \\frac{1 - \\cos 2x}{2}$: $\\left[\\frac{x}{2} - \\frac{\\sin 2x}{4}\\right]_{0}^{\\pi/2} = \\frac{\\pi}{4}$.',
  },
  {
    id: 'c12-int-r2-a20', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $\\int_{1}^{k} \\frac{dx}{x} = 2$, where $k > 1$, then $k$ is equal to',
    options: ['$2$', '$e$', '$e^{2}$', '$\\sqrt{e}$'],
    answer: 'Correct option: C) $e^{2}$. $\\int_{1}^{k} \\frac{dx}{x} = \\log k - \\log 1 = \\log k = 2$, so $k = e^{2}$.',
  },
  {
    id: 'c12-int-r2-a21', chapter: C, topic: 'Properties of definite integrals', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $\\int_{0}^{\\pi} \\cos^{5} x\\,dx = 0$.\nReason (R): $\\cos^{5} x$ is an odd function of $x$.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true, but R is false. Since $\\cos^{5}(\\pi - x) = -\\cos^{5} x$, the property $\\int_{0}^{2a} f(x)\\,dx = 0$ when $f(2a - x) = -f(x)$ (with $2a = \\pi$) gives A. But $\\cos^{5}(-x) = \\cos^{5} x$, so $\\cos^{5} x$ is even, not odd.',
  },
  {
    id: 'c12-int-r2-a22', chapter: C, topic: 'Properties of definite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\int_{-1}^{1} \\log\\left(\\frac{2 - x}{2 + x}\\right)dx$ is',
    options: ['$\\log 3$', '$0$', '$2\\log 3$', '$-2\\log 3$'],
    answer: 'Correct option: B) $0$. With $f(x) = \\log\\frac{2 - x}{2 + x}$, $f(-x) = \\log\\frac{2 + x}{2 - x} = -f(x)$, so $f$ is odd and its integral over $[-1, 1]$ is $0$.',
  },
  {
    id: 'c12-int-r2-a23', chapter: C, topic: 'Properties of definite integrals', type: 'assertion_reason', complexity: 'hard', marks: 1,
    text: 'Assertion (A): $\\int_{0}^{1} x(1 - x)^{9}\\,dx = \\frac{1}{110}$.\nReason (R): $\\int_{0}^{a} f(x)\\,dx = \\int_{0}^{a} f(a - x)\\,dx$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both A and R are true, and R is the correct explanation of A. By R with $a = 1$, the integral equals $\\int_{0}^{1} (1 - x)x^{9}\\,dx = \\int_{0}^{1} (x^{9} - x^{10})\\,dx = \\frac{1}{10} - \\frac{1}{11} = \\frac{1}{110}$.',
  },

  // ───────────── Section B (2 marks) ─────────────
  {
    id: 'c12-int-r2-b01', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $\\int \\frac{x + 5}{x^{2} + x - 2}\\,dx$.',
    answer: 'Since $x^{2} + x - 2 = (x - 1)(x + 2)$, write $\\frac{x + 5}{(x - 1)(x + 2)} = \\frac{A}{x - 1} + \\frac{B}{x + 2}$, so $x + 5 = A(x + 2) + B(x - 1)$. Putting $x = 1$: $6 = 3A$, so $A = 2$. Putting $x = -2$: $3 = -3B$, so $B = -1$. Hence $\\int \\frac{x + 5}{x^{2} + x - 2}\\,dx = 2\\log|x - 1| - \\log|x + 2| + C$.',
    steps: [
      { step: 'Factorises and finds $A = 2$, $B = -1$', marks: 1 },
      { step: 'Integrates to $2\\log|x - 1| - \\log|x + 2| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-b02', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'easy', marks: 2,
    text: 'Find $\\int \\sin^{3} x\\,dx$.',
    answer: 'Write $\\sin^{3} x = (1 - \\cos^{2} x)\\sin x$. Put $t = \\cos x$, $dt = -\\sin x\\,dx$: the integral is $-\\int (1 - t^{2})\\,dt = -t + \\frac{t^{3}}{3} + C = -\\cos x + \\frac{\\cos^{3} x}{3} + C$.',
    steps: [
      { step: 'Writes $\\sin^{3} x = (1 - \\cos^{2} x)\\sin x$ and substitutes $t = \\cos x$', marks: 1 },
      { step: 'Gets $-\\cos x + \\frac{\\cos^{3} x}{3} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-b03', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\int_{0}^{\\pi/4} \\sec^{4} x\\,dx$.',
    answer: 'Write $\\sec^{4} x = (1 + \\tan^{2} x)\\sec^{2} x$ and put $t = \\tan x$, $dt = \\sec^{2} x\\,dx$; the limits become $0$ and $1$. The integral is $\\int_{0}^{1} (1 + t^{2})\\,dt = \\left[t + \\frac{t^{3}}{3}\\right]_{0}^{1} = \\frac{4}{3}$.',
    steps: [
      { step: 'Substitutes $t = \\tan x$ to get $\\int_{0}^{1} (1 + t^{2})\\,dt$', marks: 1 },
      { step: 'Evaluates to $\\frac{4}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-b04', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\int_{0}^{1} x\\,e^{2x}\\,dx$.',
    answer: 'By parts with $u = x$, $dv = e^{2x}\\,dx$: $\\int x e^{2x}\\,dx = \\frac{x e^{2x}}{2} - \\int \\frac{e^{2x}}{2}\\,dx = \\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4}$. So the value is $\\left(\\frac{e^{2}}{2} - \\frac{e^{2}}{4}\\right) - \\left(0 - \\frac{1}{4}\\right) = \\frac{e^{2} + 1}{4}$.',
    steps: [
      { step: 'Gets the antiderivative $\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4}$ by parts', marks: 1 },
      { step: 'Substitutes the limits to get $\\frac{e^{2} + 1}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-b05', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\int_{0}^{4} |x^{2} - 4x + 3|\\,dx$.',
    answer: '$x^{2} - 4x + 3 = (x - 1)(x - 3)$ is $\\geq 0$ on $[0, 1]$, $\\leq 0$ on $[1, 3]$ and $\\geq 0$ on $[3, 4]$. With $F(x) = \\frac{x^{3}}{3} - 2x^{2} + 3x$: $F(0) = 0$, $F(1) = \\frac{4}{3}$, $F(3) = 0$, $F(4) = \\frac{4}{3}$. So the integral is $[F(1) - F(0)] - [F(3) - F(1)] + [F(4) - F(3)] = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$.',
    steps: [
      { step: 'Finds where $x^{2} - 4x + 3$ changes sign and splits at $x = 1$ and $x = 3$', marks: 1 },
      { step: 'Evaluates each piece as $\\frac{4}{3}$ and gets $4$', marks: 1 },
    ],
  },

  // ───────────── Section C (3 marks) ─────────────
  {
    id: 'c12-int-r2-c01', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{3x + 2}{(x + 1)(x - 2)(x + 3)}\\,dx$.',
    answer: 'Write $\\frac{3x + 2}{(x + 1)(x - 2)(x + 3)} = \\frac{A}{x + 1} + \\frac{B}{x - 2} + \\frac{D}{x + 3}$, so $3x + 2 = A(x - 2)(x + 3) + B(x + 1)(x + 3) + D(x + 1)(x - 2)$. Putting $x = -1$: $-1 = -6A$, so $A = \\frac{1}{6}$. Putting $x = 2$: $8 = 15B$, so $B = \\frac{8}{15}$. Putting $x = -3$: $-7 = 10D$, so $D = -\\frac{7}{10}$. Hence the integral is $\\frac{1}{6}\\log|x + 1| + \\frac{8}{15}\\log|x - 2| - \\frac{7}{10}\\log|x + 3| + C$.',
    steps: [
      { step: 'Sets up the three partial fractions', marks: 1 },
      { step: 'Finds $A = \\frac{1}{6}$, $B = \\frac{8}{15}$, $D = -\\frac{7}{10}$', marks: 1 },
      { step: 'Integrates to $\\frac{1}{6}\\log|x + 1| + \\frac{8}{15}\\log|x - 2| - \\frac{7}{10}\\log|x + 3| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c02', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{x + 3}{(x + 1)^{2}(x - 1)}\\,dx$.',
    answer: 'Write $\\frac{x + 3}{(x + 1)^{2}(x - 1)} = \\frac{A}{x + 1} + \\frac{B}{(x + 1)^{2}} + \\frac{D}{x - 1}$, so $x + 3 = A(x + 1)(x - 1) + B(x - 1) + D(x + 1)^{2}$. Putting $x = 1$: $4 = 4D$, so $D = 1$. Putting $x = -1$: $2 = -2B$, so $B = -1$. Comparing coefficients of $x^{2}$: $0 = A + D$, so $A = -1$. Hence the integral is $-\\log|x + 1| + \\frac{1}{x + 1} + \\log|x - 1| + C = \\log\\left|\\frac{x - 1}{x + 1}\\right| + \\frac{1}{x + 1} + C$.',
    steps: [
      { step: 'Sets up $\\frac{A}{x+1} + \\frac{B}{(x+1)^{2}} + \\frac{D}{x-1}$', marks: 1 },
      { step: 'Finds $A = -1$, $B = -1$, $D = 1$', marks: 1 },
      { step: 'Gets $\\log\\left|\\frac{x - 1}{x + 1}\\right| + \\frac{1}{x + 1} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c03', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find $\\int \\frac{dx}{x^{3} + 1}$, $x > -1$.',
    answer: 'Since $x^{3} + 1 = (x + 1)(x^{2} - x + 1)$, write $\\frac{1}{x^{3} + 1} = \\frac{A}{x + 1} + \\frac{Bx + D}{x^{2} - x + 1}$, so $1 = A(x^{2} - x + 1) + (Bx + D)(x + 1)$. $x = -1$ gives $A = \\frac{1}{3}$; comparing $x^{2}$: $0 = A + B$, so $B = -\\frac{1}{3}$; comparing constants: $1 = A + D$, so $D = \\frac{2}{3}$. Now $\\frac{-x + 2}{3} = -\\frac{1}{6}(2x - 1) + \\frac{1}{2}$, so $\\int \\frac{(-x + 2)/3}{x^{2} - x + 1}\\,dx = -\\frac{1}{6}\\log(x^{2} - x + 1) + \\frac{1}{2}\\int \\frac{dx}{\\left(x - \\frac{1}{2}\\right)^{2} + \\frac{3}{4}} = -\\frac{1}{6}\\log(x^{2} - x + 1) + \\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{2x - 1}{\\sqrt{3}}$. Hence the integral is $\\frac{1}{3}\\log(x + 1) - \\frac{1}{6}\\log(x^{2} - x + 1) + \\frac{1}{\\sqrt{3}}\\tan^{-1}\\left(\\frac{2x - 1}{\\sqrt{3}}\\right) + C$.',
    steps: [
      { step: 'Factorises $x^{3} + 1$ and finds $A = \\frac{1}{3}$, $B = -\\frac{1}{3}$, $D = \\frac{2}{3}$', marks: 1 },
      { step: 'Splits $\\frac{-x + 2}{3}$ into a multiple of $2x - 1$ plus a constant', marks: 1 },
      { step: 'Gets $\\frac{1}{3}\\log(x + 1) - \\frac{1}{6}\\log(x^{2} - x + 1) + \\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{2x - 1}{\\sqrt{3}} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c04', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{e^{x}}{(e^{x} - 1)(e^{x} + 2)}\\,dx$.',
    answer: 'Put $t = e^{x}$, $dt = e^{x}\\,dx$: the integral is $\\int \\frac{dt}{(t - 1)(t + 2)}$. Now $\\frac{1}{(t - 1)(t + 2)} = \\frac{1}{3}\\left(\\frac{1}{t - 1} - \\frac{1}{t + 2}\\right)$. So the integral is $\\frac{1}{3}\\log|t - 1| - \\frac{1}{3}\\log|t + 2| + C = \\frac{1}{3}\\log\\left|\\frac{e^{x} - 1}{e^{x} + 2}\\right| + C$.',
    steps: [
      { step: 'Substitutes $t = e^{x}$', marks: 1 },
      { step: 'Splits $\\frac{1}{(t-1)(t+2)} = \\frac{1}{3}\\left(\\frac{1}{t-1} - \\frac{1}{t+2}\\right)$', marks: 1 },
      { step: 'Gets $\\frac{1}{3}\\log\\left|\\frac{e^{x} - 1}{e^{x} + 2}\\right| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c05', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{x^{3}}{(x^{2} + 1)(x^{2} + 2)}\\,dx$.',
    answer: 'Put $t = x^{2}$, $dt = 2x\\,dx$, so $x^{3}\\,dx = \\frac{t\\,dt}{2}$ and the integral is $\\frac{1}{2}\\int \\frac{t}{(t + 1)(t + 2)}\\,dt$. Write $\\frac{t}{(t + 1)(t + 2)} = \\frac{A}{t + 1} + \\frac{B}{t + 2}$: $t = -1$ gives $A = -1$ and $t = -2$ gives $B = 2$. So the integral is $\\frac{1}{2}\\left[-\\log(t + 1) + 2\\log(t + 2)\\right] + C = \\log(x^{2} + 2) - \\frac{1}{2}\\log(x^{2} + 1) + C$.',
    steps: [
      { step: 'Substitutes $t = x^{2}$ to get $\\frac{1}{2}\\int \\frac{t\\,dt}{(t + 1)(t + 2)}$', marks: 1 },
      { step: 'Finds $A = -1$, $B = 2$', marks: 1 },
      { step: 'Gets $\\log(x^{2} + 2) - \\frac{1}{2}\\log(x^{2} + 1) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c06', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int x^{2}\\cos x\\,dx$.',
    answer: 'By parts with $x^{2}$ as the first function: $\\int x^{2}\\cos x\\,dx = x^{2}\\sin x - \\int 2x\\sin x\\,dx$. Again by parts, $\\int x\\sin x\\,dx = -x\\cos x + \\int \\cos x\\,dx = -x\\cos x + \\sin x$. So the integral is $x^{2}\\sin x - 2(-x\\cos x + \\sin x) + C = x^{2}\\sin x + 2x\\cos x - 2\\sin x + C$.',
    steps: [
      { step: 'First application of parts: $x^{2}\\sin x - 2\\int x\\sin x\\,dx$', marks: 1 },
      { step: 'Finds $\\int x\\sin x\\,dx = -x\\cos x + \\sin x$', marks: 1 },
      { step: 'Gets $x^{2}\\sin x + 2x\\cos x - 2\\sin x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c07', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int e^{2x}\\sin x\\,dx$.',
    answer: 'Let $I = \\int e^{2x}\\sin x\\,dx$. Taking $e^{2x}$ as the first function: $I = -e^{2x}\\cos x + 2\\int e^{2x}\\cos x\\,dx$. Again, $\\int e^{2x}\\cos x\\,dx = e^{2x}\\sin x - 2\\int e^{2x}\\sin x\\,dx = e^{2x}\\sin x - 2I$. So $I = -e^{2x}\\cos x + 2e^{2x}\\sin x - 4I$, giving $5I = e^{2x}(2\\sin x - \\cos x)$ and $I = \\frac{e^{2x}}{5}(2\\sin x - \\cos x) + C$.',
    steps: [
      { step: 'First application of parts', marks: 1 },
      { step: 'Second application of parts bringing back $I$', marks: 1 },
      { step: 'Solves to get $\\frac{e^{2x}}{5}(2\\sin x - \\cos x) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c08', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int (\\log x)^{2}\\,dx$, $x > 0$.',
    answer: 'Take $(\\log x)^{2}$ as the first function and $1$ as the second: $\\int (\\log x)^{2}\\,dx = x(\\log x)^{2} - \\int x\\cdot\\frac{2\\log x}{x}\\,dx = x(\\log x)^{2} - 2\\int \\log x\\,dx$. Since $\\int \\log x\\,dx = x\\log x - x$, the integral is $x(\\log x)^{2} - 2x\\log x + 2x + C$.',
    steps: [
      { step: 'Applies parts with $1$ as the second function', marks: 1 },
      { step: 'Reduces to $x(\\log x)^{2} - 2\\int \\log x\\,dx$ and uses $\\int \\log x\\,dx = x\\log x - x$', marks: 1 },
      { step: 'Gets $x(\\log x)^{2} - 2x\\log x + 2x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c09', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int e^{x}\\,\\frac{x^{2} + 1}{(x + 1)^{2}}\\,dx$.',
    answer: 'Write $x^{2} + 1 = (x^{2} - 1) + 2$, so $\\frac{x^{2} + 1}{(x + 1)^{2}} = \\frac{(x - 1)(x + 1)}{(x + 1)^{2}} + \\frac{2}{(x + 1)^{2}} = \\frac{x - 1}{x + 1} + \\frac{2}{(x + 1)^{2}}$. With $f(x) = \\frac{x - 1}{x + 1}$, $f\'(x) = \\frac{(x + 1) - (x - 1)}{(x + 1)^{2}} = \\frac{2}{(x + 1)^{2}}$, so the integrand is $e^{x}[f(x) + f\'(x)]$. Hence the integral is $e^{x}\\,\\frac{x - 1}{x + 1} + C$.',
    steps: [
      { step: 'Rewrites the fraction as $\\frac{x - 1}{x + 1} + \\frac{2}{(x + 1)^{2}}$', marks: 1 },
      { step: 'Identifies $f(x) = \\frac{x - 1}{x + 1}$ with $f\'(x) = \\frac{2}{(x + 1)^{2}}$', marks: 1 },
      { step: 'Gets $e^{x}\\,\\frac{x - 1}{x + 1} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c10', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\pi} x\\sin x\\cos^{2} x\\,dx$.',
    answer: 'Let $I$ be the integral. Using $\\int_{0}^{a} f(x)\\,dx = \\int_{0}^{a} f(a - x)\\,dx$ with $a = \\pi$, and $\\sin(\\pi - x) = \\sin x$, $\\cos^{2}(\\pi - x) = \\cos^{2} x$: $I = \\int_{0}^{\\pi} (\\pi - x)\\sin x\\cos^{2} x\\,dx$. Adding, $2I = \\pi\\int_{0}^{\\pi} \\sin x\\cos^{2} x\\,dx = \\pi\\left[-\\frac{\\cos^{3} x}{3}\\right]_{0}^{\\pi} = \\pi\\left(\\frac{1}{3} + \\frac{1}{3}\\right) = \\frac{2\\pi}{3}$. So $I = \\frac{\\pi}{3}$.',
    steps: [
      { step: 'Applies $x \\to \\pi - x$ and adds to get $2I = \\pi\\int_{0}^{\\pi} \\sin x\\cos^{2} x\\,dx$', marks: 1 },
      { step: 'Integrates $\\sin x\\cos^{2} x$ to $-\\frac{\\cos^{3} x}{3}$', marks: 1 },
      { step: 'Gets $I = \\frac{\\pi}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c11', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\pi/2} \\sin 2x\\,\\log(\\tan x)\\,dx$.',
    answer: 'Let $I$ be the integral. Using $\\int_{0}^{a} f(x)\\,dx = \\int_{0}^{a} f(a - x)\\,dx$ with $a = \\frac{\\pi}{2}$: $\\sin 2\\left(\\frac{\\pi}{2} - x\\right) = \\sin(\\pi - 2x) = \\sin 2x$ and $\\tan\\left(\\frac{\\pi}{2} - x\\right) = \\cot x$. So $I = \\int_{0}^{\\pi/2} \\sin 2x\\,\\log(\\cot x)\\,dx = -\\int_{0}^{\\pi/2} \\sin 2x\\,\\log(\\tan x)\\,dx = -I$, since $\\log\\cot x = -\\log\\tan x$. Hence $2I = 0$ and $I = 0$.',
    steps: [
      { step: 'Applies $x \\to \\frac{\\pi}{2} - x$, noting $\\sin 2x$ is unchanged and $\\tan x$ becomes $\\cot x$', marks: 1 },
      { step: 'Uses $\\log\\cot x = -\\log\\tan x$ to get $I = -I$', marks: 1 },
      { step: 'Concludes $I = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c12', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{0}^{2} x\\sqrt{2 - x}\\,dx$.',
    answer: 'Using $\\int_{0}^{a} f(x)\\,dx = \\int_{0}^{a} f(a - x)\\,dx$ with $a = 2$: the integral equals $\\int_{0}^{2} (2 - x)\\sqrt{x}\\,dx = \\int_{0}^{2} \\left(2x^{1/2} - x^{3/2}\\right)dx = \\left[\\frac{4}{3}x^{3/2} - \\frac{2}{5}x^{5/2}\\right]_{0}^{2}$. Since $2^{3/2} = 2\\sqrt{2}$ and $2^{5/2} = 4\\sqrt{2}$, this is $\\frac{8\\sqrt{2}}{3} - \\frac{8\\sqrt{2}}{5} = \\frac{16\\sqrt{2}}{15}$.',
    steps: [
      { step: 'Applies $x \\to 2 - x$ to get $\\int_{0}^{2} (2 - x)\\sqrt{x}\\,dx$', marks: 1 },
      { step: 'Integrates to $\\frac{4}{3}x^{3/2} - \\frac{2}{5}x^{5/2}$', marks: 1 },
      { step: 'Gets $\\frac{16\\sqrt{2}}{15}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c13', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'hard', marks: 3,
    text: 'Evaluate $\\int_{-\\pi/4}^{\\pi/4} \\frac{x + \\frac{\\pi}{4}}{2 - \\cos 2x}\\,dx$.',
    answer: 'Split the integral. $\\frac{x}{2 - \\cos 2x}$ is odd, so its integral over $[-\\frac{\\pi}{4}, \\frac{\\pi}{4}]$ is $0$. $\\frac{1}{2 - \\cos 2x}$ is even, so the integral is $\\frac{\\pi}{4}\\cdot 2\\int_{0}^{\\pi/4} \\frac{dx}{2 - \\cos 2x} = \\frac{\\pi}{2}\\int_{0}^{\\pi/4} \\frac{dx}{1 + 2\\sin^{2} x}$. Dividing by $\\cos^{2} x$: $\\frac{\\sec^{2} x}{\\sec^{2} x + 2\\tan^{2} x} = \\frac{\\sec^{2} x}{1 + 3\\tan^{2} x}$. With $t = \\tan x$ (limits $0$ to $1$): $\\int_{0}^{1} \\frac{dt}{1 + 3t^{2}} = \\frac{1}{\\sqrt{3}}\\left[\\tan^{-1}(\\sqrt{3}\\,t)\\right]_{0}^{1} = \\frac{1}{\\sqrt{3}}\\cdot\\frac{\\pi}{3}$. Hence the value is $\\frac{\\pi}{2}\\cdot\\frac{\\pi}{3\\sqrt{3}} = \\frac{\\pi^{2}}{6\\sqrt{3}}$.',
    steps: [
      { step: 'Shows the $\\frac{x}{2 - \\cos 2x}$ part is odd and vanishes; uses evenness for the rest', marks: 1 },
      { step: 'Rewrites $2 - \\cos 2x = 1 + 2\\sin^{2} x$ and substitutes $t = \\tan x$ to get $\\int_{0}^{1} \\frac{dt}{1 + 3t^{2}}$', marks: 1 },
      { step: 'Gets $\\frac{\\pi^{2}}{6\\sqrt{3}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c14', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'hard', marks: 3,
    text: 'Evaluate $\\int_{-2}^{2} \\frac{x^{3} + |x| + 1}{x^{2} + 4|x| + 4}\\,dx$.',
    answer: 'The denominator is $(|x| + 2)^{2}$, which is even. So $\\frac{x^{3}}{(|x| + 2)^{2}}$ is odd and its integral over $[-2, 2]$ is $0$, while $\\frac{|x| + 1}{(|x| + 2)^{2}}$ is even. Hence the integral is $2\\int_{0}^{2} \\frac{x + 1}{(x + 2)^{2}}\\,dx = 2\\int_{0}^{2} \\left(\\frac{1}{x + 2} - \\frac{1}{(x + 2)^{2}}\\right)dx = 2\\left[\\log(x + 2) + \\frac{1}{x + 2}\\right]_{0}^{2} = 2\\left[\\left(\\log 4 + \\frac{1}{4}\\right) - \\left(\\log 2 + \\frac{1}{2}\\right)\\right] = 2\\log 2 - \\frac{1}{2}$.',
    steps: [
      { step: 'Splits into an odd part (integral $0$) and an even part', marks: 1 },
      { step: 'Writes $2\\int_{0}^{2} \\left(\\frac{1}{x + 2} - \\frac{1}{(x + 2)^{2}}\\right)dx$ and integrates', marks: 1 },
      { step: 'Gets $2\\log 2 - \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c15', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'easy', marks: 3,
    text: 'Find $\\int \\frac{dx}{\\sqrt{3 - 2x - x^{2}}}$.',
    answer: 'Complete the square: $3 - 2x - x^{2} = 4 - (x^{2} + 2x + 1) = 2^{2} - (x + 1)^{2}$. Put $u = x + 1$, $du = dx$. Using $\\int \\frac{du}{\\sqrt{a^{2} - u^{2}}} = \\sin^{-1}\\frac{u}{a} + C$ with $a = 2$, the integral is $\\sin^{-1}\\left(\\frac{x + 1}{2}\\right) + C$.',
    steps: [
      { step: 'Writes $3 - 2x - x^{2} = 2^{2} - (x + 1)^{2}$', marks: 1 },
      { step: 'Recognises the standard form $\\int \\frac{du}{\\sqrt{a^{2} - u^{2}}}$', marks: 1 },
      { step: 'Gets $\\sin^{-1}\\left(\\frac{x + 1}{2}\\right) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c16', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{x + 1}{x^{2} - 4x + 3}\\,dx$ by writing the numerator in terms of the derivative of the denominator.',
    answer: 'Write $x + 1 = \\frac{1}{2}(2x - 4) + 3$. Then the integral is $\\frac{1}{2}\\int \\frac{2x - 4}{x^{2} - 4x + 3}\\,dx + 3\\int \\frac{dx}{(x - 2)^{2} - 1^{2}}$. The first part is $\\frac{1}{2}\\log|x^{2} - 4x + 3|$. Using $\\int \\frac{du}{u^{2} - a^{2}} = \\frac{1}{2a}\\log\\left|\\frac{u - a}{u + a}\\right|$ with $u = x - 2$, $a = 1$, the second part is $\\frac{3}{2}\\log\\left|\\frac{x - 3}{x - 1}\\right|$. Hence the integral is $\\frac{1}{2}\\log|x^{2} - 4x + 3| + \\frac{3}{2}\\log\\left|\\frac{x - 3}{x - 1}\\right| + C$.',
    steps: [
      { step: 'Writes $x + 1 = \\frac{1}{2}(2x - 4) + 3$', marks: 1 },
      { step: 'Gets $\\frac{1}{2}\\log|x^{2} - 4x + 3|$ for the first part', marks: 1 },
      { step: 'Completes the square and gets $\\frac{3}{2}\\log\\left|\\frac{x - 3}{x - 1}\\right|$; final answer with $C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c17', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\sqrt{x^{2} + 6x + 10}\\,dx$.',
    answer: 'Complete the square: $x^{2} + 6x + 10 = (x + 3)^{2} + 1^{2}$. Using $\\int \\sqrt{u^{2} + a^{2}}\\,du = \\frac{u}{2}\\sqrt{u^{2} + a^{2}} + \\frac{a^{2}}{2}\\log\\left|u + \\sqrt{u^{2} + a^{2}}\\right| + C$ with $u = x + 3$, $a = 1$: the integral is $\\frac{x + 3}{2}\\sqrt{x^{2} + 6x + 10} + \\frac{1}{2}\\log\\left|x + 3 + \\sqrt{x^{2} + 6x + 10}\\right| + C$.',
    steps: [
      { step: 'Writes $x^{2} + 6x + 10 = (x + 3)^{2} + 1$', marks: 1 },
      { step: 'Applies the formula for $\\int \\sqrt{u^{2} + a^{2}}\\,du$', marks: 1 },
      { step: 'Gets $\\frac{x + 3}{2}\\sqrt{x^{2} + 6x + 10} + \\frac{1}{2}\\log\\left|x + 3 + \\sqrt{x^{2} + 6x + 10}\\right| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c18', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{\\sec^{2} x}{\\sqrt{\\tan^{2} x + 4\\tan x + 7}}\\,dx$.',
    answer: 'Put $t = \\tan x$, $dt = \\sec^{2} x\\,dx$: the integral is $\\int \\frac{dt}{\\sqrt{t^{2} + 4t + 7}} = \\int \\frac{dt}{\\sqrt{(t + 2)^{2} + (\\sqrt{3})^{2}}}$. Using $\\int \\frac{du}{\\sqrt{u^{2} + a^{2}}} = \\log\\left|u + \\sqrt{u^{2} + a^{2}}\\right| + C$: the integral is $\\log\\left|t + 2 + \\sqrt{t^{2} + 4t + 7}\\right| + C = \\log\\left|\\tan x + 2 + \\sqrt{\\tan^{2} x + 4\\tan x + 7}\\right| + C$.',
    steps: [
      { step: 'Substitutes $t = \\tan x$', marks: 1 },
      { step: 'Completes the square: $t^{2} + 4t + 7 = (t + 2)^{2} + 3$', marks: 1 },
      { step: 'Gets $\\log\\left|\\tan x + 2 + \\sqrt{\\tan^{2} x + 4\\tan x + 7}\\right| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c19', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\sqrt{\\frac{x}{1 - x^{3}}}\\,dx$, $0 < x < 1$.',
    answer: 'Write the integrand as $\\frac{\\sqrt{x}}{\\sqrt{1 - (x^{3/2})^{2}}}$. Put $t = x^{3/2}$, so $dt = \\frac{3}{2}\\sqrt{x}\\,dx$, i.e. $\\sqrt{x}\\,dx = \\frac{2}{3}\\,dt$. The integral is $\\frac{2}{3}\\int \\frac{dt}{\\sqrt{1 - t^{2}}} = \\frac{2}{3}\\sin^{-1} t + C = \\frac{2}{3}\\sin^{-1}\\left(x^{3/2}\\right) + C$.',
    steps: [
      { step: 'Writes $1 - x^{3} = 1 - (x^{3/2})^{2}$ and substitutes $t = x^{3/2}$', marks: 1 },
      { step: 'Reduces to $\\frac{2}{3}\\int \\frac{dt}{\\sqrt{1 - t^{2}}}$', marks: 1 },
      { step: 'Gets $\\frac{2}{3}\\sin^{-1}\\left(x^{3/2}\\right) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c20', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find $\\int \\frac{\\cos x - \\sin x}{\\sqrt{8 - \\sin 2x}}\\,dx$.',
    answer: 'Put $t = \\sin x + \\cos x$, so $dt = (\\cos x - \\sin x)\\,dx$. Also $t^{2} = 1 + \\sin 2x$, so $\\sin 2x = t^{2} - 1$ and $8 - \\sin 2x = 9 - t^{2}$. The integral is $\\int \\frac{dt}{\\sqrt{9 - t^{2}}} = \\sin^{-1}\\frac{t}{3} + C = \\sin^{-1}\\left(\\frac{\\sin x + \\cos x}{3}\\right) + C$.',
    steps: [
      { step: 'Chooses $t = \\sin x + \\cos x$ with $dt = (\\cos x - \\sin x)\\,dx$', marks: 1 },
      { step: 'Expresses $8 - \\sin 2x = 9 - t^{2}$', marks: 1 },
      { step: 'Gets $\\sin^{-1}\\left(\\frac{\\sin x + \\cos x}{3}\\right) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c21', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int x^{5}\\sqrt{1 + x^{3}}\\,dx$.',
    answer: 'Put $t = 1 + x^{3}$, $dt = 3x^{2}\\,dx$. Then $x^{5}\\,dx = x^{3}\\cdot x^{2}\\,dx = \\frac{(t - 1)\\,dt}{3}$. The integral is $\\frac{1}{3}\\int (t - 1)\\sqrt{t}\\,dt = \\frac{1}{3}\\int \\left(t^{3/2} - t^{1/2}\\right)dt = \\frac{1}{3}\\left(\\frac{2}{5}t^{5/2} - \\frac{2}{3}t^{3/2}\\right) + C = \\frac{2}{15}(1 + x^{3})^{5/2} - \\frac{2}{9}(1 + x^{3})^{3/2} + C$.',
    steps: [
      { step: 'Substitutes $t = 1 + x^{3}$ and writes $x^{5}\\,dx = \\frac{(t - 1)\\,dt}{3}$', marks: 1 },
      { step: 'Integrates $t^{3/2} - t^{1/2}$', marks: 1 },
      { step: 'Gets $\\frac{2}{15}(1 + x^{3})^{5/2} - \\frac{2}{9}(1 + x^{3})^{3/2} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c22', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\sqrt{3}} \\frac{x^{3}}{\\sqrt{1 + x^{2}}}\\,dx$.',
    answer: 'Put $t = 1 + x^{2}$, $dt = 2x\\,dx$, so $x^{3}\\,dx = \\frac{(t - 1)\\,dt}{2}$; the limits become $1$ and $4$. The integral is $\\frac{1}{2}\\int_{1}^{4} \\frac{t - 1}{\\sqrt{t}}\\,dt = \\frac{1}{2}\\left[\\frac{2}{3}t^{3/2} - 2t^{1/2}\\right]_{1}^{4} = \\frac{1}{2}\\left[\\left(\\frac{16}{3} - 4\\right) - \\left(\\frac{2}{3} - 2\\right)\\right] = \\frac{1}{2}\\cdot\\frac{8}{3} = \\frac{4}{3}$.',
    steps: [
      { step: 'Substitutes $t = 1 + x^{2}$ and changes the limits to $1$ and $4$', marks: 1 },
      { step: 'Integrates $\\frac{t - 1}{\\sqrt{t}}$ to $\\frac{2}{3}t^{3/2} - 2t^{1/2}$', marks: 1 },
      { step: 'Gets $\\frac{4}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c23', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{1}^{e} \\frac{\\log x}{x^{2}}\\,dx$.',
    answer: 'By parts with $u = \\log x$, $dv = x^{-2}\\,dx$ (so $v = -\\frac{1}{x}$): $\\int \\frac{\\log x}{x^{2}}\\,dx = -\\frac{\\log x}{x} + \\int \\frac{1}{x^{2}}\\,dx = -\\frac{\\log x}{x} - \\frac{1}{x}$. So the value is $\\left(-\\frac{1}{e} - \\frac{1}{e}\\right) - (0 - 1) = 1 - \\frac{2}{e}$.',
    steps: [
      { step: 'Applies parts with $\\log x$ as the first function', marks: 1 },
      { step: 'Gets the antiderivative $-\\frac{\\log x}{x} - \\frac{1}{x}$', marks: 1 },
      { step: 'Substitutes the limits to get $1 - \\frac{2}{e}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-c24', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'hard', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\pi/2} \\frac{dx}{5 + 4\\cos x}$.',
    answer: 'Write $5 = 5\\left(\\cos^{2}\\frac{x}{2} + \\sin^{2}\\frac{x}{2}\\right)$ and $4\\cos x = 4\\left(\\cos^{2}\\frac{x}{2} - \\sin^{2}\\frac{x}{2}\\right)$, so $5 + 4\\cos x = 9\\cos^{2}\\frac{x}{2} + \\sin^{2}\\frac{x}{2}$. Dividing by $\\cos^{2}\\frac{x}{2}$, the integral is $\\int_{0}^{\\pi/2} \\frac{\\sec^{2}\\frac{x}{2}\\,dx}{9 + \\tan^{2}\\frac{x}{2}}$. Put $t = \\tan\\frac{x}{2}$, $dt = \\frac{1}{2}\\sec^{2}\\frac{x}{2}\\,dx$; the limits become $0$ and $1$. The integral is $2\\int_{0}^{1} \\frac{dt}{9 + t^{2}} = \\frac{2}{3}\\left[\\tan^{-1}\\frac{t}{3}\\right]_{0}^{1} = \\frac{2}{3}\\tan^{-1}\\frac{1}{3}$.',
    steps: [
      { step: 'Rewrites $5 + 4\\cos x = 9\\cos^{2}\\frac{x}{2} + \\sin^{2}\\frac{x}{2}$', marks: 1 },
      { step: 'Substitutes $t = \\tan\\frac{x}{2}$ to get $2\\int_{0}^{1} \\frac{dt}{9 + t^{2}}$', marks: 1 },
      { step: 'Gets $\\frac{2}{3}\\tan^{-1}\\frac{1}{3}$', marks: 1 },
    ],
  },

  // ───────────── Section D (5 marks) ─────────────
  {
    id: 'c12-int-r2-d01', chapter: C, topic: 'Integration by partial fractions', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $\\int \\frac{x^{2} + x + 1}{(x + 2)(x^{2} + 1)}\\,dx$.',
    answer: 'Write $\\frac{x^{2} + x + 1}{(x + 2)(x^{2} + 1)} = \\frac{A}{x + 2} + \\frac{Bx + D}{x^{2} + 1}$, so $x^{2} + x + 1 = A(x^{2} + 1) + (Bx + D)(x + 2)$. Putting $x = -2$: $3 = 5A$, so $A = \\frac{3}{5}$. Comparing $x^{2}$: $1 = A + B$, so $B = \\frac{2}{5}$. Comparing constants: $1 = A + 2D$, so $D = \\frac{1}{5}$. (Check $x$: $2B + D = \\frac{4}{5} + \\frac{1}{5} = 1$.) So the integral is $\\frac{3}{5}\\int \\frac{dx}{x + 2} + \\frac{1}{5}\\int \\frac{2x}{x^{2} + 1}\\,dx + \\frac{1}{5}\\int \\frac{dx}{x^{2} + 1} = \\frac{3}{5}\\log|x + 2| + \\frac{1}{5}\\log(x^{2} + 1) + \\frac{1}{5}\\tan^{-1} x + C$.',
    steps: [
      { step: 'Sets up $\\frac{A}{x + 2} + \\frac{Bx + D}{x^{2} + 1}$', marks: 1 },
      { step: 'Finds $A = \\frac{3}{5}$', marks: 1 },
      { step: 'Finds $B = \\frac{2}{5}$, $D = \\frac{1}{5}$', marks: 1 },
      { step: 'Splits $\\frac{2x + 1}{5(x^{2} + 1)}$ into a log part and a $\\tan^{-1}$ part', marks: 1 },
      { step: 'Gets $\\frac{3}{5}\\log|x + 2| + \\frac{1}{5}\\log(x^{2} + 1) + \\frac{1}{5}\\tan^{-1} x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d02', chapter: C, topic: 'Integration by partial fractions', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $\\int \\frac{x^{3} + x + 1}{x^{2} - 1}\\,dx$.',
    answer: 'The numerator has higher degree, so divide: $x^{3} + x + 1 = x(x^{2} - 1) + (2x + 1)$, and the integrand is $x + \\frac{2x + 1}{x^{2} - 1}$. Write $\\frac{2x + 1}{(x - 1)(x + 1)} = \\frac{A}{x - 1} + \\frac{B}{x + 1}$, so $2x + 1 = A(x + 1) + B(x - 1)$. Putting $x = 1$: $3 = 2A$, so $A = \\frac{3}{2}$. Putting $x = -1$: $-1 = -2B$, so $B = \\frac{1}{2}$. Hence the integral is $\\frac{x^{2}}{2} + \\frac{3}{2}\\log|x - 1| + \\frac{1}{2}\\log|x + 1| + C$.',
    steps: [
      { step: 'Divides to get $x + \\frac{2x + 1}{x^{2} - 1}$', marks: 1 },
      { step: 'Sets up $\\frac{A}{x - 1} + \\frac{B}{x + 1}$', marks: 1 },
      { step: 'Finds $A = \\frac{3}{2}$', marks: 1 },
      { step: 'Finds $B = \\frac{1}{2}$', marks: 1 },
      { step: 'Gets $\\frac{x^{2}}{2} + \\frac{3}{2}\\log|x - 1| + \\frac{1}{2}\\log|x + 1| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d03', chapter: C, topic: 'Integration by partial fractions', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find $\\int \\frac{dx}{\\sin x\\,(3 + 2\\cos x)}$, $0 < x < \\pi$.',
    answer: 'Multiply numerator and denominator by $\\sin x$: $\\int \\frac{\\sin x\\,dx}{\\sin^{2} x\\,(3 + 2\\cos x)} = \\int \\frac{\\sin x\\,dx}{(1 - \\cos^{2} x)(3 + 2\\cos x)}$. Put $t = \\cos x$, $dt = -\\sin x\\,dx$: the integral is $-\\int \\frac{dt}{(1 - t)(1 + t)(3 + 2t)}$. Write $\\frac{1}{(1 - t)(1 + t)(3 + 2t)} = \\frac{A}{1 - t} + \\frac{B}{1 + t} + \\frac{D}{3 + 2t}$. Putting $t = 1$: $1 = 10A$, so $A = \\frac{1}{10}$. Putting $t = -1$: $1 = 2B$, so $B = \\frac{1}{2}$. Putting $t = -\\frac{3}{2}$: $1 = D\\cdot\\frac{5}{2}\\cdot\\left(-\\frac{1}{2}\\right)$, so $D = -\\frac{4}{5}$. Integrating, $\\int \\left(\\frac{1/10}{1 - t} + \\frac{1/2}{1 + t} - \\frac{4/5}{3 + 2t}\\right)dt = -\\frac{1}{10}\\log|1 - t| + \\frac{1}{2}\\log|1 + t| - \\frac{2}{5}\\log|3 + 2t|$. With the minus sign in front and $t = \\cos x$ (and $1 \\pm \\cos x > 0$, $3 + 2\\cos x > 0$), the answer is $\\frac{1}{10}\\log(1 - \\cos x) - \\frac{1}{2}\\log(1 + \\cos x) + \\frac{2}{5}\\log(3 + 2\\cos x) + C$.',
    steps: [
      { step: 'Multiplies by $\\sin x$ and substitutes $t = \\cos x$', marks: 1 },
      { step: 'Reduces to $-\\int \\frac{dt}{(1 - t)(1 + t)(3 + 2t)}$ and sets up partial fractions', marks: 1 },
      { step: 'Finds $A = \\frac{1}{10}$, $B = \\frac{1}{2}$, $D = -\\frac{4}{5}$', marks: 1 },
      { step: 'Integrates each term correctly (including the $\\frac{1}{2}$ from $3 + 2t$)', marks: 1 },
      { step: 'Gets $\\frac{1}{10}\\log(1 - \\cos x) - \\frac{1}{2}\\log(1 + \\cos x) + \\frac{2}{5}\\log(3 + 2\\cos x) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d04', chapter: C, topic: 'Properties of definite integrals', type: 'long', complexity: 'hard', marks: 5,
    text: 'Evaluate $\\int_{0}^{\\pi} \\frac{x\\sin x}{1 + \\sin x}\\,dx$.',
    answer: 'Let $I$ be the integral. Using $\\int_{0}^{a} f(x)\\,dx = \\int_{0}^{a} f(a - x)\\,dx$ with $a = \\pi$ and $\\sin(\\pi - x) = \\sin x$: $I = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin x}{1 + \\sin x}\\,dx$. Adding, $2I = \\pi\\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\sin x}\\,dx = \\pi\\int_{0}^{\\pi} \\left(1 - \\frac{1}{1 + \\sin x}\\right)dx = \\pi\\left[\\pi - J\\right]$, where $J = \\int_{0}^{\\pi} \\frac{dx}{1 + \\sin x}$. Since $\\frac{1}{1 + \\sin(\\pi - x)} = \\frac{1}{1 + \\sin x}$, $J = 2\\int_{0}^{\\pi/2} \\frac{dx}{1 + \\sin x} = 2\\int_{0}^{\\pi/2} \\frac{dx}{1 + \\cos x}$ (using $x \\to \\frac{\\pi}{2} - x$) $= 2\\int_{0}^{\\pi/2} \\frac{1}{2}\\sec^{2}\\frac{x}{2}\\,dx = 2\\left[\\tan\\frac{x}{2}\\right]_{0}^{\\pi/2} = 2$. So $2I = \\pi(\\pi - 2)$ and $I = \\frac{\\pi(\\pi - 2)}{2}$.',
    steps: [
      { step: 'Applies $x \\to \\pi - x$ and adds to get $2I = \\pi\\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\sin x}\\,dx$', marks: 1 },
      { step: 'Writes $\\frac{\\sin x}{1 + \\sin x} = 1 - \\frac{1}{1 + \\sin x}$', marks: 1 },
      { step: 'Uses $f(\\pi - x) = f(x)$ and $x \\to \\frac{\\pi}{2} - x$ to reduce $J$ to $2\\int_{0}^{\\pi/2} \\frac{dx}{1 + \\cos x}$', marks: 1 },
      { step: 'Evaluates $J = 2$ using $1 + \\cos x = 2\\cos^{2}\\frac{x}{2}$', marks: 1 },
      { step: 'Gets $I = \\frac{\\pi(\\pi - 2)}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d05', chapter: C, topic: 'Integration by parts', type: 'long', complexity: 'medium', marks: 5,
    text: 'Evaluate $\\int_{0}^{\\pi/2} e^{x}\\cos^{2} x\\,dx$.',
    answer: 'Since $\\cos^{2} x = \\frac{1 + \\cos 2x}{2}$, the integral is $\\frac{1}{2}\\int_{0}^{\\pi/2} e^{x}\\,dx + \\frac{1}{2}\\int_{0}^{\\pi/2} e^{x}\\cos 2x\\,dx$. The first part is $\\frac{1}{2}(e^{\\pi/2} - 1)$. For $K = \\int e^{x}\\cos 2x\\,dx$, use parts twice with $e^{x}$ as the second function: $K = e^{x}\\cos 2x + 2\\int e^{x}\\sin 2x\\,dx = e^{x}\\cos 2x + 2\\left(e^{x}\\sin 2x - 2K\\right)$, so $5K = e^{x}(\\cos 2x + 2\\sin 2x)$ and $K = \\frac{e^{x}}{5}(\\cos 2x + 2\\sin 2x)$. Then $\\int_{0}^{\\pi/2} e^{x}\\cos 2x\\,dx = \\frac{e^{\\pi/2}}{5}(-1 + 0) - \\frac{1}{5}(1 + 0) = -\\frac{e^{\\pi/2} + 1}{5}$. Hence the value is $\\frac{e^{\\pi/2} - 1}{2} - \\frac{e^{\\pi/2} + 1}{10} = \\frac{4e^{\\pi/2} - 6}{10} = \\frac{2e^{\\pi/2} - 3}{5}$.',
    steps: [
      { step: 'Uses $\\cos^{2} x = \\frac{1 + \\cos 2x}{2}$ to split the integral', marks: 1 },
      { step: 'Evaluates $\\frac{1}{2}\\int_{0}^{\\pi/2} e^{x}\\,dx = \\frac{e^{\\pi/2} - 1}{2}$', marks: 1 },
      { step: 'Applies parts twice to $\\int e^{x}\\cos 2x\\,dx$', marks: 1 },
      { step: 'Gets $\\frac{e^{x}}{5}(\\cos 2x + 2\\sin 2x)$ and evaluates it as $-\\frac{e^{\\pi/2} + 1}{5}$', marks: 1 },
      { step: 'Combines to get $\\frac{2e^{\\pi/2} - 3}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d06', chapter: C, topic: 'Special forms of integrals', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $\\int (x - 2)\\sqrt{x^{2} + 2x + 2}\\,dx$.',
    answer: 'Let $Q = x^{2} + 2x + 2$, so $\\frac{dQ}{dx} = 2x + 2$. Write $x - 2 = \\frac{1}{2}(2x + 2) - 3$. Then the integral is $\\frac{1}{2}\\int (2x + 2)\\sqrt{Q}\\,dx - 3\\int \\sqrt{Q}\\,dx$. For the first part put $u = Q$: $\\frac{1}{2}\\int \\sqrt{u}\\,du = \\frac{1}{3}u^{3/2} = \\frac{1}{3}(x^{2} + 2x + 2)^{3/2}$. For the second, $Q = (x + 1)^{2} + 1^{2}$, so $\\int \\sqrt{Q}\\,dx = \\frac{x + 1}{2}\\sqrt{Q} + \\frac{1}{2}\\log\\left|x + 1 + \\sqrt{Q}\\right|$. Hence the integral is $\\frac{1}{3}(x^{2} + 2x + 2)^{3/2} - \\frac{3(x + 1)}{2}\\sqrt{x^{2} + 2x + 2} - \\frac{3}{2}\\log\\left|x + 1 + \\sqrt{x^{2} + 2x + 2}\\right| + C$.',
    steps: [
      { step: 'Writes $x - 2 = \\frac{1}{2}(2x + 2) - 3$', marks: 1 },
      { step: 'Evaluates $\\frac{1}{2}\\int (2x + 2)\\sqrt{Q}\\,dx = \\frac{1}{3}Q^{3/2}$', marks: 1 },
      { step: 'Completes the square: $Q = (x + 1)^{2} + 1$', marks: 1 },
      { step: 'Applies the formula for $\\int \\sqrt{u^{2} + a^{2}}\\,du$', marks: 1 },
      { step: 'Gets $\\frac{1}{3}Q^{3/2} - \\frac{3(x + 1)}{2}\\sqrt{Q} - \\frac{3}{2}\\log\\left|x + 1 + \\sqrt{Q}\\right| + C$ with $Q = x^{2} + 2x + 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d07', chapter: C, topic: 'Definite integrals', type: 'long', complexity: 'hard', marks: 5,
    text: 'Evaluate $\\int_{0}^{\\pi/4} \\frac{dx}{\\cos^{4} x + \\sin^{2} x\\cos^{2} x + \\sin^{4} x}$.',
    answer: 'Divide numerator and denominator by $\\cos^{4} x$: the integrand becomes $\\frac{\\sec^{4} x}{1 + \\tan^{2} x + \\tan^{4} x} = \\frac{(1 + \\tan^{2} x)\\sec^{2} x}{1 + \\tan^{2} x + \\tan^{4} x}$. Put $t = \\tan x$, $dt = \\sec^{2} x\\,dx$; the limits become $0$ and $1$: the integral is $\\int_{0}^{1} \\frac{1 + t^{2}}{t^{4} + t^{2} + 1}\\,dt$. Divide by $t^{2}$: $\\frac{1 + \\frac{1}{t^{2}}}{t^{2} + \\frac{1}{t^{2}} + 1} = \\frac{1 + \\frac{1}{t^{2}}}{\\left(t - \\frac{1}{t}\\right)^{2} + 3}$. Put $u = t - \\frac{1}{t}$, $du = \\left(1 + \\frac{1}{t^{2}}\\right)dt$; as $t \\to 0^{+}$, $u \\to -\\infty$, and at $t = 1$, $u = 0$. The integral is $\\int_{-\\infty}^{0} \\frac{du}{u^{2} + 3} = \\frac{1}{\\sqrt{3}}\\left[\\tan^{-1}\\frac{u}{\\sqrt{3}}\\right]_{-\\infty}^{0} = \\frac{1}{\\sqrt{3}}\\left(0 + \\frac{\\pi}{2}\\right) = \\frac{\\pi}{2\\sqrt{3}}$.',
    steps: [
      { step: 'Divides by $\\cos^{4} x$ and writes the integrand in terms of $\\tan x$', marks: 1 },
      { step: 'Substitutes $t = \\tan x$ to get $\\int_{0}^{1} \\frac{1 + t^{2}}{t^{4} + t^{2} + 1}\\,dt$', marks: 1 },
      { step: 'Divides by $t^{2}$ and writes the denominator as $\\left(t - \\frac{1}{t}\\right)^{2} + 3$', marks: 1 },
      { step: 'Substitutes $u = t - \\frac{1}{t}$ with the correct limits $-\\infty$ and $0$', marks: 1 },
      { step: 'Gets $\\frac{\\pi}{2\\sqrt{3}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-r2-d08', chapter: C, topic: 'Integration by partial fractions', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find $\\int \\frac{3x + 5}{(x - 1)^{2}(x^{2} + 1)}\\,dx$.',
    answer: 'Write $\\frac{3x + 5}{(x - 1)^{2}(x^{2} + 1)} = \\frac{A}{x - 1} + \\frac{B}{(x - 1)^{2}} + \\frac{Px + D}{x^{2} + 1}$, so $3x + 5 = A(x - 1)(x^{2} + 1) + B(x^{2} + 1) + (Px + D)(x - 1)^{2}$. Putting $x = 1$: $8 = 2B$, so $B = 4$. Comparing coefficients: $x^{3}$: $A + P = 0$; $x$: $A + P - 2D = 3$, so $D = -\\frac{3}{2}$; constant: $-A + B + D = 5$, so $A = -\\frac{5}{2}$ and $P = \\frac{5}{2}$. (Check $x^{2}$: $-A + B - 2P + D = \\frac{5}{2} + 4 - 5 - \\frac{3}{2} = 0$.) So the integrand is $-\\frac{5}{2(x - 1)} + \\frac{4}{(x - 1)^{2}} + \\frac{5}{4}\\cdot\\frac{2x}{x^{2} + 1} - \\frac{3}{2}\\cdot\\frac{1}{x^{2} + 1}$, and the integral is $-\\frac{5}{2}\\log|x - 1| - \\frac{4}{x - 1} + \\frac{5}{4}\\log(x^{2} + 1) - \\frac{3}{2}\\tan^{-1} x + C$.',
    steps: [
      { step: 'Sets up $\\frac{A}{x - 1} + \\frac{B}{(x - 1)^{2}} + \\frac{Px + D}{x^{2} + 1}$', marks: 1 },
      { step: 'Finds $B = 4$', marks: 1 },
      { step: 'Finds $A = -\\frac{5}{2}$, $P = \\frac{5}{2}$, $D = -\\frac{3}{2}$', marks: 1 },
      { step: 'Splits $\\frac{\\frac{5}{2}x - \\frac{3}{2}}{x^{2} + 1}$ into a log part and a $\\tan^{-1}$ part', marks: 1 },
      { step: 'Gets $-\\frac{5}{2}\\log|x - 1| - \\frac{4}{x - 1} + \\frac{5}{4}\\log(x^{2} + 1) - \\frac{3}{2}\\tan^{-1} x + C$', marks: 1 },
    ],
  },

  // ───────────── Section E (4-mark case studies) ─────────────
  {
    id: 'c12-int-r2-e01', chapter: C, topic: 'Properties of definite integrals', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A city reservoir is monitored for four hours around noon. Taking $t = 0$ at noon, the rate at which the volume of water changes is $r(t) = t^{3} - 4t + 2$ thousand cubic metres per hour for $-2 \\le t \\le 2$ (a positive rate means water is flowing in, a negative rate means water is flowing out). The net change in volume between $t = a$ and $t = b$ is $\\int_{a}^{b} r(t)\\,dt$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Without finding an antiderivative, show that $\\int_{-2}^{2} (t^{3} - 4t)\\,dt = 0$.',
        answer: 'Let $g(t) = t^{3} - 4t$. Then $g(-t) = -t^{3} + 4t = -g(t)$, so $g$ is odd, and the integral of an odd function over $[-a, a]$ is $0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the net change in the volume of water from 10 a.m. to 2 p.m.',
        answer: '$\\int_{-2}^{2} r(t)\\,dt = \\int_{-2}^{2} (t^{3} - 4t)\\,dt + \\int_{-2}^{2} 2\\,dt = 0 + 8 = 8$ thousand cubic metres (an increase).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the net change in volume from noon to 2 p.m., and hence the net change from 10 a.m. to noon.\nOR\nEvaluate $\\int_{-2}^{2} |t^{3} - 4t|\\,dt$.',
        answer: 'Noon to 2 p.m.: $\\int_{0}^{2} (t^{3} - 4t + 2)\\,dt = \\left[\\frac{t^{4}}{4} - 2t^{2} + 2t\\right]_{0}^{2} = 4 - 8 + 4 = 0$ (1 mark). So from 10 a.m. to noon the net change is $8 - 0 = 8$ thousand cubic metres (1 mark).\nOR: $|t^{3} - 4t|$ is even, so the integral is $2\\int_{0}^{2} |t^{3} - 4t|\\,dt$. On $[0, 2]$, $t^{3} - 4t = t(t^{2} - 4) \\le 0$, so this is $2\\int_{0}^{2} (4t - t^{3})\\,dt = 2\\left[2t^{2} - \\frac{t^{4}}{4}\\right]_{0}^{2} = 2(8 - 4) = 8$ (1 mark for using evenness and the sign, 1 mark for the value).',
      },
    ],
    answer: '(i) $t^{3} - 4t$ is odd, so its integral over $[-2, 2]$ is $0$. (ii) $8$ thousand cubic metres. (iii) $0$ from noon to 2 p.m., so $8$ thousand cubic metres from 10 a.m. to noon; OR $8$.',
  },
  {
    id: 'c12-int-r2-e02', chapter: C, topic: 'Integration by substitution', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'During a storm, rainwater from a school roof is collected in a tank. $t$ hours after the storm begins, water flows into the tank at the rate $R(t) = \\frac{60t}{t^{2} + 16}$ litres per hour. The volume collected between $t = a$ and $t = b$ is $\\int_{a}^{b} R(t)\\,dt$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\int R(t)\\,dt$.',
        answer: 'Put $u = t^{2} + 16$, $du = 2t\\,dt$: $\\int \\frac{60t}{t^{2} + 16}\\,dt = 30\\int \\frac{du}{u} = 30\\log(t^{2} + 16) + C$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the volume of water collected in the first 3 hours.',
        answer: '$30\\left[\\log(t^{2} + 16)\\right]_{0}^{3} = 30\\log\\frac{25}{16} = 60\\log\\frac{5}{4} \\approx 13.4$ litres.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the time $T$ (in hours) by which the volume collected from the start equals $30\\log 2$ litres.\nOR\nA second pipe fills the tank at the rate $S(t) = \\frac{32}{t^{2} + 16}$ litres per hour. Find the volume this pipe delivers in the first 4 hours.',
        answer: '$30\\log\\frac{T^{2} + 16}{16} = 30\\log 2$ gives $T^{2} + 16 = 32$ (1 mark), so $T^{2} = 16$ and $T = 4$ hours (1 mark).\nOR: $\\int_{0}^{4} \\frac{32}{t^{2} + 16}\\,dt = 32\\cdot\\frac{1}{4}\\left[\\tan^{-1}\\frac{t}{4}\\right]_{0}^{4}$ (1 mark) $= 8\\cdot\\frac{\\pi}{4} = 2\\pi \\approx 6.28$ litres (1 mark).',
      },
    ],
    answer: '(i) $30\\log(t^{2} + 16) + C$. (ii) $60\\log\\frac{5}{4} \\approx 13.4$ litres. (iii) $T = 4$ hours; OR $2\\pi \\approx 6.28$ litres.',
  },
  {
    id: 'c12-int-r2-e03', chapter: C, topic: 'Standard indefinite integrals', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A small company makes solar lanterns. Its accountant finds that the marginal cost (the rate of change of total cost with respect to the number of lanterns $x$) is $MC(x) = 3x^{2} - 12x + 20$ rupees per lantern. The fixed cost, which is the total cost when no lanterns are made, is ₹500. The total cost $C(x)$ satisfies $C\'(x) = MC(x)$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the total cost function $C(x)$.',
        answer: '$C(x) = \\int (3x^{2} - 12x + 20)\\,dx = x^{3} - 6x^{2} + 20x + K$. Since $C(0) = 500$, $K = 500$, so $C(x) = x^{3} - 6x^{2} + 20x + 500$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the total cost of making 10 lanterns.',
        answer: '$C(10) = 1000 - 600 + 200 + 500 = ₹1100$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the increase in total cost when production is raised from 10 to 20 lanterns.\nOR\nThe marginal revenue is $MR(x) = 100 - 2x$ rupees per lantern, and the revenue is $0$ when nothing is sold. Find the revenue from selling 30 lanterns.',
        answer: 'Increase $= \\int_{10}^{20} (3x^{2} - 12x + 20)\\,dx = \\left[x^{3} - 6x^{2} + 20x\\right]_{10}^{20} = (8000 - 2400 + 400) - (1000 - 600 + 200) = 6000 - 600 = ₹5400$ (1 mark for setting up, 1 mark for the value).\nOR: $R(x) = \\int (100 - 2x)\\,dx = 100x - x^{2} + K$ with $R(0) = 0$, so $K = 0$ (1 mark). $R(30) = 3000 - 900 = ₹2100$ (1 mark).',
      },
    ],
    answer: '(i) $C(x) = x^{3} - 6x^{2} + 20x + 500$. (ii) ₹1100. (iii) ₹5400; OR ₹2100.',
  },
  {
    id: 'c12-int-r2-e04', chapter: C, topic: 'Definite integrals', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery robot moves back and forth along a straight corridor. Its velocity $t$ seconds after it starts is $v(t) = t^{2} - 5t + 6$ metres per second for $0 \\le t \\le 4$ (positive velocity means it moves forward). The displacement between $t = a$ and $t = b$ is $\\int_{a}^{b} v(t)\\,dt$, and the distance travelled is $\\int_{a}^{b} |v(t)|\\,dt$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the displacement of the robot from $t = 0$ to $t = 4$.',
        answer: '$\\int_{0}^{4} (t^{2} - 5t + 6)\\,dt = \\left[\\frac{t^{3}}{3} - \\frac{5t^{2}}{2} + 6t\\right]_{0}^{4} = \\frac{64}{3} - 40 + 24 = \\frac{16}{3}$ m.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the displacement from $t = 2$ to $t = 3$.',
        answer: 'With $S(t) = \\frac{t^{3}}{3} - \\frac{5t^{2}}{2} + 6t$: $S(3) - S(2) = \\frac{9}{2} - \\frac{14}{3} = -\\frac{1}{6}$ m (the robot moves backward $\\frac{1}{6}$ m).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the total distance travelled by the robot from $t = 0$ to $t = 4$.\nOR\nFind the total distance travelled by the robot from $t = 0$ to $t = 3$.',
        answer: '$v(t) = (t - 2)(t - 3)$ is positive on $(0, 2)$, negative on $(2, 3)$ and positive on $(3, 4)$ (1 mark). Distance $= [S(2) - S(0)] - [S(3) - S(2)] + [S(4) - S(3)] = \\frac{14}{3} + \\frac{1}{6} + \\frac{5}{6} = \\frac{17}{3}$ m (1 mark).\nOR: Distance $= [S(2) - S(0)] + |S(3) - S(2)| = \\frac{14}{3} + \\frac{1}{6} = \\frac{29}{6}$ m (1 mark for splitting at $t = 2$, 1 mark for the value).',
      },
    ],
    answer: '(i) $\\frac{16}{3}$ m. (ii) $-\\frac{1}{6}$ m. (iii) $\\frac{17}{3}$ m; OR $\\frac{29}{6}$ m.',
  },
];
