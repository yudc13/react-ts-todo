import { Todo } from '../../components/TodoItem'
import { ADD_TODO, DELETE_TODO, FILTER_TODO, FilterType, TodoActionType, TOGGLE_TODO } from './todoActions'

export interface TodoState {
  filter: FilterType,
  todoList: Todo[]
}
const defaultState: TodoState = {
  filter: 'All',
  todoList: []
}
const todoReducer = (state = defaultState, action: TodoActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo: Todo) => todo.id !== action.payload)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo: Todo) => {
          if (todo.id === action.payload.id) {
            todo.complete = action.payload.complete
          }
          return todo
        })
      }
    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state
  }
}

export default todoReducer
