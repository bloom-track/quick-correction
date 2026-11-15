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

export const CH01_RF_R4: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-rf-r4-a01', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and $R = \\{(1,1), (2,2), (3,3), (4,4), (1,3), (3,1), (3,4), (4,3)\\}$ be a relation on $A$. Then $R$ is',
    options: [
      'an equivalence relation',
      'reflexive and symmetric but not transitive',
      'reflexive and transitive but not symmetric',
      'symmetric and transitive but not reflexive',
    ],
    answer: 'Correct option: B) reflexive and symmetric but not transitive. All four pairs $(a, a)$ are present, so $R$ is reflexive, and every pair has its reverse in $R$, so $R$ is symmetric. But $(1, 3) \\in R$ and $(3, 4) \\in R$ while $(1, 4) \\notin R$, so $R$ is not transitive.',
  },
  {
    id: 'c12-rf-r4-a02', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A relation $R$ on the set of real numbers is defined by $a \\, R \\, b$ if and only if $|a| \\ge |b|$. Then $R$ is',
    options: [
      'reflexive and symmetric but not transitive',
      'reflexive and transitive but not symmetric',
      'an equivalence relation',
      'symmetric and transitive but not reflexive',
    ],
    answer: 'Correct option: B) reflexive and transitive but not symmetric. $|a| \\ge |a|$ always, so $R$ is reflexive. If $|a| \\ge |b|$ and $|b| \\ge |c|$ then $|a| \\ge |c|$, so $R$ is transitive. But $(3, 1) \\in R$ while $(1, 3) \\notin R$, so $R$ is not symmetric.',
  },
  {
    id: 'c12-rf-r4-a03', chapter: C, topic: RST, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $L$ be the set of all straight lines in a plane and let $R = \\{(l_1, l_2) : l_1 \\text{ and } l_2 \\text{ have at least one point in common}\\}$. Then $R$ is',
    options: [
      'an equivalence relation',
      'transitive only',
      'reflexive and symmetric but not transitive',
      'symmetric and transitive but not reflexive',
    ],
    answer: 'Correct option: C) reflexive and symmetric but not transitive. A line has all its points in common with itself, and "having a common point" is the same from either side, so $R$ is reflexive and symmetric. Two parallel lines $l_1, l_3$ can both meet a third line $l_2$ that cuts across them, so $(l_1, l_2), (l_2, l_3) \\in R$ but $(l_1, l_3) \\notin R$: $R$ is not transitive.',
  },
  {
    id: 'c12-rf-r4-a04', chapter: C, topic: RST, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The empty relation on a non-empty set is symmetric and transitive but not reflexive.\n\nReason (R): The conditions for symmetric and transitive relations have the form "if certain ordered pairs belong to $R$, then another pair belongs to $R$", and no ordered pair belongs to the empty relation, so these conditions are never violated.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both true, R explains A. Since the empty relation has no pairs, the "if" part of the symmetry and transitivity conditions never holds, so both conditions are satisfied. It is not reflexive because for any element $a$ the pair $(a, a)$ is missing. R is exactly the reason A holds.',
  },
  {
    id: 'c12-rf-r4-a05', chapter: C, topic: RST, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of symmetric relations on the set $\\{1, 2, 3\\}$ that contain the ordered pair $(1, 2)$ is',
    options: ['$8$', '$16$', '$32$', '$64$'],
    answer: 'Correct option: C) $32$. A symmetric relation is fixed by choosing which of the $3$ diagonal pairs $(a, a)$ to include and which of the $3$ unordered pairs $\\{1,2\\}, \\{1,3\\}, \\{2,3\\}$ to include (each brings both orders). Containing $(1, 2)$ forces $\\{1, 2\\}$, so the count is $2^{3} \\times 2^{2} = 32$. ($64$ counts all symmetric relations.)',
  },
  {
    id: 'c12-rf-r4-a06', chapter: C, topic: EQ, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'On the set $\\mathbb{R} - \\{0\\}$ of non-zero real numbers, the relation $a \\, R \\, b$ if and only if $ab > 0$ is an equivalence relation. The number of distinct equivalence classes of $R$ is',
    options: ['$1$', '$2$', '$3$', 'infinitely many'],
    answer: 'Correct option: B) $2$. $ab > 0$ exactly when $a$ and $b$ have the same sign. So all positive reals form one class and all negative reals form the other; there are no other classes.',
  },
  {
    id: 'c12-rf-r4-a07', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of equivalence relations on the set $\\{1, 2, 3, 4\\}$ that have exactly two equivalence classes is',
    options: ['$6$', '$7$', '$8$', '$10$'],
    answer: 'Correct option: B) $7$. An equivalence relation with two classes is a split of the set into two non-empty parts. Sizes $1 + 3$: choose the single element, $4$ ways. Sizes $2 + 2$: choose the partner of $1$, which fixes the split, $3$ ways. Total $4 + 3 = 7$.',
  },
  {
    id: 'c12-rf-r4-a08', chapter: C, topic: EQ, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): Every equivalence relation on a set with $6$ elements contains at least $6$ ordered pairs.\n\nReason (R): An equivalence relation is reflexive, so it contains $(a, a)$ for every element $a$ of the set.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both true, R explains A. Reflexivity puts the $6$ distinct pairs $(a, a)$ in the relation, so there are at least $6$ ordered pairs; the identity relation with exactly $6$ pairs shows $6$ is attained.',
  },
  {
    id: 'c12-rf-r4-a09', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $P$ be the set of all subsets of $\\{1, 2, 3, 4\\}$ and define $X \\, R \\, Y$ if and only if $X$ and $Y$ have the same number of elements. $R$ is an equivalence relation on $P$. The number of elements in the largest equivalence class is',
    options: ['$4$', '$5$', '$6$', '$8$'],
    answer: 'Correct option: C) $6$. The classes are the sets of subsets with $0, 1, 2, 3, 4$ elements, with sizes $1, 4, 6, 4, 1$. The largest is the class of $2$-element subsets, $\\binom{4}{2} = 6$. ($5$ is the number of classes.)',
  },
  {
    id: 'c12-rf-r4-a10', chapter: C, topic: EQ, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of ordered pairs in the smallest equivalence relation on $\\{1, 2, 3, 4\\}$ that contains both $(1, 2)$ and $(2, 3)$ is',
    options: ['$7$', '$8$', '$9$', '$10$'],
    answer: 'Correct option: D) $10$. By symmetry and transitivity, $1, 2, 3$ must all be related to one another, giving one class $\\{1, 2, 3\\}$ with $3 \\times 3 = 9$ pairs. Reflexivity adds $(4, 4)$. Nothing forces $4$ to join the class, so the smallest relation has $9 + 1 = 10$ pairs.',
  },
  {
    id: 'c12-rf-r4-a11', chapter: C, topic: OO, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The function $f : [0, \\pi] \\to [-1, 1]$ defined by $f(x) = \\cos x$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: C) both one-one and onto. On $[0, \\pi]$ the cosine decreases steadily from $1$ to $-1$, so no value repeats (one-one) and every value in $[-1, 1]$ is reached (onto).',
  },
  {
    id: 'c12-rf-r4-a12', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to [0, 1)$ defined by $f(x) = x - [x]$, where $[x]$ is the greatest integer less than or equal to $x$, is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: B) onto but not one-one. $f(0) = f(1) = 0$, so $f$ is not one-one. For any $y \\in [0, 1)$ we have $[y] = 0$, so $f(y) = y$; every value in $[0, 1)$ is reached, so $f$ is onto.',
  },
  {
    id: 'c12-rf-r4-a13', chapter: C, topic: OO, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The function $f : \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = 2x$ is onto.\n\nReason (R): The function $f : \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(x) = 2x$ is one-one.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) A false, R true. R is true: $2x_1 = 2x_2$ gives $x_1 = x_2$. But $f$ only produces even integers, so for example $1$ has no pre-image and $f$ is not onto; A is false.',
  },
  {
    id: 'c12-rf-r4-a14', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Let $f : [a, \\infty) \\to \\mathbb{R}$ be defined by $f(x) = x^{2} - 4x + 1$. The smallest value of $a$ for which $f$ is one-one is',
    options: ['$0$', '$1$', '$2$', '$4$'],
    answer: 'Correct option: C) $2$. $f(x) = (x - 2)^{2} - 3$, so $f(x_1) = f(x_2)$ exactly when $x_1 = x_2$ or $x_1 + x_2 = 4$. If $a < 2$, then $a$ and $4 - a > a$ both lie in the domain and have the same image, so $f$ is not one-one. If $a \\ge 2$, then $x_1 + x_2 = 4$ forces $x_1 = x_2 = 2$, so $f$ is one-one.',
  },
  {
    id: 'c12-rf-r4-a15', chapter: C, topic: OO, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The function $f : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$ defined by $f(a, b) = a + b$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: D) neither one-one nor onto. $f(1, 2) = f(2, 1) = 3$, so $f$ is not one-one. Every $a + b \\ge 2$, so $1$ has no pre-image and $f$ is not onto.',
  },
  {
    id: 'c12-rf-r4-a16', chapter: C, topic: OO, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'The function $f : \\mathbb{R} \\to \\mathbb{R}$ is defined by $f(x) = x + 2$ for $x < 0$ and $f(x) = x^{2} + 1$ for $x \\ge 0$. Then $f$ is',
    options: ONTO_OPTIONS,
    answer: 'Correct option: B) onto but not one-one. For $x < 0$ the values $x + 2$ fill $(-\\infty, 2)$, and for $x \\ge 0$ the values $x^{2} + 1$ fill $[1, \\infty)$. Together they cover all of $\\mathbb{R}$, so $f$ is onto. The two ranges overlap on $[1, 2)$: $f(-1) = 1 = f(0)$, so $f$ is not one-one.',
  },
  {
    id: 'c12-rf-r4-a17', chapter: C, topic: BC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The number of bijections $f : \\{1, 2, 3, 4, 5\\} \\to \\{1, 2, 3, 4, 5\\}$ with $f(1)$ an odd number is',
    options: ['$24$', '$48$', '$72$', '$120$'],
    answer: 'Correct option: C) $72$. $f(1)$ can be $1$, $3$ or $5$: $3$ choices. The other four elements are then mapped bijectively onto the remaining four values in $4! = 24$ ways. Total $3 \\times 24 = 72$.',
  },
  {
    id: 'c12-rf-r4-a18', chapter: C, topic: BC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of bijections $f : \\{1, 2, 3, 4, 5, 6\\} \\to \\{1, 2, 3, 4, 5, 6\\}$ that map the set $\\{1, 2, 3\\}$ onto $\\{1, 2, 3\\}$ is',
    options: ['$18$', '$36$', '$72$', '$120$'],
    answer: 'Correct option: B) $36$. The elements $1, 2, 3$ must be sent to $1, 2, 3$ in some order: $3! = 6$ ways. Then $4, 5, 6$ are sent to $4, 5, 6$ in some order: $3! = 6$ ways. Total $6 \\times 6 = 36$.',
  },
  {
    id: 'c12-rf-r4-a19', chapter: C, topic: BC, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The number of relations from $A = \\{1, 2\\}$ to $B = \\{a, b, c\\}$ that are NOT functions from $A$ to $B$ is',
    options: ['$54$', '$55$', '$57$', '$64$'],
    answer: 'Correct option: B) $55$. There are $2^{2 \\times 3} = 64$ relations from $A$ to $B$ (subsets of $A \\times B$). A relation is a function only if each of $1$ and $2$ has exactly one image: $3 \\times 3 = 9$ relations. So $64 - 9 = 55$ are not functions.',
  },
  {
    id: 'c12-rf-r4-a20', chapter: C, topic: BC, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Let $A$ and $B$ be sets with $5$ elements each. The number of onto functions from $A$ to $B$ is',
    options: ['$25$', '$120$', '$625$', '$3125$'],
    answer: 'Correct option: B) $120$. For finite sets of equal size, a function is onto exactly when it is one-one, so the onto functions are the bijections: $5! = 120$. ($3125 = 5^{5}$ is the number of all functions.)',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-rf-r4-b01', chapter: C, topic: RST, type: 'short', complexity: 'easy', marks: 2,
    text: 'Let $A = \\{1, 2, 3, 4, 5, 6, 7\\}$ and $R = \\{(a, b) : a, b \\in A, \\; a - b \\text{ is a non-zero multiple of } 3\\}$. Find the number of ordered pairs in $R$ and show that $R$ is symmetric but neither reflexive nor transitive.',
    answer: 'The elements fall into groups with the same remainder on division by $3$: $\\{1, 4, 7\\}$, $\\{2, 5\\}$, $\\{3, 6\\}$. A pair $(a, b)$ with $a \\ne b$ is in $R$ exactly when $a, b$ are in the same group, giving $3 \\times 2 + 2 + 2 = 10$ ordered pairs. Symmetric: if $a - b$ is a non-zero multiple of $3$, so is $b - a$. Not reflexive: $a - a = 0$ is not a non-zero multiple of $3$, so $(1, 1) \\notin R$. Not transitive: $(1, 4) \\in R$ and $(4, 1) \\in R$ but $(1, 1) \\notin R$.',
    steps: [
      { step: 'Groups the elements by remainder and counts $10$ ordered pairs', marks: 1 },
      { step: 'Shows symmetric, and shows not reflexive and not transitive with the counter-examples $(1,1)$ and $(1,4),(4,1)$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-b02', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $P$ be the set of all points of the plane other than the origin $O$. Define $X \\, R \\, Y$ if and only if $O$, $X$ and $Y$ lie on one straight line. Show that $R$ is an equivalence relation and describe the equivalence class of the point $(1, 2)$.',
    answer: 'Reflexive: $O$, $X$, $X$ are collinear for every $X$. Symmetric: the condition is the same when $X$ and $Y$ are interchanged. Transitive: if $O, X, Y$ are collinear and $O, Y, Z$ are collinear, then since $Y \\ne O$ there is only one line through $O$ and $Y$, so $X$ and $Z$ both lie on it and $O, X, Z$ are collinear. Hence $R$ is an equivalence relation. The class of $(1, 2)$ is the set of all points of the line $y = 2x$ through the origin, with the origin removed.',
    steps: [
      { step: 'Proves reflexive and symmetric, and transitive using that $Y \\ne O$ fixes a unique line $OY$', marks: 1 },
      { step: 'Describes the class of $(1, 2)$ as the line $y = 2x$ without the origin', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-b03', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $P$ be the set of all subsets of $S = \\{1, 2, 3\\}$ and define $X \\, R \\, Y$ if and only if $X \\cap \\{1, 2\\} = Y \\cap \\{1, 2\\}$. Show that $R$ is an equivalence relation, write the equivalence class of $\\{1, 3\\}$ and find the number of distinct equivalence classes.',
    answer: 'Reflexive: $X \\cap \\{1, 2\\} = X \\cap \\{1, 2\\}$. Symmetric: equality of two sets can be read in either order. Transitive: if $X \\cap \\{1, 2\\} = Y \\cap \\{1, 2\\}$ and $Y \\cap \\{1, 2\\} = Z \\cap \\{1, 2\\}$, then $X \\cap \\{1, 2\\} = Z \\cap \\{1, 2\\}$. So $R$ is an equivalence relation. Since $\\{1, 3\\} \\cap \\{1, 2\\} = \\{1\\}$, the class of $\\{1, 3\\}$ is the set of subsets $X$ with $X \\cap \\{1, 2\\} = \\{1\\}$, namely $\\{\\{1\\}, \\{1, 3\\}\\}$. The common part $X \\cap \\{1, 2\\}$ can be $\\emptyset$, $\\{1\\}$, $\\{2\\}$ or $\\{1, 2\\}$, so there are $4$ classes (each containing $2$ subsets).',
    steps: [
      { step: 'Shows reflexive, symmetric and transitive', marks: 1 },
      { step: 'Writes the class $\\{\\{1\\}, \\{1, 3\\}\\}$ and finds $4$ classes', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-b04', chapter: C, topic: OO, type: 'short', complexity: 'easy', marks: 2,
    text: 'Give an example of (a) a function from $\\{1, 2, 3\\}$ to $\\{a, b, c, d\\}$ that is one-one but not onto, and (b) a function from $\\{1, 2, 3, 4\\}$ to $\\{a, b, c\\}$ that is onto but not one-one. Justify each.',
    answer: '(a) Take $f = \\{(1, a), (2, b), (3, c)\\}$. Different elements have different images, so $f$ is one-one, but $d$ has no pre-image, so $f$ is not onto. (b) Take $g = \\{(1, a), (2, b), (3, c), (4, c)\\}$. Each of $a, b, c$ is an image, so $g$ is onto, but $g(3) = g(4) = c$ with $3 \\ne 4$, so $g$ is not one-one. (Any correct examples are accepted.)',
    steps: [
      { step: 'A valid one-one but not onto example, with the unreached element named', marks: 1 },
      { step: 'A valid onto but not one-one example, with the repeated image named', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-b05', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 2,
    text: 'Show that the function $f : (0, \\infty) \\to \\mathbb{R}$ defined by $f(x) = x - \\frac{1}{x}$ is both one-one and onto.',
    answer: 'One-one: if $f(x_1) = f(x_2)$ then $x_1 - x_2 = \\frac{1}{x_1} - \\frac{1}{x_2} = \\frac{x_2 - x_1}{x_1 x_2}$, so $(x_1 - x_2)\\left(1 + \\frac{1}{x_1 x_2}\\right) = 0$. Since $x_1, x_2 > 0$, the second factor is positive, so $x_1 = x_2$. Onto: for $y \\in \\mathbb{R}$, solve $x - \\frac{1}{x} = y$, i.e. $x^{2} - yx - 1 = 0$. The root $x = \\frac{y + \\sqrt{y^{2} + 4}}{2}$ is positive because $\\sqrt{y^{2} + 4} > |y|$, and $f(x) = y$. So every real $y$ has a pre-image in $(0, \\infty)$.',
    steps: [
      { step: 'Proves one-one by factorising $(x_1 - x_2)(1 + \\frac{1}{x_1 x_2}) = 0$ and using positivity', marks: 1 },
      { step: 'Proves onto by finding the positive pre-image $\\frac{y + \\sqrt{y^{2}+4}}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-b06', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 2,
    text: 'Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{0, 1, 2\\}$. Find (a) the number of functions $f : A \\to B$ with $f(1) = f(2)$, and (b) the number of functions $f : A \\to B$ with $f(1) \\ne f(2)$ and $f(3) = f(4)$.',
    answer: '(a) Choose the common value of $f(1) = f(2)$ in $3$ ways, then $f(3)$ and $f(4)$ freely in $3 \\times 3$ ways: $3 \\times 9 = 27$. (b) Choose $f(1)$ in $3$ ways and $f(2) \\ne f(1)$ in $2$ ways, giving $6$; choose the common value of $f(3) = f(4)$ in $3$ ways. Total $6 \\times 3 = 18$.',
    steps: [
      { step: 'Part (a): $3 \\times 3 \\times 3 = 27$', marks: 1 },
      { step: 'Part (b): $3 \\times 2 \\times 3 = 18$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-rf-r4-c01', chapter: C, topic: RST, type: 'short', complexity: 'medium', marks: 3,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $R = \\{(a, b) : ab \\text{ is divisible by } 4\\}$. Check whether $R$ is reflexive, symmetric and transitive.',
    answer: 'Not reflexive: $(1, 1) \\in R$ would need $1 \\times 1 = 1$ to be divisible by $4$, which is false. Symmetric: $ab = ba$, so if $ab$ is divisible by $4$ then so is $ba$. Not transitive: $(1, 4) \\in R$ since $4$ is divisible by $4$, and $(4, 3) \\in R$ since $12$ is divisible by $4$, but $(1, 3) \\notin R$ because $3$ is not divisible by $4$.',
    steps: [
      { step: 'Shows $R$ is not reflexive using $(1, 1)$', marks: 1 },
      { step: 'Shows $R$ is symmetric because $ab = ba$', marks: 1 },
      { step: 'Shows $R$ is not transitive using $(1, 4), (4, 3)$ and $(1, 3) \\notin R$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c02', chapter: C, topic: RST, type: 'short', complexity: 'easy', marks: 3,
    text: 'Let $P$ be the set of all subsets of $\\{1, 2\\}$ and define $X \\, R \\, Y$ if and only if $X \\cap Y \\ne \\emptyset$. Check whether $R$ is reflexive, symmetric and transitive.',
    answer: 'The set $P$ has four elements: $\\emptyset$, $\\{1\\}$, $\\{2\\}$, $\\{1, 2\\}$. Not reflexive: $\\emptyset \\cap \\emptyset = \\emptyset$, so $(\\emptyset, \\emptyset) \\notin R$. Symmetric: $X \\cap Y = Y \\cap X$, so $X \\cap Y \\ne \\emptyset$ gives $Y \\cap X \\ne \\emptyset$. Not transitive: $\\{1\\} \\cap \\{1, 2\\} = \\{1\\} \\ne \\emptyset$ and $\\{1, 2\\} \\cap \\{2\\} = \\{2\\} \\ne \\emptyset$, but $\\{1\\} \\cap \\{2\\} = \\emptyset$.',
    steps: [
      { step: 'Shows not reflexive using the empty set', marks: 1 },
      { step: 'Shows symmetric because $X \\cap Y = Y \\cap X$', marks: 1 },
      { step: 'Shows not transitive with $\\{1\\}, \\{1,2\\}, \\{2\\}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c03', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'A relation $R$ on the set of real numbers is defined by $a \\, R \\, b$ if and only if $a^{2} - 2a = b^{2} - 2b$. Show that $R$ is an equivalence relation, and find the equivalence classes $[3]$ and $[1]$.',
    answer: 'Reflexive: $a^{2} - 2a = a^{2} - 2a$. Symmetric: equality can be read in either order. Transitive: if $a^{2} - 2a = b^{2} - 2b$ and $b^{2} - 2b = c^{2} - 2c$ then $a^{2} - 2a = c^{2} - 2c$. So $R$ is an equivalence relation. Class $[3]$: $a^{2} - 2a = 3$ gives $(a - 3)(a + 1) = 0$, so $[3] = \\{-1, 3\\}$. Class $[1]$: $a^{2} - 2a = -1$ gives $(a - 1)^{2} = 0$, so $[1] = \\{1\\}$.',
    steps: [
      { step: 'Shows reflexive and symmetric', marks: 1 },
      { step: 'Shows transitive, concluding $R$ is an equivalence relation', marks: 1 },
      { step: 'Finds $[3] = \\{-1, 3\\}$ and $[1] = \\{1\\}$ by solving the equations', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c04', chapter: C, topic: EQ, type: 'short', complexity: 'medium', marks: 3,
    text: 'On the set $F$ of all rectangles in a plane, define $x \\, R \\, y$ if and only if $x$ and $y$ have the same area. Show that $R$ is an equivalence relation. Describe the equivalence class of a rectangle with sides $4$ and $3$, and say whether a rectangle with sides $6$ and $2$, and a square of side $3$, belong to it.',
    answer: 'Reflexive: a rectangle has the same area as itself. Symmetric: if area$(x)$ = area$(y)$ then area$(y)$ = area$(x)$. Transitive: if area$(x)$ = area$(y)$ and area$(y)$ = area$(z)$ then area$(x)$ = area$(z)$. So $R$ is an equivalence relation. The class of the $4 \\times 3$ rectangle (area $12$) is the set of all rectangles of area $12$, with sides $l$ and $\\frac{12}{l}$ for any $l > 0$. The $6 \\times 2$ rectangle has area $12$, so it belongs to the class. The square of side $3$ has area $9 \\ne 12$, so it does not.',
    steps: [
      { step: 'Shows reflexive, symmetric and transitive using equality of areas', marks: 2 },
      { step: 'Describes the class as all rectangles of area $12$ and decides $6 \\times 2$ (yes) and the square (no)', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c05', chapter: C, topic: EQ, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $A = \\{1, 2, 3, 4, 5, 6\\}$. Let $R = \\{(a, b) : a - b \\text{ is even}\\}$ and $S = \\{(a, b) : a - b \\text{ is divisible by } 3\\}$, both of which are equivalence relations on $A$. Show that $R \\cap S$ is an equivalence relation on $A$, but that $R \\cup S$ is not.',
    answer: 'Reflexive: $(a, a)$ lies in both $R$ and $S$, hence in $R \\cap S$. Symmetric: if $(a, b) \\in R \\cap S$ then $(b, a)$ lies in $R$ and in $S$ because each is symmetric. Transitive: if $(a, b), (b, c) \\in R \\cap S$ then $(a, c) \\in R$ and $(a, c) \\in S$ because each is transitive. So $R \\cap S$ is an equivalence relation. (Here it is the relation "difference divisible by $6$", which on $A$ is just $\\{(a, a)\\}$.) $R \\cup S$ is not transitive: $(1, 3) \\in R$ since $1 - 3 = -2$ is even, and $(3, 6) \\in S$ since $3 - 6 = -3$ is divisible by $3$, but $1 - 6 = -5$ is neither even nor divisible by $3$, so $(1, 6) \\notin R \\cup S$.',
    steps: [
      { step: 'Shows $R \\cap S$ is reflexive and symmetric', marks: 1 },
      { step: 'Shows $R \\cap S$ is transitive', marks: 1 },
      { step: 'Shows $R \\cup S$ is not transitive with $(1, 3), (3, 6)$ and $(1, 6) \\notin R \\cup S$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c06', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 3,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = 2x + 3$ for $x \\le 0$ and $f(x) = 3 - x$ for $x > 0$. Show that $f$ is neither one-one nor onto.',
    answer: 'Not one-one: $f(-1) = 2(-1) + 3 = 1$ and $f(2) = 3 - 2 = 1$, but $-1 \\ne 2$. Range: for $x \\le 0$, $2x + 3 \\le 3$, so these values fill $(-\\infty, 3]$. For $x > 0$, $3 - x < 3$, so these values lie in $(-\\infty, 3)$. Hence the range of $f$ is $(-\\infty, 3]$. Not onto: $4 \\in \\mathbb{R}$ is greater than $3$, so it has no pre-image.',
    steps: [
      { step: 'Shows not one-one with $f(-1) = f(2) = 1$', marks: 1 },
      { step: 'Finds the range $(-\\infty, 3]$ from the two pieces', marks: 1 },
      { step: 'Concludes not onto with an element such as $4$ having no pre-image', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c07', chapter: C, topic: OO, type: 'short', complexity: 'medium', marks: 3,
    text: 'Show that the function $f : \\mathbb{Z} \\times \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(a, b) = 2a + 3b$ is onto but not one-one.',
    answer: 'Not one-one: $f(3, 0) = 6$ and $f(0, 2) = 6$, but $(3, 0) \\ne (0, 2)$. Onto: let $z$ be any integer. The pair $(-z, z)$ belongs to $\\mathbb{Z} \\times \\mathbb{Z}$ and $f(-z, z) = 2(-z) + 3z = z$. So every integer has a pre-image and $f$ is onto.',
    steps: [
      { step: 'Shows not one-one with $f(3, 0) = f(0, 2) = 6$', marks: 1 },
      { step: 'Finds the pre-image $(-z, z)$ of an arbitrary integer $z$', marks: 1 },
      { step: 'Verifies $f(-z, z) = z$ and concludes onto', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c08', chapter: C, topic: OO, type: 'short', complexity: 'hard', marks: 3,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x + [x]$, where $[x]$ is the greatest integer less than or equal to $x$. Show that $f$ is one-one but not onto, and describe the range of $f$.',
    answer: 'One-one: if $x < y$ then $[x] \\le [y]$, so $x + [x] < y + [y]$. Thus $f$ is strictly increasing, and two different inputs never have the same image. Range: for $x \\in [n, n + 1)$ with $n$ an integer, $[x] = n$ and $f(x) = x + n$, which takes exactly the values in $[2n, 2n + 1)$. So the range is the union of the intervals $[2n, 2n + 1)$ over all integers $n$. Not onto: $1$ lies in none of these intervals (for example it is not in $[0, 1)$ or $[2, 3)$), so $f(x) = 1$ has no solution and $f$ is not onto.',
    steps: [
      { step: 'Proves one-one by showing $f$ is strictly increasing', marks: 1 },
      { step: 'Finds the values on each interval $[n, n+1)$ and describes the range as the union of $[2n, 2n+1)$', marks: 1 },
      { step: 'Concludes not onto with a value such as $1$ having no pre-image', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c09', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 3,
    text: 'A $3$-letter code is made by writing a letter in each of positions $1, 2, 3$, using letters from $\\{A, B, C, D, E\\}$, so a code is a function from $\\{1, 2, 3\\}$ to $\\{A, B, C, D, E\\}$. Find (a) the number of codes, (b) the number of codes in which at least one letter is repeated, and (c) the number of codes with all three letters different and the first letter a vowel ($A$ or $E$).',
    answer: '(a) Each of the $3$ positions can hold any of $5$ letters: $5^{3} = 125$. (b) Codes with no repeated letter are the one-one functions: $5 \\times 4 \\times 3 = 60$. So codes with at least one repeat number $125 - 60 = 65$. (c) The first letter is $A$ or $E$ in $2$ ways, the second is any of the other $4$ letters, the third any of the remaining $3$: $2 \\times 4 \\times 3 = 24$.',
    steps: [
      { step: 'Part (a): $5^{3} = 125$', marks: 1 },
      { step: 'Part (b): $125 - 60 = 65$, using $60$ one-one codes', marks: 1 },
      { step: 'Part (c): $2 \\times 4 \\times 3 = 24$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-c10', chapter: C, topic: BC, type: 'short', complexity: 'medium', marks: 3,
    text: 'Five students, including Asha and Bala, are to be seated one to a chair in $5$ chairs numbered $1$ to $5$ in a row. A seating plan is a bijection from the students to the chairs. Find (a) the number of seating plans, (b) the number in which Asha and Bala sit in adjacent chairs, and (c) the number in which they do not sit in adjacent chairs.',
    answer: '(a) The number of bijections from $5$ students to $5$ chairs is $5! = 120$. (b) The pair of adjacent chairs can be $(1,2), (2,3), (3,4)$ or $(4,5)$: $4$ choices. Asha and Bala can take them in $2$ orders, and the other three students fill the other three chairs in $3! = 6$ ways: $4 \\times 2 \\times 6 = 48$. (c) $120 - 48 = 72$.',
    steps: [
      { step: 'Part (a): $5! = 120$', marks: 1 },
      { step: 'Part (b): $4 \\times 2 \\times 3! = 48$ with the $4$ adjacent chair pairs, $2$ orders and $3!$ for the others', marks: 1 },
      { step: 'Part (c): $120 - 48 = 72$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-rf-r4-d01', chapter: C, topic: RST, type: 'long', complexity: 'medium', marks: 5,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $R = \\{(a, b) : a - b \\text{ is odd}\\}$. Show that $R$ is symmetric but neither reflexive nor transitive. Also list all $b \\in \\{1, 2, 3, 4, 5, 6\\}$ with $(4, b) \\in R$, and find the number of ordered pairs $(a, b)$ with $a, b \\in \\{1, 2, 3, 4, 5, 6\\}$ that belong to $R$.',
    answer: 'Not reflexive: $a - a = 0$ is even, so $(a, a) \\notin R$ for every $a$, for example $(1, 1) \\notin R$. Symmetric: if $a - b$ is odd then $b - a = -(a - b)$ is also odd. Not transitive: $(1, 2) \\in R$ since $1 - 2 = -1$ is odd and $(2, 3) \\in R$ since $2 - 3 = -1$ is odd, but $1 - 3 = -2$ is even, so $(1, 3) \\notin R$. For $(4, b) \\in R$ we need $4 - b$ odd, i.e. $b$ odd: $b \\in \\{1, 3, 5\\}$. A pair $(a, b)$ in $\\{1, \\ldots, 6\\}$ is in $R$ exactly when one of $a, b$ is odd and the other even. Choose $a$ odd ($3$ ways) and $b$ even ($3$ ways), or $a$ even and $b$ odd: $3 \\times 3 + 3 \\times 3 = 18$ ordered pairs.',
    steps: [
      { step: 'Shows $R$ is not reflexive because $a - a = 0$ is even', marks: 1 },
      { step: 'Shows $R$ is symmetric because $b - a = -(a - b)$', marks: 1 },
      { step: 'Shows $R$ is not transitive with $(1, 2), (2, 3)$ and $(1, 3) \\notin R$', marks: 1 },
      { step: 'Lists $b \\in \\{1, 3, 5\\}$', marks: 1 },
      { step: 'Counts $3 \\times 3 + 3 \\times 3 = 18$ ordered pairs', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d02', chapter: C, topic: RST, type: 'long', complexity: 'hard', marks: 5,
    text: 'A relation $R$ on the set of real numbers is defined by $R = \\{(a, b) : a^{2} \\ge b\\}$. Show that $R$ is neither reflexive, nor symmetric, nor transitive. Also find all real numbers $x$ for which $(x, x) \\in R$, and all real numbers $x$ for which $(x, 4) \\in R$.',
    answer: 'Not reflexive: $\\left(\\frac{1}{2}, \\frac{1}{2}\\right) \\notin R$ because $\\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4} < \\frac{1}{2}$. Not symmetric: $(3, 1) \\in R$ since $9 \\ge 1$, but $(1, 3) \\notin R$ since $1 < 3$. Not transitive: $(1, -10) \\in R$ since $1 \\ge -10$; $(-10, 50) \\in R$ since $100 \\ge 50$; but $(1, 50) \\notin R$ since $1 < 50$. $(x, x) \\in R$ means $x^{2} \\ge x$, i.e. $x(x - 1) \\ge 0$, so $x \\le 0$ or $x \\ge 1$. $(x, 4) \\in R$ means $x^{2} \\ge 4$, so $x \\le -2$ or $x \\ge 2$.',
    steps: [
      { step: 'Shows not reflexive with a counter-example such as $\\frac{1}{2}$', marks: 1 },
      { step: 'Shows not symmetric with $(3, 1) \\in R$ and $(1, 3) \\notin R$', marks: 1 },
      { step: 'Shows not transitive with a valid chain such as $(1, -10), (-10, 50)$ and $(1, 50) \\notin R$', marks: 1 },
      { step: 'Solves $x^{2} \\ge x$ to get $x \\le 0$ or $x \\ge 1$', marks: 1 },
      { step: 'Solves $x^{2} \\ge 4$ to get $x \\le -2$ or $x \\ge 2$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d03', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'A relation $R$ on the set of integers $\\mathbb{Z}$ is defined by $a \\, R \\, b$ if and only if $a + 2b$ is divisible by $3$. Show that $R$ is an equivalence relation. Write the equivalence class $[1]$ in set-builder form and find the number of distinct equivalence classes.',
    answer: 'Reflexive: $a + 2a = 3a$ is divisible by $3$. Symmetric: suppose $a + 2b = 3m$. Then $b + 2a = 3(a + b) - (a + 2b) = 3(a + b - m)$, which is divisible by $3$. Transitive: suppose $a + 2b = 3m$ and $b + 2c = 3n$. Adding, $a + 3b + 2c = 3(m + n)$, so $a + 2c = 3(m + n - b)$, which is divisible by $3$. So $R$ is an equivalence relation. Class $[1]$: $a \\in [1]$ iff $1 + 2a$ is divisible by $3$. Check by remainders: if $a = 3k$, $1 + 2a = 6k + 1$ (remainder $1$); if $a = 3k + 1$, $1 + 2a = 6k + 3$ (divisible); if $a = 3k + 2$, $1 + 2a = 6k + 5$ (remainder $2$). So $[1] = \\{3k + 1 : k \\in \\mathbb{Z}\\}$. In general $a + 2b = (a - b) + 3b$, so $a \\, R \\, b$ exactly when $a - b$ is divisible by $3$; hence the classes are determined by the remainder $0, 1, 2$ on division by $3$, giving $3$ distinct equivalence classes.',
    steps: [
      { step: 'Proves reflexive ($a + 2a = 3a$)', marks: 1 },
      { step: 'Proves symmetric', marks: 1 },
      { step: 'Proves transitive', marks: 1 },
      { step: 'Finds $[1] = \\{3k + 1 : k \\in \\mathbb{Z}\\}$', marks: 1 },
      { step: 'Finds $3$ distinct classes (remainders $0, 1, 2$)', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d04', chapter: C, topic: EQ, type: 'long', complexity: 'medium', marks: 5,
    text: 'On $\\mathbb{N} \\times \\mathbb{N}$ define $(a, b) \\, R \\, (c, d)$ if and only if $a + b = c + d$. Show that $R$ is an equivalence relation and write the equivalence class of $(3, 4)$. Also, define $(a, b) \\, S \\, (c, d)$ if and only if $a + b \\le c + d$, and show that $S$ is reflexive and transitive but not symmetric.',
    answer: 'Reflexive: $a + b = a + b$. Symmetric: if $a + b = c + d$ then $c + d = a + b$. Transitive: if $a + b = c + d$ and $c + d = e + f$ then $a + b = e + f$. So $R$ is an equivalence relation. The class of $(3, 4)$ is the set of pairs of natural numbers with sum $7$: $\\{(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)\\}$. For $S$: it is reflexive since $a + b \\le a + b$; transitive since $a + b \\le c + d$ and $c + d \\le e + f$ give $a + b \\le e + f$; not symmetric since $(1, 1) \\, S \\, (2, 2)$ ($2 \\le 4$) but $(2, 2) \\, S \\, (1, 1)$ would need $4 \\le 2$, which is false.',
    steps: [
      { step: 'Shows $R$ is reflexive and symmetric', marks: 1 },
      { step: 'Shows $R$ is transitive', marks: 1 },
      { step: 'Lists the class of $(3, 4)$ as the six pairs with sum $7$', marks: 1 },
      { step: 'Shows $S$ is reflexive and transitive', marks: 1 },
      { step: 'Shows $S$ is not symmetric with $(1, 1), (2, 2)$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d05', chapter: C, topic: OO, type: 'long', complexity: 'medium', marks: 5,
    text: 'Show that the function $f : [0, \\infty) \\to (0, 1]$ defined by $f(x) = \\frac{1}{1 + x^{2}}$ is one-one and onto. Find the value of $x$ for which $f(x) = \\frac{1}{5}$. Also show that the function $g : \\mathbb{R} \\to (0, 1]$ given by the same rule is not one-one.',
    answer: 'One-one: if $f(x_1) = f(x_2)$ then $1 + x_1^{2} = 1 + x_2^{2}$, so $x_1^{2} = x_2^{2}$, and since $x_1, x_2 \\ge 0$ this gives $x_1 = x_2$. Onto: let $y \\in (0, 1]$. Solving $\\frac{1}{1 + x^{2}} = y$ gives $x^{2} = \\frac{1}{y} - 1$, which is $\\ge 0$ because $y \\le 1$. Take $x = \\sqrt{\\frac{1}{y} - 1} \\ge 0$; then $f(x) = y$. So $f$ is onto. For $f(x) = \\frac{1}{5}$: $1 + x^{2} = 5$, so $x^{2} = 4$ and $x = 2$ (as $x \\ge 0$). On $\\mathbb{R}$: $g(1) = \\frac{1}{2} = g(-1)$ with $1 \\ne -1$, so $g$ is not one-one.',
    steps: [
      { step: 'Proves one-one using $x_1^{2} = x_2^{2}$ and $x \\ge 0$', marks: 1 },
      { step: 'Finds the pre-image $\\sqrt{\\frac{1}{y} - 1}$ for $y \\in (0, 1]$', marks: 1 },
      { step: 'Checks the pre-image lies in the domain (needs $y \\le 1$) and concludes onto', marks: 1 },
      { step: 'Solves $f(x) = \\frac{1}{5}$ to get $x = 2$', marks: 1 },
      { step: 'Shows $g$ is not one-one with $g(1) = g(-1)$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d06', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x^{2} - 4|x| + 3$. Show that $f$ is neither one-one nor onto, find the range of $f$ and all $x$ with $f(x) = 8$. Then show that $g : [2, \\infty) \\to [-1, \\infty)$ defined by $g(x) = x^{2} - 4x + 3$ is one-one and onto.',
    answer: 'Not one-one: $f(1) = 1 - 4 + 3 = 0$ and $f(-1) = 1 - 4 + 3 = 0$. Range: since $x^{2} = |x|^{2}$, $f(x) = (|x| - 2)^{2} - 1 \\ge -1$, and as $|x|$ takes every value in $[0, \\infty)$, $f$ takes every value in $[-1, \\infty)$. So the range is $[-1, \\infty)$. Not onto: $-2$ has no pre-image. For $f(x) = 8$: $(|x| - 2)^{2} = 9$, so $|x| - 2 = \\pm 3$, giving $|x| = 5$ (as $|x| = -1$ is impossible); hence $x = \\pm 5$. For $g$: $g(x) = (x - 2)^{2} - 1$. One-one: $g(x_1) = g(x_2)$ gives $(x_1 - 2)^{2} = (x_2 - 2)^{2}$, and since $x_1 - 2, x_2 - 2 \\ge 0$, $x_1 = x_2$. Onto: for $y \\ge -1$ take $x = 2 + \\sqrt{y + 1} \\ge 2$; then $g(x) = (\\sqrt{y + 1})^{2} - 1 = y$.',
    steps: [
      { step: 'Shows $f$ is not one-one with $f(1) = f(-1)$', marks: 1 },
      { step: 'Writes $f(x) = (|x| - 2)^{2} - 1$, finds the range $[-1, \\infty)$ and concludes not onto', marks: 1 },
      { step: 'Solves $f(x) = 8$ to get $x = \\pm 5$', marks: 1 },
      { step: 'Proves $g$ is one-one using $x - 2 \\ge 0$', marks: 1 },
      { step: 'Proves $g$ is onto with pre-image $2 + \\sqrt{y + 1}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d07', chapter: C, topic: OO, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $a$ be a real constant and let $f : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = 3x + a$ for $x < 2$ and $f(x) = x^{2} + 1$ for $x \\ge 2$. Find the value of $a$ for which $f$ is both one-one and onto, justifying why $f$ fails for every other value of $a$. For that value of $a$, find $x$ with $f(x) = 8$.',
    answer: 'For $x \\ge 2$, $x^{2} + 1$ takes exactly the values in $[5, \\infty)$. For $x < 2$, $3x + a$ takes exactly the values in $(-\\infty, 6 + a)$. If $a > -1$, then $6 + a > 5$; the value $5$ is taken twice, by $f(2) = 5$ and by $x = \\frac{5 - a}{3} < 2$ in the first piece, so $f$ is not one-one. If $a < -1$, then $6 + a < 5$ and the value $6 + a$ is not taken: the first piece gives only values below $6 + a$ and the second only values $\\ge 5$. So $f$ is not onto. If $a = -1$, the first piece covers $(-\\infty, 5)$ and the second $[5, \\infty)$, with no overlap and no gap; each piece is one-one (linear, and $x^{2} + 1$ is increasing for $x \\ge 2$), so $f$ is one-one and onto. Hence $a = -1$. Then $f(x) = 8$: in the first piece $3x - 1 = 8$ gives $x = 3$, not $< 2$; in the second $x^{2} + 1 = 8$ gives $x = \\sqrt{7} \\ge 2$ (the root $-\\sqrt{7}$ is rejected). So $x = \\sqrt{7}$.',
    steps: [
      { step: 'Finds the ranges of the two pieces: $[5, \\infty)$ and $(-\\infty, 6 + a)$', marks: 1 },
      { step: 'Shows $a > -1$ makes the ranges overlap, so $f$ is not one-one', marks: 1 },
      { step: 'Shows $a < -1$ leaves a gap, so $f$ is not onto', marks: 1 },
      { step: 'Shows $a = -1$ gives no overlap or gap and $f$ is one-one and onto', marks: 1 },
      { step: 'Solves $f(x) = 8$ in the correct piece to get $x = \\sqrt{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-rf-r4-d08', chapter: C, topic: BC, type: 'long', complexity: 'hard', marks: 5,
    text: 'Let $A = \\{1, 2, 3, 4, 5, 6\\}$. Find (a) the number of bijections $f : A \\to A$; (b) the number of bijections with $f(1) = 1$ and $f(6) = 6$; (c) the number of bijections in which both $f(1)$ and $f(2)$ are odd; (d) the number of bijections with $f(1) < f(2)$; (e) the number of bijections with $f(1) < f(2) < f(3)$.',
    answer: '(a) $6! = 720$. (b) The remaining four elements map bijectively onto the remaining four values: $4! = 24$. (c) $f(1)$ is odd in $3$ ways ($1, 3, 5$), $f(2)$ is a different odd value in $2$ ways, and the other four elements are mapped in $4! = 24$ ways: $3 \\times 2 \\times 24 = 144$. (d) Swapping the values $f(1)$ and $f(2)$ pairs each bijection with $f(1) < f(2)$ with one having $f(1) > f(2)$, and they are never equal, so exactly half: $\\frac{720}{2} = 360$. (e) The three values $f(1), f(2), f(3)$ can be arranged in $3! = 6$ orders, all equally many, and exactly one order is increasing: $\\frac{720}{6} = 120$.',
    steps: [
      { step: 'Part (a): $720$', marks: 1 },
      { step: 'Part (b): $4! = 24$', marks: 1 },
      { step: 'Part (c): $3 \\times 2 \\times 4! = 144$', marks: 1 },
      { step: 'Part (d): half of $720$, i.e. $360$, with the symmetry reason', marks: 1 },
      { step: 'Part (e): one sixth of $720$, i.e. $120$, with the reason', marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-rf-r4-e01', chapter: C, topic: RST, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An office has four meetings on one day: $M_1$ from $9{:}00$ to $10{:}30$, $M_2$ from $10{:}00$ to $11{:}30$, $M_3$ from $11{:}00$ to $12{:}30$ and $M_4$ from $13{:}00$ to $14{:}00$. The planner records the relation $O$ on $\\{M_1, M_2, M_3, M_4\\}$ where $(x, y) \\in O$ if the two meetings share some time (a meeting shares time with itself).',
    answer: '(i) Yes, $O$ is reflexive. (ii) Yes, $O$ is symmetric. (iii) $O$ is not transitive; $O$ has $8$ ordered pairs. OR (iii) $S$ is an equivalence relation with classes $\\{M_1, M_2, M_3\\}$ and $\\{M_4\\}$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $O$ reflexive? Give a reason.',
        answer: 'Yes. Each meeting shares time with itself by definition, so $(M_i, M_i) \\in O$ for $i = 1, 2, 3, 4$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is $O$ symmetric? Give a reason.',
        answer: 'Yes. If $M_i$ shares some time with $M_j$ then $M_j$ shares that same time with $M_i$, so $(M_i, M_j) \\in O$ implies $(M_j, M_i) \\in O$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $O$ is not transitive and find the number of ordered pairs in $O$.\n\nOR\n\nDefine $S = \\{(x, y) : x \\text{ and } y \\text{ both start before } 12{:}00, \\text{ or both start at or after } 12{:}00\\}$. Show that $S$ is an equivalence relation and write its equivalence classes.',
        answer: '$M_1$ and $M_2$ overlap (10:00 to 10:30) and $M_2$ and $M_3$ overlap (11:00 to 11:30), so $(M_1, M_2), (M_2, M_3) \\in O$. But $M_1$ ends at 10:30, before $M_3$ starts at 11:00, so $(M_1, M_3) \\notin O$. Hence $O$ is not transitive. The pairs of $O$ are $(M_1, M_1), (M_2, M_2), (M_3, M_3), (M_4, M_4)$ and $(M_1, M_2), (M_2, M_1), (M_2, M_3), (M_3, M_2)$: $8$ ordered pairs. OR: $S$ relates two meetings when they belong to the same part of the day (morning start or afternoon start). It is reflexive and symmetric, and it is transitive because if $x$ and $y$ are in the same part of the day and $y$ and $z$ are in the same part of the day, then so are $x$ and $z$. The meetings $M_1, M_2, M_3$ start before $12{:}00$ and $M_4$ starts after, so the classes are $\\{M_1, M_2, M_3\\}$ and $\\{M_4\\}$.',
      },
    ],
  },
  {
    id: 'c12-rf-r4-e02', chapter: C, topic: EQ, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A music app stores six songs with durations (in minutes): $S_1$: $3.2$, $S_2$: $3.9$, $S_3$: $4.1$, $S_4$: $4.8$, $S_5$: $3.5$, $S_6$: $5.0$. The app files two songs under the same label when the whole number of minutes in their durations (the greatest integer not exceeding the duration) is the same. This defines the relation $R = \\{(x, y) : \\lfloor d(x) \\rfloor = \\lfloor d(y) \\rfloor\\}$ on $\\{S_1, \\ldots, S_6\\}$, where $d(x)$ is the duration of $x$.',
    answer: '(i) Yes, $R$ is an equivalence relation. (ii) $[S_2] = \\{S_1, S_2, S_5\\}$. (iii) There are $3$ classes and $14$ ordered pairs. OR (iii) $T$ is not transitive because $(S_1, S_3), (S_3, S_4) \\in T$ but $(S_1, S_4) \\notin T$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Is $R$ an equivalence relation? Give a brief reason.',
        answer: 'Yes. "Having the same value of $\\lfloor d \\rfloor$" is reflexive, symmetric and transitive because equality of numbers has these three properties.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Write the equivalence class of $S_2$.',
        answer: '$\\lfloor 3.9 \\rfloor = 3$. The songs with whole number of minutes $3$ are $S_1$ ($3.2$), $S_2$ ($3.9$) and $S_5$ ($3.5$). So $[S_2] = \\{S_1, S_2, S_5\\}$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'How many equivalence classes does $R$ have, and how many ordered pairs does $R$ contain?\n\nOR\n\nA second relation $T$ relates two songs if their durations differ by less than $1$ minute. Show that $T$ is not transitive.',
        answer: 'The classes are $\\{S_1, S_2, S_5\\}$ (whole minutes $3$), $\\{S_3, S_4\\}$ (whole minutes $4$) and $\\{S_6\\}$ (whole minutes $5$): $3$ classes. The number of ordered pairs is $3^{2} + 2^{2} + 1^{2} = 9 + 4 + 1 = 14$. OR: $|3.2 - 4.1| = 0.9 < 1$ so $(S_1, S_3) \\in T$, and $|4.1 - 4.8| = 0.7 < 1$ so $(S_3, S_4) \\in T$. But $|3.2 - 4.8| = 1.6 \\ge 1$, so $(S_1, S_4) \\notin T$. Hence $T$ is not transitive.',
      },
    ],
  },
  {
    id: 'c12-rf-r4-e03', chapter: C, topic: OO, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A digital clock shows the hour in $24$-hour form, $H = \\{0, 1, 2, \\ldots, 23\\}$. A wall clock shows the hour in $12$-hour form, $C = \\{1, 2, \\ldots, 12\\}$. The conversion is the function $f : H \\to C$ with $f(h) = h$ for $1 \\le h \\le 12$, $f(h) = h - 12$ for $13 \\le h \\le 23$, and $f(0) = 12$.',
    answer: '(i) $f(0) = 12$, $f(12) = 12$, $f(19) = 7$. (ii) $f$ is not one-one. (iii) $f$ is onto and each element of $C$ has exactly two pre-images. OR (iii) The codomain must have at least $24$ elements.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'Find $f(0)$, $f(12)$ and $f(19)$.',
        answer: '$f(0) = 12$ by definition. $12$ lies in $1 \\le h \\le 12$, so $f(12) = 12$. $19$ lies in $13 \\le h \\le 23$, so $f(19) = 19 - 12 = 7$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'Is $f$ one-one? Justify.',
        answer: 'No. $f(0) = 12 = f(12)$ although $0 \\ne 12$. (Also $f(1) = f(13) = 1$.)',
      },
      {
        label: '(iii)', marks: 2,
        text: 'Show that $f$ is onto and find how many elements of $H$ are mapped to each element of $C$.\n\nOR\n\nWhat is the least number of elements a codomain must have for there to exist some one-one function from $H$ into it? Justify.',
        answer: 'For $c = 1, 2, \\ldots, 11$, the hours $c$ and $c + 12$ both map to $c$. For $c = 12$, the hours $12$ and $0$ both map to $12$. So every element of $C$ has a pre-image (onto) and exactly two pre-images, accounting for all $2 \\times 12 = 24$ elements of $H$. OR: a one-one function sends the $24$ different elements of $H$ to $24$ different elements of the codomain, so the codomain needs at least $24$ elements, and $24$ suffice (for example the identity on $H$).',
      },
    ],
  },
  {
    id: 'c12-rf-r4-e04', chapter: C, topic: BC, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'At a trade fair, four exhibitors $E = \\{e_1, e_2, e_3, e_4\\}$ are each given exactly one of three booths $B = \\{b_1, b_2, b_3\\}$; several exhibitors may share a booth. An allocation is a function from $E$ to $B$.',
    answer: '(i) $3^{4} = 81$. (ii) $2^{4} = 16$. (iii) $\\binom{4}{2} \\times 3! = 36$. OR (iii) exactly one booth is used in $3$ allocations and exactly two booths in $42$.',
    parts: [
      {
        label: '(i)', marks: 1,
        text: 'How many allocations are possible?',
        answer: 'Each of the $4$ exhibitors can take any of the $3$ booths: $3^{4} = 81$.',
      },
      {
        label: '(ii)', marks: 1,
        text: 'In how many allocations is booth $b_3$ left empty?',
        answer: 'Each exhibitor must then choose from $\\{b_1, b_2\\}$: $2^{4} = 16$.',
      },
      {
        label: '(iii)', marks: 2,
        text: 'In how many allocations is every booth used by at least one exhibitor (onto functions)?\n\nOR\n\nIn how many allocations is exactly one booth used, and in how many exactly two booths?',
        answer: 'If all three booths are used by four exhibitors, the exhibitors split in the pattern $2 + 1 + 1$: exactly one booth has two exhibitors and the other two booths have one each. Choose the $2$ exhibitors who share a booth in $\\binom{4}{2} = 6$ ways. Then the three groups (the pair and the two single exhibitors) are given to the $3$ different booths in $3! = 6$ ways. Number of allocations $= 6 \\times 6 = 36$. OR: exactly one booth is used: $3$ allocations (all exhibitors in the same booth). Exactly two booths are used: choose the two booths in $3$ ways, and then allocate with both used: $2^{4} - 2 = 14$ ways, giving $3 \\times 14 = 42$. (Check: $3 + 42 + 36 = 81$.)',
      },
    ],
  },
];
