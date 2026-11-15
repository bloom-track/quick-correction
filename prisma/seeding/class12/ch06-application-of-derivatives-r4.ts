import type { Class12Question } from './types.js';

const C = 'Application of Derivatives';

const AR_OPTS = [
  `Both A and R are true, and R is the correct explanation of A.`,
  `Both A and R are true, but R is not the correct explanation of A.`,
  `A is true, but R is false.`,
  `A is false, but R is true.`,
];

export const CH06_AOD_R4: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-aod-r4-a01', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The rate of change of $x^3$ with respect to $x^2$ at $x = 2$ is`,
    options: [`$6$`, `$3$`, `$12$`, `$4$`],
    answer: `Correct option: B) $3$. $\\frac{d(x^3)}{d(x^2)} = \\frac{3x^2}{2x} = \\frac{3x}{2}$, which is $3$ at $x = 2$. ($12$ is $\\frac{d(x^3)}{dx}$, and $6$ is only $3x$.)`,
  },
  {
    id: 'c12-aod-r4-a02', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The volume of a cube is increasing at the rate of $9$ cm$^3$/s. At the instant when its edge is $3$ cm, the edge is increasing at the rate of`,
    options: [`$\\frac{1}{3}$ cm/s`, `$1$ cm/s`, `$3$ cm/s`, `$9$ cm/s`],
    answer: `Correct option: A) $\\frac{1}{3}$ cm/s. $V = a^3$ gives $\\frac{dV}{dt} = 3a^2\\frac{da}{dt}$, so $9 = 27\\frac{da}{dt}$ and $\\frac{da}{dt} = \\frac{1}{3}$.`,
  },
  {
    id: 'c12-aod-r4-a03', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The radius of a metal sphere is increasing at $2$ cm/s. At the instant its surface area is increasing at $48\\pi$ cm$^2$/s, the radius is`,
    options: [`$1$ cm`, `$2$ cm`, `$3$ cm`, `$6$ cm`],
    answer: `Correct option: C) $3$ cm. $S = 4\\pi r^2$ gives $\\frac{dS}{dt} = 8\\pi r\\frac{dr}{dt} = 16\\pi r$. Setting $16\\pi r = 48\\pi$ gives $r = 3$.`,
  },
  {
    id: 'c12-aod-r4-a04', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'medium', marks: 1,
    text: `A particle moves along a line with $s = t^3 - 6t^2 + 9t$ metres at time $t$ seconds ($t \\geq 0$). The least value of its velocity is`,
    options: [`$9$ m/s`, `$0$ m/s`, `$-12$ m/s`, `$-3$ m/s`],
    answer: `Correct option: D) $-3$ m/s. $v = 3t^2 - 12t + 9 = 3(t - 2)^2 - 3$, which is least at $t = 2$ with value $-3$. ($9$ is the starting velocity, not the least.)`,
  },
  {
    id: 'c12-aod-r4-a05', chapter: C, topic: 'Rate of change', type: 'mcq', complexity: 'easy', marks: 1,
    text: `A right circular cone has its height always equal to its base radius $r$. The rate of change of its volume with respect to $r$, when $r = 3$ cm, is`,
    options: [`$3\\pi$ cm$^2$`, `$9\\pi$ cm$^2$`, `$27\\pi$ cm$^2$`, `$9$ cm$^2$`],
    answer: `Correct option: B) $9\\pi$ cm$^2$. With $h = r$, $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi r^3}{3}$, so $\\frac{dV}{dr} = \\pi r^2 = 9\\pi$ at $r = 3$.`,
  },
  {
    id: 'c12-aod-r4-a06', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The function $f(x) = e^{x} - x$ is strictly decreasing on`,
    options: [`$(0, \\infty)$`, `$(-\\infty, 0)$`, `$\\mathbb{R}$`, `$(-1, 1)$`],
    answer: `Correct option: B) $(-\\infty, 0)$. $f'(x) = e^{x} - 1$, which is negative exactly when $x < 0$. On $(0, \\infty)$ it is positive, so $f$ is increasing there.`,
  },
  {
    id: 'c12-aod-r4-a07', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The function $f(x) = x|x|$ is`,
    options: [`strictly increasing only on $(0, \\infty)$`, `strictly decreasing for $x < 0$ and strictly increasing for $x > 0$`, `strictly increasing on $\\mathbb{R}$`, `strictly decreasing on $\\mathbb{R}$`],
    answer: `Correct option: C) strictly increasing on $\\mathbb{R}$. $f(x) = x^2$ for $x \\geq 0$ and $-x^2$ for $x < 0$, so $f'(x) = 2|x| \\geq 0$ with equality only at $x = 0$. A derivative that is zero at a single point does not stop $f$ from being strictly increasing.`,
  },
  {
    id: 'c12-aod-r4-a08', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The set of all values of $a$ for which $f(x) = \\sqrt{3}\\sin x + \\cos x - ax + b$ is strictly decreasing on $\\mathbb{R}$ is`,
    options: [`$a \\leq 2$`, `$a \\geq 1$`, `$a \\leq -2$`, `$a \\geq 2$`],
    answer: `Correct option: D) $a \\geq 2$. $f'(x) = \\sqrt{3}\\cos x - \\sin x - a = 2\\cos\\left(x + \\frac{\\pi}{6}\\right) - a \\leq 2 - a$. So $f' \\leq 0$ for all $x$ exactly when $a \\geq 2$ (at $a = 2$, $f'$ vanishes only at isolated points).`,
  },
  {
    id: 'c12-aod-r4-a09', chapter: C, topic: 'Increasing and decreasing functions', type: 'mcq', complexity: 'medium', marks: 1,
    text: `Which of the following is an interval on which $f(x) = x^2 e^{-x}$ is strictly decreasing?`,
    options: [`$(0, 2)$`, `$(-\\infty, 2)$`, `$(2, \\infty)$`, `$(0, \\infty)$`],
    answer: `Correct option: C) $(2, \\infty)$. $f'(x) = e^{-x}x(2 - x)$, which is negative for $x > 2$ (and for $x < 0$). On $(0, 2)$ it is positive, so $f$ is increasing there; this rules out the other options.`,
  },
  {
    id: 'c12-aod-r4-a10', chapter: C, topic: 'Increasing and decreasing functions', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): The product of two strictly increasing functions on $\\mathbb{R}$ is always strictly increasing on $\\mathbb{R}$.\nReason (R): The functions $f(x) = x$ and $g(x) = x$ are both strictly increasing on $\\mathbb{R}$, but $f(x)g(x) = x^2$ is not strictly increasing on $\\mathbb{R}$.`,
    options: AR_OPTS,
    answer: `Correct option: D) A is false, but R is true. R is true: $x$ is strictly increasing, but $x^2$ decreases on $(-\\infty, 0)$ (for instance, $(-2)^2 = 4 > (-1)^2 = 1$). That example is a counterexample to A, so A is false.`,
  },
  {
    id: 'c12-aod-r4-a11', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'hard', marks: 1,
    text: `The minimum value of $f(x) = x^{x}$ for $x > 0$ is`,
    options: [`$e^{1/e}$`, `$e^{-1/e}$`, `$e^{-e}$`, `$\\frac{1}{e}$`],
    answer: `Correct option: B) $e^{-1/e}$. $\\log f = x\\log x$, so $\\frac{f'}{f} = \\log x + 1$, which vanishes at $x = \\frac{1}{e}$ and changes from negative to positive there. The minimum value is $\\left(\\frac{1}{e}\\right)^{1/e} = e^{-1/e} \\approx 0.69$, not $\\frac{1}{e}$.`,
  },
  {
    id: 'c12-aod-r4-a12', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The minimum value of $f(x) = |x - 2| + |x - 6|$, $x \\in \\mathbb{R}$, is`,
    options: [`$0$`, `$2$`, `$4$`, `$8$`],
    answer: `Correct option: C) $4$. For $2 \\leq x \\leq 6$ the sum is $(x - 2) + (6 - x) = 4$. For $x < 2$ it is $8 - 2x > 4$, and for $x > 6$ it is $2x - 8 > 4$, so the least value is $4$.`,
  },
  {
    id: 'c12-aod-r4-a13', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: `The maximum value of $f(x) = \\frac{1}{x^2 - 4x + 5}$, $x \\in \\mathbb{R}$, is`,
    options: [`$\\frac{1}{5}$`, `$\\frac{1}{2}$`, `$2$`, `$1$`],
    answer: `Correct option: D) $1$. $x^2 - 4x + 5 = (x - 2)^2 + 1 \\geq 1$, with least value $1$ at $x = 2$. So $f$ is greatest there, with value $\\frac{1}{1} = 1$.`,
  },
  {
    id: 'c12-aod-r4-a14', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'easy', marks: 1,
    text: `For the function $f(x) = x^3 - 3x^2 + 3x + 7$, the point $x = 1$ is`,
    options: [`a point of local maximum`, `a point of local minimum`, `neither a point of local maximum nor of local minimum`, `not a critical point`],
    answer: `Correct option: C) neither a point of local maximum nor of local minimum. $f'(x) = 3(x - 1)^2$, which is zero at $x = 1$ (so it is a critical point) but is positive on both sides. The sign does not change, so there is no extremum.`,
  },
  {
    id: 'c12-aod-r4-a15', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: `The absolute maximum value of $f(x) = x + \\frac{1}{x}$ on the interval $\\left[\\frac{1}{2}, 3\\right]$ is`,
    options: [`$\\frac{5}{2}$`, `$2$`, `$\\frac{10}{3}$`, `$3$`],
    answer: `Correct option: C) $\\frac{10}{3}$. $f'(x) = 1 - \\frac{1}{x^2} = 0$ gives $x = 1$ with $f(1) = 2$. The end values are $f\\left(\\frac{1}{2}\\right) = \\frac{5}{2}$ and $f(3) = \\frac{10}{3}$, and the greatest of the three is $\\frac{10}{3}$. ($2$ is the minimum.)`,
  },
  {
    id: 'c12-aod-r4-a16', chapter: C, topic: 'Maxima and minima', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): The function $f(x) = x^2$ on the open interval $(0, 1)$ has neither an absolute maximum nor an absolute minimum.\nReason (R): Every continuous function on an interval attains an absolute maximum value on that interval.`,
    options: AR_OPTS,
    answer: `Correct option: C) A is true, but R is false. A is true: $x^2$ is strictly increasing on $(0, 1)$, so it takes values arbitrarily close to $0$ and $1$ but never equals them. R is false: the continuous function $x^2$ itself has no absolute maximum on $(0, 1)$. A maximum is guaranteed only on a closed interval $[a, b]$.`,
  },
  {
    id: 'c12-aod-r4-a17', chapter: C, topic: 'Maxima and minima', type: 'mcq', complexity: 'medium', marks: 1,
    text: `For the function $f(x) = x^{2/3}$, the point $x = 0$ is`,
    options: [`a point of local maximum`, `not a point of local extremum, because $f'(0)$ does not exist`, `a point of local minimum, although $f'(0)$ does not exist`, `a point of local minimum, because $f'(0) = 0$`],
    answer: `Correct option: C) a point of local minimum, although $f'(0)$ does not exist. $f(x) = x^{2/3} \\geq 0 = f(0)$ for all $x$, so $0$ is a minimum. $f'(x) = \\frac{2}{3}x^{-1/3}$ is undefined at $0$, so it is a critical point where the derivative does not exist.`,
  },
  {
    id: 'c12-aod-r4-a18', chapter: C, topic: 'Optimisation word problems', type: 'mcq', complexity: 'easy', marks: 1,
    text: `A closed right circular cylinder has a fixed volume. Its total surface area is least when its height is equal to`,
    options: [`its base radius $r$`, `its base diameter $2r$`, `$4r$`, `$\\frac{r}{2}$`],
    answer: `Correct option: B) its base diameter $2r$. With $V = \\pi r^2 h$ fixed, $S = 2\\pi r^2 + \\frac{2V}{r}$, and $\\frac{dS}{dr} = 4\\pi r - \\frac{2V}{r^2} = 0$ gives $V = 2\\pi r^3$. Then $\\pi r^2 h = 2\\pi r^3$, so $h = 2r$.`,
  },
  {
    id: 'c12-aod-r4-a19', chapter: C, topic: 'Optimisation word problems', type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): For two positive numbers $x$ and $y$ whose product is a fixed constant $k$, the sum $x + y$ is least when $x = y$.\nReason (R): The function $g(x) = x + \\frac{k}{x}$ has $g'(x) = 0$ at $x = \\sqrt{k}$ and $g''(\\sqrt{k}) = \\frac{2}{\\sqrt{k}} > 0$.`,
    options: AR_OPTS,
    answer: `Correct option: A) Both A and R are true, and R is the correct explanation of A. Here $y = \\frac{k}{x}$, so the sum is $g(x)$. R shows $g$ has a local minimum at $x = \\sqrt{k}$, where $y = \\frac{k}{\\sqrt{k}} = \\sqrt{k} = x$. That is exactly the statement in A.`,
  },
  {
    id: 'c12-aod-r4-a20', chapter: C, topic: 'Optimisation word problems', type: 'mcq', complexity: 'easy', marks: 1,
    text: `A firm's profit (in thousand rupees) from selling $x$ hundred units is $P(x) = 80x - 2x^2 - 300$. The maximum profit, in thousand rupees, is`,
    options: [`$20$`, `$300$`, `$500$`, `$1600$`],
    answer: `Correct option: C) $500$. $P'(x) = 80 - 4x = 0$ gives $x = 20$, and $P''(x) = -4 < 0$, so this is a maximum. $P(20) = 1600 - 800 - 300 = 500$. ($20$ is the output level, not the profit.)`,
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-aod-r4-b01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: `A spherical raindrop evaporates in such a way that its volume decreases at a rate proportional to its surface area. Show that its radius decreases at a constant rate.`,
    answer: `Let the radius be $r$ and the constant of proportionality $k > 0$. Then $V = \\frac{4}{3}\\pi r^3$ and $\\frac{dV}{dt} = -k\\cdot 4\\pi r^2$. Also $\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}$. Equating, $4\\pi r^2\\frac{dr}{dt} = -4\\pi k r^2$, so $\\frac{dr}{dt} = -k$. This is a constant, so the radius decreases at the constant rate $k$.`,
    steps: [
      { step: `Writes $\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}$ and the given condition $\\frac{dV}{dt} = -k(4\\pi r^2)$`, marks: 1 },
      { step: `Cancels $4\\pi r^2$ to get $\\frac{dr}{dt} = -k$, a constant, and concludes`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-b02', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 2,
    text: `A cube of ice melts uniformly so that its volume decreases at $4.5$ cm$^3$/min. At what rate is its total surface area decreasing at the instant when its edge is $3$ cm?`,
    answer: `Let the edge be $a$. $V = a^3$ gives $\\frac{dV}{dt} = 3a^2\\frac{da}{dt}$, so $-4.5 = 27\\frac{da}{dt}$ and $\\frac{da}{dt} = -\\frac{1}{6}$ cm/min. The surface area is $S = 6a^2$, so $\\frac{dS}{dt} = 12a\\frac{da}{dt} = 12(3)\\left(-\\frac{1}{6}\\right) = -6$. The surface area is decreasing at $6$ cm$^2$/min.`,
    steps: [
      { step: `Differentiates $V = a^3$ and finds $\\frac{da}{dt} = -\\frac{1}{6}$ cm/min at $a = 3$`, marks: 1 },
      { step: `Differentiates $S = 6a^2$ and gets a decrease of $6$ cm$^2$/min`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-b03', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 2,
    text: `Show that $f(x) = \\frac{x - 2}{x + 3}$ is strictly increasing on each of the intervals $(-\\infty, -3)$ and $(-3, \\infty)$. Is it strictly increasing on its whole domain?`,
    answer: `$f'(x) = \\frac{(x + 3) - (x - 2)}{(x + 3)^2} = \\frac{5}{(x + 3)^2} > 0$ for every $x \\neq -3$, so $f$ is strictly increasing on $(-\\infty, -3)$ and on $(-3, \\infty)$. It is not strictly increasing on the whole domain $\\mathbb{R}\\setminus\\{-3\\}$: for example $-4 < 0$ but $f(-4) = 6 > f(0) = -\\frac{2}{3}$.`,
    steps: [
      { step: `Finds $f'(x) = \\frac{5}{(x + 3)^2}$ and notes it is positive for $x \\neq -3$, so $f$ increases on each interval`, marks: 1 },
      { step: `Answers no for the whole domain, with a counterexample such as $f(-4) = 6 > f(0)$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-b04', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: `Using the second derivative test, find the local minimum value of $f(x) = x\\log x$, $x > 0$.`,
    answer: `$f'(x) = \\log x + 1 = 0$ gives $x = \\frac{1}{e}$. $f''(x) = \\frac{1}{x}$, and $f''\\left(\\frac{1}{e}\\right) = e > 0$, so $x = \\frac{1}{e}$ is a point of local minimum. The local minimum value is $f\\left(\\frac{1}{e}\\right) = \\frac{1}{e}\\log\\frac{1}{e} = -\\frac{1}{e}$.`,
    steps: [
      { step: `Solves $f'(x) = \\log x + 1 = 0$ to get $x = \\frac{1}{e}$ and finds $f''(x) = \\frac{1}{x}$`, marks: 1 },
      { step: `Shows $f''\\left(\\frac{1}{e}\\right) = e > 0$ and computes the minimum value $-\\frac{1}{e}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-b05', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 2,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = (x - 1)^2(x + 2)$ on the interval $[-2, 2]$.`,
    answer: `$f'(x) = 2(x - 1)(x + 2) + (x - 1)^2 = (x - 1)(3x + 3) = 3(x - 1)(x + 1)$, so the critical points are $x = \\pm 1$. $f(-2) = 0$, $f(-1) = 4$, $f(1) = 0$, $f(2) = 4$. The absolute maximum value is $4$ (at $x = -1$ and $x = 2$) and the absolute minimum value is $0$ (at $x = -2$ and $x = 1$).`,
    steps: [
      { step: `Finds $f'(x) = 3(x - 1)(x + 1)$ and the critical points $x = \\pm 1$ in the interval`, marks: 1 },
      { step: `Evaluates $f$ at $-2, -1, 1, 2$ and states the absolute maximum $4$ and absolute minimum $0$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-b06', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'easy', marks: 2,
    text: `Two positive numbers have sum $16$. Find them if the sum of their cubes is to be as small as possible, and find that least sum.`,
    answer: `Let the numbers be $x$ and $16 - x$ with $0 < x < 16$, and $g(x) = x^3 + (16 - x)^3$. Then $g'(x) = 3x^2 - 3(16 - x)^2 = 96x - 768 = 96(x - 8)$, which is zero at $x = 8$. $g''(x) = 96 > 0$, so $g$ is least at $x = 8$. The numbers are $8$ and $8$, and the least sum of cubes is $512 + 512 = 1024$.`,
    steps: [
      { step: `Forms $g(x) = x^3 + (16 - x)^3$ and finds $g'(x) = 96(x - 8)$`, marks: 1 },
      { step: `Takes $x = 8$, checks $g''(x) = 96 > 0$, and states the numbers $8, 8$ and least sum $1024$`, marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-aod-r4-c01', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 3,
    text: `The volume of a sphere is increasing at the constant rate of $12$ cm$^3$/s. Show that its surface area increases at a rate equal to $\\frac{2}{r}$ times the rate of increase of volume, where $r$ is the radius. Hence find how fast the surface area is increasing when the radius is $2$ cm.`,
    answer: `$V = \\frac{4}{3}\\pi r^3$ gives $\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}$, and $S = 4\\pi r^2$ gives $\\frac{dS}{dt} = 8\\pi r\\frac{dr}{dt}$. Dividing, $\\frac{dS/dt}{dV/dt} = \\frac{8\\pi r}{4\\pi r^2} = \\frac{2}{r}$, so $\\frac{dS}{dt} = \\frac{2}{r}\\cdot\\frac{dV}{dt}$. With $\\frac{dV}{dt} = 12$, $\\frac{dS}{dt} = \\frac{24}{r}$, and at $r = 2$ this is $12$ cm$^2$/s.`,
    steps: [
      { step: `Differentiates $V = \\frac{4}{3}\\pi r^3$ and $S = 4\\pi r^2$ with respect to $t$`, marks: 1 },
      { step: `Divides to get $\\frac{dS}{dt} = \\frac{2}{r}\\frac{dV}{dt}$`, marks: 1 },
      { step: `Substitutes $\\frac{dV}{dt} = 12$ and $r = 2$ to get $12$ cm$^2$/s`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c02', chapter: C, topic: 'Rate of change', type: 'short', complexity: 'medium', marks: 3,
    text: `Two sides of a triangle are each $10$ cm long, and the angle $\\theta$ between them (with $0 < \\theta < \\pi$) is increasing at $0.1$ rad/s. (a) Find the rate at which the area of the triangle is changing when $\\theta = \\frac{\\pi}{3}$. (b) At what value of $\\theta$ is the area momentarily not changing?`,
    answer: `The area is $A = \\frac{1}{2}(10)(10)\\sin\\theta = 50\\sin\\theta$. So $\\frac{dA}{dt} = 50\\cos\\theta\\cdot\\frac{d\\theta}{dt} = 5\\cos\\theta$. (a) At $\\theta = \\frac{\\pi}{3}$, $\\frac{dA}{dt} = 5\\cdot\\frac{1}{2} = 2.5$ cm$^2$/s (increasing). (b) $\\frac{dA}{dt} = 0$ when $\\cos\\theta = 0$, i.e. $\\theta = \\frac{\\pi}{2}$, where the area is at its greatest value of $50$ cm$^2$.`,
    steps: [
      { step: `Writes the area $A = 50\\sin\\theta$`, marks: 1 },
      { step: `Differentiates to get $\\frac{dA}{dt} = 5\\cos\\theta$ and evaluates at $\\theta = \\frac{\\pi}{3}$ to get $2.5$ cm$^2$/s`, marks: 1 },
      { step: `Solves $\\cos\\theta = 0$ to get $\\theta = \\frac{\\pi}{2}$ in $(0, \\pi)$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c03', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the intervals in $(0, \\pi)$ on which $f(x) = \\sin x\\,(1 + \\cos x)$ is strictly increasing or strictly decreasing.`,
    answer: `$f'(x) = \\cos x(1 + \\cos x) - \\sin^2 x = \\cos x + \\cos^2 x - (1 - \\cos^2 x) = 2\\cos^2 x + \\cos x - 1 = (2\\cos x - 1)(\\cos x + 1)$. On $(0, \\pi)$, $\\cos x + 1 > 0$, so the sign of $f'$ is the sign of $2\\cos x - 1$. This is positive for $0 < x < \\frac{\\pi}{3}$ and negative for $\\frac{\\pi}{3} < x < \\pi$. So $f$ is strictly increasing on $\\left(0, \\frac{\\pi}{3}\\right)$ and strictly decreasing on $\\left(\\frac{\\pi}{3}, \\pi\\right)$.`,
    steps: [
      { step: `Differentiates and simplifies to $f'(x) = (2\\cos x - 1)(\\cos x + 1)$`, marks: 1 },
      { step: `Notes $\\cos x + 1 > 0$ on $(0, \\pi)$ and solves $2\\cos x - 1 = 0$ to get $x = \\frac{\\pi}{3}$`, marks: 1 },
      { step: `Checks the sign on each side and states increasing on $\\left(0, \\frac{\\pi}{3}\\right)$, decreasing on $\\left(\\frac{\\pi}{3}, \\pi\\right)$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c04', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'medium', marks: 3,
    text: `Show that $f(x) = \\frac{\\sin x}{x}$ is strictly decreasing on $(0, \\pi)$. Hence show that $\\frac{\\sin 2}{2} > \\frac{\\sin 3}{3}$.`,
    answer: `$f'(x) = \\frac{x\\cos x - \\sin x}{x^2}$. Let $g(x) = x\\cos x - \\sin x$. Then $g'(x) = \\cos x - x\\sin x - \\cos x = -x\\sin x < 0$ on $(0, \\pi)$, so $g$ is strictly decreasing there, and since $g(0) = 0$, $g(x) < 0$ for $x \\in (0, \\pi)$. Hence $f'(x) < 0$ and $f$ is strictly decreasing on $(0, \\pi)$. Since $0 < 2 < 3 < \\pi$, $f(2) > f(3)$, i.e. $\\frac{\\sin 2}{2} > \\frac{\\sin 3}{3}$.`,
    steps: [
      { step: `Writes $f'(x) = \\frac{x\\cos x - \\sin x}{x^2}$ and sets $g(x) = x\\cos x - \\sin x$`, marks: 1 },
      { step: `Shows $g'(x) = -x\\sin x < 0$ and $g(0) = 0$, so $g(x) < 0$ and $f'(x) < 0$ on $(0, \\pi)$`, marks: 1 },
      { step: `Uses $2 < 3$ in $(0, \\pi)$ and the decreasing property to conclude $\\frac{\\sin 2}{2} > \\frac{\\sin 3}{3}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c05', chapter: C, topic: 'Increasing and decreasing functions', type: 'short', complexity: 'hard', marks: 3,
    text: `Prove that $e^{x} > 1 + x + \\frac{x^2}{2}$ for all $x > 0$.`,
    answer: `Let $g(x) = e^{x} - 1 - x - \\frac{x^2}{2}$, so $g(0) = 0$ and $g'(x) = e^{x} - 1 - x$. Let $h(x) = e^{x} - 1 - x$. Then $h(0) = 0$ and $h'(x) = e^{x} - 1 > 0$ for $x > 0$, so $h$ is strictly increasing on $[0, \\infty)$ and $h(x) > 0$ for $x > 0$. So $g'(x) > 0$ for $x > 0$, meaning $g$ is strictly increasing on $[0, \\infty)$, and $g(x) > g(0) = 0$ for $x > 0$. Hence $e^{x} > 1 + x + \\frac{x^2}{2}$.`,
    steps: [
      { step: `Defines $g(x) = e^{x} - 1 - x - \\frac{x^2}{2}$ with $g(0) = 0$ and finds $g'(x) = e^{x} - 1 - x$`, marks: 1 },
      { step: `Shows $h(x) = e^{x} - 1 - x$ has $h' = e^{x} - 1 > 0$ and $h(0) = 0$, so $g'(x) = h(x) > 0$ for $x > 0$`, marks: 1 },
      { step: `Concludes $g$ is strictly increasing with $g(0) = 0$, so $g(x) > 0$ for $x > 0$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c06', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 3,
    text: `For $f(x) = x\\sqrt{1 - x}$, defined for $x \\leq 1$, find the point of local maximum and the local maximum value. Show that $f$ has no local minimum.`,
    answer: `For $x < 1$, $f'(x) = \\sqrt{1 - x} - \\frac{x}{2\\sqrt{1 - x}} = \\frac{2 - 3x}{2\\sqrt{1 - x}}$. The only zero is $x = \\frac{2}{3}$. For $x < \\frac{2}{3}$, $f' > 0$, and for $\\frac{2}{3} < x < 1$, $f' < 0$, so $x = \\frac{2}{3}$ is a point of local maximum, with value $f\\left(\\frac{2}{3}\\right) = \\frac{2}{3}\\cdot\\frac{1}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{9}$. There is no other critical point in the interior of the domain, and $f' $ keeps one sign on each side of $\\frac{2}{3}$, so there is no local minimum ($x = 1$ is an end of the domain, not an interior point).`,
    steps: [
      { step: `Differentiates to get $f'(x) = \\frac{2 - 3x}{2\\sqrt{1 - x}}$ and the critical point $x = \\frac{2}{3}$`, marks: 1 },
      { step: `Uses the sign change from $+$ to $-$ to show a local maximum, with value $\\frac{2\\sqrt{3}}{9}$`, marks: 1 },
      { step: `Explains that there is no other interior critical point and $f'$ has no further sign change, so no local minimum`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c07', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'medium', marks: 3,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = x - 2\\sin x$ on the interval $[0, \\pi]$.`,
    answer: `$f'(x) = 1 - 2\\cos x = 0$ gives $\\cos x = \\frac{1}{2}$, so $x = \\frac{\\pi}{3}$ in $[0, \\pi]$. $f(0) = 0$, $f\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi}{3} - \\sqrt{3} \\approx -0.685$, and $f(\\pi) = \\pi$. The absolute maximum value is $\\pi$ (at $x = \\pi$) and the absolute minimum value is $\\frac{\\pi}{3} - \\sqrt{3}$ (at $x = \\frac{\\pi}{3}$).`,
    steps: [
      { step: `Finds $f'(x) = 1 - 2\\cos x$ and the critical point $x = \\frac{\\pi}{3}$`, marks: 1 },
      { step: `Evaluates $f$ at $0$, $\\frac{\\pi}{3}$ and $\\pi$`, marks: 1 },
      { step: `Compares to state the absolute maximum $\\pi$ and absolute minimum $\\frac{\\pi}{3} - \\sqrt{3}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c08', chapter: C, topic: 'Maxima and minima', type: 'short', complexity: 'hard', marks: 3,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = |x^2 - 4x + 3|$ on the interval $[0, 4]$.`,
    answer: `$x^2 - 4x + 3 = (x - 1)(x - 3)$, which is negative for $1 < x < 3$ and non-negative otherwise. So $f(x) = x^2 - 4x + 3$ on $[0, 1]$ and $[3, 4]$, and $f(x) = -(x^2 - 4x + 3)$ on $[1, 3]$. In $(1, 3)$, $f'(x) = -2x + 4 = 0$ gives $x = 2$, with $f(2) = 1$. The points $x = 1$ and $x = 3$, where $f$ is not differentiable, are also critical points, with $f = 0$. End values: $f(0) = 3$, $f(4) = 3$. Comparing $3, 0, 1, 0, 3$: the absolute maximum value is $3$ (at $x = 0$ and $x = 4$) and the absolute minimum value is $0$ (at $x = 1$ and $x = 3$).`,
    steps: [
      { step: `Writes $f$ piecewise using the sign of $(x - 1)(x - 3)$`, marks: 1 },
      { step: `Finds the critical points $x = 2$ (from $f' = 0$) and $x = 1, 3$ (where $f'$ does not exist), with values $1, 0, 0$`, marks: 1 },
      { step: `Evaluates $f(0) = f(4) = 3$ and states the absolute maximum $3$ and absolute minimum $0$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c09', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'medium', marks: 3,
    text: `A closed cylindrical can has a total surface area of $54\\pi$ cm$^2$. Find its radius and height for the volume to be greatest, and find that greatest volume.`,
    answer: `Let the radius be $r$ and height $h$. $2\\pi r^2 + 2\\pi rh = 54\\pi$ gives $h = \\frac{27 - r^2}{r}$. So $V = \\pi r^2 h = \\pi r(27 - r^2) = \\pi(27r - r^3)$. $V'(r) = \\pi(27 - 3r^2) = 0$ gives $r = 3$ (as $r > 0$). $V''(r) = -6\\pi r = -18\\pi < 0$ at $r = 3$, so $V$ is greatest there. Then $h = \\frac{27 - 9}{3} = 6$ and $V = \\pi(3)(18) = 54\\pi$. The radius is $3$ cm, the height is $6$ cm, and the greatest volume is $54\\pi$ cm$^3$.`,
    steps: [
      { step: `Uses the surface area to write $h = \\frac{27 - r^2}{r}$ and $V = \\pi(27r - r^3)$`, marks: 1 },
      { step: `Solves $V'(r) = 0$ to get $r = 3$ and checks $V''(3) = -18\\pi < 0$`, marks: 1 },
      { step: `Finds $h = 6$ cm and the greatest volume $54\\pi$ cm$^3$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-c10', chapter: C, topic: 'Optimisation word problems', type: 'short', complexity: 'hard', marks: 3,
    text: `A rectangle with sides parallel to the coordinate axes is inscribed in the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$. Find the greatest possible area of such a rectangle.`,
    answer: `Let a vertex of the rectangle in the first quadrant be $(x, y)$ with $y = \\frac{4}{5}\\sqrt{25 - x^2}$. The area is $A = 4xy = \\frac{16}{5}x\\sqrt{25 - x^2}$. $A$ is greatest when $A^2 = \\frac{256}{25}x^2(25 - x^2)$ is greatest. Differentiating $x^2(25 - x^2)$ gives $50x - 4x^3 = 0$, so $x^2 = \\frac{25}{2}$. The derivative changes from positive to negative there (second derivative $50 - 12x^2 = -100 < 0$), so this is a maximum. Then $A = \\frac{16}{5}\\cdot\\sqrt{\\frac{25}{2}}\\cdot\\sqrt{\\frac{25}{2}} = \\frac{16}{5}\\cdot\\frac{25}{2} = 40$. The greatest area is $40$ square units.`,
    steps: [
      { step: `Expresses the area as $A = 4xy = \\frac{16}{5}x\\sqrt{25 - x^2}$`, marks: 1 },
      { step: `Maximises $A^2$ (or $A$) to get $x^2 = \\frac{25}{2}$ and verifies it is a maximum`, marks: 1 },
      { step: `Substitutes to get the greatest area $40$`, marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-aod-r4-d01', chapter: C, topic: 'Rate of change', type: 'long', complexity: 'medium', marks: 5,
    text: `A boat is pulled towards a vertical dock wall by a rope that passes over a pulley on the dock, $4$ m above the level of the boat's bow. The rope is hauled in at $1.5$ m/s. (a) Find the speed of the boat at the instant when it is $3$ m from the dock wall (horizontally). (b) Find the rate at which the angle $\\theta$ between the rope and the horizontal is changing at that instant.`,
    answer: `Let $x$ be the horizontal distance of the boat from the dock and $L$ the length of rope between the pulley and the bow. Then $x^2 + 16 = L^2$. Differentiating, $2x\\frac{dx}{dt} = 2L\\frac{dL}{dt}$, so $\\frac{dx}{dt} = \\frac{L}{x}\\frac{dL}{dt}$. At $x = 3$, $L = 5$ and $\\frac{dL}{dt} = -1.5$, so $\\frac{dx}{dt} = \\frac{5}{3}(-1.5) = -2.5$. (a) The boat moves towards the dock at $2.5$ m/s. (b) $\\tan\\theta = \\frac{4}{x}$, so $\\sec^2\\theta\\frac{d\\theta}{dt} = -\\frac{4}{x^2}\\frac{dx}{dt}$. At $x = 3$, $\\sec^2\\theta = 1 + \\frac{16}{9} = \\frac{25}{9}$, so $\\frac{d\\theta}{dt} = \\frac{9}{25}\\cdot\\left(-\\frac{4}{9}\\right)(-2.5) = 0.4$. The angle is increasing at $0.4$ rad/s.`,
    steps: [
      { step: `Sets up $x^2 + 16 = L^2$ with $\\frac{dL}{dt} = -1.5$`, marks: 1 },
      { step: `Differentiates to get $\\frac{dx}{dt} = \\frac{L}{x}\\frac{dL}{dt}$`, marks: 1 },
      { step: `Finds $L = 5$ at $x = 3$ and the boat's speed $2.5$ m/s`, marks: 1 },
      { step: `Uses $\\tan\\theta = \\frac{4}{x}$ and differentiates, with $\\sec^2\\theta = \\frac{25}{9}$`, marks: 1 },
      { step: `Substitutes $\\frac{dx}{dt} = -2.5$ to get $\\frac{d\\theta}{dt} = 0.4$ rad/s (increasing)`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d02', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'hard', marks: 5,
    text: `Let $f(x) = x^4 - 8x^3 + 18x^2 - 5$. Find the intervals in which $f$ is strictly increasing or strictly decreasing. Show that $x = 3$ is a critical point at which $f$ has neither a local maximum nor a local minimum, and find the local minimum value of $f$.`,
    answer: `$f'(x) = 4x^3 - 24x^2 + 36x = 4x(x^2 - 6x + 9) = 4x(x - 3)^2$. The critical points are $x = 0$ and $x = 3$. $(x - 3)^2 \\geq 0$, so the sign of $f'$ is the sign of $x$. For $x < 0$, $f' < 0$: $f$ is strictly decreasing on $(-\\infty, 0)$. For $x > 0$ (including either side of $3$), $f' \\geq 0$ with equality only at $x = 3$, so $f$ is strictly increasing on $(0, \\infty)$. At $x = 3$ the sign of $f'$ is positive on both sides, so there is no change of sign and $x = 3$ is neither a local maximum nor a local minimum. At $x = 0$, $f'$ changes from negative to positive, so it is a point of local minimum, and the local minimum value is $f(0) = -5$.`,
    steps: [
      { step: `Differentiates and factorises $f'(x) = 4x(x - 3)^2$`, marks: 1 },
      { step: `Identifies the critical points $x = 0$ and $x = 3$ and reads the sign of $f'$ from $x$ since $(x - 3)^2 \\geq 0$`, marks: 1 },
      { step: `States strictly decreasing on $(-\\infty, 0)$ and strictly increasing on $(0, \\infty)$`, marks: 1 },
      { step: `Shows $f'$ does not change sign at $x = 3$, so $x = 3$ is neither a local maximum nor a local minimum`, marks: 1 },
      { step: `Shows $x = 0$ is a local minimum (sign change $-$ to $+$) with value $f(0) = -5$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d03', chapter: C, topic: 'Increasing and decreasing functions', type: 'long', complexity: 'hard', marks: 5,
    text: `For $f(x) = x^3e^{-x}$, find the intervals in which $f$ is strictly increasing or strictly decreasing. Find its local maximum value, using the second derivative test, and show that $x = 0$ is not a point of local extremum.`,
    answer: `$f'(x) = 3x^2e^{-x} - x^3e^{-x} = x^2e^{-x}(3 - x)$. The critical points are $x = 0$ and $x = 3$. Since $x^2e^{-x} \\geq 0$ (zero only at $0$), the sign of $f'$ is the sign of $3 - x$. So $f' > 0$ for $x < 3$, $x \\neq 0$, and $f' < 0$ for $x > 3$. Hence $f$ is strictly increasing on $(-\\infty, 3)$ (the single zero of $f'$ at $0$ does not matter) and strictly decreasing on $(3, \\infty)$. $f''(x) = e^{-x}(6x - 3x^2) - e^{-x}(3x^2 - x^3) = e^{-x}(x^3 - 6x^2 + 6x)$, so $f''(3) = e^{-3}(27 - 54 + 18) = -9e^{-3} < 0$. Hence $x = 3$ is a point of local maximum, and the local maximum value is $f(3) = 27e^{-3}$. At $x = 0$, $f'(x) > 0$ on both sides, so $f'$ does not change sign and $x = 0$ is not a point of local extremum.`,
    steps: [
      { step: `Differentiates to get $f'(x) = x^2e^{-x}(3 - x)$ and the critical points $0$ and $3$`, marks: 1 },
      { step: `States strictly increasing on $(-\\infty, 3)$ and strictly decreasing on $(3, \\infty)$`, marks: 1 },
      { step: `Finds $f''(x) = e^{-x}(x^3 - 6x^2 + 6x)$`, marks: 1 },
      { step: `Shows $f''(3) = -9e^{-3} < 0$ and the local maximum value $27e^{-3}$`, marks: 1 },
      { step: `Shows $f'$ is positive on both sides of $0$ so $x = 0$ is not an extremum`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d04', chapter: C, topic: 'Maxima and minima', type: 'long', complexity: 'hard', marks: 5,
    text: `Find the absolute maximum and absolute minimum values of $f(x) = \\sin^3 x + \\cos^3 x$ on the interval $\\left[0, \\frac{\\pi}{2}\\right]$. Use the second derivative test to confirm the nature of the interior critical point.`,
    answer: `$f'(x) = 3\\sin^2 x\\cos x - 3\\cos^2 x\\sin x = 3\\sin x\\cos x(\\sin x - \\cos x)$. In $\\left(0, \\frac{\\pi}{2}\\right)$, $\\sin x\\cos x > 0$, so $f'(x) = 0$ only when $\\sin x = \\cos x$, i.e. $x = \\frac{\\pi}{4}$. Differentiating $3\\sin^2x\\cos x - 3\\cos^2x\\sin x$ gives $f''(x) =$ $6\\sin x\\cos^2 x - 3\\sin^3 x + 6\\sin^2x\\cos x - 3\\cos^3 x$. At $x = \\frac{\\pi}{4}$ with $\\sin x = \\cos x = \\frac{1}{\\sqrt{2}}$ this equals $\\frac{6}{2\\sqrt{2}} - \\frac{3}{2\\sqrt{2}} + \\frac{6}{2\\sqrt{2}} - \\frac{3}{2\\sqrt{2}} = \\frac{6}{2\\sqrt{2}} = \\frac{3\\sqrt{2}}{2} > 0$, so $x = \\frac{\\pi}{4}$ is a point of local minimum. Values: $f(0) = 1$, $f\\left(\\frac{\\pi}{4}\\right) = 2\\cdot\\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, $f\\left(\\frac{\\pi}{2}\\right) = 1$. The absolute maximum value is $1$ (at $x = 0$ and $x = \\frac{\\pi}{2}$) and the absolute minimum value is $\\frac{\\sqrt{2}}{2}$ (at $x = \\frac{\\pi}{4}$).`,
    steps: [
      { step: `Differentiates to get $f'(x) = 3\\sin x\\cos x(\\sin x - \\cos x)$`, marks: 1 },
      { step: `Solves $f'(x) = 0$ in the open interval to get $x = \\frac{\\pi}{4}$`, marks: 1 },
      { step: `Finds $f''$ and shows $f''\\left(\\frac{\\pi}{4}\\right) = \\frac{3\\sqrt{2}}{2} > 0$, a local minimum`, marks: 1 },
      { step: `Evaluates $f(0) = 1$, $f\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$, $f\\left(\\frac{\\pi}{2}\\right) = 1$`, marks: 1 },
      { step: `States the absolute maximum $1$ (at both end points) and absolute minimum $\\frac{\\sqrt{2}}{2}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d05', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'hard', marks: 5,
    text: `A right circular cone is inscribed in a sphere of radius $6$ cm, with its vertex at the top of the sphere and its base circle inside the sphere. Find the height of the cone for which its volume is greatest, and find the greatest volume.`,
    answer: `Let the cone have height $h$ ($0 < h < 12$) and base radius $r$. The centre of the sphere is at distance $h - 6$ from the base plane, so $r^2 = 36 - (h - 6)^2 = 12h - h^2$. The volume is $V = \\frac{1}{3}\\pi r^2h = \\frac{\\pi}{3}(12h^2 - h^3)$. $V'(h) = \\frac{\\pi}{3}(24h - 3h^2) = \\pi h(8 - h)$, which is zero at $h = 8$. $V''(h) = \\frac{\\pi}{3}(24 - 6h)$, and $V''(8) = -8\\pi < 0$, so the volume is greatest at $h = 8$. Then $r^2 = 96 - 64 = 32$ and $V = \\frac{\\pi}{3}(32)(8) = \\frac{256\\pi}{3}$. The height is $8$ cm and the greatest volume is $\\frac{256\\pi}{3}$ cm$^3$.`,
    steps: [
      { step: `Uses the geometry of the sphere to get $r^2 = 12h - h^2$`, marks: 1 },
      { step: `Writes $V = \\frac{\\pi}{3}(12h^2 - h^3)$`, marks: 1 },
      { step: `Differentiates and solves $V'(h) = 0$ to get $h = 8$`, marks: 1 },
      { step: `Shows $V''(8) = -8\\pi < 0$, confirming a maximum`, marks: 1 },
      { step: `Finds $r^2 = 32$ and the greatest volume $\\frac{256\\pi}{3}$ cm$^3$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d06', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'medium', marks: 5,
    text: `An isosceles triangle is inscribed in a circle of radius $6$ cm, with its apex on the circle. Show that the area of the triangle is greatest when the height from the apex to the base is $9$ cm, and find the greatest area. What kind of triangle is it?`,
    answer: `Let the height from the apex to the base be $h$ ($0 < h < 12$). The base lies at distance $h - 6$ from the centre, so half the base is $\\sqrt{36 - (h - 6)^2} = \\sqrt{h(12 - h)}$. The area is $A = \\frac{1}{2}\\cdot 2\\sqrt{h(12 - h)}\\cdot h = h\\sqrt{h(12 - h)}$. $A > 0$, so $A$ is greatest when $A^2 = h^3(12 - h) = 12h^3 - h^4$ is greatest. $\\frac{d(A^2)}{dh} = 36h^2 - 4h^3 = 4h^2(9 - h)$, which is positive for $h < 9$ and negative for $h > 9$, so $A^2$ (and $A$) is greatest at $h = 9$. Then $A = 9\\sqrt{9 \\times 3} = 9\\times 3\\sqrt{3} = 27\\sqrt{3}$ cm$^2$. The base is $2\\sqrt{27} = 6\\sqrt{3}$ cm and each equal side is $\\sqrt{81 + 27} = 6\\sqrt{3}$ cm, so the triangle is equilateral.`,
    steps: [
      { step: `Uses the circle to get half the base $\\sqrt{h(12 - h)}$`, marks: 1 },
      { step: `Writes the area $A = h\\sqrt{h(12 - h)}$ and chooses to maximise $A^2 = 12h^3 - h^4$`, marks: 1 },
      { step: `Finds $\\frac{d(A^2)}{dh} = 4h^2(9 - h)$ and the critical point $h = 9$`, marks: 1 },
      { step: `Justifies the maximum from the sign change (or second derivative) and finds the area $27\\sqrt{3}$ cm$^2$`, marks: 1 },
      { step: `Finds the base and equal sides are all $6\\sqrt{3}$ cm, so the triangle is equilateral`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d07', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'medium', marks: 5,
    text: `An open water tank with a rectangular base is to hold $24$ m$^3$. The length of the base is twice its breadth. The base costs Rs $90$ per m$^2$ and the four sides cost Rs $40$ per m$^2$. Find the dimensions of the tank for which the total cost of material is least, and find the least cost.`,
    answer: `Let the breadth be $x$ m, so the length is $2x$ m and the height is $h$ m. $2x^2h = 24$ gives $h = \\frac{12}{x^2}$. The area of the four sides is $2(2x + x)h = 6xh = \\frac{72}{x}$ and the base area is $2x^2$. The cost is $C(x) = 90(2x^2) + 40\\cdot\\frac{72}{x} = 180x^2 + \\frac{2880}{x}$. $C'(x) = 360x - \\frac{2880}{x^2} = 0$ gives $x^3 = 8$, so $x = 2$. $C''(x) = 360 + \\frac{5760}{x^3}$, and $C''(2) = 360 + 720 = 1080 > 0$, so the cost is least at $x = 2$. Then the breadth is $2$ m, the length is $4$ m, the height is $h = \\frac{12}{4} = 3$ m, and the least cost is $C(2) = 720 + 1440 = $ Rs $2160$.`,
    steps: [
      { step: `Uses the volume to get $h = \\frac{12}{x^2}$`, marks: 1 },
      { step: `Writes the cost $C(x) = 180x^2 + \\frac{2880}{x}$`, marks: 1 },
      { step: `Solves $C'(x) = 0$ to get $x = 2$`, marks: 1 },
      { step: `Shows $C''(2) = 1080 > 0$, so the cost is least`, marks: 1 },
      { step: `States the dimensions $4$ m by $2$ m by $3$ m and the least cost Rs $2160$`, marks: 1 },
    ],
  },
  {
    id: 'c12-aod-r4-d08', chapter: C, topic: 'Optimisation word problems', type: 'long', complexity: 'medium', marks: 5,
    text: `A courier company accepts a parcel in the shape of a cuboid with a square cross-section only if the sum of its length and its girth (the perimeter of the square cross-section) is at most $108$ cm. Find the dimensions of the acceptable parcel of greatest volume, and its volume.`,
    answer: `Let the side of the square cross-section be $x$ cm and the length $l$ cm. The girth is $4x$, and for the greatest volume we take $4x + l = 108$, so $l = 108 - 4x$ (with $0 < x < 27$). The volume is $V = x^2l = 108x^2 - 4x^3$. $V'(x) = 216x - 12x^2 = 12x(18 - x)$, which is zero at $x = 18$. $V''(x) = 216 - 24x$, and $V''(18) = -216 < 0$, so the volume is greatest at $x = 18$. Then $l = 108 - 72 = 36$. The parcel is $18$ cm by $18$ cm by $36$ cm, with volume $18^2\\times 36 = 11664$ cm$^3$.`,
    steps: [
      { step: `Takes $4x + l = 108$ (greatest volume uses the full limit) and writes $l = 108 - 4x$`, marks: 1 },
      { step: `Writes $V = 108x^2 - 4x^3$`, marks: 1 },
      { step: `Solves $V'(x) = 12x(18 - x) = 0$ to get $x = 18$`, marks: 1 },
      { step: `Shows $V''(18) = -216 < 0$, so $V$ is greatest`, marks: 1 },
      { step: `Finds the dimensions $18\\times 18\\times 36$ cm and the volume $11664$ cm$^3$`, marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-aod-r4-e01', chapter: C, topic: 'Rate of change', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A warehouse robot moves along a circular track of radius $5$ m. Taking the centre of the track as the origin, the robot's position $(x, y)$ in metres satisfies $x^2 + y^2 = 25$. At the instant the robot is at the point $(3, 4)$, its $x$-coordinate is decreasing at $2$ m/s. A charging station is at the point $(6, 0)$.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Show that $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$.`,
        answer: `Differentiating $x^2 + y^2 = 25$ with respect to $t$ gives $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$, so $x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `Find the rate at which the $y$-coordinate is changing at $(3, 4)$.`,
        answer: `At $(3, 4)$, $3(-2) + 4\\frac{dy}{dt} = 0$, so $\\frac{dy}{dt} = \\frac{6}{4} = 1.5$ m/s. The $y$-coordinate is increasing at $1.5$ m/s.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Find the rate at which the distance $D$ between the robot and the charging station is changing at $(3, 4)$.\nOR\nFind the speed of the robot at $(3, 4)$.`,
        answer: `$D^2 = (x - 6)^2 + y^2$, so $D\\frac{dD}{dt} = (x - 6)\\frac{dx}{dt} + y\\frac{dy}{dt}$. At $(3, 4)$, $D = \\sqrt{9 + 16} = 5$, so $5\\frac{dD}{dt} = (-3)(-2) + 4(1.5) = 12$ and $\\frac{dD}{dt} = 2.4$ m/s (the distance is increasing). OR the speed is $\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} = \\sqrt{4 + 2.25} = 2.5$ m/s.`,
      },
    ],
    answer: `(i) Differentiate $x^2 + y^2 = 25$. (ii) $\\frac{dy}{dt} = 1.5$ m/s. (iii) $\\frac{dD}{dt} = 2.4$ m/s (OR speed $= 2.5$ m/s).`,
  },
  {
    id: 'c12-aod-r4-e02', chapter: C, topic: 'Maxima and minima', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `An agriculture student studies how the yield of tomatoes depends on fertiliser. With $x$ (in tens of kg) of fertiliser applied per hectare, the yield (in quintals per hectare) is modelled by $Y(x) = 10 + 18x^2 - 2x^3$, for $x \\geq 0$.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Find $Y'(x)$ and its zeros.`,
        answer: `$Y'(x) = 36x - 6x^2 = 6x(6 - x)$, which is zero at $x = 0$ and $x = 6$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `For which amounts of fertiliser does the yield increase, and for which does it decrease?`,
        answer: `For $0 < x < 6$, $Y'(x) > 0$, so the yield increases. For $x > 6$, $Y'(x) < 0$, so the yield decreases.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Find the greatest yield and the amount of fertiliser that gives it, using the second derivative test.\nOR\nFind the amount of fertiliser at which the yield is increasing fastest, and that fastest rate.`,
        answer: `$Y''(x) = 36 - 12x$, and $Y''(6) = -36 < 0$, so $x = 6$ gives a maximum. The greatest yield is $Y(6) = 10 + 648 - 432 = 226$ quintals per hectare, with $60$ kg of fertiliser. OR the rate $Y'(x) = 36x - 6x^2$ is greatest where $Y''(x) = 0$, i.e. $x = 3$ (and $Y'''(x) = -12 < 0$), so the yield increases fastest at $30$ kg, at the rate $Y'(3) = 108 - 54 = 54$ quintals per hectare per ten kg.`,
      },
    ],
    answer: `(i) $Y' = 6x(6 - x)$. (ii) Increasing on $(0, 6)$, decreasing for $x > 6$. (iii) Greatest yield $226$ quintals per hectare at $x = 6$ (OR fastest increase at $x = 3$, rate $54$).`,
  },
  {
    id: 'c12-aod-r4-e03', chapter: C, topic: 'Optimisation word problems', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A fruit-packing unit makes open trays from rectangular cardboard sheets measuring $24$ cm by $15$ cm. Equal squares of side $x$ cm are cut from the four corners and the flaps are folded up to form an open tray of height $x$ cm.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Write the volume $V$ of the tray as a function of $x$, and the range of $x$ for which a tray can be made.`,
        answer: `The base is $(24 - 2x)$ by $(15 - 2x)$, so $V(x) = x(24 - 2x)(15 - 2x) = 4x^3 - 78x^2 + 360x$. A tray needs $24 - 2x > 0$ and $15 - 2x > 0$, so $0 < x < 7.5$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `Find the value of $x$ in this range for which $V'(x) = 0$.`,
        answer: `$V'(x) = 12x^2 - 156x + 360 = 12(x - 3)(x - 10)$. The zeros are $x = 3$ and $x = 10$; only $x = 3$ lies in $(0, 7.5)$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Show that the volume is greatest at this value and find the dimensions and volume of that tray.\nOR\nFind the rate at which the volume changes with respect to $x$ when $x = 2$.`,
        answer: `$V''(x) = 24x - 156$, and $V''(3) = -84 < 0$, so the volume is greatest at $x = 3$. The tray has length $24 - 6 = 18$ cm, breadth $15 - 6 = 9$ cm and height $3$ cm, and the greatest volume is $18\\times 9\\times 3 = 486$ cm$^3$. OR $V'(2) = 12(2 - 3)(2 - 10) = 96$ cm$^3$ per cm.`,
      },
    ],
    answer: `(i) $V = x(24 - 2x)(15 - 2x)$, $0 < x < 7.5$. (ii) $x = 3$. (iii) $18\\times 9\\times 3$ cm, volume $486$ cm$^3$ (OR $V'(2) = 96$).`,
  },
  {
    id: 'c12-aod-r4-e04', chapter: C, topic: 'Increasing and decreasing functions', type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A hiking trail runs along a straight line for $8$ hundred metres. At a horizontal distance of $x$ hundred metres from the starting point, the height of the trail above sea level (in metres) is $h(x) = 2x^3 - 21x^2 + 60x + 5$, for $0 \\leq x \\leq 8$.`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: `Find $h'(x)$ and its zeros.`,
        answer: `$h'(x) = 6x^2 - 42x + 60 = 6(x - 2)(x - 5)$, which is zero at $x = 2$ and $x = 5$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: `On which parts of the trail does a hiker climb, and on which does the hiker descend?`,
        answer: `$h'(x) > 0$ for $0 < x < 2$ and $5 < x < 8$, so the hiker climbs on those parts. $h'(x) < 0$ for $2 < x < 5$, so the hiker descends there.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `Find the highest and the lowest points of the whole trail.\nOR\nUse the second derivative test to find the local maximum and local minimum heights.`,
        answer: `The candidates are the end points and the zeros of $h'$: $h(0) = 5$, $h(2) = 16 - 84 + 120 + 5 = 57$, $h(5) = 250 - 525 + 300 + 5 = 30$, $h(8) = 1024 - 1344 + 480 + 5 = 165$. The highest point is at $x = 8$ with height $165$ m and the lowest point is at $x = 0$ with height $5$ m. OR $h''(x) = 12x - 42$, with $h''(2) = -18 < 0$ (local maximum height $57$ m at $x = 2$) and $h''(5) = 18 > 0$ (local minimum height $30$ m at $x = 5$).`,
      },
    ],
    answer: `(i) $h' = 6(x - 2)(x - 5)$. (ii) Climbs on $(0, 2)$ and $(5, 8)$, descends on $(2, 5)$. (iii) Highest $165$ m at $x = 8$, lowest $5$ m at $x = 0$ (OR local max $57$ m, local min $30$ m).`,
  },
];
