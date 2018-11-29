import nock from 'nock'

import * as auth from '../../client/actions/auth'

beforeAll(() => {
  nock(/.*/)
    .persist()
    .post('/api/v1/auth/login', { username: 'foo', password: 'bar' })
    .reply(201, { ok: true, token: '0123456789ABCDEF' })
    .post('/api/v1/auth/login', { username: 'floof' })
    .reply(401, { ok: false, error: 'No password provided.' })
    .post('/api/v1/auth/register', { username: 'foo', password: 'bar', email: 'bar@foo' })
    .reply(201, { ok: true, token: '0123456789ABCDEF' })
    .post('/api/v1/auth/register', { username: 'floof', password: 'florf' })
    .reply(401, { ok: false, error: 'No email provided.' })
})

afterAll(() => {
  nock.cleanAll()
})

test('loginPending matches the last snapshot', () => {
  expect(auth.loginPending()).toMatchSnapshot()
})

test('loginSuccess matches the last snapshot', () => {
  expect(auth.loginSuccess()).toMatchSnapshot()
})

test('loginFailure matches the last snapshot', () => {
  expect(auth.loginFailure('badness happened')).toMatchSnapshot()
})

test('login dispatches PENDING', () => {
  expect.assertions(1)
  const expected = { type: 'LOGIN_PENDING' }
  const dispatch = jest.fn()
  return auth.login('foo', 'bar')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})

test('login dispatches SUCCESS', () => {
  expect.assertions(1)
  const expected = { type: 'LOGIN_SUCCESS' }
  const dispatch = jest.fn()
  return auth.login('foo', 'bar')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})

test('login dispatches FAILURE on error', () => {
  expect.assertions(1)
  const expected = { type: 'LOGIN_FAILURE', message: 'No password provided.' }
  const dispatch = jest.fn()
  return auth.login('floof')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})

test('login sets ACCESS-TOKEN correctly', () => {
  expect.assertions(1)
  const expected = '0123456789ABCDEF'
  const dispatch = jest.fn()

  return auth.login('foo', 'bar')(dispatch)
    .then(() => {
      const actual = localStorage.getItem('ACCESS-TOKEN')
      expect(actual).toBe(expected)
    })
})

test('registerPending matches the last snapshot', () => {
  expect(auth.registerPending()).toMatchSnapshot()
})

test('registerSuccess matches the last snapshot', () => {
  expect(auth.registerSuccess()).toMatchSnapshot()
})

test('registerFailure matches the last snapshot', () => {
  expect(auth.registerFailure('Username taken')).toMatchSnapshot()
})

test('register dispatches PENDING', () => {
  expect.assertions(1)
  const expected = { type: 'REGISTER_PENDING' }
  const dispatch = jest.fn()
  return auth.register('foo', 'bar', 'bar@foo')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})

test('register dispatches FAILURE on error', () => {
  expect.assertions(1)
  const expected = { type: 'REGISTER_FAILURE', message: 'No email provided.' }
  const dispatch = jest.fn()
  return auth.register('floof', 'florf')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})
