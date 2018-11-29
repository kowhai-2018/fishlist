exports.up = knex =>
  knex.schema.createTable('methods', t => {
    t.increments('id').primary()
    t.integer('method_id').references('methods.id')
    t.string('method')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('methods')
