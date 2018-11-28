
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fish_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('fish_details').insert([
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},
        {fish_id: 'rowValue1', description: '', image: 'url', links: '', video: 'url'},

      ]);
    });
};
