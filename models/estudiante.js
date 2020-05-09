'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    usuario:DataTypes.STRING,
    password:DataTypes.STRING
  }, {});
  Estudiante.associate = function(models) {
    // associations can be defined here
  };
  return Estudiante;
};