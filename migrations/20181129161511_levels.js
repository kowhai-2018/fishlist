exports.up = knex =>
  knex.schema.createTable('levels', t => {
    t.increments('id').primary()
    t.string('level')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('levels')
