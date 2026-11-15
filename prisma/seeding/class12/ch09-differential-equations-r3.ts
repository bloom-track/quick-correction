import type { Class12Question } from './types.js';

const C = 'Differential Equations';

const AR_OPTIONS = [
  'Both A and R are true and R is the correct explanation of A.',
  'Both A and R are true but R is not the correct explanation of A.',
  'A is true but R is false.',
  'A is false but R is true.',
];

export const CH09_DE_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-de-r3-a01', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The sum of the order and the degree of the differential equation $x^{2}\\frac{d^{3}y}{dx^{3}} + \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{4} = e^{x}$ is',
    options: ['$3$', '$7$', '$4$', '$5$'],
    answer: 'Correct option: C) $4$. The highest-order derivative is $\\frac{d^{3}y}{dx^{3}}$, so the order is $3$, and it occurs to the first power, so the degree is $1$. Sum $= 3 + 1 = 4$ (the power $4$ belongs to a lower-order derivative and does not decide the degree).',
  },
  {
    id: 'c12-de-r3-a02', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The degree of the differential equation $\\left(1 + \\frac{dy}{dx}\\right)^{3} = \\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2}$ is',
    options: ['$3$', '$2$', '$1$', '$6$'],
    answer: 'Correct option: B) $2$. The equation is already a polynomial in the derivatives. The highest-order derivative is $\\frac{d^{2}y}{dx^{2}}$ and its power is $2$, so the degree is $2$ (the power $3$ is on the lower-order derivative $\\frac{dy}{dx}$).',
  },
  {
    id: 'c12-de-r3-a03', chapter: C, topic: 'Order and degree', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The product of the order and the degree of the differential equation $\\frac{d^{2}y}{dx^{2}} = \\left(y + \\frac{dy}{dx}\\right)^{1/4}$ is',
    options: ['$2$', '$6$', '$4$', '$8$'],
    answer: 'Correct option: D) $8$. Raising both sides to the power $4$ gives $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{4} = y + \\frac{dy}{dx}$. The order is $2$ and the degree is $4$, so the product is $2 \\times 4 = 8$.',
  },
  {
    id: 'c12-de-r3-a04', chapter: C, topic: 'Order and degree', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The degree of the differential equation $\\frac{d^{2}y}{dx^{2}} + \\sqrt{\\frac{dy}{dx}} = 0$ is $2$.\nReason (R): The order of a differential equation is the order of the highest-order derivative occurring in it.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both are true but R does not explain A. Writing $\\frac{d^{2}y}{dx^{2}} = -\\sqrt{\\frac{dy}{dx}}$ and squaring gives $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2} = \\frac{dy}{dx}$, so the degree is $2$ and A is true. R is also a true statement, but it describes the order, not the degree, so it does not explain A.',
  },
  {
    id: 'c12-de-r3-a05', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following functions is a solution of the differential equation $\\frac{d^{2}y}{dx^{2}} - \\frac{dy}{dx} - 2y = 0$?',
    options: ['$y = e^{x}$', '$y = e^{-2x}$', '$y = e^{2x}$', '$y = xe^{x}$'],
    answer: 'Correct option: C) $y = e^{2x}$. For $y = e^{2x}$: $y\' = 2e^{2x}$, $y\'\' = 4e^{2x}$, so $y\'\' - y\' - 2y = (4 - 2 - 2)e^{2x} = 0$. For $e^{x}$ the left side is $-2e^{x}$, for $e^{-2x}$ it is $4e^{-2x}$, and for $xe^{x}$ it is $(1 - 2x)e^{x}$, none of which is zero.',
  },
  {
    id: 'c12-de-r3-a06', chapter: C, topic: 'General and particular solutions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A curve whose slope at every point is $\\frac{dy}{dx} = 3x^{2} - 2x$ passes through $(0, 1)$. The $y$-coordinate of the point on this curve with $x = 2$ is',
    options: ['$4$', '$5$', '$8$', '$3$'],
    answer: 'Correct option: B) $5$. Integrating, $y = x^{3} - x^{2} + C$. Since the curve passes through $(0, 1)$, $C = 1$. At $x = 2$, $y = 8 - 4 + 1 = 5$. The value $4$ comes from forgetting the constant.',
  },
  {
    id: 'c12-de-r3-a07', chapter: C, topic: 'General and particular solutions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): $y = Ax + A^{2}$, where $A$ is an arbitrary constant, is a solution of the differential equation $y = x\\frac{dy}{dx} + \\left(\\frac{dy}{dx}\\right)^{2}$.\nReason (R): A function is a solution of a differential equation if the equation is satisfied when the function and its derivatives are substituted into it.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and R explains A. For $y = Ax + A^{2}$ we get $\\frac{dy}{dx} = A$, so the right side is $xA + A^{2}$, which equals $y$. Thus the equation is satisfied, which is exactly what R says makes a function a solution.',
  },
  {
    id: 'c12-de-r3-a08', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The general solution of the differential equation $\\frac{dy}{dx} = \\frac{\\cos x}{\\sin y}$ is',
    options: ['$\\sin x - \\cos y = C$', '$\\sin x + \\cos y = C$', '$\\cos x + \\sin y = C$', '$\\cos x - \\sin y = C$'],
    answer: 'Correct option: B) $\\sin x + \\cos y = C$. Separating, $\\sin y\\,dy = \\cos x\\,dx$. Integrating, $-\\cos y = \\sin x + c$, i.e. $\\sin x + \\cos y = C$.',
  },
  {
    id: 'c12-de-r3-a09', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The general solution of the differential equation $x\\log x\\,\\frac{dy}{dx} = y$, $x > 1$, is',
    options: ['$y = Cx\\log x$', '$y = \\log(Cx)$', '$y = C\\log x$', '$y = C + \\log x$'],
    answer: 'Correct option: C) $y = C\\log x$. Separating, $\\frac{dy}{y} = \\frac{dx}{x\\log x}$. Integrating (put $u = \\log x$), $\\log|y| = \\log|\\log x| + c$, so $y = C\\log x$.',
  },
  {
    id: 'c12-de-r3-a10', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The solution of $\\frac{dy}{dx} = \\frac{y^{2}}{x^{2}}$, $x > 0$, that passes through the point $\\left(1, \\frac{1}{2}\\right)$ is',
    options: ['$y = \\frac{x}{2}$', '$y = \\frac{x^{2}}{2}$', '$y = \\frac{1}{2x}$', '$y = \\frac{x}{1 + x}$'],
    answer: 'Correct option: D) $y = \\frac{x}{1 + x}$. Separating, $\\frac{dy}{y^{2}} = \\frac{dx}{x^{2}}$, so $-\\frac{1}{y} = -\\frac{1}{x} + c$. At $\\left(1, \\frac{1}{2}\\right)$: $-2 = -1 + c$, so $c = -1$ and $\\frac{1}{y} = \\frac{1}{x} + 1 = \\frac{1 + x}{x}$. The other three curves pass through the point but do not satisfy the differential equation.',
  },
  {
    id: 'c12-de-r3-a11', chapter: C, topic: 'Variable separable equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The curve through $(3, 4)$ whose slope at every point $(x, y)$ is $-\\frac{x}{y}$ is',
    options: ['$y^{2} - x^{2} = 7$', '$x^{2} + y^{2} = 25$', '$x^{2} + y^{2} = 7$', '$xy = 12$'],
    answer: 'Correct option: B) $x^{2} + y^{2} = 25$. Separating, $y\\,dy = -x\\,dx$, so $\\frac{y^{2}}{2} = -\\frac{x^{2}}{2} + c$, i.e. $x^{2} + y^{2} = K$. At $(3, 4)$, $K = 25$.',
  },
  {
    id: 'c12-de-r3-a12', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following differential equations is homogeneous?',
    options: ['$(x^{2} + y)\\,dx = x\\,dy$', '$(x^{2} + y^{2})\\,dx - xy\\,dy = 0$', '$\\frac{dy}{dx} = x + \\sin y$', '$(x + y^{2})\\,dx + y\\,dy = 0$'],
    answer: 'Correct option: B) $(x^{2} + y^{2})\\,dx - xy\\,dy = 0$. It gives $\\frac{dy}{dx} = \\frac{x^{2} + y^{2}}{xy}$, which is unchanged when $x, y$ are replaced by $\\lambda x, \\lambda y$. In the other three, $F(\\lambda x, \\lambda y)$ differs from $F(x, y)$ because the terms $x^{2} + y$, $x + \\sin y$ and $x + y^{2}$ mix different degrees.',
  },
  {
    id: 'c12-de-r3-a13', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'On putting $y = vx$, the differential equation $\\frac{dy}{dx} = \\frac{y^{2} - x^{2}}{2xy}$ reduces to',
    options: ['$x\\frac{dv}{dx} = \\frac{v^{2} - 1}{2v}$', '$x\\frac{dv}{dx} = \\frac{1 - v^{2}}{2v}$', '$x\\frac{dv}{dx} = -\\frac{1 + v^{2}}{2v}$', '$\\frac{dv}{dx} = -\\frac{1 + v^{2}}{2v}$'],
    answer: 'Correct option: C) $x\\frac{dv}{dx} = -\\frac{1 + v^{2}}{2v}$. With $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v^{2} - 1}{2v}$, so $x\\frac{dv}{dx} = \\frac{v^{2} - 1 - 2v^{2}}{2v} = -\\frac{1 + v^{2}}{2v}$.',
  },
  {
    id: 'c12-de-r3-a14', chapter: C, topic: 'Homogeneous differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The general solution of the differential equation $\\frac{dy}{dx} = \\frac{y}{x} + 1$, $x > 0$, is',
    options: ['$y = x\\log x + C$', '$y = x(\\log x + C)$', '$y = \\log x + C$', '$y = Cx$'],
    answer: 'Correct option: B) $y = x(\\log x + C)$. Put $y = vx$: $v + x\\frac{dv}{dx} = v + 1$, so $dv = \\frac{dx}{x}$ and $v = \\log x + C$. Hence $y = x(\\log x + C)$.',
  },
  {
    id: 'c12-de-r3-a15', chapter: C, topic: 'Homogeneous differential equations', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The differential equation $\\frac{dy}{dx} = \\frac{y + 3}{x + 2}$ is homogeneous.\nReason (R): A differential equation $\\frac{dy}{dx} = F(x, y)$ is homogeneous if $F(\\lambda x, \\lambda y) = F(x, y)$ for every non-zero $\\lambda$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false but R is true. R is the correct test for homogeneity. Here $F(\\lambda x, \\lambda y) = \\frac{\\lambda y + 3}{\\lambda x + 2}$, which is not equal to $F(x, y)$, so the equation is not homogeneous (it is variable separable instead).',
  },
  {
    id: 'c12-de-r3-a16', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The integrating factor of the differential equation $\\cos^{2}x\\frac{dy}{dx} + y = 1$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, is',
    options: ['$e^{\\tan x}$', '$\\tan x$', '$e^{\\sec^{2}x}$', '$\\sec^{2}x$'],
    answer: 'Correct option: A) $e^{\\tan x}$. Dividing by $\\cos^{2}x$ gives $\\frac{dy}{dx} + (\\sec^{2}x)\\,y = \\sec^{2}x$, so $P = \\sec^{2}x$ and the integrating factor is $e^{\\int \\sec^{2}x\\,dx} = e^{\\tan x}$.',
  },
  {
    id: 'c12-de-r3-a17', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dy}{dx} + \\frac{y}{x\\log x} = \\frac{2}{x}$, $x > 1$, is',
    options: ['$x\\log x$', '$\\log(\\log x)$', '$\\log x$', '$\\frac{1}{\\log x}$'],
    answer: 'Correct option: C) $\\log x$. Here $P = \\frac{1}{x\\log x}$. Putting $u = \\log x$, $\\int P\\,dx = \\int \\frac{du}{u} = \\log(\\log x)$, so the integrating factor is $e^{\\log(\\log x)} = \\log x$.',
  },
  {
    id: 'c12-de-r3-a18', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The integrating factor of the differential equation $\\frac{dx}{dy} + x\\tan y = \\sin y$, $0 < y < \\frac{\\pi}{2}$, is',
    options: ['$\\log\\sec y$', '$\\cos y$', '$\\tan y$', '$\\sec y$'],
    answer: 'Correct option: D) $\\sec y$. The equation is linear in $x$ with $P_{1} = \\tan y$. Then $\\int \\tan y\\,dy = \\log\\sec y$, so the integrating factor is $e^{\\log\\sec y} = \\sec y$.',
  },
  {
    id: 'c12-de-r3-a19', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The particular solution of $\\frac{dy}{dx} - y = 2e^{x}$ that satisfies $y = 1$ when $x = 0$ is',
    options: ['$y = (x + 1)e^{x}$', '$y = (2x + 1)e^{x}$', '$y = 2xe^{x} + 1$', '$y = (2x - 1)e^{x}$'],
    answer: 'Correct option: B) $y = (2x + 1)e^{x}$. The integrating factor is $e^{-x}$, so $\\frac{d}{dx}(ye^{-x}) = 2$ and $ye^{-x} = 2x + C$. At $(0, 1)$, $C = 1$, giving $y = (2x + 1)e^{x}$. Options A and C also pass through $(0, 1)$ but do not satisfy the equation.',
  },
  {
    id: 'c12-de-r3-a20', chapter: C, topic: 'Linear differential equations', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following differential equations is linear in $x$ (treating $y$ as the independent variable)?',
    options: ['$\\frac{dx}{dy} + x\\sin y = y^{2}$', '$y\\frac{dx}{dy} + x^{2} = y$', '$x\\frac{dx}{dy} = y$', '$\\left(\\frac{dx}{dy}\\right)^{2} + x = y$'],
    answer: 'Correct option: A) $\\frac{dx}{dy} + x\\sin y = y^{2}$. It has the form $\\frac{dx}{dy} + P_{1}x = Q_{1}$ with $P_{1} = \\sin y$ and $Q_{1} = y^{2}$. The others contain $x^{2}$, the product $x\\frac{dx}{dy}$, or $\\left(\\frac{dx}{dy}\\right)^{2}$, so they are not linear in $x$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-de-r3-b01', chapter: C, topic: 'General and particular solutions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that $y = e^{x}(A\\cos x + B\\sin x)$, where $A$ and $B$ are arbitrary constants, is a solution of the differential equation $\\frac{d^{2}y}{dx^{2}} - 2\\frac{dy}{dx} + 2y = 0$.',
    answer: '$\\frac{dy}{dx} = e^{x}[(A + B)\\cos x + (B - A)\\sin x]$ and $\\frac{d^{2}y}{dx^{2}} = e^{x}[2B\\cos x - 2A\\sin x]$. Then $\\frac{d^{2}y}{dx^{2}} - 2\\frac{dy}{dx} + 2y = e^{x}\\{[2B - 2(A + B) + 2A]\\cos x + [-2A - 2(B - A) + 2B]\\sin x\\} = 0$. Hence the function is a solution.',
    steps: [
      { step: 'Finds $\\frac{dy}{dx}$ and $\\frac{d^{2}y}{dx^{2}}$ correctly', marks: 1 },
      { step: 'Substitutes into the equation and shows the coefficients of $\\cos x$ and $\\sin x$ cancel to give $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-b02', chapter: C, topic: 'Order and degree', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the order and the degree of the differential equation $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{2} = \\sqrt[3]{1 + \\frac{d^{3}y}{dx^{3}}}$. How many arbitrary constants does its general solution contain?',
    answer: 'Cubing both sides removes the radical: $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{6} = 1 + \\frac{d^{3}y}{dx^{3}}$. The highest-order derivative is $\\frac{d^{3}y}{dx^{3}}$, so the order is $3$; it appears to the first power, so the degree is $1$. The general solution of an equation of order $3$ contains $3$ arbitrary constants.',
    steps: [
      { step: 'Removes the radical to get $\\left(\\frac{d^{2}y}{dx^{2}}\\right)^{6} = 1 + \\frac{d^{3}y}{dx^{3}}$ and states order $3$, degree $1$', marks: 1 },
      { step: 'States that the general solution has $3$ arbitrary constants (equal to the order)', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-b03', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the particular solution of the differential equation $\\sqrt{1 - x^{2}}\\,\\frac{dy}{dx} = y^{2}$, $-1 < x < 1$, given that $y = 1$ when $x = 0$.',
    answer: 'Separating, $\\frac{dy}{y^{2}} = \\frac{dx}{\\sqrt{1 - x^{2}}}$. Integrating, $-\\frac{1}{y} = \\sin^{-1}x + C$. At $x = 0$, $y = 1$: $-1 = 0 + C$, so $C = -1$. Then $\\frac{1}{y} = 1 - \\sin^{-1}x$, and the particular solution is $y = \\frac{1}{1 - \\sin^{-1}x}$.',
    steps: [
      { step: 'Separates and integrates to $-\\frac{1}{y} = \\sin^{-1}x + C$', marks: 1 },
      { step: 'Finds $C = -1$ and states $y = \\frac{1}{1 - \\sin^{-1}x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-b04', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'The slope of the tangent at any point $(x, y)$, $x > 0$, of a curve is $\\frac{1 + y^{2}}{xy}$. Find the equation of the curve if it passes through the point $(1, \\sqrt{3})$.',
    answer: 'The slope condition gives $\\frac{dy}{dx} = \\frac{1 + y^{2}}{xy}$, so $\\frac{y\\,dy}{1 + y^{2}} = \\frac{dx}{x}$. Integrating, $\\frac{1}{2}\\log(1 + y^{2}) = \\log x + c$, so $1 + y^{2} = Kx^{2}$. At $(1, \\sqrt{3})$: $1 + 3 = K$, so $K = 4$. The curve is $1 + y^{2} = 4x^{2}$, i.e. $y^{2} = 4x^{2} - 1$ (a real curve for $x \\geq \\frac{1}{2}$).',
    steps: [
      { step: 'Separates and integrates to $1 + y^{2} = Kx^{2}$', marks: 1 },
      { step: 'Finds $K = 4$ and states $y^{2} = 4x^{2} - 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-b05', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $2xy\\frac{dy}{dx} = x^{2} + 3y^{2}$, $x > 0$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{x^{2} + 3y^{2}}{2xy}$ is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{1 + 3v^{2}}{2v}$, so $x\\frac{dv}{dx} = \\frac{1 + v^{2}}{2v}$. Separating, $\\frac{2v}{1 + v^{2}}\\,dv = \\frac{dx}{x}$, and integrating, $\\log(1 + v^{2}) = \\log x + c$, i.e. $1 + v^{2} = Kx$. Putting $v = \\frac{y}{x}$: $x^{2} + y^{2} = Kx^{3}$.',
    steps: [
      { step: 'Substitutes $y = vx$ and separates to $\\frac{2v}{1 + v^{2}}\\,dv = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates and back-substitutes to get $x^{2} + y^{2} = Kx^{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-b06', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the general solution of the differential equation $\\cos x\\,\\frac{dy}{dx} + y\\sin x = 1$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$.',
    answer: 'Dividing by $\\cos x$: $\\frac{dy}{dx} + (\\tan x)\\,y = \\sec x$. The integrating factor is $e^{\\int \\tan x\\,dx} = \\sec x$. Then $\\frac{d}{dx}(y\\sec x) = \\sec^{2}x$, so $y\\sec x = \\tan x + C$. The general solution is $y = \\sin x + C\\cos x$.',
    steps: [
      { step: 'Writes the standard form and finds the integrating factor $\\sec x$', marks: 1 },
      { step: 'Integrates to $y\\sec x = \\tan x + C$ and states $y = \\sin x + C\\cos x$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-de-r3-c01', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} = xe^{x}(1 + y)$, $y > -1$, given that $y = 0$ when $x = 0$.',
    answer: 'Separating, $\\frac{dy}{1 + y} = xe^{x}\\,dx$. By parts, $\\int xe^{x}\\,dx = xe^{x} - e^{x} = (x - 1)e^{x}$. Integrating, $\\log(1 + y) = (x - 1)e^{x} + C$. At $x = 0$, $y = 0$: $0 = -1 + C$, so $C = 1$. The particular solution is $\\log(1 + y) = (x - 1)e^{x} + 1$, i.e. $y = e^{(x - 1)e^{x} + 1} - 1$.',
    steps: [
      { step: 'Separates the variables to $\\frac{dy}{1 + y} = xe^{x}\\,dx$', marks: 1 },
      { step: 'Integrates the right side by parts to get $\\log(1 + y) = (x - 1)e^{x} + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c02', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $(x^{2} - 1)\\frac{dy}{dx} = y$, $x > 1$, $y > 0$, given that $y = 2$ when $x = 3$.',
    answer: 'Separating, $\\frac{dy}{y} = \\frac{dx}{x^{2} - 1}$. Since $\\frac{1}{x^{2} - 1} = \\frac{1}{2}\\left(\\frac{1}{x - 1} - \\frac{1}{x + 1}\\right)$, integrating gives $\\log y = \\frac{1}{2}\\log\\frac{x - 1}{x + 1} + c$, so $y^{2} = K\\,\\frac{x - 1}{x + 1}$. At $x = 3$, $y = 2$: $4 = K \\cdot \\frac{2}{4}$, so $K = 8$. The particular solution is $y^{2} = \\frac{8(x - 1)}{x + 1}$.',
    steps: [
      { step: 'Separates and resolves $\\frac{1}{x^{2} - 1}$ into partial fractions', marks: 1 },
      { step: 'Integrates to $y^{2} = K\\,\\frac{x - 1}{x + 1}$', marks: 1 },
      { step: 'Finds $K = 8$ and states $y^{2} = \\frac{8(x - 1)}{x + 1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c03', chapter: C, topic: 'Variable separable equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} = x\\tan^{-1}x$, given that $y = 1$ when $x = 0$.',
    answer: '$y = \\int x\\tan^{-1}x\\,dx$. By parts, taking $\\tan^{-1}x$ as the first function: $\\int x\\tan^{-1}x\\,dx = \\frac{x^{2}}{2}\\tan^{-1}x - \\frac{1}{2}\\int \\frac{x^{2}}{1 + x^{2}}\\,dx = \\frac{x^{2}}{2}\\tan^{-1}x - \\frac{1}{2}(x - \\tan^{-1}x) = \\frac{x^{2} + 1}{2}\\tan^{-1}x - \\frac{x}{2}$. So $y = \\frac{x^{2} + 1}{2}\\tan^{-1}x - \\frac{x}{2} + C$. At $x = 0$, $y = 1$: $C = 1$. The particular solution is $y = \\frac{x^{2} + 1}{2}\\tan^{-1}x - \\frac{x}{2} + 1$.',
    steps: [
      { step: 'Separates to $dy = x\\tan^{-1}x\\,dx$ and applies integration by parts', marks: 1 },
      { step: 'Evaluates $\\int \\frac{x^{2}}{1 + x^{2}}\\,dx = x - \\tan^{-1}x$ and obtains $y = \\frac{x^{2} + 1}{2}\\tan^{-1}x - \\frac{x}{2} + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c04', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $(3x + y)\\frac{dy}{dx} = x + 3y$, given that $y = 0$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{x + 3y}{3x + y}$ is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{1 + 3v}{3 + v}$, so $x\\frac{dv}{dx} = \\frac{1 - v^{2}}{3 + v}$. Separating, $\\frac{3 + v}{(1 - v)(1 + v)}\\,dv = \\frac{dx}{x}$, and $\\frac{3 + v}{(1 - v)(1 + v)} = \\frac{2}{1 - v} + \\frac{1}{1 + v}$. Integrating, $-2\\log|1 - v| + \\log|1 + v| = \\log x + c$, so $\\frac{1 + v}{(1 - v)^{2}} = Kx$. With $v = \\frac{y}{x}$: $\\frac{x(x + y)}{(x - y)^{2}} = Kx$, i.e. $x + y = K(x - y)^{2}$. At $(1, 0)$: $K = 1$. The particular solution is $x + y = (x - y)^{2}$.',
    steps: [
      { step: 'Substitutes $y = vx$ and reduces to $x\\frac{dv}{dx} = \\frac{1 - v^{2}}{3 + v}$', marks: 1 },
      { step: 'Separates, uses partial fractions $\\frac{2}{1 - v} + \\frac{1}{1 + v}$ and integrates to $x + y = K(x - y)^{2}$', marks: 1 },
      { step: 'Finds $K = 1$ and states $x + y = (x - y)^{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c05', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $(x^{2} - 2y^{2})\\,dx + 2xy\\,dy = 0$, $x > 0$, given that $y = 2$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{2y^{2} - x^{2}}{2xy}$ is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{2v^{2} - 1}{2v}$, so $x\\frac{dv}{dx} = -\\frac{1}{2v}$. Separating, $2v\\,dv = -\\frac{dx}{x}$. Integrating, $v^{2} = -\\log x + C$, i.e. $y^{2} = x^{2}(C - \\log x)$. At $(1, 2)$: $4 = C$. The particular solution is $y^{2} = x^{2}(4 - \\log x)$ (real for $0 < x \\leq e^{4}$).',
    steps: [
      { step: 'Substitutes $y = vx$ and reduces to $x\\frac{dv}{dx} = -\\frac{1}{2v}$', marks: 1 },
      { step: 'Separates and integrates to $y^{2} = x^{2}(C - \\log x)$', marks: 1 },
      { step: 'Finds $C = 4$ and states $y^{2} = x^{2}(4 - \\log x)$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c06', chapter: C, topic: 'Homogeneous differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the particular solution of the differential equation $(2x - y)\\,dx + (x + 2y)\\,dy = 0$, $x > 0$, given that $y = 1$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = \\frac{y - 2x}{x + 2y}$ is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = \\frac{v - 2}{1 + 2v}$, so $x\\frac{dv}{dx} = \\frac{v - 2 - v - 2v^{2}}{1 + 2v} = -\\frac{2(1 + v^{2})}{1 + 2v}$. Separating, $\\frac{1 + 2v}{1 + v^{2}}\\,dv = -\\frac{2\\,dx}{x}$. Integrating, $\\tan^{-1}v + \\log(1 + v^{2}) = -2\\log x + c$, so $\\tan^{-1}\\left(\\frac{y}{x}\\right) + \\log(x^{2} + y^{2}) = C$, because $\\log(1 + v^{2}) + 2\\log x = \\log(x^{2} + y^{2})$. At $(1, 1)$: $C = \\frac{\\pi}{4} + \\log 2$. The particular solution is $\\tan^{-1}\\left(\\frac{y}{x}\\right) + \\log(x^{2} + y^{2}) = \\frac{\\pi}{4} + \\log 2$.',
    steps: [
      { step: 'Substitutes $y = vx$ and reduces to $x\\frac{dv}{dx} = -\\frac{2(1 + v^{2})}{1 + 2v}$', marks: 1 },
      { step: 'Separates and integrates to $\\tan^{-1}v + \\log(1 + v^{2}) = -2\\log x + c$, then back-substitutes', marks: 1 },
      { step: 'Finds $C = \\frac{\\pi}{4} + \\log 2$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c07', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + \\frac{2y}{x} = \\frac{\\cos x}{x^{2}}$, $x > 0$, given that $y = 0$ when $x = \\frac{\\pi}{2}$.',
    answer: 'Linear with $P = \\frac{2}{x}$. Integrating factor $= e^{2\\log x} = x^{2}$. Then $\\frac{d}{dx}(x^{2}y) = x^{2} \\cdot \\frac{\\cos x}{x^{2}} = \\cos x$, so $x^{2}y = \\sin x + C$. At $x = \\frac{\\pi}{2}$, $y = 0$: $0 = 1 + C$, so $C = -1$. The particular solution is $y = \\frac{\\sin x - 1}{x^{2}}$.',
    steps: [
      { step: 'Finds the integrating factor $x^{2}$', marks: 1 },
      { step: 'Integrates to $x^{2}y = \\sin x + C$', marks: 1 },
      { step: 'Finds $C = -1$ and states $y = \\frac{\\sin x - 1}{x^{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c08', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the general solution of the differential equation $x\\frac{dy}{dx} - y = (x - 1)e^{x}$, $x > 0$.',
    answer: 'Dividing by $x$: $\\frac{dy}{dx} - \\frac{1}{x}y = \\frac{(x - 1)e^{x}}{x}$. Integrating factor $= e^{-\\log x} = \\frac{1}{x}$. Then $\\frac{d}{dx}\\left(\\frac{y}{x}\\right) = \\frac{(x - 1)e^{x}}{x^{2}} = e^{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}}\\right)$. Since $\\frac{d}{dx}\\left(\\frac{e^{x}}{x}\\right) = e^{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}}\\right)$, we get $\\frac{y}{x} = \\frac{e^{x}}{x} + C$. The general solution is $y = e^{x} + Cx$.',
    steps: [
      { step: 'Writes the standard form and finds the integrating factor $\\frac{1}{x}$', marks: 1 },
      { step: 'Integrates $e^{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}}\\right)$ using $\\int e^{x}[f(x) + f\'(x)]\\,dx = e^{x}f(x)$ with $f = \\frac{1}{x}$, or by parts', marks: 1 },
      { step: 'States $y = e^{x} + Cx$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c09', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the general solution of the differential equation $y\\,dx + (2x - y^{2})\\,dy = 0$, $y > 0$.',
    answer: 'Treat $x$ as the dependent variable: $\\frac{dx}{dy} = \\frac{y^{2} - 2x}{y}$, i.e. $\\frac{dx}{dy} + \\frac{2}{y}x = y$, linear in $x$ with $P_{1} = \\frac{2}{y}$. Integrating factor $= e^{2\\log y} = y^{2}$. Then $\\frac{d}{dy}(xy^{2}) = y^{3}$, so $xy^{2} = \\frac{y^{4}}{4} + C$. The general solution is $x = \\frac{y^{2}}{4} + \\frac{C}{y^{2}}$.',
    steps: [
      { step: 'Rewrites as $\\frac{dx}{dy} + \\frac{2}{y}x = y$, linear in $x$', marks: 1 },
      { step: 'Finds the integrating factor $y^{2}$', marks: 1 },
      { step: 'Integrates to $xy^{2} = \\frac{y^{4}}{4} + C$ and states $x = \\frac{y^{2}}{4} + \\frac{C}{y^{2}}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-c10', chapter: C, topic: 'Linear differential equations', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + y\\cot x = 2\\cos x$, $0 < x < \\pi$, given that $y = 2$ when $x = \\frac{\\pi}{2}$.',
    answer: 'Linear with $P = \\cot x$. Integrating factor $= e^{\\int \\cot x\\,dx} = \\sin x$. Then $\\frac{d}{dx}(y\\sin x) = 2\\sin x\\cos x = \\sin 2x$. Integrating, $y\\sin x = \\sin^{2}x + C$. At $x = \\frac{\\pi}{2}$, $y = 2$: $2 = 1 + C$, so $C = 1$. Then $y\\sin x = \\sin^{2}x + 1$, and the particular solution is $y = \\sin x + \\operatorname{cosec} x$.',
    steps: [
      { step: 'Finds the integrating factor $\\sin x$', marks: 1 },
      { step: 'Integrates $2\\sin x\\cos x$ to get $y\\sin x = \\sin^{2}x + C$', marks: 1 },
      { step: 'Finds $C = 1$ and states $y = \\sin x + \\operatorname{cosec} x$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-de-r3-d01', chapter: C, topic: 'Variable separable equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $x^{2}\\frac{dy}{dx} = (y - 1)(y - 2)$, $x > 0$, given that $y = 3$ when $x = 1$. Express $y$ in terms of $x$, and state the interval of $x$ containing $x = 1$ on which your solution is valid.',
    answer: 'Separating, $\\frac{dy}{(y - 1)(y - 2)} = \\frac{dx}{x^{2}}$. Partial fractions: $\\frac{1}{(y - 1)(y - 2)} = \\frac{1}{y - 2} - \\frac{1}{y - 1}$. Integrating, $\\log\\left|\\frac{y - 2}{y - 1}\\right| = -\\frac{1}{x} + c$. At $x = 1$, $y = 3$: $\\log\\frac{1}{2} = -1 + c$, so $c = 1 - \\log 2$. Hence $\\left|\\frac{y - 2}{y - 1}\\right| = \\frac{1}{2}e^{1 - 1/x}$, and the expression is positive at $(1, 3)$, so $\\frac{y - 2}{y - 1} = \\frac{1}{2}e^{1 - 1/x}$. Write $E = e^{1 - 1/x}$. Then $2(y - 2) = E(y - 1)$, so $y(2 - E) = 4 - E$. The particular solution is $y = \\frac{4 - e^{1 - 1/x}}{2 - e^{1 - 1/x}}$ (valid for $0 < x < \\frac{1}{1 - \\log 2}$, since the denominator $2 - e^{1 - 1/x}$ is positive and $y > 2$ only there; the solution is undefined at $x = \\frac{1}{1 - \\log 2} \\approx 3.26$).',
    steps: [
      { step: 'Separates the variables to $\\frac{dy}{(y - 1)(y - 2)} = \\frac{dx}{x^{2}}$', marks: 1 },
      { step: 'Resolves into partial fractions $\\frac{1}{y - 2} - \\frac{1}{y - 1}$', marks: 1 },
      { step: 'Integrates both sides to $\\log\\left|\\frac{y - 2}{y - 1}\\right| = -\\frac{1}{x} + c$', marks: 1 },
      { step: 'Uses $y(1) = 3$ to find $c = 1 - \\log 2$', marks: 1 },
      { step: 'Solves for $y$, states $y = \\frac{4 - e^{1 - 1/x}}{2 - e^{1 - 1/x}}$ and its interval of validity $0 < x < \\frac{1}{1 - \\log 2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d02', chapter: C, topic: 'Variable separable equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $ye^{y}\\frac{dy}{dx} = x\\log x$, $x > 0$, given that $y = 1$ when $x = 1$.',
    answer: 'Separating, $ye^{y}\\,dy = x\\log x\\,dx$. Left side by parts: $\\int ye^{y}\\,dy = ye^{y} - e^{y} = (y - 1)e^{y}$. Right side by parts: $\\int x\\log x\\,dx = \\frac{x^{2}}{2}\\log x - \\int \\frac{x}{2}\\,dx = \\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4}$. So $(y - 1)e^{y} = \\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4} + C$. At $x = 1$, $y = 1$: $0 = 0 - \\frac{1}{4} + C$, so $C = \\frac{1}{4}$. The particular solution is $(y - 1)e^{y} = \\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4} + \\frac{1}{4}$, i.e. $4(y - 1)e^{y} = 2x^{2}\\log x - x^{2} + 1$.',
    steps: [
      { step: 'Separates the variables to $ye^{y}\\,dy = x\\log x\\,dx$', marks: 1 },
      { step: 'Integrates the left side by parts to $(y - 1)e^{y}$', marks: 1 },
      { step: 'Integrates the right side by parts to $\\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4}$', marks: 1 },
      { step: 'Writes the general solution with the constant $C$', marks: 1 },
      { step: 'Uses $y(1) = 1$ to find $C = \\frac{1}{4}$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d03', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the differential equation $x\\frac{dy}{dx} = y + \\sqrt{y^{2} + 9x^{2}}$, $x > 0$, is homogeneous. Solve it, and find the particular solution given that $y = 4$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = F(x, y) = \\frac{y + \\sqrt{y^{2} + 9x^{2}}}{x}$ and $F(\\lambda x, \\lambda y) = \\frac{\\lambda y + \\lambda\\sqrt{y^{2} + 9x^{2}}}{\\lambda x} = F(x, y)$, so the equation is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v + \\sqrt{v^{2} + 9}$, so $\\frac{dv}{\\sqrt{v^{2} + 9}} = \\frac{dx}{x}$. Integrating, $\\log\\left(v + \\sqrt{v^{2} + 9}\\right) = \\log x + c$, so $v + \\sqrt{v^{2} + 9} = Kx$. With $v = \\frac{y}{x}$: $y + \\sqrt{y^{2} + 9x^{2}} = Kx^{2}$. At $(1, 4)$: $4 + 5 = K$, so $K = 9$. The particular solution is $y + \\sqrt{y^{2} + 9x^{2}} = 9x^{2}$, which simplifies to $y = \\frac{9x^{2} - 1}{2}$, valid for all $x > 0$ (here $\\sqrt{y^{2} + 9x^{2}} = \\frac{9x^{2} + 1}{2} > 0$).',
    steps: [
      { step: 'Shows $F(\\lambda x, \\lambda y) = F(x, y)$, so the equation is homogeneous', marks: 1 },
      { step: 'Substitutes $y = vx$ and separates to $\\frac{dv}{\\sqrt{v^{2} + 9}} = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates to $\\log\\left(v + \\sqrt{v^{2} + 9}\\right) = \\log x + c$', marks: 1 },
      { step: 'Back-substitutes to get $y + \\sqrt{y^{2} + 9x^{2}} = Kx^{2}$', marks: 1 },
      { step: 'Finds $K = 9$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d04', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $(x^{3} + 3xy^{2})\\,dx + (y^{3} + 3x^{2}y)\\,dy = 0$, given that $y = 1$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = -\\frac{x^{3} + 3xy^{2}}{y^{3} + 3x^{2}y}$, homogeneous of degree zero. Put $y = vx$: $v + x\\frac{dv}{dx} = -\\frac{1 + 3v^{2}}{v^{3} + 3v}$, so $x\\frac{dv}{dx} = -\\frac{1 + 3v^{2} + v^{4} + 3v^{2}}{v(v^{2} + 3)} = -\\frac{v^{4} + 6v^{2} + 1}{v(v^{2} + 3)}$. Separating, $\\frac{v(v^{2} + 3)}{v^{4} + 6v^{2} + 1}\\,dv = -\\frac{dx}{x}$. Since $\\frac{d}{dv}(v^{4} + 6v^{2} + 1) = 4v(v^{2} + 3)$, integrating gives $\\frac{1}{4}\\log(v^{4} + 6v^{2} + 1) = -\\log x + c$, so $x^{4}(v^{4} + 6v^{2} + 1) = K$. With $v = \\frac{y}{x}$, the general solution is $x^{4} + 6x^{2}y^{2} + y^{4} = K$. At $(1, 1)$: $K = 8$. The particular solution is $x^{4} + 6x^{2}y^{2} + y^{4} = 8$.',
    steps: [
      { step: 'Writes $\\frac{dy}{dx}$ as a function of $\\frac{y}{x}$ and substitutes $y = vx$', marks: 1 },
      { step: 'Simplifies to $x\\frac{dv}{dx} = -\\frac{v^{4} + 6v^{2} + 1}{v(v^{2} + 3)}$ and separates', marks: 1 },
      { step: 'Recognises that the numerator is a multiple of the derivative of the denominator and integrates', marks: 1 },
      { step: 'Back-substitutes to get $x^{4} + 6x^{2}y^{2} + y^{4} = K$', marks: 1 },
      { step: 'Finds $K = 8$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d05', chapter: C, topic: 'Homogeneous differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the differential equation $x\\frac{dy}{dx} = y\\left(1 + \\log\\frac{y}{x}\\right)$, $x > 0$, $y > 0$, is homogeneous. Solve it, and find the particular solution given that $y = e^{2}$ when $x = 1$.',
    answer: 'Here $\\frac{dy}{dx} = F(x, y) = \\frac{y}{x}\\left(1 + \\log\\frac{y}{x}\\right)$ depends only on $\\frac{y}{x}$, so $F(\\lambda x, \\lambda y) = F(x, y)$ and the equation is homogeneous. Put $y = vx$: $v + x\\frac{dv}{dx} = v(1 + \\log v)$, so $x\\frac{dv}{dx} = v\\log v$. Separating, $\\frac{dv}{v\\log v} = \\frac{dx}{x}$. Putting $u = \\log v$, the left side integrates to $\\log|\\log v|$. So $\\log|\\log v| = \\log x + c$, i.e. $\\log v = Kx$, and the general solution is $\\log\\frac{y}{x} = Kx$. At $x = 1$, $y = e^{2}$: $\\log e^{2} = 2 = K$. Then $\\frac{y}{x} = e^{2x}$, and the particular solution is $y = xe^{2x}$.',
    steps: [
      { step: 'Shows that $F$ depends only on $\\frac{y}{x}$ (so $F(\\lambda x, \\lambda y) = F(x, y)$)', marks: 1 },
      { step: 'Substitutes $y = vx$ and separates to $\\frac{dv}{v\\log v} = \\frac{dx}{x}$', marks: 1 },
      { step: 'Integrates the left side using $u = \\log v$ to get $\\log|\\log v| = \\log x + c$', marks: 1 },
      { step: 'States the general solution $\\log\\frac{y}{x} = Kx$', marks: 1 },
      { step: 'Finds $K = 2$ and states $y = xe^{2x}$', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d06', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + y\\sec x = \\tan x$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, given that $y = 2$ when $x = 0$.',
    answer: 'Linear with $P = \\sec x$, $Q = \\tan x$. Integrating factor $= e^{\\int \\sec x\\,dx} = e^{\\log(\\sec x + \\tan x)} = \\sec x + \\tan x$. Then $y(\\sec x + \\tan x) = \\int \\tan x(\\sec x + \\tan x)\\,dx = \\int \\sec x\\tan x\\,dx + \\int (\\sec^{2}x - 1)\\,dx = \\sec x + \\tan x - x + C$. So the general solution is $y = 1 + \\frac{C - x}{\\sec x + \\tan x}$. At $x = 0$, $y = 2$: $2 = 1 + C$, so $C = 1$. The particular solution is $y = 1 + \\frac{1 - x}{\\sec x + \\tan x}$, i.e. $y = 1 + \\frac{(1 - x)\\cos x}{1 + \\sin x}$.',
    steps: [
      { step: 'Identifies $P = \\sec x$ and $Q = \\tan x$', marks: 1 },
      { step: 'Finds the integrating factor $\\sec x + \\tan x$', marks: 1 },
      { step: 'Evaluates $\\int \\tan x(\\sec x + \\tan x)\\,dx = \\sec x + \\tan x - x$', marks: 1 },
      { step: 'States the general solution $y = 1 + \\frac{C - x}{\\sec x + \\tan x}$', marks: 1 },
      { step: 'Finds $C = 1$ and states the particular solution', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d07', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'hard', marks: 5, competency: true,
    text: 'A fund earns interest continuously and also has money withdrawn continuously, so that its balance $A$ (in rupees) after $t$ years satisfies $\\frac{dA}{dt} = \\frac{A}{20} - 1000$. The balance at $t = 0$ is $30000$ rupees. Solve the differential equation to find $A$ in terms of $t$. Hence find the balance after $20\\log 3$ years, and show that the fund can never be exhausted.',
    answer: 'Write $\\frac{dA}{dt} - \\frac{1}{20}A = -1000$, linear with $P = -\\frac{1}{20}$. Integrating factor $= e^{-t/20}$. Then $\\frac{d}{dt}\\left(Ae^{-t/20}\\right) = -1000e^{-t/20}$, so $Ae^{-t/20} = 20000e^{-t/20} + C$, i.e. $A = 20000 + Ce^{t/20}$. At $t = 0$, $A = 30000$: $C = 10000$. So $A = 20000 + 10000e^{t/20}$. At $t = 20\\log 3$: $e^{t/20} = 3$, so $A = 20000 + 30000 = 50000$ rupees. Since $e^{t/20} \\geq 1$ for $t \\geq 0$, $A \\geq 30000 > 0$ for all $t \\geq 0$ (indeed $A$ keeps increasing), so the fund is never exhausted.',
    steps: [
      { step: 'Writes the standard form $\\frac{dA}{dt} - \\frac{A}{20} = -1000$ and finds the integrating factor $e^{-t/20}$', marks: 1 },
      { step: 'Integrates to $Ae^{-t/20} = 20000e^{-t/20} + C$', marks: 1 },
      { step: 'Uses $A(0) = 30000$ to get $A = 20000 + 10000e^{t/20}$', marks: 1 },
      { step: 'Finds $A = 50000$ at $t = 20\\log 3$', marks: 1 },
      { step: 'Argues from $e^{t/20} \\geq 1$ that $A$ stays above $30000$, so the fund is never exhausted', marks: 1 },
    ],
  },
  {
    id: 'c12-de-r3-d08', chapter: C, topic: 'Linear differential equations', type: 'long', complexity: 'medium', marks: 5,
    text: 'Find the particular solution of the differential equation $\\frac{dy}{dx} + 2y\\tan x = \\sin x$, $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$, given that $y = 1$ when $x = \\frac{\\pi}{3}$.',
    answer: 'Linear with $P = 2\\tan x$, $Q = \\sin x$. Integrating factor $= e^{2\\int \\tan x\\,dx} = e^{2\\log\\sec x} = \\sec^{2}x$. Then $\\frac{d}{dx}(y\\sec^{2}x) = \\sin x\\sec^{2}x = \\sec x\\tan x$, so $y\\sec^{2}x = \\sec x + C$. The general solution is $y = \\cos x + C\\cos^{2}x$. At $x = \\frac{\\pi}{3}$, $y = 1$: $1 = \\frac{1}{2} + \\frac{C}{4}$, so $C = 2$. The particular solution is $y = \\cos x + 2\\cos^{2}x$.',
    steps: [
      { step: 'Identifies $P = 2\\tan x$ and $Q = \\sin x$', marks: 1 },
      { step: 'Finds the integrating factor $\\sec^{2}x$', marks: 1 },
      { step: 'Integrates $\\sec x\\tan x$ to get $y\\sec^{2}x = \\sec x + C$', marks: 1 },
      { step: 'States the general solution $y = \\cos x + C\\cos^{2}x$', marks: 1 },
      { step: 'Finds $C = 2$ and states $y = \\cos x + 2\\cos^{2}x$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-de-r3-e01', chapter: C, topic: 'Variable separable equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A fish farm has a pond that can support at most $1000$ fish. The farm manager models the number of fish $P$ at time $t$ (in months) by $\\frac{dP}{dt} = kP(1000 - P)$, where $k$ is a positive constant and $0 < P < 1000$. At the start there are $250$ fish, and after $1$ month there are $500$ fish.',
    answer: '(i) $\\frac{P}{1000 - P} = Ae^{1000kt}$. (ii) $A = \\frac{1}{3}$. (iii) $e^{1000k} = 3$; $750$ fish after $2$ months. OR: $900$ fish after $3$ months.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Separate the variables and integrate, using $\\frac{1}{P(1000 - P)} = \\frac{1}{1000}\\left(\\frac{1}{P} + \\frac{1}{1000 - P}\\right)$, to show that $\\frac{P}{1000 - P} = Ae^{1000kt}$ for some constant $A > 0$.',
        answer: '$\\frac{dP}{P(1000 - P)} = k\\,dt$, so $\\frac{1}{1000}\\left[\\log P - \\log(1000 - P)\\right] = kt + c$ (as $0 < P < 1000$). Hence $\\log\\frac{P}{1000 - P} = 1000kt + 1000c$, and $\\frac{P}{1000 - P} = Ae^{1000kt}$ where $A = e^{1000c} > 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Use the initial number of fish to find $A$.',
        answer: 'At $t = 0$, $P = 250$: $A = \\frac{250}{750} = \\frac{1}{3}$. So $\\frac{P}{1000 - P} = \\frac{1}{3}e^{1000kt}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $e^{1000k}$, and the number of fish after $2$ months.\nOR\nFind $e^{1000k}$, and the number of fish after $3$ months.',
        answer: 'At $t = 1$, $P = 500$: $\\frac{500}{500} = 1 = \\frac{1}{3}e^{1000k}$, so $e^{1000k} = 3$ (1 mark). At $t = 2$: $\\frac{P}{1000 - P} = \\frac{1}{3}\\cdot 9 = 3$, so $P = 3000 - 3P$ and $P = 750$ fish (1 mark).\nOR: $e^{1000k} = 3$ as above (1 mark). At $t = 3$: $\\frac{P}{1000 - P} = \\frac{1}{3}\\cdot 27 = 9$, so $P = 9000 - 9P$ and $P = 900$ fish (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-r3-e02', chapter: C, topic: 'Homogeneous differential equations', type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A robotic vacuum cleaner is programmed to move in the upper half of a floor plan (with $y > 0$) so that at each point $(x, y)$ of its path the slope of the path is $\\frac{2xy}{x^{2} - y^{2}}$. So its path satisfies $\\frac{dy}{dx} = \\frac{2xy}{x^{2} - y^{2}}$.',
    answer: '(i) $F(\\lambda x, \\lambda y) = F(x, y)$, so it is homogeneous. (ii) $x\\frac{dv}{dx} = \\frac{v(1 + v^{2})}{1 - v^{2}}$. (iii) $x^{2} + y^{2} = 5y$. OR: $x^{2} + y^{2} = 10y$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that this differential equation is homogeneous.',
        answer: 'Let $F(x, y) = \\frac{2xy}{x^{2} - y^{2}}$. Then $F(\\lambda x, \\lambda y) = \\frac{2\\lambda^{2}xy}{\\lambda^{2}(x^{2} - y^{2})} = F(x, y)$, so $F$ is homogeneous of degree zero and the equation is homogeneous.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Put $y = vx$ and show that the equation becomes $x\\frac{dv}{dx} = \\frac{v(1 + v^{2})}{1 - v^{2}}$.',
        answer: '$v + x\\frac{dv}{dx} = \\frac{2v}{1 - v^{2}}$, so $x\\frac{dv}{dx} = \\frac{2v - v + v^{3}}{1 - v^{2}} = \\frac{v(1 + v^{2})}{1 - v^{2}}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using $\\frac{1 - v^{2}}{v(1 + v^{2})} = \\frac{1}{v} - \\frac{2v}{1 + v^{2}}$, solve the equation and find the path that passes through $(2, 1)$.\nOR\nUsing the same identity, find the path that passes through $(3, 1)$.',
        answer: 'Separating, $\\left(\\frac{1}{v} - \\frac{2v}{1 + v^{2}}\\right)dv = \\frac{dx}{x}$. Integrating, $\\log v - \\log(1 + v^{2}) = \\log x + c$, so $\\frac{v}{1 + v^{2}} = Kx$. With $v = \\frac{y}{x}$ this is $\\frac{xy}{x^{2} + y^{2}} = Kx$, i.e. $x^{2} + y^{2} = Cy$ (1 mark). Through $(2, 1)$: $5 = C$, so the path is $x^{2} + y^{2} = 5y$ (1 mark).\nOR: General solution $x^{2} + y^{2} = Cy$ as above (1 mark). Through $(3, 1)$: $10 = C$, so the path is $x^{2} + y^{2} = 10y$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-r3-e03', chapter: C, topic: 'Linear differential equations', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A skydiver jumps from a hovering helicopter at time $t = 0$ with zero speed. The air resistance is modelled as proportional to speed, so that the speed $v$ (in m/s) at time $t$ seconds satisfies $\\frac{dv}{dt} + \\frac{v}{2} = 10$, with $v = 0$ when $t = 0$.',
    answer: '(i) Integrating factor $e^{t/2}$. (ii) $v = 20 + Ce^{-t/2}$. (iii) $v = 20(1 - e^{-t/2})$; $10$ m/s at $t = 2\\log 2$. OR: $t = 4\\log 2$ seconds.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the integrating factor of this linear differential equation.',
        answer: 'Here $P = \\frac{1}{2}$, so the integrating factor is $e^{\\int \\frac{1}{2}\\,dt} = e^{t/2}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the general solution.',
        answer: '$\\frac{d}{dt}\\left(ve^{t/2}\\right) = 10e^{t/2}$, so $ve^{t/2} = 20e^{t/2} + C$ and $v = 20 + Ce^{-t/2}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $v$ in terms of $t$, and the speed of the skydiver when $t = 2\\log 2$ seconds.\nOR\nFind $v$ in terms of $t$, and the time at which the speed reaches $15$ m/s.',
        answer: 'At $t = 0$, $v = 0$: $0 = 20 + C$, so $C = -20$ and $v = 20(1 - e^{-t/2})$ (1 mark). At $t = 2\\log 2$: $e^{-t/2} = e^{-\\log 2} = \\frac{1}{2}$, so $v = 20 \\times \\frac{1}{2} = 10$ m/s (1 mark).\nOR: $v = 20(1 - e^{-t/2})$ as above (1 mark). For $v = 15$: $1 - e^{-t/2} = \\frac{3}{4}$, so $e^{-t/2} = \\frac{1}{4}$ and $t = 2\\log 4 = 4\\log 2$ seconds (1 mark).',
      },
    ],
  },
  {
    id: 'c12-de-r3-e04', chapter: C, topic: 'General and particular solutions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a shock absorber, the piston is struck and then slows down because the oil resists its motion with a force proportional to its speed. The speed $v$ (in cm/s) of the piston at time $t$ seconds satisfies the differential equation $\\frac{dv}{dt} + 4v = 0$, where $v > 0$.',
    answer: '(i) Order $1$, degree $1$. (ii) $v = Ce^{-4t}$. (iii) $v = 6e^{-4t}$; $\\frac{3}{2}$ cm/s at $t = \\frac{1}{2}\\log 2$. OR: $t = \\frac{1}{4}\\log 3$ seconds.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order and the degree of the differential equation.',
        answer: 'The highest-order derivative is $\\frac{dv}{dt}$, so the order is $1$; it occurs to the first power, so the degree is $1$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Solve the differential equation by separating the variables to find the general solution.',
        answer: '$\\frac{dv}{v} = -4\\,dt$. Integrating, $\\log v = -4t + c$, so $v = Ce^{-4t}$ where $C = e^{c} > 0$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The speed immediately after the strike ($t = 0$) is $6$ cm/s. Find $v$ in terms of $t$, and the speed at $t = \\frac{1}{2}\\log 2$ seconds.\nOR\nUnder the same condition, find $v$ in terms of $t$, and the time at which the speed falls to $2$ cm/s.',
        answer: 'At $t = 0$, $v = 6$: $C = 6$, so $v = 6e^{-4t}$ (1 mark). At $t = \\frac{1}{2}\\log 2$: $e^{-4t} = e^{-2\\log 2} = \\frac{1}{4}$, so $v = \\frac{6}{4} = \\frac{3}{2}$ cm/s (1 mark).\nOR: $v = 6e^{-4t}$ as above (1 mark). For $v = 2$: $e^{-4t} = \\frac{1}{3}$, so $4t = \\log 3$ and $t = \\frac{1}{4}\\log 3$ seconds (1 mark).',
      },
    ],
  },
];
