import { EvaluatexResult } from "evaluatex";


export const calculateInterval = (func: EvaluatexResult) => {
  const numsToTest = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const results: number[] = [];
  for (let i = 0; i < numsToTest.length; i++) {
    const num = numsToTest[i];
    const result = func({ x: num });

    if (num === -4) {
      results.push(result);
      continue;
    }
    if (results[i - 1] < 0 && result >= 0) {
      return [numsToTest[i - 1], num];
    }
    results.push(result);
  }
  return [0, 0];
};

export const calculateMiddlePoint = (a: number, b: number): number => {
  return (a + b) / 2;
};
export const calculateCurrentError = (
  currentMiddlePoint: number,
  previousMiddlePoint: number
): number => {
    console.log(currentMiddlePoint, previousMiddlePoint)
  return Math.abs(
    ((currentMiddlePoint - previousMiddlePoint) / currentMiddlePoint) * 100
  );
};
