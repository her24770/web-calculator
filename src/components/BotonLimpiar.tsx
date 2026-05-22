interface Props { onClick: () => void; tieneEntrada: boolean }

export function BotonLimpiar({ onClick, tieneEntrada }: Props) {
  return (
    <button className="btn btn--limpiar" onClick={onClick}>
      {tieneEntrada ? 'C' : 'AC'}
    </button>
  )
}
