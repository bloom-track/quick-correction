import type { TextbookQuestion } from './types.js';

/**
 * Extra questions for topics that had fewer than five, so random papers can
 * vary. These practise skills the board tests but do not match a single book
 * item, so `ref` is empty and the question is stored without a textbook pointer.
 */
export const TOPUPS: TextbookQuestion[] = [
  // Real Numbers · HCF written as a linear combination
  {
    id: 'tu-rn-lc-01', chapter: 'Real Numbers', topic: 'HCF written as a linear combination', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'HCF$(56, 72) = 8$ is written as $56x + 72y$. Which pair of integers $x$, $y$ works?',
    options: ['$x = 4,\\ y = -3$', '$x = -4,\\ y = 3$', '$x = 3,\\ y = -2$', '$x = 2,\\ y = -1$'],
    answer: 'Correct option: A) $x = 4,\\ y = -3$. $56 \\times 4 - 72 \\times 3 = 224 - 216 = 8$. Option B gives $-8$, option C gives $24$ and option D gives $40$.',
  },
  {
    id: 'tu-rn-lc-02', chapter: 'Real Numbers', topic: 'HCF written as a linear combination', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'If HCF$(65, 117)$ is written in the form $65m - 117$, find the value of $m$.',
    answer: '$65 = 5 \\times 13$ and $117 = 3^{2} \\times 13$, so HCF$(65, 117) = 13$.\nThen $65m - 117 = 13$, so $65m = 130$ and $m = 2$.',
    steps: [{ step: 'HCF found as 13 by prime factorisation', marks: 1 }, { step: 'Equation solved: m = 2', marks: 1 }],
  },
  {
    id: 'tu-rn-lc-03', chapter: 'Real Numbers', topic: 'HCF written as a linear combination', ref: '',
    type: 'short', complexity: 'medium', marks: 2,
    text: 'The HCF of $144$ and $180$ is written as $13m - 3$. Find $m$.',
    answer: '$144 = 2^{4} \\times 3^{2}$ and $180 = 2^{2} \\times 3^{2} \\times 5$, so HCF $= 2^{2} \\times 3^{2} = 36$.\nThen $13m - 3 = 36$, so $13m = 39$ and $m = 3$.',
    steps: [{ step: 'HCF found as 36', marks: 1 }, { step: 'm = 3', marks: 1 }],
  },
  {
    id: 'tu-rn-lc-04', chapter: 'Real Numbers', topic: 'HCF written as a linear combination', ref: '',
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Find the HCF of $210$ and $55$ by prime factorisation. Then find integers $x$ and $y$ such that HCF$(210, 55) = 210x + 55y$.',
    answer: '$210 = 2 \\times 3 \\times 5 \\times 7$ and $55 = 5 \\times 11$, so HCF $= 5$.\nWe need $210x + 55y = 5$, that is $42x + 11y = 1$.\nTrying $x = 5$: $42 \\times 5 = 210$ and $210 - 1 = 209 = 11 \\times 19$, so $y = -19$.\nCheck: $210 \\times 5 + 55 \\times (-19) = 1050 - 1045 = 5$. So $x = 5$, $y = -19$ (other pairs also work, such as $x = -6$, $y = 23$).',
    steps: [{ step: 'HCF = 5 by prime factorisation', marks: 1 }, { step: 'Reduced to 42x + 11y = 1 and a solution found', marks: 1 }, { step: 'Checked: 210(5) + 55(-19) = 5', marks: 1 }],
  },

  // Coordinate Geometry · Lines and axis intercepts
  {
    id: 'tu-cg-ax-01', chapter: 'Coordinate Geometry', topic: 'Lines and axis intercepts', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The line $2x - 5y = 10$ meets the $y$-axis at the point:',
    options: ['$(5, 0)$', '$(0, -2)$', '$(0, 2)$', '$(-2, 0)$'],
    answer: 'Correct option: B) $(0, -2)$. On the $y$-axis $x = 0$, so $-5y = 10$ and $y = -2$. $(5, 0)$ is where it meets the $x$-axis.',
  },
  {
    id: 'tu-cg-ax-02', chapter: 'Coordinate Geometry', topic: 'Lines and axis intercepts', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The graph of $y = -3$ is a line',
    options: ['parallel to the $x$-axis, $3$ units above it', 'parallel to the $x$-axis, $3$ units below it', 'parallel to the $y$-axis, $3$ units to its left', 'passing through the origin'],
    answer: 'Correct option: B). Every point on it has $y = -3$, so it is a horizontal line $3$ units below the $x$-axis.',
  },
  {
    id: 'tu-cg-ax-03', chapter: 'Coordinate Geometry', topic: 'Lines and axis intercepts', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Find the points where the line $4x + 3y = 24$ cuts the two axes, and the length of the part of the line between them.',
    answer: 'On the $x$-axis, $y = 0$: $4x = 24$, so $x = 6$, giving $A(6, 0)$.\nOn the $y$-axis, $x = 0$: $3y = 24$, so $y = 8$, giving $B(0, 8)$.\n$AB = \\sqrt{6^{2} + 8^{2}} = \\sqrt{100} = 10$ units.',
    steps: [{ step: 'Both intercept points found: (6, 0) and (0, 8)', marks: 1 }, { step: 'Distance AB = 10 units', marks: 1 }],
  },
  {
    id: 'tu-cg-ax-04', chapter: 'Coordinate Geometry', topic: 'Lines and axis intercepts', ref: '',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The line $3x + y = 9$ meets the $x$-axis at $A$ and the $y$-axis at $B$. (i) Find the midpoint of $AB$. (ii) The line $y = x$ meets $AB$ at $P$. Find $P$ and the ratio $AP : PB$.',
    answer: '$A$: $y = 0$ gives $x = 3$, so $A(3, 0)$. $B$: $x = 0$ gives $y = 9$, so $B(0, 9)$.\n(i) Midpoint $= \\left(\\frac{3 + 0}{2}, \\frac{0 + 9}{2}\\right) = (1.5, 4.5)$.\n(ii) Put $y = x$ in $3x + y = 9$: $4x = 9$, so $P\\left(\\frac{9}{4}, \\frac{9}{4}\\right)$.\nLet $P$ divide $AB$ in the ratio $k : 1$. Then $y = \\frac{9k}{k + 1} = \\frac{9}{4}$, so $36k = 9k + 9$, $k = \\frac{1}{3}$. So $AP : PB = 1 : 3$.',
    steps: [{ step: 'A(3, 0) and B(0, 9)', marks: 1 }, { step: 'Midpoint (1.5, 4.5)', marks: 1 }, { step: 'P(9/4, 9/4) and AP : PB = 1 : 3', marks: 1 }],
  },

  // Probability · Data tables and charts
  {
    id: 'tu-pr-dt-01', chapter: 'Probability', topic: 'Data tables and charts', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'The table shows how $40$ students of a class come to school: bus $14$, cycle $10$, walk $9$, car $7$. A student is chosen at random. The probability that the student does not come by bus is',
    options: ['$\\frac{7}{20}$', '$\\frac{13}{20}$', '$\\frac{1}{4}$', '$\\frac{9}{40}$'],
    answer: 'Correct option: B) $\\frac{13}{20}$. $40 - 14 = 26$ students do not come by bus, and $\\frac{26}{40} = \\frac{13}{20}$.',
  },
  {
    id: 'tu-pr-dt-02', chapter: 'Probability', topic: 'Data tables and charts', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A pie chart shows the $360$ books in a reading corner: fiction $120^\\circ$, science $90^\\circ$, history $60^\\circ$ and comics $90^\\circ$. A book is picked at random. The probability that it is a history book is',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{12}$'],
    answer: 'Correct option: B) $\\frac{1}{6}$. The history sector is $\\frac{60}{360} = \\frac{1}{6}$ of the circle, so $\\frac{1}{6}$ of the books are history books.',
  },
  {
    id: 'tu-pr-dt-03', chapter: 'Probability', topic: 'Data tables and charts', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'In a housing society, $50$ families are grouped by the number of children: $0$ children: $6$ families, $1$: $18$, $2$: $16$, $3$: $7$, $4$: $3$. A family is chosen at random. Find the probability that it has (i) exactly $2$ children, (ii) at least $2$ children.',
    answer: '(i) $P(\\text{exactly } 2) = \\frac{16}{50} = \\frac{8}{25}$.\n(ii) Families with at least $2$ children: $16 + 7 + 3 = 26$, so $P = \\frac{26}{50} = \\frac{13}{25}$.',
    steps: [{ step: '(i) 8/25', marks: 1 }, { step: '(ii) 26 families, 13/25', marks: 1 }],
  },
  {
    id: 'tu-pr-dt-04', chapter: 'Probability', topic: 'Data tables and charts', ref: '',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'The marks of $30$ students in a quiz are: $0$–$10$: $3$ students, $10$–$20$: $7$, $20$–$30$: $12$, $30$–$40$: $8$. (Each class includes its lower limit but not its upper limit.) A student is chosen at random. Find the probability that the student scored (i) less than $20$, (ii) $20$ or more, (iii) $30$ or more.',
    answer: '(i) $3 + 7 = 10$ students, so $P = \\frac{10}{30} = \\frac{1}{3}$.\n(ii) $1 - \\frac{1}{3} = \\frac{2}{3}$ (that is, $\\frac{20}{30}$).\n(iii) $\\frac{8}{30} = \\frac{4}{15}$.',
    steps: [{ step: '(i) 1/3', marks: 1 }, { step: '(ii) 2/3', marks: 1 }, { step: '(iii) 4/15', marks: 1 }],
  },

  // Probability · Cross-chapter probability
  {
    id: 'tu-pr-cc-01', chapter: 'Probability', topic: 'Cross-chapter probability', ref: '',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A number $p$ is chosen at random from $1, 2, 3, 4, 5, 6$. The probability that $x^{2} + 4x + p = 0$ has real roots is',
    options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{5}{6}$'],
    answer: 'Correct option: B) $\\frac{2}{3}$. Real roots need $16 - 4p \\ge 0$, that is $p \\le 4$. So $p = 1, 2, 3, 4$ work: $\\frac{4}{6} = \\frac{2}{3}$.',
  },
  {
    id: 'tu-pr-cc-02', chapter: 'Probability', topic: 'Cross-chapter probability', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A number is chosen at random from the first $15$ natural numbers. The probability that it is a term of the AP $3, 7, 11, \\ldots$ is',
    options: ['$\\frac{4}{15}$', '$\\frac{1}{5}$', '$\\frac{1}{3}$', '$\\frac{2}{15}$'],
    answer: 'Correct option: A) $\\frac{4}{15}$. The terms up to $15$ are $3, 7, 11, 15$: four numbers out of $15$.',
  },
  {
    id: 'tu-pr-cc-03', chapter: 'Probability', topic: 'Cross-chapter probability', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Cards numbered $1$ to $20$ are shuffled and one is drawn. Find the probability that the number on it is (i) a zero of the polynomial $x^{2} - 9x + 20$, (ii) a prime factor of $90$.',
    answer: '(i) $x^{2} - 9x + 20 = (x - 4)(x - 5)$, so the zeroes are $4$ and $5$: $P = \\frac{2}{20} = \\frac{1}{10}$.\n(ii) $90 = 2 \\times 3^{2} \\times 5$, so the prime factors are $2, 3, 5$: $P = \\frac{3}{20}$.',
    steps: [{ step: '(i) zeroes 4 and 5, P = 1/10', marks: 1 }, { step: '(ii) prime factors 2, 3, 5, P = 3/20', marks: 1 }],
  },
  {
    id: 'tu-pr-cc-04', chapter: 'Probability', topic: 'Cross-chapter probability', ref: '',
    type: 'short', complexity: 'hard', marks: 3,
    text: 'Two dice are thrown together. Let $a$ be the number on the first die and $b$ the number on the second. Find the probability that (i) the point $(a, b)$ lies on the line $x + y = 7$, (ii) the equation $x^{2} + ax + b = 0$ has equal roots.',
    answer: 'There are $36$ equally likely outcomes.\n(i) $a + b = 7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, so $P = \\frac{6}{36} = \\frac{1}{6}$.\n(ii) Equal roots need $a^{2} = 4b$. With $b$ from $1$ to $6$: $a = 2, b = 1$ and $a = 4, b = 4$ ($a = 6$ would need $b = 9$). So $P = \\frac{2}{36} = \\frac{1}{18}$.',
    steps: [{ step: '36 outcomes', marks: 1 }, { step: '(i) 6 outcomes, 1/6', marks: 1 }, { step: '(ii) a² = 4b gives 2 outcomes, 1/18', marks: 1 }],
  },

  // Polynomials · Degree, terms and value of a polynomial
  {
    id: 'tu-po-dg-01', chapter: 'Polynomials', topic: 'Degree, terms and value of a polynomial', ref: '',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'The degree of the polynomial $(2x^{2} + 1)(x^{3} - x) - 2x^{5}$ is',
    options: ['$5$', '$3$', '$2$', '$1$'],
    answer: 'Correct option: B) $3$. Expanding: $2x^{5} - 2x^{3} + x^{3} - x - 2x^{5} = -x^{3} - x$, whose degree is $3$.',
  },
  {
    id: 'tu-po-dg-02', chapter: 'Polynomials', topic: 'Degree, terms and value of a polynomial', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Which of the following is not a polynomial?',
    options: ['$\\sqrt{3}\\,x^{2} - 2x$', '$x^{2} + \\frac{1}{x}$', '$0.5x^{3}$', '$7$'],
    answer: 'Correct option: B). $\\frac{1}{x} = x^{-1}$ has a negative power of $x$, so the expression is not a polynomial. The others have only whole-number powers.',
  },
  {
    id: 'tu-po-dg-03', chapter: 'Polynomials', topic: 'Degree, terms and value of a polynomial', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'If $p(x) = x^{2} - 3x + k$ and $p(2) = 5$, find $k$ and then $p(-1)$.',
    answer: '$p(2) = 4 - 6 + k = 5$, so $k = 7$.\n$p(-1) = 1 + 3 + 7 = 11$.',
    steps: [{ step: 'k = 7', marks: 1 }, { step: 'p(-1) = 11', marks: 1 }],
  },

  // Quadratic Equations · Roots and unknown coefficients
  {
    id: 'tu-qe-rc-01', chapter: 'Quadratic Equations', topic: 'Roots and unknown coefficients', ref: '',
    type: 'mcq', complexity: 'easy', marks: 1,
    text: 'One root of $x^{2} - 7x + k = 0$ is $2$. The other root is',
    options: ['$5$', '$-5$', '$10$', '$9$'],
    answer: 'Correct option: A) $5$. Putting $x = 2$: $4 - 14 + k = 0$, so $k = 10$. Then $x^{2} - 7x + 10 = (x - 2)(x - 5)$, and the other root is $5$.',
  },
  {
    id: 'tu-qe-rc-02', chapter: 'Quadratic Equations', topic: 'Roots and unknown coefficients', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'If $x = \\frac{1}{2}$ is a root of $2x^{2} + px - 3 = 0$, find $p$ and the other root.',
    answer: '$2 \\cdot \\frac{1}{4} + \\frac{p}{2} - 3 = 0$, so $\\frac{p}{2} = \\frac{5}{2}$ and $p = 5$.\n$2x^{2} + 5x - 3 = (2x - 1)(x + 3) = 0$, so the other root is $-3$.',
    steps: [{ step: 'p = 5', marks: 1 }, { step: 'Other root -3 by factorising', marks: 1 }],
  },
  {
    id: 'tu-qe-rc-03', chapter: 'Quadratic Equations', topic: 'Roots and unknown coefficients', ref: '',
    type: 'short', complexity: 'medium', marks: 3,
    text: '$x = 3$ is a root of $x^{2} + ax - 6 = 0$. Find $a$. Then find the value of $b$ for which $ax^{2} + 6x + b = 0$ has equal roots.',
    answer: '$9 + 3a - 6 = 0$, so $a = -1$.\nThe second equation is $-x^{2} + 6x + b = 0$. Equal roots need $6^{2} - 4(-1)(b) = 0$, so $36 + 4b = 0$ and $b = -9$.\nCheck: $-x^{2} + 6x - 9 = -(x - 3)^{2}$, which has the equal roots $3, 3$.',
    steps: [{ step: 'a = -1', marks: 1 }, { step: 'Discriminant condition 36 + 4b = 0', marks: 1 }, { step: 'b = -9', marks: 1 }],
  },

  // Probability · Spinners and games
  {
    id: 'tu-pr-sp-01', chapter: 'Probability', topic: 'Spinners and games', ref: '',
    type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A spinner has $8$ equal sectors numbered $1$ to $8$. The probability that the pointer stops on a number that is greater than $5$ or even is',
    options: ['$\\frac{3}{8}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{7}{8}$'],
    answer: 'Correct option: C) $\\frac{5}{8}$. Greater than $5$: $6, 7, 8$. Even: $2, 4, 6, 8$. Together: $2, 4, 6, 7, 8$, which is $5$ of the $8$ numbers.',
  },
  {
    id: 'tu-pr-sp-02', chapter: 'Probability', topic: 'Spinners and games', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'Two spinners each have three equal sectors numbered $1$, $2$ and $3$. Both are spun. Find the probability that (i) the sum of the two numbers is $4$, (ii) the product of the two numbers is even.',
    answer: 'There are $3 \\times 3 = 9$ equally likely outcomes.\n(i) Sum $4$: $(1,3), (2,2), (3,1)$, so $P = \\frac{3}{9} = \\frac{1}{3}$.\n(ii) The product is odd only when both are odd: $2 \\times 2 = 4$ outcomes. So $P(\\text{even}) = 1 - \\frac{4}{9} = \\frac{5}{9}$.',
    steps: [{ step: '(i) 1/3', marks: 1 }, { step: '(ii) 5/9', marks: 1 }],
  },
  {
    id: 'tu-pr-sp-03', chapter: 'Probability', topic: 'Spinners and games', ref: '',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'Ravi and Meena play a game with three fair coins tossed together. Ravi wins if all three coins show the same face; otherwise Meena wins. (i) List all the outcomes. (ii) Find the probability that each of them wins. (iii) Is the game fair? Give a reason.',
    answer: '(i) HHH, HHT, HTH, THH, HTT, THT, TTH, TTT: $8$ equally likely outcomes.\n(ii) Ravi wins on HHH and TTT: $P = \\frac{2}{8} = \\frac{1}{4}$. Meena: $1 - \\frac{1}{4} = \\frac{3}{4}$.\n(iii) No. A fair game gives both players the same chance, but Meena is three times as likely to win.',
    steps: [{ step: '(i) all 8 outcomes listed', marks: 1 }, { step: '(ii) 1/4 and 3/4', marks: 1 }, { step: '(iii) not fair, with reason', marks: 1 }],
  },

  // Surface Areas and Volumes · Immersion and volume transfer
  {
    id: 'tu-sv-im-01', chapter: 'Surface Areas and Volumes', topic: 'Immersion and volume transfer', ref: '',
    type: 'short', complexity: 'easy', marks: 2,
    text: 'A cylindrical beaker of base radius $6 \\text{ cm}$ contains some water. A solid metal sphere of radius $3 \\text{ cm}$ is lowered in until it is fully under water. By how much does the water level rise?',
    answer: 'Volume of the sphere $= \\frac{4}{3}\\pi (3)^{3} = 36\\pi \\text{ cm}^{3}$.\nIf the level rises by $h$, then $\\pi (6)^{2} h = 36\\pi$, so $36h = 36$ and $h = 1 \\text{ cm}$.',
    steps: [{ step: 'Volume of sphere 36π cm³', marks: 1 }, { step: 'Rise h = 1 cm', marks: 1 }],
  },
  {
    id: 'tu-sv-im-02', chapter: 'Surface Areas and Volumes', topic: 'Immersion and volume transfer', ref: '',
    type: 'short', complexity: 'medium', marks: 3,
    text: 'A cylindrical tank of base radius $14 \\text{ cm}$ is partly filled with water. Identical spherical steel balls of radius $1.4 \\text{ cm}$ are dropped in, and all of them sink. The water level rises by $5.6 \\text{ cm}$. How many balls were dropped in?',
    answer: 'Volume of water raised $= \\pi (14)^{2}(5.6) = 1097.6\\pi \\text{ cm}^{3}$.\nVolume of one ball $= \\frac{4}{3}\\pi (1.4)^{3} = \\frac{4}{3}\\pi (2.744) \\text{ cm}^{3}$.\nNumber of balls $= \\frac{1097.6}{\\frac{4}{3} \\times 2.744} = \\frac{1097.6 \\times 3}{10.976} = 300$.',
    steps: [{ step: 'Volume of water raised 1097.6π cm³', marks: 1 }, { step: 'Volume of one ball (4/3)π(1.4)³', marks: 1 }, { step: 'Number of balls = 300', marks: 1 }],
  },
];
