import { Middleware } from 'redux'
export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('current state: ', store.getState())
  console.log('current action: ', action)
  // 调用middleware链中下一个middleware的dispatch
  next(action)
  console.log('updated state: ', store.getState())
}
