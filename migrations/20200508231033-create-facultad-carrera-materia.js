'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Facultad_carrera_materia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFacultad: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'Facultads',
          key:'id'
        }
      },
      idCarrera: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'Carreras',
          key:'id'
        }
      },
      idMateria: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'Materia',
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
    return queryInterface.dropTable('Facultad_carrera_materia');
  }
};