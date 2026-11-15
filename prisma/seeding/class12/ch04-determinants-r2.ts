import type { Class12Question } from './types.js';

const C = 'Determinants';

const AR_OPTIONS = [
  'Both A and R are true and R is the correct explanation of A.',
  'Both A and R are true but R is not the correct explanation of A.',
  'A is true but R is false.',
  'A is false but R is true.',
];

export const CH04_DET_R2: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Evaluating determinants
  {
    id: 'c12-det-r2-a01', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The value of $\\begin{vmatrix} a^{2} + ab & a \\\\ ab + b^{2} & b \\end{vmatrix}$ is',
    options: ['$0$', '$a^{2}b - ab^{2}$', '$2ab(a + b)$', '$a^{2}b^{2}$'],
    answer: 'Correct option: A) $0$. The determinant is $b(a^{2} + ab) - a(ab + b^{2}) = a^{2}b + ab^{2} - a^{2}b - ab^{2} = 0$. Option C comes from adding the two products instead of subtracting them.',
  },
  {
    id: 'c12-det-r2-a02', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$A$ is a square matrix of order $2$ with $|A| = 4$. The value of $|-3A^{T}|$ is',
    options: ['$36$', '$-36$', '$-12$', '$108$'],
    answer: 'Correct option: A) $36$. For order $2$, $|kM| = k^{2}|M|$, and $|A^{T}| = |A| = 4$. So $|-3A^{T}| = (-3)^{2} \\times 4 = 36$. Option C uses $k$ instead of $k^{2}$; option D uses $k^{3}$ as if the order were $3$.',
  },
  {
    id: 'c12-det-r2-a03', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: '$A$ and $B$ are invertible square matrices of order $3$ with $|A| = 2$ and $|B| = -6$. The value of $|3AB^{-1}|$ is',
    options: ['$-9$', '$-1$', '$9$', '$-324$'],
    answer: 'Correct option: A) $-9$. $|3AB^{-1}| = 3^{3}|A||B^{-1}| = 27 \\times 2 \\times \\left(-\\frac{1}{6}\\right) = -9$. Option B multiplies by $3$ instead of $3^{3}$; option D uses $|B|$ in place of $|B^{-1}|$.',
  },
  {
    id: 'c12-det-r2-a04', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $\\begin{vmatrix} 2 & 0 & 0 \\\\ 0 & -3 & 0 \\\\ 0 & 0 & k \\end{vmatrix} = 12$, then $k$ equals',
    options: ['$-2$', '$2$', '$12$', '$-\\frac{1}{2}$'],
    answer: 'Correct option: A) $-2$. The determinant of a diagonal matrix is the product of its diagonal entries: $2 \\times (-3) \\times k = -6k = 12$, so $k = -2$. Option B ignores the negative entry $-3$.',
  },
  {
    id: 'c12-det-r2-a05', chapter: C, topic: 'Evaluating determinants',
    type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): $\\begin{vmatrix} 0 & 2 & -3 \\\\ -2 & 0 & 5 \\\\ 3 & -5 & 0 \\end{vmatrix} = 0$.\nReason (R): The determinant of every skew-symmetric matrix of odd order is zero.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and R explains A. Expanding: $0(0 + 25) - 2(0 - 15) + (-3)(10 - 0) = 30 - 30 = 0$. The matrix is skew-symmetric ($A^{T} = -A$) of order $3$, and for such a matrix $|A| = |A^{T}| = |-A| = (-1)^{3}|A|$, forcing $|A| = 0$. So R is exactly why A holds.',
  },
  {
    id: 'c12-det-r2-a06', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $x \\neq \\frac{\\pi}{2}$, the value of $\\begin{vmatrix} \\tan x & 1 \\\\ -1 & \\tan x \\end{vmatrix}$ is',
    options: ['$\\sec^{2} x$', '$\\tan^{2} x - 1$', '$1$', '$\\cos^{2} x$'],
    answer: 'Correct option: A) $\\sec^{2} x$. The determinant is $\\tan^{2} x - (1)(-1) = \\tan^{2} x + 1 = \\sec^{2} x$. Option B forgets that subtracting $-1$ adds $1$.',
  },
  {
    id: 'c12-det-r2-a07', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $\\begin{vmatrix} a & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{vmatrix} = 0$ and $a \\neq 1$, then $a$ equals',
    options: ['$-2$', '$2$', '$-1$', '$0$'],
    answer: 'Correct option: A) $-2$. Expanding along the first row: $a(a^{2} - 1) - 1(a - 1) + 1(1 - a) = a^{3} - 3a + 2 = (a - 1)^{2}(a + 2)$. Since $a \\neq 1$, we need $a + 2 = 0$, so $a = -2$. Option B comes from a sign slip in the factor $(a + 2)$.',
  },

  // Minors, cofactors and adjoint
  {
    id: 'c12-det-r2-a08', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: '$A$ is a square matrix of order $3$ with $|A| = -2$. The value of $|A(\\text{adj } A)|$ is',
    options: ['$-8$', '$8$', '$4$', '$-2$'],
    answer: 'Correct option: A) $-8$. $A(\\text{adj } A) = |A|I = -2I$, and for order $3$, $|-2I| = (-2)^{3} = -8$. Option C is $|\\text{adj } A| = |A|^{2}$, not $|A(\\text{adj } A)|$.',
  },
  {
    id: 'c12-det-r2-a09', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $A = \\begin{bmatrix} 4 & -1 & 2 \\\\ 3 & 5 & -2 \\\\ 0 & 6 & 1 \\end{bmatrix}$, the minor $M_{23}$ of the element in row $2$, column $3$ is',
    options: ['$24$', '$-24$', '$-6$', '$6$'],
    answer: 'Correct option: A) $24$. Delete row $2$ and column $3$: $M_{23} = \\begin{vmatrix} 4 & -1 \\\\ 0 & 6 \\end{vmatrix} = 24 - 0 = 24$. Option B is the cofactor $A_{23} = (-1)^{5}M_{23}$, not the minor.',
  },
  {
    id: 'c12-det-r2-a10', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: '$A$ is a square matrix of order $3$ with $|A| = 2$. The value of $|\\text{adj}(\\text{adj } A)|$ is',
    options: ['$16$', '$4$', '$8$', '$64$'],
    answer: 'Correct option: A) $16$. For order $3$, $|\\text{adj } M| = |M|^{2}$. With $M = A$: $|\\text{adj } A| = 4$. With $M = \\text{adj } A$: $|\\text{adj}(\\text{adj } A)| = 4^{2} = 16$. Option B applies the rule only once.',
  },
  {
    id: 'c12-det-r2-a11', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A = \\begin{bmatrix} a & 3 \\\\ -2 & b \\end{bmatrix}$ and $\\text{adj } A = \\begin{bmatrix} 5 & -3 \\\\ 2 & 1 \\end{bmatrix}$, then $a + b$ equals',
    options: ['$6$', '$4$', '$-6$', '$3$'],
    answer: 'Correct option: A) $6$. For a $2 \\times 2$ matrix, $\\text{adj } A = \\begin{bmatrix} b & -3 \\\\ 2 & a \\end{bmatrix}$. Comparing, $b = 5$ and $a = 1$, so $a + b = 6$.',
  },
  {
    id: 'c12-det-r2-a12', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 1 & 4 & 0 \\\\ 0 & 2 & 5 \\end{bmatrix}$ with cofactors $A_{ij}$, the value of $a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13}$ is',
    options: ['$51$', '$0$', '$41$', '$43$'],
    answer: 'Correct option: A) $51$. Elements of a row times their own cofactors give $|A|$: $2(20 - 0) + (-1)(-(5 - 0)) + 3(2 - 0) = 40 + 5 + 6 = 51$. Option B is what you get with the cofactors of a different row; option C forgets the sign of the cofactor $A_{12}$.',
  },

  // Inverse of a matrix and its properties
  {
    id: 'c12-det-r2-a13', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The inverse of $A = \\begin{bmatrix} 4 & 7 \\\\ 1 & 2 \\end{bmatrix}$ is',
    options: [
      '$\\begin{bmatrix} 2 & -7 \\\\ -1 & 4 \\end{bmatrix}$',
      '$\\begin{bmatrix} 2 & -1 \\\\ -7 & 4 \\end{bmatrix}$',
      '$\\begin{bmatrix} -2 & 7 \\\\ 1 & -4 \\end{bmatrix}$',
      '$\\begin{bmatrix} 4 & -7 \\\\ -1 & 2 \\end{bmatrix}$',
    ],
    answer: 'Correct option: A) $\\begin{bmatrix} 2 & -7 \\\\ -1 & 4 \\end{bmatrix}$. $|A| = 8 - 7 = 1$ and $\\text{adj } A = \\begin{bmatrix} 2 & -7 \\\\ -1 & 4 \\end{bmatrix}$, so $A^{-1} = \\text{adj } A$. Option B is the cofactor matrix (not transposed); option D forgets to swap the diagonal entries.',
  },
  {
    id: 'c12-det-r2-a14', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $A$ and $B$ are invertible matrices of the same order, then $(AB)^{-1} = A^{-1}B^{-1}$.\nReason (R): If $A$ and $B$ are invertible matrices of the same order, then $(AB)^{-1} = B^{-1}A^{-1}$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A is false but R is true. $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I$, so the inverse of $AB$ is $B^{-1}A^{-1}$ (R is true). Since matrix multiplication is not commutative, $A^{-1}B^{-1}$ is in general different, so A is false.',
  },
  {
    id: 'c12-det-r2-a15', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A square matrix $A$ satisfies $A^{2} - 5A + 7I = O$. Then $A^{-1}$ equals',
    options: ['$\\frac{1}{7}(5I - A)$', '$\\frac{1}{7}(A - 5I)$', '$7(5I - A)$', '$\\frac{1}{5}(7I - A)$'],
    answer: 'Correct option: A) $\\frac{1}{7}(5I - A)$. Rewrite as $A(5I - A) = 7I$, so $A \\cdot \\frac{1}{7}(5I - A) = I$ and $A^{-1} = \\frac{1}{7}(5I - A)$. Option B has the sign reversed; option C forgets to divide by $7$.',
  },
  {
    id: 'c12-det-r2-a16', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 3 & 2 & 0 \\\\ 5 & -1 & 4 \\end{bmatrix}$, the value of $|A^{-1}|$ is',
    options: ['$\\frac{1}{8}$', '$8$', '$-\\frac{1}{8}$', '$\\frac{1}{7}$'],
    answer: 'Correct option: A) $\\frac{1}{8}$. $A$ is lower triangular, so $|A| = 1 \\times 2 \\times 4 = 8$, and $|A^{-1}| = \\frac{1}{|A|} = \\frac{1}{8}$. Option B forgets to take the reciprocal.',
  },
  {
    id: 'c12-det-r2-a17', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $A = \\begin{bmatrix} 3 & 1 \\\\ k & 2 \\end{bmatrix}$, it is given that $|A^{-1}| = \\frac{1}{4}$. The value of $k$ is',
    options: ['$2$', '$-2$', '$10$', '$\\frac{23}{4}$'],
    answer: 'Correct option: A) $2$. $|A^{-1}| = \\frac{1}{|A|} = \\frac{1}{4}$ gives $|A| = 6 - k = 4$, so $k = 2$. Option C comes from taking $|A| = -4$; option D from setting $|A| = \\frac{1}{4}$.',
  },

  // Area of a triangle using determinants
  {
    id: 'c12-det-r2-a18', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Using determinants, the area of the triangle with vertices $(0, 0)$, $(4, 3)$ and $(-2, 5)$ is',
    options: ['$13$ square units', '$26$ square units', '$7$ square units', '$14$ square units'],
    answer: 'Correct option: A) $13$ square units. $\\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 4 & 3 & 1 \\\\ -2 & 5 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|4 \\times 5 - 3 \\times (-2)| = \\frac{1}{2} \\times 26 = 13$. Option B forgets the factor $\\frac{1}{2}$; option C comes from $\\frac{1}{2}(20 - 6)$, a sign slip.',
  },
  {
    id: 'c12-det-r2-a19', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the triangle with vertices $(k, 0)$, $(4, 0)$ and $(0, 2)$ is $4$ square units. The possible values of $k$ are',
    options: ['$0$ or $8$', '$8$ only', '$0$ or $-8$', '$4$ or $-4$'],
    answer: 'Correct option: A) $0$ or $8$. Area $= \\frac{1}{2}\\left|k(0 - 2) + 4(2 - 0) + 0\\right| = \\frac{1}{2}|8 - 2k| = |4 - k|$. Setting $|4 - k| = 4$ gives $k = 0$ or $k = 8$. Option B drops one case of the absolute value.',
  },
  {
    id: 'c12-det-r2-a20', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Using determinants, the equation of the line through $(1, 3)$ and $(4, -3)$ is',
    options: ['$2x + y = 5$', '$x + 2y = 7$', '$2x - y = -1$', '$2x + y = -5$'],
    answer: 'Correct option: A) $2x + y = 5$. A point $(x, y)$ is on the line exactly when $\\begin{vmatrix} x & y & 1 \\\\ 1 & 3 & 1 \\\\ 4 & -3 & 1 \\end{vmatrix} = 0$, i.e. $x(3 + 3) - y(1 - 4) + (-3 - 12) = 6x + 3y - 15 = 0$, which is $2x + y = 5$. Both given points satisfy it; none of the other options passes through both.',
  },

  // Solving linear equations by the matrix method
  {
    id: 'c12-det-r2-a21', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The system $2x + 3y = 5$, $4x + 6y = 10$ has infinitely many solutions.\nReason (R): If the coefficient matrix $A$ of a system $AX = B$ has $|A| = 0$, then the system has infinitely many solutions.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A is true but R is false. Here $|A| = 12 - 12 = 0$ and $(\\text{adj } A)B = \\begin{bmatrix} 6 & -3 \\\\ -4 & 2 \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$; the second equation is just twice the first, so there are infinitely many solutions. R is false: when $|A| = 0$ the system can also be inconsistent (no solution), for example $2x + 3y = 5$, $4x + 6y = 11$.',
  },
  {
    id: 'c12-det-r2-a22', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The system $x + 2y = 3$, $3x + ky = 1$ has no solution when $k$ equals',
    options: ['$6$', '$-6$', '$2$', '$\\frac{2}{3}$'],
    answer: 'Correct option: A) $6$. $|A| = k - 6$, which is $0$ only for $k = 6$. Then $(\\text{adj } A)B = \\begin{bmatrix} 6 & -2 \\\\ -3 & 1 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 16 \\\\ -8 \\end{bmatrix} \\neq O$, so the system is inconsistent. For every other $k$, $|A| \\neq 0$ and there is a unique solution.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-det-r2-b01', chapter: C, topic: 'Evaluating determinants',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find all values of $x$ for which $\\begin{vmatrix} x & 2 & -1 \\\\ 1 & x & 0 \\\\ 3 & 0 & 1 \\end{vmatrix} = 8$.',
    answer: 'Expanding along the first row: $x(x \\cdot 1 - 0) - 2(1 - 0) + (-1)(0 - 3x) = x^{2} - 2 + 3x$. Setting $x^{2} + 3x - 2 = 8$ gives $x^{2} + 3x - 10 = 0$, i.e. $(x + 5)(x - 2) = 0$. So $x = 2$ or $x = -5$.',
    steps: [
      { step: 'Expands the determinant to $x^{2} + 3x - 2$', marks: 1 },
      { step: 'Solves $x^{2} + 3x - 10 = 0$ to get $x = 2$ or $x = -5$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-b02', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'short', complexity: 'medium', marks: 2,
    text: '$A$ is a square matrix of order $3$ with $|A| = 4$. Find $|\\text{adj}(3A)|$.',
    answer: 'Let $M = 3A$. For order $3$, $|M| = 3^{3}|A| = 27 \\times 4 = 108$. For any square matrix of order $3$, $|\\text{adj } M| = |M|^{2}$. So $|\\text{adj}(3A)| = 108^{2} = 11664$.',
    steps: [
      { step: 'Finds $|3A| = 27 \\times 4 = 108$', marks: 1 },
      { step: 'Uses $|\\text{adj } M| = |M|^{2}$ to get $11664$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-b03', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 4 \\\\ 2 & 11 \\end{bmatrix}$. Find the matrix $X$ such that $AX = B$.',
    answer: '$|A| = 6 - 5 = 1 \\neq 0$, so $A^{-1}$ exists and $A^{-1} = \\text{adj } A = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$. Multiplying $AX = B$ on the left by $A^{-1}$: $X = A^{-1}B = \\begin{bmatrix} 3 - 2 & 12 - 11 \\\\ -5 + 4 & -20 + 22 \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}$. (Check: $AX = \\begin{bmatrix} 1 & 4 \\\\ 2 & 11 \\end{bmatrix} = B$.)',
    steps: [
      { step: 'Finds $|A| = 1$ and $A^{-1} = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$', marks: 1 },
      { step: 'Writes $X = A^{-1}B$ (in that order) and gets $X = \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-b04', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'A quadrilateral has vertices $A(0, 0)$, $B(6, 0)$, $C(5, 4)$ and $D(1, 5)$, in that order. Using determinants, find its area by splitting it along the diagonal $AC$.',
    answer: 'Area of $\\triangle ABC = \\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 6 & 0 & 1 \\\\ 5 & 4 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|6 \\times 4 - 0 \\times 5| = 12$. Area of $\\triangle ACD = \\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 5 & 4 & 1 \\\\ 1 & 5 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|5 \\times 5 - 4 \\times 1| = \\frac{21}{2}$. Area of $ABCD = 12 + \\frac{21}{2} = \\frac{45}{2}$ square units.',
    steps: [
      { step: 'Finds area of $\\triangle ABC = 12$ and area of $\\triangle ACD = \\frac{21}{2}$', marks: 1 },
      { step: 'Adds to get the area $\\frac{45}{2}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-b05', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Examine the consistency of the system $x - 3y = 4$, $2x - 6y = 5$.',
    answer: 'Write it as $AX = B$ with $A = \\begin{bmatrix} 1 & -3 \\\\ 2 & -6 \\end{bmatrix}$, $B = \\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$. $|A| = -6 + 6 = 0$, so there is no unique solution. $\\text{adj } A = \\begin{bmatrix} -6 & 3 \\\\ -2 & 1 \\end{bmatrix}$ and $(\\text{adj } A)B = \\begin{bmatrix} -24 + 15 \\\\ -8 + 5 \\end{bmatrix} = \\begin{bmatrix} -9 \\\\ -3 \\end{bmatrix} \\neq O$. Hence the system is inconsistent: it has no solution.',
    steps: [
      { step: 'Finds $|A| = 0$', marks: 1 },
      { step: 'Finds $(\\text{adj } A)B = \\begin{bmatrix} -9 \\\\ -3 \\end{bmatrix} \\neq O$ and concludes the system is inconsistent', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-det-r2-c01', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'On a town map, two straight roads follow the lines $3x - 2y = 4$ and $5x + 3y = 13$. Using the matrix method, find the point where the roads cross. Hence check whether a third road along $4x + y = 9$ passes through the same crossing.',
    answer: 'Write the first two equations as $AX = B$ with $A = \\begin{bmatrix} 3 & -2 \\\\ 5 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 4 \\\\ 13 \\end{bmatrix}$. $|A| = 9 + 10 = 19 \\neq 0$, so there is a unique crossing point. $A^{-1} = \\frac{1}{19}\\begin{bmatrix} 3 & 2 \\\\ -5 & 3 \\end{bmatrix}$, so $X = A^{-1}B = \\frac{1}{19}\\begin{bmatrix} 12 + 26 \\\\ -20 + 39 \\end{bmatrix} = \\frac{1}{19}\\begin{bmatrix} 38 \\\\ 19 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$. The roads cross at $(2, 1)$. For the third road, $4(2) + 1 = 9$, so yes, it passes through $(2, 1)$ as well.',
    steps: [
      { step: 'Writes $AX = B$ and finds $|A| = 19$ and $A^{-1} = \\frac{1}{19}\\begin{bmatrix} 3 & 2 \\\\ -5 & 3 \\end{bmatrix}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ to get the crossing point $(2, 1)$', marks: 1 },
      { step: 'Substitutes into $4x + y = 9$ and concludes the third road passes through it', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-c02', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $A = \\begin{bmatrix} \\lambda & 1 & 0 \\\\ 1 & \\lambda & 1 \\\\ 0 & 1 & \\lambda \\end{bmatrix}$. Find all real values of $\\lambda$ for which $A$ is not invertible. Then find $A^{-1}$ when $\\lambda = 1$.',
    answer: '$|A| = \\lambda(\\lambda^{2} - 1) - 1(\\lambda - 0) + 0 = \\lambda^{3} - 2\\lambda = \\lambda(\\lambda^{2} - 2)$. $A$ is not invertible exactly when $|A| = 0$, i.e. $\\lambda = 0$, $\\lambda = \\sqrt{2}$ or $\\lambda = -\\sqrt{2}$. For $\\lambda = 1$, $|A| = 1 - 2 = -1 \\neq 0$. Cofactors of $\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}$: $A_{11} = 0$, $A_{12} = -1$, $A_{13} = 1$; $A_{21} = -1$, $A_{22} = 1$, $A_{23} = -1$; $A_{31} = 1$, $A_{32} = -1$, $A_{33} = 0$. So $\\text{adj } A = \\begin{bmatrix} 0 & -1 & 1 \\\\ -1 & 1 & -1 \\\\ 1 & -1 & 0 \\end{bmatrix}$ and $A^{-1} = \\frac{1}{-1}\\,\\text{adj } A = \\begin{bmatrix} 0 & 1 & -1 \\\\ 1 & -1 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix}$.',
    steps: [
      { step: 'Finds $|A| = \\lambda^{3} - 2\\lambda$ and gets $\\lambda = 0, \\pm\\sqrt{2}$', marks: 1 },
      { step: 'For $\\lambda = 1$, finds $|A| = -1$ and the adjoint', marks: 1 },
      { step: 'Gets $A^{-1} = \\begin{bmatrix} 0 & 1 & -1 \\\\ 1 & -1 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-c03', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For $A = \\begin{bmatrix} 3 & 1 \\\\ 2 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 2 \\\\ -1 & 0 \\end{bmatrix}$, verify that $\\text{adj}(AB) = (\\text{adj } B)(\\text{adj } A)$.',
    answer: '$AB = \\begin{bmatrix} 3 - 1 & 6 + 0 \\\\ 2 + 1 & 4 + 0 \\end{bmatrix} = \\begin{bmatrix} 2 & 6 \\\\ 3 & 4 \\end{bmatrix}$, so $\\text{adj}(AB) = \\begin{bmatrix} 4 & -6 \\\\ -3 & 2 \\end{bmatrix}$. Next, $\\text{adj } A = \\begin{bmatrix} -1 & -1 \\\\ -2 & 3 \\end{bmatrix}$ and $\\text{adj } B = \\begin{bmatrix} 0 & -2 \\\\ 1 & 1 \\end{bmatrix}$. Then $(\\text{adj } B)(\\text{adj } A) = \\begin{bmatrix} 0 + 4 & 0 - 6 \\\\ -1 - 2 & -1 + 3 \\end{bmatrix} = \\begin{bmatrix} 4 & -6 \\\\ -3 & 2 \\end{bmatrix}$. The two sides are equal, so $\\text{adj}(AB) = (\\text{adj } B)(\\text{adj } A)$ is verified.',
    steps: [
      { step: 'Finds $AB$ and $\\text{adj}(AB) = \\begin{bmatrix} 4 & -6 \\\\ -3 & 2 \\end{bmatrix}$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $\\text{adj } B$ correctly', marks: 1 },
      { step: 'Multiplies $(\\text{adj } B)(\\text{adj } A)$ in that order and shows the two sides match', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-c04', chapter: C, topic: 'Evaluating determinants',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find all values of $x$ for which $\\begin{vmatrix} x & 2 & 3 \\\\ 1 & x & 1 \\\\ 3 & 2 & x \\end{vmatrix} = 0$.',
    answer: 'Expanding along the first row: $x(x^{2} - 2) - 2(x - 3) + 3(2 - 3x) = x^{3} - 2x - 2x + 6 + 6 - 9x = x^{3} - 13x + 12$. Setting this to $0$: $x = 1$ is a root since $1 - 13 + 12 = 0$, so $x^{3} - 13x + 12 = (x - 1)(x^{2} + x - 12) = (x - 1)(x - 3)(x + 4)$. Hence $x = 1$, $x = 3$ or $x = -4$.',
    steps: [
      { step: 'Expands the determinant correctly', marks: 1 },
      { step: 'Simplifies to $x^{3} - 13x + 12$', marks: 1 },
      { step: 'Factorises as $(x - 1)(x - 3)(x + 4)$ and gives $x = 1, 3, -4$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-c05', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The vertices of a triangle are $A(2, 3)$, $B(6, -1)$ and $C(4, 7)$. Using determinants, find its area. Hence find the length of the perpendicular from $C$ to the side $AB$.',
    answer: 'Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 2 & 3 & 1 \\\\ 6 & -1 & 1 \\\\ 4 & 7 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}\\left|2(-1 - 7) - 3(6 - 4) + 1(42 + 4)\\right| = \\frac{1}{2}|-16 - 6 + 46| = \\frac{1}{2} \\times 24 = 12$ square units. $AB = \\sqrt{(6 - 2)^{2} + (-1 - 3)^{2}} = \\sqrt{32} = 4\\sqrt{2}$. Since area $= \\frac{1}{2} \\times AB \\times h$, $h = \\frac{2 \\times 12}{4\\sqrt{2}} = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$ units.',
    steps: [
      { step: 'Evaluates the determinant as $24$', marks: 1 },
      { step: 'Gets the area $12$ square units', marks: 1 },
      { step: 'Finds $AB = 4\\sqrt{2}$ and the perpendicular $h = 3\\sqrt{2}$ units', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-det-r2-d01', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'Find $A^{-1}$ for $A = \\begin{bmatrix} 3 & -1 & 2 \\\\ 1 & 2 & -3 \\\\ 2 & 1 & 1 \\end{bmatrix}$. Hence solve the system $3x - y + 2z = 9$, $x + 2y - 3z = -3$, $2x + y + z = 4$.',
    answer: '$|A| = 3(2 + 3) - (-1)(1 + 6) + 2(1 - 4) = 15 + 7 - 6 = 16 \\neq 0$, so $A^{-1}$ exists. Cofactors: $A_{11} = 5$, $A_{12} = -7$, $A_{13} = -3$; $A_{21} = 3$, $A_{22} = -1$, $A_{23} = -5$; $A_{31} = -1$, $A_{32} = 11$, $A_{33} = 7$. So $\\text{adj } A = \\begin{bmatrix} 5 & 3 & -1 \\\\ -7 & -1 & 11 \\\\ -3 & -5 & 7 \\end{bmatrix}$ and $A^{-1} = \\frac{1}{16}\\begin{bmatrix} 5 & 3 & -1 \\\\ -7 & -1 & 11 \\\\ -3 & -5 & 7 \\end{bmatrix}$. The system is $AX = B$ with $B = \\begin{bmatrix} 9 \\\\ -3 \\\\ 4 \\end{bmatrix}$, so $X = A^{-1}B = \\frac{1}{16}\\begin{bmatrix} 45 - 9 - 4 \\\\ -63 + 3 + 44 \\\\ -27 + 15 + 28 \\end{bmatrix} = \\frac{1}{16}\\begin{bmatrix} 32 \\\\ -16 \\\\ 16 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\end{bmatrix}$. Hence $x = 2$, $y = -1$, $z = 1$.',
    steps: [
      { step: 'Finds $|A| = 16$', marks: 1 },
      { step: 'Finds all nine cofactors correctly', marks: 1 },
      { step: 'Writes $\\text{adj } A$ and $A^{-1} = \\frac{1}{16}\\,\\text{adj } A$', marks: 1 },
      { step: 'Writes the system as $AX = B$ and $X = A^{-1}B$', marks: 1 },
      { step: 'Gets $x = 2$, $y = -1$, $z = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d02', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'A cable hangs between two poles. Taking the ground as the $x$-axis, its shape is modelled by $y = ax^{2} + bx + c$ (in metres). The cable is $8$ m high at $x = -1$, $4$ m high at $x = 1$ and $5$ m high at $x = 2$. Using the matrix method, find $a$, $b$ and $c$, and hence find the height of the cable at $x = 3$.',
    answer: 'Substituting the three points: $a - b + c = 8$, $a + b + c = 4$, $4a + 2b + c = 5$. Order them as $AX = B$ with $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 4 & 2 & 1 \\end{bmatrix}$, $X = \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix}$, $B = \\begin{bmatrix} 4 \\\\ 8 \\\\ 5 \\end{bmatrix}$. $|A| = 1(-1 - 2) - 1(1 - 4) + 1(2 + 4) = -3 + 3 + 6 = 6 \\neq 0$. Cofactors: $A_{11} = -3$, $A_{12} = 3$, $A_{13} = 6$; $A_{21} = 1$, $A_{22} = -3$, $A_{23} = 2$; $A_{31} = 2$, $A_{32} = 0$, $A_{33} = -2$. $\\text{adj } A = \\begin{bmatrix} -3 & 1 & 2 \\\\ 3 & -3 & 0 \\\\ 6 & 2 & -2 \\end{bmatrix}$, $A^{-1} = \\frac{1}{6}\\,\\text{adj } A$. $X = A^{-1}B = \\frac{1}{6}\\begin{bmatrix} -12 + 8 + 10 \\\\ 12 - 24 + 0 \\\\ 24 + 16 - 10 \\end{bmatrix} = \\frac{1}{6}\\begin{bmatrix} 6 \\\\ -12 \\\\ 30 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -2 \\\\ 5 \\end{bmatrix}$. So $a = 1$, $b = -2$, $c = 5$ and the cable follows $y = x^{2} - 2x + 5$. At $x = 3$, $y = 9 - 6 + 5 = 8$ m.',
    steps: [
      { step: 'Forms the three equations in $a$, $b$, $c$ and writes $AX = B$', marks: 1 },
      { step: 'Finds $|A| = 6$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1}$', marks: 1 },
      { step: 'Computes $a = 1$, $b = -2$, $c = 5$', marks: 1 },
      { step: 'Finds the height $8$ m at $x = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d03', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'A workshop makes three products P, Q and R, each of which passes through three machines. One unit of P needs 1, 2 and 3 hours on machines I, II and III; one unit of Q needs 2, 1 and 2 hours; one unit of R needs 1, 3 and 2 hours. In one week machine I runs for 60 hours, machine II for 85 hours and machine III for 110 hours, all used fully. Using the matrix method, find how many units of each product were made.',
    answer: 'Let $x$, $y$, $z$ be the units of P, Q, R. Machine hours give $x + 2y + z = 60$, $2x + y + 3z = 85$, $3x + 2y + 2z = 110$. So $AX = B$ with $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 3 \\\\ 3 & 2 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 60 \\\\ 85 \\\\ 110 \\end{bmatrix}$. $|A| = 1(2 - 6) - 2(4 - 9) + 1(4 - 3) = -4 + 10 + 1 = 7 \\neq 0$. Cofactors: $A_{11} = -4$, $A_{12} = 5$, $A_{13} = 1$; $A_{21} = -2$, $A_{22} = -1$, $A_{23} = 4$; $A_{31} = 5$, $A_{32} = -1$, $A_{33} = -3$. $\\text{adj } A = \\begin{bmatrix} -4 & -2 & 5 \\\\ 5 & -1 & -1 \\\\ 1 & 4 & -3 \\end{bmatrix}$, $A^{-1} = \\frac{1}{7}\\,\\text{adj } A$. $X = A^{-1}B = \\frac{1}{7}\\begin{bmatrix} -240 - 170 + 550 \\\\ 300 - 85 - 110 \\\\ 60 + 340 - 330 \\end{bmatrix} = \\frac{1}{7}\\begin{bmatrix} 140 \\\\ 105 \\\\ 70 \\end{bmatrix} = \\begin{bmatrix} 20 \\\\ 15 \\\\ 10 \\end{bmatrix}$. The workshop made 20 units of P, 15 of Q and 10 of R.',
    steps: [
      { step: 'Forms the three machine-hour equations and writes $AX = B$', marks: 1 },
      { step: 'Finds $|A| = 7$', marks: 1 },
      { step: 'Finds the cofactors, $\\text{adj } A$ and $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$', marks: 1 },
      { step: 'States 20 units of P, 15 of Q and 10 of R', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d04', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'An archery target has an inner ring, a middle ring and an outer ring, each worth a fixed number of points. Three archers each shoot 10 arrows and every arrow hits some ring. Tara hits the inner ring 5 times, the middle ring 3 times and the outer ring twice, scoring 74. Dev hits them 3, 5 and 2 times and scores 66. Sana hits them 4, 2 and 4 times and scores 64. Using the matrix method, find the points for each ring.',
    answer: 'Let the inner, middle and outer rings be worth $x$, $y$, $z$ points. Then $5x + 3y + 2z = 74$, $3x + 5y + 2z = 66$, $4x + 2y + 4z = 64$. So $AX = B$ with $A = \\begin{bmatrix} 5 & 3 & 2 \\\\ 3 & 5 & 2 \\\\ 4 & 2 & 4 \\end{bmatrix}$, $B = \\begin{bmatrix} 74 \\\\ 66 \\\\ 64 \\end{bmatrix}$. $|A| = 5(20 - 4) - 3(12 - 8) + 2(6 - 20) = 80 - 12 - 28 = 40 \\neq 0$. Cofactors: $A_{11} = 16$, $A_{12} = -4$, $A_{13} = -14$; $A_{21} = -8$, $A_{22} = 12$, $A_{23} = 2$; $A_{31} = -4$, $A_{32} = -4$, $A_{33} = 16$. $\\text{adj } A = \\begin{bmatrix} 16 & -8 & -4 \\\\ -4 & 12 & -4 \\\\ -14 & 2 & 16 \\end{bmatrix}$, $A^{-1} = \\frac{1}{40}\\,\\text{adj } A$. $X = A^{-1}B = \\frac{1}{40}\\begin{bmatrix} 1184 - 528 - 256 \\\\ -296 + 792 - 256 \\\\ -1036 + 132 + 1024 \\end{bmatrix} = \\frac{1}{40}\\begin{bmatrix} 400 \\\\ 240 \\\\ 120 \\end{bmatrix} = \\begin{bmatrix} 10 \\\\ 6 \\\\ 3 \\end{bmatrix}$. The inner ring is worth 10 points, the middle ring 6 and the outer ring 3.',
    steps: [
      { step: 'Forms the three scoring equations and writes $AX = B$', marks: 1 },
      { step: 'Finds $|A| = 40$', marks: 1 },
      { step: 'Finds all cofactors and $\\text{adj } A$', marks: 1 },
      { step: 'Computes $X = \\frac{1}{40}(\\text{adj } A)B$', marks: 1 },
      { step: 'States inner 10, middle 6, outer 3 points', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d05', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Find $A^{-1}$ for $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 1 & -1 \\\\ 2 & 1 & 3 \\end{bmatrix}$. Hence find the row matrix $X = \\begin{bmatrix} p & q & r \\end{bmatrix}$ such that $XA = \\begin{bmatrix} 5 & 3 & 8 \\end{bmatrix}$.',
    answer: '$|A| = 1(3 + 1) - 2(0 + 2) + 1(0 - 2) = 4 - 4 - 2 = -2 \\neq 0$. Cofactors: $A_{11} = 4$, $A_{12} = -2$, $A_{13} = -2$; $A_{21} = -5$, $A_{22} = 1$, $A_{23} = 3$; $A_{31} = -3$, $A_{32} = 1$, $A_{33} = 1$. $\\text{adj } A = \\begin{bmatrix} 4 & -5 & -3 \\\\ -2 & 1 & 1 \\\\ -2 & 3 & 1 \\end{bmatrix}$ and $A^{-1} = -\\frac{1}{2}\\begin{bmatrix} 4 & -5 & -3 \\\\ -2 & 1 & 1 \\\\ -2 & 3 & 1 \\end{bmatrix}$. Multiplying $XA = \\begin{bmatrix} 5 & 3 & 8 \\end{bmatrix}$ on the right by $A^{-1}$: $X = \\begin{bmatrix} 5 & 3 & 8 \\end{bmatrix}A^{-1} = -\\frac{1}{2}\\begin{bmatrix} 20 - 6 - 16 & -25 + 3 + 24 & -15 + 3 + 8 \\end{bmatrix} = -\\frac{1}{2}\\begin{bmatrix} -2 & 2 & -4 \\end{bmatrix} = \\begin{bmatrix} 1 & -1 & 2 \\end{bmatrix}$. So $p = 1$, $q = -1$, $r = 2$. (Check: $\\begin{bmatrix} 1 & -1 & 2 \\end{bmatrix}A = \\begin{bmatrix} 1 + 0 + 4 & 2 - 1 + 2 & 1 + 1 + 6 \\end{bmatrix} = \\begin{bmatrix} 5 & 3 & 8 \\end{bmatrix}$.)',
    steps: [
      { step: 'Finds $|A| = -2$', marks: 1 },
      { step: 'Finds all nine cofactors and $\\text{adj } A$', marks: 1 },
      { step: 'Writes $A^{-1} = -\\frac{1}{2}\\,\\text{adj } A$', marks: 1 },
      { step: 'Uses $X = \\begin{bmatrix} 5 & 3 & 8 \\end{bmatrix}A^{-1}$, multiplying on the right', marks: 1 },
      { step: 'Gets $X = \\begin{bmatrix} 1 & -1 & 2 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d06', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'In a recycling drive a school collected 100 kg of paper, plastic and metal in all. A scrap dealer paid ₹10 per kg for paper, ₹15 per kg for plastic and ₹40 per kg for metal, and the school received ₹1,575. The metal collected was 10 kg less than the plastic. Using the matrix method, find the weight of each material collected.',
    answer: 'Let the weights of paper, plastic and metal be $x$, $y$, $z$ kg. Then $x + y + z = 100$; $10x + 15y + 40z = 1575$, i.e. $2x + 3y + 8z = 315$; and $z = y - 10$, i.e. $y - z = 10$. So $AX = B$ with $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 8 \\\\ 0 & 1 & -1 \\end{bmatrix}$, $B = \\begin{bmatrix} 100 \\\\ 315 \\\\ 10 \\end{bmatrix}$. $|A| = 1(-3 - 8) - 1(-2 - 0) + 1(2 - 0) = -11 + 2 + 2 = -7 \\neq 0$. Cofactors: $A_{11} = -11$, $A_{12} = 2$, $A_{13} = 2$; $A_{21} = 2$, $A_{22} = -1$, $A_{23} = -1$; $A_{31} = 5$, $A_{32} = -6$, $A_{33} = 1$. $\\text{adj } A = \\begin{bmatrix} -11 & 2 & 5 \\\\ 2 & -1 & -6 \\\\ 2 & -1 & 1 \\end{bmatrix}$, $A^{-1} = -\\frac{1}{7}\\,\\text{adj } A$. $X = A^{-1}B = -\\frac{1}{7}\\begin{bmatrix} -1100 + 630 + 50 \\\\ 200 - 315 - 60 \\\\ 200 - 315 + 10 \\end{bmatrix} = -\\frac{1}{7}\\begin{bmatrix} -420 \\\\ -175 \\\\ -105 \\end{bmatrix} = \\begin{bmatrix} 60 \\\\ 25 \\\\ 15 \\end{bmatrix}$. The school collected 60 kg of paper, 25 kg of plastic and 15 kg of metal. (Check: $600 + 375 + 600 = 1575$.)',
    steps: [
      { step: 'Forms the three equations, including $2x + 3y + 8z = 315$ and $y - z = 10$', marks: 1 },
      { step: 'Finds $|A| = -7$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$', marks: 1 },
      { step: 'States 60 kg paper, 25 kg plastic, 15 kg metal', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d07', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A foundry has three alloys. Alloy X is 50% copper, 30% zinc and 20% tin; alloy Y is 20% copper, 50% zinc and 30% tin; alloy Z is 30% copper, 20% zinc and 50% tin (by weight). It melts together some of each to make 100 kg of a new alloy containing 35 kg of copper, 33 kg of zinc and 32 kg of tin. Using the matrix method, find how many kilograms of each alloy were used.',
    answer: 'Let $x$, $y$, $z$ kg of alloys X, Y, Z be used. Copper: $0.5x + 0.2y + 0.3z = 35$; zinc: $0.3x + 0.5y + 0.2z = 33$; tin: $0.2x + 0.3y + 0.5z = 32$. Multiplying by $10$: $AX = B$ with $A = \\begin{bmatrix} 5 & 2 & 3 \\\\ 3 & 5 & 2 \\\\ 2 & 3 & 5 \\end{bmatrix}$, $B = \\begin{bmatrix} 350 \\\\ 330 \\\\ 320 \\end{bmatrix}$. $|A| = 5(25 - 6) - 2(15 - 4) + 3(9 - 10) = 95 - 22 - 3 = 70 \\neq 0$. Cofactors: $A_{11} = 19$, $A_{12} = -11$, $A_{13} = -1$; $A_{21} = -1$, $A_{22} = 19$, $A_{23} = -11$; $A_{31} = -11$, $A_{32} = -1$, $A_{33} = 19$. $\\text{adj } A = \\begin{bmatrix} 19 & -1 & -11 \\\\ -11 & 19 & -1 \\\\ -1 & -11 & 19 \\end{bmatrix}$, $A^{-1} = \\frac{1}{70}\\,\\text{adj } A$. $X = A^{-1}B = \\frac{1}{70}\\begin{bmatrix} 6650 - 330 - 3520 \\\\ -3850 + 6270 - 320 \\\\ -350 - 3630 + 6080 \\end{bmatrix} = \\frac{1}{70}\\begin{bmatrix} 2800 \\\\ 2100 \\\\ 2100 \\end{bmatrix} = \\begin{bmatrix} 40 \\\\ 30 \\\\ 30 \\end{bmatrix}$. The foundry used 40 kg of X, 30 kg of Y and 30 kg of Z (total 100 kg, as required).',
    steps: [
      { step: 'Forms the copper, zinc and tin equations and clears decimals to get $AX = B$', marks: 1 },
      { step: 'Finds $|A| = 70$', marks: 1 },
      { step: 'Finds the cofactors and $\\text{adj } A$', marks: 1 },
      { step: 'Computes $X = \\frac{1}{70}(\\text{adj } A)B$', marks: 1 },
      { step: 'States 40 kg of X, 30 kg of Y and 30 kg of Z', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d08', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'For $A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 0 & 2 & -3 \\\\ 3 & -2 & 4 \\end{bmatrix}$, find $\\text{adj } A$ and $|A|$. Verify that $A(\\text{adj } A) = (\\text{adj } A)A = |A|\\,I$ and that $|\\text{adj } A| = |A|^{2}$.',
    answer: 'Cofactors: $A_{11} = (8 - 6) = 2$, $A_{12} = -(0 + 9) = -9$, $A_{13} = (0 - 6) = -6$; $A_{21} = -(-4 + 4) = 0$, $A_{22} = (4 - 6) = -2$, $A_{23} = -(-2 + 3) = -1$; $A_{31} = (3 - 4) = -1$, $A_{32} = -(-3 - 0) = 3$, $A_{33} = (2 - 0) = 2$. So $\\text{adj } A = \\begin{bmatrix} 2 & 0 & -1 \\\\ -9 & -2 & 3 \\\\ -6 & -1 & 2 \\end{bmatrix}$. $|A| = 1(2) + (-1)(-9) + 2(-6) = 2 + 9 - 12 = -1$. Next, $A(\\text{adj } A) = \\begin{bmatrix} 2 + 9 - 12 & 0 + 2 - 2 & -1 - 3 + 4 \\\\ 0 - 18 + 18 & 0 - 4 + 3 & 0 + 6 - 6 \\\\ 6 + 18 - 24 & 0 + 4 - 4 & -3 - 6 + 8 \\end{bmatrix} = \\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix} = -I = |A|\\,I$ and $(\\text{adj } A)A = \\begin{bmatrix} 2 + 0 - 3 & -2 + 0 + 2 & 4 + 0 - 4 \\\\ -9 + 0 + 9 & 9 - 4 - 6 & -18 + 6 + 12 \\\\ -6 + 0 + 6 & 6 - 2 - 4 & -12 + 3 + 8 \\end{bmatrix} = -I = |A|\\,I$. Finally, $|\\text{adj } A| = 2(-4 + 3) - 0 + (-1)(9 - 12) = -2 + 3 = 1 = (-1)^{2} = |A|^{2}$. Both results are verified.',
    steps: [
      { step: 'Finds all nine cofactors and writes $\\text{adj } A$', marks: 1 },
      { step: 'Finds $|A| = -1$', marks: 1 },
      { step: 'Shows $A(\\text{adj } A) = -I = |A|\\,I$', marks: 1 },
      { step: 'Shows $(\\text{adj } A)A = -I = |A|\\,I$', marks: 1 },
      { step: 'Shows $|\\text{adj } A| = 1 = |A|^{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d09', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A bakery makes sponge, chocolate and fruit cakes. A sponge cake uses 3 cups of flour, 1 cup of sugar and 1 block of butter; a chocolate cake uses 2 cups of flour, 2 cups of sugar and 1 block of butter; a fruit cake uses 2 cups of flour, 1 cup of sugar and 2 blocks of butter. On Monday the bakery used 28 cups of flour, 17 cups of sugar and 15 blocks of butter; on Tuesday it used 32 cups of flour, 15 cups of sugar and 18 blocks of butter. Find the inverse of the coefficient matrix once and use it to find how many cakes of each kind were made on each day.',
    answer: 'Let $x$, $y$, $z$ be the numbers of sponge, chocolate and fruit cakes. Flour, sugar and butter give $AX = B$ with $A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$. $|A| = 3(4 - 1) - 2(2 - 1) + 2(1 - 2) = 9 - 2 - 2 = 5 \\neq 0$. Cofactors: $A_{11} = 3$, $A_{12} = -1$, $A_{13} = -1$; $A_{21} = -2$, $A_{22} = 4$, $A_{23} = -1$; $A_{31} = -2$, $A_{32} = -1$, $A_{33} = 4$. $A^{-1} = \\frac{1}{5}\\begin{bmatrix} 3 & -2 & -2 \\\\ -1 & 4 & -1 \\\\ -1 & -1 & 4 \\end{bmatrix}$. Monday, $B_{1} = \\begin{bmatrix} 28 \\\\ 17 \\\\ 15 \\end{bmatrix}$: $X = \\frac{1}{5}\\begin{bmatrix} 84 - 34 - 30 \\\\ -28 + 68 - 15 \\\\ -28 - 17 + 60 \\end{bmatrix} = \\frac{1}{5}\\begin{bmatrix} 20 \\\\ 25 \\\\ 15 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 5 \\\\ 3 \\end{bmatrix}$. Tuesday, $B_{2} = \\begin{bmatrix} 32 \\\\ 15 \\\\ 18 \\end{bmatrix}$: $X = \\frac{1}{5}\\begin{bmatrix} 96 - 30 - 36 \\\\ -32 + 60 - 18 \\\\ -32 - 15 + 72 \\end{bmatrix} = \\frac{1}{5}\\begin{bmatrix} 30 \\\\ 10 \\\\ 25 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 2 \\\\ 5 \\end{bmatrix}$. On Monday it made 4 sponge, 5 chocolate and 3 fruit cakes; on Tuesday 6 sponge, 2 chocolate and 5 fruit cakes.',
    steps: [
      { step: 'Writes the coefficient matrix $A$ and finds $|A| = 5$', marks: 1 },
      { step: 'Finds the cofactors and $\\text{adj } A$', marks: 1 },
      { step: 'Writes $A^{-1} = \\frac{1}{5}\\,\\text{adj } A$', marks: 1 },
      { step: 'Gets Monday: 4 sponge, 5 chocolate, 3 fruit', marks: 1 },
      { step: 'Gets Tuesday: 6 sponge, 2 chocolate, 5 fruit', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d10', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'A piggy bank holds 30 coins of ₹1, ₹2 and ₹5, worth ₹74 in total. The number of ₹1 coins and ₹5 coins together is 6 more than the number of ₹2 coins. Using the matrix method, find the number of coins of each kind.',
    answer: 'Let there be $x$ coins of ₹1, $y$ of ₹2 and $z$ of ₹5. Then $x + y + z = 30$, $x + 2y + 5z = 74$ and $x + z = y + 6$, i.e. $x - y + z = 6$. So $AX = B$ with $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 5 \\\\ 1 & -1 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 30 \\\\ 74 \\\\ 6 \\end{bmatrix}$. $|A| = 1(2 + 5) - 1(1 - 5) + 1(-1 - 2) = 7 + 4 - 3 = 8 \\neq 0$. Cofactors: $A_{11} = 7$, $A_{12} = 4$, $A_{13} = -3$; $A_{21} = -2$, $A_{22} = 0$, $A_{23} = 2$; $A_{31} = 3$, $A_{32} = -4$, $A_{33} = 1$. $\\text{adj } A = \\begin{bmatrix} 7 & -2 & 3 \\\\ 4 & 0 & -4 \\\\ -3 & 2 & 1 \\end{bmatrix}$, $A^{-1} = \\frac{1}{8}\\,\\text{adj } A$. $X = A^{-1}B = \\frac{1}{8}\\begin{bmatrix} 210 - 148 + 18 \\\\ 120 + 0 - 24 \\\\ -90 + 148 + 6 \\end{bmatrix} = \\frac{1}{8}\\begin{bmatrix} 80 \\\\ 96 \\\\ 64 \\end{bmatrix} = \\begin{bmatrix} 10 \\\\ 12 \\\\ 8 \\end{bmatrix}$. There are 10 coins of ₹1, 12 of ₹2 and 8 of ₹5. (Check: $10 + 24 + 40 = 74$.)',
    steps: [
      { step: 'Forms the three equations, including $x - y + z = 6$', marks: 1 },
      { step: 'Finds $|A| = 8$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$', marks: 1 },
      { step: 'States 10 coins of ₹1, 12 of ₹2 and 8 of ₹5', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d11', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'For $A = \\begin{bmatrix} 2 & 1 & 3 \\\\ 1 & 0 & 2 \\\\ 0 & 1 & 1 \\end{bmatrix}$, find $A^{-1}$ and $(A^{T})^{-1}$ separately, and hence verify that $(A^{T})^{-1} = (A^{-1})^{T}$.',
    answer: '$|A| = 2(0 - 2) - 1(1 - 0) + 3(1 - 0) = -4 - 1 + 3 = -2 \\neq 0$. Cofactors of $A$: $A_{11} = -2$, $A_{12} = -1$, $A_{13} = 1$; $A_{21} = 2$, $A_{22} = 2$, $A_{23} = -2$; $A_{31} = 2$, $A_{32} = -1$, $A_{33} = -1$. $\\text{adj } A = \\begin{bmatrix} -2 & 2 & 2 \\\\ -1 & 2 & -1 \\\\ 1 & -2 & -1 \\end{bmatrix}$, so $A^{-1} = -\\frac{1}{2}\\,\\text{adj } A = \\begin{bmatrix} 1 & -1 & -1 \\\\ \\frac{1}{2} & -1 & \\frac{1}{2} \\\\ -\\frac{1}{2} & 1 & \\frac{1}{2} \\end{bmatrix}$. Now $A^{T} = \\begin{bmatrix} 2 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 3 & 2 & 1 \\end{bmatrix}$ with $|A^{T}| = -2$. Its cofactors: $(1,1) = -2$, $(1,2) = 2$, $(1,3) = 2$; $(2,1) = -1$, $(2,2) = 2$, $(2,3) = -1$; $(3,1) = 1$, $(3,2) = -2$, $(3,3) = -1$. So $\\text{adj}(A^{T}) = \\begin{bmatrix} -2 & -1 & 1 \\\\ 2 & 2 & -2 \\\\ 2 & -1 & -1 \\end{bmatrix}$ and $(A^{T})^{-1} = -\\frac{1}{2}\\,\\text{adj}(A^{T}) = \\begin{bmatrix} 1 & \\frac{1}{2} & -\\frac{1}{2} \\\\ -1 & -1 & 1 \\\\ -1 & \\frac{1}{2} & \\frac{1}{2} \\end{bmatrix}$. Transposing $A^{-1}$ gives $(A^{-1})^{T} = \\begin{bmatrix} 1 & \\frac{1}{2} & -\\frac{1}{2} \\\\ -1 & -1 & 1 \\\\ -1 & \\frac{1}{2} & \\frac{1}{2} \\end{bmatrix}$, which is the same matrix. Hence $(A^{T})^{-1} = (A^{-1})^{T}$ is verified.',
    steps: [
      { step: 'Finds $|A| = -2$ and $\\text{adj } A$', marks: 1 },
      { step: 'Writes $A^{-1}$ correctly', marks: 1 },
      { step: 'Writes $A^{T}$ and finds its cofactors and adjoint', marks: 1 },
      { step: 'Writes $(A^{T})^{-1}$ correctly', marks: 1 },
      { step: 'Transposes $A^{-1}$ and shows it equals $(A^{T})^{-1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r2-d12', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & -1 & 2 \\\\ 3 & 2 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} -3 & 3 & 3 \\\\ 7 & -5 & -3 \\\\ 5 & -1 & -3 \\end{bmatrix}$. Find $AB$ and hence find $A^{-1}$. Use it to solve the system $2x + y + z = 8$, $x - y + 2z = 7$, $3x + 2y - z = 5$.',
    answer: '$AB = \\begin{bmatrix} -6 + 7 + 5 & 6 - 5 - 1 & 6 - 3 - 3 \\\\ -3 - 7 + 10 & 3 + 5 - 2 & 3 + 3 - 6 \\\\ -9 + 14 - 5 & 9 - 10 + 1 & 9 - 6 + 3 \\end{bmatrix} = \\begin{bmatrix} 6 & 0 & 0 \\\\ 0 & 6 & 0 \\\\ 0 & 0 & 6 \\end{bmatrix} = 6I$. So $A\\left(\\frac{1}{6}B\\right) = I$, which shows $A$ is invertible and $A^{-1} = \\frac{1}{6}B = \\frac{1}{6}\\begin{bmatrix} -3 & 3 & 3 \\\\ 7 & -5 & -3 \\\\ 5 & -1 & -3 \\end{bmatrix}$. The system is $AX = C$ with $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$ and $C = \\begin{bmatrix} 8 \\\\ 7 \\\\ 5 \\end{bmatrix}$, so $X = A^{-1}C = \\frac{1}{6}\\begin{bmatrix} -24 + 21 + 15 \\\\ 56 - 35 - 15 \\\\ 40 - 7 - 15 \\end{bmatrix} = \\frac{1}{6}\\begin{bmatrix} 12 \\\\ 6 \\\\ 18 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix}$. Hence $x = 2$, $y = 1$, $z = 3$. (Check: $4 + 1 + 3 = 8$, $2 - 1 + 6 = 7$, $6 + 2 - 3 = 5$.)',
    steps: [
      { step: 'Multiplies $A$ and $B$ correctly', marks: 1 },
      { step: 'Gets $AB = 6I$', marks: 1 },
      { step: 'Concludes $A^{-1} = \\frac{1}{6}B$', marks: 1 },
      { step: 'Writes the system as $AX = C$ and $X = A^{-1}C$', marks: 1 },
      { step: 'Gets $x = 2$, $y = 1$, $z = 3$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-det-r2-e01', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Three friends track their workouts with a fitness app. Running, cycling and swimming each burn a fixed number of calories per 10-minute block. Asha ran for 2 blocks, cycled for 3 and swam for 1, burning 580 calories. Ben ran for 1 block, cycled for 2 and swam for 3, burning 580 calories. Chitra ran for 3 blocks, cycled for 1 and swam for 2, burning 640 calories. Let $r$, $c$ and $s$ be the calories burnt per 10-minute block of running, cycling and swimming, and write the data as $AX = B$ with $X = \\begin{bmatrix} r \\\\ c \\\\ s \\end{bmatrix}$.',
    answer: '(i) $A = \\begin{bmatrix} 2 & 3 & 1 \\\\ 1 & 2 & 3 \\\\ 3 & 1 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 580 \\\\ 580 \\\\ 640 \\end{bmatrix}$. (ii) $|A| = 18$, so there is a unique solution. (iii) $A^{-1} = \\frac{1}{18}\\begin{bmatrix} 1 & -5 & 7 \\\\ 7 & 1 & -5 \\\\ -5 & 7 & 1 \\end{bmatrix}$. OR $r = 120$, $c = 80$, $s = 100$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the matrices $A$ and $B$.',
        answer: '$A = \\begin{bmatrix} 2 & 3 & 1 \\\\ 1 & 2 & 3 \\\\ 3 & 1 & 2 \\end{bmatrix}$ and $B = \\begin{bmatrix} 580 \\\\ 580 \\\\ 640 \\end{bmatrix}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $|A|$ and state whether the calorie values can be found uniquely.',
        answer: '$|A| = 2(4 - 3) - 3(2 - 9) + 1(1 - 6) = 2 + 21 - 5 = 18$. Since $|A| \\neq 0$, $A$ is invertible and the values are found uniquely.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $A^{-1}$.\nOR\nGiven that $A^{-1} = \\frac{1}{18}\\begin{bmatrix} 1 & -5 & 7 \\\\ 7 & 1 & -5 \\\\ -5 & 7 & 1 \\end{bmatrix}$, find the calories burnt per 10-minute block of each activity.',
        answer: 'Cofactors: $A_{11} = 1$, $A_{12} = 7$, $A_{13} = -5$; $A_{21} = -5$, $A_{22} = 1$, $A_{23} = 7$; $A_{31} = 7$, $A_{32} = -5$, $A_{33} = 1$. So $\\text{adj } A = \\begin{bmatrix} 1 & -5 & 7 \\\\ 7 & 1 & -5 \\\\ -5 & 7 & 1 \\end{bmatrix}$ (1 mark) and $A^{-1} = \\frac{1}{18}\\begin{bmatrix} 1 & -5 & 7 \\\\ 7 & 1 & -5 \\\\ -5 & 7 & 1 \\end{bmatrix}$ (1 mark). OR: $X = A^{-1}B = \\frac{1}{18}\\begin{bmatrix} 580 - 2900 + 4480 \\\\ 4060 + 580 - 3200 \\\\ -2900 + 4060 + 640 \\end{bmatrix} = \\frac{1}{18}\\begin{bmatrix} 2160 \\\\ 1440 \\\\ 1800 \\end{bmatrix}$ (1 mark) $= \\begin{bmatrix} 120 \\\\ 80 \\\\ 100 \\end{bmatrix}$: running burns 120, cycling 80 and swimming 100 calories per 10-minute block (1 mark).',
      },
    ],
  },
  {
    id: 'c12-det-r2-e02', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A drone surveys a farm shaped like a quadrilateral. On its map, with axes in units of 10 metres, the corners are $A(1, 1)$, $B(7, 2)$, $C(6, 6)$ and $D(2, 5)$, in that order. A straight fence runs along the diagonal from $A$ to $C$, splitting the farm into two fields.',
    answer: '(i) Area of $\\triangle ABC = \\frac{25}{2}$ square map units. (ii) $y = x$. (iii) Area of $ACD = \\frac{15}{2}$ square map units, so the farm is $20$ square map units $= 2000$ square metres. OR $k = 4$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Using determinants, find the area of field $ABC$ in square map units.',
        answer: 'Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 1 & 1 & 1 \\\\ 7 & 2 & 1 \\\\ 6 & 6 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}\\left|1(2 - 6) - 1(7 - 6) + 1(42 - 12)\\right| = \\frac{1}{2}|-4 - 1 + 30| = \\frac{25}{2}$ square map units.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Using determinants, find the equation of the fence line $AC$.',
        answer: 'A point $(x, y)$ is on $AC$ when $\\begin{vmatrix} x & y & 1 \\\\ 1 & 1 & 1 \\\\ 6 & 6 & 1 \\end{vmatrix} = 0$, i.e. $x(1 - 6) - y(1 - 6) + (6 - 6) = -5x + 5y = 0$. So the fence is the line $y = x$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using determinants, find the area of field $ACD$ and hence the total area of the farm in square metres.\nOR\nA water pump stands at $P(k, 4)$ on the fence. Using determinants, find $k$.',
        answer: 'Area of $ACD = \\frac{1}{2}\\left|\\begin{vmatrix} 1 & 1 & 1 \\\\ 6 & 6 & 1 \\\\ 2 & 5 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}\\left|1(6 - 5) - 1(6 - 2) + 1(30 - 12)\\right| = \\frac{1}{2}|1 - 4 + 18| = \\frac{15}{2}$ square map units (1 mark). Total area $= \\frac{25}{2} + \\frac{15}{2} = 20$ square map units. One map unit is $10$ m, so one square map unit is $100$ square metres, and the farm covers $2000$ square metres (1 mark). OR: $P(k, 4)$ lies on $AC$ when $\\begin{vmatrix} k & 4 & 1 \\\\ 1 & 1 & 1 \\\\ 6 & 6 & 1 \\end{vmatrix} = 0$ (1 mark), i.e. $k(1 - 6) - 4(1 - 6) + (6 - 6) = -5k + 20 = 0$, so $k = 4$ and the pump is at $(4, 4)$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-det-r2-e03', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A dietitian plans a daily mix of three foods P, Q and R. Each 100 g of P gives 2 units of protein, 1 unit of carbohydrate and 1 unit of fat; each 100 g of Q gives 1, 3 and 1 units; each 100 g of R gives 1, 2 and 3 units. The mix must supply exactly 12 units of protein, 17 units of carbohydrate and 17 units of fat. Let $x$, $y$, $z$ be the amounts of P, Q, R in hundreds of grams, and write the conditions as $AX = B$ with $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$.',
    answer: '(i) $A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 3 & 2 \\\\ 1 & 1 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 12 \\\\ 17 \\\\ 17 \\end{bmatrix}$. (ii) $|A| = 11$. (iii) $300$ g of P, $200$ g of Q, $400$ g of R. OR $A_{11} = 7$, $A_{21} = -2$, $A_{31} = -1$ and $|A| = 11$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the matrices $A$ and $B$.',
        answer: 'Rows are protein, carbohydrate and fat: $A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 3 & 2 \\\\ 1 & 1 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 12 \\\\ 17 \\\\ 17 \\end{bmatrix}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $|A|$. Can the dietitian meet the targets with exactly one mix?',
        answer: '$|A| = 2(9 - 2) - 1(3 - 2) + 1(1 - 3) = 14 - 1 - 2 = 11$. Since $|A| \\neq 0$, the system has a unique solution, so exactly one mix meets the targets.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using $A^{-1}$, find how many grams of each food go into the mix.\nOR\nFind the cofactors $A_{11}$, $A_{21}$ and $A_{31}$, and use them to find $|A|$ by expanding along the first column.',
        answer: 'Cofactors: $A_{11} = 7$, $A_{12} = -1$, $A_{13} = -2$; $A_{21} = -2$, $A_{22} = 5$, $A_{23} = -1$; $A_{31} = -1$, $A_{32} = -3$, $A_{33} = 5$. $A^{-1} = \\frac{1}{11}\\begin{bmatrix} 7 & -2 & -1 \\\\ -1 & 5 & -3 \\\\ -2 & -1 & 5 \\end{bmatrix}$ (1 mark). $X = A^{-1}B = \\frac{1}{11}\\begin{bmatrix} 84 - 34 - 17 \\\\ -12 + 85 - 51 \\\\ -24 - 17 + 85 \\end{bmatrix} = \\frac{1}{11}\\begin{bmatrix} 33 \\\\ 22 \\\\ 44 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 2 \\\\ 4 \\end{bmatrix}$, so the mix has $300$ g of P, $200$ g of Q and $400$ g of R (1 mark). OR: $A_{11} = (9 - 2) = 7$, $A_{21} = -(3 - 1) = -2$, $A_{31} = (2 - 3) = -1$ (1 mark); $|A| = a_{11}A_{11} + a_{21}A_{21} + a_{31}A_{31} = 2(7) + 1(-2) + 1(-1) = 11$ (1 mark).',
      },
    ],
  },
  {
    id: 'c12-det-r2-e04', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Two students send secret two-letter codes. Each letter is replaced by its position in the alphabet ($A = 1$, $B = 2$, ..., $Z = 26$), and a pair of letters becomes a column $X = \\begin{bmatrix} p \\\\ q \\end{bmatrix}$. The coded message is $Y = KX$, where the key matrix is $K = \\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$. The receiver decodes using $X = K^{-1}Y$.',
    answer: '(i) $|K| = 1 \\neq 0$, so $K$ is invertible and every message can be decoded. (ii) $K^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$. (iii) The word is GO. OR the code for HI is $\\begin{bmatrix} 33 \\\\ 58 \\end{bmatrix}$, which decodes back to $\\begin{bmatrix} 8 \\\\ 9 \\end{bmatrix}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $|K|$ and explain why every coded message can be decoded.',
        answer: '$|K| = 6 - 5 = 1$. Since $|K| \\neq 0$, $K$ is invertible, so $X = K^{-1}Y$ always recovers the original pair.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $K^{-1}$.',
        answer: '$\\text{adj } K = \\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$ and $|K| = 1$, so $K^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The receiver gets the coded column $Y = \\begin{bmatrix} 36 \\\\ 65 \\end{bmatrix}$. Decode it to find the two-letter word.\nOR\nEncode the word HI, and then decode your answer using $K^{-1}$ to check that you get HI back.',
        answer: '$X = K^{-1}Y = \\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}\\begin{bmatrix} 36 \\\\ 65 \\end{bmatrix} = \\begin{bmatrix} 72 - 65 \\\\ -180 + 195 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 15 \\end{bmatrix}$ (1 mark). Letters $7$ and $15$ are G and O, so the word is GO (1 mark). OR: HI is $X = \\begin{bmatrix} 8 \\\\ 9 \\end{bmatrix}$, so $Y = KX = \\begin{bmatrix} 24 + 9 \\\\ 40 + 18 \\end{bmatrix} = \\begin{bmatrix} 33 \\\\ 58 \\end{bmatrix}$ (1 mark). Decoding: $K^{-1}Y = \\begin{bmatrix} 66 - 58 \\\\ -165 + 174 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 9 \\end{bmatrix}$, which is HI again (1 mark).',
      },
    ],
  },
];
