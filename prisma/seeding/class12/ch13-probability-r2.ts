import type { Class12Question } from './types.js';

const C = 'Probability';
const COND = 'Conditional probability';
const MULT = 'Multiplication theorem and independent events';
const BAYES = "Total probability and Bayes' theorem";
const RV = 'Random variables and their mean';

const AR_OPTIONS = [
  'Both (A) and (R) are true, and (R) is the correct explanation of (A).',
  'Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
  '(A) is true, but (R) is false.',
  '(A) is false, but (R) is true.',
];

export const CH13_PROB_R2: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-prob-r2-a01', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For two events $A$ and $B$, $P(B) = 0.5$ and $P(A \\mid B) = 0.4$. Then $P(A \\cap B)$ is',
    options: ['$0.2$', '$0.8$', '$0.9$', '$0.1$'],
    answer: 'Correct option: A) $0.2$. By the definition of conditional probability, $P(A \\cap B) = P(B)\\,P(A \\mid B) = 0.5 \\times 0.4 = 0.2$. Option B divides instead of multiplying ($\\frac{0.4}{0.5}$).',
  },
  {
    id: 'c12-prob-r2-a02', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A card is drawn at random from a well-shuffled pack of $52$ cards. Given that it is a face card (jack, queen or king), the probability that it is a king is',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{13}$', '$\\frac{3}{13}$', '$\\frac{1}{4}$'],
    answer: 'Correct option: A) $\\frac{1}{3}$. There are $12$ face cards, of which $4$ are kings, so the probability is $\\frac{4}{12} = \\frac{1}{3}$. Option B is the unconditional probability of a king and option C is the probability of a face card.',
  },
  {
    id: 'c12-prob-r2-a03', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A number is chosen at random from $1, 2, 3, \\dots, 30$. Given that it is a multiple of $3$, the probability that it is also a multiple of $5$ is',
    options: ['$\\frac{1}{5}$', '$\\frac{1}{15}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$'],
    answer: 'Correct option: A) $\\frac{1}{5}$. There are $10$ multiples of $3$ up to $30$, and of these only $15$ and $30$ are multiples of $5$, so the probability is $\\frac{2}{10} = \\frac{1}{5}$. Option B is the unconditional probability $\\frac{2}{30}$ of a multiple of $15$.',
  },
  {
    id: 'c12-prob-r2-a04', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For two events $A$ and $B$, $P(A) = 0.5$, $P(B) = 0.6$ and $P(A \\cup B) = 0.8$. Then $P(B \\mid A\')$ is',
    options: ['$\\frac{3}{5}$', '$\\frac{3}{10}$', '$\\frac{1}{2}$', '$\\frac{2}{5}$'],
    answer: 'Correct option: A) $\\frac{3}{5}$. $P(A \\cap B) = 0.5 + 0.6 - 0.8 = 0.3$, so $P(B \\cap A\') = 0.6 - 0.3 = 0.3$. With $P(A\') = 0.5$, $P(B \\mid A\') = \\frac{0.3}{0.5} = \\frac{3}{5}$. Option B stops at $P(B \\cap A\')$ and option C is $P(A\')$.',
  },
  {
    id: 'c12-prob-r2-a05', chapter: C, topic: COND, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): For any two events $A$ and $B$ with $P(B) > 0$, $P(A \\mid B) + P(A\' \\mid B) = 1$.\nReason (R): For any two events $A$ and $B$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both are true, but (R) does not explain (A). (A) holds because $P(A \\cap B) + P(A\' \\cap B) = P(B)$, and dividing by $P(B)$ gives the result. (R) is the addition theorem, which is true but is not the reason for (A).',
  },
  {
    id: 'c12-prob-r2-a06', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two fair dice are thrown. Given that the two numbers shown are different, the probability that their sum is $7$ is',
    options: ['$\\frac{1}{5}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{1}{30}$'],
    answer: 'Correct option: A) $\\frac{1}{5}$. Of the $36$ outcomes, $30$ show different numbers. All $6$ outcomes with sum $7$ have different numbers, so the probability is $\\frac{6}{30} = \\frac{1}{5}$. Option B is the unconditional probability $\\frac{6}{36}$ and option C is the probability that the numbers differ.',
  },
  {
    id: 'c12-prob-r2-a07', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ and $B$ are independent events with $P(A) = 0.5$ and $P(B) = 0.6$, then the probability that neither $A$ nor $B$ occurs is',
    options: ['$0.2$', '$0.3$', '$0.8$', '$0.5$'],
    answer: 'Correct option: A) $0.2$. Since $A\'$ and $B\'$ are also independent, $P(A\' \\cap B\') = 0.5 \\times 0.4 = 0.2$. Option B is $P(A \\cap B)$ and option C is $P(A \\cup B)$.',
  },
  {
    id: 'c12-prob-r2-a08', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A bag has $5$ red and $3$ blue marbles. A marble is drawn, its colour noted and it is put back; then a second marble is drawn. The probability that both marbles are blue is',
    options: ['$\\frac{9}{64}$', '$\\frac{3}{28}$', '$\\frac{3}{8}$', '$\\frac{15}{64}$'],
    answer: 'Correct option: A) $\\frac{9}{64}$. With replacement the draws are independent, so the probability is $\\frac{3}{8} \\times \\frac{3}{8} = \\frac{9}{64}$. Option B, $\\frac{3}{8} \\times \\frac{2}{7}$, is the answer without replacement.',
  },
  {
    id: 'c12-prob-r2-a09', chapter: C, topic: MULT, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'A basketball player scores from the free-throw line with probability $0.3$ on each attempt, independently of other attempts. The least number of attempts needed so that the probability of scoring at least once is more than $0.9$ is',
    options: ['$6$', '$7$', '$3$', '$4$'],
    answer: 'Correct option: B) $7$. P(at least one score in $n$ attempts) $= 1 - (0.7)^{n}$. We need $(0.7)^{n} < 0.1$. Since $(0.7)^{6} \\approx 0.118$ and $(0.7)^{7} \\approx 0.082$, the least $n$ is $7$. Option C comes from wrongly using $0.3n > 0.9$.',
  },
  {
    id: 'c12-prob-r2-a10', chapter: C, topic: MULT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'If $A$ and $B$ are independent events with $P(A) = 0.3$ and $P(B) = 0.6$, then the probability that exactly one of $A$ and $B$ occurs is',
    options: ['$0.54$', '$0.72$', '$0.18$', '$0.90$'],
    answer: 'Correct option: A) $0.54$. P(exactly one) $= P(A)P(B\') + P(A\')P(B) = 0.3(0.4) + 0.7(0.6) = 0.12 + 0.42 = 0.54$. Option B is $P(A \\cup B)$, which also counts both occurring, and option C is $P(A \\cap B)$.',
  },
  {
    id: 'c12-prob-r2-a11', chapter: C, topic: MULT, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'A fair die is rolled once. Let $E$ be the event "the number is even" and $F$ the event "the number is a multiple of $3$".\nAssertion (A): $E$ and $F$ are independent events.\nReason (R): $E$ and $F$ are mutually exclusive events.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) (A) is true, but (R) is false. $P(E) = \\frac{1}{2}$, $P(F) = \\frac{1}{3}$ and $E \\cap F = \\{6\\}$, so $P(E \\cap F) = \\frac{1}{6} = P(E)P(F)$ and the events are independent. They are not mutually exclusive, since both occur when $6$ shows.',
  },
  {
    id: 'c12-prob-r2-a12', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Two cards are drawn one after the other without replacement from a well-shuffled pack of $52$ cards. The probability that the first is a heart and the second is a spade is',
    options: ['$\\frac{13}{204}$', '$\\frac{1}{16}$', '$\\frac{1}{17}$', '$\\frac{13}{102}$'],
    answer: 'Correct option: A) $\\frac{13}{204}$. By the multiplication theorem, $\\frac{13}{52} \\times \\frac{13}{51} = \\frac{1}{4} \\times \\frac{13}{51} = \\frac{13}{204}$. Option B is the answer with replacement and option D counts both orders (one heart and one spade).',
  },
  {
    id: 'c12-prob-r2-a13', chapter: C, topic: BAYES, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Urn I contains $2$ white and $3$ black balls and Urn II contains $4$ white and $1$ black ball. One urn is chosen at random and a ball is drawn from it. The probability that the ball is white is',
    options: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{3}{10}$', '$\\frac{1}{2}$'],
    answer: 'Correct option: A) $\\frac{3}{5}$. By the theorem of total probability, P(white) $= \\frac{1}{2} \\cdot \\frac{2}{5} + \\frac{1}{2} \\cdot \\frac{4}{5} = \\frac{3}{5}$. Option B is P(black).',
  },
  {
    id: 'c12-prob-r2-a14', chapter: C, topic: BAYES, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'In a class, $40\\%$ of the students are girls. $20\\%$ of the girls and $10\\%$ of the boys wear spectacles. A student chosen at random wears spectacles. The probability that the student is a girl is',
    options: ['$\\frac{4}{7}$', '$\\frac{3}{7}$', '$\\frac{2}{5}$', '$0.14$'],
    answer: 'Correct option: A) $\\frac{4}{7}$. P(spectacles) $= 0.4(0.2) + 0.6(0.1) = 0.14$, so by Bayes\' theorem P(girl | spectacles) $= \\frac{0.08}{0.14} = \\frac{4}{7}$. Option C is the prior P(girl) and option D is P(spectacles).',
  },
  {
    id: 'c12-prob-r2-a15', chapter: C, topic: RV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A random variable $X$ takes the values $-1$, $0$ and $2$ with probabilities $0.3$, $0.2$ and $0.5$ respectively. The mean of $X$ is',
    options: ['$0.7$', '$1.3$', '$\\frac{1}{3}$', '$1$'],
    answer: 'Correct option: A) $0.7$. Mean $= (-1)(0.3) + 0(0.2) + 2(0.5) = -0.3 + 1 = 0.7$. Option B ignores the minus sign on $-1$, and option C is the plain average of the values.',
  },
  {
    id: 'c12-prob-r2-a16', chapter: C, topic: RV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A random variable $X$ has $P(X = x) = \\frac{c}{x}$ for $x = 1, 2, 3$, and $0$ otherwise. Then $P(X \\geq 2)$ is',
    options: ['$\\frac{5}{11}$', '$\\frac{6}{11}$', '$\\frac{3}{11}$', '$\\frac{2}{11}$'],
    answer: 'Correct option: A) $\\frac{5}{11}$. $c\\left(1 + \\frac{1}{2} + \\frac{1}{3}\\right) = \\frac{11c}{6} = 1$, so $c = \\frac{6}{11}$. Then $P(X \\geq 2) = \\frac{c}{2} + \\frac{c}{3} = \\frac{3}{11} + \\frac{2}{11} = \\frac{5}{11}$. Option B is $P(X = 1)$ and option C is only $P(X = 2)$.',
  },
  {
    id: 'c12-prob-r2-a17', chapter: C, topic: RV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two tickets are drawn together at random from four tickets numbered $1, 2, 3, 4$. If $X$ is the sum of the two numbers, then $P(X = 5)$ is',
    options: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$'],
    answer: 'Correct option: A) $\\frac{1}{3}$. There are $\\binom{4}{2} = 6$ equally likely pairs, and the sum is $5$ for $\\{1, 4\\}$ and $\\{2, 3\\}$, so $P(X = 5) = \\frac{2}{6} = \\frac{1}{3}$. Option C counts only one of the two pairs.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-prob-r2-b01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 2,
    text: 'Two fair dice, one red and one blue, are thrown. Given that the red die shows a number greater than $4$, find the probability that the sum of the two numbers is at least $10$.',
    answer: 'Let $F$: red die shows $5$ or $6$, which has $2 \\times 6 = 12$ outcomes. Let $E$: sum at least $10$. The outcomes in $E \\cap F$ (red, blue) are $(5, 5), (5, 6), (6, 4), (6, 5), (6, 6)$: five outcomes. So $P(E \\mid F) = \\frac{5/36}{12/36} = \\frac{5}{12}$.',
    steps: [
      { step: 'Identifies the $12$ outcomes of $F$ and the $5$ outcomes of $E \\cap F$', marks: 1 },
      { step: 'Gets $P(E \\mid F) = \\frac{5}{12}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-b02', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: '$A$ and $B$ are independent events with $P(A) = 0.4$ and $P(B) = p$. The probability that exactly one of them occurs is $0.5$. Find $p$ and $P(A \\cup B)$.',
    answer: 'P(exactly one) $= P(A)(1 - p) + (1 - P(A))p = 0.4(1 - p) + 0.6p = 0.4 + 0.2p$. Setting $0.4 + 0.2p = 0.5$ gives $p = 0.5$. Then $P(A \\cup B) = 0.4 + 0.5 - 0.4 \\times 0.5 = 0.7$.',
    steps: [
      { step: 'Writes $0.4(1 - p) + 0.6p = 0.5$ and gets $p = 0.5$', marks: 1 },
      { step: 'Uses $P(A \\cap B) = 0.2$ to get $P(A \\cup B) = 0.7$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-b03', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: 'A box has $10$ bulbs, of which $4$ are defective. Bulbs are tested one at a time, without replacement, until a defective bulb is found. Find the probability that the first defective bulb is found on the third test.',
    answer: 'The first two bulbs tested must be good and the third defective. By the multiplication theorem, the probability is $\\frac{6}{10} \\times \\frac{5}{9} \\times \\frac{4}{8} = \\frac{120}{720} = \\frac{1}{6}$.',
    steps: [
      { step: 'Writes good, good, defective with $\\frac{6}{10}, \\frac{5}{9}, \\frac{4}{8}$', marks: 1 },
      { step: 'Multiplies to get $\\frac{1}{6}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-b04', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 2,
    text: 'A pouch has three coins: two are fair and one has a head on both sides. A coin is taken out at random and tossed, and it shows a head. Find the probability that it is the two-headed coin.',
    answer: 'Let $E_1$: fair coin, $P(E_1) = \\frac{2}{3}$, $P(H \\mid E_1) = \\frac{1}{2}$; $E_2$: two-headed coin, $P(E_2) = \\frac{1}{3}$, $P(H \\mid E_2) = 1$. $P(H) = \\frac{2}{3} \\cdot \\frac{1}{2} + \\frac{1}{3} \\cdot 1 = \\frac{2}{3}$. By Bayes\' theorem, $P(E_2 \\mid H) = \\frac{1/3}{2/3} = \\frac{1}{2}$.',
    steps: [
      { step: 'Finds $P(H) = \\frac{2}{3}$ by total probability', marks: 1 },
      { step: 'Gets $P(\\text{two-headed} \\mid H) = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-b05', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 2,
    text: 'A random variable $X$ takes the values $0, 1, 2$ with $P(X = 0) = k$, $P(X = 1) = 4k$ and $P(X = 2) = 6k^{2}$, where $k$ is a constant. Find $k$ and the mean of $X$.',
    answer: 'The probabilities sum to $1$: $6k^{2} + 5k - 1 = 0$, i.e. $(6k - 1)(k + 1) = 0$. Since a probability cannot be negative, $k = \\frac{1}{6}$ (reject $k = -1$). Then $P(X = 0) = \\frac{1}{6}$, $P(X = 1) = \\frac{2}{3}$, $P(X = 2) = \\frac{1}{6}$, and mean $= 0 + \\frac{2}{3} + 2 \\cdot \\frac{1}{6} = 1$.',
    steps: [
      { step: 'Forms $6k^{2} + 5k - 1 = 0$ and takes $k = \\frac{1}{6}$, rejecting $k = -1$', marks: 1 },
      { step: 'Computes mean $= 1$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-prob-r2-c01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 3,
    text: 'Two fair dice are thrown. Let $E$ be the event "the sum of the numbers is a prime number" and $F$ the event "the first die shows an odd number". Find $P(E \\mid F)$ and $P(F \\mid E)$.',
    answer: 'Prime sums are $2, 3, 5, 7, 11$, occurring in $1 + 2 + 4 + 6 + 2 = 15$ outcomes, so $P(E) = \\frac{15}{36}$. $F$ has $18$ outcomes, so $P(F) = \\frac{1}{2}$. In $E \\cap F$, the first die is odd and the sum is prime: first die $1$: second $1, 2, 4, 6$; first die $3$: second $2, 4$; first die $5$: second $2, 6$; that is $8$ outcomes, so $P(E \\cap F) = \\frac{8}{36}$. Hence $P(E \\mid F) = \\frac{8}{18} = \\frac{4}{9}$ and $P(F \\mid E) = \\frac{8}{15}$.',
    steps: [
      { step: 'Finds $P(E) = \\frac{15}{36}$, $P(F) = \\frac{1}{2}$ and $P(E \\cap F) = \\frac{8}{36}$', marks: 1 },
      { step: 'Gets $P(E \\mid F) = \\frac{4}{9}$', marks: 1 },
      { step: 'Gets $P(F \\mid E) = \\frac{8}{15}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c02', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'For two events $A$ and $B$, $P(A \\mid B) = \\frac{1}{4}$, $P(B \\mid A) = \\frac{1}{3}$ and $P(A \\cup B) = 0.6$. Find $P(A)$, $P(B)$ and $P(A\' \\mid B\')$.',
    answer: 'Let $P(A \\cap B) = x$. Then $P(B) = \\frac{x}{1/4} = 4x$ and $P(A) = \\frac{x}{1/3} = 3x$. So $P(A \\cup B) = 3x + 4x - x = 6x = 0.6$, giving $x = 0.1$. Hence $P(A) = 0.3$ and $P(B) = 0.4$. Then $P(A\' \\cap B\') = 1 - 0.6 = 0.4$ and $P(B\') = 0.6$, so $P(A\' \\mid B\') = \\frac{0.4}{0.6} = \\frac{2}{3}$.',
    steps: [
      { step: 'Expresses $P(A) = 3x$ and $P(B) = 4x$ with $x = P(A \\cap B)$', marks: 1 },
      { step: 'Uses $6x = 0.6$ to get $P(A) = 0.3$, $P(B) = 0.4$', marks: 1 },
      { step: 'Gets $P(A\' \\mid B\') = \\frac{2}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c03', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'A bag contains $5$ white and $3$ red balls. Two balls are drawn one after the other without replacement. Find the probability that (i) both balls are red, given that at least one of them is red; (ii) the first ball is red, given that the second ball is red.',
    answer: '(i) P(both red) $= \\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{3}{28}$. P(no red) $= \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{10}{28}$, so P(at least one red) $= \\frac{18}{28}$. Required probability $= \\frac{3/28}{18/28} = \\frac{1}{6}$. (ii) P(second red) $= \\frac{3}{8} \\cdot \\frac{2}{7} + \\frac{5}{8} \\cdot \\frac{3}{7} = \\frac{21}{56} = \\frac{3}{8}$. P(first red and second red) $= \\frac{6}{56}$, so the required probability is $\\frac{6/56}{21/56} = \\frac{2}{7}$.',
    steps: [
      { step: 'Finds P(both red) $= \\frac{3}{28}$ and P(at least one red) $= \\frac{18}{28}$', marks: 1 },
      { step: '(i) Gets $\\frac{1}{6}$', marks: 1 },
      { step: '(ii) Finds P(second red) $= \\frac{3}{8}$ and gets $\\frac{2}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c04', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'An electrical system has three components $A$, $B$ and $C$ that fail independently. The system works if both $A$ and $B$ work, or if $C$ works (or both). The probabilities that $A$, $B$ and $C$ work are $0.9$, $0.8$ and $0.7$. Find (i) the probability that the system works; (ii) the probability that $C$ works, given that the system works.',
    answer: '(i) P($A$ and $B$ work) $= 0.9 \\times 0.8 = 0.72$. The system fails only if the pair $A, B$ fails and $C$ fails: $(1 - 0.72)(1 - 0.7) = 0.28 \\times 0.3 = 0.084$. So P(system works) $= 1 - 0.084 = 0.916$. (ii) If $C$ works, the system works, so P($C$ works and system works) $= 0.7$. Required probability $= \\frac{0.7}{0.916} = \\frac{175}{229} \\approx 0.764$.',
    steps: [
      { step: 'Finds P($A$ and $B$ work) $= 0.72$ and P(system fails) $= 0.084$ using independence', marks: 1 },
      { step: '(i) Gets $0.916$', marks: 1 },
      { step: '(ii) Gets $\\frac{0.7}{0.916} = \\frac{175}{229}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c05', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'An urn has $4$ red and $6$ black balls. A ball is drawn at random, its colour is noted, and it is returned to the urn together with $2$ more balls of the same colour. A second ball is then drawn. Find the probability that (i) the second ball is red; (ii) both balls are of the same colour.',
    answer: 'If the first is red (probability $\\frac{4}{10}$), the urn then has $6$ red and $6$ black. If the first is black (probability $\\frac{6}{10}$), the urn has $4$ red and $8$ black. (i) P(second red) $= \\frac{4}{10} \\cdot \\frac{6}{12} + \\frac{6}{10} \\cdot \\frac{4}{12} = \\frac{1}{5} + \\frac{1}{5} = \\frac{2}{5}$. (ii) P(same colour) $= \\frac{4}{10} \\cdot \\frac{6}{12} + \\frac{6}{10} \\cdot \\frac{8}{12} = \\frac{1}{5} + \\frac{2}{5} = \\frac{3}{5}$.',
    steps: [
      { step: 'Finds the urn contents after each first draw ($6R, 6B$ or $4R, 8B$)', marks: 1 },
      { step: '(i) Gets P(second red) $= \\frac{2}{5}$', marks: 1 },
      { step: '(ii) Gets P(same colour) $= \\frac{3}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c06', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Two badminton players P and Q play a match in which the first to win $2$ games wins the match. P wins any game with probability $0.6$, independently of other games. Find (i) the probability that P wins the match; (ii) the probability that the match goes to a third game.',
    answer: 'P wins the match by WW, WLW or LWW. (i) P(P wins) $= 0.6^{2} + 0.6(0.4)(0.6) + 0.4(0.6)(0.6) = 0.36 + 0.144 + 0.144 = 0.648 = \\frac{81}{125}$. (ii) A third game is needed exactly when the first two games are split: $0.6(0.4) + 0.4(0.6) = 0.48 = \\frac{12}{25}$.',
    steps: [
      { step: 'Lists the winning sequences WW, WLW, LWW', marks: 1 },
      { step: '(i) Gets $0.648$', marks: 1 },
      { step: '(ii) Gets $0.48$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c07', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'In a bird sanctuary, $25\\%$ of the birds of a certain kind belong to a rare species R. A guide identifies a bird of species R correctly as R $90\\%$ of the time, but also wrongly calls $10\\%$ of the other birds R. The guide says that a bird is R. Find the probability that it really is R.',
    answer: 'Let $E_1$: bird is R, $P(E_1) = 0.25$; $E_2$: bird is not R, $P(E_2) = 0.75$; $S$: guide says R. $P(S \\mid E_1) = 0.9$, $P(S \\mid E_2) = 0.1$. $P(S) = 0.25(0.9) + 0.75(0.1) = 0.225 + 0.075 = 0.3$. By Bayes\' theorem, $P(E_1 \\mid S) = \\frac{0.225}{0.3} = \\frac{3}{4}$.',
    steps: [
      { step: 'Defines events and writes $0.25, 0.75, 0.9, 0.1$', marks: 1 },
      { step: 'Finds $P(S) = 0.3$', marks: 1 },
      { step: 'Gets $P(E_1 \\mid S) = \\frac{3}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c08', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'A box has three coins: a fair coin, a biased coin that shows heads with probability $\\frac{3}{4}$, and a coin with tails on both sides. A coin is chosen at random and tossed twice, and both tosses show heads. Find the probability that the biased coin was chosen.',
    answer: 'Let $E_1, E_2, E_3$ be fair, biased and two-tailed, each with probability $\\frac{1}{3}$. P(two heads | $E_1$) $= \\frac{1}{4}$, P(two heads | $E_2$) $= \\frac{9}{16}$, P(two heads | $E_3$) $= 0$. P(two heads) $= \\frac{1}{3}\\left(\\frac{4}{16} + \\frac{9}{16} + 0\\right) = \\frac{13}{48}$. By Bayes\' theorem, P($E_2$ | two heads) $= \\frac{9/48}{13/48} = \\frac{9}{13}$.',
    steps: [
      { step: 'Writes P(two heads | each coin) $= \\frac{1}{4}, \\frac{9}{16}, 0$', marks: 1 },
      { step: 'Finds P(two heads) $= \\frac{13}{48}$', marks: 1 },
      { step: 'Gets $\\frac{9}{13}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c09', chapter: C, topic: BAYES, type: 'short', complexity: 'hard', marks: 3,
    text: 'Bag A has $3$ red and $2$ blue balls; bag B has $2$ red and $4$ blue balls. A ball is drawn at random from A and put into B without looking. Then a ball is drawn at random from B and put into A. Finally a ball is drawn at random from A. Find the probability that this last ball is red.',
    answer: 'Case 1: red moved to B (probability $\\frac{3}{5}$). A has $2R, 2B$ and B has $3R, 4B$. If red comes back ($\\frac{3}{7}$), A has $3R, 2B$, so P(red) $= \\frac{3}{5}$; if blue comes back ($\\frac{4}{7}$), A has $2R, 3B$, so P(red) $= \\frac{2}{5}$. This case gives $\\frac{3}{5}\\left(\\frac{3}{7} \\cdot \\frac{3}{5} + \\frac{4}{7} \\cdot \\frac{2}{5}\\right) = \\frac{3}{5} \\cdot \\frac{17}{35} = \\frac{51}{175}$. Case 2: blue moved (probability $\\frac{2}{5}$). A has $3R, 1B$ and B has $2R, 5B$. If red comes back ($\\frac{2}{7}$), A has $4R, 1B$, so P(red) $= \\frac{4}{5}$; if blue ($\\frac{5}{7}$), A has $3R, 2B$, so P(red) $= \\frac{3}{5}$. This case gives $\\frac{2}{5}\\left(\\frac{8}{35} + \\frac{15}{35}\\right) = \\frac{46}{175}$. Total P(red) $= \\frac{51 + 46}{175} = \\frac{97}{175}$.',
    steps: [
      { step: 'Sets up both cases for the first transfer and the bag contents after each step', marks: 1 },
      { step: 'Gets $\\frac{51}{175}$ and $\\frac{46}{175}$ for the two cases', marks: 1 },
      { step: 'Adds to get $\\frac{97}{175}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c10', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A spinner has four equal sectors labelled $1$, $2$, $2$ and $3$. It is spun twice. Let $X$ be the sum of the two numbers obtained. Find the probability distribution of $X$ and its mean.',
    answer: 'On one spin, $P(1) = \\frac{1}{4}$, $P(2) = \\frac{1}{2}$, $P(3) = \\frac{1}{4}$, and the spins are independent. $P(X = 2) = \\frac{1}{16}$; $P(X = 3) = 2 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{1}{4}$; $P(X = 4) = 2 \\cdot \\frac{1}{4} \\cdot \\frac{1}{4} + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{3}{8}$; $P(X = 5) = \\frac{1}{4}$; $P(X = 6) = \\frac{1}{16}$. Mean $= \\frac{2 \\cdot 1 + 3 \\cdot 4 + 4 \\cdot 6 + 5 \\cdot 4 + 6 \\cdot 1}{16} = \\frac{64}{16} = 4$.',
    steps: [
      { step: 'Writes single-spin probabilities $\\frac{1}{4}, \\frac{1}{2}, \\frac{1}{4}$ and values $2$ to $6$', marks: 1 },
      { step: 'Writes the distribution $\\frac{1}{16}, \\frac{1}{4}, \\frac{3}{8}, \\frac{1}{4}, \\frac{1}{16}$', marks: 1 },
      { step: 'Computes mean $= 4$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c11', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A random variable $X$ has $P(X = x) = kx^{2}$ for $x = 1, 2, 3$, and $0$ otherwise. Find $k$, $P(X \\leq 2)$ and the mean of $X$.',
    answer: '$k(1 + 4 + 9) = 14k = 1$, so $k = \\frac{1}{14}$. $P(X \\leq 2) = \\frac{1 + 4}{14} = \\frac{5}{14}$. Mean $= \\sum x \\cdot kx^{2} = \\frac{1 + 8 + 27}{14} = \\frac{36}{14} = \\frac{18}{7}$.',
    steps: [
      { step: 'Gets $k = \\frac{1}{14}$', marks: 1 },
      { step: 'Gets $P(X \\leq 2) = \\frac{5}{14}$', marks: 1 },
      { step: 'Gets mean $= \\frac{18}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c12', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'An insurance company sells a one-year phone-protection plan for ₹2000. In a year, the company pays a claim of ₹50000 with probability $0.02$, a claim of ₹20000 with probability $0.03$, and nothing otherwise (at most one claim per plan). Let $X$ be the company\'s gain from one plan. Find the probability distribution of $X$ and its mean.',
    answer: '$X = 2000 - 50000 = -48000$ with probability $0.02$; $X = 2000 - 20000 = -18000$ with probability $0.03$; $X = 2000$ with probability $0.95$. Mean $= -48000(0.02) - 18000(0.03) + 2000(0.95) = -960 - 540 + 1900 = 400$. The company expects to gain ₹400 per plan.',
    steps: [
      { step: 'Writes the values $-48000, -18000, 2000$', marks: 1 },
      { step: 'Assigns probabilities $0.02, 0.03, 0.95$', marks: 1 },
      { step: 'Computes mean gain ₹400', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c13', chapter: C, topic: RV, type: 'short', complexity: 'hard', marks: 3,
    text: 'A box has $6$ fuses, of which $3$ are faulty. Fuses are tested one at a time, without replacement, until the first faulty fuse is found. Let $X$ be the number of fuses tested. Find the probability distribution of $X$ and its mean.',
    answer: '$X$ can be $1, 2, 3, 4$ (at most $3$ good fuses can come first). $P(X = 1) = \\frac{3}{6} = \\frac{1}{2}$; $P(X = 2) = \\frac{3}{6} \\cdot \\frac{3}{5} = \\frac{3}{10}$; $P(X = 3) = \\frac{3}{6} \\cdot \\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{3}{20}$; $P(X = 4) = \\frac{3}{6} \\cdot \\frac{2}{5} \\cdot \\frac{1}{4} \\cdot 1 = \\frac{1}{20}$. These add to $1$. Mean $= \\frac{10 + 12 + 9 + 4}{20} = \\frac{35}{20} = \\frac{7}{4}$.',
    steps: [
      { step: 'Identifies values $1, 2, 3, 4$ and finds $P(X = 1) = \\frac{1}{2}$, $P(X = 2) = \\frac{3}{10}$', marks: 1 },
      { step: 'Finds $P(X = 3) = \\frac{3}{20}$ and $P(X = 4) = \\frac{1}{20}$', marks: 1 },
      { step: 'Computes mean $= \\frac{7}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-c14', chapter: C, topic: RV, type: 'short', complexity: 'hard', marks: 3,
    text: 'Three letters are written to three different people, and the three addressed envelopes are ready. The letters are put into the envelopes at random, one letter in each. Let $X$ be the number of letters that go into the correct envelope. Find the probability distribution of $X$ and its mean.',
    answer: 'There are $3! = 6$ equally likely arrangements. All three correct: $1$ arrangement. Exactly one correct: fix one letter correctly and swap the other two, giving $3$ arrangements. Exactly two correct is impossible, since the third would then also be correct. No letter correct: $6 - 1 - 3 = 2$ arrangements. So $P(X = 0) = \\frac{1}{3}$, $P(X = 1) = \\frac{1}{2}$, $P(X = 3) = \\frac{1}{6}$ (and $P(X = 2) = 0$). Mean $= 0 + \\frac{1}{2} + \\frac{3}{6} = 1$.',
    steps: [
      { step: 'Counts $6$ arrangements and notes exactly two correct is impossible', marks: 1 },
      { step: 'Writes $P(X = 0) = \\frac{1}{3}$, $P(X = 1) = \\frac{1}{2}$, $P(X = 3) = \\frac{1}{6}$', marks: 1 },
      { step: 'Computes mean $= 1$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-prob-r2-d01', chapter: C, topic: BAYES, type: 'long', complexity: 'medium', marks: 5,
    text: 'A pharmacy buys a medicine from three suppliers P, Q and R in the ratio $2 : 3 : 5$. The fractions of strips from P, Q and R that turn out to be past their expiry date when sold are $1\\%$, $2\\%$ and $3\\%$. A strip sold is chosen at random. (a) Find the probability that it is past its expiry date. (b) Given that it is past its expiry date, find the probability that it came from R. (c) Given that it is not past its expiry date, find the probability that it came from P.',
    answer: 'Priors: $P(P) = 0.2$, $P(Q) = 0.3$, $P(R) = 0.5$. Let $X$: past expiry. (a) $P(X) = 0.2(0.01) + 0.3(0.02) + 0.5(0.03) = 0.002 + 0.006 + 0.015 = 0.023$. (b) $P(R \\mid X) = \\frac{0.015}{0.023} = \\frac{15}{23}$. (c) $P(X\') = 0.977$ and $P(P \\cap X\') = 0.2 \\times 0.99 = 0.198$, so $P(P \\mid X\') = \\frac{0.198}{0.977} = \\frac{198}{977} \\approx 0.203$.',
    steps: [
      { step: 'Converts the ratio to priors $0.2, 0.3, 0.5$', marks: 1 },
      { step: '(a) Gets $P(X) = 0.023$', marks: 1 },
      { step: '(b) Gets $P(R \\mid X) = \\frac{15}{23}$', marks: 1 },
      { step: '(c) Uses $P(X\') = 0.977$ and $P(X\' \\mid P) = 0.99$', marks: 1 },
      { step: '(c) Gets $\\frac{198}{977}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d02', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: 'Box I contains $3$ red and $2$ white balls; Box II contains $2$ red and $3$ white balls. One ball is moved at random from Box I to Box II without looking. Then two balls are drawn together at random from Box II. (a) If both balls drawn are red, find the probability that the ball moved was red. (b) Find the probability that the two balls drawn are of different colours.',
    answer: 'Let $E_1$: red moved, $P(E_1) = \\frac{3}{5}$; Box II then has $3R, 3W$. $E_2$: white moved, $P(E_2) = \\frac{2}{5}$; Box II then has $2R, 4W$. There are $\\binom{6}{2} = 15$ pairs. (a) $P(RR \\mid E_1) = \\frac{3}{15}$, $P(RR \\mid E_2) = \\frac{1}{15}$. $P(RR) = \\frac{3}{5} \\cdot \\frac{3}{15} + \\frac{2}{5} \\cdot \\frac{1}{15} = \\frac{9 + 2}{75} = \\frac{11}{75}$. So $P(E_1 \\mid RR) = \\frac{9/75}{11/75} = \\frac{9}{11}$. (b) P(one of each | $E_1$) $= \\frac{3 \\times 3}{15} = \\frac{9}{15}$ and P(one of each | $E_2$) $= \\frac{2 \\times 4}{15} = \\frac{8}{15}$. P(different colours) $= \\frac{3}{5} \\cdot \\frac{9}{15} + \\frac{2}{5} \\cdot \\frac{8}{15} = \\frac{27 + 16}{75} = \\frac{43}{75}$.',
    steps: [
      { step: 'Sets up $E_1$, $E_2$ with Box II contents $3R, 3W$ and $2R, 4W$', marks: 1 },
      { step: '(a) Finds $P(RR \\mid E_1) = \\frac{3}{15}$, $P(RR \\mid E_2) = \\frac{1}{15}$ and $P(RR) = \\frac{11}{75}$', marks: 1 },
      { step: '(a) Gets $\\frac{9}{11}$', marks: 1 },
      { step: '(b) Finds P(different | $E_1$) $= \\frac{9}{15}$ and P(different | $E_2$) $= \\frac{8}{15}$', marks: 1 },
      { step: '(b) Gets $\\frac{43}{75}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d03', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: 'On a school day it rains with probability $0.3$. Independently of the weather, Meera goes to school by bus or by auto-rickshaw, each with probability $\\frac{1}{2}$. The probability that she is late is $0.4$ on a rainy day by bus, $0.25$ on a rainy day by auto, $0.1$ on a dry day by bus and $0.05$ on a dry day by auto. (a) Find the probability that Meera is late on a given day. (b) Given that she was late, find the probability that it was raining. (c) Given that she was late, find the probability that she went by bus.',
    answer: 'The four cases are mutually exclusive and exhaustive, with probabilities: rainy-bus $0.3 \\times 0.5 = 0.15$, rainy-auto $0.15$, dry-bus $0.35$, dry-auto $0.35$. (a) $P(L) = 0.15(0.4) + 0.15(0.25) + 0.35(0.1) + 0.35(0.05) = 0.06 + 0.0375 + 0.035 + 0.0175 = 0.15$. (b) P(rain | L) $= \\frac{0.06 + 0.0375}{0.15} = \\frac{0.0975}{0.15} = \\frac{13}{20}$. (c) P(bus | L) $= \\frac{0.06 + 0.035}{0.15} = \\frac{0.095}{0.15} = \\frac{19}{30}$.',
    steps: [
      { step: 'Uses independence to get the four case probabilities $0.15, 0.15, 0.35, 0.35$', marks: 1 },
      { step: '(a) Applies total probability', marks: 1 },
      { step: '(a) Gets $P(L) = 0.15$', marks: 1 },
      { step: '(b) Gets P(rain | L) $= \\frac{13}{20}$', marks: 1 },
      { step: '(c) Gets P(bus | L) $= \\frac{19}{30}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d04', chapter: C, topic: RV, type: 'long', complexity: 'medium', marks: 5,
    text: 'A home baker makes $3$ special cakes each morning. The number of customers who want this cake on a day is $0$, $1$, $2$, or $3$ or more, with probabilities $0.1$, $0.2$, $0.3$ and $0.4$. Each cake costs ₹100 to make and sells for ₹300; unsold cakes are thrown away. (a) Let $Y$ be the number of cakes sold in a day. Write the probability distribution of $Y$ and find its mean. (b) Find the expected daily profit. (c) Would the baker expect more profit by making only $2$ cakes each day? Justify.',
    answer: '(a) With $3$ cakes, $Y = 0, 1, 2, 3$ with probabilities $0.1, 0.2, 0.3, 0.4$. Mean $= 0 + 0.2 + 0.6 + 1.2 = 2$ cakes. (b) Profit $= 300Y - 300$, so expected profit $= 300 \\times 2 - 300 =$ ₹300. (c) With $2$ cakes, $Y = 0, 1, 2$ with probabilities $0.1, 0.2, 0.7$, so the mean sold is $0.2 + 1.4 = 1.6$ and expected profit $= 300 \\times 1.6 - 200 =$ ₹280. Since ₹280 < ₹300, making $3$ cakes gives the higher expected profit.',
    steps: [
      { step: '(a) Writes the distribution of $Y$ for $3$ cakes', marks: 1 },
      { step: '(a) Gets mean $= 2$', marks: 1 },
      { step: '(b) Gets expected profit ₹300', marks: 1 },
      { step: '(c) Writes the distribution $0.1, 0.2, 0.7$ for $2$ cakes and mean $1.6$', marks: 1 },
      { step: '(c) Gets ₹280 and concludes $3$ cakes is better', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d05', chapter: C, topic: RV, type: 'long', complexity: 'hard', marks: 5,
    text: 'At a school fete, a player pays ₹12 and rolls a fair die. If it shows $6$, the player receives ₹50 and the game ends. Otherwise the player rolls once more, and receives ₹20 if this second roll shows $6$, and nothing otherwise. Let $X$ be the player\'s net gain. (a) Find the probability distribution of $X$. (b) Find the mean of $X$ and say whether the game favours the player. (c) Given that the player received some money, find the probability that it was on the first roll.',
    answer: '(a) $X = 50 - 12 = 38$ with probability $\\frac{1}{6}$; $X = 20 - 12 = 8$ with probability $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$; $X = -12$ with probability $\\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{25}{36}$. These add to $1$. (b) Mean $= \\frac{38 \\cdot 6 + 8 \\cdot 5 - 12 \\cdot 25}{36} = \\frac{228 + 40 - 300}{36} = -\\frac{32}{36} = -\\frac{8}{9}$. The mean is negative, so on average the player loses about ₹0.89 per game; the game does not favour the player. (c) P(receives money) $= \\frac{1}{6} + \\frac{5}{36} = \\frac{11}{36}$, so P(first roll | receives money) $= \\frac{6/36}{11/36} = \\frac{6}{11}$.',
    steps: [
      { step: '(a) Writes the values $38, 8, -12$', marks: 1 },
      { step: '(a) Gets probabilities $\\frac{1}{6}, \\frac{5}{36}, \\frac{25}{36}$', marks: 1 },
      { step: '(b) Computes mean $= -\\frac{8}{9}$', marks: 1 },
      { step: '(b) Concludes the game does not favour the player', marks: 1 },
      { step: '(c) Gets $\\frac{6}{11}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d06', chapter: C, topic: MULT, type: 'long', complexity: 'medium', marks: 5,
    text: 'Asha and Bilal try to solve a puzzle independently. Asha solves it with probability $\\frac{1}{2}$ and Bilal with probability $p$. The probability that the puzzle is solved by at least one of them is $\\frac{5}{6}$. (a) Find $p$. (b) Find the probability that exactly one of Asha and Bilal solves it. (c) Chitra joins and, independently of the others, solves it with probability $\\frac{1}{3}$. Find the probability that the puzzle is solved by at least one of the three. (d) Given that exactly one of the three solves it, find the probability that it was Chitra.',
    answer: '(a) P(neither solves) $= \\frac{1}{2}(1 - p) = 1 - \\frac{5}{6} = \\frac{1}{6}$, so $1 - p = \\frac{1}{3}$ and $p = \\frac{2}{3}$. (b) P(exactly one) $= \\frac{1}{2} \\cdot \\frac{1}{3} + \\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{2}$. (c) P(none of three) $= \\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{1}{9}$, so P(solved) $= \\frac{8}{9}$. (d) Only Asha: $\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{1}{9}$; only Bilal: $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{2}{9}$; only Chitra: $\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{18}$. P(exactly one) $= \\frac{2 + 4 + 1}{18} = \\frac{7}{18}$, so the required probability is $\\frac{1/18}{7/18} = \\frac{1}{7}$.',
    steps: [
      { step: '(a) Gets $p = \\frac{2}{3}$ from P(neither) $= \\frac{1}{6}$', marks: 1 },
      { step: '(b) Gets $\\frac{1}{2}$', marks: 1 },
      { step: '(c) Gets $\\frac{8}{9}$', marks: 1 },
      { step: '(d) Finds the three "only one" cases and P(exactly one) $= \\frac{7}{18}$', marks: 1 },
      { step: '(d) Gets $\\frac{1}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d07', chapter: C, topic: MULT, type: 'long', complexity: 'hard', marks: 5,
    text: 'A football team plays $3$ matches in a row (no draws). It wins the first match with probability $0.6$. After a win, it wins the next match with probability $0.7$; after a loss, it wins the next match with probability $0.4$. Find the probability that the team (a) wins all three matches; (b) wins exactly two matches; (c) wins the third match. (d) Given that it won the third match, find the probability that it won the first match.',
    answer: 'Using the multiplication theorem along each sequence: (a) P(WWW) $= 0.6 \\times 0.7 \\times 0.7 = 0.294$. (b) P(WWL) $= 0.6(0.7)(0.3) = 0.126$, P(WLW) $= 0.6(0.3)(0.4) = 0.072$, P(LWW) $= 0.4(0.4)(0.7) = 0.112$; total $0.31$. (c) Sequences ending in W: WWW $0.294$, WLW $0.072$, LWW $0.112$, LLW $= 0.4(0.6)(0.4) = 0.096$; total $0.574$. (d) Those that also start with W: $0.294 + 0.072 = 0.366$. Required probability $= \\frac{0.366}{0.574} = \\frac{183}{287} \\approx 0.638$.',
    steps: [
      { step: '(a) Gets $0.294$', marks: 1 },
      { step: '(b) Lists WWL, WLW, LWW with their probabilities', marks: 1 },
      { step: '(b) Gets $0.31$', marks: 1 },
      { step: '(c) Gets $0.574$ from the four sequences ending in W', marks: 1 },
      { step: '(d) Gets $\\frac{183}{287}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r2-d08', chapter: C, topic: COND, type: 'long', complexity: 'medium', marks: 5,
    text: 'In a residential society of $300$ people, $180$ took a flu vaccine and $120$ did not. During the season, $18$ of the vaccinated people and $36$ of the unvaccinated people caught flu. A person is chosen at random. Find (a) the probability that the person caught flu; (b) the probability that the person caught flu, given that the person was vaccinated; (c) the probability that the person was not vaccinated, given that the person caught flu; (d) whether the events "caught flu" and "vaccinated" are independent; (e) the probability that the person was vaccinated, given that the person did not catch flu.',
    answer: '(a) P(flu) $= \\frac{18 + 36}{300} = \\frac{54}{300} = \\frac{9}{50}$. (b) P(flu | vaccinated) $= \\frac{18}{180} = \\frac{1}{10}$. (c) P(not vaccinated | flu) $= \\frac{36}{54} = \\frac{2}{3}$. (d) P(flu) $= 0.18$ but P(flu | vaccinated) $= 0.1$; since these differ (equivalently $P(\\text{flu} \\cap V) = 0.06 \\neq 0.18 \\times 0.6 = 0.108$), the events are not independent. (e) $300 - 54 = 246$ people did not catch flu, of whom $180 - 18 = 162$ were vaccinated, so the probability is $\\frac{162}{246} = \\frac{27}{41}$.',
    steps: [
      { step: '(a) Gets $\\frac{9}{50}$', marks: 1 },
      { step: '(b) Gets $\\frac{1}{10}$', marks: 1 },
      { step: '(c) Gets $\\frac{2}{3}$', marks: 1 },
      { step: '(d) Shows the events are not independent with a correct comparison', marks: 1 },
      { step: '(e) Gets $\\frac{27}{41}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-prob-r2-e01', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A ride-hailing app offers bike, auto and cab rides. Of all rides booked, $50\\%$ are bikes, $30\\%$ are autos and $20\\%$ are cabs. After a ride, customers give a $5$-star rating with probability $0.6$ for a bike, $0.5$ for an auto and $0.8$ for a cab. A completed ride is chosen at random.',
    answer: '(i) $0.61$; (ii) $0.15$; (iii) $\\frac{16}{61}$, OR $\\frac{20}{39}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the ride got a $5$-star rating.', answer: 'P(5-star) $= 0.5(0.6) + 0.3(0.5) + 0.2(0.8) = 0.30 + 0.15 + 0.16 = 0.61$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the ride was an auto and did not get a $5$-star rating.', answer: '$0.3 \\times 0.5 = 0.15$.' },
      { label: '(iii)', marks: 2, text: 'Given that the ride got a $5$-star rating, find the probability that it was a cab. OR Given that the ride did not get a $5$-star rating, find the probability that it was a bike.', answer: 'P(cab | 5-star) $= \\frac{0.16}{0.61} = \\frac{16}{61}$. OR P(not 5-star) $= 0.39$ and P(bike and not 5-star) $= 0.5 \\times 0.4 = 0.2$, so the probability is $\\frac{0.2}{0.39} = \\frac{20}{39}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e02', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A farmer sows a mixture of seeds of two varieties, A and B, mixed in the ratio $3 : 2$. From experience, $80\\%$ of variety A seeds and $60\\%$ of variety B seeds germinate. A seed from the mixture is chosen at random and sown.',
    answer: '(i) $0.72$; (ii) $0.16$; (iii) $\\frac{3}{7}$, OR $\\frac{1}{3}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the seed germinates.', answer: 'P(A) $= 0.6$, P(B) $= 0.4$. P(germinates) $= 0.6(0.8) + 0.4(0.6) = 0.48 + 0.24 = 0.72$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the seed is of variety B and does not germinate.', answer: '$0.4 \\times 0.4 = 0.16$.' },
      { label: '(iii)', marks: 2, text: 'Given that the seed did not germinate, find the probability that it was of variety A. OR Given that the seed germinated, find the probability that it was of variety B.', answer: 'P(not germinate) $= 0.28$ and P(A and not germinate) $= 0.6 \\times 0.2 = 0.12$, so P(A | not germinate) $= \\frac{0.12}{0.28} = \\frac{3}{7}$. OR P(B | germinates) $= \\frac{0.24}{0.72} = \\frac{1}{3}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e03', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery driver chooses one of three routes X, Y and Z to reach a market, with probabilities $\\frac{1}{2}$, $\\frac{1}{3}$ and $\\frac{1}{6}$. The probabilities of reaching on time are $0.9$ by route X, $0.8$ by route Y and $0.6$ by route Z. Consider one trip.',
    answer: '(i) $\\frac{49}{60}$; (ii) $\\frac{1}{15}$; (iii) $\\frac{3}{11}$, OR $\\frac{16}{49}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the driver reaches on time.', answer: 'P(on time) $= \\frac{1}{2}(0.9) + \\frac{1}{3}(0.8) + \\frac{1}{6}(0.6) = \\frac{27}{60} + \\frac{16}{60} + \\frac{6}{60} = \\frac{49}{60}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the driver takes route Z and is late.', answer: '$\\frac{1}{6} \\times 0.4 = \\frac{1}{15}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the driver was late, find the probability that route X was taken. OR Given that the driver was on time, find the probability that route Y was taken.', answer: 'P(late) $= \\frac{11}{60}$ and P(X and late) $= \\frac{1}{2} \\times 0.1 = \\frac{3}{60}$, so P(X | late) $= \\frac{3}{11}$. OR P(Y | on time) $= \\frac{16/60}{49/60} = \\frac{16}{49}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e04', chapter: C, topic: BAYES, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A magician has three cards in a hat. One card is red on both sides, one is blue on both sides, and one is red on one side and blue on the other. She draws one of the three cards at random (each card equally likely) and places it flat on the table, so that either of its two sides is equally likely to face up. Only the face showing can be seen.',
    answer: '(i) $\\frac{1}{2}$; (ii) $\\frac{1}{6}$; (iii) $\\frac{2}{3}$, OR $\\frac{1}{3}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the face showing is red.', answer: 'P(red up) $= \\frac{1}{3}(1) + \\frac{1}{3}(0) + \\frac{1}{3}\\left(\\frac{1}{2}\\right) = \\frac{1}{2}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the card is the red-blue card and its red face is showing.', answer: '$\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the face showing is red, find the probability that the other side is also red. OR Given that the face showing is blue, find the probability that the card is the red-blue card.', answer: 'The other side is red only for the red-red card: P(red-red | red up) $= \\frac{1/3}{1/2} = \\frac{2}{3}$ (not $\\frac{1}{2}$, since the red-red card has two red faces that could be up). OR P(blue up) $= \\frac{1}{2}$ and P(red-blue and blue up) $= \\frac{1}{6}$, so the probability is $\\frac{1/6}{1/2} = \\frac{1}{3}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e05', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'Students of a school prepare for an entrance test either by self-study or by joining a coaching class. $60\\%$ of the students choose self-study and the rest join a coaching class. A self-study student scores above $80$ marks with probability $0.5$, and a coaching-class student with probability $0.75$. A student is chosen at random.',
    answer: '(i) $0.6$; (ii) $0.1$; (iii) $\\frac{1}{2}$, OR $\\frac{3}{4}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the student scores above $80$.', answer: '$0.6(0.5) + 0.4(0.75) = 0.3 + 0.3 = 0.6$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the student joined a coaching class and did not score above $80$.', answer: '$0.4 \\times 0.25 = 0.1$.' },
      { label: '(iii)', marks: 2, text: 'Given that the student scored above $80$, find the probability that the student joined a coaching class. OR Given that the student did not score above $80$, find the probability that the student did self-study.', answer: 'P(coaching | above 80) $= \\frac{0.3}{0.6} = \\frac{1}{2}$. OR P(not above 80) $= 0.4$ and P(self-study and not above 80) $= 0.6 \\times 0.5 = 0.3$, so the probability is $\\frac{0.3}{0.4} = \\frac{3}{4}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e06', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A fruit seller has two baskets of mangoes. Basket I has $10$ mangoes, of which $2$ are spoilt; Basket II has $8$ mangoes, of which $3$ are spoilt. A customer tosses a fair coin to pick a basket and then picks one mango at random from it.',
    answer: '(i) $\\frac{23}{80}$; (ii) $\\frac{5}{16}$; (iii) $\\frac{8}{23}$, OR $\\frac{25}{57}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the mango is spoilt.', answer: 'P(spoilt) $= \\frac{1}{2} \\cdot \\frac{2}{10} + \\frac{1}{2} \\cdot \\frac{3}{8} = \\frac{8}{80} + \\frac{15}{80} = \\frac{23}{80}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the mango is from Basket II and is good.', answer: '$\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the mango is spoilt, find the probability that it came from Basket I. OR Given that the mango is good, find the probability that it came from Basket II.', answer: 'P(I | spoilt) $= \\frac{8/80}{23/80} = \\frac{8}{23}$. OR P(good) $= \\frac{57}{80}$ and P(II and good) $= \\frac{25}{80}$, so the probability is $\\frac{25}{57}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e07', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At a toll booth, the number of cars $X$ arriving in a 5-minute interval has $P(X = 0) = 0.2$, $P(X = 1) = a$, $P(X = 2) = b$, $P(X = 3) = 0.1$, and more than $3$ cars never arrive. The mean of $X$ is $1.4$.',
    answer: '(i) $a + b = 0.7$; (ii) $a = 0.3$, $b = 0.4$; (iii) $\\frac{3}{8}$, OR $16.8$ cars.',
    parts: [
      { label: '(i)', marks: 1, text: 'Show that $a + b = 0.7$.', answer: 'The probabilities sum to $1$: $0.2 + a + b + 0.1 = 1$, so $a + b = 0.7$.' },
      { label: '(ii)', marks: 1, text: 'Find $a$ and $b$.', answer: 'Mean: $0 + a + 2b + 0.3 = 1.4$, so $a + 2b = 1.1$. Subtracting $a + b = 0.7$ gives $b = 0.4$ and $a = 0.3$.' },
      { label: '(iii)', marks: 2, text: 'Given that at least one car arrives in an interval, find the probability that exactly one car arrives. OR Find the expected number of cars arriving in one hour (twelve 5-minute intervals), assuming each interval follows this distribution.', answer: '$P(X \\geq 1) = 0.8$, so $P(X = 1 \\mid X \\geq 1) = \\frac{0.3}{0.8} = \\frac{3}{8}$. OR Expected cars per interval $= 1.4$, so in one hour $12 \\times 1.4 = 16.8$ cars.' },
    ],
  },
  {
    id: 'c12-prob-r2-e08', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A charity lucky draw has $20$ tickets: $1$ ticket wins ₹500, $3$ tickets win ₹100 each, $6$ tickets win ₹20 each, and the rest win nothing. Each ticket costs ₹50. A person buys one ticket. Let $X$ be the net gain (prize minus ₹50).',
    answer: '(i) $\\frac{1}{2}$; (ii) $\\frac{1}{5}$; (iii) mean $-$₹4, OR ₹46.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the person wins some prize.', answer: '$1 + 3 + 6 = 10$ tickets win a prize, so the probability is $\\frac{10}{20} = \\frac{1}{2}$.' },
      { label: '(ii)', marks: 1, text: 'Find $P(X > 0)$.', answer: 'Net gain is positive only for the ₹500 or ₹100 prizes: $\\frac{4}{20} = \\frac{1}{5}$.' },
      { label: '(iii)', marks: 2, text: 'Write the probability distribution of $X$ and find its mean. OR Find the ticket price at which the draw would be fair, that is, the mean net gain is zero.', answer: '$X = 450, 50, -30, -50$ with probabilities $\\frac{1}{20}, \\frac{3}{20}, \\frac{6}{20}, \\frac{10}{20}$. Mean $= \\frac{450 + 150 - 180 - 500}{20} = -\\frac{80}{20} = -4$, so a buyer loses ₹4 on average. OR Expected prize $= \\frac{500 + 300 + 120}{20} =$ ₹46, so a fair price is ₹46.' },
    ],
  },
  {
    id: 'c12-prob-r2-e09', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a board game, a player rolls two fair four-faced dice, each with faces numbered $1$ to $4$, and moves forward by the sum $X$ of the two numbers.',
    answer: '(i) $\\frac{1}{4}$; (ii) $\\frac{3}{16}$; (iii) mean $5$, OR $\\frac{2}{5}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $P(X = 5)$.', answer: 'Of the $16$ outcomes, sum $5$ occurs for $(1, 4), (2, 3), (3, 2), (4, 1)$, so $P(X = 5) = \\frac{4}{16} = \\frac{1}{4}$.' },
      { label: '(ii)', marks: 1, text: 'Find $P(X \\geq 7)$.', answer: 'Sum $7$: $(3, 4), (4, 3)$; sum $8$: $(4, 4)$. So $P(X \\geq 7) = \\frac{3}{16}$.' },
      { label: '(iii)', marks: 2, text: 'Write the probability distribution of $X$ and find its mean. OR Given that $X > 4$, find the probability that $X$ is even.', answer: '$X = 2, 3, 4, 5, 6, 7, 8$ with probabilities $\\frac{1}{16}, \\frac{2}{16}, \\frac{3}{16}, \\frac{4}{16}, \\frac{3}{16}, \\frac{2}{16}, \\frac{1}{16}$. Mean $= \\frac{2 + 6 + 12 + 20 + 18 + 14 + 8}{16} = \\frac{80}{16} = 5$. OR $P(X > 4) = \\frac{4 + 3 + 2 + 1}{16} = \\frac{10}{16}$ and $P(X = 6 \\text{ or } 8) = \\frac{4}{16}$, so the probability is $\\frac{4}{10} = \\frac{2}{5}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e10', chapter: C, topic: RV, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'In a mobile game, a player gets at most $3$ attempts to clear a level, and stops as soon as the level is cleared. With practice the player improves: the probability of clearing the level is $0.3$ on the first attempt, $0.5$ on the second and $0.7$ on the third (each given that the earlier attempts failed). Let $X$ be the number of attempts the player uses.',
    answer: '(i) $0.35$; (ii) $0.895$; (iii) mean $2.05$, OR $\\frac{60}{179}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $P(X = 2)$.', answer: 'The first attempt fails and the second succeeds: $0.7 \\times 0.5 = 0.35$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the player clears the level.', answer: 'P(all three fail) $= 0.7 \\times 0.5 \\times 0.3 = 0.105$, so P(cleared) $= 1 - 0.105 = 0.895$.' },
      { label: '(iii)', marks: 2, text: 'Write the probability distribution of $X$ and find its mean. OR Given that the player cleared the level, find the probability that it was cleared on the first attempt.', answer: '$P(X = 1) = 0.3$, $P(X = 2) = 0.35$, and $X = 3$ whenever the first two attempts fail, so $P(X = 3) = 0.7 \\times 0.5 = 0.35$ (whatever happens on the third attempt). Mean $= 0.3 + 0.7 + 1.05 = 2.05$. OR P(first attempt | cleared) $= \\frac{0.3}{0.895} = \\frac{60}{179}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e11', chapter: C, topic: COND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A college has $600$ students, of whom $360$ live in the hostel and $240$ are day scholars. On a particular morning, $200$ hostellers and $90$ day scholars had breakfast at the college canteen. A student is chosen at random.',
    answer: '(i) $\\frac{29}{60}$; (ii) $\\frac{20}{29}$; (iii) $\\frac{3}{8}$, OR not independent.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the student had breakfast at the canteen.', answer: '$\\frac{200 + 90}{600} = \\frac{290}{600} = \\frac{29}{60}$.' },
      { label: '(ii)', marks: 1, text: 'Given that the student had breakfast at the canteen, find the probability that the student is a hosteller.', answer: '$\\frac{200}{290} = \\frac{20}{29}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the student is a day scholar, find the probability that the student had breakfast at the canteen. OR Check whether the events "the student is a hosteller" and "the student had breakfast at the canteen" are independent.', answer: '$\\frac{90}{240} = \\frac{3}{8}$. OR $P(H) = \\frac{360}{600} = 0.6$, $P(C) = \\frac{29}{60}$, so $P(H)P(C) = 0.29$, while $P(H \\cap C) = \\frac{200}{600} = \\frac{1}{3} \\approx 0.333$. Since these differ, the events are not independent.' },
    ],
  },
  {
    id: 'c12-prob-r2-e12', chapter: C, topic: COND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a board game, a player rolls two fair six-faced dice on each turn. Rolling a double (both dice showing the same number) gives an extra turn, and a sum of $10$ or more lets the player skip a hurdle.',
    answer: '(i) $\\frac{1}{6}$; (ii) $\\frac{1}{3}$; (iii) $\\frac{3}{11}$, OR $\\frac{2}{11}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability of rolling a double.', answer: 'There are $6$ doubles among $36$ outcomes, so the probability is $\\frac{1}{6}$.' },
      { label: '(ii)', marks: 1, text: 'Given that the player rolled a double, find the probability that the player can skip a hurdle.', answer: 'Of the $6$ doubles, only $(5, 5)$ and $(6, 6)$ have sum at least $10$, so the probability is $\\frac{2}{6} = \\frac{1}{3}$.' },
      { label: '(iii)', marks: 2, text: 'Given that at least one die shows $5$, find the probability that the sum is $10$ or more. OR Given that at least one die shows $6$, find the probability that the sum is exactly $8$.', answer: '$11$ outcomes have at least one $5$; of these $(5, 5), (5, 6), (6, 5)$ have sum at least $10$, so the probability is $\\frac{3}{11}$. OR $11$ outcomes have at least one $6$; of these $(2, 6)$ and $(6, 2)$ have sum $8$, so the probability is $\\frac{2}{11}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e13', chapter: C, topic: COND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A shop has a carton of $12$ phone chargers, of which $4$ are faulty. A quality checker takes out two chargers one after the other, without replacement, and tests them.',
    answer: '(i) $\\frac{3}{11}$; (ii) $\\frac{1}{3}$; (iii) $\\frac{3}{11}$, OR $\\frac{3}{19}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Given that the first charger is faulty, find the probability that the second is also faulty.', answer: 'After one faulty charger is removed, $3$ of the remaining $11$ are faulty, so the probability is $\\frac{3}{11}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the second charger is faulty.', answer: '$\\frac{4}{12} \\cdot \\frac{3}{11} + \\frac{8}{12} \\cdot \\frac{4}{11} = \\frac{12 + 32}{132} = \\frac{44}{132} = \\frac{1}{3}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the second charger is faulty, find the probability that the first was faulty. OR Given that at least one of the two chargers is faulty, find the probability that both are faulty.', answer: 'P(both faulty) $= \\frac{4}{12} \\cdot \\frac{3}{11} = \\frac{1}{11}$, so P(first faulty | second faulty) $= \\frac{1/11}{1/3} = \\frac{3}{11}$. OR P(neither faulty) $= \\frac{8}{12} \\cdot \\frac{7}{11} = \\frac{14}{33}$, so P(at least one) $= \\frac{19}{33}$ and the probability is $\\frac{3/33}{19/33} = \\frac{3}{19}$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e14', chapter: C, topic: MULT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At a college tea stall, a customer buys tea with probability $0.6$ and buys a snack with probability $0.5$. Buying tea and buying a snack are independent, and different customers act independently.',
    answer: '(i) $0.3$; (ii) $0.2$; (iii) $0.5$, OR $0.936$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that a customer buys both tea and a snack.', answer: '$0.6 \\times 0.5 = 0.3$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that a customer buys neither.', answer: '$0.4 \\times 0.5 = 0.2$.' },
      { label: '(iii)', marks: 2, text: 'Find the probability that a customer buys exactly one of the two. OR Three customers arrive. Find the probability that at least one of them buys tea.', answer: 'P(exactly one) $= 0.6(0.5) + 0.4(0.5) = 0.3 + 0.2 = 0.5$. OR P(none of the three buys tea) $= 0.4^{3} = 0.064$, so the probability is $1 - 0.064 = 0.936$.' },
    ],
  },
  {
    id: 'c12-prob-r2-e15', chapter: C, topic: MULT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A caretaker has a bunch of $5$ similar-looking keys, exactly one of which opens a storeroom. He tries the keys one by one at random, setting aside each key that fails, until the door opens.',
    answer: '(i) $\\frac{1}{5}$; (ii) $\\frac{1}{5}$; (iii) $\\frac{2}{5}$, OR $\\frac{16}{125}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the door opens on the first try.', answer: '$\\frac{1}{5}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the door opens on the third try.', answer: 'The first two keys fail and the third works: $\\frac{4}{5} \\cdot \\frac{3}{4} \\cdot \\frac{1}{3} = \\frac{1}{5}$.' },
      { label: '(iii)', marks: 2, text: 'Find the probability that he needs more than $3$ tries. OR If instead he does not set aside the failed keys (so each try is from all $5$ keys), find the probability that the door opens for the first time on the third try.', answer: 'More than $3$ tries means the first three keys all fail: $\\frac{4}{5} \\cdot \\frac{3}{4} \\cdot \\frac{2}{3} = \\frac{2}{5}$. OR Tries are now independent: $\\frac{4}{5} \\cdot \\frac{4}{5} \\cdot \\frac{1}{5} = \\frac{16}{125}$.' },
    ],
  },
];
