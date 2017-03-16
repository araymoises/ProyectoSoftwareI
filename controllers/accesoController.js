var Acceso = require('./../models/accesoModel');
var Matricula = require('./../models/matriculaModel');
var Materia = require('./../models/materiaModel');
var Persona = require('./../models/personaModel');
const util = require('util');

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

var get = function(req, res){
  Acceso.find(function(err, acceso){
    if(err){
      res.status(500);
      res.send("Error del servidor.");
    }
    else{
      res.status(200);
      res.send(acceso);
    }
  });
};

var add = function(req, res){
  var persona = new Persona(req.body);
  persona.save(function(err){
    if(err){
      res.status(500);
      res.send("Error al añadir.");
    }
    else{
      res.status(200);
      res.send(persona);
   }
  });
};

var del = function(req, res){
  Acceso.findById(req.params.id,function(err,acceso){
    if(err){
      res.status(500);
      res.send("Error.");
    }
    else{
      acceso.remove(function(err){
        if(err){
          res.status(500);
          res.send("Error al añadir.");
        }
        else{
          res.status(200);
          res.send("Eliminado.");
        }
      });
    }
  });
};

var update = function(req, res){
  var conditions = {_id: req.params.id},
  options = { multi: true };
  var update = new Object();
  if(req.body.nombre)
    update.nombre = req.body.nombre;
  if(req.body.apellido)
    update.apellido = req.body.apellido;
  if(req.body.username)
    update.username = req.body.username;
  if(req.body.password)
    update.password = req.body.password;

  Acceso.update(conditions, update, options, function(err,acceso){
    if(err){
      res.status(500);
      res.send("Error de actualización.");
    }
    else{
      res.send("¡La actualización de ha realizado exitosamente!");
    }
  });
};
//Matrícula - Materia - Acceso.
var getById = function(req, res){
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
  add:add,
  get:get,
  del:del,
  update:update,
  getById:getById
};
