'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
      title: 'post1',
      content: 'aaaaaaa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'post2',
      content: 'bbbbbbbbbb',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
