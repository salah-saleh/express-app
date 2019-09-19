'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        underscored: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        underscored: true,
        type: Sequelize.STRING
      },
      lastName: {
        underscored: true,
        type: Sequelize.STRING
      },
      email: {
        underscored: true,
        type: Sequelize.STRING
      },
      createdAt: {
        underscored: true,
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        underscored: true,
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
