'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante_facultad = sequelize.define('estudiante_facultad', {
    fecha_creacion: DataTypes.NOW,
    fecha_modificacion: DataTypes.NOW
  }, {});
  estudiante_facultad.associate = function(models) {
    // associations can be defined here
  };
  return estudiante_facultad;
};