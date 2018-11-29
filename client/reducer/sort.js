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

    default:
      return {
        ...state,
        sortOrder: ''
      }
  }
}
