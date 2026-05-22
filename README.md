# Calculadora Web

## Objetivos

- Practicar diseño de aplicaciones basadas en componentes
- Practicar testing
- Practicar conceptos básicos de linting

> **Nota:** Este ejercicio incluye requerimientos muy específicos con el objetivo de facilitar el testing.

---

## Requerimientos

La calculadora debe consistir de una **pantalla (display)** y un **teclado numérico** compuesto de botones HTML. Todo input debe hacerse desde los botones.

**Comportamiento:**
- Al presionar un número, se muestra en el display
- Cada número siguiente se concatena a la derecha
- Al presionar una operación, el siguiente número limpia el display antes de colocarse
- Si se presiona una operación nuevamente, se muestra el resultado acumulado
- El botón `=` muestra el resultado final

**Operaciones requeridas:**
- Suma
- Resta
- Multiplicación
- Igualdad

**Condiciones del display:**
- Máximo **9 caracteres** — cualquier entrada adicional se ignora
- Si el resultado es **negativo**, mostrar `ERROR`
- Si el resultado es **mayor a 999,999,999**, mostrar `ERROR`

**Entrega:**
- Publicar la calculadora en el servidor de la clase y entregar el link
- Entregar link al código para poder correr los tests
- Configurar tests para correr con `npm test` (o `bun` o `deno`) en la raíz del proyecto
- **Si suben `node_modules` al repo, la nota es 0**

---

## Puntos

| Puntos | Criterio |
|--------|----------|
| 20 | [Subjetivo] Diseño de la interfaz |
| 5 c/u (máx 25) | Por cada test no trivial implementado |
| 5 c/u (máx 25) | Por cada historia de Storybook implementada |
| 10 | Código compliant con JavaScript Standard Style, con regla custom que prohíba punto y coma, regla de máximo 120 caracteres por línea, y script `lint` que pase por todos los `.js` y `.jsx` |
| 5 | Implementar punto decimal (cuenta como carácter dentro del límite de 9) |
| 10 | Implementar operación de **división** (respetar límite de 9 caracteres, especial atención a resultados con muchos decimales, ej: 22/7) |
| 5 | Implementar operación de **módulo** |
| 5 | Implementar función **+/-** (el signo `-` cuenta como carácter dentro del límite de 9) |
| 10 | Manejar parte de la lógica con un **custom hook** |
| 20 | Ningún archivo de componente supera las **20 líneas de código** |
| 5 | Title y favicon distintos al default |
| 5 | Usar **TypeScript** |
| 5 | No usar Node ni npm como package manager (commitear el lockfile) |
