'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static test()
    {

        sequelize.transaction(t => {
            const user =  test.bulkCreate({
                name: 'Andra',
                umur: 30
            },
            {
                name: 'BUR',
                umur: "buyung"
            }, { transaction: t });
          
            // Woops, the query was successful but we still want to roll back!
            // We throw an error manually, so that Sequelize handles everything automatically.
            throw new Error();
        });

        // const t = sequelize.transaction();

        // try {
        //     const user = test.bulkCreate(
        //         {
        //             name: 'Andra',
        //             umur: 30
        //         },
        //         {
        //             name: 'BUR',
        //             umur: 10
        //         }
        //     , { transaction: t });
        //     // user.addSibling({
        //     //     name: 'Lisa',
        //     //     lastName: 'Simpson'
        //     // }, { transaction: t });
        //     // If the execution reaches this line, no errors were thrown.
        //     // We commit the transaction.
        //     t.commit();
        //     // rsp.ok(user, `sukse`, res);
        //     return {error : false, msg: user};
        // } catch (error) {
        //     // If the execution reaches this line, an error was thrown.
        //     // We rollback the transaction.
        //     t.rollback();
        //     return {error : true, msg: error};
        // }
    }
  };
  test.init({
    nama: DataTypes.STRING,
    umur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'test',
  });
  return test;
};