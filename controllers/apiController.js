var Api = require('./../models/apiModel');

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
    Api.findById(req.params.id,function(err,api){
      if(err){
        res.status(500);
        res.send("Error de actualización.");
      }
      else{
        var api = new Api(req.body);
        api.save(function(err){
          if(err){
            res.status(500);
            res.send("Error al añadir la actualización.");
          }
          else{
            res.status(200);
            res.send(api);
          }
        });
      }
    });
  };

  var getById = function(req, res){
    Api.findById(req.params.id,function(err,api){
      if(err){
        res.status(500);
        res.send("No encontrado.");
      }
      else{
          res.status(200);
          res.send(api);
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
