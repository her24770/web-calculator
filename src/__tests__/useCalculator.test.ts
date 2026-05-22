import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../hooks/useCalculator'

describe('useCalculator', () => {

  // Prueba básica de suma
  it('encadena operaciones: 3 + 5 - 2 = 6', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.acciones.ingresarDigito('3') })
    act(() => { result.current.acciones.ingresarOperador('+') })
    act(() => { result.current.acciones.ingresarDigito('5') })
    act(() => { result.current.acciones.ingresarOperador('-') })
    act(() => { result.current.acciones.ingresarDigito('2') })
    act(() => { result.current.acciones.calcular() })
    expect(result.current.estado.pantalla).toBe('6')
  })

  // Prueba de división con resultado decimal
  it('22 / 7 produce maximo 9 caracteres sin redondear', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.acciones.ingresarDigito('2') })
    act(() => { result.current.acciones.ingresarDigito('2') })
    act(() => { result.current.acciones.ingresarOperador('/') })
    act(() => { result.current.acciones.ingresarDigito('7') })
    act(() => { result.current.acciones.calcular() })
    const pantalla = result.current.estado.pantalla
    expect(pantalla.length).toBeLessThanOrEqual(9)
    expect(pantalla.startsWith('3.142857')).toBe(true)
  })

  // Prueba de resultado negativo
  it('resultado negativo muestra ERROR y queda en historial', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.acciones.ingresarDigito('3') })
    act(() => { result.current.acciones.ingresarOperador('-') })
    act(() => { result.current.acciones.ingresarDigito('9') })
    act(() => { result.current.acciones.calcular() })
    expect(result.current.estado.pantalla).toBe('ERROR')
    expect(result.current.estado.historial[0].resultado).toBe('ERROR')
  })

  // Prueba de overflow
  it('999999999 + 1 produce ERROR por overflow', () => {
    const { result } = renderHook(() => useCalculator())
    '999999999'.split('').forEach(d => act(() => { result.current.acciones.ingresarDigito(d) }))
    act(() => { result.current.acciones.ingresarOperador('+') })
    act(() => { result.current.acciones.ingresarDigito('1') })
    act(() => { result.current.acciones.calcular() })
    expect(result.current.estado.pantalla).toBe('ERROR')
  })
})
