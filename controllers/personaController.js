var model   =   require('./../models/personaModel');
const util = require('util');

/* Mostrar todos las personas guardadas */
var get =   function(req,res){
    model.find(function(err,api){
        if (err){
            res.status(500);
            res.send("Error del servidor.");
        }else{
            res.status(200);
            res.send(api);
        }
    });
};

/* Agregar una nueva persona en los registros */
var add =   function(req,res){
    var agg =   new model(req.body);
    agg.save(function(err){
        if (err){
            res.status(500);
            res.send("Error al añadir.");
        }else{
            res.status(200);
            res.send(agg);
        }
    });
};

/* Buscar una persona por el ID */
var getById =   function(req,res){
    model.findById(req.params.id, function(err,doc){
        if (err){
            res.status(500);
            res.send("No encontrado.");
        }else{
            res.status(200);
            res.send(doc);
        }
    });
};

/* Actualizar una persona por el ID */
var update  =   function(req,res){
    model.findById(req.params.id, function(err,doc){
        if (err){
            res.status(500);
            res.send("No encontrado.");
        }else{
            var agg =   new model(req.body);
            agg.save(function(err){
                if (err){
                    res.status(500);
                    res.send("Error al actualizar datos.");
                }else{
                    res.status(200);
                    res.send(agg);
                }
            });
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
