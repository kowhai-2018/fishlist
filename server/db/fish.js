const connection = require('./')

function getFish (db = connection) {
  return db('fish')
}

module.exports = {
  getFish
}
