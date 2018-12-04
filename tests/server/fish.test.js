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

// test('', () => {
//   expect.assertions(1)
//   const expected = 13

//   const fish = {
//     name,
//     level_id: levelId,
//     method_id: methodId
//   }
//   const detail = {
//     description,
//     image,
//     link,
//     video
//   }

//   return db.createFish(fish, detail, testDb)
//     .then(fish => {
//       const actual = fish.length
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeTruthy())
// })
