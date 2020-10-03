'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accesses', [
        {
            api_user: 'Developer',
            api_pass: "47cdd889df1ec9c55735dd8b6cd592bc76529720da96b5a464a19be36995ae6dc1d7078a2717a8925138569c33a380c08c1b756e19386fe990fed3b783ca9ab9",
            api_key: "76453f12e7abfd94a37100943e461856",
            api_ip: '*',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            api_user: 'BRIMEN',
            api_pass: "47cdd889df1ec9c55735dd8b6cd592bc76529720da96b5a464a19be36995ae6dc1d7078a2717a8925138569c33a380c08c1b756e19386fe990fed3b783ca9ab9",
            api_key: "9f6961123534311d8b1ca04a8ac14c89",
            api_ip: '172.18.135.222',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accesses', { api_user: null }, {});
  }
};
