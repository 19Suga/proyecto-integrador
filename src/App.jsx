import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender Git y GitHub', completada: false },
    { id: 2, texto: 'Crear repositorio del proyecto', completada: true },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    }

    setTareas([...tareas, tarea])
    setNuevaTarea('')
  }

  return (
    <main>
      <h1>TaskFlow</h1>
      <h2>Gestor de Tareas</h2>

      <p>Proyecto Integrador - Práctica Git y GitHub</p>

      <h3>Nueva tarea</h3>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>

      <h3>Mis tareas</h3>

      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <span>
            {tarea.completada ? '✓' : '○'} {tarea.texto}
          </span>
        </div>
      ))}

      <p>Total de tareas: {tareas.length}</p>
    </main>
  )
}

export default App