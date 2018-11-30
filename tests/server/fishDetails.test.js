const env = require('./test-environment')
const fishDetails = require('../../server/db/fishDetails')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('fishDetail.getFishDetail to return details of the given fishId ', () => {
  expect.assertions(1)
  const expected = {
    name:,
    description,
    links,
    image,
    video
  }
  const actual = fishDetails.getFishDetail('test', testDb)
  return expect(actual).resolves.toMatchObject(expected)
})
