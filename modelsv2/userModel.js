const pool = require('../index');// llamamos la referencia a la conexion
// const estu = require('../models/estudiante');
// console.log(estu)// const ususario = require('../models/estudiante');
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

        let query = "insert into facultads set ?";
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
module.exports = {createrUser}

