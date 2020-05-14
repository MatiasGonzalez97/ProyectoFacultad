const pool = require('../index');// llamamos la referencia a la conexion
// const estu = require('../models/estudiante');
const models = require('../models')

// console.log(estu)// const ususario = require('../models/estudiante');
async function createrUser(obj) {
    try {
        //Se usa object notation para el insert de tabla
        let query = "insert into Estudiantes set ?" // Insertamos valores en la table estudiantes
        const rows = await pool.query(query, obj);
        return rows; //

    } catch (error) {
        throw error;
    }

}


async function createFacu(obj) {

    try {

        let query = "insert into Facultads set ?";
        const rows = await pool.query(query, obj);
        return rows;

    } catch (error) {
        throw error;
    }
}

async function consultFacu() {
    try {
        let query = "select * from Facultads";
        const rows = await pool.query(query);
        return rows;
    } catch (error) {

        throw error;
    }
}

async function idEstudiante(id) {
    let resultQuery = models.Estudiante.findAll({raw: true, where: {id: id}}).then(response => {
        if (response.length > 0) {
            return id;
        } else {
            throw "no existe el estudiante"
        }
    });
    return resultQuery;
}

async function idFacultad(id) {
    let resultQuery = models.Facultad.findAll({raw: true, where: {id: id}}).then(response => {
        if (response.length > 0) {
            return id;
        } else {
            throw "no existe la facultad";
        }
    });
    return resultQuery;
}

async function createEstud_facu(obj) {

    try {
        console.log(obj);
        let query = "insert into Estudiante_facultads set ?";
        const rows = await pool.query(query, obj);

        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {createrUser, createFacu, consultFacu, idEstudiante, idFacultad, createEstud_facu}

