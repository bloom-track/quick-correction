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

export const CH13_PROB: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-prob-a01', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $P(A) = 0.7$, $P(B) = 0.4$ and $P(A \\cap B) = 0.3$, then $P(A \\mid B)$ is',
    options: ['$\\frac{3}{4}$', '$\\frac{3}{7}$', '$\\frac{3}{10}$', '$\\frac{4}{7}$'],
    answer: 'Correct option: A) $\\frac{3}{4}$. $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.3}{0.4} = \\frac{3}{4}$. Option B is $P(B \\mid A) = \\frac{0.3}{0.7}$, which divides by the wrong event, and option C is $P(A \\cap B)$ itself.',
  },
  {
    id: 'c12-prob-a02', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A fair die is rolled once. Given that the number shown is even, the probability that it is greater than $3$ is',
    options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$'],
    answer: 'Correct option: B) $\\frac{2}{3}$. The reduced sample space is $\\{2, 4, 6\\}$, and of these $4$ and $6$ exceed $3$, so the probability is $\\frac{2}{3}$. Option A is the unconditional $P(\\text{greater than } 3)$.',
  },
  {
    id: 'c12-prob-a03', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Three fair coins are tossed together. Given that at least two of them show heads, the probability that all three show heads is',
    options: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$'],
    answer: 'Correct option: C) $\\frac{1}{4}$. The outcomes with at least two heads are HHT, HTH, THH and HHH. Only HHH has three heads, so the probability is $\\frac{1}{4}$. Option A ignores the condition.',
  },
  {
    id: 'c12-prob-a04', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For two events $A$ and $B$, $P(A) = 0.4$, $P(B) = 0.5$ and $P(A \\cup B) = 0.7$. Then $P(A\' \\mid B\')$ equals',
    options: ['$\\frac{1}{2}$', '$\\frac{3}{10}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$'],
    answer: 'Correct option: C) $\\frac{3}{5}$. $P(A\' \\cap B\') = 1 - P(A \\cup B) = 0.3$ and $P(B\') = 0.5$, so $P(A\' \\mid B\') = \\frac{0.3}{0.5} = \\frac{3}{5}$. Option A divides by $P(A\')$ instead, and option B stops at the joint probability.',
  },
  {
    id: 'c12-prob-a05', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two fair dice are thrown. Given that the sum of the numbers is $8$, the probability that both dice show even numbers is',
    options: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{12}$', '$\\frac{5}{36}$'],
    answer: 'Correct option: B) $\\frac{3}{5}$. Sum $8$ occurs as $(2,6), (3,5), (4,4), (5,3), (6,2)$: five outcomes. Both even in $(2,6), (4,4), (6,2)$, so the probability is $\\frac{3}{5}$. Option C is the unconditional probability $\\frac{3}{36}$.',
  },
  {
    id: 'c12-prob-a06', chapter: C, topic: COND, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): If $A$ and $B$ are events with $A \\subseteq B$ and $P(B) > 0$, then $P(A \\mid B) = \\frac{P(A)}{P(B)}$.\nReason (R): If $A \\subseteq B$, then $A \\cap B = A$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true and (R) explains (A). Since $A \\subseteq B$, $A \\cap B = A$, so $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A)}{P(B)}$.',
  },
  {
    id: 'c12-prob-a07', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ and $B$ are independent events with $P(A) = 0.3$ and $P(B) = 0.4$, then $P(A \\cup B)$ is',
    options: ['$0.70$', '$0.12$', '$0.58$', '$0.88$'],
    answer: 'Correct option: C) $0.58$. By independence $P(A \\cap B) = 0.3 \\times 0.4 = 0.12$, so $P(A \\cup B) = 0.3 + 0.4 - 0.12 = 0.58$. Option A forgets to subtract the intersection.',
  },
  {
    id: 'c12-prob-a08', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Three machines in a workshop break down on a given day independently, with probabilities $0.1$, $0.2$ and $0.25$. The probability that at least one machine breaks down that day is',
    options: ['$0.54$', '$0.46$', '$0.55$', '$0.005$'],
    answer: 'Correct option: B) $0.46$. P(none breaks down) $= 0.9 \\times 0.8 \\times 0.75 = 0.54$, so P(at least one) $= 1 - 0.54 = 0.46$. Option C wrongly adds the probabilities and option D is P(all three break down).',
  },
  {
    id: 'c12-prob-a09', chapter: C, topic: MULT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Events $E$ and $F$ are independent with $P(E) = 0.4$ and $P(E \\cup F) = 0.7$. Then $P(F \\mid E)$ is',
    options: ['$\\frac{3}{10}$', '$\\frac{1}{5}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
    answer: 'Correct option: D) $\\frac{1}{2}$. With $P(F) = q$: $0.4 + q - 0.4q = 0.7$, so $0.6q = 0.3$ and $q = 0.5$. For independent events $P(F \\mid E) = P(F) = \\frac{1}{2}$. Option B is $P(E \\cap F) = 0.2$.',
  },
  {
    id: 'c12-prob-a10', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Two cards are drawn one after the other without replacement from a well-shuffled pack of $52$ cards. The probability that both are aces is',
    options: ['$\\frac{1}{169}$', '$\\frac{1}{221}$', '$\\frac{1}{13}$', '$\\frac{2}{221}$'],
    answer: 'Correct option: B) $\\frac{1}{221}$. By the multiplication theorem, $\\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$. Option A is the answer with replacement.',
  },
  {
    id: 'c12-prob-a11', chapter: C, topic: MULT, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): Events $A$ and $B$ with $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$ and $P(A \\cap B) = \\frac{1}{6}$ are independent.\nReason (R): Two mutually exclusive events, each with non-zero probability, can never be independent.',
    options: AR_OPTIONS,
    answer: 'Correct option: B) Both are true, but (R) does not explain (A). (A) holds because $P(A)P(B) = \\frac{1}{6} = P(A \\cap B)$. (R) is true since for such events $P(A \\cap B) = 0 \\neq P(A)P(B)$, but it is about mutually exclusive events, which $A$ and $B$ are not, so it does not explain (A).',
  },
  {
    id: 'c12-prob-a12', chapter: C, topic: BAYES, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Bag I has $4$ red and $1$ white ball; Bag II has $2$ red and $3$ white balls. A die is rolled: if it shows $1$ or $2$, a ball is drawn from Bag I, otherwise from Bag II. Given that the ball drawn is red, the probability that it came from Bag I is',
    options: ['$\\frac{8}{15}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{4}{15}$'],
    answer: 'Correct option: C) $\\frac{1}{2}$. P(red) $= \\frac{1}{3} \\cdot \\frac{4}{5} + \\frac{2}{3} \\cdot \\frac{2}{5} = \\frac{8}{15}$, so P(Bag I | red) $= \\frac{4/15}{8/15} = \\frac{1}{2}$. Option A is P(red) and option D is P(Bag I and red).',
  },
  {
    id: 'c12-prob-a13', chapter: C, topic: RV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A random variable $X$ takes the values $0, 1, 2, 3$ with probabilities $k, 2k, 3k, 4k$ respectively. Then $P(X \\geq 2)$ is',
    options: ['$\\frac{3}{10}$', '$\\frac{7}{10}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$'],
    answer: 'Correct option: B) $\\frac{7}{10}$. The probabilities add to $1$, so $10k = 1$ and $k = \\frac{1}{10}$. Then $P(X \\geq 2) = 3k + 4k = \\frac{7}{10}$. Option A is $P(X \\leq 1)$.',
  },
  {
    id: 'c12-prob-a14', chapter: C, topic: RV, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'A fair coin is tossed until a head appears or until it has been tossed three times, whichever comes first. If $X$ is the number of tosses made, the mean of $X$ is',
    options: ['$\\frac{11}{8}$', '$2$', '$\\frac{7}{4}$', '$\\frac{3}{2}$'],
    answer: 'Correct option: C) $\\frac{7}{4}$. $P(X = 1) = \\frac{1}{2}$, $P(X = 2) = \\frac{1}{4}$, and $P(X = 3) = \\frac{1}{4}$ (the first two tosses are tails, whatever the third gives). Mean $= \\frac{1}{2} + \\frac{2}{4} + \\frac{3}{4} = \\frac{7}{4}$. Option A wrongly uses $P(X = 3) = \\frac{1}{8}$.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-prob-b01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 2,
    text: 'For two events $A$ and $B$, $P(A) = 0.6$, $P(B \\mid A) = 0.5$ and $P(A \\mid B) = 0.75$. Find $P(B)$ and $P(A \\cup B)$.',
    answer: '$P(A \\cap B) = P(A)\\,P(B \\mid A) = 0.6 \\times 0.5 = 0.3$. Then $P(B) = \\frac{P(A \\cap B)}{P(A \\mid B)} = \\frac{0.3}{0.75} = 0.4$. So $P(A \\cup B) = 0.6 + 0.4 - 0.3 = 0.7$. Final answer: $P(B) = 0.4$, $P(A \\cup B) = 0.7$.',
    steps: [
      { step: 'Finds $P(A \\cap B) = 0.3$ and hence $P(B) = 0.4$', marks: 1 },
      { step: 'Finds $P(A \\cup B) = 0.7$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-b02', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Twenty cards are numbered $1$ to $20$. Two cards are drawn one after the other without replacement. Find the probability that both numbers drawn are multiples of $3$.',
    answer: 'The multiples of $3$ up to $20$ are $3, 6, 9, 12, 15, 18$: six cards. P(first is a multiple of 3) $= \\frac{6}{20}$, and P(second is one, given the first was) $= \\frac{5}{19}$. By the multiplication theorem the probability is $\\frac{6}{20} \\times \\frac{5}{19} = \\frac{30}{380} = \\frac{3}{38}$.',
    steps: [
      { step: 'Counts six multiples of 3 and writes $\\frac{6}{20}$ and the conditional $\\frac{5}{19}$', marks: 1 },
      { step: 'Multiplies to get $\\frac{3}{38}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-b03', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 2,
    text: 'Machine A makes $60\\%$ of the bolts in a factory and machine B makes the rest. $2\\%$ of the bolts from A and $5\\%$ of those from B are defective. A bolt picked at random is defective. Find the probability that it was made by machine B.',
    answer: 'P(defective) $= 0.6 \\times 0.02 + 0.4 \\times 0.05 = 0.012 + 0.02 = 0.032$. By Bayes\' theorem, P(B | defective) $= \\frac{0.4 \\times 0.05}{0.032} = \\frac{0.02}{0.032} = \\frac{5}{8}$.',
    steps: [
      { step: 'Finds total probability of a defective bolt $= 0.032$', marks: 1 },
      { step: 'Applies Bayes\' theorem to get $\\frac{5}{8}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-b04', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 2,
    text: 'A random variable $X$ has $P(X = x) = kx$ for $x = 1, 2, 3, 4$, and $0$ otherwise. Find $k$ and the mean of $X$.',
    answer: 'The probabilities sum to $1$: $k(1 + 2 + 3 + 4) = 10k = 1$, so $k = \\frac{1}{10}$. Mean $= \\sum x\\,P(X = x) = \\frac{1}{10}(1 + 4 + 9 + 16) = \\frac{30}{10} = 3$.',
    steps: [
      { step: 'Uses sum of probabilities $= 1$ to get $k = \\frac{1}{10}$', marks: 1 },
      { step: 'Computes mean $= 3$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-prob-c01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 3,
    text: 'A fair coin is tossed three times. Let $E$ be the event "exactly two heads" and $F$ the event "the first toss is a head". Find $P(E \\mid F)$ and $P(F \\mid E)$.',
    answer: 'Sample space: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT (8 equally likely outcomes). $E = \\{HHT, HTH, THH\\}$, $F = \\{HHH, HHT, HTH, HTT\\}$, $E \\cap F = \\{HHT, HTH\\}$. So $P(E) = \\frac{3}{8}$, $P(F) = \\frac{1}{2}$, $P(E \\cap F) = \\frac{1}{4}$. $P(E \\mid F) = \\frac{1/4}{1/2} = \\frac{1}{2}$ and $P(F \\mid E) = \\frac{1/4}{3/8} = \\frac{2}{3}$.',
    steps: [
      { step: 'Lists the sample space and identifies $E$, $F$ and $E \\cap F$', marks: 1 },
      { step: 'Finds $P(E \\mid F) = \\frac{1}{2}$', marks: 1 },
      { step: 'Finds $P(F \\mid E) = \\frac{2}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c02', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'In a college, $55\\%$ of students use app P for notes, $35\\%$ use app Q and $15\\%$ use both. A student is chosen at random. Find the probability that (i) the student uses P, given that the student uses Q; (ii) the student uses neither app; (iii) the student uses Q, given that the student does not use P.',
    answer: '(i) $P(P \\mid Q) = \\frac{0.15}{0.35} = \\frac{3}{7}$. (ii) $P(P \\cup Q) = 0.55 + 0.35 - 0.15 = 0.75$, so P(neither) $= 0.25 = \\frac{1}{4}$. (iii) $P(Q \\cap P\') = 0.35 - 0.15 = 0.20$ and $P(P\') = 0.45$, so $P(Q \\mid P\') = \\frac{0.20}{0.45} = \\frac{4}{9}$.',
    steps: [
      { step: '(i) $P(P \\mid Q) = \\frac{3}{7}$', marks: 1 },
      { step: '(ii) P(neither) $= \\frac{1}{4}$ using $P(P \\cup Q) = 0.75$', marks: 1 },
      { step: '(iii) $P(Q \\mid P\') = \\frac{4}{9}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c03', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Three students try a puzzle independently. Their probabilities of solving it are $\\frac{1}{3}$, $\\frac{1}{4}$ and $\\frac{1}{5}$. Find the probability that (i) the puzzle is solved; (ii) exactly one of them solves it.',
    answer: '(i) P(nobody solves) $= \\frac{2}{3} \\cdot \\frac{3}{4} \\cdot \\frac{4}{5} = \\frac{2}{5}$, so P(solved) $= 1 - \\frac{2}{5} = \\frac{3}{5}$. (ii) P(exactly one) $= \\frac{1}{3} \\cdot \\frac{3}{4} \\cdot \\frac{4}{5} + \\frac{2}{3} \\cdot \\frac{1}{4} \\cdot \\frac{4}{5} + \\frac{2}{3} \\cdot \\frac{3}{4} \\cdot \\frac{1}{5} = \\frac{12}{60} + \\frac{8}{60} + \\frac{6}{60} = \\frac{26}{60} = \\frac{13}{30}$.',
    steps: [
      { step: 'Uses independence to get P(nobody solves) $= \\frac{2}{5}$ and P(solved) $= \\frac{3}{5}$', marks: 1 },
      { step: 'Writes the three mutually exclusive cases for exactly one', marks: 1 },
      { step: 'Gets P(exactly one) $= \\frac{13}{30}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c04', chapter: C, topic: MULT, type: 'short', complexity: 'hard', marks: 3,
    text: 'Events $E$ and $F$ are independent. The probability that both occur is $\\frac{1}{6}$ and the probability that neither occurs is $\\frac{1}{3}$. Find $P(E)$ and $P(F)$.',
    answer: 'Let $P(E) = p$, $P(F) = q$. Independence gives $pq = \\frac{1}{6}$. Since $E\'$ and $F\'$ are also independent, $(1 - p)(1 - q) = \\frac{1}{3}$, i.e. $1 - (p + q) + pq = \\frac{1}{3}$, so $p + q = 1 + \\frac{1}{6} - \\frac{1}{3} = \\frac{5}{6}$. So $p$ and $q$ are roots of $t^{2} - \\frac{5}{6}t + \\frac{1}{6} = 0$, i.e. $6t^{2} - 5t + 1 = 0$, giving $t = \\frac{1}{2}$ or $\\frac{1}{3}$. Hence $P(E) = \\frac{1}{2}, P(F) = \\frac{1}{3}$, or $P(E) = \\frac{1}{3}, P(F) = \\frac{1}{2}$.',
    steps: [
      { step: 'Writes $pq = \\frac{1}{6}$ and $(1 - p)(1 - q) = \\frac{1}{3}$', marks: 1 },
      { step: 'Deduces $p + q = \\frac{5}{6}$ and forms the quadratic $6t^{2} - 5t + 1 = 0$', marks: 1 },
      { step: 'Solves to get the values $\\frac{1}{2}$ and $\\frac{1}{3}$ (either order)', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c05', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'In a school, $30\\%$ of students come by bus, $50\\%$ by car and $20\\%$ on foot. The probabilities of being late are $0.1$ for bus, $0.05$ for car and $0.02$ on foot. A student is late one morning. Find the probability that the student came by bus.',
    answer: 'Let $E_1, E_2, E_3$ be bus, car, foot and $L$ be late. $P(L) = 0.3(0.1) + 0.5(0.05) + 0.2(0.02) = 0.03 + 0.025 + 0.004 = 0.059$. By Bayes\' theorem, $P(E_1 \\mid L) = \\frac{0.03}{0.059} = \\frac{30}{59}$.',
    steps: [
      { step: 'Defines events and writes priors and conditional probabilities', marks: 1 },
      { step: 'Finds $P(L) = 0.059$ by total probability', marks: 1 },
      { step: 'Gets $P(\\text{bus} \\mid L) = \\frac{30}{59}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c06', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: '$1\\%$ of a population has a certain infection. A test gives a positive result for $95\\%$ of infected people and also for $4\\%$ of people who are not infected. A person chosen at random tests positive. Find the probability that the person is actually infected.',
    answer: 'Let $I$ be infected and $+$ be a positive test. $P(+) = 0.01 \\times 0.95 + 0.99 \\times 0.04 = 0.0095 + 0.0396 = 0.0491$. By Bayes\' theorem, $P(I \\mid +) = \\frac{0.0095}{0.0491} = \\frac{95}{491} \\approx 0.193$. So even after a positive test, the chance of infection is only about $19\\%$.',
    steps: [
      { step: 'Writes $P(I) = 0.01$, $P(+ \\mid I) = 0.95$, $P(+ \\mid I\') = 0.04$', marks: 1 },
      { step: 'Finds $P(+) = 0.0491$', marks: 1 },
      { step: 'Gets $P(I \\mid +) = \\frac{95}{491}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c07', chapter: C, topic: BAYES, type: 'short', complexity: 'hard', marks: 3,
    text: 'Bag I contains $3$ white and $4$ black balls; Bag II contains $5$ white and $2$ black balls. One ball is moved at random from Bag I to Bag II without looking, and then a ball is drawn at random from Bag II. It is white. Find the probability that the ball moved was black.',
    answer: 'Let $E_1$: white moved, $P(E_1) = \\frac{3}{7}$; $E_2$: black moved, $P(E_2) = \\frac{4}{7}$. After $E_1$, Bag II has $6$ white, $2$ black, so $P(W \\mid E_1) = \\frac{6}{8}$. After $E_2$, it has $5$ white, $3$ black, so $P(W \\mid E_2) = \\frac{5}{8}$. $P(W) = \\frac{3}{7} \\cdot \\frac{6}{8} + \\frac{4}{7} \\cdot \\frac{5}{8} = \\frac{38}{56} = \\frac{19}{28}$. $P(E_2 \\mid W) = \\frac{20/56}{38/56} = \\frac{10}{19}$.',
    steps: [
      { step: 'Sets up $E_1$, $E_2$ with $P = \\frac{3}{7}, \\frac{4}{7}$ and $P(W \\mid E_1) = \\frac{6}{8}$, $P(W \\mid E_2) = \\frac{5}{8}$', marks: 1 },
      { step: 'Finds $P(W) = \\frac{19}{28}$', marks: 1 },
      { step: 'Gets $P(E_2 \\mid W) = \\frac{10}{19}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c08', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A bag has $4$ red and $3$ blue balls. Two balls are drawn at random without replacement. If $X$ is the number of red balls drawn, find the probability distribution of $X$ and its mean.',
    answer: 'Total ways $= \\binom{7}{2} = 21$. $P(X = 0) = \\frac{\\binom{3}{2}}{21} = \\frac{3}{21} = \\frac{1}{7}$; $P(X = 1) = \\frac{4 \\times 3}{21} = \\frac{12}{21} = \\frac{4}{7}$; $P(X = 2) = \\frac{\\binom{4}{2}}{21} = \\frac{6}{21} = \\frac{2}{7}$. Mean $= 0 \\cdot \\frac{1}{7} + 1 \\cdot \\frac{4}{7} + 2 \\cdot \\frac{2}{7} = \\frac{8}{7}$.',
    steps: [
      { step: 'States $X$ takes values $0, 1, 2$ and finds $P(X = 0) = \\frac{1}{7}$', marks: 1 },
      { step: 'Finds $P(X = 1) = \\frac{4}{7}$ and $P(X = 2) = \\frac{2}{7}$', marks: 1 },
      { step: 'Computes mean $= \\frac{8}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c09', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Two fair dice are thrown. Let $X$ be the larger of the two numbers shown (if they are equal, $X$ is that number). Find the probability distribution of $X$ and its mean.',
    answer: 'For $k = 1, \\dots, 6$, the outcomes with larger number $k$ are those with both numbers at most $k$ minus those with both at most $k - 1$: $k^{2} - (k - 1)^{2} = 2k - 1$. So $P(X = k) = \\frac{2k - 1}{36}$: $P(1) = \\frac{1}{36}, P(2) = \\frac{3}{36}, P(3) = \\frac{5}{36}, P(4) = \\frac{7}{36}, P(5) = \\frac{9}{36}, P(6) = \\frac{11}{36}$. Mean $= \\frac{1 + 6 + 15 + 28 + 45 + 66}{36} = \\frac{161}{36} \\approx 4.47$.',
    steps: [
      { step: 'Identifies values $1$ to $6$ and counts outcomes for each (2k - 1)', marks: 1 },
      { step: 'Writes the full distribution with probabilities summing to $1$', marks: 1 },
      { step: 'Computes mean $= \\frac{161}{36}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c10', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A random variable $X$ takes values $0, 1, 2, 3$ with probabilities $0.1$, $a$, $b$ and $0.2$ respectively. The mean of $X$ is $1.6$. Find $a$ and $b$, and hence $P(X \\geq 2)$.',
    answer: 'Sum of probabilities: $0.1 + a + b + 0.2 = 1$, so $a + b = 0.7$. Mean: $0(0.1) + a + 2b + 3(0.2) = 1.6$, so $a + 2b = 1.0$. Subtracting, $b = 0.3$ and $a = 0.4$. Then $P(X \\geq 2) = 0.3 + 0.2 = 0.5$.',
    steps: [
      { step: 'Writes $a + b = 0.7$ and $a + 2b = 1$', marks: 1 },
      { step: 'Solves to get $a = 0.4$, $b = 0.3$', marks: 1 },
      { step: 'Finds $P(X \\geq 2) = 0.5$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-c11', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A coin is biased so that a head is twice as likely as a tail. It is tossed twice. Find the probability distribution of the number of heads $X$ and the mean of $X$.',
    answer: '$P(H) = \\frac{2}{3}$, $P(T) = \\frac{1}{3}$, tosses independent. $P(X = 0) = \\left(\\frac{1}{3}\\right)^{2} = \\frac{1}{9}$; $P(X = 1) = 2 \\cdot \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{4}{9}$; $P(X = 2) = \\left(\\frac{2}{3}\\right)^{2} = \\frac{4}{9}$. Mean $= 0 + \\frac{4}{9} + \\frac{8}{9} = \\frac{4}{3}$.',
    steps: [
      { step: 'Finds $P(H) = \\frac{2}{3}$ and $P(T) = \\frac{1}{3}$', marks: 1 },
      { step: 'Writes distribution $\\frac{1}{9}, \\frac{4}{9}, \\frac{4}{9}$ for $X = 0, 1, 2$', marks: 1 },
      { step: 'Computes mean $= \\frac{4}{3}$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-prob-d01', chapter: C, topic: BAYES, type: 'long', complexity: 'medium', marks: 5,
    text: 'An online store sends parcels through three courier companies X, Y and Z, which carry $50\\%$, $30\\%$ and $20\\%$ of its parcels. The fractions of parcels each company delivers late are $4\\%$, $6\\%$ and $10\\%$. A parcel is chosen at random. (a) Find the probability that it is delivered late. (b) Given that it was delivered late, find the probability that Z carried it. (c) Given that it was delivered on time, find the probability that X carried it.',
    answer: '(a) $P(L) = 0.5(0.04) + 0.3(0.06) + 0.2(0.10) = 0.02 + 0.018 + 0.02 = 0.058$. (b) $P(Z \\mid L) = \\frac{0.02}{0.058} = \\frac{10}{29}$. (c) $P(L\') = 1 - 0.058 = 0.942$ and $P(X \\cap L\') = 0.5 \\times 0.96 = 0.48$, so $P(X \\mid L\') = \\frac{0.48}{0.942} = \\frac{80}{157}$.',
    steps: [
      { step: 'Defines events with priors $0.5, 0.3, 0.2$ and late rates $0.04, 0.06, 0.10$', marks: 1 },
      { step: '(a) Total probability gives $P(L) = 0.058$', marks: 1 },
      { step: '(b) Bayes gives $P(Z \\mid L) = \\frac{10}{29}$', marks: 1 },
      { step: '(c) Uses $P(L\') = 0.942$ and $P(L\' \\mid X) = 0.96$', marks: 1 },
      { step: '(c) Gets $P(X \\mid L\') = \\frac{80}{157}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-d02', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: 'Bag I contains $5$ red and $3$ black balls; Bag II contains $3$ red and $5$ black balls. A fair coin is tossed: on heads, Bag I is chosen, on tails, Bag II. Two balls are drawn together at random from the chosen bag and both are red. (a) Find the probability that Bag I was chosen. (b) A third ball is now drawn from the same bag (the two red balls are not returned). Find the probability that it is red.',
    answer: '(a) $P(RR \\mid I) = \\frac{\\binom{5}{2}}{\\binom{8}{2}} = \\frac{10}{28}$ and $P(RR \\mid II) = \\frac{\\binom{3}{2}}{\\binom{8}{2}} = \\frac{3}{28}$. $P(RR) = \\frac{1}{2}\\left(\\frac{10}{28} + \\frac{3}{28}\\right) = \\frac{13}{56}$. So $P(I \\mid RR) = \\frac{10}{13}$ and $P(II \\mid RR) = \\frac{3}{13}$. (b) If it is Bag I, $6$ balls remain with $3$ red, so P(red) $= \\frac{3}{6}$; if Bag II, $6$ remain with $1$ red, so P(red) $= \\frac{1}{6}$. Using the updated probabilities, P(third red) $= \\frac{10}{13} \\cdot \\frac{1}{2} + \\frac{3}{13} \\cdot \\frac{1}{6} = \\frac{30 + 3}{78} = \\frac{11}{26}$.',
    steps: [
      { step: 'Finds $P(RR \\mid I) = \\frac{10}{28}$ and $P(RR \\mid II) = \\frac{3}{28}$', marks: 1 },
      { step: 'Finds $P(RR) = \\frac{13}{56}$ by total probability', marks: 1 },
      { step: '(a) Gets $P(I \\mid RR) = \\frac{10}{13}$', marks: 1 },
      { step: '(b) Uses the remaining contents: P(red) $= \\frac{1}{2}$ from Bag I, $\\frac{1}{6}$ from Bag II', marks: 1 },
      { step: '(b) Weights by the posteriors to get $\\frac{11}{26}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-d03', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: '$2\\%$ of the people in a town carry a certain virus. A screening test is positive for $90\\%$ of carriers and for $5\\%$ of non-carriers. (a) Find the probability that a randomly chosen person tests positive. (b) Find the probability that a person who tests positive is a carrier. (c) A person who tested positive takes the test again; given the person\'s true status, the two results are independent. If the second test is also positive, find the probability that the person is a carrier.',
    answer: 'Let $V$ be carrier and $+$ positive. (a) $P(+) = 0.02(0.9) + 0.98(0.05) = 0.018 + 0.049 = 0.067$. (b) $P(V \\mid +) = \\frac{0.018}{0.067} = \\frac{18}{67} \\approx 0.269$. (c) P(two positives | V) $= 0.9^{2} = 0.81$ and P(two positives | $V\'$) $= 0.05^{2} = 0.0025$. P(two positives) $= 0.02(0.81) + 0.98(0.0025) = 0.0162 + 0.00245 = 0.01865$. So P(V | two positives) $= \\frac{0.0162}{0.01865} = \\frac{324}{373} \\approx 0.869$. A second positive raises the chance from about $27\\%$ to about $87\\%$.',
    steps: [
      { step: '(a) Finds $P(+) = 0.067$', marks: 1 },
      { step: '(b) Gets $P(V \\mid +) = \\frac{18}{67}$', marks: 1 },
      { step: '(c) Uses independence: $0.81$ for carriers, $0.0025$ for non-carriers', marks: 1 },
      { step: '(c) Finds P(two positives) $= 0.01865$', marks: 1 },
      { step: '(c) Gets $\\frac{324}{373}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-d04', chapter: C, topic: RV, type: 'long', complexity: 'medium', marks: 5,
    text: 'Five tickets are numbered $1, 2, 3, 4, 5$. Two tickets are drawn together at random. Let $X$ be the larger of the two numbers. (a) Find the probability distribution of $X$. (b) Find the mean of $X$. (c) Find the probability that $X \\leq 3$, given that $X$ is odd.',
    answer: '(a) There are $\\binom{5}{2} = 10$ equally likely pairs. The larger number is $k$ for $k - 1$ pairs, so $X$ takes values $2, 3, 4, 5$ with $P(X = 2) = \\frac{1}{10}$, $P(X = 3) = \\frac{2}{10}$, $P(X = 4) = \\frac{3}{10}$, $P(X = 5) = \\frac{4}{10}$. (b) Mean $= \\frac{2 + 6 + 12 + 20}{10} = 4$. (c) $P(X \\text{ odd}) = P(3) + P(5) = \\frac{6}{10}$ and $P(X \\leq 3 \\text{ and odd}) = P(3) = \\frac{2}{10}$, so the required probability is $\\frac{2/10}{6/10} = \\frac{1}{3}$.',
    steps: [
      { step: 'Finds $10$ equally likely pairs and the possible values $2, 3, 4, 5$', marks: 1 },
      { step: 'Writes the probabilities $\\frac{1}{10}, \\frac{2}{10}, \\frac{3}{10}, \\frac{4}{10}$', marks: 1 },
      { step: 'Sets up $\\sum x\\,P(x)$', marks: 1 },
      { step: 'Gets mean $= 4$', marks: 1 },
      { step: '(c) Gets $\\frac{1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-d05', chapter: C, topic: RV, type: 'long', complexity: 'hard', marks: 5,
    text: 'At a fair, a player pays ₹15 to roll two fair dice. The player receives ₹60 if both dice show the same number, ₹20 if the sum is $7$, and nothing otherwise. Let $X$ be the player\'s net gain (amount received minus ₹15). (a) Find the probability distribution of $X$. (b) Find the mean of $X$ and say what it means for the player. (c) What entry fee would make the game fair (mean net gain zero)?',
    answer: '(a) P(same number) $= \\frac{6}{36}$, P(sum 7) $= \\frac{6}{36}$ (these cannot both happen), P(neither) $= \\frac{24}{36}$. So $X = 45$ with probability $\\frac{1}{6}$, $X = 5$ with probability $\\frac{1}{6}$, $X = -15$ with probability $\\frac{2}{3}$. (b) Mean $= 45 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} - 15 \\cdot \\frac{2}{3} = 7.5 + \\frac{5}{6} - 10 = -\\frac{5}{3} \\approx -1.67$. On average the player loses about ₹1.67 per game. (c) Mean amount received $= 60 \\cdot \\frac{1}{6} + 20 \\cdot \\frac{1}{6} = \\frac{80}{6} = \\frac{40}{3}$, so the fair fee is ₹$\\frac{40}{3} \\approx$ ₹13.33.',
    steps: [
      { step: 'Finds P(same) $= \\frac{1}{6}$, P(sum 7) $= \\frac{1}{6}$, P(neither) $= \\frac{2}{3}$', marks: 1 },
      { step: 'Writes net gains $45, 5, -15$ with their probabilities', marks: 1 },
      { step: 'Computes mean $= -\\frac{5}{3}$', marks: 1 },
      { step: 'Interprets it as an average loss of about ₹1.67 per game', marks: 1 },
      { step: 'Finds fair fee ₹$\\frac{40}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-d06', chapter: C, topic: MULT, type: 'long', complexity: 'medium', marks: 5,
    text: 'A box has $6$ red and $4$ green balls. Three balls are drawn one after another without replacement. Find the probability that (a) all three are red; (b) the first two are red and the third is green; (c) exactly one of the three is green; (d) the third ball is green, given that the first two balls are of different colours.',
    answer: '(a) $\\frac{6}{10} \\cdot \\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{120}{720} = \\frac{1}{6}$. (b) $\\frac{6}{10} \\cdot \\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{1}{6}$ (after two reds, $4$ green remain out of $8$). (c) The green ball can be 1st, 2nd or 3rd; each order has probability $\\frac{6 \\cdot 5 \\cdot 4}{10 \\cdot 9 \\cdot 8} = \\frac{1}{6}$, so the probability is $3 \\cdot \\frac{1}{6} = \\frac{1}{2}$. (d) If the first two are one red and one green, $8$ balls remain with $5$ red and $3$ green, so the probability is $\\frac{3}{8}$.',
    steps: [
      { step: '(a) Gets $\\frac{1}{6}$ by the multiplication theorem', marks: 1 },
      { step: '(b) Gets $\\frac{1}{6}$', marks: 1 },
      { step: '(c) Identifies the three orders, each with probability $\\frac{1}{6}$', marks: 1 },
      { step: '(c) Gets $\\frac{1}{2}$', marks: 1 },
      { step: '(d) Uses the reduced box ($5$ red, $3$ green) to get $\\frac{3}{8}$', marks: 1 },
    ],
  },

  // ---------------- Section E (4-mark case studies) ----------------
  {
    id: 'c12-prob-e01', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An online retailer ships orders from three warehouses: $W_1$ handles $45\\%$ of orders, $W_2$ handles $35\\%$ and $W_3$ handles $20\\%$. Records show that $2\\%$ of orders from $W_1$, $3\\%$ from $W_2$ and $5\\%$ from $W_3$ arrive damaged. An order is picked at random.',
    answer: '(i) $0.0105$; (ii) $0.0295$; (iii) $\\frac{20}{59}$, OR $\\frac{294}{647}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the order came from $W_2$ and arrived damaged.', answer: '$P(W_2 \\cap D) = 0.35 \\times 0.03 = 0.0105$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the order arrived damaged.', answer: '$P(D) = 0.45(0.02) + 0.35(0.03) + 0.20(0.05) = 0.009 + 0.0105 + 0.01 = 0.0295$.' },
      { label: '(iii)', marks: 2, text: 'Given that the order arrived damaged, find the probability that it came from $W_3$. OR Given that the order arrived undamaged, find the probability that it came from $W_1$.', answer: 'By Bayes\' theorem, $P(W_3 \\mid D) = \\frac{0.01}{0.0295} = \\frac{20}{59}$. OR $P(D\') = 0.9705$ and $P(W_1 \\cap D\') = 0.45 \\times 0.98 = 0.441$, so $P(W_1 \\mid D\') = \\frac{0.441}{0.9705} = \\frac{294}{647}$.' },
    ],
  },
  {
    id: 'c12-prob-e02', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a hill town, the chance of rain on any given day is $0.3$. A local weather app predicts rain on $80\\%$ of the days when it actually rains, and on $10\\%$ of the days when it does not rain. Consider a day chosen at random.',
    answer: '(i) $0.31$; (ii) $0.63$; (iii) $\\frac{24}{31}$, OR $\\frac{2}{23}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the app predicts rain.', answer: 'P(predicts rain) $= 0.3(0.8) + 0.7(0.1) = 0.24 + 0.07 = 0.31$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that it does not rain and the app predicts no rain.', answer: '$0.7 \\times 0.9 = 0.63$.' },
      { label: '(iii)', marks: 2, text: 'Given that the app predicts rain, find the probability that it actually rains. OR Given that the app predicts no rain, find the probability that it actually rains.', answer: 'P(rain | predicts rain) $= \\frac{0.24}{0.31} = \\frac{24}{31}$. OR P(predicts no rain) $= 0.69$ and P(rain and predicts no rain) $= 0.3 \\times 0.2 = 0.06$, so the probability is $\\frac{0.06}{0.69} = \\frac{2}{23}$.' },
    ],
  },
  {
    id: 'c12-prob-e03', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At an office, $40\\%$ of incoming emails are spam. The spam filter flags $90\\%$ of spam emails, but it also wrongly flags $5\\%$ of genuine emails. An email is picked at random.',
    answer: '(i) $0.39$; (ii) $0.57$; (iii) $\\frac{12}{13}$, OR $\\frac{4}{61}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the email is flagged.', answer: 'P(flagged) $= 0.4(0.9) + 0.6(0.05) = 0.36 + 0.03 = 0.39$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the email is genuine and is not flagged.', answer: '$0.6 \\times 0.95 = 0.57$.' },
      { label: '(iii)', marks: 2, text: 'Given that the email is flagged, find the probability that it is spam. OR Given that the email is not flagged, find the probability that it is spam.', answer: 'P(spam | flagged) $= \\frac{0.36}{0.39} = \\frac{12}{13}$. OR P(not flagged) $= 0.61$ and P(spam and not flagged) $= 0.4 \\times 0.1 = 0.04$, so the probability is $\\frac{0.04}{0.61} = \\frac{4}{61}$.' },
    ],
  },
  {
    id: 'c12-prob-e04', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A coaching centre runs a morning, an afternoon and an evening batch, with $40\\%$, $35\\%$ and $25\\%$ of its students. In a mock test, $90\\%$ of the morning batch, $80\\%$ of the afternoon batch and $70\\%$ of the evening batch passed. A student is chosen at random.',
    answer: '(i) $0.815$; (ii) $0.185$; (iii) $\\frac{15}{37}$, OR $\\frac{72}{163}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the student passed.', answer: 'P(pass) $= 0.4(0.9) + 0.35(0.8) + 0.25(0.7) = 0.36 + 0.28 + 0.175 = 0.815$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the student failed.', answer: 'P(fail) $= 1 - 0.815 = 0.185$.' },
      { label: '(iii)', marks: 2, text: 'Given that the student failed, find the probability that the student is from the evening batch. OR Given that the student passed, find the probability that the student is from the morning batch.', answer: 'P(evening and fail) $= 0.25 \\times 0.3 = 0.075$, so P(evening | fail) $= \\frac{0.075}{0.185} = \\frac{15}{37}$. OR P(morning | pass) $= \\frac{0.36}{0.815} = \\frac{72}{163}$.' },
    ],
  },
  {
    id: 'c12-prob-e05', chapter: C, topic: BAYES, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A factory has two machines. Machine A makes $60\\%$ of its items and $5\\%$ of them are defective; machine B makes $40\\%$ and $10\\%$ of them are defective. Before packing, an inspector rejects $90\\%$ of defective items, and also wrongly rejects $1\\%$ of good items. An item is picked at random from the production line before inspection.',
    answer: '(i) $0.07$; (ii) $0.0723$; (iii) $\\frac{210}{241}$, OR $\\frac{4}{7}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the item is defective.', answer: 'P(defective) $= 0.6(0.05) + 0.4(0.10) = 0.03 + 0.04 = 0.07$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the inspector rejects the item.', answer: 'P(rejected) $= 0.07(0.9) + 0.93(0.01) = 0.063 + 0.0093 = 0.0723$.' },
      { label: '(iii)', marks: 2, text: 'Given that the item is rejected, find the probability that it is actually defective. OR Given that the item is defective, find the probability that it was made by machine B.', answer: 'P(defective | rejected) $= \\frac{0.063}{0.0723} = \\frac{210}{241} \\approx 0.871$. OR P(B | defective) $= \\frac{0.4 \\times 0.10}{0.07} = \\frac{0.04}{0.07} = \\frac{4}{7}$.' },
    ],
  },
  {
    id: 'c12-prob-e06', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A school cricket team wins the toss with probability $\\frac{1}{2}$. Past records show that when it wins the toss it wins the match with probability $0.7$, and when it loses the toss it wins the match with probability $0.5$. Consider the team\'s next match.',
    answer: '(i) $0.6$; (ii) $0.15$; (iii) $\\frac{7}{12}$, OR $\\frac{5}{8}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the team wins the match.', answer: 'P(win match) $= 0.5(0.7) + 0.5(0.5) = 0.35 + 0.25 = 0.6$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the team wins the toss but loses the match.', answer: '$0.5 \\times 0.3 = 0.15$.' },
      { label: '(iii)', marks: 2, text: 'Given that the team won the match, find the probability that it had won the toss. OR Given that the team lost the match, find the probability that it had lost the toss.', answer: 'P(won toss | won match) $= \\frac{0.35}{0.6} = \\frac{7}{12}$. OR P(lost match) $= 0.4$ and P(lost toss and lost match) $= 0.5 \\times 0.5 = 0.25$, so the probability is $\\frac{0.25}{0.4} = \\frac{5}{8}$.' },
    ],
  },
  {
    id: 'c12-prob-e07', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A home bakery takes orders for a special cake. The number of cakes ordered on a day, $X$, has $P(X = 0) = k$, $P(X = 1) = 3k$, $P(X = 2) = 4k$, $P(X = 3) = 2k$, and no day has more than $3$ orders.',
    answer: '(i) $k = \\frac{1}{10}$; (ii) $\\frac{3}{5}$; (iii) mean $1.7$ cakes, OR ₹595.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the value of $k$.', answer: '$k + 3k + 4k + 2k = 10k = 1$, so $k = \\frac{1}{10}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that at least $2$ cakes are ordered on a day.', answer: '$P(X \\geq 2) = 4k + 2k = \\frac{6}{10} = \\frac{3}{5}$.' },
      { label: '(iii)', marks: 2, text: 'Find the mean number of cakes ordered per day. OR The bakery makes a profit of ₹50 per cake. Find its expected profit from these cakes over $7$ days.', answer: 'Mean $= 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0.3 + 0.8 + 0.6 = 1.7$ cakes per day. OR Expected profit per day $= 50 \\times 1.7 =$ ₹85, so over $7$ days it is $7 \\times 85 =$ ₹595.' },
    ],
  },
  {
    id: 'c12-prob-e08', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A game stall has a spinner with $8$ equal sectors numbered $1$ to $8$. A player pays ₹10 per spin. If the spinner stops on $3$ or $6$, the player receives ₹20; if it stops on $2$, $5$ or $7$, the player receives ₹10; on $1$, $4$ or $8$, the player receives nothing. Let $X$ be the player\'s net gain from one spin.',
    answer: '(i) $\\frac{1}{4}$; (ii) $\\frac{3}{8}$; (iii) mean $-$₹1.25, OR $\\frac{1}{16}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the player makes a profit on one spin.', answer: 'Profit only on $3$ or $6$ (net gain ₹10), so the probability is $\\frac{2}{8} = \\frac{1}{4}$.' },
      { label: '(ii)', marks: 1, text: 'Find $P(X = 0)$.', answer: 'Net gain $0$ on $2$, $5$ or $7$: $P(X = 0) = \\frac{3}{8}$.' },
      { label: '(iii)', marks: 2, text: 'Write the probability distribution of $X$ and find its mean. OR A player spins twice; the spins are independent. Find the probability that the player makes a profit on both spins.', answer: '$X = 10, 0, -10$ with probabilities $\\frac{2}{8}, \\frac{3}{8}, \\frac{3}{8}$. Mean $= \\frac{20 + 0 - 30}{8} = -\\frac{5}{4}$, so the player loses ₹1.25 per spin on average. OR $\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$.' },
    ],
  },
  {
    id: 'c12-prob-e09', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A shopkeeper has a box of $10$ LED bulbs, of which $3$ are defective. A customer picks $2$ bulbs at random together. Let $X$ be the number of defective bulbs picked.',
    answer: '(i) $\\frac{7}{15}$; (ii) $\\frac{1}{15}$; (iii) mean $\\frac{3}{5}$, OR mean $0.6$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $P(X = 0)$.', answer: '$P(X = 0) = \\frac{\\binom{7}{2}}{\\binom{10}{2}} = \\frac{21}{45} = \\frac{7}{15}$.' },
      { label: '(ii)', marks: 1, text: 'Find $P(X = 2)$.', answer: '$P(X = 2) = \\frac{\\binom{3}{2}}{45} = \\frac{3}{45} = \\frac{1}{15}$.' },
      { label: '(iii)', marks: 2, text: 'Write the probability distribution of $X$ and find its mean. OR If instead the customer picks one bulb, notes it, puts it back and picks again, find the distribution and mean of the number of defective bulbs picked.', answer: '$P(X = 1) = \\frac{3 \\times 7}{45} = \\frac{7}{15}$, so $X = 0, 1, 2$ with probabilities $\\frac{7}{15}, \\frac{7}{15}, \\frac{1}{15}$. Mean $= \\frac{7}{15} + \\frac{2}{15} = \\frac{9}{15} = \\frac{3}{5}$. OR With replacement, each pick is defective with probability $0.3$: $P(0) = 0.49$, $P(1) = 2(0.3)(0.7) = 0.42$, $P(2) = 0.09$. Mean $= 0.42 + 0.18 = 0.6$.' },
    ],
  },
  {
    id: 'c12-prob-e10', chapter: C, topic: COND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A survey of $500$ households in a town found that $280$ subscribe to streaming service P, $220$ subscribe to service Q, and $120$ subscribe to both. A household is chosen at random.',
    answer: '(i) $\\frac{19}{25}$; (ii) $\\frac{3}{7}$; (iii) $\\frac{4}{7}$, OR $\\frac{6}{11}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the household subscribes to at least one of the two services.', answer: 'Number with at least one $= 280 + 220 - 120 = 380$, so the probability is $\\frac{380}{500} = \\frac{19}{25}$.' },
      { label: '(ii)', marks: 1, text: 'Given that the household subscribes to P, find the probability that it also subscribes to Q.', answer: '$P(Q \\mid P) = \\frac{120}{280} = \\frac{3}{7}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the household does not subscribe to Q, find the probability that it subscribes to P. OR Given that the household does not subscribe to P, find the probability that it subscribes to neither service.', answer: 'Not Q: $500 - 220 = 280$ households, of which P only $= 280 - 120 = 160$. So $P(P \\mid Q\') = \\frac{160}{280} = \\frac{4}{7}$. OR Not P: $220$ households; neither $= 500 - 380 = 120$. So the probability is $\\frac{120}{220} = \\frac{6}{11}$.' },
    ],
  },
  {
    id: 'c12-prob-e11', chapter: C, topic: MULT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A jewellery shop has three independent security alarms. On any night, alarm 1 works with probability $0.9$, alarm 2 with probability $0.8$ and alarm 3 with probability $0.7$.',
    answer: '(i) $0.504$; (ii) $0.006$; (iii) $0.398$, OR $\\frac{171}{199}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that all three alarms work on a night.', answer: '$0.9 \\times 0.8 \\times 0.7 = 0.504$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that none of the alarms works.', answer: '$0.1 \\times 0.2 \\times 0.3 = 0.006$.' },
      { label: '(iii)', marks: 2, text: 'Find the probability that exactly two alarms work. OR Given that exactly two alarms work, find the probability that alarm 1 is one of them.', answer: 'P(exactly two) $= 0.9(0.8)(0.3) + 0.9(0.2)(0.7) + 0.1(0.8)(0.7) = 0.216 + 0.126 + 0.056 = 0.398$. OR The cases with alarm 1 working give $0.216 + 0.126 = 0.342$, so the probability is $\\frac{0.342}{0.398} = \\frac{171}{199}$.' },
    ],
  },
  {
    id: 'c12-prob-e12', chapter: C, topic: MULT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'At an archery practice, Riya and Kabir each shoot one arrow at a target, independently. Riya hits the target with probability $0.6$ and Kabir with probability $0.7$.',
    answer: '(i) $0.88$; (ii) $0.46$; (iii) $\\frac{9}{23}$, OR $\\frac{35}{44}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the target is hit.', answer: 'P(hit) $= 1 - 0.4 \\times 0.3 = 1 - 0.12 = 0.88$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that exactly one of them hits the target.', answer: '$0.6(0.3) + 0.4(0.7) = 0.18 + 0.28 = 0.46$.' },
      { label: '(iii)', marks: 2, text: 'Given that exactly one of them hit the target, find the probability that it was Riya. OR Given that the target was hit, find the probability that Kabir hit it.', answer: 'P(Riya | exactly one) $= \\frac{0.18}{0.46} = \\frac{9}{23}$. OR P(Kabir hits and target hit) $= P(\\text{Kabir hits}) = 0.7$, so the probability is $\\frac{0.7}{0.88} = \\frac{35}{44}$.' },
    ],
  },
];
