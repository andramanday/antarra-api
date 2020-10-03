'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
        {
            id: 1,
            uker: "APP",
            level: "DEV",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            uker: "APP",
            level: "ADM",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 11,
            uker: "MAT",
            level: "MAKER",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 12,
            uker: "MAT",
            level: "CHECKER",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 13,
            uker: "MAT",
            level: "SIGNER",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 21,
            uker: "OPK",
            level: "MAKER",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 22,
            uker: "OPK",
            level: "CHECKER",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 23,
            uker: "OPK",
            level: "SIGNER",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
