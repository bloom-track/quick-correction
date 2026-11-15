import type { Class12Question } from './types.js';

const C = 'Determinants';

export const CH04_DET: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Evaluating determinants
  {
    id: 'c12-det-a01', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $\\begin{vmatrix} x & 5 \\\\ 4 & x \\end{vmatrix} = \\begin{vmatrix} 5 & 2 \\\\ -2 & 5 \\end{vmatrix}$, then $x$ equals',
    options: ['$7$', '$\\pm 7$', '$\\pm 3$', '$\\pm \\sqrt{29}$'],
    answer: 'Correct option: B) $\\pm 7$. The left side is $x^{2} - 20$ and the right side is $25 + 4 = 29$, so $x^{2} = 49$ and $x = \\pm 7$. Option A misses the negative root; $\\pm 3$ comes from taking the right side as $25 - 4 - 20$ wrongly.',
  },
  {
    id: 'c12-det-a02', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\begin{vmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & -2 \\end{vmatrix}$ is',
    options: ['$-85$', '$85$', '$-75$', '$-45$'],
    answer: 'Correct option: A) $-85$. Expanding along the first row: $2(-8 - 2) - (-1)(0 - 5) + 3(0 - 20) = -20 - 5 - 60 = -85$. Getting $-75$ comes from a sign slip in the middle term.',
  },
  {
    id: 'c12-det-a03', chapter: C, topic: 'Evaluating determinants',
    type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $A$ is a square matrix of order $3$ with $|A| = 2$, then $|-A| = -2$.\nReason (R): For a square matrix $A$ of order $n$ and a scalar $k$, $|kA| = k^{n}|A|$.',
    options: [
      'Both A and R are true and R is the correct explanation of A.',
      'Both A and R are true but R is not the correct explanation of A.',
      'A is true but R is false.',
      'A is false but R is true.',
    ],
    answer: 'Correct option: A) Both are true and R explains A. By R with $k = -1$ and $n = 3$, $|-A| = (-1)^{3}|A| = -2$, which is exactly the assertion.',
  },
  {
    id: 'c12-det-a04', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The matrix $\\begin{bmatrix} x & 6 \\\\ 2 & x - 1 \\end{bmatrix}$ is singular. The product of all possible values of $x$ is',
    options: ['$-12$', '$12$', '$1$', '$-1$'],
    answer: 'Correct option: A) $-12$. Singular means the determinant is zero: $x(x - 1) - 12 = 0$, i.e. $x^{2} - x - 12 = 0$, so $x = 4$ or $x = -3$, and their product is $-12$. The value $1$ is the sum of the roots, not the product.',
  },
  {
    id: 'c12-det-a05', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\begin{vmatrix} \\sin 40^\\circ & -\\cos 40^\\circ \\\\ \\sin 50^\\circ & \\cos 50^\\circ \\end{vmatrix}$ is',
    options: ['$0$', '$1$', '$-1$', '$\\cos 10^\\circ$'],
    answer: 'Correct option: B) $1$. The determinant is $\\sin 40^\\circ \\cos 50^\\circ + \\cos 40^\\circ \\sin 50^\\circ = \\sin(40^\\circ + 50^\\circ) = \\sin 90^\\circ = 1$.',
  },
  {
    id: 'c12-det-a06', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $\\begin{vmatrix} x & 1 & 2 \\\\ 0 & x & 3 \\\\ 1 & 1 & x \\end{vmatrix} = 3$, then the sum of the squares of all real values of $x$ is',
    options: ['$10$', '$5$', '$0$', '$25$'],
    answer: 'Correct option: A) $10$. Expanding along the first row: $x(x^{2} - 3) - 1(0 - 3) + 2(0 - x) = x^{3} - 5x + 3$. Setting this equal to $3$ gives $x(x^{2} - 5) = 0$, so $x = 0, \\sqrt{5}, -\\sqrt{5}$, and the sum of squares is $0 + 5 + 5 = 10$. Option B counts only one of the roots $\\pm\\sqrt{5}$; option C is the sum of the roots.',
  },

  // Minors, cofactors and adjoint
  {
    id: 'c12-det-a07', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $A = \\begin{bmatrix} 1 & -2 & 3 \\\\ 4 & 0 & 5 \\\\ -1 & 2 & 6 \\end{bmatrix}$, the cofactor of the element in row $3$, column $2$ is',
    options: ['$7$', '$-7$', '$17$', '$-17$'],
    answer: 'Correct option: A) $7$. The minor is $M_{32} = \\begin{vmatrix} 1 & 3 \\\\ 4 & 5 \\end{vmatrix} = 5 - 12 = -7$, and $A_{32} = (-1)^{3+2}M_{32} = 7$. Option B is the minor, not the cofactor.',
  },
  {
    id: 'c12-det-a08', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ is a square matrix of order $3$ with $|A| = -5$, then $|\\text{adj } A|$ is',
    options: ['$25$', '$-25$', '$125$', '$-125$'],
    answer: 'Correct option: A) $25$. For order $n$, $|\\text{adj } A| = |A|^{n-1} = (-5)^{2} = 25$. Option D uses the power $n$ instead of $n - 1$.',
  },
  {
    id: 'c12-det-a09', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For a square matrix $A$ of order $3$, $A(\\text{adj } A) = -3I$. The value of $|2\\,\\text{adj } A|$ is',
    options: ['$72$', '$18$', '$-216$', '$-72$'],
    answer: 'Correct option: A) $72$. Since $A(\\text{adj } A) = |A|I$, we get $|A| = -3$. Then $|\\text{adj } A| = |A|^{2} = 9$ and $|2\\,\\text{adj } A| = 2^{3} \\times 9 = 72$. Option B multiplies by $2$ instead of $2^{3}$.',
  },
  {
    id: 'c12-det-a10', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The adjoint of $A = \\begin{bmatrix} 3 & -1 \\\\ 5 & 2 \\end{bmatrix}$ is',
    options: [
      '$\\begin{bmatrix} 2 & 1 \\\\ -5 & 3 \\end{bmatrix}$',
      '$\\begin{bmatrix} 2 & -5 \\\\ 1 & 3 \\end{bmatrix}$',
      '$\\begin{bmatrix} 3 & 1 \\\\ -5 & 2 \\end{bmatrix}$',
      '$\\begin{bmatrix} 2 & -1 \\\\ 5 & 3 \\end{bmatrix}$',
    ],
    answer: 'Correct option: A) $\\begin{bmatrix} 2 & 1 \\\\ -5 & 3 \\end{bmatrix}$. For a $2 \\times 2$ matrix, swap the diagonal entries and change the signs of the off-diagonal entries: $\\text{adj } A = \\begin{bmatrix} 2 & 1 \\\\ -5 & 3 \\end{bmatrix}$. Option B is the cofactor matrix without transposing; option D forgets the sign change.',
  },

  // Inverse of a matrix and its properties
  {
    id: 'c12-det-a11', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The inverse of $A = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}$ is',
    options: [
      '$\\begin{bmatrix} \\frac{1}{2} & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & \\frac{1}{4} \\end{bmatrix}$',
      '$\\begin{bmatrix} -2 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & -4 \\end{bmatrix}$',
      '$\\begin{bmatrix} -\\frac{1}{2} & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & -\\frac{1}{4} \\end{bmatrix}$',
      '$\\begin{bmatrix} \\frac{1}{2} & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & \\frac{1}{4} \\end{bmatrix}$',
    ],
    answer: 'Correct option: A) the diagonal matrix with entries $\\frac{1}{2}$, $-1$, $\\frac{1}{4}$. The inverse of a diagonal matrix with non-zero diagonal entries is the diagonal matrix of their reciprocals: $\\frac{1}{2}$, $-1$, $\\frac{1}{4}$. Option C comes from a sign error with $|A| = -8$; option D drops the sign of $-1$.',
  },
  {
    id: 'c12-det-a12', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A$ is a square matrix of order $3$ with $|A| = 3$, then $|(2A)^{-1}|$ equals',
    options: ['$\\frac{1}{24}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$', '$24$'],
    answer: 'Correct option: A) $\\frac{1}{24}$. $|2A| = 2^{3}|A| = 24$, and $|(2A)^{-1}| = \\frac{1}{|2A|} = \\frac{1}{24}$. Option B uses $|2A| = 2|A|$; option D forgets to take the reciprocal.',
  },
  {
    id: 'c12-det-a13', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The matrix $\\begin{bmatrix} \\lambda & 2 & 1 \\\\ 1 & 1 & 0 \\\\ 2 & 0 & 1 \\end{bmatrix}$ is invertible for',
    options: ['$\\lambda \\in \\mathbb{R} - \\{4\\}$', '$\\lambda \\in \\mathbb{R} - \\{-4\\}$', '$\\lambda \\in \\mathbb{R} - \\{0\\}$', '$\\lambda = 4$ only'],
    answer: 'Correct option: A) $\\lambda \\in \\mathbb{R} - \\{4\\}$. The determinant is $\\lambda(1 - 0) - 2(1 - 0) + 1(0 - 2) = \\lambda - 4$. The matrix is invertible exactly when this is non-zero, i.e. $\\lambda \\neq 4$.',
  },
  {
    id: 'c12-det-a14', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $A$ is a non-singular matrix of order $3$ with $|A| = 5$, then $|A^{-1}| = \\frac{1}{5}$.\nReason (R): For any square matrix $A$, $|A^{T}| = |A|$.',
    options: [
      'Both A and R are true and R is the correct explanation of A.',
      'Both A and R are true but R is not the correct explanation of A.',
      'A is true but R is false.',
      'A is false but R is true.',
    ],
    answer: 'Correct option: B) Both are true but R does not explain A. A is true because $AA^{-1} = I$ gives $|A||A^{-1}| = 1$, so $|A^{-1}| = \\frac{1}{5}$. R is a true property of the transpose, but A follows from the product rule for determinants, not from R.',
  },

  // Area of a triangle using determinants
  {
    id: 'c12-det-a15', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The area of the triangle with vertices $(5, 1)$, $(1, k)$ and $(-3, 1)$ is $12$ square units. The value(s) of $k$ is/are',
    options: ['$4$ only', '$4$ or $-2$', '$-4$ or $2$', '$3$ or $-3$'],
    answer: 'Correct option: B) $4$ or $-2$. Area $= \\frac{1}{2}\\left|5(k - 1) + 1(1 - 1) + (-3)(1 - k)\\right| = \\frac{1}{2}|8k - 8| = 4|k - 1|$. Setting $4|k - 1| = 12$ gives $k - 1 = \\pm 3$, so $k = 4$ or $k = -2$. Option A ignores the absolute value.',
  },
  {
    id: 'c12-det-a16', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The points $(1, -1)$, $(3, p)$ and $(6, 9)$ are collinear. The value of $p$ is',
    options: ['$3$', '$5$', '$-3$', '$7$'],
    answer: 'Correct option: A) $3$. Collinear points form a triangle of zero area: $\\begin{vmatrix} 1 & -1 & 1 \\\\ 3 & p & 1 \\\\ 6 & 9 & 1 \\end{vmatrix} = 1(p - 9) + 1(3 - 6) + 1(27 - 6p) = 15 - 5p = 0$, so $p = 3$.',
  },
  {
    id: 'c12-det-a17', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Using determinants, the area of the triangle with vertices $(1, 0)$, $(6, 0)$ and $(4, 3)$ is',
    options: ['$\\frac{15}{2}$ square units', '$15$ square units', '$7$ square units', '$\\frac{13}{2}$ square units'],
    answer: 'Correct option: A) $\\frac{15}{2}$ square units. $\\frac{1}{2}\\begin{vmatrix} 1 & 0 & 1 \\\\ 6 & 0 & 1 \\\\ 4 & 3 & 1 \\end{vmatrix} = \\frac{1}{2}\\left[1(0 - 3) - 0 + 1(18 - 0)\\right] = \\frac{15}{2}$. Option B forgets the factor $\\frac{1}{2}$.',
  },

  // Solving linear equations by the matrix method
  {
    id: 'c12-det-a18', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For the system $AX = B$ of three equations in three unknowns, $|A| = 0$ and $(\\text{adj } A)B \\neq O$. Then the system',
    options: [
      'has a unique solution',
      'has infinitely many solutions',
      'has no solution (it is inconsistent)',
      'has only the trivial solution $X = O$',
    ],
    answer: 'Correct option: C) it has no solution. When $|A| = 0$ and $(\\text{adj } A)B \\neq O$, the system is inconsistent and has no solution. A unique solution needs $|A| \\neq 0$; infinitely many or no solutions are decided further only when $(\\text{adj } A)B = O$.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-det-b01', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'medium', marks: 2,
    text: '$A$ and $B$ are square matrices of order $3$ with $|A| = -2$ and $|B| = 3$. Find the value of $|3A^{-1}B^{T}|$.',
    answer: 'Using $|kM| = k^{3}|M|$ for order $3$, $|MN| = |M||N|$, $|A^{-1}| = \\frac{1}{|A|}$ and $|B^{T}| = |B|$: $|3A^{-1}B^{T}| = 3^{3} \\times |A^{-1}| \\times |B^{T}| = 27 \\times \\left(-\\frac{1}{2}\\right) \\times 3 = -\\frac{81}{2}$.',
    steps: [
      { step: 'Uses $|A^{-1}| = -\\frac{1}{2}$ and $|B^{T}| = 3$', marks: 1 },
      { step: 'Applies $|3M| = 27|M|$ and gets $-\\frac{81}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-b02', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find all values of $k$ for which the system $kx + 3y = 5$, $4x + (k - 4)y = 7$ has a unique solution.',
    answer: 'Write the system as $AX = B$ with $A = \\begin{bmatrix} k & 3 \\\\ 4 & k - 4 \\end{bmatrix}$. A unique solution exists exactly when $|A| \\neq 0$. $|A| = k(k - 4) - 12 = k^{2} - 4k - 12 = (k - 6)(k + 2)$. So the system has a unique solution for all real $k$ except $k = 6$ and $k = -2$.',
    steps: [
      { step: 'States unique solution iff $|A| \\neq 0$ and gets $|A| = k^{2} - 4k - 12$', marks: 1 },
      { step: 'Concludes $k \\neq 6$ and $k \\neq -2$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-b03', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Using determinants, find the area of the triangle whose vertices are $(-2, 1)$, $(3, 4)$ and $(5, -1)$.',
    answer: 'Area $= \\frac{1}{2}\\left|\\begin{vmatrix} -2 & 1 & 1 \\\\ 3 & 4 & 1 \\\\ 5 & -1 & 1 \\end{vmatrix}\\right|$. The determinant is $-2(4 + 1) - 1(3 - 5) + 1(-3 - 20) = -10 + 2 - 23 = -31$. Area $= \\frac{1}{2} \\times 31 = \\frac{31}{2}$ square units.',
    steps: [
      { step: 'Sets up the area determinant and evaluates it as $-31$', marks: 1 },
      { step: 'Takes the absolute value: area $= \\frac{31}{2}$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-det-b04', chapter: C, topic: 'Evaluating determinants',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find $x$ if $\\begin{vmatrix} x + 1 & x - 1 \\\\ x - 3 & x + 2 \\end{vmatrix} = \\begin{vmatrix} 4 & -1 \\\\ 1 & 3 \\end{vmatrix}$.',
    answer: 'Left side: $(x + 1)(x + 2) - (x - 1)(x - 3) = (x^{2} + 3x + 2) - (x^{2} - 4x + 3) = 7x - 1$. Right side: $12 + 1 = 13$. So $7x - 1 = 13$, giving $x = 2$.',
    steps: [
      { step: 'Expands the left side to $7x - 1$ and the right side to $13$', marks: 1 },
      { step: 'Solves to get $x = 2$', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-det-c01', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The area of the triangle with vertices $(2, -3)$, $(k, 1)$ and $(-1, 4)$ is $6$ square units. Using determinants, find all possible values of $k$.',
    answer: 'Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 2 & -3 & 1 \\\\ k & 1 & 1 \\\\ -1 & 4 & 1 \\end{vmatrix}\\right|$. Expanding along the first row: $2(1 - 4) + 3(k + 1) + 1(4k + 1) = -6 + 3k + 3 + 4k + 1 = 7k - 2$. So $\\frac{1}{2}|7k - 2| = 6$, i.e. $7k - 2 = 12$ or $7k - 2 = -12$. Hence $k = 2$ or $k = -\\frac{10}{7}$.',
    steps: [
      { step: 'Writes the area formula with the determinant of the three vertices', marks: 1 },
      { step: 'Evaluates the determinant as $7k - 2$', marks: 1 },
      { step: 'Uses $|7k - 2| = 12$ to get $k = 2$ or $k = -\\frac{10}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-c02', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For $A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 2 \\\\ -2 & 1 & 4 \\end{bmatrix}$, find the cofactors of the elements of the second row. Hence find $|A|$ by expanding along the second row, and verify that $a_{11}A_{21} + a_{12}A_{22} + a_{13}A_{23} = 0$.',
    answer: '$A_{21} = (-1)^{3}\\begin{vmatrix} 2 & -1 \\\\ 1 & 4 \\end{vmatrix} = -(8 + 1) = -9$. $A_{22} = (-1)^{4}\\begin{vmatrix} 1 & -1 \\\\ -2 & 4 \\end{vmatrix} = 4 - 2 = 2$. $A_{23} = (-1)^{5}\\begin{vmatrix} 1 & 2 \\\\ -2 & 1 \\end{vmatrix} = -(1 + 4) = -5$. Then $|A| = 3(-9) + 0(2) + 2(-5) = -37$. Check: $a_{11}A_{21} + a_{12}A_{22} + a_{13}A_{23} = 1(-9) + 2(2) + (-1)(-5) = -9 + 4 + 5 = 0$, as expected, since elements of one row times cofactors of another row always sum to zero.',
    steps: [
      { step: 'Finds $A_{21} = -9$, $A_{22} = 2$, $A_{23} = -5$', marks: 1 },
      { step: 'Gets $|A| = -37$ by expanding along row 2', marks: 1 },
      { step: 'Verifies $1(-9) + 2(2) + (-1)(-5) = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-c03', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For $A = \\begin{bmatrix} 3 & 2 \\\\ 4 & 3 \\end{bmatrix}$, show that $A^{2} - 6A + I = O$. Hence find $A^{-1}$.',
    answer: '$A^{2} = \\begin{bmatrix} 9 + 8 & 6 + 6 \\\\ 12 + 12 & 8 + 9 \\end{bmatrix} = \\begin{bmatrix} 17 & 12 \\\\ 24 & 17 \\end{bmatrix}$. $6A = \\begin{bmatrix} 18 & 12 \\\\ 24 & 18 \\end{bmatrix}$. So $A^{2} - 6A + I = \\begin{bmatrix} 17 - 18 + 1 & 0 \\\\ 0 & 17 - 18 + 1 \\end{bmatrix} = O$. Since $|A| = 9 - 8 = 1 \\neq 0$, $A^{-1}$ exists. Multiplying $A^{2} - 6A + I = O$ by $A^{-1}$ gives $A - 6I + A^{-1} = O$, so $A^{-1} = 6I - A = \\begin{bmatrix} 3 & -2 \\\\ -4 & 3 \\end{bmatrix}$.',
    steps: [
      { step: 'Computes $A^{2} = \\begin{bmatrix} 17 & 12 \\\\ 24 & 17 \\end{bmatrix}$ and shows $A^{2} - 6A + I = O$', marks: 1 },
      { step: 'Notes $|A| \\neq 0$ and multiplies by $A^{-1}$ to get $A^{-1} = 6I - A$', marks: 1 },
      { step: 'Gets $A^{-1} = \\begin{bmatrix} 3 & -2 \\\\ -4 & 3 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-c04', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Using the matrix method, solve $\\frac{2}{x} + \\frac{3}{y} = 13$ and $\\frac{5}{x} - \\frac{4}{y} = -2$, where $x, y \\neq 0$.',
    answer: 'Let $u = \\frac{1}{x}$ and $v = \\frac{1}{y}$. Then $2u + 3v = 13$ and $5u - 4v = -2$, i.e. $AX = B$ with $A = \\begin{bmatrix} 2 & 3 \\\\ 5 & -4 \\end{bmatrix}$, $X = \\begin{bmatrix} u \\\\ v \\end{bmatrix}$, $B = \\begin{bmatrix} 13 \\\\ -2 \\end{bmatrix}$. $|A| = -8 - 15 = -23 \\neq 0$, so a unique solution exists. $\\text{adj } A = \\begin{bmatrix} -4 & -3 \\\\ -5 & 2 \\end{bmatrix}$, so $A^{-1} = -\\frac{1}{23}\\begin{bmatrix} -4 & -3 \\\\ -5 & 2 \\end{bmatrix}$. $X = A^{-1}B = -\\frac{1}{23}\\begin{bmatrix} -52 + 6 \\\\ -65 - 4 \\end{bmatrix} = -\\frac{1}{23}\\begin{bmatrix} -46 \\\\ -69 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$. So $u = 2$, $v = 3$, giving $x = \\frac{1}{2}$ and $y = \\frac{1}{3}$.',
    steps: [
      { step: 'Substitutes $u = \\frac{1}{x}$, $v = \\frac{1}{y}$ and writes $AX = B$ with $|A| = -23$', marks: 1 },
      { step: 'Finds $A^{-1} = -\\frac{1}{23}\\begin{bmatrix} -4 & -3 \\\\ -5 & 2 \\end{bmatrix}$', marks: 1 },
      { step: 'Gets $u = 2$, $v = 3$ and hence $x = \\frac{1}{2}$, $y = \\frac{1}{3}$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-det-d01', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'If $A = \\begin{bmatrix} 2 & 1 & -1 \\\\ 1 & -1 & 1 \\\\ 1 & 2 & 3 \\end{bmatrix}$, find $A^{-1}$. Hence solve the system $2x + y - z = 2$, $x - y + z = 4$, $x + 2y + 3z = 3$.',
    answer: '$|A| = 2(-3 - 2) - 1(3 - 1) + (-1)(2 + 1) = -10 - 2 - 3 = -15 \\neq 0$, so $A^{-1}$ exists. Cofactors: $A_{11} = -5$, $A_{12} = -2$, $A_{13} = 3$; $A_{21} = -5$, $A_{22} = 7$, $A_{23} = -3$; $A_{31} = 0$, $A_{32} = -3$, $A_{33} = -3$. So $\\text{adj } A = \\begin{bmatrix} -5 & -5 & 0 \\\\ -2 & 7 & -3 \\\\ 3 & -3 & -3 \\end{bmatrix}$ and $A^{-1} = -\\frac{1}{15}\\begin{bmatrix} -5 & -5 & 0 \\\\ -2 & 7 & -3 \\\\ 3 & -3 & -3 \\end{bmatrix}$. The system is $AX = B$ with $B = \\begin{bmatrix} 2 \\\\ 4 \\\\ 3 \\end{bmatrix}$, so $X = A^{-1}B = -\\frac{1}{15}\\begin{bmatrix} -10 - 20 + 0 \\\\ -4 + 28 - 9 \\\\ 6 - 12 - 9 \\end{bmatrix} = -\\frac{1}{15}\\begin{bmatrix} -30 \\\\ 15 \\\\ -15 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\end{bmatrix}$. Hence $x = 2$, $y = -1$, $z = 1$.',
    steps: [
      { step: 'Finds $|A| = -15$ and notes $A^{-1}$ exists', marks: 1 },
      { step: 'Finds all nine cofactors correctly', marks: 1 },
      { step: 'Writes $\\text{adj } A$ and $A^{-1} = -\\frac{1}{15}\\,\\text{adj } A$', marks: 1 },
      { step: 'Writes the system as $AX = B$ and $X = A^{-1}B$', marks: 1 },
      { step: 'Gets $x = 2$, $y = -1$, $z = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d02', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Given $A = \\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 2 & 0 & 1 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & -2 & 6 \\\\ 6 & 1 & -3 \\\\ -2 & 4 & 1 \\end{bmatrix}$, find $AB$. Use it to solve the system $x - 2y + 6z = 6$, $6x + y - 3z = 10$, $-2x + 4y + z = 1$.',
    answer: '$AB = \\begin{bmatrix} 1 + 12 + 0 & -2 + 2 + 0 & 6 - 6 + 0 \\\\ 0 + 6 - 6 & 0 + 1 + 12 & 0 - 3 + 3 \\\\ 2 + 0 - 2 & -4 + 0 + 4 & 12 + 0 + 1 \\end{bmatrix} = \\begin{bmatrix} 13 & 0 & 0 \\\\ 0 & 13 & 0 \\\\ 0 & 0 & 13 \\end{bmatrix} = 13I$. So $A\\left(\\frac{1}{13}B\\right) = I$, which means $B^{-1} = \\frac{1}{13}A$. The given system has coefficient matrix $B$: $BX = C$ with $C = \\begin{bmatrix} 6 \\\\ 10 \\\\ 1 \\end{bmatrix}$. Hence $X = B^{-1}C = \\frac{1}{13}AC = \\frac{1}{13}\\begin{bmatrix} 6 + 20 + 0 \\\\ 0 + 10 + 3 \\\\ 12 + 0 + 1 \\end{bmatrix} = \\frac{1}{13}\\begin{bmatrix} 26 \\\\ 13 \\\\ 13 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\\\ 1 \\end{bmatrix}$. So $x = 2$, $y = 1$, $z = 1$.',
    steps: [
      { step: 'Multiplies correctly to get $AB = 13I$', marks: 2 },
      { step: 'Deduces $B^{-1} = \\frac{1}{13}A$', marks: 1 },
      { step: 'Recognises the system as $BX = C$ and writes $X = \\frac{1}{13}AC$', marks: 1 },
      { step: 'Gets $x = 2$, $y = 1$, $z = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d03', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'At a school canteen, Riya pays ₹145 for 2 sandwiches, 3 juices and 1 muffin. Kabir pays ₹155 for 3 sandwiches, 2 juices and 1 muffin. Meera pays ₹100 for 1 sandwich, 1 juice and 2 muffins. Using the matrix method, find the price of one sandwich, one juice and one muffin.',
    answer: 'Let the prices of a sandwich, a juice and a muffin be ₹$x$, ₹$y$, ₹$z$. Then $2x + 3y + z = 145$, $3x + 2y + z = 155$, $x + y + 2z = 100$, i.e. $AX = B$ with $A = \\begin{bmatrix} 2 & 3 & 1 \\\\ 3 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 145 \\\\ 155 \\\\ 100 \\end{bmatrix}$. $|A| = 2(4 - 1) - 3(6 - 1) + 1(3 - 2) = 6 - 15 + 1 = -8 \\neq 0$. Cofactors: $A_{11} = 3$, $A_{12} = -5$, $A_{13} = 1$; $A_{21} = -5$, $A_{22} = 3$, $A_{23} = 1$; $A_{31} = 1$, $A_{32} = 1$, $A_{33} = -5$. $\\text{adj } A = \\begin{bmatrix} 3 & -5 & 1 \\\\ -5 & 3 & 1 \\\\ 1 & 1 & -5 \\end{bmatrix}$, $A^{-1} = -\\frac{1}{8}\\,\\text{adj } A$. $X = A^{-1}B = -\\frac{1}{8}\\begin{bmatrix} 435 - 775 + 100 \\\\ -725 + 465 + 100 \\\\ 145 + 155 - 500 \\end{bmatrix} = -\\frac{1}{8}\\begin{bmatrix} -240 \\\\ -160 \\\\ -200 \\end{bmatrix} = \\begin{bmatrix} 30 \\\\ 20 \\\\ 25 \\end{bmatrix}$. A sandwich costs ₹30, a juice ₹20 and a muffin ₹25.',
    steps: [
      { step: 'Forms the three equations and writes them as $AX = B$', marks: 1 },
      { step: 'Finds $|A| = -8$', marks: 1 },
      { step: 'Finds the cofactors and $\\text{adj } A$, hence $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$', marks: 1 },
      { step: 'States the prices: sandwich ₹30, juice ₹20, muffin ₹25', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d04', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Anil invests a total of ₹50,000 in three schemes paying simple interest of 6%, 8% and 10% per year. His total interest for one year is ₹3,900. The amount in the 6% scheme is ₹10,000 less than the combined amount in the other two schemes. Using the matrix method, find the amount invested in each scheme.',
    answer: 'Let the amounts in the 6%, 8% and 10% schemes be ₹$x$, ₹$y$, ₹$z$. Then $x + y + z = 50000$; $0.06x + 0.08y + 0.10z = 3900$, i.e. $3x + 4y + 5z = 195000$; and $x = y + z - 10000$, i.e. $x - y - z = -10000$. So $AX = B$ with $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 3 & 4 & 5 \\\\ 1 & -1 & -1 \\end{bmatrix}$, $B = \\begin{bmatrix} 50000 \\\\ 195000 \\\\ -10000 \\end{bmatrix}$. $|A| = 1(-4 + 5) - 1(-3 - 5) + 1(-3 - 4) = 1 + 8 - 7 = 2 \\neq 0$. Cofactors: $A_{11} = 1$, $A_{12} = 8$, $A_{13} = -7$; $A_{21} = 0$, $A_{22} = -2$, $A_{23} = 2$; $A_{31} = 1$, $A_{32} = -2$, $A_{33} = 1$. $\\text{adj } A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 8 & -2 & -2 \\\\ -7 & 2 & 1 \\end{bmatrix}$, $A^{-1} = \\frac{1}{2}\\,\\text{adj } A$. $X = A^{-1}B = \\frac{1}{2}\\begin{bmatrix} 50000 + 0 - 10000 \\\\ 400000 - 390000 + 20000 \\\\ -350000 + 390000 - 10000 \\end{bmatrix} = \\frac{1}{2}\\begin{bmatrix} 40000 \\\\ 30000 \\\\ 30000 \\end{bmatrix} = \\begin{bmatrix} 20000 \\\\ 15000 \\\\ 15000 \\end{bmatrix}$. He invests ₹20,000 at 6%, ₹15,000 at 8% and ₹15,000 at 10%. (Check: interest $= 1200 + 1200 + 1500 = 3900$.)',
    steps: [
      { step: 'Forms the three equations correctly, including $3x + 4y + 5z = 195000$ and $x - y - z = -10000$', marks: 1 },
      { step: 'Finds $|A| = 2$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$', marks: 1 },
      { step: 'States ₹20,000 at 6%, ₹15,000 at 8%, ₹15,000 at 10%', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d05', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Using the matrix method, solve the system $\\frac{2}{x} + \\frac{3}{y} - \\frac{1}{z} = 4$, $\\frac{1}{x} - \\frac{2}{y} + \\frac{4}{z} = 12$, $\\frac{3}{x} + \\frac{1}{y} + \\frac{2}{z} = 13$, where $x, y, z \\neq 0$.',
    answer: 'Let $u = \\frac{1}{x}$, $v = \\frac{1}{y}$, $w = \\frac{1}{z}$. The system becomes $AU = B$ with $A = \\begin{bmatrix} 2 & 3 & -1 \\\\ 1 & -2 & 4 \\\\ 3 & 1 & 2 \\end{bmatrix}$, $U = \\begin{bmatrix} u \\\\ v \\\\ w \\end{bmatrix}$, $B = \\begin{bmatrix} 4 \\\\ 12 \\\\ 13 \\end{bmatrix}$. $|A| = 2(-4 - 4) - 3(2 - 12) + (-1)(1 + 6) = -16 + 30 - 7 = 7 \\neq 0$. Cofactors: $A_{11} = -8$, $A_{12} = 10$, $A_{13} = 7$; $A_{21} = -7$, $A_{22} = 7$, $A_{23} = 7$; $A_{31} = 10$, $A_{32} = -9$, $A_{33} = -7$. $\\text{adj } A = \\begin{bmatrix} -8 & -7 & 10 \\\\ 10 & 7 & -9 \\\\ 7 & 7 & -7 \\end{bmatrix}$, $A^{-1} = \\frac{1}{7}\\,\\text{adj } A$. $U = A^{-1}B = \\frac{1}{7}\\begin{bmatrix} -32 - 84 + 130 \\\\ 40 + 84 - 117 \\\\ 28 + 84 - 91 \\end{bmatrix} = \\frac{1}{7}\\begin{bmatrix} 14 \\\\ 7 \\\\ 21 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix}$. So $u = 2$, $v = 1$, $w = 3$, giving $x = \\frac{1}{2}$, $y = 1$, $z = \\frac{1}{3}$.',
    steps: [
      { step: 'Substitutes $u, v, w$ for the reciprocals and writes $AU = B$', marks: 1 },
      { step: 'Finds $|A| = 7$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1} = \\frac{1}{7}\\,\\text{adj } A$', marks: 1 },
      { step: 'Computes $u = 2$, $v = 1$, $w = 3$', marks: 1 },
      { step: 'Converts back: $x = \\frac{1}{2}$, $y = 1$, $z = \\frac{1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d06', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'If $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 1 & -1 \\\\ 3 & -1 & 2 \\end{bmatrix}$ and $B^{-1} = \\begin{bmatrix} 1 & 0 & 2 \\\\ 1 & 1 & 0 \\\\ 0 & 2 & 1 \\end{bmatrix}$, find $(AB)^{-1}$.',
    answer: 'We use $(AB)^{-1} = B^{-1}A^{-1}$. $|A| = 1(2 - 1) - 2(0 + 3) + 1(0 - 3) = 1 - 6 - 3 = -8 \\neq 0$. Cofactors: $A_{11} = 1$, $A_{12} = -3$, $A_{13} = -3$; $A_{21} = -5$, $A_{22} = -1$, $A_{23} = 7$; $A_{31} = -3$, $A_{32} = 1$, $A_{33} = 1$. $\\text{adj } A = \\begin{bmatrix} 1 & -5 & -3 \\\\ -3 & -1 & 1 \\\\ -3 & 7 & 1 \\end{bmatrix}$, so $A^{-1} = \\frac{1}{8}\\begin{bmatrix} -1 & 5 & 3 \\\\ 3 & 1 & -1 \\\\ 3 & -7 & -1 \\end{bmatrix}$. Then $(AB)^{-1} = B^{-1}A^{-1} = \\frac{1}{8}\\begin{bmatrix} 1 & 0 & 2 \\\\ 1 & 1 & 0 \\\\ 0 & 2 & 1 \\end{bmatrix}\\begin{bmatrix} -1 & 5 & 3 \\\\ 3 & 1 & -1 \\\\ 3 & -7 & -1 \\end{bmatrix} = \\frac{1}{8}\\begin{bmatrix} 5 & -9 & 1 \\\\ 2 & 6 & 2 \\\\ 9 & -5 & -3 \\end{bmatrix}$.',
    steps: [
      { step: 'States $(AB)^{-1} = B^{-1}A^{-1}$', marks: 1 },
      { step: 'Finds $|A| = -8$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1} = \\frac{1}{8}\\begin{bmatrix} -1 & 5 & 3 \\\\ 3 & 1 & -1 \\\\ 3 & -7 & -1 \\end{bmatrix}$', marks: 1 },
      { step: 'Multiplies $B^{-1}A^{-1}$ in the correct order', marks: 1 },
      { step: 'Gets $(AB)^{-1} = \\frac{1}{8}\\begin{bmatrix} 5 & -9 & 1 \\\\ 2 & 6 & 2 \\\\ 9 & -5 & -3 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d07', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'For $A = \\begin{bmatrix} 2 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 2 \\end{bmatrix}$, show that $A^{3} - 5A^{2} + 8A - 5I = O$. Hence find $A^{-1}$.',
    answer: '$A^{2} = \\begin{bmatrix} 4 & 1 & 4 \\\\ 3 & 1 & 1 \\\\ 1 & 3 & 4 \\end{bmatrix}$ and $A^{3} = A^{2}A = \\begin{bmatrix} 9 & 5 & 12 \\\\ 7 & 2 & 5 \\\\ 5 & 7 & 9 \\end{bmatrix}$. Then $A^{3} - 5A^{2} + 8A - 5I = \\begin{bmatrix} 9 - 20 + 16 - 5 & 5 - 5 + 0 - 0 & 12 - 20 + 8 - 0 \\\\ 7 - 15 + 8 - 0 & 2 - 5 + 8 - 5 & 5 - 5 + 0 - 0 \\\\ 5 - 5 + 0 - 0 & 7 - 15 + 8 - 0 & 9 - 20 + 16 - 5 \\end{bmatrix} = O$. Also $|A| = 2(2 - 0) - 0 + 1(1 - 0) = 5 \\neq 0$, so $A^{-1}$ exists. Multiplying the identity by $A^{-1}$: $A^{2} - 5A + 8I - 5A^{-1} = O$, so $A^{-1} = \\frac{1}{5}(A^{2} - 5A + 8I) = \\frac{1}{5}\\begin{bmatrix} 4 - 10 + 8 & 1 - 0 & 4 - 5 \\\\ 3 - 5 & 1 - 5 + 8 & 1 - 0 \\\\ 1 - 0 & 3 - 5 & 4 - 10 + 8 \\end{bmatrix} = \\frac{1}{5}\\begin{bmatrix} 2 & 1 & -1 \\\\ -2 & 4 & 1 \\\\ 1 & -2 & 2 \\end{bmatrix}$.',
    steps: [
      { step: 'Computes $A^{2}$ correctly', marks: 1 },
      { step: 'Computes $A^{3}$ correctly', marks: 1 },
      { step: 'Shows $A^{3} - 5A^{2} + 8A - 5I = O$', marks: 1 },
      { step: 'Notes $|A| = 5 \\neq 0$ and derives $A^{-1} = \\frac{1}{5}(A^{2} - 5A + 8I)$', marks: 1 },
      { step: 'Gets $A^{-1} = \\frac{1}{5}\\begin{bmatrix} 2 & 1 & -1 \\\\ -2 & 4 & 1 \\\\ 1 & -2 & 2 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d08', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'For $A = \\begin{bmatrix} 2 & -1 & 1 \\\\ 0 & 1 & 3 \\\\ 1 & 2 & -2 \\end{bmatrix}$, find $\\text{adj } A$ and verify that $A(\\text{adj } A) = (\\text{adj } A)A = |A|I$. Hence write $A^{-1}$.',
    answer: 'Cofactors: $A_{11} = (-2 - 6) = -8$, $A_{12} = -(0 - 3) = 3$, $A_{13} = (0 - 1) = -1$; $A_{21} = -(2 - 2) = 0$, $A_{22} = (-4 - 1) = -5$, $A_{23} = -(4 + 1) = -5$; $A_{31} = (-3 - 1) = -4$, $A_{32} = -(6 - 0) = -6$, $A_{33} = (2 - 0) = 2$. So $\\text{adj } A = \\begin{bmatrix} -8 & 0 & -4 \\\\ 3 & -5 & -6 \\\\ -1 & -5 & 2 \\end{bmatrix}$. $|A| = 2(-8) + (-1)(3) + 1(-1) = -20$. $A(\\text{adj } A) = \\begin{bmatrix} -16 - 3 - 1 & 0 + 5 - 5 & -8 + 6 + 2 \\\\ 0 + 3 - 3 & 0 - 5 - 15 & 0 - 6 + 6 \\\\ -8 + 6 + 2 & 0 - 10 + 10 & -4 - 12 - 4 \\end{bmatrix} = \\begin{bmatrix} -20 & 0 & 0 \\\\ 0 & -20 & 0 \\\\ 0 & 0 & -20 \\end{bmatrix} = -20I$. $(\\text{adj } A)A = \\begin{bmatrix} -16 + 0 - 4 & 8 + 0 - 8 & -8 + 0 + 8 \\\\ 6 + 0 - 6 & -3 - 5 - 12 & 3 - 15 + 12 \\\\ -2 + 0 + 2 & 1 - 5 + 4 & -1 - 15 - 4 \\end{bmatrix} = -20I$. Both equal $|A|I$, as required. Hence $A^{-1} = \\frac{1}{|A|}\\,\\text{adj } A = \\frac{1}{20}\\begin{bmatrix} 8 & 0 & 4 \\\\ -3 & 5 & 6 \\\\ 1 & 5 & -2 \\end{bmatrix}$.',
    steps: [
      { step: 'Finds all nine cofactors correctly', marks: 1 },
      { step: 'Writes $\\text{adj } A$ as the transpose of the cofactor matrix', marks: 1 },
      { step: 'Finds $|A| = -20$', marks: 1 },
      { step: 'Shows $A(\\text{adj } A) = (\\text{adj } A)A = -20I$', marks: 1 },
      { step: 'Writes $A^{-1} = \\frac{1}{20}\\begin{bmatrix} 8 & 0 & 4 \\\\ -3 & 5 & 6 \\\\ 1 & 5 & -2 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d09', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'A courier company uses 20 vehicles a day: bikes, vans and trucks. A bike carries 10 parcels, a van 40 and a truck 100, and together they carry 860 parcels a day. The daily fuel cost is ₹100 per bike, ₹300 per van and ₹600 per truck, and the total fuel bill is ₹5,900 a day. Using the matrix method, find the number of each type of vehicle.',
    answer: 'Let the numbers of bikes, vans and trucks be $x$, $y$, $z$. Then $x + y + z = 20$; $10x + 40y + 100z = 860$, i.e. $x + 4y + 10z = 86$; $100x + 300y + 600z = 5900$, i.e. $x + 3y + 6z = 59$. So $AX = B$ with $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 4 & 10 \\\\ 1 & 3 & 6 \\end{bmatrix}$, $B = \\begin{bmatrix} 20 \\\\ 86 \\\\ 59 \\end{bmatrix}$. $|A| = 1(24 - 30) - 1(6 - 10) + 1(3 - 4) = -6 + 4 - 1 = -3 \\neq 0$. Cofactors: $A_{11} = -6$, $A_{12} = 4$, $A_{13} = -1$; $A_{21} = -3$, $A_{22} = 5$, $A_{23} = -2$; $A_{31} = 6$, $A_{32} = -9$, $A_{33} = 3$. $\\text{adj } A = \\begin{bmatrix} -6 & -3 & 6 \\\\ 4 & 5 & -9 \\\\ -1 & -2 & 3 \\end{bmatrix}$, $A^{-1} = -\\frac{1}{3}\\,\\text{adj } A$. $X = A^{-1}B = -\\frac{1}{3}\\begin{bmatrix} -120 - 258 + 354 \\\\ 80 + 430 - 531 \\\\ -20 - 172 + 177 \\end{bmatrix} = -\\frac{1}{3}\\begin{bmatrix} -24 \\\\ -21 \\\\ -15 \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ 7 \\\\ 5 \\end{bmatrix}$. The company uses 8 bikes, 7 vans and 5 trucks.',
    steps: [
      { step: 'Forms and simplifies the three equations into $AX = B$', marks: 1 },
      { step: 'Finds $|A| = -3$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$', marks: 1 },
      { step: 'States 8 bikes, 7 vans and 5 trucks', marks: 1 },
    ],
  },
  {
    id: 'c12-det-d10', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Find $A^{-1}$ for $A = \\begin{bmatrix} 1 & 1 & 2 \\\\ 2 & -1 & 1 \\\\ 1 & 3 & -1 \\end{bmatrix}$. Hence solve the system $x + 2y + z = 4$, $x - y + 3z = -4$, $2x + y - z = 5$.',
    answer: '$|A| = 1(1 - 3) - 1(-2 - 1) + 2(6 + 1) = -2 + 3 + 14 = 15 \\neq 0$. Cofactors: $A_{11} = -2$, $A_{12} = 3$, $A_{13} = 7$; $A_{21} = 7$, $A_{22} = -3$, $A_{23} = -2$; $A_{31} = 3$, $A_{32} = 3$, $A_{33} = -3$. $\\text{adj } A = \\begin{bmatrix} -2 & 7 & 3 \\\\ 3 & -3 & 3 \\\\ 7 & -2 & -3 \\end{bmatrix}$ and $A^{-1} = \\frac{1}{15}\\begin{bmatrix} -2 & 7 & 3 \\\\ 3 & -3 & 3 \\\\ 7 & -2 & -3 \\end{bmatrix}$. The coefficient matrix of the given system is $\\begin{bmatrix} 1 & 2 & 1 \\\\ 1 & -1 & 3 \\\\ 2 & 1 & -1 \\end{bmatrix} = A^{T}$. So the system is $A^{T}X = B$ with $B = \\begin{bmatrix} 4 \\\\ -4 \\\\ 5 \\end{bmatrix}$, and $X = (A^{T})^{-1}B = (A^{-1})^{T}B = \\frac{1}{15}\\begin{bmatrix} -2 & 3 & 7 \\\\ 7 & -3 & -2 \\\\ 3 & 3 & -3 \\end{bmatrix}\\begin{bmatrix} 4 \\\\ -4 \\\\ 5 \\end{bmatrix} = \\frac{1}{15}\\begin{bmatrix} -8 - 12 + 35 \\\\ 28 + 12 - 10 \\\\ 12 - 12 - 15 \\end{bmatrix} = \\frac{1}{15}\\begin{bmatrix} 15 \\\\ 30 \\\\ -15 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\\\ -1 \\end{bmatrix}$. Hence $x = 1$, $y = 2$, $z = -1$.',
    steps: [
      { step: 'Finds $|A| = 15$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ and $A^{-1} = \\frac{1}{15}\\,\\text{adj } A$', marks: 1 },
      { step: 'Recognises the coefficient matrix is $A^{T}$', marks: 1 },
      { step: 'Uses $(A^{T})^{-1} = (A^{-1})^{T}$ to write $X = (A^{-1})^{T}B$', marks: 1 },
      { step: 'Gets $x = 1$, $y = 2$, $z = -1$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-det-e01', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A roadside cafe sells tea, coffee and samosas. One morning three groups paid as follows: Group 1 bought 2 teas, 1 coffee and 3 samosas for ₹115; Group 2 bought 1 tea, 2 coffees and 1 samosa for ₹85; Group 3 bought 3 teas, 1 coffee and 2 samosas for ₹110. Let the prices of a tea, a coffee and a samosa be ₹$x$, ₹$y$ and ₹$z$, and write the situation as $AX = B$.',
    answer: '(i) $A = \\begin{bmatrix} 2 & 1 & 3 \\\\ 1 & 2 & 1 \\\\ 3 & 1 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 115 \\\\ 85 \\\\ 110 \\end{bmatrix}$. (ii) $|A| = -8$, so a unique solution exists. (iii) $A^{-1} = \\frac{1}{8}\\begin{bmatrix} -3 & -1 & 5 \\\\ -1 & 5 & -1 \\\\ 5 & -1 & -3 \\end{bmatrix}$. OR $A_{11} = 3$, $A_{12} = 1$, $A_{13} = -5$ and $|A| = -8$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the matrices $A$, $X$ and $B$.',
        answer: '$A = \\begin{bmatrix} 2 & 1 & 3 \\\\ 1 & 2 & 1 \\\\ 3 & 1 & 2 \\end{bmatrix}$, $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$, $B = \\begin{bmatrix} 115 \\\\ 85 \\\\ 110 \\end{bmatrix}$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $|A|$ and state whether the system has a unique solution.',
        answer: '$|A| = 2(4 - 1) - 1(2 - 3) + 3(1 - 6) = 6 + 1 - 15 = -8$. Since $|A| \\neq 0$, the system has a unique solution.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $A^{-1}$.\nOR\nFind the cofactors $A_{11}$, $A_{12}$ and $A_{13}$, and use them to verify the value of $|A|$.',
        answer: 'Cofactors: $A_{11} = 3$, $A_{12} = 1$, $A_{13} = -5$; $A_{21} = 1$, $A_{22} = -5$, $A_{23} = 1$; $A_{31} = -5$, $A_{32} = 1$, $A_{33} = 3$. So $\\text{adj } A = \\begin{bmatrix} 3 & 1 & -5 \\\\ 1 & -5 & 1 \\\\ -5 & 1 & 3 \\end{bmatrix}$ (1 mark) and $A^{-1} = -\\frac{1}{8}\\,\\text{adj } A = \\frac{1}{8}\\begin{bmatrix} -3 & -1 & 5 \\\\ -1 & 5 & -1 \\\\ 5 & -1 & -3 \\end{bmatrix}$ (1 mark). OR: $A_{11} = (4 - 1) = 3$, $A_{12} = -(2 - 3) = 1$, $A_{13} = (1 - 6) = -5$ (1 mark); $|A| = a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13} = 2(3) + 1(1) + 3(-5) = -8$, which matches (1 mark).',
      },
    ],
  },
  {
    id: 'c12-det-e02', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A science museum sells adult and child tickets. On Saturday it sold 3 adult and 2 child tickets to one family for ₹1,300. On Sunday another family paid ₹1,600 for 2 adult and 5 child tickets. Let an adult ticket cost ₹$a$ and a child ticket ₹$c$, and write the two purchases as $AX = B$ with $X = \\begin{bmatrix} a \\\\ c \\end{bmatrix}$.',
    answer: '(i) $A = \\begin{bmatrix} 3 & 2 \\\\ 2 & 5 \\end{bmatrix}$, $B = \\begin{bmatrix} 1300 \\\\ 1600 \\end{bmatrix}$, $|A| = 11$. (ii) $\\text{adj } A = \\begin{bmatrix} 5 & -2 \\\\ -2 & 3 \\end{bmatrix}$. (iii) Adult ticket ₹300, child ticket ₹200. OR the system has infinitely many solutions, so the prices cannot be fixed.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write $A$ and $B$, and find $|A|$.',
        answer: '$A = \\begin{bmatrix} 3 & 2 \\\\ 2 & 5 \\end{bmatrix}$, $B = \\begin{bmatrix} 1300 \\\\ 1600 \\end{bmatrix}$, and $|A| = 15 - 4 = 11$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $\\text{adj } A$.',
        answer: '$\\text{adj } A = \\begin{bmatrix} 5 & -2 \\\\ -2 & 3 \\end{bmatrix}$ (swap the diagonal entries and change the signs of the other two).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using the matrix method, find the price of each ticket.\nOR\nSuppose instead the Sunday family had bought 6 adult and 4 child tickets for ₹2,600. Using determinants, show that the two purchases together do not fix the ticket prices uniquely, and say whether the system has no solution or infinitely many.',
        answer: '$X = A^{-1}B = \\frac{1}{11}\\begin{bmatrix} 5 & -2 \\\\ -2 & 3 \\end{bmatrix}\\begin{bmatrix} 1300 \\\\ 1600 \\end{bmatrix} = \\frac{1}{11}\\begin{bmatrix} 6500 - 3200 \\\\ -2600 + 4800 \\end{bmatrix} = \\frac{1}{11}\\begin{bmatrix} 3300 \\\\ 2200 \\end{bmatrix} = \\begin{bmatrix} 300 \\\\ 200 \\end{bmatrix}$ (1 mark). An adult ticket costs ₹300 and a child ticket ₹200 (1 mark). OR: The new coefficient matrix is $P = \\begin{bmatrix} 3 & 2 \\\\ 6 & 4 \\end{bmatrix}$ with $|P| = 12 - 12 = 0$, so there is no unique solution (1 mark). $(\\text{adj } P)B = \\begin{bmatrix} 4 & -2 \\\\ -6 & 3 \\end{bmatrix}\\begin{bmatrix} 1300 \\\\ 2600 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$, so the system is consistent with infinitely many solutions; the prices cannot be found from these two purchases (1 mark).',
      },
    ],
  },
  {
    id: 'c12-det-e03', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A community garden is a triangular plot. On a map with axes in metres, its corners are $P(2, 1)$, $Q(10, 3)$ and $R(6, 9)$. A water tap is placed at $T(6, 2)$.',
    answer: '(i) $28$ square metres. (ii) Yes, $T$ lies on $PQ$ since the area of triangle $PQT$ is $0$. (iii) $k = 4$ or $k = 64$. OR area of triangle $PTR = 14$ square metres, half of $28$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Using determinants, find the area of the plot $PQR$.',
        answer: 'Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 2 & 1 & 1 \\\\ 10 & 3 & 1 \\\\ 6 & 9 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}\\left|2(3 - 9) - 1(10 - 6) + 1(90 - 18)\\right| = \\frac{1}{2}|-12 - 4 + 72| = 28$ square metres.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Using determinants, check whether the tap $T$ lies on the boundary $PQ$.',
        answer: '$\\begin{vmatrix} 2 & 1 & 1 \\\\ 10 & 3 & 1 \\\\ 6 & 2 & 1 \\end{vmatrix} = 2(3 - 2) - 1(10 - 6) + 1(20 - 18) = 2 - 4 + 2 = 0$. The area of triangle $PQT$ is zero, so $P$, $Q$, $T$ are collinear and the tap lies on line $PQ$ (between $P$ and $Q$, since $x = 6$ is between $2$ and $10$).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The committee wants a new triangular bed $PQS$ with $S(k, 9)$ and area $30$ square metres. Find the possible values of $k$.\nOR\nFind the area of triangle $PTR$ and compare it with the area of the plot.',
        answer: 'Area of $PQS = \\frac{1}{2}\\left|\\begin{vmatrix} 2 & 1 & 1 \\\\ 10 & 3 & 1 \\\\ k & 9 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}\\left|2(3 - 9) - 1(10 - k) + 1(90 - 3k)\\right| = \\frac{1}{2}|68 - 2k| = |34 - k|$ (1 mark). Setting $|34 - k| = 30$ gives $k = 4$ or $k = 64$ (1 mark). OR: Area of $PTR = \\frac{1}{2}\\left|\\begin{vmatrix} 2 & 1 & 1 \\\\ 6 & 2 & 1 \\\\ 6 & 9 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}\\left|2(2 - 9) - 1(6 - 6) + 1(54 - 12)\\right| = \\frac{1}{2}|28| = 14$ square metres (1 mark). This is exactly half of $28$, because $T$ is the midpoint of $PQ$, so $RT$ is a median and splits the plot into two equal areas (1 mark).',
      },
    ],
  },
];
