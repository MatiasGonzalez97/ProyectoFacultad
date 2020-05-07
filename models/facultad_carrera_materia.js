'use strict';
module.exports = (sequelize, DataTypes) => {
  const facultad_carrera_materia = sequelize.define('facultad_carrera_materia', {
    id: DataTypes.UUIDV1
  }, {});
  facultad_carrera_materia.associate = function(models) {
    // associations can be defined here
  };
  return facultad_carrera_materia;
};