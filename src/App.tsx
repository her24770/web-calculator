import { useCalculator } from './hooks/useCalculator'
import { Calculadora } from './components/Calculadora'
import { Historial } from './components/Historial'
import './styles/app.css'

function App() {
  const { estado, acciones } = useCalculator()
  return (
    <div className="app">
      <header className="navbar">
        <span className="navbar__brand">CALCULADORA</span>
      </header>
      <main className="main">
        <aside className="sidebar">
          <div className="sidebar__header">
            <span className="sidebar__titulo">HISTORIAL</span>
          </div>
          <div className="sidebar__contenido">
            <Historial entradas={estado.historial} />
          </div>
          <div className="sidebar__footer">
            <span className="sidebar__version">Josue Hernández</span>
          </div>
        </aside>
        <section className="calc-section">
          <Calculadora estado={estado} acciones={acciones} />
        </section>
      </main>
    </div>
  )
}

export default App
