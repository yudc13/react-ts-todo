import { createStore, applyMiddleware } from 'redux'
import { actionLog } from './middlewares/actionLog'

import todoReducer from './todo/todoReduxer'

const store = createStore(
  todoReducer,
  applyMiddleware(actionLog)
)

export type RootState = ReturnType<typeof store.getState>

export default store
