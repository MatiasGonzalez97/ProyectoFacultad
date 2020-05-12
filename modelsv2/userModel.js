const pool = require('../index');// llamamos la referencia a la conexion
// const ususario = require('../models/estudiante');
async function createrUser(obj){

    // try{
    //     const usuarios = await Estudiante.findAll({
    //         include : [
    //             {
    //                 model : Estudiante,
    //                 as : 'Facultads',
    //                 attributes : {exclude : ['createdAt','updateAt']},
    //                 through :{attributes:[]}
    //             }
    //         ]
    //     });
    //     console.log(JSON.stringify(usuarios));
    //     process.exit();
    // } catch (e) {
    //     console.log(e)
    // }
     try {
        //Se usa object notation para el insert de tabla
       let query ="insert into Estudiantes set ?" // Insertamos valores en la table estudiantes
         const rows = await pool.query(query,obj);
        return rows; //
    
    } catch (error) {
        throw error;
     }

}


async function createFacu(obj){
    
    try {

        let query = "insert into Facultads set ?";
        const rows = await pool.query(query,obj);
        return rows;

    } catch (error) {
        throw error;
    }
}



// const db = require('../models');
// console.log('asd')

// const main = async () => {
//     console.log('adentro')
//     try{
//         const usuarios = await Estudiantes.findAll({
//             include : [
//                 {
//                     model : Estudiantes,
//                     as : 'Facultads',
//                     attributes : {exclude : ['createdAt','updateAt']},
//                     through :{attributes:[]}
//                 }
//             ]
//         });
//         console.log(JSON.stringify(usuarios));
//         process.exit();
//     } catch (e) {
//         console.log(e)
//     }
// }



// const main = async () => {
//     console.log('adentro')
//     try{
//         const usuarios = await Estudiantes.findAll({
//             include : [
//                 {
//                     model : Estudiantes,
//                     as : 'Facultads',
//                     attributes : {exclude : ['createdAt','updateAt']},
//                     through :{attributes:[]}
//                 }
//             ]
//         });
//         console.log(JSON.stringify(usuarios));
//         process.exit();
//     } catch (e) {
//         console.log(e)
//     }
// }

async function consultFacu(){
    try {
        

        let query = "select * from Facultads";
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        
        throw error;
    }
}
async function idEstudiante(id){

    try {
        
        let query = "select id from Estudiantes where id = ?";
        
        const rows = await pool.query(query,id);
        if(rows == null || rows ==[] || rows == {}){

            console.log("hola");
            throw "no existe el estudiante";
        }
        return id;

    } catch (error) {
        console.log("no existe id estudiante")
        throw error;
    }
}
async function idFacultad (id){
    try {
        
        let query = "select id from Facultads where id = ?";
        const rows = await pool.query (query, id);
        console.log(rows);
        if(rows == null || rows === [] ||rows == {}){

            console.log("chau");
            throw "no existe el facultad";
        }
        return id;

    } catch (error){
        console.log("no existe id facultad");
        throw error;
    }
}
async function createEstud_facu(obj){

    try {
        console.log(obj);
        let query ="insert into Estudiante_facultads set ?";
        const rows = await pool.query(query,obj);
        
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {createrUser,createFacu,consultFacu,idEstudiante,idFacultad,createEstud_facu}

