'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    fecha_creacion: DataTypes.NOW,
    fecha_modificacion: DataTypes.NOW,
    email: DataTypes.STRING
  }, {});
  Estudiante.associate = function(models) {
    // associations can be defined here
  };
  return Estudiante;
};