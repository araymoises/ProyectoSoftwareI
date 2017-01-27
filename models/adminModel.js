var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminModel = new Schema ({
  "id"        :String,
  "user"      :String,
  "password"  :String,
  "persona"   :String,
  "cedula"    :String,
  "nombre"    :String,
  "apellido"  :String
});

module.exports = mongoose.model("Admin", adminModel);
