const connection = require('./')

function get (db = connection) {
  return db('fish')
    .join('levels', 'fish.level_id', '=', 'levels.id')
    .select(
      'fish.id as id',
      'fish.name as name',
      'color',
      'level',
      'level_id',
      'method_id',
      'fish.created_at',
      'fish.updated_at'
    )
}

function createFish (
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

function updateFish (
  id,
  updatedItem,
  name,
  color,
  level,
  method,
  db = connection
) {
  return db('fishDetails')
    .where('id', id)
    .update(
      name, updatedItem.name,
      color, updatedItem.color,
      level, updatedItem.level,
      method, updatedItem.method
    )
}

module.exports = {
  get,
  createFish,
  updateFish
}
