'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Facultads',[
      {
        nombre:"uade",
        direccion :"paseo colon",
        localidad : "caba",
        provincia :"bs as"
      },
      {
        nombre:"uba",
        direccion :"mitre 212",
        localidad : "caba",
        provincia :"mendoza"
      }
    ],{})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      // return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Facultads',null,{})
  }
};
