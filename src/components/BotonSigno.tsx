interface Props { onClick: () => void }

export function BotonSigno({ onClick }: Props) {
  return (
    <button className="btn btn--especial" onClick={onClick}>+/-</button>
  )
}
