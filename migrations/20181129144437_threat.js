exports.up = knex =>
  knex.schema.createTable('threat', t => {
    t.increments('id').primary()
    t.string('name').unique()
    t.string('threat')
    t.string('threat2')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('threat')
