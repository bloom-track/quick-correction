import type { Class12Question } from './types.js';

export const CH08_AOI_R4: Class12Question[] = [
  {
    "id": "c12-aoi-r4-a01",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = \\frac{1}{\\sqrt{x}}$, the x-axis and the lines $x = 1$ and $x = 4$ is",
    "options": [
      "$2$ sq units",
      "$1$ sq unit",
      "$\\ln 4$ sq units",
      "$\\frac{3}{2}$ sq units"
    ],
    "answer": "Correct option: A) Area $= \\int_{1}^{4} x^{-1/2}\\,dx = \\left[2\\sqrt{x}\\right]_{1}^{4} = 4 - 2 = 2$ sq units. Option B drops the factor 2, and option C treats the integrand like $\\frac{1}{x}$."
  },
  {
    "id": "c12-aoi-r4-a02",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = x e^{x^{2}}$, the x-axis and the lines $x = 0$ and $x = 1$ is",
    "options": [
      "$\\frac{e - 1}{2}$ sq units",
      "$(e - 1)$ sq units",
      "$\\frac{e + 1}{2}$ sq units",
      "$\\frac{e}{2}$ sq units"
    ],
    "answer": "Correct option: A) Put $t = x^{2}$, so $x\\,dx = \\frac{dt}{2}$. Area $= \\frac{1}{2}\\int_{0}^{1} e^{t}\\,dt = \\frac{e - 1}{2}$ sq units. Option B forgets the factor $\\frac{1}{2}$; option C adds the lower-limit value instead of subtracting it."
  },
  {
    "id": "c12-aoi-r4-a03",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area of the region enclosed by the parabola $y = x^{2}$ and the line $y = x + 2$ is given by",
    "options": [
      "$\\int_{-1}^{2} (x + 2 - x^{2})\\,dx$",
      "$\\int_{-1}^{2} (x^{2} - x - 2)\\,dx$",
      "$\\int_{0}^{2} (x + 2 - x^{2})\\,dx$",
      "$\\int_{-2}^{1} (x + 2 - x^{2})\\,dx$"
    ],
    "answer": "Correct option: A) The curves meet where $x^{2} = x + 2$, that is $x = -1$ and $x = 2$. On $[-1, 2]$ the line lies above the parabola, so the area is $\\int_{-1}^{2} (x + 2 - x^{2})\\,dx = \\frac{9}{2}$ sq units. Option B has the difference reversed (it is negative), C uses a wrong lower limit and D uses wrong limits."
  },
  {
    "id": "c12-aoi-r4-a04",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the region bounded by the curve $x = \\sqrt{16 - y^{2}}$ and the y-axis is",
    "options": [
      "$8\\pi$ sq units",
      "$16\\pi$ sq units",
      "$4\\pi$ sq units",
      "$64\\pi$ sq units"
    ],
    "answer": "Correct option: A) The curve is the right half of the circle $x^{2} + y^{2} = 16$, so the region is a semicircle of radius $4$ with area $\\frac{1}{2}\\pi \\cdot 4^{2} = 8\\pi$ sq units. Equivalently, $\\int_{-4}^{4} \\sqrt{16 - y^{2}}\\,dy = 8\\pi$."
  },
  {
    "id": "c12-aoi-r4-a05",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area enclosed by the ellipse $\\frac{x^{2}}{a^{2}} + \\frac{y^{2}}{4} = 1$ (with $a > 0$) is equal to the area enclosed by the circle $x^{2} + y^{2} = 36$. The value of $a$ is",
    "options": [
      "$18$",
      "$9$",
      "$6$",
      "$36$"
    ],
    "answer": "Correct option: A) The ellipse encloses $\\pi \\cdot a \\cdot 2 = 2\\pi a$ and the circle encloses $\\pi \\cdot 6^{2} = 36\\pi$. Equating, $2\\pi a = 36\\pi$, so $a = 18$."
  },
  {
    "id": "c12-aoi-r4-a06",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = \\frac{x}{\\sqrt{x^{2} + 9}}$, the x-axis and the lines $x = 0$ and $x = 4$ is",
    "options": [
      "$2$ sq units",
      "$5$ sq units",
      "$\\frac{4}{5}$ sq units",
      "$\\ln\\frac{5}{3}$ sq units"
    ],
    "answer": "Correct option: A) Since $\\frac{d}{dx}\\sqrt{x^{2} + 9} = \\frac{x}{\\sqrt{x^{2} + 9}}$, the area is $\\left[\\sqrt{x^{2} + 9}\\right]_{0}^{4} = 5 - 3 = 2$ sq units. Option B forgets to subtract the lower-limit value."
  },
  {
    "id": "c12-aoi-r4-a07",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = x e^{x}$, the x-axis and the lines $x = 0$ and $x = 1$ is",
    "options": [
      "$1$ sq unit",
      "$(2e - 1)$ sq units",
      "$e$ sq units",
      "$(e - 1)$ sq units"
    ],
    "answer": "Correct option: A) Integrating by parts, $\\int x e^{x}\\,dx = x e^{x} - e^{x}$. So the area is $\\left[x e^{x} - e^{x}\\right]_{0}^{1} = (e - e) - (0 - 1) = 1$ sq unit."
  },
  {
    "id": "c12-aoi-r4-a08",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = \\frac{1}{\\sqrt{1 - x^{2}}}$, the x-axis and the lines $x = 0$ and $x = \\frac{1}{2}$ is",
    "options": [
      "$\\frac{\\pi}{6}$ sq units",
      "$\\frac{\\pi}{3}$ sq units",
      "$\\tan^{-1}\\frac{1}{2}$ sq units",
      "$\\frac{1}{2}$ sq units"
    ],
    "answer": "Correct option: A) Area $= \\int_{0}^{1/2} \\frac{dx}{\\sqrt{1 - x^{2}}} = \\left[\\sin^{-1} x\\right]_{0}^{1/2} = \\frac{\\pi}{6}$ sq units. Option B uses $\\cos^{-1}\\frac{1}{2}$ instead."
  },
  {
    "id": "c12-aoi-r4-a09",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = \\frac{x}{1 + x^{2}}$, the x-axis and the lines $x = 0$ and $x = 1$ is",
    "options": [
      "$\\frac{1}{2}\\ln 2$ sq units",
      "$\\ln 2$ sq units",
      "$\\frac{\\pi}{4}$ sq units",
      "$\\frac{1}{2}$ sq units"
    ],
    "answer": "Correct option: A) Area $= \\int_{0}^{1} \\frac{x}{1 + x^{2}}\\,dx = \\left[\\frac{1}{2}\\ln(1 + x^{2})\\right]_{0}^{1} = \\frac{1}{2}\\ln 2$ sq units. Option B forgets the factor $\\frac{1}{2}$."
  },
  {
    "id": "c12-aoi-r4-a10",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): The area of the region bounded by the curve $y = \\frac{1}{x}$, the x-axis and the lines $x = -2$ and $x = -1$ is $-\\ln 2$ sq units.\nReason (R): Area is always a non-negative quantity.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "answer": "Correct option: D) $\\int_{-2}^{-1} \\frac{dx}{x} = \\ln 1 - \\ln 2 = -\\ln 2$ is only the value of the integral (the curve is below the x-axis). The area is its absolute value, $\\ln 2$ sq units, so A is false. R is true, since an area cannot be negative."
  },
  {
    "id": "c12-aoi-r4-a11",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "assertion_reason",
    "complexity": "medium",
    "marks": 1,
    "text": "Assertion (A): The area of the region bounded by the curve $y = \\frac{1}{1 + x^{2}}$, the x-axis and the lines $x = -1$ and $x = 1$ is $\\frac{\\pi}{2}$ sq units.\nReason (R): $\\int \\frac{dx}{1 + x^{2}} = \\ln(1 + x^{2}) + C$.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "answer": "Correct option: C) The curve is above the x-axis, so the area is $\\left[\\tan^{-1} x\\right]_{-1}^{1} = \\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}$ and A is true. R is false: the correct antiderivative is $\\tan^{-1} x + C$."
  },
  {
    "id": "c12-aoi-r4-a12",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the region bounded by the lines $y = x$, $y = 3x$ and $x = 2$ is",
    "options": [
      "$4$ sq units",
      "$6$ sq units",
      "$2$ sq units",
      "$8$ sq units"
    ],
    "answer": "Correct option: A) The lines meet at the origin, and on $[0, 2]$ the line $y = 3x$ lies above $y = x$. Area $= \\int_{0}^{2} (3x - x)\\,dx = \\left[x^{2}\\right]_{0}^{2} = 4$ sq units."
  },
  {
    "id": "c12-aoi-r4-a13",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "easy",
    "marks": 1,
    "text": "The area of the region bounded by the curve $y = \\sec x \\tan x$, the x-axis and the lines $x = 0$ and $x = \\frac{\\pi}{4}$ is",
    "options": [
      "$(\\sqrt{2} - 1)$ sq units",
      "$(\\sqrt{2} + 1)$ sq units",
      "$1$ sq unit",
      "$\\frac{\\sqrt{2}}{2}$ sq units"
    ],
    "answer": "Correct option: A) $\\int \\sec x \\tan x\\,dx = \\sec x$, so the area is $\\sec\\frac{\\pi}{4} - \\sec 0 = \\sqrt{2} - 1$ sq units."
  },
  {
    "id": "c12-aoi-r4-a14",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "hard",
    "marks": 1,
    "text": "The line $x = k$, where $0 < k < 2$, divides the region bounded by the curve $y = x^{2}$, the x-axis and the line $x = 2$ into two parts of equal area. The value of $k$ is",
    "options": [
      "$\\sqrt[3]{4}$",
      "$1$",
      "$\\sqrt[3]{2}$",
      "$\\sqrt{2}$"
    ],
    "answer": "Correct option: A) The whole area is $\\int_{0}^{2} x^{2}\\,dx = \\frac{8}{3}$. The part to the left of $x = k$ is $\\frac{k^{3}}{3}$. Setting $\\frac{k^{3}}{3} = \\frac{4}{3}$ gives $k^{3} = 4$, so $k = \\sqrt[3]{4}$. Option B is the midpoint, which would split the $x$-range, not the area."
  },
  {
    "id": "c12-aoi-r4-a15",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "mcq",
    "complexity": "medium",
    "marks": 1,
    "text": "The area of the region in the first quadrant bounded by the circle $x^{2} + y^{2} = 4$, the x-axis and the line $x = 1$ (and lying to the right of this line) is",
    "options": [
      "$\\left(\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}\\right)$ sq units",
      "$\\left(\\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}\\right)$ sq units",
      "$\\frac{2\\pi}{3}$ sq units",
      "$\\left(\\frac{2\\pi}{3} + \\frac{\\sqrt{3}}{2}\\right)$ sq units"
    ],
    "answer": "Correct option: A) Area $= \\int_{1}^{2} \\sqrt{4 - x^{2}}\\,dx = \\left[\\frac{x}{2}\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2}\\right]_{1}^{2} = \\pi - \\left(\\frac{\\sqrt{3}}{2} + \\frac{\\pi}{3}\\right) = \\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}$ sq units. Option B is the area to the left of $x = 1$."
  },
  {
    "id": "c12-aoi-r4-b01",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Using integration, find the area of the region bounded by the curve $y = \\sqrt{2x + 1}$, the x-axis and the lines $x = 0$ and $x = 4$.",
    "answer": "The curve lies above the x-axis on $[0, 4]$, so Area $= \\int_{0}^{4} \\sqrt{2x + 1}\\,dx = \\left[\\frac{(2x + 1)^{3/2}}{3}\\right]_{0}^{4} = \\frac{27 - 1}{3} = \\frac{26}{3}$ sq units.",
    "steps": [
      {
        "step": "Writes the area as $\\int_{0}^{4} \\sqrt{2x + 1}\\,dx$ (curve above the x-axis)",
        "marks": 1
      },
      {
        "step": "Integrates correctly and evaluates to $\\frac{26}{3}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-b02",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Using integration, find the area of the region bounded by the curve $y = x\\sqrt{x + 1}$, the x-axis and the lines $x = 0$ and $x = 3$.",
    "answer": "On $[0, 3]$ the curve is above the x-axis. Put $u = x + 1$, so $x = u - 1$, $dx = du$ and the limits become $1$ to $4$. Area $= \\int_{1}^{4} (u - 1)\\sqrt{u}\\,du = \\left[\\frac{2}{5}u^{5/2} - \\frac{2}{3}u^{3/2}\\right]_{1}^{4} = \\left(\\frac{64}{5} - \\frac{16}{3}\\right) - \\left(\\frac{2}{5} - \\frac{2}{3}\\right) = \\frac{116}{15}$ sq units.",
    "steps": [
      {
        "step": "Substitutes $u = x + 1$ and changes limits to get $\\int_{1}^{4} (u^{3/2} - u^{1/2})\\,du$",
        "marks": 1
      },
      {
        "step": "Integrates and evaluates to $\\frac{116}{15}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-b03",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "easy",
    "marks": 2,
    "text": "Using integration, find the area of the region bounded by the curve $y = 1 + \\sin x$, the x-axis and the lines $x = 0$ and $x = \\pi$.",
    "answer": "On $[0, \\pi]$, $1 + \\sin x \\ge 1 > 0$, so Area $= \\int_{0}^{\\pi} (1 + \\sin x)\\,dx = \\left[x - \\cos x\\right]_{0}^{\\pi} = (\\pi + 1) - (0 - 1) = \\pi + 2$ sq units.",
    "steps": [
      {
        "step": "Writes the area as $\\int_{0}^{\\pi} (1 + \\sin x)\\,dx$ (curve above the x-axis)",
        "marks": 1
      },
      {
        "step": "Integrates to $x - \\cos x$ and evaluates to $(\\pi + 2)$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-b04",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Using integration, find the area of the region bounded by the curve $y = x^{3/2}$, the x-axis and the line $x = 4$.",
    "answer": "The curve passes through the origin and lies above the x-axis for $x > 0$. Area $= \\int_{0}^{4} x^{3/2}\\,dx = \\left[\\frac{2}{5}x^{5/2}\\right]_{0}^{4} = \\frac{2}{5} \\cdot 32 = \\frac{64}{5}$ sq units.",
    "steps": [
      {
        "step": "Identifies the limits $0$ to $4$ and writes $\\int_{0}^{4} x^{3/2}\\,dx$",
        "marks": 1
      },
      {
        "step": "Integrates and evaluates to $\\frac{64}{5}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-b05",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Using integration, find the area of the region bounded by the curve $y = \\operatorname{cosec}^{2} x$, the x-axis and the lines $x = \\frac{\\pi}{4}$ and $x = \\frac{\\pi}{2}$.",
    "answer": "On $\\left[\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right]$ the curve is above the x-axis. Area $= \\int_{\\pi/4}^{\\pi/2} \\operatorname{cosec}^{2} x\\,dx = \\left[-\\cot x\\right]_{\\pi/4}^{\\pi/2} = -0 + 1 = 1$ sq unit.",
    "steps": [
      {
        "step": "Writes the area as $\\int_{\\pi/4}^{\\pi/2} \\operatorname{cosec}^{2} x\\,dx$",
        "marks": 1
      },
      {
        "step": "Uses $\\int \\operatorname{cosec}^{2} x\\,dx = -\\cot x$ and evaluates to $1$ sq unit",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-b06",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 2,
    "text": "Using integration, find the area of the region bounded by the curve $y = 1 - x^{4}$ and the x-axis.",
    "answer": "The curve meets the x-axis where $x^{4} = 1$, that is $x = \\pm 1$, and lies above the axis between them. It is symmetric about the y-axis, so Area $= 2\\int_{0}^{1} (1 - x^{4})\\,dx = 2\\left[x - \\frac{x^{5}}{5}\\right]_{0}^{1} = 2 \\cdot \\frac{4}{5} = \\frac{8}{5}$ sq units.",
    "steps": [
      {
        "step": "Finds the limits $x = \\pm 1$ and sets up the area (using symmetry)",
        "marks": 1
      },
      {
        "step": "Integrates and evaluates to $\\frac{8}{5}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c01",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Using integration, find the area of the region enclosed by the parabola $y = x^{2}$ and the line $y = 3x - 2$.",
    "answer": "The curves meet where $x^{2} = 3x - 2$, that is $x^{2} - 3x + 2 = 0$, so $x = 1$ and $x = 2$. On $[1, 2]$ the line lies above the parabola. Area $= \\int_{1}^{2} (3x - 2 - x^{2})\\,dx = \\left[\\frac{3x^{2}}{2} - 2x - \\frac{x^{3}}{3}\\right]_{1}^{2} = \\left(6 - 4 - \\frac{8}{3}\\right) - \\left(\\frac{3}{2} - 2 - \\frac{1}{3}\\right) = \\frac{1}{6}$ sq unit.",
    "steps": [
      {
        "step": "Finds the meeting points $x = 1$ and $x = 2$",
        "marks": 1
      },
      {
        "step": "Sets up $\\int_{1}^{2} (3x - 2 - x^{2})\\,dx$ with the line above the parabola",
        "marks": 1
      },
      {
        "step": "Integrates and evaluates to $\\frac{1}{6}$ sq unit",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c02",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Using integration, find the area of the smaller region cut off from the ellipse $4x^{2} + y^{2} = 16$ by the line $x = \\sqrt{2}$.",
    "answer": "The ellipse is $\\frac{x^{2}}{4} + \\frac{y^{2}}{16} = 1$, so $y = \\pm 2\\sqrt{4 - x^{2}}$ and $x$ runs up to $2$. The smaller part lies to the right of $x = \\sqrt{2}$ and is symmetric about the x-axis, so Area $= 2\\int_{\\sqrt{2}}^{2} 2\\sqrt{4 - x^{2}}\\,dx = 4\\left[\\frac{x}{2}\\sqrt{4 - x^{2}} + 2\\sin^{-1}\\frac{x}{2}\\right]_{\\sqrt{2}}^{2} = 4\\left[\\pi - \\left(1 + \\frac{\\pi}{2}\\right)\\right] = (2\\pi - 4)$ sq units.",
    "steps": [
      {
        "step": "Writes $y = \\pm 2\\sqrt{4 - x^{2}}$ and the limits $\\sqrt{2}$ to $2$ with symmetry about the x-axis",
        "marks": 1
      },
      {
        "step": "Uses the standard integral $\\int \\sqrt{a^{2} - x^{2}}\\,dx$ correctly",
        "marks": 1
      },
      {
        "step": "Substitutes the limits and gets $(2\\pi - 4)$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c03",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Using integration, find the area of the region bounded by the curve $y = 2^{x}$, the x-axis and the lines $x = 0$ and $x = 3$.",
    "answer": "The curve is above the x-axis, so Area $= \\int_{0}^{3} 2^{x}\\,dx$. Since $\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}$, Area $= \\left[\\frac{2^{x}}{\\ln 2}\\right]_{0}^{3} = \\frac{8 - 1}{\\ln 2} = \\frac{7}{\\ln 2}$ sq units.",
    "steps": [
      {
        "step": "Writes the area as $\\int_{0}^{3} 2^{x}\\,dx$",
        "marks": 1
      },
      {
        "step": "Uses $\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}$",
        "marks": 1
      },
      {
        "step": "Substitutes limits to get $\\frac{7}{\\ln 2}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c04",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Using integration, find the area of the region bounded by the curve $y = \\ln x$, the x-axis and the line $x = e^{2}$.",
    "answer": "The curve meets the x-axis at $x = 1$ and is above it for $x > 1$, so Area $= \\int_{1}^{e^{2}} \\ln x\\,dx$. By parts, $\\int \\ln x\\,dx = x\\ln x - x$. Hence Area $= \\left[x\\ln x - x\\right]_{1}^{e^{2}} = (2e^{2} - e^{2}) - (0 - 1) = (e^{2} + 1)$ sq units.",
    "steps": [
      {
        "step": "Finds the lower limit $x = 1$ and writes $\\int_{1}^{e^{2}} \\ln x\\,dx$",
        "marks": 1
      },
      {
        "step": "Integrates by parts to get $x\\ln x - x$",
        "marks": 1
      },
      {
        "step": "Substitutes limits to get $(e^{2} + 1)$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c05",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "Using integration, find the area of the smaller region bounded by the ellipse $\\frac{x^{2}}{9} + \\frac{y^{2}}{4} = 1$ and the line $\\frac{x}{3} + \\frac{y}{2} = 1$.",
    "answer": "The line is $y = 2 - \\frac{2x}{3}$. Substituting in the ellipse gives $\\frac{x^{2}}{9} + \\left(1 - \\frac{x}{3}\\right)^{2} = 1$, so $\\frac{2x^{2}}{9} - \\frac{2x}{3} = 0$ and $x = 0$ or $x = 3$; the points are $(0, 2)$ and $(3, 0)$. In the first quadrant the ellipse $y = \\frac{2}{3}\\sqrt{9 - x^{2}}$ is above the line. Area $= \\int_{0}^{3} \\left(\\frac{2}{3}\\sqrt{9 - x^{2}} - 2 + \\frac{2x}{3}\\right) dx = \\frac{2}{3} \\cdot \\frac{9\\pi}{4} - \\left[2x - \\frac{x^{2}}{3}\\right]_{0}^{3} = \\frac{3\\pi}{2} - 3$ sq units.",
    "steps": [
      {
        "step": "Finds the meeting points $(0, 2)$ and $(3, 0)$",
        "marks": 1
      },
      {
        "step": "Sets up $\\int_{0}^{3} \\left(\\frac{2}{3}\\sqrt{9 - x^{2}} - 2 + \\frac{2x}{3}\\right) dx$ with the ellipse above the line",
        "marks": 1
      },
      {
        "step": "Integrates and evaluates to $\\left(\\frac{3\\pi}{2} - 3\\right)$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c06",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "hard",
    "marks": 3,
    "text": "The area of the region bounded by the curve $y = \\frac{1}{x^{2}}$, the x-axis and the lines $x = 1$ and $x = k$, where $k > 1$, is $\\frac{3}{4}$ sq unit. Using integration, find $k$.",
    "answer": "Area $= \\int_{1}^{k} x^{-2}\\,dx = \\left[-\\frac{1}{x}\\right]_{1}^{k} = 1 - \\frac{1}{k}$. Setting $1 - \\frac{1}{k} = \\frac{3}{4}$ gives $\\frac{1}{k} = \\frac{1}{4}$, so $k = 4$.",
    "steps": [
      {
        "step": "Writes the area as $\\int_{1}^{k} x^{-2}\\,dx$",
        "marks": 1
      },
      {
        "step": "Evaluates it as $1 - \\frac{1}{k}$",
        "marks": 1
      },
      {
        "step": "Solves $1 - \\frac{1}{k} = \\frac{3}{4}$ to get $k = 4$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c07",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Using integration, find the area of the region bounded by the parabola $y = x^{2}$, the line $x + y = 2$ and the y-axis, lying in the first quadrant.",
    "answer": "The parabola and the line meet where $x^{2} = 2 - x$, that is $x^{2} + x - 2 = 0$, so $x = 1$ in the first quadrant (point $(1, 1)$). Between the y-axis ($x = 0$) and $x = 1$ the line is above the parabola. Area $= \\int_{0}^{1} (2 - x - x^{2})\\,dx = \\left[2x - \\frac{x^{2}}{2} - \\frac{x^{3}}{3}\\right]_{0}^{1} = 2 - \\frac{1}{2} - \\frac{1}{3} = \\frac{7}{6}$ sq units.",
    "steps": [
      {
        "step": "Finds the meeting point $x = 1$",
        "marks": 1
      },
      {
        "step": "Sets up $\\int_{0}^{1} (2 - x - x^{2})\\,dx$ with the line above the parabola",
        "marks": 1
      },
      {
        "step": "Integrates and evaluates to $\\frac{7}{6}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-c08",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "short",
    "complexity": "medium",
    "marks": 3,
    "text": "Using integration, find the area of the region in the first quadrant bounded by the curve $y = x\\sqrt{4 - x^{2}}$ and the x-axis.",
    "answer": "The curve meets the x-axis at $x = 0$ and $x = 2$, and is above it between them. Put $t = 4 - x^{2}$, so $x\\,dx = -\\frac{dt}{2}$. Area $= \\int_{0}^{2} x\\sqrt{4 - x^{2}}\\,dx = \\left[-\\frac{1}{3}(4 - x^{2})^{3/2}\\right]_{0}^{2} = 0 + \\frac{1}{3} \\cdot 8 = \\frac{8}{3}$ sq units.",
    "steps": [
      {
        "step": "Finds the limits $x = 0$ and $x = 2$",
        "marks": 1
      },
      {
        "step": "Uses the substitution $t = 4 - x^{2}$ to integrate",
        "marks": 1
      },
      {
        "step": "Evaluates to $\\frac{8}{3}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d01",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using integration, find the area of the region $\\{(x, y) : |x| \\le y \\le 6 - x^{2}\\}$.",
    "answer": "The curves $y = |x|$ and $y = 6 - x^{2}$ meet where $|x| = 6 - x^{2}$. For $x \\ge 0$ this is $x^{2} + x - 6 = 0$, so $x = 2$; by symmetry the other point is $x = -2$. On $[-2, 2]$ the parabola lies above $y = |x|$ (at $x = 0$, $6 > 0$). Both curves are symmetric about the y-axis, so Area $= 2\\int_{0}^{2} (6 - x^{2} - x)\\,dx = 2\\left[6x - \\frac{x^{3}}{3} - \\frac{x^{2}}{2}\\right]_{0}^{2} = 2\\left(12 - \\frac{8}{3} - 2\\right) = \\frac{44}{3}$ sq units.",
    "steps": [
      {
        "step": "Finds the meeting points $x = \\pm 2$",
        "marks": 1
      },
      {
        "step": "Identifies the parabola as the upper curve and $y = |x|$ as the lower curve",
        "marks": 1
      },
      {
        "step": "Uses symmetry to write $2\\int_{0}^{2} (6 - x^{2} - x)\\,dx$",
        "marks": 1
      },
      {
        "step": "Integrates correctly",
        "marks": 1
      },
      {
        "step": "Evaluates to $\\frac{44}{3}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d02",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "The parabola $x^{2} = 8y$ and the line $x - 2y + 8 = 0$ enclose a region. Using integration, find its area. Also show that the line $x = 2$ divides this region into two parts of equal area.",
    "answer": "The line is $y = \\frac{x + 8}{2}$. Substituting in $x^{2} = 8y$ gives $x^{2} = 4(x + 8)$, so $x^{2} - 4x - 32 = 0$ and $x = -4$ or $x = 8$. On $[-4, 8]$ the line is above the parabola. Area $= \\int_{-4}^{8} \\left(\\frac{x + 8}{2} - \\frac{x^{2}}{8}\\right) dx = \\left[\\frac{x^{2}}{4} + 4x - \\frac{x^{3}}{24}\\right]_{-4}^{8} = \\frac{80}{3} + \\frac{28}{3} = 36$ sq units. The part to the left of $x = 2$ is $\\left[\\frac{x^{2}}{4} + 4x - \\frac{x^{3}}{24}\\right]_{-4}^{2} = \\frac{26}{3} + \\frac{28}{3} = 18$ sq units, which is half of $36$. So $x = 2$ divides the region into two equal parts of $18$ sq units each.",
    "steps": [
      {
        "step": "Finds the meeting points $x = -4$ and $x = 8$",
        "marks": 1
      },
      {
        "step": "Sets up $\\int_{-4}^{8} \\left(\\frac{x + 8}{2} - \\frac{x^{2}}{8}\\right) dx$",
        "marks": 1
      },
      {
        "step": "Evaluates the total area $36$ sq units",
        "marks": 1
      },
      {
        "step": "Finds the area from $x = -4$ to $x = 2$ as $18$ sq units",
        "marks": 1
      },
      {
        "step": "Concludes that this is half of the total, so the parts are equal",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d03",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using integration, find the area of the region $\\{(x, y) : |x^{2} - 1| \\le y \\le 3\\}$.",
    "answer": "For $|x| \\le 1$ the lower boundary is $y = 1 - x^{2}$, and for $|x| \\ge 1$ it is $y = x^{2} - 1$. The lower boundary meets $y = 3$ where $x^{2} - 1 = 3$, so $x = \\pm 2$. The region is symmetric about the y-axis, so Area $= 2\\left[\\int_{0}^{1} \\big(3 - (1 - x^{2})\\big)dx + \\int_{1}^{2} \\big(3 - (x^{2} - 1)\\big)dx\\right] = 2\\left[\\int_{0}^{1} (2 + x^{2})\\,dx + \\int_{1}^{2} (4 - x^{2})\\,dx\\right] = 2\\left[\\frac{7}{3} + \\frac{5}{3}\\right] = 8$ sq units.",
    "steps": [
      {
        "step": "Writes $|x^{2} - 1|$ piecewise ($1 - x^{2}$ for $|x| \\le 1$, $x^{2} - 1$ otherwise)",
        "marks": 1
      },
      {
        "step": "Finds the right end $x = 2$ and uses symmetry",
        "marks": 1
      },
      {
        "step": "Sets up the two integrals $\\int_{0}^{1} (2 + x^{2})\\,dx$ and $\\int_{1}^{2} (4 - x^{2})\\,dx$",
        "marks": 1
      },
      {
        "step": "Evaluates them as $\\frac{7}{3}$ and $\\frac{5}{3}$",
        "marks": 1
      },
      {
        "step": "Doubles to get $8$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d04",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using integration, find the area of the region lying above the line $y = \\frac{1}{2}$ and below the curve $y = \\cos x$. Hence find the area of the part of the region bounded by $y = \\cos x$, the x-axis and the lines $x = -\\frac{\\pi}{3}$ and $x = \\frac{\\pi}{3}$ that lies below the line $y = \\frac{1}{2}$.",
    "answer": "$\\cos x = \\frac{1}{2}$ at $x = \\pm\\frac{\\pi}{3}$, and $\\cos x \\ge \\frac{1}{2}$ between them. Area above the line $= \\int_{-\\pi/3}^{\\pi/3} \\left(\\cos x - \\frac{1}{2}\\right) dx = \\left[\\sin x - \\frac{x}{2}\\right]_{-\\pi/3}^{\\pi/3} = 2\\left(\\frac{\\sqrt{3}}{2} - \\frac{\\pi}{6}\\right) = \\left(\\sqrt{3} - \\frac{\\pi}{3}\\right)$ sq units. The whole region under $y = \\cos x$ between $x = \\pm\\frac{\\pi}{3}$ has area $\\int_{-\\pi/3}^{\\pi/3} \\cos x\\,dx = \\sqrt{3}$. So the part below the line $y = \\frac{1}{2}$ has area $\\sqrt{3} - \\left(\\sqrt{3} - \\frac{\\pi}{3}\\right) = \\frac{\\pi}{3}$ sq units.",
    "steps": [
      {
        "step": "Finds the limits $x = \\pm\\frac{\\pi}{3}$ where $\\cos x = \\frac{1}{2}$",
        "marks": 1
      },
      {
        "step": "Writes $\\int_{-\\pi/3}^{\\pi/3} \\left(\\cos x - \\frac{1}{2}\\right) dx$",
        "marks": 1
      },
      {
        "step": "Evaluates it as $\\sqrt{3} - \\frac{\\pi}{3}$ sq units",
        "marks": 1
      },
      {
        "step": "Finds the whole area under $y = \\cos x$ on $\\left[-\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right]$ as $\\sqrt{3}$",
        "marks": 1
      },
      {
        "step": "Subtracts to get $\\frac{\\pi}{3}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d05",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using integration, find the area of the region bounded by the curve $y = x(x - 1)(x - 2)$ and the x-axis. Also show that the two loops enclosed have equal area.",
    "answer": "The curve meets the x-axis at $x = 0, 1, 2$. Here $y = x^{3} - 3x^{2} + 2x$ with $\\int y\\,dx = \\frac{x^{4}}{4} - x^{3} + x^{2}$. For $0 < x < 1$ the curve is above the axis: $\\int_{0}^{1} y\\,dx = \\frac{1}{4}$. For $1 < x < 2$ it is below the axis: $\\int_{1}^{2} y\\,dx = 0 - \\frac{1}{4} = -\\frac{1}{4}$, so that loop has area $\\frac{1}{4}$. The two loops each have area $\\frac{1}{4}$ sq unit, so the total area is $\\frac{1}{2}$ sq unit. (The signed integral over $[0, 2]$ is $0$, which is why the loops must be added separately.)",
    "steps": [
      {
        "step": "Finds the x-intercepts $0$, $1$, $2$ and the sign of the curve on each interval",
        "marks": 1
      },
      {
        "step": "Finds the antiderivative $\\frac{x^{4}}{4} - x^{3} + x^{2}$",
        "marks": 1
      },
      {
        "step": "Evaluates the first loop as $\\frac{1}{4}$ sq unit",
        "marks": 1
      },
      {
        "step": "Evaluates the second integral as $-\\frac{1}{4}$ and takes its absolute value",
        "marks": 1
      },
      {
        "step": "States equal loops and total area $\\frac{1}{2}$ sq unit",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d06",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "The line $x = a$, where $0 < a < 3$, divides the region bounded by the parabola $y = x^{2}$, the x-axis and the line $x = 3$ into two parts whose areas are in the ratio $1 : 7$. Using integration, find $a$.",
    "answer": "The whole area is $\\int_{0}^{3} x^{2}\\,dx = \\left[\\frac{x^{3}}{3}\\right]_{0}^{3} = 9$ sq units. The part to the left of $x = a$ is $\\int_{0}^{a} x^{2}\\,dx = \\frac{a^{3}}{3}$. A ratio $1 : 7$ means the left part is $\\frac{1}{8}$ of the whole, so $\\frac{a^{3}}{3} = \\frac{9}{8}$, giving $a^{3} = \\frac{27}{8}$ and $a = \\frac{3}{2}$. Check: the right part is $9 - \\frac{9}{8} = \\frac{63}{8}$, and $\\frac{9}{8} : \\frac{63}{8} = 1 : 7$.",
    "steps": [
      {
        "step": "Finds the whole area $9$ sq units",
        "marks": 1
      },
      {
        "step": "Writes the left part as $\\frac{a^{3}}{3}$",
        "marks": 1
      },
      {
        "step": "Interprets the ratio $1 : 7$ as the left part being $\\frac{1}{8}$ of the whole",
        "marks": 1
      },
      {
        "step": "Forms $\\frac{a^{3}}{3} = \\frac{9}{8}$",
        "marks": 1
      },
      {
        "step": "Solves to get $a = \\frac{3}{2}$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d07",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using integration, find the area of the region enclosed by the parabola $x = 6 - y^{2}$ and the line $y = x$.",
    "answer": "Substituting $x = y$ in $x = 6 - y^{2}$ gives $y^{2} + y - 6 = 0$, so $y = 2$ or $y = -3$; the meeting points are $(2, 2)$ and $(-3, -3)$. Integrating with respect to $y$ is simpler: for $-3 \\le y \\le 2$ the parabola ($x = 6 - y^{2}$) is to the right of the line ($x = y$). Area $= \\int_{-3}^{2} (6 - y^{2} - y)\\,dy = \\left[6y - \\frac{y^{3}}{3} - \\frac{y^{2}}{2}\\right]_{-3}^{2} = \\left(12 - \\frac{8}{3} - 2\\right) - \\left(-18 + 9 - \\frac{9}{2}\\right) = \\frac{22}{3} + \\frac{27}{2} = \\frac{125}{6}$ sq units.",
    "steps": [
      {
        "step": "Finds the meeting points with $y = 2$ and $y = -3$",
        "marks": 1
      },
      {
        "step": "Chooses to integrate with respect to $y$ and decides which curve is to the right",
        "marks": 1
      },
      {
        "step": "Writes $\\int_{-3}^{2} (6 - y^{2} - y)\\,dy$",
        "marks": 1
      },
      {
        "step": "Integrates correctly",
        "marks": 1
      },
      {
        "step": "Evaluates to $\\frac{125}{6}$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d08",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "In the plan of a garden (units in metres), a flower bed is bounded by the curved edge $y = 6x - x^{2}$ and the straight edge $y = 2x$. (a) Using integration, find the area of the flower bed and the cost of tiling it at Rs 150 per sq m. (b) The part of the bed with $x \\ge 3$ is to be laid with a different tile. Find the area of this part.",
    "answer": "(a) The edges meet where $6x - x^{2} = 2x$, so $x(4 - x) = 0$ and $x = 0$ or $x = 4$. On $[0, 4]$ the parabola is above the line. Area $= \\int_{0}^{4} (4x - x^{2})\\,dx = \\left[2x^{2} - \\frac{x^{3}}{3}\\right]_{0}^{4} = 32 - \\frac{64}{3} = \\frac{32}{3}$ sq m. Cost $= \\frac{32}{3} \\times 150 = 1600$ rupees. (b) Area for $x \\ge 3$ $= \\int_{3}^{4} (4x - x^{2})\\,dx = \\left(\\frac{32}{3}\\right) - \\left(18 - 9\\right) = \\frac{5}{3}$ sq m.",
    "steps": [
      {
        "step": "Finds the meeting points $x = 0$ and $x = 4$",
        "marks": 1
      },
      {
        "step": "Sets up $\\int_{0}^{4} (4x - x^{2})\\,dx$ with the parabola on top",
        "marks": 1
      },
      {
        "step": "Evaluates the area $\\frac{32}{3}$ sq m and the cost Rs 1600",
        "marks": 1
      },
      {
        "step": "Writes $\\int_{3}^{4} (4x - x^{2})\\,dx$ for part (b)",
        "marks": 1
      },
      {
        "step": "Evaluates part (b) as $\\frac{5}{3}$ sq m",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d09",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "Using integration, find the area of the region $\\{(x, y) : |x| + |y| \\le 4\\}$. The circle $x^{2} + y^{2} = 8$ lies inside this region and touches its boundary. Also find, using integration, the area of the part of the region that lies outside this circle.",
    "answer": "The boundary $|x| + |y| = 4$ consists of the four lines $\\pm x \\pm y = 4$ and the region is symmetric about both axes. In the first quadrant it is the triangle under $y = 4 - x$, so Area $= 4\\int_{0}^{4} (4 - x)\\,dx = 4\\left[4x - \\frac{x^{2}}{2}\\right]_{0}^{4} = 4 \\times 8 = 32$ sq units. The distance from the origin to $x + y = 4$ is $\\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$, equal to the radius of the circle, so the circle touches the boundary. Area of the circle $= 4\\int_{0}^{2\\sqrt{2}} \\sqrt{8 - x^{2}}\\,dx = 4\\left[\\frac{x}{2}\\sqrt{8 - x^{2}} + 4\\sin^{-1}\\frac{x}{2\\sqrt{2}}\\right]_{0}^{2\\sqrt{2}} = 4 \\times 4 \\cdot \\frac{\\pi}{2} = 8\\pi$ sq units. Area outside the circle $= (32 - 8\\pi)$ sq units.",
    "steps": [
      {
        "step": "Describes the region by its four boundary lines and uses symmetry",
        "marks": 1
      },
      {
        "step": "Sets up $4\\int_{0}^{4} (4 - x)\\,dx$",
        "marks": 1
      },
      {
        "step": "Evaluates the area as $32$ sq units",
        "marks": 1
      },
      {
        "step": "Sets up $4\\int_{0}^{2\\sqrt{2}} \\sqrt{8 - x^{2}}\\,dx$ for the circle and evaluates it as $8\\pi$",
        "marks": 1
      },
      {
        "step": "Subtracts to get $(32 - 8\\pi)$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d10",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "Using integration, find the area of the quadrilateral with vertices $O(0, 0)$, $A(4, 0)$, $B(3, 3)$ and $C(0, 2)$.",
    "answer": "The sides $OA$ and $OC$ lie along the axes. Line $AB$ through $(4, 0)$ and $(3, 3)$ has slope $-3$, so $y = 12 - 3x$. Line $BC$ through $(3, 3)$ and $(0, 2)$ has slope $\\frac{1}{3}$, so $y = 2 + \\frac{x}{3}$. The upper boundary is $BC$ for $0 \\le x \\le 3$ and $AB$ for $3 \\le x \\le 4$. Area $= \\int_{0}^{3} \\left(2 + \\frac{x}{3}\\right) dx + \\int_{3}^{4} (12 - 3x)\\,dx = \\left[2x + \\frac{x^{2}}{6}\\right]_{0}^{3} + \\left[12x - \\frac{3x^{2}}{2}\\right]_{3}^{4} = \\frac{15}{2} + \\frac{3}{2} = 9$ sq units.",
    "steps": [
      {
        "step": "Finds the equation of $AB$: $y = 12 - 3x$",
        "marks": 1
      },
      {
        "step": "Finds the equation of $BC$: $y = 2 + \\frac{x}{3}$",
        "marks": 1
      },
      {
        "step": "Splits the area at $x = 3$ and writes both integrals",
        "marks": 1
      },
      {
        "step": "Evaluates the first integral as $\\frac{15}{2}$ and the second as $\\frac{3}{2}$",
        "marks": 1
      },
      {
        "step": "States the area $9$ sq units",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d11",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "long",
    "complexity": "hard",
    "marks": 5,
    "text": "The line $x = k$ divides the region bounded by the curve $y = e^{x}$, the x-axis, the y-axis and the line $x = \\ln 5$ into two parts of equal area. Using integration, find $k$.",
    "answer": "The whole area is $\\int_{0}^{\\ln 5} e^{x}\\,dx = \\left[e^{x}\\right]_{0}^{\\ln 5} = 5 - 1 = 4$ sq units. The part from $x = 0$ to $x = k$ is $\\int_{0}^{k} e^{x}\\,dx = e^{k} - 1$. For equal areas $e^{k} - 1 = 2$, so $e^{k} = 3$ and $k = \\ln 3$. This lies in $(0, \\ln 5)$ as required.",
    "steps": [
      {
        "step": "Finds the whole area $4$ sq units",
        "marks": 1
      },
      {
        "step": "Writes the left part as $e^{k} - 1$",
        "marks": 1
      },
      {
        "step": "States that each part must be $2$ sq units",
        "marks": 1
      },
      {
        "step": "Forms $e^{k} - 1 = 2$",
        "marks": 1
      },
      {
        "step": "Solves to get $k = \\ln 3$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-d12",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "long",
    "complexity": "medium",
    "marks": 5,
    "text": "A drainage channel has a cross-section bounded by the parabola $x^{2} = 2y$ and the horizontal line $y = 8$ (units in metres, $y$ measured upwards from the lowest point). (a) Using integration, find the area of the cross-section. (b) Using integration with respect to $y$, find the area of the part of the cross-section lying between $y = 2$ and $y = 8$, and hence the area of the part below $y = 2$.",
    "answer": "(a) The parabola meets $y = 8$ where $x^{2} = 16$, so $x = \\pm 4$. Area $= \\int_{-4}^{4} \\left(8 - \\frac{x^{2}}{2}\\right) dx = 2\\left[8x - \\frac{x^{3}}{6}\\right]_{0}^{4} = 2\\left(32 - \\frac{32}{3}\\right) = \\frac{128}{3}$ sq m. (b) At height $y$ the width is $2x = 2\\sqrt{2y}$. Area between $y = 2$ and $y = 8$ $= \\int_{2}^{8} 2\\sqrt{2y}\\,dy = 2\\sqrt{2} \\cdot \\frac{2}{3}\\left[y^{3/2}\\right]_{2}^{8} = \\frac{4\\sqrt{2}}{3}\\left(16\\sqrt{2} - 2\\sqrt{2}\\right) = \\frac{112}{3}$ sq m. The part below $y = 2$ is $\\frac{128}{3} - \\frac{112}{3} = \\frac{16}{3}$ sq m.",
    "steps": [
      {
        "step": "Finds the limits $x = \\pm 4$ in part (a)",
        "marks": 1
      },
      {
        "step": "Evaluates part (a) as $\\frac{128}{3}$ sq m",
        "marks": 1
      },
      {
        "step": "Writes the width $2\\sqrt{2y}$ and the integral $\\int_{2}^{8} 2\\sqrt{2y}\\,dy$",
        "marks": 1
      },
      {
        "step": "Evaluates it as $\\frac{112}{3}$ sq m",
        "marks": 1
      },
      {
        "step": "Subtracts to get $\\frac{16}{3}$ sq m below $y = 2$",
        "marks": 1
      }
    ]
  },
  {
    "id": "c12-aoi-r4-e01",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A ceramic artist designs a tile whose face, in a drawing with lengths in centimetres, is the region bounded by the curve $y = 2x^{1/3}$, the x-axis and the vertical line $x = 8$.",
    "answer": "(i) $2$ cm and $4$ cm. (ii) $\\int_{0}^{8} 2x^{1/3}\\,dx$. (iii) $24$ sq cm; OR $\\frac{45}{2}$ sq cm.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find the height of the tile at $x = 1$ and at $x = 8$.",
        "answer": "At $x = 1$: $y = 2 \\cdot 1 = 2$ cm. At $x = 8$: $y = 2 \\cdot 2 = 4$ cm."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Write an integral that gives the area of the face of the tile.",
        "answer": "The curve is above the x-axis, so Area $= \\int_{0}^{8} 2x^{1/3}\\,dx$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the area of the face of the tile. OR Find the area of the part of the face lying between the lines $x = 1$ and $x = 8$.",
        "answer": "Area $= \\left[2 \\cdot \\frac{3}{4}x^{4/3}\\right]_{0}^{8} = \\frac{3}{2} \\cdot 16 = 24$ sq cm. OR $\\int_{1}^{8} 2x^{1/3}\\,dx = \\frac{3}{2}\\left(16 - 1\\right) = \\frac{45}{2}$ sq cm."
      }
    ]
  },
  {
    "id": "c12-aoi-r4-e02",
    "chapter": "Application of Integrals",
    "topic": "Area bounded by a curve and lines",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A glass artist cuts a decorative panel from a sheet. On a plan with lengths in decimetres, the curved edge of the panel is the parabola $y = \\frac{x^{2}}{2}$ and the straight edge is the line $y = x + 4$. The panel is the region enclosed between the curve and the line.",
    "answer": "(i) $(-2, 2)$ and $(4, 8)$. (ii) $\\int_{-2}^{4} \\left(x + 4 - \\frac{x^{2}}{2}\\right) dx$. (iii) $18$ sq dm; OR $\\frac{40}{3}$ sq dm.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find the points where the straight edge meets the curved edge.",
        "answer": "$\\frac{x^{2}}{2} = x + 4$ gives $x^{2} - 2x - 8 = 0$, so $x = -2$ or $x = 4$. The points are $(-2, 2)$ and $(4, 8)$."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Write an integral that gives the area of the panel.",
        "answer": "On $[-2, 4]$ the line is above the parabola, so Area $= \\int_{-2}^{4} \\left(x + 4 - \\frac{x^{2}}{2}\\right) dx$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the area of the panel. OR Find the area of the part of the panel lying to the right of the y-axis.",
        "answer": "Area $= \\left[\\frac{x^{2}}{2} + 4x - \\frac{x^{3}}{6}\\right]_{-2}^{4} = \\left(8 + 16 - \\frac{32}{3}\\right) - \\left(2 - 8 + \\frac{4}{3}\\right) = \\frac{40}{3} + \\frac{14}{3}$, which is $18$ sq dm. OR $\\int_{0}^{4} \\left(x + 4 - \\frac{x^{2}}{2}\\right) dx = 8 + 16 - \\frac{32}{3} = \\frac{40}{3}$ sq dm."
      }
    ]
  },
  {
    "id": "c12-aoi-r4-e03",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "An eye-shaped window is designed on a grid (units in decimetres). Its upper edge is the curve $y = \\cos x$ and its lower edge is the curve $y = -\\cos x$, for $-\\frac{\\pi}{2} \\le x \\le \\frac{\\pi}{2}$.",
    "answer": "(i) $x = \\pm\\frac{\\pi}{2}$ (at the points $\\left(\\pm\\frac{\\pi}{2}, 0\\right)$). (ii) $2\\int_{-\\pi/2}^{\\pi/2} \\cos x\\,dx$. (iii) $4$ sq dm; OR $\\sqrt{3}$ sq dm.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "At which values of $x$ do the upper and lower edges meet, and what is the greatest height of the window at $x = 0$?",
        "answer": "$\\cos x = -\\cos x$ gives $\\cos x = 0$, so $x = \\pm\\frac{\\pi}{2}$, at the points $\\left(\\pm\\frac{\\pi}{2}, 0\\right)$. At $x = 0$ the edges are at $y = 1$ and $y = -1$, so the window is $2$ dm high there."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Write an integral that gives the area of the window.",
        "answer": "The window is symmetric about the x-axis, so Area $= 2\\int_{-\\pi/2}^{\\pi/2} \\cos x\\,dx$."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the area of the window. OR Find the area of the part of the window lying between the lines $x = 0$ and $x = \\frac{\\pi}{3}$.",
        "answer": "Area $= 2\\left[\\sin x\\right]_{-\\pi/2}^{\\pi/2} = 2(1 + 1) = 4$ sq dm. OR $2\\int_{0}^{\\pi/3} \\cos x\\,dx = 2\\sin\\frac{\\pi}{3} = \\sqrt{3}$ sq dm."
      }
    ]
  },
  {
    "id": "c12-aoi-r4-e04",
    "chapter": "Application of Integrals",
    "topic": "Area under simple curves",
    "type": "case",
    "complexity": "medium",
    "marks": 4,
    "competency": true,
    "text": "A toy train runs on a straight track. Its speed $v$ (in m/s) at time $t$ seconds is $v = 3t$ for $0 \\le t \\le 4$, then $v = 12$ for $4 \\le t \\le 10$, and then $v = 12 - 4(t - 10)$ for $10 \\le t \\le 13$, when it stops. The distance travelled equals the area under the speed-time graph.",
    "answer": "(i) $12$ m/s and $0$ m/s. (ii) $\\int_{0}^{4} 3t\\,dt + \\int_{4}^{10} 12\\,dt$. (iii) $114$ m; OR $106$ m.",
    "parts": [
      {
        "label": "(i)",
        "marks": 1,
        "text": "Find the speed at $t = 4$ and at $t = 13$.",
        "answer": "At $t = 4$: $v = 12$ m/s. At $t = 13$: $v = 12 - 4 \\cdot 3 = 0$ m/s."
      },
      {
        "label": "(ii)",
        "marks": 1,
        "text": "Write integrals that give the distance travelled in the first $10$ seconds.",
        "answer": "Distance $= \\int_{0}^{4} 3t\\,dt + \\int_{4}^{10} 12\\,dt$, since the speed is given by different rules on the two intervals."
      },
      {
        "label": "(iii)",
        "marks": 2,
        "text": "Find the total distance travelled by the train. OR Find the distance travelled between $t = 2$ and $t = 12$.",
        "answer": "Distance $= \\left[\\frac{3t^{2}}{2}\\right]_{0}^{4} + \\left[12t\\right]_{4}^{10} + \\int_{10}^{13} (52 - 4t)\\,dt = 24 + 72 + \\left[52t - 2t^{2}\\right]_{10}^{13} = 24 + 72 + (338 - 320) = 114$ m. OR $\\int_{2}^{4} 3t\\,dt + \\int_{4}^{10} 12\\,dt + \\int_{10}^{12} (52 - 4t)\\,dt = 18 + 72 + 16 = 106$ m."
      }
    ]
  }
];
