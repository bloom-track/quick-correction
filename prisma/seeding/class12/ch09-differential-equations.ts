import type { Class12Question } from './types.js';

const C = 'Differential Equations';

export const CH09_DE: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-de-a01', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The sum of the order and the degree of the differential equation $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{3} - 4\\left(\\frac{dy}{dx}\\right)^{5} + 2y = \\sin x$ is',
    options: ['$7$', '$5$', '$8$', '$6$'],
    answer: 'Correct option: B) $5$. The highest derivative is $\\frac{d^{2}y}{dx^{2}}$, so the order is $2$; it is raised to the power $3$ and the equation is a polynomial in the derivatives, so the degree is $3$. Sum $= 2 + 3 = 5$.',
  },
  {
    id: 'c12-de-a02', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The degree of the differential equation $\\frac{d^{3}y}{dx^{3}} + \\cos\\left(\\frac{dy}{dx}\\right) = x$ is',
    options: ['$1$', '$3$', 'not defined', '$0$'],
    answer: 'Correct option: C) not defined. The derivative $\\frac{dy}{dx}$ appears inside a cosine, so the equation is not a polynomial in its derivatives and its degree is not defined (its order is $3$).',
  },
  {
    id: 'c12-de-a03', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The product of the order and the degree of the differential equation $y = x\\frac{dy}{dx} + \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^{2}}$ is',
    options: ['$1$', '$4$', 'not defined', '$2$'],
    answer: 'Correct option: D) $2$. Only $\\frac{dy}{dx}$ appears, so the order is $1$. Removing the radical, $\\left(y - x\\frac{dy}{dx}\\right)^{2} = 1 + \\left(\\frac{dy}{dx}\\right)^{2}$, a polynomial of degree $2$ in $\\frac{dy}{dx}$. Product $= 1 \\times 2 = 2$.',
  },
  {
    id: 'c12-de-a04', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The order and degree of the differential equation $\\frac{d}{dx}\\left[\\left(\\frac{dy}{dx}\\right)^{3}\\right] = 2y$ are respectively',
    options: ['$2$ and $1$', '$1$ and $3$', '$2$ and $3$', '$1$ and $2$'],
    answer: 'Correct option: A) $2$ and $1$. Carrying out the differentiation gives $3\\left(\\frac{dy}{dx}\\right)^{2}\\frac{d^{2}y}{dx^{2}} = 2y$. The highest derivative is $\\frac{d^{2}y}{dx^{2}}$ (order $2$) and it appears to the first power (degree $1$).',
  },
  {
    id: 'c12-de-a05', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The sum of the order and the degree of the differential equation $\\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^{2}} = \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{1/3}$ is',
    options: ['$3$', '$5$', '$4$', '$2$'],
    answer: 'Correct option: C) $4$. Cubing both sides gives $\\left[1 + \\left(\\frac{dy}{dx}\\right)^{2}\\right]^{3/2} = \\frac{d^{2}y}{dx^{2}}$, and squaring gives $\\left[1 + \\left(\\frac{dy}{dx}\\right)^{2}\\right]^{3} = \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2}$. So the order is $2$ and the degree is $2$; sum $= 4$.',
  },
  {
    id: 'c12-de-a06', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dy}{dx} + \\frac{3y}{x} = x^{2}$, $x > 0$, is',
    options: ['$x^{3}$', '$e^{3x}$', '$3\\log x$', '$\\frac{1}{x^{3}}$'],
    answer: 'Correct option: A) $x^{3}$. Here $P = \\frac{3}{x}$, so the integrating factor is $e^{\\int \\frac{3}{x}\\,dx} = e^{3\\log x} = x^{3}$.',
  },
  {
    id: 'c12-de-a07', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The integrating factor of the differential equation $(1 + x^{2})\\frac{dy}{dx} + 2xy = \\cos x$ is',
    options: ['$\\log(1 + x^{2})$', '$e^{x^{2}}$', '$1 + x^{2}$', '$\\frac{1}{1 + x^{2}}$'],
    answer: 'Correct option: C) $1 + x^{2}$. Dividing by $1 + x^{2}$ gives $P = \\frac{2x}{1 + x^{2}}$, so the integrating factor is $e^{\\int P\\,dx} = e^{\\log(1 + x^{2})} = 1 + x^{2}$.',
  },
  {
    id: 'c12-de-a08', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The differential equation $y\\frac{dx}{dy} - x = y^{3}$, $y > 0$, is linear in $x$. Its integrating factor is',
    options: ['$y$', '$\\frac{1}{y}$', '$e^{-y}$', '$-\\log y$'],
    answer: 'Correct option: B) $\\frac{1}{y}$. In standard form $\\frac{dx}{dy} - \\frac{1}{y}x = y^{2}$, so $P_{1} = -\\frac{1}{y}$ and the integrating factor is $e^{-\\log y} = \\frac{1}{y}$.',
  },
  {
    id: 'c12-de-a09', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Which of the following differential equations is NOT linear in $y$?',
    options: ['$\\frac{dy}{dx} + y\\sin x = x$', '$x\\frac{dy}{dx} - y = x^{3}$', '$\\frac{dy}{dx} = e^{x} - y\\tan x$', '$\\frac{dy}{dx} + y^{2} = x$'],
    answer: 'Correct option: D) $\\frac{dy}{dx} + y^{2} = x$. It contains $y^{2}$, so it is not of the form $\\frac{dy}{dx} + Py = Q$. The other three can each be written in that form with $P$ and $Q$ functions of $x$ only.',
  },
  {
    id: 'c12-de-a10', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The general solution of the differential equation $\\frac{dy}{dx} = e^{2x + y}$ is',
    options: ['$\\frac{e^{2x}}{2} - e^{-y} = C$', '$\\frac{e^{2x}}{2} + e^{-y} = C$', '$e^{2x} + e^{y} = C$', '$2e^{2x} + e^{-y} = C$'],
    answer: 'Correct option: B) $\\frac{e^{2x}}{2} + e^{-y} = C$. Separating, $e^{-y}\\,dy = e^{2x}\\,dx$; integrating, $-e^{-y} = \\frac{e^{2x}}{2} + C_{1}$, i.e. $\\frac{e^{2x}}{2} + e^{-y} = C$.',
  },
  {
    id: 'c12-de-a11', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The solution of $x\\frac{dy}{dx} = 2y$ that passes through the point $(1, 3)$ is',
    options: ['$y = 3x$', '$y = 2x + 1$', '$y = x^{2} + 2$', '$y = 3x^{2}$'],
    answer: 'Correct option: D) $y = 3x^{2}$. Separating, $\\frac{dy}{y} = \\frac{2\\,dx}{x}$, so $\\log|y| = 2\\log|x| + c$ and $y = Kx^{2}$. At $(1, 3)$, $K = 3$. The other curves pass through $(1, 3)$ but do not satisfy $xy\' = 2y$.',
  },
  {
    id: 'c12-de-a12', chapter: C, topic: 'Variable separable equations', type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The general solution of $\\frac{dy}{dx} = \\frac{1 + y^{2}}{1 + x^{2}}$ is $\\tan^{-1} y - \\tan^{-1} x = C$.\nReason (R): An equation of the form $\\frac{dy}{dx} = f(x)\\,g(y)$ can be solved by separating the variables and integrating both sides.',
    options: [
      'Both A and R are true and R is the correct explanation of A.',
      'Both A and R are true but R is not the correct explanation of A.',
      'A is true but R is false.',
      'A is false but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. The equation has the form $f(x)g(y)$; separating gives $\\frac{dy}{1 + y^{2}} = \\frac{dx}{1 + x^{2}}$, and integrating gives $\\tan^{-1} y = \\tan^{-1} x + C$, which is A.',
  },
  {
    id: 'c12-de-a13', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For which of the following functions $F(x, y)$ is the differential equation $\\frac{dy}{dx} = F(x, y)$ NOT homogeneous?',
    options: ['$\\frac{x + y}{x}$', '$\\frac{y}{x} + e^{y/x}$', '$\\frac{x^{2} + y}{x}$', '$\\sin\\left(\\frac{y}{x}\\right)$'],
    answer: 'Correct option: C) $\\frac{x^{2} + y}{x}$. Here $F(\\lambda x, \\lambda y) = \\frac{\\lambda^{2}x^{2} + \\lambda y}{\\lambda x}$, which is not equal to $F(x, y)$, so $F$ is not homogeneous of degree zero. The other three are functions of $\\frac{y}{x}$ alone, hence homogeneous of degree zero.',
  },
  {
    id: 'c12-de-a14', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'On substituting $y = vx$ in the homogeneous differential equation $\\frac{dy}{dx} = \\frac{y}{x} + \\tan\\left(\\frac{y}{x}\\right)$, it reduces to',
    options: ['$x\\frac{dv}{dx} = v + \\tan v$', '$\\frac{dv}{dx} = \\tan v$', '$x\\frac{dv}{dx} = \\tan v$', '$v + x\\frac{dv}{dx} = \\tan v$'],
    answer: 'Correct option: C) $x\\frac{dv}{dx} = \\tan v$. With $y = vx$, $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$, so $v + x\\frac{dv}{dx} = v + \\tan v$, which gives $x\\frac{dv}{dx} = \\tan v$.',
  },
  {
    id: 'c12-de-a15', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of arbitrary constants in the general solution of a differential equation of order $3$ is',
    options: ['$0$', '$1$', '$2$', '$3$'],
    answer: 'Correct option: D) $3$. The general solution of a differential equation of order $n$ contains $n$ arbitrary constants; a particular solution contains none.',
  },
  {
    id: 'c12-de-a16', chapter: C, topic: 'General and particular solutions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $y = 2e^{x} + 1$ is the particular solution of $\\frac{dy}{dx} = y - 1$ satisfying $y(0) = 3$.\nReason (R): A particular solution of a first-order differential equation contains exactly one arbitrary constant.',
    options: [
      'Both A and R are true and R is the correct explanation of A.',
      'Both A and R are true but R is not the correct explanation of A.',
      'A is true but R is false.',
      'A is false but R is true.',
    ],
    answer: 'Correct option: C) A is true but R is false. For $y = 2e^{x} + 1$, $\\frac{dy}{dx} = 2e^{x} = y - 1$ and $y(0) = 3$, so A is true. A particular solution has no arbitrary constants (the general solution of a first-order equation has one), so R is false.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-de-b01', chapter: C, topic: 'General and particular solutions', type: 'short', complexity: 'easy', marks: 2,
    text: 'Show that $y = a\\cos 2x + b\\sin 2x$, where $a$ and $b$ are arbitrary constants, is a solution of the differential equation $\\frac{d^{2}y}{dx^{2}} + 4y = 0$. Is it the general solution? Give a reason.',
    answer: '$\\frac{dy}{dx} = -2a\\sin 2x + 2b\\cos 2x$ and $\\frac{d^{2}y}{dx^{2}} = -4a\\cos 2x - 4b\\sin 2x = -4y$. Hence $\\frac{d^{2}y}{dx^{2}} + 4y = 0$, so the function is a solution. The equation has order $2$ and the solution contains two independent arbitrary constants $a$ and $b$, so it is the general solution.',
    steps: [
      { step: 'Finds $\\frac{d^{2}y}{dx^{2}} = -4a\\cos 2x - 4b\\sin 2x$', marks: 1 },
      { step: 'Shows $y\'\' + 4y = 0$ and states it is the general solution because it has two arbitrary constants for an order-2 equation', marks: 1 },
    ],
  },
  {
    id: 'c12-de-b02', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} = e^{x}(1 + y^{2})$, given that $y = 1$ when $x = 0$.',
    answer: 'Separating the variables, $\\frac{dy}{1 + y^{2}} = e^{x}\\,dx$. Integrating, $\\tan^{-1} y = e^{x} + C$. At $x = 0$, $y = 1$: $\\frac{\\pi}{4} = 1 + C$, so $C = \\frac{\\pi}{4} - 1$. The particular solution is $\\tan^{-1} y = e^{x} + \\frac{\\pi}{4} - 1$, i.e. $y = \\tan\\left(e^{x} + \\frac{\\pi}{4} - 1\\right)$.',
    steps: [
      { step: 'Separates and integrates to get $\\tan^{-1} y = e^{x} + C$', marks: 1 },
      { step: 'Finds $C = \\frac{\\pi}{4} - 1$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-b03', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $\\frac{dy}{dx} - \\frac{y}{x} = x^{2}$, $x > 0$.',
    answer: 'This is linear with $P = -\\frac{1}{x}$ and $Q = x^{2}$. Integrating factor $= e^{-\\int \\frac{dx}{x}} = e^{-\\log x} = \\frac{1}{x}$. Then $\\frac{d}{dx}\\left(\\frac{y}{x}\\right) = x^{2} \\cdot \\frac{1}{x} = x$, so $\\frac{y}{x} = \\frac{x^{2}}{2} + C$. General solution: $y = \\frac{x^{3}}{2} + Cx$.',
    steps: [
      { step: 'Finds the integrating factor $\\frac{1}{x}$', marks: 1 },
      { step: 'Integrates to get $y = \\frac{x^{3}}{2} + Cx$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-b04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the differential equation $x^{2}\\frac{dy}{dx} = x^{2} + xy - y^{2}$ is homogeneous, and use the substitution $y = vx$ to reduce it to a separable equation in $v$ and $x$ (you need not solve it).',
    answer: 'Write $\\frac{dy}{dx} = F(x, y) = \\frac{x^{2} + xy - y^{2}}{x^{2}}$. Then $F(\\lambda x, \\lambda y) = \\frac{\\lambda^{2}(x^{2} + xy - y^{2})}{\\lambda^{2}x^{2}} = F(x, y)$, so $F$ is homogeneous of degree zero and the equation is homogeneous. With $y = vx$, $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$, so $v + x\\frac{dv}{dx} = 1 + v - v^{2}$, i.e. $x\\frac{dv}{dx} = 1 - v^{2}$. Separated form: $\\frac{dv}{1 - v^{2}} = \\frac{dx}{x}$.',
    steps: [
      { step: 'Shows $F(\\lambda x, \\lambda y) = F(x, y)$, so the equation is homogeneous', marks: 1 },
      { step: 'Substitutes $y = vx$ and reaches $\\frac{dv}{1 - v^{2}} = \\frac{dx}{x}$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-de-c01', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $x^{2}\\frac{dy}{dx} = y^{2} + 2xy$, given that $y = 1$ when $x = 1$.',
    answer: 'The equation $\\frac{dy}{dx} = \\frac{y^{2} + 2xy}{x^{2}}$ is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v^{2} + 2v$, so $x\\frac{dv}{dx} = v^{2} + v$. Separating, $\\frac{dv}{v(v + 1)} = \\frac{dx}{x}$, and since $\\frac{1}{v(v+1)} = \\frac{1}{v} - \\frac{1}{v + 1}$, integration gives $\\log\\left|\\frac{v}{v + 1}\\right| = \\log|x| + \\log|K|$, so $\\frac{v}{v + 1} = Kx$. With $v = \\frac{y}{x}$: $\\frac{y}{x + y} = Kx$. At $(1, 1)$: $\\frac{1}{2} = K$. So $2y = x(x + y)$, which gives the particular solution $y = \\frac{x^{2}}{2 - x}$.',
    steps: [
      { step: 'Substitutes $y = vx$ and gets $x\\frac{dv}{dx} = v^{2} + v$', marks: 1 },
      { step: 'Integrates using partial fractions to get $\\frac{y}{x + y} = Kx$', marks: 1 },
      { step: 'Uses $y(1) = 1$ to get $K = \\frac{1}{2}$ and states $y = \\frac{x^{2}}{2 - x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c02', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the differential equation $x\\frac{dy}{dx} = y + x\\cos^{2}\\left(\\frac{y}{x}\\right)$, $x > 0$, given that $y = \\frac{\\pi}{4}$ when $x = 1$.',
    answer: 'Dividing by $x$, $\\frac{dy}{dx} = \\frac{y}{x} + \\cos^{2}\\left(\\frac{y}{x}\\right)$, which is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v + \\cos^{2} v$, so $\\sec^{2} v\\,dv = \\frac{dx}{x}$. Integrating, $\\tan v = \\log x + C$, i.e. $\\tan\\left(\\frac{y}{x}\\right) = \\log x + C$. At $x = 1$, $y = \\frac{\\pi}{4}$: $\\tan\\frac{\\pi}{4} = 0 + C$, so $C = 1$. The particular solution is $\\tan\\left(\\frac{y}{x}\\right) = \\log x + 1$.',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $\\sec^{2} v\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates to $\\tan\\left(\\frac{y}{x}\\right) = \\log x + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states $\\tan\\left(\\frac{y}{x}\\right) = \\log x + 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c03', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the general solution of the differential equation $(y^{2} - 2xy)\\,dx = (x^{2} - 2xy)\\,dy$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y^{2} - 2xy}{x^{2} - 2xy}$, a homogeneous equation. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v^{2} - 2v}{1 - 2v}$, so $x\\frac{dv}{dx} = \\frac{v^{2} - 2v - v + 2v^{2}}{1 - 2v} = \\frac{3v(v - 1)}{1 - 2v}$. Separating, $\\frac{1 - 2v}{v(v - 1)}\\,dv = \\frac{3\\,dx}{x}$. Partial fractions: $\\frac{1 - 2v}{v(v - 1)} = -\\frac{1}{v} - \\frac{1}{v - 1}$. Integrating, $-\\log|v| - \\log|v - 1| = 3\\log|x| + c$, so $x^{3}v(v - 1) = K$. Substituting $v = \\frac{y}{x}$: $x^{3} \\cdot \\frac{y}{x} \\cdot \\frac{y - x}{x} = K$. The general solution is $xy(y - x) = K$, where $K$ is an arbitrary constant.',
    steps: [
      { step: 'Substitutes $y = vx$ and simplifies to $x\\frac{dv}{dx} = \\frac{3v(v - 1)}{1 - 2v}$', marks: 1 },
      { step: 'Separates and resolves $\\frac{1 - 2v}{v(v - 1)} = -\\frac{1}{v} - \\frac{1}{v - 1}$', marks: 1 },
      { step: 'Integrates and back-substitutes to get $xy(y - x) = K$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\left(x e^{y/x} + y\\right)dx = x\\,dy$, $x > 0$, given that $y = 0$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = e^{y/x} + \\frac{y}{x}$, which is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = e^{v} + v$, so $e^{-v}\\,dv = \\frac{dx}{x}$. Integrating, $-e^{-v} = \\log x + C$, i.e. $-e^{-y/x} = \\log x + C$. At $x = 1$, $y = 0$: $-1 = 0 + C$, so $C = -1$. The particular solution is $e^{-y/x} = 1 - \\log x$ (equivalently $y = -x\\log(1 - \\log x)$).',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $e^{-v}\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates to $-e^{-y/x} = \\log x + C$', marks: 1 },
      { step: 'Finds $C = -1$ and states $e^{-y/x} = 1 - \\log x$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c05', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + y\\tan x = 2x\\cos x$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, given that $y = 1$ when $x = 0$.',
    answer: 'This is linear with $P = \\tan x$, $Q = 2x\\cos x$. Integrating factor $= e^{\\int \\tan x\\,dx} = e^{\\log \\sec x} = \\sec x$. Then $\\frac{d}{dx}(y\\sec x) = 2x\\cos x \\sec x = 2x$, so $y\\sec x = x^{2} + C$. At $x = 0$, $y = 1$: $1 = 0 + C$, so $C = 1$. The particular solution is $y\\sec x = x^{2} + 1$, i.e. $y = (x^{2} + 1)\\cos x$.',
    steps: [
      { step: 'Finds the integrating factor $\\sec x$', marks: 1 },
      { step: 'Integrates to $y\\sec x = x^{2} + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states $y = (x^{2} + 1)\\cos x$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c06', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the general solution of the differential equation $x\\frac{dy}{dx} + 2y = x^{2}\\log x$, $x > 0$.',
    answer: 'Dividing by $x$: $\\frac{dy}{dx} + \\frac{2}{x}y = x\\log x$, linear with $P = \\frac{2}{x}$. Integrating factor $= e^{2\\log x} = x^{2}$. Then $\\frac{d}{dx}(x^{2}y) = x^{3}\\log x$. By parts, $\\int x^{3}\\log x\\,dx = \\frac{x^{4}}{4}\\log x - \\int \\frac{x^{4}}{4} \\cdot \\frac{1}{x}\\,dx = \\frac{x^{4}}{4}\\log x - \\frac{x^{4}}{16} + C$. So $x^{2}y = \\frac{x^{4}}{4}\\log x - \\frac{x^{4}}{16} + C$, and the general solution is $y = \\frac{x^{2}}{4}\\log x - \\frac{x^{2}}{16} + \\frac{C}{x^{2}}$.',
    steps: [
      { step: 'Writes the standard form and finds the integrating factor $x^{2}$', marks: 1 },
      { step: 'Evaluates $\\int x^{3}\\log x\\,dx = \\frac{x^{4}}{4}\\log x - \\frac{x^{4}}{16}$ by parts', marks: 1 },
      { step: 'States $y = \\frac{x^{2}}{4}\\log x - \\frac{x^{2}}{16} + \\frac{C}{x^{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c07', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the general solution of the differential equation $(x + 2y^{3})\\frac{dy}{dx} = y$, $y > 0$.',
    answer: 'Treat $x$ as the dependent variable: $\\frac{dx}{dy} = \\frac{x + 2y^{3}}{y}$, i.e. $\\frac{dx}{dy} - \\frac{1}{y}x = 2y^{2}$, which is linear in $x$ with $P_{1} = -\\frac{1}{y}$, $Q_{1} = 2y^{2}$. Integrating factor $= e^{-\\int \\frac{dy}{y}} = \\frac{1}{y}$. Then $\\frac{d}{dy}\\left(\\frac{x}{y}\\right) = 2y^{2} \\cdot \\frac{1}{y} = 2y$, so $\\frac{x}{y} = y^{2} + C$. The general solution is $x = y^{3} + Cy$.',
    steps: [
      { step: 'Rewrites as $\\frac{dx}{dy} - \\frac{x}{y} = 2y^{2}$, linear in $x$', marks: 1 },
      { step: 'Finds the integrating factor $\\frac{1}{y}$', marks: 1 },
      { step: 'Integrates to $x = y^{3} + Cy$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c08', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $y(x^{2} + 4)\\frac{dy}{dx} = 2x(y^{2} + 1)$, given that $y = \\sqrt{15}$ when $x = 0$.',
    answer: 'Separating, $\\frac{y\\,dy}{y^{2} + 1} = \\frac{2x\\,dx}{x^{2} + 4}$. Integrating, $\\frac{1}{2}\\log(y^{2} + 1) = \\log(x^{2} + 4) + c$, so $y^{2} + 1 = K(x^{2} + 4)^{2}$. At $x = 0$, $y = \\sqrt{15}$: $16 = 16K$, so $K = 1$. The particular solution is $y^{2} + 1 = (x^{2} + 4)^{2}$, i.e. $y^{2} = (x^{2} + 4)^{2} - 1$.',
    steps: [
      { step: 'Separates the variables correctly', marks: 1 },
      { step: 'Integrates to $y^{2} + 1 = K(x^{2} + 4)^{2}$', marks: 1 },
      { step: 'Finds $K = 1$ and states $y^{2} = (x^{2} + 4)^{2} - 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-c09', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} = e^{2x - y} + xe^{-y}$, given that $y = 0$ when $x = 0$.',
    answer: 'Write $\\frac{dy}{dx} = e^{-y}(e^{2x} + x)$, so $e^{y}\\,dy = (e^{2x} + x)\\,dx$. Integrating, $e^{y} = \\frac{e^{2x}}{2} + \\frac{x^{2}}{2} + C$. At $x = 0$, $y = 0$: $1 = \\frac{1}{2} + C$, so $C = \\frac{1}{2}$. The particular solution is $e^{y} = \\frac{e^{2x} + x^{2} + 1}{2}$, i.e. $y = \\log\\left(\\frac{e^{2x} + x^{2} + 1}{2}\\right)$.',
    steps: [
      { step: 'Factors out $e^{-y}$ and separates to $e^{y}\\,dy = (e^{2x} + x)\\,dx$', marks: 1 },
      { step: 'Integrates to $e^{y} = \\frac{e^{2x}}{2} + \\frac{x^{2}}{2} + C$', marks: 1 },
      { step: 'Finds $C = \\frac{1}{2}$ and states the particular solution', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-de-d01', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the differential equation $(x - y)\\frac{dy}{dx} = x + 2y$, $x > 0$, and find the particular solution given that $y = 0$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{x + 2y}{x - y}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{1 + 2v}{1 - v}$, so $x\\frac{dv}{dx} = \\frac{1 + 2v - v + v^{2}}{1 - v} = \\frac{v^{2} + v + 1}{1 - v}$. Separating, $\\frac{1 - v}{v^{2} + v + 1}\\,dv = \\frac{dx}{x}$. Write $1 - v = -\\frac{1}{2}(2v + 1) + \\frac{3}{2}$. Then $\\int \\frac{1 - v}{v^{2} + v + 1}\\,dv = -\\frac{1}{2}\\log(v^{2} + v + 1) + \\frac{3}{2}\\int \\frac{dv}{\\left(v + \\frac{1}{2}\\right)^{2} + \\frac{3}{4}} = -\\frac{1}{2}\\log(v^{2} + v + 1) + \\sqrt{3}\\tan^{-1}\\left(\\frac{2v + 1}{\\sqrt{3}}\\right)$. So $-\\frac{1}{2}\\log(v^{2} + v + 1) + \\sqrt{3}\\tan^{-1}\\left(\\frac{2v + 1}{\\sqrt{3}}\\right) = \\log x + C$. Putting $v = \\frac{y}{x}$ and using $-\\frac{1}{2}\\log\\frac{x^{2} + xy + y^{2}}{x^{2}} - \\log x = -\\frac{1}{2}\\log(x^{2} + xy + y^{2})$, the general solution is $\\sqrt{3}\\tan^{-1}\\left(\\frac{x + 2y}{\\sqrt{3}\\,x}\\right) - \\frac{1}{2}\\log(x^{2} + xy + y^{2}) = C$. At $x = 1$, $y = 0$: $\\sqrt{3}\\tan^{-1}\\frac{1}{\\sqrt{3}} - 0 = \\sqrt{3} \\cdot \\frac{\\pi}{6} = C$. The particular solution is $\\sqrt{3}\\tan^{-1}\\left(\\frac{x + 2y}{\\sqrt{3}\\,x}\\right) - \\frac{1}{2}\\log(x^{2} + xy + y^{2}) = \\frac{\\sqrt{3}\\,\\pi}{6}$.',
    steps: [
      { step: 'Identifies the equation as homogeneous and substitutes $y = vx$', marks: 1 },
      { step: 'Reaches the separated form $\\frac{1 - v}{v^{2} + v + 1}\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Splits the numerator and integrates to the log and $\\tan^{-1}$ terms', marks: 1 },
      { step: 'Back-substitutes to get the general solution in $x$ and $y$', marks: 1 },
      { step: 'Uses $y(1) = 0$ to find $C = \\frac{\\sqrt{3}\\,\\pi}{6}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-d02', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the differential equation $(x^{2} + y^{2})\\,dx = 2xy\\,dy$ is homogeneous. Solve it, and find the particular solution that passes through the point $(2, 1)$.',
    answer: 'Here $\\frac{dy}{dx} = F(x, y) = \\frac{x^{2} + y^{2}}{2xy}$, and $F(\\lambda x, \\lambda y) = \\frac{\\lambda^{2}(x^{2} + y^{2})}{\\lambda^{2} \\cdot 2xy} = F(x, y)$, so the equation is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{1 + v^{2}}{2v}$, so $x\\frac{dv}{dx} = \\frac{1 - v^{2}}{2v}$. Separating, $\\frac{2v}{1 - v^{2}}\\,dv = \\frac{dx}{x}$. Integrating, $-\\log|1 - v^{2}| = \\log|x| + c$, so $x(1 - v^{2}) = K$. With $v = \\frac{y}{x}$: $x \\cdot \\frac{x^{2} - y^{2}}{x^{2}} = K$, giving the general solution $x^{2} - y^{2} = Kx$. Through $(2, 1)$: $4 - 1 = 2K$, so $K = \\frac{3}{2}$. The particular solution is $x^{2} - y^{2} = \\frac{3}{2}x$, i.e. $2x^{2} - 2y^{2} = 3x$.',
    steps: [
      { step: 'Shows $F(\\lambda x, \\lambda y) = F(x, y)$', marks: 1 },
      { step: 'Substitutes $y = vx$ to get $x\\frac{dv}{dx} = \\frac{1 - v^{2}}{2v}$', marks: 1 },
      { step: 'Separates and integrates to $x(1 - v^{2}) = K$', marks: 1 },
      { step: 'Back-substitutes to $x^{2} - y^{2} = Kx$', marks: 1 },
      { step: 'Finds $K = \\frac{3}{2}$ and states $2x^{2} - 2y^{2} = 3x$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-d03', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $(x^{2} - y^{2})\\,dx + 3xy\\,dy = 0$, given that $y = 1$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y^{2} - x^{2}}{3xy}$, which is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v^{2} - 1}{3v}$, so $x\\frac{dv}{dx} = \\frac{v^{2} - 1 - 3v^{2}}{3v} = -\\frac{1 + 2v^{2}}{3v}$. Separating, $\\frac{3v}{1 + 2v^{2}}\\,dv = -\\frac{dx}{x}$. Integrating, $\\frac{3}{4}\\log(1 + 2v^{2}) = -\\log|x| + c$, so $(1 + 2v^{2})^{3} = \\frac{K}{x^{4}}$, i.e. $x^{4}(1 + 2v^{2})^{3} = K$. With $v = \\frac{y}{x}$: $x^{4} \\cdot \\frac{(x^{2} + 2y^{2})^{3}}{x^{6}} = K$, so the general solution is $(x^{2} + 2y^{2})^{3} = Kx^{2}$. At $(1, 1)$: $27 = K$. The particular solution is $(x^{2} + 2y^{2})^{3} = 27x^{2}$.',
    steps: [
      { step: 'Writes $\\frac{dy}{dx} = \\frac{y^{2} - x^{2}}{3xy}$ and substitutes $y = vx$', marks: 1 },
      { step: 'Simplifies to $x\\frac{dv}{dx} = -\\frac{1 + 2v^{2}}{3v}$ and separates', marks: 1 },
      { step: 'Integrates to $\\frac{3}{4}\\log(1 + 2v^{2}) = -\\log|x| + c$', marks: 1 },
      { step: 'Back-substitutes to $(x^{2} + 2y^{2})^{3} = Kx^{2}$', marks: 1 },
      { step: 'Finds $K = 27$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-d04', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} - 3y = \\sin 2x$, given that $y = 0$ when $x = 0$.',
    answer: 'Linear with $P = -3$, $Q = \\sin 2x$. Integrating factor $= e^{-3x}$. Then $\\frac{d}{dx}(ye^{-3x}) = e^{-3x}\\sin 2x$, so $ye^{-3x} = I$, where $I = \\int e^{-3x}\\sin 2x\\,dx$. By parts twice: $I = -\\frac{1}{3}e^{-3x}\\sin 2x + \\frac{2}{3}\\int e^{-3x}\\cos 2x\\,dx = -\\frac{1}{3}e^{-3x}\\sin 2x + \\frac{2}{3}\\left[-\\frac{1}{3}e^{-3x}\\cos 2x - \\frac{2}{3}I\\right]$. So $I\\left(1 + \\frac{4}{9}\\right) = -\\frac{e^{-3x}}{9}(3\\sin 2x + 2\\cos 2x)$, giving $I = -\\frac{e^{-3x}}{13}(3\\sin 2x + 2\\cos 2x) + C$. Hence $y = -\\frac{3\\sin 2x + 2\\cos 2x}{13} + Ce^{3x}$. At $x = 0$, $y = 0$: $0 = -\\frac{2}{13} + C$, so $C = \\frac{2}{13}$. The particular solution is $y = \\frac{2e^{3x} - 3\\sin 2x - 2\\cos 2x}{13}$.',
    steps: [
      { step: 'Finds the integrating factor $e^{-3x}$ and writes $ye^{-3x} = \\int e^{-3x}\\sin 2x\\,dx$', marks: 1 },
      { step: 'Applies integration by parts twice correctly', marks: 1 },
      { step: 'Gets $\\int e^{-3x}\\sin 2x\\,dx = -\\frac{e^{-3x}}{13}(3\\sin 2x + 2\\cos 2x) + C$', marks: 1 },
      { step: 'Writes the general solution $y = -\\frac{3\\sin 2x + 2\\cos 2x}{13} + Ce^{3x}$', marks: 1 },
      { step: 'Finds $C = \\frac{2}{13}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-d05', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the general solution of the differential equation $(x + 1)\\frac{dy}{dx} - 2y = (x + 1)^{4}$, $x > -1$. Hence find the particular solution for which $y = 1$ when $x = 0$.',
    answer: 'Dividing by $x + 1$: $\\frac{dy}{dx} - \\frac{2}{x + 1}y = (x + 1)^{3}$, linear with $P = -\\frac{2}{x + 1}$, $Q = (x + 1)^{3}$. Integrating factor $= e^{-2\\log(x + 1)} = \\frac{1}{(x + 1)^{2}}$. Then $\\frac{d}{dx}\\left(\\frac{y}{(x + 1)^{2}}\\right) = (x + 1)^{3} \\cdot \\frac{1}{(x + 1)^{2}} = x + 1$. Integrating, $\\frac{y}{(x + 1)^{2}} = \\frac{(x + 1)^{2}}{2} + C$, so the general solution is $y = \\frac{(x + 1)^{4}}{2} + C(x + 1)^{2}$. At $x = 0$, $y = 1$: $1 = \\frac{1}{2} + C$, so $C = \\frac{1}{2}$. The particular solution is $y = \\frac{(x + 1)^{4} + (x + 1)^{2}}{2}$.',
    steps: [
      { step: 'Writes the standard form with $P = -\\frac{2}{x + 1}$, $Q = (x + 1)^{3}$', marks: 1 },
      { step: 'Finds the integrating factor $\\frac{1}{(x + 1)^{2}}$', marks: 1 },
      { step: 'Integrates to $\\frac{y}{(x + 1)^{2}} = \\frac{(x + 1)^{2}}{2} + C$', marks: 1 },
      { step: 'States the general solution $y = \\frac{(x + 1)^{4}}{2} + C(x + 1)^{2}$', marks: 1 },
      { step: 'Finds $C = \\frac{1}{2}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-d06', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $(2y\\log y + y - x)\\frac{dy}{dx} = y$, $y > 0$, given that $x = 1$ when $y = 1$.',
    answer: 'Treat $x$ as the dependent variable: $\\frac{dx}{dy} = \\frac{2y\\log y + y - x}{y}$, i.e. $\\frac{dx}{dy} + \\frac{1}{y}x = 2\\log y + 1$, which is linear in $x$. Integrating factor $= e^{\\int \\frac{dy}{y}} = y$. Then $\\frac{d}{dy}(xy) = 2y\\log y + y$. By parts, $\\int 2y\\log y\\,dy = y^{2}\\log y - \\int y\\,dy = y^{2}\\log y - \\frac{y^{2}}{2}$, and $\\int y\\,dy = \\frac{y^{2}}{2}$. So $xy = y^{2}\\log y + C$, and the general solution is $x = y\\log y + \\frac{C}{y}$. At $y = 1$, $x = 1$: $1 = 0 + C$, so $C = 1$. The particular solution is $x = y\\log y + \\frac{1}{y}$ (equivalently $xy = y^{2}\\log y + 1$).',
    steps: [
      { step: 'Rewrites the equation as $\\frac{dx}{dy} + \\frac{x}{y} = 2\\log y + 1$', marks: 1 },
      { step: 'Finds the integrating factor $y$', marks: 1 },
      { step: 'Evaluates $\\int (2y\\log y + y)\\,dy = y^{2}\\log y$ using integration by parts', marks: 1 },
      { step: 'States the general solution $xy = y^{2}\\log y + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states $x = y\\log y + \\frac{1}{y}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-de-e01', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A food-safety lab grows a bacterial culture in a nutrient dish. The number of bacteria $N$ at time $t$ (in hours) satisfies the differential equation $\\frac{dN}{dt} = kN$, where $k$ is a positive constant. At the start ($t = 0$) there are $2000$ bacteria, and after $2$ hours there are $6000$.',
    answer: '(i) $N = Ae^{kt}$. (ii) $A = 2000$, so $N = 2000e^{kt}$. (iii) $k = \\frac{1}{2}\\log 3$; $18000$ bacteria after $4$ hours. OR: $6$ hours.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'By separating the variables, find the general solution of the differential equation.',
        answer: '$\\frac{dN}{N} = k\\,dt$. Integrating, $\\log N = kt + c$ (as $N > 0$), so $N = Ae^{kt}$, where $A$ is a constant.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Use the initial count to find the constant in your solution, and express $N$ in terms of $t$ and $k$.',
        answer: 'At $t = 0$, $N = 2000$: $2000 = Ae^{0} = A$, so $N = 2000e^{kt}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the value of $k$, and the number of bacteria after $4$ hours.\nOR\nFind the value of $k$, and the time it takes for the culture to reach $54000$ bacteria.',
        answer: 'At $t = 2$: $6000 = 2000e^{2k}$, so $e^{2k} = 3$ and $k = \\frac{1}{2}\\log 3$ (1 mark). After $4$ hours, $N = 2000e^{4k} = 2000(e^{2k})^{2} = 2000 \\times 9 = 18000$ bacteria (1 mark).\nOR: $k = \\frac{1}{2}\\log 3$ as above (1 mark). For $N = 54000$: $e^{kt} = 27 = 3^{3} = (e^{2k})^{3} = e^{6k}$, so $t = 6$ hours (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-e02', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cup of tea at $85^{\\circ}$C is left on a table in a room kept at $25^{\\circ}$C. By Newton\'s law of cooling, the temperature $T$ (in $^{\\circ}$C) of the tea at time $t$ minutes satisfies $\\frac{dT}{dt} = -k(T - 25)$, where $k$ is a positive constant. After $10$ minutes the tea has cooled to $55^{\\circ}$C.',
    answer: '(i) $T = 25 + Ae^{-kt}$. (ii) $A = 60$, so $T = 25 + 60e^{-kt}$. (iii) $e^{-10k} = \\frac{1}{2}$; $40^{\\circ}$C after $20$ minutes. OR: $30$ minutes.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'By separating the variables, find the general solution of the differential equation.',
        answer: '$\\frac{dT}{T - 25} = -k\\,dt$. Integrating, $\\log(T - 25) = -kt + c$, so $T = 25 + Ae^{-kt}$, where $A$ is a constant.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Use the initial temperature to find the constant in your solution.',
        answer: 'At $t = 0$, $T = 85$: $85 = 25 + A$, so $A = 60$ and $T = 25 + 60e^{-kt}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the temperature of the tea after $20$ minutes.\nOR\nFind how long after it was poured the tea reaches $32.5^{\\circ}$C.',
        answer: 'At $t = 10$: $55 = 25 + 60e^{-10k}$, so $e^{-10k} = \\frac{1}{2}$ (1 mark). After $20$ minutes, $T = 25 + 60(e^{-10k})^{2} = 25 + 60 \\times \\frac{1}{4} = 40^{\\circ}$C (1 mark).\nOR: $e^{-10k} = \\frac{1}{2}$ as above (1 mark). For $T = 32.5$: $60e^{-kt} = 7.5$, so $e^{-kt} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^{3} = e^{-30k}$, giving $t = 30$ minutes (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-e03', chapter: C, topic: 'Homogeneous differential equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A designer is shaping the edge of a decorative glass panel. In a coordinate system on the panel (with $x > 0$ and $y > 0$), the edge must be a curve whose slope at every point $(x, y)$ equals $\\frac{y}{x} + \\frac{x}{y}$. So the edge satisfies $\\frac{dy}{dx} = \\frac{y}{x} + \\frac{x}{y}$.',
    answer: '(i) $F(\\lambda x, \\lambda y) = F(x, y)$, so it is homogeneous. (ii) $v\\,dv = \\frac{dx}{x}$. (iii) $y^{2} = 2x^{2}(\\log x + 2)$. OR: $y^{2} = x^{2}(2\\log x - 1)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that this differential equation is homogeneous.',
        answer: 'Let $F(x, y) = \\frac{y}{x} + \\frac{x}{y}$. Then $F(\\lambda x, \\lambda y) = \\frac{\\lambda y}{\\lambda x} + \\frac{\\lambda x}{\\lambda y} = F(x, y) = \\lambda^{0}F(x, y)$, so $F$ is homogeneous of degree zero and the equation is homogeneous.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Using the substitution $y = vx$, write the equation in variables-separated form.',
        answer: '$v + x\\frac{dv}{dx} = v + \\frac{1}{v}$, so $x\\frac{dv}{dx} = \\frac{1}{v}$, i.e. $v\\,dv = \\frac{dx}{x}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the equation of the edge if it passes through the point $(1, 2)$.\nOR\nFind the equation of the edge if it passes through the point $(e, e)$.',
        answer: 'Integrating $v\\,dv = \\frac{dx}{x}$: $\\frac{v^{2}}{2} = \\log x + C$, so $y^{2} = 2x^{2}(\\log x + C)$ (1 mark). Through $(1, 2)$: $4 = 2(0 + C)$, so $C = 2$ and the edge is $y^{2} = 2x^{2}(\\log x + 2)$ (1 mark).\nOR: General solution $y^{2} = 2x^{2}(\\log x + C)$ as above (1 mark). Through $(e, e)$: $e^{2} = 2e^{2}(1 + C)$, so $C = -\\frac{1}{2}$ and the edge is $y^{2} = x^{2}(2\\log x - 1)$ (1 mark).',
      },
    ],
  },
];
