'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  role_menu.init({
    roleID: DataTypes.INTEGER,
    menuID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'role_menu',
  });
  return role_menu;
};