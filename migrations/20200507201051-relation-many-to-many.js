'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all( [
      queryInterface.addConstraint('Usuario_LenguajePs', ['UsuarioId'], {
        type: 'FOREIGN KEY',
        name: 'FK_UsuarioLenguajeP_Usuario_1',
        references: {
          table: 'Usuarios',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }),
      queryInterface.addConstraint('Usuario_LenguajePs', ['LenguajePId'], {
        type: 'FOREIGN KEY',
        name: 'FK_UsuarioLenguajeP_LenguajeP_1',
        references: {
          table: 'LenguajePs',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeConstraint('Usuario_LenguajePs', 'FK_UsuarioLenguajeP_Usuario_1'),
      queryInterface.removeConstraint('Usuario_LenguajePs', 'FK_UsuarioLenguajeP_LenguajeP_1'),
    ]
  }
};