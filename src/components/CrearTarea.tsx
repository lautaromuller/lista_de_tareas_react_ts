import { useState } from "react"
import { TituloTarea } from "../tipos"

interface Props {
    guardarTarea: ({ titulo }: TituloTarea) => void
}


export const CrearTarea: React.FC<Props> = ({ guardarTarea }) => {
    const [valorInput, setValorInput] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        guardarTarea({ titulo: valorInput })
        setValorInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={valorInput}
                onChange={(e) => { setValorInput(e.target.value) }}
                placeholder="¿Qué quieres hacer?"
                autoFocus
            />
        </form>
    )
}