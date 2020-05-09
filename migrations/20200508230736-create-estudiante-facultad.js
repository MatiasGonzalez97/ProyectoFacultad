'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Estudiante_facultads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEstudiante: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model:'estudiantes',
          key:'id'
        }
      },
      idFacultad: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'facultads',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Estudiante_facultads');
  }
};