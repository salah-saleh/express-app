'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        underscored: true,
        type: Sequelize.INTEGER
      },
      userId: {
        underscored: true,
        type: Sequelize.INTEGER
      },
      name: {
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
    return queryInterface.dropTable('Projects');
  }
};
