import type { Class12Question } from './types.js';

const C = 'Differential Equations';

const AR_OPTIONS = [
  'Both A and R are true and R is the correct explanation of A.',
  'Both A and R are true but R is not the correct explanation of A.',
  'A is true but R is false.',
  'A is false but R is true.',
];

export const CH09_DE_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-de-r2-a01', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For the differential equation $\\left(\\frac{d^{3}y}{dx^{3}}\\right)^{2} + \\left(\\frac{dy}{dx}\\right)^{4} - y = 0$, the order minus the degree is',
    options: ['$1$', '$-1$', '$5$', '$-2$'],
    answer: 'Correct option: A) $1$. The highest derivative is $\\frac{d^{3}y}{dx^{3}}$, so the order is $3$; its highest power is $2$, so the degree is $2$. Order $-$ degree $= 3 - 2 = 1$. (The power $4$ belongs to a lower derivative and does not decide the degree.)',
  },
  {
    id: 'c12-de-r2-a02', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The order and degree of the differential equation $e^{dy/dx} + y = x$ are',
    options: ['order $1$, degree $1$', 'order $1$, degree not defined', 'order $0$, degree $1$', 'order not defined, degree $1$'],
    answer: 'Correct option: B) order $1$, degree not defined. The only derivative is $\\frac{dy}{dx}$, so the order is $1$. Because $\\frac{dy}{dx}$ sits in an exponent, the equation is not a polynomial in its derivatives, so the degree is not defined.',
  },
  {
    id: 'c12-de-r2-a03', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The product of the order and the degree of the differential equation $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2/3} = 1 + 3\\frac{dy}{dx}$ is',
    options: ['$6$', '$\\frac{4}{3}$', '$4$', '$3$'],
    answer: 'Correct option: C) $4$. Cubing both sides removes the fractional power: $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2} = \\left(1 + 3\\frac{dy}{dx}\\right)^{3}$. The order is $2$ and the highest power of $\\frac{d^{2}y}{dx^{2}}$ is $2$, so the degree is $2$. Product $= 2 \\times 2 = 4$.',
  },
  {
    id: 'c12-de-r2-a04', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The order and degree of the differential equation $\\frac{dy}{dx} - x = \\left(1 + \\frac{d^{2}y}{dx^{2}}\\right)^{1/3}$ are respectively',
    options: ['$2$ and $3$', '$1$ and $3$', '$2$ and $\\frac{1}{3}$', '$2$ and $1$'],
    answer: 'Correct option: D) $2$ and $1$. Cubing both sides gives $\\left(\\frac{dy}{dx} - x\\right)^{3} = 1 + \\frac{d^{2}y}{dx^{2}}$. The highest derivative $\\frac{d^{2}y}{dx^{2}}$ now appears to the first power, so the order is $2$ and the degree is $1$. The cube falls on $\\frac{dy}{dx}$, a lower derivative.',
  },
  {
    id: 'c12-de-r2-a05', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following differential equations has order $2$ and degree $3$?',
    options: [
      '$\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3} + \\left(\\frac{dy}{dx}\\right)^{4} = 0$',
      '$\\left(\\frac{dy}{dx}\\right)^{3} + \\frac{d^{3}y}{dx^{3}} = 0$',
      '$\\frac{d^{2}y}{dx^{2}} + \\left(\\frac{dy}{dx}\\right)^{3} = x$',
      '$\\left(\\frac{d^{3}y}{dx^{3}}\\right)^{2} + \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3} = 0$',
    ],
    answer: 'Correct option: A) the first equation. Its highest derivative is $\\frac{d^{2}y}{dx^{2}}$ (order $2$), raised to the power $3$ (degree $3$). B has order $3$, degree $1$; C has order $2$, degree $1$; D has order $3$, degree $2$.',
  },
  {
    id: 'c12-de-r2-a06', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dy}{dx} - 2xy = x$ is',
    options: ['$e^{x^{2}}$', '$e^{-x^{2}}$', '$e^{-2x}$', '$-x^{2}$'],
    answer: 'Correct option: B) $e^{-x^{2}}$. Here $P = -2x$, so the integrating factor is $e^{\\int -2x\\,dx} = e^{-x^{2}}$.',
  },
  {
    id: 'c12-de-r2-a07', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dy}{dx} + y\\cot x = \\cos x$, $0 < x < \\pi$, is',
    options: ['$\\cos x$', '$\\log(\\sin x)$', '$\\mathrm{cosec}\\, x$', '$\\sin x$'],
    answer: 'Correct option: D) $\\sin x$. Here $P = \\cot x$, and $\\int \\cot x\\,dx = \\log(\\sin x)$ on $0 < x < \\pi$, so the integrating factor is $e^{\\log \\sin x} = \\sin x$.',
  },
  {
    id: 'c12-de-r2-a08', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The integrating factor of the differential equation $(1 + x)\\frac{dy}{dx} - xy = 1 - x$, $x > -1$, is',
    options: ['$(1 + x)e^{-x}$', '$(1 + x)e^{x}$', '$\\frac{e^{x}}{1 + x}$', '$e^{-x}$'],
    answer: 'Correct option: A) $(1 + x)e^{-x}$. In standard form $P = -\\frac{x}{1 + x} = -1 + \\frac{1}{1 + x}$, so $\\int P\\,dx = -x + \\log(1 + x)$ and the integrating factor is $e^{-x + \\log(1 + x)} = (1 + x)e^{-x}$.',
  },
  {
    id: 'c12-de-r2-a09', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Each of the curves below passes through $(0, 1)$. Which one is the solution of $\\frac{dy}{dx} + y = 3$ with $y(0) = 1$?',
    options: ['$y = 3 - 2e^{x}$', '$y = e^{-x}$', '$y = 3 - 2e^{-x}$', '$y = 1 + 3x$'],
    answer: 'Correct option: C) $y = 3 - 2e^{-x}$. With integrating factor $e^{x}$, $ye^{x} = 3e^{x} + C$, so $y = 3 + Ce^{-x}$; $y(0) = 1$ gives $C = -2$. Check: $y\' + y = 2e^{-x} + 3 - 2e^{-x} = 3$. The others give $y\' + y = 3 - 4e^{x}$, $0$ and $3x + 4$.',
  },
  {
    id: 'c12-de-r2-a10', chapter: C, topic: 'Linear differential equations', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The differential equation $\\frac{dy}{dx} + xy^{2} = x$ is a linear differential equation.\nReason (R): A first-order differential equation is linear in $y$ if $y$ and $\\frac{dy}{dx}$ occur only in the first degree and are not multiplied together.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false but R is true. R correctly describes a linear equation. The given equation contains $y^{2}$, so it cannot be written as $\\frac{dy}{dx} + Py = Q$ and is not linear; A is false.',
  },
  {
    id: 'c12-de-r2-a11', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The general solution of the differential equation $\\frac{dy}{dx} = \\frac{x^{2}}{y}$ is',
    options: ['$y^{2} - x^{3} = C$', '$3y^{2} - 2x^{3} = C$', '$2y^{2} - 3x^{3} = C$', '$3y^{2} + 2x^{3} = C$'],
    answer: 'Correct option: B) $3y^{2} - 2x^{3} = C$. Separating, $y\\,dy = x^{2}\\,dx$, so $\\frac{y^{2}}{2} = \\frac{x^{3}}{3} + c$; multiplying by $6$ gives $3y^{2} - 2x^{3} = C$.',
  },
  {
    id: 'c12-de-r2-a12', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The general solution of the differential equation $\\frac{dy}{dx} = \\frac{1 + y}{1 + x}$, $x > -1$, is',
    options: ['$y = C(1 + x) + 1$', '$y = \\frac{C}{1 + x} - 1$', '$y = C(1 + x) - 1$', '$y = C\\log(1 + x)$'],
    answer: 'Correct option: C) $y = C(1 + x) - 1$. Separating, $\\frac{dy}{1 + y} = \\frac{dx}{1 + x}$, so $\\log|1 + y| = \\log(1 + x) + c$ and $1 + y = C(1 + x)$. Check: $y\' = C = \\frac{1 + y}{1 + x}$.',
  },
  {
    id: 'c12-de-r2-a13', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The general solution of the differential equation $\\frac{dy}{dx} = 3^{x - y}$ is',
    options: ['$3^{y} = 3^{x} + C$', '$3^{-y} = 3^{x} + C$', '$3^{x} + 3^{y} = C$', '$3^{x + y} = C$'],
    answer: 'Correct option: A) $3^{y} = 3^{x} + C$. Write $\\frac{dy}{dx} = \\frac{3^{x}}{3^{y}}$, so $3^{y}\\,dy = 3^{x}\\,dx$. Integrating, $\\frac{3^{y}}{\\log 3} = \\frac{3^{x}}{\\log 3} + c$, i.e. $3^{y} = 3^{x} + C$.',
  },
  {
    id: 'c12-de-r2-a14', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Each of the curves below passes through $(0, 2)$. Which one is the solution of $\\frac{dy}{dx} = y\\tan x$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, with $y(0) = 2$?',
    options: ['$y = 2\\cos x$', '$y = 2 + \\log(\\sec x)$', '$y = \\sec x + 1$', '$y = 2\\sec x$'],
    answer: 'Correct option: D) $y = 2\\sec x$. Separating, $\\frac{dy}{y} = \\tan x\\,dx$, so $\\log|y| = \\log(\\sec x) + c$ and $y = K\\sec x$; $y(0) = 2$ gives $K = 2$. The other curves pass through $(0, 2)$ but do not satisfy $y\' = y\\tan x$.',
  },
  {
    id: 'c12-de-r2-a15', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $F(x, y) = \\frac{x^{3} + y^{3}}{x + y}$ is a homogeneous function of degree',
    options: ['$3$', '$2$', '$1$', '$0$'],
    answer: 'Correct option: B) $2$. $F(\\lambda x, \\lambda y) = \\frac{\\lambda^{3}(x^{3} + y^{3})}{\\lambda(x + y)} = \\lambda^{2}F(x, y)$, so the degree is $2$.',
  },
  {
    id: 'c12-de-r2-a16', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'On substituting $y = vx$ in the differential equation $\\frac{dy}{dx} = \\frac{x + y}{x - y}$, the variables-separated form is',
    options: [
      '$\\frac{1 + v}{1 - v}\\,dv = \\frac{dx}{x}$',
      '$\\frac{1 - v}{1 + v^{2}}\\,dv = \\frac{dx}{x}$',
      '$\\frac{1 - v}{1 + v^{2}}\\,dv = dx$',
      '$\\frac{1 + v}{1 + v^{2}}\\,dv = \\frac{dx}{x}$',
    ],
    answer: 'Correct option: B) the second form. With $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$: $v + x\\frac{dv}{dx} = \\frac{1 + v}{1 - v}$, so $x\\frac{dv}{dx} = \\frac{1 + v - v + v^{2}}{1 - v} = \\frac{1 + v^{2}}{1 - v}$, giving $\\frac{1 - v}{1 + v^{2}}\\,dv = \\frac{dx}{x}$.',
  },
  {
    id: 'c12-de-r2-a17', chapter: C, topic: 'Homogeneous differential equations', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The differential equation $x\\frac{dy}{dx} = y + \\sqrt{x^{2} + y^{2}}$, $x > 0$, is homogeneous.\nReason (R): A homogeneous differential equation can always be solved by separating $x$ and $y$ directly, without any substitution.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true but R is false. $\\frac{dy}{dx} = \\frac{y + \\sqrt{x^{2} + y^{2}}}{x}$ and replacing $(x, y)$ by $(\\lambda x, \\lambda y)$, $\\lambda > 0$, leaves the right side unchanged, so A is true. A homogeneous equation generally needs the substitution $y = vx$ before the variables separate, so R is false.',
  },
  {
    id: 'c12-de-r2-a18', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following functions is a solution of the differential equation $\\frac{d^{2}y}{dx^{2}} = y$?',
    options: ['$y = \\sin x$', '$y = x^{2}$', '$y = e^{-x}$', '$y = \\cos x$'],
    answer: 'Correct option: C) $y = e^{-x}$. Its second derivative is $e^{-x} = y$. For $\\sin x$ and $\\cos x$ the second derivative is $-y$, and for $x^{2}$ it is $2$.',
  },
  {
    id: 'c12-de-r2-a19', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The particular solution of $\\frac{d^{2}y}{dx^{2}} = 6x$ satisfying $y(0) = 1$ and $y\'(0) = 2$ is',
    options: ['$y = 3x^{2} + 2x + 1$', '$y = x^{3} + x + 2$', '$y = x^{3} + 2x$', '$y = x^{3} + 2x + 1$'],
    answer: 'Correct option: D) $y = x^{3} + 2x + 1$. Integrating twice, $y\' = 3x^{2} + A$ and $y = x^{3} + Ax + B$. $y\'(0) = 2$ gives $A = 2$ and $y(0) = 1$ gives $B = 1$.',
  },
  {
    id: 'c12-de-r2-a20', chapter: C, topic: 'General and particular solutions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $y = Ce^{x^{2}}$, where $C$ is an arbitrary constant, is the general solution of $\\frac{dy}{dx} = 2xy$.\nReason (R): A particular solution of a differential equation contains no arbitrary constants.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both true, but R does not explain A. $\\frac{d}{dx}(Ce^{x^{2}}) = 2xCe^{x^{2}} = 2xy$, so the family satisfies the equation and, with one arbitrary constant for a first-order equation, is its general solution; A is true. R is a true fact about particular solutions, but it says nothing about why $Ce^{x^{2}}$ is the general solution here.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-de-r2-b01', chapter: C, topic: 'General and particular solutions', type: 'short', complexity: 'easy', marks: 2,
    text: 'Verify that $y = \\frac{C}{x} + x^{2}$, $x \\neq 0$, where $C$ is an arbitrary constant, is a solution of $x\\frac{dy}{dx} + y = 3x^{2}$. Hence find the particular solution whose graph passes through $(1, 3)$.',
    answer: '$\\frac{dy}{dx} = -\\frac{C}{x^{2}} + 2x$, so $x\\frac{dy}{dx} + y = -\\frac{C}{x} + 2x^{2} + \\frac{C}{x} + x^{2} = 3x^{2}$. Hence the function is a solution for every $C$. Through $(1, 3)$: $3 = C + 1$, so $C = 2$. The particular solution is $y = \\frac{2}{x} + x^{2}$.',
    steps: [
      { step: 'Differentiates and shows $x\\frac{dy}{dx} + y = 3x^{2}$', marks: 1 },
      { step: 'Uses $(1, 3)$ to find $C = 2$ and states $y = \\frac{2}{x} + x^{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-b02', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the particular solution of the differential equation $x\\frac{dy}{dx} = y\\log y$, $x > 0$, $y > 1$, given that $y = e^{2}$ when $x = 1$.',
    answer: 'Separating, $\\frac{dy}{y\\log y} = \\frac{dx}{x}$. With $t = \\log y$, $\\int \\frac{dy}{y\\log y} = \\int \\frac{dt}{t} = \\log(\\log y)$. So $\\log(\\log y) = \\log x + \\log K$, i.e. $\\log y = Kx$. At $x = 1$, $y = e^{2}$: $2 = K$. So $\\log y = 2x$, and the particular solution is $y = e^{2x}$.',
    steps: [
      { step: 'Separates and integrates to $\\log(\\log y) = \\log x + c$', marks: 1 },
      { step: 'Uses $y(1) = e^{2}$ to get $\\log y = 2x$, i.e. $y = e^{2x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-b03', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} + 2y = e^{-x}$.',
    answer: 'Linear with $P = 2$, $Q = e^{-x}$. Integrating factor $= e^{2x}$. Then $\\frac{d}{dx}(ye^{2x}) = e^{-x} \\cdot e^{2x} = e^{x}$, so $ye^{2x} = e^{x} + C$. The general solution is $y = e^{-x} + Ce^{-2x}$.',
    steps: [
      { step: 'Finds the integrating factor $e^{2x}$', marks: 1 },
      { step: 'Integrates to $y = e^{-x} + Ce^{-2x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-b04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} = \\frac{y}{x} + \\sec\\left(\\frac{y}{x}\\right)$, $x > 0$.',
    answer: 'The right side is a function of $\\frac{y}{x}$, so the equation is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v + \\sec v$, so $\\cos v\\,dv = \\frac{dx}{x}$. Integrating, $\\sin v = \\log x + C$. The general solution is $\\sin\\left(\\frac{y}{x}\\right) = \\log x + C$.',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $\\cos v\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates and back-substitutes to $\\sin\\left(\\frac{y}{x}\\right) = \\log x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-b05', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'hard', marks: 2,
    text: 'Find the general solution of the differential equation $(1 - xy)\\frac{dy}{dx} = y^{3}$, $y > 0$.',
    answer: 'Treat $x$ as the dependent variable: $\\frac{dx}{dy} = \\frac{1 - xy}{y^{3}}$, i.e. $\\frac{dx}{dy} + \\frac{1}{y^{2}}x = \\frac{1}{y^{3}}$, linear in $x$. Integrating factor $= e^{\\int y^{-2}\\,dy} = e^{-1/y}$. Then $\\frac{d}{dy}\\left(xe^{-1/y}\\right) = \\frac{e^{-1/y}}{y^{3}}$. Put $w = \\frac{1}{y}$, $dw = -\\frac{dy}{y^{2}}$: $\\int \\frac{e^{-1/y}}{y^{3}}\\,dy = -\\int we^{-w}\\,dw = (w + 1)e^{-w}$. So $xe^{-1/y} = \\left(\\frac{1}{y} + 1\\right)e^{-1/y} + C$, and the general solution is $x = 1 + \\frac{1}{y} + Ce^{1/y}$.',
    steps: [
      { step: 'Rewrites as $\\frac{dx}{dy} + \\frac{x}{y^{2}} = \\frac{1}{y^{3}}$ and finds the integrating factor $e^{-1/y}$', marks: 1 },
      { step: 'Integrates (substitution $w = \\frac{1}{y}$) to get $x = 1 + \\frac{1}{y} + Ce^{1/y}$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-de-r2-c01', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $x\\frac{dy}{dx} = y + 2\\sqrt{xy}$, $x > 0$, $y > 0$, given that $y = 1$ when $x = 1$.',
    answer: 'Dividing by $x$: $\\frac{dy}{dx} = \\frac{y}{x} + 2\\sqrt{\\frac{y}{x}}$, a function of $\\frac{y}{x}$, so the equation is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v + 2\\sqrt{v}$, so $\\frac{dv}{2\\sqrt{v}} = \\frac{dx}{x}$. Integrating, $\\sqrt{v} = \\log x + C$, i.e. $\\sqrt{\\frac{y}{x}} = \\log x + C$. At $x = 1$, $y = 1$: $1 = 0 + C$, so $C = 1$. The particular solution is $\\sqrt{\\frac{y}{x}} = 1 + \\log x$, i.e. $y = x(1 + \\log x)^{2}$ (for $1 + \\log x > 0$).',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $\\frac{dv}{2\\sqrt{v}} = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates to $\\sqrt{\\frac{y}{x}} = \\log x + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states $y = x(1 + \\log x)^{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c02', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the general solution of the differential equation $x(x + y)\\,dy = y(x - y)\\,dx$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y(x - y)}{x(x + y)}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v(1 - v)}{1 + v}$, so $x\\frac{dv}{dx} = \\frac{v - v^{2} - v - v^{2}}{1 + v} = -\\frac{2v^{2}}{1 + v}$. Separating, $\\frac{1 + v}{v^{2}}\\,dv = -\\frac{2\\,dx}{x}$, i.e. $\\left(\\frac{1}{v^{2}} + \\frac{1}{v}\\right)dv = -\\frac{2\\,dx}{x}$. Integrating, $-\\frac{1}{v} + \\log|v| = -2\\log|x| + C$, so $\\log|v| + 2\\log|x| = \\frac{1}{v} + C$, i.e. $\\log|vx^{2}| = \\frac{1}{v} + C$. With $v = \\frac{y}{x}$, $vx^{2} = xy$ and $\\frac{1}{v} = \\frac{x}{y}$. The general solution is $\\log|xy| = \\frac{x}{y} + C$.',
    steps: [
      { step: 'Substitutes $y = vx$ and simplifies to $x\\frac{dv}{dx} = -\\frac{2v^{2}}{1 + v}$', marks: 1 },
      { step: 'Separates and integrates to $-\\frac{1}{v} + \\log|v| = -2\\log|x| + C$', marks: 1 },
      { step: 'Back-substitutes to $\\log|xy| = \\frac{x}{y} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c03', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $x^{2}\\frac{dy}{dx} = x^{2} - xy + y^{2}$, $x > 0$, given that $y = 0$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = 1 - \\frac{y}{x} + \\frac{y^{2}}{x^{2}}$, which is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = 1 - v + v^{2}$, so $x\\frac{dv}{dx} = (v - 1)^{2}$. Separating, $\\frac{dv}{(v - 1)^{2}} = \\frac{dx}{x}$. Integrating, $-\\frac{1}{v - 1} = \\log x + C$, i.e. $\\frac{1}{1 - v} = \\frac{x}{x - y} = \\log x + C$. At $x = 1$, $y = 0$: $1 = 0 + C$, so $C = 1$. The particular solution is $\\frac{x}{x - y} = 1 + \\log x$, i.e. $y = x - \\frac{x}{1 + \\log x}$.',
    steps: [
      { step: 'Substitutes $y = vx$ to get $x\\frac{dv}{dx} = (v - 1)^{2}$', marks: 1 },
      { step: 'Integrates to $\\frac{x}{x - y} = \\log x + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states $\\frac{x}{x - y} = 1 + \\log x$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the general solution of the differential equation $(x^{3} + y^{3})\\,dy = x^{2}y\\,dx$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{x^{2}y}{x^{3} + y^{3}}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v}{1 + v^{3}}$, so $x\\frac{dv}{dx} = \\frac{v - v - v^{4}}{1 + v^{3}} = -\\frac{v^{4}}{1 + v^{3}}$. Separating, $\\frac{1 + v^{3}}{v^{4}}\\,dv = -\\frac{dx}{x}$, i.e. $\\left(v^{-4} + \\frac{1}{v}\\right)dv = -\\frac{dx}{x}$. Integrating, $-\\frac{1}{3v^{3}} + \\log|v| = -\\log|x| + C$, so $\\log|vx| = \\frac{1}{3v^{3}} + C$. With $vx = y$ and $\\frac{1}{v^{3}} = \\frac{x^{3}}{y^{3}}$, the general solution is $\\log|y| = \\frac{x^{3}}{3y^{3}} + C$.',
    steps: [
      { step: 'Substitutes $y = vx$ and simplifies to $x\\frac{dv}{dx} = -\\frac{v^{4}}{1 + v^{3}}$', marks: 1 },
      { step: 'Separates as $\\left(v^{-4} + \\frac{1}{v}\\right)dv = -\\frac{dx}{x}$ and integrates', marks: 1 },
      { step: 'Back-substitutes to $\\log|y| = \\frac{x^{3}}{3y^{3}} + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c05', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\sin x\\frac{dy}{dx} - y\\cos x = \\sin^{2} x$, $0 < x < \\pi$, given that $y = \\pi$ when $x = \\frac{\\pi}{2}$.',
    answer: 'Dividing by $\\sin x$: $\\frac{dy}{dx} - y\\cot x = \\sin x$, linear with $P = -\\cot x$. Integrating factor $= e^{-\\log \\sin x} = \\mathrm{cosec}\\, x$. Then $\\frac{d}{dx}(y\\,\\mathrm{cosec}\\, x) = \\sin x \\cdot \\mathrm{cosec}\\, x = 1$, so $y\\,\\mathrm{cosec}\\, x = x + C$, i.e. $y = (x + C)\\sin x$. At $x = \\frac{\\pi}{2}$, $y = \\pi$: $\\pi = \\frac{\\pi}{2} + C$, so $C = \\frac{\\pi}{2}$. The particular solution is $y = \\left(x + \\frac{\\pi}{2}\\right)\\sin x$.',
    steps: [
      { step: 'Writes the standard form and finds the integrating factor $\\mathrm{cosec}\\, x$', marks: 1 },
      { step: 'Integrates to $y = (x + C)\\sin x$', marks: 1 },
      { step: 'Finds $C = \\frac{\\pi}{2}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c06', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + y = \\cos x - \\sin x$, given that $y = 2$ when $x = 0$.',
    answer: 'Linear with $P = 1$, so the integrating factor is $e^{x}$. Then $\\frac{d}{dx}(ye^{x}) = e^{x}(\\cos x - \\sin x)$. Since $\\frac{d}{dx}(e^{x}\\cos x) = e^{x}\\cos x - e^{x}\\sin x$, we get $ye^{x} = e^{x}\\cos x + C$, so $y = \\cos x + Ce^{-x}$. At $x = 0$, $y = 2$: $2 = 1 + C$, so $C = 1$. The particular solution is $y = \\cos x + e^{-x}$.',
    steps: [
      { step: 'Finds the integrating factor $e^{x}$', marks: 1 },
      { step: 'Evaluates $\\int e^{x}(\\cos x - \\sin x)\\,dx = e^{x}\\cos x$ and gets $y = \\cos x + Ce^{-x}$', marks: 1 },
      { step: 'Finds $C = 1$ and states $y = \\cos x + e^{-x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c07', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the general solution of the differential equation $y\\,dx = (2x + y^{4}e^{y})\\,dy$, $y > 0$.',
    answer: 'Treat $x$ as the dependent variable: $\\frac{dx}{dy} = \\frac{2x}{y} + y^{3}e^{y}$, i.e. $\\frac{dx}{dy} - \\frac{2}{y}x = y^{3}e^{y}$, linear in $x$. Integrating factor $= e^{-2\\log y} = \\frac{1}{y^{2}}$. Then $\\frac{d}{dy}\\left(\\frac{x}{y^{2}}\\right) = ye^{y}$, and by parts $\\int ye^{y}\\,dy = ye^{y} - e^{y} + C$. So $\\frac{x}{y^{2}} = (y - 1)e^{y} + C$, and the general solution is $x = y^{2}(y - 1)e^{y} + Cy^{2}$.',
    steps: [
      { step: 'Rewrites as $\\frac{dx}{dy} - \\frac{2x}{y} = y^{3}e^{y}$ and finds the integrating factor $\\frac{1}{y^{2}}$', marks: 1 },
      { step: 'Integrates $\\int ye^{y}\\,dy = (y - 1)e^{y}$ by parts', marks: 1 },
      { step: 'States $x = y^{2}(y - 1)e^{y} + Cy^{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c08', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} + \\frac{y}{x} = x\\sin x$, $x > 0$.',
    answer: 'Linear with $P = \\frac{1}{x}$, so the integrating factor is $e^{\\log x} = x$. Then $\\frac{d}{dx}(xy) = x^{2}\\sin x$. By parts twice: $\\int x^{2}\\sin x\\,dx = -x^{2}\\cos x + \\int 2x\\cos x\\,dx = -x^{2}\\cos x + 2x\\sin x + 2\\cos x + C$. So $xy = -x^{2}\\cos x + 2x\\sin x + 2\\cos x + C$, and the general solution is $y = -x\\cos x + 2\\sin x + \\frac{2\\cos x + C}{x}$.',
    steps: [
      { step: 'Finds the integrating factor $x$ and writes $xy = \\int x^{2}\\sin x\\,dx$', marks: 1 },
      { step: 'Evaluates $\\int x^{2}\\sin x\\,dx = -x^{2}\\cos x + 2x\\sin x + 2\\cos x$ by parts', marks: 1 },
      { step: 'States the general solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c09', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'easy', marks: 3,
    text: 'Find the particular solution of the differential equation $y\\frac{dy}{dx} = xe^{x}$, given that $y = 2$ when $x = 0$.',
    answer: 'Separating, $y\\,dy = xe^{x}\\,dx$. By parts, $\\int xe^{x}\\,dx = xe^{x} - e^{x} = (x - 1)e^{x}$. So $\\frac{y^{2}}{2} = (x - 1)e^{x} + C$. At $x = 0$, $y = 2$: $2 = -1 + C$, so $C = 3$. The particular solution is $y^{2} = 2(x - 1)e^{x} + 6$.',
    steps: [
      { step: 'Separates the variables to $y\\,dy = xe^{x}\\,dx$', marks: 1 },
      { step: 'Integrates to $\\frac{y^{2}}{2} = (x - 1)e^{x} + C$', marks: 1 },
      { step: 'Finds $C = 3$ and states $y^{2} = 2(x - 1)e^{x} + 6$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c10', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $x\\frac{dy}{dx} = y^{2} - 1$, given that $y = 3$ when $x = 1$.',
    answer: 'Separating, $\\frac{dy}{y^{2} - 1} = \\frac{dx}{x}$. Integrating, $\\frac{1}{2}\\log\\left|\\frac{y - 1}{y + 1}\\right| = \\log|x| + c$, so $\\frac{y - 1}{y + 1} = Kx^{2}$. At $x = 1$, $y = 3$: $\\frac{2}{4} = K$, so $K = \\frac{1}{2}$. Then $2(y - 1) = x^{2}(y + 1)$, i.e. $y(2 - x^{2}) = 2 + x^{2}$. The particular solution is $y = \\frac{2 + x^{2}}{2 - x^{2}}$.',
    steps: [
      { step: 'Separates and integrates using $\\int \\frac{dy}{y^{2} - 1} = \\frac{1}{2}\\log\\left|\\frac{y - 1}{y + 1}\\right|$', marks: 1 },
      { step: 'Writes $\\frac{y - 1}{y + 1} = Kx^{2}$ and finds $K = \\frac{1}{2}$', marks: 1 },
      { step: 'States $y = \\frac{2 + x^{2}}{2 - x^{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-c11', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'The slope of the tangent at any point $(x, y)$ of a curve is $\\sin x\\cos^{2} y$. Find the equation of the curve if it passes through the point $\\left(0, \\frac{\\pi}{4}\\right)$.',
    answer: 'The curve satisfies $\\frac{dy}{dx} = \\sin x\\cos^{2} y$. Separating, $\\sec^{2} y\\,dy = \\sin x\\,dx$. Integrating, $\\tan y = -\\cos x + C$. At $(0, \\frac{\\pi}{4})$: $1 = -1 + C$, so $C = 2$. The curve is $\\tan y = 2 - \\cos x$.',
    steps: [
      { step: 'Writes $\\frac{dy}{dx} = \\sin x\\cos^{2} y$ and separates to $\\sec^{2} y\\,dy = \\sin x\\,dx$', marks: 1 },
      { step: 'Integrates to $\\tan y = -\\cos x + C$', marks: 1 },
      { step: 'Finds $C = 2$ and states $\\tan y = 2 - \\cos x$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-de-r2-d01', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the differential equation $x(x + 2y)\\frac{dy}{dx} = y(2x + y)$, and find the particular solution given that $y = 2$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y(2x + y)}{x(x + 2y)}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v(2 + v)}{1 + 2v}$, so $x\\frac{dv}{dx} = \\frac{2v + v^{2} - v - 2v^{2}}{1 + 2v} = \\frac{v(1 - v)}{1 + 2v}$. Separating, $\\frac{1 + 2v}{v(1 - v)}\\,dv = \\frac{dx}{x}$. Partial fractions: $\\frac{1 + 2v}{v(1 - v)} = \\frac{1}{v} + \\frac{3}{1 - v}$. Integrating, $\\log|v| - 3\\log|1 - v| = \\log|x| + c$, so $\\frac{v}{(1 - v)^{3}} = Kx$. With $v = \\frac{y}{x}$: $\\frac{y/x}{(x - y)^{3}/x^{3}} = Kx$, i.e. $\\frac{x^{2}y}{(x - y)^{3}} = Kx$. The general solution is $xy = K(x - y)^{3}$. At $x = 1$, $y = 2$: $2 = K(-1)^{3}$, so $K = -2$. The particular solution is $xy = -2(x - y)^{3}$, i.e. $xy = 2(y - x)^{3}$.',
    steps: [
      { step: 'Identifies the equation as homogeneous and substitutes $y = vx$', marks: 1 },
      { step: 'Simplifies to $x\\frac{dv}{dx} = \\frac{v(1 - v)}{1 + 2v}$ and separates', marks: 1 },
      { step: 'Resolves $\\frac{1 + 2v}{v(1 - v)} = \\frac{1}{v} + \\frac{3}{1 - v}$ and integrates', marks: 1 },
      { step: 'Back-substitutes to get the general solution $xy = K(x - y)^{3}$', marks: 1 },
      { step: 'Finds $K = -2$ and states $xy = 2(y - x)^{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d02', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the differential equation $x\\frac{dy}{dx} = y + \\sqrt{x^{2} - y^{2}}$, $x > 0$, $|y| < x$, is homogeneous. Solve it, and find the particular solution given that $y = \\frac{1}{2}$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = F(x, y) = \\frac{y + \\sqrt{x^{2} - y^{2}}}{x}$. For $\\lambda > 0$, $F(\\lambda x, \\lambda y) = \\frac{\\lambda y + \\lambda\\sqrt{x^{2} - y^{2}}}{\\lambda x} = F(x, y)$, so the equation is homogeneous. Put $y = vx$ (with $|v| < 1$): $v + x\\frac{dv}{dx} = v + \\sqrt{1 - v^{2}}$, so $\\frac{dv}{\\sqrt{1 - v^{2}}} = \\frac{dx}{x}$. Integrating, $\\sin^{-1} v = \\log x + C$. The general solution is $\\sin^{-1}\\left(\\frac{y}{x}\\right) = \\log x + C$. At $x = 1$, $y = \\frac{1}{2}$: $\\sin^{-1}\\frac{1}{2} = 0 + C$, so $C = \\frac{\\pi}{6}$. The particular solution is $\\sin^{-1}\\left(\\frac{y}{x}\\right) = \\log x + \\frac{\\pi}{6}$, i.e. $y = x\\sin\\left(\\log x + \\frac{\\pi}{6}\\right)$.',
    steps: [
      { step: 'Shows $F(\\lambda x, \\lambda y) = F(x, y)$', marks: 1 },
      { step: 'Substitutes $y = vx$ to get $x\\frac{dv}{dx} = \\sqrt{1 - v^{2}}$', marks: 1 },
      { step: 'Separates and integrates to $\\sin^{-1} v = \\log x + C$', marks: 1 },
      { step: 'Back-substitutes to $\\sin^{-1}\\left(\\frac{y}{x}\\right) = \\log x + C$', marks: 1 },
      { step: 'Finds $C = \\frac{\\pi}{6}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d03', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $(3xy + y^{2})\\,dx + (x^{2} + xy)\\,dy = 0$, given that $y = 1$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = -\\frac{3xy + y^{2}}{x^{2} + xy}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = -\\frac{3v + v^{2}}{1 + v}$, so $x\\frac{dv}{dx} = -\\frac{3v + v^{2} + v + v^{2}}{1 + v} = -\\frac{2v(v + 2)}{1 + v}$. Separating, $\\frac{1 + v}{v(v + 2)}\\,dv = -\\frac{2\\,dx}{x}$. Partial fractions: $\\frac{1 + v}{v(v + 2)} = \\frac{1}{2}\\left(\\frac{1}{v} + \\frac{1}{v + 2}\\right)$. Integrating, $\\frac{1}{2}\\log|v(v + 2)| = -2\\log|x| + c$, so $v(v + 2)x^{4} = K$. With $v = \\frac{y}{x}$: $\\frac{y(y + 2x)}{x^{2}} \\cdot x^{4} = K$, so the general solution is $x^{2}y(y + 2x) = K$. At $(1, 1)$: $1 \\cdot 1 \\cdot 3 = K$, so $K = 3$. The particular solution is $x^{2}y(y + 2x) = 3$, i.e. $x^{2}y^{2} + 2x^{3}y = 3$.',
    steps: [
      { step: 'Writes $\\frac{dy}{dx}$ as a homogeneous function and substitutes $y = vx$', marks: 1 },
      { step: 'Simplifies to $x\\frac{dv}{dx} = -\\frac{2v(v + 2)}{1 + v}$ and separates', marks: 1 },
      { step: 'Resolves into partial fractions and integrates', marks: 1 },
      { step: 'Back-substitutes to $x^{2}y(y + 2x) = K$', marks: 1 },
      { step: 'Finds $K = 3$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d04', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $x\\frac{dy}{dx} + (x + 1)y = xe^{-x}$, $x > 0$, given that $y = \\frac{1}{e}$ when $x = 1$.',
    answer: 'Dividing by $x$: $\\frac{dy}{dx} + \\left(1 + \\frac{1}{x}\\right)y = e^{-x}$, linear with $P = 1 + \\frac{1}{x}$, $Q = e^{-x}$. $\\int P\\,dx = x + \\log x$, so the integrating factor is $e^{x + \\log x} = xe^{x}$. Then $\\frac{d}{dx}(xe^{x}y) = e^{-x} \\cdot xe^{x} = x$. Integrating, $xe^{x}y = \\frac{x^{2}}{2} + C$, so the general solution is $y = \\frac{xe^{-x}}{2} + \\frac{Ce^{-x}}{x}$. At $x = 1$, $y = \\frac{1}{e}$: $1 \\cdot e \\cdot \\frac{1}{e} = \\frac{1}{2} + C$, so $C = \\frac{1}{2}$. The particular solution is $xe^{x}y = \\frac{x^{2} + 1}{2}$, i.e. $y = \\frac{(x^{2} + 1)e^{-x}}{2x}$.',
    steps: [
      { step: 'Writes the standard form with $P = 1 + \\frac{1}{x}$, $Q = e^{-x}$', marks: 1 },
      { step: 'Finds the integrating factor $xe^{x}$', marks: 1 },
      { step: 'Integrates to $xe^{x}y = \\frac{x^{2}}{2} + C$', marks: 1 },
      { step: 'States the general solution $y = \\frac{xe^{-x}}{2} + \\frac{Ce^{-x}}{x}$', marks: 1 },
      { step: 'Finds $C = \\frac{1}{2}$ and states $y = \\frac{(x^{2} + 1)e^{-x}}{2x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d05', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $(y\\sin y - x)\\frac{dy}{dx} = y$, $y > 0$, given that $x = 0$ when $y = \\pi$.',
    answer: 'Treat $x$ as the dependent variable: $\\frac{dx}{dy} = \\frac{y\\sin y - x}{y}$, i.e. $\\frac{dx}{dy} + \\frac{1}{y}x = \\sin y$, linear in $x$ with $P_{1} = \\frac{1}{y}$, $Q_{1} = \\sin y$. Integrating factor $= e^{\\log y} = y$. Then $\\frac{d}{dy}(xy) = y\\sin y$. By parts, $\\int y\\sin y\\,dy = -y\\cos y + \\int \\cos y\\,dy = -y\\cos y + \\sin y + C$. So the general solution is $xy = \\sin y - y\\cos y + C$. At $y = \\pi$, $x = 0$: $0 = 0 - \\pi(-1) + C$, so $C = -\\pi$. The particular solution is $xy = \\sin y - y\\cos y - \\pi$.',
    steps: [
      { step: 'Rewrites as $\\frac{dx}{dy} + \\frac{x}{y} = \\sin y$, linear in $x$', marks: 1 },
      { step: 'Finds the integrating factor $y$', marks: 1 },
      { step: 'Evaluates $\\int y\\sin y\\,dy = \\sin y - y\\cos y$ by parts', marks: 1 },
      { step: 'States the general solution $xy = \\sin y - y\\cos y + C$', marks: 1 },
      { step: 'Finds $C = -\\pi$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d06', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} + \\frac{y}{x} = \\tan^{-1} x$, $x > 0$. Hence find the particular solution for which $y = \\frac{\\pi}{4}$ when $x = 1$.',
    answer: 'Linear with $P = \\frac{1}{x}$, $Q = \\tan^{-1} x$. Integrating factor $= e^{\\log x} = x$. Then $\\frac{d}{dx}(xy) = x\\tan^{-1} x$. By parts, $\\int x\\tan^{-1} x\\,dx = \\frac{x^{2}}{2}\\tan^{-1} x - \\frac{1}{2}\\int \\frac{x^{2}}{1 + x^{2}}\\,dx = \\frac{x^{2}}{2}\\tan^{-1} x - \\frac{1}{2}\\left(x - \\tan^{-1} x\\right) + C = \\frac{(x^{2} + 1)\\tan^{-1} x - x}{2} + C$. So the general solution is $xy = \\frac{(x^{2} + 1)\\tan^{-1} x - x}{2} + C$. At $x = 1$, $y = \\frac{\\pi}{4}$: $\\frac{\\pi}{4} = \\frac{2 \\cdot \\frac{\\pi}{4} - 1}{2} + C = \\frac{\\pi}{4} - \\frac{1}{2} + C$, so $C = \\frac{1}{2}$. The particular solution is $2xy = (x^{2} + 1)\\tan^{-1} x - x + 1$.',
    steps: [
      { step: 'Finds the integrating factor $x$', marks: 1 },
      { step: 'Applies integration by parts to $\\int x\\tan^{-1} x\\,dx$', marks: 1 },
      { step: 'Gets $\\int x\\tan^{-1} x\\,dx = \\frac{(x^{2} + 1)\\tan^{-1} x - x}{2}$', marks: 1 },
      { step: 'States the general solution', marks: 1 },
      { step: 'Finds $C = \\frac{1}{2}$ and states $2xy = (x^{2} + 1)\\tan^{-1} x - x + 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d07', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'A tank holds $200$ litres of pure water. Starting at time $t = 0$, brine containing $0.5$ kg of salt per litre flows in at $4$ litres per minute, and the well-stirred mixture flows out at the same rate, so the volume stays $200$ litres. If $S$ kg is the amount of salt in the tank after $t$ minutes, then $\\frac{dS}{dt} = 2 - \\frac{S}{50}$. Solve this differential equation to find $S$ in terms of $t$, and find the time after which the tank contains $50$ kg of salt.',
    answer: 'Write $\\frac{dS}{dt} + \\frac{1}{50}S = 2$, linear in $S$ with integrating factor $e^{t/50}$. Then $\\frac{d}{dt}\\left(Se^{t/50}\\right) = 2e^{t/50}$, so $Se^{t/50} = 100e^{t/50} + C$, i.e. $S = 100 + Ce^{-t/50}$. At $t = 0$ the water is pure, so $S = 0$: $0 = 100 + C$, giving $C = -100$. Hence $S = 100\\left(1 - e^{-t/50}\\right)$. For $S = 50$: $1 - e^{-t/50} = \\frac{1}{2}$, so $e^{-t/50} = \\frac{1}{2}$ and $t = 50\\log 2$ minutes (about $34.7$ minutes).',
    steps: [
      { step: 'Writes the equation in linear form and finds the integrating factor $e^{t/50}$', marks: 1 },
      { step: 'Integrates to $Se^{t/50} = 100e^{t/50} + C$', marks: 1 },
      { step: 'Uses $S(0) = 0$ to find $C = -100$', marks: 1 },
      { step: 'States $S = 100(1 - e^{-t/50})$', marks: 1 },
      { step: 'Solves $S = 50$ to get $t = 50\\log 2$ minutes', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r2-d08', chapter: C, topic: 'Variable separable equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $(x^{2} + 3x + 2)\\frac{dy}{dx} = y^{2} + y$, $x > -1$, given that $y = 2$ when $x = 0$. Express $y$ explicitly in terms of $x$.',
    answer: 'Separating, $\\frac{dy}{y(y + 1)} = \\frac{dx}{(x + 1)(x + 2)}$. Partial fractions: $\\frac{1}{y(y + 1)} = \\frac{1}{y} - \\frac{1}{y + 1}$ and $\\frac{1}{(x + 1)(x + 2)} = \\frac{1}{x + 1} - \\frac{1}{x + 2}$. Integrating, $\\log\\left|\\frac{y}{y + 1}\\right| = \\log\\left|\\frac{x + 1}{x + 2}\\right| + c$, so $\\frac{y}{y + 1} = K\\frac{x + 1}{x + 2}$. At $x = 0$, $y = 2$: $\\frac{2}{3} = \\frac{K}{2}$, so $K = \\frac{4}{3}$. Then $3y(x + 2) = 4(x + 1)(y + 1)$, i.e. $3xy + 6y = 4xy + 4y + 4x + 4$, so $y(2 - x) = 4(x + 1)$. The particular solution is $y = \\frac{4(x + 1)}{2 - x}$ (for $-1 < x < 2$).',
    steps: [
      { step: 'Separates the variables correctly', marks: 1 },
      { step: 'Resolves both sides into partial fractions', marks: 1 },
      { step: 'Integrates to $\\frac{y}{y + 1} = K\\frac{x + 1}{x + 2}$', marks: 1 },
      { step: 'Uses $y(0) = 2$ to find $K = \\frac{4}{3}$', marks: 1 },
      { step: 'Solves for $y$ to get $y = \\frac{4(x + 1)}{2 - x}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-de-r2-e01', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An oil leak at sea forms a circular slick. Observers find that the radius $r$ (in metres) of the slick, $t$ hours after the leak began, grows so that $\\frac{dr}{dt} = \\frac{k}{r}$, where $k$ is a positive constant. At $t = 0$ the radius was $10$ m, and after $1$ hour it was $20$ m.',
    answer: '(i) $r^{2} = 2kt + C$. (ii) $r^{2} = 100 + 300t$, $k = 150$. (iii) $40$ m after $5$ hours. OR: $16$ hours.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'By separating the variables, find the general solution of the differential equation.',
        answer: '$r\\,dr = k\\,dt$. Integrating, $\\frac{r^{2}}{2} = kt + c$, i.e. $r^{2} = 2kt + C$, where $C$ is a constant.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Use the two observations to find $C$ and $k$, and write $r^{2}$ in terms of $t$.',
        answer: 'At $t = 0$, $r = 10$: $C = 100$. At $t = 1$, $r = 20$: $400 = 2k + 100$, so $k = 150$. Hence $r^{2} = 100 + 300t$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the radius of the slick $5$ hours after the leak began.\nOR\nFind how long after the leak began the radius reaches $70$ m.',
        answer: 'Using $r^{2} = 100 + 300t$ (1 mark): at $t = 5$, $r^{2} = 100 + 1500 = 1600$, so $r = 40$ m (1 mark).\nOR: Using $r^{2} = 100 + 300t$ (1 mark): for $r = 70$, $4900 = 100 + 300t$, so $t = 16$ hours (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-r2-e02', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cylindrical water tank drains through a small hole in its base. By Torricelli\'s law, the depth $h$ (in metres) of water in the tank $t$ minutes after the hole is opened satisfies $\\frac{dh}{dt} = -k\\sqrt{h}$, where $k$ is a positive constant. The depth is $25$ m at $t = 0$ and $16$ m after $2$ minutes.',
    answer: '(i) $2\\sqrt{h} = -kt + C$. (ii) $C = 10$, so $\\sqrt{h} = 5 - \\frac{kt}{2}$. (iii) $k = 1$; empty after $10$ minutes. OR: $k = 1$; depth $4$ m after $6$ minutes.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'By separating the variables, find the general solution of the differential equation.',
        answer: '$\\frac{dh}{\\sqrt{h}} = -k\\,dt$. Integrating, $2\\sqrt{h} = -kt + C$, where $C$ is a constant.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Use the initial depth to find the constant in your solution.',
        answer: 'At $t = 0$, $h = 25$: $2 \\times 5 = C$, so $C = 10$ and $\\sqrt{h} = 5 - \\frac{kt}{2}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $k$, and the time it takes for the tank to empty completely.\nOR\nFind $k$, and the depth of water $6$ minutes after the hole is opened.',
        answer: 'At $t = 2$, $h = 16$: $4 = 5 - k$, so $k = 1$ and $\\sqrt{h} = 5 - \\frac{t}{2}$ (1 mark). The tank is empty when $h = 0$: $5 - \\frac{t}{2} = 0$, so $t = 10$ minutes (1 mark).\nOR: $k = 1$ as above (1 mark). At $t = 6$: $\\sqrt{h} = 5 - 3 = 2$, so $h = 4$ m (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-r2-e03', chapter: C, topic: 'Homogeneous differential equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An engineer is laying out the curved edge of a garden path on a site plan (with $x > 0$). The edge must be a curve whose slope at every point $(x, y)$ equals $\\frac{x^{2} + y^{2}}{2x^{2}}$, so it satisfies $\\frac{dy}{dx} = \\frac{x^{2} + y^{2}}{2x^{2}}$.',
    answer: '(i) $F(\\lambda x, \\lambda y) = F(x, y)$, so it is homogeneous. (ii) $\\frac{2\\,dv}{(1 - v)^{2}} = \\frac{dx}{x}$. (iii) $\\frac{2x}{x - y} = \\log x + 2$. OR: $\\frac{2x}{x - y} = \\log x + 1$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that this differential equation is homogeneous.',
        answer: 'Let $F(x, y) = \\frac{x^{2} + y^{2}}{2x^{2}}$. Then $F(\\lambda x, \\lambda y) = \\frac{\\lambda^{2}(x^{2} + y^{2})}{2\\lambda^{2}x^{2}} = F(x, y)$, so $F$ is homogeneous of degree zero and the equation is homogeneous.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Using the substitution $y = vx$, write the equation in variables-separated form.',
        answer: '$v + x\\frac{dv}{dx} = \\frac{1 + v^{2}}{2}$, so $x\\frac{dv}{dx} = \\frac{1 - 2v + v^{2}}{2} = \\frac{(1 - v)^{2}}{2}$, i.e. $\\frac{2\\,dv}{(1 - v)^{2}} = \\frac{dx}{x}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the equation of the edge if it passes through the point $(1, 0)$.\nOR\nFind the equation of the edge if it passes through the point $(e, 0)$.',
        answer: 'Integrating, $\\frac{2}{1 - v} = \\log x + C$, i.e. $\\frac{2x}{x - y} = \\log x + C$ (1 mark). Through $(1, 0)$: $2 = 0 + C$, so the edge is $\\frac{2x}{x - y} = \\log x + 2$ (1 mark).\nOR: General solution $\\frac{2x}{x - y} = \\log x + C$ as above (1 mark). Through $(e, 0)$: $2 = 1 + C$, so $C = 1$ and the edge is $\\frac{2x}{x - y} = \\log x + 1$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-r2-e04', chapter: C, topic: 'Linear differential equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a simple electric circuit, a battery of $20$ volts is connected at time $t = 0$ to a coil of inductance $2$ henry and a resistor of $10$ ohm. The current $i$ (in amperes) at time $t$ seconds satisfies $2\\frac{di}{dt} + 10i = 20$, and $i = 0$ at $t = 0$.',
    answer: '(i) Order $1$, degree $1$. (ii) $e^{5t}$. (iii) $i = 2(1 - e^{-5t})$; $1$ A at $t = \\frac{\\log 2}{5}$ s. OR: $t = \\frac{2}{5}\\log 2$ s.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order and the degree of this differential equation.',
        answer: 'The only derivative is $\\frac{di}{dt}$, to the first power, so the order is $1$ and the degree is $1$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the equation in the form $\\frac{di}{dt} + Pi = Q$ and find its integrating factor.',
        answer: 'Dividing by $2$: $\\frac{di}{dt} + 5i = 10$, so $P = 5$ and the integrating factor is $e^{\\int 5\\,dt} = e^{5t}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $i$ in terms of $t$, and the current at $t = \\frac{\\log 2}{5}$ seconds.\nOR\nFind $i$ in terms of $t$, and the time at which the current reaches $1.5$ A.',
        answer: '$\\frac{d}{dt}(ie^{5t}) = 10e^{5t}$, so $ie^{5t} = 2e^{5t} + C$; $i(0) = 0$ gives $C = -2$, so $i = 2(1 - e^{-5t})$ (1 mark). At $t = \\frac{\\log 2}{5}$, $e^{-5t} = \\frac{1}{2}$, so $i = 1$ A (1 mark).\nOR: $i = 2(1 - e^{-5t})$ as above (1 mark). For $i = 1.5$: $e^{-5t} = \\frac{1}{4}$, so $t = \\frac{\\log 4}{5} = \\frac{2}{5}\\log 2$ seconds (1 mark).',
      },
    ],
  },
];
