interface Props { valor: string; onClick: () => void }

export function BotonNumero({ valor, onClick }: Props) {
  const esDoble = valor === '0'
  return (
    <button
      className={`btn btn--numero${esDoble ? ' btn--doble' : ''}`}
      onClick={onClick}
    >
      {valor}
    </button>
  )
}
