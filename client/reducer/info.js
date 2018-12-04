export default function infoReducer (state = {}, action) {
  switch (action.type) {
    case 'GET_FISH_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'GET_FISH_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'GET_FISH_DETAIL_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'GET_FISH_ERROR':
      return {
        ...state,
        pending: false,
        error: action.message
      }
    case 'DEL_FISH_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'DEL_FISH_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'DEL_FISH_DETAIL_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'DEL_FISH_ERROR':
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
