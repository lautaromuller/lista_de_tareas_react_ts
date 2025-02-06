export interface Tarea {
    id: string
    titulo: string
    completado: boolean
}

export type IdTarea = Pick<Todo, 'id'>
export type TituloTarea = Pick<Todo, 'titulo'>
export type CompletadoTarea = Pick<Todo, 'completado'>

export type ListaDeTareas = Tarea[]