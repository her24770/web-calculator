import type { Meta, StoryObj } from '@storybook/react-vite'
import { action } from '@storybook/test'
import { Calculadora } from '../components/Calculadora'
import '../styles/calculadora.css'
import '../index.css'

const acciones = {
  ingresarDigito: action('ingresarDigito'),
  ingresarOperador: action('ingresarOperador'),
  ingresarDecimal: action('ingresarDecimal'),
  cambiarSigno: action('cambiarSigno'),
  calcular: action('calcular'),
  limpiar: action('limpiar'),
}
const estadoBase = {
  pantalla: '0', operando: null, operador: null,
  esperandoOperando: false, historial: [], tieneEntrada: false,
}

const meta: Meta<typeof Calculadora> = {
  component: Calculadora,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Componente principal de la calculadora. Ensambla la Pantalla y el Teclado. ' +
          'Recibe el estado y las acciones del hook useCalculator desde App.',
      },
    },
  },
  args: { acciones, estado: estadoBase },
}
export default meta
type Story = StoryObj<typeof Calculadora>

/** Estado inicial — pantalla en cero, sin operación pendiente. */
export const Default: Story = {}

/** Operación en curso — el usuario ingresó 7 × y luego escribió 42. */
export const MidCalculation: Story = {
  args: { estado: { ...estadoBase, pantalla: '42', operando: 7, operador: '*', esperandoOperando: false } },
}
