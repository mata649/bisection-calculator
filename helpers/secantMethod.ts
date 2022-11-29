import evaluatex from "evaluatex";

export const secantMethod = (
  p1: number,
  p2: number,
  func: evaluatex.EvaluatexResult
) => {
  return (
    p2 - (func({ x: p2 }) * (p2 - p1)) / (func({ x: p2 }) - func({ x: p1 }))
  );
};
