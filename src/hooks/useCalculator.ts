import { useState } from 'react'
import type { EstadoCalc, AccionesCalc, Operador, EntradaHistorial } from '../types'
import { MAX_LONGITUD_PANTALLA, MAX_VALOR } from '../constants'


// Estado inicial de la calculadora
const estadoInicial: EstadoCalc = {
  pantalla: '0',
  operando: null,
  operador: null,
  esperandoOperando: false,
  historial: [],
  tieneEntrada: false,
}

// Función para calcular el resultado de una operación
function calcularResultado(operando: number, operador: Operador, actual: number): string {
  let resultado: number
  switch (operador) {
    case '+':
      resultado = operando + actual
      break
    case '-':
      resultado = operando - actual
      break
    case '*':
      resultado = operando * actual
      break
    case '/':
      resultado = operando / actual
      break
    case '%':
      resultado = operando % actual
      break
    default:
      return 'ERROR'
  }
  if (!Number.isFinite(resultado) || resultado < 0) return 'ERROR'
  if (resultado > MAX_VALOR) return 'ERROR'

  const cadena = String(resultado)
  return cadena.length > MAX_LONGITUD_PANTALLA ? cadena.slice(0, MAX_LONGITUD_PANTALLA) : cadena
}

// Hook personalizado para la lógica de la calculadora
export function useCalculator(): { estado: EstadoCalc; acciones: AccionesCalc } {
  const [estado, setEstado] = useState<EstadoCalc>(estadoInicial)

  // Funciones para manejar las acciones de la calculadora
  const ingresarDigito = (digito: string) => {
    setEstado(prev => {
      if (prev.pantalla === 'ERROR') return prev
      if (prev.esperandoOperando) return { ...prev, pantalla: digito, esperandoOperando: false, tieneEntrada: true }
      if (prev.pantalla === '0') return { ...prev, pantalla: digito, tieneEntrada: true }
      if (prev.pantalla.length >= MAX_LONGITUD_PANTALLA) return prev
      return { ...prev, pantalla: prev.pantalla + digito, tieneEntrada: true }
    })
  }

  // Función para ingresar un punto decimal
  const ingresarDecimal = () => {
    setEstado(prev => {
      if (prev.pantalla === 'ERROR') return prev
      if (prev.esperandoOperando) return { ...prev, pantalla: '0.', esperandoOperando: false, tieneEntrada: true }
      if (prev.pantalla.includes('.')) return prev
      if (prev.pantalla.length >= MAX_LONGITUD_PANTALLA) return prev
      return { ...prev, pantalla: prev.pantalla + '.', tieneEntrada: true }
    })
  }

  // Función para ingresar un operador
  const ingresarOperador = (op: Operador) => {
    setEstado(prev => {
      if (prev.pantalla === 'ERROR') return prev
      //ya e tenia un valor en memoria
      if (prev.operando !== null && prev.operador !== null && !prev.esperandoOperando) {
        const resultado = calcularResultado(prev.operando, prev.operador, parseFloat(prev.pantalla))
        const nuevoOperando = resultado === 'ERROR' ? null : parseFloat(resultado)
        return { ...prev, pantalla: resultado, operando: nuevoOperando, operador: op, esperandoOperando: true }
      }
      //primer operador
      return { ...prev, operando: parseFloat(prev.pantalla), operador: op, esperandoOperando: true }
    })
  }

  // Función para calcular el resultado de la operación actual
  const calcular = () => {
    setEstado(prev => {
      if (prev.operando === null || prev.operador === null || prev.pantalla === 'ERROR') return prev
      const actual = parseFloat(prev.pantalla)
      const resultado = calcularResultado(prev.operando, prev.operador, actual)
      const entrada: EntradaHistorial = {
        expresion: `${prev.operando} ${prev.operador} ${actual}`,
        resultado,
        marca: Date.now(),
      }
      return {
        ...prev,
        pantalla: resultado,
        operando: null,
        operador: null,
        esperandoOperando: true,
        historial: [entrada, ...prev.historial],
        tieneEntrada: false,
      }
    })
  }

  // Función para cambiar el signo del número en pantalla
  const cambiarSigno = () => {
    setEstado(prev => {
      if (prev.pantalla === '0' || prev.pantalla === 'ERROR') return prev
      if (prev.pantalla.startsWith('-')) return { ...prev, pantalla: prev.pantalla.slice(1) }
      if (prev.pantalla.length >= MAX_LONGITUD_PANTALLA) return prev
      return { ...prev, pantalla: '-' + prev.pantalla }
    })
  }

  // Función para limpiar la calculadora
  const limpiar = () => {
    setEstado(prev => {
      if (prev.tieneEntrada) return { ...prev, pantalla: '0', tieneEntrada: false }
      return { ...estadoInicial, historial: prev.historial }
    })
  }

  return { estado, acciones: { ingresarDigito, ingresarOperador, ingresarDecimal, cambiarSigno, calcular, limpiar } }
}
