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

    case 'SORT_HIGH_THREAT':
      return {
        ...state,
        sortOrder: 'HIGHTHREAT'
      }

      case 'SORT_LOW_THREAT':
      return {
        ...state,
        sortOrder: 'LOWTHREAT'
      }

    default:
      return {
        ...state,
        sortOrder: ''
      }
  }
}
