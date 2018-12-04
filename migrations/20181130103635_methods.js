exports.up = knex =>
  knex.schema.createTable('methods', t => {
    t.increments('id').primary()
    t.string('method')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('methods')
