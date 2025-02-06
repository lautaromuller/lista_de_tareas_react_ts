import { type IdTarea, type Tarea as TipoTarea } from "../tipos"

interface Props extends TipoTarea {
    onEliminarTarea: ({ id }: IdTarea) => void
    onCambiarCompletado: ({ id, completado }: Pick<TipoTarea, 'id' | 'completado'>) => void
}

export const Tarea: React.FC<Props> = ({ id, titulo, completado, onEliminarTarea, onCambiarCompletado }) => {
    return (
        <div className="view">
            <input
                className='toggle'
                checked={completado}
                type="checkbox"
                onChange={(event) => {
                    onCambiarCompletado({ id, completado: event.target.checked })
                }}
            />
            <label>{titulo}</label>
            <button
            className="destroy"
            onClick={() => {
                onEliminarTarea({ id })
            }}
            />
        </div>
    )
}