var express = require('express');
var router = express.Router();
const userModel = require('../modelsv2/userModel');

router.post('/new', async(req,res,next)=>{

    try {
        
        let obj ={

            nombre : req.body.nombre,
            direccion : req.body.direccion,
            localidad : req.body.localidad,
            provincia : req.body.provincia
        }

        console.log(req.body);
        await userModel.createFacu(obj);

        res.json({status : true, message : 'Facultad registrada correctamente'})

    } catch (error) {

        console.log(error);
        res.status(500).json({status : false, message :"faltan campos que completar"});
    }

});

router.get('/', async(req,res,next)=>{

    try {
        
        const result =await userModel.consultFacu();

        res.json({status : true, message : result});
    } catch (error) {
        
        console.log(error);
        res.json(500).json({status : false, message :"error"});
    }
})



module.exports = router;