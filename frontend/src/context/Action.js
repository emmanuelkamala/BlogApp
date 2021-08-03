export const LoginStart = (userCredentials) => ({
  type: 'LOGIN START'
})

export const LoginSuccess = (user) => ({
  type: 'LOGIN SUCCESS',
  payload: user,
})

export const LoginFailure = () => ({
  type: 'LOGIN FAILURE'
})

export const UpdateStart = (userCredentials) => ({
  type: 'UPDATE START'
})

export const UpdateSuccess = (user) => ({
  type: 'UPDATE SUCCESS',
  payload: user,
})

export const UpdateFailure = () => ({
  type: 'UPDATE FAILURE'
})

export const Logout = () => ({
  type: 'LOGOUT',
})