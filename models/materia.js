'use strict';
module.exports = (sequelize, DataTypes) => {
  const Materia = sequelize.define('Materia', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  Materia.associate = function(models) {
    // associations can be defined here
  };
  return Materia;
};