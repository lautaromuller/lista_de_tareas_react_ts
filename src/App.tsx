import { useState } from 'react'
import { Tareas } from './components/Tareas'
import { type TituloTarea, type IdTarea, type Tarea as TipoTarea } from './tipos'
import { ValorFiltro, FILTROS_TAREAS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ejemploTareas } from './mocks/Tareas.ts'

const App = (): JSX.Element => {
  const [tareas, setTareas] = useState<TipoTarea[]>(ejemploTareas)
  const [filtroSeleccionado, setFiltroSeleccionado] = useState<ValorFiltro>(FILTROS_TAREAS.TODOS)

  const handleEliminarTarea = ({ id }: IdTarea) => {
    const nuevaTarea = tareas.filter(tarea => tarea.id !== id)
    setTareas(nuevaTarea)
  }

  const handleCambiarCompletado = ({ id, completado }: Pick<TipoTarea, 'id' | 'completado'>) => {
    const nuevasTareas = tareas.map(tarea => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completado
        }
      }
      return tarea
    })

    setTareas(nuevasTareas)
  }

  const handleFiltros = (filtro: ValorFiltro) => {
    setFiltroSeleccionado(filtro)
  }

  const handleEliminarCompletados = () => {
    const nuevasTareas = tareas.filter(tarea => !tarea.completado)
    setTareas(nuevasTareas)
  }

  const handleAgregarTarea = ({ titulo }: TituloTarea) => {
    const nuevaTarea = {
      titulo,
      id: crypto.randomUUID(),
      completado: false
    }

    const nuevasTareas = [...tareas, nuevaTarea]
    setTareas(nuevasTareas)
  }

  const contadorActivos = tareas?.filter(tarea => !tarea.completado).length ?? 0
  const contadorCompletados = tareas.length - contadorActivos

  const tareasFiltradas = tareas.filter(tarea => {
    if(filtroSeleccionado === FILTROS_TAREAS.ACTIVO) return !tarea.completado
    if(filtroSeleccionado === FILTROS_TAREAS.COMPLETADO) return tarea.completado
    return tarea
  })

  return (
    <div className='todoapp'>
      <Header onAgregarTarea={handleAgregarTarea}/>
      <Tareas
        onCambiarCompletado={handleCambiarCompletado}
        onEliminarTarea={handleEliminarTarea}
        tareas={tareasFiltradas}
      />
      <Footer
      contadorActivos={contadorActivos}
      contadorCompletados={contadorCompletados}
      onEliminarCompletados={handleEliminarCompletados}
      filtroSeleccionado={filtroSeleccionado}
      handleFiltros={handleFiltros}
      />
    </div>
  )
}

export default App
