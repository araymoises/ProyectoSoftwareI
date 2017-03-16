var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tipoPersonaModel = new Schema ({
  "_id"         :String,
  "nombre"      :String,
  "restriccion" :[String]
});

module.exports = mongoose.model("TipoPersona", tipoPersonaModel);
