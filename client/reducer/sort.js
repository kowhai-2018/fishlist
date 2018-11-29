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

    case 'SORT_BEST':
      return {
        ...state,
        sortOrder: 'Best'
      }

    case 'SORT_WORST':
      return {
        ...state,
        sortOrder: 'Worst'
      }

    default:
      return {
        ...state,
        sortOrder: ''
      }
  }
}
