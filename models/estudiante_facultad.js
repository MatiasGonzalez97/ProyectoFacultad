'use strict';

module.exports = (sequelize, DataTypes) => {
  const Estudiante_facultad = sequelize.define('Estudiante_facultad', {
    idEstudiante: DataTypes.INTEGER,
    idFacultad: DataTypes.INTEGER
  }, {});
  Estudiante_facultad.associate = function(models) {
    // associations can be defined here
    // Estudiante_facultad.hasMany(models.Estudiante,{foreignKey:'idEstudiante',as : 'estudiante'});
    // Estudiante_facultad.hasMany(models.Facultad,{foreignKey:'idFacultad',as : 'facultad'})
  };
  return Estudiante_facultad;
};