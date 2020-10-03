'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pernr: {
        type: Sequelize.STRING(10)
      },
      kostl: {
        type: Sequelize.STRING(10)
      },
      hilfm: {
        type: Sequelize.STRING(10)
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      roleID: {
        allowNull: false,
        type: Sequelize.INTEGER
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
        'users',
        ['pernr', 'kostl', 'hilfm'],
        {
          unique: true,
        }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};