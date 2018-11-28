const env = require('./test-environment')
const users = require('../../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('users.get returns an array of 1 user', () => {
  expect.assertions(1)
  return users.get(testDb)
    .then(actual => expect(actual.length).toBe(1))
})

test('users.create hashes the password but does not store it', () => {
  expect.assertions(3)
  const user = {
    username: 'foo',
    email: 'bar@wombat.com'
  }
  return users.create({ ...user, password: 'password' }, testDb)
    .then(actual => {
      expect(actual).toMatchObject(user)
      expect(actual.password).toBe(undefined)
      expect(actual.hash).toMatch(/argon2/)
    })
})

test('users.getByUsername gets a user by username', () => {
  expect.assertions(1)
  const expected = {
    username: 'test',
    email: 'test@example.com'
  }
  const actual = users.getByUsername('test', testDb)
  return expect(actual).resolves.toMatchObject(expected)
})

test('users.getById gets a user by id', () => {
  expect.assertions(1)
  const expected = {
    username: 'test',
    email: 'test@example.com'
  }
  return users.getByUsername('test', testDb)
    .then(({ id }) => users.getById(id, testDb))
    .then((actual) => expect(actual).toMatchObject(expected))
})
