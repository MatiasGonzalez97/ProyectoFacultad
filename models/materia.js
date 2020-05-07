'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {});
  materia.associate = function(models) {
    // associations can be defined here
  };
  return materia;
};