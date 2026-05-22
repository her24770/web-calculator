import type { Meta, StoryObj } from '@storybook/react-vite'
import { Historial } from '../components/Historial'
import '../styles/historial.css'
import '../index.css'

const meta: Meta<typeof Historial> = {
  component: Historial,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Panel de historial de operaciones. Muestra cada cálculo realizado ' +
          'con su expresión y resultado. Si no hay entradas muestra un mensaje vacío.',
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Historial>

/** Sin operaciones realizadas aún. */
export const Vacio: Story = { args: { entradas: [] } }

/** Historial con tres entradas, incluyendo una con resultado ERROR. */
export const ConEntradas: Story = {
  args: {
    entradas: [
      { expresion: '256 * 4', resultado: '1024', marca: 1 },
      { expresion: '1240 + 85.5', resultado: '1325.5', marca: 2 },
      { expresion: '3 - 9', resultado: 'ERROR', marca: 3 },
    ],
  },
}
