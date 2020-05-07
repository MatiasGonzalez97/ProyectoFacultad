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