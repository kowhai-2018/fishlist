export default function fishReducer (state = [], action) {
  switch (action.type) {
    case 'GET_FISH_SUCCESS':
      return action.fish

    case 'GET_FISH_DETAIL':
      return action.fishDetail

    default:
      return state
  }
}
