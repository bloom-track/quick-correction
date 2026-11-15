import type { Class12Question } from './types.js';

const C = 'Determinants';
const AR_OPTS = [
  'Both A and R are true and R is the correct explanation of A.',
  'Both A and R are true but R is not the correct explanation of A.',
  'A is true but R is false.',
  'A is false but R is true.',
];

export const CH04_DET_R3: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Evaluating determinants
  {
    id: 'c12-det-r3-a01', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = [a_{ij}]$ be a $2 \\times 2$ matrix with $a_{ij} = 2i - j$. Then $|A|$ equals',
    options: ['$2$', '$-2$', '$6$', '$0$'],
    answer: 'Correct option: A) $2$. The entries are $a_{11} = 1$, $a_{12} = 0$, $a_{21} = 3$, $a_{22} = 2$, so $|A| = 1 \\cdot 2 - 0 \\cdot 3 = 2$. The value $-2$ comes from subtracting in the wrong order, and $6$ is just the sum of the entries.',
  },
  {
    id: 'c12-det-r3-a02', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The value of $\\begin{vmatrix} 2 & 3 & -1 \\\\ 1 & 0 & 4 \\\\ -2 & 5 & 1 \\end{vmatrix}$ is',
    options: ['$-72$', '$72$', '$-18$', '$-62$'],
    answer: 'Correct option: A) $-72$. Expanding along the first row: $2(0 - 20) - 3(1 + 8) + (-1)(5 - 0) = -40 - 27 - 5 = -72$. A sign slip on the middle term gives $-18$, and dropping the sign on the last term gives $-62$.',
  },
  {
    id: 'c12-det-r3-a03', chapter: C, topic: 'Evaluating determinants',
    type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $A$ is a square matrix with $A^{2} = I$, then $|A| = 1$.\nReason (R): For square matrices $A$ and $B$ of the same order, $|AB| = |A||B|$.',
    options: AR_OPTS,
    answer: 'Correct option: D) A is false but R is true. From R, $|A|^{2} = |A^{2}| = |I| = 1$, so $|A| = \\pm 1$, not necessarily $1$. For example $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ satisfies $A^{2} = I$ but $|A| = -1$.',
  },
  {
    id: 'c12-det-r3-a04', chapter: C, topic: 'Evaluating determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A = \\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\end{bmatrix}$, then $|A^{2}|$ equals',
    options: ['$121$', '$11$', '$55$', '$22$'],
    answer: 'Correct option: A) $121$. $|A| = 8 + 3 = 11$ and $|A^{2}| = |A|^{2} = 121$. The value $11$ forgets to square, $22$ doubles instead of squaring, and $55$ comes from squaring each entry separately, which is not how $A^{2}$ is formed.',
  },

  // Minors, cofactors and adjoint
  {
    id: 'c12-det-r3-a05', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For $A = \\begin{bmatrix} 2 & -3 & 1 \\\\ 0 & 5 & 4 \\\\ 6 & -1 & 2 \\end{bmatrix}$, let $A_{ij}$ denote the cofactor of $a_{ij}$. The value of $A_{21} + A_{32}$ is',
    options: ['$-3$', '$3$', '$-13$', '$13$'],
    answer: 'Correct option: A) $-3$. $M_{21} = \\begin{vmatrix} -3 & 1 \\\\ -1 & 2 \\end{vmatrix} = -5$, so $A_{21} = (-1)^{3}(-5) = 5$. $M_{32} = \\begin{vmatrix} 2 & 1 \\\\ 0 & 4 \\end{vmatrix} = 8$, so $A_{32} = (-1)^{5}(8) = -8$. The sum is $-3$. Using minors without signs gives $3$.',
  },
  {
    id: 'c12-det-r3-a06', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'hard', marks: 1,
    text: 'If $A$ is a square matrix of order $3$ with $|A| = 4$, then $|\\text{adj}(A^{2})|$ equals',
    options: ['$16$', '$64$', '$256$', '$4096$'],
    answer: 'Correct option: C) $256$. For a matrix $B$ of order $3$, $|\\text{adj } B| = |B|^{2}$. Here $B = A^{2}$ has $|B| = 16$, so $|\\text{adj}(A^{2})| = 16^{2} = 256$. The value $16$ is $|\\text{adj } A|$, and $64 = |A|^{3}$ is not what is asked.',
  },
  {
    id: 'c12-det-r3-a07', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 5 \\end{bmatrix}$, the matrix $\\text{adj}(\\text{adj } A)$ is',
    options: [
      '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 5 \\end{bmatrix}$',
      '$\\begin{bmatrix} 5 & -2 \\\\ -3 & 1 \\end{bmatrix}$',
      '$\\begin{bmatrix} 1 & -2 \\\\ -3 & 5 \\end{bmatrix}$',
      '$\\begin{bmatrix} 5 & 3 \\\\ 2 & 1 \\end{bmatrix}$',
    ],
    answer: 'Correct option: A) $A$ itself. For a $2 \\times 2$ matrix the adjoint swaps the diagonal entries and changes the sign of the other two. So $\\text{adj } A = \\begin{bmatrix} 5 & -2 \\\\ -3 & 1 \\end{bmatrix}$, and applying the same rule again returns $\\begin{bmatrix} 1 & 2 \\\\ 3 & 5 \\end{bmatrix}$.',
  },
  {
    id: 'c12-det-r3-a08', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $A = [a_{ij}]$ be a $3 \\times 3$ matrix with $|A| = 6$, and let $A_{ij}$ be the cofactor of $a_{ij}$. The value of $(a_{21}A_{11} + a_{22}A_{12} + a_{23}A_{13}) + (a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13})$ is',
    options: ['$6$', '$12$', '$0$', '$36$'],
    answer: 'Correct option: A) $6$. The first bracket multiplies the entries of row $2$ by the cofactors of row $1$, which always gives $0$. The second bracket is the expansion of $|A|$ along row $1$, which is $6$. Their sum is $6$. Treating both brackets as $|A|$ gives the wrong $12$.',
  },

  // Inverse of a matrix and its properties
  {
    id: 'c12-det-r3-a09', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ is a non-singular square matrix such that $A^{2} = A$, then $|A|$ equals',
    options: ['$0$', '$-1$', '$1$', '$\\pm 1$'],
    answer: 'Correct option: C) $1$. Taking determinants, $|A|^{2} = |A|$, so $|A|(|A| - 1) = 0$. Since $A$ is non-singular, $|A| \\neq 0$, hence $|A| = 1$.',
  },
  {
    id: 'c12-det-r3-a10', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The inverse of $A = \\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$ is',
    options: [
      '$\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$',
      '$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$',
      '$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$',
      '$\\begin{bmatrix} -\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{bmatrix}$',
    ],
    answer: 'Correct option: B) $|A| = \\cos^{2}\\theta + \\sin^{2}\\theta = 1$, and $\\text{adj } A$ swaps the diagonal entries and flips the signs of the other two, giving $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Dividing by $|A| = 1$ changes nothing. Option A is $A$ itself, which is not its own inverse.',
  },
  {
    id: 'c12-det-r3-a11', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$, then $A$ equals',
    options: [
      '$\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$',
      '$\\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$',
      '$\\begin{bmatrix} -2 & -1 \\\\ -3 & -2 \\end{bmatrix}$',
      '$\\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$',
    ],
    answer: 'Correct option: D) $A = (A^{-1})^{-1}$. For $\\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$ the determinant is $4 - 3 = 1$ and the adjoint is $\\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$, so $A = \\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix}$. Option B is the transpose of that matrix.',
  },
  {
    id: 'c12-det-r3-a12', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'An invertible matrix $A$ satisfies $(A - 2I)(A - 3I) = O$. Then $A + 6A^{-1}$ equals',
    options: ['$6I$', '$-5I$', '$5A$', '$5I$'],
    answer: 'Correct option: D) $5I$. Expanding, $A^{2} - 5A + 6I = O$. Multiplying by $A^{-1}$ gives $A - 5I + 6A^{-1} = O$, so $A + 6A^{-1} = 5I$.',
  },
  {
    id: 'c12-det-r3-a13', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The matrix $\\begin{bmatrix} 2 & 4 \\\\ 1 & 2 \\end{bmatrix}$ does not have an inverse.\nReason (R): A square matrix has an inverse if and only if its determinant is non-zero.',
    options: AR_OPTS,
    answer: 'Correct option: A) Both are true and R explains A. The determinant is $2 \\cdot 2 - 4 \\cdot 1 = 0$, so the matrix is singular, and by R a singular matrix has no inverse.',
  },

  // Area of a triangle using determinants
  {
    id: 'c12-det-r3-a14', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The area of the triangle with vertices $(-1, 2)$, $(3, 2)$ and $(1, -4)$, in square units, is',
    options: ['$24$', '$6$', '$-12$', '$12$'],
    answer: 'Correct option: D) $12$. Area $= \\frac{1}{2}\\left|-1(2 + 4) + 3(-4 - 2) + 1(2 - 2)\\right| = \\frac{1}{2}|-6 - 18 + 0| = 12$. Forgetting the factor $\\frac{1}{2}$ gives $24$, and area can never be negative, so $-12$ is out.',
  },
  {
    id: 'c12-det-r3-a15', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The midpoints of the sides of a triangle are $(2, 1)$, $(4, 1)$ and $(3, 5)$. The area of the triangle, in square units, is',
    options: ['$4$', '$8$', '$12$', '$16$'],
    answer: 'Correct option: D) $16$. The triangle formed by the midpoints has area $\\frac{1}{2}|2(1 - 5) + 4(5 - 1) + 3(1 - 1)| = \\frac{1}{2}|-8 + 16| = 4$. The midpoint triangle is one quarter of the original, so the original has area $16$. The value $4$ is the area of the midpoint triangle itself.',
  },
  {
    id: 'c12-det-r3-a16', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The points $(-1, -5)$, $(2, 1)$ and $(k, 9)$ are collinear. The value of $k$ is',
    options: ['$5$', '$6$', '$-6$', '$8$'],
    answer: 'Correct option: B) $6$. Collinear means the area is zero: $-1(1 - 9) + 2(9 + 5) + k(-5 - 1) = 8 + 28 - 6k = 0$, so $k = 6$. (The line is $y = 2x - 3$, and $y = 9$ gives $x = 6$.)',
  },

  // Solving linear equations by the matrix method
  {
    id: 'c12-det-r3-a17', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The system $3x - 2y = 4$, $x + 4y = 6$ is written as $AX = B$ and solved using $X = A^{-1}B$. The value of $x$ is',
    options: ['$1$', '$3$', '$2$', '$\\frac{2}{7}$'],
    answer: 'Correct option: C) $2$. Here $|A| = 12 + 2 = 14$ and $A^{-1} = \\frac{1}{14}\\begin{bmatrix} 4 & 2 \\\\ -1 & 3 \\end{bmatrix}$, so $x = \\frac{1}{14}(4 \\cdot 4 + 2 \\cdot 6) = 2$ and $y = \\frac{1}{14}(-4 + 18) = 1$. The value $\\frac{2}{7}$ comes from using the wrong signs in the adjoint.',
  },
  {
    id: 'c12-det-r3-a18', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A^{-1} = \\begin{bmatrix} 1 & -2 \\\\ 0 & 1 \\end{bmatrix}$, then the solution of $AX = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$ is',
    options: [
      '$\\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}$',
      '$\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$',
      '$\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$',
      '$\\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$',
    ],
    answer: 'Correct option: C) Since $AX = B$, $X = A^{-1}B = \\begin{bmatrix} 1 \\cdot 3 - 2 \\cdot 1 \\\\ 0 \\cdot 3 + 1 \\cdot 1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$. Option A results from multiplying by $A$ instead of $A^{-1}$.',
  },
  {
    id: 'c12-det-r3-a19', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The system $x + 2y = 0$, $3x + 5y = 0$ has only the solution $x = 0$, $y = 0$.\nReason (R): If $|A| \\neq 0$, the system $AX = O$ has only the zero solution.',
    options: AR_OPTS,
    answer: 'Correct option: A) Both are true and R explains A. The coefficient determinant is $5 - 6 = -1 \\neq 0$, so $A^{-1}$ exists and $X = A^{-1}O = O$. This is exactly what R states.',
  },
  {
    id: 'c12-det-r3-a20', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}$. If $AX = \\begin{bmatrix} 3 \\\\ 4 \\\\ 8 \\end{bmatrix}$ where $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$, then $x + y + z$ equals',
    options: ['$43$', '$14$', '$9$', '$7$'],
    answer: 'Correct option: D) $7$. The inverse is $A^{-1} = \\text{diag}\\left(1, \\frac{1}{2}, \\frac{1}{4}\\right)$, so $X = A^{-1}B = (3, 2, 2)$ and $x + y + z = 7$. The sum $43$ comes from multiplying $B$ by $A$ instead of $A^{-1}$.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-det-r3-b01', chapter: C, topic: 'Evaluating determinants',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'Find all values of $x$ for which $\\begin{vmatrix} x & 1 & 0 \\\\ 3 & x & 2 \\\\ 0 & 3 & x \\end{vmatrix} = 0$.',
    answer: 'Expanding along the first row: $x(x^{2} - 6) - 1(3x - 0) + 0 = x^{3} - 9x$. Setting $x(x - 3)(x + 3) = 0$ gives $x = 0$, $x = 3$ or $x = -3$.',
    steps: [
      { step: 'Expands the determinant correctly to $x^{3} - 9x$', marks: 1 },
      { step: 'Factorises and states all three values $0, 3, -3$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-b02', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'For $A = \\begin{bmatrix} 2 & -1 \\\\ 4 & 3 \\end{bmatrix}$, find $\\text{adj } A$ and verify that $A(\\text{adj } A) = |A|\\,I$.',
    answer: '$\\text{adj } A = \\begin{bmatrix} 3 & 1 \\\\ -4 & 2 \\end{bmatrix}$ and $|A| = 6 + 4 = 10$. Then $A(\\text{adj } A) = \\begin{bmatrix} 6 + 4 & 2 - 2 \\\\ 12 - 12 & 4 + 6 \\end{bmatrix} = \\begin{bmatrix} 10 & 0 \\\\ 0 & 10 \\end{bmatrix} = 10I = |A|I$.',
    steps: [
      { step: 'Finds the adjoint $\\begin{bmatrix} 3 & 1 \\\\ -4 & 2 \\end{bmatrix}$ with correct signs', marks: 1 },
      { step: 'Multiplies out to get $10I$ and compares with $|A| = 10$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-b03', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'For $A = \\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix}$, find $(\\text{adj } A)^{-1}$.',
    answer: 'Since $A(\\text{adj } A) = |A|I$, we have $(\\text{adj } A)^{-1} = \\frac{A}{|A|}$. Here $|A| = 6$, so $(\\text{adj } A)^{-1} = \\frac{1}{6}\\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix} = \\begin{bmatrix} \\frac{1}{3} & 0 \\\\ \\frac{1}{6} & \\frac{1}{2} \\end{bmatrix}$.',
    steps: [
      { step: 'Uses $A(\\text{adj } A) = |A|I$ to get $(\\text{adj } A)^{-1} = A/|A|$', marks: 1 },
      { step: 'Computes $|A| = 6$ and writes the final matrix', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-b04', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'The line $2x + 3y = 12$ meets the coordinate axes at two points. Using determinants, find the area of the triangle formed by the line and the two axes.',
    answer: 'Putting $y = 0$ gives $x = 6$ and putting $x = 0$ gives $y = 4$, so the vertices are $(0, 0)$, $(6, 0)$ and $(0, 4)$. Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 6 & 0 & 1 \\\\ 0 & 4 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|24| = 12$ square units.',
    steps: [
      { step: 'Finds the vertices $(0,0)$, $(6,0)$, $(0,4)$', marks: 1 },
      { step: 'Evaluates the determinant and halves it to get $12$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-b05', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A stationery shop sells $4$ pencils and $3$ erasers for ₹26, and $2$ pencils and $5$ erasers for ₹34. Using the matrix method, find the price of one pencil and one eraser.',
    answer: 'Let a pencil cost ₹$p$ and an eraser ₹$e$. Then $\\begin{bmatrix} 4 & 3 \\\\ 2 & 5 \\end{bmatrix}\\begin{bmatrix} p \\\\ e \\end{bmatrix} = \\begin{bmatrix} 26 \\\\ 34 \\end{bmatrix}$, with $|A| = 14$ and $A^{-1} = \\frac{1}{14}\\begin{bmatrix} 5 & -3 \\\\ -2 & 4 \\end{bmatrix}$. So $p = \\frac{130 - 102}{14} = 2$ and $e = \\frac{-52 + 136}{14} = 6$. A pencil costs ₹2 and an eraser ₹6.',
    steps: [
      { step: 'Writes the system as $AX = B$ and finds $A^{-1}$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ to get pencil ₹2 and eraser ₹6', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-b06', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'hard', marks: 2,
    text: 'If $A$ is a symmetric invertible matrix, prove that $A^{-1}$ is also symmetric.',
    answer: 'We know $(A^{-1})^{T} = (A^{T})^{-1}$. Since $A$ is symmetric, $A^{T} = A$, so $(A^{-1})^{T} = A^{-1}$. Hence $A^{-1}$ is symmetric.',
    steps: [
      { step: 'States and uses $(A^{-1})^{T} = (A^{T})^{-1}$', marks: 1 },
      { step: 'Substitutes $A^{T} = A$ to conclude $(A^{-1})^{T} = A^{-1}$', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-det-r3-c01', chapter: C, topic: 'Evaluating determinants',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 5 \\end{bmatrix}$, verify that $|AB| = |A||B|$.',
    answer: '$|A| = 4 - 6 = -2$ and $|B| = 10 - 0 = 10$, so $|A||B| = -20$. Also $AB = \\begin{bmatrix} 2 + 2 & 0 + 10 \\\\ 6 + 4 & 0 + 20 \\end{bmatrix} = \\begin{bmatrix} 4 & 10 \\\\ 10 & 20 \\end{bmatrix}$ and $|AB| = 80 - 100 = -20$. Hence $|AB| = |A||B|$.',
    steps: [
      { step: 'Finds $|A| = -2$ and $|B| = 10$', marks: 1 },
      { step: 'Multiplies to get $AB = \\begin{bmatrix} 4 & 10 \\\\ 10 & 20 \\end{bmatrix}$', marks: 1 },
      { step: 'Finds $|AB| = -20$ and compares with $|A||B|$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c02', chapter: C, topic: 'Evaluating determinants',
    type: 'short', complexity: 'hard', marks: 3,
    text: 'If $A = \\begin{bmatrix} 2 & -1 \\\\ 3 & 1 \\end{bmatrix}$, find the value of $|A^{2} - 3A|$.',
    answer: '$A^{2} = \\begin{bmatrix} 4 - 3 & -2 - 1 \\\\ 6 + 3 & -3 + 1 \\end{bmatrix} = \\begin{bmatrix} 1 & -3 \\\\ 9 & -2 \\end{bmatrix}$ and $3A = \\begin{bmatrix} 6 & -3 \\\\ 9 & 3 \\end{bmatrix}$. So $A^{2} - 3A = \\begin{bmatrix} -5 & 0 \\\\ 0 & -5 \\end{bmatrix}$ and its determinant is $25$.',
    steps: [
      { step: 'Computes $A^{2} = \\begin{bmatrix} 1 & -3 \\\\ 9 & -2 \\end{bmatrix}$', marks: 1 },
      { step: 'Subtracts $3A$ to get $-5I$', marks: 1 },
      { step: 'Finds the determinant $25$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c03', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'For $A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 1 & 3 & 1 \\\\ 0 & 2 & 1 \\end{bmatrix}$, find $\\text{adj } A$. Hence verify that $\\text{adj}(A^{T}) = (\\text{adj } A)^{T}$.',
    answer: 'Cofactors of $A$: $A_{11} = 1$, $A_{12} = -1$, $A_{13} = 2$, $A_{21} = -1$, $A_{22} = 2$, $A_{23} = -4$, $A_{31} = 1$, $A_{32} = -2$, $A_{33} = 5$. So $\\text{adj } A$ is the transpose of the cofactor matrix: $\\text{adj } A = \\begin{bmatrix} 1 & -1 & 1 \\\\ -1 & 2 & -2 \\\\ 2 & -4 & 5 \\end{bmatrix}$. For $A^{T}$ the cofactors are $A_{ji}$ written in the transposed places, so $\\text{adj}(A^{T}) = \\begin{bmatrix} 1 & -1 & 2 \\\\ -1 & 2 & -4 \\\\ 1 & -2 & 5 \\end{bmatrix}$, which is exactly $(\\text{adj } A)^{T}$.',
    steps: [
      { step: 'Finds all nine cofactors of $A$ with correct signs', marks: 1 },
      { step: 'Writes $\\text{adj } A$ as the transpose of the cofactor matrix', marks: 1 },
      { step: 'Finds $\\text{adj}(A^{T})$ and shows it equals $(\\text{adj } A)^{T}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c04', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find the matrix $X$ such that $AXB = C$, where $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ and $C = \\begin{bmatrix} 3 & 5 \\\\ 2 & 3 \\end{bmatrix}$.',
    answer: 'Both $|A| = 1$ and $|B| = 1$, so both are invertible, and $X = A^{-1}CB^{-1}$. Here $A^{-1} = \\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$ and $B^{-1} = \\begin{bmatrix} 1 & -1 \\\\ 0 & 1 \\end{bmatrix}$. Then $A^{-1}C = \\begin{bmatrix} 1 & 2 \\\\ 1 & 1 \\end{bmatrix}$ and $X = \\begin{bmatrix} 1 & 2 \\\\ 1 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & -1 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$.',
    steps: [
      { step: 'Multiplies on the left by $A^{-1}$ and on the right by $B^{-1}$ to get $X = A^{-1}CB^{-1}$', marks: 1 },
      { step: 'Finds $A^{-1}$ and $B^{-1}$ correctly', marks: 1 },
      { step: 'Multiplies in the correct order to get $X = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c05', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'hard', marks: 3,
    text: '$A$ is a square matrix of order $3$ with $|\\text{adj } A| = 25$ and $|A| > 0$. Find $|A|$ and the value of $|(2A)^{-1}|$.',
    answer: 'For a matrix of order $3$, $|\\text{adj } A| = |A|^{2}$, so $|A|^{2} = 25$. As $|A| > 0$, $|A| = 5$. Then $|2A| = 2^{3}|A| = 40$, and $|(2A)^{-1}| = \\frac{1}{|2A|} = \\frac{1}{40}$.',
    steps: [
      { step: 'Uses $|\\text{adj } A| = |A|^{n-1} = |A|^{2}$ for $n = 3$', marks: 1 },
      { step: 'Chooses the positive root $|A| = 5$', marks: 1 },
      { step: 'Uses $|2A| = 8|A|$ and $|B^{-1}| = 1/|B|$ to get $\\frac{1}{40}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c06', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The matrix $A = \\begin{bmatrix} a & 2 \\\\ 3 & 5 \\end{bmatrix}$ has inverse $A^{-1} = \\begin{bmatrix} -5 & 2 \\\\ 3 & -1 \\end{bmatrix}$. Find $a$. Hence solve $ax + 2y = 4$, $3x + 5y = 7$ using $A^{-1}$.',
    answer: 'Since $AA^{-1} = I$, the first row of $A$ times the first column of $A^{-1}$ gives $-5a + 6 = 1$, so $a = 1$. The system is then $x + 2y = 4$, $3x + 5y = 7$, i.e. $AX = \\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix}$, so $X = A^{-1}\\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix} = \\begin{bmatrix} -20 + 14 \\\\ 12 - 7 \\end{bmatrix} = \\begin{bmatrix} -6 \\\\ 5 \\end{bmatrix}$. So $x = -6$ and $y = 5$.',
    steps: [
      { step: 'Uses $AA^{-1} = I$ to form $-5a + 6 = 1$', marks: 1 },
      { step: 'Solves for $a = 1$', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ to get $x = -6$, $y = 5$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c07', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The three sides of a triangular plot lie along the lines $x - 2y + 1 = 0$, $x + y - 8 = 0$ and $5x - y - 4 = 0$. Find the coordinates of its vertices and, using determinants, its area.',
    answer: 'Solving the lines in pairs: $x - 2y = -1$ and $x + y = 8$ meet at $(5, 3)$; $x + y = 8$ and $5x - y = 4$ meet at $(2, 6)$; $x - 2y = -1$ and $5x - y = 4$ meet at $(1, 1)$. Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 5 & 3 & 1 \\\\ 2 & 6 & 1 \\\\ 1 & 1 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|5(5) - 3(1) + 1(-4)| = \\frac{1}{2}(18) = 9$ square units.',
    steps: [
      { step: 'Solves a pair of lines correctly to find one vertex', marks: 1 },
      { step: 'Finds all three vertices $(5,3)$, $(2,6)$, $(1,1)$', marks: 1 },
      { step: 'Evaluates the area determinant to get $9$ square units', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c08', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Using determinants, show that if the points $(a, 0)$, $(0, b)$ and $(1, 1)$, where $a, b \\neq 0$, are collinear, then $\\frac{1}{a} + \\frac{1}{b} = 1$.',
    answer: 'Collinear points give zero area, so $\\begin{vmatrix} a & 0 & 1 \\\\ 0 & b & 1 \\\\ 1 & 1 & 1 \\end{vmatrix} = 0$. Expanding along the first row: $a(b - 1) - 0 + 1(0 - b) = ab - a - b = 0$. So $ab = a + b$, and dividing by $ab$ (non-zero) gives $1 = \\frac{1}{b} + \\frac{1}{a}$.',
    steps: [
      { step: 'Sets the area determinant equal to zero for collinearity', marks: 1 },
      { step: 'Expands to get $ab - a - b = 0$', marks: 1 },
      { step: 'Divides by $ab$ to reach $\\frac{1}{a} + \\frac{1}{b} = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c09', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A boat takes $3$ hours to go $15$ km downstream and $6$ km upstream, and $3$ hours $15$ minutes to go $10$ km downstream and $9$ km upstream. Let the speed of the boat in still water be $b$ km/h and the speed of the stream be $c$ km/h. Put $u = \\frac{1}{b + c}$ and $v = \\frac{1}{b - c}$ and use the matrix method to find $b$ and $c$.',
    answer: 'The conditions give $15u + 6v = 3$ and $10u + 9v = \\frac{13}{4}$. With $A = \\begin{bmatrix} 15 & 6 \\\\ 10 & 9 \\end{bmatrix}$, $|A| = 135 - 60 = 75$ and $A^{-1} = \\frac{1}{75}\\begin{bmatrix} 9 & -6 \\\\ -10 & 15 \\end{bmatrix}$. So $u = \\frac{1}{75}\\left(27 - \\frac{39}{2}\\right) = \\frac{1}{10}$ and $v = \\frac{1}{75}\\left(-30 + \\frac{195}{4}\\right) = \\frac{1}{4}$. Hence $b + c = 10$ and $b - c = 4$, giving $b = 7$ km/h and $c = 3$ km/h.',
    steps: [
      { step: 'Forms $15u + 6v = 3$ and $10u + 9v = \\frac{13}{4}$ and writes them as $AX = B$', marks: 1 },
      { step: 'Finds $A^{-1}$ and solves for $u = \\frac{1}{10}$, $v = \\frac{1}{4}$', marks: 1 },
      { step: 'Converts back to $b + c = 10$, $b - c = 4$ and gets $b = 7$, $c = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-c10', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Find $A^{-1}$ for $A = \\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$. Use it to solve the two systems $4x + 3y = 6,\\ 5x + 4y = 7$ and $4x + 3y = 1,\\ 5x + 4y = 2$.',
    answer: '$|A| = 16 - 15 = 1$ and $A^{-1} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}$. First system: $X = A^{-1}\\begin{bmatrix} 6 \\\\ 7 \\end{bmatrix} = \\begin{bmatrix} 24 - 21 \\\\ -30 + 28 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -2 \\end{bmatrix}$, so $x = 3$, $y = -2$. Second system: $X = A^{-1}\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 4 - 6 \\\\ -5 + 8 \\end{bmatrix} = \\begin{bmatrix} -2 \\\\ 3 \\end{bmatrix}$, so $x = -2$, $y = 3$.',
    steps: [
      { step: 'Finds $|A| = 1$ and $A^{-1} = \\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}$', marks: 1 },
      { step: 'Solves the first system as $x = 3$, $y = -2$', marks: 1 },
      { step: 'Reuses $A^{-1}$ for the second system to get $x = -2$, $y = 3$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-det-r3-d01', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A circular garden passes through the points $(7, 1)$, $(2, 6)$ and $(-1, 5)$ on a map. Taking its equation as $x^{2} + y^{2} + Dx + Ey + F = 0$, use the matrix method to find $D$, $E$ and $F$. Hence find the coordinates of the centre and the radius.',
    answer: 'Substituting the points: $7D + E + F = -50$, $2D + 6E + F = -40$ and $-D + 5E + F = -26$. So $AX = B$ with $A = \\begin{bmatrix} 7 & 1 & 1 \\\\ 2 & 6 & 1 \\\\ -1 & 5 & 1 \\end{bmatrix}$, $X = \\begin{bmatrix} D \\\\ E \\\\ F \\end{bmatrix}$, $B = \\begin{bmatrix} -50 \\\\ -40 \\\\ -26 \\end{bmatrix}$. $|A| = 20$ and $\\text{adj } A = \\begin{bmatrix} 1 & 4 & -5 \\\\ -3 & 8 & -5 \\\\ 16 & -36 & 40 \\end{bmatrix}$. Then $X = \\frac{1}{20}(\\text{adj } A)B = \\frac{1}{20}\\begin{bmatrix} -80 \\\\ -40 \\\\ -400 \\end{bmatrix} = \\begin{bmatrix} -4 \\\\ -2 \\\\ -20 \\end{bmatrix}$. The circle is $x^{2} + y^{2} - 4x - 2y - 20 = 0$, i.e. $(x - 2)^{2} + (y - 1)^{2} = 25$. The centre is $(2, 1)$ and the radius is $5$.',
    steps: [
      { step: 'Substitutes the three points to form the three linear equations in $D, E, F$', marks: 1 },
      { step: 'Writes the system as $AX = B$ and finds $|A| = 20 \\neq 0$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ correctly', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ to get $D = -4$, $E = -2$, $F = -20$', marks: 1 },
      { step: 'Completes the square to get centre $(2, 1)$ and radius $5$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d02', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'In an electrical network, the currents $I_{1}$, $I_{2}$ and $I_{3}$ (in amperes) satisfy the junction rule $I_{1} - I_{2} - I_{3} = 0$ and the loop equations $4I_{1} + 2I_{2} = 16$ and $2I_{2} - 4I_{3} = 0$. Using the matrix method, find the three currents.',
    answer: 'Write $AX = B$ with $A = \\begin{bmatrix} 1 & -1 & -1 \\\\ 4 & 2 & 0 \\\\ 0 & 2 & -4 \\end{bmatrix}$, $X = \\begin{bmatrix} I_{1} \\\\ I_{2} \\\\ I_{3} \\end{bmatrix}$, $B = \\begin{bmatrix} 0 \\\\ 16 \\\\ 0 \\end{bmatrix}$. $|A| = 1(-8 - 0) + 1(-16 - 0) - 1(8 - 0) = -32 \\neq 0$, so the solution is unique. $\\text{adj } A = \\begin{bmatrix} -8 & -6 & 2 \\\\ 16 & -4 & -4 \\\\ 8 & -2 & 6 \\end{bmatrix}$. Then $X = \\frac{1}{-32}(\\text{adj } A)B = \\frac{1}{-32}\\begin{bmatrix} -96 \\\\ -64 \\\\ -32 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 2 \\\\ 1 \\end{bmatrix}$. So $I_{1} = 3$ A, $I_{2} = 2$ A and $I_{3} = 1$ A.',
    steps: [
      { step: 'Writes the system in the form $AX = B$ with correct $A$ and $B$', marks: 1 },
      { step: 'Finds $|A| = -32$ and notes it is non-zero', marks: 1 },
      { step: 'Finds the cofactors and $\\text{adj } A$', marks: 1 },
      { step: 'Forms $X = A^{-1}B$ with the correct product', marks: 1 },
      { step: 'States $I_{1} = 3$, $I_{2} = 2$, $I_{3} = 1$ amperes', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d03', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'The sum of the three digits of a number is $14$. The units digit is $4$ more than the hundreds digit, and the tens digit is $1$ more than the hundreds digit. Using the matrix method, find the number.',
    answer: 'Let the hundreds, tens and units digits be $h$, $t$ and $u$. Then $h + t + u = 14$, $-h + u = 4$ and $-h + t = 1$. So $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ -1 & 0 & 1 \\\\ -1 & 1 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 14 \\\\ 4 \\\\ 1 \\end{bmatrix}$. $|A| = 1(0 - 1) - 1(0 + 1) + 1(-1 - 0) = -3$ and $\\text{adj } A = \\begin{bmatrix} -1 & 1 & 1 \\\\ -1 & 1 & -2 \\\\ -1 & -2 & 1 \\end{bmatrix}$. Then $X = \\frac{1}{-3}(\\text{adj } A)B = \\frac{1}{-3}\\begin{bmatrix} -9 \\\\ -12 \\\\ -21 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 4 \\\\ 7 \\end{bmatrix}$. The number is $347$.',
    steps: [
      { step: 'Forms the three equations from the conditions', marks: 1 },
      { step: 'Writes $AX = B$ and finds $|A| = -3$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ correctly', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ to get $h = 3$, $t = 4$, $u = 7$', marks: 1 },
      { step: 'States the number $347$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d04', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'A triangular plot has perimeter $48$ m. The longest side is $4$ m less than the sum of the other two sides, and one of the other two sides is $2$ m longer than the remaining side. Let the longest side be $x$ m and the other two sides $y$ m and $z$ m, with $y > z$. Using the matrix method, find the three sides.',
    answer: 'The conditions give $x + y + z = 48$, $x - y - z = -4$ and $y - z = 2$. So $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 0 & 1 & -1 \\end{bmatrix}$, $B = \\begin{bmatrix} 48 \\\\ -4 \\\\ 2 \\end{bmatrix}$. $|A| = 1(1 + 1) - 1(-1 - 0) + 1(1 - 0) = 4$ and $\\text{adj } A = \\begin{bmatrix} 2 & 2 & 0 \\\\ 1 & -1 & 2 \\\\ 1 & -1 & -2 \\end{bmatrix}$. Then $X = \\frac{1}{4}(\\text{adj } A)B = \\frac{1}{4}\\begin{bmatrix} 88 \\\\ 56 \\\\ 48 \\end{bmatrix} = \\begin{bmatrix} 22 \\\\ 14 \\\\ 12 \\end{bmatrix}$. The sides are $22$ m, $14$ m and $12$ m.',
    steps: [
      { step: 'Forms the three equations from the perimeter and the two side conditions', marks: 1 },
      { step: 'Writes $AX = B$ and finds $|A| = 4$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ correctly', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ correctly', marks: 1 },
      { step: 'States the sides $22$ m, $14$ m, $12$ m', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d05', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'If $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}$, show that $A^{3} - 2A^{2} - A + 2I = O$. Hence find $A^{-1}$.',
    answer: '$A^{2} = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$ and $A^{3} = A^{2}A = \\begin{bmatrix} 3 & 3 & 2 \\\\ 3 & 2 & 3 \\\\ 2 & 3 & 3 \\end{bmatrix}$. Then $A^{3} - 2A^{2} - A + 2I$ has first row $(3 - 4 - 1 + 2,\\ 3 - 2 - 1 + 0,\\ 2 - 2 - 0 + 0) = (0, 0, 0)$, and the other rows work out the same way, so the result is $O$. Also $|A| = 1(0 - 1) - 1(1 - 0) + 0 = -2 \\neq 0$, so $A^{-1}$ exists. Multiplying $A^{3} - 2A^{2} - A + 2I = O$ by $A^{-1}$ gives $A^{2} - 2A - I + 2A^{-1} = O$, so $A^{-1} = -\\frac{1}{2}(A^{2} - 2A - I)$. Now $A^{2} - 2A - I = \\begin{bmatrix} -1 & -1 & 1 \\\\ -1 & 1 & -1 \\\\ 1 & -1 & -1 \\end{bmatrix}$, hence $A^{-1} = \\frac{1}{2}\\begin{bmatrix} 1 & 1 & -1 \\\\ 1 & -1 & 1 \\\\ -1 & 1 & 1 \\end{bmatrix}$.',
    steps: [
      { step: 'Computes $A^{2}$ correctly', marks: 1 },
      { step: 'Computes $A^{3}$ correctly', marks: 1 },
      { step: 'Substitutes and shows $A^{3} - 2A^{2} - A + 2I = O$', marks: 1 },
      { step: 'Shows $|A| \\neq 0$ and multiplies by $A^{-1}$ to get $A^{-1} = -\\frac{1}{2}(A^{2} - 2A - I)$', marks: 1 },
      { step: 'Evaluates to get the final $A^{-1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d06', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'long', complexity: 'medium', marks: 5,
    text: 'A triangle has vertices $A(2, 1)$, $B(8, 4)$ and $C(5, 10)$. Find the coordinates of its centroid $G$. Using determinants, find the area of triangle $ABC$ and the areas of triangles $GBC$, $GCA$ and $GAB$. What do you observe?',
    answer: 'The centroid is $G\\left(\\frac{2 + 8 + 5}{3}, \\frac{1 + 4 + 10}{3}\\right) = (5, 5)$. Area of $ABC = \\frac{1}{2}|2(4 - 10) + 8(10 - 1) + 5(1 - 4)| = \\frac{1}{2}|-12 + 72 - 15| = \\frac{45}{2}$. Area of $GBC = \\frac{1}{2}|5(4 - 10) + 8(10 - 5) + 5(5 - 4)| = \\frac{1}{2}|-30 + 40 + 5| = \\frac{15}{2}$. Area of $GCA = \\frac{1}{2}|5(10 - 1) + 5(1 - 5) + 2(5 - 10)| = \\frac{1}{2}|45 - 20 - 10| = \\frac{15}{2}$. Area of $GAB = \\frac{1}{2}|5(1 - 4) + 2(4 - 5) + 8(5 - 1)| = \\frac{1}{2}|-15 - 2 + 32| = \\frac{15}{2}$. Observation: the three areas are equal, and each is one third of the area of $ABC$ ($\\frac{15}{2} \\times 3 = \\frac{45}{2}$), so the centroid divides the triangle into three triangles of equal area.',
    steps: [
      { step: 'Finds the centroid $(5, 5)$', marks: 1 },
      { step: 'Finds area of $ABC = \\frac{45}{2}$ using a determinant', marks: 1 },
      { step: 'Finds the areas of $GBC$ and $GCA$ as $\\frac{15}{2}$ each', marks: 1 },
      { step: 'Finds the area of $GAB = \\frac{15}{2}$', marks: 1 },
      { step: 'States that the three areas are equal, each one third of $ABC$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d07', chapter: C, topic: 'Minors, cofactors and adjoint',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $A = \\begin{bmatrix} 1 & k & 2 \\\\ -1 & 1 & -1 \\\\ -1 & 2 & k \\end{bmatrix}$. Find $|A|$ in terms of $k$ and hence the values of $k$ for which $A$ is not invertible. For $k = 1$, find $\\text{adj } A$ and $A^{-1}$.',
    answer: 'Expanding along the first row: $|A| = 1(k + 2) - k(-k - 1) + 2(-2 + 1) = k + 2 + k^{2} + k - 2 = k^{2} + 2k = k(k + 2)$. $A$ is not invertible when $|A| = 0$, i.e. $k = 0$ or $k = -2$. For $k = 1$, $|A| = 3$ and $A = \\begin{bmatrix} 1 & 1 & 2 \\\\ -1 & 1 & -1 \\\\ -1 & 2 & 1 \\end{bmatrix}$. Cofactors: $A_{11} = 3$, $A_{12} = 2$, $A_{13} = -1$, $A_{21} = 3$, $A_{22} = 3$, $A_{23} = -3$, $A_{31} = -3$, $A_{32} = -1$, $A_{33} = 2$. So $\\text{adj } A = \\begin{bmatrix} 3 & 3 & -3 \\\\ 2 & 3 & -1 \\\\ -1 & -3 & 2 \\end{bmatrix}$ and $A^{-1} = \\frac{1}{3}\\begin{bmatrix} 3 & 3 & -3 \\\\ 2 & 3 & -1 \\\\ -1 & -3 & 2 \\end{bmatrix}$.',
    steps: [
      { step: 'Expands $|A|$ correctly to $k^{2} + 2k$', marks: 1 },
      { step: 'Finds $k = 0$ or $k = -2$ as the values making $A$ singular', marks: 1 },
      { step: 'Finds the nine cofactors for $k = 1$ with correct signs', marks: 1 },
      { step: 'Writes $\\text{adj } A$ as the transpose of the cofactor matrix', marks: 1 },
      { step: 'Divides by $|A| = 3$ to give $A^{-1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-det-r3-d08', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'long', complexity: 'hard', marks: 5,
    text: 'A mobile plan charges a fixed monthly rental of ₹$f$, plus ₹$l$ for each 10-minute block of local calls and ₹$s$ for each 10-minute block of STD calls. In three months the usage and bills were: month 1, $12$ local blocks and $3$ STD blocks, bill ₹310; month 2, $8$ local blocks and $5$ STD blocks, bill ₹330; month 3, $15$ local blocks and $1$ STD block, bill ₹280. Using the matrix method, find $f$, $l$ and $s$.',
    answer: 'The bills give $f + 12l + 3s = 310$, $f + 8l + 5s = 330$ and $f + 15l + s = 280$. So $AX = B$ with $A = \\begin{bmatrix} 1 & 12 & 3 \\\\ 1 & 8 & 5 \\\\ 1 & 15 & 1 \\end{bmatrix}$, $X = \\begin{bmatrix} f \\\\ l \\\\ s \\end{bmatrix}$, $B = \\begin{bmatrix} 310 \\\\ 330 \\\\ 280 \\end{bmatrix}$. $|A| = 1(8 - 75) - 12(1 - 5) + 3(15 - 8) = -67 + 48 + 21 = 2$, and $\\text{adj } A = \\begin{bmatrix} -67 & 33 & 36 \\\\ 4 & -2 & -2 \\\\ 7 & -3 & -4 \\end{bmatrix}$. Then $X = \\frac{1}{2}(\\text{adj } A)B = \\frac{1}{2}\\begin{bmatrix} 200 \\\\ 20 \\\\ 60 \\end{bmatrix} = \\begin{bmatrix} 100 \\\\ 10 \\\\ 30 \\end{bmatrix}$. The rental is ₹100, local calls cost ₹10 and STD calls ₹30 per 10-minute block.',
    steps: [
      { step: 'Forms the three bill equations in $f$, $l$, $s$', marks: 1 },
      { step: 'Writes $AX = B$ and finds $|A| = 2$', marks: 1 },
      { step: 'Finds $\\text{adj } A$ correctly', marks: 1 },
      { step: 'Computes $X = A^{-1}B$ to get $f = 100$, $l = 10$, $s = 30$', marks: 1 },
      { step: 'States the rental and the two rates with units', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-det-r3-e01', chapter: C, topic: 'Area of a triangle using determinants',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A farmer owns a triangular field $ABC$. On a map with axes in metres, the corners are $A(1, 1)$, $B(9, 3)$ and $C(5, 9)$. He wants to build a straight path from $A$ to the midpoint $D$ of the side $BC$, so that the two parts of the field can grow different crops.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the area of the field $ABC$ using determinants.', answer: 'Area $= \\frac{1}{2}|1(3 - 9) + 9(9 - 1) + 5(1 - 3)| = \\frac{1}{2}|-6 + 72 - 10| = 28$ square metres.' },
      { label: '(ii)', marks: 1, text: 'Find the coordinates of $D$.', answer: '$D$ is the midpoint of $B(9, 3)$ and $C(5, 9)$, so $D = \\left(\\frac{9 + 5}{2}, \\frac{3 + 9}{2}\\right) = (7, 6)$.' },
      { label: '(iii)', marks: 2, text: 'Find the area of triangle $ABD$ and hence show that the path divides the field into two parts of equal area. OR Find the value of $k$ if the point $P(k, 11)$ lies on the line through $A$ and $D$.', answer: 'Area of $ABD = \\frac{1}{2}|1(3 - 6) + 9(6 - 1) + 7(1 - 3)| = \\frac{1}{2}|-3 + 45 - 14| = 14$ square metres. The other part $ADC$ has area $28 - 14 = 14$ square metres, so the two parts are equal. OR: $A$, $D$, $P$ are collinear, so $\\begin{vmatrix} 1 & 1 & 1 \\\\ 7 & 6 & 1 \\\\ k & 11 & 1 \\end{vmatrix} = 0$. Expanding: $(6 - 11) - 1(7 - k) + (77 - 6k) = 65 - 5k = 0$, so $k = 13$.' },
    ],
    answer: 'Area of $ABC$ is $28$ square metres, $D = (7, 6)$, and $ABD$ has area $14$ square metres, which is half of the field, so the path splits the field equally. (OR $k = 13$.)',
  },
  {
    id: 'c12-det-r3-e02', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cab company charges a fixed base fare of ₹$b$, plus ₹$k$ for each kilometre and ₹$m$ for each minute of the trip. Three trips were billed as follows: $5$ km in $10$ minutes cost ₹100; $8$ km in $20$ minutes cost ₹150; $12$ km in $30$ minutes cost ₹210.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the three bills as a matrix equation $AX = B$.', answer: '$\\begin{bmatrix} 1 & 5 & 10 \\\\ 1 & 8 & 20 \\\\ 1 & 12 & 30 \\end{bmatrix}\\begin{bmatrix} b \\\\ k \\\\ m \\end{bmatrix} = \\begin{bmatrix} 100 \\\\ 150 \\\\ 210 \\end{bmatrix}$.' },
      { label: '(ii)', marks: 1, text: 'Find $|A|$ and state whether the rates are uniquely determined.', answer: '$|A| = 1(240 - 240) - 5(30 - 20) + 10(12 - 8) = 0 - 50 + 40 = -10 \\neq 0$, so $A$ is invertible and the rates are uniquely determined.' },
      { label: '(iii)', marks: 2, text: 'Using $A^{-1}$, find $b$, $k$ and $m$, and hence the fare for a trip of $10$ km lasting $25$ minutes.', answer: '$\\text{adj } A = \\begin{bmatrix} 0 & -30 & 20 \\\\ -10 & 20 & -10 \\\\ 4 & -7 & 3 \\end{bmatrix}$, so $X = \\frac{1}{-10}(\\text{adj } A)B = \\frac{1}{-10}\\begin{bmatrix} -300 \\\\ -100 \\\\ -20 \\end{bmatrix} = \\begin{bmatrix} 30 \\\\ 10 \\\\ 2 \\end{bmatrix}$. The base fare is ₹30, ₹10 per km and ₹2 per minute. A $10$ km, $25$ minute trip costs $30 + 100 + 50 = ₹180$.' },
    ],
    answer: '$|A| = -10$, and the rates are base fare ₹30, ₹10 per km, ₹2 per minute; a $10$ km, $25$ minute trip costs ₹180.',
  },
  {
    id: 'c12-det-r3-e03', chapter: C, topic: 'Inverse of a matrix and its properties',
    type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A graphic designer uses a transformation that moves every point $(x, y)$ of a drawing to the point given by $\\begin{bmatrix} x\' \\\\ y\' \\end{bmatrix} = A\\begin{bmatrix} x \\\\ y \\end{bmatrix}$, where $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$. A triangle in the drawing has vertices $O(0, 0)$, $P(2, 1)$ and $Q(1, 3)$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $|A|$ and say why the transformation can be undone.', answer: '$|A| = 6 - 1 = 5 \\neq 0$, so $A$ is invertible and the transformation can be reversed using $A^{-1}$.' },
      { label: '(ii)', marks: 1, text: 'Find $A^{-1}$.', answer: '$\\text{adj } A = \\begin{bmatrix} 3 & -1 \\\\ -1 & 2 \\end{bmatrix}$, so $A^{-1} = \\frac{1}{5}\\begin{bmatrix} 3 & -1 \\\\ -1 & 2 \\end{bmatrix}$.' },
      { label: '(iii)', marks: 2, text: 'Find the images of $P$ and $Q$, and the area of the image triangle. Compare it with the area of $OPQ$. OR Find the original point that is moved to $(9, 7)$.', answer: 'Image of $P$: $A\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix}$; image of $Q$: $A\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$; $O$ stays at the origin. Area of the image triangle $= \\frac{1}{2}|5 \\cdot 10 - 5 \\cdot 5| = \\frac{25}{2}$. Area of $OPQ = \\frac{1}{2}|2 \\cdot 3 - 1 \\cdot 1| = \\frac{5}{2}$. The image area is $5$ times the original, which equals $|A|$. OR: the original point is $A^{-1}\\begin{bmatrix} 9 \\\\ 7 \\end{bmatrix} = \\frac{1}{5}\\begin{bmatrix} 27 - 7 \\\\ -9 + 14 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$, i.e. the point $(4, 1)$.' },
    ],
    answer: '$|A| = 5$ and $A^{-1} = \\frac{1}{5}\\begin{bmatrix} 3 & -1 \\\\ -1 & 2 \\end{bmatrix}$. The image triangle has area $\\frac{25}{2}$, which is $5 = |A|$ times the area $\\frac{5}{2}$ of $OPQ$. (OR the original point is $(4, 1)$.)',
  },
  {
    id: 'c12-det-r3-e04', chapter: C, topic: 'Solving linear equations by the matrix method',
    type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A water tank is filled by three pipes $A$, $B$ and $C$. Let their filling rates, as fractions of the tank per hour, be $x$, $y$ and $z$. Pipes $A$ and $B$ together fill the tank in $12$ hours, pipes $B$ and $C$ together in $20$ hours, and pipes $A$ and $C$ together in $15$ hours.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the three conditions as a matrix equation $AX = B$, where $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$.', answer: '$x + y = \\frac{1}{12}$, $y + z = \\frac{1}{20}$, $x + z = \\frac{1}{15}$, so $\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} \\frac{1}{12} \\\\ \\frac{1}{20} \\\\ \\frac{1}{15} \\end{bmatrix}$.' },
      { label: '(ii)', marks: 1, text: 'Find the determinant and the adjoint of the coefficient matrix.', answer: 'The determinant is $1(1 - 0) - 1(0 - 1) + 0 = 2$. The adjoint is $\\begin{bmatrix} 1 & -1 & 1 \\\\ 1 & 1 & -1 \\\\ -1 & 1 & 1 \\end{bmatrix}$.' },
      { label: '(iii)', marks: 2, text: 'Find $x$, $y$ and $z$. Hence find how long each pipe would take alone to fill the tank.', answer: '$X = \\frac{1}{2}(\\text{adj})B$. First entry: $\\frac{1}{2}\\left(\\frac{1}{12} - \\frac{1}{20} + \\frac{1}{15}\\right) = \\frac{1}{2}\\cdot\\frac{5 - 3 + 4}{60} = \\frac{1}{20}$. Second: $\\frac{1}{2}\\left(\\frac{1}{12} + \\frac{1}{20} - \\frac{1}{15}\\right) = \\frac{1}{2}\\cdot\\frac{5 + 3 - 4}{60} = \\frac{1}{30}$. Third: $\\frac{1}{2}\\left(-\\frac{1}{12} + \\frac{1}{20} + \\frac{1}{15}\\right) = \\frac{1}{2}\\cdot\\frac{-5 + 3 + 4}{60} = \\frac{1}{60}$. So pipe $A$ alone takes $20$ hours, pipe $B$ takes $30$ hours and pipe $C$ takes $60$ hours.' },
    ],
    answer: 'The determinant is $2$, and $x = \\frac{1}{20}$, $y = \\frac{1}{30}$, $z = \\frac{1}{60}$, so the pipes alone take $20$, $30$ and $60$ hours respectively.',
  },
];
