export type Operador = '+' | '-' | '*' | '/' | '%'

// tipo por entrada en historial
export interface EntradaHistorial {
  expresion: string
  resultado: string
  marca: number
}

// tipo por estado de la calculadora al presionar cada boton
export interface EstadoCalc {
  pantalla: string
  operando: number | null
  operador: Operador | null
  esperandoOperando: boolean
  historial: EntradaHistorial[]
  tieneEntrada: boolean
}

// tipo por acciones de la calculadora
export interface AccionesCalc {
  ingresarDigito: (digito: string) => void
  ingresarOperador: (op: Operador) => void
  ingresarDecimal: () => void
  cambiarSigno: () => void
  calcular: () => void
  limpiar: () => void
}
