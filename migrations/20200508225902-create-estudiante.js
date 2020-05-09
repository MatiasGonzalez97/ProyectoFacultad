'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Estudiantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      usuario: {
        type:Sequelize.STRING
      },
      password: {
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.Date
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Estudiantes');
  }
};