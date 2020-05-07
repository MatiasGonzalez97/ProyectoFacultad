'use strict';
module.exports = (sequelize, DataTypes) => {
  const comentario_facultad_carrera_materia = sequelize.define('comentario_facultad_carrera_materia', {
    comentario: DataTypes.TEXT
  }, {});
  comentario_facultad_carrera_materia.associate = function(models) {
    // associations can be defined here
  };
  return comentario_facultad_carrera_materia;
};