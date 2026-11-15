import type { Class12Question } from './types.js';

const C = 'Inverse Trigonometric Functions';
const DR = 'Domain, range and principal values';
const GR = 'Graphs of inverse trigonometric functions';
const EV = 'Evaluating expressions with principal values';

export const CH02_ITF_R4: Class12Question[] = [
  {
    id: "c12-itf-r4-a01", chapter: C, topic: DR, type: "mcq", complexity: "easy", marks: 1,
    text: "The principal value of $\\sin^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)$ is",
    options: ["$\\frac{\\pi}{4}$", "$-\\frac{\\pi}{4}$", "$\\frac{3\\pi}{4}$", "$-\\frac{3\\pi}{4}$"],
    answer: "Correct option: B) $-\\frac{\\pi}{4}$. We need $\\sin\\theta=-\\frac{1}{\\sqrt{2}}$ with $\\theta\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, so $\\theta=-\\frac{\\pi}{4}$. $\\frac{\\pi}{4}$ has the wrong sign, $\\frac{3\\pi}{4}$ has a positive sine, and $-\\frac{3\\pi}{4}$ has the right sine but lies outside the principal range.",
  },
  {
    id: "c12-itf-r4-a02", chapter: C, topic: DR, type: "mcq", complexity: "easy", marks: 1,
    text: "The domain of $f(x)=\\sin^{-1}(5-2x)$ is",
    options: ["$[-3,-2]$", "$[-1,1]$", "$[1,3]$", "$[2,3]$"],
    answer: "Correct option: D) $[2,3]$. We need $-1\\le 5-2x\\le 1$, so $-6\\le -2x\\le -4$, and dividing by $-2$ (which reverses the inequalities) gives $2\\le x\\le 3$. Option A forgets to reverse the signs, and option B is the domain of $\\sin^{-1}$ itself.",
  },
  {
    id: "c12-itf-r4-a03", chapter: C, topic: DR, type: "mcq", complexity: "medium", marks: 1,
    text: "The range of the function $f(x)=2\\cos^{-1}x-\\frac{\\pi}{2}$ is",
    options: ["$\\left[-\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right]$", "$[0,2\\pi]$", "$\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$", "$\\left[-\\frac{\\pi}{2},2\\pi\\right]$"],
    answer: "Correct option: A) $\\left[-\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right]$. $\\cos^{-1}x$ takes every value in $[0,\\pi]$, so $2\\cos^{-1}x$ takes every value in $[0,2\\pi]$ and subtracting $\\frac{\\pi}{2}$ gives $\\left[-\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right]$. Option B forgets the shift, option C is the range of $\\sin^{-1}x$, and option D shifts only the lower end.",
  },
  {
    id: "c12-itf-r4-a04", chapter: C, topic: DR, type: "mcq", complexity: "medium", marks: 1,
    text: "The domain of $f(x)=\\sqrt{\\tan^{-1}x-\\frac{\\pi}{4}}$ is",
    options: ["$(1,\\infty)$", "$[0,\\infty)$", "$[1,\\infty)$", "$(-\\infty,1]$"],
    answer: "Correct option: C) $[1,\\infty)$. We need $\\tan^{-1}x\\ge\\frac{\\pi}{4}$. Since $\\tan^{-1}$ is increasing and $\\tan^{-1}1=\\frac{\\pi}{4}$, this means $x\\ge 1$. The value $x=1$ is allowed because the root of $0$ is defined, so option A is wrong; option D reverses the inequality.",
  },
  {
    id: "c12-itf-r4-a05", chapter: C, topic: DR, type: "mcq", complexity: "medium", marks: 1,
    text: "The domain of $f(x)=\\operatorname{cosec}^{-1}(2x+3)$ is",
    options: ["$(-\\infty,-2]\\cup[-1,\\infty)$", "$[-2,-1]$", "$(-\\infty,-1]\\cup[1,\\infty)$", "$\\mathbb{R}-\\{-2,-1\\}$"],
    answer: "Correct option: A) $(-\\infty,-2]\\cup[-1,\\infty)$. $\\operatorname{cosec}^{-1}$ needs $|2x+3|\\ge 1$, i.e. $2x+3\\ge 1$ or $2x+3\\le -1$, giving $x\\ge -1$ or $x\\le -2$. Option B is the set where $|2x+3|\\le 1$, option C is the domain of $\\operatorname{cosec}^{-1}$ itself, and option D removes only two points.",
  },
  {
    id: "c12-itf-r4-a06", chapter: C, topic: DR, type: "mcq", complexity: "hard", marks: 1,
    text: "The number of integers in the domain of $f(x)=\\cos^{-1}\\left(|x-2|-3\\right)$ is",
    options: ["$5$", "$4$", "$6$", "$7$"],
    answer: "Correct option: C) $6$. We need $-1\\le |x-2|-3\\le 1$, i.e. $2\\le|x-2|\\le 4$. So $x-2\\in[-4,-2]\\cup[2,4]$, i.e. $x\\in[-2,0]\\cup[4,6]$, which contains the integers $-2,-1,0,4,5,6$: six integers.",
  },
  {
    id: "c12-itf-r4-a07", chapter: C, topic: DR, type: "assertion_reason", complexity: "medium", marks: 1,
    text: "Assertion (A): The range of $f(x)=\\cot^{-1}x$, $x\\in\\mathbb{R}$, is $[0,\\pi]$.\nReason (R): $\\cot x$ takes every real value as $x$ runs over the interval $(0,\\pi)$.",
    options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
    answer: "Correct option: D) A is false, but R is true. The principal branch of $\\cot^{-1}$ is the open interval $(0,\\pi)$: $\\cot x$ is never defined at $0$ or $\\pi$, so those values are never taken and A is false. R is true: $\\cot$ is decreasing on $(0,\\pi)$ and takes every real value there.",
  },
  {
    id: "c12-itf-r4-a08", chapter: C, topic: EV, type: "mcq", complexity: "easy", marks: 1,
    text: "The value of $\\sin^{-1}\\left(\\sin\\frac{10\\pi}{7}\\right)$ is",
    options: ["$\\frac{10\\pi}{7}$", "$-\\frac{3\\pi}{7}$", "$\\frac{3\\pi}{7}$", "$\\frac{4\\pi}{7}$"],
    answer: "Correct option: B) $-\\frac{3\\pi}{7}$. $\\frac{10\\pi}{7}$ is outside $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$. Write $\\sin\\frac{10\\pi}{7}=\\sin\\left(\\pi+\\frac{3\\pi}{7}\\right)=-\\sin\\frac{3\\pi}{7}=\\sin\\left(-\\frac{3\\pi}{7}\\right)$ and $-\\frac{3\\pi}{7}$ is in the principal range, so the value is $-\\frac{3\\pi}{7}$.",
  },
  {
    id: "c12-itf-r4-a09", chapter: C, topic: EV, type: "mcq", complexity: "medium", marks: 1,
    text: "The value of $\\cot^{-1}\\left(\\cot\\left(-\\frac{2\\pi}{5}\\right)\\right)$ is",
    options: ["$-\\frac{2\\pi}{5}$", "$\\frac{2\\pi}{5}$", "$-\\frac{3\\pi}{5}$", "$\\frac{3\\pi}{5}$"],
    answer: "Correct option: D) $\\frac{3\\pi}{5}$. The range of $\\cot^{-1}$ is $(0,\\pi)$, so $-\\frac{2\\pi}{5}$ cannot be the answer. Cotangent has period $\\pi$, so $\\cot\\left(-\\frac{2\\pi}{5}\\right)=\\cot\\left(\\pi-\\frac{2\\pi}{5}\\right)=\\cot\\frac{3\\pi}{5}$ and $\\frac{3\\pi}{5}\\in(0,\\pi)$. The value is $\\frac{3\\pi}{5}$.",
  },
  {
    id: "c12-itf-r4-a10", chapter: C, topic: EV, type: "mcq", complexity: "medium", marks: 1,
    text: "The value of $\\cot\\left(\\sin^{-1}\\left(-\\frac{8}{17}\\right)\\right)$ is",
    options: ["$-\\frac{15}{8}$", "$\\frac{15}{8}$", "$-\\frac{8}{15}$", "$\\frac{8}{15}$"],
    answer: "Correct option: A) $-\\frac{15}{8}$. Let $\\theta=\\sin^{-1}\\left(-\\frac{8}{17}\\right)\\in\\left(-\\frac{\\pi}{2},0\\right)$, so $\\sin\\theta=-\\frac{8}{17}$ and $\\cos\\theta=+\\frac{15}{17}$ (cosine is positive in the fourth quadrant). Then $\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}=-\\frac{15}{8}$.",
  },
  {
    id: "c12-itf-r4-a11", chapter: C, topic: EV, type: "mcq", complexity: "medium", marks: 1,
    text: "The value of $\\cos\\left(\\operatorname{cosec}^{-1}\\left(-\\frac{5}{3}\\right)\\right)$ is",
    options: ["$-\\frac{4}{5}$", "$\\frac{3}{5}$", "$\\frac{4}{5}$", "$-\\frac{3}{5}$"],
    answer: "Correct option: C) $\\frac{4}{5}$. Let $\\theta=\\operatorname{cosec}^{-1}\\left(-\\frac{5}{3}\\right)$, so $\\sin\\theta=-\\frac{3}{5}$ with $\\theta\\in\\left[-\\frac{\\pi}{2},0\\right)$. In this range cosine is positive, so $\\cos\\theta=\\sqrt{1-\\frac{9}{25}}=\\frac{4}{5}$. Option A gives cosine a negative sign, which would put $\\theta$ in the third quadrant.",
  },
  {
    id: "c12-itf-r4-a12", chapter: C, topic: EV, type: "mcq", complexity: "hard", marks: 1,
    text: "The value of $\\sin\\left(2\\cos^{-1}\\left(-\\frac{5}{13}\\right)\\right)$ is",
    options: ["$\\frac{120}{169}$", "$-\\frac{120}{169}$", "$-\\frac{119}{169}$", "$-\\frac{12}{13}$"],
    answer: "Correct option: B) $-\\frac{120}{169}$. Let $\\theta=\\cos^{-1}\\left(-\\frac{5}{13}\\right)\\in\\left(\\frac{\\pi}{2},\\pi\\right)$, so $\\cos\\theta=-\\frac{5}{13}$ and $\\sin\\theta=+\\frac{12}{13}$. Then $\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\frac{12}{13}\\cdot\\left(-\\frac{5}{13}\\right)=-\\frac{120}{169}$. Option C is $\\cos 2\\theta$.",
  },
  {
    id: "c12-itf-r4-a13", chapter: C, topic: EV, type: "mcq", complexity: "easy", marks: 1,
    text: "The value of $\\sin^{-1}(-1)+\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)+\\tan^{-1}1$ is",
    options: ["$-\\frac{\\pi}{2}$", "$\\frac{\\pi}{2}$", "$\\pi$", "$0$"],
    answer: "Correct option: B) $\\frac{\\pi}{2}$. $\\sin^{-1}(-1)=-\\frac{\\pi}{2}$, $\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)=\\frac{3\\pi}{4}$ and $\\tan^{-1}1=\\frac{\\pi}{4}$. The sum is $-\\frac{\\pi}{2}+\\frac{3\\pi}{4}+\\frac{\\pi}{4}=\\frac{\\pi}{2}$. Option A comes from wrongly using $-\\frac{\\pi}{4}$ for the cosine term.",
  },
  {
    id: "c12-itf-r4-a14", chapter: C, topic: EV, type: "assertion_reason", complexity: "hard", marks: 1,
    text: "Assertion (A): $\\operatorname{cosec}^{-1}\\left(\\operatorname{cosec}\\frac{5\\pi}{4}\\right)=-\\frac{\\pi}{4}$.\nReason (R): $\\operatorname{cosec}^{-1}(\\operatorname{cosec}x)=x$ for every real $x$ for which $\\operatorname{cosec}x$ is defined.",
    options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
    answer: "Correct option: C) A is true, but R is false. $\\operatorname{cosec}\\frac{5\\pi}{4}=-\\sqrt{2}=\\operatorname{cosec}\\left(-\\frac{\\pi}{4}\\right)$ and $-\\frac{\\pi}{4}$ lies in the principal range, so A is true. R is false: the identity holds only for $x\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]-\\{0\\}$, and $x=\\frac{5\\pi}{4}$ is a counter-example.",
  },
  {
    id: "c12-itf-r4-a15", chapter: C, topic: GR, type: "mcq", complexity: "hard", marks: 1,
    text: "The graphs of $y=\\cos^{-1}x$ and $y=\\tan^{-1}x$ (principal branches) are drawn on the same axes. The number of points common to the two graphs is",
    options: ["$0$", "$2$", "$3$", "$1$"],
    answer: "Correct option: D) $1$. Both are defined together on $[-1,1]$. There $g(x)=\\cos^{-1}x-\\tan^{-1}x$ is strictly decreasing (the first term decreases and the second increases), with $g(-1)=\\pi+\\frac{\\pi}{4}>0$ and $g(1)=-\\frac{\\pi}{4}<0$. So $g$ vanishes exactly once and the graphs meet at exactly one point.",
  },
  {
    id: "c12-itf-r4-a16", chapter: C, topic: GR, type: "mcq", complexity: "medium", marks: 1,
    text: "The graph of $y=2\\tan^{-1}x-\\frac{\\pi}{2}$ has the horizontal asymptotes",
    options: ["$y=\\pm\\pi$", "$y=\\frac{\\pi}{2}$ and $y=-\\frac{3\\pi}{2}$", "$y=\\pm\\frac{\\pi}{2}$", "$y=\\frac{3\\pi}{2}$ and $y=-\\frac{\\pi}{2}$"],
    answer: "Correct option: B) $y=\\frac{\\pi}{2}$ and $y=-\\frac{3\\pi}{2}$. As $x\\to\\infty$, $\\tan^{-1}x\\to\\frac{\\pi}{2}$, so $y\\to\\pi-\\frac{\\pi}{2}=\\frac{\\pi}{2}$. As $x\\to-\\infty$, $\\tan^{-1}x\\to-\\frac{\\pi}{2}$, so $y\\to-\\pi-\\frac{\\pi}{2}=-\\frac{3\\pi}{2}$. Option A ignores the shift and option D has the shift in the wrong direction.",
  },
  {
    id: "c12-itf-r4-a17", chapter: C, topic: GR, type: "mcq", complexity: "medium", marks: 1,
    text: "The set of all real $x$ for which the graph of $y=\\cot^{-1}x$ lies on or above the line $y=\\frac{2\\pi}{3}$ is",
    options: ["$\\left[-\\frac{1}{\\sqrt{3}},\\infty\\right)$", "$(-\\infty,-\\sqrt{3}]$", "$\\left(-\\infty,\\frac{1}{\\sqrt{3}}\\right]$", "$\\left(-\\infty,-\\frac{1}{\\sqrt{3}}\\right]$"],
    answer: "Correct option: D) $\\left(-\\infty,-\\frac{1}{\\sqrt{3}}\\right]$. $\\cot^{-1}$ is decreasing and $\\cot^{-1}\\left(-\\frac{1}{\\sqrt{3}}\\right)=\\frac{2\\pi}{3}$. So $\\cot^{-1}x\\ge\\frac{2\\pi}{3}$ exactly when $x\\le-\\frac{1}{\\sqrt{3}}$. Option B uses $-\\sqrt{3}$, whose $\\cot^{-1}$ is $\\frac{5\\pi}{6}$, and options A and C reverse or flip the sign of the end point.",
  },
  {
    id: "c12-itf-r4-a18", chapter: C, topic: GR, type: "mcq", complexity: "medium", marks: 1,
    text: "Which of the following points lies on the graph of $y=\\sec^{-1}x$ (principal branch)?",
    options: ["$\\left(-\\frac{2}{\\sqrt{3}},\\frac{\\pi}{6}\\right)$", "$\\left(-\\frac{2}{\\sqrt{3}},-\\frac{\\pi}{6}\\right)$", "$\\left(-\\frac{2}{\\sqrt{3}},\\frac{5\\pi}{6}\\right)$", "$\\left(\\frac{2}{\\sqrt{3}},\\frac{5\\pi}{6}\\right)$"],
    answer: "Correct option: C) $\\left(-\\frac{2}{\\sqrt{3}},\\frac{5\\pi}{6}\\right)$. $\\sec^{-1}\\left(-\\frac{2}{\\sqrt{3}}\\right)=\\theta$ with $\\cos\\theta=-\\frac{\\sqrt{3}}{2}$ and $\\theta\\in[0,\\pi]-\\left\\{\\frac{\\pi}{2}\\right\\}$, so $\\theta=\\frac{5\\pi}{6}$. Point A has the positive-argument value, B is outside the range $[0,\\pi]$, and D has the value for $-\\frac{2}{\\sqrt{3}}$ attached to $+\\frac{2}{\\sqrt{3}}$, whose $\\sec^{-1}$ is $\\frac{\\pi}{6}$.",
  },
  {
    id: "c12-itf-r4-a19", chapter: C, topic: GR, type: "assertion_reason", complexity: "medium", marks: 1,
    text: "Assertion (A): The graph of $y=\\sin^{-1}x$ is symmetric about the origin.\nReason (R): $\\sin^{-1}(-x)=-\\sin^{-1}x$ for every $x\\in[-1,1]$.",
    options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
    answer: "Correct option: A) Both A and R are true, and R is the correct explanation of A. Both are true. R says that the point $(-x,-y)$ lies on the graph whenever $(x,y)$ does, which is exactly symmetry about the origin, so R explains A.",
  },
  {
    id: "c12-itf-r4-a20", chapter: C, topic: EV, type: "mcq", complexity: "hard", marks: 1,
    text: "The value of $\\sin\\left(\\sin^{-1}\\frac{3}{5}+\\cos^{-1}\\frac{5}{13}\\right)$ is",
    options: ["$\\frac{63}{65}$", "$\\frac{33}{65}$", "$-\\frac{16}{65}$", "$-\\frac{63}{65}$"],
    answer: "Correct option: A) $\\frac{63}{65}$. Let $A=\\sin^{-1}\\frac{3}{5}$ and $B=\\cos^{-1}\\frac{5}{13}$, both acute, so $\\cos A=\\frac{4}{5}$ and $\\sin B=\\frac{12}{13}$. Then $\\sin(A+B)=\\frac{3}{5}\\cdot\\frac{5}{13}+\\frac{4}{5}\\cdot\\frac{12}{13}=\\frac{15+48}{65}=\\frac{63}{65}$. Option B is $-\\sin(A-B)$ and option C is $\\cos(A+B)$.",
  },
  {
    id: "c12-itf-r4-b01", chapter: C, topic: DR, type: "short", complexity: "medium", marks: 2,
    text: "Find the domain of $f(x)=\\cos^{-1}\\left(\\frac{x}{3}\\right)+\\sqrt{x^{2}-4}$.",
    answer: "$\\cos^{-1}\\left(\\frac{x}{3}\\right)$ needs $-1\\le\\frac{x}{3}\\le 1$, i.e. $-3\\le x\\le 3$. $\\sqrt{x^{2}-4}$ needs $x^{2}\\ge 4$, i.e. $x\\le-2$ or $x\\ge 2$. Both must hold, so the domain is $[-3,-2]\\cup[2,3]$.",
    steps: [
      { step: "Gets $-3\\le x\\le 3$ from the inverse cosine and $x\\le-2$ or $x\\ge 2$ from the square root", marks: 1 },
      { step: "Intersects them to get $[-3,-2]\\cup[2,3]$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-b02", chapter: C, topic: DR, type: "short", complexity: "medium", marks: 2,
    text: "Find the value of $\\sec^{-1}\\left(-\\frac{2}{\\sqrt{3}}\\right)-\\operatorname{cosec}^{-1}(-1)$.",
    answer: "$\\sec^{-1}\\left(-\\frac{2}{\\sqrt{3}}\\right)=\\theta$ with $\\cos\\theta=-\\frac{\\sqrt{3}}{2}$, $\\theta\\in[0,\\pi]-\\left\\{\\frac{\\pi}{2}\\right\\}$, so $\\theta=\\frac{5\\pi}{6}$. $\\operatorname{cosec}^{-1}(-1)=\\phi$ with $\\sin\\phi=-1$, $\\phi\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]-\\{0\\}$, so $\\phi=-\\frac{\\pi}{2}$. The value is $\\frac{5\\pi}{6}-\\left(-\\frac{\\pi}{2}\\right)=\\frac{4\\pi}{3}$.",
    steps: [
      { step: "Finds $\\sec^{-1}\\left(-\\frac{2}{\\sqrt{3}}\\right)=\\frac{5\\pi}{6}$ and $\\operatorname{cosec}^{-1}(-1)=-\\frac{\\pi}{2}$", marks: 1 },
      { step: "Subtracts correctly (watching the sign) to get $\\frac{4\\pi}{3}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-b03", chapter: C, topic: GR, type: "short", complexity: "medium", marks: 2,
    text: "Sketch the graph of $y=\\operatorname{cosec}^{-1}x$ (principal branch) for $-2\\le x\\le-1$, marking the end points, and state its range on this interval.",
    answer: "The end points are $x=-1$: $y=\\operatorname{cosec}^{-1}(-1)=-\\frac{\\pi}{2}$, giving $\\left(-1,-\\frac{\\pi}{2}\\right)$; and $x=-2$: $y=\\operatorname{cosec}^{-1}(-2)=-\\frac{\\pi}{6}$, giving $\\left(-2,-\\frac{\\pi}{6}\\right)$. For $x\\le-1$ the graph of $\\operatorname{cosec}^{-1}x$ is a decreasing curve (in the third quadrant) that falls from the point $\\left(-2,-\\frac{\\pi}{6}\\right)$ to $\\left(-1,-\\frac{\\pi}{2}\\right)$ as $x$ increases from $-2$ to $-1$. Hence the range on this interval is $\\left[-\\frac{\\pi}{2},-\\frac{\\pi}{6}\\right]$.",
    steps: [
      { step: "Marks the end points $\\left(-1,-\\frac{\\pi}{2}\\right)$ and $\\left(-2,-\\frac{\\pi}{6}\\right)$ and draws the curve between them", marks: 1 },
      { step: "States the range $\\left[-\\frac{\\pi}{2},-\\frac{\\pi}{6}\\right]$ using the fact that the curve is monotone", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-b04", chapter: C, topic: EV, type: "short", complexity: "hard", marks: 2,
    text: "Find the value of $\\sin^{-1}\\left(\\sin\\frac{13\\pi}{6}\\right)+\\cos^{-1}\\left(\\cos\\frac{7\\pi}{6}\\right)$.",
    answer: "$\\frac{13\\pi}{6}=2\\pi+\\frac{\\pi}{6}$, so $\\sin\\frac{13\\pi}{6}=\\sin\\frac{\\pi}{6}$ and $\\frac{\\pi}{6}\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, giving $\\frac{\\pi}{6}$. $\\cos\\frac{7\\pi}{6}=\\cos\\left(2\\pi-\\frac{7\\pi}{6}\\right)=\\cos\\frac{5\\pi}{6}$ with $\\frac{5\\pi}{6}\\in[0,\\pi]$, giving $\\frac{5\\pi}{6}$. The sum is $\\frac{\\pi}{6}+\\frac{5\\pi}{6}=\\pi$.",
    steps: [
      { step: "Finds $\\sin^{-1}\\left(\\sin\\frac{13\\pi}{6}\\right)=\\frac{\\pi}{6}$ with the range check", marks: 1 },
      { step: "Finds $\\cos^{-1}\\left(\\cos\\frac{7\\pi}{6}\\right)=\\frac{5\\pi}{6}$ and the sum $\\pi$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-b05", chapter: C, topic: EV, type: "short", complexity: "medium", marks: 2,
    text: "Find the value of $\\tan\\left(2\\sin^{-1}\\left(-\\frac{3}{5}\\right)\\right)$.",
    answer: "Let $\\theta=\\sin^{-1}\\left(-\\frac{3}{5}\\right)\\in\\left(-\\frac{\\pi}{2},0\\right)$, so $\\sin\\theta=-\\frac{3}{5}$, $\\cos\\theta=\\frac{4}{5}$ and $\\tan\\theta=-\\frac{3}{4}$. Then $\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^{2}\\theta}=\\frac{-\\frac{3}{2}}{1-\\frac{9}{16}}=-\\frac{3}{2}\\cdot\\frac{16}{7}=-\\frac{24}{7}$.",
    steps: [
      { step: "Finds $\\tan\\theta=-\\frac{3}{4}$ with the correct sign (cosine positive in the fourth quadrant)", marks: 1 },
      { step: "Applies the double-angle formula to get $-\\frac{24}{7}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-b06", chapter: C, topic: EV, type: "short", complexity: "medium", marks: 2,
    text: "Find all real $x$ for which $\\sin\\left(\\cos^{-1}x\\right)=\\frac{3}{5}$.",
    answer: "Let $\\theta=\\cos^{-1}x\\in[0,\\pi]$, where $\\sin\\theta\\ge 0$. Then $\\sin\\theta=\\sqrt{1-x^{2}}$, so $\\sqrt{1-x^{2}}=\\frac{3}{5}$, giving $1-x^{2}=\\frac{9}{25}$ and $x^{2}=\\frac{16}{25}$. Both $x=\\frac{4}{5}$ (acute $\\theta$) and $x=-\\frac{4}{5}$ (obtuse $\\theta$) lie in $[-1,1]$ and give a sine of $\\frac{3}{5}$. So $x=\\pm\\frac{4}{5}$.",
    steps: [
      { step: "Uses $\\sin\\left(\\cos^{-1}x\\right)=\\sqrt{1-x^{2}}$ (sine non-negative on $[0,\\pi]$) and forms the equation", marks: 1 },
      { step: "Solves to get both $x=\\frac{4}{5}$ and $x=-\\frac{4}{5}$ and checks them", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c01", chapter: C, topic: EV, type: "short", complexity: "medium", marks: 3,
    text: "Evaluate $\\sin^{-1}\\left(\\sin\\frac{9\\pi}{5}\\right)+\\cos^{-1}\\left(\\cos\\frac{9\\pi}{5}\\right)+\\cot^{-1}\\left(\\cot\\frac{9\\pi}{5}\\right)$.",
    answer: "Write $\\frac{9\\pi}{5}=2\\pi-\\frac{\\pi}{5}$. Then $\\sin\\frac{9\\pi}{5}=\\sin\\left(-\\frac{\\pi}{5}\\right)$ and $-\\frac{\\pi}{5}\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, so the first term is $-\\frac{\\pi}{5}$. $\\cos\\frac{9\\pi}{5}=\\cos\\frac{\\pi}{5}$ with $\\frac{\\pi}{5}\\in[0,\\pi]$, so the second term is $\\frac{\\pi}{5}$. $\\cot\\frac{9\\pi}{5}=\\cot\\left(-\\frac{\\pi}{5}\\right)=\\cot\\left(\\pi-\\frac{\\pi}{5}\\right)=\\cot\\frac{4\\pi}{5}$ with $\\frac{4\\pi}{5}\\in(0,\\pi)$, so the third term is $\\frac{4\\pi}{5}$. The sum is $-\\frac{\\pi}{5}+\\frac{\\pi}{5}+\\frac{4\\pi}{5}=\\frac{4\\pi}{5}$.",
    steps: [
      { step: "First term $-\\frac{\\pi}{5}$ with the range check", marks: 1 },
      { step: "Second term $\\frac{\\pi}{5}$ with the range check", marks: 1 },
      { step: "Third term $\\frac{4\\pi}{5}$ (using the period $\\pi$) and the sum $\\frac{4\\pi}{5}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c02", chapter: C, topic: DR, type: "short", complexity: "medium", marks: 3,
    text: "Find the domain and the range of $f(x)=\\operatorname{cosec}^{-1}\\left(1+x^{2}\\right)$, and find $f(0)$ and $f(1)$.",
    answer: "$1+x^{2}\\ge 1$ for every real $x$, so the argument is always in the domain of $\\operatorname{cosec}^{-1}$: the domain is $\\mathbb{R}$. The argument takes every value in $[1,\\infty)$. On $[1,\\infty)$, $\\operatorname{cosec}^{-1}$ is decreasing from $\\operatorname{cosec}^{-1}1=\\frac{\\pi}{2}$ and tends to $0$ without reaching it, so the range is $\\left(0,\\frac{\\pi}{2}\\right]$. $f(0)=\\operatorname{cosec}^{-1}1=\\frac{\\pi}{2}$ and $f(1)=\\operatorname{cosec}^{-1}2=\\frac{\\pi}{6}$.",
    steps: [
      { step: "Domain $\\mathbb{R}$ since $1+x^{2}\\ge 1$", marks: 1 },
      { step: "Range $\\left(0,\\frac{\\pi}{2}\\right]$ from the decreasing behaviour on $[1,\\infty)$", marks: 1 },
      { step: "Values $f(0)=\\frac{\\pi}{2}$ and $f(1)=\\frac{\\pi}{6}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c03", chapter: C, topic: GR, type: "short", complexity: "medium", marks: 3,
    text: "Consider $y=\\sin^{-1}(x-1)$.\n(i) State its domain and range, the end points of its graph, and how the graph is obtained from that of $y=\\sin^{-1}x$.\n(ii) Solve $\\sin^{-1}(x-1)=\\frac{\\pi}{6}$.\n(iii) Find the set of values of $y$ when $\\frac{1}{2}\\le x\\le 2$.",
    answer: "(i) We need $-1\\le x-1\\le 1$, so the domain is $[0,2]$ and the range is $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$. The end points are $\\left(0,-\\frac{\\pi}{2}\\right)$ and $\\left(2,\\frac{\\pi}{2}\\right)$ (and the graph passes through $(1,0)$). The graph is that of $y=\\sin^{-1}x$ shifted $1$ unit to the right.\n(ii) $x-1=\\sin\\frac{\\pi}{6}=\\frac{1}{2}$, so $x=\\frac{3}{2}$.\n(iii) The function is increasing, and for $x\\in\\left[\\frac{1}{2},2\\right]$, $x-1\\in\\left[-\\frac{1}{2},1\\right]$, so $y\\in\\left[\\sin^{-1}\\left(-\\frac{1}{2}\\right),\\sin^{-1}1\\right]=\\left[-\\frac{\\pi}{6},\\frac{\\pi}{2}\\right]$.",
    steps: [
      { step: "(i) Domain $[0,2]$, range $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, end points and the shift of $1$ to the right", marks: 1 },
      { step: "(ii) $x=\\frac{3}{2}$", marks: 1 },
      { step: "(iii) $\\left[-\\frac{\\pi}{6},\\frac{\\pi}{2}\\right]$ using monotonicity", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c04", chapter: C, topic: EV, type: "short", complexity: "hard", marks: 3,
    text: "Write $\\sin^{-1}\\left(\\frac{\\sqrt{3}\\cos x+\\sin x}{2}\\right)$, where $\\frac{\\pi}{6}\\le x\\le\\frac{7\\pi}{6}$, in its simplest form, and check the result at $x=\\frac{\\pi}{2}$.",
    answer: "$\\frac{\\sqrt{3}}{2}\\cos x+\\frac{1}{2}\\sin x=\\sin x\\cos\\frac{\\pi}{3}+\\cos x\\sin\\frac{\\pi}{3}=\\sin\\left(x+\\frac{\\pi}{3}\\right)$. For $\\frac{\\pi}{6}\\le x\\le\\frac{7\\pi}{6}$, $\\theta=x+\\frac{\\pi}{3}\\in\\left[\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right]$, which is outside the principal range except at $\\frac{\\pi}{2}$. Since $\\sin\\theta=\\sin(\\pi-\\theta)$ and $\\pi-\\theta\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, $\\sin^{-1}(\\sin\\theta)=\\pi-\\theta=\\pi-x-\\frac{\\pi}{3}=\\frac{2\\pi}{3}-x$. Check at $x=\\frac{\\pi}{2}$: the argument is $\\frac{0+1}{2}=\\frac{1}{2}$, so the value is $\\sin^{-1}\\frac{1}{2}=\\frac{\\pi}{6}$, and $\\frac{2\\pi}{3}-\\frac{\\pi}{2}=\\frac{\\pi}{6}$.",
    steps: [
      { step: "Writes the argument as $\\sin\\left(x+\\frac{\\pi}{3}\\right)$", marks: 1 },
      { step: "Finds $x+\\frac{\\pi}{3}\\in\\left[\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right]$ and uses $\\pi-\\theta$ to get $\\frac{2\\pi}{3}-x$", marks: 1 },
      { step: "Verifies at $x=\\frac{\\pi}{2}$ (both sides $\\frac{\\pi}{6}$)", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c05", chapter: C, topic: EV, type: "short", complexity: "hard", marks: 3,
    text: "Find the value of $\\tan\\left(\\cos^{-1}\\frac{4}{5}+\\tan^{-1}\\left(-\\frac{2}{3}\\right)\\right)$.",
    answer: "Let $A=\\cos^{-1}\\frac{4}{5}$, which is acute with $\\cos A=\\frac{4}{5}$, $\\sin A=\\frac{3}{5}$, so $\\tan A=\\frac{3}{4}$. Let $B=\\tan^{-1}\\left(-\\frac{2}{3}\\right)$, so $\\tan B=-\\frac{2}{3}$. Then $\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}=\\frac{\\frac{3}{4}-\\frac{2}{3}}{1+\\frac{1}{2}}=\\frac{\\frac{1}{12}}{\\frac{3}{2}}=\\frac{1}{18}$.",
    steps: [
      { step: "Finds $\\tan A=\\frac{3}{4}$", marks: 1 },
      { step: "Writes $\\tan B=-\\frac{2}{3}$ and the formula for $\\tan(A+B)$", marks: 1 },
      { step: "Substitutes with correct signs to get $\\frac{1}{18}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c06", chapter: C, topic: DR, type: "short", complexity: "medium", marks: 3,
    text: "Find the domain of $f(x)=\\operatorname{cosec}^{-1}\\left(x^{2}-3\\right)$, and find $f(1)$ and $f(\\sqrt{5})$.",
    answer: "$\\operatorname{cosec}^{-1}$ needs $|x^{2}-3|\\ge 1$, i.e. $x^{2}-3\\ge 1$ or $x^{2}-3\\le-1$. The first gives $x^{2}\\ge 4$, i.e. $x\\le-2$ or $x\\ge 2$; the second gives $x^{2}\\le 2$, i.e. $-\\sqrt{2}\\le x\\le\\sqrt{2}$. The domain is $(-\\infty,-2]\\cup[-\\sqrt{2},\\sqrt{2}]\\cup[2,\\infty)$. $f(1)=\\operatorname{cosec}^{-1}(-2)=-\\frac{\\pi}{6}$ and $f(\\sqrt{5})=\\operatorname{cosec}^{-1}2=\\frac{\\pi}{6}$.",
    steps: [
      { step: "States the condition $|x^{2}-3|\\ge 1$ and splits it into two inequalities", marks: 1 },
      { step: "Solves them to get the three-piece domain", marks: 1 },
      { step: "Gets $f(1)=-\\frac{\\pi}{6}$ and $f(\\sqrt{5})=\\frac{\\pi}{6}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c07", chapter: C, topic: GR, type: "short", complexity: "medium", marks: 3,
    text: "The graph of $y=\\sin x$, $-\\frac{\\pi}{2}\\le x\\le\\frac{\\pi}{2}$, passes through $A\\left(-\\frac{\\pi}{6},-\\frac{1}{2}\\right)$, $B\\left(\\frac{\\pi}{4},\\frac{1}{\\sqrt{2}}\\right)$ and $C\\left(\\frac{\\pi}{2},1\\right)$.\n(i) Write the coordinates of the three corresponding points on the graph of $y=\\sin^{-1}x$.\n(ii) Name the line in which the two graphs are mirror images of each other.\n(iii) Hence find the set of values of $\\sin^{-1}x$ when $-\\frac{1}{2}\\le x\\le\\frac{1}{\\sqrt{2}}$.",
    answer: "(i) Interchanging $x$ and $y$ gives $A'\\left(-\\frac{1}{2},-\\frac{\\pi}{6}\\right)$, $B'\\left(\\frac{1}{\\sqrt{2}},\\frac{\\pi}{4}\\right)$ and $C'\\left(1,\\frac{\\pi}{2}\\right)$.\n(ii) The line $y=x$.\n(iii) $\\sin^{-1}$ is increasing, so for $-\\frac{1}{2}\\le x\\le\\frac{1}{\\sqrt{2}}$ its values run from $\\sin^{-1}\\left(-\\frac{1}{2}\\right)=-\\frac{\\pi}{6}$ to $\\sin^{-1}\\frac{1}{\\sqrt{2}}=\\frac{\\pi}{4}$, i.e. $\\left[-\\frac{\\pi}{6},\\frac{\\pi}{4}\\right]$.",
    steps: [
      { step: "(i) Interchanges coordinates to get the three points", marks: 1 },
      { step: "(ii) Names the line $y=x$", marks: 1 },
      { step: "(iii) Gets $\\left[-\\frac{\\pi}{6},\\frac{\\pi}{4}\\right]$ using that $\\sin^{-1}$ is increasing", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c08", chapter: C, topic: EV, type: "short", complexity: "hard", marks: 3,
    text: "Let $g(x)=\\sin^{-1}(\\cos x)$ for $0\\le x\\le 2\\pi$.\n(i) Show that $g(x)=\\frac{\\pi}{2}-x$ for $0\\le x\\le\\pi$.\n(ii) Find a similar formula for $\\pi\\le x\\le 2\\pi$.\n(iii) Hence find $g\\left(\\frac{2\\pi}{3}\\right)$ and $g\\left(\\frac{5\\pi}{3}\\right)$.",
    answer: "(i) $\\cos x=\\sin\\left(\\frac{\\pi}{2}-x\\right)$. For $0\\le x\\le\\pi$, $\\frac{\\pi}{2}-x\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, which is the principal range, so $g(x)=\\frac{\\pi}{2}-x$.\n(ii) For $\\pi\\le x\\le 2\\pi$, write $\\cos x=\\sin\\left(x-\\frac{3\\pi}{2}\\right)$ (since $\\sin\\left(x-\\frac{3\\pi}{2}\\right)=\\sin x\\cos\\frac{3\\pi}{2}-\\cos x\\sin\\frac{3\\pi}{2}=\\cos x$), and $x-\\frac{3\\pi}{2}\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$ for $\\pi\\le x\\le 2\\pi$. So $g(x)=x-\\frac{3\\pi}{2}$.\n(iii) $\\frac{2\\pi}{3}\\in[0,\\pi]$, so $g\\left(\\frac{2\\pi}{3}\\right)=\\frac{\\pi}{2}-\\frac{2\\pi}{3}=-\\frac{\\pi}{6}$. $\\frac{5\\pi}{3}\\in[\\pi,2\\pi]$, so $g\\left(\\frac{5\\pi}{3}\\right)=\\frac{5\\pi}{3}-\\frac{3\\pi}{2}=\\frac{\\pi}{6}$.",
    steps: [
      { step: "(i) Writes $\\cos x=\\sin\\left(\\frac{\\pi}{2}-x\\right)$ and checks the range to get $\\frac{\\pi}{2}-x$", marks: 1 },
      { step: "(ii) Gets $x-\\frac{3\\pi}{2}$ with the range check", marks: 1 },
      { step: "(iii) Values $-\\frac{\\pi}{6}$ and $\\frac{\\pi}{6}$ using the correct formula for each interval", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c09", chapter: C, topic: DR, type: "short", complexity: "hard", marks: 3,
    text: "Find the domain of $f(x)=\\sin^{-1}\\left(\\frac{x+1}{x-1}\\right)$, and find $f(0)$ and $f(-3)$.",
    answer: "We need $x\\ne 1$ and $\\left|\\frac{x+1}{x-1}\\right|\\le 1$, i.e. $|x+1|\\le|x-1|$. Squaring (both sides non-negative): $x^{2}+2x+1\\le x^{2}-2x+1$, so $4x\\le 0$ and $x\\le 0$. (The point $x=1$ is not in this set.) The domain is $(-\\infty,0]$. $f(0)=\\sin^{-1}(-1)=-\\frac{\\pi}{2}$ and $f(-3)=\\sin^{-1}\\left(\\frac{-2}{-4}\\right)=\\sin^{-1}\\frac{1}{2}=\\frac{\\pi}{6}$.",
    steps: [
      { step: "Writes $|x+1|\\le|x-1|$ with $x\\ne 1$", marks: 1 },
      { step: "Squares to get the domain $(-\\infty,0]$", marks: 1 },
      { step: "Gets $f(0)=-\\frac{\\pi}{2}$ and $f(-3)=\\frac{\\pi}{6}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-c10", chapter: C, topic: EV, type: "short", complexity: "hard", marks: 3,
    text: "Solve for $x$: $\\tan\\left(\\cos^{-1}x\\right)=-2$.",
    answer: "Let $\\theta=\\cos^{-1}x\\in[0,\\pi]$, with $\\theta\\ne\\frac{\\pi}{2}$ (so $x\\ne 0$). Here $\\sin\\theta=\\sqrt{1-x^{2}}\\ge 0$ and $\\cos\\theta=x$, so $\\tan\\theta=\\frac{\\sqrt{1-x^{2}}}{x}$. Setting this equal to $-2$ needs $x<0$ and $\\sqrt{1-x^{2}}=-2x$. Squaring, $1-x^{2}=4x^{2}$, so $x^{2}=\\frac{1}{5}$. The root $x=\\frac{1}{\\sqrt{5}}$ is positive, so it gives $\\tan\\theta=+2$ and is rejected. For $x=-\\frac{1}{\\sqrt{5}}$, $\\theta$ is obtuse with $\\sin\\theta=\\frac{2}{\\sqrt{5}}$, so $\\tan\\theta=-2$. Hence $x=-\\frac{1}{\\sqrt{5}}$.",
    steps: [
      { step: "Writes $\\tan\\left(\\cos^{-1}x\\right)=\\frac{\\sqrt{1-x^{2}}}{x}$ with $x\\ne 0$", marks: 1 },
      { step: "Squares to get $x^{2}=\\frac{1}{5}$ and notes $x$ must be negative", marks: 1 },
      { step: "Rejects $\\frac{1}{\\sqrt{5}}$ and concludes $x=-\\frac{1}{\\sqrt{5}}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d01", chapter: C, topic: DR, type: "long", complexity: "medium", marks: 5,
    text: "Let $f(x)=\\sec^{-1}(2x-1)$.\n(i) Find the domain of $f$.\n(ii) Find $f(1)$, $f(0)$ and $f\\left(-\\frac{1}{2}\\right)$.\n(iii) Solve $f(x)=\\frac{\\pi}{3}$.\n(iv) Solve $f(x)=\\frac{3\\pi}{4}$.\n(v) Write the range of $f$ and explain why $f$ never takes the value $\\frac{\\pi}{2}$.",
    answer: "(i) $\\sec^{-1}$ needs $|2x-1|\\ge 1$: either $2x-1\\ge 1$, i.e. $x\\ge 1$, or $2x-1\\le-1$, i.e. $x\\le 0$. The domain is $(-\\infty,0]\\cup[1,\\infty)$.\n(ii) $f(1)=\\sec^{-1}1=0$, $f(0)=\\sec^{-1}(-1)=\\pi$ and $f\\left(-\\frac{1}{2}\\right)=\\sec^{-1}(-2)=\\frac{2\\pi}{3}$.\n(iii) $\\frac{\\pi}{3}$ is in the principal range, so $2x-1=\\sec\\frac{\\pi}{3}=2$ and $x=\\frac{3}{2}$, which is in the domain.\n(iv) $2x-1=\\sec\\frac{3\\pi}{4}=-\\sqrt{2}$, so $x=\\frac{1-\\sqrt{2}}{2}\\approx-0.21$, which is $\\le 0$, hence in the domain.\n(v) The argument $2x-1$ takes every value with $|2x-1|\\ge 1$, so the range is $[0,\\pi]-\\left\\{\\frac{\\pi}{2}\\right\\}$. The value $\\frac{\\pi}{2}$ would need $\\sec\\frac{\\pi}{2}=2x-1$, but secant is undefined at $\\frac{\\pi}{2}$.",
    steps: [
      { step: "(i) Domain $(-\\infty,0]\\cup[1,\\infty)$", marks: 1 },
      { step: "(ii) $0$, $\\pi$ and $\\frac{2\\pi}{3}$", marks: 1 },
      { step: "(iii) $x=\\frac{3}{2}$", marks: 1 },
      { step: "(iv) $x=\\frac{1-\\sqrt{2}}{2}$ with a domain check", marks: 1 },
      { step: "(v) Range $[0,\\pi]-\\left\\{\\frac{\\pi}{2}\\right\\}$ with the reason", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d02", chapter: C, topic: EV, type: "long", complexity: "medium", marks: 5,
    text: "Find the principal values of\n(i) $\\sec^{-1}\\left(\\sec\\frac{8\\pi}{5}\\right)$\n(ii) $\\operatorname{cosec}^{-1}\\left(\\operatorname{cosec}\\frac{11\\pi}{7}\\right)$\n(iii) $\\cot^{-1}\\left(\\cot\\left(-\\frac{11\\pi}{6}\\right)\\right)$\n(iv) $\\tan^{-1}\\left(\\cot\\left(-\\frac{5\\pi}{8}\\right)\\right)$\n(v) $\\sin^{-1}\\left(\\cos\\frac{11\\pi}{7}\\right)$",
    answer: "(i) $\\sec\\frac{8\\pi}{5}=\\sec\\left(2\\pi-\\frac{2\\pi}{5}\\right)=\\sec\\frac{2\\pi}{5}$, and $\\frac{2\\pi}{5}\\in[0,\\pi]-\\left\\{\\frac{\\pi}{2}\\right\\}$, so the value is $\\frac{2\\pi}{5}$.\n(ii) $\\operatorname{cosec}\\frac{11\\pi}{7}=\\operatorname{cosec}\\left(2\\pi-\\frac{3\\pi}{7}\\right)=\\operatorname{cosec}\\left(-\\frac{3\\pi}{7}\\right)$ and $-\\frac{3\\pi}{7}$ is in the principal range, so the value is $-\\frac{3\\pi}{7}$.\n(iii) $\\cot\\left(-\\frac{11\\pi}{6}\\right)=\\cot\\left(-\\frac{11\\pi}{6}+2\\pi\\right)=\\cot\\frac{\\pi}{6}$ and $\\frac{\\pi}{6}\\in(0,\\pi)$, so the value is $\\frac{\\pi}{6}$.\n(iv) $\\cot\\left(-\\frac{5\\pi}{8}\\right)=\\tan\\left(\\frac{\\pi}{2}+\\frac{5\\pi}{8}\\right)=\\tan\\frac{9\\pi}{8}=\\tan\\frac{\\pi}{8}$ (period $\\pi$), and $\\frac{\\pi}{8}\\in\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$, so the value is $\\frac{\\pi}{8}$.\n(v) $\\cos\\frac{11\\pi}{7}=\\cos\\left(2\\pi-\\frac{3\\pi}{7}\\right)=\\cos\\frac{3\\pi}{7}=\\sin\\left(\\frac{\\pi}{2}-\\frac{3\\pi}{7}\\right)=\\sin\\frac{\\pi}{14}$, and $\\frac{\\pi}{14}$ is in the principal range, so the value is $\\frac{\\pi}{14}$.",
    steps: [
      { step: "(i) $\\frac{2\\pi}{5}$", marks: 1 },
      { step: "(ii) $-\\frac{3\\pi}{7}$", marks: 1 },
      { step: "(iii) $\\frac{\\pi}{6}$", marks: 1 },
      { step: "(iv) $\\frac{\\pi}{8}$", marks: 1 },
      { step: "(v) $\\frac{\\pi}{14}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d03", chapter: C, topic: GR, type: "long", complexity: "hard", marks: 5,
    text: "Let $p(x)=\\sin^{-1}(2x)$ and $q(x)=2\\sin^{-1}x$.\n(i) Find the domain and range of $p$ and of $q$.\n(ii) Find $p\\left(\\frac{1}{2}\\right)$ and $q\\left(\\frac{1}{2}\\right)$.\n(iii) Solve $p(x)=\\frac{\\pi}{3}$.\n(iv) Solve $q(x)=\\frac{\\pi}{3}$.\n(v) Show that $p(x)>q(x)$ for $0<x\\le\\frac{1}{2}$.",
    answer: "(i) $p$: we need $-1\\le 2x\\le 1$, so the domain is $\\left[-\\frac{1}{2},\\frac{1}{2}\\right]$ and the range is $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$. $q$: the domain is $[-1,1]$ and, since $\\sin^{-1}x\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, the range is $[-\\pi,\\pi]$.\n(ii) $p\\left(\\frac{1}{2}\\right)=\\sin^{-1}1=\\frac{\\pi}{2}$ and $q\\left(\\frac{1}{2}\\right)=2\\sin^{-1}\\frac{1}{2}=\\frac{\\pi}{3}$.\n(iii) $2x=\\sin\\frac{\\pi}{3}=\\frac{\\sqrt{3}}{2}$, so $x=\\frac{\\sqrt{3}}{4}$ (which is in $\\left[-\\frac{1}{2},\\frac{1}{2}\\right]$).\n(iv) $\\sin^{-1}x=\\frac{\\pi}{6}$, so $x=\\frac{1}{2}$.\n(v) Let $\\theta=\\sin^{-1}x\\in\\left(0,\\frac{\\pi}{6}\\right]$. Then $q(x)=2\\theta\\in\\left(0,\\frac{\\pi}{3}\\right]$ and $\\sin q(x)=2\\sin\\theta\\cos\\theta=2x\\cos\\theta<2x$ because $\\cos\\theta<1$. Also $p(x)\\in\\left(0,\\frac{\\pi}{2}\\right]$ with $\\sin p(x)=2x$. So $\\sin q(x)<\\sin p(x)$ with both angles in $\\left[0,\\frac{\\pi}{2}\\right]$, where sine is increasing, hence $q(x)<p(x)$. (Check: at $x=\\frac{1}{2}$, $\\frac{\\pi}{3}<\\frac{\\pi}{2}$.)",
    steps: [
      { step: "(i) Both domains and ranges", marks: 1 },
      { step: "(ii) $\\frac{\\pi}{2}$ and $\\frac{\\pi}{3}$", marks: 1 },
      { step: "(iii) $x=\\frac{\\sqrt{3}}{4}$", marks: 1 },
      { step: "(iv) $x=\\frac{1}{2}$", marks: 1 },
      { step: "(v) Shows $\\sin q<\\sin p$ and uses that sine is increasing on $\\left[0,\\frac{\\pi}{2}\\right]$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d04", chapter: C, topic: DR, type: "long", complexity: "hard", marks: 5,
    text: "Let $f(x)=\\cot^{-1}(|x|-1)$, $x\\in\\mathbb{R}$.\n(i) Write the domain of $f$ and find its range.\n(ii) Solve $f(x)=\\frac{\\pi}{2}$.\n(iii) Solve $f(x)=\\frac{\\pi}{4}$.\n(iv) Solve $f(x)=\\frac{2\\pi}{3}$.\n(v) Show that $f(x)=\\frac{5\\pi}{6}$ has no solution, and say whether $f$ is one-one.",
    answer: "(i) $|x|-1$ is defined for every real $x$, so the domain is $\\mathbb{R}$. $|x|-1$ takes every value in $[-1,\\infty)$, and $\\cot^{-1}$ is decreasing, so $f$ takes values from $\\cot^{-1}(-1)=\\frac{3\\pi}{4}$ (the greatest, at $x=0$) down towards $0$ without reaching it. The range is $\\left(0,\\frac{3\\pi}{4}\\right]$.\n(ii) $|x|-1=\\cot\\frac{\\pi}{2}=0$, so $|x|=1$ and $x=\\pm1$.\n(iii) $|x|-1=\\cot\\frac{\\pi}{4}=1$, so $|x|=2$ and $x=\\pm2$.\n(iv) $|x|-1=\\cot\\frac{2\\pi}{3}=-\\frac{1}{\\sqrt{3}}$, so $|x|=1-\\frac{1}{\\sqrt{3}}>0$ and $x=\\pm\\left(1-\\frac{1}{\\sqrt{3}}\\right)$.\n(v) $|x|-1=\\cot\\frac{5\\pi}{6}=-\\sqrt{3}$ would give $|x|=1-\\sqrt{3}<0$, which is impossible, so there is no solution (indeed $\\frac{5\\pi}{6}>\\frac{3\\pi}{4}$ is outside the range). $f$ is even, so $f(-1)=f(1)$ and $f$ is not one-one.",
    steps: [
      { step: "(i) Domain $\\mathbb{R}$ and range $\\left(0,\\frac{3\\pi}{4}\\right]$", marks: 1 },
      { step: "(ii) $x=\\pm1$", marks: 1 },
      { step: "(iii) $x=\\pm2$", marks: 1 },
      { step: "(iv) $x=\\pm\\left(1-\\frac{1}{\\sqrt{3}}\\right)$", marks: 1 },
      { step: "(v) No solution because $|x|<0$ would be needed, and $f$ is not one-one", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d05", chapter: C, topic: EV, type: "long", complexity: "hard", marks: 5,
    text: "Let $f(x)=\\cos^{-1}\\left(2x^{2}-1\\right)$.\\n(i) Show that $f$ is defined exactly for $-1\\le x\\le 1$.\\n(ii) Find $f(0)$, $f(1)$ and $f\\left(-\\frac{1}{2}\\right)$.\\n(iii) Solve $f(x)=\\frac{\\pi}{3}$.\\n(iv) Solve $f(x)=\\frac{2\\pi}{3}$.\\n(v) Find the range of $f$, and say whether $f$ is one-one.",
    answer: "(i) We need $-1\\le 2x^{2}-1\\le 1$. The left inequality gives $x^{2}\\ge 0$, true for all $x$; the right gives $x^{2}\\le 1$. So $f$ is defined exactly for $x\\in[-1,1]$.\n(ii) $f(0)=\\cos^{-1}(-1)=\\pi$, $f(1)=\\cos^{-1}1=0$ and $f\\left(-\\frac{1}{2}\\right)=\\cos^{-1}\\left(-\\frac{1}{2}\\right)=\\frac{2\\pi}{3}$.\n(iii) $2x^{2}-1=\\cos\\frac{\\pi}{3}=\\frac{1}{2}$, so $x^{2}=\\frac{3}{4}$ and $x=\\pm\\frac{\\sqrt{3}}{2}$.\n(iv) $2x^{2}-1=\\cos\\frac{2\\pi}{3}=-\\frac{1}{2}$, so $x^{2}=\\frac{1}{4}$ and $x=\\pm\\frac{1}{2}$.\n(v) On $[-1,1]$, $2x^{2}-1$ takes every value in $[-1,1]$ and $\\cos^{-1}$ is decreasing, so the range is $[0,\\pi]$. $f$ is even, so $f\\left(-\\frac{1}{2}\\right)=f\\left(\\frac{1}{2}\\right)$ and $f$ is not one-one.",
    steps: [
      { step: "(i) Shows $x^{2}\\le 1$ is the only restriction, so domain $[-1,1]$", marks: 1 },
      { step: "(ii) $\\pi$, $0$ and $\\frac{2\\pi}{3}$", marks: 1 },
      { step: "(iii) $x=\\pm\\frac{\\sqrt{3}}{2}$", marks: 1 },
      { step: "(iv) $x=\\pm\\frac{1}{2}$", marks: 1 },
      { step: "(v) Range $[0,\\pi]$ and not one-one with a reason", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d06", chapter: C, topic: EV, type: "long", complexity: "medium", marks: 5,
    text: "(i) Show that $\\cos\\left(\\sin^{-1}x\\right)=\\sqrt{1-x^{2}}$ for $-1\\le x\\le 1$, explaining the sign of the root.\n(ii) Show that $\\tan\\left(\\sin^{-1}x\\right)=\\frac{x}{\\sqrt{1-x^{2}}}$ for $-1<x<1$.\n(iii) Find $\\tan\\left(\\sin^{-1}\\left(-\\frac{2}{3}\\right)\\right)$.\n(iv) Solve $\\tan\\left(\\sin^{-1}x\\right)=\\sqrt{3}$.\n(v) Explain why $\\tan\\left(\\sin^{-1}x\\right)$ is not defined at $x=\\pm1$.",
    answer: "(i) Let $\\theta=\\sin^{-1}x\\in\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, where $\\cos\\theta\\ge 0$. From $\\sin^{2}\\theta+\\cos^{2}\\theta=1$, $\\cos\\theta=+\\sqrt{1-x^{2}}$ (the positive root, since cosine is non-negative in this range).\n(ii) For $|x|<1$, $\\cos\\theta=\\sqrt{1-x^{2}}\\ne 0$, so $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}=\\frac{x}{\\sqrt{1-x^{2}}}$.\n(iii) With $x=-\\frac{2}{3}$: $\\sqrt{1-\\frac{4}{9}}=\\frac{\\sqrt{5}}{3}$, so $\\tan\\theta=\\frac{-\\frac{2}{3}}{\\frac{\\sqrt{5}}{3}}=-\\frac{2}{\\sqrt{5}}$.\n(iv) $\\frac{x}{\\sqrt{1-x^{2}}}=\\sqrt{3}$ needs $x>0$. Squaring: $x^{2}=3-3x^{2}$, so $x^{2}=\\frac{3}{4}$ and $x=\\frac{\\sqrt{3}}{2}$ (the root $-\\frac{\\sqrt{3}}{2}$ gives $-\\sqrt{3}$ and is rejected).\n(v) At $x=\\pm1$, $\\sin^{-1}x=\\pm\\frac{\\pi}{2}$, where $\\cos\\theta=0$ and the tangent is not defined (the formula has denominator $0$).",
    steps: [
      { step: "(i) Identity with the sign justified from the range", marks: 1 },
      { step: "(ii) Divides to get $\\frac{x}{\\sqrt{1-x^{2}}}$", marks: 1 },
      { step: "(iii) $-\\frac{2}{\\sqrt{5}}$", marks: 1 },
      { step: "(iv) $x=\\frac{\\sqrt{3}}{2}$ with the other root rejected", marks: 1 },
      { step: "(v) Explains via $\\pm\\frac{\\pi}{2}$ and zero cosine", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d07", chapter: C, topic: DR, type: "long", complexity: "medium", marks: 5,
    text: "(i) Show that $f:\\mathbb{R}\\to\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$, $f(x)=\\tan^{-1}x$, is one-one.\n(ii) Show that $f$ is onto.\n(iii) Is $h:\\mathbb{R}\\to\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$, $h(x)=\\tan^{-1}x$, onto? Give a reason.\n(iv) Show that $g:[-1,1]\\to[0,\\pi]$, $g(x)=\\cos^{-1}x$, is one-one and onto.\n(v) Write the inverse of $g$ and find its value at $\\frac{2\\pi}{3}$.",
    answer: "(i) Suppose $\\tan^{-1}a=\\tan^{-1}b$. Both values lie in $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$, where tangent is defined, so taking $\\tan$ of both sides gives $a=b$. Hence $f$ is one-one.\n(ii) Let $y\\in\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ and take $x=\\tan y\\in\\mathbb{R}$. Then $f(x)=\\tan^{-1}(\\tan y)=y$ because $y$ is in the principal range. So every $y$ is attained and $f$ is onto.\n(iii) No. The values $\\pm\\frac{\\pi}{2}$ are never attained, since $\\tan^{-1}x=\\frac{\\pi}{2}$ would need $x=\\tan\\frac{\\pi}{2}$, which does not exist. The range is $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\ne\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$.\n(iv) If $\\cos^{-1}a=\\cos^{-1}b$, taking cosine gives $a=b$, so $g$ is one-one. For $y\\in[0,\\pi]$ take $x=\\cos y\\in[-1,1]$; then $g(x)=\\cos^{-1}(\\cos y)=y$ as $y\\in[0,\\pi]$. So $g$ is onto.\n(v) $g^{-1}:[0,\\pi]\\to[-1,1]$ is $g^{-1}(y)=\\cos y$. So $g^{-1}\\left(\\frac{2\\pi}{3}\\right)=\\cos\\frac{2\\pi}{3}=-\\frac{1}{2}$.",
    steps: [
      { step: "(i) One-one by taking tangent of both sides", marks: 1 },
      { step: "(ii) Onto using $x=\\tan y$ and the principal range", marks: 1 },
      { step: "(iii) Not onto, since $\\pm\\frac{\\pi}{2}$ are never attained", marks: 1 },
      { step: "(iv) $g$ is one-one and onto (both shown)", marks: 1 },
      { step: "(v) Inverse $\\cos y$ on $[0,\\pi]$ and the value $-\\frac{1}{2}$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-d08", chapter: C, topic: GR, type: "long", complexity: "hard", marks: 5,
    text: "Let $f(x)=\\cos^{-1}\\left(x^{2}-2x\\right)$.\n(i) Find the domain of $f$.\n(ii) Find the greatest and the least values of $f$, and the values of $x$ where they occur.\n(iii) Solve $f(x)=\\frac{\\pi}{2}$.\n(iv) Solve $f(x)=\\frac{2\\pi}{3}$.\n(v) Is $f$ one-one on its domain? Give a reason.",
    answer: "(i) We need $-1\\le x^{2}-2x\\le 1$. The left inequality is $(x-1)^{2}\\ge 0$, true for all $x$. The right one is $x^{2}-2x-1\\le 0$, i.e. $1-\\sqrt{2}\\le x\\le 1+\\sqrt{2}$. The domain is $\\left[1-\\sqrt{2},1+\\sqrt{2}\\right]$.\n(ii) $x^{2}-2x=(x-1)^{2}-1$ has its least value $-1$ at $x=1$ and its greatest value $1$ at $x=1\\pm\\sqrt{2}$. Since $\\cos^{-1}$ is decreasing, $f$ is greatest, $\\cos^{-1}(-1)=\\pi$, at $x=1$, and least, $\\cos^{-1}1=0$, at $x=1\\pm\\sqrt{2}$.\n(iii) $x^{2}-2x=\\cos\\frac{\\pi}{2}=0$, so $x=0$ or $x=2$ (both in the domain).\n(iv) $x^{2}-2x=\\cos\\frac{2\\pi}{3}=-\\frac{1}{2}$, so $x^{2}-2x+\\frac{1}{2}=0$ and $x=1\\pm\\frac{1}{\\sqrt{2}}$ (both in the domain).\n(v) No: $f(0)=f(2)=\\frac{\\pi}{2}$ with $0\\ne 2$ (the graph is symmetric about $x=1$).",
    steps: [
      { step: "(i) Domain $\\left[1-\\sqrt{2},1+\\sqrt{2}\\right]$", marks: 1 },
      { step: "(ii) Greatest $\\pi$ at $x=1$ and least $0$ at $x=1\\pm\\sqrt{2}$", marks: 1 },
      { step: "(iii) $x=0$ and $x=2$", marks: 1 },
      { step: "(iv) $x=1\\pm\\frac{1}{\\sqrt{2}}$", marks: 1 },
      { step: "(v) Not one-one with the example $f(0)=f(2)$", marks: 1 },
    ],
  },
  {
    id: "c12-itf-r4-e01", chapter: C, topic: DR, type: "case", complexity: "medium", marks: 4, competency: true,
    text: "A pendulum bob hangs from a fixed point by a light string of length $2$ m. When the bob is raised to a height $h$ metres above its lowest position ($0\\le h\\le 4$), the string makes an angle $\\theta=\\cos^{-1}\\left(\\frac{2-h}{2}\\right)$ radians with the downward vertical (principal value).",
    answer: "(i) $\\frac{\\pi}{3}$. (ii) The formula is defined because $\\frac{2-h}{2}\\in[-1,1]$; $\\theta\\in[0,\\pi]$. (iii) $0\\le h\\le 3$. OR: $\\frac{3\\pi}{4}$ and $\\pi$.",
    parts: [
      { label: "(i)", marks: 1, text: "Find the angle when $h=1$.", answer: "$\\theta=\\cos^{-1}\\left(\\frac{2-1}{2}\\right)=\\cos^{-1}\\frac{1}{2}=\\frac{\\pi}{3}$." },
      { label: "(ii)", marks: 1, text: "Show that the formula is defined for every $h$ in $[0,4]$, and write the set of values of $\\theta$.", answer: "For $0\\le h\\le 4$, $2-h\\in[-2,2]$, so $\\frac{2-h}{2}\\in[-1,1]$, which is the domain of $\\cos^{-1}$. As $\\frac{2-h}{2}$ takes every value in $[-1,1]$, $\\theta$ takes every value in $[0,\\pi]$ (from $\\theta=0$ at $h=0$ to $\\theta=\\pi$ at $h=4$)." },
      { label: "(iii)", marks: 2, text: "Find the heights $h$ for which the string makes an angle of at most $\\frac{2\\pi}{3}$ with the downward vertical.\nOR\nFind the angle when $h=2+\\sqrt{2}$ and when $h=4$.", answer: "$\\cos^{-1}$ is decreasing, so $\\theta\\le\\frac{2\\pi}{3}$ means $\\frac{2-h}{2}\\ge\\cos\\frac{2\\pi}{3}=-\\frac{1}{2}$ (1 mark). Then $2-h\\ge-1$, so $h\\le 3$; with $h\\ge 0$ the heights are $0\\le h\\le 3$ (1 mark).\nOR: for $h=2+\\sqrt{2}$, $\\frac{2-h}{2}=-\\frac{\\sqrt{2}}{2}=-\\frac{1}{\\sqrt{2}}$, so $\\theta=\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)=\\frac{3\\pi}{4}$ (1 mark). For $h=4$, $\\frac{2-h}{2}=-1$, so $\\theta=\\cos^{-1}(-1)=\\pi$ (1 mark)." },
    ],
  },
  {
    id: "c12-itf-r4-e02", chapter: C, topic: DR, type: "case", complexity: "medium", marks: 4, competency: true,
    text: "A wire of length $L$ metres ($L>5$) runs from the top of a vertical pole to a peg on level ground, $5$ m from the foot of the pole. The angle the wire makes with the ground is $\\theta=\\sec^{-1}\\left(\\frac{L}{5}\\right)$ radians (principal value).",
    answer: "(i) $\\frac{\\pi}{3}$. (ii) $\\left(0,\\frac{\\pi}{2}\\right)$. (iii) $\\frac{10}{\\sqrt{3}}\\le L\\le 5\\sqrt{2}$. OR: $\\sin\\theta=\\frac{12}{13}$ and the pole is $12$ m high.",
    parts: [
      { label: "(i)", marks: 1, text: "Find the angle when the wire is $10$ m long.", answer: "$\\theta=\\sec^{-1}\\frac{10}{5}=\\sec^{-1}2=\\frac{\\pi}{3}$." },
      { label: "(ii)", marks: 1, text: "As $L$ takes all values greater than $5$, what set of values does $\\theta$ take?", answer: "$\\frac{L}{5}$ takes every value greater than $1$. On $(1,\\infty)$, $\\sec^{-1}$ is increasing, takes the value $0$ only at the argument $1$ and tends to $\\frac{\\pi}{2}$ for large arguments, so $\\theta\\in\\left(0,\\frac{\\pi}{2}\\right)$." },
      { label: "(iii)", marks: 2, text: "The wire must make an angle between $\\frac{\\pi}{6}$ and $\\frac{\\pi}{4}$ (inclusive) with the ground. Find the allowed lengths $L$.\nOR\nFor $L=13$, find $\\sin\\theta$ and the height of the pole.", answer: "On $\\left[0,\\frac{\\pi}{2}\\right)$, $\\sec$ is increasing, so $\\frac{\\pi}{6}\\le\\theta\\le\\frac{\\pi}{4}$ means $\\sec\\frac{\\pi}{6}\\le\\frac{L}{5}\\le\\sec\\frac{\\pi}{4}$, i.e. $\\frac{2}{\\sqrt{3}}\\le\\frac{L}{5}\\le\\sqrt{2}$ (1 mark). So $\\frac{10}{\\sqrt{3}}\\le L\\le 5\\sqrt{2}$ (about $5.77$ m to $7.07$ m) (1 mark).\nOR: $\\sec\\theta=\\frac{13}{5}$, so $\\cos\\theta=\\frac{5}{13}$ and $\\sin\\theta=\\sqrt{1-\\frac{25}{169}}=\\frac{12}{13}$ (1 mark). The height of the pole is $L\\sin\\theta=13\\cdot\\frac{12}{13}=12$ m (1 mark)." },
    ],
  },
  {
    id: "c12-itf-r4-e03", chapter: C, topic: EV, type: "case", complexity: "medium", marks: 4, competency: true,
    text: "A ball is thrown from level ground with speed $20$ m/s (take $g=10$ m/s$^{2}$). To land at a point at horizontal distance $R$ metres, it must be thrown at an angle $\\theta$ above the horizontal with $\\sin2\\theta=\\frac{R}{40}$. Taking the smaller launch angle, $\\theta=\\frac{1}{2}\\sin^{-1}\\left(\\frac{R}{40}\\right)$, where $\\sin^{-1}$ is the principal value.",
    answer: "(i) $\\frac{\\pi}{12}$. (ii) $0\\le R\\le 40$, and the angle is $\\frac{\\pi}{4}$ at $R=40$. (iii) $\\frac{\\pi}{12}\\le\\theta\\le\\frac{\\pi}{6}$. OR: $\\frac{\\pi}{8}$ and the other launch angle $\\frac{3\\pi}{8}$.",
    parts: [
      { label: "(i)", marks: 1, text: "Find the launch angle for $R=20$ m.", answer: "$\\theta=\\frac{1}{2}\\sin^{-1}\\frac{20}{40}=\\frac{1}{2}\\sin^{-1}\\frac{1}{2}=\\frac{1}{2}\\cdot\\frac{\\pi}{6}=\\frac{\\pi}{12}$ (that is, $15^{\\circ}$)." },
      { label: "(ii)", marks: 1, text: "For which values of $R$ is the formula defined, and what is the launch angle at the largest such $R$?", answer: "We need $-1\\le\\frac{R}{40}\\le 1$ and $R\\ge 0$, so $0\\le R\\le 40$ (the ball cannot land farther than $40$ m). At $R=40$, $\\theta=\\frac{1}{2}\\sin^{-1}1=\\frac{1}{2}\\cdot\\frac{\\pi}{2}=\\frac{\\pi}{4}$." },
      { label: "(iii)", marks: 2, text: "Find the launch angles needed for landing distances from $20$ m to $20\\sqrt{3}$ m (inclusive).\nOR\nFor $R=20\\sqrt{2}$ m, find the smaller launch angle, and the other launch angle that gives the same landing distance.", answer: "$\\sin^{-1}$ is increasing, so $\\theta$ runs from $\\frac{1}{2}\\sin^{-1}\\frac{1}{2}=\\frac{\\pi}{12}$ (at $R=20$) to $\\frac{1}{2}\\sin^{-1}\\frac{\\sqrt{3}}{2}=\\frac{1}{2}\\cdot\\frac{\\pi}{3}=\\frac{\\pi}{6}$ (at $R=20\\sqrt{3}$) (1 mark each). So $\\frac{\\pi}{12}\\le\\theta\\le\\frac{\\pi}{6}$.\nOR: $\\frac{R}{40}=\\frac{\\sqrt{2}}{2}=\\frac{1}{\\sqrt{2}}$, so $\\theta=\\frac{1}{2}\\sin^{-1}\\frac{1}{\\sqrt{2}}=\\frac{\\pi}{8}$ (1 mark). The other angle that gives the same $\\sin2\\theta$ is $\\frac{\\pi}{2}-\\frac{\\pi}{8}=\\frac{3\\pi}{8}$ (1 mark)." },
    ],
  },
  {
    id: "c12-itf-r4-e04", chapter: C, topic: GR, type: "case", complexity: "medium", marks: 4, competency: true,
    text: "A camera is fixed at a height of $4$ m on a pole above the point $O$ of a straight horizontal road. It looks down at the point of the road at signed distance $x$ metres from $O$ ($x>0$ to the right, $x<0$ to the left). The line of sight makes an angle $\\varphi$ with the rightward direction of the road, where $\\varphi=\\cot^{-1}\\left(\\frac{x}{4}\\right)$ (principal value), so $0<\\varphi<\\pi$.",
    answer: "(i) $\\frac{\\pi}{6}$. (ii) $\\frac{3\\pi}{4}$ and $\\frac{\\pi}{2}$. (iii) $|x|\\le\\frac{4}{\\sqrt{3}}$. OR: $x=-4\\sqrt{3}$, and $\\varphi\\in\\left(0,\\frac{\\pi}{2}\\right)$ for $x>0$.",
    parts: [
      { label: "(i)", marks: 1, text: "Find $\\varphi$ when $x=4\\sqrt{3}$.", answer: "$\\varphi=\\cot^{-1}\\frac{4\\sqrt{3}}{4}=\\cot^{-1}\\sqrt{3}=\\frac{\\pi}{6}$." },
      { label: "(ii)", marks: 1, text: "Find $\\varphi$ when $x=-4$ and when $x=0$.", answer: "For $x=-4$: $\\varphi=\\cot^{-1}(-1)=\\frac{3\\pi}{4}$ (the camera looks down and to the left). For $x=0$: $\\varphi=\\cot^{-1}0=\\frac{\\pi}{2}$ (the camera looks straight down)." },
      { label: "(iii)", marks: 2, text: "The camera records a point only when $\\frac{\\pi}{3}\\le\\varphi\\le\\frac{2\\pi}{3}$. Find the values of $x$ that are recorded.\nOR\nFind the point on the road where $\\varphi=\\frac{5\\pi}{6}$, and write the set of values of $\\varphi$ for points to the right of $O$.", answer: "$\\cot^{-1}$ is decreasing, so $\\frac{\\pi}{3}\\le\\varphi\\le\\frac{2\\pi}{3}$ means $\\cot\\frac{2\\pi}{3}\\le\\frac{x}{4}\\le\\cot\\frac{\\pi}{3}$, i.e. $-\\frac{1}{\\sqrt{3}}\\le\\frac{x}{4}\\le\\frac{1}{\\sqrt{3}}$ (1 mark). So $-\\frac{4}{\\sqrt{3}}\\le x\\le\\frac{4}{\\sqrt{3}}$ (about $\\pm2.31$ m) (1 mark).\nOR: $\\frac{x}{4}=\\cot\\frac{5\\pi}{6}=-\\sqrt{3}$, so $x=-4\\sqrt{3}$ (1 mark). For $x>0$, $\\frac{x}{4}>0$ and $\\cot^{-1}$ of a positive number lies in $\\left(0,\\frac{\\pi}{2}\\right)$ (1 mark)." },
    ],
  },
];
