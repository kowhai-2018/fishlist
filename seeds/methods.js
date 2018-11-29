exports.seed = knex =>
  knex('methods').del()
    .then(() =>
      knex('methods').insert([
        { id: 1, method: 'Farmed' },
        { id: 2, method: 'Jig' },
        { id: 3, method: 'Troll' },
        { id: 4, method: 'Long line' },
        { id: 5, method: 'Net' },
        { id: 6, method: 'Diving' },
        { id: 7, method: 'Baited pots' },
        { id: 8, method: 'Mid-water trawl' },
        { id: 9, method: 'Bottom trawl' },
        { id: 10, method: 'Dredge' },
        { id: 11, method: 'Trawl' }
      ]))
