const connection = require('./')

function getFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_id', fishId)
    .join('fish', 'fish.id', '=', 'fish_details.fish_id')
    .select('name', 'description', 'link', 'image', 'video', 'level_id', 'method_id')
    .first()
}

module.exports = {
  getFishDetail
}
