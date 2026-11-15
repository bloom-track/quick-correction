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

type Key = 'A' | 'B' | 'C' | 'D';
const KEYS: Key[] = ['A', 'B', 'C', 'D'];
type Cx = 'easy' | 'medium' | 'hard';

/** MCQ whose correct option sits at position `key`; wrong options fill the other slots in order. */
const mcq = (
  id: string, topic: string, complexity: Cx, text: string,
  key: Key, correct: string, wrong: [string, string, string], why: string,
): Class12Question => {
  const options: string[] = [];
  let w = 0;
  KEYS.forEach((k) => options.push(k === key ? correct : wrong[w++]));
  return {
    id, chapter: C, topic, type: 'mcq', complexity, marks: 1, text, options,
    answer: `Correct option: ${key}) ${correct}. ${why}`,
  };
};

const ar = (
  id: string, topic: string, complexity: Cx, text: string, key: Key, why: string,
): Class12Question => ({
  id, chapter: C, topic, type: 'assertion_reason', complexity, marks: 1, text,
  options: AR_OPTIONS,
  answer: `Correct option: ${key}) ${AR_OPTIONS[KEYS.indexOf(key)].replace(/\.$/, '')}. ${why}`,
});

export const CH03_MAT_R4: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Order, types and equality of matrices
  mcq('c12-mat-r4-a01', T1, 'easy',
    'For the $2 \\times 3$ matrix $A = [a_{ij}]$ with $a_{ij} = \\max(i, j)$, the sum of all the elements of $A$ is',
    'B', '$13$', ['$8$', '$21$', '$11$'],
    'The first row is $1, 2, 3$ and the second row is $2, 2, 3$, so the sum is $6 + 7 = 13$. Using $\\min(i, j)$ would give $8$, and $i + j$ would give $21$.'),
  mcq('c12-mat-r4-a02', T1, 'easy',
    `If $${m(['2x - y', 3], [5, 'x + 2y'])} = ${m([4, 3], [5, 7])}$, then the value of $3x + y$ is`,
    'C', '$11$', ['$7$', '$9$', '$13$'],
    'Equal matrices have equal entries, so $2x - y = 4$ and $x + 2y = 7$. Solving gives $x = 3$ and $y = 2$, hence $3x + y = 11$.'),
  mcq('c12-mat-r4-a03', T1, 'medium',
    'How many upper triangular matrices of order $2$ can be formed if every entry is $0$, $1$ or $2$?',
    'A', '$27$', ['$81$', '$9$', '$6$'],
    'In an upper triangular $2 \\times 2$ matrix the entry below the diagonal is $0$, and the other three entries can each be chosen in $3$ ways, giving $3^{3} = 27$ matrices. ($81$ would count all four entries as free.)'),
  ar('c12-mat-r4-a04', T1, 'easy',
    'Assertion (A): A square matrix whose diagonal entries are all equal to $1$ is an identity matrix.\nReason (R): An identity matrix has every diagonal entry equal to $1$ and every other entry equal to $0$.',
    'D',
    'The reason is the definition of an identity matrix, so it is true. But the assertion is false: $\\begin{bmatrix} 1 & 5 \\\\ 0 & 1 \\end{bmatrix}$ has diagonal entries $1$ and is not an identity matrix, since a non-diagonal entry is not $0$.'),

  // Matrix operations
  mcq('c12-mat-r4-a05', T2, 'medium',
    'Let $A = [a_{ij}]$ be the $3 \\times 3$ matrix with $a_{ij} = i^{2}$ when $i = j$ and $a_{ij} = 0$ when $i \\neq j$. The sum of all the elements of $A^{2}$ is',
    'D', '$98$', ['$14$', '$196$', '$36$'],
    '$A$ is the diagonal matrix with diagonal entries $1, 4, 9$, so $A^{2}$ is diagonal with entries $1, 16, 81$, whose sum is $98$. ($14$ is the sum of the entries of $A$ itself.)'),
  mcq('c12-mat-r4-a06', T2, 'medium',
    `If $A = ${m([0, 1], [-1, 0])}$, then $A^{2026}$ equals`,
    'A', '$-I$', ['$I$', '$A$', '$-A$'],
    '$A^{2} = -I$, so $A^{4} = I$. Since $2026 = 4 \\times 506 + 2$, $A^{2026} = (A^{4})^{506}A^{2} = A^{2} = -I$.'),
  mcq('c12-mat-r4-a07', T2, 'easy',
    'Matrices $A$, $B$, $C$ have orders $3 \\times 2$, $2 \\times 4$ and $3 \\times 4$ respectively. The order of the matrix $ABC\'$ is',
    'C', '$3 \\times 3$', ['$3 \\times 4$', '$4 \\times 4$', 'not defined'],
    '$AB$ has order $3 \\times 4$ and $C\'$ has order $4 \\times 3$, so $ABC\'$ is defined and has order $3 \\times 3$.'),
  mcq('c12-mat-r4-a08', T2, 'easy',
    `If $A = ${m([1, 2], [3, 4])}$, then $A^{2} - 5A$ equals`,
    'B', '$2I$', ['$O$', '$-2I$', '$5I$'],
    `$A^{2} = ${m([7, 10], [15, 22])}$ and $5A = ${m([5, 10], [15, 20])}$, so $A^{2} - 5A = ${m([2, 0], [0, 2])} = 2I$.`),
  mcq('c12-mat-r4-a09', T2, 'medium',
    `If $A = ${m([1, 'k'], [0, 1])}$ and $A^{3} = ${m([1, 18], [0, 1])}$, then $k$ equals`,
    'D', '$6$', ['$3$', '$9$', '$18$'],
    `Multiplying out, $A^{2} = ${m([1, '2k'], [0, 1])}$ and $A^{3} = ${m([1, '3k'], [0, 1])}$, so $3k = 18$ and $k = 6$.`),
  mcq('c12-mat-r4-a10', T2, 'hard',
    'Square matrices $A$ and $B$ of the same order satisfy $AB = A$ and $BA = B$. Then $A^{2} + B^{2}$ equals',
    'A', '$A + B$', ['$AB$', '$I$', '$A - B$'],
    '$A^{2} = (AB)A = A(BA) = AB = A$, and $B^{2} = (BA)B = B(AB) = BA = B$. So $A^{2} + B^{2} = A + B$.'),
  ar('c12-mat-r4-a11', T2, 'medium',
    `Assertion (A): For $A = ${m([0, 1], [0, 0])}$ we have $A^{2} = O$ even though $A \\neq O$.\nReason (R): The product of two non-zero matrices can be a zero matrix.`,
    'A',
    `Squaring gives $A^{2} = ${m([0, 0], [0, 0])}$ while $A \\neq O$, so (A) is true. (R) is true, and (A) is exactly such an example (the two factors are both $A$), so (R) explains (A).`),

  // Transpose, symmetric and skew-symmetric matrices
  mcq('c12-mat-r4-a12', T3, 'medium',
    'A symmetric matrix of order $4$ is completely fixed once some of its entries are chosen freely, the others being forced by symmetry. The least number of entries that can be chosen freely is',
    'B', '$10$', ['$16$', '$6$', '$12$'],
    'The $4$ diagonal entries and the $6$ entries above the diagonal ($\\frac{4 \\cdot 3}{2}$) are free; each entry below the diagonal copies one above. That is $4 + 6 = 10$.'),
  mcq('c12-mat-r4-a13', T3, 'medium',
    'If $A$ and $B$ are symmetric matrices of the same order, which of the following is always symmetric?',
    'C', '$ABA$', ['$AB$', '$BA$', '$AB - BA$'],
    "$(ABA)' = A'B'A' = ABA$, so $ABA$ is always symmetric. $AB$ and $BA$ are symmetric only when $AB = BA$, and $AB - BA$ is always skew-symmetric."),
  mcq('c12-mat-r4-a14', T3, 'medium',
    'If $A$ is a skew-symmetric matrix, then $A^{101}$ is',
    'B', 'skew-symmetric', ['symmetric', 'the zero matrix', 'an identity matrix'],
    "$(A^{101})' = (A')^{101} = (-A)^{101} = -A^{101}$, because the power $101$ is odd. So $A^{101}$ is skew-symmetric."),
  mcq('c12-mat-r4-a15', T3, 'medium',
    `For $A = ${m([2, -1], [1, 3])}$, the sum of the diagonal entries of $AA'$ is`,
    'D', '$15$', ['$5$', '$11$', '$13$'],
    `$AA' = ${m([5, -1], [-1, 10])}$, whose diagonal entries add to $15$. (This equals $2^{2} + (-1)^{2} + 1^{2} + 3^{2}$.)`),
  ar('c12-mat-r4-a16', T3, 'medium',
    'Assertion (A): If $A$ is a skew-symmetric matrix and $k$ is any real number, then $kA$ is a skew-symmetric matrix.\nReason (R): If $A$ is a skew-symmetric matrix, then $A + I$ is also a skew-symmetric matrix.',
    'C',
    "$(kA)' = kA' = -kA$, so (A) is true. For (R), $(A + I)' = A' + I = -A + I$, which is not $-(A + I)$; so (R) is false."),

  // Invertible matrices and matrix equations
  mcq('c12-mat-r4-a17', T4, 'easy',
    `The inverse of the matrix $${m([4, 6], [1, 2])}$ is`,
    'A', `$${m([1, -3], ['-\\frac{1}{2}', 2])}$`,
    [`$${m([2, -6], [-1, 4])}$`, `$${m([2, -3], ['-\\frac{1}{2}', 1])}$`, `$${m([1, 3], ['\\frac{1}{2}', 2])}$`],
    `The determinant is $8 - 6 = 2$. Swap the diagonal entries, change the signs of the others and divide by $2$ to get the stated matrix. The first wrong option forgets to divide by $2$; the others forget the swap or the sign change.`),
  mcq('c12-mat-r4-a18', T4, 'medium',
    'If a square matrix $A$ satisfies $A^{3} + 2A = I$, then $A^{-1}$ equals',
    'C', '$A^{2} + 2I$', ['$A^{2} - 2I$', '$I - 2A$', '$A^{3} + 2I$'],
    'Write $A^{3} + 2A = A(A^{2} + 2I) = I$. So $A^{2} + 2I$ is the inverse of $A$.'),
  mcq('c12-mat-r4-a19', T4, 'medium',
    `If $A$ is invertible and $A^{-1} = ${m([2, 1], [3, 2])}$, then $(3A')^{-1}$ equals`,
    'B', `$${m(['\\frac{2}{3}', 1], ['\\frac{1}{3}', '\\frac{2}{3}'])}$`,
    [`$${m([6, 9], [3, 6])}$`, `$${m(['\\frac{2}{3}', '\\frac{1}{3}'], [1, '\\frac{2}{3}'])}$`, `$${m([2, 3], [1, 2])}$`],
    `$(3A')^{-1} = \\frac{1}{3}(A')^{-1} = \\frac{1}{3}(A^{-1})'$, and $(A^{-1})' = ${m([2, 3], [1, 2])}$. Dividing by $3$ gives the stated matrix. The second wrong option forgets to transpose; the third forgets the factor $\\frac{1}{3}$.`),
  mcq('c12-mat-r4-a20', T4, 'medium',
    `If $A = ${m([2, 1], [1, 1])}$, $B = ${m([1, 0], [1, 1])}$ and $AX = B$, then $X$ equals`,
    'D', `$${m([0, -1], [1, 2])}$`,
    [`$${m([1, -1], [0, 1])}$`, `$${m([3, 1], [2, 1])}$`, `$${m([2, 1], [-1, 0])}$`],
    `$|A| = 1$ and $A^{-1} = ${m([1, -1], [-1, 2])}$, so $X = A^{-1}B = ${m([0, -1], [1, 2])}$. The first wrong option is $BA^{-1}$ (wrong side), the second is $AB$ and the third is $B^{-1}A$.`),

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-mat-r4-b01', chapter: C, topic: T1, type: 'short', complexity: 'medium', marks: 2,
    text: `Find $a$, $b$, $c$ and $d$ if $${m(['2a + b', 'a - b'], ['c + 3d', 'c - d'])} = ${m([7, 2], [11, -1])}$.`,
    answer: 'Equal matrices have equal corresponding entries. From $2a + b = 7$ and $a - b = 2$, adding gives $3a = 9$, so $a = 3$ and $b = 1$. From $c + 3d = 11$ and $c - d = -1$, subtracting gives $4d = 12$, so $d = 3$ and $c = 2$. Hence $a = 3$, $b = 1$, $c = 2$, $d = 3$.',
    steps: [
      { step: 'Equates corresponding entries to get four equations and solves the pair in $a, b$ correctly ($a = 3$, $b = 1$)', marks: 1 },
      { step: 'Solves the pair in $c, d$ correctly ($c = 2$, $d = 3$)', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-b02', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `Find $x$ and $y$ if $${m([2, 'x'], ['y', 3])}${m([1], [2])} = ${m([8], [5])}$.`,
    answer: `The product is $${m(['2 + 2x'], ['y + 6'])}$. Equating with $${m([8], [5])}$ gives $2 + 2x = 8$, so $x = 3$, and $y + 6 = 5$, so $y = -1$.`,
    steps: [
      { step: `Multiplies the $2 \\times 2$ matrix by the $2 \\times 1$ matrix correctly to get $${m(['2 + 2x'], ['y + 6'])}$`, marks: 1 },
      { step: 'Equates entries and finds $x = 3$ and $y = -1$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-b03', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 2,
    text: "If $A$ is any square matrix, prove that $A^{2} + (A')^{2}$ is a symmetric matrix.",
    answer: "Let $S = A^{2} + (A')^{2}$. Using $(P + Q)' = P' + Q'$ and $(P^{2})' = (P')^{2}$, we get $S' = (A^{2})' + ((A')^{2})' = (A')^{2} + (A'')^{2} = (A')^{2} + A^{2} = S$. Since $S' = S$, the matrix $S$ is symmetric.",
    steps: [
      { step: "Takes the transpose of the sum and of each square using $(P^{2})' = (P')^{2}$ and $(A')' = A$", marks: 1 },
      { step: "Obtains $S' = (A')^{2} + A^{2} = S$ and concludes $S$ is symmetric", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-b04', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 2,
    text: `Find the inverse of $A = ${m([2, 5], [1, 3])}$ and use it to solve the equations $2x + 5y = 11$ and $x + 3y = 6$.`,
    answer: `$|A| = 6 - 5 = 1$, so $A^{-1} = ${m([3, -5], [-1, 2])}$. The equations are $A${m(['x'], ['y'])} = ${m([11], [6])}$, so $${m(['x'], ['y'])} = A^{-1}${m([11], [6])} = ${m(['33 - 30'], ['-11 + 12'])} = ${m([3], [1])}$. Hence $x = 3$ and $y = 1$.`,
    steps: [
      { step: `Finds the determinant $1$ and $A^{-1} = ${m([3, -5], [-1, 2])}$`, marks: 1 },
      { step: 'Writes the system as $AX = B$, computes $X = A^{-1}B$ and states $x = 3$, $y = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-b05', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $A$ is a square matrix with $A^{2} = A$, show that $I + A$ is invertible and that $(I + A)^{-1} = I - \\frac{1}{2}A$.',
    answer: '$(I + A)\\left(I - \\frac{1}{2}A\\right) = I - \\frac{1}{2}A + A - \\frac{1}{2}A^{2}$. Using $A^{2} = A$, this equals $I - \\frac{1}{2}A + A - \\frac{1}{2}A = I$. Also $\\left(I - \\frac{1}{2}A\\right)(I + A) = I$ in the same way, so $I + A$ is invertible and $(I + A)^{-1} = I - \\frac{1}{2}A$.',
    steps: [
      { step: 'Multiplies $(I + A)$ by $I - \\frac{1}{2}A$ and expands correctly', marks: 1 },
      { step: 'Uses $A^{2} = A$ to get $I$ and concludes the inverse', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-b06', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `Let $A = ${m([1], [2], [3])}$ and $B = ${m([2, -1, 4])}$. Find $AB$ and $BA$, and state the order of each.`,
    answer: `$A$ is $3 \\times 1$ and $B$ is $1 \\times 3$, so $AB$ is $3 \\times 3$: $AB = ${m([2, -1, 4], [4, -2, 8], [6, -3, 12])}$. $BA$ is $1 \\times 1$: $BA = [\\,2(1) + (-1)(2) + 4(3)\\,] = [\\,12\\,]$.`,
    steps: [
      { step: `Finds $AB$ of order $3 \\times 3$ correctly: $${m([2, -1, 4], [4, -2, 8], [6, -3, 12])}$`, marks: 1 },
      { step: 'Finds $BA = [12]$ of order $1 \\times 1$', marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-mat-r4-c01', chapter: C, topic: T1, type: 'short', complexity: 'medium', marks: 3,
    text: `Find $x$, $y$ and $z$ if $${m(['x + y + z'], ['x + z'], ['y + z'])} = ${m([9], [5], [7])}$.`,
    answer: 'Equating entries: $x + y + z = 9$, $x + z = 5$ and $y + z = 7$. Subtracting the second from the first gives $y = 4$. Then $y + z = 7$ gives $z = 3$, and $x + z = 5$ gives $x = 2$. Check: $2 + 4 + 3 = 9$. So $x = 2$, $y = 4$, $z = 3$.',
    steps: [
      { step: 'Writes the three equations from equal corresponding entries', marks: 1 },
      { step: 'Finds $y = 4$ by subtracting $x + z = 5$ from $x + y + z = 9$', marks: 1 },
      { step: 'Finds $z = 3$ and $x = 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c02', chapter: C, topic: T2, type: 'short', complexity: 'hard', marks: 3,
    text: `Find all real numbers $a$, $b$, $c$ for which $${m(['a', 'b'], [0, 'c'])}^{2} = ${m([4, 10], [0, 9])}$.`,
    answer: `$${m(['a', 'b'], [0, 'c'])}^{2} = ${m(['a^{2}', 'b(a + c)'], [0, 'c^{2}'])}$. So $a^{2} = 4$, $c^{2} = 9$ and $b(a + c) = 10$. Thus $a = \\pm 2$ and $c = \\pm 3$. If $a = 2, c = 3$: $5b = 10$, $b = 2$. If $a = -2, c = -3$: $-5b = 10$, $b = -2$. If $a = 2, c = -3$: $-b = 10$, $b = -10$. If $a = -2, c = 3$: $b = 10$. The four solutions are $(a, b, c) = (2, 2, 3), (-2, -2, -3), (2, -10, -3), (-2, 10, 3)$.`,
    steps: [
      { step: `Squares the matrix correctly to get $${m(['a^{2}', 'b(a + c)'], [0, 'c^{2}'])}$ and equates entries`, marks: 1 },
      { step: 'Finds $a = \\pm 2$, $c = \\pm 3$', marks: 1 },
      { step: 'Finds $b$ for each of the four sign combinations and lists all four solutions', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c03', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 3,
    text: `For a real number $\\alpha$, let $R(\\alpha) = ${m(['\\cos \\alpha', '-\\sin \\alpha'], ['\\sin \\alpha', '\\cos \\alpha'])}$. Show that $R(\\alpha)R(\\beta) = R(\\alpha + \\beta)$. Hence find $R(\\theta)^{2}$ in terms of $R(2\\theta)$.`,
    answer: `$R(\\alpha)R(\\beta) = ${m(['\\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta', '-\\cos \\alpha \\sin \\beta - \\sin \\alpha \\cos \\beta'], ['\\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta', '-\\sin \\alpha \\sin \\beta + \\cos \\alpha \\cos \\beta'])}$. By the addition formulas this is $${m(['\\cos(\\alpha + \\beta)', '-\\sin(\\alpha + \\beta)'], ['\\sin(\\alpha + \\beta)', '\\cos(\\alpha + \\beta)'])} = R(\\alpha + \\beta)$. Taking $\\alpha = \\beta = \\theta$ gives $R(\\theta)^{2} = R(2\\theta)$.`,
    steps: [
      { step: 'Multiplies the two matrices and writes all four entries correctly', marks: 1 },
      { step: 'Uses $\\cos(\\alpha + \\beta)$ and $\\sin(\\alpha + \\beta)$ formulas to show the product is $R(\\alpha + \\beta)$', marks: 1 },
      { step: 'Puts $\\alpha = \\beta = \\theta$ to get $R(\\theta)^{2} = R(2\\theta)$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c04', chapter: C, topic: T3, type: 'short', complexity: 'hard', marks: 3,
    text: "Prove that a square matrix can be written as the sum of a symmetric matrix and a skew-symmetric matrix in only one way. (Suppose $A = P + Q = P_1 + Q_1$, where $P, P_1$ are symmetric and $Q, Q_1$ are skew-symmetric, and show that $P = P_1$ and $Q = Q_1$.)",
    answer: "From $P + Q = P_1 + Q_1$ we get $P - P_1 = Q_1 - Q$. The left side is symmetric (difference of symmetric matrices) and the right side is skew-symmetric. Let $D = P - P_1 = Q_1 - Q$. Then $D' = D$ and $D' = -D$, so $D = -D$, giving $2D = O$ and $D = O$. Hence $P = P_1$ and $Q = Q_1$, so the decomposition is unique.",
    steps: [
      { step: 'Rearranges to $P - P_1 = Q_1 - Q$ and notes the left side is symmetric and the right side is skew-symmetric', marks: 1 },
      { step: "Writes $D' = D$ and $D' = -D$ for the common matrix $D$", marks: 1 },
      { step: 'Deduces $D = O$, hence $P = P_1$ and $Q = Q_1$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c05', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 3,
    text: `Let $A = ${m([1, -1], [2, 0], [3, 1])}$. Find $A'A$ and $AA'$, write the order of each, and show that both are symmetric matrices.`,
    answer: `$A'= ${m([1, 2, 3], [-1, 0, 1])}$. $A'A$ has order $2 \\times 2$ and $A'A = ${m([14, 2], [2, 2])}$. $AA'$ has order $3 \\times 3$ and $AA' = ${m([2, 2, 2], [2, 4, 6], [2, 6, 10])}$. Both equal their own transposes (each is mirrored about the main diagonal), so both are symmetric. In general $(A'A)' = A'A'' = A'A$ and $(AA')' = AA'$.`,
    steps: [
      { step: "Writes $A'$ and finds $A'A = \\begin{bmatrix} 14 & 2 \\\\ 2 & 2 \\end{bmatrix}$ of order $2 \\times 2$", marks: 1 },
      { step: "Finds $AA'$ of order $3 \\times 3$ correctly", marks: 1 },
      { step: 'Shows both are symmetric (entries mirror about the diagonal, or by $(A\'A)\' = A\'A$)', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c06', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 3,
    text: `If $(2A')^{-1} = ${m([1, 3], [2, 7])}$, find the matrix $A$.`,
    answer: `Take the inverse of both sides: $2A' = ${m([1, 3], [2, 7])}^{-1}$. The determinant of $${m([1, 3], [2, 7])}$ is $7 - 6 = 1$, so its inverse is $${m([7, -3], [-2, 1])}$. Thus $2A' = ${m([7, -3], [-2, 1])}$ and $A' = ${m(['\\frac{7}{2}', '-\\frac{3}{2}'], [-1, '\\frac{1}{2}'])}$. Taking the transpose, $A = ${m(['\\frac{7}{2}', -1], ['-\\frac{3}{2}', '\\frac{1}{2}'])}$.`,
    steps: [
      { step: "Uses $(P^{-1})^{-1} = P$ to get $2A' = \\begin{bmatrix} 1 & 3 \\\\ 2 & 7 \\end{bmatrix}^{-1}$ and finds this inverse correctly", marks: 1 },
      { step: "Divides by $2$ to get $A'$", marks: 1 },
      { step: 'Transposes to get $A$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c07', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 3,
    text: `Let $A = ${m([0, 2, 0], [3, 0, 0], [0, 0, 1])}$. Find $A^{2}$, and hence find $A^{-1}$.`,
    answer: `$A^{2} = ${m([6, 0, 0], [0, 6, 0], [0, 0, 1])}$. Since $A \\cdot A = A^{2}$ is a diagonal matrix with non-zero diagonal entries, its inverse is $(A^{2})^{-1} = ${m(['\\frac{1}{6}', 0, 0], [0, '\\frac{1}{6}', 0], [0, 0, 1])}$. From $A \\cdot A = A^{2}$ we get $A \\cdot [A(A^{2})^{-1}] = I$, so $A^{-1} = A(A^{2})^{-1} = ${m([0, '\\frac{1}{3}', 0], ['\\frac{1}{2}', 0, 0], [0, 0, 1])}$. Check: the first row of $AA^{-1}$ is $[0 \\cdot 0 + 2 \\cdot \\frac{1}{2},\\ 0,\\ 0] = [1, 0, 0]$, and the other rows work the same way.`,
    steps: [
      { step: 'Finds $A^{2}$ correctly as the diagonal matrix with entries $6, 6, 1$', marks: 1 },
      { step: 'Shows $A^{-1} = A(A^{2})^{-1}$ and finds $(A^{2})^{-1}$', marks: 1 },
      { step: `Multiplies to get $A^{-1} = ${m([0, '\\frac{1}{3}', 0], ['\\frac{1}{2}', 0, 0], [0, 0, 1])}$ and checks`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c08', chapter: C, topic: T2, type: 'short', complexity: 'hard', marks: 3,
    text: `Let $A = ${m([1, 2], [2, 4])}$. Find all $2 \\times 2$ matrices $B$ for which $AB = O$. Give two non-zero examples.`,
    answer: `Let $B = ${m(['p', 'q'], ['r', 's'])}$. Then $AB = ${m(['p + 2r', 'q + 2s'], ['2p + 4r', '2q + 4s'])}$. The second row is twice the first, so $AB = O$ exactly when $p + 2r = 0$ and $q + 2s = 0$, i.e. $p = -2r$ and $q = -2s$. So $B = ${m(['-2r', '-2s'], ['r', 's'])}$ for any real $r, s$. Examples: $r = 1, s = 0$ gives $${m([-2, 0], [1, 0])}$; $r = 0, s = 1$ gives $${m([0, -2], [0, 1])}$. Both are non-zero although $AB = O$.`,
    steps: [
      { step: `Multiplies out $AB = ${m(['p + 2r', 'q + 2s'], ['2p + 4r', '2q + 4s'])}$`, marks: 1 },
      { step: 'Sets entries to zero and obtains $p = -2r$, $q = -2s$ (the two rows give the same equations)', marks: 1 },
      { step: 'States the general $B$ with two free numbers and gives two non-zero examples', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c09', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 3,
    text: `The matrix $A = ${m([3, '2x - 1', 'y'], ['x + 2', 1, '2z'], [4, 6, 2])}$ is symmetric. Find $x$, $y$ and $z$, and show that $A^{2}$ is also symmetric.`,
    answer: `For a symmetric matrix $a_{ij} = a_{ji}$. So $2x - 1 = x + 2$ gives $x = 3$; $y = 4$; and $2z = 6$ gives $z = 3$. Then $A = ${m([3, 5, 4], [5, 1, 6], [4, 6, 2])}$ and $A^{2} = ${m([50, 44, 50], [44, 62, 38], [50, 38, 56])}$. This is unchanged when rows and columns are swapped ($a_{12} = a_{21} = 44$, $a_{13} = a_{31} = 50$, $a_{23} = a_{32} = 38$), so $A^{2}$ is symmetric.`,
    steps: [
      { step: 'Equates mirror entries to find $x = 3$, $y = 4$, $z = 3$', marks: 1 },
      { step: 'Computes $A^{2}$ correctly', marks: 1 },
      { step: "Shows $(A^{2})' = A^{2}$ by comparing mirror entries", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-c10', chapter: C, topic: T4, type: 'short', complexity: 'hard', marks: 3,
    text: 'The square matrices $A$ and $B$ of the same order satisfy $AB = A + B$. Prove that $AB = BA$.',
    answer: 'From $AB = A + B$ we get $AB - A - B + I = I$, i.e. $(A - I)(B - I) = I$. So $B - I$ is the inverse of $A - I$, and an inverse works from both sides: $(B - I)(A - I) = I$. Expanding, $BA - B - A + I = I$, so $BA = A + B$. Therefore $BA = A + B = AB$.',
    steps: [
      { step: 'Rewrites the condition as $(A - I)(B - I) = I$', marks: 1 },
      { step: 'Concludes that $B - I$ is the inverse of $A - I$, so $(B - I)(A - I) = I$ also', marks: 1 },
      { step: 'Expands to get $BA = A + B = AB$', marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-mat-r4-d01', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $J = ${m([1, 1, 1], [1, 1, 1], [1, 1, 1])}$.\n(a) Show that $J^{2} = 3J$ and hence find $J^{4}$ in terms of $J$.\n(b) Show that $(I + J)\\left(I - \\frac{1}{4}J\\right) = I$.\n(c) Hence write down $(I + J)^{-1}$ as a matrix.`,
    answer: `(a) Every entry of $J^{2}$ is $1 + 1 + 1 = 3$, so $J^{2} = 3J$. Then $J^{3} = J \\cdot J^{2} = 3J^{2} = 9J$ and $J^{4} = J \\cdot J^{3} = 9J^{2} = 27J$.\n(b) $(I + J)\\left(I - \\frac{1}{4}J\\right) = I - \\frac{1}{4}J + J - \\frac{1}{4}J^{2} = I + \\frac{3}{4}J - \\frac{3}{4}J = I$.\n(c) Since $I + J$ and $I - \\frac{1}{4}J$ multiply to $I$ (and commute), $(I + J)^{-1} = I - \\frac{1}{4}J = ${m(['\\frac{3}{4}', '-\\frac{1}{4}', '-\\frac{1}{4}'], ['-\\frac{1}{4}', '\\frac{3}{4}', '-\\frac{1}{4}'], ['-\\frac{1}{4}', '-\\frac{1}{4}', '\\frac{3}{4}'])}$.`,
    steps: [
      { step: 'Shows $J^{2} = 3J$ by multiplying out', marks: 1 },
      { step: 'Uses it repeatedly to get $J^{3} = 9J$ and $J^{4} = 27J$', marks: 1 },
      { step: 'Expands $(I + J)(I - \\frac{1}{4}J)$ correctly', marks: 1 },
      { step: 'Uses $J^{2} = 3J$ to simplify the product to $I$', marks: 1 },
      { step: 'States $(I + J)^{-1} = I - \\frac{1}{4}J$ and writes it as a matrix', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d02', chapter: C, topic: T4, type: 'long', complexity: 'medium', marks: 5,
    text: `Let $A = ${m([2, 1, 1], [1, 2, 1], [1, 1, 2])}$ and $B = ${m([3, -1, -1], [-1, 3, -1], [-1, -1, 3])}$.\n(a) Find $AB$ and hence write $A^{-1}$.\n(b) Solve $2x + y + z = 7$, $x + 2y + z = 8$, $x + y + 2z = 9$.\n(c) Solve $2x + y + z = 11$, $x + 2y + z = 12$, $x + y + 2z = 13$.`,
    answer: `(a) $AB = ${m([4, 0, 0], [0, 4, 0], [0, 0, 4])} = 4I$ (for example the first row times the first column is $6 - 1 - 1 = 4$, and first row times second column is $-2 + 3 - 1 = 0$). So $A\\left(\\frac{1}{4}B\\right) = I$ and $A^{-1} = \\frac{1}{4}B$.\n(b) The system is $AX = ${m([7], [8], [9])}$, so $X = A^{-1}${m([7], [8], [9])} = \\frac{1}{4}${m(['21 - 8 - 9'], ['-7 + 24 - 9'], ['-7 - 8 + 27'])} = \\frac{1}{4}${m([4], [8], [12])} = ${m([1], [2], [3])}$. So $x = 1$, $y = 2$, $z = 3$.\n(c) $X = \\frac{1}{4}${m(['33 - 12 - 13'], ['-11 + 36 - 13'], ['-11 - 12 + 39'])} = \\frac{1}{4}${m([8], [12], [16])} = ${m([2], [3], [4])}$. So $x = 2$, $y = 3$, $z = 4$.`,
    steps: [
      { step: 'Multiplies $A$ and $B$ correctly to get $4I$', marks: 1 },
      { step: 'Concludes $A^{-1} = \\frac{1}{4}B$', marks: 1 },
      { step: 'Writes system (b) as $AX = C$ and uses $X = A^{-1}C$', marks: 1 },
      { step: 'Obtains $x = 1$, $y = 2$, $z = 3$', marks: 1 },
      { step: 'Solves system (c) the same way to get $x = 2$, $y = 3$, $z = 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d03', chapter: C, topic: T3, type: 'long', complexity: 'hard', marks: 5,
    text: `(a) Using $(PQ)' = Q'P'$, prove that $(ABC)' = C'B'A'$ for square matrices $A$, $B$, $C$ of the same order.\n(b) Verify this for $A = ${m([1, 2], [0, 1])}$, $B = ${m([2, 0], [1, 1])}$ and $C = ${m([1, 1], [0, 2])}$.\n(c) If $A$, $B$, $C$ are symmetric and $ABC = CBA$, show that $ABC$ is symmetric.`,
    answer: `(a) $(ABC)' = ((AB)C)' = C'(AB)' = C'B'A'$.\n(b) $AB = ${m([4, 2], [1, 1])}$, so $ABC = ${m([4, 8], [1, 3])}$ and $(ABC)' = ${m([4, 1], [8, 3])}$. Now $C' = ${m([1, 0], [1, 2])}$, $B' = ${m([2, 1], [0, 1])}$, $A' = ${m([1, 0], [2, 1])}$. $C'B' = ${m([2, 1], [2, 3])}$ and $C'B'A' = ${m([4, 1], [8, 3])}$. This equals $(ABC)'$, so the result is verified.\n(c) Since $A, B, C$ are symmetric, $(ABC)' = C'B'A' = CBA$. Given $CBA = ABC$, we get $(ABC)' = ABC$, so $ABC$ is symmetric.`,
    steps: [
      { step: "Proves $(ABC)' = C'B'A'$ by grouping as $(AB)C$ and applying the rule twice", marks: 1 },
      { step: 'Computes $ABC = \\begin{bmatrix} 4 & 8 \\\\ 1 & 3 \\end{bmatrix}$ correctly and its transpose', marks: 1 },
      { step: "Computes $C'B'A'$ correctly (with the transposes of all three)", marks: 1 },
      { step: 'Compares the two to complete the verification', marks: 1 },
      { step: "Uses symmetry to get $(ABC)' = CBA = ABC$", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d04', chapter: C, topic: T4, type: 'long', complexity: 'hard', marks: 5,
    text: `The matrix $A = \\frac{1}{3}${m([1, 2, 2], [2, 1, 'x'], [2, 'y', 1])}$ satisfies $AA' = I$.\n(a) Find $x$ and $y$.\n(b) Show that $A^{-1} = A'$.\n(c) Using $A^{-1}$, find the column matrix $X$ for which $AX = ${m([3], [3], [6])}$.`,
    answer: `(a) Take rows $R_1 = (1, 2, 2)$, $R_2 = (2, 1, x)$, $R_3 = (2, y, 1)$ of $3A$. $AA' = I$ means $R_i \\cdot R_j = 9$ if $i = j$ and $0$ otherwise. $R_1 \\cdot R_2 = 2 + 2 + 2x = 0$ gives $x = -2$. $R_1 \\cdot R_3 = 2 + 2y + 2 = 0$ gives $y = -2$. Check: $R_2 \\cdot R_2 = 4 + 1 + 4 = 9$, $R_3 \\cdot R_3 = 4 + 4 + 1 = 9$ and $R_2 \\cdot R_3 = 4 - 2 - 2 = 0$. So $x = y = -2$.\n(b) $AA' = I$ means $A'$ is a matrix that, multiplied by $A$, gives $I$ (and $A'A = I$ as well), so $A$ is invertible with $A^{-1} = A'$.\n(c) $AX = B$ gives $X = A^{-1}B = A'B$, where $A' = \\frac{1}{3}${m([1, 2, 2], [2, 1, -2], [2, -2, 1])}$ (symmetric). So $X = \\frac{1}{3}${m(['3 + 6 + 12'], ['6 + 3 - 12'], ['6 - 6 + 6'])} = \\frac{1}{3}${m([21], [-3], [6])} = ${m([7], [-1], [2])}$.`,
    steps: [
      { step: 'Uses $AA\' = I$ to set the dot product of the first two rows to $0$ and finds $x = -2$', marks: 1 },
      { step: 'Uses the first and third rows to find $y = -2$ (and checks the other conditions)', marks: 1 },
      { step: "Concludes $A^{-1} = A'$ from $AA' = I$", marks: 1 },
      { step: "Writes $X = A^{-1}B = A'B$", marks: 1 },
      { step: 'Multiplies correctly to get $X = (7, -1, 2)$ as a column', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d05', chapter: C, topic: T2, type: 'long', complexity: 'medium', marks: 5,
    text: `Let $F = ${m([1, 1], [1, 0])}$.\n(a) Find $F^{2}$ and show that $F^{2} = F + I$.\n(b) Find $F^{3}$, $F^{4}$ and $F^{5}$ by repeated multiplication, and notice the pattern in their entries.\n(c) Use $F^{2} = F + I$ to find $F^{-1}$, and find $F^{8}$ by squaring $F^{4}$.`,
    answer: `(a) $F^{2} = ${m([2, 1], [1, 1])}$, and $F + I = ${m([2, 1], [1, 1])}$, so $F^{2} = F + I$.\n(b) $F^{3} = F^{2}F = ${m([3, 2], [2, 1])}$, $F^{4} = F^{3}F = ${m([5, 3], [3, 2])}$ and $F^{5} = F^{4}F = ${m([8, 5], [5, 3])}$. The entries are the numbers $1, 1, 2, 3, 5, 8, \\ldots$, each the sum of the previous two.\n(c) From $F^{2} - F = I$ we get $F(F - I) = I$, so $F^{-1} = F - I = ${m([0, 1], [1, -1])}$. Finally $F^{8} = (F^{4})^{2} = ${m([5, 3], [3, 2])}^{2} = ${m([34, 21], [21, 13])}$.`,
    steps: [
      { step: 'Computes $F^{2}$ and shows it equals $F + I$', marks: 1 },
      { step: 'Finds $F^{3}$ and $F^{4}$ correctly', marks: 1 },
      { step: 'Finds $F^{5}$ and states the pattern', marks: 1 },
      { step: 'Rewrites $F^{2} - F = I$ as $F(F - I) = I$ to get $F^{-1} = F - I$', marks: 1 },
      { step: 'Squares $F^{4}$ correctly to get $F^{8}$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d06', chapter: C, topic: T1, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $A = [a_{ij}]$ be the $3 \\times 3$ matrix with $a_{ij} = \\max(i, j)$.\n(a) Write $A$ out in full.\n(b) Show that $A$ is a symmetric matrix and state whether it is a diagonal matrix.\n(c) Find $A^{2}$ and use it to find the sum of all the entries of $A^{2}$.',
    answer: `(a) $a_{11} = 1$, $a_{12} = 2$, $a_{13} = 3$, $a_{21} = 2$, $a_{22} = 2$, $a_{23} = 3$, $a_{31} = a_{32} = a_{33} = 3$. So $A = ${m([1, 2, 3], [2, 2, 3], [3, 3, 3])}$.\n(b) Since $\\max(i, j) = \\max(j, i)$, $a_{ij} = a_{ji}$ for all $i, j$, so $A' = A$ and $A$ is symmetric. It is not diagonal because entries such as $a_{12} = 2$ are non-zero.\n(c) $A^{2} = ${m([14, 15, 18], [15, 17, 21], [18, 21, 27])}$ (for example $a_{11} = 1 + 4 + 9 = 14$ and $a_{23} = 6 + 6 + 9 = 21$). The sum of all entries is $14 + 15 + 18 + 15 + 17 + 21 + 18 + 21 + 27 = 166$.`,
    steps: [
      { step: 'Writes $A$ correctly entry by entry', marks: 1 },
      { step: "Shows $a_{ij} = a_{ji}$, so $A' = A$, and says why it is not diagonal", marks: 1 },
      { step: 'Multiplies to get the first row of $A^{2}$ correctly', marks: 1 },
      { step: 'Completes $A^{2}$ correctly', marks: 1 },
      { step: 'Adds all entries to get $166$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d07', chapter: C, topic: T4, type: 'long', complexity: 'hard', marks: 5,
    text: `A school store sells three items whose prices (in ₹) are $x$, $y$ and $z$. Three classes buy them: Class I buys $1$, $1$ and $1$ of the three items, Class II buys $1$, $2$ and $3$, and Class III buys $1$, $3$ and $6$. Their bills are ₹$110$, ₹$260$ and ₹$470$ respectively. Let $A = ${m([1, 1, 1], [1, 2, 3], [1, 3, 6])}$ and $B = ${m([3, -3, 1], [-3, 5, -2], [1, -2, 1])}$.\n(a) Write the situation as a matrix equation.\n(b) Show that $AB = I$.\n(c) Find the three prices, and show that $A$ is a symmetric matrix and that $A^{-1}$ is symmetric too.`,
    answer: `(a) $${m([1, 1, 1], [1, 2, 3], [1, 3, 6])}${m(['x'], ['y'], ['z'])} = ${m([110], [260], [470])}$, i.e. $AX = C$.\n(b) $AB = ${m(['3 - 3 + 1', '-3 + 5 - 2', '1 - 2 + 1'], ['3 - 6 + 3', '-3 + 10 - 6', '1 - 4 + 3'], ['3 - 9 + 6', '-3 + 15 - 12', '1 - 6 + 6'])} = ${m([1, 0, 0], [0, 1, 0], [0, 0, 1])} = I$.\n(c) Since $AB = I$, $A^{-1} = B$. So $X = BC = ${m(['330 - 780 + 470'], ['-330 + 1300 - 940'], ['110 - 520 + 470'])} = ${m([20], [30], [60])}$. The prices are ₹$20$, ₹$30$ and ₹$60$. Rows and columns of $A$ agree ($a_{12} = a_{21} = 1$, $a_{13} = a_{31} = 1$, $a_{23} = a_{32} = 3$), so $A' = A$ and $A$ is symmetric. Also $B' = B$ ($b_{12} = b_{21} = -3$, $b_{13} = b_{31} = 1$, $b_{23} = b_{32} = -2$), so $A^{-1} = B$ is symmetric. (In general $(A^{-1})' = (A')^{-1} = A^{-1}$.)`,
    steps: [
      { step: 'Writes the matrix equation $AX = C$ correctly', marks: 1 },
      { step: 'Multiplies $A$ and $B$ correctly to show $AB = I$', marks: 1 },
      { step: 'Uses $X = A^{-1}C = BC$', marks: 1 },
      { step: 'Obtains prices ₹$20$, ₹$30$, ₹$60$', marks: 1 },
      { step: "Shows $A' = A$ and $A^{-1} = B$ is symmetric", marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r4-d08', chapter: C, topic: T3, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $S = ${m([0, 2], [-2, 0])}$.\n(a) Show that $S$ is skew-symmetric and find $(I + S)^{-1}$.\n(b) Find $B = (I - S)(I + S)^{-1}$ and show that $BB' = I$.\n(c) For $S = ${m([0, 'a'], ['-a', 0])}$ with $a$ real, show that $(I - S)(I + S)^{-1} = \\frac{1}{1 + a^{2}}${m(['1 - a^{2}', '-2a'], ['2a', '1 - a^{2}'])}$.`,
    answer: `(a) $S' = ${m([0, -2], [2, 0])} = -S$, so $S$ is skew-symmetric. $I + S = ${m([1, 2], [-2, 1])}$ has determinant $1 + 4 = 5$, so $(I + S)^{-1} = \\frac{1}{5}${m([1, -2], [2, 1])}$.\n(b) $I - S = ${m([1, -2], [2, 1])}$. So $B = \\frac{1}{5}${m([1, -2], [2, 1])}${m([1, -2], [2, 1])} = \\frac{1}{5}${m([-3, -4], [4, -3])}$. Then $B' = \\frac{1}{5}${m([-3, 4], [-4, -3])}$ and $BB' = \\frac{1}{25}${m(['9 + 16', '-12 + 12'], ['-12 + 12', '16 + 9'])} = I$.\n(c) $I + S = ${m([1, 'a'], ['-a', 1])}$ has determinant $1 + a^{2}$, so $(I + S)^{-1} = \\frac{1}{1 + a^{2}}${m([1, '-a'], ['a', 1])}$, and $I - S = ${m([1, '-a'], ['a', 1])}$. Their product is $\\frac{1}{1 + a^{2}}${m(['1 - a^{2}', '-2a'], ['2a', '1 - a^{2}'])}$.`,
    steps: [
      { step: 'Shows $S\' = -S$ and finds $|I + S| = 5$ and $(I + S)^{-1}$', marks: 1 },
      { step: 'Forms $I - S$ and multiplies to get $B = \\frac{1}{5}\\begin{bmatrix} -3 & -4 \\\\ 4 & -3 \\end{bmatrix}$', marks: 1 },
      { step: "Finds $B'$ and shows $BB' = I$", marks: 1 },
      { step: 'Finds $(I + S)^{-1}$ with determinant $1 + a^{2}$ for general $a$', marks: 1 },
      { step: 'Multiplies by $I - S$ to reach the stated matrix', marks: 1 },
    ],
  },

  // ───────────── Section E: 4 marks (case studies) ─────────────
  {
    id: 'c12-mat-r4-e01', chapter: C, topic: T1, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Four bus stops $1, 2, 3, 4$ lie along a straight road. Measured from stop $1$, their positions are $0$ km, $3$ km, $7$ km and $12$ km. The transport office records the distances between stops in a matrix $D = [d_{ij}]$, where $d_{ij}$ is the distance in km between stop $i$ and stop $j$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the order of $D$, and say what every diagonal entry of $D$ is and why.', answer: 'The order is $4 \\times 4$. Every diagonal entry $d_{ii}$ is $0$, because the distance from a stop to itself is $0$.' },
      { label: '(ii)', marks: 1, text: 'Find $d_{24}$ and $d_{42}$. What does this tell you about $D$?', answer: 'The positions of stops $2$ and $4$ are $3$ and $12$, so $d_{24} = 9$ and $d_{42} = 9$. Distance does not depend on direction, so $d_{ij} = d_{ji}$ and $D$ is a symmetric matrix.' },
      { label: '(iii)', marks: 2, text: `Write out the matrix $D$.\nOR\nFind the sum of all the entries of $D$ and say what it represents.`, answer: `$D = ${m([0, 3, 7, 12], [3, 0, 4, 9], [7, 4, 0, 5], [12, 9, 5, 0])}$.\nOR\nThe distances between the six pairs of stops are $3, 7, 12, 4, 9, 5$, adding to $40$. Each pair appears twice in $D$ (above and below the diagonal), so the sum of all entries is $2 \\times 40 = 80$ km. It is the total of the distances counted in both directions for all ordered pairs of stops.` },
    ],
    answer: 'The order of $D$ is $4 \\times 4$ with zero diagonal; $d_{24} = d_{42} = 9$, so $D$ is symmetric; $D$ is the matrix with rows $(0, 3, 7, 12)$, $(3, 0, 4, 9)$, $(7, 4, 0, 5)$, $(12, 9, 5, 0)$ (OR: sum of entries $= 80$ km).',
  },
  {
    id: 'c12-mat-r4-e02', chapter: C, topic: T2, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A family records, in the matrix $H = ${m([6, 4, 3], [8, 6, 5])}$, the number of hours a day that its fan, air-conditioner and television run. The rows are weekdays and weekend days, and the columns are the three appliances in that order. The power ratings in kilowatts are written as the column matrix $P = ${m(['0.075'], ['1.5'], ['0.1'])}$. Energy used in a day in kilowatt-hours (units) is hours times power. A month has $22$ weekdays and $8$ weekend days, and electricity costs ₹$7$ per unit.`,
    parts: [
      { label: '(i)', marks: 1, text: 'Write the order of $H$ and of the product $HP$.', answer: '$H$ is $2 \\times 3$ and $P$ is $3 \\times 1$, so $HP$ is defined and has order $2 \\times 1$.' },
      { label: '(ii)', marks: 1, text: 'Find the energy used on a weekday, using matrix multiplication.', answer: `$HP = ${m(['6(0.075) + 4(1.5) + 3(0.1)'], ['8(0.075) + 6(1.5) + 5(0.1)'])} = ${m(['6.75'], ['10.1'])}$. So a weekday uses $6.75$ units (and a weekend day $10.1$ units).` },
      { label: '(iii)', marks: 2, text: `Using the row matrix $[22 \\;\\; 8]$, find the units used in a month and the electricity bill.\nOR\nThe air-conditioner's rating is changed to $x$ kW and a weekday now uses $8.25$ units. Find $x$.`, answer: `Units in a month $= [22 \\;\\; 8]${m(['6.75'], ['10.1'])} = 22(6.75) + 8(10.1) = 148.5 + 80.8 = 229.3$. The bill is $229.3 \\times 7 = 1605.1$, i.e. ₹1,605.10.\nOR\nThe weekday energy is $6(0.075) + 4x + 3(0.1) = 0.45 + 4x + 0.3 = 8.25$, so $4x = 7.5$ and $x = 1.875$ kW.` },
    ],
    answer: '$HP$ is $2 \\times 1$; a weekday uses $6.75$ units; a month uses $229.3$ units and the bill is ₹1,605.10 (OR: $x = 1.875$ kW).',
  },
  {
    id: 'c12-mat-r4-e03', chapter: C, topic: T3, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `Four teams $1, 2, 3, 4$ play a round-robin tournament in which every pair meets exactly once and there are no draws. The results are recorded in the matrix $T = [t_{ij}]$, where $t_{ij} = 1$ if team $i$ beat team $j$ and $t_{ij} = 0$ otherwise (so $t_{ii} = 0$). Here $T = ${m([0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 0, 1], [1, 0, 0, 0])}$.`,
    parts: [
      { label: '(i)', marks: 1, text: 'Is $T$ symmetric? Is it skew-symmetric? Give a reason.', answer: 'It is not symmetric, since $t_{12} = 1$ but $t_{21} = 0$. It is not skew-symmetric either, since $t_{21} = 0 \\neq -t_{12} = -1$.' },
      { label: '(ii)', marks: 1, text: "Find $T + T'$ and explain what its entries show.", answer: `$T + T' = ${m([0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1], [1, 1, 1, 0])}$. Every entry off the diagonal is $1$ because in each pair of teams exactly one team won (and the diagonal is $0$ since no team plays itself).` },
      { label: '(iii)', marks: 2, text: `Multiply $T$ by the column matrix of four ones to find the number of wins of each team, and name the team(s) with most wins.\nOR\nFind $T^{2}$ and read off $(T^{2})_{14}$. Interpret it: how many teams $k$ are such that team $1$ beat team $k$ and team $k$ beat team $4$?`, answer: `$T${m([1], [1], [1], [1])} = ${m([2], [2], [1], [1])}$, so teams $1$ and $2$ each won $2$ matches, and teams $3$ and $4$ won $1$ each (total $6$, the number of pairs). Teams $1$ and $2$ have the most wins.\nOR\n$T^{2} = ${m([0, 0, 1, 2], [1, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0])}$, so $(T^{2})_{14} = 2$: there are $2$ such teams, namely teams $2$ and $3$ (team $1$ beat both, and both beat team $4$).` },
    ],
    answer: "$T$ is neither symmetric nor skew-symmetric; $T + T'$ has $1$ everywhere off the diagonal; the wins are $2, 2, 1, 1$ so teams $1$ and $2$ lead (OR: $(T^{2})_{14} = 2$).",
  },
  {
    id: 'c12-mat-r4-e04', chapter: C, topic: T4, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `An economy has two sectors, agriculture and manufacturing. To produce one unit of agricultural output, $0.2$ unit of agricultural output and $0.4$ unit of manufactured output is used up; to produce one unit of manufactured output, $0.3$ unit of agricultural and $0.1$ unit of manufactured output is used up. These are recorded in $A = ${m(['0.2', '0.3'], ['0.4', '0.1'])}$. If $X = ${m(['x_{1}'], ['x_{2}'])}$ is the output of the two sectors and $d$ is the demand from outside the sectors, then $X - AX = d$, i.e. $(I - A)X = d$.`,
    parts: [
      { label: '(i)', marks: 1, text: 'Find $I - A$.', answer: `$I - A = ${m(['0.8', '-0.3'], ['-0.4', '0.9'])}$.` },
      { label: '(ii)', marks: 1, text: 'Find $(I - A)^{-1}$.', answer: `The determinant is $0.8(0.9) - (-0.3)(-0.4) = 0.72 - 0.12 = 0.6$. So $(I - A)^{-1} = \\frac{1}{0.6}${m(['0.9', '0.3'], ['0.4', '0.8'])} = ${m(['1.5', '0.5'], ['\\frac{2}{3}', '\\frac{4}{3}'])}$.` },
      { label: '(iii)', marks: 2, text: `The outside demand is $d = ${m([30], [60])}$ (in units). Find the output of each sector.\nOR\nFind the outputs if the demand changes to $d = ${m([60], [30])}$.`, answer: `$X = (I - A)^{-1}d = \\frac{1}{0.6}${m(['0.9(30) + 0.3(60)'], ['0.4(30) + 0.8(60)'])} = \\frac{1}{0.6}${m([45], [60])} = ${m([75], [100])}$. Agriculture must produce $75$ units and manufacturing $100$ units.\nOR\n$X = \\frac{1}{0.6}${m(['0.9(60) + 0.3(30)'], ['0.4(60) + 0.8(30)'])} = \\frac{1}{0.6}${m([63], [48])} = ${m([105], [80])}$. Agriculture $105$ units and manufacturing $80$ units.` },
    ],
    answer: '$I - A$ has rows $(0.8, -0.3)$ and $(-0.4, 0.9)$; $(I - A)^{-1} = \\frac{1}{0.6}\\begin{bmatrix} 0.9 & 0.3 \\\\ 0.4 & 0.8 \\end{bmatrix}$; the outputs are $75$ and $100$ units (OR: $105$ and $80$ units).',
  },
];
