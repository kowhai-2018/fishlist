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

function getById (id, db = connection) {
  return db('fish')
    .join('levels', 'fish.level_id', 'levels.id')
    .leftOuterJoin('methods', 'fish.method_id', 'methods.id')
    .join('fish_details', 'fish.id', 'fish_details.fish_id')
    .where('fish.id', id)
    .select(
      'fish.id as id',
      'fish.name as name',
      'color',
      'level',
      'level_id',
      'method_id',
      'method',
      'description',
      'image',
      'link',
      'video',
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

module.exports = {
  get,
  getById,
  createFish
}
