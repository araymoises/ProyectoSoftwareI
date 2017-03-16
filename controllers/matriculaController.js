var model   =   require('./../models/matriculaModel');
const util = require('util');


var get = function(req, res){
  model.find(function(err, api){
    if(err){
      res.status(500);
      res.send("Error del servidor.");
    }
    else{
      res.status(200);
      res.send(api);
    }
  });
};

/* Agregar una nueva persona a la matricula  */
var add =   function(req,res){

  var api = new model(req.body);
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

/* Buscar una persona por el ID en la matricula*/
var getById =   function(req,res){
    model.findById(req.params.id, function(err,doc){
        if (err){
            res.status(500);
            res.send(false);
        }else{
            res.status(200);
            res.send(doc);
        }
    });
};
/* Eliminar una persona por el ID */
var del =   function(req,res){
    model.findById(req.params.id, function(err,api){
        if (err){
            res.status(500);
            res.send("Error.");
        }else{
            api.remove(function(err){
                if (err){
                    res.status(500);
                    res.send("Error al eliminar.");
                }else{
                    res.status(200);
                    res.send("Eliminado.");
                }
            });
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
