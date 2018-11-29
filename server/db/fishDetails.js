const connection = require('./')

function getFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_id', fishId)
}

module.exports = {
  getFishDetail
}