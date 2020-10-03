'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
        {
            id: 1,
            pernr: '00263626',
            kostl: null,
            hilfm: null,
            status: 1,
            roleID: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            pernr: null,
            kostl: 'PS2009',
            hilfm: '026',
            status: 1,
            roleID: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', { pernr: null }, {});
  }
};
