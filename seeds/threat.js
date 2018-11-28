exports.seed = knex =>
  knex('threat').del()
    .then(() =>
      knex('threat').insert([
        { name: 'paua', threat: 'Great to eat'},
        { name: 'cockle', threat: 'Good to eat' },
        { name: 'kingfish', threat: 'OK to eat', 'Don\'t eat' },
        { name: 'kahawai', threat: 'OK to eat' },
        { name: 'grey mullet', threat: 'Eat less of' },
        { name: 'butterfish', threat: 'Eat less of' },
        { name: 'striped marlin', threat: 'Don\'t eat' },
        { name: 'tarakihi', threat: 'Eat less of' },
        { name: 'whitebait', threat: 'Don\'t eat' },
        { name: 'blue cod', threat: 'OK to eat', 'Don\'t eat' },
        { name: 'elephantfish', threat: 'Don\'t eat' },
        { name: 'red snapper', threat: 'Don\'t eat'}
      ]))
