export const LOGIN = 'users/LOGIN'
export const LOGOUT = 'users/LOGOUT'

export const login = (user) => ({
  type: LOGIN,
  payload: { user },
})

export const logout = () => ({
  type: LOGOUT,
})
