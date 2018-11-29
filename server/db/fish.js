const connection = require('./')

function get (db = connection) {
  return db('fish')
}

function addFish (newFish, db = connection) {
  return db('fish')
  .insert(newFish)
}

module.exports = {
  get,
  addFish
}
