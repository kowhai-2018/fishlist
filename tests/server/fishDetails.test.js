const env = require('./test-environment')
const fishDetails = require('../../server/db/fishDetails')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('fishDetail.getFishDetail(1) to return details of the given fishId = 1', () => {
  expect.assertions(1)
  const expected = {
    name: 'paua',
    link: 'https://en.wikipedia.org/wiki/P%C4%81ua'
  }
  const actual = fishDetails.getFishDetail(1, testDb)
  return expect(actual).resolves.toMatchObject(expected)
})

test('fishDetail.getFishDetail(13) to return details of the given fishId = 13', () => {
  expect.assertions(1)
  const expected = {
    name: 'vegan fish',
    link: 'https://shop.countdown.co.nz/shop/productdetails?stockcode=743739'
  }
  const actual = fishDetails.getFishDetail(13, testDb)
  return expect(actual).resolves.toMatchObject(expected)
})
