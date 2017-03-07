var model   =   require('./../models/personaModel');
const util = require('util');

/* mostrar todas las puertas */
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

    /* primero buscamos si la persona existe en la matriculas*/
    /*  aqui me enredé, que pasa si el usuario ya está en la matrícula
        por eso hice la consulta de item para saber eso, pero lo que me confunde viendo ese codigo
        que hice en la parte del else, como hago solamente para seleccionar el alumno deseado
        y solamentemente insertar en los campos materia.

        O con solo ejecutar el bloque del if estando el usuario en la bd se agregado solo los campos de la materia?
    */
    var item    =   getById(req,res);
    var agg =   new model(req.body);;
    if (item != false){
        /* si la persona no existe en la matricula se agrega con una materia */
        agg.materia.push({_id: req.body._id, seccion: req.body.seccion})
    }
    agg.save(function(err){
        if (err){
            res.status(500);
            res.send(false);
        }else{
            res.status(200);
            res.send(addMatricula);
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
