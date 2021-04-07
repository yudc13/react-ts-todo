import {Todo} from '../../components/TodoItem'

export const ADD_TODO = 'add_todo'
export const DELETE_TODO = 'delete_todo'
export const TOGGLE_TODO = 'toggle_todo'
export const FILTER_TODO = 'filter_todo'
export const FILTER_ALL = 'All'
export const FILTER_ACTIVE = 'Active'
export const FILTER_COMPLETED = 'Completed'

export type FilterType = typeof FILTER_ALL | typeof FILTER_ACTIVE | typeof FILTER_COMPLETED

console.log(typeof FILTER_ALL)

export interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: Todo
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO,
  payload: number
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO,
  payload: { id: number, complete: boolean }
}

export interface FilterTodoAction {
  type: typeof FILTER_TODO,
  payload: FilterType
}

export type TodoActionType = AddTodoAction | DeleteTodoAction | ToggleTodoAction | FilterTodoAction

export const addTodoActionCreator = (id: number, content: string): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      content,
      complete: false
    }
  }
}

export const deleteTodoActionCreator = (id: number): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const toggleTodoActionCreator = (id: number, complete: boolean): ToggleTodoAction => {
  return {
    type: TOGGLE_TODO,
    payload: { id, complete }
  }
}

export const filterTodoActionCreator = (filter: FilterType): FilterTodoAction => {
  return {
    type: FILTER_TODO,
    payload: filter
  }
}
