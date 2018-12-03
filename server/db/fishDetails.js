const connection = require('./')
const fish = require('./fish')

function getFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_id', fishId)
    .join('fish', 'fish.id', '=', 'fish_details.fish_id')
    .select('name', 'description', 'link', 'image', 'video')
    .first()
}

function deleteFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_details.fish_id', fishId)
    .del()
}

module.exports = {
  getFishDetail,
  deleteFishDetail
}
