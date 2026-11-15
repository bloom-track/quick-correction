import type { Class12Question } from './types.js';

export const CH12_LPP_R4: Class12Question[] = [
  {
    "id": "c12-lpp-r4-a01",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "A tutor spends 45 minutes on each Mathematics lesson and 20 minutes on each Physics lesson. She can teach for at most 6 hours a day. If she gives $x$ Mathematics and $y$ Physics lessons, this condition is",
    "options": [
      "$9x + 4y \\le 72$",
      "$45x + 20y \\le 6$",
      "$9x + 4y \\ge 72$",
      "$4x + 9y \\le 72$"
    ],
    "answer": "Correct option: A) $9x + 4y \\le 72$. Six hours is 360 minutes, so $45x + 20y \\le 360$, which becomes $9x + 4y \\le 72$ on dividing by 5. Option B forgets to convert hours to minutes, C reverses the inequality and D swaps the two times."
  },
  {
    "id": "c12-lpp-r4-a02",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "A trader sells item P for Rs 90 (it costs him Rs 60) and item Q for Rs 70 (it costs him Rs 45). If he sells $x$ units of P and $y$ units of Q, the objective function for maximising his profit is",
    "options": [
      "$Z = 30x + 25y$",
      "$Z = 90x + 70y$",
      "$Z = 60x + 45y$",
      "$Z = 150x + 115y$"
    ],
    "answer": "Correct option: A) $Z = 30x + 25y$. Profit per unit is selling price minus cost: $90 - 60 = 30$ for P and $70 - 45 = 25$ for Q. Option B is the revenue, C is the cost and D adds cost and price."
  },
  {
    "id": "c12-lpp-r4-a03",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "A tour company uses $x$ mini-vans of 8 seats and $y$ buses of 30 seats to carry at least 150 passengers, and it can use at most 12 vehicles in all. The constraints (apart from $x, y \\ge 0$) are",
    "options": [
      "$8x + 30y \\ge 150$, $x + y \\le 12$",
      "$8x + 30y \\le 150$, $x + y \\ge 12$",
      "$30x + 8y \\ge 150$, $x + y \\le 12$",
      "$8x + 30y \\ge 150$, $x + y \\ge 12$"
    ],
    "answer": "Correct option: A) $8x + 30y \\ge 150$, $x + y \\le 12$. The seats give $8x + 30y$, which must be at least 150, and the vehicle count $x + y$ must be at most 12. Option B reverses both inequalities, C swaps the seat numbers and D reverses the vehicle limit."
  },
  {
    "id": "c12-lpp-r4-a04",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "Which of the following points lies in the feasible region determined by $2x + 3y \\le 12$, $x - y \\ge 1$, $x \\ge 0$, $y \\ge 0$?",
    "options": [
      "$(1, 3)$",
      "$(4, 2)$",
      "$(2, 3)$",
      "$(3, 1)$"
    ],
    "answer": "Correct option: D) $(3, 1)$, since $2(3) + 3(1) = 9 \\le 12$ and $3 - 1 = 2 \\ge 1$. The point $(1, 3)$ gives $x - y = -2 < 1$, $(4, 2)$ gives $2x + 3y = 14 > 12$, and $(2, 3)$ fails both ($x - y = -1$ and $2x + 3y = 13$)."
  },
  {
    "id": "c12-lpp-r4-a05",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The number of corner points of the feasible region determined by $x \\le y$, $x + y \\le 8$, $y \\le 6$, $x \\ge 0$ is",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "Correct option: B) 4. The boundary lines meet the feasible region at $(0, 0)$ (where $x = 0$ meets $x = y$), $(4, 4)$ (where $x = y$ meets $x + y = 8$), $(2, 6)$ (where $x + y = 8$ meets $y = 6$) and $(0, 6)$ (where $y = 6$ meets $x = 0$), so the region is a quadrilateral with 4 corner points."
  },
  {
    "id": "c12-lpp-r4-a06",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The corner points of the bounded feasible region of an LPP are $(0, 0)$, $(6, 0)$, $(4, 4)$ and $(0, 6)$. The maximum value of $Z = 2x + 5y$ is",
    "options": [
      "28",
      "30",
      "12",
      "38"
    ],
    "answer": "Correct option: B) 30. The values of $Z$ at the corner points are $0$, $12$, $28$ and $30$ respectively, and the largest is $30$, at $(0, 6)$. Option A is the value at $(4, 4)$ and C is the value at $(6, 0)$."
  },
  {
    "id": "c12-lpp-r4-a07",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The objective function $Z = 4x + ky$ takes the same value at the corner points $(2, 3)$ and $(5, 1)$ of a feasible region. Then $k$ equals",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "answer": "Correct option: C) 6. Equal values give $4(2) + 3k = 4(5) + k$, so $8 + 3k = 20 + k$, hence $2k = 12$ and $k = 6$. Both values are then $26$."
  },
  {
    "id": "c12-lpp-r4-a08",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The feasible region determined by $3x + y \\ge 9$, $x + 2y \\ge 8$, $x \\ge 0$, $y \\ge 0$ is unbounded with corner points $(0, 9)$, $(2, 3)$ and $(8, 0)$. The minimum value of $Z = 2x + 3y$ is",
    "options": [
      "13",
      "16",
      "27",
      "15"
    ],
    "answer": "Correct option: A) 13. The corner values are $27$ at $(0, 9)$, $13$ at $(2, 3)$ and $16$ at $(8, 0)$, so the smallest corner value is $13$. It is the minimum because $2x + 3y = \\tfrac{1}{5}(3x + y) + \\tfrac{7}{5}(x + 2y) \\ge \\tfrac{9}{5} + \\tfrac{56}{5} = 13$ for every point of the region, so the half-plane $2x + 3y < 13$ has no point in common with it. Options B and C are the values at the other corners."
  },
  {
    "id": "c12-lpp-r4-a09",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "A boundary line passes through the points $(0, 5)$ and $(4, 0)$. The inequality representing the half-plane bounded by this line that contains the origin is",
    "options": [
      "$5x + 4y \\le 20$",
      "$5x + 4y \\ge 20$",
      "$4x + 5y \\le 20$",
      "$4x + 5y \\ge 20$"
    ],
    "answer": "Correct option: A) $5x + 4y \\le 20$. The line with intercepts $4$ and $5$ is $\\dfrac{x}{4} + \\dfrac{y}{5} = 1$, i.e. $5x + 4y = 20$. At the origin $5(0) + 4(0) = 0 < 20$, so the origin lies on the \"$\\le$\" side. Options C and D swap the intercepts and B takes the wrong side."
  },
  {
    "id": "c12-lpp-r4-a10",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "A point of the feasible region of an LPP at which the objective function has its greatest (or least) value is called",
    "options": [
      "an optimal solution",
      "an infeasible solution",
      "a constraint",
      "a decision variable"
    ],
    "answer": "Correct option: A) an optimal solution. It is a feasible point at which the objective function attains its maximum (or minimum) value. A constraint is a condition, a decision variable is $x$ or $y$ itself, and an infeasible solution is a point outside the feasible region."
  },
  {
    "id": "c12-lpp-r4-a11",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "mcq",
    "complexity": "hard",
    "marks": 1,
    "text": "The feasible region of an LPP is given by $y \\ge x$, $x \\ge 0$, $y \\ge 0$. The maximum value of $Z = x - 2y$ on this region is",
    "options": [
      "0",
      "2",
      "$-2$",
      "Z has no maximum value"
    ],
    "answer": "Correct option: A) 0. For every point of the region $y \\ge x \\ge 0$, so $Z = x - 2y \\le x - 2x = -x \\le 0$, and $Z = 0$ at the corner point $(0, 0)$. So the maximum exists even though the region is unbounded; the answer is $0$."
  },
  {
    "id": "c12-lpp-r4-a12",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "Minimise $Z = 3x + 2y$ subject to $x + y = 10$, $x \\le 7$, $y \\le 8$, $x \\ge 0$, $y \\ge 0$. The minimum value of $Z$ is",
    "options": [
      "22",
      "27",
      "20",
      "30"
    ],
    "answer": "Correct option: A) 22. The feasible region is the segment of $x + y = 10$ between $(2, 8)$ (where $y = 8$) and $(7, 3)$ (where $x = 7$). $Z = 22$ at $(2, 8)$ and $Z = 27$ at $(7, 3)$, so the minimum is $22$ and the maximum is $27$."
  },
  {
    "id": "c12-lpp-r4-a13",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "A student buys $x$ pencils at Rs 3 each and $y$ pens at Rs 8 each. She spends at most Rs 120 and buys at least 5 more pencils than pens. The constraints (apart from $x, y \\ge 0$) are",
    "options": [
      "$3x + 8y \\le 120$, $x \\ge y + 5$",
      "$3x + 8y \\le 120$, $y \\ge x + 5$",
      "$3x + 8y \\ge 120$, $x \\ge y + 5$",
      "$8x + 3y \\le 120$, $x \\ge y + 5$"
    ],
    "answer": "Correct option: A) $3x + 8y \\le 120$, $x \\ge y + 5$. The spending is $3x + 8y$ and must not exceed 120, and \"at least 5 more pencils than pens\" means $x \\ge y + 5$. Option B reverses the roles of pencils and pens, C reverses the budget inequality and D swaps the prices."
  },
  {
    "id": "c12-lpp-r4-a14",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): The feasible region of a linear programming problem is a convex set.\nReason (R): Each constraint of an LPP represents a half-plane (or a line), and the intersection of convex sets is a convex set.",
    "options": [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "answer": "Correct option: A) Both A and R are true and R is the correct explanation of A. The feasible region is the common part of half-planes and lines, each of which is convex, and an intersection of convex sets is convex, which is exactly why A holds."
  },
  {
    "id": "c12-lpp-r4-a15",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): In an LPP, a constraint can never be a linear equation; every constraint must be a linear inequality.\nReason (R): The constraints of an LPP are linear inequalities or linear equations in the decision variables.",
    "options": [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "answer": "Correct option: D) A is false but R is true. An LPP may have constraints that are linear equations (for example $x + y = 10$), as R says, so A is false."
  },
  {
    "id": "c12-lpp-r4-b01",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "A caterer prepares $x$ trays of sweets and $y$ trays of snacks for an event. A tray of sweets needs 3 kg of flour and a tray of snacks needs 2 kg, and at most 60 kg of flour is available. At least 5 trays of sweets must be made, and the total number of trays cannot exceed 25. The profit is Rs 400 per tray of sweets and Rs 300 per tray of snacks. Formulate the problem as a linear programming problem to maximise the profit. (Do not solve it.)",
    "answer": "Maximise $Z = 400x + 300y$ subject to $3x + 2y \\le 60$ (flour), $x \\ge 5$ (at least 5 trays of sweets), $x + y \\le 25$ (total trays), $x \\ge 0$, $y \\ge 0$.",
    "steps": [
      {
        "step": "Objective function $Z = 400x + 300y$, to be maximised, with $x$ and $y$ defined",
        "marks": 1
      },
      {
        "step": "Constraints $3x + 2y \\le 60$, $x \\ge 5$, $x + y \\le 25$ and $y \\ge 0$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-b02",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "An NGO packs $x$ small kits and $y$ large kits for flood relief. A small kit contains 2 blankets and a large kit contains 5 blankets, and only 120 blankets are in stock. The number of large kits must not exceed half the number of small kits, and at least 20 kits must be packed in all. Write the constraints, and check whether packing 30 small kits and 12 large kits is a feasible plan.",
    "answer": "The constraints are $2x + 5y \\le 120$ (blankets), $y \\le \\tfrac{x}{2}$, i.e. $x - 2y \\ge 0$, and $x + y \\ge 20$, with $x, y \\ge 0$. For $(30, 12)$: $2(30) + 5(12) = 120 \\le 120$, $30 - 2(12) = 6 \\ge 0$ and $30 + 12 = 42 \\ge 20$, so all constraints hold and the plan is feasible (it uses exactly all 120 blankets).",
    "steps": [
      {
        "step": "Constraints $2x + 5y \\le 120$, $x - 2y \\ge 0$, $x + y \\ge 20$, $x, y \\ge 0$",
        "marks": 1
      },
      {
        "step": "Substituting $(30, 12)$ in each constraint and concluding that the plan is feasible",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-b03",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find the corner points of the feasible region determined by $3x + 2y \\le 24$, $y \\le x + 2$, $x + y \\ge 4$, $x \\ge 0$, $y \\ge 0$.",
    "answer": "Taking the boundary lines in pairs and keeping only the points that satisfy every constraint: $y = x + 2$ meets $x + y = 4$ at $(1, 3)$; $x + y = 4$ meets $y = 0$ at $(4, 0)$; $3x + 2y = 24$ meets $y = 0$ at $(8, 0)$; $y = x + 2$ meets $3x + 2y = 24$ at $(4, 6)$ (from $3x + 2x + 4 = 24$). The other intersections, such as the $y$-axis with $y = x + 2$ at $(0, 2)$, fail $x + y \\ge 4$. So the corner points are $(1, 3)$, $(4, 0)$, $(8, 0)$ and $(4, 6)$.",
    "steps": [
      {
        "step": "Finding the intersections of the relevant pairs of boundary lines",
        "marks": 1
      },
      {
        "step": "Rejecting infeasible intersections and stating the corner points $(1, 3)$, $(4, 0)$, $(8, 0)$, $(4, 6)$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-b04",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "The bounded feasible region of an LPP has corner points $(0, 0)$, $(6, 0)$, $(4, 4)$ and $(0, 5)$. A student claims that the maximum value of $Z = 3x + 2y$ is $15$, because $Z = 15$ at the point $(3, 3)$, which lies inside the region. Use the corner point method to show that the claim is wrong and find the correct maximum.",
    "answer": "The point $(3, 3)$ lies inside the quadrilateral, but the maximum of a linear objective function on a bounded region occurs at a corner point. The corner values are $Z(0, 0) = 0$, $Z(6, 0) = 18$, $Z(4, 4) = 20$ and $Z(0, 5) = 10$. Since $20 > 15$ (and even $18 > 15$), $15$ is not the maximum. The correct maximum value is $20$, at $(4, 4)$.",
    "steps": [
      {
        "step": "Evaluating $Z$ at all four corner points: $0$, $18$, $20$, $10$",
        "marks": 1
      },
      {
        "step": "Concluding that the maximum is $20$ at $(4, 4)$, which is larger than $15$, so the claim is wrong",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-b05",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find the minimum value of $Z = 5x + 4y$ subject to $x + 2y \\ge 6$, $x \\ge 0$, $y \\ge 0$. Justify that it is the minimum by examining the half-plane $5x + 4y < m$, where $m$ is the least corner value.",
    "answer": "The region is unbounded with corner points $(6, 0)$ and $(0, 3)$. $Z(6, 0) = 30$ and $Z(0, 3) = 12$, so $m = 12$. The half-plane $5x + 4y < 12$ has no point in common with the region, because $5x + 4y = 2(x + 2y) + 3x \\ge 2(6) + 0 = 12$ for every feasible point. Hence the minimum value of $Z$ is $12$, at $(0, 3)$.",
    "steps": [
      {
        "step": "Corner points $(6, 0)$ and $(0, 3)$ with values $30$ and $12$",
        "marks": 1
      },
      {
        "step": "Showing that $5x + 4y < 12$ has no common point with the region, so the minimum is $12$ at $(0, 3)$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-b06",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "The feasible region of an LPP is given by $y \\le 2x$, $x \\ge 0$, $y \\ge 0$. Find its corner point. Show that $Z = 2x - y$ has a minimum value but no maximum value on this region.",
    "answer": "The lines $x = 0$, $y = 0$ and $y = 2x$ all meet at $(0, 0)$, so the region is an unbounded wedge between the $x$-axis and the line $y = 2x$ with the single corner point $(0, 0)$, where $Z = 0$. The half-plane $Z < 0$ is $2x - y < 0$, i.e. $y > 2x$, which has no point in common with the region, so the minimum value is $0$. For the maximum, the points $(t, 0)$ with $t > 0$ are feasible and give $Z = 2t$, which can be made as large as we like, so $Z$ has no maximum.",
    "steps": [
      {
        "step": "Corner point $(0, 0)$ with $Z = 0$, and showing $2x - y < 0$ has no common point with the region, so the minimum is $0$",
        "marks": 1
      },
      {
        "step": "Points $(t, 0)$ give $Z = 2t$ without bound, so there is no maximum",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c01",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A tea blender mixes grade A tea (Rs 300 per kg, 6 units of aroma per kg) with grade B tea (Rs 200 per kg, 2 units of aroma per kg). The blend must weigh at least 40 kg and carry at least 160 units of aroma, and at most 30 kg of grade A is available. Formulate the LPP to minimise the cost of the blend, and check whether a blend of 20 kg of A and 25 kg of B is feasible; if it is, find its cost.",
    "answer": "Let the blend contain $x$ kg of grade A and $y$ kg of grade B. Minimise $Z = 300x + 200y$ subject to $x + y \\ge 40$ (weight), $6x + 2y \\ge 160$, i.e. $3x + y \\ge 80$ (aroma), $x \\le 30$ (availability of A), $x \\ge 0$, $y \\ge 0$. For $(20, 25)$: $x + y = 45 \\ge 40$, $3(20) + 25 = 85 \\ge 80$ and $20 \\le 30$, so the blend is feasible. Its cost is $300(20) + 200(25) = 6000 + 5000 = 11000$ rupees.",
    "steps": [
      {
        "step": "Defining the variables and the objective function $Z = 300x + 200y$ (minimise)",
        "marks": 1
      },
      {
        "step": "Constraints $x + y \\ge 40$, $3x + y \\ge 80$, $x \\le 30$, $x, y \\ge 0$",
        "marks": 1
      },
      {
        "step": "Checking $(20, 25)$ in all constraints and finding the cost Rs 11000",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c02",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A workshop makes $x$ tables and $y$ shelves a week. A table needs 4 hours of carpentry and 6 board-feet of timber; a shelf needs 2 hours of carpentry and 4 board-feet of timber. At most 160 carpentry hours and 240 board-feet of timber are available. Shelves must be at least 20% of all the pieces made. The profit is Rs 900 per table and Rs 500 per shelf. Formulate the LPP to maximise profit. Of the plans $(30, 5)$ and $(24, 8)$, which is feasible? Find the profit of the feasible plan.",
    "answer": "Maximise $Z = 900x + 500y$ subject to $4x + 2y \\le 160$, i.e. $2x + y \\le 80$ (carpentry); $6x + 4y \\le 240$, i.e. $3x + 2y \\le 120$ (timber); $y \\ge 0.2(x + y)$, i.e. $0.8y \\ge 0.2x$, i.e. $x \\le 4y$ (shelves at least 20%); $x, y \\ge 0$. For $(30, 5)$: $x \\le 4y$ needs $30 \\le 20$, which is false, so it is not feasible. For $(24, 8)$: $2x + y = 56 \\le 80$, $3x + 2y = 88 \\le 120$ and $24 \\le 32$, so it is feasible. Its profit is $900(24) + 500(8) = 21600 + 4000 = 25600$ rupees.",
    "steps": [
      {
        "step": "Objective function $Z = 900x + 500y$",
        "marks": 1
      },
      {
        "step": "Constraints $2x + y \\le 80$, $3x + 2y \\le 120$, $x \\le 4y$, $x, y \\ge 0$ (the last non-trivial one from $y \\ge 0.2(x + y)$)",
        "marks": 1
      },
      {
        "step": "Showing $(30, 5)$ is infeasible, $(24, 8)$ is feasible, and its profit is Rs 25600",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c03",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A firm makes products P and Q. Each unit of P needs 2 hours on machine M1, 1 hour on M2 and 1 hour on M3. Each unit of Q needs 1 hour on M1, 3 hours on M2 and 1 hour on M3. In a week M1, M2 and M3 can run for at most 40, 45 and 22 hours respectively. The profit is Rs 700 per unit of P and Rs 900 per unit of Q. Formulate the LPP to maximise profit. Show that the plan of 18 units of P and 4 of Q is feasible, and say which machines are used for their full available time.",
    "answer": "Let the firm make $x$ units of P and $y$ units of Q. Maximise $Z = 700x + 900y$ subject to $2x + y \\le 40$ (M1), $x + 3y \\le 45$ (M2), $x + y \\le 22$ (M3), $x \\ge 0$, $y \\ge 0$. For $(18, 4)$: M1 time $= 36 + 4 = 40 \\le 40$, M2 time $= 18 + 12 = 30 \\le 45$ and M3 time $= 18 + 4 = 22 \\le 22$, so the plan is feasible. M1 (40 hours) and M3 (22 hours) are used for their full time; M2 has 15 hours unused.",
    "steps": [
      {
        "step": "Objective function $Z = 700x + 900y$ with variables defined",
        "marks": 1
      },
      {
        "step": "Constraints $2x + y \\le 40$, $x + 3y \\le 45$, $x + y \\le 22$, $x, y \\ge 0$",
        "marks": 1
      },
      {
        "step": "Machine times $40$, $30$, $22$ for $(18, 4)$: feasible, with M1 and M3 fully used",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c04",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find the maximum value of $Z = 4x + 3y$ subject to $x + 2y \\le 14$, $3x + y \\le 18$, $y - x \\le 5$, $x \\ge 0$, $y \\ge 0$.",
    "answer": "The boundary lines meet the feasible region at $O(0, 0)$, $A(6, 0)$ (where $3x + y = 18$ meets $y = 0$), $B\\left(\\tfrac{22}{5}, \\tfrac{24}{5}\\right)$ (where $3x + y = 18$ meets $x + 2y = 14$), $C\\left(\\tfrac{4}{3}, \\tfrac{19}{3}\\right)$ (where $x + 2y = 14$ meets $y = x + 5$) and $D(0, 5)$ (where $y = x + 5$ meets $x = 0$). The values of $Z$ are $0$, $24$, $\\tfrac{88}{5} + \\tfrac{72}{5} = 32$, $\\tfrac{16}{3} + 19 = \\tfrac{73}{3}$ and $15$. The maximum value of $Z$ is $32$, at $\\left(\\tfrac{22}{5}, \\tfrac{24}{5}\\right)$.",
    "steps": [
      {
        "step": "Corner points $O$, $A$, $D$ from the axes and the lines",
        "marks": 1
      },
      {
        "step": "Corner points $B\\left(\\tfrac{22}{5}, \\tfrac{24}{5}\\right)$ and $C\\left(\\tfrac{4}{3}, \\tfrac{19}{3}\\right)$ by solving pairs of equations",
        "marks": 1
      },
      {
        "step": "$Z$ at each corner point and the maximum $32$ at $B$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c05",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find graphically the maximum and minimum values of $Z = 4x + y$ subject to $x + y \\ge 6$, $y \\le 2x$, $x \\le 9$, $x \\ge 0$, $y \\ge 0$.",
    "answer": "The feasible region lies on or above the line $x + y = 6$, on or below the line $y = 2x$, to the left of $x = 9$ and above the $x$-axis. Its corner points are $(2, 4)$ (where $y = 2x$ meets $x + y = 6$), $(6, 0)$ (where $x + y = 6$ meets the $x$-axis), $(9, 0)$ and $(9, 18)$ (where $x = 9$ meets $y = 2x$). The values of $Z = 4x + y$ are $12$, $24$, $36$ and $54$ respectively. Hence the maximum value is $54$ at $(9, 18)$ and the minimum value is $12$ at $(2, 4)$.",
    "steps": [
      {
        "step": "Reading the region from the constraints and finding its corner points $(2, 4)$, $(6, 0)$, $(9, 0)$, $(9, 18)$",
        "marks": 2
      },
      {
        "step": "Values of $Z$ at the corners, giving maximum $54$ and minimum $12$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c06",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find graphically the maximum and minimum values of $Z = 3x + 5y$ subject to $5x + 2y \\le 40$, $x + y \\le 10$, $x \\ge 2$, $y \\ge 0$.",
    "answer": "The corner points are $(2, 0)$, $(8, 0)$ (where $5x + 2y = 40$ meets the $x$-axis), $\\left(\\tfrac{20}{3}, \\tfrac{10}{3}\\right)$ (where $5x + 2y = 40$ meets $x + y = 10$) and $(2, 8)$ (where $x = 2$ meets $x + y = 10$). The values of $Z$ are $6$, $24$, $20 + \\tfrac{50}{3} = \\tfrac{110}{3} \\approx 36.7$ and $6 + 40 = 46$. The maximum value is $46$ at $(2, 8)$ and the minimum value is $6$ at $(2, 0)$.",
    "steps": [
      {
        "step": "Corner points $(2, 0)$, $(8, 0)$, $(2, 8)$",
        "marks": 1
      },
      {
        "step": "Corner point $\\left(\\tfrac{20}{3}, \\tfrac{10}{3}\\right)$ from the two slanting lines (and checking that it is feasible)",
        "marks": 1
      },
      {
        "step": "Values of $Z$ and the maximum $46$ and minimum $6$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c07",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find graphically the maximum and minimum values of $Z = 4x - 5y$ subject to $2x + y \\le 16$, $x + 2y \\le 14$, $x + y \\ge 5$, $x \\ge 0$, $y \\ge 0$.",
    "answer": "The corner points are $(5, 0)$ and $(0, 5)$ (on the line $x + y = 5$), $(8, 0)$ (where $2x + y = 16$ meets the $x$-axis), $(6, 4)$ (where $2x + y = 16$ meets $x + 2y = 14$) and $(0, 7)$ (where $x + 2y = 14$ meets the $y$-axis). The values of $Z = 4x - 5y$ are $20$, $-25$, $32$, $24 - 20 = 4$ and $-35$. The maximum value is $32$ at $(8, 0)$ and the minimum value is $-35$ at $(0, 7)$.",
    "steps": [
      {
        "step": "Corner points $(5, 0)$, $(0, 5)$, $(8, 0)$, $(6, 4)$, $(0, 7)$",
        "marks": 1
      },
      {
        "step": "Values of $Z$ at all five corner points: $20$, $-25$, $32$, $4$, $-35$",
        "marks": 1
      },
      {
        "step": "Maximum $32$ and minimum $-35$ with the points where they occur",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c08",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A school hires exactly 9 vehicles for a trip: $x$ buses and $y$ minibuses, with at least 2 buses and at least 1 minibus. A bus costs Rs 4000 a day and a minibus costs Rs 3000 a day. Find the least and the greatest possible daily cost.",
    "answer": "The conditions are $x + y = 9$, $x \\ge 2$, $y \\ge 1$, and the cost is $Z = 4000x + 3000y$. The feasible region is the part of the line $x + y = 9$ with $x \\ge 2$ and $y \\ge 1$ (i.e. $x \\le 8$), a line segment with end points $(2, 7)$ and $(8, 1)$. At $(2, 7)$: $Z = 8000 + 21000 = 29000$. At $(8, 1)$: $Z = 32000 + 3000 = 35000$. So the least daily cost is Rs 29000 (2 buses and 7 minibuses) and the greatest is Rs 35000 (8 buses and 1 minibus).",
    "steps": [
      {
        "step": "Seeing that the region is a segment of $x + y = 9$ with end points $(2, 7)$ and $(8, 1)$",
        "marks": 1
      },
      {
        "step": "Evaluating the cost at the two end points: Rs 29000 and Rs 35000",
        "marks": 1
      },
      {
        "step": "Stating the least and greatest daily cost with the vehicle mixes",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c09",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "The feasible region of an LPP is given by $x + y \\le 10$, $x \\le 7$, $x + 3y \\le 24$, $x \\ge 0$, $y \\ge 0$. Find the maximum value of $Z = 5x + 2y$ and the point where it occurs. If the objective function is changed to $Z = 2x + 5y$, find the new maximum and the point where it occurs.",
    "answer": "The corner points are $(0, 0)$, $(7, 0)$, $(7, 3)$ (where $x = 7$ meets $x + y = 10$), $(3, 7)$ (where $x + y = 10$ meets $x + 3y = 24$) and $(0, 8)$. For $Z = 5x + 2y$ the values are $0$, $35$, $41$, $29$ and $16$, so the maximum is $41$ at $(7, 3)$. For $Z = 2x + 5y$ the values are $0$, $14$, $29$, $41$ and $40$, so the new maximum is $41$ at $(3, 7)$. The optimal point has moved from $(7, 3)$ to $(3, 7)$.",
    "steps": [
      {
        "step": "Corner points $(0, 0)$, $(7, 0)$, $(7, 3)$, $(3, 7)$, $(0, 8)$",
        "marks": 1
      },
      {
        "step": "$Z = 5x + 2y$: values and maximum $41$ at $(7, 3)$",
        "marks": 1
      },
      {
        "step": "$Z = 2x + 5y$: values and maximum $41$ at $(3, 7)$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c10",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "The feasible region of an LPP is given by $x + y \\ge 6$, $x \\le 2y$, $x \\ge 0$, $y \\ge 0$. Find its corner points and the minimum value of $Z = 3x + 2y$. Does $Z$ have a maximum value? Give a reason.",
    "answer": "Setting $x = 2y$ in $x + y = 6$ gives $y = 2$, $x = 4$; the line $x + y = 6$ meets the $y$-axis at $(0, 6)$. So the unbounded region has corner points $(4, 2)$ and $(0, 6)$, with $Z(4, 2) = 16$ and $Z(0, 6) = 12$. The smallest value is $12$, and it is the minimum because for every feasible point $3x + 2y = 2(x + y) + x \\ge 12 + 0 = 12$, so $3x + 2y < 12$ has no common point with the region. $Z$ has no maximum: the points $(0, t)$ with $t \\ge 6$ are feasible and give $Z = 2t$, which is unbounded.",
    "steps": [
      {
        "step": "Corner points $(4, 2)$ and $(0, 6)$ with $Z = 16$ and $12$",
        "marks": 1
      },
      {
        "step": "Showing that $3x + 2y < 12$ has no common point with the region, so the minimum is $12$ at $(0, 6)$",
        "marks": 1
      },
      {
        "step": "No maximum, because the region is unbounded and $Z$ grows without bound along the $y$-axis",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c11",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "The feasible region of an LPP is given by $x + y \\ge 3$, $x \\le 6$, $x \\ge 0$, $y \\ge 0$. Find the corner points. Show that $Z = 2x - y$ has a maximum value but no minimum value on this region.",
    "answer": "The region is unbounded upwards, with corner points $(0, 3)$, $(3, 0)$ and $(6, 0)$. The values of $Z = 2x - y$ are $-3$, $6$ and $12$. For every feasible point $x \\le 6$ and $y \\ge 0$, so $Z = 2x - y \\le 12 - 0 = 12$, and $12$ is reached at $(6, 0)$: the maximum value is $12$. There is no minimum: the points $(0, t)$ with $t \\ge 3$ are feasible and give $Z = -t$, which can be made as small as we please.",
    "steps": [
      {
        "step": "Corner points $(0, 3)$, $(3, 0)$, $(6, 0)$ and values $-3$, $6$, $12$",
        "marks": 1
      },
      {
        "step": "Maximum $12$ at $(6, 0)$, justified by $x \\le 6$ and $y \\ge 0$",
        "marks": 1
      },
      {
        "step": "No minimum, since $(0, t)$ gives $Z = -t \\to -\\infty$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-c12",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "The feasible region of an LPP is given by $x + y \\ge 4$, $2x + y \\ge 6$, $x \\ge 0$, $y \\ge 0$. Find its corner points. Show that $Z = -2x - y$ has a maximum value, find it, and state at which points of the region it occurs. Does $Z$ have a minimum?",
    "answer": "The corner points are $(0, 6)$, $(2, 2)$ (where $x + y = 4$ meets $2x + y = 6$) and $(4, 0)$. The values of $Z = -2x - y$ are $-6$, $-6$ and $-8$. Every feasible point has $2x + y \\ge 6$, so $Z = -(2x + y) \\le -6$; hence the maximum value is $-6$. It occurs at both $(0, 6)$ and $(2, 2)$ and therefore at every point of the line segment joining them (the part of $2x + y = 6$ with $0 \\le x \\le 2$). $Z$ has no minimum, because the points $(t, 0)$ with $t \\ge 6$ are feasible and give $Z = -2t$, which decreases without bound.",
    "steps": [
      {
        "step": "Corner points $(0, 6)$, $(2, 2)$, $(4, 0)$ with $Z = -6$, $-6$, $-8$",
        "marks": 1
      },
      {
        "step": "Maximum $-6$, justified by $2x + y \\ge 6$, attained at every point of the segment from $(0, 6)$ to $(2, 2)$",
        "marks": 1
      },
      {
        "step": "No minimum, since $Z$ decreases without bound along the $x$-axis",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d01",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "A coaching centre runs $x$ Mathematics batches and $y$ Science batches in a week. A Mathematics batch needs 3 hours of teacher time and a Science batch needs 2 hours, and at most 36 teacher-hours are available. The centre has rooms for at most 14 batches in all and has promised at least 3 Science batches. The profit is Rs 800 per Mathematics batch and Rs 600 per Science batch. Formulate this as a linear programming problem and solve it graphically to find the number of batches of each kind that gives the maximum weekly profit, and that profit.",
    "answer": "Maximise $Z = 800x + 600y$ subject to $3x + 2y \\le 36$, $x + y \\le 14$, $y \\ge 3$, $x \\ge 0$. The corner points of the feasible region are $(0, 3)$, $(10, 3)$ (where $y = 3$ meets $3x + 2y = 36$), $(8, 6)$ (where $3x + 2y = 36$ meets $x + y = 14$) and $(0, 14)$. The values of $Z$ are $1800$, $9800$, $6400 + 3600 = 10000$ and $8400$. The maximum weekly profit is Rs 10000, obtained with 8 Mathematics batches and 6 Science batches.",
    "steps": [
      {
        "step": "Objective function $Z = 800x + 600y$ (maximise)",
        "marks": 1
      },
      {
        "step": "Constraints $3x + 2y \\le 36$, $x + y \\le 14$, $y \\ge 3$, $x \\ge 0$",
        "marks": 1
      },
      {
        "step": "Corner points $(0, 3)$, $(10, 3)$, $(8, 6)$, $(0, 14)$",
        "marks": 2
      },
      {
        "step": "Values of $Z$, maximum Rs 10000 at 8 Mathematics and 6 Science batches",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d02",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "A trust runs two kinds of free medical camps. A Type I camp sees 2 adult patients and 1 child; a Type II camp sees 1 adult patient and 2 children. The trust wants to see at least 12 adults and at least 12 children, and has volunteers for at most 14 camps in all. A Type I camp costs Rs 4000 and a Type II camp costs Rs 3000. Formulate this as an LPP and find graphically how many camps of each type should be held to keep the cost minimum, and the minimum cost.",
    "answer": "Let $x$ Type I and $y$ Type II camps be held. Minimise $Z = 4000x + 3000y$ subject to $2x + y \\ge 12$ (adults), $x + 2y \\ge 12$ (children), $x + y \\le 14$, $x \\ge 0$, $y \\ge 0$. The corner points are $(0, 12)$, $(4, 4)$ (where $2x + y = 12$ meets $x + 2y = 12$), $(12, 0)$, $(14, 0)$ and $(0, 14)$. The values of $Z$ are $36000$, $16000 + 12000 = 28000$, $48000$, $56000$ and $42000$. The minimum cost is Rs 28000, with 4 camps of each type.",
    "steps": [
      {
        "step": "Objective function $Z = 4000x + 3000y$ (minimise)",
        "marks": 1
      },
      {
        "step": "Constraints $2x + y \\ge 12$, $x + 2y \\ge 12$, $x + y \\le 14$, $x, y \\ge 0$",
        "marks": 1
      },
      {
        "step": "Corner points $(0, 12)$, $(4, 4)$, $(12, 0)$, $(14, 0)$, $(0, 14)$",
        "marks": 2
      },
      {
        "step": "Values of $Z$, minimum Rs 28000 at 4 camps of each type",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d03",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "A coach plans weekly training with $x$ cardio sessions and $y$ strength sessions. A cardio session gives 4 units of endurance and 1 unit of strength; a strength session gives 1 unit of endurance and 2 units of strength. The plan needs at least 16 units of endurance, at least 10 units of strength and at least 7 sessions in all. A cardio session costs Rs 60 and a strength session costs Rs 40. Formulate this as an LPP and find the cheapest plan. Justify that the value you find is the minimum.",
    "answer": "Minimise $Z = 60x + 40y$ subject to $4x + y \\ge 16$, $x + 2y \\ge 10$, $x + y \\ge 7$, $x \\ge 0$, $y \\ge 0$. The region is unbounded with corner points $(0, 16)$, $(3, 4)$ (where $4x + y = 16$ meets $x + y = 7$), $(4, 3)$ (where $x + y = 7$ meets $x + 2y = 10$) and $(10, 0)$. The values of $Z$ are $640$, $180 + 160 = 340$, $240 + 120 = 360$ and $600$. The smallest value is $m = 340$. To confirm it is the minimum, consider the half-plane $60x + 40y < 340$, i.e. $3x + 2y < 17$. For every feasible point $3x + 2y = \\tfrac{1}{3}(4x + y) + \\tfrac{5}{3}(x + y) \\ge \\tfrac{16}{3} + \\tfrac{35}{3} = 17$, so no feasible point satisfies $3x + 2y < 17$. Hence the minimum cost is Rs 340, with 3 cardio sessions and 4 strength sessions.",
    "steps": [
      {
        "step": "Objective function $Z = 60x + 40y$ and constraints $4x + y \\ge 16$, $x + 2y \\ge 10$, $x + y \\ge 7$",
        "marks": 1
      },
      {
        "step": "Corner points $(0, 16)$, $(3, 4)$, $(4, 3)$, $(10, 0)$",
        "marks": 1
      },
      {
        "step": "Values of $Z$: $640$, $340$, $360$, $600$, so $m = 340$",
        "marks": 1
      },
      {
        "step": "Showing that $60x + 40y < 340$ has no point in common with the region",
        "marks": 1
      },
      {
        "step": "Conclusion: minimum cost Rs 340 with 3 cardio and 4 strength sessions",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d04",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Find graphically the maximum and minimum values of $Z = 5x + 3y$ subject to $2x + 3y \\le 24$, $3x + y \\le 15$, $x + y \\ge 3$, $x \\ge 0$, $y \\ge 0$.",
    "answer": "The boundary lines $2x + 3y = 24$ and $3x + y = 15$ meet at $(3, 6)$ (from $y = 15 - 3x$: $2x + 45 - 9x = 24$, so $x = 3$). The feasible region has corner points $(3, 0)$ and $(0, 3)$ (on $x + y = 3$), $(5, 0)$ (where $3x + y = 15$ meets the $x$-axis), $(3, 6)$ and $(0, 8)$ (where $2x + 3y = 24$ meets the $y$-axis). The values of $Z = 5x + 3y$ are $15$, $9$, $25$, $15 + 18 = 33$ and $24$. The maximum value is $33$ at $(3, 6)$ and the minimum value is $9$ at $(0, 3)$.",
    "steps": [
      {
        "step": "Identifying the region and the corner points on the axes: $(3, 0)$, $(0, 3)$, $(5, 0)$, $(0, 8)$",
        "marks": 2
      },
      {
        "step": "Corner point $(3, 6)$ by solving the two slanting lines",
        "marks": 1
      },
      {
        "step": "Values of $Z$ at all five corner points",
        "marks": 1
      },
      {
        "step": "Maximum $33$ at $(3, 6)$, minimum $9$ at $(0, 3)$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d05",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "An orchard packs $x$ crates of mangoes and $y$ crates of guavas for a day. A truck can carry at most 30 crates. Picking a crate of mangoes takes 3 hours and a crate of guavas takes 2 hours, and at most 72 picking hours are available. The number of mango crates must not exceed twice the number of guava crates. The profit is Rs 250 per mango crate and Rs 200 per guava crate. Find graphically the numbers of crates of each fruit that maximise the profit, and the maximum profit.",
    "answer": "Maximise $Z = 250x + 200y$ subject to $x + y \\le 30$, $3x + 2y \\le 72$, $x \\le 2y$, $x \\ge 0$, $y \\ge 0$. The corner points of the feasible region are $(0, 0)$, $(0, 30)$ (where $x = 0$ meets $x + y = 30$), $(12, 18)$ (where $x + y = 30$ meets $3x + 2y = 72$) and $(18, 9)$ (where $3x + 2y = 72$ meets $x = 2y$). The values of $Z$ are $0$, $6000$, $3000 + 3600 = 6600$ and $4500 + 1800 = 6300$. The maximum profit is Rs 6600, with 12 crates of mangoes and 18 crates of guavas.",
    "steps": [
      {
        "step": "Constraints $x + y \\le 30$, $3x + 2y \\le 72$, $x \\le 2y$ and objective $Z = 250x + 200y$",
        "marks": 1
      },
      {
        "step": "Corner points $(0, 0)$, $(0, 30)$, $(12, 18)$, $(18, 9)$",
        "marks": 2
      },
      {
        "step": "Values of $Z$: $0$, $6000$, $6600$, $6300$",
        "marks": 1
      },
      {
        "step": "Maximum profit Rs 6600 with 12 mango crates and 18 guava crates",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d06",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "A company runs $x$ television spots and $y$ online campaigns. A television spot costs Rs 4 lakh and an online campaign costs Rs 1 lakh, and the budget is Rs 44 lakh. Its team can manage at most 20 spots and campaigns in all, and the company has contracted for at least 3 television spots. A television spot reaches 500 thousand viewers and an online campaign reaches 300 thousand. Formulate the LPP and find graphically how many of each the company should run to reach the greatest number of viewers, and that number.",
    "answer": "Maximise $Z = 500x + 300y$ (in thousands of viewers) subject to $4x + y \\le 44$ (budget in lakh of rupees), $x + y \\le 20$, $x \\ge 3$, $y \\ge 0$. The corner points are $(3, 0)$, $(11, 0)$ (where $4x + y = 44$ meets the $x$-axis), $(8, 12)$ (where $4x + y = 44$ meets $x + y = 20$) and $(3, 17)$ (where $x = 3$ meets $x + y = 20$). The values of $Z$ are $1500$, $5500$, $4000 + 3600 = 7600$ and $1500 + 5100 = 6600$. The greatest reach is $7600$ thousand viewers (76 lakh), with 8 television spots and 12 online campaigns.",
    "steps": [
      {
        "step": "Objective $Z = 500x + 300y$ and constraints $4x + y \\le 44$, $x + y \\le 20$, $x \\ge 3$, $y \\ge 0$",
        "marks": 2
      },
      {
        "step": "Corner points $(3, 0)$, $(11, 0)$, $(8, 12)$, $(3, 17)$",
        "marks": 1
      },
      {
        "step": "Values of $Z$: $1500$, $5500$, $7600$, $6600$",
        "marks": 1
      },
      {
        "step": "Greatest reach $7600$ thousand viewers with 8 television spots and 12 online campaigns",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d07",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "A cold-storage firm must move at least 24 tonnes of produce. A van trip carries 3 tonnes and costs Rs 7000; a pick-up trip carries 2 tonnes and costs Rs 5000. It needs at least 9 trips in all, and only 10 van trips are possible. Let $x$ be the number of van trips and $y$ the number of pick-up trips. Formulate the LPP and find the least cost, showing that the value you find is the minimum.",
    "answer": "Minimise $Z = 7000x + 5000y$ subject to $3x + 2y \\ge 24$, $x + y \\ge 9$, $x \\le 10$, $x \\ge 0$, $y \\ge 0$. The region is unbounded (upwards) with corner points $(0, 12)$ (where $3x + 2y = 24$ meets the $y$-axis), $(6, 3)$ (where $3x + 2y = 24$ meets $x + y = 9$), $(9, 0)$ and $(10, 0)$. The values of $Z$ are $60000$, $42000 + 15000 = 57000$, $63000$ and $70000$, so $m = 57000$. Consider the half-plane $7000x + 5000y < 57000$, i.e. $7x + 5y < 57$. For every feasible point $7x + 5y = 2(3x + 2y) + (x + y) \\ge 2(24) + 9 = 57$, so the half-plane has no point in common with the region. Hence the minimum cost is Rs 57000, with 6 van trips and 3 pick-up trips.",
    "steps": [
      {
        "step": "Objective $Z = 7000x + 5000y$ and constraints $3x + 2y \\ge 24$, $x + y \\ge 9$, $x \\le 10$",
        "marks": 1
      },
      {
        "step": "Corner points $(0, 12)$, $(6, 3)$, $(9, 0)$, $(10, 0)$",
        "marks": 1
      },
      {
        "step": "Values of $Z$: $60000$, $57000$, $63000$, $70000$, so $m = 57000$",
        "marks": 1
      },
      {
        "step": "Showing that $7x + 5y < 57$ has no common point with the region",
        "marks": 1
      },
      {
        "step": "Conclusion: minimum cost Rs 57000 with 6 van trips and 3 pick-up trips",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-d08",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "A boat-yard builds $x$ canoes and $y$ kayaks a month. A canoe needs 3 units of carpentry time and a kayak needs 2 units, and at most 60 units are available. The yard has moulds for at most 24 boats in all, and only 15 kayak moulds. The profit is Rs 9000 per canoe and Rs 7000 per kayak. Find graphically how many boats of each kind give the maximum monthly profit, and that profit.",
    "answer": "Maximise $Z = 9x + 7y$ (in thousands of rupees) subject to $3x + 2y \\le 60$, $x + y \\le 24$, $y \\le 15$, $x \\ge 0$, $y \\ge 0$. The corner points of the feasible region are $(0, 0)$, $(0, 15)$, $(9, 15)$ (where $y = 15$ meets $x + y = 24$), $(12, 12)$ (where $x + y = 24$ meets $3x + 2y = 60$) and $(20, 0)$. The values of $Z$ are $0$, $105$, $81 + 105 = 186$, $108 + 84 = 192$ and $180$. The maximum monthly profit is Rs 1,92,000 (that is, $192$ thousand), with 12 canoes and 12 kayaks.",
    "steps": [
      {
        "step": "Objective $Z = 9x + 7y$ and constraints $3x + 2y \\le 60$, $x + y \\le 24$, $y \\le 15$",
        "marks": 1
      },
      {
        "step": "Corner points $(0, 0)$, $(0, 15)$, $(9, 15)$, $(12, 12)$, $(20, 0)$",
        "marks": 2
      },
      {
        "step": "Values of $Z$: $0$, $105$, $186$, $192$, $180$",
        "marks": 1
      },
      {
        "step": "Maximum Rs 1,92,000 with 12 canoes and 12 kayaks",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-lpp-r4-e01",
    "chapter": "Linear Programming",
    "topic": "Formulating a linear programming problem",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A handloom cooperative weaves stoles and shawls every week. Let $x$ be the number of stoles and $y$ the number of shawls. A stole needs 2 hours of dyeing and 1 hour of weaving; a shawl needs 1 hour of dyeing and 2 hours of weaving. At most 40 hours of dyeing and 50 hours of weaving are available each week. The cooperative has accepted an order for at least 6 stoles. The profit is Rs 600 per stole and Rs 500 per shawl.",
    "answer": "Maximise $Z = 600x + 500y$ subject to $2x + y \\le 40$, $x + 2y \\le 50$, $x \\ge 6$, $y \\ge 0$; the maximum profit is Rs 16000 at 10 stoles and 20 shawls.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write the objective function for maximising the weekly profit.",
        "answer": "$Z = 600x + 500y$ (in rupees), to be maximised."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Write the constraints of the problem.",
        "answer": "Dyeing: $2x + y \\le 40$. Weaving: $x + 2y \\le 50$. Order: $x \\ge 6$. Also $y \\ge 0$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the corner points of the feasible region and the maximum weekly profit.\nOR\nIf the profit on a shawl falls to Rs 200 (profit on a stole unchanged), find the new maximum weekly profit and the numbers of stoles and shawls that give it.",
        "answer": "The corner points are $(6, 0)$, $(20, 0)$ (where $2x + y = 40$ meets the $x$-axis), $(10, 20)$ (where $2x + y = 40$ meets $x + 2y = 50$) and $(6, 22)$ (where $x = 6$ meets $x + 2y = 50$). In hundreds of rupees $Z = 6x + 5y$ takes the values $36$, $120$, $160$ and $146$. The maximum weekly profit is Rs 16000, with 10 stoles and 20 shawls.\nOR: with $Z = 6x + 2y$ (hundreds of rupees) the corner values are $36$, $120$, $100$ and $80$, so the new maximum is $120$, i.e. Rs 12000, with 20 stoles and no shawls."
      }
    ]
  },
  {
    "id": "c12-lpp-r4-e02",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A city park department plans a new green strip with $x$ palm trees and $y$ flowering trees. There are 12 plots, so $x + y \\le 12$. Only 8 palm saplings are available. A palm gives 1 unit of shade rating and a flowering tree gives 3 units, and the strip needs a total shade rating of at least 6. A palm costs Rs 5000 and a flowering tree costs Rs 4000.",
    "answer": "Constraints $x + y \\le 12$, $x \\le 8$, $x + 3y \\ge 6$; the least cost is Rs 8000 and the greatest Rs 56000.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write all the constraints of the problem.",
        "answer": "$x + y \\le 12$, $x \\le 8$, $x + 3y \\ge 6$, $x \\ge 0$, $y \\ge 0$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Is a plan of 7 palms and 6 flowering trees feasible? Give a reason.",
        "answer": "No. It uses $7 + 6 = 13$ plots, which is more than 12, so $x + y \\le 12$ fails."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the least and the greatest possible cost (in thousands of rupees) over all feasible plans.\nOR\nIf a palm costs Rs 2000 and a flowering tree costs Rs 3000, find the least and the greatest possible cost.",
        "answer": "The corner points are $(6, 0)$, $(8, 0)$, $(8, 4)$ (where $x = 8$ meets $x + y = 12$), $(0, 12)$ and $(0, 2)$ (where $x + 3y = 6$ meets the $y$-axis). The cost $Z = 5x + 4y$ (thousands of rupees) takes the values $30$, $40$, $56$, $48$ and $8$. The least cost is Rs 8000 (no palms, 2 flowering trees) and the greatest is Rs 56000 (8 palms, 4 flowering trees).\nOR: with $Z = 2x + 3y$ the corner values are $12$, $16$, $28$, $36$ and $6$, so the least cost is Rs 6000 (at $(0, 2)$) and the greatest is Rs 36000 (at $(0, 12)$)."
      }
    ]
  },
  {
    "id": "c12-lpp-r4-e03",
    "chapter": "Linear Programming",
    "topic": "Unbounded feasible regions",
    "type": "case",
    "complexity": "hard",
    "marks": 4,
    "competency": true,
    "text": "A relief agency prepares two kinds of packets. Packet P has 3 units of water-purification tablets, 1 unit of oral rehydration salts (ORS) and 1 unit of bandages; packet Q has 1 unit of tablets, 1 unit of ORS and 3 units of bandages. A camp needs at least 12 units of tablets, at least 8 units of ORS and at least 10 units of bandages. Let $x$ packets of P and $y$ packets of Q be sent. A packet of P costs Rs 60 and a packet of Q costs Rs 50.",
    "answer": "Minimise $Z = 60x + 50y$ subject to $3x + y \\ge 12$, $x + y \\ge 8$, $x + 3y \\ge 10$; the least cost is Rs 420 at $(2, 6)$.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write the constraints of the problem.",
        "answer": "Tablets: $3x + y \\ge 12$. ORS: $x + y \\ge 8$. Bandages: $x + 3y \\ge 10$. Also $x \\ge 0$, $y \\ge 0$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find the corner points of the (unbounded) feasible region.",
        "answer": "The corner points are $(0, 12)$ (where $3x + y = 12$ meets the $y$-axis), $(2, 6)$ (where $3x + y = 12$ meets $x + y = 8$), $(7, 1)$ (where $x + y = 8$ meets $x + 3y = 10$) and $(10, 0)$ (where $x + 3y = 10$ meets the $x$-axis)."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the least cost of the packets sent and the packets that give it, justifying that it is the minimum.\nOR\nIf a packet of Q costs Rs 120 (the price of P unchanged), find the new least cost.",
        "answer": "$Z = 60x + 50y$ takes the values $600$, $420$, $470$ and $600$ at the four corner points, so the smallest value is $m = 420$ at $(2, 6)$. The half-plane $60x + 50y < 420$, i.e. $6x + 5y < 42$, has no point in common with the region, because $6x + 5y = \\tfrac{1}{2}(3x + y) + \\tfrac{9}{2}(x + y) \\ge 6 + 36 = 42$. So the least cost is Rs 420, with 2 packets of P and 6 packets of Q.\nOR: $Z = 60x + 120y$ takes the values $1440$, $840$, $540$ and $600$, so $m = 540$ at $(7, 1)$; also $x + 2y = \\tfrac{1}{2}(x + y) + \\tfrac{1}{2}(x + 3y) \\ge 4 + 5 = 9$, so $60x + 120y \\ge 540$ on the whole region. The new least cost is Rs 540, with 7 packets of P and 1 packet of Q."
      }
    ]
  },
  {
    "id": "c12-lpp-r4-e04",
    "chapter": "Linear Programming",
    "topic": "Graphical method and corner points",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A school sells tickets for a concert. Let $x$ be the number of adult tickets and $y$ the number of student tickets sold. The hall holds at most 180 people. At most 100 adult tickets can be sold, and the number of student tickets sold cannot exceed twice the number of adult tickets. An adult ticket costs Rs 300 and a student ticket costs Rs 150.",
    "answer": "Maximise $Z = 300x + 150y$ subject to $x + y \\le 180$, $x \\le 100$, $y \\le 2x$; the maximum income is Rs 42000 at $(100, 80)$.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write the constraints of the problem.",
        "answer": "$x + y \\le 180$, $x \\le 100$, $y \\le 2x$, $x \\ge 0$, $y \\ge 0$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Can the school sell 50 adult tickets and 120 student tickets? Give a reason.",
        "answer": "No. The hall limit holds ($50 + 120 = 170 \\le 180$) and $x \\le 100$ holds, but $y \\le 2x$ requires $120 \\le 100$, which is false."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the maximum income from ticket sales and the numbers of tickets that give it.\nOR\nIf the hall is enlarged to hold at most 210 people (other conditions unchanged), find the new maximum income.",
        "answer": "The corner points are $(0, 0)$, $(100, 0)$, $(100, 80)$ (where $x = 100$ meets $x + y = 180$) and $(60, 120)$ (where $y = 2x$ meets $x + y = 180$). The income $Z = 300x + 150y$ takes the values $0$, $30000$, $30000 + 12000 = 42000$ and $18000 + 18000 = 36000$. The maximum income is Rs 42000, from 100 adult and 80 student tickets.\nOR: the corner points become $(0, 0)$, $(100, 0)$, $(100, 110)$ and $(70, 140)$, with values $0$, $30000$, $46500$ and $42000$, so the new maximum income is Rs 46500 (100 adult and 110 student tickets)."
      }
    ]
  }
];
