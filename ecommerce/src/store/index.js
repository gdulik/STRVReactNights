import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import products from './products/reducer'
import cart from './cart/reducer'

const reducer = combineReducers({
  products,
  cart,
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

const store = createStore(
  reducer,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
