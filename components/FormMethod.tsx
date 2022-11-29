import React, { SetStateAction } from 'react'

export const FormMethod = ({ handleCalculate, errorMessage, handleFunctionTextchange, handleErrorTextChange }: {
    handleCalculate: (e: {
        preventDefault: () => void;
    }) => void,
    errorMessage: string,
    handleFunctionTextchange: (e: {
        target: {
            value: SetStateAction<string>;
        };
    }) => void,
    handleErrorTextChange: (e: {
        target: {
            value: string
        };
    }) => void

}) => {
    return (
        <form className="flex flex-col col-start-2 gap-8 mt-10 " onSubmit={handleCalculate}>
            {errorMessage.length > 0 && <h3 className="text-lg text-center text-red-500">{errorMessage}</h3>}
            <div className="flex flex-col items-center gap-4 ">
                <label className="text-2xl">Ingresa tu función:</label>
                <input className="py-2 text-lg text-center rounded-sm p text-slate-900" type="text" placeholder="(x^3*2)+sin(PI/2)" minLength={1} required onChange={handleFunctionTextchange} />
            </div>
            <div className="flex flex-col items-center gap-4 ">
                <label className="text-2xl">Ingresa el error:</label>
                <input className="py-2 text-lg text-center rounded-sm p text-slate-900" type="number" step={0.01} min={0.01} max={100} placeholder="0.01" defaultValue={0.01} onChange={handleErrorTextChange} />
            </div>
            <div className="flex justify-center">
                <button className="p-2 text-3xl duration-100 ease-out delay-75 border rounded-lg hover:bg-slate-200 hover:text-slate-800 hover:ease-in hover:duration-100 hover:scale-125 hover:delay-100 ">Calcular</button>
            </div>
        </form>
    )
}
