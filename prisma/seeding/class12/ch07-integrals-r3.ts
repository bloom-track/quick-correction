import type { Class12Question } from './types.js';

const C = 'Integrals';

export const CH07_INT_R3: Class12Question[] = [
  {
    "id": "c12-int-r3-a01",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "For $x > 0$, $\\int \\left(2x^{3} - 3\\sqrt{x} + \\frac{5}{x}\\right)dx$ is equal to",
    "options": [
      "$\\frac{x^{4}}{2} - 2x^{3/2} + 5\\log|x| + C$",
      "$\\frac{x^{4}}{2} - \\frac{3}{2}x^{3/2} + 5\\log|x| + C$",
      "$6x^{2} - 2x^{3/2} - \\frac{5}{x^{2}} + C$",
      "$\\frac{x^{4}}{2} - 2x^{3/2} - \\frac{5}{x} + C$"
    ],
    "answer": "Correct option: A) $\\frac{x^{4}}{2} - 2x^{3/2} + 5\\log|x| + C$. Integrate term by term: $\\int 2x^{3}dx = \\frac{x^{4}}{2}$, $\\int 3x^{1/2}dx = 3\\cdot\\frac{2}{3}x^{3/2} = 2x^{3/2}$ and $\\int \\frac{5}{x}dx = 5\\log|x|$. Option B forgets to multiply by $\\frac{2}{3}$ for the root term, and C differentiates instead of integrating."
  },
  {
    "id": "c12-int-r3-a02",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$\\int \\sec x\\,(\\sec x + \\tan x)\\,dx$ is equal to",
    "options": [
      "$\\tan x - \\sec x + C$",
      "$\\tan x + \\sec x + C$",
      "$\\sec x\\tan x + \\log|\\sec x + \\tan x| + C$",
      "$\\tan x + \\log|\\sec x| + C$"
    ],
    "answer": "Correct option: B) $\\tan x + \\sec x + C$. Expand: $\\sec x(\\sec x + \\tan x) = \\sec^{2}x + \\sec x\\tan x$. Since $\\int \\sec^{2}x\\,dx = \\tan x$ and $\\int \\sec x\\tan x\\,dx = \\sec x$, the result is $\\tan x + \\sec x + C$. Option A has a sign error and D uses $\\log|\\sec x|$ for $\\int \\sec x\\tan x\\,dx$."
  },
  {
    "id": "c12-int-r3-a03",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$\\int 5^{x}e^{x}\\,dx$ is equal to",
    "options": [
      "$\\frac{5^{x}}{\\log 5} + e^{x} + C$",
      "$\\frac{(5e)^{x}}{\\log 5} + C$",
      "$\\frac{(5e)^{x}}{1 + \\log 5} + C$",
      "$(1 + \\log 5)\\,5^{x}e^{x} + C$"
    ],
    "answer": "Correct option: C) $\\frac{(5e)^{x}}{1 + \\log 5} + C$. Write $5^{x}e^{x} = (5e)^{x}$ and use $\\int a^{x}dx = \\frac{a^{x}}{\\log a}$ with $\\log(5e) = 1 + \\log 5$. Option A integrates the two factors separately, and B forgets that $\\log e = 1$ adds to $\\log 5$."
  },
  {
    "id": "c12-int-r3-a04",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$\\int \\tan^{2}(3x)\\,dx$ is equal to",
    "options": [
      "$\\tan 3x - x + C$",
      "$\\frac{\\tan 3x}{3} + x + C$",
      "$\\frac{\\tan^{3}(3x)}{9} + C$",
      "$\\frac{\\tan 3x}{3} - x + C$"
    ],
    "answer": "Correct option: D) $\\frac{\\tan 3x}{3} - x + C$. Use $\\tan^{2}3x = \\sec^{2}3x - 1$. Then $\\int \\sec^{2}3x\\,dx = \\frac{\\tan 3x}{3}$, so the integral is $\\frac{\\tan 3x}{3} - x + C$. Option A ignores the factor $\\frac{1}{3}$ from the inner $3x$."
  },
  {
    "id": "c12-int-r3-a05",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$\\int \\frac{x^{2}}{x^{3} + 5}\\,dx$ is equal to",
    "options": [
      "$\\log|x^{3} + 5| + C$",
      "$\\frac{1}{3}\\log|x^{3} + 5| + C$",
      "$\\frac{1}{2}\\log|x^{3} + 5| + C$",
      "$-\\frac{1}{3(x^{3} + 5)} + C$"
    ],
    "answer": "Correct option: B) $\\frac{1}{3}\\log|x^{3} + 5| + C$. Put $u = x^{3} + 5$, so $du = 3x^{2}dx$. The integral becomes $\\frac{1}{3}\\int \\frac{du}{u} = \\frac{1}{3}\\log|x^{3} + 5| + C$. Option A forgets the factor $\\frac{1}{3}$."
  },
  {
    "id": "c12-int-r3-a06",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$\\int \\frac{e^{x}}{1 + e^{2x}}\\,dx$ is equal to",
    "options": [
      "$\\frac{1}{2}\\log(1 + e^{2x}) + C$",
      "$\\tan^{-1}(e^{x}) + C$",
      "$\\frac{1}{2}\\tan^{-1}(e^{2x}) + C$",
      "$\\log(1 + e^{2x}) + C$"
    ],
    "answer": "Correct option: B) $\\tan^{-1}(e^{x}) + C$. Put $u = e^{x}$, so $du = e^{x}dx$ and the integral is $\\int \\frac{du}{1 + u^{2}} = \\tan^{-1}u + C = \\tan^{-1}(e^{x}) + C$. The logarithmic options would need $e^{2x}$ in the numerator."
  },
  {
    "id": "c12-int-r3-a07",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$\\int \\frac{\\sin 2x}{1 + \\sin^{2}x}\\,dx$ is equal to",
    "options": [
      "$\\log(1 + \\sin^{2}x) + C$",
      "$\\frac{1}{2}\\log(1 + \\sin^{2}x) + C$",
      "$2\\log(1 + \\sin^{2}x) + C$",
      "$\\log|1 + \\sin 2x| + C$"
    ],
    "answer": "Correct option: A) $\\log(1 + \\sin^{2}x) + C$. The derivative of the denominator $1 + \\sin^{2}x$ is $2\\sin x\\cos x = \\sin 2x$, which is exactly the numerator. So the integral is $\\log(1 + \\sin^{2}x) + C$ (the quantity inside is always positive)."
  },
  {
    "id": "c12-int-r3-a08",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$\\int \\frac{dx}{1 + e^{-x}}$ is equal to",
    "options": [
      "$\\log(1 + e^{-x}) + C$",
      "$-\\log(1 + e^{-x}) + C$",
      "$\\log(1 + e^{x}) + C$",
      "$\\frac{x}{1 + e^{-x}} + C$"
    ],
    "answer": "Correct option: C) $\\log(1 + e^{x}) + C$. Multiply the numerator and denominator by $e^{x}$: $\\frac{1}{1 + e^{-x}} = \\frac{e^{x}}{e^{x} + 1}$, whose integral is $\\log(e^{x} + 1) + C$. Options A and B come from a wrong sign when differentiating $e^{-x}$."
  },
  {
    "id": "c12-int-r3-a09",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "For $x > 0$, $\\int x\\log x\\,dx$ is equal to",
    "options": [
      "$\\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{2} + C$",
      "$\\frac{x^{2}}{2}\\log x + \\frac{x^{2}}{4} + C$",
      "$\\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4} + C$",
      "$\\frac{x^{2}}{2}\\log x - \\frac{x}{2} + C$"
    ],
    "answer": "Correct option: C) $\\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4} + C$. By parts with $u = \\log x$ and $dv = x\\,dx$: $\\int x\\log x\\,dx = \\frac{x^{2}}{2}\\log x - \\int \\frac{x}{2}\\,dx = \\frac{x^{2}}{2}\\log x - \\frac{x^{2}}{4} + C$."
  },
  {
    "id": "c12-int-r3-a10",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "assertion_reason",
    "complexity": "easy",
    "marks": 1,
    "text": "Assertion (A): $\\int x e^{x}\\,dx = \\frac{x^{2}}{2}e^{x} + C$.\nReason (R): $\\int u\\,v\\,dx = u\\int v\\,dx - \\int\\left(\\frac{du}{dx}\\int v\\,dx\\right)dx$.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "answer": "Correct option: D) A is false, but R is true. R is the rule for integration by parts, so it is true. A is false: taking $u = x$, $v = e^{x}$ gives $\\int xe^{x}dx = xe^{x} - e^{x} + C = (x - 1)e^{x} + C$; the integral of a product is not the product of the integrals."
  },
  {
    "id": "c12-int-r3-a11",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $x > 0$, $\\int e^{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}}\\right)dx$ is equal to",
    "options": [
      "$e^{x}\\log x + C$",
      "$-\\frac{e^{x}}{x} + C$",
      "$e^{x}\\left(\\frac{1}{x} + \\frac{1}{x^{2}}\\right) + C$",
      "$\\frac{e^{x}}{x} + C$"
    ],
    "answer": "Correct option: D) $\\frac{e^{x}}{x} + C$. With $f(x) = \\frac{1}{x}$, we have $f^{\\prime}(x) = -\\frac{1}{x^{2}}$, so the integrand is $e^{x}[f(x) + f^{\\prime}(x)]$ and $\\int e^{x}[f(x) + f^{\\prime}(x)]dx = e^{x}f(x) + C = \\frac{e^{x}}{x} + C$."
  },
  {
    "id": "c12-int-r3-a12",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$\\int \\frac{dx}{4x^{2} + 9}$ is equal to",
    "options": [
      "$\\frac{1}{3}\\tan^{-1}\\left(\\frac{2x}{3}\\right) + C$",
      "$\\frac{1}{6}\\tan^{-1}\\left(\\frac{2x}{3}\\right) + C$",
      "$\\frac{1}{6}\\tan^{-1}\\left(\\frac{x}{3}\\right) + C$",
      "$\\frac{1}{6}\\log\\left|\\frac{2x - 3}{2x + 3}\\right| + C$"
    ],
    "answer": "Correct option: B) $\\frac{1}{6}\\tan^{-1}\\left(\\frac{2x}{3}\\right) + C$. Put $u = 2x$: $\\int \\frac{dx}{4x^{2} + 9} = \\frac{1}{2}\\int \\frac{du}{u^{2} + 3^{2}} = \\frac{1}{2}\\cdot\\frac{1}{3}\\tan^{-1}\\frac{u}{3} = \\frac{1}{6}\\tan^{-1}\\frac{2x}{3} + C$. Option A forgets the $\\frac{1}{2}$ from $du = 2\\,dx$."
  },
  {
    "id": "c12-int-r3-a13",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $x > \\frac{4}{3}$, $\\int \\frac{dx}{\\sqrt{9x^{2} - 16}}$ is equal to",
    "options": [
      "$\\log\\left|3x + \\sqrt{9x^{2} - 16}\\right| + C$",
      "$\\frac{1}{3}\\sin^{-1}\\left(\\frac{3x}{4}\\right) + C$",
      "$\\frac{1}{3}\\log\\left|x + \\sqrt{9x^{2} - 16}\\right| + C$",
      "$\\frac{1}{3}\\log\\left|3x + \\sqrt{9x^{2} - 16}\\right| + C$"
    ],
    "answer": "Correct option: D) $\\frac{1}{3}\\log\\left|3x + \\sqrt{9x^{2} - 16}\\right| + C$. Put $u = 3x$, $du = 3\\,dx$: $\\frac{1}{3}\\int \\frac{du}{\\sqrt{u^{2} - 4^{2}}} = \\frac{1}{3}\\log\\left|u + \\sqrt{u^{2} - 16}\\right| + C$. Option A drops the factor $\\frac{1}{3}$ and B uses the sine form meant for $a^{2} - u^{2}$."
  },
  {
    "id": "c12-int-r3-a14",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $0 < x < 6$, $\\int \\frac{dx}{\\sqrt{6x - x^{2}}}$ is equal to",
    "options": [
      "$\\sin^{-1}(x - 3) + C$",
      "$\\log\\left|x - 3 + \\sqrt{6x - x^{2}}\\right| + C$",
      "$\\sin^{-1}\\left(\\frac{x - 3}{3}\\right) + C$",
      "$\\cos^{-1}\\left(\\frac{x - 3}{3}\\right) + C$"
    ],
    "answer": "Correct option: C) $\\sin^{-1}\\left(\\frac{x - 3}{3}\\right) + C$. Complete the square: $6x - x^{2} = 9 - (x - 3)^{2}$, so the integral is $\\sin^{-1}\\frac{x - 3}{3} + C$. Option D has the wrong sign (its derivative is the negative of the integrand) and B is the form for $u^{2} + a^{2}$."
  },
  {
    "id": "c12-int-r3-a15",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The value of $\\int_{0}^{1} \\frac{dx}{\\sqrt{4 - x^{2}}}$ is",
    "options": [
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{12}$"
    ],
    "answer": "Correct option: C) $\\frac{\\pi}{6}$. $\\int_{0}^{1}\\frac{dx}{\\sqrt{4 - x^{2}}} = \\left[\\sin^{-1}\\frac{x}{2}\\right]_{0}^{1} = \\sin^{-1}\\frac{1}{2} - 0 = \\frac{\\pi}{6}$. Option A comes from using $\\sin^{-1}x$ instead of $\\sin^{-1}\\frac{x}{2}$."
  },
  {
    "id": "c12-int-r3-a16",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The value of $\\int_{0}^{\\pi/4} \\frac{\\sec^{2}x}{1 + \\tan x}\\,dx$ is",
    "options": [
      "$1$",
      "$2\\log 2$",
      "$\\log 2$",
      "$\\frac{\\pi}{4}$"
    ],
    "answer": "Correct option: C) $\\log 2$. Put $u = 1 + \\tan x$, $du = \\sec^{2}x\\,dx$: the integral is $\\left[\\log(1 + \\tan x)\\right]_{0}^{\\pi/4} = \\log 2 - \\log 1 = \\log 2$."
  },
  {
    "id": "c12-int-r3-a17",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "Let $[x]$ denote the greatest integer less than or equal to $x$. The value of $\\int_{0}^{3} [x]\\,dx$ is",
    "options": [
      "$6$",
      "$3$",
      "$\\frac{9}{2}$",
      "$2$"
    ],
    "answer": "Correct option: B) $3$. $[x] = 0$ on $[0,1)$, $1$ on $[1,2)$ and $2$ on $[2,3)$, so the integral is $0\\cdot 1 + 1\\cdot 1 + 2\\cdot 1 = 3$. Option C treats $[x]$ as $x$."
  },
  {
    "id": "c12-int-r3-a18",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "Let $f$ be an even continuous function with $\\int_{0}^{3} f(x)\\,dx = 4$. Then $\\int_{-3}^{3} \\left(f(x) + x\\right)dx$ is equal to",
    "options": [
      "$4$",
      "$0$",
      "$12$",
      "$8$"
    ],
    "answer": "Correct option: D) $8$. For an even $f$, $\\int_{-3}^{3} f = 2\\int_{0}^{3} f = 8$, and $x$ is odd so $\\int_{-3}^{3} x\\,dx = 0$. The total is $8$. Option A forgets to double, and B treats $f$ as odd."
  },
  {
    "id": "c12-int-r3-a19",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "Let $f$ be continuous with $f(4 - x) = f(x)$ for all $x$ and $\\int_{0}^{4} f(x)\\,dx = 5$. Then $\\int_{0}^{4} x f(x)\\,dx$ is equal to",
    "options": [
      "$5$",
      "$10$",
      "$20$",
      "$\\frac{5}{2}$"
    ],
    "answer": "Correct option: B) $10$. Let $I = \\int_{0}^{4} xf(x)\\,dx$. Using $x \\to 4 - x$ and $f(4 - x) = f(x)$, $I = \\int_{0}^{4}(4 - x)f(x)\\,dx = 20 - I$. Hence $2I = 20$ and $I = 10$. Option C forgets to divide by 2."
  },
  {
    "id": "c12-int-r3-a20",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "assertion_reason",
    "complexity": "hard",
    "marks": 1,
    "text": "Assertion (A): $\\int_{0}^{2\\pi} \\sin x\\,dx = 2\\int_{0}^{\\pi} \\sin x\\,dx$.\nReason (R): If $f(2a - x) = f(x)$, then $\\int_{0}^{2a} f(x)\\,dx = 2\\int_{0}^{a} f(x)\\,dx$.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "answer": "Correct option: D) A is false, but R is true. R is a true property. For $f(x) = \\sin x$, however, $\\sin(2\\pi - x) = -\\sin x \\ne \\sin x$, so R does not apply. A is false: $\\int_{0}^{2\\pi}\\sin x\\,dx = 0$ while $2\\int_{0}^{\\pi}\\sin x\\,dx = 4$."
  },
  {
    "id": "c12-int-r3-b01",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find $\\int \\frac{3x + 1}{(x - 3)(x + 2)}\\,dx$, for $x > 3$.",
    "answer": "Write $\\frac{3x + 1}{(x - 3)(x + 2)} = \\frac{A}{x - 3} + \\frac{B}{x + 2}$, so $3x + 1 = A(x + 2) + B(x - 3)$. Putting $x = 3$ gives $10 = 5A$, so $A = 2$; putting $x = -2$ gives $-5 = -5B$, so $B = 1$. Hence $\\int = 2\\log|x - 3| + \\log|x + 2| + C$.",
    "steps": [
      {
        "step": "Partial fractions with $A = 2$ and $B = 1$",
        "marks": 1
      },
      {
        "step": "Integration to $2\\log|x - 3| + \\log|x + 2| + C$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-b02",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find $\\int x\\sqrt{x + 2}\\,dx$.",
    "answer": "Put $t = x + 2$, so $x = t - 2$ and $dx = dt$. Then $\\int (t - 2)t^{1/2}dt = \\frac{2}{5}t^{5/2} - \\frac{4}{3}t^{3/2} + C = \\frac{2}{5}(x + 2)^{5/2} - \\frac{4}{3}(x + 2)^{3/2} + C$.",
    "steps": [
      {
        "step": "Substitution $t = x + 2$ and expansion to $t^{3/2} - 2t^{1/2}$",
        "marks": 1
      },
      {
        "step": "Integration and back-substitution",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-b03",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Evaluate $\\int_{0}^{1} \\frac{dx}{x^{2} + 2x + 2}$.",
    "answer": "Since $x^{2} + 2x + 2 = (x + 1)^{2} + 1$, the integral is $\\left[\\tan^{-1}(x + 1)\\right]_{0}^{1} = \\tan^{-1}2 - \\tan^{-1}1 = \\tan^{-1}2 - \\frac{\\pi}{4}$, which equals $\\tan^{-1}\\frac{1}{3}$.",
    "steps": [
      {
        "step": "Completing the square and the antiderivative $\\tan^{-1}(x + 1)$",
        "marks": 1
      },
      {
        "step": "Applying limits: $\\tan^{-1}2 - \\frac{\\pi}{4}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-b04",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Evaluate $\\int_{1}^{e} x^{2}\\log x\\,dx$.",
    "answer": "By parts, $\\int x^{2}\\log x\\,dx = \\frac{x^{3}}{3}\\log x - \\int \\frac{x^{2}}{3}dx = \\frac{x^{3}}{3}\\log x - \\frac{x^{3}}{9}$. Between $1$ and $e$: $\\left(\\frac{e^{3}}{3} - \\frac{e^{3}}{9}\\right) - \\left(0 - \\frac{1}{9}\\right) = \\frac{2e^{3} + 1}{9}$.",
    "steps": [
      {
        "step": "Integration by parts to $\\frac{x^{3}}{3}\\log x - \\frac{x^{3}}{9}$",
        "marks": 1
      },
      {
        "step": "Limits to get $\\frac{2e^{3} + 1}{9}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-b05",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{dx}{1 + \\tan^{3}x}$.",
    "answer": "Let $I = \\int_{0}^{\\pi/2}\\frac{\\cos^{3}x}{\\cos^{3}x + \\sin^{3}x}dx$. Replacing $x$ by $\\frac{\\pi}{2} - x$ gives $I = \\int_{0}^{\\pi/2}\\frac{\\sin^{3}x}{\\sin^{3}x + \\cos^{3}x}dx$. Adding, $2I = \\int_{0}^{\\pi/2}dx = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$.",
    "steps": [
      {
        "step": "Rewrite and apply $f(x) \\to f(\\frac{\\pi}{2} - x)$",
        "marks": 1
      },
      {
        "step": "Add the two forms: $2I = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-b06",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Evaluate $\\int_{0}^{2\\pi} |\\sin x|\\,dx$.",
    "answer": "$\\sin x \\ge 0$ on $[0, \\pi]$ and $\\sin x \\le 0$ on $[\\pi, 2\\pi]$. So the integral is $\\int_{0}^{\\pi}\\sin x\\,dx - \\int_{\\pi}^{2\\pi}\\sin x\\,dx = [-\\cos x]_{0}^{\\pi} - [-\\cos x]_{\\pi}^{2\\pi} = 2 + 2 = 4$.",
    "steps": [
      {
        "step": "Splitting at $x = \\pi$ with the correct sign of $\\sin x$",
        "marks": 1
      },
      {
        "step": "Evaluating both pieces to get $4$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c01",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{dx}{x^{2}(x + 2)}$, for $x > 0$.",
    "answer": "Write $\\frac{1}{x^{2}(x + 2)} = \\frac{A}{x} + \\frac{B}{x^{2}} + \\frac{C}{x + 2}$, so $1 = Ax(x + 2) + B(x + 2) + Cx^{2}$. Putting $x = 0$: $B = \\frac{1}{2}$. Putting $x = -2$: $C = \\frac{1}{4}$. Comparing $x^{2}$ terms: $A + C = 0$, so $A = -\\frac{1}{4}$. Then $\\int = -\\frac{1}{4}\\log x - \\frac{1}{2x} + \\frac{1}{4}\\log(x + 2) + C = \\frac{1}{4}\\log\\frac{x + 2}{x} - \\frac{1}{2x} + C$.",
    "steps": [
      {
        "step": "Correct form with a repeated factor $\\frac{A}{x} + \\frac{B}{x^{2}} + \\frac{C}{x + 2}$",
        "marks": 1
      },
      {
        "step": "Constants $A = -\\frac{1}{4}$, $B = \\frac{1}{2}$, $C = \\frac{1}{4}$",
        "marks": 1
      },
      {
        "step": "Integration and final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c02",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{x^{2} + 1}{x^{2} - 5x + 6}\\,dx$, for $x > 3$.",
    "answer": "The fraction is improper: $x^{2} + 1 = (x^{2} - 5x + 6) + (5x - 5)$, so the integrand is $1 + \\frac{5x - 5}{(x - 2)(x - 3)}$. Write $\\frac{5x - 5}{(x - 2)(x - 3)} = \\frac{A}{x - 2} + \\frac{B}{x - 3}$; then $x = 2$ gives $A = -5$ and $x = 3$ gives $B = 10$. Hence $\\int = x - 5\\log|x - 2| + 10\\log|x - 3| + C$.",
    "steps": [
      {
        "step": "Division to get $1 + \\frac{5x - 5}{(x - 2)(x - 3)}$",
        "marks": 1
      },
      {
        "step": "Partial fractions $A = -5$, $B = 10$",
        "marks": 1
      },
      {
        "step": "Integration and final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c03",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\frac{dx}{x^{4} - 1}$, for $x > 1$.",
    "answer": "Since $\\frac{1}{x^{4} - 1} = \\frac{1}{(x^{2} - 1)(x^{2} + 1)} = \\frac{1}{2}\\left[\\frac{1}{x^{2} - 1} - \\frac{1}{x^{2} + 1}\\right]$, we get $\\int = \\frac{1}{2}\\cdot\\frac{1}{2}\\log\\left|\\frac{x - 1}{x + 1}\\right| - \\frac{1}{2}\\tan^{-1}x + C = \\frac{1}{4}\\log\\left|\\frac{x - 1}{x + 1}\\right| - \\frac{1}{2}\\tan^{-1}x + C$.",
    "steps": [
      {
        "step": "Factorise and split $\\frac{1}{2}\\left[\\frac{1}{x^{2} - 1} - \\frac{1}{x^{2} + 1}\\right]$",
        "marks": 1
      },
      {
        "step": "Use $\\int \\frac{dx}{x^{2} - 1}$ and $\\int \\frac{dx}{x^{2} + 1}$ correctly",
        "marks": 1
      },
      {
        "step": "Combine to the final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c04",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\sec^{3}x\\,dx$, for $0 < x < \\frac{\\pi}{2}$.",
    "answer": "Let $I = \\int \\sec^{3}x\\,dx = \\int \\sec x\\cdot\\sec^{2}x\\,dx = \\sec x\\tan x - \\int \\sec x\\tan^{2}x\\,dx$. Now $\\tan^{2}x = \\sec^{2}x - 1$, so $I = \\sec x\\tan x - I + \\int \\sec x\\,dx = \\sec x\\tan x - I + \\log|\\sec x + \\tan x|$. Hence $I = \\frac{1}{2}\\sec x\\tan x + \\frac{1}{2}\\log|\\sec x + \\tan x| + C$.",
    "steps": [
      {
        "step": "By parts with $u = \\sec x$, $dv = \\sec^{2}x\\,dx$",
        "marks": 1
      },
      {
        "step": "Use $\\tan^{2}x = \\sec^{2}x - 1$ to bring $I$ back",
        "marks": 1
      },
      {
        "step": "Solve for $I$ and state the result",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c05",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\cos(\\log x)\\,dx$, for $x > 0$.",
    "answer": "Let $I = \\int \\cos(\\log x)\\,dx$. By parts, $I = x\\cos(\\log x) + \\int \\sin(\\log x)\\,dx$, since $\\frac{d}{dx}\\cos(\\log x) = -\\frac{\\sin(\\log x)}{x}$. Applying parts again, $\\int \\sin(\\log x)\\,dx = x\\sin(\\log x) - \\int \\cos(\\log x)\\,dx = x\\sin(\\log x) - I$. So $2I = x\\cos(\\log x) + x\\sin(\\log x)$ and $I = \\frac{x}{2}\\left[\\cos(\\log x) + \\sin(\\log x)\\right] + C$.",
    "steps": [
      {
        "step": "First by parts to $x\\cos(\\log x) + \\int \\sin(\\log x)\\,dx$",
        "marks": 1
      },
      {
        "step": "Second by parts, which returns $-I$",
        "marks": 1
      },
      {
        "step": "Solve for $I$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c06",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int x\\sec x\\tan x\\,dx$, for $0 < x < \\frac{\\pi}{2}$.",
    "answer": "Take $u = x$ and $dv = \\sec x\\tan x\\,dx$, so $v = \\sec x$. Then $\\int x\\sec x\\tan x\\,dx = x\\sec x - \\int \\sec x\\,dx = x\\sec x - \\log|\\sec x + \\tan x| + C$.",
    "steps": [
      {
        "step": "Choice of $u = x$ and $v = \\sec x$",
        "marks": 1
      },
      {
        "step": "Parts formula applied",
        "marks": 1
      },
      {
        "step": "Using $\\int \\sec x\\,dx = \\log|\\sec x + \\tan x|$ for the final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c07",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\frac{dx}{\\sqrt{e^{x} - 1}}$, for $x > 0$.",
    "answer": "Put $t = \\sqrt{e^{x} - 1}$. Then $e^{x} = t^{2} + 1$ and $e^{x}dx = 2t\\,dt$, so $dx = \\frac{2t}{t^{2} + 1}dt$. The integral becomes $\\int \\frac{1}{t}\\cdot\\frac{2t}{t^{2} + 1}dt = 2\\int \\frac{dt}{1 + t^{2}} = 2\\tan^{-1}t + C = 2\\tan^{-1}\\sqrt{e^{x} - 1} + C$.",
    "steps": [
      {
        "step": "Substitution $t = \\sqrt{e^{x} - 1}$ and $dx = \\frac{2t}{t^{2} + 1}dt$",
        "marks": 1
      },
      {
        "step": "Simplification to $2\\int \\frac{dt}{1 + t^{2}}$",
        "marks": 1
      },
      {
        "step": "Back-substitution",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c08",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{\\sin^{3}x}{\\cos^{4}x}\\,dx$.",
    "answer": "Write $\\sin^{3}x = \\sin x(1 - \\cos^{2}x)$ and put $u = \\cos x$, $du = -\\sin x\\,dx$. Then $\\int \\frac{\\sin x(1 - \\cos^{2}x)}{\\cos^{4}x}dx = -\\int \\frac{1 - u^{2}}{u^{4}}du = -\\int (u^{-4} - u^{-2})du = \\frac{1}{3u^{3}} - \\frac{1}{u} + C$. That is, $\\frac{\\sec^{3}x}{3} - \\sec x + C$.",
    "steps": [
      {
        "step": "Split $\\sin^{3}x = \\sin x(1 - \\cos^{2}x)$ and substitute $u = \\cos x$",
        "marks": 1
      },
      {
        "step": "Integrating $u^{-4} - u^{-2}$ with the correct sign",
        "marks": 1
      },
      {
        "step": "Back-substitution to $\\frac{\\sec^{3}x}{3} - \\sec x + C$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c09",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{x^{3}}{\\sqrt{1 - x^{8}}}\\,dx$, for $|x| < 1$.",
    "answer": "Put $t = x^{4}$, so $dt = 4x^{3}dx$. The integral becomes $\\frac{1}{4}\\int \\frac{dt}{\\sqrt{1 - t^{2}}} = \\frac{1}{4}\\sin^{-1}t + C = \\frac{1}{4}\\sin^{-1}(x^{4}) + C$.",
    "steps": [
      {
        "step": "Substitution $t = x^{4}$ and $x^{3}dx = \\frac{dt}{4}$",
        "marks": 1
      },
      {
        "step": "Standard form $\\int \\frac{dt}{\\sqrt{1 - t^{2}}}$",
        "marks": 1
      },
      {
        "step": "Back-substitution",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c10",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{x + 2}{\\sqrt{4x - x^{2}}}\\,dx$, for $0 < x < 4$.",
    "answer": "The derivative of $4x - x^{2}$ is $4 - 2x$. Write $x + 2 = -\\frac{1}{2}(4 - 2x) + 4$. Then $\\int = -\\frac{1}{2}\\int \\frac{4 - 2x}{\\sqrt{4x - x^{2}}}dx + 4\\int \\frac{dx}{\\sqrt{4 - (x - 2)^{2}}}$. The first part is $-\\sqrt{4x - x^{2}}$ and the second is $4\\sin^{-1}\\frac{x - 2}{2}$. So the answer is $-\\sqrt{4x - x^{2}} + 4\\sin^{-1}\\left(\\frac{x - 2}{2}\\right) + C$.",
    "steps": [
      {
        "step": "Writing the numerator as $-\\frac{1}{2}(4 - 2x) + 4$",
        "marks": 1
      },
      {
        "step": "The first integral gives $-\\sqrt{4x - x^{2}}$",
        "marks": 1
      },
      {
        "step": "Completing the square for $4\\sin^{-1}\\frac{x - 2}{2}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c11",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\sqrt{x^{2} - 4x + 3}\\,dx$, for $x > 3$.",
    "answer": "Complete the square: $x^{2} - 4x + 3 = (x - 2)^{2} - 1$. Using $\\int \\sqrt{u^{2} - a^{2}}\\,du = \\frac{u}{2}\\sqrt{u^{2} - a^{2}} - \\frac{a^{2}}{2}\\log\\left|u + \\sqrt{u^{2} - a^{2}}\\right|$ with $u = x - 2$ and $a = 1$, the integral is $\\frac{x - 2}{2}\\sqrt{x^{2} - 4x + 3} - \\frac{1}{2}\\log\\left|x - 2 + \\sqrt{x^{2} - 4x + 3}\\right| + C$.",
    "steps": [
      {
        "step": "Completing the square to $(x - 2)^{2} - 1^{2}$",
        "marks": 1
      },
      {
        "step": "Choosing the formula for $\\sqrt{u^{2} - a^{2}}$",
        "marks": 1
      },
      {
        "step": "Substituting $u = x - 2$, $a = 1$ for the final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c12",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Evaluate $\\int_{0}^{1} \\frac{2x}{(1 + x)(1 + x^{2})}\\,dx$.",
    "answer": "Write $\\frac{2x}{(1 + x)(1 + x^{2})} = \\frac{A}{1 + x} + \\frac{Bx + C}{1 + x^{2}}$. Solving gives $A = -1$, $B = 1$, $C = 1$. So the integral is $\\left[-\\log(1 + x) + \\frac{1}{2}\\log(1 + x^{2}) + \\tan^{-1}x\\right]_{0}^{1} = -\\log 2 + \\frac{1}{2}\\log 2 + \\frac{\\pi}{4} = \\frac{\\pi}{4} - \\frac{1}{2}\\log 2$.",
    "steps": [
      {
        "step": "Partial fractions with $A = -1$, $B = 1$, $C = 1$",
        "marks": 1
      },
      {
        "step": "Antiderivative $-\\log(1 + x) + \\frac{1}{2}\\log(1 + x^{2}) + \\tan^{-1}x$",
        "marks": 1
      },
      {
        "step": "Applying limits to get $\\frac{\\pi}{4} - \\frac{1}{2}\\log 2$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c13",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Evaluate $\\int_{0}^{\\log 2} \\sqrt{e^{x} - 1}\\,dx$.",
    "answer": "Put $t = \\sqrt{e^{x} - 1}$, so $dx = \\frac{2t}{1 + t^{2}}dt$; when $x = 0$, $t = 0$ and when $x = \\log 2$, $t = 1$. The integral is $\\int_{0}^{1}\\frac{2t^{2}}{1 + t^{2}}dt = 2\\int_{0}^{1}\\left(1 - \\frac{1}{1 + t^{2}}\\right)dt = 2\\left[t - \\tan^{-1}t\\right]_{0}^{1} = 2\\left(1 - \\frac{\\pi}{4}\\right) = 2 - \\frac{\\pi}{2}$.",
    "steps": [
      {
        "step": "Substitution with new limits $0$ to $1$",
        "marks": 1
      },
      {
        "step": "Reducing to $2\\int_{0}^{1}\\left(1 - \\frac{1}{1 + t^{2}}\\right)dt$",
        "marks": 1
      },
      {
        "step": "Evaluating to $2 - \\frac{\\pi}{2}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c14",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Evaluate $\\int_{-\\pi/2}^{\\pi/2} \\frac{\\sin^{2}x}{1 + e^{x}}\\,dx$.",
    "answer": "Let $I = \\int_{-\\pi/2}^{\\pi/2}\\frac{\\sin^{2}x}{1 + e^{x}}dx$. Replacing $x$ by $-x$, $I = \\int_{-\\pi/2}^{\\pi/2}\\frac{\\sin^{2}x}{1 + e^{-x}}dx = \\int_{-\\pi/2}^{\\pi/2}\\frac{e^{x}\\sin^{2}x}{e^{x} + 1}dx$. Adding the two forms, $2I = \\int_{-\\pi/2}^{\\pi/2}\\sin^{2}x\\,dx = 2\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx = \\frac{\\pi}{2}$. Hence $I = \\frac{\\pi}{4}$.",
    "steps": [
      {
        "step": "Apply $x \\to -x$ to get the second form",
        "marks": 1
      },
      {
        "step": "Add to get $2I = \\int_{-\\pi/2}^{\\pi/2}\\sin^{2}x\\,dx$",
        "marks": 1
      },
      {
        "step": "Evaluate $\\int \\sin^{2}x$ and obtain $I = \\frac{\\pi}{4}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-c15",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Evaluate $\\int_{0}^{1} \\log\\left(\\frac{1 - x}{x}\\right)dx$.",
    "answer": "Let $I = \\int_{0}^{1}\\log\\frac{1 - x}{x}\\,dx$. Replacing $x$ by $1 - x$ (that is, $\\int_{0}^{a}f(x)dx = \\int_{0}^{a}f(a - x)dx$ with $a = 1$), $I = \\int_{0}^{1}\\log\\frac{x}{1 - x}\\,dx = -\\int_{0}^{1}\\log\\frac{1 - x}{x}\\,dx = -I$. Hence $2I = 0$ and $I = 0$.",
    "steps": [
      {
        "step": "Apply $f(x) \\to f(1 - x)$",
        "marks": 1
      },
      {
        "step": "Recognise the new integrand is $-\\log\\frac{1 - x}{x}$, so $I = -I$",
        "marks": 1
      },
      {
        "step": "Conclude $I = 0$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d01",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "Find $\\int \\frac{x}{(x - 1)(x^{2} + 2x + 2)}\\,dx$, for $x > 1$.",
    "answer": "Write $\\frac{x}{(x - 1)(x^{2} + 2x + 2)} = \\frac{A}{x - 1} + \\frac{Bx + C}{x^{2} + 2x + 2}$, so $x = A(x^{2} + 2x + 2) + (Bx + C)(x - 1)$. Putting $x = 1$: $A = \\frac{1}{5}$. Comparing $x^{2}$: $A + B = 0$, so $B = -\\frac{1}{5}$; comparing constants: $2A - C = 0$, so $C = \\frac{2}{5}$. The second fraction is $\\frac{2 - x}{5(x^{2} + 2x + 2)}$ and $2 - x = -\\frac{1}{2}(2x + 2) + 3$. Therefore $\\int \\frac{2 - x}{x^{2} + 2x + 2}dx = -\\frac{1}{2}\\log(x^{2} + 2x + 2) + 3\\tan^{-1}(x + 1)$. The answer is $\\frac{1}{5}\\log|x - 1| - \\frac{1}{10}\\log(x^{2} + 2x + 2) + \\frac{3}{5}\\tan^{-1}(x + 1) + C$.",
    "steps": [
      {
        "step": "Correct partial fraction form",
        "marks": 1
      },
      {
        "step": "Finding $A = \\frac{1}{5}$",
        "marks": 1
      },
      {
        "step": "Finding $B = -\\frac{1}{5}$ and $C = \\frac{2}{5}$",
        "marks": 1
      },
      {
        "step": "Splitting $2 - x$ against the derivative of the quadratic",
        "marks": 1
      },
      {
        "step": "Integration with completing the square and final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d02",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Find $\\int \\frac{x^{3} + 2}{x^{2}(x - 1)}\\,dx$, for $x > 1$.",
    "answer": "The numerator and denominator ($x^{3} - x^{2}$) have the same degree, so divide: $\\frac{x^{3} + 2}{x^{3} - x^{2}} = 1 + \\frac{x^{2} + 2}{x^{2}(x - 1)}$. Write $\\frac{x^{2} + 2}{x^{2}(x - 1)} = \\frac{A}{x} + \\frac{B}{x^{2}} + \\frac{C}{x - 1}$, so $x^{2} + 2 = Ax(x - 1) + B(x - 1) + Cx^{2}$. Putting $x = 0$: $B = -2$. Putting $x = 1$: $C = 3$. Comparing $x^{2}$: $A + C = 1$, so $A = -2$. Hence $\\int = x - 2\\log x + \\frac{2}{x} + 3\\log(x - 1) + C$.",
    "steps": [
      {
        "step": "Division, giving $1 + \\frac{x^{2} + 2}{x^{2}(x - 1)}$",
        "marks": 1
      },
      {
        "step": "Correct partial fraction form with repeated factor",
        "marks": 1
      },
      {
        "step": "Constants $B = -2$ and $C = 3$",
        "marks": 1
      },
      {
        "step": "Constant $A = -2$",
        "marks": 1
      },
      {
        "step": "Integration and final answer",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d03",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "Find $\\int x^{2}\\tan^{-1}x\\,dx$.",
    "answer": "Take $u = \\tan^{-1}x$ and $dv = x^{2}dx$. Then $\\int x^{2}\\tan^{-1}x\\,dx = \\frac{x^{3}}{3}\\tan^{-1}x - \\frac{1}{3}\\int \\frac{x^{3}}{1 + x^{2}}dx$. Now $\\frac{x^{3}}{1 + x^{2}} = x - \\frac{x}{1 + x^{2}}$, so $\\int \\frac{x^{3}}{1 + x^{2}}dx = \\frac{x^{2}}{2} - \\frac{1}{2}\\log(1 + x^{2})$. Therefore the result is $\\frac{x^{3}}{3}\\tan^{-1}x - \\frac{x^{2}}{6} + \\frac{1}{6}\\log(1 + x^{2}) + C$.",
    "steps": [
      {
        "step": "Choice of $u$ and $dv$",
        "marks": 1
      },
      {
        "step": "Parts formula giving $\\frac{x^{3}}{3}\\tan^{-1}x - \\frac{1}{3}\\int \\frac{x^{3}}{1 + x^{2}}dx$",
        "marks": 1
      },
      {
        "step": "Dividing $\\frac{x^{3}}{1 + x^{2}} = x - \\frac{x}{1 + x^{2}}$",
        "marks": 1
      },
      {
        "step": "Integrating the pieces",
        "marks": 1
      },
      {
        "step": "Final answer with constant",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d04",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{x + \\sin x}{1 + \\cos x}\\,dx$.",
    "answer": "Use $1 + \\cos x = 2\\cos^{2}\\frac{x}{2}$ and $\\sin x = 2\\sin\\frac{x}{2}\\cos\\frac{x}{2}$. The integrand becomes $\\frac{x}{2}\\sec^{2}\\frac{x}{2} + \\tan\\frac{x}{2}$. By parts, $\\int \\frac{x}{2}\\sec^{2}\\frac{x}{2}\\,dx = x\\tan\\frac{x}{2} - \\int \\tan\\frac{x}{2}\\,dx$. So the integral of the whole integrand is $x\\tan\\frac{x}{2}$ (the $\\tan\\frac{x}{2}$ terms cancel). Then $\\left[x\\tan\\frac{x}{2}\\right]_{0}^{\\pi/2} = \\frac{\\pi}{2}\\tan\\frac{\\pi}{4} - 0 = \\frac{\\pi}{2}$.",
    "steps": [
      {
        "step": "Half-angle forms of $1 + \\cos x$ and $\\sin x$",
        "marks": 1
      },
      {
        "step": "Integrand rewritten as $\\frac{x}{2}\\sec^{2}\\frac{x}{2} + \\tan\\frac{x}{2}$",
        "marks": 1
      },
      {
        "step": "By parts on the first term",
        "marks": 1
      },
      {
        "step": "Cancellation giving antiderivative $x\\tan\\frac{x}{2}$",
        "marks": 1
      },
      {
        "step": "Applying limits to get $\\frac{\\pi}{2}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d05",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{\\sin x\\cos x}{\\cos^{2}x + 3\\sin^{2}x}\\,dx$.",
    "answer": "The denominator is $\\cos^{2}x + 3\\sin^{2}x = 1 + 2\\sin^{2}x$. Put $t = \\sin^{2}x$, so $dt = 2\\sin x\\cos x\\,dx$. When $x = 0$, $t = 0$ and when $x = \\frac{\\pi}{2}$, $t = 1$. The integral becomes $\\frac{1}{2}\\int_{0}^{1}\\frac{dt}{1 + 2t} = \\frac{1}{2}\\cdot\\frac{1}{2}\\left[\\log(1 + 2t)\\right]_{0}^{1} = \\frac{1}{4}\\log 3$.",
    "steps": [
      {
        "step": "Simplifying the denominator to $1 + 2\\sin^{2}x$",
        "marks": 1
      },
      {
        "step": "Substitution $t = \\sin^{2}x$ with $dt = 2\\sin x\\cos x\\,dx$",
        "marks": 1
      },
      {
        "step": "New limits $0$ and $1$",
        "marks": 1
      },
      {
        "step": "Integrating $\\frac{1}{2}\\int \\frac{dt}{1 + 2t}$",
        "marks": 1
      },
      {
        "step": "Final value $\\frac{1}{4}\\log 3$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d06",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{x}{\\sin x + \\cos x}\\,dx$.",
    "answer": "Let $I = \\int_{0}^{\\pi/2}\\frac{x}{\\sin x + \\cos x}dx$. Replacing $x$ by $\\frac{\\pi}{2} - x$, $I = \\int_{0}^{\\pi/2}\\frac{\\frac{\\pi}{2} - x}{\\cos x + \\sin x}dx$. Adding, $2I = \\frac{\\pi}{2}\\int_{0}^{\\pi/2}\\frac{dx}{\\sin x + \\cos x}$. Now $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$, so $\\int_{0}^{\\pi/2}\\frac{dx}{\\sin x + \\cos x} = \\frac{1}{\\sqrt{2}}\\left[\\log\\left|\\tan\\left(\\frac{x}{2} + \\frac{\\pi}{8}\\right)\\right|\\right]_{0}^{\\pi/2} = \\frac{1}{\\sqrt{2}}\\log\\frac{\\tan(3\\pi/8)}{\\tan(\\pi/8)}$. Since $\\tan\\frac{3\\pi}{8} = \\sqrt{2} + 1$ and $\\tan\\frac{\\pi}{8} = \\sqrt{2} - 1$, the ratio is $(\\sqrt{2} + 1)^{2}$, so this integral is $\\sqrt{2}\\log(\\sqrt{2} + 1)$. Hence $I = \\frac{\\pi}{4}\\sqrt{2}\\log(\\sqrt{2} + 1) = \\frac{\\pi}{2\\sqrt{2}}\\log(1 + \\sqrt{2})$.",
    "steps": [
      {
        "step": "Apply $x \\to \\frac{\\pi}{2} - x$ and add to get $2I = \\frac{\\pi}{2}\\int \\frac{dx}{\\sin x + \\cos x}$",
        "marks": 1
      },
      {
        "step": "Rewrite $\\sin x + \\cos x = \\sqrt{2}\\sin(x + \\frac{\\pi}{4})$",
        "marks": 1
      },
      {
        "step": "Antiderivative using $\\int \\operatorname{cosec}$ form",
        "marks": 1
      },
      {
        "step": "Limits with $\\tan\\frac{3\\pi}{8} = \\sqrt{2} + 1$ and $\\tan\\frac{\\pi}{8} = \\sqrt{2} - 1$",
        "marks": 1
      },
      {
        "step": "Final value of $I$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d07",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "Find $\\int \\frac{2\\sin x + 3\\cos x}{3\\sin x + 4\\cos x}\\,dx$.",
    "answer": "The derivative of the denominator is $3\\cos x - 4\\sin x$. Write the numerator as $2\\sin x + 3\\cos x = a(3\\sin x + 4\\cos x) + b(3\\cos x - 4\\sin x)$. Comparing coefficients of $\\sin x$: $3a - 4b = 2$, and of $\\cos x$: $4a + 3b = 3$. Solving, $a = \\frac{18}{25}$ and $b = \\frac{1}{25}$. Then $\\int = a\\int dx + b\\int \\frac{3\\cos x - 4\\sin x}{3\\sin x + 4\\cos x}dx = \\frac{18}{25}x + \\frac{1}{25}\\log|3\\sin x + 4\\cos x| + C$.",
    "steps": [
      {
        "step": "Numerator written as $a(\\text{denominator}) + b(\\text{its derivative})$",
        "marks": 1
      },
      {
        "step": "Equations $3a - 4b = 2$ and $4a + 3b = 3$",
        "marks": 1
      },
      {
        "step": "Solving $a = \\frac{18}{25}$, $b = \\frac{1}{25}$",
        "marks": 1
      },
      {
        "step": "Splitting into $a\\int dx + b\\int \\frac{f'}{f}dx$",
        "marks": 1
      },
      {
        "step": "Final answer with constant",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-d08",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{1} (2x + 1)\\sqrt{x - x^{2}}\\,dx$.",
    "answer": "Complete the square: $x - x^{2} = \\frac{1}{4} - \\left(x - \\frac{1}{2}\\right)^{2}$. Put $u = x - \\frac{1}{2}$, so $u$ runs from $-\\frac{1}{2}$ to $\\frac{1}{2}$ and $2x + 1 = 2u + 2$. The integral is $\\int_{-1/2}^{1/2}(2u + 2)\\sqrt{\\frac{1}{4} - u^{2}}\\,du = 2\\int_{-1/2}^{1/2}u\\sqrt{\\frac{1}{4} - u^{2}}\\,du + 2\\int_{-1/2}^{1/2}\\sqrt{\\frac{1}{4} - u^{2}}\\,du$. The first integrand is odd, so that part is $0$. For the second, $\\int_{-a}^{a}\\sqrt{a^{2} - u^{2}}\\,du = \\left[\\frac{u}{2}\\sqrt{a^{2} - u^{2}} + \\frac{a^{2}}{2}\\sin^{-1}\\frac{u}{a}\\right]_{-a}^{a} = \\frac{\\pi a^{2}}{2}$, which for $a = \\frac{1}{2}$ is $\\frac{\\pi}{8}$. So the value is $2\\cdot\\frac{\\pi}{8} = \\frac{\\pi}{4}$.",
    "steps": [
      {
        "step": "Completing the square and shifting by $u = x - \\frac{1}{2}$ with new limits",
        "marks": 1
      },
      {
        "step": "Splitting $2x + 1 = 2u + 2$",
        "marks": 1
      },
      {
        "step": "Odd part vanishes",
        "marks": 1
      },
      {
        "step": "Using the formula for $\\int \\sqrt{a^{2} - u^{2}}\\,du$ with $a = \\frac{1}{2}$",
        "marks": 1
      },
      {
        "step": "Final value $\\frac{\\pi}{4}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r3-e01",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "After an injection, a medicine is absorbed into the bloodstream. $t$ hours after the injection, the rate of absorption is $R(t) = 12\\,t\\,e^{-t^{2}}$ milligrams per hour. The amount absorbed between $t = a$ and $t = b$ is $\\int_{a}^{b} R(t)\\,dt$. Answer the following.",
    "answer": "(i) $-6e^{-t^{2}} + C$. (ii) $6(1 - e^{-1})$ mg. (iii) $6(1 - e^{-4})$ mg, less than $6$ mg; OR $T = \\sqrt{\\log 2}$ hours.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find $\\int 12\\,t\\,e^{-t^{2}}\\,dt$.",
        "answer": "Put $u = -t^{2}$, so $du = -2t\\,dt$. Then $\\int 12te^{-t^{2}}dt = -6\\int e^{u}du = -6e^{-t^{2}} + C$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find the amount of medicine absorbed in the first hour.",
        "answer": "$\\int_{0}^{1}12te^{-t^{2}}dt = \\left[-6e^{-t^{2}}\\right]_{0}^{1} = 6\\left(1 - e^{-1}\\right)$ mg, about $3.79$ mg."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the amount absorbed in the first 2 hours, and show that it is less than $6$ mg.\nOR\nFind the time $T$ (in hours) by which exactly $3$ mg has been absorbed.",
        "answer": "$\\int_{0}^{2}R(t)\\,dt = \\left[-6e^{-t^{2}}\\right]_{0}^{2} = 6\\left(1 - e^{-4}\\right)$ mg (1 mark). Since $e^{-4} > 0$, this is less than $6$ mg (1 mark).\nOR: $6\\left(1 - e^{-T^{2}}\\right) = 3$ gives $e^{-T^{2}} = \\frac{1}{2}$ (1 mark), so $T^{2} = \\log 2$ and $T = \\sqrt{\\log 2} \\approx 0.83$ hours (1 mark)."
      }
    ]
  },
  {
    "id": "c12-int-r3-e02",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A tea stall opens at $t = 0$ and, from one hour after opening, the rate at which cups are sold is $S(t) = 12\\log t$ cups per hour for $t \\ge 1$ ($t$ in hours). The number of cups sold between $t = a$ and $t = b$ is $\\int_{a}^{b} S(t)\\,dt$. Answer the following.",
    "answer": "(i) $t\\log t - t + C$. (ii) $12$ cups. (iii) $96\\log 2 - 36 \\approx 30.5$ cups; OR $3(e^{2} + 1)$ cups.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find $\\int \\log t\\,dt$.",
        "answer": "By parts with $u = \\log t$ and $dv = dt$: $\\int \\log t\\,dt = t\\log t - \\int dt = t\\log t - t + C$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find the number of cups sold between $t = 1$ and $t = e$.",
        "answer": "$12\\left[t\\log t - t\\right]_{1}^{e} = 12\\left[(e - e) - (0 - 1)\\right] = 12$ cups."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the number of cups sold between $t = 1$ and $t = 4$.\nOR\nIf the rate is instead $12\\,t\\log t$ cups per hour, find the number sold between $t = 1$ and $t = e$.",
        "answer": "$12\\left[t\\log t - t\\right]_{1}^{4} = 12\\left[(4\\log 4 - 4) - (0 - 1)\\right]$ (1 mark) $= 12(8\\log 2 - 3) = 96\\log 2 - 36 \\approx 30.5$ cups (1 mark).\nOR: $\\int t\\log t\\,dt = \\frac{t^{2}}{2}\\log t - \\frac{t^{2}}{4}$ (1 mark), so $12\\left[\\frac{t^{2}}{2}\\log t - \\frac{t^{2}}{4}\\right]_{1}^{e} = 12\\left[\\frac{e^{2}}{4} + \\frac{1}{4}\\right] = 3(e^{2} + 1)$ cups (1 mark)."
      }
    ]
  },
  {
    "id": "c12-int-r3-e03",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A landscape designer plans a garden pond whose upper boundary (in metres, with the $x$-axis along the straight bottom edge) is the curve $y = \\sqrt{9 - x^{2}}$ for $-3 \\le x \\le 3$. The area of the part of the pond lying between $x = a$ and $x = b$ is $\\int_{a}^{b} \\sqrt{9 - x^{2}}\\,dx$ square metres. Answer the following.",
    "answer": "(i) $\\frac{x}{2}\\sqrt{9 - x^{2}} + \\frac{9}{2}\\sin^{-1}\\frac{x}{3} + C$. (ii) $\\frac{9\\sqrt{3}}{8} + \\frac{3\\pi}{4}$ m$^{2}$. (iii) $\\frac{9\\pi}{2}$ m$^{2}$; OR $\\frac{3\\pi}{2} - \\frac{9\\sqrt{3}}{8}$ m$^{2}$.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find $\\int \\sqrt{9 - x^{2}}\\,dx$.",
        "answer": "Using $\\int \\sqrt{a^{2} - x^{2}}\\,dx = \\frac{x}{2}\\sqrt{a^{2} - x^{2}} + \\frac{a^{2}}{2}\\sin^{-1}\\frac{x}{a}$ with $a = 3$: the integral is $\\frac{x}{2}\\sqrt{9 - x^{2}} + \\frac{9}{2}\\sin^{-1}\\frac{x}{3} + C$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find the area of the part of the pond between $x = 0$ and $x = \\frac{3}{2}$.",
        "answer": "At $x = \\frac{3}{2}$: $\\frac{3}{4}\\sqrt{\\frac{27}{4}} + \\frac{9}{2}\\cdot\\frac{\\pi}{6} = \\frac{9\\sqrt{3}}{8} + \\frac{3\\pi}{4}$, and at $x = 0$ the value is $0$. So the area is $\\frac{9\\sqrt{3}}{8} + \\frac{3\\pi}{4}$ square metres (about $4.3$)."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the total area of the pond.\nOR\nFind the area of the part of the pond between $x = \\frac{3}{2}$ and $x = 3$.",
        "answer": "Total area $= \\left[\\frac{x}{2}\\sqrt{9 - x^{2}} + \\frac{9}{2}\\sin^{-1}\\frac{x}{3}\\right]_{-3}^{3}$ (1 mark) $= \\frac{9}{2}\\left(\\frac{\\pi}{2} + \\frac{\\pi}{2}\\right) = \\frac{9\\pi}{2}$ square metres (1 mark).\nOR: The value at $x = 3$ is $\\frac{9}{2}\\cdot\\frac{\\pi}{2} = \\frac{9\\pi}{4}$ (1 mark); subtracting the value at $\\frac{3}{2}$ gives $\\frac{9\\pi}{4} - \\frac{9\\sqrt{3}}{8} - \\frac{3\\pi}{4} = \\frac{3\\pi}{2} - \\frac{9\\sqrt{3}}{8}$ square metres (1 mark)."
      }
    ]
  },
  {
    "id": "c12-int-r3-e04",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "At a water-treatment plant, $t$ hours after the process starts, a pollutant is removed at the rate $R(t) = \\frac{9}{t^{2} + 6t + 13}$ kilograms per hour. The amount removed between $t = a$ and $t = b$ is $\\int_{a}^{b} R(t)\\,dt$. Answer the following.",
    "answer": "(i) $(t + 3)^{2} + 2^{2}$. (ii) $\\frac{9}{2}\\tan^{-1}\\frac{t + 3}{2} + C$. (iii) $\\frac{9}{2}\\tan^{-1}\\frac{1}{8}$ kg; OR $\\frac{9}{2}\\tan^{-1}\\frac{1}{7}$ kg.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Write $t^{2} + 6t + 13$ in the form $(t + p)^{2} + q^{2}$.",
        "answer": "$t^{2} + 6t + 13 = (t + 3)^{2} + 4 = (t + 3)^{2} + 2^{2}$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find $\\int R(t)\\,dt$.",
        "answer": "$\\int \\frac{9\\,dt}{(t + 3)^{2} + 2^{2}} = \\frac{9}{2}\\tan^{-1}\\left(\\frac{t + 3}{2}\\right) + C$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the amount removed during the first hour.\nOR\nFind the amount removed between $t = 1$ and $t = 3$.",
        "answer": "$\\frac{9}{2}\\left[\\tan^{-1}\\frac{t + 3}{2}\\right]_{0}^{1} = \\frac{9}{2}\\left(\\tan^{-1}2 - \\tan^{-1}\\frac{3}{2}\\right)$ (1 mark). Using $\\tan^{-1}a - \\tan^{-1}b = \\tan^{-1}\\frac{a - b}{1 + ab}$, this is $\\frac{9}{2}\\tan^{-1}\\frac{1}{8}$ kg, about $0.56$ kg (1 mark).\nOR: $\\frac{9}{2}\\left(\\tan^{-1}3 - \\tan^{-1}2\\right)$ (1 mark) $= \\frac{9}{2}\\tan^{-1}\\frac{1}{7}$ kg, about $0.64$ kg (1 mark)."
      }
    ]
  }
];
