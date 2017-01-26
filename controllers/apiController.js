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

module.exports = {
  add:add,
  get:get
};
