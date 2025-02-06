import { FILTROS_BOTONES, type ValorFiltro } from "../consts"

interface Props {
    onFiltros: (valorFiltro: ValorFiltro) => void
    filtroSeleccionado: ValorFiltro
}

export const Filtros: React.FC<Props> = (
    { filtroSeleccionado, onFiltros }
) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTROS_BOTONES).map(([key, { href, literal }]) => {
                    const isSelected = key === filtroSeleccionado
                    const className = isSelected ? 'seleccionado' : ''

                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFiltros(key as ValorFiltro)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}