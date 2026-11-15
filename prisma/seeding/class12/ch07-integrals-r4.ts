import type { Class12Question } from './types.js';

const C = 'Integrals';

export const CH07_INT_R4: Class12Question[] = [
  {
    "id": "c12-int-r4-a01",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "For $x > 0$, $\\int \\left(x + \\frac{1}{x}\\right)^{2}dx$ is equal to",
    "options": [
      "$\\frac{x^{3}}{3} + 2x - \\frac{1}{x} + C$",
      "$\\frac{x^{3}}{3} + 2x + \\frac{1}{x} + C$",
      "$\\frac{x^{3}}{3} - \\frac{1}{x} + C$",
      "$\\frac{1}{3}\\left(x + \\frac{1}{x}\\right)^{3} + C$"
    ],
    "answer": "Correct option: A) $\\frac{x^{3}}{3} + 2x - \\frac{1}{x} + C$. Expand $\\left(x + \\frac{1}{x}\\right)^{2} = x^{2} + 2 + \\frac{1}{x^{2}}$ and integrate term by term: $\\frac{x^{3}}{3} + 2x - \\frac{1}{x}$. Option C drops the middle term $2$, and D applies the power rule to a bracket, which is not allowed."
  },
  {
    "id": "c12-int-r4-a02",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "For $0 < x < \\pi$, $\\int \\frac{dx}{1 + \\cos x}$ is equal to",
    "options": [
      "$2\\tan\\frac{x}{2} + C$",
      "$-\\log|1 + \\cos x| + C$",
      "$\\tan x - \\sec x + C$",
      "$\\tan\\frac{x}{2} + C$"
    ],
    "answer": "Correct option: D) $\\tan\\frac{x}{2} + C$. Since $1 + \\cos x = 2\\cos^{2}\\frac{x}{2}$, the integrand is $\\frac{1}{2}\\sec^{2}\\frac{x}{2}$, whose integral is $\\frac{1}{2}\\cdot 2\\tan\\frac{x}{2} = \\tan\\frac{x}{2} + C$. Option A forgets the factor $\\frac{1}{2}$."
  },
  {
    "id": "c12-int-r4-a03",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $0 < x < \\frac{\\pi}{4}$, $\\int \\frac{\\cos 2x}{\\cos x + \\sin x}\\,dx$ is equal to",
    "options": [
      "$\\sin x - \\cos x + C$",
      "$\\sin x + \\cos x + C$",
      "$\\log|\\cos x + \\sin x| + C$",
      "$\\frac{1}{2}\\sin 2x + C$"
    ],
    "answer": "Correct option: B) $\\sin x + \\cos x + C$. Write $\\cos 2x = (\\cos x - \\sin x)(\\cos x + \\sin x)$. The factor $\\cos x + \\sin x$ cancels, leaving $\\int(\\cos x - \\sin x)\\,dx = \\sin x + \\cos x + C$."
  },
  {
    "id": "c12-int-r4-a04",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $0 < x < \\pi$, $\\int \\operatorname{cosec}x\\,(\\operatorname{cosec}x - \\cot x)\\,dx$ is equal to",
    "options": [
      "$\\cot x - \\operatorname{cosec}x + C$",
      "$\\cot x + \\operatorname{cosec}x + C$",
      "$\\operatorname{cosec}x - \\cot x + C$",
      "$-\\operatorname{cosec}x - \\cot x + C$"
    ],
    "answer": "Correct option: C) $\\operatorname{cosec}x - \\cot x + C$. Expand: $\\operatorname{cosec}^{2}x - \\operatorname{cosec}x\\cot x$. Since $\\int\\operatorname{cosec}^{2}x\\,dx = -\\cot x$ and $\\int\\operatorname{cosec}x\\cot x\\,dx = -\\operatorname{cosec}x$, the result is $-\\cot x + \\operatorname{cosec}x + C$. Option A has both signs reversed."
  },
  {
    "id": "c12-int-r4-a05",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$\\int \\frac{x}{\\sqrt{x^{2} + 9}}\\,dx$ is equal to",
    "options": [
      "$\\frac{1}{2}\\sqrt{x^{2} + 9} + C$",
      "$2\\sqrt{x^{2} + 9} + C$",
      "$\\sqrt{x^{2} + 9} + C$",
      "$\\frac{1}{3}\\left(x^{2} + 9\\right)^{3/2} + C$"
    ],
    "answer": "Correct option: C) $\\sqrt{x^{2} + 9} + C$. Put $u = x^{2} + 9$, so $x\\,dx = \\frac{du}{2}$. Then $\\frac{1}{2}\\int u^{-1/2}du = \\frac{1}{2}\\cdot 2u^{1/2} = \\sqrt{x^{2} + 9} + C$. The factor $\\frac{1}{2}$ from $du$ cancels the factor $2$ from integrating $u^{-1/2}$."
  },
  {
    "id": "c12-int-r4-a06",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $0 < x < \\pi$, $\\int \\frac{\\cos x}{\\sin^{3}x}\\,dx$ is equal to",
    "options": [
      "$\\frac{1}{2\\sin^{2}x} + C$",
      "$-\\frac{1}{\\sin^{2}x} + C$",
      "$-\\frac{1}{2\\sin^{2}x} + C$",
      "$-\\frac{1}{2\\sin x} + C$"
    ],
    "answer": "Correct option: C) $-\\frac{1}{2\\sin^{2}x} + C$. Put $u = \\sin x$, so $du = \\cos x\\,dx$. Then $\\int u^{-3}du = -\\frac{1}{2u^{2}} = -\\frac{1}{2\\sin^{2}x} + C$. Option B drops the $\\frac{1}{2}$ and A has the wrong sign."
  },
  {
    "id": "c12-int-r4-a07",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $x > 1$, $\\int \\frac{dx}{x\\log x}$ is equal to",
    "options": [
      "$\\frac{(\\log x)^{2}}{2} + C$",
      "$\\log(\\log x) + C$",
      "$-\\frac{1}{\\log x} + C$",
      "$\\log x + \\log(\\log x) + C$"
    ],
    "answer": "Correct option: B) $\\log(\\log x) + C$. Put $u = \\log x$, so $du = \\frac{dx}{x}$. The integral becomes $\\int\\frac{du}{u} = \\log|u| = \\log(\\log x) + C$ (note $\\log x > 0$ for $x > 1$)."
  },
  {
    "id": "c12-int-r4-a08",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $0 < x < \\pi$, $\\int \\frac{\\sin x}{(1 + \\cos x)^{2}}\\,dx$ is equal to",
    "options": [
      "$-\\frac{1}{1 + \\cos x} + C$",
      "$-\\log(1 + \\cos x) + C$",
      "$\\frac{1}{1 + \\cos x} + C$",
      "$\\frac{1}{2(1 + \\cos x)^{2}} + C$"
    ],
    "answer": "Correct option: C) $\\frac{1}{1 + \\cos x} + C$. Put $u = 1 + \\cos x$, so $du = -\\sin x\\,dx$. Then $-\\int u^{-2}du = \\frac{1}{u} + C = \\frac{1}{1 + \\cos x} + C$. Option A loses the sign from $du = -\\sin x\\,dx$."
  },
  {
    "id": "c12-int-r4-a09",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$\\int x\\sin 2x\\,dx$ is equal to",
    "options": [
      "$-\\frac{x\\cos 2x}{2} - \\frac{\\sin 2x}{4} + C$",
      "$-\\frac{x\\cos 2x}{2} + \\frac{\\sin 2x}{4} + C$",
      "$\\frac{x\\cos 2x}{2} + \\frac{\\sin 2x}{4} + C$",
      "$-x\\cos 2x + \\frac{\\sin 2x}{2} + C$"
    ],
    "answer": "Correct option: B) $-\\frac{x\\cos 2x}{2} + \\frac{\\sin 2x}{4} + C$. By parts with $u = x$, $dv = \\sin 2x\\,dx$: $\\int x\\sin 2x\\,dx = -\\frac{x\\cos 2x}{2} + \\frac{1}{2}\\int\\cos 2x\\,dx = -\\frac{x\\cos 2x}{2} + \\frac{\\sin 2x}{4} + C$. Option D forgets the factor $\\frac{1}{2}$ from $\\int\\sin 2x\\,dx$."
  },
  {
    "id": "c12-int-r4-a10",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $-1 < x < 1$, $\\int \\sin^{-1}x\\,dx$ is equal to",
    "options": [
      "$x\\sin^{-1}x - \\sqrt{1 - x^{2}} + C$",
      "$x\\sin^{-1}x + \\frac{x}{\\sqrt{1 - x^{2}}} + C$",
      "$x\\sin^{-1}x + \\sqrt{1 - x^{2}} + C$",
      "$\\frac{(\\sin^{-1}x)^{2}}{2} + C$"
    ],
    "answer": "Correct option: C) $x\\sin^{-1}x + \\sqrt{1 - x^{2}} + C$. Take $u = \\sin^{-1}x$, $dv = dx$: $x\\sin^{-1}x - \\int\\frac{x}{\\sqrt{1 - x^{2}}}dx = x\\sin^{-1}x + \\sqrt{1 - x^{2}} + C$, because $\\int\\frac{x\\,dx}{\\sqrt{1 - x^{2}}} = -\\sqrt{1 - x^{2}}$."
  },
  {
    "id": "c12-int-r4-a11",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "$\\int e^{x}\\left(\\sin x + \\cos x\\right)dx$ is equal to",
    "options": [
      "$e^{x}\\sin x + C$",
      "$e^{x}\\cos x + C$",
      "$e^{x}(\\sin x - \\cos x) + C$",
      "$\\frac{e^{x}(\\sin x + \\cos x)}{2} + C$"
    ],
    "answer": "Correct option: A) $e^{x}\\sin x + C$. With $f(x) = \\sin x$ we have $f^{\\prime}(x) = \\cos x$, so the integrand is $e^{x}[f(x) + f^{\\prime}(x)]$ and the integral is $e^{x}f(x) + C = e^{x}\\sin x + C$."
  },
  {
    "id": "c12-int-r4-a12",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "For $x > 5$, $\\int \\frac{dx}{\\sqrt{x^{2} - 6x + 5}}$ is equal to",
    "options": [
      "$\\log\\left|x + \\sqrt{x^{2} - 6x + 5}\\right| + C$",
      "$\\sin^{-1}\\left(\\frac{x - 3}{2}\\right) + C$",
      "$\\frac{1}{2}\\log\\left|x - 3 + \\sqrt{x^{2} - 6x + 5}\\right| + C$",
      "$\\log\\left|x - 3 + \\sqrt{x^{2} - 6x + 5}\\right| + C$"
    ],
    "answer": "Correct option: D) $\\log\\left|x - 3 + \\sqrt{x^{2} - 6x + 5}\\right| + C$. Complete the square: $x^{2} - 6x + 5 = (x - 3)^{2} - 2^{2}$. Then $\\int\\frac{dx}{\\sqrt{(x - 3)^{2} - 2^{2}}} = \\log\\left|x - 3 + \\sqrt{x^{2} - 6x + 5}\\right| + C$. Option B uses the inverse-sine form, which needs $a^{2} - u^{2}$."
  },
  {
    "id": "c12-int-r4-a13",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "$\\int \\sqrt{x^{2} + 25}\\,dx$ is equal to",
    "options": [
      "$\\frac{x}{2}\\sqrt{x^{2} + 25} + \\frac{5}{2}\\log\\left|x + \\sqrt{x^{2} + 25}\\right| + C$",
      "$\\frac{x}{2}\\sqrt{x^{2} + 25} - \\frac{25}{2}\\log\\left|x + \\sqrt{x^{2} + 25}\\right| + C$",
      "$\\frac{x}{2}\\sqrt{x^{2} + 25} + \\frac{25}{2}\\log\\left|x + \\sqrt{x^{2} + 25}\\right| + C$",
      "$\\frac{1}{3}\\left(x^{2} + 25\\right)^{3/2} + C$"
    ],
    "answer": "Correct option: C) $\\frac{x}{2}\\sqrt{x^{2} + 25} + \\frac{25}{2}\\log\\left|x + \\sqrt{x^{2} + 25}\\right| + C$. Use $\\int\\sqrt{x^{2} + a^{2}}\\,dx = \\frac{x}{2}\\sqrt{x^{2} + a^{2}} + \\frac{a^{2}}{2}\\log\\left|x + \\sqrt{x^{2} + a^{2}}\\right|$ with $a = 5$, so the coefficient is $\\frac{a^{2}}{2} = \\frac{25}{2}$, not $\\frac{5}{2}$."
  },
  {
    "id": "c12-int-r4-a14",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The value of $\\int_{0}^{1} \\frac{x^{2}}{1 + x^{3}}\\,dx$ is",
    "options": [
      "$\\log 2$",
      "$\\frac{1}{3}\\log 2$",
      "$\\frac{1}{2}\\log 2$",
      "$\\frac{1}{3}$"
    ],
    "answer": "Correct option: B) $\\frac{1}{3}\\log 2$. Put $u = 1 + x^{3}$, $du = 3x^{2}dx$; the limits become $1$ to $2$. The value is $\\frac{1}{3}\\int_{1}^{2}\\frac{du}{u} = \\frac{1}{3}\\log 2$."
  },
  {
    "id": "c12-int-r4-a15",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The value of $\\int_{-1}^{1} \\frac{dx}{x^{2} + 2x + 5}$ is",
    "options": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{16}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{8}$"
    ],
    "answer": "Correct option: D) $\\frac{\\pi}{8}$. Write $x^{2} + 2x + 5 = (x + 1)^{2} + 2^{2}$. Then the integral is $\\frac{1}{2}\\left[\\tan^{-1}\\frac{x + 1}{2}\\right]_{-1}^{1} = \\frac{1}{2}\\left(\\tan^{-1}1 - \\tan^{-1}0\\right) = \\frac{\\pi}{8}$. Option A forgets the factor $\\frac{1}{2}$."
  },
  {
    "id": "c12-int-r4-a16",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "If $\\int_{0}^{k} \\frac{dx}{1 + x^{2}} = \\frac{\\pi}{3}$ and $k > 0$, then $k$ is equal to",
    "options": [
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\sqrt{3}$",
      "$\\frac{\\pi}{3}$",
      "$3$"
    ],
    "answer": "Correct option: B) $\\sqrt{3}$. The integral equals $\\tan^{-1}k$. Setting $\\tan^{-1}k = \\frac{\\pi}{3}$ gives $k = \\tan\\frac{\\pi}{3} = \\sqrt{3}$. Option A is $\\tan\\frac{\\pi}{6}$."
  },
  {
    "id": "c12-int-r4-a17",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "A continuous function $f$ satisfies $f(x) + f(2 - x) = 6$ for all $x$. Then $\\int_{0}^{2} f(x)\\,dx$ is equal to",
    "options": [
      "$3$",
      "$6$",
      "$12$",
      "$18$"
    ],
    "answer": "Correct option: B) $6$. Let $I = \\int_{0}^{2} f(x)\\,dx = \\int_{0}^{2} f(2 - x)\\,dx$. Adding, $2I = \\int_{0}^{2}\\left[f(x) + f(2 - x)\\right]dx = \\int_{0}^{2} 6\\,dx = 12$, so $I = 6$."
  },
  {
    "id": "c12-int-r4-a18",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "mcq",
    "complexity": "hard",
    "marks": 1,
    "text": "The value of $\\int_{\\pi/6}^{\\pi/3} \\frac{dx}{1 + \\sqrt{\\tan x}}$ is",
    "options": [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{24}$",
      "$\\frac{\\pi}{12}$",
      "$\\frac{\\pi}{3}$"
    ],
    "answer": "Correct option: C) $\\frac{\\pi}{12}$. Replacing $x$ by $\\frac{\\pi}{6} + \\frac{\\pi}{3} - x = \\frac{\\pi}{2} - x$ turns $\\tan x$ into $\\cot x$, giving $\\frac{\\sqrt{\\tan x}}{1 + \\sqrt{\\tan x}}$. Adding the two forms, $2I = \\int_{\\pi/6}^{\\pi/3} 1\\,dx = \\frac{\\pi}{6}$, so $I = \\frac{\\pi}{12}$."
  },
  {
    "id": "c12-int-r4-a19",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): $\\int_{-\\pi/2}^{\\pi/2} \\sin^{2}x\\,dx = 0$.\nReason (R): If $f$ is an odd function, then $\\int_{-a}^{a} f(x)\\,dx = 0$.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "answer": "Correct option: D) A is false, but R is true. R is a true property. But $\\sin^{2}x$ is an even function (not odd) and is non-negative, so the integral is $2\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx = \\frac{\\pi}{2}$, not $0$. A is false."
  },
  {
    "id": "c12-int-r4-a20",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): $\\int e^{x}(1 + x)\\,dx = xe^{x} + C$.\nReason (R): $\\int e^{x}\\left[f(x) + f^{\\prime}(x)\\right]dx = e^{x}f(x) + C$.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "answer": "Correct option: A) Both A and R are true, and R is the correct explanation of A. Taking $f(x) = x$, we get $f^{\\prime}(x) = 1$, so $e^{x}(1 + x) = e^{x}[f(x) + f^{\\prime}(x)]$ and the integral is $e^{x}f(x) = xe^{x}$. R is true and is exactly the rule that proves A."
  },
  {
    "id": "c12-int-r4-b01",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find $\\int \\frac{dx}{x^{2} - 3x + 2}$, for $x > 2$.",
    "answer": "Factorise $x^{2} - 3x + 2 = (x - 1)(x - 2)$ and write $\\frac{1}{(x - 1)(x - 2)} = \\frac{1}{x - 2} - \\frac{1}{x - 1}$. Integrating gives $\\log|x - 2| - \\log|x - 1| + C = \\log\\left|\\frac{x - 2}{x - 1}\\right| + C$.",
    "steps": [
      {
        "step": "Factorise the denominator and split into partial fractions $\\frac{1}{x - 2} - \\frac{1}{x - 1}$.",
        "marks": 1
      },
      {
        "step": "Integrate to get $\\log\\left|\\frac{x - 2}{x - 1}\\right| + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-b02",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find $\\int \\cos^{3}x\\,\\sin^{2}x\\,dx$.",
    "answer": "Write $\\cos^{3}x = \\cos^{2}x\\cdot\\cos x = (1 - \\sin^{2}x)\\cos x$ and put $t = \\sin x$, $dt = \\cos x\\,dx$. Then $\\int(1 - t^{2})t^{2}dt = \\frac{t^{3}}{3} - \\frac{t^{5}}{5}$, so the integral is $\\frac{\\sin^{3}x}{3} - \\frac{\\sin^{5}x}{5} + C$.",
    "steps": [
      {
        "step": "Split $\\cos^{3}x = (1 - \\sin^{2}x)\\cos x$ and substitute $t = \\sin x$ to get $\\int(t^{2} - t^{4})dt$.",
        "marks": 1
      },
      {
        "step": "Integrate and resubstitute: $\\frac{\\sin^{3}x}{3} - \\frac{\\sin^{5}x}{5} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-b03",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Evaluate $\\int_{0}^{\\pi/2} x\\cos x\\,dx$.",
    "answer": "By parts, $\\int x\\cos x\\,dx = x\\sin x - \\int\\sin x\\,dx = x\\sin x + \\cos x$. Then $\\left[x\\sin x + \\cos x\\right]_{0}^{\\pi/2} = \\left(\\frac{\\pi}{2} + 0\\right) - (0 + 1) = \\frac{\\pi}{2} - 1$.",
    "steps": [
      {
        "step": "Integrate by parts to get $x\\sin x + \\cos x$.",
        "marks": 1
      },
      {
        "step": "Apply the limits: $\\frac{\\pi}{2} - 1$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-b04",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "short",
    "complexity": "easy",
    "marks": 2,
    "text": "Evaluate $\\int_{1}^{4} \\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^{2}dx$.",
    "answer": "Expand $\\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^{2} = x + 2 + \\frac{1}{x}$. Then $\\left[\\frac{x^{2}}{2} + 2x + \\log x\\right]_{1}^{4} = (8 + 8 + \\log 4) - \\left(\\frac{1}{2} + 2\\right) = \\frac{27}{2} + 2\\log 2$.",
    "steps": [
      {
        "step": "Expand the square to $x + 2 + \\frac{1}{x}$ and integrate to $\\frac{x^{2}}{2} + 2x + \\log x$.",
        "marks": 1
      },
      {
        "step": "Apply the limits to get $\\frac{27}{2} + 2\\log 2$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-b05",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x}\\,dx$.",
    "answer": "Let $I = \\int_{0}^{\\pi/2}\\frac{\\sin x}{\\sin x + \\cos x}dx$. Replacing $x$ by $\\frac{\\pi}{2} - x$ gives $I = \\int_{0}^{\\pi/2}\\frac{\\cos x}{\\sin x + \\cos x}dx$. Adding, $2I = \\int_{0}^{\\pi/2}1\\,dx = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$.",
    "steps": [
      {
        "step": "Use $\\int_{0}^{a}f(x)dx = \\int_{0}^{a}f(a - x)dx$ to get the companion integral with $\\cos x$ in the numerator.",
        "marks": 1
      },
      {
        "step": "Add the two forms to get $2I = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-b06",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Find $\\int \\frac{dx}{4x^{2} - 4x + 5}$.",
    "answer": "Write $4x^{2} - 4x + 5 = (2x - 1)^{2} + 2^{2}$. Put $u = 2x - 1$, $dx = \\frac{du}{2}$: the integral is $\\frac{1}{2}\\int\\frac{du}{u^{2} + 2^{2}} = \\frac{1}{2}\\cdot\\frac{1}{2}\\tan^{-1}\\frac{u}{2} = \\frac{1}{4}\\tan^{-1}\\left(\\frac{2x - 1}{2}\\right) + C$.",
    "steps": [
      {
        "step": "Complete the square: $(2x - 1)^{2} + 2^{2}$.",
        "marks": 1
      },
      {
        "step": "Substitute $u = 2x - 1$ and use the $\\tan^{-1}$ form to get $\\frac{1}{4}\\tan^{-1}\\frac{2x - 1}{2} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c01",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{x^{3} + 1}{x(x - 1)}\\,dx$, for $x > 1$.",
    "answer": "The fraction is improper, so divide: $x^{3} + 1 = (x + 1)(x^{2} - x) + (x + 1)$, giving $\\frac{x^{3} + 1}{x(x - 1)} = x + 1 + \\frac{x + 1}{x(x - 1)}$. Now $\\frac{x + 1}{x(x - 1)} = -\\frac{1}{x} + \\frac{2}{x - 1}$. Integrating, the result is $\\frac{x^{2}}{2} + x - \\log x + 2\\log(x - 1) + C$.",
    "steps": [
      {
        "step": "Divide, since the degree of the numerator exceeds that of the denominator: quotient $x + 1$, remainder $x + 1$.",
        "marks": 1
      },
      {
        "step": "Resolve $\\frac{x + 1}{x(x - 1)} = -\\frac{1}{x} + \\frac{2}{x - 1}$.",
        "marks": 1
      },
      {
        "step": "Integrate every term: $\\frac{x^{2}}{2} + x - \\log x + 2\\log(x - 1) + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c02",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{dx}{x^{2}(x^{2} + 1)}$, for $x > 0$.",
    "answer": "Use $\\frac{1}{x^{2}(x^{2} + 1)} = \\frac{1}{x^{2}} - \\frac{1}{x^{2} + 1}$ (put $y = x^{2}$ in $\\frac{1}{y(y + 1)} = \\frac{1}{y} - \\frac{1}{y + 1}$). Then $\\int\\frac{dx}{x^{2}} - \\int\\frac{dx}{x^{2} + 1} = -\\frac{1}{x} - \\tan^{-1}x + C$.",
    "steps": [
      {
        "step": "Split $\\frac{1}{x^{2}(x^{2} + 1)}$ as $\\frac{1}{x^{2}} - \\frac{1}{x^{2} + 1}$ (treating $x^{2}$ as one variable).",
        "marks": 2
      },
      {
        "step": "Integrate to get $-\\frac{1}{x} - \\tan^{-1}x + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c03",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\frac{dx}{x(x + 1)^{3}}$, for $x > 0$.",
    "answer": "Write $\\frac{1}{x(x + 1)^{3}} = \\frac{A}{x} + \\frac{B}{x + 1} + \\frac{C}{(x + 1)^{2}} + \\frac{D}{(x + 1)^{3}}$. Comparing, $A = 1$, $D = -1$, $B = -1$, $C = -1$. Integrating: $\\log x - \\log(x + 1) + \\frac{1}{x + 1} + \\frac{1}{2(x + 1)^{2}} + C$.",
    "steps": [
      {
        "step": "Set up partial fractions for the repeated factor with $\\frac{1}{x}$, $\\frac{1}{x + 1}$, $\\frac{1}{(x + 1)^{2}}$, $\\frac{1}{(x + 1)^{3}}$ terms.",
        "marks": 1
      },
      {
        "step": "Find the constants $A = 1$, $B = -1$, $C = -1$, $D = -1$.",
        "marks": 1
      },
      {
        "step": "Integrate each term to get $\\log\\frac{x}{x + 1} + \\frac{1}{x + 1} + \\frac{1}{2(x + 1)^{2}} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c04",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int x^{3}e^{x^{2}}\\,dx$.",
    "answer": "Put $t = x^{2}$, so $x\\,dx = \\frac{dt}{2}$ and the integral is $\\frac{1}{2}\\int te^{t}dt$. By parts, $\\int te^{t}dt = te^{t} - e^{t}$. So the result is $\\frac{1}{2}(t - 1)e^{t} = \\frac{1}{2}\\left(x^{2} - 1\\right)e^{x^{2}} + C$.",
    "steps": [
      {
        "step": "Substitute $t = x^{2}$ to reduce to $\\frac{1}{2}\\int te^{t}dt$.",
        "marks": 1
      },
      {
        "step": "Integrate by parts: $te^{t} - e^{t}$.",
        "marks": 1
      },
      {
        "step": "Resubstitute: $\\frac{1}{2}(x^{2} - 1)e^{x^{2}} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c05",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\sin\\sqrt{x}\\,dx$, for $x > 0$.",
    "answer": "Put $\\sqrt{x} = t$, so $x = t^{2}$ and $dx = 2t\\,dt$. The integral is $2\\int t\\sin t\\,dt = 2\\left(-t\\cos t + \\sin t\\right)$ by parts. Resubstituting, the result is $2\\sin\\sqrt{x} - 2\\sqrt{x}\\cos\\sqrt{x} + C$.",
    "steps": [
      {
        "step": "Substitute $\\sqrt{x} = t$ to get $2\\int t\\sin t\\,dt$.",
        "marks": 1
      },
      {
        "step": "Integrate by parts: $-t\\cos t + \\sin t$.",
        "marks": 1
      },
      {
        "step": "Resubstitute to get $2\\sin\\sqrt{x} - 2\\sqrt{x}\\cos\\sqrt{x} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c06",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\log\\left(x^{2} + 1\\right)dx$.",
    "answer": "Take $u = \\log(x^{2} + 1)$ and $dv = dx$: $x\\log(x^{2} + 1) - \\int\\frac{2x^{2}}{x^{2} + 1}dx$. Since $\\frac{2x^{2}}{x^{2} + 1} = 2 - \\frac{2}{x^{2} + 1}$, the integral is $x\\log(x^{2} + 1) - 2x + 2\\tan^{-1}x + C$.",
    "steps": [
      {
        "step": "Apply parts with $u = \\log(x^{2} + 1)$, $dv = dx$ to get $x\\log(x^{2} + 1) - \\int\\frac{2x^{2}}{x^{2} + 1}dx$.",
        "marks": 1
      },
      {
        "step": "Rewrite $\\frac{2x^{2}}{x^{2} + 1} = 2 - \\frac{2}{x^{2} + 1}$.",
        "marks": 1
      },
      {
        "step": "Integrate: $x\\log(x^{2} + 1) - 2x + 2\\tan^{-1}x + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c07",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int e^{x}\\,\\frac{1 + \\sin x}{1 + \\cos x}\\,dx$, for $0 < x < \\pi$.",
    "answer": "Use $1 + \\sin x = 1 + 2\\sin\\frac{x}{2}\\cos\\frac{x}{2}$ and $1 + \\cos x = 2\\cos^{2}\\frac{x}{2}$. Then $\\frac{1 + \\sin x}{1 + \\cos x} = \\frac{1}{2}\\sec^{2}\\frac{x}{2} + \\tan\\frac{x}{2}$. With $f(x) = \\tan\\frac{x}{2}$ and $f^{\\prime}(x) = \\frac{1}{2}\\sec^{2}\\frac{x}{2}$, the integral is $e^{x}\\tan\\frac{x}{2} + C$.",
    "steps": [
      {
        "step": "Rewrite the fraction as $\\frac{1}{2}\\sec^{2}\\frac{x}{2} + \\tan\\frac{x}{2}$ using half-angle identities.",
        "marks": 1
      },
      {
        "step": "Identify $f(x) = \\tan\\frac{x}{2}$ and $f^{\\prime}(x) = \\frac{1}{2}\\sec^{2}\\frac{x}{2}$, the $e^{x}[f + f^{\\prime}]$ form.",
        "marks": 1
      },
      {
        "step": "Conclude $e^{x}\\tan\\frac{x}{2} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c08",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{\\cos 2x}{(\\sin x + \\cos x)^{2}}\\,dx$, where $\\sin x + \\cos x \\neq 0$.",
    "answer": "Write $\\cos 2x = (\\cos x - \\sin x)(\\cos x + \\sin x)$, so the integrand reduces to $\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}$. Put $t = \\cos x + \\sin x$, $dt = (\\cos x - \\sin x)dx$. The integral is $\\int\\frac{dt}{t} = \\log|\\sin x + \\cos x| + C$.",
    "steps": [
      {
        "step": "Factorise $\\cos 2x$ and cancel one factor of $\\sin x + \\cos x$.",
        "marks": 1
      },
      {
        "step": "Substitute $t = \\sin x + \\cos x$ with $dt = (\\cos x - \\sin x)dx$.",
        "marks": 1
      },
      {
        "step": "Integrate to get $\\log|\\sin x + \\cos x| + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c09",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Find $\\int \\frac{dx}{1 + e^{x}}$.",
    "answer": "Write $\\frac{1}{1 + e^{x}} = \\frac{(1 + e^{x}) - e^{x}}{1 + e^{x}} = 1 - \\frac{e^{x}}{1 + e^{x}}$. Then $\\int 1\\,dx = x$ and, putting $t = 1 + e^{x}$, $\\int\\frac{e^{x}}{1 + e^{x}}dx = \\log(1 + e^{x})$. The result is $x - \\log(1 + e^{x}) + C$.",
    "steps": [
      {
        "step": "Rewrite the integrand as $1 - \\frac{e^{x}}{1 + e^{x}}$.",
        "marks": 1
      },
      {
        "step": "Integrate $\\frac{e^{x}}{1 + e^{x}}$ by $t = 1 + e^{x}$ to get $\\log(1 + e^{x})$.",
        "marks": 1
      },
      {
        "step": "Combine: $x - \\log(1 + e^{x}) + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c10",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\frac{\\sin x}{\\sin x - \\cos x}\\,dx$, for $\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$.",
    "answer": "Write $\\sin x = A(\\sin x - \\cos x) + B(\\cos x + \\sin x)$, where $\\cos x + \\sin x$ is the derivative of the denominator. Comparing coefficients, $A + B = 1$ and $-A + B = 0$, so $A = B = \\frac{1}{2}$. Then the integral is $\\frac{1}{2}\\int 1\\,dx + \\frac{1}{2}\\int\\frac{\\cos x + \\sin x}{\\sin x - \\cos x}dx = \\frac{x}{2} + \\frac{1}{2}\\log|\\sin x - \\cos x| + C$.",
    "steps": [
      {
        "step": "Express the numerator as $A(\\text{denominator}) + B(\\text{derivative of denominator})$.",
        "marks": 1
      },
      {
        "step": "Find $A = B = \\frac{1}{2}$.",
        "marks": 1
      },
      {
        "step": "Integrate: $\\frac{x}{2} + \\frac{1}{2}\\log|\\sin x - \\cos x| + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c11",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Find $\\int \\sqrt{\\frac{1 - x}{1 + x}}\\,dx$, for $-1 < x < 1$.",
    "answer": "Multiply numerator and denominator by $\\sqrt{1 - x}$: $\\sqrt{\\frac{1 - x}{1 + x}} = \\frac{1 - x}{\\sqrt{1 - x^{2}}} = \\frac{1}{\\sqrt{1 - x^{2}}} - \\frac{x}{\\sqrt{1 - x^{2}}}$. Integrating, $\\int\\frac{dx}{\\sqrt{1 - x^{2}}} = \\sin^{-1}x$ and $\\int\\frac{x\\,dx}{\\sqrt{1 - x^{2}}} = -\\sqrt{1 - x^{2}}$. The result is $\\sin^{-1}x + \\sqrt{1 - x^{2}} + C$.",
    "steps": [
      {
        "step": "Rationalise to $\\frac{1}{\\sqrt{1 - x^{2}}} - \\frac{x}{\\sqrt{1 - x^{2}}}$.",
        "marks": 1
      },
      {
        "step": "Integrate the first term to $\\sin^{-1}x$.",
        "marks": 1
      },
      {
        "step": "Integrate the second term by $t = 1 - x^{2}$ and combine: $\\sin^{-1}x + \\sqrt{1 - x^{2}} + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c12",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Evaluate $\\int_{0}^{\\pi} x\\cos^{2}x\\,dx$.",
    "answer": "Let $I = \\int_{0}^{\\pi}x\\cos^{2}x\\,dx$. Replacing $x$ by $\\pi - x$ (and noting $\\cos^{2}(\\pi - x) = \\cos^{2}x$), $I = \\int_{0}^{\\pi}(\\pi - x)\\cos^{2}x\\,dx$. Adding, $2I = \\pi\\int_{0}^{\\pi}\\cos^{2}x\\,dx = \\pi\\cdot\\frac{\\pi}{2}$, so $I = \\frac{\\pi^{2}}{4}$.",
    "steps": [
      {
        "step": "Apply $x \\to \\pi - x$ and note $\\cos^{2}x$ is unchanged.",
        "marks": 1
      },
      {
        "step": "Add to get $2I = \\pi\\int_{0}^{\\pi}\\cos^{2}x\\,dx$.",
        "marks": 1
      },
      {
        "step": "Evaluate $\\int_{0}^{\\pi}\\cos^{2}x\\,dx = \\frac{\\pi}{2}$ and conclude $I = \\frac{\\pi^{2}}{4}$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c13",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Evaluate $\\int_{-\\pi/4}^{\\pi/4} \\frac{dx}{1 + e^{\\tan x}}$.",
    "answer": "Let $I = \\int_{-\\pi/4}^{\\pi/4}\\frac{dx}{1 + e^{\\tan x}}$. Using $\\int_{-a}^{a}f(x)dx = \\int_{-a}^{a}f(-x)dx$ gives $I = \\int_{-\\pi/4}^{\\pi/4}\\frac{dx}{1 + e^{-\\tan x}} = \\int_{-\\pi/4}^{\\pi/4}\\frac{e^{\\tan x}}{1 + e^{\\tan x}}dx$. Adding, $2I = \\int_{-\\pi/4}^{\\pi/4}1\\,dx = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$.",
    "steps": [
      {
        "step": "Replace $x$ by $-x$ to get the companion integral $\\frac{e^{\\tan x}}{1 + e^{\\tan x}}$.",
        "marks": 1
      },
      {
        "step": "Add the two integrals, whose integrand sums to $1$.",
        "marks": 1
      },
      {
        "step": "Conclude $2I = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c14",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Evaluate $\\int_{0}^{1} \\tan^{-1}x\\,dx$.",
    "answer": "By parts with $u = \\tan^{-1}x$ and $dv = dx$: $\\int\\tan^{-1}x\\,dx = x\\tan^{-1}x - \\int\\frac{x}{1 + x^{2}}dx = x\\tan^{-1}x - \\frac{1}{2}\\log(1 + x^{2})$. Applying the limits, $\\left(\\frac{\\pi}{4} - \\frac{1}{2}\\log 2\\right) - 0 = \\frac{\\pi}{4} - \\frac{1}{2}\\log 2$.",
    "steps": [
      {
        "step": "Integrate by parts to $x\\tan^{-1}x - \\int\\frac{x}{1 + x^{2}}dx$.",
        "marks": 1
      },
      {
        "step": "Evaluate the antiderivative $x\\tan^{-1}x - \\frac{1}{2}\\log(1 + x^{2})$.",
        "marks": 1
      },
      {
        "step": "Apply the limits: $\\frac{\\pi}{4} - \\frac{1}{2}\\log 2$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-c15",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Evaluate $\\int_{0}^{1} \\frac{x}{1 + x^{4}}\\,dx$.",
    "answer": "Put $t = x^{2}$, so $x\\,dx = \\frac{dt}{2}$; the limits remain $0$ to $1$. The integral is $\\frac{1}{2}\\int_{0}^{1}\\frac{dt}{1 + t^{2}} = \\frac{1}{2}\\left[\\tan^{-1}t\\right]_{0}^{1} = \\frac{1}{2}\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{8}$.",
    "steps": [
      {
        "step": "Substitute $t = x^{2}$ and change the limits to $0$ and $1$.",
        "marks": 1
      },
      {
        "step": "Integrate $\\frac{1}{2}\\int\\frac{dt}{1 + t^{2}} = \\frac{1}{2}\\tan^{-1}t$.",
        "marks": 1
      },
      {
        "step": "Apply the limits to get $\\frac{\\pi}{8}$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d01",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Find $\\int \\frac{x^{2} + 4}{(x - 2)(x^{2} + 1)}\\,dx$, for $x > 2$.",
    "answer": "Write $\\frac{x^{2} + 4}{(x - 2)(x^{2} + 1)} = \\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 1}$. Then $x^{2} + 4 = A(x^{2} + 1) + (Bx + C)(x - 2)$. Putting $x = 2$ gives $8 = 5A$, so $A = \\frac{8}{5}$. Comparing $x^{2}$: $A + B = 1$, so $B = -\\frac{3}{5}$; constants: $A - 2C = 4$, so $C = -\\frac{6}{5}$. Hence the integrand is $\\frac{8}{5(x - 2)} - \\frac{3x + 6}{5(x^{2} + 1)}$. Integrating, $\\int\\frac{x\\,dx}{x^{2} + 1} = \\frac{1}{2}\\log(x^{2} + 1)$ and $\\int\\frac{dx}{x^{2} + 1} = \\tan^{-1}x$. The result is $\\frac{8}{5}\\log(x - 2) - \\frac{3}{10}\\log(x^{2} + 1) - \\frac{6}{5}\\tan^{-1}x + C$.",
    "steps": [
      {
        "step": "Set up $\\frac{A}{x - 2} + \\frac{Bx + C}{x^{2} + 1}$ and clear denominators.",
        "marks": 1
      },
      {
        "step": "Find $A = \\frac{8}{5}$.",
        "marks": 1
      },
      {
        "step": "Find $B = -\\frac{3}{5}$ and $C = -\\frac{6}{5}$.",
        "marks": 1
      },
      {
        "step": "Split $\\frac{3x + 6}{x^{2} + 1}$ into a log part and an inverse-tangent part.",
        "marks": 1
      },
      {
        "step": "Final result $\\frac{8}{5}\\log(x - 2) - \\frac{3}{10}\\log(x^{2} + 1) - \\frac{6}{5}\\tan^{-1}x + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d02",
    "chapter": C,
    "topic": "Integration by substitution",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Find $\\int \\frac{dx}{1 + \\sin x + \\cos x}$, for $0 < x < \\frac{\\pi}{2}$.",
    "answer": "Put $t = \\tan\\frac{x}{2}$, so $\\sin x = \\frac{2t}{1 + t^{2}}$, $\\cos x = \\frac{1 - t^{2}}{1 + t^{2}}$ and $dx = \\frac{2\\,dt}{1 + t^{2}}$. The denominator becomes $\\frac{(1 + t^{2}) + 2t + (1 - t^{2})}{1 + t^{2}} = \\frac{2(1 + t)}{1 + t^{2}}$. So the integrand is $\\frac{2\\,dt}{1 + t^{2}}\\cdot\\frac{1 + t^{2}}{2(1 + t)} = \\frac{dt}{1 + t}$. Integrating, $\\log|1 + t| + C = \\log\\left(1 + \\tan\\frac{x}{2}\\right) + C$.",
    "steps": [
      {
        "step": "Choose the substitution $t = \\tan\\frac{x}{2}$ with the correct expressions for $\\sin x$, $\\cos x$, $dx$.",
        "marks": 1
      },
      {
        "step": "Substitute into the denominator.",
        "marks": 1
      },
      {
        "step": "Simplify the denominator to $\\frac{2(1 + t)}{1 + t^{2}}$.",
        "marks": 1
      },
      {
        "step": "Cancel to reach $\\int\\frac{dt}{1 + t}$.",
        "marks": 1
      },
      {
        "step": "Integrate and resubstitute: $\\log\\left(1 + \\tan\\frac{x}{2}\\right) + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d03",
    "chapter": C,
    "topic": "Special forms of integrals",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{2} \\sqrt{4x - x^{2}}\\,dx$.",
    "answer": "Write $4x - x^{2} = 4 - (x - 2)^{2} = 2^{2} - (x - 2)^{2}$. Using $\\int\\sqrt{a^{2} - u^{2}}\\,du = \\frac{u}{2}\\sqrt{a^{2} - u^{2}} + \\frac{a^{2}}{2}\\sin^{-1}\\frac{u}{a}$ with $u = x - 2$ and $a = 2$, the antiderivative is $\\frac{x - 2}{2}\\sqrt{4x - x^{2}} + 2\\sin^{-1}\\frac{x - 2}{2}$. At $x = 2$ it equals $0$; at $x = 0$ it equals $0 + 2\\sin^{-1}(-1) = -\\pi$. So the value is $0 - (-\\pi) = \\pi$.",
    "steps": [
      {
        "step": "Complete the square: $4 - (x - 2)^{2}$.",
        "marks": 1
      },
      {
        "step": "Choose the standard form with $u = x - 2$, $a = 2$.",
        "marks": 1
      },
      {
        "step": "Write the antiderivative $\\frac{x - 2}{2}\\sqrt{4x - x^{2}} + 2\\sin^{-1}\\frac{x - 2}{2}$.",
        "marks": 1
      },
      {
        "step": "Evaluate at $x = 2$ and $x = 0$.",
        "marks": 1
      },
      {
        "step": "Subtract to get $\\pi$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d04",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{\\sin x - \\cos x}{1 + \\sin x\\cos x}\\,dx$.",
    "answer": "Let $I = \\int_{0}^{\\pi/2}\\frac{\\sin x - \\cos x}{1 + \\sin x\\cos x}dx$. Replace $x$ by $\\frac{\\pi}{2} - x$: $\\sin x \\leftrightarrow \\cos x$ while $\\sin x\\cos x$ is unchanged, so $I = \\int_{0}^{\\pi/2}\\frac{\\cos x - \\sin x}{1 + \\sin x\\cos x}dx = -I$. Hence $2I = 0$ and $I = 0$.",
    "steps": [
      {
        "step": "State the property $\\int_{0}^{a}f(x)dx = \\int_{0}^{a}f(a - x)dx$ with $a = \\frac{\\pi}{2}$.",
        "marks": 1
      },
      {
        "step": "Replace $x$ by $\\frac{\\pi}{2} - x$ in the integrand.",
        "marks": 1
      },
      {
        "step": "Show $\\sin x\\cos x$ is unchanged and the numerator changes sign.",
        "marks": 1
      },
      {
        "step": "Deduce $I = -I$.",
        "marks": 1
      },
      {
        "step": "Conclude $I = 0$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d05",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Find $\\int \\left(\\sin^{-1}x\\right)^{2}dx$, for $-1 < x < 1$.",
    "answer": "Take $u = (\\sin^{-1}x)^{2}$, $dv = dx$: $x(\\sin^{-1}x)^{2} - \\int\\frac{2x\\sin^{-1}x}{\\sqrt{1 - x^{2}}}dx$. For the second integral take $u = \\sin^{-1}x$ and $dv = \\frac{x}{\\sqrt{1 - x^{2}}}dx$, where $v = -\\sqrt{1 - x^{2}}$: $\\int\\frac{x\\sin^{-1}x}{\\sqrt{1 - x^{2}}}dx = -\\sqrt{1 - x^{2}}\\sin^{-1}x + \\int 1\\,dx = -\\sqrt{1 - x^{2}}\\sin^{-1}x + x$. Hence the result is $x(\\sin^{-1}x)^{2} + 2\\sqrt{1 - x^{2}}\\sin^{-1}x - 2x + C$.",
    "steps": [
      {
        "step": "First by-parts step: $x(\\sin^{-1}x)^{2} - 2\\int\\frac{x\\sin^{-1}x}{\\sqrt{1 - x^{2}}}dx$.",
        "marks": 1
      },
      {
        "step": "Identify $v = \\int\\frac{x}{\\sqrt{1 - x^{2}}}dx = -\\sqrt{1 - x^{2}}$.",
        "marks": 1
      },
      {
        "step": "Second by-parts step giving $-\\sqrt{1 - x^{2}}\\sin^{-1}x + x$.",
        "marks": 1
      },
      {
        "step": "Multiply by $-2$ and combine the two parts.",
        "marks": 1
      },
      {
        "step": "Final result with constant $C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d06",
    "chapter": C,
    "topic": "Definite integrals",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{\\pi} \\left|\\cos x - \\sin x\\right|dx$.",
    "answer": "$\\cos x - \\sin x = 0$ at $x = \\frac{\\pi}{4}$ in $[0, \\pi]$. It is positive on $\\left[0, \\frac{\\pi}{4}\\right]$ and negative on $\\left[\\frac{\\pi}{4}, \\pi\\right]$. So the integral is $\\int_{0}^{\\pi/4}(\\cos x - \\sin x)dx + \\int_{\\pi/4}^{\\pi}(\\sin x - \\cos x)dx$. The first is $\\left[\\sin x + \\cos x\\right]_{0}^{\\pi/4} = \\sqrt{2} - 1$. The second is $\\left[-\\cos x - \\sin x\\right]_{\\pi/4}^{\\pi} = 1 + \\sqrt{2}$. The total is $2\\sqrt{2}$.",
    "steps": [
      {
        "step": "Find the point $x = \\frac{\\pi}{4}$ where $\\cos x - \\sin x$ changes sign.",
        "marks": 1
      },
      {
        "step": "Split the integral and remove the modulus with the correct signs.",
        "marks": 1
      },
      {
        "step": "Evaluate the first part: $\\sqrt{2} - 1$.",
        "marks": 1
      },
      {
        "step": "Evaluate the second part: $1 + \\sqrt{2}$.",
        "marks": 1
      },
      {
        "step": "Add to get $2\\sqrt{2}$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d07",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Evaluate $\\int_{0}^{\\pi/2} \\frac{\\sin 2x}{\\sin^{4}x + \\cos^{4}x}\\,dx$.",
    "answer": "Put $t = \\sin^{2}x$, so $dt = 2\\sin x\\cos x\\,dx = \\sin 2x\\,dx$; the limits become $0$ and $1$. Since $\\cos^{2}x = 1 - t$, the denominator is $t^{2} + (1 - t)^{2} = 2t^{2} - 2t + 1 = 2\\left[\\left(t - \\frac{1}{2}\\right)^{2} + \\frac{1}{4}\\right]$. The integral is $\\frac{1}{2}\\int_{0}^{1}\\frac{dt}{\\left(t - \\frac{1}{2}\\right)^{2} + \\left(\\frac{1}{2}\\right)^{2}} = \\frac{1}{2}\\cdot 2\\left[\\tan^{-1}(2t - 1)\\right]_{0}^{1} = \\tan^{-1}(1) - \\tan^{-1}(-1) = \\frac{\\pi}{2}$.",
    "steps": [
      {
        "step": "Substitute $t = \\sin^{2}x$ with $dt = \\sin 2x\\,dx$ and limits $0$ to $1$.",
        "marks": 1
      },
      {
        "step": "Rewrite the denominator as $t^{2} + (1 - t)^{2} = 2t^{2} - 2t + 1$.",
        "marks": 1
      },
      {
        "step": "Complete the square to $2\\left[\\left(t - \\frac{1}{2}\\right)^{2} + \\frac{1}{4}\\right]$.",
        "marks": 1
      },
      {
        "step": "Integrate to $\\tan^{-1}(2t - 1)$.",
        "marks": 1
      },
      {
        "step": "Apply the limits to get $\\frac{\\pi}{2}$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-d08",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Find $\\int \\frac{\\log x}{(1 + x)^{2}}\\,dx$, for $x > 0$.",
    "answer": "Take $u = \\log x$ and $dv = \\frac{dx}{(1 + x)^{2}}$, so $v = -\\frac{1}{1 + x}$. Then the integral is $-\\frac{\\log x}{1 + x} + \\int\\frac{dx}{x(1 + x)}$. By partial fractions, $\\frac{1}{x(1 + x)} = \\frac{1}{x} - \\frac{1}{1 + x}$, whose integral is $\\log x - \\log(1 + x)$. So the result is $-\\frac{\\log x}{1 + x} + \\log x - \\log(1 + x) + C = \\frac{x\\log x}{1 + x} - \\log(1 + x) + C$.",
    "steps": [
      {
        "step": "Choose $u = \\log x$ and $dv = \\frac{dx}{(1 + x)^{2}}$ with $v = -\\frac{1}{1 + x}$.",
        "marks": 1
      },
      {
        "step": "Write the by-parts expression $-\\frac{\\log x}{1 + x} + \\int\\frac{dx}{x(1 + x)}$.",
        "marks": 1
      },
      {
        "step": "Split $\\frac{1}{x(1 + x)} = \\frac{1}{x} - \\frac{1}{1 + x}$.",
        "marks": 1
      },
      {
        "step": "Integrate it to $\\log x - \\log(1 + x)$.",
        "marks": 1
      },
      {
        "step": "Combine and simplify to $\\frac{x\\log x}{1 + x} - \\log(1 + x) + C$.",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-int-r4-e01",
    "chapter": C,
    "topic": "Standard indefinite integrals",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A metal rod is placed in a cooling bath. $t$ minutes after it is placed in the bath, its temperature changes at the rate $\\frac{dT}{dt} = -8e^{-t/4}$ degrees Celsius per minute. The change in temperature between $t = a$ and $t = b$ is $\\int_{a}^{b}\\frac{dT}{dt}\\,dt$. Answer the following.",
    "answer": "(i) $32e^{-t/4} + C$. (ii) A fall of $32(1 - e^{-1}) \\approx 20.2$ degrees Celsius. (iii) A fall of $32(e^{-1} - e^{-2}) \\approx 7.4$ degrees Celsius; OR $32(1 - e^{-2}) \\approx 27.7$ degrees Celsius.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find $\\int -8e^{-t/4}\\,dt$.",
        "answer": "$\\int -8e^{-t/4}dt = -8\\cdot(-4)e^{-t/4} + C = 32e^{-t/4} + C$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find the change in temperature during the first 4 minutes.",
        "answer": "$\\left[32e^{-t/4}\\right]_{0}^{4} = 32e^{-1} - 32 = -32\\left(1 - e^{-1}\\right)$, so the temperature falls by $32\\left(1 - e^{-1}\\right) \\approx 20.2$ degrees Celsius."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the fall in temperature between $t = 4$ and $t = 8$ minutes.\nOR\nFind the fall in temperature during the first 8 minutes.",
        "answer": "Change $= 32\\left(e^{-2} - e^{-1}\\right)$ (1 mark), so the fall is $32\\left(e^{-1} - e^{-2}\\right) \\approx 7.4$ degrees Celsius (1 mark).\nOR: Change $= 32\\left(e^{-2} - 1\\right)$ (1 mark), so the fall is $32\\left(1 - e^{-2}\\right) \\approx 27.7$ degrees Celsius (1 mark)."
      }
    ]
  },
  {
    "id": "c12-int-r4-e02",
    "chapter": C,
    "topic": "Properties of definite integrals",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A workshop electricity demand is modelled by $c(t) = 5 + \\frac{(t - 4)^{3}}{16}$ kilowatts, where $t$ is the number of hours after the workshop opens, for $0 \\le t \\le 8$. The energy used between $t = a$ and $t = b$ is $\\int_{a}^{b} c(t)\\,dt$ kilowatt-hours. Answer the following.",
    "answer": "(i) Cubic terms cancel, giving $10$. (ii) $40$ kWh. (iii) $16$ kWh in the first 4 hours and $24$ kWh in the last 4 hours; OR $20$ kWh between $t = 2$ and $t = 6$.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Show that $c(t) + c(8 - t) = 10$ for all $t$.",
        "answer": "$c(8 - t) = 5 + \\frac{(4 - t)^{3}}{16} = 5 - \\frac{(t - 4)^{3}}{16}$. Adding to $c(t)$, the cubic terms cancel and $c(t) + c(8 - t) = 10$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Using $\\int_{0}^{8}c(t)\\,dt = \\int_{0}^{8}c(8 - t)\\,dt$, find the energy used in the whole 8 hours.",
        "answer": "Let $I = \\int_{0}^{8}c(t)dt$. Adding the two equal forms, $2I = \\int_{0}^{8}\\left[c(t) + c(8 - t)\\right]dt = \\int_{0}^{8}10\\,dt = 80$, so $I = 40$ kWh."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the energy used in the first 4 hours, and hence in the last 4 hours.\nOR\nFind the energy used between $t = 2$ and $t = 6$.",
        "answer": "$\\int_{0}^{4}c(t)dt = \\left[5t + \\frac{(t - 4)^{4}}{64}\\right]_{0}^{4} = 20 - 4 = 16$ kWh (1 mark). So the last 4 hours use $40 - 16 = 24$ kWh (1 mark).\nOR: $\\int_{2}^{6}c(t)dt = \\left[5t + \\frac{(t - 4)^{4}}{64}\\right]_{2}^{6} = (30 + \\frac{16}{64}) - (10 + \\frac{16}{64})$ (1 mark) $= 20$ kWh (1 mark)."
      }
    ]
  },
  {
    "id": "c12-int-r4-e03",
    "chapter": C,
    "topic": "Integration by parts",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A vibrating plate moves along a straight line. $t$ seconds after it starts, its velocity is $v(t) = t\\cos t$ centimetres per second (a negative value means it moves backwards). The displacement between $t = a$ and $t = b$ is $\\int_{a}^{b}v(t)\\,dt$ centimetres. Answer the following.",
    "answer": "(i) $t\\sin t + \\cos t + C$. (ii) $\\frac{\\pi}{2} - 1$ cm. (iii) $-2\\pi$ cm; OR $-2$ cm.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find $\\int t\\cos t\\,dt$.",
        "answer": "By parts with $u = t$ and $dv = \\cos t\\,dt$: $\\int t\\cos t\\,dt = t\\sin t - \\int\\sin t\\,dt = t\\sin t + \\cos t + C$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find the displacement from $t = 0$ to $t = \\frac{\\pi}{2}$.",
        "answer": "$\\left[t\\sin t + \\cos t\\right]_{0}^{\\pi/2} = \\left(\\frac{\\pi}{2} + 0\\right) - (0 + 1) = \\frac{\\pi}{2} - 1 \\approx 0.57$ cm."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the displacement from $t = \\frac{\\pi}{2}$ to $t = \\frac{3\\pi}{2}$.\nOR\nFind the displacement from $t = 0$ to $t = \\pi$.",
        "answer": "At $t = \\frac{3\\pi}{2}$ the antiderivative is $\\frac{3\\pi}{2}(-1) + 0 = -\\frac{3\\pi}{2}$, and at $t = \\frac{\\pi}{2}$ it is $\\frac{\\pi}{2}$ (1 mark). The displacement is $-\\frac{3\\pi}{2} - \\frac{\\pi}{2} = -2\\pi$ cm, about $-6.28$ cm (backwards) (1 mark).\nOR: At $t = \\pi$ the antiderivative is $0 - 1 = -1$ and at $t = 0$ it is $1$ (1 mark), so the displacement is $-1 - 1 = -2$ cm (1 mark)."
      }
    ]
  },
  {
    "id": "c12-int-r4-e04",
    "chapter": C,
    "topic": "Integration by partial fractions",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "In a chemical reaction, the amount $x$ (in moles per litre) of a product formed $t$ minutes after the reaction starts, with $x = 0$ at $t = 0$, satisfies $\\frac{dx}{dt} = \\frac{1}{10}(2 - x)(5 - x)$ for $0 \\le x < 2$. Separating variables, the time taken to go from $x = a$ to $x = b$ is $t = 10\\int_{a}^{b}\\frac{dx}{(2 - x)(5 - x)}$ minutes. Answer the following.",
    "answer": "(i) $\\frac{1}{3}\\left[\\frac{1}{2 - x} - \\frac{1}{5 - x}\\right]$. (ii) $\\frac{1}{3}\\log\\frac{5 - x}{2 - x} + C$. (iii) $\\frac{10}{3}\\log\\frac{8}{5}$ minutes; OR $\\frac{10}{3}\\log\\frac{14}{5}$ minutes.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Express $\\frac{1}{(2 - x)(5 - x)}$ in partial fractions.",
        "answer": "Write $\\frac{1}{(2 - x)(5 - x)} = \\frac{A}{2 - x} + \\frac{B}{5 - x}$. Then $1 = A(5 - x) + B(2 - x)$; $x = 2$ gives $A = \\frac{1}{3}$ and $x = 5$ gives $B = -\\frac{1}{3}$. So it equals $\\frac{1}{3}\\left[\\frac{1}{2 - x} - \\frac{1}{5 - x}\\right]$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Find $\\int \\frac{dx}{(2 - x)(5 - x)}$ for $0 \\le x < 2$.",
        "answer": "$\\frac{1}{3}\\left[-\\log(2 - x) + \\log(5 - x)\\right] + C = \\frac{1}{3}\\log\\frac{5 - x}{2 - x} + C$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the time taken for $x$ to rise from $0$ to $1$.\nOR\nFind the time taken for $x$ to rise from $0$ to $\\frac{3}{2}$.",
        "answer": "$t = \\frac{10}{3}\\left[\\log\\frac{5 - x}{2 - x}\\right]_{0}^{1} = \\frac{10}{3}\\left(\\log 4 - \\log\\frac{5}{2}\\right)$ (1 mark) $= \\frac{10}{3}\\log\\frac{8}{5}$ minutes, about $1.57$ minutes (1 mark).\nOR: $t = \\frac{10}{3}\\left(\\log\\frac{7/2}{1/2} - \\log\\frac{5}{2}\\right) = \\frac{10}{3}\\left(\\log 7 - \\log\\frac{5}{2}\\right)$ (1 mark) $= \\frac{10}{3}\\log\\frac{14}{5}$ minutes, about $3.43$ minutes (1 mark)."
      }
    ]
  }
];
