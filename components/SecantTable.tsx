import React from 'react'

export const SecantTable = ({ rows }: { rows: SecantRow[] }) => {
    return (
        <div className="flex flex-col items-center col-span-3">
            <table className="mt-5 ">
                <thead>
                    <tr className="">
                        <th className="px-2">Iteración</th>
                        <th className="px-2">Intervalo</th>
                        <th className="px-2">f(P1)</th>
                        <th className="px-2">f(P2)</th>
                        <th className="px-2">Resultado por medio de secante</th>
                        <th className="px-2">Resultado de f(x)</th>
                        <th className="px-2">Error Porcentual</th>

                    </tr>
                </thead><tbody>
                    {rows.map(({ iteration, currentError, currentResult, func, p1, p2 }) => (

                        <tr className="text-center" key={`row-${iteration}`}>
                            <td className="px-2">{iteration}</td>
                            <td className="px-2">{`[${p1 % 1 === 0 ? p1 : p1.toFixed(2)},${p2 % 1 === 0 ? p2 : p2.toFixed(2)}]`}</td>
                            <td className="px-2">{func({ x: p1 }) % 1 === 0 ? func({ x: p1 }) : func({ x: p1 }).toFixed(2)}</td>
                            <td className="px-2">{func({ x: p2 }) % 1 === 0 ? func({ x: p2 }) : func({ x: p2 }).toFixed(2)}</td>
                            <td className="px-2">{currentResult % 1 === 0 ? currentResult : currentResult.toFixed(2)}</td>
                            <td className="px-2">{func({ x: currentResult }) % 1 === 0 ? func({ x: currentResult }) : func({ x: currentResult }).toFixed(2)}</td>
                            <td className="px-2">{currentError % 1 === 0 ? currentError + '%' : currentError.toFixed(3) + '%'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>)

}
