export const MAX_LONGITUD_PANTALLA = 9
export const MAX_VALOR = 999_999_999

// lista de botones
export const LAYOUT_BOTONES = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
] as const

export type ValorBoton = typeof LAYOUT_BOTONES[number][number]
