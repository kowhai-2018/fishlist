exports.up = knex =>
  knex.schema.createTable('threat', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('threat')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('threat')
