import infoReducer from "../../client/reducer/info"

describe('info reducer', () => {
  it('should return the initial state', () => {
    expect(infoReducer(undefined, {})).toEqual({})
  })

  it('should handle GET_FISH_PENDING', () => {
    const getFishPending = {
      type: 'GET_FISH_PENDING'
    }
    const currentState = {pending:false, fish:[]}
    const expected =  {pending:true, fish:[]}
    const actual = infoReducer(currentState, getFishPending)
    expect(actual).toEqual(expected)
  })

  it('should handle GET_FISH_SUCCESS', () => {
    const getFishSuccess = {
      type: 'GET_FISH_SUCCESS'
    }
  const currentState = {pending:true, error:null}
  const expected =  {pending:false, error:null}
  const actual = infoReducer(currentState, getFishSuccess)
  expect(actual).toEqual(expected)
  })

})