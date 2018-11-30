import nock from 'nock'

import * as auth from '../../client/actions/auth'
import reducer from '../../client/reducer/auth'

let state = null

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

beforeEach(() => {
  state = {
    error: null,
    loggedIn: false,
    newRegistration: false,
    pending: false
  }
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
  const expected = { type: 'LOGIN_FAILURE', error: 'No password provided.' }
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

test('register dispatches SUCCESS', () => {
  expect.assertions(1)
  const expected = { type: 'REGISTER_SUCCESS' }
  const dispatch = jest.fn()
  return auth.register('foo', 'bar', 'bar@foo')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})

test('register dispatches FAILURE on error', () => {
  expect.assertions(1)
  const expected = { type: 'REGISTER_FAILURE', error: 'No email provided.' }
  const dispatch = jest.fn()
  return auth.register('floof', 'florf')(dispatch)
    .then(() => expect(dispatch).toHaveBeenCalledWith(expected))
})

test('reducer sets loggedIn true on LOGIN_SUCCESS', () => {
  const expected = {
    loggedIn: true,
    pending: false
  }
  const actual = reducer(state, auth.loginSuccess())
  expect(actual).toMatchObject(expected)
})

test('reducer sets pending true on LOGIN_PENDING', () => {
  const expected = {
    loggedIn: false,
    pending: true
  }
  const actual = reducer(state, auth.loginPending())
  expect(actual).toMatchObject(expected)
})

test('reducer sets error on LOGIN_FAILURE', () => {
  const expected = {
    error: 'Password incorrect.',
    loggedIn: false,
    pending: false
  }
  const actual = reducer(state, auth.loginFailure('Password incorrect.'))
  expect(actual).toMatchObject(expected)
})

test('reducer sets pending true on REGISTER_PENDING', () => {
  const expected = {
    loggedIn: false,
    pending: true
  }
  const actual = reducer(state, auth.registerPending())
  expect(actual).toMatchObject(expected)
})

test('reducer sets error on REGISTER_FAILURE', () => {
  const expected = {
    error: 'Email not provided.',
    loggedIn: false,
    pending: false
  }
  const actual = reducer(state, auth.loginFailure('Email not provided.'))
  expect(actual).toMatchObject(expected)
})

test('reducer sets state correctly on REGISTER_SUCCESS', () => {
  const expected = {
    error: null,
    loggedIn: true,
    newRegistration: true,
    pending: false
  }
  const actual = reducer(state, auth.registerSuccess())
  expect(actual).toMatchObject(expected)
})
