const connection = require('./')

function get (db = connection) {
  return db('fish')
}

function createFish (newFish, fishDetail, db = connection) {
  return db('fish')
  .insert(newFish)
  .then(
    db('fish_details')
    .insert(fishDetail)
  )
}

module.exports = {
  get,
  createFish
}
