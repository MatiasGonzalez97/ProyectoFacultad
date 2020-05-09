'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comentarios_estudiantes_Facultad_carreras_Materias_profesor = sequelize.define('Comentarios_estudiantes_Facultad_carreras_Materias_profesor', {
    idEstudianteFacultad: DataTypes.INTEGER,
    IdProfesor: DataTypes.INTEGER,
    idFacultadCarrerasMaterias: DataTypes.INTEGER,
    comentarios: DataTypes.STRING
  }, {});
  Comentarios_estudiantes_Facultad_carreras_Materias_profesor.associate = function(models) {
    // associations can be defined here
  };
  return Comentarios_estudiantes_Facultad_carreras_Materias_profesor;
};