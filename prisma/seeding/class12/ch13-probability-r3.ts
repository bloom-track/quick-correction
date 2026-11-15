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

export const CH13_PROB_R3: Class12Question[] = [
  // ---------------- Section A (1 mark) ----------------
  {
    id: 'c12-prob-r3-a01', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'For events $A$ and $B$, $P(A \\cap B) = \\frac{1}{6}$ and $P(A \\mid B) = \\frac{1}{3}$. Then $P(B)$ is',
    options: ['$\\frac{1}{18}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$'],
    answer: 'Correct option: B) $\\frac{1}{2}$. From $P(A \\cap B) = P(B)\\,P(A \\mid B)$ we get $P(B) = \\frac{1/6}{1/3} = \\frac{1}{2}$. Option A multiplies the two given values instead of dividing.',
  },
  {
    id: 'c12-prob-r3-a02', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A number is chosen at random from $1, 2, 3, \\dots, 25$. Given that the number is prime, the probability that it is odd is',
    options: ['$\\frac{8}{25}$', '$\\frac{9}{25}$', '$\\frac{8}{9}$', '$\\frac{1}{9}$'],
    answer: 'Correct option: C) $\\frac{8}{9}$. The primes up to $25$ are $2, 3, 5, 7, 11, 13, 17, 19, 23$, which is $9$ numbers, and $8$ of them are odd. So the probability is $\\frac{8}{9}$. Option A is the unconditional probability of an odd prime.',
  },
  {
    id: 'c12-prob-r3-a03', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A family has three children, and each child is equally likely to be a boy or a girl, independently of the others. Given that at least one child is a girl, the probability that all three are girls is',
    options: ['$\\frac{1}{8}$', '$\\frac{1}{7}$', '$\\frac{3}{7}$', '$\\frac{1}{2}$'],
    answer: 'Correct option: B) $\\frac{1}{7}$. Of the $8$ equally likely outcomes, $7$ have at least one girl, and only one of these has all girls. So the probability is $\\frac{1}{7}$. Option A forgets to restrict to the given event.',
  },
  {
    id: 'c12-prob-r3-a04', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For events $A$ and $B$ with non-zero probabilities, $P(A \\mid B) = \\frac{2}{5}$ and $P(B \\mid A) = \\frac{1}{2}$. Then $\\frac{P(A)}{P(B)}$ equals',
    options: ['$\\frac{5}{4}$', '$\\frac{1}{5}$', '$\\frac{9}{10}$', '$\\frac{4}{5}$'],
    answer: 'Correct option: D) $\\frac{4}{5}$. Both $P(A \\mid B)\\,P(B)$ and $P(B \\mid A)\\,P(A)$ equal $P(A \\cap B)$, so $\\frac{2}{5}P(B) = \\frac{1}{2}P(A)$, giving $\\frac{P(A)}{P(B)} = \\frac{2/5}{1/2} = \\frac{4}{5}$. Option A is the reciprocal.',
  },
  {
    id: 'c12-prob-r3-a05', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A red die and a blue die are thrown. Given that the red die shows a smaller number than the blue die, the probability that the sum of the two numbers is $7$ is',
    options: ['$\\frac{1}{5}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{12}$'],
    answer: 'Correct option: A) $\\frac{1}{5}$. There are $15$ outcomes with red smaller than blue. Of these, $(1, 6), (2, 5), (3, 4)$ have sum $7$. So the probability is $\\frac{3}{15} = \\frac{1}{5}$. Option B is the unconditional probability of sum $7$.',
  },
  {
    id: 'c12-prob-r3-a06', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ and $B$ are independent events with $P(A) = 0.3$ and $P(B) = 0.5$, then $P(A\' \\cap B)$ is',
    options: ['$0.15$', '$0.35$', '$0.65$', '$0.5$'],
    answer: 'Correct option: B) $0.35$. Since $A\'$ and $B$ are also independent, $P(A\' \\cap B) = (1 - 0.3)(0.5) = 0.35$. Option A is $P(A \\cap B)$ and option C is $P(A \\cup B)$.',
  },
  {
    id: 'c12-prob-r3-a07', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'If $A$ and $B$ are independent events with $P(A) = \\frac{2}{3}$ and $P(B) = \\frac{3}{4}$, then $P(A\' \\mid B\')$ is',
    options: ['$\\frac{1}{12}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
    answer: 'Correct option: C) $\\frac{1}{3}$. The complements $A\'$ and $B\'$ are independent too, so $P(A\' \\mid B\') = P(A\') = 1 - \\frac{2}{3} = \\frac{1}{3}$. Option A is $P(A\' \\cap B\')$ rather than the conditional probability.',
  },
  {
    id: 'c12-prob-r3-a08', chapter: C, topic: MULT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A marksman hits the target with probability $0.8$ on each shot, independently of the other shots. The probability that his first hit comes on the third shot is',
    options: ['$0.512$', '$0.008$', '$0.032$', '$0.128$'],
    answer: 'Correct option: C) $0.032$. He must miss twice and then hit: $0.2 \\times 0.2 \\times 0.8 = 0.032$. Option A is the probability of hitting on all three shots.',
  },
  {
    id: 'c12-prob-r3-a09', chapter: C, topic: MULT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two cards are drawn one after the other, without replacement, from a well-shuffled pack of $52$ cards. The probability that both cards are of the same suit is',
    options: ['$\\frac{1}{4}$', '$\\frac{13}{51}$', '$\\frac{1}{17}$', '$\\frac{4}{17}$'],
    answer: 'Correct option: D) $\\frac{4}{17}$. Whatever the first card is, $12$ of the remaining $51$ cards are of its suit, so the probability is $\\frac{12}{51} = \\frac{4}{17}$. Option A is the answer if the first card were replaced.',
  },
  {
    id: 'c12-prob-r3-a10', chapter: C, topic: MULT, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): Events $A$ and $B$ with $P(A) = 0.4$, $P(B) = 0.5$ and $P(A \\cup B) = 0.9$ are independent.\nReason (R): Events $A$ and $B$ are independent if $P(A \\cap B) = P(A)\\,P(B)$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. Here $P(A \\cap B) = 0.4 + 0.5 - 0.9 = 0$, but $P(A)P(B) = 0.2$, so the events are not independent (they are mutually exclusive). (R) is the correct definition of independence.',
  },
  {
    id: 'c12-prob-r3-a11', chapter: C, topic: BAYES, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A student attends extra tuition with probability $0.6$. The probability of passing is $0.9$ with tuition and $0.7$ without it. The probability that the student passes is',
    options: ['$0.80$', '$0.63$', '$0.82$', '$1.6$'],
    answer: 'Correct option: C) $0.82$. By total probability, $P(\\text{pass}) = 0.6(0.9) + 0.4(0.7) = 0.54 + 0.28 = 0.82$. Option A averages $0.9$ and $0.7$ without using the weights.',
  },
  {
    id: 'c12-prob-r3-a12', chapter: C, topic: BAYES, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'In a shop, $70\\%$ of the pens are of brand X and $30\\%$ of brand Y. Of brand X pens, $2\\%$ leak and of brand Y pens, $5\\%$ leak. A pen is found to be leaking. The probability that it is of brand Y is',
    options: ['$\\frac{15}{29}$', '$\\frac{14}{29}$', '$\\frac{3}{10}$', '$\\frac{3}{7}$'],
    answer: 'Correct option: A) $\\frac{15}{29}$. $P(X \\cap L) = 0.7(0.02) = 0.014$ and $P(Y \\cap L) = 0.3(0.05) = 0.015$. So $P(Y \\mid L) = \\frac{0.015}{0.029} = \\frac{15}{29}$. Option B is $P(X \\mid L)$.',
  },
  {
    id: 'c12-prob-r3-a13', chapter: C, topic: BAYES, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Events $E_1$ and $E_2$ form a partition of a sample space with $P(E_1) = \\frac{1}{4}$ and $P(E_2) = \\frac{3}{4}$. For an event $A$, $P(A \\mid E_1) = \\frac{1}{2}$ and $P(A \\mid E_2) = \\frac{1}{6}$. Then $P(E_1 \\mid A)$ is',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{1}{8}$'],
    answer: 'Correct option: B) $\\frac{1}{2}$. $P(A) = \\frac{1}{4} \\cdot \\frac{1}{2} + \\frac{3}{4} \\cdot \\frac{1}{6} = \\frac{1}{8} + \\frac{1}{8} = \\frac{1}{4}$. Then $P(E_1 \\mid A) = \\frac{1/8}{1/4} = \\frac{1}{2}$. Option D is only the numerator $P(E_1 \\cap A)$.',
  },
  {
    id: 'c12-prob-r3-a14', chapter: C, topic: BAYES, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): If $E_1, E_2, E_3$ form a partition of a sample space and $P(A) > 0$, then $P(E_1 \\mid A) + P(E_2 \\mid A) + P(E_3 \\mid A) = 1$.\nReason (R): $P(A) = P(E_1)P(A \\mid E_1) + P(E_2)P(A \\mid E_2) + P(E_3)P(A \\mid E_3)$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both are true, and (R) explains (A). By Bayes\' theorem, $P(E_i \\mid A) = \\frac{P(E_i)P(A \\mid E_i)}{P(A)}$. Adding the three and using (R) for the sum of numerators gives $\\frac{P(A)}{P(A)} = 1$.',
  },
  {
    id: 'c12-prob-r3-a15', chapter: C, topic: BAYES, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'On $10\\%$ of days there is smoke in a godown. A smoke alarm sounds on $80\\%$ of the days with smoke and on $10\\%$ of the days without smoke. Given that the alarm sounded on a day, the probability that there was no smoke is',
    options: ['$\\frac{8}{17}$', '$\\frac{1}{10}$', '$\\frac{9}{17}$', '$\\frac{9}{10}$'],
    answer: 'Correct option: C) $\\frac{9}{17}$. $P(\\text{smoke} \\cap \\text{alarm}) = 0.1(0.8) = 0.08$ and $P(\\text{no smoke} \\cap \\text{alarm}) = 0.9(0.1) = 0.09$. So the required probability is $\\frac{0.09}{0.17} = \\frac{9}{17}$. Option A is the probability of smoke given the alarm.',
  },
  {
    id: 'c12-prob-r3-a16', chapter: C, topic: RV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A random variable $X$ has $P(X = x) = k(5 - x)$ for $x = 1, 2, 3, 4$, and $0$ otherwise. The value of $k$ is',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{15}$', '$\\frac{1}{20}$', '$\\frac{1}{10}$'],
    answer: 'Correct option: D) $\\frac{1}{10}$. The probabilities are $4k, 3k, 2k, k$, whose sum is $10k$. Setting $10k = 1$ gives $k = \\frac{1}{10}$.',
  },
  {
    id: 'c12-prob-r3-a17', chapter: C, topic: RV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A fair die is rolled once. The random variable $X$ is $2$ if the number shown is a prime and $-1$ otherwise. The mean of $X$ is',
    options: ['$\\frac{1}{2}$', '$1$', '$\\frac{3}{2}$', '$-\\frac{1}{2}$'],
    answer: 'Correct option: A) $\\frac{1}{2}$. The primes on a die are $2, 3, 5$, so $P(X = 2) = P(X = -1) = \\frac{1}{2}$. Then $E(X) = 2 \\cdot \\frac{1}{2} + (-1) \\cdot \\frac{1}{2} = \\frac{1}{2}$. Option B leaves out the $-1$ term.',
  },
  {
    id: 'c12-prob-r3-a18', chapter: C, topic: RV, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'Two cards are drawn one after the other, without replacement, from a well-shuffled pack of $52$ cards. If $X$ is the number of aces drawn, the mean of $X$ is',
    options: ['$\\frac{2}{13}$', '$\\frac{1}{13}$', '$\\frac{32}{221}$', '$\\frac{1}{26}$'],
    answer: 'Correct option: A) $\\frac{2}{13}$. $P(X = 1) = \\frac{2 \\cdot 4 \\cdot 48}{52 \\cdot 51} = \\frac{32}{221}$ and $P(X = 2) = \\frac{4 \\cdot 3}{52 \\cdot 51} = \\frac{1}{221}$. So $E(X) = \\frac{32}{221} + \\frac{2}{221} = \\frac{34}{221} = \\frac{2}{13}$. Option C is only $P(X = 1)$.',
  },
  {
    id: 'c12-prob-r3-a19', chapter: C, topic: RV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A random variable $X$ takes the values $1$, $2$ and $k$ with probabilities $\\frac{1}{2}$, $\\frac{1}{4}$ and $\\frac{1}{4}$ respectively. If the mean of $X$ is $2$, then $k$ equals',
    options: ['$3$', '$4$', '$6$', '$8$'],
    answer: 'Correct option: B) $4$. $E(X) = \\frac{1}{2} + \\frac{2}{4} + \\frac{k}{4} = 1 + \\frac{k}{4}$. Setting this equal to $2$ gives $k = 4$.',
  },
  {
    id: 'c12-prob-r3-a20', chapter: C, topic: RV, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): The numbers $0.2$, $0.5$ and $0.4$ can be the probabilities of $X = 1$, $X = 2$ and $X = 3$ for a random variable $X$.\nReason (R): The probabilities in a probability distribution must add up to $1$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. The three numbers add up to $1.1$, not $1$, so they cannot form a probability distribution. (R) is a true requirement of every distribution.',
  },

  // ---------------- Section B (2 marks) ----------------
  {
    id: 'c12-prob-r3-b01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 2,
    text: 'For events $A$ and $B$, $P(A \\cap B) = 0.15$, $P(A \\cap B\') = 0.25$ and $P(A\' \\cap B) = 0.35$. Find $P(B \\mid A)$ and $P(A \\mid B\')$.',
    answer: '$P(A) = P(A \\cap B) + P(A \\cap B\') = 0.15 + 0.25 = 0.40$, so $P(B \\mid A) = \\frac{0.15}{0.40} = \\frac{3}{8}$. The four regions add to $1$, so $P(A\' \\cap B\') = 1 - (0.15 + 0.25 + 0.35) = 0.25$ and $P(B\') = 0.25 + 0.25 = 0.50$. Hence $P(A \\mid B\') = \\frac{0.25}{0.50} = \\frac{1}{2}$.',
    steps: [
      { step: 'Finds $P(A) = 0.40$ and gets $P(B \\mid A) = \\frac{3}{8}$', marks: 1 },
      { step: 'Finds $P(B\') = 0.50$ and gets $P(A \\mid B\') = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-b02', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: 'If $A$ and $B$ are independent events, prove that $A$ and $B\'$ are also independent.',
    answer: 'Since $A$ is the union of the disjoint events $A \\cap B$ and $A \\cap B\'$, $P(A \\cap B\') = P(A) - P(A \\cap B)$. By independence $P(A \\cap B) = P(A)P(B)$, so $P(A \\cap B\') = P(A)\\,[1 - P(B)] = P(A)\\,P(B\')$. This is the condition for $A$ and $B\'$ to be independent.',
    steps: [
      { step: 'Writes $P(A \\cap B\') = P(A) - P(A \\cap B)$ from the disjoint split of $A$', marks: 1 },
      { step: 'Substitutes $P(A \\cap B) = P(A)P(B)$ and factorises to $P(A)P(B\')$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-b03', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 2,
    text: 'A trader buys eggs from two farms F and G, getting $80\\%$ from F and $20\\%$ from G. $5\\%$ of the eggs from F and $10\\%$ of the eggs from G are cracked. Find the probability that an egg picked at random is cracked, and, given that it is cracked, the probability that it came from G.',
    answer: '$P(\\text{cracked}) = 0.8(0.05) + 0.2(0.10) = 0.04 + 0.02 = 0.06 = \\frac{3}{50}$. Then $P(G \\mid \\text{cracked}) = \\frac{0.02}{0.06} = \\frac{1}{3}$.',
    steps: [
      { step: 'Uses total probability to get $P(\\text{cracked}) = 0.06$', marks: 1 },
      { step: 'Uses Bayes\' theorem to get $P(G \\mid \\text{cracked}) = \\frac{1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-b04', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 2,
    text: 'A box has $2$ red and $3$ green balls. One ball is drawn at random. A player gains ₹5 if it is red and loses ₹2 if it is green. If $X$ is the player\'s gain in rupees, write the probability distribution of $X$ and find the expected gain.',
    answer: '$X = 5$ with probability $\\frac{2}{5}$ and $X = -2$ with probability $\\frac{3}{5}$. $E(X) = 5 \\cdot \\frac{2}{5} + (-2) \\cdot \\frac{3}{5} = 2 - \\frac{6}{5} = \\frac{4}{5}$. The expected gain is ₹0.80.',
    steps: [
      { step: 'Writes the distribution: $5$ with $\\frac{2}{5}$ and $-2$ with $\\frac{3}{5}$', marks: 1 },
      { step: 'Computes $E(X) = \\frac{4}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-b05', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 2,
    text: 'A number is chosen at random from $1, 2, \\dots, 100$. Let $E$ be the event "the number is a multiple of $4$" and $F$ the event "the number is a multiple of $6$". Find $P(E \\mid F)$ and $P(F \\mid E)$.',
    answer: 'There are $25$ multiples of $4$, $16$ multiples of $6$, and $8$ multiples of $12$ (numbers that are multiples of both). So $P(E \\mid F) = \\frac{8}{16} = \\frac{1}{2}$ and $P(F \\mid E) = \\frac{8}{25}$.',
    steps: [
      { step: 'Counts $25$, $16$ and $8$ multiples of $4$, $6$ and $12$ respectively', marks: 1 },
      { step: 'Gets $P(E \\mid F) = \\frac{1}{2}$ and $P(F \\mid E) = \\frac{8}{25}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-b06', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Three cards are drawn one after another, without replacement, from a well-shuffled pack of $52$ cards. Find the probability that all three are kings.',
    answer: 'By the multiplication theorem, $P = \\frac{4}{52} \\cdot \\frac{3}{51} \\cdot \\frac{2}{50} = \\frac{24}{132600} = \\frac{1}{5525}$.',
    steps: [
      { step: 'Writes the chain $\\frac{4}{52} \\cdot \\frac{3}{51} \\cdot \\frac{2}{50}$ with the reducing counts', marks: 1 },
      { step: 'Simplifies to $\\frac{1}{5525}$', marks: 1 },
    ],
  },

  // ---------------- Section C (3 marks) ----------------
  {
    id: 'c12-prob-r3-c01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 3,
    text: 'Two fair dice are thrown. Let $A$ be the event "the sum is less than $6$" and $B$ the event "at least one die shows $2$". Find $P(A \\mid B)$ and $P(B \\mid A)$.',
    answer: '$A$ has $1 + 2 + 3 + 4 = 10$ outcomes (sums $2, 3, 4, 5$) and $B$ has $11$ outcomes. $A \\cap B = \\{(1, 2), (2, 1), (2, 2), (2, 3), (3, 2)\\}$ has $5$ outcomes. So $P(A \\mid B) = \\frac{5}{11}$ and $P(B \\mid A) = \\frac{5}{10} = \\frac{1}{2}$.',
    steps: [
      { step: 'Counts $n(A) = 10$ and $n(B) = 11$', marks: 1 },
      { step: 'Lists $A \\cap B$ with $5$ outcomes', marks: 1 },
      { step: 'Gets $P(A \\mid B) = \\frac{5}{11}$ and $P(B \\mid A) = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c02', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'Two cards are drawn one after the other, without replacement, from a well-shuffled pack of $52$ cards. Find the probability that both are hearts, given that at least one of them is a heart.',
    answer: '$P(\\text{both hearts}) = \\frac{13}{52} \\cdot \\frac{12}{51} = \\frac{1}{17}$. $P(\\text{no heart}) = \\frac{39}{52} \\cdot \\frac{38}{51} = \\frac{19}{34}$, so $P(\\text{at least one heart}) = 1 - \\frac{19}{34} = \\frac{15}{34}$. Since "both hearts" is contained in "at least one heart", the required probability is $\\frac{1/17}{15/34} = \\frac{2}{15}$.',
    steps: [
      { step: 'Finds $P(\\text{both hearts}) = \\frac{1}{17}$', marks: 1 },
      { step: 'Finds $P(\\text{at least one heart}) = \\frac{15}{34}$ via the complement', marks: 1 },
      { step: 'Divides to get $\\frac{2}{15}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c03', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'A fair die is thrown three times. Given that the sum of the three numbers is $6$, find the probability that (i) all three numbers are different; (ii) at least one of the numbers is $2$.',
    answer: 'Outcomes with sum $6$ are the arrangements of $(1, 1, 4)$: $3$; of $(1, 2, 3)$: $6$; and $(2, 2, 2)$: $1$. That is $10$ outcomes in all. (i) All different: only $(1, 2, 3)$ and its $6$ arrangements, so the probability is $\\frac{6}{10} = \\frac{3}{5}$. (ii) A $2$ appears in the $6$ arrangements of $(1, 2, 3)$ and in $(2, 2, 2)$: $7$ outcomes, so the probability is $\\frac{7}{10}$.',
    steps: [
      { step: 'Lists the $10$ outcomes with sum $6$ by type: $3 + 6 + 1$', marks: 1 },
      { step: '(i) Gets $\\frac{3}{5}$', marks: 1 },
      { step: '(ii) Gets $\\frac{7}{10}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c04', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'Three independent security cameras detect an intruder with probabilities $\\frac{1}{2}$, $\\frac{1}{3}$ and $\\frac{1}{4}$ respectively. Find the probability that (i) at least two cameras detect the intruder; (ii) no camera detects the intruder.',
    answer: 'Exactly two cameras detect in three ways: (cameras 1, 2 only) $\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{3}{4} = \\frac{1}{8}$; (cameras 1, 3 only) $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{1}{4} = \\frac{1}{12}$; (cameras 2, 3 only) $\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{24}$. Their sum is $\\frac{3 + 2 + 1}{24} = \\frac{1}{4}$. All three detect: $\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{24}$. (i) $P = \\frac{1}{4} + \\frac{1}{24} = \\frac{7}{24}$. (ii) $P(\\text{none}) = \\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{1}{4}$.',
    steps: [
      { step: 'Finds the three "exactly two" cases with sum $\\frac{1}{4}$', marks: 1 },
      { step: '(i) Adds the "all three" case $\\frac{1}{24}$ to get $\\frac{7}{24}$', marks: 1 },
      { step: '(ii) Gets $P(\\text{none}) = \\frac{1}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c05', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'A bag contains $5$ red and $4$ blue balls. Three balls are drawn one after the other without replacement. Find the probability that (i) they are drawn in the order red, blue, red; (ii) exactly two of the three balls are red.',
    answer: '(i) $P(R, B, R) = \\frac{5}{9} \\cdot \\frac{4}{8} \\cdot \\frac{4}{7} = \\frac{80}{504} = \\frac{10}{63}$. (ii) Exactly two red can happen in the orders RRB, RBR and BRR. Each has the same probability: $P(RRB) = \\frac{5}{9} \\cdot \\frac{4}{8} \\cdot \\frac{4}{7} = \\frac{10}{63}$, $P(BRR) = \\frac{4}{9} \\cdot \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{10}{63}$. So the probability is $3 \\times \\frac{10}{63} = \\frac{10}{21}$.',
    steps: [
      { step: '(i) Multiplies the chain $\\frac{5}{9} \\cdot \\frac{4}{8} \\cdot \\frac{4}{7}$ to get $\\frac{10}{63}$', marks: 1 },
      { step: '(ii) Identifies the three orders RRB, RBR, BRR', marks: 1 },
      { step: '(ii) Shows each has probability $\\frac{10}{63}$ and gets $\\frac{10}{21}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c06', chapter: C, topic: MULT, type: 'short', complexity: 'hard', marks: 3,
    text: 'Anil and Bela take turns to roll a fair die, Anil first, and the first person to roll a $6$ wins. The game stops after $4$ rolls in all (two rolls each) if nobody has rolled a $6$ by then. Find the probability that (i) Anil wins; (ii) Bela wins; (iii) nobody wins.',
    answer: 'Let $s = \\frac{1}{6}$ be the chance of a $6$ and $n = \\frac{5}{6}$ the chance of no $6$. (i) Anil wins on roll $1$ or roll $3$: $s + n^{2}s = \\frac{1}{6} + \\frac{25}{216} = \\frac{61}{216}$. (ii) Bela wins on roll $2$ or roll $4$: $ns + n^{3}s = \\frac{5}{36} + \\frac{125}{1296} = \\frac{180 + 125}{1296} = \\frac{305}{1296}$. (iii) Nobody wins: $n^{4} = \\frac{625}{1296}$. (Check: $\\frac{366}{1296} + \\frac{305}{1296} + \\frac{625}{1296} = 1$.)',
    steps: [
      { step: 'Sets up Anil winning on roll $1$ or $3$ and Bela on roll $2$ or $4$, with the earlier rolls failing', marks: 1 },
      { step: '(i) and (ii) Gets $\\frac{61}{216}$ and $\\frac{305}{1296}$', marks: 1 },
      { step: '(iii) Gets $\\left(\\frac{5}{6}\\right)^{4} = \\frac{625}{1296}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c07', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'Bag A has $2$ red and $3$ white balls, Bag B has $4$ red and $1$ white ball, and Bag C has $3$ red and $3$ white balls. A bag is chosen at random and a ball is drawn from it. Find the probability that the ball is red, and, given that it is red, the probability that it came from Bag C.',
    answer: 'Each bag is chosen with probability $\\frac{1}{3}$. $P(R) = \\frac{1}{3}\\left(\\frac{2}{5} + \\frac{4}{5} + \\frac{1}{2}\\right) = \\frac{1}{3} \\cdot \\frac{17}{10} = \\frac{17}{30}$. By Bayes\' theorem, $P(C \\mid R) = \\frac{\\frac{1}{3} \\cdot \\frac{1}{2}}{\\frac{17}{30}} = \\frac{1/6}{17/30} = \\frac{5}{17}$.',
    steps: [
      { step: 'Uses total probability with the three bags', marks: 1 },
      { step: 'Gets $P(R) = \\frac{17}{30}$', marks: 1 },
      { step: 'Uses Bayes\' theorem to get $P(C \\mid R) = \\frac{5}{17}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c08', chapter: C, topic: BAYES, type: 'short', complexity: 'hard', marks: 3,
    text: 'In a batch, $10\\%$ of the items are defective. A checker flags $80\\%$ of the defective items and a fraction $p$ of the non-defective items. It is found that, among the flagged items, the fraction that are really defective is $\\frac{4}{7}$. Find $p$.',
    answer: '$P(\\text{defective and flagged}) = 0.1 \\times 0.8 = 0.08$ and $P(\\text{non-defective and flagged}) = 0.9p$. By Bayes\' theorem, $\\frac{0.08}{0.08 + 0.9p} = \\frac{4}{7}$. Cross-multiplying, $0.56 = 0.32 + 3.6p$, so $3.6p = 0.24$ and $p = \\frac{1}{15}$. The checker flags about $6.7\\%$ of the non-defective items.',
    steps: [
      { step: 'Writes $P(\\text{defective} \\mid \\text{flagged}) = \\frac{0.08}{0.08 + 0.9p} = \\frac{4}{7}$', marks: 1 },
      { step: 'Cross-multiplies to $0.56 = 0.32 + 3.6p$', marks: 1 },
      { step: 'Solves $p = \\frac{1}{15}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c09', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'Three typists X, Y and Z type $50\\%$, $30\\%$ and $20\\%$ of the pages in an office. The probabilities that a page typed by X, Y and Z contains an error are $1\\%$, $2\\%$ and $4\\%$ respectively. A page is picked at random. Find the probability that it contains an error, and, given that it contains an error, the probability that it was typed by Z.',
    answer: '$P(\\text{error}) = 0.5(0.01) + 0.3(0.02) + 0.2(0.04) = 0.005 + 0.006 + 0.008 = 0.019 = \\frac{19}{1000}$. $P(Z \\mid \\text{error}) = \\frac{0.008}{0.019} = \\frac{8}{19}$.',
    steps: [
      { step: 'Writes the three products $0.005$, $0.006$, $0.008$', marks: 1 },
      { step: 'Adds to get $P(\\text{error}) = 0.019$', marks: 1 },
      { step: 'Gets $P(Z \\mid \\text{error}) = \\frac{8}{19}$ by Bayes\' theorem', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c10', chapter: C, topic: BAYES, type: 'short', complexity: 'hard', marks: 3,
    text: 'Urn I contains $4$ white and $2$ black balls and Urn II contains $3$ white and $3$ black balls. An urn is chosen at random and a ball is drawn from it. The ball is white; it is put back and a second ball is drawn from the same urn. Find the probability that the second ball is also white.',
    answer: 'Let $W_1$ be "first ball white". $P(\\text{I} \\cap W_1) = \\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{3}$ and $P(\\text{II} \\cap W_1) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$, so $P(W_1) = \\frac{7}{12}$. Hence $P(\\text{I} \\mid W_1) = \\frac{4}{7}$ and $P(\\text{II} \\mid W_1) = \\frac{3}{7}$. The urn is the same for the second draw and the ball was replaced, so $P(W_2 \\mid W_1) = \\frac{4}{7} \\cdot \\frac{2}{3} + \\frac{3}{7} \\cdot \\frac{1}{2} = \\frac{8}{21} + \\frac{3}{14} = \\frac{25}{42}$.',
    steps: [
      { step: 'Finds $P(W_1) = \\frac{7}{12}$', marks: 1 },
      { step: 'Updates the urn probabilities to $\\frac{4}{7}$ and $\\frac{3}{7}$ given $W_1$', marks: 1 },
      { step: 'Uses these as weights to get $\\frac{25}{42}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c11', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'Two fair dice are thrown. Let $X$ be the absolute difference of the two numbers shown. Find the probability distribution of $X$ and its mean.',
    answer: 'Of the $36$ outcomes, $X = 0$ in $6$, $X = 1$ in $10$, $X = 2$ in $8$, $X = 3$ in $6$, $X = 4$ in $4$ and $X = 5$ in $2$. So $P(X = 0, 1, 2, 3, 4, 5) = \\frac{6}{36}, \\frac{10}{36}, \\frac{8}{36}, \\frac{6}{36}, \\frac{4}{36}, \\frac{2}{36}$. $E(X) = \\frac{0 + 10 + 16 + 18 + 16 + 10}{36} = \\frac{70}{36} = \\frac{35}{18}$.',
    steps: [
      { step: 'Counts outcomes for each value of $X$', marks: 1 },
      { step: 'Writes the distribution, with probabilities summing to $1$', marks: 1 },
      { step: 'Gets $E(X) = \\frac{35}{18}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c12', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A number is drawn at random from $\\{1, 2, 3\\}$, noted and put back, and then a second number is drawn. Let $X$ be the smaller of the two numbers (if they are equal, $X$ is that number). Find the probability distribution of $X$ and the mean of $X$.',
    answer: 'There are $9$ equally likely pairs. $X = 1$ for $(1,1), (1,2), (1,3), (2,1), (3,1)$: $5$ pairs. $X = 2$ for $(2,2), (2,3), (3,2)$: $3$ pairs. $X = 3$ for $(3,3)$: $1$ pair. So $P(X = 1, 2, 3) = \\frac{5}{9}, \\frac{3}{9}, \\frac{1}{9}$ and $E(X) = \\frac{5 + 6 + 3}{9} = \\frac{14}{9}$.',
    steps: [
      { step: 'Lists the pairs for each value of $X$', marks: 1 },
      { step: 'Writes the distribution $\\frac{5}{9}, \\frac{3}{9}, \\frac{1}{9}$', marks: 1 },
      { step: 'Gets $E(X) = \\frac{14}{9}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c13', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A player draws $2$ balls together at random from a bag with $3$ red and $2$ black balls. The player receives ₹30 if both are red, receives ₹10 if exactly one is red, and pays ₹40 if neither is red. Let $X$ be the player\'s gain in rupees. Find the probability distribution of $X$ and the expected gain.',
    answer: 'There are $\\binom{5}{2} = 10$ equally likely pairs. Both red: $\\binom{3}{2} = 3$ pairs; exactly one red: $3 \\times 2 = 6$ pairs; none red: $1$ pair. So $X = 30, 10, -40$ with probabilities $\\frac{3}{10}, \\frac{6}{10}, \\frac{1}{10}$. $E(X) = 30 \\cdot \\frac{3}{10} + 10 \\cdot \\frac{6}{10} - 40 \\cdot \\frac{1}{10} = 9 + 6 - 4 = 11$. The expected gain is ₹11.',
    steps: [
      { step: 'Counts the pairs: $3$, $6$ and $1$ out of $10$', marks: 1 },
      { step: 'Writes the distribution of $X$', marks: 1 },
      { step: 'Gets $E(X) = 11$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c14', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A random variable $X$ takes the values $-1, 0, 1, 2$ with probabilities $\\frac{1}{6}$, $a$, $b$ and $\\frac{1}{3}$ respectively. If the mean of $X$ is $\\frac{2}{3}$, find $a$ and $b$, and hence $P(X > 0)$.',
    answer: 'The probabilities add to $1$: $\\frac{1}{6} + a + b + \\frac{1}{3} = 1$, so $a + b = \\frac{1}{2}$. The mean is $-\\frac{1}{6} + 0 \\cdot a + b + \\frac{2}{3} = \\frac{2}{3}$, so $b = \\frac{1}{6}$. Then $a = \\frac{1}{2} - \\frac{1}{6} = \\frac{1}{3}$. $P(X > 0) = b + \\frac{1}{3} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$.',
    steps: [
      { step: 'Uses the sum of probabilities to get $a + b = \\frac{1}{2}$', marks: 1 },
      { step: 'Uses the mean to get $b = \\frac{1}{6}$ and $a = \\frac{1}{3}$', marks: 1 },
      { step: 'Gets $P(X > 0) = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-c15', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'In a game, a fair die is rolled once. If the number shown is even, the player receives that many rupees; if it is odd, the player pays that many rupees. Let $X$ be the player\'s gain in rupees. Find the mean of $X$ and $P(X \\geq 4)$.',
    answer: 'The values of $X$ are $2, 4, 6$ for the even faces and $-1, -3, -5$ for the odd faces, each with probability $\\frac{1}{6}$. $E(X) = \\frac{2 + 4 + 6 - 1 - 3 - 5}{6} = \\frac{3}{6} = \\frac{1}{2}$, so the mean gain is ₹0.50. $X \\geq 4$ for the faces $4$ and $6$, so $P(X \\geq 4) = \\frac{2}{6} = \\frac{1}{3}$.',
    steps: [
      { step: 'Writes the six values of $X$, each with probability $\\frac{1}{6}$', marks: 1 },
      { step: 'Gets $E(X) = \\frac{1}{2}$', marks: 1 },
      { step: 'Gets $P(X \\geq 4) = \\frac{1}{3}$', marks: 1 },
    ],
  },

  // ---------------- Section D (5 marks) ----------------
  {
    id: 'c12-prob-r3-d01', chapter: C, topic: BAYES, type: 'long', complexity: 'medium', marks: 5,
    text: 'A bank gives loans to three kinds of applicants: $55\\%$ are salaried, $30\\%$ are self-employed and $15\\%$ are students. The probabilities of defaulting are $2\\%$, $6\\%$ and $10\\%$ for the three kinds respectively. A loan is chosen at random. (a) Find the probability that it goes into default. (b) Given that it defaults, find the probability that the borrower is self-employed. (c) Given that it defaults, which kind of borrower is most likely, and with what probability?',
    answer: 'Let $S$: salaried, $E$: self-employed, $T$: student, $D$: default. $P(S \\cap D) = 0.55(0.02) = 0.011$, $P(E \\cap D) = 0.30(0.06) = 0.018$, $P(T \\cap D) = 0.15(0.10) = 0.015$. (a) $P(D) = 0.011 + 0.018 + 0.015 = 0.044 = \\frac{11}{250}$. (b) $P(E \\mid D) = \\frac{0.018}{0.044} = \\frac{9}{22}$. (c) $P(S \\mid D) = \\frac{0.011}{0.044} = \\frac{1}{4}$ and $P(T \\mid D) = \\frac{0.015}{0.044} = \\frac{15}{44}$. Comparing $\\frac{11}{44}$, $\\frac{18}{44}$ and $\\frac{15}{44}$, a self-employed borrower is most likely, with probability $\\frac{9}{22}$.',
    steps: [
      { step: 'Finds the three joint probabilities $0.011$, $0.018$, $0.015$', marks: 1 },
      { step: '(a) Gets $P(D) = 0.044$', marks: 1 },
      { step: '(b) Gets $P(E \\mid D) = \\frac{9}{22}$', marks: 1 },
      { step: '(c) Finds $P(S \\mid D) = \\frac{1}{4}$ and $P(T \\mid D) = \\frac{15}{44}$', marks: 1 },
      { step: '(c) Concludes self-employed is most likely, with probability $\\frac{9}{22}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d02', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: '$4\\%$ of the transactions at a bank are fraudulent. Two fraud-detection programs examine each transaction independently of each other. Each program flags a fraudulent transaction with probability $0.8$ and a genuine transaction with probability $0.1$. A transaction is chosen at random. (a) Find the probability that the first program flags it. (b) Given that the first program flags it, find the probability that it is fraudulent. (c) Given that both programs flag it, find the probability that it is fraudulent.',
    answer: 'Let $F$: fraudulent, $G$: genuine, $P(F) = 0.04$, $P(G) = 0.96$. (a) $P(\\text{flag}) = 0.04(0.8) + 0.96(0.1) = 0.032 + 0.096 = 0.128 = \\frac{16}{125}$. (b) $P(F \\mid \\text{flag}) = \\frac{0.032}{0.128} = \\frac{1}{4}$. (c) Given the type of transaction, the programs act independently, so $P(\\text{both flag} \\mid F) = 0.8^{2} = 0.64$ and $P(\\text{both flag} \\mid G) = 0.1^{2} = 0.01$. $P(\\text{both flag}) = 0.04(0.64) + 0.96(0.01) = 0.0256 + 0.0096 = 0.0352$. So $P(F \\mid \\text{both flag}) = \\frac{0.0256}{0.0352} = \\frac{8}{11}$.',
    steps: [
      { step: '(a) Gets $P(\\text{flag}) = 0.128$ by total probability', marks: 1 },
      { step: '(b) Gets $P(F \\mid \\text{flag}) = \\frac{1}{4}$', marks: 1 },
      { step: '(c) Uses independence given the type: $0.64$ for fraudulent and $0.01$ for genuine', marks: 1 },
      { step: '(c) Finds $P(\\text{both flag}) = 0.0352$', marks: 1 },
      { step: '(c) Gets $P(F \\mid \\text{both flag}) = \\frac{8}{11}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d03', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: 'A bag contains $4$ balls, each of which is red or white. Every possible number of red balls, from $0$ to $4$, is equally likely. A ball is drawn at random from the bag. (a) Find the probability that it is red. (b) Given that it is red, find the probability that all $4$ balls in the bag are red. (c) The red ball is not put back and a second ball is drawn. Find the probability that it is also red.',
    answer: 'Let $E_k$: the bag has $k$ red balls, $P(E_k) = \\frac{1}{5}$ for $k = 0, 1, 2, 3, 4$, and $P(R \\mid E_k) = \\frac{k}{4}$. (a) $P(R) = \\frac{1}{5} \\cdot \\frac{0 + 1 + 2 + 3 + 4}{4} = \\frac{1}{5} \\cdot \\frac{10}{4} = \\frac{1}{2}$. (b) $P(E_4 \\mid R) = \\frac{\\frac{1}{5} \\cdot 1}{\\frac{1}{2}} = \\frac{2}{5}$. (c) In general $P(E_k \\mid R) = \\frac{\\frac{1}{5} \\cdot \\frac{k}{4}}{\\frac{1}{2}} = \\frac{k}{10}$. If the bag has $k$ red balls, then after removing one red ball the chance that the next is red is $\\frac{k - 1}{3}$. So $P(R_2 \\mid R_1) = \\sum_{k=1}^{4} \\frac{k}{10} \\cdot \\frac{k - 1}{3} = \\frac{0 + 2 + 6 + 12}{30} = \\frac{20}{30} = \\frac{2}{3}$.',
    steps: [
      { step: '(a) Uses total probability to get $P(R) = \\frac{1}{2}$', marks: 1 },
      { step: '(b) Uses Bayes\' theorem to get $\\frac{2}{5}$', marks: 1 },
      { step: '(c) Finds the updated probabilities $P(E_k \\mid R) = \\frac{k}{10}$', marks: 1 },
      { step: '(c) Uses $P(\\text{second red} \\mid E_k, R_1) = \\frac{k - 1}{3}$', marks: 1 },
      { step: '(c) Sums to get $\\frac{2}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d04', chapter: C, topic: MULT, type: 'long', complexity: 'medium', marks: 5,
    text: 'A lot has $10$ items, of which $8$ are good and $2$ are defective. Three items are drawn one after another without replacement. Find (a) the probability that all three are good; (b) the probability that exactly one of the three is defective; (c) the probability that the second item drawn is defective, given that exactly one of the three is defective.',
    answer: '(a) $P(GGG) = \\frac{8}{10} \\cdot \\frac{7}{9} \\cdot \\frac{6}{8} = \\frac{7}{15}$. (b) For one defective item (D) and two good (G), each of the orders DGG, GDG, GGD has probability $\\frac{2 \\cdot 8 \\cdot 7}{10 \\cdot 9 \\cdot 8} = \\frac{7}{45}$, so $P(\\text{exactly one defective}) = 3 \\times \\frac{7}{45} = \\frac{7}{15}$. (c) The event "the second is defective and exactly one is defective" is the order GDG, with probability $\\frac{7}{45}$. So the required probability is $\\frac{7/45}{7/15} = \\frac{1}{3}$.',
    steps: [
      { step: '(a) Gets $\\frac{7}{15}$ with the chain of probabilities', marks: 1 },
      { step: '(b) Finds the probability of one order, $\\frac{7}{45}$', marks: 1 },
      { step: '(b) Multiplies by $3$ orders to get $\\frac{7}{15}$', marks: 1 },
      { step: '(c) Identifies the order GDG with probability $\\frac{7}{45}$', marks: 1 },
      { step: '(c) Divides to get $\\frac{1}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d05', chapter: C, topic: MULT, type: 'long', complexity: 'hard', marks: 5,
    text: 'A machine has three components that fail independently. It works if at least two of the three components work. The probabilities that components $1$, $2$ and $3$ work are $0.95$, $0.9$ and $0.8$ respectively. Find (a) the probability that the machine works; (b) the probability that all three components fail; (c) given that the machine works, the probability that component $3$ works.',
    answer: '(a) The machine works when exactly two work or all three work. $P(1, 2 \\text{ only}) = 0.95(0.9)(0.2) = 0.171$; $P(1, 3 \\text{ only}) = 0.95(0.1)(0.8) = 0.076$; $P(2, 3 \\text{ only}) = 0.05(0.9)(0.8) = 0.036$; $P(\\text{all three}) = 0.95(0.9)(0.8) = 0.684$. The sum is $0.967$. (b) $0.05 \\times 0.1 \\times 0.2 = 0.001$. (c) Component $3$ works and the machine works exactly when component $3$ works and at least one of components $1, 2$ works: $0.8\\,[1 - (0.05)(0.1)] = 0.8 \\times 0.995 = 0.796$. So the probability is $\\frac{0.796}{0.967} = \\frac{796}{967}$.',
    steps: [
      { step: '(a) Lists the three "exactly two work" cases and the "all three" case', marks: 1 },
      { step: '(a) Adds to get $0.967$', marks: 1 },
      { step: '(b) Gets $0.001$', marks: 1 },
      { step: '(c) Finds $P(\\text{component 3 works and machine works}) = 0.796$', marks: 1 },
      { step: '(c) Divides to get $\\frac{796}{967}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d06', chapter: C, topic: RV, type: 'long', complexity: 'hard', marks: 5,
    text: 'A number is drawn at random from $\\{1, 2, 3, 4\\}$, noted and put back, and a second number is drawn. Let $X$ be the product of the two numbers. (a) Find the probability distribution of $X$. (b) Find the mean of $X$. (c) Find $P(X > 8 \\mid X \\text{ is even})$.',
    answer: '(a) Among the $16$ equally likely pairs, the products are: $1$ (one pair), $2$ (two), $3$ (two), $4$ (three: $(1,4), (4,1), (2,2)$), $6$ (two), $8$ (two), $9$ (one), $12$ (two), $16$ (one). So $P(X = 1, 2, 3, 4, 6, 8, 9, 12, 16) = \\frac{1}{16}, \\frac{2}{16}, \\frac{2}{16}, \\frac{3}{16}, \\frac{2}{16}, \\frac{2}{16}, \\frac{1}{16}, \\frac{2}{16}, \\frac{1}{16}$. (b) $E(X) = \\frac{1 + 4 + 6 + 12 + 12 + 16 + 9 + 24 + 16}{16} = \\frac{100}{16} = \\frac{25}{4}$. (c) $X$ is even for $2, 4, 6, 8, 12, 16$, which have $2 + 3 + 2 + 2 + 2 + 1 = 12$ pairs. Of these, $X > 8$ for $12$ and $16$, which have $3$ pairs. So the probability is $\\frac{3}{12} = \\frac{1}{4}$.',
    steps: [
      { step: '(a) Counts the pairs for each product', marks: 1 },
      { step: '(a) Writes the distribution with probabilities summing to $1$', marks: 1 },
      { step: '(b) Gets $E(X) = \\frac{25}{4}$', marks: 1 },
      { step: '(c) Counts $12$ pairs with an even product', marks: 1 },
      { step: '(c) Counts $3$ of these with product above $8$ and gets $\\frac{1}{4}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d07', chapter: C, topic: RV, type: 'long', complexity: 'medium', marks: 5,
    text: 'In a quiz, a contestant answers up to $3$ questions in order and stops at the first wrong answer. The probabilities of answering the first, second and third questions correctly are $0.8$, $0.6$ and $0.5$, independently. The prize is ₹0 if the first answer is wrong, ₹1000 if only the first is right, ₹4000 if exactly the first two are right, and ₹10000 if all three are right. Let $X$ be the prize in rupees. (a) Find the probability distribution of $X$. (b) Find the expected prize. (c) Given that the contestant wins some prize, find the probability that the prize is ₹10000.',
    answer: '(a) $P(X = 0) = 0.2$. $P(X = 1000) = 0.8 \\times 0.4 = 0.32$. $P(X = 4000) = 0.8 \\times 0.6 \\times 0.5 = 0.24$. $P(X = 10000) = 0.8 \\times 0.6 \\times 0.5 = 0.24$. These add to $1$. (b) $E(X) = 0 + 1000(0.32) + 4000(0.24) + 10000(0.24) = 320 + 960 + 2400 = 3680$. The expected prize is ₹3680. (c) $P(X > 0) = 0.8$, so $P(X = 10000 \\mid X > 0) = \\frac{0.24}{0.8} = \\frac{3}{10}$.',
    steps: [
      { step: '(a) Gets $P(X = 0) = 0.2$ and $P(X = 1000) = 0.32$', marks: 1 },
      { step: '(a) Gets $P(X = 4000) = P(X = 10000) = 0.24$ and checks the sum is $1$', marks: 1 },
      { step: '(b) Gets $E(X) = 3680$', marks: 1 },
      { step: '(c) Uses $P(X > 0) = 0.8$', marks: 1 },
      { step: '(c) Gets $\\frac{3}{10}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r3-d08', chapter: C, topic: COND, type: 'long', complexity: 'medium', marks: 5,
    text: 'Two different numbers are chosen together at random from $1, 2, 3, \\dots, 9$. Let $A$ be the event "the sum of the two numbers is even" and $B$ the event "the sum is greater than $10$". Find (a) $P(A)$; (b) $P(B \\mid A)$; (c) $P(A \\mid B)$; (d) and decide whether $A$ and $B$ are independent.',
    answer: 'There are $\\binom{9}{2} = 36$ equally likely pairs. (a) The sum is even if both are odd ($\\binom{5}{2} = 10$ pairs) or both are even ($\\binom{4}{2} = 6$ pairs): $16$ pairs, so $P(A) = \\frac{16}{36} = \\frac{4}{9}$. (b) Pairs in $A \\cap B$ (even sum above $10$): $(3, 9), (4, 8), (5, 7), (5, 9), (6, 8), (7, 9)$, which is $6$ pairs. So $P(B \\mid A) = \\frac{6}{16} = \\frac{3}{8}$. (c) Pairs with sum above $10$: sums $11$ to $17$ give $4 + 3 + 3 + 2 + 2 + 1 + 1 = 16$ pairs, so $P(A \\mid B) = \\frac{6}{16} = \\frac{3}{8}$. (d) $P(A \\cap B) = \\frac{6}{36} = \\frac{1}{6}$, while $P(A)P(B) = \\frac{4}{9} \\cdot \\frac{4}{9} = \\frac{16}{81}$. These are not equal, so $A$ and $B$ are not independent.',
    steps: [
      { step: '(a) Counts $16$ even-sum pairs out of $36$ and gets $\\frac{4}{9}$', marks: 1 },
      { step: '(b) Lists the $6$ pairs of $A \\cap B$', marks: 1 },
      { step: '(b) Gets $P(B \\mid A) = \\frac{3}{8}$', marks: 1 },
      { step: '(c) Counts $16$ pairs in $B$ and gets $P(A \\mid B) = \\frac{3}{8}$', marks: 1 },
      { step: '(d) Compares $\\frac{1}{6}$ with $\\frac{16}{81}$ and concludes not independent', marks: 1 },
    ],
  },

  // ---------------- Section E (4 marks, case studies) ----------------
  {
    id: 'c12-prob-r3-e01', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In an online coding contest, $70\\%$ of the participants use laptops and $30\\%$ use phones. The proctoring software wrongly flags $2\\%$ of the laptop users and $8\\%$ of the phone users as suspicious, even though none of them cheated. A participant is chosen at random.',
    answer: '(i) $0.024$; (ii) $0.038$; (iii) $\\frac{12}{19}$, OR $\\frac{343}{481}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the participant uses a phone and is flagged.', answer: '$0.3 \\times 0.08 = 0.024$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the participant is flagged.', answer: '$P(\\text{flagged}) = 0.7(0.02) + 0.3(0.08) = 0.014 + 0.024 = 0.038$.' },
      { label: '(iii)', marks: 2, text: 'Given that the participant is flagged, find the probability that the participant uses a phone. OR Given that the participant is not flagged, find the probability that the participant uses a laptop.', answer: '$P(\\text{phone} \\mid \\text{flagged}) = \\frac{0.024}{0.038} = \\frac{12}{19}$. OR $P(\\text{not flagged}) = 0.962$ and $P(\\text{laptop} \\cap \\text{not flagged}) = 0.7 \\times 0.98 = 0.686$, so the probability is $\\frac{0.686}{0.962} = \\frac{343}{481}$.' },
    ],
  },
  {
    id: 'c12-prob-r3-e02', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A college cricket team plays on three kinds of pitches: spin-friendly ($30\\%$ of matches), pace-friendly ($50\\%$) and flat ($20\\%$). The team wins with probability $0.7$ on a spin-friendly pitch, $0.5$ on a pace-friendly pitch and $0.4$ on a flat pitch. A match is chosen at random from its records.',
    answer: '(i) $0.08$; (ii) $\\frac{27}{50}$; (iii) $\\frac{7}{18}$, OR $\\frac{25}{46}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the match was on a flat pitch and was won.', answer: '$0.2 \\times 0.4 = 0.08$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the team won the match.', answer: '$P(\\text{win}) = 0.3(0.7) + 0.5(0.5) + 0.2(0.4) = 0.21 + 0.25 + 0.08 = 0.54 = \\frac{27}{50}$.' },
      { label: '(iii)', marks: 2, text: 'Given that the team won, find the probability that the pitch was spin-friendly. OR Given that the team lost, find the probability that the pitch was pace-friendly.', answer: '$P(\\text{spin} \\mid \\text{win}) = \\frac{0.21}{0.54} = \\frac{7}{18}$. OR $P(\\text{lose}) = 0.46$ and $P(\\text{pace} \\cap \\text{lose}) = 0.5 \\times 0.5 = 0.25$, so the probability is $\\frac{0.25}{0.46} = \\frac{25}{46}$.' },
    ],
  },
  {
    id: 'c12-prob-r3-e03', chapter: C, topic: BAYES, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'A packing machine is in good condition on $80\\%$ of the days and faulty on the other $20\\%$. When it is in good condition, each packet it makes is defective with probability $0.02$; when faulty, with probability $0.30$. On a randomly chosen day, one packet is inspected.',
    answer: '(i) $\\frac{19}{250}$; (ii) $0.14$; (iii) $\\frac{15}{19}$, OR $\\frac{225}{229}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the inspected packet is defective.', answer: '$P(\\text{defective}) = 0.8(0.02) + 0.2(0.30) = 0.016 + 0.06 = 0.076 = \\frac{19}{250}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the machine is faulty and the packet is not defective.', answer: '$0.2 \\times 0.70 = 0.14$.' },
      { label: '(iii)', marks: 2, text: 'Given that the packet is defective, find the probability that the machine is faulty. OR Two packets are inspected on that day and both are defective. Find the probability that the machine is faulty.', answer: '$P(\\text{faulty} \\mid \\text{defective}) = \\frac{0.06}{0.076} = \\frac{15}{19}$. OR Given the machine\'s state, the packets are independent: $P(\\text{faulty and both defective}) = 0.2(0.09) = 0.018$ and $P(\\text{good and both defective}) = 0.8(0.0004) = 0.00032$. The probability is $\\frac{0.018}{0.01832} = \\frac{225}{229}$.' },
    ],
  },
  {
    id: 'c12-prob-r3-e04', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery cyclist records the number of punctures $X$ in a week. The probabilities are $P(X = 0) = 0.5$, $P(X = 1) = 0.3$, $P(X = 2) = a$ and $P(X = 3) = 0.05$, and no week has more than $3$ punctures.',
    answer: '(i) $a = 0.15$; (ii) $0.5$; (iii) $\\frac{3}{4}$, OR ₹60.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the value of $a$.', answer: 'The probabilities add to $1$: $0.5 + 0.3 + a + 0.05 = 1$, so $a = 0.15$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that there is at least one puncture in a week.', answer: '$P(X \\geq 1) = 1 - 0.5 = 0.5$.' },
      { label: '(iii)', marks: 2, text: 'Find the expected number of punctures in a week. OR Each puncture costs ₹80 to repair. Find the expected weekly repair cost.', answer: '$E(X) = 0 + 1(0.3) + 2(0.15) + 3(0.05) = 0.3 + 0.3 + 0.15 = 0.75 = \\frac{3}{4}$. OR Expected cost $= 80 \\times 0.75 = ₹60$.' },
    ],
  },
  {
    id: 'c12-prob-r3-e05', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'On a quiz show, a box holds $5$ sealed envelopes containing ₹0, ₹0, ₹100, ₹100 and ₹500. A contestant picks $2$ envelopes together at random and wins the total amount in them. Let $X$ be the amount won in rupees.',
    answer: '(i) $\\frac{1}{10}$; (ii) $\\frac{2}{5}$; (iii) ₹280, OR $\\frac{2}{5}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find $P(X = 0)$.', answer: 'Both ₹0 envelopes must be picked: $\\frac{1}{\\binom{5}{2}} = \\frac{1}{10}$.' },
      { label: '(ii)', marks: 1, text: 'Find $P(X \\geq 500)$.', answer: '$X = 500$ for one ₹0 and the ₹500 envelope ($2$ pairs); $X = 600$ for one ₹100 and the ₹500 envelope ($2$ pairs). So $P(X \\geq 500) = \\frac{4}{10} = \\frac{2}{5}$.' },
      { label: '(iii)', marks: 2, text: 'Find the expected amount won. OR Given that the contestant wins more than ₹100, find the probability that the contestant wins ₹600.', answer: 'The distribution is $X = 0, 100, 200, 500, 600$ with probabilities $\\frac{1}{10}, \\frac{4}{10}, \\frac{1}{10}, \\frac{2}{10}, \\frac{2}{10}$. $E(X) = \\frac{0 + 400 + 200 + 1000 + 1200}{10} = 280$. OR $P(X > 100) = \\frac{1 + 2 + 2}{10} = \\frac{5}{10}$ and $P(X = 600) = \\frac{2}{10}$, so the probability is $\\frac{2}{5}$.' },
    ],
  },
  {
    id: 'c12-prob-r3-e06', chapter: C, topic: MULT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a tennis match, a player\'s first serve lands in with probability $0.6$. If the first serve is a fault, the player takes a second serve, which lands in with probability $0.9$. If the second serve also faults, it is a double fault.',
    answer: '(i) $0.04$; (ii) $0.96$; (iii) $\\frac{5}{8}$, OR $\\frac{3}{5}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability of a double fault on a service point.', answer: '$0.4 \\times 0.1 = 0.04$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the serve is in (on the first or the second attempt).', answer: '$P(\\text{in}) = 0.6 + 0.4(0.9) = 0.6 + 0.36 = 0.96$, which is also $1 - 0.04$.' },
      { label: '(iii)', marks: 2, text: 'Given that the serve is in, find the probability that it was the first serve. OR The player wins the point with probability $0.7$ if the first serve is in and $0.5$ if the second serve is in (and loses it on a double fault). Find the probability that the player wins the point.', answer: '$P(\\text{first serve} \\mid \\text{in}) = \\frac{0.6}{0.96} = \\frac{5}{8}$. OR $P(\\text{win}) = 0.6(0.7) + 0.36(0.5) = 0.42 + 0.18 = 0.6 = \\frac{3}{5}$.' },
    ],
  },
];
