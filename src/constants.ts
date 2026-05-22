export const MAX_DISPLAY_LENGTH = 9
export const MAX_VALUE = 999_999_999

//botones lista
export const BUTTON_LAYOUT = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
] as const

export type ButtonValue = typeof BUTTON_LAYOUT[number][number]
