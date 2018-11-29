export default function sortReducer (state = {}, action) {
  switch (action.type) {
    case 'SORT_AZ':
      return {
        ...state,
        sortOrder: 'AZ'
      }

    case 'SORT_ZA':
      return {
        ...state,
        sortOrder: 'ZA'
      }

    case 'SORT_THREAT':
      return {
        ...state,
        sortOrder: 'Best'
      }

    default:
      return {
        ...state,
        sortOrder: ''
      }
  }
}
