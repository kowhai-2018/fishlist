exports.up = knex =>
  knex.schema.createTable('fish', t => {
    t.increments('id').primary()
    t.string('name')
    t.integer('method_id').references('methods.id')
    t.integer('level_id').references('levels.id')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('fish')
