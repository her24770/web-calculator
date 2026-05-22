import type { AccionesCalc, EstadoCalc, Operador } from '../types'
import { LAYOUT_BOTONES } from '../constants'
import { BotonNumero } from './BotonNumero'
import { BotonOperador } from './BotonOperador'
import { BotonDecimal } from './BotonDecimal'
import { BotonSigno } from './BotonSigno'
import { BotonLimpiar } from './BotonLimpiar'

const OPS = new Set(['/', '*', '-', '+'])

interface Props { acciones: AccionesCalc; estado: EstadoCalc }

export function Teclado({ acciones, estado }: Props) {
  const boton = (v: string) => {
    //vliacion por cada tipo de boton, se asigna un componente diferente segun el caso
    if (v === '.') return <BotonDecimal key="." onClick={acciones.ingresarDecimal} />
    if (v === '+/-') return <BotonSigno key="+/-" onClick={acciones.cambiarSigno} />
    if (v === 'AC') return <BotonLimpiar key="AC" onClick={acciones.limpiar} tieneEntrada={estado.tieneEntrada} />
    if (v === '=') return <button key="=" className="btn btn--igual" onClick={acciones.calcular}>=</button>
    if (v === '%') return (
      <button key="%" className="btn btn--especial" onClick={() => acciones.ingresarOperador('%')}>%</button>
    )
    //caso especial para los operadores, se asigna un componente diferente segun el caso, ademas se le asigna una clase de activo si el operador es el mismo que el del estado
    if (OPS.has(v)) {
      const op = v as Operador
      return (
        <BotonOperador key={v} valor={v} activo={estado.operador === v} onClick={() => acciones.ingresarOperador(op)} />
      )
    }
    return <BotonNumero key={v} valor={v} onClick={() => acciones.ingresarDigito(v)} />
  }
  return <div className="teclado">{LAYOUT_BOTONES.flat().map(boton)}</div>
}
