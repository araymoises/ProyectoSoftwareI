var Acceso = require('./../models/accesoModel');
var Matricula = require('./../models/matriculaModel');
var Materia = require('./../models/materiaModel');

var Persona = require('./../models/personaModel');
var Persona = require('./../models/personaModel');
var Persona = require('./../models/personaModel');
var Persona = require('./../models/personaModel');
var Persona = require('./../models/personaModel');
var Persona = require('./../models/personaModel');
const util = require('util');

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

var get = function(req, res){
  Matricula.find(function(err, matricula){
    if(err){
      res.status(500);
      res.send("Error del servidor.");
    }
    else{
      res.status(200);
      res.send("matricula");
    }
  });
};

var add = function(req, res){
  var materia = new Materia(req.body);
  materia.save(function(err){
    if(err){
      res.status(500);
      res.send("Error al añadir.");
    }
    else{
      res.status(200);
      res.send(materia);
   }
  });
};

//Matrícula - Materia - Acceso.
var check = function(req, res){
  Matricula.find({persona: req.params.id}, function(err, doc){
    if(isEmpty(doc)){
      res.status(500);
      res.send("No encontrado.");
    }
    else{
      res.status(200);
      res.send(doc);
    }
  });
};

module.exports = {
  add  :add,
  check:check
};
