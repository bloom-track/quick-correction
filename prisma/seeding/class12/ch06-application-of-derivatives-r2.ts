import type { Class12Question } from './types.js';

const C = 'Application of Derivatives';

const AR_OPTIONS = [
  'Both A and R are true, and R is the correct explanation of A.',
  'Both A and R are true, but R is not the correct explanation of A.',
  'A is true, but R is false.',
  'A is false, but R is true.',
];

export const CH06_AOD_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-aod-r2-a01', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The total cost (in rupees) of making $x$ toys is $C(x) = \\frac{x^3}{30} - x^2 + 40x + 250$. The marginal cost when $10$ toys are made is',
    options: ['Rs $30$', 'Rs $50$', 'Rs $40$', 'Rs $20$'],
    answer: 'Correct option: A) Rs $30$. Marginal cost is $C\'(x) = \\frac{x^2}{10} - 2x + 40$, so $C\'(10) = 10 - 20 + 40 = 30$. (Rs $50$ comes from adding $2x$ instead of subtracting it.)',
  },
  {
    id: 'c12-aod-r2-a02', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The rate of change of the area of a square with respect to the length of its diagonal, when the diagonal is $6$ cm, is',
    options: ['$18$ cm$^2$/cm', '$12$ cm$^2$/cm', '$6$ cm$^2$/cm', '$3$ cm$^2$/cm'],
    answer: 'Correct option: C) $6$ cm$^2$/cm. A square with diagonal $d$ has area $A = \\frac{d^2}{2}$, so $\\frac{dA}{dd} = d = 6$. ($18$ is the area itself, and $12$ forgets the factor $\\frac{1}{2}$.)',
  },
  {
    id: 'c12-aod-r2-a03', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A particle moves along a straight line so that its distance (in metres) from a fixed point after $t$ seconds is $s = 2t^3 - 15t^2 + 36t$. Its acceleration at the first instant when its velocity is zero is',
    options: ['$6$ m/s$^2$', '$-6$ m/s$^2$', '$0$ m/s$^2$', '$28$ m/s$^2$'],
    answer: 'Correct option: B) $-6$ m/s$^2$. $v = \\frac{ds}{dt} = 6t^2 - 30t + 36 = 6(t - 2)(t - 3)$, which is first zero at $t = 2$. Acceleration $a = \\frac{dv}{dt} = 12t - 30 = -6$ at $t = 2$. ($6$ is the acceleration at $t = 3$, and $28$ m is the distance at $t = 2$.)',
  },
  {
    id: 'c12-aod-r2-a04', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The angle $\\theta$ (in radians) of a sector of a circle of radius $10$ cm is increasing at $0.2$ rad/s. The rate at which the area of the sector is increasing is',
    options: ['$20$ cm$^2$/s', '$2$ cm$^2$/s', '$10\\pi$ cm$^2$/s', '$10$ cm$^2$/s'],
    answer: 'Correct option: D) $10$ cm$^2$/s. The sector has area $A = \\frac{1}{2}r^2\\theta = 50\\theta$, so $\\frac{dA}{dt} = 50 \\times 0.2 = 10$ cm$^2$/s. ($20$ forgets the factor $\\frac{1}{2}$.)',
  },
  {
    id: 'c12-aod-r2-a05', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = 5 - 2x - x^2$ is strictly increasing on',
    options: ['$(-\\infty, -1)$', '$(-1, \\infty)$', '$(-\\infty, 1)$', '$(1, \\infty)$'],
    answer: 'Correct option: A) $(-\\infty, -1)$. $f\'(x) = -2 - 2x > 0$ exactly when $x < -1$.',
  },
  {
    id: 'c12-aod-r2-a06', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = e^{-x^2}$ is strictly increasing on',
    options: ['$(0, \\infty)$', '$\\mathbb{R}$', '$(-\\infty, 0)$', '$(-1, 1)$'],
    answer: 'Correct option: C) $(-\\infty, 0)$. $f\'(x) = -2x e^{-x^2}$. Since $e^{-x^2} > 0$, $f\'(x) > 0$ exactly when $x < 0$.',
  },
  {
    id: 'c12-aod-r2-a07', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following functions is strictly decreasing on $\\left(0, \\frac{\\pi}{2}\\right)$?',
    options: ['$\\sin x$', '$\\cos x$', '$\\tan x$', '$x + \\cos x$'],
    answer: 'Correct option: B) $\\cos x$. Its derivative $-\\sin x$ is negative on $\\left(0, \\frac{\\pi}{2}\\right)$. The others have derivatives $\\cos x$, $\\sec^2 x$ and $1 - \\sin x$, all positive there, so they are increasing.',
  },
  {
    id: 'c12-aod-r2-a08', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The set of all values of $a$ for which $f(x) = x^3 + ax^2 + 3x + 1$ is strictly increasing on $\\mathbb{R}$ is',
    options: ['$(-3, 3)$', '$(-\\infty, -3] \\cup [3, \\infty)$', '$[-3, 3]$', '$[0, 3]$'],
    answer: 'Correct option: C) $[-3, 3]$. We need $f\'(x) = 3x^2 + 2ax + 3 \\geq 0$ for all $x$, i.e. discriminant $4a^2 - 36 \\leq 0$, so $-3 \\leq a \\leq 3$. At $a = \\pm 3$, $f\'(x) = 3(x \\pm 1)^2$ vanishes at only one point, so $f$ is still strictly increasing; hence the endpoints are included.',
  },
  {
    id: 'c12-aod-r2-a09', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f(x) = xe^{x}$ is strictly decreasing on',
    options: ['$(-1, \\infty)$', '$(-\\infty, 0)$', '$(0, \\infty)$', '$(-\\infty, -1)$'],
    answer: 'Correct option: D) $(-\\infty, -1)$. $f\'(x) = e^{x} + xe^{x} = (1 + x)e^{x}$. Since $e^{x} > 0$, $f\'(x) < 0$ exactly when $x < -1$. ($(-\\infty, 0)$ is where $f$ is negative, not where it decreases.)',
  },
  {
    id: 'c12-aod-r2-a10', chapter: C, topic: 'Increasing and decreasing functions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f(x) = x^3$ is strictly increasing on $\\mathbb{R}$.\nReason (R): $f\'(x) > 0$ for every $x \\in \\mathbb{R}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true, but R is false. If $x_1 < x_2$ then $x_1^3 < x_2^3$, so A is true. But $f\'(x) = 3x^2$ equals $0$ at $x = 0$, so R is false. (A function can be strictly increasing even if its derivative is zero at isolated points.)',
  },
  {
    id: 'c12-aod-r2-a11', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The maximum value of $f(x) = 3\\sin x + 4\\cos x$, $x \\in \\mathbb{R}$, is',
    options: ['$7$', '$5$', '$1$', '$25$'],
    answer: 'Correct option: B) $5$. $f\'(x) = 3\\cos x - 4\\sin x = 0$ gives $\\tan x = \\frac{3}{4}$; taking $\\sin x = \\frac{3}{5}$, $\\cos x = \\frac{4}{5}$ gives $f = \\frac{9}{5} + \\frac{16}{5} = 5$, the maximum (equivalently $f = 5\\sin(x + \\alpha)$). ($7$ wrongly assumes $\\sin x$ and $\\cos x$ are both $1$ at once.)',
  },
  {
    id: 'c12-aod-r2-a12', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The critical points of $f(x) = x^4 - 2x^2$ are',
    options: ['$x = 0$ only', '$x = \\pm 1$ only', '$x = 0, 1$ only', '$x = 0, \\pm 1$'],
    answer: 'Correct option: D) $x = 0, \\pm 1$. $f\'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1) = 0$ gives $x = 0, 1, -1$.',
  },
  {
    id: 'c12-aod-r2-a13', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The absolute maximum value of $f(x) = xe^{-x}$ on $[0, 2]$ is',
    options: ['$\\frac{1}{e}$', '$\\frac{2}{e^2}$', '$1$', '$0$'],
    answer: 'Correct option: A) $\\frac{1}{e}$. $f\'(x) = (1 - x)e^{-x} = 0$ gives $x = 1$. Comparing $f(0) = 0$, $f(1) = \\frac{1}{e} \\approx 0.37$ and $f(2) = \\frac{2}{e^2} \\approx 0.27$, the absolute maximum is $\\frac{1}{e}$. ($1$ is where it occurs, not its value.)',
  },
  {
    id: 'c12-aod-r2-a14', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $f(x) = x^4$, $f\'(0) = 0$ and $f\'\'(0) = 0$. Which statement about $x = 0$ is correct?',
    options: ['$x = 0$ is a point of local maximum', '$x = 0$ is a point of local minimum', '$x = 0$ is neither a local maximum nor a local minimum', 'Nothing can be said about $x = 0$ by any method'],
    answer: 'Correct option: B) $x = 0$ is a point of local minimum. The second derivative test fails here, but $f\'(x) = 4x^3$ changes from negative to positive at $0$ (first derivative test), and indeed $x^4 \\geq 0 = f(0)$ for all $x$.',
  },
  {
    id: 'c12-aod-r2-a15', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The minimum value of $f(x) = \\sin^4 x + \\cos^4 x$, $x \\in \\mathbb{R}$, is',
    options: ['$0$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$1$'],
    answer: 'Correct option: C) $\\frac{1}{2}$. $f(x) = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x\\cos^2 x = 1 - \\frac{1}{2}\\sin^2 2x$. (Also $f\'(x) = -\\sin 4x$, zero where $\\sin^2 2x$ is $0$ or $1$.) The least value is when $\\sin^2 2x = 1$, giving $\\frac{1}{2}$; $1$ is the maximum.',
  },
  {
    id: 'c12-aod-r2-a16', chapter: C, topic: 'Optimisation word problems', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two real numbers differ by $8$. The least possible value of their product is',
    options: ['$-16$', '$16$', '$0$', '$-8$'],
    answer: 'Correct option: A) $-16$. Let the numbers be $x$ and $x + 8$, with product $P = x^2 + 8x$. $P\'(x) = 2x + 8 = 0$ gives $x = -4$, and $P\'\' = 2 > 0$, so the least product is $(-4)(4) = -16$.',
  },
  {
    id: 'c12-aod-r2-a17', chapter: C, topic: 'Maxima and minima', type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The absolute maximum value of $f(x) = x^3$ on $[-1, 2]$ is $8$.\nReason (R): The absolute extreme values of a continuous function on a closed interval occur either at critical points inside the interval or at its end points.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and R explains A. R is the standard result. Here the only critical point is $x = 0$, so by R we compare $f(-1) = -1$, $f(0) = 0$ and $f(2) = 8$; the absolute maximum is $8$, as A states.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-aod-r2-b01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'easy', marks: 2,
    text: 'A shop finds that it can sell $x$ lamps a week at a price of Rs $(120 - 2x)$ each. Find the marginal revenue when $20$ lamps are sold.',
    answer: 'Revenue $R(x) = x(120 - 2x) = 120x - 2x^2$. Marginal revenue $MR = \\frac{dR}{dx} = 120 - 4x$. At $x = 20$, $MR = 120 - 80 = 40$. The marginal revenue is Rs $40$ per lamp.',
    steps: [
      { step: 'Forms $R(x) = 120x - 2x^2$ and differentiates to $120 - 4x$', marks: 1 },
      { step: 'Gets marginal revenue Rs $40$ at $x = 20$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b02', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: 'A kite flies at a constant height of $60$ m and drifts horizontally away from the girl holding the string at $2$ m/s. Assuming the string stays straight, how fast is the string being let out when $100$ m of string is out?',
    answer: 'Let $x$ m be the horizontal distance and $s$ m the string length. Then $s^2 = x^2 + 60^2$, so $s\\frac{ds}{dt} = x\\frac{dx}{dt}$. When $s = 100$, $x = \\sqrt{10000 - 3600} = 80$. So $\\frac{ds}{dt} = \\frac{80}{100} \\times 2 = 1.6$. The string is being let out at $1.6$ m/s.',
    steps: [
      { step: 'Writes $s^2 = x^2 + 3600$ and differentiates: $s\\frac{ds}{dt} = x\\frac{dx}{dt}$', marks: 1 },
      { step: 'Finds $x = 80$ and gets $\\frac{ds}{dt} = 1.6$ m/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b03', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: 'For a fixed amount of gas at constant temperature, the pressure $P$ and volume $V$ satisfy $PV = 1200$. At a certain instant $P = 40$ units, $V = 30$ units, and $P$ is increasing at $2$ units per minute. Find the rate at which $V$ is changing at that instant.',
    answer: 'Differentiating $PV = 1200$ with respect to $t$: $P\\frac{dV}{dt} + V\\frac{dP}{dt} = 0$, so $\\frac{dV}{dt} = -\\frac{V}{P}\\frac{dP}{dt} = -\\frac{30}{40} \\times 2 = -1.5$. The volume is decreasing at $1.5$ units per minute.',
    steps: [
      { step: 'Differentiates using the product rule: $P\\frac{dV}{dt} + V\\frac{dP}{dt} = 0$', marks: 1 },
      { step: 'Gets $\\frac{dV}{dt} = -1.5$, i.e. decreasing at $1.5$ units/min', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b04', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'easy', marks: 2,
    text: 'A rectangle has a fixed perimeter of $40$ cm. Its length $x$ is increasing at $1$ cm/s. Find the rate at which its area is changing when $x = 6$ cm.',
    answer: 'The breadth is $20 - x$, so the area is $A = x(20 - x) = 20x - x^2$. Then $\\frac{dA}{dt} = (20 - 2x)\\frac{dx}{dt} = (20 - 12)(1) = 8$. The area is increasing at $8$ cm$^2$/s.',
    steps: [
      { step: 'Writes $A = x(20 - x)$ and differentiates with respect to $t$', marks: 1 },
      { step: 'Gets $\\frac{dA}{dt} = 8$ cm$^2$/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b05', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'easy', marks: 2,
    text: 'Show that $f(x) = \\log(\\sin x)$ is strictly increasing on $\\left(0, \\frac{\\pi}{2}\\right)$ and strictly decreasing on $\\left(\\frac{\\pi}{2}, \\pi\\right)$.',
    answer: '$f\'(x) = \\frac{\\cos x}{\\sin x} = \\cot x$. On $\\left(0, \\frac{\\pi}{2}\\right)$ both $\\sin x$ and $\\cos x$ are positive, so $\\cot x > 0$ and $f$ is strictly increasing. On $\\left(\\frac{\\pi}{2}, \\pi\\right)$, $\\sin x > 0$ and $\\cos x < 0$, so $\\cot x < 0$ and $f$ is strictly decreasing.',
    steps: [
      { step: 'Finds $f\'(x) = \\cot x$', marks: 1 },
      { step: 'Uses the sign of $\\cot x$ on each interval to conclude', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b06', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the intervals in which $f(x) = (x + 2)e^{-x}$ is strictly increasing or strictly decreasing.',
    answer: '$f\'(x) = e^{-x} - (x + 2)e^{-x} = -(x + 1)e^{-x}$. Since $e^{-x} > 0$, $f\'(x) > 0$ when $x < -1$ and $f\'(x) < 0$ when $x > -1$. So $f$ is strictly increasing on $(-\\infty, -1)$ and strictly decreasing on $(-1, \\infty)$.',
    steps: [
      { step: 'Finds $f\'(x) = -(x + 1)e^{-x}$', marks: 1 },
      { step: 'States increasing on $(-\\infty, -1)$, decreasing on $(-1, \\infty)$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b07', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the intervals in which $f(x) = x^2 \\log x$, $x > 0$, is strictly increasing or strictly decreasing.',
    answer: '$f\'(x) = 2x\\log x + x = x(2\\log x + 1)$. For $x > 0$ the sign is that of $2\\log x + 1$, which is zero at $\\log x = -\\frac{1}{2}$, i.e. $x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$. So $f\'(x) < 0$ on $\\left(0, \\frac{1}{\\sqrt{e}}\\right)$ and $f\'(x) > 0$ on $\\left(\\frac{1}{\\sqrt{e}}, \\infty\\right)$: $f$ is strictly decreasing on $\\left(0, \\frac{1}{\\sqrt{e}}\\right)$ and strictly increasing on $\\left(\\frac{1}{\\sqrt{e}}, \\infty\\right)$.',
    steps: [
      { step: 'Finds $f\'(x) = x(2\\log x + 1)$ and the critical point $x = \\frac{1}{\\sqrt{e}}$', marks: 1 },
      { step: 'States decreasing on $\\left(0, \\frac{1}{\\sqrt{e}}\\right)$ and increasing on $\\left(\\frac{1}{\\sqrt{e}}, \\infty\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b08', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the intervals in $(0, \\pi)$ on which $f(x) = \\cos^2 x$ is strictly increasing or strictly decreasing.',
    answer: '$f\'(x) = -2\\cos x\\sin x = -\\sin 2x$. For $0 < x < \\frac{\\pi}{2}$, $0 < 2x < \\pi$ so $\\sin 2x > 0$ and $f\'(x) < 0$. For $\\frac{\\pi}{2} < x < \\pi$, $\\pi < 2x < 2\\pi$ so $\\sin 2x < 0$ and $f\'(x) > 0$. Hence $f$ is strictly decreasing on $\\left(0, \\frac{\\pi}{2}\\right)$ and strictly increasing on $\\left(\\frac{\\pi}{2}, \\pi\\right)$.',
    steps: [
      { step: 'Finds $f\'(x) = -\\sin 2x$', marks: 1 },
      { step: 'States decreasing on $\\left(0, \\frac{\\pi}{2}\\right)$ and increasing on $\\left(\\frac{\\pi}{2}, \\pi\\right)$ with the sign reasoning', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b09', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the intervals in which $f(x) = x^{2/3}(x - 5)$ is strictly increasing or strictly decreasing.',
    answer: '$f(x) = x^{5/3} - 5x^{2/3}$, so $f\'(x) = \\frac{5}{3}x^{2/3} - \\frac{10}{3}x^{-1/3} = \\frac{5(x - 2)}{3x^{1/3}}$ for $x \\neq 0$ ($f\'$ does not exist at $x = 0$). Critical points: $x = 0$ and $x = 2$. For $x < 0$: numerator and $x^{1/3}$ are both negative, so $f\' > 0$. For $0 < x < 2$: numerator negative, denominator positive, so $f\' < 0$. For $x > 2$: $f\' > 0$. So $f$ is strictly increasing on $(-\\infty, 0)$ and $(2, \\infty)$, and strictly decreasing on $(0, 2)$.',
    steps: [
      { step: 'Finds $f\'(x) = \\frac{5(x - 2)}{3x^{1/3}}$ and critical points $0$ (derivative undefined) and $2$', marks: 1 },
      { step: 'States increasing on $(-\\infty, 0) \\cup (2, \\infty)$ and decreasing on $(0, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b10', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'hard', marks: 2,
    text: 'Show that $f(x) = 2x + \\cot^{-1} x + \\log\\left(\\sqrt{1 + x^2} - x\\right)$ is strictly increasing on $\\mathbb{R}$.',
    answer: 'The derivative of $\\log\\left(\\sqrt{1 + x^2} - x\\right)$ is $\\frac{\\frac{x}{\\sqrt{1 + x^2}} - 1}{\\sqrt{1 + x^2} - x} = -\\frac{1}{\\sqrt{1 + x^2}}$. So $f\'(x) = 2 - \\frac{1}{1 + x^2} - \\frac{1}{\\sqrt{1 + x^2}}$. Since $1 + x^2 \\geq 1$, each fraction is at most $1$, so $f\'(x) \\geq 2 - 1 - 1 = 0$, with equality only when $x = 0$. Hence $f\'(x) > 0$ for all $x \\neq 0$; one isolated zero does not stop strict increase, so $f$ is strictly increasing on $\\mathbb{R}$.',
    steps: [
      { step: 'Finds $f\'(x) = 2 - \\frac{1}{1 + x^2} - \\frac{1}{\\sqrt{1 + x^2}}$', marks: 1 },
      { step: 'Shows $f\'(x) \\geq 0$ with equality only at $x = 0$ and concludes strictly increasing', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b11', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the point of local maximum and the local maximum value of $f(x) = e^{4x - x^2}$.',
    answer: '$f\'(x) = (4 - 2x)e^{4x - x^2}$, which is zero only at $x = 2$ since the exponential is positive. $f\'(x) > 0$ for $x < 2$ and $f\'(x) < 0$ for $x > 2$, so $x = 2$ is a point of local maximum. The local maximum value is $f(2) = e^{8 - 4} = e^4$.',
    steps: [
      { step: 'Finds $f\'(x) = (4 - 2x)e^{4x - x^2}$ and $x = 2$', marks: 1 },
      { step: 'Justifies maximum and gets value $e^4$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b12', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find all points of local maximum and local minimum of $f(x) = x^3(x - 4)$, and the corresponding values.',
    answer: '$f(x) = x^4 - 4x^3$, so $f\'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$, zero at $x = 0$ and $x = 3$. At $x = 0$, $f\'$ is negative on both sides (since $x^2 > 0$ and $x - 3 < 0$), so there is no extremum there. At $x = 3$, $f\'$ changes from negative to positive, so $x = 3$ is a point of local minimum with value $f(3) = 27(-1) = -27$. There is no local maximum.',
    steps: [
      { step: 'Finds $f\'(x) = 4x^2(x - 3)$ and critical points $0, 3$', marks: 1 },
      { step: 'Shows $x = 0$ is neither and gets local minimum $-27$ at $x = 3$, no local maximum', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b13', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the absolute maximum and absolute minimum values of $f(x) = x^2 - 4\\log x$ on $[1, e]$.',
    answer: '$f\'(x) = 2x - \\frac{4}{x} = \\frac{2(x^2 - 2)}{x}$, which is zero in $[1, e]$ at $x = \\sqrt{2}$. Values: $f(1) = 1$, $f(\\sqrt{2}) = 2 - 4\\log\\sqrt{2} = 2 - 2\\log 2 \\approx 0.61$, $f(e) = e^2 - 4 \\approx 3.39$. Absolute maximum $= e^2 - 4$ at $x = e$; absolute minimum $= 2 - 2\\log 2$ at $x = \\sqrt{2}$.',
    steps: [
      { step: 'Finds the critical point $x = \\sqrt{2}$ in $[1, e]$', marks: 1 },
      { step: 'Compares $f(1)$, $f(\\sqrt{2})$, $f(e)$: max $e^2 - 4$, min $2 - 2\\log 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b14', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the local maximum and local minimum values of $f(x) = (x^2 - 3)e^{x}$.',
    answer: '$f\'(x) = 2xe^{x} + (x^2 - 3)e^{x} = (x^2 + 2x - 3)e^{x} = (x + 3)(x - 1)e^{x}$, zero at $x = -3$ and $x = 1$. $f\'$ goes from positive to negative at $x = -3$ and from negative to positive at $x = 1$. So the local maximum value is $f(-3) = 6e^{-3} = \\frac{6}{e^3}$, and the local minimum value is $f(1) = -2e$.',
    steps: [
      { step: 'Finds $f\'(x) = (x + 3)(x - 1)e^{x}$ and critical points $-3, 1$', marks: 1 },
      { step: 'Classifies and gets local max $\\frac{6}{e^3}$ and local min $-2e$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-b15', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 2,
    text: 'A rectangle has one corner at the origin, two sides along the positive coordinate axes, and the opposite corner on the line $\\frac{x}{6} + \\frac{y}{4} = 1$. Find the largest possible area of the rectangle.',
    answer: 'If the opposite corner is $(x, y)$ then $y = 4\\left(1 - \\frac{x}{6}\\right)$, so the area is $A = xy = 4x - \\frac{2}{3}x^2$, $0 < x < 6$. $A\'(x) = 4 - \\frac{4}{3}x = 0$ gives $x = 3$, and $A\'\' = -\\frac{4}{3} < 0$, so this is a maximum. Then $y = 2$ and the largest area is $3 \\times 2 = 6$ square units.',
    steps: [
      { step: 'Forms $A(x) = 4x - \\frac{2}{3}x^2$', marks: 1 },
      { step: 'Finds $x = 3$, confirms maximum and gets area $6$ square units', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-aod-r2-c01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 3,
    text: 'A water trough is $10$ m long. Its cross-section is an isosceles triangle, vertex down, $2$ m wide across the top and $1$ m deep. Water flows in at $0.5$ m$^3$/min. When the water is $0.5$ m deep, find (a) how fast the water level is rising, and (b) how fast the area of the water surface is increasing.',
    answer: 'At depth $h$, similar triangles give the width of the water surface as $2h$ (width $2$ at depth $1$). The water volume is $V = 10 \\times \\frac{1}{2}(2h)(h) = 10h^2$, so $\\frac{dV}{dt} = 20h\\frac{dh}{dt}$. (a) At $h = 0.5$: $0.5 = 10\\frac{dh}{dt}$, so $\\frac{dh}{dt} = 0.05$ m/min. (b) The surface is a rectangle $10$ m by $2h$ m, so $S = 20h$ and $\\frac{dS}{dt} = 20 \\times 0.05 = 1$ m$^2$/min.',
    steps: [
      { step: 'Uses similar triangles to get width $2h$ and $V = 10h^2$', marks: 1 },
      { step: 'Differentiates and gets $\\frac{dh}{dt} = 0.05$ m/min', marks: 1 },
      { step: 'Gets $\\frac{dS}{dt} = 1$ m$^2$/min', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-c02', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the intervals in which $f(x) = \\sin x - \\sqrt{3}\\cos x$, $0 \\leq x \\leq 2\\pi$, is strictly increasing or strictly decreasing.',
    answer: '$f\'(x) = \\cos x + \\sqrt{3}\\sin x = 2\\left(\\frac{1}{2}\\cos x + \\frac{\\sqrt{3}}{2}\\sin x\\right) = 2\\sin\\left(x + \\frac{\\pi}{6}\\right)$. In $[0, 2\\pi]$, $x + \\frac{\\pi}{6} \\in \\left[\\frac{\\pi}{6}, \\frac{13\\pi}{6}\\right]$, and $f\'(x) = 0$ when $x + \\frac{\\pi}{6} = \\pi$ or $2\\pi$, i.e. $x = \\frac{5\\pi}{6}, \\frac{11\\pi}{6}$. $f\' > 0$ on $\\left[0, \\frac{5\\pi}{6}\\right)$, $f\' < 0$ on $\\left(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\right)$, $f\' > 0$ on $\\left(\\frac{11\\pi}{6}, 2\\pi\\right]$. So $f$ is strictly increasing on $\\left[0, \\frac{5\\pi}{6}\\right)$ and $\\left(\\frac{11\\pi}{6}, 2\\pi\\right]$, and strictly decreasing on $\\left(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\right)$.',
    steps: [
      { step: 'Finds $f\'(x) = 2\\sin\\left(x + \\frac{\\pi}{6}\\right)$ (or equivalent)', marks: 1 },
      { step: 'Finds critical points $\\frac{5\\pi}{6}$ and $\\frac{11\\pi}{6}$', marks: 1 },
      { step: 'States increasing on $\\left[0, \\frac{5\\pi}{6}\\right) \\cup \\left(\\frac{11\\pi}{6}, 2\\pi\\right]$ and decreasing on $\\left(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\right)$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-c03', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the absolute maximum and absolute minimum values of $f(x) = \\cos 2x + 2\\sin x$ on $[0, \\pi]$, and all the points where they occur.',
    answer: '$f\'(x) = -2\\sin 2x + 2\\cos x = 2\\cos x(1 - 2\\sin x)$. In $[0, \\pi]$, $\\cos x = 0$ gives $x = \\frac{\\pi}{2}$, and $\\sin x = \\frac{1}{2}$ gives $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. Values: $f(0) = 1$, $f\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2} + 1 = \\frac{3}{2}$, $f\\left(\\frac{\\pi}{2}\\right) = -1 + 2 = 1$, $f\\left(\\frac{5\\pi}{6}\\right) = \\frac{1}{2} + 1 = \\frac{3}{2}$, $f(\\pi) = 1$. Absolute maximum $= \\frac{3}{2}$ at $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$; absolute minimum $= 1$ at $x = 0, \\frac{\\pi}{2}, \\pi$.',
    steps: [
      { step: 'Finds and factorises $f\'(x) = 2\\cos x(1 - 2\\sin x)$', marks: 1 },
      { step: 'Finds critical points $\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$', marks: 1 },
      { step: 'Compares with end points: max $\\frac{3}{2}$ at $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$; min $1$ at $0, \\frac{\\pi}{2}, \\pi$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-c04', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 3,
    text: 'A rectangular hoarding is to be placed under a parabolic arch whose shape is $y = 12 - x^2$ (in metres), with the ground along the $x$-axis. The base of the hoarding lies on the ground and its two upper corners touch the arch. Find the dimensions of the hoarding of largest area and that area.',
    answer: 'Let the upper corners be $(\\pm x, 12 - x^2)$, $0 < x < 2\\sqrt{3}$. Width $= 2x$, height $= 12 - x^2$, so $A = 2x(12 - x^2) = 24x - 2x^3$. $A\'(x) = 24 - 6x^2 = 0$ gives $x = 2$. $A\'\'(x) = -12x = -24 < 0$ at $x = 2$, so the area is maximum. The hoarding is $4$ m wide and $12 - 4 = 8$ m high, with largest area $32$ m$^2$.',
    steps: [
      { step: 'Forms $A(x) = 2x(12 - x^2)$', marks: 1 },
      { step: 'Solves $A\'(x) = 0$ to get $x = 2$ and confirms maximum', marks: 1 },
      { step: 'States $4$ m by $8$ m with area $32$ m$^2$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-c05', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'hard', marks: 3,
    text: 'A straight canal is $300$ m wide. A man at point $A$ on one bank wants to reach point $B$ on the opposite bank, $800$ m downstream from the point directly opposite $A$. He can swim at $3$ m/s and run at $5$ m/s. He swims in a straight line to a point $P$ on the far bank, $x$ m downstream from the point opposite $A$, then runs along the bank to $B$. Ignoring the current, find $x$ for the quickest trip and the least time.',
    answer: 'Time $T(x) = \\frac{\\sqrt{90000 + x^2}}{3} + \\frac{800 - x}{5}$, $0 \\leq x \\leq 800$. $T\'(x) = \\frac{x}{3\\sqrt{90000 + x^2}} - \\frac{1}{5} = 0$ gives $5x = 3\\sqrt{90000 + x^2}$, so $25x^2 = 9x^2 + 810000$, $x^2 = 50625$, $x = 225$. $T\'$ changes from negative to positive at $x = 225$ (and comparing $T(0) = 100 + 160 = 260$ s and $T(800) \\approx 284.8$ s), so it is the minimum. At $x = 225$: swim $= \\sqrt{140625} = 375$ m taking $125$ s; run $575$ m taking $115$ s. He should land $225$ m downstream, and the least time is $240$ s ($4$ minutes).',
    steps: [
      { step: 'Forms $T(x) = \\frac{\\sqrt{90000 + x^2}}{3} + \\frac{800 - x}{5}$', marks: 1 },
      { step: 'Solves $T\'(x) = 0$ to get $x = 225$', marks: 1 },
      { step: 'Justifies minimum and gets least time $240$ s', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-aod-r2-d01', chapter: C, topic: 'Rate of change', type: 'long', complexity: 'medium', marks: 5,
    text: 'A spotlight on the ground shines on a vertical wall $12$ m away. A man $2$ m tall walks from the spotlight straight towards the wall at $1.6$ m/s, casting a shadow on the wall. When he is $4$ m from the wall, find (a) the rate at which the height of his shadow on the wall is changing, and (b) the rate at which the angle of elevation of the top of his head, seen from the spotlight, is changing.',
    answer: 'Let $x$ m be the man\'s distance from the spotlight and $H$ m the height of the shadow. The ray from the spotlight over his head reaches the wall, so by similar triangles $\\frac{H}{12} = \\frac{2}{x}$, i.e. $H = \\frac{24}{x}$. When he is $4$ m from the wall, $x = 8$, and $\\frac{dx}{dt} = 1.6$. (a) $\\frac{dH}{dt} = -\\frac{24}{x^2}\\frac{dx}{dt} = -\\frac{24}{64}(1.6) = -0.6$. The shadow is getting shorter at $0.6$ m/s. (b) Let $\\phi$ be the angle of elevation; $\\tan\\phi = \\frac{2}{x}$. Then $\\sec^2\\phi\\frac{d\\phi}{dt} = -\\frac{2}{x^2}\\frac{dx}{dt}$. At $x = 8$, $\\tan\\phi = \\frac{1}{4}$, so $\\sec^2\\phi = \\frac{17}{16}$, and $\\frac{d\\phi}{dt} = -\\frac{16}{17} \\cdot \\frac{2}{64}(1.6) = -\\frac{4}{85}$ rad/s. The angle is decreasing at $\\frac{4}{85} \\approx 0.047$ rad/s.',
    steps: [
      { step: 'Uses similar triangles to get $H = \\frac{24}{x}$', marks: 1 },
      { step: 'Differentiates to $\\frac{dH}{dt} = -\\frac{24}{x^2}\\frac{dx}{dt}$ with $x = 8$', marks: 1 },
      { step: 'Gets the shadow decreasing at $0.6$ m/s', marks: 1 },
      { step: 'Writes $\\tan\\phi = \\frac{2}{x}$ and differentiates', marks: 1 },
      { step: 'Gets $\\frac{d\\phi}{dt} = -\\frac{4}{85}$ rad/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d02', chapter: C, topic: 'Rate of change', type: 'long', complexity: 'hard', marks: 5,
    text: 'A hemispherical bowl of radius $13$ cm is being filled with water at $36\\pi$ cm$^3$/s. When the water is $h$ cm deep, its volume is $V = \\frac{\\pi h^2(39 - h)}{3}$ cm$^3$. When the water is $8$ cm deep, find (a) the rate at which the water level is rising, (b) the rate at which the radius of the water surface is increasing, and (c) the rate at which the area of the water surface is increasing.',
    answer: '(a) $V = \\frac{\\pi}{3}(39h^2 - h^3)$, so $\\frac{dV}{dt} = \\pi(26h - h^2)\\frac{dh}{dt}$. At $h = 8$: $36\\pi = \\pi(208 - 64)\\frac{dh}{dt} = 144\\pi\\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{1}{4}$ cm/s. (b) The surface radius $r$ satisfies $r^2 + (13 - h)^2 = 13^2$, so $r^2 = 26h - h^2$. At $h = 8$, $r^2 = 144$, $r = 12$. Differentiating, $2r\\frac{dr}{dt} = (26 - 2h)\\frac{dh}{dt} = 10 \\times \\frac{1}{4} = \\frac{5}{2}$, so $\\frac{dr}{dt} = \\frac{5}{48}$ cm/s. (c) The surface area is $A = \\pi r^2 = \\pi(26h - h^2)$, so $\\frac{dA}{dt} = \\pi(26 - 2h)\\frac{dh}{dt} = \\pi(10)\\left(\\frac{1}{4}\\right) = \\frac{5\\pi}{2}$ cm$^2$/s.',
    steps: [
      { step: 'Differentiates $V$ to get $\\frac{dV}{dt} = \\pi(26h - h^2)\\frac{dh}{dt}$', marks: 1 },
      { step: 'Gets $\\frac{dh}{dt} = \\frac{1}{4}$ cm/s', marks: 1 },
      { step: 'Uses Pythagoras to get $r^2 = 26h - h^2$ and $r = 12$', marks: 1 },
      { step: 'Gets $\\frac{dr}{dt} = \\frac{5}{48}$ cm/s', marks: 1 },
      { step: 'Gets $\\frac{dA}{dt} = \\frac{5\\pi}{2}$ cm$^2$/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d03', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'medium', marks: 5,
    text: 'For $f(x) = x^4 - 4x^3 + 4x^2 + 5$, find the intervals in which $f$ is strictly increasing or strictly decreasing, and its local maximum and local minimum values. Hence find the absolute maximum and absolute minimum values of $f$ on $[-1, 3]$.',
    answer: '$f\'(x) = 4x^3 - 12x^2 + 8x = 4x(x - 1)(x - 2)$, zero at $x = 0, 1, 2$. Signs: $f\' < 0$ on $(-\\infty, 0)$, $f\' > 0$ on $(0, 1)$, $f\' < 0$ on $(1, 2)$, $f\' > 0$ on $(2, \\infty)$. So $f$ is strictly increasing on $(0, 1)$ and $(2, \\infty)$, and strictly decreasing on $(-\\infty, 0)$ and $(1, 2)$. By the first derivative test: local minimum at $x = 0$, value $f(0) = 5$; local maximum at $x = 1$, value $f(1) = 1 - 4 + 4 + 5 = 6$; local minimum at $x = 2$, value $f(2) = 16 - 32 + 16 + 5 = 5$. On $[-1, 3]$, also $f(-1) = 1 + 4 + 4 + 5 = 14$ and $f(3) = 81 - 108 + 36 + 5 = 14$. So the absolute maximum is $14$ (at $x = -1$ and $x = 3$) and the absolute minimum is $5$ (at $x = 0$ and $x = 2$). (Check: $f(x) = x^2(x - 2)^2 + 5 \\geq 5$.)',
    steps: [
      { step: 'Finds $f\'(x) = 4x(x - 1)(x - 2)$', marks: 1 },
      { step: 'States increasing on $(0, 1) \\cup (2, \\infty)$ and decreasing on $(-\\infty, 0) \\cup (1, 2)$', marks: 1 },
      { step: 'Gets local minimum $5$ at $x = 0$ and $x = 2$', marks: 1 },
      { step: 'Gets local maximum $6$ at $x = 1$', marks: 1 },
      { step: 'Compares end values: absolute max $14$, absolute min $5$ on $[-1, 3]$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d04', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = x^{1/x}$, $x > 0$. Find the intervals in which $f$ is strictly increasing or strictly decreasing, and find its maximum value. Hence show that $e^{\\pi} > \\pi^{e}$.',
    answer: 'Let $y = x^{1/x}$, so $\\log y = \\frac{\\log x}{x}$. Differentiating, $\\frac{1}{y}\\frac{dy}{dx} = \\frac{1 - \\log x}{x^2}$, so $f\'(x) = x^{1/x} \\cdot \\frac{1 - \\log x}{x^2}$. Since $x^{1/x} > 0$ and $x^2 > 0$, the sign of $f\'$ is the sign of $1 - \\log x$: positive for $0 < x < e$ and negative for $x > e$. So $f$ is strictly increasing on $(0, e)$ and strictly decreasing on $(e, \\infty)$. Hence $x = e$ gives the maximum, with value $e^{1/e}$. Since $\\pi > e$ and $f$ is strictly decreasing on $(e, \\infty)$, $f(\\pi) < f(e)$, i.e. $\\pi^{1/\\pi} < e^{1/e}$. Raising both (positive) sides to the power $e\\pi$ gives $\\pi^{e} < e^{\\pi}$, i.e. $e^{\\pi} > \\pi^{e}$.',
    steps: [
      { step: 'Uses logarithmic differentiation to get $f\'(x) = x^{1/x}\\frac{1 - \\log x}{x^2}$', marks: 1 },
      { step: 'Determines the sign of $f\'$ from $1 - \\log x$', marks: 1 },
      { step: 'States increasing on $(0, e)$, decreasing on $(e, \\infty)$', marks: 1 },
      { step: 'Gets maximum value $e^{1/e}$ at $x = e$', marks: 1 },
      { step: 'Uses $\\pi > e$ and the decrease to conclude $e^{\\pi} > \\pi^{e}$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d05', chapter: C, topic: 'Maxima and minima', type: 'long', complexity: 'medium', marks: 5,
    text: 'For $f(x) = \\frac{\\log x}{x^2}$, $x > 0$, find the point of local maximum and the local maximum value, justifying your answer. Show that $f$ has no local minimum. Also find the absolute maximum and absolute minimum values of $f$ on $[1, e]$.',
    answer: 'By the quotient rule, $f\'(x) = \\frac{x^2 \\cdot \\frac{1}{x} - 2x\\log x}{x^4} = \\frac{1 - 2\\log x}{x^3}$. For $x > 0$, $f\'(x) = 0$ only when $\\log x = \\frac{1}{2}$, i.e. $x = \\sqrt{e}$. For $0 < x < \\sqrt{e}$, $1 - 2\\log x > 0$ so $f\' > 0$; for $x > \\sqrt{e}$, $f\' < 0$. So $x = \\sqrt{e}$ is a point of local maximum, with value $f(\\sqrt{e}) = \\frac{1/2}{e} = \\frac{1}{2e}$. Since $\\sqrt{e}$ is the only critical point and it is a maximum, $f$ has no local minimum. On $[1, e]$: $f(1) = 0$, $f(\\sqrt{e}) = \\frac{1}{2e} \\approx 0.184$, $f(e) = \\frac{1}{e^2} \\approx 0.135$. Absolute maximum $= \\frac{1}{2e}$ at $x = \\sqrt{e}$; absolute minimum $= 0$ at $x = 1$.',
    steps: [
      { step: 'Finds $f\'(x) = \\frac{1 - 2\\log x}{x^3}$', marks: 1 },
      { step: 'Finds the critical point $x = \\sqrt{e}$ and justifies a local maximum by sign change', marks: 1 },
      { step: 'Gets local maximum value $\\frac{1}{2e}$', marks: 1 },
      { step: 'Argues there is no local minimum (only one critical point)', marks: 1 },
      { step: 'Compares $f(1)$, $f(\\sqrt{e})$, $f(e)$: absolute max $\\frac{1}{2e}$, absolute min $0$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d06', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: 'A firm sells $x$ units of a product at a price of Rs $(100 - 2x)$ per unit, and its total cost is Rs $(x^2 + 20x + 50)$. The government levies a tax of Rs $t$ on each unit sold, which the firm pays. (a) Find the output that maximises the firm\'s profit after tax, in terms of $t$, and justify that it is a maximum. (b) Assuming the firm always produces this output, find the tax rate $t$ that gives the government the greatest tax revenue, and that revenue.',
    answer: '(a) Profit after tax: $P(x) = x(100 - 2x) - (x^2 + 20x + 50) - tx = (80 - t)x - 3x^2 - 50$. $P\'(x) = 80 - t - 6x = 0$ gives $x = \\frac{80 - t}{6}$, and $P\'\'(x) = -6 < 0$, so this output maximises profit. (b) Tax revenue $T(t) = t \\cdot x = \\frac{t(80 - t)}{6} = \\frac{80t - t^2}{6}$. $T\'(t) = \\frac{80 - 2t}{6} = 0$ gives $t = 40$, and $T\'\'(t) = -\\frac{1}{3} < 0$, so this is a maximum. At $t = 40$, output $x = \\frac{40}{6} = \\frac{20}{3}$ units and the greatest tax revenue is $40 \\times \\frac{20}{3} = \\frac{800}{3} \\approx$ Rs $266.67$.',
    steps: [
      { step: 'Forms profit after tax $P(x) = (80 - t)x - 3x^2 - 50$', marks: 1 },
      { step: 'Gets $x = \\frac{80 - t}{6}$ and shows $P\'\' < 0$', marks: 1 },
      { step: 'Forms tax revenue $T(t) = \\frac{t(80 - t)}{6}$', marks: 1 },
      { step: 'Solves $T\'(t) = 0$ to get $t = 40$ and confirms maximum', marks: 1 },
      { step: 'Gets greatest tax revenue Rs $\\frac{800}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d07', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: 'A rectangular wooden beam is to be cut from a log with a circular cross-section of diameter $60$ cm. The strength of a beam is proportional to its width times the square of its depth. Find the width and depth of the strongest beam that can be cut, and show that its depth is $\\sqrt{2}$ times its width.',
    answer: 'Let the width be $w$ cm and depth $d$ cm. The rectangular cross-section fits in the circle with its diagonal as a diameter, so $w^2 + d^2 = 3600$. Strength $S = kwd^2 = kw(3600 - w^2) = k(3600w - w^3)$, $0 < w < 60$, $k > 0$. $\\frac{dS}{dw} = k(3600 - 3w^2) = 0$ gives $w^2 = 1200$, $w = 20\\sqrt{3}$. $\\frac{d^2S}{dw^2} = -6kw < 0$, so $S$ is maximum. Then $d^2 = 3600 - 1200 = 2400$, $d = 20\\sqrt{6}$. The strongest beam is $20\\sqrt{3} \\approx 34.6$ cm wide and $20\\sqrt{6} \\approx 49.0$ cm deep, and $\\frac{d}{w} = \\frac{20\\sqrt{6}}{20\\sqrt{3}} = \\sqrt{2}$, so $d = \\sqrt{2}w$.',
    steps: [
      { step: 'Uses the diameter as diagonal: $w^2 + d^2 = 3600$', marks: 1 },
      { step: 'Forms $S = k(3600w - w^3)$', marks: 1 },
      { step: 'Solves $S\'(w) = 0$ to get $w = 20\\sqrt{3}$', marks: 1 },
      { step: 'Confirms maximum with $S\'\' < 0$', marks: 1 },
      { step: 'Gets $d = 20\\sqrt{6}$ and shows $d = \\sqrt{2}w$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r2-d08', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'medium', marks: 5,
    text: 'Two street lamps are $6$ m apart. The illumination at a point from a lamp is directly proportional to the lamp\'s strength and inversely proportional to the square of the distance from it. One lamp is $8$ times as strong as the other. Find the point on the line segment joining the lamps where the total illumination is least.',
    answer: 'Let the point be $x$ m from the stronger lamp, $0 < x < 6$. Total illumination $I(x) = k\\left(\\frac{8}{x^2} + \\frac{1}{(6 - x)^2}\\right)$, $k > 0$. $I\'(x) = k\\left(-\\frac{16}{x^3} + \\frac{2}{(6 - x)^3}\\right) = 0$ gives $8(6 - x)^3 = x^3$, so $2(6 - x) = x$ and $x = 4$. $I\'\'(x) = k\\left(\\frac{48}{x^4} + \\frac{6}{(6 - x)^4}\\right) > 0$, so $x = 4$ gives the minimum. The illumination is least at the point $4$ m from the stronger lamp (and $2$ m from the weaker one), where it equals $k\\left(\\frac{8}{16} + \\frac{1}{4}\\right) = \\frac{3k}{4}$.',
    steps: [
      { step: 'Forms $I(x) = k\\left(\\frac{8}{x^2} + \\frac{1}{(6 - x)^2}\\right)$', marks: 1 },
      { step: 'Differentiates to get $I\'(x)$', marks: 1 },
      { step: 'Solves $8(6 - x)^3 = x^3$ to get $x = 4$', marks: 1 },
      { step: 'Confirms minimum with $I\'\'(x) > 0$', marks: 1 },
      { step: 'States the point $4$ m from the stronger lamp', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-aod-r2-e01', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cook rolls a lump of dough into a flat circular disc. The dough always has volume $400\\pi$ cm$^3$, and the disc can be treated as a cylinder of radius $r$ cm and thickness $h$ cm. As she rolls it, the radius increases at $0.5$ cm/s.',
    answer: '(i) $h = \\frac{400}{r^2}$. (ii) decreasing at $0.4$ cm/s. (iii) $10\\pi$ cm$^2$/s; OR $r = 20$ cm.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the thickness $h$ in terms of $r$.',
        answer: '$\\pi r^2 h = 400\\pi$, so $h = \\frac{400}{r^2}$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the rate at which the thickness is changing when the radius is $10$ cm.',
        answer: '$\\frac{dh}{dt} = -\\frac{800}{r^3}\\frac{dr}{dt} = -\\frac{800}{1000}(0.5) = -0.4$ cm/s. The thickness is decreasing at $0.4$ cm/s.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the rate at which the area of the top face of the disc is increasing when the radius is $10$ cm.\nOR\nFind the radius at the instant when the thickness is decreasing at $0.05$ cm/s.',
        answer: 'The top face has area $A = \\pi r^2$, so $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(10)(0.5) = 10\\pi$ cm$^2$/s.\nOR\nThe thickness decreases at $\\frac{800}{r^3}(0.5) = \\frac{400}{r^3}$ cm/s. Setting $\\frac{400}{r^3} = 0.05$ gives $r^3 = 8000$, so $r = 20$ cm.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e02', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A straight railway line runs east-west and a straight road runs north-south; they cross at a level crossing $O$. At a certain moment a train is $12$ km east of $O$, moving east at $60$ km/h, and a car is $9$ km north of $O$, moving south towards $O$ at $45$ km/h. Let $x$ km and $y$ km be the distances of the train and the car from $O$, and $s$ km the distance between them.',
    answer: '(i) $15$ km. (ii) $s\\frac{ds}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$. (iii) increasing at $21$ km/h; OR decreasing at $\\frac{120}{\\sqrt{17}} \\approx 29.1$ km/h.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find the distance between the train and the car at this moment.',
        answer: '$s = \\sqrt{x^2 + y^2} = \\sqrt{144 + 81} = 15$ km.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Write a relation between $\\frac{ds}{dt}$, $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$.',
        answer: 'Differentiating $s^2 = x^2 + y^2$ gives $s\\frac{ds}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Is the distance between them increasing or decreasing at this moment, and at what rate?\nOR\nWith the same speeds and directions, find the rate of change of the distance between them at an instant when the train is $3$ km east of $O$ and the car is $12$ km north of $O$.',
        answer: 'Here $\\frac{dx}{dt} = 60$ and $\\frac{dy}{dt} = -45$ (the car is approaching $O$). So $\\frac{ds}{dt} = \\frac{12(60) + 9(-45)}{15} = \\frac{720 - 405}{15} = 21$. The distance is increasing at $21$ km/h.\nOR\nNow $s = \\sqrt{9 + 144} = \\sqrt{153} = 3\\sqrt{17}$ km, and $\\frac{ds}{dt} = \\frac{3(60) + 12(-45)}{3\\sqrt{17}} = \\frac{-360}{3\\sqrt{17}} = -\\frac{120}{\\sqrt{17}} \\approx -29.1$. The distance is decreasing at about $29.1$ km/h.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e03', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A lighthouse stands on a small rock $1$ km from a straight shoreline. Its lamp turns at a steady $2$ revolutions per minute, sweeping a spot of light along the shore. Let $N$ be the point on the shore nearest the lighthouse, $\\theta$ the angle between the beam and the line from the lighthouse to $N$, and $x$ km the distance of the light spot from $N$.',
    answer: '(i) $4\\pi$ rad/min. (ii) $x = \\tan\\theta$. (iii) $8\\pi$ km/min; OR $4\\pi$ km/min.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find $\\frac{d\\theta}{dt}$ in radians per minute.',
        answer: 'One revolution is $2\\pi$ radians, so $\\frac{d\\theta}{dt} = 2 \\times 2\\pi = 4\\pi$ rad/min.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express $x$ in terms of $\\theta$.',
        answer: 'In the right triangle with the lighthouse, $N$ and the spot, $\\tan\\theta = \\frac{x}{1}$, so $x = \\tan\\theta$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'How fast is the light spot moving along the shore when it is $1$ km from $N$?\nOR\nHow fast is the light spot moving along the shore when it passes through $N$?',
        answer: '$\\frac{dx}{dt} = \\sec^2\\theta\\frac{d\\theta}{dt} = (1 + \\tan^2\\theta)(4\\pi) = (1 + x^2)(4\\pi)$. At $x = 1$, $\\frac{dx}{dt} = 2 \\times 4\\pi = 8\\pi \\approx 25.1$ km/min.\nOR\nAt $N$, $x = 0$ ($\\theta = 0$), so $\\frac{dx}{dt} = (1 + 0)(4\\pi) = 4\\pi \\approx 12.6$ km/min.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e04', chapter: C, topic: 'Increasing and decreasing functions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a laboratory experiment, the temperature (in $^\\circ$C) of a mixture $t$ minutes after a reaction starts is modelled by $T(t) = 20 + 12te^{-t/4}$, $t \\geq 0$.',
    answer: '(i) $T\'(t) = 3(4 - t)e^{-t/4}$. (ii) increasing on $[0, 4)$, decreasing on $(4, \\infty)$. (iii) $20 + \\frac{48}{e} \\approx 37.7^\\circ$C at $t = 4$; OR shown.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find $T\'(t)$.',
        answer: '$T\'(t) = 12e^{-t/4} + 12t\\left(-\\frac{1}{4}\\right)e^{-t/4} = (12 - 3t)e^{-t/4} = 3(4 - t)e^{-t/4}$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'During which period is the temperature rising, and when is it falling?',
        answer: 'Since $e^{-t/4} > 0$, $T\'(t) > 0$ for $0 \\leq t < 4$ and $T\'(t) < 0$ for $t > 4$. The temperature rises for the first $4$ minutes and falls after that.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the highest temperature reached and when it occurs.\nOR\nShow that the temperature never falls below $20^\\circ$C for $t \\geq 0$, and that it is falling at every moment after $t = 4$.',
        answer: 'By (ii), $T$ increases up to $t = 4$ and decreases after, so the maximum is at $t = 4$: $T(4) = 20 + 48e^{-1} = 20 + \\frac{48}{e} \\approx 37.7^\\circ$C, $4$ minutes after the start.\nOR\nFor $t \\geq 0$, $12te^{-t/4} \\geq 0$, so $T(t) \\geq 20$, with equality only at $t = 0$. For $t > 4$, $4 - t < 0$ and $e^{-t/4} > 0$, so $T\'(t) < 0$: the temperature is strictly decreasing for $t > 4$.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e05', chapter: C, topic: 'Increasing and decreasing functions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A small company estimates that its monthly profit (in lakh rupees) from making $x$ thousand units is $P(x) = 50\\log(x + 1) - 5x$, $x \\geq 0$ (natural logarithm).',
    answer: '(i) $P\'(x) = \\frac{50}{x + 1} - 5$. (ii) increasing on $[0, 9)$, decreasing on $(9, \\infty)$. (iii) $50\\log 10 - 45 \\approx 70.13$ lakh at $9$ thousand units; OR $P\'(4) = 5 > 0$, $P\'(14) = -\\frac{5}{3} < 0$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find $P\'(x)$.',
        answer: '$P\'(x) = \\frac{50}{x + 1} - 5$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the production levels over which profit is increasing and over which it is decreasing.',
        answer: '$P\'(x) = \\frac{50 - 5(x + 1)}{x + 1} = \\frac{5(9 - x)}{x + 1}$. It is positive for $0 \\leq x < 9$ and negative for $x > 9$. Profit increases up to $9$ thousand units and decreases beyond that.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the greatest monthly profit and the production level that gives it.\nOR\nThe company now makes $4$ thousand units, and a rival makes $14$ thousand units with the same profit function. Using $P\'$, advise each one whether to increase or reduce production.',
        answer: 'By (ii), $P$ rises then falls, so $x = 9$ gives the maximum. Greatest profit $= P(9) = 50\\log 10 - 45 \\approx 115.13 - 45 = 70.13$ lakh rupees, at $9$ thousand units.\nOR\n$P\'(4) = \\frac{50}{5} - 5 = 5 > 0$, so profit is still rising at $4$ thousand units: the company should increase production. $P\'(14) = \\frac{50}{15} - 5 = -\\frac{5}{3} < 0$, so profit is falling at $14$ thousand units: the rival should reduce production (both towards $9$ thousand units).',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e06', chapter: C, topic: 'Maxima and minima', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a laboratory, the number of bacteria in a culture $t$ hours after an antibiotic is added is modelled by $N(t) = 1000 + 30t^2 - t^3$, for $0 \\leq t \\leq 30$.',
    answer: '(i) $N\'(t) = 3t(20 - t)$. (ii) $t = 20$ hours. (iii) $5000$ bacteria; OR at $t = 10$ hours, $300$ bacteria per hour.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find the rate of change of the number of bacteria, $N\'(t)$.',
        answer: '$N\'(t) = 60t - 3t^2 = 3t(20 - t)$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'After how many hours is the number of bacteria greatest?',
        answer: '$N\'(t) = 0$ gives $t = 0$ or $t = 20$. $N\' > 0$ on $(0, 20)$ and $N\' < 0$ on $(20, 30)$, so the number is greatest at $t = 20$ hours.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the greatest number of bacteria, justifying that it is the absolute maximum on $[0, 30]$.\nOR\nAt what time is the number of bacteria growing fastest, and what is that growth rate?',
        answer: 'Compare $N(0) = 1000$, $N(20) = 1000 + 12000 - 8000 = 5000$ and $N(30) = 1000 + 27000 - 27000 = 1000$. The absolute maximum is $5000$ bacteria, at $t = 20$ hours.\nOR\nThe growth rate is $g(t) = N\'(t) = 60t - 3t^2$. $g\'(t) = 60 - 6t = 0$ gives $t = 10$, and $g\'\'(t) = -6 < 0$, so the growth rate is greatest at $t = 10$ hours, where $g(10) = 600 - 300 = 300$ bacteria per hour.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e07', chapter: C, topic: 'Maxima and minima', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a school sports science project, a ball is kicked from ground level at $20$ m/s at an angle $\\theta$ to the horizontal. Ignoring air resistance and taking $g = 10$ m/s$^2$, its horizontal range is $R(\\theta) = 40\\sin 2\\theta$ metres, $0 < \\theta < \\frac{\\pi}{2}$.',
    answer: '(i) $R\'(\\theta) = 80\\cos 2\\theta$. (ii) $\\theta = \\frac{\\pi}{4}$. (iii) $40$ m; OR $40$ m per radian.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find $R\'(\\theta)$.',
        answer: '$R\'(\\theta) = 40 \\cdot 2\\cos 2\\theta = 80\\cos 2\\theta$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the angle at which the range is greatest.',
        answer: '$R\'(\\theta) = 0$ gives $\\cos 2\\theta = 0$; with $0 < 2\\theta < \\pi$, $2\\theta = \\frac{\\pi}{2}$, so $\\theta = \\frac{\\pi}{4}$ ($45^\\circ$).',
      },
      {
        label: 'iii', marks: 2,
        text: 'Use the second derivative test to show the range is greatest at this angle, and find the greatest range.\nOR\nFind the rate at which the range changes with respect to $\\theta$ when $\\theta = \\frac{\\pi}{6}$, and say whether a slightly larger angle would increase or decrease the range.',
        answer: '$R\'\'(\\theta) = -160\\sin 2\\theta$, and $R\'\'\\left(\\frac{\\pi}{4}\\right) = -160 < 0$, so $\\theta = \\frac{\\pi}{4}$ gives a maximum. Greatest range $= 40\\sin\\frac{\\pi}{2} = 40$ m.\nOR\n$R\'\\left(\\frac{\\pi}{6}\\right) = 80\\cos\\frac{\\pi}{3} = 40$ m per radian. Since this is positive, a slightly larger angle would increase the range.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e08', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A rain gutter is made from a long metal strip $30$ cm wide by bending up $x$ cm along each long edge at right angles, so that the gutter has a rectangular cross-section. The gutter carries the most water when its cross-sectional area is greatest.',
    answer: '(i) $A(x) = x(30 - 2x)$. (ii) $x = 7.5$. (iii) $7.5$ cm high, $15$ cm wide, area $112.5$ cm$^2$; OR width $= w - 2 \\cdot \\frac{w}{4} = \\frac{w}{2} = 2 \\times$ height.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the cross-sectional area $A$ in terms of $x$.',
        answer: 'The sides are $x$ cm high and the base is $30 - 2x$ cm wide, so $A(x) = x(30 - 2x) = 30x - 2x^2$, $0 < x < 15$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the value of $x$ for which $A\'(x) = 0$.',
        answer: '$A\'(x) = 30 - 4x = 0$ gives $x = 7.5$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that the area is greatest at this value, and find the dimensions of the cross-section and the greatest area.\nOR\nIf the strip had width $w$ cm instead, show that the gutter of greatest cross-section always has its base width equal to twice its height.',
        answer: '$A\'\'(x) = -4 < 0$, so $x = 7.5$ gives a maximum. The gutter is $7.5$ cm high with base $30 - 15 = 15$ cm wide, and the greatest area is $7.5 \\times 15 = 112.5$ cm$^2$.\nOR\nNow $A(x) = x(w - 2x)$, $A\'(x) = w - 4x = 0$ gives $x = \\frac{w}{4}$, and $A\'\' = -4 < 0$, so it is a maximum. Base width $= w - \\frac{w}{2} = \\frac{w}{2} = 2 \\times \\frac{w}{4}$, i.e. twice the height.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e09', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A town has a triangular plot of land with a straight base of $40$ m along a road and a height of $30$ m (measured perpendicular to the road from the opposite corner). A rectangular community hall is to be built with one side along the road and its two far corners on the other two sides of the plot. Let the hall have depth $y$ m (perpendicular to the road).',
    answer: '(i) width $= 40\\left(1 - \\frac{y}{30}\\right)$. (ii) $A(y) = 40y - \\frac{4}{3}y^2$, critical point $y = 15$. (iii) $20$ m by $15$ m, area $300$ m$^2$; OR $300 = \\frac{1}{2} \\times 600$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the width of the hall (along the road) in terms of $y$.',
        answer: 'At height $y$ above the base, the width across the triangle is in proportion to the distance from the top corner: $\\frac{\\text{width}}{40} = \\frac{30 - y}{30}$, so width $= 40\\left(1 - \\frac{y}{30}\\right)$ m.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express the floor area $A$ of the hall in terms of $y$ and find its critical point.',
        answer: '$A(y) = 40y\\left(1 - \\frac{y}{30}\\right) = 40y - \\frac{4}{3}y^2$. $A\'(y) = 40 - \\frac{8}{3}y = 0$ gives $y = 15$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that the area is greatest at this point, and find the dimensions of the hall and its area.\nOR\nShow that the largest hall uses exactly half of the plot\'s area.',
        answer: '$A\'\'(y) = -\\frac{8}{3} < 0$, so $y = 15$ gives a maximum. The hall is $40\\left(1 - \\frac{1}{2}\\right) = 20$ m wide and $15$ m deep, with area $300$ m$^2$.\nOR\n$A\'\'(y) = -\\frac{8}{3} < 0$, so the largest hall has $y = 15$ and area $A(15) = 600 - 300 = 300$ m$^2$. The plot\'s area is $\\frac{1}{2} \\times 40 \\times 30 = 600$ m$^2$, so the hall uses exactly half of it.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e10', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A printing unit\'s total cost (in rupees) of printing $x$ copies of a magazine in a day is $C(x) = \\frac{x^2}{10} + 20x + 1000$. The average cost per copy is $AC(x) = \\frac{C(x)}{x}$.',
    answer: '(i) $AC(x) = \\frac{x}{10} + 20 + \\frac{1000}{x}$. (ii) $x = 100$. (iii) Rs $40$ per copy; OR $MC(100) = AC(100) = $ Rs $40$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Write the average cost $AC(x)$.',
        answer: '$AC(x) = \\frac{x}{10} + 20 + \\frac{1000}{x}$, $x > 0$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the number of copies for which $AC\'(x) = 0$.',
        answer: '$AC\'(x) = \\frac{1}{10} - \\frac{1000}{x^2} = 0$ gives $x^2 = 10000$, so $x = 100$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that the average cost is least at this output and find the least average cost.\nOR\nShow that at this output the marginal cost equals the average cost.',
        answer: '$AC\'\'(x) = \\frac{2000}{x^3} > 0$ for $x > 0$, so $x = 100$ gives the minimum. Least average cost $= 10 + 20 + 10 = $ Rs $40$ per copy.\nOR\n$AC\'\'(100) = \\frac{2000}{10^6} > 0$ confirms the minimum at $x = 100$, where $AC(100) = 10 + 20 + 10 = $ Rs $40$. Marginal cost $MC = C\'(x) = \\frac{x}{5} + 20$, so $MC(100) = 20 + 20 = $ Rs $40$. They are equal.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e11', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At noon, ship $A$ is $20$ km due north of ship $B$. Ship $A$ sails due south at $10$ km/h and ship $B$ sails due east at $15$ km/h. Let $D$ km be the distance between the ships $t$ hours after noon.',
    answer: '(i) $D^2 = (20 - 10t)^2 + (15t)^2$. (ii) $t = \\frac{8}{13}$ h. (iii) $\\frac{60}{\\sqrt{13}} \\approx 16.6$ km; OR decreasing at $10$ km/h.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express $D^2$ in terms of $t$.',
        answer: 'Take $B$\'s starting point as the origin. After $t$ hours, $A$ is at $(0, 20 - 10t)$ and $B$ is at $(15t, 0)$, so $D^2 = (20 - 10t)^2 + (15t)^2 = 325t^2 - 400t + 400$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the time at which the ships are closest.',
        answer: '$\\frac{d(D^2)}{dt} = 650t - 400 = 0$ gives $t = \\frac{8}{13}$ h (about $37$ minutes after noon). Since $D$ is least when $D^2$ is least, this is the time.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Justify that the distance is least at this time, and find the least distance.\nOR\nFind the rate at which the distance between the ships is changing at noon.',
        answer: '$\\frac{d^2(D^2)}{dt^2} = 650 > 0$, so $t = \\frac{8}{13}$ gives the minimum. Then $D^2 = \\left(20 - \\frac{80}{13}\\right)^2 + \\left(\\frac{120}{13}\\right)^2 = \\frac{180^2 + 120^2}{169} = \\frac{46800}{169}$, so $D = \\frac{60\\sqrt{13}}{13} = \\frac{60}{\\sqrt{13}} \\approx 16.6$ km.\nOR\n$2D\\frac{dD}{dt} = 650t - 400$. At $t = 0$, $D = 20$, so $\\frac{dD}{dt} = \\frac{-400}{40} = -10$ km/h. At noon the distance is decreasing at $10$ km/h.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e12', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A gardener has $20$ m of edging to surround a flower bed shaped like a sector of a circle (two straight radii and the arc). Let the radius be $r$ m and the angle of the sector be $\\theta$ radians.',
    answer: '(i) $\\theta = \\frac{20 - 2r}{r}$. (ii) $A(r) = 10r - r^2$. (iii) $r = 5$ m, $\\theta = 2$ rad, area $25$ m$^2$; OR arc $= 10$ m $= 2r$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express $\\theta$ in terms of $r$.',
        answer: 'Perimeter $= 2r + r\\theta = 20$, so $\\theta = \\frac{20 - 2r}{r}$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express the area $A$ of the bed in terms of $r$.',
        answer: '$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}r(20 - 2r) = 10r - r^2$, $0 < r < 10$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the radius and angle that give the largest bed, and its area.\nOR\nShow that for the largest bed, the length of the arc equals the total length of the two radii.',
        answer: '$A\'(r) = 10 - 2r = 0$ gives $r = 5$, and $A\'\'(r) = -2 < 0$, so this is a maximum. Then $\\theta = \\frac{20 - 10}{5} = 2$ radians and the largest area is $50 - 25 = 25$ m$^2$.\nOR\n$A\'(r) = 10 - 2r = 0$ and $A\'\' = -2 < 0$ give the maximum at $r = 5$. The arc is $20 - 2r = 10$ m and the two radii total $2r = 10$ m, so they are equal.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e13', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A motorboat must travel $30$ km upstream against a river current of $4$ km/h. If its speed in still water is $v$ km/h ($v > 4$), the fuel it burns per hour is $kv^3$ litres, where $k$ is a positive constant.',
    answer: '(i) $\\frac{30}{v - 4}$ hours. (ii) $F(v) = \\frac{30kv^3}{v - 4}$. (iii) $v = 6$ km/h, least fuel $3240k$ litres; OR $F(5) = 3750k$, $F(8) = 3840k$, both more than $F(6) = 3240k$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'How long does the trip take?',
        answer: 'Its speed against the current is $v - 4$ km/h, so the time is $\\frac{30}{v - 4}$ hours.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express the total fuel $F$ used on the trip in terms of $v$.',
        answer: '$F(v) = kv^3 \\times \\frac{30}{v - 4} = \\frac{30kv^3}{v - 4}$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the speed in still water that uses the least fuel for the trip, and the least fuel.\nOR\nShow that $v = 6$ is a critical point of $F$, and compare the fuel used at $v = 5$, $6$ and $8$ km/h.',
        answer: '$F\'(v) = 30k\\frac{3v^2(v - 4) - v^3}{(v - 4)^2} = \\frac{30kv^2(2v - 12)}{(v - 4)^2} = \\frac{60kv^2(v - 6)}{(v - 4)^2}$. For $v > 4$, $F\'(v) = 0$ only at $v = 6$; $F\' < 0$ for $4 < v < 6$ and $F\' > 0$ for $v > 6$, so $v = 6$ gives the minimum. Least fuel $= \\frac{30k(216)}{2} = 3240k$ litres.\nOR\n$F\'(v) = \\frac{60kv^2(v - 6)}{(v - 4)^2}$, which is $0$ at $v = 6$, so $v = 6$ is a critical point. $F(5) = \\frac{30k(125)}{1} = 3750k$, $F(6) = \\frac{30k(216)}{2} = 3240k$, $F(8) = \\frac{30k(512)}{4} = 3840k$. The least of these is at $v = 6$.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e14', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A bakery finds that it can sell $x$ cakes a day at a price of Rs $(600 - 4x)$ per cake. Its daily cost of making $x$ cakes is Rs $(2x^2 + 120x + 5000)$.',
    answer: '(i) $P(x) = 480x - 6x^2 - 5000$. (ii) $x = 40$. (iii) Rs $440$ per cake, profit Rs $4600$; OR $P\'(30) = 120 > 0$, so increase output.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Write the daily profit $P$ as a function of $x$.',
        answer: '$P(x) = x(600 - 4x) - (2x^2 + 120x + 5000) = 480x - 6x^2 - 5000$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the number of cakes for which $P\'(x) = 0$.',
        answer: '$P\'(x) = 480 - 12x = 0$ gives $x = 40$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that the profit is greatest at this output, and find the price per cake and the greatest daily profit.\nOR\nThe bakery currently makes $30$ cakes a day. Find $P\'(30)$ and use it to advise whether the bakery should make more or fewer cakes.',
        answer: '$P\'\'(x) = -12 < 0$, so $x = 40$ gives the maximum. Price $= 600 - 160 = $ Rs $440$ per cake, and the greatest profit is $P(40) = 19200 - 9600 - 5000 = $ Rs $4600$ per day.\nOR\n$P\'(30) = 480 - 360 = 120 > 0$, so profit is still increasing at $30$ cakes (about Rs $120$ more for one extra cake). The bakery should make more cakes, up to $40$ a day, where $P\'\' = -12 < 0$ shows profit is greatest.',
      },
    ],
  },
  {
    id: 'c12-aod-r2-e15', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A farmer wants to fence a rectangular field beside a straight river; no fence is needed along the river. Fencing for the side parallel to the river costs Rs $300$ per metre, and for the two sides perpendicular to the river Rs $200$ per metre. His budget is Rs $24{,}000$. Let each perpendicular side be $x$ m and the parallel side $y$ m.',
    answer: '(i) $y = 80 - \\frac{4}{3}x$. (ii) $A(x) = 80x - \\frac{4}{3}x^2$. (iii) $30$ m by $40$ m, area $1200$ m$^2$; OR Rs $12{,}000$ each.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express $y$ in terms of $x$ using the full budget.',
        answer: 'Cost $= 200(2x) + 300y = 24000$, so $400x + 300y = 24000$ and $y = 80 - \\frac{4}{3}x$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express the area $A$ of the field in terms of $x$.',
        answer: '$A(x) = xy = 80x - \\frac{4}{3}x^2$, $0 < x < 60$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the dimensions that give the largest field, and its area.\nOR\nShow that for the largest field, the money spent on the parallel side equals the money spent on the two perpendicular sides together.',
        answer: '$A\'(x) = 80 - \\frac{8}{3}x = 0$ gives $x = 30$, and $A\'\' = -\\frac{8}{3} < 0$, so this is a maximum. Then $y = 80 - 40 = 40$. The field is $30$ m (perpendicular sides) by $40$ m (along the river), with area $1200$ m$^2$.\nOR\n$A\'(x) = 0$ and $A\'\' < 0$ give the maximum at $x = 30$, $y = 40$. Parallel side cost $= 300 \\times 40 = $ Rs $12{,}000$; perpendicular sides cost $= 200 \\times 60 = $ Rs $12{,}000$. They are equal (each half the budget).',
      },
    ],
  },
];
