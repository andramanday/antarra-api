'use strict';

const data = [
    {
        nama: "Udin",
        umur: 32,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nama: "Udan",
        umur: 43,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nama: "Edot",
        umur: 13,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nama: "Bodat",
        umur: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nama: "Gogon",
        umur: "65",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nama: "Asik",
        umur: 12,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nama: "OPK",
        umur: "CHECKER",
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
        data.maps(row => {
            row.nama,
            row.umur,
            row.createdAt,
            row.updatedAt
        })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
