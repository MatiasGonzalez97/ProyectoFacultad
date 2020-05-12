'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComentariosEstudiantesFacultadCarrerasMateriasProfesors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEstudianteFacultad: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'Estudiante_facultads',
          key:'id'
        }
      },
      IdProfesor: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'Profesors',
          key:'id'
        }
      },
      idFacultadCarrerasMaterias: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references :{
          model:'Facultad_carrera_materia',
          key:'id'
        }
      },
      comentarios: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('ComentariosEstudiantesFacultadCarrerasMateriasProfesors');
  }
};