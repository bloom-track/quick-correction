import type { Class12Question } from './types.js';

const C = 'Relations and Functions';
const RST = 'Reflexive, symmetric and transitive relations';
const EQ = 'Equivalence relations and classes';
const OO = 'One-one and onto functions';
const BC = 'Bijective functions and counting';

const AR_OPTIONS = [
  'Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).',
  'Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).',
  'Assertion (A) is true, but Reason (R) is false.',
  'Assertion (A) is false, but Reason (R) is true.',
];

const ONTO_OPTIONS = ['one-one but not onto', 'onto but not one-one', 'both one-one and onto', 'neither one-one nor onto'];

export const CH01_RF_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-rf-r2-a01', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = \\{a, b, c\\}$ and let $R = \\{(a, b), (b, a)\\}$ be a relation on $A$. Then $R$ is',
    options: [
      'symmetric only',
      'symmetric and transitive but not reflexive',
      'an equivalence relation',
      'reflexive only',
    ],
    answer: 'Correct option: A) symmetric only. $(a, a) \\notin R$, so $R$ is not reflexive. Each pair appears with its reverse, so $R$ is symmetric. $(a, b), (b, a) \\in R$ but $(a, a) \\notin R$, so $R$ is not transitive.',
  },
  {
    id: 'c12-rf-r2-a02', chapter: C, topic: RST, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of symmetric relations on the set $\\{1, 2\\}$ is',
    options: ['$4$', '$8$', '$16$', '$2$'],
    answer: 'Correct option: B) $8$. The pairs $(1,1)$ and $(2,2)$ can each be included or not, and $(1,2), (2,1)$ must be included together or left out together. That gives $2 \\times 2 \\times 2 = 8$ symmetric relations. ($16 = 2^{4}$ counts all relations.)',
  },
  {
    id: 'c12-rf-r2-a03', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The relation $R$ on the set of real numbers defined by $a \\, R \\, b$ if and only if $a < b$ is',
    options: ['reflexive and transitive', 'symmetric only', 'transitive only', 'an equivalence relation'],
    answer: 'Correct option: C) transitive only. $a < a$ is false, so $R$ is not reflexive. $1 < 2$ but $2 \\not< 1$, so it is not symmetric. If $a < b$ and $b < c$ then $a < c$, so it is transitive.',
  },
  {
    id: 'c12-rf-r2-a04', chapter: C, topic: RST, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $a \\, R \\, b$ if and only if $ab$ is odd. Then $R$ is',
    options: [
      'reflexive and symmetric but not transitive',
      'symmetric and transitive but not reflexive',
      'an equivalence relation',
      'symmetric only',
    ],
    answer: 'Correct option: B) symmetric and transitive but not reflexive. $2 \\cdot 2 = 4$ is even, so $(2, 2) \\notin R$ and $R$ is not reflexive. $ab = ba$, so it is symmetric. If $ab$ and $bc$ are odd, then $a, b, c$ are all odd, so $ac$ is odd and $R$ is transitive.',
  },
  {
    id: 'c12-rf-r2-a05', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'On the set of all people who have ever lived, define $R = \\{(x, y) : x \\text{ is the father of } y\\}$. Then $R$ is',
    options: ['reflexive only', 'symmetric only', 'transitive only', 'neither reflexive, nor symmetric, nor transitive'],
    answer: 'Correct option: D) neither reflexive, nor symmetric, nor transitive. Nobody is his own father (not reflexive); if $x$ is the father of $y$, $y$ is not the father of $x$ (not symmetric); if $x$ is the father of $y$ and $y$ the father of $z$, then $x$ is the grandfather, not the father, of $z$ (not transitive).',
  },
  {
    id: 'c12-rf-r2-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'An equivalence relation $R$ on $A = \\{1, 2, 3, 4, 5, 6\\}$ has exactly the equivalence classes $\\{1, 2\\}$, $\\{3, 4, 5\\}$ and $\\{6\\}$. The number of ordered pairs in $R$ is',
    options: ['$6$', '$9$', '$14$', '$36$'],
    answer: 'Correct option: C) $14$. Every two elements of the same class (in either order, including an element with itself) form a pair of $R$, so a class of size $k$ gives $k^{2}$ pairs: $2^{2} + 3^{2} + 1^{2} = 4 + 9 + 1 = 14$.',
  },
  {
    id: 'c12-rf-r2-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following collections can NOT be the set of all equivalence classes of an equivalence relation on $\\{1, 2, 3, 4, 5\\}$?',
    options: [
      '$\\{1, 2\\}, \\{3, 4, 5\\}$',
      '$\\{1\\}, \\{2, 3\\}, \\{4, 5\\}$',
      '$\\{1, 2, 3\\}, \\{3, 4, 5\\}$',
      '$\\{1, 2, 3, 4, 5\\}$',
    ],
    answer: 'Correct option: C) $\\{1, 2, 3\\}, \\{3, 4, 5\\}$. Distinct equivalence classes must be disjoint, but these two both contain $3$. Each of the other options splits the set into disjoint non-empty parts that cover it.',
  },
  {
    id: 'c12-rf-r2-a08', chapter: C, topic: EQ, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): On the set of all triangles in a plane, the relation "is similar to" is an equivalence relation.\n\nReason (R): Every triangle is congruent to itself.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both true, but R does not explain A. Similarity is reflexive, symmetric and transitive, so A is true. R is also true, but it is about congruence and at most hints at reflexivity; it says nothing about symmetry or transitivity of similarity, so it does not explain A.',
  },
  {
    id: 'c12-rf-r2-a09', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 2^{x}$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: A) one-one but not onto. $2^{x}$ is strictly increasing, so $2^{x_1} = 2^{x_2}$ forces $x_1 = x_2$. But $2^{x} > 0$ for every $x$, so $0$ and negative numbers have no pre-image.',
  },
  {
    id: 'c12-rf-r2-a10', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^{3} - x$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: B) onto but not one-one. $f(0) = f(1) = 0$, so $f$ is not one-one. For any real $k$, the cubic $x^{3} - x - k$ takes values of both signs for large negative and large positive $x$, so it has a real root; hence every real number is a value of $f$ and $f$ is onto.',
  },
  {
    id: 'c12-rf-r2-a11', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{Z}$ be defined by $f(x) = [x]$, the greatest integer less than or equal to $x$. Then $f$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: B) onto but not one-one. $f(1.2) = f(1.7) = 1$, so $f$ is not one-one. Every integer $n$ satisfies $f(n) = n$, so every element of the codomain $\\mathbb{Z}$ has a pre-image and $f$ is onto.',
  },
  {
    id: 'c12-rf-r2-a12', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f : \\mathbb{N} \\to \\mathbb{N}$ be defined by $f(1) = 1$ and $f(n) = n - 1$ for $n \\ge 2$. Then $f$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: B) onto but not one-one. $f(1) = f(2) = 1$, so $f$ is not one-one. For any natural number $m$, $f(m + 1) = m$, so every element of $\\mathbb{N}$ has a pre-image and $f$ is onto.',
  },
  {
    id: 'c12-rf-r2-a13', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : [0, \\infty) \\to \\mathbb{R}$ defined by $f(x) = 4 - x^{2}$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: A) one-one but not onto. On $[0, \\infty)$, $4 - x_1^{2} = 4 - x_2^{2}$ gives $x_1^{2} = x_2^{2}$ and, as both are non-negative, $x_1 = x_2$. But $f(x) \\le 4$, so a value such as $5$ has no pre-image.',
  },
  {
    id: 'c12-rf-r2-a14', chapter: C, topic: OO, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 2x + |x|$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: C) both one-one and onto. $f(x) = 3x$ for $x \\ge 0$ and $f(x) = x$ for $x < 0$. Both pieces are increasing, the first covers $[0, \\infty)$ and the second covers $(-\\infty, 0)$, so each real number is taken exactly once: $y \\ge 0$ comes from $\\frac{y}{3}$ and $y < 0$ from $y$.',
  },
  {
    id: 'c12-rf-r2-a15', chapter: C, topic: BC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of functions from $\\{1, 2, 3, 4\\}$ to $\\{a, b, c\\}$ is',
    options: ['$12$', '$64$', '$81$', '$24$'],
    answer: 'Correct option: C) $81$. Each of the $4$ elements can be sent to any of the $3$ elements, giving $3^{4} = 81$ functions. ($64 = 4^{3}$ reverses the roles of the two sets.)',
  },
  {
    id: 'c12-rf-r2-a16', chapter: C, topic: BC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $A = \\{1, 2, 3, 4, 5\\}$. The number of bijections $f : A \\to A$ with $f(1) = 1$ is',
    options: ['$120$', '$24$', '$4$', '$256$'],
    answer: 'Correct option: B) $24$. With $f(1) = 1$ fixed, $f$ must map $\\{2, 3, 4, 5\\}$ one-one onto $\\{2, 3, 4, 5\\}$, which can be done in $4! = 24$ ways. ($120 = 5!$ counts all bijections of $A$.)',
  },
  {
    id: 'c12-rf-r2-a17', chapter: C, topic: BC, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): There is no one-one function from $\\{1, 2, 3, 4\\}$ to $\\{a, b, c\\}$.\n\nReason (R): If a set $A$ has more elements than a set $B$, then no function from $A$ to $B$ is onto.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A true, R false. Four elements cannot have four different images in a set of three, so A is true. R is false: when $A$ is larger than $B$, onto functions do exist, for example $1 \\to a, 2 \\to b, 3 \\to c, 4 \\to c$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-rf-r2-b01', chapter: C, topic: RST, type: 'short', complexity: 'easy', marks: 2,
    text: 'Let $A = \\{1, 2, 3, 4, 5, 6\\}$ and $R = \\{(a, b) : a, b \\in A, \\; a + 2b = 10\\}$. Write $R$ in roster form and check whether $R$ is reflexive and whether it is symmetric.',
    answer: 'For $b = 2, 3, 4$ we get $a = 6, 4, 2$ (other values of $b$ give $a$ outside $A$), so $R = \\{(6, 2), (4, 3), (2, 4)\\}$. Not reflexive: $(1, 1) \\notin R$ (in fact no $(a, a)$ is in $R$). Not symmetric: $(6, 2) \\in R$ but $(2, 6) \\notin R$, since $2 + 12 \\ne 10$. So $R$ is neither reflexive nor symmetric.',
    steps: [
      { step: 'Writes $R = \\{(6, 2), (4, 3), (2, 4)\\}$', marks: 1 },
      { step: 'Shows $R$ is not reflexive and not symmetric with counterexamples', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-b02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'The relation $R$ on the set of real numbers defined by $a \\, R \\, b$ if and only if $a - b$ is an integer is an equivalence relation. Prove that $R$ is transitive, and write the equivalence class $\\left[\\frac{1}{2}\\right]$.',
    answer: 'Transitive: if $a - b = m$ and $b - c = n$ with $m, n \\in \\mathbb{Z}$, then $a - c = (a - b) + (b - c) = m + n$, an integer, so $(a, c) \\in R$. Class: $x \\, R \\, \\frac{1}{2}$ means $x - \\frac{1}{2} = n$ for some integer $n$, so $\\left[\\frac{1}{2}\\right] = \\{n + \\frac{1}{2} : n \\in \\mathbb{Z}\\} = \\{\\ldots, -\\frac{3}{2}, -\\frac{1}{2}, \\frac{1}{2}, \\frac{3}{2}, \\ldots\\}$.',
    steps: [
      { step: 'Proves transitivity using $a - c = (a - b) + (b - c)$', marks: 1 },
      { step: 'Writes $\\left[\\frac{1}{2}\\right] = \\{n + \\frac{1}{2} : n \\in \\mathbb{Z}\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-b03', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the function $f : \\mathbb{N} \\to \\mathbb{N}$ defined by $f(n) = n^{2} + 3n$ is one-one but not onto.',
    answer: 'One-one: if $f(m) = f(n)$ then $m^{2} - n^{2} + 3(m - n) = 0$, i.e. $(m - n)(m + n + 3) = 0$. Since $m + n + 3 > 0$, $m = n$. Not onto: $f$ is increasing on $\\mathbb{N}$ and its smallest value is $f(1) = 4$, so $1$ (also $2$ and $3$) has no pre-image in $\\mathbb{N}$. Hence $f$ is one-one but not onto.',
    steps: [
      { step: 'Factorises $f(m) - f(n) = (m - n)(m + n + 3)$ and concludes $m = n$', marks: 1 },
      { step: 'Shows a natural number such as $1$ has no pre-image, so $f$ is not onto', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-b04', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $f : \\mathbb{R} - \\{-1\\} \\to \\mathbb{R}$ be defined by $f(x) = \\frac{3x + 2}{x + 1}$. Show that $f$ is one-one but not onto.',
    answer: 'One-one: if $f(a) = f(b)$ then $(3a + 2)(b + 1) = (3b + 2)(a + 1)$, i.e. $3ab + 3a + 2b + 2 = 3ab + 3b + 2a + 2$, so $a = b$. Not onto: take $y = 3$ in the codomain. $\\frac{3x + 2}{x + 1} = 3$ would give $3x + 2 = 3x + 3$, i.e. $2 = 3$, impossible. So $3$ has no pre-image and $f$ is not onto.',
    steps: [
      { step: 'Cross-multiplies and simplifies to $a = b$', marks: 1 },
      { step: 'Shows $y = 3$ has no pre-image', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-b05', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\{1, 2, 3\\}$ and $B = \\{4, 5, 6, 7\\}$. Find (a) the number of functions $f : A \\to B$ with $f(1) = 4$, and (b) the number of one-one functions $f : A \\to B$ with $f(1) = 4$.',
    answer: '(a) $f(1)$ is fixed; $f(2)$ and $f(3)$ can each be any of the $4$ elements, so there are $4 \\times 4 = 16$ functions. (b) $f(1) = 4$; then $f(2)$ must be one of the remaining $3$ elements and $f(3)$ one of the remaining $2$, giving $3 \\times 2 = 6$ one-one functions.',
    steps: [
      { step: 'Finds $4^{2} = 16$ functions with $f(1) = 4$', marks: 1 },
      { step: 'Finds $3 \\times 2 = 6$ one-one functions with $f(1) = 4$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-rf-r2-c01', chapter: C, topic: RST, type: 'short', complexity: 'medium', marks: 3,
    text: 'A relation $R$ on the set of real numbers is defined by $R = \\{(a, b) : a^{2} - 3ab + 2b^{2} = 0\\}$. Check whether $R$ is reflexive, symmetric and transitive.',
    answer: 'Factorise: $a^{2} - 3ab + 2b^{2} = (a - b)(a - 2b)$, so $(a, b) \\in R$ exactly when $a = b$ or $a = 2b$. Reflexive: $a = a$, so $(a, a) \\in R$ for every real $a$. Not symmetric: $(2, 1) \\in R$ since $2 = 2 \\times 1$, but $(1, 2) \\notin R$ since $1 \\ne 2$ and $1 \\ne 4$. Not transitive: $(4, 2) \\in R$ and $(2, 1) \\in R$, but $(4, 1) \\notin R$ since $4 \\ne 1$ and $4 \\ne 2$. So $R$ is reflexive, but neither symmetric nor transitive.',
    steps: [
      { step: 'Factorises to get $a = b$ or $a = 2b$ and shows $R$ is reflexive', marks: 1 },
      { step: 'Shows $R$ is not symmetric, e.g. $(2,1) \\in R$, $(1,2) \\notin R$', marks: 1 },
      { step: 'Shows $R$ is not transitive, e.g. $(4,2), (2,1) \\in R$ but $(4,1) \\notin R$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-c02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'On the set of all points of the coordinate plane, define $(x_1, y_1) \\, R \\, (x_2, y_2)$ if and only if $y_1 - 2x_1 = y_2 - 2x_2$. Show that $R$ is an equivalence relation and describe the equivalence class of the point $(1, 5)$.',
    answer: 'Write $g(x, y) = y - 2x$; then $P \\, R \\, Q$ means $g(P) = g(Q)$. Reflexive: $g(P) = g(P)$. Symmetric: $g(P) = g(Q) \\Rightarrow g(Q) = g(P)$. Transitive: $g(P) = g(Q)$ and $g(Q) = g(S)$ give $g(P) = g(S)$. So $R$ is an equivalence relation. For $(1, 5)$, $g = 5 - 2 = 3$, so the class is $\\{(x, y) : y - 2x = 3\\}$: all points on the straight line $y = 2x + 3$.',
    steps: [
      { step: 'Proves reflexive and symmetric', marks: 1 },
      { step: 'Proves transitive and concludes $R$ is an equivalence relation', marks: 1 },
      { step: 'Identifies the class of $(1, 5)$ as the line $y = 2x + 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-c03', chapter: C, topic: OO, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $f : \\mathbb{N} \\to \\mathbb{Z}$ be defined by $f(n) = \\frac{n - 1}{2}$ if $n$ is odd and $f(n) = -\\frac{n}{2}$ if $n$ is even. Show that $f$ is both one-one and onto.',
    answer: 'For odd $n$, $f(n) = \\frac{n - 1}{2} \\in \\{0, 1, 2, \\ldots\\}$; for even $n$, $f(n) = -\\frac{n}{2} \\in \\{-1, -2, \\ldots\\}$. So odd inputs give non-negative images and even inputs give negative images. One-one: if $f(m) = f(n)$, the common value is either $\\ge 0$ (both odd) or $< 0$ (both even). Both odd: $\\frac{m - 1}{2} = \\frac{n - 1}{2}$ gives $m = n$. Both even: $-\\frac{m}{2} = -\\frac{n}{2}$ gives $m = n$. Onto: for $y \\ge 0$, $n = 2y + 1$ is odd and $f(n) = y$; for $y < 0$, $n = -2y$ is an even natural number and $f(n) = y$. So $f$ is a bijection.',
    steps: [
      { step: 'Notes odd $n$ give images $\\ge 0$ and even $n$ give negative images', marks: 1 },
      { step: 'Completes the one-one argument in both cases', marks: 1 },
      { step: 'Shows onto with pre-images $2y + 1$ ($y \\ge 0$) and $-2y$ ($y < 0$)', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-c04', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = 3x - 1$ for $x \\le 1$ and $f(x) = x + 1$ for $x > 1$. Show that $f$ is one-one and onto.',
    answer: 'For $x \\le 1$, $f(x) = 3x - 1$ takes exactly the values in $(-\\infty, 2]$; for $x > 1$, $f(x) = x + 1$ takes exactly the values in $(2, \\infty)$. These two sets do not overlap. One-one: if $f(x_1) = f(x_2)$, both values lie in the same piece. In the first, $3x_1 - 1 = 3x_2 - 1$ gives $x_1 = x_2$; in the second, $x_1 + 1 = x_2 + 1$ gives $x_1 = x_2$. Onto: for $y \\le 2$, $x = \\frac{y + 1}{3} \\le 1$ and $f(x) = y$; for $y > 2$, $x = y - 1 > 1$ and $f(x) = y$. Hence $f$ is a bijection.',
    steps: [
      { step: 'Finds the ranges $(-\\infty, 2]$ and $(2, \\infty)$ of the two pieces and notes they are disjoint', marks: 1 },
      { step: 'Shows $f$ is one-one', marks: 1 },
      { step: 'Shows onto with pre-images $\\frac{y + 1}{3}$ and $y - 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-c05', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $A = \\{1, 2, 3, 4, 5\\}$ and $B = \\{x, y, z\\}$. Find the total number of functions from $A$ to $B$, the number of these that are not onto, and hence the number of onto functions from $A$ to $B$.',
    answer: 'Total: $3^{5} = 243$. A function fails to be onto when it misses at least one element of $B$. Functions missing a particular element map into the other two: $2^{5} = 32$ each, $3 \\times 32 = 96$ in all; but the $3$ constant functions miss two elements and have been counted twice, so the number of non-onto functions is $96 - 3 = 93$. Hence the number of onto functions is $243 - 93 = 150$.',
    steps: [
      { step: 'Total functions $= 3^{5} = 243$', marks: 1 },
      { step: 'Non-onto functions $= 3 \\times 2^{5} - 3 = 93$', marks: 1 },
      { step: 'Onto functions $= 243 - 93 = 150$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-rf-r2-d01', chapter: C, topic: RST, type: 'long', complexity: 'medium', marks: 5,
    text: 'A relation $R$ on the set of natural numbers $\\mathbb{N}$ is defined by $R = \\{(a, b) : a \\text{ and } b \\text{ have a common factor greater than } 1\\}$. Determine whether $R$ is reflexive, symmetric or transitive. Also list all $b \\in \\{1, 2, \\ldots, 10\\}$ with $(6, b) \\in R$.',
    answer: 'Not reflexive: the only factor of $1$ is $1$, so $1$ and $1$ have no common factor greater than $1$ and $(1, 1) \\notin R$. Symmetric: a common factor of $a$ and $b$ is a common factor of $b$ and $a$, so $(a, b) \\in R \\Rightarrow (b, a) \\in R$. Not transitive: $(2, 6) \\in R$ (common factor $2$) and $(6, 3) \\in R$ (common factor $3$), but $2$ and $3$ have no common factor greater than $1$, so $(2, 3) \\notin R$. So $R$ is symmetric but neither reflexive nor transitive. $(6, b) \\in R$ means $b$ shares the factor $2$ or $3$ with $6$, i.e. $b$ is even or a multiple of $3$: $b \\in \\{2, 3, 4, 6, 8, 9, 10\\}$.',
    steps: [
      { step: 'Shows $R$ is not reflexive using $(1, 1) \\notin R$', marks: 1 },
      { step: 'Shows $R$ is symmetric', marks: 1 },
      { step: 'Gives suitable $a, b, c$ with $(a, b), (b, c) \\in R$', marks: 1 },
      { step: 'Verifies $(a, c) \\notin R$ and concludes $R$ is not transitive', marks: 1 },
      { step: 'Lists $b \\in \\{2, 3, 4, 6, 8, 9, 10\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d02', chapter: C, topic: RST, type: 'long', complexity: 'hard', marks: 5,
    text: 'A relation $R$ on the set of real numbers is defined by $R = \\{(a, b) : a \\le b \\le a + 1\\}$. Show that $R$ is reflexive but neither symmetric nor transitive. Find all real $x$ such that $(x, 3) \\in R$, and show that $(x, 3)$ and $(3, x)$ both belong to $R$ only when $x = 3$.',
    answer: 'Reflexive: $a \\le a \\le a + 1$ for every real $a$, so $(a, a) \\in R$. Not symmetric: $(0, 1) \\in R$ since $0 \\le 1 \\le 1$, but $(1, 0) \\notin R$ since $0 < 1$. Not transitive: $(0, 1) \\in R$ and $(1, 2) \\in R$ (as $1 \\le 2 \\le 2$), but $(0, 2) \\notin R$ because $2 > 0 + 1$. $(x, 3) \\in R$ means $x \\le 3 \\le x + 1$, i.e. $2 \\le x \\le 3$. $(3, x) \\in R$ means $3 \\le x \\le 4$. Both hold only when $x$ lies in $[2, 3]$ and in $[3, 4]$, i.e. $x = 3$.',
    steps: [
      { step: 'Shows $R$ is reflexive', marks: 1 },
      { step: 'Shows $R$ is not symmetric with a counterexample', marks: 1 },
      { step: 'Shows $R$ is not transitive with a counterexample', marks: 1 },
      { step: 'Finds $(x, 3) \\in R \\iff 2 \\le x \\le 3$', marks: 1 },
      { step: 'Uses $(3, x) \\in R \\iff 3 \\le x \\le 4$ to conclude $x = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d03', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $R = \\{(a, b) : a^{2} - b^{2} \\text{ is divisible by } 3\\}$. Show that $R$ is an equivalence relation. Find the equivalence class $[4]$ and the number of distinct equivalence classes.',
    answer: 'Reflexive: $a^{2} - a^{2} = 0$ is divisible by $3$. Symmetric: if $a^{2} - b^{2} = 3k$ then $b^{2} - a^{2} = 3(-k)$. Transitive: if $a^{2} - b^{2} = 3k$ and $b^{2} - c^{2} = 3m$, then $a^{2} - c^{2} = 3(k + m)$. So $R$ is an equivalence relation. Squares modulo $3$: if $3 \\mid a$ then $a^{2}$ leaves remainder $0$; if $a = 3q \\pm 1$ then $a^{2} = 9q^{2} \\pm 6q + 1$ leaves remainder $1$. So $a \\, R \\, b$ exactly when $a$ and $b$ are both multiples of $3$ or both not multiples of $3$. Since $4$ is not a multiple of $3$, $[4] = \\{n \\in \\mathbb{Z} : 3 \\nmid n\\} = \\{\\ldots, -2, -1, 1, 2, 4, 5, 7, \\ldots\\}$. The other class is $[0] = \\{3n : n \\in \\mathbb{Z}\\}$, so there are $2$ distinct equivalence classes.',
    steps: [
      { step: 'Proves reflexive and symmetric', marks: 1 },
      { step: 'Proves transitive and concludes $R$ is an equivalence relation', marks: 1 },
      { step: 'Shows a square leaves remainder $0$ or $1$ on division by $3$ according as $3 \\mid a$ or not', marks: 1 },
      { step: 'Writes $[4]$ as the set of integers not divisible by $3$', marks: 1 },
      { step: 'States there are $2$ classes', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d04', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $A = \\{1, 2, 3, \\ldots, 20\\}$ and define $a \\, R \\, b$ if and only if $\\frac{a}{b} = 2^{k}$ for some integer $k$ (positive, negative or zero). Show that $R$ is an equivalence relation on $A$. Write the equivalence class $[3]$ and find the number of distinct equivalence classes.',
    answer: 'Reflexive: $\\frac{a}{a} = 1 = 2^{0}$. Symmetric: if $\\frac{a}{b} = 2^{k}$ then $\\frac{b}{a} = 2^{-k}$, with $-k$ an integer. Transitive: if $\\frac{a}{b} = 2^{k}$ and $\\frac{b}{c} = 2^{m}$, then $\\frac{a}{c} = \\frac{a}{b} \\cdot \\frac{b}{c} = 2^{k + m}$. So $R$ is an equivalence relation. $[3]$ contains the elements of $A$ of the form $3 \\cdot 2^{k}$: $[3] = \\{3, 6, 12\\}$ ($24 > 20$). Every natural number is (odd number) $\\times 2^{k}$, and $a \\, R \\, b$ exactly when $a$ and $b$ have the same odd part. Each class contains exactly one odd number, so the number of classes equals the number of odd numbers in $A$, which is $10$.',
    steps: [
      { step: 'Proves $R$ is reflexive', marks: 1 },
      { step: 'Proves $R$ is symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive', marks: 1 },
      { step: 'Writes $[3] = \\{3, 6, 12\\}$', marks: 1 },
      { step: 'Finds $10$ classes, one for each odd number in $A$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d05', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f : (0, \\infty) \\to \\mathbb{R}$ be defined by $f(x) = x + \\frac{1}{x}$. Show that $f$ is neither one-one nor onto. Then show that $g : [1, \\infty) \\to [2, \\infty)$, defined by the same rule $g(x) = x + \\frac{1}{x}$, is one-one and onto.',
    answer: 'Not one-one: $f(2) = \\frac{5}{2} = f(\\frac{1}{2})$. Not onto: for $x > 0$, $x + \\frac{1}{x} - 2 = \\frac{(x - 1)^{2}}{x} \\ge 0$, so $f(x) \\ge 2$ and, for example, $0$ has no pre-image. For $g$: one-one: if $x_1 + \\frac{1}{x_1} = x_2 + \\frac{1}{x_2}$, then $(x_1 - x_2) - \\frac{x_1 - x_2}{x_1 x_2} = 0$, i.e. $(x_1 - x_2)\\left(1 - \\frac{1}{x_1 x_2}\\right) = 0$. If $x_1 \\ne x_2$ then $x_1 x_2 = 1$, but $x_1, x_2 \\ge 1$ forces $x_1 = x_2 = 1$, a contradiction. So $x_1 = x_2$. Onto: for $y \\ge 2$, solve $x^{2} - yx + 1 = 0$ and take $x = \\frac{y + \\sqrt{y^{2} - 4}}{2}$, which is real since $y^{2} \\ge 4$, and $x \\ge \\frac{y}{2} \\ge 1$, so $x$ is in the domain; then $x + \\frac{1}{x} = y$. Hence $g$ is a bijection.',
    steps: [
      { step: 'Shows $f$ is not one-one, e.g. $f(2) = f(\\frac{1}{2})$', marks: 1 },
      { step: 'Shows $f(x) \\ge 2$, so $f$ is not onto', marks: 1 },
      { step: 'Factorises $g(x_1) - g(x_2) = (x_1 - x_2)(1 - \\frac{1}{x_1 x_2})$', marks: 1 },
      { step: 'Uses $x_1, x_2 \\ge 1$ to conclude $x_1 = x_2$', marks: 1 },
      { step: 'Shows onto with pre-image $\\frac{y + \\sqrt{y^{2} - 4}}{2} \\ge 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d06', chapter: C, topic: OO, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $f : \\mathbb{R} - \\{2\\} \\to \\mathbb{R} - \\{k\\}$ be defined by $f(x) = \\frac{5 - 3x}{x - 2}$. Find the value of $k$ for which $f$ is onto. For this $k$, show that $f$ is one-one and onto, and find $x$ such that $f(x) = 2$.',
    answer: 'Solving $y = \\frac{5 - 3x}{x - 2}$: $xy - 2y = 5 - 3x$, so $x(y + 3) = 2y + 5$ and $x = \\frac{2y + 5}{y + 3}$. This fails only for $y = -3$ (indeed $\\frac{5 - 3x}{x - 2} = -3$ gives $5 - 3x = -3x + 6$, impossible), so the range is $\\mathbb{R} - \\{-3\\}$ and $k = -3$. One-one: $f(x_1) = f(x_2)$ gives $(5 - 3x_1)(x_2 - 2) = (5 - 3x_2)(x_1 - 2)$, i.e. $5x_2 - 10 - 3x_1x_2 + 6x_1 = 5x_1 - 10 - 3x_1x_2 + 6x_2$, so $x_1 = x_2$. Onto: for $y \\ne -3$, $x = \\frac{2y + 5}{y + 3}$ is real, and $x \\ne 2$ because $\\frac{2y + 5}{y + 3} = 2$ would give $5 = 6$; also $f(x) = y$. $f(x) = 2$: $5 - 3x = 2x - 4$, so $x = \\frac{9}{5}$ (and $\\frac{9}{5} \\ne 2$).',
    steps: [
      { step: 'Solves $y = f(x)$ to get $x = \\frac{2y + 5}{y + 3}$', marks: 1 },
      { step: 'Concludes $k = -3$', marks: 1 },
      { step: 'Proves $f$ is one-one', marks: 1 },
      { step: 'Shows the pre-image is never $2$, so $f$ is onto', marks: 1 },
      { step: 'Finds $x = \\frac{9}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d07', chapter: C, topic: OO, type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^{3} + 3x^{2} + 3x + 7$ is one-one and onto, and find $x$ such that $f(x) = 14$. Is the function $g : \\mathbb{R} \\to \\mathbb{R}$, $g(x) = x^{3} - 3x$, one-one? Justify.',
    answer: 'Note $f(x) = (x + 1)^{3} + 6$. One-one: $f(x_1) = f(x_2)$ gives $(x_1 + 1)^{3} = (x_2 + 1)^{3}$; real cube roots are unique, so $x_1 + 1 = x_2 + 1$ and $x_1 = x_2$. Onto: for any real $y$, take $x = \\sqrt[3]{y - 6} - 1$, which is real; then $f(x) = (y - 6) + 6 = y$. $f(x) = 14$: $(x + 1)^{3} = 8$, so $x + 1 = 2$ and $x = 1$. $g$ is not one-one: $g(0) = 0$ and $g(\\sqrt{3}) = 3\\sqrt{3} - 3\\sqrt{3} = 0$, with $0 \\ne \\sqrt{3}$.',
    steps: [
      { step: 'Writes $f(x) = (x + 1)^{3} + 6$', marks: 1 },
      { step: 'Proves $f$ is one-one', marks: 1 },
      { step: 'Proves onto with pre-image $\\sqrt[3]{y - 6} - 1$', marks: 1 },
      { step: 'Finds $x = 1$', marks: 1 },
      { step: 'Shows $g$ is not one-one, e.g. $g(0) = g(\\sqrt{3}) = 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d08', chapter: C, topic: BC, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and consider functions $f : A \\to A$. Find: (a) the total number of such functions; (b) the number of bijections; (c) the number of functions that are neither one-one nor onto; (d) the number of bijections with $f(1) = 2$; (e) the number of functions with $f(1) < f(2)$.',
    answer: '(a) Each of $4$ elements has $4$ choices: $4^{4} = 256$. (b) Bijections: $4! = 24$. (c) For a function from a finite set to itself, one-one and onto are equivalent (a one-one map of $4$ elements uses all $4$ images, and an onto map needs $4$ distinct images). So a function that is not a bijection is neither one-one nor onto: $256 - 24 = 232$. (d) With $f(1) = 2$, the elements $2, 3, 4$ must go one-one onto $\\{1, 3, 4\\}$: $3! = 6$. (e) The pair $(f(1), f(2))$ with $f(1) < f(2)$ is a choice of $2$ different values from $4$, written in increasing order: $\\binom{4}{2} = 6$ ways; $f(3)$ and $f(4)$ are free: $4^{2} = 16$. Total $6 \\times 16 = 96$.',
    steps: [
      { step: '(a) $256$', marks: 1 },
      { step: '(b) $24$', marks: 1 },
      { step: '(c) $232$, with the reason that one-one and onto coincide here', marks: 1 },
      { step: '(d) $6$', marks: 1 },
      { step: '(e) $6 \\times 16 = 96$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r2-d09', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = 2x + 1$ for $x \\ge 0$ and $f(x) = 1 - x^{2}$ for $x < 0$. Show that $f$ is one-one and onto, and find the values of $x$ for which $f(x) = -3$ and $f(x) = 5$.',
    answer: 'Ranges of the pieces: for $x \\ge 0$, $2x + 1$ takes exactly the values in $[1, \\infty)$; for $x < 0$, $x^{2}$ takes all values in $(0, \\infty)$, so $1 - x^{2}$ takes exactly the values in $(-\\infty, 1)$. These sets are disjoint. One-one: equal images lie in the same piece. For $x_1, x_2 \\ge 0$, $2x_1 + 1 = 2x_2 + 1$ gives $x_1 = x_2$. For $x_1, x_2 < 0$, $1 - x_1^{2} = 1 - x_2^{2}$ gives $x_1^{2} = x_2^{2}$, and as both are negative, $x_1 = x_2$. Onto: for $y \\ge 1$, $x = \\frac{y - 1}{2} \\ge 0$ and $f(x) = y$; for $y < 1$, $x = -\\sqrt{1 - y} < 0$ and $f(x) = 1 - (1 - y) = y$. So $f$ is a bijection. $f(x) = -3 < 1$: $1 - x^{2} = -3$ with $x < 0$ gives $x = -2$. $f(x) = 5 \\ge 1$: $2x + 1 = 5$ gives $x = 2$.',
    steps: [
      { step: 'Finds the ranges $[1, \\infty)$ and $(-\\infty, 1)$ of the two pieces', marks: 1 },
      { step: 'Proves one-one, using $x < 0$ in the second piece', marks: 1 },
      { step: 'Proves onto with pre-images $\\frac{y - 1}{2}$ and $-\\sqrt{1 - y}$', marks: 1 },
      { step: 'Finds $x = -2$ for $f(x) = -3$', marks: 1 },
      { step: 'Finds $x = 2$ for $f(x) = 5$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-rf-r2-e01', chapter: C, topic: RST, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A basketball coach records the heights of five players: $P_1$: $170$ cm, $P_2$: $165$ cm, $P_3$: $170$ cm, $P_4$: $175$ cm, $P_5$: $165$ cm. On the set $P = \\{P_1, P_2, P_3, P_4, P_5\\}$ she considers the relations $T = \\{(x, y) : x \\text{ is taller than } y\\}$ and $S = \\{(x, y) : x \\text{ and } y \\text{ have the same height}\\}$.',
    answer: '(i) $T$ is not reflexive. (ii) $T$ is transitive. (iii) $S$ is an equivalence relation with classes $\\{P_1, P_3\\}$, $\\{P_2, P_5\\}$, $\\{P_4\\}$. OR (iii) $D$ is reflexive and symmetric but not transitive.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $T$ reflexive? Give a reason.',
        answer: 'No. No player is taller than himself, so $(P_1, P_1) \\notin T$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is $T$ transitive? Give a reason.',
        answer: 'Yes. If $x$ is taller than $y$ and $y$ is taller than $z$, then $x$ is taller than $z$. (For example $(P_4, P_1), (P_1, P_2) \\in T$ and $(P_4, P_2) \\in T$.)',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $S$ is an equivalence relation and write all its equivalence classes.\n\nOR\n\nThe coach also considers $D = \\{(x, y) : \\text{the heights of } x \\text{ and } y \\text{ differ by at most } 5 \\text{ cm}\\}$. Show that $D$ is reflexive and symmetric but not transitive.',
        answer: 'Every player has the same height as himself (reflexive); if $x$ and $y$ have the same height then so do $y$ and $x$ (symmetric); if $x, y$ have the same height and $y, z$ have the same height, then $x, z$ do too (transitive). So $S$ is an equivalence relation, with classes $\\{P_1, P_3\\}$ ($170$ cm), $\\{P_2, P_5\\}$ ($165$ cm) and $\\{P_4\\}$ ($175$ cm). OR: a height differs from itself by $0 \\le 5$ (reflexive), and the difference is the same in either order (symmetric). But $(P_2, P_1) \\in D$ ($165$ and $170$ differ by $5$) and $(P_1, P_4) \\in D$ ($170$ and $175$ differ by $5$), while $P_2$ and $P_4$ differ by $10$ cm, so $(P_2, P_4) \\notin D$; $D$ is not transitive.',
      },
    ],
  },
  {
    id: 'c12-rf-r2-e02', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A teacher writes eight animal names on the board: $W = \\{\\text{CAT}, \\text{DOG}, \\text{LION}, \\text{BEAR}, \\text{GOAT}, \\text{HORSE}, \\text{TIGER}, \\text{CAMEL}\\}$. She groups the words by the relation $R = \\{(u, v) : u \\text{ and } v \\text{ have the same number of letters}\\}$ on $W$.',
    answer: '(i) Yes, an equivalence relation. (ii) $[\\text{LION}] = \\{\\text{LION}, \\text{BEAR}, \\text{GOAT}\\}$. (iii) $3$ classes; $R$ has $22$ ordered pairs. OR (iii) The relation "shares a letter" is not transitive.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $R$ an equivalence relation? Give a brief reason.',
        answer: 'Yes. Each word has the same length as itself (reflexive); equal lengths can be read in either order (symmetric); if $u, v$ have equal lengths and $v, w$ have equal lengths, then so do $u, w$ (transitive).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the equivalence class of LION.',
        answer: 'The four-letter words: $[\\text{LION}] = \\{\\text{LION}, \\text{BEAR}, \\text{GOAT}\\}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'How many equivalence classes does $R$ have, and how many ordered pairs does $R$ contain?\n\nOR\n\nA student suggests the relation $T = \\{(u, v) : u \\text{ and } v \\text{ have at least one letter in common}\\}$ on $W$. Show that $T$ is not transitive.',
        answer: 'The classes are the $3$-letter words $\\{\\text{CAT}, \\text{DOG}\\}$, the $4$-letter words $\\{\\text{LION}, \\text{BEAR}, \\text{GOAT}\\}$ and the $5$-letter words $\\{\\text{HORSE}, \\text{TIGER}, \\text{CAMEL}\\}$: $3$ classes. A class of size $k$ contributes $k^{2}$ ordered pairs, so $R$ has $2^{2} + 3^{2} + 3^{2} = 4 + 9 + 9 = 22$ pairs. OR: CAT and GOAT share A and T, so $(\\text{CAT}, \\text{GOAT}) \\in T$; GOAT and DOG share G and O, so $(\\text{GOAT}, \\text{DOG}) \\in T$; but CAT and DOG have no letter in common, so $(\\text{CAT}, \\text{DOG}) \\notin T$. Hence $T$ is not transitive.',
      },
    ],
  },
  {
    id: 'c12-rf-r2-e03', chapter: C, topic: OO, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A cab company charges a fixed fee of Rs $40$ plus Rs $15$ per kilometre. The fare for a trip of $d$ km is modelled by $f : [0, \\infty) \\to \\mathbb{R}$, $f(d) = 40 + 15d$.',
    answer: '(i) Yes, one-one. (ii) $15$ km. (iii) Not onto; range $[40, \\infty)$; with codomain $[40, \\infty)$ it is a bijection. OR (iii) Fares are equal at $d = 4$ km (Rs $100$).',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $f$ one-one? Justify.',
        answer: 'Yes. $40 + 15d_1 = 40 + 15d_2$ gives $d_1 = d_2$, so different distances give different fares.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'A passenger paid Rs $265$. How far did she travel?',
        answer: '$40 + 15d = 265$ gives $15d = 225$, so $d = 15$ km.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Is $f$ onto? Find its range, and state a codomain for which $f$ would be a bijection.\n\nOR\n\nA second company charges Rs $60$ plus Rs $10$ per kilometre, $g(d) = 60 + 10d$. For what distance are the two fares equal, and what is that fare?',
        answer: 'Since $d \\ge 0$ and $f$ is increasing, $f(d) \\ge f(0) = 40$, and every $y \\ge 40$ is reached at $d = \\frac{y - 40}{15} \\ge 0$. So the range is $[40, \\infty)$, which is not all of $\\mathbb{R}$ (e.g. $20$ has no pre-image), so $f$ is not onto. With codomain $[40, \\infty)$, $f$ is one-one and onto, hence a bijection. OR: $40 + 15d = 60 + 10d$ gives $5d = 20$, so $d = 4$ km, and the common fare is $40 + 15 \\times 4 = 100$, i.e. Rs $100$.',
      },
    ],
  },
  {
    id: 'c12-rf-r2-e04', chapter: C, topic: BC, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A quiz has four questions $Q = \\{q_1, q_2, q_3, q_4\\}$, and each has four options $O = \\{a, b, c, d\\}$ with exactly one correct option. The quiz-setter\'s answer key assigns one correct option to each question, so an answer key is a function from $Q$ to $O$.',
    answer: '(i) $256$. (ii) $24$. (iii) $175$ keys use option $a$ at least once. OR (iii) $108$ keys have no two consecutive questions with the same answer.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'How many different answer keys are possible?',
        answer: 'Each of the $4$ questions can have any of $4$ correct options: $4^{4} = 256$ keys.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'How many answer keys use every option exactly once (that is, how many functions from $Q$ to $O$ are bijections)?',
        answer: 'The options for $q_1, q_2, q_3, q_4$ can be chosen in $4 \\times 3 \\times 2 \\times 1 = 24$ ways.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'How many answer keys never use option $a$? Hence find how many use option $a$ at least once.\n\nOR\n\nThe setter wants no two consecutive questions ($q_1$ and $q_2$, $q_2$ and $q_3$, $q_3$ and $q_4$) to have the same correct option. How many such answer keys are there?',
        answer: 'Keys avoiding $a$ are functions from $Q$ to $\\{b, c, d\\}$: $3^{4} = 81$. So keys using $a$ at least once number $256 - 81 = 175$. OR: $q_1$ has $4$ choices, and each of $q_2, q_3, q_4$ must differ from the question before it, giving $3$ choices each: $4 \\times 3 \\times 3 \\times 3 = 108$.',
      },
    ],
  },
  {
    id: 'c12-rf-r2-e05', chapter: C, topic: OO, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A small workshop estimates its weekly profit (in thousands of rupees) from making $x$ units of a product as $P(x) = -x^{2} + 40x - 300$. As a mathematical model, the owner first treats it as a function $P : \\mathbb{R} \\to \\mathbb{R}$.',
    answer: '(i) Not one-one: $P(10) = P(30) = 0$. (ii) Range $(-\\infty, 100]$, so not onto. (iii) On $[0, 20]$ it is one-one, and with codomain $[-300, 100]$ it is onto. OR (iii) $x = 15$ or $x = 25$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $P$ one-one? Justify.',
        answer: 'No. $P(10) = -100 + 400 - 300 = 0$ and $P(30) = -900 + 1200 - 300 = 0$, but $10 \\ne 30$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the range of $P$. Is $P$ onto?',
        answer: '$P(x) = 100 - (x - 20)^{2} \\le 100$, and every value $y \\le 100$ is reached at $x = 20 + \\sqrt{100 - y}$. So the range is $(-\\infty, 100]$, and $P$ is not onto $\\mathbb{R}$ (e.g. $150$ has no pre-image).',
      },
      {
        label: '(iii)', marks: 2,
        text: 'The owner restricts production to $0 \\le x \\le 20$. Show that $P : [0, 20] \\to [-300, 100]$ is one-one and onto.\n\nOR\n\nFind all production levels $x$ that give a profit of $75$ thousand rupees.',
        answer: 'One-one: $P(x_1) = P(x_2)$ gives $(x_1 - 20)^{2} = (x_2 - 20)^{2}$; on $[0, 20]$ both $x_1 - 20$ and $x_2 - 20$ are $\\le 0$, so $x_1 - 20 = x_2 - 20$ and $x_1 = x_2$. Onto: for $-300 \\le y \\le 100$, take $x = 20 - \\sqrt{100 - y}$. Since $0 \\le 100 - y \\le 400$, $0 \\le \\sqrt{100 - y} \\le 20$, so $x \\in [0, 20]$, and $P(x) = 100 - (100 - y) = y$. Hence $P$ is a bijection from $[0, 20]$ to $[-300, 100]$. OR: $-x^{2} + 40x - 300 = 75$ gives $x^{2} - 40x + 375 = 0$, i.e. $(x - 15)(x - 25) = 0$, so $x = 15$ or $x = 25$ units.',
      },
    ],
  },
];
