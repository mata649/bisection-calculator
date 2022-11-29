import { constants } from "buffer"
import { EvaluatexResult } from "evaluatex"
import evaluatex from "evaluatex/dist/evaluatex"
import Link from "next/link"
import { SetStateAction, useState } from "react"
import { BisectionTable } from "../components/BisectionTable"
import { FormMethod } from "../components/FormMethod"
import { Glosary } from "../components/Glosary"
import { calculateCurrentError, calculateInterval, calculateMiddlePoint } from "../helpers/bisectionMethod"

export default function Home() {
  const [text, setFunctionText] = useState('')
  const [errorText, setErrorText] = useState(0.01)
  const [rows, setRows] = useState<BisectionRow[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleFunctionTextchange = (e: { target: { value: SetStateAction<string> } }) => {
    setFunctionText(e.target.value)
  }
  const handleErrorTextChange = (e: { target: { value: string } }) => {
    setErrorText(parseInt(e.target.value))
  }


  const addRow = (newRow: BisectionRow) => {

    setRows(rows => [...rows, newRow])
  }
  const handleCalculate = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      setErrorMessage('')
      setRows([])
      const error = errorText
      const func = evaluatex(text)
      const interval = calculateInterval(func)
      let currentError = 100
      let previousMiddlePoint = 0
      let iteration = 1
      let a = interval[0]
      let b = interval[1]
      if (a === b) {
        setErrorMessage(`Función no puede ser aplicada debido a que su intervalo es: [${a},${b}] `)
      }
      while (currentError > error) {
        const currentMiddlePoint = calculateMiddlePoint(a, b)
        currentError = calculateCurrentError(currentMiddlePoint, previousMiddlePoint)
        addRow({
          iteration, a, b, currentError, currentMiddlePoint, func
        })
        if (func({ x: currentMiddlePoint }) < 0) {
          a = currentMiddlePoint
        } else {
          b = currentMiddlePoint
        }
        previousMiddlePoint = currentMiddlePoint
        iteration++
      }
      console.log(rows)
    } catch (error) {
      setErrorMessage('La función no se encuentra en el formato correcto o no puede ser procesada')
    }

  }

  return (

    <div>


      <h1 className="mt-2 text-4xl text-center">Calculadora del Metodo de Bisección</h1>

      <div className="grid grid-cols-3 ">
        <div className="flex flex-col items-center ">
          <Glosary />
        </div>
        <FormMethod
          errorMessage={errorMessage}
          handleCalculate={handleCalculate}
          handleErrorTextChange={handleErrorTextChange}
          handleFunctionTextchange={handleFunctionTextchange}
        />
        {
          rows.length > 0 && (
            <BisectionTable rows={rows} />)
        }
      </div>
    </div>
  )
}
