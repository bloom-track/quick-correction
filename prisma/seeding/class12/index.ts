/** Every Class 12 Mathematics question, chapter by chapter. */
import type { Class12Question } from './types.js';
import { CH01_RF } from './ch01-relations-and-functions.js';
import { CH02_ITF } from './ch02-inverse-trigonometric-functions.js';
import { CH03_MAT } from './ch03-matrices.js';
import { CH04_DET } from './ch04-determinants.js';
import { CH05_CD } from './ch05-continuity-and-differentiability.js';
import { CH06_AOD } from './ch06-application-of-derivatives.js';
import { CH07_INT } from './ch07-integrals.js';
import { CH08_AOI } from './ch08-application-of-integrals.js';
import { CH09_DE } from './ch09-differential-equations.js';
import { CH10_VEC } from './ch10-vector-algebra.js';
import { CH11_3D } from './ch11-three-dimensional-geometry.js';
import { CH12_LPP } from './ch12-linear-programming.js';
import { CH13_PROB } from './ch13-probability.js';

export const CLASS12_QUESTIONS: Class12Question[] = [
  ...CH01_RF, ...CH02_ITF, ...CH03_MAT, ...CH04_DET, ...CH05_CD, ...CH06_AOD, ...CH07_INT, ...CH08_AOI, ...CH09_DE, ...CH10_VEC, ...CH11_3D, ...CH12_LPP, ...CH13_PROB,
];
