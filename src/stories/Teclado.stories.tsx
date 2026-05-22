import type { Meta, StoryObj } from '@storybook/react-vite'
import { action } from '@storybook/test'
import { Teclado } from '../components/Teclado'
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

const meta: Meta<typeof Teclado> = {
  component: Teclado,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Teclado completo de la calculadora. Cada botón delega al componente ' +
          'correspondiente según su tipo. Los clicks se registran en el panel Actions.',
      },
    },
  },
  args: { acciones, estado: estadoBase },
}
export default meta
type Story = StoryObj<typeof Teclado>

/** Teclado en estado inicial — ningún operador activo. */
export const Default: Story = {}

/** El operador + está activo porque el usuario lo presionó y aún no ingresa el segundo número. */
export const OperadorActivo: Story = {
  args: { estado: { ...estadoBase, operando: 5, operador: '+', esperandoOperando: true } },
}
