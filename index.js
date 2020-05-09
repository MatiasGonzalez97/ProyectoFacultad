'use strict'

var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : null,
    database : 'proyecto_facultad'
});
conexion.connect(function(error){
    if(error) throw error;
    console.log("connected");
} );

const models = require('./models');
const estudiante = models.Estudiante;
const estudianteFacultad = models.estudianteFacultad;
const facultad = models.facultad;
estudiante.create({
    nombre:"Estudiante1",
    apellido:"EstudianteApellido",
    email:"estu@estu.com"
}).then((newEstudiante) => {
    console.log(newEstudiante.get())
}).catch((err)=>{
    console.log("Error al crear estudiante : ",err);
})
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