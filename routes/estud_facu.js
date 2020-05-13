var express = require('express');
var router = express.Router();
const userModel = require('../modelsv2/userModel');

router.post('/new', async(req,res,next)=>{

    try {

        let idEstu = req.body.idEstudiante;
        let idFacu = req.body.idFacultad;

        let estu =await userModel.idEstudiante(idEstu);
        let facu =await userModel.idFacultad(idFacu);
        console.log("ok");

        if(estu == null || estu ==[] || estu == {}){

            console.log("hola");
            throw "no existe el estudiante";
        }

        const obj ={
            idEstudiante : estu,
            idFacultad : facu
        }

        await userModel.createEstud_facu(obj);
        res.json({status : true, message : 'Usuario y facultad registrado correctamente'})

    } catch (error) {
        console.log(error);
        res.json(500).json({status : false, message :"error"});
    }
})

module.exports = router;