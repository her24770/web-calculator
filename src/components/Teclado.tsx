import type { AccionesCalc, EstadoCalc, Operador } from '../types'
import { LAYOUT_BOTONES, OPS_OPERADORES } from '../constants'
import { BotonNumero, BotonOperador, BotonDecimal, BotonSigno, BotonLimpiar } from './botones'

export function Teclado({ acciones, estado }: { acciones: AccionesCalc; estado: EstadoCalc }) {
  const boton = (v: string) => {
    if (v === '.') return <BotonDecimal key="." onClick={acciones.ingresarDecimal} />
    if (v === '+/-') return <BotonSigno key="+/-" onClick={acciones.cambiarSigno} />
    if (v === 'AC') return <BotonLimpiar key="AC" onClick={acciones.limpiar} tieneEntrada={estado.tieneEntrada} />
    if (v === '=') return <button key="=" className="btn btn--igual" onClick={acciones.calcular}>=</button>
    if (v === '%') return (
      <button key="%" className="btn btn--especial" onClick={() => acciones.ingresarOperador('%')}>%</button>
    )
    if (OPS_OPERADORES.has(v)) {
      const fn = () => acciones.ingresarOperador(v as Operador)
      return <BotonOperador key={v} valor={v} activo={estado.operador === v} onClick={fn} />
    }
    return <BotonNumero key={v} valor={v} onClick={() => acciones.ingresarDigito(v)} />
  }
  return <div className="teclado">{LAYOUT_BOTONES.flat().map(boton)}</div>
}
