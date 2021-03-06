var Api = require('./../models/adminModel');
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
  Api.find(function(err, Api){
    if(err){
      res.status(500);
      res.send("Error del servidor.");
    }
    else{
      res.status(200);
      res.send(Api);
    }
  });
};

var add = function(req, res){
  var api = new Api(req.body);
  api.save(function(err){
    if(err){
      res.status(500);
      res.send("Error al añadir.");
    }
    else{
      res.status(200);
      res.send(api);
    }
  });
};

var del = function(req, res){
  Api.findById(req.params.id,function(err,api){
    if(err){
      res.status(500);
      res.send("Error.");
    }
    else{
      api.remove(function(err){
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

  Api.update(conditions, update, options, function(err,api){
    if(err){
      res.status(500);
      res.send("Error de actualización.");
    }
    else{
      res.send("¡La actualización se ha realizado exitosamente!");
    }
  });
};

var getById = function(req, res){
  Api.findOne({cedula: req.params.id}, function(err, doc){
    if(isEmpty(doc)){
      res.status(200);
      res.send(false);
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
