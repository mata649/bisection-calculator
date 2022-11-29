import evaluatex from 'evaluatex/dist/evaluatex'
import React, { SetStateAction, useState } from 'react'
import { FormMethod } from '../components/FormMethod'
import { Glosary } from '../components/Glosary'
import { SecantTable } from '../components/SecantTable'
import { calculateCurrentError, calculateInterval } from '../helpers/bisectionMethod'
import { secantMethod } from '../helpers/secantMethod'

export default function Secant() {
    const [text, setFunctionText] = useState('')
    const [errorText, setErrorText] = useState(0.01)
    const [rows, setRows] = useState<SecantRow[]>([])
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleFunctionTextchange = (e: { target: { value: SetStateAction<string> } }) => {
        setFunctionText(e.target.value)
    }
    const handleErrorTextChange = (e: { target: { value: string } }) => {
        setErrorText(parseInt(e.target.value))
    }


    const addRow = (newRow: SecantRow) => {

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
            let previousResult = 0
            let iteration = 1
            let p1 = interval[0]
            let p2 = interval[1]
            if (p1 === p2) {
                setErrorMessage(`Función no puede ser aplicada debido a que su intervalo es: [${p1},${p2}] `)
            }
            while (currentError > error) {
                const currentResult = secantMethod(p1, p2, func)
                currentError = calculateCurrentError(currentResult, previousResult)
                addRow({
                    currentError, currentResult, func, iteration, p1, p2
                })
                if (func({ x: currentResult }) < p2) {
                    p1 = currentResult
                } else {
                    p2 = currentResult
                }
                previousResult = currentResult
                iteration++
            }
            console.log(rows)
        } catch (error) {
            console.log(error)
            setErrorMessage('La función no se encuentra en el formato correcto o no puede ser procesada')
        }

    }

    return (

        <div>


            <h1 className="mt-2 text-4xl text-center">Calculadora del Metodo de Secante</h1>

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
                    <SecantTable rows={rows} />
                    )
                }
            </div>
        </div>
    )
}