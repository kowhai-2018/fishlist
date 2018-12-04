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

export function getFishDetailSuccess (fishDetail) {
  return {
    type: 'GET_FISH_DETAIL_SUCCESS',
    fishDetail
  }
}

export function addNewFishSuccess (fishDetail) {
  return {
    type: 'ADD_NEW_FISH_SUCCESS',
    addNewFish
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

export function orderMethod (sortOrder) {
  return {
    type: 'SORT_METHOD',
    sortOrder
  }
}

export function getFish () {
  return dispatch => {
    dispatch(getFishPending())

    request
      .get('/api/v1/fish')
      .then(res => dispatch(getFishSuccess(res.body.fish)))
      .catch(err => dispatch(getFishError(err.message)))
  }
}

export function getFishDetail (fishId) {
  return dispatch => {
    dispatch(getFishPending())

    request
      .get(`/api/v1/fish/${fishId}`)
      .then(res => dispatch(getFishDetailSuccess(res.body)))
      .catch(err => dispatch(getFishError(err.message)))
  }
}

export function searchFish (searchedFish) {
  return {
    type: 'SEARCH_FISH',
    searchedFish
  }
}

export function addNewFish (newFish) {
  console.log('action')
  return dispatch => {
    dispatch(getFishPending())
    return request
      .post('/api/v1/fish/')
      .send(newFish)
      .then(res => {
        dispatch(addNewFishSuccess())
      })
      .catch(err => dispatch(getFishError(err.message)))
  }
}
