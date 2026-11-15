import type { Class12Question } from './types.js';

const C = 'Integrals';

const AR_OPTIONS = [
  'Both A and R are true, and R is the correct explanation of A.',
  'Both A and R are true, but R is not the correct explanation of A.',
  'A is true, but R is false.',
  'A is false, but R is true.',
];

export const CH07_INT: Class12Question[] = [
  // ───────────── Section A (1 mark) ─────────────
  {
    id: 'c12-int-a01', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{\\sin^{2} x - \\cos^{2} x}{\\sin^{2} x \\cos^{2} x}\\,dx$ is equal to',
    options: ['$\\tan x + \\cot x + C$', '$\\tan x - \\cot x + C$', '$-\\tan x - \\cot x + C$', '$\\sec x + \\operatorname{cosec} x + C$'],
    answer: 'Correct option: A) $\\tan x + \\cot x + C$. Splitting the fraction gives $\\sec^{2} x - \\operatorname{cosec}^{2} x$, whose integral is $\\tan x - (-\\cot x) = \\tan x + \\cot x$, plus $C$.',
  },
  {
    id: 'c12-int-a02', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int 3^{x}\\,dx$ is equal to',
    options: ['$3^{x}\\log 3 + C$', '$\\frac{3^{x}}{\\log 3} + C$', '$\\frac{3^{x+1}}{x+1} + C$', '$x\\,3^{x-1} + C$'],
    answer: 'Correct option: B) $\\frac{3^{x}}{\\log 3} + C$, using $\\int a^{x}\\,dx = \\frac{a^{x}}{\\log a} + C$. Option A is the derivative of $3^{x}$, not its integral, and C wrongly uses the power rule.',
  },
  {
    id: 'c12-int-a03', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\frac{dx}{1 - \\cos 2x}$ is equal to',
    options: ['$\\frac{1}{2}\\cot x + C$', '$-\\frac{1}{2}\\cot x + C$', '$-2\\cot x + C$', '$\\frac{1}{2}\\tan x + C$'],
    answer: 'Correct option: B) $-\\frac{1}{2}\\cot x + C$. Since $1 - \\cos 2x = 2\\sin^{2} x$, the integrand is $\\frac{1}{2}\\operatorname{cosec}^{2} x$, and $\\int \\operatorname{cosec}^{2} x\\,dx = -\\cot x$.',
  },
  {
    id: 'c12-int-a04', chapter: C, topic: 'Standard indefinite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $f\'(x) = 6x^{2} - \\frac{4}{x^{3}}$ and $f(1) = 3$, then $f(x)$ is',
    options: ['$2x^{3} + \\frac{2}{x^{2}} - 1$', '$2x^{3} - \\frac{2}{x^{2}} + 3$', '$2x^{3} + \\frac{2}{x^{2}} + 3$', '$2x^{3} - \\frac{2}{x^{2}} + 1$'],
    answer: 'Correct option: A) $2x^{3} + \\frac{2}{x^{2}} - 1$. Integrating, $f(x) = 2x^{3} + 2x^{-2} + C$ (since $\\int -4x^{-3}\\,dx = 2x^{-2}$). Then $f(1) = 4 + C = 3$ gives $C = -1$.',
  },
  {
    id: 'c12-int-a05', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{\\sec^{2}(\\log x)}{x}\\,dx$ is equal to',
    options: ['$\\tan(\\log x) + C$', '$\\sec(\\log x) + C$', '$\\frac{\\tan(\\log x)}{x} + C$', '$\\log|\\sec x| + C$'],
    answer: 'Correct option: A) $\\tan(\\log x) + C$. Put $t = \\log x$, so $dt = \\frac{dx}{x}$ and the integral becomes $\\int \\sec^{2} t\\,dt = \\tan t + C$.',
  },
  {
    id: 'c12-int-a06', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\frac{e^{2\\log x}}{1 + x^{6}}\\,dx$ is equal to',
    options: ['$\\frac{1}{3}\\tan^{-1}(x^{3}) + C$', '$\\tan^{-1}(x^{3}) + C$', '$\\frac{1}{6}\\log(1 + x^{6}) + C$', '$3\\tan^{-1}(x^{3}) + C$'],
    answer: 'Correct option: A) $\\frac{1}{3}\\tan^{-1}(x^{3}) + C$. Since $e^{2\\log x} = x^{2}$, put $t = x^{3}$, $dt = 3x^{2}\\,dx$, giving $\\frac{1}{3}\\int \\frac{dt}{1 + t^{2}} = \\frac{1}{3}\\tan^{-1} t + C$.',
  },
  {
    id: 'c12-int-a07', chapter: C, topic: 'Integration by substitution', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{\\sin\\sqrt{x}}{\\sqrt{x}}\\,dx$ is equal to',
    options: ['$-2\\cos\\sqrt{x} + C$', '$2\\cos\\sqrt{x} + C$', '$-\\frac{1}{2}\\cos\\sqrt{x} + C$', '$-\\cos\\sqrt{x} + C$'],
    answer: 'Correct option: A) $-2\\cos\\sqrt{x} + C$. Put $t = \\sqrt{x}$, so $\\frac{dx}{\\sqrt{x}} = 2\\,dt$, and $\\int 2\\sin t\\,dt = -2\\cos t + C$.',
  },
  {
    id: 'c12-int-a08', chapter: C, topic: 'Integration by parts', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int x\\sec^{2} x\\,dx$ is equal to',
    options: ['$x\\tan x + \\log|\\cos x| + C$', '$x\\tan x - \\log|\\cos x| + C$', '$x\\tan x + \\log|\\sin x| + C$', '$\\frac{x^{2}}{2}\\tan x + C$'],
    answer: 'Correct option: A) $x\\tan x + \\log|\\cos x| + C$. By parts with $u = x$, $dv = \\sec^{2} x\\,dx$: $x\\tan x - \\int \\tan x\\,dx = x\\tan x - \\log|\\sec x| = x\\tan x + \\log|\\cos x|$, plus $C$.',
  },
  {
    id: 'c12-int-a09', chapter: C, topic: 'Integration by parts', type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): $\\int \\log x\\,dx = \\frac{1}{x} + C$.\nReason (R): $\\int \\log x\\,dx = x\\log x - x + C$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false, but R is true. $\\frac{1}{x}$ is the derivative of $\\log x$, not its integral. Integrating $1 \\cdot \\log x$ by parts gives $x\\log x - \\int x \\cdot \\frac{1}{x}\\,dx = x\\log x - x + C$, so R is true.',
  },
  {
    id: 'c12-int-a10', chapter: C, topic: 'Special forms of integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: '$\\int \\frac{dx}{\\sqrt{16 - 9x^{2}}}$ is equal to',
    options: ['$\\frac{1}{3}\\sin^{-1}\\left(\\frac{3x}{4}\\right) + C$', '$\\sin^{-1}\\left(\\frac{3x}{4}\\right) + C$', '$\\frac{1}{4}\\sin^{-1}\\left(\\frac{3x}{4}\\right) + C$', '$\\frac{1}{3}\\sin^{-1}\\left(\\frac{4x}{3}\\right) + C$'],
    answer: 'Correct option: A) $\\frac{1}{3}\\sin^{-1}\\left(\\frac{3x}{4}\\right) + C$. Write $16 - 9x^{2} = 4^{2} - (3x)^{2}$ and put $t = 3x$, $dx = \\frac{dt}{3}$: $\\frac{1}{3}\\int \\frac{dt}{\\sqrt{16 - t^{2}}} = \\frac{1}{3}\\sin^{-1}\\frac{t}{4} + C$.',
  },
  {
    id: 'c12-int-a11', chapter: C, topic: 'Special forms of integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: '$\\int \\frac{dx}{x^{2} + 6x + 13}$ is equal to',
    options: ['$\\frac{1}{2}\\tan^{-1}\\left(\\frac{x+3}{2}\\right) + C$', '$\\tan^{-1}\\left(\\frac{x+3}{2}\\right) + C$', '$\\frac{1}{4}\\log\\left|\\frac{x+1}{x+5}\\right| + C$', '$\\frac{1}{2}\\tan^{-1}\\left(\\frac{x-3}{2}\\right) + C$'],
    answer: 'Correct option: A) $\\frac{1}{2}\\tan^{-1}\\left(\\frac{x+3}{2}\\right) + C$. Completing the square, $x^{2} + 6x + 13 = (x+3)^{2} + 2^{2}$, and $\\int \\frac{dx}{u^{2} + a^{2}} = \\frac{1}{a}\\tan^{-1}\\frac{u}{a} + C$.',
  },
  {
    id: 'c12-int-a12', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\int_{0}^{\\pi/6} \\cos 3x\\,dx$ is',
    options: ['$\\frac{1}{3}$', '$-\\frac{1}{3}$', '$3$', '$0$'],
    answer: 'Correct option: A) $\\frac{1}{3}$. $\\left[\\frac{\\sin 3x}{3}\\right]_{0}^{\\pi/6} = \\frac{\\sin(\\pi/2) - \\sin 0}{3} = \\frac{1}{3}$.',
  },
  {
    id: 'c12-int-a13', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\int_{0}^{2} \\frac{dx}{4 + x^{2}}$ is',
    options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{8}$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{16}$'],
    answer: 'Correct option: B) $\\frac{\\pi}{8}$. $\\left[\\frac{1}{2}\\tan^{-1}\\frac{x}{2}\\right]_{0}^{2} = \\frac{1}{2}\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{8}$. Option A forgets the factor $\\frac{1}{2}$.',
  },
  {
    id: 'c12-int-a14', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $\\int_{0}^{a} (2x + 1)\\,dx = 12$ and $a > 0$, then $a$ is equal to',
    options: ['$2$', '$3$', '$4$', '$6$'],
    answer: 'Correct option: B) $3$. $\\left[x^{2} + x\\right]_{0}^{a} = a^{2} + a = 12$, so $(a + 4)(a - 3) = 0$, and $a > 0$ gives $a = 3$.',
  },
  {
    id: 'c12-int-a15', chapter: C, topic: 'Definite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\int_{1}^{e} \\frac{\\log x}{x}\\,dx$ is',
    options: ['$1$', '$\\frac{1}{2}$', '$\\frac{e}{2}$', '$0$'],
    answer: 'Correct option: B) $\\frac{1}{2}$. With $t = \\log x$, the limits become $0$ to $1$ and the integral is $\\int_{0}^{1} t\\,dt = \\frac{1}{2}$.',
  },
  {
    id: 'c12-int-a16', chapter: C, topic: 'Properties of definite integrals', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $\\int_{-1}^{1} x|x|\\,dx = 0$.\nReason (R): For every continuous function $f$, $\\int_{-a}^{a} f(x)\\,dx = 2\\int_{0}^{a} f(x)\\,dx$.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true, but R is false. $x|x|$ is an odd function, so its integral over $[-1, 1]$ is $0$. R holds only for even functions; for odd functions the integral over $[-a, a]$ is $0$.',
  },
  {
    id: 'c12-int-a17', chapter: C, topic: 'Properties of definite integrals', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\int_{0}^{\\pi/2} \\frac{\\sin^{5} x}{\\sin^{5} x + \\cos^{5} x}\\,dx$ is',
    options: ['$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$0$', '$1$'],
    answer: 'Correct option: B) $\\frac{\\pi}{4}$. Replacing $x$ by $\\frac{\\pi}{2} - x$ gives the integral $I$ with $\\cos^{5} x$ on top; adding the two forms gives $2I = \\int_{0}^{\\pi/2} 1\\,dx = \\frac{\\pi}{2}$.',
  },
  {
    id: 'c12-int-a18', chapter: C, topic: 'Properties of definite integrals', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\int_{-2}^{2} |x - 1|\\,dx$ is',
    options: ['$4$', '$5$', '$\\frac{9}{2}$', '$3$'],
    answer: 'Correct option: B) $5$. Split at $x = 1$: $\\int_{-2}^{1} (1 - x)\\,dx + \\int_{1}^{2} (x - 1)\\,dx = \\frac{9}{2} + \\frac{1}{2} = 5$.',
  },
  {
    id: 'c12-int-a19', chapter: C, topic: 'Properties of definite integrals', type: 'assertion_reason', complexity: 'hard', marks: 1,
    text: 'Assertion (A): $\\int_{0}^{\\pi} \\frac{x\\sin x}{1 + \\cos^{2} x}\\,dx = \\frac{\\pi^{2}}{4}$.\nReason (R): $\\int_{0}^{a} f(x)\\,dx = \\int_{0}^{a} f(a - x)\\,dx$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both A and R are true, and R is the correct explanation of A. Using R with $a = \\pi$: $I = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin x}{1 + \\cos^{2} x}\\,dx$, so $2I = \\pi\\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^{2} x}\\,dx = \\pi\\left[-\\tan^{-1}(\\cos x)\\right]_{0}^{\\pi} = \\frac{\\pi^{2}}{2}$, giving $I = \\frac{\\pi^{2}}{4}$.',
  },

  // ───────────── Section B (2 marks) ─────────────
  {
    id: 'c12-int-b01', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $\\int \\frac{x}{(x - 1)(x + 2)}\\,dx$.',
    answer: 'Write $\\frac{x}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$, so $x = A(x+2) + B(x-1)$. Putting $x = 1$ gives $A = \\frac{1}{3}$; putting $x = -2$ gives $B = \\frac{2}{3}$. Hence $\\int \\frac{x}{(x-1)(x+2)}\\,dx = \\frac{1}{3}\\log|x - 1| + \\frac{2}{3}\\log|x + 2| + C$.',
    steps: [
      { step: 'Finds partial fractions $\\frac{1/3}{x-1} + \\frac{2/3}{x+2}$', marks: 1 },
      { step: 'Integrates to $\\frac{1}{3}\\log|x-1| + \\frac{2}{3}\\log|x+2| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-b02', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'easy', marks: 2,
    text: 'Find $\\int \\frac{(1 + \\log x)^{2}}{x}\\,dx$.',
    answer: 'Put $t = 1 + \\log x$, so $dt = \\frac{dx}{x}$. The integral becomes $\\int t^{2}\\,dt = \\frac{t^{3}}{3} + C = \\frac{(1 + \\log x)^{3}}{3} + C$.',
    steps: [
      { step: 'Substitutes $t = 1 + \\log x$, $dt = \\frac{dx}{x}$', marks: 1 },
      { step: 'Gets $\\frac{(1 + \\log x)^{3}}{3} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-b03', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\int_{0}^{\\pi/2} \\sin 3x\\cos x\\,dx$.',
    answer: 'Using $2\\sin A\\cos B = \\sin(A + B) + \\sin(A - B)$, $\\sin 3x\\cos x = \\frac{1}{2}(\\sin 4x + \\sin 2x)$. So the integral is $\\frac{1}{2}\\left[-\\frac{\\cos 4x}{4} - \\frac{\\cos 2x}{2}\\right]_{0}^{\\pi/2} = \\frac{1}{2}\\left[\\left(-\\frac{1}{4} + \\frac{1}{2}\\right) - \\left(-\\frac{1}{4} - \\frac{1}{2}\\right)\\right] = \\frac{1}{2}(1) = \\frac{1}{2}$.',
    steps: [
      { step: 'Rewrites the integrand as $\\frac{1}{2}(\\sin 4x + \\sin 2x)$ and integrates', marks: 1 },
      { step: 'Substitutes the limits to get $\\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-b04', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 2,
    text: 'Evaluate $\\int_{-\\pi/4}^{\\pi/4} \\left(x^{3}\\cos x + \\sec^{2} x\\right)dx$.',
    answer: '$x^{3}\\cos x$ is odd (since $(-x)^{3}\\cos(-x) = -x^{3}\\cos x$), so its integral over $[-\\frac{\\pi}{4}, \\frac{\\pi}{4}]$ is $0$. $\\sec^{2} x$ is even, so $\\int_{-\\pi/4}^{\\pi/4} \\sec^{2} x\\,dx = 2\\int_{0}^{\\pi/4} \\sec^{2} x\\,dx = 2[\\tan x]_{0}^{\\pi/4} = 2$. The value is $0 + 2 = 2$.',
    steps: [
      { step: 'Shows $x^{3}\\cos x$ is odd so its integral is $0$', marks: 1 },
      { step: 'Uses evenness of $\\sec^{2} x$ to get $2$; final value $2$', marks: 1 },
    ],
  },

  // ───────────── Section C (3 marks) ─────────────
  {
    id: 'c12-int-c01', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{x^{2} + 1}{(x - 1)^{2}(x + 3)}\\,dx$.',
    answer: 'Write $\\frac{x^{2} + 1}{(x-1)^{2}(x+3)} = \\frac{A}{x-1} + \\frac{B}{(x-1)^{2}} + \\frac{D}{x+3}$, so $x^{2} + 1 = A(x-1)(x+3) + B(x+3) + D(x-1)^{2}$. Putting $x = 1$: $2 = 4B$, so $B = \\frac{1}{2}$. Putting $x = -3$: $10 = 16D$, so $D = \\frac{5}{8}$. Comparing coefficients of $x^{2}$: $1 = A + D$, so $A = \\frac{3}{8}$. Hence the integral is $\\frac{3}{8}\\log|x - 1| - \\frac{1}{2(x - 1)} + \\frac{5}{8}\\log|x + 3| + C$.',
    steps: [
      { step: 'Sets up the form with $\\frac{A}{x-1} + \\frac{B}{(x-1)^{2}} + \\frac{D}{x+3}$', marks: 1 },
      { step: 'Finds $A = \\frac{3}{8}$, $B = \\frac{1}{2}$, $D = \\frac{5}{8}$', marks: 1 },
      { step: 'Integrates to $\\frac{3}{8}\\log|x-1| - \\frac{1}{2(x-1)} + \\frac{5}{8}\\log|x+3| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c02', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{x^{2} + 3}{(x^{2} + 1)(x^{2} + 4)}\\,dx$.',
    answer: 'Put $x^{2} = y$ (only to find the fractions): $\\frac{y + 3}{(y + 1)(y + 4)} = \\frac{A}{y + 1} + \\frac{B}{y + 4}$, so $y + 3 = A(y + 4) + B(y + 1)$. $y = -1$ gives $A = \\frac{2}{3}$; $y = -4$ gives $B = \\frac{1}{3}$. So the integrand is $\\frac{2}{3}\\cdot\\frac{1}{x^{2} + 1} + \\frac{1}{3}\\cdot\\frac{1}{x^{2} + 4}$, and the integral is $\\frac{2}{3}\\tan^{-1} x + \\frac{1}{6}\\tan^{-1}\\frac{x}{2} + C$.',
    steps: [
      { step: 'Uses $x^{2} = y$ and sets up partial fractions', marks: 1 },
      { step: 'Finds $A = \\frac{2}{3}$, $B = \\frac{1}{3}$', marks: 1 },
      { step: 'Gets $\\frac{2}{3}\\tan^{-1} x + \\frac{1}{6}\\tan^{-1}\\frac{x}{2} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c03', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{\\sec^{2} x}{(\\tan x + 1)(\\tan x + 3)}\\,dx$.',
    answer: 'Put $t = \\tan x$, $dt = \\sec^{2} x\\,dx$: the integral is $\\int \\frac{dt}{(t + 1)(t + 3)}$. Now $\\frac{1}{(t+1)(t+3)} = \\frac{1}{2}\\left(\\frac{1}{t+1} - \\frac{1}{t+3}\\right)$. So the integral is $\\frac{1}{2}\\log|t + 1| - \\frac{1}{2}\\log|t + 3| + C = \\frac{1}{2}\\log\\left|\\frac{\\tan x + 1}{\\tan x + 3}\\right| + C$.',
    steps: [
      { step: 'Substitutes $t = \\tan x$', marks: 1 },
      { step: 'Splits $\\frac{1}{(t+1)(t+3)} = \\frac{1}{2}\\left(\\frac{1}{t+1} - \\frac{1}{t+3}\\right)$', marks: 1 },
      { step: 'Gets $\\frac{1}{2}\\log\\left|\\frac{\\tan x + 1}{\\tan x + 3}\\right| + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c04', chapter: C, topic: 'Integration by partial fractions', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find $\\int \\frac{dx}{x(x^{4} + 1)}$.',
    answer: 'Multiply numerator and denominator by $x^{3}$: $\\int \\frac{x^{3}\\,dx}{x^{4}(x^{4} + 1)}$. Put $t = x^{4}$, $dt = 4x^{3}\\,dx$: the integral is $\\frac{1}{4}\\int \\frac{dt}{t(t + 1)} = \\frac{1}{4}\\int \\left(\\frac{1}{t} - \\frac{1}{t + 1}\\right)dt = \\frac{1}{4}\\log\\left|\\frac{t}{t + 1}\\right| + C = \\frac{1}{4}\\log\\left(\\frac{x^{4}}{x^{4} + 1}\\right) + C$.',
    steps: [
      { step: 'Multiplies by $x^{3}$ and substitutes $t = x^{4}$', marks: 1 },
      { step: 'Splits $\\frac{1}{t(t+1)} = \\frac{1}{t} - \\frac{1}{t+1}$', marks: 1 },
      { step: 'Gets $\\frac{1}{4}\\log\\left(\\frac{x^{4}}{x^{4} + 1}\\right) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c05', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int x\\tan^{-1} x\\,dx$.',
    answer: 'Take $\\tan^{-1} x$ as the first function: $\\int x\\tan^{-1} x\\,dx = \\frac{x^{2}}{2}\\tan^{-1} x - \\int \\frac{x^{2}}{2}\\cdot\\frac{1}{1 + x^{2}}\\,dx$. Now $\\frac{x^{2}}{1 + x^{2}} = 1 - \\frac{1}{1 + x^{2}}$, so the second integral is $\\frac{1}{2}(x - \\tan^{-1} x)$. Hence the answer is $\\frac{x^{2}}{2}\\tan^{-1} x - \\frac{x}{2} + \\frac{1}{2}\\tan^{-1} x + C = \\frac{x^{2} + 1}{2}\\tan^{-1} x - \\frac{x}{2} + C$.',
    steps: [
      { step: 'Applies parts with $\\tan^{-1} x$ as first function', marks: 1 },
      { step: 'Writes $\\frac{x^{2}}{1 + x^{2}} = 1 - \\frac{1}{1 + x^{2}}$ and integrates', marks: 1 },
      { step: 'Gets $\\frac{x^{2} + 1}{2}\\tan^{-1} x - \\frac{x}{2} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c06', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int e^{x}\\,\\frac{x + 2}{(x + 3)^{2}}\\,dx$.',
    answer: 'Write $\\frac{x + 2}{(x + 3)^{2}} = \\frac{(x + 3) - 1}{(x + 3)^{2}} = \\frac{1}{x + 3} - \\frac{1}{(x + 3)^{2}}$. With $f(x) = \\frac{1}{x + 3}$, $f\'(x) = -\\frac{1}{(x + 3)^{2}}$, so the integrand is $e^{x}[f(x) + f\'(x)]$. Since $\\int e^{x}[f(x) + f\'(x)]\\,dx = e^{x}f(x) + C$, the answer is $\\frac{e^{x}}{x + 3} + C$.',
    steps: [
      { step: 'Splits into $\\frac{1}{x+3} - \\frac{1}{(x+3)^{2}}$', marks: 1 },
      { step: 'Identifies the form $e^{x}[f(x) + f\'(x)]$ with $f(x) = \\frac{1}{x+3}$', marks: 1 },
      { step: 'Gets $\\frac{e^{x}}{x + 3} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c07', chapter: C, topic: 'Integration by parts', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{x\\sin^{-1} x}{\\sqrt{1 - x^{2}}}\\,dx$.',
    answer: 'Take $\\sin^{-1} x$ as the first function and $\\frac{x}{\\sqrt{1 - x^{2}}}$ as the second; $\\int \\frac{x}{\\sqrt{1 - x^{2}}}\\,dx = -\\sqrt{1 - x^{2}}$. So the integral is $-\\sqrt{1 - x^{2}}\\,\\sin^{-1} x - \\int \\left(-\\sqrt{1 - x^{2}}\\right)\\frac{1}{\\sqrt{1 - x^{2}}}\\,dx = -\\sqrt{1 - x^{2}}\\,\\sin^{-1} x + x + C$.',
    steps: [
      { step: 'Integrates the second function: $\\int \\frac{x}{\\sqrt{1 - x^{2}}}\\,dx = -\\sqrt{1 - x^{2}}$', marks: 1 },
      { step: 'Applies parts correctly', marks: 1 },
      { step: 'Gets $x - \\sqrt{1 - x^{2}}\\,\\sin^{-1} x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c08', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'easy', marks: 3,
    text: 'Find $\\int \\frac{dx}{x + \\sqrt{x}}$, $x > 0$.',
    answer: 'Put $\\sqrt{x} = t$, so $x = t^{2}$ and $dx = 2t\\,dt$. The integral becomes $\\int \\frac{2t\\,dt}{t^{2} + t} = \\int \\frac{2\\,dt}{t + 1} = 2\\log|t + 1| + C = 2\\log(1 + \\sqrt{x}) + C$.',
    steps: [
      { step: 'Substitutes $x = t^{2}$, $dx = 2t\\,dt$', marks: 1 },
      { step: 'Simplifies to $\\int \\frac{2}{t + 1}\\,dt$', marks: 1 },
      { step: 'Gets $2\\log(1 + \\sqrt{x}) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c09', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{\\sin 2x}{\\sqrt{9 - \\cos^{4} x}}\\,dx$.',
    answer: 'Put $t = \\cos^{2} x$, so $dt = -2\\sin x\\cos x\\,dx = -\\sin 2x\\,dx$. Then $\\cos^{4} x = t^{2}$ and the integral is $-\\int \\frac{dt}{\\sqrt{9 - t^{2}}} = -\\sin^{-1}\\frac{t}{3} + C = -\\sin^{-1}\\left(\\frac{\\cos^{2} x}{3}\\right) + C$.',
    steps: [
      { step: 'Substitutes $t = \\cos^{2} x$ with $dt = -\\sin 2x\\,dx$', marks: 1 },
      { step: 'Reduces to $-\\int \\frac{dt}{\\sqrt{9 - t^{2}}}$', marks: 1 },
      { step: 'Gets $-\\sin^{-1}\\left(\\frac{\\cos^{2} x}{3}\\right) + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c10', chapter: C, topic: 'Integration by substitution', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find $\\int \\frac{dx}{\\sin x\\cos^{3} x}$.',
    answer: 'Divide numerator and denominator by $\\cos^{4} x$: $\\frac{1}{\\sin x\\cos^{3} x} = \\frac{\\sec^{4} x}{\\tan x} = \\frac{(1 + \\tan^{2} x)\\sec^{2} x}{\\tan x}$. Put $t = \\tan x$, $dt = \\sec^{2} x\\,dx$: $\\int \\frac{1 + t^{2}}{t}\\,dt = \\int \\left(\\frac{1}{t} + t\\right)dt = \\log|t| + \\frac{t^{2}}{2} + C = \\log|\\tan x| + \\frac{\\tan^{2} x}{2} + C$.',
    steps: [
      { step: 'Rewrites the integrand as $\\frac{(1 + \\tan^{2} x)\\sec^{2} x}{\\tan x}$', marks: 1 },
      { step: 'Substitutes $t = \\tan x$ to get $\\int \\left(\\frac{1}{t} + t\\right)dt$', marks: 1 },
      { step: 'Gets $\\log|\\tan x| + \\frac{\\tan^{2} x}{2} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c11', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{2x + 3}{x^{2} + 4x + 8}\\,dx$.',
    answer: 'Write $2x + 3 = (2x + 4) - 1$, where $2x + 4$ is the derivative of the denominator. So the integral is $\\int \\frac{2x + 4}{x^{2} + 4x + 8}\\,dx - \\int \\frac{dx}{(x + 2)^{2} + 2^{2}} = \\log(x^{2} + 4x + 8) - \\frac{1}{2}\\tan^{-1}\\left(\\frac{x + 2}{2}\\right) + C$. (The modulus is not needed as $x^{2} + 4x + 8 > 0$.)',
    steps: [
      { step: 'Writes $2x + 3 = (2x + 4) - 1$', marks: 1 },
      { step: 'Gets $\\log(x^{2} + 4x + 8)$ for the first part', marks: 1 },
      { step: 'Completes the square and gets $-\\frac{1}{2}\\tan^{-1}\\frac{x+2}{2}$; final answer with $C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c12', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{3x - 1}{\\sqrt{x^{2} + 2x + 5}}\\,dx$.',
    answer: 'Write $3x - 1 = \\frac{3}{2}(2x + 2) - 4$. Then the integral is $\\frac{3}{2}\\int \\frac{2x + 2}{\\sqrt{x^{2} + 2x + 5}}\\,dx - 4\\int \\frac{dx}{\\sqrt{(x + 1)^{2} + 2^{2}}} = 3\\sqrt{x^{2} + 2x + 5} - 4\\log\\left|x + 1 + \\sqrt{x^{2} + 2x + 5}\\right| + C$.',
    steps: [
      { step: 'Writes $3x - 1 = \\frac{3}{2}(2x + 2) - 4$', marks: 1 },
      { step: 'Gets $3\\sqrt{x^{2} + 2x + 5}$ for the first part', marks: 1 },
      { step: 'Gets $-4\\log\\left|x + 1 + \\sqrt{x^{2} + 2x + 5}\\right|$; final answer with $C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c13', chapter: C, topic: 'Special forms of integrals', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find $\\int \\sqrt{5 - 4x - x^{2}}\\,dx$.',
    answer: 'Complete the square: $5 - 4x - x^{2} = 9 - (x + 2)^{2}$. Using $\\int \\sqrt{a^{2} - u^{2}}\\,du = \\frac{u}{2}\\sqrt{a^{2} - u^{2}} + \\frac{a^{2}}{2}\\sin^{-1}\\frac{u}{a} + C$ with $u = x + 2$, $a = 3$: the integral is $\\frac{x + 2}{2}\\sqrt{5 - 4x - x^{2}} + \\frac{9}{2}\\sin^{-1}\\left(\\frac{x + 2}{3}\\right) + C$.',
    steps: [
      { step: 'Writes $5 - 4x - x^{2} = 3^{2} - (x + 2)^{2}$', marks: 1 },
      { step: 'Applies the standard formula for $\\int \\sqrt{a^{2} - u^{2}}\\,du$', marks: 1 },
      { step: 'Gets $\\frac{x + 2}{2}\\sqrt{5 - 4x - x^{2}} + \\frac{9}{2}\\sin^{-1}\\frac{x + 2}{3} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c14', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{2}^{5} \\frac{\\sqrt{x}}{\\sqrt{x} + \\sqrt{7 - x}}\\,dx$.',
    answer: 'Let $I$ be the integral. Using $\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{b} f(a + b - x)\\,dx$ with $a + b = 7$: $I = \\int_{2}^{5} \\frac{\\sqrt{7 - x}}{\\sqrt{7 - x} + \\sqrt{x}}\\,dx$. Adding the two forms: $2I = \\int_{2}^{5} 1\\,dx = 3$, so $I = \\frac{3}{2}$.',
    steps: [
      { step: 'Applies $x \\to 7 - x$ to get the second form of $I$', marks: 1 },
      { step: 'Adds to get $2I = \\int_{2}^{5} dx$', marks: 1 },
      { step: 'Gets $I = \\frac{3}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c15', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'hard', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\pi} \\frac{x}{4 - \\cos^{2} x}\\,dx$.',
    answer: 'Let $I$ be the integral. Using $x \\to \\pi - x$ (and $\\cos^{2}(\\pi - x) = \\cos^{2} x$): $I = \\int_{0}^{\\pi} \\frac{\\pi - x}{4 - \\cos^{2} x}\\,dx$. Adding, $2I = \\pi\\int_{0}^{\\pi} \\frac{dx}{4 - \\cos^{2} x} = 2\\pi\\int_{0}^{\\pi/2} \\frac{dx}{4 - \\cos^{2} x}$ (the integrand satisfies $f(\\pi - x) = f(x)$). So $I = \\pi\\int_{0}^{\\pi/2} \\frac{dx}{4 - \\cos^{2} x}$. Divide by $\\cos^{2} x$: $\\int_{0}^{\\pi/2} \\frac{\\sec^{2} x\\,dx}{4\\sec^{2} x - 1} = \\int_{0}^{\\pi/2} \\frac{\\sec^{2} x\\,dx}{3 + 4\\tan^{2} x}$. With $t = \\tan x$ (limits $0$ to $\\infty$): $\\int_{0}^{\\infty} \\frac{dt}{3 + 4t^{2}} = \\frac{1}{4}\\cdot\\frac{2}{\\sqrt{3}}\\left[\\tan^{-1}\\frac{2t}{\\sqrt{3}}\\right]_{0}^{\\infty} = \\frac{1}{2\\sqrt{3}}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{4\\sqrt{3}}$. Hence $I = \\frac{\\pi^{2}}{4\\sqrt{3}}$.',
    steps: [
      { step: 'Uses $x \\to \\pi - x$ to get $I = \\frac{\\pi}{2}\\int_{0}^{\\pi} \\frac{dx}{4 - \\cos^{2} x}$', marks: 1 },
      { step: 'Reduces to $\\pi\\int_{0}^{\\infty} \\frac{dt}{3 + 4t^{2}}$ using $t = \\tan x$', marks: 1 },
      { step: 'Evaluates to $I = \\frac{\\pi^{2}}{4\\sqrt{3}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c16', chapter: C, topic: 'Properties of definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{-1}^{2} |x^{3} - x|\\,dx$.',
    answer: '$x^{3} - x = x(x - 1)(x + 1)$ is $\\geq 0$ on $[-1, 0]$, $\\leq 0$ on $[0, 1]$ and $\\geq 0$ on $[1, 2]$. So the integral is $\\int_{-1}^{0} (x^{3} - x)\\,dx + \\int_{0}^{1} (x - x^{3})\\,dx + \\int_{1}^{2} (x^{3} - x)\\,dx = \\frac{1}{4} + \\frac{1}{4} + \\frac{9}{4} = \\frac{11}{4}$.',
    steps: [
      { step: 'Finds the sign of $x^{3} - x$ on $[-1, 0]$, $[0, 1]$, $[1, 2]$ and splits the integral', marks: 1 },
      { step: 'Evaluates the pieces as $\\frac{1}{4}$, $\\frac{1}{4}$, $\\frac{9}{4}$', marks: 1 },
      { step: 'Gets $\\frac{11}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c17', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\pi/2} \\frac{\\cos x}{(1 + \\sin x)(2 + \\sin x)}\\,dx$.',
    answer: 'Put $t = \\sin x$, $dt = \\cos x\\,dx$; the limits become $0$ to $1$. The integral is $\\int_{0}^{1} \\frac{dt}{(1 + t)(2 + t)} = \\int_{0}^{1} \\left(\\frac{1}{1 + t} - \\frac{1}{2 + t}\\right)dt = \\left[\\log\\frac{1 + t}{2 + t}\\right]_{0}^{1} = \\log\\frac{2}{3} - \\log\\frac{1}{2} = \\log\\frac{4}{3}$.',
    steps: [
      { step: 'Substitutes $t = \\sin x$ and changes the limits to $0$ and $1$', marks: 1 },
      { step: 'Splits into $\\frac{1}{1+t} - \\frac{1}{2+t}$ and integrates', marks: 1 },
      { step: 'Gets $\\log\\frac{4}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c18', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{1}^{2} \\frac{dx}{x(1 + \\log x)^{2}}$.',
    answer: 'Put $t = 1 + \\log x$, $dt = \\frac{dx}{x}$; when $x = 1$, $t = 1$ and when $x = 2$, $t = 1 + \\log 2$. The integral is $\\int_{1}^{1 + \\log 2} \\frac{dt}{t^{2}} = \\left[-\\frac{1}{t}\\right]_{1}^{1 + \\log 2} = 1 - \\frac{1}{1 + \\log 2} = \\frac{\\log 2}{1 + \\log 2}$.',
    steps: [
      { step: 'Substitutes $t = 1 + \\log x$ and changes the limits', marks: 1 },
      { step: 'Integrates $t^{-2}$ to $-\\frac{1}{t}$', marks: 1 },
      { step: 'Gets $\\frac{\\log 2}{1 + \\log 2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c19', chapter: C, topic: 'Definite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Evaluate $\\int_{0}^{\\pi/2} \\frac{dx}{4\\cos^{2} x + 9\\sin^{2} x}$.',
    answer: 'Divide numerator and denominator by $\\cos^{2} x$: $\\int_{0}^{\\pi/2} \\frac{\\sec^{2} x\\,dx}{4 + 9\\tan^{2} x}$. Put $t = \\tan x$; the limits become $0$ to $\\infty$. The integral is $\\int_{0}^{\\infty} \\frac{dt}{4 + 9t^{2}} = \\frac{1}{9}\\int_{0}^{\\infty} \\frac{dt}{t^{2} + (2/3)^{2}} = \\frac{1}{9}\\cdot\\frac{3}{2}\\left[\\tan^{-1}\\frac{3t}{2}\\right]_{0}^{\\infty} = \\frac{1}{6}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{12}$.',
    steps: [
      { step: 'Divides by $\\cos^{2} x$ and substitutes $t = \\tan x$', marks: 1 },
      { step: 'Integrates to $\\frac{1}{6}\\tan^{-1}\\frac{3t}{2}$', marks: 1 },
      { step: 'Gets $\\frac{\\pi}{12}$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-c20', chapter: C, topic: 'Standard indefinite integrals', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $\\int \\frac{\\cos 2x - \\cos 2\\alpha}{\\cos x - \\cos\\alpha}\\,dx$, where $\\alpha$ is a constant.',
    answer: 'Using $\\cos 2\\theta = 2\\cos^{2}\\theta - 1$: $\\cos 2x - \\cos 2\\alpha = 2(\\cos^{2} x - \\cos^{2}\\alpha) = 2(\\cos x - \\cos\\alpha)(\\cos x + \\cos\\alpha)$. So the integrand simplifies to $2(\\cos x + \\cos\\alpha)$, and the integral is $2\\sin x + 2x\\cos\\alpha + C$.',
    steps: [
      { step: 'Writes $\\cos 2x - \\cos 2\\alpha = 2(\\cos^{2} x - \\cos^{2}\\alpha)$', marks: 1 },
      { step: 'Simplifies the integrand to $2(\\cos x + \\cos\\alpha)$', marks: 1 },
      { step: 'Gets $2\\sin x + 2x\\cos\\alpha + C$', marks: 1 },
    ],
  },

  // ───────────── Section D (5 marks) ─────────────
  {
    id: 'c12-int-d01', chapter: C, topic: 'Integration by partial fractions', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $\\int \\frac{3x^{2} + 5x - 2}{(x + 3)(x^{2} + 1)}\\,dx$.',
    answer: 'Write $\\frac{3x^{2} + 5x - 2}{(x + 3)(x^{2} + 1)} = \\frac{A}{x + 3} + \\frac{Bx + D}{x^{2} + 1}$, so $3x^{2} + 5x - 2 = A(x^{2} + 1) + (Bx + D)(x + 3)$. Putting $x = -3$: $10 = 10A$, so $A = 1$. Comparing $x^{2}$: $3 = A + B$, so $B = 2$. Comparing constants: $-2 = A + 3D$, so $D = -1$. (Check $x$: $3B + D = 6 - 1 = 5$.) So the integral is $\\int \\frac{dx}{x + 3} + \\int \\frac{2x}{x^{2} + 1}\\,dx - \\int \\frac{dx}{x^{2} + 1} = \\log|x + 3| + \\log(x^{2} + 1) - \\tan^{-1} x + C$.',
    steps: [
      { step: 'Sets up $\\frac{A}{x+3} + \\frac{Bx + D}{x^{2} + 1}$', marks: 1 },
      { step: 'Finds $A = 1$', marks: 1 },
      { step: 'Finds $B = 2$, $D = -1$', marks: 1 },
      { step: 'Splits $\\frac{2x - 1}{x^{2} + 1}$ into a log part and a $\\tan^{-1}$ part', marks: 1 },
      { step: 'Gets $\\log|x + 3| + \\log(x^{2} + 1) - \\tan^{-1} x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-d02', chapter: C, topic: 'Integration by partial fractions', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find $\\int \\frac{x^{4}}{(x - 1)(x^{2} + 1)}\\,dx$.',
    answer: 'The denominator is $x^{3} - x^{2} + x - 1$. Dividing, $x^{4} = (x + 1)(x^{3} - x^{2} + x - 1) + 1$, so the integrand is $x + 1 + \\frac{1}{(x - 1)(x^{2} + 1)}$. Write $\\frac{1}{(x - 1)(x^{2} + 1)} = \\frac{A}{x - 1} + \\frac{Bx + D}{x^{2} + 1}$, so $1 = A(x^{2} + 1) + (Bx + D)(x - 1)$. $x = 1$ gives $A = \\frac{1}{2}$; comparing $x^{2}$: $0 = A + B$, so $B = -\\frac{1}{2}$; comparing constants: $1 = A - D$, so $D = -\\frac{1}{2}$. Hence the integrand is $x + 1 + \\frac{1}{2(x - 1)} - \\frac{1}{2}\\cdot\\frac{x + 1}{x^{2} + 1}$, and the integral is $\\frac{x^{2}}{2} + x + \\frac{1}{2}\\log|x - 1| - \\frac{1}{4}\\log(x^{2} + 1) - \\frac{1}{2}\\tan^{-1} x + C$.',
    steps: [
      { step: 'Divides to get $x + 1 + \\frac{1}{(x - 1)(x^{2} + 1)}$', marks: 1 },
      { step: 'Sets up the partial fractions with $\\frac{A}{x-1} + \\frac{Bx + D}{x^{2} + 1}$', marks: 1 },
      { step: 'Finds $A = \\frac{1}{2}$, $B = -\\frac{1}{2}$, $D = -\\frac{1}{2}$', marks: 1 },
      { step: 'Integrates $\\frac{x + 1}{x^{2} + 1}$ as $\\frac{1}{2}\\log(x^{2} + 1) + \\tan^{-1} x$', marks: 1 },
      { step: 'Gets $\\frac{x^{2}}{2} + x + \\frac{1}{2}\\log|x - 1| - \\frac{1}{4}\\log(x^{2} + 1) - \\frac{1}{2}\\tan^{-1} x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-d03', chapter: C, topic: 'Properties of definite integrals', type: 'long', complexity: 'hard', marks: 5,
    text: 'Evaluate $\\int_{0}^{\\pi/2} \\log(\\sin x)\\,dx$.',
    answer: 'Let $I = \\int_{0}^{\\pi/2} \\log(\\sin x)\\,dx$. Using $x \\to \\frac{\\pi}{2} - x$, $I = \\int_{0}^{\\pi/2} \\log(\\cos x)\\,dx$. Adding, $2I = \\int_{0}^{\\pi/2} \\log(\\sin x\\cos x)\\,dx = \\int_{0}^{\\pi/2} \\log\\left(\\frac{\\sin 2x}{2}\\right)dx = \\int_{0}^{\\pi/2} \\log(\\sin 2x)\\,dx - \\frac{\\pi}{2}\\log 2$. In $I_{1} = \\int_{0}^{\\pi/2} \\log(\\sin 2x)\\,dx$, put $t = 2x$: $I_{1} = \\frac{1}{2}\\int_{0}^{\\pi} \\log(\\sin t)\\,dt = \\frac{1}{2}\\cdot 2\\int_{0}^{\\pi/2} \\log(\\sin t)\\,dt = I$, since $\\sin(\\pi - t) = \\sin t$. So $2I = I - \\frac{\\pi}{2}\\log 2$, giving $I = -\\frac{\\pi}{2}\\log 2$.',
    steps: [
      { step: 'Uses $x \\to \\frac{\\pi}{2} - x$ to write $I = \\int_{0}^{\\pi/2} \\log(\\cos x)\\,dx$', marks: 1 },
      { step: 'Adds to get $2I = \\int_{0}^{\\pi/2} \\log(\\sin 2x)\\,dx - \\frac{\\pi}{2}\\log 2$', marks: 1 },
      { step: 'Substitutes $t = 2x$ to get $\\frac{1}{2}\\int_{0}^{\\pi} \\log(\\sin t)\\,dt$', marks: 1 },
      { step: 'Uses $\\int_{0}^{2a} f = 2\\int_{0}^{a} f$ when $f(2a - x) = f(x)$ to show this equals $I$', marks: 1 },
      { step: 'Solves to get $I = -\\frac{\\pi}{2}\\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-d04', chapter: C, topic: 'Integration by parts', type: 'long', complexity: 'medium', marks: 5,
    text: 'Evaluate $\\int_{0}^{1} \\sin^{-1}\\left(\\frac{2x}{1 + x^{2}}\\right)dx$.',
    answer: 'Put $x = \\tan\\theta$; for $0 \\le x \\le 1$, $0 \\le \\theta \\le \\frac{\\pi}{4}$, so $\\frac{2x}{1 + x^{2}} = \\sin 2\\theta$ with $2\\theta \\in [0, \\frac{\\pi}{2}]$, and $\\sin^{-1}\\left(\\frac{2x}{1 + x^{2}}\\right) = 2\\theta = 2\\tan^{-1} x$. So the integral is $2\\int_{0}^{1} \\tan^{-1} x\\,dx$. By parts (with $1$ as the second function): $\\int \\tan^{-1} x\\,dx = x\\tan^{-1} x - \\int \\frac{x}{1 + x^{2}}\\,dx = x\\tan^{-1} x - \\frac{1}{2}\\log(1 + x^{2})$. Hence the value is $2\\left[x\\tan^{-1} x - \\frac{1}{2}\\log(1 + x^{2})\\right]_{0}^{1} = 2\\left(\\frac{\\pi}{4} - \\frac{1}{2}\\log 2\\right) = \\frac{\\pi}{2} - \\log 2$.',
    steps: [
      { step: 'Substitutes $x = \\tan\\theta$ and checks the range of $\\theta$', marks: 1 },
      { step: 'Simplifies the integrand to $2\\tan^{-1} x$', marks: 1 },
      { step: 'Applies parts to $\\int \\tan^{-1} x\\,dx$', marks: 1 },
      { step: 'Gets the antiderivative $x\\tan^{-1} x - \\frac{1}{2}\\log(1 + x^{2})$', marks: 1 },
      { step: 'Substitutes limits to get $\\frac{\\pi}{2} - \\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-d05', chapter: C, topic: 'Integration by substitution', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find $\\int \\sqrt{\\tan x}\\,dx$, $0 < x < \\frac{\\pi}{2}$.',
    answer: 'Put $\\tan x = t^{2}$ ($t > 0$), so $\\sec^{2} x\\,dx = 2t\\,dt$ and $dx = \\frac{2t\\,dt}{1 + t^{4}}$. The integral is $\\int \\frac{2t^{2}}{1 + t^{4}}\\,dt = \\int \\frac{t^{2} + 1}{t^{4} + 1}\\,dt + \\int \\frac{t^{2} - 1}{t^{4} + 1}\\,dt$. Dividing by $t^{2}$: the first is $\\int \\frac{1 + 1/t^{2}}{(t - 1/t)^{2} + 2}\\,dt$; with $u = t - \\frac{1}{t}$ it equals $\\frac{1}{\\sqrt{2}}\\tan^{-1}\\frac{t - 1/t}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\tan^{-1}\\frac{t^{2} - 1}{\\sqrt{2}\\,t}$. The second is $\\int \\frac{1 - 1/t^{2}}{(t + 1/t)^{2} - 2}\\,dt$; with $v = t + \\frac{1}{t}$ it equals $\\frac{1}{2\\sqrt{2}}\\log\\left|\\frac{v - \\sqrt{2}}{v + \\sqrt{2}}\\right| = \\frac{1}{2\\sqrt{2}}\\log\\left|\\frac{t^{2} - \\sqrt{2}\\,t + 1}{t^{2} + \\sqrt{2}\\,t + 1}\\right|$. With $t = \\sqrt{\\tan x}$: $\\int \\sqrt{\\tan x}\\,dx = \\frac{1}{\\sqrt{2}}\\tan^{-1}\\left(\\frac{\\tan x - 1}{\\sqrt{2\\tan x}}\\right) + \\frac{1}{2\\sqrt{2}}\\log\\left|\\frac{\\tan x - \\sqrt{2\\tan x} + 1}{\\tan x + \\sqrt{2\\tan x} + 1}\\right| + C$.',
    steps: [
      { step: 'Substitutes $\\tan x = t^{2}$ to get $\\int \\frac{2t^{2}}{1 + t^{4}}\\,dt$', marks: 1 },
      { step: 'Splits into $\\int \\frac{t^{2} + 1}{t^{4} + 1}\\,dt + \\int \\frac{t^{2} - 1}{t^{4} + 1}\\,dt$', marks: 1 },
      { step: 'Evaluates the first with $u = t - \\frac{1}{t}$ as a $\\tan^{-1}$ term', marks: 1 },
      { step: 'Evaluates the second with $v = t + \\frac{1}{t}$ as a log term', marks: 1 },
      { step: 'Writes the final answer in terms of $x$, with $C$', marks: 1 },
    ],
  },
  {
    id: 'c12-int-d06', chapter: C, topic: 'Definite integrals', type: 'long', complexity: 'medium', marks: 5,
    text: 'Evaluate $\\int_{0}^{\\pi/4} \\frac{\\sin x + \\cos x}{5 + 4\\sin 2x}\\,dx$.',
    answer: 'Put $t = \\sin x - \\cos x$, so $dt = (\\cos x + \\sin x)\\,dx$ and $t^{2} = 1 - \\sin 2x$, i.e. $\\sin 2x = 1 - t^{2}$. When $x = 0$, $t = -1$; when $x = \\frac{\\pi}{4}$, $t = 0$. The integral becomes $\\int_{-1}^{0} \\frac{dt}{5 + 4(1 - t^{2})} = \\int_{-1}^{0} \\frac{dt}{9 - 4t^{2}} = \\frac{1}{4}\\int_{-1}^{0} \\frac{dt}{\\left(\\frac{3}{2}\\right)^{2} - t^{2}}$. Using $\\int \\frac{dt}{a^{2} - t^{2}} = \\frac{1}{2a}\\log\\left|\\frac{a + t}{a - t}\\right|$ with $a = \\frac{3}{2}$: the value is $\\frac{1}{4}\\cdot\\frac{1}{3}\\left[\\log\\left|\\frac{3/2 + t}{3/2 - t}\\right|\\right]_{-1}^{0} = \\frac{1}{12}\\left[\\log 1 - \\log\\frac{1/2}{5/2}\\right] = \\frac{1}{12}\\log 5$.',
    steps: [
      { step: 'Chooses $t = \\sin x - \\cos x$ with $dt = (\\sin x + \\cos x)\\,dx$', marks: 1 },
      { step: 'Expresses $\\sin 2x = 1 - t^{2}$ and changes the limits to $-1$ and $0$', marks: 1 },
      { step: 'Reduces to $\\int_{-1}^{0} \\frac{dt}{9 - 4t^{2}}$', marks: 1 },
      { step: 'Applies $\\int \\frac{dt}{a^{2} - t^{2}} = \\frac{1}{2a}\\log\\left|\\frac{a + t}{a - t}\\right|$ with $a = \\frac{3}{2}$', marks: 1 },
      { step: 'Gets $\\frac{1}{12}\\log 5$', marks: 1 },
    ],
  },

  // ───────────── Section E (4-mark case studies) ─────────────
  {
    id: 'c12-int-e01', chapter: C, topic: 'Definite integrals', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A rooftop solar plant at a school starts generating power at 6 a.m. Its power output $t$ hours after 6 a.m. is modelled by $P(t) = 6\\sin\\left(\\frac{\\pi t}{12}\\right)$ kilowatts for $0 \\le t \\le 12$. The energy (in kWh) produced between times $t = a$ and $t = b$ is $\\int_{a}^{b} P(t)\\,dt$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\int P(t)\\,dt$.',
        answer: '$\\int 6\\sin\\left(\\frac{\\pi t}{12}\\right)dt = -\\frac{72}{\\pi}\\cos\\left(\\frac{\\pi t}{12}\\right) + C$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the energy produced between 6 a.m. and 12 noon.',
        answer: '$\\int_{0}^{6} P(t)\\,dt = -\\frac{72}{\\pi}\\left[\\cos\\frac{\\pi}{2} - \\cos 0\\right] = \\frac{72}{\\pi} \\approx 22.9$ kWh.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the total energy produced between 6 a.m. and 6 p.m.\nOR\nShow that the energy produced between 6 a.m. and 10 a.m. equals the energy produced between 2 p.m. and 6 p.m., and find this energy.',
        answer: 'Total energy $= \\int_{0}^{12} P(t)\\,dt = -\\frac{72}{\\pi}[\\cos\\pi - \\cos 0] = \\frac{144}{\\pi} \\approx 45.8$ kWh (1 mark for setting up and integrating, 1 mark for the value).\nOR: Since $\\sin\\left(\\frac{\\pi(12 - t)}{12}\\right) = \\sin\\left(\\pi - \\frac{\\pi t}{12}\\right) = \\sin\\frac{\\pi t}{12}$, $P(12 - t) = P(t)$; putting $t = 12 - s$ in $\\int_{8}^{12} P(t)\\,dt$ gives $\\int_{0}^{4} P(s)\\,ds$, so the two energies are equal (1 mark). Their value is $-\\frac{72}{\\pi}\\left[\\cos\\frac{\\pi}{3} - 1\\right] = \\frac{36}{\\pi} \\approx 11.5$ kWh (1 mark).',
      },
    ],
    answer: '(i) $-\\frac{72}{\\pi}\\cos\\frac{\\pi t}{12} + C$. (ii) $\\frac{72}{\\pi}$ kWh. (iii) $\\frac{144}{\\pi}$ kWh; OR the two energies are equal by symmetry $P(12 - t) = P(t)$, each $\\frac{36}{\\pi}$ kWh.',
  },
  {
    id: 'c12-int-e02', chapter: C, topic: 'Integration by partial fractions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A fisheries officer stocks a pond and tracks the fish population. She finds that $t$ months after stocking, the number of fish $N$ grows at the rate $\\frac{dN}{dt} = \\frac{100}{(t + 1)(t + 2)}$ fish per month. The increase in the number of fish between $t = a$ and $t = b$ is $\\int_{a}^{b} \\frac{dN}{dt}\\,dt$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Express $\\frac{1}{(t + 1)(t + 2)}$ in partial fractions.',
        answer: '$\\frac{1}{(t + 1)(t + 2)} = \\frac{1}{t + 1} - \\frac{1}{t + 2}$ (from $1 = A(t + 2) + B(t + 1)$: $t = -1$ gives $A = 1$, $t = -2$ gives $B = -1$).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\int \\frac{100}{(t + 1)(t + 2)}\\,dt$ for $t \\ge 0$.',
        answer: '$100\\left[\\log(t + 1) - \\log(t + 2)\\right] + C = 100\\log\\left(\\frac{t + 1}{t + 2}\\right) + C$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the increase in the number of fish during the first 3 months.\nOR\nFind the increase in the number of fish from the end of month 1 to the end of month 4.',
        answer: 'Increase $= 100\\left[\\log\\frac{t + 1}{t + 2}\\right]_{0}^{3} = 100\\left(\\log\\frac{4}{5} - \\log\\frac{1}{2}\\right) = 100\\log\\frac{8}{5} \\approx 47$ fish (1 mark for limits, 1 mark for value).\nOR: $100\\left[\\log\\frac{t + 1}{t + 2}\\right]_{1}^{4} = 100\\left(\\log\\frac{5}{6} - \\log\\frac{2}{3}\\right) = 100\\log\\frac{5}{4} \\approx 22$ fish.',
      },
    ],
    answer: '(i) $\\frac{1}{t + 1} - \\frac{1}{t + 2}$. (ii) $100\\log\\frac{t + 1}{t + 2} + C$. (iii) $100\\log\\frac{8}{5} \\approx 47$ fish; OR $100\\log\\frac{5}{4} \\approx 22$ fish.',
  },
  {
    id: 'c12-int-e03', chapter: C, topic: 'Integration by parts', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A robotic arm on a factory floor pushes a cart along a straight track. When the cart is $x$ metres from the start, the force applied is $F(x) = 10x\\,e^{-x}$ newtons. The work done (in joules) in moving the cart from $x = a$ to $x = b$ is $W = \\int_{a}^{b} F(x)\\,dx$. Answer the following.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $\\int x\\,e^{-x}\\,dx$.',
        answer: 'By parts with $u = x$, $dv = e^{-x}\\,dx$: $-x e^{-x} + \\int e^{-x}\\,dx = -x e^{-x} - e^{-x} + C = -(x + 1)e^{-x} + C$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the work done in moving the cart from $x = 0$ to $x = 1$.',
        answer: '$W = 10\\left[-(x + 1)e^{-x}\\right]_{0}^{1} = 10\\left(1 - \\frac{2}{e}\\right) \\approx 2.64$ J.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the work done in moving the cart from $x = 1$ to $x = 3$.\nOR\nFind $\\int x^{2}e^{-x}\\,dx$.',
        answer: '$W = 10\\left[-(x + 1)e^{-x}\\right]_{1}^{3} = 10\\left(\\frac{2}{e} - \\frac{4}{e^{3}}\\right) = \\frac{20}{e} - \\frac{40}{e^{3}} \\approx 5.37$ J (1 mark for substitution, 1 mark for value).\nOR: By parts with $u = x^{2}$: $\\int x^{2}e^{-x}\\,dx = -x^{2}e^{-x} + 2\\int x e^{-x}\\,dx = -x^{2}e^{-x} - 2(x + 1)e^{-x} + C = -(x^{2} + 2x + 2)e^{-x} + C$.',
      },
    ],
    answer: '(i) $-(x + 1)e^{-x} + C$. (ii) $10\\left(1 - \\frac{2}{e}\\right) \\approx 2.64$ J. (iii) $\\frac{20}{e} - \\frac{40}{e^{3}} \\approx 5.37$ J; OR $-(x^{2} + 2x + 2)e^{-x} + C$.',
  },
];
