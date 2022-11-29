import React from 'react'

export const BisectionTable = ({ rows }: { rows: BisectionRow[] }) => {
    return (
        <div className="flex flex-col items-center col-span-3">
            <table className="mt-5 ">
                <thead>
                <tr className="">
                    <th className="px-2">Iteración</th>
                    <th className="px-2">Intervalo</th>
                    <th className="px-2">a</th>
                    <th className="px-2">a signo</th>
                    <th className="px-2">b </th>
                    <th className="px-2">b signo</th>
                    <th className="px-2">Punto medio</th>
                    <th className="px-2">Punto medio signo</th>
                    <th className="px-2">Error porcentual</th>
                
                </tr>
                </thead>
                <tbody>
                {rows.map(({ a, b, currentError, currentMiddlePoint, func, iteration }) => (
                    <tr className="text-center" key={`row-${iteration}`}>
                        <td className="px-2">{iteration}</td>
                        <td className="px-2">{`[${a % 1 === 0 ? a : a.toFixed(2)},${b % 1 === 0 ? b : b.toFixed(2)}]`}</td>
                        <td className="px-2">{a % 1 === 0 ? a : a.toFixed(2)}</td>
                        <td className="px-2">{func({ x: a }) < 0 ? '-' : '+'}</td>
                        <td className="px-2">{b % 1 === 0 ? b : b.toFixed(2)}</td>
                        <td className="px-2">{func({ x: b }) < 0 ? '-' : '+'}</td>
                        <td className="px-2">{currentMiddlePoint % 1 === 0 ? currentMiddlePoint : currentMiddlePoint.toFixed(2)}</td>
                        <td className="px-2">{func({ x: currentMiddlePoint }) < 0 ? '-' : '+'}</td>
                        <td className="px-2">{currentError % 1 === 0 ? currentError + '%' : currentError.toFixed(3) + '%'}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>)

}
