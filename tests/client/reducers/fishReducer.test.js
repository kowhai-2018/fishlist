import fishReducer from '../../../client/reducer/fish'

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

