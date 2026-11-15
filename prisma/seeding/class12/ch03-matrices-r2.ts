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

export const CH03_MAT_R2: Class12Question[] = [
  // ───────────── Section A: 1 mark ─────────────

  // Order, types and equality of matrices
  {
    id: 'c12-mat-r2-a01', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A matrix has $13$ elements. The number of possible orders of this matrix is',
    options: ['$1$', '$2$', '$4$', '$13$'],
    answer: 'Correct option: B) $2$. The order $m \\times n$ needs $mn = 13$, and since $13$ is prime the only possibilities are $1 \\times 13$ and $13 \\times 1$.',
  },
  {
    id: 'c12-mat-r2-a02', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For the $2 \\times 3$ matrix $A = [a_{ij}]$ with $a_{ij} = ij - 1$, the sum of all the elements of $A$ is',
    options: ['$9$', '$12$', '$15$', '$18$'],
    answer: `Correct option: B) $12$. $A = ${m([0, 1, 2], [1, 3, 5])}$, whose elements add up to $12$. ($18$ is the sum of the products $ij$ alone, forgetting to subtract $1$ from each of the six elements.)`,
  },
  {
    id: 'c12-mat-r2-a03', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $${m(['x + 2y', -3], [4, '3x - y'])} = ${m([7, -3], [4, 7])}$, then $x^{2} + y^{2}$ equals`,
    options: ['$5$', '$10$', '$13$', '$25$'],
    answer: 'Correct option: C) $13$. Equating entries, $x + 2y = 7$ and $3x - y = 7$, which give $x = 3$, $y = 2$. So $x^{2} + y^{2} = 9 + 4 = 13$. ($25$ is $(x + y)^{2}$ and $5$ is $x + y$.)',
  },
  {
    id: 'c12-mat-r2-a04', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A square matrix $A = [a_{ij}]$ in which $a_{ij} = 0$ whenever $i < j$ is called',
    options: ['an upper triangular matrix', 'a lower triangular matrix', 'a diagonal matrix', 'a scalar matrix'],
    answer: 'Correct option: B) a lower triangular matrix. $i < j$ describes the positions above the main diagonal; if all of them are zero, the only non-zero entries can lie on or below the diagonal. It need not be diagonal, because entries below the diagonal may be non-zero.',
  },
  {
    id: 'c12-mat-r2-a05', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A matrix which is both a row matrix and a column matrix must have order',
    options: ['$1 \\times 1$', '$1 \\times n$ for any $n$', '$n \\times n$ for any $n$', 'such a matrix cannot exist'],
    answer: 'Correct option: A) $1 \\times 1$. A row matrix has exactly one row and a column matrix has exactly one column, so the matrix must be $1 \\times 1$, for example $[5]$.',
  },
  {
    id: 'c12-mat-r2-a06', chapter: C, topic: T1, type: 'mcq', complexity: 'easy', marks: 1,
    text: "$A$ is a matrix of order $4 \\times 3$ and $AB'$ is a matrix of order $4 \\times 5$. The order of $B$ is",
    options: ['$3 \\times 5$', '$5 \\times 3$', '$4 \\times 5$', '$5 \\times 4$'],
    answer: "Correct option: B) $5 \\times 3$. For $AB'$ to be defined and of order $4 \\times 5$, $B'$ must be $3 \\times 5$. Hence $B$ is $5 \\times 3$. ($3 \\times 5$ is the order of $B'$, not $B$.)",
  },
  {
    id: 'c12-mat-r2-a07', chapter: C, topic: T1, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'How many diagonal matrices of order $3$ have every diagonal entry equal to $1$ or $2$ but are NOT scalar matrices?',
    options: ['$2$', '$6$', '$8$', '$9$'],
    answer: 'Correct option: B) $6$. The off-diagonal entries are $0$, and each of the three diagonal entries has $2$ choices, giving $2^{3} = 8$ diagonal matrices. Exactly two of them ($I$ and $2I$) are scalar, so $8 - 2 = 6$ are not.',
  },
  {
    id: 'c12-mat-r2-a08', chapter: C, topic: T1, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $${m([3, 'p - 2', 0], ['q + 1', 3, 'r'], [0, 0, 3])}$ is a scalar matrix, then $p + q + r$ equals`,
    options: ['$-1$', '$0$', '$1$', '$3$'],
    answer: 'Correct option: C) $1$. A scalar matrix has all off-diagonal entries $0$, so $p - 2 = 0$, $q + 1 = 0$ and $r = 0$. Then $p = 2$, $q = -1$, $r = 0$, and $p + q + r = 1$.',
  },
  {
    id: 'c12-mat-r2-a09', chapter: C, topic: T1, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: `Assertion (A): The zero matrix $${m([0, 0], [0, 0])}$ is a diagonal matrix.\nReason (R): A square matrix is a diagonal matrix if all its non-diagonal entries are zero.`,
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). The definition in (R) puts no condition on the diagonal entries, so a square zero matrix, whose off-diagonal entries are all $0$, is diagonal.',
  },

  // Matrix operations
  {
    id: 'c12-mat-r2-a10', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For the $2 \\times 2$ matrix $A = [a_{ij}]$ with $a_{ij} = \\frac{i}{j}$, if $A^{2} = kA$, then $k$ equals',
    options: ['$\\frac{1}{2}$', '$1$', '$2$', '$4$'],
    answer: `Correct option: C) $2$. $A = ${m([1, '\\frac{1}{2}'], [2, 1])}$, so $A^{2} = ${m(['1 + 1', '\\frac{1}{2} + \\frac{1}{2}'], ['2 + 2', '1 + 1'])} = ${m([2, 1], [4, 2])} = 2A$.`,
  },
  {
    id: 'c12-mat-r2-a11', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([2, 1], [0, -1])}$, $B = ${m([4, -3], [2, 1])}$ and $3A - 2X = B$, then $X$ is`,
    options: [`$${m([1, 3], [-1, -2])}$`, `$${m([2, 6], [-2, -4])}$`, `$${m([5, 0], [1, -1])}$`, `$${m([-1, -3], [1, 2])}$`],
    answer: `Correct option: A) $${m([1, 3], [-1, -2])}$. $2X = 3A - B = ${m([6 - 4, '3 + 3'], ['0 - 2', '-3 - 1'])} = ${m([2, 6], [-2, -4])}$, so $X = ${m([1, 3], [-1, -2])}$. Option B forgets to divide by $2$ and option D has every sign reversed.`,
  },
  {
    id: 'c12-mat-r2-a12', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: '$A$ is a $2 \\times 3$ matrix and $B$ is a $3 \\times 4$ matrix. Which statement is correct?',
    options: [
      '$AB$ is of order $2 \\times 4$ and $BA$ is not defined',
      '$AB$ is of order $3 \\times 3$ and $BA$ is of order $2 \\times 4$',
      'Both $AB$ and $BA$ are defined',
      'Neither $AB$ nor $BA$ is defined',
    ],
    answer: 'Correct option: A) $AB$ is of order $2 \\times 4$ and $BA$ is not defined. For $AB$, the $3$ columns of $A$ match the $3$ rows of $B$, so $AB$ is $2 \\times 4$. For $BA$, $B$ has $4$ columns but $A$ has only $2$ rows, so $BA$ is not defined.',
  },
  {
    id: 'c12-mat-r2-a13', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([2, -4], [1, -2])}$, then $(I + A)^{5}$ equals`,
    options: ['$I$', '$I + A$', '$I + 5A$', '$5A$'],
    answer: `Correct option: C) $I + 5A$. $A^{2} = ${m(['4 - 4', '-8 + 8'], ['2 - 2', '-4 + 4'])} = O$, so every higher power of $A$ is also $O$. Since $I$ and $A$ commute, the binomial expansion gives $(I + A)^{5} = I + 5A + 10A^{2} + \\dots = I + 5A$.`,
  },
  {
    id: 'c12-mat-r2-a14', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([3, -1], [2, 5])}$ and $B = ${m([1, 0, 5], [2, -2, 1])}$, then the entry in the first row and third column of $AB$ is`,
    options: ['$12$', '$14$', '$15$', '$16$'],
    answer: 'Correct option: B) $14$. Row $1$ of $A$ with column $3$ of $B$: $3(5) + (-1)(1) = 15 - 1 = 14$. ($16$ comes from dropping the minus sign, $15$ is the $(2,3)$ entry and $12$ the $(2,1)$ entry.)',
  },
  {
    id: 'c12-mat-r2-a15', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([4, 3], [2, -1])}$ and $A^{2} = pA + qI$, then $p + q$ equals`,
    options: ['$7$', '$-7$', '$13$', '$-13$'],
    answer: `Correct option: C) $13$. $A^{2} = ${m([16 + 6, '12 - 3'], ['8 - 2', '6 + 1'])} = ${m([22, 9], [6, 7])}$, and $pA + qI = ${m(['4p + q', '3p'], ['2p', '-p + q'])}$. From $3p = 9$, $p = 3$; from $4p + q = 22$, $q = 10$ (check: $-3 + 10 = 7$). So $p + q = 13$.`,
  },
  {
    id: 'c12-mat-r2-a16', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m([1, 1], [0, 1])}$, then $A^{50}$ equals`,
    options: [`$${m([1, 50], [0, 1])}$`, `$${m([50, 50], [0, 50])}$`, `$${m([1, '2^{50}'], [0, 1])}$`, `$${m([1, 1], [0, 1])}$`],
    answer: `Correct option: A) $${m([1, 50], [0, 1])}$. $A^{2} = ${m([1, 2], [0, 1])}$, $A^{3} = ${m([1, 3], [0, 1])}$, and in general $A^{n} = ${m([1, 'n'], [0, 1])}$ (multiplying by $A$ adds $1$ to the top-right entry). So $A^{50} = ${m([1, 50], [0, 1])}$. Option B is $50A$, not $A^{50}$.`,
  },
  {
    id: 'c12-mat-r2-a17', chapter: C, topic: T2, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For square matrices $A$ and $B$ of the same order, which of the following is ALWAYS true?',
    options: ['$(AB)^{2} = A^{2}B^{2}$', '$A^{2} - I = (A - I)(A + I)$', '$(A + B)^{2} = A^{2} + 2AB + B^{2}$', '$AB = O$ implies $A = O$ or $B = O$'],
    answer: 'Correct option: B) $A^{2} - I = (A - I)(A + I)$. Indeed $(A - I)(A + I) = A^{2} + AI - IA - I = A^{2} - I$, because $AI = IA = A$. Options A and C need $AB = BA$, which fails in general, and option D fails, for example, for $A = B$ equal to a non-zero matrix whose square is $O$.',
  },
  {
    id: 'c12-mat-r2-a18', chapter: C, topic: T2, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'How many $2 \\times 2$ matrices $A$, with every entry equal to $0$ or $1$, satisfy $A^{2} = O$?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    answer: `Correct option: C) $3$. Let $A = ${m(['a', 'b'], ['c', 'd'])}$. The $(1,1)$ entry of $A^{2}$ is $a^{2} + bc$ and the $(2,2)$ entry is $bc + d^{2}$; with entries $0$ or $1$ these vanish only if $a = d = 0$ and $bc = 0$. That leaves $O$, $${m([0, 1], [0, 0])}$ and $${m([0, 0], [1, 0])}$, and each of these does square to $O$. So there are $3$ such matrices.`,
  },
  {
    id: 'c12-mat-r2-a19', chapter: C, topic: T2, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A = ${m([1, 0, 0], [0, -2, 0], [0, 0, 3])}$, then $A^{3}$ equals`,
    options: [`$${m([1, 0, 0], [0, -8, 0], [0, 0, 27])}$`, `$${m([1, 0, 0], [0, 8, 0], [0, 0, 27])}$`, `$${m([3, 0, 0], [0, -6, 0], [0, 0, 9])}$`, `$${m([1, 0, 0], [0, -6, 0], [0, 0, 9])}$`],
    answer: `Correct option: A) $${m([1, 0, 0], [0, -8, 0], [0, 0, 27])}$. Powers of a diagonal matrix are found by raising each diagonal entry to that power: $1^{3} = 1$, $(-2)^{3} = -8$, $3^{3} = 27$. Option C is $3A$, not $A^{3}$.`,
  },
  {
    id: 'c12-mat-r2-a20', chapter: C, topic: T2, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: `Assertion (A): For $A = ${m([1, 0], [0, 2])}$ and $B = ${m([3, 0], [0, -1])}$, $AB = BA$.\nReason (R): Matrix multiplication is commutative for all square matrices of the same order.`,
    options: AR_OPTIONS,
    answer: `Correct option: C) (A) is true, but (R) is false. Both products equal $${m([3, 0], [0, -2])}$, because diagonal matrices of the same order commute. But matrix multiplication is not commutative in general, e.g. $${m([0, 1], [0, 0])}${m([0, 0], [1, 0])} \\neq ${m([0, 0], [1, 0])}${m([0, 1], [0, 0])}$.`,
  },

  // Transpose, symmetric and skew-symmetric matrices
  {
    id: 'c12-mat-r2-a21', chapter: C, topic: T3, type: 'mcq', complexity: 'easy', marks: 1,
    text: "If $A$ is a matrix of order $2 \\times 3$, then the order of $A'A$ is",
    options: ['$2 \\times 2$', '$3 \\times 3$', '$2 \\times 3$', '$3 \\times 2$'],
    answer: "Correct option: B) $3 \\times 3$. $A'$ is $3 \\times 2$, so $A'A$ is $(3 \\times 2)(2 \\times 3)$, which is $3 \\times 3$. ($2 \\times 2$ is the order of $AA'$.)",
  },
  {
    id: 'c12-mat-r2-a22', chapter: C, topic: T3, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $${m([0, 'a', 3], [-2, 'b', 'c'], [-3, 4, 0])}$ is a skew-symmetric matrix, then $a + b + c$ equals`,
    options: ['$-2$', '$2$', '$6$', '$-6$'],
    answer: 'Correct option: A) $-2$. Skew-symmetric means $a_{ij} = -a_{ji}$, and the diagonal entries are $0$. So $a = -(-2) = 2$, $b = 0$ and $c = -4$, giving $a + b + c = -2$.',
  },
  {
    id: 'c12-mat-r2-a23', chapter: C, topic: T3, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: "Assertion (A): If $A$ is a symmetric matrix, then $A^{3}$ is also symmetric.\nReason (R): For any square matrix $A$ and natural number $n$, $(A^{n})' = (A')^{n}$.",
    options: AR_OPTIONS,
    answer: "Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). (R) follows from $(AB)' = B'A'$ applied repeatedly. Using it, $(A^{3})' = (A')^{3} = A^{3}$ when $A' = A$, which is (A).",
  },
  {
    id: 'c12-mat-r2-a24', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A$ and $B$ are symmetric matrices of the same order, then $AB$ is symmetric if and only if',
    options: ['$AB = BA$', '$AB = -BA$', '$A = B$', '$AB = O$'],
    answer: "Correct option: A) $AB = BA$. $(AB)' = B'A' = BA$. So $(AB)' = AB$ exactly when $BA = AB$.",
  },
  {
    id: 'c12-mat-r2-a25', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $A = ${m(['\\sin \\theta', '\\cos \\theta'], ['-\\cos \\theta', '\\sin \\theta'])}$, $0 < \\theta < \\frac{\\pi}{2}$, and $A + A' = I$, then $\\theta$ equals`,
    options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{12}$'],
    answer: `Correct option: A) $\\frac{\\pi}{6}$. $A + A' = ${m(['2\\sin \\theta', 0], [0, '2\\sin \\theta'])}$, so $2\\sin \\theta = 1$ and $\\sin \\theta = \\frac{1}{2}$, giving $\\theta = \\frac{\\pi}{6}$. ($\\frac{\\pi}{3}$ comes from solving $\\cos \\theta = \\frac{1}{2}$ by mistake.)`,
  },
  {
    id: 'c12-mat-r2-a26', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `The matrix $A = ${m([4, -1], [7, 2])}$ is written as $P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric. Then $P$ is`,
    options: [`$${m([0, -4], [4, 0])}$`, `$${m([8, 6], [6, 4])}$`, `$${m([4, 7], [-1, 2])}$`, `$${m([4, 3], [3, 2])}$`],
    answer: `Correct option: D) $${m([4, 3], [3, 2])}$. $P = \\frac{1}{2}(A + A') = \\frac{1}{2}${m([8, 6], [6, 4])} = ${m([4, 3], [3, 2])}$. Option A is $Q$, option B forgets the factor $\\frac{1}{2}$, and option C is $A'$.`,
  },
  {
    id: 'c12-mat-r2-a27', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'How many symmetric matrices of order $3$ can be formed whose diagonal entries are all $0$ and whose other entries are each $0$ or $1$?',
    options: ['$6$', '$8$', '$64$', '$512$'],
    answer: 'Correct option: B) $8$. The diagonal is fixed, and once the three entries above the diagonal are chosen, symmetry fixes the three below. So there are $2^{3} = 8$ such matrices. ($64 = 2^{6}$ treats all six off-diagonal entries as free.)',
  },
  {
    id: 'c12-mat-r2-a28', chapter: C, topic: T3, type: 'mcq', complexity: 'medium', marks: 1,
    text: `$A$ is any skew-symmetric matrix of order $3$ and $X = ${m([1], [2], [3])}$. Then $X'AX$ equals`,
    options: ['$[0]$', '$[6]$', '$[14]$', 'it is not defined'],
    answer: "Correct option: A) $[0]$. $X'AX$ is a $1 \\times 1$ matrix, so it equals its own transpose. But $(X'AX)' = X'A'X = -X'AX$. A number equal to its own negative is $0$, so $X'AX = [0]$.",
  },
  {
    id: 'c12-mat-r2-a29', chapter: C, topic: T3, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): Every diagonal entry of a skew-symmetric matrix is zero.\nReason (R): For a skew-symmetric matrix $A = [a_{ij}]$, $a_{ii} = -a_{ii}$ for every $i$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). Putting $j = i$ in $a_{ij} = -a_{ji}$ gives $a_{ii} = -a_{ii}$, so $2a_{ii} = 0$ and $a_{ii} = 0$.',
  },
  {
    id: 'c12-mat-r2-a30', chapter: C, topic: T3, type: 'mcq', complexity: 'hard', marks: 1,
    text: "If $A$ is a square matrix such that $A' = 3A$, then $A$ is",
    options: ['a non-zero symmetric matrix', 'a non-zero skew-symmetric matrix', 'the zero matrix', 'the identity matrix'],
    answer: "Correct option: C) the zero matrix. Taking the transpose of $A' = 3A$ gives $A = 3A' = 3(3A) = 9A$, so $8A = O$ and $A = O$.",
  },

  // Invertible matrices and matrix equations
  {
    id: 'c12-mat-r2-a31', chapter: C, topic: T4, type: 'mcq', complexity: 'easy', marks: 1,
    text: `The inverse of $A = ${m([2, 0], [0, 4])}$ is`,
    options: [`$${m([-2, 0], [0, -4])}$`, `$${m(['\\frac{1}{2}', 0], [0, '\\frac{1}{4}'])}$`, `$${m([4, 0], [0, 2])}$`, `$${m(['\\frac{1}{4}', 0], [0, '\\frac{1}{2}'])}$`],
    answer: `Correct option: B) $${m(['\\frac{1}{2}', 0], [0, '\\frac{1}{4}'])}$. For a diagonal matrix with non-zero diagonal entries, the inverse has the reciprocals on the diagonal; check: $${m([2, 0], [0, 4])}${m(['\\frac{1}{2}', 0], [0, '\\frac{1}{4}'])} = I$.`,
  },
  {
    id: 'c12-mat-r2-a32', chapter: C, topic: T4, type: 'mcq', complexity: 'easy', marks: 1,
    text: `If $A^{-1} = ${m([3, -1], [-5, 2])}$, then $(A')^{-1}$ is`,
    options: [`$${m([3, -1], [-5, 2])}$`, `$${m([3, -5], [-1, 2])}$`, `$${m([2, 5], [1, 3])}$`, `$${m([2, 1], [5, 3])}$`],
    answer: `Correct option: B) $${m([3, -5], [-1, 2])}$. $(A')^{-1} = (A^{-1})'$, the transpose of the given inverse. Option D is $A$ itself and option C is $A'$.`,
  },
  {
    id: 'c12-mat-r2-a33', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A$ is an invertible square matrix such that $A^{2} = A$, then $A$ equals',
    options: ['$O$', '$I$', '$2I$', '$A^{-1} - I$'],
    answer: 'Correct option: B) $I$. Pre-multiplying $A^{2} = A$ by $A^{-1}$ gives $A^{-1}A^{2} = A^{-1}A$, that is $A = I$. ($O$ is not invertible, so it cannot be the answer.)',
  },
  {
    id: 'c12-mat-r2-a34', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: `If $${m([1, 2], [0, 1])} X = ${m([5, 4], [2, 1])}$, then $X$ is`,
    options: [`$${m([1, 2], [2, 1])}$`, `$${m([9, 6], [2, 1])}$`, `$${m([5, -6], [2, -3])}$`, `$${m([5, 14], [2, 5])}$`],
    answer: `Correct option: A) $${m([1, 2], [2, 1])}$. The inverse of $${m([1, 2], [0, 1])}$ is $${m([1, -2], [0, 1])}$, so $X = ${m([1, -2], [0, 1])}${m([5, 4], [2, 1])} = ${m([1, 2], [2, 1])}$. Check: $${m([1, 2], [0, 1])}${m([1, 2], [2, 1])} = ${m([5, 4], [2, 1])}$. Option B multiplies by the matrix instead of its inverse, and option C multiplies by the inverse on the wrong side.`,
  },
  {
    id: 'c12-mat-r2-a35', chapter: C, topic: T4, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Which of the following matrices is its own inverse?',
    options: [`$${m([1, 1], [0, 1])}$`, `$${m([2, 0], [0, 2])}$`, `$${m([1, 0], [0, -1])}$`, `$${m([0, 1], [1, 1])}$`],
    answer: `Correct option: C) $${m([1, 0], [0, -1])}$. A matrix is its own inverse when its square is $I$, and $${m([1, 0], [0, -1])}^{2} = ${m([1, 0], [0, 1])}$. The others square to $${m([1, 2], [0, 1])}$, $4I$ and $${m([1, 1], [1, 2])}$ respectively.`,
  },
  {
    id: 'c12-mat-r2-a36', chapter: C, topic: T4, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: `Assertion (A): The matrix $A = ${m([1, 2], [2, 4])}$ is not invertible.\nReason (R): $A${m([2, -2], [-1, 1])} = O$, and if an invertible matrix $A$ satisfies $AB = O$, then $B = O$.`,
    options: AR_OPTIONS,
    answer: `Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). The product is $${m(['2 - 2', '-2 + 2'], ['4 - 4', '-4 + 4'])} = O$. If $A$ were invertible, $B = A^{-1}(AB) = A^{-1}O = O$; but $B = ${m([2, -2], [-1, 1])} \\neq O$, so $A$ cannot be invertible.`,
  },

  // ───────────── Section B: 2 marks ─────────────
  {
    id: 'c12-mat-r2-b01', chapter: C, topic: T1, type: 'short', complexity: 'easy', marks: 2,
    text: 'Construct the $2 \\times 3$ matrix $A = [a_{ij}]$ whose elements are given by $a_{ij} = i + j$ when $i \\geq j$ and $a_{ij} = i - j$ when $i < j$.',
    answer: `For $i \\geq j$: $a_{11} = 2$, $a_{21} = 3$, $a_{22} = 4$. For $i < j$: $a_{12} = 1 - 2 = -1$, $a_{13} = 1 - 3 = -2$, $a_{23} = 2 - 3 = -1$. So $A = ${m([2, -1, -2], [3, 4, -1])}$.`,
    steps: [
      { step: 'Uses the correct rule for each position and computes all six elements', marks: 1 },
      { step: `Writes $A = ${m([2, -1, -2], [3, 4, -1])}$ in the correct arrangement`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-b02', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `Find the values of $x$ and $y$ if $x${m([2], [1])} + y${m([3], [5])} = ${m([4], [9])}$.`,
    answer: `The left side is $${m(['2x + 3y'], ['x + 5y'])}$. Equating entries: $2x + 3y = 4$ and $x + 5y = 9$. From the second, $x = 9 - 5y$; substituting, $18 - 10y + 3y = 4$, so $y = 2$ and $x = -1$. Check: $-1${m([2], [1])} + 2${m([3], [5])} = ${m([4], [9])}$.`,
    steps: [
      { step: 'Combines the left side into one column matrix and equates entries', marks: 1 },
      { step: 'Solves to get $x = -1$, $y = 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-b03', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 2,
    text: `If $f(x) = x^{2} - 3x + 2$ and $A = ${m([1, -1], [2, 3])}$, find $f(A)$.`,
    answer: `$f(A) = A^{2} - 3A + 2I$. $A^{2} = ${m(['1 - 2', '-1 - 3'], ['2 + 6', '-2 + 9'])} = ${m([-1, -4], [8, 7])}$. Then $f(A) = ${m([-1, -4], [8, 7])} - ${m([3, -3], [6, 9])} + ${m([2, 0], [0, 2])} = ${m([-2, -1], [2, 0])}$.`,
    steps: [
      { step: `Finds $A^{2} = ${m([-1, -4], [8, 7])}$`, marks: 1 },
      { step: `Uses $2I$ (not $2$) for the constant term and gets $f(A) = ${m([-2, -1], [2, 0])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-b04', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $A$ and $B$ are skew-symmetric matrices of the same order, prove that $AB - BA$ is a skew-symmetric matrix.',
    answer: "Since $A' = -A$ and $B' = -B$, $(AB - BA)' = (AB)' - (BA)' = B'A' - A'B' = (-B)(-A) - (-A)(-B) = BA - AB = -(AB - BA)$. A matrix whose transpose is its negative is skew-symmetric, so $AB - BA$ is skew-symmetric.",
    steps: [
      { step: "Uses $(AB)' = B'A'$ and $(BA)' = A'B'$ for the transpose of the difference", marks: 1 },
      { step: "Substitutes $A' = -A$, $B' = -B$ to get $-(AB - BA)$ and concludes", marks: 1 },
    ],
  },

  {
    id: 'c12-mat-r2-b05', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 2,
    text: `Show that $A = ${m([2, 1], [3, 1])}$ satisfies $A^{2} - 3A - I = O$, and hence find $A^{-1}$.`,
    answer: `$A^{2} = ${m([4 + 3, '2 + 1'], ['6 + 3', '3 + 1'])} = ${m([7, 3], [9, 4])}$, so $A^{2} - 3A - I = ${m([7, 3], [9, 4])} - ${m([6, 3], [9, 3])} - ${m([1, 0], [0, 1])} = O$. Then $A^{2} - 3A = I$, i.e. $A(A - 3I) = I = (A - 3I)A$, so $A^{-1} = A - 3I = ${m([-1, 1], [3, -2])}$. Check: $${m([2, 1], [3, 1])}${m([-1, 1], [3, -2])} = ${m([1, 0], [0, 1])}$.`,
    steps: [
      { step: `Finds $A^{2} = ${m([7, 3], [9, 4])}$ and verifies $A^{2} - 3A - I = O$`, marks: 1 },
      { step: `Deduces $A^{-1} = A - 3I = ${m([-1, 1], [3, -2])}$`, marks: 1 },
    ],
  },

  // ───────────── Section C: 3 marks ─────────────
  {
    id: 'c12-mat-r2-c01', chapter: C, topic: T1, type: 'short', complexity: 'medium', marks: 3,
    text: `Find the values of $x$ and $y$ for which $${m(['x^{2}', 'x + y'], [3, 'y^{2}'])} = ${m(['5x - 6', 7], [3, '3y + 4'])}$.`,
    answer: 'Equating corresponding entries: $x^{2} = 5x - 6$, $x + y = 7$ and $y^{2} = 3y + 4$. The first gives $x^{2} - 5x + 6 = 0$, so $x = 2$ or $x = 3$. The third gives $y^{2} - 3y - 4 = 0$, so $y = 4$ or $y = -1$. Of the four pairs, only $x = 3$, $y = 4$ satisfies $x + y = 7$ (the pairs $(2, 4)$, $(2, -1)$, $(3, -1)$ give $6$, $1$, $2$). Hence $x = 3$, $y = 4$.',
    steps: [
      { step: 'Writes the three equations from equality of matrices', marks: 1 },
      { step: 'Solves the quadratics: $x \\in \\{2, 3\\}$ and $y \\in \\{4, -1\\}$', marks: 1 },
      { step: 'Uses $x + y = 7$ to select $x = 3$, $y = 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-c02', chapter: C, topic: T2, type: 'short', complexity: 'hard', marks: 3,
    text: `Find all $2 \\times 2$ matrices $X$ that commute with $A = ${m([1, 1], [0, 1])}$, that is, $AX = XA$.`,
    answer: `Let $X = ${m(['a', 'b'], ['c', 'd'])}$. Then $AX = ${m(['a + c', 'b + d'], ['c', 'd'])}$ and $XA = ${m(['a', 'a + b'], ['c', 'c + d'])}$. Equating entries: $a + c = a$ gives $c = 0$; $b + d = a + b$ gives $d = a$; $d = c + d$ again gives $c = 0$. There is no condition on $b$. So $X = ${m(['a', 'b'], [0, 'a'])}$, where $a$ and $b$ are any real numbers.`,
    steps: [
      { step: 'Computes both $AX$ and $XA$ correctly', marks: 1 },
      { step: 'Equates entries to get $c = 0$ and $d = a$', marks: 1 },
      { step: `States the general form $X = ${m(['a', 'b'], [0, 'a'])}$ with $a$, $b$ arbitrary`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-c03', chapter: C, topic: T2, type: 'short', complexity: 'medium', marks: 3,
    text: `If $A = ${m([1, 0, 2], [0, 2, 1], [2, 0, 3])}$, find $A^{2} - 3A + 2I$ and verify that it equals $(A - I)(A - 2I)$.`,
    answer: `$A^{2} = ${m([5, 0, 8], [2, 4, 5], [8, 0, 13])}$. Then $A^{2} - 3A + 2I = ${m([5, 0, 8], [2, 4, 5], [8, 0, 13])} - ${m([3, 0, 6], [0, 6, 3], [6, 0, 9])} + ${m([2, 0, 0], [0, 2, 0], [0, 0, 2])} = ${m([4, 0, 2], [2, 0, 2], [2, 0, 6])}$. Next, $A - I = ${m([0, 0, 2], [0, 1, 1], [2, 0, 2])}$ and $A - 2I = ${m([-1, 0, 2], [0, 0, 1], [2, 0, 1])}$, and $(A - I)(A - 2I) = ${m([4, 0, 2], [2, 0, 2], [2, 0, 6])}$. The two results are equal (as expected, since $A$ and $I$ commute).`,
    steps: [
      { step: `Finds $A^{2} = ${m([5, 0, 8], [2, 4, 5], [8, 0, 13])}$`, marks: 1 },
      { step: `Gets $A^{2} - 3A + 2I = ${m([4, 0, 2], [2, 0, 2], [2, 0, 6])}$`, marks: 1 },
      { step: 'Writes $A - I$, $A - 2I$, multiplies them and shows the product is the same matrix', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-c04', chapter: C, topic: T3, type: 'short', complexity: 'medium', marks: 3,
    text: `The matrix $A = ${m([2, 'x', 3], [4, 1, 'y'], ['z', 5, 6])}$ is written as $P + Q$, where $P$ is symmetric and $Q$ is skew-symmetric. If $Q = ${m([0, 1, -2], [-1, 0, 3], [2, -3, 0])}$, find $x$, $y$, $z$ and the matrix $P$.`,
    answer: `$Q = \\frac{1}{2}(A - A')$, so $q_{12} = \\frac{x - 4}{2}$, $q_{13} = \\frac{3 - z}{2}$ and $q_{23} = \\frac{y - 5}{2}$. Equating with $Q$: $\\frac{x - 4}{2} = 1$ gives $x = 6$; $\\frac{3 - z}{2} = -2$ gives $z = 7$; $\\frac{y - 5}{2} = 3$ gives $y = 11$. Then $A = ${m([2, 6, 3], [4, 1, 11], [7, 5, 6])}$ and $P = A - Q = ${m([2, 5, 5], [5, 1, 8], [5, 8, 6])}$, which is symmetric (equivalently, $P = \\frac{1}{2}(A + A')$).`,
    steps: [
      { step: "Uses $Q = \\frac{1}{2}(A - A')$ to write the entries of $Q$ in terms of $x$, $y$, $z$", marks: 1 },
      { step: 'Gets $x = 6$, $y = 11$, $z = 7$', marks: 1 },
      { step: `Finds $P = ${m([2, 5, 5], [5, 1, 8], [5, 8, 6])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-c05', chapter: C, topic: T4, type: 'short', complexity: 'medium', marks: 3,
    text: `Find the $2 \\times 2$ matrix $X$ such that $${m([2, 1], [1, 1])} X ${m([1, 1], [0, 1])} = ${m([3, 5], [2, 3])}$.`,
    answer: `Let $M = ${m([2, 1], [1, 1])}$ and $N = ${m([1, 1], [0, 1])}$. Both have $ad - bc = 1$, so $M^{-1} = ${m([1, -1], [-1, 2])}$ and $N^{-1} = ${m([1, -1], [0, 1])}$. Pre-multiplying by $M^{-1}$ and post-multiplying by $N^{-1}$: $X = M^{-1}${m([3, 5], [2, 3])}N^{-1}$. First $M^{-1}${m([3, 5], [2, 3])} = ${m([1, 2], [1, 1])}$, then $${m([1, 2], [1, 1])}${m([1, -1], [0, 1])} = ${m([1, 1], [1, 0])}$. So $X = ${m([1, 1], [1, 0])}$. Check: $M${m([1, 1], [1, 0])} = ${m([3, 2], [2, 1])}$ and $${m([3, 2], [2, 1])}N = ${m([3, 5], [2, 3])}$.`,
    steps: [
      { step: 'Finds $M^{-1}$ and $N^{-1}$', marks: 1 },
      { step: 'Writes $X = M^{-1}(\\text{RHS})N^{-1}$ with the inverses on the correct sides', marks: 1 },
      { step: `Computes $X = ${m([1, 1], [1, 0])}$`, marks: 1 },
    ],
  },

  // ───────────── Section D: 5 marks ─────────────
  {
    id: 'c12-mat-r2-d01', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $A = ${m([1, 1, 0], [0, 1, 1], [0, 0, 1])}$.\n(a) Find $A^{2}$ and $A^{3}$.\n(b) Show that $A^{3} - 3A^{2} + 3A - I = O$.\n(c) Hence find $A^{-1}$ and verify that $AA^{-1} = I$.`,
    answer: `(a) $A^{2} = ${m([1, 2, 1], [0, 1, 2], [0, 0, 1])}$ and $A^{3} = A^{2}A = ${m([1, 3, 3], [0, 1, 3], [0, 0, 1])}$. (b) $3A^{2} = ${m([3, 6, 3], [0, 3, 6], [0, 0, 3])}$ and $3A = ${m([3, 3, 0], [0, 3, 3], [0, 0, 3])}$, so $A^{3} - 3A^{2} + 3A - I = ${m(['1 - 3 + 3 - 1', '3 - 6 + 3 - 0', '3 - 3 + 0 - 0'], [0, '1 - 3 + 3 - 1', '3 - 6 + 3 - 0'], [0, 0, '1 - 3 + 3 - 1'])} = O$. (c) Write the result as $A(A^{2} - 3A + 3I) = I$. Since $A$ commutes with $A^{2} - 3A + 3I$, also $(A^{2} - 3A + 3I)A = I$, so $A^{-1} = A^{2} - 3A + 3I = ${m([1, 2, 1], [0, 1, 2], [0, 0, 1])} - ${m([3, 3, 0], [0, 3, 3], [0, 0, 3])} + ${m([3, 0, 0], [0, 3, 0], [0, 0, 3])} = ${m([1, -1, 1], [0, 1, -1], [0, 0, 1])}$. Check: $${m([1, 1, 0], [0, 1, 1], [0, 0, 1])}${m([1, -1, 1], [0, 1, -1], [0, 0, 1])} = ${m([1, 0, 0], [0, 1, 0], [0, 0, 1])} = I$.`,
    steps: [
      { step: `(a) Finds $A^{2} = ${m([1, 2, 1], [0, 1, 2], [0, 0, 1])}$ and $A^{3} = ${m([1, 3, 3], [0, 1, 3], [0, 0, 1])}$`, marks: 1 },
      { step: '(b) Computes $3A^{2}$ and $3A$ correctly', marks: 1 },
      { step: '(b) Combines the matrices to show $A^{3} - 3A^{2} + 3A - I = O$', marks: 1 },
      { step: `(c) Rearranges to $A^{-1} = A^{2} - 3A + 3I = ${m([1, -1, 1], [0, 1, -1], [0, 0, 1])}$`, marks: 1 },
      { step: '(c) Verifies $AA^{-1} = I$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d02', chapter: C, topic: T4, type: 'long', complexity: 'medium', marks: 5,
    text: `Let $A = ${m([0, 1, 1], [1, 0, 1], [1, 1, 0])}$.\n(a) Show that $A^{2} = A + 2I$.\n(b) Hence find $A^{-1}$ and verify that $AA^{-1} = I$.\n(c) Express $A^{4}$ in the form $pA + qI$.`,
    answer: `(a) $A^{2} = ${m([2, 1, 1], [1, 2, 1], [1, 1, 2])}$, and $A + 2I = ${m([0 + 2, 1, 1], [1, 0 + 2, 1], [1, 1, 0 + 2])} = ${m([2, 1, 1], [1, 2, 1], [1, 1, 2])}$. So $A^{2} = A + 2I$. (b) From $A^{2} - A = 2I$, $A \\cdot \\frac{1}{2}(A - I) = I$ and likewise $\\frac{1}{2}(A - I) \\cdot A = I$, so $A^{-1} = \\frac{1}{2}(A - I) = \\frac{1}{2}${m([-1, 1, 1], [1, -1, 1], [1, 1, -1])}$. Check: $A \\cdot ${m([-1, 1, 1], [1, -1, 1], [1, 1, -1])} = ${m([2, 0, 0], [0, 2, 0], [0, 0, 2])}$, so $AA^{-1} = \\frac{1}{2}(2I) = I$. (c) $A^{3} = A \\cdot A^{2} = A^{2} + 2A = (A + 2I) + 2A = 3A + 2I$. Then $A^{4} = A \\cdot A^{3} = 3A^{2} + 2A = 3(A + 2I) + 2A = 5A + 6I$. So $p = 5$, $q = 6$.`,
    steps: [
      { step: '(a) Computes $A^{2}$ and shows it equals $A + 2I$', marks: 1 },
      { step: '(b) Rearranges to $A^{-1} = \\frac{1}{2}(A - I)$', marks: 1 },
      { step: `(b) Writes $A^{-1} = \\frac{1}{2}${m([-1, 1, 1], [1, -1, 1], [1, 1, -1])}$ and verifies $AA^{-1} = I$`, marks: 1 },
      { step: '(c) Finds $A^{3} = 3A + 2I$', marks: 1 },
      { step: '(c) Gets $A^{4} = 5A + 6I$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d03', chapter: C, topic: T4, type: 'long', complexity: 'hard', marks: 5,
    text: `Let $A = ${m([1, 2, 1], [0, 1, 3], [1, 0, 2])}$ and $B = ${m([2, -4, 5], [3, 1, -3], [-1, 2, 1])}$.\n(a) Find $AB$.\n(b) Hence find $A^{-1}$.\n(c) Use $A^{-1}$ to find the column matrix $X$ such that $AX = ${m([3], [8], [8])}$.`,
    answer: `(a) $AB = ${m(['2 + 6 - 1', '-4 + 2 + 2', '5 - 6 + 1'], ['0 + 3 - 3', '0 + 1 + 6', '0 - 3 + 3'], ['2 + 0 - 2', '-4 + 0 + 4', '5 + 0 + 2'])} = ${m([7, 0, 0], [0, 7, 0], [0, 0, 7])} = 7I$. (b) From $AB = 7I$, $A\\left(\\frac{1}{7}B\\right) = I$; for square matrices this also gives $\\left(\\frac{1}{7}B\\right)A = I$, so $A^{-1} = \\frac{1}{7}B = \\frac{1}{7}${m([2, -4, 5], [3, 1, -3], [-1, 2, 1])}$. (c) $X = A^{-1}${m([3], [8], [8])} = \\frac{1}{7}${m(['6 - 32 + 40'], ['9 + 8 - 24'], ['-3 + 16 + 8'])} = \\frac{1}{7}${m([14], [-7], [21])} = ${m([2], [-1], [3])}$. Check: $A${m([2], [-1], [3])} = ${m(['2 - 2 + 3'], ['0 - 1 + 9'], ['2 + 0 + 6'])} = ${m([3], [8], [8])}$.`,
    steps: [
      { step: 'Multiplies $A$ and $B$ correctly', marks: 1 },
      { step: 'Recognises $AB = 7I$', marks: 1 },
      { step: '(b) Concludes $A^{-1} = \\frac{1}{7}B$', marks: 1 },
      { step: '(c) Writes $X = A^{-1}(\\text{column})$ and computes the product', marks: 1 },
      { step: `(c) Gets $X = ${m([2], [-1], [3])}$`, marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d04', chapter: C, topic: T2, type: 'long', complexity: 'medium', marks: 5,
    text: 'A furniture workshop makes chairs, tables and cupboards. A chair needs $4$ kg of wood, $2$ packets of screws and $1$ litre of polish; a table needs $10$ kg of wood, $4$ packets of screws and $2$ litres of polish; a cupboard needs $25$ kg of wood, $6$ packets of screws and $3$ litres of polish. Order I is for $10$ chairs, $4$ tables and $2$ cupboards; Order II is for $20$ chairs, $5$ tables and $3$ cupboards. Wood costs ₹$120$ per kg, screws ₹$40$ per packet and polish ₹$250$ per litre. Using matrix multiplication, find (a) the quantity of each material needed for each order, (b) the material cost of each order, and (c) the total profit on the two orders if a chair sells for ₹$1200$, a table for ₹$2800$ and a cupboard for ₹$5500$ (take the material cost as the only cost).',
    answer: `Let the order matrix be $O = ${m([10, 4, 2], [20, 5, 3])}$ (rows: Orders I, II; columns: chairs, tables, cupboards) and the requirement matrix $R = ${m([4, 2, 1], [10, 4, 2], [25, 6, 3])}$ (rows: chair, table, cupboard; columns: wood, screws, polish). (a) $OR = ${m(['40 + 40 + 50', '20 + 16 + 12', '10 + 8 + 6'], ['80 + 50 + 75', '40 + 20 + 18', '20 + 10 + 9'])} = ${m([130, 48, 24], [205, 78, 39])}$. Order I needs $130$ kg wood, $48$ packets of screws and $24$ L polish; Order II needs $205$ kg wood, $78$ packets and $39$ L. (b) With the cost column $K = ${m([120], [40], [250])}$: $(OR)K = ${m(['15600 + 1920 + 6000'], ['24600 + 3120 + 9750'])} = ${m([23520], [37470])}$, so the material cost is ₹$23{,}520$ for Order I and ₹$37{,}470$ for Order II. (c) The cost per item is $RK = ${m([810], [1860], [3990])}$, so the profit per item is $${m([1200 - 810], [2800 - 1860], [5500 - 3990])} = ${m([390], [940], [1510])}$. Profit on the orders $= O${m([390], [940], [1510])} = ${m(['3900 + 3760 + 3020'], ['7800 + 4700 + 4530'])} = ${m([10680], [17030])}$. Total profit $= 10680 + 17030 =$ ₹$27{,}710$.`,
    steps: [
      { step: 'Sets up the order matrix ($2 \\times 3$) and the requirement matrix ($3 \\times 3$) consistently', marks: 1 },
      { step: `(a) Finds $OR = ${m([130, 48, 24], [205, 78, 39])}$`, marks: 1 },
      { step: '(b) Finds material costs ₹23,520 and ₹37,470', marks: 1 },
      { step: '(c) Finds profit per item ₹390, ₹940, ₹1510 (or revenue per order)', marks: 1 },
      { step: '(c) Gets order profits ₹10,680 and ₹17,030 and total ₹27,710', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d05', chapter: C, topic: T3, type: 'long', complexity: 'hard', marks: 5,
    text: `(a) If $A$ is a skew-symmetric matrix and $B$ is any square matrix of the same order, prove that $B'AB$ is skew-symmetric. Verify this for $A = ${m([0, 2], [-2, 0])}$ and $B = ${m([1, 2], [3, -1])}$.\n(b) Prove that the only real symmetric $2 \\times 2$ matrix $S$ with $S^{2} = O$ is $S = O$.`,
    answer: `(a) Since $A' = -A$: $(B'AB)' = B'A'(B')' = B'(-A)B = -(B'AB)$, so $B'AB$ is skew-symmetric. Verification: $AB = ${m([0, 2], [-2, 0])}${m([1, 2], [3, -1])} = ${m([6, -2], [-2, -4])}$ and $B' = ${m([1, 3], [2, -1])}$, so $B'AB = ${m([1, 3], [2, -1])}${m([6, -2], [-2, -4])} = ${m([0, -14], [14, 0])}$, which has zero diagonal and opposite off-diagonal entries, so it is skew-symmetric. (b) Let $S = ${m(['a', 'b'], ['b', 'd'])}$ with $a, b, d$ real. Then $S^{2} = ${m(['a^{2} + b^{2}', 'b(a + d)'], ['b(a + d)', 'b^{2} + d^{2}'])}$. $S^{2} = O$ needs $a^{2} + b^{2} = 0$ and $b^{2} + d^{2} = 0$. A sum of squares of real numbers is zero only when each is zero, so $a = b = d = 0$ and $S = O$.`,
    steps: [
      { step: "(a) Uses $(XYZ)' = Z'Y'X'$ and $A' = -A$ to show $(B'AB)' = -B'AB$", marks: 1 },
      { step: '(a) Computes $AB$ and $B\'$ correctly', marks: 1 },
      { step: `(a) Gets $B'AB = ${m([0, -14], [14, 0])}$ and notes it is skew-symmetric`, marks: 1 },
      { step: '(b) Writes a general symmetric $S$ and computes $S^{2}$', marks: 1 },
      { step: '(b) Uses $a^{2} + b^{2} = 0$, $b^{2} + d^{2} = 0$ to conclude $S = O$', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d06', chapter: C, topic: T1, type: 'long', complexity: 'medium', marks: 5,
    text: `(a) Find all diagonal matrices $A = ${m(['x', 0], [0, 'y'])}$ that satisfy $A^{2} - 5A + 6I = O$. Which of them are scalar matrices?\n(b) Show that the matrix $B = ${m([2, 1], [0, 3])}$, which is not diagonal, also satisfies $B^{2} - 5B + 6I = O$, and name the type of matrix $B$ is.`,
    answer: `(a) $A^{2} - 5A + 6I = ${m(['x^{2} - 5x + 6', 0], [0, 'y^{2} - 5y + 6'])}$. This is $O$ when $x^{2} - 5x + 6 = 0$ and $y^{2} - 5y + 6 = 0$, i.e. $x, y \\in \\{2, 3\\}$. So there are four such matrices: $${m([2, 0], [0, 2])}$, $${m([3, 0], [0, 3])}$, $${m([2, 0], [0, 3])}$ and $${m([3, 0], [0, 2])}$. The scalar ones are $2I$ and $3I$, where the diagonal entries are equal. (b) $B^{2} = ${m([4, '2 + 3'], [0, 9])} = ${m([4, 5], [0, 9])}$, so $B^{2} - 5B + 6I = ${m([4, 5], [0, 9])} - ${m([10, 5], [0, 15])} + ${m([6, 0], [0, 6])} = O$. $B$ has a zero below the diagonal and a non-zero entry above it, so it is an upper triangular matrix (not diagonal). So a quadratic matrix equation can have solutions beyond the diagonal ones.`,
    steps: [
      { step: '(a) Writes $A^{2} - 5A + 6I$ as a diagonal matrix in $x$ and $y$', marks: 1 },
      { step: '(a) Solves to get $x, y \\in \\{2, 3\\}$ and lists the four matrices', marks: 1 },
      { step: '(a) Identifies $2I$ and $3I$ as the scalar matrices', marks: 1 },
      { step: `(b) Computes $B^{2} = ${m([4, 5], [0, 9])}$ and shows $B^{2} - 5B + 6I = O$`, marks: 1 },
      { step: '(b) States that $B$ is upper triangular', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d07', chapter: C, topic: T2, type: 'long', complexity: 'hard', marks: 5,
    text: `Two towns P and Q have a combined population of $90{,}000$ that stays fixed. Each year, $10\\%$ of the people in P move to Q and $20\\%$ of the people in Q move to P; everyone else stays. If $p$ and $q$ are this year's populations, next year's populations are given by $${m(["p'"], ["q'"])} = T${m(['p'], ['q'])}$, where $T = ${m([0.9, 0.2], [0.1, 0.8])}$. This year P has $50{,}000$ people and Q has $40{,}000$.\n(a) Find the populations after one year and after two years.\n(b) Find $T^{2}$ and verify that $T^{2}${m([50000], [40000])}$ gives the populations after two years.\n(c) Show that if P had $60{,}000$ people and Q had $30{,}000$, the populations would not change from year to year.`,
    answer: `(a) After one year: $T${m([50000], [40000])} = ${m(['45000 + 8000'], ['5000 + 32000'])} = ${m([53000], [37000])}$. After two years: $T${m([53000], [37000])} = ${m(['47700 + 7400'], ['5300 + 29600'])} = ${m([55100], [34900])}$. So P has $55{,}100$ and Q has $34{,}900$ after two years. (b) $T^{2} = ${m(['0.81 + 0.02', '0.18 + 0.16'], ['0.09 + 0.08', '0.02 + 0.64'])} = ${m([0.83, 0.34], [0.17, 0.66])}$. Then $T^{2}${m([50000], [40000])} = ${m(['41500 + 13600'], ['8500 + 26400'])} = ${m([55100], [34900])}$, the same as in (a). (c) $T${m([60000], [30000])} = ${m(['54000 + 6000'], ['6000 + 24000'])} = ${m([60000], [30000])}$. The populations are unchanged, so they stay at $60{,}000$ and $30{,}000$ every year (the $6000$ moving each way balance out).`,
    steps: [
      { step: '(a) Finds the populations after one year: 53,000 and 37,000', marks: 1 },
      { step: '(a) Finds the populations after two years: 55,100 and 34,900', marks: 1 },
      { step: `(b) Computes $T^{2} = ${m([0.83, 0.34], [0.17, 0.66])}$`, marks: 1 },
      { step: '(b) Multiplies $T^{2}$ by the initial column and matches the answer to (a)', marks: 1 },
      { step: '(c) Shows the product with (60,000, 30,000) returns the same column', marks: 1 },
    ],
  },
  {
    id: 'c12-mat-r2-d08', chapter: C, topic: T4, type: 'long', complexity: 'medium', marks: 5,
    text: `Let $A = ${m([0, 1, 0], [0, 0, 1], [1, 0, 0])}$.\n(a) Find $A^{2}$ and show that $A^{3} = I$.\n(b) Hence find $A^{-1}$, and show that $A^{-1} = A'$.\n(c) Using $A^{-1}$, find the column matrix $X$ such that $AX = ${m([1], [2], [3])}$.`,
    answer: `(a) $A^{2} = ${m([0, 0, 1], [1, 0, 0], [0, 1, 0])}$ and $A^{3} = A^{2}A = ${m([1, 0, 0], [0, 1, 0], [0, 0, 1])} = I$. (b) Since $A \\cdot A^{2} = A^{2} \\cdot A = A^{3} = I$, $A$ is invertible and $A^{-1} = A^{2} = ${m([0, 0, 1], [1, 0, 0], [0, 1, 0])}$. Transposing $A$ (rows become columns) gives $A' = ${m([0, 0, 1], [1, 0, 0], [0, 1, 0])}$, which is the same matrix, so $A^{-1} = A'$. (c) $X = A^{-1}${m([1], [2], [3])} = ${m([0, 0, 1], [1, 0, 0], [0, 1, 0])}${m([1], [2], [3])} = ${m([3], [1], [2])}$. Check: $A${m([3], [1], [2])} = ${m([1], [2], [3])}$.`,
    steps: [
      { step: `(a) Finds $A^{2} = ${m([0, 0, 1], [1, 0, 0], [0, 1, 0])}$`, marks: 1 },
      { step: '(a) Shows $A^{3} = I$', marks: 1 },
      { step: '(b) Deduces $A^{-1} = A^{2}$ and writes it out', marks: 1 },
      { step: "(b) Writes $A'$ and observes $A^{-1} = A'$", marks: 1 },
      { step: `(c) Gets $X = ${m([3], [1], [2])}$`, marks: 1 },
    ],
  },

  // ───────────── Section E: 4-mark case studies ─────────────
  {
    id: 'c12-mat-r2-e01', chapter: C, topic: T1, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A warehouse stores cartons on a wall of shelves arranged in $3$ levels (rows) and $4$ bays (columns). The number of cartons on the shelf in level $i$ and bay $j$ is recorded as the element $s_{ij}$ of a matrix $S$, where $s_{ij} = 2i + 3j - 4$.',
    answer: `$S$ is $3 \\times 4$ with $12$ elements; $s_{23} = 9$; $S = ${m([1, 4, 7, 10], [3, 6, 9, 12], [5, 8, 11, 14])}$ with $90$ cartons in all (OR: $k = 3$).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order of $S$ and the number of its elements.',
        answer: '$S$ has $3$ rows (levels) and $4$ columns (bays), so its order is $3 \\times 4$ and it has $3 \\times 4 = 12$ elements.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'How many cartons are on the shelf in level $2$, bay $3$?',
        answer: '$s_{23} = 2(2) + 3(3) - 4 = 9$ cartons.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Construct the matrix $S$ and find the total number of cartons on the wall.\nOR\nAfter a delivery, every shelf receives $k$ more cartons, giving a new matrix $N = [n_{ij}]$ with $n_{ij} = s_{ij} + k$. If the wall now holds $126$ cartons in all, find $k$ and write the element $n_{34}$.',
        answer: `Row $1$: $1, 4, 7, 10$; row $2$: $3, 6, 9, 12$; row $3$: $5, 8, 11, 14$. So $S = ${m([1, 4, 7, 10], [3, 6, 9, 12], [5, 8, 11, 14])}$. The row totals are $22$, $30$ and $38$, so there are $90$ cartons in all.\nOR: The original total is $90$ (sum of all elements of $S$). Each of the $12$ shelves gains $k$ cartons, so $90 + 12k = 126$, giving $k = 3$. Then $n_{34} = s_{34} + 3 = (6 + 12 - 4) + 3 = 17$.`,
      },
    ],
  },
  {
    id: 'c12-mat-r2-e02', chapter: C, topic: T2, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `In an inter-school football league, each of four teams P, Q, R, S has played $6$ matches. Their results are recorded in the matrix $M = ${m([4, 1, 1], [3, 2, 1], [2, 2, 2], [1, 1, 4])}$, where the rows are the teams (P, Q, R, S) and the columns are the numbers of wins, draws and losses. The league awards $3$ points for a win, $1$ for a draw and $0$ for a loss.`,
    answer: `$M$ is $4 \\times 3$ and the points matrix is a $3 \\times 1$ column; R has $8$ points; the points table is $${m([13], [11], [8], [4])}$, total $36$ (OR: $w = 4$, and Q then has $14$ points).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the order of $M$, and the order of the points matrix that must multiply $M$ on the right to give each team\'s points.',
        answer: '$M$ is of order $4 \\times 3$. To multiply on the right it needs $3$ rows, so the points matrix is the $3 \\times 1$ column $\\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\end{bmatrix}$, and the product is $4 \\times 1$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Using matrix multiplication, find the points of team R.',
        answer: `Points of R $= ${m([2, 2, 2])}${m([3], [1], [0])} = 6 + 2 + 0 = 8$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using matrices, find the points table for all four teams and the total points awarded.\nOR\nThe league changes its rule to $w$ points for a win, $1$ point for a draw and $0$ for a loss. Under the new rule team P has $17$ points. Find $w$ and the new points of team Q.',
        answer: `$M${m([3], [1], [0])} = ${m(['12 + 1 + 0'], ['9 + 2 + 0'], ['6 + 2 + 0'], ['3 + 1 + 0'])} = ${m([13], [11], [8], [4])}$. So P has $13$, Q $11$, R $8$ and S $4$ points, a total of $36$ points.\nOR: P\'s points are $${m([4, 1, 1])}${m(['w'], [1], [0])} = 4w + 1$. Setting $4w + 1 = 17$ gives $w = 4$. Then Q has $${m([3, 2, 1])}${m([4], [1], [0])} = 12 + 2 = 14$ points.`,
      },
    ],
  },
  {
    id: 'c12-mat-r2-e03', chapter: C, topic: T3, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `Three friends A, B and C went on a trip and often paid for one another. The amounts (in ₹) are recorded in the matrix $P = ${m([0, 300, 450], [200, 0, 150], [100, 250, 0])}$, where the entry in row $i$ and column $j$ is the amount friend $i$ paid on behalf of friend $j$ (rows and columns in the order A, B, C). For example, A paid ₹$300$ for B, and B paid ₹$200$ for A.`,
    answer: `$P$ is not symmetric ($p_{12} = 300 \\neq p_{21} = 200$); $N = P - P' = ${m([0, 100, 350], [-100, 0, -100], [-350, 100, 0])}$ is skew-symmetric; net positions: A receives ₹$450$, B pays ₹$200$, C pays ₹$250$ (OR: $P = ${m([0, 250, 275], [250, 0, 200], [275, 200, 0])} + ${m([0, 50, 175], [-50, 0, -50], [-175, 50, 0])}$).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $P$ a symmetric matrix? Give a reason.',
        answer: "No. A symmetric matrix needs $p_{ij} = p_{ji}$ for all $i, j$, but $p_{12} = 300$ while $p_{21} = 200$. So $P' \\neq P$.",
      },
      {
        label: '(ii)', marks: 1,
        text: "The matrix $N = P - P'$ gives, in row $i$ and column $j$, the net amount friend $j$ owes friend $i$. Find $N$ and state what type of matrix it is.",
        answer: `$P' = ${m([0, 200, 100], [300, 0, 250], [450, 150, 0])}$, so $N = P - P' = ${m([0, 100, 350], [-100, 0, -100], [-350, 100, 0])}$. Its diagonal is zero and $n_{ij} = -n_{ji}$, so $N$ is skew-symmetric (indeed $(P - P')' = P' - P = -N$).`,
      },
      {
        label: '(iii)', marks: 2,
        text: 'The sum of row $i$ of $N$ is the net amount friend $i$ should receive from the others (a negative value means friend $i$ must pay). Find the net position of each friend and check that the three add up to zero.\nOR\nExpress $P$ as the sum of a symmetric matrix and a skew-symmetric matrix.',
        answer: `Row sums of $N$: A: $0 + 100 + 350 = 450$; B: $-100 + 0 - 100 = -200$; C: $-350 + 100 + 0 = -250$. So A should receive ₹$450$, B must pay ₹$200$ and C must pay ₹$250$. Check: $450 - 200 - 250 = 0$, as it must be, since the entries of a skew-symmetric matrix cancel in pairs.\nOR: Symmetric part $\\frac{1}{2}(P + P') = \\frac{1}{2}${m([0, 500, 550], [500, 0, 400], [550, 400, 0])} = ${m([0, 250, 275], [250, 0, 200], [275, 200, 0])}$; skew-symmetric part $\\frac{1}{2}(P - P') = ${m([0, 50, 175], [-50, 0, -50], [-175, 50, 0])}$. Their sum is $${m([0, 300, 450], [200, 0, 150], [100, 250, 0])} = P$.`,
      },
    ],
  },
  {
    id: 'c12-mat-r2-e04', chapter: C, topic: T4, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: `A stationery shop makes two kinds of gift packs. Pack X contains $3$ pens and $2$ notebooks; pack Y contains $2$ pens and $1$ notebook. If $x$ packs of type X and $y$ packs of type Y are made, the total numbers of pens and notebooks used are given by $${m(['\\text{pens}'], ['\\text{notebooks}'])} = A${m(['x'], ['y'])}$, where $A = ${m([3, 2], [2, 1])}$. On one day the shop used $46$ pens and $28$ notebooks.`,
    answer: `$A^{-1} = ${m([-1, 2], [2, -3])}$; the matrix equation is $A${m(['x'], ['y'])} = ${m([46], [28])}$; the shop made $10$ packs of X and $8$ of Y (OR: $A^{2} - 4A - I = O$ gives $A^{-1} = A - 4I$).`,
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Write the day\'s situation as a matrix equation, and state the order of each matrix in it.',
        answer: `$${m([3, 2], [2, 1])}${m(['x'], ['y'])} = ${m([46], [28])}$. Here $A$ is $2 \\times 2$ and both column matrices are $2 \\times 1$.`,
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find $A^{-1}$.',
        answer: `$3(1) - 2(2) = -1 \\neq 0$, so $A$ is invertible and $A^{-1} = \\frac{1}{-1}${m([1, -2], [-2, 3])} = ${m([-1, 2], [2, -3])}$. Check: $${m([3, 2], [2, 1])}${m([-1, 2], [2, -3])} = ${m([1, 0], [0, 1])}$.`,
      },
      {
        label: '(iii)', marks: 2,
        text: 'Using $A^{-1}$, find how many packs of each type were made that day.\nOR\nShow that $A^{2} - 4A - I = O$, and use it to find $A^{-1}$.',
        answer: `$${m(['x'], ['y'])} = A^{-1}${m([46], [28])} = ${m([-1, 2], [2, -3])}${m([46], [28])} = ${m(['-46 + 56'], ['92 - 84'])} = ${m([10], [8])}$. So $10$ packs of X and $8$ packs of Y were made. (Check: $30 + 16 = 46$ pens and $20 + 8 = 28$ notebooks.)\nOR: $A^{2} = ${m([13, 8], [8, 5])}$, so $A^{2} - 4A - I = ${m([13, 8], [8, 5])} - ${m([12, 8], [8, 4])} - ${m([1, 0], [0, 1])} = O$. Then $A(A - 4I) = I = (A - 4I)A$, so $A^{-1} = A - 4I = ${m([-1, 2], [2, -3])}$.`,
      },
    ],
  },
];
