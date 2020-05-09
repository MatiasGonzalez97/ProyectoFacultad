'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('Profesor', {
    name: DataTypes.STRING
  }, {});
  Profesor.associate = function(models) {
    // associations can be defined here
  };
  return Profesor;
};