exports.seed = knex =>
  knex('levels').del()
    .then(() =>
      knex('levels').insert([
        { id: 1, level_id: 1, level: 'Great' },
        { id: 2, level_id: 2, level: 'Good' },
        { id: 3, level_id: 3, level: 'OK' },
        { id: 4, level_id: 4, level: 'Eat less' },
        { id: 5, level_id: 5, level: 'Don\'t eat' }
      ]))
