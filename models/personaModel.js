var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personaModel = new Schema ({
  "id"      :String,
  "cedula"  :String,
  "nombre"  :String,
  "apellido":String,
  "sexo"    :Boolean,
  "tipo_P"  :String,
  "blocked" :Boolean
});

module.exports = mongoose.model("Persona", personaModel);
