exports.up = knex =>
  knex.schema.createTable('fish', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('level_id')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('fish')
