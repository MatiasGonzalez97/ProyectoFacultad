// import * as Estudiante from "sequelize";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pepe' });
});

module.exports = router;

// router.get('/node',function (req,res) {
//   Estudiante.findAll().then(notes => res.json(notes))
// });