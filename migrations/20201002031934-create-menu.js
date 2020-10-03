'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posisi: {
        type: Sequelize.INTEGER
      },
      jenis: {
        type: Sequelize.STRING(7)
      },
      title: {
        type: Sequelize.STRING(25)
      },
      route: {
        type: Sequelize.STRING(100)
      },
      controller: {
        type: Sequelize.STRING(100)
      },
      component: {
        type: Sequelize.STRING(100)
      },
      icon: {
        type: Sequelize.STRING(50)
      },
      parentID: {
        type: Sequelize.INTEGER
      },
      status: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menus');
  }
};