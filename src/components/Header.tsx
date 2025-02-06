import { TituloTarea } from "../tipos"
import { CrearTarea } from "./CrearTarea"

interface Props {
    onAgregarTarea: ({ titulo }: TituloTarea) => void
}

export const Header: React.FC<Props> = ({ onAgregarTarea }) => {
    return (
        <header className="header">
            <h1>Lista de tareas</h1>

            <CrearTarea guardarTarea={onAgregarTarea}/>
        </header>
    )
}