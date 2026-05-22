import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pantalla } from '../components/Pantalla'
import '../styles/calculadora.css'
import '../index.css'

const meta: Meta<typeof Pantalla> = {
  component: Pantalla,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Muestra el valor actual en pantalla y la expresión previa. ' +
          'El valor se pinta de rojo cuando el resultado es ERROR.',
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Pantalla>

const base = { operando: null, operador: null }

/** Estado inicial al abrir la calculadora. */
export const Inicial: Story = { args: { estado: { ...base, pantalla: '0' } } }

/** Pantalla con exactamente 9 caracteres — el máximo permitido. */
export const LimiteCaracteres: Story = { args: { estado: { ...base, pantalla: '123456789' } } }

/** Resultado inválido: negativo, infinito o mayor a 999,999,999. */
export const Error: Story = { args: { estado: { ...base, pantalla: 'ERROR' } } }
