const connection = require('./')

function get (db = connection) {
  return db('fish')
}

module.exports = {
  get
}
