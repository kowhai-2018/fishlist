exports.seed = knex =>
  knex('threat').del()
    .then(() =>
      knex('threat').insert([
        { name: 'paua', threat: '1' },
        { name: 'cockle', threat: '2' },
        { name: 'kingfish', threat: '3', threat2: '5' },
        { name: 'kahawai', threat: '3' },
        { name: 'grey mullet', threat: '4' },
        { name: 'butterfish', threat: '4' },
        { name: 'striped marlin', threat: '5' },
        { name: 'tarakihi', threat: '4' },
        { name: 'whitebait', threat: '5' },
        { name: 'blue cod', threat: '3', threat2: '5' },
        { name: 'elephantfish', threat: '5' },
        { name: 'red snapper', threat: '5' }
      ]))
