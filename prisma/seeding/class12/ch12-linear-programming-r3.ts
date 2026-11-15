import type { Class12Question } from './types.js';

const C = 'Linear Programming';
const FORM = 'Formulating a linear programming problem';
const GRAPH = 'Graphical method and corner points';
const UNB = 'Unbounded feasible regions';

const AR_OPTIONS = [
  'Both A and R are true and R is the correct explanation of A',
  'Both A and R are true but R is not the correct explanation of A',
  'A is true but R is false',
  'A is false but R is true',
];

export const CH12_LPP_R3: Class12Question[] = [
  // ───────────── Section A (1 mark) ─────────────
  {
    id: 'c12-lpp-r3-a01', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A club hires $x$ senior and $y$ junior coaches. It needs at least 8 coaches in all, and the number of junior coaches must not exceed three times the number of senior coaches. These conditions are written as',
    options: ['$x + y \\ge 8$, $y \\le 3x$', '$x + y \\le 8$, $y \\le 3x$', '$x + y \\ge 8$, $y \\ge 3x$', '$x + y \\ge 8$, $x \\le 3y$'],
    answer: 'Correct option: A) $x + y \\ge 8$, $y \\le 3x$. "At least 8 in all" gives $x + y \\ge 8$, and "juniors do not exceed three times seniors" gives $y \\le 3x$. Option B reverses the first inequality, C reverses the second and D swaps the roles of $x$ and $y$.',
  },
  {
    id: 'c12-lpp-r3-a02', chapter: C, topic: FORM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Food P is 20% protein by weight and food Q is 30% protein by weight. A mixture of $x$ kg of P and $y$ kg of Q must contain at least 6 kg of protein. This condition is',
    options: ['$2x + 3y \\ge 60$', '$3x + 2y \\ge 60$', '$2x + 3y \\ge 6$', '$2x + 3y \\le 60$'],
    answer: 'Correct option: A) $2x + 3y \\ge 60$. The protein in the mixture is $0.2x + 0.3y$ kg, and $0.2x + 0.3y \\ge 6$ becomes $2x + 3y \\ge 60$ on multiplying by 10. Option B swaps the percentages, C forgets to multiply the right side by 10 and D reverses the inequality.',
  },
  {
    id: 'c12-lpp-r3-a03', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following cannot be a constraint of a linear programming problem in $x$ and $y$?',
    options: ['$x + 2y \\le 10$', '$3x \\ge y$', '$xy \\le 6$', '$y \\ge 0$'],
    answer: 'Correct option: C) $xy \\le 6$. Every constraint of an LPP must be a linear inequality or equation in the decision variables; $xy$ is a product of the variables (degree 2), so $xy \\le 6$ is not linear. The other three are all linear.',
  },
  {
    id: 'c12-lpp-r3-a04', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following points satisfies both $x + y \\ge 3$ and $2x + y \\le 10$?',
    options: ['$(1, 1)$', '$(2, 2)$', '$(5, 1)$', '$(4, 3)$'],
    answer: 'Correct option: B) $(2, 2)$, since $2 + 2 = 4 \\ge 3$ and $2(2) + 2 = 6 \\le 10$. The point $(1, 1)$ gives $x + y = 2 < 3$, while $(5, 1)$ and $(4, 3)$ give $2x + y = 11$, which is more than 10.',
  },
  {
    id: 'c12-lpp-r3-a05', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of corner points of the feasible region determined by $2x + y \\le 10$, $x + 2y \\le 10$, $x \\ge 0$, $y \\ge 0$ is',
    options: ['$3$', '$4$', '$5$', '$6$'],
    answer: 'Correct option: B) $4$. The corner points are $(0, 0)$, $(5, 0)$, $\\left(\\frac{10}{3}, \\frac{10}{3}\\right)$ (where the two lines meet) and $(0, 5)$. Counting only $3$ forgets the point where the two lines intersect, and corners need not have whole-number coordinates.',
  },
  {
    id: 'c12-lpp-r3-a06', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The corner points of the bounded feasible region of an LPP are $(1, 2)$, $(4, 1)$, $(5, 5)$ and $(2, 6)$. If $Z = 3x - 2y$, the sum of the maximum and the minimum values of $Z$ is',
    options: ['$4$', '$16$', '$9$', '$-7$'],
    answer: 'Correct option: A) $4$. The values of $Z$ at the corners are $-1$, $10$, $5$ and $-6$, so the maximum is $10$ and the minimum is $-6$; their sum is $4$. Option B is the difference $10 - (-6)$, C adds $10$ and $-1$, and D adds $-1$ and $-6$.',
  },
  {
    id: 'c12-lpp-r3-a07', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The feasible region of an LPP is bounded with corner points $(0, 0)$, $(4, 0)$, $(4, 3)$ and $(0, 9)$. For which of the following objective functions does the maximum value occur at more than one corner point?',
    options: ['$Z = x + y$', '$Z = 6x + 4y$', '$Z = 2x + y$', '$Z = x + 3y$'],
    answer: 'Correct option: B) $Z = 6x + 4y$. Its values at the corners are $0$, $24$, $36$ and $36$, so the maximum $36$ occurs at both $(4, 3)$ and $(0, 9)$. The other functions give a single largest corner value: $Z = x + y$ gives $0, 4, 7, 9$; $Z = 2x + y$ gives $0, 8, 11, 9$; $Z = x + 3y$ gives $0, 4, 13, 27$.',
  },
  {
    id: 'c12-lpp-r3-a08', chapter: C, topic: UNB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The feasible region of an LPP is unbounded and the smallest value of $Z = ax + by$ at its corner points is $m$. Then $m$ is the minimum value of $Z$ provided',
    options: [
      'the open half-plane $ax + by < m$ has no point in common with the feasible region',
      'the open half-plane $ax + by > m$ has no point in common with the feasible region',
      'the origin lies in the feasible region',
      '$m$ is attained at two different corner points',
    ],
    answer: 'Correct option: A) the open half-plane $ax + by < m$ has no point in common with the feasible region. If no feasible point gives a value below $m$, then $m$ is the minimum. Option B would say no point gives a value above $m$, which cannot hold on an unbounded region, and C and D are unrelated to the test.',
  },
  {
    id: 'c12-lpp-r3-a09', chapter: C, topic: UNB, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The feasible region determined by $x + y \\ge 4$, $x \\le 3$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 4)$ and $(3, 1)$. For $Z = 5x - 2y$, which statement is correct?',
    options: [
      'Maximum is $13$ at $(3, 1)$ and there is no minimum',
      'Maximum is $13$ at $(3, 1)$ and minimum is $-8$ at $(0, 4)$',
      'Minimum is $-8$ at $(0, 4)$ and there is no maximum',
      '$Z$ has neither a maximum nor a minimum',
    ],
    answer: 'Correct option: A) maximum $13$ at $(3, 1)$ and no minimum. The corner values are $-8$ and $13$. The half-plane $5x - 2y > 13$ would need $y < \\frac{5x - 13}{2}$, but the region needs $y \\ge 4 - x$; together these force $x > 3$, which is not allowed, so $13$ is the maximum. But the points $(0, y)$ with $y \\ge 4$ are feasible and give $Z = -2y$, which decreases without limit, so there is no minimum. Option B treats the region as bounded.',
  },
  {
    id: 'c12-lpp-r3-a10', chapter: C, topic: UNB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The feasible region determined by $2x + 3y \\ge 12$, $x + y \\ge 5$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 5)$, $(3, 2)$ and $(6, 0)$. The minimum value of $Z = 3x + 4y$ on this region is',
    options: ['$17$', '$18$', '$20$', 'it does not exist'],
    answer: 'Correct option: A) $17$. The corner values are $20$, $17$ and $18$. Since $3x + 4y = (2x + 3y) + (x + y) \\ge 12 + 5 = 17$ at every feasible point, the half-plane $3x + 4y < 17$ has no point in common with the region, so the minimum is $17$ at $(3, 2)$. The minimum does exist, because the open half-plane test succeeds.',
  },
  {
    id: 'c12-lpp-r3-a11', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A firm makes $x$ units of product A and $y$ units of product B. Each unit of A needs 2 machine hours and each unit of B needs 1 machine hour; at most 40 machine hours are available, and at most 15 units of A can be sold. Which of the following production plans $(x, y)$ is feasible?',
    options: ['$(15, 10)$', '$(16, 5)$', '$(12, 20)$', '$(10, 25)$'],
    answer: 'Correct option: A) $(15, 10)$. The constraints are $2x + y \\le 40$ and $x \\le 15$, with $x, y \\ge 0$. For $(15, 10)$: $2(15) + 10 = 40 \\le 40$ and $15 \\le 15$. The plan $(16, 5)$ has $x > 15$, and $(12, 20)$ and $(10, 25)$ use $44$ and $45$ machine hours.',
  },
  {
    id: 'c12-lpp-r3-a12', chapter: C, topic: FORM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A mixture of $x$ kg of ingredient A and $y$ kg of ingredient B must be at least 25% ingredient A by weight. This condition is',
    options: ['$3x \\ge y$', '$3y \\ge x$', '$4x \\ge y$', '$x \\ge 4y$'],
    answer: 'Correct option: A) $3x \\ge y$. The condition is $x \\ge 0.25(x + y)$, that is, $4x \\ge x + y$, so $3x \\ge y$. Option B swaps the ingredients, C takes 25% of $y$ alone instead of 25% of the whole mixture, and D confuses 25% with a ratio of 1 to 4.',
  },
  {
    id: 'c12-lpp-r3-a13', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The feasible region determined by $x + y \\ge 2$, $x - y \\le 2$, $x \\ge 0$, $y \\ge 0$ is',
    options: ['a bounded triangle', 'a bounded quadrilateral', 'an unbounded region with two corner points', 'the empty set'],
    answer: 'Correct option: C) an unbounded region with two corner points. The point $(5, 5)$ satisfies all four inequalities, so the region is not empty, and so does every point $(5 + t, 5 + t)$ with $t \\ge 0$, so the region is unbounded. On the $x$-axis the conditions $x \\ge 2$ and $x \\le 2$ give only $(2, 0)$, and on the $y$-axis the conditions give $y \\ge 2$, so the corner points are $(2, 0)$ and $(0, 2)$. A bounded triangle or quadrilateral is ruled out because the region extends without limit.',
  },
  {
    id: 'c12-lpp-r3-a14', chapter: C, topic: GRAPH, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'The bounded feasible region of an LPP has corner points $(0, 0)$, $(5, 0)$, $(3, 4)$ and $(0, 6)$.\nAssertion (A): The maximum value of $Z = 3x + 2y$ on this region is $17$.\nReason (R): The maximum value of $Z = 3x + 2y$ always occurs at the corner point with the largest $x$-coordinate.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true but R is false. The values of $Z$ at the corners are $0$, $15$, $17$ and $12$, and the region is bounded, so the maximum is $17$ at $(3, 4)$ and A is true. R is false: the corner with the largest $x$-coordinate is $(5, 0)$, where $Z = 15$, which is not the maximum.',
  },
  {
    id: 'c12-lpp-r3-a15', chapter: C, topic: UNB, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'The feasible region of an LPP is given by $2x + y \\ge 4$, $x \\ge 0$, $y \\ge 0$.\nAssertion (A): $Z = -3x - y$ has a maximum value on this region.\nReason (R): If the feasible region of an LPP is unbounded, the objective function never has a maximum value.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true but R is false. At every feasible point $3x + y = (2x + y) + x \\ge 4$, so $Z = -(3x + y) \\le -4$, with $Z = -4$ attained at $(0, 4)$; hence $Z$ has the maximum value $-4$ and A is true. The region is unbounded, so A itself is an example showing that R is false.',
  },

  // ───────────── Section B (2 marks) ─────────────
  {
    id: 'c12-lpp-r3-b01', chapter: C, topic: GRAPH, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the corner points of the feasible region determined by $x \\ge y$, $y \\ge 0$, $x \\le 6$ and $x + y \\ge 4$.',
    answer: 'The line $y = x$ passes through $(0, 0)$ and $(6, 6)$, and the region lies on or below it. The line $x + y = 4$ passes through $(4, 0)$ and $(0, 4)$; the origin does not satisfy $x + y \\ge 4$, so the region lies on the side away from the origin. Also $y \\ge 0$ and $x \\le 6$. The region is bounded. The line $y = x$ meets $x + y = 4$ at $(2, 2)$ and meets $x = 6$ at $(6, 6)$; the line $x = 6$ meets $y = 0$ at $(6, 0)$; the line $x + y = 4$ meets $y = 0$ at $(4, 0)$. The corner points are $(4, 0)$, $(6, 0)$, $(6, 6)$ and $(2, 2)$.',
    steps: [
      { step: 'Identifies the correct side of each of the four lines and the bounded region', marks: 1 },
      { step: 'Finds all four corner points $(4, 0)$, $(6, 0)$, $(6, 6)$, $(2, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-b02', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 2,
    text: 'A printing press makes posters and banners. A poster needs 5 minutes of printing and 3 minutes of finishing; a banner needs 8 minutes of printing and 2 minutes of finishing. Each day at most 400 minutes of printing and 180 minutes of finishing are available, and at least 10 banners must be made for standing orders. The profit is Rs 4 per poster and Rs 9 per banner. Formulate this as a linear programming problem to maximise the daily profit. (Do not solve it.)',
    answer: 'Let $x$ posters and $y$ banners be made each day. Maximise $Z = 4x + 9y$ subject to $5x + 8y \\le 400$ (printing time), $3x + 2y \\le 180$ (finishing time), $y \\ge 10$ (standing orders) and $x \\ge 0$ (also $y \\ge 0$, which follows from $y \\ge 10$).',
    steps: [
      { step: 'Defines $x$ and $y$ and writes the objective $Z = 4x + 9y$ to be maximised', marks: 1 },
      { step: 'Writes the constraints $5x + 8y \\le 400$, $3x + 2y \\le 180$, $y \\ge 10$, $x \\ge 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-b03', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 2,
    text: 'The feasible region determined by $x + y \\ge 5$, $3x + y \\ge 9$, $x \\ge 0$, $y \\ge 0$ is unbounded. Find its corner points and the minimum value of $Z = 2x + y$.',
    answer: 'The line $x + y = 5$ meets the axes at $(5, 0)$ and $(0, 5)$; the line $3x + y = 9$ meets them at $(3, 0)$ and $(0, 9)$. Subtracting the equations gives $2x = 4$, so $x = 2$, $y = 3$. The region lies away from the origin, with corner points $(0, 9)$, $(2, 3)$ and $(5, 0)$. Values of $Z$: $9$, $7$, $10$. The smallest is $7$. At every feasible point $2x + y = \\frac{1}{2}(x + y) + \\frac{1}{2}(3x + y) \\ge \\frac{5}{2} + \\frac{9}{2} = 7$, so the open half-plane $2x + y < 7$ has no point in common with the region. Hence the minimum value of $Z$ is $7$, at $(2, 3)$.',
    steps: [
      { step: 'Finds the corner points $(0, 9)$, $(2, 3)$, $(5, 0)$ of the unbounded region', marks: 1 },
      { step: 'Evaluates $Z$, uses the half-plane test $2x + y < 7$ and states minimum $7$ at $(2, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-b04', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 2,
    text: 'The feasible region of an LPP is given by $x + y \\ge 3$, $x \\ge 0$, $y \\ge 0$. Find its corner points and show that $Z = 2x - 3y$ has neither a maximum nor a minimum value on it.',
    answer: 'The line $x + y = 3$ meets the axes at $(3, 0)$ and $(0, 3)$, and the region lies away from the origin, so it is unbounded with corner points $(3, 0)$ and $(0, 3)$. The corner values of $Z$ are $6$ and $-9$. Maximum: the points $(t, 0)$ with $t \\ge 3$ are feasible and give $Z = 2t$, which grows without limit, so $Z$ has no maximum. Minimum: the points $(0, t)$ with $t \\ge 3$ are feasible and give $Z = -3t$, which decreases without limit, so $Z$ has no minimum.',
    steps: [
      { step: 'Finds the corner points $(3, 0)$ and $(0, 3)$ of the unbounded region', marks: 1 },
      { step: 'Shows $Z$ is unbounded above along $(t, 0)$ and unbounded below along $(0, t)$, so neither value exists', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-b05', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the corner points of the feasible region determined by $2x + 3y \\le 12$, $3x + 2y \\le 12$, $x \\ge 0$, $y \\ge 0$, and hence the maximum value of $Z = 5x + 3y$.',
    answer: 'The line $2x + 3y = 12$ meets the axes at $(6, 0)$ and $(0, 4)$; the line $3x + 2y = 12$ meets them at $(4, 0)$ and $(0, 6)$. Adding the equations gives $5x + 5y = 24$, and subtracting gives $x = y$, so the lines meet at $\\left(\\frac{12}{5}, \\frac{12}{5}\\right)$. The origin satisfies both inequalities, so the region is bounded with corner points $(0, 0)$, $(4, 0)$, $\\left(\\frac{12}{5}, \\frac{12}{5}\\right)$ and $(0, 4)$. Values of $Z$: $0$, $20$, $\\frac{96}{5} = 19.2$, $12$. The maximum value of $Z$ is $20$, at $(4, 0)$.',
    steps: [
      { step: 'Finds the intersection $\\left(\\frac{12}{5}, \\frac{12}{5}\\right)$ and all four corner points', marks: 1 },
      { step: 'Evaluates $Z$ at the corners and states maximum $20$ at $(4, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-b06', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 2,
    text: 'A school computer lab must buy at least 12 computers in all, of which at least 3 must be laptops. The number of laptops may not exceed half the number of desktops. A desktop costs Rs 30,000 and a laptop costs Rs 45,000. Formulate this as a linear programming problem to minimise the total cost. (Do not solve it.)',
    answer: 'Let $x$ desktops and $y$ laptops be bought. Minimise $Z = 30000x + 45000y$ subject to $x + y \\ge 12$ (total), $y \\ge 3$ (laptops), $y \\le \\frac{x}{2}$, that is, $x \\ge 2y$ (laptops at most half the desktops), and $x \\ge 0$.',
    steps: [
      { step: 'Defines $x$ and $y$ and writes the objective $Z = 30000x + 45000y$ to be minimised', marks: 1 },
      { step: 'Writes the constraints $x + y \\ge 12$, $y \\ge 3$, $x \\ge 2y$, $x \\ge 0$', marks: 1 },
    ],
  },

  // ───────────── Section C (3 marks) ─────────────
  {
    id: 'c12-lpp-r3-c01', chapter: C, topic: GRAPH, type: 'short', complexity: 'easy', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 4x + 3y$ subject to $3x + y \\le 12$, $x + y \\le 8$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $3x + y = 12$ passes through $(4, 0)$ and $(0, 12)$; the line $x + y = 8$ passes through $(8, 0)$ and $(0, 8)$. The origin satisfies both inequalities, so the feasible region is the bounded region on the origin side of both lines in the first quadrant. Subtracting the equations gives $2x = 4$, so $x = 2$, $y = 6$. Corner points: $(0, 0)$, $(4, 0)$, $(2, 6)$, $(0, 8)$. Values of $Z$: $0$, $16$, $26$, $24$. The maximum value of $Z$ is $26$, at $x = 2$, $y = 6$.',
    steps: [
      { step: 'Draws both lines and identifies the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(4, 0)$, $(2, 6)$, $(0, 8)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $26$ at $(2, 6)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c02', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find graphically the maximum and minimum values of $Z = 2x + 7y$ subject to $x - y \\le 3$, $y - x \\le 3$, $x + y \\le 9$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The lines $x - y = 3$ (through $(3, 0)$ and $(6, 3)$) and $y - x = 3$ (through $(0, 3)$ and $(3, 6)$) are parallel, and the region lies between them (the origin satisfies both inequalities); the line $x + y = 9$ cuts it off, and the region lies in the first quadrant. It is bounded. Corner points: $x - y = 3$ meets $y = 0$ at $(3, 0)$; $x - y = 3$ meets $x + y = 9$ at $(6, 3)$; $y - x = 3$ meets $x + y = 9$ at $(3, 6)$; $y - x = 3$ meets $x = 0$ at $(0, 3)$; and the origin $(0, 0)$. Values of $Z$: $0$, $6$, $33$, $48$, $21$. Maximum value $48$ at $(3, 6)$; minimum value $0$ at $(0, 0)$.',
    steps: [
      { step: 'Draws the lines and identifies the bounded region between the two parallel lines', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(3, 0)$, $(6, 3)$, $(3, 6)$, $(0, 3)$', marks: 1 },
      { step: 'States maximum $48$ at $(3, 6)$ and minimum $0$ at $(0, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c03', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'A parking lot has 600 square metres of usable area. A car needs 12 square metres and a bike needs 3 square metres. At most 80 vehicles can be admitted in all, and at least 20 bikes must be kept for a delivery contract. The daily fee is Rs 30 per car and Rs 10 per bike. Formulate this as an LPP and solve it graphically to find the number of cars and bikes that gives the maximum daily fee.',
    answer: 'Let $x$ cars and $y$ bikes be admitted. Maximise $Z = 30x + 10y$ subject to $12x + 3y \\le 600$, that is, $4x + y \\le 200$ (area); $x + y \\le 80$ (capacity); $y \\ge 20$ (contract); $x \\ge 0$. Lines: $4x + y = 200$ through $(50, 0)$ and $(0, 200)$; $x + y = 80$ through $(80, 0)$ and $(0, 80)$; $y = 20$. Subtracting the first two gives $3x = 120$, so $(40, 40)$. The line $y = 20$ meets $4x + y = 200$ at $(45, 20)$ and the $y$-axis at $(0, 20)$; $x + y = 80$ meets the $y$-axis at $(0, 80)$. The bounded region has corner points $(0, 20)$, $(45, 20)$, $(40, 40)$, $(0, 80)$. Values of $Z$: $200$, $1550$, $1600$, $800$. The maximum fee is Rs 1600, with 40 cars and 40 bikes.',
    steps: [
      { step: 'Writes $Z = 30x + 10y$ and the constraints $4x + y \\le 200$, $x + y \\le 80$, $y \\ge 20$, $x \\ge 0$', marks: 1 },
      { step: 'Finds the corner points $(0, 20)$, $(45, 20)$, $(40, 40)$, $(0, 80)$', marks: 1 },
      { step: 'States maximum fee Rs 1600 with 40 cars and 40 bikes', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c04', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'A factory must make at least 60 units of item A and at least 80 units of item B each day using two machines. Machine M1 makes 6 units of A and 4 units of B per hour and costs Rs 100 per hour to run; machine M2 makes 2 units of A and 8 units of B per hour and costs Rs 120 per hour. M1 can be run for at most 10 hours a day. Formulate this as an LPP and solve it graphically to find the running hours that minimise the daily cost.',
    answer: 'Let M1 run for $x$ hours and M2 for $y$ hours. Minimise $Z = 100x + 120y$ subject to $6x + 2y \\ge 60$, that is, $3x + y \\ge 30$ (item A); $4x + 8y \\ge 80$, that is, $x + 2y \\ge 20$ (item B); $x \\le 10$; $y \\ge 0$ (and $x \\ge 0$). The lines $3x + y = 30$ and $x + 2y = 20$ meet where $y = 30 - 3x$ and $x + 60 - 6x = 20$, giving $x = 8$, $y = 6$. The line $x = 10$ meets $x + 2y = 20$ at $(10, 5)$. The region lies away from the origin and is unbounded, with corner points $(0, 30)$, $(8, 6)$, $(10, 5)$. Values of $Z$: $3600$, $1520$, $1600$. The smallest is $1520$. The open half-plane $100x + 120y < 1520$ has no point in common with the region, so the minimum cost is Rs 1520, with M1 running 8 hours and M2 running 6 hours.',
    steps: [
      { step: 'Writes $Z = 100x + 120y$ and the constraints $3x + y \\ge 30$, $x + 2y \\ge 20$, $x \\le 10$, $x, y \\ge 0$', marks: 1 },
      { step: 'Finds the unbounded region with corner points $(0, 30)$, $(8, 6)$, $(10, 5)$', marks: 1 },
      { step: 'Uses the half-plane test and states minimum cost Rs 1520 at $x = 8$, $y = 6$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c05', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = -3x - 2y$ subject to $x + y \\ge 5$, $2x + y \\ge 8$, $x \\ge 0$, $y \\ge 0$. Does $Z$ have a minimum value on the feasible region? Justify.',
    answer: 'The line $x + y = 5$ passes through $(5, 0)$ and $(0, 5)$; the line $2x + y = 8$ passes through $(4, 0)$ and $(0, 8)$. The feasible region lies away from the origin and is unbounded. Subtracting the equations gives $x = 3$, $y = 2$. Corner points: $(0, 8)$, $(3, 2)$, $(5, 0)$. Values of $Z$: $-16$, $-13$, $-15$. The largest is $-13$. At every feasible point $3x + 2y = (x + y) + (2x + y) \\ge 5 + 8 = 13$, so $Z \\le -13$ and the half-plane $-3x - 2y > -13$ has no point in common with the region. Hence the maximum value of $Z$ is $-13$, at $(3, 2)$. There is no minimum: the points $(t, 0)$ with $t \\ge 5$ are feasible and give $Z = -3t$, which decreases without limit.',
    steps: [
      { step: 'Draws the lines and finds the corner points $(0, 8)$, $(3, 2)$, $(5, 0)$ of the unbounded region', marks: 1 },
      { step: 'Evaluates $Z$ and justifies maximum $-13$ at $(3, 2)$ using the half-plane test', marks: 1 },
      { step: 'Explains that $Z$ has no minimum since $Z = -3t$ is unbounded below along $(t, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c06', chapter: C, topic: UNB, type: 'short', complexity: 'hard', marks: 3,
    text: 'Find graphically the maximum and minimum values, if they exist, of $Z = 3x - 2y$ subject to $x + y \\ge 6$, $y - x \\le 2$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $x + y = 6$ passes through $(6, 0)$ and $(0, 6)$; the line $y = x + 2$ passes through $(0, 2)$ and $(2, 4)$. The region lies away from the origin on the side of $x + y = 6$, and on or below the line $y = x + 2$. These two conditions give $6 - x \\le y \\le x + 2$, so $x \\ge 2$ and the region does not reach the $y$-axis; it is unbounded to the right. Corner points: the lines meet at $(2, 4)$, and $x + y = 6$ meets $y = 0$ at $(6, 0)$. Values of $Z$: $-2$ and $18$. Minimum: every feasible point has $y \\le x + 2$ and $x \\ge 2$, so $Z = 3x - 2y \\ge 3x - 2(x + 2) = x - 4 \\ge -2$; hence the minimum value is $-2$ at $(2, 4)$. Maximum: the points $(t, 0)$ with $t \\ge 6$ are feasible and give $Z = 3t$, which grows without limit, so $Z$ has no maximum.',
    steps: [
      { step: 'Identifies the unbounded region and its corner points $(2, 4)$ and $(6, 0)$', marks: 1 },
      { step: 'Shows $Z \\ge -2$ on the region (half-plane test) and states minimum $-2$ at $(2, 4)$', marks: 1 },
      { step: 'Shows $Z = 3t$ along $(t, 0)$ is unbounded and concludes there is no maximum', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c07', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'The feasible region of an LPP is the quadrilateral (with its interior) with vertices $A(2, 0)$, $B(6, 0)$, $C(4, 4)$ and $D(0, 2)$. Write the inequalities that describe this region and hence find the maximum and minimum values of $Z = 3x - y$.',
    answer: 'Side $AB$ lies on the $x$-axis and the region is above it: $y \\ge 0$. Side $BC$ passes through $(6, 0)$ and $(4, 4)$ with slope $-2$: $y = -2(x - 6)$, that is, $2x + y = 12$; the vertex $A$ gives $4 < 12$, so $2x + y \\le 12$. Side $CD$ passes through $(4, 4)$ and $(0, 2)$ with slope $\\frac{1}{2}$: $y = \\frac{x}{2} + 2$, that is, $x - 2y = -4$; the vertex $A$ gives $2 > -4$, so $x - 2y \\ge -4$. Side $DA$ passes through $(0, 2)$ and $(2, 0)$: $x + y = 2$; the vertex $B$ gives $6 > 2$, so $x + y \\ge 2$. The region is $y \\ge 0$, $2x + y \\le 12$, $x - 2y \\ge -4$, $x + y \\ge 2$ (these also force $x \\ge 0$). Values of $Z = 3x - y$: $A \\to 6$, $B \\to 18$, $C \\to 8$, $D \\to -2$. Maximum value $18$ at $B(6, 0)$; minimum value $-2$ at $D(0, 2)$.',
    steps: [
      { step: 'Finds the lines $BC$: $2x + y = 12$ and $CD$: $x - 2y = -4$ with the correct inequality signs', marks: 1 },
      { step: 'Finds the line $DA$: $x + y = 2$ with sign $\\ge$ and states all constraints including $y \\ge 0$', marks: 1 },
      { step: 'Evaluates $Z$ at the vertices and states maximum $18$ at $(6, 0)$ and minimum $-2$ at $(0, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c08', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'A school must carry at least 300 students on a trip using big buses of 50 seats and mini buses of 30 seats. It can hire at most 8 big buses and at most 12 mini buses. A big bus costs Rs 4000 and a mini bus costs Rs 2500 for the trip. Formulate this as an LPP and solve it graphically to find the number of buses of each type that minimises the cost.',
    answer: 'Let $x$ big buses and $y$ mini buses be hired. Minimise $Z = 4000x + 2500y$ subject to $50x + 30y \\ge 300$, that is, $5x + 3y \\ge 30$; $x \\le 8$; $y \\le 12$; $x \\ge 0$, $y \\ge 0$. The line $5x + 3y = 30$ passes through $(6, 0)$ and $(0, 10)$, and the region lies away from the origin, with $x \\le 8$ and $y \\le 12$. It is bounded with corner points $(6, 0)$, $(8, 0)$, $(8, 12)$, $(0, 12)$, $(0, 10)$. Values of $Z$: $24000$, $32000$, $62000$, $30000$, $25000$. The minimum cost is Rs 24000, by hiring 6 big buses and no mini bus.',
    steps: [
      { step: 'Writes $Z = 4000x + 2500y$ and the constraints $5x + 3y \\ge 30$, $x \\le 8$, $y \\le 12$, $x, y \\ge 0$', marks: 1 },
      { step: 'Finds the corner points $(6, 0)$, $(8, 0)$, $(8, 12)$, $(0, 12)$, $(0, 10)$', marks: 1 },
      { step: 'States minimum cost Rs 24000 with 6 big buses and no mini bus', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c09', chapter: C, topic: GRAPH, type: 'short', complexity: 'hard', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 5x + 4y$ subject to $x + y \\le 6$, $2x + y \\le 10$, $x + 2y \\le 15$, $x \\ge 0$, $y \\ge 0$. Which constraint does not affect the feasible region?',
    answer: 'The lines are $x + y = 6$ (through $(6, 0)$ and $(0, 6)$), $2x + y = 10$ (through $(5, 0)$ and $(0, 10)$) and $x + 2y = 15$ (through $(15, 0)$ and $(0, 7.5)$). The origin satisfies all three inequalities. The first two lines meet where subtracting gives $x = 4$, $y = 2$. The region is bounded with corner points $(0, 0)$, $(5, 0)$, $(4, 2)$, $(0, 6)$. At these corners $x + 2y$ takes the values $0$, $5$, $8$, $12$, all less than $15$, so every point of the region satisfies $x + 2y \\le 15$ and the constraint $x + 2y \\le 15$ does not affect the region. Values of $Z$: $0$, $25$, $28$, $24$. The maximum value of $Z$ is $28$, at $x = 4$, $y = 2$.',
    steps: [
      { step: 'Finds the corner points $(0, 0)$, $(5, 0)$, $(4, 2)$, $(0, 6)$', marks: 1 },
      { step: 'Shows $x + 2y \\le 12 < 15$ at all corners, so $x + 2y \\le 15$ is redundant', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $28$ at $(4, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c10', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find graphically the maximum and minimum values of $Z = 5x - 2y$ subject to $x \\le 8$, $y - x \\le 4$, $x + 2y \\le 14$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The lines are $x = 8$; $y = x + 4$ (through $(0, 4)$ and $(2, 6)$); and $x + 2y = 14$ (through $(14, 0)$ and $(0, 7)$). The origin satisfies all three inequalities, so the region is on the origin side of each line in the first quadrant; it is bounded. The lines $y = x + 4$ and $x + 2y = 14$ meet where $3y = 18$, at $(2, 6)$; the line $x = 8$ meets $x + 2y = 14$ at $(8, 3)$ and $y = 0$ at $(8, 0)$; $y = x + 4$ meets the $y$-axis at $(0, 4)$. Corner points: $(0, 0)$, $(8, 0)$, $(8, 3)$, $(2, 6)$, $(0, 4)$. Values of $Z$: $0$, $40$, $34$, $-2$, $-8$. Maximum value $40$ at $(8, 0)$; minimum value $-8$ at $(0, 4)$.',
    steps: [
      { step: 'Draws the lines and identifies the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(8, 0)$, $(8, 3)$, $(2, 6)$, $(0, 4)$', marks: 1 },
      { step: 'States maximum $40$ at $(8, 0)$ and minimum $-8$ at $(0, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c11', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 3,
    text: 'A club hires small boats of 4 seats and big boats of 6 seats for an outing of at least 56 people. The club must hire at least 2 small boats, and the rental firm has at most 10 big boats. A small boat costs Rs 300 and a big boat costs Rs 400. Formulate an LPP to minimise the hiring cost and solve it graphically.',
    answer: 'Let $x$ small boats and $y$ big boats be hired. Minimise $Z = 300x + 400y$ subject to $4x + 6y \\ge 56$, that is, $2x + 3y \\ge 28$; $x \\ge 2$; $y \\le 10$; $y \\ge 0$. The line $2x + 3y = 28$ passes through $(14, 0)$ and $\\left(0, \\frac{28}{3}\\right)$; it meets $x = 2$ at $(2, 8)$. The region lies away from the origin for the first constraint, to the right of $x = 2$ and below $y = 10$; it is unbounded (it extends to the right). Corner points: $(2, 10)$, $(2, 8)$, $(14, 0)$. Values of $Z$: $4600$, $3800$, $4200$. The smallest is $3800$. The open half-plane $300x + 400y < 3800$, that is, $3x + 4y < 38$, has no point in common with the region (since $3x + 4y = \\frac{4}{3}(2x + 3y) + \\frac{1}{3}x \\ge \\frac{4}{3}(28) + \\frac{2}{3} = 38$). Hence the minimum cost is Rs 3800, by hiring 2 small boats and 8 big boats.',
    steps: [
      { step: 'Writes $Z = 300x + 400y$ and the constraints $2x + 3y \\ge 28$, $x \\ge 2$, $y \\le 10$, $y \\ge 0$', marks: 1 },
      { step: 'Finds the unbounded region with corner points $(2, 10)$, $(2, 8)$, $(14, 0)$', marks: 1 },
      { step: 'Uses the half-plane test and states minimum cost Rs 3800 with 2 small and 8 big boats', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-c12', chapter: C, topic: FORM, type: 'short', complexity: 'hard', marks: 3,
    text: 'A painter mixes paint from two stocks. Stock A is 30% pigment and costs Rs 40 per litre; stock B is 10% pigment and costs Rs 25 per litre. The mixture must be at least 60 litres in all, must contain at least 20% pigment, and can use at most 50 litres of stock A. Formulate this as an LPP and solve it graphically to find how much of each stock should be used for the minimum cost.',
    answer: 'Let $x$ litres of A and $y$ litres of B be used. Minimise $Z = 40x + 25y$. Constraints: $x + y \\ge 60$; pigment at least 20% of the mixture: $0.3x + 0.1y \\ge 0.2(x + y)$, which simplifies to $0.1x \\ge 0.1y$, that is, $x \\ge y$; $x \\le 50$; $y \\ge 0$. The lines $x + y = 60$ and $x = y$ meet at $(30, 30)$; $x = 50$ meets $x + y = 60$ at $(50, 10)$ and meets $x = y$ at $(50, 50)$. The region is the bounded triangle with these corners. Values of $Z$: $1200 + 750 = 1950$; $2000 + 250 = 2250$; $2000 + 1250 = 3250$. The minimum cost is Rs 1950, using 30 litres of each stock.',
    steps: [
      { step: 'Writes $Z = 40x + 25y$ and the constraint $x + y \\ge 60$ and $x \\le 50$', marks: 1 },
      { step: 'Derives the pigment constraint $x \\ge y$ from $0.3x + 0.1y \\ge 0.2(x + y)$ and finds corners $(30, 30)$, $(50, 10)$, $(50, 50)$', marks: 1 },
      { step: 'Evaluates $Z$ and states minimum cost Rs 1950 with 30 litres of each stock', marks: 1 },
    ],
  },

  // ───────────── Section D (5 marks) ─────────────
  {
    id: 'c12-lpp-r3-d01', chapter: C, topic: GRAPH, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 5x + 3y$ subject to $3x + y \\ge 6$, $x + 2y \\le 16$, $2x + y \\le 20$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $3x + y = 6$ through $(2, 0)$ and $(0, 6)$; $x + 2y = 16$ through $(16, 0)$ and $(0, 8)$; $2x + y = 20$ through $(10, 0)$ and $(0, 20)$. The origin fails $3x + y \\ge 6$ but satisfies the other two, so the region lies away from the origin for the first line and on the origin side of the other two, in the first quadrant; it is bounded. Intersection of $x + 2y = 16$ and $2x + y = 20$: $x = 16 - 2y$, so $32 - 4y + y = 20$, giving $y = 4$, $x = 8$. Corner points: $(2, 0)$, $(10, 0)$, $(8, 4)$, $(0, 8)$, $(0, 6)$. Values of $Z$: $10$, $50$, $52$, $24$, $18$. Maximum value $52$ at $(8, 4)$; minimum value $10$ at $(2, 0)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the intersection $(8, 4)$ and all five corner points', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $52$ at $(8, 4)$ and minimum $10$ at $(2, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d02', chapter: C, topic: GRAPH, type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 4x - 3y$ subject to $y - x \\le 2$, $x + y \\le 12$, $3x + y \\ge 6$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $y = x + 2$ through $(0, 2)$ and $(5, 7)$; $x + y = 12$ through $(12, 0)$ and $(0, 12)$; $3x + y = 6$ through $(2, 0)$ and $(0, 6)$. The origin satisfies $y - x \\le 2$ and $x + y \\le 12$ but not $3x + y \\ge 6$, so the region lies on or below $y = x + 2$, on the origin side of $x + y = 12$ and away from the origin for the third line. On the $y$-axis the conditions $y \\ge 6$ and $y \\le 2$ cannot both hold, so the region does not touch the $y$-axis; it is bounded. Intersections: $y = x + 2$ and $x + y = 12$ give $x = 5$, $y = 7$; $y = x + 2$ and $3x + y = 6$ give $4x = 4$, so $x = 1$, $y = 3$. Corner points: $(2, 0)$, $(12, 0)$, $(5, 7)$, $(1, 3)$. Values of $Z$: $8$, $48$, $20 - 21 = -1$, $4 - 9 = -5$. Maximum value $48$ at $(12, 0)$; minimum value $-5$ at $(1, 3)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Identifies the correct side of each line and shades the bounded region (not touching the $y$-axis)', marks: 1 },
      { step: 'Finds the corner points $(2, 0)$, $(12, 0)$, $(5, 7)$, $(1, 3)$', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $48$ at $(12, 0)$ and minimum $-5$ at $(1, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d03', chapter: C, topic: FORM, type: 'long', complexity: 'medium', marks: 5,
    text: 'A potter makes small and large pots. A small pot needs 2 kg of clay and 1 hour of painting; a large pot needs 3 kg of clay and 3 hours of painting. He has at most 60 kg of clay and 54 hours of painting each week, and the kiln can fire at most 24 pots a week. His profit is Rs 40 on a small pot and Rs 70 on a large pot. Formulate this as an LPP and solve it graphically to find how many pots of each kind he should make for maximum profit.',
    answer: 'Let $x$ small and $y$ large pots be made each week. Maximise $Z = 40x + 70y$ subject to $2x + 3y \\le 60$ (clay), $x + 3y \\le 54$ (painting), $x + y \\le 24$ (kiln), $x \\ge 0$, $y \\ge 0$. Lines: $2x + 3y = 60$ through $(30, 0)$ and $(0, 20)$; $x + 3y = 54$ through $(54, 0)$ and $(0, 18)$; $x + y = 24$ through $(24, 0)$ and $(0, 24)$. The region is bounded, on the origin side of all three lines. Intersections: $2x + 3y = 60$ and $x + y = 24$ give $y = 12$, $x = 12$; $2x + 3y = 60$ and $x + 3y = 54$ give $x = 6$, $y = 16$. Corner points: $(0, 0)$, $(24, 0)$, $(12, 12)$, $(6, 16)$, $(0, 18)$. Values of $Z$: $0$, $960$, $1320$, $1360$, $1260$. The maximum profit is Rs 1360, by making 6 small pots and 16 large pots a week.',
    steps: [
      { step: 'Defines the variables and writes the objective $Z = 40x + 70y$', marks: 1 },
      { step: 'Writes the constraints $2x + 3y \\le 60$, $x + 3y \\le 54$, $x + y \\le 24$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 0)$, $(24, 0)$, $(12, 12)$, $(6, 16)$, $(0, 18)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum profit Rs 1360 at 6 small and 16 large pots', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d04', chapter: C, topic: UNB, type: 'long', complexity: 'hard', marks: 5,
    text: 'A school must hire at least 12 teachers in all, with at least 6 senior teachers. The number of junior teachers cannot exceed twice the number of senior teachers. A senior teacher costs Rs 60,000 a month and a junior teacher costs Rs 40,000 a month in salary. Formulate this as an LPP to minimise the monthly salary bill and solve it graphically.',
    answer: 'Let $x$ senior and $y$ junior teachers be hired. Minimise $Z = 60000x + 40000y$ subject to $x + y \\ge 12$, $x \\ge 6$, $y \\le 2x$, $y \\ge 0$. Lines: $x + y = 12$ through $(12, 0)$ and $(0, 12)$; $x = 6$; $y = 2x$ through $(0, 0)$ and $(6, 12)$. The region lies away from the origin for $x + y \\ge 12$, to the right of $x = 6$, on or below $y = 2x$ and above the $x$-axis; it is unbounded (it extends to the right). Corner points: $x = 6$ meets $x + y = 12$ at $(6, 6)$; $x = 6$ meets $y = 2x$ at $(6, 12)$; $x + y = 12$ meets $y = 0$ at $(12, 0)$. Values of $Z$: $360000 + 240000 = 600000$; $360000 + 480000 = 840000$; $720000$. The smallest is $600000$. At every feasible point $3x + 2y = 2(x + y) + x \\ge 24 + 6 = 30$, so the open half-plane $60000x + 40000y < 600000$ has no point in common with the region. Hence the minimum salary bill is Rs 6,00,000, by hiring 6 senior and 6 junior teachers.',
    steps: [
      { step: 'Writes the objective $Z = 60000x + 40000y$ and the constraints $x + y \\ge 12$, $x \\ge 6$, $y \\le 2x$, $y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the unbounded feasible region', marks: 1 },
      { step: 'Finds corner points $(6, 6)$, $(6, 12)$, $(12, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corner points', marks: 1 },
      { step: 'Uses the half-plane test and states minimum Rs 6,00,000 with 6 senior and 6 junior teachers', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d05', chapter: C, topic: FORM, type: 'long', complexity: 'hard', marks: 5,
    text: 'A florist makes standard and premium bouquets. A standard bouquet uses 6 roses and 4 lilies; a premium bouquet uses 10 roses and 5 lilies. The florist has at most 300 roses and 160 lilies, and can make at most 36 bouquets in a day. The profit is Rs 150 on a standard bouquet and Rs 200 on a premium bouquet. Formulate this as an LPP and solve it graphically to find how many bouquets of each kind should be made for maximum profit.',
    answer: 'Let $x$ standard and $y$ premium bouquets be made. Maximise $Z = 150x + 200y$ subject to $6x + 10y \\le 300$, that is, $3x + 5y \\le 150$ (roses); $4x + 5y \\le 160$ (lilies); $x + y \\le 36$ (total); $x \\ge 0$, $y \\ge 0$. Lines: $3x + 5y = 150$ through $(50, 0)$ and $(0, 30)$; $4x + 5y = 160$ through $(40, 0)$ and $(0, 32)$; $x + y = 36$ through $(36, 0)$ and $(0, 36)$. The region is bounded, on the origin side of all three lines. Intersections: $4x + 5y = 160$ and $x + y = 36$ give $x = 20$, $y = 16$; $3x + 5y = 150$ and $4x + 5y = 160$ give $x = 10$, $y = 24$. Both points satisfy the remaining constraint. Corner points: $(0, 0)$, $(36, 0)$, $(20, 16)$, $(10, 24)$, $(0, 30)$. Values of $Z$: $0$, $5400$, $6200$, $6300$, $6000$. The maximum profit is Rs 6300, by making 10 standard and 24 premium bouquets.',
    steps: [
      { step: 'Defines the variables and writes the objective $Z = 150x + 200y$', marks: 1 },
      { step: 'Writes the constraints $3x + 5y \\le 150$, $4x + 5y \\le 160$, $x + y \\le 36$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 0)$, $(36, 0)$, $(20, 16)$, $(10, 24)$, $(0, 30)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum profit Rs 6300 at 10 standard and 24 premium bouquets', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d06', chapter: C, topic: UNB, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: minimise $Z = 3x + 4y$ subject to $3x + y \\ge 12$, $x + y \\ge 8$, $x + 3y \\ge 12$, $x \\ge 0$, $y \\ge 0$. Does $Z$ have a maximum value on the feasible region? Justify.',
    answer: 'Lines: $3x + y = 12$ through $(4, 0)$ and $(0, 12)$; $x + y = 8$ through $(8, 0)$ and $(0, 8)$; $x + 3y = 12$ through $(12, 0)$ and $(0, 4)$. The origin satisfies none of the inequalities, so the region lies away from the origin and is unbounded. Corners: $(0, 12)$; $3x + y = 12$ and $x + y = 8$ meet where $2x = 4$, at $(2, 6)$; $x + y = 8$ and $x + 3y = 12$ meet where $2y = 4$, at $(6, 2)$; $(12, 0)$. Values of $Z$: $48$, $30$, $26$, $36$. The smallest is $26$. Since $3x + 4y = \\frac{5}{2}(x + y) + \\frac{1}{2}(x + 3y) \\ge 20 + 6 = 26$ on the region, the open half-plane $3x + 4y < 26$ has no point in common with it, so the minimum value of $Z$ is $26$ at $(6, 2)$. $Z$ has no maximum: the points $(t, 0)$ with $t \\ge 12$ are feasible and give $Z = 3t$, which grows without limit.',
    steps: [
      { step: 'Draws the three lines and shades the unbounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 12)$, $(2, 6)$, $(6, 2)$, $(12, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corner points', marks: 1 },
      { step: 'Uses the half-plane $3x + 4y < 26$ to state minimum $26$ at $(6, 2)$', marks: 1 },
      { step: 'Justifies that $Z$ has no maximum since it grows without limit along $(t, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d07', chapter: C, topic: FORM, type: 'long', complexity: 'hard', marks: 5,
    text: 'A club must transport at least 240 people and at least 16 tonnes of luggage. A bus carries 40 people and 2 tonnes of luggage and costs Rs 9000 per trip; a van carries 12 people and 1 tonne of luggage and costs Rs 3000 per trip. At most 10 buses are available. Formulate this as an LPP and solve it graphically to find the numbers of buses and vans that minimise the cost.',
    answer: 'Let $x$ buses and $y$ vans be used. Minimise $Z = 9000x + 3000y$ subject to $40x + 12y \\ge 240$, that is, $10x + 3y \\ge 60$ (people); $2x + y \\ge 16$ (luggage); $x \\le 10$; $x \\ge 0$, $y \\ge 0$. Lines: $10x + 3y = 60$ through $(6, 0)$ and $(0, 20)$; $2x + y = 16$ through $(8, 0)$ and $(0, 16)$; $x = 10$. The region lies away from the origin for both $\\ge$ constraints and to the left of $x = 10$; it is unbounded (it extends upwards). The two lines meet where $y = 16 - 2x$ and $10x + 48 - 6x = 60$, giving $x = 3$, $y = 10$. Corner points: $(0, 20)$, $(3, 10)$, $(8, 0)$, $(10, 0)$. Values of $Z$: $60000$, $57000$, $72000$, $90000$. The smallest is $57000$. Since $3x + y = \\frac{1}{4}(10x + 3y) + \\frac{1}{4}(2x + y) \\ge 15 + 4 = 19$ on the region, the open half-plane $9000x + 3000y < 57000$ has no point in common with it. Hence the minimum cost is Rs 57,000, using 3 buses and 10 vans.',
    steps: [
      { step: 'Writes the objective $Z = 9000x + 3000y$ and the constraints $10x + 3y \\ge 60$, $2x + y \\ge 16$, $x \\le 10$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the unbounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 20)$, $(3, 10)$, $(8, 0)$, $(10, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corner points', marks: 1 },
      { step: 'Uses the half-plane test and states minimum cost Rs 57,000 with 3 buses and 10 vans', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r3-d08', chapter: C, topic: GRAPH, type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 7x - 2y$ subject to $x + y \\ge 6$, $x - y \\le 4$, $2x + y \\le 20$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $x + y = 6$ through $(6, 0)$ and $(0, 6)$; $x - y = 4$ through $(4, 0)$ and $(8, 4)$; $2x + y = 20$ through $(10, 0)$ and $(0, 20)$. The origin satisfies $x - y \\le 4$ and $2x + y \\le 20$ but not $x + y \\ge 6$, so the region lies away from the origin for the first line, on the origin side of $x - y = 4$ (that is, $y \\ge x - 4$) and on the origin side of $2x + y = 20$. On the $x$-axis the conditions $x \\ge 6$ and $x \\le 4$ cannot both hold, so the region does not touch the $x$-axis; it is bounded. Intersections: $x + y = 6$ and $x - y = 4$ give $(5, 1)$; $x - y = 4$ and $2x + y = 20$ give $3x = 24$, so $(8, 4)$. Corner points: $(0, 6)$, $(5, 1)$, $(8, 4)$, $(0, 20)$. Values of $Z$: $-12$, $33$, $48$, $-40$. Maximum value $48$ at $(8, 4)$; minimum value $-40$ at $(0, 20)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Identifies the correct side of each line and shades the bounded region (not touching the $x$-axis)', marks: 1 },
      { step: 'Finds the corner points $(0, 6)$, $(5, 1)$, $(8, 4)$, $(0, 20)$', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $48$ at $(8, 4)$ and minimum $-40$ at $(0, 20)$', marks: 1 },
    ],
  },

  // ───────────── Section E (4-mark case studies) ─────────────
  {
    id: 'c12-lpp-r3-e01', chapter: C, topic: FORM, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A dairy makes paneer and curd from milk. Each kg of paneer needs 5 litres of milk and 1 hour of labour; each kg of curd needs 2 litres of milk and 2 hours of labour. Each day the dairy has at most 100 litres of milk and 52 hours of labour. The profit is Rs 90 per kg of paneer and Rs 40 per kg of curd. The dairy makes $x$ kg of paneer and $y$ kg of curd a day.',
    answer: '(i) $5x + 2y \\le 100$, $x + 2y \\le 52$, $x, y \\ge 0$. (ii) $(0, 0)$, $(20, 0)$, $(12, 20)$, $(0, 26)$. (iii) Maximum profit Rs 1880 with 12 kg of paneer and 20 kg of curd. OR: maximum profit Rs 1040 with 26 kg of curd and no paneer.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem.',
        answer: 'Milk: $5x + 2y \\le 100$. Labour: $x + 2y \\le 52$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the corner points of the feasible region.',
        answer: 'The line $5x + 2y = 100$ meets the axes at $(20, 0)$ and $(0, 50)$; the line $x + 2y = 52$ meets them at $(52, 0)$ and $(0, 26)$. Subtracting the equations gives $4x = 48$, so $x = 12$, $y = 20$. The bounded feasible region has corner points $(0, 0)$, $(20, 0)$, $(12, 20)$ and $(0, 26)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the maximum daily profit and the quantities of paneer and curd that give it.\nOR\nIf the profit on paneer falls to Rs 10 per kg (curd unchanged at Rs 40 per kg), find the new maximum daily profit and the quantities that give it.',
        answer: '$Z = 90x + 40y$ at the corners: $0$, $1800$, $1080 + 800 = 1880$, $1040$. The maximum daily profit is Rs 1880, with 12 kg of paneer and 20 kg of curd.\nOR: With $Z = 10x + 40y$ the corner values are $0$, $200$, $120 + 800 = 920$ and $1040$. The maximum daily profit is Rs 1040, with 26 kg of curd and no paneer.',
      },
    ],
  },
  {
    id: 'c12-lpp-r3-e02', chapter: C, topic: UNB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A farm uses two pumps, P and Q, to fill an overhead tank and a field reservoir. In one hour, pump P delivers 3 kilolitres to the tank and 1 kilolitre to the reservoir, and pump Q delivers 2 kilolitres to the tank and 4 kilolitres to the reservoir. At least 16 kilolitres must reach the tank and at least 12 kilolitres the reservoir. Running P costs Rs 60 per hour and running Q costs Rs 50 per hour. Pump P runs for $x$ hours and pump Q for $y$ hours.',
    answer: '(i) $3x + 2y \\ge 16$, $x + 4y \\ge 12$, $x, y \\ge 0$. (ii) $(0, 8)$, $(4, 2)$, $(12, 0)$. (iii) Minimum cost Rs 340 with P for 4 hours and Q for 2 hours. OR: minimum cost Rs 160 with Q for 8 hours only.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem.',
        answer: 'Tank: $3x + 2y \\ge 16$. Reservoir: $x + 4y \\ge 12$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the corner points of the feasible region.',
        answer: 'The line $3x + 2y = 16$ meets the axes at $\\left(\\frac{16}{3}, 0\\right)$ and $(0, 8)$; the line $x + 4y = 12$ meets them at $(12, 0)$ and $(0, 3)$. From the second, $x = 12 - 4y$, so $36 - 12y + 2y = 16$, giving $y = 2$, $x = 4$. The feasible region (away from the origin) is unbounded with corner points $(0, 8)$, $(4, 2)$ and $(12, 0)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the minimum running cost and the hours for which each pump should run.\nOR\nIf the cost of running Q falls to Rs 20 per hour (P unchanged), find the new minimum cost and the running hours that give it.',
        answer: 'Cost $Z = 60x + 50y$. At $(0, 8)$: $400$; at $(4, 2)$: $240 + 100 = 340$; at $(12, 0)$: $720$. The open half-plane $60x + 50y < 340$ has no point in common with the unbounded region (indeed $60x + 50y = 19(3x + 2y) + 3(x + 4y) \\ge 304 + 36 = 340$), so the minimum cost is Rs 340, with pump P for 4 hours and pump Q for 2 hours.\nOR: Now $Z = 60x + 20y$. At $(0, 8)$: $160$; at $(4, 2)$: $240 + 40 = 280$; at $(12, 0)$: $720$. The half-plane $60x + 20y < 160$ has no point in common with the region, so the minimum cost is Rs 160, with pump Q for 8 hours and pump P not used.',
      },
    ],
  },
  {
    id: 'c12-lpp-r3-e03', chapter: C, topic: GRAPH, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A college plans its monthly timetable with $x$ lecture sessions and $y$ lab sessions. The feasible region of its LPP is the triangle (with its interior) with vertices $A(2, 1)$, $B(8, 1)$ and $C(5, 7)$. Side $AB$ comes from the rule that at least one lab session must be held, side $AC$ from a rule linking lectures and labs, and side $BC$ from the limited time in the lab block. The college scores each timetable by $Z = x + 2y$.',
    answer: '(i) $2x - y \\ge 3$. (ii) No, $(7, 4)$ breaks the constraint $2x + y \\le 17$ since $2(7) + 4 = 18$. (iii) Maximum score $19$ at $C(5, 7)$ and minimum score $4$ at $A(2, 1)$. OR: maximum score $16$ at $(6, 5)$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraint given by the side $AC$.',
        answer: '$AC$ passes through $(2, 1)$ and $(5, 7)$ with slope $\\frac{7 - 1}{5 - 2} = 2$, so $y - 1 = 2(x - 2)$, that is, $2x - y = 3$. The vertex $B(8, 1)$ gives $2(8) - 1 = 15 > 3$, so the constraint is $2x - y \\ge 3$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is the plan of 7 lecture sessions and 4 lab sessions feasible? Justify.',
        answer: 'Side $BC$ passes through $(8, 1)$ and $(5, 7)$ with slope $-2$, so $y - 1 = -2(x - 8)$, that is, $2x + y = 17$; the vertex $A$ gives $5 < 17$, so the constraint is $2x + y \\le 17$. For $(7, 4)$: $2(7) + 4 = 18 > 17$, so the plan is not feasible, even though $y \\ge 1$ and $2x - y = 10 \\ge 3$ hold.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the maximum and minimum values of $Z = x + 2y$ on this region and where they occur.\nOR\nIf the college adds the condition $y \\le 5$, find the new maximum value of $Z$ and where it occurs.',
        answer: 'At $A$: $2 + 2 = 4$; at $B$: $8 + 2 = 10$; at $C$: $5 + 14 = 19$. The region is bounded, so the maximum value is $19$ at $C(5, 7)$ and the minimum value is $4$ at $A(2, 1)$.\nOR: The line $y = 5$ meets $AC$ where $2x - 5 = 3$, at $(4, 5)$, and meets $BC$ where $2x + 5 = 17$, at $(6, 5)$. The new region has corners $A(2, 1)$, $B(8, 1)$, $(6, 5)$, $(4, 5)$. Values of $Z$: $4$, $10$, $16$, $14$. The new maximum value is $16$ at $(6, 5)$, that is, 6 lecture and 5 lab sessions.',
      },
    ],
  },
  {
    id: 'c12-lpp-r3-e04', chapter: C, topic: FORM, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery firm plans its daily fleet of $x$ trucks and $y$ vans. A truck carries 2 units of load and a van carries 1 unit, and at least 10 units must be moved every day. The parking yard holds at most 12 vehicles in all, and at most 8 vans are available. A truck costs Rs 1500 a day and a van costs Rs 800 a day.',
    answer: '(i) $2x + y \\ge 10$, $x + y \\le 12$, $y \\le 8$, $x, y \\ge 0$. (ii) No, 9 vans exceed the 8 available. (iii) Corners $(1, 8)$, $(4, 8)$, $(12, 0)$, $(5, 0)$; minimum cost Rs 7500 with 5 trucks and no van. OR: minimum cost Rs 5500 with 1 truck and 8 vans.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem.',
        answer: 'Load: $2x + y \\ge 10$. Parking: $x + y \\le 12$. Vans available: $y \\le 8$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is the plan of 2 trucks and 9 vans feasible? Justify.',
        answer: 'No. For $(2, 9)$: $2(2) + 9 = 13 \\ge 10$ and $2 + 9 = 11 \\le 12$ hold, but $y = 9 > 8$ breaks the limit on vans, so the plan is not feasible.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the corner points of the feasible region and the minimum daily cost with the plan that gives it.\nOR\nIf the cost of a van falls to Rs 500 a day (truck unchanged), find the new minimum daily cost and the plan that gives it.',
        answer: 'The line $2x + y = 10$ meets $y = 8$ at $(1, 8)$ and the $x$-axis at $(5, 0)$; the line $x + y = 12$ meets $y = 8$ at $(4, 8)$ and the $x$-axis at $(12, 0)$. The bounded region has corner points $(1, 8)$, $(4, 8)$, $(12, 0)$, $(5, 0)$. Cost $Z = 1500x + 800y$: $1500 + 6400 = 7900$, $6000 + 6400 = 12400$, $18000$, $7500$. The minimum cost is Rs 7500, with 5 trucks and no van.\nOR: With $Z = 1500x + 500y$ the corner values are $1500 + 4000 = 5500$, $6000 + 4000 = 10000$, $18000$, $7500$. The minimum cost is Rs 5500, with 1 truck and 8 vans.',
      },
    ],
  },
];
