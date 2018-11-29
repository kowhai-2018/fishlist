exports.up = knex =>
  knex.schema.createTable('fish_details', t => {
    t.increments('id').primary()
    t.integer('fish_id').references('fish.id')
    t.string('description')
    t.string('image')
    t.string('links')
    t.string('video')
  })

exports.down = knex => knex.schema.dropTable('fish_details')

