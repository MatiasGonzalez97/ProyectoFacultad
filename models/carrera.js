'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carrera = sequelize.define('Carrera', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  Carrera.associate = function(models) {
    // associations can be defined here
  };
  return Carrera;
};