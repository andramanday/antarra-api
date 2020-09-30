'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static generateAuthToken(data) {
      // Generate an auth token for the user
      const token = jwt.sign({id: data.id}, process.env.JWT_KEY)
      // data.tokens = data.tokens.concat({token})
      // data.save()
      return token
    }

  };
  access.init({
    api_user: DataTypes.STRING,
    api_pass: DataTypes.TEXT,
    api_key: DataTypes.TEXT,
    api_ip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'access',
  });
  return access;
};