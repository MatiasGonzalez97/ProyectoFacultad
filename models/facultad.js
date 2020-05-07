'use strict';
module.exports = (sequelize, DataTypes) => {
  const facultad = sequelize.define('facultad', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {});
  facultad.associate = function(models) {
    // associations can be defined here
  };
  return facultad;
};