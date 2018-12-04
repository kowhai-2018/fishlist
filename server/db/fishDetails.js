const connection = require('./')
const fish = require('./fish')

function getFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_id', fishId)
    .join('fish', 'fish.id', '=', 'fish_details.fish_id')
    .select('name', 'description', 'link', 'image', 'video', 'level_id', 'method_id')
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
