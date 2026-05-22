import type { EstadoCalc, AccionesCalc } from '../types'
import { Pantalla } from './Pantalla'
import { Teclado } from './Teclado'
import '../styles/calculadora.css'

interface Props { estado: EstadoCalc; acciones: AccionesCalc }

export function Calculadora({ estado, acciones }: Props) {
  return (
    <div className="calculadora">
      <Pantalla estado={estado} />
      <Teclado estado={estado} acciones={acciones} />
    </div>
  )
}
