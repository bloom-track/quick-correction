import type { Class12Question } from './types.js';

const C = 'Matrices';
const T1 = 'Order, types and equality of matrices';
const T2 = 'Matrix operations';
const T3 = 'Transpose, symmetric and skew-symmetric matrices';
const T4 = 'Invertible matrices and matrix equations';

/** LaTeX bmatrix from rows (use inside $...$). */
const m = (...rows: (string | number)[][]): string =>
  '\\begin{bmatrix} ' + rows.map((r) => r.join(' & ')).join(' \\\\ ') + ' \\end{bmatrix}';

const AR_OPTIONS = [
  'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
  'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
  '(A) is true, but (R) is false.',
  '(A) is false, but (R) is true.',
];

export const CH03_MAT: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Order, types and equality of matrices
  {
    id: 'c12-mat-a01', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A matrix has $28$ elements. How many different orders can it have?',
    options: ['$3$', '$4$', '$6$', '$28$'],
    answer: 'Correct option: C) $6$. The order $m \\times n$ needs $mn = 28$, so the orders are $1 \\times 28$, $2 \\times 14$, $4 \\times 7$, $7 \\times 4$, $14 \\times 2$ and $28 \\times 1$. Counting only $\\{1, 28\\}, \\{2, 14\\}, \\{4, 7\\}$ (and forgetting that $m \\times n$ and $n \\times m$ differ) gives the wrong answer $3$.',
  },
  {
    id: 'c12-mat-a02', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For the $3 \\times 3$ matrix $A = [a_{ij}]$ with $a_{ij} = i^{2} - 2j$, the value of $a_{32} - a_{23}$ is',
    options: ['$7$', '$-7$', '$3$', '$1$'],
    answer: 'Correct option: A) $7$. $a_{32} = 3^{2} - 2(2) = 5$ and $a_{23} = 2^{2} - 2(3) = -2$, so $a_{32} - a_{23} = 5 - (-2) = 7$.',
  },
  {
    id: 'c12-mat-a03', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $${m(['x + y', 2], [5, 'x - y'])} = ${m([8, 2], [5, 2])}$, then the value of $xy$ is`,
    options: ['$15$', '$16$', '$8$', '$6$'],
    answer: 'Correct option: A) $15$. Equal matrices have equal corresponding entries, so $x + y = 8$ and $x - y = 2$, giving $x = 5$, $y = 3$ and $xy = 15$. ($16$ is $x^{2} - y^{2}$, not $xy$.)',
  },
  {
    id: 'c12-mat-a04', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A scalar matrix $A$ of order $3$ has the sum of all its entries equal to $12$. Then $A^{2}$ equals',
    options: ['$4I$', '$12I$', '$16I$', '$144I$'],
    answer: 'Correct option: C) $16I$. In a scalar matrix the off-diagonal entries are $0$ and the three diagonal entries are equal, so each is $\\frac{12}{3} = 4$ and $A = 4I$. Hence $A^{2} = 16I^{2} = 16I$.',
  },
  {
    id: 'c12-mat-a05', chapter: C, topic: T1, type: 'mcq', complexity: 'medium', marks: 1,
    text: "$A$ is a matrix of order $3 \\times 5$. If both $AB'$ and $B'A$ are defined, then the order of $B$ is",
    options: ['$3 \\times 5$', '$5 \\times 3$', '$3 \\times 3$', '$5 \\times 5$'],
    answer: "Correct option: A) $3 \\times 5$. Let $B$ be $p \\times q$, so $B'$ is $q \\times p$. $AB'$ defined needs $5 = q$; $B'A$ defined needs $p = 3$. So $B$ is $3 \\times 5$ (and $B'$ is $5 \\times 3$, the tempting wrong choice).",
  },
  {
    id: 'c12-mat-a06', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'How many matrices of order $2 \\times 3$ can be formed if each entry is $0$, $1$ or $2$?',
    options: ['$18$', '$64$', '$216$', '$729$'],
    answer: 'Correct option: D) $729$. There are $6$ entries and each has $3$ choices, so the number of matrices is $3^{6} = 729$.',
  },
  {
    id: 'c12-mat-a07', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: `The matrix $${m([2, 0, 0], [0, -1, 0], [0, 0, 5])}$ is`,
    options: ['a scalar matrix', 'a diagonal matrix but not a scalar matrix', 'an identity matrix', 'an upper triangular matrix but not a diagonal matrix'],
    answer: 'Correct option: B) a diagonal matrix but not a scalar matrix. All off-diagonal entries are $0$, so it is diagonal; the diagonal entries $2, -1, 5$ are not all equal, so it is not scalar (and hence not the identity).',
  },
  {
    id: 'c12-mat-a08', chapter: C, topic: T1, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): Every identity matrix is a scalar matrix.\nReason (R): A scalar matrix is a diagonal matrix in which all the diagonal entries are equal.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). An identity matrix is diagonal with every diagonal entry equal to $1$, so by the definition in (R) it is a scalar matrix.',
  },

  // Matrix operations
  {
    id: 'c12-mat-a09', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([2, -1], [3, 4])}$ and $B = ${m([1, 0], [-2, 5])}$, then $2A - B$ is`,
    options: [`$${m([3, -2], [8, 3])}$`, `$${m([3, -2], [4, 3])}$`, `$${m([1, -1], [5, -1])}$`, `$${m([4, -2], [6, 8])}$`],
    answer: `Correct option: A) $${m([3, -2], [8, 3])}$. $2A = ${m([4, -2], [6, 8])}$, and subtracting $B$ entry by entry gives $4 - 1 = 3$, $-2 - 0 = -2$, $6 - (-2) = 8$, $8 - 5 = 3$.`,
  },
  {
    id: 'c12-mat-a10', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Matrices $A$, $B$ and $C$ have orders $2 \\times 3$, $3 \\times 2$ and $2 \\times 2$ respectively. Which of the following is defined?',
    options: ['$AB + C$', '$BA + C$', '$AC$', '$CB$'],
    answer: 'Correct option: A) $AB + C$. $AB$ is $2 \\times 2$, the same order as $C$, so the sum is defined. $BA$ is $3 \\times 3$ (cannot be added to $C$), $AC$ needs $3 = 2$, and $CB$ needs $2 = 3$.',
  },
  {
    id: 'c12-mat-a11', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([3, -3], [-3, 3])}$ and $A^{2} = kA$, then $k$ equals`,
    options: ['$3$', '$6$', '$9$', '$18$'],
    answer: `Correct option: B) $6$. $A^{2} = ${m([9 + 9, -9 - 9], [-9 - 9, 9 + 9])} = ${m([18, -18], [-18, 18])} = 6A$.`,
  },
  {
    id: 'c12-mat-a12', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([1, 2], [3, -1])}$, then $A^{4}$ equals`,
    options: ['$7I$', '$14I$', '$49I$', '$28I$'],
    answer: `Correct option: C) $49I$. $A^{2} = ${m([1 + 6, 2 - 2], [3 - 3, 6 + 1])} = 7I$, so $A^{4} = (A^{2})^{2} = (7I)^{2} = 49I$.`,
  },
  {
    id: 'c12-mat-a13', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A$ is a square matrix with $A^{2} = A$, then $(I + A)^{3} - 7A$ equals',
    options: ['$I$', '$A$', '$I + A$', '$O$'],
    answer: 'Correct option: A) $I$. Since $I$ and $A$ commute, $(I + A)^{3} = I + 3A + 3A^{2} + A^{3}$. With $A^{2} = A$ we also get $A^{3} = A$, so $(I + A)^{3} = I + 7A$ and $(I + A)^{3} - 7A = I$.',
  },
  {
    id: 'c12-mat-a14', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For square matrices $A$ and $B$ of the same order, $(A - B)^{2} = A^{2} - 2AB + B^{2}$ holds if and only if',
    options: ['$AB = BA$', '$AB = O$', '$A = B$', '$AB = -BA$'],
    answer: 'Correct option: A) $AB = BA$. In general $(A - B)^{2} = A^{2} - AB - BA + B^{2}$. This equals $A^{2} - 2AB + B^{2}$ exactly when $AB + BA = 2AB$, that is, $BA = AB$.',
  },
  {
    id: 'c12-mat-a15', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $${m(['x', 1])} ${m([1, -3], [0, 2])} ${m(['x'], [1])} = O$, then`,
    options: ['$x = 1$ or $x = 2$', '$x = -1$ or $x = -2$', '$x = 1$ or $x = -2$', '$x = -1$ or $x = 2$'],
    answer: `Correct option: A) $x = 1$ or $x = 2$. $${m(['x', 1])} ${m([1, -3], [0, 2])} = ${m(['x', '-3x + 2'])}$, and multiplying by the column gives $x^{2} - 3x + 2 = 0$, i.e. $(x - 1)(x - 2) = 0$.`,
  },
  {
    id: 'c12-mat-a16', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([1, -2, 3], [0, 4, 1])}$ and $B = ${m([2, 1], [-1, 0], [3, 5])}$, the entry in the second row and first column of $AB$ is`,
    options: ['$-1$', '$7$', '$13$', '$16$'],
    answer: 'Correct option: A) $-1$. Take row 2 of $A$ with column 1 of $B$: $0(2) + 4(-1) + 1(3) = -1$. ($13$ is the $(1,1)$ entry and $16$ the $(1,2)$ entry; $7$ comes from dropping the minus sign.)',
  },
  {
    id: 'c12-mat-a17', chapter: C, topic: T2, type: 'mcq', complexity: 'hard', marks: 1,
    text: `If $A = ${m([1, 1], [1, 1])}$ and $A^{2} + A^{3} + A^{4} = kA$, then $k$ equals`,
    options: ['$7$', '$14$', '$9$', '$24$'],
    answer: 'Correct option: B) $14$. $A^{2} = 2A$, so $A^{3} = 2A^{2} = 4A$ and $A^{4} = 8A$ (in general $A^{n} = 2^{n-1}A$). Hence $A^{2} + A^{3} + A^{4} = (2 + 4 + 8)A = 14A$.',
  },

  // Transpose, symmetric and skew-symmetric matrices
  {
    id: 'c12-mat-a18', chapter: C, topic: T3, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following matrices is skew-symmetric?',
    options: [
      `$${m([0, -1, 2], [1, 0, 5], [-2, 5, 0])}$`,
      `$${m([0, 2, -3], [-2, 0, 4], [3, -4, 0])}$`,
      `$${m([0, 3, 1], [3, 0, -2], [1, -2, 0])}$`,
      `$${m([1, 2, -3], [-2, 1, 4], [3, -4, 1])}$`,
    ],
    answer: 'Correct option: B) the second matrix. Its diagonal is zero and $a_{ij} = -a_{ji}$ for every pair ($2, -2$; $-3, 3$; $4, -4$). Option A fails because $a_{23} = a_{32} = 5$, option C is symmetric, and option D has non-zero diagonal entries.',
  },
  {
    id: 'c12-mat-a19', chapter: C, topic: T3, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If the matrix $${m([2, 'x', 4], [-1, 3, 'y'], ['z', 6, 5])}$ is symmetric, then $x + y + z$ equals`,
    options: ['$9$', '$11$', '$-3$', '$1$'],
    answer: 'Correct option: A) $9$. Symmetric means $a_{ij} = a_{ji}$, so $x = a_{21} = -1$, $y = a_{32} = 6$ and $z = a_{13} = 4$. Hence $x + y + z = 9$.',
  },
  {
    id: 'c12-mat-a20', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A$ is a symmetric matrix and $B$ is a skew-symmetric matrix of the same order, then $AB + BA$ is',
    options: ['a symmetric matrix', 'a skew-symmetric matrix', 'the identity matrix', 'neither symmetric nor skew-symmetric'],
    answer: "Correct option: B) a skew-symmetric matrix. $(AB + BA)' = B'A' + A'B' = (-B)A + A(-B) = -(AB + BA)$.",
  },
  {
    id: 'c12-mat-a21', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m(['\\cos \\theta', '-\\sin \\theta'], ['\\sin \\theta', '\\cos \\theta'])}$, $0 < \\theta < \\frac{\\pi}{2}$, and $A + A' = \\sqrt{2}\\, I$, then $\\theta$ equals`,
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
    answer: `Correct option: B) $\\frac{\\pi}{4}$. $A + A' = ${m(['2\\cos \\theta', 0], [0, '2\\cos \\theta'])}$, so $2\\cos \\theta = \\sqrt{2}$, $\\cos \\theta = \\frac{1}{\\sqrt{2}}$ and $\\theta = \\frac{\\pi}{4}$.`,
  },
  {
    id: 'c12-mat-a22', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `The matrix $A = ${m([3, 5], [1, -2])}$ is written as $P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric. Then $Q$ is`,
    options: [`$${m([0, 2], [-2, 0])}$`, `$${m([0, -2], [2, 0])}$`, `$${m([3, 3], [3, -2])}$`, `$${m([0, 4], [-4, 0])}$`],
    answer: `Correct option: A) $${m([0, 2], [-2, 0])}$. $Q = \\frac{1}{2}(A - A') = \\frac{1}{2}${m([0, 4], [-4, 0])} = ${m([0, 2], [-2, 0])}$. (Option C is $P$; option D forgets the factor $\\frac{1}{2}$.)`,
  },
  {
    id: 'c12-mat-a23', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([1, 2], [0, -1])}$ and $B = ${m([3, 1], [1, 0])}$, then $B'A'$ equals`,
    options: [`$${m([5, 1], [-1, 0])}$`, `$${m([5, -1], [1, 0])}$`, `$${m([3, 1], [5, 2])}$`, `$${m([3, 5], [1, 2])}$`],
    answer: `Correct option: B) $${m([5, -1], [1, 0])}$. $B'A' = (AB)'$ and $AB = ${m([5, 1], [-1, 0])}$, whose transpose is $${m([5, -1], [1, 0])}$. Option A is $AB$ itself and option C is $A'B'$.`,
  },
  {
    id: 'c12-mat-a24', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'How many skew-symmetric matrices of order $3$ can be formed if each entry is $-1$, $0$ or $1$?',
    options: ['$9$', '$27$', '$81$', '$729$'],
    answer: 'Correct option: B) $27$. The diagonal entries must be $0$, and once the three entries above the diagonal are chosen, the entries below are fixed as their negatives. Each of the three free entries has $3$ choices, giving $3^{3} = 27$.',
  },
  {
    id: 'c12-mat-a25', chapter: C, topic: T3, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: "Assertion (A): For every square matrix $A$, the matrix $A + A'$ is symmetric.\nReason (R): For matrices of the same order, $(A + B)' = A' + B'$ and $(A')' = A$.",
    options: AR_OPTIONS,
    answer: "Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). Using (R), $(A + A')' = A' + (A')' = A' + A$, which is exactly the statement that $A + A'$ is symmetric.",
  },
  {
    id: 'c12-mat-a26', chapter: C, topic: T3, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: "Assertion (A): If $A$ is a skew-symmetric matrix, then $A^{2}$ is also skew-symmetric.\nReason (R): If $A$ is skew-symmetric, then $(A^{2})' = (A')^{2} = A^{2}$.",
    options: AR_OPTIONS,
    answer: `Correct option: D) (A) is false, but (R) is true. $(A^{2})' = (A')^{2} = (-A)^{2} = A^{2}$, so $A^{2}$ is symmetric, not skew-symmetric. For example $A = ${m([0, 1], [-1, 0])}$ gives $A^{2} = -I$, which is not skew-symmetric.`,
  },

  // Invertible matrices and matrix equations
  {
    id: 'c12-mat-a27', chapter: C, topic: T4, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ is a square matrix such that $A^{3} = I$, then $A^{-1}$ equals',
    options: ['$A$', '$A^{2}$', '$I$', '$-A$'],
    answer: 'Correct option: B) $A^{2}$. $A \\cdot A^{2} = A^{2} \\cdot A = A^{3} = I$, so $A$ is invertible with inverse $A^{2}$.',
  },
  {
    id: 'c12-mat-a28', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A$ and $B$ are invertible matrices with $A^{-1} = ${m([1, 2], [0, 1])}$ and $B^{-1} = ${m([1, 0], [3, 1])}$, then $(AB)^{-1}$ is`,
    options: [`$${m([7, 2], [3, 1])}$`, `$${m([1, 2], [3, 7])}$`, `$${m([2, 2], [3, 2])}$`, '$I$'],
    answer: `Correct option: B) $${m([1, 2], [3, 7])}$. $(AB)^{-1} = B^{-1}A^{-1} = ${m([1, 0], [3, 1])}${m([1, 2], [0, 1])} = ${m([1, 2], [3, 7])}$. Option A is $A^{-1}B^{-1}$, the product in the wrong order.`,
  },
  {
    id: 'c12-mat-a29', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If a square matrix $A$ satisfies $A^{2} - 4A + I = O$, then $A^{-1}$ equals',
    options: ['$4I - A$', '$A - 4I$', '$A + 4I$', '$4A - I$'],
    answer: 'Correct option: A) $4I - A$. From $A^{2} - 4A = -I$ we get $A(4I - A) = I$, and similarly $(4I - A)A = I$, so $A^{-1} = 4I - A$.',
  },
  {
    id: 'c12-mat-a30', chapter: C, topic: T4, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $A$ and $B$ are invertible matrices of the same order, then $(AB)^{-1} = A^{-1}B^{-1}$.\nReason (R): For invertible matrices $A$ and $B$ of the same order, $(AB)(B^{-1}A^{-1}) = I$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I$, so $(AB)^{-1} = B^{-1}A^{-1}$, with the order reversed. Since matrix multiplication is not commutative, $A^{-1}B^{-1}$ is not the inverse in general.',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-mat-b01', chapter: C, topic: T1, type: 'short', complexity: 'easy', marks: 2,
    text: `Find the values of $x$ and $y$ if $2${m(['x', 5], [7, 'y - 3'])} + ${m([3, -4], [1, 2])} = ${m([7, 6], [15, 14])}$.`,
    answer: `The left side is $${m(['2x + 3', 6], [15, '2y - 4'])}$. Equating corresponding entries: $2x + 3 = 7$ gives $x = 2$, and $2y - 4 = 14$ gives $y = 9$. (The entries $6$ and $15$ already match.) So $x = 2$, $y = 9$.`,
    steps: [
      { step: 'Simplifies the left side to a single matrix and equates corresponding entries', marks: 1 },
      { step: 'Gets $x = 2$ and $y = 9$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-b02', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `Show that the matrix $A = ${m([3, 1], [-1, 2])}$ satisfies the equation $A^{2} - 5A + 7I = O$.`,
    answer: `$A^{2} = ${m([3, 1], [-1, 2])}${m([3, 1], [-1, 2])} = ${m([8, 5], [-5, 3])}$. Then $A^{2} - 5A + 7I = ${m([8, 5], [-5, 3])} - ${m([15, 5], [-5, 10])} + ${m([7, 0], [0, 7])} = ${m([0, 0], [0, 0])} = O$. Hence $A$ satisfies the equation.`,
    steps: [
      { step: `Finds $A^{2} = ${m([8, 5], [-5, 3])}$`, marks: 1 },
      { step: 'Substitutes and shows $A^{2} - 5A + 7I = O$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-b03', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `If $A = ${m([1, 2], [2, 1])}$, find the numbers $a$ and $b$ such that $A^{2} = aA + bI$.`,
    answer: `$A^{2} = ${m([5, 4], [4, 5])}$ and $aA + bI = ${m(['a + b', '2a'], ['2a', 'a + b'])}$. Equating entries: $2a = 4$ gives $a = 2$, and $a + b = 5$ gives $b = 3$. So $A^{2} = 2A + 3I$.`,
    steps: [
      { step: `Finds $A^{2} = ${m([5, 4], [4, 5])}$ and writes $aA + bI$ as a matrix`, marks: 1 },
      { step: 'Equates entries to get $a = 2$, $b = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-b04', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 2,
    text: `Find the matrix $X$ such that $X${m([2, 1], [3, 2])} = ${m([1, 0], [4, 1])}$.`,
    answer: `Let $M = ${m([2, 1], [3, 2])}$. Since $2(2) - 1(3) = 1 \\neq 0$, $M$ is invertible with $M^{-1} = ${m([2, -1], [-3, 2])}$ (check: $MM^{-1} = I$). Post-multiplying both sides by $M^{-1}$: $X = ${m([1, 0], [4, 1])}${m([2, -1], [-3, 2])} = ${m([2, -1], [5, -2])}$. Check: $${m([2, -1], [5, -2])}${m([2, 1], [3, 2])} = ${m([1, 0], [4, 1])}$.`,
    steps: [
      { step: `Finds $M^{-1} = ${m([2, -1], [-3, 2])}$ (or sets up four equations for the entries of $X$)`, marks: 1 },
      { step: `Gets $X = ${m([2, -1], [5, -2])}$`, marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-mat-c01', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 3,
    text: `Express the matrix $A = ${m([1, 3, -2], [5, 0, 4], [-6, 2, 7])}$ as the sum of a symmetric matrix and a skew-symmetric matrix.`,
    answer: `$A' = ${m([1, 5, -6], [3, 0, 2], [-2, 4, 7])}$. Let $P = \\frac{1}{2}(A + A') = \\frac{1}{2}${m([2, 8, -8], [8, 0, 6], [-8, 6, 14])} = ${m([1, 4, -4], [4, 0, 3], [-4, 3, 7])}$. $P' = P$, so $P$ is symmetric. Let $Q = \\frac{1}{2}(A - A') = \\frac{1}{2}${m([0, -2, 4], [2, 0, 2], [-4, -2, 0])} = ${m([0, -1, 2], [1, 0, 1], [-2, -1, 0])}$. $Q' = -Q$, so $Q$ is skew-symmetric. Finally $P + Q = ${m([1, 3, -2], [5, 0, 4], [-6, 2, 7])} = A$.`,
    steps: [
      { step: `Finds the symmetric part $P = \\frac{1}{2}(A + A') = ${m([1, 4, -4], [4, 0, 3], [-4, 3, 7])}$`, marks: 1 },
      { step: `Finds the skew-symmetric part $Q = \\frac{1}{2}(A - A') = ${m([0, -1, 2], [1, 0, 1], [-2, -1, 0])}$`, marks: 1 },
      { step: "Checks $P' = P$, $Q' = -Q$ and $P + Q = A$", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-c02', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 3,
    text: `Find the values of $x$ for which $${m([1, 'x', 2])} ${m([1, 2, 2], [1, 1, 1], [2, 1, 1])} ${m(['x'], [1], [2])} = O$.`,
    answer: `First, $${m([1, 'x', 2])} ${m([1, 2, 2], [1, 1, 1], [2, 1, 1])} = ${m(['1 + x + 4', '2 + x + 2', '2 + x + 2'])} = ${m(['x + 5', 'x + 4', 'x + 4'])}$. Then $${m(['x + 5', 'x + 4', 'x + 4'])} ${m(['x'], [1], [2])} = [x^{2} + 5x + x + 4 + 2x + 8] = [x^{2} + 8x + 12]$. Setting this equal to $O$: $x^{2} + 8x + 12 = 0$, so $(x + 2)(x + 6) = 0$, giving $x = -2$ or $x = -6$.`,
    steps: [
      { step: `Multiplies the first two matrices to get $${m(['x + 5', 'x + 4', 'x + 4'])}$`, marks: 1 },
      { step: 'Multiplies by the column to get $x^{2} + 8x + 12 = 0$', marks: 1 },
      { step: 'Solves to get $x = -2$ or $x = -6$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-c03', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 3,
    text: `For $A = ${m([4, 3], [1, 1])}$ and $B = ${m([2, 1], [1, 1])}$, verify that $(AB)^{-1} = B^{-1}A^{-1}$.`,
    answer: `$AB = ${m([11, 7], [3, 2])}$. Since $11(2) - 7(3) = 1$, $(AB)^{-1} = ${m([2, -7], [-3, 11])}$. Next, $4(1) - 3(1) = 1$ gives $A^{-1} = ${m([1, -3], [-1, 4])}$, and $2(1) - 1(1) = 1$ gives $B^{-1} = ${m([1, -1], [-1, 2])}$. Then $B^{-1}A^{-1} = ${m([1, -1], [-1, 2])}${m([1, -3], [-1, 4])} = ${m([2, -7], [-3, 11])}$. Both sides are equal, so $(AB)^{-1} = B^{-1}A^{-1}$ is verified.`,
    steps: [
      { step: `Finds $AB = ${m([11, 7], [3, 2])}$ and $(AB)^{-1} = ${m([2, -7], [-3, 11])}$`, marks: 1 },
      { step: `Finds $A^{-1} = ${m([1, -3], [-1, 4])}$ and $B^{-1} = ${m([1, -1], [-1, 2])}$`, marks: 1 },
      { step: 'Computes $B^{-1}A^{-1}$ and concludes the two sides are equal', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-c04', chapter: C, topic: T2, type: 'short', complexity: 'hard', marks: 3,
    text: `If $A = ${m([2, -1], [1, 0])}$, use the principle of mathematical induction to prove that $A^{n} = ${m(['1 + n', '-n'], ['n', '1 - n'])}$ for every natural number $n$.`,
    answer: `Let $P(n)$ be the statement $A^{n} = ${m(['1 + n', '-n'], ['n', '1 - n'])}$. For $n = 1$ the right side is $${m([2, -1], [1, 0])} = A$, so $P(1)$ is true. Assume $P(k)$ is true. Then $A^{k+1} = A^{k}A = ${m(['1 + k', '-k'], ['k', '1 - k'])}${m([2, -1], [1, 0])} = ${m(['2 + 2k - k', '-1 - k'], ['2k + 1 - k', '-k'])} = ${m(['1 + (k + 1)', '-(k + 1)'], ['k + 1', '1 - (k + 1)'])}$, which is $P(k + 1)$. By the principle of mathematical induction, $P(n)$ is true for all natural numbers $n$.`,
    steps: [
      { step: 'Verifies the result for $n = 1$', marks: 1 },
      { step: 'Assumes it for $n = k$ and computes $A^{k}A$ correctly', marks: 1 },
      { step: 'Simplifies to the form for $n = k + 1$ and concludes by induction', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-mat-d01', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `If $A = ${m([2, 1, 0], [0, 1, 1], [1, 0, 2])}$, show that $A^{3} - 5A^{2} + 8A - 5I = O$. Hence express $A^{4}$ in the form $pA^{2} + qA + rI$.`,
    answer: `$A^{2} = ${m([4, 3, 1], [1, 1, 3], [4, 1, 4])}$ and $A^{3} = A^{2}A = ${m([9, 7, 5], [5, 2, 7], [12, 5, 9])}$. Now $5A^{2} = ${m([20, 15, 5], [5, 5, 15], [20, 5, 20])}$, $8A = ${m([16, 8, 0], [0, 8, 8], [8, 0, 16])}$ and $5I = ${m([5, 0, 0], [0, 5, 0], [0, 0, 5])}$. So $A^{3} - 5A^{2} + 8A - 5I = ${m(['9 - 20 + 16 - 5', '7 - 15 + 8 - 0', '5 - 5 + 0 - 0'], ['5 - 5 + 0 - 0', '2 - 5 + 8 - 5', '7 - 15 + 8 - 0'], ['12 - 20 + 8 - 0', '5 - 5 + 0 - 0', '9 - 20 + 16 - 5'])} = O$. Hence $A^{3} = 5A^{2} - 8A + 5I$. Multiplying by $A$: $A^{4} = 5A^{3} - 8A^{2} + 5A = 5(5A^{2} - 8A + 5I) - 8A^{2} + 5A = 17A^{2} - 35A + 25I$. So $p = 17$, $q = -35$, $r = 25$.`,
    steps: [
      { step: `Finds $A^{2} = ${m([4, 3, 1], [1, 1, 3], [4, 1, 4])}$`, marks: 1 },
      { step: `Finds $A^{3} = ${m([9, 7, 5], [5, 2, 7], [12, 5, 9])}$`, marks: 1 },
      { step: 'Substitutes and shows $A^{3} - 5A^{2} + 8A - 5I = O$', marks: 1 },
      { step: 'Writes $A^{4} = 5A^{3} - 8A^{2} + 5A$ and substitutes for $A^{3}$', marks: 1 },
      { step: 'Gets $A^{4} = 17A^{2} - 35A + 25I$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-d02', chapter: C, topic: T4, type: 'long', complexity: 'hard', marks: 5,
    text: `If $B = ${m([1, 1, 2], [0, 2, 1], [1, 0, 1])}$, show that $B^{3} - 4B^{2} + 3B + I = O$. Hence find $B^{-1}$ and verify that $BB^{-1} = I$.`,
    answer: `$B^{2} = ${m([3, 3, 5], [1, 4, 3], [2, 1, 3])}$ and $B^{3} = B^{2}B = ${m([8, 9, 14], [4, 9, 9], [5, 4, 8])}$. Then $B^{3} - 4B^{2} + 3B + I = ${m([8, 9, 14], [4, 9, 9], [5, 4, 8])} - ${m([12, 12, 20], [4, 16, 12], [8, 4, 12])} + ${m([3, 3, 6], [0, 6, 3], [3, 0, 3])} + ${m([1, 0, 0], [0, 1, 0], [0, 0, 1])} = O$. So $B^{3} - 4B^{2} + 3B = -I$, i.e. $B(B^{2} - 4B + 3I) = -I$, which gives $B(-B^{2} + 4B - 3I) = I$ (and the same factor works on the left, since powers of $B$ commute). Hence $B^{-1} = -B^{2} + 4B - 3I = ${m([-3, -3, -5], [-1, -4, -3], [-2, -1, -3])} + ${m([4, 4, 8], [0, 8, 4], [4, 0, 4])} - ${m([3, 0, 0], [0, 3, 0], [0, 0, 3])} = ${m([-2, 1, 3], [-1, 1, 1], [2, -1, -2])}$. Check: $BB^{-1} = ${m([1, 1, 2], [0, 2, 1], [1, 0, 1])}${m([-2, 1, 3], [-1, 1, 1], [2, -1, -2])} = ${m([1, 0, 0], [0, 1, 0], [0, 0, 1])} = I$.`,
    steps: [
      { step: `Finds $B^{2} = ${m([3, 3, 5], [1, 4, 3], [2, 1, 3])}$ and $B^{3} = ${m([8, 9, 14], [4, 9, 9], [5, 4, 8])}$`, marks: 1 },
      { step: 'Substitutes and shows $B^{3} - 4B^{2} + 3B + I = O$', marks: 1 },
      { step: 'Rearranges to $B^{-1} = -B^{2} + 4B - 3I$', marks: 1 },
      { step: `Computes $B^{-1} = ${m([-2, 1, 3], [-1, 1, 1], [2, -1, -2])}$`, marks: 1 },
      { step: 'Multiplies $BB^{-1}$ and gets $I$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-d03', chapter: C, topic: T3, type: 'long', complexity: 'medium', marks: 5,
    text: `Let $A = ${m([2, -1, 3], [1, 0, -2])}$ and $B = ${m([1, 4], [0, -2], [3, 1])}$. Verify that $(AB)' = B'A'$. Also find $AA'$ and show that it is a symmetric matrix.`,
    answer: `$AB = ${m(['2 + 0 + 9', '8 + 2 + 3'], ['1 + 0 - 6', '4 + 0 - 2'])} = ${m([11, 13], [-5, 2])}$, so $(AB)' = ${m([11, -5], [13, 2])}$. Next $B' = ${m([1, 0, 3], [4, -2, 1])}$ and $A' = ${m([2, 1], [-1, 0], [3, -2])}$, so $B'A' = ${m(['2 + 0 + 9', '1 + 0 - 6'], ['8 + 2 + 3', '4 + 0 - 2'])} = ${m([11, -5], [13, 2])}$. Hence $(AB)' = B'A'$. Also $AA' = ${m([2, -1, 3], [1, 0, -2])}${m([2, 1], [-1, 0], [3, -2])} = ${m([14, -4], [-4, 5])}$. Its $(1,2)$ and $(2,1)$ entries are both $-4$, so $(AA')' = AA'$ and $AA'$ is symmetric. (In general $(AA')' = (A')'A' = AA'$.)`,
    steps: [
      { step: `Finds $AB = ${m([11, 13], [-5, 2])}$`, marks: 1 },
      { step: `Writes $(AB)' = ${m([11, -5], [13, 2])}$`, marks: 1 },
      { step: "Writes $B'$ and $A'$ and finds $B'A'$, concluding $(AB)' = B'A'$", marks: 1 },
      { step: `Finds $AA' = ${m([14, -4], [-4, 5])}$`, marks: 1 },
      { step: "Shows $(AA')' = AA'$, so $AA'$ is symmetric", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-d04', chapter: C, topic: T2, type: 'long', complexity: 'medium', marks: 5,
    text: 'A dairy farm supplies three markets every week. Market $M_1$ takes $120$ litres of milk, $40$ kg of curd and $10$ kg of ghee; market $M_2$ takes $150$ litres of milk, $30$ kg of curd and $8$ kg of ghee; market $M_3$ takes $100$ litres of milk, $50$ kg of curd and $12$ kg of ghee. The selling prices are ₹$60$ per litre of milk, ₹$80$ per kg of curd and ₹$600$ per kg of ghee. The farm\'s costs are ₹$45$ per litre of milk, ₹$55$ per kg of curd and ₹$450$ per kg of ghee. Using matrix multiplication, find (a) the weekly revenue from each market, (b) the weekly cost of supplying each market, and (c) the weekly profit from each market and the total weekly profit.',
    answer: `Let $Q = ${m([120, 40, 10], [150, 30, 8], [100, 50, 12])}$ (rows $M_1, M_2, M_3$; columns milk, curd, ghee), the price column $S = ${m([60], [80], [600])}$ and the cost column $K = ${m([45], [55], [450])}$. (a) Revenue $QS = ${m(['7200 + 3200 + 6000'], ['9000 + 2400 + 4800'], ['6000 + 4000 + 7200'])} = ${m([16400], [16200], [17200])}$, i.e. ₹$16{,}400$, ₹$16{,}200$ and ₹$17{,}200$ from $M_1$, $M_2$, $M_3$. (b) Cost $QK = ${m(['5400 + 2200 + 4500'], ['6750 + 1650 + 3600'], ['4500 + 2750 + 5400'])} = ${m([12100], [12000], [12650])}$, i.e. ₹$12{,}100$, ₹$12{,}000$ and ₹$12{,}650$. (c) Profit $QS - QK = ${m([4300], [4200], [4550])}$, i.e. ₹$4300$ from $M_1$, ₹$4200$ from $M_2$ and ₹$4550$ from $M_3$. Total weekly profit $= 4300 + 4200 + 4550 =$ ₹$13{,}050$. (Equivalently, profit $= Q(S - K)$ with $S - K = ${m([15], [25], [150])}$.)`,
    steps: [
      { step: 'Sets up the quantity matrix $Q$ ($3 \\times 3$) and the price and cost column matrices', marks: 1 },
      { step: 'Computes the revenue matrix: ₹16,400, ₹16,200, ₹17,200', marks: 1 },
      { step: 'Computes the cost matrix: ₹12,100, ₹12,000, ₹12,650', marks: 1 },
      { step: 'Finds the profit matrix: ₹4300, ₹4200, ₹4550', marks: 1 },
      { step: 'States the total weekly profit ₹13,050', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-d05', chapter: C, topic: T1, type: 'long', complexity: 'medium', marks: 5,
    text: `(a) Find the values of $a$, $b$, $c$ and $d$ if $${m(['a + 2b', '3a - c'], ['b - d', 'a + b + c + d'])} = ${m([8, 1], [-1, 14])}$.\n(b) Construct the $3 \\times 2$ matrix $A = [a_{ij}]$ whose elements are given by $a_{ij} = \\frac{(i - 2j)^{2}}{2}$.`,
    answer: `(a) Equating corresponding entries: $a + 2b = 8$, $3a - c = 1$, $b - d = -1$ and $a + b + c + d = 14$. From the second and third, $c = 3a - 1$ and $d = b + 1$. Substituting in the fourth: $a + b + 3a - 1 + b + 1 = 14$, i.e. $4a + 2b = 14$, or $2a + b = 7$. So $b = 7 - 2a$; substituting in $a + 2b = 8$ gives $a + 14 - 4a = 8$, so $3a = 6$, $a = 2$ and $b = 3$. Then $c = 5$ and $d = 4$. Check: $2 + 3 + 5 + 4 = 14$. (b) $a_{11} = \\frac{(1 - 2)^{2}}{2} = \\frac{1}{2}$, $a_{12} = \\frac{(1 - 4)^{2}}{2} = \\frac{9}{2}$, $a_{21} = \\frac{(2 - 2)^{2}}{2} = 0$, $a_{22} = \\frac{(2 - 4)^{2}}{2} = 2$, $a_{31} = \\frac{(3 - 2)^{2}}{2} = \\frac{1}{2}$, $a_{32} = \\frac{(3 - 4)^{2}}{2} = \\frac{1}{2}$. So $A = ${m(['\\frac{1}{2}', '\\frac{9}{2}'], [0, 2], ['\\frac{1}{2}', '\\frac{1}{2}'])}$.`,
    steps: [
      { step: '(a) Writes the four equations from equality of matrices', marks: 1 },
      { step: '(a) Eliminates $c$ and $d$ to get $2a + b = 7$ with $a + 2b = 8$', marks: 1 },
      { step: '(a) Gets $a = 2$, $b = 3$, $c = 5$, $d = 4$', marks: 1 },
      { step: '(b) Computes the six elements correctly', marks: 1 },
      { step: '(b) Writes the $3 \\times 2$ matrix in the correct arrangement', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-d06', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $A = ${m(['\\cos x', '\\sin x'], ['-\\sin x', '\\cos x'])}$.\n(a) Prove by mathematical induction that $A^{n} = ${m(['\\cos nx', '\\sin nx'], ['-\\sin nx', '\\cos nx'])}$ for every natural number $n$.\n(b) Show that $AA' = I$.\n(c) For $x = \\frac{\\pi}{6}$, find the smallest natural number $n$ for which $A^{n} = I$.`,
    answer: `(a) Let $P(n)$ be the given statement. For $n = 1$ the right side is $A$, so $P(1)$ is true. Assume $P(k)$. Then $A^{k+1} = A^{k}A = ${m(['\\cos kx', '\\sin kx'], ['-\\sin kx', '\\cos kx'])}${m(['\\cos x', '\\sin x'], ['-\\sin x', '\\cos x'])} = ${m(['\\cos kx \\cos x - \\sin kx \\sin x', '\\cos kx \\sin x + \\sin kx \\cos x'], ['-(\\sin kx \\cos x + \\cos kx \\sin x)', '\\cos kx \\cos x - \\sin kx \\sin x'])} = ${m(['\\cos (k+1)x', '\\sin (k+1)x'], ['-\\sin (k+1)x', '\\cos (k+1)x'])}$, using the addition formulae. So $P(k + 1)$ is true, and by induction $P(n)$ holds for all natural $n$. (b) $AA' = ${m(['\\cos x', '\\sin x'], ['-\\sin x', '\\cos x'])}${m(['\\cos x', '-\\sin x'], ['\\sin x', '\\cos x'])} = ${m(['\\cos^{2} x + \\sin^{2} x', '-\\cos x \\sin x + \\sin x \\cos x'], ['-\\sin x \\cos x + \\cos x \\sin x', '\\sin^{2} x + \\cos^{2} x'])} = I$. (c) By (a), $A^{n} = I$ needs $\\cos \\frac{n\\pi}{6} = 1$ and $\\sin \\frac{n\\pi}{6} = 0$, i.e. $\\frac{n\\pi}{6}$ is a multiple of $2\\pi$, so $n$ is a multiple of $12$. The smallest such natural number is $n = 12$.`,
    steps: [
      { step: '(a) Verifies $P(1)$ and assumes $P(k)$', marks: 1 },
      { step: '(a) Multiplies $A^{k}A$ correctly', marks: 1 },
      { step: '(a) Uses the addition formulae to reach $P(k+1)$ and concludes', marks: 1 },
      { step: "(b) Shows $AA' = I$ using $\\sin^{2} x + \\cos^{2} x = 1$", marks: 1 },
      { step: '(c) Uses $\\cos \\frac{n\\pi}{6} = 1$, $\\sin \\frac{n\\pi}{6} = 0$ to get $n = 12$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-mat-e01', chapter: C, topic: T2, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A bakery has two outlets, P and Q. On a particular day, outlet P sells $20$ cakes, $35$ pastries and $50$ cookies, and outlet Q sells $25$ cakes, $30$ pastries and $40$ cookies. These sales are recorded in a matrix $S$ whose rows are the outlets (P, Q) and whose columns are the items (cakes, pastries, cookies). A cake sells for ₹$300$, a pastry for ₹$60$ and a cookie for ₹$15$; the bakery\'s cost is ₹$200$ per cake, ₹$40$ per pastry and ₹$10$ per cookie.',
    answer: '$S$ is $2 \\times 3$ and $S$ times the price column is $2 \\times 1$; outlet Q\'s revenue is ₹$9900$. The profits are ₹$2950$ (P) and ₹$3300$ (Q), a total of ₹$6250$ (OR: the cookie price is $x = 14$).',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order of $S$, and the order of the product of $S$ with the $3 \\times 1$ column matrix of selling prices.',
        answer: '$S$ has $2$ rows and $3$ columns, so it is of order $2 \\times 3$. A $2 \\times 3$ matrix times a $3 \\times 1$ matrix is defined and has order $2 \\times 1$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Using matrix multiplication, find the revenue of outlet Q for the day.',
        answer: `Revenue of Q $= ${m([25, 30, 40])}${m([300], [60], [15])} = 7500 + 1800 + 600 =$ ₹$9900$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using matrices, find the profit of each outlet for the day and the total profit.\nOR\nSuppose the selling price of a cookie is unknown, say ₹$x$, while the other prices stay the same. If the total revenue of the two outlets together is ₹$18{,}660$, find $x$.',
        answer: `Profit per item is $300 - 200 = 100$, $60 - 40 = 20$ and $15 - 10 = 5$ rupees. Profit matrix $= S${m([100], [20], [5])} = ${m(['2000 + 700 + 250'], ['2500 + 600 + 200'])} = ${m([2950], [3300])}$. So P earns ₹$2950$, Q earns ₹$3300$, and the total profit is ₹$6250$.\nOR: Total units sold are $45$ cakes, $65$ pastries and $90$ cookies, so the total revenue is $${m([45, 65, 90])}${m([300], [60], ['x'])} = 13500 + 3900 + 90x = 17400 + 90x$. Setting $17400 + 90x = 18660$ gives $90x = 1260$, so $x = 14$; a cookie sells for ₹$14$.`,
      },
    ],
  },
  {
    id: 'c12-mat-e02', chapter: C, topic: T3, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `An airline flies between three cities X, Y and Z. Its weekly schedule is recorded in the matrix $F = ${m([0, 3, 2], [1, 0, 4], [2, 2, 0])}$, where the entry in row $i$ and column $j$ is the number of direct flights from city $i$ to city $j$ (rows and columns in the order X, Y, Z). For example, there are $3$ flights from X to Y and $1$ flight from Y to X.`,
    answer: `$F$ is not symmetric since $f_{12} = 3 \\neq f_{21} = 1$; $F + F' = ${m([0, 4, 4], [4, 0, 6], [4, 6, 0])}$, whose $(1,2)$ entry $4$ is the total X–Y flights both ways. $F = ${m([0, 2, 2], [2, 0, 3], [2, 3, 0])} + ${m([0, 1, 0], [-1, 0, 1], [0, -1, 0])}$ (symmetric plus skew-symmetric) (OR: $F - F'$ is skew-symmetric and X, Z have equal flights both ways).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $F$ a symmetric matrix? Give a reason.',
        answer: "No. For a symmetric matrix $f_{ij} = f_{ji}$ for all $i, j$, but here $f_{12} = 3$ while $f_{21} = 1$. So $F' \\neq F$.",
      },
      {
        label: '(ii)', marks: 1,
        text: "Find $F + F'$ and state what its entry in row 1, column 2 tells the airline.",
        answer: `$F' = ${m([0, 1, 2], [3, 0, 2], [2, 4, 0])}$, so $F + F' = ${m([0, 4, 4], [4, 0, 6], [4, 6, 0])}$. Its $(1,2)$ entry, $4$, is the total number of direct flights between X and Y in either direction ($3 + 1$).`,
      },
      {
        label: '(iii)', marks: 2,
        text: "Express $F$ as the sum of a symmetric matrix and a skew-symmetric matrix.\nOR\nFind $F - F'$ and show that it is skew-symmetric. Which pair of cities has the same number of flights in both directions?",
        answer: `$P = \\frac{1}{2}(F + F') = ${m([0, 2, 2], [2, 0, 3], [2, 3, 0])}$, which is symmetric, and $Q = \\frac{1}{2}(F - F') = \\frac{1}{2}${m([0, 2, 0], [-2, 0, 2], [0, -2, 0])} = ${m([0, 1, 0], [-1, 0, 1], [0, -1, 0])}$, which is skew-symmetric since $Q' = -Q$. Check: $P + Q = ${m([0, 3, 2], [1, 0, 4], [2, 2, 0])} = F$.\nOR: $F - F' = ${m([0, 2, 0], [-2, 0, 2], [0, -2, 0])}$. Its diagonal is zero and each entry is the negative of its mirror entry, so $(F - F')' = F' - F = -(F - F')$: it is skew-symmetric. The $(1,3)$ entry is $0$, so X and Z have the same number of flights in both directions ($2$ each way).`,
      },
    ],
  },
  {
    id: 'c12-mat-e03', chapter: C, topic: T4, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `In a school coding club, students send two-letter messages in code. Each letter is replaced by its position in the alphabet (A = 1, B = 2, ..., Z = 26), the two numbers are written as a column matrix $M$, and the coded message is $E = KM$, where the key matrix is $K = ${m([3, 1], [5, 2])}$. To read a coded message, the receiver uses $M = K^{-1}E$.`,
    answer: `$K^{-1} = ${m([2, -1], [-5, 3])}$, "HI" codes to $33, 58$, and the message $36, 65$ decodes to $7, 15$, the word "GO" (OR: $K^{2} - 5K + I = O$ gives $K^{-1} = 5I - K$, the same matrix).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $K^{-1}$.',
        answer: `$3(2) - 1(5) = 1 \\neq 0$, so $K$ is invertible and $K^{-1} = ${m([2, -1], [-5, 3])}$. Check: $K K^{-1} = ${m([6 - 5, -3 + 3], [10 - 10, -5 + 6])} = I$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the coded form of the message "HI".',
        answer: `H = 8 and I = 9, so $E = ${m([3, 1], [5, 2])}${m([8], [9])} = ${m([24 + 9], [40 + 18])} = ${m([33], [58])}$. The coded message is $33, 58$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `A student receives the coded message $E = ${m([36], [65])}$. Decode it and find the two-letter word.\nOR\nShow that $K^{2} - 5K + I = O$, and use this to obtain $K^{-1}$.`,
        answer: `$M = K^{-1}E = ${m([2, -1], [-5, 3])}${m([36], [65])} = ${m([72 - 65], [-180 + 195])} = ${m([7], [15])}$. Since $7$ = G and $15$ = O, the word is "GO". (Check: $K${m([7], [15])} = ${m([36], [65])}$.)\nOR: $K^{2} = ${m([14, 5], [25, 9])}$, so $K^{2} - 5K + I = ${m([14, 5], [25, 9])} - ${m([15, 5], [25, 10])} + ${m([1, 0], [0, 1])} = O$. Then $K(5I - K) = 5K - K^{2} = I$, and likewise $(5I - K)K = I$, so $K^{-1} = 5I - K = ${m([2, -1], [-5, 3])}$.`,
      },
    ],
  },
];
