export const ADD_PRODUCT = 'cartItems/ADD_PRODUCT'
export const REMOVE_PRODUCT = 'cartItems/REMOVE_PRODUCT'

export const addProduct = (productId) => ({
  type: ADD_PRODUCT,
  payload: productId,
})

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
})
