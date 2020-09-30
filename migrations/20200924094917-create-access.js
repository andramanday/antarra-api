'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      api_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      api_pass: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      api_key: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      api_ip: {
        allowNull: false,
        type: Sequelize.STRING(20)
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
    await queryInterface.dropTable('accesses');
  }
};