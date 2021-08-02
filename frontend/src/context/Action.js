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

export const Logout = () => ({
  type: 'LOGOUT',
})