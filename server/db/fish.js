const connection = require('./')

function get (db = connection) {
  return db('fish')
    .join('levels', 'fish.level_id', '=', 'levels.id')
    .select()
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

function deleteFish (
  fishID,
  fishDetail,
  db = connection
) {
  db('fish_details')
    .where('fish_details.fish_id', fishID)
    .dell()
    .then(()=> {
      db('fish')
        .where('id', fish_id)
        .dell()
        
    })
}



module.exports = {
  get,
  createFish,
  deleteFish
}
