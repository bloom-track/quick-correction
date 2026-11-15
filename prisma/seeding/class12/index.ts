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

import { CH01_RF_R2 } from './ch01-relations-and-functions-r2.js';
import { CH02_ITF_R2 } from './ch02-inverse-trigonometric-functions-r2.js';
import { CH03_MAT_R2 } from './ch03-matrices-r2.js';
import { CH04_DET_R2 } from './ch04-determinants-r2.js';
import { CH05_CD_R2 } from './ch05-continuity-and-differentiability-r2.js';
import { CH06_AOD_R2 } from './ch06-application-of-derivatives-r2.js';
import { CH07_INT_R2 } from './ch07-integrals-r2.js';
import { CH08_AOI_R2 } from './ch08-application-of-integrals-r2.js';
import { CH09_DE_R2 } from './ch09-differential-equations-r2.js';
import { CH10_VEC_R2 } from './ch10-vector-algebra-r2.js';
import { CH11_3D_R2 } from './ch11-three-dimensional-geometry-r2.js';
import { CH12_LPP_R2 } from './ch12-linear-programming-r2.js';
import { CH13_PROB_R2 } from './ch13-probability-r2.js';

import { CH01_RF_R3 } from './ch01-relations-and-functions-r3.js';
import { CH02_ITF_R3 } from './ch02-inverse-trigonometric-functions-r3.js';
import { CH03_MAT_R3 } from './ch03-matrices-r3.js';
import { CH04_DET_R3 } from './ch04-determinants-r3.js';
import { CH05_CD_R3 } from './ch05-continuity-and-differentiability-r3.js';
import { CH06_AOD_R3 } from './ch06-application-of-derivatives-r3.js';
import { CH07_INT_R3 } from './ch07-integrals-r3.js';
import { CH08_AOI_R3 } from './ch08-application-of-integrals-r3.js';
import { CH09_DE_R3 } from './ch09-differential-equations-r3.js';
import { CH10_VEC_R3 } from './ch10-vector-algebra-r3.js';
import { CH11_3D_R3 } from './ch11-three-dimensional-geometry-r3.js';
import { CH12_LPP_R3 } from './ch12-linear-programming-r3.js';
import { CH13_PROB_R3 } from './ch13-probability-r3.js';


export const CLASS12_QUESTIONS: Class12Question[] = [
  ...CH01_RF, ...CH02_ITF, ...CH03_MAT, ...CH04_DET, ...CH05_CD, ...CH06_AOD, ...CH07_INT, ...CH08_AOI, ...CH09_DE, ...CH10_VEC, ...CH11_3D, ...CH12_LPP, ...CH13_PROB,
  ...CH01_RF_R2, ...CH02_ITF_R2, ...CH03_MAT_R2, ...CH04_DET_R2, ...CH05_CD_R2, ...CH06_AOD_R2, ...CH07_INT_R2, ...CH08_AOI_R2, ...CH09_DE_R2, ...CH10_VEC_R2, ...CH11_3D_R2, ...CH12_LPP_R2, ...CH13_PROB_R2,
  ...CH01_RF_R3, ...CH02_ITF_R3, ...CH03_MAT_R3, ...CH04_DET_R3, ...CH05_CD_R3, ...CH06_AOD_R3, ...CH07_INT_R3, ...CH08_AOI_R3, ...CH09_DE_R3, ...CH10_VEC_R3, ...CH11_3D_R3, ...CH12_LPP_R3, ...CH13_PROB_R3,
];
