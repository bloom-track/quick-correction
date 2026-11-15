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

export const CH13_PROB_R4: Class12Question[] = [
  {
    id: 'c12-prob-r4-a01', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A two-digit number is chosen at random from $10, 11, \\dots, 99$ (each equally likely). Given that it is a multiple of $7$, the probability that it is even is',
    options: ['$\\frac{6}{13}$', '$\\frac{7}{13}$', '$\\frac{1}{2}$', '$\\frac{7}{90}$'],
    answer: 'Correct option: B) $\\frac{7}{13}$. The two-digit multiples of $7$ are $14, 21, \\dots, 98$, which is $13$ numbers, and the even ones are $14, 28, \\dots, 98$, which is $7$ numbers, so the probability is $\\frac{7}{13}$. Option A counts only $6$ of the $13$.',
  },
  {
    id: 'c12-prob-r4-a02', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'In a group of $60$ people, $36$ play chess, $24$ play carrom and $12$ play both. A person is chosen at random. Given that the person plays exactly one of the two games, the probability that the person plays chess is',
    options: ['$\\frac{3}{5}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{2}{5}$'],
    answer: 'Correct option: C) $\\frac{2}{3}$. Chess only: $36 - 12 = 24$ people; carrom only: $24 - 12 = 12$ people. Exactly one game: $36$ people, so the probability is $\\frac{24}{36} = \\frac{2}{3}$. Option A is the unconditional $P(\\text{chess}) = \\frac{36}{60}$.',
  },
  {
    id: 'c12-prob-r4-a03', chapter: C, topic: COND, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'Four fair coins are tossed together. Given that at least one of them shows a head, the probability that exactly two show heads is',
    options: ['$\\frac{3}{8}$', '$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{6}{11}$'],
    answer: 'Correct option: B) $\\frac{2}{5}$. There are $16$ equally likely outcomes, of which $15$ have at least one head and $6$ have exactly two heads, so the probability is $\\frac{6}{15} = \\frac{2}{5}$. Option A is $\\frac{6}{16}$, which forgets to restrict to the $15$ outcomes.',
  },
  {
    id: 'c12-prob-r4-a04', chapter: C, topic: COND, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'For events $A$ and $B$, $P(A) = 0.6$, $P(B) = 0.5$ and $P(A \\mid B) = 0.7$. Then $P(B \\mid A)$ is',
    options: ['$\\frac{7}{10}$', '$\\frac{7}{12}$', '$\\frac{7}{20}$', '$\\frac{5}{6}$'],
    answer: 'Correct option: B) $\\frac{7}{12}$. $P(A \\cap B) = P(A \\mid B)\\,P(B) = 0.35$, so $P(B \\mid A) = \\frac{0.35}{0.6} = \\frac{7}{12}$. Option A is the given $P(A \\mid B)$ and option C is $P(A \\cap B)$.',
  },
  {
    id: 'c12-prob-r4-a05', chapter: C, topic: COND, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): For any events $A$ and $B$ with $0 < P(B) < 1$, $P(A \\mid B) + P(A \\mid B\') = 1$.\nReason (R): For any events $A$ and $B$ with $P(B) > 0$, $P(A \\mid B) + P(A\' \\mid B) = 1$.',
    options: AR_OPTIONS,
    answer: 'Correct option: D) (A) is false, but (R) is true. (R) is true, because $P(\\cdot \\mid B)$ is a probability and $A$, $A\'$ split the outcomes in $B$. (A) is false: if $A$ is the sure event, then $P(A \\mid B) + P(A \\mid B\') = 1 + 1 = 2$. The conditioning events $B$ and $B\'$ differ, so the two probabilities need not add to $1$.',
  },
  {
    id: 'c12-prob-r4-a06', chapter: C, topic: MULT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Two machines $M_1$ and $M_2$ work independently on a given day with probabilities $0.9$ and $0.8$ respectively. Given that at least one of them works, the probability that both work is',
    options: ['$\\frac{18}{25}$', '$\\frac{9}{10}$', '$\\frac{36}{49}$', '$\\frac{4}{5}$'],
    answer: 'Correct option: C) $\\frac{36}{49}$. $P(\\text{both}) = 0.72$ and $P(\\text{at least one}) = 1 - 0.1 \\times 0.2 = 0.98$, so the required probability is $\\frac{0.72}{0.98} = \\frac{36}{49}$. Option A is the unconditional $0.72$.',
  },
  {
    id: 'c12-prob-r4-a07', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: '$A$ and $B$ are independent events with $P(A) = \\frac{1}{2}$ and $P(B) = \\frac{1}{3}$. Then $P(A\' \\cup B\')$ is',
    options: ['$\\frac{1}{6}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$', '$\\frac{1}{3}$'],
    answer: 'Correct option: C) $\\frac{5}{6}$. $P(A\' \\cup B\') = 1 - P(A \\cap B) = 1 - \\frac{1}{2}\\cdot\\frac{1}{3} = \\frac{5}{6}$. Option A is $P(A \\cap B)$ itself.',
  },
  {
    id: 'c12-prob-r4-a08', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A bag has $3$ red and $2$ green balls. A ball is drawn at random, its colour noted and it is put back; then a second ball is drawn at random. The probability that both balls have the same colour is',
    options: ['$\\frac{12}{25}$', '$\\frac{6}{25}$', '$\\frac{13}{25}$', '$\\frac{9}{25}$'],
    answer: 'Correct option: C) $\\frac{13}{25}$. $P(\\text{both red}) = \\frac{9}{25}$ and $P(\\text{both green}) = \\frac{4}{25}$; the draws are independent because of the replacement, so the total is $\\frac{13}{25}$. Option D counts only the red pair.',
  },
  {
    id: 'c12-prob-r4-a09', chapter: C, topic: MULT, type: 'mcq', complexity: 'easy', marks: 1,
    text: '$A$ and $B$ are independent events with $P(A \\cap B) = 0.12$ and $P(A \\cap B\') = 0.28$. Then $P(A\' \\cap B\')$ is',
    options: ['$0.58$', '$0.18$', '$0.42$', '$0.12$'],
    answer: 'Correct option: C) $0.42$. $P(A) = 0.12 + 0.28 = 0.4$, and by independence $P(B) = \\frac{0.12}{0.4} = 0.3$. Then $P(A\' \\cap B\') = 0.6 \\times 0.7 = 0.42$. Option A is $P(A \\cup B)$ and option B is $P(A\' \\cap B)$.',
  },
  {
    id: 'c12-prob-r4-a10', chapter: C, topic: MULT, type: 'assertion_reason', complexity: 'easy', marks: 1,
    text: 'Assertion (A): If $A$ and $B$ are independent events with $P(A) = 0.3$ and $P(B) = 0.8$, then $P(A \\cup B) = 0.86$.\nReason (R): For independent events $A$ and $B$, $P(A \\cup B) = P(A) + P(B)$.',
    options: AR_OPTIONS,
    answer: 'Correct option: C) (A) is true, but (R) is false. $P(A \\cup B) = 0.3 + 0.8 - 0.3 \\times 0.8 = 0.86$, so (A) is true. (R) is false: $P(A \\cup B) = P(A) + P(B)$ holds for mutually exclusive events, not for independent events with non-zero probabilities.',
  },
  {
    id: 'c12-prob-r4-a11', chapter: C, topic: BAYES, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A shop buys phones from suppliers $X$, $Y$ and $Z$, who provide $50\\%$, $30\\%$ and $20\\%$ of its stock. The fractions of phones returned by customers are $2\\%$, $4\\%$ and $5\\%$ for $X$, $Y$ and $Z$. A phone sold is chosen at random. The probability that it is returned is',
    options: ['$0.11$', '$0.032$', '$0.037$', '$0.05$'],
    answer: 'Correct option: B) $0.032$. $P(\\text{returned}) = 0.5(0.02) + 0.3(0.04) + 0.2(0.05) = 0.01 + 0.012 + 0.01 = 0.032$. Option A adds the three percentages without weighting, and option C averages them.',
  },
  {
    id: 'c12-prob-r4-a12', chapter: C, topic: BAYES, type: 'mcq', complexity: 'medium', marks: 1,
    text: '$20\\%$ of the players in a club are bowlers. A bowler is fit to play on $90\\%$ of match days and a non-bowler on $30\\%$ of match days. A player found fit on a given match day is chosen at random. The probability that the player is a bowler is',
    options: ['$\\frac{1}{5}$', '$\\frac{9}{50}$', '$\\frac{3}{7}$', '$\\frac{9}{10}$'],
    answer: 'Correct option: C) $\\frac{3}{7}$. $P(\\text{bowler} \\cap \\text{fit}) = 0.2 \\times 0.9 = 0.18$ and $P(\\text{non-bowler} \\cap \\text{fit}) = 0.8 \\times 0.3 = 0.24$, so by Bayes\' theorem the probability is $\\frac{0.18}{0.42} = \\frac{3}{7}$. Option B is only the numerator $0.18$.',
  },
  {
    id: 'c12-prob-r4-a13', chapter: C, topic: BAYES, type: 'assertion_reason', complexity: 'medium', marks: 1,
    text: 'Assertion (A): Events $E_1$ and $E_2$ form a partition of a sample space, and an event $A$ satisfies $P(A \\mid E_1) = P(A \\mid E_2) = 0.3$. Then $P(E_1 \\mid A) = P(E_1)$.\nReason (R): $P(A) = P(E_1)\\,P(A \\mid E_1) + P(E_2)\\,P(A \\mid E_2)$.',
    options: AR_OPTIONS,
    answer: 'Correct option: A) Both (A) and (R) are true, and (R) is the correct explanation of (A). (R) is the theorem of total probability, so it is true. Using it, $P(A) = 0.3\\,(P(E_1) + P(E_2)) = 0.3$, and Bayes\' theorem gives $P(E_1 \\mid A) = \\frac{P(E_1) \\times 0.3}{0.3} = P(E_1)$. So (A) is true and (R) is what is used to prove it.',
  },
  {
    id: 'c12-prob-r4-a14', chapter: C, topic: RV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A fair die is thrown twice. If $X$ is the number of sixes obtained, the mean of $X$ is',
    options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{36}$', '$\\frac{5}{18}$'],
    answer: 'Correct option: B) $\\frac{1}{3}$. $P(X = 0) = \\frac{25}{36}$, $P(X = 1) = \\frac{10}{36}$, $P(X = 2) = \\frac{1}{36}$, so the mean is $\\frac{10 + 2}{36} = \\frac{1}{3}$. Option D is $P(X = 1)$ and option A is the chance of a six in one throw.',
  },
  {
    id: 'c12-prob-r4-a15', chapter: C, topic: RV, type: 'mcq', complexity: 'easy', marks: 1,
    text: 'A bag has $3$ red and $2$ green balls. Two balls are drawn one after the other, each ball being put back before the next draw. If $X$ is the number of red balls obtained, the mean of $X$ is',
    options: ['$\\frac{3}{5}$', '$\\frac{6}{5}$', '$\\frac{12}{25}$', '$\\frac{4}{5}$'],
    answer: 'Correct option: B) $\\frac{6}{5}$. $P(X = 0) = \\frac{4}{25}$, $P(X = 1) = \\frac{12}{25}$, $P(X = 2) = \\frac{9}{25}$, so the mean is $\\frac{12 + 18}{25} = \\frac{6}{5}$. Option A is the chance of red in one draw and option C is $P(X = 1)$.',
  },
  {
    id: 'c12-prob-r4-a16', chapter: C, topic: RV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A player pays $₹20$ and draws one card from a well-shuffled pack of $52$ cards (each card equally likely). The player receives $₹130$ for an ace, $₹26$ for a king and nothing otherwise. The player\'s mean net gain, in rupees, is',
    options: ['$-20$', '$12$', '$-8$', '$8$'],
    answer: 'Correct option: C) $-8$. The mean amount received is $130 \\times \\frac{4}{52} + 26 \\times \\frac{4}{52} = 10 + 2 = 12$. Subtracting the $₹20$ paid gives $-8$. Option B forgets the entry fee.',
  },
  {
    id: 'c12-prob-r4-a17', chapter: C, topic: RV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A fair coin is tossed $4$ times. Let $X$ be the absolute difference between the number of heads and the number of tails. The mean of $X$ is',
    options: ['$1$', '$\\frac{3}{2}$', '$2$', '$\\frac{1}{2}$'],
    answer: 'Correct option: B) $\\frac{3}{2}$. Of the $16$ equally likely outcomes, $X = 0$ for $6$ outcomes (two heads), $X = 2$ for $8$ outcomes (three of one kind) and $X = 4$ for $2$ outcomes. The mean is $\\frac{0 \\cdot 6 + 2 \\cdot 8 + 4 \\cdot 2}{16} = \\frac{3}{2}$. Option C is the mean number of heads.',
  },
  {
    id: 'c12-prob-r4-a18', chapter: C, topic: RV, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'A random variable $X$ takes the values $1, 2, 3$ with $P(X = x) = k(x^{2} + 1)$. The mean of $X$ is',
    options: ['$2$', '$\\frac{42}{17}$', '$\\frac{17}{6}$', '$42$'],
    answer: 'Correct option: B) $\\frac{42}{17}$. $k(2 + 5 + 10) = 1$ gives $k = \\frac{1}{17}$, so the mean is $\\frac{1 \\cdot 2 + 2 \\cdot 5 + 3 \\cdot 10}{17} = \\frac{42}{17}$. Option A is the plain average of the values and option D forgets to divide by $17$.',
  },
  {
    id: 'c12-prob-r4-a19', chapter: C, topic: COND, type: 'mcq', complexity: 'hard', marks: 1,
    text: 'A number is drawn at random from $\\{1, 2, 3, 4\\}$, noted and put back, and then a second number is drawn. Given that the product of the two numbers is even, the probability that both numbers are even is',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
    answer: 'Correct option: B) $\\frac{1}{3}$. Of the $16$ equally likely pairs, $4$ have both numbers odd, so $12$ have an even product; of these, $4$ have both numbers even. The probability is $\\frac{4}{12} = \\frac{1}{3}$. Option A is the unconditional probability of two even numbers and option D is $P(\\text{even product})$.',
  },
  {
    id: 'c12-prob-r4-a20', chapter: C, topic: MULT, type: 'mcq', complexity: 'medium', marks: 1,
    text: 'Three independent sensors detect a fault with probabilities $0.5$, $0.4$ and $0.2$ respectively. The probability that at most one sensor detects the fault is',
    options: ['$0.46$', '$0.24$', '$0.7$', '$0.3$'],
    answer: 'Correct option: C) $0.7$. None detects: $0.5 \\times 0.6 \\times 0.8 = 0.24$. Exactly one detects: $0.5(0.6)(0.8) + 0.5(0.4)(0.8) + 0.5(0.6)(0.2) = 0.24 + 0.16 + 0.06 = 0.46$. At most one: $0.24 + 0.46 = 0.7$. Option A is "exactly one" and option B is "none".',
  },
  {
    id: 'c12-prob-r4-b01', chapter: C, topic: COND, type: 'short', complexity: 'easy', marks: 2,
    text: 'Of $40$ students in a class, $25$ like mathematics, $18$ like physics and $8$ like neither subject. A student is chosen at random. Find the probability that the student likes mathematics, given that the student likes physics.',
    answer: '$32$ students like at least one subject, so the number liking both is $25 + 18 - 32 = 11$. $P(\\text{maths} \\mid \\text{physics}) = \\frac{11/40}{18/40} = \\frac{11}{18}$.',
    steps: [
      { step: 'Finds that $11$ students like both subjects', marks: 1 },
      { step: 'Gets $P(\\text{maths} \\mid \\text{physics}) = \\frac{11}{18}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-b02', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: 'Two fair dice are thrown. Let $F$ be the event "the first die shows $3$". Check whether $F$ is independent of (i) the event $E_1$: "the sum is $7$"; (ii) the event $E_2$: "the sum is $8$".',
    answer: '$P(F) = \\frac{1}{6}$. (i) $P(E_1) = \\frac{6}{36} = \\frac{1}{6}$ and $E_1 \\cap F = \\{(3, 4)\\}$, so $P(E_1 \\cap F) = \\frac{1}{36} = P(E_1)P(F)$: independent. (ii) $P(E_2) = \\frac{5}{36}$ and $E_2 \\cap F = \\{(3, 5)\\}$, so $P(E_2 \\cap F) = \\frac{1}{36}$, but $P(E_2)P(F) = \\frac{5}{216}$: not independent.',
    steps: [
      { step: 'Part (i): computes $P(E_1)$, $P(F)$, $P(E_1 \\cap F)$ and concludes independent', marks: 1 },
      { step: 'Part (ii): computes $P(E_2) = \\frac{5}{36}$, $P(E_2 \\cap F) = \\frac{1}{36}$ and concludes not independent', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-b03', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 2,
    text: '$60\\%$ of the cars of a taxi company run on petrol and the rest on CNG. On a trip, a petrol car breaks down with probability $0.03$ and a CNG car with probability $0.01$. A trip is chosen at random and the car broke down. Find the probability that it was a CNG car.',
    answer: '$P(\\text{breakdown}) = 0.6(0.03) + 0.4(0.01) = 0.018 + 0.004 = 0.022$. $P(\\text{CNG} \\mid \\text{breakdown}) = \\frac{0.004}{0.022} = \\frac{2}{11}$.',
    steps: [
      { step: 'Total probability $P(\\text{breakdown}) = 0.022$', marks: 1 },
      { step: 'Bayes\' theorem gives $\\frac{2}{11}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-b04', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 2,
    text: 'A bag has six tickets numbered $1, 2, 2, 3, 3, 3$. One ticket is drawn at random (each ticket equally likely) and $X$ is the number on it. Write the probability distribution of $X$ and find its mean.',
    answer: '$P(X = 1) = \\frac{1}{6}$, $P(X = 2) = \\frac{2}{6} = \\frac{1}{3}$, $P(X = 3) = \\frac{3}{6} = \\frac{1}{2}$. Mean $= 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{3} + 3 \\cdot \\frac{1}{2} = \\frac{1 + 4 + 9}{6} = \\frac{7}{3}$.',
    steps: [
      { step: 'Writes the distribution $\\frac{1}{6}, \\frac{1}{3}, \\frac{1}{2}$', marks: 1 },
      { step: 'Mean $= \\frac{7}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-b05', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 2,
    text: 'For events $A$ and $B$, $P(A) = \\frac{3}{8}$, $P(B) = \\frac{1}{2}$ and $P(A \\cap B) = \\frac{1}{4}$. Find $P(A\' \\mid B\')$ and $P(B \\mid A\')$.',
    answer: '$P(A \\cup B) = \\frac{3}{8} + \\frac{1}{2} - \\frac{1}{4} = \\frac{5}{8}$, so $P(A\' \\cap B\') = \\frac{3}{8}$. $P(A\' \\mid B\') = \\frac{3/8}{1/2} = \\frac{3}{4}$. $P(A\' \\cap B) = P(B) - P(A \\cap B) = \\frac{1}{4}$ and $P(A\') = \\frac{5}{8}$, so $P(B \\mid A\') = \\frac{1/4}{5/8} = \\frac{2}{5}$.',
    steps: [
      { step: 'Finds $P(A\' \\cap B\') = \\frac{3}{8}$ and $P(A\' \\mid B\') = \\frac{3}{4}$', marks: 1 },
      { step: 'Finds $P(A\' \\cap B) = \\frac{1}{4}$ and $P(B \\mid A\') = \\frac{2}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-b06', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 2,
    text: 'A bag has $5$ white and $3$ black balls. Three balls are drawn one after another, each ball being put back before the next draw. Find the probability that exactly two of the three balls are white.',
    answer: 'The draws are independent. Each arrangement with two white and one black (WWB, WBW, BWW) has probability $\\frac{5}{8}\\cdot\\frac{5}{8}\\cdot\\frac{3}{8} = \\frac{75}{512}$. There are $3$ such arrangements, so the probability is $\\frac{225}{512}$.',
    steps: [
      { step: 'Lists the three arrangements, each with probability $\\frac{75}{512}$', marks: 1 },
      { step: 'Adds to get $\\frac{225}{512}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c01', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'Eight tickets are numbered $1$ to $8$, and two are drawn together at random (every pair equally likely). Let $S$ be the event "the sum of the two numbers is even" and $M$ the event "the larger number is $6$". Find $P(M \\mid S)$ and $P(S \\mid M)$.',
    answer: 'Total pairs: $\\binom{8}{2} = 28$. $S$: both odd ($6$ pairs) or both even ($6$ pairs), so $n(S) = 12$. $M$: pairs $\\{x, 6\\}$ with $x < 6$, so $n(M) = 5$. $S \\cap M = \\{\\{2, 6\\}, \\{4, 6\\}\\}$ has $2$ pairs. $P(M \\mid S) = \\frac{2}{12} = \\frac{1}{6}$ and $P(S \\mid M) = \\frac{2}{5}$.',
    steps: [
      { step: 'Counts $n(S) = 12$ and $n(M) = 5$', marks: 1 },
      { step: 'Finds $n(S \\cap M) = 2$', marks: 1 },
      { step: 'Gets $P(M \\mid S) = \\frac{1}{6}$ and $P(S \\mid M) = \\frac{2}{5}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c02', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'For events $A$, $B$, $C$ with $P(B) = 0.6$, it is given that $P(A \\mid B) = 0.4$, $P(C \\mid B) = 0.5$ and $P(A \\cap C \\mid B) = 0.2$. Find (i) $P(A \\cup C \\mid B)$; (ii) $P(A\' \\cap C\' \\mid B)$; (iii) $P((A \\cup C) \\cap B)$.',
    answer: 'Conditional probabilities given $B$ obey the same rules as ordinary probabilities. (i) $P(A \\cup C \\mid B) = 0.4 + 0.5 - 0.2 = 0.7$. (ii) $A\' \\cap C\'$ is the complement of $A \\cup C$, so $P(A\' \\cap C\' \\mid B) = 1 - 0.7 = 0.3$. (iii) $P((A \\cup C) \\cap B) = P(A \\cup C \\mid B)\\,P(B) = 0.7 \\times 0.6 = 0.42$.',
    steps: [
      { step: '(i) Uses the addition rule for conditional probabilities: $0.7$', marks: 1 },
      { step: '(ii) Uses the complement: $0.3$', marks: 1 },
      { step: '(iii) Multiplies by $P(B)$: $0.42$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c03', chapter: C, topic: COND, type: 'short', complexity: 'medium', marks: 3,
    text: 'Two cards are drawn one after the other, without replacement, from a well-shuffled pack of $52$ cards. Find the probability that (i) the second card is a king, given that the first is a king; (ii) the second card is a king, given that the first is not a king; (iii) the second card is a king.',
    answer: '(i) $3$ kings remain among $51$ cards: $\\frac{3}{51} = \\frac{1}{17}$. (ii) $4$ kings remain among $51$ cards: $\\frac{4}{51}$. (iii) By total probability, $\\frac{4}{52}\\cdot\\frac{3}{51} + \\frac{48}{52}\\cdot\\frac{4}{51} = \\frac{12 + 192}{2652} = \\frac{204}{2652} = \\frac{1}{13}$.',
    steps: [
      { step: '(i) $\\frac{1}{17}$', marks: 1 },
      { step: '(ii) $\\frac{4}{51}$', marks: 1 },
      { step: '(iii) Total probability gives $\\frac{1}{13}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c04', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: '$A$ and $B$ are independent events with $P(A) = 0.5$ and $P(A \\cup B) = 0.8$. A third event $C$ satisfies $P(C \\mid A \\cap B) = 0.5$. Find $P(B)$, $P(A \\cap B \\cap C)$ and $P(A \\cap B \\cap C\')$.',
    answer: 'Let $P(B) = p$. Independence gives $0.5 + p - 0.5p = 0.8$, so $p = 0.6$. Then $P(A \\cap B) = 0.5 \\times 0.6 = 0.3$. By the multiplication theorem, $P(A \\cap B \\cap C) = P(A \\cap B)\\,P(C \\mid A \\cap B) = 0.3 \\times 0.5 = 0.15$, and $P(A \\cap B \\cap C\') = 0.3 \\times (1 - 0.5) = 0.15$.',
    steps: [
      { step: 'Uses independence and the addition rule to get $P(B) = 0.6$', marks: 1 },
      { step: 'Gets $P(A \\cap B) = 0.3$', marks: 1 },
      { step: 'Applies the multiplication theorem to get both $0.15$ and $0.15$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c05', chapter: C, topic: MULT, type: 'short', complexity: 'hard', marks: 3,
    text: '$E$ and $F$ are independent events with $P(E \\cap F\') = \\frac{1}{4}$ and $P(E\' \\cap F) = \\frac{1}{6}$, and $P(E) > \\frac{1}{2}$. Find $P(E)$ and $P(F)$.',
    answer: 'Let $P(E) = x$ and $P(F) = y$. Independence gives $x(1 - y) = \\frac{1}{4}$ and $(1 - x)y = \\frac{1}{6}$. Expanding, $x - xy = \\frac{1}{4}$ and $y - xy = \\frac{1}{6}$; subtracting, $x - y = \\frac{1}{12}$. Substituting $x = y + \\frac{1}{12}$ in the second equation gives $12y^{2} - 11y + 2 = 0$, so $y = \\frac{2}{3}$ or $y = \\frac{1}{4}$, giving $x = \\frac{3}{4}$ or $x = \\frac{1}{3}$. Since $P(E) > \\frac{1}{2}$, $x = \\frac{3}{4}$. So $P(E) = \\frac{3}{4}$ and $P(F) = \\frac{2}{3}$.',
    steps: [
      { step: 'Writes $x(1-y) = \\frac{1}{4}$ and $(1-x)y = \\frac{1}{6}$ using independence', marks: 1 },
      { step: 'Derives $x - y = \\frac{1}{12}$ and the quadratic $12y^{2} - 11y + 2 = 0$', marks: 1 },
      { step: 'Solves and uses $P(E) > \\frac{1}{2}$ to reject $(\\frac{1}{3}, \\frac{1}{4})$, giving $P(E) = \\frac{3}{4}$, $P(F) = \\frac{2}{3}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c06', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'A drawer holds $8$ socks: $4$ black, $2$ white and $2$ grey. Two socks are pulled out one after the other at random, without replacement. Find the probability that (i) both socks have the same colour; (ii) the socks have different colours; (iii) at least one sock is white.',
    answer: '(i) $P(\\text{BB}) = \\frac{4}{8}\\cdot\\frac{3}{7} = \\frac{3}{14}$, $P(\\text{WW}) = \\frac{2}{8}\\cdot\\frac{1}{7} = \\frac{1}{28}$, $P(\\text{GG}) = \\frac{1}{28}$, so the total is $\\frac{6 + 1 + 1}{28} = \\frac{2}{7}$. (ii) $1 - \\frac{2}{7} = \\frac{5}{7}$. (iii) $P(\\text{no white}) = \\frac{6}{8}\\cdot\\frac{5}{7} = \\frac{15}{28}$, so $P(\\text{at least one white}) = \\frac{13}{28}$.',
    steps: [
      { step: '(i) Computes the three same-colour probabilities and adds to $\\frac{2}{7}$', marks: 1 },
      { step: '(ii) $\\frac{5}{7}$', marks: 1 },
      { step: '(iii) Uses the complement to get $\\frac{13}{28}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c07', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'One coin is fair and another has $P(\\text{head}) = \\frac{2}{3}$. One of the two coins is chosen at random (each equally likely) and tossed, and it shows a head. Assume that tosses of the same coin are independent. Find (i) the probability of getting a head on the first toss; (ii) the probability that the biased coin was chosen; (iii) the probability that a second toss of the same coin also shows a head.',
    answer: '(i) $P(H) = \\frac{1}{2}\\cdot\\frac{1}{2} + \\frac{1}{2}\\cdot\\frac{2}{3} = \\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12}$. (ii) $P(\\text{biased} \\mid H) = \\frac{1/3}{7/12} = \\frac{4}{7}$, so $P(\\text{fair} \\mid H) = \\frac{3}{7}$. (iii) $P(H_2 \\mid H_1) = \\frac{3}{7}\\cdot\\frac{1}{2} + \\frac{4}{7}\\cdot\\frac{2}{3} = \\frac{3}{14} + \\frac{8}{21} = \\frac{25}{42}$.',
    steps: [
      { step: '(i) $\\frac{7}{12}$', marks: 1 },
      { step: '(ii) $\\frac{4}{7}$ by Bayes\' theorem', marks: 1 },
      { step: '(iii) Weights the head probabilities by the updated probabilities: $\\frac{25}{42}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c08', chapter: C, topic: BAYES, type: 'short', complexity: 'medium', marks: 3,
    text: 'On any day, it rains with probability $\\frac{1}{4}$. Raju takes the bus with probability $0.8$ if it rains and with probability $0.3$ if it does not rain. Find (i) the probability that he takes the bus; (ii) the probability that it rained, given that he took the bus; (iii) the probability that it did not rain, given that he did not take the bus.',
    answer: '(i) $P(\\text{bus}) = \\frac{1}{4}(0.8) + \\frac{3}{4}(0.3) = 0.2 + 0.225 = 0.425 = \\frac{17}{40}$. (ii) $P(\\text{rain} \\mid \\text{bus}) = \\frac{0.2}{0.425} = \\frac{8}{17}$. (iii) $P(\\text{no bus}) = \\frac{1}{4}(0.2) + \\frac{3}{4}(0.7) = 0.575$ and $P(\\text{no rain} \\cap \\text{no bus}) = 0.525$, so the probability is $\\frac{0.525}{0.575} = \\frac{21}{23}$.',
    steps: [
      { step: '(i) $\\frac{17}{40}$', marks: 1 },
      { step: '(ii) $\\frac{8}{17}$', marks: 1 },
      { step: '(iii) $\\frac{21}{23}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c09', chapter: C, topic: BAYES, type: 'short', complexity: 'hard', marks: 3,
    text: 'Bag I has $3$ red and $2$ blue balls; Bag II has $2$ red and $2$ blue balls. Two balls are drawn together at random from Bag I and put into Bag II. Then one ball is drawn at random from Bag II. Find the probability that this ball is red, and, given that it is red, the probability that both transferred balls were red.',
    answer: 'From Bag I, $P(\\text{RR}) = \\frac{3}{10}$, $P(\\text{RB}) = \\frac{6}{10}$, $P(\\text{BB}) = \\frac{1}{10}$. Bag II then has $6$ balls with $4$, $3$ or $2$ red balls respectively, so $P(\\text{red} \\mid \\text{RR}) = \\frac{2}{3}$, $P(\\text{red} \\mid \\text{RB}) = \\frac{1}{2}$, $P(\\text{red} \\mid \\text{BB}) = \\frac{1}{3}$. $P(\\text{red}) = \\frac{3}{10}\\cdot\\frac{2}{3} + \\frac{6}{10}\\cdot\\frac{1}{2} + \\frac{1}{10}\\cdot\\frac{1}{3} = \\frac{1}{5} + \\frac{3}{10} + \\frac{1}{30} = \\frac{8}{15}$. $P(\\text{RR} \\mid \\text{red}) = \\frac{1/5}{8/15} = \\frac{3}{8}$.',
    steps: [
      { step: 'Finds the three transfer probabilities $\\frac{3}{10}, \\frac{6}{10}, \\frac{1}{10}$', marks: 1 },
      { step: 'Finds the three red probabilities and $P(\\text{red}) = \\frac{8}{15}$', marks: 1 },
      { step: 'Bayes\' theorem gives $\\frac{3}{8}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c10', chapter: C, topic: RV, type: 'short', complexity: 'easy', marks: 3,
    text: 'Two archers shoot one arrow each at a target, independently. The first hits with probability $0.6$ and the second with probability $0.5$. If $X$ is the total number of hits, find the probability distribution of $X$ and the mean of $X$.',
    answer: '$P(X = 0) = 0.4 \\times 0.5 = 0.2$. $P(X = 2) = 0.6 \\times 0.5 = 0.3$. $P(X = 1) = 0.6 \\times 0.5 + 0.4 \\times 0.5 = 0.5$. The probabilities add to $1$. Mean $= 0 \\times 0.2 + 1 \\times 0.5 + 2 \\times 0.3 = 1.1$.',
    steps: [
      { step: 'Finds $P(X = 0) = 0.2$ and $P(X = 2) = 0.3$', marks: 1 },
      { step: 'Finds $P(X = 1) = 0.5$', marks: 1 },
      { step: 'Mean $= 1.1$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c11', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A committee of $3$ is chosen at random from $4$ boys and $3$ girls (every group of three equally likely). If $X$ is the number of girls on the committee, find the probability distribution of $X$ and the mean of $X$.',
    answer: 'There are $\\binom{7}{3} = 35$ committees. $P(X = 0) = \\frac{4}{35}$; $P(X = 1) = \\frac{3 \\times 6}{35} = \\frac{18}{35}$; $P(X = 2) = \\frac{3 \\times 4}{35} = \\frac{12}{35}$; $P(X = 3) = \\frac{1}{35}$. Mean $= \\frac{18 + 24 + 3}{35} = \\frac{45}{35} = \\frac{9}{7}$.',
    steps: [
      { step: 'Counts the $35$ equally likely committees', marks: 1 },
      { step: 'Writes the four probabilities $\\frac{4}{35}, \\frac{18}{35}, \\frac{12}{35}, \\frac{1}{35}$', marks: 1 },
      { step: 'Mean $= \\frac{9}{7}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c12', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A fair coin is tossed $3$ times (all $8$ outcomes equally likely). A player gains $₹a$ if all three tosses show heads, gains $₹15$ if exactly two show heads and loses $₹20$ if at most one shows a head. Let $X$ be the gain in rupees. (i) Write the distribution of $X$. (ii) Find $a$ if the game is fair (mean gain $0$). (iii) For that $a$, find $P(X > 0)$.',
    answer: '(i) $P(X = a) = \\frac{1}{8}$, $P(X = 15) = \\frac{3}{8}$, $P(X = -20) = \\frac{4}{8} = \\frac{1}{2}$. (ii) Mean $= \\frac{a}{8} + \\frac{45}{8} - 10 = \\frac{a - 35}{8}$, which is $0$ for $a = 35$. (iii) For $a = 35$, $X > 0$ when it is $35$ or $15$: $P = \\frac{1}{8} + \\frac{3}{8} = \\frac{1}{2}$.',
    steps: [
      { step: '(i) Writes the distribution in terms of $a$', marks: 1 },
      { step: '(ii) Mean $= \\frac{a - 35}{8} = 0$ gives $a = 35$', marks: 1 },
      { step: '(iii) $P(X > 0) = \\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c13', chapter: C, topic: BAYES, type: 'short', complexity: 'hard', marks: 3,
    text: 'A large store keeps two kinds of lots of bulbs. $60\\%$ of its lots are of kind A, in which $2\\%$ of the bulbs are defective, and $40\\%$ are of kind B, in which $5\\%$ of the bulbs are defective. A lot is chosen at random and two bulbs are picked from it; because the lot is large, treat the two bulbs as independently defective with the lot\'s defect rate. Both bulbs are defective. Find the probability that the lot is of kind B.',
    answer: '$P(\\text{both defective} \\mid A) = 0.02^{2} = 0.0004$ and $P(\\text{both defective} \\mid B) = 0.05^{2} = 0.0025$. $P(\\text{both defective}) = 0.6(0.0004) + 0.4(0.0025) = 0.00024 + 0.001 = 0.00124$. $P(B \\mid \\text{both defective}) = \\frac{0.001}{0.00124} = \\frac{25}{31}$.',
    steps: [
      { step: 'Finds $0.0004$ and $0.0025$ as the likelihoods', marks: 1 },
      { step: 'Total probability $0.00124$', marks: 1 },
      { step: 'Bayes\' theorem gives $\\frac{25}{31}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c14', chapter: C, topic: RV, type: 'short', complexity: 'medium', marks: 3,
    text: 'A fair coin is tossed $4$ times (all $16$ outcomes equally likely). If $X$ is the number of heads, find the probability distribution of $X$, its mean, and $P(X \\geq 3)$.',
    answer: 'The numbers of outcomes with $0, 1, 2, 3, 4$ heads are $1, 4, 6, 4, 1$, so $P(X = x) = \\frac{1}{16}, \\frac{4}{16}, \\frac{6}{16}, \\frac{4}{16}, \\frac{1}{16}$. Mean $= \\frac{0 + 4 + 12 + 12 + 4}{16} = 2$. $P(X \\geq 3) = \\frac{4 + 1}{16} = \\frac{5}{16}$.',
    steps: [
      { step: 'Counts the outcomes $1, 4, 6, 4, 1$ and writes the distribution', marks: 1 },
      { step: 'Mean $= 2$', marks: 1 },
      { step: '$P(X \\geq 3) = \\frac{5}{16}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-c15', chapter: C, topic: MULT, type: 'short', complexity: 'medium', marks: 3,
    text: 'A network between two towns has two separate routes in parallel. Each route has two links in series. Every link works with probability $0.9$, independently of the others. A route works only if both its links work, and the network works if at least one route works. Find (i) the probability that a route works; (ii) the probability that the network works; (iii) the probability that the first route works, given that the network works.',
    answer: '(i) $0.9 \\times 0.9 = 0.81$. (ii) The network fails only if both routes fail: $1 - (1 - 0.81)^{2} = 1 - 0.0361 = 0.9639$. (iii) If the first route works, the network works, so $P = \\frac{0.81}{0.9639} = \\frac{8100}{9639} = \\frac{100}{119}$.',
    steps: [
      { step: '(i) $0.81$', marks: 1 },
      { step: '(ii) $0.9639$', marks: 1 },
      { step: '(iii) $\\frac{100}{119}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d01', chapter: C, topic: MULT, type: 'long', complexity: 'medium', marks: 5,
    text: 'A box has $5$ red, $4$ blue and $3$ green balls. Three balls are drawn one after another without replacement, at random. Find the probability that (a) one ball of each colour is drawn; (b) all three balls have the same colour; (c) one ball of each colour is drawn, given that the three balls do not all have the same colour.',
    answer: 'Total ordered draws: $12 \\times 11 \\times 10 = 1320$. (a) One of each colour can occur in $3! = 6$ orders, each with $5 \\cdot 4 \\cdot 3 = 60$ ordered draws, so $P = \\frac{360}{1320} = \\frac{3}{11}$. (b) $P = \\frac{5 \\cdot 4 \\cdot 3 + 4 \\cdot 3 \\cdot 2 + 3 \\cdot 2 \\cdot 1}{1320} = \\frac{90}{1320} = \\frac{3}{44}$. (c) $P(\\text{not all same}) = 1 - \\frac{3}{44} = \\frac{41}{44}$. One of each colour already means not all the same, so $P = \\frac{3/11}{41/44} = \\frac{12}{41}$.',
    steps: [
      { step: 'Sets up the sample size $1320$ (or $\\binom{12}{3} = 220$)', marks: 1 },
      { step: '(a) $\\frac{3}{11}$', marks: 1 },
      { step: '(b) $\\frac{3}{44}$', marks: 1 },
      { step: '(c) $P(\\text{not all same}) = \\frac{41}{44}$', marks: 1 },
      { step: '(c) Conditional probability $\\frac{12}{41}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d02', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: 'A box holds $5$ balls, each red or white. The number of red balls is equally likely to be $2$, $3$ or $4$. Two balls are drawn together at random from the box, and both are red. (a) Find the probability that both drawn balls are red. (b) Find the probability that the box held $4$ red balls. (c) A third ball is now drawn from the remaining $3$ balls. Find the probability that it is red.',
    answer: 'Let $R_k$ be "the box had $k$ red balls", each with probability $\\frac{1}{3}$. $P(\\text{two red} \\mid R_k) = \\frac{\\binom{k}{2}}{10}$, giving $\\frac{1}{10}$, $\\frac{3}{10}$, $\\frac{6}{10}$ for $k = 2, 3, 4$. (a) $P(\\text{two red}) = \\frac{1}{3}\\left(\\frac{1 + 3 + 6}{10}\\right) = \\frac{1}{3}$. (b) $P(R_4 \\mid \\text{two red}) = \\frac{6/30}{1/3} = \\frac{3}{5}$; similarly $P(R_3 \\mid \\text{two red}) = \\frac{3}{10}$ and $P(R_2 \\mid \\text{two red}) = \\frac{1}{10}$. (c) With $k$ red balls, $k - 2$ red balls remain among $3$, so $P = \\frac{1}{10}(0) + \\frac{3}{10}\\cdot\\frac{1}{3} + \\frac{6}{10}\\cdot\\frac{2}{3} = \\frac{1}{10} + \\frac{4}{10} = \\frac{1}{2}$.',
    steps: [
      { step: 'Finds $P(\\text{two red} \\mid R_k) = \\frac{1}{10}, \\frac{3}{10}, \\frac{6}{10}$', marks: 1 },
      { step: '(a) $\\frac{1}{3}$', marks: 1 },
      { step: '(b) $P(R_4 \\mid \\text{two red}) = \\frac{3}{5}$', marks: 1 },
      { step: '(c) Finds the other two posteriors $\\frac{3}{10}$ and $\\frac{1}{10}$', marks: 1 },
      { step: '(c) Gets $\\frac{1}{2}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d03', chapter: C, topic: RV, type: 'long', complexity: 'medium', marks: 5,
    text: 'A student guesses the answers to $2$ multiple-choice questions, each with $4$ options of which exactly one is correct. Every option is equally likely to be chosen, and the two guesses are independent. A correct answer earns $4$ marks and a wrong answer costs $1$ mark. Let $X$ be the student\'s total marks. (a) Find the probability distribution of $X$. (b) Find the mean of $X$. (c) Find $P(X > 0)$. (d) Find $P(X \\geq 8)$.',
    answer: 'Let $k$ be the number of correct answers; the total is $4k - (2 - k) = 5k - 2$. Each answer is correct with probability $\\frac{1}{4}$ and wrong with probability $\\frac{3}{4}$. $P(k = 0) = \\frac{3}{4}\\cdot\\frac{3}{4} = \\frac{9}{16}$; $P(k = 1) = \\frac{1}{4}\\cdot\\frac{3}{4} + \\frac{3}{4}\\cdot\\frac{1}{4} = \\frac{6}{16}$; $P(k = 2) = \\frac{1}{16}$. (a) $X = -2, 3, 8$ with probabilities $\\frac{9}{16}, \\frac{6}{16}, \\frac{1}{16}$. (b) Mean $= \\frac{-18 + 18 + 8}{16} = \\frac{1}{2}$. (c) $P(X > 0) = \\frac{6 + 1}{16} = \\frac{7}{16}$. (d) $P(X \\geq 8) = \\frac{1}{16}$.',
    steps: [
      { step: 'Gets total marks $5k - 2$ and the two-question outcome probabilities', marks: 1 },
      { step: '(a) Writes the full distribution', marks: 1 },
      { step: '(b) Mean $= \\frac{1}{2}$', marks: 1 },
      { step: '(c) $\\frac{7}{16}$', marks: 1 },
      { step: '(d) $\\frac{1}{16}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d04', chapter: C, topic: MULT, type: 'long', complexity: 'hard', marks: 5,
    text: 'Two fair coins are tossed. Let $A$ be the event "the first coin shows a head", $B$ the event "the second coin shows a head" and $C$ the event "both coins show the same face". (a) Show that $A$ and $B$ are independent. (b) Show that $A$ and $C$ are independent, and that $B$ and $C$ are independent. (c) Find $P(A \\cap B \\cap C)$ and decide whether $P(A \\cap B \\cap C) = P(A)P(B)P(C)$.',
    answer: 'The sample space is $\\{HH, HT, TH, TT\\}$, all equally likely. $P(A) = P(B) = P(C) = \\frac{1}{2}$, since $A = \\{HH, HT\\}$, $B = \\{HH, TH\\}$, $C = \\{HH, TT\\}$. (a) $A \\cap B = \\{HH\\}$, so $P(A \\cap B) = \\frac{1}{4} = P(A)P(B)$. (b) $A \\cap C = \\{HH\\}$ and $B \\cap C = \\{HH\\}$, each with probability $\\frac{1}{4} = \\frac{1}{2}\\cdot\\frac{1}{2}$. (c) $A \\cap B \\cap C = \\{HH\\}$, so $P = \\frac{1}{4}$, but $P(A)P(B)P(C) = \\frac{1}{8}$. They are not equal: the three events are pairwise independent but not mutually independent.',
    steps: [
      { step: 'Lists $A$, $B$, $C$ and finds each probability $\\frac{1}{2}$', marks: 1 },
      { step: '(a) $P(A \\cap B) = \\frac{1}{4}$ and conclusion', marks: 1 },
      { step: '(b) $P(A \\cap C) = P(B \\cap C) = \\frac{1}{4}$ and conclusion', marks: 1 },
      { step: '(c) $P(A \\cap B \\cap C) = \\frac{1}{4}$', marks: 1 },
      { step: '(c) Compares with $\\frac{1}{8}$ and concludes not mutually independent', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d05', chapter: C, topic: BAYES, type: 'long', complexity: 'medium', marks: 5,
    text: 'Box X has $3$ good and $1$ defective bulb; Box Y has $2$ good and $2$ defective bulbs. A fair die is rolled: if it shows $1, 2, 3$ or $4$, Box X is chosen, otherwise Box Y. Two bulbs are then drawn together at random from the chosen box. (a) Find the probability that both bulbs are good. (b) Given that both bulbs are good, find the probability that Box Y was chosen. (c) Find the probability that at least one bulb is defective.',
    answer: '$P(X) = \\frac{2}{3}$ and $P(Y) = \\frac{1}{3}$. From Box X, $P(\\text{both good}) = \\frac{\\binom{3}{2}}{\\binom{4}{2}} = \\frac{3}{6} = \\frac{1}{2}$; from Box Y, $P(\\text{both good}) = \\frac{1}{6}$. (a) $P(\\text{both good}) = \\frac{2}{3}\\cdot\\frac{1}{2} + \\frac{1}{3}\\cdot\\frac{1}{6} = \\frac{1}{3} + \\frac{1}{18} = \\frac{7}{18}$. (b) $P(Y \\mid \\text{both good}) = \\frac{1/18}{7/18} = \\frac{1}{7}$. (c) $1 - \\frac{7}{18} = \\frac{11}{18}$.',
    steps: [
      { step: 'Finds $P(X) = \\frac{2}{3}$, $P(Y) = \\frac{1}{3}$', marks: 1 },
      { step: 'Finds the two likelihoods $\\frac{1}{2}$ and $\\frac{1}{6}$', marks: 1 },
      { step: '(a) $\\frac{7}{18}$', marks: 1 },
      { step: '(b) $\\frac{1}{7}$', marks: 1 },
      { step: '(c) $\\frac{11}{18}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d06', chapter: C, topic: RV, type: 'long', complexity: 'hard', marks: 5,
    text: 'A box holds $10$ bulbs, of which $2$ are defective. Three bulbs are drawn together at random (every set of three equally likely). Let $X$ be the number of defective bulbs drawn. (a) Find the probability distribution of $X$. (b) Find the mean of $X$. (c) The buyer rejects the box if the sample has at least $2$ defective bulbs. Find the probability of rejection. (d) The seller refunds $₹40$ for each defective bulb found. Find the mean refund per sample. (e) Given that the sample has at least one defective bulb, find the probability that the box is rejected.',
    answer: 'There are $\\binom{10}{3} = 120$ equally likely samples. $P(X = 0) = \\frac{\\binom{8}{3}}{120} = \\frac{56}{120} = \\frac{7}{15}$. $P(X = 1) = \\frac{2 \\times \\binom{8}{2}}{120} = \\frac{56}{120} = \\frac{7}{15}$. $P(X = 2) = \\frac{\\binom{8}{1}}{120} = \\frac{8}{120} = \\frac{1}{15}$. (a) These add to $1$. (b) Mean $= \\frac{7}{15} + \\frac{2}{15} = \\frac{3}{5}$. (c) $P(X \\geq 2) = P(X = 2) = \\frac{1}{15}$. (d) Mean refund $= 40 \\times \\frac{3}{5} = ₹24$. (e) $P(X \\geq 1) = 1 - \\frac{7}{15} = \\frac{8}{15}$, so $P(X \\geq 2 \\mid X \\geq 1) = \\frac{1/15}{8/15} = \\frac{1}{8}$.',
    steps: [
      { step: '(a) Gives the distribution $\\frac{7}{15}, \\frac{7}{15}, \\frac{1}{15}$', marks: 1 },
      { step: '(b) Mean $= \\frac{3}{5}$', marks: 1 },
      { step: '(c) $\\frac{1}{15}$', marks: 1 },
      { step: '(d) Mean refund $₹24$', marks: 1 },
      { step: '(e) $\\frac{1}{8}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d07', chapter: C, topic: BAYES, type: 'long', complexity: 'medium', marks: 5,
    text: 'A fair coin is tossed. If it shows heads, one fair die is rolled; if it shows tails, two fair dice are rolled. Let $S$ be the total number shown on the die or dice. (a) Find $P(S = 6)$. (b) Given that $S = 6$, find the probability that the coin showed heads. (c) Find $P(S \\leq 2)$ and, given $S \\leq 2$, the probability that the coin showed tails.',
    answer: '(a) If heads, $P(S = 6) = \\frac{1}{6}$. If tails, the sum is $6$ for $(1,5), (2,4), (3,3), (4,2), (5,1)$, so $\\frac{5}{36}$. $P(S = 6) = \\frac{1}{2}\\cdot\\frac{1}{6} + \\frac{1}{2}\\cdot\\frac{5}{36} = \\frac{1}{12} + \\frac{5}{72} = \\frac{11}{72}$. (b) $P(\\text{heads} \\mid S = 6) = \\frac{1/12}{11/72} = \\frac{6}{11}$. (c) If heads, $S \\leq 2$ means the die shows $1$ or $2$: $\\frac{2}{6} = \\frac{1}{3}$. If tails, only $(1, 1)$: $\\frac{1}{36}$. $P(S \\leq 2) = \\frac{1}{6} + \\frac{1}{72} = \\frac{13}{72}$. $P(\\text{tails} \\mid S \\leq 2) = \\frac{1/72}{13/72} = \\frac{1}{13}$.',
    steps: [
      { step: '(a) Finds $P(S = 6 \\mid \\text{heads}) = \\frac{1}{6}$ and $P(S = 6 \\mid \\text{tails}) = \\frac{5}{36}$', marks: 1 },
      { step: '(a) Total probability $\\frac{11}{72}$', marks: 1 },
      { step: '(b) $\\frac{6}{11}$', marks: 1 },
      { step: '(c) Finds the conditional probabilities $\\frac{1}{3}$ and $\\frac{1}{36}$ and $P(S \\leq 2) = \\frac{13}{72}$', marks: 1 },
      { step: '(c) $P(\\text{tails} \\mid S \\leq 2) = \\frac{1}{13}$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-d08', chapter: C, topic: BAYES, type: 'long', complexity: 'hard', marks: 5,
    text: '$10\\%$ of the items made in a factory are defective. Every item goes through two inspection stages. A defective item is rejected at stage 1 with probability $0.7$, and if it survives, is rejected at stage 2 with probability $0.6$. A good item is wrongly rejected at stage 1 with probability $0.02$, and if it survives, is wrongly rejected at stage 2 with probability $0.03$. An item passes if it is not rejected at either stage. (a) Find the probability that a defective item passes. (b) Find the probability that a good item passes. (c) Find the probability that a randomly chosen item passes. (d) Given that an item passes, find the probability that it is defective.',
    answer: '(a) A defective item passes if it survives both stages: $(1 - 0.7)(1 - 0.6) = 0.3 \\times 0.4 = 0.12$. (b) A good item passes with probability $(1 - 0.02)(1 - 0.03) = 0.98 \\times 0.97 = 0.9506$. (c) $P(\\text{pass}) = 0.1(0.12) + 0.9(0.9506) = 0.012 + 0.85554 = 0.86754$. (d) $P(\\text{defective} \\mid \\text{pass}) = \\frac{0.012}{0.86754} = \\frac{200}{14459} \\approx 0.0138$.',
    steps: [
      { step: '(a) $0.12$', marks: 1 },
      { step: '(b) $0.9506$', marks: 1 },
      { step: '(c) $0.86754$', marks: 1 },
      { step: '(d) Sets up Bayes\' theorem with numerator $0.012$', marks: 1 },
      { step: '(d) Gets $\\frac{200}{14459} \\approx 0.0138$', marks: 1 },
    ],
  },
  {
    id: 'c12-prob-r4-e01', chapter: C, topic: COND, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'In a hill town, over the $60$ days of a winter season, $24$ days were foggy, $36$ days were cold and $18$ days were both foggy and cold. A day is chosen at random from these $60$ days (each day equally likely).',
    answer: 'Both foggy and cold: $\\frac{3}{10}$; foggy given cold: $\\frac{1}{2}$; and for part (iii), cold given not foggy is $\\frac{1}{2}$, OR exactly one condition is $\\frac{2}{5}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the day was both foggy and cold.', answer: '$\\frac{18}{60} = \\frac{3}{10}$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the day was foggy, given that it was cold.', answer: '$P(\\text{foggy} \\mid \\text{cold}) = \\frac{18}{36} = \\frac{1}{2}$.' },
      { label: '(iii)', marks: 2, text: 'Find the probability that the day was cold, given that it was not foggy. OR Find the probability that exactly one of the two conditions held on the day.', answer: 'Not foggy: $60 - 24 = 36$ days, of which $36 - 18 = 18$ were cold, so $P = \\frac{18}{36} = \\frac{1}{2}$. OR foggy only: $24 - 18 = 6$ days; cold only: $36 - 18 = 18$ days; so $P = \\frac{6 + 18}{60} = \\frac{2}{5}$.' },
    ],
  },
  {
    id: 'c12-prob-r4-e02', chapter: C, topic: MULT, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A student attempts three online quizzes. The probabilities of passing the first, second and third quiz are $0.8$, $0.7$ and $0.6$ respectively, and the results of the quizzes are independent.',
    answer: 'Passes all three: $0.336$; at least one: $0.976$; and for part (iii), exactly two is $0.452$, OR at most one is $0.212$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the student passes all three quizzes.', answer: '$0.8 \\times 0.7 \\times 0.6 = 0.336$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the student passes at least one quiz.', answer: '$1 - (0.2)(0.3)(0.4) = 1 - 0.024 = 0.976$.' },
      { label: '(iii)', marks: 2, text: 'Find the probability that the student passes exactly two quizzes. OR Find the probability that the student passes at most one quiz.', answer: 'Exactly two: $0.8 \\cdot 0.7 \\cdot 0.4 + 0.8 \\cdot 0.3 \\cdot 0.6 + 0.2 \\cdot 0.7 \\cdot 0.6 = 0.224 + 0.144 + 0.084 = 0.452$. OR at most one: $1 - 0.452 - 0.336 = 0.212$ (check: none $0.024$ plus exactly one $0.096 + 0.056 + 0.036 = 0.188$).' },
    ],
  },
  {
    id: 'c12-prob-r4-e03', chapter: C, topic: BAYES, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'An airport handles flights of three airlines X, Y and Z, which operate $50\\%$, $30\\%$ and $20\\%$ of its flights. A flight is delayed with probability $0.1$ for X, $0.2$ for Y and $0.3$ for Z. A flight is chosen at random.',
    answer: 'Y and delayed: $0.06$; delayed: $0.17$; and for part (iii), Z given delayed is $\\frac{6}{17}$, OR X given not delayed is $\\frac{45}{83}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the flight is operated by Y and is delayed.', answer: '$0.3 \\times 0.2 = 0.06$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the flight is delayed.', answer: '$0.5(0.1) + 0.3(0.2) + 0.2(0.3) = 0.05 + 0.06 + 0.06 = 0.17$.' },
      { label: '(iii)', marks: 2, text: 'Given that the flight is delayed, find the probability that it is operated by Z. OR Given that the flight is not delayed, find the probability that it is operated by X.', answer: '$P(Z \\mid \\text{delayed}) = \\frac{0.06}{0.17} = \\frac{6}{17}$. OR $P(\\text{not delayed}) = 0.83$ and $P(X \\cap \\text{not delayed}) = 0.5 \\times 0.9 = 0.45$, so the probability is $\\frac{0.45}{0.83} = \\frac{45}{83}$.' },
    ],
  },
  {
    id: 'c12-prob-r4-e04', chapter: C, topic: BAYES, type: 'case', complexity: 'hard', marks: 4, competency: true,
    text: 'In a hospital, $60\\%$ of the patients are admitted through the outpatient department (OPD), $30\\%$ through emergency and $10\\%$ on referral. The probability that a patient stays more than $5$ days is $0.1$ for OPD patients, $0.4$ for emergency patients and $0.3$ for referral patients. A patient is chosen at random.',
    answer: 'Emergency and long stay: $0.12$; long stay: $0.21$; and for part (iii), not emergency given long stay is $\\frac{3}{7}$, OR referral given short stay is $\\frac{7}{79}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the probability that the patient was admitted through emergency and stays more than $5$ days.', answer: '$0.3 \\times 0.4 = 0.12$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the patient stays more than $5$ days.', answer: '$0.6(0.1) + 0.3(0.4) + 0.1(0.3) = 0.06 + 0.12 + 0.03 = 0.21$.' },
      { label: '(iii)', marks: 2, text: 'Given that the patient stays more than $5$ days, find the probability that the patient was not admitted through emergency. OR Given that the patient stays at most $5$ days, find the probability that the patient came on referral.', answer: '$P(\\text{emergency} \\mid \\text{long}) = \\frac{0.12}{0.21} = \\frac{4}{7}$, so the required probability is $1 - \\frac{4}{7} = \\frac{3}{7}$. OR $P(\\text{short}) = 0.79$ and $P(\\text{referral} \\cap \\text{short}) = 0.1 \\times 0.7 = 0.07$, so the probability is $\\frac{0.07}{0.79} = \\frac{7}{79}$.' },
    ],
  },
  {
    id: 'c12-prob-r4-e05', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A library records the number of books $X$ borrowed by a member in one visit, where $X$ takes the values $0, 1, 2, 3$ and $P(X = x) = \\frac{x + 2}{k}$ for these values.',
    answer: '$k = 14$; $P(X \\geq 2) = \\frac{9}{14}$; and for part (iii), the mean is $\\frac{13}{7}$, OR the mean fee is $₹\\frac{109}{7}$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Find the value of $k$.', answer: '$\\frac{2 + 3 + 4 + 5}{k} = 1$, so $k = 14$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that a member borrows at least $2$ books.', answer: '$P(X \\geq 2) = \\frac{4 + 5}{14} = \\frac{9}{14}$.' },
      { label: '(iii)', marks: 2, text: 'Find the mean number of books borrowed per visit. OR The library charges a fee of $₹10$ plus $₹3$ for each book borrowed. Find the mean fee per visit.', answer: 'Mean $= \\frac{0 \\cdot 2 + 1 \\cdot 3 + 2 \\cdot 4 + 3 \\cdot 5}{14} = \\frac{26}{14} = \\frac{13}{7}$. OR the fee is $₹10, 13, 16, 19$ with probabilities $\\frac{2}{14}, \\frac{3}{14}, \\frac{4}{14}, \\frac{5}{14}$, so the mean is $\\frac{20 + 39 + 64 + 95}{14} = \\frac{218}{14} = ₹\\frac{109}{7}$.' },
    ],
  },
  {
    id: 'c12-prob-r4-e06', chapter: C, topic: RV, type: 'case', complexity: 'medium', marks: 4, competency: true,
    text: 'A delivery partner earns $₹40$ on a short trip, $₹70$ on a medium trip and $₹120$ on a long trip, with probabilities $0.5$, $0.3$ and $0.2$ respectively. Fuel costs $₹25$ per trip. Let $X$ be the net earning, in rupees, from one trip.',
    answer: '$X = 15, 45, 95$ with probabilities $0.5, 0.3, 0.2$; $P(X \\geq 45) = 0.5$; and for part (iii), the mean is $₹40$, OR the new mean is $₹30$.',
    parts: [
      { label: '(i)', marks: 1, text: 'Write the probability distribution of $X$.', answer: '$X = 40 - 25 = 15$, $70 - 25 = 45$, $120 - 25 = 95$ with probabilities $0.5$, $0.3$, $0.2$.' },
      { label: '(ii)', marks: 1, text: 'Find the probability that the net earning from a trip is at least $₹45$.', answer: '$P(X \\geq 45) = 0.3 + 0.2 = 0.5$.' },
      { label: '(iii)', marks: 2, text: 'Find the mean net earning per trip. OR If the fuel cost rises to $₹35$ per trip, find the new mean net earning per trip.', answer: 'Mean $= 15(0.5) + 45(0.3) + 95(0.2) = 7.5 + 13.5 + 19 = ₹40$. OR the net earnings become $5, 35, 85$, and the mean is $2.5 + 10.5 + 17 = ₹30$.' },
    ],
  },
];
