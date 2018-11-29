exports.seed = knex =>
  knex('fish').del()
    .then(() =>
      knex('fish').insert([
        { id: 1, level_id: '1', name: 'paua' },
        { id: 2, level_id: '1', name: 'cockle' },
        { id: 3, level_id: '4', name: 'kingfish' },
        { id: 4, level_id: '5', name: 'kahawai' },
        { id: 5, level_id: '7', name: 'grey mullet' },
        { id: 6, level_id: '1', name: 'butterfish' },
        { id: 7, level_id: '7', name: 'striped marlin' },
        { id: 8, level_id: '9', name: 'tarakihi' },
        { id: 9, level_id: '1', name: 'whitebait' },
        { id: 10, level_id: '2', name: 'blue cod' },
        { id: 11, level_id: '2', name: 'elephantfish' },
        { id: 12, level_id: '2', name: 'red snapper' }
      ]))
