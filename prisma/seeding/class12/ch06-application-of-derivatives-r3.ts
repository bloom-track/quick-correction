import type { Class12Question } from './types.js';

const C = 'Application of Derivatives';

const AR_OPTS = [
  `Both A and R are true, and R is the correct explanation of A.`,
  `Both A and R are true, but R is not the correct explanation of A.`,
  `A is true, but R is false.`,
  `A is false, but R is true.`,
];

export const CH06_AOD_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-aod-r3-a01', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: `Water is pumped into a cylindrical tank of radius $2$ m at the rate of $8\\pi$ m$^3$/min. The water level in the tank is rising at the rate of`,
    options: [`$1$ m/min`, `$2$ m/min`, `$4$ m/min`, `$8\\pi$ m/min`],
    answer: `Correct option: B) $2$ m/min. With $V = \\pi r^2 h = 4\\pi h$, we get $\\frac{dV}{dt} = 4\\pi \\frac{dh}{dt}$, so $8\\pi = 4\\pi \\frac{dh}{dt}$ and $\\frac{dh}{dt} = 2$ m/min.`,
  },
  {
    id: 'c12-aod-r3-a02', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: `A spherical bubble expands so that, at one instant, its volume is increasing at the same numerical rate as its radius. At that instant the radius is`,
    options: [`$\\frac{1}{4\\pi}$`, `$\\frac{1}{2\\pi}$`, `$\\frac{1}{2\\sqrt{\\pi}}$`, `$\\frac{1}{\\sqrt{\\pi}}$`],
    answer: `Correct option: C) $\\frac{1}{2\\sqrt{\\pi}}$. $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$. Setting $\\frac{dV}{dt} = \\frac{dr}{dt}$ (non-zero) gives $4\\pi r^2 = 1$, so $r = \\frac{1}{2\\sqrt{\\pi}}$. ($\\frac{1}{4\\pi}$ is $r^2$, not $r$.)`,
  },
  {
    id: 'c12-aod-r3-a03', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: `A point moves on the curve $y = 2x^2 - 3x$ so that its $y$-coordinate changes $5$ times as fast as its $x$-coordinate. The point is`,
    options: [`$(1, -1)$`, `$(2, 2)$`, `$(3, 9)$`, `$(-2, 14)$`],
    answer: `Correct option: B) $(2, 2)$. $\\frac{dy}{dt} = (4x - 3)\\frac{dx}{dt}$, so we need $4x - 3 = 5$, giving $x = 2$ and $y = 8 - 6 = 2$. The other points give slopes $1$, $9$ and $-11$.`,
  },
  {
    id: 'c12-aod-r3-a04', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The side of an equilateral triangle is increasing at $2$ cm/s. The rate at which its area is increasing when the side is $6$ cm is`,
    options: [`$3\\sqrt{3}$ cm$^2$/s`, `$6\\sqrt{3}$ cm$^2$/s`, `$12\\sqrt{3}$ cm$^2$/s`, `$6$ cm$^2$/s`],
    answer: `Correct option: B) $6\\sqrt{3}$ cm$^2$/s. $A = \\frac{\\sqrt{3}}{4}s^2$, so $\\frac{dA}{dt} = \\frac{\\sqrt{3}}{2}s\\frac{ds}{dt} = \\frac{\\sqrt{3}}{2}(6)(2) = 6\\sqrt{3}$.`,
  },
  {
    id: 'c12-aod-r3-a05', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The rate of change of the area of a circle with respect to its circumference, when the radius is $5$ cm, is`,
    options: [`$10\\pi$ cm`, `$5\\pi$ cm`, `$5$ cm`, `$\\frac{5}{2}$ cm`],
    answer: `Correct option: C) $5$ cm. With $A = \\frac{C^2}{4\\pi}$, $\\frac{dA}{dC} = \\frac{C}{2\\pi} = r = 5$. ($10\\pi$ is the rate with respect to the radius.)`,
  },
  {
    id: 'c12-aod-r3-a06', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The function $f(x) = \\frac{x}{x^2 + 1}$ is strictly increasing on`,
    options: [`$(-\\infty, -1)$`, `$(0, \\infty)$`, `$(-1, 1)$`, `$(1, \\infty)$`],
    answer: `Correct option: C) $(-1, 1)$. $f'(x) = \\frac{1 - x^2}{(x^2 + 1)^2}$, which is positive exactly when $|x| < 1$.`,
  },
  {
    id: 'c12-aod-r3-a07', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: `On the interval $\\left(0, \\frac{\\pi}{2}\\right)$, the function $f(x) = \\sin x + \\cos x$ is strictly increasing on`,
    options: [`$\\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$`, `$\\left(0, \\frac{\\pi}{4}\\right)$`, `$\\left(0, \\frac{\\pi}{2}\\right)$`, `$\\left(\\frac{\\pi}{6}, \\frac{\\pi}{3}\\right)$`],
    answer: `Correct option: B) $\\left(0, \\frac{\\pi}{4}\\right)$. $f'(x) = \\cos x - \\sin x > 0$ exactly when $\\tan x < 1$, i.e. for $0 < x < \\frac{\\pi}{4}$ in this interval. On $\\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$ the function is decreasing.`,
  },
  {
    id: 'c12-aod-r3-a08', chapter: C, topic: 'Increasing and decreasing functions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): The function $f(x) = \\frac{1}{x}$ is strictly decreasing on its whole domain $\\mathbb{R} \\setminus \\{0\\}$.\nReason (R): $f'(x) = -\\frac{1}{x^2} < 0$ for every $x \\neq 0$.`,
    options: AR_OPTS,
    answer: `Correct option: D) A is false, but R is true. R is true because $-\\frac{1}{x^2}$ is negative for every $x \\neq 0$. But the domain is not an interval: $f(-1) = -1 < f(1) = 1$, so $f$ is not decreasing on the whole domain. It is decreasing separately on $(-\\infty, 0)$ and on $(0, \\infty)$.`,
  },
  {
    id: 'c12-aod-r3-a09', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The function $f(x) = x - \\log x$, $x > 0$, is strictly decreasing on`,
    options: [`$(0, \\infty)$`, `$(1, \\infty)$`, `$(0, 1)$`, `$(-\\infty, 1)$`],
    answer: `Correct option: C) $(0, 1)$. $f'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}$, which is negative for $0 < x < 1$ and positive for $x > 1$.`,
  },
  {
    id: 'c12-aod-r3-a10', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The function $f(x) = \\tan^{-1} x - x$ on $\\mathbb{R}$ is`,
    options: [`strictly decreasing on $\\mathbb{R}$`, `strictly increasing on $\\mathbb{R}$`, `strictly decreasing on $(0, \\infty)$ only`, `neither increasing nor decreasing`],
    answer: `Correct option: A) strictly decreasing on $\\mathbb{R}$. $f'(x) = \\frac{1}{1 + x^2} - 1 = -\\frac{x^2}{1 + x^2} \\leq 0$, and it is zero only at the single point $x = 0$, so $f$ is strictly decreasing on all of $\\mathbb{R}$.`,
  },
  {
    id: 'c12-aod-r3-a11', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The minimum value of $f(x) = e^{x} + e^{-x}$, $x \\in \\mathbb{R}$, is`,
    options: [`$1$`, `$2$`, `$0$`, `$e + \\frac{1}{e}$`],
    answer: `Correct option: B) $2$. $f'(x) = e^{x} - e^{-x} = 0$ gives $x = 0$, and $f''(0) = 2 > 0$, so the minimum value is $f(0) = 2$. ($e + \\frac{1}{e}$ is the value at $x = 1$.)`,
  },
  {
    id: 'c12-aod-r3-a12', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The maximum value of $f(x) = \\frac{\\log x}{x}$, $x > 0$, is`,
    options: [`$e$`, `$1$`, `$\\frac{1}{e}$`, `$\\frac{1}{e^2}$`],
    answer: `Correct option: C) $\\frac{1}{e}$. $f'(x) = \\frac{1 - \\log x}{x^2}$ is positive for $x < e$ and negative for $x > e$, so the maximum occurs at $x = e$, where $f(e) = \\frac{1}{e}$.`,
  },
  {
    id: 'c12-aod-r3-a13', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The minimum value of $f(x) = x^2 + \\frac{16}{x}$ for $x > 0$ is`,
    options: [`$8$`, `$12$`, `$17$`, `$20$`],
    answer: `Correct option: B) $12$. $f'(x) = 2x - \\frac{16}{x^2} = 0$ gives $x^3 = 8$, so $x = 2$. Since $f''(x) = 2 + \\frac{32}{x^3} > 0$, it is a minimum, and $f(2) = 4 + 8 = 12$. ($17$ and $20$ are the values at $x = 1$ and $x = 4$.)`,
  },
  {
    id: 'c12-aod-r3-a14', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The number of points of local extremum (local maximum or local minimum) of $f(x) = x^4 - 4x^3$ is`,
    options: [`$0$`, `$1$`, `$2$`, `$3$`],
    answer: `Correct option: B) $1$. $f'(x) = 4x^2(x - 3)$. It is negative on both sides of $x = 0$ (no sign change, so no extremum there) and changes from negative to positive at $x = 3$, which is the only local minimum.`,
  },
  {
    id: 'c12-aod-r3-a15', chapter: C, topic: 'Maxima and minima', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): The function $f(x) = |x|$ has a local minimum at $x = 0$.\nReason (R): $f'(0) = 0$.`,
    options: AR_OPTS,
    answer: `Correct option: C) A is true, but R is false. $f(x) = |x| \\geq 0 = f(0)$ for all $x$, so $x = 0$ is a point of (absolute and local) minimum. But $f$ is not differentiable at $0$ (the left and right slopes are $-1$ and $1$), so $f'(0)$ does not exist and R is false.`,
  },
  {
    id: 'c12-aod-r3-a16', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'hard', marks: 1,
    text: `The absolute maximum value of $f(x) = x^2 e^{-x}$ on the interval $[0, 3]$ is`,
    options: [`$\\frac{9}{e^3}$`, `$0$`, `$\\frac{1}{e}$`, `$\\frac{4}{e^2}$`],
    answer: `Correct option: D) $\\frac{4}{e^2}$. $f'(x) = e^{-x}(2x - x^2) = 0$ gives $x = 0$ or $x = 2$. Comparing $f(0) = 0$, $f(2) = \\frac{4}{e^2} \\approx 0.54$ and $f(3) = \\frac{9}{e^3} \\approx 0.45$, the largest is $\\frac{4}{e^2}$.`,
  },
  {
    id: 'c12-aod-r3-a17', chapter: C, topic: 'Optimisation word problems', type: 'mcq', complexity: 'easy', marks: 1,
    text: `Among all rectangles of area $49$ cm$^2$, the least possible perimeter is`,
    options: [`$14$ cm`, `$28$ cm`, `$49$ cm`, `$56$ cm`],
    answer: `Correct option: B) $28$ cm. With sides $x$ and $\\frac{49}{x}$, $P = 2\\left(x + \\frac{49}{x}\\right)$ and $P' = 2\\left(1 - \\frac{49}{x^2}\\right) = 0$ gives $x = 7$ (a square). Then $P = 4 \\times 7 = 28$.`,
  },
  {
    id: 'c12-aod-r3-a18', chapter: C, topic: 'Optimisation word problems', type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $x + 2y = 5$, the minimum value of $x^2 + y^2$ is`,
    options: [`$25$`, `$\\frac{25}{4}$`, `$\\sqrt{5}$`, `$5$`],
    answer: `Correct option: D) $5$. Put $y = \\frac{5 - x}{2}$, so $g(x) = x^2 + \\frac{(5 - x)^2}{4}$ and $g'(x) = 2x - \\frac{5 - x}{2} = 0$ gives $x = 1$, $y = 2$ with $g'' > 0$. The minimum is $1 + 4 = 5$. ($25$ and $\\frac{25}{4}$ are the values at the axis intercepts; $\\sqrt{5}$ is the distance, not its square.)`,
  },
  {
    id: 'c12-aod-r3-a19', chapter: C, topic: 'Optimisation word problems', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): Among all rectangles of perimeter $20$ cm, the square has the greatest area.\nReason (R): If one side is $x$ cm, the area is $x(10 - x)$, which is greatest at $x = 5$.`,
    options: AR_OPTS,
    answer: `Correct option: A) Both are true and R explains A. The sides are $x$ and $10 - x$, so $A = 10x - x^2$ and $A' = 10 - 2x = 0$ at $x = 5$ with $A'' = -2 < 0$. At $x = 5$ both sides are $5$ cm, a square, so R gives exactly the reason for A.`,
  },
  {
    id: 'c12-aod-r3-a20', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The function $f(x) = \\cos 3x$ is strictly decreasing on`,
    options: [`$\\left(0, \\frac{\\pi}{3}\\right)$`, `$\\left(\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right)$`, `$\\left(0, \\frac{2\\pi}{3}\\right)$`, `$\\left(\\frac{\\pi}{6}, \\frac{\\pi}{2}\\right)$`],
    answer: `Correct option: A) $\\left(0, \\frac{\\pi}{3}\\right)$. $f'(x) = -3\\sin 3x < 0$ exactly when $\\sin 3x > 0$, i.e. $0 < 3x < \\pi$. On $\\left(\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right)$, $\\sin 3x < 0$ and $f$ is increasing; the other two intervals contain a point where the sign changes.`,
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-aod-r3-b01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: `Sand falls onto level ground at the rate of $18$ cm$^3$/s and forms a conical heap whose height is always $3$ times its base radius. How fast is the height of the heap rising when the height is $6$ cm?`,
    answer: `Since $h = 3r$, the radius is $r = \\frac{h}{3}$ and $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h^3}{27}$. Then $\\frac{dV}{dt} = \\frac{\\pi h^2}{9}\\frac{dh}{dt}$. Putting $\\frac{dV}{dt} = 18$ and $h = 6$: $18 = \\frac{\\pi \\cdot 36}{9}\\frac{dh}{dt} = 4\\pi \\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{9}{2\\pi}$ cm/s. The height is rising at $\\frac{9}{2\\pi}$ cm/s (about $1.43$ cm/s).`,
    steps: [
      { step: `Writes the volume in terms of $h$ alone: $V = \\frac{\\pi h^3}{27}$.`, marks: 1 },
      { step: `Differentiates with respect to $t$, substitutes $\\frac{dV}{dt} = 18$, $h = 6$ and gets $\\frac{dh}{dt} = \\frac{9}{2\\pi}$ cm/s.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-b02', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: `Find the intervals in which $f(x) = \\frac{x^2}{x - 1}$, $x \\neq 1$, is strictly increasing or strictly decreasing.`,
    answer: `$f'(x) = \\frac{2x(x - 1) - x^2}{(x - 1)^2} = \\frac{x(x - 2)}{(x - 1)^2}$. The denominator is positive for $x \\neq 1$, so the sign is that of $x(x - 2)$: positive for $x < 0$ and $x > 2$, negative for $0 < x < 2$. Hence $f$ is strictly increasing on $(-\\infty, 0)$ and $(2, \\infty)$, and strictly decreasing on $(0, 1)$ and $(1, 2)$.`,
    steps: [
      { step: `Differentiates correctly: $f'(x) = \\frac{x(x - 2)}{(x - 1)^2}$.`, marks: 1 },
      { step: `Studies the sign (excluding $x = 1$) and states all four intervals correctly.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-b03', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'easy', marks: 2,
    text: `Find the intervals in which $f(x) = \\frac{e^{x}}{x}$, $x \\neq 0$, is strictly increasing or strictly decreasing.`,
    answer: `$f'(x) = \\frac{xe^{x} - e^{x}}{x^2} = \\frac{e^{x}(x - 1)}{x^2}$. Since $e^{x} > 0$ and $x^2 > 0$ for $x \\neq 0$, the sign of $f'$ is the sign of $x - 1$. So $f$ is strictly increasing on $(1, \\infty)$ and strictly decreasing on $(-\\infty, 0)$ and on $(0, 1)$.`,
    steps: [
      { step: `Quotient rule: $f'(x) = \\frac{e^{x}(x - 1)}{x^2}$.`, marks: 1 },
      { step: `Sign analysis giving increasing on $(1, \\infty)$ and decreasing on $(-\\infty, 0)$ and $(0, 1)$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-b04', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'hard', marks: 2,
    text: `Find the local maximum and local minimum values of $f(x) = x + 2\\sin x$ on the interval $(0, 2\\pi)$.`,
    answer: `$f'(x) = 1 + 2\\cos x = 0$ gives $\\cos x = -\\frac{1}{2}$, so $x = \\frac{2\\pi}{3}$ or $x = \\frac{4\\pi}{3}$. Now $f''(x) = -2\\sin x$. At $x = \\frac{2\\pi}{3}$, $f'' = -\\sqrt{3} < 0$, a local maximum with value $\\frac{2\\pi}{3} + \\sqrt{3}$. At $x = \\frac{4\\pi}{3}$, $f'' = \\sqrt{3} > 0$, a local minimum with value $\\frac{4\\pi}{3} - \\sqrt{3}$.`,
    steps: [
      { step: `Finds the critical points $x = \\frac{2\\pi}{3}$ and $x = \\frac{4\\pi}{3}$ from $f'(x) = 0$.`, marks: 1 },
      { step: `Uses $f''$ to classify them and states the local maximum $\\frac{2\\pi}{3} + \\sqrt{3}$ and local minimum $\\frac{4\\pi}{3} - \\sqrt{3}$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-b05', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = x^4 - 8x^2 + 3$ on $[-3, 3]$.`,
    answer: `$f'(x) = 4x^3 - 16x = 4x(x - 2)(x + 2) = 0$ gives $x = 0, 2, -2$, all inside the interval. Values: $f(-3) = 12$, $f(-2) = -13$, $f(0) = 3$, $f(2) = -13$, $f(3) = 12$. So the absolute maximum value is $12$ (at $x = \\pm 3$) and the absolute minimum value is $-13$ (at $x = \\pm 2$).`,
    steps: [
      { step: `Finds the critical points $x = 0, \\pm 2$ from $f'(x) = 0$.`, marks: 1 },
      { step: `Evaluates $f$ at the critical points and the end points $\\pm 3$, and states absolute maximum $12$ and absolute minimum $-13$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-b06', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 2,
    text: `Among all rectangles whose diagonal is $10$ cm long, show that the square has the greatest area and find that area.`,
    answer: `Let one side be $x$; the other is $\\sqrt{100 - x^2}$, so the area is $A = x\\sqrt{100 - x^2}$. $A$ is greatest when $A^2 = 100x^2 - x^4$ is greatest. Let $g(x) = 100x^2 - x^4$; then $g'(x) = 200x - 4x^3 = 0$ gives $x^2 = 50$. Since $g''(x) = 200 - 12x^2 = -400 < 0$ at $x^2 = 50$, this is a maximum. Then the other side is $\\sqrt{100 - 50} = \\sqrt{50} = x$, so the rectangle is a square of side $5\\sqrt{2}$ cm, and the greatest area is $50$ cm$^2$.`,
    steps: [
      { step: `Expresses the area (or its square) as a function of one side: $A^2 = 100x^2 - x^4$.`, marks: 1 },
      { step: `Finds $x^2 = 50$, checks it is a maximum, shows the other side equals it (square) and gets area $50$ cm$^2$.`, marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-aod-r3-c01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 3,
    text: `A solid metal cylinder is heated. At a certain instant its radius is $5$ cm and its height is $20$ cm, the radius is increasing at $0.01$ cm/s and the height at $0.02$ cm/s. Find the rate at which its volume is increasing at that instant.`,
    answer: `$V = \\pi r^2 h$, so by the product rule $\\frac{dV}{dt} = \\pi\\left(2rh\\frac{dr}{dt} + r^2\\frac{dh}{dt}\\right)$. Substituting $r = 5$, $h = 20$, $\\frac{dr}{dt} = 0.01$, $\\frac{dh}{dt} = 0.02$: $\\frac{dV}{dt} = \\pi(2 \\cdot 5 \\cdot 20 \\cdot 0.01 + 25 \\cdot 0.02) = \\pi(2 + 0.5) = 2.5\\pi$. The volume is increasing at $2.5\\pi$ cm$^3$/s (about $7.85$ cm$^3$/s).`,
    steps: [
      { step: `Writes $V = \\pi r^2 h$.`, marks: 1 },
      { step: `Differentiates with respect to $t$ using the product and chain rules, as $\\pi\\left(2rh\\frac{dr}{dt} + r^2\\frac{dh}{dt}\\right)$.`, marks: 1 },
      { step: `Substitutes the given values and gets $2.5\\pi$ cm$^3$/s.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c02', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 3,
    text: `A point $P$ moves in the first quadrant along the parabola $y^2 = 12x$ with its $x$-coordinate increasing at $2$ units/s. (a) Find the point at which its $y$-coordinate is increasing at the same rate as its $x$-coordinate. (b) At that point, find the rate at which its distance from the origin is increasing.`,
    answer: `(a) Differentiating $y^2 = 12x$: $2y\\frac{dy}{dt} = 12\\frac{dx}{dt}$, so $\\frac{dy}{dt} = \\frac{6}{y}\\frac{dx}{dt}$. Equal rates need $\\frac{6}{y} = 1$, so $y = 6$ and $x = \\frac{36}{12} = 3$. The point is $(3, 6)$. (b) With $D^2 = x^2 + y^2$, $D\\frac{dD}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt} = 3(2) + 6(2) = 18$ (here $\\frac{dy}{dt} = 2$). Since $D = \\sqrt{9 + 36} = 3\\sqrt{5}$, $\\frac{dD}{dt} = \\frac{18}{3\\sqrt{5}} = \\frac{6}{\\sqrt{5}}$ units/s.`,
    steps: [
      { step: `Differentiates the curve with respect to $t$: $\\frac{dy}{dt} = \\frac{6}{y}\\frac{dx}{dt}$.`, marks: 1 },
      { step: `Sets the two rates equal to get $y = 6$, $x = 3$, the point $(3, 6)$.`, marks: 1 },
      { step: `Uses $D^2 = x^2 + y^2$ to get $\\frac{dD}{dt} = \\frac{6}{\\sqrt{5}}$ units/s.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c03', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the intervals in which $f(x) = x\\sqrt{4 - x^2}$, $-2 < x < 2$, is strictly increasing or strictly decreasing.`,
    answer: `$f'(x) = \\sqrt{4 - x^2} - \\frac{x^2}{\\sqrt{4 - x^2}} = \\frac{4 - 2x^2}{\\sqrt{4 - x^2}} = \\frac{2(2 - x^2)}{\\sqrt{4 - x^2}}$. The denominator is positive on $(-2, 2)$, and $2 - x^2 = 0$ at $x = \\pm\\sqrt{2}$. $f'(x) > 0$ when $-\\sqrt{2} < x < \\sqrt{2}$ and $f'(x) < 0$ when $\\sqrt{2} < |x| < 2$. So $f$ is strictly increasing on $(-\\sqrt{2}, \\sqrt{2})$ and strictly decreasing on $(-2, -\\sqrt{2})$ and $(\\sqrt{2}, 2)$.`,
    steps: [
      { step: `Differentiates using the product rule and simplifies to $\\frac{2(2 - x^2)}{\\sqrt{4 - x^2}}$.`, marks: 1 },
      { step: `Finds the turning points $x = \\pm\\sqrt{2}$.`, marks: 1 },
      { step: `Checks the sign in the three intervals and states increasing and decreasing intervals correctly.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c04', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'hard', marks: 3,
    text: `Using the idea of increasing functions, prove that $\\tan x > x + \\frac{x^3}{3}$ for $0 < x < \\frac{\\pi}{2}$.`,
    answer: `First let $h(x) = \\tan x - x$. Then $h'(x) = \\sec^2 x - 1 = \\tan^2 x > 0$ on $\\left(0, \\frac{\\pi}{2}\\right)$, so $h$ is strictly increasing there; since $h(0) = 0$, we get $\\tan x > x > 0$. Now let $g(x) = \\tan x - x - \\frac{x^3}{3}$. Then $g'(x) = \\sec^2 x - 1 - x^2 = \\tan^2 x - x^2 = (\\tan x - x)(\\tan x + x) > 0$ because $\\tan x > x > 0$. So $g$ is strictly increasing on $\\left[0, \\frac{\\pi}{2}\\right)$ and $g(0) = 0$. Hence $g(x) > 0$, i.e. $\\tan x > x + \\frac{x^3}{3}$.`,
    steps: [
      { step: `Shows $\\tan x > x$ using $h(x) = \\tan x - x$ with $h' = \\tan^2 x > 0$ and $h(0) = 0$.`, marks: 1 },
      { step: `Defines $g(x) = \\tan x - x - \\frac{x^3}{3}$ and gets $g'(x) = (\\tan x - x)(\\tan x + x)$.`, marks: 1 },
      { step: `Shows $g' > 0$, so $g$ is increasing with $g(0) = 0$, and concludes the inequality.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c05', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the points of local maximum and local minimum of $f(x) = xe^{-x^2/2}$ and the corresponding values, using the second derivative test.`,
    answer: `$f'(x) = e^{-x^2/2} - x^2 e^{-x^2/2} = e^{-x^2/2}(1 - x^2) = 0$ gives $x = \\pm 1$. $f''(x) = e^{-x^2/2}(x^3 - 3x)$. At $x = 1$: $f''(1) = -2e^{-1/2} < 0$, so $x = 1$ is a point of local maximum, with value $f(1) = e^{-1/2} = \\frac{1}{\\sqrt{e}}$. At $x = -1$: $f''(-1) = 2e^{-1/2} > 0$, so $x = -1$ is a point of local minimum, with value $f(-1) = -\\frac{1}{\\sqrt{e}}$.`,
    steps: [
      { step: `Finds $f'(x) = e^{-x^2/2}(1 - x^2)$ and the critical points $x = \\pm 1$.`, marks: 1 },
      { step: `Finds $f''(x) = e^{-x^2/2}(x^3 - 3x)$ and uses its sign at $x = 1$ and $x = -1$ to classify the points.`, marks: 1 },
      { step: `States the values: local maximum $\\frac{1}{\\sqrt{e}}$ at $x = 1$, local minimum $-\\frac{1}{\\sqrt{e}}$ at $x = -1$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c06', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = 3x^4 - 8x^3 + 6x^2$ on the interval $[-1, 2]$.`,
    answer: `$f'(x) = 12x^3 - 24x^2 + 12x = 12x(x - 1)^2 = 0$ gives $x = 0$ and $x = 1$, both in $[-1, 2]$. Values: $f(-1) = 3 + 8 + 6 = 17$, $f(0) = 0$, $f(1) = 3 - 8 + 6 = 1$, $f(2) = 48 - 64 + 24 = 8$. So the absolute maximum value is $17$ (at $x = -1$) and the absolute minimum value is $0$ (at $x = 0$). (At $x = 1$, $f'$ does not change sign, so it is not an extreme point.)`,
    steps: [
      { step: `Differentiates and factorises $f'(x) = 12x(x - 1)^2$ to get critical points $x = 0, 1$.`, marks: 1 },
      { step: `Evaluates $f$ at $-1, 0, 1, 2$ correctly.`, marks: 1 },
      { step: `Compares and states absolute maximum $17$ and absolute minimum $0$ with the points.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c07', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the local maximum and local minimum values of $f(x) = \\sin 2x - x$ on the interval $(0, \\pi)$.`,
    answer: `$f'(x) = 2\\cos 2x - 1 = 0$ gives $\\cos 2x = \\frac{1}{2}$. For $0 < 2x < 2\\pi$ this means $2x = \\frac{\\pi}{3}$ or $\\frac{5\\pi}{3}$, so $x = \\frac{\\pi}{6}$ or $x = \\frac{5\\pi}{6}$. $f''(x) = -4\\sin 2x$. At $x = \\frac{\\pi}{6}$: $f'' = -2\\sqrt{3} < 0$, a local maximum with value $\\frac{\\sqrt{3}}{2} - \\frac{\\pi}{6}$. At $x = \\frac{5\\pi}{6}$: $f'' = 2\\sqrt{3} > 0$, a local minimum with value $-\\frac{\\sqrt{3}}{2} - \\frac{5\\pi}{6}$.`,
    steps: [
      { step: `Solves $f'(x) = 0$ to get $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$ within $(0, \\pi)$.`, marks: 1 },
      { step: `Finds $f''(x) = -4\\sin 2x$ and classifies the two points.`, marks: 1 },
      { step: `States the local maximum $\\frac{\\sqrt{3}}{2} - \\frac{\\pi}{6}$ and local minimum $-\\frac{\\sqrt{3}}{2} - \\frac{5\\pi}{6}$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c08', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'hard', marks: 3,
    text: `A right circular cylinder is inscribed in a sphere of radius $6$ cm. Find the height of the cylinder for which its volume is greatest, and the greatest volume.`,
    answer: `Let the height of the cylinder be $h$ and its radius $r$. The axis passes through the centre of the sphere and the rim of the cylinder lies on the sphere, so $r^2 + \\frac{h^2}{4} = 36$. Then $V = \\pi r^2 h = \\pi\\left(36h - \\frac{h^3}{4}\\right)$. $\\frac{dV}{dh} = \\pi\\left(36 - \\frac{3h^2}{4}\\right) = 0$ gives $h^2 = 48$, so $h = 4\\sqrt{3}$. $\\frac{d^2V}{dh^2} = -\\frac{3\\pi h}{2} < 0$, so $V$ is maximum. Then $r^2 = 36 - 12 = 24$ and $V = \\pi(24)(4\\sqrt{3}) = 96\\sqrt{3}\\pi$. The height is $4\\sqrt{3}$ cm and the greatest volume is $96\\sqrt{3}\\pi$ cm$^3$.`,
    steps: [
      { step: `Relates $r$ and $h$ ($r^2 + \\frac{h^2}{4} = 36$) and writes $V$ as a function of $h$.`, marks: 1 },
      { step: `Solves $\\frac{dV}{dh} = 0$ to get $h = 4\\sqrt{3}$ and confirms a maximum by the second derivative.`, marks: 1 },
      { step: `Finds $r^2 = 24$ and the greatest volume $96\\sqrt{3}\\pi$ cm$^3$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c09', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the points on the parabola $y^2 = 8x$ that are nearest to the point $(6, 0)$, and the least distance.`,
    answer: `Let $P(x, y)$ be on the parabola, $x = \\frac{y^2}{8}$. The square of the distance to $(6, 0)$ is $g(y) = \\left(\\frac{y^2}{8} - 6\\right)^2 + y^2$. $g'(y) = \\frac{y}{2}\\left(\\frac{y^2}{8} - 6\\right) + 2y = \\frac{y(y^2 - 16)}{16} = 0$ gives $y = 0, 4, -4$. $g''(y) = \\frac{3y^2 - 16}{16}$: at $y = \\pm 4$, $g'' = 2 > 0$ (minimum); at $y = 0$, $g'' = -1 < 0$ (a local maximum of the distance, with $g(0) = 36$). At $y = \\pm 4$, $x = 2$ and $g = (2 - 6)^2 + 16 = 32$. The nearest points are $(2, 4)$ and $(2, -4)$, and the least distance is $\\sqrt{32} = 4\\sqrt{2}$.`,
    steps: [
      { step: `Writes the squared distance as a function of one variable, e.g. $g(y) = \\left(\\frac{y^2}{8} - 6\\right)^2 + y^2$.`, marks: 1 },
      { step: `Finds $g'(y) = \\frac{y(y^2 - 16)}{16}$ and the critical values $y = 0, \\pm 4$.`, marks: 1 },
      { step: `Rejects $y = 0$ (a local maximum), confirms $y = \\pm 4$ as minima, and gives the points $(2, \\pm 4)$ and least distance $4\\sqrt{2}$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-c10', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 3,
    text: `An open cylindrical tank (no lid) is to hold $125\\pi$ cm$^3$ of water. Find its radius and height so that the least amount of sheet metal is used, and find that least surface area.`,
    answer: `Let the radius be $r$ and the height $h$. $\\pi r^2 h = 125\\pi$ gives $h = \\frac{125}{r^2}$. The sheet metal is the base plus the curved side: $S = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{250\\pi}{r}$. $\\frac{dS}{dr} = 2\\pi r - \\frac{250\\pi}{r^2} = 0$ gives $r^3 = 125$, $r = 5$. $\\frac{d^2S}{dr^2} = 2\\pi + \\frac{500\\pi}{r^3} > 0$, so $S$ is minimum. Then $h = \\frac{125}{25} = 5$, and $S = 25\\pi + 50\\pi = 75\\pi$. The radius and height are both $5$ cm and the least surface area is $75\\pi$ cm$^2$.`,
    steps: [
      { step: `Eliminates $h$ using the volume and writes $S = \\pi r^2 + \\frac{250\\pi}{r}$ (open top, so one circular end only).`, marks: 1 },
      { step: `Solves $\\frac{dS}{dr} = 0$ to get $r = 5$ and checks the second derivative is positive.`, marks: 1 },
      { step: `Finds $h = 5$ cm and the least surface area $75\\pi$ cm$^2$.`, marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-aod-r3-d01', chapter: C, topic: 'Rate of change', type: 'long', complexity: 'medium', marks: 5,
    text: `A $13$ m ladder leans against a vertical wall on level ground. The foot of the ladder is pulled away from the wall at $2$ m/s. At the instant when the foot is $5$ m from the wall, find (a) the rate at which the top of the ladder is sliding down the wall, (b) the rate at which the area of the triangle formed by the ladder, wall and ground is changing, and (c) the rate at which the angle between the ladder and the ground is changing.`,
    answer: `Let the foot be $x$ m from the wall and the top $y$ m up the wall, so $x^2 + y^2 = 169$. When $x = 5$, $y = 12$, and $\\frac{dx}{dt} = 2$. (a) Differentiating, $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$, so $\\frac{dy}{dt} = -\\frac{5 \\cdot 2}{12} = -\\frac{5}{6}$: the top is sliding down at $\\frac{5}{6}$ m/s. (b) $A = \\frac{1}{2}xy$, so $\\frac{dA}{dt} = \\frac{1}{2}\\left(x\\frac{dy}{dt} + y\\frac{dx}{dt}\\right) = \\frac{1}{2}\\left(5\\left(-\\frac{5}{6}\\right) + 12(2)\\right) = \\frac{1}{2}\\cdot\\frac{119}{6} = \\frac{119}{12}$: the area is increasing at $\\frac{119}{12}$ m$^2$/s. (c) With $\\cos\\theta = \\frac{x}{13}$, $-\\sin\\theta\\frac{d\\theta}{dt} = \\frac{1}{13}\\frac{dx}{dt}$. Since $\\sin\\theta = \\frac{12}{13}$, $\\frac{d\\theta}{dt} = -\\frac{2/13}{12/13} = -\\frac{1}{6}$: the angle is decreasing at $\\frac{1}{6}$ rad/s.`,
    steps: [
      { step: `Sets up $x^2 + y^2 = 169$ and finds $y = 12$ when $x = 5$.`, marks: 1 },
      { step: `Part (a): differentiates and gets $\\frac{dy}{dt} = -\\frac{5}{6}$ m/s (sliding down at $\\frac{5}{6}$ m/s).`, marks: 1 },
      { step: `Part (b): writes $A = \\frac{1}{2}xy$ and differentiates with the product rule.`, marks: 1 },
      { step: `Part (b): substitutes to get $\\frac{119}{12}$ m$^2$/s.`, marks: 1 },
      { step: `Part (c): uses $\\cos\\theta = \\frac{x}{13}$ and gets $\\frac{d\\theta}{dt} = -\\frac{1}{6}$ rad/s.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d02', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'hard', marks: 5,
    text: `Let $f(x) = x^3 - 3x + 1$. (a) Find the intervals in which $f$ is strictly increasing or strictly decreasing. (b) Find the local maximum and local minimum values. (c) Find the absolute maximum and absolute minimum values of $f$ on $[-2, 2]$ and the points where they occur.`,
    answer: `(a) $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$. $f' > 0$ for $x < -1$ and $x > 1$; $f' < 0$ for $-1 < x < 1$. So $f$ is strictly increasing on $(-\\infty, -1)$ and $(1, \\infty)$, and strictly decreasing on $(-1, 1)$. (b) $f$ changes from increasing to decreasing at $x = -1$, giving a local maximum value $f(-1) = -1 + 3 + 1 = 3$. It changes from decreasing to increasing at $x = 1$, giving a local minimum value $f(1) = 1 - 3 + 1 = -1$. (c) The candidates are the critical points $x = \\pm 1$ and the end points $x = \\pm 2$. $f(-2) = -8 + 6 + 1 = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 8 - 6 + 1 = 3$. Comparing, the absolute maximum value is $3$, attained at $x = -1$ and $x = 2$, and the absolute minimum value is $-1$, attained at $x = -2$ and $x = 1$.`,
    steps: [
      { step: `Finds $f'(x) = 3(x - 1)(x + 1)$ and the critical points $x = \\pm 1$.`, marks: 1 },
      { step: `States the intervals of increase and decrease correctly.`, marks: 1 },
      { step: `Finds the local maximum value $3$ at $x = -1$ and local minimum value $-1$ at $x = 1$.`, marks: 1 },
      { step: `Evaluates $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$.`, marks: 1 },
      { step: `Compares: absolute maximum $3$ at $x = -1, 2$ and absolute minimum $-1$ at $x = -2, 1$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d03', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'medium', marks: 5,
    text: `For $f(x) = x^2 e^{-x^2}$, find the intervals in which $f$ is strictly increasing or strictly decreasing, and find its local maximum and local minimum values. Hence show that $x^2 e^{-x^2} \\leq \\frac{1}{e}$ for every real $x$.`,
    answer: `$f'(x) = 2xe^{-x^2} - 2x^3 e^{-x^2} = 2xe^{-x^2}(1 - x^2) = -2x(x - 1)(x + 1)e^{-x^2}$. The factor $e^{-x^2}$ is always positive, so the sign comes from $-2x(x - 1)(x + 1)$. Critical points: $x = -1, 0, 1$. For $x < -1$: positive. For $-1 < x < 0$: negative. For $0 < x < 1$: positive. For $x > 1$: negative. So $f$ is strictly increasing on $(-\\infty, -1)$ and $(0, 1)$, and strictly decreasing on $(-1, 0)$ and $(1, \\infty)$. $f'$ changes from $+$ to $-$ at $x = \\pm 1$: local maximum value $f(\\pm 1) = \\frac{1}{e}$. It changes from $-$ to $+$ at $x = 0$: local minimum value $f(0) = 0$. For the inequality: on $[0, \\infty)$, $f$ increases up to $x = 1$ and decreases afterwards, so $f(x) \\leq f(1) = \\frac{1}{e}$ for $x \\geq 0$. Since $f(-x) = f(x)$, the same bound holds for $x < 0$. Hence $x^2 e^{-x^2} \\leq \\frac{1}{e}$ for all real $x$, with equality only at $x = \\pm 1$.`,
    steps: [
      { step: `Differentiates: $f'(x) = 2xe^{-x^2}(1 - x^2)$.`, marks: 1 },
      { step: `Finds the critical points $x = -1, 0, 1$.`, marks: 1 },
      { step: `Studies the sign of $f'$ and states the increasing and decreasing intervals correctly.`, marks: 1 },
      { step: `Identifies local maximum value $\\frac{1}{e}$ at $x = \\pm 1$ and local minimum value $0$ at $x = 0$.`, marks: 1 },
      { step: `Uses the monotonic behaviour on $[0, \\infty)$ and the evenness of $f$ to show $f(x) \\leq \\frac{1}{e}$ for all real $x$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d04', chapter: C, topic: 'Maxima and minima', type: 'long', complexity: 'hard', marks: 5,
    text: `The function $f(x) = px + \\frac{q}{x}$, $x \\neq 0$, has a local minimum at $x = 2$, and the local minimum value is $8$. Find $p$ and $q$. Using the second derivative test, verify the minimum at $x = 2$, and then find the local maximum value of $f$ and the point where it occurs. Explain briefly why the local maximum value is smaller than the local minimum value.`,
    answer: `$f'(x) = p - \\frac{q}{x^2}$. A local minimum at $x = 2$ needs $f'(2) = 0$: $p = \\frac{q}{4}$, i.e. $q = 4p$. The minimum value is $f(2) = 2p + \\frac{q}{2} = 2p + 2p = 4p = 8$, so $p = 2$ and $q = 8$. Thus $f(x) = 2x + \\frac{8}{x}$ and $f'(x) = 2 - \\frac{8}{x^2}$. $f''(x) = \\frac{16}{x^3}$. At $x = 2$: $f''(2) = 2 > 0$, so $x = 2$ is a local minimum with value $8$. The other critical point is $x = -2$ (from $x^2 = 4$). $f''(-2) = -2 < 0$, so $x = -2$ is a local maximum, with value $f(-2) = -4 - 4 = -8$. The local maximum value $-8$ is smaller than the local minimum value $8$ because the function is not defined at $x = 0$ and its graph has two separate branches: on $x > 0$ the values are all at least $8$, and on $x < 0$ they are all at most $-8$. A local maximum or minimum only compares values near the point, so a local maximum can lie below a local minimum.`,
    steps: [
      { step: `Uses $f'(2) = 0$ to get $q = 4p$.`, marks: 1 },
      { step: `Uses $f(2) = 8$ to get $p = 2$ and $q = 8$.`, marks: 1 },
      { step: `Finds $f''(x) = \\frac{16}{x^3}$ and verifies $x = 2$ is a local minimum.`, marks: 1 },
      { step: `Finds the other critical point $x = -2$ and shows it is a local maximum with value $-8$.`, marks: 1 },
      { step: `Explains that the function has two separate branches (not defined at $0$), so local values need not be ordered like this.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d05', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: `A right circular cone is to be built around (circumscribing) a sphere of radius $3$ cm, so that the sphere touches the base and the curved surface of the cone. Show that the volume of the cone is $V = \\frac{3\\pi h^2}{h - 6}$, where $h$ cm is the height of the cone, and find the height and the base radius for which the volume is least. Find the least volume.`,
    answer: `Let the cone have height $h$ and base radius $R$. Take the axial section: apex $A$, base centre $O$, base end $B$. The sphere's centre $C$ lies on $AO$ with $OC = 3$ (it touches the base), so $AC = h - 3$. The sphere touches the slant side $AB$ at $T$ with $CT = 3$. Triangles $ATC$ and $AOB$ are similar (common angle at $A$, right angles at $T$ and $O$), so $\\frac{CT}{OB} = \\frac{AC}{AB}$, i.e. $\\frac{3}{R} = \\frac{h - 3}{\\sqrt{h^2 + R^2}}$. Squaring: $9(h^2 + R^2) = R^2(h - 3)^2$, so $9h^2 = R^2(h^2 - 6h)$ and $R^2 = \\frac{9h}{h - 6}$ (with $h > 6$). Then $V = \\frac{1}{3}\\pi R^2 h = \\frac{3\\pi h^2}{h - 6}$. $\\frac{dV}{dh} = 3\\pi\\cdot\\frac{2h(h - 6) - h^2}{(h - 6)^2} = \\frac{3\\pi h(h - 12)}{(h - 6)^2}$. This is $0$ at $h = 12$, negative for $6 < h < 12$ and positive for $h > 12$, so $V$ is least at $h = 12$. Then $R^2 = \\frac{9 \\cdot 12}{6} = 18$, so $R = 3\\sqrt{2}$, and $V = \\frac{3\\pi \\cdot 144}{6} = 72\\pi$. The cone has height $12$ cm and base radius $3\\sqrt{2}$ cm, and the least volume is $72\\pi$ cm$^3$.`,
    steps: [
      { step: `Sets up the axial section and uses similar triangles to relate $R$ and $h$.`, marks: 1 },
      { step: `Obtains $R^2 = \\frac{9h}{h - 6}$ and hence $V = \\frac{3\\pi h^2}{h - 6}$.`, marks: 1 },
      { step: `Differentiates to get $\\frac{dV}{dh} = \\frac{3\\pi h(h - 12)}{(h - 6)^2}$ and solves for $h = 12$.`, marks: 1 },
      { step: `Justifies a minimum (sign change of $\\frac{dV}{dh}$ or second derivative).`, marks: 1 },
      { step: `Finds $R = 3\\sqrt{2}$ cm and the least volume $72\\pi$ cm$^3$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d06', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'medium', marks: 5,
    text: `A right circular cone has base radius $9$ cm and height $15$ cm. A right circular cylinder is inscribed in the cone with its axis along the cone's axis and its base on the cone's base. Find the radius and height of the cylinder of greatest volume, and the greatest volume. Show that this volume is $\\frac{4}{9}$ of the volume of the cone.`,
    answer: `Let the cylinder have radius $r$ and height $y$. In the axial section, the top rim of the cylinder lies on the slant side of the cone, so by similar triangles $\\frac{y}{15} = \\frac{9 - r}{9}$, giving $y = 15\\left(1 - \\frac{r}{9}\\right) = 15 - \\frac{5r}{3}$. The volume is $V = \\pi r^2 y = \\pi\\left(15r^2 - \\frac{5r^3}{3}\\right)$. $\\frac{dV}{dr} = \\pi(30r - 5r^2) = 5\\pi r(6 - r) = 0$ gives $r = 6$ (as $r > 0$). $\\frac{d^2V}{dr^2} = \\pi(30 - 10r) = -30\\pi < 0$ at $r = 6$, so $V$ is a maximum. Then $y = 15 - 10 = 5$ and $V = \\pi(36)(5) = 180\\pi$. The cone's volume is $\\frac{1}{3}\\pi(81)(15) = 405\\pi$, and $\\frac{180\\pi}{405\\pi} = \\frac{4}{9}$. So the cylinder has radius $6$ cm, height $5$ cm, greatest volume $180\\pi$ cm$^3$, which is $\\frac{4}{9}$ of the cone's volume.`,
    steps: [
      { step: `Uses similar triangles to get $y = 15 - \\frac{5r}{3}$.`, marks: 1 },
      { step: `Writes $V = \\pi\\left(15r^2 - \\frac{5r^3}{3}\\right)$.`, marks: 1 },
      { step: `Solves $\\frac{dV}{dr} = 0$ to get $r = 6$.`, marks: 1 },
      { step: `Verifies a maximum by the second derivative and finds $y = 5$ and $V = 180\\pi$.`, marks: 1 },
      { step: `Computes the cone's volume $405\\pi$ and shows the ratio is $\\frac{4}{9}$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d07', chapter: C, topic: 'Maxima and minima', type: 'long', complexity: 'medium', marks: 5,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = \\sin x + \\frac{1}{2}\\sin 2x$ on $[0, \\pi]$, using the second derivative test for the interior critical point, and state where each value occurs.`,
    answer: `$f'(x) = \\cos x + \\cos 2x = \\cos x + 2\\cos^2 x - 1 = (2\\cos x - 1)(\\cos x + 1)$. In $[0, \\pi]$, $\\cos x + 1 = 0$ only at the end point $x = \\pi$, and $2\\cos x - 1 = 0$ gives $x = \\frac{\\pi}{3}$. So the only critical point inside the interval is $x = \\frac{\\pi}{3}$. $f''(x) = -\\sin x - 2\\sin 2x$, so $f''\\left(\\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2} - \\sqrt{3} = -\\frac{3\\sqrt{3}}{2} < 0$: a local maximum. Values: $f\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{4}$, $f(0) = 0$, $f(\\pi) = 0$. Comparing, the absolute maximum value is $\\frac{3\\sqrt{3}}{4}$ at $x = \\frac{\\pi}{3}$, and the absolute minimum value is $0$, attained at both end points $x = 0$ and $x = \\pi$.`,
    steps: [
      { step: `Differentiates and factorises $f'(x) = (2\\cos x - 1)(\\cos x + 1)$.`, marks: 1 },
      { step: `Finds the critical point $x = \\frac{\\pi}{3}$ in the interior (noting $\\cos x = -1$ gives only the end point $\\pi$).`, marks: 1 },
      { step: `Uses $f''\\left(\\frac{\\pi}{3}\\right) < 0$ to show a local maximum.`, marks: 1 },
      { step: `Evaluates $f$ at $\\frac{\\pi}{3}$, $0$ and $\\pi$.`, marks: 1 },
      { step: `States absolute maximum $\\frac{3\\sqrt{3}}{4}$ at $\\frac{\\pi}{3}$ and absolute minimum $0$ at $0$ and $\\pi$.`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r3-d08', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: `A ladder rests on level ground, passes just over the top of a fence $1$ m high, and leans against a high vertical wall of a building behind the fence. The fence is parallel to the wall and $8$ m away from it. Let $\\theta$ be the angle the ladder makes with the ground. Express the length $L$ of the ladder in terms of $\\theta$, and find the length of the shortest ladder that can be used. (Treat the ladder and fence as thin.)`,
    answer: `The part of the ladder from the ground to the top of the fence has vertical rise $1$ m, so its length is $\\frac{1}{\\sin\\theta}$. The part from the fence top to the wall covers a horizontal distance of $8$ m, so its length is $\\frac{8}{\\cos\\theta}$. Hence $L(\\theta) = \\frac{1}{\\sin\\theta} + \\frac{8}{\\cos\\theta}$ for $0 < \\theta < \\frac{\\pi}{2}$. $\\frac{dL}{d\\theta} = -\\frac{\\cos\\theta}{\\sin^2\\theta} + \\frac{8\\sin\\theta}{\\cos^2\\theta} = \\frac{8\\sin^3\\theta - \\cos^3\\theta}{\\sin^2\\theta\\cos^2\\theta}$. Setting this to $0$ gives $\\tan^3\\theta = \\frac{1}{8}$, so $\\tan\\theta = \\frac{1}{2}$. For $\\tan\\theta < \\frac{1}{2}$ the derivative is negative and for $\\tan\\theta > \\frac{1}{2}$ it is positive, so $L$ is least at $\\tan\\theta = \\frac{1}{2}$. Then $\\sin\\theta = \\frac{1}{\\sqrt{5}}$ and $\\cos\\theta = \\frac{2}{\\sqrt{5}}$, and $L = \\sqrt{5} + \\frac{8\\sqrt{5}}{2} = \\sqrt{5} + 4\\sqrt{5} = 5\\sqrt{5}$. The shortest ladder is $5\\sqrt{5}$ m (about $11.18$ m).`,
    steps: [
      { step: `Expresses the ladder length as $L(\\theta) = \\frac{1}{\\sin\\theta} + \\frac{8}{\\cos\\theta}$.`, marks: 1 },
      { step: `Differentiates $L$ with respect to $\\theta$ correctly.`, marks: 1 },
      { step: `Solves $\\frac{dL}{d\\theta} = 0$ to get $\\tan\\theta = \\frac{1}{2}$.`, marks: 1 },
      { step: `Justifies that this gives a minimum (sign change or second derivative).`, marks: 1 },
      { step: `Finds $\\sin\\theta$, $\\cos\\theta$ and the shortest length $5\\sqrt{5}$ m.`, marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-aod-r3-e01', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A rectangular rubber sheet is being stretched on a testing machine. Its length $l$ cm increases at the steady rate of $3$ cm/s while its width $w$ cm decreases at the steady rate of $1$ cm/s. At a certain instant, which we take as $t = 0$, the length is $24$ cm and the width is $10$ cm.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Find the rate at which the area of the sheet is changing at $t = 0$.`,
        answer: `$A = lw$, so $\\frac{dA}{dt} = w\\frac{dl}{dt} + l\\frac{dw}{dt} = 10(3) + 24(-1) = 6$. The area is increasing at $6$ cm$^2$/s.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `Find the rate at which the perimeter of the sheet is changing at $t = 0$.`,
        answer: `$P = 2(l + w)$, so $\\frac{dP}{dt} = 2(3 - 1) = 4$. The perimeter is increasing at $4$ cm/s.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Find the rate at which the length of a diagonal of the sheet is changing at $t = 0$. OR After how many seconds from $t = 0$ does the area of the sheet stop increasing?`,
        answer: `Diagonal: $D^2 = l^2 + w^2$, so $D\\frac{dD}{dt} = l\\frac{dl}{dt} + w\\frac{dw}{dt} = 24(3) + 10(-1) = 62$. At $t = 0$, $D = \\sqrt{576 + 100} = 26$, so $\\frac{dD}{dt} = \\frac{62}{26} = \\frac{31}{13}$ cm/s (increasing). OR: At time $t$, $l = 24 + 3t$ and $w = 10 - t$, so $\\frac{dA}{dt} = w(3) + l(-1) = 3(10 - t) - (24 + 3t) = 6 - 6t$. The area stops increasing when $6 - 6t = 0$, i.e. after $1$ second.`,
      },
    ],
    answer: `(i) Area increasing at $6$ cm$^2$/s. (ii) Perimeter increasing at $4$ cm/s. (iii) The diagonal is increasing at $\\frac{31}{13}$ cm/s; OR the area stops increasing after $1$ second.`,
  },
  {
    id: 'c12-aod-r3-e02', chapter: C, topic: 'Increasing and decreasing functions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A Ferris wheel completes one full turn in $40$ minutes. A passenger boards at the lowest point and the height of her seat above the ground (in metres) $t$ minutes after the ride starts is modelled by $h(t) = 12 - 10\\cos\\left(\\frac{\\pi t}{20}\\right)$, for $0 \\leq t \\leq 40$.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Find $h'(t)$.`,
        answer: `$h'(t) = -10 \\cdot \\left(-\\sin\\frac{\\pi t}{20}\\right) \\cdot \\frac{\\pi}{20} = \\frac{\\pi}{2}\\sin\\left(\\frac{\\pi t}{20}\\right)$ m/min.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `For which times during the ride is the passenger rising, and for which is she descending?`,
        answer: `For $0 < t < 40$, $\\frac{\\pi t}{20}$ lies in $(0, 2\\pi)$. $\\sin\\frac{\\pi t}{20} > 0$ for $0 < t < 20$, so $h' > 0$ and she is rising for $0 < t < 20$ minutes. $\\sin\\frac{\\pi t}{20} < 0$ for $20 < t < 40$, so she is descending in that period.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Find the greatest height reached, and when, using the second derivative test. OR Find how fast she is rising at $t = 10$ minutes.`,
        answer: `$h'(t) = 0$ in $(0, 40)$ at $t = 20$. $h''(t) = \\frac{\\pi^2}{40}\\cos\\frac{\\pi t}{20}$, so $h''(20) = -\\frac{\\pi^2}{40} < 0$: a maximum. The greatest height is $h(20) = 12 + 10 = 22$ m, reached after $20$ minutes. OR: $h'(10) = \\frac{\\pi}{2}\\sin\\frac{\\pi}{2} = \\frac{\\pi}{2}$, so she is rising at $\\frac{\\pi}{2} \\approx 1.57$ m/min.`,
      },
    ],
    answer: `(i) $h'(t) = \\frac{\\pi}{2}\\sin\\frac{\\pi t}{20}$. (ii) Rising for $0 < t < 20$, descending for $20 < t < 40$. (iii) Greatest height $22$ m at $t = 20$ min; OR rising at $\\frac{\\pi}{2}$ m/min at $t = 10$.`,
  },
  {
    id: 'c12-aod-r3-e03', chapter: C, topic: 'Maxima and minima', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `In a physics practical, a battery with fixed internal resistance is connected to a variable load resistor. The power delivered to the load (in watts) when its resistance is $R$ ohm is modelled by $P(R) = \\frac{100R}{(R + 4)^2}$, $R > 0$.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Show that $P'(R) = \\frac{100(4 - R)}{(R + 4)^3}$.`,
        answer: `$P'(R) = 100\\cdot\\frac{(R + 4)^2 - R\\cdot 2(R + 4)}{(R + 4)^4} = 100\\cdot\\frac{(R + 4) - 2R}{(R + 4)^3} = \\frac{100(4 - R)}{(R + 4)^3}$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `For which values of $R$ is the power increasing, and for which decreasing? At what $R$ is the power greatest?`,
        answer: `The denominator $(R + 4)^3 > 0$, so $P'$ has the sign of $4 - R$. $P' > 0$ for $0 < R < 4$ (power increasing) and $P' < 0$ for $R > 4$ (power decreasing). So the power is greatest at $R = 4$ ohm.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Find the maximum power, and show that loads of $1$ ohm and $16$ ohm deliver the same power, which is less than the maximum.`,
        answer: `$P(4) = \\frac{400}{64} = 6.25$ W is the maximum. $P(1) = \\frac{100}{25} = 4$ W and $P(16) = \\frac{1600}{400} = 4$ W. Both equal $4$ W, which is less than $6.25$ W, as expected since one value is below $R = 4$ (on the increasing side) and the other is above it (on the decreasing side).`,
      },
    ],
    answer: `(i) Shown. (ii) Increasing for $0 < R < 4$, decreasing for $R > 4$; greatest at $R = 4$ ohm. (iii) Maximum power $6.25$ W; $P(1) = P(16) = 4$ W.`,
  },
  {
    id: 'c12-aod-r3-e04', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A printing shop designs a rectangular poster whose printed area must be exactly $96$ cm$^2$. The paper must leave a blank margin of $3$ cm at the top and at the bottom, and $2$ cm on each side. Let the width of the printed region be $x$ cm.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Express the area $A$ of the whole paper in terms of $x$.`,
        answer: `The printed height is $\\frac{96}{x}$ cm. The paper is $(x + 4)$ cm wide and $\\left(\\frac{96}{x} + 6\\right)$ cm high, so $A = (x + 4)\\left(\\frac{96}{x} + 6\\right) = 120 + 6x + \\frac{384}{x}$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `Find the value of $x$ for which $\\frac{dA}{dx} = 0$.`,
        answer: `$\\frac{dA}{dx} = 6 - \\frac{384}{x^2} = 0$ gives $x^2 = 64$, so $x = 8$ (as $x > 0$).`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Show that $A$ is least at this value, and find the dimensions and the area of that paper. OR If the paper can be at most $10$ cm wide, find the least area of paper.`,
        answer: `$\\frac{d^2A}{dx^2} = \\frac{768}{x^3} > 0$, so $A$ is least at $x = 8$. The printed height is $\\frac{96}{8} = 12$ cm, so the paper is $(8 + 4) = 12$ cm wide and $(12 + 6) = 18$ cm high, and the least area is $12 \\times 18 = 216$ cm$^2$. OR: Width at most $10$ means $x + 4 \\leq 10$, so $0 < x \\leq 6$. On $(0, 8)$, $\\frac{dA}{dx} < 0$, so $A$ is decreasing and is least at the largest allowed value $x = 6$: $A = 120 + 36 + 64 = 220$ cm$^2$.`,
      },
    ],
    answer: `(i) $A = 120 + 6x + \\frac{384}{x}$. (ii) $x = 8$. (iii) Minimum since $A'' > 0$; paper $12$ cm by $18$ cm, area $216$ cm$^2$; OR the least area is $220$ cm$^2$ at $x = 6$.`,
  },
];
