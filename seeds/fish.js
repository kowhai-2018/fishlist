exports.seed = knex =>
  knex('fish').del()
    .then(() =>
      knex('fish').insert(
        [
          {id: 1, name: 'paua', level_id: 1, method_id: 2},
          {id: 2, name: 'cockle', level_id: 1, method_id: 2},
          {id: 3, name: 'kingfish', level_id: 1, method_id: 2},
          {id: 4, name: 'kahawai', level_id: 1, method_id: 2},
          {id: 5, name: 'grey mullet', level_id: 1, method_id: 2},
          {id: 6, name: 'butterfish', level_id: 1, method_id: 2},
          {id: 7, name: 'striped marlin', level_id: 1, method_id: 2},
          {id: 8, name: 'tarakihi', level_id: 1, method_id: 2},
          {id: 9, name: 'whitebait', level_id: 1, method_id: 2},
          {id: 10, name: 'blue cod', level_id: 1, method_id: 2},
          {id: 11, name: 'elephantfish', level_id: 1, method_id: 2},
          {id: 12, name: 'red snapper', level_id: 1, method_id: 2},
          {id: 13, name: 'vegan fish', level_id: 1, method_id: 2}
        ]
      )
    )
