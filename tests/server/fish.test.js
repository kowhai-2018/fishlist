const env = require('./test-environment')
const db = require('../../server/db/fish')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('get returns fish', () => {
  expect.assertions(1)
  const expected = 13
  return db.get(testDb)
    .then(fish => {
      const actual = fish.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('update fish matches id(1)', () => {
  expect.assertions(1)
  const expected = {name: 'paua'}
  const actual = db.fishId(1, testDb)
  return expect(actual).resolves.toMatchObject(expected)
})
