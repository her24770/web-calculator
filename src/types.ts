export type Operator = '+' | '-' | '*' | '/' | '%'

export interface HistoryEntry {
  expression: string
  result: string
  timestamp: number
}

export interface CalcState {
  display: string
  operand: number | null
  operator: Operator | null
  waitingForOperand: boolean
  history: HistoryEntry[]
  hasInput: boolean
}

export interface CalcActions {
  inputDigit: (digit: string) => void
  inputOperator: (op: Operator) => void
  inputDecimal: () => void
  toggleSign: () => void
  calculate: () => void
  clear: () => void
}
