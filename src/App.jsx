import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender Git y GitHub', completada: false },
    { id: 2, texto: 'Crear repositorio del proyecto', completada: true },
  ])

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    )

    setTareas(tareasActualizadas)
  }

  const tareasCompletadas = tareas.filter(
    (tarea) => tarea.completada
  ).length

  return (
    <main>
      <h1>TaskFlow</h1>
      <h2>Gestor de Tareas</h2>

      <p>Proyecto Integrador - Práctica Git y GitHub</p>

      <h3>Mis tareas</h3>

      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => completarTarea(tarea.id)}
          />

          <span
            style={{
              textDecoration: tarea.completada
                ? 'line-through'
                : 'none'
            }}
          >
            {tarea.texto}
          </span>
        </div>
      ))}

      <p>Total de tareas: {tareas.length}</p>
      <p>Completadas: {tareasCompletadas}</p>
    </main>
  )
}

export default App