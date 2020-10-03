'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role_menus', [
        {
            roleID: 1,
            MenuID: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            roleID: 1,
            MenuID: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            roleID: 1,
            MenuID: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            roleID: 1,
            MenuID: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            roleID: 1,
            MenuID: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role_menus', null, {});
  }
};
