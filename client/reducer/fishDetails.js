export default function fishDetailsReducer (state = {}, action) {
  switch (action.type) {
    case 'GET_FISH_DETAIL_SUCCESS':
      return action.fishDetail

    default:
      return state
  }
}
