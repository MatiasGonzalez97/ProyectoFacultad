'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facultad = sequelize.define('Facultad', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {});
  Facultad.associate = function(models) {
    // associations can be defined here
  };
  return Facultad;
};