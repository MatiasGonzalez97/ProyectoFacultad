'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facultad_carrera_materia = sequelize.define('Facultad_carrera_materia', {
    idFacultad: DataTypes.INTEGER,
    idCarrera: DataTypes.INTEGER,
    idMateria: DataTypes.INTEGER
  }, {});
  Facultad_carrera_materia.associate = function(models) {
    // associations can be defined here
  };
  return Facultad_carrera_materia;
};