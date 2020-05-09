'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {});
  Estudiante.associate = function(models) {
    // associations can be defined here
  };
  return Estudiante;
};