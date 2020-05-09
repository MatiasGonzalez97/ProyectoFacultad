'use strict'

var mysql = require('mysql');
const util = require('util');

var pool = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'linkinpark123',
    database : 'proyecto_facultad_foro'
});
//Convertir el objeto pool en una peticion sincronica
//pool.query() gestiona las peticiones (pool referencia conexion / query metodo que permite hacer consultas o transaccion de la base de datos)

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