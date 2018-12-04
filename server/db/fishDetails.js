const connection = require('./')
const fish = require('./fish')

function getFishDetail (fishId, db = connection) {
  return db('fish')
    .join('levels', 'fish.level_id', 'levels.id')
    .leftOuterJoin('methods', 'methods.id', 'method_id')
    .join('fish_details', 'fish.id', 'fish_details.id')
    .where('fish.id', fishId)
    .select(
      'fish.id as id',
      'fish.name as name',
      'description',
      'link',
      'video',
      'image',
      'level_id',
      'level',
      'color',
      'method_id',
      'method',
      'fish.created_at',
      'fish.updated_at'
    )
    .first()
}

function deleteFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_details.fish_id', fishId)
    .del()
    // .catch((err) => console.log('FiSH Details JS = '+ err))
}

module.exports = {
  getFishDetail,
  deleteFishDetail
}
