'use strict';
const {
  Model
} = require('sequelize');
const rsp = require('../config/response');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  };
  user.init({
    pernr: DataTypes.STRING,
    kostl: DataTypes.STRING,
    hilfm: DataTypes.STRING,
    status: DataTypes.INTEGER,
    roleID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};