exports.seed = knex =>
  knex('levels').del()
    .then(() =>
      knex('levels').insert([
        {id: 1, level: 'Great', color: 'green'},
        {id: 2, level: 'Good', color: 'olive'},
        {id: 3, level: 'OK', color: 'yellow'},
        {id: 4, level: 'Eat less', color: 'orange'},
        {id: 5, level: 'Don\'t eat', color: 'red'}
      ]))
