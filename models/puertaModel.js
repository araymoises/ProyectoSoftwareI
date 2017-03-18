var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var puertaModel = new Schema ({
  "_id"         :String,
  "nombre"      :String,
  "modulo"      :String,
  "piso"        :String,
  "tipoPuerta"  :[String]
});

module.exports = mongoose.model("Puerta", puertaModel);
