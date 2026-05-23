# Calculadora Web


## Requisitos

- [Bun](https://bun.sh/) >= 1.0

---

## Instalación

```bash
bun install
```

---

## Comandos

| Comando | Descripción |
|---------|-------------|
| `bun dev` | Levanta el servidor de desarrollo en `http://localhost:5173` |
| `bun run build` | Genera el build de producción en `dist/` |
| `bun run preview` | Previsualiza el build de producción |
| `bun run test` | Corre los tests con Vitest (modo watch) |
| `bun run lint` | Verifica el código con ESLint |
| `bun run storybook` | Levanta Storybook en `http://localhost:6006` |

---

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Bun** como package manager y runtime
- **Vitest** + **Testing Library** para tests
- **Storybook** para documentación de componentes
- **CSS puro** — sin frameworks de estilos

---

## Estructura del proyecto

```
src/
├── hooks/
│   └── useCalculator.ts       # Hook con toda la lógica de la calculadora
├── components/
│   ├── Calculadora.tsx        # Componente raíz (pantalla + teclado)
│   ├── Pantalla.tsx           # Display de la calculadora
│   ├── Teclado.tsx            # Teclado completo
│   ├── BotonNumero.tsx        # Botón de dígito
│   ├── BotonOperador.tsx      # Botón de operador (+, -, *, /)
│   ├── BotonDecimal.tsx       # Botón del punto decimal
│   ├── BotonSigno.tsx         # Botón +/-
│   ├── BotonLimpiar.tsx       # Botón AC / C
│   ├── Historial.tsx          # Panel de historial de operaciones
│   ├── EntradaHistorial.tsx   # Ítem individual del historial
│   └── botones.ts             # Barrel file de botones
├── stories/                   # Historias de Storybook
├── __tests__/                 # Tests unitarios e integración
├── styles/                    # CSS por sección
├── types.ts                   # Tipos TypeScript compartidos
└── constants.ts               # Constantes globales
```

---

## Rúbrica

### Diseño de interfaz — 20 pts
Tema oscuro "Obsidian Kinetic" en CSS puro con variables CSS. Layout de dos columnas: historial de operaciones a la izquierda y calculadora a la derecha. Totalmente responsive para móvil.

### Tests no triviales — 25 pts (5 × 5)

| # | Test | Archivo |
|---|------|---------|
| 1 | `3 + 5 - 2 = 6` — valida el acumulador entre dos transiciones de operador | `useCalculator.test.ts` |
| 2 | `22 / 7` — resultado truncado a máximo 9 caracteres sin redondear | `useCalculator.test.ts` |
| 3 | `3 - 9 = ERROR` — resultado negativo muestra ERROR y queda en historial | `useCalculator.test.ts` |
| 4 | `999999999 + 1 = ERROR` — overflow por encima del límite máximo | `useCalculator.test.ts` |
| 5 | Click `7` `+` `3` `=` → display muestra `10` — integración DOM completa con `fireEvent` | `Calculator.test.tsx` |

Correr con: `bun run test`

### Historias de Storybook — 25 pts (5 × 5)

| # | Historia | Variantes |
|---|----------|-----------|
| 1 | `Pantalla` | `'0'`, `'123456789'` (9 chars), `'ERROR'` |
| 2 | `BotonOperador` | activo vs inactivo |
| 3 | `Teclado` | estado inicial, operador activo |
| 4 | `Historial` | vacío, con entradas (incluyendo ERROR) |
| 5 | `Calculadora` | estado inicial, operación en curso |

Ver con: `bun run storybook`

### Lint — 10 pts
ESLint configurado en `eslint.config.js` con:
- `semi: ['error', 'never']` — prohíbe punto y coma
- `max-len: ['error', { code: 120 }]` — máximo 120 caracteres por línea
- Script `lint` cubre `**/*.{js,jsx,ts,tsx}`

Verificar con: `bun run lint` (sin output = sin errores)

### Punto decimal — 5 pts
Implementado en `BotonDecimal.tsx`. El `.` cuenta como carácter dentro del límite de 9. Solo se permite un decimal por número.

### División — 10 pts
Operador `/` implementado en `useCalculator.ts`. Resultados con muchos decimales (ej: `22/7 = 3.14285714`) se truncan a 9 caracteres sin redondear. División por cero produce `ERROR`.

### Módulo — 5 pts
Operador `%` implementado como botón especial en `Teclado.tsx` y manejado en `useCalculator.ts`.

### Función +/- — 5 pts
Implementado en `BotonSigno.tsx`. El signo `-` cuenta como carácter dentro del límite de 9.

### Custom hook — 10 pts
Toda la lógica de la calculadora vive en `src/hooks/useCalculator.ts`. Expone `{ estado, acciones }` y los componentes solo consumen estos valores sin lógica propia.

### Sin componente supera 20 líneas — 20 pts
Todos los archivos en `src/components/` tienen ≤ 20 líneas.

### Title y favicon — 5 pts
- Title: `NEON_CALC` (definido en `index.html`)
- Favicon: SVG personalizado en `public/favicon.svg`

### TypeScript — 5 pts
Todo el proyecto usa `.ts` y `.tsx`. Los tipos compartidos están en `src/types.ts`.

### Package manager — 5 pts
Se usa **Bun** en lugar de Node/npm. El archivo `bun.lock` está commiteado en el repositorio.
