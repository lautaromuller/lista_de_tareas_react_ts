export const FILTROS_TAREAS = {
    TODOS: 'todos',
    ACTIVO: 'activo',
    COMPLETADO: 'completado'
} as const

export const FILTROS_BOTONES = {
    [FILTROS_TAREAS.TODOS]: {
        literal: 'Todas',
        href: `/?filter=${FILTROS_TAREAS.TODOS}`
    },
    [FILTROS_TAREAS.ACTIVO]: {
        literal: 'Activas',
        href: `/?filter=${FILTROS_TAREAS.ACTIVO}`
    },
    [FILTROS_TAREAS.COMPLETADO]: {
        literal: 'Completadas',
        href: `/?filter=${FILTROS_TAREAS.COMPLETADO}`
    }
} as const

export type ValorFiltro = typeof FILTROS_TAREAS[keyof typeof FILTROS_TAREAS]