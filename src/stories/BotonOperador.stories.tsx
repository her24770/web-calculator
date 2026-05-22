import type { Meta, StoryObj } from '@storybook/react-vite'
import { BotonOperador } from '../components/BotonOperador'
import '../styles/calculadora.css'
import '../index.css'

const meta: Meta<typeof BotonOperador> = {
  component: BotonOperador,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Botón para los operadores aritméticos (+, −, ×, ÷). ' +
          'Se resalta con brillo cuando es el operador actualmente seleccionado.',
      },
    },
  },
  args: { valor: '+', onClick: () => {} },
}
export default meta
type Story = StoryObj<typeof BotonOperador>

/** Operador sin seleccionar — estado normal. */
export const Inactivo: Story = { args: { activo: false } }

/** Operador seleccionado — el usuario ya lo presionó y espera el segundo número. */
export const Activo: Story = { args: { activo: true } }
