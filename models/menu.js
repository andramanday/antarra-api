'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  menu.init({
    posisi: DataTypes.INTEGER,
    jenis: DataTypes.STRING,
    title: DataTypes.STRING,
    route: DataTypes.STRING,
    controller: DataTypes.STRING,
    component: DataTypes.STRING,
    icon: DataTypes.STRING,
    parentID: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'menu',
  });
  return menu;
};