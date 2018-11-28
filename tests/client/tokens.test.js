import { clearToken, getToken, setToken } from '../../client/utils/tokens'

beforeEach(() => {
  localStorage.setItem('ACCESS-TOKEN', '12345')
})

test('getToken should return the current ACCESS-TOKEN', () => {
  const expected = '12345'
  const actual = getToken()
  expect(actual).toBe(expected)
})

test('setToken should overwrite the current ACCESS-TOKEN', () => {
  const expected = 'abcde'
  setToken(expected)
  const actual = localStorage.getItem('ACCESS-TOKEN')
  expect(actual).toBe(expected)
})

test('clearToken should set ACCESS-TOKEN to null', () => {
  const expected = null
  clearToken()
  const actual = localStorage.getItem('ACCESS-TOKEN')
  expect(actual).toBe(expected)
})

