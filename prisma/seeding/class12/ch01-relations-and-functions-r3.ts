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

export const CH01_RF_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-rf-r3-a01', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = \\{1, 2, 3\\}$ and $R = \\{(1, 2), (2, 3), (1, 3)\\}$ be a relation on $A$. Then $R$ is',
    options: ['reflexive only', 'symmetric only', 'transitive only', 'an equivalence relation'],
    answer: 'Correct option: C) transitive only. No $(a, a)$ is in $R$, so it is not reflexive. $(1, 2) \\in R$ but $(2, 1) \\notin R$, so it is not symmetric. The only chain is $(1, 2), (2, 3)$ and it gives $(1, 3) \\in R$, so $R$ is transitive.',
  },
  {
    id: 'c12-rf-r3-a02', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of relations on the set $\\{1, 2, 3\\}$ that are both reflexive and symmetric is',
    options: ['$4$', '$8$', '$64$', '$512$'],
    answer: 'Correct option: B) $8$. The $3$ diagonal pairs must be present. The other $6$ pairs come in $3$ mirror-image couples $\\{(1,2),(2,1)\\}$, $\\{(1,3),(3,1)\\}$, $\\{(2,3),(3,2)\\}$, and each couple is either included or left out together. So there are $2^{3} = 8$ such relations. ($64$ counts reflexive relations, or symmetric ones, separately.)',
  },
  {
    id: 'c12-rf-r3-a03', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $a \\, R \\, b$ if and only if $|a - b| \\le 2$. Then $R$ is',
    options: [
      'reflexive and symmetric but not transitive',
      'reflexive and transitive but not symmetric',
      'symmetric and transitive but not reflexive',
      'an equivalence relation',
    ],
    answer: 'Correct option: A) reflexive and symmetric but not transitive. $|a - a| = 0 \\le 2$ gives reflexivity and $|a - b| = |b - a|$ gives symmetry. But $|0 - 2| \\le 2$ and $|2 - 4| \\le 2$ while $|0 - 4| = 4 > 2$, so $R$ is not transitive.',
  },
  {
    id: 'c12-rf-r3-a04', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A relation $R$ on the set of natural numbers $\\mathbb{N}$ is defined by $a \\, R \\, b$ if and only if $a$ divides $b$. Then $R$ is',
    options: [
      'reflexive and symmetric but not transitive',
      'reflexive and transitive but not symmetric',
      'symmetric only',
      'an equivalence relation',
    ],
    answer: 'Correct option: B) reflexive and transitive but not symmetric. Every $a$ divides itself. If $a \\mid b$ and $b \\mid c$ then $a \\mid c$. But $2 \\mid 4$ while $4 \\nmid 2$, so $R$ is not symmetric.',
  },
  {
    id: 'c12-rf-r3-a05', chapter: C, topic: RST, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The relation $R = \\{(1, 1), (2, 2)\\}$ on the set $\\{1, 2, 3\\}$ is symmetric and transitive but not reflexive.\n\nReason (R): Every symmetric and transitive relation on a set is reflexive.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) A true, R false. $R$ is symmetric (each pair is its own reverse) and transitive (the only chains $(1,1),(1,1)$ and $(2,2),(2,2)$ return the same pair), but $(3, 3) \\notin R$, so it is not reflexive; A is true. That same relation is a counterexample to R, so R is false.',
  },
  {
    id: 'c12-rf-r3-a06', chapter: C, topic: RST, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A relation $R$ on the set of real numbers is defined by $a \\, R \\, b$ if and only if $a - b$ is irrational. Then $R$ is',
    options: ['reflexive only', 'symmetric only', 'transitive only', 'an equivalence relation'],
    answer: 'Correct option: B) symmetric only. $a - a = 0$ is rational, so $R$ is not reflexive. If $a - b$ is irrational then $b - a = -(a - b)$ is irrational, so $R$ is symmetric. Take $a = \\sqrt{2}$, $b = 0$, $c = \\sqrt{2}$: $a - b = \\sqrt{2}$ and $b - c = -\\sqrt{2}$ are irrational, but $a - c = 0$ is rational, so $R$ is not transitive.',
  },
  {
    id: 'c12-rf-r3-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of equivalence relations on the set $\\{1, 2, 3\\}$ is',
    options: ['$3$', '$5$', '$6$', '$8$'],
    answer: 'Correct option: B) $5$. An equivalence relation corresponds to a partition of the set into classes. The partitions of $\\{1, 2, 3\\}$ are: one class $\\{1,2,3\\}$; three classes $\\{1\\},\\{2\\},\\{3\\}$; and the three ways to pair two elements and leave one alone. That is $1 + 1 + 3 = 5$.',
  },
  {
    id: 'c12-rf-r3-a08', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $R = \\{(a, b) : a - b \\text{ is divisible by } 7\\}$ be the equivalence relation on $\\mathbb{Z}$. Which of the following integers belongs to the equivalence class $[3]$?',
    options: ['$8$', '$9$', '$10$', '$11$'],
    answer: 'Correct option: C) $10$. An integer $b$ is in $[3]$ exactly when $b - 3$ is divisible by $7$. $10 - 3 = 7$ works, while $8 - 3 = 5$, $9 - 3 = 6$ and $11 - 3 = 8$ are not multiples of $7$.',
  },
  {
    id: 'c12-rf-r3-a09', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'On $A = \\{1, 2, 3, 4, 5, 6\\}$ define $a \\, R \\, b$ if and only if $ab$ is a perfect square. Given that $R$ is an equivalence relation, the number of distinct equivalence classes is',
    options: ['$3$', '$4$', '$5$', '$6$'],
    answer: 'Correct option: C) $5$. $1 \\cdot 4 = 4$ is a square, so $1 \\, R \\, 4$. Every other product of two different elements of $A$ is not a perfect square: for example $2 \\cdot 3 = 6$, $2 \\cdot 6 = 12$, $3 \\cdot 6 = 18$, $4 \\cdot 5 = 20$. The classes are $\\{1, 4\\}, \\{2\\}, \\{3\\}, \\{5\\}, \\{6\\}$, so there are $5$.',
  },
  {
    id: 'c12-rf-r3-a10', chapter: C, topic: EQ, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): Two different equivalence classes of an equivalence relation on a set can have a common element.\n\nReason (R): The equivalence classes of an equivalence relation on a set $A$ form a partition of $A$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A false, R true. The classes of an equivalence relation split the set into disjoint non-empty parts that together cover it, so R is true. Disjointness means two different classes never share an element, so A is false.',
  },
  {
    id: 'c12-rf-r3-a11', chapter: C, topic: EQ, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The number of equivalence relations on the set $\\{1, 2, 3, 4\\}$ that contain the ordered pair $(1, 2)$ is',
    options: ['$3$', '$5$', '$8$', '$15$'],
    answer: 'Correct option: B) $5$. Since $(1, 2) \\in R$, the elements $1$ and $2$ must lie in the same class. Treat them as a single object; the equivalence relations correspond to partitions of the three objects $\\{1,2\\}, 3, 4$, and a $3$-element set has $5$ partitions. ($15$ is the number of equivalence relations on $\\{1,2,3,4\\}$ without any restriction.)',
  },
  {
    id: 'c12-rf-r3-a12', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to [-1, 1]$ defined by $f(x) = \\sin x$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: B) onto but not one-one. $\\sin 0 = \\sin \\pi = 0$, so $f$ is not one-one. The values of $\\sin x$ fill the whole interval $[-1, 1]$, which is the codomain, so $f$ is onto.',
  },
  {
    id: 'c12-rf-r3-a13', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = x^{3}$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: A) one-one but not onto. $x_1^{3} = x_2^{3}$ gives $x_1 = x_2$, so $f$ is one-one. But $2$ is not the cube of any integer, so it has no pre-image in $\\mathbb{Z}$ and $f$ is not onto.',
  },
  {
    id: 'c12-rf-r3-a14', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = \\frac{x}{1 + x^{2}}$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: D) neither one-one nor onto. $f(2) = \\frac{2}{5}$ and $f\\left(\\frac{1}{2}\\right) = \\frac{1/2}{5/4} = \\frac{2}{5}$, so $f$ is not one-one. Also $1 + x^{2} \\ge 2|x|$ gives $|f(x)| \\le \\frac{1}{2}$, so a value such as $1$ has no pre-image and $f$ is not onto.',
  },
  {
    id: 'c12-rf-r3-a15', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^{3} - 3x^{2} + 3x - 2$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: C) both one-one and onto. $f(x) = (x - 1)^{3} - 1$. If $f(x_1) = f(x_2)$ then $(x_1 - 1)^{3} = (x_2 - 1)^{3}$, so $x_1 = x_2$ and $f$ is one-one. For any real $y$, $x = 1 + \\sqrt[3]{y + 1}$ is real and $f(x) = y$, so $f$ is onto.',
  },
  {
    id: 'c12-rf-r3-a16', chapter: C, topic: OO, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^{2} + 4x + 7$ is onto.\n\nReason (R): A quadratic function with a positive leading coefficient has a minimum value.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A false, R true. R is true: such a parabola opens upwards and so has a lowest value. Here $f(x) = (x + 2)^{2} + 3 \\ge 3$, so the range is $[3, \\infty)$ and values below $3$ (for example $0$) have no pre-image. Hence $f$ is not onto and A is false.',
  },
  {
    id: 'c12-rf-r3-a17', chapter: C, topic: BC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of functions $f : \\{1, 2, 3\\} \\to \\{1, 2, 3, 4, 5\\}$ satisfying $f(1) < f(2) < f(3)$ is',
    options: ['$10$', '$20$', '$60$', '$125$'],
    answer: 'Correct option: A) $10$. Choosing the three values $f(1), f(2), f(3)$ strictly increasing is the same as choosing $3$ distinct numbers from $5$ and writing them in increasing order, which can be done in $\\binom{5}{3} = 10$ ways. ($60$ counts all one-one functions and $125$ all functions.)',
  },
  {
    id: 'c12-rf-r3-a18', chapter: C, topic: BC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A set $A$ has $4$ elements and the number of functions from $A$ to a set $B$ is $625$. The number of elements in $B$ is',
    options: ['$4$', '$5$', '$6$', '$25$'],
    answer: 'Correct option: B) $5$. If $B$ has $n$ elements, the number of functions from $A$ to $B$ is $n^{4}$. Since $625 = 5^{4}$, $n = 5$.',
  },
  {
    id: 'c12-rf-r3-a19', chapter: C, topic: BC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of functions from $\\{1, 2, 3\\}$ to itself that are NOT one-one is',
    options: ['$6$', '$21$', '$27$', '$9$'],
    answer: 'Correct option: B) $21$. There are $3^{3} = 27$ functions in all and $3! = 6$ of them are one-one, so $27 - 6 = 21$ are not one-one.',
  },
  {
    id: 'c12-rf-r3-a20', chapter: C, topic: BC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of one-one functions from a set with $2$ elements to a set with $n$ elements is $90$. Then $n$ equals',
    options: ['$9$', '$10$', '$12$', '$45$'],
    answer: 'Correct option: B) $10$. The first element has $n$ possible images and the second has $n - 1$, so the count is $n(n - 1)$. $n(n - 1) = 90$ gives $n^{2} - n - 90 = 0$, i.e. $(n - 10)(n + 9) = 0$, so $n = 10$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-rf-r3-b01', chapter: C, topic: RST, type: 'short', complexity: 'easy', marks: 2,
    text: 'Let $A = \\{1, 2, 3, 4, 5\\}$ and $R = \\{(a, b) : a, b \\in A, \\; |a - b| = 1\\}$. Write $R$ in roster form and show that $R$ is symmetric but neither reflexive nor transitive.',
    answer: '$R = \\{(1,2), (2,1), (2,3), (3,2), (3,4), (4,3), (4,5), (5,4)\\}$. Symmetric: $|a - b| = |b - a|$, so every pair appears with its reverse. Not reflexive: $|a - a| = 0 \\ne 1$, so $(1, 1) \\notin R$. Not transitive: $(1, 2) \\in R$ and $(2, 3) \\in R$, but $|1 - 3| = 2 \\ne 1$, so $(1, 3) \\notin R$.',
    steps: [
      { step: 'Writes the roster form of $R$ and shows it is symmetric', marks: 1 },
      { step: 'Shows $R$ is not reflexive and gives a counterexample such as $(1,2), (2,3) \\in R$, $(1,3) \\notin R$ for transitivity', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-b02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\{x \\in \\mathbb{Z} : -6 \\le x \\le 6\\}$ and define $a \\, R \\, b$ if and only if $a^{2} = b^{2}$. Show that $R$ is an equivalence relation, write the equivalence class $[3]$ and find the number of distinct equivalence classes.',
    answer: 'Reflexive: $a^{2} = a^{2}$. Symmetric: $a^{2} = b^{2} \\Rightarrow b^{2} = a^{2}$. Transitive: $a^{2} = b^{2}$ and $b^{2} = c^{2}$ give $a^{2} = c^{2}$. So $R$ is an equivalence relation. $[3] = \\{x \\in A : x^{2} = 9\\} = \\{-3, 3\\}$. Two elements are related exactly when $a = \\pm b$, so the classes are $\\{0\\}$ and $\\{-k, k\\}$ for $k = 1, \\ldots, 6$: $1 + 6 = 7$ classes.',
    steps: [
      { step: 'Proves $R$ is reflexive, symmetric and transitive', marks: 1 },
      { step: 'Writes $[3] = \\{-3, 3\\}$ and finds $7$ classes', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-b03', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the function $f : \\mathbb{R} \\to [0, \\infty)$ defined by $f(x) = |x - 2|$ is onto but not one-one.',
    answer: 'Not one-one: $f(1) = |1 - 2| = 1$ and $f(3) = |3 - 2| = 1$, but $1 \\ne 3$. Onto: let $y \\in [0, \\infty)$. Take $x = 2 + y$; then $f(x) = |y| = y$ because $y \\ge 0$. Every element of the codomain has a pre-image, so $f$ is onto.',
    steps: [
      { step: 'Shows $f$ is not one-one using $f(1) = f(3)$', marks: 1 },
      { step: 'Shows onto by taking the pre-image $x = 2 + y$ for $y \\ge 0$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-b04', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the function $f : \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = 5x - 3$ is one-one but not onto.',
    answer: 'One-one: $f(x_1) = f(x_2)$ gives $5x_1 - 3 = 5x_2 - 3$, so $x_1 = x_2$. Not onto: take the integer $0$. $5x - 3 = 0$ gives $x = \\frac{3}{5}$, which is not an integer, so $0$ has no pre-image in $\\mathbb{Z}$. (In fact every value of $f$ leaves remainder $2$ on division by $5$.) Hence $f$ is one-one but not onto.',
    steps: [
      { step: 'Proves $f$ is one-one', marks: 1 },
      { step: 'Shows an integer such as $0$ has no integer pre-image, so $f$ is not onto', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-b05', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\{1, 2, 3\\}$ and $B = \\{1, 2, 3, 4, 5, 6, 7\\}$. Find the number of one-one functions from $A$ to $B$, and the number of those in which $f(1)$ is an odd number.',
    answer: 'One-one functions: $f(1)$ has $7$ choices, $f(2)$ has $6$ and $f(3)$ has $5$, giving $7 \\times 6 \\times 5 = 210$. With $f(1)$ odd: $B$ has $4$ odd numbers ($1, 3, 5, 7$), so $f(1)$ has $4$ choices, then $f(2)$ has $6$ and $f(3)$ has $5$, giving $4 \\times 6 \\times 5 = 120$.',
    steps: [
      { step: 'Finds $7 \\times 6 \\times 5 = 210$ one-one functions', marks: 1 },
      { step: 'Finds $4 \\times 6 \\times 5 = 120$ with $f(1)$ odd', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-b06', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\{1, 2, 3\\}$ and $B = \\{1, 2, 3, 4, 5, 6\\}$. Find the total number of functions from $A$ to $B$ and the number of these that are not one-one.',
    answer: 'Each of the $3$ elements of $A$ can be sent to any of the $6$ elements of $B$, so there are $6^{3} = 216$ functions. One-one functions: $6 \\times 5 \\times 4 = 120$. So the number of functions that are not one-one is $216 - 120 = 96$.',
    steps: [
      { step: 'Total functions $= 6^{3} = 216$', marks: 1 },
      { step: 'One-one functions $= 120$, so not one-one $= 216 - 120 = 96$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-rf-r3-c01', chapter: C, topic: RST, type: 'short', complexity: 'medium', marks: 3,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $a \\, R \\, b$ if and only if $a - b$ is divisible by $2$ or by $3$. Check whether $R$ is reflexive, symmetric and transitive.',
    answer: 'Reflexive: $a - a = 0$ is divisible by $2$, so $(a, a) \\in R$ for every integer $a$. Symmetric: if $a - b$ is divisible by $2$ (or $3$) then so is $b - a = -(a - b)$, so $(a, b) \\in R \\Rightarrow (b, a) \\in R$. Transitive: it fails. $0 - 2 = -2$ is divisible by $2$, so $(0, 2) \\in R$; $2 - 5 = -3$ is divisible by $3$, so $(2, 5) \\in R$; but $0 - 5 = -5$ is divisible by neither $2$ nor $3$, so $(0, 5) \\notin R$. So $R$ is reflexive and symmetric but not transitive.',
    steps: [
      { step: 'Shows $R$ is reflexive', marks: 1 },
      { step: 'Shows $R$ is symmetric', marks: 1 },
      { step: 'Gives a valid counterexample such as $(0,2), (2,5) \\in R$ but $(0,5) \\notin R$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c02', chapter: C, topic: RST, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and $R = \\{(a, b) : a, b \\in A, \\; a + b \\le 5\\}$. Write $R$ in roster form and determine whether $R$ is reflexive, symmetric and transitive.',
    answer: 'Roster form: $R = \\{(1,1), (1,2), (1,3), (1,4), (2,1), (2,2), (2,3), (3,1), (3,2), (4,1)\\}$. Not reflexive: $(3, 3) \\notin R$ because $3 + 3 = 6 > 5$. Symmetric: $a + b = b + a$, so $a + b \\le 5$ gives $b + a \\le 5$. Not transitive: $(4, 1) \\in R$ and $(1, 4) \\in R$, but $(4, 4) \\notin R$ since $4 + 4 = 8 > 5$. So $R$ is symmetric but neither reflexive nor transitive.',
    steps: [
      { step: 'Writes the roster form with the $10$ pairs and shows $R$ is not reflexive, e.g. $(3,3) \\notin R$', marks: 1 },
      { step: 'Shows $R$ is symmetric since $a + b = b + a$', marks: 1 },
      { step: 'Gives a counterexample for transitivity, e.g. $(4,1), (1,4) \\in R$ but $(4,4) \\notin R$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c03', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $A = \\{1, 2, 3, \\ldots, 10\\}$ and let $R = \\{(a, b) : a^{2} - b^{2} \\text{ is divisible by } 5\\}$. Show that $R$ is an equivalence relation, write the equivalence class $[6]$ and find the number of distinct equivalence classes.',
    answer: '$a \\, R \\, b$ means $a^{2}$ and $b^{2}$ leave the same remainder on division by $5$. Reflexive: $a^{2} - a^{2} = 0$ is divisible by $5$. Symmetric: if $5 \\mid a^{2} - b^{2}$ then $5 \\mid b^{2} - a^{2}$. Transitive: if $5 \\mid a^{2} - b^{2}$ and $5 \\mid b^{2} - c^{2}$, adding gives $5 \\mid a^{2} - c^{2}$. So $R$ is an equivalence relation. The remainders of $a^{2}$ on division by $5$ are: $1, 4, 6, 9 \\to 1$; $2, 3, 7, 8 \\to 4$; $5, 10 \\to 0$. Hence $[6] = \\{1, 4, 6, 9\\}$, and there are $3$ classes: $\\{1, 4, 6, 9\\}$, $\\{2, 3, 7, 8\\}$, $\\{5, 10\\}$.',
    steps: [
      { step: 'Proves $R$ is reflexive and symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive and concludes it is an equivalence relation', marks: 1 },
      { step: 'Writes $[6] = \\{1, 4, 6, 9\\}$ and finds $3$ classes', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c04', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $O$ be the origin of the coordinate plane. On the set of all points of the plane define $P \\, R \\, Q$ if and only if $OP = OQ$. Show that $R$ is an equivalence relation, describe the equivalence class of the point $(3, 4)$, and find how many points of this class have both coordinates integers.',
    answer: 'Reflexive: $OP = OP$. Symmetric: $OP = OQ \\Rightarrow OQ = OP$. Transitive: $OP = OQ$ and $OQ = OS$ give $OP = OS$. So $R$ is an equivalence relation. For $(3, 4)$, $OP = \\sqrt{9 + 16} = 5$, so the class is the set of all points at distance $5$ from the origin: the circle $x^{2} + y^{2} = 25$. Integer points on it: $(\\pm 5, 0)$ and $(0, \\pm 5)$ give $4$ points; $(\\pm 3, \\pm 4)$ gives $4$ points and $(\\pm 4, \\pm 3)$ gives $4$ points. In all, $12$ points.',
    steps: [
      { step: 'Proves $R$ is reflexive and symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive and identifies the class as the circle $x^{2} + y^{2} = 25$', marks: 1 },
      { step: 'Counts the $12$ integer-coordinate points on the circle', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c05', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'On $\\mathbb{N} \\times \\mathbb{N}$ define $(a, b) \\, R \\, (c, d)$ if and only if $ad = bc$. Show that $R$ is an equivalence relation and describe the equivalence class of $(2, 3)$.',
    answer: 'Reflexive: $ab = ba$, so $(a, b) \\, R \\, (a, b)$. Symmetric: if $ad = bc$ then $cb = da$, so $(c, d) \\, R \\, (a, b)$. Transitive: let $ad = bc$ and $cf = de$. Multiplying, $adcf = bcde$; since $c, d$ are non-zero, cancelling $cd$ gives $af = be$, so $(a, b) \\, R \\, (e, f)$. Hence $R$ is an equivalence relation. Class of $(2, 3)$: $(c, d) \\, R \\, (2, 3)$ means $2d = 3c$. So $3$ divides $2d$, hence $3 \\mid d$; write $d = 3k$, then $c = 2k$. So $[(2, 3)] = \\{(2k, 3k) : k \\in \\mathbb{N}\\} = \\{(2, 3), (4, 6), (6, 9), \\ldots\\}$.',
    steps: [
      { step: 'Proves $R$ is reflexive and symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive by multiplying and cancelling $cd$', marks: 1 },
      { step: 'Finds $[(2, 3)] = \\{(2k, 3k) : k \\in \\mathbb{N}\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c06', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x^{2} + 1$ for $x \\ge 0$ and $f(x) = x$ for $x < 0$. Show that $f$ is one-one but not onto, and find the set of real numbers that have no pre-image.',
    answer: 'For $x \\ge 0$, $x^{2} + 1$ takes exactly the values in $[1, \\infty)$. For $x < 0$, $f(x) = x$ takes exactly the values in $(-\\infty, 0)$. These two sets do not overlap. One-one: if $f(x_1) = f(x_2)$, both values lie in the same piece. If $x_1, x_2 \\ge 0$, then $x_1^{2} = x_2^{2}$ and, both being non-negative, $x_1 = x_2$. If $x_1, x_2 < 0$, then $x_1 = x_2$ directly. So $f$ is one-one. Not onto: the range is $(-\\infty, 0) \\cup [1, \\infty)$, so every $y$ with $0 \\le y < 1$ (for example $\\frac{1}{2}$) has no pre-image. The set with no pre-image is $[0, 1)$.',
    steps: [
      { step: 'Finds the ranges $[1, \\infty)$ and $(-\\infty, 0)$ of the two pieces and notes they are disjoint', marks: 1 },
      { step: 'Proves $f$ is one-one in each piece', marks: 1 },
      { step: 'Concludes $f$ is not onto and identifies $[0, 1)$ as the values with no pre-image', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c07', chapter: C, topic: OO, type: 'short', complexity: 'hard', marks: 3,
    text: 'Show that the function $f : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$ defined by $f(a, b) = 2^{a - 1}(2b - 1)$ is both one-one and onto.',
    answer: 'One-one: suppose $2^{a - 1}(2b - 1) = 2^{c - 1}(2d - 1)$. If $a > c$, dividing by $2^{c - 1}$ gives $2^{a - c}(2b - 1) = 2d - 1$; the left side is even and the right side is odd, which is impossible. By symmetry $a < c$ is also impossible, so $a = c$. Then $2b - 1 = 2d - 1$, so $b = d$. Hence $f$ is one-one. Onto: let $n \\in \\mathbb{N}$. Write $n = 2^{k} m$ with $k \\ge 0$ and $m$ odd (take out all factors of $2$). Put $a = k + 1$ and $b = \\frac{m + 1}{2}$, both natural numbers. Then $f(a, b) = 2^{k}(m + 1 - 1) = 2^{k} m = n$. So every natural number has a pre-image and $f$ is onto.',
    steps: [
      { step: 'Assumes $f(a, b) = f(c, d)$ and rules out $a \\ne c$ using even versus odd', marks: 1 },
      { step: 'Concludes $a = c$ and $b = d$, so $f$ is one-one', marks: 1 },
      { step: 'Writes $n = 2^{k} m$ with $m$ odd and gives the pre-image $(k + 1, \\frac{m + 1}{2})$, so $f$ is onto', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c08', chapter: C, topic: OO, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = |x - 1| + |x - 3|$. Show that $f$ is neither one-one nor onto, and find the range of $f$.',
    answer: 'Not one-one: $f(1) = 0 + 2 = 2$ and $f(3) = 2 + 0 = 2$, but $1 \\ne 3$. Write $f$ piece by piece. For $x \\le 1$: $f(x) = (1 - x) + (3 - x) = 4 - 2x \\ge 2$. For $1 \\le x \\le 3$: $f(x) = (x - 1) + (3 - x) = 2$. For $x \\ge 3$: $f(x) = (x - 1) + (x - 3) = 2x - 4 \\ge 2$. Each piece takes every value in $[2, \\infty)$ in the first and third cases, and the value $2$ in the middle, so the range is $[2, \\infty)$. Since the codomain is $\\mathbb{R}$, values such as $0$ have no pre-image, so $f$ is not onto.',
    steps: [
      { step: 'Shows $f$ is not one-one using $f(1) = f(3) = 2$', marks: 1 },
      { step: 'Writes $f$ on the three intervals $x \\le 1$, $1 \\le x \\le 3$, $x \\ge 3$', marks: 1 },
      { step: 'Finds the range $[2, \\infty)$ and concludes $f$ is not onto', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c09', chapter: C, topic: BC, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $A = \\{1, 2, 3, 4, 5\\}$. Find the number of bijections $f : A \\to A$, the number of bijections with $f(1) = 1$, and the number of bijections with $f(1) = 1$ and $f(2) \\ne 2$.',
    answer: 'All bijections: $5! = 120$. With $f(1) = 1$ the other four elements are mapped bijectively onto $\\{2, 3, 4, 5\\}$: $4! = 24$. Among these, those with $f(2) = 2$ as well leave $3$ elements to map bijectively onto $\\{3, 4, 5\\}$: $3! = 6$. So the number with $f(1) = 1$ and $f(2) \\ne 2$ is $24 - 6 = 18$.',
    steps: [
      { step: 'Total bijections $= 5! = 120$', marks: 1 },
      { step: 'Bijections with $f(1) = 1$: $4! = 24$', marks: 1 },
      { step: 'Subtracts the $3! = 6$ with $f(2) = 2$ to get $24 - 6 = 18$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-c10', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$. Find the number of one-one functions from $A$ to $B$, the number of one-one functions in which both $f(1)$ and $f(2)$ are even, and the number of one-one functions in which $f(1)$ is odd and $f(2)$ is even.',
    answer: 'One-one functions: $8 \\times 7 \\times 6 \\times 5 = 1680$. Both $f(1)$ and $f(2)$ even: $B$ has $4$ even numbers, so $f(1)$ has $4$ choices and $f(2)$ has $3$; then $f(3)$ has $6$ choices and $f(4)$ has $5$, giving $4 \\times 3 \\times 6 \\times 5 = 360$. $f(1)$ odd and $f(2)$ even: $4$ choices for each of $f(1)$ and $f(2)$ (they are automatically different), then $6$ and $5$ choices for $f(3)$ and $f(4)$, giving $4 \\times 4 \\times 6 \\times 5 = 480$.',
    steps: [
      { step: 'Finds $8 \\times 7 \\times 6 \\times 5 = 1680$ one-one functions', marks: 1 },
      { step: 'Finds $4 \\times 3 \\times 6 \\times 5 = 360$ with both even', marks: 1 },
      { step: 'Finds $4 \\times 4 \\times 6 \\times 5 = 480$ with $f(1)$ odd and $f(2)$ even', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-rf-r3-d01', chapter: C, topic: RST, type: 'long', complexity: 'medium', marks: 5,
    text: 'A relation $R$ on the set of natural numbers $\\mathbb{N}$ is defined by $R = \\{(a, b) : a + b \\text{ is divisible by } 3\\}$. Determine whether $R$ is reflexive, symmetric or transitive. Also list all $b \\in \\{1, 2, \\ldots, 12\\}$ for which $(4, b) \\in R$.',
    answer: 'Not reflexive: $(1, 1) \\notin R$ because $1 + 1 = 2$ is not divisible by $3$. Symmetric: $a + b = b + a$, so $(a, b) \\in R \\Rightarrow (b, a) \\in R$. Not transitive: $1 + 2 = 3$ and $2 + 4 = 6$, so $(1, 2), (2, 4) \\in R$; but $1 + 4 = 5$ is not divisible by $3$, so $(1, 4) \\notin R$. So $R$ is symmetric but neither reflexive nor transitive. $(4, b) \\in R$ means $4 + b$ is a multiple of $3$, i.e. $b$ leaves remainder $2$ on division by $3$. Among $1, \\ldots, 12$ these are $b \\in \\{2, 5, 8, 11\\}$.',
    steps: [
      { step: 'Shows $R$ is not reflexive using $(1, 1) \\notin R$', marks: 1 },
      { step: 'Shows $R$ is symmetric since $a + b = b + a$', marks: 1 },
      { step: 'Chooses $a = 1$, $b = 2$, $c = 4$ with $(a, b), (b, c) \\in R$', marks: 1 },
      { step: 'Verifies $(1, 4) \\notin R$ and concludes $R$ is not transitive', marks: 1 },
      { step: 'Lists $b \\in \\{2, 5, 8, 11\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d02', chapter: C, topic: RST, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $S$ be the set of all subsets of $\\{1, 2, 3\\}$ and define a relation $R$ on $S$ by $R = \\{(X, Y) : X \\subseteq Y\\}$. Show that $R$ is reflexive and transitive but not symmetric. Also list all sets $Y$ with $(\\{1\\}, Y) \\in R$ and find the total number of ordered pairs in $R$.',
    answer: 'Reflexive: every set is a subset of itself, so $(X, X) \\in R$. Transitive: if $X \\subseteq Y$ and $Y \\subseteq Z$ then every element of $X$ is in $Y$, hence in $Z$, so $X \\subseteq Z$ and $(X, Z) \\in R$. Not symmetric: $\\{1\\} \\subseteq \\{1, 2\\}$, so $(\\{1\\}, \\{1, 2\\}) \\in R$, but $\\{1, 2\\} \\not\\subseteq \\{1\\}$, so $(\\{1, 2\\}, \\{1\\}) \\notin R$. $(\\{1\\}, Y) \\in R$ means $Y$ contains $1$: $Y \\in \\{\\{1\\}, \\{1, 2\\}, \\{1, 3\\}, \\{1, 2, 3\\}\\}$, which is $4$ sets. Total pairs: for each of the elements $1, 2, 3$ there are three possibilities for the pair $(X, Y)$ with $X \\subseteq Y$: the element is in neither set, in $Y$ only, or in both. So the number of pairs is $3^{3} = 27$.',
    steps: [
      { step: 'Shows $R$ is reflexive', marks: 1 },
      { step: 'Shows $R$ is transitive', marks: 1 },
      { step: 'Shows $R$ is not symmetric with a counterexample such as $\\{1\\} \\subseteq \\{1, 2\\}$', marks: 1 },
      { step: 'Lists the $4$ sets $Y$ containing $1$', marks: 1 },
      { step: 'Counts $3^{3} = 27$ ordered pairs in $R$ with a valid argument', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d03', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $A = \\{1, 2, 3, \\ldots, 20\\}$ and define $a \\, R \\, b$ if and only if $a - b$ is divisible by $6$. Show that $R$ is an equivalence relation. Write the equivalence class $[4]$, find the number of distinct equivalence classes, and find the number of ordered pairs in $R$.',
    answer: 'Reflexive: $a - a = 0$ is divisible by $6$. Symmetric: if $6 \\mid a - b$ then $6 \\mid b - a$. Transitive: if $6 \\mid a - b$ and $6 \\mid b - c$, adding gives $6 \\mid a - c$. So $R$ is an equivalence relation. Elements are related exactly when they leave the same remainder on division by $6$. $[4] = \\{4, 10, 16\\}$. The remainders $1, 2, 3, 4, 5, 0$ all occur, so there are $6$ classes: remainder $1$: $\\{1, 7, 13, 19\\}$ (size $4$); remainder $2$: $\\{2, 8, 14, 20\\}$ (size $4$); remainder $3$: $\\{3, 9, 15\\}$ (size $3$); remainder $4$: $\\{4, 10, 16\\}$ (size $3$); remainder $5$: $\\{5, 11, 17\\}$ (size $3$); remainder $0$: $\\{6, 12, 18\\}$ (size $3$). A class of size $k$ gives $k^{2}$ ordered pairs, so $R$ has $16 + 16 + 9 + 9 + 9 + 9 = 68$ pairs.',
    steps: [
      { step: 'Proves $R$ is reflexive and symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive and concludes it is an equivalence relation', marks: 1 },
      { step: 'Writes $[4] = \\{4, 10, 16\\}$', marks: 1 },
      { step: 'Finds the $6$ classes (one for each remainder) with their sizes', marks: 1 },
      { step: 'Counts $\\sum k^{2} = 68$ ordered pairs', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d04', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $\\mathbb{R}^{+}$ be the set of positive real numbers and define $a \\, R \\, b$ if and only if $\\frac{a}{b}$ is a rational number. Show that $R$ is an equivalence relation. Describe the equivalence class $[1]$, and decide whether $(\\sqrt{2}, 3\\sqrt{2}) \\in R$ and whether $(\\sqrt{2}, 2) \\in R$.',
    answer: 'Reflexive: $\\frac{a}{a} = 1$ is rational. Symmetric: if $\\frac{a}{b}$ is rational (and non-zero), then $\\frac{b}{a} = \\left(\\frac{a}{b}\\right)^{-1}$ is rational. Transitive: if $\\frac{a}{b}$ and $\\frac{b}{c}$ are rational, then $\\frac{a}{c} = \\frac{a}{b} \\cdot \\frac{b}{c}$ is rational. So $R$ is an equivalence relation. $[1] = \\{x \\in \\mathbb{R}^{+} : \\frac{x}{1} \\text{ is rational}\\}$ is the set of all positive rational numbers. $\\frac{\\sqrt{2}}{3\\sqrt{2}} = \\frac{1}{3}$ is rational, so $(\\sqrt{2}, 3\\sqrt{2}) \\in R$. $\\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$ is irrational, so $(\\sqrt{2}, 2) \\notin R$; that is, $\\sqrt{2}$ does not belong to the class $[1]$, which also contains $2$.',
    steps: [
      { step: 'Proves $R$ is reflexive and symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive using $\\frac{a}{c} = \\frac{a}{b} \\cdot \\frac{b}{c}$', marks: 1 },
      { step: 'Identifies $[1]$ as the set of positive rational numbers', marks: 1 },
      { step: 'Shows $(\\sqrt{2}, 3\\sqrt{2}) \\in R$ since the ratio is $\\frac{1}{3}$', marks: 1 },
      { step: 'Shows $(\\sqrt{2}, 2) \\notin R$ since the ratio $\\frac{1}{\\sqrt{2}}$ is irrational', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d05', chapter: C, topic: OO, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $k$ be a real constant and let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = (k^{2} - 4)x + 7$. Find all values of $k$ for which $f$ is both one-one and onto, and show that for every other value of $k$ the function is neither one-one nor onto. For $k = 3$, find $x$ such that $f(x) = 22$.',
    answer: 'Suppose $k^{2} \\ne 4$, i.e. $k \\ne \\pm 2$. One-one: $f(x_1) = f(x_2)$ gives $(k^{2} - 4)x_1 = (k^{2} - 4)x_2$, and dividing by $k^{2} - 4 \\ne 0$ gives $x_1 = x_2$. Onto: for any real $y$, take $x = \\frac{y - 7}{k^{2} - 4}$, which is real, and $f(x) = (y - 7) + 7 = y$. So $f$ is one-one and onto exactly when $k \\ne 2$ and $k \\ne -2$. If $k = 2$ or $k = -2$, then $k^{2} - 4 = 0$ and $f(x) = 7$ for every $x$. Then $f(0) = f(1) = 7$, so $f$ is not one-one, and any value other than $7$, such as $0$, has no pre-image, so $f$ is not onto. For $k = 3$: $f(x) = 5x + 7 = 22$ gives $x = 3$.',
    steps: [
      { step: 'For $k^{2} \\ne 4$, proves $f$ is one-one', marks: 1 },
      { step: 'For $k^{2} \\ne 4$, proves $f$ is onto with pre-image $\\frac{y - 7}{k^{2} - 4}$', marks: 1 },
      { step: 'For $k = \\pm 2$, notes $f$ is the constant function $7$ and so not one-one', marks: 1 },
      { step: 'For $k = \\pm 2$, shows $f$ is not onto', marks: 1 },
      { step: 'Finds $x = 3$ for $k = 3$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d06', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x + 3$ for $x < -1$ and $f(x) = (x + 1)^{2} + 2$ for $x \\ge -1$. Show that $f$ is one-one and onto, and find the values of $x$ for which $f(x) = -4$ and $f(x) = 11$.',
    answer: 'Ranges of the pieces: for $x < -1$, $x + 3 < 2$, and $x + 3$ takes every value in $(-\\infty, 2)$. For $x \\ge -1$, $(x + 1)^{2} \\ge 0$, so $f(x) \\ge 2$, and every value in $[2, \\infty)$ is attained. These two sets do not overlap. One-one: equal images come from the same piece. For $x_1, x_2 < -1$, $x_1 + 3 = x_2 + 3$ gives $x_1 = x_2$. For $x_1, x_2 \\ge -1$, $(x_1 + 1)^{2} = (x_2 + 1)^{2}$ with both $x_1 + 1, x_2 + 1 \\ge 0$ gives $x_1 = x_2$. So $f$ is one-one. Onto: for $y < 2$, $x = y - 3 < -1$ and $f(x) = y$. For $y \\ge 2$, $x = -1 + \\sqrt{y - 2} \\ge -1$ and $f(x) = (y - 2) + 2 = y$. So $f$ is onto, hence a bijection. $f(x) = -4 < 2$: $x + 3 = -4$ gives $x = -7$ (and $-7 < -1$). $f(x) = 11 \\ge 2$: $(x + 1)^{2} = 9$ with $x + 1 \\ge 0$ gives $x + 1 = 3$, so $x = 2$.',
    steps: [
      { step: 'Finds the ranges $(-\\infty, 2)$ and $[2, \\infty)$ of the two pieces and notes they are disjoint', marks: 1 },
      { step: 'Proves one-one in each piece, using $x + 1 \\ge 0$ in the second', marks: 1 },
      { step: 'Proves onto with pre-images $y - 3$ and $-1 + \\sqrt{y - 2}$', marks: 1 },
      { step: 'Finds $x = -7$ for $f(x) = -4$', marks: 1 },
      { step: 'Finds $x = 2$ for $f(x) = 11$, rejecting $x = -4$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d07', chapter: C, topic: BC, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{a, b, c, d, e\\}$. Find: (a) the number of functions from $A$ to $B$; (b) the number of one-one functions from $A$ to $B$; (c) the number of one-one functions with $f(1) = a$; (d) the number of functions with $f(1) \\ne f(2)$; (e) the number of functions that are not one-one.',
    answer: '(a) Each of the $4$ elements has $5$ choices: $5^{4} = 625$. (b) $5 \\times 4 \\times 3 \\times 2 = 120$. (c) $f(1) = a$ is fixed; then $f(2), f(3), f(4)$ are chosen one-one from the remaining $4$ elements: $4 \\times 3 \\times 2 = 24$. (d) $f(1)$ has $5$ choices and $f(2)$ has $4$ (different from $f(1)$), while $f(3)$ and $f(4)$ are free with $5$ choices each: $5 \\times 4 \\times 5 \\times 5 = 500$. (e) Functions that are not one-one $= 625 - 120 = 505$.',
    steps: [
      { step: '(a) $625$', marks: 1 },
      { step: '(b) $120$', marks: 1 },
      { step: '(c) $24$', marks: 1 },
      { step: '(d) $5 \\times 4 \\times 5 \\times 5 = 500$', marks: 1 },
      { step: '(e) $625 - 120 = 505$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r3-d08', chapter: C, topic: BC, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $A = \\{1, 2, 3, 4, 5, 6\\}$ and $B = \\{0, 1\\}$. Find: (a) the total number of functions from $A$ to $B$; (b) the number of onto functions from $A$ to $B$; (c) the number of functions in which exactly three elements of $A$ are mapped to $1$; (d) the number of onto functions with $f(1) = 0$; (e) the number of functions in which at least four elements of $A$ are mapped to $1$.',
    answer: '(a) Each of $6$ elements has $2$ choices: $2^{6} = 64$. (b) The only functions that are not onto are the two constant functions, so $64 - 2 = 62$. (c) Choose which $3$ of the $6$ elements go to $1$: $\\binom{6}{3} = 20$; the rest go to $0$. (d) With $f(1) = 0$ the other $5$ elements are free: $2^{5} = 32$ functions; the only one of these that is not onto is the constant function $0$, so $32 - 1 = 31$. (e) Exactly four go to $1$: $\\binom{6}{4} = 15$; exactly five: $\\binom{6}{5} = 6$; all six: $1$. Total $15 + 6 + 1 = 22$.',
    steps: [
      { step: '(a) $64$', marks: 1 },
      { step: '(b) $62$, removing the two constant functions', marks: 1 },
      { step: '(c) $\\binom{6}{3} = 20$', marks: 1 },
      { step: '(d) $2^{5} - 1 = 31$', marks: 1 },
      { step: '(e) $15 + 6 + 1 = 22$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-rf-r3-e01', chapter: C, topic: RST, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Four teams $P, Q, R, S$ play a round-robin tournament in which every pair of teams plays exactly once and there are no draws. The results are: $P$ beat $Q$, $Q$ beat $R$, $R$ beat $P$, and $S$ lost to each of $P, Q, R$. Let $W = \\{(x, y) : x \\text{ beat } y\\}$ be the relation on $\\{P, Q, R, S\\}$ that records these results.',
    answer: '(i) Not reflexive. (ii) Not symmetric. (iii) $(P, Q), (Q, R) \\in W$ but $(P, R) \\notin W$, so not transitive; $6$ pairs must be added to make it symmetric. OR (iii) $T$ is an equivalence relation with classes $\\{P, Q, R\\}$ and $\\{S\\}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $W$ reflexive? Give a reason.',
        answer: 'No. A team does not play itself, so $(P, P) \\notin W$ (and similarly for the others).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is $W$ symmetric? Give a reason.',
        answer: 'No. $(P, Q) \\in W$ because $P$ beat $Q$, but $(Q, P) \\notin W$ because $Q$ did not beat $P$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $W$ is not transitive, and find how many ordered pairs must be added to $W$ to make it symmetric.\n\nOR\n\nLet $T = \\{(x, y) : x \\text{ and } y \\text{ won the same number of matches}\\}$. Show that $T$ is an equivalence relation and write its equivalence classes.',
        answer: '$(P, Q) \\in W$ and $(Q, R) \\in W$, but $(P, R) \\notin W$ because $R$ beat $P$, not the other way round. So $W$ is not transitive. $W$ has $6$ pairs: $(P,Q), (Q,R), (R,P), (P,S), (Q,S), (R,S)$. None of their reverses is in $W$, so the $6$ reverse pairs $(Q,P), (R,Q), (P,R), (S,P), (S,Q), (S,R)$ must be added: $6$ pairs. OR: the wins are $P$: $2$ (over $Q$ and $S$), $Q$: $2$ (over $R$ and $S$), $R$: $2$ (over $P$ and $S$), $S$: $0$. Having the same number of wins is reflexive, symmetric and transitive (it is equality of numbers), so $T$ is an equivalence relation, with classes $\\{P, Q, R\\}$ and $\\{S\\}$.',
      },
    ],
  },
  {
    id: 'c12-rf-r3-e02', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At a school fair, raffle tickets are numbered $10, 11, 12, \\ldots, 30$. To form prize groups, the organisers put two tickets in the same group when their digit sums are equal; for example $12$ and $21$ both have digit sum $3$. This is the relation $R = \\{(a, b) : a \\text{ and } b \\text{ have the same digit sum}\\}$ on $A = \\{10, 11, \\ldots, 30\\}$.',
    answer: '(i) Yes, an equivalence relation. (ii) $[12] = \\{12, 21, 30\\}$. (iii) $11$ groups, with the largest group having $3$ tickets. OR (iii) $43$ ordered pairs.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $R$ an equivalence relation? Give a brief reason.',
        answer: 'Yes. A ticket has the same digit sum as itself (reflexive); equal digit sums can be read in either order (symmetric); if $a, b$ have equal digit sums and $b, c$ have equal digit sums then so do $a, c$ (transitive).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the equivalence class of the ticket numbered $12$.',
        answer: 'Tickets with digit sum $3$: $12$, $21$ and $30$. So $[12] = \\{12, 21, 30\\}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'How many prize groups (equivalence classes) are there, and how many tickets are in the largest group?\n\nOR\n\nHow many ordered pairs does $R$ contain?',
        answer: 'The digit sums are: $10 \\to 1$; $11, 20 \\to 2$; $12, 21, 30 \\to 3$; $13, 22 \\to 4$; $14, 23 \\to 5$; $15, 24 \\to 6$; $16, 25 \\to 7$; $17, 26 \\to 8$; $18, 27 \\to 9$; $19, 28 \\to 10$; $29 \\to 11$. So there are $11$ groups, and the largest is $\\{12, 21, 30\\}$ with $3$ tickets. OR: a group of size $k$ gives $k^{2}$ ordered pairs. The sizes are $1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 1$, so the number of pairs is $1 + 4 + 9 + 7 \\times 4 + 1 = 43$.',
      },
    ],
  },
  {
    id: 'c12-rf-r3-e03', chapter: C, topic: OO, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An electricity board charges for $u$ units used in a month as follows: Rs $4$ per unit for the first $100$ units, and Rs $6$ per unit for every unit beyond $100$. The monthly bill is the function $f : [0, \\infty) \\to [0, \\infty)$ with $f(u) = 4u$ for $0 \\le u \\le 100$ and $f(u) = 400 + 6(u - 100)$ for $u > 100$.',
    answer: '(i) Rs $700$. (ii) $200$ units. (iii) $f$ is one-one and onto (pre-image $\\frac{y}{4}$ for $y \\le 400$ and $100 + \\frac{y - 400}{6}$ for $y > 400$). OR (iii) the two plans give equal bills at $u = 0$ and $u = 200$ units.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find the bill for a household that uses $150$ units.',
        answer: '$f(150) = 400 + 6(150 - 100) = 400 + 300 = 700$, so the bill is Rs $700$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'A bill came to Rs $1000$. How many units were used?',
        answer: 'Since $1000 > 400$, the usage exceeds $100$ units. $400 + 6(u - 100) = 1000$ gives $u - 100 = 100$, so $u = 200$ units.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $f : [0, \\infty) \\to [0, \\infty)$ is both one-one and onto.\n\nOR\n\nA second plan charges Rs $5$ per unit for every unit, $g(u) = 5u$. For which numbers of units $u$ do the two plans give the same bill?',
        answer: 'For $0 \\le u \\le 100$, $f(u) = 4u$ takes exactly the values in $[0, 400]$; for $u > 100$, $f(u) = 6u - 200$ takes exactly the values in $(400, \\infty)$. These sets do not overlap. One-one: equal images lie in the same piece, and $4u_1 = 4u_2$ or $6u_1 - 200 = 6u_2 - 200$ each give $u_1 = u_2$. Onto: for $0 \\le y \\le 400$ take $u = \\frac{y}{4} \\in [0, 100]$; for $y > 400$ take $u = 100 + \\frac{y - 400}{6} > 100$. In each case $f(u) = y$. OR: for $u \\le 100$, $4u = 5u$ gives $u = 0$. For $u > 100$, $6u - 200 = 5u$ gives $u = 200$. So the bills are equal at $u = 0$ and $u = 200$ units.',
      },
    ],
  },
  {
    id: 'c12-rf-r3-e04', chapter: C, topic: BC, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'At an annual day, four different prizes form the set $P = \\{p_1, p_2, p_3, p_4\\}$ and are to be given to students from a group of six students $S = \\{s_1, s_2, s_3, s_4, s_5, s_6\\}$. An assignment of prizes to students is a function from $P$ to $S$ (each prize goes to exactly one student).',
    answer: '(i) $6^{4} = 1296$. (ii) $6 \\times 5 \\times 4 \\times 3 = 360$. (iii) No such function is onto; $1296 - 625 = 671$ assignments give $s_1$ at least one prize. OR (iii) $2 \\times 5 \\times 4 \\times 3 = 120$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'In how many ways can the prizes be assigned if a student may receive more than one prize?',
        answer: 'Each of the $4$ prizes can go to any of the $6$ students: $6^{4} = 1296$ ways.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'In how many ways can the prizes be assigned if no student may receive more than one prize (one-one functions)?',
        answer: '$p_1$ has $6$ choices, $p_2$ has $5$, $p_3$ has $4$ and $p_4$ has $3$: $6 \\times 5 \\times 4 \\times 3 = 360$ ways.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Is any function from $P$ to $S$ onto? Give a reason. Also find the number of assignments in which student $s_1$ receives at least one prize.\n\nOR\n\nFind the number of assignments in which all four prizes go to different students and $p_1$ goes to $s_1$ or $s_2$.',
        answer: 'No function from $P$ to $S$ is onto: at most $4$ different students can receive a prize, but $S$ has $6$ students, so some student always gets nothing. Assignments in which $s_1$ receives no prize send the prizes to the other $5$ students: $5^{4} = 625$. So the number in which $s_1$ receives at least one prize is $1296 - 625 = 671$. OR: $p_1$ has $2$ choices ($s_1$ or $s_2$); then $p_2$ has $5$, $p_3$ has $4$ and $p_4$ has $3$ choices of the remaining students: $2 \\times 5 \\times 4 \\times 3 = 120$.',
      },
    ],
  },
];
