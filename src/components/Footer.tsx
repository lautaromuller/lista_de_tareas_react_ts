import { ValorFiltro } from "../consts"
import { Filtros } from "./Filtros"

interface Props {
    contadorActivos: number
    contadorCompletados: number
    filtroSeleccionado: ValorFiltro
    onEliminarCompletados: () => void
    handleFiltros: (filtro: ValorFiltro) => void
}

export const Footer: React.FC<Props> = ({
    contadorActivos = 0,
    contadorCompletados = 0,
    filtroSeleccionado,
    handleFiltros,
    onEliminarCompletados
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{contadorActivos}</strong> Tareas pendientes
            </span>

            <Filtros
            filtroSeleccionado={filtroSeleccionado}
            onFiltros={handleFiltros}
            />

            {
                contadorCompletados > 0 && (
                    <button
                    className="clear-completed"
                    onClick={onEliminarCompletados}
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
    )
}