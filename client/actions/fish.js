import request from 'superagent'

export function getFishPending () {
  return {
    type: 'GET_FISH_PENDING'
  }
}

export function getFishSuccess (fish) {
  return {
    type: 'GET_FISH_SUCCESS',
    fish
  }
}

export function getFishError (message) {
  return {
    type: 'GET_FISH_ERROR',
    message
  }
}

export function orderAZ (sortOrder) {
  return {
    type: 'SORT_AZ',
    sortOrder
  }
}

export function orderZA (sortOrder) {
  return {
    type: 'SORT_ZA',
    sortOrder
  }
}

export function orderHighThreat (sortOrder) {
  return {
    type: 'SORT_HIGH_THREAT',
    sortOrder
  }
}

export function orderLowThreat (sortOrder) {
  return {
    type: 'SORT_LOW_THREAT',
    sortOrder
  }
}

export function getFish () {
  return dispatch => {
    dispatch(getFishPending())

    request
      .get('/api/v1/fish')
      .then(res => dispatch(getFishSuccess(res.body)))
      .catch(err => dispatch(getFishError(err.message)))
  }
}