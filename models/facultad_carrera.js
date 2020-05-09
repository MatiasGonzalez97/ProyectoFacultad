'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facultad_carrera = sequelize.define('Facultad_carrera', {
    idFacultad: DataTypes.INTEGER,
    idCarrera: DataTypes.INTEGER
  }, {});
  Facultad_carrera.associate = function(models) {
    // associations can be defined here
  };
  return Facultad_carrera;
};