import type { Operador } from '../types'

const SIMBOLOS: Record<string, string> = { '/': '÷', '*': '×', '-': '−', '+': '+', '%': '%' }

interface Props { valor: Operador | string; activo: boolean; onClick: () => void }

export function BotonOperador({ valor, activo, onClick }: Props) {
  return (
    <button
      className={`btn btn--operador${activo ? ' btn--operador-activo' : ''}`}
      onClick={onClick}
    >
      {SIMBOLOS[valor] ?? valor}
    </button>
  )
}
