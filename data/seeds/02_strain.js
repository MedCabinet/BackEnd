
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('strain')
    .then(function () {
      // Inserts seed entries
      return knex('strain').insert([
        { user_id: 1, strain_name: '100-Og', strain_type: 'sativa', strain_description: 'blah blurb' },
        { user_id: 2, strain_name: 'Afgani', strain_type: 'indo', intake_description: 'blah blah' },
      ]);
    });
};
