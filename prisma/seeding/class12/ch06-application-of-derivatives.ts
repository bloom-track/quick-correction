import type { Class12Question } from './types.js';

const C = 'Application of Derivatives';

export const CH06_AOD: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-aod-a01', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The radius of a circular oil patch is increasing at $0.5$ cm/s. The rate at which its area is increasing when the radius is $4$ cm is',
    options: ['$4\\pi$ cm$^2$/s', '$8\\pi$ cm$^2$/s', '$2\\pi$ cm$^2$/s', '$16\\pi$ cm$^2$/s'],
    answer: 'Correct option: A) $4\\pi$ cm$^2$/s. Since $A = \\pi r^2$, $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi (4)(0.5) = 4\\pi$ cm$^2$/s.',
  },
  {
    id: 'c12-aod-a02', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The rate of change of the surface area of a sphere with respect to its radius $r$, when $r = 3$ cm, is',
    options: ['$36\\pi$ cm$^2$/cm', '$12\\pi$ cm$^2$/cm', '$24\\pi$ cm$^2$/cm', '$72\\pi$ cm$^2$/cm'],
    answer: 'Correct option: C) $24\\pi$ cm$^2$/cm. Since $S = 4\\pi r^2$, $\\frac{dS}{dr} = 8\\pi r = 8\\pi(3) = 24\\pi$. ($36\\pi$ is the surface area itself, not its rate of change.)',
  },
  {
    id: 'c12-aod-a03', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The rate of change of the volume of a cube with respect to its total surface area, when the edge is $6$ cm, is',
    options: ['$3$ cm', '$\\frac{3}{2}$ cm', '$108$ cm', '$\\frac{2}{3}$ cm'],
    answer: 'Correct option: B) $\\frac{3}{2}$ cm. With $V = x^3$ and $S = 6x^2$, $\\frac{dV}{dS} = \\frac{dV/dx}{dS/dx} = \\frac{3x^2}{12x} = \\frac{x}{4} = \\frac{6}{4} = \\frac{3}{2}$.',
  },
  {
    id: 'c12-aod-a04', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A point moves along the curve $y = x^3 - 3x$ so that its $x$-coordinate increases at $2$ units per second. The rate at which the slope of the curve is changing when $x = 2$ is',
    options: ['$9$ units/s', '$12$ units/s', '$18$ units/s', '$24$ units/s'],
    answer: 'Correct option: D) $24$ units/s. The slope is $m = \\frac{dy}{dx} = 3x^2 - 3$, so $\\frac{dm}{dt} = 6x \\frac{dx}{dt} = 6(2)(2) = 24$. ($9$ is the slope itself at $x = 2$.)',
  },
  {
    id: 'c12-aod-a05', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = x^2 - 6x + 5$ is strictly increasing on',
    options: ['$(-\\infty, 3)$', '$(3, \\infty)$', '$(5, \\infty)$', '$(-\\infty, \\infty)$'],
    answer: 'Correct option: B) $(3, \\infty)$. $f\'(x) = 2x - 6 > 0$ exactly when $x > 3$.',
  },
  {
    id: 'c12-aod-a06', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f(x) = 3x + \\sin x$ on $\\mathbb{R}$ is',
    options: ['strictly decreasing', 'strictly increasing', 'neither increasing nor decreasing', 'strictly increasing only on $(0, \\pi)$'],
    answer: 'Correct option: B) strictly increasing. $f\'(x) = 3 + \\cos x \\geq 3 - 1 = 2 > 0$ for every real $x$, so $f$ is strictly increasing on all of $\\mathbb{R}$.',
  },
  {
    id: 'c12-aod-a07', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The least value of $k$ for which $f(x) = kx - \\sin x$ is increasing on $\\mathbb{R}$ is',
    options: ['$-1$', '$0$', '$1$', '$2$'],
    answer: 'Correct option: C) $1$. We need $f\'(x) = k - \\cos x \\geq 0$ for all $x$, i.e. $k \\geq \\cos x$ for all $x$. The greatest value of $\\cos x$ is $1$, so $k \\geq 1$ and the least such $k$ is $1$.',
  },
  {
    id: 'c12-aod-a08', chapter: C, topic: 'Increasing and decreasing functions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f(x) = x^3 + 2x$ is strictly increasing on $\\mathbb{R}$.\nReason (R): If $f\'(x) > 0$ for every $x$ in an interval, then $f$ is strictly increasing on that interval.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. R is a standard theorem. Here $f\'(x) = 3x^2 + 2 \\geq 2 > 0$ for every real $x$, so by R, $f$ is strictly increasing on $\\mathbb{R}$; A follows directly from R.',
  },
  {
    id: 'c12-aod-a09', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The function $f(x) = \\log(1 + x) - \\frac{x}{1 + x}$, $x > -1$, is strictly decreasing on',
    options: ['$(0, \\infty)$', '$(-1, \\infty)$', '$(-1, 0)$', '$(-\\infty, 0)$'],
    answer: 'Correct option: C) $(-1, 0)$. $f\'(x) = \\frac{1}{1 + x} - \\frac{1}{(1 + x)^2} = \\frac{x}{(1 + x)^2}$. The denominator is positive, so $f\'(x) < 0$ exactly when $-1 < x < 0$. ($(-\\infty, 0)$ goes outside the domain.)',
  },
  {
    id: 'c12-aod-a10', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The minimum value of $f(x) = 2x^2 - 8x + 11$, $x \\in \\mathbb{R}$, is',
    options: ['$2$', '$3$', '$11$', '$-5$'],
    answer: 'Correct option: B) $3$. $f\'(x) = 4x - 8 = 0$ gives $x = 2$, and $f\'\'(x) = 4 > 0$, so the minimum is $f(2) = 8 - 16 + 11 = 3$. ($2$ is where the minimum occurs, not its value.)',
  },
  {
    id: 'c12-aod-a11', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The maximum value of $f(x) = 7 - |x - 3|$, $x \\in \\mathbb{R}$, and the point where it occurs are',
    options: ['$7$ at $x = 3$', '$3$ at $x = 7$', '$7$ at $x = -3$', 'there is no maximum value'],
    answer: 'Correct option: A) $7$ at $x = 3$. Since $|x - 3| \\geq 0$, $f(x) \\leq 7$, with equality only when $x = 3$.',
  },
  {
    id: 'c12-aod-a12', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The local minimum value of $f(x) = x + \\frac{9}{x}$, $x > 0$, is',
    options: ['$3$', '$-6$', '$6$', '$10$'],
    answer: 'Correct option: C) $6$. $f\'(x) = 1 - \\frac{9}{x^2} = 0$ gives $x = 3$ (since $x > 0$), and $f\'\'(x) = \\frac{18}{x^3} > 0$ there, so the local minimum value is $f(3) = 3 + 3 = 6$.',
  },
  {
    id: 'c12-aod-a13', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The absolute maximum value of $f(x) = x^3 - 3x$ on the interval $[0, 3]$ is',
    options: ['$2$', '$0$', '$-2$', '$18$'],
    answer: 'Correct option: D) $18$. $f\'(x) = 3x^2 - 3 = 0$ gives $x = 1$ in $[0, 3]$. Comparing $f(0) = 0$, $f(1) = -2$ and $f(3) = 27 - 9 = 18$, the absolute maximum is $18$. ($2$ is the local maximum at $x = -1$, which lies outside the interval.)',
  },
  {
    id: 'c12-aod-a14', chapter: C, topic: 'Maxima and minima', type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The function $f(x) = e^{x}$ has no local maximum or local minimum on $\\mathbb{R}$.\nReason (R): $f\'(x) = e^{x} \\neq 0$ for every real $x$.',
    options: [
      'Both A and R are true, and R is the correct explanation of A.',
      'Both A and R are true, but R is not the correct explanation of A.',
      'A is true, but R is false.',
      'A is false, but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. $e^{x}$ is differentiable everywhere, so a local extremum could occur only where $f\'(x) = 0$. Since $e^{x} > 0$ for all $x$, there is no such point, so there is no local extremum.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-aod-b01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'easy', marks: 2,
    text: 'The edge of a cube is increasing at the rate of $3$ cm/s. How fast is the volume of the cube increasing when the edge is $10$ cm long?',
    answer: 'Let the edge be $x$ cm, so $V = x^3$. Then $\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt} = 3(10)^2(3) = 900$. The volume is increasing at $900$ cm$^3$/s.',
    steps: [
      { step: 'Differentiates $V = x^3$ to get $\\frac{dV}{dt} = 3x^2 \\frac{dx}{dt}$', marks: 1 },
      { step: 'Substitutes $x = 10$, $\\frac{dx}{dt} = 3$ to get $900$ cm$^3$/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b02', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: 'A girl $1.8$ m tall walks away from the foot of a $6$ m high lamp post at a speed of $1.4$ m/s. At what rate is the length of her shadow increasing?',
    answer: 'Let $x$ m be her distance from the post and $s$ m the length of her shadow. By similar triangles (lamp top, shadow tip, girl), $\\frac{s}{1.8} = \\frac{x + s}{6}$, so $6s = 1.8x + 1.8s$, giving $4.2s = 1.8x$, i.e. $s = \\frac{3}{7}x$. Hence $\\frac{ds}{dt} = \\frac{3}{7} \\cdot \\frac{dx}{dt} = \\frac{3}{7}(1.4) = 0.6$. The shadow lengthens at $0.6$ m/s.',
    steps: [
      { step: 'Uses similar triangles to get $s = \\frac{3}{7}x$', marks: 1 },
      { step: 'Differentiates and gets $\\frac{ds}{dt} = 0.6$ m/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b03', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: 'The radius of a spherical balloon is increasing at $0.2$ cm/s. Find the rate at which its surface area is increasing when the radius is $5$ cm.',
    answer: '$S = 4\\pi r^2$, so $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt} = 8\\pi(5)(0.2) = 8\\pi$. The surface area is increasing at $8\\pi$ cm$^2$/s.',
    steps: [
      { step: 'Writes $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$', marks: 1 },
      { step: 'Gets $8\\pi$ cm$^2$/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b04', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: 'The total revenue (in rupees) from selling $x$ units of a product is $R(x) = 4x^2 + 25x + 10$. Find the marginal revenue when $x = 6$, and say what it means.',
    answer: 'Marginal revenue is $MR = \\frac{dR}{dx} = 8x + 25$. At $x = 6$, $MR = 48 + 25 = 73$. So when $6$ units are being sold, revenue is increasing at about Rs $73$ per additional unit.',
    steps: [
      { step: 'Finds $\\frac{dR}{dx} = 8x + 25$', marks: 1 },
      { step: 'Gets marginal revenue Rs $73$ at $x = 6$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b05', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'easy', marks: 2,
    text: 'Show that the function $f(x) = e^{2x}$ is strictly increasing on $\\mathbb{R}$.',
    answer: '$f\'(x) = 2e^{2x}$. Since $e^{2x} > 0$ for every real $x$, $f\'(x) > 0$ for all $x \\in \\mathbb{R}$. Hence $f$ is strictly increasing on $\\mathbb{R}$.',
    steps: [
      { step: 'Finds $f\'(x) = 2e^{2x}$', marks: 1 },
      { step: 'Argues $f\'(x) > 0$ for all $x$ and concludes strictly increasing', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b06', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the intervals in which $f(x) = 2x^3 - 9x^2 + 12x + 1$ is strictly increasing or strictly decreasing.',
    answer: '$f\'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$, which is zero at $x = 1, 2$. For $x < 1$ and $x > 2$, $f\'(x) > 0$; for $1 < x < 2$, $f\'(x) < 0$. So $f$ is strictly increasing on $(-\\infty, 1)$ and $(2, \\infty)$, and strictly decreasing on $(1, 2)$.',
    steps: [
      { step: 'Finds $f\'(x) = 6(x - 1)(x - 2)$ and critical points $1, 2$', marks: 1 },
      { step: 'States increasing on $(-\\infty, 1) \\cup (2, \\infty)$ and decreasing on $(1, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b07', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: 'Prove that $f(x) = \\tan x - x$ is strictly increasing on $\\left(0, \\frac{\\pi}{2}\\right)$.',
    answer: '$f\'(x) = \\sec^2 x - 1 = \\tan^2 x$. For $0 < x < \\frac{\\pi}{2}$, $\\tan x > 0$, so $\\tan^2 x > 0$. Hence $f\'(x) > 0$ on the interval and $f$ is strictly increasing on $\\left(0, \\frac{\\pi}{2}\\right)$.',
    steps: [
      { step: 'Finds $f\'(x) = \\sec^2 x - 1 = \\tan^2 x$', marks: 1 },
      { step: 'Shows $\\tan^2 x > 0$ on the interval and concludes', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b08', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'hard', marks: 2,
    text: 'Show that $f(x) = x^3 + 6x^2 + 12x - 5$ is strictly increasing on $\\mathbb{R}$, even though $f\'$ vanishes at one point.',
    answer: '$f\'(x) = 3x^2 + 12x + 12 = 3(x + 2)^2 \\geq 0$ for all $x$, and $f\'(x) = 0$ only at $x = -2$. So $f\'(x) > 0$ on $(-\\infty, -2)$ and on $(-2, \\infty)$, making $f$ strictly increasing on each, and $f$ is continuous at $x = -2$. A single point where the derivative is zero does not break strict increase, so $f$ is strictly increasing on $\\mathbb{R}$. (Equivalently, $f(x) = (x + 2)^3 - 13$, which is strictly increasing.)',
    steps: [
      { step: 'Writes $f\'(x) = 3(x + 2)^2 \\geq 0$, zero only at $x = -2$', marks: 1 },
      { step: 'Argues the isolated zero does not affect strict increase and concludes', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b09', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the local maximum and local minimum values of $f(x) = x^3 - 6x^2 + 9x + 2$.',
    answer: '$f\'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$, zero at $x = 1, 3$. $f\'\'(x) = 6x - 12$: $f\'\'(1) = -6 < 0$, so $x = 1$ is a local maximum with value $f(1) = 1 - 6 + 9 + 2 = 6$; $f\'\'(3) = 6 > 0$, so $x = 3$ is a local minimum with value $f(3) = 27 - 54 + 27 + 2 = 2$.',
    steps: [
      { step: 'Finds critical points $x = 1, 3$', marks: 1 },
      { step: 'Classifies them and gets local max $6$ and local min $2$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b10', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the absolute maximum and absolute minimum values of $f(x) = 12x - x^3$ on $[-1, 3]$.',
    answer: '$f\'(x) = 12 - 3x^2 = 0$ gives $x = \\pm 2$; only $x = 2$ lies in $[-1, 3]$. Values: $f(-1) = -12 + 1 = -11$, $f(2) = 24 - 8 = 16$, $f(3) = 36 - 27 = 9$. Absolute maximum $= 16$ at $x = 2$; absolute minimum $= -11$ at $x = -1$.',
    steps: [
      { step: 'Finds the critical point $x = 2$ in the interval', marks: 1 },
      { step: 'Compares values at $-1, 2, 3$: max $16$, min $-11$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b11', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'easy', marks: 2,
    text: 'Using the second derivative test, find the point of local minimum and the local minimum value of $f(x) = x^2 - 4x + 7$.',
    answer: '$f\'(x) = 2x - 4 = 0$ gives $x = 2$. $f\'\'(x) = 2 > 0$, so $x = 2$ is a point of local minimum, and the local minimum value is $f(2) = 4 - 8 + 7 = 3$.',
    steps: [
      { step: 'Finds $x = 2$ from $f\'(x) = 0$', marks: 1 },
      { step: 'Uses $f\'\'(2) > 0$ and gets minimum value $3$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-b12', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 2,
    text: 'Two positive numbers have sum $15$. Find them if the product of one number and the square of the other is to be as large as possible.',
    answer: 'Let the numbers be $15 - y$ and $y$, and $P = (15 - y)y^2 = 15y^2 - y^3$, $0 < y < 15$. $P\'(y) = 30y - 3y^2 = 3y(10 - y) = 0$ gives $y = 10$. $P\'\'(y) = 30 - 6y = -30 < 0$ at $y = 10$, so $P$ is maximum. The numbers are $5$ and $10$ (the one that is squared is $10$), and the maximum product is $5 \\times 100 = 500$.',
    steps: [
      { step: 'Forms $P = (15 - y)y^2$ and finds $y = 10$', marks: 1 },
      { step: 'Confirms maximum and states numbers $5$ and $10$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-aod-c01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 3,
    text: 'The surface area of a spherical soap bubble is increasing at $8$ cm$^2$/s. Find the rate at which its volume is increasing when the radius is $3$ cm.',
    answer: '$S = 4\\pi r^2$, so $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$. With $\\frac{dS}{dt} = 8$ and $r = 3$: $8 = 24\\pi \\frac{dr}{dt}$, so $\\frac{dr}{dt} = \\frac{1}{3\\pi}$ cm/s. $V = \\frac{4}{3}\\pi r^3$, so $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = 4\\pi(9) \\cdot \\frac{1}{3\\pi} = 12$. The volume is increasing at $12$ cm$^3$/s.',
    steps: [
      { step: 'Uses $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$ to get $\\frac{dr}{dt} = \\frac{1}{3\\pi}$', marks: 1 },
      { step: 'Writes $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$', marks: 1 },
      { step: 'Gets $\\frac{dV}{dt} = 12$ cm$^3$/s', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-c02', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the intervals in which $f(x) = \\frac{x^4}{4} - x^3 - 5x^2 + 24x + 12$ is strictly increasing or strictly decreasing.',
    answer: '$f\'(x) = x^3 - 3x^2 - 10x + 24$. Since $f\'(2) = 8 - 12 - 20 + 24 = 0$, $(x - 2)$ is a factor: $f\'(x) = (x - 2)(x^2 - x - 12) = (x + 3)(x - 2)(x - 4)$. Critical points: $-3, 2, 4$. Signs: $f\' < 0$ on $(-\\infty, -3)$, $f\' > 0$ on $(-3, 2)$, $f\' < 0$ on $(2, 4)$, $f\' > 0$ on $(4, \\infty)$. So $f$ is strictly increasing on $(-3, 2)$ and $(4, \\infty)$, and strictly decreasing on $(-\\infty, -3)$ and $(2, 4)$.',
    steps: [
      { step: 'Finds $f\'(x)$ and factorises as $(x + 3)(x - 2)(x - 4)$', marks: 1 },
      { step: 'Determines the sign of $f\'$ on each of the four intervals', marks: 1 },
      { step: 'States increasing on $(-3, 2) \\cup (4, \\infty)$ and decreasing on $(-\\infty, -3) \\cup (2, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-c03', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the absolute maximum and absolute minimum values of $f(x) = 2\\sin x + \\sin 2x$ on $[0, 2\\pi]$.',
    answer: '$f\'(x) = 2\\cos x + 2\\cos 2x = 2(2\\cos^2 x + \\cos x - 1) = 2(2\\cos x - 1)(\\cos x + 1)$. $f\'(x) = 0$ when $\\cos x = \\frac{1}{2}$, i.e. $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$, or $\\cos x = -1$, i.e. $x = \\pi$. Values: $f(0) = 0$, $f\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3} + \\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{2}$, $f(\\pi) = 0$, $f\\left(\\frac{5\\pi}{3}\\right) = -\\sqrt{3} - \\frac{\\sqrt{3}}{2} = -\\frac{3\\sqrt{3}}{2}$, $f(2\\pi) = 0$. Absolute maximum $= \\frac{3\\sqrt{3}}{2}$ at $x = \\frac{\\pi}{3}$; absolute minimum $= -\\frac{3\\sqrt{3}}{2}$ at $x = \\frac{5\\pi}{3}$.',
    steps: [
      { step: 'Finds and factorises $f\'(x) = 2(2\\cos x - 1)(\\cos x + 1)$', marks: 1 },
      { step: 'Finds critical points $\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$ in the interval', marks: 1 },
      { step: 'Compares values with endpoints: max $\\frac{3\\sqrt{3}}{2}$, min $-\\frac{3\\sqrt{3}}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-c04', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 3,
    text: 'An open box is made from a square sheet of metal of side $24$ cm by cutting equal squares from each corner and folding up the sides. Find the side of the square to be cut off so that the box has the largest possible volume, and find that volume.',
    answer: 'Let the cut square have side $x$ cm, $0 < x < 12$. The box has base $(24 - 2x)$ by $(24 - 2x)$ and height $x$, so $V = x(24 - 2x)^2$. $V\'(x) = (24 - 2x)^2 - 4x(24 - 2x) = (24 - 2x)(24 - 6x) = 12(x - 12)(x - 4)$. In $(0, 12)$, $V\' = 0$ at $x = 4$. $V\'\'(x) = 24x - 192$, so $V\'\'(4) = -96 < 0$: maximum. The square cut off should have side $4$ cm, and the largest volume is $4 \\times 16^2 = 1024$ cm$^3$.',
    steps: [
      { step: 'Forms $V = x(24 - 2x)^2$', marks: 1 },
      { step: 'Solves $V\'(x) = 0$ to get $x = 4$ and checks it is a maximum', marks: 1 },
      { step: 'States side $4$ cm and maximum volume $1024$ cm$^3$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-aod-d01', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'medium', marks: 5,
    text: 'For $f(x) = x + 2\\cos x$, $x \\in [0, 2\\pi]$, find the intervals in which $f$ is strictly increasing or strictly decreasing. Hence find the points of local maximum and local minimum and the corresponding values.',
    answer: '$f\'(x) = 1 - 2\\sin x$, which is zero when $\\sin x = \\frac{1}{2}$, i.e. $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. On $\\left(0, \\frac{\\pi}{6}\\right)$, $\\sin x < \\frac{1}{2}$ so $f\' > 0$; on $\\left(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right)$, $\\sin x > \\frac{1}{2}$ so $f\' < 0$; on $\\left(\\frac{5\\pi}{6}, 2\\pi\\right)$, $\\sin x < \\frac{1}{2}$ so $f\' > 0$. Hence $f$ is strictly increasing on $\\left[0, \\frac{\\pi}{6}\\right]$ and $\\left[\\frac{5\\pi}{6}, 2\\pi\\right]$, and strictly decreasing on $\\left[\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right]$. By the first derivative test, $f\'$ changes from $+$ to $-$ at $\\frac{\\pi}{6}$, a local maximum with value $\\frac{\\pi}{6} + 2\\cos\\frac{\\pi}{6} = \\frac{\\pi}{6} + \\sqrt{3}$; and from $-$ to $+$ at $\\frac{5\\pi}{6}$, a local minimum with value $\\frac{5\\pi}{6} + 2\\cos\\frac{5\\pi}{6} = \\frac{5\\pi}{6} - \\sqrt{3}$.',
    steps: [
      { step: 'Finds $f\'(x) = 1 - 2\\sin x$ and critical points $\\frac{\\pi}{6}, \\frac{5\\pi}{6}$', marks: 1 },
      { step: 'Determines the sign of $f\'$ on the three sub-intervals', marks: 1 },
      { step: 'States increasing on $\\left[0, \\frac{\\pi}{6}\\right] \\cup \\left[\\frac{5\\pi}{6}, 2\\pi\\right]$ and decreasing on $\\left[\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right]$', marks: 1 },
      { step: 'Identifies local maximum at $\\frac{\\pi}{6}$ with value $\\frac{\\pi}{6} + \\sqrt{3}$', marks: 1 },
      { step: 'Identifies local minimum at $\\frac{5\\pi}{6}$ with value $\\frac{5\\pi}{6} - \\sqrt{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-d02', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f(x) = (x - 2)^3(x + 3)^2$. Find the intervals in which $f$ is strictly increasing or strictly decreasing. Find the local maximum and local minimum values, and show that $x = 2$ is neither a point of local maximum nor of local minimum.',
    answer: '$f\'(x) = 3(x - 2)^2(x + 3)^2 + 2(x - 2)^3(x + 3) = (x - 2)^2(x + 3)[3(x + 3) + 2(x - 2)] = (x - 2)^2(x + 3)(5x + 5) = 5(x - 2)^2(x + 3)(x + 1)$. Critical points: $x = -3, -1, 2$. Since $(x - 2)^2 \\geq 0$, the sign of $f\'$ is the sign of $(x + 3)(x + 1)$ (except at $x = 2$ where $f\' = 0$): positive for $x < -3$, negative for $-3 < x < -1$, positive for $x > -1$ (with $x \\neq 2$). So $f$ is strictly increasing on $(-\\infty, -3)$ and on $(-1, \\infty)$ (the single zero of $f\'$ at $x = 2$ does not break this), and strictly decreasing on $(-3, -1)$. At $x = -3$, $f\'$ changes from $+$ to $-$: local maximum, value $f(-3) = 0$. At $x = -1$, $f\'$ changes from $-$ to $+$: local minimum, value $f(-1) = (-3)^3(2)^2 = -108$. At $x = 2$, $f\'$ is positive on both sides, so $f\'$ does not change sign; $x = 2$ is a point of inflection, neither a local maximum nor a local minimum.',
    steps: [
      { step: 'Differentiates and factorises $f\'(x) = 5(x - 2)^2(x + 3)(x + 1)$', marks: 1 },
      { step: 'Finds the critical points $-3, -1, 2$ and the sign of $f\'$ around them', marks: 1 },
      { step: 'States increasing on $(-\\infty, -3) \\cup (-1, \\infty)$ and decreasing on $(-3, -1)$', marks: 1 },
      { step: 'Gets local maximum $0$ at $x = -3$ and local minimum $-108$ at $x = -1$', marks: 1 },
      { step: 'Shows $f\'$ does not change sign at $x = 2$, so it is neither', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-d03', chapter: C, topic: 'Maxima and minima', type: 'long', complexity: 'medium', marks: 5,
    text: 'The function $f(x) = x^3 + ax^2 + bx + 5$ has a local maximum at $x = -1$ and a local minimum at $x = 3$. Find $a$ and $b$, verify the nature of both points using the second derivative test, and find the local maximum and local minimum values.',
    answer: '$f\'(x) = 3x^2 + 2ax + b$. Since $-1$ and $3$ are critical points, $f\'(-1) = 3 - 2a + b = 0$ and $f\'(3) = 27 + 6a + b = 0$. Subtracting: $24 + 8a = 0$, so $a = -3$, and then $b = 2a - 3 = -9$. So $f(x) = x^3 - 3x^2 - 9x + 5$ and $f\'\'(x) = 6x - 6$. $f\'\'(-1) = -12 < 0$, so $x = -1$ is a local maximum; $f\'\'(3) = 12 > 0$, so $x = 3$ is a local minimum. Local maximum value $f(-1) = -1 - 3 + 9 + 5 = 10$; local minimum value $f(3) = 27 - 27 - 27 + 5 = -22$.',
    steps: [
      { step: 'Sets up $f\'(-1) = 0$ and $f\'(3) = 0$', marks: 1 },
      { step: 'Solves to get $a = -3$, $b = -9$', marks: 1 },
      { step: 'Verifies $f\'\'(-1) < 0$ and $f\'\'(3) > 0$', marks: 1 },
      { step: 'Finds local maximum value $10$', marks: 1 },
      { step: 'Finds local minimum value $-22$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-d04', chapter: C, topic: 'Rate of change', type: 'long', complexity: 'medium', marks: 5,
    text: 'A water tank is in the shape of an inverted right circular cone (vertex down) of height $12$ m and top radius $4$ m. Water is pumped in at the rate of $2\\pi$ m$^3$/min. When the water is $6$ m deep, find (a) the rate at which the water level is rising, (b) the rate at which the radius of the water surface is increasing, and (c) the rate at which the area of the water surface is increasing.',
    answer: 'Let the water have depth $h$ and surface radius $r$. By similar triangles, $\\frac{r}{h} = \\frac{4}{12}$, so $r = \\frac{h}{3}$. Volume $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h^3}{27}$, so $\\frac{dV}{dt} = \\frac{\\pi h^2}{9} \\frac{dh}{dt}$. (a) At $h = 6$: $2\\pi = \\frac{36\\pi}{9} \\frac{dh}{dt} = 4\\pi \\frac{dh}{dt}$, so $\\frac{dh}{dt} = \\frac{1}{2}$ m/min. (b) $\\frac{dr}{dt} = \\frac{1}{3}\\frac{dh}{dt} = \\frac{1}{6}$ m/min. (c) The surface area is $A = \\pi r^2$, and at $h = 6$, $r = 2$, so $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(2)\\left(\\frac{1}{6}\\right) = \\frac{2\\pi}{3}$ m$^2$/min.',
    steps: [
      { step: 'Uses similar triangles to get $r = \\frac{h}{3}$', marks: 1 },
      { step: 'Writes $V = \\frac{\\pi h^3}{27}$ and differentiates', marks: 1 },
      { step: 'Gets $\\frac{dh}{dt} = \\frac{1}{2}$ m/min', marks: 1 },
      { step: 'Gets $\\frac{dr}{dt} = \\frac{1}{6}$ m/min', marks: 1 },
      { step: 'Gets $\\frac{dA}{dt} = \\frac{2\\pi}{3}$ m$^2$/min', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-d05', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: 'A closed cylindrical tin is to hold $256\\pi$ cm$^3$. The metal for the top and bottom costs twice as much per cm$^2$ as the metal for the curved side. Find the radius and height of the tin that make the cost of metal least, and show that for this tin the height is four times the radius.',
    answer: 'Let the radius be $r$ cm and height $h$ cm, so $\\pi r^2 h = 256\\pi$, i.e. $h = \\frac{256}{r^2}$. If the side costs Rs $k$ per cm$^2$, the cost is $C = 2k(2\\pi r^2) + k(2\\pi r h) = k\\left(4\\pi r^2 + \\frac{512\\pi}{r}\\right)$. $\\frac{dC}{dr} = k\\left(8\\pi r - \\frac{512\\pi}{r^2}\\right) = 0$ gives $r^3 = 64$, so $r = 4$. $\\frac{d^2C}{dr^2} = k\\left(8\\pi + \\frac{1024\\pi}{r^3}\\right) = 24\\pi k > 0$ at $r = 4$, so the cost is least there. Then $h = \\frac{256}{16} = 16$ cm. So the tin should have radius $4$ cm and height $16$ cm, and $h = 16 = 4 \\times 4 = 4r$.',
    steps: [
      { step: 'Uses the volume to write $h = \\frac{256}{r^2}$', marks: 1 },
      { step: 'Forms the cost $C(r) = k\\left(4\\pi r^2 + \\frac{512\\pi}{r}\\right)$ with the doubled top/bottom rate', marks: 1 },
      { step: 'Solves $C\'(r) = 0$ to get $r = 4$', marks: 1 },
      { step: 'Confirms minimum by $C\'\'(4) > 0$', marks: 1 },
      { step: 'Gets $h = 16$ cm and shows $h = 4r$', marks: 1 },
    ],
  },
  {
    id: 'c12-aod-d06', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: 'Find the point on the curve $y = x^2$ that is nearest to the point $(3, 0)$, and find the least distance.',
    answer: 'For a point $(x, x^2)$ on the curve, the square of its distance from $(3, 0)$ is $D(x) = (x - 3)^2 + x^4$. Distance is least when $D$ is least. $D\'(x) = 2(x - 3) + 4x^3 = 2(2x^3 + x - 3) = 2(x - 1)(2x^2 + 2x + 3)$. The quadratic $2x^2 + 2x + 3$ has discriminant $4 - 24 < 0$, so it is never zero, and $D\'(x) = 0$ only at $x = 1$. $D\'\'(x) = 2 + 12x^2 > 0$, so $x = 1$ gives the minimum. The nearest point is $(1, 1)$ and the least distance is $\\sqrt{(1 - 3)^2 + 1^2} = \\sqrt{5}$ units.',
    steps: [
      { step: 'Writes squared distance $D(x) = (x - 3)^2 + x^4$', marks: 1 },
      { step: 'Finds $D\'(x) = 2(x - 1)(2x^2 + 2x + 3)$', marks: 1 },
      { step: 'Shows the quadratic factor has no real root, so $x = 1$ only', marks: 1 },
      { step: 'Confirms minimum with $D\'\'(x) > 0$', marks: 1 },
      { step: 'States nearest point $(1, 1)$ and least distance $\\sqrt{5}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-aod-e01', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A pebble dropped into a still pond produces circular ripples. The radius of the outermost ripple increases at a steady $4$ cm/s, starting from zero when the pebble hits the water.',
    answer: '(i) $80\\pi$ cm$^2$/s. (ii) $8\\pi$ cm/s, constant. (iii) $r = 20$ cm; OR $96\\pi$ cm$^2$/s.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find the rate at which the area enclosed by the outermost ripple is increasing when its radius is $10$ cm.',
        answer: '$A = \\pi r^2$, so $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(10)(4) = 80\\pi$ cm$^2$/s.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the rate at which the circumference of the outermost ripple is increasing. Does it depend on the radius?',
        answer: '$L = 2\\pi r$, so $\\frac{dL}{dt} = 2\\pi \\frac{dr}{dt} = 8\\pi$ cm/s. It is constant, independent of the radius.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the radius at which the enclosed area is increasing at $160\\pi$ cm$^2$/s.\nOR\nFind the rate at which the enclosed area is increasing $3$ seconds after the pebble hits the water.',
        answer: '$\\frac{dA}{dt} = 2\\pi r(4) = 8\\pi r$. Setting $8\\pi r = 160\\pi$ gives $r = 20$ cm.\nOR\nAfter $3$ s, $r = 4 \\times 3 = 12$ cm, so $\\frac{dA}{dt} = 8\\pi(12) = 96\\pi$ cm$^2$/s.',
      },
    ],
  },
  {
    id: 'c12-aod-e02', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A hot-air balloon rises straight up from a point on level ground at a constant $3$ m/s. An observer stands on the ground $40$ m from the lift-off point and watches it. Let $h$ m be the height of the balloon and $\\theta$ the angle of elevation of the balloon from the observer.',
    answer: '(i) $s = \\sqrt{1600 + h^2}$. (ii) $1.8$ m/s. (iii) $\\frac{6}{125}$ rad/s; OR $\\frac{3}{\\sqrt{2}}$ m/s.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the distance $s$ between the observer and the balloon in terms of $h$.',
        answer: 'By Pythagoras, $s = \\sqrt{40^2 + h^2} = \\sqrt{1600 + h^2}$ m.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the rate at which $s$ is increasing when the balloon is $30$ m high.',
        answer: '$s^2 = 1600 + h^2$ gives $s\\frac{ds}{dt} = h\\frac{dh}{dt}$. At $h = 30$, $s = 50$, so $\\frac{ds}{dt} = \\frac{30}{50}(3) = 1.8$ m/s.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the rate at which the angle of elevation $\\theta$ is increasing when the balloon is $30$ m high.\nOR\nFind the rate at which $s$ is increasing when the balloon is $40$ m high.',
        answer: '$\\tan\\theta = \\frac{h}{40}$, so $\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{40}\\frac{dh}{dt}$. At $h = 30$, $\\tan\\theta = \\frac{3}{4}$, so $\\sec^2\\theta = 1 + \\frac{9}{16} = \\frac{25}{16}$. Hence $\\frac{d\\theta}{dt} = \\frac{16}{25} \\cdot \\frac{3}{40} = \\frac{6}{125}$ rad/s $= 0.048$ rad/s.\nOR\nAt $h = 40$, $s = 40\\sqrt{2}$, so $\\frac{ds}{dt} = \\frac{h}{s}\\frac{dh}{dt} = \\frac{40}{40\\sqrt{2}}(3) = \\frac{3}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2} \\approx 2.12$ m/s.',
      },
    ],
  },
  {
    id: 'c12-aod-e03', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A small workshop makes wooden chairs. Its daily cost (in rupees) of making $x$ chairs is $C(x) = \\frac{x^3}{3} - 6x^2 + 50x + 200$, and its daily revenue from selling $x$ chairs is $R(x) = 80x - x^2$.',
    answer: '(i) Rs $30$. (ii) Rs $60$. (iii) $x = 6$, minimum marginal cost Rs $14$; OR Rs $150$ per day.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find the marginal cost when $10$ chairs are made per day.',
        answer: '$MC = C\'(x) = x^2 - 12x + 50$. At $x = 10$, $MC = 100 - 120 + 50 = $ Rs $30$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the marginal revenue when $10$ chairs are sold per day.',
        answer: '$MR = R\'(x) = 80 - 2x$. At $x = 10$, $MR = $ Rs $60$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the daily output at which the marginal cost is least, and that least marginal cost.\nOR\nProduction is $10$ chairs per day and is being increased at the rate of $5$ chairs per day. Find the rate at which the total daily cost is changing with time at this moment.',
        answer: '$MC(x) = x^2 - 12x + 50$, so $\\frac{d(MC)}{dx} = 2x - 12 = 0$ gives $x = 6$, and the second derivative $2 > 0$ confirms a minimum. Least marginal cost $= 36 - 72 + 50 = $ Rs $14$, at $6$ chairs per day.\nOR\n$\\frac{dC}{dt} = C\'(x)\\frac{dx}{dt} = 30 \\times 5 = $ Rs $150$ per day.',
      },
    ],
  },
  {
    id: 'c12-aod-e04', chapter: C, topic: 'Increasing and decreasing functions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A study app tracked its active users after launch. The number of active users (in thousands) $t$ months after launch was modelled by $N(t) = t^3 - 9t^2 + 24t + 100$, $t \\geq 0$.',
    answer: '(i) $N\'(t) = 3(t - 2)(t - 4)$. (ii) Increasing on $[0, 2)$ and $(4, \\infty)$, decreasing on $(2, 4)$. (iii) Local max $120$ thousand at $t = 2$, local min $116$ thousand at $t = 4$; OR $t = 5$ months.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find $N\'(t)$ and its zeros.',
        answer: '$N\'(t) = 3t^2 - 18t + 24 = 3(t - 2)(t - 4)$, zero at $t = 2$ and $t = 4$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'In which periods was the number of active users increasing, and in which was it decreasing?',
        answer: '$N\'(t) > 0$ for $0 \\leq t < 2$ and $t > 4$, and $N\'(t) < 0$ for $2 < t < 4$. So users increased in the first $2$ months and after month $4$, and decreased between months $2$ and $4$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the local maximum and local minimum numbers of active users and when they occurred.\nOR\nShow that $N$ is increasing for $t > 4$, and find the time after the dip when the user count is back at its earlier peak.',
        answer: '$N\'$ changes from $+$ to $-$ at $t = 2$: local maximum $N(2) = 8 - 36 + 48 + 100 = 120$, i.e. $120$ thousand users at $2$ months. $N\'$ changes from $-$ to $+$ at $t = 4$: local minimum $N(4) = 64 - 144 + 96 + 100 = 116$, i.e. $116$ thousand users at $4$ months.\nOR\nFor $t > 4$ both factors $t - 2$ and $t - 4$ are positive, so $N\'(t) > 0$ and $N$ is increasing. The earlier peak is $N(2) = 120$. Solving $t^3 - 9t^2 + 24t + 100 = 120$ gives $t^3 - 9t^2 + 24t - 20 = (t - 2)^2(t - 5) = 0$, so after the dip the count is back at $120$ thousand at $t = 5$ months.',
      },
    ],
  },
  {
    id: 'c12-aod-e05', chapter: C, topic: 'Maxima and minima', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'During a sports day, a ball is thrown straight up from a height of $1.5$ m. Its height (in metres) after $t$ seconds is $h(t) = 1.5 + 20t - 5t^2$.',
    answer: '(i) $10$ m/s upward. (ii) $t = 2$ s. (iii) $21.5$ m; OR $t = 3$ s.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find the velocity of the ball after $1$ second.',
        answer: '$v = h\'(t) = 20 - 10t$, so $v(1) = 10$ m/s (moving upward).',
      },
      {
        label: 'ii', marks: 1,
        text: 'After how many seconds does the ball reach its highest point?',
        answer: '$h\'(t) = 20 - 10t = 0$ gives $t = 2$ s.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the maximum height reached, justifying that it is a maximum.\nOR\nAt what time is the ball moving downward with a speed of $10$ m/s?',
        answer: '$h\'\'(t) = -10 < 0$, so $t = 2$ gives a maximum. Maximum height $h(2) = 1.5 + 40 - 20 = 21.5$ m.\nOR\nMoving down at $10$ m/s means $h\'(t) = -10$: $20 - 10t = -10$, so $t = 3$ s.',
      },
    ],
  },
  {
    id: 'c12-aod-e06', chapter: C, topic: 'Maxima and minima', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'After a tablet is taken, the concentration of a medicine in a patient\'s blood (in mg/L) $t$ hours later is modelled by $C(t) = \\frac{30t}{t^2 + 9}$, $t \\geq 0$.',
    answer: '(i) $C\'(t) = \\frac{30(9 - t^2)}{(t^2 + 9)^2}$. (ii) $t = 3$ hours. (iii) $5$ mg/L; OR decreasing for $t > 3$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Find $C\'(t)$.',
        answer: 'By the quotient rule, $C\'(t) = \\frac{30(t^2 + 9) - 30t(2t)}{(t^2 + 9)^2} = \\frac{30(9 - t^2)}{(t^2 + 9)^2}$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'After how many hours is the concentration greatest?',
        answer: '$C\'(t) = 0$ gives $t^2 = 9$, so $t = 3$ hours ($t \\geq 0$). $C\' > 0$ just before $3$ and $C\' < 0$ just after, so this is a maximum.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the greatest concentration, using the first derivative test to justify that it is a maximum.\nOR\nFind the time interval during which the concentration is decreasing.',
        answer: 'For $0 < t < 3$, $9 - t^2 > 0$ so $C\'(t) > 0$; for $t > 3$, $C\'(t) < 0$. So $C$ rises then falls, and $t = 3$ gives the maximum. Greatest concentration $C(3) = \\frac{90}{18} = 5$ mg/L.\nOR\n$C\'(t) < 0$ when $9 - t^2 < 0$, i.e. $t > 3$. The concentration is decreasing for $t > 3$ hours, i.e. on $(3, \\infty)$.',
      },
    ],
  },
  {
    id: 'c12-aod-e07', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A recycling centre wants an open-top collection bin with a square base and a volume of $32$ m$^3$, using the least possible sheet metal. Let the side of the base be $x$ m and the height $h$ m.',
    answer: '(i) $S(x) = x^2 + \\frac{128}{x}$. (ii) $x = 4$. (iii) base $4$ m by $4$ m, height $2$ m, $S = 48$ m$^2$; OR Rs $2400$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the total sheet area $S$ in terms of $x$ only.',
        answer: '$x^2 h = 32$ gives $h = \\frac{32}{x^2}$. Area = base + four sides $= x^2 + 4xh = x^2 + \\frac{128}{x}$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the critical point of $S(x)$.',
        answer: '$S\'(x) = 2x - \\frac{128}{x^2} = 0$ gives $x^3 = 64$, so $x = 4$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that $S$ is least at this point and find the dimensions of the bin and the least sheet area.\nOR\nIf the sheet costs Rs $50$ per m$^2$, find the least cost of the sheet and verify it is a minimum.',
        answer: '$S\'\'(x) = 2 + \\frac{256}{x^3} = 6 > 0$ at $x = 4$, so $S$ is minimum. Then $h = \\frac{32}{16} = 2$ m. The bin is $4$ m by $4$ m at the base and $2$ m high, and the least area is $16 + 32 = 48$ m$^2$.\nOR\n$S\'\'(4) = 6 > 0$, so $x = 4$ gives the minimum area $S(4) = 16 + 32 = 48$ m$^2$. Least cost $= 48 \\times 50 = $ Rs $2400$.',
      },
    ],
  },
  {
    id: 'c12-aod-e08', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cinema sells $500$ tickets a show at Rs $200$ each. A survey shows that for every Rs $10$ cut in the ticket price, $50$ more tickets would be sold. Let the price be cut by Rs $10x$.',
    answer: '(i) $R(x) = (200 - 10x)(500 + 50x)$. (ii) $x = 5$. (iii) Price Rs $150$, $750$ tickets, revenue Rs $1{,}12{,}500$; OR the gain is Rs $12{,}500$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Write the revenue $R$ per show as a function of $x$.',
        answer: 'Price $= 200 - 10x$, tickets $= 500 + 50x$, so $R(x) = (200 - 10x)(500 + 50x) = 100000 + 5000x - 500x^2$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the value of $x$ for which $R\'(x) = 0$.',
        answer: '$R\'(x) = 5000 - 1000x = 0$ gives $x = 5$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that the revenue is greatest at this value and find the best ticket price and the maximum revenue.\nOR\nFind the best ticket price, and find how much more revenue per show it earns than the current price of Rs $200$.',
        answer: '$R\'\'(x) = -1000 < 0$, so $x = 5$ gives a maximum. Best price $= 200 - 50 = $ Rs $150$, tickets sold $= 750$, and maximum revenue $= 150 \\times 750 = $ Rs $1{,}12{,}500$.\nOR\nSince $R\'\'(x) = -1000 < 0$, $x = 5$ gives the maximum, so the best price is Rs $150$ with revenue $150 \\times 750 = $ Rs $1{,}12{,}500$. The current revenue is $200 \\times 500 = $ Rs $1{,}00{,}000$, so the gain is Rs $12{,}500$ per show.',
      },
    ],
  },
  {
    id: 'c12-aod-e09', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A school is laying out a running track $400$ m long. The track is made of two equal straight parts of length $x$ m joined at each end by a semicircle of radius $r$ m. The area of the rectangle enclosed between the two straight parts is to be used as a football field and should be as large as possible.',
    answer: '(i) $x = 200 - \\pi r$. (ii) $A(r) = 400r - 2\\pi r^2$. (iii) $r = \\frac{100}{\\pi}$ m, $x = 100$ m, maximum area $\\frac{20000}{\\pi}$ m$^2$; OR the straight parts total $200$ m, half the track.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express $x$ in terms of $r$.',
        answer: 'Track length $= 2x + 2\\pi r = 400$ (two straights plus two semicircles), so $x = 200 - \\pi r$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express the area $A$ of the rectangular field in terms of $r$.',
        answer: 'The rectangle is $x$ by $2r$, so $A = 2rx = 2r(200 - \\pi r) = 400r - 2\\pi r^2$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the dimensions of the field that give the maximum area, and the maximum area.\nOR\nShow that when the field\'s area is greatest, the two straight parts together make up exactly half the length of the track.',
        answer: '$A\'(r) = 400 - 4\\pi r = 0$ gives $r = \\frac{100}{\\pi}$, and $A\'\'(r) = -4\\pi < 0$, so this is a maximum. Then $x = 200 - 100 = 100$ m and width $2r = \\frac{200}{\\pi}$ m. Maximum area $= 100 \\times \\frac{200}{\\pi} = \\frac{20000}{\\pi} \\approx 6366$ m$^2$.\nOR\n$A\'(r) = 400 - 4\\pi r = 0$ and $A\'\'(r) = -4\\pi < 0$ give the maximum at $r = \\frac{100}{\\pi}$. Then $x = 200 - \\pi \\cdot \\frac{100}{\\pi} = 100$ m, so the two straights total $2x = 200$ m, which is half of $400$ m.',
      },
    ],
  },
  {
    id: 'c12-aod-e10', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A truck makes a $500$ km trip at a constant speed of $v$ km/h. Its fuel cost is Rs $\\frac{v^2}{8}$ per hour, and the driver is paid Rs $800$ per hour.',
    answer: '(i) $\\frac{500}{v}$ hours. (ii) $C(v) = 62.5v + \\frac{400000}{v}$. (iii) $v = 80$ km/h, least cost Rs $10{,}000$; OR fuel and wages are each Rs $5000$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'How long does the trip take?',
        answer: 'Time $= \\frac{\\text{distance}}{\\text{speed}} = \\frac{500}{v}$ hours.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Express the total cost $C$ of the trip in terms of $v$.',
        answer: '$C(v) = \\frac{500}{v}\\left(\\frac{v^2}{8} + 800\\right) = 62.5v + \\frac{400000}{v}$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the speed that makes the total cost least, and the least cost.\nOR\nShow that at the most economical speed, the total fuel cost equals the total wages paid to the driver.',
        answer: '$C\'(v) = 62.5 - \\frac{400000}{v^2} = 0$ gives $v^2 = 6400$, so $v = 80$ km/h. $C\'\'(v) = \\frac{800000}{v^3} > 0$, so this is a minimum. Least cost $= 62.5(80) + \\frac{400000}{80} = 5000 + 5000 = $ Rs $10{,}000$.\nOR\nAs above, $C\'(v) = 0$ gives $v = 80$ km/h and $C\'\'(80) > 0$. The trip takes $\\frac{500}{80} = 6.25$ h. Fuel $= 6.25 \\times \\frac{6400}{8} = 6.25 \\times 800 = $ Rs $5000$; wages $= 6.25 \\times 800 = $ Rs $5000$. They are equal.',
      },
    ],
  },
  {
    id: 'c12-aod-e11', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'The entrance of a heritage building is a semicircular arch of radius $10$ m standing on level ground. A rectangular glass door is to be fitted inside the arch with its base on the ground (along the diameter) and its top two corners touching the arch. Let the half-width of the door be $x$ m.',
    answer: '(i) $A(x) = 2x\\sqrt{100 - x^2}$. (ii) $x = 5\\sqrt{2}$. (iii) $10\\sqrt{2}$ m by $5\\sqrt{2}$ m, area $100$ m$^2$; OR height $= 5\\sqrt{2} = \\frac{1}{2} \\times$ width.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the area $A$ of the door in terms of $x$.',
        answer: 'A top corner $(x, y)$ lies on the arch $x^2 + y^2 = 100$, so the height is $y = \\sqrt{100 - x^2}$. Width $= 2x$, so $A(x) = 2x\\sqrt{100 - x^2}$, $0 < x < 10$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the value of $x$ at which the area is greatest. (Hint: maximise $A^2$.)',
        answer: '$A^2 = 4x^2(100 - x^2) = 400x^2 - 4x^4$. $\\frac{d(A^2)}{dx} = 800x - 16x^3 = 16x(50 - x^2) = 0$ gives $x = 5\\sqrt{2}$.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Find the dimensions of the door of largest area and that area.\nOR\nShow that the door of largest area has height equal to half its width.',
        answer: 'The second derivative of $A^2$ is $800 - 48x^2 = 800 - 2400 < 0$ at $x = 5\\sqrt{2}$, so it is a maximum. Width $= 2x = 10\\sqrt{2}$ m, height $= \\sqrt{100 - 50} = 5\\sqrt{2}$ m, and maximum area $= 10\\sqrt{2} \\times 5\\sqrt{2} = 100$ m$^2$.\nOR\nAt the maximum, $x = 5\\sqrt{2}$ (the second derivative of $A^2$ is negative there). Width $= 10\\sqrt{2}$ and height $= \\sqrt{100 - 50} = 5\\sqrt{2}$, which is half the width.',
      },
    ],
  },
  {
    id: 'c12-aod-e12', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A camping tent is shaped like a right circular cone. Its slant height (the length of canvas from the tip to the ground) is fixed at $3$ m. The organisers want the tent to have the greatest possible volume. Let the height be $h$ m and the base radius $r$ m.',
    answer: '(i) $V = \\frac{\\pi}{3}(9h - h^3)$. (ii) $h = \\sqrt{3}$ m. (iii) $r = \\sqrt{6}$ m, maximum volume $2\\sqrt{3}\\pi$ m$^3$; OR $r = \\sqrt{2}h$.',
    parts: [
      {
        label: 'i', marks: 1,
        text: 'Express the volume $V$ of the tent in terms of $h$.',
        answer: '$r^2 + h^2 = 9$ gives $r^2 = 9 - h^2$. So $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi}{3}(9h - h^3)$, $0 < h < 3$.',
      },
      {
        label: 'ii', marks: 1,
        text: 'Find the height at which $\\frac{dV}{dh} = 0$.',
        answer: '$\\frac{dV}{dh} = \\frac{\\pi}{3}(9 - 3h^2) = 0$ gives $h^2 = 3$, so $h = \\sqrt{3}$ m.',
      },
      {
        label: 'iii', marks: 2,
        text: 'Show that the volume is greatest at this height, and find the base radius and the maximum volume.\nOR\nShow that for the tent of greatest volume, the base radius is $\\sqrt{2}$ times the height.',
        answer: '$\\frac{d^2V}{dh^2} = -2\\pi h < 0$ at $h = \\sqrt{3}$, so $V$ is maximum. Then $r^2 = 9 - 3 = 6$, $r = \\sqrt{6}$ m, and $V = \\frac{\\pi}{3}(9\\sqrt{3} - 3\\sqrt{3}) = 2\\sqrt{3}\\pi \\approx 10.88$ m$^3$.\nOR\n$\\frac{d^2V}{dh^2} = -2\\pi h < 0$, so $h = \\sqrt{3}$ gives the maximum. Then $r^2 = 9 - h^2 = 6 = 2h^2$, so $r = \\sqrt{2}h$.',
      },
    ],
  },
];
