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

export const CH12_LPP_R2: Class12Question[] = [
  // ───────────── Section A (1 mark) ─────────────
  {
    id: 'c12-lpp-r2-a01', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The objective function of a linear programming problem is always',
    options: ['a quadratic function of the decision variables', 'a linear function of the decision variables', 'a constant function', 'a function of degree 3'],
    answer: 'Correct option: B) a linear function of the decision variables. In an LPP the quantity to be optimised has the form $Z = ax + by$, which is of degree 1 in $x$ and $y$; that is why the problem is called linear.',
  },
  {
    id: 'c12-lpp-r2-a02', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A bakery bakes $x$ cakes and $y$ trays of cookies a day. A cake needs 30 minutes of oven time and a tray of cookies needs 10 minutes. The oven can be used for at most 8 hours a day. The oven-time constraint is',
    options: ['$30x + 10y \\le 8$', '$10x + 30y \\le 480$', '$30x + 10y \\le 480$', '$30x + 10y \\ge 480$'],
    answer: 'Correct option: C) $30x + 10y \\le 480$. The oven time used is $30x + 10y$ minutes and 8 hours is 480 minutes; "at most" gives $\\le$. Option A forgets to convert hours to minutes, B swaps the times and D reverses the inequality.',
  },
  {
    id: 'c12-lpp-r2-a03', chapter: C, topic: FORM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A factory makes $x$ units of product P and $y$ units of product Q. A contract requires that the number of units of P is at least twice the number of units of Q. This condition is written as',
    options: ['$2x \\ge y$', '$x \\ge 2y$', '$x \\le 2y$', '$y \\ge 2x$'],
    answer: 'Correct option: B) $x \\ge 2y$. "P is at least twice Q" means $x$ must be greater than or equal to $2y$. Option A doubles the wrong variable, C reverses the inequality and D says Q is at least twice P.',
  },
  {
    id: 'c12-lpp-r2-a04', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following points satisfies both the inequalities $x + y \\le 4$ and $2x - y \\ge 1$?',
    options: ['$(0, 0)$', '$(1, 2)$', '$(2, 1)$', '$(3, 2)$'],
    answer: 'Correct option: C) $(2, 1)$, since $2 + 1 = 3 \\le 4$ and $2(2) - 1 = 3 \\ge 1$. The points $(0, 0)$ and $(1, 2)$ give $2x - y = 0$, which is less than 1, and $(3, 2)$ gives $x + y = 5 > 4$.',
  },
  {
    id: 'c12-lpp-r2-a05', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'In a linear programming problem, the common region determined by all the constraints, including the non-negativity constraints, is called the',
    options: ['optimal solution', 'objective region', 'feasible region', 'infeasible region'],
    answer: 'Correct option: C) feasible region. Every point of this common region satisfies all the constraints, so it is a feasible solution. The optimal solution is only the feasible point (or points) giving the best value of $Z$, and points outside the region form the infeasible region.',
  },
  {
    id: 'c12-lpp-r2-a06', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The corner points of the bounded feasible region of an LPP are $(0, 0)$, $(4, 0)$, $(4, 1)$, $(2, 3)$ and $(0, 3)$. The maximum value of $Z = x + 2y$ is',
    options: ['$6$', '$8$', '$9$', '$10$'],
    answer: 'Correct option: B) $8$. The values of $Z$ at the corners are $0$, $4$, $6$, $8$ and $6$, so the maximum is $8$ at $(2, 3)$. The value $6$ comes from stopping at $(4, 1)$ or $(0, 3)$, and $9$ and $10$ are not attained at any corner.',
  },
  {
    id: 'c12-lpp-r2-a07', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The corner points of the bounded feasible region of an LPP are $(0, 0)$, $(5, 0)$, $(5, 3)$, $(2, 6)$ and $(0, 6)$. For $Z = 2x - 3y$, which statement is true?',
    options: [
      'Maximum at $(5, 3)$ and minimum at $(0, 0)$',
      'Maximum at $(5, 0)$ and minimum at $(2, 6)$',
      'Maximum at $(5, 0)$ and minimum at $(0, 6)$',
      'Maximum at $(2, 6)$ and minimum at $(0, 6)$',
    ],
    answer: 'Correct option: C) Maximum at $(5, 0)$ and minimum at $(0, 6)$. The values of $Z$ are $0$, $10$, $1$, $-14$ and $-18$, so the maximum is $10$ at $(5, 0)$ and the minimum is $-18$ at $(0, 6)$. Option B picks $(2, 6)$, which gives $-14$, not the least value.',
  },
  {
    id: 'c12-lpp-r2-a08', chapter: C, topic: UNB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The unbounded feasible region of an LPP has corner points $(0, 7)$, $(2, 4)$, $(6, 1)$ and $(10, 0)$. The objective function $Z = px + qy$ (with $p, q > 0$) has its minimum value at both $(2, 4)$ and $(6, 1)$. Then',
    options: ['$4p = 3q$', '$3p = 4q$', '$p = q$', '$2p = 3q$'],
    answer: 'Correct option: A) $4p = 3q$. Equal values at the two corners give $2p + 4q = 6p + q$, so $3q = 4p$. Option B comes from moving the terms to the wrong sides.',
  },
  {
    id: 'c12-lpp-r2-a09', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The feasible region of an LPP is non-empty and bounded. The number of feasible solutions of the problem is',
    options: ['$0$', '$1$', 'equal to the number of corner points', 'infinitely many'],
    answer: 'Correct option: D) infinitely many. Every point of the feasible region (on its boundary or inside it) is a feasible solution, and a non-empty region of the plane like this contains infinitely many points. Option C confuses feasible solutions with corner points.',
  },
  {
    id: 'c12-lpp-r2-a10', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of corner points of the feasible region determined by $x + y \\le 6$, $x \\le 4$, $y \\le 5$, $x \\ge 0$, $y \\ge 0$ is',
    options: ['$3$', '$4$', '$5$', '$6$'],
    answer: 'Correct option: C) $5$. The corner points are $(0, 0)$, $(4, 0)$, $(4, 2)$ (where $x = 4$ meets $x + y = 6$), $(1, 5)$ (where $y = 5$ meets $x + y = 6$) and $(0, 5)$.',
  },
  {
    id: 'c12-lpp-r2-a11', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The objective function $Z = ax + by$ of an LPP takes the value $8$ at the corner point $(2, 1)$ and the value $9$ at the corner point $(1, 3)$. Then',
    options: ['$a = 2$, $b = 3$', '$a = 3$, $b = 2$', '$a = 4$, $b = 0$', '$a = 1$, $b = 6$'],
    answer: 'Correct option: B) $a = 3$, $b = 2$. The conditions are $2a + b = 8$ and $a + 3b = 9$. From the first, $b = 8 - 2a$, so $a + 24 - 6a = 9$, giving $a = 3$ and $b = 2$. Each of the other pairs fails at least one of the two conditions.',
  },
  {
    id: 'c12-lpp-r2-a12', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The solution set of the inequality $2x + 3y < 6$ is',
    options: [
      'the half-plane containing the origin, including the line $2x + 3y = 6$',
      'the open half-plane containing the origin, not including the line $2x + 3y = 6$',
      'the open half-plane not containing the origin',
      'the points of the line $2x + 3y = 6$ only',
    ],
    answer: 'Correct option: B) the open half-plane containing the origin, excluding the line. The origin gives $0 < 6$, so it lies in the solution set, and because the inequality is strict, points on the line $2x + 3y = 6$ are not included (the line is drawn dotted).',
  },
  {
    id: 'c12-lpp-r2-a13', chapter: C, topic: UNB, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following statements about an LPP whose feasible region is unbounded is correct?',
    options: [
      'The objective function always has both a maximum and a minimum value',
      'The objective function may not have a maximum or a minimum value, but if an optimal value exists it occurs at a corner point',
      'The feasible region has infinitely many corner points',
      'The objective function can never have an optimal value',
    ],
    answer: 'Correct option: B) $Z$ may not have a maximum or a minimum, but any optimal value occurs at a corner point. On an unbounded region an optimal value may fail to exist, so it has to be checked with the half-plane test; when it does exist, it occurs at a corner point. Option A is true only for bounded regions, an unbounded region still has finitely many corners, and D is false because a minimum (or maximum) often does exist.',
  },
  {
    id: 'c12-lpp-r2-a14', chapter: C, topic: UNB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The feasible region given by $x + y \\ge 4$, $x + 3y \\ge 6$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 4)$, $(3, 1)$ and $(6, 0)$. The minimum value of $Z = 3x + 2y$ on this region is',
    options: ['$8$', '$11$', '$18$', 'it does not exist'],
    answer: 'Correct option: A) $8$. The corner values are $8$, $11$ and $18$. The open half-plane $3x + 2y < 8$ has no point in common with the region, so the minimum is $8$ at $(0, 4)$. Option B wrongly assumes the minimum is at the point where the two lines meet.',
  },
  {
    id: 'c12-lpp-r2-a15', chapter: C, topic: UNB, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The feasible region given by $x + 2y \\ge 4$, $x \\le 6$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 2)$, $(4, 0)$ and $(6, 0)$. For $Z = 3x - y$, which statement is correct?',
    options: [
      'Maximum is $18$ at $(6, 0)$ and there is no minimum',
      'Maximum is $18$ at $(6, 0)$ and minimum is $-2$ at $(0, 2)$',
      'Minimum is $-2$ at $(0, 2)$ and there is no maximum',
      '$Z$ has neither a maximum nor a minimum',
    ],
    answer: 'Correct option: A) maximum $18$ at $(6, 0)$ and no minimum. The corner values are $-2$, $12$ and $18$. The half-plane $3x - y > 18$ needs $y < 3x - 18 \\le 0$ for $x \\le 6$, so it has no point in the region, and $18$ is the maximum. But $3x - y < -2$ meets the region (for example at $(0, 10)$, where $Z = -10$), and $Z$ decreases without limit as $y$ increases, so there is no minimum. Option B treats the region as bounded.',
  },
  {
    id: 'c12-lpp-r2-a16', chapter: C, topic: FORM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A trader buys $x$ units of item A at Rs 20 each and $y$ units of item B at Rs 30 each. He can spend at most Rs 1500 and wants at least 10 units of item B. Which set of constraints describes the situation?',
    options: [
      '$20x + 30y \\le 1500$, $y \\ge 10$, $x \\ge 0$',
      '$20x + 30y \\ge 1500$, $y \\ge 10$, $x \\ge 0$',
      '$30x + 20y \\le 1500$, $y \\ge 10$, $x \\ge 0$',
      '$20x + 30y \\le 1500$, $x \\ge 10$, $y \\ge 0$',
    ],
    answer: 'Correct option: A) $20x + 30y \\le 1500$, $y \\ge 10$, $x \\ge 0$. The amount spent is $20x + 30y$, which must be at most 1500, and "at least 10 units of B" gives $y \\ge 10$; $x \\ge 0$ since he cannot buy a negative number. Option B reverses the budget inequality, C swaps the prices and D puts the lower bound on the wrong item.',
  },
  {
    id: 'c12-lpp-r2-a17', chapter: C, topic: GRAPH, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Consider the LPP: maximise $Z = x + y$ subject to $x + y \\le 5$, $x \\ge 0$, $y \\ge 0$.\nAssertion (A): Every point of the segment joining $(5, 0)$ and $(0, 5)$ is an optimal solution of this LPP.\nReason (R): The optimal value of the objective function of an LPP is attained only at the corner points of the feasible region.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true but R is false. The corners $(0, 0)$, $(5, 0)$, $(0, 5)$ give $Z = 0$, $5$, $5$, and every point of the segment joining $(5, 0)$ and $(0, 5)$ lies on $x + y = 5$, so it gives the maximum $5$; A is true. R is false: the optimum always occurs at some corner point, but it can also occur at other points, as this very example shows.',
  },
  {
    id: 'c12-lpp-r2-a18', chapter: C, topic: UNB, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'The feasible region of an LPP is given by $x + y \\ge 4$, $x \\ge 0$, $y \\ge 0$.\nAssertion (A): $Z = x - y$ has no maximum value on this region.\nReason (R): The feasible region is unbounded.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both A and R are true but R is not the correct explanation of A. Along the $x$-axis, the points $(x, 0)$ with $x \\ge 4$ are feasible and give $Z = x$, which grows without limit, so A is true. R is also true, but an unbounded region alone does not rule out a maximum (for example, $Z = -x - y$ has maximum $-4$ on this region); A holds because the half-plane $x - y > 4$ meets the region.',
  },

  // ───────────── Section B (2 marks) ─────────────
  {
    id: 'c12-lpp-r2-b01', chapter: C, topic: GRAPH, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the corner points of the feasible region determined by $x + y \\ge 2$, $x + y \\le 6$, $x \\le 4$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The region lies between the parallel lines $x + y = 2$ and $x + y = 6$, to the left of $x = 4$ and in the first quadrant; it is bounded. The line $x + y = 2$ meets the axes at $(2, 0)$ and $(0, 2)$. The line $x = 4$ meets the $x$-axis at $(4, 0)$ and meets $x + y = 6$ at $(4, 2)$. The line $x + y = 6$ meets the $y$-axis at $(0, 6)$. The corner points are $(2, 0)$, $(4, 0)$, $(4, 2)$, $(0, 6)$ and $(0, 2)$.',
    steps: [
      { step: 'Identifies the region between $x + y = 2$ and $x + y = 6$, left of $x = 4$, in the first quadrant', marks: 1 },
      { step: 'Lists the corner points $(2, 0)$, $(4, 0)$, $(4, 2)$, $(0, 6)$, $(0, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-b02', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 2,
    text: 'The feasible region of an LPP is given by $x + y \\ge 5$, $x \\ge 1$, $y \\ge 2$. Find its corner points and the minimum value of $Z = 3x + 2y$.',
    answer: 'The line $x = 1$ meets $x + y = 5$ at $(1, 4)$, and the line $y = 2$ meets $x + y = 5$ at $(3, 2)$. The region lies on the side of $x + y = 5$ away from the origin, right of $x = 1$ and above $y = 2$, so it is unbounded with corner points $(1, 4)$ and $(3, 2)$. Values: $Z(1, 4) = 3 + 8 = 11$ and $Z(3, 2) = 9 + 4 = 13$. The open half-plane $3x + 2y < 11$ has no point in common with the region (every feasible point has $3x + 2y = 2(x + y) + x \\ge 10 + 1 = 11$), so the minimum value is $11$, at $(1, 4)$.',
    steps: [
      { step: 'Finds the corner points $(1, 4)$ and $(3, 2)$ of the unbounded region', marks: 1 },
      { step: 'Evaluates $Z$, uses the half-plane $3x + 2y < 11$ and states minimum $11$ at $(1, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-b03', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 2,
    text: 'A student has at most 10 hours a week for revising Mathematics and Physics. She wants to spend at least 4 hours on Mathematics, and not more hours on Physics than on Mathematics. She expects to gain 2 marks for every hour of Mathematics and 3 marks for every hour of Physics. Formulate this as a linear programming problem to maximise her expected gain in marks.',
    answer: 'Let $x$ be the number of hours spent on Mathematics and $y$ the number of hours on Physics in a week. Expected gain: maximise $Z = 2x + 3y$. Constraints: total time $x + y \\le 10$; at least 4 hours of Mathematics, $x \\ge 4$; Physics hours not more than Mathematics hours, $y \\le x$; and $y \\ge 0$ (also $x \\ge 0$, which follows from $x \\ge 4$).',
    steps: [
      { step: 'Defines $x$, $y$ and writes the objective $Z = 2x + 3y$ to be maximised', marks: 1 },
      { step: 'Writes the constraints $x + y \\le 10$, $x \\ge 4$, $y \\le x$, $y \\ge 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-b04', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 2,
    text: 'Find the corner points of the feasible region determined by $x + 2y \\le 10$, $x - y \\le 1$, $x \\ge 0$, $y \\ge 0$, and hence find the maximum value of $Z = 2x + y$.',
    answer: 'The line $x - y = 1$ meets the $x$-axis at $(1, 0)$; the line $x + 2y = 10$ meets the $y$-axis at $(0, 5)$. Solving $x - y = 1$ and $x + 2y = 10$: subtracting gives $3y = 9$, so $y = 3$ and $x = 4$. The origin satisfies both inequalities, so the region is bounded with corner points $(0, 0)$, $(1, 0)$, $(4, 3)$ and $(0, 5)$. Values of $Z$: $0$, $2$, $11$, $5$. The maximum value of $Z$ is $11$, at $(4, 3)$.',
    steps: [
      { step: 'Finds the intersection $(4, 3)$ and the corner points $(0, 0)$, $(1, 0)$, $(4, 3)$, $(0, 5)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $11$ at $(4, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-b05', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 2,
    text: 'The feasible region determined by $2x + y \\ge 5$, $x + 3y \\ge 5$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 5)$, $(2, 1)$ and $(5, 0)$. Find the minimum value of $Z = x + 3y$ and state all the points at which it occurs.',
    answer: 'Values: $Z(0, 5) = 15$, $Z(2, 1) = 2 + 3 = 5$, $Z(5, 0) = 5$. The smallest corner value is $5$, at both $(2, 1)$ and $(5, 0)$. Every point of the region satisfies $x + 3y \\ge 5$, so the open half-plane $x + 3y < 5$ has no point in common with the region, and the minimum value is $5$. The segment joining $(2, 1)$ and $(5, 0)$ is part of the line $x + 3y = 5$ and lies on the boundary of the region, so $Z = 5$ at every point of this segment: the minimum occurs at infinitely many points.',
    steps: [
      { step: 'Evaluates $Z$ at the corners and justifies minimum $5$ using the half-plane $x + 3y < 5$', marks: 1 },
      { step: 'States that the minimum occurs at every point of the segment joining $(2, 1)$ and $(5, 0)$', marks: 1 },
    ],
  },

  // ───────────── Section C (3 marks) ─────────────
  {
    id: 'c12-lpp-r2-c01', chapter: C, topic: GRAPH, type: 'short', complexity: 'easy', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 3x + 5y$ subject to $x + 3y \\le 15$, $x + y \\le 7$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $x + 3y = 15$ passes through $(15, 0)$ and $(0, 5)$; the line $x + y = 7$ passes through $(7, 0)$ and $(0, 7)$. The origin satisfies both inequalities, so the feasible region is the bounded region on the origin side of both lines in the first quadrant. Subtracting the equations gives $2y = 8$, so $y = 4$, $x = 3$. Corner points: $(0, 0)$, $(7, 0)$, $(3, 4)$, $(0, 5)$. Values of $Z$: $0$, $21$, $29$, $25$. The maximum value of $Z$ is $29$, at $x = 3$, $y = 4$.',
    steps: [
      { step: 'Draws both lines and identifies the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(7, 0)$, $(3, 4)$, $(0, 5)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $29$ at $(3, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c02', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 2x + 5y$ subject to $x + 3y \\le 21$, $2x + y \\le 16$, $x + y \\le 9$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $x + 3y = 21$ through $(21, 0)$ and $(0, 7)$; $2x + y = 16$ through $(8, 0)$ and $(0, 16)$; $x + y = 9$ through $(9, 0)$ and $(0, 9)$. The feasible region is bounded, on the origin side of all three lines. Intersections: $2x + y = 16$ and $x + y = 9$ give $x = 7$, $y = 2$; $x + y = 9$ and $x + 3y = 21$ give $2y = 12$, so $y = 6$, $x = 3$. Both points satisfy the third constraint. Corner points: $(0, 0)$, $(8, 0)$, $(7, 2)$, $(3, 6)$, $(0, 7)$. Values of $Z$: $0$, $16$, $24$, $36$, $35$. The maximum value of $Z$ is $36$, at $x = 3$, $y = 6$.',
    steps: [
      { step: 'Draws the three lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(8, 0)$, $(7, 2)$, $(3, 6)$, $(0, 7)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $36$ at $(3, 6)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c03', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find graphically the maximum and minimum values of $Z = x - 3y$ subject to $x + y \\ge 2$, $x \\le 4$, $y \\le 3$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Draw $x + y = 2$, $x = 4$ and $y = 3$. The region lies on the side of $x + y = 2$ away from the origin, left of $x = 4$, below $y = 3$ and in the first quadrant; it is bounded (a rectangle with one corner cut off). Corner points: $(2, 0)$, $(4, 0)$, $(4, 3)$, $(0, 3)$, $(0, 2)$. Values of $Z$: $2$, $4$, $4 - 9 = -5$, $-9$, $-6$. Maximum value $4$ at $(4, 0)$; minimum value $-9$ at $(0, 3)$.',
    steps: [
      { step: 'Draws the lines and identifies the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(2, 0)$, $(4, 0)$, $(4, 3)$, $(0, 3)$, $(0, 2)$', marks: 1 },
      { step: 'States maximum $4$ at $(4, 0)$ and minimum $-9$ at $(0, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c04', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find graphically the maximum and minimum values of $Z = 2x + y$ subject to $x + y \\le 9$, $y \\le 2x$, $x \\le 2y$.',
    answer: 'The lines $y = 2x$ and $x = 2y$ both pass through the origin; $y = 2x$ also passes through $(3, 6)$ and $x = 2y$ through $(6, 3)$. The region $y \\le 2x$, $x \\le 2y$ is the wedge between these two lines in the first quadrant (for example $(1, 1)$ satisfies both), and $x + y \\le 9$ cuts it off. Corners: the origin $(0, 0)$; $y = 2x$ meets $x + y = 9$ where $3x = 9$, at $(3, 6)$; $x = 2y$ meets $x + y = 9$ where $3y = 9$, at $(6, 3)$. The region is the triangle with these vertices. Values of $Z$: $0$, $12$, $15$. Maximum value $15$ at $(6, 3)$; minimum value $0$ at $(0, 0)$.',
    steps: [
      { step: 'Identifies the triangular region between $y = 2x$ and $x = 2y$ below $x + y = 9$', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(3, 6)$, $(6, 3)$', marks: 1 },
      { step: 'States maximum $15$ at $(6, 3)$ and minimum $0$ at $(0, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c05', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'The corner points of the bounded feasible region of an LPP are $O(0, 0)$, $A(6, 0)$, $B(5, 3)$, $C(2, 5)$ and $D(0, 4)$.\n(a) Find the maximum and minimum values of $Z = 4x - 5y$.\n(b) If $Z = px + qy$ with $p, q > 0$, find the relation between $p$ and $q$ for which the maximum of $Z$ occurs at both $B$ and $C$.',
    answer: '(a) $Z = 4x - 5y$ at the corners: $O \\to 0$, $A \\to 24$, $B \\to 20 - 15 = 5$, $C \\to 8 - 25 = -17$, $D \\to -20$. Since the region is bounded, the maximum value is $24$ at $A(6, 0)$ and the minimum value is $-20$ at $D(0, 4)$.\n(b) $Z(B) = Z(C)$ gives $5p + 3q = 2p + 5q$, so $3p = 2q$. (Check: with $p = 2$, $q = 3$ the corner values are $0$, $12$, $19$, $19$, $12$, so the common value at $B$ and $C$ is indeed the maximum.)',
    steps: [
      { step: 'Evaluates $4x - 5y$ at all five corners', marks: 1 },
      { step: 'States maximum $24$ at $(6, 0)$ and minimum $-20$ at $(0, 4)$', marks: 1 },
      { step: 'Equates $Z(B)$ and $Z(C)$ to get $3p = 2q$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c06', chapter: C, topic: GRAPH, type: 'short', complexity: 'hard', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 3x + 4y$ subject to $x - y \\le 2$, $x + y \\le 10$, $-x + 2y \\le 8$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $x - y = 2$ through $(2, 0)$ and $(6, 4)$; $x + y = 10$ through $(10, 0)$ and $(0, 10)$; $-x + 2y = 8$ through $(0, 4)$ and $(4, 6)$. The origin satisfies all three inequalities, so the feasible region is on the origin side of each line in the first quadrant; it is bounded. Intersections: $x - y = 2$ and $x + y = 10$ give $(6, 4)$; $x + y = 10$ and $-x + 2y = 8$ give $3y = 18$, so $(4, 6)$. Corner points: $(0, 0)$, $(2, 0)$, $(6, 4)$, $(4, 6)$, $(0, 4)$. Values of $Z$: $0$, $6$, $34$, $36$, $16$. The maximum value of $Z$ is $36$, at $x = 4$, $y = 6$.',
    steps: [
      { step: 'Draws the three lines and shades the correct bounded region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(2, 0)$, $(6, 4)$, $(4, 6)$, $(0, 4)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $36$ at $(4, 6)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c07', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'The feasible region of an LPP is the triangle (with its interior) whose vertices are $A(1, 2)$, $B(5, 2)$ and $C(3, 6)$. Write the linear inequalities that describe this region, and hence find the maximum and minimum values of $Z = x + y$.',
    answer: 'Side $AB$ is the line $y = 2$, and the region lies above it: $y \\ge 2$. Side $AC$ passes through $(1, 2)$ and $(3, 6)$ with slope $2$: $y = 2x$; the vertex $B(5, 2)$ gives $2x - y = 8 > 0$, so the region is $2x - y \\ge 0$. Side $BC$ passes through $(5, 2)$ and $(3, 6)$ with slope $-2$: $y - 2 = -2(x - 5)$, that is, $2x + y = 12$; the vertex $A$ gives $2 + 2 = 4 < 12$, so the region is $2x + y \\le 12$. Constraints: $y \\ge 2$, $2x - y \\ge 0$, $2x + y \\le 12$. Values of $Z = x + y$: $A \\to 3$, $B \\to 7$, $C \\to 9$. Maximum value $9$ at $C(3, 6)$; minimum value $3$ at $A(1, 2)$.',
    steps: [
      { step: 'Finds the equations of the three sides: $y = 2$, $y = 2x$, $2x + y = 12$', marks: 1 },
      { step: 'Chooses the correct inequality sign for each: $y \\ge 2$, $2x - y \\ge 0$, $2x + y \\le 12$', marks: 1 },
      { step: 'States maximum $9$ at $(3, 6)$ and minimum $3$ at $(1, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c08', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the following LPP graphically: minimise $Z = 5x + 4y$ subject to $x + 2y \\ge 10$, $3x + y \\ge 15$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $x + 2y = 10$ passes through $(10, 0)$ and $(0, 5)$; the line $3x + y = 15$ passes through $(5, 0)$ and $(0, 15)$. The origin satisfies neither inequality, so the feasible region lies away from the origin and is unbounded. Solving: $x = 10 - 2y$, so $30 - 6y + y = 15$, giving $y = 3$, $x = 4$. Corner points: $(0, 15)$, $(4, 3)$, $(10, 0)$. Values of $Z$: $60$, $32$, $50$. The smallest is $32$. Since the region is unbounded, draw the open half-plane $5x + 4y < 32$: it has no point in common with the feasible region. Hence the minimum value of $Z$ is $32$, at $x = 4$, $y = 3$.',
    steps: [
      { step: 'Draws the lines and identifies the unbounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 15)$, $(4, 3)$, $(10, 0)$ and the values of $Z$', marks: 1 },
      { step: 'Checks the half-plane $5x + 4y < 32$ and states minimum $32$ at $(4, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c09', chapter: C, topic: UNB, type: 'short', complexity: 'hard', marks: 3,
    text: 'Find graphically the maximum and minimum values, if they exist, of $Z = x - 2y$ subject to $x + y \\ge 4$, $y \\le 5$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Draw $x + y = 4$ and $y = 5$. The region lies on the side of $x + y = 4$ away from the origin, between $y = 0$ and $y = 5$, and right of the $y$-axis; it extends without limit to the right, so it is unbounded. Corner points: $(4, 0)$, $(0, 4)$ and $(0, 5)$. Values of $Z$: $4$, $-8$, $-10$. Minimum: the smallest corner value is $-10$. The half-plane $x - 2y < -10$ needs $x < 2y - 10 \\le 0$ since $y \\le 5$, so it has no point in the region; the minimum value is $-10$ at $(0, 5)$. Maximum: the largest corner value is $4$, but the half-plane $x - 2y > 4$ meets the region (for example at $(10, 0)$, where $Z = 10$), and $Z$ increases without limit along $y = 0$; so $Z$ has no maximum value.',
    steps: [
      { step: 'Identifies the unbounded region and its corner points $(4, 0)$, $(0, 4)$, $(0, 5)$', marks: 1 },
      { step: 'Uses the half-plane $x - 2y < -10$ to conclude minimum $-10$ at $(0, 5)$', marks: 1 },
      { step: 'Shows $x - 2y > 4$ meets the region and concludes there is no maximum', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c10', chapter: C, topic: UNB, type: 'short', complexity: 'hard', marks: 3,
    text: 'Solve the following LPP graphically: minimise $Z = 4x + 2y$ subject to $x + 3y \\ge 9$, $2x + y \\ge 8$, $x \\ge 0$, $y \\ge 0$. Comment on the points at which the minimum occurs.',
    answer: 'The line $x + 3y = 9$ passes through $(9, 0)$ and $(0, 3)$; the line $2x + y = 8$ passes through $(4, 0)$ and $(0, 8)$. The feasible region lies away from the origin and is unbounded. Solving: $x = 9 - 3y$, so $18 - 6y + y = 8$, giving $y = 2$, $x = 3$. Corner points: $(0, 8)$, $(3, 2)$, $(9, 0)$. Values of $Z$: $16$, $16$, $36$. Since $Z = 2(2x + y) \\ge 16$ at every feasible point, the open half-plane $4x + 2y < 16$ has no point in common with the region, so the minimum value is $16$. It occurs at both $(0, 8)$ and $(3, 2)$, and the segment joining them is part of the line $2x + y = 8$, on which $Z = 16$. So the minimum $16$ is attained at every point of this segment, that is, at infinitely many points.',
    steps: [
      { step: 'Finds the unbounded region and the corner points $(0, 8)$, $(3, 2)$, $(9, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ and uses the half-plane $4x + 2y < 16$ to confirm minimum $16$', marks: 1 },
      { step: 'States the minimum occurs at every point of the segment joining $(0, 8)$ and $(3, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c11', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'A school canteen prepares veg rolls and sandwiches. A roll takes 2 minutes to prepare and uses Rs 15 of ingredients; a sandwich takes 3 minutes and uses Rs 10 of ingredients. Each morning there are at most 120 minutes of preparation time and at most Rs 600 to spend on ingredients. The profit is Rs 6 on a roll and Rs 5 on a sandwich. Formulate this as an LPP and solve it graphically to find how many of each should be prepared for maximum profit.',
    answer: 'Let $x$ rolls and $y$ sandwiches be prepared. Maximise $Z = 6x + 5y$ subject to $2x + 3y \\le 120$ (time), $15x + 10y \\le 600$, that is, $3x + 2y \\le 120$ (ingredients), $x \\ge 0$, $y \\ge 0$. Lines: $2x + 3y = 120$ through $(60, 0)$ and $(0, 40)$; $3x + 2y = 120$ through $(40, 0)$ and $(0, 60)$. Solving them gives $x = y = 24$. The feasible region is bounded with corner points $(0, 0)$, $(40, 0)$, $(24, 24)$, $(0, 40)$. Values of $Z$: $0$, $240$, $264$, $200$. The maximum profit is Rs 264, by preparing 24 rolls and 24 sandwiches.',
    steps: [
      { step: 'Writes $Z = 6x + 5y$ and the constraints $2x + 3y \\le 120$, $3x + 2y \\le 120$, $x, y \\ge 0$', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(40, 0)$, $(24, 24)$, $(0, 40)$', marks: 1 },
      { step: 'States maximum profit Rs 264 with 24 rolls and 24 sandwiches', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-c12', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'A builder must move at least 40 tonnes of sand. A van carries 2 tonnes per trip at a cost of Rs 800 per trip, and a truck carries 5 tonnes per trip at a cost of Rs 1500 per trip. The road permit allows at most 6 truck trips. Formulate an LPP to minimise the transport cost and solve it graphically.',
    answer: 'Let $x$ be the number of van trips and $y$ the number of truck trips. Minimise $Z = 800x + 1500y$ subject to $2x + 5y \\ge 40$ (sand), $y \\le 6$ (permit), $x \\ge 0$, $y \\ge 0$. The line $2x + 5y = 40$ passes through $(20, 0)$ and $(0, 8)$; it meets $y = 6$ at $2x = 10$, that is, $(5, 6)$. The region lies away from the origin for the first constraint and below $y = 6$; it is unbounded with corner points $(5, 6)$ and $(20, 0)$. Values of $Z$: $Z(5, 6) = 4000 + 9000 = 13000$; $Z(20, 0) = 16000$. The open half-plane $800x + 1500y < 13000$ has no point in common with the region, so the minimum cost is Rs 13000, using 5 van trips and 6 truck trips.',
    steps: [
      { step: 'Writes $Z = 800x + 1500y$ and the constraints $2x + 5y \\ge 40$, $y \\le 6$, $x, y \\ge 0$', marks: 1 },
      { step: 'Finds the unbounded region with corner points $(5, 6)$ and $(20, 0)$', marks: 1 },
      { step: 'Uses the half-plane test and states minimum cost Rs 13000 at 5 van and 6 truck trips', marks: 1 },
    ],
  },

  // ───────────── Section D (5 marks) ─────────────
  {
    id: 'c12-lpp-r2-d01', chapter: C, topic: GRAPH, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 2x + 3y$ subject to $x + y \\ge 4$, $3x + 2y \\le 24$, $x + 3y \\le 15$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $x + y = 4$ through $(4, 0)$ and $(0, 4)$; $3x + 2y = 24$ through $(8, 0)$ and $(0, 12)$; $x + 3y = 15$ through $(15, 0)$ and $(0, 5)$. The origin fails $x + y \\ge 4$ but satisfies the other two, so the region lies away from the origin for the first line and on the origin side of the other two, in the first quadrant. It is bounded. Intersection of $3x + 2y = 24$ and $x + 3y = 15$: $x = 15 - 3y$, so $45 - 9y + 2y = 24$, giving $y = 3$, $x = 6$. Corner points: $(4, 0)$, $(8, 0)$, $(6, 3)$, $(0, 5)$, $(0, 4)$. Values of $Z$: $8$, $16$, $21$, $15$, $12$. The maximum value of $Z$ is $21$ at $(6, 3)$ and the minimum value is $8$ at $(4, 0)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the intersection $(6, 3)$ and all five corner points', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $21$ at $(6, 3)$ and minimum $8$ at $(4, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d02', chapter: C, topic: GRAPH, type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 4x - 3y$ subject to $2x + y \\ge 4$, $x + y \\le 8$, $x - y \\le 4$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $2x + y = 4$ through $(2, 0)$ and $(0, 4)$; $x + y = 8$ through $(8, 0)$ and $(0, 8)$; $x - y = 4$ through $(4, 0)$ and $(6, 2)$. The region lies away from the origin for $2x + y \\ge 4$, on the origin side of $x + y = 8$ and of $x - y = 4$ (that is, $y \\ge x - 4$), in the first quadrant; it is bounded. Corner points: $(2, 0)$ and $(4, 0)$ on the $x$-axis; $x - y = 4$ meets $x + y = 8$ where $2x = 12$, at $(6, 2)$; $x + y = 8$ meets the $y$-axis at $(0, 8)$; $2x + y = 4$ meets the $y$-axis at $(0, 4)$. Values of $Z$: $(2, 0) \\to 8$, $(4, 0) \\to 16$, $(6, 2) \\to 18$, $(0, 8) \\to -24$, $(0, 4) \\to -12$. Maximum value $18$ at $(6, 2)$; minimum value $-24$ at $(0, 8)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Identifies the correct side of each line and shades the bounded region', marks: 1 },
      { step: 'Finds the corner points $(2, 0)$, $(4, 0)$, $(6, 2)$, $(0, 8)$, $(0, 4)$', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $18$ at $(6, 2)$ and minimum $-24$ at $(0, 8)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d03', chapter: C, topic: GRAPH, type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 5x + 3y$ subject to $x + y \\le 10$, $2x + y \\le 16$, $x + 2y \\le 16$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $x + y = 10$ through $(10, 0)$ and $(0, 10)$; $2x + y = 16$ through $(8, 0)$ and $(0, 16)$; $x + 2y = 16$ through $(16, 0)$ and $(0, 8)$. The origin satisfies all three inequalities, so the region lies on the origin side of each line, in the first quadrant; it is bounded. Intersections: $2x + y = 16$ and $x + y = 10$ give $x = 6$, $y = 4$; $x + y = 10$ and $x + 2y = 16$ give $y = 6$, $x = 4$. Each satisfies the third constraint ($(6, 4)$: $x + 2y = 14 \\le 16$; $(4, 6)$: $2x + y = 14 \\le 16$). Corner points: $(0, 0)$, $(8, 0)$, $(6, 4)$, $(4, 6)$, $(0, 8)$. Values of $Z$: $0$, $40$, $42$, $38$, $24$. Maximum value $42$ at $(6, 4)$; minimum value $0$ at $(0, 0)$.',
    steps: [
      { step: 'Draws the three boundary lines', marks: 1 },
      { step: 'Shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(8, 0)$, $(6, 4)$, $(4, 6)$, $(0, 8)$', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $42$ at $(6, 4)$ and minimum $0$ at $(0, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d04', chapter: C, topic: GRAPH, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 3x + 2y$ subject to $2x + y \\ge 6$, $x + 2y \\ge 6$, $x + y \\le 9$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $2x + y = 6$ through $(3, 0)$ and $(0, 6)$; $x + 2y = 6$ through $(6, 0)$ and $(0, 3)$; $x + y = 9$ through $(9, 0)$ and $(0, 9)$. The region lies away from the origin for the first two lines and on the origin side of $x + y = 9$, in the first quadrant; it is bounded. The lines $2x + y = 6$ and $x + 2y = 6$ meet where $x = y$ and $3x = 6$, at $(2, 2)$. Corner points: $(0, 6)$, $(2, 2)$, $(6, 0)$, $(9, 0)$, $(0, 9)$. Values of $Z$: $12$, $10$, $18$, $27$, $18$. Maximum value $27$ at $(9, 0)$; minimum value $10$ at $(2, 2)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 6)$, $(2, 2)$, $(6, 0)$, $(9, 0)$, $(0, 9)$', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $27$ at $(9, 0)$ and minimum $10$ at $(2, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d05', chapter: C, topic: FORM, type: 'long', complexity: 'medium', marks: 5,
    text: 'A farmer has 50 hectares of land on which to grow wheat and mustard. Each hectare of wheat needs 4 days of labour and 3 units of irrigation water; each hectare of mustard needs 2 days of labour and 5 units of water. At most 160 days of labour and 210 units of water are available for the season. The profit is Rs 6000 per hectare of wheat and Rs 5000 per hectare of mustard. Formulate this as an LPP and solve it graphically to find how much land should be given to each crop for maximum profit.',
    answer: 'Let $x$ hectares be used for wheat and $y$ hectares for mustard. Maximise $Z = 6000x + 5000y$ subject to $x + y \\le 50$ (land), $4x + 2y \\le 160$, that is, $2x + y \\le 80$ (labour), $3x + 5y \\le 210$ (water), $x \\ge 0$, $y \\ge 0$. Lines: $x + y = 50$ through $(50, 0)$ and $(0, 50)$; $2x + y = 80$ through $(40, 0)$ and $(0, 80)$; $3x + 5y = 210$ through $(70, 0)$ and $(0, 42)$. The region is bounded, on the origin side of all three lines. Intersections: $2x + y = 80$ and $x + y = 50$ give $(30, 20)$; $x + y = 50$ and $3x + 5y = 210$ give $2y = 60$, so $(20, 30)$. Corner points: $(0, 0)$, $(40, 0)$, $(30, 20)$, $(20, 30)$, $(0, 42)$. Values of $Z$: $0$, $240000$, $280000$, $270000$, $210000$. The maximum profit is Rs 2,80,000, by growing wheat on 30 hectares and mustard on 20 hectares.',
    steps: [
      { step: 'Defines the variables and writes the objective $Z = 6000x + 5000y$', marks: 1 },
      { step: 'Writes the constraints $x + y \\le 50$, $2x + y \\le 80$, $3x + 5y \\le 210$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 0)$, $(40, 0)$, $(30, 20)$, $(20, 30)$, $(0, 42)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum profit Rs 2,80,000 at 30 ha wheat and 20 ha mustard', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d06', chapter: C, topic: FORM, type: 'long', complexity: 'hard', marks: 5,
    text: 'A person has at most Rs 12 lakh to invest in two schemes, A and B. Scheme A gives a return of 8% a year and scheme B gives 12% a year. He wants to invest at least Rs 3 lakh in A, and the amount in B must not exceed twice the amount in A. Formulate this as an LPP and solve it graphically to find how he should invest to get the maximum yearly return. Also find this return.',
    answer: 'Let Rs $x$ lakh be invested in A and Rs $y$ lakh in B. Maximise $Z = 0.08x + 0.12y$ (in lakh rupees) subject to $x + y \\le 12$, $x \\ge 3$, $y \\le 2x$, $y \\ge 0$. The region lies left of $x + y = 12$, right of $x = 3$, below the line $y = 2x$ and above the $x$-axis; it is bounded. Corners: $x = 3$ meets $y = 0$ at $(3, 0)$; $x + y = 12$ meets $y = 0$ at $(12, 0)$; $x + y = 12$ meets $y = 2x$ where $3x = 12$, at $(4, 8)$; $y = 2x$ meets $x = 3$ at $(3, 6)$. Values of $Z$: $(3, 0) \\to 0.24$, $(12, 0) \\to 0.96$, $(4, 8) \\to 0.32 + 0.96 = 1.28$, $(3, 6) \\to 0.24 + 0.72 = 0.96$. The maximum yearly return is Rs 1.28 lakh (Rs 1,28,000), by investing Rs 4 lakh in A and Rs 8 lakh in B.',
    steps: [
      { step: 'Writes the objective $Z = 0.08x + 0.12y$ to be maximised', marks: 1 },
      { step: 'Writes the constraints $x + y \\le 12$, $x \\ge 3$, $y \\le 2x$, $y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(3, 0)$, $(12, 0)$, $(4, 8)$, $(3, 6)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum return Rs 1.28 lakh with Rs 4 lakh in A and Rs 8 lakh in B', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d07', chapter: C, topic: UNB, type: 'long', complexity: 'hard', marks: 5,
    text: 'An oil company has two refineries, P and Q. Each day of running, refinery P produces 2 kilolitres of high-grade, 1 kilolitre of medium-grade and 1 kilolitre of low-grade oil, while refinery Q produces 1, 1 and 4 kilolitres of these grades. The company has an order for at least 10 kilolitres of high-grade, 7 kilolitres of medium-grade and 13 kilolitres of low-grade oil. Running P costs Rs 20,000 a day and running Q costs Rs 25,000 a day. Formulate an LPP to find the number of days each refinery should run to meet the order at minimum cost, and solve it graphically.',
    answer: 'Let P run for $x$ days and Q for $y$ days. Minimise $Z = 20000x + 25000y$ subject to $2x + y \\ge 10$ (high grade), $x + y \\ge 7$ (medium grade), $x + 4y \\ge 13$ (low grade), $x \\ge 0$, $y \\ge 0$. Lines: $2x + y = 10$ through $(5, 0)$ and $(0, 10)$; $x + y = 7$ through $(7, 0)$ and $(0, 7)$; $x + 4y = 13$ through $(13, 0)$ and $(0, 3.25)$. The origin satisfies none of the inequalities, so the region lies away from the origin and is unbounded. Corners: $(0, 10)$; $2x + y = 10$ and $x + y = 7$ meet at $(3, 4)$; $x + y = 7$ and $x + 4y = 13$ meet where $3y = 6$, at $(5, 2)$; $(13, 0)$. Values of $Z$: $250000$, $160000$, $150000$, $260000$. The smallest is $150000$. Since the region is unbounded, check the open half-plane $20000x + 25000y < 150000$, that is, $4x + 5y < 30$: it has no point in common with the feasible region. Hence the minimum cost is Rs 1,50,000, running P for 5 days and Q for 2 days.',
    steps: [
      { step: 'Writes the objective $Z = 20000x + 25000y$ and the constraints $2x + y \\ge 10$, $x + y \\ge 7$, $x + 4y \\ge 13$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the unbounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 10)$, $(3, 4)$, $(5, 2)$, $(13, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corner points', marks: 1 },
      { step: 'Uses the half-plane test and states minimum cost Rs 1,50,000 with P for 5 days and Q for 2 days', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-r2-d08', chapter: C, topic: UNB, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: minimise $Z = 2x + 3y$ subject to $x + y \\ge 5$, $4x + y \\ge 8$, $x + 4y \\ge 8$, $x \\ge 0$, $y \\ge 0$. Does $Z$ have a maximum value on the feasible region? Justify.',
    answer: 'Lines: $x + y = 5$ through $(5, 0)$ and $(0, 5)$; $4x + y = 8$ through $(2, 0)$ and $(0, 8)$; $x + 4y = 8$ through $(8, 0)$ and $(0, 2)$. The region lies away from the origin for all three and is unbounded. Corners: $(0, 8)$; $4x + y = 8$ and $x + y = 5$ meet where $3x = 3$, at $(1, 4)$; $x + y = 5$ and $x + 4y = 8$ meet where $3y = 3$, at $(4, 1)$; $(8, 0)$. Values of $Z$: $24$, $14$, $11$, $16$. The smallest is $11$, and the open half-plane $2x + 3y < 11$ has no point in common with the region, so the minimum value of $Z$ is $11$ at $(4, 1)$. $Z$ has no maximum: the half-plane $2x + 3y > 24$ meets the region (for example $(20, 0)$ gives $Z = 40$), and $Z$ grows without limit as $x$ or $y$ increases.',
    steps: [
      { step: 'Draws the three lines and shades the unbounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(0, 8)$, $(1, 4)$, $(4, 1)$, $(8, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corner points', marks: 1 },
      { step: 'Uses the half-plane $2x + 3y < 11$ to state minimum $11$ at $(4, 1)$', marks: 1 },
      { step: 'Justifies that $Z$ has no maximum since $2x + 3y > 24$ meets the region', marks: 1 },
    ],
  },

  // ───────────── Section E (4-mark case studies) ─────────────
  {
    id: 'c12-lpp-r2-e01', chapter: C, topic: UNB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A poultry farm mixes two feeds, A and B, for its birds. One kg of feed A contains 3 units of protein and 1 unit of calcium; one kg of feed B contains 1 unit of protein and 2 units of calcium. Each batch of the mixture must contain at least 12 units of protein and at least 9 units of calcium. Feed A costs Rs 40 per kg and feed B costs Rs 30 per kg. A batch uses $x$ kg of feed A and $y$ kg of feed B, and the farm wants the cheapest batch.',
    answer: '(i) $3x + y \\ge 12$, $x + 2y \\ge 9$, $x, y \\ge 0$. (ii) $(0, 12)$, $(3, 3)$, $(9, 0)$. (iii) Minimum cost Rs 210 with 3 kg of A and 3 kg of B. OR: minimum cost Rs 360 with 12 kg of B only.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem.',
        answer: 'Protein: $3x + y \\ge 12$. Calcium: $x + 2y \\ge 9$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the corner points of the feasible region.',
        answer: 'The line $3x + y = 12$ meets the axes at $(4, 0)$ and $(0, 12)$; the line $x + 2y = 9$ meets them at $(9, 0)$ and $(0, 4.5)$. Solving: $x = 9 - 2y$, so $27 - 6y + y = 12$, giving $y = 3$, $x = 3$. The feasible region (away from the origin) is unbounded with corner points $(0, 12)$, $(3, 3)$ and $(9, 0)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the minimum cost of a batch and the amount of each feed used.\nOR\nIf the price of feed A rises to Rs 100 per kg (feed B unchanged), find the new minimum cost and the mixture that gives it.',
        answer: 'Cost $Z = 40x + 30y$. At $(0, 12)$: $360$; at $(3, 3)$: $120 + 90 = 210$; at $(9, 0)$: $360$. The open half-plane $40x + 30y < 210$ has no point in common with the unbounded region, so the minimum cost is Rs 210, using 3 kg of feed A and 3 kg of feed B.\nOR: Now $Z = 100x + 30y$. At $(0, 12)$: $360$; at $(3, 3)$: $300 + 90 = 390$; at $(9, 0)$: $900$. The half-plane $100x + 30y < 360$ has no point in common with the region, so the minimum cost is Rs 360, using 12 kg of feed B and no feed A.',
      },
    ],
  },
  {
    id: 'c12-lpp-r2-e02', chapter: C, topic: FORM, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A start-up assembles two kinds of drone kits, basic and pro. A basic kit needs 2 hours of assembly and 1 hour of testing; a pro kit needs 3 hours of assembly and 3 hours of testing. Each week at most 60 hours of assembly and 45 hours of testing are available. The profit is Rs 1500 on a basic kit and Rs 2500 on a pro kit. Let $x$ basic and $y$ pro kits be made in a week.',
    answer: '(i) $2x + 3y \\le 60$, $x + 3y \\le 45$, $x, y \\ge 0$. (ii) $(0, 0)$, $(30, 0)$, $(15, 10)$, $(0, 15)$. (iii) Maximum profit Rs 47,500 with 15 basic and 10 pro kits. OR: maximum profit Rs 60,000 with 30 basic kits and no pro kits.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem.',
        answer: 'Assembly: $2x + 3y \\le 60$. Testing: $x + 3y \\le 45$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the corner points of the feasible region.',
        answer: 'The line $2x + 3y = 60$ passes through $(30, 0)$ and $(0, 20)$; the line $x + 3y = 45$ passes through $(45, 0)$ and $(0, 15)$. Subtracting the equations gives $x = 15$, then $y = 10$. The bounded feasible region has corner points $(0, 0)$, $(30, 0)$, $(15, 10)$ and $(0, 15)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the maximum weekly profit and the number of kits of each kind that gives it.\nOR\nIf the profit on a basic kit rises to Rs 2000 (profit on a pro kit unchanged), find the new maximum weekly profit and the production plan.',
        answer: '$Z = 1500x + 2500y$ at the corners: $0$, $45000$, $22500 + 25000 = 47500$, $37500$. The maximum weekly profit is Rs 47,500, by making 15 basic and 10 pro kits.\nOR: With $Z = 2000x + 2500y$ the corner values are $0$, $60000$, $30000 + 25000 = 55000$ and $37500$. The maximum weekly profit is Rs 60,000, by making 30 basic kits and no pro kits.',
      },
    ],
  },
  {
    id: 'c12-lpp-r2-e03', chapter: C, topic: GRAPH, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A school is planning stalls for its annual fair. If $x$ is the number of food stalls and $y$ the number of game stalls, the feasible region of its LPP is the pentagon (with its interior) whose corners are $P(1, 1)$, $Q(6, 1)$, $R(6, 3)$, $S(3, 6)$ and $T(1, 6)$. The sides $PQ$, $QR$, $ST$ and $TP$ lie on the lines $y = 1$, $x = 6$, $y = 6$ and $x = 1$, and the side $RS$ comes from a limit on the total space available.',
    answer: '(i) $x + y \\le 9$. (ii) Yes, $(5, 4)$ satisfies all the constraints and lies on side $RS$. (iii) Maximum income Rs 3300 at 6 food and 3 game stalls; minimum Rs 700 at $(1, 1)$. OR: $p = q$; maximum $900$ at every point of $RS$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraint given by the side $RS$.',
        answer: '$RS$ passes through $(6, 3)$ and $(3, 6)$, with slope $\\frac{6 - 3}{3 - 6} = -1$, so its equation is $x + y = 9$. The point $P(1, 1)$ of the region gives $2 < 9$, so the constraint is $x + y \\le 9$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is the plan of 5 food stalls and 4 game stalls feasible? Justify.',
        answer: 'Yes. For $(5, 4)$: $x + y = 9 \\le 9$, $1 \\le 5 \\le 6$ and $1 \\le 4 \\le 6$, so all the constraints hold. The point lies on the side $RS$ of the region.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The income from the fair is $Z = 400x + 300y$ rupees. Find the maximum and minimum income and the stalls that give them.\nOR\nIf $Z = px + qy$ (with $p, q > 0$) has its maximum at both $R$ and $S$, find the relation between $p$ and $q$, and the maximum value of $Z$ when $p = q = 100$.',
        answer: 'At $P$: $700$; at $Q$: $2400 + 300 = 2700$; at $R$: $2400 + 900 = 3300$; at $S$: $1200 + 1800 = 3000$; at $T$: $400 + 1800 = 2200$. The region is bounded, so the maximum income is Rs 3300 with 6 food stalls and 3 game stalls, and the minimum income is Rs 700 with 1 stall of each kind.\nOR: $Z(R) = Z(S)$ gives $6p + 3q = 3p + 6q$, so $p = q$. With $p = q = 100$, $Z = 100(x + y)$ takes the values $200$, $700$, $900$, $900$, $700$ at $P$, $Q$, $R$, $S$, $T$, so the maximum value is $900$, attained at every point of the side $RS$.',
      },
    ],
  },
  {
    id: 'c12-lpp-r2-e04', chapter: C, topic: UNB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A construction company must deliver at least 40 tonnes of cement and at least 36 tonnes of steel to a site. A trip by a truck of type P carries 4 tonnes of cement and 2 tonnes of steel and costs Rs 3000; a trip by a truck of type Q carries 2 tonnes of cement and 5 tonnes of steel and costs Rs 2500. The company makes $x$ trips with type P and $y$ trips with type Q.',
    answer: '(i) $2x + y \\ge 20$, $2x + 5y \\ge 36$, $x, y \\ge 0$. (ii) $(0, 20)$, $(8, 4)$, $(18, 0)$. (iii) Minimum cost Rs 34,000 with 8 trips of P and 4 of Q. OR: minimum 12 trips (8 of P and 4 of Q).',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem in their simplest form.',
        answer: 'Cement: $4x + 2y \\ge 40$, that is, $2x + y \\ge 20$. Steel: $2x + 5y \\ge 36$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the corner points of the feasible region.',
        answer: 'The line $2x + y = 20$ meets the axes at $(10, 0)$ and $(0, 20)$; the line $2x + 5y = 36$ meets them at $(18, 0)$ and $(0, 7.2)$. Subtracting the equations gives $4y = 16$, so $y = 4$ and $x = 8$. The feasible region (away from the origin) is unbounded with corner points $(0, 20)$, $(8, 4)$ and $(18, 0)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the minimum cost of the deliveries and the number of trips of each type.\nOR\nFind the least total number of trips that can meet the requirement, and the trips of each type.',
        answer: 'Cost $Z = 3000x + 2500y$. At $(0, 20)$: $50000$; at $(8, 4)$: $24000 + 10000 = 34000$; at $(18, 0)$: $54000$. The open half-plane $3000x + 2500y < 34000$ has no point in common with the unbounded region, so the minimum cost is Rs 34,000, with 8 trips of type P and 4 trips of type Q.\nOR: Total trips $T = x + y$. At $(0, 20)$: $20$; at $(8, 4)$: $12$; at $(18, 0)$: $18$. The half-plane $x + y < 12$ has no point in common with the region, so the least number of trips is 12: 8 of type P and 4 of type Q.',
      },
    ],
  },
];
