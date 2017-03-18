var Api = require('./../models/apiModel');
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

  Api.findById(req.params.id, function(err, doc){
    if(isEmpty(doc)){
      res.status(200);
      res.send("Error: No encontrado.");
    }
    else{
      var conditions = {_id: req.params.id},
      update = {title: req.body.title},
      options = { multi: true };
      Api.update(conditions, update, options, function(err,api){
        if(err){
          res.status(200);
          res.send(err);
        }
        else{
          res.send(api);
        }
      });
    }
  });
};
var aceptado = {
  aceptado: true,
  mensaje: "¡Ha podido accesar exitosamente!"
}
var rechazado = {
  aceptado: false,
  mensaje: "Lamentablemente, no ha podido accesar."
}
var getById = function(req, res){
  Api.findById(req.params.id, function(err, doc){
    if(isEmpty(doc)){
      res.status(200);
      res.send(rechazado);
    }
    else{
      res.status(200);
      res.send(aceptado);
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
