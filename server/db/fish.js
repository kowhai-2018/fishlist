const connection = require('./')

function get(db = connection) {
  return db('fish')
}

function createFish(
  newFish,
  fishDetail,
  fishLevel,
  fishMethod,
  db = connection
) {
  return db('fish')
    .insert(newFish)
    .then(db('fish_details').insert(fishDetail))
    .then(db('levels').insert(fishLevel))
    .then(db('methods').insert(fishMethod))
}

module.exports = {
  get,
  createFish
}
