import fishReducer from '../../../client/reducer/fish'
import fishDetailsReducer from '../../../client/reducer/fishDetails'

test('GET_FISH_SUCCESS action type returns action.fish', () => {
  expect.assertions(1)
  const expected = 'tuna'
  const action = {
    type: 'GET_FISH_SUCCESS',
    fish: 'tuna'
  }
  const actual = fishReducer([], action)
  expect(actual).toBe(expected)
})

test('GET_FISH_DETAIL_SUCCESS action type returns action.fishDetail', () => {
  expect.assertions(1)
  const expected = {
    name: 'cockle',
    description: 'cockle is cute',
    image: 'http:// link to image location'
  }
  const action = {
    type: 'GET_FISH_DETAIL_SUCCESS',
    fishDetail: expected
  }
  const actual = fishDetailsReducer({}, action)
  expect(actual).toMatchObject(expected)
})
