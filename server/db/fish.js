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

function updateFish (db, req, res) {
  const fishId = Number(req.params.id)
  return db('fishDetails')
    .where('fishId', fishId)
    .update(fishDetails => res.status(200).json(fishDetails))
}

module.exports = {
  get,
  createFish,
  updateFish
}
