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

export const CH01_RF: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-rf-a01', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = \\{1, 2, 3\\}$ and $R = \\{(1,1), (2,2), (3,3), (1,3)\\}$ be a relation on $A$. Then $R$ is',
    options: [
      'reflexive and symmetric but not transitive',
      'reflexive and transitive but not symmetric',
      'symmetric and transitive but not reflexive',
      'an equivalence relation',
    ],
    answer: 'Correct option: B) reflexive and transitive but not symmetric. All of $(1,1), (2,2), (3,3)$ are in $R$, so it is reflexive. $(1,3) \\in R$ but $(3,1) \\notin R$, so it is not symmetric. Every chain such as $(1,1), (1,3)$ or $(1,3), (3,3)$ gives $(1,3) \\in R$, so it is transitive.',
  },
  {
    id: 'c12-rf-a02', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of reflexive relations on a set with $3$ elements is',
    options: ['$8$', '$64$', '$512$', '$6$'],
    answer: 'Correct option: B) $64$. $A \\times A$ has $9$ ordered pairs; the $3$ diagonal pairs must be included, and each of the other $6$ pairs may or may not be included, giving $2^{6} = 64$ reflexive relations. ($512 = 2^{9}$ counts all relations.)',
  },
  {
    id: 'c12-rf-a03', chapter: C, topic: RST, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A relation $R$ on the set of real numbers is defined by $a \\, R \\, b$ if and only if $a \\le b + 1$. Then $R$ is',
    options: [
      'reflexive only',
      'reflexive and transitive but not symmetric',
      'symmetric only',
      'an equivalence relation',
    ],
    answer: 'Correct option: A) reflexive only. $a \\le a + 1$ always, so $R$ is reflexive. $1 \\le 5 + 1$ but $5 \\not\\le 1 + 1$, so it is not symmetric. $3 \\le 2 + 1$ and $2 \\le 1 + 1$ but $3 \\not\\le 1 + 1$, so it is not transitive.',
  },
  {
    id: 'c12-rf-a04', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $L$ be the set of all lines in a plane and let $R = \\{(l_1, l_2) : l_1 \\text{ is perpendicular to } l_2\\}$. Then $R$ is',
    options: [
      'reflexive only',
      'symmetric only',
      'transitive only',
      'symmetric and transitive but not reflexive',
    ],
    answer: 'Correct option: B) symmetric only. No line is perpendicular to itself, so $R$ is not reflexive. If $l_1 \\perp l_2$ then $l_2 \\perp l_1$, so it is symmetric. If $l_1 \\perp l_2$ and $l_2 \\perp l_3$, then $l_1$ is parallel to $l_3$, not perpendicular, so it is not transitive.',
  },
  {
    id: 'c12-rf-a05', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The relation $R = \\{(a, b) : a - b \\text{ is divisible by } 4\\}$ is an equivalence relation on the set of integers $\\mathbb{Z}$. The number of distinct equivalence classes of $R$ is',
    options: ['$2$', '$3$', '$4$', 'infinitely many'],
    answer: 'Correct option: C) $4$. Two integers are related exactly when they leave the same remainder on division by $4$, so the classes are $[0], [1], [2], [3]$, which is $4$ classes.',
  },
  {
    id: 'c12-rf-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of ordered pairs in the smallest equivalence relation on $A = \\{1, 2, 3\\}$ that contains the pair $(1, 2)$ is',
    options: ['$3$', '$4$', '$5$', '$6$'],
    answer: 'Correct option: C) $5$. Reflexivity needs $(1,1), (2,2), (3,3)$ and symmetry needs $(2,1)$, giving $\\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}$. This set is already transitive, so the smallest such relation has $5$ pairs.',
  },
  {
    id: 'c12-rf-a07', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 3 - 2x$ is',
    options: ['one-one but not onto', 'onto but not one-one', 'both one-one and onto', 'neither one-one nor onto'],
    answer: 'Correct option: C) both one-one and onto. $3 - 2x_1 = 3 - 2x_2$ gives $x_1 = x_2$, so $f$ is one-one. For any real $y$, $x = \\frac{3 - y}{2}$ is real and $f(x) = y$, so $f$ is onto.',
  },
  {
    id: 'c12-rf-a08', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : \\mathbb{N} \\to \\mathbb{N}$ defined by $f(x) = 2x + 3$ is',
    options: ['one-one but not onto', 'onto but not one-one', 'both one-one and onto', 'neither one-one nor onto'],
    answer: 'Correct option: A) one-one but not onto. $2x_1 + 3 = 2x_2 + 3$ gives $x_1 = x_2$, so $f$ is one-one. The smallest value is $f(1) = 5$, so $1, 2, 3, 4$ (and every even number) have no pre-image in $\\mathbb{N}$; $f$ is not onto.',
  },
  {
    id: 'c12-rf-a09', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^{2} - 4x + 5$ is',
    options: ['one-one but not onto', 'onto but not one-one', 'both one-one and onto', 'neither one-one nor onto'],
    answer: 'Correct option: D) neither one-one nor onto. $f(x) = (x - 2)^{2} + 1$, so $f(1) = f(3) = 2$ and $f$ is not one-one. Also $f(x) \\ge 1$ for all $x$, so a value such as $0$ has no pre-image and $f$ is not onto.',
  },
  {
    id: 'c12-rf-a10', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to B$ defined by $f(x) = x^{2} - 6x + 11$ is onto. Then the set $B$ is',
    options: ['$[2, \\infty)$', '$[11, \\infty)$', '$[-2, \\infty)$', '$\\mathbb{R}$'],
    answer: 'Correct option: A) $[2, \\infty)$. $f(x) = (x - 3)^{2} + 2$, so the range of $f$ is $[2, \\infty)$. For $f$ to be onto, the codomain must equal the range.',
  },
  {
    id: 'c12-rf-a11', chapter: C, topic: OO, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x|x|$ is',
    options: ['one-one but not onto', 'onto but not one-one', 'both one-one and onto', 'neither one-one nor onto'],
    answer: 'Correct option: C) both one-one and onto. $f(x) = x^{2}$ for $x \\ge 0$ and $f(x) = -x^{2}$ for $x < 0$, so $f$ is strictly increasing and therefore one-one. Each $y \\ge 0$ has pre-image $\\sqrt{y}$ and each $y < 0$ has pre-image $-\\sqrt{-y}$, so $f$ is onto.',
  },
  {
    id: 'c12-rf-a12', chapter: C, topic: OO, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^{3} + x$ is one-one.\n\nReason (R): A function that is strictly increasing on its whole domain is one-one.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both true, and R explains A. If $x_1 < x_2$ then $x_1^{3} < x_2^{3}$, so $x_1^{3} + x_1 < x_2^{3} + x_2$; $f$ is strictly increasing. A strictly increasing function never takes the same value twice, which is exactly why $f$ is one-one.',
  },
  {
    id: 'c12-rf-a13', chapter: C, topic: BC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = \\{1, 2, 3\\}$ and $B = \\{a, b, c, d\\}$. The number of one-one functions from $A$ to $B$ is',
    options: ['$12$', '$24$', '$64$', '$81$'],
    answer: 'Correct option: B) $24$. The image of $1$ can be chosen in $4$ ways, then $2$ in $3$ ways and $3$ in $2$ ways, giving $4 \\times 3 \\times 2 = 24$. ($64 = 4^{3}$ counts all functions.)',
  },
  {
    id: 'c12-rf-a14', chapter: C, topic: BC, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): The number of onto functions from $\\{1, 2, 3, 4\\}$ to $\\{x, y\\}$ is $14$.\n\nReason (R): For $m \\ge 1$, the number of onto functions from a set with $m$ elements to a set with $2$ elements is $2^{m} - 2$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both true, and R explains A. There are $2^{m}$ functions from an $m$-element set to a $2$-element set, and the only ones that are not onto are the $2$ constant functions, so R is true. Putting $m = 4$ in R gives $2^{4} - 2 = 14$, which is exactly A.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-rf-b01', chapter: C, topic: RST, type: 'short', complexity: 'easy', marks: 2,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and let $R = \\{(a, b) : a, b \\in A, \\; b = a + 1\\}$. Write $R$ in roster form and show that $R$ is neither reflexive nor symmetric.',
    answer: '$R = \\{(1, 2), (2, 3), (3, 4)\\}$. Not reflexive: $(1, 1) \\notin R$ (indeed no $(a, a)$ is in $R$, since $a \\ne a + 1$). Not symmetric: $(1, 2) \\in R$ but $(2, 1) \\notin R$. Hence $R$ is neither reflexive nor symmetric.',
    steps: [
      { step: 'Writes $R = \\{(1,2), (2,3), (3,4)\\}$ and shows it is not reflexive, e.g. $(1,1) \\notin R$', marks: 1 },
      { step: 'Shows it is not symmetric with a counterexample such as $(1,2) \\in R$, $(2,1) \\notin R$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-b02', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the function $f : \\mathbb{R} - \\{1\\} \\to \\mathbb{R} - \\{1\\}$ defined by $f(x) = \\frac{x + 3}{x - 1}$ is onto.',
    answer: 'Let $y \\in \\mathbb{R} - \\{1\\}$. Solve $y = \\frac{x + 3}{x - 1}$: $xy - y = x + 3$, so $x(y - 1) = y + 3$ and $x = \\frac{y + 3}{y - 1}$, which is a real number since $y \\ne 1$. Also $x \\ne 1$, because $\\frac{y + 3}{y - 1} = 1$ would give $y + 3 = y - 1$, i.e. $3 = -1$, which is impossible. So $x \\in \\mathbb{R} - \\{1\\}$ and $f(x) = \\frac{\\frac{y+3}{y-1} + 3}{\\frac{y+3}{y-1} - 1} = \\frac{4y}{4} = y$. Every element of the codomain has a pre-image, so $f$ is onto.',
    steps: [
      { step: 'Solves $y = f(x)$ to get $x = \\frac{y + 3}{y - 1}$', marks: 1 },
      { step: 'Shows this $x$ lies in $\\mathbb{R} - \\{1\\}$ (and $f(x) = y$), concluding $f$ is onto', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-b03', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $R = \\{(a, b) : 3a + b \\text{ is divisible by } 4\\}$. Show that $R$ is symmetric, and write the equivalence class $[1]$.',
    answer: 'Symmetric: let $(a, b) \\in R$, so $3a + b = 4k$ for some integer $k$. Then $b = 4k - 3a$ and $3b + a = 12k - 9a + a = 12k - 8a = 4(3k - 2a)$, which is divisible by $4$. So $(b, a) \\in R$ and $R$ is symmetric. (Note $3a + b = 4a + (b - a)$, so $a \\, R \\, b$ exactly when $b - a$ is divisible by $4$.) Class of $1$: $3(1) + b$ divisible by $4$ means $b + 3 \\equiv 0$, i.e. $b$ leaves remainder $1$ on division by $4$. So $[1] = \\{\\ldots, -7, -3, 1, 5, 9, \\ldots\\} = \\{4n + 1 : n \\in \\mathbb{Z}\\}$.',
    steps: [
      { step: 'Proves symmetry: from $3a + b = 4k$ shows $3b + a = 4(3k - 2a)$', marks: 1 },
      { step: 'Writes $[1] = \\{4n + 1 : n \\in \\mathbb{Z}\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-b04', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\{1, 2, 3\\}$ and $B = \\{p, q\\}$. Find the total number of functions from $A$ to $B$ and the number of these that are onto. Is any function from $A$ to $B$ one-one? Give a reason.',
    answer: 'Each of the $3$ elements of $A$ can go to either of $2$ elements, so there are $2^{3} = 8$ functions. The only functions that are not onto are the two constant functions (all to $p$, or all to $q$), so the number of onto functions is $8 - 2 = 6$. No function from $A$ to $B$ is one-one: three elements are sent into a set of only two, so two of them must share an image.',
    steps: [
      { step: 'Total functions $= 2^{3} = 8$ and onto functions $= 8 - 2 = 6$', marks: 1 },
      { step: 'States none is one-one because $|A| > |B|$ forces two elements to share an image', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-rf-c01', chapter: C, topic: RST, type: 'short', complexity: 'medium', marks: 3,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $R = \\{(a, b) : ab \\ge 0\\}$. Check whether $R$ is reflexive, symmetric and transitive.',
    answer: 'Reflexive: for every integer $a$, $a \\cdot a = a^{2} \\ge 0$, so $(a, a) \\in R$; $R$ is reflexive. Symmetric: if $ab \\ge 0$ then $ba = ab \\ge 0$, so $(a, b) \\in R \\Rightarrow (b, a) \\in R$; $R$ is symmetric. Transitive: take $a = 2$, $b = 0$, $c = -3$. Then $ab = 0 \\ge 0$ and $bc = 0 \\ge 0$, so $(2, 0), (0, -3) \\in R$, but $ac = -6 < 0$, so $(2, -3) \\notin R$. Hence $R$ is not transitive. So $R$ is reflexive and symmetric but not transitive.',
    steps: [
      { step: 'Shows $R$ is reflexive since $a^{2} \\ge 0$', marks: 1 },
      { step: 'Shows $R$ is symmetric since $ab = ba$', marks: 1 },
      { step: 'Gives a valid counterexample (using $0$) showing $R$ is not transitive', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-c02', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f : \\mathbb{Z} \\to \\mathbb{Z}$ be defined by $f(x) = x + 2$ if $x$ is even and $f(x) = x - 2$ if $x$ is odd. Show that $f$ is both one-one and onto.',
    answer: 'Note that $f$ sends even integers to even integers and odd integers to odd integers. One-one: suppose $f(x_1) = f(x_2)$. Then $f(x_1)$ and $f(x_2)$ have the same parity, so $x_1$ and $x_2$ have the same parity. If both are even, $x_1 + 2 = x_2 + 2$ gives $x_1 = x_2$; if both are odd, $x_1 - 2 = x_2 - 2$ gives $x_1 = x_2$. So $f$ is one-one. Onto: let $y \\in \\mathbb{Z}$. If $y$ is even, $x = y - 2$ is even and $f(x) = y$. If $y$ is odd, $x = y + 2$ is odd and $f(x) = y$. Every integer has a pre-image, so $f$ is onto. Hence $f$ is a bijection.',
    steps: [
      { step: 'Observes $f$ preserves parity, so equal images come from inputs of the same parity', marks: 1 },
      { step: 'Completes the one-one argument in both cases', marks: 1 },
      { step: 'Shows onto by giving pre-images $y - 2$ (even $y$) and $y + 2$ (odd $y$)', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-c03', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $A = \\{1, 2, 3, \\ldots, 12\\}$ and let $R = \\{(a, b) : a \\text{ and } b \\text{ leave the same remainder when divided by } 5\\}$. Show that $R$ is an equivalence relation on $A$ and write the equivalence class $[3]$.',
    answer: 'Write $r(a)$ for the remainder of $a$ on division by $5$, so $a \\, R \\, b$ means $r(a) = r(b)$. Reflexive: $r(a) = r(a)$, so $(a, a) \\in R$ for every $a \\in A$. Symmetric: if $r(a) = r(b)$ then $r(b) = r(a)$, so $(a, b) \\in R \\Rightarrow (b, a) \\in R$. Transitive: if $r(a) = r(b)$ and $r(b) = r(c)$ then $r(a) = r(c)$, so $(a, b), (b, c) \\in R \\Rightarrow (a, c) \\in R$. Hence $R$ is an equivalence relation. The elements of $A$ leaving remainder $3$ are $3$ and $8$, so $[3] = \\{3, 8\\}$.',
    steps: [
      { step: 'Proves reflexive and symmetric', marks: 1 },
      { step: 'Proves transitive and concludes $R$ is an equivalence relation', marks: 1 },
      { step: 'Writes $[3] = \\{3, 8\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-c04', chapter: C, topic: OO, type: 'short', complexity: 'hard', marks: 3,
    text: 'Show that the function $f : \\mathbb{R} \\to \\{y \\in \\mathbb{R} : -1 < y < 1\\}$ defined by $f(x) = \\frac{x}{1 + |x|}$ is one-one and onto.',
    answer: 'For $x \\ge 0$, $f(x) = \\frac{x}{1 + x} \\ge 0$; for $x < 0$, $f(x) = \\frac{x}{1 - x} < 0$. So $f(x)$ has the same sign as $x$, and $|f(x)| < 1$, so $f$ does map into $(-1, 1)$. One-one: if $f(x_1) = f(x_2)$, then $x_1$ and $x_2$ have the same sign. If both are $\\ge 0$, $\\frac{x_1}{1 + x_1} = \\frac{x_2}{1 + x_2}$ gives $x_1 + x_1 x_2 = x_2 + x_1 x_2$, so $x_1 = x_2$. If both are negative, $\\frac{x_1}{1 - x_1} = \\frac{x_2}{1 - x_2}$ gives $x_1 - x_1 x_2 = x_2 - x_1 x_2$, so $x_1 = x_2$. Hence $f$ is one-one. Onto: for $0 \\le y < 1$, take $x = \\frac{y}{1 - y} \\ge 0$; then $1 + x = \\frac{1}{1 - y}$ and $f(x) = y$. For $-1 < y < 0$, take $x = \\frac{y}{1 + y} < 0$; then $1 - x = \\frac{1}{1 + y}$ and $f(x) = y$. Every $y \\in (-1, 1)$ has a pre-image, so $f$ is onto.',
    steps: [
      { step: 'Splits into $x \\ge 0$ and $x < 0$ and notes $f(x)$ has the same sign as $x$', marks: 1 },
      { step: 'Shows $f$ is one-one in each case', marks: 1 },
      { step: 'Shows onto with pre-images $\\frac{y}{1 - y}$ for $y \\ge 0$ and $\\frac{y}{1 + y}$ for $y < 0$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-rf-d01', chapter: C, topic: RST, type: 'long', complexity: 'medium', marks: 5,
    text: 'A relation $R$ on the set of real numbers $\\mathbb{R}$ is defined by $R = \\{(a, b) : 1 + ab > 0\\}$. Show that $R$ is reflexive and symmetric but not transitive. Also find all real numbers $x$ such that $(x, 2) \\in R$.',
    answer: 'Reflexive: for every real $a$, $1 + a \\cdot a = 1 + a^{2} \\ge 1 > 0$, so $(a, a) \\in R$. Symmetric: if $1 + ab > 0$ then $1 + ba = 1 + ab > 0$, so $(a, b) \\in R \\Rightarrow (b, a) \\in R$. Not transitive: take $a = 2$, $b = -\\frac{1}{4}$, $c = -4$. Then $1 + ab = 1 - \\frac{1}{2} = \\frac{1}{2} > 0$, so $(a, b) \\in R$; $1 + bc = 1 + 1 = 2 > 0$, so $(b, c) \\in R$; but $1 + ac = 1 - 8 = -7 < 0$, so $(a, c) \\notin R$. Hence $R$ is not transitive. Finally, $(x, 2) \\in R$ means $1 + 2x > 0$, i.e. $x > -\\frac{1}{2}$. The required set is $\\{x \\in \\mathbb{R} : x > -\\frac{1}{2}\\}$.',
    steps: [
      { step: 'Shows $R$ is reflexive since $1 + a^{2} > 0$', marks: 1 },
      { step: 'Shows $R$ is symmetric since $ab = ba$', marks: 1 },
      { step: 'Chooses suitable $a, b, c$ with $(a,b), (b,c) \\in R$', marks: 1 },
      { step: 'Verifies $(a,c) \\notin R$ and concludes $R$ is not transitive', marks: 1 },
      { step: 'Finds $x > -\\frac{1}{2}$ for $(x, 2) \\in R$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-d02', chapter: C, topic: RST, type: 'long', complexity: 'hard', marks: 5,
    text: 'A relation $S$ on the set of real numbers $\\mathbb{R}$ is defined by $S = \\{(a, b) : |a| \\le b\\}$. Determine whether $S$ is reflexive, symmetric or transitive. Also find the set of all real numbers $x$ for which $(x, x) \\in S$.',
    answer: 'Reflexive: take $a = -1$. Then $|a| = 1 > -1$, so $(-1, -1) \\notin S$; $S$ is not reflexive. Symmetric: $|1| = 1 \\le 2$, so $(1, 2) \\in S$, but $|2| = 2 > 1$, so $(2, 1) \\notin S$; $S$ is not symmetric. Transitive: let $(a, b) \\in S$ and $(b, c) \\in S$, so $|a| \\le b$ and $|b| \\le c$. From $|a| \\le b$ we get $b \\ge 0$, so $|b| = b$. Then $|a| \\le b = |b| \\le c$, so $|a| \\le c$ and $(a, c) \\in S$. Hence $S$ is transitive. Finally, $(x, x) \\in S$ means $|x| \\le x$. For $x \\ge 0$ this reads $x \\le x$, which is true; for $x < 0$ it reads $-x \\le x$, i.e. $x \\ge 0$, a contradiction. So the required set is $\\{x \\in \\mathbb{R} : x \\ge 0\\} = [0, \\infty)$. Conclusion: $S$ is transitive but neither reflexive nor symmetric.',
    steps: [
      { step: 'Shows $S$ is not reflexive with a counterexample such as $(-1, -1) \\notin S$', marks: 1 },
      { step: 'Shows $S$ is not symmetric with a counterexample such as $(1, 2) \\in S$, $(2, 1) \\notin S$', marks: 1 },
      { step: 'For transitivity, notes $|a| \\le b$ forces $b \\ge 0$ so $|b| = b$', marks: 1 },
      { step: 'Concludes $|a| \\le c$, so $S$ is transitive', marks: 1 },
      { step: 'Finds $\\{x : (x, x) \\in S\\} = [0, \\infty)$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-d03', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $A = \\{x \\in \\mathbb{Z} : 0 \\le x \\le 15\\}$ and let $R = \\{(a, b) : |a - b| \\text{ is divisible by } 4\\}$ be a relation on $A$. Show that $R$ is an equivalence relation. Write the equivalence class $[2]$ and find the number of distinct equivalence classes.',
    answer: 'Reflexive: for every $a \\in A$, $|a - a| = 0 = 4 \\times 0$, so $(a, a) \\in R$. Symmetric: if $|a - b| = 4k$ then $|b - a| = |a - b| = 4k$, so $(b, a) \\in R$. Transitive: if $|a - b|$ and $|b - c|$ are divisible by $4$, then $a - b = 4m$ and $b - c = 4n$ for integers $m, n$, so $a - c = (a - b) + (b - c) = 4(m + n)$ and $|a - c|$ is divisible by $4$; hence $(a, c) \\in R$. So $R$ is an equivalence relation. $[2]$ consists of the elements of $A$ that differ from $2$ by a multiple of $4$: $[2] = \\{2, 6, 10, 14\\}$. Elements are related exactly when they have the same remainder on division by $4$, so the classes are $\\{0, 4, 8, 12\\}$, $\\{1, 5, 9, 13\\}$, $\\{2, 6, 10, 14\\}$, $\\{3, 7, 11, 15\\}$: there are $4$ distinct equivalence classes.',
    steps: [
      { step: 'Proves $R$ is reflexive', marks: 1 },
      { step: 'Proves $R$ is symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive using $a - c = (a - b) + (b - c)$', marks: 1 },
      { step: 'Writes $[2] = \\{2, 6, 10, 14\\}$', marks: 1 },
      { step: 'States there are $4$ distinct equivalence classes (listing them)', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-d04', chapter: C, topic: EQ, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $\\mathbb{N}$ be the set of natural numbers and let $R$ be the relation on $\\mathbb{N} \\times \\mathbb{N}$ defined by $(a, b) \\, R \\, (c, d)$ if and only if $(a - c)(a + c) = b - d$. Show that $R$ is an equivalence relation, and describe the equivalence class of $(1, 1)$.',
    answer: 'Expanding, $(a - c)(a + c) = b - d$ means $a^{2} - c^{2} = b - d$, i.e. $(a, b) \\, R \\, (c, d) \\iff a^{2} - b = c^{2} - d$. Reflexive: $a^{2} - b = a^{2} - b$, so $(a, b) \\, R \\, (a, b)$. Symmetric: if $a^{2} - b = c^{2} - d$ then $c^{2} - d = a^{2} - b$, so $(c, d) \\, R \\, (a, b)$. Transitive: if $a^{2} - b = c^{2} - d$ and $c^{2} - d = e^{2} - f$, then $a^{2} - b = e^{2} - f$, so $(a, b) \\, R \\, (e, f)$. Hence $R$ is an equivalence relation. Class of $(1, 1)$: $(c, d) \\, R \\, (1, 1)$ means $c^{2} - d = 1^{2} - 1 = 0$, i.e. $d = c^{2}$. So $[(1, 1)] = \\{(n, n^{2}) : n \\in \\mathbb{N}\\} = \\{(1, 1), (2, 4), (3, 9), \\ldots\\}$.',
    steps: [
      { step: 'Rewrites the condition as $a^{2} - b = c^{2} - d$', marks: 1 },
      { step: 'Proves $R$ is reflexive', marks: 1 },
      { step: 'Proves $R$ is symmetric', marks: 1 },
      { step: 'Proves $R$ is transitive and concludes it is an equivalence relation', marks: 1 },
      { step: 'Finds $[(1, 1)] = \\{(n, n^{2}) : n \\in \\mathbb{N}\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-d05', chapter: C, topic: OO, type: 'long', complexity: 'medium', marks: 5,
    text: 'Let $A = \\mathbb{R} - \\{-\\frac{5}{2}\\}$ and $B = \\mathbb{R} - \\{\\frac{3}{2}\\}$. Show that the function $f : A \\to B$ defined by $f(x) = \\frac{3x - 1}{2x + 5}$ is one-one and onto. Also find $x \\in A$ such that $f(x) = 1$.',
    answer: 'One-one: suppose $f(x_1) = f(x_2)$. Then $(3x_1 - 1)(2x_2 + 5) = (3x_2 - 1)(2x_1 + 5)$, i.e. $6x_1x_2 + 15x_1 - 2x_2 - 5 = 6x_1x_2 + 15x_2 - 2x_1 - 5$, so $17x_1 = 17x_2$ and $x_1 = x_2$. Hence $f$ is one-one. Onto: let $y \\in B$. Solving $y = \\frac{3x - 1}{2x + 5}$ gives $2xy + 5y = 3x - 1$, so $x(3 - 2y) = 1 + 5y$ and $x = \\frac{1 + 5y}{3 - 2y}$, which is real because $y \\ne \\frac{3}{2}$. This $x$ is in $A$: $\\frac{1 + 5y}{3 - 2y} = -\\frac{5}{2}$ would give $2 + 10y = -15 + 10y$, i.e. $2 = -15$, which is impossible. Substituting back, $f(x) = y$. So every $y \\in B$ has a pre-image and $f$ is onto. Finally, $f(x) = 1$ gives $3x - 1 = 2x + 5$, so $x = 6$ (and $6 \\in A$; check: $f(6) = \\frac{17}{17} = 1$).',
    steps: [
      { step: 'Sets $f(x_1) = f(x_2)$ and cross-multiplies correctly', marks: 1 },
      { step: 'Simplifies to $x_1 = x_2$, so $f$ is one-one', marks: 1 },
      { step: 'Solves $y = f(x)$ to get $x = \\frac{1 + 5y}{3 - 2y}$', marks: 1 },
      { step: 'Shows this $x \\ne -\\frac{5}{2}$ and concludes $f$ is onto', marks: 1 },
      { step: 'Finds $x = 6$ for $f(x) = 1$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-d06', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Show that the function $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = \\frac{x^{2}}{1 + x^{2}}$ is neither one-one nor onto. Find the range of $f$, and find all $x$ such that $f(x) = \\frac{1}{2}$.',
    answer: 'Not one-one: $f(1) = \\frac{1}{2}$ and $f(-1) = \\frac{1}{2}$, but $1 \\ne -1$. Range: let $y = \\frac{x^{2}}{1 + x^{2}}$. Then $y + yx^{2} = x^{2}$, so $x^{2}(1 - y) = y$. For $y = 1$ this gives $0 = 1$, impossible, so $y \\ne 1$; otherwise $x^{2} = \\frac{y}{1 - y}$, which has a real solution exactly when $\\frac{y}{1 - y} \\ge 0$, i.e. $0 \\le y < 1$. So the range of $f$ is $[0, 1)$. Not onto: the codomain is $\\mathbb{R}$ but the range is only $[0, 1)$; for example $y = 2$ (or $y = -1$) has no pre-image. Hence $f$ is neither one-one nor onto. Finally, $f(x) = \\frac{1}{2}$ gives $2x^{2} = 1 + x^{2}$, so $x^{2} = 1$ and $x = 1$ or $x = -1$.',
    steps: [
      { step: 'Shows $f$ is not one-one using $f(1) = f(-1)$', marks: 1 },
      { step: 'Solves for $x^{2} = \\frac{y}{1 - y}$', marks: 1 },
      { step: 'Deduces the range is $[0, 1)$', marks: 1 },
      { step: 'Concludes $f$ is not onto, with a value having no pre-image', marks: 1 },
      { step: 'Finds $x = \\pm 1$ for $f(x) = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-d07', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f : [-1, \\infty) \\to [-4, \\infty)$ be defined by $f(x) = x^{2} + 2x - 3$. Show that $f$ is one-one and onto, and find the element $x$ of the domain with $f(x) = 5$. Would $f$ remain one-one if its domain were all of $\\mathbb{R}$? Justify.',
    answer: 'Write $f(x) = (x + 1)^{2} - 4$. One-one: if $f(x_1) = f(x_2)$ then $(x_1 + 1)^{2} = (x_2 + 1)^{2}$. Since $x_1, x_2 \\ge -1$, both $x_1 + 1$ and $x_2 + 1$ are non-negative, so $x_1 + 1 = x_2 + 1$ and $x_1 = x_2$. Hence $f$ is one-one. Onto: let $y \\ge -4$. Take $x = -1 + \\sqrt{y + 4}$; it is real because $y + 4 \\ge 0$ and $x \\ge -1$, so $x$ is in the domain, and $f(x) = (\\sqrt{y + 4})^{2} - 4 = y$. So $f$ is onto. $f(x) = 5$: $(x + 1)^{2} = 9$ gives $x + 1 = \\pm 3$, so $x = 2$ or $x = -4$; only $x = 2$ is in $[-1, \\infty)$, so $x = 2$. On all of $\\mathbb{R}$, $f$ would not be one-one: for example $f(-3) = 0 = f(1)$ with $-3 \\ne 1$.',
    steps: [
      { step: 'Writes $f(x) = (x + 1)^{2} - 4$ and sets $f(x_1) = f(x_2)$', marks: 1 },
      { step: 'Uses $x + 1 \\ge 0$ on the domain to conclude $x_1 = x_2$', marks: 1 },
      { step: 'Shows onto with pre-image $x = -1 + \\sqrt{y + 4}$ in the domain', marks: 1 },
      { step: 'Finds $x = 2$, rejecting $x = -4$', marks: 1 },
      { step: 'Shows $f$ is not one-one on $\\mathbb{R}$, e.g. $f(-3) = f(1) = 0$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-rf-e01', chapter: C, topic: BC, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A college is organising a one-day seminar. Three guest speakers form the set $S = \\{s_1, s_2, s_3\\}$, and there are four available time slots forming the set $T = \\{t_1, t_2, t_3, t_4\\}$. The organisers think of an assignment of speakers to slots as a relation or a function from $S$ to $T$.',
    answer: '(i) $2^{12} = 4096$ relations. (ii) $4^{3} = 64$ functions. (iii) $4 \\times 3 \\times 2 = 24$ one-one functions. OR (iii) $36$ onto functions from $T$ to $S$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'How many relations are there from $S$ to $T$?',
        answer: '$S \\times T$ has $3 \\times 4 = 12$ ordered pairs, and a relation is any subset of it, so there are $2^{12} = 4096$ relations.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'In how many ways can each speaker be given exactly one slot, if several speakers are allowed to share a slot? (That is, how many functions are there from $S$ to $T$?)',
        answer: 'Each of the $3$ speakers can be given any of the $4$ slots, so there are $4^{3} = 64$ functions.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'No two speakers may share a slot. How many such assignments (one-one functions from $S$ to $T$) are possible? Is any such function onto? Give a reason.\n\nOR\n\nThe organisers instead assign each of the four slots to one of the three speakers so that every speaker gets at least one slot. How many such functions from $T$ to $S$ (onto functions) are there?',
        answer: 'One-one functions: $s_1$ has $4$ choices, then $s_2$ has $3$ and $s_3$ has $2$, giving $4 \\times 3 \\times 2 = 24$. None of them is onto, because only $3$ slots are used and one of the $4$ slots is always left without a speaker. OR: there are $3^{4} = 81$ functions from $T$ to $S$. Those missing a particular speaker number $2^{4} = 16$ for each of the $3$ speakers, and those missing two particular speakers number $1$ for each of the $3$ pairs. By inclusion-exclusion, onto functions $= 81 - 3 \\times 16 + 3 \\times 1 = 36$.',
      },
    ],
  },
  {
    id: 'c12-rf-e02', chapter: C, topic: RST, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A district has four towns, labelled $1, 2, 3, 4$. Planners record which towns are linked by a direct bus service, counting each town as linked to itself. This gives the relation $R = \\{(1,1), (2,2), (3,3), (4,4), (1,2), (2,1), (2,3), (3,2)\\}$ on $T = \\{1, 2, 3, 4\\}$.',
    answer: '(i) Yes, reflexive. (ii) Yes, symmetric. (iii) Not transitive; adding $(1,3)$ and $(3,1)$ (2 pairs) makes it an equivalence relation with classes $\\{1, 2, 3\\}$ and $\\{4\\}$. OR (iii) classes $\\{1, 3\\}$ and $\\{2, 4\\}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $R$ reflexive? Give a reason.',
        answer: 'Yes. $(1,1), (2,2), (3,3), (4,4)$ all belong to $R$, so every town is related to itself.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is $R$ symmetric? Give a reason.',
        answer: 'Yes. The only non-diagonal pairs are $(1,2), (2,1)$ and $(2,3), (3,2)$; each appears with its reverse.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $R$ is not transitive. What is the least number of ordered pairs that must be added to $R$ to make it an equivalence relation? Write the equivalence classes of the new relation.\n\nOR\n\nOn the same set $T$, define $S = \\{(a, b) : a - b \\text{ is even}\\}$. Given that $S$ is an equivalence relation, write all its equivalence classes.',
        answer: '$(1, 2) \\in R$ and $(2, 3) \\in R$ but $(1, 3) \\notin R$, so $R$ is not transitive. Transitivity forces $(1, 3)$ and then symmetry forces $(3, 1)$; after adding these two pairs the relation is reflexive, symmetric and transitive. So the least number of pairs to add is $2$, and the equivalence classes are $\\{1, 2, 3\\}$ and $\\{4\\}$. OR: $a - b$ is even exactly when $a$ and $b$ have the same parity, so the classes are $\\{1, 3\\}$ and $\\{2, 4\\}$.',
      },
    ],
  },
  {
    id: 'c12-rf-e03', chapter: C, topic: OO, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A weather station records temperatures in degrees Celsius and converts them to degrees Fahrenheit using the rule $F = \\frac{9}{5}C + 32$. Treat this rule as a function $f : \\mathbb{R} \\to \\mathbb{R}$, $f(C) = \\frac{9}{5}C + 32$.',
    answer: '(i) Yes, one-one. (ii) $C = -40$. (iii) $f$ is onto with pre-image $C = \\frac{5}{9}(y - 32)$, so $f$ is a bijection. OR (iii) Not onto; range is $[32, 212]$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $f$ one-one? Justify.',
        answer: 'Yes. $\\frac{9}{5}C_1 + 32 = \\frac{9}{5}C_2 + 32$ gives $C_1 = C_2$, so different Celsius readings never give the same Fahrenheit reading.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Find the temperature at which the Celsius and Fahrenheit readings are equal.',
        answer: 'Set $\\frac{9}{5}C + 32 = C$. Then $\\frac{4}{5}C = -32$, so $C = -40$. At $-40$ degrees the two scales agree.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $f$ is onto, and hence state whether $f$ is a bijection.\n\nOR\n\nSuppose the domain is restricted to readings $0 \\le C \\le 100$ while the codomain stays $\\mathbb{R}$. Is the function still onto? Find its range.',
        answer: 'For any real $y$, take $C = \\frac{5}{9}(y - 32)$, which is real; then $f(C) = \\frac{9}{5} \\cdot \\frac{5}{9}(y - 32) + 32 = y$. So $f$ is onto, and since it is also one-one (part (i)), $f$ is a bijection. OR: $f$ is increasing, with $f(0) = 32$ and $f(100) = \\frac{9}{5}(100) + 32 = 212$, so the range is $[32, 212]$. This is not all of $\\mathbb{R}$ (for example $300$ has no pre-image), so the restricted function is not onto.',
      },
    ],
  },
  {
    id: 'c12-rf-e04', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A school has $30$ students in a class with roll numbers $1, 2, \\ldots, 30$. For sports day they are placed in four houses: two students are in the same house exactly when the difference of their roll numbers is divisible by $4$. This defines the relation $R = \\{(a, b) : a - b \\text{ is divisible by } 4\\}$ on $A = \\{1, 2, \\ldots, 30\\}$.',
    answer: '(i) Yes, an equivalence relation. (ii) $[7] = \\{3, 7, 11, 15, 19, 23, 27\\}$. (iii) $4$ classes; the largest have $8$ students. OR (iii) $S$ is not an equivalence relation (not symmetric).',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $R$ an equivalence relation? Give a brief reason.',
        answer: 'Yes. $a - a = 0$ is divisible by $4$ (reflexive); if $4 \\mid a - b$ then $4 \\mid b - a$ (symmetric); if $4 \\mid a - b$ and $4 \\mid b - c$ then $4 \\mid (a - b) + (b - c) = a - c$ (transitive).',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the equivalence class of the student with roll number $7$.',
        answer: 'Roll numbers in $A$ that differ from $7$ by a multiple of $4$: $[7] = \\{3, 7, 11, 15, 19, 23, 27\\}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'How many equivalence classes (houses) are there, and how many students are in the largest house?\n\nOR\n\nThe sports teacher instead considers $S = \\{(a, b) : a - b \\text{ is divisible by } 4 \\text{ and } a \\le b\\}$ on $A$. Is $S$ an equivalence relation? Justify.',
        answer: 'Students are related exactly when their roll numbers leave the same remainder on division by $4$, so there are $4$ classes. Remainder $1$: $\\{1, 5, \\ldots, 29\\}$ has $8$ students; remainder $2$: $\\{2, 6, \\ldots, 30\\}$ has $8$; remainder $3$: $\\{3, 7, \\ldots, 27\\}$ has $7$; remainder $0$: $\\{4, 8, \\ldots, 28\\}$ has $7$. So the largest house has $8$ students (two houses have $8$). OR: $S$ is reflexive and transitive, but not symmetric: $(1, 5) \\in S$ since $4 \\mid 1 - 5$ and $1 \\le 5$, but $(5, 1) \\notin S$ because $5 > 1$. So $S$ is not an equivalence relation.',
      },
    ],
  },
];
