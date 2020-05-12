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
      usuario : req.body.usuario,
      password : req.body.password
    }
    
    if(object.nombre == ""){
      
      throw "campo nombre vacio";
    }else if(object.apellido == ""){
      
      throw "campo apellido vacio";
    }else if(object.email == ""){
      
      throw "campo email vacio";
    }else if(object.usuario == ""){
      
      throw "campo usuario vacio";
    }else if(object.password == ""){
      
      throw "campo password vacio";
    }
    console.log(req.body);
    await userModel.createrUser(object);

    res.json({status : true, message : 'Usuario registrado correctamente'})
  } 
    
   catch (error) {
    console.log(error);
    res.status(500).json({status : false, message :"faltan campos que completar"});
  }
})

module.exports = router;
