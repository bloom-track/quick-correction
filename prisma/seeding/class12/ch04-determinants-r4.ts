import type { Class12Question } from './types.js';

export const CH04_DET_R4: Class12Question[] = [
  {
    "id": "c12-det-r4-a01",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The value of $\\begin{vmatrix} 3 & 0 & 2 \\\\ 1 & 4 & 0 \\\\ 0 & 5 & -1 \\end{vmatrix}$ is",
    "options": [
      "$-2$",
      "$2$",
      "$-22$",
      "$22$"
    ],
    "answer": "Correct option: A) $-2$. Expand along the first row: $3(4\\cdot(-1) - 0\\cdot 5) - 0 + 2(1\\cdot 5 - 4\\cdot 0) = -12 + 10 = -2$. Options $22$ and $-22$ come from a sign slip on the last term."
  },
  {
    "id": "c12-det-r4-a02",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "Let $A = [a_{ij}]$ be a $3 \\times 3$ matrix with $a_{ij} = |i - j|$. Then $|A|$ equals",
    "options": [
      "$4$",
      "$-4$",
      "$0$",
      "$2$"
    ],
    "answer": "Correct option: A) $4$. Here $A = \\begin{bmatrix} 0 & 1 & 2 \\\\ 1 & 0 & 1 \\\\ 2 & 1 & 0 \\end{bmatrix}$. Expanding along the first row: $0 - 1(0 - 2) + 2(1 - 0) = 2 + 2 = 4$. A sign slip on the middle term gives $0$."
  },
  {
    "id": "c12-det-r4-a03",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$A$ is a $3 \\times 3$ matrix with $|A| = 5$. The matrix $B$ is obtained from $A$ by adding $2$ times the second row to the first row and then interchanging the second and third rows. Then $|B|$ equals",
    "options": [
      "$-5$",
      "$5$",
      "$-10$",
      "$10$"
    ],
    "answer": "Correct option: A) $-5$. Adding a multiple of one row to another does not change the determinant, and interchanging two rows changes its sign. So $|B| = -|A| = -5$. Option $5$ forgets the interchange."
  },
  {
    "id": "c12-det-r4-a04",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "mcq",
    "complexity": "hard",
    "marks": 1,
    "text": "If $\\begin{vmatrix} a & b & c \\\\ p & q & r \\\\ x & y & z \\end{vmatrix} = 5$, then $\\begin{vmatrix} a+p & b+q & c+r \\\\ p & q & r \\\\ 3x & 3y & 3z \\end{vmatrix}$ equals",
    "options": [
      "$15$",
      "$5$",
      "$-15$",
      "$20$"
    ],
    "answer": "Correct option: A) $15$. Apply $R_1 \\to R_1 - R_2$, which leaves the value unchanged and turns the first row into $a, b, c$. Then take the common factor $3$ out of the third row, giving $3 \\times 5 = 15$. Option $20$ wrongly adds the extra row."
  },
  {
    "id": "c12-det-r4-a05",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): $\\begin{vmatrix} 101 & 102 & 103 \\\\ 104 & 105 & 106 \\\\ 107 & 108 & 109 \\end{vmatrix} = 0$.\nReason (R): The value of a determinant is unchanged by $R_i \\to R_i + kR_j$, and a determinant with two identical rows is zero.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "answer": "Correct option: A) Both are true and R explains A. Apply $R_3 \\to R_3 - R_2$ and then $R_2 \\to R_2 - R_1$. Both new rows become $3, 3, 3$, so two rows are identical and the determinant is $0$, using exactly the two facts in R."
  },
  {
    "id": "c12-det-r4-a06",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The value of $\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 2 & 4 \\end{vmatrix}$ is",
    "options": [
      "$-6$",
      "$6$",
      "$0$",
      "$-12$"
    ],
    "answer": "Correct option: A) $-6$. Expanding along the first row: $1(-4 - 2) - 1(4 - 1) + 1(2 + 1) = -6 - 3 + 3 = -6$. (It is the determinant with rows $1, x, x^{2}$ for $x = 1, -1, 2$, equal to $(y-x)(z-x)(z-y) = -6$.) Option $6$ is the sign-reversed value."
  },
  {
    "id": "c12-det-r4-a07",
    "chapter": "Determinants",
    "topic": "Minors, cofactors and adjoint",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "For $A = \\begin{bmatrix} 2 & -1 & 4 \\\\ 3 & 0 & -2 \\\\ 1 & 5 & 6 \\end{bmatrix}$, let $A_{23}$ be the cofactor of the element $a_{23}$. Then $A_{23}$ equals",
    "options": [
      "$-11$",
      "$11$",
      "$-9$",
      "$9$"
    ],
    "answer": "Correct option: A) $-11$. The minor $M_{23} = \\begin{vmatrix} 2 & -1 \\\\ 1 & 5 \\end{vmatrix} = 10 + 1 = 11$, and the sign factor is $(-1)^{2+3} = -1$, so $A_{23} = -11$. Option $11$ is the minor without its sign."
  },
  {
    "id": "c12-det-r4-a08",
    "chapter": "Determinants",
    "topic": "Minors, cofactors and adjoint",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $A = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 5 \\end{bmatrix}$, the sum of the diagonal elements of $\\text{adj } A$ is",
    "options": [
      "$31$",
      "$30$",
      "$10$",
      "$15$"
    ],
    "answer": "Correct option: A) $31$. $\\text{adj } A$ is diagonal with entries equal to the cofactors $3\\cdot5 = 15$, $2\\cdot5 = 10$ and $2\\cdot3 = 6$, so the sum is $31$. Option $30$ is $|A|$ and $10$ is the sum of the diagonal of $A$."
  },
  {
    "id": "c12-det-r4-a09",
    "chapter": "Determinants",
    "topic": "Minors, cofactors and adjoint",
    "type": "assertion_reason",
    "complexity": "easy",
    "marks": 1,
    "text": "Assertion (A): If $A$ is a $3 \\times 3$ matrix with $|A| = 0$, then $A(\\text{adj } A)$ is the null matrix.\nReason (R): For a square matrix $A$ of order $n$, $A(\\text{adj } A) = |A|\\,I$.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "answer": "Correct option: A) Both are true and R explains A. Putting $|A| = 0$ in R gives $A(\\text{adj } A) = 0\\cdot I = O$, which is the assertion."
  },
  {
    "id": "c12-det-r4-a10",
    "chapter": "Determinants",
    "topic": "Minors, cofactors and adjoint",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The matrix of cofactors of $A = \\begin{bmatrix} 2 & 3 \\\\ -1 & 4 \\end{bmatrix}$ is",
    "options": [
      "$\\begin{bmatrix} 4 & 1 \\\\ -3 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 4 & -3 \\\\ 1 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 4 & -1 \\\\ 3 & 2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & -3 \\\\ 1 & 4 \\end{bmatrix}$"
    ],
    "answer": "Correct option: A) $\\begin{bmatrix} 4 & 1 \\\\ -3 & 2 \\end{bmatrix}$. $A_{11} = 4$, $A_{12} = -(-1) = 1$, $A_{21} = -3$, $A_{22} = 2$. Option B is the adjoint, which is the transpose of the cofactor matrix, and option C is the matrix of minors."
  },
  {
    "id": "c12-det-r4-a11",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $A = \\begin{bmatrix} 1 & 3 & 0 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{bmatrix}$, the element in the first row and third column of $A^{-1}$ is",
    "options": [
      "$6$",
      "$-6$",
      "$-3$",
      "$0$"
    ],
    "answer": "Correct option: A) $6$. $|A| = 1$, and the $(1,3)$ entry of $A^{-1} = \\frac{1}{|A|}\\text{adj } A$ is the cofactor $A_{31} = \\begin{vmatrix} 3 & 0 \\\\ 1 & 2 \\end{vmatrix} = 6$. Option $-3$ is the $(1,2)$ entry."
  },
  {
    "id": "c12-det-r4-a12",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "A square matrix $A$ satisfies $A^{3} = I$. Then $A^{-1}$ equals",
    "options": [
      "$A^{2}$",
      "$A$",
      "$-A^{2}$",
      "$A^{3} + A$"
    ],
    "answer": "Correct option: A) $A^{2}$. From $A\\cdot A^{2} = A^{3} = I$, the matrix $A^{2}$ is the inverse of $A$. Option $A^{3} + A$ equals $I + A$, which is not $A^{-1}$."
  },
  {
    "id": "c12-det-r4-a13",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$, the matrix $(3A)^{-1}$ is",
    "options": [
      "$\\frac{1}{3}\\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$",
      "$3\\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$",
      "$\\frac{1}{3}\\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$"
    ],
    "answer": "Correct option: A) $\\frac{1}{3}\\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$. $(kA)^{-1} = \\frac{1}{k}A^{-1}$. Since $|A| = 1$, $A^{-1} = \\text{adj } A = \\begin{bmatrix} 1 & -1 \\\\ -1 & 2 \\end{bmatrix}$, so $(3A)^{-1} = \\frac{1}{3}A^{-1}$. Option B multiplies by $3$ instead of dividing."
  },
  {
    "id": "c12-det-r4-a14",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$A$ is a square matrix of order $3$ with $|A| = 7$, and $P$ is an invertible matrix of order $3$. If $B = PAP^{-1}$, then $|B|$ equals",
    "options": [
      "$7$",
      "$1$",
      "$49$",
      "$\\frac{1}{7}$"
    ],
    "answer": "Correct option: A) $7$. $|B| = |P|\\,|A|\\,|P^{-1}| = |A|\\cdot|P|\\cdot\\frac{1}{|P|} = 7$."
  },
  {
    "id": "c12-det-r4-a15",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The matrix $\\begin{bmatrix} k & 2 \\\\ 8 & k \\end{bmatrix}$ has no inverse when $k$ equals",
    "options": [
      "$\\pm 4$",
      "$4$",
      "$16$",
      "$\\pm 16$"
    ],
    "answer": "Correct option: A) $\\pm 4$. There is no inverse when the determinant is zero: $k^{2} - 16 = 0$, so $k = \\pm 4$. Option $4$ misses the negative root."
  },
  {
    "id": "c12-det-r4-a16",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the triangle with vertices $(-3, 1)$, $(2, -4)$ and $(5, 2)$, in square units, is",
    "options": [
      "$\\frac{45}{2}$",
      "$45$",
      "$-\\frac{45}{2}$",
      "$\\frac{45}{4}$"
    ],
    "answer": "Correct option: A) $\\frac{45}{2}$. Area $= \\frac{1}{2}\\left|\\begin{vmatrix} -3 & 1 & 1 \\\\ 2 & -4 & 1 \\\\ 5 & 2 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|18 + 3 + 24| = \\frac{45}{2}$. Option $45$ forgets the factor $\\frac{1}{2}$, and an area is never negative."
  },
  {
    "id": "c12-det-r4-a17",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): The triangle with vertices $(1, 2)$, $(3, 6)$ and $(5, 10)$ has zero area.\nReason (R): Three points are collinear exactly when the determinant formed by their coordinates, with a column of $1$s, is zero.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "answer": "Correct option: A) Both are true and R explains A. The determinant $\\begin{vmatrix} 1 & 2 & 1 \\\\ 3 & 6 & 1 \\\\ 5 & 10 & 1 \\end{vmatrix}$ is $0$ (each point is $2$ units up for every $1$ across), so the points are collinear and the area is zero, exactly as R says."
  },
  {
    "id": "c12-det-r4-a18",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area of the triangle with vertices $(a, b + c)$, $(b, c + a)$ and $(c, a + b)$ is",
    "options": [
      "$0$",
      "$ab + bc + ca$",
      "$\\frac{1}{2}(a + b + c)$",
      "$abc$"
    ],
    "answer": "Correct option: A) $0$. Add the second column to the first column ($C_1 \\to C_1 + C_2$ in the determinant with a column of $1$s): the first column becomes $a + b + c$ in every row, which is a common factor times a column of $1$s equal to the third column, so the determinant is $0$. The three points lie on the line $x + y = a + b + c$."
  },
  {
    "id": "c12-det-r4-a19",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The system $x + y = 5$, $y + z = 7$, $x + z = 6$ is written as $AX = B$ and solved by $X = A^{-1}B$. The value of $z$ is",
    "options": [
      "$4$",
      "$3$",
      "$2$",
      "$9$"
    ],
    "answer": "Correct option: A) $4$. Here $|A| = 2 \\neq 0$ so $X = A^{-1}B$ exists, and solving gives $x = 2$, $y = 3$, $z = 4$ (adding all three equations gives $x + y + z = 9$, and $z = 9 - 5$). Option $9$ is $x + y + z$."
  },
  {
    "id": "c12-det-r4-a20",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "If $A^{-1} = \\begin{bmatrix} 2 & -1 & 0 \\\\ 0 & 1 & -1 \\\\ 1 & 0 & 1 \\end{bmatrix}$, then the solution $(x, y, z)$ of $AX = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$ satisfies $x + y + z =$",
    "options": [
      "$3$",
      "$7$",
      "$4$",
      "$1$"
    ],
    "answer": "Correct option: A) $3$. $X = A^{-1}B = \\begin{bmatrix} 0 \\\\ -1 \\\\ 4 \\end{bmatrix}$, so $x + y + z = 0 - 1 + 4 = 3$. Using $(A^{-1})^{T}$ by mistake gives $x + y + z = 7$."
  },
  {
    "id": "c12-det-r4-b01",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Using properties of determinants, and without expanding, show that $\\begin{vmatrix} a & b & c \\\\ a+2x & b+2y & c+2z \\\\ x & y & z \\end{vmatrix} = 0$.",
    "answer": "Apply $R_2 \\to R_2 - 2R_3$. This does not change the value of the determinant, and the second row becomes $a, b, c$. Now the first and second rows are identical, so the determinant is $0$.",
    "steps": [
      {
        "step": "Apply $R_2 \\to R_2 - 2R_3$ (value unchanged) and get the second row $a, b, c$",
        "marks": 1
      },
      {
        "step": "Two identical rows, so the determinant is zero",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-b02",
    "chapter": "Determinants",
    "topic": "Minors, cofactors and adjoint",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "For $A = \\begin{bmatrix} x & 2 & 3 \\\\ 1 & 0 & 4 \\\\ 2 & -1 & 1 \\end{bmatrix}$, the cofactor of the element $a_{22}$ is $5$. Find $x$ and the minor $M_{13}$.",
    "answer": "$A_{22} = (+1)\\begin{vmatrix} x & 3 \\\\ 2 & 1 \\end{vmatrix} = x - 6$. Setting $x - 6 = 5$ gives $x = 11$. The minor $M_{13} = \\begin{vmatrix} 1 & 0 \\\\ 2 & -1 \\end{vmatrix} = -1 - 0 = -1$.",
    "steps": [
      {
        "step": "Cofactor $A_{22} = x - 6$ and $x = 11$",
        "marks": 1
      },
      {
        "step": "Minor $M_{13} = -1$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-b03",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Let $A = \\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$ and $C = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$. Find the matrix $X$ such that $XA = C$.",
    "answer": "$|A| = 6 - 5 = 1$, so $A^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$. Since $A$ multiplies $X$ on the right, post-multiply by $A^{-1}$: $X = CA^{-1} = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}=\\begin{bmatrix} -1 & 1 \\\\ -7 & 5 \\end{bmatrix}$.",
    "steps": [
      {
        "step": "Find $|A| = 1$ and $A^{-1}$",
        "marks": 1
      },
      {
        "step": "Use $X = CA^{-1}$ (post-multiplication) and multiply to get $X$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-b04",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "short",
    "complexity": "easy",
    "marks": 2,
    "text": "The vertices of a triangle are $A(1, 2)$, $B(4, 6)$ and $C(t, 0)$, where $C$ lies on the $x$-axis. Using determinants, find the possible coordinates of $C$ if the area is $10$ square units.",
    "answer": "Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 1 & 2 & 1 \\\\ 4 & 6 & 1 \\\\ t & 0 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|1(6) - 2(4 - t) + 1(0 - 6t)| = \\frac{1}{2}|-2 - 4t| = |1 + 2t|$. Setting $|1 + 2t| = 10$ gives $t = \\frac{9}{2}$ or $t = -\\frac{11}{2}$. So $C$ is $\\left(\\frac{9}{2}, 0\\right)$ or $\\left(-\\frac{11}{2}, 0\\right)$.",
    "steps": [
      {
        "step": "Write the area determinant and simplify to $|1 + 2t|$",
        "marks": 1
      },
      {
        "step": "Solve $1 + 2t = \\pm 10$ and give both points",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-b05",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Five years ago a father's age was $7$ times his son's age. Five years from now the father's age will be $3$ times the son's age. Using the matrix method, find their present ages.",
    "answer": "Let the son be $s$ and the father $f$ years old now. Then $f - 5 = 7(s - 5)$ and $f + 5 = 3(s + 5)$, i.e. $7s - f = 30$ and $3s - f = -10$. With $A = \\begin{bmatrix} 7 & -1 \\\\ 3 & -1 \\end{bmatrix}$, $|A| = -4 \\neq 0$ and $A^{-1} = -\\frac{1}{4}\\begin{bmatrix} -1 & 1 \\\\ -3 & 7 \\end{bmatrix}$. So $\\begin{bmatrix} s \\\\ f \\end{bmatrix} = A^{-1}\\begin{bmatrix} 30 \\\\ -10 \\end{bmatrix}=\\begin{bmatrix} 10 \\\\ 40 \\end{bmatrix}$. The son is $10$ years old and the father is $40$.",
    "steps": [
      {
        "step": "Form the two equations and write $AX = B$",
        "marks": 1
      },
      {
        "step": "Find $A^{-1}$, compute $X$, and state the ages $10$ and $40$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-b06",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "If $A$ and $B$ are invertible matrices of the same order, prove that $(AB)^{-1} = B^{-1}A^{-1}$.",
    "answer": "$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$. Similarly $(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = I$. Since the inverse of a matrix is unique, $(AB)^{-1} = B^{-1}A^{-1}$.",
    "steps": [
      {
        "step": "Show $(AB)(B^{-1}A^{-1}) = I$ using associativity",
        "marks": 1
      },
      {
        "step": "Show the product in the other order is $I$ too and conclude by uniqueness of the inverse",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c01",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Using properties of determinants, prove that $\\begin{vmatrix} 1 & a & bc \\\\ 1 & b & ca \\\\ 1 & c & ab \\end{vmatrix} = (a - b)(b - c)(c - a)$.",
    "answer": "Apply $R_1 \\to R_1 - R_2$ and $R_2 \\to R_2 - R_3$. The first row becomes $0,\\ a - b,\\ c(b - a) = -c(a - b)$ and the second row becomes $0,\\ b - c,\\ a(c - b) = -a(b - c)$, so the determinant is $\\begin{vmatrix} 0 & a-b & -c(a-b) \\\\ 0 & b-c & -a(b-c) \\\\ 1 & c & ab \\end{vmatrix}$. Expand along the first column (only the $1$ in row $3$ survives, with sign $+$): $(a - b)\\cdot(-a)(b - c) - (b - c)\\cdot(-c)(a - b) = (a - b)(b - c)(c - a)$.",
    "steps": [
      {
        "step": "Apply $R_1 \\to R_1 - R_2$ and $R_2 \\to R_2 - R_3$ and simplify the entries to $-c(a - b)$ and $-a(b - c)$",
        "marks": 1
      },
      {
        "step": "Expand along the first column using the single non-zero entry $1$",
        "marks": 1
      },
      {
        "step": "Simplify to $(a - b)(b - c)(c - a)$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c02",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Solve for $x$: $\\begin{vmatrix} x+1 & 2 & 3 \\\\ 1 & x+2 & 3 \\\\ 1 & 2 & x+3 \\end{vmatrix} = 0$.",
    "answer": "Every row adds to $x + 6$. Apply $C_1 \\to C_1 + C_2 + C_3$ and take out the common factor $(x + 6)$: the determinant is $(x + 6)\\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & x+2 & 3 \\\\ 1 & 2 & x+3 \\end{vmatrix}$. Apply $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$ to get $(x + 6)\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & x & 0 \\\\ 0 & 0 & x \\end{vmatrix} = (x + 6)x^{2}$. So $x^{2}(x + 6) = 0$ gives $x = 0$ or $x = -6$.",
    "steps": [
      {
        "step": "Apply $C_1 \\to C_1 + C_2 + C_3$ and take out $(x + 6)$",
        "marks": 1
      },
      {
        "step": "Reduce to the triangular form giving $x^{2}(x + 6)$",
        "marks": 1
      },
      {
        "step": "Solve to get $x = 0$ or $x = -6$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c03",
    "chapter": "Determinants",
    "topic": "Minors, cofactors and adjoint",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "For $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 3 & 4 & 1 \\end{bmatrix}$, find $\\text{adj } A$. Hence write $A^{-1}$.",
    "answer": "$|A| = 1$. The cofactors are $A_{11} = 1$, $A_{12} = -(2 - 0) = -2$, $A_{13} = 8 - 3 = 5$, $A_{21} = -(0 - 0) = 0$, $A_{22} = 1$, $A_{23} = -(4 - 0) = -4$, $A_{31} = 0$, $A_{32} = -(0 - 0) = 0$, $A_{33} = 1$. The adjoint is the transpose of the cofactor matrix: $\\text{adj } A = \\begin{bmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 5 & -4 & 1 \\end{bmatrix}$. Since $|A| = 1$, $A^{-1} = \\text{adj } A$.",
    "steps": [
      {
        "step": "Find $|A| = 1$ and the nine cofactors correctly with signs",
        "marks": 1
      },
      {
        "step": "Transpose to write $\\text{adj } A$",
        "marks": 1
      },
      {
        "step": "Use $A^{-1} = \\frac{1}{|A|}\\text{adj } A$ to state $A^{-1}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c04",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "The matrix $A = \\begin{bmatrix} 2 & 3 \\\\ k & -2 \\end{bmatrix}$ satisfies $A^{2} = I$. Find $k$. Hence write $A^{-1}$ and find $|A|$.",
    "answer": "$A^{2} = \\begin{bmatrix} 4+3k & 0 \\\\ 0 & 3k+4 \\end{bmatrix} = (3k + 4)I$. Setting this equal to $I$ gives $3k + 4 = 1$, so $k = -1$. Since $A\\cdot A = I$, $A^{-1} = A = \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix}$. Also $|A| = -4 - 3k = -4 + 3 = -1$.",
    "steps": [
      {
        "step": "Compute $A^{2} = (3k + 4)I$ and solve for $k = -1$",
        "marks": 1
      },
      {
        "step": "Use $A^{2} = I$ to say $A^{-1} = A$ and write it",
        "marks": 1
      },
      {
        "step": "Find $|A| = -1$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c05",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Let $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 0 \\\\ 2 & 5 \\end{bmatrix}$ and $C = \\begin{bmatrix} 3 & 7 \\\\ 3 & 9 \\end{bmatrix}$. Find the matrix $X$ such that $AX + B = C$.",
    "answer": "$AX = C - B = \\begin{bmatrix} 2 & 7 \\\\ 1 & 4 \\end{bmatrix}$. $|A| = 4 - 3 = 1$, so $A^{-1} = \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}$. Then $X = A^{-1}(C - B) = \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}\\begin{bmatrix} 2 & 7 \\\\ 1 & 4 \\end{bmatrix}=\\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}$.",
    "steps": [
      {
        "step": "Rewrite as $AX = C - B$ and compute $C - B$",
        "marks": 1
      },
      {
        "step": "Find $A^{-1}$",
        "marks": 1
      },
      {
        "step": "Compute $X = A^{-1}(C - B)$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c06",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "The area of the triangle with vertices $(k, -k)$, $(1, 3)$ and $(-2, 0)$ is $9$ square units. Using determinants, find all possible values of $k$.",
    "answer": "Area $= \\frac{1}{2}\\left|\\begin{vmatrix} k & -k & 1 \\\\ 1 & 3 & 1 \\\\ -2 & 0 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|k(3 - 0) + k(1 + 2) + 1(0 + 6)| = \\frac{1}{2}|6k + 6| = 3|k + 1|$. So $3|k + 1| = 9$, i.e. $k + 1 = \\pm 3$, giving $k = 2$ or $k = -4$.",
    "steps": [
      {
        "step": "Write the area determinant",
        "marks": 1
      },
      {
        "step": "Expand to get $3|k + 1|$",
        "marks": 1
      },
      {
        "step": "Solve $k + 1 = \\pm 3$ for both values",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c07",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A straight road passes through the points $(2, 3)$ and $(6, 11)$ on a map. Using determinants, find the coordinates of the point where it meets the $x$-axis.",
    "answer": "Let the point be $(a, 0)$. The three points are collinear, so $\\begin{vmatrix} 2 & 3 & 1 \\\\ 6 & 11 & 1 \\\\ a & 0 & 1 \\end{vmatrix} = 0$. Expanding: $2(11 - 0) - 3(6 - a) + 1(0 - 11a) = 22 - 18 + 3a - 11a = 4 - 8a = 0$, so $a = \\frac{1}{2}$. The road meets the $x$-axis at $\\left(\\frac{1}{2}, 0\\right)$.",
    "steps": [
      {
        "step": "Use collinearity of $(2,3)$, $(6,11)$ and $(a,0)$: determinant equals zero",
        "marks": 1
      },
      {
        "step": "Expand the determinant correctly",
        "marks": 1
      },
      {
        "step": "Solve to get $a = \\frac{1}{2}$ and state the point",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c08",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A chemist wants $20$ litres of acid solution of $42\\%$ strength by mixing a $30\\%$ solution with a $50\\%$ solution. Let $x$ and $y$ be the litres of the $30\\%$ and $50\\%$ solutions used. Form two equations and, using the matrix method, find $x$ and $y$.",
    "answer": "The volumes give $x + y = 20$, and the acid gives $0.30x + 0.50y = 0.42 \\times 20 = 8.4$, i.e. $3x + 5y = 84$. With $A = \\begin{bmatrix} 1 & 1 \\\\ 3 & 5 \\end{bmatrix}$, $|A| = 2$ and $A^{-1} = \\frac{1}{2}\\begin{bmatrix} 5 & -1 \\\\ -3 & 1 \\end{bmatrix}$. Then $X = A^{-1}\\begin{bmatrix} 20 \\\\ 84 \\end{bmatrix} = \\frac{1}{2}\\begin{bmatrix} 16 \\\\ 24 \\end{bmatrix}=\\begin{bmatrix} 8 \\\\ 12 \\end{bmatrix}$. So $8$ litres of the $30\\%$ solution and $12$ litres of the $50\\%$ solution are needed.",
    "steps": [
      {
        "step": "Form $x + y = 20$ and $3x + 5y = 84$",
        "marks": 1
      },
      {
        "step": "Find $|A|$ and $A^{-1}$",
        "marks": 1
      },
      {
        "step": "Compute $X = A^{-1}B$ and state $x = 8$, $y = 12$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c09",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "A tailor has $48$ metres of cloth and $52$ hours of labour. A shirt needs $2$ metres of cloth and $3$ hours of labour; a pair of trousers needs $3$ metres of cloth and $2$ hours. If all the cloth and labour are used up, find, by the matrix method, how many shirts and how many pairs of trousers are made.",
    "answer": "Let $x$ shirts and $y$ trousers be made. Cloth: $2x + 3y = 48$; labour: $3x + 2y = 52$. With $A = \\begin{bmatrix} 2 & 3 \\\\ 3 & 2 \\end{bmatrix}$, $|A| = 4 - 9 = -5$ and $A^{-1} = -\\frac{1}{5}\\begin{bmatrix} 2 & -3 \\\\ -3 & 2 \\end{bmatrix}$. Then $X = A^{-1}\\begin{bmatrix} 48 \\\\ 52 \\end{bmatrix} = -\\frac{1}{5}\\begin{bmatrix} -60 \\\\ -40 \\end{bmatrix}=\\begin{bmatrix} 12 \\\\ 8 \\end{bmatrix}$. So $12$ shirts and $8$ pairs of trousers are made.",
    "steps": [
      {
        "step": "Form $2x + 3y = 48$ and $3x + 2y = 52$",
        "marks": 1
      },
      {
        "step": "Find $|A| = -5$ and $A^{-1}$",
        "marks": 1
      },
      {
        "step": "Compute $X$: $12$ shirts and $8$ pairs of trousers",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-c10",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Let $A = \\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & 1 & -1 \\\\ 1 & 0 & 1 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 1 & 1 \\\\ -1 & 1 & 1 \\\\ -1 & -1 & 1 \\end{bmatrix}$. Find $AB$ and hence solve the system $x - y = 4$, $y - z = 1$, $x + z = 7$.",
    "answer": "$AB = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} = 2I$, so $A^{-1} = \\frac{1}{2}B$. The system is $AX = \\begin{bmatrix} 4 \\\\ 1 \\\\ 7 \\end{bmatrix}$, so $X = A^{-1}\\begin{bmatrix} 4 \\\\ 1 \\\\ 7 \\end{bmatrix} = \\frac{1}{2}\\begin{bmatrix} 12 \\\\ 4 \\\\ 2 \\end{bmatrix}=\\begin{bmatrix} 6 \\\\ 2 \\\\ 1 \\end{bmatrix}$. Hence $x = 6$, $y = 2$, $z = 1$.",
    "steps": [
      {
        "step": "Multiply to get $AB = 2I$",
        "marks": 1
      },
      {
        "step": "Deduce $A^{-1} = \\frac{1}{2}B$ and write the system as $AX = C$",
        "marks": 1
      },
      {
        "step": "Compute $X = A^{-1}C$: $x = 6$, $y = 2$, $z = 1$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d01",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "Find $A^{-1}$ for $A = \\begin{bmatrix} -2 & -1 & 3 \\\\ 2 & 4 & -1 \\\\ 1 & -1 & -3 \\end{bmatrix}$. Hence solve the system $-2x - y + 3z = -7$, $2x + 4y - z = 11$, $x - y - 3z = 2$.",
    "answer": "$|A| = -2(-12 - 1) - (-1)(-6 + 1) + 3(-2 - 4) = 26 - 5 - 18 = 3 \\neq 0$. Cofactors: $A_{11} = -13$, $A_{12} = 5$, $A_{13} = -6$, $A_{21} = -6$, $A_{22} = 3$, $A_{23} = -3$, $A_{31} = -11$, $A_{32} = 4$, $A_{33} = -6$. So $\\text{adj } A = \\begin{bmatrix} -13 & -6 & -11 \\\\ 5 & 3 & 4 \\\\ -6 & -3 & -6 \\end{bmatrix}$ and $A^{-1} = \\frac{1}{3}\\text{adj } A$. The system is $AX = \\begin{bmatrix} -7 \\\\ 11 \\\\ 2 \\end{bmatrix}$, so $X = \\frac{1}{3}\\begin{bmatrix} -13 & -6 & -11 \\\\ 5 & 3 & 4 \\\\ -6 & -3 & -6 \\end{bmatrix}\\begin{bmatrix} -7 \\\\ 11 \\\\ 2 \\end{bmatrix} = \\frac{1}{3}\\begin{bmatrix} 3 \\\\ 6 \\\\ -3 \\end{bmatrix}=\\begin{bmatrix} 1 \\\\ 2 \\\\ -1 \\end{bmatrix}$. Hence $x = 1$, $y = 2$, $z = -1$.",
    "steps": [
      {
        "step": "Find $|A| = 3$ and note that $A$ is invertible",
        "marks": 1
      },
      {
        "step": "Find all nine cofactors with correct signs",
        "marks": 2
      },
      {
        "step": "Write $\\text{adj } A$ and $A^{-1}$",
        "marks": 1
      },
      {
        "step": "Write $AX = B$, compute $X = A^{-1}B$ and state $x, y, z$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d02",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "On three days a household recorded how long each appliance ran and the total electricity used. Let the fan, a tube-light and a geyser use $f$, $t$ and $g$ watt-hours per hour of running. Day 1: fan $7$ h, tube-light $6$ h, geyser $2$ h, total $3765$ Wh. Day 2: fan $3$ h, tube-light $5$ h, geyser $2$ h, total $3425$ Wh. Day 3: fan $5$ h, tube-light $4$ h, geyser $1$ h, total $2035$ Wh. Using the matrix method, find $f$, $t$ and $g$. Hence find the energy used on a day when the fan runs $4$ h, the tube-light $8$ h and the geyser $1$ h.",
    "answer": "The equations are $7f + 6t + 2g = 3765$, $3f + 5t + 2g = 3425$, $5f + 4t + g = 2035$, so $A = \\begin{bmatrix} 7 & 6 & 2 \\\\ 3 & 5 & 2 \\\\ 5 & 4 & 1 \\end{bmatrix}$, $|A| = 7(5 - 8) - 6(3 - 10) + 2(12 - 25) = -21 + 42 - 26 = -5 \\neq 0$. Cofactors: $A_{11} = -3$, $A_{12} = 7$, $A_{13} = -13$, $A_{21} = 2$, $A_{22} = -3$, $A_{23} = 2$, $A_{31} = 2$, $A_{32} = -8$, $A_{33} = 17$, so $\\text{adj } A = \\begin{bmatrix} -3 & 2 & 2 \\\\ 7 & -3 & -8 \\\\ -13 & 2 & 17 \\end{bmatrix}$ and $A^{-1} = -\\frac{1}{5}\\text{adj } A$. Then $X = -\\frac{1}{5}\\text{adj } A\\begin{bmatrix} 3765 \\\\ 3425 \\\\ 2035 \\end{bmatrix} = -\\frac{1}{5}\\begin{bmatrix} -375 \\\\ -200 \\\\ -7500 \\end{bmatrix}=\\begin{bmatrix} 75 \\\\ 40 \\\\ 1500 \\end{bmatrix}$. So the fan uses $75$ W, the tube-light $40$ W and the geyser $1500$ W. Energy on the new day: $4(75) + 8(40) + 1(1500) = 300 + 320 + 1500 = 2120$ Wh.",
    "steps": [
      {
        "step": "Form the three equations and write $AX = B$",
        "marks": 1
      },
      {
        "step": "Find $|A| = -5$",
        "marks": 1
      },
      {
        "step": "Find the cofactors and $\\text{adj } A$",
        "marks": 1
      },
      {
        "step": "Compute $X = A^{-1}B$ to get $f = 75$, $t = 40$, $g = 1500$",
        "marks": 1
      },
      {
        "step": "Find the energy $2120$ Wh for the new day",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d03",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "The sum of the ages of three friends Aman, Bela and Chirag is $45$ years. Five years ago Aman's age was equal to the sum of the ages of Bela and Chirag at that time. Bela is $3$ years older than Chirag. Let their present ages be $x$, $y$ and $z$ years. Using the matrix method, find $x$, $y$ and $z$.",
    "answer": "The conditions give $x + y + z = 45$; $x - 5 = (y - 5) + (z - 5)$, i.e. $x - y - z = -5$; and $y - z = 3$. So $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 0 & 1 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} 45 \\\\ -5 \\\\ 3 \\end{bmatrix}$. $|A| = 1(1 + 1) - 1(-1 - 0) + 1(1 - 0) = 4 \\neq 0$. Cofactors: $A_{11} = 2$, $A_{12} = 1$, $A_{13} = 1$, $A_{21} = 2$, $A_{22} = -1$, $A_{23} = -1$, $A_{31} = 0$, $A_{32} = 2$, $A_{33} = -2$, so $\\text{adj } A = \\begin{bmatrix} 2 & 2 & 0 \\\\ 1 & -1 & 2 \\\\ 1 & -1 & -2 \\end{bmatrix}$. Then $X = \\frac{1}{4}\\begin{bmatrix} 2 & 2 & 0 \\\\ 1 & -1 & 2 \\\\ 1 & -1 & -2 \\end{bmatrix}\\begin{bmatrix} 45 \\\\ -5 \\\\ 3 \\end{bmatrix} = \\frac{1}{4}\\begin{bmatrix} 80 \\\\ 56 \\\\ 44 \\end{bmatrix}=\\begin{bmatrix} 20 \\\\ 14 \\\\ 11 \\end{bmatrix}$. Aman is $20$, Bela $14$ and Chirag $11$ years old. Check: five years ago the ages were $15$, $9$, $6$ and $15 = 9 + 6$.",
    "steps": [
      {
        "step": "Form the three equations correctly, especially $x - y - z = -5$",
        "marks": 1
      },
      {
        "step": "Write $AX = B$ and find $|A| = 4$",
        "marks": 1
      },
      {
        "step": "Find the cofactors and $\\text{adj } A$",
        "marks": 1
      },
      {
        "step": "Compute $X = A^{-1}B$",
        "marks": 1
      },
      {
        "step": "State the ages $20$, $14$, $11$ and verify",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d04",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "A park is a pentagon $ABCDE$ with corners (in order, in metres on a map) $A(0, 0)$, $B(6, 1)$, $C(8, 5)$, $D(4, 8)$ and $E(-1, 4)$. Using determinants, find its area by splitting it into the triangles $ABC$, $ACD$ and $ADE$. Hence find the cost of laying turf over the whole park at $₹30$ per square metre.",
    "answer": "Triangle $ABC$: $\\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 6 & 1 & 1 \\\\ 8 & 5 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|30 - 8| = 11$. Triangle $ACD$: $\\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 8 & 5 & 1 \\\\ 4 & 8 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|64 - 20| = 22$. Triangle $ADE$: $\\frac{1}{2}\\left|\\begin{vmatrix} 0 & 0 & 1 \\\\ 4 & 8 & 1 \\\\ -1 & 4 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|16 + 8| = 12$. The pentagon is convex, so the three triangles fit together without overlap and the area is $11 + 22 + 12 = 45$ square metres. The turf costs $45 \\times 30 = ₹1,350$.",
    "steps": [
      {
        "step": "Split into the three triangles from $A$",
        "marks": 1
      },
      {
        "step": "Area of $ABC$ and $ACD$ by determinants ($11$ and $22$)",
        "marks": 2
      },
      {
        "step": "Area of $ADE$ $= 12$",
        "marks": 1
      },
      {
        "step": "Total area $45$ m$^{2}$ and cost $₹1,350$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d05",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Let $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 3 \\\\ 1 & 1 & 2 \\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 0 \\\\ -1 & 3 \\\\ 0 & 1 \\end{bmatrix}$. Find $A^{-1}$ and use it to find the matrix $X$ with $AX = B$. Hence solve the system $x + 2y + z = 5$, $2x + y + 3z = -1$, $x + y + 2z = 0$.",
    "answer": "$|A| = 1(2 - 3) - 2(4 - 3) + 1(2 - 1) = -1 - 2 + 1 = -2 \\neq 0$. Cofactors: $A_{11} = -1$, $A_{12} = -1$, $A_{13} = 1$, $A_{21} = -3$, $A_{22} = 1$, $A_{23} = 1$, $A_{31} = 5$, $A_{32} = -1$, $A_{33} = -3$. So $A^{-1} = -\\frac{1}{2}\\begin{bmatrix} -1 & -3 & 5 \\\\ -1 & 1 & -1 \\\\ 1 & 1 & -3 \\end{bmatrix}$. Then $X = A^{-1}B = -\\frac{1}{2}\\begin{bmatrix} -2 & -4 \\\\ -6 & 2 \\\\ 4 & 0 \\end{bmatrix}=\\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\\\ -2 & 0 \\end{bmatrix}$. The given system is $AX_{1} = \\begin{bmatrix} 5 \\\\ -1 \\\\ 0 \\end{bmatrix}$, the first column of $B$, so its solution is the first column of $X$: $x = 1$, $y = 3$, $z = -2$.",
    "steps": [
      {
        "step": "Find $|A| = -2$",
        "marks": 1
      },
      {
        "step": "Find the cofactors and $A^{-1}$",
        "marks": 2
      },
      {
        "step": "Compute $X = A^{-1}B$ column by column",
        "marks": 1
      },
      {
        "step": "Identify the system with the first column of $B$ and state $x = 1$, $y = 3$, $z = -2$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d06",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Let $A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & 1 & 3 \\\\ 1 & 0 & 1 \\end{bmatrix}$. Find $A^{-1}$. Using it, find $(A^{2})^{-1}$, and verify your answer by checking that the first row of $A^{2}$ multiplied by $(A^{2})^{-1}$ gives the first row of $I$.",
    "answer": "$|A| = 2(1 - 0) - 1(0 - 3) + 0 = 5$. Cofactors: $A_{11} = 1$, $A_{12} = 3$, $A_{13} = -1$, $A_{21} = -1$, $A_{22} = 2$, $A_{23} = 1$, $A_{31} = 3$, $A_{32} = -6$, $A_{33} = 2$, so $A^{-1} = \\frac{1}{5}\\begin{bmatrix} 1 & -1 & 3 \\\\ 3 & 2 & -6 \\\\ -1 & 1 & 2 \\end{bmatrix}$. Since $(A^{2})^{-1} = (A^{-1})^{2}$, multiplying gives $(A^{2})^{-1} = \\frac{1}{25}\\begin{bmatrix} -5 & 0 & 15 \\\\ 15 & -5 & -15 \\\\ 0 & 5 & -5 \\end{bmatrix}=\\begin{bmatrix} -\\frac{1}{5} & 0 & \\frac{3}{5} \\\\ \\frac{3}{5} & -\\frac{1}{5} & -\\frac{3}{5} \\\\ 0 & \\frac{1}{5} & -\\frac{1}{5} \\end{bmatrix}$. Also $A^{2} = \\begin{bmatrix} 4 & 3 & 3 \\\\ 3 & 1 & 6 \\\\ 3 & 1 & 1 \\end{bmatrix}$. Its first row $[4, 3, 3]$ times the columns of $(A^{2})^{-1}$ gives $-\\frac{4}{5} + \\frac{9}{5} = 1$, $-\\frac{3}{5} + \\frac{3}{5} = 0$ and $\\frac{12}{5} - \\frac{9}{5} - \\frac{3}{5} = 0$, which is the first row $[1, 0, 0]$ of $I$.",
    "steps": [
      {
        "step": "Find $|A| = 5$ and the cofactors",
        "marks": 1
      },
      {
        "step": "Write $A^{-1}$",
        "marks": 1
      },
      {
        "step": "Use $(A^{2})^{-1} = (A^{-1})^{2}$ and multiply",
        "marks": 2
      },
      {
        "step": "Find $A^{2}$ and verify the first row of the product",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d07",
    "chapter": "Determinants",
    "topic": "Evaluating determinants",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using properties of determinants, prove that $\\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^3 & b^3 & c^3 \\end{vmatrix} = (a - b)(b - c)(c - a)(a + b + c)$. Hence evaluate $\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 8 & 27 \\end{vmatrix}$.",
    "answer": "Apply $C_1 \\to C_1 - C_2$ and $C_2 \\to C_2 - C_3$: the determinant becomes $\\begin{vmatrix} 0 & 0 & 1 \\\\ a-b & b-c & c \\\\ a^3-b^3 & b^3-c^3 & c^3 \\end{vmatrix}$. Expand along the first row (only the entry $1$ in position $(1,3)$, sign $+$): $(a - b)(b^{3} - c^{3}) - (b - c)(a^{3} - b^{3})$. Take out $(a - b)(b - c)$: $(a - b)(b - c)\\left[(b^{2} + bc + c^{2}) - (a^{2} + ab + b^{2})\\right] = (a - b)(b - c)\\left[bc + c^{2} - a^{2} - ab\\right]$. Now $bc + c^{2} - a^{2} - ab = (c - a)(c + a) + b(c - a) = (c - a)(a + b + c)$, which proves the result. For the numbers take $a = 1$, $b = 2$, $c = 3$: the determinant is $(1 - 2)(2 - 3)(3 - 1)(1 + 2 + 3) = (-1)(-1)(2)(6) = 12$.",
    "steps": [
      {
        "step": "Apply $C_1 \\to C_1 - C_2$ and $C_2 \\to C_2 - C_3$ to create zeros in the first row",
        "marks": 1
      },
      {
        "step": "Expand along the first row",
        "marks": 1
      },
      {
        "step": "Take out $(a - b)(b - c)$ using $x^{3} - y^{3}$ factorisation",
        "marks": 1
      },
      {
        "step": "Factorise the remaining bracket to $(c - a)(a + b + c)$",
        "marks": 1
      },
      {
        "step": "Substitute $a = 1$, $b = 2$, $c = 3$ to get $12$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-d08",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "In triangle $ABC$ the vertices are $A(2, 0)$, $B(10, 4)$ and $C(6, 12)$. The point $D$ divides $BC$ internally in the ratio $1 : 3$. Find the coordinates of $D$. Using determinants, find the areas of triangles $ABC$, $ABD$ and $ADC$. Show that area of $ABD$ : area of $ADC$ is equal to $BD : DC$, and that $D$ lies on $BC$.",
    "answer": "$D = \\left(\\frac{3(10) + 1(6)}{4}, \\frac{3(4) + 1(12)}{4}\\right) = (9, 6)$. Area $ABC = \\frac{1}{2}|2(4 - 12) + 10(12 - 0) + 6(0 - 4)| = \\frac{1}{2}|-16 + 120 - 24| = 40$. Area $ABD = \\frac{1}{2}|2(4 - 6) + 10(6 - 0) + 9(0 - 4)| = \\frac{1}{2}|-4 + 60 - 36| = 10$. Area $ADC = \\frac{1}{2}|2(6 - 12) + 9(12 - 0) + 6(0 - 6)| = \\frac{1}{2}|-12 + 108 - 36| = 30$. So $ABD : ADC = 10 : 30 = 1 : 3 = BD : DC$ (the two triangles share the same height from $A$), and $10 + 30 = 40$ equals the area of $ABC$. For $B(10,4)$, $D(9,6)$, $C(6,12)$ the determinant $\\begin{vmatrix} 10 & 4 & 1 \\\\ 9 & 6 & 1 \\\\ 6 & 12 & 1 \\end{vmatrix} = 10(6 - 12) - 4(9 - 6) + (108 - 36) = -60 - 12 + 72 = 0$, so the area of triangle $BDC$ is zero and $D$ lies on $BC$.",
    "steps": [
      {
        "step": "Find $D = (9, 6)$ by the section formula",
        "marks": 1
      },
      {
        "step": "Area of $ABC = 40$ by determinants",
        "marks": 1
      },
      {
        "step": "Areas of $ABD = 10$ and $ADC = 30$",
        "marks": 1
      },
      {
        "step": "Show the ratio $1 : 3$ and that the parts add to $40$",
        "marks": 1
      },
      {
        "step": "Show the determinant for $B, D, C$ is zero, so $D$ lies on $BC$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-det-r4-e01",
    "chapter": "Determinants",
    "topic": "Area of a triangle using determinants",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A sailmaker cuts a triangular sail on a pattern grid with axes in metres. Its corners are $A(1, 2)$, $B(9, 4)$ and $C(3, 10)$. A fastening ring is to be fixed at the point $T(5, 3)$.",
    "answer": "The area of the sail is $30$ square metres and $T$ lies on $AB$. The cloth costs ₹2,550 (OR $k = 5$).",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Using determinants, find the area of the sail.",
        "answer": "Area $= \\frac{1}{2}\\left|\\begin{vmatrix} 1 & 2 & 1 \\\\ 9 & 4 & 1 \\\\ 3 & 10 & 1 \\end{vmatrix}\\right| = \\frac{1}{2}|1(4 - 10) - 2(9 - 3) + (90 - 12)| = \\frac{1}{2}|-6 - 12 + 78| = 30$ square metres."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Using determinants, check whether the ring $T$ lies on the edge $AB$.",
        "answer": "The determinant $\\begin{vmatrix} 1 & 2 & 1 \\\\ 9 & 4 & 1 \\\\ 5 & 3 & 1 \\end{vmatrix} = 1(4 - 3) - 2(9 - 5) + (27 - 20) = 1 - 8 + 7 = 0$, so the area of triangle $ABT$ is zero and $T$ lies on $AB$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "The cloth costs ₹85 per square metre. Find the cost of the cloth for the sail.\nOR\nA second ring is to be fixed at $R(k, 8)$ on the edge $BC$. Using determinants, find $k$.",
        "answer": "Cost $= 30 \\times 85 = ₹2,550$.\nOR\n$B$, $C$ and $R$ are collinear, so $\\begin{vmatrix} 9 & 4 & 1 \\\\ 3 & 10 & 1 \\\\ k & 8 & 1 \\end{vmatrix} = 9(10 - 8) - 4(3 - k) + (24 - 10k) = 18 - 12 + 4k + 24 - 10k = 30 - 6k = 0$, so $k = 5$."
      }
    ]
  },
  {
    "id": "c12-det-r4-e02",
    "chapter": "Determinants",
    "topic": "Inverse of a matrix and its properties",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A school stationery shop sells notebooks and pens. Let a notebook cost ₹$x$ and a pen cost ₹$y$. On Monday, $4$ notebooks and $3$ pens were sold to one student for ₹156. On Tuesday, $2$ notebooks and $5$ pens were sold to another student for ₹120.",
    "answer": "$|A| = 14$, so the prices are unique: a notebook costs ₹30 and a pen ₹12. OR for the totals ₹110 and ₹90, a notebook costs ₹20 and a pen ₹10.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write the two conditions as equations and put them in the form $AX = B$.",
        "answer": "$4x + 3y = 156$ and $2x + 5y = 120$, so $A = \\begin{bmatrix} 4 & 3 \\\\ 2 & 5 \\end{bmatrix}$, $X = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$, $B = \\begin{bmatrix} 156 \\\\ 120 \\end{bmatrix}$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find $|A|$ and state whether the prices can be found uniquely.",
        "answer": "$|A| = 20 - 6 = 14 \\neq 0$, so $A$ is invertible and the prices are determined uniquely."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find $A^{-1}$ and hence the price of a notebook and of a pen.\nOR\nUsing the same $A^{-1}$, find the prices if the same two purchases had cost ₹110 and ₹90 respectively.",
        "answer": "$A^{-1} = \\frac{1}{14}\\begin{bmatrix} 5 & -3 \\\\ -2 & 4 \\end{bmatrix}$, so $X = \\frac{1}{14}\\begin{bmatrix} 5 & -3 \\\\ -2 & 4 \\end{bmatrix}\\begin{bmatrix} 156 \\\\ 120 \\end{bmatrix} = \\frac{1}{14}\\begin{bmatrix} 420 \\\\ 168 \\end{bmatrix}=\\begin{bmatrix} 30 \\\\ 12 \\end{bmatrix}$. A notebook costs ₹30 and a pen ₹12.\nOR\nNow $B = \\begin{bmatrix} 110 \\\\ 90 \\end{bmatrix}$, so $X = \\frac{1}{14}\\begin{bmatrix} 5 & -3 \\\\ -2 & 4 \\end{bmatrix}\\begin{bmatrix} 110 \\\\ 90 \\end{bmatrix} = \\frac{1}{14}\\begin{bmatrix} 280 \\\\ 140 \\end{bmatrix}=\\begin{bmatrix} 20 \\\\ 10 \\end{bmatrix}$. A notebook costs ₹20 and a pen ₹10."
      }
    ]
  },
  {
    "id": "c12-det-r4-e03",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A city planner studies one-way traffic on three roads $PQ$, $PR$ and $QR$ between junctions $P$, $Q$ and $R$. Let $x$, $y$ and $z$ be the numbers of vehicles per hour on $PQ$, $PR$ and $QR$. At $P$, $900$ vehicles per hour enter and split between $PQ$ and $PR$. At $Q$, $200$ vehicles per hour leave the network and the rest of the traffic from $PQ$ continues on $QR$. A counter shows that the three roads together carry $1200$ vehicles per hour.",
    "answer": "$|A| = -1$, so the flows are unique: $x = 500$, $y = 400$, $z = 300$ vehicles per hour. OR with total $1100$: $x = 400$, $y = 500$, $z = 200$.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write the three equations and the matrices $A$, $X$ and $B$ for $AX = B$.",
        "answer": "$x + y = 900$; $x = z + 200$, i.e. $x - z = 200$; $x + y + z = 1200$. So $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 0 & -1 \\\\ 1 & 1 & 1 \\end{bmatrix}$, $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$, $B = \\begin{bmatrix} 900 \\\\ 200 \\\\ 1200 \\end{bmatrix}$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find $|A|$ and say whether the three flows are fixed uniquely.",
        "answer": "$|A| = 1(0 + 1) - 1(1 + 1) + 0 = -1 \\neq 0$, so the flows are fixed uniquely."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find $A^{-1}$ and hence $x$, $y$, $z$.\nOR\nUsing the same $A^{-1}$, find the flows if the counter had shown a total of $1100$ vehicles per hour, with the other two conditions unchanged.",
        "answer": "The cofactors are $A_{11} = 1$, $A_{12} = -2$, $A_{13} = 1$, $A_{21} = -1$, $A_{22} = 1$, $A_{23} = 0$, $A_{31} = -1$, $A_{32} = 1$, $A_{33} = -1$, so $\\text{adj } A = \\begin{bmatrix} 1 & -1 & -1 \\\\ -2 & 1 & 1 \\\\ 1 & 0 & -1 \\end{bmatrix}$ and $A^{-1} = -\\text{adj } A = \\begin{bmatrix} -1 & 1 & 1 \\\\ 2 & -1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix}$. Then $X = A^{-1}B = \\begin{bmatrix} 500 \\\\ 400 \\\\ 300 \\end{bmatrix}$: $x = 500$, $y = 400$, $z = 300$.\nOR\nWith $B = \\begin{bmatrix} 900 \\\\ 200 \\\\ 1100 \\end{bmatrix}$: $X = A^{-1}B = \\begin{bmatrix} 400 \\\\ 500 \\\\ 200 \\end{bmatrix}$, so $x = 400$, $y = 500$, $z = 200$."
      }
    ]
  },
  {
    "id": "c12-det-r4-e04",
    "chapter": "Determinants",
    "topic": "Solving linear equations by the matrix method",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A teacher finds a student’s final score as $p\\%$ of the quiz mark plus $q\\%$ of the project mark plus $r\\%$ of the exam mark (all marks out of $100$). Three students’ marks and final scores are: Ria (quiz $80$, project $90$, exam $70$) final $78$; Sam (quiz $60$, project $80$, exam $90$) final $81$; Tia (quiz $90$, project $60$, exam $80$) final $76$.",
    "answer": "$|A| = 125$, and the weights are $p = 20$, $q = 30$, $r = 50$ (per cent). OR the final score of the new student is $68$.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Show that the data give $8p + 9q + 7r = 780$, $6p + 8q + 9r = 810$ and $9p + 6q + 8r = 760$, and write $A$ and $B$ for $AX = B$.",
        "answer": "Ria: $\\frac{80p + 90q + 70r}{100} = 78$, i.e. $80p + 90q + 70r = 7800$, which gives $8p + 9q + 7r = 780$ on dividing by $10$. Sam and Tia give the other two equations in the same way. So $A = \\begin{bmatrix} 8 & 9 & 7 \\\\ 6 & 8 & 9 \\\\ 9 & 6 & 8 \\end{bmatrix}$, $X = \\begin{bmatrix} p \\\\ q \\\\ r \\end{bmatrix}$ and $B = \\begin{bmatrix} 780 \\\\ 810 \\\\ 760 \\end{bmatrix}$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find $|A|$ and state whether $p$, $q$, $r$ are determined uniquely.",
        "answer": "$|A| = 8(64 - 54) - 9(48 - 81) + 7(36 - 72) = 80 + 297 - 252 = 125 \\neq 0$, so $p$, $q$, $r$ are determined uniquely."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the cofactors of $A$ and hence $p$, $q$, $r$.\nOR\nShow that $p = 20$, $q = 30$, $r = 50$ satisfy all three equations, and hence find the final score of a student with marks $70$, $80$ and $60$.",
        "answer": "The cofactors are $A_{11} = 10$, $A_{12} = 33$, $A_{13} = -36$, $A_{21} = -30$, $A_{22} = 1$, $A_{23} = 33$, $A_{31} = 25$, $A_{32} = -30$, $A_{33} = 10$, so $\\text{adj } A = \\begin{bmatrix} 10 & -30 & 25 \\\\ 33 & 1 & -30 \\\\ -36 & 33 & 10 \\end{bmatrix}$. Then $X = \\frac{1}{125}\\text{adj } A\\,B = \\frac{1}{125}\\begin{bmatrix} 2500 \\\\ 3750 \\\\ 6250 \\end{bmatrix}=\\begin{bmatrix} 20 \\\\ 30 \\\\ 50 \\end{bmatrix}$. So $p = 20$, $q = 30$, $r = 50$.\nOR\n$8(20) + 9(30) + 7(50) = 160 + 270 + 350 = 780$; $6(20) + 8(30) + 9(50) = 120 + 240 + 450 = 810$; $9(20) + 6(30) + 8(50) = 180 + 180 + 400 = 760$. All three hold. The final score is $0.20(70) + 0.30(80) + 0.50(60) = 14 + 24 + 30 = 68$."
      }
    ]
  },
];
