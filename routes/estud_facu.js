var express = require('express');
var router = express.Router();
const userModel = require('../modelsv2/userModel');

router.post('/new', async(req,res,next)=>{
    console.log('dentro')
    try {
        console.log('dentro del route')
        let idEstu = req.body.idEstudiante;
        let idFacu = req.body.idFacultad;

        let estu =await userModel.idEstudiante(idEstu);
        console.log('estudiante ',estu);
        let facu =await userModel.idFacultad(idFacu);
        console.log("facu :",facu);

        const obj ={
            idEstudiante : estu,
            idFacultad : facu
        }

        await userModel.createEstud_facu(obj);
        res.json({status : true, message : 'Usuario y facultad registrado correctamente'})

    } catch (error) {
        console.log(error);
        res.json({status : false, message :error});
    }
})

module.exports = router;