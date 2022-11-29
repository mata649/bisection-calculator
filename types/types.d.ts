
declare interface BisectionRow {
    iteration: number
    a: number
    b: number
    currentMiddlePoint: number
    currentError: number
    func: EvaluatexResult
  
  }
declare interface SecantRow {
    iteration: number
    p1: number
    p2: number
    currentResult: number
    currentError: number
    func: EvaluatexResult
  
  }