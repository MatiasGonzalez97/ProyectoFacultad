'use strict';
module.exports = (sequelize, DataTypes) => {
  const facultad_carrera = sequelize.define('facultad_carrera', {
    fecha_creacion: DataTypes.NOW,
    fecha_modificacion: DataTypes.NOW
  }, {});
  facultad_carrera.associate = function(models) {
    // associations can be defined here
  };
  return facultad_carrera;
};