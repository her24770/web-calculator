interface Props { onClick: () => void }

export function BotonDecimal({ onClick }: Props) {
  return (
    <button className="btn btn--numero" onClick={onClick}>.</button>
  )
}
