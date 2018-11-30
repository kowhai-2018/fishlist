const connection = require('./')

function get(db = connection) {
  return db('fish')
}

function createFish(
  newFish,
  fishDetail,
  db = connection
) {
  return db('fish')
    .insert(newFish)
    .then((res) => db('fish_details').insert({
      ...fishDetail,
      fish_id: res[0]
    }))
}

module.exports = {
  get,
  createFish
}
