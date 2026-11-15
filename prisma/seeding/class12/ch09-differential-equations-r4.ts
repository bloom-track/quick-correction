import type { Class12Question } from './types.js';

const C = 'Differential Equations';

const AR_OPTIONS = [
  'Both A and R are true and R is the correct explanation of A.',
  'Both A and R are true but R is not the correct explanation of A.',
  'A is true but R is false.',
  'A is false but R is true.',
];

export const CH09_DE_R4: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-de-r4-a01', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following differential equations has order $3$ and degree $2$?',
    options: ['$\\frac{d^{3}y}{dx^{3}} + \\left(\\frac{dy}{dx}\\right)^{2} = 0$', '$\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3} + \\frac{dy}{dx} = x$', '$\\left(\\frac{d^{3}y}{dx^{3}}\\right)^{2} + \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3} = y$', '$\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2} + \\left(\\frac{dy}{dx}\\right)^{3} = 0$'],
    answer: 'Correct option: C) $\\left(\\frac{d^{3}y}{dx^{3}}\\right)^{2} + \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3} = y$. The highest-order derivative is $\\frac{d^{3}y}{dx^{3}}$ (order $3$) and it is squared (degree $2$); the cube belongs to a lower-order derivative. The other three have orders and degrees $(3,1)$, $(2,3)$ and $(2,2)$.',
  },
  {
    id: 'c12-de-r4-a02', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The product of the order and the degree of the differential equation $\\frac{d^{3}y}{dx^{3}} = \\dfrac{1 + \\left(\\frac{dy}{dx}\\right)^{2}}{\\frac{d^{2}y}{dx^{2}}}$ is',
    options: ['$3$', '$6$', '$2$', '$4$'],
    answer: 'Correct option: A) $3$. Clearing the denominator gives $\\frac{d^{2}y}{dx^{2}}\\cdot\\frac{d^{3}y}{dx^{3}} = 1 + \\left(\\frac{dy}{dx}\\right)^{2}$, a polynomial in the derivatives. The highest-order derivative $\\frac{d^{3}y}{dx^{3}}$ occurs to the first power, so the order is $3$ and the degree is $1$. The product is $3$.',
  },
  {
    id: 'c12-de-r4-a03', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The degree of the differential equation $\\left[1 + \\left(\\frac{dy}{dx}\\right)^{3}\\right]^{2/3} = x\\,\\frac{d^{2}y}{dx^{2}}$ is',
    options: ['$2$', '$6$', '$1$', '$3$'],
    answer: 'Correct option: D) $3$. Cubing both sides removes the fractional power: $\\left[1 + \\left(\\frac{dy}{dx}\\right)^{3}\\right]^{2} = x^{3}\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3}$. The highest-order derivative $\\frac{d^{2}y}{dx^{2}}$ now has power $3$, so the degree is $3$ (the order is $2$).',
  },
  {
    id: 'c12-de-r4-a04', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of arbitrary constants in a particular solution of a differential equation of order $4$ is',
    options: ['$4$', '$0$', '$3$', '$1$'],
    answer: 'Correct option: B) $0$. A particular solution is obtained from the general solution by giving definite values to all the arbitrary constants, so it contains none.',
  },
  {
    id: 'c12-de-r4-a05', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following functions is a solution of the differential equation $x\\frac{dy}{dx} - y = x^{2}$, $x \\neq 0$?',
    options: ['$y = x^{2} + 5$', '$y = 2x^{2}$', '$y = x^{3} + x$', '$y = x^{2} + 2x$'],
    answer: 'Correct option: D) $y = x^{2} + 2x$. For $y = x^{2} + 2x$: $x(2x + 2) - (x^{2} + 2x) = x^{2}$. For the others the left side is $x^{2} - 5$, $2x^{2}$ and $2x^{3}$ respectively, none equal to $x^{2}$.',
  },
  {
    id: 'c12-de-r4-a06', chapter: C, topic: 'General and particular solutions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $y = (c_{1} + c_{2})e^{x}$, where $c_{1}$ and $c_{2}$ are arbitrary constants, is the general solution of the differential equation $\\frac{d^{2}y}{dx^{2}} - y = 0$.\nReason (R): The general solution of an $n$th order differential equation contains $n$ independent arbitrary constants.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false but R is true. R is a true statement. But $c_{1} + c_{2}$ is just one constant, so the family $y = Ke^{x}$ has only one independent constant, and it misses the solution $y = e^{-x}$ of the equation. Hence A is false.',
  },
  {
    id: 'c12-de-r4-a07', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $y = e^{mx}$ is a solution of $\\frac{d^{2}y}{dx^{2}} - 5\\frac{dy}{dx} + 6y = 0$, the possible values of $m$ are',
    options: ['$2$ and $3$', '$-2$ and $-3$', '$1$ and $6$', '$-1$ and $6$'],
    answer: 'Correct option: A) $2$ and $3$. Substituting $y = e^{mx}$ gives $(m^{2} - 5m + 6)e^{mx} = 0$, so $m^{2} - 5m + 6 = (m-2)(m-3) = 0$ and $m = 2$ or $3$.',
  },
  {
    id: 'c12-de-r4-a08', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The general solution of the differential equation $(1 + x^{2})\\frac{dy}{dx} = xy$, with $y > 0$, is',
    options: ['$y = C(1 + x^{2})$', '$y = \\sqrt{1 + x^{2}} + C$', '$y = C\\sqrt{1 + x^{2}}$', '$y = \\dfrac{C}{\\sqrt{1 + x^{2}}}$'],
    answer: 'Correct option: C) $y = C\\sqrt{1 + x^{2}}$. Separating, $\\frac{dy}{y} = \\frac{x\\,dx}{1 + x^{2}}$, so $\\log y = \\frac{1}{2}\\log(1 + x^{2}) + c$, which gives $y = C\\sqrt{1 + x^{2}}$.',
  },
  {
    id: 'c12-de-r4-a09', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The solution of $\\frac{dy}{dx} = \\dfrac{1}{\\sqrt{4 - x^{2}}}$, $-2 < x < 2$, with $y = \\pi$ when $x = 0$ is',
    options: ['$y = \\sin^{-1}x + \\pi$', '$y = \\sin^{-1}\\dfrac{x}{2} + \\pi$', '$y = \\dfrac{1}{2}\\sin^{-1}\\dfrac{x}{2} + \\pi$', '$y = \\cos^{-1}\\dfrac{x}{2} + \\dfrac{\\pi}{2}$'],
    answer: 'Correct option: B) $y = \\sin^{-1}\\dfrac{x}{2} + \\pi$. Integrating, $y = \\sin^{-1}\\frac{x}{2} + c$; $y(0) = \\pi$ gives $c = \\pi$. The option with $\\cos^{-1}$ also passes through $(0, \\pi)$ but its slope is $-\\frac{1}{\\sqrt{4 - x^{2}}}$.',
  },
  {
    id: 'c12-de-r4-a10', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The curve $y = f(x)$, $x > 0$, has slope $\\dfrac{y}{\\sqrt{x}}$ at every point $(x, y)$ and passes through $(1, e^{2})$. Its equation is',
    options: ['$y = e^{\\sqrt{x} + 1}$', '$y = e^{x + 1}$', '$y = e^{2\\sqrt{x}}$', '$y = e^{4\\sqrt{x} - 2}$'],
    answer: 'Correct option: C) $y = e^{2\\sqrt{x}}$. Separating, $\\frac{dy}{y} = \\frac{dx}{\\sqrt{x}}$, so $\\log y = 2\\sqrt{x} + c$. At $(1, e^{2})$: $2 = 2 + c$, so $c = 0$ and $y = e^{2\\sqrt{x}}$. All four options pass through $(1, e^{2})$; only this one has slope $\\frac{y}{\\sqrt{x}}$.',
  },
  {
    id: 'c12-de-r4-a11', chapter: C, topic: 'Variable separable equations', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The solution of $\\frac{dy}{dx} = y^{2}$ with $y = 1$ when $x = 0$ is $y = \\dfrac{1}{1 - x}$, and it is valid only for $x < 1$.\nReason (R): The function $\\dfrac{1}{1 - x}$ is not defined at $x = 1$, and the solution curve through $(0, 1)$ lies on the side $x < 1$ of that point.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both A and R are true and R is the correct explanation of A. Separating, $\\frac{dy}{y^{2}} = dx$ gives $-\\frac{1}{y} = x + c$; $y(0) = 1$ gives $c = -1$, so $y = \\frac{1}{1 - x}$, valid on the interval $x < 1$ containing $0$. R states exactly why the interval stops at $1$.',
  },
  {
    id: 'c12-de-r4-a12', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $x > 0$, $y > 0$, the function $F(x, y) = x^{2}\\log\\dfrac{y}{x} + xy$ is a homogeneous function of degree',
    options: ['$0$', '$2$', '$1$', '$3$'],
    answer: 'Correct option: B) $2$. $F(\\lambda x, \\lambda y) = \\lambda^{2}x^{2}\\log\\frac{y}{x} + \\lambda^{2}xy = \\lambda^{2}F(x, y)$, because $\\frac{\\lambda y}{\\lambda x} = \\frac{y}{x}$ and the logarithm does not change the power of $\\lambda$. The degree is $2$.',
  },
  {
    id: 'c12-de-r4-a13', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'On substituting $y = vx$, the differential equation $\\frac{dy}{dx} = \\dfrac{2xy}{x^{2} + y^{2}}$ reduces to',
    options: ['$\\dfrac{1 + v^{2}}{v + v^{3}}\\,dv = \\dfrac{dx}{x}$', '$\\dfrac{1 + v^{2}}{2v}\\,dv = \\dfrac{dx}{x}$', '$\\dfrac{1 + v^{2}}{v^{3} - v}\\,dv = \\dfrac{dx}{x}$', '$\\dfrac{1 + v^{2}}{v - v^{3}}\\,dv = \\dfrac{dx}{x}$'],
    answer: 'Correct option: D) $\\dfrac{1 + v^{2}}{v - v^{3}}\\,dv = \\dfrac{dx}{x}$. $v + x\\frac{dv}{dx} = \\frac{2v}{1 + v^{2}}$, so $x\\frac{dv}{dx} = \\frac{2v - v - v^{3}}{1 + v^{2}} = \\frac{v - v^{3}}{1 + v^{2}}$, which separates to $\\frac{1 + v^{2}}{v - v^{3}}\\,dv = \\frac{dx}{x}$.',
  },
  {
    id: 'c12-de-r4-a14', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The curve through $(1, 2)$ satisfying $\\frac{dy}{dx} = \\dfrac{y}{x} + \\dfrac{x}{y}$, $x > 0$, $y > 0$, is',
    options: ['$y^{2} = x^{2}\\log x + 4x^{2}$', '$y^{2} = 2x^{2}\\log x + 4$', '$y^{2} = 2x^{2}\\log x + 4x^{2}$', '$y^{2} = 2x^{2}(\\log x + 1) + 2$'],
    answer: 'Correct option: C) $y^{2} = 2x^{2}\\log x + 4x^{2}$. Put $y = vx$: $x\\frac{dv}{dx} = \\frac{1}{v}$, so $v\\,dv = \\frac{dx}{x}$ and $\\frac{v^{2}}{2} = \\log x + c$, i.e. $y^{2} = 2x^{2}(\\log x + c)$. At $(1, 2)$: $4 = 2c$, so $c = 2$. Every option passes through $(1, 2)$, but only this one satisfies the equation.',
  },
  {
    id: 'c12-de-r4-a15', chapter: C, topic: 'Homogeneous differential equations', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The solution of $\\frac{dy}{dx} = \\dfrac{y}{x}$, $x > 0$, passing through $(1, 2)$ is $y = 2x$.\nReason (R): On putting $y = vx$, the equation becomes $x\\frac{dv}{dx} = 0$, so $v = \\frac{y}{x}$ is constant.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both A and R are true and R is the correct explanation of A. The equation is homogeneous and $y = vx$ gives $v + x\\frac{dv}{dx} = v$, so $v$ is constant. Through $(1, 2)$, $v = 2$, hence $y = 2x$. R is exactly the step that proves A.',
  },
  {
    id: 'c12-de-r4-a16', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dy}{dx} + (\\sec x\\tan x)\\,y = x$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, is',
    options: ['$\\sec x$', '$e^{\\sec x}$', '$e^{\\tan x}$', '$e^{\\sec x\\tan x}$'],
    answer: 'Correct option: B) $e^{\\sec x}$. Here $P = \\sec x\\tan x$ and $\\int \\sec x\\tan x\\,dx = \\sec x$, so the integrating factor is $e^{\\sec x}$.',
  },
  {
    id: 'c12-de-r4-a17', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $\\sqrt{1 - x^{2}}\\,\\frac{dy}{dx} + y = \\sin^{-1}x$, $-1 < x < 1$, is',
    options: ['$e^{\\sin^{-1}x}$', '$e^{\\cos^{-1}x}$', '$\\sin^{-1}x$', '$e^{x}$'],
    answer: 'Correct option: A) $e^{\\sin^{-1}x}$. First divide by $\\sqrt{1 - x^{2}}$ to reach the standard form $\\frac{dy}{dx} + \\frac{1}{\\sqrt{1 - x^{2}}}y = \\dots$. Then $P = \\frac{1}{\\sqrt{1 - x^{2}}}$ and the integrating factor is $e^{\\sin^{-1}x}$.',
  },
  {
    id: 'c12-de-r4-a18', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dx}{dy} + x\\sec y = \\tan y$, $0 < y < \\frac{\\pi}{2}$, is',
    options: ['$\\sec y$', '$\\log(\\sec y + \\tan y)$', '$\\sec y + \\tan y$', '$e^{\\sec y}$'],
    answer: 'Correct option: C) $\\sec y + \\tan y$. The equation is linear in $x$ with $P = \\sec y$. Since $\\int \\sec y\\,dy = \\log(\\sec y + \\tan y)$, the integrating factor is $e^{\\log(\\sec y + \\tan y)} = \\sec y + \\tan y$.',
  },
  {
    id: 'c12-de-r4-a19', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The solution of $\\frac{dy}{dx} + \\frac{y}{x} = 3$, $x > 0$, with $y = 2$ when $x = 1$, has the value of $y$ at $x = 2$ equal to',
    options: ['$\\dfrac{7}{2}$', '$\\dfrac{13}{4}$', '$\\dfrac{11}{4}$', '$4$'],
    answer: 'Correct option: B) $\\dfrac{13}{4}$. The integrating factor is $x$, so $\\frac{d}{dx}(xy) = 3x$ and $xy = \\frac{3x^{2}}{2} + c$. With $y(1) = 2$: $c = \\frac{1}{2}$, so $y = \\frac{3x}{2} + \\frac{1}{2x}$ and $y(2) = 3 + \\frac{1}{4} = \\frac{13}{4}$.',
  },
  {
    id: 'c12-de-r4-a20', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The solution of $\\frac{dy}{dx} + 2xy = 2x$ that satisfies $y = 3$ when $x = 0$ is',
    options: ['$y = 1 + 2e^{x^{2}}$', '$y = 3e^{-x^{2}}$', '$y = 2 + e^{-x^{2}}$', '$y = 1 + 2e^{-x^{2}}$'],
    answer: 'Correct option: D) $y = 1 + 2e^{-x^{2}}$. Integrating factor $e^{x^{2}}$: $\\frac{d}{dx}\\left(ye^{x^{2}}\\right) = 2xe^{x^{2}}$, so $ye^{x^{2}} = e^{x^{2}} + c$ and $y = 1 + ce^{-x^{2}}$. $y(0) = 3$ gives $c = 2$. The option $y = 2 + e^{-x^{2}}$ also gives $3$ at $x = 0$ but does not satisfy the equation.',
  },
  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-de-r4-b01', chapter: C, topic: 'General and particular solutions', type: 'short', complexity: 'easy', marks: 2,
    text: 'Verify that $y = \\tan(x + C)$, where $C$ is an arbitrary constant, is a solution of $\\frac{dy}{dx} = 1 + y^{2}$. Hence find the particular solution with $y = 1$ when $x = 0$, and state the interval of $x$ around $0$ on which it is valid.',
    answer: '$\\frac{dy}{dx} = \\sec^{2}(x + C) = 1 + \\tan^{2}(x + C) = 1 + y^{2}$, so the function is a solution, and it contains one arbitrary constant for a first order equation, so it is the general solution. At $x = 0$, $y = 1$: $\\tan C = 1$, so $C = \\frac{\\pi}{4}$ and $y = \\tan\\left(x + \\frac{\\pi}{4}\\right)$. This is defined and finite when $-\\frac{\\pi}{2} < x + \\frac{\\pi}{4} < \\frac{\\pi}{2}$, that is $-\\frac{3\\pi}{4} < x < \\frac{\\pi}{4}$.',
    steps: [
      { step: 'Differentiates to get $\\sec^{2}(x + C)$ and uses $\\sec^{2}\\theta = 1 + \\tan^{2}\\theta$ to verify', marks: 1 },
      { step: 'Finds $C = \\frac{\\pi}{4}$ and states the interval $-\\frac{3\\pi}{4} < x < \\frac{\\pi}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-b02', chapter: C, topic: 'Order and degree', type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the order and the degree of the differential equation $\\frac{d^{2}y}{dx^{2}}\\left[\\frac{dy}{dx} + \\left(\\frac{d^{3}y}{dx^{3}}\\right)^{2}\\right] = x$. How many arbitrary constants does its general solution contain?',
    answer: 'Multiplying out, $\\frac{d^{2}y}{dx^{2}}\\frac{dy}{dx} + \\frac{d^{2}y}{dx^{2}}\\left(\\frac{d^{3}y}{dx^{3}}\\right)^{2} = x$, a polynomial in the derivatives. The highest-order derivative is $\\frac{d^{3}y}{dx^{3}}$, so the order is $3$; it occurs with power $2$, so the degree is $2$. The general solution of a third order equation contains $3$ arbitrary constants.',
    steps: [
      { step: 'Writes the equation as a polynomial in the derivatives and gets order $3$', marks: 1 },
      { step: 'Gets degree $2$ and states $3$ arbitrary constants', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-b03', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the particular solution of the differential equation $x^{2}\\frac{dy}{dx} = y$, $x > 0$, $y > 0$, given that $y = e$ when $x = 1$.',
    answer: 'Separating, $\\frac{dy}{y} = \\frac{dx}{x^{2}}$. Integrating, $\\log y = -\\frac{1}{x} + c$. At $(1, e)$: $1 = -1 + c$, so $c = 2$. Hence $\\log y = 2 - \\frac{1}{x}$, that is $y = e^{2 - 1/x}$, valid for all $x > 0$.',
    steps: [
      { step: 'Separates the variables and integrates to $\\log y = -\\frac{1}{x} + c$', marks: 1 },
      { step: 'Uses $(1, e)$ to get $c = 2$ and writes $y = e^{2 - 1/x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-b04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} = \\frac{y}{x} + e^{-y/x}$, $x > 0$.',
    answer: 'Put $y = vx$: $v + x\\frac{dv}{dx} = v + e^{-v}$, so $e^{v}\\,dv = \\frac{dx}{x}$. Integrating, $e^{v} = \\log x + C$. The general solution is $e^{y/x} = \\log x + C$ (valid where $\\log x + C > 0$).',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $e^{v}\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates and replaces $v = \\frac{y}{x}$ to get $e^{y/x} = \\log x + C$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-b05', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} + \\frac{y}{x} = \\frac{e^{x}}{x}$, $x > 0$.',
    answer: 'The equation is linear with $P = \\frac{1}{x}$, so the integrating factor is $e^{\\log x} = x$. Then $\\frac{d}{dx}(xy) = e^{x}$, so $xy = e^{x} + C$ and $y = \\frac{e^{x} + C}{x}$.',
    steps: [
      { step: 'Finds the integrating factor $x$', marks: 1 },
      { step: 'Integrates $\\frac{d}{dx}(xy) = e^{x}$ and writes $y = \\frac{e^{x} + C}{x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-b06', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the particular solution of the differential equation $x\\frac{dy}{dx} = \\sqrt{1 - y^{2}}$, $x > 0$, $-1 < y < 1$, given that $y = \\frac{1}{2}$ when $x = 1$. State the interval of $x$ on which it holds.',
    answer: 'Separating, $\\frac{dy}{\\sqrt{1 - y^{2}}} = \\frac{dx}{x}$, so $\\sin^{-1}y = \\log x + c$. At $(1, \\frac{1}{2})$: $\\frac{\\pi}{6} = c$. So $y = \\sin\\left(\\log x + \\frac{\\pi}{6}\\right)$. Since $\\sin^{-1}y$ lies in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, we need $-\\frac{\\pi}{2} < \\log x + \\frac{\\pi}{6} < \\frac{\\pi}{2}$, that is $e^{-2\\pi/3} < x < e^{\\pi/3}$.',
    steps: [
      { step: 'Separates and integrates to $\\sin^{-1}y = \\log x + c$', marks: 1 },
      { step: 'Finds $c = \\frac{\\pi}{6}$, gives $y = \\sin\\left(\\log x + \\frac{\\pi}{6}\\right)$ with the interval $e^{-2\\pi/3} < x < e^{\\pi/3}$', marks: 1 },
    ],
  },
  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-de-r4-c01', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the particular solution of the differential equation $(1 + e^{x})\\,y\\,\\frac{dy}{dx} = e^{x}$, $y > 0$, given that $y = 1$ when $x = 0$. For which values of $x$ is the solution defined?',
    answer: 'Separating, $y\\,dy = \\frac{e^{x}}{1 + e^{x}}\\,dx$. Integrating, $\\frac{y^{2}}{2} = \\log(1 + e^{x}) + c$. At $(0, 1)$: $\\frac{1}{2} = \\log 2 + c$, so $c = \\frac{1}{2} - \\log 2$. Hence $y^{2} = 1 + 2\\log\\frac{1 + e^{x}}{2}$ and, as $y > 0$, $y = \\sqrt{1 + 2\\log\\frac{1 + e^{x}}{2}}$. It is defined when $1 + 2\\log\\frac{1 + e^{x}}{2} > 0$, i.e. $\\frac{1 + e^{x}}{2} > e^{-1/2}$, i.e. $x > \\log\\left(2e^{-1/2} - 1\\right)$.',
    steps: [
      { step: 'Separates the variables as $y\\,dy = \\frac{e^{x}}{1 + e^{x}}\\,dx$', marks: 1 },
      { step: 'Integrates both sides, $\\frac{y^{2}}{2} = \\log(1 + e^{x}) + c$, and uses $(0, 1)$ to find $c$', marks: 1 },
      { step: 'Writes $y = \\sqrt{1 + 2\\log\\frac{1 + e^{x}}{2}}$ and the condition $x > \\log\\left(2e^{-1/2} - 1\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c02', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'A curve in the first quadrant ($x > 0$, $y > 0$) passes through $(1, 2)$ and has slope $\\frac{y^{2}}{x}$ at every point $(x, y)$. Find its equation, and the range of $x$ over which the curve through $(1, 2)$ is defined.',
    answer: 'The curve satisfies $\\frac{dy}{dx} = \\frac{y^{2}}{x}$, so $\\frac{dy}{y^{2}} = \\frac{dx}{x}$. Integrating, $-\\frac{1}{y} = \\log x + c$. At $(1, 2)$: $-\\frac{1}{2} = c$. So $\\frac{1}{y} = \\frac{1}{2} - \\log x$, that is $y = \\frac{2}{1 - 2\\log x}$. For $y$ to stay positive (and finite), $1 - 2\\log x > 0$, so $0 < x < \\sqrt{e}$.',
    steps: [
      { step: 'Writes $\\frac{dy}{y^{2}} = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates to $-\\frac{1}{y} = \\log x + c$ and finds $c = -\\frac{1}{2}$', marks: 1 },
      { step: 'Gives $y = \\frac{2}{1 - 2\\log x}$ with $0 < x < \\sqrt{e}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c03', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $(x^{2} + 1)\\frac{dy}{dx} = x(1 - y^{2})$, $-1 < y < 1$, given that $y = 0$ when $x = 0$.',
    answer: 'Separating, $\\frac{dy}{1 - y^{2}} = \\frac{x\\,dx}{x^{2} + 1}$. Integrating, $\\frac{1}{2}\\log\\frac{1 + y}{1 - y} = \\frac{1}{2}\\log(x^{2} + 1) + c$, so $\\frac{1 + y}{1 - y} = K(x^{2} + 1)$. At $(0, 0)$: $K = 1$. Then $1 + y = (x^{2} + 1)(1 - y)$, so $y(x^{2} + 2) = x^{2}$ and $y = \\frac{x^{2}}{x^{2} + 2}$, which indeed lies in $(-1, 1)$ for all $x$.',
    steps: [
      { step: 'Separates the variables and integrates both sides (partial fractions or the standard $\\frac{1}{1 - y^{2}}$ integral)', marks: 1 },
      { step: 'Obtains $\\frac{1 + y}{1 - y} = K(x^{2} + 1)$ and finds $K = 1$', marks: 1 },
      { step: 'Solves for $y = \\frac{x^{2}}{x^{2} + 2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the particular solution of the differential equation $x(x + y)\\frac{dy}{dx} = x^{2} + y^{2}$, $x > 0$, given that $y = 0$ when $x = 1$.',
    answer: 'Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{1 + v^{2}}{1 + v}$, so $x\\frac{dv}{dx} = \\frac{1 - v}{1 + v}$ and $\\frac{1 + v}{1 - v}\\,dv = \\frac{dx}{x}$. Since $\\frac{1 + v}{1 - v} = -1 + \\frac{2}{1 - v}$, integrating gives $-v - 2\\log|1 - v| = \\log x + c$. Replacing $v = \\frac{y}{x}$ and using $x > 0$: $\\log x - 2\\log|x - y| = \\frac{y}{x} + c$. At $(1, 0)$: $c = 0$. Therefore $\\frac{x}{(x - y)^{2}} = e^{y/x}$, that is $x = (x - y)^{2}e^{y/x}$.',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $\\frac{1 + v}{1 - v}\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates using $\\frac{1 + v}{1 - v} = -1 + \\frac{2}{1 - v}$ and back-substitutes', marks: 1 },
      { step: 'Finds $c = 0$ and writes $x = (x - y)^{2}e^{y/x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c05', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $xy\\frac{dy}{dx} = y^{2} - 2x^{2}$, $x > 0$, $y > 0$, given that $y = 3$ when $x = 1$. State the largest interval of $x$ on which it is valid.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y^{2} - 2x^{2}}{xy}$ is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v^{2} - 2}{v}$, so $x\\frac{dv}{dx} = -\\frac{2}{v}$ and $v\\,dv = -\\frac{2\\,dx}{x}$. Integrating, $\\frac{v^{2}}{2} = -2\\log x + c$, so $y^{2} = x^{2}(2c - 4\\log x)$. At $(1, 3)$: $2c = 9$. Hence $y^{2} = x^{2}(9 - 4\\log x)$ and $y = x\\sqrt{9 - 4\\log x}$, valid for $0 < x < e^{9/4}$.',
    steps: [
      { step: 'Recognises the equation as homogeneous, puts $y = vx$ and separates to $v\\,dv = -\\frac{2\\,dx}{x}$', marks: 1 },
      { step: 'Integrates and finds the constant from $(1, 3)$', marks: 1 },
      { step: 'Writes $y = x\\sqrt{9 - 4\\log x}$ with $0 < x < e^{9/4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c06', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $y\\,dx = \\left(x + 2\\sqrt{xy}\\right)dy$, $x > 0$, $y > 0$, given that $x = 4$ when $y = 1$.',
    answer: '$\\frac{dx}{dy} = \\frac{x + 2\\sqrt{xy}}{y}$ is homogeneous. Put $x = vy$: $v + y\\frac{dv}{dy} = v + 2\\sqrt{v}$, so $\\frac{dv}{2\\sqrt{v}} = \\frac{dy}{y}$. Integrating, $\\sqrt{v} = \\log y + c$. At $(x, y) = (4, 1)$, $v = 4$ and $2 = c$. So $\\sqrt{\\frac{x}{y}} = \\log y + 2$, that is $x = y(\\log y + 2)^{2}$, valid for $y > e^{-2}$ (so that $\\log y + 2 > 0$).',
    steps: [
      { step: 'Puts $x = vy$ and separates to $\\frac{dv}{2\\sqrt{v}} = \\frac{dy}{y}$', marks: 1 },
      { step: 'Integrates to $\\sqrt{v} = \\log y + c$ and finds $c = 2$', marks: 1 },
      { step: 'Writes $x = y(\\log y + 2)^{2}$ with the condition $y > e^{-2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c07', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'easy', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} - \\frac{2y}{x} = x^{2}\\cos x$, $x > 0$, given that $y = \\frac{\\pi^{2}}{2}$ when $x = \\frac{\\pi}{2}$.',
    answer: 'Here $P = -\\frac{2}{x}$, so the integrating factor is $e^{-2\\log x} = \\frac{1}{x^{2}}$. Then $\\frac{d}{dx}\\left(\\frac{y}{x^{2}}\\right) = \\cos x$, so $\\frac{y}{x^{2}} = \\sin x + c$. At $\\left(\\frac{\\pi}{2}, \\frac{\\pi^{2}}{2}\\right)$: $2 = 1 + c$, so $c = 1$. The solution is $y = x^{2}(1 + \\sin x)$.',
    steps: [
      { step: 'Finds the integrating factor $\\frac{1}{x^{2}}$', marks: 1 },
      { step: 'Obtains $\\frac{y}{x^{2}} = \\sin x + c$', marks: 1 },
      { step: 'Uses the condition to get $c = 1$ and writes $y = x^{2}(1 + \\sin x)$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c08', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $y\\,dx = \\left(x + y^{2}\\cos y\\right)dy$, $y > 0$, given that $x = \\frac{\\pi}{2}$ when $y = \\frac{\\pi}{2}$.',
    answer: 'Write it as $\\frac{dx}{dy} - \\frac{x}{y} = y\\cos y$, linear in $x$ with $P = -\\frac{1}{y}$. The integrating factor is $e^{-\\log y} = \\frac{1}{y}$. Then $\\frac{d}{dy}\\left(\\frac{x}{y}\\right) = \\cos y$, so $\\frac{x}{y} = \\sin y + c$. At $\\left(\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$: $1 = 1 + c$, so $c = 0$. The solution is $x = y\\sin y$.',
    steps: [
      { step: 'Writes the equation as $\\frac{dx}{dy} - \\frac{x}{y} = y\\cos y$ and finds the integrating factor $\\frac{1}{y}$', marks: 1 },
      { step: 'Obtains $\\frac{x}{y} = \\sin y + c$', marks: 1 },
      { step: 'Finds $c = 0$ and writes $x = y\\sin y$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c09', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'A curve passes through $(0, 1)$ and the slope of the tangent at any point $(x, y)$ on it equals $x + y$. Find the equation of the curve.',
    answer: 'The curve satisfies $\\frac{dy}{dx} - y = x$, linear with $P = -1$ and integrating factor $e^{-x}$. Then $\\frac{d}{dx}\\left(ye^{-x}\\right) = xe^{-x}$. Integrating by parts, $ye^{-x} = -xe^{-x} - e^{-x} + c$, so $y = -x - 1 + ce^{x}$. At $(0, 1)$: $1 = -1 + c$, so $c = 2$. The curve is $y = 2e^{x} - x - 1$.',
    steps: [
      { step: 'Forms $\\frac{dy}{dx} - y = x$ and finds the integrating factor $e^{-x}$', marks: 1 },
      { step: 'Integrates $xe^{-x}$ by parts to get $y = -x - 1 + ce^{x}$', marks: 1 },
      { step: 'Finds $c = 2$ and writes $y = 2e^{x} - x - 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-c10', chapter: C, topic: 'General and particular solutions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Show that $y = (c_{1} + c_{2}x)e^{3x}$, where $c_{1}$ and $c_{2}$ are arbitrary constants, is a solution of $\\frac{d^{2}y}{dx^{2}} - 6\\frac{dy}{dx} + 9y = 0$. Hence find the particular solution with $y = 1$ and $\\frac{dy}{dx} = 5$ when $x = 0$.',
    answer: '$\\frac{dy}{dx} = c_{2}e^{3x} + 3(c_{1} + c_{2}x)e^{3x}$ and $\\frac{d^{2}y}{dx^{2}} = 6c_{2}e^{3x} + 9(c_{1} + c_{2}x)e^{3x}$. So $\\frac{d^{2}y}{dx^{2}} - 6\\frac{dy}{dx} + 9y = \\left[6c_{2} + 9u - 6c_{2} - 18u + 9u\\right]e^{3x} = 0$, where $u = c_{1} + c_{2}x$, which verifies it. From $y(0) = 1$: $c_{1} = 1$. From $y\\prime(0) = c_{2} + 3c_{1} = 5$: $c_{2} = 2$. The particular solution is $y = (1 + 2x)e^{3x}$.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx}$ and $\\frac{d^{2}y}{dx^{2}}$ correctly', marks: 1 },
      { step: 'Substitutes and shows the left side is $0$', marks: 1 },
      { step: 'Uses the two conditions to get $c_{1} = 1$, $c_{2} = 2$ and states $y = (1 + 2x)e^{3x}$', marks: 1 },
    ],
  },
  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-de-r4-d01', chapter: C, topic: 'Variable separable equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} = (y^{2} - 1)\\cos x$, given that $y = 3$ when $x = 0$. Express $y$ in terms of $x$ and state the interval of $x$ around $0$ on which this solution is valid.',
    answer: 'Separating, $\\frac{dy}{y^{2} - 1} = \\cos x\\,dx$. Since $\\frac{1}{y^{2} - 1} = \\frac{1}{2}\\left(\\frac{1}{y - 1} - \\frac{1}{y + 1}\\right)$, integrating gives $\\frac{1}{2}\\log\\left|\\frac{y - 1}{y + 1}\\right| = \\sin x + c$. At $(0, 3)$: $\\frac{1}{2}\\log\\frac{1}{2} = c$. Hence $\\log\\left|\\frac{y - 1}{y + 1}\\right| = 2\\sin x + \\log\\frac{1}{2}$, so $\\frac{y - 1}{y + 1} = \\frac{1}{2}e^{2\\sin x}$ (the sign stays positive as it is positive at $x = 0$). Writing $k = \\frac{1}{2}e^{2\\sin x}$: $y - 1 = k(y + 1)$, so $y = \\frac{1 + k}{1 - k} = \\frac{2 + e^{2\\sin x}}{2 - e^{2\\sin x}}$. This is finite when $e^{2\\sin x} < 2$, that is $\\sin x < \\frac{1}{2}\\log 2$. The interval containing $0$ is $-\\pi - \\sin^{-1}\\left(\\frac{\\log 2}{2}\\right) < x < \\sin^{-1}\\left(\\frac{\\log 2}{2}\\right)$.',
    steps: [
      { step: 'Separates the variables as $\\frac{dy}{y^{2} - 1} = \\cos x\\,dx$', marks: 1 },
      { step: 'Splits $\\frac{1}{y^{2} - 1}$ into partial fractions', marks: 1 },
      { step: 'Integrates both sides to $\\frac{1}{2}\\log\\left|\\frac{y - 1}{y + 1}\\right| = \\sin x + c$', marks: 1 },
      { step: 'Uses $(0, 3)$ to find $c = \\frac{1}{2}\\log\\frac{1}{2}$', marks: 1 },
      { step: 'Solves for $y = \\frac{2 + e^{2\\sin x}}{2 - e^{2\\sin x}}$ and states the condition $\\sin x < \\frac{1}{2}\\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d02', chapter: C, topic: 'Variable separable equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $\\left(\\sin y + y\\cos y\\right)\\frac{dy}{dx} = x\\,(2\\log x + 1)$, $x > 0$, given that $y = \\frac{\\pi}{2}$ when $x = 1$.',
    answer: 'Separating, $\\left(\\sin y + y\\cos y\\right)dy = x(2\\log x + 1)\\,dx$. Left side: $\\int\\sin y\\,dy = -\\cos y$ and, by parts, $\\int y\\cos y\\,dy = y\\sin y + \\cos y$, so $\\int\\left(\\sin y + y\\cos y\\right)dy = y\\sin y$. Right side: by parts, $\\int 2x\\log x\\,dx = x^{2}\\log x - \\frac{x^{2}}{2}$ and $\\int x\\,dx = \\frac{x^{2}}{2}$, so the integral is $x^{2}\\log x$. Hence $y\\sin y = x^{2}\\log x + c$. At $\\left(1, \\frac{\\pi}{2}\\right)$: $\\frac{\\pi}{2} = 0 + c$. The particular solution is $y\\sin y = x^{2}\\log x + \\frac{\\pi}{2}$.',
    steps: [
      { step: 'Separates the variables correctly', marks: 1 },
      { step: 'Integrates $\\sin y$ and $y\\cos y$ (by parts), obtaining $y\\sin y$ on the left', marks: 1 },
      { step: 'Integrates $2x\\log x$ by parts', marks: 1 },
      { step: 'Combines the right side to $x^{2}\\log x + c$', marks: 1 },
      { step: 'Uses $\\left(1, \\frac{\\pi}{2}\\right)$ to get $c = \\frac{\\pi}{2}$ and states the solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d03', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the differential equation $\\frac{dy}{dx} = \\frac{y}{x} + \\operatorname{cosec}\\left(\\frac{y}{x}\\right)$, $x > 0$, is homogeneous. Solve it, given that $y = \\frac{\\pi}{3}$ when $x = 1$, and state the interval of $x$ on which the solution holds.',
    answer: '$F(x, y) = \\frac{y}{x} + \\operatorname{cosec}\\frac{y}{x}$ depends only on $\\frac{y}{x}$, so $F(\\lambda x, \\lambda y) = F(x, y)$ and the equation is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v + \\operatorname{cosec}v$, so $\\sin v\\,dv = \\frac{dx}{x}$. Integrating, $-\\cos v = \\log x + c$. At $(1, \\frac{\\pi}{3})$: $-\\frac{1}{2} = c$. So $\\cos\\frac{y}{x} = \\frac{1}{2} - \\log x$. Since $\\frac{y}{x}$ must stay in $(0, \\pi)$ (where $\\sin v > 0$ and $\\operatorname{cosec}v$ is defined), $y = x\\cos^{-1}\\left(\\frac{1}{2} - \\log x\\right)$ and we need $-1 < \\frac{1}{2} - \\log x < 1$, i.e. $e^{-1/2} < x < e^{3/2}$.',
    steps: [
      { step: 'Shows $F(\\lambda x, \\lambda y) = F(x, y)$, so the equation is homogeneous', marks: 1 },
      { step: 'Substitutes $y = vx$ and separates to $\\sin v\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates to $-\\cos v = \\log x + c$', marks: 1 },
      { step: 'Uses $(1, \\frac{\\pi}{3})$ to get $c = -\\frac{1}{2}$ and writes $\\cos\\frac{y}{x} = \\frac{1}{2} - \\log x$', marks: 1 },
      { step: 'Writes $y = x\\cos^{-1}\\left(\\frac{1}{2} - \\log x\\right)$ with $e^{-1/2} < x < e^{3/2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d04', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $\\left(x^{2} + 2xy - y^{2}\\right)dx + \\left(y^{2} + 2xy - x^{2}\\right)dy = 0$, given that $y = 0$ when $x = 2$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y^{2} - 2xy - x^{2}}{y^{2} + 2xy - x^{2}}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v^{2} - 2v - 1}{v^{2} + 2v - 1}$, so $x\\frac{dv}{dx} = \\frac{-v^{3} - v^{2} - v - 1}{v^{2} + 2v - 1} = -\\frac{(v + 1)(v^{2} + 1)}{v^{2} + 2v - 1}$. Thus $\\frac{v^{2} + 2v - 1}{(v + 1)(v^{2} + 1)}\\,dv = -\\frac{dx}{x}$. Partial fractions: $\\frac{v^{2} + 2v - 1}{(v + 1)(v^{2} + 1)} = -\\frac{1}{v + 1} + \\frac{2v}{v^{2} + 1}$. Integrating, $-\\log|v + 1| + \\log(v^{2} + 1) = -\\log x + c$, so $\\frac{x(v^{2} + 1)}{v + 1} = K$. With $v = \\frac{y}{x}$ this is $\\frac{x^{2} + y^{2}}{x + y} = K$, i.e. $x^{2} + y^{2} = K(x + y)$. At $(2, 0)$: $4 = 2K$, so $K = 2$. The particular solution is $x^{2} + y^{2} = 2(x + y)$.',
    steps: [
      { step: 'Writes $\\frac{dy}{dx}$ and substitutes $y = vx$', marks: 1 },
      { step: 'Simplifies to $\\frac{v^{2} + 2v - 1}{(v + 1)(v^{2} + 1)}\\,dv = -\\frac{dx}{x}$', marks: 1 },
      { step: 'Resolves into partial fractions $-\\frac{1}{v + 1} + \\frac{2v}{v^{2} + 1}$', marks: 1 },
      { step: 'Integrates and back-substitutes to $x^{2} + y^{2} = K(x + y)$', marks: 1 },
      { step: 'Finds $K = 2$ and states $x^{2} + y^{2} = 2(x + y)$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d05', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Show that the differential equation $\\frac{dy}{dx} = \\frac{y\\left(y^{2} + 3x^{2}\\right)}{x\\left(x^{2} + 3y^{2}\\right)}$ is homogeneous. Find its particular solution that passes through the point $(2, 1)$.',
    answer: '$F(\\lambda x, \\lambda y) = \\frac{\\lambda y\\cdot\\lambda^{2}(y^{2} + 3x^{2})}{\\lambda x\\cdot\\lambda^{2}(x^{2} + 3y^{2})} = F(x, y)$, so it is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v(v^{2} + 3)}{1 + 3v^{2}}$, so $x\\frac{dv}{dx} = \\frac{v(v^{2} + 3) - v(1 + 3v^{2})}{1 + 3v^{2}} = \\frac{2v(1 - v^{2})}{1 + 3v^{2}}$. Hence $\\frac{1 + 3v^{2}}{v(1 - v)(1 + v)}\\,dv = \\frac{2\\,dx}{x}$. Partial fractions: $\\frac{1 + 3v^{2}}{v(1 - v)(1 + v)} = \\frac{1}{v} + \\frac{2}{1 - v} - \\frac{2}{1 + v}$. Integrating, $\\log|v| - 2\\log|1 - v| - 2\\log|1 + v| = 2\\log x + c$, so $\\frac{v}{(1 - v^{2})^{2}} = Kx^{2}$. With $v = \\frac{y}{x}$: $\\frac{y x^{3}}{(x^{2} - y^{2})^{2}} = Kx^{2}$, that is $xy = K(x^{2} - y^{2})^{2}$. At $(2, 1)$: $2 = 9K$, so $K = \\frac{2}{9}$. The particular solution is $9xy = 2(x^{2} - y^{2})^{2}$.',
    steps: [
      { step: 'Shows $F(\\lambda x, \\lambda y) = F(x, y)$', marks: 1 },
      { step: 'Substitutes $y = vx$ and separates to $\\frac{1 + 3v^{2}}{v(1 - v^{2})}\\,dv = \\frac{2\\,dx}{x}$', marks: 1 },
      { step: 'Finds the partial fractions $\\frac{1}{v} + \\frac{2}{1 - v} - \\frac{2}{1 + v}$', marks: 1 },
      { step: 'Integrates and back-substitutes to $xy = K(x^{2} - y^{2})^{2}$', marks: 1 },
      { step: 'Finds $K = \\frac{2}{9}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d06', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + y\\cos x = \\sin x\\cos x$, given that $y = 2$ when $x = 0$.',
    answer: 'This is linear with $P = \\cos x$, so the integrating factor is $e^{\\sin x}$. Then $\\frac{d}{dx}\\left(ye^{\\sin x}\\right) = \\sin x\\cos x\\,e^{\\sin x}$. Put $u = \\sin x$, so $du = \\cos x\\,dx$: $\\int u e^{u}\\,du = ue^{u} - e^{u} + c$. Thus $ye^{\\sin x} = (\\sin x - 1)e^{\\sin x} + c$, so $y = \\sin x - 1 + ce^{-\\sin x}$. At $(0, 2)$: $2 = -1 + c$, so $c = 3$. The particular solution is $y = \\sin x - 1 + 3e^{-\\sin x}$.',
    steps: [
      { step: 'Identifies $P = \\cos x$ and the integrating factor $e^{\\sin x}$', marks: 1 },
      { step: 'Writes $\\frac{d}{dx}\\left(ye^{\\sin x}\\right) = \\sin x\\cos x\\,e^{\\sin x}$', marks: 1 },
      { step: 'Substitutes $u = \\sin x$ and integrates $ue^{u}$ by parts', marks: 1 },
      { step: 'Obtains the general solution $y = \\sin x - 1 + ce^{-\\sin x}$', marks: 1 },
      { step: 'Finds $c = 3$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d07', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $(1 + x^{2})\\frac{dy}{dx} + xy = x\\sqrt{1 + x^{2}}$, given that $y = 1$ when $x = 0$.',
    answer: 'Dividing by $1 + x^{2}$: $\\frac{dy}{dx} + \\frac{x}{1 + x^{2}}y = \\frac{x}{\\sqrt{1 + x^{2}}}$. Here $P = \\frac{x}{1 + x^{2}}$, so $\\int P\\,dx = \\frac{1}{2}\\log(1 + x^{2})$ and the integrating factor is $\\sqrt{1 + x^{2}}$. Then $\\frac{d}{dx}\\left(y\\sqrt{1 + x^{2}}\\right) = \\frac{x}{\\sqrt{1 + x^{2}}}\\cdot\\sqrt{1 + x^{2}} = x$. Integrating, $y\\sqrt{1 + x^{2}} = \\frac{x^{2}}{2} + c$. At $(0, 1)$: $c = 1$. The particular solution is $y = \\frac{x^{2} + 2}{2\\sqrt{1 + x^{2}}}$, valid for all real $x$.',
    steps: [
      { step: 'Divides by $1 + x^{2}$ to reach standard form and identifies $P$ and $Q$', marks: 1 },
      { step: 'Finds $\\int P\\,dx = \\frac{1}{2}\\log(1 + x^{2})$', marks: 1 },
      { step: 'States the integrating factor $\\sqrt{1 + x^{2}}$ and simplifies $Q\\cdot\\text{I.F.} = x$', marks: 1 },
      { step: 'Integrates to $y\\sqrt{1 + x^{2}} = \\frac{x^{2}}{2} + c$', marks: 1 },
      { step: 'Finds $c = 1$ and states $y = \\frac{x^{2} + 2}{2\\sqrt{1 + x^{2}}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r4-d08', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + \\frac{y}{x^{2}} = \\frac{1}{x^{3}}$, $x > 0$, given that $y = 2 + e$ when $x = 1$.',
    answer: 'This is linear with $P = \\frac{1}{x^{2}}$, so $\\int P\\,dx = -\\frac{1}{x}$ and the integrating factor is $e^{-1/x}$. Then $\\frac{d}{dx}\\left(ye^{-1/x}\\right) = \\frac{e^{-1/x}}{x^{3}}$. Put $u = \\frac{1}{x}$, so $du = -\\frac{dx}{x^{2}}$ and $\\frac{dx}{x^{3}} = -u\\,du$: $\\int\\frac{e^{-1/x}}{x^{3}}\\,dx = -\\int ue^{-u}\\,du = (u + 1)e^{-u} + c$ (by parts). So $ye^{-1/x} = \\left(\\frac{1}{x} + 1\\right)e^{-1/x} + c$, giving $y = 1 + \\frac{1}{x} + ce^{1/x}$. At $(1, 2 + e)$: $2 + e = 2 + ce$, so $c = 1$. The particular solution is $y = 1 + \\frac{1}{x} + e^{1/x}$.',
    steps: [
      { step: 'Finds $\\int P\\,dx = -\\frac{1}{x}$ and the integrating factor $e^{-1/x}$', marks: 1 },
      { step: 'Writes $\\frac{d}{dx}\\left(ye^{-1/x}\\right) = \\frac{e^{-1/x}}{x^{3}}$', marks: 1 },
      { step: 'Substitutes $u = \\frac{1}{x}$ and integrates by parts to get $(u + 1)e^{-u}$', marks: 1 },
      { step: 'Obtains $y = 1 + \\frac{1}{x} + ce^{1/x}$', marks: 1 },
      { step: 'Finds $c = 1$ and states the particular solution', marks: 1 },
    ],
  },
  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-de-r4-e01', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a chemical reactor a reactant is used up in a reaction whose rate is proportional to the square of its concentration. The concentration $C$ (in mol/L) at time $t$ minutes ($t \\geq 0$) satisfies $\\frac{dC}{dt} = -0.1\\,C^{2}$, with $C = 2$ when $t = 0$.',
    answer: '(i) $\\frac{dC}{C^{2}} = -0.1\\,dt$. (ii) $\\frac{1}{C} = 0.1t + K$. (iii) $C = \\frac{10}{t + 5}$; $C = 0.5$ mol/L at $t = 15$. OR: $t = 20$ minutes.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the differential equation in variables-separated form (take $C > 0$).', answer: 'Dividing by $C^{2}$ and multiplying by $dt$: $\\frac{dC}{C^{2}} = -0.1\\,dt$.' },
      { label: '(ii)', marks: 1, text: 'Find the general solution.', answer: 'Integrating, $-\\frac{1}{C} = -0.1t + c$, so $\\frac{1}{C} = 0.1t + K$, where $K = -c$.' },
      { label: '(iii)', marks: 2, text: 'Find $C$ in terms of $t$, and the concentration at $t = 15$ minutes.\nOR\nFind $C$ in terms of $t$, and the time at which the concentration falls to $0.4$ mol/L.', answer: 'At $t = 0$, $C = 2$: $\\frac{1}{2} = K$, so $\\frac{1}{C} = 0.1t + 0.5 = \\frac{t + 5}{10}$ and $C = \\frac{10}{t + 5}$ (1 mark). At $t = 15$: $C = \\frac{10}{20} = 0.5$ mol/L (1 mark).\nOR: $C = \\frac{10}{t + 5}$ as above (1 mark). For $C = 0.4$: $t + 5 = 25$, so $t = 20$ minutes (1 mark).' },
    ],
  },
  {
    id: 'c12-de-r4-e02', chapter: C, topic: 'Homogeneous differential equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A roller-coaster designer sketches one climbing section of the track on a plan, with horizontal distance $x$ ($x > 0$, in units of $10$ m) and height $y$ above the base. The slope at every point $(x, y)$ of the section is $\\frac{y}{x} + \\frac{y^{2}}{x^{2}}$, and the section starts at the point $(1, 1)$.',
    answer: '(i) $F(\\lambda x, \\lambda y) = F(x, y)$; with $y = vx$ it becomes $\\frac{dv}{v^{2}} = \\frac{dx}{x}$. (ii) $y = -\\frac{x}{\\log x + c}$. (iii) $y = \\frac{x}{1 - \\log x}$; $y = 2\\sqrt{e}$ at $x = \\sqrt{e}$. OR: valid for $0 < x < e$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Show that the differential equation is homogeneous and write it as a separable equation in $v$ using $y = vx$.', answer: '$F(x, y) = \\frac{y}{x} + \\frac{y^{2}}{x^{2}}$ and $F(\\lambda x, \\lambda y) = \\frac{\\lambda y}{\\lambda x} + \\frac{\\lambda^{2}y^{2}}{\\lambda^{2}x^{2}} = F(x, y)$, so it is homogeneous. With $y = vx$: $v + x\\frac{dv}{dx} = v + v^{2}$, so $\\frac{dv}{v^{2}} = \\frac{dx}{x}$.' },
      { label: '(ii)', marks: 1, text: 'Find the general solution.', answer: 'Integrating, $-\\frac{1}{v} = \\log x + c$, so $v = -\\frac{1}{\\log x + c}$ and $y = -\\frac{x}{\\log x + c}$.' },
      { label: '(iii)', marks: 2, text: 'Find the equation of the section, and its height when $x = \\sqrt{e}$.\nOR\nFind the equation of the section, and the interval of $x$ (with $x > 0$) on which this section is defined with $y > 0$.', answer: 'At $(1, 1)$: $1 = -\\frac{1}{c}$, so $c = -1$ and $y = \\frac{x}{1 - \\log x}$ (1 mark). At $x = \\sqrt{e}$: $\\log x = \\frac{1}{2}$, so $y = \\frac{\\sqrt{e}}{1/2} = 2\\sqrt{e}$ (1 mark).\nOR: $y = \\frac{x}{1 - \\log x}$ as above (1 mark). We need $1 - \\log x > 0$, so $0 < x < e$; as $x \\to e$ the height grows without bound (1 mark).' },
    ],
  },
  {
    id: 'c12-de-r4-e03', chapter: C, topic: 'Linear differential equations', type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A dye tank initially holds $100$ litres of pure water. A dye solution containing $0.1$ kg of dye per litre is pumped in at $4$ litres per minute, and the well-stirred mixture is drawn off at $2$ litres per minute. If $x$ kg is the amount of dye in the tank after $t$ minutes, then $\\frac{dx}{dt} + \\frac{x}{t + 50} = 0.4$, with $x = 0$ when $t = 0$.',
    answer: '(i) Integrating factor $t + 50$. (ii) $x = 0.2(t + 50) + \\frac{C}{t + 50}$. (iii) $x = 0.2(t + 50) - \\frac{500}{t + 50}$; $15$ kg at $t = 50$. OR: concentration $0.075$ kg/L at $t = 50$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the integrating factor of the differential equation.', answer: '$P = \\frac{1}{t + 50}$, so the integrating factor is $e^{\\int\\frac{dt}{t + 50}} = e^{\\log(t + 50)} = t + 50$.' },
      { label: '(ii)', marks: 1, text: 'Find the general solution.', answer: '$\\frac{d}{dt}\\left[(t + 50)x\\right] = 0.4(t + 50)$, so $(t + 50)x = 0.2(t + 50)^{2} + C$ and $x = 0.2(t + 50) + \\frac{C}{t + 50}$.' },
      { label: '(iii)', marks: 2, text: 'Find $x$ in terms of $t$, and the amount of dye in the tank after $50$ minutes.\nOR\nFind $x$ in terms of $t$, and the concentration of dye (kg per litre) in the tank after $50$ minutes. (The volume at time $t$ is $100 + 2t$ litres.)', answer: 'At $t = 0$, $x = 0$: $0 = 10 + \\frac{C}{50}$, so $C = -500$ and $x = 0.2(t + 50) - \\frac{500}{t + 50}$ (1 mark). At $t = 50$: $x = 20 - 5 = 15$ kg (1 mark).\nOR: $x$ as above (1 mark). The volume at $t = 50$ is $200$ litres, so the concentration is $\\frac{15}{200} = 0.075$ kg per litre (1 mark).' },
    ],
  },
  {
    id: 'c12-de-r4-e04', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'For a certain product the demand $D$ (in units) depends on the price $p$ (in rupees, $p > 0$) in such a way that the percentage fall in demand is always twice the percentage rise in price. This gives $\\frac{dD}{dp} = -\\frac{2D}{p}$, $D > 0$. When the price is Rs $5$, the demand is $800$ units.',
    answer: '(i) $\\frac{dD}{D} = -\\frac{2\\,dp}{p}$. (ii) $D = \\frac{K}{p^{2}}$. (iii) $D = \\frac{20000}{p^{2}}$; $50$ units at Rs $20$. OR: Rs $10$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the differential equation in variables-separated form.', answer: '$\\frac{dD}{D} = -\\frac{2\\,dp}{p}$.' },
      { label: '(ii)', marks: 1, text: 'Find the general solution.', answer: 'Integrating, $\\log D = -2\\log p + c$, so $D = Kp^{-2} = \\frac{K}{p^{2}}$, where $K = e^{c} > 0$.' },
      { label: '(iii)', marks: 2, text: 'Find $D$ in terms of $p$, and the demand when the price is Rs $20$.\nOR\nFind $D$ in terms of $p$, and the price at which the demand is $200$ units.', answer: 'At $p = 5$, $D = 800$: $K = 800 \\times 25 = 20000$, so $D = \\frac{20000}{p^{2}}$ (1 mark). At $p = 20$: $D = \\frac{20000}{400} = 50$ units (1 mark).\nOR: $D = \\frac{20000}{p^{2}}$ as above (1 mark). For $D = 200$: $p^{2} = 100$, so $p = 10$, i.e. Rs $10$ (1 mark).' },
    ],
  },
];
