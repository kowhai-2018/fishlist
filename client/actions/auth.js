import request from 'superagent'

import { setToken } from '../utils/tokens'

export const loginPending = () => ({ type: 'LOGIN_PENDING' })

export const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' })

export const loginFailure = message => ({ type: 'LOGIN_FAILURE', message })

export const login = (username, password) => dispatch => {
  dispatch(loginPending())

  return request
    .post('/api/v1/auth/login')
    .send({ username, password })
    .then(res => {
      setToken(res.body.token)
      dispatch(loginSuccess())
    })
    .catch(err => dispatch(loginFailure(err.message)))
}
