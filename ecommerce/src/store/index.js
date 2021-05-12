import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import cart from './cart/reducer'
import customer from './customer/reducer'

const reducer = combineReducers({
  cart,
  customer,
})

const middleware = (store) => (next) => (action) => {
  const type = action.type
  const currentState = store.getState()
  console.group(type)
  console.log('currentState:', currentState)

  const result = next(action)

  const nextState = store.getState()
  console.log('nextState:', nextState)

  console.groupEnd()
  return result
}

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
