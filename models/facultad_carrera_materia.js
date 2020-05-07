'use strict';
module.exports = (sequelize, DataTypes) => {
  const facultad_carrera_materia = sequelize.define('facultad_carrera_materia', {
    fecha_creacion: DataTypes.NOW,
    fecha_modificacion: DataTypes.NOW
  }, {});
  facultad_carrera_materia.associate = function(models) {
    // associations can be defined here
  };
  return facultad_carrera_materia;
};