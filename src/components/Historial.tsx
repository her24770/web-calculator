import type { EntradaHistorial } from '../types'
import { EntradaHistorialItem } from './EntradaHistorial'
import '../styles/historial.css'

interface Props { entradas: EntradaHistorial[] }

export function Historial({ entradas }: Props) {
  if (entradas.length === 0) {
    return <p className="historial__vacio">Sin historial aún</p>
  }
  return (
    <ul className="historial__lista">
      {entradas.map(e => <EntradaHistorialItem key={e.marca} entrada={e} />)}
    </ul>
  )
}
