const pool = require('../index');// llamamos la referencia a la conexion 
async function createrUser(obj){

    try {
        //Se usa object notation para el insert de tabla
        let query ="insert into estudiantes set ?" // Insertamos valores en la table estudiantes
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

module.exports = {createrUser,createFacu};