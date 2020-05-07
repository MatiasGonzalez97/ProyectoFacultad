'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante_facultad = sequelize.define('estudiante_facultad', {
    EstudianteId: DataTypes.INTEGER,
    FacultadId: DataTypes.INTEGER
  }, {});
  estudiante_facultad.associate = function(models) {
    // associations can be defined here
    estudiante_facultad.belongsToMany(models.Estudiante,{
      through:'Estudiante',
      as : 'EstudianteId',
      foreignKey:EstudianteId
    })
  };
  return estudiante_facultad;
};