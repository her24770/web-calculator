import type { EntradaHistorial } from '../types'
import '../styles/historial.css'

interface Props { entrada: EntradaHistorial }

export function EntradaHistorialItem({ entrada }: Props) {
  return (
    <li className="entrada-historial">
      <span className="entrada-historial__expresion">{entrada.expresion}</span>
      <span className="entrada-historial__resultado">{entrada.resultado}</span>
    </li>
  )
}
