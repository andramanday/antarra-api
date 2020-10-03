'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role_menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      menuID: {
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
        'role_menus',
        ['roleID', 'menuID'],
        {
          unique: true,
        }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role_menus');
  }
};