'use strict'
const sequelize = require('sequelize')
var mysql = require('mysql');
const util = require('util');
// const usuarios = require('models');


var pool = mysql.createConnection({
    host: 'bv8yr1znywge5rsdiedq-mysql.services.clever-cloud.com',
    user : 'udzlmcanbzpdigsg',
    password : 'I4rET8Aptq9CFPGRPjy8',
    database : 'bv8yr1znywge5rsdiedq'
});
console.log(123)

var models = require('./models');
// let respo = models.Estudiante.findAll({raw:true}).then(child => {
//     console.log(child)
// });
let value = [];
//   console.log(value);//con esto accedo al resultado de la query
// let useraAll =models.Estudiante.findAll({raw:true});//esto funciona obtenemos los valores y los almacenamos
// useraAll.then(console.log)
//Convertir el objeto pool en una peticion sincronica
// pool.query() gestiona las peticiones (pool referencia conexion / query metodo que permite hacer consultas o transaccion de la base de datos)
// import('./modelsv2/userModel')
pool.query = util.promisify(pool.query);//Transforma pool.query en una funcion sincronica y llamarla pool.query (el mismo)
module.exports = pool; //Exportamos la referencia de la conexion, que sea publica para cualquier ruta





// const models = require('./models/estudiante');
// const estudiante = models.estudiante;
// const estudianteFacultad = models.estudianteFacultad;
// const facultad = models.facultad;
// estudiante.create({
//     nombre:"Estudiante1",
//     apellido:"EstudianteApellido",
//     email:"estu@estu.com"
// }).then((newEstudiante) => {
//     console.log(newEstudiante.get())
// }).catch((err)=>{
//     console.log("Error al crear estudiante : ",err);
// })
// facultad.create({
//     nombre:"facultad1",
//     direccion : "pepe123",
//     localidad : "vicente lopez",
//     provincia : "buenos Aires",
// })
// .then((newEstudiante) => {
//     console.log(newEstudiante.get())
// }).catch((err)=>{
//     console.log("Error al crear estudiante : ",err);
// })