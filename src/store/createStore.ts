import { createStore } from 'redux'
import todoReducer from './todo/todoReduxer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  todoReducer,
  composeEnhancers
)

export type RootState = ReturnType<typeof store.getState>

export default store
