'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [
        {
            id: 1,
            posisi: 0,
            jenis: "MAIN",
            title: "DASHBOARD",
            route: null,
            controller: null,
            component: null,
            icon: "fas fa-fire",
            parentID: 0,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            posisi: 0,
            jenis: "MAIN",
            title: "SETTINGS",
            route: null,
            controller: null,
            component: null,
            icon: "fas fa-cogs",
            parentID: 0,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            posisi: 1,
            jenis: "NODROP",
            title: "PENGGUNA",
            route: "1JMyKVN1bI2NilxFB34p69IsN3EJvA9le5qF3eeuKNDmoKKDYT",
            controller: "SettingController/pengguna",
            component: "setting/pengguna",
            icon: "fas fa-users",
            parentID: 2,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            posisi: 1,
            jenis: "NODROP",
            title: "MENU",
            route: "fZKjsHeUHvDukuty9czeGPbxqwJyWh9R4Q7iXJJz9f9v9BDud0",
            controller: "SettingController/menu",
            component: "setting/menu",
            icon: "fas fa-list",
            parentID: 2,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 5,
            posisi: 1,
            jenis: "NODROP",
            title: "ROLE",
            route: "MDuDVYMJ1pnm74W9eypFdeRp8rcomuy6593lYT8gtFJEfpnS6I",
            controller: "SettingController/role",
            component: "setting/role",
            icon: "fas fa-list",
            parentID: 2,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 6,
            posisi: 1,
            jenis: "NODROP",
            title: "ROLE MENU",
            route: "UqfVnPMjd0CEyp2Q2KyLEYVpe5BrQep8GbHIeHZpP3H86ad0rY",
            controller: "SettingController/rolemenu",
            component: "setting/rolemenu",
            icon: "fas fa-list",
            parentID: 2,
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {});
  }
};
