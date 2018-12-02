const connection = require('./')

function getFishDetail (fishId, db = connection) {
  return db('fish_details')
    .where('fish_id', fishId)
    .join('fish', 'fish.id', '=', 'fish_details.fish_id')
    .select('name', 'description', 'link', 'image', 'video')
    .first()
}

function getFishLevel (levelId, db = connection) {
  return db('fish')
    .where('level_id', levelId)
    .join('levels', 'levels.id', '=', 'fish.level_id')
    .select('level')
    .first()
}

function getFishMethod (methodId, db = connection) {
  return db('fish')
    .where('method_id', methodId)
    .join('methods', 'methods.id', '=', 'fish.method_id')
    .select('method')
    .first()
}

module.exports = {
  getFishDetail,
  getFishLevel,
  getFishMethod
}
