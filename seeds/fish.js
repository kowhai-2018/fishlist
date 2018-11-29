exports.seed = knex =>
  knex('fish').del()
    .then(() =>
      knex('fish').insert([
        {id: 1, name: 'paua'},
        {id: 2, name: 'cockle'},
        {id: 3, name: 'kingfish'},
        {id: 4, name: 'kahawai'},
        {id: 5, name: 'grey mullet'},
        {id: 6, name: 'butterfish'},
        {id: 7, name: 'striped marlin'},
        {id: 8, name: 'tarakihi'},
        {id: 9, name: 'whitebait'},
        {id: 10, name: 'blue cod'},
        {id: 11, name: 'elephantfish'},
        {id: 12, name: 'red snapper'}
      ]))
