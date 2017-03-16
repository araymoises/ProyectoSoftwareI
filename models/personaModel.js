var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personaModel = new Schema ({
  "_id"         :String,
  "cedula"      :String,
  "nombre"      :String,
  "apellido"    :String,
  "sexo"        :Boolean,
  "foto"        :String,
  "tipoPersona" :[String],
  "status"      :Boolean
});

module.exports = mongoose.model("Persona", personaModel);
