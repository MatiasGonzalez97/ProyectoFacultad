var express = require('express');
var router = express.Router();
const userModel = require('../modelsv2/userModel');

/* GET users listing. */
router.post('/new', async(req,res,next)=>{

  try {
    
    let object ={
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email : req.body.email,
      edad : req.body.edad,
     
    }

    console.log(req.body);
    await userModel.createrUser(object);

    res.json({status : true, message : 'Usuario registrado correctamente'})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({status : false, message :error});
  }

})

module.exports = router;
