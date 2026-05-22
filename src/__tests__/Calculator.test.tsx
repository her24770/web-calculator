import { describe, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

describe('Calculadora (integración DOM)', () => {
  it('7 + 3 = muestra 10 en pantalla', () => {
    render(<App />)
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    const display = document.querySelector('.pantalla__valor')
    expect(display?.textContent).toBe('10')
  })
})
