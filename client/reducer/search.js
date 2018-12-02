export default function searchReducer (state = '', action) {
  switch (action.type) {
    case 'SEARCH_FISH':
      return action.searchedFish

    default:
      return state
  }
}
