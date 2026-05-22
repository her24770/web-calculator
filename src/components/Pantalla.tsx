import type { EstadoCalc } from '../types'

interface Props { estado: Pick<EstadoCalc, 'pantalla' | 'operando' | 'operador'> }

export function Pantalla({ estado }: Props) {
  const { pantalla, operando, operador } = estado
  const expresion = operando !== null && operador ? `${operando} ${operador}` : ''
  return (
    <div className="pantalla">
      <span className="pantalla__expresion">{expresion}</span>
      <span className={`pantalla__valor${pantalla === 'ERROR' ? ' pantalla__valor--error' : ''}`}>
        {pantalla}
      </span>
    </div>
  )
}
