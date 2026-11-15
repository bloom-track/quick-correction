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

export const CH03_MAT_R3: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Order, types and equality of matrices
  {
    id: 'c12-mat-r3-a01', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For the $3 \\times 3$ matrix $A = [a_{ij}]$ with $a_{ij} = |i - j|$, the sum of all the elements of $A$ is',
    options: ['$6$', '$8$', '$10$', '$12$'],
    answer: `Correct option: B) $8$. $A = ${m([0, 1, 2], [1, 0, 1], [2, 1, 0])}$, and the elements add up to $3 + 2 + 3 = 8$.`,
  },
  {
    id: 'c12-mat-r3-a02', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A square matrix has $36$ elements. The number of its elements that do not lie on the principal diagonal is',
    options: ['$6$', '$25$', '$30$', '$36$'],
    answer: 'Correct option: C) $30$. A square matrix with $36$ elements has order $6 \\times 6$, so its principal diagonal holds $6$ elements and the remaining $36 - 6 = 30$ lie off the diagonal.',
  },
  {
    id: 'c12-mat-r3-a03', chapter: C, topic: T1, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $${m(['2a', 'b + c'], ['a - b', '3c'])} = ${m([6, 5], [1, 9])}$, then $a + b + c$ equals`,
    options: ['$6$', '$8$', '$9$', '$18$'],
    answer: 'Correct option: B) $8$. Equal matrices have equal entries: $2a = 6$ gives $a = 3$, $3c = 9$ gives $c = 3$, and $a - b = 1$ gives $b = 2$. These also satisfy $b + c = 5$. So $a + b + c = 8$.',
  },
  {
    id: 'c12-mat-r3-a04', chapter: C, topic: T1, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: `Assertion (A): The matrices $${m([1, 2, 3])}$ and $${m([1], [2], [3])}$ are not equal.\nReason (R): Two matrices are equal only if they have the same order and their corresponding elements are equal.`,
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). The first matrix is of order $1 \\times 3$ and the second of order $3 \\times 1$. Their orders differ, so by the condition in (R) they cannot be equal, even though they list the same numbers.',
  },
  {
    id: 'c12-mat-r3-a05', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Matrices $A$ and $B$ are such that $AB$ is of order $3 \\times 3$ and $BA$ is of order $5 \\times 5$. The order of $A$ is',
    options: ['$5 \\times 3$', '$3 \\times 5$', '$3 \\times 3$', '$5 \\times 5$'],
    answer: 'Correct option: B) $3 \\times 5$. $AB$ has as many rows as $A$, so $A$ has $3$ rows. $BA$ has as many columns as $A$, so $A$ has $5$ columns. Hence $A$ is $3 \\times 5$ (and $B$ is $5 \\times 3$).',
  },

  // Matrix operations
  {
    id: 'c12-mat-r3-a06', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([2, -1, 0], [1, 3, 4])}$ and $B = ${m([1, 0, 2], [-2, 5, 1])}$, then the sum of all the elements of $3A - B$ is`,
    options: ['$8$', '$14$', '$20$', '$34$'],
    answer: `Correct option: C) $20$. $3A - B = ${m([5, -3, -2], [5, 4, 11])}$, whose elements add up to $5 - 3 - 2 + 5 + 4 + 11 = 20$. ($34$ results from adding $B$ instead of subtracting it.)`,
  },
  {
    id: 'c12-mat-r3-a07', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([1, 2, 0], [0, 1, 3], [4, 0, 1])}$, then the element in the second row and first column of $A^{2}$ is`,
    options: ['$3$', '$4$', '$12$', '$13$'],
    answer: 'Correct option: C) $12$. Take row $2$ of $A$ and column $1$ of $A$: $0(1) + 1(0) + 3(4) = 12$.',
  },
  {
    id: 'c12-mat-r3-a08', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `For $A = ${m([2, 4], [1, 2])}$ and $B = ${m([2, 2], [-1, -1])}$, which statement is true?`,
    options: ['$AB = O$ but $BA \\neq O$', '$AB = O$ and $BA = O$', '$AB \\neq O$ but $BA = O$', '$AB \\neq O$ and $BA \\neq O$'],
    answer: `Correct option: A) $AB = O$ but $BA \\neq O$. $AB = ${m(['4 - 4', '4 - 4'], ['2 - 2', '2 - 2'])} = O$, while $BA = ${m([6, 12], [-3, -6])} \\neq O$. This also shows that a product can be zero with both factors non-zero, and that $AB = O$ does not force $BA = O$.`,
  },
  {
    id: 'c12-mat-r3-a09', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `Let $D = ${m([2, 0, 0], [0, 3, 0], [0, 0, -1])}$ and $A = ${m([1, 2, 3], [4, 5, 6], [7, 8, 9])}$. The element in the second row and third column of $DA - AD$ is`,
    options: ['$-24$', '$0$', '$12$', '$24$'],
    answer: 'Correct option: D) $24$. Multiplying by $D$ on the left scales row $2$ by $3$, so the $(2,3)$ element of $DA$ is $3 \\times 6 = 18$. Multiplying on the right scales column $3$ by $-1$, so the $(2,3)$ element of $AD$ is $6 \\times (-1) = -6$. The difference is $18 - (-6) = 24$.',
  },
  {
    id: 'c12-mat-r3-a10', chapter: C, topic: T2, type: 'mcq', complexity: 'hard', marks: 1,
    text: `If $N = ${m([0, 1, 0], [0, 0, 1], [0, 0, 0])}$, then the sum of all the elements of $(I + N)^{4}$ is`,
    options: ['$11$', '$13$', '$17$', '$21$'],
    answer: `Correct option: C) $17$. $N^{2} = ${m([0, 0, 1], [0, 0, 0], [0, 0, 0])}$ and $N^{3} = O$. Since $I$ and $N$ commute, $(I + N)^{4} = I + 4N + 6N^{2} = ${m([1, 4, 6], [0, 1, 4], [0, 0, 1])}$, whose elements add up to $17$. ($11$ comes from stopping at $I + 4N$.)`,
  },
  {
    id: 'c12-mat-r3-a11', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([1, 0], [0, 2])}$ and $B = ${m([0, 1], [1, 0])}$, then $(A + B)^{2} - (A^{2} + 2AB + B^{2})$ equals`,
    options: ['$O$', `$${m([0, 1], [-1, 0])}$`, `$${m([0, -1], [1, 0])}$`, `$${m([0, 2], [2, 0])}$`],
    answer: `Correct option: B) $${m([0, 1], [-1, 0])}$. In general $(A + B)^{2} = A^{2} + AB + BA + B^{2}$, so the expression equals $BA - AB$. Here $AB = ${m([0, 1], [2, 0])}$ and $BA = ${m([0, 2], [1, 0])}$, giving $BA - AB = ${m([0, 1], [-1, 0])}$. Option C is $AB - BA$.`,
  },

  // Transpose, symmetric and skew-symmetric matrices
  {
    id: 'c12-mat-r3-a12', chapter: C, topic: T3, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A $3 \\times 3$ skew-symmetric matrix $A = [a_{ij}]$ has $a_{12} = 2$, $a_{13} = -3$ and $a_{23} = 5$. Then $a_{21} + a_{31} + a_{32}$ equals',
    options: ['$4$', '$-4$', '$0$', '$-6$'],
    answer: 'Correct option: B) $-4$. For a skew-symmetric matrix $a_{ji} = -a_{ij}$, so $a_{21} = -2$, $a_{31} = 3$ and $a_{32} = -5$. Their sum is $-2 + 3 - 5 = -4$.',
  },
  {
    id: 'c12-mat-r3-a13', chapter: C, topic: T3, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ and $B$ are symmetric matrices of the same order, then $AB - BA$ is',
    options: ['a symmetric matrix', 'the zero matrix', 'a skew-symmetric matrix', 'the identity matrix'],
    answer: "Correct option: C) a skew-symmetric matrix. $(AB - BA)' = (AB)' - (BA)' = B'A' - A'B' = BA - AB = -(AB - BA)$. It need not be the zero matrix, because $AB$ and $BA$ can differ.",
  },
  {
    id: 'c12-mat-r3-a14', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([1, 5], [2, 4])}$, then $(A - A')^{2}$ equals`,
    options: ['$9I$', '$-9I$', '$-3I$', '$O$'],
    answer: `Correct option: B) $-9I$. $A - A' = ${m([0, 3], [-3, 0])}$, and $${m([0, 3], [-3, 0])}^{2} = ${m([-9, 0], [0, -9])} = -9I$. (The square of a non-zero skew-symmetric matrix is not zero here, and its sign is negative.)`,
  },
  {
    id: 'c12-mat-r3-a15', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: "If $A$ is a symmetric matrix and $B$ is a skew-symmetric matrix of the same order, then $(AB)'$ equals",
    options: ['$AB$', '$-AB$', '$BA$', '$-BA$'],
    answer: "Correct option: D) $-BA$. $(AB)' = B'A' = (-B)(A) = -BA$. Option B is wrong because $AB$ and $BA$ are different in general.",
  },
  {
    id: 'c12-mat-r3-a16', chapter: C, topic: T3, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The sum of two skew-symmetric matrices of the same order is a skew-symmetric matrix.\nReason (R): The product of two skew-symmetric matrices of the same order is a skew-symmetric matrix.',
    options: AR_OPTIONS,
    answer: `Correct option: C) (A) is true, but (R) is false. (A) holds because $(A + B)' = A' + B' = -A - B = -(A + B)$. (R) fails: for $A = B = ${m([0, 1], [-1, 0])}$ the product is $AB = -I$, which has non-zero diagonal entries and so is not skew-symmetric.`,
  },

  // Invertible matrices and matrix equations
  {
    id: 'c12-mat-r3-a17', chapter: C, topic: T4, type: 'mcq', complexity: 'easy', marks: 1,
    text: `The inverse of the matrix $${m([2, 3], [1, 4])}$ is`,
    options: [`$\\frac{1}{5}${m([4, -3], [-1, 2])}$`, `$\\frac{1}{5}${m([4, 3], [1, 2])}$`, `$\\frac{1}{5}${m([2, -3], [-1, 4])}$`, `$${m([4, -3], [-1, 2])}$`],
    answer: `Correct option: A) $\\frac{1}{5}${m([4, -3], [-1, 2])}$. Here $ad - bc = 8 - 3 = 5$. Swap the diagonal entries, change the signs of the other two, and divide by $5$. Option D forgets the factor $\\frac{1}{5}$.`,
  },
  {
    id: 'c12-mat-r3-a18', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: `The matrix $${m(['k + 1', 4], [2, 'k - 1'])}$ is NOT invertible for`,
    options: ['$k = \\pm 2$', '$k = 3$ only', '$k = \\pm 3$', '$k = \\pm 9$'],
    answer: 'Correct option: C) $k = \\pm 3$. A $2 \\times 2$ matrix is not invertible when $ad - bc = 0$: $(k + 1)(k - 1) - 8 = k^{2} - 9 = 0$, so $k = 3$ or $k = -3$.',
  },
  {
    id: 'c12-mat-r3-a19', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A square matrix $A$ satisfies $(A - 2I)(A - 3I) = O$. Then $A^{-1}$ equals',
    options: ['$6(5I - A)$', '$\\frac{1}{6}(A - 5I)$', '$\\frac{1}{5}(6I - A)$', '$\\frac{1}{6}(5I - A)$'],
    answer: 'Correct option: D) $\\frac{1}{6}(5I - A)$. Expanding, $A^{2} - 5A + 6I = O$, so $A(5I - A) = 6I$. Dividing by $6$: $A \\cdot \\frac{1}{6}(5I - A) = I$, and the factor on the right commutes with $A$, so $A^{-1} = \\frac{1}{6}(5I - A)$. Option B has the wrong sign.',
  },
  {
    id: 'c12-mat-r3-a20', chapter: C, topic: T4, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $A$ and $B$ are invertible matrices of the same order, then $A + B$ is also invertible.\nReason (R): The matrices $A = I$ and $B = -I$ are both invertible, but $A + B$ is the zero matrix, which has no inverse.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. $I$ is its own inverse and $(-I)(-I) = I$, so both are invertible, but their sum $O$ has no inverse because $OX = O \\neq I$ for every $X$. This counter-example disproves (A).',
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-mat-r3-b01', chapter: C, topic: T1, type: 'short', complexity: 'medium', marks: 2,
    text: 'Construct the $3 \\times 2$ matrix $A = [a_{ij}]$ whose elements are given by $a_{ij} = |2i - 3j|$, and write the order of $A\'$.',
    answer: `$a_{11} = |2 - 3| = 1$, $a_{12} = |2 - 6| = 4$, $a_{21} = |4 - 3| = 1$, $a_{22} = |4 - 6| = 2$, $a_{31} = |6 - 3| = 3$, $a_{32} = |6 - 6| = 0$. So $A = ${m([1, 4], [1, 2], [3, 0])}$. Its transpose $A'$ has the rows and columns interchanged, so $A'$ is of order $2 \\times 3$.`,
    steps: [
      { step: `Computes all six elements and writes $A = ${m([1, 4], [1, 2], [3, 0])}$`, marks: 1 },
      { step: "States that $A'$ is of order $2 \\times 3$", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-b02', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `Find the matrices $X$ and $Y$ if $X + Y = ${m([5, 2], [3, 7])}$ and $X - Y = ${m([1, 0], [-1, 3])}$.`,
    answer: `Adding the two equations, $2X = ${m([6, 2], [2, 10])}$, so $X = ${m([3, 1], [1, 5])}$. Then $Y = (X + Y) - X = ${m([5, 2], [3, 7])} - ${m([3, 1], [1, 5])} = ${m([2, 1], [2, 2])}$. Check: $X - Y = ${m([1, 0], [-1, 3])}$.`,
    steps: [
      { step: `Adds the equations and gets $X = ${m([3, 1], [1, 5])}$`, marks: 1 },
      { step: `Finds $Y = ${m([2, 1], [2, 2])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-b03', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `For $A = ${m([1, 2], [0, 1])}$ and $B = ${m([1, 0], [3, 1])}$, show that $(A + B)(A - B) \\neq A^{2} - B^{2}$.`,
    answer: `$A + B = ${m([2, 2], [3, 2])}$ and $A - B = ${m([0, 2], [-3, 0])}$, so $(A + B)(A - B) = ${m([-6, 4], [-6, 6])}$. Also $A^{2} = ${m([1, 4], [0, 1])}$ and $B^{2} = ${m([1, 0], [6, 1])}$, so $A^{2} - B^{2} = ${m([0, 4], [-6, 0])}$. The two matrices differ, so $(A + B)(A - B) \\neq A^{2} - B^{2}$. (The reason is that $AB \\neq BA$ here.)`,
    steps: [
      { step: `Finds $(A + B)(A - B) = ${m([-6, 4], [-6, 6])}$`, marks: 1 },
      { step: `Finds $A^{2} - B^{2} = ${m([0, 4], [-6, 0])}$ and concludes they are different`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-b04', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 2,
    text: "If $A$ is an invertible symmetric matrix, prove that $A^{-1}$ is also symmetric.",
    answer: "Since $AA^{-1} = I$, taking transposes gives $(A^{-1})'A' = I' = I$. Because $A$ is symmetric, $A' = A$, so $(A^{-1})'A = I$. Post-multiplying by $A^{-1}$ gives $(A^{-1})' = A^{-1}$. Hence $A^{-1}$ is symmetric.",
    steps: [
      { step: "Transposes $AA^{-1} = I$ using $(XY)' = Y'X'$ to get $(A^{-1})'A' = I$", marks: 1 },
      { step: "Uses $A' = A$ and post-multiplies by $A^{-1}$ to get $(A^{-1})' = A^{-1}$", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-b05', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 2,
    text: `If $A^{-1} = ${m([5, 3], [2, 1])}$, find the matrix $A$.`,
    answer: `$A = (A^{-1})^{-1}$. For $${m([5, 3], [2, 1])}$, $ad - bc = 5(1) - 3(2) = -1$, so its inverse is $\\frac{1}{-1}${m([1, -3], [-2, 5])} = ${m([-1, 3], [2, -5])}$. Hence $A = ${m([-1, 3], [2, -5])}$. Check: $${m([5, 3], [2, 1])}${m([-1, 3], [2, -5])} = ${m([1, 0], [0, 1])}$.`,
    steps: [
      { step: 'Uses $A = (A^{-1})^{-1}$ and finds $ad - bc = -1$', marks: 1 },
      { step: `Gets $A = ${m([-1, 3], [2, -5])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-b06', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 2,
    text: `For $A = ${m([2, 3], [1, 2])}$ and $B = ${m([2, -3], [-1, 2])}$, show that $AB = I$. Hence find $(A^{2})^{-1}$.`,
    answer: `$AB = ${m(['4 - 3', '-6 + 6'], ['2 - 2', '-3 + 4'])} = I$, so $B = A^{-1}$. Then $(A^{2})^{-1} = (A^{-1})^{2} = B^{2} = ${m([2, -3], [-1, 2])}${m([2, -3], [-1, 2])} = ${m([7, -12], [-4, 7]) }$. Check: $A^{2} = ${m([7, 12], [4, 7])}$ and $A^{2}B^{2} = ${m([1, 0], [0, 1])}$.`,
    steps: [
      { step: 'Multiplies $AB$ and shows it equals $I$', marks: 1 },
      { step: `Uses $(A^{2})^{-1} = B^{2} = ${m([7, -12], [-4, 7])}$`, marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-mat-r3-c01', chapter: C, topic: T1, type: 'short', complexity: 'medium', marks: 3,
    text: `Find the values of $x$, $y$ and $z$ if $${m(['x + y', 'y + z'], ['z + x', 'xy'])} = ${m([5, 7], [6, 6])}$.`,
    answer: 'Equating corresponding entries: $x + y = 5$, $y + z = 7$, $z + x = 6$ and $xy = 6$. Adding the first three, $2(x + y + z) = 18$, so $x + y + z = 9$. Subtracting each equation in turn: $z = 9 - 5 = 4$, $x = 9 - 7 = 2$, $y = 9 - 6 = 3$. Check the fourth entry: $xy = 2 \\times 3 = 6$. So $x = 2$, $y = 3$, $z = 4$.',
    steps: [
      { step: 'Writes the four equations from equality of matrices', marks: 1 },
      { step: 'Adds the first three to get $x + y + z = 9$ and solves for $x$, $y$, $z$', marks: 1 },
      { step: 'Checks that $xy = 6$ is satisfied', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c02', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 3,
    text: `Let $A = ${m([2, -1], [3, -2])}$. Show that $A^{2} = I$. Hence find $A^{15} + A^{16}$.`,
    answer: `$A^{2} = ${m(['4 - 3', '-2 + 2'], ['6 - 6', '-3 + 4'])} = I$. Then $A^{16} = (A^{2})^{8} = I$, and $A^{15} = (A^{2})^{7}A = IA = A$. So $A^{15} + A^{16} = A + I = ${m([3, -1], [3, -1])}$.`,
    steps: [
      { step: 'Computes $A^{2}$ and shows it is $I$', marks: 1 },
      { step: 'Writes $A^{16} = (A^{2})^{8} = I$ and $A^{15} = (A^{2})^{7}A = A$', marks: 1 },
      { step: `Adds to get $A + I = ${m([3, -1], [3, -1])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c03', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 3,
    text: `The matrix $A = ${m([0, 'a', 'b'], [-2, 0, 'c'], [1, 3, 0])}$ is skew-symmetric. Find $a$, $b$ and $c$, and show that $A^{2}$ is a symmetric matrix.`,
    answer: `For a skew-symmetric matrix $a_{ij} = -a_{ji}$. So $a = a_{12} = -a_{21} = 2$, $b = a_{13} = -a_{31} = -1$ and $c = a_{23} = -a_{32} = -3$. Then $A = ${m([0, 2, -1], [-2, 0, -3], [1, 3, 0])}$ and $A^{2} = ${m([-5, -3, -6], [-3, -13, 2], [-6, 2, -10])}$. The entries $-3, -6, 2$ above the diagonal equal their mirror entries below, so $(A^{2})' = A^{2}$ and $A^{2}$ is symmetric. (In general $(A^{2})' = (A')^{2} = (-A)^{2} = A^{2}$.)`,
    steps: [
      { step: 'Uses $a_{ij} = -a_{ji}$ to get $a = 2$, $b = -1$, $c = -3$', marks: 1 },
      { step: `Finds $A^{2} = ${m([-5, -3, -6], [-3, -13, 2], [-6, 2, -10])}$`, marks: 1 },
      { step: 'Shows $A^{2}$ is symmetric by comparing mirror entries (or using $(A^{2})\' = (A\')^{2}$)', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c04', chapter: C, topic: T3, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $A$ be a symmetric matrix and $B$ a skew-symmetric matrix of the same order, with $AB = BA$. Prove that (i) $AB$ is skew-symmetric, and (ii) $(A + B)(A - B)$ is symmetric.',
    answer: "(i) $(AB)' = B'A' = (-B)(A) = -BA = -AB$, using $AB = BA$. So $AB$ is skew-symmetric. (ii) Since $AB = BA$, $(A + B)(A - B) = A^{2} - AB + BA - B^{2} = A^{2} - B^{2}$. Then $(A^{2} - B^{2})' = (A')^{2} - (B')^{2} = A^{2} - (-B)^{2} = A^{2} - B^{2}$. So $(A + B)(A - B)$ is symmetric.",
    steps: [
      { step: "Proves (i): $(AB)' = B'A' = -BA = -AB$ using $AB = BA$", marks: 1 },
      { step: 'Uses $AB = BA$ to simplify $(A + B)(A - B)$ to $A^{2} - B^{2}$', marks: 1 },
      { step: "Takes the transpose of $A^{2} - B^{2}$ and shows it is unchanged", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c05', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 3,
    text: `Find the matrix $X$ such that $X${m([1, 2], [1, 3])} - 2I = ${m([2, 1], [3, 0])}$.`,
    answer: `Let $M = ${m([1, 2], [1, 3])}$. Then $XM = ${m([2, 1], [3, 0])} + 2I = ${m([4, 1], [3, 2])}$. Since $1(3) - 2(1) = 1 \\neq 0$, $M^{-1} = ${m([3, -2], [-1, 1])}$. Post-multiplying by $M^{-1}$: $X = ${m([4, 1], [3, 2])}${m([3, -2], [-1, 1])} = ${m([11, -7], [7, -4])}$. Check: $${m([11, -7], [7, -4])}${m([1, 2], [1, 3])} = ${m([4, 1], [3, 2])}$.`,
    steps: [
      { step: `Rewrites as $XM = ${m([4, 1], [3, 2])}$ (moving $2I$ across)`, marks: 1 },
      { step: `Finds $M^{-1} = ${m([3, -2], [-1, 1])}$`, marks: 1 },
      { step: `Post-multiplies to get $X = ${m([11, -7], [7, -4])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c06', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 3,
    text: `Let $A = ${m([1, 1], [-1, 0])}$. Show that $A^{2} - A + I = O$. Hence find $A^{-1}$ and $A^{6}$.`,
    answer: `$A^{2} = ${m([0, 1], [-1, -1])}$, so $A^{2} - A + I = ${m([0, 1], [-1, -1])} - ${m([1, 1], [-1, 0])} + ${m([1, 0], [0, 1])} = O$. Then $A - A^{2} = I$, i.e. $A(I - A) = I = (I - A)A$, so $A^{-1} = I - A = ${m([0, -1], [1, 1])}$. Also $A^{2} - A = -I$ gives $A^{3} = A \\cdot A^{2} = A(A - I) = A^{2} - A = -I$, so $A^{6} = (A^{3})^{2} = (-I)^{2} = I$.`,
    steps: [
      { step: 'Computes $A^{2}$ and shows $A^{2} - A + I = O$', marks: 1 },
      { step: `Rearranges to $A^{-1} = I - A = ${m([0, -1], [1, 1])}$`, marks: 1 },
      { step: 'Shows $A^{3} = -I$ and hence $A^{6} = I$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c07', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 3,
    text: `Let $N = ${m([0, 2, 3], [0, 0, 4], [0, 0, 0])}$. Find $N^{2}$ and $N^{3}$. Hence show that $(I - N)(I + N + N^{2}) = I$ and write down $(I - N)^{-1}$.`,
    answer: `$N^{2} = ${m([0, 0, 8], [0, 0, 0], [0, 0, 0])}$ and $N^{3} = N^{2}N = O$. Now $(I - N)(I + N + N^{2}) = I + N + N^{2} - N - N^{2} - N^{3} = I - N^{3} = I$. The factors commute, so $(I - N)^{-1} = I + N + N^{2} = ${m([1, 2, 11], [0, 1, 4], [0, 0, 1])}$.`,
    steps: [
      { step: `Finds $N^{2} = ${m([0, 0, 8], [0, 0, 0], [0, 0, 0])}$ and $N^{3} = O$`, marks: 1 },
      { step: 'Expands $(I - N)(I + N + N^{2}) = I - N^{3} = I$', marks: 1 },
      { step: `Writes $(I - N)^{-1} = I + N + N^{2} = ${m([1, 2, 11], [0, 1, 4], [0, 0, 1])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c08', chapter: C, topic: T1, type: 'short', complexity: 'medium', marks: 3,
    text: 'Construct the $3 \\times 3$ matrix $A = [a_{ij}]$ in which $a_{ij} = 1$ if $i + j$ is even and $a_{ij} = 0$ if $i + j$ is odd. State, with a reason, whether $A$ is symmetric, and find $A^{2}$.',
    answer: `The entries are $1$ where $i + j \\in \\{2, 4, 6\\}$ and $0$ where $i + j \\in \\{3, 5\\}$, so $A = ${m([1, 0, 1], [0, 1, 0], [1, 0, 1])}$. Since $i + j = j + i$, $a_{ij} = a_{ji}$ for all $i, j$; so $A' = A$ and $A$ is symmetric. $A^{2} = ${m([2, 0, 2], [0, 1, 0], [2, 0, 2])}$.`,
    steps: [
      { step: `Constructs $A = ${m([1, 0, 1], [0, 1, 0], [1, 0, 1])}$`, marks: 1 },
      { step: 'States $A$ is symmetric because $a_{ij} = a_{ji}$ (rule depends on $i + j$)', marks: 1 },
      { step: `Computes $A^{2} = ${m([2, 0, 2], [0, 1, 0], [2, 0, 2])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c09', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 3,
    text: `Let $A = ${m([0, 1, -1], [-1, 0, 1], [1, -1, 0])}$. Show that $A$ is skew-symmetric, that $A^{2}$ is symmetric, and that $A^{3} = -3A$.`,
    answer: `$A' = ${m([0, -1, 1], [1, 0, -1], [-1, 1, 0])} = -A$, so $A$ is skew-symmetric. $A^{2} = ${m([-2, 1, 1], [1, -2, 1], [1, 1, -2])}$, which equals its transpose, so $A^{2}$ is symmetric. $A^{3} = A^{2}A = ${m([0, -3, 3], [3, 0, -3], [-3, 3, 0])} = -3${m([0, 1, -1], [-1, 0, 1], [1, -1, 0])} = -3A$.`,
    steps: [
      { step: "Writes $A'$ and shows $A' = -A$", marks: 1 },
      { step: `Finds $A^{2} = ${m([-2, 1, 1], [1, -2, 1], [1, 1, -2])}$ and notes it is symmetric`, marks: 1 },
      { step: 'Computes $A^{3} = A^{2}A$ and shows it equals $-3A$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-c10', chapter: C, topic: T4, type: 'short', complexity: 'hard', marks: 3,
    text: `$A$ and $B$ are invertible matrices of the same order with $A = ${m([1, 1], [0, 1])}$ and $(AB)^{-1} = ${m([2, 1], [3, 2])}$. Find $B$.`,
    answer: `$AB = \\left[(AB)^{-1}\\right]^{-1}$. For $${m([2, 1], [3, 2])}$, $ad - bc = 4 - 3 = 1$, so $AB = ${m([2, -1], [-3, 2])}$. Also $A^{-1} = ${m([1, -1], [0, 1])}$. Pre-multiplying $AB$ by $A^{-1}$: $B = A^{-1}(AB) = ${m([1, -1], [0, 1])}${m([2, -1], [-3, 2])} = ${m([5, -3], [-3, 2])}$. Check: $AB = ${m([1, 1], [0, 1])}${m([5, -3], [-3, 2])} = ${m([2, -1], [-3, 2])}$.`,
    steps: [
      { step: `Inverts the given matrix to get $AB = ${m([2, -1], [-3, 2])}$`, marks: 1 },
      { step: `Finds $A^{-1} = ${m([1, -1], [0, 1])}$`, marks: 1 },
      { step: `Pre-multiplies: $B = A^{-1}(AB) = ${m([5, -3], [-3, 2])}$`, marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-mat-r3-d01', chapter: C, topic: T2, type: 'long', complexity: 'medium', marks: 5,
    text: 'A school canteen sells samosas, sandwiches and juice. The numbers sold on Monday were $60$, $40$ and $50$ respectively; on Tuesday $80$, $30$ and $70$; and on Wednesday $50$, $60$ and $40$. A samosa sells for ₹$15$, a sandwich for ₹$30$ and a juice for ₹$20$. The canteen\'s cost is ₹$9$ per samosa, ₹$18$ per sandwich and ₹$12$ per juice. A samosa has $260$ calories, a sandwich $300$ and a juice $120$. Using matrix multiplication, find (a) the revenue on each day, (b) the cost on each day, the profit on each day and the total profit for the three days, and (c) the total calories of the food sold on each day.',
    answer: `Let $Q = ${m([60, 40, 50], [80, 30, 70], [50, 60, 40])}$ (rows Monday, Tuesday, Wednesday; columns samosa, sandwich, juice). (a) With the price column $S = ${m([15], [30], [20])}$: $QS = ${m(['900 + 1200 + 1000'], ['1200 + 900 + 1400'], ['750 + 1800 + 800'])} = ${m([3100], [3500], [3350])}$, i.e. ₹$3100$, ₹$3500$ and ₹$3350$. (b) With the cost column $K = ${m([9], [18], [12])}$: $QK = ${m(['540 + 720 + 600'], ['720 + 540 + 840'], ['450 + 1080 + 480'])} = ${m([1860], [2100], [2010])}$, i.e. ₹$1860$, ₹$2100$ and ₹$2010$. Profit $= QS - QK = ${m([1240], [1400], [1340])}$, i.e. ₹$1240$, ₹$1400$ and ₹$1340$, so the total profit is $1240 + 1400 + 1340 =$ ₹$3980$. (c) With the calorie column $${m([260], [300], [120])}$: $Q${m([260], [300], [120])} = ${m(['15600 + 12000 + 6000'], ['20800 + 9000 + 8400'], ['13000 + 18000 + 4800'])} = ${m([33600], [38200], [35800])}$ calories on Monday, Tuesday and Wednesday.`,
    steps: [
      { step: 'Sets up $Q$ ($3 \\times 3$) and the price, cost and calorie column matrices', marks: 1 },
      { step: '(a) Finds revenue ₹3100, ₹3500, ₹3350', marks: 1 },
      { step: '(b) Finds cost ₹1860, ₹2100, ₹2010', marks: 1 },
      { step: '(b) Finds profit ₹1240, ₹1400, ₹1340 and the total ₹3980', marks: 1 },
      { step: '(c) Finds calories 33,600, 38,200 and 35,800', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d02', chapter: C, topic: T4, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $A = ${m([2, 0, 1], [0, 1, 0], [1, 0, 2])}$.\n(a) Show that $A^{2} - 4A + 3I = O$.\n(b) Hence find $A^{-1}$ and verify that $AA^{-1} = I$.\n(c) Express $A^{3}$ in the form $pA + qI$ and write it as a matrix.`,
    answer: `(a) $A^{2} = ${m([5, 0, 4], [0, 1, 0], [4, 0, 5])}$, so $A^{2} - 4A + 3I = ${m(['5 - 8 + 3', 0, '4 - 4 + 0'], [0, '1 - 4 + 3', 0], ['4 - 4 + 0', 0, '5 - 8 + 3'])} = O$. (b) From $A^{2} - 4A = -3I$ we get $A(4I - A) = 3I$, and the factor $4I - A$ commutes with $A$, so $A^{-1} = \\frac{1}{3}(4I - A) = \\frac{1}{3}${m([2, 0, -1], [0, 3, 0], [-1, 0, 2])}$. Check: $A${m([2, 0, -1], [0, 3, 0], [-1, 0, 2])} = ${m([3, 0, 0], [0, 3, 0], [0, 0, 3])}$, so $AA^{-1} = \\frac{1}{3}(3I) = I$. (c) $A^{2} = 4A - 3I$, so $A^{3} = A \\cdot A^{2} = 4A^{2} - 3A = 4(4A - 3I) - 3A = 13A - 12I$. So $p = 13$, $q = -12$, and $A^{3} = ${m([14, 0, 13], [0, 1, 0], [13, 0, 14])}$.`,
    steps: [
      { step: `(a) Finds $A^{2} = ${m([5, 0, 4], [0, 1, 0], [4, 0, 5])}$`, marks: 1 },
      { step: '(a) Shows $A^{2} - 4A + 3I = O$', marks: 1 },
      { step: '(b) Rearranges to $A^{-1} = \\frac{1}{3}(4I - A)$ and writes it as a matrix', marks: 1 },
      { step: '(b) Verifies $AA^{-1} = I$', marks: 1 },
      { step: `(c) Gets $A^{3} = 13A - 12I = ${m([14, 0, 13], [0, 1, 0], [13, 0, 14])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d03', chapter: C, topic: T3, type: 'long', complexity: 'medium', marks: 5,
    text: `(a) If $A$ and $B$ are symmetric matrices of the same order, prove that $AB + BA$ is symmetric and $AB - BA$ is skew-symmetric.\n(b) Verify both results for $A = ${m([1, 2], [2, 3])}$ and $B = ${m([0, 1], [1, 2])}$.`,
    answer: `(a) Using $A' = A$, $B' = B$ and $(XY)' = Y'X'$: $(AB + BA)' = B'A' + A'B' = BA + AB = AB + BA$, so $AB + BA$ is symmetric. Also $(AB - BA)' = B'A' - A'B' = BA - AB = -(AB - BA)$, so $AB - BA$ is skew-symmetric. (b) $AB = ${m([2, 5], [3, 8])}$ and $BA = ${m([2, 3], [5, 8])}$. Then $AB + BA = ${m([4, 8], [8, 16])}$, which equals its transpose, so it is symmetric. And $AB - BA = ${m([0, 2], [-2, 0])}$, whose diagonal is zero and whose off-diagonal entries are negatives of each other, so it is skew-symmetric.`,
    steps: [
      { step: "(a) Shows $(AB + BA)' = AB + BA$", marks: 1 },
      { step: "(a) Shows $(AB - BA)' = -(AB - BA)$", marks: 1 },
      { step: `(b) Finds $AB = ${m([2, 5], [3, 8])}$ and $BA = ${m([2, 3], [5, 8])}$`, marks: 1 },
      { step: `(b) Finds $AB + BA = ${m([4, 8], [8, 16])}$ and notes it is symmetric`, marks: 1 },
      { step: `(b) Finds $AB - BA = ${m([0, 2], [-2, 0])}$ and notes it is skew-symmetric`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d04', chapter: C, topic: T4, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $A = ${m([3, -4], [1, -1])}$.\n(a) Show that $(A - I)^{2} = O$.\n(b) Hence show that $A^{2} = 2A - I$, find $A^{-1}$ and verify that $AA^{-1} = I$.\n(c) Use $A^{-1}$ to find the column matrix $X$ for which $AX = ${m([2], [1])}$.`,
    answer: `(a) $A - I = ${m([2, -4], [1, -2])}$ and $(A - I)^{2} = ${m(['4 - 4', '-8 + 8'], ['2 - 2', '-4 + 4'])} = O$. (b) Expanding, $A^{2} - 2A + I = O$, so $A^{2} = 2A - I$. Then $A(2I - A) = 2A - A^{2} = I$, and $2I - A$ commutes with $A$, so $A^{-1} = 2I - A = ${m([-1, 4], [-1, 3])}$. Check: $A A^{-1} = ${m([3, -4], [1, -1])}${m([-1, 4], [-1, 3])} = ${m([1, 0], [0, 1])}$. (c) $X = A^{-1}${m([2], [1])} = ${m([-1, 4], [-1, 3])}${m([2], [1])} = ${m(['-2 + 4'], ['-2 + 3'])} = ${m([2], [1])}$. Check: $A${m([2], [1])} = ${m(['6 - 4'], ['2 - 1'])} = ${m([2], [1])}$.`,
    steps: [
      { step: '(a) Writes $A - I$ and shows its square is $O$', marks: 1 },
      { step: '(b) Expands to $A^{2} = 2A - I$ and deduces $A^{-1} = 2I - A$', marks: 1 },
      { step: `(b) Writes $A^{-1} = ${m([-1, 4], [-1, 3])}$ and verifies $AA^{-1} = I$`, marks: 1 },
      { step: '(c) Writes $X = A^{-1}$ times the given column', marks: 1 },
      { step: `(c) Gets $X = ${m([2], [1])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d05', chapter: C, topic: T3, type: 'long', complexity: 'medium', marks: 5,
    text: '(a) Construct the $3 \\times 3$ matrix $A = [a_{ij}]$ whose elements are given by $a_{ij} = i^{2} - j^{2}$.\n(b) Show that $A$ is skew-symmetric.\n(c) Find $A^{2}$ and show that it is symmetric.',
    answer: `(a) $a_{11} = a_{22} = a_{33} = 0$; $a_{12} = 1 - 4 = -3$, $a_{13} = 1 - 9 = -8$, $a_{21} = 4 - 1 = 3$, $a_{23} = 4 - 9 = -5$, $a_{31} = 9 - 1 = 8$, $a_{32} = 9 - 4 = 5$. So $A = ${m([0, -3, -8], [3, 0, -5], [8, 5, 0])}$. (b) $a_{ji} = j^{2} - i^{2} = -a_{ij}$ for every $i, j$, so $A' = -A$ and $A$ is skew-symmetric. (c) $A^{2} = ${m(['-9 - 64', '0 + 0 - 40', '0 + 15 + 0'], ['0 + 0 - 40', '-9 + 0 - 25', '-24 + 0 + 0'], ['0 + 15 + 0', '-24 + 0 + 0', '-64 - 25 + 0'])} = ${m([-73, -40, 15], [-40, -34, -24], [15, -24, -89])}$. Its entries are the same as those of its transpose, so $A^{2}$ is symmetric. (Indeed $(A^{2})' = (A')^{2} = (-A)^{2} = A^{2}$.)`,
    steps: [
      { step: '(a) Computes the nine elements correctly', marks: 1 },
      { step: `(a) Writes $A = ${m([0, -3, -8], [3, 0, -5], [8, 5, 0])}$`, marks: 1 },
      { step: "(b) Shows $a_{ji} = -a_{ij}$, so $A' = -A$", marks: 1 },
      { step: `(c) Finds $A^{2} = ${m([-73, -40, 15], [-40, -34, -24], [15, -24, -89])}$`, marks: 1 },
      { step: '(c) Notes that $A^{2}$ equals its transpose', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d06', chapter: C, topic: T4, type: 'long', complexity: 'medium', marks: 5,
    text: `Let $A = ${m([1, 2, 3], [0, 1, 4], [0, 0, 1])}$, $B = ${m([1, -2, 5], [0, 1, -4], [0, 0, 1])}$ and $C = ${m([1, 0, 1], [2, 1, 0], [0, 3, 1])}$.\n(a) Show that $AB = I$, and so $B = A^{-1}$.\n(b) Find the matrix $X$ such that $AX = C$.\n(c) Find the matrix $Y$ such that $YA = C$.`,
    answer: `(a) $AB = ${m(['1', '-2 + 2', '5 - 8 + 3'], [0, 1, '-4 + 4'], [0, 0, 1])} = ${m([1, 0, 0], [0, 1, 0], [0, 0, 1])} = I$. For square matrices this means $BA = I$ too, so $B = A^{-1}$. (b) Pre-multiplying $AX = C$ by $A^{-1}$ gives $X = A^{-1}C = BC = ${m([-3, 13, 6], [2, -11, -4], [0, 3, 1])}$. (c) Post-multiplying $YA = C$ by $A^{-1}$ gives $Y = CA^{-1} = CB = ${m([1, -2, 6], [2, -3, 6], [0, 3, -11])}$. The two answers are different because $A^{-1}$ must be placed on the same side of $C$ as $A$ was.`,
    steps: [
      { step: '(a) Multiplies $AB$ and shows it is $I$, concluding $B = A^{-1}$', marks: 1 },
      { step: '(b) Writes $X = A^{-1}C$ (inverse on the left)', marks: 1 },
      { step: `(b) Computes $X = ${m([-3, 13, 6], [2, -11, -4], [0, 3, 1])}$`, marks: 1 },
      { step: '(c) Writes $Y = CA^{-1}$ (inverse on the right)', marks: 1 },
      { step: `(c) Computes $Y = ${m([1, -2, 6], [2, -3, 6], [0, 3, -11])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d07', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `Three villages P, Q and R are joined by one-way roads. From P there is $1$ road to Q and $1$ road to R. From Q there is $1$ road to P and $2$ roads to R. From R there is $1$ road to Q and none to P. No village has a road to itself. Let $A = [a_{ij}]$, where $a_{ij}$ is the number of roads from village $i$ to village $j$ (villages in the order P, Q, R).\n(a) Write the matrix $A$.\n(b) Find $A^{2}$, and say what its $(2, 2)$ entry tells you about routes.\n(c) Find $A + A^{2}$ and use it to state the number of routes from P to R that use at most two roads.`,
    answer: `(a) $A = ${m([0, 1, 1], [1, 0, 2], [0, 1, 0])}$. (b) $A^{2} = ${m(['0 + 1 + 0', '0 + 0 + 1', '0 + 2 + 0'], ['0 + 0 + 0', '1 + 0 + 2', '1 + 0 + 0'], ['1 + 0 + 0', '0 + 0 + 0', '0 + 2 + 0'])} = ${m([1, 1, 2], [0, 3, 1], [1, 0, 2])}$. The $(2, 2)$ entry $3$ is the number of routes from Q back to Q using exactly two roads: Q to P to Q ($1 \\times 1$) and Q to R to Q ($2 \\times 1$). (c) $A + A^{2} = ${m([1, 2, 3], [1, 3, 3], [1, 1, 2])}$. Its $(1, 3)$ entry is $3$, so there are $3$ routes from P to R using one or two roads: $1$ direct road and $2$ routes through Q.`,
    steps: [
      { step: `(a) Writes $A = ${m([0, 1, 1], [1, 0, 2], [0, 1, 0])}$`, marks: 1 },
      { step: `(b) Computes $A^{2} = ${m([1, 1, 2], [0, 3, 1], [1, 0, 2])}$`, marks: 1 },
      { step: '(b) Explains the $(2, 2)$ entry $3$ as two-road routes from Q to Q', marks: 1 },
      { step: `(c) Finds $A + A^{2} = ${m([1, 2, 3], [1, 3, 3], [1, 1, 2])}$`, marks: 1 },
      { step: '(c) Reads the $(1, 3)$ entry to state $3$ routes from P to R', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r3-d08', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `Find all $2 \\times 2$ matrices $A = ${m(['a', 'b'], ['c', 'd'])}$, each of whose entries is $0$ or $1$, that satisfy $A^{2} = A$. How many are there?`,
    answer: `$A^{2} = ${m(['a^{2} + bc', 'b(a + d)'], ['c(a + d)', 'bc + d^{2}'])}$. So $A^{2} = A$ requires $a^{2} + bc = a$, $b(a + d) = b$, $c(a + d) = c$ and $bc + d^{2} = d$. Since $a^{2} = a$ and $d^{2} = d$ for entries $0$ or $1$, the first and last conditions become $bc = 0$. If $b = c = 1$, then $bc = 1 \\neq 0$, which is not allowed. So $(b, c)$ is $(0, 0)$, $(1, 0)$ or $(0, 1)$. Case $b = c = 0$: the other two conditions hold automatically, and $a$, $d$ are free, giving $4$ matrices: $O$, $I$, $${m([1, 0], [0, 0])}$ and $${m([0, 0], [0, 1])}$. Case $b = 1$, $c = 0$: $b(a + d) = b$ needs $a + d = 1$, so $(a, d) = (1, 0)$ or $(0, 1)$, giving $${m([1, 1], [0, 0])}$ and $${m([0, 1], [0, 1])}$. Case $c = 1$, $b = 0$: similarly $a + d = 1$, giving $${m([1, 0], [1, 0])}$ and $${m([0, 0], [1, 1])}$. In all there are $4 + 2 + 2 = 8$ such matrices.`,
    steps: [
      { step: '$A^{2} = A$ gives four entry conditions after computing $A^{2}$', marks: 1 },
      { step: 'Reduces the $(1,1)$ and $(2,2)$ conditions to $bc = 0$ and rejects $b = c = 1$', marks: 1 },
      { step: 'Case $b = c = 0$: lists $4$ matrices', marks: 1 },
      { step: 'Cases $(b, c) = (1, 0)$ and $(0, 1)$: needs $a + d = 1$, lists $2 + 2$ matrices', marks: 1 },
      { step: 'States the total $8$', marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-mat-r3-e01', chapter: C, topic: T2, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A garment company keeps its stock of shirts and trousers in sizes S, M and L as matrices whose rows are (shirts, trousers) and columns are (S, M, L). Store 1 holds $A = ${m([20, 35, 25], [15, 40, 30])}$ and Store 2 holds $B = ${m([30, 25, 15], [10, 20, 40])}$. During a week, Store 1 sells the items recorded in $S = ${m([8, 12, 10], [5, 15, 9])}$.`,
    answer: `$A + B$ is defined and is $2 \\times 3$; the stock left in Store 1 is $${m([12, 23, 15], [10, 25, 21])}$; the company's total stock after a $20\\%$ increase is $${m([60, 72, 48], [30, 72, 84])}$ (OR: Store 2's stock after selling $20\\%$ is $${m([24, 20, 12], [8, 16, 32])}$, $112$ items).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order of $A$, and find the total stock $A + B$ held by the two stores.',
        answer: `$A$ has $2$ rows and $3$ columns, so its order is $2 \\times 3$; $B$ has the same order, so $A + B$ is defined. $A + B = ${m([50, 60, 40], [25, 60, 70])}$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the matrix showing the stock left in Store 1 after the week.',
        answer: `Stock left $= A - S = ${m(['20 - 8', '35 - 12', '25 - 10'], ['15 - 5', '40 - 15', '30 - 9'])} = ${m([12, 23, 15], [10, 25, 21])}$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: 'The company plans to raise its total stock $A + B$ by $20\\%$. Find the matrix of the planned stock, i.e. $1.2(A + B)$.\nOR\nIf Store 2 sells $20\\%$ of its stock $B$, find the matrix of the stock left, i.e. $0.8B$, and the total number of items left in Store 2.',
        answer: `$1.2(A + B) = 1.2${m([50, 60, 40], [25, 60, 70])} = ${m([60, 72, 48], [30, 72, 84])}$.\nOR: $0.8B = 0.8${m([30, 25, 15], [10, 20, 40])} = ${m([24, 20, 12], [8, 16, 32])}$. The total number of items left is $24 + 20 + 12 + 8 + 16 + 32 = 112$.`,
      },
    ],
  },
  {
    id: 'c12-mat-r3-e02', chapter: C, topic: T3, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A photo-editing app stores a $3 \\times 3$ greyscale image as a matrix of brightness values. Reflecting the image in its main diagonal turns the matrix $P$ into its transpose $P'$. Image 1 is $B = ${m([5, 2, 7], [2, 9, 4], [7, 4, 1])}$ and Image 2 is $C = ${m([5, 2, 7], [4, 9, 4], [3, 6, 1])}$.`,
    answer: `$B' = B$, so Image 1 looks the same after reflection; $C + C' = ${m([10, 6, 10], [6, 18, 10], [10, 10, 2])}$; the symmetric version of Image 2 is $${m([5, 3, 5], [3, 9, 5], [5, 5, 1])}$ (OR: $\\frac{1}{2}(C - C') = ${m([0, -1, 2], [1, 0, -1], [-2, 1, 0])}$, which is skew-symmetric).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Show that Image 1 is unchanged by the reflection, and name the type of matrix $B$.',
        answer: `$B' = ${m([5, 2, 7], [2, 9, 4], [7, 4, 1])} = B$, so the image is unchanged. $B$ is a symmetric matrix.`,
      },
      {
        label: '(ii)', marks: 1,
        text: "Find $C'$ and $C + C'$.",
        answer: `$C' = ${m([5, 4, 3], [2, 9, 6], [7, 4, 1])}$, so $C + C' = ${m([10, 6, 10], [6, 18, 10], [10, 10, 2])}$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: "The app makes a symmetric version of Image 2 as $P = \\frac{1}{2}(C + C')$. Find $P$ and show that it is symmetric.\nOR\nFind $Q = \\frac{1}{2}(C - C')$ and show that $Q$ is skew-symmetric and $P + Q = C$.",
        answer: `$P = \\frac{1}{2}${m([10, 6, 10], [6, 18, 10], [10, 10, 2])} = ${m([5, 3, 5], [3, 9, 5], [5, 5, 1])}$. Its $(1,2)$, $(1,3)$ and $(2,3)$ entries equal the $(2,1)$, $(3,1)$ and $(3,2)$ entries, so $P' = P$ and $P$ is symmetric.\nOR: $C - C' = ${m([0, -2, 4], [2, 0, -2], [-4, 2, 0])}$, so $Q = ${m([0, -1, 2], [1, 0, -1], [-2, 1, 0])}$. Its diagonal is zero and $q_{ji} = -q_{ij}$, so $Q' = -Q$ and $Q$ is skew-symmetric. Also $P + Q = ${m([5, 2, 7], [4, 9, 4], [3, 6, 1])} = C$.`,
      },
    ],
  },
  {
    id: 'c12-mat-r3-e03', chapter: C, topic: T4, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A graphic designer moves points on the screen using the shear matrix $T = ${m([1, 2], [0, 1])}$. A point with coordinates $(x, y)$ is written as the column matrix $${m(['x'], ['y'])}$, and after the shear it becomes $T${m(['x'], ['y'])}$. To undo a shear, the designer applies $T^{-1}$.`,
    answer: `$T^{-1} = ${m([1, -2], [0, 1])}$; the point $(3, 4)$ moves to $(11, 4)$; the point that moved to $(7, 2)$ was $(3, 2)$ (OR: $(TS)^{-1} = S^{-1}T^{-1} = ${m(['\\frac{1}{2}', -1], [0, '\\frac{1}{3}'])}$).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $T^{-1}$.',
        answer: `$ad - bc = 1(1) - 2(0) = 1 \\neq 0$, so $T^{-1} = ${m([1, -2], [0, 1])}$. Check: $T T^{-1} = ${m([1, 0], [0, 1])}$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: 'Where does the point $(3, 4)$ move after the shear?',
        answer: `$T${m([3], [4])} = ${m(['3 + 8'], [4])} = ${m([11], [4])}$, so the point moves to $(11, 4)$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: `After the shear a point is at $(7, 2)$. Find where it was before the shear.\nOR\nThe designer also uses the scaling matrix $S = ${m([2, 0], [0, 3])}$ and applies $S$ first and then $T$, so the combined matrix is $TS$. Find $(TS)^{-1}$.`,
        answer: `The original point is $T^{-1}${m([7], [2])} = ${m([1, -2], [0, 1])}${m([7], [2])} = ${m(['7 - 4'], [2])} = ${m([3], [2])}$, so it was at $(3, 2)$. Check: $T${m([3], [2])} = ${m([7], [2])}$.\nOR: $TS = ${m([1, 2], [0, 1])}${m([2, 0], [0, 3])} = ${m([2, 6], [0, 3])}$. $(TS)^{-1} = S^{-1}T^{-1} = ${m(['\\frac{1}{2}', 0], [0, '\\frac{1}{3}'])}${m([1, -2], [0, 1])} = ${m(['\\frac{1}{2}', -1], [0, '\\frac{1}{3}'])}$. Check: $${m([2, 6], [0, 3])}${m(['\\frac{1}{2}', -1], [0, '\\frac{1}{3}'])} = ${m([1, 0], [0, 1])}$.`,
      },
    ],
  },
  {
    id: 'c12-mat-r3-e04', chapter: C, topic: T1, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `Two teachers separately recorded the marks of three students (Asha, Bilal, Chitra) in two tests as $2 \\times 3$ matrices, with rows for Test 1 and Test 2 and columns for the students in that order. The first teacher's record is $M = ${m(['x + 2', 15, '2y'], [18, 'z - 3', 12])}$ and the second teacher's record is $N = ${m([11, 15, 14], [18, 17, 12])}$. The two records agree completely.`,
    answer: `$M$ has order $2 \\times 3$ with $6$ elements; Bilal scored $17$ in Test 2; $x = 9$, $y = 7$, $z = 20$ and the total marks are $87$ (OR: $k = 5$ and Chitra's new Test 1 mark is $19$).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order of $M$ and the number of its elements.',
        answer: '$M$ has $2$ rows and $3$ columns, so its order is $2 \\times 3$ and it has $6$ elements.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'What are Bilal\'s marks in Test 2?',
        answer: 'Bilal is column $2$ and Test 2 is row $2$. The element in row $2$, column $2$ of the (agreed) record is $17$, so Bilal scored $17$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Find $x$, $y$, $z$ and the total of all the marks in the record.\nOR\nThe school adds the same bonus $k$ to every mark in the record, so that the total of all marks becomes $117$. Find $k$ and Chitra\'s new mark in Test 1.',
        answer: `Since $M = N$, $x + 2 = 11$ gives $x = 9$, $2y = 14$ gives $y = 7$ and $z - 3 = 17$ gives $z = 20$ (the other entries $15$, $18$, $12$ already match). The total of all marks is $11 + 15 + 14 + 18 + 17 + 12 = 87$.\nOR: The total before the bonus is $87$. Six marks each gain $k$, so $87 + 6k = 117$, giving $k = 5$. Chitra's Test 1 mark was $14$, so her new mark is $14 + 5 = 19$.`,
      },
    ],
  },
];
