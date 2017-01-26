var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personaModel = new Schema ({
  "id"      :String,
  "cedula"  :String,
  "nombre"  :String,
  "apellido":String,
  "tipo_P"  :String,
});

module.exports = mongoose.model("Persona", personaModel);
