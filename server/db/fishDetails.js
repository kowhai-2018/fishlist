const connection = require('./')

function getFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_id', fishId)
    .join('fish', 'fish.id', '=', 'fish_details.fish_id')
    .select('name', 'description', 'links', 'image', 'video')
}

module.exports = {
  getFishDetail
}
