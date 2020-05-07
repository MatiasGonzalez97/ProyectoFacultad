'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING
  }, {});
  carrera.associate = function(models) {
    // associations can be defined here
  };
  return carrera;
};