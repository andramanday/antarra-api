'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uker: {
        type: Sequelize.STRING(10)
      },
      level: {
        type: Sequelize.STRING(10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex(
        'roles',
        ['uker', 'level'],
        {
          unique: true,
        }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');
  }
};