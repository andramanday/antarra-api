'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  role_login.init({
    uker: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'role_login',
  });
  return role_login;
};