/**
 * Topic taxonomy for CBSE Class 12 Mathematics (041), the current rationalised
 * syllabus. `TOPICS_XII` is what teachers see under each chapter in
 * Categories. `LEGACY_TOPICS_XII` are parts of the old syllabus that CBSE cut:
 * older board questions are still tagged with them (marked legacySyllabus) so
 * the history reads correctly, but they are never created as topics.
 */
export const TOPICS_XII: Record<string, string[]> = {
  'Relations and Functions': [
    'Reflexive, symmetric and transitive relations',
    'Equivalence relations and classes',
    'One-one and onto functions',
    'Bijective functions and counting',
  ],
  'Inverse Trigonometric Functions': [
    'Domain, range and principal values',
    'Graphs of inverse trigonometric functions',
    'Evaluating expressions with principal values',
  ],
  'Matrices': [
    'Order, types and equality of matrices',
    'Matrix operations',
    'Transpose, symmetric and skew-symmetric matrices',
    'Invertible matrices and matrix equations',
  ],
  'Determinants': [
    'Evaluating determinants',
    'Area of a triangle using determinants',
    'Minors, cofactors and adjoint',
    'Inverse of a matrix and its properties',
    'Solving linear equations by the matrix method',
  ],
  'Continuity and Differentiability': [
    'Continuity and finding unknown constants',
    'Differentiability',
    'Chain rule and implicit differentiation',
    'Derivatives of inverse trigonometric functions',
    'Logarithmic differentiation',
    'Parametric differentiation',
    'Second-order derivatives',
  ],
  'Application of Derivatives': [
    'Rate of change',
    'Increasing and decreasing functions',
    'Maxima and minima',
    'Optimisation word problems',
  ],
  'Integrals': [
    'Standard indefinite integrals',
    'Integration by substitution',
    'Integration by partial fractions',
    'Integration by parts',
    'Special forms of integrals',
    'Definite integrals',
    'Properties of definite integrals',
  ],
  'Application of Integrals': [
    'Area under simple curves',
    'Area bounded by a curve and lines',
  ],
  'Differential Equations': [
    'Order and degree',
    'General and particular solutions',
    'Variable separable equations',
    'Homogeneous differential equations',
    'Linear differential equations',
  ],
  'Vector Algebra': [
    'Vector basics, direction cosines and unit vectors',
    'Position vectors and section formula',
    'Scalar product and projection',
    'Vector product and area',
  ],
  'Three Dimensional Geometry': [
    'Direction cosines and direction ratios of a line',
    'Equation of a line',
    'Angle between two lines',
    'Shortest distance between two lines',
    'Foot of perpendicular and image of a point',
  ],
  'Linear Programming': [
    'Formulating a linear programming problem',
    'Graphical method and corner points',
    'Unbounded feasible regions',
  ],
  'Probability': [
    'Conditional probability',
    'Multiplication theorem and independent events',
    'Total probability and Bayes\' theorem',
    'Random variables and their mean',
  ],
};

export const LEGACY_TOPICS_XII: Record<string, string[]> = {
  'Relations and Functions': ['Composition of functions and invertible functions', 'Binary operations'],
  'Inverse Trigonometric Functions': ['Properties of inverse trigonometric functions'],
  'Matrices': ['Inverse by elementary operations'],
  'Determinants': ['Properties of determinants'],
  'Continuity and Differentiability': ["Rolle's and mean value theorems"],
  'Application of Derivatives': ['Tangents and normals', 'Approximations and errors'],
  'Integrals': ['Definite integral as the limit of a sum'],
  'Application of Integrals': ['Area between two curves'],
  'Differential Equations': ['Forming a differential equation'],
  'Vector Algebra': ['Scalar triple product'],
  'Three Dimensional Geometry': ['Equation of a plane', 'Angle and distance involving planes', 'Coplanarity of lines'],
  'Linear Programming': [],
  'Probability': ['Bernoulli trials and binomial distribution', 'Variance of a random variable'],
};
