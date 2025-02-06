import { type IdTarea, type ListaDeTareas, type Tarea as TipoTarea } from "../tipos"
import { Tarea } from "./Tarea"

interface Props {
    tareas: ListaDeTareas
    onEliminarTarea: ({ id }: IdTarea) => void
    onCambiarCompletado: ({ id, completado }: Pick<TipoTarea, 'id' | 'completado'>) => void
}

export const Tareas: React.FC<Props> = ({ tareas, onEliminarTarea, onCambiarCompletado }) => {
    return (
        <ul className="todo-list">
            {tareas.map(tarea => (
                <li
                    key={tarea.id}
                    className={`${tarea.completado ? 'completado' : ''}`}>
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        titulo={tarea.titulo}
                        completado={tarea.completado}
                        onEliminarTarea={onEliminarTarea}
                        onCambiarCompletado={onCambiarCompletado}
                    />
                </li>
            ))}
        </ul>
    )
} 