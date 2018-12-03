import * as actions from '../../client/actions/auth'

it('dispatches the correct action', () => {
  const expected = {type: 'LOGIN_SUCCESS'}
  const actual = actions.loginSuccess()
  expect(actual).toEqual(expected)
})

it('dispatches a loginPending action', () => {
  const expected = {type: 'LOGIN_PENDING'}
  const actual = actions.loginPending()
  expect(actual).toEqual(expected)
})

it('dispatches a loginFailue action', () => {
  const expected = {type: 'LOGIN_FAILURE'}
  const actual = actions.loginFailure()
  expect(actual).toEqual(expected)
})

it('dispatches a registerPending action', () => {
  const expected = {type: 'REGISTER_PENDING'}
  const actual = actions.registerPending()
  expect(actual).toEqual(expected)
})

it('dispatches a registerSuccess action', () => {
  const expected = {type: 'REGISTER_SUCCESS'}
  const actual = actions.registerSuccess()
  expect(actual).toEqual(expected)
})
it('dispatches a registerFailure action', () => {
  const expected = {error: undefined,
    type: 'REGISTER_FAILURE'}
  const actual = actions.registerFailure()
  expect(actual).toEqual(expected)
})

it('dispatches a logout action', () => {
  const expected = {type: 'LOGOUT'}
  const actual = actions.logout()
  expect(actual).toEqual(expected)
})
