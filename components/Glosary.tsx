import React, { useState } from 'react'

export const Glosary = () => {
    const [showBasic, setShowBasic] = useState<boolean>(false)
    const [showConstant, setShowConstant] = useState<boolean>(false)
    const [showTrigonometric, setShowTrigonometric] = useState<boolean>(false)
    const handleGlosary = (section: string) => {
        switch (section) {
          case 'basics':
            setShowBasic(!showBasic)
            setShowConstant(false)
            setShowTrigonometric(false)
            break;
          case 'constants':
            setShowBasic(false)
            setShowConstant(!showConstant)
            setShowTrigonometric(false)
            break;
          case 'trigonometrics':
            setShowBasic(false)
            setShowConstant(false)
            setShowTrigonometric(!showTrigonometric)
            break;
    
          default:
            setShowBasic(false)
            setShowConstant(false)
            setShowTrigonometric(false)
            break;
        }
      }
    return (<>
        <h3 className="text-2xl">Glosario</h3>
        <div>
            <h4 className="text-xl cursor-pointer" onClick={() => handleGlosary('basics')}>Básicas</h4>
            {showBasic && <ul className="mt-2 text-md">
                <li>Sumar: +</li>
                <li>Restar: -</li>
                <li>Multiplicar: *</li>
                <li>Dividir: /</li>
                <li>Exponente: ^</li>
                <li>Raíz cuadrada: sqrt(x)</li>
                <li>Logaritmo: log(x)</li>
                <li>Absoluto: abs(x)</li>
            </ul>}
            <h4 className="mt-2 text-xl cursor-pointer" onClick={() => handleGlosary('constants')}>Constantes</h4>
            {showConstant && <ul className="mt-2 text-md">
                <li>Euler: E</li>
                <li>Pi: PI</li>
            </ul>}
            <h4 className="mt-2 text-xl cursor-pointer" onClick={() => handleGlosary('trigonometrics')}>Trigonometricas</h4>
            {showTrigonometric && <ul className="mt-2 text-md">
                <li>Coseno: cos(x)</li>
                <li>Seno: sin(x)</li>
                <li>Tangente: tan(x)</li>
                <li>Arcocoseno: acos(x)</li>
                <li>Arcoseno: asin(x)</li>
                <li>Arcotangente: atan(x)</li>

            </ul>}
        </div>
    </>
    )
}
