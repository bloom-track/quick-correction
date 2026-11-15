import type { Class12Question } from './types.js';

const C = 'Linear Programming';
const FORM = 'Formulating a linear programming problem';
const GRAPH = 'Graphical method and corner points';
const UNB = 'Unbounded feasible regions';

export const CH12_LPP: Class12Question[] = [
  // ───────────── Section A (1 mark) ─────────────
  {
    id: 'c12-lpp-a01', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'In a linear programming problem with decision variables $x$ and $y$, the conditions $x \\ge 0$ and $y \\ge 0$ are called',
    options: ['the objective function', 'the non-negative restrictions', 'the optimal solution', 'the corner points'],
    answer: 'Correct option: B) the non-negative restrictions. They say the decision variables cannot take negative values; the objective function is the quantity being optimised, and corner points and optimal solutions come from solving the problem.',
  },
  {
    id: 'c12-lpp-a02', chapter: C, topic: FORM, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A workshop makes $x$ chairs and $y$ tables a day. It earns a profit of Rs 150 on each chair and Rs 250 on each table. The objective function for maximising the daily profit is',
    options: ['$Z = 150x + 250y$', '$Z = 250x + 150y$', '$Z = 400(x + y)$', '$Z = 150x \\times 250y$'],
    answer: 'Correct option: A) $Z = 150x + 250y$. Total profit is (profit per chair) $\\times$ (number of chairs) + (profit per table) $\\times$ (number of tables). Option B swaps the two profits, C wrongly adds them and D multiplies instead of adding.',
  },
  {
    id: 'c12-lpp-a03', chapter: C, topic: FORM, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A diet must supply at least 40 units of vitamin A. Food P contains 4 units of vitamin A per kg and food Q contains 5 units per kg. If the diet uses $x$ kg of P and $y$ kg of Q, the vitamin A constraint is',
    options: ['$4x + 5y \\le 40$', '$5x + 4y \\ge 40$', '$4x + 5y \\ge 40$', '$4x + 5y = 40$'],
    answer: 'Correct option: C) $4x + 5y \\ge 40$. The diet gives $4x + 5y$ units, and "at least 40" means this must be greater than or equal to 40. Option A reverses the inequality, B swaps the coefficients and D allows only exactly 40 units.',
  },
  {
    id: 'c12-lpp-a04', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following points lies in the solution region of the inequality $3x - 2y > 6$?',
    options: ['$(1, 0)$', '$(2, 0)$', '$(3, 1)$', '$(0, -2)$'],
    answer: 'Correct option: C) $(3, 1)$, since $3(3) - 2(1) = 7 > 6$. For $(1, 0)$ the value is $3$, for $(0, -2)$ it is $4$, and for $(2, 0)$ it is exactly $6$, which does not satisfy the strict inequality.',
  },
  {
    id: 'c12-lpp-a05', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The corner points of the bounded feasible region of an LPP are $(0, 0)$, $(5, 0)$, $(4, 3)$ and $(0, 6)$. The maximum value of $Z = 2x + 3y$ is',
    options: ['$10$', '$15$', '$17$', '$18$'],
    answer: 'Correct option: D) $18$. The values of $Z$ at the corners are $0$, $10$, $17$ and $18$, so the maximum is $18$ at $(0, 6)$. Picking $17$ comes from assuming the "middle" corner $(4, 3)$ is always best.',
  },
  {
    id: 'c12-lpp-a06', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The corner points of the bounded feasible region of an LPP are $(0, 2)$, $(3, 0)$, $(6, 0)$, $(6, 8)$ and $(0, 5)$. If $Z = 4x - y$, then (maximum of $Z$) $-$ (minimum of $Z$) equals',
    options: ['$19$', '$22$', '$26$', '$29$'],
    answer: 'Correct option: D) $29$. The values of $Z$ are $-2$, $12$, $24$, $16$ and $-5$, so the maximum is $24$ at $(6, 0)$ and the minimum is $-5$ at $(0, 5)$; the difference is $24 - (-5) = 29$. Taking $-2$ as the minimum gives $26$, and ignoring the sign of $-5$ gives $19$.',
  },
  {
    id: 'c12-lpp-a07', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For an LPP, the objective function $Z = px + qy$ (with $p, q > 0$) attains its maximum value at both corner points $(1, 5)$ and $(4, 3)$ of the feasible region. Then',
    options: ['$p = q$', '$2p = 3q$', '$3p = 2q$', '$p = 2q$'],
    answer: 'Correct option: C) $3p = 2q$. Equal values at the two corners give $p + 5q = 4p + 3q$, so $2q = 3p$. Option B comes from moving the terms to the wrong sides.',
  },
  {
    id: 'c12-lpp-a08', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of corner points of the feasible region determined by $2x + y \\le 8$, $x \\le 3$, $x \\ge 0$, $y \\ge 0$ is',
    options: ['$2$', '$3$', '$4$', '$5$'],
    answer: 'Correct option: C) $4$. The corner points are $(0, 0)$, $(3, 0)$, $(3, 2)$ (where $x = 3$ meets $2x + y = 8$) and $(0, 8)$.',
  },
  {
    id: 'c12-lpp-a09', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The maximum value of $Z = 5x + 2y$ subject to $x + y \\le 2$, $x \\ge 0$, $y \\ge 0$ is',
    options: ['$4$', '$7$', '$10$', '$14$'],
    answer: 'Correct option: C) $10$. The corner points are $(0, 0)$, $(2, 0)$ and $(0, 2)$, giving $Z = 0$, $10$ and $4$, so the maximum is $10$ at $(2, 0)$. The value $7$ wrongly uses $(1, 1)$, and $14$ adds the two non-zero corner values.',
  },
  {
    id: 'c12-lpp-a10', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If the feasible region of a linear programming problem is non-empty and bounded, then the objective function $Z = ax + by$',
    options: [
      'has both a maximum and a minimum value on the region',
      'has a maximum value but may not have a minimum value',
      'may have neither a maximum nor a minimum value',
      'has a maximum value only when $a$ and $b$ are positive',
    ],
    answer: 'Correct option: A) has both a maximum and a minimum value. On a bounded feasible region the objective function always has both a maximum and a minimum value, and each occurs at a corner point. Options B and C describe what can happen only on an unbounded region.',
  },
  {
    id: 'c12-lpp-a11', chapter: C, topic: GRAPH, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Consider the LPP: maximise $Z = x + 2y$ subject to $x + 2y \\ge 10$, $x + 2y \\le 6$, $x \\ge 0$, $y \\ge 0$. Which statement is true?',
    options: ['The maximum value of $Z$ is $6$', 'The maximum value of $Z$ is $10$', 'The LPP has no feasible solution', 'The value of $Z$ is unbounded'],
    answer: 'Correct option: C) The LPP has no feasible solution. No point can satisfy both $x + 2y \\ge 10$ and $x + 2y \\le 6$, so the feasible region is empty and the problem has no feasible solution, hence no maximum.',
  },
  {
    id: 'c12-lpp-a12', chapter: C, topic: UNB, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The feasible region determined by $2x + y \\ge 6$, $x + 3y \\ge 8$, $x \\ge 0$, $y \\ge 0$ is unbounded. The number of its corner points is',
    options: ['$2$', '$3$', '$4$', 'infinitely many'],
    answer: 'Correct option: B) $3$. The corner points are $(0, 6)$ on the $y$-axis, $(2, 2)$ where the two lines $2x + y = 6$ and $x + 3y = 8$ meet, and $(8, 0)$ on the $x$-axis. An unbounded region still has only finitely many corners.',
  },
  {
    id: 'c12-lpp-a13', chapter: C, topic: UNB, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The feasible region given by $x + y \\ge 5$, $x + 3y \\ge 9$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 5)$, $(3, 2)$ and $(9, 0)$. For $Z = 2x + 3y$, which statement is correct?',
    options: [
      'Minimum is $12$ at $(3, 2)$ and there is no maximum',
      'Minimum is $12$ at $(3, 2)$ and maximum is $18$ at $(9, 0)$',
      'Minimum is $15$ at $(0, 5)$ and there is no maximum',
      '$Z$ has neither a minimum nor a maximum',
    ],
    answer: 'Correct option: A) minimum $12$ at $(3, 2)$ and no maximum. The corner values are $15$, $12$ and $18$. The open half-plane $2x + 3y < 12$ has no point in common with the region, so $12$ is the minimum. The half-plane $2x + 3y > 18$ does meet the region (for example at $(20, 0)$), so $Z$ has no maximum; option B wrongly treats the largest corner value as a maximum.',
  },
  {
    id: 'c12-lpp-a14', chapter: C, topic: GRAPH, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'The feasible region of an LPP given by $x + y \\le 5$, $2x + y \\le 8$, $x \\ge 0$, $y \\ge 0$ has corner points $(0, 0)$, $(4, 0)$, $(3, 2)$ and $(0, 5)$.\nAssertion (A): The maximum value of $Z = 3x + 3y$ on this region occurs at infinitely many points.\nReason (R): If an objective function takes the same optimal value at two adjacent corner points of a bounded feasible region, it takes that value at every point of the segment joining them.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    answer: 'Correct option: A) Both A and R are true and R is the correct explanation of A. $Z$ takes the values $0$, $12$, $15$ and $15$ at the corners, so the maximum $15$ occurs at the adjacent corners $(3, 2)$ and $(0, 5)$. By R, every point of the segment joining them (part of $x + y = 5$) gives $Z = 15$, so A is true and R explains it.',
  },
  {
    id: 'c12-lpp-a15', chapter: C, topic: UNB, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If the feasible region of an LPP is unbounded, the objective function can never have a minimum value.\nReason (R): On an unbounded feasible region, if $m$ is the smallest value of $Z = ax + by$ at the corner points and the open half-plane $ax + by < m$ has no point in common with the region, then $m$ is the minimum value of $Z$.',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    answer: 'Correct option: D) A is false but R is true. R is the standard test for an unbounded region and is true. A is false: for example, $Z = x + y$ on the unbounded region $x + y \\ge 4$, $x \\ge 0$, $y \\ge 0$ has minimum value $4$.',
  },

  // ───────────── Section B (2 marks) ─────────────
  {
    id: 'c12-lpp-b01', chapter: C, topic: GRAPH, type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the corner points of the feasible region determined by the constraints $x + 2y \\le 8$, $3x + y \\le 9$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $x + 2y = 8$ meets the axes at $(8, 0)$ and $(0, 4)$; the line $3x + y = 9$ meets them at $(3, 0)$ and $(0, 9)$. The origin satisfies both inequalities, so the region lies on the origin side of each line. Solving $x + 2y = 8$ and $3x + y = 9$: from the first, $x = 8 - 2y$, so $24 - 6y + y = 9$, giving $y = 3$ and $x = 2$. The feasible region is bounded with corner points $(0, 0)$, $(3, 0)$, $(2, 3)$ and $(0, 4)$.',
    steps: [
      { step: 'Finds the intersection of $x + 2y = 8$ and $3x + y = 9$ as $(2, 3)$', marks: 1 },
      { step: 'Lists all corner points $(0, 0)$, $(3, 0)$, $(2, 3)$, $(0, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-b02', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 2,
    text: 'The corner points of the bounded feasible region of an LPP are $(0, 0)$, $(6, 0)$, $(5, 4)$, $(1, 6)$ and $(0, 5)$. Find the maximum and minimum values of $Z = 3x - 2y$ and the points where they occur.',
    answer: 'At $(0, 0)$: $Z = 0$. At $(6, 0)$: $Z = 18$. At $(5, 4)$: $Z = 15 - 8 = 7$. At $(1, 6)$: $Z = 3 - 12 = -9$. At $(0, 5)$: $Z = -10$. Since the region is bounded, the maximum value is $18$ at $(6, 0)$ and the minimum value is $-10$ at $(0, 5)$.',
    steps: [
      { step: 'Evaluates $Z$ correctly at all five corner points', marks: 1 },
      { step: 'States maximum $18$ at $(6, 0)$ and minimum $-10$ at $(0, 5)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-b03', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 2,
    text: 'The feasible region of an LPP is determined by $2x + y \\ge 8$, $x + y \\ge 6$, $x \\ge 0$, $y \\ge 0$. It is unbounded with corner points $(0, 8)$, $(2, 4)$ and $(6, 0)$. Find the minimum value of $Z = 5x + 3y$, if it exists.',
    answer: 'At $(0, 8)$: $Z = 24$. At $(2, 4)$: $Z = 10 + 12 = 22$. At $(6, 0)$: $Z = 30$. The smallest corner value is $22$. Because the region is unbounded, check the open half-plane $5x + 3y < 22$: it has no point in common with the feasible region (it lies entirely on the origin side of the line $5x + 3y = 22$, which touches the region only at $(2, 4)$). Hence the minimum value of $Z$ is $22$, at $x = 2$, $y = 4$.',
    steps: [
      { step: 'Evaluates $Z$ at the three corners and identifies $22$ at $(2, 4)$ as the smallest', marks: 1 },
      { step: 'Checks that $5x + 3y < 22$ has no common point with the region and concludes minimum $= 22$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-b04', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 2,
    text: 'The corner points of the bounded feasible region of an LPP are $O(0, 0)$, $A(4, 0)$, $B(3, 3)$ and $C(0, 4)$. Let $Z = px + qy$ with $p, q > 0$. Find the condition on $p$ and $q$ so that the maximum of $Z$ occurs at both $A$ and $B$. Hence find the maximum value of $Z$ when $p = 3$.',
    answer: 'For the maximum at both $A$ and $B$, $Z(A) = Z(B)$: $4p = 3p + 3q$, so $p = 3q$. (This is also the maximum, since $Z(C) = 4q < 12q = Z(A)$ when $p = 3q$.) When $p = 3$, $q = 1$ and $Z = 3x + y$. Then $Z(O) = 0$, $Z(A) = 12$, $Z(B) = 12$, $Z(C) = 4$, so the maximum value is $12$, attained at $A$, at $B$ and at every point of the segment $AB$.',
    steps: [
      { step: 'Equates $Z(A)$ and $Z(B)$ to get $p = 3q$', marks: 1 },
      { step: 'With $p = 3$, $q = 1$, finds the maximum value $12$', marks: 1 },
    ],
  },

  // ───────────── Section C (3 marks) ─────────────
  {
    id: 'c12-lpp-c01', chapter: C, topic: GRAPH, type: 'short', complexity: 'easy', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 3x + 2y$ subject to $x + y \\le 6$, $x \\le 4$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Draw $x + y = 6$ (through $(6, 0)$ and $(0, 6)$) and $x = 4$. The origin satisfies both constraints, so the feasible region is the bounded region on the origin side of both lines in the first quadrant. The line $x = 4$ meets $x + y = 6$ at $(4, 2)$. Corner points: $(0, 0)$, $(4, 0)$, $(4, 2)$, $(0, 6)$. Values of $Z$: $0$, $12$, $16$, $12$. The maximum value of $Z$ is $16$, at $x = 4$, $y = 2$.',
    steps: [
      { step: 'Draws the lines and identifies the bounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 0)$, $(4, 0)$, $(4, 2)$, $(0, 6)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum $16$ at $(4, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c02', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 4x + 5y$ subject to $x + 2y \\le 10$, $3x + y \\le 15$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $x + 2y = 10$ passes through $(10, 0)$ and $(0, 5)$; the line $3x + y = 15$ passes through $(5, 0)$ and $(0, 15)$. The origin satisfies both inequalities, so the feasible region is the bounded region on the origin side of both lines in the first quadrant. Solving the two equations: $x = 10 - 2y$, so $30 - 6y + y = 15$, giving $y = 3$, $x = 4$. Corner points: $(0, 0)$, $(5, 0)$, $(4, 3)$, $(0, 5)$. Values of $Z$: $0$, $20$, $31$, $25$. The maximum value of $Z$ is $31$, at $x = 4$, $y = 3$.',
    steps: [
      { step: 'Draws both lines and shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the corner points, including the intersection $(4, 3)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corners and states maximum $31$ at $(4, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c03', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the following LPP graphically: minimise $Z = 2x - 5y$ subject to $x + y \\le 7$, $x \\ge 2$, $y \\ge 1$.',
    answer: 'Draw $x + y = 7$, $x = 2$ and $y = 1$. The feasible region lies below $x + y = 7$, to the right of $x = 2$ and above $y = 1$; it is the bounded triangle with corners where these lines meet: $x = 2$ and $y = 1$ give $(2, 1)$; $y = 1$ and $x + y = 7$ give $(6, 1)$; $x = 2$ and $x + y = 7$ give $(2, 5)$. Values of $Z$: at $(2, 1)$, $4 - 5 = -1$; at $(6, 1)$, $12 - 5 = 7$; at $(2, 5)$, $4 - 25 = -21$. The minimum value of $Z$ is $-21$, at $x = 2$, $y = 5$.',
    steps: [
      { step: 'Draws the three lines and identifies the triangular feasible region', marks: 1 },
      { step: 'Finds corner points $(2, 1)$, $(6, 1)$, $(2, 5)$', marks: 1 },
      { step: 'Evaluates $Z$ and states minimum $-21$ at $(2, 5)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c04', chapter: C, topic: GRAPH, type: 'short', complexity: 'medium', marks: 3,
    text: 'Find graphically the maximum and minimum values of $Z = 3x + 4y$ subject to $x + 2y \\ge 4$, $x + y \\le 8$, $y \\le 5$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Draw $x + 2y = 4$ (through $(4, 0)$ and $(0, 2)$), $x + y = 8$ (through $(8, 0)$ and $(0, 8)$) and $y = 5$. The feasible region lies on the side of $x + 2y = 4$ away from the origin, on the origin side of $x + y = 8$, and below $y = 5$, in the first quadrant; it is bounded. The line $y = 5$ meets $x + y = 8$ at $(3, 5)$. Corner points: $(4, 0)$, $(8, 0)$, $(3, 5)$, $(0, 5)$, $(0, 2)$. Values of $Z$: $12$, $24$, $29$, $20$, $8$. Maximum value $29$ at $(3, 5)$; minimum value $8$ at $(0, 2)$.',
    steps: [
      { step: 'Draws the lines and shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the five corner points $(4, 0)$, $(8, 0)$, $(3, 5)$, $(0, 5)$, $(0, 2)$', marks: 1 },
      { step: 'States maximum $29$ at $(3, 5)$ and minimum $8$ at $(0, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c05', chapter: C, topic: GRAPH, type: 'short', complexity: 'hard', marks: 3,
    text: 'Solve the following LPP graphically: maximise $Z = 6x + 3y$ subject to $2x + y \\le 10$, $x + y \\le 7$, $x \\ge 0$, $y \\ge 0$. Also state all the points at which the maximum occurs.',
    answer: 'The line $2x + y = 10$ passes through $(5, 0)$ and $(0, 10)$; the line $x + y = 7$ passes through $(7, 0)$ and $(0, 7)$. Subtracting the equations gives $x = 3$, $y = 4$. The feasible region is bounded with corner points $(0, 0)$, $(5, 0)$, $(3, 4)$, $(0, 7)$. Values of $Z$: $0$, $30$, $30$, $21$. The maximum value $30$ occurs at both $(5, 0)$ and $(3, 4)$. Since these are adjacent corners (both on $2x + y = 10$, and $Z = 3(2x + y)$), the maximum $30$ is attained at every point of the segment joining $(5, 0)$ and $(3, 4)$, that is, infinitely many points.',
    steps: [
      { step: 'Finds the corner points $(0, 0)$, $(5, 0)$, $(3, 4)$, $(0, 7)$', marks: 1 },
      { step: 'Evaluates $Z$ and finds the maximum $30$ at both $(5, 0)$ and $(3, 4)$', marks: 1 },
      { step: 'Concludes the maximum occurs at every point of the segment joining $(5, 0)$ and $(3, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c06', chapter: C, topic: GRAPH, type: 'short', complexity: 'hard', marks: 3,
    text: 'Find graphically the maximum and minimum values of $Z = 3x - y$ subject to $x + y \\ge 3$, $x - y \\le 1$, $y \\le 5$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Draw $x + y = 3$, $x - y = 1$ and $y = 5$. The region lies on the side of $x + y = 3$ away from the origin, on the origin side of $x - y = 1$ (that is, $y \\ge x - 1$), below $y = 5$ and to the right of the $y$-axis; it is bounded. Corner points: $x + y = 3$ and $x - y = 1$ meet at $(2, 1)$; $x - y = 1$ and $y = 5$ meet at $(6, 5)$; $y = 5$ meets the $y$-axis at $(0, 5)$; $x + y = 3$ meets the $y$-axis at $(0, 3)$. Values of $Z$: $(2, 1) \\to 5$, $(6, 5) \\to 13$, $(0, 5) \\to -5$, $(0, 3) \\to -3$. Maximum value $13$ at $(6, 5)$; minimum value $-5$ at $(0, 5)$.',
    steps: [
      { step: 'Identifies the bounded feasible region from the three constraints', marks: 1 },
      { step: 'Finds corner points $(2, 1)$, $(6, 5)$, $(0, 5)$, $(0, 3)$', marks: 1 },
      { step: 'States maximum $13$ at $(6, 5)$ and minimum $-5$ at $(0, 5)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c07', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 3,
    text: 'Solve the following LPP graphically: minimise $Z = 4x + 6y$ subject to $x + 2y \\ge 8$, $3x + 2y \\ge 12$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'The line $x + 2y = 8$ passes through $(8, 0)$ and $(0, 4)$; the line $3x + 2y = 12$ passes through $(4, 0)$ and $(0, 6)$. The origin does not satisfy either inequality, so the feasible region lies away from the origin and is unbounded. Subtracting the equations gives $2x = 4$, so $x = 2$, $y = 3$. Corner points: $(0, 6)$, $(2, 3)$, $(8, 0)$. Values of $Z$: $36$, $26$, $32$. The smallest is $26$. Since the region is unbounded, draw $4x + 6y < 26$: this open half-plane has no point in common with the feasible region. Hence the minimum value of $Z$ is $26$, at $x = 2$, $y = 3$.',
    steps: [
      { step: 'Draws the lines and identifies the unbounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 6)$, $(2, 3)$, $(8, 0)$ and the values of $Z$', marks: 1 },
      { step: 'Checks the half-plane $4x + 6y < 26$ and concludes minimum $26$ at $(2, 3)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c08', chapter: C, topic: UNB, type: 'short', complexity: 'medium', marks: 3,
    text: 'For the LPP with constraints $x + 3y \\ge 6$, $x + y \\ge 4$, $x \\ge 0$, $y \\ge 0$, find graphically the minimum value of $Z = 3x + 5y$. Does $Z$ have a maximum value on this region? Justify.',
    answer: 'The line $x + 3y = 6$ passes through $(6, 0)$ and $(0, 2)$; the line $x + y = 4$ passes through $(4, 0)$ and $(0, 4)$. The feasible region lies away from the origin and is unbounded. Subtracting, $2y = 2$, so $y = 1$, $x = 3$. Corner points: $(0, 4)$, $(3, 1)$, $(6, 0)$. Values of $Z$: $20$, $14$, $18$. The open half-plane $3x + 5y < 14$ has no point in common with the region, so the minimum value is $14$ at $(3, 1)$. There is no maximum: the half-plane $3x + 5y > 20$ has points in the region (for example $(10, 0)$ gives $Z = 30$), and $Z$ grows without limit as $x$ increases.',
    steps: [
      { step: 'Finds the unbounded region and corner points $(0, 4)$, $(3, 1)$, $(6, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ and justifies minimum $14$ at $(3, 1)$ using the half-plane test', marks: 1 },
      { step: 'Explains that $Z$ has no maximum since $3x + 5y > 20$ meets the region', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c09', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'A tailor makes shirts and trousers. A shirt needs 2 hours of cutting and 1 hour of stitching; a pair of trousers needs 1 hour of cutting and 3 hours of stitching. In a day, at most 10 hours of cutting and 15 hours of stitching are available. The profit is Rs 60 per shirt and Rs 80 per pair of trousers. Formulate this as an LPP and solve it graphically to find the number of each to be made for maximum profit.',
    answer: 'Let $x$ shirts and $y$ pairs of trousers be made. Maximise $Z = 60x + 80y$ subject to $2x + y \\le 10$ (cutting), $x + 3y \\le 15$ (stitching), $x \\ge 0$, $y \\ge 0$. The lines meet where $x = 15 - 3y$ and $30 - 6y + y = 10$, giving $y = 4$, $x = 3$. The feasible region is bounded with corner points $(0, 0)$, $(5, 0)$, $(3, 4)$, $(0, 5)$. Values of $Z$: $0$, $300$, $500$, $400$. The maximum profit is Rs 500, by making 3 shirts and 4 pairs of trousers.',
    steps: [
      { step: 'Writes the objective $Z = 60x + 80y$ and constraints $2x + y \\le 10$, $x + 3y \\le 15$, $x, y \\ge 0$', marks: 1 },
      { step: 'Finds corner points $(0, 0)$, $(5, 0)$, $(3, 4)$, $(0, 5)$', marks: 1 },
      { step: 'States maximum profit Rs 500 at 3 shirts and 4 trousers', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-c10', chapter: C, topic: FORM, type: 'short', complexity: 'medium', marks: 3,
    text: 'The feasible region of an LPP is the quadrilateral $OABC$ (including its interior) with $O(0, 0)$, $A(5, 0)$, $B(3, 4)$ and $C(0, 6)$. Write the constraints that describe this region, and hence find the maximum value of $Z = x + 2y$.',
    answer: 'Side $AB$ passes through $(5, 0)$ and $(3, 4)$: slope $= -2$, so $y = -2(x - 5)$, that is, $2x + y = 10$. Side $BC$ passes through $(3, 4)$ and $(0, 6)$: slope $= -\\frac{2}{3}$, so $y = 6 - \\frac{2}{3}x$, that is, $2x + 3y = 18$. The origin lies in the region, so the constraints are $2x + y \\le 10$, $2x + 3y \\le 18$, $x \\ge 0$, $y \\ge 0$. Values of $Z = x + 2y$ at the corners: $O \\to 0$, $A \\to 5$, $B \\to 11$, $C \\to 12$. The maximum value is $12$, at $C(0, 6)$.',
    steps: [
      { step: 'Finds the line $AB$: $2x + y = 10$', marks: 1 },
      { step: 'Finds the line $BC$: $2x + 3y = 18$ and writes all constraints with $\\le$ and $x, y \\ge 0$', marks: 1 },
      { step: 'Evaluates $Z$ at the corners and states maximum $12$ at $(0, 6)$', marks: 1 },
    ],
  },

  // ───────────── Section D (5 marks) ─────────────
  {
    id: 'c12-lpp-d01', chapter: C, topic: GRAPH, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = 3x + 4y$ subject to $x + y \\ge 3$, $2x + y \\le 12$, $x + 2y \\le 12$, $x \\ge 0$, $y \\ge 0$.',
    answer: 'Lines: $x + y = 3$ through $(3, 0)$ and $(0, 3)$; $2x + y = 12$ through $(6, 0)$ and $(0, 12)$; $x + 2y = 12$ through $(12, 0)$ and $(0, 6)$. The origin does not satisfy $x + y \\ge 3$ but satisfies the other two, so the feasible region lies away from the origin for the first line and on the origin side of the other two, in the first quadrant. It is bounded. Intersection of $2x + y = 12$ and $x + 2y = 12$: subtracting gives $x = y$, so $3x = 12$, $x = y = 4$. Corner points: $(3, 0)$, $(6, 0)$, $(4, 4)$, $(0, 6)$, $(0, 3)$. Values of $Z$: $9$, $18$, $28$, $24$, $12$. Since the region is bounded, the maximum value of $Z$ is $28$ at $(4, 4)$ and the minimum value is $9$ at $(3, 0)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the intersection $(4, 4)$ and all five corner points', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $28$ at $(4, 4)$ and minimum $9$ at $(3, 0)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-d02', chapter: C, topic: GRAPH, type: 'long', complexity: 'hard', marks: 5,
    text: 'Solve the following LPP graphically: find the minimum and maximum values of $Z = 3x + 6y$ subject to $x + 2y \\ge 8$, $x + y \\le 10$, $y \\le 6$, $x \\ge 0$, $y \\ge 0$. Comment on the points where the minimum occurs.',
    answer: 'Lines: $x + 2y = 8$ through $(8, 0)$ and $(0, 4)$; $x + y = 10$ through $(10, 0)$ and $(0, 10)$; $y = 6$. The feasible region lies away from the origin for $x + 2y \\ge 8$, on the origin side of $x + y = 10$, below $y = 6$ and in the first quadrant; it is bounded. Corner points: $(8, 0)$; $(10, 0)$; $y = 6$ meets $x + y = 10$ at $(4, 6)$; $(0, 6)$; $(0, 4)$. Values of $Z$: $(8, 0) \\to 24$, $(10, 0) \\to 30$, $(4, 6) \\to 48$, $(0, 6) \\to 36$, $(0, 4) \\to 24$. Maximum value $48$ at $(4, 6)$. Minimum value $24$, attained at both $(8, 0)$ and $(0, 4)$. These are adjacent corners on the line $x + 2y = 8$, and $Z = 3(x + 2y)$, so $Z = 24$ at every point of the segment joining $(8, 0)$ and $(0, 4)$: the minimum occurs at infinitely many points.',
    steps: [
      { step: 'Draws the lines and shades the correct bounded feasible region', marks: 1 },
      { step: 'Finds the corner points $(8, 0)$, $(10, 0)$, $(4, 6)$, $(0, 6)$, $(0, 4)$', marks: 1 },
      { step: 'Evaluates $Z$ at every corner point', marks: 1 },
      { step: 'States maximum $48$ at $(4, 6)$', marks: 1 },
      { step: 'States minimum $24$ at every point of the segment joining $(8, 0)$ and $(0, 4)$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-d03', chapter: C, topic: FORM, type: 'long', complexity: 'medium', marks: 5,
    text: 'A small factory makes table lamps of two kinds, small and large. A small lamp needs 1 hour on the machine and 2 hours of hand finishing; a large lamp needs 2 hours on the machine and 1 hour of hand finishing. Each day at most 16 machine hours and 20 hand-finishing hours are available, and the market can take at most 9 small lamps a day. The profit is Rs 40 on a small lamp and Rs 50 on a large lamp. Formulate this as an LPP and solve it graphically to find how many lamps of each kind should be made daily to maximise profit.',
    answer: 'Let $x$ small and $y$ large lamps be made each day. Maximise $Z = 40x + 50y$ subject to $x + 2y \\le 16$ (machine), $2x + y \\le 20$ (finishing), $x \\le 9$ (demand), $x \\ge 0$, $y \\ge 0$. Lines: $x + 2y = 16$ through $(16, 0)$ and $(0, 8)$; $2x + y = 20$ through $(10, 0)$ and $(0, 20)$; $x = 9$. The feasible region is bounded, on the origin side of all three lines. Corner points: $(0, 0)$; $(9, 0)$; $x = 9$ meets $2x + y = 20$ at $(9, 2)$; $x + 2y = 16$ and $2x + y = 20$ meet at $(8, 4)$ (from $x = 16 - 2y$, $32 - 4y + y = 20$, $y = 4$); $(0, 8)$. Values of $Z$: $0$, $360$, $460$, $520$, $400$. Maximum profit is Rs 520, by making 8 small lamps and 4 large lamps a day.',
    steps: [
      { step: 'Defines the variables and writes the objective $Z = 40x + 50y$', marks: 1 },
      { step: 'Writes the constraints $x + 2y \\le 16$, $2x + y \\le 20$, $x \\le 9$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 0)$, $(9, 0)$, $(9, 2)$, $(8, 4)$, $(0, 8)$', marks: 1 },
      { step: 'Evaluates $Z$ and states maximum profit Rs 520 at 8 small and 4 large lamps', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-d04', chapter: C, topic: FORM, type: 'long', complexity: 'hard', marks: 5,
    text: 'A dealer sells table fans and ceiling fans. A table fan costs him Rs 1200 and a ceiling fan costs Rs 800. He has Rs 48000 to invest and space to store at most 50 fans. He makes a profit of Rs 150 on a table fan and Rs 100 on a ceiling fan. Assuming he can sell all the fans he buys, formulate this as an LPP and solve it graphically. Is the optimal plan unique? Give three different whole-number plans that give the maximum profit.',
    answer: 'Let $x$ table fans and $y$ ceiling fans be bought. Maximise $Z = 150x + 100y$ subject to $1200x + 800y \\le 48000$, that is, $3x + 2y \\le 120$ (investment); $x + y \\le 50$ (storage); $x \\ge 0$, $y \\ge 0$. Lines: $3x + 2y = 120$ through $(40, 0)$ and $(0, 60)$; $x + y = 50$ through $(50, 0)$ and $(0, 50)$. Solving them: $3x + 2y = 120$ and $2x + 2y = 100$ give $x = 20$, $y = 30$. The feasible region is bounded with corner points $(0, 0)$, $(40, 0)$, $(20, 30)$, $(0, 50)$. Values of $Z$: $0$, $6000$, $6000$, $5000$. The maximum profit is Rs 6000, attained at both $(40, 0)$ and $(20, 30)$. Since $Z = 50(3x + 2y)$ is parallel to the investment line, every point of the segment joining $(40, 0)$ and $(20, 30)$ gives Rs 6000, so the optimal plan is not unique. Whole-number examples: 40 table fans and 0 ceiling fans; 30 table fans and 15 ceiling fans; 20 table fans and 30 ceiling fans.',
    steps: [
      { step: 'Writes the objective $Z = 150x + 100y$ and constraints $3x + 2y \\le 120$, $x + y \\le 50$, $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the bounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 0)$, $(40, 0)$, $(20, 30)$, $(0, 50)$', marks: 1 },
      { step: 'Evaluates $Z$ and finds maximum Rs 6000 at $(40, 0)$ and $(20, 30)$', marks: 1 },
      { step: 'Explains the optimum is not unique and gives three valid whole-number plans on the segment', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-d05', chapter: C, topic: UNB, type: 'long', complexity: 'hard', marks: 5,
    text: 'A dietician mixes two foods X and Y. One kg of X contains 4 units of protein, 1 unit of fibre and 1 unit of vitamins; one kg of Y contains 2 units of protein, 2 units of fibre and 4 units of vitamins. The mixture must contain at least 16 units of protein, 10 units of fibre and 12 units of vitamins. Food X costs Rs 30 per kg and food Y costs Rs 50 per kg. Formulate an LPP to minimise the cost of the mixture and solve it graphically.',
    answer: 'Let the mixture contain $x$ kg of X and $y$ kg of Y. Minimise $Z = 30x + 50y$ subject to $4x + 2y \\ge 16$ (or $2x + y \\ge 8$), $x + 2y \\ge 10$, $x + 4y \\ge 12$, $x \\ge 0$, $y \\ge 0$. Lines: $2x + y = 8$ through $(4, 0)$ and $(0, 8)$; $x + 2y = 10$ through $(10, 0)$ and $(0, 5)$; $x + 4y = 12$ through $(12, 0)$ and $(0, 3)$. The origin satisfies none of the inequalities, so the feasible region lies away from the origin and is unbounded. Corner points: $(0, 8)$; $2x + y = 8$ and $x + 2y = 10$ meet at $(2, 4)$; $x + 2y = 10$ and $x + 4y = 12$ meet at $(8, 1)$; $(12, 0)$. Values of $Z$: $400$, $260$, $290$, $360$. The smallest is $260$. Since the region is unbounded, check the open half-plane $30x + 50y < 260$: it has no point in common with the feasible region. Hence the minimum cost is Rs 260, using 2 kg of X and 4 kg of Y.',
    steps: [
      { step: 'Writes the objective $Z = 30x + 50y$ and the three constraints with $x, y \\ge 0$', marks: 1 },
      { step: 'Draws the lines and shades the unbounded feasible region', marks: 1 },
      { step: 'Finds corner points $(0, 8)$, $(2, 4)$, $(8, 1)$, $(12, 0)$', marks: 1 },
      { step: 'Evaluates $Z$ at the corner points', marks: 1 },
      { step: 'Uses the half-plane test and states minimum cost Rs 260 at $x = 2$, $y = 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-lpp-d06', chapter: C, topic: GRAPH, type: 'long', complexity: 'medium', marks: 5,
    text: 'Solve the following LPP graphically: find the maximum and minimum values of $Z = x + 3y$ subject to $x + y \\le 12$, $x \\ge 2y$, $y \\ge 2$, $x \\ge 0$.',
    answer: 'Lines: $x + y = 12$ through $(12, 0)$ and $(0, 12)$; $x = 2y$ through $(0, 0)$ and $(8, 4)$; $y = 2$. The region lies on the origin side of $x + y = 12$, on or below the line $x = 2y$ (where $x \\ge 2y$, for example $(4, 1)$ satisfies it), and above $y = 2$. It is the bounded triangle with corners: $y = 2$ and $x = 2y$ meet at $(4, 2)$; $y = 2$ and $x + y = 12$ meet at $(10, 2)$; $x = 2y$ and $x + y = 12$ meet where $3y = 12$, at $(8, 4)$. Values of $Z$: $(4, 2) \\to 10$, $(10, 2) \\to 16$, $(8, 4) \\to 20$. Maximum value $20$ at $(8, 4)$; minimum value $10$ at $(4, 2)$.',
    steps: [
      { step: 'Draws the three lines correctly', marks: 1 },
      { step: 'Identifies the correct side of $x = 2y$ and shades the triangular region', marks: 1 },
      { step: 'Finds the corner points $(4, 2)$, $(10, 2)$, $(8, 4)$', marks: 1 },
      { step: 'Evaluates $Z$ at each corner point', marks: 1 },
      { step: 'States maximum $20$ at $(8, 4)$ and minimum $10$ at $(4, 2)$', marks: 1 },
    ],
  },

  // ───────────── Section E (4-mark case studies) ─────────────
  {
    id: 'c12-lpp-e01', chapter: C, topic: UNB, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A farmer is preparing his field and needs at least 16 kg of nitrogen and at least 12 kg of phosphate. He can buy two fertilisers. A bag of fertiliser F1 contains 2 kg of nitrogen and 3 kg of phosphate and costs Rs 500. A bag of fertiliser F2 contains 4 kg of nitrogen and 2 kg of phosphate and costs Rs 400. He buys $x$ bags of F1 and $y$ bags of F2 and wants to keep the cost as low as possible.',
    answer: '(i) $x + 2y \\ge 8$, $3x + 2y \\ge 12$, $x, y \\ge 0$. (ii) $(0, 6)$, $(2, 3)$, $(8, 0)$. (iii) Minimum cost Rs 2200 with 2 bags of F1 and 3 bags of F2. OR: minimum cost Rs 2400 with 6 bags of F2 only.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the constraints of the problem in their simplest form.',
        answer: 'Nitrogen: $2x + 4y \\ge 16$, that is, $x + 2y \\ge 8$. Phosphate: $3x + 2y \\ge 12$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the corner points of the feasible region.',
        answer: 'The line $x + 2y = 8$ meets the axes at $(8, 0)$ and $(0, 4)$; $3x + 2y = 12$ meets them at $(4, 0)$ and $(0, 6)$. Subtracting, $2x = 4$, so the lines meet at $(2, 3)$. The feasible region (away from the origin) is unbounded with corner points $(0, 6)$, $(2, 3)$ and $(8, 0)$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the minimum cost and the number of bags of each fertiliser he should buy.\nOR\nIf the price of a bag of F1 rises to Rs 700 (F2 unchanged), find the new minimum cost and the purchase that gives it.',
        answer: 'Cost $Z = 500x + 400y$. At $(0, 6)$: $2400$; at $(2, 3)$: $1000 + 1200 = 2200$; at $(8, 0)$: $4000$. The open half-plane $500x + 400y < 2200$ has no point in common with the unbounded region, so the minimum cost is Rs 2200, buying 2 bags of F1 and 3 bags of F2.\nOR: Now $Z = 700x + 400y$. At $(0, 6)$: $2400$; at $(2, 3)$: $1400 + 1200 = 2600$; at $(8, 0)$: $5600$. The half-plane $700x + 400y < 2400$ has no point in common with the region, so the minimum cost is Rs 2400, buying 6 bags of F2 and none of F1.',
      },
    ],
  },
  {
    id: 'c12-lpp-e02', chapter: C, topic: FORM, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A craftsman makes wooden toy cars and toy boats. Each car needs 3 hours of carving and 1 hour of painting; each boat needs 2 hours of carving and 2 hours of painting. In a week he has at most 36 hours for carving and 20 hours for painting. He earns a profit of Rs 90 on each car and Rs 80 on each boat. Let $x$ be the number of cars and $y$ the number of boats made in a week.',
    answer: '(i) $Z = 90x + 80y$. (ii) $3x + 2y \\le 36$, $x + 2y \\le 20$, $x, y \\ge 0$. (iii) Corners $(0, 0)$, $(12, 0)$, $(8, 6)$, $(0, 10)$; maximum profit Rs 1200 with 8 cars and 6 boats. OR: maximum profit Rs 2000 with 10 boats and no cars.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the objective function for maximising the weekly profit.',
        answer: 'Maximise $Z = 90x + 80y$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the constraints of the problem.',
        answer: 'Carving: $3x + 2y \\le 36$. Painting: $x + 2y \\le 20$. Also $x \\ge 0$, $y \\ge 0$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the corner points of the feasible region and the maximum weekly profit.\nOR\nIf the profit on a boat rises to Rs 200 (profit on a car unchanged), find the new maximum weekly profit and how many of each toy he should make.',
        answer: 'The lines $3x + 2y = 36$ and $x + 2y = 20$ meet where $2x = 16$, at $(8, 6)$. The bounded feasible region has corner points $(0, 0)$, $(12, 0)$, $(8, 6)$, $(0, 10)$. $Z = 90x + 80y$ gives $0$, $1080$, $1200$, $800$. Maximum profit is Rs 1200, making 8 cars and 6 boats.\nOR: With $Z = 90x + 200y$, the corner values are $0$, $1080$, $720 + 1200 = 1920$ and $2000$. Maximum profit is Rs 2000, making 10 boats and no cars.',
      },
    ],
  },
  {
    id: 'c12-lpp-e03', chapter: C, topic: GRAPH, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery company plans its daily loads. For $x$ large parcels and $y$ small parcels, the feasible region of its LPP is the quadrilateral (with its interior) whose corners are $O(0, 0)$, $P(8, 0)$, $Q(6, 4)$ and $R(0, 7)$. Side $PQ$ comes from a weight limit and side $QR$ from a volume limit.',
    answer: '(i) $2x + y \\le 16$ and $x + 2y \\le 14$ (with $x, y \\ge 0$). (ii) No, $(7, 3)$ breaks the weight limit since $2(7) + 3 = 17 > 16$. (iii) Maximum of $Z = 3x + 4y$ is $34$ at $Q(6, 4)$. OR: $p = 2q$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the two non-trivial constraints that describe this region.',
        answer: '$PQ$ passes through $(8, 0)$ and $(6, 4)$ with slope $-2$: $y = -2(x - 8)$, that is, $2x + y = 16$. $QR$ passes through $(6, 4)$ and $(0, 7)$ with slope $-\\frac{1}{2}$: $x + 2y = 14$. The origin is in the region, so the constraints are $2x + y \\le 16$ and $x + 2y \\le 14$ (with $x, y \\ge 0$).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is the plan of 7 large and 3 small parcels feasible? Justify.',
        answer: 'No. $2(7) + 3 = 17 > 16$, so the weight constraint is broken, even though $7 + 2(3) = 13 \\le 14$ satisfies the volume constraint.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find the maximum value of $Z = 3x + 4y$ on this region and where it occurs.\nOR\nIf $Z = px + qy$ (with $p, q > 0$) has its maximum at both $P$ and $Q$, find the relation between $p$ and $q$.',
        answer: 'At $O$: $0$; at $P$: $24$; at $Q$: $18 + 16 = 34$; at $R$: $28$. The region is bounded, so the maximum value is $34$ at $Q(6, 4)$.\nOR: $Z(P) = Z(Q)$ gives $8p = 6p + 4q$, so $p = 2q$. (Then $Z(P) = 16q$ exceeds $Z(R) = 7q$, so this common value is indeed the maximum.)',
      },
    ],
  },
];
